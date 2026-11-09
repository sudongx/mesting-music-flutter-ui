"""Use complete file results once; retain all earlier targeted logs."""
from pathlib import Path
import json

OUT = Path(__file__).resolve().parent


def parse(name):
    suites, tests, rows = {}, {}, {}
    done = False
    for line in (OUT / name).read_text('utf-8-sig').splitlines():
        try:
            event = json.loads(line)
        except ValueError:
            continue
        if not isinstance(event, dict):
            continue
        if event.get('type') == 'suite':
            suites[event['suite']['id']] = event['suite']['path'].replace('\\', '/').replace('D:/AnLi/', '')
        elif event.get('type') == 'testStart':
            tests[event['test']['id']] = event['test']
        elif event.get('type') == 'testDone' and not event.get('hidden'):
            test = tests[event['testID']]
            row = rows.setdefault(suites[test['suiteID']], {'passed': 0, 'failed': 0, 'skipped': 0})
            key = 'skipped' if event.get('skipped') else 'passed' if event['result'] == 'success' else 'failed'
            row[key] += 1
        elif event.get('type') == 'done':
            done = True
    assert done, name + ' incomplete'
    return rows


summary = {
    'version': '1.0.79', 'code': 100, 'countsAreFreshRuns': True,
    'replacementPolicy': 'Complete suite file results only; targeted runs are not added.',
    'rawFailuresRetained': [
        'final-targeted-r1.jsonl: diagnostic versionCode assertion still expected99 after product bumped100; test corrected before complete run',
    ],
}
for suite in ['beta', 'stable', 'navigation']:
    name = suite + '-complete-r1.jsonl'
    rows = parse(name)
    totals = {key: sum(row[key] for row in rows.values()) for key in ['passed', 'failed', 'skipped']}
    assert totals['failed'] == 0, (suite, totals)
    summary[suite] = {'files': len(rows), **totals, 'baseLog': name, 'results': rows}
assert 'No issues found!' in (OUT / 'analyze-final.log').read_text('utf-8-sig')
summary['analysis'] = {'log': 'analyze-final.log', 'issues': 0}
summary['ui'] = {
    'newLayout': False, 'newScreenshots': 0, 'softwareWidgetBehaviorChecked': True,
    'emptyFollowingAndFollowersWithDouyinSwitchCovered': True,
    'actualDeviceOrAccountAcceptance': False,
}
(OUT / 'host-summary.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2) + '\n', 'utf8')
print(json.dumps({suite: {key: summary[suite][key] for key in ['files', 'passed', 'failed', 'skipped']}
                  for suite in ['beta', 'stable', 'navigation']}, indent=2))
