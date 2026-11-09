"""Retire tests exclusively targeting removed features; retain mixed coverage.

Platform/UI regression tests lose only obsolete guest-auth overrides. Tests
whose actual subject is old remote account/social functionality are removed
with that implementation, recorded individually, and replaced by migration
and three-platform invariants rather than fabricated legacy test doubles.
"""
from source_edit import *
import json

retired=[
 'auth_backend_status','auth_models','auth_repository','auth_ui','avatar_preview',
 'cloudbase_auth_repository','library_sync_api','listen_together',
 'profile_background_sync_api','profile_background','session_store',
 'chat_message_actions','chat_page','saved_messages_page','social_attention',
 'social_repository','social_status','social_ui','track_share',
]
removed=[]
for name in retired:
    p=f'test/{name}_test.dart'
    if (ROOT/p).is_file(): remove(p)
    removed.append(p)

def baseline(path):
    before=OUT/'source-before'/path
    return (before if before.is_file() else ROOT/path).read_text('utf8')

def code_matches(pattern,s):
    literals=[(m.start(),m.end()) for m in TOKEN.finditer(s) if len(m[0])>1]
    for m in re.finditer(pattern,s):
        if not any(a<=m.start()<b for a,b in literals):yield m

changes=[]
retired_cases=[]
for directory in ['test','integration_test']:
 for file in (ROOT/directory).rglob('*.dart'):
    p=file.relative_to(ROOT).as_posix();s=baseline(p);original=s
    # These providers were only no-account fixtures in retained platform tests.
    pattern=re.compile(r'(?m)^\s*(?:authControllerProvider|authRepositoryProvider|librarySyncApiProvider|socialUserSearchProvider)\.overrideWith(?:Value)?\(')
    while (m:=pattern.search(s)):
        end=closing(s,s.index('(',m.start()))
        if s[end:end+1]==',':end+=1
        s=s[:m.start()]+s[end:]
    # Keep every real-platform fake. Only doubles of the deleted API disappear.
    for m in list(re.finditer(r'class\s+(\w+)\s+extends\s+(?:AuthController|UnconfiguredAuthRepository|Notifier<AuthUser\?>)\s*\{',s))[::-1]:
        s=drop_class(s,m[1])
    # Collect actual test invocations, not textual descriptions or utility code.
    cases=[]
    for m in code_matches(r'\btest(?:Widgets)?\s*\(',s):
        try:
            end=closing(s,s.index('(',m.start()));body=s[m.start():end]
        except Exception:
            print('Lexical test-block error:',p,s[m.start():m.start()+170])
            raise
        if re.search(r'\b(?:AuthUser|AuthSession|AuthProtectedPage|SocialUser|SocialConversation)\b|BetaAccountChoice\.mesting|\b(?:socialRepositoryProvider|currentUserProvider|authControllerProvider|authRepositoryProvider)\b',body):
            cases.append((m.start(),end))
            retired_cases.append({'path':p,'description':body[:200]})
    for start,end in cases[::-1]:
        if s[end:end+1]==';':end+=1
        s=s[:start]+s[end:]
    s=re.sub(r"(?m)^import 'package:mesting_music/(?:features/auth/(?:auth_providers|domain/auth_models|data/auth_repository|presentation/(?:auth_page|auth_protected_page))|features/social/[^']+|features/profile/profile_background_controller|core/security/session_store|features/library/data/library_sync_api)\.dart';\n",'',s)
    # Dedicated routed login tests now address the supported platform surface.
    if 'AuthPage(' in s:
        s=s.replace('AuthPage(', 'PlatformAuthPage(')
        s="import 'package:mesting_music/features/music_platform/presentation/platform_auth_page.dart';\n"+s
        s=re.sub(r"\s*initialMode: '(?:login|register)',",'',s)
    s=s.replace('    legacy = _Legacy();\n','').replace('  late _Legacy legacy;\n','')
    s=s.replace('    List<SocialUser> userResults = const [],\n','')
    if p=='test/user_facing_error_test.dart':s=s.replace('AuthException(', 'StateError(')
    if s!=original:
        write(p,s);changes.append(p)
(OUT/'retired-test-manifest.json').write_text(json.dumps({'filesRemoved':removed,'mixedFilesUpdated':changes,'retiredFeatureCases':retired_cases},ensure_ascii=False,indent=2)+'\n','utf8')
print(json.dumps({'retiredFiles':len(removed),'mixedFilesUpdated':len(changes),'retiredFeatureCases':len(retired_cases)}))
