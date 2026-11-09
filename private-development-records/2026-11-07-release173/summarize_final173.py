from pathlib import Path
from collections import Counter
import json, hashlib
from summarize_tests import read_run
root=Path('D:/AnLi');out=Path(__file__).resolve().parent
runs={s:read_run(out/f'{s}-complete-r2.jsonl') for s in ['beta','stable','navigation']}
for name,r in runs.items():assert r['completeSuccess'] and not r['errors'],name
final=read_run(out/'final-changed-files.jsonl');capture=read_run(out/'ui-capture-accepted.jsonl')
assert final['completeSuccess'] and not final['errors']
assert capture['completeSuccess'] and not capture['errors']
runs['beta']['files'].update(final['files']);runs['beta']['files'].update(capture['files'])
c=Counter()
for row in runs['beta']['files'].values():c.update(row)
runs['beta']['counts']=dict(c)
assert 'No issues found!' in (out/'analyze-accepted-final.log').read_text('utf-8-sig')
review=json.loads((out/'ui-review.json').read_text('utf-8'));assert review['allImagesViewed'] and len(review['images'])==12
sha=lambda p: hashlib.sha256(p.read_bytes()).hexdigest()
for row in review['images']:assert sha(out/'ui'/row['path'])==row['sha256']
prior=json.loads((root/'docs/validation-2026-11-07-v1.0.72.json').read_text('utf-8'))['hostChecks']
media3=prior['nativeAudio'];native=prior['officialNativePreparationAndCenc']
for group in [media3,native]:
 for row in group['inputs']:assert sha(root/row['path'])==row['sha256'],row['path']
summary={'version':'1.0.73','androidVersionCode':94,'passed':True,'analysisIssues':0,'analysisLog':'analyze-accepted-final.log',
 **{s:{'files':len(r['files']),'passed':r['counts'].get('success',0),'skipped':r['counts'].get('skipped',0),'complete':True} for s,r in runs.items()},
 'betaPerFile':runs['beta']['files'],'ui':review,'nativeAudio':media3,'officialNativePreparationAndCenc':native,
 'counting':'Full Beta run; final complete changed-file and capture results replace the same file. No repeated or historical cases added.',
 'initialFailuresRetained':['Initial compile/lint errors and fake player/preferences fixtures corrected; r1/r2/r4/r5 and debug logs retained.',
 'Production route test reproduced missing Android Back publication after inline history installation/removal; fixed with outer shell history and active-stack refresh.',
 'History integration fixture used fakeAsync filesystem and lacked native playback-event publication; corrected to real async deterministic decoder boundary.',
 'First screenshot fixtures lacked retained-shell background/CJK styles/image-decoding clock and consistent dark background preferences; corrected before final review.'],
 'physicalDeviceAccess':False,'realAccountAccess':False,'nasOrSignerRequestsThisRelease':False,'helperDeploymentModified':False,
 'actual301RootCauseConfirmed':False,'actualVipFullPlaybackUnder29DaysConfirmed':False,'cloudHistoryWriteAndCoverAcceptedByServer':False}
(out/'host-check-summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n','utf-8')
print(json.dumps({s:summary[s] for s in ['beta','stable','navigation']},ensure_ascii=False))
