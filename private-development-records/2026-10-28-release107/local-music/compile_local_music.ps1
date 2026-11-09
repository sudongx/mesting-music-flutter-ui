$ErrorActionPreference = 'Stop'
$localKotlinCache = 'D:/CodexCache/android-build/gradle/caches/modules-2/files-2.1'
function Find-LocalJar([string]$artifact, [string]$pattern) {
    return rg --files "$localKotlinCache/$artifact" | Where-Object { $_ -match $pattern } | Select-Object -First 1
}
$localCompiler = Find-LocalJar 'org.jetbrains.kotlin/kotlin-compiler-embeddable' '2\.2\.20.*\.jar$'
$localStdlib = Find-LocalJar 'org.jetbrains.kotlin/kotlin-stdlib' '2\.2\.20.*\.jar$'
$localCoroutines = Find-LocalJar 'org.jetbrains.kotlinx/kotlinx-coroutines-core-jvm' '1\.9\.0.*\.jar$'
$localAnnotations = Find-LocalJar 'org.jetbrains/annotations' '\.jar$'
$localTrove = Find-LocalJar 'org.jetbrains.intellij.deps/trove4j' '\.jar$'
$localReflect = Find-LocalJar 'org.jetbrains.kotlin/kotlin-reflect' '2\.2\.0.*\.jar$'
$localJavaHome = (Get-Content -LiteralPath 'D:/CodexCache/android-build/jdk-home.txt' -Raw).Trim()
$localCompileOutput = 'D:/AnLi/.codex-artifacts/2026-10-28-release107/local-music/kotlin'
New-Item -ItemType Directory -Force -Path $localCompileOutput | Out-Null
& "$localJavaHome/bin/java.exe" -Xmx512m -cp "$localCompiler;$localStdlib;$localCoroutines;$localAnnotations;$localTrove;$localReflect" org.jetbrains.kotlin.cli.jvm.K2JVMCompiler -no-stdlib -no-reflect -jvm-target 17 -classpath "D:/CodexCache/android-build/sdk/platforms/android-36/android.jar;D:/CodexCache/flutter-3.41.9/bin/cache/artifacts/engine/android-x86/flutter.jar;$localStdlib;$localAnnotations" -d $localCompileOutput android/app/src/main/kotlin/com/mesting/mesting_music/LocalMusicBridge.kt
exit $LASTEXITCODE
