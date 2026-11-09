from pathlib import Path
p = Path('D:/AnLi/lib/features/social/presentation/saved_messages_page.dart')
s = p.read_text('utf-8')
start = s.index('class _SavedMessagesPageState')
end = s.index('class SavedMessageDetailPage')
a = s[start:end]
old = '''    final top = MediaQuery.paddingOf(context).top;
    final currentUser = ref.watch(currentUserProvider);
    final messages = currentUser == null
        ? const <SavedChatMessage>[]
        : readSavedChatMessages(
            ref.watch(sharedPreferencesProvider),
            currentUser.uid,
          );
'''
assert old in a
a = a.replace(old, '''    return _SavedSnapshots(builder: (messages) => _content(context, messages));
  }

  Widget _content(BuildContext context, List<SavedChatMessage> messages) {
    final top = MediaQuery.paddingOf(context).top;
''', 1)
s = s[:start] + a + s[end:]
start = s.index('class SavedMessageDetailPage')
end = s.index('class _SavedMessageRow')
a = s[start:end]
assert old in a
a = a.replace(old, '''    return _SavedSnapshots(builder: (messages) => _content(context, ref, messages));
  }

  Widget _content(BuildContext context, WidgetRef ref, List<SavedChatMessage> messages) {
    final top = MediaQuery.paddingOf(context).top;
''', 1)
s = s[:start] + a + s[end:]
s = "import '../../../shared/widgets/music_activity_indicator.dart';\n" + s
s += '''
/// Large saved collections hydrate once per stored snapshot, with no parsing
/// during player/theme rebuilds and no previous-account data while waiting.
class _SavedSnapshots extends ConsumerStatefulWidget {
  const _SavedSnapshots({required this.builder});
  final Widget Function(List<SavedChatMessage>) builder;
  @override
  ConsumerState<_SavedSnapshots> createState() => _SavedSnapshotsState();
}

class _SavedSnapshotsState extends ConsumerState<_SavedSnapshots> {
  (String, String)? _key;
  Future<List<SavedChatMessage>>? _future;
  @override
  Widget build(BuildContext context) {
    final uid = ref.watch(currentUserProvider)?.uid ?? '';
    final preferences = ref.watch(sharedPreferencesProvider);
    final raw = preferences.getString(savedChatMessagesKey(uid)) ?? '';
    if (uid.isEmpty || raw.length < 128 * 1024) {
      return widget.builder(uid.isEmpty ? const [] : readSavedChatMessages(preferences, uid));
    }
    final key = (uid, raw);
    if (key != _key) {
      _key = key;
      _future = readSavedChatMessagesAsync(preferences, uid);
    }
    return FutureBuilder<List<SavedChatMessage>>(
      key: ValueKey(uid), future: _future,
      builder: (context, snapshot) => snapshot.connectionState != ConnectionState.done
          ? const Center(child: MusicActivityIndicator())
          : widget.builder(snapshot.data ?? const []),
    );
  }
}
'''
p.write_text(s, 'utf-8')
