"""Remove retired account-only UI while preserving current platform widgets."""
from source_edit import *
import json

pending={}
def stage(p,s):pending[p]=s

p='lib/features/settings/presentation/settings_page.dart';s=read(p)
for name in ['auth_providers','account_capabilities','domain/auth_models']:
    s=s.replace(f"import '../../auth/{name}.dart';\n",'')
s=between(s,'    final auth = ref.watch(authControllerProvider);','    final appVersion', '    final platform = ref.watch(platformAccountProvider).value;\n')
s=replace(s,'child: DistributionChannel.isBeta\n                    ? Column(', 'child: Column(')
s=between(s,'                    : platform != null','              ),\n              const SizedBox(height: 18),\n              if (DistributionChannel.isBeta &&')
s=drop_collection(s,'if (ref.watch(showMestingFeaturesProvider))')
s=drop_collection(s,'if (user != null) ...[')
s=between(s,'  static String _bindingSummary(', '  static String _updateSubtitle(')
s=between(s,'  static Future<void> _confirmSignOut(', 'class _SettingsHeader', '}\n\n')
s=drop_class(s,'_SignOutDialog')
stage(p,s)

p='lib/features/player/presentation/music_hub_top_bar.dart';s=read(p)
for name in ['../../auth/auth_providers','../../auth/account_capabilities','../../social/social_providers','../../social/social_attention']:
    s=s.replace(f"import '{name}.dart';\n",'')
a=s.index('  @override\n  void initState()',s.index('class _MusicHubPanelState'))
b=s.index('  @override\n  Widget build',a)
s=s[:a]+s[b:]
s=between(s,'    final auth = ref.watch(authControllerProvider);','    final size = MediaQuery.sizeOf(context);', '''    final account = ref.watch(platformAccountProvider);
    final platform = account.value;
    final accountState = platform != null
        ? _PanelAccountState.signedIn
        : account.isLoading ? _PanelAccountState.restoring
        : account.hasError ? _PanelAccountState.unavailable
        : _PanelAccountState.signedOut;
''')
s=replace(s,"""                        platform != null
                            ? (platform.nickname.isEmpty
                                  ? '酷狗账号'
                                  : platform.nickname)
                            : user!.nickname,""", "                        platform!.nickname.isEmpty ? platform.platformLabel : platform.nickname,")
s=replace(s,"""                        platform != null
                            ? '酷狗账号 · 云端收藏与歌单'
                            : user!.bio.trim().isNotEmpty
                            ? user.bio
                            : '欢迎回到你的音乐空间',""", "                        '${platform!.platformLabel}账号 · 云端收藏与歌单',")
s=replace(s,': user?.avatarUrl,',': null,')
s=drop_collection(s,'if (ref.watch(showMestingFeaturesProvider))')
s=between(s,'  Future<void> _openMessages(', '  Future<void> _openDisclaimer(')
stage(p,s)

p='lib/features/player/presentation/now_playing_page.dart';s=read(p)
s=re.sub(r"import '../../(?:social/[^']+|auth/auth_providers|auth/presentation/auth_gate)\.dart';\n",'',s)
s=s.replace('    final togetherSession = ref.watch(listenTogetherControllerProvider).value;\n','').replace('    final currentUser = ref.watch(currentUserProvider);\n','')
s=between(s,'    Future<void> shareTrack() async {','    return PopScope(')
s=drop_collection(s,'if (!_lyricsVisible && ref.watch(showMestingFeaturesProvider))')
s=drop_collection(s,'if (ref.watch(showMestingFeaturesProvider))')
s=between(s,'class _ListenTogetherPlayerChip ', 'class PlayerTonearm ')
stage(p,s)

p='lib/features/search/presentation/music_search_page.dart';s=read(p)
s=re.sub(r"import '../../(?:social/[^']+|auth/account_capabilities)\.dart';\n",'',s)
s=between(s,'    final users = ref.watch(showMestingFeaturesProvider)', '    return SingleChildScrollView(')
s=s.replace('        users: users.value ?? const <SocialUser>[],\n','')
s=between(s,'enum _SearchResultCategory ', 'class _SearchResults ')
s=s.replace('  _SearchResultCategory _category = _SearchResultCategory.tracks;\n','')
s=s.replace(' &&\n          _category == _SearchResultCategory.tracks','')
s=between(s,'    final showUsers =','    if (DistributionChannel.isBeta) return const BetaCategorySearchResults();')
s=drop_collection(s,'if (ref.watch(showMestingFeaturesProvider))')
s=between(s,'              if (showUsers && hasUserResults)', "              if (showTracks && state.localTracks.isNotEmpty)")
s=replace(s,'              if (_category == _SearchResultCategory.tracks &&\n                  !state.hasResults &&','              if (!state.hasResults &&')
s=drop_collection(s,'if (_category == _SearchResultCategory.users &&')
s=s.replace('showTracks && ','').replace('              if (showTracks)\n','')
s=s.replace('    required this.users,\n','').replace('  final List<SocialUser> users;\n','').replace('      users: users,\n','')
s=s.replace('        if (users.isNotEmpty)\n          _NeteaseArtistResult(user: users.first, query: query),\n','')
s=between(s,'class _NeteaseArtistResult ', 'class _NeteaseTrackResult ')
s=s.replace('  required Iterable<SocialUser> users,\n','')
s=replace(s,"  for (final user in users) {\n    add(user.displayName);\n    add('$normalized ${user.displayName}');\n  }\n",'')
s=between(s,'class _SearchResultTabs ', 'class _TrackResults ')
stage(p,s)

p='lib/features/library/presentation/music_home_page.dart';s=read(p)
s=s.replace("import '../../auth/auth_providers.dart';\n",'')
s=s.replace('  bool _guardingRestrictedView = false;\n','')
s=between(s,'    final auth = ref.watch(authControllerProvider);','    final topInset = MediaQuery.paddingOf(context).top;')
s=between(s,'  Future<void> _requestRestrictedView(', 'class _Entrance ', '}\n\n')
stage(p,s)

p='lib/app/mesting_music_app.dart';s=read(p)
s=s.replace("import '../features/social/presentation/social_attention_coordinator.dart';\n",'')
s=replace(s,'                child: SocialAttentionCoordinator(\n                  child: DownloadSourceCoordinator(', '                child: DownloadSourceCoordinator(')
s=replace(s,'                  ),\n                ),\n              ),\n            ),\n          ),','                ),\n              ),\n            ),\n          ),')
stage(p,s)

for p,s in pending.items():write(p,s)

# Explicit file allowlist; never remove auth/ wholesale: it still owns platform
# entry, retained guest choice, the welcome flow and original character motion.
retired=[
 'lib/features/auth/auth_providers.dart',
 'lib/features/auth/domain/auth_models.dart',
 'lib/features/auth/data/auth_repository.dart',
 'lib/features/auth/data/cloudbase_auth_repository.dart',
 'lib/features/auth/presentation/auth_page.dart',
 'lib/features/auth/presentation/auth_protected_page.dart',
 'lib/features/auth/presentation/auth_gate.dart',
 'lib/features/auth/presentation/account_bindings_page.dart',
 'lib/features/auth/presentation/account_deletion_page.dart',
 'lib/features/auth/presentation/forgot_password_page.dart',
 'lib/features/library/data/library_sync_api.dart',
 'lib/core/security/session_store.dart',
 'lib/core/cloud/cloudbase_user_media_storage.dart',
]
retired += [p.relative_to(ROOT).as_posix() for p in (ROOT/'lib/features/social').rglob('*.dart')]
retired += [p.relative_to(ROOT).as_posix() for p in (ROOT/'lib/features/profile').rglob('*.dart') if p.name!='profile_page.dart']
for p in retired:remove(p)
(OUT/'removal-stage2.json').write_text(json.dumps({'changed':list(pending),'removed':retired},ensure_ascii=False,indent=2)+'\n','utf8')
print(json.dumps({'updated':len(pending),'removed':len(retired)}))
