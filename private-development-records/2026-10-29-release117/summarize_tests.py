from pathlib import Path
import json
r=Path('D:/AnLi');out=r/'.codex-artifacts/2026-10-29-release117'
def events(name):
 rows=[]
 for line in (out/name).read_text(encoding='utf-8-sig').splitlines():
  try:rows.append(json.loads(line))
  except ValueError:pass
 assert any(x.get('type')=='done' and x['success'] for x in rows),name
 assert not any(x.get('type')=='error' for x in rows),name
 suites={x['suite']['id']:x['suite']['path'].replace('\\','/').replace('D:/AnLi/','') for x in rows if x.get('type')=='suite'}
 tests={x['test']['id']:x['test']['suiteID'] for x in rows if x.get('type')=='testStart'}
 counts={}
 for row in rows:
  if row.get('type')=='testDone' and row.get('result')=='success' and not row.get('hidden') and not row.get('skipped'):
   path=suites[tests[row['testID']]];counts[path]=counts.get(path,0)+1
 return {'passed':sum(counts.values()),'files':list(counts),'countsByFile':counts,'log':'.codex-artifacts/2026-10-29-release117/'+name,'success':True}
results={k:events(v) for k,v in {'betaRegression':'regression-tests-final.jsonl','stableSearchAndUpdate':'stable-tests-final.jsonl','androidBackRegistration':'android-back-final.jsonl','finalChangedAudioAndUi':'final-audio-tests.jsonl','sourceMenusAndUi':'final-ui-regression.jsonl'}.items()}
assert results['betaRegression']['passed']==1017
assert results['stableSearchAndUpdate']['passed']==19
assert results['androidBackRegistration']['passed']==1
assert results['finalChangedAudioAndUi']['passed']==65
(out/'host-test-summary.json').write_text(json.dumps(results,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print({k:v['passed'] for k,v in results.items()})
