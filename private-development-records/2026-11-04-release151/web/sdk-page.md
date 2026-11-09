[跳到正文](https://download.csnas.asia/sdk#main) [RRing Download开发者文档](https://download.csnas.asia/sdk)

2026-10-30 · 完整接入流程

[应用目录与下载标识](https://download.csnas.asia/sdk#apps) [1\. 接入前准备](https://download.csnas.asia/sdk#prepare) [2\. 选版本并引入 SDK](https://download.csnas.asia/sdk#versions) [首次接入与构建](https://download.csnas.asia/sdk#first-run) [无业务后台：直接检查公开更新](https://download.csnas.asia/sdk#public-updates) [3\. 后台先选来源，再组装更新响应](https://download.csnas.asia/sdk#backend) [4\. 更新响应字段契约](https://download.csnas.asia/sdk#contract) [5\. App 调用 SDK](https://download.csnas.asia/sdk#start) [6\. P8P SDK：多源协作下载](https://download.csnas.asia/sdk#p8p) [7\. 停电、COS 与主副站切换](https://download.csnas.asia/sdk#outage) [8\. 任务、进度与安装](https://download.csnas.asia/sdk#tasks) [9\. 前台分享与网络](https://download.csnas.asia/sdk#sharing) [10\. 诊断、统计与排错](https://download.csnas.asia/sdk#diagnostics) [11\. 联调和交付验收](https://download.csnas.asia/sdk#validation) [12\. 底层接口与维护](https://download.csnas.asia/sdk#api)

[SDK 接入手册 ↗](https://download.csnas.asia/sdk) [平台接口参考 ↗](https://download.csnas.asia/docs) [管理应用 ↗](https://download.csnas.asia/admin?page=apps)

开发文档 / SDK 开发者接入手册 [下载本篇 Markdown ↓](https://download.csnas.asia/static/ring-download-sdk-guide.md)

Flutter Android · P8P SDK 1.1.2 正式版

# SDK 开发者接入手册

已有业务后台选源，或无后台 App 直接检查公开更新。设备标识、会话、续传、节点协商与校验由 SDK 自动处理，App 接好版本判断、下载和安装即可。

[从接入准备开始](https://download.csnas.asia/sdk#prepare) [下载正式 SDK 1.1.2](https://download.csnas.asia/static/ring-download-sdk-1.1.2.zip)

SDK 1.1.2 正式源码版已发布，增加Android接收缓冲、缓存恢复与手机轻量分享，历史归档保留。 [SDK 源码入口](https://gitee.com/cai-chunshuang/app/tree/codex%2Fp8p-development/sdk/ring_download_sdk)；正式 App 由 App 开发者自行签名打包。

更新：2026-10-28 · 面向 App、业务后台和下载平台管理员。

已有更新后台的 App，按“业务后台选定版本和来源 → App 调用 SDK → 下载完成后安装”的流程接入。LifeRing 使用这套下载契约；新 App 保留自己的账号、灰度、版本管理和安装流程，映射同一组下载字段即可。

没有业务更新后台、允许所有用户取得本站公开最新版的 App，也可以直接用 SDK 的 `latestRelease()` 查更新，按本机已安装构建号决定是否提示，再调用 `download(request)`。这两条接入路径共用下载能力；无需为了公开更新另外搭建业务后台。

## 应用目录与下载标识

先找到自己的应用。下表中的 slug 就是 **SDK 的 appId**，请原样填写；它也是下载 URL 中的应用路径，不是用户 ID、版本号或 Android 包名。

| 应用 / SDK appId（slug） | 接入状态 | 业务后台读取的 health | 主下载地址 |
| --- | --- | --- | --- |
| **LifeRing**<br>`lifering` | 已发布，可下载 | `https://download.csnas.asia/api/app/lifering/health` | [下载 APK](https://download.csnas.asia/lifering/download)<br>`https://download.csnas.asia/lifering/download` |
| **Mesting Music**<br>`music` | 已发布，可下载 | `https://download.csnas.asia/api/app/music/health` | [下载 APK](https://download.csnas.asia/music/download)<br>`https://download.csnas.asia/music/download` |
| **P8P 下载实验室**<br>`p8p-lab` | 已发布，可下载 | `https://download.csnas.asia/api/app/p8p-lab/health` | [下载 APK](https://download.csnas.asia/p8p-lab/download)<br>`https://download.csnas.asia/p8p-lab/download` |
| **SiteFoundry**<br>`new-app` | 已发布，可下载 | `https://download.csnas.asia/api/app/new-app/health` | [下载 APK](https://download.csnas.asia/new-app/download)<br>`https://download.csnas.asia/new-app/download` |
| **WeDo**<br>`wedo` | 已发布，可下载 | `https://download.csnas.asia/api/app/wedo/health` | [下载 APK](https://download.csnas.asia/wedo/download)<br>`https://download.csnas.asia/wedo/download` |

目录与管理后台同步，重新获取本文即可看到最新状态。“已发布，可下载”表示已有本站 APK 可用于接入；等待首个可用版本表示标识已分配，需管理员上传并发布 APK 后才能联调本站下载。包名冲突需先处理。尚未分配标识时，请联系下载平台管理员创建自己的应用。

health 供业务后台或无后台 App 的 SDK 取得本站 APK 元数据；外部 COS 仍由独立的业务选源提供。完整接口参考见 [/docs](https://download.csnas.asia/docs#apps)。

### 几种标识不要混用

| 名称 | 示例 | 从哪里取得 / 填在哪里 |
| --- | --- | --- |
| 下载标识 appId / slug | `music` | 上面的应用目录；填入 `RingDownloadConfig.appId`，并对应 `/music/download` |
| Android applicationId | `com.company.product` | App 自己的 Android 工程和 APK 包名；安装包必须属于本 App |
| 用户 ID | `12345` | 业务账号系统；只用于业务更新资格，不填进 SDK appId |
| releaseId | `business-release-42` | 业务后台的发布记录标识，不是下载平台应用标识 |
| versionName / versionCode | `2.0.0` / `200` | 业务目标版本及更新顺序；实际 APK 构建号另用 downloadVersionCode |

应用改显示名称不代表下载标识改变。现有业务 URL 与 SDK appId 必须保持一致；新标识长度为 1–36 个字符，只用小写字母和数字，可用最多 5 个单独的连字符分隔；不能以连字符开头或结尾，不能连续使用连字符，也不支持下划线。例：`my-app-2` 可用，`my--app`、`music_2` 不可用；还需避开管理端提示的系统保留路径。公开应用标识不是密码；App 不需要下载平台管理员账号或发布凭据。

## 1\. 接入前准备

| 由谁准备 | 必备内容 | 验证方式 |
| --- | --- | --- |
| 下载平台管理员 | 为新 App 分配独立应用标识 appId/slug，登记 Android 包名，上传并发布对应 APK，提供完整主下载链接和 health 地址 | 请求该应用 health，确认文件、包名、版本和摘要对应 |
| App 开发者 | Flutter Android 工程、实际 applicationId、原安装签名、已安装构建号、SDK 生命周期和安装入口；已有业务更新 API 时保留其规则 | 确认旧版能够安装签名一致的新 APK |
| 业务后台开发者（已有后台时） | 发布记录 ID、更新版本/资格规则、可修改的主下载字段、按来源分流逻辑 | 返回本站与外部 COS 两份脱敏更新响应 |
| 业务方（需要独立 COS 容灾时） | 自己可独立访问的 COS/CDN 完整下载地址，以及该地址对应的版本 | 本站不可用时，独立的选源入口仍能下发且客户端下载该文件 |

新 App 使用管理员分配的自己的 slug，示例中的 `your-app` 都需要替换。`lifering` 是 LifeRing 的应用标识，不能给另一个 App 共用。用户 ID、发布记录 ID、APK 构建号和 slug 各有用途，不能互相替代。

当前 SDK 交付为 Flutter Android 源码，Android API 24+、arm64。SDK 的 `appId` 是公开应用标识；COS 密钥、下载平台管理员账号和发布凭据留在服务端。SDK 不提供 Kotlin/Java AAR、iOS 或私有租户授权平台。

### 旧文档里的哪些工作已经由 SDK 完成

下面这些属于 SDK 内部实现，App 开发者不用再写一遍，也不需要复制原生网络通道：

| 下载所需信息或能力 | SDK 自动处理 | 宿主需要配合的内容 |
| --- | --- | --- |
| 安装级设备标识 X-Device-Id | 生成随机 UUID 并持久保存；不读取 IMEI，不拿账号 ID 代替 | 正常引入插件与存储依赖 |
| App 自身版本 X-Client-App-Version | 读取已安装 App 的版本名和构建号 | 正常配置 App 自己的构建版本 |
| 下载会话 X-Download-Session-Id | 获取、保存、复用及结束 HTTP 下载会话 | 不另开重复下载任务 |
| P2P token、幂等键和会话代次 | 会话建立、授权请求、心跳、退休和清理 | 提供正确的业务文件信息 |
| HTTPS Range、If-Range、ETag | 断点状态、身份检查和可验证续传 | 绑定 SDK 进度/取消；保留 SDK 所有的任务文件 |
| Wi-Fi/蜂窝及前后台识别 | Android 网络插件与默认生命周期观察 | 明确分享开关；自定义生命周期模式时传准确状态 |
| 节点发现、ICE、信令和 DataChannel | 能力协商、P2P/P8P 调度及有界失败恢复 | 使用匹配的 SDK 版本和 appId |
| 分片、整包校验与本地收据 | 按已提供的预期身份校验，安装前可重新核验 | 使用 completed 结果和 revalidate，不按 100% 进度提前安装 |
| 下载结果和流量诊断 | 对本站任务按已实现协议自动处理 | 可选择绑定诊断回调；外部 COS 不强制回报本站 |
| 系统安装结果 | 提供安装记忆、成功核对和失败回报 API | 宿主调用安装器，并配合记录/核对实际安装结果 |

因此 App 接入任务是：导入依赖、配置 appId/开关、传业务更新响应、展示进度和取消、连接原安装器、管理 SDK 生命周期。业务后台仍负责选版本、更新资格和本站/COS 选源。单独复制依赖而不调用下载入口，不会自动接管原下载器。

## 2\. 选版本并引入 SDK

| 版本 | 下载入口 | 能力和状态 |
| --- | --- | --- |
| 稳定版 1.0.3，不含 P8P | [源码 ZIP](https://download.csnas.asia/static/ring-download-sdk-1.0.3.zip)、 [SHA256](https://download.csnas.asia/static/ring-download-sdk-1.0.3.sha256) | 原 P2P、HTTPS 先行、续传、取消和校验；原归档保持不变 |
| 历史正式版 1.1.0，包含 P8P | [源码 ZIP](https://download.csnas.asia/static/ring-download-sdk-1.1.0.zip)、 [SHA256](https://download.csnas.asia/static/ring-download-sdk-1.1.0.sha256)、 [自有源码仓库](https://gitee.com/cai-chunshuang/app/tree/codex%2Fp8p-development/sdk/ring_download_sdk) | P8P 需要显式开启；HTTPS 先行和原 P2P 兼容保持 |
| 历史正式版 1.1.1，包含 P8P | [源码 ZIP](https://download.csnas.asia/static/ring-download-sdk-1.1.1.zip)、 [SHA256](https://download.csnas.asia/static/ring-download-sdk-1.1.1.sha256)、 [自有源码仓库](https://gitee.com/cai-chunshuang/app/tree/codex%2Fp8p-development/sdk/ring_download_sdk) | 增加多源接管后的晚到节点补查；HTTPS 仍为两路 |

| 正式版 1.1.2，包含 P8P | [源码 ZIP](https://download.csnas.asia/static/ring-download-sdk-1.1.2.zip)、 [SHA256](https://download.csnas.asia/static/ring-download-sdk-1.1.2.sha256) | 取消修复、Android接收缓冲、缓存恢复与手机轻量分享 |
| --- | --- | --- |

SDK 1.1.2正式源码已发布，保持HTTPS先行及COS独立。历史1.1.1、1.1.0及原P2P归档不覆盖；App开发者更新依赖并沿用原签名打包。SDK发布不表示已安装App已更新或所有网络已验收。

将所选源码目录放到 App 工程旁，在 `pubspec.yaml` 添加：

yaml复制

```
dependencies:
  ring_download_sdk:
    path: ../ring_download_sdk
```

执行 `flutter pub get`。接入方沿用自己的 Android 构建和签名流程，发布前核对依赖实际指向所选 SDK 版本。LifeRing 开发者沿用现有更新协调器，不要在页面中再创建第二个 SDK。

## 首次接入与构建

### 构建环境与目录

SDK 1.1.2 的源码约束为 Flutter ≥ 3.38.0、Dart ≥ 3.10.8 且 < 4.0.0，两项都要满足；Android 插件使用 Java 17、compileSdk 36、minSdk 24，正式接入按 arm64 设备验证。先执行 `flutter --version`、`java -version` 并安装对应 Android SDK；这些是当前源码要求，不是要求追随工具的最新版本。

解压正式 ZIP 后，找到同时包含 `pubspec.yaml` 和 `lib/ring_download_sdk.dart` 的 `ring_download_sdk` 目录。上面的 path 相对于宿主 App 的 pubspec.yaml；不要把外层 ZIP 解压目录误当作 SDK 根目录。下载 ZIP 后可执行 `Get-FileHash -LiteralPath .\ring-download-sdk-1.1.2.zip -Algorithm SHA256`，与同版本 SHA256 文件核对。

插件清单已声明 INTERNET 和 ACCESS\_NETWORK\_STATE，宿主构建时会合并；不用为下载请求相机或麦克风的运行时授权。安装器由宿主负责：按其现有方案配置安装来源授权及文件 URI，使用完成结果的 `result.file`，不要把下载路径直接当作已安装成功。正式签名和包名继续由 App 方管理。

### 首次接入顺序

1. 管理员创建应用、确认 slug，上传并发布与宿主包名和签名对应的 APK。
2. 开发者在上方目录确认“已发布，可下载”，业务后台请求自己的 health，核对版本、大小、SHA 和主副链接。
3. 引入同版本 SDK，设置自己的 appId；需要 P8P 时显式开启 enableP8P，宿主按业务资格决定何时下载。
4. 使用业务返回的数据调用 download(request)，绑定进度和取消，等待 completed 与 revalidate，再调用原安装器。
5. 联调本站与外部 COS 两条路径，确认节点不可用时 HTTPS 仍完成；再测试取消、退出和安装结果。

只使用公开的下载和元数据接口不需要管理员登录。App 原有更新 API 的用户鉴权仍由业务方处理；`fromLifeRing` 不会替开发者登录业务后台。

## 无业务后台：直接检查公开更新

适用于 Music 这类没有业务更新后台、允许用户下载本站公开最新版的 App。以自己的 appId 初始化 SDK，默认 `latestRelease()` 读取上方动态应用目录中对应的 health，解析同一份响应里的主副地址、版本、大小、SHA 和 APK 构建号；SDK 返回 `RingDownloadRequest`，不自动弹窗或判断是否有更新。Music 的 appId 是 `music`；新 App 使用管理员分配的自己的标识，管理员正式发布 APK 后才能联调本站更新。

App 启动后在后台异步检查，不把它放在首屏、登录、第三方音乐请求或播放的前置等待里。一次检查未完成时不重复启动；自动检查失败可以本轮静默跳过，手动“检查更新”应区分请求失败和“已是最新版”。SDK 默认查版入口整体最多等待 10 秒，不要另外用无限重试卡住启动。

### 用系统构建号判断升级，SHA 负责文件身份

| 情况 | 自动更新检查的处理 |
| --- | --- |
| 远端 APK 构建号大于系统读取的已安装构建号 | 提示升级，用户确认后开始下载 |
| 远端构建号相同或更低 | 不作为普通自动升级；不要只因 SHA 不同反复提示或尝试降级 |
| 本机构建号读取失败、远端缺少构建号或元数据无效 | 跳过自动升级并保留可诊断状态；管理员核对发布 APK，不把缺省值当成 0 猜测 |
| 下载完成，但用户取消安装或安装失败 | 不把新 SHA 保存成“已安装版本”；下次仍按系统中实际安装的构建号判断 |
| health 超时、本站停机或网络不可用 | 更新检查本轮不可用，App 的其他业务照常执行；不能提示“已是最新版” |

SHA 不一致只能说明两个文件身份不同，不能证明远端更新。仅保存“上次请求或下载的 SHA”会在取消安装后漏掉更新，也无法可靠处理首次启动。每次正式发版递增 APK 的 Android versionCode，包名和签名保持与原 App 一致；`version` 是展示名称，不按字符串字典序比较大小。

dart复制

```
// 自动检查示例：installedVersionCode 由宿主从系统已安装包读取。
// sdk 由更新协调器持有；不要在检查函数中重复创建或销毁。
Future<RingDownloadRequest?> findPublicUpdate(
  RingDownloadSdk sdk,
  int installedVersionCode,
) async {
  if (installedVersionCode <= 0) return null;
  try {
    final release = await sdk.latestRelease();
    final remoteBuild = release.androidVersionCode;
    if (remoteBuild == null || remoteBuild <= installedVersionCode) return null;
    return release;
  } on RingDownloadException {
    // 仅表示本轮自动检查不可用，不代表已安装最新版。
    return null;
  }
}

// 取得待更新 release、展示版本并获得用户确认后，下载同一份快照：
// final task = sdk.download(release);
// final result = await task.completed;
// await result.revalidate();
// 再调用宿主原安装器；下次启动重新读取系统实际构建号。
```

判断版本后使用 `sdk.download(release)`，保留已经展示给用户的那份文件身份。`downloadLatest()` 会重新查版并直接下载，不负责比较已安装构建号；不要每次启动无条件调用它。如果检查和确认期间发布文件已变化，按 SDK 返回的身份错误重新检查，不关闭校验或拼接不同版本残片。

这种公开更新入口不需要业务 releaseId，SDK 按 SHA 生成本站发布身份。HTTPS 立即开始与 P8P 加速规则保持；P8P 仍须显式开启。下载完成不等于安装成功，可选安装统计仍按后文记忆、核对或失败回报流程处理。

没有独立更新后台或其他可信的取址入口时，本站停机后不能通过本站 health 获得新的版本或 COS 地址。跳过本次检查可以保持 App 其他功能可用，但不等于具备更新容灾；需要独立 COS 时按选源方案另外准备，不新增 SDK 第三个 COS 候选。

## 3\. 后台先选来源，再组装更新响应

后台由管理员填写并保存 **完整主下载链接**。例如：

text复制

```
https://download.csnas.asia/your-app/download
```

业务后台每次处理更新检查时，先按自己的规则决定是否向这个用户提供更新，再按实际主下载 URL 分流。精确匹配主机名，不做“字符串包含域名”的判断。

| 已选主下载 URL | 后台需要做什么 | 下发给 App 的内容 |
| --- | --- | --- |
| download.csnas.asia 或 download1.csnas.asia，且为本应用的 /slug/download | 请求本应用 health，使用同一次成功响应的完整元数据 | 本站主副下载地址、大小、SHA、ETag、文件名和版本名，加业务发布 ID/更新规则 |
| COS/CDN 等外部 HTTPS 文件直链 | 直接使用业务方保存或签发的 URL；不请求本站 health | 外部 downloadUrl；没有预期大小/SHA 时可传 0/空 |

推荐的业务逻辑：

text复制

```
检查本用户更新资格和目标发布
读取管理员选定的完整主下载链接
如果是本站的本应用下载地址：
    请求 GET /api/app/{slug}/health（有明确超时）
    校验 status、app_slug、版本、大小、SHA 和主副地址
    将同一次 health 快照映射到业务更新响应
否则：
    直接下发已选外部 HTTPS 地址及业务方已有的元数据
```

LifeRing 自定义来源的保存字段叫 `customDownloadUrl`，对 App 的响应字段叫 `downloadUrl`；新后台可以用自己的数据库字段名。LifeRing 业务 API 是 `POST /v1/app-upgrades/check`，新 App 不必复制这个 URL，只需把自己的响应适配给 SDK。

LifeRing 当前授权后台在创建/修改本站自定义链接时读取 health；每次构造更新检查响应也重新读取，默认超时 5 秒。主地址即使填写副站，当前 LifeRing 后台仍请求主站 health。不要把数据库以前保存的 SHA 当作本次新文件的证明。

### 主副链接和哈希从哪里来

下载平台上传发布 APK 时计算实际文件 SHA-256，保存当前发布记录。health 从当前发布读取版本和 SHA，取得实际大小，并输出主副链接。业务后台只填写主链接即可通过 health 取得其他信息：

| health 字段 | 业务响应字段 | 说明 |
| --- | --- | --- |
| primary\_url / canonical\_download\_url | downloadUrl | 本次本站主下载地址 |
| backup\_url | downloadBackupUrl | 副站直连地址，保留 direct=backup 参数 |
| version | versionName | 文件对应的版本名 |
| filename | fileName | 文件名，供业务/UI 使用 |
| file\_size | fileSize | 同一 APK 的字节数 |
| sha256 | sha256 | 同一 APK 的 64 位十六进制摘要 |
| etag | downloadEtag | HTTP 内容身份 |
| android\_version\_code | downloadVersionCode | 实际 APK 构建号，可缺省；不能拿业务版本阈值猜测 |

`releaseId`、业务 `versionCode`、`hasUpdate`、灰度、强更和账号资格来自业务后台。`downloadProtocol: APK_SERVICE_V40` 是兼容提示，不是 P8P 开关。我们的 health 中 `fallback_url` 是下载平台自己的 COS 配置，不是业务方保存的 COS。

## 4\. 更新响应字段契约

| 字段 | 类型 | 本站下载 | 外部 COS/CDN |
| --- | --- | --- | --- |
| downloadUrl | string | 必须：HTTPS443、本站完整域名、本应用 /slug/download | 必须：有效 HTTPS443 文件直链，签名参数保持完整 |
| releaseId | string | 必须：业务发布记录标识 | SDK 可省略；业务更新通常仍保留 |
| versionName | string | 必须：APK 版本名 | SDK 可省略；业务更新通常仍保留 |
| fileSize | integer | 必须为准确正数 | 可省略或 0；提供后会校验 |
| sha256 | string | 必须为正确的 64 位十六进制 SHA-256 | 可省略或空；提供后会强制比较 |
| downloadBackupUrl | string | 可选：同一应用、同一文件的本站副站地址 | 可选：同一文件的有效外部备用地址 |
| downloadEtag | string | 可选，建议传入 | 可选，不跨来源复用 |
| downloadVersionCode | integer | 可选：实际 APK 的正数构建号 | 可选：实际 APK 的正数构建号 |

URL 不含用户名密码或 fragment，文件大小上限 1 GiB。主副站地址不能跨 App slug。业务返回的 `versionCode` 用于更新顺序；`downloadVersionCode` 用于实际 APK 身份，两者不能混用。

本站响应示例（值仅为结构示意，接入时使用真实 health）：

json复制

```
{
  "hasUpdate": true,
  "releaseId": "business-release-42",
  "versionName": "2.0.0",
  "versionCode": 200,
  "downloadUrl": "https://download.csnas.asia/your-app/download",
  "downloadBackupUrl": "https://download1.csnas.asia/your-app/download?direct=backup",
  "fileSize": 16777216,
  "sha256": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
  "downloadProtocol": "APK_SERVICE_V40"
}
```

COS 响应示例：

json复制

```
{
  "hasUpdate": true,
  "releaseId": "business-release-42",
  "versionName": "2.0.0",
  "versionCode": 200,
  "downloadUrl": "https://cdn.example.com/YourApp-2.0.0.apk",
  "fileSize": 0,
  "sha256": ""
}
```

业务主地址从本站改成另一份 COS 文件时，清除旧来源的大小、SHA、ETag和本站备用地址；已有确切证明是同一文件时才保留对应身份。不能用旧 APK 的摘要阻止新的外链下载。

## 5\. App 调用 SDK

Flutter binding 初始化后创建一套由更新协调器持有的 SDK。下面的 P8P 配置用于 **1.1.2 正式源码**：

dart复制

```
import 'package:flutter/widgets.dart';
import 'package:ring_download_sdk/ring_download_sdk.dart';

WidgetsFlutterBinding.ensureInitialized();
final sdk = RingDownloadSdk(const RingDownloadConfig(
  appId: 'your-app',
  enableP2P: true,
  enableP8P: true,
  allowSharing: false, // 新 App 根据自己的授权策略明确选择
));

// response 是业务更新 API 已选定且用户已获准下载的响应。
final task = sdk.download(RingDownloadRequest.fromLifeRing(response));
final result = await task.completed;
await result.revalidate();
// 然后交给 App 原安装流程，检查包名、签名和系统安装授权。
```

`fromLifeRing` 是现有响应字段的通用适配器，不会访问 LifeRing 的接口或账号。新 App 可以按表映射同名字段；有不同命名时直接构造 `RingDownloadRequest`。SDK 不读取业务 `hasUpdate` 或替业务后台判断资格，宿主必须先完成这些判断。

稳定版 1.0.3 使用相同下载调用，但初始化时不传它尚不提供的 `enableP8P` 参数。SDK 的默认 `enableP8P` 是 false；LifeRing 的接入已显式开启。

只有外部 URL 时也可以：

dart复制

```
final task = sdk.download(RingDownloadRequest(url: Uri.parse(cosUrl)));
final result = await task.completed;
```

已有业务更新后台应使用 `download(request)`。`sdk.downloadLatest()` / `sdk.latestRelease()` 默认访问本站 health，适合业务明确允许下载本站公开最新版的独立入口；它们不能替代业务选源或账号规则。可使用 `config.resolveRelease` 保留业务查版入口。

## 6\. P8P SDK：多源协作下载

是否尝试本站加速，先由实际 URL 决定；是否使用 P8P，再由 SDK 配置、服务端 manifest 和每个来源的真实能力协商决定。业务后台不需要自己生成 `p8p=true` 或手工填写节点列表。

1. SDK 收到本站 URL 和完整文件身份，HTTPS 立即开始接收；不等待节点建连。
2. SDK 请求本应用的 manifest 和会话，核对文件身份并发现可用来源。
3. `enableP8P: true` 且服务端和来源支持时，使用 P8P 多源传输；不支持时沿用兼容路径。
4. HTTPS、B/C 常驻节点、服务端种子及符合条件的用户节点可以提供不同分片；每片校验后顺序落盘。
5. 节点不可用、超时或断开时继续可用 HTTPS 与已验证断点；分片成功仍不等于整包完成。
6. 整文件校验和公开任务 `completed` 成功后，宿主才能进入安装流程。

不是每次都需要所有节点参与，也不保证平均分配流量。来源获得一片数据后可能因速度、连接就绪顺序、文件接近完成或调度结果而不再取得更多工作。连接成功、发送字节、接收校验字节和最终文件结果分别记录。

新能力保留旧 App、旧 v1 节点和旧服务端的兼容路径。安装新版前的那次升级下载由旧 App 内的旧 SDK 执行；安装新版后才能使用新 SDK，不能据此声称旧用户下载本次升级 APK 已使用 P8P。

1.1.1 在 P8P 多源接管后，以有限退避补查晚到的同版本节点；最多追加 8 次查询，包含启动阶段最多尝试 2 个节点身份。晚到节点有独立连接期限，失败不阻断正在进行的 HTTPS 和种子下载，完成或取消会停止补查并收尾。纯 HTTPS 路径不额外等待节点；HTTPS 仍为两路，共享 4 个分片槽位，四路实验未纳入。

## 7\. 停电、COS 与主副站切换

| 情况 | 实际行为 | 谁处理 |
| --- | --- | --- |
| 本站在线，P8P 无节点或失败 | HTTPS 已经开始，继续可用 HTTP 来源 | SDK |
| 本站在线，主站下载链路不好 | 使用既有主副站下载逻辑；在线服务的 MAIN/BACKUP/COS 状态机继续工作 | SDK 和下载平台 |
| 本站停机，业务后台已选 COS | 直接 COS HTTPS，不依赖本站 health、manifest、会话、统计或本站哈希 | 业务后台选源，SDK 下载 |
| 本站停机，业务后台仍选本站链接 | 本站元数据与下载可能都不可用；SDK 无法凭空获得 COS 地址 | 开发者/运营修改业务主下载地址 |
| 业务后台也不可用 | App 无法取得尚未返回的版本和下载信息 | 业务方 |
| COS 403、过期或 404 | 业务侧刷新签名或修复对象，再重试有效 URL | 业务方 |

**LifeRing 当前授权后台不会在 health 失败时自动采用另存的 `cosDownloadUrl`。** 主字段仍选本站时，它返回 503 `app_upgrade_download_source_unavailable`；把 `customDownloadUrl` 改成有效 COS，下一次检查才直接下发 COS。新 App 必须明确采用管理员切换还是业务后台实现自己的自动选源，不能把填写备用字段当成已经自动容灾。

SDK 不新增第三个 COS 候选去读取下载平台 `fallback_url`。平台在线分流与业务后台独立 COS 是两个层级。COS 文件不依赖本站提供摘要：没有预期 SHA 时仍可下载；若提供了 SHA 则必须匹配。

已经拿到旧本站更新弹窗的客户端，需要重新取得业务更新信息，才能使用后台后来修改的 COS。业务签名地址过期时可通过 `config.refreshRelease` 重新取址；保持同一次发布和文件身份，文件已换则建立新任务。不要向跨域来源转发业务登录令牌或本站会话凭据。

## 8\. 任务、进度与安装

dart复制

```
final listener = task.progress.listen((p) {
  showBytes(p.receivedBytes);
  if (p.hasKnownTotal) showProgress(p.fraction);
});
try {
  final result = await task.completed;
  await result.revalidate();
  // 使用原有安装器，保持正式签名和包名规则。
} on RingDownloadException catch (e) {
  showFailure(e.code);
} finally {
  await listener.cancel();
}
// 用户取消：task.cancel(); 等待 completed 收尾。
// 更新协调器不再使用时：await sdk.dispose();
```

同一 appId 在同一进程只允许一个接收任务，重复点击回到已有任务。进度达到总大小仍可能处于校验中，UI 不得仅凭字节数宣告成功。HTTP 某一条流提前结束，也不能直接判定混合下载整体失败；看 `task.completed` 和最终收据。

SDK 保管断点、ETag 与文件身份，处理 HTTPS Range/If-Range 和有界恢复。取消保留可恢复内容，不能由页面另开下载器同时写同一文件。新地址或缺少可证明一致性的元数据时，不拼接不同来源的残片。

`verification` 区分 `sha256`、`sizeOnly`、`transportOnly`。`result.sha256` 总是完成文件的本地指纹；没有后台预期摘要时，它不是与发布者摘要比对的证明。`revalidate()` 检查文件完成后有没有变化，不通过本站补查元数据。

SDK 不自动安装、不处理账号授权、不判断灰度，也不保管签名密钥。1.1.2 的 `dispose()` 等待本地收尾、原生释放和有时限的回报，再关闭 HTTP；请等待返回再销毁对应资源。

需要本站安装统计的宿主，在已校验且允许安装后调用 `sdk.rememberInstallation(request)`；后续启动时将实际已安装构建号传给 `sdk.reconcileInstalledBuild(build)`。确认安装失败时调用 `sdk.reportInstallationFailure(request)`。启动安装器不算安装成功；这些可选统计不成为 COS 下载的前置条件。

## 9\. 前台分享与网络

通用 SDK 默认 false：`allowSharing` 由接入方明确选择。LifeRing 沿用已经开启的 `allowSharing: true`。新 App 若采用相同策略，也应显式传 true，并完成对应授权和说明。

实际上传必须同时满足：开启分享、App 前台、确认非计费 Wi-Fi、服务许可有效、数据已经校验。蜂窝可接收，蜂窝/计费/未知网络不上传。退后台或撤权立即停止新上传并关闭通路，回前台且网络允许时重新检查文件再恢复。SDK 不创建后台常驻服务，不保活到进程外。

dart复制

```
sdk.setSharingEnabled(true);  // 宿主明确开启
sdk.setSharingEnabled(false); // 撤销上传，接收继续
```

保持默认生命周期观察。选择 `observeLifecycle: false` 的宿主负责准确调用 `setForeground`。不要用开关开启或心跳在线代替“用户已经收到分享数据”的证据。

### 进程重启后的缓存恢复

`1.1.2`正式源码提供以下接口。先前版本仅保留当前进程中下载完成后的分享文件；`allowSharing: true` 本身不会在应用升级或重启后重新找到并注册缓存。

dart复制

```
// 宿主先恢复原下载收据、重新确认业务访问资格与用户的持久化分享选择。
await sdk.stopSharing(); // 立即撤销并忘记旧缓存，接收继续
sdk.setSharingEnabled(true);
final admitted = await sdk.restoreSharing(authorizedRequest, cachedApkFile);
```

`restoreSharing` 只适用于本站已授权的具体APK，重新取得匹配的manifest并只读验证完整SHA和各分片，不下载APK正文、不安装。返回true表示接纳已验证的分享意图，实际上传仍受前台、网络及服务许可约束；false表示未接纳。旧账户或旧文件的分享意图应先通过`stopSharing`清除，再开启新的已授权分享，避免开关开启时先恢复旧缓存。禁止用本地计算的SHA替代发布方摘要授权；外部COS不走此接口。

`1.1.2`的手机轻量分享策略：Android仅在明确前台、非计费Wi-Fi、资源已知且允许时分享；低于30%电量、省电、健康异常、40°C或系统中度热状态暂停，恢复使用32%/38°C迟滞。手机进程共享一个接收方和正文256KiB/s预算，最多256KiB突发；该预算不包括信令、协议头或SCTP重传。新接收器读取手机的单片容量建议，wire max\_inflight仍为4，旧v1保留。完整范围和未验证边界见 [手机分享方案](https://gitee.com/cai-chunshuang/app/blob/codex%2Fp8p-development/docs/mobile-sharing-20261030.md)。

手机的限速P8P分享要求接收端在hello明确确认支持单来源容量建议（1.1.2支持）。旧P8P接收器在读取文件或发送正文前被拒绝，沿用原有其它来源及HTTPS回退；旧v1单片路径保留。B与服务器不采用手机限速，新接收器的可选确认字段兼容当前生产解析器。不能为两个1MiB片的排队延长原8秒期限。

## 10\. 诊断、统计与排错

查本站公开更新时直接使用 `health` 返回的版本名、`android_version_code`、大小、SHA 和主副地址；不必再读取 APK 的 ZIP 尾部或 `AndroidManifest.xml` 来确认同一份发布信息。SDK 下载路径自动使用稳定的随机安装标识和下载会话；其他库自行发送的小范围 GET 不由 SDK 代管。

如果额外的远端 APK 检查器既不提供稳定安装标识，也不保留服务端 Cookie，每个 Range 请求都可能建立新下载会话。即使只读几十字节，也可能占用同一出口 IP 的会话配额，影响随后真正的 HTTPS 下载；同一网络的其他设备也共享该 IP 配额。优先移除重复 APK 查版；确有独立检查需要时，让该检查流程保留自己的随机安装身份或 Cookie、同一文件身份及有效会话，不用账号或硬件标识替代。外部 COS 不附加本站专用头。

HTTPS 正文为 0 B 只说明本轮未回报有效正文，不能单凭它判断 SDK 未启动 HTTPS。核对客户端请求错误、下载来源和后台“429 来源统计”：`ip-window` 是新会话配额，`duplicate-in-flight` 是重复区间保护，Nginx 并发限制另行分类。按时间和应用核对，不把同一 IP 当作同一安装的证明，也不通过生成新身份、立即重试或切换来源绕过配额。

先看最终文件成功/失败，再看来源、连接和发送量。服务端已发送、接收端已校验、HTTPS 消费与最终结果是不同口径；混合来源下载中不要求某一条 HTTPS 流单独传完整 APK。

`config.onDiagnostic` 返回固定阶段、原因码、状态码、字节数和耗时，不含 URL、会话令牌、SDP 或 ICE 地址。`inspect()` 是本机能力快照，不证明 NAT 打洞成功。管理员后台沿用下载、节点和统计，来源明细区分 v1/P8P；历史没有记录的字段显示“未记录”。

P8P `1.1.2-dev.4` 起，`transfer/piece_checksum_mismatch` 等接收错误会在清理缓冲和关闭通道前记录固定首因；`request_deadline_exceeded`、`request_cancelled`、`stop_grace_exceeded`、`source_completed` 和 `source_stopped` 分别描述请求与来源收尾。字节字段是单片正在确认的正文范围，不是网卡流量或整包成功证据。`source_completed` 表示整期因文件完成而收尾，不表示该单一来源独立交付了全部文件。正常成功收尾后的 `channel_closed` 仍可出现，不能脱离首因逐条判为网络故障。诊断观察器抛错不会改变传输、取消或物理关闭。

`1.1.2-dev.5` 仅调整现有 P8P 发送队列水位：Android 分享以 2 MiB 为有界目标、1 MiB 为续发低水位；共享节点发送器使用 4 MiB 高水位和 2 MiB 低水位。帧、窗口、请求期限、三秒排空预算、取消和物理停止规则保持不变。更高的在途缓冲有助于高延迟链路持续供包，但不代表任何网络都能达到链路理论速度。

| 现象 | 优先核对 |
| --- | --- |
| COS 下载也等待本站 health | 后台和宿主是否错误地统一调用 health；是否用了 downloadLatest |
| invalidRequest / invalidMetadata | 本站 slug/path、大小、SHA、releaseId、版本是否来自同一份 APK |
| 目录里没有自己的应用 | 管理员是否已创建并启用；查看的是当前官网在线目录，而非以前下载的 Markdown |
| release\_not\_available / 等待首个可用版本 | APK 是否已正式发布；仅上传为候选不算发布 |
| application\_package\_conflict | 两个启用应用是否错误使用同一个 Android applicationId；管理员先解决冲突 |
| appId 或 URL 不匹配 | 从目录复制自己的 slug；不能把用户 ID、业务 releaseId 或包名填进 appId |
| 新版没有 P8P 流量 | 实际 SDK 版本、enableP8P、URL、服务端及来源能力、真实节点状态 |
| 只有一个节点或只收到一片 | 看具体调度和接收校验记录，不能由节点数推算必须平均出流 |
| 显示已收完却报失败 | 是否把 HTTPS 子流、P2P 结果或进度 100% 当作整包结果 |
| 升级 APK 无法安装 | 文件收据、Android 包名/签名、实际构建号、系统安装授权 |

## 11\. 联调和交付验收

App 开发者与后台开发者共同交付：SDK 版本/固定提交、appId、两种来源的脱敏业务响应、主链接修改方式、COS 签名刷新策略、App 下载入口与安装结果。

| 用例 | 必须观察的结果 |
| --- | --- |
| 本站 \+ 可用 P8P | HTTPS 立即有真实进度；记录实际 P8P 来源，整包校验和安装通过 |
| 本站 \+ 节点不可用 | HTTPS 可完成，不等节点才开始 |
| 本站停机 \+ 后台主地址改成 COS | 更新 API 返回 COS；下载全程不请求本站 health/manifest/session，安装通过 |
| COS 无 SHA/大小 | 可下载，收据明确校验级别，不强行查询本站 |
| 后台提供错误 SHA | 拒绝该文件，不能为通过而关校验 |
| 中断、取消和重新下载 | 无双任务/双写，按可验证身份恢复；重入和退出不遗留资源 |
| 前后台与 Wi-Fi/蜂窝切换 | 下载按实际网络恢复；后台、蜂窝和计费网络不上传 |
| 旧版升级新版 | 旧版能下载并安装签名一致的新包；新版更新入口和 SDK 再独立验证 |
| 统计 | 混合下载完成正确，HTTPS 子流不完整不被误判为整包失败 |

无业务后台的公开更新接入还需验证：首次启动、同构建不同 SHA、远端更旧、取消安装后重启、构建号缺失和 health 超时。前两者不能造成重复升级，取消安装后仍应能提示真正的新版本；查更新不可用不能阻塞主业务。公开查版模式没有业务 COS 下发入口时，不把“本站停机仍可取得新版本”列为已具备能力。

SDK 1.1.2 正式源码版已发布。上面的清单用于新 App 接入验收；实验室验证不能替代宿主的业务授权、签名安装和目标网络检查，不据此推算固定提速倍数或公网成功率。

本版完整559项SDK回归通过后，又针对限速等待中的漏报网络变化和首次缓存能力心跳补查；最新整条P2P141项及宿主41项通过，计数重叠，不累加。平板实际RTC分享155305939字节，整包SHA通过；正式版本与最终候选的传输代码一致。完整输入、手机限制、旧端边界和未测范围见源码`validation/release-1.1.2.json`。正式App、SDK、服务端和官网归档分别核对，不追加未经要求的长期耐久或固定提速承诺。

## 12\. 底层接口与维护

使用 SDK 的 App 不需要手写 manifest/session、ICE、DataChannel、分片或更新事件协议。需要自建下载器或服务端联调时，阅读 [平台接口参考](https://download.csnas.asia/static/app-update-integration-guide.md)。SDK 提供公开 API，内部 `src/` 不是接入方依赖契约。

业务后台请求 health：`GET https://download.csnas.asia/api/app/{slug}/health`。SDK 自动处理本站 `/api/app/{slug}/p2p/manifest`、会话、发现、信令、流量和结果接口。新 App 使用自己的 slug，不复制 LifeRing 专用地址或账号。

遇到问题提供：SDK 固定版本、App 版本/构建号、时间、已脱敏的业务响应、实际 URL 来源类型、网络类型、固定诊断码、任务最终状态和文件收据。签名 URL 的查询凭据、会话令牌及账号凭据不要贴进公开日志。SDK 源码许可与第三方通知随版本保留。

Ring Download · 文档更新 20261030-sdk112

[SDK](https://download.csnas.asia/sdk) [接口参考](https://download.csnas.asia/docs) [Markdown](https://download.csnas.asia/static/ring-download-sdk-guide.md)
