# 汽水 21.5.0 手机号登录契约：静态核对结果

日期：2026-11-05。范围：只读分析 APK；未访问手机、ADB、模拟器、真实账号；没有发送验证码、提交登录、创建账号或调用奖励写入。

## 结论

当前证据足以确认官版手机号登录使用内嵌账号 SDK 的 Passport 短信接口，不足以完成一个已验证能独立登录的 Mesting 客户端。已取得调用方法体、参数映射和公共请求代理入口；还缺官版宿主 SDK 最终生成的请求上下文及成功响应的会话契约。不能把这些路径和字段直接包装成“已接通”的手机号登录。

本次没有发现这两个短信方法必须跳转抖音 App 的调用；这只是所选方法的静态边界。已有上游 UI 调研中的 NewLoginFragment → DefaultAccountManager → XAccountImpl 与本次 SDK 端点链兼容，但本次不重作该段、也不把未保存的前一工作者口头结果当作本报告的新证据。

## 样本与分析边界

- 官方 APK：`official-android-latest.apk`，SHA-256 `b639e67c13e03377f0f9d8068c5e0419b1acd42c7d529362f11ae704b3838741`，21.5.0/code100215040。
- 此次 JADX 使用 `phone-analysis-only-dex11.apk`，SHA-256 `1e4ae88748adbafff9188870c36af5e3c8671eae5c1f093067f14a810f32921e`，仅原始 manifest、resources.arsc、classes11.dex，3779 个顶层类。来源与逐成员摘要在 `phone-analysis-only-dex11.provenance.json`。它是分析载体，不可安装、不可交付。
- REA / JADX 0.7.1，JAR SHA-256 `6e5eacf500b64292bfb73c49797c1958f6ee44646e43e868039ae7feb573ff75`；摘要与方法内容均保存在 `phone-contract-rea-evidence.json`（55 条）及 reset 前的相同 `phone-contract-rea-checkpoint.json`。
- 部分反编译存在重复块、空 if 和不可直接编译的协程结构。确认下述可见调用、字面量、赋值及返回；不据空块推断可选字段不存在或可以省略。

## 已确认的调用链

1. `NetworkServiceImpl.sendSmsCode` 调到其 `sendSmsCodeCommonResponse`。后者建立参数映射后调用：

   `getAccountSdkNetworkApi().doCommonPostRequestPath("/passport/mobile/send_code/", extraMap, mappedParams, continuation)`。

   父证据：`ev_3f11dff2df7baf3e629b4ffd8501712f5edc5c63b9f31eddff78e245ea074e79`。

2. `NetworkServiceImpl.smsLogin` 调 `smsLoginCommonResponse`。后者同样委托公共 POST 请求方法，路径 `/passport/mobile/sms_login/`。成功转换分支从 `CommonRequestResponse` 拷贝结果及 userInfo 给 `QuickLoginQueryObj`，没有在这个包装方法中直接提取一个可供 Mesting 使用的 sessionid/token。

   父证据：`ev_ab3a51b4a42320d2027be6ce65745dcd6dae20cb2a59fc8ca9b7c9b983e77286`、`ev_0caa906db38ad148ebefef9fe7d5299357ef1d0454ad87e91e43f4f3894c23f0`。

3. `NetworkServiceImpl.wrapToMap` 复制参数对象的 `toMap()`，附加 `is_from_iesaccountsaas=1`。常量值由 `AccountSaaSConstants` 的静态字段确认。

   父证据：`ev_04088e9c4ffd40ca9999cd66cce72a3e6634a5279d9d151ef0fc6f5372f9ee3c`、`ev_c14aef34c2d67797f05bbdf0d8c2fbdace0ef1a57161adc5ec0c7e2a8ab202d3`。

4. `KMPCommonRequestApiServiceImpl.<init>` 从 `BDAccountDelegate.getCommonRequestProxy()` 取得 `ICommonRequestApi`。`doCommonPostRequestPath` 只是向该代理转交路径及两张 Map，再把 SDK 回调转换回协程结果。该层没有给出最终主机、公共 query、签名、安全头、Cookie 或响应头处理。

   父证据：`ev_f28362efa54f094cf6210fed9efe6f7ab954239c5ca95651c1b70fad077fd74b`（smali）、`ev_299ede5084d136ec1082eff55f887f9f9727e2b2e45693842a1b3a3f3e44bc4d`。

5. 发送短信回执经过 `wrapErrorHandler` 和 `SendSmsCodeApiCallErrorHandlerProxy`；返回成功还会触发本地短信长连接记录。不能用 HTTP 200 或一次 Map 构造完成来替代其业务结果。

   父证据：`ev_3f11dff2df7baf3e629b4ffd8501712f5edc5c63b9f31eddff78e245ea074e79`、`ev_9b66f75b70fa5e3afc02e174d7c4d322264f5ff81d85c401671a9d711c6497cc`。

## 参数映射的可确认部分

`SendSmsCodeParams.toMap()` 可见的固定写入：

- `mobile`：当前 mobile 字段原样写入。所选完整构造器只赋值，没有编码；因此仍需追踪实际 UI 调用者是否已编码，不能在新客户端凭经验重复编码。
- `type`、`unbind_exist`：`StringExtUtils.encryptWithXor(String.valueOf(...))`。
- `mix_mode=1`，`auto_read` 为整数十进制字符串。
- `check_register` 仅字段等于 0/1 时写入；其他值未写入该项。
- `is6Digits=1` 仅 Boolean.TRUE 时写入。

`SmsLoginParams.toMap()`：

- 当 `needMix==true` 时对 mobile、存在的 code、存在的 sms_code_key 调 `encryptWithXor`；否则 mobile 和存在的 code/sms_code_key 直接写入。
- `mix_mode=1`；`user_api_need_combine`、`is_vcd_multi_account` 来自布尔字段；`allow_local_assist_login` 在非空时写为 1/0。

编码方法可见为 UTF-8 字节逐一 XOR 5，再调用十六进制转换；空字符串直接返回，异常回退原字符串。这是官版字段混淆，不是完成请求签名或通过风控的证明。

父证据：`ev_49d08c9e8853ae263ef18a07a3afa4c0e5cc7eac8c1ec8cdcf7e5968f9c0415f`、`ev_464dfaf28ea52b93558f2e62c3044f951a2a9cd31268b991c3451deffe6feaa4`、`ev_3081ccac3fdef5afa0feee6c8015fe641cf4351a9dbb29fc2b48fe4e6b219e32`、`ev_dd54c71c41d1f06beec6f3b69a06597a9d3f5397dc9e45d4a082e1400622d906`。

两种参数类还包含 captcha、ticket/verifyTicket/mobileTicket、clientPackage/clientSignature/tokenVerifier、shareLoginToken 等字段。构造器可接受 null，且 Kotlin 默认构造器会把多项设为 null；所以**字段存在不能证明普通短信登录必须跨 App、必须提供某个令牌或可以伪造它们**。JADX 的多处可选写入空 if 使完整键映射尚未可靠恢复。所选 SDK 通用模型同时服务多类场景，不能把其他场景字段强加到汽水普通登录。

构造器父证据：`ev_803b365953ee2ca4d508595a446cb93c50a4430d03452d80bf618c4a7018ccc5`、`ev_449dca01237fcf06592f8e3d8d08b396e58a9c4a2e071b216174c20abc9e2f46`、`ev_42844cf629dcab40c8d87692c84e6260210b9a9fbdf53025621d897f8be3b1a1`。

## 是否已具备最小独立合法请求

**尚未具备已验证的完整契约。** 已确定业务路径、POST 代理、部分编码和字段；下列关键信息本次没有得到可执行/已接受的证据：

1. 当前 21.5.0 宿主为 Passport 选择的最终域名、公共 query、应用/设备上下文、请求 Cookie 和安全头的实际组成。
2. 普通手机号输入在进 SendSmsCodeParams 前的编码与区号规则、该场景 type 的真实取值、动态安全验证如何进入并回传。
3. 成功回执的业务状态、登录 Cookie/令牌落库和后续 `/luna/*` 请求身份绑定；`userInfo` 包装不等于凭据已取得。
4. 非官方包名/签名的独立客户端是否被服务器接受。静态 SDK 有 clientPackage/clientSignature 字段但它们在通用模型中可空，不能据此单独断言所有普通登录都会校验 Mesting 签名；反过来也不能保证不校验。

这些未知不能仅靠替换 User-Agent 或随机设备参数补齐。最直接的下一类证据是经用户另行授权的官版最小请求/响应观察（屏蔽手机号、验证码和凭据，保留字段结构、请求阶段、业务码），或平台正式提供给 Mesting 的登录接入契约。当前授权没有包含真实短信或手机操作，本报告没有执行。

没有把“不需要 Root”误写成“当前所有服务都可用”：普通应用能够承载 HTTP、UI 和 PCM 处理是一类能力；登录、目录、播放和奖励是否被上游接受是另一类独立验收。

## 完成与未完

- 已完成：单 DEX 包身份、两个短信业务端点、可确认字段编码、SDK 公共代理、可选字段默认性、静态局限与原始证据归档。
- 未完成：独立短信发送/登录、凭据恢复、真实账号授权、服务器实际接受、移动端搜索和完整播放。未将它们算作已实现。
- 产品：本任务未修改 Mesting 源码、版本、锁、签名、APK、冻结 ZIP；调查文件仅在本目录新增。
