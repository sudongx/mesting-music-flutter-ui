"""Count each complete suite once, never add targeted or historical runs."""
from pathlib import Path
import json
OUT = Path(__file__).resolve().parent

def parse(name):
    suites, tests, rows = {}, {}, {}
    done = False
    for line in (OUT/name).read_text('utf-8-sig').splitlines():
        try:
            e = json.loads(line)
        except ValueError:
            continue
        if not isinstance(e, dict):
            continue
        if e.get('type')=='suite':
            suites[e['suite']['id']] = e['suite']['path'].replace('\\', '/').replace('D:/AnLi/', '')
        elif e.get('type')=='testStart':
            tests[e['test']['id']] = e['test']
        elif e.get('type')=='testDone' and not e.get('hidden'):
            t = tests[e['testID']]
            row = rows.setdefault(suites[t['suiteID']], {'passed':0, 'failed':0, 'skipped':0})
            row['skipped' if e.get('skipped') else 'passed' if e['result']=='success' else 'failed'] += 1
        elif e.get('type')=='done':
            done = e.get('success') is True
    assert done, name+' not a successful complete run'
    return rows

summary = {'version':'1.0.80', 'code':101, 'countsAreFreshRuns':True,
    'replacementPolicy':'Complete suite file results only; changed180 test file fully replaced after analysis style correction. Targeted and historical counts never added.',
    'rawFailuresRetained':['analyze-r1.log: one use_null_aware_elements info in new test; style corrected; complete affected file and final analysis rerun']}
for suite in ['beta', 'stable', 'navigation']:
    log = suite+'-complete-r1.jsonl'
    rows = parse(log)
    if suite == 'beta':
        replacement = parse('test180-complete-r2.jsonl')
        assert set(replacement) == {'test/netease_free_listen180_test.dart'}
        rows.update(replacement)
    totals = {k:sum(r[k] for r in rows.values()) for k in ['passed', 'failed', 'skipped']}
    assert totals['failed']==0
    summary[suite] = {'files':len(rows), **totals, 'baseLog':log, 'replacementLogs':['test180-complete-r2.jsonl'] if suite=='beta' else [], 'results':rows}
assert 'No issues found!' in (OUT/'analyze-final.log').read_text('utf-8-sig')
summary['analysis'] = {'log':'analyze-final.log', 'issues':0}
summary['ui'] = {'newLayout':False, 'newScreenshots':0, 'actualDeviceOrAccountAcceptance':False}
(OUT/'host-summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n','utf8')
print(json.dumps({s:{k:summary[s][k] for k in ['files','passed','failed','skipped']} for s in ['beta','stable','navigation']},indent=2))
