"""Count completed current-version cohorts exactly once, retaining failures."""
from pathlib import Path
from collections import Counter
import hashlib
import json
from summarize_tests import read_run

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
runs = {name: read_run(OUT/f'{name}-complete-{suffix}.jsonl')
        for name, suffix in [('beta', 'r2'), ('stable', 'r1'), ('navigation', 'r1')]}
assert all(run['completeSuccess'] is True and not run['errors'] for run in runs.values())
targeted = read_run(OUT/'targeted-final-r2.jsonl')
assert targeted['completeSuccess'] is True and not targeted['errors']
# The offline-download regression was found during the final build review.
# Replace repeated complete files and add its new file once, never totals from
# overlapping test runs. All other completed cohort results remain unchanged.
normalize = lambda value: value.replace('\\', '/').lower()
files = {normalize(path): value for path, value in runs['beta']['files'].items()}
files.update({normalize(path): value for path, value in targeted['files'].items()})
counts = Counter()
for value in files.values():
    counts.update(value)
runs['beta']['counts'] = dict(counts)
runs['beta']['files'] = files
assert 'No issues found!' in (OUT/'analyze-final-r2.log').read_text('utf-8-sig')
native = json.loads((OUT/'cenc-host-summary.json').read_text('utf-8'))
assert native['passed'] == 10
for row in native['inputs']:
    assert hashlib.sha256((ROOT/row['path']).read_bytes()).hexdigest() == row['sha256']
history = json.loads((ROOT/'.codex-artifacts/2026-11-06-release166/native-audio-history-input-match.json').read_text('utf-8'))
assert all(hashlib.sha256((ROOT/row['path']).read_bytes()).hexdigest() == row['sha256'] for row in history)
images = sorted((OUT/'ui-final').glob('*.png'))
assert len(images) >= 11
summary = {'version': '1.0.67', 'androidVersionCode': 88, 'passed': True, 'analysisIssues': 0,
    'analysisLog': 'analyze-final-r2.log',
    'initialThreeAnalysisIssuesFixed': True,
    **{name: {'files': len(run['files']), 'passed': run['counts'].get('success', 0),
              'skipped': run['counts'].get('skipped', 0), 'complete': True} for name, run in runs.items()},
    'counting': 'Real test cases only, setup/teardown excluded; targeted/capture reruns not added',
    'priorIncompleteRunRetained': 'beta-complete-r1.jsonl (interrupted; not counted)',
    'finalWholeFileReplacementRun': 'targeted-final-r2.jsonl',
    'initialTargetedRunnerInvalidFilePathRetained': 'targeted-final.jsonl',
    'initialObsoleteBuildStoppedBeforeDelivery': True,
    'completedSameOwnerDownloadBypassesNetwork': True,
    'initialFixtureFailuresRetained': True,
    'nativeAudio': {'passed': 14, 'historicalOnly': True, 'notRerunOrAddedThisRelease': True,
                    'inheritedFrom': '1.0.64 unchanged Media3 production/runner inputs', 'inputs': history},
    'officialCencDecoder': native,
    'ui': {'images': [p.name for p in images], 'fixtureOnly': True, 'physicalDevice': False,
           'mineFavoritesNavigationVerified': True, 'reviewedByAgent': True,
           'widths': [390, 320], 'maxTextScale': 1.8},
    'anonymousOfficialMedia': {'signedApiReturnedMedia': True, 'decodedDurationSeconds': 60,
       'previewOnly': True, 'notFullAccountAcceptance': True},
    'phoneLoginRemoved': True, 'sms2156Resolved': False,
    'prior66QrAccountAndColdRestoreUserAccepted': True,
    'prior66NetEasePreviewAutoSourceUserAccepted': True,
    'fullQishuiMediaOrWritesPhysicallyAccepted': False,
    'officialAudioOnly': True, 'musicCredentialsSentToSigner': False,
    'oldLogsReplayed': False, 'published': False}
(OUT/'host-check-summary.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2)+'\n', 'utf-8')
print(json.dumps({name: summary[name] for name in runs}, indent=2))
