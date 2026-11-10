import 'dart:io';
import 'dart:typed_data';

import 'package:audio_service/audio_service.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:flutter/services.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:integration_test/integration_test.dart';
import 'package:mesting_music/core/audio/mesting_audio_handler.dart';
import 'package:mesting_music/features/app_update/data/app_update_platform.dart';
import 'package:mesting_music/features/downloads/audio_download_storage.dart';
import 'package:mesting_music/features/music_platform/data/embedded_music_server.dart';
import 'package:mesting_music/features/music_platform/data/music_platform_api.dart';
import 'package:mesting_music/shared/models/track.dart';
import 'package:http/http.dart' as http;
import 'package:path_provider/path_provider.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  testWidgets(
    'iOS native version and Rust loopback API are available',
    (tester) async {
      final version = await AppUpdatePlatform().currentVersion();
      expect(version.packageName, isNotEmpty);
      expect(version.versionCode, greaterThan(0));
      final server = EmbeddedMusicServer();
      final starts = await Future.wait([server.start(), server.start()]);
      expect(starts.first, starts.last);
      expect(starts.first.host, '127.0.0.1');
      final client = http.Client();
      addTearDown(client.close);
      final api = MusicPlatformApi(server: server, client: client);
      final result = await api.get(
        '/search',
        query: {
          'keywords': '周杰伦',
          'page': '1',
          'pagesize': '2',
          'type': 'song',
        },
      );
      expect(result, isNotEmpty);
    },
    skip: !Platform.isIOS,
  );

  testWidgets(
    'iOS keychain, local index and native output are available',
    (tester) async {
      const storage = FlutterSecureStorage();
      final key = 'ios_acceptance_${DateTime.now().microsecondsSinceEpoch}';
      addTearDown(() => storage.delete(key: key));
      await storage.write(key: key, value: 'temporary acceptance value');
      expect(await storage.read(key: key), 'temporary acceptance value');
      final library = await const MethodChannel(
        'com.mesting.music/local_music',
      ).invokeMapMethod<String, Object?>('load');
      expect(library?['permissionGranted'], isTrue);
      expect(library?['entries'], isA<List>());
      final output = await const MethodChannel(
        'com.mesting.music/audio_output',
      ).invokeMapMethod<String, Object?>('current');
      expect(output?['id'], isNotEmpty);
      final info = await const MethodChannel(
        'com.mesting.music/system_media',
      ).invokeMapMethod<String, Object?>('getListeningDeviceInfo');
      expect(info?['screenWidth'], greaterThan(0));
      expect(info?['systemVersion'], isNotEmpty);
    },
    skip: !Platform.isIOS,
  );

  testWidgets(
    'iOS publishes an audio file and plays it through the app handler',
    (tester) async {
      final temporary = await getTemporaryDirectory();
      final source = File(
        '${temporary.path}/ios-check-${DateTime.now().microsecondsSinceEpoch}.wav',
      );
      final header = ByteData(44);
      void label(int offset, String text) {
        for (var i = 0; i < text.length; i++) {
          header.setUint8(offset + i, text.codeUnitAt(i));
        }
      }

      const samples = 8000 * 3;
      label(0, 'RIFF');
      header.setUint32(4, 36 + samples * 2, Endian.little);
      label(8, 'WAVEfmt ');
      header.setUint32(16, 16, Endian.little);
      header.setUint16(20, 1, Endian.little);
      header.setUint16(22, 1, Endian.little);
      header.setUint32(24, 8000, Endian.little);
      header.setUint32(28, 16000, Endian.little);
      header.setUint16(32, 2, Endian.little);
      header.setUint16(34, 16, Endian.little);
      label(36, 'data');
      header.setUint32(40, samples * 2, Endian.little);
      await source.writeAsBytes([
        ...header.buffer.asUint8List(),
        ...Uint8List(samples * 2),
      ]);
      addTearDown(() async {
        if (await source.exists()) await source.delete();
      });
      final track = Track(
        id: 'ios-acceptance',
        title: 'iOS 验收静音样本',
        artist: '开发测试',
        album: '',
        duration: const Duration(seconds: 3),
        audioAsset: source.uri.toString(),
        coverAsset: '',
        lyricsAsset: '',
      );
      const storage = AudioDownloadStorage();
      final published = await storage.publish(
        source,
        track,
        'wav',
        'audio/wav',
      );
      expect(await storage.readable(published), isTrue);
      final copied = File.fromUri(Uri.parse(published));
      addTearDown(() async {
        if (await copied.exists()) await copied.delete();
      });
      final handler = await AudioService.init<MestingAudioHandler>(
        builder: () => MestingAudioHandler(tracks: []),
        config: const AudioServiceConfig(),
      );
      addTearDown(handler.debugDispose);
      await handler.playSingleTrack(track.copyWith(audioAsset: published));
      await Future<void>.delayed(const Duration(milliseconds: 500));
      expect(handler.mediaItem.value?.id, track.id);
      expect(handler.playbackState.value.playing, isTrue);
      await handler.pause();
      expect(handler.playbackState.value.playing, isFalse);
    },
    skip: !Platform.isIOS,
  );
}
