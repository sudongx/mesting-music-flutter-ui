"""Write the new handoff from actual host, APK and native packaging receipts."""
from pathlib import Path
import json

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
apk = json.loads((ROOT / 'release/Mesting-Music-v1.0.69-verification.json').read_text('utf-8'))
host = json.loads((OUT / 'host-check-summary.json').read_text('utf-8'))
native = json.loads((OUT / 'native-packaging-verification.json').read_text('utf-8'))
qr = json.loads((OUT / 'qr-javascript-interface-verification.json').read_text('utf-8'))
assert apk['version'] == '1.0.69' and apk['androidVersionCode'] == 90 and host['passed']
record = {
    'version': '1.0.69', 'androidVersionCode': 90, 'releaseBuild': True,
    'localDelivery': True, 'host': host, 'apk': apk,
    'nativePackaging': native, 'qrCallbacks': qr,
    'userReportedInstalledBeforeThisRelease': '1.0.68',
    'physical69Acceptance': False, 'nasAuthenticatedSignatureAccepted': False,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
}
(ROOT / 'docs/validation-2026-11-06-v1.0.69.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', 'utf-8')
fixes = '''# 1.0.69 / code90：签名设置与冷启动胶囊修复

## 反馈与根因

用户确认已经安装68，未点击播放，打开应用后胶囊持续转圈；签名设置卡在“正在读取签名服务设置”。NAS助手由用户部署，地址为 https://download.csnas.asia/qishui-signer/ 。本轮确认仅修复主项目并交付递增版本正式包，不接管助手部署。

68将签名配置键 `mesting_qishui_signer_settings_v1` 接入音乐账号恢复仓库。安卓 `FlutterSecureStoragePlugin.runVerifiedSlotMethod` 仅接受 `mesting_music_platform_` 前缀，因而拒绝该键。Riverpod默认自动重试使设置保持加载；这发生在本地读取阶段，不能据此判定NAS未响应。68的内存仓库测试没有覆盖安卓原生键名契约，这是本次遗漏。

另一个独立原因是 `restoreSession(preload:false)` 仍先调用媒体解析器。即使用户没有点击播放，恢复上次汽水歌曲也会进入签名与解析等待。

## 实现

- `qishui_signer_settings.dart`：改用独立的 `mesting_qishui_signer_v1` 存储命名空间，键名 `mesting_music_platform_qishui_signer_settings_v1`，关闭错误重置，不打开或删除音乐账号历史恢复区。保存后普通读回，并在安卓独立重开核验；不迁移或删改68原始字节。
- 读取最长9秒，失败立即显示手动重试，禁用自动重试。保存最长15秒；原生写操作无法因超时取消，因此未落定前阻止重复保存，未知结果要求重新读取核对，不自动重写。
- `ConfiguredQishuiRequestSigner`：未保存访问令牌时明确提示配置，零网络调用，不隐式启用旧公共签名实例；读取设置有10秒上限。HTTP/HTTPS、路径前缀、助手身份/UA与既有签名过滤约束保持。
- `qishui_signer_settings_page.dart`：初始预填用户NAS地址，访问令牌仍须用户手动填写。测试连接使用表单输入，保存后才用于后续播放。错误信息不显示令牌或原生异常内容。
- `MestingAudioHandler`：汽水冷启动仅恢复歌曲、队列和进度，保持暂停，不解析URL或预加载媒体。首次主动播放再解析；失败退出加载并保留恢复点；播放前定位只修改恢复点。网易云既有恢复路径保持。
- 68已合入的胶囊进入音乐Tab、封面页内歌词、玻璃和底部Tab、500标题字重、单曲插队/播放全部替换继续保留。

## 验证和限制

新增测试读取原生Java拥有者的实际键名前缀，再通过生产MethodChannel契约替身验证独立namespace、读取/保存/独立重开和账号记录保留；这是主机契约测试，不等于手机Android KeyStore实测。覆盖原生拒绝不重试、9秒读取上限、未配置零网络、真实handler的暂停恢复/进度/首次播放/错误退出，以及胶囊显示播放按钮。

完整测试结果、10张主机截图与实际APK签名/打包核对见同版validation。早期平台覆盖清理及虚拟时钟与真实I/O夹具等待的失败/中止记录保留，以最终完整文件结果替换，不重复累计。

NAS只做过用户给定地址的匿名健康读取：`readyz` HTTP200/ok，未带令牌的`config` HTTP401，根路径HTTP404。说明健康端点可达，不证明鉴权签名、原生安全因子或官方歌曲接受。没有读取私有令牌，没有调用真实签名或官方音乐接口，没有部署或修改助手。

当前已读助手白名单仍缺 `/luna/commerce/v2/check_download`，不绕过资格或白名单。本人汽水整曲/下载/写入/权益奖励/DSP、69设备升级/冷恢复/Android存储仍待用户验收。66已确认扫码原账号、完全重开保持、网易云自动补源完整播放继续有效；手机号路线停止，旧未知日志不补发。

原68与所有历史冻结包不改写；签名/锁/脏工作区、beta/HEAD和空暂存保持。没有手机/ADB/账号/后台操作，没有Git同步、提交推送、上传或发布。
'''
(ROOT / 'docs/fixes-2026-11-06-v1.0.69.md').write_text(fixes, 'utf-8')
install = f'''# Mesting Music 1.0.69 安装与签名助手配置

安装包：`release/Mesting-Music-v1.0.69.apk`，code90，原签名正式release。SHA256 `{apk['sha256']}`。

1. 在手机直接覆盖安装69；保留应用数据，无需卸载或清除账号。
2. 打开应用，历史汽水歌曲应停在播放按钮，保留歌曲/队列/进度；恢复这首历史歌曲时不解析音源。未配置令牌时，手动播放应明确提示先配置。
3. 进入“我的 → 设置 → 汽水签名服务”。服务地址已预填 `https://download.csnas.asia/qishui-signer/`，也支持HTTP、端口及路径前缀。
4. 在“访问令牌”粘贴你在NAS签名助手生成的令牌，点击“测试连接”，通过后点击“保存并使用”。令牌在手机独立加密保存，不需要发到聊天。测试使用当前表单，不会播放歌曲或改写官方账号。
5. 返回音乐页，手动播放一首汽水歌曲，再重开应用检查配置、暂停状态及播放。本人整曲、NAS真实签名和手机存储尚未由本轮代验。

访问令牌用于授权自己的NAS签名助手，与汽水账号登录凭据分开；仅填写地址不能完成鉴权。点击测试不会自动保存，保存也不会自动播放。

如果仍报401/403，请核对助手令牌；404请核对反向代理路径前缀；503请检查助手就绪状态。根地址404本身不等于部署失败，本轮匿名`readyz`已返回200。签名检查通过只证明助手响应，官方媒体权限仍需实际播放验证。

本轮未接入手机/ADB或真实账号，没有实际升级验收；正式release构建不代表GitHub已经发布。不要为排查本问题卸载应用或清除音乐账号数据。
'''
(ROOT / 'docs/INSTALL-v1.0.69.md').write_text(install, 'utf-8')
handoff = f'''# Mesting Music 1.0.69 / code90 本地正式包交接

用户已安装68并确认未点击播放也持续加载；设置读取卡住。确认本轮修复并交付69正式包；NAS由用户部署，不接管独立助手会话。

## 已完成

- 原签名正式APK `release/Mesting-Music-v1.0.69.apk`，{apk['fileSize']}字节，SHA256 `{apk['sha256']}`。
- 修复68签名设置键名不符合安卓归档前缀契约，采用独立namespace、加密读回和独立重开核验；读取有界、失败手动重试，不动音乐账号旧资料。
- 预填用户NAS地址，令牌手动填写；未配置不请求NAS或公共服务。汽水启动只恢复暂停元数据/队列/进度，手动播放才解析；失败退出加载。
- Beta {host['beta']['files']}文件/{host['beta']['passed']}通过/{host['beta']['skipped']}跳过，Stable {host['stable']['passed']}，导航 {host['navigation']['passed']}，分析0，10张已查看主机图。失败和中止保留，按完整文件替换不累加。
- 实际APK核对原证书、双ARM/定制引擎、7shader/12旧非app库、JNI/DSP声明、R8 Web回调。Media3主机14和CENC主机10只继承同输入历史，不相加。
- 68歌词/导航/字体和单曲队列逻辑保留，协作者sudongx PR2两提交仅本地合入状态不变，没有远端PR合并。

## 未完成和注意

- NAS匿名健康端点200，未带令牌config401、根404；没有私有令牌/真实签名/官方媒体请求/部署修改。助手完整链路和本人整曲/下载/写入/权益奖励/DSP待验，下载白名单check_download仍缺。
- 本轮无手机/ADB/账号/后台，69未安装。用户68已安装反馈优先于68冻结文档“未安装”；最后历史ADB读回66/code87不能当作当前设备版本。
- 66用户确认扫码原账号、完全重开登录保持、网易云自动补源整曲有效。手机号停止；63源码ZIP未补、旧51回收APK不恢复、旧日志不重放。
- 原76冻结物、签名/锁/全部原脏改动、beta/b6bcd542和空暂存保持。69另存，不回填失败68，不提交/推送/上传/发布。

先读AGENTS、同版实现/安装/validation，按 `.codex-artifacts/2026-11-06-release169/after.json` 只读核对，然后等待最新用户指令，不自动设备/NAS/账号或发布。
'''
(ROOT / 'HANDOFF-CURRENT-SESSION-2026-11-06-v1.0.69.md').write_text(handoff, 'utf-8')
agents = ROOT / 'AGENTS.md'
old = agents.read_text('utf-8-sig')
assert not old.startswith('**2026-11-06 当前本地1.0.69')
prefix = f'''**2026-11-06 当前本地1.0.69/code90正式release包：先读[69交接](HANDOFF-CURRENT-SESSION-2026-11-06-v1.0.69.md)、[实现与边界](docs/fixes-2026-11-06-v1.0.69.md)、[安装配置](docs/INSTALL-v1.0.69.md)和[验证](docs/validation-2026-11-06-v1.0.69.json)，按release169/after.json只读核对。用户已安装68，未点击播放也转圈且签名设置卡住；已修复安卓原生键名契约/独立namespace加密读回与读取有界不重试，汽水启动仅暂停恢复元数据/队列/进度，主动播放才解析，未配置不请求NAS/公共服务。预填用户NAS地址，令牌手动填写；匿名readyz200、无令牌config401、根404，不代表真实签名/官方整曲。本轮无手机/ADB/账号/实际签名/助手部署或后台，69未安装；保留68歌词/玻璃/底Tab/字体500/单曲插队及本地PR2移植，无远端合并。Beta{host['beta']['passed']}/{host['beta']['skipped']}跳过、Stable{host['stable']['passed']}、导航{host['navigation']['passed']}、分析0、10主机图；Media3的14/CENC的10只继承同输入历史。本人整曲/下载/写入/权益奖励/DSP及69设备存储升级待验，助手check_download仍缺；66已确认扫码/重开/网易云自动补源整曲保持，手机号停止。原76冻结物、签名/锁/历史脏改、beta/b6bcd542与空暂存保持；69另存，不回填68，63源码ZIP未补、旧51回收APK不恢复、旧日志不重放。未提交推送上传发布，不接管独立助手会话。下方均历史时点。**

'''
agents.write_text(prefix + old, 'utf-8')
changelog = ROOT / 'CHANGELOG.md'
old = changelog.read_text('utf-8-sig')
assert not old.startswith('## 1.0.69')
changelog.write_text('''## 1.0.69 / code90 — 2026-11-06

- 修复签名设置因安卓原生键名限制和自动重试持续加载，配置使用独立加密存储与明确超时/重试提示。
- 汽水启动只恢复暂停歌曲和进度，主动播放才请求签名；未配置令牌时明确提示，不调用公共服务。
- 预填用户NAS地址，令牌仍手动填写；保留68歌词、玻璃、字体和直接播放队列改动。
- 原签名正式release仅本地交付，未上传发布；NAS真实签名与手机完整播放仍待验收。

''' + old, 'utf-8')
print('1.0.69 docs written from verified host and signed APK receipts')
