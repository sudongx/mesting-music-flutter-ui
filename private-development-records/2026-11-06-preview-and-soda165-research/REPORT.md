# 64安装后反馈与三平台发码对照（只读研究）

2026-11-06，Asia/Shanghai。当前产品1.0.64/code85，安装已由用户另行明确授权完成。
本报告不修改已冻结64文件、不回填源码ZIP；未开始本轮实现、测试、构建或设备诊断。

## 最新用户反馈（覆盖更早待测试状态）

- 用户确认64的酷狗、网易云现在可正常播放。这是用户实际播放反馈，不等于所有录音、
  完整播放时长、GPU／音效或所有跨平台恢复均已验收。
- 网易云部分官方试听歌曲未自动换源，手动换源后可完整播放。
- 用户提供复现歌曲：《可我只是海》— LBI 利比。
- 用户确认：官方试听时，播放自动尝试已启用的备用源；下载继续原手动选源规则。
- 用户截图：汽水扫码提示“汽水未生成可用的登录二维码（0）”；手机号发送仍2156，
  脱敏业务描述为“系统繁忙，请重启应用或刷新页面后重试”。截图中的手机号不记录到报告。
- 此次用户要求先对照网易云／酷狗的验证码实现，再结合汽水调整。应给方案、等确认后实施。

## 已读到的实际源码

| 平台 | 请求入口 | 前置及协议 | 成功判断 |
| --- | --- | --- | --- |
| 网易云 | NeteaseLoginService.sendCode → NeteaseApi /captcha/sent → /api/sms/captcha/sent | 私有登录Cookie jar；ctcode/cellphone/secrete；weapi加密；music.163.com固定主机；POST表单 | code=200后页面才倒计时 |
| 酷狗 | PlatformLoginService.sendCode → ensureRegisteredDevice → /captcha/sent → Rust captcha_options | 先/register/dev取得dfid；保留KUGOU_API_MID/dfid签名上下文，排除已登录token/userid；/v7/send_mobile_code JSON与android签名 | status=1；失败码明确拒绝；短信不自动重试 |
| 汽水 | QishuiLogin.sendCode → QishuiApi /passport/mobile/send_code/ | mobile/type混合编码；POST表单；Android公开系统上下文、Cookie/CSRF；尚无完整BDInstall真实注册及移动动态安全上下文 | message=success且业务0；2156仍拒绝 |

共同点是输入校验、单次触发、独立登录态、业务成功和失败保护；平台签名、注册、表单与
加密协议不同，不能复制其他平台头部或加密算法便称汽水接通。

汽水既有静态证据区分旧Passport SDK参数对象与注入SaaS参数对象：发送mobile映射不同，
实际使用分支尚未闭环。62明文、63混合编码均被用户实测2156，不能再声称单一编码就是根因。
后续需对完整注册／公共参数／发送／安全验证闭环查证；无真实证据不猜造iid或动态安全头。

## 扫码已找到的明确本地缺陷

lib/features/music_platform/qishui/qishui_qr_login.dart: trustedScanUrl只接受douyin.com子域和
api.qishui.com；此前保存的libresoda/docs/QR-LOGIN.md明确记录合法二维码为：
https://bff-pc.qishui.com/ucenter_web/app/sdk-next?...&token=[REDACTED]&uc_sdk=scan-auth。

因此64确实会拒绝这种合法返回，并在业务码0时显示“未生成可用二维码（0）”。
截图未给出原始返回，不能据此证明当次唯一触发条件。应修固定官方主机／路径／参数校验，
保持原始扫码URL，增加真实形状的夹具及域名伪装／凭据缺失回归，分开本地校验和服务端错误。
旧测试使用sso.douyin.com合成地址，遗漏这个实际官方BFF形式。

## 网易云自动补源的现状与检查重点

resolveNeteaseTrack已经有official.isPreview后fallback.resolve逻辑；不是完全没写自动补源。
NeteaseMusicRepository.resolve目前仅以freeTrialInfo是Map或time<=90秒且短于曲库时长判断试听，
对“不标试听但实际文件很短”的官方URL没有完整性复核，便可能直接返回官方结果。
备用源的inspectNeteaseAudio已有有界音频头／时长／完整性检查，可以独立复用。

自动与手动候选使用同一备用源解析器，但自动顺序受组截止、源策略与最低音质约束；手动
onlySource直接访问目标源。是否本次属于试听识别遗漏或自动调度问题仍需以复现证据确认。
拟补官方试听识别与实际短音频识别，统一首次播放、下一首／自动续播／刷新源的自动救援路径，
排查启用源在总预算中的机会，保留原网易云歌曲身份与账号归属。下载策略不改。

## 待确认方案

1. 用《可我只是海》场景及完整／短音频、缺失试听标记、旧曲库时长的夹具定位并修复播放
   自动补源；尊重启用源、同录音核验、账号取消和下载手动选择边界。
2. 修复汽水QR官方BFF地址误拒绝与错误阶段分类，核对创建／轮询公共参数和SDK上下文，
   不能只让二维码显示出来便宣称登录成功。
3. 参考酷狗先注册再发码的依赖组织，保持汽水独立协议，继续补全实际发送分支与注册／安全
   上下文证据；短信由本人触发，不自动尝试多种参数发送，不读取OTP或原始凭据。
4. 方案确认后本地递增1.0.65/code86，适当回归、原签名APK和完整源码另存；64保护物不改。
   实机安装、诊断与业务验收按用户新的明确范围处理，不外推此前一次安装授权。

当前无产品修改、无新测试／构建／手机诊断／自动发码／发布。原64冻结物、锁、签名与Git
分支／HEAD／空暂存保持。本文不含用户手机号、验证码、Cookie或二维码token。
