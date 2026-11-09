"""Check the delivered APK contains the new native and Dart bridge vocabulary.

Compilation and actual payload inspection complement the pure JVM path tests;
neither is a claim that Android playback has been executed.
"""
from pathlib import Path
import hashlib
import json
import re
import zipfile

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
inputs = json.loads((OUT / 'candidate4/build-input.json').read_text('utf-8'))['files']
names = [
    'android/app/src/main/kotlin/com/mesting/mesting_music/QishuiOfficialAudioPreparation.kt',
    'android/app/src/main/kotlin/com/mesting/mesting_music/QishuiOfficialAudioPlugin.kt',
    'android/app/src/main/kotlin/com/mesting/mesting_music/QishuiOfficialAudioDecrypt.kt',
    'lib/features/music_platform/qishui/qishui_native_audio_failure.dart',
    'lib/features/music_platform/qishui/qishui_official_audio_cache.dart',
    'lib/core/network/music_network_diagnostics.dart',
    'lib/core/network/music_diagnostic_clipboard.dart',
    'lib/features/settings/presentation/music_network_diagnostics_page.dart',
]
checked = []
for name in names:
    row = next(row for row in inputs if row['path'] == name)
    assert hashlib.sha256((ROOT / name).read_bytes()).hexdigest() == row['sha256']
    checked.append(row)
native_markers = ['cachePathInvalid', 'cacheFileMissing', 'authorizationInvalid',
                  'sampleTableInvalid', 'sampleDecryptFailed', 'cacheWriteFailed',
                  'metadataUnsupported', 'cachePath', 'sourceRead', 'containerParse']
dart_markers = ['nativeStep', 'nativeReason', 'latestFailure', 'eventCount', 'complete',
                'cachePathInvalid', 'authorizationInvalid', 'sampleDecryptFailed']
with zipfile.ZipFile(OUT / 'candidate4/Mesting-Music-v1.0.75.apk') as apk:
    dex = [apk.read(name) for name in apk.namelist() if re.fullmatch(r'classes\d*\.dex', name)]
    for marker in native_markers:
        assert any(marker.encode() in data for data in dex), marker
    for abi in ['arm64-v8a', 'armeabi-v7a']:
        data = apk.read(f'lib/{abi}/libapp.so')
        for marker in dart_markers:
            assert marker.encode() in data, (abi, marker)
record = {'nativeClosedLabelsInActualDex': native_markers,
          'dartClosedLabelsInBothAotAbis': dart_markers,
          'productionInputHashesChecked': checked,
          'androidRuntimeExecuted': False, 'physicalAcceptance': False}
(OUT / 'audio-bridge-packaging-verification.json').write_text(json.dumps(record, indent=2)+'\n', 'utf-8')
print({'actualNativeAndDartBridgePayloadChecked': True, 'productionInputs': len(checked)})
