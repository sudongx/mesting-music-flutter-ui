# 汽水第三平台：最小链路实测与当前实施阻碍

日期：2026-11-05。产品基线为 Mesting 1.0.61/code82。用户已确认新增汽水、仅手机号登录、发现/音乐/我的三页、沿用玻璃风格、优先官版音效及免费听功能。本轮先验证最小链路，尚未开始产品接线，也未形成新 APK。

## 当前结论

未解 BL、未 Root 本身不妨碍 Mesting 在自己的进程内显示页面、发 HTTP 请求或处理自己的音频。真正尚未成立的是汽水服务端接受独立客户端的登录和完整媒体请求，以及免费听奖励实际到账；不能把 Xposed 的本地权益和广告完成回调直接移植为已接通的独立服务。

已实际读到公开目录，也已找到官版基础 DSP 的本地配置及原生依赖。**尚不能交付“手机号可登录、完整歌曲可播放下载、免费听到账、官版音效生效”的第三平台。** 下面分别记录已证明与未证明的部分，避免用界面掩盖核心链路缺口。

## 匿名网络实测

本轮只发送匿名目录读取和公开媒体头读取，没有发送短信、提交登录、领取奖励或使用真实账号。业务为读取的 POST 不等于账户写入；所有请求逐项保存在下述 JSON。没有发送账户 Cookie、随机注册设备 ID 或安全签名。

| 读取 | 结果 | 解释与边界 |
| --- | --- | --- |
| `/luna/discover` | HTTP200，真实栏目 | 已取得推荐模式/电台等目录数据，不证明个人化页面和登录。 |
| `/luna/discover/mix` | HTTP200，真实歌单 | 已取得歌单资源和继续加载信息。 |
| `/luna/feed/mode` | HTTP200，status_code=0 | 已取得模式结构。 |
| `/luna/playlist/detail` | HTTP200，真实歌单和曲目 | 已取得原始 track ID、录音资料及目录时长。 |
| PC `/luna/pc/search/track` | HTTP200，0字节响应体 | 空响应不能当搜索成功。此次未提供设备/安全上下文；没有证明移动端官版搜索一定不可用。 |
| `/luna/media-player`，第三方现有19.1.0请求头 | HTTP200，业务码1000062 | 业务提示“应用版本有风险，请前往应用商店下载正式版本”。 |
| `/luna/media-player`，改为21.5.0显示版本请求头 | HTTP200，仍1000062 | 单改 User-Agent 不解决已测请求的拒绝；这仍不是对官版完整生产请求的复现。 |
| H5 `/luna/h5/seo_track` | HTTP200，有音频地址 | 已测4首均为30/60秒片段，不能算完整版或可下载完整版。 |

上述匿名请求最初参考公开实现，Luna主机为`beta-luna.douyin.com`，PC主机为`api.qishui.com`。后续已从官版初始化方法体确认：`beta-luna.douyin.com`正是21.5.0普通生产API/Passport的默认主机，名称中的beta不能当作测试环境证据。与此同时，当前官版媒体补取链已恢复为`POST /luna/media_v2`，移动搜索为`POST /luna/search/{search_type}`，并非此前测试的旧媒体/PC搜索请求。因此旧请求的拒绝只约束这些实际请求，不足以证明21.5当前媒体链路不可用。详见[当前移动契约](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/CURRENT-MOBILE-CONTRACT.md)。用户选择离线后没有新发网络请求。

命名歌曲的实际时长比较：

| 歌曲 | 目录完整版时长 | H5模型返回时长 | 音频验证 |
| --- | ---: | ---: | --- |
| 光と共に (1.00) — Tutomu Ikeda | 233.684秒 | 60.001秒 | 仅模型比较，未读媒体头。 |
| 我不难过 — 孙燕姿 | 320.400秒 | 30.001秒 | HTTP206，读前65536字节，MP4 ftyp。 |
| 偏爱 — 张芸京 | 212.950秒 | 30.001秒 | HTTP206，读前65536字节，MP4 ftyp。 |
| 恋人 — 李荣浩 | 275.913秒 | 60.001秒 | HTTP206，读前65536字节，MP4 ftyp。 |

没有下载整首、解码或实际播放，没有把“可读音频头”升级成完整播放或真实音质验收。下载权益也不能从公开媒体 URL 的存在推断。

结果文件：

- [匿名目录与首首曲目](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/anonymous-public-reads-2026-11-05.json)
- [三首命名歌曲与媒体头](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/anonymous-public-playback-2026-11-05.json)
- 可复核脚本为同目录 `probe_public_reads.py`、`probe_public_playback.py`，均限制读取，不含账号/SMS/奖励写入。

## 手机号登录

官方21.5.0包已确认两个业务端点：`POST /passport/mobile/send_code/` 与 `POST /passport/mobile/sms_login/`。已取得部分字段映射、XOR5后转十六进制的编码，以及 `is_from_iesaccountsaas=1`。这些方法体通过 SDK 公共请求代理发送；所选方法没有要求启动抖音 App 的调用。

后续离线已补齐：SDK应用标识8478、生产Passport主机注入、默认+86及去空格号码组合、发送场景24、旧/新SaaS编码分支、表单传输、固定公共query及Cookie/CSRF/令牌处理。最终公共参数也已从NetPlugin/AppLog/BDInstall追到ApiParamsUtil.c，明确应用/真实设备/安装记录/用户状态及条件，不能混抄编码分支、按PC身份386088发JSON或以随机安装ID替代注册结果。当前缺口缩至真实安装注册与TTNet动态安全上下文、实际安全验证闭环、真实成功凭据及后续Luna接受。独立安全回调已追至native k3.a，尚未恢复算法/运行值，也不据其存在断言每条短信请求必需某个具体头。

最新证据和局限：[phone-client-context.md](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/phone-client-context.md)，前置端点报告为[phone-contract-findings.md](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/phone-contract-findings.md)。两阶段分别55/22条REA记录已导出/reset，不是登录或服务器运行验收次数。

最终公共参数来源、安全因子与native精确边界：[phone-request-hook-boundary.md](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/phone-request-hook-boundary.md)。当前NetPlugin传Level.L1；通用拼装函数中仅L0附加的openudid不能被误列为当前必需项。

## 官版音效

基础链已定位为 Java PCM处理器 → JNI bridge → BYTE_AUDIO_TUNER_CAPI_LITE，另外依赖 C++ 运行库。找到14份完整本地效果图，涉及均衡、增益、限幅、混响及环绕等节点；不是所有效果都必须假定联网取得配置。

已分析桥按逐声道float32缓冲转换为内部交错float32处理；14份本地图已通过构造器实参对应官版key/name（360环绕、超重低音、清澈人声等）。它们是默认目录，不等于当前账号整页可用项；AudioEffectManager还检查权益，并可能取安全配置替换。Mesting现有Media3 AudioSink可作为接点，但还未完成格式转换/生命周期、Android原生加载和实际输出比对。原包仅ARM64；不因此删除Mesting原有32位支持或把普通均衡器冒称汽水官版效果。

完整依赖见[audio-feasibility-implementation.md](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/audio-feasibility-implementation.md)，后续已确认的名称、权益/安全配置及PCM参数见[effect-config-map.md](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/effect-config-map.md)。相关REA记录已导出/reset。

## 免费听时长

原 Xposed 模块分析已确认：它在官版进程内保存广告奖励监听器，构造宿主 RewardCompleteParams 并触发完成回调，也会改写部分本地显示/权益字段。这个动作依赖宿主继续执行后续流程，不是一个可直接搬入 Mesting 的独立真实领取接口。

后续已从21.5.0正常回调追到`POST /luna/advert/incentive/done`，并核对有效回执→权益刷新→成功/失败及重复关闭协调。真实任务上下文和post_done_extra不能猜造；本轮没有调用结算，也没有证明账号资格或真实到账。连续本机回调/数字/改JSON不能作为官方到账证据。最新调用链：[reward-settlement-contract.md](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/reward-settlement-contract.md)，原模块报告：[module REPORT.md](D:/AnLi/.codex-artifacts/2026-11-05-soda-module-analysis/REPORT.md)。

## Mesting 接入边界

源码核对发现当前多处将“非网易云”默认归为酷狗，涉及身份发布、加密恢复、云库 owner、搜索、推荐上报、音质及下载。直接新增汽水枚举和三页会发生错误平台分发风险。安全接线需要汽水独立私有客户端/会话/目录/媒体解析及显式能力映射。

三页也需统一实际根路由、玻璃底栏、返回和搜索的索引；不能仅隐藏现有四页底栏的一项。细节与当前行号：[integration-map.md](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/integration-map.md)。

现有网易云音源和下载规则继续保持：官方优先，失败由用户选择备用下载源，所选失败不自动换源。没有将汽水ID盲目送入依赖网易云ID的LX解析器。

## 当前完成项、未完及后续

- 已完成：官方21.5.0包取得与身份记录、三页材料与资源调研；手机号场景/编码/表单/会话处理、生产host、当前移动搜索/媒体与实际播放器补取路径；奖励结算/权益读回链；14份效果key/name/资格和PCM契约；源码接线图及此前匿名目录/命名歌曲实测。
- 未完成：可用的独立手机号会话、移动搜索与完整媒体、三页产品实现、真实奖励到账、官版音效实际输出及新APK交付。
- 仍未解的明确落点：真实安装注册上下文、独立安全因子native运行状态及会话绑定；公共参数Java层已完成字段/来源定位。实际服务器接受/到账/音频输出不能由静态文件代替。当前不需要重新定位全部接口或复制Xposed。敏感号码、验证码及凭据不能进入普通日志、Track或公开资料。
- 用户已明确选择“暂不连接手机，继续离线分析”。后续只用包内代码/资源和已有资料完善生产请求、会话与DSP契约；不连接手机、读取设备/账号或发送短信，不外推旧设备权限。静态不能建立的服务器接受、到账和实际输出继续明确未验，不重复索要本轮已经拒绝的设备授权。

产品1889个既有源码/测试/原生/资源文件逐项与61交付检查点摘要一致；Git脏状态列表、HEAD、空暂存摘要及61 APK摘要均保持。只新增本地调查资料，没有修改版本、签名、锁、构建或交付物，没有运行产品测试或重复累加旧验证结果。证据：[readonly-boundary-verification.json](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/readonly-boundary-verification.json)。
