from pathlib import Path
import json
from summarize import report
out=Path('D:/AnLi/.codex-artifacts/2026-11-01-release133')
def checked(name):
 rows,starts,suites,counts=report(out/name)
 assert rows[-1].get('type')=='done' and rows[-1].get('success'),name
 assert all(v['failed']==v['skipped']==0 for v in counts.values()),name
 return rows,starts,counts
_,_,beta=checked('beta-final.jsonl')
_,_,stable=checked('stable-complete.jsonl')
rows,starts,back=checked('search-back-player.jsonl')
_,_,stablePadding=checked('stable-padding.jsonl')
assert len(beta)==93 and sum(x['passed'] for x in beta.values())==1355
assert sum(x['passed'] for x in stable.values())==19
assert sum(x['passed'] for x in back.values())==11
assert sum(x['passed'] for x in stablePadding.values())==1
android=[r for r in rows if r.get('type')=='testDone' and 'Android back registration' in starts[r['testID']]['name']]
assert len(android)==1 and android[0]['result']=='success'
assert 'No issues found!' in (out/'analyze-complete.log').read_text(encoding='utf-8-sig')
assert 'All tests passed!' in (out/'render-complete.log').read_text(encoding='utf-8-sig')
captures=sorted(p.name for p in (out/'ui').glob('*.png'))
assert len(captures)==10
result={'beta':{'fileCount':len(beta),'passed':1355,'failed':0,'skipped':0,'perFile':beta,'log':'beta-final.jsonl'},
 'stable':{'passed':19,'failed':0,'perFile':stable,'log':'stable-complete.jsonl'},
 'stablePadding':{'passed':1,'failed':0,'perFile':stablePadding,'log':'stable-padding.jsonl'},
 'searchBackPlayer':{'passed':11,'failed':0,'includesAndroidBackHostRegistration':True,'log':'search-back-player.jsonl'},
 'analysis':{'issues':0,'log':'analyze-complete.log'},'renderCount':10,'renders':captures,
 'aggregation':'One final full run per flavor; focused/visual/repeated checks are not added to overlapping counts.',
 'originalReproductions':'repro-before-final.log and totals-before.log preserve actual symptom failures; early harness setup/compile failures also retained.',
 'sourceScrollDeclarationAudit':153,'deviceUsed':False,'realAccountUsed':False,'backendUsed':False,
 'officialCumulativeHistoryObserved':False,'completionMessageRecordResolved':False}
(out/'host-check-summary.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print({'betaFiles':93,'betaPassed':1355,'stable':19,'stablePadding':1,'searchBackPlayer':11,'analysisIssues':0,'captures':10})
