"""Create an original-member static carrier for the selected phone APK.

These carriers are analysis inputs only, never installation candidates.
"""
from pathlib import Path
import hashlib
import json
import subprocess
import sys
import zipfile

root = Path(__file__).resolve().parent
original = root / 'official-9.5.12-base.apk'
out = root / 'actual-payload'
index = int(sys.argv[1])
member = f'classes{index}.dex'
carrier = out / f'official-9.5.12-classes{index}-analysis-only.apk'
digest = lambda data: hashlib.sha256(data).hexdigest()
with zipfile.ZipFile(original) as source:
    selected = [(name, source.read(name)) for name in ['AndroidManifest.xml', member]]
    if not carrier.exists():
        with zipfile.ZipFile(carrier, 'x', compression=zipfile.ZIP_DEFLATED) as target:
            for name, data in selected:
                target.writestr(name, data)
    with zipfile.ZipFile(carrier) as target:
        assert all(target.read(name) == data for name, data in selected)
    (out / member).write_bytes(source.read(member))
(out / f'classes{index}-provenance.json').write_text(json.dumps({
    'original': str(original), 'originalSha256': digest(original.read_bytes()),
    'carrier': str(carrier), 'carrierSha256': digest(carrier.read_bytes()),
    'members': [{'path': name, 'sha256': digest(data), 'bytes': len(data)} for name, data in selected],
    'limitation': 'Partial original-member static carrier; not installable or runtime evidence.',
}, indent=2), encoding='utf-8')
if len(sys.argv) > 2:
    classes = set(sys.argv[2:])
    result = subprocess.check_output([
        r'D:\CodexCache\android-build\sdk\build-tools\35.0.0\dexdump.exe',
        '-d', str(out / member),
    ]).decode(errors='replace')
    for chunk in result.split('Class #'):
        if any(f"'{name}'" in chunk[:280] for name in classes):
            name = chunk.split('Class descriptor', 1)[1].split("'", 2)[1]
            filename = 'sdk-' + name[1:-1].replace('/', '.').replace('$', '_') + '.txt'
            (out / filename).write_text(chunk.replace('\r\r\n', '\n'), encoding='utf-8')
            print(filename, len(chunk))
print(carrier)
