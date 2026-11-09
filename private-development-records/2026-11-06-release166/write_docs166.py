"""Write reviewable local delivery records after the authorized replacement."""
import json
from pathlib import Path

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
checks = json.loads((OUT/'host-check-summary.json').read_text('utf-8'))
apk = json.loads((ROOT/'release/Mesting-Music-v1.0.66-verification.json').read_text('utf-8'))
installed = json.loads((OUT/'device-after-install.json').read_text('utf-8'))
assert installed['version']=='1.0.66' and installed['code']==87
assert (OUT/'native-packaging-verification.json').exists()
assert len(json.loads((OUT/'qr-javascript-interface-verification.json').read_text('utf-8')))==2

validation = {
    **checks, 'apk':apk,
    'installation':{'version':installed['version'],'code':installed['code'],
                    'retainData':True,'originalFirstInstallTimeRetained':True},
    'actualApkNativePackagingChecked':True,'actualR8JsCallbacksChecked':2,
    'agentTriggeredSms':False,'officialOrMestingPrivateCredentialFilesRead':False,
    'qrGeneratedInFinal66OnDevice':None,'realQrAccountAccepted':False,
    'fullQishuiMediaBenefitsOrDspAccepted':False,
    'netEasePreviewPhysicalAcceptance':False,
    'prior64BasicKugouAndNetEasePlaybackUserAccepted':True,
    'source63ZipBackfilled':False,'gitCommitted':False,'gitPushed':False,'published':False,
}
(ROOT/'docs/validation-2026-11-06-v1.0.66.json').write_text(json.dumps(validation,ensure_ascii=False,indent=2)+'\n','utf-8')

fixes = f'''# 1.0.66：汽水仅保留官版扫码登录

用户确认按 myMusic 对齐扫码，并明确改为“移除手机号登录，只保留扫码登录”。
因此本版停止短信 2156 和移动端安装注册／原生安全初始化这条调查，不宣称解决 2156。

## 具体实现

- 原欢迎、平台选择、未登录和账号入口继续使用稳定的 QishuiLoginPage 路由，内部直接
  显示扫码页。移除手机号／区号／验证码表单、发码倒计时和短信安全页。
  历史手机号实现仅保留作回归／迁移参考，生产入口不再导入；实际双 ARM AOT 检查其
  send_code 和 sms_login 端点均不在运行代码中。
- QishuiQrContext 独立维护每个 QR 的 16 位 Web device_id、15 位 install_id 和 88 字节
  随机数编码的启动 nonce；公共参数对齐已能工作的 Android myMusic。
  这些是 PC/Web 会话字段，不是手机 BDInstall 注册结果或原生签名材料。
- Android 同源 WebView 加载原有字节不变的 SDK／安全页，初始化后限于汽水域清理 Cookie，
  将同一个 nonce 写入 xmst／xmsty。生成、查询、安全验证和资料核验使用同一会话；
  后续保留 SDK 自己更新的运行状态，不在每次轮询时重新播种。
- 二维码保留服务端原始 qrcode_index_url。文案改为官版汽水扫一扫；新增用户主动点击的
  “打开汽水扫一扫”，通过显式 com.luna.music 包和公开 scan_qr_code 路由打开。
  同一手机先截图，再在扫一扫中选相册图片；返回 Mesting 查询原 QR。
- 保留 2.5 秒查询节奏、5 秒限流退避、本人安全验证、取消／过期／旧结果保护。
  必须由服务端确认并核验真实 Luna 资料后才提交；不能仅凭官版显示确认或残留 Cookie 登录。
- Web 身份随账号加密保存，并用于后续读请求和资料刷新；旧存档缺少新字段仍可恢复。
  错误文案也对新 nonce、设备字段和 token 做脱敏。
- 原网易云试听补源、下载选源和酷狗／网易云播放输入字节保持；原签名、锁和原生库保持。

## 来源及实际证据

- myMusic：9c0f1f0ccb1b1046306f61c50998e327c040a6bc，SodaQrLogin.kt／SodaQrSigner.kt。
- SodaM：f43a22b6239e4fb6c4c099566f6722bcecfb9b60；锁定 libresoda
  5edd2ff3b825f0a16b1e281204822ee06842df9c。NOTICE 已补充对齐来源；安全资源未修改。
- 用户在 Windows SodaM 使用汽水官方 App 成功扫码；亦提供 Android myMusic 可登录的对照。
- 主机和手机独立匿名 WebView 对照均能生成 QR、补 44 字符签名并查询到 code0/new。
  手机诊断包已移除。此证据没有经过真实确认，不能据此判定 2156 根因已确定或本版已登录。
- 两个可工作参考也固定发送 is_frontier=true，不能仅凭创建响应 false 就认定该字段错误。

## 验证及边界

Beta {checks['beta']['files']} 文件最终有效用例 {checks['beta']['passed']} 通过／2 条件跳过；
首轮全量 2416 通过，末次 {checks['targeted']['wholeFileReplacements']} 整文件复跑替换对应结果，包含新增 1 项脱敏用例，
不把复跑累加。Stable 63、导航 55、分析 0；8 张主机图已查看，捕获用例包含在上述结果。
首轮旧“无 Web 身份”断言和次轮触感偏好夹具失败已修正，原日志保留。

原生音频 14 项仅继承 64 同生产源码／runner 输入的既有结果，本轮重新比对输入而没有重跑。
实际 66 APK 另验原证书、双 ARM、定制引擎、7 个 shader、12 个旧非 app 原生库、
原 JNI／DSP 声明和两个带运行时注解的 R8 JavascriptInterface 回调。

已按授权保留数据覆盖为 1.0.66/code87，原首次安装时间保持；未卸载或清除 Mesting 数据。
真正的 66 扫码、资料核验／保存和冷恢复仍待本人验收。完整汽水媒体、下载、写入、权益、
奖励和 DSP 不因扫码改动自动视为接通；未适配操作会提示到官方 App 操作。
网易云例曲《可我只是海》—LBI利比的实机自动补源／全长仍未在本轮验收。

70 份原保护物保持；66 APK 和完整源码另存。未回填冻结的 65 文档／包，未补 63 源码 ZIP，
未恢复旧 51 回收 APK，旧听歌日志不补发。未 Git 同步／清理／提交／推送／上传／发布。
'''
(ROOT/'docs/fixes-2026-11-06-v1.0.66.md').write_text(fixes,'utf-8')

(ROOT/'docs/INSTALL-v1.0.66.md').write_text('''# 1.0.66/code87 安装与扫码验收

本轮授权的 adb install -r 覆盖已完成，保留原包名、原证书和数据，首次安装时间保持。
版本读取只证明安装，不能替代登录业务验收。

1. 在 Mesting 打开汽水登录；应直接显示“汽水扫码登录”，不再出现手机号或发码按钮。
2. 在二维码有效时先截图。点击“打开汽水扫一扫”，进入已登录原账号的汽水音乐官方 App。
3. 在官版扫一扫中选择相册里的截图，由本人确认登录。
4. 回 Mesting 等待查询；若显示“完成安全验证”，由本人完成官方组件后继续。
5. 成功标准是 Mesting 显示原账号资料并保存登录；只有官版“已确认”不足以判定成功。
6. 退出并重新打开 Mesting，核对仍是同一账号；酷狗和网易云原账号也应保留。

若仍有 2156／其他业务码，请只反馈状态文字与发生步骤。手机号登录已按决定移除；
无需再尝试获取验证码。二维码／验证码／Cookie 无需发到聊天中。

实际扫码、冷恢复、GPU／DSP和汽水完整媒体／权益仍有待验项，详见同版 fixes 和 validation。
''','utf-8')

handoff = f'''# Mesting 1.0.66/code87 本地交付及覆盖安装交接

2026-11-06，工程 D:\\AnLi。用户最新决定：按 myMusic 修复扫码，移除手机号登录，
只保留汽水官方 App 扫码；已明确授权本轮必要手机调试和保留数据覆盖安装。

## 已完成

- 全部汽水入口转为 QR-only；新增显式官版扫一扫入口，并正确说明先截图后相册识别。
- 对齐每 QR 完整 Web 参数及 nonce／SDK 存储；保留原始 QR 地址、同一会话、本人验证、
  服务端确认、真实资料核验和加密提交；Web 身份随账号保存／恢复。
- Beta210文件最终2417通过／2跳过，Stable63、导航55、分析0，8主机图已查看。
  首轮全量2416，末7整文件替换包含新增1项，不累加；两次定向旧断言／夹具失败保留。
- 原生14项仅64同输入历史继承；实际原签名双ARM／定制引擎／7shader／12旧非app库／
  JNI／DSP声明与两个R8 JavascriptInterface回调另验。其他旧SDK／Rust数字不重新累加。
- APK：{apk['fileSize']}字节，SHA256 `{apk['sha256']}`；完整脏工作区源码另存。
- 86→87保留数据覆盖安装已读回1.0.66，原首次安装时间保持。独立匿名诊断包已移除。

## 未完成及最新决定

- 65的短信仍2156；其QR在抖音中404、改官版确认后查询仍2156。旧pending反馈以此覆盖，
  但不回写65冻结物。用户已停止手机号路线，2156没有被宣称解决。
- 官版确认临时PC二维码时，该已结束验证端只读到new，不能声称已取到真实登录态。
  匿名手机对照也仅code0/new。本版真实扫码／资料保存／冷恢复仍待本人验收。
- 完整汽水媒体／下载／写入／权益／奖励／DSP未因本次登录改动自动接通；未知／未适配
  操作保留明确提示。网易云例曲实机自动补源／全长仍未验；基本双平台播放已有64用户反馈。
- 手机仅读取授权的公开包／APK信息、打开过官版扫一扫，以及本机独立匿名诊断和覆盖安装；
  未读官版／Mesting私有凭据文件，未自动短信，未自动确认账号，未奖励／后台／旧日志重放。
- 63完整源码ZIP未补，旧51回收APK不恢复。70原保护物和全部历史脏改、原签名／锁、
  beta/b6bcd542与空暂存保持；66两项另存后保护物共72。未Git同步清理提交推送上传发布。

## 接续入口

- docs/fixes-2026-11-06-v1.0.66.md：实现、参考固定版本、证据及缺口。
- docs/INSTALL-v1.0.66.md：同机扫码和本人业务验收步骤。
- docs/validation-2026-11-06-v1.0.66.json：主机／实际APK／安装边界。
- .codex-artifacts/2026-11-06-release166/after.json：最终只读核对入口；真实业务反馈优先。

新接续按最新用户指令继续；不重建／回填冻结包，不外推设备到奖励／后台／发布授权。
'''
(ROOT/'HANDOFF-CURRENT-SESSION-2026-11-06-v1.0.66.md').write_text(handoff,'utf-8')

p=ROOT/'AGENTS.md'
text=p.read_text('utf-8')
assert '当前本地1.0.66/code87' not in text
prefix='''**2026-11-06 当前本地1.0.66/code87及授权覆盖安装：先读[66交接](HANDOFF-CURRENT-SESSION-2026-11-06-v1.0.66.md)、[实现与缺口](docs/fixes-2026-11-06-v1.0.66.md)、[人工验收](docs/INSTALL-v1.0.66.md)及[验证](docs/validation-2026-11-06-v1.0.66.json)。用户最新明确移除手机号登录，只保留官版汽水扫码，停止短信2156／原生安装注册路线；不再按旧“手机号主入口／抖音兜底”要求实施。按myMusic补完整Web参数与同nonce存储、同源会话／本人验证／资料核验／加密保存和Web身份恢复；新增显式官版扫一扫。65用户短信2156、抖音扫码404及官版确认后查询2156仍是失败，不回写冻结物；临时PC验证只读new，手机匿名对照code0/new均非真实登录。66真实扫码／冷恢复仍待本人验收。Beta210文件最终2417通过／2跳过、Stable63、导航55、分析0、8主机图；全量首轮2416，末7整文件替换含新增1项，不累加，两次旧断言／夹具失败保留。原生14仅64同生产／runner输入历史；实际原签名双ARM／定制引擎／7shader／12旧非app库／JNI／DSP声明和两个R8回调另验。已86→87保留数据覆盖，首次安装时间保持；独立匿名诊断包已移除，未读官版／Mesting私有凭据或自动短信／确认／奖励／后台。原70保护物、签名／锁／历史脏改／beta/b6bcd542／空暂存保持，66APK／完整源码另存；63源码ZIP未补，旧51回收APK不恢复，旧日志不补发。未Git同步清理提交推送上传发布。按release166/after.json只读核对，实际用户反馈优先，不回填重建冻结物，不外推设备／发布授权。下方均历史时点。**

'''
p.write_text(prefix+text,'utf-8')
print({'deliveryDocsWritten':5,'installedVersion':installed['version'],'sourceFreezeStillRequired':True})
