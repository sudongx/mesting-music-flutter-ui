from pathlib import Path
import json
from summarize import report

out = Path('D:/AnLi/.codex-artifacts/2026-11-01-release132')
beta = {}
for name in ['beta-final.jsonl', 'notes-complete.jsonl']:
    rows, starts, suites, counts = report(out / name)
    assert rows[-1].get('type') == 'done', name
    if name == 'notes-complete.jsonl':
        assert rows[-1]['success'], name
    beta.update(counts)
assert len(beta) == 90 and all(v['failed'] == v['skipped'] == 0 for v in beta.values()), beta
_, _, _, stable = report(out / 'stable-complete.jsonl')
rows, starts, _, search = report(out / 'search-back-player.jsonl')
assert sum(v['passed'] for v in stable.values()) == 19 and not any(v['failed'] for v in stable.values())
assert sum(v['passed'] for v in search.values()) == 11 and not any(v['failed'] for v in search.values())
back = [r for r in rows if r.get('type') == 'testDone' and 'Android back registration' in starts[r['testID']]['name']]
assert len(back) == 1 and back[0]['result'] == 'success'
assert 'No issues found!' in (out / 'analyze-complete.log').read_text(encoding='utf-8-sig')
for name in ['render-first.log', 'render-notes-final.log']:
    assert 'All tests passed!' in (out / name).read_text(encoding='utf-8-sig'), name
result = {
    'beta': {'fileCount': len(beta), 'passed': sum(v['passed'] for v in beta.values()),
             'failed': 0, 'skipped': 0, 'perFile': beta,
             'logs': ['beta-final.jsonl', 'notes-complete.jsonl']},
    'stable': {'passed': 19, 'failed': 0, 'perFile': stable, 'log': 'stable-complete.jsonl'},
    'searchBackPlayer': {'passed': 11, 'failed': 0, 'includesAndroidBackHostRegistration': True,
                        'log': 'search-back-player.jsonl'},
    'analysis': {'issues': 0, 'log': 'analyze-complete.log'},
    'aggregation': 'Latest complete result per file; final notes rerun replaces its full-suite result, never adds overlap.',
    'intermediateFailuresRetained': True,
    'initialFullRunNote': 'The full run overlapped the final history-inset source edit and its older library kernel saw 28dp padding. The complete final notes file is rerun after that edit and replaces its prior per-file result.',
    'renderCount': len(list((out / 'ui').glob('*.png'))),
    'deviceUsed': False, 'realAccountUsed': False,
}
(out / 'host-check-summary.json').write_text(json.dumps(result, indent=2) + '\n', encoding='utf-8')
print({'betaFiles': len(beta), 'betaPassed': result['beta']['passed'],
       'stable': 19, 'searchBackPlayer': 11, 'analysis': 0, 'captures': result['renderCount']})
