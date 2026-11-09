from pathlib import Path
p=Path('lib/features/search/presentation/music_search_page.dart')
s=p.read_text(encoding='utf-8')
s=s.replace("import '../../../shared/widgets/beta_bottom_search.dart';", "import '../../../shared/widgets/beta_bottom_search.dart';\nimport '../../../shared/widgets/beta_page_search_layout.dart';")
s=s.replace('  final _textController = TextEditingController();\n  final _focusNode = FocusNode();', "  late final _bottomSearch = BetaPageSearchController(hintText: '搜索歌曲、歌手或专辑', onSubmitted: _submit, onCleared: () => _handleQueryChanged(''), onChanged: _handleQueryChanged);\n  TextEditingController get _textController => _bottomSearch.text;\n  FocusNode get _focusNode => _bottomSearch.focus;")
s=s.replace('    _textController.dispose();\n    _focusNode.dispose();','    _bottomSearch.dispose();',1)
start=s.index('              Padding(',s.index('SizedBox(height: top + 12)'))
end=s.index('\n              Expanded(\n                child: DistributionChannel',start)
assert 'search-submit-action' in s[start:end]
s=s[:start]+"              Align(alignment: Alignment.centerLeft, child: _CircleBack(onTap: _closeSearch)),"+s[end:]
s=s.replace('    final accent = Theme.of(context).colorScheme.primary;\n    return BetaEdgeBack(', '    return BetaPageSearchLayout(controller: _bottomSearch, child: BetaEdgeBack(',1)
end=s.index('\n/// Search results reused by the official bottom search field.')
prefix=s[:end]; at=prefix.rfind('    );')
assert at>0
s=prefix[:at]+'    ));'+prefix[at+6:]+s[end:]
p.write_text(s,encoding='utf-8')
