"""Summarize complete raw Flutter runs; no test-name/codepage inference needed."""
import collections
import json
from pathlib import Path

OUT = Path(__file__).resolve().parent
ROOT = OUT.parent.parent

def read(name):
    p = OUT/name
    if not p.exists(): return None
    suites, tests, rows = {}, {}, {}
    complete, successful, errors = False, False, []
    for line in p.read_text(encoding='utf-8-sig',errors='replace').splitlines():
        try: e = json.loads(line)
        except ValueError: continue
        if not isinstance(e,dict): continue
        kind=e.get('type')
        if kind=='suite':
            s=e['suite']; suites[s['id']]=s.get('path','')
            rows.setdefault(s.get('path',''),collections.Counter())
        elif kind=='testStart': tests[e['test']['id']]=e['test']
        elif kind=='testDone' and not e.get('hidden'):
            t=tests.get(e.get('testID'),{})
            path=suites.get(t.get('suiteID'),'unattributed')
            rows.setdefault(path,collections.Counter())[
                'skipped' if e.get('skipped') else e.get('result','unknown')]+=1
        elif kind=='error':
            t=tests.get(e.get('testID'),{})
            errors.append({'file':suites.get(t.get('suiteID'),'unattributed'),
                'test':t.get('name',''), 'error':e.get('error','')[:2000]})
        elif kind=='done': complete=True; successful=e.get('success') is True
    counts=collections.Counter()
    for row in rows.values(): counts.update(row)
    return {'completeAndSuccessful':complete and successful and not errors,
        'doneSeen':complete, 'commandSuccessful':successful,
        'counts':dict(counts),'files':len(rows),'errors':errors,
        'perFile':{p:dict(c) for p,c in rows.items()}}

result={}
for name in ['beta-complete.jsonl','stable-complete.jsonl','search-back-player.jsonl','root-ui-final.jsonl']:
    r=read(name)
    if r is not None: result[name]=r
if 'beta-complete.jsonl' in result:
    base=result['beta-complete.jsonl']
    applied=[]
    for name in ['beta-affected-before-capture-fix.jsonl','beta-affected-final.jsonl']:
      retry=read(name)
      if retry and retry['doneSeen']:
        # Replace complete affected files only, retaining the unsuccessful raw
        # first run and its result rather than pretending that it passed.
        replaced=set(retry['perFile'])
        rows={**base['perFile'], **retry['perFile']}
        errors=[e for e in base['errors'] if e['file'] not in replaced]+retry['errors']
        counts=collections.Counter()
        for row in rows.values(): counts.update(row)
        applied.append(name)
        base.update(perFile=rows, counts=dict(counts), errors=errors,
            files=len(rows), completeFileRetriesApplied=applied.copy(),
            completeAndSuccessful=base['doneSeen'] and not errors and
                not any(counts.get(k,0) for k in ['error','failure','unknown']))
    expected={str((ROOT/p).resolve()).replace('\\','/').lower() for p in json.loads((OUT/'beta-files.json').read_text(encoding='utf-8-sig'))}
    observed={str(Path(p).resolve()).replace('\\','/').lower() for p in result['beta-complete.jsonl']['perFile']}
    result['beta-complete.jsonl']['selectedFileManifestMatches']=expected==observed
    result['beta-complete.jsonl']['completeAndSuccessful'] &= expected==observed
analysis=OUT/'analyze-complete.log'
result['analysisPassed']=analysis.exists() and 'No issues found!' in analysis.read_text(encoding='utf-8-sig',errors='replace')
(OUT/'host-check-summary.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({k:{a:b for a,b in v.items() if a!='perFile'} if isinstance(v,dict) else v for k,v in result.items()},ensure_ascii=False))
