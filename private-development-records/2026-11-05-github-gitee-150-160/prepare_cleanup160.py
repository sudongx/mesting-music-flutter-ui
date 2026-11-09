"""Only remote-digest-proven release binaries are eligible for recycling."""
from common160 import *
h=credentials();releases=[]
for page in range(1,5):
    rows=request(h,'GET',f'/repos/{REPO}/releases?per_page=100&page={page}');releases+=rows
    if len(rows)<100:break
assets={}
for release in releases:
    if release['draft']:continue
    for a in release['assets']:assets.setdefault(a['name'],[]).append(a)
eligible=[];unverified=[]
for path in (ROOT/'release').iterdir():
    if not path.is_file() or path.suffix.lower() not in {'.apk','.zip'}:continue
    full=path.resolve();assert full.parent==(ROOT/'release').resolve()
    digest=sha(path)
    matches=[a for a in assets.get(path.name,[]) if a['size']==path.stat().st_size and a.get('digest')=='sha256:'+digest]
    if not matches:unverified.append(path.name);continue
    eligible.append({'path':str(full),'bytes':path.stat().st_size,'sha256':digest,'githubAssetId':matches[0]['id'],'remoteUrl':matches[0]['browser_download_url']})
save(OUT/'cleanup-plan.json',{'directory':str((ROOT/'release').resolve()),'files':eligible,'unverifiedRetained':unverified,'bytes':sum(x['bytes'] for x in eligible),'recycleOnly':True,'rootSourceZipsRetained':True,'metadataRetained':True})
print(json.dumps({'eligible':len(eligible),'retainedUnverified':unverified,'GiB':round(sum(x['bytes'] for x in eligible)/1024**3,2)}),flush=True)
