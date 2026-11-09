# 网易云9.6.15：真实前台广告、完成事件与余额同步可行性

日期：2026-11-08（Asia/Shanghai）。用户本次明确要求继续研究真实前台广告展示、官方完成回调和完成后的自动领取/余额同步。此前隐藏广告与程序代点广告的方案不属于本次范围。当前产品仍为1.0.80/code101；本轮只读调查，输出限本私有目录，没有改产品/测试/版本，没有构建、安装、手机/ADB、真实账号、NAS或官方业务请求。

## 1. 结论与推荐候选

目前有证据支撑、值得进一步验证的候选是：Mesting读取当前账号的真实领取入口和基线余额/任务状态，显式唤起已安装的官版网易云，由官版在前台展示真实广告并自行完成官方奖励处理，用户回到Mesting后重新读取官方余额和任务进度。

这不等于已完成Mesting内嵌官方广告SDK：未找到或取得可供Mesting使用、可给网易云账号发免费听权益的公开SDK/外部完成回调契约。现有静态资料不能证明不存在商务开放或其他未调查渠道，只能说明本会话尚不具备它们。

候选也不等于实机深链验收通过：仅证实官版公开接收orpheus URI、内部存在该任务路由，尚未验证从Mesting发起的具体motivationAd入口是否受外部来源/动态配置限制，或在当前账号能否打开并完成。

## 2. 当前真实诊断如何进入官版流程

用户发来的80版schema2诊断显示officialNm入口已解析成功，adPosition/resourceId/source存在，ext不存在；qualificationRequested=false后Mesting以qualificationNotRequested在本地停止。没有资格请求或gain事件。该布尔值不能区分开关明确false与缺省false，不能解释为官版判定无资格。

既有完整官版证据：

- `AdMotivationVideoActivity.onCreate`：isNeedGetRights=true才先查资格，false直接m7(Bundle)。父Evidence `ev_d24822b1ddd5278c748d5518c23f511902b51638f6edf1ed427a6e27a4de4b71`，保存在旧release160 research-qualification/evidence-final.json。
- m7复制参数创建`AdMotivationVideoFragment`。Evidence `ev_d63380831c2bb3d0ec6433cc8bd050e6b0f67a047110b628f97e9cca7d957107`，同一旧bundle。这里没有“false就等于无需广告直接gain”的逻辑。
- 上述分支与用户录屏“前台广告→进入京东并停留→返回发奖”相容；静态观察没有执行用户该次广告。

## 3. 前台页面能否由Mesting直接调用

对原始9.6.15 APK运行aapt dump xmltree，只读得到original-manifest.txt：

- `AdMotivationVideoActivity`没有exported声明，也没有intent-filter，Android活动默认不导出。Mesting不能作为普通第三方App直接启动这个内部Activity。它不是公开SDK接口。
- `RedirectActivity`明确exported=true，公开VIEW/DEFAULT/BROWSABLE入口接收orpheus scheme。使用公开深链委托官版有静态接入口依据，但仍需实机验证特定任务。
- RedirectActivity的d7有外部来源标注、配置判断及冷/热启动分支，末端可到MainActivity或lg.w1派发。没有执行它，不能把静态URI接收器等同于任务路由一定外部可用。不得伪装MUSIC_LOCAL、删除来源标记或绕过其路由/权限判断。

新增Redirect分析载体只含原classes14.dex与原manifest，源成员SHA256 `50142650a42375c1a09be20154cbb4449b1b7665b22cdff5d388e41f2b3944ef`。载体不可分发/执行，provenance另存。

新父Evidence：Redirect类清单`ev_a971239fbc1ab8153ab6a6c9c664448cd29e97bccbef07b43bcf9d0bf3b1fbd2`；onCreate `ev_9e7fa58bae008b1a5d9941d1e0586d4e46ccfa8a96b0a975e39eaf7125e724e8`；外部派发d7 `ev_29e5dc918fb930693a192ac89d73ac72b5942bd5c574bdcd5e461acc557feb34`（完整smali，非Java恢复）；Q6 `ev_61f3b111574a19b9768d8e1405450a85c283127d8c277307c2e2eae6fc5f5475`。不把这些候选静态路径当实际启动证明。

Android主文档：

- https://developer.android.com/guide/topics/manifest/activity-element#exported
- https://developer.android.com/guide/components/intents-filters

## 4. 官方“完成回调”位于哪里

官版现有链路是先请求gain，再在官版内部发布结果：

1. 旧`o30.i1.F2/f3`从同次真实Ad及实际生命周期构造奖励上下文；本轮不生成或复制账号/广告凭据。
2. 新`o30.i1.u.invokeSuspend`调用g3，再把结果带入主线程回调。父Evidence `ev_05ce134d01d5fdab4350f9a5532c8b2cad2c2adfd82f2b661bab5a5a7b4e2c84`。
3. 新g3实际发`ad/listening/rights/gain`，解析`ListeningRightsGainResult`，异常使用默认结果。父Evidence `ev_02be59ce68c0074f0e58978905a50d26f5226f549f44106816765b09ade7df5c`。
4. 新`u.a.invokeSuspend`用返回DTO更新B2/o3与LiveData。父Evidence `ev_523bab7209219eff9f13cbd925af6d7809ff09708aff107b7a8be3a9e23b8dd4`。
5. 旧`l40.j0.h`发送`NM_MOTIVATIONAD_GET_GAIN_RESULT_NOTIFICATION`之前明确`intent.setPackage(ApplicationWrapper.getInstance().getPackageName())`，附带gainStatus；该通知目标是官版自身包，不能由Mesting普通接收器取得。旧完整Evidence `ev_a94fa2a003d72c01e51ab33c21ab5becfbebf88e90e514e7a8d602246510d8c5`，保存在release160 research-gain/rea-evidence-final.json。
6. 新Activity.h7仅finish；新onDestroy对尚未通知的退出走j0.j默认通知，不表示已领取成功。父Evidence分别为`ev_e6f57e34f4deabbcf10bc6bf2df93fe155e45dd0ec3254c310ce8f8fc1fdcead`、`ev_3d3c9a40c14cbbff9599be2bd40713eef7ad1db4ba0353e9a56d6cf5be4450b0`。

因此：不能把“官版App退出/返回Mesting/onResume/RESULT_OK”当作已领奖的可信证明，也不能在委托官版处理后再补发一遍gain。已追到的是官版内部的领奖结果通知，未找到可供Mesting使用的跨App完成契约；这不是对所有SDK、插件或商务能力的全面不存在证明。

Android跨Activity结果规范要求接收方明确返回结果，缺少结果也可表现为RESULT_CANCELED；通用返回事件不等同于业务完成：

- https://developer.android.com/training/basics/intents/result
- https://developer.android.com/reference/android/app/Activity#onActivityResult(int,int,android.content.Intent)

## 5. Mesting可实现的自动部分及当前已有基础

`netease_rewards_provider.dart`已有AppLifecycleListener.onResume→resume；当前resume在无操作占用时先refresh，再独立判断自动签到。refresh→service.load读取官方余额、任务及签到状态。因此“从官版回来后刷新”有现成基础，不是需要重写同步协议。

建议若用户确认委托路线，再实现一个独立的官版任务协调器：

- 用户主动发起时冻结当前账号/代次，读取官方余额/任务基线及同次真实入口。仅允许已证实的受限orpheus任务格式，显式限定官版包名；不转发Cookie/token/CSRF，不打开backupUrl或任意外站。
- 检查官版安装/可启动状态并提示两边应为同一账号；不读官版私有数据库或导出它的登录凭据。未安装、入口不支持或被官版拒绝时给出正常停止结果。
- 广告实际展示、用户所需点击/停留、官方任务判断和gain全部由官版负责，Mesting不模拟这些交互、不补造完成回执、不重复领奖。
- 记录“已唤起/已离开Mesting/已返回/官方读取已完成”这类真实状态；仅靠返回不增加Mesting本次确认领取计数。
- 用户返回Mesting后按当前账号重新读取官方余额和任务；必要时进行有界的只读延迟重读。读取变化显示“官方余额/任务已更新”，不把余额差异当精确的单次领奖凭据；没有变化或读取失败显示“未确认”，允许手动刷新。
- 账号替换、退出、跨日和进程恢复撤销旧观察，不把迟到数据写给新账号，不重放旧未知gain。与原直接申请的持久journal分开，委托并不假装Mesting已提交gain。
- 诊断输出固定事件分类和官方读取阶段，不导出实际领取URL、账号或广告参数。界面保留原玻璃壳和底栏。

关键限制：具体深链可用性、官版同账号实际发奖、返回后自动同步及升级恢复均未在设备验证。方案需要用户明确接受“官版承载广告；Mesting发起并同步”的范围变化，才能实施。它没有提供Mesting内嵌SDK的完成回调能力。

## 6. 公开资料与保存状态

Firecrawl两次公开查询均返回HTTP402，没有成功搜索ID或可反馈结果，未尝试登录/充值。改用内置网页搜索，采用Android官方文档；针对music.163.com/163.com免费听激励SDK和回调的本次有限公开查询未找到对应公开契约，不能据此断言网易云绝无合作接口。

新REA26条记录（含类/方法和投影视图，非26次业务验证）完整保存为rea-evidence.json，367951字节，已reset清理；旧159/160及80冻结收据只读保留。研究输入与散列见inputs-and-scope.json，原始官版APK仍为`e6427bcb35ccd9e8858ee55c46ec3db56b2f09871adcd8e897244d96cfcf7894`。

当前结论清单：

| 问题 | 状态 |
| --- | --- |
| false资格分支正常后续是什么 | 已回答：进入官版广告Fragment |
| 能直接调用官版内部广告Activity吗 | 按manifest和Android规则不可作为普通第三方App直接启动 |
| 是否有公开深链接收器 | 已证实存在；特定广告任务的外部可用性仍待实机 |
| 已追到的完成通知能直接传给Mesting吗 | 指定通知被限制到官版自身包；未找到外部回调契约 |
| 官版完成后Mesting是否还应再发gain | 不应重复，已追链路的通知本就在官方gain之后 |
| 自动刷新余额是否有基础 | 有：现有onResume/refresh/service.load；新委托协调尚未实施 |
| Mesting内嵌官方广告SDK是否已可实现 | 未取得所需开放接口/SDK回调契约或实际兼容验证 |
| 是否做了真实广告/账号/设备实验 | 没有 |
