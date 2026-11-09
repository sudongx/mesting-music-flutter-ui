"""Fresh remote refs/objects plus per-version byte and release-asset verification."""
from archive import *
state=read(OUT/'prepared.json');published=read(OUT/'published.json');headers=C.credentials()
baseline=read(OUT/'before-refs.json');tips=read(OUT/'tips.json')
fresh=OUT/'fresh-remote.git'
if not fresh.exists():subprocess.run(['git','init','--bare',str(fresh)],check=True,capture_output=True)
for host in URLS:
    specs=['refs/tags/'+r['tag']+':refs/verification/'+host+'/'+r['tag'] for r in state['versions']]
    log=OUT/(host+'-fresh-fetch.log')
    with log.open('wb') as stream:
        p=subprocess.run(['git','--git-dir='+str(fresh),'-c','http.sslBackend=openssl','-c','http.version=HTTP/1.1','fetch','--no-tags','--depth=1',URLS[host],*specs],stdout=stream,stderr=stream,timeout=900)
    assert p.returncode==0,'Fresh fetch failed; see private log'
    remote=refs(host)
    assert all(remote.get(ref)==oid for ref,oid in tips[host].items()),host+' branch tips'
    # Existing tags and unrelated branches must survive the archival push.
    for ref,oid in baseline[host].items():
        if ref not in tips[host]:assert remote.get(ref)==oid,(host,ref,'existing reference changed')
    for r in state['versions']:
        oid=subprocess.check_output(['git','--git-dir='+str(fresh),'rev-parse','refs/verification/'+host+'/'+r['tag']]).decode().strip()
        assert oid==r['tagObject']==remote['refs/tags/'+r['tag']]
        verify_archive(r['commit'],r['audit'],repository=fresh)
    print(host+'16 version refs and byte-identical source trees verified',flush=True)
assets=0
for r in state['versions']:
    release=C.request(headers,'GET',f'/repos/{REPO}/releases/tags/'+r['tag']);assert release and not release['draft']
    actual={a['name']:a for a in C.request(headers,'GET',f"/repos/{REPO}/releases/{release['id']}/assets?per_page=100")}
    assert set(actual)=={a['name'] for a in r['assets']}
    for a in r['assets']:assert actual[a['name']]['digest']=='sha256:'+a['sha256'] and actual[a['name']]['size']==a['size']
    assets+=len(actual)
    for name in r['audit']:assert not name.startswith(('HANDOFF','docs/','.impeccable/')) and name!='AGENTS.md'
assert C.request(headers,'GET',f'/repos/{REPO}/releases/latest')['tag_name']=='v1.0.76'
private=read(OUT/'private-backup-result.json')
subprocess.run(['git','--git-dir='+str(fresh),'-c','http.sslBackend=openssl','-c','http.version=HTTP/1.1','fetch','--no-tags','--depth=1',URLS['gitee'],private['branch']+':refs/verification/private176'],check=True,capture_output=True,timeout=900)
assert subprocess.check_output(['git','--git-dir='+str(fresh),'rev-parse','refs/verification/private176^{tree}']).decode().strip()==private['tree']
with (OUT/'fresh-fsck.log').open('wb') as stream:
    p=subprocess.run(['git','--git-dir='+str(fresh),'fsck','--full','--strict'],stdout=stream,stderr=stream)
assert p.returncode==0
assert not any('private-development-records-20261107-v176' in ref for ref in refs('github'))
save(OUT/'complete.json',{'githubReleases':16,'githubAssets':assets,'githubLatest':'v1.0.76',
    'githubAndGiteeVersionTagsVerified':16,'frozenProductSourceVersions':15,'sourceMissing':['1.0.63'],
    'publicPrivateRecordsExcluded':True,'privateGiteeBackup':private,'freshRemoteTreesAndFsckVerified':True,
    'preservation':preserve(strict=False),'phoneOrMusicBackendTouched':False})
print('COMPLETE:16 releases,15 source versions,63 explicit source gap; private recordsGitee only',flush=True)
