"""Independently fetch six tags and hash downloaded private Release assets."""
from archive import *
from urllib.request import Request, build_opener, HTTPRedirectHandler
from urllib.parse import urlsplit

state=read(OUT/'prepared.json'); baseline=read(OUT/'before-refs.json')
tips=read(OUT/'tips.json');headers=C.credentials()
assert C.request(headers,'GET','/repos/'+REPO)['private']
fresh=OUT/'fresh-remote.git'
if not fresh.exists():
    subprocess.run(['git','init','--bare',str(fresh)],check=True,capture_output=True)
for host in URLS:
    specs=['refs/tags/'+r['tag']+':refs/verification/'+host+'/'+r['tag'] for r in state['versions']]
    with (OUT/(host+'-fresh-fetch.log')).open('wb') as stream:
        p=subprocess.run(['git','--git-dir='+str(fresh),'-c','http.sslBackend=openssl',
          'fetch','--no-tags','--depth=1',URLS[host],*specs],stdout=stream,stderr=stream,timeout=900)
    assert p.returncode==0,host+' fresh fetch failed'
    remote=refs(host)
    assert all(remote.get(ref)==oid for ref,oid in tips[host].items())
    for ref,oid in baseline[host].items():
        if ref not in tips[host]:assert remote.get(ref)==oid,(host,ref)
    for r in state['versions']:
        actual=subprocess.check_output(['git','--git-dir='+str(fresh),'rev-parse',
          'refs/verification/'+host+'/'+r['tag']]).decode().strip()
        assert actual==r['tagObject']==remote['refs/tags/'+r['tag']]
        verify_archive(r['commit'],r['audit'],repository=fresh)
    print(host+': six fresh remote source trees verified byte-for-byte',flush=True)

class SafeRedirect(HTTPRedirectHandler):
    def redirect_request(self,req,fp,code,msg,headers,newurl):
        assert urlsplit(newurl).scheme=='https'
        redirected=super().redirect_request(req,fp,code,msg,headers,newurl)
        if urlsplit(newurl).netloc!=urlsplit(req.full_url).netloc:
            redirected.remove_header('Authorization')
        return redirected

opener=build_opener(SafeRedirect())
verified=read(OUT/'asset-download-verification.json') if (OUT/'asset-download-verification.json').exists() else {}
download_jobs=[]
for r in state['versions']:
    release=C.request(headers,'GET',f'/repos/{REPO}/releases/tags/'+r['tag'])
    assert release and not release['draft']
    actual={a['name']:a for a in C.request(headers,'GET',f"/repos/{REPO}/releases/{release['id']}/assets?per_page=100")}
    assert set(actual)=={a['name'] for a in r['assets']}
    for a in r['assets']:
        remote=actual[a['name']]
        assert remote['size']==a['size'] and remote['digest']=='sha256:'+a['sha256']
        if verified.get(a['name'],{}).get('sha256')!=a['sha256']:
            download_jobs.append((a,remote))
verification_lock=threading.Lock()
def download_one(job):
    a,remote=job
    for attempt in range(3):
        try:
            req=Request(remote['url'],headers=dict(headers,Accept='application/octet-stream'))
            digest=hashlib.sha256();size=0
            with build_opener(SafeRedirect()).open(req,timeout=180) as response:
                while chunk:=response.read(1024*1024):
                    digest.update(chunk);size+=len(chunk)
            assert size==a['size'] and digest.hexdigest()==a['sha256'],a['name']+' download mismatch'
            break
        except Exception:
            if attempt==2:raise
    with verification_lock:
        verified[a['name']]={'sha256':digest.hexdigest(),'size':size,'downloadedAndHashed':True}
        save(OUT/'asset-download-verification.json',verified)
    print('Downloaded/hash verified: '+a['name'],flush=True)
with ThreadPoolExecutor(max_workers=3) as pool:
    for job in as_completed([pool.submit(download_one,j) for j in download_jobs]):job.result()
with (OUT/'fresh-fsck.log').open('wb') as stream:
    p=subprocess.run(['git','--git-dir='+str(fresh),'fsck','--full','--strict'],stdout=stream,stderr=stream)
assert p.returncode==0
save(OUT/'complete.json',{'versions':[r['version'] for r in state['versions']],
 'githubAndGiteePrivate':True,'freshSourceTagsVerifiedOnBoth':6,
 'githubPrivateReleaseAssetsDownloadedAndHashVerified':len(verified),
 'frozenSourcesOriginalAndComplete':True,'freshGitFsckVerified':True,
 'preservation':preserve(),'localCleanupPerformed':False,'deviceAccountNasOrProductBuild':False})
print('COMPLETE: six versions, both remote source trees, all original private attachments verified',flush=True)
