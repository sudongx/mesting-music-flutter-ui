"""At most 180 seconds of whitelisted phase and hashed media observations.

The driver is separate: this observer never changes playback or foreground.
Each event is attributed to the PID and Android profile captured at startup.
"""
import collections
import datetime as dt
import json
import re
import subprocess
import sys
import threading
import time
from device_probe import ROOT, ADB, SERIAL, processes, sample

name = sys.argv[1]
assert re.fullmatch(r'capture-[0-9]+', name)
OUT = ROOT / name
OUT.mkdir(exist_ok=False)
started = time.monotonic()
deadline = started + 175
pids = processes()
assert set(pids.values()) == {0, 999}, 'Both authorized clones must be running'
counts = collections.Counter()
lock = threading.Lock()
state = {'state': 'recording', 'startedUtc': dt.datetime.now(dt.timezone.utc).isoformat(),
         'maximumSeconds': 175, 'processes': pids, 'rawLogcatPersisted': False,
         'observerControlsPlayback': False}

native = set('engineAttached configuration configurationRejected pulseScheduled pulseSent pulseUndeliverable acknowledged rejected staleAcknowledgement acknowledgementTimeout leaseExpired mediaServicePresent mediaServiceMissing wakeAcquired wakeReleased stopped foregroundLeaseAcquired foregroundLeaseRejected'.split())
dart = set('bindingStarted bindingDisposed lifecycle configurationSent configurationAccepted configurationFailed configurationRetired configurationRetry pulseReceived pulseRejected pulsePollCompleted pulsePollFailed pollEntered pollSkipped tickStarted tickCompleted tickFailed httpStarted httpCompleted httpTimedOut httpFailed commandReceived commandSkipped applicationQueued applicationStarted applicationCompleted applicationCancelled applicationTimedOut applicationFailed controllerStopped'.split())
enum_values = {
    'operation': set('status roomCheck heartbeat playCommand playlistRead playlistWrite songDetail statistics distance location roomAction other'.split()),
    'reason': set('cadence inFlight busy inactive accountEnded roomMissing staleOwner staleLease staleRequest unsupportedMethod timeout unavailable unconfirmed noCommand olderSequence duplicate ownCommand newerCommand userControl queueMissing stopped'.split()),
    'lifecycle': set('detached resumed inactive hidden paused'.split()),
    'order': set('first newer equal older opaque'.split()),
}
numeric = set('index utcMs elapsedMs revision request configuration attempt durationMs application'.split())
boolean = set('enabled active background accepted numericSequence'.split())


def save():
    with lock:
        state['phaseCounts'] = dict(counts)
    (OUT / 'capture-state.json').write_text(json.dumps(state, indent=2), encoding='utf-8')


save()
log = subprocess.Popen([ADB, '-s', SERIAL, 'logcat', '-T', '1', '-v', 'epoch',
                        'MestingTogetherSync:I', 'flutter:I', '*:S'],
                       stdout=subprocess.PIPE, stderr=subprocess.DEVNULL,
                       stdin=subprocess.DEVNULL, creationflags=subprocess.CREATE_NO_WINDOW)


def read_log():
    with (OUT / 'phase-events.jsonl').open('w', encoding='utf-8', buffering=1) as f:
        for line in iter(log.stdout.readline, b''):
            text = line.decode('utf-8', errors='replace')
            prefix = re.match(r'^\s*\d+\.\d+\s+(\d+)\s+', text)
            if not prefix or int(prefix[1]) not in pids:
                continue
            pid = int(prefix[1])
            index = text.find('{')
            if index < 0:
                continue
            try:
                e = json.loads(text[index:])
            except ValueError:
                continue
            if not isinstance(e, dict):
                continue
            source, phase = e.get('source'), e.get('phase')
            if source == 'dart':
                if e.get('tag') != 'MestingTogetherSync' or phase not in dart:
                    continue
            elif source == 'native':
                if 'MestingTogetherSync' not in text[:index] or phase not in native:
                    continue
            else:
                continue
            clean = {'pid': pid, 'user': pids[pid], 'source': source, 'phase': phase,
                     'captureElapsedSeconds': round(time.monotonic() - started, 3)}
            for k, v in e.items():
                if k in numeric and isinstance(v, int) and not isinstance(v, bool):
                    clean[k] = v
                elif k in boolean and isinstance(v, bool):
                    clean[k] = v
                elif k in enum_values and v in enum_values[k]:
                    clean[k] = v
            f.write(json.dumps(clean) + '\n')
            with lock:
                counts[f'{pids[pid]}.{source}.{phase}'] += 1


thread = threading.Thread(target=read_log, daemon=True)
thread.start()
samples = 0
try:
    with (OUT / 'media-samples.jsonl').open('w', encoding='utf-8', buffering=1) as f:
        while time.monotonic() < deadline and not (OUT / 'STOP').exists():
            try:
                s = sample()
                s['captureElapsedSeconds'] = round(time.monotonic() - started, 3)
            except Exception as e:
                s = {'samplingError': type(e).__name__,
                     'captureElapsedSeconds': round(time.monotonic() - started, 3)}
            f.write(json.dumps(s) + '\n')
            samples += 1
            state.update(samples=samples, elapsedSeconds=round(time.monotonic() - started, 2))
            save()
            time.sleep(max(0, min(2, deadline - time.monotonic())))
finally:
    log.terminate()
    try:
        log.wait(timeout=3)
    except subprocess.TimeoutExpired:
        log.kill()
        log.wait(timeout=3)
    thread.join(timeout=2)
    state.update(state='complete', elapsedSeconds=round(time.monotonic() - started, 2), samples=samples)
    save()
