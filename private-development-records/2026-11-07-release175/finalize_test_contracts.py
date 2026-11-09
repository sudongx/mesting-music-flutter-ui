"""Update mixed host tests to the authorized platform-only entry contract."""
from pathlib import Path

Path('test/first_launch_auth_test.dart').write_text('''import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:liquid_glass_widgets/liquid_glass_widgets.dart';
import 'package:mesting_music/core/persistence/app_preferences.dart';
import 'package:mesting_music/features/auth/presentation/first_launch_auth_coordinator.dart';
import 'package:mesting_music/features/auth/presentation/beta_consent_row.dart';
import 'package:mesting_music/features/music_platform/music_platform_providers.dart';
import 'package:mesting_music/features/music_platform/domain/platform_session.dart';
import 'package:shared_preferences/shared_preferences.dart';

class _Guest175 extends PlatformAccountController {
  @override
  Future<PlatformSession?> build() async => null;
}

void main() {
  setUpAll(LiquidGlassWidgets.initialize);
  Future<void> mount(WidgetTester tester, SharedPreferences prefs,
      {bool aboveNavigator = false}) async {
    tester.view.physicalSize = const Size(390, 844);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    const home = Scaffold(body: Text('推荐页面'));
    await tester.pumpWidget(ProviderScope(overrides: [
      sharedPreferencesProvider.overrideWithValue(prefs),
      platformAccountProvider.overrideWith(_Guest175.new),
    ], child: MaterialApp(
      builder: aboveNavigator
          ? (_, child) => FirstLaunchAuthCoordinator(child: child!) : null,
      home: aboveNavigator ? home : const FirstLaunchAuthCoordinator(child: home),
    )));
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 450));
  }

  testWidgets('first install exposes three platforms and remembers guest choice', (tester) async {
    SharedPreferences.setMockInitialValues({});
    final prefs = await SharedPreferences.getInstance();
    await mount(tester, prefs);
    for (final label in ['酷狗登录', '网易云登录', '汽水登录']) {
      expect(find.text(label), findsOneWidget);
    }
    expect(find.byKey(const ValueKey('phone-auth-form')), findsNothing);
    await tester.ensureVisible(find.text('游客体验'));
    await tester.tap(find.text('游客体验'));
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 450));
    expect(find.text('推荐页面').hitTestable(), findsOneWidget);
    expect(prefs.getBool(firstLaunchAuthCompletedPreferenceKey), isTrue);
    await tester.pumpWidget(const SizedBox.shrink());
  });

  testWidgets('entry above app Navigator opens legal and platform pages with explicit consent', (tester) async {
    SharedPreferences.setMockInitialValues({});
    final prefs = await SharedPreferences.getInstance();
    await mount(tester, prefs, aboveNavigator: true);
    await tester.ensureVisible(find.text('用户协议'));
    await tester.tap(find.text('用户协议'));
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 450));
    expect(find.text('三、登录、安全与账号归属'), findsOneWidget);
    tester.state<NavigatorState>(find.byType(Navigator).last).pop();
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 450));
    final consent = find.descendant(of: find.byType(BetaConsentRow), matching: find.byType(InkResponse));
    await tester.ensureVisible(consent);
    await tester.tap(consent);
    await tester.pump();
    await tester.ensureVisible(find.text('酷狗登录'));
    await tester.tap(find.text('酷狗登录'));
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 450));
    expect(find.text('手机号登录'), findsOneWidget);
    expect(prefs.getBool('mesting_user_agreement_accepted_v1'), isTrue);
    expect(prefs.getBool('mesting_privacy_policy_accepted_v1'), isTrue);
    expect(tester.takeException(), isNull);
    await tester.pumpWidget(const SizedBox.shrink());
  });
}
''', 'utf-8')

p = Path('test/music_hub_top_bar_test.dart')
s = p.read_text('utf-8')
s = s.replace("import 'package:flutter/material.dart';", """import 'package:flutter/material.dart';
import 'package:mesting_music/features/music_platform/music_platform_providers.dart';
import 'package:mesting_music/features/music_platform/domain/platform_session.dart';

class _GuestSidebar175 extends PlatformAccountController {
  @override
  Future<PlatformSession?> build() async => null;
}
""")
# Keep imports before declarations for Dart's compilation-unit grammar.
start = s.index('class _GuestSidebar175')
end = s.index("import 'package:flutter_riverpod", start)
declaration = s[start:end]
s = s[:start] + s[end:]
s = s.replace('void main() {', declaration + '\nvoid main() {')
s = s.replace('overrides: [sharedPreferencesProvider.overrideWithValue(preferences)],',
'''overrides: [sharedPreferencesProvider.overrideWithValue(preferences),
        platformAccountProvider.overrideWith(_GuestSidebar175.new)],''')
s = s.replace("await tester.pump(const Duration(milliseconds: 160));\n    expect(find.text('项目性质'), findsNothing);",
              "await tester.pump(const Duration(milliseconds: 260));\n    expect(find.text('项目性质'), findsNothing);")
s = s.replace("expect(find.text('登录 / 注册'), findsOneWidget);", "expect(find.text('账号管理'), findsOneWidget);")
old = s.index("  testWidgets('消息入口在侧栏退出")
s = s[:old] + '''  testWidgets('guest sidebar has no retired Mesting social or registration action', (tester) async {
    await tester.pumpWidget(app());
    await tester.pumpAndSettle();
    await tester.tap(find.byIcon(Icons.menu_rounded));
    await tester.pumpAndSettle();
    expect(find.text('登录后收藏你的音乐'), findsOneWidget);
    expect(find.byKey(const ValueKey('music-hub-my-messages')), findsNothing);
    expect(find.text('注册 / 登录'), findsNothing);
    expect(find.text('设置'), findsOneWidget);
    expect(tester.takeException(), isNull);
  });
}
'''
p.write_text(s, 'utf-8')
