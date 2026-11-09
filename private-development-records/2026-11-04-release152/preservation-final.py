from pathlib import Path
import hashlib,json,subprocess
from datetime import datetime,timezone
ROOT=Path('D:/AnLi');OUT=ROOT/'.codex-artifacts/2026-11-04-release152'
reference=json.loads((OUT/'preservation-before.json').read_text('utf-8'))
def sha(path):
    with path.open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()
for item in reference['frozen']:
    p=Path(item['path']);assert p.stat().st_size==item['bytes'] and sha(p)==item['sha256'],p
assert sha(ROOT/'pubspec.lock')==reference['pubspecLockSha256']
assert sha(ROOT/'.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')==reference['signingKeySha256']
def git(*args):return subprocess.check_output(['git','--no-optional-locks',*args],cwd=ROOT).decode().strip()
assert git('rev-parse','HEAD')==reference['head']
assert git('branch','--show-current')==reference['branch']
assert not git('diff','--cached','--name-only')
assert sha(ROOT/git('rev-parse','--git-path','index'))==reference['indexSha256']
changed=[]
for item in reference['files']:
    p=ROOT/item['path'];assert p.exists(),p
    if sha(p)!=item['sha256']:changed.append(item['path'])
result={'verifiedAtUtc':datetime.now(timezone.utc).isoformat(),'oldFrozenCount':len(reference['frozen']),
    'allOldFrozenBytesUnchanged':True,'signingUnchanged':True,'dependencyLockUnchanged':True,
    'head':reference['head'],'branch':reference['branch'],'indexUnchanged':True,'staged':[],
    'changedExistingFiles':changed,'deviceAccess':False,'realAccountAccess':False,'uploaded':False,'published':False}
(OUT/'preservation-final.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n','utf-8')
print(json.dumps({**result,'changedExistingFiles':len(changed)},ensure_ascii=False))
