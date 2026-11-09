"""Merge complete-file rechecks; never add repeated case counts."""
from pathlib import Path
from datetime import datetime,timezone
import json,hashlib,collections
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
  assert not (row.get('error') or row.get('failure')),row
  total.update(row)
 return {'files':len(counts),**dict(total),'complete':True}

exits=json.loads((OUT/'check-exits.json').read_text('utf-8-sig'))
assert exits['stable']==0
recheck_exits=json.loads((OUT/'delivery-check-exits.json').read_text('utf-8-sig'));assert not any(recheck_exits.values())
assert 'No issues found!' in (OUT/'analyze-midnight.log').read_text('utf-8-sig')
assert not any(json.loads((OUT/'midnight-check-exits.json').read_text('utf-8-sig')).values())
beta,earlier,first_done=parse('beta-complete.jsonl');rerun,err,done=parse('final-regressions.jsonl');assert done['success'] and not err
for p,row in rerun.items():
 assert p in beta,p
 beta[p]=row
assert {e['file'] for e in earlier}.issubset(rerun)
render,re,rd=parse('reward-render-final.jsonl');assert rd['success'] and not re
for p,row in render.items():
 assert p in beta,p
 beta[p]=row
midnight,me,md=parse('post-midnight-regressions.jsonl');assert md['success'] and not me
for p,row in midnight.items():
 assert p in beta,p
 beta[p]=row
stable,se,sd=parse('stable-complete.jsonl');nav,ne,nd=parse('search-back-player-final.jsonl');assert sd['success'] and nd['success'] and not se and not ne
b,st,n=map(summary,[beta,stable,nav]);assert b['files']==len(json.loads((OUT/'beta-files.json').read_text('utf-8-sig')))==195
assert st['success']==63 and n['success']==55
before=json.loads((OUT/'state-before.json').read_text('utf-8'))
unchanged=[e for e in before['source'] if e['path'].startswith(('android/','third_party/'))]
for e in unchanged:assert hashlib.sha256((ROOT/e['path']).read_bytes()).hexdigest()==e['sha256'],e['path']
assert hashlib.sha256((ROOT/'pubspec.lock').read_bytes()).hexdigest()==before['lockSha256']
play=json.loads((OUT/'play-verification.json').read_text('utf-8'));assert play['all40HostImagesInspected']
reward=json.loads((OUT/'reward-images-inspected.json').read_text('utf-8'));assert reward['allInspected']
images=sorted((OUT/'ui-play-controls').glob('*.png'))+sorted((OUT/'ui-reward-delivery').glob('*.png'));assert len(images)==48
result={'version':'1.0.59','recordedAtUtc':datetime.now(timezone.utc).isoformat(),
 'beta':{**b,'mergedFromCompleteFiles':True,'firstRunSuccessful':first_done['success'],'earlierFailuresRetained':earlier,'recheckedFiles':list(rerun),'finalDateBoundaryRechecks':list(midnight)},
 'stable':st,'navigation':{**n,'earlierFailuresRetained':parse('search-back-player.jsonl')[1],'log':'search-back-player-final.jsonl'},'betaPerFile':{p:dict(c) for p,c in beta.items()},
 'analysisPassed':True,'analysisIssues':0,'allFinalHostImagesInspected':True,
 'finalHostImages':[{'file':str(p.relative_to(OUT)).replace('\\','/'),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()} for p in images],
 'new159Cases':{p:dict(c) for p,c in beta.items() if '/release_159_' in p},
 'unchangedNativeAndThirdPartySourceFilesVerified':len(unchanged),
 'inheritedOnly':{'secureStorageNativeFrom56':{'passed':164,'rerunFor159':False},'networkAndMediaJvmFrom54':{'passed':35,'rerunFor159':False},'rustFrom54':{'passed':136,'ignoredExternalNetwork':6,'rerunFor159':False},'ringSdkHistorical':{'passed':563,'verifiedSourceFiles':242,'rerunFor159':False}},
 'physicalDeviceAcceptance':False,'deviceAccess':False,'realAccountAccess':False,'backendAccess':False,'gitCommitted':False,'gitPushed':False,'published':False,
 'neteaseRealSignInAccepted':False,'neteaseDirectAdClaimAccepted':False,'neteaseFreeListenCredited':False}
(OUT/'host-check-summary.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n','utf-8')
print(json.dumps({k:result[k] for k in ['beta','stable','navigation','analysisIssues']},ensure_ascii=True,indent=2))
