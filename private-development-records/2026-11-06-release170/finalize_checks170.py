"""Aggregate complete final files once; never add overlapping targeted runs."""
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

base = {name: read_run(OUT / f'{name}-complete-r1.jsonl')
        for name in ['beta', 'stable', 'navigation']}
for name, run in base.items():
    if name == 'beta' and not run['completeSuccess']:
        # A final whole-file rerun replaces this exact file, never selected
        # individual assertions. Preserve the original failure in its raw run.
        failed = {path: value for path, value in run['files'].items()
                  if value.get('failure') or value.get('error')}
        assert len(failed) == 1 and next(iter(failed)).replace('\\', '/').endswith('/release_129_discovery_test.dart')
        replacement = read_run(OUT / 'discovery-cache-recheck-r1.jsonl')
        assert replacement['completeSuccess'] and not replacement['errors']
        assert len(replacement['files']) == 1
        run['files'].update(replacement['files'])
        counts = Counter()
        for values in run['files'].values(): counts.update(values)
        assert not counts.get('failure') and not counts.get('error')
        run.update(counts=dict(counts), completeSuccess=True, errors=[])
    assert run['completeSuccess'] and not run['errors'], run['errors']
final_media = read_run(OUT / 'targeted-final-r5.jsonl')
assert final_media['completeSuccess'] and not final_media['errors']
assert len(final_media['files']) == 3
base['beta']['files'].update(final_media['files'])
counts = Counter()
for values in base['beta']['files'].values(): counts.update(values)
base['beta']['counts'] = dict(counts)
assert len(base['beta']['files']) == 223
targeted = read_run(OUT / 'targeted-final-r4.jsonl')
assert targeted['completeSuccess'] and not targeted['errors']
assert 'No issues found!' in (OUT / 'analyze-final-r2.log').read_text('utf-8-sig')
cenc = json.loads((ROOT / '.codex-artifacts/2026-11-06-release167/cenc-host-summary.json').read_text('utf-8'))
native = json.loads((ROOT / '.codex-artifacts/2026-11-06-release166/native-audio-history-input-match.json').read_text('utf-8'))
assert all(sha(ROOT / r['path']) == r['sha256'] for r in cenc['inputs'])
assert all(sha(ROOT / r['path']) == r['sha256'] for r in native)
identity = json.loads((OUT / 'ui-identity-against169.json').read_text('utf-8'))
images = sorted((OUT / 'ui').glob('*.png'))
assert len(images) == 14
assert all(sha(OUT / 'ui' / r['path']) == r['sha256'] for r in identity)
for row in identity:
    if row['byteIdenticalToReviewed69']:
        assert sha(ROOT / '.codex-artifacts/2026-11-06-release169/ui' / row['path']) == row['sha256']
review = {
    'images': identity, 'fixtureOnly': True, 'physicalDevice': False,
    'newPreviewImagesViewed': 4, 'unchangedImagesByteIdenticalToReviewed69': 10,
    'widths': [390, 320], 'maxTextScale': 1.8, 'darkAndLight': True,
    'previewLabelVisibleInCoverAndLyrics': True,
    'captureRun': 'targeted-final-r4.jsonl',
}
(OUT / 'ui-review.json').write_text(json.dumps(review, ensure_ascii=False, indent=2) + '\n', 'utf-8')
summary = {
    'version': '1.0.70', 'androidVersionCode': 91, 'passed': True,
    'analysisIssues': 0, 'analysisLog': 'analyze-final-r2.log',
    **{name: {'files': len(run['files']), 'passed': run['counts'].get('success', 0),
              'skipped': run['counts'].get('skipped', 0), 'complete': True}
       for name, run in base.items()},
    'betaPerFile': base['beta']['files'], 'ui': review,
    'counting': 'Complete final files replace earlier versions: 3 final media files and unchanged full discovery cache recheck; overlapping totals not added',
    'initialFailuresRetained': ['playback-new-r1: two new fixture assertions incorrectly required CDN probe redirects disabled; fixed fixture only',
                                'analyze-r1: two unused imports and two test-only braces lints; corrected',
                                'beta-complete-r1: existing cold Kugou discovery cache wait failed; final unchanged whole-file recheck replaces its earlier result'],
    'newRegression': {
        'deferredOfficialLunaOriginThroughSignedApi': True,
        'anonymousPlayerInfoAndCdnRequests': True,
        'fullRecordingPreferredOverHigherBitratePreview': True,
        'previewPlayableAndLabeledWithFullCatalogMetadataRetained': True,
        'previewCacheOrchestrationAndNativeMetadataBoundary': True,
        'previewDownloadNotAllowedAsCompleteRecording': True,
        'accountSwitchRevokesDelayedPlayerInfo': True,
        'untrustedPlayerInfoAndRedirectRejected': True,
        'sanitizedHistoricalAnonymousOfficialReplyShapeReplayed': True,
        'privateHeadersAuthorizationAndSignedQueriesAbsentFromDiagnostics': True,
        'actualNativeCencExecutionThisRelease': False,
    },
    'nativeAudio': {'passed': 14, 'historicalOnly': True, 'rerunOrAdded': False,
                    'inheritedFrom': '1.0.64 unchanged Media3 production and runner', 'inputs': native},
    'officialCencDecoder': {'passed': 10, 'historicalOnly': True, 'rerunOrAdded': False,
                           'inheritedFrom': '1.0.67 unchanged Kotlin production and runner', 'inputs': cenc['inputs']},
    'feedbackAfter69Delivery': {'allQishuiSongsFail': True, 'lyricsWorkAfterManualSignerToken': True,
                              'officialSameAccountCanPlayUserReported': True,
                              'officialFreeListeningDaysUserReported': 29,
                              'userDiagnosticPrefixHttp200': True, 'corruptedTailNotInterpreted': True,
                              'noNewDeviceVersionReadback': True},
    'fullActualAccountPlaybackIsAcceptanceGoal': True,
    'officialFullPlaybackAndFreeListeningAcceptedIn70': False,
    'physicalDeviceAccess': False, 'realAccountAccess': False,
    'nasOrSignerRequestsThisRelease': False, 'privateSignerTokenAccess': False,
    'helperDeploymentModified': False,
    'downloadHelperRouteNotYetSupported': '/luna/commerce/v2/check_download',
    'prior66QrAccountAndColdRestoreUserAccepted': True,
    'prior66NetEaseAutoSourceFullPlaybackUserAccepted': True,
    'phoneLoginRemoved': True, 'oldLogsReplayed': False,
    'collaboratorCommits': ['454c10417ebdaeb8995162cb802465bb0628d300',
                           'bb4b8bccb54693b20b98861aa26ae5fad427cf65'],
    'mergedIntoLocalSourceOnly': True, 'remotePullRequestMerged': False,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
}
(OUT / 'host-check-summary.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2) + '\n', 'utf-8')
print(json.dumps({name: summary[name] for name in base}, indent=2))
