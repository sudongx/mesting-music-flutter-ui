# 网易云 9.6.15 签到与免费听静态调查（1.0.59）

日期：2026-11-05（Asia/Shanghai）。本文件仅供本地接续；不进入发布源码或 APK。

## 来源与调查范围

- 原始官版 APK：`D:/AnLi/.codex-artifacts/2026-11-01-together-history-review/com.netease.cloudmusic-9.6.15.apk`，SHA-256 `e6427bcb35ccd9e8858ee55c46ec3db56b2f09871adcd8e897244d96cfcf7894`。
- `carrier-provenance.json` 已记录 classes14/16 的原 DEX 与仅分析载体散列；classes17 复用 `release157/netease-classes17-analysis-only.apk`。载体不是可分发官版，也未执行。
- 官版内 `assets/rn_rn-ad-free-music@index/rn-ad-free-music@index.tar.xz` 含 Hermes HBC v89。`rnfree-provenance.json` 记录提取成员；HBC SHA-256 `367d0ba6a62abad7341c9ee19ff58433801dd79a645c22db70ba5a9f7422a805`。
- 已静态解析精确字符串表及 12,906 个函数，全部指令结束边界吻合。生成的 204 个 opcode 名称/类型与 Meta 官方固定提交 `c9b539bf3d7bfa4143ff1a5751886c7b2dd728a2` 的定义逐项相同，详见 `hermes-static-decoder-validation.json`。这是静态控制流和字段证据，不是已运行成功。
- 未操作手机、ADB、用户真实账号、业务后台、VPN或音乐平台写接口；未执行官版目标代码；仅额外读取公开 Meta/Hermes 和原解析器源码，无平台凭据。

## 已确认：传统 App 签到

1. `NeteaseMusicApiImpl.n3/u6(int,long)` 请求 `point/dailyTask`，字段 `type` 与 `adid`。`u6` 明确 `code==200` 返回 `point`；`code==-2` 返回已签到；其他业务代码转错误。
   - `n3`: `ev_26407e6c70a71d0a05032f5e3fe74ac1c35669e4d80018509db6676290e804b4`。
   - `u6`: `ev_3297b6e00ea92891c08500d4abd8298bbcf32ba4de8efac2911341a2b32b8f2f`。
2. `NeteaseMusicApiImpl.L9(Profile,JSONObject)` 从传入 root JSON 读取 `mobileSign` 并设置 Profile.mobileSign，同层还读 `level/userPoint`。可用既有用户详情的显式 `mobileSign` 判今日状态；字段缺失必须保留未知，不照抄官版 optBoolean 的缺省 false。
   - `ev_d9082ce148f79d259baa4de6655ac86ad45c90ad03d171bbb7597a03a9f17ec9`。
3. `/api/usertool/sign/config` 是入口配置；`data.rnUrl/webviewUrl/openYunBei/yunBeiUrl`，不是已签日期记录。不得据此捏造签到日历。
   - `NeteaseMusicApiImpl.z1`: `ev_d24a7ba43e5547e902c1e4514b01bc9e04e9ecb3f44ef7bb4ab6e1ef43e4b878`。
4. 没有取得与传统 App 每日积分签到对应的完整历史月历。建议仅记录当前账号真实成功/-2 回执日期与当前今日状态；不能拿 VIP 活动 `/signin/progress` 的任意 moduleId 作为所有历史签到。
5. `adid` 的省略与既有 type=0 传输能否被真实账号接受，本调查未运行验证；本地静态调用存在 adid 并不证明其始终非零或为必要字段。

## 已确认：免费听余额与领取进度

### 余额

- RN API `getBenefitAsset` => GET `/api/ad/homepage/free/tab/asset`，以无实参方式调用；解析 `response.body.data.freeListen.rightsRemainingTime`。
- HBC 函数：7845@31（URL及GET）；7912@9-15（无参调用）；7913@13-25（body.data）；7911@1451-1474（freeListen.rightsRemainingTime => leftTime）；7981@48（freeListen对象）。
- **单位是毫秒**：同款 countdown 4967 把 leftTime 加到 Date.now；4972 除以 86,400,000 / 3,600,000 / 60,000 / 1,000 得到天时分秒。原生 `PlayerIncentiveAdView.parseDataAndShowView` 同样将 `uiData.rightsRemainingTime` 赋给 `countDownTimeMills`。
  - 原生证据：`ev_56201dc47b39829d01200c7a4e9e467a9880e2dc8a821dc11b982ef2d97d5a04`。
- 不可把 `/api/vipnewcenter/app/free/listen/data/v2` 当余额：HBC4373 对此请求 `{refresh,limit:12}`，解析 songInfo/songInfoV2/songInfoList，属于免费听推荐歌曲。

### 累计奖励进度

- GET `/api/ad/homepage/free/tab/continuous_rights`，数据 `{entranceType:'FREE_LISTEN'}`，不是空造领取次数。
- HBC7774@38（URL）；7977@17-26 / 9806@17-28（FREE_LISTEN参数）；7978 / 9807（body.code==200后读取data）。
- 已见 data 字段：`stride`, `tasks`, `title`, `subTitle`；tasks 项字段 `state`, `doneCount`, `label`。`state=='DONE'` 用于已完成显示；`stride` 用于绘制分段，不应直接当每日限额。没有证实总广告次数、adTarget、领取间隔字段。
- HBC7998@23-43（stride/tasks）、@221/@329（title/subTitle）；7991@39-78（state/DONE/doneCount）、7989（任务label）；7995（label和已完成图标）。
- 真实日限额、领奖次数与跨日实际到账尚未观察。显示服务端任务标签/状态合适；本轮8次/30秒若采用，应明确为客户端单批保护，不宣称是网易云官方日上限或冷却。

## 已确认：广告领取协议与严格限制

### 资格读取

- 路径 `ad/listening/rights/qualification`。
- `o30.q0.N1(Map,Continuation)` 接受调用者 map，不自动补默认 source/userId；其 `q0$c.invokeSuspend` 将 `{reqParam:map}` 传请求构建器。该方法本身未显式 jsonEncode，最终 native serializer 的细节仍未核实。
  - N1：`ev_fb265e6393ed4c04c550fc13a58ad62245890149aa96d7c649570501e415f04f`。
  - coroutine：`ev_85fbb807dfecbf5cb2599596ccd7d225a3fd8cebeab4d19335329d1b39a93ea4`。
- 响应 DTO `com.netease.cloudmusic.meta.ad.ListeningRightHintInfo`：`qualified` 为 boolean；`source`, `rightType`, `rightsGainMethod`, `rightsGainType`, `nextRightsGainDuration` 等为 int；`rightsGainDuration`, `rightsEndTime`, `validVideoInterval` 为 long；`rightsUpperLimit` 为 boolean；有 `rightsExtJson`, `adReqUrl`, `autoJumpUrl`, `rightsTrackExtJson`, `showElement` 等。
  - DTO：`ev_871a7302fa8b9610e68271d42489734b72d2331470f5a3de1a0bf515f6a7857a`。
- **未证明**只带真实 userId 的最小 reqParam 足够；source 是否必填、正常入口source值、source与广告证明的服务端检查，仍未知。项目可按用户要求做最小申请尝试，但不得说已完整复刻官版或保证被接受。
- `qualified=false` 是明确无资格；`qualified` 缺失不等于true。`validVideoInterval` 的名称/long类型不足以证明是领奖冷却或时间单位，不映射成 nextClaimAfter。

### 领取写入

- `ad/listening/rights/gain`，字段 `reqParam` 为序列化 `ListeningRightRequestParams` 的 JSON 字符串。
- `GainRightTask.g` 将 JSON 发送后仅以 `ListeningRightsGainResult.getGainFlag()` 判断结果；不能把外层code200独立当领取成功。
  - `ev_2b033e3bc741ddc2c1abfc4c25fa910f21636822eec19e74dd31f6f8d9894c37`；`f30.a.k` 同协议 `ev_d7d75f620a22b3660ddd3c4a5927a051dcb47f404d0f99619269770ec7d73af4`。
- 请求 DTO 字段：`reqUid`, `exposureTime`, `userId`, `clickTime`, `extraRightsType`, `playContinuously`, `source`, `creativeType`, `rightsGainMethod`, `extraRightsGainMethod`, `extraRightsGainDuration`, `sniffTime`, `rightsGainDuration`, `nextRightsGainDuration`, `rightsGainType`, `rightsExtJson`, `appInfo`, `installed`, `generalRightsInfo`, `contextInfo`, `gainMethodStep`。
  - 全构造赋值：`ev_368921b06f53b69f404d944a1c3504296e9324bd75e178f599c23eb27a6850e5`。
  - 缺省构造：`ev_235a9fad0bb45274f09f1676a3c7fb61747be534f99582fca5642c2910a0dac5`：reqUid="[REDACTED]",exposureTime=0,userId=0,playContinuously=false，其余可选null；source与creativeType无默认。
- **这些构造默认值不是“无需广告凭证即可领取”的证据。** 不伪造曝光、播放完成、clickTime、reqUid、设备身份或安装记录。可从同账号资格响应透传正常申请字段，但服务端可能因缺真实广告凭证拒绝；拒绝后终止。
- 结果 DTO：`gainFlag` / `rightsUpperLimit` / `canPlayContinuously` / `needLink` 为 boolean；`gainRightsDuration` 为 Integer；`rightsDurationUnit`, `showContent`, `rightsEndDialogTitle` 为 String；另有 buttonInfo/effectType等。
  - `ev_bd1a1ebfa13138a58deb182b2a2711cf65d90e43166fa8f24ac91cf4a1f5f331`。
- gainFlag必须显式true才记录已确认一次；rightsUpperLimit只表示上限，不能计一次成功；未知回执不能重复发送；缺失或拒绝不增加余额/日历。
- 没有真实账号完整领取回执，没有证明无需广告的领取可被当前服务端接受。

## direct gain 备选路径的范围（不要混用）

- 原生 `y90.a.c(giveSource)` 对 `ad/right/direct/gain/req` 发 `reqParam=JSON({source:source})`，source>0 且来自服务器 hint 元数据。
  - `ev_c1bbe45e9cfc24375bfce735a8d106ee0b3ca7c581acf8fbb9d101c74dc15fae`、`ev_5171ec07608a1b5504771e381452e0ececa4f5a2c63d95b199239b54ec3616fa`、`ev_91e44bdbf47dce0ae8922e5a9195676a3ba7b0de46f8102a1490581914f99406`。
- 其source读取来自 `PlayerRightTopDSLBubbleHintView.updateContainer` 的服务器 hint 值，不证明qualification.source与giveSource语义相同。
  - `ev_b7d62be217ba51fc397f8334051b6a3ea7f5bdbfea268ccf5abfd1e1423adb52`。
- RN `/api/ad/right/direct/gain/form` 是领取写入：POST `{source,rightType,reqUid}`；参数来自拼图/全天免费听卡服务器对象，且status需“立即领取”才发；成功之后刷新。不能当初始资格读取，也不能在拼图未完成时造reqUid。
  - HBC7851（POST URL）、9613@300-337及9643@18-63（三字段）、9641（canGainAllDayRight gate）、9644（结果后刷新）。
- RN `/api/ad/right/direct/gain/req` 另一处固定source527用于云贝/现金奖励，其返回amount等；用户明确排除此类功能，本轮勿借该source领取免费听。
- 因此本轮选择“资格→广告gain直接申请→真实gainFlag/上限→刷新”更清楚；不能声称两种direct gain为通用无广告领取捷径。

## 交付措辞与未验收

本轮可实现已确认UI、日历/自动签到、免费听真实读取、直接申请及可取消的连续流程。静态证据能支持接口/DTO形状，不能证明真实账号已签到、时长到账、免广告申请被接受或线上限额。采用Mesting既有eapi传输亦需要真实平台验收；RN的GET声明到native桥最终HTTP方法本调查未全追。没有账号/设备授权时不补做真实写验证。

## Evidence 实际保留状态（调查结束后补记）

子代理与主代理的 REA 工具会话实际独立，且本子代理中途 resume 后早期 ledger 已丢失。最终已从本子代理导出 `rea-research-evidence-bundle.json`（4 records，36,673 bytes），含最后 N1/p 两个原始方法记录与两个 summary view；导出后已清空本子代理的 4 条调查记录。主代理的空 bundle 保留，没有覆盖。

`inline-method-observations.json` 另保存本次已返回且在对话中完整可见的 16 项关键方法/DTO 观察，原 ev ID、类、方法、字段、原文或明确标记的片段均保留。它是从实际 inline 输出转存的观察子集，不是丢失 producer envelope 的完整恢复；换行统一为 LF，原始全部 raw metadata 与 Evidence digest 无法据此重验。`focused-evidence.json` 保存 1 个仍可访问的 N1 inline summary。报告中 ev ID 应连同这些文件阅读，不能误称全部原始 Evidence 仍在 ledger。

Hermes 证据 `rnfree-static-functions.json`、原 HBC/DEX 字节、精确 string table、原始来源与 decoder 校验均已落盘，不依赖 REA 进程的存活。没有为补齐 ledger 重跑分析。
