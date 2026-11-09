"""One authorized, bounded observation; never drives playback or account APIs."""
from pathlib import Path
import collections
import datetime as dt
import hashlib
import json
import re
import subprocess
import threading
import time

OUT=Path(__file__).resolve().parent/'capture-1'
OUT.mkdir(exist_ok=False)
ADB='D:/CodexCache/android-build/sdk/platform-tools/adb.exe'
PACKAGE='com.mesting.music.beta'
rows=[l.split() for l in subprocess.check_output([ADB,'devices'],timeout=10).decode().splitlines()
      if re.match(r'^\S+\s+device$',l)]
assert len(rows)==1,'Exactly one authorized device is required'
SERIAL=rows[0][0]
started=time.monotonic(); end=started+180
def shell(*args):
    remaining=end-time.monotonic()
    if remaining<=0:raise TimeoutError()
    r=subprocess.run([ADB,'-s',SERIAL,'shell',*args],capture_output=True,
        timeout=min(8,remaining),creationflags=subprocess.CREATE_NO_WINDOW)
    return r.stdout.decode('utf-8',errors='replace')
pid=shell('pidof',PACKAGE).strip().split()[0];assert pid.isdigit()
counts=collections.Counter();lock=threading.Lock()
state={'state':'recording','package':PACKAGE,'pid':int(pid),'maximumSeconds':180,
       'startedUtc':dt.datetime.now(dt.timezone.utc).isoformat(),'readOnly':True,
       'appOrPlaybackControlledByAgent':False,'rawLogcatPersisted':False}
def save():
    with lock: state['phaseCounts']=dict(counts)
    (OUT/'capture-state.json').write_text(json.dumps(state,indent=2),encoding='utf-8')
save()
native=set('engineAttached configuration configurationRejected pulseScheduled pulseSent pulseUndeliverable acknowledged rejected staleAcknowledgement acknowledgementTimeout leaseExpired mediaServicePresent mediaServiceMissing wakeAcquired wakeReleased stopped'.split())
dart=set('bindingStarted bindingDisposed lifecycle configurationSent configurationAccepted configurationFailed configurationRetired configurationRetry pulseReceived pulseRejected pulsePollCompleted pulsePollFailed pollEntered pollSkipped tickStarted tickCompleted tickFailed httpStarted httpCompleted httpTimedOut httpFailed commandReceived commandSkipped applicationQueued applicationStarted applicationCompleted applicationCancelled applicationTimedOut applicationFailed controllerStopped'.split())
enum_values={
 'operation':set('status roomCheck heartbeat playCommand playlistRead playlistWrite songDetail statistics distance location roomAction other'.split()),
 'reason':set('cadence inFlight busy inactive accountEnded roomMissing staleOwner staleLease staleRequest unsupportedMethod timeout unavailable unconfirmed noCommand olderSequence duplicate ownCommand newerCommand userControl queueMissing stopped'.split()),
 'lifecycle':set('detached resumed inactive hidden paused'.split()),
 'order':set('first newer equal older opaque'.split()),
}
numeric=set('index utcMs elapsedMs revision request configuration attempt durationMs application'.split())
boolean=set('enabled active background accepted numericSequence'.split())
log=subprocess.Popen([ADB,'-s',SERIAL,'logcat','--pid='+pid,'-T','1','-v','epoch',
    'MestingTogetherSync:I','flutter:I','*:S'],stdout=subprocess.PIPE,stderr=subprocess.DEVNULL,
    stdin=subprocess.DEVNULL,creationflags=subprocess.CREATE_NO_WINDOW)
def read_log():
    with (OUT/'phase-events.jsonl').open('w',encoding='utf-8',buffering=1) as f:
        for line in iter(log.stdout.readline,b''):
            text=line.decode('utf-8',errors='replace');index=text.find('{')
            if index<0:continue
            try:e=json.loads(text[index:])
            except ValueError:continue
            if not isinstance(e,dict):continue
            source=e.get('source');phase=e.get('phase')
            if source=='dart':
                if e.get('tag')!='MestingTogetherSync' or phase not in dart:continue
            elif source=='native':
                if 'MestingTogetherSync' not in text[:index] or phase not in native:continue
            else:continue
            clean={'source':source,'phase':phase,'captureElapsedSeconds':round(time.monotonic()-started,3)}
            for k,v in e.items():
                if k in numeric and isinstance(v,int) and not isinstance(v,bool):clean[k]=v
                elif k in boolean and isinstance(v,bool):clean[k]=v
                elif k in enum_values and v in enum_values[k]:clean[k]=v
            f.write(json.dumps(clean)+'\n')
            with lock:counts[source+'.'+phase]+=1
thread=threading.Thread(target=read_log,daemon=True);thread.start()
samples=0
try:
    with (OUT/'media-service-samples.jsonl').open('w',encoding='utf-8',buffering=1) as f:
        while time.monotonic()<end and not (OUT/'STOP').exists():
            s={'elapsedSeconds':round(time.monotonic()-started,3),'utc':dt.datetime.now(dt.timezone.utc).isoformat()}
            try:
                s['sameProcessAlive']=pid in shell('pidof',PACKAGE).split()
                services=shell('dumpsys','activity','services',PACKAGE)
                s['foregroundMediaService']='isForeground=true' in services
                focus=[l for l in shell('dumpsys','window').splitlines() if 'mCurrentFocus=' in l or 'mFocusedApp=' in l]
                s['focusKnown']=bool(focus)
                if focus:s['mestingFocused']=any(PACKAGE in l for l in focus)
                media=shell('dumpsys','media_session').splitlines()
                i=next((i for i,l in enumerate(media) if l.strip()=='package='+PACKAGE),None)
                if i is not None:
                    j=next((j for j in range(i+1,len(media)) if media[j].lstrip().startswith('package=')),len(media))
                    block=media[i:j];play=next((l for l in block if 'state=PlaybackState' in l),'')
                    match=re.search(r'state=([A-Z_]+)\((\d+)\), position=(-?\d+)',play)
                    if match:s.update(playState=match[1],playStateCode=int(match[2]),positionMs=int(match[3]))
                    meta=next((l.strip() for l in block if l.strip().startswith('metadata:')),'')
                    s['metadataFingerprint']=hashlib.sha256(meta.encode()).hexdigest()[:16]
                wake=[l for l in shell('dumpsys','power').splitlines() if 'PARTIAL_WAKE_LOCK' in l]
                s['togetherWakeHeld']=any('MestingMusic:together-sync' in l for l in wake)
                s['audioWakeHeld']=any('com.ryanheise.audioservice.AudioService' in l and 'pid='+pid in l for l in wake)
            except Exception as e:s['samplingError']=type(e).__name__
            f.write(json.dumps(s)+'\n');samples+=1
            state.update(samples=samples,elapsedSeconds=round(time.monotonic()-started,2));save()
            time.sleep(max(0,min(3,end-time.monotonic())))
finally:
    log.terminate()
    try:log.wait(timeout=3)
    except subprocess.TimeoutExpired:log.kill();log.wait(timeout=3)
    thread.join(timeout=2)
    state.update(state='complete',elapsedSeconds=round(time.monotonic()-started,2),samples=samples)
    save()
