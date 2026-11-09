
from pathlib import Path
import json,collections,hashlib
ROOT=Path('D:/AnLi');OUT=ROOT/'.codex-artifacts/2026-11-04-release153'
def parse(name):
    suites={};tests={};counts={};complete=False
    for line in (OUT/name).read_text('utf-8-sig',errors='replace').splitlines():
        try:x=json.loads(line)
        except ValueError:continue
        if not isinstance(x,dict):continue
        kind=x.get('type')
        if kind=='suite':suites[x['suite']['id']]=x['suite']['path'].replace('\\','/')
        if kind=='testStart':tests[x['test']['id']]=x['test']
        if kind=='testDone' and not x.get('hidden'):
            test=tests[x['testID']];path=suites[test['suiteID']]
            counter=counts.setdefault(path,collections.Counter())
            counter['skipped' if x.get('skipped') else x['result']]+=1
        if kind=='done':complete=x.get('success',False)
    return {'completeAndSuccessful':complete,'perFile':{p:dict(c) for p,c in counts.items()}}
def successful(record):
    return record['completeAndSuccessful'] and all(not (c.get('failure') or c.get('error')) for c in record['perFile'].values())
def merged_counts(perfile):
    total=collections.Counter()
    for c in perfile.values():total.update(c)
    return dict(total)
beta=parse('beta-complete.jsonl');provenance={}
for name in ['final-regressions-fixed.jsonl','last-network-navigation.jsonl','cold-start-final.jsonl']:
    record=parse(name);assert successful(record),name
    for path,c in record['perFile'].items():
        if path.endswith('/beta5_ui_test.dart') or '/.codex-artifacts/' in path:continue
        beta['perFile'][path]=c;provenance[path]=name
selected=json.loads((OUT/'beta-files.json').read_text('utf-8'))
assert len(beta['perFile'])==len(selected)==177
assert all(not (c.get('error') or c.get('failure')) for c in beta['perFile'].values())
beta['completeAndSuccessful']=True;beta['counts']=merged_counts(beta['perFile']);beta['files']=len(selected)
beta['completeFileRerunProvenance']=provenance
stable=parse('stable-final.jsonl');assert successful(stable);stable['counts']=merged_counts(stable['perFile']);stable['files']=len(stable['perFile'])
nav=parse('last-network-navigation.jsonl');nav['perFile']={p:c for p,c in nav['perFile'].items() if p.endswith('/beta5_ui_test.dart')};assert successful(nav);nav['counts']=merged_counts(nav['perFile']);nav['files']=1
analysis=(OUT/'analyze-build-final.log').read_text('utf-8-sig');assert 'No issues found!' in analysis
before=json.loads((OUT/'state-before.json').read_text('utf-8'))
def sha(p):
    with p.open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()
sdk=[f for f in before['source'] if f['path'].startswith('third_party/ring_download_sdk/')]
assert len(sdk)==242 and all(sha(ROOT/f['path'])==f['sha256'] for f in sdk)
prior_sdk=json.loads((ROOT/'.codex-artifacts/2026-11-04-release152/sdk-host-summary.json').read_text('utf-8'))
sdk_record={**prior_sdk,'inheritedFromVersion':'1.0.52','rerunForVersion153':False,
 'sameSdkSourceFilesVerified':len(sdk),'allRecordedThirdPartyInputsUnchanged':False,
 'inheritanceReason':'242 Ring SDK sources and app lock unchanged; just_audio fork changed and is tested separately. No claim that all 613 third-party inputs match.'}
(OUT/'sdk-host-summary.json').write_text(json.dumps(sdk_record,ensure_ascii=False,indent=2),'utf-8')
result={'beta-complete.jsonl':beta,'stable-complete.jsonl':stable,'search-back-player.jsonl':nav,
 'analysisPassed':True,'analysisIssues':0,'nativeFresh':json.loads((OUT/'native-background-verification.json').read_text()),
 'sdkHistoricalOnly':{'counts':sdk_record['counts'],'files':29,'sameSdkSourceFilesVerified':242},
 'finalHostImages':len(list((OUT/'ui-final').glob('*.png'))),
 'welcomeFrameScheduling':json.loads((OUT/'welcome-frame-scheduling.json').read_text())}
(OUT/'host-check-summary.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n','utf-8')
print(json.dumps({'beta':beta['counts'],'files':177,'stable':stable['counts'],'navigation':nav['counts'],
 'analysis':0,'native':result['nativeFresh']['scenariosPassed'],'images':result['finalHostImages']},indent=2))
