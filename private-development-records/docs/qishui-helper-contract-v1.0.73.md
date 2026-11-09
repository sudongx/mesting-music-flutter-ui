# 汽水1.0.73所需助手契约（不是部署记录）

本轮未修改独立助手源码，也未访问、测试或部署NAS。原助手会话维护与NAS部署仍需另行授权；本地APK改变不会自动更新NAS。以下仅为可审核的对接需求，不要求主会话接管助手或发消息。

1. 72已约定的账号签名：仅显式开启、自建HTTPS、精确官方POST /luna/pc/track_v2，允许该次适用Cookie按原字节参与签名；其他独立token/CSRF和账号jar不外发。旧policy拒绝Cookie的400证据不能解释所有未开开关时的失败，亦不等于旧301根因。
2. 历史新增：POST https://api.qishui.com/luna/pc/me/recently-played-media，正文为JSON `{"media":[{"id":"曲目ID","type":"track"}]}`。使用原PC身份、原样URL/正文及允许的应用头签名，不把音乐Cookie或独立token加入本接口助手输入。客户端另向官方发送其适用凭据。GET同路径是云历史读取，与POST新增分开验证。
3. 图片授权读取：GET https://api.qishui.com/luna/video/uploader，固定query包含track_id空、upload_type=0、scene=0及当前PC参数；GET正文为空。此路径来自官版UploadApi，Image=0/Default=0，不能臆造/pc/video/uploader。客户端使用原PC应用签名头，此次无账号Cookie交助手。返回的临时ImageX上传凭据只在手机本次内存使用，绝不交NAS。
4. 歌单更新：POST /luna/pc/me/playlist/update，正文包含playlist_id和cover_uri。只允许服务器返回的图片key，不使用本地路径；签名后正文不得重排。当前客户端沿用留存PC JSON更新契约，不能将移动版FormUrlEncoded直接混入此请求。
5. 现有下载资格 /luna/commerce/v2/check_download 是否在当前NAS部署允许仍未核对；本轮不绕过下载资格，也未扩活动奖励写入。

手机直接处理ImageX的Apply、存储上传、Commit，助手不做文件、图片或媒体代理，不记录/代理ImageX临时密钥。助手白名单应只增加经确认的精确方法和路径，不全局放开/luna或任意Cookie；现有访问令牌鉴权、正文大小、超时、禁止跳转及私密日志保护保持。

搜索和歌手目录使用与扫码会话一致的PC参数直接向官方读取，本轮没有为它们新增启动NAS请求。能否取得官方结果、上述新增路径是否被当前NAS允许，均须另行真实验收；匿名连接测试通过不能替代。
