"""Capture actual foreground Flutter surface presentation and fixed gestures.

FrameTimeline coverage is checked offline, never assumed from a successful
Perfetto exit. SurfaceFlinger TimeStats are stored separately from FrameTiming.
This helper only taps the inspected root navigation and scrolls page content.
"""
import json
import re
import shlex
import subprocess
import sys
import time
from pathlib import Path

OUT = Path(__file__).resolve().parent
ADB = 'D:/CodexCache/android-build/sdk/platform-tools/adb.exe'
serial = json.loads((OUT / 'device-state-private.json').read_text('utf8'))['serial']
label = sys.argv[1]
assert re.fullmatch(r'[a-z0-9-]+', label)
TARGET = OUT / 'device' / label
TARGET.mkdir(parents=True, exist_ok=False)

def adb(*args):
    return subprocess.run([ADB, '-s', serial, *args], capture_output=True, check=True, timeout=45).stdout

def shell(*args):
    # adb shell joins arguments into a remote shell command: quote SurfaceView
    # names containing parentheses/brackets instead of passing them unescaped.
    return adb('shell', ' '.join(shlex.quote(str(arg)) for arg in args)).decode('utf8', errors='replace')

def save(name, value):
    (TARGET / name).write_text(value, 'utf8')

def screenshot(name):
    (TARGET / name).write_bytes(adb('exec-out', 'screencap', '-p'))

focus = shell('dumpsys', 'window')
assert re.search(r'mCurrentFocus=.*com\.mesting\.music/', focus), 'Authorized app must be foreground'
package = shell('dumpsys', 'package', 'com.mesting.music')
version = re.search(r'versionName=(\S+)', package)[1]
layers = shell('dumpsys', 'SurfaceFlinger', '--list')
own = [line for line in layers.splitlines() if 'SurfaceView[com.mesting.music/' in line and '(BLAST)' in line]
assert len(own) == 1, 'Select one real application buffer surface'
match = re.match(r'RequestedLayerState\{(.+?) parentId=', own[0])
layer = match[1] if match else own[0]
save('surface.txt', layer)
save('environment-start.txt', shell('dumpsys', 'battery') + '\n' + shell('dumpsys', 'thermalservice'))
save('memory-start.txt', shell('dumpsys', 'meminfo', 'com.mesting.music'))
screenshot('start.png')
save('latency-initial.txt', shell('dumpsys', 'SurfaceFlinger', '--latency', layer))
shell('dumpsys', 'SurfaceFlinger', '--timestats', '-clear', '-enable')
remote = '/data/misc/perfetto-traces/mesting175_' + label + '.pftrace'
config = '''buffers { size_kb: 32768 fill_policy: RING_BUFFER }
data_sources { config { name: "android.surfaceflinger.frametimeline" } }
data_sources { config { name: "linux.process_stats" process_stats_config { scan_all_processes_on_start: true } } }
data_sources { config { name: "linux.ftrace" ftrace_config {
  ftrace_events: "sched/sched_switch"
  ftrace_events: "power/cpu_frequency"
  atrace_categories: "gfx"
  atrace_categories: "view"
  atrace_apps: "com.mesting.music"
} } }
duration_ms: 15000
'''
trace = subprocess.Popen([ADB, '-s', serial, 'shell', 'perfetto', '--txt', '-c', '-', '-o', remote], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
trace.stdin.write(config.encode())
trace.stdin.close()
events = []
began = time.monotonic()
try:
    time.sleep(.6)
    # The discovery root is selected and visually checked before this capture.
    # No fixed-coordinate Tab requests are treated as verified selections.
    for i in range(6):
        a, b = (1700, 780) if i % 2 == 0 else (780, 1700)
        shell('dumpsys', 'SurfaceFlinger', '--latency-clear', layer)
        start = time.monotonic()
        shell('input', 'swipe', 540, a, 540, b, 350)
        events.append({'kind': 'scroll', 'fromY': a, 'toY': b, 'atMs': round((start-began)*1000)})
        save(f'latency-{i}.txt', shell('dumpsys', 'SurfaceFlinger', '--latency', layer))
        time.sleep(.12)
    screenshot('end.png')
    save('timestats.txt', shell('dumpsys', 'SurfaceFlinger', '--timestats', '-dump'))
    trace.wait(timeout=40)
    save('trace-status.txt', trace.stdout.read().decode('utf8', errors='replace') + '\n' + trace.stderr.read().decode('utf8', errors='replace'))
    assert trace.returncode == 0
    adb('pull', remote, str(TARGET / 'frames.pftrace'))
finally:
    shell('dumpsys', 'SurfaceFlinger', '--timestats', '-disable')
    if trace.poll() is None:
        trace.terminate()
    save('environment-end.txt', shell('dumpsys', 'battery') + '\n' + shell('dumpsys', 'thermalservice'))
    save('memory-end.txt', shell('dumpsys', 'meminfo', 'com.mesting.music'))
    save('actions.json', json.dumps({'version': version, 'label': label, 'events': events, 'appFrameCoverageVerified': False, 'performanceAccepted': False}, indent=2))
print(json.dumps({'captured': label, 'version': version, 'actions': len(events), 'applicationSurface': True, 'appFrameCoverageStillRequiresAnalysis': True}))
