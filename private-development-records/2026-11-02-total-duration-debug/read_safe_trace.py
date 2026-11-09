"""Read only this app's allowlisted playback diagnostics; never save raw logcat."""
import datetime
import json
import subprocess
from pathlib import Path

root = Path(__file__).resolve().parent
adb = [r'D:/CodexCache/android-build/sdk/platform-tools/adb.exe', '-s', 'eb293ac2']
pid = subprocess.check_output(adb + ['shell', 'pidof', 'com.mesting.music.beta']).decode().strip()
raw = subprocess.check_output(adb + ['logcat', '-d', '--pid=' + pid, '-v', 'epoch']).decode('utf8', 'replace')
output = root / 'runtime-safe.json'
rows = json.loads(output.read_text(encoding='utf8')) if output.exists() else []
known = {(r['logTime'], r['event']) for r in rows}
keys = ('event', 'started', 'mediaSeconds', 'realtimeSeconds', 'transport', 'outcome', 'businessCode')
for line in raw.splitlines():
    if 'MESTING_LOCAL ' not in line:
        continue
    try:
        record = json.loads(line.split('MESTING_LOCAL ', 1)[1])
        if record.get('event') != 'netease.playback_submit':
            continue
        stamp = line.split()[0]
        if (stamp, record['event']) not in known:
            rows.append({'logTime': stamp, **{k: record[k] for k in keys if k in record}})
            known.add((stamp, record['event']))
    except (ValueError, IndexError):
        continue
output.write_text(json.dumps(rows, indent=2), encoding='utf8')
print(json.dumps({'readAt': datetime.datetime.now().astimezone().isoformat(), 'records': rows}, indent=2))
