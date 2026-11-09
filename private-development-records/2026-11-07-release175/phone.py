"""Narrow local device helper; never reads account files or clears app data.

The original USB keep-awake setting is recorded before its first mutation.
Restore is idempotent and is also usable after a desktop process interruption.
"""
import json
import re
import subprocess
import sys
from pathlib import Path

OUT = Path(__file__).resolve().parent
ADB = Path('D:/CodexCache/android-build/sdk/platform-tools/adb.exe')
STATE = OUT / 'device-state-private.json'
PACKAGE = 'com.mesting.music'

def run(*args, binary=False):
    result = subprocess.run([str(ADB), '-s', serial, *args], capture_output=True, timeout=40)
    if result.returncode:
        raise RuntimeError('ADB command failed: ' + ' '.join(args[:3]))
    return result.stdout if binary else result.stdout.decode('utf-8', errors='replace').strip()

if STATE.exists():
    state = json.loads(STATE.read_text('utf8'))
    serial = state['serial']
else:
    listing = subprocess.check_output([str(ADB), 'devices'], text=True)
    devices = [line.split()[0] for line in listing.splitlines()[1:] if line.endswith('\tdevice')]
    assert len(devices) == 1, 'Exactly one authorized phone must be connected'
    serial = devices[0]
    state = {'serial': serial, 'stayAwakeOriginal': run('shell', 'settings', 'get', 'global', 'stay_on_while_plugged_in'), 'restored': True}
    STATE.write_text(json.dumps(state, indent=2) + '\n', 'utf8')

command = sys.argv[1]
if command == 'inspect':
    package = run('shell', 'dumpsys', 'package', PACKAGE)
    power = run('shell', 'dumpsys', 'power')
    battery = run('shell', 'dumpsys', 'battery')
    logs = run('logcat', '-d', '-t', '2000', '-s', 'MestingRenderer:I', 'flutter:I')
    summary = {
        'model': run('shell', 'getprop', 'ro.product.model'),
        'sdk': run('shell', 'getprop', 'ro.build.version.sdk'),
        'package': PACKAGE,
        'packageVersion': re.findall(r'(?:versionCode=\d+[^\n]*|versionName=[^\n]*|firstInstallTime=[^\n]*|lastUpdateTime=[^\n]*)', package),
        'power': [line.strip() for line in power.splitlines() if any(key in line for key in ['mWakefulness=', 'mStayOn=', 'mIsPowered=', 'mPlugType=', 'mMaximumScreenOffTimeoutFromDeviceAdmin='])],
        'battery': [line.strip() for line in battery.splitlines() if any(key in line for key in ['powered:', 'level:', 'temperature:'])],
        'renderer': [line.strip() for line in logs.splitlines() if 'requestedBackend=' in line or 'Using the Impeller rendering backend' in line],
        'screenOffTimeout': run('shell', 'settings', 'get', 'system', 'screen_off_timeout'),
        'stayAwakeOriginal': state['stayAwakeOriginal'],
        'surfaces': [line for line in run('shell', 'dumpsys', 'SurfaceFlinger', '--list').splitlines() if PACKAGE in line],
    }
    (OUT / 'device-inspection.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2) + '\n', 'utf8')
    print(json.dumps(summary, ensure_ascii=False, indent=2))
elif command == 'awake':
    # Persist rollback before changing the system value. The user's ten-minute
    # screen-off timeout remains unchanged; plugged-in stay-awake is separate.
    state['restored'] = False
    STATE.write_text(json.dumps(state, indent=2) + '\n', 'utf8')
    run('shell', 'svc', 'power', 'stayon', 'true')
    run('shell', 'input', 'keyevent', 'KEYCODE_WAKEUP')
    value = run('shell', 'settings', 'get', 'global', 'stay_on_while_plugged_in')
    power = run('shell', 'dumpsys', 'power')
    # Android16 includes dock power in "true" (15); older systems return7.
    # Verify the USB bit and the effective power-manager state, not an old mask.
    assert value.isdigit() and int(value) & 2 and 'mStayOn=true' in power, 'Keep-awake not verified; do not start a long test'
    print(json.dumps({'keepAwakeVerified': True, 'screenOffTimeoutUnchanged': True, 'restoreRequired': True}))
elif command == 'restore':
    original = state['stayAwakeOriginal']
    if original == 'null':
        run('shell', 'settings', 'delete', 'global', 'stay_on_while_plugged_in')
    else:
        run('shell', 'settings', 'put', 'global', 'stay_on_while_plugged_in', original)
    actual = run('shell', 'settings', 'get', 'global', 'stay_on_while_plugged_in')
    assert actual == original
    state['restored'] = True
    STATE.write_text(json.dumps(state, indent=2) + '\n', 'utf8')
    print(json.dumps({'originalKeepAwakeSettingRestored': True}))
elif command == 'screen':
    target = OUT / 'device-current.png'
    data = run('exec-out', 'screencap', '-p', binary=True)
    assert data.startswith(b'\x89PNG\r\n\x1a\n'), 'Empty/invalid screenshot; preserve the previous image'
    target.write_bytes(data)
    print(str(target))
else:
    raise ValueError('Unsupported operation')
