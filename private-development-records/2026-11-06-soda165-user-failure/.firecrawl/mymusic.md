[Skip to content](https://github.com/mytv-android/myMusic#start-of-content)

You signed in with another tab or window. [Reload](https://github.com/mytv-android/myMusic) to refresh your session.You signed out in another tab or window. [Reload](https://github.com/mytv-android/myMusic) to refresh your session.You switched accounts on another tab or window. [Reload](https://github.com/mytv-android/myMusic) to refresh your session.Dismiss alert

{{ message }}

main

[**1** Branch](https://github.com/mytv-android/myMusic/branches) [**43** Tags](https://github.com/mytv-android/myMusic/tags)

[Go to Branches page](https://github.com/mytv-android/myMusic/branches)[Go to Tags page](https://github.com/mytv-android/myMusic/tags)

Go to file

Code

Open more actions menu

## Latest commit

![ldm0206](https://avatars.githubusercontent.com/u/176097216?v=4&size=40)![claude](https://avatars.githubusercontent.com/u/81847?v=4&size=40)

[ldm0206](https://github.com/mytv-android/myMusic/commits?author=ldm0206)

and

[claude](https://github.com/mytv-android/myMusic/commits?author=claude)

[L1 设备有安全解码器就用它；换源失败不再来回切](https://github.com/mytv-android/myMusic/commit/9c0f1f0ccb1b1046306f61c50998e327c040a6bc)

Open commit detailssuccess

1 hour agoNov 6, 2026

[9c0f1f0](https://github.com/mytv-android/myMusic/commit/9c0f1f0ccb1b1046306f61c50998e327c040a6bc) · 1 hour agoNov 6, 2026

## History

[164 Commits](https://github.com/mytv-android/myMusic/commits/main/)

Open commit details

[View commit history for this file.](https://github.com/mytv-android/myMusic/commits/main/) 164 Commits

## Folders and files

| Name | Name | Last commit message | Last commit date |
| --- | --- | --- | --- |
| [.github/workflows](https://github.com/mytv-android/myMusic/tree/main/.github/workflows "This path skips through empty directories") | [.github/workflows](https://github.com/mytv-android/myMusic/tree/main/.github/workflows "This path skips through empty directories") | [Material 3 Expressive 界面重做，版本号改为 1.0](https://github.com/mytv-android/myMusic/commit/ae10217b80a68bfe39e723658240f9c26a8e67eb "Material 3 Expressive 界面重做，版本号改为 1.0  - 主题：material3 固定 1.5.0-alpha25（保持 minSdk 23），MaterialKolor 按封面取色并渐变过渡，播放页固定深色 Vibrant；Haze 模糊；外观设置新增配色来源、风格、对比度、纯黑背景、模糊策略 - 外壳：四个入口，设置移到“我的”和导航栏底部；手机悬浮迷你播放器，平板导航栏 + 底部播放条 / 常驻播放窗格，电视抽屉导航 - 沉浸式播放页（手机 / 平板 / 电视三种布局、自动隐藏、封面手势、歌词跳转、预测性返回），迷你播放器到播放页的封面共享元素转场 - 全部页面按设计稿实现手机、平板、电视三端；公共组件放在 ui/components - 睡眠定时（放在播放服务里，结束前淡出）；播放缓存上限可调，电视默认 256 MB - 修复：saved_songs 主键改为 (key, bucket)（数据库迁移 4→5），QQ 扫码登录二维码图片透传 - 内置 Roboto Flex 子集字体；TalkBack 走查与修复（docs/accessibility-audit.md） - Baseline Profile 模块与帧时间测试（docs/performance.md） - 版本名固定为 1.0，CI 发布标签改为 v1.0.<构建号>，界面上显示构建号  Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>") | 2 weeks agoOct 22, 2026 |
| [app](https://github.com/mytv-android/myMusic/tree/main/app "app") | [app](https://github.com/mytv-android/myMusic/tree/main/app "app") | [L1 设备有安全解码器就用它；换源失败不再来回切](https://github.com/mytv-android/myMusic/commit/9c0f1f0ccb1b1046306f61c50998e327c040a6bc "L1 设备有安全解码器就用它；换源失败不再来回切  真机 L1 CDM 的明文只肯交给安全解码器，Media3 选了普通解码器时症状就是 6006 requested key has not been loaded / 4003；有安全解码器就强制用。 顺带把 CDM 属性分开读、打出安全解码器有无，模拟器 L3 行为不变。  换源重试原来只排除上一次失败的源，两个源会互相顶替、来回切个不停， 且跳进度后每轮都触发。改为按曲目累积排除，播起来（READY）再清空。  Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>") | 1 hour agoNov 6, 2026 |
| [baselineprofile](https://github.com/mytv-android/myMusic/tree/main/baselineprofile "baselineprofile") | [baselineprofile](https://github.com/mytv-android/myMusic/tree/main/baselineprofile "baselineprofile") | [修复 Compose 性能问题并补齐审计验证](https://github.com/mytv-android/myMusic/commit/e54e0a6123b5c0de2a3b3aa94d4629ed55a35fc0 "修复 Compose 性能问题并补齐审计验证  - 后台执行文件统计、收藏/下载解码、歌词与二维码等首次计算 - 动态选择列表惰性化，补齐惰性项 contentType 与稳定 key - 拆分播放器/搜索状态依赖，缓存 TV 头图与列表派生数据 - 隐藏播放器停用进度与动画，保留占位、滚动和焦点 - 缓存骨架、焦点与静态渐变资源，下载进度限频 - 增加 Compose 行为测试和可失败的基准旅程断言 - 归档审计、修复清单与帧时间测量报告；共享模拟器漂移使性能差异不可归因  同时包含此前未提交的歌词背景、律动分析与汽水签名器改动。  Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>") | 2 weeks agoOct 26, 2026 |
| [docs](https://github.com/mytv-android/myMusic/tree/main/docs "docs") | [docs](https://github.com/mytv-android/myMusic/tree/main/docs "docs") | [界面稿：分类「全部」实际只列央广 19 个台，改成和实现一致](https://github.com/mytv-android/myMusic/commit/bbccd8b6fce5d14706ad65e77f66733d6046705a "界面稿：分类「全部」实际只列央广 19 个台，改成和实现一致  Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>") | 16 hours agoNov 5, 2026 |
| [gradle](https://github.com/mytv-android/myMusic/tree/main/gradle "gradle") | [gradle](https://github.com/mytv-android/myMusic/tree/main/gradle "gradle") | [支持折叠屏与双屏：书本/桌面姿态、铰链分栏、弹窗避开折痕](https://github.com/mytv-android/myMusic/commit/2af9bf74a0c9789910b3376a07814b1fc81faed1 "支持折叠屏与双屏：书本/桌面姿态、铰链分栏、弹窗避开折痕  - 接入 Jetpack WindowManager，读取折痕/铰链，折叠展开不重建界面 - 书本姿态：播放页左页控制右页歌词；我的、设置、同步、详情、搜索双栏与底部播放条以折痕为界 - 桌面姿态：播放页上半屏歌词（可在设置里换封面或时钟），下半屏常驻控制；只在播放页已打开时切换 - 海报墙大卡落在右页或上半屏；侧边面板、居中弹窗避开折痕 - 双屏横跨上下时列表在上屏、详情在下屏；分屏矮窗口使用紧凑播放页 - 新增折痕切分单测与 window-testing 仪器测试  Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>") | last weekOct 31, 2026 |
| [third\_party/music-lib](https://github.com/mytv-android/myMusic/tree/main/third_party/music-lib "This path skips through empty directories") | [third\_party/music-lib](https://github.com/mytv-android/myMusic/tree/main/third_party/music-lib "This path skips through empty directories") | [实现 Android 6.0 及以上的 Compose 音乐客户端](https://github.com/mytv-android/myMusic/commit/146f819d1fbde198012308d33da89d13d742f132 "实现 Android 6.0 及以上的 Compose 音乐客户端  纳入 AGPL-3.0 的 music-lib，并通过 GoMobile 提供十二个音乐平台的搜索、播放、歌词、下载和登录能力；加入手机、平板、电视自适应界面及 GitHub Actions 发布流程。  Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>") | 3 weeks agoOct 19, 2026 |
| [.gitignore](https://github.com/mytv-android/myMusic/blob/main/.gitignore ".gitignore") | [.gitignore](https://github.com/mytv-android/myMusic/blob/main/.gitignore ".gitignore") | [实现 Android 6.0 及以上的 Compose 音乐客户端](https://github.com/mytv-android/myMusic/commit/146f819d1fbde198012308d33da89d13d742f132 "实现 Android 6.0 及以上的 Compose 音乐客户端  纳入 AGPL-3.0 的 music-lib，并通过 GoMobile 提供十二个音乐平台的搜索、播放、歌词、下载和登录能力；加入手机、平板、电视自适应界面及 GitHub Actions 发布流程。  Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>") | 3 weeks agoOct 19, 2026 |
| [CLAUDE.md](https://github.com/mytv-android/myMusic/blob/main/CLAUDE.md "CLAUDE.md") | [CLAUDE.md](https://github.com/mytv-android/myMusic/blob/main/CLAUDE.md "CLAUDE.md") | [新增 CLAUDE.md：提交规范、安装包命名与构建说明](https://github.com/mytv-android/myMusic/commit/0bd13995b19713af316abf7f8e889004c5c7fc24 "新增 CLAUDE.md：提交规范、安装包命名与构建说明  Co-Authored-By: Claude Haiku 5.5 <noreply@anthropic.com>") | last weekOct 27, 2026 |
| [LICENSE](https://github.com/mytv-android/myMusic/blob/main/LICENSE "LICENSE") | [LICENSE](https://github.com/mytv-android/myMusic/blob/main/LICENSE "LICENSE") | [实现 Android 6.0 及以上的 Compose 音乐客户端](https://github.com/mytv-android/myMusic/commit/146f819d1fbde198012308d33da89d13d742f132 "实现 Android 6.0 及以上的 Compose 音乐客户端  纳入 AGPL-3.0 的 music-lib，并通过 GoMobile 提供十二个音乐平台的搜索、播放、歌词、下载和登录能力；加入手机、平板、电视自适应界面及 GitHub Actions 发布流程。  Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>") | 3 weeks agoOct 19, 2026 |
| [README.md](https://github.com/mytv-android/myMusic/blob/main/README.md "README.md") | [README.md](https://github.com/mytv-android/myMusic/blob/main/README.md "README.md") | [电视环境模式下长按左右方向键切歌](https://github.com/mytv-android/myMusic/commit/1915f1156906e0b8ce2d369c95c39a745e881bd3 "电视环境模式下长按左右方向键切歌  Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>") | 3 hours agoNov 6, 2026 |
| [THIRD\_PARTY\_NOTICES.md](https://github.com/mytv-android/myMusic/blob/main/THIRD_PARTY_NOTICES.md "THIRD_PARTY_NOTICES.md") | [THIRD\_PARTY\_NOTICES.md](https://github.com/mytv-android/myMusic/blob/main/THIRD_PARTY_NOTICES.md "THIRD_PARTY_NOTICES.md") | [补记 Apple Music 整曲授权链路的实测结果](https://github.com/mytv-android/myMusic/commit/c518af8517abaa0b5dc8c5004c7f282c6fcdefcb "补记 Apple Music 整曲授权链路的实测结果  用真 Cookie 坐实了之前只能推断的部分：授权端点常量与 /v1/play/assets 返回的 keyServerUrl 一致；该端点确实吃登录态—— 无 token 回 failureType 2002（会话过期），带有效 token 加假 challenge 则回 errorCode -42585 / status -1021，说明会话已被接受、只缺真 challenge。  另外记下两个坑：/v1/play/assets 的参数名是 id 不是 ids[songs]； widevineCert 端点虽然可用但安卓原生 MediaDrm 自己管 provisioning， gamdl 也不用它。  完整握手仍无法在开发机验证——x86 仿真器起不来 Widevine CDM （MediaDrm 抛 UnsupportedSchemeException: NO_INIT），需要物理真机。  Co-Authored-By: Claude Haiku 5.5 <noreply@anthropic.com>") | yesterdayNov 5, 2026 |
| [build.gradle.kts](https://github.com/mytv-android/myMusic/blob/main/build.gradle.kts "build.gradle.kts") | [build.gradle.kts](https://github.com/mytv-android/myMusic/blob/main/build.gradle.kts "build.gradle.kts") | [Material 3 Expressive 界面重做，版本号改为 1.0](https://github.com/mytv-android/myMusic/commit/ae10217b80a68bfe39e723658240f9c26a8e67eb "Material 3 Expressive 界面重做，版本号改为 1.0  - 主题：material3 固定 1.5.0-alpha25（保持 minSdk 23），MaterialKolor 按封面取色并渐变过渡，播放页固定深色 Vibrant；Haze 模糊；外观设置新增配色来源、风格、对比度、纯黑背景、模糊策略 - 外壳：四个入口，设置移到“我的”和导航栏底部；手机悬浮迷你播放器，平板导航栏 + 底部播放条 / 常驻播放窗格，电视抽屉导航 - 沉浸式播放页（手机 / 平板 / 电视三种布局、自动隐藏、封面手势、歌词跳转、预测性返回），迷你播放器到播放页的封面共享元素转场 - 全部页面按设计稿实现手机、平板、电视三端；公共组件放在 ui/components - 睡眠定时（放在播放服务里，结束前淡出）；播放缓存上限可调，电视默认 256 MB - 修复：saved_songs 主键改为 (key, bucket)（数据库迁移 4→5），QQ 扫码登录二维码图片透传 - 内置 Roboto Flex 子集字体；TalkBack 走查与修复（docs/accessibility-audit.md） - Baseline Profile 模块与帧时间测试（docs/performance.md） - 版本名固定为 1.0，CI 发布标签改为 v1.0.<构建号>，界面上显示构建号  Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>") | 2 weeks agoOct 22, 2026 |
| [gradle.properties](https://github.com/mytv-android/myMusic/blob/main/gradle.properties "gradle.properties") | [gradle.properties](https://github.com/mytv-android/myMusic/blob/main/gradle.properties "gradle.properties") | [实现 Android 6.0 及以上的 Compose 音乐客户端](https://github.com/mytv-android/myMusic/commit/146f819d1fbde198012308d33da89d13d742f132 "实现 Android 6.0 及以上的 Compose 音乐客户端  纳入 AGPL-3.0 的 music-lib，并通过 GoMobile 提供十二个音乐平台的搜索、播放、歌词、下载和登录能力；加入手机、平板、电视自适应界面及 GitHub Actions 发布流程。  Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>") | 3 weeks agoOct 19, 2026 |
| [gradlew](https://github.com/mytv-android/myMusic/blob/main/gradlew "gradlew") | [gradlew](https://github.com/mytv-android/myMusic/blob/main/gradlew "gradlew") | [实现 Android 6.0 及以上的 Compose 音乐客户端](https://github.com/mytv-android/myMusic/commit/146f819d1fbde198012308d33da89d13d742f132 "实现 Android 6.0 及以上的 Compose 音乐客户端  纳入 AGPL-3.0 的 music-lib，并通过 GoMobile 提供十二个音乐平台的搜索、播放、歌词、下载和登录能力；加入手机、平板、电视自适应界面及 GitHub Actions 发布流程。  Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>") | 3 weeks agoOct 19, 2026 |
| [gradlew.bat](https://github.com/mytv-android/myMusic/blob/main/gradlew.bat "gradlew.bat") | [gradlew.bat](https://github.com/mytv-android/myMusic/blob/main/gradlew.bat "gradlew.bat") | [实现 Android 6.0 及以上的 Compose 音乐客户端](https://github.com/mytv-android/myMusic/commit/146f819d1fbde198012308d33da89d13d742f132 "实现 Android 6.0 及以上的 Compose 音乐客户端  纳入 AGPL-3.0 的 music-lib，并通过 GoMobile 提供十二个音乐平台的搜索、播放、歌词、下载和登录能力；加入手机、平板、电视自适应界面及 GitHub Actions 发布流程。  Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>") | 3 weeks agoOct 19, 2026 |
| [settings.gradle.kts](https://github.com/mytv-android/myMusic/blob/main/settings.gradle.kts "settings.gradle.kts") | [settings.gradle.kts](https://github.com/mytv-android/myMusic/blob/main/settings.gradle.kts "settings.gradle.kts") | [Material 3 Expressive 界面重做，版本号改为 1.0](https://github.com/mytv-android/myMusic/commit/ae10217b80a68bfe39e723658240f9c26a8e67eb "Material 3 Expressive 界面重做，版本号改为 1.0  - 主题：material3 固定 1.5.0-alpha25（保持 minSdk 23），MaterialKolor 按封面取色并渐变过渡，播放页固定深色 Vibrant；Haze 模糊；外观设置新增配色来源、风格、对比度、纯黑背景、模糊策略 - 外壳：四个入口，设置移到“我的”和导航栏底部；手机悬浮迷你播放器，平板导航栏 + 底部播放条 / 常驻播放窗格，电视抽屉导航 - 沉浸式播放页（手机 / 平板 / 电视三种布局、自动隐藏、封面手势、歌词跳转、预测性返回），迷你播放器到播放页的封面共享元素转场 - 全部页面按设计稿实现手机、平板、电视三端；公共组件放在 ui/components - 睡眠定时（放在播放服务里，结束前淡出）；播放缓存上限可调，电视默认 256 MB - 修复：saved_songs 主键改为 (key, bucket)（数据库迁移 4→5），QQ 扫码登录二维码图片透传 - 内置 Roboto Flex 子集字体；TalkBack 走查与修复（docs/accessibility-audit.md） - Baseline Profile 模块与帧时间测试（docs/performance.md） - 版本名固定为 1.0，CI 发布标签改为 v1.0.<构建号>，界面上显示构建号  Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>") | 2 weeks agoOct 22, 2026 |
| View all files |

## Repository files navigation

# myMusic

[Permalink: myMusic](https://github.com/mytv-android/myMusic#mymusic)

[![myMusic](https://github.com/mytv-android/myMusic/raw/main/docs/images/banner.png)](https://github.com/mytv-android/myMusic/blob/main/docs/images/banner.png)

[![Powered by SodaM](https://github.com/mytv-android/myMusic/raw/main/docs/images/sodam-logo.png)](https://github.com/sodahub-org/sodam)

汽水音乐会员整曲的签名服务由 [SodaM](https://github.com/sodahub-org/sodam) 提供（AGPL-3.0）· Powered by SodaM

myMusic 是面向 Android 6.0 及以上设备的音乐客户端，支持手机、平板、折叠屏和电视。界面使用 Jetpack Compose 与 Material 3；触摸、鼠标、键盘和遥控器使用同一套焦点与播放操作。

音乐平台能力来自 [music-lib](https://github.com/guohuiyuan/music-lib)（AGPL-3.0），本项目已将平台层移植为原生实现，不需要额外的后端服务。

## 项目与社区

[Permalink: 项目与社区](https://github.com/mytv-android/myMusic#%E9%A1%B9%E7%9B%AE%E4%B8%8E%E7%A4%BE%E5%8C%BA)

- 项目主页： [https://github.com/mytv-android/myMusic](https://github.com/mytv-android/myMusic)
- 界面与设计稿汇总： [https://mytv-android.github.io/myMusic/](https://mytv-android.github.io/myMusic/)
- Telegram 群组： [https://t.me/mytv\_android\_channel](https://t.me/mytv_android_channel)
- 配套工具： [易用TV助手](https://github.com/pangtugg/easytv-partner) 收录了 myMusic 及其他开源 TV 应用，可一键安装，并提供扫码遥控、文件传输、应用安装与更新等模块，方便在电视上集中管理和查看各应用的配置与使用教程，无需注册账号。

两个入口在应用的 `设置 › 关于与更新` 里同样提供：手机上点按打开，电视上用手机扫页面上的二维码（二维码由本机编码器生成，不经过第三方图片服务）。

友情链接： [SodaM](https://github.com/sodahub-org/sodam) —— Linux / macOS / Windows 上的汽水音乐桌面客户端，由 [sodahub-org](https://github.com/sodahub-org) 独立维护，不是 myMusic 项目的一部分；myMusic 的整曲签名服务也由它提供。

[![SodaM：第三方汽水音乐桌面客户端，非 myMusic 组成部分](https://github.com/mytv-android/myMusic/raw/main/docs/images/sodam-logo.png)](https://github.com/sodahub-org/sodam)

## 界面

[Permalink: 界面](https://github.com/mytv-android/myMusic#%E7%95%8C%E9%9D%A2)

下面的界面来自 [docs/](https://github.com/mytv-android/myMusic/blob/main/docs) 下的设计稿，按同一套视觉规则单独绘制；设计稿本身是可以直接操作的原型。汇总页见 [https://mytv-android.github.io/myMusic/](https://mytv-android.github.io/myMusic/)。

|     |     |     |     |
| --- | --- | --- | --- |
| [![榜单](https://github.com/mytv-android/myMusic/raw/main/docs/images/screens/ui-chart.png)](https://github.com/mytv-android/myMusic/blob/main/docs/images/screens/ui-chart.png)<br>榜单：来源胶囊只决定榜单内容，播放仍按聚合策略自动换源 | [![榜单详情](https://github.com/mytv-android/myMusic/raw/main/docs/images/screens/ui-chart-detail.png)](https://github.com/mytv-android/myMusic/blob/main/docs/images/screens/ui-chart-detail.png)<br>榜单详情：播放全部、换源设置与逐曲音源状态 | [![歌单](https://github.com/mytv-android/myMusic/raw/main/docs/images/screens/ui-playlists.png)](https://github.com/mytv-android/myMusic/blob/main/docs/images/screens/ui-playlists.png)<br>歌单：平台来源与推荐 / 分类切换 | [![歌单详情](https://github.com/mytv-android/myMusic/raw/main/docs/images/screens/ui-playlist-detail.png)](https://github.com/mytv-android/myMusic/blob/main/docs/images/screens/ui-playlist-detail.png)<br>歌单详情：与榜单共用同一套媒体列表 |

|     |     |     |     |
| --- | --- | --- | --- |
| [![聚合搜索](https://github.com/mytv-android/myMusic/raw/main/docs/images/screens/ui-search.png)](https://github.com/mytv-android/myMusic/blob/main/docs/images/screens/ui-search.png)<br>聚合搜索：按同一录音合并，逐条标出完整 / 试听 / VIP，异常平台单独显示 | [![音源选择](https://github.com/mytv-android/myMusic/raw/main/docs/images/screens/ui-sources.png)](https://github.com/mytv-android/myMusic/blob/main/docs/images/screens/ui-sources.png)<br>音源选择：逐平台列出音源状态，可记住本曲的选择 | [![我的](https://github.com/mytv-android/myMusic/raw/main/docs/images/screens/ui-library.png)](https://github.com/mytv-android/myMusic/blob/main/docs/images/screens/ui-library.png)<br>我的：同步状态直接出现在歌单行上 | [![自建歌单](https://github.com/mytv-android/myMusic/raw/main/docs/images/screens/ui-user-playlist.png)](https://github.com/mytv-android/myMusic/blob/main/docs/images/screens/ui-user-playlist.png)<br>自建歌单：播放全部、添加歌曲与编辑排序 |

|     |     |     |     |
| --- | --- | --- | --- |
| [![全屏播放](https://github.com/mytv-android/myMusic/raw/main/docs/images/screens/ui-player.png)](https://github.com/mytv-android/myMusic/blob/main/docs/images/screens/ui-player.png)<br>全屏播放：封面、当前播放源与换源入口常驻 | [![歌词](https://github.com/mytv-android/myMusic/raw/main/docs/images/screens/ui-lyrics.png)](https://github.com/mytv-android/myMusic/blob/main/docs/images/screens/ui-lyrics.png)<br>歌词：逐行高亮，当前句保持视觉中心 | [![播放队列](https://github.com/mytv-android/myMusic/raw/main/docs/images/screens/ui-queue.png)](https://github.com/mytv-android/myMusic/blob/main/docs/images/screens/ui-queue.png)<br>播放队列：切换页面不会丢失 | [![歌词背景律动](https://github.com/mytv-android/myMusic/raw/main/docs/images/screens/beat-stage.png)](https://github.com/mytv-android/myMusic/blob/main/docs/images/screens/beat-stage.png)<br>歌词背景律动：流光场随真实音频的低 / 中 / 高频变化 |

|     |     |     |
| --- | --- | --- |
| [![播放页三种排布](https://github.com/mytv-android/myMusic/raw/main/docs/images/screens/player-layouts.png)](https://github.com/mytv-android/myMusic/blob/main/docs/images/screens/player-layouts.png)<br>播放页：手机、平板、电视使用同一套部件，三种排法 | [![折叠屏书本姿态](https://github.com/mytv-android/myMusic/raw/main/docs/images/screens/fold-book.png)](https://github.com/mytv-android/myMusic/blob/main/docs/images/screens/fold-book.png)<br>折叠屏书本姿态：左页封面与控制，右页歌词 | [![海报墙](https://github.com/mytv-android/myMusic/raw/main/docs/images/screens/wall-poster-wall.png)](https://github.com/mytv-android/myMusic/blob/main/docs/images/screens/wall-poster-wall.png)<br>海报墙：队列铺成封面墙，点一格就地放大，再点即从这首播放 |

|     |     |     |     |
| --- | --- | --- | --- |
| [![桌面小组件](https://github.com/mytv-android/myMusic/raw/main/docs/images/screens/widget-home.png)](https://github.com/mytv-android/myMusic/blob/main/docs/images/screens/widget-home.png)<br>桌面小组件：长按添加，颜色与深浅跟随 App 外观设置 | [![正在播放组件](https://github.com/mytv-android/myMusic/raw/main/docs/images/screens/widget-now.png)](https://github.com/mytv-android/myMusic/blob/main/docs/images/screens/widget-now.png)<br>正在播放：封面用播放页这首歌抽到的形状，带波浪进度条 | [![歌词组件](https://github.com/mytv-android/myMusic/raw/main/docs/images/screens/widget-lyrics.png)](https://github.com/mytv-android/myMusic/blob/main/docs/images/screens/widget-lyrics.png)<br>歌词：当前一句放大、下一句变淡 | [![平板与电视](https://github.com/mytv-android/myMusic/raw/main/docs/images/screens/ui-tablet-tv.png)](https://github.com/mytv-android/myMusic/blob/main/docs/images/screens/ui-tablet-tv.png)<br>平板与电视：左侧导航轨、内容网格与常驻播放窗格 |

## 界面结构

[Permalink: 界面结构](https://github.com/mytv-android/myMusic#%E7%95%8C%E9%9D%A2%E7%BB%93%E6%9E%84)

界面使用 Material 3 Expressive，配色由当前歌曲封面实时生成，浏览页与播放页带模糊背景。

主界面有四个入口： **榜单**、 **歌单**、 **搜索**、 **我的**。设置是低频入口：手机在“我的”右上角，平板和电视在导航栏底部。

- **榜单**：平台排行榜轮播、飙升榜第一名和完整榜单；电视上方的大图跟随焦点切换。
- **歌单**：推荐与分类共用一个浏览上下文，停在哪种方式、听歌模式里选的分组都会记住，下次打开还在这儿；手机和平板滚到底自动加载下一页，电视保留翻页按钮。
- **搜索**：提交才请求；类型只有单曲 / 歌单 / 专辑，粘贴链接会自动识别并显示“解析链接”；结果按同一录音合并，逐条标出各平台是完整、试听、VIP 还是没有音源（不只靠颜色区分）。
- **我的**：喜欢、最近播放、下载和自建歌单。移出歌单、取消收藏、清除记录都可以撤销；删除下载文件和歌单仍需确认。自建歌单可同步到 GitHub Gist 或 Gitee。
- **天天送会员**：登录汽水音乐后，这里直接显示官方的「VIP天天送」活动状态——免费 VIP 有效期、今天这一份领了没有、活动还差多少天，一键领到你的汽水账号上，在汽水音乐客户端里就能用。活动规则原文也在页里。
- **平台账号**：在 `设置 › 平台账号` 里粘贴各平台的登录 Cookie。登录 Apple Music 会员账号后，Apple Music 的音源会从试听片段变成整曲，也能取到完整歌词；没登录时 Apple Music 仍可以浏览和试听，播放会自动换到有整曲的其他平台。
- **设置**：外观（布局、启动页、文字大小、主题、配色与对比度）、播放页（封面形状、歌词背景与律动强度、点按迷你播放器打开播放页还是海报墙，折叠屏展开时还有桌面姿态上半屏放什么，电视上还有环境模式时钟）、播放与换源、均衡器、音乐源、搜索与浏览、平台账号、音乐库同步、存储、关于与更新。平板和电视是“列表 \+ 详情”双栏。

**播放**

- 手机底部是悬浮迷你播放器：点按打开播放页（可在设置里改成海报墙），左右滑切歌，上滑展开，长按打开队列；读屏用户有对应的按钮和自定义操作。
- 播放页是沉浸式的：封面铺满并延伸到状态栏下，背景是缓慢流动的封面光，固定深色；控件 4 秒无操作后隐藏；在封面上左右滑切歌、双击收藏；歌名下常驻两行歌词，点开是全屏歌词，点某一行跳到该处播放。
- 定时关闭：15 / 30 / 45 / 60 分钟或播完当前歌曲；结束前 30 秒淡出。计时在播放服务里，后台和锁屏都有效。
- 平板 840–1199dp 使用底部播放条，≥1200dp 右侧常驻 380dp 播放窗格；电视使用全屏播放页，空闲后进入只显示封面和歌词的环境模式。环境模式下按住左右方向键切歌（左上一首、右下一首），单击仍然唤出控制栏。
- 折叠屏和双屏（按系统报来的折痕 / 铰链位置）：
  - 半折成书本姿态时，播放页左页放封面和控制、右页放歌词；“我的”、设置、同步、详情和搜索的双栏以折痕为界，底部播放条也分到两页。
  - 半折立在桌上（桌面姿态）时，播放页上半屏放歌词（`设置 › 播放页` 里可换成封面或时钟），下半屏是常驻的进度和播放控制。只有播放页本来就开着才切过去，在别的页面半折不打断浏览。
  - 海报墙的大卡落在右页或上半屏；桌面姿态下标题胶囊挪到下半屏顶上，上半屏整块留给大卡。侧边面板和居中弹窗避开折痕。
  - 横跨双屏时按铰链分块，铰链下面不放内容；双屏横跨上下两块时列表在上屏、详情在下屏。
  - 分屏后的矮窗口（高度不到 480dp）使用紧凑播放页。
  - 折叠与展开不会打断正在进行的浏览。设计稿见 [docs/foldables.html](https://github.com/mytv-android/myMusic/blob/main/docs/foldables.html)。

**海报墙**

- 播放队列可以切成一面封面墙：从队列面板标题栏的网格按钮或播放页“更多”菜单进入，也可以在 `设置 › 播放页 › 点按迷你播放器打开` 里设成迷你播放器（平板的底部播放条和播放窗格、电视导航栏的“正在播放”）的默认去处。曲目按大小不一的格子铺开、向四周无限延伸，可以四向拖动；点一格先就地放大，再点“播放”从这首开始（只在队列里跳过去，不换队列）。正在播放的大卡里显示歌词，切歌时镜头跟到新歌。
- 歌单、专辑、榜单和自建歌单的详情页可以一键切成海报视图，下次打开沿用上次的选择。
- 听歌模式的推荐流不循环铺满，而是排成一条往前长的带子，续上来的歌只填进后面的位置，墙上已有的格子不动。
- 电视上方向键按空间位置移动焦点；空闲 30 秒后镜头缓慢漂移，减轻 OLED 残影，第一下按键只唤醒。
- 墙内设置（染色、关灯、序号、翻译、切歌跟随、电视漂移）在队列墙和详情页之间共用，和播放页的设置一样只存在本机，不进同步文件。
- 封面按格子的实际大小取合适清晰度，大卡不糊，小格也不用下原图。

**来源与许可**：海报墙的版式改编自 [folia-major](https://github.com/chthollyphile/folia-major)（AGPL-3.0）的 Lattice，四个模板由本项目重新手画，代码为 Kotlin 重写，外观换成 Material 3 Expressive。第三方声明见 [THIRD\_PARTY\_NOTICES.md](https://github.com/mytv-android/myMusic/blob/main/THIRD_PARTY_NOTICES.md)。

**外观**

配色来源可选跟随封面（默认）、系统壁纸、品牌松绿或自选颜色；浏览页和播放页的配色风格、对比度、纯黑背景、模糊（自动 / 开 / 关）和减少动画都可以调整。电视、低内存设备和 Android 12 以下默认关闭实时模糊。

拉丁字母和数字使用内置的 Roboto Flex 子集，中文由系统字体显示。手机上从迷你播放器打开播放页时，封面以共享元素飞入。

**存储、无障碍与性能**

- 播放缓存上限可在“设置 › 存储”里调整（128 MB–1 GB），电视默认 256 MB，其他设备默认 512 MB；调低后立即按最近使用淘汰。
- TalkBack 走查结果见 [docs/accessibility-audit.md](https://github.com/mytv-android/myMusic/blob/main/docs/accessibility-audit.md)。
- 发布包带 Baseline Profile；帧时间测试方法和结果见 [docs/performance.md](https://github.com/mytv-android/myMusic/blob/main/docs/performance.md)。

## 桌面小组件

[Permalink: 桌面小组件](https://github.com/mytv-android/myMusic#%E6%A1%8C%E9%9D%A2%E5%B0%8F%E7%BB%84%E4%BB%B6)

六款桌面小组件，在桌面长按添加；设计稿见 [docs/widgets.html](https://github.com/mytv-android/myMusic/blob/main/docs/widgets.html)。

- **正在播放**：1×1 到 4×3 共七档，按组件实际大小换版式；2×3 起有波浪进度条，4×3 带当前两句歌词。封面用播放页这首抽到的形状，暂停时变圆角方形；已播时间是系统自己走字的 Chronometer。
- **歌词**：当前一句放大、下一句变淡，有翻译时跟在下面；只在亮屏时按行更新。背景可选实色、半透明（72%）或透明（白字加阴影）。
- **听歌模式**：一键开始私人漫游或场景电台，可指定平台和模式；需要登录的模式会提示去登录。
- **随便听听**：不先选模式，直接开播——先接着上次在听的那个，再试平台自己的主推荐（偏好模式、私人漫游），都不出歌才拿场景电台兜底。
- **榜单**：任选一张榜，显示前几名和排名变化，后台定期刷新（要联网）。
- **歌单**：我喜欢、最近播放或任意自建歌单，点哪首从哪首开始放，正在播放的一行标成主色。
- **快捷入口**：识曲、搜索、我喜欢、听歌模式和定时关闭。

颜色和深浅跟随 App 的外观设置（不是系统的动态取色）：主题跟随系统时两套颜色都交给桌面切换。每个组件都有可跳过的设置页，之后可以长按组件重新设置。

## 后台播放与离线缓存

[Permalink: 后台播放与离线缓存](https://github.com/mytv-android/myMusic#%E5%90%8E%E5%8F%B0%E6%92%AD%E6%94%BE%E4%B8%8E%E7%A6%BB%E7%BA%BF%E7%BC%93%E5%AD%98)

- 切到后台或锁屏后继续播放，并保留系统媒体通知与控制。
- 播放队列和位置存在本机：进程被系统回收后，桌面组件、系统媒体控件和蓝牙耳机的“继续播放”从上次的位置接着放（上次放完了就从这首开头）。
- 电视上默认在按 Home、切到别的应用或连按两次返回退出时暂停播放；`设置 › 播放页 › 后台播放`（默认关，只有电视布局显示）打开后和手机一样，离开应用也接着放，要停就进应用按暂停，或用通知栏、系统媒体控件上的停止。系统屏保、息屏不算离开应用，音乐会继续放。被屏保或别的应用打断的播放，回到 myMusic 时会接着放（自己按的暂停、睡眠定时、队列播完不会）。
- `设置 › 播放页 › 播放时阻止屏保`（默认关，只有电视布局显示）：播放期间保持屏幕常亮，系统屏保就不启动。系统屏保本就是「屏幕超时」才启动的，所以只有这一种拦法；电视自己拉的第三方屏保界面拦不住，那时靠上一条兜着。屏幕会一直亮着，OLED 有烧屏风险。
- 播放过的音频会自动缓存，可在设置中清除播放缓存。
- 播放器与歌曲列表的下载按钮会把音频保存到应用目录。已完成的下载会在播放时优先作为本地音源，网络不可用时也能从本地文件播放。
- 下载记录在“我的 → 下载”中管理，可删除本地文件。

## 音乐库同步

[Permalink: 音乐库同步](https://github.com/mytv-android/myMusic#%E9%9F%B3%E4%B9%90%E5%BA%93%E5%90%8C%E6%AD%A5)

- 同步自建歌单、收藏和平台账号 Cookie。Cookie 会以明文写入私密 Gist / 代码片段，请勿公开文件链接；最近播放、下载文件、播放地址和播放进度不上传。
- 后端支持 GitHub Gist 与 Gitee 代码片段；也可以导入 / 导出本机 JSON。
- TV 连接页可生成 10 分钟有效的二维码，手机在同一局域网打开网页面板，填写令牌和可选的文件 ID / 链接。网页沿用 TV 当前 Material 配色，只在配置页前台运行；离开页面、进入后台或会话过期即关闭，已保存令牌不会传给网页。
- 本机修改先写入本机数据库，界面立即反馈；修改后约 1 秒防抖立即推送，离线时自动重试。推送后会再读一次云端并重新合并，避免两台设备停在旧版本。
- 三个版本（上次基线、本机、云端）逐歌单合并。两边都修改同一歌单时不会静默覆盖，可选择“合并两版 / 保留本机 / 使用云端”；删除使用墓碑，不会把已删除歌单重新创建。
- 收藏和平台 Cookie 按修改时间合并，取消收藏 / 退出登录同样使用墓碑，不会被另一台设备的旧数据恢复。
- 令牌加密后只保存在本机，不进入数据库、日志或同步文件。

## 均衡器与应用更新

[Permalink: 均衡器与应用更新](https://github.com/mytv-android/myMusic#%E5%9D%87%E8%A1%A1%E5%99%A8%E4%B8%8E%E5%BA%94%E7%94%A8%E6%9B%B4%E6%96%B0)

- 均衡器绑定当前播放会话，按设备实际频段绘制五段或更多滑杆，提供平直、流行、摇滚、爵士、人声和自定义预设；设置保存在本机，切换歌曲、换源或重建 audio session 后重新应用。设备不支持时明确显示“未生效”，不影响播放。
- 关于页检查 GitHub Release 的 `update.json`，只比较 versionCode；下载后校验 SHA-256、包名、版本号和签名，再通过 FileProvider 打开系统安装器。Android 不允许静默安装。
- CI 在发布 APK 的同时生成 `update.json` 与 SHA-256 文件。

## 构建

[Permalink: 构建](https://github.com/mytv-android/myMusic#%E6%9E%84%E5%BB%BA)

提交或拉取请求会运行 Android 单元测试。推送到 `main` 或 `dev` 时，GitHub Actions 会构建 Android 6.0+ 的通用 APK，并随 Release 发布 `update.json` 和 `update.apk.sha256`。

配置以下仓库或组织 Secrets 后，Release 会使用正式签名；未配置时使用 debug 签名：

- `SIGNING_PROPERTIES`：Base64 编码的 properties，包含 `storeFile=keystore.jks`、`storePassword`、`keyAlias`、`keyPassword`。
- `SIGN_KEY`：Base64 编码的 JKS 密钥库。

## 许可证

[Permalink: 许可证](https://github.com/mytv-android/myMusic#%E8%AE%B8%E5%8F%AF%E8%AF%81)

应用代码与纳入的 music-lib 均使用 GNU Affero General Public License v3.0。完整文本见 [LICENSE](https://github.com/mytv-android/myMusic/blob/main/LICENSE)。

这是一个学习项目。请遵守所在地法律和各音乐平台的服务条款，不要将程序或下载内容用于商业用途。

## About

No description or website provided.

### Topics

[android-tv](https://github.com/topics/android-tv) [material-3-design](https://github.com/topics/material-3-design) [material3-expressive](https://github.com/topics/material3-expressive) [music](https://github.com/topics/music)

### Resources

[Readme](https://github.com/mytv-android/myMusic#readme-ov-file)

[AGPL-3.0 license](https://github.com/mytv-android/myMusic#AGPL-3.0-1-ov-file)

[Activity](https://github.com/mytv-android/myMusic/activity)

[Custom properties](https://github.com/mytv-android/myMusic/custom-properties)

### Stars

**36** stars

### Watchers

**0** watching

### Forks

[**1** fork](https://github.com/mytv-android/myMusic/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fmytv-android%2FmyMusic&report=mytv-android+%28user%29)

## Releases

## Packages

## Contributors

## Languages

You can’t perform that action at this time.