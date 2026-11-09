# 网易云广告配置诊断：1.0.82/schema2

沿用81手动只读入口及固定导出文件netease_ad_diagnostics/mesting-netease-ad-report.json。版本1.0.82/code103；schema从1升2，entry/identity/transport和旧outcome语义保持。

新增invalidContext：同次任务上下文超出256节点、8层或65536 UTF-8字节支持范围，未发广告读取；URL/格式错误仍由原入口解析器给invalidEntry。

requestContext仅含typeIdsPresent/adextjsonPresent/taskContextOnly、sourceFromEntry/backupUrlFromEntry/extFromEntry/rightsCommonExtFromEntry以及deviceSdkContextAdded/officialClientContextMatched。存在性说明本次尝试的请求形状，不记录实际值、URL或自由键。ext可按官版顺序覆盖基础source/backupUrl。原路由默认bizReportInfo字符串保持；extFromEntry=false不表示native归一化后的ext为空。taskContextOnly=true、后两者false明确完整官版设备/SDK广告上下文尚未对齐。

configuration.receiptHints在code200/业务拒绝/缺code时可观察noRetry/message/mainMsg/image存在性和类型。null用type=missing且present=true，与缺键present=false区分。noRetry只保留0/1（兼容'0'/'1'），其余仅类型；无论值为何均不自动重试。消息/图像原文不导出，不从消息对象展开已知规则字段。HTTP传输失败没有可用JSON时不猜提示。

configuration.singleSlotAliasObserved表示精确位缺失但只返回一个别名；singleSlotAliasShape仅结构，不输出别名。requestedSlotPresent仍false，outcome仍unsupportedLayout；多未知位置不选取。别名不等于本次81空ads的原因或观看成功。

旧结构预算120节点/深度5保持；单槽别名使用独立同样预算，总导出仍≤64KiB。精简复制≤4096字符、始终闭合，必要时configurationOmitted=true并把小型receiptHints移到根级。账号变化/离开前台/跨日保护和显式导出不自动上传保持。

本版不伪造设备SDK、曝光/点击/停留，不展示或领取。81实际空广告报告是已取得的事实；82真实返回、独立H5、完成及新领取需另验。
