"""Write actual local checks and installation separately from user acceptance."""
from pathlib import Path
import json

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
checks = json.loads((OUT/'host-check-summary.json').read_text('utf-8'))
apk = json.loads((ROOT/'release/Mesting-Music-v1.0.67-verification.json').read_text('utf-8'))
delivery = json.loads((OUT/'delivery-mode-user-update.json').read_text('utf-8'))
assert delivery['apkDeliveryOnly'] and not delivery['installPerformed']
native = json.loads((OUT/'native-packaging-verification.json').read_text('utf-8'))
validation = {**checks, 'apk': apk,
    'installation': {'performed': False, 'manualInstallRequired': True,
                     'deferredByUser': True, 'businessAcceptanceClaimed': False},
    'actualApkNativePackaging': native,
    'priorFrozenArtifactsExpected': 72, 'source63ZipBackfilled': False,
    'qrCallbacksRemainVerifiedByActualR8Dex': (OUT/'qr-javascript-interface-verification.json').exists(),
    'real67AccountMediaAndPlaylistWritesAccepted': False, 'nasAssistantDeployed': False,
    'externalSignerRuntimeDependencyChosenByUser': True,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False}
(ROOT/'docs/validation-2026-11-06-v1.0.67.json').write_text(json.dumps(validation, ensure_ascii=False, indent=2)+'\n', 'utf-8')
install = '''# 1.0.67 / code88：汽水平台安装与实机验收

用户最后明确暂时不能连接手机，改为直接交付安装包。因此本版未安装到手机，未进行
87→88覆盖、冷恢复或真实账号业务验收。手机最后历史读回仍为66/code87；不能冒充本版
实机状态。本人可用原签名APK保留数据覆盖安装，以下项目由本人安装后手动核对。

1. 打开“我的”，确认原汽水账号与歌单；“我喜欢的”应在歌单区。进入详情后底栏应
   继续选中“我的”，返回仍在“我的”。
2. 播放本人账号一首超过一分钟的歌曲，核对能否播放中段、尾段及完整时长。音源仅
   来自汽水官方；官版拒绝、账号权益不足或签名服务不可用时显示对应顶部提示。
3. 切换“音乐”，胶囊播放器应隐藏；标题右侧的听歌模式用下拉菜单选择，底栏不遮挡。
4. 由本人在测试歌单依次验证批量选择、添加、拖动顺序、删除和隐私，并在官版核对。
   删除前有确认；未知回执保留操作记录，再次点击先核对，不自动重发。
5. 下载必须获得当前账号对应音质的官方资格；需额外扣额度时本版停止，不静默扣额。

本版默认用户选定的参考项目外部签名服务。手机只发送待签名URL、请求正文与白名单
应用头；Cookie、CSRF、登录token、扫码nonce不发给签名服务，仍只交给固定官方主机。
自己的NAS助手在另一个会话研究，目标为Linux x86，尚未部署或替换当前服务。

66的真实扫码、完全关闭重开恢复，以及网易云《可我只是海》自动补源完整播放为用户
已确认的历史结果，不再标为未验；本版汽水完整媒体、真实歌单写入、下载和DSP输出
仍以本人实测为准。匿名签名试听解码60秒仅证明协议与解码链，不证明完整账号权益。
'''
(ROOT/'docs/INSTALL-v1.0.67.md').write_text(install, 'utf-8')
b, s, n = [checks[name] for name in ('beta', 'stable', 'navigation')]
handoff = f'''# 2026-11-06：1.0.67 汽水改版与官方媒体接入交接

当前本地交付1.0.67/code88；用户最新改为直接交付APK，暂不连接手机。本版未安装，
未验证87→88升级或冷恢复；手机最后历史读回仍66/code87，不外推当前手机状态。
先读[实现与边界](docs/fixes-2026-11-06-v1.0.67.md)、[安装验收](docs/INSTALL-v1.0.67.md)
及[验证](docs/validation-2026-11-06-v1.0.67.json)，并只读核对本轮after.json。

## 已完成

- 按用户确认仅调整汽水：“我的”资料与纵向歌单、歌单大封面详情、root菜单抽屉及
  批量选择/拖动/添加/删除/下载/隐私；“我的→我喜欢的”保留“我的”选中并返回原页。
- 音乐根页隐藏胶囊；听歌模式移至标题旁的下拉菜单；失败改为现有顶部状态提示。
- 用户选择参考项目外部签名服务。采用真实PC track_v2 POST与正文摘要、应用签名；
  账号凭据仅发官方。官方CENC在私有缓存解码并独立检查音频时长，汽水不跨平台补源。
- 写入串行、当前账号核对、持久未知结果日志及官方读回；取消已发写入仍保留未知记录。
- 主机Beta {b['files']}文件{b['passed']}通过/{b['skipped']}跳过、Stable{s['passed']}、
  导航{n['passed']}及分析0；CENC新原生合成10项。重复定向与截图运行不叠加计数。
  Media3原14项仅64相同生产/runner输入历史，不冒充重跑。首轮中断与旧fixture失败保留。
- 原签名双ARM、定制引擎、7玻璃shader、12非app原生库、JNI与R8回调以实际APK另验。

## 未完成验收

匿名签名接口返回媒体、60秒试听真实解码，不是本人完整歌曲验收。汽水真实完整播放、
下载、官方歌单写入读回、权益奖励到账及DSP输出仍待本人验证；未代替本人修改真实歌单。
视频/AI写歌没有冒充接通；评论计数仅显示返回值，不宣称评论业务已实现；导入为汽水
歌单复制，未实现跨平台同名录音转换。NAS助手为独立会话，Linux x86可行性与部署另验。

## 保留与边界

66用户扫码/重开恢复及网易云自动补源完整播放已经通过，沿用确认；手机号登录已移除，
停止2156/原生注册路线。63完整源码ZIP未补，旧51个回收APK不恢复，旧日志不补发。
原72冻结物、原签名/锁/历史脏改、beta/b6bcd542/空暂存保持，67 APK/完整源码另存。
未提交推送上传发布；前半轮诊断已结束，最新仅交付APK，不自动继续设备/账号/后台操作。
新接续先按 `.codex-artifacts/2026-11-06-release167/after.json` 只读核对；不要自动重建或
回填冻结物，不自动Git同步清理，不接管其他平台既有缺口。
'''
(ROOT/'HANDOFF-CURRENT-SESSION-2026-11-06-v1.0.67.md').write_text(handoff, 'utf-8')
agents = ROOT/'AGENTS.md'
prefix = '''**2026-11-06 当前本地交付1.0.67/code88：先读[67交接](HANDOFF-CURRENT-SESSION-2026-11-06-v1.0.67.md)、[实现与边界](docs/fixes-2026-11-06-v1.0.67.md)、[安装验收](docs/INSTALL-v1.0.67.md)及[验证](docs/validation-2026-11-06-v1.0.67.json)，按release167/after.json只读核对。用户最后明确暂不能连接手机、仅交付安装包，67未安装，不冒充87→88升级/冷恢复/完整播放/真实写入验收，最后设备历史仍66/code87；不自动继续ADB/手机/账号/后台操作。此前确认仅汽水改版、官方音源和参考项目外部签名服务；我的/歌单/批量/菜单、音乐根页隐藏胶囊和标题下拉已实现，“我的→我喜欢的”保留我的选中。官方track_v2签名与CENC私有缓存解码、未知写日志及读回已接；匿名60秒试听不证明本人完整媒体/下载/权益奖励/DSP。66用户扫码/完全重开恢复/网易云自动补源完整播放已验，不再按旧pending否认；手机号已移除，停止2156路线。原72冻结物、原签名/锁、历史脏改、beta/b6bcd542/空暂存保持，67另存；63源码ZIP未补、旧51回收APK不恢复、旧日志不重放。NAS签名助手另有独立会话，目标Linux x86，尚未部署。未Git同步清理提交推送上传发布。下方保留历史时点。**

'''
old = agents.read_text('utf-8')
assert not old.startswith('**2026-11-06 当前本地1.0.67/')
agents.write_text(prefix+old, 'utf-8')
print({'validationWritten': True, 'apkDeliveryOnly': True, 'installed67': False, 'realMediaAcceptance': False})
