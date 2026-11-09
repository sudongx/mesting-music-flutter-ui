"""Define new checks; retain the old check plan as immutable historical input."""
from pathlib import Path
import json

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
BASE = ROOT / '.codex-artifacts/2026-11-07-release175'
for suite in ['beta', 'stable', 'navigation']:
    files = json.loads((BASE / (suite + '-files.json')).read_text('utf-8-sig'))
    assert all((ROOT / file).is_file() for file in files)
    if suite == 'beta':
        files = sorted(set(files) | {p.as_posix().split('/AnLi/')[-1]
            for p in (ROOT / 'test').glob('release_176_*_test.dart')})
    (OUT / (suite + '-files.json')).write_text(json.dumps(files, indent=2) + '\n', 'utf8')
    print(suite, len(files), 'files')
