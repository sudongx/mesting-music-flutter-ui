# 汽水1.0.77助手对接契约

此文是App与独立助手的本地契约，不是NAS部署或真实官版接受记录。助手仍由“汽水自用 Windows／NAS 签名助手”原会话维护；用户已指定该会话处理配套修改。

所有请求仅 `https://api.qishui.com`，以助手真实config PC身份、原URL、方法、正文UTF-8及原应用头签名。不以Android伪造注册参数替代。Cookie只在原有显式HTTPS媒体track_v2开关范围参与签名；本版新增接口不扩大Cookie、CSRF、token或ImageX临时密钥交付范围。

| 精确方法与路径 | 本版query或正文 |
| --- | --- |
| POST /luna/search/track | JSON q/cursor/search_id/search_method=input，省略其他nullable字段 |
| GET /luna/video/uploader | query track_id空串、upload_type=0、scene=0；GET正文空 |
| POST /luna/pc/me/playlist/update | JSON playlist_id、cover_uri；沿用既有契约 |
| GET /luna/user/info | query user_id为当前或目标数字UID；GET正文空 |
| GET /luna/users/{数字UID}/following | query cursor/count/scene；首屏cursor必须存在且为空，scene=2汽水或1抖音 |
| GET /luna/users/{数字UID}/follower | 同上 |
| POST /luna/me/follow | 表单唯一字段user_id，Content-Type application/x-www-form-urlencoded; charset=utf-8 |
| POST /luna/me/unfollow | 同上 |
| POST /luna/me/music_wall | JSON严格 `{feed_music_wall_extra:{},ab_param:''}`；这是读取不是写入时长 |
| GET /luna/me/collection/artist | count=50；首屏省略cursor，续页只用服务器next_cursor |
| POST /luna/me/collection/artist | JSON artist_ids数组，本版一次一个数字歌手ID |
| POST /luna/me/collection/artist/delete | 同上 |

数字ID限制为1—30位；游标是官版String，不能猜为数字协议。App界限为256字符、无空白/控制字符，续页不在路径拼接，原URL不重建。Social首屏“缺失cursor”与“空cursor”不同。助手需验证这些精确契约的正反例，不能全局放开/luna、任意上传或Cookie。

Form签名的x-ss-stub覆盖实际表单UTF-8字节，不对JSON签名后又用bodyFields重新编码。图片由手机直传受限ImageX，临时授权和图片不交助手。新播放MCS事件也由手机按固定官方端点直接发送，助手无时长值写入、事件代理、奖励或任意业务接口权限。

原始官版字节证据和App合成请求验证在本轮私有release177研究目录，未进入公开源码ZIP。App可导出16个完全虚构的精确请求给助手本地策略核对；这不能替代原生签名、NAS部署或真实业务验收。
