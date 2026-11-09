"""Host regression of the device-evidenced snapshot fix, then a new candidate.

The original signed candidate and source are immutable. Device installation
and a new capture remain outside this helper and require user authorization.
"""
import collections
import datetime
import json
import os
from pathlib import Path
import subprocess
import time
import traceback

ROOT=Path('D:/AnLi'); OUT=Path(__file__).resolve().parent
PREVIOUS=ROOT/'.codex-artifacts/2026-11-03-release145'
STATE=OUT/'worker-state.json'
FLUTTER='D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
POWERSHELL='C:/Users/zyt/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/powershell/pwsh.exe'
record={'pid':os.getpid(),'deviceAccess':False,'stages':{}}
def save(stage,status):
    record.update(stage=stage,status=status,updatedUtc=datetime.datetime.now(datetime.timezone.utc).isoformat())
    STATE.write_text(json.dumps(record,indent=2),encoding='utf-8')
def run(stage,args,log):
    save(stage,'running');start=time.monotonic()
    with (OUT/log).open('wb') as f:
        p=subprocess.run(args,cwd=ROOT,stdin=subprocess.DEVNULL,stdout=f,stderr=subprocess.STDOUT,
            timeout=3600,creationflags=subprocess.CREATE_NO_WINDOW)
    record['stages'][stage]={'exitCode':p.returncode,'log':log,'elapsedSeconds':round(time.monotonic()-start,2)}
    save(stage,'passed' if p.returncode==0 else 'needs_review')
    if p.returncode:raise RuntimeError(stage+' failed')
def read_run(path):
    suites={};tests={};rows={};errors=[];done=False;success=False
    for line in path.read_text(encoding='utf-8-sig',errors='replace').splitlines():
        try:e=json.loads(line)
        except ValueError:continue
        if not isinstance(e,dict):continue
        k=e.get('type')
        if k=='suite':
            s=e['suite'];suites[s['id']]=s['path'];rows.setdefault(s['path'],collections.Counter())
        elif k=='testStart':tests[e['test']['id']]=e['test']
        elif k=='testDone' and not e.get('hidden'):
            p=suites.get(tests.get(e.get('testID'),{}).get('suiteID'),'unattributed')
            rows.setdefault(p,collections.Counter())['skipped' if e.get('skipped') else e['result']]+=1
        elif k=='error':errors.append(e.get('error',''))
        elif k=='done':done=True;success=e.get('success') is True
    assert done and success and not errors,errors
    return rows
try:
    files=json.loads((OUT/'affected-files.json').read_text(encoding='utf-8'))
    if '--after-tests' not in os.sys.argv:
      run('together_regression',[FLUTTER,'test','--no-pub','--flavor','beta',*files,
          '--concurrency=1','--machine'],'together-regression.jsonl')
      run('navigation',[FLUTTER,'test','--no-pub','--flavor','beta','test/beta5_ui_test.dart',
          '--concurrency=1','--machine'],'search-back-player.jsonl')
    else:
      # The only changes since these complete passed runs remove one unused
      # test import and add required braces. Product source is unchanged.
      read_run(OUT/'together-regression.jsonl')
      read_run(OUT/'search-back-player.jsonl')
    run('analysis',[FLUTTER,'analyze','--no-pub'],'analyze-complete.log')
    prior=json.loads((PREVIOUS/'host-check-summary.json').read_text(encoding='utf-8'))
    rows={**prior['beta-complete.jsonl']['perFile'],**read_run(OUT/'together-regression.jsonl')}
    totals=collections.Counter()
    for row in rows.values():totals.update(row)
    expected={str((ROOT/p).resolve()).replace('\\','/').lower()
        for p in json.loads((OUT/'beta-files.json').read_text(encoding='utf-8'))}
    assert expected=={p.replace('\\','/').lower() for p in rows}
    assert not any(totals.get(k,0) for k in ['error','failure','unknown'])
    nav=read_run(OUT/'search-back-player.jsonl');nav_counts=collections.Counter()
    for row in nav.values():nav_counts.update(row)
    summary={
      'beta-complete.jsonl':{'completeAndSuccessful':True,'counts':dict(totals),
        'files':len(rows),'perFile':rows,'selectedFileManifestMatches':True,'errors':[],
        'baseline':str(PREVIOUS/'host-check-summary.json'),
        'completeFileRetriesApplied':['together-regression.jsonl']},
      'stable-complete.jsonl':prior['stable-complete.jsonl'],
      'search-back-player.jsonl':{'completeAndSuccessful':True,'counts':dict(nav_counts),'files':len(nav),'errors':[]},
      'analysisPassed':'No issues found!' in (OUT/'analyze-complete.log').read_text(encoding='utf-8'),
    }
    assert summary['analysisPassed']
    (OUT/'host-check-summary.json').write_text(json.dumps(summary,indent=2),encoding='utf-8')
    run('build',[POWERSHELL,'-NoProfile','-File',str(OUT/'build_diagnostic.ps1')],'build-driver.log')
    run('verify',[os.sys.executable,'-X','utf8',str(OUT/'sign_candidate.py')],'candidate-verification.log')
    run('actual_apk_notes',[FLUTTER,'test','--no-pub','--flavor','beta',str(OUT/'verify_local_notes.dart'),
        '--machine'],'local-apk-notes-test.jsonl')
    save('candidate','ready_no_device_permission_yet')
except BaseException:
    (OUT/'worker-exception.log').write_text(traceback.format_exc(),encoding='utf-8')
    save(record.get('stage','startup'),'needs_review')
    raise
