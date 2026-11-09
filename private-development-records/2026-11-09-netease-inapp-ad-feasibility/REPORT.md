# 不启动官版网易云：Mesting内网页广告的可行性核对

日期：2026-11-09，Asia/Shanghai。用户已明确接受Mesting内部网页，目标仍是真实前台广告、真实完成结果和完成后的自动领取/余额同步。本轮仅静态研究及无登录的公开源码读取；没有改产品、测试、版本或80冻结物，没有构建、安装、访问手机/ADB、账号凭据、NAS，没有向网易云请求广告、上报曝光/点击或提交权益领取。

## 结论

目前没有找到并验证一条“打开普通HTTPS网页，即可脱离官版网易云完成该免费听任务”的现成流程。官版9.6.15福利界面的广告按钮打开服务端下发的actionUrl；用户这次诊断下发的是officialNm原生路由。发现的广告WebView也需要官版原生层提供数据和状态，不能直接当作可独立领奖的网页。

这不证明Mesting自行承载真实广告在技术上绝不可能。另一条需要验证的候选是：Mesting读取同账号、同任务真实下发的广告配置，在自己的前台容器中展示受支持素材，按真实发生的事件及官方条件完成流程，再请求/核对服务端结果。当前缺少该账号实际广告响应和完整承载/结算兼容证据，不能把这条候选说成已可用方案。

不应现在先交付一个空WebView再宣称已接入真实领取。也不能把第三方库自动补齐的曝光/点击字段，当作真实广告完成证据。

## 已有真实反馈与本轮边界

- 用户官版安卓版9.6.15录屏：领福利→领时长→真实广告→进入其他App并按要求停留→返回后发放。录屏不包含请求/响应协议。
- 用户已证明官版领取后Mesting可同步余额和任务。余额同步不是当前主要缺口。
- 用户80版诊断：余额/进度/签到读取成功，rewardIdentity=defaultPc；officialNm入口解析成功，qualificationRequested=false后在Mesting本地停止。没有资格或gain请求，不能解释为平台判定不符合资格。
- 本轮只读核对当前80/code101收据通过：1630产品输入、100冻结物、74退休路径、HEAD/空暂存/锁/签名和旧收据保持，未重测重建。

## 1. 官版福利界面不是独立H5领奖页面

复用旧159已经完成的Hermes静态解码，对全部12906函数检查字符串操作数，并保存本轮选中的8个完整函数：

- 7977/7978取得并存储免费听任务数据；7988读取actionUrl并调用Url.open。新版组件9806/9807/9809执行同类操作。这里没有在页面内直接构建完整广告播放器及领奖链路。
- exact webviewUrl字符串只出现在6865。该函数读取resource的title/subTitle/coverImgUrl/webviewUrl/orpheusUrl，构造资源卡片，优先orpheusUrl。它不是免费听广告按钮，不能拿来证明独立H5领奖入口。
- 9708包含`NewUserCash`的handleWithdraw诊断和现金提现页面URL，是提现流程；不能拿该HTTPS地址冒充免费听广告页。本轮没有访问它。
- appJson表明这是`rn-ad-free-music`、android/ios页面index的React Native包。RN包、HBC字节码及原生桥模块不能被普通浏览器直接当HTML使用。

本轮文件：selected-rn-functions.json、selected-rn-module-inventory.json、rn-observations.json。它们是既有静态解码的选择与派生结果，不是本轮运行官版得到的证据；原输入散列另存。

## 2. 官版确有广告WebView，但原生依赖仍在

在原9.6.15的classes16分析载体继续只读检查，保存12条新父Evidence及12条摘要投影，共24记录、509112字节，REA已保存并reset。没有执行APK。

| 静态观察 | 本轮父Evidence | 含义与限制 |
| --- | --- | --- |
| AdMotivationVideoFragment类库存包含AdVideoView、AdLightInteractionWebView、原生广告容器及ViewModel | ev_464d0e258f0d83bd35079483cb7aa2131548b3aafa83616e15304e6c93cd5803 | 页面具有原生宿主组成，不证明每种广告都必须用到所有组件 |
| Fragment.onViewCreated绑定原生视频控件和轻交互WebView | ev_cf5b98aa8c75dd1d7de948005662405ec5dc83d248dc8b794a6f0a6fb84b3066 | 该WebView是页面组成部分，不能当作整个任务的独立网页 |
| AdLightInteractionWebView类库存具有视频状态查询/控制和原生转化回调 | ev_6838a2af429a6fd9ec07d5d14879cfe39e343bc918b3e4359bc74f0bda8e9045 | 发现H5交互能力；不等于第三方可直接使用的SDK合同 |
| 构造函数通过addJavascriptInterface暴露nativeGlobal | ev_66738cd91a48d6fdbbd91a005e1070aa2639dda88adea4e97bfa41a75ec208fd | 普通Mesting WebView默认没有这套原生能力 |
| 原生向JS调用JSBridge._handleMessageFromApp | ev_b613e5786e6bd4f364f4f0be88d3637e979ae98f161698400bb8439e73a124d1 | 说明双向桥接，不证明官方领奖已完成 |
| getAdsData调用宿主提供的adLightInteractionDataManager.getAdsData | ev_3b938ea683001250b607a27ee24b6a90970444f5681fe7f56afd437796f34da0 | 网页依赖宿主提供同次广告数据 |
| adsConvert调用宿主adConvertCallBack，返回桥消息响应 | ev_c70a9efc9b7b617e16803c48424128df7dd8837fbfea49cdfa4946f1841c38cc | 不是直接取得免费听入账成功；JS回调响应1不能当作gainFlag |
| sendTrack使用宿主数据管理器的追踪列表 | ev_aca1c94572c470d382c4c025fc5889940fa558b8c936d0d0cf0f493b61f7b2f7 | 仅打开网页不能自动获得完整的广告跟踪承载能力 |

方法正文均标为complete，反编译器仍提示部分类型推断/构造函数重排警告；结论限于选定静态代码，不扩大为当前账号实际执行、所有广告类型覆盖或包真实性认证。完整索引见native-evidence-index.json，正文见rea-evidence.json。

这说明“官版包含网页广告组件”和“有一个可独立嵌入的官方免费听网页”是两个不同事实。前者已有证据，后者仍未证明。Mesting若选择自建宿主，必须继续核对真实素材、媒体播放、可见状态、转化/落地页规则和结算条件，不能只补一个同名JS接口就声称兼容。

## 3. 新发现的第三方接口库能说明什么

核对缓存`@neteasecloudmusicapienhanced/api`4.41.1，并无登录读取其作者当前公开仓库，固定到提交：

`4a7d557326d16d2f1e5172ee69c9471eb3a50173`

来源：

- https://github.com/NeteaseCloudMusicApiEnhanced/api-enhanced/blob/4a7d557326d16d2f1e5172ee69c9471eb3a50173/module/ad_get.js
- https://github.com/NeteaseCloudMusicApiEnhanced/api-enhanced/blob/4a7d557326d16d2f1e5172ee69c9471eb3a50173/module/ad_listening_rights_gain.js

这是第三方实现作者自身的一手源码，不是网易云公开授权文档或官方SDK。

ad_get返回广告对象与请求标识；ad_listening_rights_gain可以取得广告字段并构造领奖请求。两个模块没有展示真实广告或驱动真实视频/点击/停留完成的实现。领奖模块137/143行在缺参数时使用当前时间作为曝光和点击时间，因此它不能单独作为“真实前台广告已经完成”的证明；本轮仅阅读，没有调用或接入。

传输也不能直接照搬：这两个模块选用xeapi/v3；缓存request.js的xeapi分支涉及公钥和会话状态。Mesting当前netease_api.dart使用现有weapi/eapi，并以pc为默认身份。是否需要新传输或特定身份、现有eapi能否兼容当前广告接口，仍须依据官方合同或实际合法响应核对；改一条UA或os不足以证明兼容。本轮没有为了试探而发送请求或更改通用身份。

保存public-source-provenance.json、三份固定提交源码、缓存选中源码；没有导入、安装或执行第三方代码。公开检索没有找到适用的独立官方H5合同，这只是本轮有限查询的结果，不能推断不存在商务合作或未调查接口。

## 4. 官方完成与余额同步仍须分别判断

复用上一轮foreground-ad-research完整证据：官版先提交gain再发布内部结果，指定结果广播限制到官版包；Activity返回、网页关闭、JS消息ack或本机倒计时结束都不能冒充服务器领取成功。

若后续Mesting自身承载，必须明确哪些结果属于广告宿主/SDK的真实事件，哪些属于权益服务端的实际确认；只有后者确认后才更新本次领取状态。提交结果未知时保留未知记录，不无界重发、不通过余额变化反推精确单次入账。

现有Mesting已具onResume刷新官方余额/任务的基础。用户也验证了跨官版领取后的同步，因此后续可以复用读取与账号代次保护，不必重写余额协议。

## 5. 可供用户确认的下一步

若用户希望继续到代码验证，建议先做“用户主动触发的只读广告配置诊断”，而非直接承诺完整领奖版：

1. 独立请求/解析模块，从同账号同次真实任务入口核对广告位，读取一次真实广告配置；传输合同不足时明确停止，不猜造字段或批量尝试。
2. 对照素材类型、视频/网页地址类型、宿主桥依赖及权益条件，仅导出闭合的安全结构摘要。账号Cookie、完整广告上下文和跟踪地址不进入诊断；不向第三方服务转交登录凭据。
3. 这一步不启动官版、不提交曝光/点击/停留/安装事件、不调用gain，也不把拿到广告当作已完成。
4. 取得真实结构后，再判断能否使用独立HTTPS页面，还是需要Mesting自己的原生媒体/网页宿主。后者必须按实际可见和实际事件实现；未接通真实完成条件前不开放自动领奖。
5. 用户确认后才改产品与测试，并另存新版本；80原APK/源码ZIP/收据保持。设备/账号验证由用户手动执行，除非另有明确授权，不自动连接手机或读取账号。

这一阶段能验证当前缺失的广告配置和承载合同，不能保证最终一定可领奖。当前没有开始该实施；无需为本次研究重跑产品测试或重建80。
