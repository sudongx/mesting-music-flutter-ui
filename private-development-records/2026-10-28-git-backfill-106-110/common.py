"""Bounded release-archive helpers. Credentials never leave process memory."""
from __future__ import annotations

import hashlib
import json
import os
from pathlib import Path, PurePosixPath
import subprocess

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
REPO = 'Mesting42/mesting-music-flutter'
BASELINE = 'dbc5e78d05570c26f56fe5c5773245737a464a5f'
MAIN = 'eb49d72d3c73aafc50db33ba1b224559e2ca279f'
CERT = '8CE2203AD821AD8D38576F9AE86350D98254AC05F2CB974E773C1973B22E0333'
ARCHIVE_DOC = 'docs/version-archive/RELEASE-BACKFILL-2026-10-28-v106-v110.md'
ROWS = []
for minor in range(6, 11):
    version = f'1.0.{minor}'
    ROWS.append({
        'version': version, 'code': minor + 21, 'tag': f'v{version}',
        'apk': f'release/Mesting-Music-v{version}.apk',
        'zip': f'Mesting-Music-v{version}-source.zip',
        'evidence': f'.codex-artifacts/2026-10-28-release{100+minor}',
        'manifest': f'docs/version-archive/v{version}-source-manifest.json',
        'fixes': f'docs/fixes-2026-10-28-v{version}.md',
        'handoff': f'HANDOFF-CURRENT-SESSION-2026-10-28-v{version}.md',
        'prerelease': False,
    })


def git(*args, data=None, env=None):
    effective = os.environ.copy()
    effective.update({'GIT_TERMINAL_PROMPT': '0', 'GCM_INTERACTIVE': 'Never'})
    if env:
        effective.update(env)
    result = subprocess.run(['git', *map(str, args)], cwd=ROOT,
                            input=data, capture_output=True, env=effective)
    if result.returncode:
        raise RuntimeError(result.stderr.decode('utf-8', errors='replace'))
    return result.stdout


def sha(path):
    with Path(path).open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest().upper()


def read_json(path):
    return json.loads(Path(path).read_text(encoding='utf-8-sig'))


def json_bytes(value):
    return (json.dumps(value, ensure_ascii=False, indent=2) + '\n').encode('utf-8')


def save(path, value):
    Path(path).parent.mkdir(parents=True, exist_ok=True)
    Path(path).write_bytes(json_bytes(value))


def safe_path(name):
    """Allow portable source only, including the reviewed tiny test ZIP fixture."""
    p = PurePosixPath(name)
    assert not p.is_absolute() and '..' not in p.parts and '\\' not in name
    assert not any(x.lower() in {'.git', '.codex-artifacts', '.codex-backups',
        '.codex-temp', '.dart_tool', '.gradle', 'build', 'coverage'} for x in p.parts)
    assert p.suffix.lower() not in {'.apk', '.jks', '.keystore', '.pfx', '.p12'}
    assert p.suffix.lower() != '.zip' or name == 'test/support/release_notes_apk_fixture.zip'
    assert p.name.lower() not in {'key.properties', 'local.properties', 'token.json', 'credentials.json'}
    assert not p.name.startswith('.env') or p.name in {'.env.example', '.env.sample'}


def tree_files(commit):
    result = {}
    for record in git('ls-tree', '-rz', commit).split(b'\0'):
        if record:
            meta, name = record.split(b'\t', 1)
            mode, kind, oid = meta.decode().split()
            assert kind == 'blob'
            result[name.decode('utf-8')] = (mode, oid)
    return result
