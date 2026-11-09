from pathlib import Path
import json
import sys

def report(path):
    rows = []
    for line in Path(path).read_text(encoding='utf-8-sig', errors='replace').splitlines():
        try: rows.append(json.loads(line))
        except ValueError: pass
    starts = {r['test']['id']: r['test'] for r in rows if r.get('type') == 'testStart'}
    suites = {r['suite']['id']: r['suite']['path'].replace('D:/AnLi/', '').replace('\\', '/') for r in rows if r.get('type') == 'suite'}
    counts = {}
    for r in rows:
        if r.get('type') != 'testDone' or r.get('hidden'): continue
        t = starts[r['testID']]
        item = counts.setdefault(suites[t['suiteID']], {'passed': 0, 'failed': 0, 'skipped': 0})
        item['skipped' if r.get('skipped') else 'passed' if r['result']=='success' else 'failed'] += 1
    return rows, starts, suites, counts

if __name__ == '__main__':
    for name in sys.argv[1:]:
        rows, starts, suites, counts = report(name)
        print(name, {key: sum(item[key] for item in counts.values()) for key in ['passed', 'failed', 'skipped']})
        for r in rows:
            if r.get('type') != 'testDone' or r.get('result') != 'error': continue
            t = starts[r['testID']]
            print(suites[t['suiteID']], t['name'])
            for e in rows:
                if e.get('type')=='print' and e.get('testID')==r['testID'] and 'exception' in e.get('message','').lower():
                    print(e['message'][:1900])
