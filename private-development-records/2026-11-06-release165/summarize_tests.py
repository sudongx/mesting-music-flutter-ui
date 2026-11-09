"""Count real test cases once; initialization/teardown events are not tests."""
import json
from collections import Counter, defaultdict
from pathlib import Path

out = Path(__file__).resolve().parent

def read_run(path):
    starts, finishes, suites = {}, {}, {}
    done = None
    errors = []
    for line in path.read_text('utf-8-sig', errors='replace').splitlines():
        try:
            event = json.loads(line)
        except ValueError:
            continue
        if not isinstance(event, dict):
            continue
        kind = event.get('type')
        if kind == 'suite':
            suites[event['suite']['id']] = event['suite']['path']
        elif kind == 'testStart':
            starts[event['test']['id']] = event['test']
        elif kind == 'testDone':
            finishes[event['testID']] = event
        elif kind == 'done':
            done = event.get('success')
        elif kind == 'error':
            errors.append({'id': event.get('testID'), 'error': event.get('error', '')[:1500]})
    counts = Counter()
    files = defaultdict(Counter)
    for key, event in finishes.items():
        start = starts.get(key, {})
        name = start.get('name', '')
        if event.get('hidden') or '(setUpAll)' in name or '(tearDownAll)' in name:
            continue
        result = 'skipped' if event.get('skipped') else event.get('result')
        counts[result] += 1
        files[suites.get(start.get('suiteID'), '<unknown>')][result] += 1
    return {'counts': dict(counts), 'completeSuccess': done,
            'errors': errors, 'files': dict(files)}

if __name__ == '__main__':
    result = {}
    for name in ('beta-complete-r1', 'stable-complete-r1', 'navigation-complete-r1', 'targeted-r2'):
        path = out / f'{name}.jsonl'
        if path.exists():
            result[name] = read_run(path)
            print(json.dumps({'run': name, **{k: result[name][k] for k in
                ('counts', 'completeSuccess', 'errors')}}, ensure_ascii=False))
    (out / 'test-run-summary.json').write_text(json.dumps(result, indent=2), 'utf-8')
