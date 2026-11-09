from pathlib import Path
p=Path('D:/AnLi/lib/features/music_platform/netease/messages/netease_messages_repository.dart');s=p.read_text(encoding='utf-8');s="import 'netease_message_reads.dart';\nimport '../../../../core/persistence/app_preferences.dart';\n"+s
s=s.replace('''  (ref) => NeteaseMessagesRepository(ref.watch(neteaseMusicRepositoryProvider)),''','''  (ref) {
    final music = ref.watch(neteaseMusicRepositoryProvider);
    final prefs = ref.watch(sharedPreferencesProvider);
    final key = 'netease_message_read_v1:${music.api.session?.userId ?? "guest"}';
    Map<String, int> seen = {};
    try { seen = Map<String, int>.from(jsonDecode(prefs.getString(key) ?? '{}') as Map); } catch (_) { /* Bad cursors never hide messages. */ }
    final reads = NeteaseMessageReads(restored: seen, persist: (value) async { await prefs.setString(key, jsonEncode(value)); });
    ref.onDispose(reads.close);
    return NeteaseMessagesRepository(music, reads: reads);
  },''',1)
s=s.replace('''  NeteaseMessagesRepository(this.music);
  final NeteaseMusicRepository music;''','''  NeteaseMessagesRepository(this.music, {NeteaseMessageReads? reads}) : reads = reads ?? NeteaseMessageReads();
  final NeteaseMusicRepository music;
  final NeteaseMessageReads reads;
  final _rawConversations = <String, NeteaseConversation>{};
  NeteaseConversation visibleConversation(NeteaseConversation value) => NeteaseConversation(value.peer, value.last, reads.includes(value.peer.id, value.last.time) ? 0 : value.unread);
  Map<String, int> visibleCounts(Map<String, int> raw) {
    final suppressed = _rawConversations.values.where((c) => reads.includes(c.peer.id, c.last.time)).fold<int>(0, (n, c) => n + c.unread);
    return {...raw, 'privateMsgCount': ((raw['privateMsgCount'] ?? 0) - suppressed).clamp(0, 2147483647)};
  }''',1)
a=s.index('    return NeteaseMusicRepository.rows(r[\'msgs\'])',s.index('Future<List<NeteaseConversation>> conversations'));b=s.index('\n  }',a)
s=s[:a]+'''    final rows = NeteaseMusicRepository.rows(r['msgs'])
        .map((row) => NeteaseConversation.parse(row, self))
        .where((c) => c.peer.id.isNotEmpty).toList();
    if (offset == 0) _rawConversations.clear();
    for (final value in rows) { _rawConversations[value.peer.id] = value; }
    return rows;
'''+s[b:]
# revisions keep the covered conversation list and all badge consumers in sync.
pos=s.index('/// Every operation uses the account snapshot')
s=s[:pos]+'''final neteaseMessageReadRevisionProvider = StreamProvider<int>((ref) async* {
  final reads = ref.watch(neteaseMessagesRepositoryProvider).reads;
  var revision = 0;
  yield revision;
  await for (final _ in reads.changes) { yield ++revision; }
});

'''+s[pos:]
p.write_text(s,encoding='utf-8',newline='\n')
p=Path('D:/AnLi/lib/features/music_platform/netease/messages/netease_messages_page.dart');s=p.read_text(encoding='utf-8')
s=s.replace('''    final list = _conversations.where(''','''    ref.watch(neteaseMessageReadRevisionProvider);
    final counts = repository.visibleCounts(_counts);
    final list = _conversations.map(repository.visibleConversation).where(''',1)
# Restrict changes to the messages list, not unrelated notice state classes.
a=s.index('class _NeteaseMessagesPageState');b=s.index('class _UnreadBadge',a)
s=s[:a]+s[a:b].replace("_counts['", "counts['")+s[b:]
# Only chat owns displayed acknowledgements; downloads/polling/background pages cannot mark read.
a=s.index('class _NeteaseChatPageState');b=s.index('  Future<void> _load(',a)
s=s[:b]+'''  void _displayedLatest() {
    if (!current || !foreground || !(ModalRoute.of(context)?.isCurrent ?? false) ||
        !_scroll.hasClients || _scroll.offset > 80 || _messages.isEmpty) return;
    repository.reads.displayed(widget.peer.id, _messages.first.time);
  }

'''+s[b:]
a=s.index('class _NeteaseChatPageState');b=s.index('  Future<void> _pickPicture()',a)
part=s[a:b].replace('''    _share = widget.share;''','''    _share = widget.share;
    _scroll.addListener(_displayedLatest);''',1)
part=part.replace('''        _uncertain = false;
      });''','''        _uncertain = false;
      });
      WidgetsBinding.instance.addPostFrameCallback((_) => _displayedLatest());''',1)
s=s[:a]+part+s[b:];p.write_text(s,encoding='utf-8',newline='\n')
print('Account-owned visible-history cursors reconcile conversation and total unread counts')
