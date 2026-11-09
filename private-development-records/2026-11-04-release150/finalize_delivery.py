"""Final independent delivery receipts; do not mutate the frozen source/APK."""
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json
import zipfile
import subprocess

ROOT=Path('D:/AnLi')
OUT=ROOT/'.codex-artifacts/2026-11-04-release150'
def read(path):return json.loads(path.read_text('utf-8-sig'))
def sha(path):
    with path.open('rb') as stream:return hashlib.file_digest(stream,'sha256').hexdigest()

apk=read(ROOT/'release/Mesting-Music-v1.0.50-verification.json')
source=read(ROOT/'release/Mesting-Music-v1.0.50-source-verification.json')
preserved=read(OUT/'preservation-final.json')
checks=read(OUT/'host-check-summary.json')
docs=read(OUT/'delivery-documents.json')
assert apk['androidVersionCode']==source['androidVersionCode']==71
assert apk['packageName']=='com.mesting.music'
assert sha(ROOT/'release'/apk['file'])==apk['sha256']
assert sha(ROOT/source['sourceZipName'])==source['sourceZipSha256']
assert preserved['oldFrozenCount']==90 and preserved['allOldFrozenBytesUnchanged']
assert preserved['signingAndLockUnchanged'] and preserved['indexUnchanged']
with zipfile.ZipFile(ROOT/source['sourceZipName']) as archive:
    manifest=read(ROOT/'docs/validation-2026-11-04-v1.0.50.json')
    assert manifest['apk']['sha256']==apk['sha256']
    snapshot=json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    assert snapshot['packageName']=='com.mesting.music'
    assert snapshot['androidVersionCode']==71
    assert snapshot['apkSha256']==apk['sha256']
    assert '1.0.50+71' in archive.read('pubspec.yaml').decode()
    assert source['sourceFileCount']==len(snapshot['files'])
    for item in snapshot['files']:
        assert hashlib.sha256(archive.read(item['path'])).hexdigest()==item['sha256']
        assert sha(ROOT/item['path'])==item['sha256'],item['path']
    agents=archive.read('AGENTS.md')
    previous=agents[agents.index(b'\n\n')+2:]
    assert hashlib.sha256(previous).hexdigest()==docs['priorAgentsBytesSha256']

summary=ROOT/'release/Mesting-Music-v1.0.50-SHA256.txt'
assert not summary.exists()
summary.write_text(apk['sha256']+'  '+apk['file']+'\n'+source['sourceZipSha256']+
    '  '+source['sourceZipName']+'\n','utf-8')
result={'version':'1.0.50','code':71,'packageName':apk['packageName'],
    'completedAtUtc':datetime.now(timezone.utc).isoformat(),
    'apk':str(ROOT/'release'/apk['file']),'apkBytes':apk['fileSize'],'apkSha256':apk['sha256'],
    'source':str(ROOT/source['sourceZipName']),'sourceBytes':source['sourceZipSize'],
    'sourceSha256':source['sourceZipSha256'],'sourceFileCount':source['sourceFileCount'],
    'sourceEntryCount':source['frozenEntryCount'],'checks':{
        'beta':checks['beta-complete.jsonl']['counts'],
        'stable':checks['stable-complete.jsonl']['counts'],
        'independentNavigation':checks['search-back-player.jsonl']['counts'],
        'analysisIssues':checks['analysisIssues'],'finalHostImages':checks['finalHostFrames']},
    'oldFrozenArtifactsPreserved':90,'sourceManifestAndCurrentFilesMatch':True,
    'agentsOriginalSuffixPreserved':True,'staged':[],
    'phoneAccess':False,'realMusicAccountAccess':False,'backendAccess':False,
    'gitCommitted':False,'gitPushed':False,'uploaded':False,'published':False}
(OUT/'delivery-final.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n','utf-8')
(OUT/'git-status-final.txt').write_bytes(subprocess.check_output(['git','--no-optional-locks',
    '-c','core.quotepath=false','status','--porcelain=v1','--untracked-files=all'],cwd=ROOT))
print(json.dumps(result,ensure_ascii=False,indent=2))
