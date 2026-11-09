from source_edit import *
import json,subprocess

prior=OUT/'retired-test-manifest-r3.json'
assert not prior.exists()
paths={}
for directory in ['test','integration_test']:
 for file in (ROOT/directory).rglob('*.dart'):
    p=file.relative_to(ROOT).as_posix()
    before=OUT/'source-before'/p
    s=(before if before.is_file() else ROOT/p).read_text('utf8')
    if re.search(r'auth_providers|auth_models|auth_repository|features/social/|core/security/session_store|library_sync_api|profile_background_controller|\bAuthPage\b',s):
        # A historical nil-legacy assertion is irrelevant to the still-useful
        # platform/player test around it. Keep the actual behavior regression.
        s=re.sub(r'(?m)^.*expect\(.*\.read\((?:currentUserProvider|authControllerProvider)\)(?:\.value)?, (?:null|isNull)\);\n','',s)
        s=re.sub(r'(?m)^.*expect\(legacy\.(?:restores|calls|reads), \d+\);\n','',s)
        s=re.sub(r'(?m)^.*(?:final legacy = _PendingLegacyAuth\(\);|legacy = NeverRestore\(\);|late NeverRestore legacy;).*\n','',s)
        paths[p]=s
result=subprocess.run(['D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe',str(OUT/'retire_test_ast.dart')],input=json.dumps(paths).encode('utf8'),capture_output=True,check=True)
data=json.loads(result.stdout)
retired_cases=[]
for p,value in data.items():
    s=value['source']
    s=re.sub(r"(?m)^import 'package:mesting_music/(?:features/auth/(?:auth_providers|domain/auth_models|data/auth_repository|presentation/(?:auth_page|auth_protected_page))|features/social/[^']+|features/profile/profile_background_controller|core/security/session_store|features/library/data/library_sync_api)\.dart';\n",'',s)
    if 'AuthPage(' in s:
        s=s.replace('AuthPage(', 'PlatformAuthPage(')
        s="import 'package:mesting_music/features/music_platform/presentation/platform_auth_page.dart';\n"+s
        s=re.sub(r"\s*initialMode: '(?:login|register)',",'',s)
    s=s.replace('    legacy = _Legacy();\n','').replace('  late _Legacy legacy;\n','')
    s=s.replace('    List<SocialUser> userResults = const [],\n','')
    s=s.replace("import 'package:mesting_music/core/sync/library_sync_models.dart';\n",'')
    s=s.replace('  late NeverRestore legacy;\n','').replace('    legacy = NeverRestore();\n','')
    s=s.replace('      expect(container.read(showMestingFeaturesProvider), false);\n','')
    if p=='test/user_facing_error_test.dart':s=s.replace('const AuthRequestException(', 'Exception(')
    write(p,s)
    retired_cases.extend({'path':p,'description':v} for v in value['retiredCases'])
removed=[str(p.relative_to(OUT/'source-before')).replace('\\','/') for p in (OUT/'source-before/test').glob('*.dart') if not (ROOT/p.relative_to(OUT/'source-before')).is_file()]
prior.write_text(json.dumps({'filesRemoved':removed,'mixedFilesUpdated':list(data),'retiredFeatureCases':retired_cases},ensure_ascii=False,indent=2)+'\n','utf8')
print(json.dumps({'retiredFiles':len(removed),'mixedFilesUpdated':len(data),'retiredFeatureCases':len(retired_cases)}))
