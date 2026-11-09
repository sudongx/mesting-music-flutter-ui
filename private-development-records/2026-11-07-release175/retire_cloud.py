from source_edit import *
import json,subprocess

p='lib/core/database/app_database.dart';s=read(p)
s=between(s,'  Future<List<LibrarySyncMutation>> pendingLibraryMutations(', '  Future<void> savePlaybackSession(')
s=s.replace("import '../sync/library_sync_models.dart';\n",'')
s=between(s,'Map<String, Object?> _playbackHistoryPayload(', 'String _playbackDayKey(')
parsed=subprocess.run(['D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe',str(OUT/'retire_test_ast.dart')],input=json.dumps({p:s}).encode(),capture_output=True,check=True)
s=json.loads(parsed.stdout)[p]['source']
s=s.replace('class SyncMutations extends Table {', '''// Compatibility-only table: preserve its schema and historical rows during
// upgrades. The retired account's cloud readers, writers and journal are gone;
// current three-platform synchronization uses each platform repository.
class SyncMutations extends Table {''')
write(p,s)
remove('lib/core/sync/library_sync_models.dart')
remove('lib/features/auth/data/device_phone_number_service.dart')
remove('test/library_cloud_persistence_test.dart')

p='lib/features/legal/domain/legal_documents.dart';s=read(p)
s=s.replace("import '../../../core/platform/distribution_channel.dart';\n\n",'')
s=between(s,'const userAgreementDocument = LegalDocument(', 'const betaUserAgreementDocument = LegalDocument(', '''// All channels use the currently implemented platform/guest contract.
const userAgreementDocument = betaUserAgreementDocument;
const privacyPolicyDocument = betaPrivacyPolicyDocument;

''')
s=s.replace('2026 年 10 月 28 日', '2026 年 11 月 7 日')
s=s.replace('当前版本不提供新的 Mesting 账号注册入口；已有历史会话、酷狗会话和网易云会话分别保存和管理，不因切换登录入口而合并。','当前版本仅提供酷狗、网易云和汽水平台账号及游客入口，旧 Mesting 账号及其专属资料、社交和云同步功能已移除。三平台会话分别保存和管理，不因切换入口而合并；现有本地音乐和记录继续按原归属保存。')
s=s.replace('所选酷狗或网易云及相应资源服务','所选酷狗、网易云或汽水及相应资源服务')
s=s.replace('本版随包的原生适配服务用于发起这些请求，不要求你另行配置 API。','酷狗和网易云请求由随包适配模块发起；汽水签名请求使用你在设置中保存的服务配置。只有显式开启账号参与签名并符合客户端限定的 HTTPS 服务及请求范围时，才会向该签名服务提供所需的账号 Cookie；访问令牌仅用于访问你配置的助手。')
s=s.replace('共享工程的历史 Mesting 会话仍可能使用腾讯云 CloudBase 的认证、资料或存储能力；当前客户端已移除新的 Mesting 注册/登录入口，不将其与酷狗账号混同，也不把旧版 Java + MySQL 测试渠道描述成当前账号服务。','旧 Mesting 账号的认证、资料、社交及云同步客户端实现已移除，当前版本不再通过这些旧接口读取或上传账号资料。移除客户端代码不会替你注销远端账号或清理三平台数据。')
s=between(s,'LegalDocument legalDocumentFor(', 'LegalDocument legalDocumentFor(', '') if False else s
start=s.index('LegalDocument legalDocumentFor(')
s=s[:start]+'''LegalDocument legalDocumentFor(LegalDocumentType type) => switch (type) {
  LegalDocumentType.userAgreement => userAgreementDocument,
  LegalDocumentType.privacyPolicy => privacyPolicyDocument,
};
'''
write(p,s)
print('Retired remote cloud journal removed; existing Drift schema and data preserved')
