"""Small scoped ADB helper for this authorized observation; no app installation."""
from pathlib import Path
import datetime
import json
import re
import subprocess
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent
CONTEXT = json.loads((ROOT / 'context-private.json').read_text(encoding='utf-8'))
ADB = [CONTEXT['adb'], '-s', CONTEXT['serial']]

def now():
    return datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=8))).isoformat()

def run(*arguments, raw=False, timeout=25):
    result = subprocess.run(ADB + list(arguments), capture_output=True, timeout=timeout)
    if result.returncode:
        raise RuntimeError((result.stderr + result.stdout).decode('utf-8', errors='replace')[:800])
    return result.stdout if raw else result.stdout.decode('utf-8', errors='replace')

def shell(*arguments, timeout=25):
    return run('shell', *map(str, arguments), timeout=timeout)

def record(action, **details):
    with (ROOT / 'actions-private.jsonl').open('a', encoding='utf-8') as output:
        output.write(json.dumps({'at': now(), 'action': action, **details}, ensure_ascii=False) + '\n')

def snapshot(name):
    assert re.fullmatch(r'[a-z0-9-]+', name)
    image = ROOT / (name + '.png')
    image.write_bytes(run('exec-out', 'screencap', '-p', raw=True))
    record('screenshot', file=image.name)
    # The dump is our own temporary diagnostic file, not an application file.
    remote = '/data/local/tmp/mesting-duration-139-ui.xml'
    shell('rm', '-f', remote)
    try:
        result = shell('uiautomator', 'dump', remote, timeout=35)
    except (RuntimeError, subprocess.TimeoutExpired) as error:
        record('ui-dump-unavailable', error=str(error)[:500])
        print(json.dumps({'image': str(image), 'uiAvailable': False, 'error': str(error)[:400]}, ensure_ascii=False))
        return
    text = run('exec-out', 'cat', remote)
    if not text.lstrip().startswith('<?xml'):
        print(json.dumps({'image': str(image), 'uiAvailable': False, 'dumpResult': result[-300:]}, ensure_ascii=False))
        return
    (ROOT / (name + '-private.xml')).write_text(text, encoding='utf-8')
    tree = ET.fromstring(text)
    items = []
    for node in tree.iter('node'):
        item = {key: node.get(key) for key in ['text', 'content-desc', 'resource-id', 'bounds', 'clickable', 'package']}
        if item['bounds'] != '[0,0][0,0]' and (item['text'] or item['content-desc'] or item['clickable'] == 'true'):
            item['text'] = (item['text'] or '')[:260]
            item['content-desc'] = (item['content-desc'] or '')[:260]
            items.append(item)
    print(json.dumps({'image': str(image), 'nodes': items}, ensure_ascii=False))

if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    action = sys.argv[1]
    if action == 'snapshot':
        snapshot(sys.argv[2])
    elif action == 'screen':
        name = sys.argv[2]
        assert re.fullmatch(r'[a-z0-9-]+', name)
        target = ROOT / (name + '.png')
        target.write_bytes(run('exec-out', 'screencap', '-p', raw=True))
        record('screenshot', file=target.name)
        print(target)
    elif action == 'tap':
        x, y = map(int, sys.argv[2:4])
        record('tap', x=x, y=y)
        print(shell('input', 'tap', x, y))
    elif action == 'back':
        record('back')
        print(shell('input', 'keyevent', 4))
    elif action == 'swipe':
        values = list(map(int, sys.argv[2:]))
        record('swipe', coordinates=values)
        print(shell('input', 'swipe', *values))
    else:
        raise ValueError('Unsupported scoped helper action')
