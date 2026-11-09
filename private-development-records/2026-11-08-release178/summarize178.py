"""Summarize complete files; a repaired file replaces its earlier result."""
from pathlib import Path
import hashlib
import json

OUT = Path(__file__).resolve().parent


def parse(name):
    suites, tests, rows = {}, {}, {}
    done = False
    for line in (OUT / name).read_text('utf-8-sig').splitlines():
        try:
            event = json.loads(line)
        except (ValueError, TypeError):
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
    'version': '1.0.78', 'code': 99, 'countsAreFreshRuns': True,
    'replacementPolicy': 'Latest complete file result replaces its old file; reruns are never added.',
    'rawFailuresRetained': [
        'analyze-r1.log (4 style infos and 1 unused test import, subsequently corrected)',
        'beta-complete-r1.jsonl (pending-export UI fixture looked up an offscreen unbuilt group control)',
    ],
}
for suite in ['beta', 'stable', 'navigation']:
    log = suite + '-complete-r1.jsonl'
    rows = parse(log)
    replacements = []
    if suite == 'beta' and (OUT / 'ui-replacement.jsonl').exists():
        latest = parse('ui-replacement.jsonl')
        rows.update(latest)
        replacements = sorted(latest)
    totals = {key: sum(row[key] for row in rows.values()) for key in ['passed', 'failed', 'skipped']}
    assert totals['failed'] == 0, (suite, totals)
    summary[suite] = {'files': len(rows), **totals, 'baseLog': log, 'results': rows,
                      'completeFileReplacements': replacements}
assert 'No issues found!' in (OUT / 'analyze-final.log').read_text('utf-8-sig')
summary['analysis'] = {'log': 'analyze-final.log', 'issues': 0}
summary['ui'] = {'files': len(list((OUT / 'ui').glob('*.png'))), 'softwareRenderedFixtures': True,
                 'actualDeviceOrAccountAcceptance': False}
(OUT / 'host-summary.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2) + '\n', encoding='utf8')
print(json.dumps({suite: {key: summary[suite][key] for key in ['files', 'passed', 'failed', 'skipped']}
                  for suite in ['beta', 'stable', 'navigation']}, indent=2))
