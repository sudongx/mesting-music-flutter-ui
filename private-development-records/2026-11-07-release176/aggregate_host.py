"""Whole-file replacement aggregation; never add rerun totals to old totals."""
import json
from pathlib import Path

OUT = Path(__file__).resolve().parent

def read_log(name):
    rows = []
    for line in (OUT / name).read_text('utf-8-sig', errors='replace').splitlines():
        try:
            item = json.loads(line)
        except ValueError:
            continue
        if isinstance(item, dict):
            rows.append(item)
    suites = {row['suite']['id']: row['suite']['path'].replace('\\', '/')
              for row in rows if row.get('type') == 'suite'}
    tests = {row['test']['id']: row['test'] for row in rows if row.get('type') == 'testStart'}
    result = {}
    for row in rows:
        if row.get('type') != 'testDone' or row.get('hidden'):
            continue
        test = tests[row['testID']]
        path = suites[test['suiteID']].split('/AnLi/')[-1]
        result.setdefault(path, []).append({
            'name': test['name'], 'result': row['result'],
            'skipped': row.get('skipped', False),
        })
    return result

def summarize(plan, logs):
    files = json.loads((OUT / plan).read_text('utf-8-sig'))
    actual, evidence = {}, {}
    for name in logs:
        for path, cases in read_log(name).items():
            if name == 'beta-complete-r3.jsonl':
                accepted = json.loads((OUT / 'host-resume.json').read_text('utf8'))['acceptedWholeFiles']
                if path not in accepted:
                    continue
            if path in files:
                actual[path] = cases
                evidence[path] = name
    assert set(files) == set(actual), set(files) - set(actual)
    cases = [case for path in files for case in actual[path]]
    counts = {
        'passed': sum(case['result'] == 'success' and not case['skipped'] for case in cases),
        'failed': sum(case['result'] != 'success' and not case['skipped'] for case in cases),
        'skipped': sum(case['skipped'] for case in cases),
    }
    return {'files': len(files), **counts, 'wholeFileEvidence': evidence,
            'failures': [case for case in cases if case['result'] != 'success' and not case['skipped']],
            'skips': [{'file': path, **case} for path in files for case in actual[path] if case['skipped']]}

assert 'No issues found!' in (OUT / 'analyze-final-r4.log').read_text('utf-8-sig')
result = {
    'method': 'Latest completed whole-file results replace the corresponding earlier file. Initial failures and interrupted runs remain private evidence; no duplicate-pass addition.',
    'beta': summarize('beta-files.json', ['beta-complete-r3.jsonl', 'beta-complete-r4.jsonl', 'beta-replacements-r5.jsonl']),
    'stable': summarize('stable-files.json', ['stable-complete-r4.jsonl']),
    'navigation': summarize('navigation-files.json', ['navigation-complete-r4.jsonl']),
    'analysis': {'issues': 0, 'log': 'analyze-final-r4.log'},
    'oldAccountExclusiveTestFilesRetired': sorted(
        item['path'] for item in json.loads((OUT / 'before.json').read_text('utf-8'))['currentFiles']
        if item['path'].startswith('test/') and not (Path('D:/AnLi') / item['path']).exists()),
}
assert all(result[suite]['failed'] == 0 for suite in ['beta', 'stable', 'navigation'])
(OUT / 'host-summary.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', 'utf-8')
print(json.dumps({key: {k: value[k] for k in ['files', 'passed', 'failed', 'skipped']}
                  for key, value in result.items() if key in ['beta', 'stable', 'navigation']}, indent=2))

