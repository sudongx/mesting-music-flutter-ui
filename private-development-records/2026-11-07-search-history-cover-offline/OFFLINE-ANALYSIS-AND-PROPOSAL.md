# 汽水搜索、返回、歌单封面、历史同步与播放差异：离线分析和待确认方案

日期：2026-11-07，北京时间。主项目：D:\AnLi，当前产品1.0.72/code93。

本次仅分析本地源码、已有公开官版APK及已留存参考源码。没有修改产品代码、运行测试或构建，没有连接手机/ADB、读取真实凭据、发起官方/NAS请求、更新独立助手或部署。本文和本目录证据是新的分析产物，不回填72交付物或同版文档。

## 已逐项确认的需求

- 搜索歌曲与歌手；歌手应有独立结果，并能进入歌手资料/作品页。
- 搜索和歌词属于二级状态，系统左右边缘返回和页面返回应回上一层。
- 用户要改的是自己创建、官版“我的歌单”也可见的汽水云歌单封面。用户起初选择“本地歌单”，随后明确同一歌单在官版可见；以后者为准，不按纯本地歌单实施。
- 历史需要双向同步：读取官版云端历史，Mesting实际播放也新增到同一账号云端历史。
- 音乐封面页增加可操作的播放进度条；歌词布局选择更贴近官版，保留已有玻璃风格与既有底部导航要求。
- 用户记不清新发生的自动跳过曲目。不要求找回旧301歌曲；本轮无法用具体真实失败响应定唯一原因。
- 当前仅授权离线分析；修复方案仍须用户确认，之后才实施。

## 官版输入与证据范围

主输入：`.codex-artifacts/2026-11-06-release165/official-device-19.0.0.apk`，包名com.luna.music，留存版本19.0.0/code100190050。

本轮重新核对主APK SHA256为`68bd9ab99e45875527959ec6e2a6bf48bcd43e817b503e4870d83c65d4bf5fa8`，与原公开APK取回收据一致。未操作设备来确认此刻官版安装版本。

REA对整包的首次有效分析达到120000ms提供者时限，未据此声称整包分析成功。随后确认cleanup_pending=false，改用已留存的字节一致DEX分析载体；载体不可安装，不代表完整APK运行。类/方法由REA静态读取，接口注解由已有只读DEX解析器补充，因为抽象方法的REA反编译结果没有方法体及完整Retrofit注解。

- classes18.dex：歌单编辑、ArtistApi。
- classes19.dex：RecentApi，由主APK直接只读解析。
- classes20.dex：SearchResultApi、搜索请求与分组结果DTO。原DEX SHA256为`a854d01e128ce4e7e0353da9c1ab08950c1b40168a9edac627e9e508cd792a18`。
- classes21.dex：上传流程与配置。留存载体收据中的原DEX SHA256为`c47f44dc60c42b66915773063ae79256f0cc9cfb6517ee1785aa539fafceb32a`。

原始注解和字段见`official19-contracts.json`、`official19-artist-contract.json`。REA完整证据保存为`rea-evidence-final.json`。这些是静态观察，不能证明当前扫码PC会话、NAS签名或官方服务器接受请求。

## 1. 搜索：请求契约差异与结果解析缺口并存

已观察主项目：

- `lib/features/music_platform/qishui/qishui_repository.dart:277`仅调用track搜索，固定search_method=normal，搜索页没有完整分页状态。
- `qishui_web_routes.dart:56`把读取映射为GET `/luna/pc/search/track`。
- `qishui_api.dart:266`只为媒体/下载资格/写入选择signedPc。搜索落入Web分支，使用device_platform=web、channel=pc_web和移动适配UA；与留存PC参考的Windows身份、UA和参数存在差异。
- `qishui_api.dart:436`在HTTP200但bodyBytes为空时抛出“汽水服务返回空响应”。这不是一个“搜索结果为0首”的业务响应。
- `qishui_models.dart:166`的sodaTracks没有遍历result_groups；`qishui_pages.dart:520`只有歌曲结果，没有歌手实体或作品页。

官版静态观察：

- SearchResultApi声明POST `/luna/search/{search_type}`，请求包含q、cursor、search_id、search_method、search_type、search_scene、scene_name等字段。
- SearchResponse具有resultGroups和extra；分组包含data、hasMore、nextCursor，item具有entity和meta。分组结构与本地通用遍历器不匹配。
- ArtistApi声明GET `/luna/artists/{artist_id}`、POST `/luna/artists/{artist_id}/tracks`、GET专辑及资料接口。

限制：官版Android移动端点不是当前扫码PC协议已经兼容的证明。不能把所有移动端点机械加上/pc。已有第三方PC搜索参数只能证明参考实现的差异，不能等同官版PC的实测回执，也不能认定某个参数就是此次空body的唯一原因。

拟修：独立搜索请求/结果/分页模块，明确当前扫码会话对应的身份和PC契约；歌曲与歌手分开建模，补作品页；已知分组模型显式解析。空body、业务拒绝、正常0结果分开提示。分页/取消/新关键词/切账号隔离。

## 2. 返回：歌词有明确缺口，搜索两个入口均需覆盖

已观察：

- `qishui_player_navigation.dart:7`与`qishui_pages.dart:278`表明歌词是音乐根页内部bool状态，使用PopScope消费收到的返回，并非独立导航路由。
- `lib/app/system_back_coordinator.dart:34`同步Android返回能力时用传入canPop覆盖通知值；`mesting_music_app.dart:204`传入appRouter.canPop。根页内部歌词不一定在该栈中呈现可返回记录。
- `lib/shared/widgets/beta_edge_back.dart:22`默认仅在Navigator.canPop时启用；歌词没有显式onBack。
- 页头搜索由`qishui_pages.dart:224`的当前Navigator.push打开；壳底部搜索由`beta_music_shell.dart:240`的壳上下文打开，需要分别验证。
- go_router当前delegate.canPop本身会遍历root与当前shell栈。因此不能以“命令式push不属于声明栈”直接断言搜索页必然canPop=false。
- 现有`test/qishui_ui168_test.dart:465`直接向Flutter发送handlePopRoute，无法证明Android已注册系统手势返回。

拟修：用独立、具有可见状态与生命周期的返回协调方式统一歌词/搜索/歌手页的返回目标。歌词回封面，搜索回进入前页面；避免覆盖页或非当前tab的陈旧通知。保留草稿和搜索结果。系统返回注册、页内左右边缘和返回按钮使用一致语义，避免退出或连续弹两级。

## 3. 自建云歌单换封面：尚未实现上传与更新链路

主项目：

- `qishui_playlist_page.dart:226`菜单无编辑封面；`:617`封面只显示。
- `qishui_repository.dart:172`的update仅写playlist_id和is_private。
- 通用歌单编辑器的本地照片选择、预处理可以复用，但其本地文件路径不等于云端已保存。

官版真实编辑调用链已观察到：

1. PlaylistEditViewModel.uT创建IMAGE类型UploadFileInfo并订阅UploadImageObservable。
2. BaseUploadObservable.i调用UploadApi.getVideoUploadToken；名字虽含video，其参数使用图片UploadType与场景，声明路径是GET `/luna/video/uploader`。
3. UploadImageObservable.F读取服务端imageHost、serviceId和临时securityToken字段，配置BDImageXUploader后上传。e方法监听完成并取mImageTosKey作为imageUri。
4. PlaylistApi.updatePlaylistInfo声明FormUrlEncoded POST `/luna/me/playlist/update`，字段包含playlist_id、name、description、is_private、cover_uri。

重要区分：同包内也有TTImageUploadRepo与`/aweme/v1/upload/image/`，但已追到的歌单编辑链使用ImageX。不能因为发现另一个上传接口，就把它当作歌单封面的实际实现。

拟修：自有歌单增加编辑封面入口，选择/裁剪/预览、上传、更新cover_uri、官方读回与UI刷新分层；只编辑当前账号拥有的歌单。不显示本地假成功，不在日志保存临时上传凭据。当前扫码会话能否申请该上传配置、PC更新编码及NAS签名是否支持尚未实测，必须作为具体接入依赖验证。

## 4. 历史：当前只有读取，尚无汽水播放上报

- `qishui_repository.dart:389`只GET最近50条，没有分页。
- `qishui_web_routes.dart`的write映射没有最近播放新增操作。
- 本地播放会写本地库，但`qishui_library_repository.dart:110`的synchronize只处理收藏；没有汽水历史reporter。
- 官版RecentApi同时声明GET和POST `/luna/me/recently-played-media`，读取有cursor/count/media_type/scene；POST是独立新增历史的请求。第三方PC参考另有POST `/luna/pc/me/recently-played-media`，不是本轮官方运行证明。

拟修：独立历史读取/分页与真实播放事件上报器，保持同账号和去重；进入页面、恢复暂停元数据、预加载或加载失败不当作实际播放。未知写入不盲重试，不回放旧日志，不补造历史。云端读回与本地待确认状态分开。仅处理历史，不顺带修改奖励、听歌时长或applog统计。

## 5. 自动跳歌：不能直接归为版权问题

确定的客户端缺口：

- `qishui_models.dart:483`的备URL别名只取第一个非空字段，backup_url_2/3可能被丢弃。
- `qishui_playback_media.dart:131`选择单一candidate；`qishui_repository.dart:502`对其缓存/解码/格式探测失败后直接抛错，没有充分尝试同曲目其他已授权候选。
- `qishui_playback_recovery.dart:9`将格式或单曲HTTP错误交给有界跳歌处理。用户因此可能只看到跳过，没有记住具体歌名。
- 当前客户端仍有模型、加密方式和容器适配范围；format不是服务端明示版权拒绝，0候选也没有进入nativeDecode。

开关语义：`qishui_api.dart:354`固定账号快照，仅开启时把媒体Cookie加入自建HTTPS助手的签名输入；`:390`附近无论开关状态都向符合条件的官方请求发送Cookie。因此关闭开关不等于官方请求完全匿名，也不能排除签名输入、PC协议、媒体模型或下载候选的问题。上一轮助手HTTP400证据只适用于新增Cookie遭旧policy拒绝，不解释所有开关关闭时的跳歌。

拟修：同首歌曲完整保留已返回的合规备用地址/候选，按完整媒体优先和现有音质约束有界尝试，处理实际网络/容器/授权分类后才决定继续队列。网络、登录或签名整体错误仍停止；不绕过权益、不伪造媒体、不把试听标整曲。保留有界的最近跳过曲目和失败阶段供用户核对，不导出凭据、媒体地址或原始响应。

尚未知：用户具体失败歌曲、当前官方回执、是否有特殊格式或权益拒绝。没有这些证据，不承诺单靠候选回退就能让每首歌可播，也不判断为版权不足。

## 6. 播放进度与歌词布局

- `qishui_now_playing.dart:43`与`qishui_lyrics_page.dart`均未提供进度条。
- 已有positionProvider/durationProvider和通用seek交互可提取复用，不需要第二播放器。
- 本轮查看了已有用户提供的官版歌词参考图：`.codex-artifacts/2026-11-06-release168/reference/official-lyrics-user.jpg`。当前附图是Mesting问题截图，不当作官版效果。

拟修：音乐封面页加入可拖动进度与已播/实际总时长，松手定位；曲目变化清除拖动态，无时长禁用。不得用目录整曲时长冒充试听可拖范围。歌词按用户选择贴近官版：收紧顶部返回/更多、小封面/标题/歌手/单一播放键，歌词为主体，分享/收藏/队列集中为次级操作；保留玻璃与底部导航，不伪造评论数或未实现的K歌功能。保持现有歌词跟随、选句预览及显式跳转播放语义。

## 待用户确认的实施与验证范围

1. 本地递增版本修改，拆开搜索协议、历史同步、封面上传/更新、媒体候选和播放控件模块，解释边界的注释随实现更新。
2. 保留beta/HEAD、历史脏改、空暂存、原签名与锁；72及既有冻结交付物不覆盖。
3. 本地验证覆盖搜索分组与分页/歌手页、生产路由与Android返回注册、云歌单所有权/上传取消/更新读回、历史触发与去重、媒体候选回退/整体失败停止、进度拖动/曲目切换/试听边界、大小字号及深浅模式。共享导航/音频修改需对已有平台做相应回归。
4. 仍不操作手机、真实账号、NAS、独立助手仓库或发布。若新接口需要助手白名单/签名支持，应记录确切契约交由原助手会话处理；当前会话不能以修改电脑代码冒称NAS已升级。
5. 云端歌单、双向历史、搜索及本人VIP整曲最终仍需单独真实验收。本地测试不替代这些验收。

## REA关键证据索引

- SearchResultApi类：`ev_b96876f0db1c2bffcd2c9dbf2755580d541936ad629a0a575bbbdce6fc65d5cc`。
- SearchResponse分组字段：`ev_a38d553ee0bd541c12fc655c089f7519740cccc3a2d70cf942fe680eaa38c0de`。
- PlaylistEditViewModel.uT：`ev_46895131a989abf741624f463213781a132990570cea9e42f259b708ff168fa9`。
- UploadImageObservable.e：`ev_e3b6b738c2d932baf8c5b868d1d094c0245c347c05cba27989eb665a17037d87`。
- BaseUploadObservable.i：`ev_cb0a9dfc32b8c66bf7d066e87e49501262340b37793b9526bdd62349a78da1ab`。
- ImageX配置UploadImageObservable.F：`ev_7810c37a6094d652747a46a94dd57a9b3b24e7a3833680269156f48b9ea37177`。

搜索、返回、封面、历史、播放和布局的代码问题均已离线定位到具体模块；服务器接受、NAS支持和用户具体跳歌根因均仍部分未知。本文是分析/方案，不是修复完成或实机验收记录。
