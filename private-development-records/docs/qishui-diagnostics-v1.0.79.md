# 汽水专用诊断：1.0.79

入口仍为设置→连接与播放诊断→汽水专用诊断。保持应用不退出，复现目标问题后选择社交、时长或封面分组，导出JSON文件。导出不发业务请求、不播放或重放旧记录。

保持schema178结构，appVersion改为1.0.79、appVersionCode为100。封面固定协议元数据改为gatewayPath=/top/v1、signature=AWS4-HMAC-SHA256、service=imagex、regionMode=officialSdkDefault、region=sdwdmwlll。它们是固定协议常量，不包含真实临时授权或签名。

其余闭合阶段、状态码、固定安全错误码和有界结构摘要保持；HTTP200、parse成功、提交正回执和官版实际入账仍分开。精简JSON不超过4096字符；文件导出固定于私有qishui_diagnostics/mesting-qishui-report.json，不放宽任意路径或1MiB边界。

重点区分helper拒绝与图片服务apply/storage/commit拒绝。79时长读取需要NAS助手0.2.3；未更新时不能把助手拒绝解释为官方没有累计。新真实收听后若仍未确认，需要含listeningReport的本次记录，旧9分51秒不会自动补发。
