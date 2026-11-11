import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mesting_music/features/legal/domain/ios_legal_documents.dart';
import 'package:mesting_music/features/legal/domain/legal_documents.dart';
import 'package:mesting_music/features/legal/presentation/legal_documents_page.dart';

void main() {
  test('iOS privacy describes picker grants and actual platform services', () {
    final document = iosLegalDocumentFor(LegalDocumentType.privacyPolicy);
    final text = document.sections.map((section) => section.body).join('\n');
    expect(text, contains('仅添加照片权限'));
    expect(text, contains('系统书签'));
    expect(text, contains('不进行持续后台定位'));
    expect(text, contains('不使用该更新链路的 Ring Download、P2P 或 P8P'));
    expect(text, isNot(contains('主动扫描本地音乐时请求音频读取权限')));
    expect(document.summary, contains('iOS Beta'));
    expect(
      legalDocumentFor(LegalDocumentType.privacyPolicy),
      same(betaPrivacyPolicyDocument),
    );
  });

  for (final type in LegalDocumentType.values) {
    testWidgets(
      'iOS ${type.name} displays its platform document',
      (tester) async {
        await tester.pumpWidget(
          MaterialApp(
            home: Scaffold(body: LegalDocumentPage(documentType: type)),
          ),
        );
        await tester.pumpAndSettle();
        expect(find.textContaining('iOS Beta'), findsWidgets);
        expect(find.text('更新及生效日期：2026 年 11 月 11 日'), findsOneWidget);
        expect(tester.takeException(), isNull);
      },
      variant: TargetPlatformVariant({TargetPlatform.iOS}),
    );
  }
}
