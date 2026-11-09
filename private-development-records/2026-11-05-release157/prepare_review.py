"""Snapshot the current dirty source and make original-byte analysis carriers.

Nothing is installed or executed on a device. Each carrier is an intentionally
incomplete APK-shaped container for JADX, never a distributable application.
"""
from pathlib import Path
import hashlib
import json
import os
import re
import subprocess
import zipfile

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
os.environ['GIT_OPTIONAL_LOCKS'] = '0'

def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

baseline = OUT / 'state-before.json'
if not baseline.exists():
    previous = json.loads((ROOT / '.codex-artifacts/2026-11-05-session156-handoff/after.json').read_text('utf-8'))
    for entry in previous['files'] + previous['frozenArtifacts']:
        path = ROOT / entry['path']
        assert path.stat().st_size == entry['bytes'] and digest(path) == entry['sha256'], entry['path']
    selected = subprocess.check_output(['git', 'ls-files', '--cached', '--others', '--exclude-standard', '-z'], cwd=ROOT).decode('utf-8').split('\0')
    files = [{'path': p, 'sha256': digest(ROOT / p), 'bytes': (ROOT / p).stat().st_size}
             for p in selected if p and (ROOT / p).is_file() and not p.startswith('android/build/')]
    record = {
        'branch': subprocess.check_output(['git', 'branch', '--show-current'], cwd=ROOT).decode().strip(),
        'head': subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT).decode().strip(),
        'indexEmpty': not subprocess.check_output(['git', 'diff', '--cached', '--name-only'], cwd=ROOT).strip(),
        'source': files, 'frozenArtifacts': previous['frozenArtifacts'],
        'lockSha256': previous['lockSha256'], 'signingSha256': previous['signingSha256'],
    }
    baseline.write_text(json.dumps(record, ensure_ascii=False, indent=2), 'utf-8')
    print('Protected', len(files), 'source paths and', len(previous['frozenArtifacts']), 'frozen artifacts')

provenance = []
targets = {
    'kugou': (ROOT / '.codex-artifacts/2026-11-04-release152-review/private/kugou-20.8.6.apk', ['classes12.dex']),
    'netease': (ROOT / '.codex-artifacts/2026-11-01-together-history-review/com.netease.cloudmusic-9.6.15.apk', ['classes6.dex', 'classes15.dex', 'classes17.dex']),
}
for platform, (source, members) in targets.items():
    with zipfile.ZipFile(source) as archive:
        for member in members:
            carrier = OUT / (platform + '-' + member.replace('.dex', '-analysis-only.apk'))
            payload = {'AndroidManifest.xml': archive.read('AndroidManifest.xml'), 'classes.dex': archive.read(member)}
            if not carrier.exists():
                with zipfile.ZipFile(carrier, 'x', compression=zipfile.ZIP_DEFLATED) as target:
                    for name, data in payload.items():
                        target.writestr(name, data)
            with zipfile.ZipFile(carrier) as target:
                assert all(target.read(n) == b for n, b in payload.items())
            provenance.append({'platform': platform, 'source': str(source), 'sourceSha256': digest(source),
                               'member': member, 'memberSha256': hashlib.sha256(payload['classes.dex']).hexdigest(),
                               'carrier': str(carrier), 'carrierSha256': digest(carrier),
                               'scope': 'Exact selected DEX and original manifest only; no execution or full-package equivalence.'})
(OUT / 'carrier-provenance.json').write_text(json.dumps(provenance, indent=2), 'utf-8')
print('Original-byte analysis carriers verified:', len(provenance))
