from source_edit import *

# Warnings here are consequences of the reviewed removal; do not run a broad
# automated fix over unrelated historical edits or third-party packages.
report=(OUT/'analyze-lib-r2.txt').read_text('utf-8-sig')
rows={}
for line in report.splitlines():
    part=line.split('|')
    if len(part)>=8 and part[2] in ['UNUSED_IMPORT','INVALID_NULL_AWARE_OPERATOR','UNNECESSARY_NON_NULL_ASSERTION']:
        path=part[3].replace('\\','/')
        while '//' in path:path=path.replace('//','/')
        p=Path(path).relative_to(ROOT).as_posix()
        rows.setdefault(p,[]).append((int(part[4])-1,part[2]))
for p,issues in rows.items():
    lines=read(p).splitlines(keepends=True)
    for line,code in sorted(issues,reverse=True):
        if code=='UNUSED_IMPORT':
            assert lines[line].lstrip().startswith('import ')
            del lines[line]
        elif code=='INVALID_NULL_AWARE_OPERATOR':lines[line]=lines[line].replace('?.','.')
        else:lines[line]=lines[line].replace('session!','session')
    write(p,''.join(lines))

p='lib/features/search/presentation/music_search_page.dart';s=read(p)
s="import '../../auth/account_capabilities.dart';\n"+s
start=s.index('String _compactCount(');end=closing(s,s.index('{',start));s=s[:start]+s[end:]
s=s.replace("    this.unit = '首',\n",'').replace('  final String unit;','  static const unit = \'首\';')
write(p,s)

p='lib/app/router/app_router.dart';s=read(p)
s=between(s,'Page<void> _messagesTransitionPage(', '/// Full-page continuation')
s=drop_class(s,'_AvatarPreviewTransitionPage')
write(p,s)

p='lib/features/settings/presentation/settings_page.dart';s=read(p)
s=s.replace('    this.destructive = false,\n','').replace('    this.status = false,\n','')
s=s.replace('  final bool destructive;\n','').replace('  final bool status;\n','')
s=s.replace('destructive ? iconColor : tokens.textPrimary','tokens.textPrimary')
s=between(s,'          else if (status)','          else if (onTap != null)')
s=drop_class(s,'_SettingsLoadingTile')
write(p,s)

p='lib/features/player/presentation/music_hub_top_bar.dart';s=read(p)
s=s.replace('    this.unreadCount = 0,\n','').replace('  final int unreadCount;\n','')
s=replace(s,'            if (unreadCount > 0)\n              _UnreadMessagesBadge(count: unreadCount)\n            else\n','')
s=drop_class(s,'_UnreadMessagesBadge')
write(p,s)
print('Retired-only presentation helpers removed; platform capability import retained')
