"""Summarize final complete relevant-file results without claiming a full suite."""
from pathlib import Path
from collections import Counter
import json

out = Path(__file__).resolve().parent
def summarize(name):
    tests, suites, rows = {}, {}, {}
    done = success = False
    for line in (out / name).read_text(encoding='utf-8', errors='replace').splitlines():
        try: event = json.loads(line)
        except ValueError: continue
        if not isinstance(event, dict): continue
        kind = event.get('type')
        if kind == 'suite':
            suite = event['suite']
            suites[suite['id']] = suite.get('path', '')
            rows.setdefault(suite.get('path', ''), {'counts': Counter(), 'errors': []})
        elif kind == 'testStart':
            tests[event['test']['id']] = event['test']
        elif kind in ('testDone', 'error'):
            test = tests.get(event.get('testID'), {})
            path = suites.get(test.get('suiteID'), '')
            row = rows.setdefault(path, {'counts': Counter(), 'errors': []})
            if kind == 'error':
                row['errors'].append({'test': test.get('name'), 'error': event.get('error', '')[:700]})
            elif not event.get('hidden'):
                row['counts']['skipped' if event.get('skipped') else event.get('result', 'unknown')] += 1
        elif kind == 'done':
            done, success = True, event.get('success') is True
    counts = Counter()
    errors = []
    for row in rows.values():
        counts.update(row['counts'])
        errors.extend(row['errors'])
    return {'completeAndSuccessful': done and success and not errors,
            'counts': dict(counts), 'files': len(rows), 'errors': errors, 'perFile': rows}

result = {name: summarize(name) for name in ['beta-targeted.jsonl', 'report-ui-capture.jsonl']}
result['analysisPassed'] = 'No issues found!' in (out / 'analyze-complete.log').read_text(encoding='utf-8')
result['scope'] = 'targeted_beta_record_message_live_totals_and_notes_complete_files'
(out / 'host-check-summary.json').write_text(json.dumps(result, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
assert result['analysisPassed'] and all(result[name]['completeAndSuccessful'] for name in ['beta-targeted.jsonl', 'report-ui-capture.jsonl'])
print(json.dumps({key: {a: b for a, b in value.items() if a != 'perFile'} if isinstance(value, dict) else value for key, value in result.items()}, ensure_ascii=False))
