"""Summarize explicit driver trials without interpreting audio-focus pauses."""
from pathlib import Path
import datetime as dt
import json
import statistics

ROOT = Path(__file__).resolve().parent
events = [json.loads(line) for line in (ROOT / 'driver-events.jsonl').read_text(encoding='utf-8').splitlines()]
captures = []
for folder in sorted(ROOT.glob('capture-*')):
    if not folder.is_dir():
        continue
    state = json.loads((folder / 'capture-state.json').read_text(encoding='utf-8'))
    samples = [json.loads(line) for line in (folder / 'media-samples.jsonl').read_text(encoding='utf-8').splitlines()]
    phases = [json.loads(line) for line in (folder / 'phase-events.jsonl').read_text(encoding='utf-8').splitlines()]
    starts = [s['monotonicSeconds'] - s['captureElapsedSeconds'] for s in samples if 'monotonicSeconds' in s]
    start = statistics.median(starts)
    for e in phases:
        e['hostMonotonicSeconds'] = start + e['captureElapsedSeconds']
    captures.append({'folder': folder.name, 'state': state, 'samples': samples, 'phases': phases})

specifications = [
    ('u0-next1-before-receiver-resume', 0, 999, 'cold_restore_background', False),
    ('u999-next1-before-u0-resume', 999, 0, 'background_receiver_after_playback', True),
    ('u0-next2-before-u999-resume', 0, 999, 'background_receiver_after_playback', True),
    ('u0-next3-u999-paused-background', 0, 999, 'paused_background_receiver', True),
    ('both-home-system-next1', 0, 999, 'both_instances_on_home_screen', True),
    ('u999-foreground-received-system-next', 0, 999, 'foreground_receiver_system_next_to_background_sender', True),
    ('u999-next2-before-u0-resume', 999, 0, 'background_receiver_additional_media_check', True),
    ('cold-next1-extended-before-resume', 0, 999, 'cold_restore_background_repeat', False),
]
trials = []
for label, sender, receiver, scenario, expected in specifications:
    observation = next(e for e in events if e['label'] == label)
    index = events.index(observation)
    action = next(e for e in reversed(events[:index]) if e['label'] in ('tap', 'system-next-after'))
    begin, end = action['monotonicSeconds'], observation['monotonicSeconds']
    s = observation['data']
    sessions = {x['user']: x for x in s['sessions']}
    same = sessions[sender]['metadataFingerprint'] == sessions[receiver]['metadataFingerprint']
    assert same == expected, label
    receiver_foreground = receiver in s['mestingFocusedUsers']
    trial = {'label': label, 'scenario': scenario, 'senderUser': sender, 'receiverUser': receiver,
             'observationUtc': observation['utc'], 'elapsedAfterActionSeconds': round(end - begin, 3),
             'focusKnown': s['focusKnown'], 'receiverForegroundAtObservation': receiver_foreground,
             'matchingMediaMetadata': same, 'trackSyncObservedBeforeResumingReceiver': same and not receiver_foreground,
             'result': 'PASS' if same else 'FAIL', 'playPauseAccepted': False}
    matching = [c for c in captures if any(begin <= x.get('monotonicSeconds', -1) <= end for x in c['samples'])]
    trial['phaseCaptureFolders'] = [c['folder'] for c in matching]
    applied = [e for c in matching for e in c['phases'] if e['user'] == receiver
               and e['phase'] == 'applicationCompleted' and begin <= e['hostMonotonicSeconds'] <= end]
    trial['receiverApplicationCompletedEvents'] = len(applied)
    if applied:
        trial['firstApplicationCompletedAfterActionSeconds'] = round(min(e['hostMonotonicSeconds'] for e in applied) - begin, 3)
    trials.append(trial)

record = {'version': '1.0.45', 'code': 66, 'candidate': 'sync-fix-r2',
          'installedApkSha256': 'ed450f0b68507fcdcbefeae06145b5143c3147f62d2e94c6d2c35765f3ba5c27',
          'generatedUtc': dt.datetime.now(dt.timezone.utc).isoformat(),
          'authorization': "[REDACTED]",
          'profiles': [0, 999], 'trials': trials,
          'passed': sum(t['result'] == 'PASS' for t in trials),
          'failed': sum(t['result'] == 'FAIL' for t in trials),
          'captures': [{'folder': c['folder'], 'elapsedSeconds': c['state']['elapsedSeconds'],
                        'samples': c['state']['samples'], 'completed': c['state']['state'] == 'complete'} for c in captures],
          'rawLogcatPersisted': False, 'playPauseAcceptance': 'NOT TESTED: same-device clone audio focus interferes.',
          'coldRestoreAcceptance': 'FAILED twice before any playback in receiver; no active foreground media service and pulses stop after a few seconds.',
          'overallBackgroundFixAccepted': False,
          'limitations': ['One physical phone with two Android profiles.', 'No lock-screen or independent-phone play/pause acceptance.',
                          'One additional successful trial has media/focus readback only because the bounded phase capture had already stopped.',
                          'Native wake ownership is a candidate hypothesis; no claim of OS freezer root cause.']}
(ROOT / 'r2-test-results.json').write_text(json.dumps(record, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps({'passed': record['passed'], 'failed': record['failed'], 'captures': record['captures']}, indent=2))
