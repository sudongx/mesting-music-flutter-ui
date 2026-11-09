"""Resume only after the preceding complete checks stop for review.

The first complete run found the generic Riverpod retry timer on failed My
statistics reads. Its raw evidence remains intact. This helper reruns complete
affected files after the scoped fix and requires the final merged manifest,
stable/navigation runs and analysis to pass before building a private APK.
"""
import datetime
import json
import os
from pathlib import Path
import subprocess
import time
import traceback

ROOT=Path('D:/AnLi'); OUT=Path(__file__).resolve().parent
STATE=OUT/'candidate-worker-state.json'; RESUME=OUT/'candidate-resume-state.json'
FLUTTER='D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
DART='D:/CodexCache/flutter-3.41.9/bin/dart.bat'
POWERSHELL='C:/Users/zyt/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/powershell/pwsh.exe'
record={'pid':os.getpid(),'deviceAccess':False,'published':False,'stages':{}}
def save(stage,status):
    record.update(stage=stage,status=status,updatedUtc=datetime.datetime.now(datetime.timezone.utc).isoformat())
    RESUME.write_text(json.dumps(record,indent=2),encoding='utf-8')
def run(stage,args,name):
    save(stage,'running'); start=time.monotonic()
    with (OUT/name).open('wb') as log:
        result=subprocess.run(args,cwd=ROOT,stdin=subprocess.DEVNULL,stdout=log,
            stderr=subprocess.STDOUT,creationflags=subprocess.CREATE_NO_WINDOW,timeout=3600)
    record['stages'][stage]={'exitCode':result.returncode,'log':name,'elapsedSeconds':round(time.monotonic()-start,2)}
    save(stage,'passed' if result.returncode==0 else 'needs_review')
    if result.returncode: raise RuntimeError('Stage requires review: '+stage)
try:
    save('prior_checks','waiting')
    for _ in range(1200):
        before=json.loads(STATE.read_text(encoding='utf-8'))
        if before['status']=='needs_review' and before['stage']=='checks':break
        if before['status'] in ('exception','ready_for_review_no_device_permission_yet'):
            raise RuntimeError('Unexpected first worker state: '+before['status'])
        time.sleep(3)
    else: raise TimeoutError('Initial complete checks did not finish')
    run('format',[DART,'format','lib/features/music_platform/netease/netease_user_providers.dart',
        'lib/shared/widgets/artwork_reveal_boundary.dart',
        'test/release_145_connections_ui_test.dart'],'final-format.log')
    affected=[
        'test/release_145_connections_ui_test.dart',
        'test/release_130_artwork_reveal_test.dart','test/release_131_refresh_test.dart',
        'test/release_135_scroll_frontier_test.dart','test/release_145_loading_geometry_test.dart',
        'test/release_144_discovery_refresh_test.dart',
    ]
    run('affected_files',[FLUTTER,'test','--no-pub','--flavor','beta',
        '--dart-define=CAPTURE_145=true','--dart-define=CAPTURE_145_CONNECTIONS=true',
        *affected,'--concurrency=1','--machine'],'beta-affected-final.jsonl')
    run('analysis',[FLUTTER,'analyze','--no-pub'],'analyze-complete.log')
    run('summarize',[os.sys.executable,'-X','utf8',str(OUT/'summarize_checks.py')],'host-check-summary.log')
    summary=json.loads((OUT/'host-check-summary.json').read_text(encoding='utf-8'))
    assert summary['analysisPassed'] and all(summary[n]['completeAndSuccessful'] for n in
        ['beta-complete.jsonl','stable-complete.jsonl','search-back-player.jsonl'])
    run('build',[POWERSHELL,'-NoProfile','-File',str(OUT/'build_diagnostic.ps1')],'build-driver.log')
    run('verify_candidate',[os.sys.executable,'-X','utf8',str(OUT/'sign_diagnostic_candidate.py')],'candidate-verification.log')
    run('actual_apk_notes',[FLUTTER,'test','--no-pub','--flavor','beta',
        str(OUT/'verify_local_notes.dart'),'--machine'],'local-apk-notes-test.jsonl')
    save('candidate','ready_for_review_no_device_permission_yet')
except BaseException:
    (OUT/'candidate-resume-exception.log').write_text(traceback.format_exc(),encoding='utf-8')
    save(record.get('stage','startup'),'needs_review')
    raise
