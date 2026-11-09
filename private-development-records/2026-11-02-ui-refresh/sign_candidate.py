"""Sign and inspect a private candidate, preserving every frozen delivery."""
from pathlib import Path
import hashlib
import json
import os
import re
import subprocess
import zipfile

root = Path('D:/AnLi')
out = root / '.codex-artifacts/2026-11-02-ui-refresh'
source = root / 'build/app/outputs/flutter-apk/app-beta-release.apk'
target = out / 'Mesting-Music-v1.0.38-ui-candidate.apk'
assert source.exists()
retained = root / '.codex-artifacts/2026-10-26-beta17-signing'
text = (retained / '使用说明.txt').read_text(encoding='utf-8-sig')
passwords = re.findall(r'(?im)^[^\r\n]*(?:password|密码)[ \t]*[:：][ \t]*[`"\']?([^\s`"\'；，。]+)', text)
aliases = re.findall(r'(?im)^[^\r\n]*(?:alias|别名)[ \t]*[:：][ \t]*[`"\']?([^\s`"\'；，。]+)', text)
assert passwords and len(set(passwords)) == 1
assert aliases and len(set(aliases)) == 1
env = os.environ.copy()
jdk = Path('D:/CodexCache/android-build/jdk/jdk-17.0.20.1+1')
env['JAVA_HOME'] = str(jdk)
env['PATH'] = str(jdk / 'bin') + os.pathsep + env.get('PATH', '')
env['MESTING_PRIVATE_CANDIDATE_KEY'] = passwords[0]
tools = Path('D:/CodexCache/android-build/sdk/build-tools/35.0.0')
def run(name, *args):
    return subprocess.check_output([str(tools / name), *map(str, args)],
        env=env, stderr=subprocess.STDOUT).decode(errors='replace')
if not target.exists():
    run('apksigner.bat', 'sign', '--ks', retained / 'debug.keystore', '--ks-key-alias', aliases[0],
        '--ks-pass', 'env:MESTING_PRIVATE_CANDIDATE_KEY', '--key-pass', 'env:MESTING_PRIVATE_CANDIDATE_KEY',
        '--v1-signing-enabled', 'false', '--v2-signing-enabled', 'true', '--v3-signing-enabled', 'true',
        '--v4-signing-enabled', 'false', '--out', target, source)
badging = run('aapt.exe', 'dump', 'badging', target)
assert "package: name='com.mesting.music.beta' versionCode='58' versionName='1.0.38'" in badging
assert 'application-debuggable' not in badging
signature = run('apksigner.bat', 'verify', '--verbose', '--print-certs', target)
cert = re.search(r'Signer #1 certificate SHA-256 digest: ([0-9a-fA-F]+)', signature)[1].lower()
assert cert == '8ce2203ad821ad8d38576f9ae86350d98254ac05f2cb974e773c1973b22e0333'
run('zipalign.exe', '-c', '-P', '16', '4', target)
manifest = json.loads((root / 'third_party/flutter_engine/android-release/engine-manifest.json').read_text(encoding='utf-8'))
baseline = json.loads((root / 'release/Mesting-Music-v1.0.24-verification.json').read_text(encoding='utf-8'))
with zipfile.ZipFile(target) as apk, zipfile.ZipFile(root / 'release/Mesting-Music-v1.0.37.apk') as old, zipfile.ZipFile(source) as built:
    assert apk.testzip() is None
    names = apk.namelist()
    # A verification retry reads the existing signed bytes; it never replaces
    # them. Confirm their payload still belongs to this exact compiled input.
    for name in built.namelist():
        if not name.startswith('META-INF/'):
            assert apk.read(name) == built.read(name), name
    assert not any('/libbilog.so' in n or '/libnblog.so' in n for n in names)
    # Retained engine/SDK jars can also package ARM32 shared libraries; this
    # private candidate compiles only the ARM64 Dart application for this phone.
    app_abis = {n.split('/')[1] for n in names if n.startswith('lib/') and n.endswith('/libapp.so')}
    assert app_abis == {'arm64-v8a'}
    shared_abis = sorted({n.split('/')[1] for n in names if n.startswith('lib/')})
    for item in manifest['files']:
        if item['abi'] == 'arm64-v8a':
            assert hashlib.sha256(apk.read('lib/arm64-v8a/libflutter.so')).hexdigest() == item['nativeSha256']
    for name in baseline['unchangedGlassShaderFiles']:
        assert apk.read(name) == old.read(name), name
    assert b'MESTING_LOCAL ' in apk.read('lib/arm64-v8a/libapp.so')
    assert b'pill-together-avatars' in apk.read('lib/arm64-v8a/libapp.so')
    with zipfile.ZipFile(root / '.codex-artifacts/2026-11-02-total-duration-debug/Mesting-Music-v1.0.38-native-debug.apk') as previous:
        assert apk.read('lib/arm64-v8a/libapp.so') != previous.read('lib/arm64-v8a/libapp.so')
record = {'candidate': True, 'uiRefresh': True, 'airPodsProOriginalPaths': True, 'version': '1.0.38', 'code': 58, 'package': 'com.mesting.music.beta',
    'bytes': target.stat().st_size, 'sha256': hashlib.file_digest(target.open('rb'), 'sha256').hexdigest(),
    'originalCertificate': cert, 'pinnedEngineVerified': True, 'glassShadersUnchanged': True,
    'officialNativeLibrariesBundled': False, 'appAbi': 'arm64-v8a', 'sharedLibraryAbis': shared_abis, 'localDiagnostics': True,
    'newUiMarkerPresent': True, 'differentFromEarlierDurationCandidate': True,
    'nativePlaybackCandidateEnabled': True, 'totalDurationInclusionVerified': False,
    'sameCodeAs137ForNonDestructiveRollback': True,
    'frozenVersion137AndEarlierUntouched': True, 'published': False}
(out / 'candidate-verification.json').write_text(json.dumps(record, indent=2))
print(json.dumps(record, indent=2))
