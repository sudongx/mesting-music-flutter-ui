"""Record delivery only after the actual original-signed APK is inspected."""
from pathlib import Path
import json

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
apk = json.loads((ROOT / 'release/Mesting-Music-v1.0.70-verification.json').read_text('utf-8'))
host = json.loads((OUT / 'host-check-summary.json').read_text('utf-8'))
native = json.loads((OUT / 'native-packaging-verification.json').read_text('utf-8'))
qr = json.loads((OUT / 'qr-javascript-interface-verification.json').read_text('utf-8'))
assert apk['androidVersionCode'] == 91 and host['passed']
record = {'version': '1.0.70', 'androidVersionCode': 91, 'releaseBuild': True,
          'localDelivery': True, 'host': host, 'apk': apk, 'nativePackaging': native,
          'qrCallbacks': qr, 'physical70Acceptance': False,
          'user29FreeListeningAndFullPlaybackAcceptedIn70': False,
          'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False}
(ROOT / 'docs/validation-2026-11-06-v1.0.70.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', 'utf-8')
fixes = '''# 1.0.70 / code91：汽水媒体读取与官方试听

## 用户反馈与目标

69交付后，用户反馈手动填写NAS令牌后歌词可读，但Mesting汽水歌曲全部无法播放。官版同账号可播放，并已领取29天免费听。完整播放是验收目标，不能把恢复试听等同于接通该账号整曲。用户导出的诊断完整部分只有HTTP200记录，后半乱码；HTTP200不证明拿到了可播媒体，不能单凭它归因签名或会员。

本轮确认修复并构建70正式包，没有授权手机/ADB/私有凭据/真实账号/签名请求或NAS部署操作。

## 已确认缺口与实现

- 保留的67匿名官方回包含 `vod-luna.douyin.com` 播放资料地址，原白名单却跳过该域名。新增独立 `QishuiPlayerInfoLoader` 与受限URI策略，补入该准确HTTPS来源；按固定参考公开User-Agent读取有界JSON，禁用重定向，账号Cookie、token和签名头不进入播放资料/CDN请求。
- 原逻辑即便有完整内嵌媒体也先请求可选链接，链接失败可能阻断已可播放的音频。现在完整媒体可直接使用；需要补资料时再读取，合法内嵌试听可在可选读取失败时保留。
- 扩展 `QishuiMedia` 的主备URL别名、播放器容器、码率和实际时长字段；通用url/URL仅在播放器模型内识别，不能把封面/头像当音频。重复URL保留更强加密事实，不把受保护音频降级成明文。
- 独立 `QishuiPlaybackSelection` 先选择官方已返回的完整音频，再选音质。完整标准音质不会被高码率试听挤掉；官方只有实际试听片段时可播放并设 `isPreview`，歌曲完整目录时长不被试听覆盖。实际音频仍核验时长、格式和授权，不把错误短音频冒充整曲。
- 封面和歌词页显示“官方试听”，保留玻璃、底部Tab、现有歌词交互及500标题字重。截图仅为界面夹具。
- 播放资料读取、模型解析、媒体选择、音频读取、解密与校验分别写入固定阶段和有界数量诊断；不导出URL、签名查询、PlayAuth、Cookie、账号ID或原始异常。HTTP成功后仍能区分资料为空、未知加密、无时长和音质不足，避免统一归因NAS。
- 下载仍要求完整媒体及原有官方下载资格；试听不升级成完整下载，不调用新的奖励/领取/扣额写入，不改变旧未知日志处理。

## 验证边界

主机集成覆盖生产签名API到“仅有官方播放资料链接”再到音频的路径，验证首方账号头只发给官方API。覆盖整曲优先、可播试听、真实临时缓存编排与模拟原生元数据边界、账号切换撤销、HTTP/JSON错误、地址限制、加密去重、下载保护和试听UI。

新增去除真实路径/查询并替换授权的历史匿名官方回包形状夹具，验证原始模型嵌套和60秒片段；这是历史匿名回放，不是本轮账号/整曲或NAS实连。原生CENC10和Media3主机14仅在实际输入哈希相同时沿用，不累加。完整计数和实际APK核对见同版validation。

本轮没有手机/ADB/账号/私有令牌/网络签名/NAS请求或部署修改。用户29天免费听仍是本人反馈；其在当前桌面媒体接口中的真实完整播放、70升级/冷恢复/GPU/DSP和下载尚待验收。没有把活动会员显示当作服务端媒体授权，也没有只用试听宣称整曲已修好。

助手已读策略缺少check_download白名单的问题沿用。66用户已确认扫码原账号、完全重开保持、网易云自动补源整曲继续有效；手机号停止，旧日志不重放，旧51回收APK不恢复，63源码ZIP不补。原78冻结物、签名/锁/历史脏工作区、beta/HEAD和空暂存保持，70另存，无提交推送上传发布。
'''
(ROOT / 'docs/fixes-2026-11-06-v1.0.70.md').write_text(fixes, 'utf-8')
install = f'''# Mesting Music 1.0.70 安装与本轮验收

原签名正式包 `release/Mesting-Music-v1.0.70.apk`，code91，SHA256 `{apk['sha256']}`。

1. 直接覆盖安装70，保留现有应用数据、账号和已保存的NAS令牌。
2. 确认当前仍为同一汽水账号及自建签名服务。无需重新领取29天免费听，也无需把令牌发送给他人。
3. 选择一首你在官版同账号可完整播放的歌曲，核对同一录音版本，在Mesting手动播放。先验证整曲，不能只凭歌词读取、HTTP200或试听成功判定整曲已接通。
4. 若官方只返回试听，封面与歌词页会显示“官方试听”；它不会作为完整下载保存。完整媒体优先于高码率试听。
5. 若仍失败，打开“设置 → 连接诊断”立即导出。新版会包含playerInfoRead、mediaModelParse、mediaSelection或audioRead/audioDecode/audioVerify等固定阶段及候选数量，可区分签名之后的具体失败点；请保留完整JSON。

本轮没有连接手机或读取真实账号/NAS令牌，尚未代验70设备升级及你29天免费听下的实际整曲。安装成功和主机检查不代替上述验收。本版没有上传GitHub发布。
'''
(ROOT / 'docs/INSTALL-v1.0.70.md').write_text(install, 'utf-8')
handoff = f'''# Mesting Music 1.0.70 / code91 本地正式包交接

用户在69交付后报告：NAS令牌填写后歌词可读，但汽水所有歌曲无法播放；官方同账号可播并有29天免费听。确认按共用播放链路修复及构建70，完整播放优先，试听不等于整曲验收。

## 已完成

- 原签名正式APK `release/Mesting-Music-v1.0.70.apk`，{apk['fileSize']}字节，SHA256 `{apk['sha256']}`。
- 独立官方播放资料读取，补入vod-luna.douyin.com；匿名有界读取、媒体字段兼容、完整音频优先和官方试听标识，细分媒体/解密诊断。既有签名设置与暂停恢复、歌词/玻璃/Tab/字体和队列规则保持。
- Beta {host['beta']['files']}文件/{host['beta']['passed']}通过/{host['beta']['skipped']}跳过，Stable {host['stable']['passed']}，导航 {host['navigation']['passed']}，分析0。4张新试听图已查看，10张原界面图与69已看图逐字节一致。整文件计数，不叠加定向结果。
- 实际APK核对原签名、双ARM/定制引擎、7shader/12旧非app库、JNI/DSP声明和R8回调。Media3主机14/CENC主机10仅同输入历史沿用。

## 未完成和注意

- 没有本轮手机/ADB/账号/私有凭据/NAS或签名请求；70未安装。69之后的用户反馈优先于69冻结交接“未安装”，但没有新ADB版本读回。
- 本人29天免费听下的完整媒体、70设备升级/冷恢复/GPU/DSP、下载/写入/奖励待验。助手下载check_download白名单仍缺。测试夹具、历史匿名60秒回放和主机成功不证明本人整曲。
- 66已确认扫码原账号、重开保持、网易云自动补源整曲仍有效；手机号停止，63源码ZIP未补，旧51回收APK不恢复，旧未知日志不重放。
- 原78冻结物、原签名/锁/历史脏改、beta/b6bcd542/空暂存保持；70另存，不回填69。没有Git同步、提交推送、上传发布；不接管独立NAS助手会话。

继续时先读AGENTS及同版实现/安装/validation，按 `.codex-artifacts/2026-11-06-release170/after.json` 只读核对后等待最新用户指令。
'''
(ROOT / 'HANDOFF-CURRENT-SESSION-2026-11-06-v1.0.70.md').write_text(handoff, 'utf-8')
agents = ROOT / 'AGENTS.md'
old = agents.read_text('utf-8-sig')
assert not old.startswith('**2026-11-06 当前本地1.0.70')
prefix = f'''**2026-11-06 当前本地1.0.70/code91正式release：先读[70交接](HANDOFF-CURRENT-SESSION-2026-11-06-v1.0.70.md)、[实现与边界](docs/fixes-2026-11-06-v1.0.70.md)、[安装验收](docs/INSTALL-v1.0.70.md)及[验证](docs/validation-2026-11-06-v1.0.70.json)，按release170/after.json只读核对。用户在69交付后反馈NAS令牌填写后歌词可读但汽水全部歌不播，官版同账号有29天免费听；本轮修复播放资料域名vod-luna.douyin.com及模型解析，独立加载/选择模块，整曲优先、合法试听可播并标明、下载资格不放宽，固定阶段与数量诊断不含凭据。目标是本人整曲，试听不等于完成该验收。Beta{host['beta']['passed']}/{host['beta']['skipped']}跳过、Stable{host['stable']['passed']}、导航{host['navigation']['passed']}、分析0；4张新主机图已看/10张与69已看图字节一致；Media3的14/CENC的10仅同输入历史。实际原签名双ARM/定制引擎/7shader/12旧非app库/JNI/DSP及R8回调另验。未手机/ADB/账号/私有令牌/NAS/签名请求或部署，70未安装，实际29天权益下整曲/下载/写入/奖励/DSP待验，check_download仍缺。69签名存储与启动暂停、68歌词/玻璃/Tab/字体500/单曲插队和本地PR2移植保持；无远端PR合并。66已确认扫码/重开/网易云自动补源整曲有效，手机号停止；原78冻结物/签名/锁/历史脏改、beta/b6bcd542和空暂存保持，70另存不回填69，63源码ZIP未补、旧51回收APK不恢复、旧日志不重放。未提交推送上传发布，不接管独立助手。下方均历史时点。**

'''
agents.write_text(prefix + old, 'utf-8')
changelog = ROOT / 'CHANGELOG.md'
old = changelog.read_text('utf-8-sig')
assert not old.startswith('## 1.0.70')
changelog.write_text('''## 1.0.70 / code91 — 2026-11-06

- 补齐汽水官方播放资料域名和媒体字段，独立加载/选择模块保留已授权音频。
- 完整媒体优先；官方仅返回试听时正常播放并在封面/歌词页标明，下载资格保持。
- 细分资料读取、媒体解析、音频读取/解密/校验诊断，不导出URL、授权或账号凭据。
- 原签名正式release仅本地交付；本人完整播放及29天免费听仍待实际验收，未上传发布。

''' + old, 'utf-8')
print('70 documentation written from actual verified delivery receipts')
