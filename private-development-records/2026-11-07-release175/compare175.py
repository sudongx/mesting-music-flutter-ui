"""Review comparable production stages without treating build/raster as FPS.

Exclusions are fixed before opening the new timing report: root pages used a
different driver, old history was guarded, and favorites now uses the canonical
production collection surface. Missing/failed/short stages never become passes.
"""
from collections import Counter
from pathlib import Path
import json
import re

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
BEFORE = ROOT / '.codex-artifacts/2026-11-07-release174/device/after-flow-report.json'
AFTER = OUT / 'device/core-flow-report.json'
EXCLUDED = {
    'netease/history': '74 displayed the retired account guard',
    'kugou/history': '74 displayed the retired account guard',
    'common/history': 'history routing now bypasses the retired account guard',
    'netease/favorites': '75 opens the canonical production collection UI',
    'kugou/favorites': '75 opens the canonical production collection UI',
}

def stats(samples, hz=120):
    result = {'frames': len(samples)}
    for key in ['build', 'raster']:
        times = sorted(row[key + 'Us'] / 1000 for row in samples)
        for name, percentile in [('P50Ms', .5), ('P90Ms', .9), ('P99Ms', .99)]:
            result[key + name] = round(times[int((len(times) - 1) * percentile)], 3) if times else None
        for label, budget in [('OverDisplayBudgetPercent', 1000 / hz), ('Over16_67Percent', 16.667)]:
            result[key + label] = round(sum(value > budget for value in times) * 100 / len(times), 3) if times else None
    return result

def accepted(report):
    passed = {(r['scenario'], r['phase']) for r in report['session']['records'] if r['status'] == 'passed'}
    return {(s['environment'].get('scenario'), s['environment'].get('phase')): s
            for s in report['segments']
            if (s['environment'].get('scenario'), s['environment'].get('phase')) in passed
            and len(s.get('samples', [])) >= 25}

def summary(report):
    session = report['session']
    records = session['records']
    return {
        'version': session['environment']['appVersion'],
        'environment': session['environment'],
        'startedAt': session.get('startedAt'), 'updatedAt': session.get('updatedAt'),
        'scope': session['environment'].get('diagnosticScope', 'full'),
        'status': session['status'], 'records': len(records),
        'statuses': dict(Counter(r['status'] for r in records)),
        'frames': sum(len(s.get('samples', [])) for s in report['segments']),
        'platformRestored': session.get('platformRestored'),
        'failures': [r for r in records if r['status'] == 'failed'],
        'skips': [{'scenario': r['scenario'], 'phase': r['phase'], 'reason': r.get('reason')} for r in records if r['status'] == 'skipped'],
    }

before = json.loads(BEFORE.read_text('utf-8-sig'))
after = json.loads(AFTER.read_text('utf-8-sig'))
assert before['session']['environment']['appVersion'] == '1.0.74'
assert after['session']['environment']['appVersion'] == '1.0.75'
assert after['session']['status'] == 'completed'
a, b = accepted(before), accepted(after)
same_original = before['session'].get('originalPlatform') == after['session'].get('originalPlatform')
keys = sorted(key for key in a.keys() & b.keys()
              if key[1] != 'pages' and key[0] not in EXCLUDED
              and (same_original or not key[0].startswith('common/')))
assert keys, 'No comparable production stages'
pairs = [{'scenario': key[0], 'phase': key[1],
          'before': stats(a[key]['samples']), 'after': stats(b[key]['samples'])} for key in keys]
aggregate = {}
for platform in ['netease', 'kugou', 'qishui', 'common', 'all']:
    selected = [key for key in keys if platform == 'all' or key[0].startswith(platform + '/')]
    aggregate[platform] = {'stages': len(selected),
        'before': stats([row for key in selected for row in a[key]['samples']]),
        'after': stats([row for key in selected for row in b[key]['samples']])}
tabs = []
for record in after['session']['records']:
    if not record['scenario'].endswith('/tabs') or record['phase'] != 'pages':
        continue
    segment = next((s for s in after['segments'] if s['environment'].get('scenario') == record['scenario'] and s['environment'].get('phase') == 'pages'), None)
    tabs.append({'record': record, 'timing': stats(segment['samples']) if segment else None,
                 'events': segment.get('events', []) if segment else []})
result = {
    'version': '1.0.75', 'code': 96, 'date': '2026-11-07',
    'measurement': 'Flutter release FrameTiming; not display presentation FPS',
    'passedStageDefinition': 'The allowed action completed and produced nonzero FrameTiming samples; it is not an8.33ms/120FPS performance pass.',
    'minimumFramesPerMatchedPassedStage': 25,
    'excludedScenarios': EXCLUDED, 'allPagesPhasesExcludedFromPairs': True,
    'sameOriginalPlatform': same_original, 'before': summary(before), 'after': summary(after),
    'paired': aggregate, 'pairedStages': pairs, 'verifiedRapidTabs': tabs,
    'continuous120FpsAccepted': False,
    'prior74NativeCrashRemainsHistoricalFailure': True,
    'limitations': [
        '74 full run vs 75 core interaction run: compare matching successful stages only, never aggregate their raw whole-run totals as equivalent work.',
        '74 was resumed after a native crash; the process/cache/temperature may differ. Its failure is not erased by this comparison.',
        '75 reports the embedder requested OpenGLES with shader filters supported.74 did not record its requested/initialized backend, and startup logs did not establish the initialized backend. Differences cannot be causally attributed to one source change.',
        'One phone with dynamic account content, network/cache state and a visible performance overlay; long-term and other-device behavior remain unproven.',
        'A long build/raster frame is not a measured screen presentation interval. Neither refresh rate nor overlay instantaneous FPS establishes continuous120FPS.',
        'The fixed-coordinate gesture captures can miss collapsed Tab controls and are not evidence of twelve completed selections.',
        'Failures and skips remain in the report. Changed favorites/history surfaces are excluded before inspecting results.',
        'No agent-initiated VIP media resolution, rewards, cloud writes, downloads or signer/NAS changes were part of performance acceptance.',
    ],
}
target = ROOT / 'docs/performance-2026-11-07-v1.0.75.json'
target.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', 'utf-8')
print(json.dumps({'after': {k: result['after'][k] for k in ['status', 'records', 'statuses', 'frames', 'environment']},
                  'paired': aggregate, 'tabs': [t['record'] for t in tabs]}, ensure_ascii=False, indent=2))
