"""Validate and freeze this new local APK without accessing a phone or server."""
from pathlib import Path
import hashlib
import json
import re
import shutil
import struct
import subprocess
import zipfile

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-10-29-release115'
TOOLS = Path('D:/CodexCache/android-build/sdk/build-tools/35.0.0')
APK = OUT / 'app-beta-release-signed.apk'
CERT = '8ce2203ad821ad8d38576f9ae86350d98254ac05f2cb974e773c1973b22e0333'

def digest(path):
    with path.open('rb') as source:
        return hashlib.file_digest(source, 'sha256').hexdigest()

def run(tool, *args):
    return subprocess.check_output([str(TOOLS / tool), *map(str, args)], stderr=subprocess.STDOUT).decode('utf-8', errors='replace')

badging = run('aapt.exe', 'dump', 'badging', APK)
assert "package: name='com.mesting.music.beta' versionCode='36' versionName='1.0.15'" in badging
assert "application-label:'Mesting Music'" in badging
assert 'application-debuggable' not in badging
assert "sdkVersion:'24'" in badging and "targetSdkVersion:'36'" in badging
signature = run('apksigner.bat', 'verify', '--verbose', '--print-certs', APK)
assert re.search(r'Signer #1 certificate SHA-256 digest: ([0-9a-fA-F]+)', signature)[1].lower() == CERT
assert 'Verified using v2 scheme (APK Signature Scheme v2): true' in signature
assert 'Verified using v3 scheme (APK Signature Scheme v3): true' in signature
alignment = run('zipalign.exe', '-c', '-P', '16', '-v', '4', APK)
assert re.search(r'Verification succes[s]?ful', alignment)
native = []
packaged_assets = [
    'assets/data/release-notes.json', 'assets/data/netease-full-catalog.json',
    'third_party/netease_protocol/LICENSE', 'third_party/netease_protocol/NOTICE.md',
    'third_party/netease_protocol/afp/afp.js', 'third_party/netease_protocol/afp/afp.wasm.js',
    'third_party/netease_protocol/afp/LICENSE',
    'third_party/unblock_netease/COPYING', 'third_party/unblock_netease/COPYING.LESSER', 'third_party/unblock_netease/NOTICE.md',
]
with zipfile.ZipFile(APK) as archive:
    assert archive.testzip() is None, 'APK CRC verification failed'
    names = archive.namelist()
    assert len(names) == len(set(names)), 'Duplicate ZIP entries'
    notes = json.loads(archive.read('assets/flutter_assets/assets/data/release-notes.json'))
    assert notes == json.loads((ROOT / 'assets/data/release-notes.json').read_text(encoding='utf-8'))
    assert notes['version'] == '1.0.15' and notes['versionCode'] == 36 and len(notes['releaseNotes']) == 8
    for asset in packaged_assets:
        assert hashlib.sha256(archive.read('assets/flutter_assets/' + asset)).hexdigest() == digest(ROOT / asset), asset
    assert not any(any(tag.lower() in name.lower() for tag in ['V107QA', 'V106QA', 'FixQA', 'BookQA', 'MestingQA', 'msyh', 'keystore', '.codex-artifacts', 'node_modules']) for name in names)
    assert not any(name.startswith('lib/x86') for name in names)
    assert {name.split('/')[1] for name in names if name.startswith('lib/') and name.endswith('.so')} == {'arm64-v8a', 'armeabi-v7a'}
    for name in names:
        if not (name.startswith('lib/') and name.endswith('.so')):
            continue
        data = archive.read(name)
        is64 = name.startswith('lib/arm64-v8a/')
        assert data[:6] == (b'\x7fELF\x02\x01' if is64 else b'\x7fELF\x01\x01'), name
        header = struct.unpack_from('<HHIQQQIHHHHHH' if is64 else '<HHIIIIIHHHHHH', data, 16)
        loads = []
        page = 16384 if is64 else 4096
        for index in range(header[9]):
            segment = struct.unpack_from('<IIQQQQQQ' if is64 else '<IIIIIIII', data, header[4] + index * header[8])
            if segment[0] != 1:
                continue
            offset, address = (segment[2], segment[3]) if is64 else (segment[1], segment[2])
            loads.append(segment[7] >= page and offset % page == address % page)
        assert loads and all(loads), f'ELF page alignment: {name}'
        native.append(name)
    plugins = {'RingDownloadPlugin': False, 'FlutterWebRTCPlugin': False}
    for name in names:
        if not re.fullmatch(r'classes\d*\.dex', name):
            continue
        dex = archive.read(name)
        assert b'IntegrationTestPlugin' not in dex
        for plugin in plugins:
            plugins[plugin] |= plugin.encode() in dex
    assert all(plugins.values()), plugins

assert digest(ROOT / 'pubspec.lock') == '6316dd4a0989c4a89b32d2a9a82bf603203743175909b52395a2d97cc4f2b5cc'
retained_key = ROOT / '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore'
assert digest(Path.home() / '.android/debug.keystore') == digest(retained_key)
delivery = ROOT / 'release/Mesting-Music-v1.0.15.apk'
apk_hash = digest(APK)
if delivery.exists():
    assert digest(delivery) == apk_hash, 'Never overwrite a different frozen APK'
else:
    shutil.copyfile(APK, delivery)
result = {
    'version': '1.0.15', 'androidVersionCode': 36,
    'packageName': 'com.mesting.music.beta', 'appName': 'Mesting Music',
    'file': delivery.name, 'fileSize': delivery.stat().st_size, 'sha256': apk_hash,
    'certificateSha256': CERT, 'v2Signature': True, 'v3Signature': True,
    'debuggable': False, 'zipAlignment16KiB': True,
    'arm64ElfAlignment16KiB': True, 'arm32ElfAlignment4KiB': True,
    'nativeLibraries': native, 'zipCrcVerified': True,
    'bundledNotesMatchVersion': True, 'bundledNotesCount': 8,
    'fullCatalogueAndAfpAssetsByteIdentical': True,
    'neteaseLicenseAndNoticePackaged': True, 'unblockLicenseAndNoticePackaged': True, 'qaFontsAbsent': True,
    'integrationTestPluginAbsent': True, 'signingArchiveKeyMatches': True,
    'pubspecLockSha256': digest(ROOT / 'pubspec.lock'),
    'flutterVersion': '3.41.9', 'dartVersion': '3.11.5',
    'javaVersion': 'Temurin 17.0.20.1+1',
    'deviceAccess': False, 'uploaded': False, 'published': False,
    'inputApkSha256': json.loads((OUT / 'signing-input.json').read_text(encoding='utf-8'))['inputApkSha256'],
    'gitCommitted': False, 'gitPushed': False,
    'upgradeIdentityVerifiedAgainst': 'frozen local 1.0.13 and 1.0.14 package identity and retained original certificate',
    'physicalUpgradeTestPerformed': False,
}
(ROOT / 'release/Mesting-Music-v1.0.15-verification.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
(ROOT / 'release/Mesting-Music-v1.0.15.apk.sha256').write_text(apk_hash + '  ' + delivery.name + '\n', encoding='utf-8')
for name, content in [('apk-badging.txt', badging), ('apk-signature.txt', signature), ('apk-alignment.txt', alignment)]:
    (OUT / name).write_text(content, encoding='utf-8')
print(json.dumps({'version': result['version'], 'code': 36, 'bytes': result['fileSize'], 'sha256': apk_hash, 'originalCertificate': True, 'packagedAssetsVerified': True}, indent=2))
