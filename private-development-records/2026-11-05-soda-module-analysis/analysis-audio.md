# 音效静态分析子报告

## 范围与结论

目标为 `C:\Users\zyt\Downloads\base.apk`，SHA-256 `7bf0af3ef1dfeaedff3a8c1a24216a3e1d2cdab8c8dda5581860f5f1660266fb`，仅静态读取；未安装、启动 APK，未访问手机、ADB、账号或网络接口，未修改 Mesting 产品。

已识别的音效机制是 **Xposed 拦截宿主本地权益 JSON，并修改音效的可用阶段和到期时间**。同一组 hook 还修改会员显示、音质请求及下载等本地判断。没有在这条音效链中发现模块自己的均衡器、滤波、重采样或 PCM 处理实现；不能把本地权益改写称为服务端会员变更，也不能据静态代码宣称所有效果已实际生效。

## 精确类名约定

为便于阅读，下列前缀和短名均完整定义，编号对应 `jadx-static/classes.tsv`：

- `CF` = `com.window.hook.cF4mN1zR9oP5yX8bP0aD3eG6iJ7lT2uW4xZ1cE5fH8kL3mO6pQ9rS2vY5zA8bC1dF4gI7jK0`
- `E` = `eH6oP3bQ1rS7aZ0dR2cF5gI8kL9nV4wY6zB3eG7hJ0mN5oQ8sT1uX4yZ7aC9dF2gH5iK8l`
- `P` = `pS7zA4mB2cD8lKbO3qR6tU9vW0yG5hJ7kM4pR8sU1xY6zA9cE2fH5iK8lN0oQ3rS7tV2w`
- `A` = `aF2kL9xP7mQ3wV6zN8yB1cE4gH5jR0sT2uX9vZ3aC6dF8gI1kM4nO7pQ9rS2tU5wX8yZ0b`
- `H` = `hK9rS6eT4uV0dC3gU5fI8jL1nO2qY7zB9cE6hJ0kM3pQ8rT1vW4xZ7aB0dF3gI6jL9mN2o`
- `M` = `mP4wX1jY9zA5iH8lZ0kN3oQ6sT7vD2eG4hJ1mO5pR8uV3wY6zB9cE2fG5iK8lN0oQ3rS7t`

因此音效主类为 `CF.P`（035），回调为原始 DEX 类 `CF.P$A`。JADX 展示名把 `$` 变成 `.`；此处保留原始内类分隔符避免混淆。

## 开关与注册链

在 `CF.E$E.beforeHookedMethod(MethodHookParam)`（024，JADX 内类别名 `C0013eH…`）中：

| 开关 | 默认值 | 调用链 | 来源 |
|---|---:|---|---|
| `function1` | true | `m778(Object)` → `CF.H.M(LoadPackageParam)`（027 的 M 方法） | `decoded-static/024.java:2721`、`:2666`、`:1967` |
| `function2` | true | `m776(Object)` → `CF.P.A(LoadPackageParam)`（035 音效/会员组） | `decoded-static/024.java:2692`、`:2662`、`:1859` |

这里 027 是 H 类，M 是方法名；032 恰好也有一个名为 M 的类，不应混淆。该 032 类通过另一包装器 `m781` 调用，不能把它当成 `function1` 的上述直接映射。

控制流扁平化分支用独立整数计算核对：`hash("ۥۦ۠") = 1752671` 对应 `m778`，`hash("ۥۣۨ") = 1752586` 对应 `m776`。这些是对字面数据的纯计算，未执行目标代码。

Evidence：

- `ev_0a9b10976498d7b4229d4270892f9a5d32fb9efd0f218607329933fa18dfdc2b`：024 内类 `beforeHookedMethod`。
- `ev_a3585862dd6c78cb0e8ceeba5f6393a535503085c759fd281376ca0531cc6709`：`m776` 转调 035。
- `ev_0e938c832fd729d3c021e15699edc8b3a00ca9c1ddd0b0c2fd80595768869db8`：`m778` 转调 027 的 M 方法。
- `ev_2746853dcb716edcd4f013a9d99fa639d21bc0145e8c1e8f314de96727cf2e4c`：035 主方法的直接引用只有一个 using node，即 024 的 `m776`；DEX invoke offset 33、method index 2122。静态引用覆盖不包含反射运行时调用。

## 音效 JSON 改写

`CF.P.A(LoadPackageParam)` 注册对宿主 `com.luna.biz.entitlement.core.commerceinfo.core.CommerceInfoRepo.j(kotlin.jvm.functions.Function1, java.lang.Object)` 的 hook；回调为 `CF.P$A`。

- 绑定线索：`decoded-static/035.java:5047`（CommerceInfoRepo）、`:5226`（方法 j）、`:4608`（Function1）、`:5198`（hook 调用）。
- 回调 `CF.P$A.beforeHookedMethod` 读取 `args[1]`，只有它是 String 才调用字符串改写器，然后覆盖同一参数：`:1766`、`:1785`、`:1789`。原始参数并非 PCM 音频或效果器对象。
- 改写器是 `CF.P$A.A(java.lang.String): java.lang.String`，用 `new JSONObject(str)` 解析，最后 `JSONObject.toString()` 返回；解析异常返回原字符串（`:250`、`:1112`、`:246`）。

在存在相应节点时，改写器沿以下路径操作：

| JSON 路径/字段 | 静态写入行为 | 关键来源行 |
|---|---|---|
| `benefit_base.audio_effect.audio_effect_detail[*].stage` | 写为 `free` | 035`:1398`、`:757`、`:758`、`:350`、`:711`、`:575`、`:576`、`:375` |
| 同一明细的 `expire_time` | 写为当前 Unix 秒 + 3153600000，约 100 个 365 天年 | 035`:251`、`:483`、`:1444` |
| `membership` 中会员字段 | 本地 `membership_type`、`vip_stage`、`last_membership_type` 改为 `svip`，会员/付费用户布尔值为 true | 035`:927`、`:1150`、`:822`、`:505`、`:1476`、`:961` |
| 本地会员到期/标签 | 到期时间改为 9999 年末，标签文本为 `WinHook` | 035`:1067`、`:1141`、`:770`、`:1401`、`:563`、`:1239` |

后两项解释会员入口为什么可能呈现“已解锁”；它们并不证明服务器账户已经获得权益。该函数也含 `quality_list`、`download`、`activity_config` 等分支，属于同一权益对象的本地修改。

Evidence：

- `ev_ca1ffc2224a43002eb8dfd35f172b8c6e1e6e99a2839594916560e72c368a150`：035 类/成员元数据。
- `ev_1ea1fa6ecf2e931657a8f388a24da983cae4e5172625a7b47a904f6e2c09f1ea`：035 主 hook 注册方法。
- `ev_8aa1d442a3e32428cce06511ee1bfd442ce6520d0a9fdb9a81bce19ba93caa1e`：035 内类 `beforeHookedMethod` 参数覆盖。
- `ev_c15da6f5e276dc24a627a08a8b2a80eac6b16bf6f54b7d521312c7eabcedef3a`：035 内类 JSON 字符串改写方法。
- `ev_7e8958abd0a79dd536bbc10d0e0f48d671b77418b486603479e479f2bb4cc6a6`：035 内类短数组的 smali 静态初始化。
- `ev_13b88779406ba7c54ebd5b11ab8faa9e457dca1b708032ee44857aea4e602119`：`m1092` 读取 MethodHookParam.args。
- `ev_2fc326b00345825a558ff32fec23e0c4550f7cef3c68a9cba1c4ca9652be7461`：`m1093` 转调 JSON 改写器。
- `ev_5964fb9b07712e63c4e2a5211edb63c6cb99f4ab72f921880bc99eded3574747`：`C0011.m663` 是 `JSONObject.put(String,Object)`。
- `ev_6638c152bca6501699ad49bb37d36304c8ace8b02ad798a020ee62dda58d0318`：`C0023.m1401` 是 `JSONObject.put(String,long)`。
- `ev_2cf177087f8e32dfee993808f3986bad46a05b4eb7668b16dec8b348c538eed2`：`C0011.m666` 是 `System.currentTimeMillis()`。
- `ev_dbc49c250a3dcb6c2c83f36b276794d5a6fb794b4781beae88fdf5b7313a00b7`：`C0011.m693` 是 `JSONObject.has(String)`。
- `ev_f0ced5443e40274a3ee9d65c85a342e35d1dcae3f89935787f9ee59efd7dbae6`：`C0001.m222` 是 `JSONObject.toString()`。

## 音质旁支与实际 DSP 的区别

同一个 035 主类还为宿主 `com.luna.biz.playing.player.mediaplayer.OnlineSource` 的构造器注册回调 `CF.P$bE3…`，其 `beforeHookedMethod` 根据 `AudioQualityConfig.p.value.label` 选择宿主 `Quality` 枚举，并写入构造参数 `args[8]`（035`:4509`、`:4696`、`:4885`、`:5194`、`:1894`、`:3341`、`:3350`）；读取配置异常的 fallback 为 `lossless`（`:1904`）。这属于让原播放器选择某种资源/音质的本地请求修改，不是本模块实现新的 DSP。

在已识别音效链中，输入/输出是权益 JSON、布尔/枚举/数字与反射调用。对 DEX 的 3944 个裸字符串进行有界扫描没有发现 `AudioEffect`、`Equalizer`、`BassBoost`、`Virtualizer`、`Reverb`、`AudioTrack` 或 FFmpeg 等直接标识；该阴性结果本身不排除混淆、反射或宿主自己的处理器。所有内联短数组的关键词筛查结果另存 `audio-keyword-scan.json`；其中 016 中三字母 DSP 命中落在不成词的解码串中，未作为 DSP 证据。

合理推断是：如果宿主用上述本地权益决定能否选择音效，那么改写可能使原有音效入口/阶段可用，实际处理仍由宿主原有播放和音效系统负责。这是推断，不是已观察的运行结果。

## 未知与限制

1. 未验证宿主具体版本的混淆方法名/签名是否匹配，hook 是否成功安装，或是否还有服务端与设备层二次检查。
2. 未验证音效是否实际改变输出波形、哪些音效真正执行、效果质量、延迟和稳定性；没有听音、录制、PCM 比较或运行时调用证据。
3. 未证明服务器会员、下载/高音质权限或余额改变。JSON 的 `free`/远期到期值只能证明本地字段被写入。
4. Java 导出保留 JADX 控制流扁平化警告；字符串解码按静态 int 初值进行，原字段在混淆分支中可变，不能把解码文本当成原源码或运行成功保证。
5. 早期疑似核心类 `aF2…aF2…` 实际为 PackageManager flags 兼容包装；并非音效核心。两处同名顶层/内类造成 JADX 歧义，故最终音效结论只使用已选定 035 类和内类的明确证据。

本子报告已回答静态实现机制；运行生效、服务端接受与实际 DSP 输出保持未知。REA 本子任务账本与主代理隔离，完整证据交付在 `evidence-audio.json`，退出前检查点在 `evidence-audio-checkpoint.json`；由主代理合并最终报告。
