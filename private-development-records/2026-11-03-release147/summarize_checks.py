from collections import Counter, defaultdict
from pathlib import Path
import hashlib, json
root=Path('D:/AnLi'); out=root/'.codex-artifacts/2026-11-03-release147'
def read(name):
    path=out/name; tests={}; suites={}; counts=defaultdict(Counter); done=None; failures=[]
    for line in path.read_text('utf-8-sig',errors='replace').splitlines():
        try: e=json.loads(line)
        except ValueError: continue
        if not isinstance(e,dict): continue
        kind=e.get('type')
        if kind=='suite': suites[e['suite']['id']]=e['suite']['path'].replace('\\','/')
        elif kind=='testStart': tests[e['test']['id']]=e['test']
        elif kind=='testDone' and not e.get('hidden'):
            t=tests[e['testID']]; file=suites[t['suiteID']]
            status='skipped' if e.get('skipped') else e['result']; counts[file][status]+=1
            if status not in ('success','skipped'): failures.append({'file':file,'name':t['name'],'result':status})
        elif kind=='done': done=e['success']
    return {'completeAndSuccessful':done is True,'files':len(counts),'counts':dict(sum(counts.values(),Counter())),
        'perFile':dict(counts),'failures':failures,'log':name,'logSha256':hashlib.sha256(path.read_bytes()).hexdigest()}
selected={str(root/p).replace('\\','/') for p in json.loads((out/'beta-files.json').read_text('utf-8-sig'))}
initial=read('beta-complete.jsonl')
per_file={p:c for p,c in initial['perFile'].items() if p in selected}
provenance={p:'beta-complete.jsonl' for p in per_file}
reruns=['beta-final-changed-complete.jsonl','download-final-complete.jsonl','visual-round2.jsonl','post-notes-verified.jsonl','formal-regression.jsonl','account-cache-verified.jsonl']
for log in reruns:
    report=read(log); assert report['completeAndSuccessful'],(log,report['failures'])
    for p,c in report['perFile'].items():
        if p in selected: per_file[p]=c; provenance[p]=log
assert set(per_file)==selected,(selected-set(per_file),set(per_file)-selected)
assert all(set(c)<= {'success','skipped'} for c in per_file.values()),per_file
merged={'completeAndSuccessful':True,'files':len(per_file),'counts':dict(sum(per_file.values(),Counter())),
    'perFile':per_file,'completeFileRerunProvenance':provenance,'singleCleanInvocation':False,
    'initialFailuresRetained':initial['failures'],'excludedStableOnlyChatSuite':'chat_page_test.dart rerun completely in Stable after replacing removed image fixtures',
    'rerunLogs':reruns}
summary={'beta-complete.jsonl':merged}
for log in ['stable-final-ready.jsonl','stable-legacy-playlist.jsonl','formal-regression.jsonl','visual-round1.jsonl','visual-round2.jsonl','post-notes-verified.jsonl']:
    summary[log]=read(log); assert summary[log]['completeAndSuccessful'],(log,summary[log]['failures'])
# This full suite is part of the current changed-file run; record it separately
# without pretending its cases are additional unique tests.
changed=read('beta-final-changed-complete.jsonl')
nav_path=str(root/'test/beta5_ui_test.dart').replace('\\','/')
summary['search-back-player.jsonl']={'completeAndSuccessful':True,'files':1,'counts':changed['perFile'][nav_path],
    'actualLog':'beta-final-changed-complete.jsonl','logSha256':changed['logSha256'],'includedInBetaTotal':nav_path in selected}
analysis=(out/'analyze-final.log').read_text('utf-8-sig',errors='replace')
assert 'No issues found!' in analysis,analysis
summary['stable-complete.jsonl']=summary['stable-final-ready.jsonl']
summary['analysisPassed']=True;summary['analysisIssues']=0;summary['deviceAccess']=False
summary['visualRounds']=2;summary['finalHostFrames']=26
summary['hostImagesAreNotPhoneGpuAcceptance']=True
(out/'host-check-summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n','utf-8')
print(json.dumps({k:{'files':v['files'],'counts':v['counts']} for k,v in summary.items() if isinstance(v,dict) and 'counts' in v},indent=2))
