# 汽水21.5.0手机号客户端：参数、传输与会话边界

日期：2026-11-05。用户已选择“暂不连接手机，继续离线分析”。本阶段只读此前取得的官版APK及已保存证据，没有联网、发送短信、提交登录、访问设备/账号或执行APK/原生库；没有修改Mesting产品。

## 当前可以确认到哪里

手机号登录并非必须通过抖音App跳转。已分析的官版内嵌SDK路径能在本进程收集手机号和验证码，走Passport接口。**普通应用可以实现这种页面和请求流程，但尚未证明Mesting独立客户端会被服务端接受。** 本轮补齐了主机注入、区号、普通发送场景值、编码分支、表单传输和响应头会话处理的具体位置，不再把这些全部列为未知。

同时存在旧账号API与注入的Account SaaS两条发送/登录分支，受`CommonConfigManager.isEnableInjectNetworkService`等配置控制。下面分别记录，不能把旧分支的一段编码与新分支的toMap拼成不存在的第三种请求。Hotfix和服务端配置覆盖未做运行观察。

## 已锁定的应用身份与主机

- `AccountConfig.appId()`明确返回**8478**。REA父证据`ev_0bc1e71c95ac3ecbdbab4aeb7798482f7a03028973f5055479a20792d53c9dac`。不能沿用公开实现PC登录/搜索使用的386088。
- `AccountSdkPreInitTask.c()`取`AccountSdkPreInitTaskKt.b()`生成AccountConfig，交给`TTAccountInit.setConfig`。原始指令在`phone-preinit-instructions.json`、`phone-config-factory-instructions.json`。
- `AccountConfig.host()`返回`HostUtil.INSTANCE.getPassPortHost()`。REA父证据`ev_887d1761fe9da2de22192ccbe68b81a4e3bfa357c2a6dcc5befcacf999555396`。
- 当前包的GlobalConfigInitTask为生产Passport与普通API注入`beta-luna.douyin.com`；这是已连接的初始化链，名称里的beta不能单独当测试环境。与前一份[official-host-context.md](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/official-host-context.md)合并后，SDK主机注入的静态缺口已闭合。运行HostConfig/Hotfix仍可改变它。

## 手机输入到发送验证码

原始DEX链：

`MobileSmsLoginFragment$3$1.a → MobileSmsLoginFragment.wb/xb → MobileSmsLoginPresenter.l → SendCodeParam.Builder → IAccountNetworkService.sendSmsCode / 旧IBDAccountCommonApi`

具体观察：

1. Fragment取得area_code和`StrongHintEditText.getFinalText().replace(" ", "")`，按区号、去空格手机号的顺序传给Presenter。默认区号为**+86**，可由UiConfig/已缓存area_code替换，不应把所有号码固定成中国手机号。
2. `MobileSmsLoginPresenter.l(String,String,boolean)`把两段字符串连接，经过UI校验后，用**type=24**构造`SendCodeParam.Builder`。注入分支和旧CommonApi分支都可见这个场景值。
3. Builder构造器保存mobile/type并把checkRegister设为-1；SendCodeParam构造器复制字段。它们不是编码函数。
4. 注入实现`IESSaasInitUtils$getIXAccountNetworkService$1$sendSmsCode$1.invokeSuspend`将参数直接交`LoginParamExtUtils.g()`，随后调用`sendSmsCodeCommonResponse`；没有在这段协程中另做mobile转换。REA父证据`ev_e7e1bf218ca6afd4700806cc4b4e087ca980ae2c1df171845002637d599f173b`。
5. `LoginParamExtUtils.g()`直接读取`SendCodeParam.mobile/type/...`并构造SendSmsCodeParams。REA父证据`ev_e7a0e78148dad13195c580fc6604c9c8f552d0eb4c36346f02920c2b043c3b06`。

重要编码区别：

- **已分析的SaaS分支**：`SendSmsCodeParams.toMap()`把mobile字段原样写入；type与unbind_exist做UTF-8逐字节XOR5后转十六进制；mix_mode=1；auto_read使用十进制字符串；check_register仅为0/1时写入。先前已存REA父证据`ev_49d08c9e8853ae263ef18a07a3afa4c0e5cc7eac8c1ec8cdcf7e5968f9c0415f`。
- **旧SDK参数对象分支**：`SendCodeParam.toMap()`可见对mobile等调用`com.bytedance.common.utility.StringUtils.encryptWithXor`。证据在`phone-send-param-instructions.json`，不能将该编码重复应用到上述新SaaS映射上。

以上确定的是静态分支，不是通过手机运行观察确认当前账号一定选了哪条分支；也没有以猜测的手机号请求去试服务器。

## 验证码提交与needMix

`SmsCodeInputPresenter.R(mobile, code, extraMap)`使用`UserLoginParam.Builder.setMobile/setCode/setExtraInfo`，并设置mixMode为字符串`"1"`。按登录配置可走smsLogin或旧quickLogin/quickLoginOnly。原始指令保存在`phone-sms-login-submit-instructions.json`。

`UserLoginParam.Builder`的setter和模型getter均原样存取mobile/code，没有在getter里隐藏XOR转换。新保存`phone-user-login-param-instructions.json`与`phone-user-login-builder-instructions.json`。

注入的短信协程调用`LoginParamExtUtils.i()`后直接进入`smsLoginCommonResponse`。REA父证据`ev_67f43009a2f8bf6d4ed036cba641872fcde9f5da46be7124441e875bba88a87a`。

`i()`读取原始mobile/code和extraInfo中的sms_code_key/captcha/type等，构造SmsLoginParams时使用默认参数掩码**0x7f0000**，覆盖第16～22号参数位；其中最后的`needMix`默认值为Boolean.TRUE。该默认构造器已有REA父证据`ev_42844cf629dcab40c8d87692c84e6260210b9a9fbdf53025621d897f8be3b1a1`；本次对转换方法的父证据`ev_6b0d5a1b8ce5d8823c5a777887a1a87546ac6f9091c0c99d3319b770604da5ff`。原始赋值、掩码和needMix字段见`phone-sms-login-constructor-instructions.json`。

因此，**这条SaaS提交路径的toMap会对mobile、存在的code及sms_code_key执行XOR5+hex一次**，不能在UI预编码后再让toMap编码第二次。验证码/凭据不得写入应用普通日志、Track、历史或公开报告。这里没有任何真实号码或验证码。

## 业务路径与公共参数在哪里产生

此前已确认两个业务路径：

- `POST /passport/mobile/send_code/`
- `POST /passport/mobile/sms_login/`

SaaS NetworkServiceImpl包装映射时附加`is_from_iesaccountsaas=1`；通过`BDAccountDelegate → CommonRequestImpl → CommonRequestJob → BaseAccountApi`发送。CommonRequest代理第一张Map为headers，第二张为parameters，不应把它们误并为body。

已补齐的固定/条件项：

| 产生位置 | 已观察项 | 限制 |
| --- | --- | --- |
| NetworkUtils.getPathWithCommonQuery | passport-sdk-version=60651、request_from_account_sdk=1、is_from_ttaccountsdk=1 | SDK固定值，不是完整query集合。 |
| 同方法 | use_new_token_expire_rule=true | 仅AuthExpirationConfigManager.isEnable时加入。 |
| BaseAccountApi.executePost | account_sdk_source=app、passport_support_flow | 后者取自ErrorHandlerCenter，不凭空固定一个值。 |
| 同方法 | multi_login=1 | 仅当前TTAccountConfig.isSupportMultiLogin为真时加入。 |
| NetworkUtils.addCommonParams | TTAccountExtraConfig.getCommonRequestParams()的Map | 取自宿主/SDK配置，需实际配置而非随机补齐。 |
| BaseAccountApi.addRequestHeader/addCsrfToken | x-tt-multi-sids、x-tt-multi-sids-sec、x-tt-passport-csrf-token等 | 按现有会话/开关条件产生，不是每次必须都有的无条件清单。 |
| NetworkAdapter.doRealExecutePost | NetworkParams.putCommonParams | 受account_sdk_ignore_common_param=1控制；最终委托NetworkParams.sApiProcessHook。 |

原始指令：`phone-network-query-instructions.json`、`phone-network-common-params-instructions.json`、`phone-base-execute-post-instructions.json`、`phone-base-request-header-instructions.json`、`phone-base-addCsrfToken-instructions.json`、`phone-network-adapter-instructions.json`、`phone-common-params-hook-instructions.json`。

传输已经追到：

`TTAccountConfig.getNetwork → AbsTTAccountConfig默认NetworkAdapter → NetworkAdapter.doRealExecutePost → TTNet RetrofitUtils.createSsService → INetworkApi.doPost`

INetworkApi.doPost的原始注解为**@FormUrlEncoded、@POST**，依次接收Url、QueryMap、`@FieldMap(encode=true)`、HeaderList和ExtraInfo。它是**表单请求**，不能把这些手机号参数直接改成application/json。该声明在`official-retrofit-contract-index.json`，classes2.dex方法索引57372，FormUrlEncoded注解偏移8026545。

精确尚未越过的边界是**TTNet公共参数hook、全局请求拦截器/安全因子和Cookie管理**；不是“SDK里一个未知Map”。本次没有恢复完整TTNet网络栈、原生安全因子输入及完整设备注册/客户端身份链，也没有静态推断哪些头在服务器实际必需。`AccountConfig.getISec()`能定位到IAccountSec.init回调，但其存在本身不足以证明本次两个POST一定由它生成签名或必须跨App。

## 登录成功会话不只在userInfo JSON

本次原始DEX补查`BaseAccountApi.parseHeaders`，确认它遍历响应头，按不同分支识别：`set-cookie`、`x-tt-token`、`x-tt-session-sign`、`x-tt-multi-sids`、`x-tt-multi-sids-sec`、d-ticket及ticket-guard相关响应。`set-cookie`分支包含sessionid检测与flushCookie，并读取passport_csrf_token等；后续调用CsrfTokenManager、BDAccountManager.setXttSessionSign和DTicketManager保存相应状态。

文件`phone-base-parseHeaders-instructions.json`保留原始指令和分支；`phone-base-parseBody-instructions.json`保留message/success等业务解析入口。**这里只证明官版会处理哪些状态，未取得实际成功的头值，也未证明单独拿一个sessionid就足以授权所有Luna操作。** 通用模型中userInfo或HTTP200均不能代替完整Cookie/令牌和业务成功判断。

这对Mesting的直接要求是：专用私有会话存储必须保留真实成功流程需要的Cookie/CSRF/令牌及归属，不混进酷狗token槽；登录与后续Luna读回需要明确绑定同一账号。当前没有创建或保存真实汽水凭据。

## 可实施事实与仍不能承诺的部分

已经可以据证据实现/建模：区号与输入清理、场景24、8478应用身份、明确Passport生产默认主机、两条账号分支的独立编码、表单与query/header分离、业务错误与安全验证阶段、独立Cookie/CSRF/令牌会话模型。

尚不能仅凭这些静态事实承诺：Mesting包名/签名和设备上下文被服务器接受；当前账号会选的配置分支；完整公共query/动态安全头；captcha/ticket实际闭环；登录成功与跨启动恢复；后续完整播放、下载与奖励到账。缺口已经收敛至宿主网络/安全上下文与真实服务接受，而不是缺一个可猜的URL或一段本机XOR。

本轮不再请求已被用户拒绝的设备访问。后续继续离线可在必要时追具体hook或会话绑定实现；不能用伪造安全头、随机注册设备ID或本机改权益数字替代未验证条件。

## 后续公共hook补充

后续已完成[phone-request-hook-boundary.md](D:/AnLi/.codex-artifacts/2026-11-05-soda-rootless-feasibility/phone-request-hook-boundary.md)：公共参数Java层明确为NetPlugin/AppLog/BDInstall/ApiParamsUtil.c，可按真实来源独立建模；当前L1参数条件及openudid的L0例外已核对。与公共参数分开的安全因子回调也追至native `ms.bd.c.k3.a(...)`，没有恢复或伪造其运行值。上文保留该阶段的分析时点，最新缺口不再是整个公共参数Map，而是真实安装注册上下文、动态安全状态和服务端接受/成功会话验证。

## 归档与清理

本次REA22条证据已写`phone-client-context-rea-evidence.json`和同内容checkpoint，export/reset/close完成。目标仅classes8的原字节分析子集，来源及摘要在既有provenance。结束后按命令行和证据路径核验，仅停止本次已结束的自有JADX助手，`remaining_java_count=0`；记录`phone-client-helper-cleanup.json`。无产品、版本、签名、锁、APK和冻结源码修改。
