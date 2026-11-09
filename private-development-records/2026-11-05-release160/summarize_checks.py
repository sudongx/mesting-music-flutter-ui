"""Count each final complete-file result once and retain raw run evidence."""
from pathlib import Path
from datetime import datetime,timezone
import collections,hashlib,json
ROOT=Path('D:/AnLi');OUT=Path(__file__).resolve().parent

def parse(name):
 suites={};tests={};counts={};errors=[];done=None
 for line in (OUT/name).read_text('utf-8-sig',errors='replace').splitlines():
  try:e=json.loads(line)
  except ValueError:continue
  if not isinstance(e,dict):continue
  k=e.get('type')
  if k=='suite':suites[e['suite']['id']]=e['suite']['path'].replace('\\','/')
  elif k=='testStart':tests[e['test']['id']]=e['test']
  elif k=='testDone' and not e.get('hidden'):
   t=tests[e['testID']];p=suites[t['suiteID']];result='skipped' if e.get('skipped') else e['result'];counts.setdefault(p,collections.Counter())[result]+=1
   if result not in ['success','skipped']:errors.append({'file':p,'test':t['name'],'result':result})
  elif k=='done':done=e
 assert done and counts,name
 return counts,errors,done

def summary(counts):
 total=collections.Counter()
 for row in counts.values():
  assert not(row.get('error') or row.get('failure')),row
  total.update(row)
 return {'files':len(counts),**dict(total),'complete':True}

exits=json.loads((OUT/'final-check-exits.json').read_text('utf-8-sig'))
assert all(v==0 for k,v in exits.items() if k!='analysis'),exits
analysis_exit=json.loads((OUT/'analysis-recheck-exits.json').read_text('utf-8-sig'))
assert not any(analysis_exit.values()),analysis_exit
assert 'No issues found!' in (OUT/'analyze-delivery.log').read_text('utf-8-sig')
beta,be,bd=parse('beta-complete.jsonl');rechecks,re,rd=parse('final-regressions.jsonl');stable,se,sd=parse('stable-final.jsonl');nav,ne,nd=parse('search-back-player-final.jsonl')
assert bd['success'] and rd['success'] and sd['success'] and nd['success'] and not(be or re or se or ne)
for p,c in rechecks.items():
 assert p in beta,p
 beta[p]=c
lintfix,le,ld=parse('repository-lint-final.jsonl');assert ld['success'] and not le
for p,c in lintfix.items():
 assert p in beta,p
 beta[p]=c
b,st,n=map(summary,[beta,stable,nav]);assert b['files']==199 and b['success']==2290 and b['skipped']==2,b
assert st['success']==63 and n['success']==55
before=json.loads((OUT/'state-before.json').read_text('utf-8'))
protected=[r for r in before['files'] if r['path'].startswith(('android/','third_party/'))]
for row in protected:assert hashlib.sha256((ROOT/row['path']).read_bytes()).hexdigest()==row['sha256'],row['path']
assert hashlib.sha256((ROOT/'pubspec.lock').read_bytes()).hexdigest()==before['lockSha256']
result={'version':'1.0.60','recordedAtUtc':datetime.now(timezone.utc).isoformat(),'beta':{**b,'firstRunSuccessful':True,'rawLog':'beta-complete.jsonl','mergedFromCompleteFiles':True,'recheckedAfterNullSerializationFix':list(rechecks),'repositoryLintRecheckedCompleteFile':list(lintfix)},'stable':{**st,'rawLog':'stable-final.jsonl','initialInterruptedLogRetained':'stable-complete.jsonl','initialShaderAssetFailureRetained':True},'navigation':n,'betaPerFile':{p:dict(c) for p,c in beta.items()},'analysisPassed':True,'analysisIssues':0,'analysisInitialFourRepositoryTestStyleIssuesRetained':True,'new160Cases':{p:dict(c) for p,c in beta.items() if '/release_160_' in p},'unchangedNativeAndThirdPartySourceFilesVerified':len(protected),'newHostScreenshotsClaimed':False,'inheritedOnly':{'secureStorageNativeFrom56':{'passed':164,'rerunFor160':False},'networkAndMediaJvmFrom54':{'passed':35,'rerunFor160':False},'rustFrom54':{'passed':136,'ignoredExternalNetwork':6,'rerunFor160':False},'ringSdkHistorical':{'passed':563,'verifiedSourceFiles':242,'rerunFor160':False}},'physicalDeviceAcceptance':False,'deviceAccess':False,'realAccountAccess':False,'backendAccess':False,'gitCommitted':False,'gitPushed':False,'published':False,'neteaseDirectAdClaimAccepted':False,'neteaseFreeListenCredited':False,'oldAcceptedOrUnknownRecordsReplayed':False}
(OUT/'host-check-summary.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n','utf-8')
print(json.dumps({k:result[k] for k in ['beta','stable','navigation','analysisIssues','new160Cases']},ensure_ascii=True,indent=2))
