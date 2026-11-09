$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$env:JAVA_HOME = 'D:/CodexCache/android-build/jdk/jdk-17.0.20.1+1'
$env:ANDROID_HOME = 'D:/CodexCache/android-build/sdk'
$env:ANDROID_SDK_ROOT = $env:ANDROID_HOME
$env:GRADLE_USER_HOME = 'D:/CodexCache/android-build/gradle'
$env:APPDATA = 'D:/CodexCache/android-build/flutter-config'
$env:GRADLE_OPTS = '-Dorg.gradle.jvmargs="-Xmx2G -XX:MaxMetaspaceSize=768m -XX:ReservedCodeCacheSize=256m" -Dorg.gradle.workers.max=1'
$env:PATH = "$env:JAVA_HOME/bin;$env:PATH"
python -B .codex-artifacts/2026-11-07-release173/record_build_inputs.py
if ($LASTEXITCODE -ne 0) { throw 'Could not pin build inputs' }
& ./tool/build_android_release_apk.ps1 -VersionName '1.0.73' -VersionCode 94 -FlutterSdkRoot 'D:/CodexCache/flutter-3.41.9'
if ($LASTEXITCODE -ne 0) { throw 'Build failed' }
