# 网易云 9.6.15 免费听领取：只读研究与待确认方案

日期：2026-11-08（Asia/Shanghai）。主项目仍为 1.0.79/code100；本轮未改产品、产品测试、版本、旧交付或旧收据，未构建、安装或调用真实业务接口。本目录是私有研究输出，不加入交付源码。

## 1. 用户目标及现场事实

- 用户要求集中研究 Mesting 的网易云免费听时长领取；对照目标是手机安卓版官版网易云，用户确认版本为 9.6.15。
- 用户首轮截图提示“本次已确认0次；网易云未提供可识别的免费听领取入口，尚未提交奖励领取”。这对应当前仓库的入口解析失败分支，不是资格或 gain 请求的服务端拒绝回执。
- 用户提供 80.81 秒录屏，显示官版“领福利→领时长→广告→点击进入京东并停留→返回发奖”。约 51 秒可见首份约30分钟权益后的提示，约79秒可见今日权益及下一阶段提示。录屏只提供界面行为，没有网络正文或实际 actionUrl。
- 用户后续 Mesting 截图显示剩余4时08分04秒、“今日免费听·已确认2次”；用户明确确认官版领取后 Mesting 能同步。原“本次已确认0次”的错误文本仍显示在卡片底部，不能将它解释成官方总进度仍为0。
- 历史59/60文档记录过直接申请、可停止连续领取的方向；本轮不擅自将其替换成接入广告 SDK、自动点击广告或跳转官版的方案。

## 2. 新发现：官版路由处理与当前解析器存在确定差异

匹配的原始官版APK SHA256：`e6427bcb35ccd9e8858ee55c46ec3db56b2f09871adcd8e897244d96cfcf7894`。本轮重新只读核对散列；同版本号不等于已经核对用户安装包的字节或动态配置。

既有原始 DEX 摘录 `release160/research-qualification/scheme-motivationAd-show.java`，Evidence `ev_c5893cb5aefffaa2c92d4d84abc855bc8100627ef45c4ab2ca9da67609555605`：`l30.h.p4` 判断 `lg.M(url) == "motivationAd/show"`，再读取领取入口参数。

本轮补追此前没有展开的路由规范化叶子：

1. `lg.M(Uri)` 直接调用 `wp.a(uri)`。新的完整父 Evidence：`ev_44bc3ccbad99aadacede3e3be094cf819d69f78b2f0d74b171930aa580ecd511`。
2. `wp.a(Uri)`：host 不是 `nm`/`ne` 时返回 host；host 是 `nm`/`ne` 且至少有两个 path segment 时，返回前两个 segment 拼接的 `segment0/segment1`。新的完整父 Evidence：`ev_192f5e487fd9b08aa09bcc445d10ba24dcd7414512a1f742d54ef2c45ceec5f6`。
3. 两者来自原始 classes6.dex 的既有仅分析载体，原始 DEX SHA256 `4635200a7e73dd005aa5c07e10b113944fd153852246515c93630364f6d4bf84`，载体 SHA256 `f5c84c47abbebd777f7e05ee0b56f2c95f2b4f8a0cb6e84698925abad124c226`。原 provenance 文件保留，JADX 显示 `meta.lg/wp` 是 raw `utils.lg/wp` 的显示别名，不是另一个原始实现。

由此可得下面的受限静态比较。query 全部是虚构、类型合法的夹具；不声称任何虚构 source/adPosition 可获取真实奖励：

| 链接结构 | 官版工具输出 | 是否匹配官版 p4 路由条件 | 当前 Mesting 解析器 |
| --- | --- | --- | --- |
| `orpheus://nm/motivationAd/show?...` | `motivationAd/show` | 是 | 拒绝 |
| `orpheus://ne/motivationAd/show?...` | `motivationAd/show` | 是 | 拒绝 |
| 当前测试结构 `orpheus://motivationAd/show?...` | host 本身，而非完整路由 | 否 | 接受 |
| `orpheus://nm/motivationAd/unrelated?...` | `motivationAd/unrelated` | 否 | 拒绝 |

`route-probe.dart` 导入未修改的产品 `netease_free_listen_entry.dart`，以四个纯合成夹具执行当前解析器，另将上述官版 ASCII URI 叶子逻辑投影为 Dart 做静态对照。结果原样保存 `route-probe.json`。它不是执行官版APK、联网申请或真实到账验证，不计入旧Beta/Stable测试成绩。

**已证明的缺陷：当前解析器拒绝官版路由工具和 p4 条件支持的 nm/ne 链接格式；既有160测试主要构造了另一种 host/path 结构，因此没覆盖这处差异。**

**现场因果边界：尚未采集用户本次 progress.data.actionUrl，不能断言其恰好是 nm/ne 格式，或断言这是一切领取失败的唯一根因。** 即使修好入口，后续资格、广告条件及 gain 仍是独立关口。

## 3. PC接口问题的准确范围

当前 RewardsRepository → RewardRequests → NeteaseApi.request 的免费听路径没有独立客户端身份选项，使用通用 eapi 传输。

- `netease_api.dart` 默认 cookie 身份为 `os=pc`、`appver=3.1.3.203419`、Windows osver，但保存的会话 cookie 随后可以覆盖默认项；没有采集用户此时的有效 cookie，不能把默认值冒充其现场实际值。
- 通用 eapi 的 User-Agent 又是 `NeteaseMusic/9.0.65...; Dalvik/2.1.0`。所以“默认PC身份与安卓UA混用”是可见源码事实，不能把 eapi 这个名字直接等同于 PC 专有接口。
- 官版9.6.15本身也有 eapi 和可选 xeapi 分支。旧资格链已追到 FormBody 字符串再 eapi 加密；本轮追加查看 `g42.a.a/c`，分别处理 e_r 与 request tag，没有发现它们会将 Mesting 的PC默认身份变成官版移动身份。
- 当前余额/任务读取已被用户验证可同步；当前首个可复现代码问题是入口路由解析。没有证据支持先把整个网易云模块全局切成安卓身份，或保证改 `os` 就能领奖。

## 4. 入口修正不能替代广告奖励条件

复用、核对了旧160完整 gain Evidence（未重跑旧调查）：

- `o30.i1.F2`，`ev_93dbb3206b776769084cc2049bbe27ec87b6d8640c699e8b9cbe0e5c62ef2223`：真实 Ad 提供 req_id/creativeType/generalRightsInfo/contextInfo，曝光和点击时间来自实际生命周期；权益扩展随同次广告对象传入。
- `o30.i1.f3`，`ev_d2d5f73b783144ee779e6da74204b55022542aed88b95687c19cc3845167bf4e`：构造 gain 参数并合并入口 ext。
- `f30.a.h`，`ev_79ef40b9b6fcf3a508cfe77ecd6916198eab83fcd821f96711f159d17734b3f4`：激励点击路径同样从真实 Banner/AdIncentiveClickInfo 取相关上下文。

这些静态事实与本次点击/停留录屏相容，但不能据此指定用户该次广告对应哪一套内部方法或证明服务端必需字段。没有发现可证明“任意账号无需完成真实广告即可无限/连续领取”的普通通用路径。旧 direct gain req/form 还有服务端 hint、活动可领状态或 reqUid 等前置条件，不能借其他活动 source 或编造数据替代。

## 5. 建议实施范围（尚未执行，需用户确认）

1. **先修确定的路由兼容。** 入口处理独立保留在 FreeListenEntry 层，支持已证实的 nm/ne + motivationAd/show 结构；原结构如继续保留，应作为显式兼容分支，不能再当官版路由的唯一格式。继续验证字段类型、重复键、有界长度及账号/日期归属，不任意打开或请求返回的地址。
2. **把停止原因拆开并可导出。** 区分入口缺失/非字符串、路由不支持、缺字段或错类型、重复键、扩展异常、资格分支未提供、资格拒绝、gain拒绝或结果未知。仅输出固定分类、字段存在性/类型、状态码和请求身份分类；不输出原始 actionUrl、query值、账号、Cookie或广告凭据。诊断与领取业务解耦。
3. **优先保持通用客户端身份不变。** 本轮首个候选不要同时全局改PC/Android身份；若路由修正后的新诊断仍指向身份差异，再给免费听限定请求上下文，而非临时改共享会话或播放器。
4. **针对缺口验证。** 用虚构上下文补 nm/ne 的生产解析和真实传输夹具，覆盖资格false、失败停止、跨账号/跨日、未知不重发和余额读取保持。旧错结构夹具必须纠正，原日志/旧包不回填。改动确认实施后才运行相关产品回归，另行冻结新版本交付。
5. **验收分级。** 入口识别、qualification接受、gain显式回执、余额/进度官方读回分别记录。保留正常可停止连续流程，但不将静态兼容或主机测试当作真实直领到账。真实账号结果仍需用户后续反馈或新的明确授权。

本轮没有修改产品，也没有修复完成或新APK交付的声明。保护79冻结APK/ZIP、全部历史冻结物、原签名、锁、分支/HEAD/空暂存和脏树。未更改酷狗、汽水、玻璃壳、底栏、NAS助手或旧账本。

## 6. 证据与问题清单

| 问题 | 状态 | 证据/缺口 |
| --- | --- | --- |
| 官版页面与版本是什么 | 已回答 | 用户录屏和9.6.15版本回复 |
| 已领时长能否同步 | 已回答（用户验收） | Mesting后续截图与用户明确反馈 |
| 当前提示发生在哪一步 | 已回答 | repository 的 parse(entry)==null 分支；尚未资格/gain |
| 当前是否完全使用官版安卓身份 | 已回答（源码范围） | 通用默认PC cookie/安卓UA；实际会话覆盖未知 |
| 是否存在明确入口兼容问题 | 已回答 | 新 lg.M→wp.a Evidence + 4个受控夹具 |
| 用户该次 actionUrl 的确切结构 | 未解决 | 当前诊断没有保留该结构，需要改进诊断后的新反馈 |
| 路由修正后能否直领及实际到账 | 未解决 | 没有新真实 qualification/gain/独立余额读回证据 |

新REA Evidence 已完整保存 `rea-new-evidence.json`（14条，205334字节）并 reset 清理；14条包括方法和投影视图，不是14次业务验证。旧159/160调查和收据只读保留。输入散列/访问边界见 `inputs-and-scope.json`；原始用户视频没有复制进产品或源码归档。
