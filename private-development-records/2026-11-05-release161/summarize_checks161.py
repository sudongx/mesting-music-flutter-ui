from pathlib import Path
from datetime import datetime,timezone
import json,collections,hashlib
root=Path('D:/AnLi');out=Path(__file__).resolve().parent

def parse(name):
 suites={};tests={};counts={};errors=[];done=None
 for line in (out/name).read_text('utf-8-sig',errors='replace').splitlines():
  try:e=json.loads(line)
  except ValueError:continue
  if not isinstance(e,dict):continue
  k=e.get('type')
  if k=='suite':suites[e['suite']['id']]=e['suite']['path'].replace(chr(92),'/')
  elif k=='testStart':tests[e['test']['id']]=e['test']
  elif k=='testDone' and not e.get('hidden'):
   t=tests[e['testID']];p=suites[t['suiteID']];result='skipped' if e.get('skipped') else e['result']
   counts.setdefault(p,collections.Counter())[result]+=1
  elif k=='error':errors.append(e)
  elif k=='done':done=e
 assert done and counts,name
 return counts,errors,done

def summary(counts):
 total=collections.Counter()
 for row in counts.values():
  assert not(row.get('failure') or row.get('error')),row
  total.update(row)
 return {'files':len(counts),**dict(total),'complete':True}

beta,initialErrors,initialDone=parse('beta-complete.jsonl')
rechecks,reErrors,reDone=parse('final-regressions.jsonl');assert reDone['success'] and not reErrors
for file,counts in rechecks.items():assert file in beta;beta[file]=counts
stable,se,sd=parse('stable-complete.jsonl');nav,ne,nd=parse('search-back-player.jsonl')
actual,ae,ad=parse('actual-prefixes.jsonl');ui,ue,ud=parse('ui-final.jsonl')
assert all(x['success'] for x in [sd,nd,ad,ud]) and not (se or ne or ae or ue)
assert 'No issues found!' in (out/'analyze-final-delivery.log').read_text('utf-8-sig')
b,st,n=map(summary,[beta,stable,nav]);assert b['files']==203 and b['success']==2331 and b['skipped']==2,b
assert st['success']==63 and n['success']==55
before=json.loads((out/'state-before.json').read_text('utf-8'))
protected=[r for r in before['files'] if r['path'].startswith(('android/','third_party/'))]
for r in protected:assert hashlib.sha256((root/r['path']).read_bytes()).hexdigest()==r['sha256'],r['path']
assert hashlib.sha256((root/'pubspec.lock').read_bytes()).hexdigest()==before['lockSha256']
result={'version':'1.0.61','androidVersionCode':82,'recordedAtUtc':datetime.now(timezone.utc).isoformat(),
 'beta':{**b,'firstRunSuccessful':initialDone['success'],'initialFailureEvents':len(initialErrors),
  'initialRawLog':'beta-complete.jsonl','mergedFromCompleteFiles':True,'recheckedCompleteFiles':list(rechecks)},
 'stable':st,'navigation':n,'analysisPassed':True,'analysisIssues':0,
 'betaPerFile':{p:dict(c) for p,c in beta.items()},
 'new161Cases':{p:dict(c) for p,c in beta.items() if '/release_161_' in p},
 'finalRecheckedFiles':summary(rechecks),'nativeAndExistingThirdPartySourceFilesUnchanged':len(protected),
 'browserProtocol':json.loads((out/'browser-protocol-verification.json').read_text('utf-8')),
 'anonymousLiveProbe':json.loads((out/'anonymous-live-probe.json').read_text('utf-8')),
 'actualMediaPrefixValidation':json.loads((out/'live-prefix-validation.json').read_text('utf-8')),
 'uiScreenshots':sorted(p.name for p in (out/'ui-final').glob('*.png')),
 'uiFinalTests':summary(ui),'physicalDeviceAcceptance':False,'deviceAccess':False,'realAccountAccess':False,
 'backendAccess':False,'gitCommitted':False,'gitPushed':False,'published':False,
 'inheritedOnly':{'secureStorageNativeFrom56':164,'networkMediaJvmFrom54':35,
  'rustFrom54':{'passed':136,'externalIgnored':6},'ringSdkHistorical':563},
 'oldPlaybackLogsReplayed':False,'rewardClaimsRetested':False}
(out/'host-check-summary.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n','utf-8')
print(json.dumps({k:result[k] for k in ['beta','stable','navigation','analysisIssues','new161Cases','finalRecheckedFiles']},ensure_ascii=False,indent=2))
