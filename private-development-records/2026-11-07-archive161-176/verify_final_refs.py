"""Read back branch tips and ensure no previously existing remote ref vanished."""
from archive import *

baseline=read(OUT/'before-refs.json');tips=read(OUT/'tips.json')
checks={}
for host in URLS:
    remote=refs(host)
    assert all(remote.get(ref)==oid for ref,oid in tips[host].items()),host+' branch tips'
    for ref,oid in baseline[host].items():
        if ref not in tips[host]:assert remote.get(ref)==oid,(host,ref,'existing reference changed')
    checks[host]={'branchTipsVerified':tips[host],'previousReferencesPreserved':True}
headers=C.credentials()
assert C.request(headers,'GET',f'/repos/{REPO}/releases/latest')['tag_name']=='v1.0.76'
save(OUT/'final-remote-refs.json',{'remotes':checks,'githubLatest':'v1.0.76'})
print('Branch tips, previous refs and latest release verified',flush=True)
