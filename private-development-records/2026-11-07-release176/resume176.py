"""Resume interrupted host work without accepting a partially completed file."""
from pathlib import Path
import hashlib
import json

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
manifest = json.loads((OUT/'candidate3/build-input.json').read_text('utf8'))
for item in manifest['files']:
    assert hashlib.sha256((ROOT/item['path']).read_bytes()).hexdigest() == item['sha256'], item['path']
rows = []
for line in (OUT/'beta-complete-r3.jsonl').read_text('utf-8-sig').splitlines():
    try:
        row = json.loads(line)
    except ValueError:
        continue
    if isinstance(row, dict):
        rows.append(row)
suites = {row['suite']['id']: row['suite']['path'].split('/AnLi/')[-1]
          for row in rows if row.get('type') == 'suite'}
tests = {row['test']['id']: row['test'] for row in rows if row.get('type') == 'testStart'}
done = {row['testID']: row for row in rows if row.get('type') == 'testDone'}
# A suite may be killed before scheduling its next test. Retest both last
# scheduled suite files and require every started test to have completed.
tail = set(list(suites)[-2:])
accepted = []
for sid, path in suites.items():
    ids = [tid for tid, test in tests.items() if test['suiteID'] == sid]
    if sid not in tail and ids and all(tid in done and done[tid]['result'] == 'success' for tid in ids):
        accepted.append(path)
plan = json.loads((OUT/'beta-files.json').read_text('utf-8-sig'))
remaining = [path for path in plan if path not in accepted]
(OUT/'beta-remaining-r4-files.json').write_text(json.dumps(remaining, indent=2)+'\n', 'utf8')
(OUT/'host-resume.json').write_text(json.dumps({
    'reason': 'Previous execution processes ended before completion; partial files excluded.',
    'candidate3InputsStillMatch': True,
    'completedFileEvidence': 'beta-complete-r3.jsonl',
    'acceptedWholeFiles': accepted,
    'retestFiles': remaining,
}, indent=2)+'\n', 'utf8')
print({'inputHashesMatch': len(manifest['files']), 'completedWholeBetaFiles': len(accepted),
       'remainingWholeBetaFiles': len(remaining)})
