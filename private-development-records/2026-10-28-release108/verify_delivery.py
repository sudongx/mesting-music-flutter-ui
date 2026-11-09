"""Inspect a new APK and preserve a standalone delivery. Never uses a phone."""
import hashlib
import json
from pathlib import Path
import re
import shutil
import struct
import subprocess
import zipfile

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-10-28-release108'
TOOLS = Path('D:/CodexCache/android-build/sdk/build-tools/35.0.0')
APK = ROOT / 'build/app/outputs/flutter-apk/app-beta-release.apk'
CERT = '8CE2203AD821AD8D38576F9AE86350D98254AC05F2CB974E773C1973B22E0333'

def run(tool, *args):
    return subprocess.check_output([str(TOOLS/tool),*map(str,args)],stderr=subprocess.STDOUT).decode('utf-8',errors='replace')

badging=run('aapt.exe','dump','badging',APK)
assert "package: name='com.mesting.music.beta' versionCode='29' versionName='1.0.8'" in badging
assert "application-label:'Mesting Music'" in badging
assert 'application-debuggable' not in badging
assert "sdkVersion:'24'" in badging and "targetSdkVersion:'36'" in badging
signature=run('apksigner.bat','verify','--verbose','--print-certs',APK)
cert=re.search(r'Signer #1 certificate SHA-256 digest: ([0-9a-fA-F]+)',signature)[1].upper()
assert cert==CERT, f'Original signing identity required; got {cert}'
assert 'Verified using v2 scheme (APK Signature Scheme v2): true' in signature
alignment=run('zipalign.exe','-c','-P','16','-v','4',APK)
assert re.search(r'Verification succes[s]?ful',alignment)
native=[]
with zipfile.ZipFile(APK) as z:
    names=z.namelist()
    notes=json.loads(z.read('assets/flutter_assets/assets/data/release-notes.json'))
    assert notes==json.loads((ROOT/'assets/data/release-notes.json').read_text(encoding='utf-8'))
    assert notes['version']=='1.0.8' and notes['versionCode']==29
    assert not any('V107QA' in n or 'msyh' in n.lower() or 'keystore' in n.lower() for n in names)
    assert not any(n.startswith('lib/x86') for n in names)
    for name in names:
        if name.startswith('lib/arm64-v8a/') and name.endswith('.so'):
            data=z.read(name)
            assert data[:6]==b'\x7fELF\x02\x01'
            header=struct.unpack_from('<HHIQQQIHHHHHH',data,16)
            loads=[]
            for i in range(header[9]):
                typ,_,offset,addr,_,_,_,align=struct.unpack_from('<IIQQQQQQ',data,header[4]+i*header[8])
                if typ==1: loads.append(align>=16384 and offset%16384==addr%16384)
            assert loads and all(loads), f'ELF page alignment: {name}'
            native.append(name)
    dex=b''.join(z.read(n) for n in names if re.fullmatch(r'classes\d*\.dex',n))
    assert b'IntegrationTestPlugin' not in dex
    assert b'RingDownloadPlugin' in dex and b'FlutterWebRTCPlugin' in dex
delivery=ROOT/'release/Mesting-Music-v1.0.8.apk'
digest=hashlib.sha256(APK.read_bytes()).hexdigest().upper()
if delivery.exists():
    assert hashlib.sha256(delivery.read_bytes()).hexdigest().upper()==digest, 'Frozen delivery already exists with different bytes'
else:
    delivery.parent.mkdir(exist_ok=True)
    shutil.copyfile(APK,delivery)
result={'version':'1.0.8','versionCode':29,'packageName':'com.mesting.music.beta',
    'size':APK.stat().st_size,'sha256':digest,'certificateSha256':cert,
    'pubspecLockSha256':hashlib.sha256((ROOT/'pubspec.lock').read_bytes()).hexdigest().upper(),
    'arm64Libraries16KiB':native,'zip16KiB':True,'integrationTestPluginAbsent':True,
    'notesAssetMatches':True,'delivery':str(delivery),'deviceAccess':False}
(OUT/'apk-verification.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
for name,text in [('apk-badging.txt',badging),('apk-signature.txt',signature),('apk-alignment.txt',alignment)]:
    (OUT/name).write_text(text,encoding='utf-8')
print(json.dumps(result,ensure_ascii=False,indent=2))
