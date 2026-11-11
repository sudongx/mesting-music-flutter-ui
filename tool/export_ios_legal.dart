import 'dart:io';
import 'package:mesting_music/features/legal/domain/ios_legal_documents.dart';

void main() {
  final folder = Directory('docs/legal')..createSync(recursive: true);
  for (final entry in {
    'ios-privacy-policy.md': iosBetaPrivacyPolicyDocument,
    'ios-user-agreement.md': iosBetaUserAgreementDocument,
  }.entries) {
    final document = entry.value;
    final output =
        StringBuffer('# Mesting Music iOS Beta ${document.title}\n\n')
          ..writeln('${document.effectiveDate}\n')
          ..writeln('${document.summary}\n');
    for (final section in document.sections) {
      output.writeln('## ${section.title}\n\n${section.body}\n');
    }
    File('${folder.path}/${entry.key}').writeAsStringSync(output.toString());
  }
}
