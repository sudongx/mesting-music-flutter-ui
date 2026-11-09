# 本会话总交接：1.0.64—1.0.66、汽水扫码与网易云自动补源

交接日期：2026-11-06（Asia/Shanghai）。工程：`D:\AnLi`。
用户当前仅要求编写交接并新开会话接收；本次交接没有新产品改动、测试、构建或手机操作。

## 先看最终结论

最新本地交付和本会话最后一次授权设备读回均为 **1.0.66/code87**，包名
`com.mesting.music`，内部 flavor 为 beta。原签名、保留数据覆盖安装已经完成。

用户在本聊天明确验收了三项：

1. 使用汽水音乐官方 App 扫码后，**Mesting 已显示原账号资料**。
2. 完全关闭 Mesting 后重开，**仍显示原账号资料、保持登录**。
3. 网易云直接播放《可我只是海》—LBI利比，不手动换源，**自动换源后可完整播放**。

用户更早还确认了酷狗、网易云基本播放恢复正常。下载规则按确认保持原样。

**重要：66的交付文档、validation 和源码 ZIP 在这三次反馈前已冻结，其中的 pending 字段
只是打包时状态。后续实机反馈已单独追加，不能再据旧 pending 说登录／例曲仍未验收，
也不要为更新这些文字重建、覆盖或回填冻结物。** 最新业务证据：

- `.codex-artifacts/2026-11-06-release166/user66-feedback.json`
- `.codex-artifacts/2026-11-06-release166/ACCEPTANCE-AFTER-FREEZE.md`
- `.codex-artifacts/2026-11-06-release166/after.json`

关闭重开是用户实际反馈；没有冒称 agent 另做过 ADB 强制终止、独立跨进程解密或
官版私有数据库检查。单首例曲通过，也不代表全部歌曲、全部音源／音质都已实测。

## 本会话完成了什么

### 1. 1.0.64/code85：修复双平台普通播放回归

接续时62／63短信仍2156，63还出现酷狗、网易云音频加载未完成。已有脱敏日志和
R8映射指向新增 `SodaAudioProcessor` 的 `ByteBuffer` 自拷贝。

- 使用实际 Media3 1.9.2 缓冲实现独立复现共享 `EMPTY_BUFFER` 触发的自拷贝异常。
- 空输入直接返回；保留未读输出和尾块，避免零长度输出替换／所有权错误。
  没有更换播放器、定制 Flutter 引擎或依赖版本。
- 原生主机14项通过，Android／DSP平台入口为测试缝；用户后续确认双平台基本播放正常。
- 同版加入本机 WebView 扫码候选、独立会话／本人二次验证／资料核验和加密提交。
  这时的“抖音扫码兜底”和手机号主入口是历史方案，已被66的最新决定替代。

实现入口：
`third_party/just_audio/package/android/src/main/java/com/ryanheise/just_audio/SodaAudioProcessor.java`、
`tool/test_soda_audio_processor.py`、`test/native_soda_audio/`。

### 2. 1.0.65/code86：网易云试听自动补源与汽水定位

- 补小数时长、旧短队列的曲库时长，以及官方实际短音频的有界头部识别；发现仅试听时，
  播放自动尝试已启用的其他源，继续核对同一录音并保留网易云歌曲身份。
- 下载仍按原来的官方优先和手动选源规则，不跟着播放自动换源。
- 修正汽水实际 BFF 扫码地址被本地白名单误拒的问题，区分本地拒绝和服务业务码0。
- 在授权范围读取手机实际安装官版的公开包／APK信息，REA 区分19.0.0与旧21.5分析样本，
  查到 legacy 发送契约、安装注册和动态原生安全边界。静态字段修正没有被当成短信接通。
- 用户实测65短信仍2156；抖音扫码打开404；改用官版确认后，Mesting查询仍2156。
  临时电脑验证端只读到 `new`，独立匿名手机对照只得到 code0/new，均未当作账号成功。

65的失败候选和证据保留，不能倒改为成功，也不能拿66结果替它验收。

### 3. 1.0.66/code87：按可工作参考接通汽水扫码

用户最终明确：**“移除手机号登录吧，只保留扫码登录。”**

- 所有汽水登录入口直接进入扫码页；移除手机号／区号／验证码表单、发码倒计时和
  短信安全页。历史手机号实现仅留作回归／迁移参考，生产路由不导入，实际双 ARM
  AOT 包检查发码和短信登录端点都已不在运行代码中。
- 扫码文案改为使用已登录原账号的**汽水音乐官方 App**，不是抖音。
  增加“打开汽水扫一扫”：显式绑定 `com.luna.music` 和公开路由
  `luna://luna.com/scan_qr_code`。同一手机先截图，再在官版从相册识别，由本人确认。
- `QishuiQrContext` 独立维护每个 QR 的完整 PC/Web 公共参数、16位 Web device_id、
  15位 install_id 和启动 nonce。它们不是 Android BDInstall 注册结果或原生签名因子。
- Android同源 WebView 初始化后，把与查询一致的 nonce 写入 `xmst`／`xmsty`；
  后续保留 SDK 自己更新的状态，不在每次查询时重建身份或重新播种。
- 生成、查询、本人验证和资料核验贯穿同一会话；保留服务端原始 `qrcode_index_url`，
  不改写成 `light/invoke/scan_login`。两个工作参考也固定传 `is_frontier=true`，
  不能仅凭创建响应 false 就认定该字段是根因。
- 只有服务端确认、取得本次会话凭据并核验真实 Luna 资料后才加密提交。
  不能用“官版已确认”、本地回调或残留 Cookie 直接判成功；取消、过期、旧结果保护保留。
- Web身份随账号加密保存／恢复，旧存档缺少新字段仍向后兼容；业务错误对新字段和
  nonce／token 脱敏。只清理本次汽水域 Cookie，不清其他平台全局 Cookie。
- 86→87原签名 `adb install -r` 保留数据覆盖，读回版本正确，首次安装时间保持。
  后续用户完成扫码、关闭重开和网易云例曲验收，详见顶部追加记录。

主要维护入口：

| 文件 | 职责 |
| --- | --- |
| `lib/features/music_platform/qishui/qishui_login_page.dart` | 稳定入口，直接显示扫码页 |
| `lib/features/music_platform/qishui/qishui_qr_context.dart` | 每QR的Web参数和启动nonce |
| `lib/features/music_platform/qishui/qishui_qr_login.dart` | Gateway、状态机、本人验证、资料核验 |
| `lib/features/music_platform/qishui/qishui_qr_login_page.dart` | 页面生命周期、回前台续查、扫一扫按钮 |
| `android/app/src/main/kotlin/com/mesting/mesting_music/QishuiWebAuthPlugin.kt` | 同源WebView、SDK、受限请求和官版入口 |
| `lib/features/music_platform/qishui/qishui_session.dart` | 账号协议／Web身份的加密保存与恢复 |
| `lib/features/music_platform/qishui/qishui_web_routes.dart` | 明确的PC/Web接口适配；未知操作不猜接口 |

### 4. 参考项目及调研结论

- `sodahub-org/sodam`：`f43a22b6239e4fb6c4c099566f6722bcecfb9b60`。
  用户确认 Windows SodaM 用汽水官方 App 扫码成功。
- 它锁定的 `sodahub-org/libresoda`：`5edd2ff3b825f0a16b1e281204822ee06842df9c`。
- Android `mytv-android/myMusic`：`9c0f1f0ccb1b1046306f61c50998e327c040a6bc`，
  重点 `SodaQrLogin.kt`／`SodaQrSigner.kt`。用户提供可登录对照，本轮据此对齐完整Web会话。
- `guowenye/qishui-api`：`e409c10fe7441a10d370da7da61d62bbc1e5126c`；
  `zihe114514/qishui-reverse-report`：`ef74501407ef91bad146f0398be16a80538e0f0d`。
  后者的官方桌面 `bdms.node` 路线是PC组件，不能直接当Android手机号／完整媒体能力使用。
- 安全页／SDK资源与工作参考逐字节一致，问题修正集中在会话契约及初始化；NOTICE保留来源。
  没有运行公开签名服务器，也没有导入 SodaM／官版私有 Cookie 来冒充新登录。

代码来源与许可：`third_party/qishui_web_auth/NOTICE.md`、`PROVENANCE.json`。
私有研究／匿名诊断：`.codex-artifacts/2026-11-06-soda165-user-failure/`；
REA证据已保存，独立临时诊断包已卸载。不要上传其中的原始APK、二维码、令牌或大型捕获。

## 当前交付物与验证口径

| 交付 | 大小／SHA256 |
| --- | --- |
| `release/Mesting-Music-v1.0.66.apk` | 111945581字节；`cde2d5772f079570252907a588556b3bf8a5e2733f04716fbbfe3aa1022491f9` |
| `Mesting-Music-v1.0.66-source.zip` | 63702555字节；`d8d33388db2e58108b843d654fdb6b9148e5281186a02075efe796270ce7040b` |

源码ZIP包含2803份文件、2805个条目，保留完整脏工作区产品源码，不包含签名材料、
构建缓存、真实凭据／官版APK／私有捕获。本总交接和新AGENTS入口在66冻结之后追加，
不会回填该ZIP。旧64／65交付和其余冻结物同样不覆盖。

66主机验证：Beta210文件最终有效用例2417通过／2条件跳过；Stable63、导航55、分析0；
8张主机界面图已查看。首轮全量2416，末7整文件复跑替换对应结果并包含新1项，不累加。
旧“无Web身份”断言和触感偏好夹具失败原日志保留，修复后检查通过。

音频原生14项仅继承64同生产源码／runner输入的既有结果，本轮只重新比对输入，
没有重跑或叠加旧SDK／Rust数量。实际66 APK另验原证书、双ARM、定制引擎、7shader、
12旧非app原生库、原JNI／DSP声明和两个带运行时注解的R8 JavascriptInterface回调。
主机图与库存在检查不代表手机GPU／DSP效果已验收。

本轮没有挂起的编码、构建、上传、发布或清理任务。源码／APK仅本地交付；
没有Git同步、提交、推送、上传或发布。既有60归档状态见旧交接，本轮未联网复核远端。

## 未完成、已停止和后续注意事项

1. **汽水完整业务仍有缺口。** PC/Web登录成功不代表全部媒体／完整下载、收藏等写入、
   权益、广告奖励结算、持续免广告领取和官方DSP音效已接通或验收。
   `QishuiWebRoute` 未适配操作会明确提示到官版操作；后续需用户决定下一项范围。
2. **手机号路线已停止，不是待自动续修任务。** 短信2156根因没有完整在线证明；
   BDInstall和原生动态安全未完成。用户已决定仅扫码，不要重新增加手机号入口。
3. **验收范围有限。** 网易云例曲已实测自动补源完整播放；不外推全部11脚本、全部歌曲／
   音质／网络和VPN条件。下载规则源码保持，未把这次播放当成新的下载验收。
4. **历史遗留仍保留。** QQ／微信本机原生登录、酷狗官方累计／日周月真实统计入账、
   网易云历史总时长及十月683分10秒、旧私钥失效原因／旧密文、网易云真实签到和
   免费听领取到账等，沿用既有交接的未解决／未验边界；本轮没有解决或重新安排它们。
   旧未知听歌或权益写入日志不补发。
5. **归档缺口。** 63完整源码ZIP仍未生成；当时私有before资料保留，不用当前源码冒充63。
   旧51个release APK已按更早授权移入回收站，不按旧112项基线恢复或报丢失。
6. **保护现有工作区。** 当前 `beta`，HEAD仍是
   `b6bcd5425e0df3e03febdd460b56d0ed42004c52`，暂存为空；这个旧HEAD不是完整当前产品。
   不能reset／clean／stash／切分支／覆盖脏改。72份冻结物、原签名、锁和定制引擎保持。
7. **设备和发布授权不外推。** 本轮已获必要手机调试和安装授权并完成；本次交接不连接手机。
   新会话先只读核对后等待，不自动ADB、账号、扫码、发码、奖励、后台、重新测试构建、
   Git同步清理或上传发布。不得接管其他会话的旧上传任务。
8. **开发约定。** 新需求／bug一次只问一个问题，理解后给具体方案并按已有授权实施；
   不重问已确定的“汽水仅官版扫码”和“播放自动补源、下载手动选源”选择。
   代码写清注释并保持协议、状态机、UI和存储解耦。

## 新会话第一轮怎么接收

1. 先读本文件，再读AGENTS顶部最新总交接入口及66的实现／安装／验证材料。
   66原交付中的待验状态，以顶部三个追加验收记录和本文件为准。
2. 只读加载 `.codex-artifacts/2026-11-06-session166-handoff/after.json`：
   独立核对72份 `frozenArtifacts`、1606份 `productFiles` 和 `currentFiles` 摘要；
   核对pubspec为1.0.66+87，分支／HEAD／空暂存、锁和签名文件摘要保持。
   本次文档变化只允许新增本总交接和在AGENTS前置入口，66产品编译输入不变。
3. `postFreezeDocumentationDeltas` 中的AGENTS变化是本次明确追加的总交接入口，
   不是冻结物损坏。不要为让旧ZIP正文同步而回填冻结物。
4. 不重跑此目录中会写before／after收据的脚本，不执行测试、构建、手机／账号或网络操作。
   只读核对后报告接收结果、完成项和未完边界，随后等待用户下一条指令。

构建环境仅供以后获明确任务时使用：Flutter `D:/CodexCache/flutter-3.41.9`；
JDK `D:/CodexCache/android-build/jdk/jdk-17.0.20.1+1`；Android SDK
`D:/CodexCache/android-build/sdk`。可参考release166的脚本，不能继承其旧测试结果当新结果。
大测试集合用dart直接运行flutter_tools.snapshot避免Windows命令长度问题；重构建时
不要同时运行REA重JVM／大测试与发布构建，既有发布配置为2GiB、单worker，R8可能较慢。

当前只读移交基线、变化清单和后续接收回执均在
`.codex-artifacts/2026-11-06-session166-handoff/`，不会单独公开上传。
