# 网易云免费听入口与 gain 参数静态调查（release160）

2026-11-05 Asia/Shanghai。只读官版9.6.15本地APK与此前精确Hermes静态解析，不执行官版、不访问手机/ADB、账号或平台请求；无真实领取证明。未改产品源码、版本或冻结APK/ZIP。

## 来源和覆盖

原APK SHA-256 `e6427bcb35ccd9e8858ee55c46ec3db56b2f09871adcd8e897244d96cfcf7894`；本轮JADX选择 `release159/research-private/classes16-analysis-only.apk`，SHA-256 `ea7d10e609957c3e55a102309f9efe08438c7fb80bbe264fd21b671f4c42e8fd`。该载体仅一个原始classes16.dex和原manifest，不能分发或执行，也不含其他DEX定义。静态引用是该载体内JADX使用节点/匹配的直接DEX invoke，不是全APK动态调用证明。

Hermes原HBC SHA-256 `367d0ba6a62abad7341c9ee19ff58433801dd79a645c22db70ba5a9f7422a805`。复用release159经过204 opcode定义核对且12,906函数边界完整的静态解析；新文件 `rn-free-listen-entry-functions.json` 保留本轮使用的12个完整函数和来源SHA-256，不把解析当运行。

## 可修正的真实入口来源

**官方免费听领取按钮读取的是 `/api/ad/homepage/free/tab/continuous_rights` 响应 `data.actionUrl`。不是asset.freeListen，也不是硬编码source，更不是仅userId资格查询。**

原版组件控制流：

- HBC7975：useState第二组state在env slot6，setter在slot7（@241-276）。
- HBC7977：`fetchContinuousRights({entranceType:"FREE_LISTEN"})`（@5-26），then7978。
- HBC7978：确认`body.code==200`及`body.data`后把`body.data`交slot7 setter（@90-125）；因此7975 slot6就是服务端连续权益data。
- HBC7975 @438-449 为7988包装节流函数，保存env slot12（@581/@930）；红框按钮创建7997 onPress（@1182-1187）。
- HBC7997 @28-35 调用slot12闭包。
- HBC7988 @18-70 从slot6取得`actionUrl`，调用`Url.open(actionUrl)`。
- 与之独立，HBC7980/7981把asset响应`data.freeListen`交slot5 setter，7975该第一组state后来存slot4，仅用于时长/规则等展示，不是7988的actionUrl来源。
- 新版布局也如此：9806 `fetchContinuousRights(FREE_LISTEN)`→9807 `body.data`→slot3 setter→9804 slot2 state；9809读取slot2.actionUrl并Url.open；9823红框按钮调用9809包装闭包。

该静态链只确定客户端取值路径。**真实账号当前返回的URL内容仍未采集。** 不应硬编码猜测URL/source；可在同账号同日的一次真实progress响应中保留actionUrl，仅静态解析本地明确允许的scheme和route，把白名单字段转入资格请求；不要任意打开它或跟随外部URL。URL→Bundle类型/默认值/资格序列化由并行qualification调查负责。

## gain 所需元数据与当前实现差异

`o30.i1.F2(Ad,...)`完整主体证据 `ev_93dbb3206b776769084cc2049bbe27ec87b6d8640c699e8b9cbe0e5c62ef2223`：

- `source`取ViewModel当前入口source。
- `creativeType`取实际`Ad.getCreativeType()`，不来自ListeningRightHintInfo的资格布尔或某个固定默认0。
- `reqUid`取实际广告`ad.getAdExtMap()["req_id"]`。
- `exposureTime`取真实`firstExposureTime`，`clickTime`取e2()，`sniffTime`取真实安装探测时间。
- `extraRightsType / rightsGainMethod / extraRightsGainMethod / extraRightsGainDuration / rightsGainDuration / nextRightsGainDuration / rightsGainType / rightsExtJson`取实际广告的`generalRightsInfo`。
- `generalRightsInfo`为上述实际服务器对象经`ks.c()`序列化的完整JSON字符串；`contextInfo`来自Ad，`gainMethodStep`来自调用参数。
- 若`generalRightsInfo`为空或`rightsExtJson`为空/空白，会记录ADREWARD诊断。此行为证明这些字段对官版有业务意义，**不证明空值必定被服务器拒绝**。
- `appInfo/installed`也取真实广告、安装探测等数据；本项目不得编造。

Mesting159透传的scalar白名单没有`rightsExtJson`。可以支持的局部修正：**若同次真实资格响应带有string类型的rightsExtJson，原样透传**，不做再编码、解析后重写、跨账号重用或猜造。该修正不能证明“资格响应generalRightsInfo等价于广告对象generalRightsInfo”，也不能代替真实广告凭据；不能将完整资格响应随意伪装成已观看广告的上下文。

`o30.i1.f3`证据 `ev_d2d5f73b783144ee779e6da74204b55022542aed88b95687c19cc3845167bf4e`：DTO先序列化再转Map，合并extParams并写`ext`，交coroutine u。该方法特地检查`rightsExtJson`键是否存在。这也支持字段原样保留，但没有授权生成广告/设备证明。

`f30.a.k`证据 `ev_0ac2bda03b289fc3c3a95ce72460036d2c06bbd96607c03239fa2b8777cd6e29`：`ad/listening/rights/gain`的`reqParam`是`ks.c(data)`（JSON字符串），异常/空结果返回默认失败DTO。

`GainRightTask.f`证据 `ev_23c26c00b44eda113019818f77c63b2b4ab90b381fb308343daab7b0383f76ab`：同样先`ks.c(data)`再交g。g原始完整方法保留于release159的主代理复核bundle（`ev_997f3f8193dbf739847b9100831a350d2fd4f4c8f09d03d797951a7a0565ca11`）：只以显式gainFlag判成功。维持原先“code200不等于到账”的逻辑正确。

## 其他候选不属于可用免广告直领入口

- `f30.a.h`（`ev_79ef40b9b6fcf3a508cfe77ecd6916198eab83fcd821f96711f159d17734b3f4`）是已存在Banner的激励点击领取，reqUid、曝光、creativeType和generalRightsInfo来自实际Banner/AdIncentiveClickInfo。不能将其当任意source空申请。
- PersonalFM helper d.a.invokeSuspend（`ev_0ef4d4f7d6bc6034372ea76a3633d102742ae7a26601ee600ccd8980863a6e87`）固定source2但依赖FM中实际Ad的req_id、曝光、creativeType、权利方法、generalRightsInfo/contextInfo。不是本次福利页通用source。
- `l40.j0.j(source)`（`ev_6a43fe5cf5209e741b4b1c1de4b980691e8c5700703305279429a6864d2f4cfc`）看起来构造creativeType0的空DTO，但其callee i→h只发本地`NM_MOTIVATIONAD_GET_GAIN_RESULT_NOTIFICATION`广播（`ev_a94fa2a003d72c01e51ab33c21ab5becfbebf88e90e514e7a8d602246510d8c5`），默认gainStatus为UN_REQUEST_GAIN；唯一观察到调用来自AdMotivationVideoActivity.onDestroy（`ev_88254fd1b65ad0d8618cf8209f1100185d0ded5517d83f7dcc70a4b69580cb21`）。**它不是网络领取接口，不能照抄为无需广告的领取参数。**
- 原先direct gain form/req的不同来源及活动前置条件仍遵守release159报告，不混云贝/现金source527，不把任意source用于免费听。

## 最终结论和未知

有实据支持两处定向修正：从同账号同日FREE_LISTEN progress.data.actionUrl取得真实官方入口，而非只带userId；保留同次服务端真实rightsExtJson。请求参数类型/序列化应结合qualification调查，不改全局帐号cookie身份或其它音乐接口。

本轮没有发现可证明“无需真实广告完成即可任意连续领取”的正常通用路径。真实服务器是否接受修正后的直接请求、500发生资格还是gain、是否需广告凭证、实际奖励到账与次数仍需分阶段诊断及用户账号实测；禁止用mock通过代替到账证明。
