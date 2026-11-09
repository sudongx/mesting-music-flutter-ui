"""Final readback: frozen files, original key, complete source and checkout boundary."""
from pathlib import Path
import hashlib
import json
import os
import subprocess
import zipfile

root = Path('D:/AnLi')
os.environ['GIT_OPTIONAL_LOCKS'] = '0'
out = Path(__file__).resolve().parent
def read(path): return json.loads(path.read_text('utf-8-sig'))
def digest(path):
    with path.open('rb') as stream: return hashlib.file_digest(stream, 'sha256').hexdigest()

before = read(out/'preservation-before.json')
apk = read(root/'release/Mesting-Music-v1.0.44-verification.json')
source = read(root/'release/Mesting-Music-v1.0.44-source-verification.json')
assert digest(root/'release'/apk['file']) == apk['sha256']
assert digest(root/source['sourceZipName']) == source['sourceZipSha256']
with zipfile.ZipFile(root/source['sourceZipName']) as archive:
    assert archive.testzip() is None
    snapshot = read_manifest = json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    assert snapshot['version'] == '1.0.44' and snapshot['androidVersionCode'] == 65
    assert len(snapshot['files']) == source['sourceFileCount']
    for item in snapshot['files']:
        assert digest(root/item['path']) == item['sha256'], item['path']
        assert hashlib.sha256(archive.read(item['path'])).hexdigest() == item['sha256']
    assert not any('.codex-artifacts' in name or '.firecrawl' in name for name in archive.namelist())
for item in before['frozen']:
    path = Path(item['path'])
    assert path.stat().st_size == item['bytes'] and digest(path) == item['sha256'], path
assert digest(root/'pubspec.lock') == before['pubspecLockSha256']
assert digest(root/'.codex-artifacts/2026-10-26-beta17-signing/debug.keystore') == before['signingKeySha256']
assert (root/'AGENTS.md').read_bytes().endswith((out/'AGENTS-before.md').read_bytes())
branch = subprocess.check_output(['git','branch','--show-current'], cwd=root, text=True).strip()
head = subprocess.check_output(['git','rev-parse','HEAD'], cwd=root, text=True).strip()
assert branch == before['branch'] and head == before['head']
assert not subprocess.check_output(['git','diff','--cached','--name-only'], cwd=root).strip()
checks = read(out/'host-check-summary.json')
assert checks['analysisPassed'] and all(checks[n]['completeAndSuccessful'] for n in (
    'beta-complete.jsonl','stable-complete.jsonl','search-back-player.jsonl'))
assert read(out/'local-apk-notes-verification.json')['versionCode'] == 65
checksum = root/'release/Mesting-Music-v1.0.44-SHA256.txt'
assert not checksum.exists()
checksum.write_text(apk['sha256']+'  '+apk['file']+'\n'+source['sourceZipSha256']+'  '+
    source['sourceZipName']+'\nAPK bytes: '+str(apk['fileSize'])+'\nSource ZIP bytes: '+
    str(source['sourceZipSize'])+'\n', 'utf8')
status = subprocess.check_output(['git','status','--porcelain=v1','--untracked-files=all'], cwd=root, text=True).splitlines()
result = {
    'version':'1.0.44', 'androidCode':65,
    'apk':{'path':'release/'+apk['file'],'bytes':apk['fileSize'],'sha256':apk['sha256']},
    'source':{'path':source['sourceZipName'],'bytes':source['sourceZipSize'],
              'sha256':source['sourceZipSha256'],'files':source['sourceFileCount']},
    'allWorkingEntriesMatchFrozenSource':True, 'previousFrozenFilesUnchanged':len(before['frozen']),
    'originalSigningKeyAndLockUnchanged':True, 'previousAgentsBytesRetained':True,
    'branch':branch, 'head':head, 'stagedPaths':[],
    'trackedChanges':sum(not line.startswith('??') for line in status),
    'untrackedFiles':sum(line.startswith('??') for line in status),
    'backgroundRealDeviceAccepted':False, 'officialProfileHistoryTotalFixed':False,
    'october683MinutesRecovered':False, 'legacyWeblogAndHeldNativeJournalPreserved':True,
    'deviceAccess':False, 'realAccountAccess':False, 'backendAccess':False,
    'gitCommitted':False, 'gitPushed':False, 'uploaded':False, 'published':False,
}
(out/'delivery-final.json').write_text(json.dumps(result, ensure_ascii=False, indent=2)+'\n', 'utf8')
print(json.dumps(result, ensure_ascii=False, indent=2))
