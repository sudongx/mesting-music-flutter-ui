# 汽水 1.0.62 UI 体系继承记录

记录日期：2026-11-06。范围为本轮原生 Flutter 汽水扩展的源码、既有设计记录和八张主机捕获；只追加本文，不修改产品源码、测试、`PRODUCT.md`、`DESIGN.md` 或 `.impeccable/design.json`。

## 结论与依据

本轮采用既有 Mesting / Apple Music / Cupertino 身份，延续指定的完整 premium 玻璃、原有导航组件、页面进退形式和唯一播放器。汽水新增的是平台目的地与业务状态，不建立新视觉世界、全局配色、字体系统或第二套材质控件。

本记录核对了以下现有文件：

- `PRODUCT.md` 的品牌承诺、无障碍原则、历史平台与四入口记录，以及 1.0.50 包名扩展。
- `DESIGN.md` 的颜色与文字 frontmatter、布局、Floating Glass / Readable Hierarchy / Reachable Content / Transition Surface 规则及后续局部扩展。
- `.impeccable/design.json` 的 schema 2、玻璃表面参数、账号字段/按钮/返回及导航组件说明。
- `.impeccable/surfaces/qishui-native-162.md` 的 Operate 模式、汽水三入口和主机证据边界。
- `finish-review.md`、`finish-verdict.md`、`finish-verdict-final.md` 的有界审查链，均位于本文同目录。
- 下表列明的 UI 源码及其共享 owner；未检查原生适配器或后端正确性。

## 已采用的共享 owner

| 项目 | 当前实现与继承情况 | 源码依据 |
| --- | --- | --- |
| 颜色与文字 | 页面读取 `Theme.of(context).textTheme`、`colorScheme.surface/onSurface` 等语义值；根标题使用既有 headline 层级并局部设为 700 字重。底栏继续由 `BetaAppearance.navigation/navigationLabel` 提供选中色。没有为汽水复制一套全局主题。 | `lib/features/music_platform/qishui/qishui_pages.dart`；`lib/features/experience/presentation/beta_bottom_bar.dart` |
| 玻璃输入 | 区号、手机号、短信码及汽水搜索字段已使用 `BetaGlassField`；真实 `TextField`、controller、数字格式约束、手机号/一次性验证码 autofill hints 和忙碌禁用仍由页面持有。区号宽度随文字缩放由 88dp 增至最多 112dp。 | `qishui_login_page.dart`；`qishui_pages.dart`；共享 `lib/shared/widgets/beta_glass_controls.dart` |
| 输入材质 | `BetaGlassField` 复用 `betaMusicPillGlass(context)`，使用 premium、独立 `useOwnLayer` 和 `RepaintBoundary`，圆角 24dp；内部输入无独立实心填充和描边，内距由共享 owner 提供。没有把修正后的字段再定义成汽水专用 token。 | `lib/shared/widgets/beta_glass_controls.dart`；`lib/features/experience/presentation/beta_bottom_bar.dart` |
| 操作与返回 | 使用 `BetaGlassButton` 和 48×48dp 的 `BetaGlassBackButton`；共享按钮默认 52dp 高，继续拥有 premium 材质、禁用/忙碌语义和按压行为。蓝色只沿用既有确认操作变体，不构成新的全局强调色。 | 登录、权益、音效、账号页面；`lib/shared/widgets/beta_glass_controls.dart` |
| 二级页面 | 正常的权益、曲目列表、搜索、音效、账号和安全验证页面已采用 `MusicFeaturePage`。该 owner 提供主题 surface、22dp/700 页头、独立圆形玻璃返回、SafeArea 和最大 760dp 正文约束，并通过 `BetaSecondaryMusicLayout.wrap` 接入既有外围 chrome。此处描述这些正常页面的调用，不扩大为所有异常分支的统一审查。 | `qishui_welfare_page.dart`；`qishui_pages.dart`；`qishui_effects_page.dart`；`qishui_account_page.dart`；`qishui_login_page.dart`；`lib/shared/widgets/music_feature_page.dart` |
| 权益正文布局 | 权益调用点以局部 `SizedBox.expand` 包住 `SingleChildScrollView`，正文继续使用 24dp 内距。它解决共享居中约束与短内容组合产生的空隙，不改变共享框架的全局布局。 | `qishui_welfare_page.dart` |
| 底部导航 | 汽水通过同一 `BetaMusicBottomBar` / `GlassTabBar.searchable` 显示「发现 / 音乐 / 我的」；可见索引 0/1/2 映射保留分支 0/1/3。原网易云/酷狗仍使用四入口。手机与宽屏共用底栏，premium/full、原参数与 `whitenAtBottom: false` 保留。 | `lib/features/experience/presentation/beta_bottom_bar.dart` |
| 二级页 chrome | `BetaSecondaryMusicLayout` 继续组合共享底栏、搜索、当前媒体 accessory、键盘避让和正文底部余量；汽水搜索转到 `QishuiSearchPage`。不增加第二套底栏/播放胶囊 owner。 | `lib/shared/widgets/beta_secondary_music_layout.dart` |
| 页面运动与账号边界 | 汽水页面 push 复用 `betaContentRoute`。已采样的私有页面使用 `QishuiOwnedPage`，在登录归属变化时停止展示旧数据并取消所属读取。源码采用既有 owner 和路由形式，不等同于真机手势或冷恢复验证。 | `qishui_pages.dart`；`qishui_login_page.dart`；`qishui_page_scope.dart` |
| 播放与内容图 | 曲目点击及汽水正在播放区读取共享 `audioHandlerProvider/currentMediaItemProvider`，封面读取 `TrackArtwork/ArtworkImage`。歌单格子按实际宽度与两行缩放文字计算高度。页面没有另建预览播放器；本轮空封面是 fixture 状态，不是生产素材或真实目录完整性的证明。 | `qishui_pages.dart`；`qishui_now_playing.dart`；`qishui_playlist_grid.dart` |

表中未写完整路径的 `qishui_*.dart` 均位于 `lib/features/music_platform/qishui/`。本轮采用已有组件参数，不把页面局部间距、测试字体或某张 fixture 的稀疏密度提升为新的系统规范。

## 已查看的主机证据

本文写入前独立打开了 `.impeccable/review/soda-162/` 下全部八张当前 PNG；以下尺寸另从 PNG 头读取核对。它们是现有 Flutter 主机合成数据捕获，不是 Android 截图。

| 文件 | 捕获条件 | 当前可见依据 |
| --- | --- | --- |
| `host-login-390-1.0.png` | 390×844，浅色，1.0 倍文字 | 三个独立中性字段、圆形玻璃返回、获取验证码与蓝色登录操作。 |
| `host-login-320-1.8.png` | 320×740，深色，1.8 倍文字 | 区号标签与 +86 可读，手机号/短信字段未挤压裁切。登录操作位于初始视口下方；源码保留表单滚动，不声称它在此静态图内完整可见。 |
| `host-discover-390-light.png` | 390×844，浅色 | 发现标题、搜索、测试歌单及汽水三入口共享底栏。 |
| `host-music-390-dark.png` | 390×844，深色 | 音乐标题、模式选择、明确命名的测试曲目与三入口共享底栏。 |
| `host-mine-320-large-dark.png` | 320×740，深色，大字 | 测试账号、账号操作 Wrap 与底栏；正文可继续滚动，不把初始视口下方内容宣称为已完整展示。 |
| `host-welfare-390.png` | 390×844，浅色，实际 push 的主机页面 | 圆形玻璃返回及标题保留；正文从约 y=88 开始，紧接页头后的约 24dp 内距；无原居中空隙。不可领取的活动操作禁用，活动 VIP 与广告奖励时长分别说明。 |
| `host-refusal-390.png` | 390×844，浅色 | 明确显示客户端请求未被接受及重试，不伪装为成功内容。 |
| `host-discover-768-tablet.png` | 768×1024，浅色，1.3 倍文字 | 宽屏测试歌单、同一底栏与搜索；没有改为新的侧轨导航。 |

捕获使用明确标注测试的账号/曲目和有意缺失封面的数据。主机 QA 中文字体只属于 fixture；不写入产品字体规范。静态图显示布局及状态外观，不能证明玻璃的原生折射、GPU 分支、连续动画或真实数据密度。

## 有界修复结论

1. `finish-review.md` 提出 R1（恢复共享输入材质）与 R2（恢复二级页共享玻璃返回框架）。
2. `finish-verdict.md` 记录 R1、R2 已解决，并指出 R2 批次带来的 G1：权益正文在共享框架内出现垂直居中空隙。
3. `finish-verdict-final.md` 只复开修正后的权益捕获，确认 G1 已解决，保留 R1、R2 的既有状态，给出 `disposition: ship`。

最终 ship **仅覆盖 R1、R2、G1**。本文复核采用情况并查看八张现有图，没有重新评分整个表面、扩展审查范围或独立重跑审查中提到的十项测试。没有运行 HTML detector；目标是原生 Flutter，且 Cupertino/premium 身份已经固定。此次普通扩展不补造新视觉世界的 comp、FORM seed 或审批来源。

## 既有文档漂移

`PRODUCT.md` 仍保留 adaptive、历史四入口和旧 `.beta` 包名段落；`DESIGN.md` frontmatter 的 Beta.20 名称、正文/sidecar 的 Beta.19 标题和早期四入口示意也属于历史累计记录。`PRODUCT.md` 后续 1.0.50 扩展已明确公开包名为 `com.mesting.music`；本轮汽水 brief 和当前底栏源码明确汽水采用三入口。不能从旧段落推导恢复旧包名、给汽水补第四入口或改变已确认身份。

按本次授权仅记录漂移，不修订上述全局文件、不重建 sidecar，也不把历史描述与当前汽水差异规范化为新的全局规则。R1/R2 的组件遗漏及 G1 的居中空隙均作为已修复问题记录，不成为设计 token 或后续页面的继承规则。

## 验证与授权边界

- 本记录只核对 UI 源码、指定设计文件、审查文本和八张既有主机图；没有产品改动、测试、构建、新截图、浏览器、设备或账号操作。
- 用户另已授权候选包构建完成后，对连接 Android 执行保留数据的直接安装；本次文档接手时，主任务仅报告已读取设备元数据。该授权与执行结果属于主任务的独立安装记录，本文不表示已执行安装，也不把授权本身记为验收成功。主任务随后报告最终 APK 构建进行中、安装待执行，此状态不扩大本文的 UI 证据范围。
- 主机图及源码不证明实际 Android IME/自动填充、TalkBack、系统边缘/返回、系统栏、GPU/光学、帧率、冷恢复或保留数据升级。源码中的共享返回控件和实际 push 的主机权益图，也不能替代物理设备上的系统返回验收。
- 手机号/SMS 认证、真实会话恢复、服务端对独立移动请求的接受、完整目录/媒体授权、完整播放下载及音频焦点未由本文验证。仅手机号入口的 UI 不能证明认证成功；安全挑战 WebView 也不是已完成的票据/cookie 交接。
- 活动免费 VIP 与广告奖励时长独立。官版广告任务凭证及连续广告奖励时长领取尚未接通；权益页如实说明，不能把活动领取、显示成功或主机 fixture 称为广告奖励到账。
- 官版音效依赖精确当前权益；surface brief 还标明 ARM64 / 4KiB 及固定引擎条件，这些条件没有在本次文档工作中独立验证。页面从可用目录呈现结果，不证明十四项配置均可手动使用，更不证明实际 DSP 输出。原生引擎、后端适配、账号权益和服务写入均不在此次 UI 继承记录的验收范围。

