"""Write public, source-freezable handoff only from measured final receipts."""
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-11-04-release151'

def read(path):
    return json.loads(path.read_text(encoding='utf-8-sig'))

def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

apk = read(ROOT / 'release/Mesting-Music-v1.0.51-verification.json')
checks = read(OUT / 'host-check-summary.json')
payload = read(OUT / 'formal-payload-verification.json')
build = read(OUT / 'build-final-verification.json')
notes = read(OUT / 'local-apk-notes-verification.json')
sdk = read(OUT / 'sdk-host-summary.json')
assert apk['androidVersionCode'] == build['versionCode'] == notes['versionCode'] == 72
assert checks['analysisIssues'] == 0 and apk['ringDownloadSdkVersion'] == sdk['version'] == '1.1.2'
assert checks['beta-complete.jsonl']['counts'] == {'success': 1869, 'skipped': 2}
assert sdk['counts'] == {'success': 563}

validation = {
    'version': '1.0.51', 'androidVersionCode': 72, 'date': '2026-11-04',
    'preparedAtUtc': datetime.now(timezone.utc).isoformat(),
    'packageName': 'com.mesting.music', 'appName': 'Mesting Music',
    'internalNativeUiFlavor': 'beta', 'apk': apk, 'host': checks,
    'actualBuild': build, 'formalPayload': payload, 'productionApkNotesReader': notes,
    'sdk': sdk, 'routeAudit': read(OUT / 'navigation-route-audit.json'),
    'protectedOldFrozenArtifacts': 92,
    'protectedGitHead': 'b6bcd5425e0df3e03febdd460b56d0ed42004c52',
    'originalSigningPreserved': True, 'dependencyChange': 'ring_download_sdk 1.1.0 -> 1.1.2 only',
    'phoneAdbAccess': False, 'realMusicAccountAccess': False, 'backendAccess': False,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
    'oldBetaPrivateDataAutomaticallyMigrated': False,
    'realDeviceUpgradeAccepted': False, 'hostImagesAreNotPhoneGpuAcceptance': True,
    'durationIssueResolved': False, 'oldAcceptedOrUnknownLogsReplayed': False,
}
(ROOT / 'docs/validation-2026-11-04-v1.0.51.json').write_text(
    json.dumps(validation, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

install = f'''# Mesting Music 1.0.51 安装与验收

本地正式 APK：`release/{apk['file']}`；完整源码：`Mesting-Music-v1.0.51-source.zip`。正式应用名 Mesting Music、包名 `com.mesting.music`、版本 1.0.51/code72，内部保留 beta UI/native/定制引擎。

- APK 字节：{apk['fileSize']}。
- APK SHA-256：`{apk['sha256']}`。
- 原安装证书 SHA-256：`{apk['certificateSha256']}`；V2/V3 签名通过。
- 双 ARM（arm64-v8a、armeabi-v7a），API24+、target36；原定制引擎、七份玻璃 shader、八份原 SDK 库保留。
- 新增两份 Ring Download SDK 1.1.2 接收缓冲库：先核对官方源文件，再以相同 NDK 的 `llvm-strip --strip-unneeded` 重现正式构建的去符号处理，结果与实际 APK 逐字节一致；另检查 ELF、对齐及 JNI 保留。

## 安装边界

本版与 1.0.50 的包名和原签名一致、构建号递增，实际手机覆盖安装及数据保留仍需用户验收。旧 `.beta` 应用属于另一个包，其私有数据不会自动迁移；旧 Stable 同包名的真实升级兼容也未验收。不要为了安装先卸载原应用。

本轮未访问手机/ADB/真实音乐账号或后台，未安装、上传或发布。仅提供本地包；GitHub 已归档至 49 的既有记录保持，50/51 未追加发布。

## 本版需要验收

1. 从任意 Tab 进入普通二级、三级及更深页面：进入从右往左、返回从左往右；连续返回到真实上一层，原页面状态和滚动位置保留。覆盖歌单、专辑、歌手、列表、设置/设置子页、资料和消息/会话；特殊播放器、搜索及头像预览保持原进入形式并反向退出。
2. 先登录网易云，再进入酷狗的手机号、酷狗扫码、微信扫码和 QQ 扫码；以及反方向进入网易云扫码、验证码、手机密码、邮箱密码。平台切换、方式选择、输入/扫码/等待页均不出现底部导航、搜索或播放控件。
3. 在这些层级分别用顶部返回、系统返回、左侧滑和右侧滑；每次只退上一层。返回到普通页面时，底部控件恢复且仍为原平台账号。
4. 每日推荐等页面往后滚动时，下一批等待出现在列表末端；明确下拉刷新才在顶部。刷新等待中原歌曲、封面和滚动位置保持。
5. 从远处点击“上次播放到这首”或“回到顶部”，观察连续滚动中间过程；定位后短暂高亮、不直接播放。滚动途中手动拖动应中止旧定位；系统减少动态效果开启时立即定位。
6. 核对新版 SDK 的真实 CDN/P8P、暂停续传、校验和安装路径。Music 没有开启用户分享上传；不因更新 SDK 而上传手机文件。SDK 自带/主机测试不能代替真实下载与系统安装验收。

## 已完成的本机验证

Beta 161 文件：1869 通过、2 条件跳过；Stable 六文件 63 通过；独立导航整文件 55 通过（含四个真实 Tab × 七类路由共 28 条路径）。SDK 29 个整文件合并核对：563 通过；逐文件只计一次，初始失败与复跑记录保留。主机静态分析 0 问题，最终 59 张渲染核对，实际 APK 八条说明通过生产 Range 读取器从最终 APK 本机分段读取。

R4 原生 16 项属于七份输入一致的历史继承检查；本版实际 Android 编译、包名、签名、新 SDK 原生库、原引擎/玻璃和权限另核验。R4 旧候选双开结果不作为本版真机验收。

历史总时长及十月 683 分 10 秒尚未解决，旧已接收或结果不明日志未重发。实现与证据见 [修复说明](fixes-2026-11-04-v1.0.51.md) 和 [验证清单](validation-2026-11-04-v1.0.51.json)。
'''
(ROOT / 'docs/INSTALL-v1.0.51.md').write_text(install, encoding='utf-8')

handoff = f'''# 2026-11-04 当前会话 1.0.51/code72 交接

用户确认后完成双平台全 App 普通多级页面进入/返回反向过渡、所有登录方式全屏及逐级返回、列表续载菊花位置与刷新保留内容、末播定位及回顶部连续滚动，并新增确认将 Ring Download SDK 1.1.0 升级至官网正式 1.1.2、一起交付本版。消息路径只是复现案例，修复不局限“我的消息”。

先读 [安装/设备验收](docs/INSTALL-v1.0.51.md)、[根因与实现](docs/fixes-2026-11-04-v1.0.51.md)、[最终验证](docs/validation-2026-11-04-v1.0.51.json)。APK：`release/{apk['file']}`，{apk['fileSize']} 字节，SHA-256 `{apk['sha256']}`；完整源码：`Mesting-Music-v1.0.51-source.zip`。源码 SHA 另见 release 同版 SHA256/源码验证文件，避免将自身哈希回填进 ZIP。

## 完成内容

- 共用路由修正 Material 空委托动画压住 secondary animation 的问题，实际保留 Tab/外层壳和入口路由全部接入可反向过渡；兼容原 Cupertino 入口，保留播放器/搜索/头像特殊形式。
- 平台切换、方式选择及全部输入/扫码页登记真实路由的底部控件覆盖状态；8 种方式、双平台账号保留、顶部/系统/双侧边缘返回核验。
- 首屏/顶部刷新/末端续载分开判定，往后滚动不闪顶部刷新动画；每日推荐刷新保留原数据和位置。
- 长懒列表定位取消估计位置的 jumpTo，以实际行高逐段连续动画，再精确对齐；回顶部共用距离相关过渡，手动拖动中止旧定位，仍只定位和高亮。
- SDK 官方 ZIP 原始242文件逐项比对，宿主仅删一处冗余非空断言并补注释，其余241保持字节；依赖锁只改 SDK 版本。保留 music 标识/原更新源/安装器/关闭用户上传；正式包排除新 SDK 附带的 x86 库，只保留双 ARM。

## 验证

Beta 161文件1869通过/2条件跳过，Stable6文件63，独立导航整文件55；SDK29整文件563通过，静态分析0，最终59张主机图。按完整文件复跑替换计数，不跨轮累加；SDK两轮计时竞速波动和独立目录夹具问题均保留原日志，最终相关整文件隔离通过。分析兼容后另完整复跑下载恢复及 Music 接入文件。

实际本版 Android 编译、code72/com.mesting.music、原证书V2/V3、双ARM、16KiB/ELF、定制引擎、7玻璃shader、8份旧SDK库及2份新缓冲库、JNI、R4媒体桥/图标/权限与APK八条说明读取另验。R4原生16仅七份同输入继承，不冒充本轮原生测试或真机验收。

## 保持和边界

92份旧冻结APK/源码、签名、原脏工作区、beta/b6bcd542和空暂存保留。依赖锁仅有获授权SDK版本改动，原锁另存保护。1.0.50已冻结不覆盖；本版另存APK/完整源码。AGENTS新前缀写入本版冻结前，旧50及更早交付不回填。

未手机/ADB/真实音乐账号/业务后台，未提交/推送/上传/发布；49的GitHub归档保持，50/51仅本地。SDK供应方真实设备材料不能代替Music验收。手机侧实际覆盖升级、IME/GPU/系统侧滑、真实登录、CDN/P8P及账号行为待用户验收。

历史总时长及十月683分10秒仍未解决，旧已接收/结果不明weblog及旧原生日志不重发；一起听剩余设备范围按原边界保留。新接续先只读核对本交接、AGENTS、refs与工作区，再等待方向；不自动pull/reset/clean/重建或外推设备、账号、提交发布授权。
'''
(ROOT / 'HANDOFF-CURRENT-SESSION-2026-11-04-v1.0.51.md').write_text(handoff, encoding='utf-8')

agents = ROOT / 'AGENTS.md'
old = agents.read_bytes()
assert not old.startswith(b'**2026-11-04 ' + '本地正式交付1.0.51'.encode())
prefix = '**2026-11-04 本地正式交付1.0.51/code72：先读[51交接](HANDOFF-CURRENT-SESSION-2026-11-04-v1.0.51.md)、[安装](docs/INSTALL-v1.0.51.md)及[实现](docs/fixes-2026-11-04-v1.0.51.md)。按确认完成双平台全App普通多级页面反向返回、全部登录方式隐藏底栏与逐级侧滑、末端续载菊花和刷新保留、末播及顶部连续滚动；另确认升级官方Ring Download SDK1.1.2，保留music标识/更新源/原签名和关闭用户上传。Beta161文件1869通过/2条件跳过、Stable63、独立导航55、SDK29文件563通过、分析0及59主机图；实际原签名双ARM/定制引擎/7shader/8旧SDK及2新缓冲库/JNI/包名与APK八条说明读取另核验，R4原生16仅七份同输入继承。92份旧冻结物、签名、全部脏改动、beta/b6bcd542和空暂存保留；锁仅SDK1.1.0→1.1.2获授权变化并保护原锁。51仅本地APK/完整源码，50冻结不覆盖，未提交推送发布。未手机/ADB/真实音乐账号/后台，实际升级/IME/GPU/登录/CDN/P8P及账号行为待验收；历史总时长及十月683分10秒未解决，旧日志不重发。新接手先只读核对后等待，不外推设备/发布授权；下方均为历史时点。**'
agents.write_bytes(prefix.encode('utf-8') + b'\n\n' + old)
record = {'version': '1.0.51', 'code': 72, 'priorAgentsBytesSha256': hashlib.sha256(old).hexdigest(),
          'documentsWrittenBeforeSourceFreeze': True, 'actualApkSha256': apk['sha256']}
(OUT / 'delivery-documents.json').write_text(json.dumps(record, indent=2) + '\n', encoding='utf-8')
print(json.dumps(record, indent=2))
