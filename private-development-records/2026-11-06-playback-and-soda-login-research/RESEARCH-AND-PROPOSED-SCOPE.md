# 双平台播放、2156与汽水扫码兜底：研究及待确认范围

日期：2026-11-06，Asia/Shanghai。当前产品仍为1.0.63/code84。

## 用户本轮要求及已回答内容

- 继续修复酷狗／网易云播放失败及汽水短信2156。
- 查看guowenye/qishui-api与此前其他汽水项目，研究增加扫码作为兜底登录。
- 用户选择由代理调研后决定实际可行的扫码方式。
- 用户接受通过已关联原汽水账号的抖音App扫码，作为手机号登录之外的兜底。
- 仍需按AGENTS.md在方案确认后实施；本研究阶段未修改产品、运行测试或构建，也未访问设备、账号或音乐业务接口。

## 公开源码核对

公开仓库当前commit已通过GitHub只读API核对，见current-public-commits.json。

1. guowenye/qishui-api：e409c10fe7441a10d370da7da61d62bbc1e5126c，与此前快照一致。
   - README明确要求已登录抖音App扫描；汽水App扫描可能不能确认。
   - src/qishuiClient.js提供get_qrcode、check_qrconnect、创建阶段Cookie、返回阶段sessionid及/luna/pc/me核验接口的参考。
   - 属于PC/Web aid=386088协议，不是现有Android aid=8478短信协议的直接替代。
   - 含固定iid，不能直接复制成Mesting真实安装身份；两个端点本身不能证明完整认证成功。
   - 来源：https://github.com/guowenye/qishui-api/blob/e409c10fe7441a10d370da7da61d62bbc1e5126c/README.md

2. mytv-android/myMusic：当前5a9a4cbde079d205776117c772c4ee77dd742ae0；此前快照96e08ba较旧。
   - 当前SodaQrLogin.kt、SodaQrSigner.kt及两个安全页面已按commit下载作只读审阅，未运行。
   - Android本机WebView运行安全页面／组件；不需要为扫码单独搭建Node服务器或采用公共签名服务。
   - 保留原始qrcode_index_url；区分waiting/scanned/confirmed/expired及7限流；支持2046二次验证并回带biz_params。
   - 确认后收集Cookie，必要时跟redirect_url以取得会话；仅看已扫码不能算登录成功。
   - 该参考使用removeAllCookies/removeSessionCookies，会影响全应用WebView存储；Mesting不得原样采用。
   - 该参考会生成设备／安装参数；需区分Web临时会话参数与真实移动端注册信息，不能拿其填补2156的注册缺口。
   - 参考带有官版Web安全脚本及AGPL/MIT来源声明；后续若复用须保留实际来源、许可与修改说明。
   - 来源：https://github.com/mytv-android/myMusic/blob/5a9a4cbde079d205776117c772c4ee77dd742ae0/app/src/main/java/com/mytv/mymusic/data/native/SodaQrLogin.kt
   - 来源：https://github.com/mytv-android/myMusic/blob/5a9a4cbde079d205776117c772c4ee77dd742ae0/app/src/main/java/com/mytv/mymusic/data/native/SodaQrSigner.kt

3. sodahub-org/libresoda：5edd2ff3b825f0a16b1e281204822ee06842df9c，与此前快照一致。
   - src/soda/qr_login.rs及docs/QR-LOGIN.md解释原始二维码地址、签名页Cookie上下文、重定向与二次验证。
   - 维护者描述的实测不等于本轮Mesting／用户账号验收；部分实现依赖Chromium，不能原样当Android库使用。
   - 来源：https://github.com/sodahub-org/libresoda/blob/5edd2ff3b825f0a16b1e281204822ee06842df9c/src/soda/qr_login.rs

4. guohuiyuan/music-lib：6353508e84cd357b5bc3acf32d95a16e01bbe20c，与此前快照一致。
   - soda/login.go提供扫码后MFA、会话状态与轮询退避参考；短信是扫码后验证，不能当初始手机号登录2156已经解决。

5. MOPELotus/TuneWeave：84bc7b34935198caa40f612876f4624a17b40221，与此前快照一致。
   - login.rs提供一次登录事务、Cookie更新与未知扫码状态拒绝等边界参考。

结论：已有可实施的Android扫码参考路线，可作为新增兜底候选；尚未在Mesting实施，更未证明当前真实账号可登录或PC凭据可被现有移动端目录／媒体接受。

## 播放故障核查

- 已有本版脱敏运行日志和R8映射确认SodaAudioProcessor路径抛出The source buffer is this buffer。
- 已读取产品当前queueInput旁路代码，没有空输入保护。
- 已取得官方Media3 1.9.2 BaseAudioProcessor源码（本目录副本）：初始化buffer/outputBuffer共用EMPTY_BUFFER，replaceOutputBuffer(0)在容量足够时clear并返回原buffer。
- 因此首个共享空输入可能使output.put(input)自拷贝，吻合日志；本轮仅源码推断，尚未运行原生复现测试。
- 来源：https://github.com/androidx/media/blob/1.9.2/libraries/common/src/main/java/androidx/media3/common/audio/BaseAudioProcessor.java

## 待用户确认的实施方案

1. 优先用实际Media3 1.9.2类建立能令旧代码失败的Java回归，再修空输入、输出所有权与旁路缓冲处理。验证PCM16/float、分块、flush/reset及EOS尾块，确保普通双平台播放不受未启用汽水音效影响。
2. 继续核对汽水初始手机号发送的实际SDK/SaaS分支、完整参数与安全上下文；加入有界脱敏的发送／登录阶段业务错误信息。没有服务端证据时不把XOR或某个缺失安全头宣称为2156唯一根因；短信仅由用户手动触发。
3. 手机号保留主入口，增加抖音扫码兜底。优先采用Android本机WebView安全上下文＋独立扫码状态机，不新增服务器。处理原始二维码、轮询、过期、取消、限流、必要的用户二次验证、官方受限重定向与真实账号资料核对，再加密提交会话。
4. QR的PC/Web会话域和aid与手机号移动端分开建模；严格按凭据作用域请求，不重写Cookie域来假装兼容。扫码界面成功不等于后续资料／喜欢／歌单／媒体都已接通，需分别验证。
5. 不照搬参考的全局Cookie清理；登录事务与现有网易云／酷狗／汽水已保存会话隔离，取消或失败不得替换旧账号。代码分离音频、短信、扫码、WebView桥、会话提交和UI，并写明生命周期与安全边界注释。
6. 完成必要本地回归后，准备递增1.0.64/code85原签名APK、完整源码与核验资料；62/63失败包与历史脏改动保留。该版本号为提案，尚未写入产品。
7. 本方案默认本地实施与交付。真实短信／扫码／播放由用户操作验收；如之后确需设备操作，再按用户明确的设备范围处理。没有Git同步、清理、提交、推送、上传或发布动作。

## 当前验证边界

本次仅新增研究资料。未测试、未编译、未生成64、未创建登录二维码、未调用汽水认证／短信／播放／奖励接口，未使用第三方签名服务，未访问手机。后续不得用本研究结论冒称播放恢复、短信2156解决或扫码验收成功。
