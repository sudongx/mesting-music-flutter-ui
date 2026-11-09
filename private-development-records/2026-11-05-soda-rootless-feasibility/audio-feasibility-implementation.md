# 汽水官版音效的独立接入边界

时间：2026-11-05。只读静态分析；未修改 Mesting 产品源码，未加载或执行官版库，未使用手机、ADB 或账号。

## 结论

**未解 BL 本身不阻止 Mesting 在自己的进程内处理自己的 PCM。** 此次样本的音效链可收敛为应用内 Java/JNI/原生 DSP；没有从这条已查看路径发现必须向官版进程注入或使用 Xposed 的调用。这个结论是针对已分析链路的推断，不是普通手机实际运行验收。

**官版 DSP 有可继续实现的技术落点，但当前尚未接通，也不能声称全套官版音效可用。** 已找到桥、原生依赖及 14 份本地效果图。接入还需要准确配置映射、PCM 格式适配、原生加载和销毁验证，以及实际设备输出比对。服务器下发的新效果、账户资格、AudioX/SAMI 的其他实现不因这些基础图而自动成立。

Xposed 模块修改 CommerceInfoRepo 的本地权益数据，和真正对 PCM 进行处理是两个不同部分。将模块里的“免费”字段复制到 Mesting 不会自动获得官版引擎、真实服务端权益或效果输出。

## 已观察的代码与原生关系

官版 APK：`official-android-latest.apk`，21.5.0/code100215040，SHA256 `b639e67c13e03377f0f9d8068c5e0419b1acd42c7d529362f11ae704b3838741`。

| 层 | 证据 | 已观察到的行为 |
| --- | --- | --- |
| Java 处理器 | 父 REA `ev_8d72fb44ea832f6adcd74853a689a8c832a1a865358704eb418bfb30f145352e` | `AudioEffectProcessor.audioProcess` 按 enableProcessor/hasEffect 创建句柄和缓冲，将 ByteBuffer[]、采样率、样本数、声道、格式交给桥。 |
| 配置更新 | 父 REA `ev_da3b5dac40e3d278439e966a9b53e32381cda23f428b752a363810c08f050eb5` | `n(effectConfig)` 调用 `isValidConfigJson` 校验 JSON，再设置配置和淡出/强制重置标志。 |
| 加载桥 | 父 REA `ev_34e2bce914953eac8e46553a8fb9d5347b970c50baab77d767d397a1c08cd35c` | `<clinit>` 加载 `audio_effect_bridge`，另有宿主优化加载与 hotfix 包装。 |
| JNI 静态匹配 | 本次 REA 父 `ev_381bd53839b91812da23c253a56978a7234c834a5eb52c42208147ba93164e4e` | 原包 21 DEX 的根 native 声明中，Bridge 的 7 个方法都在选中的 arm64 桥库中匹配到名称导出。 |
| Native 操作 | `audio-native-static/bridge-selected-disassembly.txt` | `createEffectHandleByConfig` 调用 `EffectCreate` 和 `EffectCommand`；`processAudio` 调用 `EffectGetProcessBuffer` / `EffectProcessBuffer`。 |

7 个 JNI 方法分别为 createAudioBuffer、createEffectHandleByConfig、isValidConfigJson、operateFadeIn、operateFadeOut、processAudio、release。完整 JVM 类型描述符、导出地址、匹配边界保存在 `audio-native-static/audio-jni-evidence.json`。静态匹配覆盖库中的可见导出；重定位/运行时表扫描仍为 partial，不能推断全部动态绑定或实际调用成功。

## 最小原生依赖

| 文件 | 字节 | SHA256 | 非系统 DT_NEEDED |
| --- | ---: | --- | --- |
| libaudio_effect_bridge.so | 34848 | d1721a8a9032b31e0857f692e15dedc8b5003486cfb070d519d9808a2100dbfd | libBYTE_AUDIO_TUNER_CAPI_LITE.so、libc++_shared.so |
| libBYTE_AUDIO_TUNER_CAPI_LITE.so | 632728 | 6809019c6e9436a1770873030fbec9fa94686802cd84ecfe52e5312e36bda36c | libc++_shared.so |
| 官版 libc++_shared.so | 911696 | e8373ee43274541efd2d34fe0588d55bf953612e1417ad47cfd2c4bd1aa383d0 | 无；声明依赖仅 libc.so/libdl.so |

桥和 tuner 其余声明依赖仅 liblog/libm/libdl/libc 等 Android 系统库，C++ 运行库只声明 libc/libdl。tuner 的导出包含上述 EffectCreate/Command/ProcessBuffer/Release 等桥所用符号。这能收敛静态依赖，不是完成 Android 加载或符号版本兼容验证。

**纠正名称推断：** 7,722,648 字节的 `libaudioeffect.so` 不是此桥的直接 DT_NEEDED。不能仅因名称相近就强制把该大库视为基础效果引擎的必需项；也不能据此否认官版其他功能使用它。

官版此次 APK 的全部 lib 成员仅 `arm64-v8a`。Mesting 1.0.61 包未包含 `libc++_shared.so`，但这不证明与现有 SDK、打包规则或设备兼容。Mesting 原有双 ARM 交付不能被此样本缩为 arm64；本次没有找到可用于 32 位设备的官版引擎，32 位应明确不支持该官版 DSP。

## 本地效果配置

所有 APK 成员名称中，按 audio_effect/audioeffect/sound_effect/byte_audio_tuner 搜索，仅命中一张 sound-effect PNG；**这一名称搜索本身不能证明没有配置**。随后对全部 21 个 DEX 的字符串表扫描，找到 14 份完整 `chains` JSON，均在 classes6.dex，string_index 59385～59398。原始索引、string_data_offset 与完整 JSON 分别保存在 `native-dependencies.json` 和 `embedded-configs.json`，属于字节位置证据，不是配置调用或生效证据。

其中的节点图包括 equalizer、gain、limiter_lookahead_sig、stereo_width、env_acoustic、fir_filter、fdn_reverb、circle_360；有一份更通用的图还包含 distortion/lite_reverb，**不能仅凭 JSON 字段就承诺此 lite 引擎支持所有节点**。tuner rodata 确实出现 EQ/DRC/立体声宽度/FIR/限幅/FDN 混响等名称和配置错误日志，但仍须由实际 JSON 校验和 DSP 输出验证支持范围。

已定位需要后续聚焦的类：

- `com.luna.biz.playing.common.config.effect.DefaultAudioEffectV2`
- `com.luna.biz.playing.common.config.effect.DefaultAudioEffectConfig`
- `com.luna.biz.playing.common.config.effect.AudioEffectSettingsConfig`
- `com.luna.biz.playing.common.config.effect.preload.AudioEffectLoader`

这些类在 classes6.dex。此轮为避免和手机号工作并发 JVM，未重新启动 JADX，故尚未把每份 JSON 与官版可见名称、默认选择、远端覆盖以及资格检查绑定；不得给它们随意贴“蝰蛇/超清/空间”等显示标签。

## Mesting 的接点与必需的实现约束

现有 `third_party/just_audio/package/android/src/main/java/com/ryanheise/just_audio/AudioPlayer.java` 在 buildAudioSink（约794行）已构造 DefaultAudioSink 并观察真实 AudioTrack，适合在现有播放器的同一解码链内加入受控 AudioProcessor。当前代码没有官版音效处理器，现有 Android Equalizer 也不能冒充汽水 DSP。

桥 `processAudio` 的已查看反汇编用 GetObjectArrayElement/GetDirectBufferAddress 获取逐声道缓冲，按 4 字节样本交错拷贝到引擎缓冲，处理后写回逐声道缓冲。结合现有的 convertPlanarToInterleaved/convertInterleavedToPlanar 符号，推断其接口为 planar float PCM。**Media3 默认的 interleaved PCM16 不能原样传入此接口。** 尚未用实际采样验证格式约定，也未把最后的格式参数当作可靠自动转换承诺。

建议的解耦边界（仍为实现建议）：

1. `OfficialEffectAvailability`：ABI、库加载、原生版本、配置校验、支持格式。加载/校验失败显示真实不可用原因。
2. `OfficialEffectSession`：单一播放器所有权，句柄生命周期、采样率/声道变化、效果切换、flush/reset/endOfStream/release；所有权撤销立即停止旧配置。
3. `OfficialEffectProcessor`：PCM16/float 格式转换、planar 缓冲复用、有限块处理、峰值/非有限值处理和确定的原样旁路，避免播放线程分配和崩溃。
4. `OfficialEffectCatalog`：只暴露已映射并经原生校验支持的配置；服务器和本地权益状态与 DSP 能力分开。

采用自有 JNI 包装直接调用 tuner C API，可避开复制官版热修复/日志/宿主加载框架；也可用确切类名的最小 Java native 声明复用桥导出。两条都是候选设计，未执行验证；不能为了绕过账户资格而改写伪造权益。

必要验收：ARM64 Android 进程真实加载、有效/无效 JSON、正弦/脉冲 PCM 输入输出、格式/声道/采样率变化、flush/切歌/暂停恢复/切平台释放、长播放无泄漏和实机听感及失真对比。先用公开/自生成 PCM 做可控 DSP 核对，不能把主机静态分析或系统均衡器成功当作官版效果通过。

## 仍未知

- 各 JSON 在21.5.0中的实际显示名称及覆盖规则、哪些效果有远端资源或账户条件。
- 官版原生库在 Mesting 包名/签名/进程中的加载与实际处理是否接受；没有基于字符串缺失宣称“绝无鉴权”。
- 效果资源的独立交付接口和可复用授权条件；未将官版 APK 内容加入产品源码或交付包。
- 32位官版库；本样本只有64位。
- 所有可见音效是否共享此基础桥；AudioX、SAMI 或其他硬件音效不在本轮闭包承诺内。

证据已导出并用 reset_investigation 保存检查点清空本 worker 的 REA ledger；未保留 native/JVM target。
