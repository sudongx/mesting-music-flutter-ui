"""Create a reviewable disk inventory; this script never removes files."""
from pathlib import Path
import csv
import datetime as dt
import json
import ntpath

out = Path('D:/AnLi/.codex-artifacts/2026-11-02-disk-audit')
def read(name):
    return json.loads((out / name).read_text(encoding='utf-8-sig'))
data = {v: read(v + '-inventory.json') for v in ['C', 'D']}
norm = lambda p: ntpath.normcase(ntpath.normpath(p))
index = {norm(r['Path']): r for d in data.values() for r in d['Directories']}
size = lambda p: index[norm(p)]['Bytes']
gib = lambda n: f'{n / 2**30:.2f}'
ages = {norm(v['Path']): v for v in read('age-details.json')}
alloc = read('C-file-allocation.json')
nodes = read('project-node-modules.json')
nodes.sort(key=lambda r: r['Bytes'], reverse=True)

# Dependency directories are outside installed application folders. Do not
# imply that every dependency is disposable or that network restore is proven.
for row in nodes:
    parent = Path(row['Path']).parent
    row['packageManifestPresent'] = (parent / 'package.json').is_file()
    row['lockfiles'] = [name for name in ['package-lock.json', 'npm-shrinkwrap.json', 'pnpm-lock.yaml', 'yarn.lock', 'bun.lock', 'bun.lockb'] if (parent / name).is_file()]
with (out / '项目依赖目录清单.csv').open('w', encoding='utf-8-sig', newline='') as stream:
    writer = csv.writer(stream)
    writer.writerow(['目录', '逻辑大小GiB', '文件数', '父目录package.json', '父目录锁文件'])
    for row in nodes:
        writer.writerow([row['Path'], gib(row['Bytes']), row['Files'], row['packageManifestPresent'], '; '.join(row['lockfiles'])])

first = [
    ('A1', r'C:\Users\zyt\AppData\Local\Temp', '临时文件；多数为最近7天内生成，需排除正在使用、本次附件及仍需保留的调查文件。'),
    ('A2', r'C:\Users\zyt\AppData\Local\npm-cache', 'npm下载缓存；以后使用可能需要重新下载。'),
    ('A3', r'D:\AnLi\build', 'Mesting Music生成目录；原签名APK已另存release，源码ZIP另存根目录。以后编译需要重建。'),
    ('A4', r'D:\AnLi\.dart_tool', 'Dart/Flutter生成缓存；以后需重新获取依赖并生成。'),
    ('A5', r'D:\CodexCache\npm-npx', '共享npm/npx缓存；涉及多项目工具，后续使用可能需要联网重新下载。'),
    ('A6', r'D:\CodexCache\node-compile-cache', 'Node编译缓存；后续会重新生成。'),
    ('A7', r'D:\zlm\GameViewer\log', '日志及诊断压缩包；需排除活跃日志和仍需留存的故障证据。'),
]
first_total = sum(size(path) for _, path, _ in first)
node_total = sum(row['Bytes'] for row in nodes)
node_toolchain_overlap = sum(row['Bytes'] for row in nodes if norm(row['Path']).startswith(norm(r'D:\Min\建站工具\批量建站工具\coverage\apps-20261013\toolchain') + '\\'))
recycle_total = size(r'C:\$RECYCLE.BIN') + size(r'D:\$RECYCLE.BIN')

lines = ['# C、D盘空间占用与清理候选清单', '',
    '2026-11-02，Asia/Shanghai。仅只读检查并生成此报告；未删除、移动、卸载、清空回收站、修改系统设置或更改工程文件。', '',
    '## 磁盘概况', '',
    '| 磁盘 | 容量GiB | 已用GiB | 可用GiB | 可用比例 |',
    '|---|---:|---:|---:|---:|']
for drive, d in data.items():
    lines.append(f"| {drive}: | {gib(d['TotalBytes'])} | {gib(d['UsedBytes'])} | {gib(d['AvailableBytes'])} | {d['AvailableBytes']/d['TotalBytes']:.1%} |")
lines += ['', '磁盘已用/可用来自卷统计。下方目录大小为可读文件逻辑大小：不跟随链接，未去重NTFS硬链接，也不对所有文件测量压缩/稀疏分配；不能将目录表相加当成真实可释放空间。', '', '## 第一组：优先评估的临时、缓存和构建目录', '',
    f'以下目录合计逻辑大小约 **{gib(first_total)} GiB**，这是待筛选目录上限，不是已经确认能释放的空间。删除范围仍由用户选择，使用中的文件及需保留资料须排除。', '',
    '| 编号 | 路径 | 大小GiB | 影响及筛选条件 |', '|---|---|---:|---|']
for code, path, note in first:
    lines.append(f'| {code} | `{path}` | {gib(size(path))} | {note} |')
lines += ['',
    f"临时目录中，7天前修改的文件仅约 {gib(ages[norm(first[0][1])]['Older7DaysBytes'])} GiB；近期文件也可能是已结束任务的遗留物，但不能仅凭日期判定闲置。GameViewer日志中，7天前修改文件约 {gib(ages[norm(first[-1][1])]['Older7DaysBytes'])} GiB。", '',
    '## 第二组：占用更大，需要先确定使用及保留范围', '',
    '| 编号 | 项目 | 大小GiB | 处理边界 |', '|---|---|---:|---|',
    f'| B1 | 已识别的{len(nodes)}处项目外层 `node_modules` | {gib(node_total)} | 只统计D盘Min/project-zlm/project-zjb/project-tyq下依赖，不包含已安装编辑器自带依赖；需选择不在用的项目、核对本地改包/锁文件；之后需重新安装依赖。完整路径见CSV。 |',
    f"| B2 | `D:\\CodexCache\\android-build\\gradle\\caches` | {gib(size(r'D:\CodexCache\android-build\gradle\caches'))} | 共享Gradle构建缓存；清理会使多个项目重新下载/转换/编译。不是Android SDK/NDK本身。 |",
    f"| B3 | `D:\\Min\\建站工具\\批量建站工具\\coverage\\apps-20261013\\toolchain` | {gib(size(r'D:\Min\建站工具\批量建站工具\coverage\apps-20261013\toolchain'))} | 包含Android SDK、模拟器镜像、JDK和Gradle缓存，不是普通coverage报告。尚未核实是否仍被建站工具引用，暂保留。 |",
    f'| B4 | C、D盘回收站 | {gib(recycle_total)} | C盘{gib(size(r"C:\$RECYCLE.BIN"))}、D盘{gib(size(r"D:\$RECYCLE.BIN"))}；先核对内容。清空后不能再从回收站恢复。 |',
    f"| B5 | `D:\\CodexCache\\mesting120-before`、`mesting121-before`、`mesting121-after` | {gib(sum(size(x) for x in [r'D:\CodexCache\mesting120-before',r'D:\CodexCache\mesting121-before',r'D:\CodexCache\mesting121-after']))} | 版本对照副本，只有核对源文件/试验代码与归档完整后才能考虑；本轮未做重复文件证明。 |", '',
    f'B1与B3中已识别的交叉逻辑大小为 {gib(node_toolchain_overlap)} GiB，各表不应盲目相加。小于64MiB且深于五级的目录可能未单独保留明细，B1为已识别范围而非全盘所有依赖。', '',
    '## 应单独保留或交由系统管理的项目', '',
    '- `C:\\pagefile.sys` 文件长度约25.00 GiB，系统正在使用，未纳入普通文件清理。',
    f"- Windows搜索索引 `C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\Windows.edb`：逻辑大小12.76 GiB，另行测得实际分配 {gib(next(x['AllocatedBytes'] for x in alloc if x['Path'].endswith('Windows.edb')))} GiB，不能用12.76 GiB声称可回收量。未修改索引设置。",
    '- `C:\\Program Files\\WindowsApps\\Deleted` 逻辑大小6.83 GiB，属于系统应用包管理范围，可能与硬链接重复统计，未纳入手动删除候选。',
    '- `C:\\Windows`、WinSxS、Installer、Recovery及系统卷信息不进行目录删除。',
    f"- `C:\\Users\\zyt\\.codex` 共{gib(size(r'C:\Users\zyt\.codex'))} GiB，其中sessions约4.93 GiB、thread_history_1.sqlite约1.57 GiB，包含会话及历史记录，不当普通缓存删除。",
    '- `C:\\Users\\zyt\\.cockpit_tools` 约3.22 GiB，含多实例和账号配置；不整目录清理。',
    '- 豆包User Data约5.70 GiB，LarkShell约6.65 GiB，含配置、用户资料及应用资源；未确认具体缓存范围，不整目录清理。',
    '- `D:\\AnLi\\release`、根目录各版本源码ZIP、`.git`、签名、SDK/定制引擎及未提交源码保留。当前1.0.37 APK和源码包也保留。',
    f"- `D:\\AnLi\\.codex-artifacts` 共{gib(size(r'D:\AnLi\.codex-artifacts'))} GiB，混有私有签名、未归档诊断、逆向证据与构建资料，不能视作统一缓存删除。",
    '- 当前共享Flutter、Android SDK/NDK、JDK以及建站工具的SDK用途保留；历史清理授权不自动沿用到本次。', '',
    '## 两盘主要目录', '']
for drive, d in data.items():
    lines += [f'### {drive}盘', '', '| 一级目录 | 逻辑大小GiB |', '|---|---:|']
    roots = sorted([x for x in d['Directories'] if x['Depth'] == 1], key=lambda x: x['Bytes'], reverse=True)
    for row in roots[:12]:
        lines.append(f"| `{row['Path']}` | {gib(row['Bytes'])} |")
    lines.append('')
lines += ['## 扫描边界', '',
    f"- C盘读取 {data['C']['Files']:,} 个文件、D盘读取 {data['D']['Files']:,} 个文件，仅文件元数据，不读取个人文件内容。",
    f"- C盘跳过{data['C']['SkippedReparsePoints']}处链接/重解析点、遇到{data['C']['ErrorCount']}处权限限制；D盘分别为{data['D']['SkippedReparsePoints']}处和{data['D']['ErrorCount']}处。未提权或改变权限。",
    '- 权限限制包括系统卷信息，因此系统还原点等占用不在可读目录明细中；磁盘卷的总体已用/可用仍已统计。',
    '- 占用会随应用运行变化。未检测所有文件占用锁、未验证所有依赖的可重装性，未对旧副本做逐文件哈希去重。',
    '- 所有新输出仅在本目录；没有执行清理。', '']
(out / '磁盘占用与清理候选.md').write_text('\n'.join(lines).replace('\\\\', '\\'), encoding='utf-8')
summary = {'date':'2026-11-02','readOnlyAudit':True,'cleanupPerformed':False,
    'disks':{v:{k:d[k] for k in ['TotalBytes','UsedBytes','AvailableBytes','Files','ErrorCount']} for v,d in data.items()},
    'firstCandidateDirectoryBytes':first_total,'firstCandidateBytesAreUpperBound':True,
    'projectNodeModulesCount':len(nodes),'projectNodeModulesBytes':node_total,
    'nodeModulesOverlapWithToolchainBytes':node_toolchain_overlap,
    'dependencyParentsWithLockfiles':sum(bool(x['lockfiles']) for x in nodes),
    'recycleBinBytes':recycle_total,'protectedCurrentReleaseAndSource':True}
(out / 'summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(summary,ensure_ascii=False,indent=2))
