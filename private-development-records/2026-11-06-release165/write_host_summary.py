"""Finalize verified host results before packaging the new candidate."""
import json
from pathlib import Path
from summarize_tests import read_run

out = Path(__file__).resolve().parent
runs = {s: read_run(out / f'{s}-complete-r1.jsonl') for s in
        ('beta', 'stable', 'navigation')}
ui_runs = [read_run(out / f'ui-{kind}-final.jsonl') for kind in ('qr', 'phone')]
assert all(r['completeSuccess'] is True and not r['errors'] for r in
           [*runs.values(), *ui_runs])
analysis = (out / 'analyze-final-r2.log').read_text('utf-8-sig')
assert 'No issues found!' in analysis
images = sorted((out / 'ui').glob('*.png'))
assert len(images) == 8
native = json.loads((out / 'native-audio-history-input-match.json').read_text('utf-8'))
assert all(r['matches64'] for r in native)
summary = {
    'version': '1.0.65', 'androidVersionCode': 86, 'passed': True,
    'analysisIssues': 0, 'analysisPassed': True, 'analysisLog': 'analyze-final-r2.log',
    **{s: {'files': len(r['files']), 'passed': r['counts'].get('success', 0),
           'skipped': r['counts'].get('skipped', 0), 'failed': r['counts'].get('error', 0),
           'complete': True} for s, r in runs.items()},
    'counting': 'Unique real test IDs; hidden setup/teardown excluded; capture reruns not added',
    'targeted': {'passed': 105, 'includedInBeta': True, 'notAddedToTotal': True},
    'nativeAudio': {'passed': 14, 'historicalOnly': True, 'notRerunOrAddedThisRelease': True,
        'inheritedFrom': '1.0.64 actual Media3 1.9.2 regression',
        'nativeProductionAndRunnerSha256Match64': native,
        'nativeDspSimulatedInHistoricalHostTests': True},
    'ui': {'finalReviewedImages': 8, 'capturesGenerated': 8,
        'physicalDevice': False, 'fixtureOnly': True,
        'captureCasesPassed': sum(r['counts'].get('success', 0) for r in ui_runs),
        'entireQrFileRerunAfterCapturePathChange': True,
        'images': [p.name for p in images]},
    'deviceAccess': True, 'scope': 'Authorized package metadata/public official APK read',
    'prior64OrdinaryPlaybackUserAccepted': True,
    'newPreviewPhysicalPlaybackAccepted': False,
    'sms2156Resolved': False, 'realQrLoginAccepted': False,
    'smsSentByAgent': False, 'oldLogsReplayed': False, 'published': False,
}
(out / 'host-check-summary.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2)+'\n', 'utf-8')
print({s: summary[s] for s in ('beta', 'stable', 'navigation')})
