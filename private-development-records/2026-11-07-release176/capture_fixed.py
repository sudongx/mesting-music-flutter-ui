"""Own-surface presentation capture around inspected, fixed UI gestures.

No global FPS is attributed to the app. Raw surface data and action timestamps
remain separate from Flutter build/raster timings and business acceptance.
"""
from pathlib import Path
import json
import re
import shlex
import subprocess
import sys
import time

OUT = Path(__file__).resolve().parent
ADB = 'D:/CodexCache/android-build/sdk/platform-tools/adb.exe'
serial = json.loads((OUT / 'device-baseline75.json').read_text('utf8'))['serial']
label, workload = sys.argv[1:3]
assert re.fullmatch(r'[a-z0-9-]+', label)
assert workload in ['player-menu', 'player-queue', 'profile-menu']
target = OUT / 'device' / label
target.mkdir(parents=True, exist_ok=False)

def adb(*args):
    return subprocess.run([ADB, '-s', serial, *args], capture_output=True, check=True, timeout=40).stdout

def shell(*args):
    return adb('shell', ' '.join(shlex.quote(str(arg)) for arg in args)).decode('utf8', errors='replace')

def save(name, value):
    (target / name).write_text(value, 'utf8')

def screen(name):
    value = adb('exec-out', 'screencap', '-p')
    assert value.startswith(b'\x89PNG\r\n\x1a\n')
    (target / name).write_bytes(value)

assert re.search(r'mCurrentFocus=.*com\.mesting\.music/', shell('dumpsys', 'window'))
package = shell('dumpsys', 'package', 'com.mesting.music')
version = re.search(r'versionName=(\S+)', package)[1]
if label.startswith('final76-'):
    # A previous exploratory capture accidentally overlapped playback. Reject
    # that confound before issuing any new comparison gestures.
    audio = shell('dumpsys', 'audio')
    assert not any('AudioPlaybackConfiguration' in line and
        'u/pid:10529/' in line and 'AudioTrack' in line and
        'state:started' in line for line in audio.splitlines()), 'Pause the app first'
layers = shell('dumpsys', 'SurfaceFlinger', '--list')
own = [line for line in layers.splitlines() if 'SurfaceView[com.mesting.music/' in line and '(BLAST)' in line]
assert len(own) == 1
match = re.match(r'RequestedLayerState\{(.+?) parentId=', own[0])
layer = match[1] if match else own[0]
save('surface.txt', layer)
save('environment-start.txt', shell('dumpsys', 'battery') + '\n' + shell('dumpsys', 'thermalservice'))
screen('start.png')
shell('dumpsys', 'SurfaceFlinger', '--timestats', '-clear', '-enable')
began = time.monotonic()
events = []
try:
    for cycle in range(12):
        # Coordinates are from the visible1080x2400 device, never guessed from
        # labels or a different navigation layout. No menu item is selected.
        actions = [(970, 300), (54, 1750)] if workload == 'player-menu' else (
            [(855, 2210), (855, 2210)] if workload == 'player-queue' else [(810, 245), (70, 500)])
        for opening, (x, y) in zip([True, False], actions):
            at = time.monotonic()
            shell('input', 'tap', x, y)
            events.append({'cycle': cycle, 'opening': opening, 'x': x, 'y': y,
                'atMs': round((at-began)*1000), 'inputCommandMs': round((time.monotonic()-at)*1000)})
            time.sleep(.065 if cycle >= 6 and opening else (.45 if opening else .30))
        save(f'latency-{cycle}.txt', shell('dumpsys', 'SurfaceFlinger', '--latency', layer))
    screen('end.png')
    save('timestats.txt', shell('dumpsys', 'SurfaceFlinger', '--timestats', '-dump'))
finally:
    shell('dumpsys', 'SurfaceFlinger', '--timestats', '-disable')
    save('environment-end.txt', shell('dumpsys', 'battery') + '\n' + shell('dumpsys', 'thermalservice'))
    save('actions.json', json.dumps({'version': version, 'workload': workload, 'events': events,
        'fixedCoordinatesInitiallyInspected': True, 'everyOpenCloseIndividuallyConfirmed': False,
        'flutterBuildRasterMetrics': False, 'overall120FpsAccepted': False}, indent=2))
print(json.dumps({'version': version, 'capture': label, 'inputEvents': len(events), 'ownSurfaceSelected': True}))
