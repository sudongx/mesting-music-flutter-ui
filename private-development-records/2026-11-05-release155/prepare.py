"""Record the authorized repair baseline without changing existing inputs."""
from pathlib import Path
import hashlib
import json
import os
import subprocess
import zipfile

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-11-05-release155'
os.environ['GIT_OPTIONAL_LOCKS'] = '0'

def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

assert not (OUT / 'state-before.json').exists()
prior = json.loads((ROOT / '.codex-artifacts/2026-11-05-session-handoff154/verification-after.json').read_text('utf-8'))
for item in prior['frozenArtifactsChecked']:
    path = ROOT / item['path']
    assert path.stat().st_size == item['bytes'] and digest(path) == item['sha256'], item['path']
selected = subprocess.check_output(['git', 'ls-files', '--cached', '--others', '--exclude-standard', '-z'], cwd=ROOT).decode('utf-8').split('\0')
source = []
with zipfile.ZipFile(OUT / 'source-before.zip', 'x', compression=zipfile.ZIP_DEFLATED, compresslevel=3) as archive:
    for relative in sorted(set(selected) - {''}):
        path = ROOT / relative
        if not path.is_file() or relative.startswith('android/build/'):
            continue
        assert not set(path.relative_to(ROOT).parts) & {'.codex-artifacts', '.git', '.dart_tool', 'build', '.gradle'}
        assert path.suffix.lower() not in {'.jks', '.keystore', '.p12', '.pfx', '.apk', '.aab'}
        assert path.name not in {'.env', 'local.properties', 'key.properties'}
        data = path.read_bytes()
        source.append({'path': relative, 'sha256': hashlib.sha256(data).hexdigest(), 'bytes': len(data)})
        archive.writestr(relative, data)
record = {
    'branch': subprocess.check_output(['git', 'branch', '--show-current'], cwd=ROOT, text=True).strip(),
    'head': subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip(),
    'indexEmpty': not subprocess.check_output(['git', 'diff', '--cached', '--name-only'], cwd=ROOT).strip(),
    'source': source,
    'frozenArtifacts': prior['frozenArtifactsChecked'],
    'lockSha256': digest(ROOT / 'pubspec.lock'),
    'signingSha256': digest(ROOT / '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore'),
    'deviceAccess': False, 'accountAccess': False, 'backendAccess': False,
}
assert record['branch'] == 'beta' and record['head'] == 'b6bcd5425e0df3e03febdd460b56d0ed42004c52' and record['indexEmpty']
(OUT / 'state-before.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'protectedArtifacts': len(record['frozenArtifacts']), 'sourceFilesBackedUp': len(source), 'indexEmpty': True}))
