"""User-authorized, bounded, read-only observation of the installed Mesting app."""
from pathlib import Path
import datetime as dt
import hashlib
import json
import re
import subprocess
import time

out = Path(__file__).resolve().parent
adb = 'D:/CodexCache/android-build/sdk/platform-tools/adb.exe'
package = 'com.mesting.music.beta'
def command(*args, timeout=8):
    result = subprocess.run([adb, *args], capture_output=True, timeout=timeout)
    return result.stdout.decode('utf8', errors='replace')

devices = [line.split()[0] for line in command('devices').splitlines()
           if re.match(r'^\S+\s+device$', line)]
assert len(devices) == 1, 'Select exactly one authorized device.'
serial = devices[0]
def shell(*args): return command('-s', serial, 'shell', *args)
pid = shell('pidof', package).strip().split()[0]
assert pid.isdigit()
status = {'state':'recording', 'package':package, 'pid':int(pid),
          'startedUtc':dt.datetime.now(dt.timezone.utc).isoformat(),
          'maximumSeconds':180, 'readOnly':True}
(out/'capture-state.json').write_text(json.dumps(status, indent=2), 'utf8')
log_file = (out/'mesting-pid-logcat-private.log').open('wb')
log_reader = subprocess.Popen([adb,'-s',serial,'logcat','--pid='+pid,'-T','1','-v','epoch'],
                              stdin=subprocess.DEVNULL, stdout=log_file, stderr=subprocess.STDOUT)
started = time.monotonic()
try:
    with (out/'media-service-samples.jsonl').open('w', encoding='utf8', buffering=1) as stream:
        while time.monotonic()-started < 180 and not (out/'STOP').exists():
            sample = {'elapsedSeconds':round(time.monotonic()-started, 2),
                      'utc':dt.datetime.now(dt.timezone.utc).isoformat()}
            try:
                sample['sameProcessAlive'] = pid in shell('pidof',package).split()
                services = shell('dumpsys','activity','services',package)
                sample['foregroundMediaService'] = 'isForeground=true' in services
                window = shell('dumpsys','window','windows')
                sample['mestingFocused'] = any(package in line for line in window.splitlines()
                                                if 'mCurrentFocus=' in line or 'mFocusedApp=' in line)
                media = shell('dumpsys','media_session').splitlines()
                index = next((i for i,line in enumerate(media) if line.strip() == 'package='+package), None)
                if index is not None:
                    end = next((i for i in range(index+1,len(media)) if media[i].lstrip().startswith('package=')),len(media))
                    block = media[index:end]
                    state = next((line for line in block if 'state=PlaybackState' in line),'')
                    fields = re.search(r'state=([A-Z_]+)\((\d+)\), position=(-?\d+)',state)
                    if fields:
                        sample.update(playState=fields[1], playStateCode=int(fields[2]), positionMs=int(fields[3]))
                    metadata = next((line.strip() for line in block if line.strip().startswith('metadata:')),'')
                    sample['metadataFingerprint'] = hashlib.sha256(metadata.encode()).hexdigest()[:16]
                power = shell('dumpsys','power')
                wake = [line for line in power.splitlines() if 'PARTIAL_WAKE_LOCK' in line]
                sample['togetherWakeHeld'] = any('MestingMusic:together-sync' in line for line in wake)
                sample['audioWakeHeld'] = any('com.ryanheise.audioservice.AudioService' in line and 'pid='+pid in line for line in wake)
            except Exception as error:
                sample['samplingError'] = type(error).__name__
            stream.write(json.dumps(sample, ensure_ascii=True)+'\n')
            time.sleep(3)
finally:
    log_reader.terminate()
    try: log_reader.wait(timeout=5)
    except subprocess.TimeoutExpired: log_reader.kill(); log_reader.wait(timeout=5)
    log_file.close()
    status.update(state='complete', elapsedSeconds=round(time.monotonic()-started,2))
    (out/'capture-state.json').write_text(json.dumps(status, indent=2), 'utf8')
