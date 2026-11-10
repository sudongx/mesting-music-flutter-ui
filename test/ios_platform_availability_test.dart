import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mesting_music/features/app_update/app_update_providers.dart';
import 'package:mesting_music/features/music_platform/presentation/music_effects_page.dart';
import 'package:mesting_music/features/music_platform/qishui/qishui_login_page.dart';
import 'package:mesting_music/features/settings/presentation/music_equalizer_page.dart';

void main() {
  test(
    'iOS cannot offer an Android APK download or automatic update sheet',
    () {
      debugDefaultTargetPlatformOverride = TargetPlatform.iOS;
      addTearDown(() => debugDefaultTargetPlatformOverride = null);
      final container = ProviderContainer();
      addTearDown(container.dispose);
      expect(container.read(appUpdateDownloadTransportProvider), isNull);
      expect(container.read(autoAppUpdateChecksEnabledProvider), isFalse);
      expect(container.read(autoInstalledReleaseNotesEnabledProvider), isFalse);
    },
  );

  for (final entry in <String, Widget>{
    '汽水扫码登录目前依赖 Android 安全组件': const QishuiLoginPage(),
    'iOS 暂未提供本地均衡器': const MusicEqualizerPage(),
    'iOS 暂未提供本地音效': const MusicEffectsPage(),
  }.entries) {
    testWidgets(
      'iOS explains availability: ${entry.key}',
      (tester) async {
        await tester.pumpWidget(
          ProviderScope(child: MaterialApp(home: entry.value)),
        );
        await tester.pump();
        expect(find.textContaining(entry.key), findsOneWidget);
        expect(find.byType(Switch), findsNothing);
        expect(tester.takeException(), isNull);
      },
      variant: TargetPlatformVariant({TargetPlatform.iOS}),
    );
  }
}
