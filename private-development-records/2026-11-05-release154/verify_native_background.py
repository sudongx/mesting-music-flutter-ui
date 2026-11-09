from pathlib import Path
import hashlib
import json
import os
import subprocess
import xml.etree.ElementTree as ET

root = Path(r'D:/AnLi')
out = Path(__file__).resolve().parent
cache = Path(r'D:/CodexCache/android-build/gradle/caches/modules-2/files-2.1')
java = Path(r'D:/CodexCache/android-build/jdk/jdk-17.0.20.1+1/bin/java.exe')


def jar(group, artifact, version):
    matches = list((cache / group / artifact / version).rglob(f'{artifact}-{version}.jar'))
    assert len(matches) == 1, (group, artifact, version)
    return matches[0]


compiler = jar('org.jetbrains.kotlin', 'kotlin-compiler-embeddable', '2.2.20')
pom = next((cache / 'org.jetbrains.kotlin/kotlin-compiler-embeddable/2.2.20').rglob('*.pom'))
ns = {'m': 'http://maven.apache.org/POM/4.0.0'}
deps = [jar(d.find('m:groupId', ns).text, d.find('m:artifactId', ns).text,
            d.find('m:version', ns).text)
        for d in ET.parse(pom).findall('./m:dependencies/m:dependency', ns)]
annotations = jar('org.jetbrains', 'annotations', '13.0')
stdlib = jar('org.jetbrains.kotlin', 'kotlin-stdlib', '2.2.20')
compiler_cp = os.pathsep.join(map(str, [compiler, *deps, annotations]))
android = max(Path(r'D:/CodexCache/android-build/sdk/platforms').glob('android-*/android.jar'),
              key=lambda p: int(p.parent.name.split('-')[-1]))
embedding_candidates = list((Path('\\\\?\\' + str(cache)) / 'io.flutter/flutter_embedding_release').rglob('*.jar'))
embedding_source = max(embedding_candidates, key=lambda p: p.stat().st_mtime)
# A short, local type-check input also works when the cached filename exceeds
# Windows MAX_PATH. This is an existing dependency, never a fetched package.
embedding = out / 'flutter-embedding-typecheck.jar'
embedding.write_bytes(embedding_source.read_bytes())
keep = jar('androidx.annotation', 'annotation-jvm', '1.9.1')
http_inputs = json.loads((out / 'http-library-host-inputs.json').read_text('utf-8'))
http_jars = [Path(row['path']) for row in http_inputs]
stdlib = http_jars[-1]
classpath = os.pathsep.join(map(str, [stdlib, annotations, keep, android, embedding, *http_jars]))
production = [root / 'android/app/src/main/kotlin/com/mesting/mesting_music' / name
              for name in ['TogetherPulseScheduler.kt', 'TogetherBackgroundPlugin.kt', 'TogetherMediaLeaseCoordinator.kt']]
production.append(root / 'android/app/src/main/java/com/ryanheise/audioservice/MestingTogetherMediaLease.java')
production.append(root / 'android/app/src/main/kotlin/com/mesting/mesting_music/MusicHttpPlugin.kt')
production.extend(root / 'android/app/src/main/kotlin/com/mesting/mesting_music' / name
    for name in ['MusicHttpExchange.kt', 'MusicNativeTransport.kt', 'MusicNetworkState.kt'])
scenarios = 0
inputs = list(production)
for version, label, expected in [('144', 'scheduler', 6), ('145', 'diagnostics', 4), ('145', 'media_lease', 6)]:
    test = root / f'test/native/release_{version}_background_{label}_test.kt'
    inputs.append(test)
    binary = out / f'native-{version}-{label}-tests.jar'
    result = subprocess.run(
        [str(java), '-cp', compiler_cp, 'org.jetbrains.kotlin.cli.jvm.K2JVMCompiler',
         '-no-stdlib', '-no-reflect', '-jvm-target', '17', '-classpath', classpath,
         '-d', str(binary), *map(str, [*production, test])],
        capture_output=True, text=True)
    (out / f'native-{version}-{label}-compile.log').write_text(result.stdout + result.stderr, 'utf8')
    assert result.returncode == 0, result.stderr[-3500:]
    main = f'com.mesting.music.Release_{version}_background_{label}_testKt'
    run = subprocess.run([str(java), '-cp', os.pathsep.join(map(str, [binary, stdlib, *http_jars])), main],
                         capture_output=True, text=True)
    (out / f'native-{version}-{label}-tests.log').write_text(run.stdout + run.stderr, 'utf8')
    assert run.returncode == 0, run.stdout + run.stderr
    assert f'{expected} native {label} scenarios passed' in run.stdout
    scenarios += expected
    print(run.stdout)

record = {
    'compiler': 'Kotlin 2.2.20 from existing cache',
    'runtime': 'Temurin 17.0.20.1+1',
    'productionPluginTypeChecked': True,
    'productionSchedulerExecutedOnHost': True,
    'scenariosPassed': scenarios,
    'inputs': [{'path': str(p.relative_to(root)),
                'sha256': hashlib.sha256(p.read_bytes()).hexdigest()} for p in inputs],
    'androidApiJar': str(android),
    'flutterEmbeddingJar': str(embedding),
    'flutterEmbeddingSource': str(embedding_source),
    'androidPluginRuntimeExecuted': False,
    'deviceAccess': False,
    'networkAccess': False,
}
(out / 'native-background-verification.json').write_text(json.dumps(record, indent=2) + '\n', 'utf8')

http_source = root / 'android/app/src/main/kotlin/com/mesting/mesting_music/MusicHttpExchange.kt'
http_test = root / 'test/native/release_154_http_test.kt'
binary = out / 'native-154-http-tests.jar'
compile = subprocess.run([str(java), '-cp', compiler_cp, 'org.jetbrains.kotlin.cli.jvm.K2JVMCompiler',
    '-no-stdlib', '-no-reflect', '-jvm-target', '17', '-classpath', classpath, '-d', str(binary),
    str(http_source), str(http_test)], capture_output=True, text=True)
(out / 'native-http-compile.log').write_text(compile.stdout + compile.stderr, 'utf8')
assert compile.returncode == 0, compile.stderr[-3500:]
run = subprocess.run([str(java), '--add-modules', 'jdk.httpserver', '-cp',
    os.pathsep.join(map(str, [binary, stdlib, *http_jars])), 'com.mesting.music.Release_154_http_testKt'],
    capture_output=True, text=True, timeout=45)
(out / 'native-http-tests.log').write_text(run.stdout + run.stderr, 'utf8')
assert run.returncode == 0, run.stdout + run.stderr
assert '13 native system HTTP scenarios passed' in run.stdout
print(run.stdout)
record['systemHttpScenariosPassed'] = 13
record['networkAccess'] = 'loopbackOnly'
record['httpLibraryHostInputs'] = http_inputs
record['localHttpFixtureOnly'] = True
record['vpnAndAndroidRuntimeAccepted'] = False
record['inputs'].extend({'path':str(p.relative_to(root)), 'sha256':hashlib.sha256(p.read_bytes()).hexdigest()}
    for p in [http_source,http_test])
(out / 'native-background-verification.json').write_text(json.dumps(record,indent=2)+'\n','utf8')
