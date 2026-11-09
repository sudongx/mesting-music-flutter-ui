"""Count each complete final file once; capture/targeted runs are not added."""
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

runs = {name: read_run(OUT / f'{name}-complete-r1.jsonl') for name in ['beta', 'stable', 'navigation']}
for name, run in runs.items():
    assert run['completeSuccess'] and not run['errors'], (name, run['errors'])
assert len(runs['beta']['files']) == 226
final = read_run(OUT / 'targeted-final-r2.jsonl')
assert final['completeSuccess'] and not final['errors'] and len(final['files']) == 5
runs['beta']['files'].update(final['files'])
counts = Counter()
for value in runs['beta']['files'].values(): counts.update(value)
runs['beta']['counts'] = dict(counts)
assert 'No issues found!' in (OUT / 'analyze-final-r2.log').read_text('utf-8-sig')
targeted = read_run(OUT / 'targeted-r1.jsonl')
assert targeted['completeSuccess'] and not targeted['errors']
capture = read_run(OUT / 'ui-capture-r1.jsonl')
assert capture['completeSuccess'] and not capture['errors']
native = json.loads((OUT / 'native171-summary.json').read_text('utf-8'))
assert native['passed'] == 29 and native['freshRun']
assert all(sha(ROOT / row['path']) == row['sha256'] for row in native['inputs'])
history = json.loads((ROOT / '.codex-artifacts/2026-11-06-release166/native-audio-history-input-match.json').read_text('utf-8'))
assert all(sha(ROOT / row['path']) == row['sha256'] for row in history)
review = json.loads((OUT / 'ui-review.json').read_text('utf-8'))
assert review['allImagesViewed'] and len(review['images']) == 8
for row in review['images']:
    assert sha(OUT / 'ui' / row['path']) == row['sha256']
summary = {
    'version': '1.0.71', 'androidVersionCode': 92, 'passed': True,
    'analysisIssues': 0, 'analysisLog': 'analyze-final-r2.log',
    **{name: {'files': len(run['files']), 'passed': run['counts'].get('success', 0),
              'skipped': run['counts'].get('skipped', 0), 'complete': True} for name, run in runs.items()},
    'betaPerFile': runs['beta']['files'], 'ui': review,
    'counting': 'Final complete files once; targeted/capture repeats and fresh Kotlin reruns not added twice',
    'nativeAudio': {'passed': 14, 'historicalOnly': True, 'rerunOrAdded': False,
                    'inheritedFrom': '1.0.64 unchanged Media3 production/runner', 'inputs': history},
    'officialNativePreparationAndCenc': native,
    'initialFailuresRetained': ['Initial host alias fixture incorrectly assumed Windows canonicalFile resolves junctions; replaced by actual /./ parent spelling, retaining failed log. Android symlink/device acceptance remains pending.',
                               'Initial analysis found one redundant non-null assertion and four test-only block-style hints; fixed and replaced results with five complete final files, without adding overlap.'],
    'newRegression': {
        'actualNativePrivatePreparationWithEquivalentParentSpelling': True,
        'oldExactEqualityFailureReproduced': True,
        'canonicalIoReturnsCallerPathToDart': True,
        'encryptedSyntheticFixtureThroughProductionCachePreparation': True,
        'outsidePathTraversalAndWrongNameRejected': True,
        'existingOutputPreservedAndCancelledOutputRemoved': True,
        'closedNativeStepAndReasonAcrossDartFailureBoundary': True,
        'compactCompleteJsonAtMost4096Characters': True,
        'clipboardReadbackMatchedMismatchedUnavailableAndTimeoutCovered': True,
        'duplicateCopyDoesNotOverwriteSnapshot': True,
        'largeTextDarkLightNativeFailureAndCopyFeedbackRendered': True,
        'networkAccountNasOrActualMediaAccessRequired': False,
    },
    'confirmed70Failure': json.loads((OUT / 'user70-feedback.json').read_text('utf-8')),
    'fullActualAccountPlaybackIsAcceptanceGoal': True,
    'officialFullPlaybackAndFreeListeningAcceptedIn71': False,
    'physicalDeviceAccess': False, 'realAccountAccess': False,
    'nasOrSignerRequestsThisRelease': False, 'privateSignerTokenAccess': False,
    'helperDeploymentModified': False,
    'downloadHelperRouteCurrentDeploymentNotRechecked': '/luna/commerce/v2/check_download',
    'prior66QrAccountAndColdRestoreUserAccepted': True,
    'prior66NetEaseAutoSourceFullPlaybackUserAccepted': True,
    'phoneLoginRemoved': True, 'oldLogsReplayed': False,
    'collaboratorCommits': ['454c10417ebdaeb8995162cb802465bb0628d300', 'bb4b8bccb54693b20b98861aa26ae5fad427cf65'],
    'mergedIntoLocalSourceOnly': True, 'remotePullRequestMerged': False,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
}
(OUT / 'host-check-summary.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2) + '\n', 'utf-8')
print(json.dumps({name: summary[name] for name in runs}, indent=2))
