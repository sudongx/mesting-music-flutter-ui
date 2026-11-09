"""Inspect actual released DEX definitions, JNI ABI, and preserved native ELFs."""
from pathlib import Path
import hashlib
import json
import struct
import subprocess
import zipfile

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent
apk = out / 'candidate4/Mesting-Music-v1.0.75.apk'
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
slot_definition = None
with zipfile.ZipFile(apk) as archive:
    for name in archive.namelist():
        if name.endswith('.dex'):
            for descriptor, value in Dex(archive.read(name)).definitions():
                if descriptor == 'Lcom/it_nomads/fluttersecurestorage/VerifiedCredentialSlots;':
                    slot_definition = value
                if descriptor in expected_fields or descriptor in {prefix + 'MusicNativeTransport;', 'Lcom/luna/audio/effect/AudioEffectBridge;'}:
                    assert descriptor not in definitions
                    definitions[descriptor] = (name, value)
    assert slot_definition is not None
    assert slot_definition['fields']['pointers'][0] == 'Landroid/content/SharedPreferences;'
    assert slot_definition['fields']['prefix'][0] == 'Ljava/lang/String;'
    assert {'read','save','write','rollback','verifyPrimary'}.issubset({name for name, _ in slot_definition['methods']})
    for cls, fields in expected_fields.items():
        found = definitions[cls][1]['fields']
        for name, kind in fields.items():
            assert found[name][0] == kind and found[name][1] & 1, (cls, name, found[name])
    methods = definitions[prefix + 'MusicNativeTransport;'][1]['methods']
    for signature, required_flags in expected_methods.items():
        assert methods[signature] & required_flags == required_flags, signature
    soda_class = definitions['Lcom/luna/audio/effect/AudioEffectBridge;'][1]['methods']
    soda_methods = [
        ('createEffectHandleByConfig', '(IIILjava/lang/String;)J'),
        ('createAudioBuffer', '(JIII)J'),
        ('isValidConfigJson', '(Ljava/lang/String;)I'),
        ('processAudio', '([Ljava/nio/ByteBuffer;JJIIII)I'),
        ('release', '(J)V'),
    ]
    for signature in soda_methods:
        assert soda_class[signature] & 0x109 == 0x109, signature
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

record = {'actualApk': str(apk.relative_to(root)),
    'jniClassesDefinedInDex': {key:value[0] for key,value in definitions.items()},
    'jniMethodSignaturesAndFlagsChecked': [{'name':k[0], 'descriptor':k[1]} for k in expected_methods],
    'jniPublicDtoFieldTypesVerified': expected_fields, 'preservedRustLibrariesFrom54': rebuilt,
    'rustRebuiltFor169': False, 'fssJavaChangedIn169': False, 'verifiedSlotClassPresent': True, 'sodaOfficialJniSignaturesChecked': [{'name': k[0], 'descriptor': k[1]} for k in soda_methods], 'androidRuntimeExecuted': False, 'deviceAccess': False}
(out/'native-packaging-verification.json').write_text(json.dumps(record,indent=2)+'\n','utf-8')
print(json.dumps({'jniClasses':len(definitions),'jniMethods':len(expected_methods),'publicDtoFields':sum(map(len,expected_fields.values())), 'actualApkVerified':True},indent=2))
