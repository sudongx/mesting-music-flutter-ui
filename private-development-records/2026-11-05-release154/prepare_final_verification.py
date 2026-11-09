"""Adapt local delivery checks without touching any earlier frozen version."""
from pathlib import Path
import hashlib
import json

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent
old = root / '.codex-artifacts/2026-11-04-release153'

def adapt(text):
    return (text.replace('2026-11-04-release153', '2026-11-05-release154')
        .replace('2026-11-04-v1.0.53', '2026-11-05-v1.0.54')
        .replace('1.0.53', '1.0.54').replace('MESTING153_', 'MESTING154_')
        .replace("versionCode='74'", "versionCode='75'")
        .replace("['versionCode'] == 74", "['versionCode'] == 75")
        .replace("'androidVersionCode': 74", "'androidVersionCode': 75")
        .replace('versionCode: 74', 'versionCode: 75')
        .replace("'versionCode': 74", "'versionCode': 75")
        .replace("'code': 74", "'code': 75")
        .replace('1.0.54+74', '1.0.54+75')
        .replace('release_153_pending', 'release_154_pending'))

sign = adapt((old / 'sign_and_verify.py').read_text('utf-8'))
sign = sign.replace("for relative in baseline['unchangedSdkLibraryFiles']:\n", "for relative in baseline['unchangedSdkLibraryFiles']:\n        if relative.endswith('/libkugou_server.so'):\n            continue  # Both rebuilt Rust libraries are verified independently.\n")
sign = sign.replace("    'assets/data/release-notes.json',", "    'assets/data/release-notes.json',\n    'third_party/flutter_secure_storage/package/LICENSE', 'third_party/flutter_secure_storage/NOTICE.md',\n    'third_party/okhttp/LICENSE', 'third_party/okhttp/NOTICE.md',")
sign = sign.replace("assert digest(ROOT / 'pubspec.lock') == '7293689c92ee42bff5e0fd6a1e0f61d675767128395e7cf806ebd45f6f07c9fa'", """# Exactly one authorized lock entry changes from hosted to the local 10.3.1 fork.
before_lock = (OUT / 'pubspec-before.lock').read_text('utf-8')
after_lock = (ROOT / 'pubspec.lock').read_text('utf-8')
def lock_entries(text):
    return dict(re.findall(r'^  ([A-Za-z0-9_]+):\\n(.*?)(?=^  [A-Za-z0-9_]+:|^sdks:)', text, re.M | re.S))
before_entries, after_entries = lock_entries(before_lock), lock_entries(after_lock)
assert before_entries.keys() == after_entries.keys()
assert [key for key in before_entries if before_entries[key] != after_entries[key]] == ['flutter_secure_storage']
assert 'version: "10.3.1"' in after_entries['flutter_secure_storage']
assert before_lock[before_lock.index('sdks:'):] == after_lock[after_lock.index('sdks:'):]
""")
sign = sign.replace("    'sdkLibrariesComparedByteIdenticalAgainstLocalV136': compared_sdk,", "    'sdkLibrariesComparedByteIdenticalAgainstLocalV136': compared_sdk,\n    'authorizedLockChange': 'flutter_secure_storage 10.3.1 hosted -> local minimal Android durability patch; all other entries unchanged',")
(out / 'sign_and_verify.py').write_text(sign, 'utf-8')

freeze = adapt((old / 'freeze_source.py').read_text('utf-8'))
freeze = freeze.replace("OUT/'preservation-before.json'", "OUT/'state-before.json'").replace(
    ".read_text('utf-8'))['files']}", ".read_text('utf-8'))['source']}")
freeze = freeze.replace("Mesting-Music-v1.0.51-source.zip", "Mesting-Music-v1.0.53-source.zip")
freeze = freeze.replace("    assert required.issubset(names),required-names", """    required.update({'lib/core/security/credential_failure.dart',
        'lib/core/security/retained_credential_vault.dart', 'lib/core/network/system_music_io_client.dart',
        'android/app/src/main/kotlin/com/mesting/mesting_music/MusicNativeTransport.kt',
        'android/app/src/main/kotlin/com/mesting/mesting_music/MusicHttpExchange.kt',
        'android/app/src/main/kotlin/com/mesting/mesting_music/MusicNetworkState.kt',
        'third_party/md3music/rust/src/android_transport.rs',
        'third_party/flutter_secure_storage/package/LICENSE', 'third_party/flutter_secure_storage/NOTICE.md',
        'third_party/flutter_secure_storage/package/android/src/main/java/com/it_nomads/fluttersecurestorage/SecureCommitException.java',
        'third_party/okhttp/LICENSE', 'third_party/okhttp/NOTICE.md',
        'test/release_154_storage_test.dart','test/release_154_network_test.dart',
        'test/native/release_154_http_test.kt','test/native/Release154StorageFamilyTest.java'})
    assert required.issubset(names),required-names""")
(out / 'freeze_source.py').write_text(freeze, 'utf-8')
notes = adapt((old / 'verify_local_notes.dart').read_text('utf-8')).replace('DateTime.utc(2026, 11, 4)', 'DateTime.utc(2026, 11, 5)')
(out / 'verify_local_notes.dart').write_text(notes, 'utf-8')
inputs = out / 'verify_build_inputs.py'
inputs.write_text(inputs.read_text('utf-8').replace("'versionCode':74", "'versionCode':75"), 'utf-8')
print('Prepared isolated version54 signing, source-freeze, build-input and actual-APK notes checks.')
