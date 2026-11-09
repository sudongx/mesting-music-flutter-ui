# 汽水免费听：奖励回调、服务端结算与权益读回

2026-11-05，官版21.5.0/code100215040，只读离线分析。用户明确暂不连接手机。本阶段没有联网、发送短信、调用奖励请求、执行APK/原生库或改动Mesting产品。

## 结论

原模块触发官版的广告完成监听器后，宿主仍要执行真实结算和权益刷新。已从当前官版代码把这段补齐到**回调参数 → 奖励结算请求 → 业务有效性检查 → 权益读回 → 成功/失败分支**。

因此可以据此设计Mesting自己的奖励状态机，但**不能仅复制监听器回调或本地免费字段，就宣称免广告领取、到账或独立客户端可用**。当前未取得独立账号的实际结算接受和余额变化证据。广告阶段下发的扩展参数、账号/任务上下文及请求安全层仍需真实来源，不能猜造。

## 正常奖励回调

当前包classes4的`RewardAdSdkService$showRewardVideoAd$3.onRewardComplete`已用REA检查方法体。父证据`ev_7d[PHONE REDACTED]a5025f2bfd0c23390a941478b244eb033cbce3e4958bda8e096`。

- rewardType为1或2时，将watchTime、inspireTime、`watchTime >= inspireTime ? 1 : 0`、isFallbackAd、postDoneExtra构造成RewardVideoAdCompleteParams，交给业务监听器。
- rewardType为4时，次数使用`requestParams.rewardedTimes + 1`，并通知再次奖励管理器。
- 其他rewardType在这段方法直接返回，没有据此发放成功。

此处只建立客户端完成参数，不代表服务端认定任务已完成。原Xposed模块借用的就是这类宿主回调；Mesting进程没有那个已经初始化的官版监听器对象及其全部会话/任务上下文。

离线直接调用索引把后续业务路径定位到：业务监听器 → Mannor监听器适配 → AdRewardDelegateManager.mAdnShowLoadListener.d → 静态I → `AdRewardDelegateManager.o0(...)`。相关原始指令在`reward-flow-call-index-v2.json`、`reward-flow-call-index-v3.json`；这些索引不覆盖反射或运行时Hotfix。

## 结算请求与来源

`AdRewardDelegateManager.o0`的REA父证据为`ev_151c97a5f9c863363ca122c4b47cd1f2bc5e95fa75127a44ce96028b29568123`。反编译标注存在重复控制块，因此只对明确可见的字段读取、分支和调用作结论，不把反编译文本直接复制成实现。

这段方法：

1. 根据AdSource选择NORMAL或OCEAN_ENGINE结算场景，读取当前RewardShowInfo的任务类型、LuckyInfo、任务信息。
2. 从当前EventContext读取track_value/group_id，计算自记录起点F到服务器同步时钟的经过时间，从Bundle读取post_done_extra。
3. LUCKY任务走AdRewardConfigManager.O；普通任务走AdRewardConfigManager.o，再进入共同结果处理。不能把不同任务分支的参数混抄。
4. 结算Observable缺失时进入失败处理（有resolution时明确报`reward settle observable is null`），不是自动构造成功。

普通请求构造方法`AdRewardConfigManager.j`的REA父证据为`ev_a0afd850844d705a76479174e45e82104d5f07fd41df82c458ff655a143cff49`。它建立AdIncentiveDoneRequest，传给用户生命周期中的AdRepository.Z。未取得用户仓库或Observable时可返回null。

原始字段注解与接口声明恢复如下：

| JSON字段 | 已观察来源/边界 |
| --- | --- |
| transaction_id | 调用者给定字符串；null时用UUID.randomUUID()。这是客户端事务标识，不能据此保证服务器幂等或任意重放安全。 |
| task_from | TaskFrom.getValue()。真实枚举来自当前结算场景，不随意填值。 |
| compensate | 方法布尔参数。不是独立获得补偿资格的证据。 |
| launch_duration | 可空时间参数经过DateUtilKt.n；null时0。单位/转换不能凭名字猜。 |
| play_type | 当前整型参数包装为Long。 |
| post_done_extra | 广告/结算上游传入的扩展字符串，不能编造。 |
| quests_type | 当前任务参数。 |
| playing_track | NetPlayingTrack.Companion.a以真实曲目上下文构造。 |

AdRepository.Z直接调用AdApi.adIncentiveDone；接口原始注解是`POST /luna/advert/incentive/done`，body为AdIncentiveDoneRequest。同接口还声明`/luna/advert/incentive/config`、`/luna/advert/incentive/retrieve`，但本报告没有调用它们，也没有仅凭路径证明它们可匿名/免广告使用。

请求体字段存在不等于每个场景必需，post_done_extra的具体校验、任务资格、会话/公共安全上下文及服务端幂等规则均未运行验证。

## 业务有效与权益到账分开

`AdRewardDelegateManager.s0`明确检查`AdsRewardSettleResponse.isValid == Boolean.TRUE`。有效才进入D0；false或null进入B0失败路径，代码2000001，信息`isValid == false`。父证据`ev_bea211b92e7e22ba31156ec548adc475e1e0b93a92e21a833d1e23a47c93fd20`。

D0并没有仅因结算响应有效就结束：

- 无权益服务且存在待处理resolution时，进入`entitlement service is null`失败路径。
- 注册AbsCommerceInfoListener并调用IEntitlementService刷新。
- 监听到SceneRewardArrived、SceneLuckyRewardArrived或SceneRewardArrivedIdempotent的成功刷新后，才记录成功状态、处理回执、注销监听器并完成resolution。
- 权益刷新失败同样注销监听器，并以`commerce_fail`交B0。

该方法的REA父证据为`ev_c588269297e9bc336b7dfcaaed628bc5080c328218dbde17fbd565d6b8bfd750`。这证明官版把“结算回执有效”和“权益刷新成功”分成两个阶段；没有把本次代码阅读当作某个真实账号余额已经增加。

异常回调u0将Throwable转为BaseLunaError后调用B0；部分LUCKY错误会提示服务端消息。没有看到这段回调自动无限重试。父证据`ev_175b122a81ea11530075ccb6938fd441d7c3bd0a8a423d5891acdc4cbeafb5a6`。

## 权益读回模型

直接调用索引定位`CommerceInfoRepo.c0 → CommerceInfoApi.getMyCommerceInfo`，接口声明`POST /luna/commerce/v2/commerce_info`。返回作为JSON字符串再解析；原模块改写的`CommerceInfoRepo.j`就在这条权益数据路径，改写本机数据不能当服务器实际账户权益的变化。

CommerceInfoResponse包含membership、benefit_base、play_entitlements、incentive、assets等不同模型；不能把它们合并为一个本机余额计数。

已恢复的play_entitlements字段：expire_at、reward_tasks_finished、reward_finished_task_info、daily_reward_tasks、original_daily_reward_tasks、reward_task_guides、reward_tasks_time_ms、video_complete_acquired_time_ms、need_refresh_reward_time及cool_down_info。

RewardFinishedTaskInfo字段包括minutes_obtained、tasks_finished、tasks_to_full_day、full_day、days_obtained、days_finished、all_full、effect_time等。incentive模型有available、cooldown_end_time、tasks、reward_details、expire_time(s)等。*_ms字段和minutes_obtained有明确名称线索；其他时间值单位、期限含义及跨日规则仍需实际赋值/读取代码核对，不混用毫秒/秒/分钟。

结算返回的reward_details项还包含amount、reward_type、claim_status、expire_time和capabilities。amount的类型为Long，不因类型而擅自认定单位为分钟。assets.asset_infos是资产条目，还包含asset_type、asset_order_id和兑换状态/期限，不等同听歌余额。

对应原始注解：`contract-CommerceInfoResponse.json`、`contract-CommerceInfoAssetsEntity.json`、`contract-AssetInfo.json`、`contract-AdRewardConfigManager.json`。

## 广告关闭与重复处理

RewardCloseResultCoordinator.d在同步锁内增加pendingCount并创建RewardResolution；h只有closeRequested、pendingCount为0且尚未安排关闭时才发布关闭任务；j完成一个待处理项再检查关闭条件。

REA父证据分别为`ev_5dfa210cb6d8ca502fefd070e3564abcddecc253d93052e7debc215b7d16c08f`、`ev_f7eb7b3de2b63a0f3467302971d1506d3e07e9514d267259dcb436a9909fa9d6`、`ev_b1409d63d162d4cec7e8fce9c40c40b4b2eb3ddce768d346e4460cc5ee20ef48`。

这是客户端把关闭和异步结算协调的机制，不是服务端防重复的全部实现，也不能把它当作“多次回调就多次到账”的证据。

## 对独立Mesting实现的约束

需要独立汽水会话、真实任务上下文、阶段状态和权益读回。应分别表示任务不可用、等待正常任务完成、提交结算、有效回执、权益刷新、成功、拒绝与结果未知；账号撤销和日期变化应取消旧结果归属。

网络写入超时或回执丢失不能直接当失败后重放，因为此处没有证明服务端幂等规则。连续领取应建立在真实资格和已确认结果之上，遇到拒绝/未知停止；不能循环制造广告完成事件、任务证明或本机分钟数来冒充已到账。

当前完成的是**可核对的静态结算调用链与模型**；尚未实现或验证免广告独立领取，也未证明登录/权益接口接受Mesting。未改产品或发新APK。

本阶段28条REA记录在`reward-settlement-rea-evidence.json`和相同checkpoint，已导出/reset/close；自有结束分析助手按记录身份清理，未动其他应用或产品缓存。原始DEX索引的摘要与指令位置也保留，后续无需重跑全包。
