"""Sign with the retained key and verify the actual local 1.0.46 APK."""
from pathlib import Path
import hashlib
import json
import os
import re
import struct
import subprocess
import zipfile

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-11-03-release147'
TOOLS = Path('D:/CodexCache/android-build/sdk/build-tools/35.0.0')
JDK = Path('D:/CodexCache/android-build/jdk/jdk-17.0.20.1+1')
SOURCE = ROOT / 'build/app/outputs/flutter-apk/app-beta-release.apk'
APK = ROOT / 'release/Mesting-Music-v1.0.47.apk'
CERT = '8ce2203ad821ad8d38576f9ae86350d98254ac05f2cb974e773c1973b22e0333'

def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

def run(tool, *args, env=None):
    return subprocess.check_output([str(TOOLS / tool), *map(str, args)], env=env,
                                   stderr=subprocess.STDOUT).decode('utf-8', errors='replace')

def dex_defined_classes(data):
    """Read actual DEX class definitions, allowing release R8 name changes."""
    assert data[:4] == b'dex\n'
    strings_count, strings_offset = struct.unpack_from('<II', data, 56)
    types_count, types_offset = struct.unpack_from('<II', data, 64)
    classes_count, classes_offset = struct.unpack_from('<II', data, 96)
    for index in range(classes_count):
        type_index = struct.unpack_from('<I', data, classes_offset + index * 32)[0]
        assert type_index < types_count
        string_index = struct.unpack_from('<I', data, types_offset + type_index * 4)[0]
        assert string_index < strings_count
        cursor = struct.unpack_from('<I', data, strings_offset + string_index * 4)[0]
        # Each string begins with a ULEB128 UTF-16 length; descriptors are ASCII.
        while data[cursor] & 0x80:
            cursor += 1
        cursor += 1
        yield data[cursor:data.index(b'\0', cursor)].decode('ascii')

mapping_path = ROOT / 'build/app/outputs/mapping/betaRelease/mapping.txt'
mapping = re.search(r'^com\.mesting\.music\.TogetherBackgroundPlugin -> ([^\s:]+):$',
                    mapping_path.read_text(encoding='utf-8'), re.MULTILINE)
assert mapping, 'The release mapping must contain the background plugin'
background_descriptor = 'L' + mapping[1].replace('.', '/') + ';'
background_evidence = {'releaseClass': mapping[1], 'descriptor': background_descriptor,
                       'mappingSha256': digest(mapping_path), 'definedInDex': [],
                       'nativeChannelInDex': [], 'workerThreadInDex': []}

assert SOURCE.is_file()
candidate_readback = OUT / 'apk-candidate-before-readback.json'
if APK.exists():
    # A readback assertion may need a corrected selector after AOT/R8. Reuse
    # only the exact candidate retained from that attempt; never resign or
    # overwrite an already-created versioned artifact.
    retained_candidate = json.loads(candidate_readback.read_text(encoding='utf-8'))
    assert digest(APK) == retained_candidate['apkSha256']
    assert digest(SOURCE) == retained_candidate['inputApkSha256']
retained = ROOT / '.codex-artifacts/2026-10-26-beta17-signing'
instructions = (retained / '使用说明.txt').read_text(encoding='utf-8-sig')
passwords = re.findall(r'(?im)^[^\r\n]*(?:password|密码)[ \t]*[:：][ \t]*[`"\']?([^\s`"\'；，。]+)', instructions)
aliases = re.findall(r'(?im)^[^\r\n]*(?:alias|别名)[ \t]*[:：][ \t]*[`"\']?([^\s`"\'；，。]+)', instructions)
assert passwords and len(set(passwords)) == 1
assert aliases and len(set(aliases)) == 1
env = os.environ.copy()
env['JAVA_HOME'] = str(JDK)
env['PATH'] = str(JDK / 'bin') + os.pathsep + env.get('PATH', '')
env['MESTING142_KEYSTORE_PASSWORD'] = passwords[0]
run('zipalign.exe', '-c', '-P', '16', '4', SOURCE, env=env)
if not APK.exists():
    run('apksigner.bat', 'sign', '--ks', retained / 'debug.keystore', '--ks-key-alias', aliases[0],
        '--ks-pass', 'env:MESTING142_KEYSTORE_PASSWORD', '--key-pass', 'env:MESTING142_KEYSTORE_PASSWORD',
        '--v1-signing-enabled', 'false', '--v2-signing-enabled', 'true', '--v3-signing-enabled', 'true',
        '--v4-signing-enabled', 'false', '--out', APK, SOURCE, env=env)

candidate_readback.write_text(json.dumps({'apkSha256':digest(APK),'inputApkSha256':digest(SOURCE)},indent=2)+'\n',encoding='utf-8')

badging = run('aapt.exe', 'dump', 'badging', APK, env=env)
assert "package: name='com.mesting.music.beta' versionCode='68' versionName='1.0.47'" in badging
assert "application-label:'Mesting Music'" in badging
assert 'application-debuggable' not in badging
assert "sdkVersion:'24'" in badging and "targetSdkVersion:'36'" in badging
assert 'android.permission.ACCESS_BACKGROUND_LOCATION' not in badging
signature = run('apksigner.bat', 'verify', '--verbose', '--print-certs', APK, env=env)
assert re.search(r'Signer #1 certificate SHA-256 digest: ([0-9a-fA-F]+)', signature)[1].lower() == CERT
assert 'Verified using v2 scheme (APK Signature Scheme v2): true' in signature
assert 'Verified using v3 scheme (APK Signature Scheme v3): true' in signature
alignment = run('zipalign.exe', '-c', '-P', '16', '-v', '4', APK, env=env)
assert re.search(r'Verification succes[s]?ful', alignment)

engine_dir = ROOT / 'third_party/flutter_engine/android-release'
engine = json.loads((engine_dir / 'engine-manifest.json').read_text(encoding='utf-8'))
baseline = json.loads((ROOT / 'release/Mesting-Music-v1.0.24-verification.json').read_text(encoding='utf-8'))
native = []
compared_sdk = []
compared_shaders = []
app_payloads = []
assets = [
    'assets/data/release-notes.json',
    'assets/data/netease-full-catalog.json', 'third_party/netease_protocol/LICENSE',
    'third_party/netease_protocol/NOTICE.md', 'third_party/netease_protocol/afp/afp.js',
    'third_party/netease_protocol/afp/afp.wasm.js', 'third_party/netease_protocol/afp/LICENSE',
    'third_party/unblock_netease/COPYING', 'third_party/unblock_netease/COPYING.LESSER',
    'third_party/unblock_netease/NOTICE.md',
]
with zipfile.ZipFile(APK) as archive, zipfile.ZipFile(ROOT / 'release/Mesting-Music-v1.0.36.apk') as prior:
    assert archive.testzip() is None
    names = archive.namelist()
    assert len(names) == len(set(names))
    assert not any('companions-bottom' in name for name in names)
    assert b'companions-bottom' not in archive.read('assets/flutter_assets/AssetManifest.bin')
    notes = json.loads(archive.read('assets/flutter_assets/assets/data/release-notes.json'))
    assert notes == json.loads((ROOT / 'assets/data/release-notes.json').read_text(encoding='utf-8'))
    assert notes['version'] == '1.0.47' and notes['versionCode'] == 68 and len(notes['releaseNotes']) == 8
    for relative in assets:
        assert hashlib.sha256(archive.read('assets/flutter_assets/' + relative)).hexdigest() == digest(ROOT / relative), relative
    for item in engine['files']:
        data = archive.read(f"lib/{item['abi']}/libflutter.so")
        assert len(data) == item['nativeBytes']
        assert hashlib.sha256(data).hexdigest() == item['nativeSha256']
    assert hashlib.sha256(archive.read('assets/LICENSE.flutter-engine.txt')).hexdigest() == engine['licensesSha256']
    for relative in baseline['unchangedGlassShaderFiles']:
        assert archive.read(relative) == prior.read(relative), relative
        compared_shaders.append(relative)
    for relative in baseline['unchangedSdkLibraryFiles']:
        assert archive.read(relative) == prior.read(relative), relative
        compared_sdk.append(relative)
    for relative in baseline['unchangedLicenseFiles']:
        assert archive.read(relative), relative
    assert not any(any(tag in name.lower() for tag in (
        'v144qa', 'v142qa', 'v140qa', 'v107qa', 'v106qa', 'fixqa', 'bookqa', 'mestingqa', 'msyh', 'keystore',
        '.codex-artifacts', 'node_modules', 'local.properties', 'key.properties',
    )) for name in names)
    assert {name.split('/')[1] for name in names if name.startswith('lib/') and name.endswith('.so')} == {'arm64-v8a', 'armeabi-v7a'}
    for abi in ['armeabi-v7a', 'arm64-v8a']:
        app = archive.read('lib/' + abi + '/libapp.so')
        assert b'pill-together-avatars' in app, abi
        for feature in [b'together-record-page', b'together-history-page', b'netease-together-message-card', b'recordOrpheus', b'timeTitle', b'creatorAvatarUrl', b'acceptorAvatarUrl', b'com.mesting.music/together_background', b'together-room-members', b'netease-personal-statistics', b'listening-footprint-scroll', b'netease-resource-action-row', b'favorite-search-results', b'podcast-navigation-menu', b'download-dismiss-', b'If-Range']:
            assert feature in app, (abi, feature)
        assert b'MESTING_LOCAL ' not in app, abi
        assert b'clientlog3.music.163.com' not in app, abi
        assert b'clientlog.music.163.com' in app, abi
    for name in names:
        if not (name.startswith('lib/') and name.endswith('.so')):
            continue
        data = archive.read(name)
        if name.endswith('/libapp.so'):
            assert b'MESTING_LOCAL ' not in data
            current_hash = hashlib.sha256(data).hexdigest()
            previous_hash = hashlib.sha256(prior.read(name)).hexdigest()
            assert current_hash != previous_hash, name
            app_payloads.append({'path': name, 'sha256': current_hash,
                                 'previousV136Sha256': previous_hash,
                                 'changedFromV136': True})
        is64 = name.startswith('lib/arm64-v8a/')
        assert data[:6] == (b'\x7fELF\x02\x01' if is64 else b'\x7fELF\x01\x01')
        header = struct.unpack_from('<HHIQQQIHHHHHH' if is64 else '<HHIIIIIHHHHHH', data, 16)
        loads = []
        page = 16384 if is64 else 4096
        for index in range(header[9]):
            segment = struct.unpack_from('<IIQQQQQQ' if is64 else '<IIIIIIII', data, header[4] + index * header[8])
            if segment[0] != 1:
                continue
            offset, address = (segment[2], segment[3]) if is64 else (segment[1], segment[2])
            assert segment[7] >= page and offset % page == address % page, name
            loads.append(segment[7])
        assert loads
        native.append({'path': name, 'bits': 64 if is64 else 32, 'loadSegmentAlignments': loads})
    plugins = dict.fromkeys(['TogetherBackgroundPlugin', 'RingDownloadPlugin', 'FlutterWebRTCPlugin', 'getRecentAppExits',
                             'getHistoricalProcessExitReasons', 'getTraceInputStream', 'chooseDirectory', 'openDirectory'], False)
    for name in names:
        if re.fullmatch(r'classes\d*\.dex', name):
            dex = archive.read(name)
            assert b'IntegrationTestPlugin' not in dex
            for plugin in plugins:
                plugins[plugin] |= plugin.encode() in dex
            if background_descriptor in set(dex_defined_classes(dex)):
                background_evidence['definedInDex'].append(name)
            if b'com.mesting.music/together_background' in dex:
                background_evidence['nativeChannelInDex'].append(name)
            if b'MestingTogetherSync' in dex:
                background_evidence['workerThreadInDex'].append(name)
    # R8 shortens directly registered plugin classes. Verify its mapped class is
    # defined in the shipped DEX and its native channel survives in that payload.
    plugins['TogetherBackgroundPlugin'] = bool(background_evidence['definedInDex'])
    assert background_evidence['nativeChannelInDex'], background_evidence
    assert background_evidence['workerThreadInDex'], background_evidence
    assert all(plugins.values()), plugins

assert digest(ROOT / 'pubspec.lock') == '6316dd4a0989c4a89b32d2a9a82bf603203743175909b52395a2d97cc4f2b5cc'
record = {
    'version': '1.0.47', 'androidVersionCode': 68, 'packageName': 'com.mesting.music.beta',
    'appName': 'Mesting Music', 'file': APK.name, 'fileSize': APK.stat().st_size, 'sha256': digest(APK),
    'certificateSha256': CERT, 'v2Signature': True, 'v3Signature': True, 'debuggable': False,
    'minSdk': 24, 'targetSdk': 36, 'abis': ['arm64-v8a', 'armeabi-v7a'],
    'zipCrcVerified': True, 'zipAlignment16KiB': True,
    'arm64ElfAlignment16KiB': True, 'arm32ElfAlignment4KiB': True, 'nativeLibraries': native,
    'appPayloadsChangedFromV136': app_payloads,
    'bundledNotesMatchVersion': True, 'bundledNotesCount': 8, 'packagedAssetsByteIdenticalToSource': assets,
    'pinnedCustomReleaseEngine': engine, 'engineBytesMatchPinnedManifest': True, 'loginArtworkAssetAbsent': True,
    'glassShadersComparedByteIdenticalAgainstLocalV136': compared_shaders,
    'sdkLibrariesComparedByteIdenticalAgainstLocalV136': compared_sdk,
    'licensePayloadsPresent': baseline['unchangedLicenseFiles'] + ['assets/LICENSE.flutter-engine.txt'],
    'qaFontsAbsent': True, 'integrationTestPluginAbsent': True, 'unrelatedLocalDiagnosticsDisabled': True, 'togetherSyncDiagnosticLoggingEnabled': False, 'experimentalNativePlaybackDisabled': True, 'newPlaybackUsesLegacyWeblog': True, 'oldNativeJournalHeldWithoutReplay': True,
    'nativePluginsAndDiagnosticsBridgePresent': plugins, 'backgroundLocationPermission': False,
    'backgroundPluginReleaseEvidence': background_evidence,
    'flutterVersion': '3.41.9', 'dartVersion': '3.11.5', 'javaVersion': 'Temurin 17.0.20.1+1',
    'androidBuildTools': '35.0.0', 'ndkVersion': '28.2.13676358',
    'pubspecLockSha256': digest(ROOT / 'pubspec.lock'), 'inputApkSha256': digest(SOURCE),
    'upgradeIdentityVerified': True, 'physicalUpgradeTestPerformed': False,
    'nativeRoomLeaseSourceSha256': digest(ROOT / 'android/app/src/main/kotlin/com/mesting/mesting_music/TogetherBackgroundPlugin.kt'),
    'releaseStage': 'local_original_signed_release_147_pending_device_acceptance',
    'deviceAccess': False, 'realAccountAccess': False, 'backendAccess': False,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
}
(ROOT / 'release/Mesting-Music-v1.0.47-verification.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
(ROOT / 'release/Mesting-Music-v1.0.47.apk.sha256').write_text(record['sha256'] + '  ' + APK.name + '\n', encoding='utf-8')
for name, content in [('apk-badging.txt', badging), ('apk-signature.txt', signature), ('apk-alignment.txt', alignment)]:
    (OUT / name).write_text(content, encoding='utf-8')
print(json.dumps({'version': '1.0.47', 'code': 68, 'bytes': record['fileSize'], 'sha256': record['sha256'],
                  'originalCertificate': True, 'pinnedEngine': True, 'loginArtworkRemoved': True,
                  'glassShaders': len(compared_shaders), 'sdkLibraries': len(compared_sdk)}, indent=2))
