"""Sign the new candidate only, then inspect the actual APK before delivery."""
from pathlib import Path
import hashlib
import json
import os
import re
import shutil
import struct
import subprocess
import zipfile

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
TOOLS = Path('D:/CodexCache/android-build/sdk/build-tools/35.0.0')
JDK = Path('D:/CodexCache/android-build/jdk/jdk-17.0.20.1+1')
SOURCE = ROOT / 'build/app/outputs/flutter-apk/app-beta-release.apk'
CANDIDATE = OUT / 'original-signed-candidate.apk'
TARGET = ROOT / 'release/Mesting-Music-v1.0.72.apk'
CERT = '8ce2203ad821ad8d38576f9ae86350d98254ac05f2cb974e773c1973b22e0333'

def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

def run(tool, *args, env=None):
    completed = subprocess.run([str(TOOLS / tool), *map(str, args)], env=env,
                               stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    if completed.returncode:
        (OUT / 'sign-tool-error.log').write_bytes(completed.stdout)
        raise RuntimeError('APK tool failed; inspect the private tool log')
    return completed.stdout.decode('utf-8', errors='replace')

assert SOURCE.is_file()
before = json.loads((OUT / 'protected-state.json').read_text('utf-8'))
assert digest(ROOT / 'pubspec.lock') == before['lockSha256']
retained = ROOT / '.codex-artifacts/2026-10-26-beta17-signing'
assert digest(retained / 'debug.keystore') == before['signingSha256']
# Read only the established local signing instructions; neither credentials nor
# process environment are printed or included in source/verification artifacts.
instructions = (retained / '使用说明.txt').read_text('utf-8-sig')
passwords = re.findall(r'(?im)^[^\r\n]*(?:password|密码)[ \t]*[:：][ \t]*[`"\']?([^\s`"\'；，。]+)', instructions)
aliases = re.findall(r'(?im)^[^\r\n]*(?:alias|别名)[ \t]*[:：][ \t]*[`"\']?([^\s`"\'；，。]+)', instructions)
assert passwords and len(set(passwords)) == 1 and aliases and len(set(aliases)) == 1
env = os.environ.copy()
env['JAVA_HOME'] = str(JDK)
env['PATH'] = str(JDK / 'bin') + os.pathsep + env.get('PATH', '')
env['MESTING163_KEYSTORE_PASSWORD'] = passwords[0]
run('zipalign.exe', '-c', '-P', '16', '4', SOURCE, env=env)
candidate_record = OUT / 'signed-candidate-input.json'
if CANDIDATE.exists():
    record = json.loads(candidate_record.read_text('utf-8'))
    assert record['inputSha256'] == digest(SOURCE) and record['sha256'] == digest(CANDIDATE)
else:
    run('apksigner.bat', 'sign', '--ks', retained / 'debug.keystore', '--ks-key-alias', aliases[0],
        '--ks-pass', 'env:MESTING163_KEYSTORE_PASSWORD', '--key-pass', 'env:MESTING163_KEYSTORE_PASSWORD',
        '--v1-signing-enabled', 'false', '--v2-signing-enabled', 'true', '--v3-signing-enabled', 'true',
        '--v4-signing-enabled', 'false', '--out', CANDIDATE, SOURCE, env=env)
    candidate_record.write_text(json.dumps({'inputSha256': digest(SOURCE), 'sha256': digest(CANDIDATE)}, indent=2) + '\n', 'utf-8')

badging = run('aapt.exe', 'dump', 'badging', CANDIDATE, env=env)
assert "package: name='com.mesting.music' versionCode='93' versionName='1.0.72'" in badging
assert "application-label:'Mesting Music'" in badging
assert 'application-debuggable' not in badging
assert "sdkVersion:'24'" in badging and "targetSdkVersion:'36'" in badging
assert 'android.permission.ACCESS_BACKGROUND_LOCATION' not in badging
signature = run('apksigner.bat', 'verify', '--verbose', '--print-certs', CANDIDATE, env=env)
assert re.search(r'Signer #1 certificate SHA-256 digest: ([0-9a-fA-F]+)', signature)[1].lower() == CERT
assert 'Verified using v2 scheme (APK Signature Scheme v2): true' in signature
assert 'Verified using v3 scheme (APK Signature Scheme v3): true' in signature
alignment = run('zipalign.exe', '-c', '-P', '16', '-v', '4', CANDIDATE, env=env)
assert re.search(r'Verification succes[s]?ful', alignment)
engine = json.loads((ROOT / 'third_party/flutter_engine/android-release/engine-manifest.json').read_text('utf-8'))
prior_record = json.loads((ROOT / 'release/Mesting-Music-v1.0.62-verification.json').read_text('utf-8'))
assert digest(ROOT / 'release/Mesting-Music-v1.0.62.apk') == prior_record['sha256']
unchanged_native, app_payloads, elf = [], [], []
with zipfile.ZipFile(CANDIDATE) as apk, zipfile.ZipFile(ROOT / 'release/Mesting-Music-v1.0.62.apk') as prior:
    assert apk.testzip() is None
    names = apk.namelist()
    assert {p.split('/')[1] for p in names if p.startswith('lib/') and p.endswith('.so')} == {'arm64-v8a', 'armeabi-v7a'}
    notes = apk.read('assets/flutter_assets/assets/data/release-notes.json')
    assert notes == (ROOT / 'assets/data/release-notes.json').read_bytes()
    parsed_notes = json.loads(notes)
    assert parsed_notes['version'] == '1.0.72' and parsed_notes['versionCode'] == 93 and len(parsed_notes['releaseNotes']) == 8
    assert not any(any(tag in p.lower() for tag in ['.keystore', '.jks', 'test/support/tls155', 'msyh', 'mestingqa', '.codex-artifacts', 'integration_test', 'local.properties', 'key.properties']) for p in names)
    assert b'companions-bottom' not in apk.read('assets/flutter_assets/AssetManifest.bin')
    for path in prior_record['glassShadersComparedByteIdenticalAgainstLocalV136']:
        assert apk.read(path) == prior.read(path), path
    for item in engine['files']:
        data = apk.read(f"lib/{item['abi']}/libflutter.so")
        assert len(data) == item['nativeBytes'] and hashlib.sha256(data).hexdigest() == item['nativeSha256']
    assert hashlib.sha256(apk.read('assets/LICENSE.flutter-engine.txt')).hexdigest() == engine['licensesSha256']
    for path in [p for p in names if p.startswith('lib/') and p.endswith('.so')]:
        data = apk.read(path)
        if path.endswith('/libapp.so'):
            assert data != prior.read(path)
            for marker in [b'ranking-masthead-title', b'ranking-collapsed-back',
                           b'ranking-play-all', b'lite_grade_rejected', b'cover-play-', b'playlist-play-all', b'cover-play-mode-', b'netease-reward-calendar', b'/api/ad/listening/rights/gain', b'/api/ad/listening/rights/qualification', b'motivationad', b'rewardQualification', b'rightsExtJson']:
                assert marker in data, (path, marker)
            assert b'platform-switch-reauthenticate' in data
            for marker in [b'lxChangqing', b'lxYuningxi', b'awaitingSource', b'MestingLxHost']:
                assert marker in data, (path, marker)
            assert b'mestingArchiveSave' in data and b'mestingVerifyReopen' in data
            assert b'MESTING_LOCAL ' not in data and b'clientlog3.music.163.com' not in data
            assert b'clientlog.music.163.com' in data
            # The retired phone clients must be absent from shipped AOT code.
            assert b'/passport/mobile/send_code/' not in data
            assert b'/passport/mobile/sms_login/' not in data
            assert b'is_from_iesaccountsaas' in data and b'account_sdk_source_info' in data
            for marker in [b'/luna/pc/track_v2', b'qishui-feed-mode-dropdown', b'cenc-aes-ctr', b'qishui-signer-settings-page', b'qishui-inline-lyrics']:
                assert marker in data, (path, marker)
            for marker in [b'mesting_qishui_signer_v1',
                           b'mesting_music_platform_qishui_signer_settings_v1',
                           b'download.csnas.asia']:
                assert marker in data, (path, marker)
            for marker in [b'vod-luna.douyin.com', b'qishui-official-preview-notice',
                           b'playerInfoRead', b'mediaModelParse', b'mediaSelection',
                           b'audioDecode', b'audioVerify', b'nativeStep', b'nativeReason', b'cachePathInvalid']:
                assert marker in data, (path, marker)
            for marker in [b'accountBoundSigning', b'qishui-account-signing', b'entitlementRead', b'accountCookieSigned', b'coverAlternatives']:
                assert marker in data, (path, marker)
            app_payloads.append({'path': path, 'sha256': hashlib.sha256(data).hexdigest()})
        else:
            assert data == prior.read(path), path
            unchanged_native.append({'path': path, 'sha256': hashlib.sha256(data).hexdigest()})
        is64 = path.startswith('lib/arm64-v8a/')
        assert data[:6] == (b'\x7fELF\x02\x01' if is64 else b'\x7fELF\x01\x01')
        header = struct.unpack_from('<HHIQQQIHHHHHH' if is64 else '<HHIIIIIHHHHHH', data, 16)
        loads = []
        for index in range(header[9]):
            segment = struct.unpack_from('<IIQQQQQQ' if is64 else '<IIIIIIII', data, header[4] + index * header[8])
            if segment[0] != 1: continue
            offset, address = (segment[2], segment[3]) if is64 else (segment[1], segment[2])
            page = 16384 if is64 else 4096
            assert segment[7] >= page and offset % page == address % page, path
            loads.append(segment[7])
        assert loads
        elf.append({'path': path, 'bits': 64 if is64 else 32, 'loadSegmentAlignments': loads})
    for row in json.loads((ROOT / 'third_party/lx_music_source/upstream.json').read_text('utf-8'))['sources']:
        data = apk.read('assets/flutter_assets/third_party/lx_music_source/' + row['path'])
        assert hashlib.sha256(data).hexdigest() == row['sha256']
    for extra in ['bridge.js', 'host.js', 'NOTICE.md', 'crypto-js/LICENSE', 'crypto-js/crypto-js.js']:
        assert apk.read('assets/flutter_assets/third_party/lx_music_source/' + extra) == (ROOT / 'third_party/lx_music_source' / extra).read_bytes()
    for path in prior_record['licensePayloadsPresent']:
        assert apk.read(path), path
    for path in ['third_party/flutter_secure_storage/package/LICENSE', 'third_party/flutter_secure_storage/NOTICE.md', 'third_party/okhttp/LICENSE', 'third_party/okhttp/NOTICE.md']:
        assert apk.read('assets/flutter_assets/' + path) == (ROOT / path).read_bytes()
    soda = json.loads((ROOT / 'third_party/qishui_effects/PROVENANCE.json').read_text('utf-8'))
    for item in soda['libraries']:
        basename = Path(item['path']).name
        asset = 'assets/flutter_assets/third_party/qishui_effects/arm64-v8a/' + basename
        assert hashlib.sha256(apk.read(asset)).hexdigest() == item['sha256']
        assert not any(p.startswith('lib/') and p.endswith('/' + basename) for p in names)
    for name in ['NOTICE.md', 'PROVENANCE.json']:
        assert apk.read('assets/flutter_assets/third_party/qishui_effects/' + name) == (ROOT / 'third_party/qishui_effects' / name).read_bytes()
    assert apk.read('assets/flutter_assets/assets/data/qishui-effects.json') == (ROOT / 'assets/data/qishui-effects.json').read_bytes()
    web_auth = json.loads((ROOT / 'third_party/qishui_web_auth/PROVENANCE.json').read_text('utf-8'))
    for entry in web_auth['files']:
        name = Path(entry['path']).name
        assert hashlib.sha256(apk.read('assets/qishui-web-auth/' + name)).hexdigest() == entry['sha256'], name
    for name in ['NOTICE.md', 'LICENSE-AGPL-3.0.txt', 'LICENSE-REACT-MIT.txt', 'PROVENANCE.json']:
        assert apk.read('assets/qishui-web-auth/' + name), name
    dex_payloads = [apk.read(p) for p in names if re.fullmatch(r'classes\d*\.dex', p)]
    assert dex_payloads and not any(b'IntegrationTestPlugin' in data for data in dex_payloads)
    assert any(b'com.mesting.music/network' in data for data in dex_payloads)
    assert any(b'com.mesting.music/qishui_web_auth' in data for data in dex_payloads)
    assert any(b'com.mesting.music/qishui_official_audio' in data for data in dex_payloads)
    assert apk.read('assets/flutter_assets/third_party/qishui_official_media/LICENSE')
    assert apk.read('assets/flutter_assets/third_party/qishui_official_media/NOTICE.md')
    for marker in [b'xmst', b'xmsty', b'msToken', b'luna://luna.com/scan_qr_code', b'com.luna.music']:
        assert any(marker in data for data in dex_payloads), marker
    for marker in [b'qishui-qr-open-scanner', b'qishui-qr-refresh', b'qishui-qr-verify']:
        assert all(marker in apk.read('lib/' + abi + '/libapp.so') for abi in ['arm64-v8a', 'armeabi-v7a']), marker
    # Inspect the actual AOT payload, not just the workspace source/version.
    for marker in [b'bff-pc.qishui.com', b'account_sdk_source_info', b'is_from_iesaccountsaas', b'3.5.2']:
        assert all(marker in apk.read('lib/' + abi + '/libapp.so') for abi in ['arm64-v8a', 'armeabi-v7a']), marker
    assert any(b'Lcom/it_nomads/fluttersecurestorage/VerifiedCredentialSlots;' in data for data in dex_payloads)
    assert not any(b'com.mesting.music.storageprobe156' in data for data in dex_payloads)
    assert any(b'com.mesting.music/together_background' in data for data in dex_payloads)

record = {
    'version': '1.0.72', 'androidVersionCode': 93, 'packageName': 'com.mesting.music',
    'appName': 'Mesting Music', 'file': TARGET.name, 'fileSize': CANDIDATE.stat().st_size,
    'sha256': digest(CANDIDATE), 'certificateSha256': CERT, 'originalSignature': True,
    'v2Signature': True, 'v3Signature': True, 'debuggable': False, 'minSdk': 24, 'targetSdk': 36,
    'abis': ['arm64-v8a', 'armeabi-v7a'], 'zipCrcVerified': True, 'zipAlignment16KiB': True,
    'nativeLibraries': elf, 'unchangedNonAppNativePayloadsFrom62': unchanged_native,
    'changedAppPayloads': app_payloads, 'pinnedCustomReleaseEngine': engine,
    'engineBytesMatchPinnedManifest': True,
    'glassShadersComparedByteIdenticalAgainstLocalV136': prior_record['glassShadersComparedByteIdenticalAgainstLocalV136'],
    'glassShadersByteIdenticalTo62': True, 'bundledNotesCount': 8, 'bundledNotesMatchVersion': True,
    'licensePayloadsPresent': prior_record['licensePayloadsPresent'], 'testCertificateAndQaFontsAbsent': True,
    'integrationTestPluginAbsent': True, 'localDiagnosticsEnabled': False,
    'togetherSyncDiagnosticLoggingEnabled': False, 'nativePlaybackExperimentEnabled': False,
    'newPlaybackUsesLegacyWeblog': True, 'oldAcceptedOrUnknownRecordsReplayed': False,
    'pubspecLockSha256': digest(ROOT / 'pubspec.lock'), 'lockUnchangedFrom62': True,
    'physicalUpgradeTestPerformed': False, 'deviceAccess': False, 'deviceScope': 'No phone/account/NAS/service requests in 1.0.72; historical 1.0.69 anonymous health is not current authenticated acceptance', 'realAccountAccess': False,
    'sodaOfficialDspAssetLibraries': soda['libraries'], 'sodaDspRequiresArm64And4KiBPages': True,
    'sodaDspRuntimeExecuted': False, 'sodaSmsAuthenticationVerified': False, 'sodaMediaAndBenefitsVerified': False,
    'phoneLoginRemoved': True, 'qrOnlyLogin': True, 'candidateIntegrationOnly': False, 'officialAudioOnly': True, 'externalSignerSelectedByUser': True, 'userConfigurableHttpAndHttpsSigner': True, 'officialPlayerInfoLunaOriginSupported': True, 'officialFullAudioPreferred': True, 'officialPreviewsLabeled': True, 'independentSignerStorageNamespace': True, 'signerNotConfiguredMeansNoNetwork': True, 'qishuiRestoreMetadataOnly': True, 'anonymousNasReadinessCheckedThisRelease': False, 'prior69AnonymousNasReadinessChecked': True, 'privateSignerCredentialsBundled': False, 'collaboratorUiCommitsIntegratedLocally': ['454c10417ebdaeb8995162cb802465bb0628d300', 'bb4b8bccb54693b20b98861aa26ae5fad427cf65'], 'musicCredentialsSentToSigner': False, 'musicCredentialsSentToSignerScope': 'No real account/service requests in this release validation', 'accountCookieSigningCapability': 'Explicit opt-in; custom HTTPS helper; track_v2 media only', 'officialCencLicenseAndNoticeBundled': True, 'prior66QrAndFullReopenUserAccepted': True, 'backendAccess': False, 'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
}
if TARGET.exists():
    assert digest(TARGET) == record['sha256'], 'Never overwrite a frozen delivery'
else:
    with TARGET.open('xb') as destination, CANDIDATE.open('rb') as source:
        shutil.copyfileobj(source, destination)
for name, text in [('apk-badging.txt', badging), ('apk-signature.txt', signature), ('apk-alignment.txt', alignment)]:
    (OUT / name).write_text(text, 'utf-8')
(ROOT / 'release/Mesting-Music-v1.0.72-verification.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', 'utf-8')
(ROOT / 'release/Mesting-Music-v1.0.72.apk.sha256').write_text(record['sha256'] + '  ' + TARGET.name + '\n', 'utf-8')
print(json.dumps({'version': '1.0.72', 'code': 93, 'bytes': record['fileSize'], 'sha256': record['sha256'], 'originalCertificate': True, 'unchangedNonAppNativeLibraries': len(unchanged_native), 'glassShaders': 7}, indent=2))
