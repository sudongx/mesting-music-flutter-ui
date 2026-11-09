"""Bounded staged host verification and local candidate preparation only.

Raw subprocess output is written as bytes, preserving Flutter machine JSON's
Chinese names independently of PowerShell's console encoding. No phone, ADB,
account, Git write, upload or publication operation exists in this helper.
"""
import datetime
import json
import os
from pathlib import Path
import subprocess
import traceback

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
FLUTTER = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
POWERSHELL = 'C:/Users/zyt/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/powershell/pwsh.exe'
STATE = OUT / 'candidate-worker-state.json'
record = {'pid': os.getpid(), 'deviceAccess': False, 'published': False, 'stages': {}}

def save(stage, status):
    record.update(stage=stage, status=status, updatedUtc=datetime.datetime.now(datetime.timezone.utc).isoformat())
    STATE.write_text(json.dumps(record, indent=2), encoding='utf-8')

def run(stage, args, name):
    save(stage, 'running')
    started = datetime.datetime.now(datetime.timezone.utc)
    with (OUT / name).open('wb') as output:
        result = subprocess.run(args, cwd=ROOT, stdin=subprocess.DEVNULL,
            stdout=output, stderr=subprocess.STDOUT,
            creationflags=subprocess.CREATE_NO_WINDOW, timeout=3600)
    record['stages'][stage] = {'exitCode': result.returncode, 'log': name,
        'elapsedSeconds': round((datetime.datetime.now(datetime.timezone.utc)-started).total_seconds(),2)}
    save(stage, 'passed' if result.returncode == 0 else 'failed')
    return result.returncode == 0

try:
    beta = json.loads((OUT/'beta-files.json').read_text(encoding='utf-8-sig'))
    stable = json.loads((ROOT/'.codex-artifacts/2026-11-02-v140-fixes/stable-files.json').read_text(encoding='utf-8-sig'))
    passed = []
    passed.append(run('beta', [FLUTTER, 'test', '--no-pub', '--flavor', 'beta',
        *beta, '--concurrency=1', '--machine'], 'beta-complete.jsonl'))
    passed.append(run('stable', [FLUTTER, 'test', '--no-pub', '--flavor', 'stable',
        *stable, '--concurrency=1', '--machine'], 'stable-complete.jsonl'))
    passed.append(run('navigation', [FLUTTER, 'test', '--no-pub', '--flavor', 'beta',
        'test/beta5_ui_test.dart', '--concurrency=1', '--machine'], 'search-back-player.jsonl'))
    passed.append(run('analysis', [FLUTTER, 'analyze', '--no-pub'], 'analyze-complete.log'))
    if not all(passed):
        save('checks', 'needs_review')
    elif not run('build', [POWERSHELL, '-NoProfile', '-File', str(OUT/'build_diagnostic.ps1')], 'build-driver.log'):
        save('build', 'needs_review')
    elif not run('verify_candidate', [os.sys.executable, '-X', 'utf8', str(OUT/'sign_diagnostic_candidate.py')], 'candidate-verification.log'):
        save('verify_candidate', 'needs_review')
    else:
        save('candidate', 'ready_for_review_no_device_permission_yet')
except BaseException:
    (OUT/'candidate-worker-exception.log').write_text(traceback.format_exc(), encoding='utf-8')
    save(record.get('stage','startup'), 'exception')
    raise
