"""Handoff-only receipt: check is strictly local/read-only and never uses ADB."""
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path
import hashlib
import json
import subprocess
import sys

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
RELEASE = ROOT/'.codex-artifacts/2026-11-07-release176/after.json'
DOCUMENT = 'HANDOFF-SESSION-2026-11-07-v1.0.75-76-TO-NEW-CHAT.md'
mode = sys.argv[1] if len(sys.argv)>1 else 'check'
assert mode in ['before','after','check']
release = json.loads(RELEASE.read_text('utf8'))

def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream,'sha256').hexdigest()

def git(*args):
    return subprocess.check_output(['git','--no-optional-locks',*args],cwd=ROOT)

def record(relative):
    path = ROOT/relative
    return {'path':relative,'bytes':path.stat().st_size,'sha256':sha(path)}

def issue(row):
    path = ROOT/row['path']
    return row['path'] if (not path.is_file() or sha(path)!=row['sha256'] or
        ('bytes' in row and path.stat().st_size!=row['bytes'])) else None

baseline = json.loads((OUT/('after.json' if mode=='check' else 'before.json')).read_text('utf8')) if mode!='before' else release
assert git('branch','--show-current').decode().strip()==baseline['branch']=='beta'
assert git('rev-parse','HEAD').decode().strip()==baseline['head']
assert not git('diff','--cached','--name-only','-z')
for key,path in [('indexSha256','.git/index'),('lockSha256','pubspec.lock'),
    ('signingSha256','.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')]:
    assert sha(ROOT/path)==baseline[key],key
with ThreadPoolExecutor(max_workers=6) as pool:
    for category in ['frozenArtifacts','productFiles','currentFiles']:
        failures = [p for p in pool.map(issue,baseline[category]) if p]
        assert set(failures)==({'AGENTS.md'} if mode=='after' and category=='currentFiles' else set()),(category,failures)
assert not any((ROOT/p).exists() for p in release['authorizedRetiredPaths'])
selected = sorted({p for p in git('ls-files','--cached','--others','--exclude-standard','-z').decode('utf8').split('\0')
                   if p and not p.startswith('android/build/') and (ROOT/p).is_file()})
expected = {r['path'] for r in baseline['currentFiles']}
assert expected.issubset(selected)
added = sorted(set(selected)-expected)
if mode=='before':
    # Release176 deliberately omitted the root24 snapshot and generated QA
    # files from its source ZIP. Pin their current bytes as additional local
    # files without pretending they were release compilation inputs.
    extra_before = added
else:
    assert added==([DOCUMENT] if mode=='after' else []),added
    assert sha(RELEASE)==baseline['release176ReceiptSha256']
    assert (ROOT/'AGENTS.md').read_bytes().endswith((OUT/'AGENTS-before.bin').read_bytes())

if mode=='check':
    assert sha(OUT/'verify_handoff.py')==baseline['verifierSha256']
    print(json.dumps({'readOnlyReceptionVerified':True,'version':'1.0.76','code':97,
        'frozenArtifacts':len(baseline['frozenArtifacts']),'productInputs':len(baseline['productFiles']),
        'currentFiles':len(selected),'retiredPathsAbsent':len(release['authorizedRetiredPaths']),
        'headIndexLockSigningUnchanged':True,'originalAgentsBytesPreservedAsSuffix':True,
        'release176ReceiptUnchanged':True,'stable120FpsAccepted':False,
        'pendingRuntimeTasks':False,'waitingForUser':True},indent=2))
    raise SystemExit(0)

target = OUT/(mode+'.json')
assert not target.exists(),'Never overwrite a handoff receipt'
if mode=='before':
    assert not (ROOT/DOCUMENT).exists()
    assert not (OUT/'AGENTS-before.bin').exists()
    (OUT/'AGENTS-before.bin').write_bytes((ROOT/'AGENTS.md').read_bytes())
with ThreadPoolExecutor(max_workers=6) as pool:
    current = list(pool.map(record,selected))
receipt = {'createdAtUtc':datetime.now(timezone.utc).isoformat(),'handoffOnly':True,
    'version':'1.0.76','androidVersionCode':97,'phase':mode,
    **{k:release[k] for k in ['head','branch','indexSha256','lockSha256','signingSha256']},
    'release176ReceiptSha256':sha(RELEASE),'verifierSha256':sha(OUT/'verify_handoff.py'),
    'frozenArtifacts':release['frozenArtifacts'],'productFiles':release['productFiles'],
    'currentFiles':current,'authorizedRetiredPaths':release['authorizedRetiredPaths'],
    'frozenDeliveriesAndRelease176RecordsRewritten':False,
    'productModifiedRetestedOrRebuiltDuringHandoff':False,
    'phoneAdbAccountNasSignerAccessDuringHandoff':False,
    'pendingCodingBuildInstallSamplingExportUploadOrDeploymentTasks':False,
    'unmetAcceptance':release['acceptanceGaps'],
    'allowedChanges':['Append one AGENTS header preserving all original bytes','Add '+DOCUMENT],
    'additionalFilesPinnedBeyondReleaseSource':extra_before if mode=='before' else baseline['additionalFilesPinnedBeyondReleaseSource'],
    'gitCommitted':False,'gitPushed':False,'uploaded':False,'published':False,
    'receiverInstruction':'Read the total handoff and AGENTS, run only this local read-only check, report completed work/cautions/open acceptance gaps, then wait. Do not edit, retest/build, access ADB/device/accounts/NAS, change Git, publish, or create another chat.'}
with target.open('x',encoding='utf8') as stream:
    stream.write(json.dumps(receipt,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'phase':mode,'frozenArtifacts':len(release['frozenArtifacts']),
    'productInputs':len(release['productFiles']),'currentFiles':len(current),
    'newDocumentAdded':mode=='after','onlyAgentsHeaderChanged':mode=='after'},indent=2))
