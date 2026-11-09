from pathlib import Path
from collections import Counter,defaultdict
import hashlib,json
ROOT=Path('D:/AnLi')
OUT=ROOT/'.codex-artifacts/2026-11-04-release149'

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

if __name__=='__main__':
    summary={'beta-complete.jsonl':read('beta-complete.jsonl'),
        'stable-complete.jsonl':read('stable-complete.jsonl')}
    summary['search-back-player.jsonl']=read('search-back-player.jsonl')
    assert summary['stable-complete.jsonl']['completeAndSuccessful']
    assert summary['search-back-player.jsonl']['completeAndSuccessful']
    selected={str(ROOT/path).replace('\\','/') for path in json.loads((OUT/'beta-files.json').read_text('utf-8'))}
    initial=summary['beta-complete.jsonl']
    original_success=initial['completeAndSuccessful']
    provenance={file:'beta-complete.jsonl' for file in initial['perFile']}
    for name in ['final-related.jsonl','visual-round1.jsonl','visual-round2.jsonl','verified-source-final.jsonl','final-list-guard.jsonl','ui-geometry-final.jsonl','artwork-empty-final.jsonl']:
        if not (OUT/name).exists():continue
        report=read(name);assert report['completeAndSuccessful'],report
        for file,counts in report['perFile'].items():
            if file in selected:
                initial['perFile'][file]=counts
                provenance[file]=name
    initial['counts']=dict(sum((Counter(counts) for counts in initial['perFile'].values()),Counter()))
    initial['files']=len(initial['perFile'])
    assert set(initial['perFile'])==selected
    initial['failures']=[failure for failure in initial['failures'] if provenance[failure['file']]=='beta-complete.jsonl']
    assert not initial['failures'] and not initial['counts'].get('error',0),initial
    initial['completeAndSuccessful']=True
    initial['singleCleanInvocation']=False
    initial['initialFullInvocationSucceeded']=original_success
    initial['completeFileRerunProvenance']=provenance
    analysis=(OUT/'analyze-final.log').read_text('utf-8-sig')
    assert 'No issues found!' in analysis,analysis
    summary.update(analysisPassed=True,analysisIssues=0,deviceAccess=False,
        singleCleanBetaInvocation=False,hostImagesAreNotPhoneGpuAcceptance=True)
    for name in ['visual-round1.jsonl','visual-round2.jsonl','verified-source-final.jsonl','final-list-guard.jsonl','ui-geometry-final.jsonl','final-related.jsonl','artwork-empty-final.jsonl','local-apk-notes.jsonl']:
        if (OUT/name).exists():
            value=read(name);assert value['completeAndSuccessful'],value
            summary[name]=value
    frames=list((OUT/'ui-round2' if (OUT/'ui-round2').exists() else OUT/'ui-round1').glob('*.png'))
    summary['finalHostFrames']=len(frames)
    summary['visualRounds']=2 if (OUT/'ui-round2').exists() else (1 if frames else 0)
    (OUT/'host-check-summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n','utf-8')
    print(json.dumps({name:{k:v for k,v in value.items() if k in ['files','counts','completeAndSuccessful']}
        if isinstance(value,dict) else value for name,value in summary.items()},ensure_ascii=False,indent=2))
