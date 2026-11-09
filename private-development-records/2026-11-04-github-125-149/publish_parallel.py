"""Stage independent version assets concurrently, publish in numeric order.

Concurrency is bounded to six separate release uploads. No worker publishes a
Release: that final step stays sequential. Failed interrupted draft uploads may
leave a 'starter' placeholder without a digest (its size can be the declared
Content-Length). Only these unfinished placeholders on this task's new tags
may be removed before retrying. Completed assets are immutable.
"""
from common149 import *
from concurrent.futures import ThreadPoolExecutor,as_completed
from datetime import datetime,timezone
import ast,threading,time,zipfile

prepared=read(OUT/'prepared-state.json');before=read(OUT/'remote-before.json')
assert len(prepared['versions'])==24
headers=credentials();headers['User-Agent']='Mesting-frozen-archive-125-149'
refs={line.split('\t')[1]:line.split('\t')[0] for line in git('ls-remote','--heads','--tags','origin').decode().splitlines()}
assert all(refs['refs/heads/'+b]==prepared[b+'Tip'] for b in ['beta','main'])
assert all(refs['refs/tags/'+r['tag']+'^{}']==r['commit'] for r in prepared['versions'])
# Reuse only the pure release-body formatter; importing publish.py would push.
parsed=ast.parse((OUT/'publish.py').read_text('utf-8'))
function=next(n for n in parsed.body if isinstance(n,ast.FunctionDef) and n.name=='body_for')
namespace={'ROOT':ROOT,'REPO':REPO,'zipfile':zipfile,'json':json}
exec(compile(ast.Module(body=[function],type_ignores=[]),'<release-body>','exec'),namespace)
body_for=namespace['body_for']
def get(path):
    for attempt in range(4):
        try:return request(headers,'GET',path)
        except Exception:
            if attempt==3:raise
            time.sleep(2*(attempt+1))
def assets_for(rid):return get(f'/repos/{REPO}/releases/{rid}/assets?per_page=100')
release_rows=[]
for page in range(1,10):
    rows=get(f'/repos/{REPO}/releases?per_page=100&page={page}');release_rows+=rows
    if len(rows)<100:break
existing={r['tag_name']:r for r in release_rows}
baseline_tags={r['tag_name'] for r in before['releases']}
statusfile=OUT/'parallel-state.json'
status=read(statusfile) if statusfile.exists() else {'preparedVersions':{},'starterPlaceholdersRemoved':[]}
lock=threading.Lock()
def finish_upload(row):
    tag=row['tag'];assert tag not in baseline_tags
    release=existing.get(tag)
    if release is None:
        release=request(headers,'POST',f'/repos/{REPO}/releases',{
            'tag_name':tag,'target_commitish':row['commit'],
            'name':f"Mesting Music {row['version']} / code{row['code']} · Beta 通道",
            'body':body_for(row),'draft':True,'prerelease':False,'make_latest':'false'})
    rid=release['id'];assert release['tag_name']==tag
    live={asset['name']:asset for asset in assets_for(rid)}
    expected={a['name']:a for a in row['assets']}
    assert set(live).issubset(expected)
    for asset in row['assets']:
        assert sha(asset['path'])==asset['sha256']
        found=live.get(asset['name'])
        if found is not None and found['state']=='starter' and not found.get('digest'):
            assert release['draft'] and tag not in baseline_tags
            assert found['size'] in {0,asset['size']}
            request(headers,'DELETE',f"/repos/{REPO}/releases/assets/{found['id']}")
            with lock:
                status['starterPlaceholdersRemoved'].append({'tag':tag,'asset':found['name'],'id':found['id'],'reason':'unfinished starter without a digest on a new draft owned by this task'})
                save(statusfile,status)
            found=None
        for attempt in range(5):
            if found is not None:break
            try:found=upload(headers,rid,asset['path'],asset['name'])
            except Exception as error:
                after={a['name']:a for a in assets_for(rid)}
                found=after.get(asset['name'])
                if found and found['state']=='starter' and not found.get('digest'):
                    assert release['draft']
                    assert found['size'] in {0,asset['size']}
                    request(headers,'DELETE',f"/repos/{REPO}/releases/assets/{found['id']}")
                    found=None
                if found is None:
                    print(json.dumps({'retry':tag,'asset':asset['name'],'attempt':attempt+1,'errorType':type(error).__name__}),flush=True)
                    if attempt==4:raise
                    time.sleep(3*(attempt+1))
        assert found and found['state']=='uploaded'
        assert found['size']==asset['size'] and found.get('digest')=='sha256:'+asset['sha256'],(tag,asset['name'])
        live[asset['name']]=found
    verified=assets_for(rid)
    assert set(expected)=={a['name'] for a in verified}
    for a in verified:
        check=expected[a['name']]
        assert a['size']==check['size'] and a['digest']=='sha256:'+check['sha256']
    value={'releaseId':rid,'tag':tag,'assetsVerified':len(verified)}
    with lock:
        status['preparedVersions'][tag]=value;save(statusfile,status)
        print(json.dumps({'assetsReady':tag,'completed':len(status['preparedVersions']),'total':24}),flush=True)
    return value

with ThreadPoolExecutor(max_workers=6) as pool:
    jobs={pool.submit(finish_upload,row):row['tag'] for row in prepared['versions']}
    errors=[]
    for job in as_completed(jobs):
        try:job.result()
        except Exception as error:
            errors.append({'tag':jobs[job],'errorType':type(error).__name__,'message':str(error)[:500]})
            save(OUT/'parallel-errors.json',errors)
            print(json.dumps(errors[-1]),flush=True)
assert not errors,errors
assert len(status['preparedVersions'])==24
published={'versions':[],'refsPushed':True}
for row in prepared['versions']:
    rid=status['preparedVersions'][row['tag']]['releaseId']
    release=request(headers,'PATCH',f'/repos/{REPO}/releases/{rid}',{
        'name':f"Mesting Music {row['version']} / code{row['code']} · Beta 通道",
        'body':body_for(row),'draft':False,'prerelease':False,
        'make_latest':'true' if row['tag']=='v1.0.49' else 'false'})
    verified=assets_for(rid);expected={a['name']:a for a in row['assets']}
    assert set(expected)=={a['name'] for a in verified}
    for asset in verified:
        check=expected[asset['name']]
        assert asset['size']==check['size'] and asset['digest']=='sha256:'+check['sha256']
    published['versions'].append({'version':row['version'],'tag':row['tag'],'releaseId':rid,'url':release['html_url'],'publishedAt':release['published_at'],'draft':False,'prerelease':False,'assets':[{'name':a['name'],'id':a['id'],'size':a['size'],'digest':a['digest'],'url':a['browser_download_url']} for a in verified]})
    save(OUT/'publish-state.json',published)
    print(json.dumps({'published':row['tag'],'assetsVerified':len(verified),'completed':len(published['versions']),'total':24}),flush=True)
latest=get(f'/repos/{REPO}/releases/latest');assert latest['tag_name']=='v1.0.49'
published.update(completed=True,latestVerified='v1.0.49',completedAtUtc=datetime.now(timezone.utc).isoformat(),preservation=preserve())
save(OUT/'publish-state.json',published)
print('COMPLETE: 24 formal Releases and 263 original assets verified; 1.0.49 is Latest.',flush=True)
