$ErrorActionPreference = 'Stop'
$env:APPDATA = 'D:/CodexCache/android-build/flutter-config'
$env:JAVA_HOME = (Get-Content -LiteralPath 'D:/CodexCache/android-build/jdk-home.txt' -Raw).Trim()
$env:ANDROID_HOME = 'D:/CodexCache/android-build/sdk'
$env:ANDROID_SDK_ROOT = $env:ANDROID_HOME
$env:GRADLE_USER_HOME = 'D:/CodexCache/android-build/gradle'
$env:PATH = "$env:JAVA_HOME/bin;D:/CodexCache/flutter-3.41.9/bin;$env:PATH"
$beta21Flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
