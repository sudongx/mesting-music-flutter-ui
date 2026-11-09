# 汽水第三平台接入点（只读源码核对）

核对日期：2026-11-05。范围以本目录 `PROPOSED-SCOPE.md` 已确认内容为准。基线是本地 1.0.61/code82；本次没有改产品、测试、版本、锁、签名或交付冻结物，没有运行测试/构建或访问手机、账号、短信。本文是当前工作树的源码观察，不是旧 HEAD 或 APK 运行观察。

## 结论

可以复用单一播放器、账号切换协调、下载管理和玻璃组件，但必须先建立汽水专用账号/协议/目录适配。只追加 `MusicPlatform.qishui` 会把汽水凭据、云库、音质和功能路由送进酷狗分支。最小安全改法是明确每个平台的分发，汽水三页及其服务单独组织；保留旧两平台路径和持久化键。核心手机号/媒体契约尚由独立调查验证，不能用假登录或静态推荐填满三页。

## 必须先隔离的落点

| 落点（当前一基行号） | 当前行为/风险 | 最小接入动作 |
| --- | --- | --- |
| `lib/features/music_platform/domain/platform_session.dart:3,32` | 仅 kugou/netease；标签把非网易云都叫酷狗；`fromJson/toJson` 实际是酷狗凭据格式。 | 追加稳定名字 `qishui`；显式标签分发。汽水独立 credential model/store，不让 Cookie 写入酷狗 token 序列化。共享 `PlatformSession` 仅作公开身份投影。 |
| `lib/features/auth/beta_account_choice.dart:7` | 选择按 enum **name** 存于 `beta_active_account_v2`。 | 追加 qishui，保留旧 name/旧 key；无需以枚举 ordinal 迁移。 |
| `lib/features/music_platform/music_platform_providers.dart:82` | `_publish` 把所有非网易云 identity 传给 `musicPlatformApiProvider.session`（酷狗 API）。 | 显式 switch，只有 kugou 才 configure 酷狗；汽水 configure 自己的私有 client，其他 client 清空当前活动身份。 |
| 同文件 `:101,491,513,529,598` | restore、switchPlatform、retainedIdentity、profile metadata、signOut 均有二分支默认酷狗或默认网易云。 | 汽水各自 read/configure/write/clear；沿用串行 `_pendingMutation`、先验证持久化再 publish、`preparePlatformSwitch(ownerId)`；失败回滚原选择和 client。 |
| `lib/features/auth/auth_providers.dart:109,116,128,501,509` | CloudBase 的恢复/账号互斥集合只列现有两个平台。 | 汽水也属于平台账号，不能等待 CloudBase 恢复，不能让迟到的 Mesting 登录覆盖汽水。优先集中 `isMusicPlatformChoice` 规则避免多处漏改。 |
| `lib/features/library/library_providers.dart:98`；`data/platform_library_repository.dart:21,26` | 任何非网易云 platform 都实例化酷狗库；构造器 owner 硬编码 `kugou:${identity.userId}`。 | 显式 qishui library adapter；未接通的云写入拒绝并说明。共享数据库按 `qishui:<UID>` 隔离，不能把汽水喜欢/歌单写进酷狗 owner。 |
| `lib/features/music_platform/platform_capabilities.dart:17` | 任何非网易云（含 null）都获得酷狗 audiobooks/recognition/together/rewards/effectsCatalog 能力。 | 改为按平台及功能逐项 allowlist；汽水仅开放实际接通能力。根页以外的 deep link 也必须守同一规则。 |

### 会话存储建议

参考 `netease/netease_session.dart:12` 的隔离方式，新增 `qishui_session.dart`（真正的 cookies/tokens/device context 只在专用加密模型内）。`identity.token` 可以是非可用凭据的 credential digest，仅用于取消旧请求，不能把真实 Cookie 公开给页面或日志。现有 `data/platform_session_store.dart:18` 的 key 明确为酷狗专用，不能复用。

`RetainedCredentialVault` 已提供保留旧密文和独立新登录恢复边界。汽水可复用这个底层组件，不能复制后删旧库/换全局安全存储。新的 `acceptQishui` 只能接受通过真实登录/用户资料核对的完整会话，不能把任意 HTTP200 或空响应当成功。

## 三页与玻璃壳

当前固定根路由为 `/music/recommend`、`/music`、`/music/library`、`/profile`（`lib/app/router/app_router.dart:444`）。底栏的四个 route/tab 常量在 `features/experience/presentation/beta_bottom_bar.dart:25,31`；`BetaMusicBottomBar:54` 可复用现有高质量玻璃材质和搜索/播放胶囊，不应重做简化视觉。

`beta_music_shell.dart:136,375,510`、`MusicShell`、`music_navigation.dart` 和 `app_router.dart:582` 各自将这四个根映射成 index。三页不能只删除一个底栏项目，否则“我的”仍可能取 index3、访问错数组、错误返回或清理错误的保留分支。

建议把根配置集中为显式 `MusicPlatformNavigation`（route、label、icon、selected root）。保持旧两平台四页配置；汽水三页配置为发现/音乐/我的。配套调整实际 `betaTabShellRoutes` 保留分支、导航 owner、返回目的地和搜索父根。也可以给汽水单独一组三根路由，但必须独立 shell/branch index，不应把 index3 的旧 profile 伪装成 index2。共享 details/player 仍使用同一个播放器和玻璃返回动画。

当前 root 页面分别由 `RecommendationPage`、`MusicHomePage`、`MusicLibraryPage`、`ProfilePage` 建立；它们继续读取二平台 provider。汽水页宜在入口按实际平台早期选择专用 `QishuiDiscoverPage/QishuiMusicPage/QishuiMinePage`，不让旧 provider 在汽水页 mount 时发酷狗请求。发现可复用排版组件，歌曲/歌单列表也可复用，但服务和数据语义必须汽水专用。

官版结构证据详见 `official-pages-research.md`。推荐流、听歌模式、我的喜欢/歌单等仅按实际接口返回呈现；尚无运行证据的个人化首页顺序不能硬编码成“官版一致”。

## 搜索、目录及全局订阅

- `platform_catalog_providers.dart:13`、`search/search_providers.dart:113`、`platform_recommendation_providers.dart:16`、`platform_profile_provider.dart:13` 等都采用 `usesNetease ? NeteaseAdapter : KugouRepository`。汽水必须显式分发或专用 provider，不能把 false 当酷狗。
- `search/search_providers.dart:45` 的 Beta sources 永远是嵌入酷狗；`hotMusicRepositoryProvider:65` 非网易云会加载酷狗榜单。独立搜索入口之外，壳的搜索框/热搜也需要明确汽水 backend。
- `platform_recommendation_providers.dart:317` 是 App 级订阅，始终安装推荐 loader，监听播放完成/喜欢并上报。即使汽水三页不 watch 它，`MestingMusicApp:117` 仍会启动。应按平台配置 loader/语义并取消旧流，不能把汽水歌曲当酷狗 FM 反馈。
- `platform_rewards_provider.dart:106` 使用 retained Kugou identity；现有奖励自动策略并非简单当前平台绑定。新增汽水奖励必须独立 journal/owner/日期和启动条件，不能因 mount 汽水页面顺带发旧平台奖励。不要未经需求改写旧已保存自动策略。
- Browse/cache key 必须带 `ownerId + credential epoch`，迟到结果受账号/平台/页面/请求代次共同约束。保留旧显示内容/封面直到同一 owner 的替换结果就绪，切账号则不能沿用前用户资料。

## Track、播放、音质及歌词

| 位置 | 接入要求 |
| --- | --- |
| `lib/shared/models/track.dart:5,70,144` | 追加 `TrackSource.qishui`，稳定 ID 建议 `qishui_<track_id>`；`platformSongId` 保留真实 track ID，不借用 kugou hash/网易云 song ID。MediaItem/JSON 已按 source name 存储，可自然向后兼容。 |
| 同文件 `:75,99` | `audioHeaders` 仅匿名 CDN 头，进入历史/MediaItem；汽水 Cookie/session token 不可放这里。歌词需专用解析/受控 URI，不能落入默认酷狗 hash 规则。 |
| `lib/app/mesting_music_app.dart:66` | 这是所有在线 Track 的实际播放解析入口；增加显式 qishui 分支并校验当前 `MusicPlatform.qishui`。恢复队列必须重新取得当前会话媒体，不能用上次账号的过期 signed URL。 |
| 同文件 `:86` | 酷狗播放前现在仅拒绝 `usesNetease`。改成需要明确 kugou identity，避免汽水活动时恢复酷狗 track 走错账号。 |
| `platform_quality_providers.dart:46,184` | 非 netease ID 会被截去 `kugou_` 长度后查酷狗 `/audio`；偏好 key 也默认酷狗。汽水使用独立真实档位映射/偏好名；未核对档位不得伪报无损。 |
| `lib/shared/models/audio_origin.dart:7` | 增加公共实际来源“汽水官方”及真实录音 ID，source 仍表示目录归属。不要把 signed URL 或 Cookie 作为 origin identity。 |

可继续复用 `MestingAudioHandler` 单实例、既有音频完整性核验和缓存管道。官方 DSP 是 PCM 处理链，单纯给 Track 附加效果名称或调用现有 Equalizer 不能算官方汽水效果。依赖与 PCM 接口另见音效调查，不应在此层复制 Xposed 的本机权益 JSON。

## 下载与歌曲菜单

`audio_downloads.dart:884` 目前只允许当前网易云/酷狗下载；在此增加汽水专用 resolver 即可复用任务持久化、暂停取消、完整性、保存和 owner 检查，不需要新建另一个下载器。汽水官方未提供真实可下载完整媒体时要显示结果，不能把试听当完整版。

网易云的 `NeteaseTrackSource`、LX worker 和 fallback 依赖网易云 song ID；保持既有“官方优先，失败后由用户选择；所选失败不自动换”的行为，不能自动把汽水 ID 送进 LX。未来只有已证实同录音/同档位且用户选择的跨平台映射才可进入备用下载。

`song_actions_sheet.dart:88,94,97` 目前 remote 只识别网易云/酷狗，歌曲资料 repository 也只接这两个 backend。汽水可先使用专用菜单/资料 adapter，仅开放真实接通的操作；评论、收藏、分享、歌词不能默默调用酷狗。播放器 more menu/音效入口亦需显式分发，`music_effects_page.dart:43` 的非网易云分支现在是酷狗目录。

## 推荐实施顺序及验证边界

1. 先完成真正手机号登录会话/公共目录/搜索/完整可读音频最小链路；确认需要的风控条件和可用媒体类型。若核心不成立，先把具体证据与影响报告用户，不能靠 UI 掩盖。
2. 增加汽水协议模型、私有 client、credential store、目录/播放 resolver；先测响应解析、错误/空响应、取消和跨账号隔离。可公开媒体不代表登录已成立。
3. 一次修齐 account publish/restore/switch/signOut、CloudBase互斥、library owner 和能力 allowlist。以回归验证旧平台会话/恢复/账号切换不变。
4. 集中导航配置，挂汽水三页及自然详情，复用玻璃/播放胶囊/已有图片缓存；再核对窄屏、大字体、连续切换/反向返回、搜索退出和独立分支恢复。
5. 接入已验证的下载/奖励/官方效果；独立展示不支持或未核实状态。奖励使用真实余额读回区分本机回调和服务器到账；未知写结果不得自动重放。
6. 按实际修改运行针对性契约/状态机/旧账号/导航/媒体检查和最终静态分析；有完整可交付功能后再本地 APK/源码交付。主机结果与未授权的设备/真实账号验收分开，未执行的基线测试不重新累加。

产品代码文件此次均只读，唯一新写入是本文。
