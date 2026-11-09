"""Read-only checks against the received dirty tree and actual build inputs."""
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import hashlib
import json
import subprocess

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent

def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

def git(*args):
    return subprocess.check_output(['git', '--no-optional-locks', *args], cwd=ROOT)

def record(relative):
    path = ROOT / relative
    return {'path': relative, 'bytes': path.stat().st_size, 'sha256': sha(path)}

def verify():
    before = json.loads((OUT / 'before.json').read_text('utf-8'))
    assert git('branch', '--show-current').decode().strip() == before['branch'] == 'beta'
    assert git('rev-parse', 'HEAD').decode().strip() == before['head']
    assert not git('diff', '--cached', '--name-only', '-z')
    for key, name in [('indexSha256', '.git/index'), ('lockSha256', 'pubspec.lock'),
                      ('signingSha256', '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')]:
        assert sha(ROOT / name) == before[key], key
    def issue(row):
        p = ROOT / row['path']
        return row['path'] if (not p.is_file() or sha(p) != row['sha256'] or
                              'bytes' in row and p.stat().st_size != row['bytes']) else None
    with ThreadPoolExecutor(max_workers=6) as pool:
        frozen_issues = [p for p in pool.map(issue, before['frozenArtifacts']) if p]
    assert not frozen_issues, frozen_issues
    assert all((ROOT / row['path']).is_file() for row in before['currentFiles'])
    with ThreadPoolExecutor(max_workers=6) as pool:
        changed = [p for p in pool.map(issue, before['currentFiles']) if p]
    build = json.loads((OUT / 'build-input-final.json').read_text('utf-8'))
    with ThreadPoolExecutor(max_workers=6) as pool:
        input_issues = [p for p in pool.map(issue, build['files']) if p]
    assert not input_issues, input_issues
    old_agents = (OUT / 'AGENTS-before.bin').read_bytes()
    assert (ROOT / 'AGENTS.md').read_bytes().endswith(old_agents)
    assert hashlib.sha256(old_agents).hexdigest() == next(
        row['sha256'] for row in before['currentFiles'] if row['path'] == 'AGENTS.md')
    return before, build, changed

if __name__ == '__main__':
    before, build, changed = verify()
    result = {'oldFrozenArtifacts': len(before['frozenArtifacts']),
              'oldFrozenArtifactsUnchanged': True,
              'oldPathsPreserved': len(before['currentFiles']),
              'buildInputsUnchangedSinceCompilation': len(build['files']),
              'headIndexLockAndSigningUnchanged': True,
              'existingChangedFiles': changed}
    (OUT / 'preservation-pre-freeze.json').write_text(
        json.dumps(result, ensure_ascii=False, indent=2) + '\n', 'utf-8')
    print(json.dumps(result, ensure_ascii=False, indent=2))
