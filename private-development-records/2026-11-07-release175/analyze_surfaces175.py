"""Separate app-layer presentation evidence from system/global frame counters."""
import json
import re
from pathlib import Path

OUT = Path(__file__).resolve().parent

def analyze(label):
    directory = OUT / 'device' / label
    source = (directory / 'timestats.txt').read_text('utf-8-sig')
    blocks = list(re.finditer(r'layerName = ([^\r\n]+)(.*?)(?=\n\s*layerName = |\Z)', source, re.S))
    own = [block for block in blocks if 'SurfaceView[com.mesting.music/' in block[1] and '(BLAST)' in block[1]]
    assert len(own) == 1, 'Identify the app buffer layer independently'
    name, body = own[0][1], own[0][2]
    result = {'label': label, 'appLayer': name, 'globalCountersUsedAsAppFps': False}
    for field, pattern in {
        'frames': r'totalFrames = (\d+)',
        'timelineFrames': r'totalTimelineFrames = (\d+)',
        'jankyFrames': r'jankyFrames = (\d+)',
        'averageLayerFps': r'averageFPS = ([\d.]+)',
    }.items():
        match = re.search(pattern, body)
        result[field] = float(match[1]) if field == 'averageLayerFps' else int(match[1])
    histogram = re.search(r'present2present histogram is as below:\s*([^\r\n]+)', body)[1]
    buckets = {int(ms): int(count) for ms, count in re.findall(r'(\d+)ms=(\d+)', histogram)}
    result['present2presentHistogramMsBuckets'] = buckets
    result['bucket8msSharePercent'] = round(buckets.get(8, 0) * 100 / sum(buckets.values()), 3)
    result['layerJankyPercent'] = round(result['jankyFrames'] * 100 / result['timelineFrames'], 3)
    latencies = []
    for file in sorted(directory.glob('latency-[0-9].txt')):
        rows = [tuple(map(int, line.split())) for line in file.read_text('utf-8-sig').splitlines()
                if re.fullmatch(r'\d+\s+\d+\s+\d+', line.strip())]
        presents = sorted({row[1] for row in rows if 0 < row[1] < 2**63 - 1})
        intervals = sorted((right - left) / 1e6 for left, right in zip(presents, presents[1:]))
        latencies.append({'file': file.name, 'validActualPresentTimestamps': len(presents),
            'zeroOrSentinelRowsExcluded': sum(row[1] in [0, 2**63 - 1] for row in rows),
            'presentationP50Ms': round(intervals[int((len(intervals)-1)*.5)], 3) if intervals else None,
            'presentationP90Ms': round(intervals[int((len(intervals)-1)*.9)], 3) if intervals else None})
    result['perGestureLatency'] = latencies
    result['actions'] = json.loads((directory / 'actions.json').read_text('utf-8'))
    return result

report = {
    'before': analyze('before74-netease-scroll'),
    'after': analyze('after75-netease-scroll'),
    'overallImprovementAccepted': False,
    'limitations': [
        'Six scroll commands only. ADB command/trace delays differed between runs, and content/cache/temperature/overlay were not fully controlled.',
        'This is the named app SurfaceView TimeStats block, not global SurfaceFlinger or another app overlay FPS.',
        'Histogram buckets are rounded categories; an8ms bucket does not prove all frames met an8.333ms deadline.',
        'Zero/sentinel latency rows are discarded and counted; idle intervals are not assigned a fake low FPS.',
        'Perfetto actual_frame_timeline_slice still has zero named Mesting app layers; system slices do not establish app FPS.',
        'The earlier fixed-coordinate tab captures do not establish completed selections. Use the in-app verified Tab records instead.',
    ],
}
(OUT / 'surface-presentation-summary.json').write_text(json.dumps(report, indent=2) + '\n', 'utf-8')
print(json.dumps({key: {field: report[key][field] for field in ['frames', 'timelineFrames', 'jankyFrames', 'averageLayerFps', 'bucket8msSharePercent', 'layerJankyPercent']} for key in ['before', 'after']}, indent=2))
