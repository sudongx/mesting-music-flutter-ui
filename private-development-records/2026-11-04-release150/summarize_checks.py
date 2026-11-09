from pathlib import Path
from collections import Counter,defaultdict
import hashlib,json
ROOT=Path('D:/AnLi')
OUT=ROOT/'.codex-artifacts/2026-11-04-release150'

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
    reports = {name:read(name) for name in ['final-beta-complete.jsonl','final-stable-complete.jsonl','final-navigation-fixed.jsonl','final-footprint.jsonl','visual-round2.jsonl']}
    assert all(r['completeAndSuccessful'] for r in reports.values()), reports
    beta=reports['final-beta-complete.jsonl']
    provenance={file:'final-beta-complete.jsonl' for file in beta['perFile']}
    for name in ['final-footprint.jsonl','visual-round2.jsonl']:
        for file,counts in reports[name]['perFile'].items():
            assert file in beta['perFile']
            beta['perFile'][file]=counts
            provenance[file]=name
    beta['counts']=dict(sum((Counter(c) for c in beta['perFile'].values()),Counter()))
    assert not beta['counts'].get('error',0)
    beta['completeFileRerunProvenance']=provenance
    beta['singleCleanInvocation']=False
    beta['finalFullInvocationSucceeded']=True
    analysis=(OUT/'analyze-final.log').read_text('utf-8-sig')
    assert 'No issues found!' in analysis
    summary={'beta-complete.jsonl':beta,'stable-complete.jsonl':reports['final-stable-complete.jsonl'],
      'search-back-player.jsonl':reports['final-navigation-fixed.jsonl'],
      'supplementalFinalFootprint':reports['final-footprint.jsonl'],
      'visual-round2.jsonl':reports['visual-round2.jsonl'],
      'analysisPassed':True,'analysisIssues':0,'finalHostFrames':len(list((OUT/'ui-round2').glob('*.png'))),
      'visualRounds':2,'deviceAccess':False,'hostImagesAreNotPhoneGpuAcceptance':True,
      'initialFailedAndIntermediateLogsRetained':True,
      'countingRule':'Complete files only, each selected file counted once; no sum across versions or independent navigation checks'}
    (OUT/'host-check-summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n','utf-8')
    print(json.dumps({k:{kk:vv for kk,vv in v.items() if kk in ['files','counts','completeAndSuccessful']} if isinstance(v,dict) else v for k,v in summary.items()},ensure_ascii=False,indent=2))
