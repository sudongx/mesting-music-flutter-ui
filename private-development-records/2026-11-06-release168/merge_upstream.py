"""Port the two requested commits without touching the primary Git index/HEAD."""
from pathlib import Path
import json
import subprocess
import time

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
reports = []

def write(path, data):
    # Windows indexing can briefly hold a source file while the large UI patch
    # is being imported. Retry only the exact write; never reset or delete it.
    for attempt in range(8):
        try:
            path.write_bytes(data)
            return
        except OSError:
            if attempt == 7:
                raise
            time.sleep(.25)

for cid in ['454c104', 'bb4b8bc']:
    source = OUT / 'upstream' / cid
    for incoming in (source / 'theirs').rglob('*'):
        if not incoming.is_file():
            continue
        name = incoming.relative_to(source / 'theirs').as_posix()
        if name.startswith('docs/'):
            continue
        local, base = ROOT / name, source / 'base' / name
        theirs = incoming.read_bytes().replace(b'\r\n', b'\n').replace(b'\r', b'')
        if not base.exists():
            assert not local.exists() or local.read_bytes() == theirs, name
            local.parent.mkdir(parents=True, exist_ok=True)
            write(local, theirs)
            status = 'added'
        else:
            assert local.exists(), name
            work = OUT / 'merge' / cid / name
            work.parent.mkdir(parents=True, exist_ok=True)
            inputs = []
            for label, data in [('ours', local.read_bytes()),
                                ('base', base.read_bytes()), ('theirs', theirs)]:
                target = work.with_name(work.name + '.' + label)
                target.write_bytes(data.replace(b'\r\n', b'\n').replace(b'\r', b''))
                inputs.append(target)
            result = subprocess.run(['git', 'merge-file', '-p', *map(str, inputs)],
                                    capture_output=True)
            work.write_bytes(result.stdout)
            if result.returncode == 0:
                write(local, result.stdout)
                status = 'merged'
            elif result.returncode > 0:
                status = 'conflict'
                print('CONFLICT', cid, name, flush=True)
            else:
                raise RuntimeError(result.stderr.decode())
        reports.append({'commit': cid, 'path': name, 'result': status})
        (OUT / 'upstream-integration.json').write_text(
            json.dumps(reports, indent=2), 'utf-8')

print('FILES', len({x['path'] for x in reports}), 'CONFLICTS',
      sum(x['result'] == 'conflict' for x in reports))
