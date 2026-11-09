"""Merge complete-file rechecks without adding their test counts twice."""
from pathlib import Path
from datetime import datetime, timezone
import collections
import hashlib
import json

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent


def parse(name):
    suites, tests, counts, failures = {}, {}, {}, []
    done = None
    for line in (OUT / name).read_text('utf-8-sig', errors='replace').splitlines():
        try:
            event = json.loads(line)
        except ValueError:
            continue
        if not isinstance(event, dict):
            continue
        kind = event.get('type')
        if kind == 'suite':
            suites[event['suite']['id']] = event['suite']['path'].replace('\\', '/')
        elif kind == 'testStart':
            tests[event['test']['id']] = event['test']
        elif kind == 'testDone' and not event.get('hidden'):
            test = tests[event['testID']]
            path = suites[test['suiteID']]
            key = 'skipped' if event.get('skipped') else event['result']
            counts.setdefault(path, collections.Counter())[key] += 1
            if key not in {'success', 'skipped'}:
                failures.append({'file': path, 'test': test['name'], 'result': key})
        elif kind == 'done':
            done = event
    assert done is not None and counts, name
    return counts, failures, done


def summary(counts):
    totals = collections.Counter()
    for row in counts.values():
        assert not (row.get('error') or row.get('failure')), row
        totals.update(row)
    return {'files': len(counts), **dict(totals), 'complete': True}


exits = json.loads((OUT / 'check-exits.json').read_text('utf-8-sig'))
assert all(exits[k] == 0 for k in ['stable', 'navigation', 'analysis'])
assert 'No issues found!' in (OUT / 'analyze-final.log').read_text('utf-8-sig')
beta, first_failures, first_done = parse('beta-complete.jsonl')
rechecked = []
if (OUT / 'final-regressions.jsonl').exists():
    rerun, failures, done = parse('final-regressions.jsonl')
    assert done['success'] and not failures
    for path, row in rerun.items():
        assert path in beta
        beta[path] = row
        rechecked.append(path)
assert {row['file'] for row in first_failures}.issubset(rechecked)
stable, stable_fail, stable_done = parse('stable-complete.jsonl')
navigation, nav_fail, nav_done = parse('search-back-player.jsonl')
assert stable_done['success'] and nav_done['success'] and not stable_fail and not nav_fail
beta_summary, stable_summary, nav_summary = map(summary, [beta, stable, navigation])
assert beta_summary['files'] == len(json.loads((OUT / 'beta-files.json').read_text('utf-8'))) == 189
assert stable_summary['success'] == 63 and nav_summary['success'] == 55
before = json.loads((OUT / 'state-before.json').read_text('utf-8'))
unchanged = [row for row in before['source'] if row['path'].startswith(('android/', 'third_party/'))]
for row in unchanged:
    assert hashlib.sha256((ROOT / row['path']).read_bytes()).hexdigest() == row['sha256'], row['path']
assert hashlib.sha256((ROOT / 'pubspec.lock').read_bytes()).hexdigest() == before['lockSha256']
assert len([row for row in unchanged if row['path'].startswith('third_party/ring_download_sdk/')]) == 242
images = sorted((OUT / 'ui-final').glob('*.png'))
assert len(images) == 8
result = {
    'recordedAtUtc': datetime.now(timezone.utc).isoformat(),
    'beta': {**beta_summary, 'mergedFromCompleteFiles': bool(rechecked),
        'firstRunSuccessful': first_done['success'], 'earlierFailuresRetained': first_failures,
        'recheckedFiles': rechecked},
    'stable': stable_summary, 'navigation': nav_summary,
    'betaPerFile': {p: dict(c) for p, c in beta.items()},
    'analysisPassed': True, 'analysisIssues': 0,
    'finalHostImages': [{'file': p.name, 'sha256': hashlib.sha256(p.read_bytes()).hexdigest()} for p in images],
    'allEightHostImagesInspected': True,
    'new157Cases': {p: dict(c) for p, c in beta.items() if '/release_157_' in p},
    'unchangedNativeAndThirdPartySourceFilesVerified': len(unchanged),
    'inheritedOnly': {
        'secureStorageNativeFrom56': {'passed': 164, 'rerunFor157': False},
        'networkAndMediaJvmFrom54': {'passed': 35, 'rerunFor157': False},
        'rustFrom54': {'passed': 136, 'ignoredExternalNetwork': 6, 'rerunFor157': False},
        'ringSdkHistorical': {'passed': 563, 'verifiedSourceFiles': 242, 'rerunFor157': False},
    },
    'physicalDeviceAcceptance': False, 'deviceAccess': False, 'realAccountAccess': False,
    'backendAccess': False, 'gitCommitted': False, 'gitPushed': False, 'published': False,
    'kugouOfficialStatisticsBookingVerified': False, 'nativeQqWechatLoginConnected': False,
}
(OUT / 'host-check-summary.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', 'utf-8')
print(json.dumps({key: result[key] for key in ['beta', 'stable', 'navigation', 'analysisIssues']}, ensure_ascii=True, indent=2))
