from pathlib import Path
import json
from summarize import report

out = Path('D:/AnLi/.codex-artifacts/2026-11-01-release130')
rows, starts, suites, beta = report(out / 'beta-final.jsonl')
assert rows[-1].get('type') == 'done' and rows[-1].get('success')
assert len(beta) == 85 and all(v['failed'] == v['skipped'] == 0 for v in beta.values())
_, _, _, stable = report(out / 'stable-complete.jsonl')
search_rows, search_starts, _, search = report(out / 'search-back-player-final.jsonl')
assert sum(v['passed'] for v in stable.values()) == 19 and all(v['failed'] == 0 for v in stable.values())
assert sum(v['passed'] for v in search.values()) == 11 and all(v['failed'] == 0 for v in search.values())
back = [r for r in search_rows if r.get('type') == 'testDone'
        and 'Android back registration' in search_starts[r['testID']]['name']]
assert len(back) == 1 and back[0]['result'] == 'success'
assert 'No issues found!' in (out / 'analyze-complete.log').read_text(encoding='utf-8-sig')
summary = {
    'beta': {'fileCount': len(beta), 'passed': sum(v['passed'] for v in beta.values()),
             'failed': 0, 'skipped': 0, 'perFile': beta, 'log': 'beta-final.jsonl'},
    'stable': {'passed': 19, 'failed': 0, 'perFile': stable, 'log': 'stable-complete.jsonl'},
    'searchBackPlayer': {'passed': 11, 'failed': 0, 'log': 'search-back-player-final.jsonl',
                         'includesAndroidBackHostRegistration': True},
    'analysis': {'issues': 0, 'log': 'analyze-complete.log'},
    'aggregation': 'Final complete 85-file run only; no double counting focused reruns. Search/back/player is a separate 11-test selection.',
    'intermediateFailuresRetained': True, 'deviceUsed': False, 'realAccountUsed': False,
}
(out / 'host-check-summary.json').write_text(json.dumps(summary, indent=2) + '\n', encoding='utf-8')
print({'betaFiles': len(beta), 'betaPassed': summary['beta']['passed'], 'stablePassed': 19,
       'searchBackPlayerPassed': 11, 'analysisIssues': 0})
