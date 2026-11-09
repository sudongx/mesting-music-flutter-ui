"""Observe the same recording and pause the following song after natural end."""
import json
import re
import time
import phone

seen_target = False
started = time.monotonic()
reason = 'observation-deadline'
row = None
while time.monotonic() - started < 600:
    if (phone.ROOT / 'stop-official-watch').exists():
        reason = 'requested-stop'
        break
    text = phone.shell('dumpsys', 'media_session')
    marker = text.find('package=com.netease.cloudmusic')
    block = text[marker:marker + 3200] if marker >= 0 else ''
    state = re.search(r'state=PlaybackState \{state=([^,]+), position=(\d+)', block)
    meta = re.search(r'metadata: [^\n]*description=([^\r\n]+)', block)
    row = {'at': phone.now(), 'state': state.group(1) if state else None,
        'reportedPositionMs': int(state.group(2)) if state else None,
        'description': meta.group(1) if meta else None}
    with (phone.ROOT / 'official-sample-observations.jsonl').open('a', encoding='utf-8') as output:
        output.write(json.dumps(row, ensure_ascii=False) + '\n')
    description = row['description'] or ''
    is_target = description.lower().startswith('canon in d') and 'brooklyn duo' in description.lower()
    if is_target:
        seen_target = True
    elif seen_target and description:
        reason = 'target-track-transition'
        selected = re.search(r'Media button session is ([^\r\n]+)', text)
        if selected and 'com.netease.cloudmusic/' in selected.group(1):
            phone.shell('input', 'keyevent', '127')
            phone.record('pause-official-following-track', observed=row)
        break
    time.sleep(2)
phone.record('official-watch-finished', reason=reason, targetSeen=seen_target)
print(json.dumps({'reason': reason, 'targetSeen': seen_target, 'lastObservation': row}, ensure_ascii=False), flush=True)
