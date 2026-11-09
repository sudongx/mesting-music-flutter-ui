from pathlib import Path
import hashlib,json
O=Path(__file__).resolve().parent

def parse(name):
    suites={};tests={};rows={};done=False
    for line in (O/name).read_text('utf-8-sig').splitlines():
        try:e=json.loads(line)
        except (ValueError,TypeError):continue
        if not isinstance(e,dict):continue
        if e.get('type')=='suite':
            suites[e['suite']['id']]=e['suite']['path'].replace('\\','/').replace('D:/AnLi/','')
        elif e.get('type')=='testStart':tests[e['test']['id']]=e['test']
        elif e.get('type')=='testDone' and not e.get('hidden'):
            t=tests[e['testID']];p=suites[t['suiteID']]
            r=rows.setdefault(p,{'passed':0,'failed':0,'skipped':0})
            r['skipped' if e.get('skipped') else 'passed' if e['result']=='success' else 'failed']+=1
        elif e.get('type')=='done':done=True
    assert done,name+' incomplete'
    return rows

replacements=parse('replacement-r2.jsonl')
beta=parse('beta-complete-r1.jsonl')
beta.update(replacements)
summary={'version':'1.0.77','code':98,'countsAreFreshRuns':True,
    'replacementPolicy':'The complete latest file result replaces the old file; reruns are never added.',
    'rawFailuresRetained':['beta-complete-r1.jsonl (2 automatic provider retry timers)',
        'social-listening-r1.jsonl (old artist fixture plus same-cookie identity gap)',
        'ui-r3.jsonl (missing sharedPreferences fixture)',
        'stable-complete-r1.jsonl (runner omitted stable flavor, missing channel assets)',
        'header-ui-r1.jsonl (capture awaited outside runAsync; interrupted)']}
for name,rows,log in [('beta',beta,'beta-complete-r1.jsonl'),
    ('stable',parse('stable-complete-r2.jsonl'),'stable-complete-r2.jsonl'),
    ('navigation',parse('navigation-complete-r1.jsonl'),'navigation-complete-r1.jsonl')]:
    totals={k:sum(v[k] for v in rows.values()) for k in ['passed','failed','skipped']}
    assert totals['failed']==0,(name,totals)
    summary[name]={'files':len(rows),**totals,'baseLog':log,'results':rows}
summary['beta']['completeFileReplacements']=list(replacements)
summary['analysis']={'log':'analyze-final-r2.log','issues':0}
assert 'No issues found!' in (O/'analyze-final-r2.log').read_text('utf-8-sig')
summary['ui']={'exported':len(list((O/'ui').glob('*.png'))),'softwareRenderedFixtures':True,
    'realAccountDeviceAcceptance':False}
(O/'host-summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps({k:{p:v for p,v in summary[k].items() if p in ['files','passed','failed','skipped']} for k in ['beta','stable','navigation']},indent=2))
