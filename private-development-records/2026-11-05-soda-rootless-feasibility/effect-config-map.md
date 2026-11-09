# 汽水21.5.0：音效配置映射、默认链与PCM契约

2026-11-05；接续 `audio-feasibility-implementation.md` 的离线静态调查。本轮已解决先前报告中“14份本地JSON的名字未绑定”和“Java建句柄参数未精确核对”的问题。没有修改产品、加载SO、使用手机/ADB或操作账号。

## 样本与证据范围

- 原包 SHA256：`b639e67c13e03377f0f9d8068c5e0419b1acd42c7d529362f11ae704b3838741`；com.luna.music，21.5.0/code100215040。
- DEX6分析载体：`phone-analysis-only-dex6.apk`，SHA256 `7e9a17e1f431d3c70c307953e89678fafd4edd0c14d121fd26206e418ea43d35`；只保留原manifest、resources.arsc和classes6.dex，成员字节未改。DEX6 SHA256 `3c4ea3713c6aa50f6883f54d87ef667354fd1f9dc6bf8f5154ab0adc9c5bc19c`。
- DEX4沿用原分析载体和已有来源记录；SHA256 `4a0e79a2fd7a70e4a7be401959375f6113bb273b1652cfb636ef4fef17c7b402`。
- 子集用于限制本机JADX内存，不是可安装包。跨DEX、反射、hotfix与运行时状态不能由单DEX引用数补全。

原始字节索引在 `audio-native-static/effect-literal-methods.json`，完整映射和每份JSON摘要在 `audio-native-static/effect-config-map.json`。本轮REA记录分别保存于 `effect-dex6-rea-evidence.json`（42条）和 `effect-dex4-parameters-evidence.json`（8条），不是50个独立运行验收。

## 14份本地默认目录

所有14份JSON都由同一个 `AudioEffectSettingsConfigKt.d():List` 构造；classes6.dex method_index43155。精确const-string位置已保存，REA方法体父证据 `ev_93fe03063b6932d19d0f3f2351b7c0c9f308818cf82b9da626b3d2175776a584` 独立核对了下表的构造实参。

| 本地顺序 | key | 构造实参中的name | JSON string_index | 主要节点 |
| ---: | --- | --- | ---: | --- |
| 0 | 360_all | 360环绕 | 59398 | circle_360、限幅 |
| 1 | bass_enhance | 超重低音 | 59394 | EQ、限幅 |
| 2 | voice_clean | 清澈人声 | 59393 | EQ、gain、限幅 |
| 3 | stereo_enhance | 3D音效 | 59396 | stereo_width、gain、限幅 |
| 4 | hifi_live | HIFI现场 | 59395 | EQ、env_acoustic（echo/reverb）、限幅 |
| 5 | rock | 摇滚音效 | 59390 | EQ、限幅 |
| 6 | vibrant_electronic | 动感电音 | 59397 | FIR、FDN reverb、gain、限幅 |
| 7 | vinyl | 复古唱片 | 59392 | EQ、gain、限幅 |
| 8 | speaker | 外放补偿音效 | 59388 | EQ、限幅 |
| 9 | headset | 耳机补偿音效1 | 59389 | EQ、限幅 |
| 10 | headset2 | 耳机补偿音效2 | 59386 | EQ、限幅 |
| 11 | headset3 | 耳机补偿音效3 | 59387 | EQ、限幅 |
| 12 | intelligent | 智能音效 | 59385 | 通用图含EQ、stereo_width、reverb、gain、DRC、限幅、distortion、lite_reverb |
| 13 | voice_clean_v2 | 清澈人声（听抖音） | 59391 | EQ、限幅 |

`AudioEffect`四字符串构造函数依次写入key/config/name/version，父证据 `ev_c17b12c42de12a2e540e591328535577c90495febe49026fcb6203815430d622`。因此name不再是依据相邻字符串猜出的标签。此表是本地默认目录，**不代表这14项都会在某账号的音效面板中显示，也不代表已经获得资格或通过引擎校验**。补偿项可能由输出设备和设置逻辑使用；本轮没有把它们当作14个同级用户按钮。

## 默认目录、远端覆盖与默认选中

默认目录链为：

`AudioEffectSettingsConfigKt.<clinit>`创建`lazy(qq.w)` → `qq.w.invoke()` → 合成访问器`Kt.a()` → `Kt.d()`构造14项 → `Kt.e()`取lazy值 → 合成访问器`Kt.b()` → `AudioEffectSettingsConfig`默认`AudioEffectConfig`。

关键证据：Kt初始化父 `ev_272e3552b1ce361c735b4faf4d4474e9eeb7cb4449b0b8ebae38194529dafc8e`；qq.w.invoke父 `ev_2bdd6e4d58a91cbb848c9de3330cec957427a24a94899c05f1bdf136815e6ad2`；Kt.b父 `ev_2b21111548821a7d2f8675d4c422b7697466189b4c7fe8aaa26d043b3b482663`；Kt.e父 `ev_1d206e92d0f85157bd106dcc69e51c455bd4774d3aa1f71e452736323aac6cd7`。字节索引中a()精确调用d()；qq.w反编译被内联投影时，REA d()的引用节点报告qq.w，不能用这个报告替换原始访问器链。

`AudioEffectSettingsConfig.<init>`以`audio_effect_config`创建BaseConfig，默认值使用上述列表（父 `ev_6641a846591e924bc17fc3facd5885d9e3a7244d660c34a2f3e8f0fd73ee554f`）。

`I(storage,key,defaultValue)`从配置存储读取JsonArray，逐项取key、config对象、name、可空version；key/config/name缺失或为空的项跳过，异常逐项记录。若读到空引用则返回传入默认对象；若确实读到空数组，则生成空列表，不能自行解释为强制恢复14项。父 `ev_d338042353901dd0e1f9848e0bb39fcc8446290f06f3b1536b1d780544620a2b` 提供smali回退，非Java原源码。

`E()`返回当前`value().audioEffectList`（null时空列表）；`H()`从当前值过滤karaoke/karaoke_offline，并非只读本地14项。父证据分别 `ev_38c1be06bd56684904277cf53a7567b1dd7db3a2941891cda309d0520635cbf0`、`ev_4b66622a30b7c7fd142df2ce7238c209c8a63c3f8248bd77d6568b8390b592da`。这些路径支持配置可被缓存/配置中心值覆盖；本轮没有追到具体配置下载HTTP接口。

**默认目录不等于默认选中效果。** `EffectSettingConfig.getDefaultEffect(playType,queueGroup,outputDeviceType)`按defaultAudioEffectV2.effects顺序选择首个条件为空或`condition.isSatisfied(...)`通过的条目，取effectKey，再到当前H()列表中找对应效果；没有匹配时返回null。父 `ev_a786c7ba8546b31ab16d035b14df0e15db0a7bbf835ed43e8f238b6b9b5398a9`。本轮没有把条件模型的所有字段、所有远端配置和实际设备默认选择恢复完整，不能直接指定“默认一定智能音效/360环绕”。

## 用户选择后的资格和配置替换

`AudioEffectManager.U()`读取`UserAudioEffectConfig.a.h().getUserSelectAudioEffect()`，与当前H()目录按key匹配；找不到则返回null。普通效果还要通过`IBenefitCenter.L(key)`，否则记录“no entitlement”并返回null。`a0(key)`的唯一已查看例外是`customize_effect_key`，并非上述14项。父证据：U `ev_e5eff30413172e7801e8a75b56684919e5bdf6050bbd93e26b0dc70e9084cde2`；a0 `ev_b540d020b63b579a52ab8b571315902bf912d305a390ed83cbdd51a4f18c9e0b`。

U()还根据效果升级开关、目标version等选择用户缓存或当前目录配置；当`SvipBenefitSecurityConfigKt.d()`开启且不是customize例外时，可能用`IBenefitCenter.o(key)`返回的非空字符串替换config；`IBenefitCenter.x(key)`还可替换显示名。之后调用`AudioEffectExtKt.a(...)`生成EffectConfigData。

这明确区分了三个层次：本地效果图存在、客户端资格判断通过、最终引擎拿到的配置。此轮没有观察服务器资格返回或安全配置内容，不能仅因找到本地JSON就认定模块全部音效在独立客户端可用；也不能把该客户端检查反推为原生库必定进行或必定不进行独立校验。

## AudioEffectProcessor / Bridge参数

| API | 精确参数顺序 | 已观察行为/证据 |
| --- | --- | --- |
| audioOpen | sampleRate, channels, duration, format | 只保存sampleRate/channels/format，duration没有被使用。父 `ev_2ff287f7cfabcc4639c25f3b632719a1a24a44bac1269e6cdf8f4f82ff9782cc`。 |
| createEffectHandleByConfig | samples, sampleRate, channels, configJson | d(samples)在首次处理时惰性创建；无配置返回null；Java把返回-1分类为创建错误并报告-2。父 `ev_f6536d66dc94b9286ab7aae10627fc88bab71a2b1816a3209fa73044d48ac154`。 |
| createAudioBuffer | handle, samples, sampleRate, channels | c(handle,sampleRate,samples,channels)重排上述调用参数；按samples*channels缓存容量，不足或无缓冲时申请；Java将-1报告为-3。父 `ev_903e788cf0e7269fcb992c832a54ad50691ba6e5e33815a674a882d26a360d10`。 |
| processAudio | ByteBuffer[] inout, handle, buffer, sampleRate, samples, channels, format | 处理器在enableProcessor且hasEffect时调用；返回非0报告处理错误。原父 `ev_8d72fb44ea832f6adcd74853a689a8c832a1a865358704eb418bfb30f145352e`。 |
| release | handle | Java销毁函数只对>0句柄调用；随后把句柄/缓冲引用清空、缓存大小归零。父 `ev_aa2667797eb276ba731123cda09d32f7c22e6271b69f726d98773d62e47f23cc`。 |

原生实现的额外细节位于`bridge-selected-disassembly.txt`及`bridge-release-disassembly.txt`：

- createEffectHandleByConfig：EffectCreate → EffectCommand(handle,0,configJson,-2) → EffectCommand(handle,1,"sampleRate,samples,channels",1)。配置/初始化命令失败返回-1；EffectCreate自身的非0错误另按原值返回，不应从Java的单一哨兵检查推断所有返回值的有效性。
- isValidConfigJson：临时EffectCreate/配置命令/EffectRelease，返回校验状态；这仍未证明在Mesting进程中执行成功。
- createAudioBuffer：EffectGetProcessBuffer(handle,samples,channels,0)，再写入samples/channels/sampleRate等结构字段；handle为0时返回-1。
- processAudio：handle为0返回-1；逐声道取ByteBuffer的直接地址，每次按4字节拷入引擎交错缓冲，EffectProcessBuffer成功后写回逐声道缓冲。此实现没有可见的Java ByteBuffer容量/position/limit读取，也没有PCM16转换。
- release：非0时直接转交EffectRelease；桥没有提供独立freeBuffer方法。不能随意对其借出的内部缓冲额外free。

## PCM格式：已收敛与尚未收敛

桥中的convertPlanarToInterleaved/convertInterleavedToPlanar符号具有float指针类型，processAudio按逐声道4字节样本重排。这支持**planar float32输入/输出，内部interleaved float32处理**的静态结论。原库为little-endian AArch64。

本次processAudio函数的最后format参数没有可见读取；不能认为传PCM16并附一个format编号就会自动转换。Java audioOpen会保存format并传入，但并没有在已查看Java路径中把PCM16转为float。这也不构成整个TTM音频引擎格式协商枚举已经恢复：format数值、采样归一化范围及所有输入组合仍需调用方协议或受控输出验证。

Mesting当前Media3解码链常见为interleaved PCM；若下一步试做该基础DSP，需要在同一现有播放器链内明确完成格式/声道布局转换和缓冲管理，再把结果转回输出格式。不能把现有Android Equalizer标成汽水官版音效。

## 本轮完成和未完成

已完成：14份图的key/name/config绑定、默认目录与缓存覆盖入口、条件默认选择、用户所选效果资格/安全配置替换路径、Java建句柄/缓冲/销毁的精确参数、当前arm64桥的样本布局。

仍未完成：全部显示/排序/升级/资格条件、配置下载接口、端到端EffectConfigData到TTM安装过程、所有格式枚举与实际输出、Mesting包内加载/权限/ABI兼容及其他AudioX/SAMI链路。没有将离线结果称为真机音效验收。

REA证据已export/reset并close。close_binary之后留下的已结束target-free JADX助手仅按本次原始记录的PID/路径核验终止；身份和理由记录在`audio-native-static/completed-helper-cleanup.json`，之后查无Java进程。未清理其他目录或产品缓存。
