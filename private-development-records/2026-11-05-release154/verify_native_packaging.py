"""Inspect actual released DEX definitions, JNI ABI, and both rebuilt ELFs."""
from pathlib import Path
import hashlib
import json
import struct
import subprocess
import zipfile

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent
apk = root / 'release/Mesting-Music-v1.0.54.apk'
ndk = Path('D:/CodexCache/android-build/sdk/ndk/28.2.13676358/toolchains/llvm/prebuilt/windows-x86_64/bin')

def sha(data):
    return hashlib.sha256(data).hexdigest()

class Dex:
    def __init__(self, data):
        self.data = data
        count, offset = struct.unpack_from('<II', data, 56)
        self.strings = []
        for i in range(count):
            cursor = struct.unpack_from('<I', data, offset + 4 * i)[0]
            _, cursor = self.uleb(cursor)
            self.strings.append(data[cursor:data.index(b'\0', cursor)].decode('utf-8', errors='replace'))
        count, offset = struct.unpack_from('<II', data, 64)
        self.types = [self.strings[struct.unpack_from('<I', data, offset + 4 * i)[0]] for i in range(count)]
        count, offset = struct.unpack_from('<II', data, 72)
        self.protos = []
        for i in range(count):
            _, result, params = struct.unpack_from('<III', data, offset + 12 * i)
            args = ''
            if params:
                size = struct.unpack_from('<I', data, params)[0]
                args = ''.join(self.types[struct.unpack_from('<H', data, params + 4 + 2 * j)[0]] for j in range(size))
            self.protos.append('(' + args + ')' + self.types[result])
        count, offset = struct.unpack_from('<II', data, 80)
        self.fields = []
        for i in range(count):
            owner, kind, name = struct.unpack_from('<HHI', data, offset + 8 * i)
            self.fields.append((self.types[owner], self.strings[name], self.types[kind]))
        count, offset = struct.unpack_from('<II', data, 88)
        self.methods = []
        for i in range(count):
            owner, proto, name = struct.unpack_from('<HHI', data, offset + 8 * i)
            self.methods.append((self.types[owner], self.strings[name], self.protos[proto]))

    def uleb(self, cursor):
        value, shift = 0, 0
        while True:
            byte = self.data[cursor]
            cursor += 1
            value |= (byte & 127) << shift
            if not byte & 128:
                return value, cursor
            shift += 7

    def definitions(self):
        count, offset = struct.unpack_from('<II', self.data, 96)
        for i in range(count):
            owner = self.types[struct.unpack_from('<I', self.data, offset + 32 * i)[0]]
            cursor = struct.unpack_from('<I', self.data, offset + 32 * i + 24)[0]
            if not cursor:
                continue
            sizes = []
            for _ in range(4):
                value, cursor = self.uleb(cursor)
                sizes.append(value)
            fields, methods = {}, {}
            for size in sizes[:2]:
                index = 0
                for _ in range(size):
                    delta, cursor = self.uleb(cursor)
                    flags, cursor = self.uleb(cursor)
                    index += delta
                    cls, name, kind = self.fields[index]
                    assert cls == owner
                    fields[name] = (kind, flags)
            for size in sizes[2:]:
                index = 0
                for _ in range(size):
                    delta, cursor = self.uleb(cursor)
                    flags, cursor = self.uleb(cursor)
                    _, cursor = self.uleb(cursor)
                    index += delta
                    cls, name, signature = self.methods[index]
                    assert cls == owner
                    methods[(name, signature)] = flags
            yield owner, {'fields': fields, 'methods': methods}

prefix = 'Lcom/mesting/music/'
expected_fields = {
    prefix + 'MusicHttpReply;': {'status': 'I', 'body': '[B', 'cookies': "[REDACTED]",
        'finalUrl': 'Ljava/lang/String;', 'location': 'Ljava/lang/String;',
        'ssaCode': 'Ljava/lang/String;', 'error': 'Ljava/lang/String;'},
    prefix + 'MusicStreamReply;': {'id': 'J', 'status': 'I', 'length': 'J',
        'contentType': 'Ljava/lang/String;', 'error': 'Ljava/lang/String;'},
}
expected_methods = {
    ('nativeInstall', '()Z'): 0x108,
    ('exchange', '(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;[BJZ)Lcom/mesting/music/MusicHttpReply;'): 0x9,
    ('openStream', '(Ljava/lang/String;)Lcom/mesting/music/MusicStreamReply;'): 0x9,
    ('readStream', '(JI)[B'): 0x9,
    ('closeStream', '(J)V'): 0x9,
}
definitions = {}
with zipfile.ZipFile(apk) as archive:
    for name in archive.namelist():
        if name.endswith('.dex'):
            for descriptor, value in Dex(archive.read(name)).definitions():
                if descriptor in expected_fields or descriptor == prefix + 'MusicNativeTransport;':
                    assert descriptor not in definitions
                    definitions[descriptor] = (name, value)
    for cls, fields in expected_fields.items():
        found = definitions[cls][1]['fields']
        for name, kind in fields.items():
            assert found[name][0] == kind and found[name][1] & 1, (cls, name, found[name])
    methods = definitions[prefix + 'MusicNativeTransport;'][1]['methods']
    for signature, required_flags in expected_methods.items():
        assert methods[signature] & required_flags == required_flags, signature
    rebuilt = []
    for abi, target in [('arm64-v8a', 'aarch64-linux-android'), ('armeabi-v7a', 'armv7-linux-androideabi')]:
        native = root / 'android/app/src/beta/jniLibs' / abi / 'libkugou_server.so'
        built = root / 'build/md3-native154' / target / 'release/libkugou_server.so'
        assert native.read_bytes() == built.read_bytes()
        stripped = out / f'final-rust-stripped-{abi}.so'
        subprocess.run([str(ndk / 'llvm-strip.exe'), '--strip-unneeded', '-o', str(stripped), str(native)], check=True)
        payload = archive.read(f'lib/{abi}/libkugou_server.so')
        assert payload == stripped.read_bytes(), abi
        symbols = subprocess.check_output([str(ndk / 'llvm-readelf.exe'), '--dyn-syms', '--wide', str(stripped)], text=True)
        for symbol in ['start_server', 'stop_server', 'is_server_running', 'get_server_port',
                       'Java_com_mesting_music_MusicNativeTransport_nativeInstall']:
            assert symbol in symbols, (abi, symbol)
        rebuilt.append({'abi': abi, 'apkSha256': sha(payload), 'buildInputSha256': sha(native.read_bytes()),
            'exactNdkStrippedInputMatch': True, 'jniInstallAndExistingCAbiExported': True})

storage = root / 'third_party/flutter_secure_storage/package/android/src/main/java/com/it_nomads/fluttersecurestorage'
storage_inputs = [storage / 'StorageErrorFamily.java', storage / 'SecureCommitException.java',
                  root / 'test/native/Release154StorageFamilyTest.java']
storage_log = (out / 'storage-family-tests.log').read_text('utf-8-sig')
assert '6 native credential-family scenarios passed' in storage_log
record = {'actualApk': str(apk.relative_to(root)), 'jniClassesDefinedInDex': {key: value[0] for key, value in definitions.items()},
    'jniMethodSignaturesAndFlagsChecked': [{'name': key[0], 'descriptor': key[1]} for key in expected_methods],
    'jniPublicDtoFieldTypesVerified': expected_fields, 'rebuiltRustLibraries': rebuilt,
    'storageFamilyScenariosPassed': 6, 'storageFamilyInputs': [{'path': str(p.relative_to(root)), 'sha256': sha(p.read_bytes())} for p in storage_inputs],
    'androidRuntimeExecuted': False, 'deviceAccess': False}
(out / 'native-packaging-verification.json').write_text(json.dumps(record, indent=2) + '\n', 'utf-8')
print(json.dumps({'jniClasses': len(definitions), 'jniMethods': len(expected_methods), 'publicDtoFields': sum(map(len, expected_fields.values())),
    'rebuiltRustAbis': len(rebuilt), 'storageFamilyCases': 6, 'actualApkVerified': True}, indent=2))
