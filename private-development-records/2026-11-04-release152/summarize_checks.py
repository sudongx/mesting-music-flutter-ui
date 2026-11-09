from pathlib import Path
from collections import Counter,defaultdict
import hashlib,json
ROOT=Path('D:/AnLi')
OUT=ROOT/'.codex-artifacts/2026-11-04-release152'

def read(name):
    path=OUT/name; suites={};tests={};counts=defaultdict(Counter);failures=[];done=None
    for line in path.read_text('utf-8-sig',errors='replace').splitlines():
        try:event=json.loads(line)
        except ValueError:continue
        if not isinstance(event,dict):continue
        kind=event.get('type')
        if kind=='suite':suites[event['suite']['id']]=event['suite']['path'].replace('\\','/')
        elif kind=='testStart':tests[event['test']['id']]=event['test']
        elif kind=='testDone' and not event.get('hidden'):
            test=tests[event['testID']];file=suites[test['suiteID']]
            status='skipped' if event.get('skipped') else event['result']
            counts[file][status]+=1
            if status not in ['success','skipped']:failures.append({'file':file,'name':test['name'],'status':status})
        elif kind=='done':done=event['success']
    return {'completeAndSuccessful':done is True,'files':len(counts),
        'counts':dict(sum(counts.values(),Counter())),'perFile':dict(counts),
        'failures':failures,'log':name,'logSha256':hashlib.sha256(path.read_bytes()).hexdigest()}


if __name__ == '__main__':
    beta=read('beta-complete.jsonl')
    rerun=read('final-beta-regressions.jsonl')
    profile=read('final-profile-regression.jsonl')
    assert profile['completeAndSuccessful'],profile
    for file,counts in profile['perFile'].items():
        rerun['perFile'][file]=counts
    assert all(set(c)<={'success','skipped'} for c in rerun['perFile'].values()),rerun
    rerun['completeAndSuccessful']=True
    provenance={file:'beta-complete.jsonl' for file in beta['perFile']}
    for file,counts in rerun['perFile'].items():
        assert file in beta['perFile'],file
        beta['perFile'][file]=counts;provenance[file]='final-profile-regression.jsonl' if file in profile['perFile'] else 'final-beta-regressions.jsonl'
    beta['counts']=dict(sum((Counter(c) for c in beta['perFile'].values()),Counter()))
    beta['initialFailuresRetained']=beta.pop('failures')
    assert set(beta['counts'])<={'success','skipped'},beta['counts']
    expected={str(ROOT/file).replace('\\','/') for file in json.loads((OUT/'beta-files.json').read_text('utf-8'))}
    assert set(beta['perFile'])==expected,(len(beta['perFile']),len(expected))
    beta.update(completeAndSuccessful=True,completeFileRerunProvenance=provenance,singleCleanInvocation=False,files=len(expected))
    stable=read('stable-complete.jsonl');navigation=read('search-back-player.jsonl')
    assert stable['completeAndSuccessful'] and navigation['completeAndSuccessful']
    analysis=(OUT/'analyze-final.log').read_text('utf-8-sig')
    assert 'No issues found!' in analysis,analysis
    frames=list((OUT/'ui-round2').glob('*.png'));assert len(frames)==56,len(frames)
    summary={'beta-complete.jsonl':beta,'stable-complete.jsonl':stable,'search-back-player.jsonl':navigation,
      'analysisPassed':True,'analysisIssues':0,'finalHostFrames':len(frames),'visualRounds':2,
      'visualEvidence':'Final 56 host frames inspected; capture-unit miss corrected through full-file regression, no third visual redesign pass.',
      'deviceAccess':False,'hostImagesAreNotPhoneGpuAcceptance':True,'initialFailedAndIntermediateLogsRetained':True,
      'countingRule':'Each selected complete file counted once, final whole-file reruns replace its earlier counts. Navigation and inherited SDK are separate.'}
    (OUT/'host-check-summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n','utf-8')
    print(json.dumps({k:{kk:vv for kk,vv in v.items() if kk in ['files','counts','completeAndSuccessful']} if isinstance(v,dict) else v for k,v in summary.items()},ensure_ascii=False,indent=2))
