"""Compile the current pure Kotlin decoder offline and run synthetic cases.

This is a host check, not Android MediaExtractor, physical playback or account
acceptance. Dependency jars come from the already used Android build cache.
"""
from pathlib import Path
import hashlib
import json
import os
import subprocess

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
CACHE = Path('D:/CodexCache/android-build/gradle/caches/modules-2/files-2.1')
JAVA = Path('D:/CodexCache/android-build/jdk/jdk-17.0.20.1+1/bin/java.exe')
sources = [ROOT/'android/app/src/main/kotlin/com/mesting/mesting_music/QishuiOfficialAudioDecrypt.kt',
           ROOT/'test/native_qishui_media/QishuiOfficialAudioHostTest.kt']
jars = list((CACHE/'org.jetbrains.kotlin').glob('*/2.2.20/*/*.jar'))
for relative in ('org.jetbrains.kotlin/kotlin-reflect', 'org.jetbrains/annotations',
                 'org.jetbrains.intellij.deps/trove4j', 'org.jetbrains.kotlinx/kotlinx-coroutines-core-jvm'):
    jars.extend((CACHE/relative).glob('*/*/*.jar'))
assert any('compiler-embeddable' in p.name for p in jars)
stdlib = list((CACHE/'org.jetbrains.kotlin/kotlin-stdlib/2.2.20').glob('*/*.jar'))
assert len(stdlib) == 1
output = OUT/'cenc-host-final.jar'
compile_run = subprocess.run([str(JAVA), '-Xmx768m', '-cp', os.pathsep.join(map(str, jars)),
    'org.jetbrains.kotlin.cli.jvm.K2JVMCompiler', '-no-stdlib', '-no-reflect', '-jvm-target', '1.8',
    '-classpath', os.pathsep.join(map(str, stdlib + list((CACHE/'org.jetbrains/annotations').glob('*/*/*.jar')))),
    '-d', str(output), *map(str, sources)], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
(OUT/'cenc-compile.log').write_bytes(compile_run.stdout)
assert compile_run.returncode == 0, 'Inspect cenc-compile.log'
run = subprocess.run([str(JAVA), '-cp', os.pathsep.join(map(str, [output, *stdlib])),
    'QishuiOfficialAudioHostTest'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
(OUT/'cenc-host-final.log').write_bytes(run.stdout)
assert run.returncode == 0 and b'QISHUI_CENC_HOST_PASSED=10' in run.stdout
summary = {'passed': 10, 'exitCode': 0, 'syntheticHostOnly': True, 'physicalAcceptance': False,
           'inputs': [{'path': p.relative_to(ROOT).as_posix(), 'sha256': hashlib.sha256(p.read_bytes()).hexdigest()} for p in sources],
           'compiledJarSha256': hashlib.sha256(output.read_bytes()).hexdigest()}
(OUT/'cenc-host-summary.json').write_text(json.dumps(summary, indent=2)+'\n', 'utf-8')
print({'syntheticCencHostPassed': 10})
