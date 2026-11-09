"""Write current local delivery docs before freezing source; never edit old releases."""
from pathlib import Path
import json

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
host = json.loads((OUT / 'host-check-summary.json').read_text('utf-8'))
apk = json.loads((ROOT / 'release/Mesting-Music-v1.0.71-verification.json').read_text('utf-8'))
native = json.loads((OUT / 'native-packaging-verification.json').read_text('utf-8'))
qr = json.loads((OUT / 'qr-javascript-interface-verification.json').read_text('utf-8'))
bridge = json.loads((OUT / 'audio-bridge-packaging-verification.json').read_text('utf-8'))
assert host['passed'] and apk['originalSignature'] and len(qr) == 2
totals = (f"Beta {host['beta']['files']}文件/{host['beta']['passed']}通过/{host['beta']['skipped']}条件跳过，"
          f"Stable {host['stable']['passed']}，导航 {host['navigation']['passed']}，分析0")
validation = {'version': '1.0.71', 'androidVersionCode': 92, 'releaseBuild': True, 'localDelivery': True,
              'host': host, 'apk': apk, 'nativePackaging': native, 'qrCallbacks': qr,
              'audioBridgePackaging': bridge,
              'physical71Acceptance': False, 'user29FreeListeningAndFullPlaybackAcceptedIn71': False,
              'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False}
files = {
 'docs/validation-2026-11-06-v1.0.71.json': json.dumps(validation,ensure_ascii=False,indent=2)+'\n',
 'docs/fixes-2026-11-06-v1.0.71.md': f'''# 1.0.71 / code92：汽水缓存路径与原生失败诊断

## 本次反馈与范围

用户确认已安装1.0.70，提供的诊断两次显示playerInfoRead成功、12个候选、audioRead成功，随后audioDecode为format。复制出来的诊断尾部本身乱码，不能再要求用户寻找一段未被复制出的日志，也不能将HTTP200或decodableStreams当成实际解码成功。

用户确认本地修复路径兼容、细分原生原因、精简复制与剪贴板读回，并交付71 APK及完整源码；没有手机/ADB、账号、NAS、签名服务、部署或发布授权。

## 已确认兼容缺口与实现

- Flutter path_provider_android 2.2.18直接返回Context.cacheDir.path；原生桥接却要求原始absoluteFile等于canonicalFile。这会拒绝存在父目录别名的合法私有缓存路径。新QishuiOfficialAudioPreparation在规范化父目录后核对私有根目录、文件名和叶文件；原生I/O使用规范文件，返回Flutter时保留合法原始路径，避免另一端因路径文字不同再次拒绝。
- 仍拒绝相对路径、父级遍历、越界目录、错误名称及叶链接逃逸。输出使用原子createNewFile，失败或取消只移除本次拥有的输出，不删除已存在文件。
- Android-free的生产准备类承接真实文件读取、官方授权解密与缓存写入；桥接负责线程、取消和Android MediaExtractor。CENC算法与授权来源不扩张，只增加阶段回调。
- 失败通过闭合nativeStep/nativeReason/family返回：缓存路径、源文件、授权解析、容器/加密格式、分段表、分段解密、缓存写入和实际元数据分别可见。Dart只接收已知标签；未知详情和原始异常不进入提示或导出，不包含URL、PlayAuth、账号或令牌。
- 诊断页补齐播放阶段中文名称。精简复制保留最近一次故障和同平台前序最多10条，按完整事件限制4096字符，输出完整JSON及complete标记；完整最近80条复制仍保留。
- 复制冻结当次快照，写入后读回比较，等待有界且不自动重写。读回不一致/不可用分别提示，重复点击不覆盖正在核对的快照。读回一致只证明本机剪贴板当时相同，不能保证跨应用或跨设备粘贴后内容不变，也没有证据证明原乱码仅由长度造成。

## 验证与限制

{totals}。8张新诊断页主机图已检查，包含浅/深色、390/320宽度、最高2倍字号及复制一致/不一致状态。定向与截图复跑不重复计数。

生产Kotlin本轮新跑29项：原CENC合成10项及真实文件准备19项。合成加密文件通过生产缓存路径得到逐字节一致的明文；覆盖合法父目录写法、越界/遍历/错名、已有输出保留、取消清理与阶段分类。首轮夹具错误假设Windows canonicalFile会像Android一样解析junction，原失败日志保留；最终使用实际目录的/./父路径写法复现旧等式误拒。它验证规范化逻辑，并不执行Android /data目录符号链接或真实设备。

Media3主机14仅同生产/runner输入历史沿用，未新跑相加。实际APK另验原签名、code92、com.mesting.music、双ARM、固定引擎、7shader、12旧非app库、JNI/DSP声明和两个R8回调。

修复了可复现的本地兼容缺口，但没有证据证明它是用户70失败的唯一原因。71未安装，本人29天免费听下整曲、升级/冷恢复、Android媒体解码/GPU/DSP、下载/写入/奖励仍待验收。整曲目标、官方试听标识及下载资格规则保留；助手check_download仅为最后已读策略缺口，本轮没有复核当前部署或接管独立助手。

66用户已确认扫码原账号、完全重开保持、网易云自动补源整曲继续有效。手机号路线停止；旧未知日志不重放，旧51回收APK不恢复，63源码ZIP不补。原80冻结物、签名/锁、原脏改动、beta/b6bcd542与空暂存保持；71另存，未提交推送上传发布。
''',
 'docs/INSTALL-v1.0.71.md': f'''# Mesting Music 1.0.71 安装与本轮验收

原签名正式APK：`release/Mesting-Music-v1.0.71.apk`，code92，{apk['fileSize']}字节。

SHA256：`{apk['sha256']}`。

1. 自行覆盖安装71，保留现有应用数据、账号、签名服务地址和令牌；无需卸载或清除数据。
2. 用官版同一账号、同一录音版本可完整播放的歌曲测试Mesting整曲。无需重新领取29天免费听，也不需要发送令牌。
3. 若失败，立即进入“设置 → 连接诊断”，优先点击“复制精简记录”。注意页面是否显示“已复制并核对”或“核对不一致/未能核对”。
4. 发送复制内容及当次提示；精简JSON正常结尾包含`"complete":true`。若粘贴仍乱码，可提供诊断页故障阶段截图，新版直接显示缓存路径、授权解析、分段解密等具体阶段。
5. 官方仅返回试听时仍明确显示“官方试听”；试听成功不能算本人整曲接通，不能作为完整下载。

71本轮没有手机/ADB/账号/NAS或实际签名请求，不能代验你的安装、完整播放或权益。70的失败已按用户反馈确认，71是否解决须以上述实测为准。旧包/ZIP保持，71仅本地交付。
''',
 'HANDOFF-CURRENT-SESSION-2026-11-06-v1.0.71.md': f'''# Mesting Music 1.0.71 / code92 本地交付交接

## 已完成

- 用户确认70已安装仍失败：资料读取和音频读取成功，audioDecode为format；诊断复制尾部乱码。该反馈优先于70冻结时“未安装/待反馈”。
- 本地实现私有缓存父路径规范化、生产准备模块解耦、原生闭合阶段/原因诊断、精简JSON复制和剪贴板有界读回核对。
- 原签名双ARM APK：`release/Mesting-Music-v1.0.71.apk`，{apk['fileSize']}字节，SHA256 `{apk['sha256']}`。完整源码和独立收据同版另存，不回填70。
- {totals}；8张新诊断主机图已看。本轮Kotlin CENC10+文件准备19=29新跑；Media3主机14仅同输入历史，不相加。
- 实际APK原签名/包名/code92/非debug、双ARM/固定引擎/7shader/12旧非app库、JNI/DSP声明与R8回调另验。

## 待验收与注意

- 71覆盖安装、本人29天免费听下整曲、冷恢复/Android媒体/GPU/DSP/下载/写入/奖励仍待验收。目录兼容缺口已本地复现，但未证明是用户故障唯一原因；主机和合成解密不冒充本人整曲。
- 本轮无手机/ADB/真实账号/私有令牌/NAS或签名请求，不接管独立签名助手；check_download当前部署仍须另验。复制读回一致不等于跨应用粘贴永不变化。
- 保持66用户已验扫码原账号/重开保持/网易云自动补源整曲；手机号停止。旧日志不重放，旧51回收APK不恢复，63源码ZIP不补。
- 保留原80冻结物、原签名/锁、全部历史脏改、beta/b6bcd542与空暂存；71新增APK/ZIP后共82冻结物。未Git同步清理提交推送、PR合并、上传发布或备份。

接续先读AGENTS和同版实现、安装、validation，按`.codex-artifacts/2026-11-06-release171/after.json`只读核对。等待用户71验收；新问题一次一问、方案确认后实施。不外推设备/账号/NAS/发布授权。
''',
}
for name, text in files.items():
    path = ROOT / name
    assert not path.exists(), name
    path.write_text(text, 'utf-8')
agents = ROOT / 'AGENTS.md'
entry = f'''**2026-11-06 当前本地1.0.71/code92：先读[71交接](HANDOFF-CURRENT-SESSION-2026-11-06-v1.0.71.md)、[实现与边界](docs/fixes-2026-11-06-v1.0.71.md)、[安装验收](docs/INSTALL-v1.0.71.md)和[验证](docs/validation-2026-11-06-v1.0.71.json)，按release171/after.json只读接收后等待。用户确认70已安装，资料与音频读取成功但audioDecode两次format，复制尾部本身乱码；此反馈覆盖70冻结“未安装”。71修复缓存父目录合法别名兼容，生产准备类解耦，原生闭合阶段/原因、4096字符精简JSON及复制读回核对；不证明路径是本人失败唯一原因，也不保证跨应用粘贴不变。{totals}；8新主机图已看，Kotlin本轮CENC10+准备19=29新跑，Media3的14仅同输入历史不相加。原签名双ARM/固定引擎/7shader/12旧非app库/JNI/DSP与R8回调另验。原80冻结物/签名/锁/历史脏改、beta/b6bcd542与空暂存保持，71另存后共82；未回填70。无手机/ADB/账号/令牌/NAS/实际签名请求或部署授权，71安装/本人29天整曲/下载/写入奖励/GPU/DSP待验；check_download当前部署未复核，不接管独立助手。66已验扫码原账号/重开保持/网易云补源整曲有效，手机号停止；63源码ZIP不补、旧51回收APK不恢复、旧日志不重放。未提交推送上传发布或备份。下方均为历史时点。**\n\n'''
agents.write_bytes(entry.encode('utf-8') + agents.read_bytes())
print({'documentsWritten': len(files), 'agentsEntryAdded': True})
