# 汽水关注/粉丝空组兼容：179只读调查

本调查只读原有源码、原始DEX及用户交付的178诊断文件。未运行官版、手机、ADB、NAS、账号或官方业务请求；未调用REA；未改产品、助手、测试、版本或旧178文件。

## 已取得的现场边界

用户经root确认：同账号官版汽水的关注、粉丝均为空；抖音关注/粉丝在Mesting已能显示；报错发生在汽水空组。

`C:/Users/zyt/Downloads/mesting-qishui-report.json`为1.0.78/code99生成的44条专用记录。两次following读取均为助手HTTP200、官方HTTP200及业务0，响应根对象只有三项：`status_info`对象、`status_code`数字、`next_cursor`字符串；没有`follow_items`及`has_more`。其后的App解析器报`responseShape`。社交统计包含官方统计字段且解析完成。

这份报告没有导出请求scene或字段值。具体操作分组由用户描述和当前App默认分组交叉确认，不能单从HTTP200推断账号统计或列表完整性。

原文件SHA、选定事件及用户反馈记录在`following-observation179.json`；不读取或保存账号标识。

## 官版原DEX构造证据

证据：`constructor-and-page-mapping179.json`，读取此前已保存的`official19-classes21.dex.apk`内原始`classes.dex`，记录包装文件和DEX SHA256。

1. `UserFollowListResponse`字段`users`具有`@SerializedName("follow_items")`，类型为`ArrayList<MixedFollowItem>`，不存在把原始`users`当JSON字段的依据。
2. 该类公开无参构造方法33330：先调用`BasePageResponse.<init>`；在正常无hotfix返回的路径上，code-unit20创建`java.util.ArrayList`，22调用其无参构造，25将该空集合写入`users`。
3. `BasePageResponse`构造方法33050：只调用`BaseResponse.<init>`和hotfix检查，没有写`hasMore`或`nextCursor`。正常对象初始化下，`hasMore`保留JVM布尔默认`false`，`nextCursor`保留引用默认`null`。
4. `UserFollowService.a0/e0`把`getUsers()`、`getHasMore()`、`getNextCursor()`直接传入分页数据构造。没有要求JSON必须显式包含空数组或`has_more:false`的额外检查。

以上是原DEX的静态构造/直接调用证据，不是当前官版Gson反射构造、hotfix或真实服务器执行的观测。它支持按官版DTO正常缺省语义兼容“字段省略”，不能据此把显式null、错误类型或未知业务响应都当成空列表。

结合用户确认的真实空组与178现场业务0的稀疏envelope，本轮可最小修复的差异是App空组解析兼容。

## 最小兼容判定建议

以下条件应同时满足，才在缺失`follow_items`时使用空集合并结束分页：

| 条件 | 建议边界 |
| --- | --- |
| 数组确实省略 | 使用`containsKey`区分缺失与显式`null`。仅缺失走本兼容分支。显式null、Map、String、数字继续报格式异常。 |
| 明确业务成功 | 对实际envelope要求显式`status_code`为`0`或`"0"`；已知嵌套状态若存在须不与0矛盾。不从缺失状态码猜成功。 |
| 没有更多页 | `has_more`省略，或为既有明确false表示。`true/1/"1"`、显式null或错误类型均不得以空结束。 |
| 只有已知envelope | 优先仅接受现场已见的`status_info/status_code/next_cursor`及可选明确false的`has_more`。遇到`users/items/list/data`等未知承载列表结构，不猜字段、不丢掉它后显示空。 |
| envelope类型可核对 | `status_info`若存在应为对象；`next_cursor`若存在应为合法的既有游标类型/边界。继续沿用已有取消、账号隔离与分页链逻辑。 |
| 不改官方数值 | 空分组只决定该列表视图，不把未知关注/粉丝统计补0，也不修改其它分组或调用写接口。 |

其它包含正常`follow_items`数组的解析规则保持。建议覆盖“已见三字段空envelope”“显式null/错误类型”“more=true但数组缺失”“无业务码”“矛盾业务码”“未知列表承载字段”等正反例。此处没有编写或运行测试，由root实施并统一验证。

## Scene实际调用证据与本轮范围

`scene-calls179.json`重新从保存的`official19-classes19.dex.apk`原DEX解出四个方法：

- `FollowingListViewModel.KU`（20730）直接引用`DataType.ALL`和`FollowListSceneType.Default`，调用following service。
- `FollowingListViewModel.EU`（20722）分别引用`DataType.LUNA + SourceLuna`及`DataType.AWEME + SourceAweme`，对两个Observable执行zip。
- `FansListViewModel.AU`（20662）使用`ALL + Default`。
- `FansListViewModel.uU`（20695）分别请求`LUNA + SourceLuna`和`AWEME + SourceAweme`再zip。

此前保留的enum原指令确定`Default=0`、`SourceAweme=1`、`SourceLuna=2`。因此默认全部和两种来源分组均有官版调用依据，但仅靠这些引用不能证明歌手只出现于全部、只出现于某来源，或精确说明当前PC账号的服务端分组规则。共用DTO的条目类型为MixedFollowItem，用户/歌手命名空间仍须分别解析。

本轮用户已确认抖音分组可用，root决定仅修汽水空组兼容，暂不新增全部UI、切换默认scene或合并来源列表。ALL入口缺项作为已记录的额外能力差异，按实际后续需求处理。

## 当前本地助手策略

只读当前助手`qishui-signer/src/policy.mjs`和`package.json`；本地源码版本0.2.2，HEAD为`de172f68bb...`。精确哈希、完整HEAD及71—83行摘录见`helper-scene-policy179.json`。

当前`validateSocialQuery`明确允许`scene`为`['0','1','2']`；游标、count及路径的原有约束仍生效。它已经允许官版Default0，不需要为本次空组解析扩大助手白名单，也没有本次NAS部署验证。此结论来自当前本地源码，不来自旧笔记或交接措辞。

若以后确需全部入口，精确请求仍为`GET https://api.qishui.com/luna/users/{数字UID}/following`或`/follower`，query仅原有`cursor/count/scene`且scene为`0`；首屏cursor显式空串、count沿用既有上限、后续只用服务器游标。不能因此放宽任意/luna路径或向助手新增账号凭据。

## 保留的未知

本轮已能证明并适配已确认空分组的DTO缺省差异；没有验证非空汽水列表、全部分组、歌手/用户的精确来源归属或PC身份对所有社交接口的支持。PC资料读取成功不单独证明其它common路由支持；这些未验部分不影响已确认空组的最小修复范围。

## root最小补丁只读复核

复核目标为工作区`qishui_social_models.dart`的`_confirmedEmptyFollowPage`及`test/qishui_social179_test.dart`；本调查没有改它们或运行Flutter。

初稿正确保留了以下边界：数组字段必须省略而不是显式null/错误类型；只接受已知根envelope字段；需要至少一个业务成功码且所有已收集码均为0；`has_more`若存在必须明确false；游标必须满足既有类型和字符边界。新增用例包括现场三字段envelope、数字/字符串0、明确false、null/Map/String数组拒绝、更多页拒绝、非0/矛盾码拒绝，以及两种来源分别读取并保持隔离。

只读审查发现初稿在支持`data`包装时尚需同步校验外层：仅检查已选root会忽略外层`items`等未知列表承载；当内外层均有`status_info`时，`root['status_info'] ?? response['status_info']`也会隐藏外层非0状态。已向root建议外层白名单包含仅原envelope字段加`data`，并分别收集内外`status_info`的code/status_code；增加“外层未知列表+内层空”和“外层非0状态+内层0”负例。该项属于诊断/解析边界，不需要修改助手或scene。
