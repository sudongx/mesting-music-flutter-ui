# 汽水官方累计读取与新播放计量：177 本地证据

本轮只读分析已保存官版和公开参考，不连接手机、不调用真实音乐账号、NAS或签名服务。产品实现仅汽水。本文不是官版实际入账或实机兼容证明。

## 读取契约与单位

官版19.0.0原包SHA256：`68bd9ab99e45875527959ec6e2a6bf48bcd43e817b503e4870d83c65d4bf5fa8`。之前已保存的 classes19/20/21 逐字节DEX载体只用于分析，不能安装交付。

- `UserApi.getMeMusicWall` 是 **POST `/luna/me/music_wall`**，不是GET。请求 `GetMyMusicWallRequest` 的必需参数是 `feed_music_wall_extra` 对象与 `ab_param` 字符串；`recent_rankings_version`、`schema_extra` 可空。177只发送空extra与空ab字符串，省略未知可空参数。
- 响应 `NetGetMyMusicWallResponse.listen_duration` 指向 `NetMyListenDuration`：`total_duration`、`week_duration`、`week_rank`、`like_count`、`users_liked_me`。时间单位为秒：父类/子类Kotlin metadata对应 `getDurationS` / `getDurationWeeklyS`，子类 `a()`返回 `getTotalDuration()`。读取字段缺失保留未知，不能自动变0。
- `/luna/me/listen_stats` 也是POST，但DTO是好友/歌手/歌曲排行等，177没有把它误当累计时长。
- `ReportActionApi` POST `/luna/action` 的 `NetAction` 只有action_type、媒体ID和场景等，不含duration字段。它不能用作累计时长上传通道，177没有臆造 `duration` 写入该body。

原始注解见 `annotations-classes19.dex.json` 与 `annotations-classes20.dex.json`；新增请求明细见 `duration-request-details.json`。完整REA保留于 `duration-rea177.json`，包含50条完整证据与对应summary投影，结束已reset，没有挂起分析任务。

## 实际播放计量与候选上传

官版Android `PlayDurationDelegate.M` 在真实播放区间计算时长；`AudioFinishEventLogger.P1` 调用 `fillPlayDuration`，后者把PlayDuration的实际时长写入 `duration`，并区分前后台字段。官方时长事件单位为毫秒。该链与开播后的最近播放列表是独立功能。

REA `NetGetMyMusicWallResponse.a`：`ev_d633d08977524dae34afb53b3facbd571ead1aed53a2f3ab40d20d8922be1db4`；`GetMyMusicWallRequest`构造：`ev_04ada1c22e0526d74efa865a3eb95a09635e22188f388d911285b69292811b78`。完整ID索引在 `duration-reference-index177.json`；该文件还固定本轮读取的三份PC参考文本的SHA256。所有来源均保留，不用后续网络更新覆盖本轮依据。

公开留存PC参考 `libresoda/src/soda/report.rs` 和 `myMusic/SodaPlayReport.kt` 描述 `POST https://mcs.zijieapi.com/v1/json` 的audio_play、player_metrics(progressed)、audio_over/audio_finish、player_metrics(finish)。进度字段为秒，duration/cost为实际毫秒；暂停段与下一次播放段不能重复累计。177使用现有单一播放器，monotonic实际时间计量；playing且decoder-ready且非seeking才计入，2倍速不会使1秒实际听歌变成2秒。

**参考存在MCS envelope差异。** 留存libresoda新 `applog_body` 是无身份batch并忽略identity；其legacy形状和myMusic实现带caller/user/header/events。177按已确认方案采用后者作为本次兼容候选，使用真实助手配置的device_id、当前真实userId以及从返回LunaPC UA解析的版本。缺身份不伪造fallback did；未知OS/channel/hardware值省略。它不向MCS发送音乐Cookie、CSRF、独立token、NAS令牌或应用签名；不通过助手代理事件。event.params、header.custom保持参考的JSON字符串形状。

该PC候选形状与当前服务的线上接受、账号归因、听歌规则与最终累计增长均待实机。Android静态字段和参考作者的历史成功请求不能替代当前用户验收。HTTP200或明确服务回执只记为请求提交，不记为“官版累计已增长”；未知/拒绝回执不会自动重发。`/action` 播放计数与推荐 `played_media` 未冒称累计入账证明。

## 新模块边界

- `qishui_listening_repository.dart`：官方music_wall读取；受限MCS直发；本机heard/transport accepted/unconfirmed三组聚合持久化。持久键按账号摘要隔离，不保存可恢复重放的事件/曲目/凭据body。
- `qishui_listening_reporter.dart`：观察现有播放器状态；前后台、暂停/缓冲/seek、切曲和原生循环边界结算。账号变化只将已听但未发末段记回旧owner本地，禁止旧请求借新账号发出。旧日志不补造、不重放。
- `test/qishui_listening177_test.dart` 最终10项受控测试由主会话集中执行。合成MCS回执检查形状与状态语义，不等于真实网络证明。

## 额外社交静态补充

同一证据包包含 `NetUserStats.appendToUser`：总体countFollowing/Follower/AllLiked与countLunaFollowing/Follower是独立字段；`MixedFollowItem`支持user、artist、userArtistInfo、userState，不应把音乐人ID误当普通用户ID。官版 `FansListViewModel.uU` / `FollowingListViewModel.EU` 分别读取SourceLuna与SourceAweme两组；`FollowListSceneType.<clinit>` 原smali明确 Default=0、SourceAweme=1、SourceLuna=2。汽水专属列表需scene=2而非把默认0当专属。
