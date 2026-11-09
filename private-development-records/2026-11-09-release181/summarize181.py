"""Use complete fresh suite results once; keep exploratory failures separate."""
from pathlib import Path
import hashlib
import json

OUT = Path(__file__).resolve().parent


def parse(name):
    suites, tests, rows = {}, {}, {}
    complete = False
    for line in (OUT/name).read_text('utf-8-sig').splitlines():
        try:
            event = json.loads(line)
        except ValueError:
            continue
        if not isinstance(event, dict):
            continue
        kind = event.get('type')
        if kind == 'suite':
            suites[event['suite']['id']] = event['suite']['path'].replace('\\', '/').replace('D:/AnLi/', '')
        elif kind == 'testStart':
            tests[event['test']['id']] = event['test']
        elif kind == 'testDone' and not event.get('hidden'):
            test = tests[event['testID']]
            row = rows.setdefault(suites[test['suiteID']], {'passed': 0, 'failed': 0, 'skipped': 0})
            outcome = 'skipped' if event.get('skipped') else 'passed' if event['result'] == 'success' else 'failed'
            row[outcome] += 1
        elif kind == 'done':
            complete = event.get('success') is True
    assert complete, name+' did not end with a successful complete run'
    return rows


summary = {
    'version': '1.0.81', 'code': 102, 'countsAreFreshRuns': True,
    'replacementPolicy': 'Full suite with complete affected probe files replaced after per-request identity correction; targeted and earlier-version counts never added.',
    'rawFailuresRetained': [
        'analyze-initial.log: two new multiline-if style infos, fixed',
        'test181-targeted-r1.jsonl: new UI harness semantics cleanup, unrelated real-provider timers and offscreen locator failures, fixed in harness',
        'test181-ui-complete-r2.jsonl: new UI harness skipped intermediate lifecycle states, fixed in harness',
    ],
}
for suite in ['beta', 'stable', 'navigation']:
    log = suite+'-complete-r1.jsonl'
    rows = parse(log)
    expected = set(json.loads((OUT/(suite+'-files.json')).read_text('utf-8-sig')))
    assert set(rows) == expected, (suite, expected-set(rows), set(rows)-expected)
    replacements = []
    if suite == 'beta':
        replacement = parse('test181-complete-r4.jsonl')
        assert set(replacement) == {'test/netease_ad_probe181_test.dart', 'test/netease_ad_probe181_ui_test.dart'}
        rows.update(replacement)
        replacements = ['test181-complete-r4.jsonl']
    totals = {key: sum(row[key] for row in rows.values()) for key in ['passed', 'failed', 'skipped']}
    assert totals['failed'] == 0
    summary[suite] = {'files': len(rows), **totals, 'baseLog': log, 'replacementLogs': replacements, 'results': rows}
assert 'No issues found!' in (OUT/'analyze-final.log').read_text('utf-8-sig')
summary['analysis'] = {'log': 'analyze-final.log', 'issues': 0}
screens = sorted((OUT/'ui').glob('*.png'))
assert len(screens) == 4
summary['ui'] = {
    'newLayout': True, 'newScreenshots': len(screens),
    'screenshots': [{'file': str(path.relative_to(OUT)).replace('\\', '/'),
                     'sha256': hashlib.sha256(path.read_bytes()).hexdigest()} for path in screens],
    'surface': 'Isolated production page with shared glass navigation, light/dark, 390px normal and 320px text scale2',
    'actualDeviceOrAccountAcceptance': False,
}
with (OUT/'host-summary.json').open('x', encoding='utf8') as stream:
    json.dump(summary, stream, ensure_ascii=False, indent=2)
    stream.write('\n')
print(json.dumps({key: {field: summary[key][field] for field in ['files', 'passed', 'failed', 'skipped']}
                  for key in ['beta', 'stable', 'navigation']}, indent=2))
