"""Compare matching successful on-device FrameTiming stages, not system FPS."""
from collections import Counter
from pathlib import Path
import json, re

ROOT = Path('D:/AnLi'); OUT = Path(__file__).resolve().parent
DEVICE = OUT / 'device'
before = json.loads((DEVICE / 'before-flow-report.json').read_text('utf8'))
after = json.loads((DEVICE / 'after-flow-report.json').read_text('utf8'))
interruption_path = DEVICE / 'after-run-interruption.json'
interruption = json.loads(interruption_path.read_text('utf8')) if interruption_path.exists() else None

def stats(samples, hz=120):
    def values(key): return sorted(row[key] / 1000 for row in samples)
    def percentile(values, p): return round(values[int((len(values)-1)*p)], 3) if values else None
    result = {'frames': len(samples)}
    for key in ['build', 'raster']:
        times = values(key + 'Us')
        result.update({key + 'P50Ms': percentile(times, .5), key + 'P90Ms': percentile(times, .9), key + 'P99Ms': percentile(times, .99),
                       key + 'Over16_67Percent': round(sum(t > 16.667 for t in times) / len(times) * 100, 3) if times else None,
                       key + 'OverDisplayBudgetPercent': round(sum(t > 1000/hz for t in times) / len(times) * 100, 3) if times else None})
    return result

def successful(report):
    accepted = {(r['scenario'], r['phase']) for r in report['session']['records'] if r['status'] == 'passed'}
    return {(s['environment'].get('scenario'), s['environment'].get('phase')): s for s in report['segments']
            if (s['environment'].get('scenario'), s['environment'].get('phase')) in accepted and len(s.get('samples', [])) >= 25}

def summary(report):
    records = report['session']['records']
    return {'status': report['session']['status'], 'recordCount': len(records), 'statuses': dict(Counter(r['status'] for r in records)),
            'frames': sum(len(s.get('samples', [])) for s in report['segments']), 'version': report['session']['environment'].get('appVersion'),
            'failures': [{'scenario': r['scenario'], 'phase': r['phase'], 'reason': r.get('reason')} for r in records if r['status'] == 'failed'],
            'skipReasons': dict(Counter(r.get('reason', 'unspecified') for r in records if r['status'] == 'skipped')),
            'platformRestored': report['session'].get('platformRestored')}

a, b = successful(before), successful(after)
same_original_platform = before['session'].get('originalPlatform') == after['session'].get('originalPlatform')
# Record this exclusion before inspecting the new timing values. The current
# production history routes render Mesting's account guard, not platform history.
guarded_history_scenarios = {'netease/history', 'kugou/history'}
keys = sorted(key for key in a.keys() & b.keys() if key[1] != 'pages' and not key[0].startswith('qishui/')
              and key[0] not in guarded_history_scenarios
              and (same_original_platform or not key[0].startswith('common/')))
assert len(keys) > 50, 'Insufficient comparable successful stages'
pairs = [{'scenario': key[0], 'phase': key[1], 'before': stats(a[key]['samples']), 'after': stats(b[key]['samples'])} for key in keys]
paired = {}
for platform in ['netease', 'kugou', 'common', 'all']:
    selected = [key for key in keys if platform == 'all' or key[0].startswith(platform + '/')]
    paired[platform] = {'stages': len(selected), 'before': stats([row for key in selected for row in a[key]['samples']]),
                        'after': stats([row for key in selected for row in b[key]['samples']])}
soda_records = [r for r in after['session']['records'] if r['scenario'].startswith('qishui/')]
soda_samples = [row for key, seg in b.items() if key[0].startswith('qishui/') for row in seg['samples']]
official_observations = []
for prefix, package, version in [('netease', 'com.netease.cloudmusic', '9.6.15'), ('kugou', 'com.kugou.android', '20.8.6'), ('soda', 'com.luna.music', '21.5.0')]:
    native = (DEVICE / (prefix + '-official-scroll-gfxinfo.txt')).read_text('utf8', errors='replace')
    total = re.search(r'Total frames rendered: (\d+)', native)
    jank = re.search(r'Janky frames: (\d+) \(([0-9.]+)%\)', native)
    legacy = re.search(r'Janky frames \(legacy\): (\d+) \(([0-9.]+)%\)', native)
    official_observations.append({'package': package, 'version': version,
        'nativeHwuiFrames': int(total[1]) if total else None,
        'nativeHwuiJankyFrames': int(jank[1]) if jank else None,
        'nativeHwuiLegacyJankyFrames': int(legacy[1]) if legacy else None,
        'sameMetricAsFlutterFrameTiming': False,
        'note': 'Read-only real discovery/recommendation scroll observation. Native gfxinfo definitions are not compared numerically with Flutter timing percentages; launch ads/popups excluded.'})
result = {
    'version': '1.0.74', 'androidVersionCode': 95, 'date': '2026-11-07',
    'device': {'model': 'Xiaomi 23116PN5BC', 'android': '16', 'physicalViewportPixels': [1080, 2400], 'reportedRefreshHz': 120, 'theme': 'light'},
    'measurement': {'source': 'Production release app FrameTiming build/raster samples', 'systemSurfaceTraceUsedForAppFps': False,
                    'minimumFramesPerSuccessfulStage': 25, 'pairedPagesPhaseExcluded': True, 'fpsClaim': None,
                    'guardedHistoryScenariosExcluded': sorted(guarded_history_scenarios),
                    'beforeOriginalPlatform': before['session'].get('originalPlatform'), 'afterOriginalPlatform': after['session'].get('originalPlatform')},
    'before': summary(before), 'after': summary(after), 'paired': paired, 'pairedStages': pairs,
    'stability': {'afterNativeCrashesObserved': 1 if interruption else 0,
                  'afterResumedFromCheckpoint': interruption is not None,
                  'continuousCrashFreeFullRunAccepted': False if interruption else None,
                  'interruption': interruption,
                  'note': 'A completed checkpoint report does not erase the native crash. User requested evidence only and no product fixes.'},
    'officialOnDeviceObservations': official_observations,
    'officialStaticMethods': {
        'netease': 'ImagePrefetchImpl.prefetch/cancel: disk prefetch, dedup, batches and cancellation',
        'kugou': 'dailybills.a.l and DailyBillCacheModel.e: persistent logical-list lookup and versioned page restoration',
        'soda': 'PreloadTabDataTask.e: conditional once-only prefetch at page completion/message-queue idle; active AB flags unknown',
        'completeOfficialLogicReplicated': False,
        'sodaSelectedDexByteIdentityVerified': True,
    },
    'sodaSeparate': {'beforeHadAutomatedSodaCoverage': False, 'beforeSodaPairedTimingClaim': False,
                     'newScenarioIds': list(dict.fromkeys(r['scenario'] for r in soda_records)), 'statuses': dict(Counter(r['status'] for r in soda_records)),
                     'records': soda_records, 'successfulTiming': stats(soda_samples)},
    'limitations': ['One connected phone; dynamic recommendations, cache warmth, network and temperature can differ.',
                    'Build/raster duration is not measured display presentation FPS. No continuous120FPS guarantee.',
                    'Matched successful stages only; failures/skips remain listed. Old direct root PageController pages stages excluded.',
                    'Common stages are excluded from pairs when original platforms differ; explicit NetEase/Kugou scenarios select their own platform.',
                    'NetEase/Kugou history scenarios render a Mesting-account guard in this run and are excluded from paired results. This diagnostic issue is recorded, not fixed.',
                    'Official native gfxinfo and ads/popups are recorded separately, not mixed into Flutter timing comparisons.',
                    'Soda is measured separately in74;73 automated baseline covered only NetEase/Kugou/common pages.',
                    'The74 run had a native SIGSEGV and was resumed from its saved checkpoint. Post-resume stages use a new process and cache/temperature conditions; stability is not accepted.',
                    'Playback, VIP full media, rewards, cloud cover/history write and NAS deployment are outside this performance acceptance.'],
    'privateEvidenceDirectory': '.codex-artifacts/2026-11-07-release174', 'published': False,
}
target = ROOT / 'docs/performance-2026-11-07-v1.0.74.json'
target.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', 'utf8')
print(json.dumps({'before': result['before'], 'after': result['after'], 'paired': paired, 'sodaStatuses': result['sodaSeparate']['statuses']}, ensure_ascii=False, indent=2))
