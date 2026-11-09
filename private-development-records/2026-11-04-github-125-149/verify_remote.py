"""Re-read remote refs/assets and verify every version in a fresh no-checkout clone."""
from common149 import *
from datetime import datetime,timezone
import base64,re,time

prepared=read(OUT/'prepared-state.json');published=read(OUT/'publish-state.json')
assert published.get('completed') and len(published['versions'])==24
before=read(OUT/'remote-before.json');headers=credentials()
refs={line.split('\t')[1]:line.split('\t')[0] for line in git('ls-remote','--heads','--tags','origin').decode().splitlines()}
for name,old in before['refs'].items():
    if name not in {'refs/heads/beta','refs/heads/main'}:assert refs.get(name)==old,('Existing remote ref changed',name)
for branch in ['beta','main']:assert refs['refs/heads/'+branch]==prepared[branch+'Tip']
for row in prepared['versions']:
    assert refs['refs/tags/'+row['tag']]==row['tagObject']
    assert refs['refs/tags/'+row['tag']+'^{}']==row['commit']
releases=[]
for page in range(1,10):
    rows=request(headers,'GET',f'/repos/{REPO}/releases?per_page=100&page={page}');releases+=rows
    if len(rows)<100:break
bytag={r['tag_name']:r for r in releases}
assert len(releases)==len(before['releases'])+24
for old in before['releases']:
    now=bytag[old['tag_name']]
    for key in ['id','tag_name','name','body','draft','prerelease']:assert now[key]==old[key],(old['tag_name'],key)
    old_assets={a['id']:(a['name'],a['size'],a.get('digest')) for a in old['assets']}
    assert old_assets=={a['id']:(a['name'],a['size'],a.get('digest')) for a in now['assets']},old['tag_name']
verified=[]
for row in prepared['versions']:
    release=bytag[row['tag']];assert not release['draft'] and not release['prerelease']
    expected={a['name']:a for a in row['assets']}
    assert set(expected)=={a['name'] for a in release['assets']}
    for asset in release['assets']:
        local=expected[asset['name']]
        assert asset['size']==local['size'] and asset['digest']=='sha256:'+local['sha256']
    verified.append({'version':row['version'],'code':row['code'],'tag':row['tag'],'commit':row['commit'],'tagObject':row['tagObject'],'url':release['html_url'],'publishedAt':release['published_at'],'prerelease':False,'assets':[{'name':a['name'],'size':a['size'],'sha256':a['digest'].split(':',1)[1],'url':a['browser_download_url']} for a in release['assets']]})
assert [row['publishedAt'] for row in verified]==sorted(row['publishedAt'] for row in verified)
latest=request(headers,'GET',f'/repos/{REPO}/releases/latest');assert latest['tag_name']=='v1.0.49'
readmes={}
for branch in ['beta','main']:
    data=request(headers,'GET',f'/repos/{REPO}/contents/README.md?ref={branch}')
    expected=(OUT/('navigation-'+branch)/'README.md').read_bytes()
    assert base64.b64decode(data['content'])==expected
    catalog=request(headers,'GET',f'/repos/{REPO}/contents/docs/apk-downloads.md?ref={branch}')
    assert base64.b64decode(catalog['content'])==(OUT/('navigation-'+branch)/'docs/apk-downloads.md').read_bytes()
    readmes[branch]={'readmeBlob':data['sha'],'catalogBlob':catalog['sha']}
clone=OUT/'fresh-clone'
env=dict(os.environ,GIT_TERMINAL_PROMPT='0',GCM_INTERACTIVE='Never')
if not clone.exists():
    with (OUT/'fresh-clone.log').open('wb') as log:
        result=subprocess.run(['git','clone','--config','core.autocrlf=false','--no-checkout','--branch','beta','https://github.com/'+REPO+'.git',str(clone)],cwd=ROOT,stdout=log,stderr=subprocess.STDOUT,env=env)
    assert result.returncode==0,'Fresh clone failed; inspect private log'
def fresh(*args):return subprocess.check_output(['git','--no-optional-locks',*args],cwd=clone,env=env).decode().strip()
assert fresh('rev-parse','HEAD')==prepared['betaTip']
clone_checks=[]
cached={row['tag']:row for row in read(OUT/'fresh-source-progress.json')} if (OUT/'fresh-source-progress.json').exists() else {}
for row in prepared['versions']:
    assert fresh('rev-parse',row['tag']+'^{}')==row['commit']
    audit=read(OUT/(row['tag']+'-source-audit.json'))
    prior=cached.get(row['tag'])
    if prior:
        assert prior['commit']==row['commit'] and prior['auditSha256']==sha(OUT/(row['tag']+'-source-audit.json'))
        count=prior['frozenZipEntriesVerified'];assert count==len(audit)
    else:count=archive_verify(row['commit'],audit,repository=clone)
    clone_checks.append({'tag':row['tag'],'commit':row['commit'],'frozenZipEntriesVerified':count,'auditSha256':sha(OUT/(row['tag']+'-source-audit.json'))})
    save(OUT/'fresh-source-progress.json',clone_checks)
    print(json.dumps({'freshCloneVerified':row['tag'],'entries':count,'completed':len(clone_checks)},ensure_ascii=False),flush=True)
main_base=tree_files(before['refs']['refs/heads/main']);main_now=tree_files(prepared['mainTip'])
allowed={'README.md','docs/apk-downloads.md','docs/versions.md'}
assert {name:row for name,row in main_base.items() if name not in allowed}=={name:row for name,row in main_now.items() if name not in allowed}
for row in prepared['versions']:
    # Revalidate immutable local attachments after uploading, as well as server
    # digests. No package or ZIP may have changed while it was being streamed.
    for asset in row['assets']:assert sha(asset['path'])==asset['sha256']
final={'verifiedAtUtc':datetime.now(timezone.utc).isoformat(),'repository':'https://github.com/'+REPO,'versions':verified,'versionCount':24,'assetCount':sum(len(r['assets']) for r in verified),'allRemoteAssetSizesAndSha256Verified':True,'sourceEntriesVerifiedInFreshClone':sum(r['frozenZipEntriesVerified'] for r in clone_checks),'freshClone':clone_checks,'betaTip':prepared['betaTip'],'mainTip':prepared['mainTip'],'mainProductFilesUnchanged':True,'mainDocumentationPaths':sorted(allowed),'readmeAndCatalogReadback':readmes,'installationChannelCatalog':prepared['catalog'],'latest':'v1.0.49','allNewReleasesPublishedNonPrerelease':True,'olderReleasesAndAssetsUnchanged':True,'existingRemoteTagsUnchanged':True,'privateCandidatesExcluded':True,'sourceAndApkRebuilt':False,'phoneAccess':False,'realMusicAccountAccess':False,'musicBackendPublication':False,'preservation':preserve()}
save(OUT/'remote-verification-final.json',final)
print(json.dumps({k:v for k,v in final.items() if k not in ['versions','freshClone','readmeAndCatalogReadback']},ensure_ascii=False,indent=2),flush=True)
