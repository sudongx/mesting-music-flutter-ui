"""Aggregate completed host checks without implying physical-device acceptance."""
from pathlib import Path
from datetime import datetime
from zoneinfo import ZoneInfo
import hashlib
import json
import subprocess

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-10-31-release128'


def load(path):
    return json.loads(path.read_text(encoding='utf-8-sig'))


def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


def parse(name):
    suites, tests, files, success = {}, {}, {}, None
    for line in (OUT / name).read_text(encoding='utf-8-sig').splitlines():
        try:
            row = json.loads(line)
        except ValueError:
            continue
        kind = row.get('type')
        if kind == 'suite':
            suites[row['suite']['id']] = row['suite']['path']
        elif kind == 'testStart':
            tests[row['test']['id']] = row['test']
        elif kind == 'done':
            success = row.get('success')
        elif kind == 'testDone' and not row.get('hidden'):
            test = tests[row['testID']]
            path = Path(suites[test['suiteID']]).relative_to(ROOT).as_posix()
            item = files.setdefault(path, {'passed': 0, 'failed': 0, 'skipped': 0})
            item['skipped' if row.get('skipped') else 'passed' if row.get('result') == 'success' else 'failed'] += 1
    assert success is True, name
    assert all(row['failed'] == row['skipped'] == 0 for row in files.values()), name
    return files


beta = parse('beta-final-rerun.jsonl')
followup = parse('beta-preparation-complete.jsonl')
beta.update(followup)
stable, back = parse('stable-complete.jsonl'), parse('android-back-final.jsonl')
assert set(beta) == set(load(OUT / 'beta-files-final.json'))
assert len(beta) == 80 and sum(row['passed'] for row in beta.values()) == 1286
assert sum(row['passed'] for row in stable.values()) == 19
assert sum(row['passed'] for row in back.values()) == 1
assert 'No issues found!' in (OUT / 'analyze-complete.log').read_text(encoding='utf-8-sig')
assert 'All tests passed!' in (OUT / 'render-complete.log').read_text(encoding='utf-8-sig')
frames = load(OUT / 'ui/frame-evidence.json')
assert frames['syntheticFixturesOnly'] and frames['screenshots'] == 7
screens = sorted((OUT / 'ui').glob('*.png'))
assert len(screens) == 7
apk = load(ROOT / 'release/Mesting-Music-v1.0.28-verification.json')
notes = load(OUT / 'local-apk-notes-verification.json')
assert apk['version'] == notes['version'] == '1.0.28'
assert apk['androidVersionCode'] == notes['versionCode'] == 49
assert notes['notesCount'] == 3 and notes['productionReader']
assert digest(ROOT / 'pubspec.lock') == '6316dd4a0989c4a89b32d2a9a82bf603203743175909b52395a2d97cc4f2b5cc'
changes = load(OUT / 'changes-from-v127.json')
product = sorted({row['path'] for row in changes if row['path'].startswith(('lib/', 'tool/', 'assets/', 'third_party/'))} | {'pubspec.lock', 'pubspec.yaml'})
result = {
    'date': '2026-10-31', 'preparedAt': datetime.now(ZoneInfo('Asia/Shanghai')).isoformat(),
    'version': '1.0.28', 'androidVersionCode': 49, 'localBaseVersion': '1.0.27',
    'baseCommit': subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip(),
    'status': 'local_original_signed_release_prepared_pending_user_device_acceptance',
    'betaRegression': {'passed': 1286, 'failed': 0, 'skipped': 0, 'fileCount': 80, 'latestPerFile': beta,
        'log': '.codex-artifacts/2026-10-31-release128/beta-final-rerun.jsonl',
        'followupLog': '.codex-artifacts/2026-10-31-release128/beta-preparation-complete.jsonl',
        'aggregation': 'Latest complete result per file without double counting. Final follow-up covers bounded decoded-frame retention before publication.'},
    'stableRegression': {'passed': 19, 'failed': 0, 'fileCount': 2, 'latestPerFile': stable},
    'androidBackRegistration': {'passed': 1, 'failed': 0, 'deviceUsed': False,
        'includesSearchDailyAndRecentReturnPaths': True},
    'analysis': {'issues': 0, 'scope': 'lib and test'},
    'cachePresentation': {
        'oldResponseStaysUntilNewCoversDecoded': True, 'failedRefreshKeepsOldSnapshot': True,
        'durableWriteAndNotificationAfterPreparation': True, 'credentialChangeRejectsLateRefresh': True,
        'firstVisitWithoutCacheMayShowPlaceholder': True, 'bothMusicPlatformsShareGate': True,
        'visibleRegisteredCoversAndFirst12SeedCovers': True, 'visibleMatchingUsesResponseFieldPaths': True,
        'coldStartOnlyWarmsExistingDiskImages': True, 'coldStartWarmCount': 12,
        'coldWarmDeadlineSeconds': 2, 'refreshDeadlineSeconds': 20, 'maxParallelImagePrepares': 3,
        'maxDecodedBytes': 24 * 1024 * 1024, 'maxSelectedRefreshImages': 64,
        'boundedMemoryFailureKeepsOldContent': True, 'frameSetRecheckedAndPinnedBeforePublication': True,
        'diskContentIndexStoresHashesOnly': True, 'indexFlushAwaitedOnResolveAndPreparation': True,
        'preparedFramesScopedToImageOwner': True, 'unknownHostQueryIdentityPreserved': True,
        'retainedFrameSurvivesProviderReplacementAndFailure': True, 'preparedDecodePreservesAspectRatio': True,
    },
    'tabMotion': {
        'increasingIndex': 'new page enters right; old page exits left',
        'decreasingIndex': 'new page enters left; old page exits right',
        'immediateLatestClickWithoutCompletionGate': True, 'retargetFromLivePagePosition': True,
        'branchStateAndOuterGlassShellRetained': True, 'atMostTwoViewportRenderChildrenTested': True,
        'adjacentJumpAndMidFlightReversalTested': True, 'reducedMotionTested': True,
        'onlyVisibleBranchOwnsBottomSearch': True, 'queryDetailAliasesAvoidSecondShellKey': True,
        'durationMilliseconds': 360, 'deviceGpuTested': False,
    },
    'hostUi': {'evidence': frames,
        'screenshots': [{'path': p.relative_to(ROOT).as_posix(), 'sha256': digest(p)} for p in screens],
        'fonts': 'private Windows test font, absent from APK',
        'fixtures': 'synthetic production-component captures, not real account or Android GPU evidence'},
    'apk': {'file': apk['file'], 'bytes': apk['fileSize'], 'sha256': apk['sha256'],
        'originalCertificate': apk['certificateSha256'], 'pinnedDualArmEngine': True,
        'glassShadersByteIdenticalToV127': True, 'actualApkRangeNotesReader': notes,
        'loginArtworkAbsent': apk['loginArtworkAssetAbsent']},
    'listenTogether': {'v127ImplementationPreserved': True, 'realUserPayloadObtained': False,
        'actualRecordFixedOnDevice': False, 'officialDetailVerifiedOnDevice': False,
        'manualRedactedSingleMessageDiagnosticAvailable': True},
    'sourceHashesAtValidation': {p: digest(ROOT / p) for p in product},
    'deviceAccess': False, 'realAccountAccess': False, 'backendAccess': False,
    'physicalUpgradeTestPerformed': False, 'gitCommitted': False, 'gitPushed': False,
    'uploaded': False, 'published': False,
}
(ROOT / 'docs/validation-2026-10-31-v1.0.28.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'version': '1.0.28', 'betaFiles': 80, 'betaPassed': 1286, 'stablePassed': 19,
                  'backPassed': 1, 'issues': 0, 'hostCaptures': 7, 'deviceAcceptance': 'pending'}))
