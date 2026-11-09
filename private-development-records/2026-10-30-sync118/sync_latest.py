"""Apply the user's explicit no-backup, in-place synchronization request.

Only reset the verified beta checkout. Do not clean ignored or untracked files.
Compare protected local artifacts/configuration by hash without copying them.
"""
from pathlib import Path
import hashlib,json,os,subprocess,urllib.request

ROOT=Path('D:/AnLi').resolve()
OUT=Path(__file__).resolve().parent
EXPECTED='8763551c0cc39c1c25f60e42fd49624f58d91a89'
REPO='Mesting42/mesting-music-flutter'

def git(*args):
    env=os.environ.copy()
    env.update({'GIT_OPTIONAL_LOCKS':'0','GIT_TERMINAL_PROMPT':'0','GCM_INTERACTIVE':'Never'})
    p=subprocess.run(['git',*args],cwd=ROOT,capture_output=True,env=env)
    if p.returncode:raise RuntimeError(p.stderr.decode('utf-8',errors='replace'))
    return p.stdout

def sha(path):
    with path.open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()

assert Path(git('rev-parse','--show-toplevel').decode().strip()).resolve()==ROOT
assert git('branch','--show-current').decode().strip()=='beta'
assert git('remote','get-url','origin').decode().strip()=='https://github.com/'+REPO+'.git'
assert git('rev-parse','origin/beta').decode().strip()==EXPECTED
remote=git('ls-remote','origin','refs/heads/beta').decode().split()[0]
assert remote==EXPECTED,'Remote advanced; re-check before touching working files'
git('merge-base','--is-ancestor','HEAD',EXPECTED)
git('merge-base','--is-ancestor','v1.0.18',EXPECTED)
request=urllib.request.Request('https://api.github.com/repos/'+REPO+'/releases/latest',
    headers={'User-Agent':'Mesting-source-sync','Accept':'application/vnd.github+json','Cache-Control':'no-cache'})
with urllib.request.urlopen(request,timeout=40) as response:release=json.load(response)
assert release['tag_name']=='v1.0.18' and not release['draft'] and not release['prerelease']

protected=set(ROOT.glob('*.zip'))
protected.update(ROOT.glob('*.apk'))
protected.update(p for p in (ROOT/'release').rglob('*') if p.is_file())
# These names locate private configuration without exposing its contents.
scan=subprocess.run(['rg','--files','--hidden','--no-ignore','android',
    '-g','*.jks','-g','*.keystore','-g','key.properties','-g','local.properties',
    '-g','!**/build/**','-g','!**/.gradle/**'],cwd=ROOT,capture_output=True)
assert scan.returncode in (0,1)
protected.update(ROOT/p for p in scan.stdout.decode('utf-8').splitlines())
# Tracked release metadata follows the remote tree, including its line endings.
# Protect only local delivery files and private configuration from the reset.
tracked=set()
for item in git('ls-tree','-rz',EXPECTED).split(b'\0'):
    if item:tracked.add(item.split(b'\t',1)[1].decode('utf-8'))
protected={p for p in protected if p.relative_to(ROOT).as_posix() not in tracked}
before={p.relative_to(ROOT).as_posix():sha(p) for p in protected}
old_head=git('rev-parse','HEAD').decode().strip()
if old_head!=EXPECTED:
    print('Verified latest beta / formal release; applying authorized direct sync without a backup.',flush=True)
    print(git('reset','--hard',EXPECTED).decode().strip(),flush=True)
else:
    print('Latest beta is already applied; completing verification without another reset.',flush=True)
assert git('rev-parse','HEAD').decode().strip()==EXPECTED
assert git('branch','--show-current').decode().strip()=='beta'
assert not git('diff','--name-only').strip()
assert not git('diff','--cached','--name-only').strip()
for name,digest in before.items():assert sha(ROOT/name)==digest,name

# Original archival digests independently verify delivery files predating this run.
prior=ROOT/'.codex-artifacts/2026-10-29-github-113-117/workspace-before.json'
original_binary_checks=0
if prior.exists():
    old_artifacts=json.loads(prior.read_text(encoding='utf-8'))['artifacts']
    for name,digest in old_artifacts.items():
        if Path(name).suffix.lower() in {'.apk','.zip'}:
            assert sha(ROOT/name)==digest,name
            original_binary_checks+=1

manifest=json.loads((ROOT/'docs/version-archive/v1.0.18-source-manifest.json').read_text(encoding='utf-8'))
assert manifest['version']=='1.0.18' and manifest['androidVersionCode']==39
pointer_overrides=set(git('diff','--name-only','v1.0.18',EXPECTED).decode().splitlines())
allowed_archive_updates={
    'AGENTS.md','BETA_ARCHIVE.md','HANDOFF-GITHUB-2026-10-30-v1.0.18.md','README.md',
    'docs/CONTINUE-BETA.md','docs/version-archive/CONTINUE-BETA-BEFORE-v1.0.18-ARCHIVE.md',
    'docs/version-archive/GITHUB-ARCHIVE-2026-10-30-v118-verification.json',
    'release/Mesting-Music-v1.0.18-source-verification.json',
    'release/Mesting-Music-v1.0.18-source.sha256'}
assert pointer_overrides<=allowed_archive_updates
for name in pointer_overrides:
    assert (ROOT/name).read_bytes()==git('show',EXPECTED+':'+name),name
verified=0
for f in manifest['files']:
    if f['path'] not in pointer_overrides:
        p=ROOT/f['path']
        assert p.stat().st_size==f['size'] and sha(p)==f['sha256'],f['path']
        verified+=1
lock='6316dd4a0989c4a89b32d2a9a82bf603203743175909b52395a2d97cc4f2b5cc'
assert sha(ROOT/'pubspec.lock')==lock
assert '1.0.18/code39' in (ROOT/'AGENTS.md').read_text(encoding='utf-8')
status=git('status','--porcelain=v1','--branch','--untracked-files=all').decode('utf-8')
result={'date':'2026-10-30','root':str(ROOT),'repository':'https://github.com/'+REPO,
    'branch':'beta','previousHead':old_head,'head':EXPECTED,'upstream':'origin/beta',
    'productVersion':'1.0.18','androidVersionCode':39,'latestRelease':release['html_url'],
    'userRequestedNoBackup':True,'backupCreated':False,'gitCleanUsed':False,
    'trackedWorkingTreeMatchesRemote':True,'indexMatchesRemote':True,
    'frozenSourceFilesByteVerified':verified,'archivePointerOverrides':sorted(pointer_overrides),
    'originalManifestFiles':len(manifest['files']),'lockfileSha256':lock,
    'protectedLocalFilesPreserved':len(before),'protectedSha256':before,'gitStatus':status,
    'originalDeliveryDigestsVerified':original_binary_checks,
    'deviceAccess':False,'musicBackendAccess':False,'productBuildRun':False}
(OUT/'sync-verification.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Synchronized beta to',EXPECTED,flush=True)
print('Frozen source files byte-verified:',verified,'; protected local files preserved:',len(before),flush=True)
print(status.strip(),flush=True)
