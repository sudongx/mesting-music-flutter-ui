# GitHub汽水音乐API检索与源码核对

2026-11-05。用户请求先找GitHub现成API；本轮进行了公开网页/GitHub源码读取，不访问手机、音乐账号、短信、奖励或第三方签名服务，不安装依赖、不运行下载项目/二进制。Mesting产品未改，仍为1.0.61/code82。

## 结论

**有相关现成接口和实现，而且比之前单独查看的qishui-api更完整。** 发现/搜索/歌单/账户资料、歌词、播放下载及PC签名适配已有多组代码；还找到Android客户端的“VIP天天送”活动状态/领取接口。

这使后续可优先基于现有实现研究适配，不能再泛称GitHub没有可参考的API。但在此次核对范围中，仍未找到同时满足**不扫码的独立手机号登录、无需外部签名依赖的Android完整媒体、模块式免广告连续领时长、官版DSP实际输出**的一套已验证完整方案。各项应分开验证，源码存在不等于已在Mesting或当前真实账号上可用。

## 最有价值的项目

| 项目 | 已读到的实际实现 | 对Mesting的条件/局限 |
| --- | --- | --- |
| [mytv-android/myMusic](https://github.com/mytv-android/myMusic) | 原生Kotlin汽水Provider、扫码/会话、搜索/歌单、媒体及播放上报；SodaWelfare读取commerce_info并调用apply_free_vip；有福利解析测试。 | 整曲PC请求依赖可配置签名器，默认引用SodaM公共签名服务；登录不是用户要求的独立手机号入口。福利是活动免费VIP，不等于模块的广告奖励回调链。 |
| [guohuiyuan/music-lib](https://github.com/guohuiyuan/music-lib) | soda包实现搜索、单曲、歌词、专辑、歌单、榜单、个人库、扫码+二次短信、媒体/下载；本地或外部签名适配。 | 本地签名代码调用Node/Electron与官版桌面bdms.node；也可外部服务。不能把桌面组件直接视为Android可执行库。扫码后MFA不是直接输入手机号登录。 |
| [sodahub-org/libresoda](https://github.com/sodahub-org/libresoda) | Rust汽水库，搜索/资料/媒体；扫码状态机、浏览器签名页和可选签名提供者。 | 文档有真实扫码作者记录，但也列二次验证限制；签名页需要Chromium。不是Mesting的实际账号验证，且非独立手机号。 |
| [MOPELotus/TuneWeave](https://github.com/MOPELotus/TuneWeave) | Rust SodaProvider及统一API，扫码/MFA、凭据导入/会话隔离、搜索/专辑/歌手/歌单/收藏、歌词/播放/下载、历史和音乐墙；接口与回归夹具较完整。 | provider能力声明有QrLogin/QrLoginVerification/CredentialImport，没有汽水独立手机号入口。PC签名依赖本地运行时/官方addon或配置的签名服务；文档多处明确真实账号最终验收未完成。 |
| [CharlesPikachu/musicdl](https://github.com/CharlesPikachu/musicdl) | SodaMusicClient已有Android搜索、官方会员/非会员取流及下载/容器处理，还包含第三方解析分支。 | 不实现用户要的初始手机号登录。部分媒体依赖Cookie/签名或第三方站点，不能将它们混为官方接口。未运行任何第三方解析请求。 |
| [Zencok/baka-plugins](https://github.com/Zencok/baka-plugins) | qishui.js提供Android搜索、PC媒体/歌词和目录，读取用户sessionid及自定义签名服务配置。 | 签名交给外部API，非独立签名算法；30/60秒试听检查存在，但仍须在Mesting按真实时长再验。 |
| [lladlam/MeloX-Android](https://github.com/lladlam/MeloX-Android) | 原生Kotlin复用qishui-api的目录、扫码会话、歌词与媒体结构，文档详细说明试听和账号隔离。 | 作者自己记录PC匿名搜索空body、示例只有30秒试听；没有生成PC签名、未实现部分加密播放和下载能力，不能当完整版链路已解决的证据。 |
| [1093791954/QishuiHelper](https://github.com/1093791954/QishuiHelper) | 无障碍截图/手势+视觉模型，操控官版实际广告UI领取时长。 | 是官版UI自动化，需要官版、无障碍/浮窗及视觉API；不是可嵌入Mesting的独立领取HTTP接口，也不是免广告方式。 |
| [guowenye/qishui-api](https://github.com/guowenye/qishui-api) | 原先已审阅Node实现：公开目录/分享媒体、PC搜索/账号与二维码接口。 | 远端main仍e409c10；不能单凭该旧实现填补当前手机号和签名缺口。 |

## 1. 新找到的福利API：活动免费VIP

固定源码：[SodaWelfare.kt](https://github.com/mytv-android/myMusic/blob/96e08ba02b6a9999887ca4ae4c82a4f9312735fa/app/src/main/java/com/mytv/mymusic/data/native/SodaWelfare.kt)。

- `POST /luna/commerce/v2/commerce_info`：请求体includes选择treasure、play_entitlements、activity_free_vip和membership。
- `POST /luna/commerce/v2/apply_free_vip`：该实现用空JSON对象申请，解析业务status和apply_status，区分成功、已领、风险、设备限制和活动结束。
- 代码读取服务器活动日期/资格/会员期限；作者注释样本为2026-11-05，活动窗口2026-10-30至2026-11-29。不能把这个样本外推成所有账号永久可领。
- [SodaWelfareTest.kt](https://github.com/mytv-android/myMusic/blob/96e08ba02b6a9999887ca4ae4c82a4f9312735fa/app/src/test/java/com/mytv/mymusic/data/native/SodaWelfareTest.kt)包含作者称取自真实返回的解析夹具，但本轮没有验证作者真实账号、执行测试或调用领取。

已与此前官版21.5.0静态声明交叉核对：classes5的RedeemApi.applyFreeVip也声明相同`/luna/commerce/v2/apply_free_vip`路径。这个匹配提高接口来源可信度，**仍不是服务器本轮接受/领取到账的证据**。

这条是活动VIP申请，与原模块触发`IRewardCompleteListener`后走`/luna/advert/incentive/done`的广告结算不同；活动免费VIP、广告奖励听歌时长、会员整曲权益不能混成一个功能。

## 2. 完整媒体已有签名适配代码

`music-lib/soda/localsigner.go`与`signature.go`具体实现本地官方addon或外部签名器；myMusic SodaProvider也明确在整曲请求前将请求URL/headers/body交签名器，并把签名头带回PC请求。

TuneWeave的`bdms.rs`支持本地Node/addon/可选Wine/PassportSDK与配置的服务URL。libresoda的二维码则使用Chromium签名页/浏览器上下文。这些是几种不同运行依赖，不能统称为一个“免费API地址”。

对未解BL的Android，普通客户端访问自有服务在架构上可行；但**本次没有证明桌面官方组件可直接在Android/Flutter执行，也没有确认某个公共服务长期可用**。签名器可能接收完整请求头/Cookie，现成库是否采用外部服务会影响后续架构和凭据边界；本轮未给任何服务发送凭据或测试请求。

这比仅知道X-Helios/X-Medusa名字更接近可实施路径；实际完整媒体仍要核对当前账号权限、录音、音质、片段/完整时长及实际音频。

## 3. 手机号登录仍需区别初始登录和扫码MFA

TuneWeave SodaProvider的能力声明在`provider.rs:684`，明确QrLogin、QrLoginVerification及CredentialImport。`login.rs`初始端点是Passport web二维码；`mfa.rs`及provider测试处理扫码后的安全验证。

music-lib的`login.go:223`也明确CheckQRLogin处理MFA短信，`send_code`/`up_sms`/验证码操作绑定先前二维码token/安全决策；它不是一个从手机号开始取得会话的独立入口。

MeloX文档明确使用已登录抖音App扫码；myMusic也主要是扫码或导入Cookie。**这些不符合用户已经确定的“只做手机号登录”要求，不能擅自用扫码替代。** 本轮针对“汽水/手机号/短信/qishui sms_login”的公开搜索及选定源码没有找到可直接采用的完整初始手机登录实现；结论只限检索与已读项目，不声称整个GitHub绝对没有。

此前离线还原的手机SaaS表单契约仍有参考价值；新的PC/扫码实现不能直接覆盖8478手机客户端的身份/编码流程。

## 4. 官版音效没有找到完整独立API方案

上述Soda专用实现中，没有找到能直接代替官版AudioEffectProcessor/JNI/DSP输出链的完整音效服务。其他客户端提到的均衡器、空间媒体档位或WebAudio效果，不自动等于汽水官版DSP。

因此本轮新源码能帮助目录/账号/媒体/活动福利；不能据此宣称此前的14份官版配置、权益检查、PCM格式转换和原生加载问题已解决。

## 时效及验证范围

- 公开网页检索包含API、手机号、短信、免费听、音效、SodaM/libresoda及精确端点词；10个查询中8个保存了搜索结果，2个精确词查询返回无结果。搜索索引不是完整GitHub代码搜索，存在覆盖限制。
- `github-repository-inventory.json`保留公开仓库元数据；`reviewed-source-manifest.json`将8个主要项目和19份选定文件绑定commit、SHA256和对应行号。qishui-api另按远端main核对。
- musicdl issue97最初报告PC搜索空body；当前页面含维护者“已修复”及修复提交，不能把旧issue标题当作项目当前完全失效的依据。此轮以当前源码分支区分Android搜索/官方签名/第三方解析。
- 只读代码，没有运行项目、安装依赖/签名器、发送短信、领取福利或验证真实媒体，不将README宣称和模拟夹具当作设备/账号验收。
- 没有修改Mesting产品、签名、版本、锁、旧交付或Git暂存，没有构建/推送/发布。

## 建议的后续重点

优先以myMusic的Android实现、music-lib/libresoda的媒体/签名协议和TuneWeave的会话/接口模型交叉核对。先明确所用签名运行位置和私有会话归属，再验证当前账号的完整版媒体；用户要求的初始手机号登录单独补齐，活动免费VIP与广告时长分别建模。实际官版音效保持此前独立DSP适配路线。

此次检索把“有没有API”的答案明确为**有，且有较完整可参考代码**；它不等于已经满足全部产品要求，也不意味着现在需要改成扫码登录或自动采用公共签名服务。
