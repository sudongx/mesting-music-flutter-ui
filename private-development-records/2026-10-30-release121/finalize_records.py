from pathlib import Path
from collections import Counter
from datetime import datetime, timezone, timedelta
import hashlib, json, subprocess, zipfile

root = Path('D:/AnLi')
out = root / '.codex-artifacts/2026-10-30-release121'
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
assert beta['passed'] == 1109 and len(beta['files']) == 58
assert stable['passed'] == 19 and back['passed'] == 1
assert 'No issues found!' in (out/'analyze-verified-final.log').read_text(encoding='utf-8-sig')
apk = read(root/'release/Mesting-Music-v1.0.21-verification.json')
assert apk['androidVersionCode'] == 42 and digest(root/'release'/apk['file']) == apk['sha256']
assert apk['privateDiagnosticsDisabled'] and apk['integrationTestPluginAbsent']
apk.update(localDiagnosticsCompileFlag=False, localDiagnosticLogSentinelAbsent=True,
           physicalUpgradeTestPerformed=False, userChoseSelfInstallation=True)
write(root/'release/Mesting-Music-v1.0.21-verification.json', apk)
notes = read(out/'local-apk-notes-verification.json')
assert notes['versionCode'] == 42 and notes['notesCount'] == 4
before, after = read(out/'native-before-results.json'), read(out/'native-after-results.json')
assert before['passed'] and after['passed'] and len(before['scenes']) == len(after['scenes']) == 7
assert not after['libraryBudgetWarnings']
qa = read(out/'device-qa-followup-summary.json')
assert qa['candidateCode'] == 42
assert qa['status'] in ('passed', 'pending_device_reconnection')
assert qa['artistPicturesAfterTransportFixVisible'] is True if qa['status'] == 'passed' else qa['artistPicturesAfterTransportFixVisible'] is None
frozen = read(out/'frozen-before.json')
for name, item in frozen.items():
    p = root/name
    assert p.stat().st_size == item['size'] and digest(p) == item['sha256'], name
lock = digest(root/'pubspec.lock')
assert lock == '6316dd4a0989c4a89b32d2a9a82bf603203743175909b52395a2d97cc4f2b5cc'
head = subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=root, text=True).strip()
assert head == '8763551c0cc39c1c25f60e42fd49624f58d91a89'
record = {
    'version': '1.0.21', 'androidVersionCode': 42, 'date': '2026-10-30',
    'preparedAt': datetime.now(timezone(timedelta(hours=8))).isoformat(),
    'status': 'local_release_ready_device_image_followup_pending' if qa['status'] != 'passed' else 'local_original_signature_release_ready_user_will_install',
    'baseCommit': head,
    'betaRegression': beta, 'stableRegression': stable, 'androidBackRegistration': back,
    'analysis': {'issues': 0, 'log': (out/'analyze-verified-final.log').relative_to(root).as_posix()},
    'additionalNonAdditiveChecks': {'playerVisual': tests('player-visual-regression.jsonl'),
                                  'renderRefinements': tests('render-refinements.jsonl')},
    'productionApkNotesReader': notes, 'apk': apk,
    'realDeviceFunctionalVerification': {
        'userAuthorized': True, 'candidateVersion': '1.0.21', 'candidateCode': 42,
        'candidateOriginalSignatureVerified': True, 'persistentDataKept': True,
        'expandedRouteQa': ['four tabs', 'My rapid scrolling', 'liked song list', 'full player open/close',
                            'lyrics and queue', 'artist ranking and detail', 'album list and detail', 'search results'],
        'initialCandidateRapidTabClicks': 48,
        'publicImageRequestComparison': read(out/'phone-public-user-agent-check.json'),
        'followup': qa,
        'accountReadOnlyViaExistingAppSession': True, 'credentialsExtracted': False,
        'accountWritesPerformed': False, 'noChatReadAcknowledgements': True,
        'formalFinalApkInstalledOnPhone': False, 'userChoseSelfInstallation': True,
        'privateEvidenceDirectory': out.relative_to(root).as_posix(),
    },
    'performance': {
        'device': 'Xiaomi 14 Pro / 23116PN5BC', 'android': '16', 'displayHz': 120,
        'applicationPixels': [1080, 2400], 'dpr': 2.625,
        'package': 'com.mesting.music.beta.benchmark', 'keepAppRunning': True,
        'audioOpened': False, 'guestFixture': True, 'nativeSuitesPassed': True,
        'before': before, 'after': after,
        'benchmarkApkSha256': {'before': digest(out/'before-benchmark.apk'), 'after': digest(out/'after-benchmark.apk')},
        'finalRenderAndNavigationImplementationIncluded': True,
        'subsequentImageTransportFixRetestedSeparatelyNotInTheseQuantiles': True,
        'sameInputScript': True, 'rasterThresholdCountsOnly': True,
        'initialAfterBudgetWarningRunPassed': False, 'finalLibraryBudgetWarnings': 0,
        'artistAlbumAndSearchHaveManualRouteChecksNotSeparateFrameQuantiles': True,
        'limitations': ['single-run comparison', 'dynamic anonymous recommendation background',
                       'system and thermal variation', 'completed frame counts differ',
                       'song and playlist scrolling raster p95 remains near 20 ms',
                       'not continuous screen FPS or a whole-app 120 fps guarantee'],
    },
    'crashInvestigation': {
        'inputVersion': '1.0.20', 'inputCode': 41,
        'inputApkSha256': '73e60f7b9681567fbfc81269496dad3e0bfa651b8cca60e9e4e0ddd30944f635',
        'time': '2026-10-30 14:06:30.097 +08:00', 'pid': 4447, 'thread': '1.raster',
        'signal': 'SIGSEGV / SEGV_MAPERR', 'faultAddress': '0x1c', 'systemExitReason': 'APP CRASH(NATIVE)',
        'driverLibrary': '/vendor/lib64/hw/vulkan.adreno.so', 'entryPoint': 'qglinternal::vkCmdBeginRenderPass',
        'driverBuildId': '33f69a5b3c5ea87c251952c3e0b7a7a2', 'flutterBuildId': '0d216f3f630e1105257f8a3f74e22c9b43c22a51',
        'specificRootCauseFullyProven': False, 'reproducedInBoundedNativeSuite': False,
        'permanentFixClaimed': False, 'candidateExitHistoryRead': True,
        'earlierQaExitHistoryHasNoNewNativeCrash': True,
        'userOneKeyCleanExitNotCountedAsCrash': '2026-10-30 17:13:32.519',
    },
    'preservedArtifactsAndLock': {'frozenV118V119V120Files': len(frozen), 'allByteIdentical': True, 'lockSha256': lock},
    'sourceSnapshotVerification': 'release/Mesting-Music-v1.0.21-source-verification.json',
    'sourceVerificationSeparateToAvoidSelfReference': True,
    'deviceAccess': True, 'adbUsed': True, 'realAccountReadOnlyViaApp': True,
    'backendAccess': False, 'uploaded': False, 'published': False, 'gitCommitted': False, 'gitPushed': False,
    'finalPhoneInstallationPendingUser': True, 'userDeviceLongTermRetestRequired': True,
}
write(root/'docs/validation-2026-10-30-v1.0.21.json', record)
print(json.dumps({'recordsWritten': True, 'beta': beta['passed'], 'stable': stable['passed'], 'oldFrozenFilesPreserved': len(frozen)}))

