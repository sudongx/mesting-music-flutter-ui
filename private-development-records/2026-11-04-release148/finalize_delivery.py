"""Create final public checksums only after both new artifacts are frozen."""
from pathlib import Path
import hashlib,json,subprocess,zipfile

ROOT=Path('D:/AnLi')
OUT=ROOT/'.codex-artifacts/2026-11-04-release148'
def read(path): return json.loads(path.read_text('utf-8-sig'))
def digest(path):
    with path.open('rb') as stream:return hashlib.file_digest(stream,'sha256').hexdigest()
apk=ROOT/'release/Mesting-Music-v1.0.48.apk'
source=ROOT/'Mesting-Music-v1.0.48-source.zip'
a=read(ROOT/'release/Mesting-Music-v1.0.48-verification.json')
s=read(ROOT/'release/Mesting-Music-v1.0.48-source-verification.json')
p=read(OUT/'preservation-final.json')
b=read(OUT/'preservation-before.json')
checks=read(OUT/'host-check-summary.json')
assert digest(apk)==a['sha256'] and digest(source)==s['sourceZipSha256']
assert p['oldFrozenCount']==86 and p['allOldFrozenBytesUnchanged']
assert p['signingAndLockUnchanged'] and p['indexUnchanged'] and p['staged']==[]
assert all((ROOT/item['path']).is_file() for item in b['files']), 'No existing source may disappear'
agents=(ROOT/'AGENTS.md').read_bytes()
old_entry='**2026-11-04 本会话总移交'.encode('utf-8')
original_agents=agents[agents.index(old_entry):]
assert hashlib.sha256(original_agents).hexdigest()==next(item['sha256'] for item in b['files'] if item['path']=='AGENTS.md')
with zipfile.ZipFile(source) as archive:
    manifest=json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    assert manifest['version']=='1.0.48' and manifest['androidVersionCode']==69
    assert manifest['apkSha256']==a['sha256']
    assert len(manifest['files'])==s['sourceFileCount']
sha_file=ROOT/'release/Mesting-Music-v1.0.48-SHA256.txt'
assert not sha_file.exists(), 'Never overwrite an existing delivery checksum'
sha_file.write_text(a['sha256']+'  release/'+apk.name+'\n'+s['sourceZipSha256']+'  '+source.name+'\n','utf-8')
result={'version':'1.0.48','androidVersionCode':69,'apk':str(apk),'apkSha256':a['sha256'],
    'source':str(source),'sourceSha256':s['sourceZipSha256'],'sourceFileCount':s['sourceFileCount'],
    'sourceEntryCount':s['frozenEntryCount'],'checksums':str(sha_file),
    'originalSignature':a['upgradeIdentityVerified'],'actualAndroidCompilation':True,
    'betaPassed':checks['beta-complete.jsonl']['counts']['success'],
    'betaSkipped':checks['beta-complete.jsonl']['counts'].get('skipped',0),
    'stablePassed':checks['stable-complete.jsonl']['counts']['success'],
    'independentNavigationPassed':checks['search-back-player.jsonl']['counts']['success'],
    'analysisIssues':0,'reviewedHostFrames':checks['finalHostFrames'],
    'singleCleanBetaInvocation':False,'oldFrozenArtifactsBytePreserved':86,
    'allExistingSourceFilesRetained':True,'originalAgentsBytesPreservedBelowNewEntry':True,
    'signingAndLockUnchanged':True,'branch':p['branch'],'head':p['head'],'staged':[],
    'phoneAccess':False,'realAccountAccess':False,'backendAccess':False,
    'gitCommitted':False,'gitPushed':False,'uploaded':False,'published':False}
(OUT/'delivery-final.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n','utf-8')
(OUT/'git-status-final.txt').write_bytes(subprocess.check_output(['git','--no-optional-locks','-c','core.quotepath=false','status','--porcelain=v1','--untracked-files=all'],cwd=ROOT))
print(json.dumps(result,ensure_ascii=False,indent=2))
