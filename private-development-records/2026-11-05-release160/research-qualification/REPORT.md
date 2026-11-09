# 网易云免费听资格请求：入口、序列化及传输静态调查

日期：2026-11-05，供 release160 修复使用。未操作手机、ADB、真实账号、平台写接口或执行官版。未改产品源码、客户端身份、历史冻结物。本目录不进入发布源码或 APK。

## 结论

1. **资格查询在最终 eapi 明文中，`reqParam` 是 JSON 字符串，不是嵌套对象。** 当前 Mesting 的 `{reqParam:{userId}}` 至少在序列化形状上与追到的官版路径不符。这是静态协议差异，不是已证明的线上500根因。
2. 免费听入口应从服务端进度返回的 `actionUrl` 解析，不能拿真实 userId 猜一个完整入口。RN 对该字段的来源/点击由另一个 gain 调查提供独立证据；本调查补齐 native `motivationAd/show` 到资格调用的映射。
3. 官版 `AdMotivationVideoActivity.onCreate` 仅在 `isNeedGetRights=true` 时调用资格接口；false 直接进入视频 Fragment。不能将任意 actionUrl 无条件转为资格请求，也不能以默认false冒充直接领取已获批准。
4. 已有另外一种 `m30.c.q(scene,songId)` 查询只传 songId，可为 null；它是播放器提示路径，不能因此当成免费听页面入口或在失败时自动切换试领。

## 目标与来源

原 APK：`D:/AnLi/.codex-artifacts/2026-11-01-together-history-review/com.netease.cloudmusic-9.6.15.apk`，SHA256 `e6427bcb35ccd9e8858ee55c46ec3db56b2f09871adcd8e897244d96cfcf7894`。

复用 release159 `classes16-analysis-only.apk`，其 classes.dex 是原始 classes16.dex，SHA256 `d278f8239ea33f5c7f8477981712faa369094d13291c1f41f42dc3c37f891f27`；载体 SHA256 `ea7d10e609957c3e55a102309f9efe08438c7fb80bbe264fd21b671f4c42e8fd`。

本轮仅分析的 classes4、classes6 载体均由原 DEX 与原 manifest 生成，非可分发 APK，未执行。`classes4-provenance.json` 与 `classes6-provenance.json` 记载原成员及载体散列。原 DEX SHA256：

- classes4.dex：`2a672dc21d5dda2f0d1c2e7d6b352b053608d71cbfc04a600147b953cb33a1cf`
- classes6.dex：`4635200a7e73dd005aa5c07e10b113944fd153852246515c93630364f6d4bf84`

JADX 的显示类名存在重命名，例如 raw `m30.c` 显示为 `z42.c`、raw `com.netease.cloudmusic.utils.ks` 显示为 `com.netease.cloudmusic.meta.ks`；Evidence 保留实际请求选择器、DEX prototype 和提供者原始结果，不把显示别名当独立实现。

## URL 到资格 Map

`l30.h.p4(Context,Uri)` 明确判断 `Intrinsics.areEqual(lg.M(url), "motivationAd/show")`。该方法本身不验证 scheme。Mesting 可将允许来源限制为服务端 `actionUrl` 中的 `orpheus://motivationAd/show`，并拒绝任意HTTP、重定向或未知scheme；这属于产品约束，不是声称官版只支持此scheme。

入口读取与默认值：

| query | 官版处理 |
| --- | --- |
| adPosition | 整数解析；缺失/非法不派发Activity |
| resourceId | 字符串；缺失不派发，代码本身允许空字符串 |
| source | 整数；缺失/非法为0，0不代表已证明的有效奖励场景 |
| isNeedGetRights | Java Boolean.parseBoolean；缺失false |
| isShowEndToast | 同上 |
| showRightsEndDialog | 同上 |
| isNeedResume | 同上 |
| isNeedMute | 同上，非法/缺失false |
| backupUrl | nullable String |
| ext | JSON解析为Map，失败为空Map；再插入 `bizReportInfo` 字符串，来自原ext的optString，默认空 |

`n30.b.l` 透传给 `AdMotivationVideoActivity.a.b`。Activity 创建的 Bundle 包含：

```
adPosition, resourceId, ext (JSON字符串),
isNeedGetRights, isShowEndToast, showRightsEndDialog, source,
isNeedResume, isNeedMute, backupUrl, bizReportInfo
```

另有 `entranceComponent`，由本地静态 a() 返回值可选加入，不是从 query 中猜定。`ks.c(ext)` 经 `JSONUtils.objectToJsonStr` 序列化，null返回`{}`，见 `bundle-ext-json-serializer.java`。

`onCreate` 在 isNeedGetRights=true 时进入 coroutine，`W6(Bundle)` 对每项取 Serializable 转为 Map，`q0.N1(map)` 最终 `o30.q0$c.invokeSuspend` 调用：

```
o22.e.b("ad/listening/rights/qualification")
  .s0(mapOf("reqParam" to entryMap))
  .j1(ListeningRightHintInfo.class)
```

上述 map 只是调用者对象层形状，不能据此认为加密前的 reqParam 仍为对象。

## 最终序列化和 eapi

完整静态链已追到：

1. `o22.e.b(path)` -> `new o32.a(path)`。
2. `o32.f.s0` 将调用者 Map 写入 `n32.a`。
3. `o32.e.R0` -> `U0().s()`。
4. `n32.a.s` 先 Fastjson `JSON.toJSON(this.a)`，逐个 value `toString()` 后 `FormBody.Builder.add`。因此 reqParam Map 成为 JSON 字符串。
5. `o32.p.x` 构建 POST 请求；`o32.a.z` 将 API path 改为 eapi path。
6. `g42.a.n` 读取 FormBody，`g42.a.m` 用 `body.name(i),body.value(i)` 复制到 paramsMap，**保持字符串值，不重新JSON解析reqParam**。
7. `g42.a.f` 对 queryMap `JSON.toJSON` -> `toString`，然后 e(path,string) 加密，放入外层表单 params，并 POST 至 eapi。

关键摘录：`form-value-serialization.java`、`encrypt-read-form-values.java`、`eapi-encrypt-string-map.java`。

这支持在当前既有 eapi 明文中使用 `reqParam: jsonEncode(entryMap)`。不能以同一修复对全App字段统一stringify，也不需要修改通用客户端身份。

## 保留的变化及未知

- 官版 `o32.a.U0` 还允许 AntiSpamService 向 Map 附加 musicYdToken；本调查未取得真实有效值，不应伪造。
- `g42.a.intercept` 存在 SDK就绪/配置开启时的 xeapi 分支与 eapi降级。观察到eapi路径不等于官版所有当前请求始终走eapi；Mesting当前传输是否被服务接受仍需账号验证。
- source/adPosition/resourceId/扩展值应来自该账号实际 actionUrl；没有证明某组固定值可通用于所有账号。
- URL 跳视频是入口事实，不能将 isNeedGetRights=true 或 qualified=true 解释为“无需广告凭证即可领取”。gain后续是否需要真实广告凭证由另一个调查与实际回执判断。
- 余额/进度读取成功不能证明资格及gain接受相同客户端标识，亦不能单靠500确认缺参数或风控。
- 未真实发起资格或gain请求，未证明本修复到账，不改变旧播放上报或补发历史日志。

## 证据保留与范围

`evidence-final.json` 完整导出 **154条** REA Evidence，6,794,591字节。每次主要步骤亦有累计快照，不重复累计为多次独立发现。所有 selected Java 摘录带原 Evidence ID；`selected-source-index.json` 对最后一批逐条索引。调查已成功 reset 154条记录并 close，无官版进程或设备会话。

重点 view Evidence：

- scheme处理器：`ev_c5893cb5aefffaa2c92d4d84abc855bc8100627ef45c4ab2ca9da67609555605`
- Activity Bundle构造：`ev_b2fc722b866a8e21adc97b46df673c83fc78759cba3aef9e8bd0097304b45a5b`
- Bundle转Map：`ev_7367f8bd8f92cad9768c510978dd9ded2f2921c786c4e9c45822d89de1a7cd7e`
- 资格调用：`ev_551519b29a6cdee50cf5a6302f42675da1734915f1370efa884b1d7d7c676a77`
- FormBody序列化：`ev_efcaf4ef92b41d0813d7186a851471e44c875526ac0ea50081d4588f0f13bfe0`
- 加密层读取表单字符串：`ev_c6103386db3cac9100889641fd4cfe7798a6eab877b51596181467b1fa48778b`
- eapi明文、加密与POST：`ev_913456d2602360519536937c1a6ab762202c07167eca8d26576d77ad4010a8c8`
- ext序列化：`ev_3c50ec2f5de465b81040970ae5964c5288b8289477ddf315d16629debfad1f8e`

这些均为静态观察，不是网络执行或到账证据。
