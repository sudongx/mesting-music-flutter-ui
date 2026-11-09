"""Private bounded UI driver: stop input if the app/process leaves the front."""
from pathlib import Path
import json, subprocess, sys, time

OUT = Path(__file__).resolve().parent
ADB = 'D:/CodexCache/android-build/sdk/platform-tools/adb.exe'
PACKAGE = 'com.mesting.music.beta'

def run(*args):
    return subprocess.check_output([ADB, '-s', 'eb293ac2', *map(str, args)], timeout=20)

def text(*args):
    return run(*args).decode('utf-8', errors='replace')

def guard():
    focus = text('shell', 'dumpsys', 'window')
    if not any('mCurrentFocus=' in line and PACKAGE + '/' in line for line in focus.splitlines()):
        raise RuntimeError('App not foreground: refusing input')
    current = text('shell', 'pidof', PACKAGE).strip()
    expected = (OUT / 'qa-pid.txt').read_text().strip()
    if current != expected:
        raise RuntimeError('App process changed: stop and preserve exit record')

def inject(*args):
    guard()
    with (OUT / 'device-qa-events.jsonl').open('a', encoding='utf-8') as log:
        log.write(json.dumps({'uptime': text('shell', 'cat', '/proc/uptime').split()[0], 'input': args})+'\n')
    run('shell', 'input', *args)

def capture(name):
    guard()
    path = OUT / ('qa-' + name + '.png')
    path.write_bytes(run('exec-out', 'screencap', '-p'))
    print(str(path), flush=True)

command = sys.argv[1]
args = sys.argv[2:]
if command == 'start':
    run('shell', 'am', 'start', '-n', PACKAGE + '/com.mesting.music.CoralLauncher')
    time.sleep(1.5)
    (OUT/'qa-pid.txt').write_text(text('shell', 'pidof', PACKAGE).strip())
    capture(args[0])
elif command == 'capture':
    capture(args[0])
elif command == 'tap':
    inject('tap', int(args[0]), int(args[1])); time.sleep(.45); capture(args[2])
elif command == 'swipe':
    inject('swipe', *map(int, args[:5])); time.sleep(.4); capture(args[5])
elif command == 'back':
    inject('keyevent', 4); time.sleep(.5); capture(args[0])
elif command == 'scroll':
    for _ in range(int(args[0])):
        inject('swipe', 520, 1750, 520, 600, 100)
        inject('swipe', 520, 600, 520, 1750, 100)
    time.sleep(.4); capture(args[1])
elif command == 'text':
    assert all(c.isascii() and (c.isalnum() or c in '%-_') for c in args[0])
    inject('text', args[0]); inject('keyevent', 66); time.sleep(1.5); capture(args[1])
elif command == 'tabs':
    for _ in range(int(args[0])):
        for x in [540, 732, 155, 349]: inject('tap', x, 2225)
    time.sleep(.6); capture(args[1])
else:
    raise ValueError('Unknown operation')
