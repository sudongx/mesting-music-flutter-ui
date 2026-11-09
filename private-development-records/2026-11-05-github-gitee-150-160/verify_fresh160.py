from common160 import *
import sys
host=sys.argv[1];assert host in {'github','gitee'}
target=OUT/('fresh-'+host+'.git');assert not target.exists()
git('init','--bare',str(target))
env=dict(os.environ,GIT_TERMINAL_PROMPT='0',GCM_INTERACTIVE='Never',GIT_OPTIONAL_LOCKS='0')
p=read(OUT/'prepared-state.json')
specs=['refs/tags/'+row['tag']+':refs/tags/'+row['tag'] for row in p['versions']]
url=f'https://{host}.com/{REPO}.git'
result=subprocess.run(['git','--git-dir='+str(target),'fetch','--depth=1','--no-tags',url,*specs],env=env,capture_output=True)
(OUT/(host+'-fresh-fetch.log')).write_bytes(result.stdout+result.stderr)
assert result.returncode==0,host+' fresh fetch failed'
counts=[]
for row in p['versions']:
    commit=subprocess.check_output(['git','--git-dir='+str(target),'rev-parse',row['tag']+'^{}']).decode().strip()
    assert commit==row['commit']
    count=archive_verify(commit,read(OUT/(row['tag']+'-source-audit.json')),repository=target)
    counts.append({'tag':row['tag'],'commit':commit,'sourceEntriesVerified':count})
    save(OUT/(host+'-fresh-source-progress.json'),counts)
result=subprocess.run(['git','--git-dir='+str(target),'fsck','--full','--strict'],env=env,capture_output=True)
(OUT/(host+'-fresh-fsck.log')).write_bytes(result.stdout+result.stderr);assert result.returncode==0
save(OUT/(host+'-fresh-verification.json'),{'versions':counts,'sourceEntriesVerified':sum(x['sourceEntriesVerified'] for x in counts),'independentFetch':True,'shallowSelectedTagsOnly':True,'strictFsck':True,'complete':True})
print(host+' independent frozen-source verification complete.',flush=True)
