"""Reviewed transformations for source-level retirement of the Mesting account.

Each touched file has its original bytes retained privately for focused review;
the accepted74 ZIP and every historical receipt remain immutable. No runtime
database/credential deletion is performed by this development script.
"""
from pathlib import Path
import json
import re

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
changes = []
pending = {}

def read(path):
    original = OUT / 'source-before' / path
    return (original if original.exists() else ROOT / path).read_text('utf8')

def write(path, content):
    pending[path] = content

def flush(path, content):
    target = (ROOT / path).resolve()
    assert target.is_relative_to(ROOT)
    if target.exists():
        old = target.read_bytes()
        if old == content.encode('utf8'): return
        before = OUT / 'source-before' / path
        if not before.exists():
            before.parent.mkdir(parents=True, exist_ok=True)
            before.write_bytes(old)
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(content, 'utf8', newline='\n')
    changes.append(path)

def remove(path):
    target = (ROOT / path).resolve()
    assert target.is_relative_to(ROOT) and target.is_file()
    before = OUT / 'source-before' / path
    before.parent.mkdir(parents=True, exist_ok=True)
    if not before.exists(): before.write_bytes(target.read_bytes())
    target.unlink()
    changes.append(path)

def replace(s, old, new, count=1):
    assert s.count(old) == count, (old[:90], s.count(old), count)
    return s.replace(old, new)

def between(s, start, end, new=''):
    assert s.count(start) == 1 and s.count(end) == 1, (start, end)
    a, b = s.index(start), s.index(end)
    assert a < b
    return s[:a] + new + s[b:]

# Keep shared onboarding, character assets and three-platform storage namespaces.
p='lib/features/auth/beta_account_choice.dart'; s=read(p)
s=replace(s, 'enum BetaAccountChoice { guest, mesting, kugou, netease, qishui }', 'enum BetaAccountChoice { guest, kugou, netease, qishui }')
s=replace(s, '    return BetaAccountChoice.values', '''    // A retired account choice must not silently activate a saved platform.
    // Keep every platform credential and local database row intact; the user
    // can explicitly select a supported platform from the guest surface.
    if (saved == 'mesting') return BetaAccountChoice.guest;
    return BetaAccountChoice.values''')
write(p,s)

p='lib/features/auth/presentation/beta_entry_coordinator.dart';s=read(p)
s=s.replace("import '../auth_providers.dart';\n",'')
s=replace(s,'    final auth = ref.watch(authControllerProvider);\n','')
s=replace(s,'    final restored = auth.value?.user != null || platform.value != null;','    final restored = platform.value != null;')
s=s.replace('Music login and guest entry remain available if CloudBase restoration\n      // is offline.', 'Music login and guest entry depend only on their own local store.')
write(p,s)

write('lib/features/auth/presentation/first_launch_auth_coordinator.dart', '''import 'package:flutter/material.dart';
import '../beta_entry_flow.dart';
import 'beta_entry_coordinator.dart';

// Preserve the existing completion key across upgrades. All account-capable
// channels now enter through the same three-platform/guest coordinator.
const firstLaunchAuthCompletedPreferenceKey = BetaEntryFlow.completedKey;

class FirstLaunchAuthCoordinator extends StatelessWidget {
  const FirstLaunchAuthCoordinator({
    required this.child, this.onBetaLogout, this.betaBackDispatcher, super.key,
  });
  final Widget child;
  final VoidCallback? onBetaLogout;
  final BackButtonDispatcher? betaBackDispatcher;

  @override
  Widget build(BuildContext context) => BetaEntryCoordinator(
    backDispatcher: betaBackDispatcher,
    onLogout: onBetaLogout,
    child: child,
  );
}
''')

p='lib/features/music_platform/music_platform_providers.dart';s=read(p)
s=s.replace('choice == BetaAccountChoice.mesting ||\n            choice == BetaAccountChoice.guest','choice == BetaAccountChoice.guest')
s=s.replace('choice == BetaAccountChoice.mesting ||\n          choice == BetaAccountChoice.guest','choice == BetaAccountChoice.guest')
s,n=re.subn(r'    if \((?:DistributionChannel\.isBeta &&\s*)?ref\.read\(betaAccountChoiceProvider\) == BetaAccountChoice\.mesting\) \{\n      throw const MusicPlatformException\([^\n]+\);\n    \}\n','',s)
assert n==4,n
write(p,s)

write('lib/features/auth/account_capabilities.dart', '''import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../music_platform/music_platform_providers.dart';

/// Capabilities follow the selected real platform, independently of flavor.
/// Guests retain local playback; personal cloud mutations require login.
final showPlatformFeaturesProvider = Provider<bool>(
  (ref) => ref.watch(platformAccountProvider).value != null,
);
final canUseCurrentLibraryProvider = Provider<bool>(
  (ref) => ref.watch(platformAccountProvider).value != null,
);
''')

p='lib/features/library/library_providers.dart';s=read(p)
for imp in ["import 'dart:async';", "import 'package:shared_preferences/shared_preferences.dart';", "import '../../core/persistence/app_preferences.dart';", "import '../auth/auth_providers.dart';", "import '../auth/data/auth_repository.dart';", "import 'data/library_sync_api.dart';"]:
    s=s.replace(imp+'\n','')
s=between(s, 'const _libraryCloudBootstrapPrefix', 'final appDatabaseProvider')
s=between(s, 'final _localPreviewLibraryImportProvider', 'final libraryRepositoryProvider')
s=replace(s,'  if (DistributionChannel.isBeta) {\n    final platform = ref.watch(platformAccountProvider).value;', '  {\n    final platform = ref.watch(platformAccountProvider).value;', count=2)
s=between(s, '  final user = ref.watch(currentUserProvider);', '  return repository;\n});', '''  // The guest owner is the existing local namespace. Do not migrate, merge
  // or delete rows belonging to another identity during source retirement.
  final repository = LibraryRepository(
    ref.watch(appDatabaseProvider),
    ownerId: legacyLibraryOwnerId,
    canWrite: () => false,
  );
  ref.onDispose(repository.dispose);
''')
s=replace(s,'  return ref.watch(currentUserProvider)?.uid ?? legacyLibraryOwnerId;', '  return legacyLibraryOwnerId;')
s=re.sub(r'  if \(!ref\.watch\(isAuthenticatedProvider\) && !DistributionChannel\.isBeta\) \{\n    return (?:Stream\.value\(const <(?:Track|UserPlaylist)>\[\]\)|null);\n  \}\n','',s)
write(p,s)

p='lib/features/library/data/library_repository.dart';s=read(p)
s=s.replace("import 'dart:async';\n",'').replace("import 'library_sync_api.dart';\n",'')
s=s.replace('  static const _mutationSyncDebounce = Duration(seconds: 8);\n\n','')
s=s.replace('    LibrarySyncApi? syncApi,\n','')
s=replace(s,'  }) : _syncApi = syncApi,\n       _canWrite = canWrite;', '  }) : _canWrite = canWrite;')
s=s.replace('  final LibrarySyncApi? _syncApi;\n','')
s=between(s,'  Future<bool>? _activeSync;', '  Stream<List<Track>> watchFavorites()', '  bool _disposed = false;\n\n')
s=s.replace('    _scheduleSync();\n','')
s=between(s,'  Future<bool> synchronize({bool forcePull = false}) {','  Track _decodeTrack', '''  /// Local storage has no remote synchronization. Platform repositories
  /// override this interface with their own authenticated protocol.
  Future<bool> synchronize({bool forcePull = false}) async => true;

  void dispose() { _disposed = true; }

''')
write(p,s)

write('lib/features/library/presentation/library_access.dart', '''import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../shared/widgets/music_notice.dart';
import '../../auth/presentation/beta_login_navigation.dart';
import '../../music_platform/music_platform_providers.dart';

/// Await credential recovery before deciding whether a personal mutation is
/// allowed. A storage failure never turns an existing identity into a guest.
Future<bool> ensureLibraryAccess(
  BuildContext context, WidgetRef ref, {
  required String reason, required String redirect,
}) async {
  try {
    final platform = await ref.read(platformAccountProvider.future);
    if (platform != null) return true;
    if (context.mounted) await openBetaLogin(context, redirect: redirect);
  } on Object {
    if (context.mounted) {
      showMusicNotice(context, icon: Icons.error_outline_rounded,
        title: '当前账号曲库尚未就绪，请重试', message: '');
    }
  }
  return false;
}
''')

write('lib/features/profile/presentation/profile_page.dart', '''import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../shared/widgets/route_settled_content.dart';
import '../../../shared/widgets/music_activity_indicator.dart';
import '../../music_platform/presentation/platform_profile.dart';
import '../../player/presentation/music_page_transition.dart';

void openMyPlaylistsFromProfile(BuildContext context) => context.push(
  '/music?view=playlists', extra: const MusicPageTransitionIntent.forward());
void openMusicSearchFromProfile(BuildContext context) => context.push(
  '/music/search', extra: const MusicPageTransitionIntent.forward());

/// The same platform profile serves all channels. Its data stays scoped to the
/// real selected platform; no retired account or social providers are mounted.
class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});
  @override
  Widget build(BuildContext context) => RouteSettledContent(
    builder: (_) => const PlatformProfile(),
    placeholder: const Center(child: MusicActivityIndicator()),
  );
}
''')

for p in ['lib/features/experience/presentation/editorial_widgets.dart', 'lib/features/experience/presentation/cold_start_greeting.dart']:
    s=read(p).replace("import '../../auth/auth_providers.dart';\n",'')
    s=s.replace('    final user = ref.watch(currentUserProvider);\n','')
    s=s.replace('                      user?.avatarUrl ??\n','')
    s=s.replace('        ref.watch(currentUserProvider)?.nickname ??\n','')
    write(p,s)

p='lib/features/auth/presentation/beta_account_card.dart';s=read(p)
s=s.replace("import '../auth_providers.dart';\n",'')
s=s.replace('    final user = ref.watch(currentUserProvider);\n','')
s=s.replace('platform != null || user != null','platform != null')
s=s.replace("profile?.nickname ?? platform?.nickname ?? user?.nickname ?? ''", "profile?.nickname ?? platform?.nickname ?? ''")
s=s.replace('                        user?.avatarUrl ??\n','')
s=replace(s,"                          ? (platform != null\n                                ? '${platform.platformLabel}账号 · 已登录'\n                                : 'Mesting 账号 · 已登录')", "                          ? '${platform.platformLabel}账号 · 已登录'")
s=between(s, '              } else if (user != null) {', '              } else {', '')
write(p,s)

p='lib/features/music_platform/presentation/platform_account_page.dart';s=read(p)
s=s.replace("import '../../auth/auth_providers.dart';\n",'')
s=replace(s,"      } else {\n        await ref.read(authControllerProvider.notifier).signOut();\n      }",'      }')
s=s.replace('    final user = ref.watch(currentUserProvider);\n','')
s=s.replace('!widget.loginOnly && (session != null || user != null)','!widget.loginOnly && session != null')
s=s.replace('                                  user?.avatarUrl ??\n','').replace('                                  user?.nickname ??\n','')
s=replace(s,"                              session != null\n                                  ? '${session.platformLabel}账号 · 已登录'\n                                  : 'Mesting 账号 · 已登录',", "                              '${session!.platformLabel}账号 · 已登录',")
write(p,s)

p='lib/features/player/presentation/music_shell.dart';s=read(p)
s=s.replace("import '../../social/listen_together_providers.dart';\n",'')
s=s.replace('    ref.watch(listenTogetherControllerProvider);\n','')
write(p,s)

# Leave actual three-platform listening / playlist routes, remove exclusive
# remote-account pages. Redirect old password-recovery links to platform login.
p='lib/app/router/app_router.dart';s=read(p)
for imp in ['auth_page','account_deletion_page','auth_protected_page','account_bindings_page','forgot_password_page']:
    s=s.replace(f"import '../../features/auth/presentation/{imp}.dart';\n",'')
s=s.replace("import '../../features/profile/presentation/profile_edit_page.dart';\n",'')
for imp in ['chat_page','public_profile_page','social_connections_page','social_messages_page','saved_messages_page']:
    s=s.replace(f"import '../../features/social/presentation/{imp}.dart';\n",'')
for imp in ['avatar_preview_page','profile_background_page']:
    s=s.replace(f"import '../../features/profile/presentation/{imp}.dart';\n",'')
s="import '../../features/music_platform/presentation/platform_auth_page.dart';\n"+s
s=replace(s,"child: AuthPage(\n            initialMode: state.uri.queryParameters['mode'] ?? 'register',",'child: PlatformAuthPage(')
s=between(s,"    GoRoute(\n      path: '/auth/recover',",'  ],\n);', "    GoRoute(path: '/auth/recover', redirect: (_, _) => '/auth'),\n")
for route in ['/profile/avatar','/profile/background','/profile/account','/profile/delete-account','/social','/social/messages','/social/saved-messages','/social/saved-messages/:messageId','/social/users/:uid','/social/chat/:uid']:
    start=f"    GoRoute(\n      path: '{route}',"
    a=s.index(start);b=s.index('    GoRoute(',a+len(start))
    s=s[:a]+s[b:]
s=replace(s,"""        child: AuthProtectedPage(
          reason: '登录后才能查看和编辑个人歌单。',
          allowBetaLocalLibrary: true,
          redirect: state.uri.toString(),
          child: PlaylistDetailPage(
            playlistId: state.pathParameters['playlistId']!,
          ),
        ),""", """        child: PlaylistDetailPage(
          playlistId: state.pathParameters['playlistId']!,
        ),""")
s=replace(s,"""          child: DistributionChannel.isBeta
              ? const PlatformProfileEditPage()
              : const AuthProtectedPage(
                  reason: '登录后才能编辑头像和个人资料。',
                  redirect: '/profile/edit',
                  child: ProfileEditPage(),
                ),""", '          child: const PlatformProfileEditPage(),')
s=replace(s,"""        child: AuthProtectedPage(
          reason: '登录后才能查看听歌排行和最近播放。',
          redirect: state.uri.toString(),
          child: const ListeningHistoryPage(),
        ),""", '        child: const ListeningHistoryPage(),')
write(p,s)

write('lib/features/music_platform/presentation/platform_auth_page.dart', '''import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import '../../auth/beta_entry_flow.dart';
import '../../auth/presentation/beta_welcome_page.dart';
import '../music_platform_providers.dart';
import 'platform_account_page.dart';

/// Routed platform/guest entry. Credential protocols remain in their own
/// controllers; this widget only handles navigation after an explicit choice.
class PlatformAuthPage extends ConsumerWidget {
  const PlatformAuthPage({this.redirect = '/music/recommend', super.key});
  final String redirect;
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    if (ref.watch(platformAccountProvider).value != null) {
      return const PlatformAccountPage();
    }
    return BetaWelcomePage(onExperience: () => context.go(
      ref.read(betaEntryFlowProvider) == BetaEntryStage.app
          ? '/music/recommend' : redirect,
    ));
  }
}
''')

for path, content in pending.items(): flush(path, content)
manifest=OUT/'removal-stage1.json'
assert not manifest.exists()
manifest.write_text(json.dumps({'changed':changes},ensure_ascii=False,indent=2)+'\n','utf8')
print(json.dumps({'sourceFilesUpdated':len(changes),'historicalArtifactsModified':False}))
