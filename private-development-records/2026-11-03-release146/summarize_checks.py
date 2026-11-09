"""Replace failed suites only with complete-file successful reruns, never sum retries."""
from collections import Counter, defaultdict
import hashlib
import json
from pathlib import Path

root = Path('D:/AnLi')
out = root / '.codex-artifacts/2026-11-03-release146'


def read(name):
    suites, tests, counts, failures = {}, {}, defaultdict(Counter), []
    done = None
    path = out / name
    for line in path.read_text('utf-8-sig', errors='replace').splitlines():
        try:
            event = json.loads(line)
        except ValueError:
            continue
        if not isinstance(event, dict):
            continue
        kind = event.get('type')
        if kind == 'suite':
            suite = event['suite']
            suites[suite['id']] = suite['path'].replace('\\', '/')
        elif kind == 'testStart':
            test = event['test']
            tests[test['id']] = test
        elif kind == 'testDone' and not event.get('hidden', False):
            test = tests[event['testID']]
            file = suites[test['suiteID']]
            result = 'skipped' if event.get('skipped') else event['result']
            counts[file][result] += 1
            if result not in ('success', 'skipped'):
                failures.append({'file': file, 'name': test['name'], 'result': result})
        elif kind == 'done':
            done = event['success']
    return {'completeAndSuccessful': done is True, 'perFile': dict(counts),
            'counts': dict(sum(counts.values(), Counter())),
            'files': len(counts), 'failures': failures,
            'log': name, 'logSha256': hashlib.sha256(path.read_bytes()).hexdigest()}


selected = json.loads((out / 'beta-files.json').read_text('utf-8-sig'))
selected = {str(root / file).replace('\\', '/') for file in selected}
first = read('beta-complete.jsonl')
per_file = dict(first['perFile'])
provenance = {path: 'beta-complete.jsonl' for path in per_file}
reruns = []
for name in ['beta-affected-complete.jsonl', 'beta-final-current-complete.jsonl']:
    report = read(name)
    assert report['completeAndSuccessful'], name
    reruns.append(report)
    for path, counts in report['perFile'].items():
        if path in selected:
            per_file[path] = counts
            provenance[path] = name
assert set(per_file) == selected, (set(per_file) - selected, selected - set(per_file))
assert all(set(counts) <= {'success', 'skipped'} for counts in per_file.values())
merged = {'completeAndSuccessful': True, 'files': len(per_file),
          'counts': dict(sum(per_file.values(), Counter())), 'perFile': per_file,
          'completeFileRerunProvenance': provenance,
          'singleCleanInvocation': False,
          'initialFailuresRetained': first['failures'],
          'rerunLogs': [report['log'] for report in reruns]}
summary = {'beta-complete.jsonl': merged}
for name in ['stable-complete.jsonl', 'search-back-player.jsonl',
             'stable-legacy-playlist.jsonl', 'visual-round1-ui-corrected.jsonl',
             'visual-round1-footprint.jsonl', 'visual-round2-ui.jsonl',
             'formal-regression.jsonl']:
    summary[name] = read(name)
    assert summary[name]['completeAndSuccessful'], name
analysis = (out / 'analyze-final.log').read_text('utf-8-sig', errors='replace')
summary['analysisPassed'] = 'No issues found!' in analysis
assert summary['analysisPassed'], analysis
summary['analysisLog'] = 'analyze-final.log'
summary['initialAnalysisLintCorrected'] = 'unused Cupertino import in new UI fixture'
summary['initialCaptureCompileErrorCorrected'] = 'fixture title passed to recording constructor'
summary['deviceAccess'] = False
(out / 'host-check-summary.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({name: {'files': report['files'], 'counts': report['counts']}
                  for name, report in summary.items() if isinstance(report, dict)}, indent=2))
