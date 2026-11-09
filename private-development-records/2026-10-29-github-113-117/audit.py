"""Verify immutable APK/ZIP inputs and prepare independently reviewable metadata."""
from pathlib import Path
import json,zipfile,hashlib,re,subprocess
from common import *
TOOLS=Path('D:/CodexCache/android-build/sdk/build-tools/35.0.0')
preserve();rows=[]
for n in range(13,18):
 version=f'1.0.{n}';tag='v'+version
 apk=ROOT/f'release/Mesting-Music-v{version}.apk';source=ROOT/f'Mesting-Music-v{version}-source.zip'
 av=read(ROOT/f'release/Mesting-Music-v{version}-verification.json');sv=read(ROOT/f'release/Mesting-Music-v{version}-source-verification.json')
 assert sha(apk)==av['sha256'] and sha(source)==sv['sourceZipSha256']
 assert apk.stat().st_size==av['fileSize'] and source.stat().st_size==sv['sourceZipSize']
 badging=subprocess.check_output([str(TOOLS/'aapt.exe'),'dump','badging',str(apk)],stderr=subprocess.STDOUT).decode('utf-8',errors='replace')
 assert f"package: name='com.mesting.music.beta' versionCode='{n+21}' versionName='{version}'" in badging
 assert "application-label:'Mesting Music'" in badging and 'application-debuggable' not in badging
 assert "sdkVersion:'24'" in badging and "targetSdkVersion:'36'" in badging
 signature=subprocess.check_output([str(TOOLS/'apksigner.bat'),'verify','--verbose','--print-certs',str(apk)],stderr=subprocess.STDOUT).decode()
 assert re.search(r'Signer #1 certificate SHA-256 digest: ([a-fA-F0-9]+)',signature)[1].lower()==CERT
 assert 'Verified using v2 scheme (APK Signature Scheme v2): true' in signature and 'Verified using v3 scheme (APK Signature Scheme v3): true' in signature
 subprocess.check_output([str(TOOLS/'zipalign.exe'),'-c','-P','16','4',str(apk)],stderr=subprocess.STDOUT)
 with zipfile.ZipFile(apk) as az:
  assert az.testzip() is None
  notes=json.loads(az.read('assets/flutter_assets/assets/data/release-notes.json'))
  assert notes['version']==version and notes['versionCode']==n+21 and len(notes['releaseNotes'])==8
  assert set(x.split('/')[1] for x in az.namelist() if x.startswith('lib/') and x.endswith('.so'))=={'arm64-v8a','armeabi-v7a'}
 with zipfile.ZipFile(source) as z:
  assert z.testzip() is None
  names=z.namelist();assert len(names)==len(set(names))
  manifest=json.loads(z.read('SOURCE-SNAPSHOT.json'))
  assert manifest['version']==version and manifest['versionCode']==n+21
  assert len(manifest['files'])==sv['sourceFileCount']
  entries=[]
  expected={i['path']:i for i in manifest['files']}
  assert set(names)==set(expected)|{'SOURCE-SNAPSHOT.json','SOURCE-SNAPSHOT-BASELINE.json'}
  for name in names:
   safe_path(name);data=z.read(name)
   if name in expected:assert len(data)==expected[name]['size'] and hashlib.sha256(data).hexdigest()==expected[name]['sha256']
   if re.search(br'-----BEGIN (?:RSA |EC |ENCRYPTED )?PRIVATE KEY-----',data):
    assert name=='third_party/md3music/rust/vendor/tiny_http/examples/ssl-key.pem',name
    assert hashlib.sha256(git('show',BASELINE+':'+name)).digest()==hashlib.sha256(data).digest()
   entries.append({'path':name,'size':len(data),'sha256':hashlib.sha256(data).hexdigest()})
  assert z.read('assets/data/release-notes.json')==json.dumps(notes,ensure_ascii=False,indent=2).encode()+b'\n' or json.loads(z.read('assets/data/release-notes.json'))==notes
 row={'version':version,'code':n+21,'tag':tag,'apk':apk.relative_to(ROOT).as_posix(),'zip':source.name,
  'apkBytes':apk.stat().st_size,'apkSha256':sha(apk),'sourceBytes':source.stat().st_size,'sourceHash':sha(source),
  'sourceFiles':len(manifest['files']),'originalZipEntries':len(entries),'certificateSha256':CERT,'notes':notes['releaseNotes'],
  'manifest':f'docs/version-archive/{tag}-source-manifest.json','fixes':f'docs/fixes-2026-10-29-v{version}.md',
  'handoff':f'docs/SESSION-HANDOFF-2026-10-29-v{version}.md','installation':f'docs/INSTALL-v{version}.md'}
 proof={'version':version,'androidVersionCode':n+21,'originalSourceZip':source.name,'originalSourceZipSha256':row['sourceHash'],
  'sourceFileCount':len(manifest['files']),'originalZipEntryCount':len(entries),'allZipEntriesVerified':True,
  'apkSha256':row['apkSha256'],'originalCertificate':CERT,'files':entries}
 save(OUT/f'{tag}-source-manifest.json',proof)
 for key in ['fixes','handoff','installation']:assert (ROOT/row[key]).is_file()
 rows.append(row);print('Verified frozen',tag,'/',n+21,':',len(entries),'ZIP entries and original APK',flush=True)
save(OUT/'verified-deliveries.json',rows);preserve()
