# Mesting汽水第三平台：离线调查入口

2026-11-05。用户已确认第三平台目标，并明确本阶段**暂不连接手机，继续离线分析**。当前产品保持1.0.61/code82；汽水三页、独立登录、完整播放下载、免费听到账及官版DSP尚未交付，不将本目录的代码/配置/接口研究冒充已可用平台。

后续用户明确要求检索GitHub API，新增结果见[GitHub源码检索报告](D:/AnLi/.codex-artifacts/2026-11-05-soda-github-api-research/REPORT.md)：已找到myMusic、music-lib/libresoda、TuneWeave等更完整参考，以及活动免费VIP领取实现。此项新增只读取公开网页/源码，没有访问手机、真实账号、签名服务或领取接口；与本阶段离线结论的服务器/设备未验边界保持区分。

## 已回答的问题

| 问题 | 已取得的具体结果 | 仍未证明 |
| --- | --- | --- |
| 未解BL能否承载这些功能 | 已分析音效是应用内Java/JNI/DSP路径；手机号是进程内SDK/HTTP路径，没有在所选链发现必须Xposed注入的调用。 | Mesting独立身份被平台服务接受及Android实际音频输出。 |
| 手机号怎样登录 | 生产Passport默认主机、应用标识8478、区号/号码清理、场景24、两个POST端点、旧/新编码分支、表单格式、公共参数及响应头会话处理均已定位。 | 当前账号配置选择、动态安全验证、真实成功会话/恢复及Mesting包身份接受。 |
| 搜索与媒体怎样接 | 当前移动搜索使用POST `/luna/search/{search_type}`；实际播放器补取资料通过MediaRepo调用POST `/luna/media_v2`，已恢复请求/返回模型。 | 新契约的真实服务器回执、完整可读媒体、下载权益及实际播放。 |
| 模块免费听怎样实现 | 原模块触发宿主奖励监听器；官版继续做结算请求、isValid检查、权益刷新及结果协调。 | 免广告独立领取、真实任务凭据和官方到账。 |
| 音效能否独立接 | 14份本地默认图的key/name、资格与安全配置替换、原生闭包和planar float32桥均已定位；Mesting现有AudioSink有接点。 | 原库在Mesting实际加载、配置资格、格式协商、设备输出及32位官版DSP。 |
| 三页如何保持现有平台安全 | 已定位账号/云库/搜索/播放/下载/推荐上报中所有主要二平台默认分支风险，并整理三页路由和玻璃壳接线图。 | 产品代码尚未接线，不能展示空壳后称完成。 |

## 主要文档

- [当前完成项、实测和未完边界](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/MINIMAL-CHAIN-STATUS.md)
- [手机号输入、编码、表单与会话处理](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/phone-client-context.md)
- [公共参数真实来源与独立安全因子的native边界](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/phone-request-hook-boundary.md)
- [当前移动搜索与实际媒体调用链](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/CURRENT-MOBILE-CONTRACT.md)
- [奖励结算、业务回执与权益读回](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/reward-settlement-contract.md)
- [14份音效映射、资格与PCM参数](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/effect-config-map.md)
- [音效原生依赖、ABI与Mesting处理接点](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/audio-feasibility-implementation.md)
- [Mesting源码接线图与账号隔离](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/integration-map.md)
- [官版三页结构证据和截图版本限制](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/official-pages-research.md)

## 验证边界

用户选择离线之前的匿名读取已证明公开目录存在，命名H5歌曲只返回30/60秒试听；旧媒体请求返回1000062。后续静态已发现官版当前移动媒体契约不同，因此**旧请求失败不能外推为当前正式契约一定不可用**。选择离线后没有继续联网测试新接口。

所有实现结论分别标明原始DEX声明、指令索引、REA/JADX或ELF反汇编出处；静态证据不等于服务器/设备运行验收。`investigation-integrity.json`检查分析子集与原包成员字节一致、已引用REA记录及本地报告链接；这不是产品功能测试。

最后一轮已把公共参数hook追到`NetPlugin → AppLog → BDInstall → ApiParamsUtil.c`，可按应用/真实设备/安装注册/用户状态分离建模。与之独立的安全因子回调经Cronet或OkHttp进入`ms.bd.c.k3.a(...)`原生方法；尚未恢复其运行上下文或证明每条短信请求的必需条件。当前缺口已缩至真实安装注册身份、动态安全上下文和服务端接受，不再把完整Java公共参数都当作未知黑盒。

`readonly-boundary-verification.json`逐项核对1889个既有产品/测试/原生/资源文件，均与61交付检查点一致；Git脏状态列表、HEAD、暂存摘要和61APK摘要保持。没有修改版本/签名/锁/冻结物，没有构建新APK、运行或累加旧测试、提交推送、上传或发布。

既有下载偏好继续保留：官方优先，失败后由用户选择其他可下载来源，所选失败不自动换源。汽水ID不能直接送进依赖网易云ID的LX源。

下一阶段应基于本目录的当前契约逐层补齐汽水私有客户端/会话及媒体验证；界面与全局分发需一起隔离，不能把未验证的领取或音效标为可用。无论后续静态恢复多少字段，实际服务器接受、奖励到账和音频输出均应单独验收，不因未解BL就提前判定不可实现，也不因找到代码就承诺已实现。
