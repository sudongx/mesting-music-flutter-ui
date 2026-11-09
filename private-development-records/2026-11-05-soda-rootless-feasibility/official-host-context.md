# 官版 21.5.0：生产主机与公共账号请求上下文

2026-11-05；只读本地 APK / 既有调查文件，没有联网探测、手机、ADB、短信、登录或产品修改。

## 结论

已用**实际初始化方法体与 Retrofit 配置链**确认：此官版出厂配置的普通生产 API 默认是 `https://beta-luna.douyin.com`。域名含 beta 字样并不表示第三方仓库误用了测试环境。因此，不能把此前该域名上的请求失败简单归因为“只要换正式主机就会好”，也不能把这些特定请求的拒绝外推为完整官版契约不可接入。

同一全局初始化的生产 Passport 配置也是 `beta-luna.douyin.com`；账号 SDK 自身的 URL 构造另读取 `TTAccountInit.getConfig().host()`，本次没有把该 SDK config 的注入来源完全追到 `HostUtil.getPassPortHost()`，二者需要保持证据边界。

## 已连接的方法证据

### 1. 官版明确区分 BOE 与 PROD

`com.luna.biz.main.init.GlobalConfigInitTask.c(Application)` 调用：

```text
HostUtil.init(
  "luna-api-boe.bytedance.net", "beta-luna.douyin.com",
  "luna-api-boe.bytedance.net", "beta-luna.douyin.com",
  "tosv.byted.org", "lf-sourcecdn-tos.bytegecko.com",
  "luna-web.bytedance.net", "luna-web.douyin.com")
```

`SMPGlobalConfigInitTask.c` 使用相同八项值。`HostUtil.init` 的参数名与实现对应 `boeApiHost/prodApiHost/boePassportHost/prodPassportHost/boeLynxHost/prodLynxHost/boeWebHost/prodWebHost`，按此顺序分别建立 HostConfigInfo，并设置 isInit。

父证据：

- GlobalConfigInitTask.c：`ev_a7c67b92582f41f34ab492011a18deaf503b67bcd1eea80e8637f46aa07907f4`
- SMPGlobalConfigInitTask.c：`ev_c85d82ff859a90185a55a88f32945bd27e38789600402a67c8a42f88205df8b3`
- HostUtil.init：`ev_31d669c178a808b14782d604606903f47a9158f24b7b57b1447932994751e4ac`

### 2. 普通 Retrofit 确实使用这个 host provider

`NetInitTask.g()` 向 `RetrofitManager.INSTANCE.init` 传入 `LunaApiHostProvider.a`、GsonConverterFactory 及网络拦截器列表。可见拦截器包括 HeaderInterceptor、ServerTimeSynchronizer、RegionInterceptor、PackageBlockInterceptor、UrlInterceptor、LaunchMonitorInterceptor、NetLoginStatusMonitor、AbroadInterceptor，另可能追加 Debug/权益/广告服务的拦截器。

`TTNetCoreInitTask.c()` 的特定初始化优化分支也调用 `RetrofitManager.setApiHostProvider(LunaApiHostProvider.a)`。

`LunaApiHostProvider.getHost()`：非 BOE 选 HostType.PROD，调用 `HostUtil.getApiHost(hostType)`，再由其 `a(String)` 添加 `https://`。

父证据：

- NetInitTask.g：`ev_ba391ddc6305d7bb6cda28d4430d7f3a633a8b6639d5156a8f27b6741a994f10`
- TTNetCoreInitTask.c：`ev_264ecbe8f80b8edb32e35c363c8a8882dada0464a23ac9eea1d575b1d41faab1`
- LunaApiHostProvider.getHost：`ev_68fabdf033bc34a8bd0fdc0d05455290cf51f47c1eabf5b20494c894e514224f`
- LunaApiHostProvider.a：`ev_c12411e0cde7a7678b967f25706562675585f882edee63417950d1da3076bf32`

### 3. 有运行配置和热修复边界

`HostUtil.getApiHost` 在普通渠道返回 mApiHost 对应值；内部渠道允许 `CustomApiHostConfig` 非空值覆盖。相关方法都存在 PatchProxy 热修复分支。`HostUtil.init` 也通过 HostConfig 保存生产值；本次没有声称所有线上灰度/远程配置都等于出厂常量。

所以此证据确定**样本的代码默认配置和调用路径**，并不声称观察了用户设备当前运行请求。

父证据：`ev_7ab7c488b9f131cb137d90df2d37819e69d22a2c2d9c9b3362a28410d4dcab43`；Passport getter 父证据 `ev_ab737da2f3f9c88d048dff07bac3ba33dc8aaa4bdad76538b2f9a331f8235477`。

## 公共账号请求代理：比上一报告多确定的部分

已沿前一报告的 `KMPCommonRequestApiServiceImpl → BDAccountDelegate.getCommonRequestProxy()` 继续少量方法：

1. `BDAccountDelegate.getCommonRequestProxy()` 返回 `CommonRequestImpl.instance()`。
2. `CommonRequestImpl.doCommonPostRequestPath(path,map,map2,callback)` 创建 `CommonRequestJob.doCommonPostRequestWithPath(...).start()`。
3. `CommonRequestJob.doCommonPostRequestWithPath` 通过 `BDAccountNetApi.getUrl(path)` 建 URL，再交 `getRequest`。
4. `getRequest(url,map,map2,false)` 明确调用 `new ApiRequest.Builder().url(url).addHeaders(map).parameters(map2).post()`。
5. `BDAccountNetApi.getUrl(path)` 为 `SCHEME + getHost() + path`，SCHEME 静态常量 `https://`；`getHost()` 来自 `TTAccountInit.getConfig().host()`。

因此可修正上一阶段的“不明 extraMap”：这一层第一个 Map **是 headers**，第二个 Map 是 parameters。此层没有表明最终 Content-Type、全局公共 query、Cookie 存储、网络签名及所有注入头已经恢复；这些还在 ApiRequest/SDK/宿主网络依赖内，不能凭一张 Map 就认定独立客户端完成。

父证据：

- BDAccountDelegate.getCommonRequestProxy：`ev_09dc42da0f24ba0e63252f9cbcc2c209d0b01f9b7e65261329e25008c8fb583c`
- CommonRequestImpl.doCommonPostRequestPath overload1：`ev_c5d480b045b5017c4323e957b6da47c439b66bf7df9708cbc10e7bf5c00491fa`
- CommonRequestJob.doCommonPostRequestWithPath：`ev_23987448eaf9b3de7a55a42765592946d655db86204593a60815e885de979615`
- CommonRequestJob.getRequest：`ev_54202810d3ffea89a2629115f690cddaf45d26f598739ea4a099e7c89bd0fc8f`
- BDAccountNetApi.getUrl：`ev_99638970c4c5308a222ecc54298c51a832398e698f270868bbbcf0d6b8896f51`
- BDAccountNetApi.getHost：`ev_333892ff4165dec0873e00de5d23778bcb7cb57b5d81f397c2eec802ced57a41`
- BDAccountNetApi SCHEME 字段：`ev_51dc263550b346785e6fb60412f57699731ba277eda179a477c3569657f43f77`

## 字符串索引与代码证据的区别

`official-host-index.json` / `index_official_hosts.py` 按 DEX 指令边界记录 const-string 使用者；`official-host-call-index.json` / `index_official_host_calls.py` 记录选定宿主初始化的直接 invoke。原包逐 DEX 摘要、类及方法索引、代码偏移均保留。扫描没有报告指令解码错误；仍不包含反射、JNI 或运行时配置。

该索引还发现 `https://api.qishui.com` 用于部分 Lucky/广告/商城代码，以及 `https://beta-luna.douyin.com` 用于服务器事件接口。这些**局部用途**本身不足以把所有业务接口改到 api.qishui.com；本报告的普通生产 host 结论来自上面的全局初始化与 provider 链。

未逐一连接 `/luna/media-player`、`/luna/discover`、`/luna/search/{search_type}` 每个接口工厂的所有分支。root 正在独立核对具体接口声明/创建点；本报告不能替它声称请求体、认证及完整播放已经通畅。

## 样本与归档

- 原官方 APK SHA-256：`b639e67c13e03377f0f9d8068c5e0419b1acd42c7d529362f11ae704b3838741`。
- 本次串行 JADX 用分析子集 DEX6、DEX9、DEX21；它们只含未改动的 manifest、资源表和原 DEX。各自 `phone-analysis-only-dex*.provenance.json` 保留原包/子集/成员摘要，均不可安装、不可交付。
- `official-host-rea-evidence.json` 与 reset checkpoint：58 条，4,302,794 字节。
- `official-host-sdk-supplement.json`：getHost 与 SCHEME 补充 4 条，37,895 字节。
- 两段 ledger 均已保存并 reset，close_binary 已调用；没有产品或账号写入。

## 下一步只读范围

已经排除“beta 域名一定不是正式域名”的猜测。可继续对照本地 HeaderInterceptor / UrlInterceptor 与具体媒体请求构造，定位可确定的公共参数；Passport 最终注入的 host/config/headers 及真实成功会话仍须独立证据。用户已要求保持离线，本报告不要求连接手机、不运行官方 App、不发送任何联网业务请求。
