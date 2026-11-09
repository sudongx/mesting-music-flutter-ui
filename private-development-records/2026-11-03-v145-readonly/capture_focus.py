"""Read the window summary, which exposes focus unlike its windows subcommand."""
from pathlib import Path
import datetime as dt
import json
import subprocess
import time

out = Path(__file__).resolve().parent
status = json.loads((out/'capture-state.json').read_text('utf8'))
start = dt.datetime.fromisoformat(status['startedUtc'])
deadline = start + dt.timedelta(seconds=status['maximumSeconds'])
with (out/'verified-focus-samples.jsonl').open('w',encoding='utf8',buffering=1) as stream:
    while dt.datetime.now(dt.timezone.utc) < deadline and not (out/'STOP').exists():
        now = dt.datetime.now(dt.timezone.utc)
        result = subprocess.run(['D:/CodexCache/android-build/sdk/platform-tools/adb.exe',
                                 'shell','dumpsys','window'],capture_output=True,timeout=8)
        fields = [line for line in result.stdout.decode('utf8',errors='replace').splitlines()
                  if 'mCurrentFocus=' in line or 'mFocusedApp=' in line]
        stream.write(json.dumps({'utc':now.isoformat(),'elapsedSeconds':(now-start).total_seconds(),
             'mestingFocused':any('com.mesting.music.beta' in line for line in fields),
             'focusFieldsAvailable':bool(fields)})+'\n')
        time.sleep(2)
