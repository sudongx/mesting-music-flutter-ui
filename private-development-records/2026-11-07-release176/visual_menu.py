"""Inspect a known visible menu and its closed scene, without selecting items."""
from pathlib import Path
import json
import subprocess
import sys
import time

OUT = Path(__file__).resolve().parent
ADB = 'D:/CodexCache/android-build/sdk/platform-tools/adb.exe'
SERIAL = json.loads((OUT/'device-baseline75.json').read_text('utf8'))['serial']
label, workload = sys.argv[1:3]
assert workload in ['player-menu', 'profile-menu']
assert label.startswith('final76-') and label.replace('-', '').isalnum()
target = OUT/'device'/label
target.mkdir(exist_ok=False)
remote = '/sdcard/Download/mesting-'+label+'.mp4'

def adb(*args):
    p = subprocess.run([ADB, '-s', SERIAL, *map(str,args)], capture_output=True, timeout=40)
    assert p.returncode == 0
    return p.stdout

def screen(name):
    data = adb('exec-out','screencap','-p')
    assert data.startswith(b'\x89PNG\r\n\x1a\n')
    (target/name).write_bytes(data)

opened, outside = ((970,300),(54,1750)) if workload == 'player-menu' else ((810,245),(70,500))
screen('before.png')
recorder = subprocess.Popen([ADB,'-s',SERIAL,'shell','screenrecord','--time-limit','15',
    '--bit-rate','8000000',remote],stdout=subprocess.PIPE,stderr=subprocess.PIPE)
time.sleep(1)
events = []
started = time.monotonic()
for state, point, delay, shot in [
    ('open',opened,2.5,'held-open.png'),
    ('dismiss',outside,1,'closed.png'),
    ('reverse-open',opened,.065,None),
    ('reverse-dismiss',outside,1,'reverse-closed.png'),
]:
    before = time.monotonic()
    adb('shell','input','tap',*point)
    events.append({'state':state,'atMs':round((before-started)*1000),
                   'commandMs':round((time.monotonic()-before)*1000)})
    time.sleep(delay)
    if shot:
        screen(shot)
_, error = recorder.communicate(timeout=25)
assert recorder.returncode == 0, error.decode('utf8',errors='replace')
adb('pull',remote,target/'visible-menu.mp4')
(target/'actions.json').write_text(json.dumps({'events':events,'itemActionsSelected':0,
    'visualEvidenceOnly':True,'encoderProvesDisplayFps':False,
    'fastReverseDelayExcludesInputCommandLatency':True},indent=2)+'\n','utf8')
print({'visualMenuCaptured':label,'actions':len(events)})
