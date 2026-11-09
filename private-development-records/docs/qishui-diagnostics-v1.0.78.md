# 汽水专用诊断：1.0.78

入口：设置→连接与播放诊断→汽水专用诊断。保持应用不退出，复现目标问题后选择“关注与粉丝”“听歌时长”或“歌单封面”，优先导出JSON文件发回；也可复制精简记录。专用缓冲与原80条跨平台诊断独立。

导出schema178，包含appVersion=1.0.78、appVersionCode=99、platform=qishui、group、eventCount及完整events。buffer为本次进程内存，只有用户显式导出时生成文件，不自动上传。后续发版应同步诊断版本标识。

feature区分socialStats/following/followers/userInfo/userFollow/userUnfollow/artistCollection/officialListening/listeningReport/coverUpload/playlistCover。stage区分helper/identity/request/response/parse/submit/receipt/grant/apply/storage/commit/readback/ledger等闭合名称。HTTP200仅是response/helper阶段的观察；后续parse或receipt仍可失败。

shape只含安全固定字段的类型、字段数、容器数量和有界嵌套结构，未知属性名称和值均不导出。serviceCode只允许固定助手策略码或ImageX错误码；其他非空值记unknown和serviceCodePresent。businessCode只允许严格有界数值。identityReady/ownerReady/willSubmit/receiptAccepted均为布尔，不含身份或请求正文；receiptAccepted不等于官版时长入账。

all/cover导出另含固定imageUploadContract：gatewayPath=/top/v1、signature=AWS4-HMAC-SHA256、service=imagex、regionMode=emptyUnverified。路径由留存官版静态证据确认，空region仍未完成实际配置链核验。

复制精简记录最多4096字符，完整事件删除以适配长度，不切断JSON；极大的单条shape可从精简版省略并明确标记，文件版保留。JSON文件固定为应用支持目录qishui_diagnostics/mesting-qishui-report.json；原生桥只接受此固定文件，拒绝任意路径及大于1MiB文件。复制内容会在本机读回核对，跨应用粘贴仍以最终收到的文本/文件为准。

导出不读取原始账号库、不启动播放器、不发官方/NAS请求，也不恢复或重放旧时长。真实响应缺口仍需要用户复现；这个诊断功能本身不代表关注/累计/上传或时长入账成功。
