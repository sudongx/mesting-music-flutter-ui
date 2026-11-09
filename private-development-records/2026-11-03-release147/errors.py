import json, sys
from pathlib import Path
p = Path(sys.argv[1])
tests, suites, errors, messages = {}, {}, [], {}
for line in p.read_text('utf-8-sig',errors='replace').splitlines():
    try: e=json.loads(line)
    except ValueError: continue
    if not isinstance(e,dict): continue
    if e.get('type')=='suite': suites[e['suite']['id']] = e['suite']['path']
    if e.get('type')=='testStart': tests[e['test']['id']] = e['test']
    if e.get('type')=='print': messages.setdefault(e.get('testID'), []).append(e['message'])
    if e.get('type')=='error': errors.append(e)
for e in errors:
    t = tests.get(e.get('testID'),{})
    print(suites.get(t.get('suiteID'),''),t.get('name',''))
    print(e.get('error','')[:1800])
    for text in messages.get(e.get('testID'),[]):
        if 'EXCEPTION' in text: print(text[:2100])
