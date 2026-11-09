"""Independent remote source readback while release assets are uploading."""
from common149 import *
prepared=read(OUT/'prepared-state.json')
clone=OUT/'fresh-clone'
env=dict(os.environ,GIT_TERMINAL_PROMPT='0',GCM_INTERACTIVE='Never')
if not clone.exists():
    with (OUT/'fresh-clone.log').open('wb') as log:
        result=subprocess.run(['git','clone','--config','core.autocrlf=false','--no-checkout','--branch','beta','https://github.com/'+REPO+'.git',str(clone)],cwd=ROOT,stdout=log,stderr=subprocess.STDOUT,env=env)
    assert result.returncode==0,'Inspect fresh-clone.log'
def fresh(*args):return subprocess.check_output(['git','--no-optional-locks',*args],cwd=clone,env=env).decode().strip()
assert fresh('rev-parse','HEAD')==prepared['betaTip']
checks=[]
for row in prepared['versions']:
    assert fresh('rev-parse',row['tag']+'^{}')==row['commit']
    path=OUT/(row['tag']+'-source-audit.json');audit=read(path)
    count=archive_verify(row['commit'],audit,repository=clone)
    checks.append({'tag':row['tag'],'commit':row['commit'],'frozenZipEntriesVerified':count,'auditSha256':sha(path)})
    save(OUT/'fresh-source-progress.json',checks)
    print(json.dumps({'freshCloneVerified':row['tag'],'entries':count,'completed':len(checks)}),flush=True)
assert sum(row['frozenZipEntriesVerified'] for row in checks)==50809
print('Fresh remote clone: all 50,809 frozen source entries match.',flush=True)
