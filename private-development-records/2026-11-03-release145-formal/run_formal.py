"""Run the authorized local formal build without installing or publishing.

Stages and their complete logs remain independent, so interrupted work can be
identified by the actual worker process rather than an obsolete status file.
No signing secrets are placed in command text or printed by this driver.
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
state = {'pid': os.getpid(), 'stages': {}, 'deviceAccess': False,
         'version': '1.0.45', 'code': 66, 'togetherSyncDiagnosticLogging': False}


def save(stage, status):
    state.update(stage=stage, status=status, updatedUtc=dt.datetime.now(dt.timezone.utc).isoformat())
    (OUT / 'worker-state.json').write_text(json.dumps(state, indent=2) + '\n', encoding='utf-8')


def run(stage, arguments):
    save(stage, 'running')
    started = time.monotonic()
    with (OUT / (stage + '-driver.log')).open('xb') as stream:
        result = subprocess.run(arguments, cwd=ROOT, stdout=stream, stderr=subprocess.STDOUT,
                                stdin=subprocess.DEVNULL, timeout=3600,
                                creationflags=subprocess.CREATE_NO_WINDOW)
    state['stages'][stage] = {'exitCode': result.returncode,
                              'elapsedSeconds': round(time.monotonic() - started, 2)}
    save(stage, 'passed' if result.returncode == 0 else 'needs_review')
    assert result.returncode == 0, stage


try:
    run('checks-and-build', [PW, '-NoProfile', '-File', str(OUT / 'build_formal.ps1')])
    run('sign-and-verify', [os.sys.executable, '-X', 'utf8', str(OUT / 'sign_and_verify.py')])
    # This test exercises the real production ZIP Range reader against only the
    # newly signed local APK. The HTTP client is replaced with local file reads.
    run('actual-apk-notes', [PW, '-NoProfile', '-Command',
        "& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta "
        "'.codex-artifacts/2026-11-03-release145-formal/verify_local_notes.dart' --machine "
        "> '.codex-artifacts/2026-11-03-release145-formal/local-apk-notes-test.jsonl'; exit $LASTEXITCODE"])
    save('formal-apk', 'verified_ready_for_source_and_delivery')
except BaseException:
    (OUT / 'exception.log').write_text(traceback.format_exc(), encoding='utf-8')
    save(state.get('stage', 'startup'), 'needs_review')
    raise
