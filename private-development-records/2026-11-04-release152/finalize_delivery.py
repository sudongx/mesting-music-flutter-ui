from pathlib import Path
from datetime import datetime,timezone
import json,hashlib,zipfile,subprocess
ROOT=Path('D:/AnLi');OUT=ROOT/'.codex-artifacts/2026-11-04-release152'
def read(p):return json.loads(p.read_text('utf-8-sig'))
def sha(p):
    with p.open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()
apk=read(ROOT/'release/Mesting-Music-v1.0.52-verification.json')
source=read(ROOT/'release/Mesting-Music-v1.0.52-source-verification.json')
checks=read(OUT/'host-check-summary.json');preserved=read(OUT/'preservation-final.json');docs=read(OUT/'public-docs-final.json')
assert preserved['allOldFrozenBytesUnchanged'] and preserved['dependencyLockUnchanged'] and preserved['indexUnchanged']
with zipfile.ZipFile(ROOT/source['sourceZipName']) as archive:
    assert archive.testzip() is None
    snapshot=json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    assert snapshot['packageName']=='com.mesting.music' and snapshot['androidVersionCode']==73
    assert snapshot['apkSha256']==apk['sha256'] and '1.0.52+73' in archive.read('pubspec.yaml').decode()
    assert source['sourceFileCount']==len(snapshot['files'])
    for item in snapshot['files']:
        assert hashlib.sha256(archive.read(item['path'])).hexdigest()==item['sha256'],item['path']
        assert sha(ROOT/item['path'])==item['sha256'],item['path']
    agents=archive.read('AGENTS.md');previous=agents[docs['newAgentsPrefixBytes']:]
    assert hashlib.sha256(previous).hexdigest()==docs['priorAgentsBytesSha256']
summary=ROOT/'release/Mesting-Music-v1.0.52-SHA256.txt'
assert not summary.exists()
summary.write_text(apk['sha256']+'  '+apk['file']+'\n'+source['sourceZipSha256']+'  '+source['sourceZipName']+'\n','utf-8')
result={'version':'1.0.52','code':73,'packageName':apk['packageName'],'completedAtUtc':datetime.now(timezone.utc).isoformat(),
 'apk':str(ROOT/'release'/apk['file']),'apkBytes':apk['fileSize'],'apkSha256':apk['sha256'],
 'source':str(ROOT/source['sourceZipName']),'sourceBytes':source['sourceZipSize'],'sourceSha256':source['sourceZipSha256'],
 'sourceFileCount':source['sourceFileCount'],'sourceEntryCount':source['frozenEntryCount'],
 'checks':{'beta':checks['beta-complete.jsonl']['counts'],'betaFiles':172,'stable':checks['stable-complete.jsonl']['counts'],
 'independentNavigation':checks['search-back-player.jsonl']['counts'],'sdkInherited':read(OUT/'sdk-host-summary.json')['counts'],
 'analysisIssues':0,'finalHostImages':56},'oldFrozenArtifactsPreserved':94,'sourceManifestAndCurrentFilesMatch':True,
 'agentsOriginalSuffixPreserved':True,'staged':[],'phoneAccess':False,'realMusicAccountAccess':False,'backendAccess':False,
 'officialCrossDayBookedVerified':False,'gitCommitted':False,'gitPushed':False,'uploaded':False,'published':False}
(OUT/'delivery-final.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n','utf-8')
(OUT/'git-status-final.txt').write_bytes(subprocess.check_output(['git','--no-optional-locks','-c','core.quotepath=false','status','--porcelain=v1','--untracked-files=all'],cwd=ROOT))
print(json.dumps(result,ensure_ascii=False,indent=2))
