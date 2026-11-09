# 官版一起听累计时长与 REA 配置核对

日期：2026-11-01。范围：只读静态调查；尚未修改产品源码、构建下一版或访问手机、ADB、真实账号、music 后台。

## 已核对的来源

- 腾讯应用宝的网易云音乐分发页：https://sj.qq.com/appdetail/com.netease.cloudmusic 。移动分发页：https://a.app.qq.com/o/simple.jsp?pkgname=com.netease.cloudmusic 。下载的 9.6.15 / 9006015 APK 共 224823452 字节；MD5 与分发元数据一致。
- 原 APK SHA256：`e6427bcb35ccd9e8858ee55c46ec3db56b2f09871adcd8e897244d96cfcf7894`。SDK apksigner 验证签名；证书摘要与主体保存在 `apk-certificate.txt`。未安装或运行。
- 原 APK 使用 Android SDK apkanalyzer 获取 smali。REA 对完整 APK 超时后，使用仅包含原始 manifest 与原始 classes17.dex 字节的派生静态分析载体；原包未改动。成员摘要和派生文件摘要见 `derived-module-provenance.json`。此载体不代表完整 APK 分析，也不是可交付安装包。

## 观察与判断

1. 原 APK `va0.u0$p.f()` 查询 `listen/together/relation/statistics/get/v2`，参数包含当前 `roomId`，以及顺序为 `[好友ID, 当前登录账号ID]` 的两个数值型 `roomUserIds`。响应 `data` 分别读取 `listenCount`、`duration`、`totalConnectionTime`、`currentConnectionTime`。证据：`official-history-request-lambda.smali.txt`，请求方法自第 256 行起；`official-statistics-task.smali.txt` 与 `official-statistics-request.smali.txt` 记录调用链。
2. Mesting 当前控制器只传 `[peer.id]`，路由把它编码为数值 JSON 数组。这是已确认的请求契约差异，极有可能影响双方关系统计的完整性；尚无该真实账号的服务端响应，不能把它称为已验证的唯一原因或已经解决。源码位置：`lib/features/music_platform/netease/together/netease_together_controller.dart` 的 `_refreshPresence`；现有 `test/release_133_together_totals_test.dart` 还断言了单个好友 ID，不能证明与官版一致。
3. 官版 `playpage.l4.c()` 的累计展示读取 `totalConnectionTime`；`y6.k()` 存在本次展示读取 `currentConnectionTime` 的分支，另有配置选择累计/本次的界面。两者不可互相回退。REA 累计展示证据：`ev_edbafc24a82ca614b5f40255baf29df838cd73e0409c2a967e92973fa9a9e033`。SDK 证据：`official-format-l4.smali.txt` 第 1233 行、`official-format-y2.smali.txt` 第 1029 和 1041 行。REA 本次展示证据：`ev_979b5c816d8c263c89b344f95f7e3508c6db4b944bb8243853381cacff82ed36`。
4. 官版 `playpage.r` 在内存统计上按分钟递增 total 与 current 两个字段，按照已有秒数对齐下一分钟，不在这段时钟中检查歌曲播放状态。它是界面续算机制，不能在进程被清理后继续执行。REA 证据：`ev_38b8c3e19806dccec79d00ee852fc02acec0c9a425bf558c0813f3ac070d71e4`（递增）和 `ev_15aaef289e022f22304a7133b1a9af892bf5a678fceca4ca2a9e1c2bc1cafc3f`（分钟对齐），均为原始 classes17 模块的静态派生证据。SDK 完整原包对应证据：`connection-time.smali.txt`。
5. 官版同一房间收到零值时保留之前的 total/current。REA 证据：`ev_403ba07be803ebffd85cb732b12a69e218fcdfdc2e893f54fbb86139365c447d`；SDK：`StatisticsChangeMsg.smali.txt`。不能将这个规则扩展成跨账号、跨好友或跨房间累加。
6. 用户观察到“一方未退出，即使清后台仍累计”。客户端时钟不能证明服务端具体结算规则；合理方案是恢复房间时重新取官方双方累计快照，以平台值为准，不按 Mesting 进程存活时间重建官方历史。尚未查看该真实账号的 15788 小时 53 分钟响应，也未进行双方退出/清后台实测。

## 已完成的工具配置

- REA 保持已有 6.4.0，无升级；下载官方固定 JADX headless MCP 0.7.1。JAR SHA256：`6e5eacf500b64292bfb73c49797c1958f6ee44646e43e868039ae7feb573ff75`，与 GitHub release asset digest 一致。来源：https://github.com/1013503897/jadx-headless-mcp/releases/tag/v0.7.1 。
- JAR：`D:/CodexCache/rea/jadx-headless-mcp/0.7.1/jadx-headless-mcp-0.7.1-all.jar`；复用已有完整 JDK17：`D:/CodexCache/android-build/jdk/jdk-17.0.20.1+1`。
- 仅在 `C:/Users/zyt/.codex/config.toml` 增加 REA 专属环境变量（JAR、JAVA_HOME、3072MiB 堆）。配置备份：`C:/Users/zyt/.codex/config.toml.rea-jadx-20261101-200616.bak`；其他解析后的配置保持一致，未输出凭据。
- 当前会话使用自有隔离 REA MCP 子进程验证，已成功返回模块级 package/class/method Evidence。没有重启 Codex 或其他用户进程。整包超时与部分混淆类名清单冲突保留为工具限制；相应请求仍用完整原包 SDK smali 核对，没有把 SDK 输出冒充 REA Evidence。

## 待用户确认的实施方案

准备 1.0.34 / code55：按官版同时传双方 ID；按账号/好友/房间隔离官方累计快照；以官方 total 为已包含本次的累计基准，仅续算快照之后的间隔，重取时替换而不相加；进入/恢复房间主动重取，避免清后台丢失本地计时造成从零开始；同房间短暂零值不冲掉已确认累计，缺失/错误明确提示。补齐真实线协议、长时累计、刷新不重复、好友/账号切换、恢复和零值场景的主机测试，准备原签名本地包与验收材料。真实账号与官版数值对齐仍需用户自行验收。本轮不扩大到结束私信记录问题。
