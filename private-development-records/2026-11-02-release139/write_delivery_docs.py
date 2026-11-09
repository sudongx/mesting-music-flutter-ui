"""Write reviewable release documentation before the immutable source freeze."""
import json
from pathlib import Path

root=Path('D:/AnLi')
out=root/'.codex-artifacts/2026-11-02-release139'
apk=json.loads((root/'release/Mesting-Music-v1.0.39-verification.json').read_text(encoding='utf8'))
checks=json.loads((out/'host-check-summary.json').read_text(encoding='utf8'))
assert checks['analysisPassed'] and all(checks[n]['completeAndSuccessful'] for n in
    ['beta-complete.jsonl','stable-complete.jsonl','search-back-player.jsonl'])
beta=checks['beta-complete.jsonl']; stable=checks['stable-complete.jsonl']; nav=checks['search-back-player.jsonl']
summary=f"{beta['files']}文件{beta['counts']['success']}项Beta通过、{beta['counts'].get('skipped',0)}项条件跳过；Stable{stable['counts']['success']}项、搜索/返回/播放器{nav['counts']['success']}项通过，静态分析0问题。重跑重叠不叠加计数。"
notes=json.loads((root/'assets/data/release-notes.json').read_text(encoding='utf8'))
validation={'version':'1.0.39','androidVersionCode':60,'date':'2026-11-02','timezone':'Asia/Shanghai',
    'hostChecks':checks,'releaseApk':{'bytes':apk['fileSize'],'sha256':apk['sha256']},
    'originalSignatureAndDualArmVerified':True,'fixedEngineAndGlassRetained':True,
    'nativeExperimentDisabledInBothAbiPayloads':True,'localDiagnosticsDisabled':True,
    'legacyLoggingHostPresentInBothAbiPayloads':True,'automaticUpdatesEnabled':True,
    'nativeRowsHeldWithoutReplay':True,'phoneUsed':False,'phoneUpgradeAcceptance':False,
    'recentAndTodayCloudAcceptance':False,'historyTotalAcceptance':False,
    'october683MinutesRecovered':False,'togetherEndMessageAcceptance':False,
    'published':False,'gitCommitted':False,'gitPushed':False}
(root/'docs/validation-2026-11-02-v1.0.39.json').write_text(json.dumps(validation,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
install=f'''# Mesting Music 1.0.39 / code60 安装验收

2026-11-02，Asia/Shanghai。用户已确认修正上报回退并构建正式Release，仅本地交付；没有操作手机、真实账号、music后台、Git提交推送或线上发布。

原签名双ARM APK：`release/Mesting-Music-v1.0.39.apk`，{apk['fileSize']}字节，SHA256 `{apk['sha256']}`。显示名Mesting Music，包名com.mesting.music.beta，保留原证书、定制Release引擎与完整玻璃。包/签名/版本升级身份主机核验通过，不等于实际覆盖安装验收。

完整源码：`Mesting-Music-v1.0.39-source.zip`。源码大小/摘要/文件数见`release/Mesting-Music-v1.0.39-source-verification.json`及`release/Mesting-Music-v1.0.39-SHA256.txt`，以免源码包自引用。

## 本版变化

'''+''.join(f'- {note}\n' for note in notes['releaseNotes'])+f'''
## 用户验收

1. 按原签名覆盖安装后核对v1.0.39及原账号/歌单；本轮没有清数据、迁移签名或改变包名。安装成功和数据保持仍由真机确认。
2. 记录官版最近播放及今日收听基线，在Mesting中选一首实际网易云歌曲，正常播放至少约一分钟后切换/结束。再去官版复查最近播放和今日收听。界面读数、HTTP接收和业务入库分别判断；不根据接收回执宣称同步恢复。
3. 用户已确认私有候选中官版最近/今日不更新。本版新记录恢复原clientlog weblog通道；旧原生open/queued记录保留隔离，不改投、不自动重发，也不计入“待同步时长”。已派发/接收/未知旧记录保留，不盲发。
4. 检查足迹页今日/当前月小时分钟与官版对齐，历史总时长独立读取；隔天再复查历史增长。本版没有承诺追回十月683分钟，历史基线5609小时31分只是先前分钟精度读数，应记录本次实际新基线。
5. 一起听双方在房时核对底部胶囊头像叠放，等待时本人，退出或换账号恢复当前封面。保留头像缓存、播放/下一首及滑动。正式构建未重新发邀请/消息或替用户退出房间；结束私信仍为独立未知。
6. 检查底栏红色及功能多色、浅深色/小屏大字。歌曲页显示AirPods Pro图形而设备名保持真实；点一次耳机即进入设备列表。切本机/耳机应依系统确认更新勾选，失败保留旧选择；音量与完成按钮可用。

## 验证边界

{summary}

相关UI软件渲染沿用本次已核对的头像/配色/图标/设备面板8张；未把软件渲染当作Android GPU、蓝牙路由、TalkBack、FPS或长期稳定性验收。APK实际核对双ABI、版本/说明、原证书、对齐、原引擎/SDK与7份玻璃shader；两个libapp均不含试验原生地址及本机诊断输出标记，均保留旧上报地址及新胶囊标记。

首轮Beta有3条失败：新增更长版本说明使旧测试的历史行延迟构建，测试误取了搜索框横向滚动；以及两个配色测试未替换真实账号恢复导致挂起计时器。修正测试定位/隔离后，两个受影响完整文件重跑通过；按最终每文件覆盖汇总，未把重跑项累加。首次分析移除一条新增未用import后最终为0。

更新检查恢复开启；MESTING_NATIVE_PLAYBACK_LOGGING与MESTING_LOCAL_DIAGNOSTICS均显式false。原Apple符号来源及适用声明在third_party/audio_glyphs保留；本地构建不代表额外公开分发授权。旧冻结物及两份私有候选不覆盖；没有自动上传、发布或手机安装。
'''
(root/'docs/INSTALL-v1.0.39.md').write_text(install,encoding='utf8')
handoff=f'''# 1.0.39 / code60 本地正式Release接续

先读[安装与验收](docs/INSTALL-v1.0.39.md)和[验证](docs/validation-2026-11-02-v1.0.39.json)。本轮用户确认保留全部UI、恢复旧上报并构建正式1.0.39；不是等待澄清/方案确认状态。

## 已完成

新播放恢复原有clientlog weblog开始/结束上报；原生试验与本机调试日志停用，恢复更新检查。新增保护使旧原生open/queued不继续原生发送、不改投旧通道，accepted/dispatched/unknown不重发，旧证据不删除。相关待核对记录不混入待同步时长。保留今日/当前月单位修正、严格回执与seek开始边界。

一起听胶囊双头像、底栏红色及语义多色、原始AirPods Pro轮廓和设备列表直接展示均保留；原签名、定制双ARM引擎、SDK和完整玻璃保留。

{summary}

APK：`release/Mesting-Music-v1.0.39.apk`，{apk['fileSize']}字节，SHA256 `{apk['sha256']}`。完整源码`Mesting-Music-v1.0.39-source.zip`，摘要与文件数见外置source-verification及SHA256资料；原1.0.24 SOURCE-SNAPSHOT在新包中另名保留，新清单指向本版，工作区旧元数据不覆盖。

## 未验收与保留

私有1.0.38候选曾获得原生文件回执，但用户已确认官版最近播放和今日收听均不更新；它不能作为业务成功依据。本版只证明旧通道恢复到代码/包，最近播放与今日收听恢复必须安装后实测，历史总时长仍需隔天验收。十月683分钟未追回，一起听结束私信仍独立未确认；不重发已接收或未知旧记录。

本轮未访问手机、真实账号或后台。手机当前安装状态以用户最新操作为准，不沿用旧“已安装候选”的推测。下一步用户自行覆盖安装验收；若需设备调试，先取得新的明确授权。

工程D:/AnLi、beta/b6bcd5425e0df3e03febdd460b56d0ed42004c52及空index保持，全部既有脏改动保留。60份先前APK/源码包（含两份私有候选）摘要回核一致，签名/依赖锁保留。1.0.39仅本地构建冻结，未Git提交推送/标签、未GitHub或music上传发布，不自动继续清理。

私有完整材料在`.codex-artifacts/2026-11-02-release139/`，包含修改前副本、构建/分析/测试、完整文件重跑汇总、签名/包验证与冻结核对。不得把私钥、账号、原官版APK、无账号原生fixture和私有调试目录纳入公开源码包。

下次接手先只读核对本交接、AGENTS及实际文件/版本后等待；不自动重建、安装、访问手机或发布。历史UI/原生候选文档保留原时点，后续失败说明已附加。
'''
(root/'HANDOFF-CURRENT-SESSION-2026-11-02-v1.0.39.md').write_text(handoff,encoding='utf8')
print(summary)
