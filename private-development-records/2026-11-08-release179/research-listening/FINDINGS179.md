# 179 汽水累计听歌读取：真实请求构造核对

本轮只读分析留存官版 19.0.0、21.5.0 原 DEX 及固定版本公开参考。未连接手机、启动官版、读取账号凭据、访问 NAS，未发送官方业务或 MCS 请求。未使用或改变本轮由上传调查独占的 REA session。未修改产品、测试、版本文档或 178 冻结物。

## 已确认的请求差异

当前 177/178 的 `ab_param:''` 与两个官版实际构造不同，不能再把“DTO 必填字符串”解释为“空字符串足够”。

两个原 APK 的调用链相同：

- 19.0.0 `classes19.dex`，`UserRepository.e0`，`(String,String,Strategy,String) -> Observable`。
- 21.5.0 `classes6.dex`，`UserRepository.b0`，相同原型。
- code-unit 199 开始创建 `JSONObject`；204 读取 `ListeningDurationConfigKt.k()`；219–221 写入 `enable_new_music_wall`；224–241 写入两项 Fav 实验布尔值；244–247 `toString()`；256–266 构造 `GetMyMusicWallRequest`；273 调用 `UserApi.getMeMusicWall`。
- 请求方法和路径仍是 `POST /luna/me/music_wall`，请求整体 JSON。

能力字符串的三项精确键、类型如下：

| 键 | 类型 | 证据和建议值 |
| --- | --- | --- |
| `enable_new_music_wall` | JSON integer | 两个 APK 的 `ListeningDurationConfigKt.k()` 均只有 `const/4 v0,1; return v0`，明确固定 true；经 Boolean-to-int 转换并 `JSONObject.put(String,int)`，结果为 **1**。|
| `enable_fav_artists` | JSON boolean | `FavArtistsAndSongsExp.f()` 读取 Config 对应字段；Config 默认 **false**，官版运行时实验可能覆盖。Mesting 没有这些扩展排行榜能力，采用 false 是受限能力声明，不能自称复用了真实账号 AB。|
| `enable_fav_playables` | JSON boolean | `FavArtistsAndSongsExp.g()` 读取 Config 对应字段；同样默认 **false**，运行时实验可能覆盖。|

建议最小对齐候选是：

```json
{
  "feed_music_wall_extra": {},
  "ab_param": "{\"enable_new_music_wall\":1,\"enable_fav_artists\":false,\"enable_fav_playables\":false}"
}
```

`ab_param` 必须仍为一个 **JSON 字符串**，不能直接变成嵌套对象。`recent_rankings_version`、`schema_extra` 在两个 DTO 中均可空，构造调用点从上游参数传入；没有真实值时继续省略，不造版本或 schema。

## 空 extra 的依据与边界

`FeedMusicWallExtra` 本身是非空请求容器，但其四个字段均明确 `@Nullable`：

- `har`：可选 AI HAR controller 的结果。
- `commerce_block_pattern`：可选商业服务结果。
- `reco_session_info`：可选播放服务的推荐会话。
- `recent_play_info`：可选播放服务的近期媒体信息 map。

官版 19 `UserRepository.a0()` 和 21 `UserRepository.X()` 分别通过这些可选服务读取字段；每条分支都在服务不存在时传 null，然后调用四参数构造函数。其结构支持四个字段全为空，未发现“至少一项非空”的本地前置校验。此前留存的官版 Retrofit Gson 创建链仅为 `new GsonBuilder -> setFieldNamingPolicy(LOWER_CASE_WITH_UNDERSCORES) -> create -> GsonOpt.optGson`，未调用 `serializeNulls`。

因此 `{}` 有 **DTO 可表达性与默认序列化行为** 的依据，可以作为未持有官版推荐/商业上下文时的最小候选。**没有证据能证明当前服务在 PC 扫码身份下接受空 extra 后必定返回累计。** 不能把可空注解或本机序列化当作官方业务验收。

## 78 真实报告的意义

用户提供的 178 专用 JSON 有 44 条记录：官方累计 18 条，组成 6 轮 helper200、response200/business0、parse missingFields。每轮返回结构都明确包含 `listen_duration:null`。

这排除了“App 忽略一个已返回的合法 listen_duration 对象”这一解释；当前真实情况是服务响应未提供累计对象。遗漏 `enable_new_music_wall:1` 是已确认的请求差异，可能解释空对象，但因没有服务端代码或同账号对照请求，根因关系仍是推断。

同一报告完全没有 `listeningReport` 事件，不能据此称新播放上报成功、失败或入账，也不能重放 77/78 旧未确认时长。

## PC 参考的核对结果

受限检索范围为已留存 libresoda `src/soda`、`docs/CLIENT-API.md`，myMusic `SodaPlayReport.kt` 及 167 同源参考，不做其他平台分析。

- libresoda `my_music_wall` 只是将调用方传入的 ab_param、recent_rankings_version 与空 schema_extra 发送给相同路径的 wrapper；没有留存成功累计回执，也没有证明空 AB 参数可用。
- libresoda `user_music_wall` 使用 `GET /luna/users/{id}/music_wall`。两个官方 DEX 明确实际为 `POST /luna/user/music_wall`，请求 `GetUserMusicWallRequest(user_id,feed_music_wall_extra,ab_param)`。它不能作为有一手证据支持的自动备用读取路径。
- PC CLIENT-API 声明 `/luna/pc/media-stats` 带 media_id 返回 stats、最近播放能写读删，另有 applog 事件通道。该文没有证明“官方累计时长读取成功”或“本人累计实际增长”。
- 原有 MCS 身份 envelope 是兼容候选，根本接收和账号入账语义仍未验；本轮不改变它，也不重放旧账本。

## 证据索引

- `music-wall-call-index19.json` / `music-wall-call-index21.json`：原 DEX 逐指令调用点、原 APK 和 DEX 哈希、请求 DTO 注解。
- `duration-config19.json` / `duration-config21.json`：固定 k()、Fav 配置 getter/default 构造、UserMusicWall DTO。
- `boolean-to-int19.json`：真实 BooleanExtKt 转换指令；非 null true 的返回整数为 1。
- `music-wall-request-contract179.json`：精确候选结构、结论分级和全部参考文件 SHA256。

19.0.0 原 APK SHA256 `68bd9ab99e45875527959ec6e2a6bf48bcd43e817b503e4870d83c65d4bf5fa8`；21.5.0 原 APK SHA256 `b639e67c13e03377f0f9d8068c5e0419b1acd42c7d529362f11ae704b3838741`。索引器全 DEX 搜索请求构造与 getMeMusicWall 的直接 invoke，本轮两包均无解码错误；不能覆盖反射、动态热修补或服务端逻辑。
