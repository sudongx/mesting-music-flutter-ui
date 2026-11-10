import 'package:flutter/foundation.dart';
import '../../../shared/widgets/music_feature_page.dart';
import 'package:flutter/widgets.dart';
import 'qishui_qr_login_page.dart';

/// Keep welcome/account/navigation callers on one stable entry route.
/// Only official-app QR login is offered. This wrapper never constructs the
/// retired phone client, reads a phone number or sends a verification code.
class QishuiLoginPage extends StatelessWidget {
  const QishuiLoginPage({super.key});

  @override
  Widget build(BuildContext context) =>
      defaultTargetPlatform == TargetPlatform.iOS
      ? const MusicFeaturePage(
          title: '汽水音乐',
          child: MusicFeatureMessage(
            message: '汽水扫码登录目前依赖 Android 安全组件，iOS 暂未接入。请使用网易云、酷狗或游客体验。',
          ),
        )
      : const QishuiQrLoginPage();
}
