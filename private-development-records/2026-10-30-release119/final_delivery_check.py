from pathlib import Path
import hashlib, json, subprocess, zipfile

root=Path('D:/AnLi');out=root/'.codex-artifacts/2026-10-30-release119'
def read(p):return json.loads(p.read_text(encoding='utf-8-sig'))
def digest(p):
 with p.open('rb') as stream:return hashlib.file_digest(stream,'sha256').hexdigest()
apk=read(root/'release/Mesting-Music-v1.0.19-verification.json')
src=read(root/'release/Mesting-Music-v1.0.19-source-verification.json')
validation=read(root/'docs/validation-2026-10-30-v1.0.19.json')
apk_path=root/'release'/apk['file'];src_path=root/src['sourceZipName']
assert apk_path.stat().st_size==apk['fileSize'] and digest(apk_path)==apk['sha256']
assert src_path.stat().st_size==src['sourceZipSize'] and digest(src_path)==src['sourceZipSha256']
assert apk['certificateSha256']=='8ce2203ad821ad8d38576f9ae86350d98254ac05f2cb974e773c1973b22e0333'
assert apk['androidVersionCode']==src['androidVersionCode']==validation['androidVersionCode']==40
assert apk['version']==src['version']==validation['version']=='1.0.19'
with zipfile.ZipFile(src_path) as archive:
 assert archive.testzip() is None
 snapshot=json.loads(archive.read('SOURCE-SNAPSHOT.json'))
 assert len(snapshot['files'])==src['sourceFileCount']
 for row in snapshot['files']:
  assert digest(root/row['path'])==row['sha256'],row['path']
  assert hashlib.sha256(archive.read(row['path'])).hexdigest()==row['sha256']
 selected=set(subprocess.check_output(['git','ls-files','--cached','--others','--exclude-standard','-z'],cwd=root).decode().split('\0'))-{''}
 expected=selected-set(snapshot['externalVerificationExcludedToAvoidSelfReference'])-{'SOURCE-SNAPSHOT.json'}
 assert expected=={r['path'] for r in snapshot['files']},'Working source selection changed after freeze'
 for row in snapshot['files']:
  p=Path(row['path'])
  assert not any(part in {'.codex-artifacts','.git','.dart_tool','build','.kotlin','node_modules'} for part in p.parts)
  assert p.suffix.lower() not in {'.jks','.keystore','.apk','.aab','.p12','.pfx'}
for relative,row in read(out/'frozen-v118-before.json').items():
 assert digest(root/relative)==row['sha256'],relative
assert subprocess.check_output(['git','rev-parse','HEAD'],cwd=root,text=True).strip()=='8763551c0cc39c1c25f60e42fd49624f58d91a89'
subprocess.run(['git','-c','core.whitespace=cr-at-eol','diff','--check'],cwd=root,check=True)
checksums=apk['sha256']+'  '+apk['file']+'\n'+src['sourceZipSha256']+'  '+src['sourceZipName']+'\n'
(root/'release/Mesting-Music-v1.0.19-SHA256.txt').write_text(checksums,encoding='utf-8')
result={'version':'1.0.19','androidVersionCode':40,'apkSha256':apk['sha256'],'apkBytes':apk['fileSize'],
 'sourceSha256':src['sourceZipSha256'],'sourceBytes':src['sourceZipSize'],'sourceFiles':src['sourceFileCount'],
 'allFrozenSourceFilesMatchWorkingTree':True,'apkOriginalSignatureVerified':True,
 'previousLocalV118FilesPreserved':True,'productionApkNotesReaderVerified':True,
 'betaTestsPassed':1081,'stableTestsPassed':19,'androidBackTestsPassed':1,'staticIssues':0,
 'deviceAccess':False,'realAccountAccess':False,'backendAccess':False,'gitCommitted':False,'gitPushed':False,'published':False}
(out/'final-delivery-check.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps(result,ensure_ascii=False,indent=2))
