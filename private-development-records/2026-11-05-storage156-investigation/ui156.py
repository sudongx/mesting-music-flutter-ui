"""Inspect only fixed Mesting UI labels; never export account or editable text."""
from pathlib import Path
import datetime
import json
import re
import subprocess
import sys
import time
import xml.etree.ElementTree as ET

OUT = Path(__file__).resolve().parent
ADB = r'D:\CodexCache\android-build\sdk\platform-tools\adb.exe'
SERIAL = 'eb293ac2'
PACKAGE = 'com.mesting.music'
TEMP = '/data/local/tmp/mesting-storage156-controlled-ui.xml'
ALLOWED = {
    '发现', '功能', '音乐库', '我的', '设置', '更多', '更多操作', '返回',
    '切换音乐平台', '网易云音乐', '酷狗音乐', '酷狗音乐 · 当前平台',
    '网易云音乐 · 当前平台', '网易云账号', '酷狗账号', '重新恢复',
    '重新登录', '复制恢复诊断', '登录', '欢迎', '手机验证码',
    '切换未完成，请重试；原账号数据已保留。',
    '本机保存的登录密钥已失效，请重新登录此平台；原加密资料已保留',
}

def adb(*args):
    result = subprocess.run([ADB, '-s', SERIAL, *args], capture_output=True,
                            text=True, encoding='utf-8', errors='replace', timeout=30)
    if result.returncode:
        raise RuntimeError('Bounded Mesting UI command failed')
    return result.stdout

action = sys.argv[1]
if action == 'cold':
    adb('shell', 'am', 'force-stop', PACKAGE)
    adb('shell', 'am', 'start', '-n', PACKAGE + '/.CoralLauncher')
    time.sleep(4)
elif action == 'launch':
    adb('shell', 'am', 'start', '-n', PACKAGE + '/.CoralLauncher')
    time.sleep(4)
elif action == 'tap':
    # The caller must use coordinates from the immediately preceding UI dump.
    adb('shell', 'input', 'tap', str(int(sys.argv[2])), str(int(sys.argv[3])))
    time.sleep(3)
elif action == 'back':
    adb('shell', 'input', 'keyevent', 'KEYCODE_BACK')
    time.sleep(2)
elif action != 'inspect':
    raise RuntimeError('Unknown UI action')

adb('shell', 'uiautomator', 'dump', '--compressed', TEMP)
try:
    root = ET.fromstring(adb('shell', 'cat', TEMP))
finally:
    adb('shell', 'rm', '-f', TEMP)
rows = []
for node in root.iter('node'):
    if node.get('package') != PACKAGE or 'EditText' in node.get('class', ''):
        continue
    for field in ['text', 'content-desc']:
        value = node.get(field, '').strip()
        for label in value.splitlines():
            if label.strip() in ALLOWED:
                rows.append({'label': label.strip(), 'bounds': node.get('bounds', ''),
                             'clickable': node.get('clickable') == 'true',
                             'mergedLabelRedacted': value != label})
report = {'at': datetime.datetime.now(datetime.timezone.utc).isoformat(),
          'action': action, 'targetRunning': bool(adb('shell', 'pidof', PACKAGE).strip()),
          'nodes': rows, 'deviceTempRemoved': True}
history = OUT / 'controlled-ui-checks.json'
records = json.loads(history.read_text('utf-8')) if history.exists() else []
records.append(report)
history.write_text(json.dumps(records, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps(report, ensure_ascii=True))
