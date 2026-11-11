import 'legal_documents.dart';

/// Describe the iOS implementation without changing Android's existing terms.
final iosBetaUserAgreementDocument = LegalDocument(
  type: LegalDocumentType.userAgreement,
  title: '用户协议',
  summary: '本协议适用于 Mesting Music iOS Beta 当前提供的音乐浏览、播放、账号与个性化功能。请阅读后自主选择是否同意。',
  effectiveDate: '更新及生效日期：2026 年 11 月 11 日',
  sections: [
    betaUserAgreementDocument.sections[0],
    const LegalDocumentSection(
      title: '二、当前服务与账号范围',
      body:
          'iOS Beta 提供音乐发现、搜索、平台允许的在线播放、歌词、队列与历史、本地音乐导入、主题和歌曲分享。酷狗和网易云登录依据页面入口及平台权限提供；汽水扫码登录、本地均衡器和桌面悬浮歌词当前不可用。游客可使用已开放的浏览、搜索与本地播放；受保护的收藏、歌单等账号操作需要登录相应平台。内容、音质及账号权益以服务方实际返回为准。',
    ),
    const LegalDocumentSection(
      title: '三、登录、安全与账号归属',
      body:
          '请仅使用归你控制的账号、手机号和验证码，并在扫码时核对平台显示的授权信息。验证码是否发出、认证是否成功，以真实平台结果为准。当前 iOS Beta 提供酷狗、网易云平台账号与游客入口，不提供独立 Mesting 账号。平台会话分别保存和管理，不因切换入口而合并；本地音乐和记录按原归属保存。请勿向他人提供验证码或登录凭证，也不要冒用他人身份。',
    ),
    betaUserAgreementDocument.sections[3],
    const LegalDocumentSection(
      title: '五、队列、音质和设备输出',
      body:
          '单曲播放、播放全部、手动待播、自动推荐、随机和循环分别按界面提示操作。拖拽和移除改变待播顺序，不代表修改第三方云端歌单。音质受实际资源、账号权限和平台返回限制，无法确认时不承诺成功切换。设备音量和当前音频路由由 iOS 提供，输出切换通过系统选择器完成，新设备配对由系统管理；可用输出与实际连接状态以系统显示为准。',
    ),
    ...betaUserAgreementDocument.sections.skip(5),
  ],
);

final iosBetaPrivacyPolicyDocument = LegalDocument(
  type: LegalDocumentType.privacyPolicy,
  title: '隐私政策',
  summary:
      '说明 Mesting Music iOS Beta 在使用具体功能时涉及的信息、服务提供方、本机存储及管理方式。未提供的功能不作为读取信息或申请权限的理由。',
  effectiveDate: '更新及生效日期：2026 年 11 月 11 日',
  sections: [
    ...betaPrivacyPolicyDocument.sections.take(5),
    const LegalDocumentSection(
      title: '六、音量、输出设备和后台播放',
      body:
          '应用在本机读取 iOS 提供的当前音频输出名称、类别和系统媒体音量，响应你主动发起的音量调整，并通过系统音频输出选择器切换设备。不为显示输出额外扫描蓝牙，也不把路由信息上传用于画像。后台音频和系统媒体控制用于持续播放，表现受 iOS 和设备状态影响。当前不提供桌面悬浮歌词或本地均衡器。',
    ),
    const LegalDocumentSection(
      title: '七、权限与主动选择的文件',
      body:
          '头像、背景和音频通过系统选择器读取你选中的内容；使用相机时请求相机权限。保存歌曲海报或头像时请求相册的仅添加照片权限，不因保存图片而读取整个相册。本地音乐通过“文件”选择器导入，必要副本和索引保存在应用目录，不上传本地音频；iOS 不提供扫描整个手机存储的入口。你选择下载目录后，应用保存系统书签以在后续操作和重启后访问已授权的目录。主动使用听歌识曲时才申请麦克风权限，识别所需的短段录音或声音指纹按所选平台的现有流程处理，临时录音在当次操作结束后清理。网易云一起听在你主动开启距离共享时申请前台位置权限，将当次位置发送网易云以计算距离，不进行持续后台定位；拒绝定位仍可使用不依赖距离的功能。主动上传云盘音乐、播客声音或封面时，选择器读取所选文件，在你确认后发送至相应平台。首次进入不会自动请求相机、相册、麦克风或位置权限。',
    ),
    const LegalDocumentSection(
      title: '八、服务提供方与版本分发',
      body:
          '在线音乐、平台账号、资源和任务涉及所选酷狗、网易云及相应资源服务，安全验证页面可能涉及腾讯相关服务；第三方按其自身规则处理收到的信息。音乐与账号请求由随包适配模块发起，服务方可获得完成联网所需的 IP 和请求信息。iOS Beta 当前不接入汽水的 Android 安全组件，不提供 Android APK 更新，也不使用该更新链路的 Ring Download、P2P 或 P8P 下载。测试版由 Apple TestFlight 分发，后续正式分发以实际发布渠道为准；Apple 按其 TestFlight 隐私说明处理安装、测试反馈和相关诊断。歌曲链接及文件仅在你主动分享时交由 iOS 系统分享面板，再由你选择的目标应用处理。',
    ),
    ...betaPrivacyPolicyDocument.sections.skip(8),
    const LegalDocumentSection(
      title: '十二、联系与反馈',
      body:
          '当前 iOS Beta 的反馈邮箱为 c17520204256@icloud.com。你可通过 TestFlight 反馈功能或此邮箱联系发布方，提出本客户端的隐私问题。第三方平台账号及其云端数据的查询、更正或注销，仍需通过相应平台的官方渠道办理。请不要在反馈中发送密码、验证码或完整登录凭证。',
    ),
  ],
);

LegalDocument iosLegalDocumentFor(LegalDocumentType type) => switch (type) {
  LegalDocumentType.userAgreement => iosBetaUserAgreementDocument,
  LegalDocumentType.privacyPolicy => iosBetaPrivacyPolicyDocument,
};
