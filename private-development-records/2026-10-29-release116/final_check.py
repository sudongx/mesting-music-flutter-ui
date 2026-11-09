from pathlib import Path
import hashlib
import json
import subprocess
import zipfile

root=Path('D:/AnLi')
out=root/'.codex-artifacts/2026-10-29-release116'
def read(path):return json.loads(path.read_text(encoding='utf-8-sig'))
def sha(path):
    with path.open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()
apk=read(root/'release/Mesting-Music-v1.0.16-verification.json')
source=read(root/'release/Mesting-Music-v1.0.16-source-verification.json')
validation=read(root/'docs/validation-2026-10-29-v1.0.16.json')
publish=read(root/'release/Mesting-Music-v1.0.16-publish.json')
before=read(out/'frozen-before.json')
apk_path=root/'release'/apk['file']
source_path=root/source['sourceZipName']
assert apk['fileSize']==apk_path.stat().st_size==publish['fileSize']
assert sha(apk_path)==apk['sha256']==publish['sha256']
assert source['sourceZipSize']==source_path.stat().st_size
assert sha(source_path)==source['sourceZipSha256']
assert validation['apk']==apk
assert validation['version']==publish['version']==source['version']=='1.0.16'
assert validation['androidVersionCode']==publish['androidVersionCode']==source['androidVersionCode']==37
with zipfile.ZipFile(source_path) as archive:
    assert archive.testzip() is None
    manifest=json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    assert manifest['version']=='1.0.16' and manifest['versionCode']==37
    assert len(manifest['files'])==source['sourceFileCount']
    assert len(archive.namelist())==source['frozenEntryCount']==len(manifest['files'])+2
    for item in manifest['files']:
        p=root/item['path']
        assert p.stat().st_size==item['size'], item['path']
        assert sha(p)==item['sha256'], item['path']
        assert hashlib.sha256(archive.read(item['path'])).hexdigest()==item['sha256'],item['path']
    assert archive.read('SOURCE-SNAPSHOT-BASELINE.json')==(root/'SOURCE-SNAPSHOT.json').read_bytes()
for item in before['files']:
    p=root/item['path']
    assert p.stat().st_size==item['bytes'] and sha(p)==item['sha256'],item['path']
assert subprocess.check_output(['git','branch','--show-current'],cwd=root,text=True).strip()==before['branch']=='beta'
assert subprocess.check_output(['git','rev-parse','HEAD'],cwd=root,text=True).strip()==before['head']
assert subprocess.check_output(['git','diff','--cached','--raw'],cwd=root,text=True)==before['index']==''
status=subprocess.check_output(['git','status','--porcelain=v1','-uall'],cwd=root,text=True)
old_paths={line[3:] for line in before['status'].splitlines() if line}
new_paths={line[3:] for line in status.splitlines() if line}
assert old_paths.issubset(new_paths),'A pre-existing dirty path disappeared'
hashes=f"{apk['sha256']}  release/{apk['file']}\n{source['sourceZipSha256']}  {source['sourceZipName']}\n"
(root/'release/Mesting-Music-v1.0.16-SHA256.txt').write_text(hashes,encoding='utf-8')
result={'version':'1.0.16','androidVersionCode':37,
 'apk':{'file':str(apk_path),'bytes':apk['fileSize'],'sha256':apk['sha256']},
 'source':{'file':str(source_path),'bytes':source['sourceZipSize'],'sha256':source['sourceZipSha256'],'files':source['sourceFileCount']},
 'sourceFilesMatchWorkingTree':True,'preservedOldFiles':len(before['files']),
 'allPreservedFilesByteIdentical':True,'headAndIndexUnchanged':True,'preExistingDirtyPathsRetained':True,
 'betaRegressionPassed':validation['betaRegression']['passed'],'stableUpdatePassed':validation['independentStableUpdateRegression']['passed'],
 'deviceAccess':False,'uploaded':False,'published':False,'gitCommitted':False,'gitPushed':False}
(out/'final-delivery-check.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps(result,ensure_ascii=False,indent=2))
