from common import *
from github_transport import credentials, request, upload
import zipfile,re

statefile=OUT/'state.json'
if statefile.exists(): state=read(statefile)
else:
 state={'head':git('rev-parse','HEAD').decode().strip(),'status':git('status','--porcelain').decode(),'versions':[]}
 assert state['head']==BASELINE
 parent=BASELINE;modes=tree_files(parent)
 for patch in range(19,23):
  version=f'1.0.{patch}';tag='v'+version
  apk=ROOT/'release'/f'Mesting-Music-{tag}.apk';source=ROOT/f'Mesting-Music-{tag}-source.zip'
  verification=read(ROOT/'release'/f'Mesting-Music-{tag}-verification.json')
  sourcecheck=read(ROOT/'release'/f'Mesting-Music-{tag}-source-verification.json')
  assert sha(apk)==verification['sha256'] and sha(source)==sourcecheck['sourceZipSha256']
  folder=OUT/'snapshots'/tag;folder.mkdir(parents=True,exist_ok=True)
  files={}
  with zipfile.ZipFile(source) as z:
   assert z.testzip() is None
   manifest=json.loads(z.read('SOURCE-SNAPSHOT.json'))
   for name in z.namelist():
    safe_path(name);data=z.read(name)
    if re.search(br'-----BEGIN (?:RSA |EC |ENCRYPTED )?PRIVATE KEY-----',data):
     assert name=='third_party/md3music/rust/vendor/tiny_http/examples/ssl-key.pem'
     assert data==git('show','HEAD:'+name)
    target=folder/name;target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(data);files[name]=target
   for row in manifest['files']:assert sha(files[row['path']])==row['sha256']
  commit,tree=create_commit(files,version,parent,modes)
  assets=[apk,source,*sorted((ROOT/'release').glob(f'Mesting-Music-{tag}*.json')),*sorted((ROOT/'release').glob(f'Mesting-Music-{tag}*.sha256'))]
  assets += [ROOT/'release'/f'Mesting-Music-{tag}-SHA256.txt',ROOT/'docs'/f'fixes-2026-10-30-{tag}.md',ROOT/'docs'/f'INSTALL-{tag}.md',ROOT/'docs'/f'validation-2026-10-30-{tag}.json',ROOT/f'HANDOFF-CURRENT-SESSION-2026-10-30-{tag}.md']
  assets=list(dict.fromkeys(a for a in assets if a.exists()))
  row=dict(version=version,tag=tag,commit=commit,tree=tree,sourceEntries=len(files),prerelease=patch==22,assets=[{'path':str(a),'name':a.name,'sha256':sha(a),'size':a.stat().st_size} for a in assets])
  state['versions'].append(row);parent=commit;print('Prepared',tag,commit,flush=True)
 state['tip']=parent;save(statefile,state)

headers=credentials()
for row in state['versions']:
 tag=row['tag'];existing=git('ls-remote','origin','refs/tags/'+tag).decode().strip()
 if existing:assert existing.split()[0]==row['commit'], 'Remote tag collision'
 else:
  git('update-ref','refs/tags/'+tag,row['commit'])
  git('push','origin','refs/tags/'+tag)
 print('Tag verified',tag,flush=True)
 release=request(headers,'GET','/repos/'+REPO+'/releases/tags/'+tag)
 if release is None:
  note=f"Mesting Music {row['version']} frozen local delivery archive.\n\nOriginal APK and source ZIP are byte-preserved; each tagged source comes from that version's frozen ZIP. Build-time documents retain their historical state.\n\n"
  note+=('Candidate only: physical-device performance and native-crash acceptance remain pending. This is a prerelease.\n\n' if row['prerelease'] else 'Original local release archived; device/crash validation limits remain as documented.\n\n')
  note+='No music distribution backend publication. Signing credentials and private device evidence are excluded.'
  release=request(headers,'POST','/repos/'+REPO+'/releases',{'tag_name':tag,'name':'Mesting Music '+row['version']+(' candidate' if row['prerelease'] else ''),'body':note,'draft':True,'prerelease':row['prerelease']})
 rid=release['id']
 for asset in row['assets']:
  assert sha(Path(asset['path']))==asset['sha256']
  remote=request(headers,'GET',f'/repos/{REPO}/releases/{rid}/assets?per_page=100')
  found=next((a for a in remote if a['name']==asset['name']),None)
  if found is None:found=upload(headers,rid,asset['path'],asset['name'])
  assert found['size']==asset['size'] and found['digest']=='sha256:'+asset['sha256'],asset['name']
 request(headers,'PATCH',f'/repos/{REPO}/releases/{rid}',{'draft':False,'prerelease':row['prerelease']})
 row['url']=f'https://github.com/{REPO}/releases/tag/{tag}';row['verified']=True;save(statefile,state)
 print('Release verified',tag,len(row['assets']),flush=True)

remote=git('ls-remote','origin','refs/heads/beta').decode().split()[0]
assert remote in {BASELINE,state['tip']}
if remote!=state['tip']:git('push','--force-with-lease=refs/heads/beta:'+BASELINE,'origin',state['tip']+':refs/heads/beta')
assert git('ls-remote','origin','refs/heads/beta').decode().split()[0]==state['tip']
assert git('rev-parse','HEAD').decode().strip()==state['head']
assert git('status','--porcelain').decode()==state['status']
state['completed']=True;state['primaryWorkspacePreserved']=True;save(statefile,state)
print('COMPLETE: four version tags/releases and remote beta verified; primary worktree preserved.',flush=True)
