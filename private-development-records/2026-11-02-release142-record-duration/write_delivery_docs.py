"""Write the final three-part release handoff after actual APK validation."""
from pathlib import Path
import hashlib
import json
import zipfile

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent
def load(path): return json.loads(path.read_text(encoding='utf-8-sig'))
checks = load(out / 'host-check-summary.json')
assert checks['analysisPassed'] and all(checks[name]['completeAndSuccessful'] for name in (
    'beta-complete.jsonl', 'stable-complete.jsonl', 'search-back-player.jsonl'))
apk = load(root / 'release/Mesting-Music-v1.0.42-verification.json')
notes = load(out / 'local-apk-notes-verification.json')
assert notes['versionCode'] == 63 and notes['notesCount'] == 4
renders = ['report-dark-phone.png', 'history-dark-phone.png',
           'player-netease-after-stale-callback.png', 'player-kugou-after-stale-callback.png']
assert all((out / 'ui' / name).is_file() for name in renders)
frozen = load(out / 'frozen-before.json')
for row in frozen:
    path = Path(row['path'])
    with path.open('rb') as stream:
        assert hashlib.file_digest(stream, 'sha256').hexdigest() == row['sha256']
    assert path.stat().st_size == row['bytes']

beta = checks['beta-complete.jsonl']
stable = checks['stable-complete.jsonl']
navigation = checks['search-back-player.jsonl']
summary = (f"{beta['files']}文件{beta['counts']['success']}项Beta通过、"
           f"{beta['counts'].get('skipped', 0)}项条件跳过；Stable"
           f"{stable['counts']['success']}项、搜索/返回/播放器"
           f"{navigation['counts']['success']}项通过，静态分析0问题。")
validation = {
    'version': '1.0.42', 'androidVersionCode': 63,
    'date': '2026-11-02', 'timezone': 'Asia/Shanghai',
    'hostChecks': checks, 'actualApkReleaseNotes': notes,
    'acceptedUserEvidence': {
        'v141Type51CardDisplays': True,
        'reportSessionExpected': '26小时5分钟', 'reportSessionIncorrect': '1分钟',
        'reportTotalExpected': '15808小时16分钟', 'reportTotalIncorrect': '15小时48分钟',
        'sessionSongCount': 224, 'totalSongCount': 18344,
        'listScreenshotCorrectsEarlierShortAnswer': True,
        'listYesterdayCorrect': '26小时5分钟 · 224首歌曲',
        'listTodayDifferentSession': '1分钟 · 3首歌曲',
        'mostListenedSummaryMembershipMasked': True,
        'v141TogetherPlayerChromeOverlap': True,
        'userRequestedAllPlayerEntryPaths': True,
        'syncScope': 'both participants song switching and play/pause, not friend switching',
    },
    'units': {
        'recordGetDurationAndTotalDuration': 'seconds',
        'fullRecordsDurationAndMostListenTotalDuration': 'milliseconds',
        'startTimeAndEndTime': 'milliseconds since epoch',
        'v140ReportUnitClaimSuperseded': True,
        'source': 'retained official ending QmAe.e -> seconds/60 -> minute formatter; list QmAe.c -> milliseconds/1000',
    },
    'chromeChanges': [
        'page-aware observers on root, music and all retained-branch navigators',
        'popups keep the visible underlying fullscreen cover',
        'replacement full pages and hidden tabs release ownership',
        'per-player progress ownership rejects stale callbacks and restores the underlying view',
        'production BetaMusicShell/capsule/widget tests use both track sources and active synthetic Together context',
    ],
    'syncChanges': [
        'explicit play/pause intent survives native audio fade latency',
        'typed command parsing separate from mutation and ordering',
        'serialized remote application and numeric server sequence barriers including own acknowledgements',
        'failed source lookup does not consume the command; read-side refresh can recover',
        'late remote media publications are not re-broadcast as local skips',
    ],
    'pairedControllerCases': 8,
    'intermediateEvidence': {
        'secondsContractBeforeFixFailed': True,
        'chromeBeforeFixFailed': True,
        'syncBeforeFixFailed': True,
        'twoDraftBuildsStoppedBeforeReleaseFreezeForUserFeedback': True,
        'shellFixturePendingSessionTimerFixedInFixtureOnly': True,
    },
    'softwareRenders': [str((out / 'ui' / name).relative_to(root)).replace('\\', '/') for name in renders],
    'renderLimitations': 'Synthetic host software rendering and QA fonts. The history-row subtitle retains a test-font Ahem limitation; report metrics and summary are readable. No Android font/GPU/FPS acceptance.',
    'preservation': {'previousApkAndSourceFrozenFiles': len(frozen),
        'allPreviousFrozenHashesChecked': True, 'originalSigningAndLockPreserved': True,
        'customEngineAndCompleteGlassPreserved': True},
    'acceptance': {
        'physicalDeviceAccess': False, 'realAccountOrBackendAccess': False,
        'v142RealReportDurationVerified': False, 'v142RarePlayerOverlapRetestedOnPhone': False,
        'realTwoDeviceSyncVerified': False, 'existingPollingSeconds': 5,
        'neteaseProfileHistoricalTotalDurationFixed': False,
    },
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
}

fixes = f'''# 1.0.42 / Android code63：报告时长、播放器显隐与双向同步

## 一起听报告时长

用户已确认1.0.41的结束卡片可显示。点击26小时5分钟记录后，详情却为1分钟，累计15808小时16分钟变成15小时48分钟；本次224首、累计18344首和距离正常。核对官版实际调用发现，详情使用QmAe.e直接把秒除60；1.0.40错误套用了列表的毫秒格式函数，测试夹具也重复了该错误。本版在record/get的DTO边界将duration/totalDuration按秒读取，日期时间戳保持毫秒，修正此前文档的错误单位结论。

用户先简答列表也缩短，随后21:03列表截图明确显示昨天26小时5分钟/224首正常，今天1分钟/3首为另一次记录。因此保留full/records行和mostListen的毫秒读取、歌曲计数和会员限制。详情中的本次、历史累计歌曲数和时长分别来自官方字段，保持未知值与真实零的区别。

## 歌曲页底栏重叠

检查胶囊/player、功能入口、聊天/邀请和报告入口，均落到同一个BetaNowPlayingPage，但所在Navigator不同。发现并复现两处漏洞：弹窗让isCurrent变false后过早解除显隐登记；旧播放器动画回调能把新播放器的共享reveal改为1。新增每个Navigator的页面观察器区分弹窗与完整页面，覆盖根、音乐壳与四个保留Tab；播放器动画进度按实际视图绑定归属，旧回调不能更改新视图，返回恢复前一视图。

保留完整玻璃、缓存、手势和双向动画。主机实际BetaMusicShell/播放胶囊/播放器回归覆盖两种音轨来源、弹窗、后续普通页面、旧回调、返回和已有下拉收起流程。用户偶现真机重叠的唯一原因尚未通过设备日志证明，仍需手机按原路线验收。

## 双向切歌与播放/暂停

按用户澄清检查双方切换歌曲、播放与暂停。共享合成房间连接两个独立控制器，真实解码其EAPI指令：修复暂停淡出尚未完成时发出旧播放状态、旧服务端回执回退新状态、加载失败过早消费命令导致无法恢复。新增独立指令DTO，远端应用串行、按服务端数字版本拦截旧状态，成功应用后才消费指令并更新歌曲归属，避免延迟媒体事件重复回传。

八项双客户端用例覆盖双方暂停/播放、双方切歌、共享列表之外的新歌、旧回执、延迟回传和短暂加载失败恢复。新歌在共享队列之外时先更新队列再发送切歌指令。保留现有5秒轮询及写操作不盲重试规则；模拟手动tick不等于官版真实双端延迟、后台存活或长期连接验收。

## 验证与交付边界

{summary}实际APK内4条说明经生产Range读取器离线读取且与本版历史一致。完成4张主机渲染，报告显示本次224首/26小时5分钟，累计18344首/15808小时16分钟；历史行副标题存在测试字体限制，具体边界见validation。

原签名双ARM、定制引擎、7份玻璃shader和8份SDK库核验。{len(frozen)}份旧APK/源码保持；全部脏工作区保留。仅本地准备APK、完整源码和校验，未手机/ADB、真实账号或后台，未Git提交、推送、上传或发布。

本次未改听歌足迹上报；官版个人资料历史总听歌时长、十月683分钟仍未解决，与本版修正的好友一起听累计报告是不同统计。旧weblog及旧日志隔离/不重发规则保持。
'''

install = f'''# Mesting Music 1.0.42 / code63 安装验收

原签名双ARM APK：`release/Mesting-Music-v1.0.42.apk`，{apk['fileSize']}字节，SHA256 `{apk['sha256']}`。

完整源码`Mesting-Music-v1.0.42-source.zip`；摘要、大小及文件数见`release/Mesting-Music-v1.0.42-source-verification.json`与`release/Mesting-Music-v1.0.42-SHA256.txt`。显示名Mesting Music、包名com.mesting.music.beta、原证书和递增code63保持；手机安装与数据保持需实际确认。1.0.41及全部旧交付保留。

## 手机验收

1. 自行安装1.0.42后重新加载26小时5分钟的聊天记录，打开详情：核对本次224首/26小时5分钟，累计18344首/15808小时16分钟。数值继续取平台实际返回，后续新记录累计可能增长。列表昨天26小时5分钟与今天另一条1分钟分别保持正确，账号权益提示保持。
2. 网易云和酷狗分别由底部胶囊进入歌曲页；网易云再从功能一起听、聊天按钮/邀请和报告的再次邀请入口进入。静止时确认没有底栏或播放胶囊叠上歌曲页，打开/关闭更多菜单、进出歌词/队列、返回及下拉取消/完成后复核；快速反复打开也检查。
3. 双方实际进入同一个一起听房间，一方播放、暂停、下一首、上一首，核对另一方；交换操作者重复。再检查短暂网络中断后的恢复。现有同步使用5秒轮询，实际延迟、官方端格式和后台存活仍须双设备确认，主机模拟不能代替。
4. 升级后保留原账号/歌单、结束卡片双头像、搜索键盘/粘贴、深色红底徽标及原玻璃。发现异常时记录具体入口、操作者、时间和歌曲，保留脱敏诊断。

## 本机验证

{summary}八项模拟双端、4张主机渲染、实际APK更新说明和原签名/引擎/玻璃核验完成。未访问手机、账号或后台；真实时长和偶现重叠、真实双设备同步尚未验收。
'''

handoff = f'''# 本地接续：Mesting Music 1.0.42 / code63

先读`docs/fixes-2026-11-02-v1.0.42.md`、`docs/INSTALL-v1.0.42.md`与`docs/validation-2026-11-02-v1.0.42.json`。最新本地APK与完整源码已冻结，未提交推送或发布。

本版承接用户1.0.41反馈的三项：详情本次/累计秒数误读为毫秒；歌曲页仍重叠底栏与胶囊，要求所有入口排查；双方切歌及播放/暂停同步（用户明确不是更换好友）。此前1.0.41卡片显示已由用户确认。列表补图显示26小时5分钟正常，保留其毫秒单位和会员限制，不能按最初简答误改列表。

已修正详情DTO单位；新增每Navigator页面观察与每播放器进度归属；同步显式意图、旧版本拦截、应用串行、新曲队列发布和失败恢复。{summary}四张主机渲染、八项双客户端模拟及实际APK更新说明读取通过；原签名双ARM、定制引擎和完整玻璃保持，{len(frozen)}份旧APK/源码校验一致。

唯一工程D:/AnLi，beta/b6bcd5425e0df3e03febdd460b56d0ed42004c52，暂存保持空。1.0.25起全部未提交产品改动保留，当前完整源码ZIP包含脏工作区；仅HEAD不是当前产品。禁止reset/clean、拉取覆盖或替换旧冻结产物。签名私有，未放入源码；官版原始素材/私有诊断及构建缓存也排除。

本轮未手机/ADB、真实账号或后台。真实42报告时长、偶现重叠和官版双设备同步仍由用户验收；5秒轮询保持，不能以模拟或主机像素声称实际即时同步、GPU/FPS或长期稳定性。历史总听歌足迹和十月683分钟仍未解决，旧weblog/旧日志隔离不重发保持；没有新增原生时长候选授权。

后续先只读核对最新交接与校验，按用户新指令继续；没有新授权不安装、访问手机/账号、提交推送或发布。
'''

for relative, content in [
    ('docs/fixes-2026-11-02-v1.0.42.md', fixes),
    ('docs/INSTALL-v1.0.42.md', install),
    ('HANDOFF-CURRENT-SESSION-2026-11-02-v1.0.42.md', handoff),
    ('docs/validation-2026-11-02-v1.0.42.json', json.dumps(validation, ensure_ascii=False, indent=2)+'\n'),
]:
    target = root / relative
    assert not target.exists(), target
    target.write_text(content, encoding='utf-8')

with zipfile.ZipFile(out / 'source-before-private.zip') as before:
    previous = before.read('AGENTS.md')
assert (root / 'AGENTS.md').read_bytes() == previous
prefix = (f'**2026-11-02 本地正式交付1.0.42/code63：先读[1.0.42交接](HANDOFF-CURRENT-SESSION-2026-11-02-v1.0.42.md)及[安装验收](docs/INSTALL-v1.0.42.md)。'
    '用户确认41结束卡片可显示；修正详情本次/累计秒数误作毫秒，列表补图确认正常而保留毫秒与权益；'
    '修复播放器弹窗误解除显隐与旧动画回调暴露新页底栏，新增各Navigator页面观察及视图进度归属；'
    '检查双方切歌/播放暂停，修复旧播放快照、旧回执回退、新曲队列与失败后漏应用，八项双控制器模拟覆盖。'
    f'{summary}原签名双ARM、原引擎、7玻璃shader/8SDK和实际APK4条说明核验，4张主机渲染。'
    f'仅本地APK/完整源码，{len(frozen)}份旧冻结物与全部脏工作区、beta/b6bcd542、空暂存保留。'
    '未手机/真实账号/后台、未提交推送发布；42真实时长、偶现覆盖及官版双设备同步待用户验收，5秒轮询保持。'
    '官版个人资料历史总听歌时长和十月683分钟仍未解决，旧weblog/旧日志隔离不重发保持。下方最新保留历史时点；接续先只读核对，不自动访问手机或实施时长候选。**\n\n').encode('utf-8')
(root / 'AGENTS.md').write_bytes(prefix + previous)
print(json.dumps({'docsWritten': 4, 'previousAgentsBytesRetained': True,
    'previousFrozenFiles': len(frozen), 'betaFiles': beta['files'], 'betaTests': beta['counts']['success']}, indent=2))
