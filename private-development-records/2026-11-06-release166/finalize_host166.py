"""Write this release's actual completed checks, without historical additions."""
import hashlib
import json
from collections import Counter
from pathlib import Path
from summarize_tests import read_run

OUT = Path(__file__).resolve().parent
ROOT = Path('D:/AnLi')
runs = {n:read_run(OUT/(n+'-complete-r1.jsonl')) for n in ('beta','stable','navigation')}
ui = {n:read_run(OUT/('ui-'+n+'-final.jsonl')) for n in ('qr','entry')}
final_targeted = read_run(OUT/'targeted-r3.jsonl')
assert all(v['completeSuccess'] is True and not v['errors'] for v in [*runs.values(),*ui.values(),final_targeted])
assert 'No issues found!' in (OUT/'analyze-final-r2.log').read_text('utf-8-sig')
# Replace complete affected files in the initial cohort. This adds only the
# genuinely new privacy case, never all cases from the repeated file runs.
beta_full_counts = dict(runs['beta']['counts'])
normalize = lambda p: p.replace('\\','/').lower()
base_files = {normalize(p):v for p,v in runs['beta']['files'].items()}
for path, counts in final_targeted['files'].items():
    assert normalize(path) in base_files, path
    base_files[normalize(path)] = counts
merged = Counter()
for counts in base_files.values():
    merged.update(counts)
runs['beta']['counts'] = merged
images = sorted((OUT/'ui').glob('*.png'))
assert len(images) == 8
native = json.loads((OUT/'native-audio-history-input-match.json').read_text('utf-8'))
assert all(hashlib.sha256((ROOT/r['path']).read_bytes()).hexdigest()==r['sha256'] for r in native)
summary = {
    'version':'1.0.66','androidVersionCode':87,'passed':True,'analysisIssues':0,
    'analysisLog':'analyze-final-r2.log',
    **{n:{'files':len(v['files']),'passed':v['counts'].get('success',0),
          'skipped':v['counts'].get('skipped',0),'complete':True} for n,v in runs.items()},
    'counting':'Real test cases only; setup/teardown excluded; targeted/capture reruns not added',
    'targeted':{'initialFailure':'one retired no-web-identity expectation',
                'secondFailure':'new scanner tap fixture lacked shared preferences',
                'finalAffectedUiFilePassed':True,'allCasesIncludedInFinalBetaCohort':True,
                'initialFullBeta':beta_full_counts,'wholeFileReplacements':len(final_targeted['files']),
                'finalPassed':final_targeted['counts'].get('success',0),'notAddedToBetaTotal':True},
    'nativeAudio':{'passed':14,'historicalOnly':True,'notRerunOrAddedThisRelease':True,
        'inheritedFrom':'1.0.64 Media3 regression; exact production/runner inputs rechecked',
        'nativeProductionAndRunnerSha256Match64':native},
    'ui':{'finalReviewedImages':8,'physicalDevice':False,'fixtureOnly':True,
          'captureCasesPassed':sum(v['counts'].get('success',0) for v in ui.values()),
          'images':[p.name for p in images],
          'largeTextBoundary':'320dp at 1.8x retains scrollable content; first viewport need not show all controls'},
    'phoneLoginRemoved':True,'smsInvestigationStoppedByUser':True,'sms2156Resolved':False,
    'realQrAccountAccepted':False,'oldLogsReplayed':False,'published':False,
    'deviceDiagnostics':{'independentAnonymousWebViewProbeCompleted':True,
        'diagnosticUninstalled':True,'noSmsOrAccountCredentialRead':True,
        'anonymousWaitStateIsNotAccountAcceptance':True},
}
(OUT/'host-check-summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n','utf-8')
print(json.dumps({n:summary[n] for n in ('beta','stable','navigation')},indent=2))
