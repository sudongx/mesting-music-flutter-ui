# 手机号公共请求参数hook：实现、字段与安全边界

日期：2026-11-05。本附录只追`NetworkParams.sApiProcessHook`及与它分开的安全因子回调，不逆向整个账号/设备注册SDK。只读已取得的21.5.0包，未联网、连接手机、发送短信、执行APK/SO或修改产品。

## 结论

**公共参数的Java建模已具备清楚的字段和来源，不应再把整层当作无法定位的黑盒。** 实际hook已连接到官版NetPlugin、AppLog及BDInstall的ApiParamsUtil。固定值、设备/应用配置和安装记录可以分别建模；账户状态也有明确读取点。

但完整“被服务器接受的请求”仍不能由这张字段表保证：安装注册返回的iid/device_id等不是任意随机数字；而TTNet还有与公共参数hook分开的安全因子回调，已追到一个真正的native方法边界。补齐Java参数不会自动生成该native运行上下文的返回值，也没有证明每条手机号请求都强制需要它。

## hook实际由谁赋值

对21个DEX的接口声明及直接invoke做有界搜索，找到一个显式实现`NetworkParams.ApiProcessHook`的类：classes6.dex `com.luna.biz.main.init.net.ttnet.NetPlugin`。这不是对反射/热修复实现的排除证明。

实际链：

1. `NetPlugin.p(Application)`把自身作为ApiProcessHook与CommandListener传给`TTNetInit.tryInitTTNet`（code-unit103，invoke-range寄存器中hook参数为this）。
2. classes2.dex `TTNetInit.tryInitTTNet(...)`在code-unit35把传入hook交`NetworkParams.setApiProcessHook`。
3. `NetworkParams.putCommonParams(Map,boolean)`调用已保存的`sApiProcessHook.putCommonParams`。
4. `NetPlugin.putCommonParams`调用`AppLog.putCommonParams(context,map,boolean,Level.L1)`，随后加`quality_ab`，其值来自`NetPlugin.m → SvipBenefitSecurityConfigKt.c()`。
5. AppLog默认实例是`AppLogInstance`；其`f`委托`BdInstallImpl.f → IBDInstallApi.f`。正常实现`BdInstallInstance.f`再调用`ApiParamsUtil.c`。

原始证据：`phone-apiprocess-hook-index.json`、`phone-ttnet-init-hook-instructions.json`、`phone-netplugin-hook-instructions.json`、`phone-applog-putparams/instance/newInstance-instructions.json`、`phone-apploginstance-params/constructor-instructions.json`、`phone-bdinstall-params/factory-instructions.json`、`phone-bdinstance-putparams-instructions.json`。所有原始指令文件携带原APK/DEX摘要和方法索引。

## 最终公共参数拼装字段

已用REA/JADX独立读取classes18.dex `ApiParamsUtil.c(Context,boolean,String,Map,Level)`完整方法体，父证据`ev_1e06a914d159cd9b59c9aa7ab7b87202ea693005bdbb60323c03a3eb609d54bf`。该方法698个DEX code units；反编译提示类型推断警告，但明确的put、getter、条件及调用已与原指令核对，不把显示类型混淆当作运行事实。

| 参数组 | 实际来源与条件 |
| --- | --- |
| device_platform | 常量android。 |
| os | 辅助方法按RomUtils选择android/harmony；Harmony条件还可加sub_os_api。 |
| ssmix | boolean参数为真才写a，不是所有请求无条件有此键。 |
| _rticket | System.currentTimeMillis()的字符串。 |
| cdid | Cdid.c(InstallOptions)，空且主实例时回退Cdid.f(context)；空值不写。没有从这里证明随机UUID可以替代实际客户端身份。 |
| channel | OptionsForCommonParamProxy.c()；非空才写。 |
| aid | 优先方法传入的String；否则OptionsForCommonParamProxy.a()。AccountConfig.appId另已确认为8478，但本方法本身不是硬编码8478。 |
| app_name | OptionsForCommonParamProxy.b()，缺失记录异常。 |
| version_code/version_name/manifest_version_code/update_version_code | 应用InstallOptions或AppContext的OptionsForCommonParamProxy.g/f/d/e；不是主机随便填写一套PC版本。 |
| ab_version/ab_client/ab_group/ab_feature/abflag | InstallOptions的IAbContext getter，按存在/非空条件附加。 |
| resolution/dpi | UIUtils读取实际屏幕。 |
| device_type/device_brand | Build/RomUtils等设备资料；Pico分支有专门处理。 |
| language/os_api/os_version | Locale/Build版本；os_version有长度截取路径。 |
| ac | 优先NetworkStatusProvider；否则NetworkUtils.getNetworkAccessType。 |
| iid/device_id/klink_edi/klink_eii/klink_egdi | 取BDInstall的InstallInfo.h/c/d/e/f，经过安装启动/记录有效性和非空检查才加入。它们是已保存的安装注册上下文，不是当前方法计算的签名，也不应伪造为随机数。 |
| openudid、ApiParamsForFlavor额外项 | **只在Level.L0分支**。此次NetPlugin调用传L1，因此该基础分支不会附加openudid，不能把通用函数全部字面量都列为当前请求必需。 |

该方法还合并内部参数Map、应用IExtraParams.getExtraParams(level)的Map，最后交IParamFilter处理。因而上述表也不是保证不会出现其他键的白名单。

原始方法全部指令及每个put的位置在`phone-apiparams-util-instructions.json`。辅助字段与getter是静态来源，尚未取任何真实设备/账号值。

## 官版自己的额外参数

`NetPlugin.p`同时将this注册给`AppLog.setExtraParams`；`NetPlugin.getExtraParams(Level)`是上述IExtraParams来源。明确包含：

- 应用/设备：device_model、package、hybrid_version_code、tz_offset、tz_name、network_speed、sim_region、output_device_type、is_car_play、android_device_type。
- 应用状态：is_teen_mode、need_personal_recommend、luna_register_time、luna_apk_type、luna_first_launch_apk_type、channel_unit_id及导流配置字段。
- 条件设备信息：volume、battery、brightness、charge、save_power、font_size，从DeviceInfoManager/配置条件读取，不宜静态伪造。
- quality_ab在putCommonParams尾部单独加入，来自官版SvipBenefitSecurityConfig配置分支，不把它当作一个已恢复的登录签名。

其中package来自AppUtil.getPackageName，luna_register_time从当前User读；Mesting不能将这层定义为所有用户共用的静态Map，也不能复制另一用户的注册时间。原始完整指令已存`phone-netplugin-hook-instructions.json`和`phone-netplugin-quality-instructions.json`。

## 与公共参数分开的安全因子链

`ApiParamsUtil.c`本身没有直接native调用。真正发现的native边界在另一条hook，不应混为公共参数必然全由native生成：

1. classes2的`AbsCronetDependAdapter.onCallToAddSecurityFactor`、classes19的`OkHttp3SecurityFactorInterceptor.intercept`会调用`NetworkParams.tryAddSecurityFactor(URL,Map)`。
2. NetworkParams从独立字段`sAddSecurityFactorProcessCallback`取得回调，调用其`onCallToAddSecurityFactor`。它不是`sApiProcessHook`。
3. classes13的`ms.bd.c.h5.a(long)`保存一个long上下文值，并新建`ms.bd.c.g5`安装为该安全因子回调。
4. `g5.onCallToAddSecurityFactor(String,Map)`处理URL与传入Map，建立列表/数组，使用h5保存的long上下文，调用`ms.bd.c.k3.a(int,int,long,String,Object)`。
5. 原始DEX方法声明对`k3.a`的access_flags为**265/0x109（public static native）**，code_item_offset为0。这是确切native实现边界；此处没有恢复其算法、原生状态或真实返回字段/值。

证据文件：`phone-net-security-callback-callers.json`、`phone-network-trysecurity-instructions.json`、`phone-securityfactor-callback-instructions.json`、`phone-securityfactor-implementation-instructions.json`、`phone-securityfactor-dispatch-instructions.json`、`phone-security-native-declaration.json`。

不能从回调存在就断言每条短信请求必需某个具体安全头，也不能凭通用SDK名字宣布Mesting一定被拒绝；相反，已经知道native返回值与上下文存在，也不能用固定版本号、随机device_id或空字符串代替后声称等价。此附录止于明确边界，不进一步解混淆或生成安全凭证。

## 对“能否独立建模”的回答

**可对公共参数层独立建模**：分离固定项、Android真实系统项、应用配置/灰度项、安装注册状态、当前用户状态和过滤器，保持字段条件及账号归属。已不需要继续猜“还有哪个神秘Map”。

**尚未具备已验证的完整独立请求条件**：InstallInfo的真实注册来源/兼容规则、TTNet运行时安全因子及账号成功会话/后续Luna接受，仍不能由这套静态字段表证明。后续是否使用正式SDK/接入契约或继续某个具体静态模块，需要围绕这几项决定；不是把所有已恢复字段无条件塞入JSON就接通。

本阶段新增6条REA证据在`phone-request-hook-rea-evidence.json`及相同checkpoint，均已export/reset/close。分析载体`phone-analysis-only-dex18.apk`仅保留原始manifest/resources/classes18，逐成员来源见provenance，不可安装/交付。已按证据中的临时路径核验并清理结束的自有JADX助手，`remaining_java_count=0`，记录`phone-request-hook-cleanup.json`。没有联网/手机/产品/版本/锁/签名或交付修改。
