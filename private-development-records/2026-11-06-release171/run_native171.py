"""Fresh JVM checks of the exact production CENC and private-cache boundary.

An existing-directory /./ spelling reproduces the old equality rejection.
Windows File.canonicalFile does not resolve junctions like Android symlinks;
this test therefore does not claim to execute Android /data aliases.
No account, NAS, media network request, Android extractor or DSP is exercised.
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
sources = [ROOT / name for name in [
    'android/app/src/main/kotlin/com/mesting/mesting_music/QishuiOfficialAudioDecrypt.kt',
    'android/app/src/main/kotlin/com/mesting/mesting_music/QishuiOfficialAudioPreparation.kt',
    'test/native_qishui_media/QishuiOfficialAudioHostTest.kt',
    'test/native_qishui_media/QishuiAudioPreparationHostTest.kt',
]]
round_no = 1
while (OUT / f'native-compile-r{round_no}.log').exists():
    round_no += 1
jars = list((CACHE / 'org.jetbrains.kotlin').glob('*/2.2.20/*/*.jar'))
for relative in ('org.jetbrains.kotlin/kotlin-reflect', 'org.jetbrains/annotations',
                 'org.jetbrains.intellij.deps/trove4j', 'org.jetbrains.kotlinx/kotlinx-coroutines-core-jvm'):
    jars.extend((CACHE / relative).glob('*/*/*.jar'))
stdlib = list((CACHE / 'org.jetbrains.kotlin/kotlin-stdlib/2.2.20').glob('*/*.jar'))
assert len(stdlib) == 1
jar = OUT / 'native171.jar'
run = subprocess.run([str(JAVA), '-Xmx768m', '-cp', os.pathsep.join(map(str, jars)),
    'org.jetbrains.kotlin.cli.jvm.K2JVMCompiler', '-no-stdlib', '-no-reflect', '-jvm-target', '1.8',
    '-classpath', os.pathsep.join(map(str, stdlib + list((CACHE/'org.jetbrains/annotations').glob('*/*/*.jar')))),
    '-d', str(jar), *map(str, sources)], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
(OUT / f'native-compile-r{round_no}.log').write_bytes(run.stdout)
assert run.returncode == 0, 'Inspect native compile log'
fixtures = OUT / f'native-fixtures-r{round_no}'
physical = fixtures / 'physical' / 'qishui_official_audio'
outside = fixtures / 'outside'
physical.mkdir(parents=True, exist_ok=True)
outside.mkdir(exist_ok=True)
alias = str(physical.parent) + os.sep + '.' + os.sep + physical.name
counts = {}
for suite, args, marker, expected in [
    ('cenc', [], 'QISHUI_CENC_HOST_PASSED', 10),
    ('preparation', [str(physical), alias, str(outside)], 'QISHUI_PREPARATION_HOST_PASSED', 19),
]:
    main = 'QishuiOfficialAudioHostTest' if suite == 'cenc' else 'QishuiAudioPreparationHostTest'
    result = subprocess.run([str(JAVA), '-cp', os.pathsep.join(map(str, [jar, *stdlib])), main, *args],
                            stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    (OUT / f'{suite}-host-r{round_no}.log').write_bytes(result.stdout)
    assert result.returncode == 0 and f'{marker}={expected}'.encode() in result.stdout, f'Inspect {suite}-host-r{round_no}.log'
    counts[suite] = expected
summary = {'passed': sum(counts.values()), 'suites': counts, 'freshRun': True,
    'actualProductionPreparationAndCenc': True, 'realParentAlias': 'dot-segment spelling of actual directory',
    'windowsJunctionNotEquivalentToAndroidCanonicalSymlink': True,
    'syntheticMediaOnly': True, 'androidExtractorOrDeviceExecuted': False,
    'inputs': [{'path': p.relative_to(ROOT).as_posix(), 'sha256': hashlib.sha256(p.read_bytes()).hexdigest()} for p in sources]}
(OUT / 'native171-summary.json').write_text(json.dumps(summary, indent=2) + '\n', 'utf-8')
print(json.dumps(summary, indent=2))
