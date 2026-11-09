"""Record final retained source identity without Git or frozen-artifact writes."""
from pathlib import Path
from datetime import datetime,timezone
import json,hashlib,subprocess
ROOT=Path('D:/AnLi');OUT=Path(__file__).resolve().parent

def digest(p):
 with p.open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()
def git(*a):return subprocess.check_output(['git','--no-optional-locks',*a],cwd=ROOT).decode('utf-8')
before=json.loads((OUT/'state-before.json').read_text('utf-8'))
apk=json.loads((ROOT/'release/Mesting-Music-v1.0.60-verification.json').read_text('utf-8'))
source=json.loads((ROOT/'release/Mesting-Music-v1.0.60-source-verification.json').read_text('utf-8'))
assert git('branch','--show-current').strip()==before['branch'] and git('rev-parse','HEAD').strip()==before['head']
assert not git('diff','--cached','--name-only').strip()
assert digest(ROOT/'pubspec.lock')==before['lockSha256']
assert digest(ROOT/'.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')==before['signingSha256']
new=[]
for path,expected in [('release/Mesting-Music-v1.0.60.apk',apk['sha256']),('Mesting-Music-v1.0.60-source.zip',source['sourceZipSha256'])]:
 p=ROOT/path;h=digest(p);assert h==expected;new.append({'path':path,'bytes':p.stat().st_size,'sha256':h})
(ROOT/'release/Mesting-Music-v1.0.60-SHA256.txt').write_text('\n'.join(f"{e['sha256']}  {Path(e['path']).name}" for e in new)+'\n','utf-8')
files=[]
for rel in sorted(set(git('ls-files','--cached','--others','--exclude-standard','-z').split('\0'))):
 p=ROOT/rel
 if rel and p.is_file() and not rel.startswith('android/build/'):
  files.append({'path':rel,'bytes':p.stat().st_size,'sha256':digest(p)})
known={e['path']:e for e in files};changed=[]
for e in before['files']:
 assert e['path'] in known,e['path']
 if e['sha256']!=known[e['path']]['sha256']:changed.append(e['path'])
assert all(not p.startswith(('android/','third_party/')) for p in changed)
for e in before['frozenArtifacts']:
 p=ROOT/e['path'];assert p.stat().st_size==e['bytes'] and digest(p)==e['sha256'],e['path']
inputs=json.loads((OUT/'build-input-final.json').read_text('utf-8'))
for e in inputs['files']:assert digest(ROOT/e['path'])==e['sha256'],e['path']
record={'recordedAtUtc':datetime.now(timezone.utc).isoformat(),'version':'1.0.60','androidVersionCode':81,
'branch':before['branch'],'head':before['head'],'indexEmpty':True,'files':files,'frozenArtifacts':before['frozenArtifacts']+new,'lockSha256':before['lockSha256'],'signingSha256':before['signingSha256'],
'changedPreexistingSourcePaths':changed,'newSourcePaths':sorted(set(known)-{e['path'] for e in before['files']}),'sourceZipFiles':source['sourceFileCount'],'sourceZipEntries':source['frozenEntryCount'],'sourceZipByteAndCrcVerified':True,'all110OldFrozenArtifactsRehashedAndUnchanged':True,'productBuildInputsVerified':len(inputs['files']),
'deviceAccess':False,'adbUsed':False,'realAccountAccess':False,'backendAccess':False,'gitCommitted':False,'gitPushed':False,'uploaded':False,'published':False}
(OUT/'after.json').write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n','utf-8')
print(json.dumps({'version':'1.0.60','code':81,'sourceFiles':source['sourceFileCount'],'sourceEntries':source['frozenEntryCount'],'currentFiles':len(files),'frozenArtifacts':len(record['frozenArtifacts']),'indexEmpty':True,'changedPreexistingPaths':changed,'newArtifacts':new},ensure_ascii=True,indent=2))
