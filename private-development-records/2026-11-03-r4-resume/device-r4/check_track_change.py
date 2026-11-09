"""One authorized track-change case; never changes accounts or room members.

Keep screenshots and hashed media observations private. The separate observer
has its own 175-second deadline; this driver waits at most 25 seconds and never
opens the receiver until it has recorded the background result.
"""
from pathlib import Path
import json
import re
import sys
import time
import device_probe as d

name, mode, requested_sender = sys.argv[1:]
assert re.fullmatch(r'case-[0-9]+', name)
assert mode in ('tap', 'home-next')
sender = int(requested_sender)
assert sender in (0, 999)
receiver = 999 if sender == 0 else 0
path = d.ROOT / (name + '.json')
assert not path.exists(), 'Retain earlier results'
before = d.sample()
sessions = {item['user']: item for item in before['sessions']}
assert set(sessions) == {0, 999}
assert sessions[sender]['metadataPresent'] and sessions[receiver]['metadataPresent']
assert sessions[sender]['metadataFingerprint'] == sessions[receiver]['metadataFingerprint']
baseline = sessions[sender]['metadataFingerprint']
if mode == 'tap':
    assert before['mestingFocusedUsers'] == [sender]
else:
    assert before['focusKnown'] and before['mestingFocusedUsers'] == []
    # A system media command can target another app. Validate its target
    # immediately before dispatch, rather than assuming the last visible app.
    dump = d.shell('dumpsys', 'media_session')
    target = next((line for line in dump.splitlines()
                   if 'Media button session is ' in line), '')
    match = re.search(r'Media button session is ([^/]+)/.*\(userId=(\d+)\)', target)
    assert match and match[1] == d.PACKAGE and int(match[2]) == sender
d.mark(name + '-before', before)
if mode == 'tap':
    # This is the next-track control observed in both restored home screens.
    d.shell('input', 'tap', '935', '2060')
else:
    d.shell('cmd', 'media_session', 'dispatch', 'next')
d.mark(name + '-next', {'sender': sender, 'receiver': receiver, 'mode': mode})
samples = []
success = False
started = time.monotonic()
while time.monotonic() - started < 25:
    time.sleep(2)
    sample = d.sample()
    samples.append(sample)
    current = {item['user']: item for item in sample['sessions']}
    expected_focus = [sender] if mode == 'tap' else []
    if (sample['focusKnown'] and sample['mestingFocusedUsers'] == expected_focus
            and set(current) == {0, 999}
            and current[sender]['metadataFingerprint'] != baseline
            and current[sender]['metadataFingerprint'] == current[receiver]['metadataFingerprint']):
        success = True
        break
# Only fixed booleans and Android profile IDs leave this in-memory service
# dump; never persist the full device service report.
foreground = {}
service_dump = d.shell('dumpsys', 'activity', 'services', d.PACKAGE)
for block in re.split(r'(?m)^\s*\* ServiceRecord', service_dump):
    header = block.splitlines()[0] if block.splitlines() else ''
    match = re.search(r'\bu(\d+)\b', header)
    if match and 'com.ryanheise.audioservice.AudioService' in header:
        foreground[match[1]] = bool(re.search(r'\bisForeground=true\b', block))
result = {'case': name, 'mode': mode, 'sender': sender, 'receiver': receiver,
          'before': before, 'samples': samples,
          'backgroundMatchedBeforeReceiverForeground': success,
          'elapsedSeconds': round(time.monotonic() - started, 2),
          'foregroundAudioServiceByProfile': foreground}
path.write_text(json.dumps(result, indent=2), encoding='utf-8')
d.mark(name + '-result', {'success': success})
print(json.dumps({key: result[key] for key in (
    'case', 'mode', 'sender', 'receiver',
    'backgroundMatchedBeforeReceiverForeground', 'elapsedSeconds',
    'foregroundAudioServiceByProfile')}))
