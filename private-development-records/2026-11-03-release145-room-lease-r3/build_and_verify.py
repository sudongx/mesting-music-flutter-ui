"""Build and verify an isolated R3 native room-lease experiment.

It never installs an APK, touches an account, or overwrites frozen candidates.
Dart/UI source is unchanged from R2; re-run native checks for the changed path.
"""
from pathlib import Path
import datetime as dt
import json
import os
import subprocess
import time
import traceback

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
PW = 'C:/Users/zyt/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/powershell/pwsh.exe'
state = {'pid': os.getpid(), 'stages': {}, 'deviceAccess': False}


def save(stage, status):
    state.update(stage=stage, status=status, updatedUtc=dt.datetime.now(dt.timezone.utc).isoformat())
    (OUT / 'worker-state.json').write_text(json.dumps(state, indent=2), encoding='utf-8')


def run(stage, arguments):
    save(stage, 'running')
    started = time.monotonic()
    with (OUT / (stage + '.log')).open('wb') as stream:
        result = subprocess.run(arguments, cwd=ROOT, stdout=stream, stderr=subprocess.STDOUT,
                                stdin=subprocess.DEVNULL, timeout=3600,
                                creationflags=subprocess.CREATE_NO_WINDOW)
    state['stages'][stage] = {'exitCode': result.returncode,
                              'elapsedSeconds': round(time.monotonic() - started, 2)}
    save(stage, 'passed' if result.returncode == 0 else 'needs_review')
    assert result.returncode == 0, stage


try:
    run('native', [os.sys.executable, '-X', 'utf8', str(OUT / 'verify_native_background.py')])
    run('build', [PW, '-NoProfile', '-File', str(OUT / 'build_diagnostic.ps1')])
    run('verify', [os.sys.executable, '-X', 'utf8', str(OUT / 'sign_candidate.py')])
    save('candidate', 'ready_for_authorized_device_test')
except BaseException:
    (OUT / 'exception.log').write_text(traceback.format_exc(), encoding='utf-8')
    save(state.get('stage', 'startup'), 'needs_review')
    raise
