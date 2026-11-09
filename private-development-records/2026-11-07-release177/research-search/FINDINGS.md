# 1.0.77 汽水歌曲搜索：本地协议修复及待验边界

日期：2026-11-07。仅汽水；本阶段没有连接手机、读取真实账号、请求官方接口或运行签名助手。

## 已观察的缺陷与证据

用户在 1.0.76 反馈歌手可以搜索、歌曲搜索显示空响应。现有产品把歌曲查询变成未使用应用签名的 `GET /luna/pc/search/track`，错误发生在 HTTP 空体检查阶段，尚未进入 `result_groups` 解析。单纯放宽解析器不会修复该空体。

官版 21.5.0 原始 DEX 注解文件 `2026-11-05-soda-rootless-feasibility/contract-SearchResultApi.json` 声明：

- `SearchResultApi.getSearchResponse` 的 Retrofit 注解为 `POST /luna/search/{search_type}`，对应方法索引 27116；`search_type` 是 `@Path`，另一个参数是 `@Body SearchRequest`。
- POST 注解的原始 `annotation_item_offset` 为 10372472，路径参数注解偏移 10372512，正文参数注解偏移 10316370。
- `SearchRequest` 的必需字符串是 `q`、`search_id`、`search_method`；`cursor` 为可空字符串。另有可空场景/来源/AB 等字段，没有 `count` 或 `debug_params` 字段。
- 19.0.0 的逐字节 DEX 提取 `release177/research-contracts/search-request19.json` 也包含以上字段及可空性声明。

21.5.0 官版来源 SHA-256 为 `b639e67c13e03377f0f9d8068c5e0419b1acd42c7d529362f11ae704b3838741`；该声明来自 `classes8.dex`，DEX SHA-256 为 `d3a41ea69d5c03e8fb160d4c961ae64ccb22ab578581b493c022fb62d82ccf09`。19.0.0 官版来源 SHA-256 为 `68bd9ab99e45875527959ec6e2a6bf48bcd43e817b503e4870d83c65d4bf5fa8`。本轮未重复反编译或执行官版。

这些是静态声明，证明官版请求的方法、路径及 DTO 形状；它们不证明官方服务器目前接受 PC 扫码会话，也不能单独证明旧 PC GET 是用户失败的唯一根因。

## 实现候选

1. 歌曲查询使用 `POST /luna/search/track`，精确 JSON 正文只有 `q`、`cursor`、`search_id`、`search_method: input`。省略 nullable 场景信息，不猜造 Android 安装身份或推荐上下文。
2. 将该精确 POST 作为应用签名的读取请求，签名和派发使用相同 UTF-8 正文，不标记业务写入，不进入未知写入重发链。
3. 当前使用真实自建助手 PC 身份，保持 `api.qishui.com` 与已有第一方 Cookie 范围。账号 Cookie、CSRF、Token 只在直发官方请求时附加，歌曲搜索不扩大媒体 Cookie 签名开关范围。
4. 用户已确认可用的歌手搜索继续采用现有 PC GET；歌手详情和作品目录不随本轮歌曲修复改协议。
5. 保留当前分页、跨账号、取消和已显示列表边界。HTTP 空体/格式错误不能作为“没有匹配歌曲”；合法空歌曲分组仍表示零条结果。

## 受控验证与尚未执行

新增 `test/qishui_search177_test.dart` 覆盖真实 App 签名适配器与 MockClient 配合时的精确方法/路径/JSON、签名和派发字节一致、凭据隔离、歌手 GET 保持、签名等待时取消或切号不派发、旧仓库不能借新账号查询，以及空体/格式/HTTP 失败不自动重试且不误标未知写入。

此文件编写阶段只运行了 Dart 格式化，测试交主会话统一执行。旧 173 单元和界面夹具已按新的歌曲协议调整；测试通过只证明受控契约和状态机，不代表真实搜索已成功。

助手仍需允许精确 POST 路由和上述四个正文字段，由原签名助手会话负责本地适配。NAS 是否更新、真实搜索是否返回《天外来物》等曲目、本人扫码会话的接受与分页行为，均须未来设备/真实服务补验，不以静态注解或合成结果代替。
