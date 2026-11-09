# 网易云免费听阶段诊断：1.0.80

入口仍是“设置→连接与播放诊断”，无新增页面或主动业务探测。保持App不退出，复现一次后复制精简记录；最近80条只在内存保存，不自动上传。精简JSON始终完整且≤4096字符，不截断字符串。

## 字段

- rewardStep：entry / progress / qualification / claim / balance / signState / signIn。
- rewardReason：accepted；entryMissing / entryWrongType / entryTooLong / entryMalformedUri / entryUnsupportedRoute / entryDuplicateField / entryMissingField / entryInvalidPosition / entryInvalidExt / entryInvalidEncoding；qualificationNotRequested / qualificationDenied / sourceUnavailable；businessRejected / receiptIncomplete / gainDenied / httpFailure / transportFailure。
- entryRoute：officialNm / officialNe / legacyHost / unsupported。仅分类，不保留真实scheme、host、path或链接值。
- entryValueType：missing / text / number / boolean / list / object / other。缺入口与空文本可由分类共同判断。
- entryHasAdPosition / entryHasResourceId / entryHasSource / entryHasExt：能够解析后才记录的存在性位，不表示参数有效或有领奖资格。
- qualificationRequested：入口明确提供的布尔分支；false不会被强制为true。
- rewardIdentity：defaultPc / sessionPc / sessionAndroid / sessionOsx / sessionOther。仅代表发请求时的os cookie分类，非完整官版身份；通用请求UA/版本没有改变。

HTTP状态通过网络异常中的数值保留，业务code在responseValidate事件保留。网络层和业务层可能各记一条，条数不是请求次数。entry本地成功只证明解析，qualification成功只证明资格返回，claim正回执与官方余额实际新增仍分开。

所有新诊断类型只接受枚举/布尔值，不接受任意字符串、响应对象或Map。无原始actionUrl/query值、账号ID、Cookie、令牌、广告reqUid、曝光/点击/停留或完成凭据。已确认的余额/任务读取保持，旧未知写入不重放。
