"""Preserve the rejected wake-only candidate's actual cold-room outcome."""
from pathlib import Path
import json

root = Path(__file__).resolve().parent
driver = [json.loads(line) for line in (root / 'driver-events.jsonl').read_text(encoding='utf-8').splitlines()]
selected = [next(e for e in driver if e['label'] == label) for label in
            ['r3-cold-both-open', 'r3-before-first-next-background',
             'r3-cold-next1-before-receiver-resume', 'r3-cold-extended-before-resume']]
for e in selected[2:]:
    s = {x['user']: x for x in e['data']['sessions']}
    assert e['data']['mestingFocusedUsers'] == [0]
    assert s[0]['metadataFingerprint'] != s[999]['metadataFingerprint']
phases = [json.loads(line) for line in (root / 'capture-4/phase-events.jsonl').read_text(encoding='utf-8').splitlines()]
receiver = [e for e in phases if e['user'] == 999]
state = json.loads((root / 'capture-4/capture-state.json').read_text(encoding='utf-8'))
record = {'candidate': 'room-lease-r3', 'installation': json.loads((root / 'r3-installation.json').read_text()),
          'result': 'REJECTED', 'coldBackgroundTrackSyncPassed': False,
          'observations': selected, 'boundedCaptureState': state,
          'receiverNativeWakeAcquiredEvents': sum(e['phase'] == 'wakeAcquired' for e in receiver),
          'receiverLastObservedPhaseSeconds': max(e['captureElapsedSeconds'] for e in receiver),
          'receiverAppliedCommands': sum(e['phase'] == 'applicationCompleted' for e in receiver),
          'diagnosisLimit': 'Wake acquisition alone did not establish continued background execution; no claim of OS freezer root cause.',
          'playPauseAccepted': False, 'rawLogcatPersisted': False}
(root / 'r3-test-results.json').write_text(json.dumps(record, indent=2), encoding='utf-8')
print(json.dumps({k: record[k] for k in ['result', 'receiverNativeWakeAcquiredEvents',
                                       'receiverLastObservedPhaseSeconds', 'receiverAppliedCommands']}))
