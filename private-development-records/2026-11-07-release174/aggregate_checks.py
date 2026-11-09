"""Accept complete per-file replacements; never add repeated test cases."""
from pathlib import Path
from collections import Counter
import hashlib, json, runpy

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
read = runpy.run_path(str(OUT / 'summarize_tests.py'))['read_run']
previous = json.loads((ROOT / '.codex-artifacts/2026-11-07-release173/host-check-summary.json').read_text('utf8'))
baseline = read(OUT / 'beta-complete-r2.jsonl')
allowed = {str((ROOT / p).as_posix()) for p in json.loads((OUT / 'beta-files.json').read_text('utf-8-sig'))}
files = baseline['files'].copy()
accepted = []
for name in ['final-replacements-r3', 'cache-final-r4', 'ui-capture-r3', 'diagnostic-final-r5', 'device-fix-r6', 'ui-capture-r6', 'owner-final-r7', 'ui-capture-r7', 'diagnostic-final-r8', 'artwork-projection-r9', 'ui-capture-r9']:
    run = read(OUT / (name + '.jsonl'))
    # R3's only run-level error was an invalid command argument, not a test.
    # Every existing file completed; the omitted cache suite has a final R4 run.
    if name == 'final-replacements-r3':
        assert len(run['errors']) == 1 and 'release_126_persistence_test.dart' in run['errors'][0]['error']
    else:
        assert run['completeSuccess'] is True and not run['errors'], name
    for path, counts in run['files'].items():
        if path not in allowed:
            assert name == 'final-replacements-r3' and counts.get('error') == 1, path
            continue
        assert set(counts) <= {'success', 'skipped'}, (name, path, counts)
        files[path] = counts
        accepted.append({'run': name, 'file': path})
assert set(files) == allowed, sorted(set(files) ^ allowed)
counts = Counter()
for value in files.values():
    counts.update(value)
assert set(counts) <= {'success', 'skipped'}
result = {'version': '1.0.74', 'androidVersionCode': 95, 'passed': True,
          'analysisIssues': 0, 'analysisLog': 'analyze-final-r9.log',
          'beta': {'files': len(files), 'passed': counts['success'], 'skipped': counts['skipped'], 'complete': True},
          'betaPerFile': files, 'acceptedWholeFileReplacements': accepted}
assert 'No issues found!' in (OUT / result['analysisLog']).read_text('utf8')
for suite in ['stable', 'navigation']:
    run = read(OUT / (suite + '-complete-r2.jsonl'))
    assert run['completeSuccess'] is True and not run['errors']
    result[suite] = {'files': len(run['files']), 'passed': run['counts']['success'], 'skipped': run['counts'].get('skipped', 0), 'complete': True}
    result[suite + 'PerFile'] = run['files']
for field in ['nativeAudio', 'officialNativePreparationAndCenc']:
    inherited = previous[field]
    for row in inherited['inputs']:
        assert hashlib.sha256((ROOT / row['path']).read_bytes()).hexdigest() == row['sha256'], row['path']
    result[field] = {**inherited, 'inputsRecheckedFor74': True, 'freshRun': False, 'rerunOrAdded': False}
final_images = sorted((OUT / 'ui-projection-final').glob('*.png'))
assert len(final_images) == 12
assert all(p.read_bytes() == (OUT / 'ui' / p.name).read_bytes() for p in final_images)
result['ui'] = {**previous['ui'], 'images': [
    {'path': p.name, 'bytes': p.stat().st_size, 'sha256': hashlib.sha256(p.read_bytes()).hexdigest()}
    for p in final_images], 'newCaptureThisRelease': True,
    'finalImagesByteIdenticalToViewedR3': True}
assert len(result['ui']['images']) == 12
result.update({'counting': 'Final whole-file replacements, no repeated cases or historical native cases added.',
               'physicalDeviceAccess': True, 'realAccountAccessScope': 'Visible read-only browsing and authorized retained-data performance testing; no credential extraction.',
               'helperDeploymentModified': False, 'agentInitiatedSignerMediaResolution': False,
               'actual301RootCauseConfirmed': False, 'actualVipFullPlaybackUnder29DaysConfirmed': False,
               'cloudHistoryWriteAndCoverAcceptedByServer': False,
               'retainedInitialFailures': ['beta-all-flavors-misconfigured.jsonl', 'beta-complete-r2.jsonl', 'final-replacements-r3.jsonl', 'analyze-final-r3.log', 'first-device-candidate/rejection.json', 'owner-probe-r7.jsonl', 'owner-probe-r7b.jsonl', 'second-device-candidate/rejection.json', 'fourth-device-candidate/rejection.json']})
(OUT / 'host-check-summary.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', 'utf8')
print(json.dumps({k: result[k] for k in ['passed', 'beta', 'stable', 'navigation', 'analysisIssues']}, ensure_ascii=False))
