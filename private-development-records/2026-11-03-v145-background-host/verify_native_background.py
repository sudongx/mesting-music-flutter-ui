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
classpath = os.pathsep.join(map(str, [stdlib, annotations, android, embedding]))
production = [root / 'android/app/src/main/kotlin/com/mesting/mesting_music' / name
              for name in ['TogetherPulseScheduler.kt', 'TogetherBackgroundPlugin.kt']]
scenarios = 0
inputs = list(production)
for version, expected in [('144', 6), ('145', 4)]:
    label = 'scheduler' if version == '144' else 'diagnostics'
    test = root / f'test/native/release_{version}_background_{label}_test.kt'
    inputs.append(test)
    binary = out / f'native-{version}-tests.jar'
    result = subprocess.run(
        [str(java), '-cp', compiler_cp, 'org.jetbrains.kotlin.cli.jvm.K2JVMCompiler',
         '-no-stdlib', '-no-reflect', '-jvm-target', '17', '-classpath', classpath,
         '-d', str(binary), *map(str, [*production, test])],
        capture_output=True, text=True)
    (out / f'native-{version}-compile.log').write_text(result.stdout + result.stderr, 'utf8')
    assert result.returncode == 0, result.stderr[-3500:]
    main = f'com.mesting.music.Release_{version}_background_{label}_testKt'
    run = subprocess.run([str(java), '-cp', os.pathsep.join(map(str, [binary, stdlib])), main],
                         capture_output=True, text=True)
    (out / f'native-{version}-tests.log').write_text(run.stdout + run.stderr, 'utf8')
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
