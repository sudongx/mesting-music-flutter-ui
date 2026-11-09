# 汽水21.5.0移动搜索与媒体：离线契约

本报告为2026-11-05继续离线分析的结果。用户已选择暂不连接手机；本阶段没有新增网络请求、手机/ADB操作、短信或账号写入。研究对象为此前从官网取得的21.5.0/code100215040包，SHA256 `b639e67c13e03377f0f9d8068c5e0419b1acd42c7d529362f11ae704b3838741`。

## 本阶段修正了什么

1. 主机名称中的`beta`不能当作测试环境的证据。官版的初始化、HostUtil、生产HostType及Retrofit链明确使用`https://beta-luna.douyin.com`作为普通生产API默认地址，详见[official-host-context.md](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/official-host-context.md)。运行配置和Hotfix仍可能覆盖它。
2. 官版移动搜索不是此前PC的GET接口。已从当前包恢复`SearchResultApi`的POST声明、请求体字段和SearchType常量。
3. 当前包中恢复的媒体详情链是`MediaRepo.Y → MediaApi.getMediaResponse → POST /luna/media_v2`。此前对第三方旧`/luna/media-player`的实测拒绝，只说明那组旧请求不成立，不能代替21.5新媒体契约的测试。
4. 没有因这些静态契约而宣称独立登录、完整播放或下载已被服务器接受。

## 静态来源与覆盖

`official-retrofit-contract-index.json`记录21个DEX内509个Retrofit接口方法声明，包含方法原始DEX索引、HTTP注解、参数注解和字节位置。它是格式解析的静态声明索引，**不是509个可用接口的测试结果**，也不覆盖动态URL、反射、原生网络或非Retrofit实现。

`read_dex_contract.py`按DEX结构解析类、字段、方法、注解和原型；`index_retrofit_contracts.py`只索引接口声明，不运行APK。`media-search-direct-callers.json`另按指令边界记录直接DEX调用：MediaRepo.Y调用MediaApi，ResultRepo.V调用SearchResultApi；不声称包含反射和全部间接调用。

已用REA/JADX对实际`MediaRepo.Y`方法体做了独立抽查：它构造`NetMediaRequest`，以请求建立LoadingMediaKey，合并相同在途请求，调用`V().getMediaResponse(netMediaRequest)`，并在成功、错误和finally中处理结果/移除在途键。父证据`ev_130c785a558a9b01e1ce8ddd8743c72cd9371a74d5fe46e35695300dc9153729`。

MediaApi.getMediaResponse是抽象声明，REA方法体返回`not_available`，没有把空方法体当反编译失败后自行补写。HTTP路径来自原始注解，位于classes9.dex annotation_item_offset `9867955`，方法索引12043。

本阶段14条REA记录保存在`media-contract-rea-evidence.json`及相同检查点，已export/reset/close；分析子集只保留原始manifest/resources/classes9，来源及限制见`phone-analysis-only-dex9.provenance.json`，不能安装或交付。

离线续查另用classes6子集对播放器调用做6条REA抽查，保存为`player-current-media-rea-evidence.json`及checkpoint并清理。`PlayerInfoRepo.S0`父证据`ev_94daeda56940f644b28f292576c12d2af3cb1be68fda6cd79a91865485ead907`：从用户生命周期取MediaRepo，要求IPlayable可转换为ILunaQueueItem和NetReqMedia，随后携带sceneName/queueType调用MediaRepo.X，并把响应映射为PlayerInfo列表。这把`/luna/media_v2`与实际播放器补取播放资料连上；缺用户仓库或转换失败时明确Observable.error，未把目录请求等同可播放。

`PlayerInfoRepo.X0`父证据`ev_73a1389041004dca2b8890a96176d1507a51bc3cc2755be7f8b6a44048cbeec2`调用S0，并有onErrorResumeNext分支；原始`media-player-info-instructions.json`同时定位按录音、预览、音质与是否过期检查缓存的路径。因此后续Mesting恢复播放需重新核对当前会话/录音/档位和期限，不能从上次缓存有PlayerInfo就直接承诺完整可播。这个静态结论不替代真实服务器或音频解码验证。

## 移动搜索

声明：classes8.dex，`com.luna.biz.search.result.net.SearchResultApi.getSearchResponse(String, SearchRequest)`。

- `@POST("/luna/search/{search_type}")`
- 第一参数为`@Path("search_type")`，第二参数为`@Body`。
- 同一接口的分类读取为`POST /luna/search-categories`，同样使用SearchRequest。

SearchRequest中恢复的JSON键：

| JSON键 | 模型类型 | 静态边界 |
| --- | --- | --- |
| q | String | Kotlin字段/构造参数标为非空；不是服务器必需条件的运行证明。 |
| search_id、search_method | String | 同样标为非空；具体普通搜索默认值仍需调用者默认路径核对。 |
| cursor、from_search_id | String? | 可空，不能把PC的整数cursor强制套过来。 |
| search_type | SearchType? | body字段；路径参数也独立存在。 |
| scene_name、search_scene、ab_param | String? | 仅按真实场景传值，不编造灰度或实验参数。 |
| last_viewed_media | NetMedia? | 保留上一次媒体上下文的结构字段。 |
| transit | SearchTransit? | 搜索来源上下文，尚未完整恢复嵌套模型。 |
| limited_free_scene | Integer? | 不能把任意数值当已具备免费听资格。 |

SearchType的`<clinit>`原始指令中可见以下字面量对：ALL/all、TRACK/track、ARTIST/artist、ALBUM/album、PLAYLIST/playlist、RELATED_TRACK/related_track、VIDEO/video、LISTEN_VIDEO/listen_video、USER/user。索引在`search-type-literals.json`；定义和枚举构造原型在`contract-SearchType_Companion.json`。这是静态值定位，不是每一类搜索均已接通的承诺。

完整注解与字段位置：`contract-SearchResultApi.json`。

## 媒体详情与播放资料

声明：classes9.dex，`com.luna.common.arch.net.media.MediaApi.getMediaResponse(NetMediaRequest)`，`POST /luna/media_v2`。

NetMediaRequest的字段：

| JSON键 | 模型 |
| --- | --- |
| media | List<NetReqMedia>，客户端构造器非空集合 |
| scene | NetMediaScene? |
| scene_name | String? |
| queue_type | String? |
| limited_free_scene | LimitConfig.LimitedFreeScene? |

单项NetReqMedia的字段为`id`、`type`、`track_param`、`video_param`、`check_context`。track_param的结构为NetReqTrackParam，包含`limited_free_param`；video_param的结构为NetReqVideoParam，包含布尔`enable_dash`。这组结构与第三方旧接口的顶层media_id/media_type不同，不能仅替换路径就沿用旧body。

返回模型是NetMediaResponse.media(List<NetMediaInfoEntity>)。每项包含id/type/entity；entity的trackWrapper包含track及limitedFreeInfo。NetTrack保留真实id、vid、preview、player_info、check_context、shark_result及资料/权益提示等。`player_info`对应NetPlayerInfo，包括mediaId、urlPlayerInfo、video_model、videoModelType和audioEffects。

它描述“取得媒体及其播放资料”的链路，尚未单独证明TTVideoEngine如何使用urlPlayerInfo、哪些情况下返回完整video_model，以及是否需要额外宿主请求上下文。也不能根据存在player_info就把preview替换为完整版。

本轮匿名既有实测的4首H5音频均短于目录时长。后续解析器必须明确区分目录时长、preview时长、实际模型/音频时长和下载资格，不能只看非空URL。没有在用户选择离线后对新接口做网络测试。

## 免费播放参数不能伪造为权益

NetLimitedFreeParam的原始字段注解已恢复：

`expire_time`、`from_other_queue`、`intercept_type`、`is_login_support`、`is_logout_support`、`limited_free`、`limited_free_type`、`luna_commercial_style`、`rewind_prev_intercept_type`、`sign`、`sign_version`、`track_value`。

这些是数据结构的存在证据。**字段名sign不等于已经证明某种校验算法或每次必需；同样，不能把limited_free=true写入本机当作官方授权。** 应沿真实响应与录音/会话上下文处理，而不是凭字段名生成签名、延长期限或复用别的账号/录音数据。

证据在`contract-NetLimitedFreeParam.json`、`contract-NetReqMedia.json`、`contract-NetReqTrackParam.json`、`media-wrapper-models.json`。

## 对Mesting实施的实际影响

可以按当前移动契约设计独立客户端与模型，复用同一播放器/下载器；真实会话和请求上下文只留在汽水私有服务中，不放入Track、历史、MediaItem或公共音频headers。对HTTP200空body、业务拒绝、账号/录音不匹配、过期播放资料、试听和不满足下载资格分别处理。

尚未满足“完整可用第三平台”的验收条件：公共query/安全上下文、独立手机号成功会话、媒体完整性/音质/实际播放下载及服务器接受仍未验证。当前阶段按用户要求继续离线分析，未修改产品、锁、签名、版本或冻结交付物。
