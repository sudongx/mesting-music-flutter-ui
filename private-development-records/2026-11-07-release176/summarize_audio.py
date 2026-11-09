"""Keep the app's active route evidence without exporting unrelated audio users."""
from pathlib import Path
import json
import re

OUT = Path(__file__).resolve().parent
records = []
for name in ['playing-local76', 'playing-earbuds76', 'paused-before-core76']:
    raw = (OUT / ('audio-'+name+'.txt')).read_text('utf8')
    lines = [line for line in raw.splitlines() if 'AudioPlaybackConfiguration' in line
             and 'u/pid:10529/' in line and 'type:android.media.AudioTrack' in line]
    assert len(lines)==1
    line = lines[0]
    records.append({'phase':name, 'appUid':10529,
        'deviceIds':[int(v) for v in re.search(r'deviceIds:\[([^]]*)\]',line)[1].split(',') if v.strip()],
        'state':re.search(r'state:(\w+)',line)[1],
        'sampleRate':int(re.search(r'sampleRate=(\d+)',line)[1]),
        'source': 'dumpsys audio own AudioTrack configuration'})
assert records[0]['state']=='started' and records[0]['deviceIds']==[3]
assert records[1]['state']=='started' and records[1]['deviceIds']==[12738]
assert records[2]['state']=='paused' and records[2]['deviceIds']==[12738]
result = {'version':'1.0.76','code':97, 'listShowsLocalAndConnectedBluetooth':True,
    'pausedLocalSelectionShownAsPending':True,
    'actualRouteConfirmedByNativeGetRoutedDeviceUiAndOwnAudioTrack':True,
    'localDeviceId':3,'bluetoothDeviceId':12738,'bluetoothDisconnected':False,
    'records':records,'volumeChangesRequested':False,
    'localVolumeWasZeroAndPreserved':True,'audibleOutputOrFidelityUserAccepted':False,
    'previewAdvancedDuringExercise':True,'originalTrackRestoredThenPausedAfterResolution':True,
    'officialFullTrackOrVipAccepted':False,'otherAppsAudioRecordsExported':False}
(OUT/'device/audio-route-acceptance.json').write_text(json.dumps(result,indent=2)+'\n','utf8')
print({'realRoutes':2,'ownTrackStartedOnBoth':True,'finalState':'paused','bluetoothConnected':True})
