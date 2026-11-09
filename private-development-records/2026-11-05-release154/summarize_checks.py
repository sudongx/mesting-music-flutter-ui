"""Whole-file successful reruns replace prior results; never add duplicate cases."""
from pathlib import Path
import collections
import hashlib
import json

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent

def parse(name):
    suites, tests, counts, complete = {}, {}, {}, False
    for line in (out / name).read_text('utf-8-sig', errors='replace').splitlines():
        try:
            event = json.loads(line)
        except ValueError:
            continue
        if not isinstance(event, dict):
            continue
        kind = event.get('type')
        if kind == 'suite':
            suites[event['suite']['id']] = event['suite']['path'].replace('\\', '/')
        elif kind == 'testStart':
            tests[event['test']['id']] = event['test']
        elif kind == 'testDone' and not event.get('hidden'):
            path = suites[tests[event['testID']]['suiteID']]
            counts.setdefault(path, collections.Counter())[
                'skipped' if event.get('skipped') else event['result']] += 1
        elif kind == 'done':
            complete = event.get('success', False)
    assert complete and counts, name
    assert all(not (row.get('failure') or row.get('error')) for row in counts.values()), name
    return {'completeAndSuccessful': True, 'perFile': {path: dict(row) for path, row in counts.items()}}

def totals(record):
    total = collections.Counter()
    for row in record['perFile'].values():
        total.update(row)
    record['counts'] = dict(total)
    record['files'] = len(record['perFile'])
    return record

beta = parse('beta-complete.jsonl')
rerun = parse('final-regressions.jsonl')
beta['completeFileRerunProvenance'] = {}
for path, count in rerun['perFile'].items():
    assert path in beta['perFile'], path
    beta['perFile'][path] = count
    beta['completeFileRerunProvenance'][path] = 'final-regressions.jsonl'
beta = totals(beta)
assert beta['files'] == len(json.loads((out / 'beta-files.json').read_text('utf-8'))) == 179
assert beta['counts'] == {'success': 2009, 'skipped': 2}, beta['counts']
stable, nav = totals(parse('stable-complete.jsonl')), totals(parse('search-back-player.jsonl'))
assert stable['counts'] == {'success': 63} and nav['counts'] == {'success': 55}
assert 'No issues found!' in (out / 'analyze-build-final.log').read_text('utf-8-sig')

before = json.loads((out / 'state-before.json').read_text('utf-8'))
sdk = [row for row in before['source'] if row['path'].startswith('third_party/ring_download_sdk/')]
assert len(sdk) == 242
assert all(hashlib.sha256((root / row['path']).read_bytes()).hexdigest() == row['sha256'] for row in sdk)
native = json.loads((out / 'native-background-verification.json').read_text('utf-8'))
packaging = json.loads((out / 'native-packaging-verification.json').read_text('utf-8'))
for item in [*native['inputs'], *packaging['storageFamilyInputs']]:
    assert hashlib.sha256((root / item['path']).read_bytes()).hexdigest() == item['sha256'], item['path']
assert native['scenariosPassed'] == 16 and native['systemHttpScenariosPassed'] == 13
assert packaging['storageFamilyScenariosPassed'] == 6
rustlog = (out / 'rust-test-link-fixed.log').read_text('utf-8-sig')
assert 'test result: FAILED' not in rustlog
import re
rustgroups = [tuple(map(int, match)) for match in re.findall(r'test result: ok\. (\d+) passed; (\d+) failed; (\d+) ignored;', rustlog)]
assert sum(row[0] for row in rustgroups) == 136 and sum(row[2] for row in rustgroups) == 6, rustgroups
motion = json.loads((root / '.codex-artifacts/2026-11-04-release153/welcome-frame-scheduling.json').read_text('utf-8'))
for relative in ['lib/features/auth/presentation/companion_motion.dart', 'lib/features/auth/presentation/beta_companion_stage.dart']:
    prior = next(row for row in before['source'] if row['path'] == relative)
    assert hashlib.sha256((root / relative).read_bytes()).hexdigest() == prior['sha256']
motion.update({'inheritedFromVersion': '1.0.53', 'remeasuredForVersion154': False, 'physicalGpuMeasured': False})
images = sorted((out / 'ui-final').glob('*.png'))
assert len(images) == 40
result = {'beta-complete.jsonl': beta, 'stable-complete.jsonl': stable, 'search-back-player.jsonl': nav,
    'analysisPassed': True, 'analysisIssues': 0, 'nativeFresh': native,
    'storageFamilyFresh': {'scenariosPassed': 6, 'inputs': packaging['storageFamilyInputs']},
    'rustHost': {'passed': 136, 'ignoredExternalNetworkCases': 6, 'failed': 0, 'sameHostInputsAfterAndroidOnlyEofFix': True},
    'sdkHistoricalOnly': {'counts': {'success': 563}, 'files': 29, 'sameSdkSourceFilesVerified': 242,
        'rerunForVersion154': False, 'wholeAppLockUnchanged': False,
        'lockException': 'flutter_secure_storage10.3.1 same version; hosted -> local fork only'},
    'finalHostImages': len(images), 'coreWelcomeLoginDiagnosticsImages': 12, 'allLoginNavigationImages': 28,
    'welcomeFrameScheduling': motion, 'physicalDeviceAcceptance': False}
(out / 'host-check-summary.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', 'utf-8')
print(json.dumps({'beta': beta['counts'], 'files': beta['files'], 'stable': stable['counts'], 'navigation': nav['counts'],
    'analysisIssues': 0, 'nativeCases': 35, 'rust': result['rustHost'], 'images': len(images)}, indent=2))
