# 官版网易云离线补传与今日收听：静态调查结果

2026-11-02，Asia/Shanghai。用户明确要求使用 reverse-engineer-anything 技能调查官版 APK 的离线记录补传，并追加检查“今日收听”。本轮未修改 Mesting 产品代码、未重新构建或发布，未安装/运行官版 APK，未访问手机/ADB、真实账号或足迹数据接口，未发送播放记录。

## 结论与适用范围

1. 官版包含持久化的逐条日志队列，支持以后上传保留的日志；这与把按天/月汇总数重新构造成播放事件是不同的数据过程。
2. 已完整追踪一条 legacy BI 队列：事件时间 → 格式化日志 → 追加文件 → 轮转/扫描 → 按所属用户上传 → 成功删除文件。失败路径不执行成功删除。同时有独立的现代 native BI logger，带 cache/flush/migrate、上传间隔、响应结果和过期文件过滤；本轮未把 native 内部所有行为等同于 legacy，也未证明当前所有设备选择同一个分支。
3. 今日/当前周期足迹与历史总时长是不同的服务端读取接口。取报表的 `realtime/report` 不是用于补传听歌秒数的写接口。
4. 本轮没有发现已成功接收的旧日志“原地纠错”协议，也未建立服务端去重、跨月回填和已结束月份重算规则。十月现有 280 条 accepted、12 条 unknown，不能从官版未发送队列的重试机制推导为可安全全部重发。
5. 官版实时足迹网页为动态交付。APK 与当前公开官方网页的来源严格区分；网页代码不是声明为 APK 9.6.15 内置的同版本实现。

## 目标身份与证据来源

原官版 APK：`../2026-11-01-together-history-review/com.netease.cloudmusic-9.6.15.apk`，9.6.15/code9006015，224823452 字节，当前重新核对 SHA256：

`e6427bcb35ccd9e8858ee55c46ec3db56b2f09871adcd8e897244d96cfcf7894`

REA 6.4.0 / JADX MCP 0.7.1。完整 APK 在前次调查已有超时，本次没有重复该操作。使用原 APK 未改字节的 classes14/classes5/既有 classes18/classes19 加原 AndroidManifest.xml 的局部静态载体，成员及派生摘要保存在 `transport/carrier-provenance.json`、`transport/carrier5-provenance.json` 与前次 `release135/protocol/*provenance.json`。这些不是可安装原包，不代表整包语义等价。完整 SDK smali 辅助取自原 APK，辅助结果不冒充 REA Evidence。

官方动态网页入口在 APK 的 `assets/rn_rn-chat-agent@index/...tar.xz` 内 Hermes 字符串中出现：`https://sg.music.163.com/st/listen-home/playRank?type=report`。这里仅将包内字符串当作入口线索，没有宣称已反编译或执行 Hermes 业务。当前公开网页及其两个 main JS 通过 Firecrawl rawHtml 读取，无账号/Cookie；本机直连 TLS 失败的日志边界保留。网页与 JS 来源、摘要见 `today/public/public-source-provenance.json`；网页前后端及其他分块没有完整运行。

## 离线补传：已经确认的链路

### Legacy BI 文件队列

- `core.statistic.f0.logJSON` 在交给 Handler/Runnable 前捕获事件时间；前次 `legacy-envelope.smali.txt` 保留这个时间参数。
- `f0.H(action,json,time)` → `f0.w` → 配置中的 `e0.b.b`，然后 `f0.L` 向当前文件追加已格式化的日志。
- `pi.b.b` 从持久化 `logSeq` 分配递增序号，写入 JSON 的 `seq`，并拼成 `eventSeconds + U+0001 + action + U+0001 + json + newline`。该时间不是重传时重新生成的当前时间。
- `f0.F` 按当前用户准备追加文件，保留该所属用户的登录 Cookie 用于后续上传，账号切换不意味着把原日志改成新用户。
- `f0.I/K` 将残留文件轮转，扫描 `.comp` 文件并按所属用户分组。`K` 经过拦截条件后进入 `J`。`forceUpload` 通过进程内 Handler 或 `UPLOAD_LOGFILE` 广播触发；另有轮转广播和 Handler 延迟调度。网络检查在 `J` 内，并非所有接收网络状态的对象都触发一次重传。
- `f0.J` 在网络允许时读取保存的文件 bytes，调用 `e0.b.c(bytes,savedCookie)`；只有返回 true 才执行成功删除，异常/false 不走这条成功删除路径。
- 配置 `bd2.b` 的 type2000 选择 `pi.b` 和 `clientlog/upload`。`pi.b.c` 交给 `INetworkService.uploadStatisticLog`；原包 `NetworkServiceImpl` smali 显示读取 JSON 的 `code` 并比较200。传输另有原生 UploadEntity 封装，本轮没有把文件格式直接当作完整 HTTP 请求格式。
- 队列并非永久档案：legacy `f0.t` 在配置允许、总文件大小达到200MiB时，按最后修改时间清理旧文件（分支一次最多挑最旧10个等）；不能保证无限期保留未入库的历史。

主要 REA Evidence：

| 观察 | Evidence | 完整源码文件 |
|---|---|---|
| H 调用格式化并追加 | `ev_7c5ed8eae99ab48fe74bc6583850799ed5a0b97b2dbeb2d6db5449de7e97cfeb` | `transport/rea-f0-H.json` |
| 文件所属账号及保存凭据引用 | `ev_eb79cb2e7288a4de3835f63dadd9c4719e5af1678e98b4ab9c9e4952cb0c6347` | `rea/rea-f0-F.json` |
| 时间、action、JSON 及 seq 序列化 | `ev_c2a9beac6a9694624b941a3e486c7b1ffd16e57312b7371e4d052450b36df066` | `rea/rea-pi-b-b.json` |
| 成功删除与失败保留路径 | `ev_0a7bed015e8b6b013730416a1357d566b973f5800617a7bcc1d2811489e9c08e` | `rea/rea-f0-J.json` |
| type2000 路由 | `ev_746821a698bdd0b4e2517150f68623a8c8a2c391e9646a81430c95b8159d1aab` | `rea/rea-config-h.json` |
| Cookie/bytes 传给上传服务 | `ev_26ef2d1d627cbbce2f10a6ba4ab9efb8bd3f66e055a585e623a51713b1c5dc7e` | `rea/rea-pi-b-c.json` |
| 扫描、显式触发、容量清理 | `ev_07bbd2a1b2a21b6c25708867cc3f8899247cd602389a70c650b64f8969b25483`、`ev_24014bc2f738c18da563b8227e325ba70559fe17276d5833fbf4bb54e35bac75`、`ev_986eb02021b2da41cf4f707789bfcbaca747da59e4d1efc1ab2cf3aed76f1f8b` | `rea/rea-f0-K.json`、`rea/rea-f0-force.json`、`rea/rea-f0-t.json` |

### 现代 native BI 边界

`StatisticStubServiceImpl.newStatisticStub` 有 e0/s0/t 三个配置重载，分别构造 f0/m1/w，不能只看其中一个就声称整包都使用 legacy。

`m1.logJSON → v → 串行执行 x → 配置 formatter r → h0.log`；x 在串行处理时捕获格式化时间，具体与核心 `startlogtime` 是两种字段。`m1.G` 构造原生日志器所需 cache/flush/migrate 路径和配置。`r.F` 处理上传文件列表，经过无效文件/过期文件过滤、登录迁移条件、后台与最小上传间隔、回调上传、逐文件结果映射以及失败退避。`r.t` 按传入阈值和文件最后修改时间判断过期，没有据此推断服务端“允许补传多少天”。native 内部实际文件删除、完整服务器去重行为未在本轮展开。

Evidence：`m1.x` 为 `ev_25c8b58a813b0100bbfca4449898cc8da830aa0f3a3b19acb65ff15efe3816ea`；`m1.G` 为 `ev_cc65bb16b585a17c1556ca5800b5b765e30fa2007573993352eb2dacfaa76184`；`r.F` 为 `ev_e694f295de13aca0332ddcf9b56ed7f632c0d457ed79defc2d8d09b24b4207f4`；`r.t` 为 `ev_f7d6dc358c1be50556ce47fadf121d8f109e34631479de32f56bc4fd36f9a585`。原始完整输出在 `rea/`，含覆盖限制。

### 播放计时恢复并非整月补造

原播放器保存 `SongPlayedTime`（id/time/realTime），`jm0.z1` 的 current/last SharedPreferences 键在中断恢复中合并/读取。`B` 校验 song id 后消费 last 键，`E1` 处理 current/last 累计；核心 `qn0.z0.x3` 把 live 的真实与倍速媒体时间分别加上保存值并写 `realtime/time`，另读 `getMusicStartLogTime`。这只是所跟踪的播放计量恢复，不能据此声称存在任意历史月重放 API。原 x3 的 `play_scene="heartbeat"` 是场景字符串，不能当作已发现听歌时长心跳协议。

SongPlayedTime 成员 REA Evidence：`ev_aeebcf07b5d5fcb1ad294f1485240bbae97be56c458b18b9cbd5bd54babacbb2`（`storage/rea-songplayedtime-class.json`）。jm0.z1 在该 JADX 引擎的类搜索返回 inventory 验证错误；对应真实原字节 smali 已保留在 `storage/z1-*.smali.txt`，不把失败搜索解读为类不存在。

## 今日收听：取报表与累计总时长分开

当前官方网页 main29.js 的 webpack module6882 定义接口；main49.js 的 module87869 管理周/月/年的当前/历史周期数据，module82796 管理总时长状态与页面，module84513 消费图表/今日卡片。原始模块偏移和摘要在 `today/public/modules.json`，token 排版文件只是阅读辅助，原始脚本独立保留。

| 用途 | 请求 | 观察到的请求/响应使用 |
|---|---|---|
| 当前周/月含今日的未完结足迹 | POST `/api/content/activity/listen/data/realtime/report` | `{type:"week"}` / `{type:"month"}`；接收 `startTime/endTime`，当前周读取 `listenTimeDistributionBlock/weekTodayListenBlock`，标记不是 complete 报表 |
| 已完成周期报表 | POST `/api/content/activity/listen/data/report` | 历史周期请求；与当前实时数据入口分开 |
| 历史总时长 | GET `/api/content/activity/listen/data/total` | 读取 `data.totalDuration`，使用单独状态与账号缓存，未把今日读数相加伪装成历史总时长 |
| 今日歌曲明细 | GET `/api/content/activity/listen/data/today/song/play/rank` | `/todayList` 页取 `data.songDTOs`；该页有页面重新出现后重新取数的调用 |

当前周/月接口名称里的 report 代表取统计报表：可见调用只有周期 type，没有把本机秒数或歌曲事件上传给它。播放写入仍由原生逐次日志上报链路承担；足迹页面从服务端读聚合结果。代码有页面初始化、周期切换时触发 `fetchListenDataCurrent`，成功后替换对应当前数据；历史总时长独立发起 `fetchTotalDuration`。这与用户截图“今日/本周增加而顶部总时长暂时不变”一致，但不是服务器每天几点处理的运行观测。

网页来自当前公开服务，未带真实登录，未读取任何私有足迹响应；不能给出用户今日实际精确值。只分析两个主业务 bundle，其他公共分块、动态配置、页面保持打开期间的全部轮询/跨端合并、服务器任务/去重窗口仍未完整确认。官方规则截图中“今日延迟1～2分钟、总时长按天更新”是用户提供的官方规则证据，不能从上述静态代码反推出固定每60秒上传一次。

REA 完整静态分析 parent Evidence：`ev_7039699c9b5d758de0ca18820547a117e76a57e33c0f2aebbdb16cec42ae5edc`；summary `rea/rea-today-public-js.json`。语义图明确 partial，有未解析的动态属性/跨模块关系；不将未见到的路径声称不存在。完整本轮 REA ledger 已导出为 `rea/evidence-bundle.json`。

官方原始公开脚本：

- [接口定义 main-290eea8e](https://sg.music.163.com/st/listen-home/static/js/main-290eea8e.ae83ab53.js)
- [页面与状态 main-49eac513](https://sg.music.163.com/st/listen-home/static/js/main-49eac513.a1a5bbec.js)

## 对 Mesting 下一步的含义

当前 Mesting 把真实逐次记录持久化，确定未发送的 queued/open 可以恢复；已有 accepted/unknown 不盲重发。用户十月报告本机683分10秒、逐次292条649分30秒（280 accepted、12 unknown、0待发），已经明确不是“还有683分钟排队未发”。292条保存的旧载荷缺 realtime/startlogtime，不代表所有线上实际载荷都可完整还原，也不能据此证明服务端完全未计入。

原生 official clientlog/upload 与 Mesting 现有 clientlog eapi feedback/weblog 是不同的传输封装。不能仅复制 URL、seq 或官方设备参数就宣称完成兼容。seq 的存在只证明客户端顺序标识；服务器是否按它去重、是否允许旧月回填依旧未知。

证据支持的后续顺序是：先将官方“今日/当前周月”与“历史总时长”回读分别对齐，使用正常新播放核验；历史旧记录继续保留，对已接收旧格式记录先核实是否有纠错/补录机制，再决定是否做有边界的恢复。当前没有足够证据授权或保证通过全量重发追回十月。本轮没有实现新的产品方案，没有新 APK。

逐问题的 answered/partial/unresolved 清单、输入摘要和错误范围见 `investigation-ledger.json`。
