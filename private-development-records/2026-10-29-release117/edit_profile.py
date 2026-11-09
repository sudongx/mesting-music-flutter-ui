from pathlib import Path
r=Path('D:/AnLi')
p=r/'lib/features/music_platform/presentation/platform_profile.dart';s=p.read_text(encoding='utf-8');s="import 'beta_personal_profile.dart';\n"+s;s=s.replace('''  Widget build(BuildContext context, WidgetRef ref) => PlatformStyle(
    child: EditorialScroll(''','''  Widget build(BuildContext context, WidgetRef ref) => DistributionChannel.isBeta ? const BetaPersonalProfile() : PlatformStyle(
    child: EditorialScroll(''',1);p.write_text(s,encoding='utf-8',newline='\n')
p=r/'lib/features/music_platform/netease/netease_library_repository.dart';s=p.read_text(encoding='utf-8');s=s.replace('''  @override
  bool canManage(String id) =>''','''  String? get likedPlaylistId => _snapshot.where(_likes).map(_id).firstOrNull;
  @override
  bool canManage(String id) =>''',1);p.write_text(s,encoding='utf-8',newline='\n')
p=r/'lib/features/music_platform/netease/full/netease_full_page.dart';s=p.read_text(encoding='utf-8');s=s.replace('''                              : NeteaseFullHubPage(
                                  tab: tab,
                                  category: category,
                                ),''','''                              : neteaseCategoryDestination(all, tab, category),''',1)
anchor='IconData _categoryIcon(String category)'
pos=s.index(anchor)
s=s[:pos]+'''/// Singleton categories open their real workflow directly. Multi-task hubs
/// remain lists, preserving the meaning of Back without an empty wrapper.
Widget neteaseCategoryDestination(List<NeteaseEndpoint> all, String tab, String category) {
  final workflows = <String, NeteaseEndpoint>{};
  for (final entry in all.where((e) => e.tab == tab && e.category == category)) {
    workflows.putIfAbsent(neteaseWorkflowKey(entry), () => entry);
  }
  if (workflows.length == 1) {
    final entry = workflows.values.single;
    if (neteaseWorkflowKey(entry) == 'playback-settings') return const NeteasePlaybackSettingsPage();
    return NeteaseFullTaskPage(endpoint: entry);
  }
  return NeteaseFullHubPage(tab: tab, category: category);
}

'''+s[pos:];p.write_text(s,encoding='utf-8',newline='\n')
print('Personal profile reorganized and singleton navigation flattened')
