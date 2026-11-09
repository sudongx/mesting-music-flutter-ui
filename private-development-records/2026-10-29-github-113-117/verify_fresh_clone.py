"""Verify frozen releases using only objects fetched into a separate clean clone.

Read blobs through one batch process so no checkout filters can hide changes.
The existing dirty working tree and its index are never passed to checkout.
"""
import hashlib, os, subprocess
from common import *

clone=OUT/'fresh-clone'
archive=read(OUT/'archive-commits.json')
final_path=OUT/'archive-final.json'
expected=read(final_path)['commit'] if final_path.exists() else archive['finalCommit']

def cg(*args):
    env=os.environ.copy()
    env.update({'GIT_TERMINAL_PROMPT':'0','GCM_INTERACTIVE':'Never'})
    p=subprocess.run(['git','-c','core.longpaths=true',*map(str,args)],cwd=clone,
                     capture_output=True,env=env)
    if p.returncode: raise RuntimeError(p.stderr.decode('utf-8',errors='replace'))
    return p.stdout

assert (clone/'.git').is_dir()
assert cg('remote','get-url','origin').decode().strip()=='https://github.com/'+REPO+'.git'
assert cg('rev-parse','HEAD').decode().strip()==expected
cg('config','core.autocrlf','false')
cg('checkout','beta')
assert not cg('status','--porcelain=v1').strip(),'Fresh clone should be clean'
reader=subprocess.Popen(['git','cat-file','--batch'],cwd=clone,stdin=subprocess.PIPE,
                        stdout=subprocess.PIPE,stderr=subprocess.PIPE)
cache={}
results=[]
try:
    for row in archive['commits']:
        assert cg('rev-parse',row['tag']+'^{commit}').decode().strip()==row['commit']
        assert cg('show','-s','--format=%P',row['commit']).decode().strip()==row['parent']
        cg('merge-base','--is-ancestor',row['commit'],expected)
        tree={}
        for line in cg('ls-tree','-rz',row['commit']).split(b'\0'):
            if line:
                meta,name=line.split(b'\t',1)
                mode,kind,oid=meta.decode().split()
                assert kind=='blob'
                tree[name.decode()]=(mode,oid)
        proof=read(OUT/(row['tag']+'-source-manifest.json'))
        for f in proof['files']:
            oid=tree[f['path']][1]
            if oid not in cache:
                reader.stdin.write((oid+'\n').encode());reader.stdin.flush()
                header=reader.stdout.readline().decode().strip().split()
                assert header[0]==oid and header[1]=='blob'
                size=int(header[2]);data=reader.stdout.read(size)
                assert len(data)==size and reader.stdout.read(1)==b'\n'
                cache[oid]=(size,hashlib.sha256(data).hexdigest())
            assert cache[oid]==(f['size'],f['sha256']),f['path']
        results.append({'tag':row['tag'],'commit':row['commit'],
                        'originalZipEntriesVerified':len(proof['files']),
                        'allSourceBytesMatchOriginalManifest':True})
        print('Fresh clone verified',row['tag'],len(proof['files']),'original ZIP entries',flush=True)
finally:
    reader.stdin.close()
    assert reader.wait(timeout=30)==0

current={}
for line in cg('ls-tree','-rz',expected).split(b'\0'):
    if line:
        meta,name=line.split(b'\t',1)
        current[name.decode()]=meta.decode().split()[2]
latest_proof=read(OUT/'v1.0.17-source-manifest.json')
overrides={'AGENTS.md','docs/CONTINUE-BETA.md'}
for f in latest_proof['files']:
    if f['path'] not in overrides:
        assert current[f['path']]==tree[f['path']][1],f['path']
assert hashlib.sha256((clone/'pubspec.lock').read_bytes()).hexdigest()=='6316dd4a0989c4a89b32d2a9a82bf603203743175909b52395a2d97cc4f2b5cc'
assert not cg('status','--porcelain=v1').strip()
save(OUT/'fresh-clone-verification.json',{
    'repository':'https://github.com/'+REPO,'branch':'beta','checkedHead':expected,
    'freshNetworkClone':True,'cleanCheckout':True,'versions':results,
    'uniqueBlobsSha256Verified':len(cache),'latestFrozenSourceUnchanged':True,
    'documentationOverrides':sorted(overrides),'lockfileUnchanged':True})
preserve()
print('Fresh checkout and all five source snapshots verified',expected,flush=True)
