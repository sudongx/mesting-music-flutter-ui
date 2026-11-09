"""Publish local documentation only after the actual original-signed APK checks."""
from pathlib import Path
import hashlib
import json

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
apk = json.loads((ROOT / 'release/Mesting-Music-v1.0.68-verification.json').read_text('utf-8'))
host = json.loads((OUT / 'host-check-summary.json').read_text('utf-8'))
native = json.loads((OUT / 'native-packaging-verification.json').read_text('utf-8'))
qr = json.loads((OUT / 'qr-javascript-interface-verification.json').read_text('utf-8'))
assert apk['version'] == '1.0.68' and apk['androidVersionCode'] == 89 and host['passed']
record = {'version': '1.0.68', 'androidVersionCode': 89,
          'releaseBuild': True, 'localDelivery': True, 'host': host,
          'apk': apk, 'nativePackaging': native, 'qrCallbacks': qr,
          'userReportedInstalledBeforeThisRelease': '1.0.67',
          'physical68Acceptance': False, 'nasConnectivityAccepted': False,
          'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False}
(ROOT / 'docs/validation-2026-11-06-v1.0.68.json').write_text(
    json.dumps(record, ensure_ascii=False, indent=2) + '\n', 'utf-8')
handoff = f'''# Mesting Music 1.0.68 / code89 本地正式包交接

本轮用户确认：支持自己的 NAS 签名助手 HTTP / HTTPS 地址和访问令牌；汽水胶囊进入音乐Tab，封面切换官版参考歌词；本地合入协作者字体及直接播放两个提交，构建正式 release 包。

## 已完成

- 原签名 release APK：`release/Mesting-Music-v1.0.68.apk`，{apk['fileSize']}字节，SHA256 `{apk['sha256']}`。
- 自建签名设置、加密持久化、局部 HTTP 适配、助手身份/UA/查询契约对齐和匿名签名测试；没有公共服务自动回退。
- 按用户官版截图构造页内歌词，逐句高亮/自动跟随、手动浏览和时间预览/显式 seek+play；玻璃、500字重和底部Tab保留。分享/收藏/队列使用实际功能，未伪造社交统计或卡拉OK。
- 协作者 sudongx PR #2 中 `454c10417ebdaeb8995162cb802465bb0628d300` 和 `bb4b8bccb54693b20b98861aa26ae5fad427cf65` 本地移植。没有远端合并PR或切换主分支；两处冲突保留67业务。
- Beta {host['beta']['files']}文件/{host['beta']['passed']}通过/{host['beta']['skipped']}跳过，Stable {host['stable']['passed']}，导航 {host['navigation']['passed']}，分析0，8张最终主机图。复测按整文件替换，不相加。
- 实际APK核对原证书、双ARM、定制引擎、7shader、12个旧非app原生库、JNI/DSP声明与R8 Web回调。Media3主机14和CENC主机10仅同输入历史沿用，未重测相加。

## 未完成与边界

- 用户本轮明确已经安装67；这是用户反馈，没有新的ADB读回。68未安装，本轮未手机/ADB/真实账号/NAS/外部签名服务/后台操作。
- NAS部署仍由独立签名助手会话及用户负责，本轮只读其接口与实际策略；没有接管、修改、启动或部署助手。
- 没有实际NAS URL和私有访问令牌；NAS实连、原生签名接受和本人汽水整曲/下载/写入/奖励/DSP尚未验收。测试连接只验证配置与签名，不派发官方业务。
- 当前助手白名单缺少 `/luna/commerce/v2/check_download`；未绕过官方资格或助手策略，下载仍需后续明确支持及验收。
- 66已确认的官版扫码原账号、完全重开恢复、网易云自动补源完整播放继续有效。手机号路线停止；旧日志不补发，63源码ZIP不补，旧51回收APK不恢复。
- 原74冻结物、原签名、pubspec.lock、beta/HEAD b6bcd5425e0df3e03febdd460b56d0ed42004c52与空暂存保留。没有Git提交/推送/上传/发布。68另存，不回填67。

详细实现与安装步骤见 `docs/fixes-2026-11-06-v1.0.68.md`、`docs/INSTALL-v1.0.68.md`，本轮证据为 `.codex-artifacts/2026-11-06-release168/`。
'''
(ROOT / 'HANDOFF-CURRENT-SESSION-2026-11-06-v1.0.68.md').write_text(handoff, 'utf-8')
agents = ROOT / 'AGENTS.md'
old = agents.read_text('utf-8-sig')
assert not old.startswith('**2026-11-06 当前本地1.0.68')
prefix = f'''**2026-11-06 当前本地1.0.68/code89正式release包：先读[68交接](HANDOFF-CURRENT-SESSION-2026-11-06-v1.0.68.md)、[实现与边界](docs/fixes-2026-11-06-v1.0.68.md)、[安装配置](docs/INSTALL-v1.0.68.md)和[验证](docs/validation-2026-11-06-v1.0.68.json)，按release168/after.json只读核对。用户反馈67已安装，68仅本地交付未安装；本轮未手机/ADB/账号/NAS/签名服务/后台。自建签名入口支持HTTP/HTTPS/路径前缀/加密令牌和匿名签名测试，按助手config对齐PC身份/UA，失败不自动回退公共服务。汽水胶囊进入音乐Tab，封面切换官版截图参考的页内歌词，逐句跟随/选句预览与显式跳转播放，保留玻璃和底部Tab。协作者sudongx PR2的454c104字体500/400与bb4b8bc直接单曲插队/播放全部替换已本地移植，保留67业务，无远端PR合并。Beta{host['beta']['passed']}/{host['beta']['skipped']}跳过、Stable{host['stable']['passed']}、导航{host['navigation']['passed']}、分析0、8主机图；Media3的14/CENC的10只继承同输入历史不累加。实际NAS/整曲/下载/写入/权益奖励/DSP待验，助手尚缺check_download白名单，不绕过；66已确认扫码/重开恢复/网易云自动补源整曲保持，手机号路线停止。原74冻结物、原签名/锁/历史脏改、beta/b6bcd542及空暂存保持；68另存，63源码ZIP未补、旧51回收APK不恢复、旧日志不重放。未提交推送上传发布，不接管独立NAS助手会话。下方均保留历史时点。**

'''
agents.write_text(prefix + old, 'utf-8')
changelog = ROOT / 'CHANGELOG.md'
old = changelog.read_text('utf-8-sig')
assert not old.startswith('## 1.0.68')
changelog.write_text('''## 1.0.68 / code89 — 2026-11-06

- 新增自建汽水签名助手设置：HTTP/HTTPS、路径前缀、加密令牌、测试和保存，适配助手设备身份与UA。
- 汽水胶囊进入音乐Tab；封面切换官版参考的页内歌词，支持逐句跟随、选句预览和显式跳转播放。
- 合入协作者 sudongx 的统一字体/500标题字重与直接播放改动；单曲插队保留，播放全部替换队列。
- 原签名正式release APK仅本地交付；NAS、设备及本人完整音乐业务仍待验证，未上传发布。

''' + old, 'utf-8')
print('Local 1.0.68 documentation recorded from actual APK and host receipts')
