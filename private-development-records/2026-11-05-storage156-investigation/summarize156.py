from pathlib import Path
import collections
import json
import xml.etree.ElementTree as ET

OUT = Path(__file__).resolve().parent
ROOT = Path('D:/AnLi')

def log(path):
    suites, tests, results = {}, {}, collections.defaultdict(collections.Counter)
    done = None
    errors = []
    for line in path.read_text('utf-8', errors='replace').splitlines():
        try: row = json.loads(line)
        except (ValueError, TypeError): continue
        if not isinstance(row, dict): continue
        if row.get('type') == 'suite':
            suites[row['suite']['id']] = row['suite']['path'].replace('D:/AnLi/', '')
        elif row.get('type') == 'testStart': tests[row['test']['id']] = row['test']
        elif row.get('type') == 'testDone' and not row.get('hidden'):
            file = suites[tests[row['testID']]['suiteID']]
            results[file]['skipped' if row.get('skipped') else row['result']] += 1
        elif row.get('type') == 'error':
            test = tests.get(row.get('testID'), {})
            errors.append({'file': suites.get(test.get('suiteID')), 'test': test.get('name'), 'error': row.get('error')})
        elif row.get('type') == 'done': done = row['success']
    return dict(results), done, errors

coverage = json.loads((OUT / 'beta-partial-coverage.json').read_text('utf-8'))
initial, _, initial_errors = log(OUT / 'beta-complete.jsonl')
assert not initial_errors
beta = {name: initial[name] for name in coverage['completedFiles'] if name in initial}
resumed, done, resumed_errors = log(OUT / 'beta-resumed.jsonl')
assert done is not None
beta.update(resumed)
rerun, rerun_done, rerun_errors = log(OUT / 'beta-rechecked-files.jsonl')
assert rerun_done and not rerun_errors
beta.update(rerun)
assert set(beta) == set(json.loads((OUT / 'beta-files.json').read_text('utf-8')))
assert all(not (set(row) - {'success', 'skipped'}) for row in beta.values())
total = collections.Counter()
for value in beta.values(): total.update(value)
report = {'beta': {'files': len(beta), **dict(total), 'complete': True,
                   'mergedFromCompleteFiles': True, 'earlierFailuresRetained': resumed_errors,
                   'recheckedFiles': sorted(rerun)}}
for name in ['stable', 'navigation']:
    files, finished, errors = log(OUT / (name + '-complete.jsonl'))
    assert finished and not errors
    total = collections.Counter()
    for value in files.values(): total.update(value)
    report[name] = {'files': len(files), **dict(total), 'complete': True}
native = []
for path in (ROOT / 'build/flutter_secure_storage/test-results/testDebugUnitTest').glob('TEST-*.xml'):
    row = ET.parse(path).getroot().attrib
    native.append({k: int(row[k]) if k != 'name' else row[k] for k in ['name', 'tests', 'errors', 'failures', 'skipped']})
assert native and all(not (r['errors'] or r['failures']) for r in native)
report['nativeSecureStorage'] = {'files': len(native), 'passed': sum(r['tests'] - r['skipped'] for r in native), 'results': native}
analysis = (OUT / 'analyze-post-controller.log').read_text('utf-8', errors='replace')
assert 'No issues found!' in analysis
report['analysisPassed'] = True
(OUT / 'host-check-summary.json').write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps({k: {a: b for a, b in v.items() if a not in ['results', 'earlierFailuresRetained']}
                  if isinstance(v, dict) else v for k, v in report.items()}, ensure_ascii=False, indent=2))
