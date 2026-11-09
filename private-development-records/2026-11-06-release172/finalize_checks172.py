"""Count final complete test files once and independently check evidence inputs."""
from pathlib import Path
from collections import Counter
import hashlib
import json
from summarize_tests import read_run

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent
def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

runs = {n: read_run(out/f'{n}-complete-r2.jsonl') for n in ('beta', 'stable', 'navigation')}
for name, run in runs.items():
    assert run['completeSuccess'] and not run['errors'], (name, run['errors'])
assert len(runs['beta']['files']) == 231
# Late QR/read-only button coverage and host-font capture replace the UI file,
# never add its repeated assertions to the full-suite total.
final = read_run(out/'ui-delivery.jsonl')
assert final['completeSuccess'] and not final['errors'] and len(final['files']) == 1
runs['beta']['files'].update(final['files'])
old_ui = read_run(out/'ui-final-accepted-r2.jsonl')
assert old_ui['completeSuccess'] and not old_ui['errors']
for key, value in old_ui['files'].items():
    if key.endswith('/qishui_ui168_test.dart'):
        runs['beta']['files'][key] = value
counts = Counter()
for value in runs['beta']['files'].values():
    counts.update(value)
runs['beta']['counts'] = dict(counts)
assert 'No issues found!' in (out/'analyze-final-r4.log').read_text('utf-8-sig')
review = json.loads((out/'ui-review.json').read_text('utf-8'))
assert review['allImagesViewed'] and len(review['images']) == 74
for row in review['images']:
    assert sha(out/'ui-delivery'/row['path']) == row['sha256']
native = json.loads((root/'.codex-artifacts/2026-11-06-release171/native171-summary.json').read_text('utf-8'))
assert native['passed'] == 29
assert all(sha(root/r['path']) == r['sha256'] for r in native['inputs'])
native = {**native, 'freshRun': False, 'historicalOnly': True, 'rerunOrAdded': False,
          'inheritedFrom': '1.0.71 CENC10 and production preparation19, exact inputs matched'}
history = json.loads((root/'.codex-artifacts/2026-11-06-release166/native-audio-history-input-match.json').read_text('utf-8'))
assert all(sha(root/r['path']) == r['sha256'] for r in history)
summary = {
    'version': '1.0.72', 'androidVersionCode': 93, 'passed': True,
    'analysisIssues': 0, 'analysisLog': 'analyze-final-r4.log',
    **{n: {'files': len(run['files']), 'passed': run['counts'].get('success', 0),
           'skipped': run['counts'].get('skipped', 0), 'complete': True} for n, run in runs.items()},
    'betaPerFile': runs['beta']['files'], 'ui': review,
    'counting': 'Full r2; later complete UI files replace their prior results. Targeted/capture repeats and historical native results are not added.',
    'nativeAudio': {'passed': 14, 'historicalOnly': True, 'rerunOrAdded': False,
                    'inheritedFrom': '1.0.64 unchanged Media3 production/runner', 'inputs': history},
    'officialNativePreparationAndCenc': native,
    'initialFailuresRetained': [
        'Full r1 found eager audio-provider initialization outside the active Qishui lyrics branch and old narrow settings scroll assumptions; fixed, full r2 passes.',
        'Early fixture font and fake-clock asset-loading problems retained in their logs; final full UI capture succeeds.',
        'ui-final-accepted invocation included a nonexistent extra qishui_welfare_test.dart path after both real suites passed; corrected full suites and final capture supersede it.',
        'Abandoned synthetic stream.addError fixture triggered just_audio derived listener errors; actual play-Future failure regression verifies bounded native continuation.',
    ],
    'confirmed71Feedback': json.loads((out/'user71-feedback.json').read_text('utf-8')),
    'newRegression': {
        'temporaryLyricsThemeCoordinatesShellAndRestores': True,
        'qishuiPagesDarkLightLoadingEmptyErrorAndLargeText': True,
        'legacySignerConfigDefaultsToAnonymous': True,
        'mediaCookieRequiresExplicitCustomHttpsOptIn': True,
        'publicHttpAndOtherPathCredentialDisclosureRejected': True,
        'cookieCsrfAndTokenSnapshotSurvivesConcurrentRefresh': True,
        'qrCommerceReadDoesNotEnableUnsupportedRewardWrite': True,
        'expirySecondsAndMillisecondsDoNotConfuseActivityDates': True,
        'coverAliasesBackupCandidatesAndPersistence': True,
        'httpAndBusiness301DistinguishedWithoutSensitivePayload': True,
        'zeroMediaModelsNotReportedAsNativeDecode': True,
        'explicitKnownJsonStringMediaContainersSupported': True,
        'singleFailureBoundedQueueContinuation': True,
        'globalNetworkAuthSignerFailureAndNewUserCommandStop': True,
        'nativePlayFailureAndAllFailedRoundStop': True,
    },
    'actual301RootCauseConfirmed': False,
    'actualVipFullPlaybackUnder29DaysConfirmed': False,
    'physicalDeviceAccess': False, 'realAccountAccess': False,
    'nasOrSignerRequestsThisRelease': False, 'helperDeploymentModified': False,
    'privateSignerTokenAccess': False,
    'downloadHelperRouteCurrentDeploymentNotRechecked': '/luna/commerce/v2/check_download',
    'prior66QrAccountAndColdRestoreUserAccepted': True,
    'prior66NetEaseAutoSourceFullPlaybackUserAccepted': True,
    'phoneLoginRemoved': True, 'oldLogsReplayed': False,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
}
(out/'host-check-summary.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2)+'\n', 'utf-8')
print(json.dumps({n: summary[n] for n in runs}, indent=2))
