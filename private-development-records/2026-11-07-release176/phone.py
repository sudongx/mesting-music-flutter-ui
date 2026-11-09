"""Narrow authorized UI/device evidence; no private app files or settings writes."""
from pathlib import Path
import json
import re
import subprocess
import sys

OUT = Path(__file__).resolve().parent
ADB = 'D:/CodexCache/android-build/sdk/platform-tools/adb.exe'
listing = subprocess.check_output([ADB, 'devices'], text=True)
connected = [line.split()[0] for line in listing.splitlines()[1:] if line.endswith('\tdevice')]
assert len(connected) == 1, 'Exactly one authorized connected phone is required'
serial = connected[0]

def adb(*args):
    return subprocess.run([ADB, '-s', serial, *args], capture_output=True, check=True, timeout=40).stdout

def shell(*args):
    return adb('shell', *args).decode('utf8', errors='replace')

mode = sys.argv[1]
label = sys.argv[2] if len(sys.argv) > 2 else 'current'
assert re.fullmatch(r'[a-z0-9-]+', label)
if mode == 'inspect':
    package = shell('dumpsys', 'package', 'com.mesting.music')
    window = shell('dumpsys', 'window')
    battery = shell('dumpsys', 'battery')
    value = {
        'serial': serial, 'model': shell('getprop', 'ro.product.model').strip(),
        'package': 'com.mesting.music',
        'versions': re.findall(r'(?:versionCode=\d+[^\n]*|versionName=[^\n]*|firstInstallTime=[^\n]*|lastUpdateTime=[^\n]*)', package),
        'focus': [line.strip() for line in window.splitlines() if 'mCurrentFocus=' in line],
        'battery': [line.strip() for line in battery.splitlines() if any(key in line for key in ['level:', 'temperature:', 'powered:'])],
        'screenOffTimeout': shell('settings', 'get', 'system', 'screen_off_timeout').strip(),
        'stayOnWhilePluggedIn': shell('settings', 'get', 'global', 'stay_on_while_plugged_in').strip(),
    }
    (OUT / ('device-' + label + '.json')).write_text(json.dumps(value, ensure_ascii=False, indent=2), 'utf8')
    print(json.dumps({k: v for k, v in value.items() if k != 'serial'}, ensure_ascii=False, indent=2))
elif mode == 'screen':
    data = adb('exec-out', 'screencap', '-p')
    assert data.startswith(b'\x89PNG\r\n\x1a\n')
    target = OUT / ('screen-' + label + '.png')
    target.write_bytes(data)
    print(target)
elif mode == 'audio':
    (OUT / ('audio-' + label + '.txt')).write_text(shell('dumpsys', 'audio'), 'utf8')
    print('Audio routing metadata saved privately; no account files read')
else:
    raise ValueError(mode)
