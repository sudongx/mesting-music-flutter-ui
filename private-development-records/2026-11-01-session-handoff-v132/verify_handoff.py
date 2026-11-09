from pathlib import Path
import hashlib
import json
import subprocess
import sys
import zipfile

root = Path('D:/AnLi')
out = root / '.codex-artifacts/2026-11-01-session-handoff-v132'
out.mkdir(exist_ok=True)
mode = sys.argv[1]
def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()
def read(path):
    return json.loads(path.read_text(encoding='utf-8-sig'))
def git(*args):
    return subprocess.check_output(['git', *args], cwd=root).decode('utf-8').strip()

assert git('branch', '--show-current') == 'beta'
assert git('rev-parse', 'HEAD') == 'b6bcd5425e0df3e03febdd460b56d0ed42004c52'
assert not git('diff', '--cached', '--name-only')
artifacts = []
for number in range(29, 33):
    version = f'1.0.{number}'
    apk = read(root / f'release/Mesting-Music-v{version}-verification.json')
    source = read(root / f'release/Mesting-Music-v{version}-source-verification.json')
    for path, size, digest in [
        (root / 'release' / apk['file'], apk['fileSize'], apk['sha256']),
        (root / source['sourceZipName'], source['sourceZipSize'], source['sourceZipSha256']),
    ]:
        assert path.stat().st_size == size and sha(path) == digest, str(path)
        artifacts.append({'path': path.relative_to(root).as_posix(), 'bytes': size, 'sha256': digest})

with zipfile.ZipFile(root / 'Mesting-Music-v1.0.32-source.zip') as archive:
    snapshot = json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    mismatches = [item['path'] for item in snapshot['files'] if
                  not (root / item['path']).is_file() or sha(root / item['path']) != item['sha256']]
    expected = [] if mode == 'before' else ['AGENTS.md']
    assert sorted(mismatches) == expected, mismatches
selected = subprocess.check_output(['git', 'ls-files', '--cached', '--others', '--exclude-standard', '-z'], cwd=root).decode('utf-8').split('\0')
hashes = {path: sha(root / path) for path in selected if path and (root / path).is_file()}
status = subprocess.check_output(['git', 'status', '--porcelain=v1', '-z', '--untracked-files=all'], cwd=root).decode('utf-8').split('\0')
counts = {'trackedChanged': sum(bool(line) and not line.startswith('??') for line in status),
          'untracked': sum(line.startswith('??') for line in status)}
result = {'date': '2026-11-01', 'timezone': 'Asia/Shanghai', 'mode': mode,
          'branch': git('branch', '--show-current'), 'head': git('rev-parse', 'HEAD'),
          'indexEmpty': True, 'statusCounts': counts, 'artifacts': artifacts,
          'latestSourceFileCount': len(snapshot['files']),
          'latestSourceMismatches': mismatches, 'workingFileHashes': hashes,
          'deviceUsed': False, 'remoteFetched': False, 'published': False}
if mode == 'after':
    before = read(out / 'verification-before.json')
    changed = [path for path, digest in before['workingFileHashes'].items() if hashes.get(path) != digest]
    added = sorted(set(hashes) - set(before['workingFileHashes']))
    assert changed == ['AGENTS.md'], changed
    assert added == ['HANDOFF-SESSION-2026-11-01-v1.0.32-TO-NEW-CHAT.md'], added
    result['onlyChangedExistingPath'] = changed
    result['onlyAddedPublicPath'] = added
    result['productSourceUnchanged'] = True
    protected = read(root / '.codex-artifacts/2026-11-01-release132/frozen-before.json') + artifacts[-2:]
    for item in protected:
        assert (root / item['path']).stat().st_size == item['bytes']
        assert sha(root / item['path']) == item['sha256'], item['path']
    result['allFrozenArtifactsUnchanged'] = len(protected)
    assert len(protected) == 48
(out / f'verification-{mode}.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({key: value for key, value in result.items() if key not in ['workingFileHashes', 'artifacts']}, ensure_ascii=True, indent=2))
