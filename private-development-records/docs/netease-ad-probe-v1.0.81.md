# 网易云广告配置诊断：1.0.81

入口：“签到与会员→网易云→广告配置诊断”。仅在本人点击后读取一次新任务入口和对应广告配置，自动进入页面不会请求广告。报告与原“连接与播放诊断”schema2分开，本页专用schema1。

报告固定feature=neteaseAdConfiguration；stage为entry/adData，transport=existingEapi。identity沿用defaultPc/sessionPc/sessionAndroid/sessionOsx/sessionOther分类，不能当作完整官版身份。readOnly=true、adDisplayed/trackingSubmitted/rewardSubmitted=false描述本验证器的能力，不代表其他独立操作从未发生。

outcome区分configurationObserved/noAds/unsupportedLayout/invalidEntry/noSession/businessRejected/requestFailed/receiptIncomplete/cancelled/accountChanged/dayChanged。configurationObserved只证明同次位置返回了非空对象，不表示素材可播或服务端已认可广告完成。networkOutcome来自固定错误分类，httpStatus与businessCode分别有界；平台错误正文不导出。

entry仅含80已有纯枚举/存在性字段。qualificationRequested=false依然可能是省略或明确false，本次不因它而把广告当作免广告资格。configuration只投影同次请求的精确广告位，其他位置不替代；slotCount/fieldCount/list count上限100，未知字段名称和值不导出。

selectedAd和responseShape内的字段只输出类型；链接只分https/http/officialNative/relative/otherScheme/缺失/异常，不保留地址。extJson/generalRightsInfo等有限字符串JSON可递归解析固定字段，req_id/contextInfo等仅结构、source仅类型；规则数值受字段范围限制，时长单位和资格不推定。最多120节点、5层，过长或受限会标记。

精简复制≤4096字符、始终闭合，过大时configurationOmitted=true；完整文件≤64KiB。报告平时在当前页内存中，退出不恢复；显式导出才生成私有netease_ad_diagnostics/mesting-netease-ad-report.json，系统选择分享或保存，不自动上传。复制失败可使用文件导出，账号变化会阻止旧报告导出。

本轮主机只使用虚构账号、广告及响应。真实响应是否接受现有eapi/默认身份需要本人安装后核对；未实现新的xeapi或SDK承载，不向第三方服务转交凭据，不切换身份重试，不展示/跟踪/领取。后续真实广告展示与服务端入账必须另验。
