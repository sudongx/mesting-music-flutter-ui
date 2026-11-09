# 1.0.74 采样观察与待确认清理项

用户要求先给出优化前后数据，采样中发现的新问题只记录，等确认后再集中修改。以下项目均未在本次采样期间修改产品代码。最终逐阶段性能与失败记录见同目录的 `performance-2026-11-07-v1.0.74.json`。

## 已确认：历史巡检进入旧账号保护页

网易云、酷狗的 `history` 场景通过诊断器的 `rootPaths` 打开 `/profile/listening`。该路由包裹 `AuthProtectedPage`；当前 Beta 平台身份进入后直接显示“此功能属于 Mesting 账号，返回我的”。手机 11:53 的第40段截图与用户提供的截图相符。

诊断器可能仍把保护页的过渡记为成功采样，不能据此认定平台听歌历史已被测试。主要前后性能对比排除 `netease/history`、`kugou/history`，保留原始报告；排除规则在导出新版结果前已记录，未按结果好坏选择。

源码证据：`lib/features/settings/presentation/production_diagnostic_driver.dart` 的 `rootPaths`、`lib/app/router/app_router.dart` 的 `/profile/listening`、`lib/features/auth/presentation/auth_protected_page.dart` 的 Beta 平台保护分支。

## 已确认：心动收藏为共用旧界面，当前数据来自平台

“心动收藏”文字只定义在 `lib/features/library/presentation/music_home_page.dart` 的 `_FavoritesHero`，由 `FavoriteCollectionView` 使用。诊断器的 `favorites` 场景直接创建 `PlatformLibraryPage(favorites: true)`，后者仍复用这套界面。

该页面读取 `favoriteTracksProvider`。当前 Beta 下，`libraryRepositoryProvider` 根据当前身份分别返回 `NeteaseLibraryRepository`、`PlatformLibraryRepository` 或 `QishuiLibraryRepository`，并非一律读取早期 Mesting 账号收藏。日常 `/music?view=favorites` 已转到 `MusicLibraryPage` 的新版收藏入口。因此要清理旧页面/诊断入口，不能误删三平台收藏数据和功能。

源码证据：`lib/features/music_platform/presentation/platform_library_page.dart`、`lib/features/library/library_providers.dart`、`lib/features/library/presentation/music_home_page.dart` 的前置 Beta 分支、`lib/features/experience/presentation/music_library_page.dart`。

## 用户确定的后续范围：源码级移除旧 Mesting 账号体系

用户选择连项目中保留的旧正式版账号体系源码也一并移除，而非仅隐藏当前入口。实施仍等待用户确认最终清单，不在本版采样中删除代码。

当前只读检查发现，旧认证 provider/repository 仍被33个源码文件直接引用；该数字不是完整依赖审计。账号选择枚举仍包含 `mesting`，曲库 provider 仍有旧账号云同步回退。登录注册、密码找回、绑定/注销、旧个人资料、旧社交消息与云同步，以及对应路由和诊断场景需要按依赖清理。

同目录内还包含三平台首次进入、游客入口、角色动画和通用能力，不可按文件夹整体删除。三平台身份、各平台收藏/歌单/历史、本地音乐/现有数据及完整玻璃和角色动画应保留；持久存储的迁移与兼容方式待后续清理方案一并明确。本轮未访问旧账号私有数据库、未注销账号、未清除数据，也未变更服务器。

## 已确认：本轮原生渲染崩溃，未修复

北京时间12:09:35，最终已安装的74/code95进程1770退出。Android `ApplicationExitInfo` 标记 `APP CRASH(NATIVE)`，崩溃缓冲区记录 `SIGSEGV/SEGV_MAPERR`、地址 `0x1c`、线程 `1.raster`。栈顶为设备的 `vulkan.adreno.so`，随后为 `libflutter.so`；这些只定位到渲染调用链，不能据此断定唯一根因或归咎于某个页面。

最后一次被动截图是酷狗有声书的进入/返回阶段，但完整已保存记录已继续经过一起听、签到只读页，最后保存到公共下载页的快速滚动。因此最后截图不是崩溃的精确触发场景，不能说有声书已被证明导致崩溃。中断前导出报告包含409条记录、402段、21,342帧，全部单独保留。使用原APK的“从已保存断点继续”补采后续页面，不清除原崩溃证据，不将最终完成状态解释为连续无崩溃通过。

证据在私有本轮目录的 `device/after-interruption-exit-info.txt`、`device/after-interruption-own-crash-buffer.txt`、`device/after-interruption-native-stack.txt`、`device/after-flow-report-interrupted.json`、`device/after-run-resume.json`。按用户要求只记录，任何修复需后续确认。

## 已确认：栅格化耗时变差，未达到整体优化目标

同页同阶段成功配对、各自不少于25帧，排除旧根分页、账号保护页及原平台不同的公共阶段后，共166个阶段：网易云112、酷狗54。网易云栅格化P90从14.570ms升至22.013ms，超过16.67ms的帧比例从7.227%升至13.934%；酷狗P90从14.995ms升至21.987ms，超16.67ms比例从7.921%升至14.538%。UI构建P90分别为2.709→2.705ms、2.761→2.571ms。

这轮观测显示渲染变慢，不能宣布整体流畅度优化成功。两次测试的推荐内容、出帧数量、缓存及温度并非完全一致，暂未证明具体是哪项改动导致，不先编造根因或继续修改。较大变化例子：网易云专辑详情过渡11.531→47.207ms、专辑合集过渡11.321→42.260ms；全部阶段均保留，不只列变好的页面。

## 已确认：三平台主Tab巡检失败与两项页面错误

最终原始记录共514条、28,294帧：321通过、5失败、188跳过。应用最终状态完成且恢复平台；崩溃前409条记录与中断导出逐条一致，未覆盖，记录与帧段键均无重复。

失败项为网易云/酷狗/汽水的 `tabs/pages`（`stage_error`），网易云 `feed-userPlaylists/open`、公共 `playlists/open`（`page_error`）。前三项是主Tab诊断阶段没有成功，不能据本次结果认定三平台快速Tab切换验收通过；后两项仅有页面错误分类，真实业务原因待查。旧73的网易云/酷狗Tab和这两项页面错误也存在，新加汽水Tab为本轮额外失败。全部先记录，不修复。

汽水8场景合计24通过、1失败、7跳过，成功且不少于25帧的阶段为2934帧，UI构建P90 2.839ms、栅格化P90 11.235ms。没有73的汽水自动化基线，不据此计算优化收益；搜索只采真实空查询入口，未提交歌名/歌手请求。
