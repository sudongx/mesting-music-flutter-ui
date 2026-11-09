import json
from pathlib import Path
ROOT = Path('D:/AnLi')
OUT = ROOT/'.codex-artifacts/2026-11-04-release148'
OLD = ROOT/'.codex-artifacts/2026-11-03-release147'
beta = json.loads((OLD/'beta-files.json').read_text('utf-8-sig'))
beta += [p.relative_to(ROOT).as_posix() for p in (ROOT/'test').glob('release_148_*test.dart')]
beta += ['test/beta18_refinements_test.dart']
beta = sorted(set(beta))
(OUT/'beta-files.json').write_text(json.dumps(beta, indent=2)+'\n', 'utf-8')
def suites(*names):
    paths=set()
    for name in names:
        for line in (OLD/name).read_text('utf-8-sig').splitlines():
            try: event=json.loads(line)
            except ValueError: continue
            if isinstance(event, dict) and event.get('type')=='suite':
                paths.add(Path(event['suite']['path']).relative_to(ROOT).as_posix())
    assert paths
    return sorted(paths)
stable = suites('stable-final-ready.jsonl', 'stable-legacy-playlist.jsonl')
navigation = ['test/beta5_ui_test.dart']
(OUT/'stable-files.json').write_text(json.dumps(stable, indent=2)+'\n', 'utf-8')
(OUT/'navigation-files.json').write_text(json.dumps(navigation, indent=2)+'\n', 'utf-8')
print({'betaFiles':len(beta),'stableFiles':stable,'navigation':navigation})
