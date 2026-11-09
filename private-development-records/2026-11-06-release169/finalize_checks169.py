"""Record completed suites once, with retained failures and honest live boundaries."""
from pathlib import Path
from collections import Counter
import hashlib
import json
from summarize_tests import read_run

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent

def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

base = {name: read_run(OUT / f'{name}-complete-r2.jsonl')
        for name in ['beta', 'stable', 'navigation']}
for run in base.values():
    assert run['completeSuccess'] and not run['errors'], run['errors']
replacement = read_run(OUT / 'test-lints-final-r3.jsonl')
assert replacement['completeSuccess'] and not replacement['errors']
base['beta']['files'].update(replacement['files'])
counts = Counter()
for value in base['beta']['files'].values():
    counts.update(value)
base['beta']['counts'] = dict(counts)
assert len(base['beta']['files']) == 222
assert 'No issues found!' in (OUT / 'analyze-final-r3.log').read_text('utf-8-sig')
cenc = json.loads((ROOT / '.codex-artifacts/2026-11-06-release167/cenc-host-summary.json').read_text('utf-8'))
native = json.loads((ROOT / '.codex-artifacts/2026-11-06-release166/native-audio-history-input-match.json').read_text('utf-8'))
assert all(sha(ROOT / row['path']) == row['sha256'] for row in cenc['inputs'])
assert all(sha(ROOT / row['path']) == row['sha256'] for row in native)
images = sorted((OUT / 'ui').glob('*.png'))
assert len(images) == 10
review = {
    'images': [{'path': str(p.relative_to(OUT)), 'sha256': sha(p)} for p in images],
    'reviewedByAgent': True, 'fixtureOnly': True, 'physicalDevice': False,
    'widths': [390, 320], 'maxTextScale': 1.8,
    'reference': 'User official Qishui screenshot; user image and private identity not bundled',
    'settingsInitialNoTokenAndExplicitReadFailureReviewed': True,
    'lyricsSelectionSeekFollowAndBackVerified': True,
    'captureRun': 'targeted-final-r1.jsonl: UI file completed, whole run stopped on subsequently fixed handler fixture',
    'finalUiAndRealHandlerRegressionRun': 'beta-complete-r2.jsonl',
}
(OUT / 'ui-review.json').write_text(json.dumps(review, ensure_ascii=False, indent=2) + '\n', 'utf-8')
summary = {
    'version': '1.0.69', 'androidVersionCode': 90, 'passed': True,
    'analysisIssues': 0, 'analysisLog': 'analyze-final-r3.log',
    **{name: {'files': len(run['files']), 'passed': run['counts'].get('success', 0),
              'skipped': run['counts'].get('skipped', 0), 'complete': True}
       for name, run in base.items()},
    'betaPerFile': base['beta']['files'],
    'counting': 'Final complete whole-file suite replaces earlier runs; overlapping totals not added',
    'initialFailuresAndStoppedRunsRetained': True,
    'earlierRunNotes': [
        'targeted-r1: test platform override not restored; corrected fixture only',
        'beta-complete-r1 and targeted-final-r1 stopped before done on widget real I/O in fake clock',
        'restore-final-r2 stopped; restore-final-r3 completed 5 tests after runAsync fixture correction',
        'analyze-final-r2 found three new test-only lints; corrected and both whole test files rerun',
    ],
    'nativeAudio': {'passed': 14, 'historicalOnly': True, 'rerunOrAdded': False,
                    'inheritedFrom': '1.0.64 unchanged Media3 production and runner', 'inputs': native},
    'officialCencDecoder': {'passed': 10, 'historicalOnly': True, 'rerunOrAdded': False,
                            'inheritedFrom': '1.0.67 unchanged Kotlin production and runner', 'inputs': cenc['inputs']},
    'ui': review,
    'androidStoreRegression': {
        'nativeRequiredPrefixReadFromOwningJavaSource': True,
        'productionMethodChannelAndOptionsExercisedWithNativeContractDouble': True,
        'independentNamespaceReadWriteAndReopenVerified': True,
        'legacyMusicAccountRecordsUntouchedInFixture': True,
        'actualAndroidKeystoreExecution': False,
        'providerErrorVisibleWithoutRetryAndTimeoutVerified': True,
    },
    'playbackRestoreRegression': {
        'actualHandlerWithDeterministicPlayer': True,
        'restoredQishuiHasNoResolverCallsUntilPlay': True,
        'positionAndQueueRetained': True,
        'unconfiguredPlayExitsLoading': True,
        'realHandlerPillShowsPlayInsteadOfSpinner': True,
        'neteaseEstablishedRestorePathRetained': True,
    },
    'nasReadiness': {'url': 'https://download.csnas.asia/qishui-signer/',
                     'readyz': 200, 'configWithoutToken': 401, 'root': 404,
                     'anonymousOnly': True, 'realSignatureRequested': False,
                     'nativeSignerOrOfficialAcceptanceProved': False},
    'collaboratorCommits': ['454c10417ebdaeb8995162cb802465bb0628d300',
                           'bb4b8bccb54693b20b98861aa26ae5fad427cf65'],
    'collaboratorPullRequest': 'https://github.com/Mesting42/mesting-music-flutter/pull/2',
    'collaboratorGitHubLogin': 'sudongx', 'mergedIntoLocalSourceOnly': True,
    'installed68UserReported': True, 'physicalDeviceAccess': False,
    'realAccountAccess': False, 'officialPlaybackAcceptedIn69': False,
    'nasOrHelperDeploymentModified': False, 'privateSignerTokenAccess': False,
    'downloadHelperRouteNotYetSupported': '/luna/commerce/v2/check_download',
    'prior66QrAccountAndColdRestoreUserAccepted': True,
    'prior66NetEaseAutoSourceFullPlaybackUserAccepted': True,
    'phoneLoginRemoved': True, 'sms2156Resolved': False, 'oldLogsReplayed': False,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
}
(OUT / 'host-check-summary.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2) + '\n', 'utf-8')
print(json.dumps({name: summary[name] for name in base}, indent=2))
