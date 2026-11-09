"""Create only five task-owned draft releases, verify uploads, then publish."""
from concurrent.futures import ThreadPoolExecutor,as_completed
from pathlib import Path
import time
from common import *
import github_transport as api
PREFIX='/repos/'+REPO;BASE='https://github.com/'+REPO
MARKER='<!-- mesting-archive-2026-10-29-v113-v117 -->'
STATE=OUT/'release-publication.json'

def body_for(row):
 changes='\n'.join('- '+n for n in row['notes'])
 return f'''{MARKER}
{changes}

**Mesting Music {row['version']} / Android code {row['code']}**。本次补齐原交付的Git/GitHub归档，原APK及完整源码ZIP不重建、不重签、不重新压缩。

- 固定源码：[`{row['tag']}`]({BASE}/tree/{row['tag']})，提交 `{row['commit']}`。
- [修改说明]({BASE}/blob/{row['tag']}/{row['fixes']}) · [归档来源]({BASE}/blob/{row['tag']}/{ARCHIVE_DOC}) · [跨电脑接续]({BASE}/blob/beta/{HANDOFF})。
- 原APK：`{Path(row['apk']).name}`，{row['apkBytes']:,}字节，SHA-256 `{row['apkSha256']}`。
- 原完整源码：`{row['zip']}`，{row['sourceBytes']:,}字节，SHA-256 `{row['sourceHash']}`；核对{row['originalZipEntries']}个原ZIP条目，其中{row['sourceFiles']}份源文件。
- 附件包含原APK／源码ZIP、验证JSON、逐文件来源清单、原回归记录、安装复测、修改、冻结交接、更新说明、归档说明和SHA256SUMS.txt。

GitHub自动生成的源码包另含追加归档资料，原始交付请选择带版本号的source.zip附件。提交创建于本轮，冻结文档中的“尚未推送／发布”等字段保留原时点；当前状态以远端与归档核验为准。

包名`com.mesting.music.beta`、正式显示名Mesting Music、原证书`{CERT}`保持。源码含已授权公开分发的SDK及其原LICENSE／第三方声明，签名与账号凭据不公开。没有新增真机或音乐账号验收，设备和官方数据的原待验边界继续保留；本次不操作music更新后台。
'''

def upload_one(headers,release_id,item):
 path=Path(item['path']);assert path.stat().st_size==item['size'] and sha(path)==item['sha256']
 for attempt in range(3):
  assets=api.request(headers,'GET',PREFIX+f'/releases/{release_id}/assets?per_page=100')
  asset=next((a for a in assets if a['name']==item['name']),None)
  if asset is not None and asset['state']=='starter':
   release=api.request(headers,'GET',PREFIX+f'/releases/{release_id}')
   assert release['draft'] and MARKER in release['body']
   api.request(headers,'DELETE',PREFIX+f"/releases/assets/{asset['id']}");asset=None
  if asset is None:
   try:asset=api.upload(headers,release_id,path,item['name'])
   except Exception as error:
    if attempt==2:raise
    print('Reconcile interrupted draft upload',item['name'],type(error).__name__,flush=True)
    time.sleep(2);continue
  assert asset['state']=='uploaded' and asset['size']==item['size'],item['name']
  assert asset.get('digest')=='sha256:'+item['sha256'],item['name']
  return {'id':asset['id'],'name':asset['name'],'size':asset['size'],'sha256':item['sha256'],'url':asset['browser_download_url']}
 raise RuntimeError('Draft upload reconciliation exhausted')

preserve();archive=read(OUT/'archive-commits.json');push=read(OUT/'git-push-verification.json');assert push['atomicPushVerified']
headers=api.credentials();assert api.request(headers,'GET','/user')['login']=='Mesting42'
assert api.request(headers,'GET',PREFIX+'/branches/beta')['commit']['sha']==archive['finalCommit']
state=read(STATE) if STATE.exists() else {'repository':BASE,'releases':[],'verified':False}
save(STATE,state)
for row in archive['commits']:
 body=body_for(row)
 release=api.request(headers,'GET',PREFIX+'/releases/tags/'+row['tag'])
 if release is None:
  release=api.request(headers,'POST',PREFIX+'/releases',{'tag_name':row['tag'],'target_commitish':row['commit'],
   'name':'Mesting Music '+row['version'],'body':body,'draft':True,'prerelease':False,'make_latest':'false'})
  print('Created draft',row['tag'],flush=True)
 else:assert release['body']==body and MARKER in body
 assert release['target_commitish']==row['commit']
 record=next((x for x in state['releases'] if x['tag']==row['tag']),None)
 if record is None:
  record={'tag':row['tag'],'id':release['id'],'commit':row['commit'],'assets':[],'published':False};state['releases'].append(record)
 save(STATE,state)
 expected=read(OUT/'assets'/row['tag']/'expected-assets.json')
 with ThreadPoolExecutor(max_workers=2) as executor:
  pending=[executor.submit(upload_one,headers,release['id'],item) for item in expected]
  for future in as_completed(pending):
   asset=future.result();record['assets']=[x for x in record['assets'] if x['name']!=asset['name']]+[asset]
   save(STATE,state);print('Verified',row['tag'],asset['name'],asset['size'],'bytes; digest matches',flush=True)
 current=api.request(headers,'GET',PREFIX+f"/releases/{release['id']}")
 assert len(current['assets'])==len(expected)==13
 if current['draft']:
  current=api.request(headers,'PATCH',PREFIX+f"/releases/{release['id']}",{'draft':False,'prerelease':False,'make_latest':'true' if row['tag']=='v1.0.17' else 'false'})
 assert not current['draft'] and not current['prerelease'] and current['body']==body
 record.update({'published':True,'url':current['html_url']});save(STATE,state)
 print('Published',row['tag'],current['html_url'],flush=True)
current=api.request(headers,'GET',PREFIX+'/releases?per_page=100');byid={x['id']:x for x in current}
for old in read(OUT/'github-releases-before.json'):
 new=byid[old['id']]
 for key in ['tag_name','target_commitish','name','body','draft','prerelease','created_at','published_at']:assert new[key]==old[key],(old['tag_name'],key)
 compact=lambda x:sorted((a['id'],a['name'],a['size'],a.get('digest'),a['state']) for a in x)
 assert compact(old['assets'])==compact(new['assets']),old['tag_name']
assert api.request(headers,'GET',PREFIX+'/releases/latest')['tag_name']=='v1.0.17'
state.update({'verified':True,'newReleases':5,'verifiedAssets':65,'existingReleasesPreserved':37,'latest':'v1.0.17'})
save(STATE,state);preserve();print('Five formal releases and all 65 asset digests verified; existing 37 releases unchanged',flush=True)
