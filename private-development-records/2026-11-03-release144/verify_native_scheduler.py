from pathlib import Path
import subprocess,os,xml.etree.ElementTree as ET,json,hashlib
root=Path(r'D:/AnLi'); out=root/'.codex-artifacts/2026-11-03-release144'
cache=Path(r'D:/CodexCache/android-build/gradle/caches/modules-2/files-2.1')
java=Path(r'D:/CodexCache/android-build/jdk/jdk-17.0.20.1+1/bin/java.exe')
def jar(group,artifact,version):
 matches=list((cache/group/artifact/version).rglob(f'{artifact}-{version}.jar'))
 assert len(matches)==1,(group,artifact,version)
 return matches[0]
compiler=jar('org.jetbrains.kotlin','kotlin-compiler-embeddable','2.2.20')
pom=next((cache/'org.jetbrains.kotlin/kotlin-compiler-embeddable/2.2.20').rglob('*.pom'))
ns={'m':'http://maven.apache.org/POM/4.0.0'}
deps=[jar(d.find('m:groupId',ns).text,d.find('m:artifactId',ns).text,d.find('m:version',ns).text) for d in ET.parse(pom).findall('./m:dependencies/m:dependency',ns)]
annotations=jar('org.jetbrains','annotations','13.0'); cp=os.pathsep.join(map(str,[compiler,*deps,annotations]))
stdlib=jar('org.jetbrains.kotlin','kotlin-stdlib','2.2.20')
sources=[root/'android/app/src/main/kotlin/com/mesting/mesting_music/TogetherPulseScheduler.kt',root/'test/native/release_144_background_scheduler_test.kt']
binary=out/'native-scheduler-tests.jar'
compile_result=subprocess.run([str(java),'-cp',cp,'org.jetbrains.kotlin.cli.jvm.K2JVMCompiler','-no-stdlib','-no-reflect','-jvm-target','17','-classpath',os.pathsep.join(map(str,[stdlib,annotations])),'-d',str(binary),*map(str,sources)],capture_output=True,text=True)
(out/'native-scheduler-compile.log').write_text(compile_result.stdout+compile_result.stderr,'utf8')
assert compile_result.returncode==0,compile_result.stderr[-2000:]
run=subprocess.run([str(java),'-cp',os.pathsep.join(map(str,[binary,stdlib])),'com.mesting.music.Release_144_background_scheduler_testKt'],capture_output=True,text=True)
(out/'native-scheduler-tests.log').write_text(run.stdout+run.stderr,'utf8')
assert run.returncode==0,run.stderr
assert '6 native scheduler scenarios passed' in run.stdout
record={'compiler':'Kotlin 2.2.20 from existing Gradle cache','runtime':'Temurin 17.0.20.1+1','productionSchedulerCompiled':True,'scenariosPassed':6,'inputs':[{'path':str(p.relative_to(root)),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()} for p in sources],'jarSha256':hashlib.sha256(binary.read_bytes()).hexdigest(),'deviceAccess':False,'networkAccess':False}
(out/'native-scheduler-verification.json').write_text(json.dumps(record,indent=2)+'\n','utf8')
print(run.stdout)
