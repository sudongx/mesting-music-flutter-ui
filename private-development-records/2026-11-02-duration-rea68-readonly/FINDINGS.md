# 官版历史总时长：REA 6.8 本地只读对照

日期：2026-11-02，Asia/Shanghai。用户已确认正式 1.0.39 的官版最近播放和今日收听恢复，历史总时长仍不增长；本次授权仅为已有官版 APK、网页副本及源码的本地只读调查。

## 结论

**尚未确定历史总时长不计入的唯一根因，没有足够证据发布新的修复包。** 本次发现一条具体、可复核的原生候选差异：官版歌曲结束日志经过 `sr.p → StatisticImpl.logJSONRealTime`，设置 `mspm` 与 `lt=1`；旧候选只设置 `lt=1`。同时，旧候选也没有完整重现官版的启动/结束载荷与 BI 公共上下文。它的逐文件成功回执不能证明这些事件已经被解析、分类并纳入足迹。

优先级应从“继续重写加密容器/增加猜测的心跳”转向“验证事件分类与真实播放上下文”。这仍是调查方向，不是已验证的服务器必填字段清单。

## 输入、工具与保留边界

- 当前工程为 `beta/b6bcd5425e0df3e03febdd460b56d0ed42004c52`，暂存区为空，既有脏工作区保留。
- 原官版 APK 为已保存的 9.5.12/code9005012，201332834 字节，SHA256 `5082d1ca510ee061bb6b6270c6a2fe0b56a90b7574a023433f3637dede0c0695`。这不证明手机此刻仍安装该版本。
- REA 确认运行新版 6.8.0 源码入口，技能修订 59、234 个工具；JADX MCP 0.7.1，Java 17，3 GiB heap。
- 整包首次分析触及 120000 ms provider deadline；没有获得完整分析。收到错误后按运行时设置将下一次操作预算改为 240000 ms，确认无待清理工作，改用定向原始成员副本。调查结束恢复原预算。
- classes4/5/17/18/20 的定向副本均逐成员与原 APK 比较一致，含原 AndroidManifest.xml；仅用于局部静态分析，不是可安装包，也不代表整包调用图完备。见 `carrier-verification.json`。
- 保存的两个官版公开 JS 文件与原来源清单摘要一致，见 `web-source-verification.json`。它们是先前获取的动态网页副本，不是 APK 内置同版本代码；本次没有联网读取账号或足迹接口。
- 本次未访问手机/ADB、真实账号/后台，未发播放日志，未执行 APK 或其原生库，未修改/构建/安装产品，未提交推送或发布。仅保存私有调查材料。

## 1. 历史总时长的读取口径

保存的官版 API 模块 `6882`：`getTotalDuration()` 无播放秒数参数，读取 `/api/content/activity/listen/data/total`。页面模块 `82796` 的 `fetchTotalDuration` 将有效响应的 `data.totalDuration` 放入状态并更新当前账号缓存，标题使用 `r8` 按秒格式化；未在这条链路中把今日值加到历史值。

今日/当前周月的 API 为 `/api/content/activity/listen/data/realtime/report`，type 为 week/month，与总时长读接口不同。1.0.39 的仓库分别读取上述两个接口，没有把汇总写回服务端。周期分钟/总时长秒的显示问题已经属于前轮修正，不是本次找到的新根因。

页面存在先显示账号缓存、再用有效响应替换的逻辑。因此后续采样需重新进入/重载足迹并记录读取时间，不能仅把旧页面上停留的数字当成服务端最新值。静态代码不能给出后台累计任务的运行时间、过滤条件或特定事件是否入库。

## 2. 新确认的歌曲结束事件分类差异

普通歌曲路径：

```text
ms0.w0.I3
  → sr.p("play", "5dce13da9501aecff943b2ca", payload)
  → StatisticImpl.logJSONRealTime(action, mspm, payload)
  → payload.mspm = mspm; payload.lt = 1
  → private logJSONRealTime
  → 已配置的 BI stub（实时 stub 仅在启用且非空时另行接收）
```

证据：

- `ev_3bdca7810004d29e70c3a40d0cbb0ddec153b1e8e86e9e7382830b6e18925b36`：`ms0.w0.I3`。
- `ev_85d7bbf87b96bf35b0a0588217e838c7f7a43f21271647fa774f67af1df7e6af`：`sr.p`。
- `ev_e0dbff69617af8a45622b5c1bfd4dec1c4da0f30932242cde85ac137cd903d21`：三个参数的 `logJSONRealTime` 设置 `mspm` 与 `lt`。
- `ev_60b9a625484706c78d35db41d9818889177f8f444d7188c2aceec853a89e3ffa`：私有重载的真实分发逻辑。
- 原始 `sdk-core-w0.txt` DEX 指令地址 `44da10` 为上述标签，`44da14` 为 `sr.p` 调用；这避免仅依赖反编译显示别名/常量名。

旧 `netease_native_transport.dart` 只对 action=play 设置 `lt=1`，输入的 `netease_playback_log.dart` 未构造 `mspm`。这是确定的静态差异；**没有证明单独加此字段就能恢复今日或历史累计，也不应把 Android 标签直接混入已正常工作的桌面 weblog 当作修复。**

常规歌曲启动由 `sr.h → logJSON` 处理；userfm 启动另有命名的实时路径。不能机械地把所有开始/结束事件都改成相同标签或相同实时处理。证据 `ev_2bbdedcdf7358476cdcfe19d4e1727ff41b929d63f5a5c6d213a895a18458ece`、`ev_f87fa6e779dfb09eea017b6c2d16818e89c38a6fd1de7ed7502f17abdd9b639e`。

## 3. 与现有两套载荷的对照

| 层 | 官版可观察事实 | 当前/旧候选情况 | 可得结论 |
|---|---|---|---|
| 正常发布通道 | 本机 Android 官版走配置后的 BI 路径 | 1.0.39 恢复 Mac 桌面兼容 weblog：clientlog.music.163.com/eapi/feedback/weblog，os=osx；payload 有 mainsite/mainsiteWeb | 不同通道，用户已确认旧通道的最近/今日有效；不全局替换 |
| 开始事件 | R2 构造完整类型、ID、source/sourceId、时长/进度、资源/播放状态等 | 简化开始日志仅含 id/type、桌面标记、content、startlogtime；旧原生候选移除桌面标记后仍是简化载荷 | 原生容器成功不代表完整官版事件等价 |
| 结束事件分类 | 歌曲 play 有上述 mspm 与 lt | 旧原生候选仅补 lt | 具体可验证差异，服务器依赖程度未知 |
| 结束事件内容 | `resource_time`、`progressTime`、`play_speed`、真实 source/状态，以及随条件变化的字段 | 简化载荷没有完整这些上下文 | 若后续验证，优先使用实际可测字段；不伪造权益、音源或设备信息 |
| 结束原因 | 核心按结束场景构造 end/reason/errorcode/end_source | 共用简化 builder 把结束固定为 playend | 独立已知语义不符；不能由此推断就是总时长根因 |
| BI 公共字段 | formatter 添加 lca、netstatus、进程/前后台等上下文，部分字段依配置/服务可用性添加 | 旧候选主要补 pid、_log_thoroughfare | 不应把所有可选字段都宣布为必填或逐项捏造 |
| 文件账号信息 | `encrypt.k.d()` 收集匹配 Cookie，再主动写入 appver、buildver | 旧候选铺入已有 Cookie 后覆盖部分身份；没有按此函数主动生成/校验 buildver | 不能断言运行时 Cookie 一定缺它；只能确认构造过程不等价 |

公共字段的既有原始 REA 证据仍在上一轮 bundle，本轮补查文件账号构造的证据为 `ev_bc26596ddb3470b299a6be0af1a77292caf77bbbe0b258ad805e770c0f17710d`。核心 R2：`ev_575ccf15b861295cbb156f8e582438e355cfbaca265f898ca2dc9c8773c880d3`。R2 有重复块/类型推断警告；不能把它的所有可选分支当作每首歌必然执行。

进一步跟踪的追加步骤：`P2` 合并资源自身 RPC extra 配置；`G2` 添加播放设备/读取方式；`I2` 添加过渡开关状态；`V3` 仅在假完成淡出条件满足时调整 time。证据已保存在本轮 bundle。它们证明日志有额外来源，不证明任一字段是历史统计必填项。

## 4. 本机 PlayRecordEntity 的已排查分支

对原 APK 全部 22 个顶层 DEX 做候选发现，仅用于定位；对找到的四个 `vo.e.o8/u8` 调用者用 REA 正文确认。候选扫描是对齐字节发现，不冒充完整反射/JNI/动态调用图。

| 已确认读者 | 可观察用途 | 代表证据 |
|---|---|---|
| discovery 的 y.d | 读 extInfoJson/is_audition，整理试听/试用列表 | `ev_afcd58dc2384fb5954724df73b6397e9346e276459c1afb3dcf116c08c847351` |
| ResourceReq.addAuditionSongList | 读取最多一批近期试听 ID，受会员配置限制 | `ev_e3e34c392ef7ec6c5bc4cacbb1221b24e73930715bc8e0fad13cbf181a359a8e` |
| ws0.d$a | 根据 resource_type/start_timestamp/min_duration/max_count 查询，向页面 callback 返回 records | `ev_4a6accbe80756472a6c7fc66890083fe4e9687e385440a0cf2b4aefb86eb48ee`、`ev_30c6b626ae035fbba6ee372cd053d79d5d939894dec0879c6a761a6ce52edef5` |
| PlayHistoryHandler$b | 同类查询并通过 JS bridge 返回 records | `ev_0cc95814dfce786dc33e7329d31d793f37f91dcf216af50c96ba5cd2f27672a5`、`ev_4b35df7718a9e8f8a2028fc400bfb3898a570e7b9562a058d7c4846ffbc70fab` |

`vo.e.o7` 是事务包裹的数据库写入；o8/u8 是按当前账号的数据库查询。没有在这些被检查的正文中发现直接把总时长上传到足迹的接口。页面 callback 的接收方不因这里是桥接返回就被证明不会发后续请求；已保存足迹网页主分块中也未见该历史记录桥接名。未覆盖的动态页面、反射或其他数据库路径仍保持未知。

REA incoming references 在单个 DEX 载体内只覆盖该载体；o8 返回零个引用不能当成整包没有读者。本轮跨 DEX 候选扫描和逐个原始载体正文验证正是为补足这个边界。JADX 的显示包名与原始 DEX 名偶有别名差异，原始候选与正文分别保留。

另检查了 I3 的额外分支：bo0 的 SongEndReport 进入 `AudioEigenvalueAnalyse/NativeApplication/audioPlay` 监控；lo0 的分支收集自动混音分析字段。它们是额外遥测分支，尚无证据将其等同于足迹累计写入，也不能凭名称排除其服务端用途。

## 5. 推荐的下一阶段与验收条件

本地阶段完成。先保留用户已验证的 1.0.39，不直接启用旧原生候选，也不把两个写通道同时用于同一播放来“兜底”，避免重复上报。

下一阶段建议经新授权后做官版与 1.0.39 的最小真实对照采样，先检查现有可获取日志的可见性，不安装候选、不修改官版、不清除应用数据或账号。具体清单见 `SAMPLING-PLAN.md`。如现有日志看不到官版明文事件，必须明确这个缺口，另行确定可执行的观测方式，不能把静态构造当成已捕获真实请求。

只有真实样本把差异与统计结果关联后，再提交一个可审查、仅作用于新记录的修改方案。优先验证 mspm/lt 的事件分类，以及可从真实播放获得的资源长度、进度、来源和结束原因；不批量复制官版身份/权益值。尚无证据支持盲加心跳、再次整体更换传输，或声称服务器允许旧月重算。

验收至少分开记录：传输回执、官版最近播放、官版今日收听、次日历史总时长。只有最后一项增加才能称本问题验收通过。十月 683 分钟继续单独保留未追回状态，accepted/dispatched/unknown 旧记录不改写或重发。

## 材料与验证

- `rea-evidence-bundle.json`：本次 REA 完整导出；110 条包含父记录和投影记录，不能当成 110 项业务测试。unknowns=0 仅描述导出容器，不代表历史累计问题没有未知。
- `carrier-verification.json`、`web-source-verification.json`：输入摘要验证。
- `dex-discovery.json`、`class-locations.json`、`dao-reader-candidates.json`：独立静态发现辅助。
- `protected-before.json`、`preservation-result.json`：产品与冻结交付保持验证。

以上材料仅本地私有保存，不纳入公开源码 ZIP。
