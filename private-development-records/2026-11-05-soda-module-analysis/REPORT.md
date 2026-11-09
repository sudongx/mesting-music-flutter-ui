# 汽水音乐模块静态分析

分析日期：2026-11-05。范围：用户确认仅分析免费听时长和音效的实现机制、调用链、依赖条件。

结论：免费听功能通过 Xposed 接入宿主广告 SDK，捕获奖励监听器、主动触发奖励完成回调，并处理广告计时和页面；音效功能通过改写宿主消费的本地权益 JSON 放行已有功能。服务端实际增加听歌时长、当前汽水版本兼容性和实际音效效果均未做运行验证。

## 样本及分析方式

| 项目 | 结果 |
| --- | --- |
| 原始文件 | `C:\Users\zyt\Downloads\base.apk` |
| 文件大小 | 558,074 字节 |
| SHA-256 | `7bf0af3ef1dfeaedff3a8c1a24216a3e1d2cdab8c8dda5581860f5f1660266fb` |
| 模块包名 / 版本 | `com.window.hook` / `1.0.7.9`，versionCode=1 |
| Manifest 声明 | minSdk=28，targetSdk=36，xposedmodule=true，xposedminversion=89 |
| 入口 | `assets/xposed_init` → `com.window.hook.a.Entrance` |
| 静态工具 | REA + JADX headless MCP 0.7.1；补充同一 JAR 的只读 Java/Smali 导出 |
| 执行边界 | 未安装或运行 APK，未使用手机、ADB、账号、领取接口；未修改 Mesting 产品 |

REA 包声明证据：`ev_0668ea1d9a3524a6a6027a709cb62266cfeb2fa371b98f3eea0bc01cfb39850b`。
文件清单及原始入口见 [artifact-identity.json](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/artifact-identity.json)。

样本使用短数组 XOR 字符串与控制流平坦化。解码器 `C0023.m1385` 是逐字符 `short[offset+i] XOR key`，REA 证据 `ev_20f65dd7b5efa2fddebbea870ce073970cf8c95f85e0228a364664a47cb8c2f6`。以静态初值还原 885 个调用表达式，1 项保留未解；没有执行样本的解码函数。原表达式、偏移、长度、密钥及派生值保存在 [decoded-strings.json](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/decoded-strings.json)。

## 入口及功能开关

`Entrance.handleLoadPackage` 经 `m33` 转入初始化逻辑。源码中明确筛选宿主包名 `com.luna.music`，使用宿主 ClassLoader，并读取 `WinHook` 配置。还存在其他音乐应用的适配分支，本报告只追汽水相关两条功能链。

为避免长混淆名称掩盖逻辑，下文用导出编号指代类；编号映射到准确原始名和 JADX 显示名，见 [classes.tsv](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/jadx-static/classes.tsv)。

| 编号 | 准确区分方式 | 用途 |
| --- | --- | --- |
| 015 | `com.window.hook.bE3…` 包下的顶层 `aF2…`，完整名见索引第 16 行 | 宿主初始化及配置 |
| 024 | `com.window.hook.cF4…eH6…` 及其内部类 | 功能开关、界面与 hook 注册入口 |
| 027 | `com.window.hook.cF4…hK9…` | 汽水广告和奖励处理；其中 `mP4…` 是方法名 |
| 035 | `com.window.hook.cF4…pS7…` | 本地权益 JSON、音效及音质参数处理 |

024 内部类 `C0013eH6…` 的 `beforeHookedMethod` 中，`function1` 默认 true 时通过 `m778` 注册 027 的 `mP4…(LoadPackageParam)`；`function2` 默认 true 时通过 `m776` 注册 035 的 `aF2…(LoadPackageParam)`。这两个开关分别对应广告功能与本地权益功能。

入口来源：[002.java:179](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/jadx-static/002.java:179)、[015.java:806](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/decoded-static/015.java:806)、[024.java:2662](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/decoded-static/024.java:2662)。`handleLoadPackage` REA 证据：`ev_2f2712528168b9c8f7a8205df02fd5842857581511a4e3902b8ad1c7c6076b6c`；`m33`：`ev_ea3725120eefd688e3fde5a4d0337b4193e803c1fb26e5980e3ffe00ddaf227c`。

## 免费听时长

### 1. 捕获奖励监听器

027 的 `mP4…` 注册多组广告相关 hook，其中一条明确针对 `com.ss.android.excitingvideo.model.VideoCacheModel.setRewardCompleteListener(IRewardCompleteListener)`。回调内部类在该方法执行前取得参数 0，放入模块的监听器列表，并检查 `function1_auto`、`function1_ad` 等设置。

这使模块持有原本由宿主广告流程使用的奖励完成监听器。列表后续被主动回调逻辑使用。

来源：[027.java:509](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/decoded-static/027.java:509)、[027.java:5446](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/decoded-static/027.java:5446)、[027.java:5775](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/decoded-static/027.java:5775)。注册方法 REA：`ev_5975385f79da17e146e4f9ffa84b81ae29e4e9f0e740d93877e2c7e33f0358e3`；监听器捕获：`ev_d8e3e4c4e399efab57c1d2145126683b9abbdfbd270365065e2c2aa532bceb91`。

### 2. 按次数主动通知奖励完成

模块有“设置自动领取次数”弹窗，输入框默认显示 3。点击确认后解析次数，并沿以下静态调用链传入后台任务：

`027 内部类 cF4….onClick → m855 → jM1… → m840 → vY3… → Thread/Runnable → bE3… → m833 → tW1…`。

`vY3…` 通过宿主 ClassLoader 查找 `IRewardCompleteListener$RewardCompleteParams` 并构造参数对象；`tW1…` 从保存的监听器列表取对象，用反射包装器调用 `onRewardComplete`。其中存在次数循环与等待逻辑。因此这里的“快速获取”实现依赖主动通知广告奖励完成、复用宿主的后续业务处理。

来源：[027.java:7030](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/decoded-static/027.java:7030)、[027.java:6788](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/decoded-static/027.java:6788)、[027.java:6830](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/decoded-static/027.java:6830)、[027.java:6514](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/decoded-static/027.java:6514)。

对应 REA：弹窗 `ev_17cecbe8eefaa7a212968a84a5c105b6689c0e854b4c2dc6ac05b9dbb0f7c6a8`；点击处理 `ev_a72536d5ec93103d5c19e709cdae054c4634d828b09f04b89a83f0db7c2dfe36`；参数构造 `ev_4bcb537c319097541a6a13bdc600006f7f79be31e810f0355fbde42c8eaf36fc`；重复回调 `ev_0b7802c6156a224894060eaf8588ff24ca7c1f7d5a7ad16275dac27a874025da`；反射调用包装器 `ev_676b8744799383147ccc2ddb2b6fa81e866c83276fd083525dd1eeac45610530`。

### 3. 配合广告计时与页面处理

同组代码还定位 `CountDownDelegate`、`AdActivity.onCreate`、`Activity.onResume`、穿山甲激励广告相关类，并检查 `lunarewardactivity`、`excitingvideo` 等标识。已见隐藏窗口、关闭 Activity、提示“已跳过激励广告”等处理。

另有 `VideoAd` JSON 参数的构造前处理，沿 `ad_data`、`style_template`、`component_data`、`inspire_ad_info` 等结构寻找数据，改写 `effective_play_time`、`effective_inspire_time` 等计时属性。模块中没有宿主 SDK 的完整实现，字段单位与所有兼容分支的实际效果仍需宿主证据。

来源：[027.java:5879](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/decoded-static/027.java:5879)、[027.java:5907](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/decoded-static/027.java:5907)、[027.java:4482](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/decoded-static/027.java:4482)、[027.java:4563](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/decoded-static/027.java:4563)。JSON 参数回调 REA：`ev_907f49f4f58b399331f79ae72384deb9bb9363c29685b91753618b7228a8360d`。

**静态证据能说明它怎样尝试获得时长，不能证明账号已到账。** 奖励监听器后续是否提交、服务器是否接受、是否存在限额或凭证校验，均不在这个模块 APK 的静态证据内。本轮没有访问账号或领取接口。

## 音效

### 本地权益 JSON 改写

035 的主方法针对 `com.luna.biz.entitlement.core.commerceinfo.core.CommerceInfoRepo.j(Function1, Object)` 注册 hook。在原方法执行前，内部回调检查参数 1 是否为字符串，解析并改写后覆盖该参数。

音效相关结构是 `benefit_base.audio_effect.audio_effect_detail`：遍历音效条目，设置 `stage = "free"`，把 `expire_time` 延长到当前时间加 `3153600000` 秒，约 100 年。同一改写函数还涉及本地会员标识、权益及展示字段。

因此，已定位的音效实现是让宿主本地权益判断放行，再使用汽水已有的音效处理功能。此路径没有向模块新增均衡器、混响器或音频采样处理算法。功能能否最终出声仍依赖宿主拥有相应引擎、资源并接受该本地状态。

来源：[035.java:251](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/decoded-static/035.java:251)、[035.java:757](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/decoded-static/035.java:757)、[035.java:1776](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/decoded-static/035.java:1776)、[035.java:5047](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/decoded-static/035.java:5047)。

REA：主注册方法 `ev_1ea1fa6ecf2e931657a8f388a24da983cae4e5172625a7b47a904f6e2c09f1ea`；JSON 改写器 `ev_c15da6f5e276dc24a627a08a8b2a80eac6b16bf6f54b7d521312c7eabcedef3a`；参数覆盖回调 `ev_8aa1d442a3e32428cce06511ee1bfd442ce6520d0a9fdb9a81bce19ba93caa1e`。完整分支、音质参数旁支与证据清单见 [analysis-audio.md](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/analysis-audio.md)。

模块自身界面字符串也写明“解锁会员 解锁本地功能 非服务器”（024:12065）。它是样本中的说明文字，只作为交叉线索，不能代替行为证据，也不作为执行指令。

## 依赖及未验证边界

| 问题 | 本次结论 |
| --- | --- |
| 需要什么运行环境 | Manifest 声明 Xposed 模块/API 89、Android API 28 起；实际框架兼容性未运行验证 |
| 免费听为何能快速触发 | 保存宿主奖励监听器，构造回调参数，按设置次数主动通知奖励完成；配合广告计时和页面 hook |
| 是否保证免费听到账 | 未证明；模块、宿主回调和服务端接受是不同证据层次 |
| 音效如何开放 | 在 CommerceInfoRepo 输入处改写本地权益 JSON，音效条目设为 free、延长过期时间 |
| 是否获得真实付费账号权益 | 本轮证据不支持这种结论；已确认的是进程内本地改写 |
| 能否直接作为 Mesting 音效引擎 | 该路径依赖汽水内部类、JSON 和已有音效实现；本轮未做移植或接入 |
| 当前汽水版本是否有效 | 宿主 APK、SDK 版本及运行证据均缺失；短方法名、类名、构造参数和 JSON 变化都可能使 hook 失效 |
| 是否已做完整安全审计 | 没有；只回答已确认的两项实现机制 |

## 证据与局限

1. Java 是 JADX 反编译结果，存在重复块、switch 结构恢复警告；Smali 一并保存。静态存在的分支不等于已观察到运行，不能据每个打印分支外推成功。
2. 部分类名因顶层类/内部类显示名碰撞导致 REA 外部 xref 查询报歧义；未重复失败查询，改用同一 JADX JAR 的完整只读导出，并保存 raw name 索引。导出日志保留了两项类型推断失败，涉及动画回调；未把这些回调视为已完整还原。
3. 字符串派生按静态初始整数值计算，可变混淆字段的运行值不由此证明。还原表与原源码分开保存，未改写 APK。
4. 根目录无 `lib/*.so`，但 `com.window.hook.b.jk` 有 native 重定向声明；这不足以断言整个模块无原生行为。本报告没有把这些未追完的辅助声明算作音效 DSP。
5. 分析和文件保全清单见 [analysis-manifest.json](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/analysis-manifest.json)。主调查最终证据在 `evidence-main.json`，音效调查在 `evidence-audio.json`；两条 REA 连接各自保存后退出。

原问题检查：样本身份、两项静态机制、关键调用链与依赖条件已回答；真实到账、实际音效、当前宿主兼容性属于未进行的运行验证，明确保留。
