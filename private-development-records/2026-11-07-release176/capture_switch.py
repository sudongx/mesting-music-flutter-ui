"""Record an already inspected platform selection for visual review only.

The encoder is not an FPS meter. Keep this separate from Flutter frame timings
and own-layer TimeStats, and never navigate private account settings here.
"""
from pathlib import Path
import json
import re
import subprocess
import sys
import time

OUT = Path(__file__).resolve().parent
ADB = 'D:/CodexCache/android-build/sdk/platform-tools/adb.exe'
SERIAL = json.loads((OUT / 'device-baseline75.json').read_text('utf8'))['serial']
label, x, y = sys.argv[1:4]
assert re.fullmatch(r'[a-z0-9-]+', label)
target = OUT / 'device' / label
target.mkdir(exist_ok=False)
remote = '/sdcard/Download/mesting-' + label + '.mp4'

def adb(*args):
    return subprocess.run([ADB, '-s', SERIAL, *args], check=True,
                          capture_output=True, timeout=40).stdout

def screen(name):
    data = adb('exec-out', 'screencap', '-p')
    assert data.startswith(b'\x89PNG\r\n\x1a\n')
    (target / name).write_bytes(data)

screen('before.png')
recorder = subprocess.Popen([ADB, '-s', SERIAL, 'shell', 'screenrecord',
    '--time-limit', '10', '--bit-rate', '8000000', remote],
    stdout=subprocess.PIPE, stderr=subprocess.PIPE)
time.sleep(1)
began = time.monotonic()
adb('shell', 'input', 'tap', x, y)
events = []
for delay in [.2, .6, 1.5, 3.5]:
    time.sleep(max(0, began + delay - time.monotonic()))
    screen('after-' + str(delay) + '.png')
    events.append({'requestedSeconds': delay, 'actualCaptureFinishedSeconds': round(time.monotonic()-began, 3)})
stdout, stderr = recorder.communicate(timeout=20)
assert recorder.returncode == 0, stderr.decode('utf8', errors='replace')
adb('pull', remote, str(target / 'visible-switch.mp4'))
(target / 'actions.json').write_text(json.dumps({'x': int(x), 'y': int(y),
    'frames': events, 'visualEvidenceOnly': True, 'encoderProvesDisplayFps': False}, indent=2), 'utf8')
print({'visualSwitchCaptured': label})
