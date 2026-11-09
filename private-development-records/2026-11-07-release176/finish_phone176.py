"""Read only the authorized app's final public route/settings/playback state."""
from pathlib import Path
import hashlib
import json
import re
import subprocess

OUT = Path(__file__).resolve().parent
ADB = 'D:/CodexCache/android-build/sdk/platform-tools/adb.exe'
SERIAL = json.loads((OUT/'device-baseline75.json').read_text('utf8'))['serial']
def shell(*args):
    return subprocess.check_output([ADB,'-s',SERIAL,'shell',*args],timeout=30).decode('utf8',errors='replace')

package = shell('dumpsys','package','com.mesting.music')
uid = int(re.search(r'\b(?:appId|userId)=(\d+)',package)[1])
audio = shell('dumpsys','audio')
own = [line.strip() for line in audio.splitlines() if
    'AudioPlaybackConfiguration' in line and f'u/pid:{uid}/' in line and 'AudioTrack' in line]
assert not any('state:started' in line for line in own)
settings = {'screenOffTimeout':shell('settings','get','system','screen_off_timeout').strip(),
    'stayOnWhilePluggedIn':shell('settings','get','global','stay_on_while_plugged_in').strip()}
assert settings == {'screenOffTimeout':'2147483647','stayOnWhilePluggedIn':'0'}
focus = [line.strip() for line in shell('dumpsys','window').splitlines() if 'mCurrentFocus=' in line]
assert len(focus)==1 and 'com.mesting.music/' in focus[0]
path = shell('pm','path','com.mesting.music').strip().removeprefix('package:')
assert re.fullmatch(r'/data/app/[A-Za-z0-9_./~+=-]+/base\.apk',path)
actual_hash = shell('sha256sum',path).split()[0]
expected = json.loads((OUT/'candidate3/Mesting-Music-v1.0.76-verification.json').read_text('utf8'))['sha256']
assert actual_hash == expected
own_devices = sorted(set(int(n) for line in own for n in re.findall(r'deviceId:(\d+)',line)))
report = {'version':'1.0.76','code':97,'candidate':3,'actualInstalledApkSha256':actual_hash,
    'matchesFinalCandidate':True,'firstInstallTime':re.search(r'firstInstallTime=([^\r\n]+)',package)[1],
    'appForeground':True,'ownUid':uid,'ownAudioTrackStarted':False,
    'ownAudioTrackConfigurationCount':len(own),'ownAudioDeviceIds':own_devices,
    **settings,'diagnosticCompleted':True,'originalPlatformRestored':'netease',
    'finalHomeVisuallyReviewed':True,'volumeOrKeepAwakeChangesMade':False,
    'otherAppsAudioRecordsExported':False}
(OUT/'device/final-state.json').write_text(json.dumps(report,indent=2)+'\n','utf8')
print({k:report[k] for k in ['matchesFinalCandidate','appForeground','ownAudioTrackStarted','screenOffTimeout','stayOnWhilePluggedIn']})
