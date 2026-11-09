from common160 import *
p=read(OUT/'prepared-state.json');assert len(p['versions'])==11
def refs(url):return {l.split()[1]:l.split()[0] for l in git('ls-remote','--heads','--tags',url).decode().splitlines()}
for host in ['github','gitee']:
    url=f'https://{host}.com/{REPO}.git'
    old=read(OUT/(host+'-refs-before.json'));live=refs(url)
    destinations={('refs/heads/'+b):p[b+'Tip'] for b in ['beta','main']} if host=='github' else {'refs/heads/main':p['giteeTip']}
    for row in p['versions']:
        tag='refs/tags/'+row['tag']
        if tag not in old:destinations[tag]=row['tagObject']
        else:assert old[tag]==row['tagObject']
    for ref,value in old.items():assert live.get(ref) in {value,destinations.get(ref,value)},(host,ref,'remote changed')
    for ref,value in destinations.items():
        assert live.get(ref) in {None,old.get(ref),value},(host,ref,'collision')
        if ref.startswith('refs/heads/') and ref in old:
            git('merge-base','--is-ancestor',old[ref],value)
    specs=[value+':'+ref for ref,value in destinations.items()]
    receipt=git('push','--atomic',url,*specs)
    (OUT/(host+'-push-receipt.txt')).write_bytes(receipt)
    after=refs(url)
    assert all(after.get(ref)==value for ref,value in destinations.items())
    assert all(after.get(ref)==value for ref,value in old.items() if ref not in destinations)
    save(OUT/(host+'-refs-after.json'),after)
    print(host+' refs verified; no force or deletion.',flush=True)
