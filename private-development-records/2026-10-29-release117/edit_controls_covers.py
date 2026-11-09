from pathlib import Path
r=Path('D:/AnLi')
for f,prefix in [('lib/features/music_platform/netease/netease_source_settings_panel.dart','../../../shared/widgets/'),('lib/features/music_platform/netease/full/netease_full_page.dart','../../../../shared/widgets/')]:
 p=r/f;s=p.read_text(encoding='utf-8');s=f"import '{prefix}beta_choice_field.dart';\n"+s;s=s.replace('DropdownButtonFormField<','BetaChoiceField<');p.write_text(s,encoding='utf-8',newline='\n')
p=r/'lib/shared/widgets/artwork_image.dart';s=p.read_text(encoding='utf-8');s="import '../utils/media_uri.dart';\n"+s;s=s.replace('_legacyArtworkAssetAliases[value] ?? value;', 'normalizeArtworkUri(_legacyArtworkAssetAliases[value] ?? value);');p.write_text(s,encoding='utf-8',newline='\n')
p=r/'lib/features/music_platform/netease/netease_library_repository.dart';s=p.read_text(encoding='utf-8');s="import '../../../shared/utils/media_uri.dart';\n"+s;s=s.replace("coverAsset: '${row['coverImgUrl'] ?? ''}',", "coverAsset: normalizeArtworkUri('${row['coverImgUrl'] ?? row['picUrl'] ?? row['coverUrl'] ?? ''}'),");p.write_text(s,encoding='utf-8',newline='\n')
p=r/'lib/features/experience/presentation/editorial_widgets.dart';s=p.read_text(encoding='utf-8');s=s.replace('''                      uri: cover,
                      width: width,''','''                      uri: cover,
                      retryOnNetworkError: true,
                      persistentNetworkCacheKey: 'editorial-cover:$cover',
                      width: width,''',1);p.write_text(s,encoding='utf-8',newline='\n')
print('Shared glass choice field and secure artwork normalization installed')
