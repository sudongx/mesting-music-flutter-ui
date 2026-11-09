from pathlib import Path
import hashlib,json,subprocess,zipfile
r=Path('D:/AnLi');out=r/'.codex-artifacts/2026-10-29-release117'
def read(p):return json.loads(p.read_text(encoding='utf-8-sig'))
def sha(p):
 with p.open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()
a=read(r/'release/Mesting-Music-v1.0.17-verification.json');s=read(r/'release/Mesting-Music-v1.0.17-source-verification.json');v=read(r/'docs/validation-2026-10-29-v1.0.17.json');p=read(r/'release/Mesting-Music-v1.0.17-publish.json');b=read(out/'before.json')
apk=r/'release'/a['file'];source=r/s['sourceZipName']
assert a['fileSize']==apk.stat().st_size==p['fileSize']
assert sha(apk)==a['sha256']==p['sha256']
assert sha(source)==s['sourceZipSha256'] and source.stat().st_size==s['sourceZipSize']
assert v['apk']==a and v['version']==s['version']==p['version']=='1.0.17'
assert v['androidVersionCode']==a['androidVersionCode']==s['androidVersionCode']==p['androidVersionCode']==38
old=read(r/'release/Mesting-Music-v1.0.16-verification.json')
assert old['certificateSha256']==a['certificateSha256'] and old['packageName']==a['packageName']
assert a['androidVersionCode']>old['androidVersionCode']
with zipfile.ZipFile(source) as z:
 assert z.testzip() is None
 manifest=json.loads(z.read('SOURCE-SNAPSHOT.json'))
 assert manifest['version']=='1.0.17' and manifest['versionCode']==38
 assert len(manifest['files'])==s['sourceFileCount'] and len(z.namelist())==s['frozenEntryCount']==s['sourceFileCount']+2
 for f in manifest['files']:
  assert (r/f['path']).stat().st_size==f['size'] and sha(r/f['path'])==f['sha256'],f['path']
  assert hashlib.sha256(z.read(f['path'])).hexdigest()==f['sha256'],f['path']
 assert z.read('SOURCE-SNAPSHOT-BASELINE.json')==(r/'SOURCE-SNAPSHOT.json').read_bytes()
for path,digest in b['frozen'].items():assert sha(r/path)==digest,path
for path,digest in read(out/'built-sources.json').items():assert sha(r/path)==digest,path
with zipfile.ZipFile(out/'before.zip') as z:
 assert all((r/name).exists() for name in z.namelist()),'An inherited source path disappeared'
assert subprocess.check_output(['git','branch','--show-current'],cwd=r,text=True).strip()=='beta'
assert subprocess.check_output(['git','rev-parse','HEAD'],cwd=r,text=True).strip()==b['head']
assert subprocess.check_output(['git','diff','--cached','--raw'],cwd=r,text=True)==b['index']==''
assert sha(r/'pubspec.lock')=='6316dd4a0989c4a89b32d2a9a82bf603203743175909b52395a2d97cc4f2b5cc'
(r/'release/Mesting-Music-v1.0.17-SHA256.txt').write_text(f"{a['sha256']}  release/{a['file']}\n{s['sourceZipSha256']}  {s['sourceZipName']}\n",encoding='utf-8')
result={'version':'1.0.17','androidVersionCode':38,'apk':{'file':str(apk),'bytes':a['fileSize'],'sha256':a['sha256']},
 'source':{'file':str(source),'bytes':s['sourceZipSize'],'sha256':s['sourceZipSha256'],'files':s['sourceFileCount']},
 'sourceFilesMatchWorkingTree':True,'buildSourceInputsStillMatch':True,'oldFrozenFilesRetained':len(b['frozen']),
 'allOldFrozenFilesByteIdentical':True,'headAndIndexUnchanged':True,'inheritedSourcePathsRetained':True,
 'samePackageAndCertificateAs116':True,'physicalUpgradePerformed':False,
 'betaRegressionPassed':v['betaRegression']['passed'],'stableRegressionPassed':v['stableSearchAndUpdateRegression']['passed'],
 'lastChangedAudioAndUiSubsetPassed':v['lastChangedAudioAndUiRegression']['passed'],
 'androidBackRegistrationPassed':v['androidBackRegistrationRegression']['passed'],
 'newKugouAccountSourceAdded':False,'dualSignInAdded':False,
 'deviceAccess':False,'accountAccess':False,'uploaded':False,'published':False,'gitCommitted':False,'gitPushed':False}
(out/'final-delivery-check.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps(result,ensure_ascii=False,indent=2))
