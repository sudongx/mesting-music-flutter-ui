"""Small, task-scoped ADB driver for the authorized two-profile sync check.

Screenshots stay local. State samples store media fingerprints, never titles,
account identifiers, credentials, URLs, or unfiltered device dumps.
"""
from pathlib import Path
import datetime as dt
import hashlib
import json
import re
import subprocess
import sys
import time

ROOT = Path(__file__).resolve().parent
ADB = 'D:/CodexCache/android-build/sdk/platform-tools/adb.exe'
SERIAL = 'eb293ac2'
PACKAGE = 'com.mesting.music.beta'
COMPONENT = PACKAGE + '/com.mesting.music.CoralLauncher'


def adb(*args, timeout=12):
    return subprocess.check_output(
        [ADB, '-s', SERIAL, *args], timeout=timeout,
        creationflags=subprocess.CREATE_NO_WINDOW)


def shell(*args):
    return adb('shell', *args).decode('utf-8', errors='replace')


def processes():
    found = {}
    for line in shell('ps', '-A', '-o', 'USER,PID,NAME').splitlines():
        parts = line.split()
        if len(parts) == 3 and parts[2] == PACKAGE:
            m = re.match(r'u(\d+)_', parts[0])
            if m:
                found[int(parts[1])] = int(m[1])
    return found


def sample():
    pids = processes()
    focus = [line for line in shell('dumpsys', 'window').splitlines()
             if 'mCurrentFocus=' in line or 'mFocusedApp=' in line]
    focused_users = sorted({int(m[1]) for line in focus
                            for m in re.finditer(r'\bu(\d+)\b', line)
                            if PACKAGE in line})
    media = shell('dumpsys', 'media_session').splitlines()
    sessions = []
    for i, line in enumerate(media):
        if line.strip() != 'package=' + PACKAGE:
            continue
        owner = next((x for x in reversed(media[max(0, i - 4):i])
                      if 'ownerPid=' in x), '')
        match = re.search(r'ownerPid=(\d+).*userId=(\d+)', owner)
        if not match:
            continue
        # Each Android session begins with an equally indented media-session
        # header. Do not accidentally consume the other clone's metadata.
        j = next((j for j in range(i + 1, len(media))
                  if re.match(r'^    \S', media[j])), len(media))
        block = media[i:j]
        play = next((x for x in block if 'state=PlaybackState' in x), '')
        state = re.search(r'state=([A-Z_]+)\((\d+)\), position=(-?\d+)', play)
        metadata = next((x.strip() for x in block
                         if x.strip().startswith('metadata:')), '')
        s = {'pid': int(match[1]), 'user': int(match[2]),
             'metadataPresent': metadata not in ('', 'metadata: null'),
             'metadataFingerprint': hashlib.sha256(metadata.encode()).hexdigest()[:16]}
        if state:
            s.update(playState=state[1], playStateCode=int(state[2]),
                     positionMs=int(state[3]))
        sessions.append(s)
    return {'utc': dt.datetime.now(dt.timezone.utc).isoformat(),
            'monotonicSeconds': time.monotonic(), 'processes': pids,
            'focusKnown': bool(focus), 'mestingFocusedUsers': focused_users,
            'sessions': sessions}


def mark(label, data=None):
    event = {'label': label, 'utc': dt.datetime.now(dt.timezone.utc).isoformat(),
             'monotonicSeconds': time.monotonic(), 'data': data}
    with (ROOT / 'driver-events.jsonl').open('a', encoding='utf-8') as f:
        f.write(json.dumps(event) + '\n')
    return event


if __name__ == '__main__':
    command, *args = sys.argv[1:]
    if command == 'screen':
        name = args[0]
        assert re.fullmatch(r'[A-Za-z0-9_-]+', name)
        path = ROOT / (name + '.png')
        assert not path.exists(), 'Keep earlier screenshot evidence intact'
        path.write_bytes(adb('exec-out', 'screencap', '-p'))
        print(path)
    elif command == 'sample':
        s = sample()
        mark(args[0], s)
        print(json.dumps(s))
    elif command == 'launch':
        user = int(args[0])
        assert user in (0, 999)
        print(shell('am', 'start', '-W', '--user', str(user), '-n', COMPONENT))
        mark('launch', {'user': user})
    elif command == 'tap':
        x, y = map(int, args)
        assert 0 <= x < 1080 and 0 <= y < 2400
        print(shell('input', 'tap', str(x), str(y)))
        mark('tap', {'x': x, 'y': y})
    elif command == 'home':
        print(shell('input', 'keyevent', 'KEYCODE_HOME'))
        mark('home')
    elif command == 'dispatch-next':
        # Media keys are system-routed. Refuse to dispatch unless the current
        # target is explicitly one of the authorized Mesting sessions.
        dump = shell('dumpsys', 'media_session')
        target = next((line for line in dump.splitlines()
                       if 'Media button session is ' in line), '')
        match = re.search(r'Media button session is ([^/]+)/.*\(userId=(\d+)\)', target)
        assert match and match[1] == PACKAGE and int(match[2]) in (0, 999), 'Media target is not authorized Mesting'
        user = int(match[2])
        mark('system-next-before', {'targetUser': user})
        print(shell('cmd', 'media_session', 'dispatch', 'next'))
        print(json.dumps({'targetUser': user}))
        mark('system-next-after', {'targetUser': user})
    else:
        raise SystemExit('Unsupported action')
