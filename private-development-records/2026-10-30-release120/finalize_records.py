from pathlib import Path
from collections import Counter
from datetime import datetime, timezone, timedelta
import hashlib, json, subprocess, zipfile

root = Path('D:/AnLi')
out = root / '.codex-artifacts/2026-10-30-release120'
def read(p): return json.loads(p.read_text(encoding='utf-8-sig'))
def write(p, j): p.write_text(json.dumps(j, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
def digest(p):
    with p.open('rb') as f: return hashlib.file_digest(f, 'sha256').hexdigest()
def tests(name):
    events = []
    for line in (out/name).read_text(encoding='utf-8-sig').splitlines():
        try: events.append(json.loads(line))
        except ValueError: pass
    assert events[-1].get('type') == 'done' and events[-1].get('success') is True, name
    assert not any(e.get('type') == 'error' for e in events), name
    suites = {e['suite']['id']: e['suite']['path'] for e in events if e.get('type') == 'suite'}
    started = {e['test']['id']: e['test'] for e in events if e.get('type') == 'testStart'}
    counts = Counter()
    for e in events:
        if e.get('type') == 'testDone' and e.get('result') == 'success' and not e.get('hidden') and not e.get('skipped'):
            counts[Path(suites[started[e['testID']]['suiteID']]).relative_to(root).as_posix()] += 1
    return {'passed': sum(counts.values()), 'files': sorted(counts), 'countsByFile': dict(sorted(counts.items())), 'success': True, 'log': (out/name).relative_to(root).as_posix()}

beta, stable, back = tests('beta-regression.jsonl'), tests('stable-final.jsonl'), tests('android-back.jsonl')
assert beta['passed'] == 1093 and len(beta['files']) == 55
assert stable['passed'] == 19 and back['passed'] == 1
assert 'No issues found!' in (out/'analyze-verified-final.log').read_text(encoding='utf-8-sig')
apk = read(root/'release/Mesting-Music-v1.0.20-verification.json')
assert apk['androidVersionCode'] == 41 and digest(root/'release'/apk['file']) == apk['sha256']
with zipfile.ZipFile(root/'release'/apk['file']) as z:
    sentinel_absent = b'MESTING_LOCAL ' not in z.read('lib/arm64-v8a/libapp.so')
assert sentinel_absent, 'Review compile flags: final release must not contain the opt-in diagnostic logger.'
apk['localDiagnosticsCompileFlag'] = False
apk['localDiagnosticLogSentinelAbsent'] = True
apk['physicalUpgradeTestPerformed'] = False
apk['userChoseSelfInstallation'] = True
write(root/'release/Mesting-Music-v1.0.20-verification.json', apk)
notes = read(out/'local-apk-notes-verification.json')
assert notes['versionCode'] == 41 and notes['notesCount'] == 4
perf = read(out/'native-performance-verified.json')
assert perf['nativeSuitesPassed'] and perf['afterCodeIncludesLiveCurrentMaskCutout']
frozen = read(out/'frozen-before.json')
for name, item in frozen.items():
    p = root/name
    assert p.stat().st_size == item['size'] and digest(p) == item['sha256'], name
lock = digest(root/'pubspec.lock')
assert lock == '6316dd4a0989c4a89b32d2a9a82bf603203743175909b52395a2d97cc4f2b5cc'
head = subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=root, text=True).strip()
assert head == '8763551c0cc39c1c25f60e42fd49624f58d91a89'
record = {
    'version': '1.0.20', 'androidVersionCode': 41, 'date': '2026-10-30',
    'preparedAt': datetime.now(timezone(timedelta(hours=8))).isoformat(),
    'status': 'local_original_signature_release_ready_user_will_install', 'baseCommit': head,
    'betaRegression': beta, 'stableRegression': stable, 'androidBackRegistration': back,
    'analysis': {'issues': 0, 'log': '.codex-artifacts/2026-10-30-release120/analyze-verified-final.log'},
    'productionApkNotesReader': notes, 'apk': apk,
    'realDeviceFunctionalVerification': {
        'userAuthorized': True, 'candidateVersion': '1.0.20', 'candidateCode': 41,
        'candidateOriginalSignatureVerified': True, 'persistentDataKept': True,
        'createdPlaylistCoversVisible': 2, 'savedPlaylistCoversVisible': 2, 'artistShelfCoversVisible': True,
        'messageEntryBadgeVisible': True, 'countsAndConversationsReconciled': True,
        'appImageHttp200Observed': 10, 'appImage403ObservedAfterHeaderFix': 0,
        'observedImageDecodeErrorsAfterHeaderFix': 0,
        'evidenceDirectory': '.codex-artifacts/2026-10-30-release120',
        'reviewedScreenshots': ['coverfix-artists-verified.png', 'coverfix-playlists-verified.png', 'coverfix-badge-verified.png'],
        'accountReadOnlyViaExistingAppSession': True, 'credentialsExtracted': False, 'accountWritesPerformed': False,
        'formalFinalApkInstalledOnPhone': False, 'userChoseSelfInstallation': True,
    },
    'performance': perf,
    'crashInvestigation': {
        'inputVersion': '1.0.19', 'inputCode': 40,
        'inputApkSha256': '247a7347d12ad00161473e7cfad1e1c2170c2cf1adb3697bf08c4a8992089d59',
        'time': '2026-10-30 10:33:40.246 +08:00', 'thread': '1.raster',
        'signal': 'SIGSEGV / SEGV_MAPERR', 'faultAddress': '0x1c', 'systemExitReason': 'APP CRASH(NATIVE)',
        'driverLibrary': '/vendor/lib64/hw/vulkan.adreno.so', 'entryPoint': 'qglinternal::vkCmdBeginRenderPass',
        'driverBuildId': '33f69a5b3c5ea87c251952c3e0b7a7a2', 'flutterBuildId': '0d216f3f630e1105257f8a3f74e22c9b43c22a51',
        'specificRootCauseFullyProven': False, 'reproducedInBoundedNativeSuite': False,
        'permanentFixClaimed': False, 'laterSystemExitHistoryReadAfterPhoneDisconnected': False,
        'upstreamReferences': ['https://github.com/flutter/flutter/issues/192002', 'https://github.com/flutter/flutter/issues/193941'],
    },
    'preservedArtifactsAndLock': {'frozenV118AndV119Files': len(frozen), 'allByteIdentical': True, 'lockSha256': lock},
    'sourceSnapshotVerification': 'release/Mesting-Music-v1.0.20-source-verification.json',
    'sourceVerificationSeparateToAvoidSelfReference': True,
    'deviceAccess': True, 'adbUsed': True, 'realAccountReadOnlyViaApp': True,
    'backendAccess': False, 'uploaded': False, 'published': False, 'gitCommitted': False, 'gitPushed': False,
    'finalPhoneInstallationPendingUser': True, 'userDeviceLongTermRetestRequired': True,
}
write(root/'docs/validation-2026-10-30-v1.0.20.json', record)
print(json.dumps({'recordsWritten': True, 'beta': beta['passed'], 'stable': stable['passed'], 'oldFrozenFilesPreserved': len(frozen), 'diagnosticLoggerAbsent': sentinel_absent}))
