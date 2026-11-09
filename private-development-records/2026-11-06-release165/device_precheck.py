"""Read only the authorized phone and target package's public OS metadata."""
import json
import re
import subprocess
from pathlib import Path

out = Path(__file__).resolve().parent
adb = Path('D:/CodexCache/android-build/sdk/platform-tools/adb.exe')
serial = 'eb293ac2'
assert adb.is_file()

def call(*args):
    return subprocess.check_output([str(adb), '-s', serial, *args],
        stderr=subprocess.STDOUT, timeout=25).decode('utf-8', errors='replace')

assert call('get-state').strip() == 'device'
package = call('shell', 'dumpsys', 'package', 'com.mesting.music')
version = re.search(r'\bversionName=([^\s]+)', package)
code = re.search(r'\bversionCode=(\d+)', package)
first = re.search(r'firstInstallTime=([^\r\n]+)', package)
assert version and code and first
state = {
    'serial': serial, 'adb': str(adb), 'package': 'com.mesting.music',
    'model': call('shell', 'getprop', 'ro.product.model').strip(),
    'version': version[1], 'code': int(code[1]), 'firstInstallTime': first[1].strip(),
    'accountPrivateFilesRead': False, 'smsTriggered': False,
}
(out / 'device-before-install.json').write_text(json.dumps(state, indent=2), 'utf-8')
print({k: state[k] for k in ('model', 'version', 'code', 'firstInstallTime')})
