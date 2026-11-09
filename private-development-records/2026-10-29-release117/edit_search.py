from pathlib import Path
root=Path('D:/AnLi')
def edit(name,fn):
 p=root/name;s=p.read_text(encoding='utf-8');t=fn(s);assert t!=s,name;p.write_text(t,encoding='utf-8',newline='\n')
p='lib/features/search/search_providers.dart'
s=(root/p).read_text(encoding='utf-8')
a=s.index('  void setQuery(String rawQuery)');b=s.index('  Future<void> submit(',a)
s=s[:a]+'''  String? _scheduledQuery;

  /// A composing IME value is not a committed query. Invalidate the previous
  /// request immediately, but keep its visible results until the debounce ends.
  void setQuery(String rawQuery, {bool composing = false}) {
    final query = rawQuery.trim();
    if (!composing && _scheduledQuery == query) return;
    _debounce?.cancel();
    _scheduledQuery = composing ? null : query;
    final generation = ++_generation;
    _cancelPlatform();
    ref.read(musicSearchRepositoryProvider).cancelActiveSearch();
    if (composing) return;
    if (query.isEmpty) {
      state = MusicSearchState(recentSearches: state.recentSearches);
      return;
    }
    _debounce = Timer(_debounceDuration, () {
      if (!ref.mounted || generation != _generation) return;
      _beginQuery(query);
      unawaited(_search(query, generation));
    });
  }

  void _beginQuery(String query) {
    state = state.copyWith(
      query: query,
      isLoading: true,
      fromCache: false,
      clearError: true,
      warnings: const [],
      hasMore: false,
      isLoadingMore: false,
      clearTotal: true,
      clearMoreError: true,
    );
  }

'''+s[b:]
a=s.index('    state = state.copyWith(',s.index('  Future<void> submit('));b=s.index('    await _search(query, _generation);',a)
s=s[:a]+'''    _scheduledQuery = query;
    _beginQuery(query);
'''+s[b:]
s=s.replace('    ++_generation;\n    _debounce?.cancel();','    ++_generation;\n    _scheduledQuery = null;\n    _debounce?.cancel();',1)
(root/p).write_text(s,encoding='utf-8',newline='\n')
p='lib/features/search/presentation/music_search_page.dart'
s=(root/p).read_text(encoding='utf-8');anchor='  @override\n  void dispose() {'
s=s.replace(anchor,'''  @override
  void initState() {
    super.initState();
    // Composition can end without changing text. A value listener observes
    // that commit too; TextField.onChanged alone misses it on some keyboards.
    _textController.addListener(_editingChanged);
  }

  void _editingChanged() {
    final value = _textController.value;
    ref.read(musicSearchControllerProvider.notifier).setQuery(
      value.text,
      composing: value.composing.isValid && !value.composing.isCollapsed,
    );
  }

'''+anchor+'\n    _textController.removeListener(_editingChanged);',1)
s=s.replace('    ref.read(musicSearchControllerProvider.notifier).setQuery(value);','    _editingChanged();',1)
(root/p).write_text(s,encoding='utf-8',newline='\n')
p='lib/features/search/presentation/beta_category_search_results.dart'
s=(root/p).read_text(encoding='utf-8');s=s.replace("key: ValueKey('$query-${selected.name}'),","key: ValueKey(selected.name),")
s=s.replace('''    final query = ref.watch(
      musicSearchControllerProvider.select((s) => s.query),
    );
''','',1)
s=s.replace('''      if (songs.isLoading) return const Center(child: BetaActivityIndicator());
      return AppleSearchResults(state: songs, controller: _scroll);''','''      return Stack(
        children: [
          if (!songs.isLoading || songs.hasResults)
            Positioned.fill(child: AppleSearchResults(state: songs, controller: _scroll)),
          if (songs.isLoading)
            Align(
              alignment: songs.hasResults ? Alignment.topRight : Alignment.center,
              child: const Padding(
                padding: EdgeInsets.all(18),
                child: BetaActivityIndicator(key: ValueKey('search-query-progress')),
              ),
            ),
        ],
      );''')
(root/p).write_text(s,encoding='utf-8',newline='\n')
print('Search debounce, IME commit and stable result pane implemented')
