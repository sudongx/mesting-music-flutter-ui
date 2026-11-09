"""Readable measured results; never describe a resumed crash run as stable."""
from pathlib import Path
import json

ROOT = Path('D:/AnLi')
data = json.loads((ROOT / 'docs/performance-2026-11-07-v1.0.74.json').read_text('utf8'))

def fmt(value):
    return '无有效数据' if value is None else f'{value:.3f}'

def change(before, after):
    if before is None or after is None or before == 0:
        return '不计算'
    delta = (after / before - 1) * 100
    return f'{"增加" if delta > 0 else "减少"}{abs(delta):.1f}%'

lines = [
    '# 1.0.73 → 1.0.74 实机性能对比\n\n',
    '**先给数据，停止产品修改。** 本轮新版出现1次原生渲染SIGSEGV，后从保存断点补采；当前为测量候选，稳定性未通过。新增问题等待用户确认后再修。\n\n',
    '同一台小米23116PN5BC、Android16、1080×2400、报告刷新率120Hz，生产release内FrameTiming采样。下列毫秒数越低越好，P90指90%的采样帧不超过的耗时，不等于屏幕实显FPS。\n\n',
    '| 平台 | 配对阶段 | 指标 | 1.0.73 | 1.0.74 | 变化 |\n',
    '|---|---:|---|---:|---:|---:|\n',
]
for platform, name in [('netease', '网易云'), ('kugou', '酷狗')]:
    row = data['paired'][platform]
    for key, label in [('buildP90Ms', 'UI构建P90(ms)'), ('rasterP90Ms', '栅格化P90(ms)'), ('rasterP99Ms', '栅格化P99(ms)'), ('rasterOver16_67Percent', '栅格化超过16.67ms比例(%)')]:
        a, b = row['before'][key], row['after'][key]
        delta = f'{b-a:+.3f}个百分点' if key.endswith('Percent') and a is not None and b is not None else change(a, b)
        lines.append(f'| {name} | {row["stages"]} | {label} | {fmt(a)} | {fmt(b)} | {delta} |\n')
    lines.append(f'| {name} | {row["stages"]} | 配对阶段内采样帧数 | {row["before"]["frames"]} | {row["after"]["frames"]} | 内容与实际出帧数会变化 |\n')

lines += [
    '\n只配对相同场景与阶段，要求两轮成功且各自至少25帧。排除旧根视口分页、历史账号保护页，以及原平台不同的公共阶段。其余成功的旧收藏界面仍在逐阶段数据中，不能把这些数字当作新版日常收藏入口的专属结果。按帧汇总的P90受各阶段出帧数量影响，不能据此证明每个页面都变快。\n\n',
    '## 汽水本次基线\n\n',
]
soda = data['sodaSeparate']
timing = soda['successfulTiming']
lines.append(f'73没有汽水自动化基线；74新增{len(soda["newScenarioIds"])}个场景。阶段状态：`{json.dumps(soda["statuses"], ensure_ascii=False)}`。成功且不少于25帧的阶段合计{timing["frames"]}帧，UI构建P90 {fmt(timing["buildP90Ms"])}ms、栅格化P90 {fmt(timing["rasterP90Ms"])}ms、栅格化P99 {fmt(timing["rasterP99Ms"])}ms。\n\n')
lines.append('| 场景 | 通过 | 失败 | 跳过 |\n|---|---:|---:|---:|\n')
for scenario in soda['newScenarioIds']:
    rows = [r for r in soda['records'] if r['scenario'] == scenario]
    counts = {s: sum(r['status'] == s for r in rows) for s in ['passed', 'failed', 'skipped']}
    lines.append(f'| {scenario} | {counts["passed"]} | {counts["failed"]} | {counts["skipped"]} |\n')
lines.append('\n搜索场景浏览真实空查询入口，没有自动输入歌名或歌手；歌词使用已有暂停歌曲。采到页面过渡不等于歌曲搜索服务器接受、整曲播放、云端写入或所有列表内容已验收。\n\n')
lines.append('## 整轮与失败记录\n\n')
for key, name in [('before', '73'), ('after', '74')]:
    row = data[key]
    lines.append(f'{name}：{row["recordCount"]}条记录、{row["frames"]}帧，状态`{json.dumps(row["statuses"], ensure_ascii=False)}`。\n\n')
    for failure in row['failures']:
        lines.append(f'- {failure["scenario"]} / {failure["phase"]}：{failure.get("reason")}\n')
    lines.append('\n')
lines += [
    '新版12:09:35发生1次原生崩溃，线程1.raster，栈顶Adreno Vulkan驱动，随后Flutter引擎。精确原因待查。断点完成后仍计这次崩溃，不用应用内的“completed”消除它。网易云/酷狗可配对场景在崩溃前采完；汽水来自续跑的新进程，温度和缓存环境不可完全等同。\n\n',
    '缓存冷启动定点观察：新版约2493ms的首个内容样本已显示旧目录与6张现有封面，但本次受控窗口里服务器目录未更换；新内容与图片一起就绪的替换门控由受控HTTP和真实PNG解码回归证明。旧版也有缓存可见样本，采集时点不同，不据此宣称启动速度提升。\n\n',
    '完整逐阶段毫秒值及超预算比例见[性能JSON](performance-2026-11-07-v1.0.74.json)，新增问题与旧账号源码级清理范围见[观察清单](performance-observations-2026-11-07-v1.0.74.md)。三家官版静态证据、独立原生滚动观察及不可混用的指标口径见[性能说明](performance-2026-11-07-v1.0.74.md)。\n',
]
target = ROOT / 'docs/performance-comparison-2026-11-07-v1.0.74.md'
target.write_text(''.join(lines), 'utf8')
print(str(target))
