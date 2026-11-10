# iOS 开发与验收

当前工程沿用 Beta 界面，最低 iOS 15。Flutter 3.41.9 / Dart 3.11.5，使用 Xcode、CocoaPods 和 Rust stable 构建。支持 arm64 iPhone/iPad 和 Apple Silicon 模拟器；当前不包含 Intel 模拟器产物。

## 本地运行

```sh
flutter precache --ios
rustup target add aarch64-apple-ios aarch64-apple-ios-sim
flutter pub get --enforce-lockfile
flutter run --flavor beta -d <模拟器或设备 ID>
```

首次构建会通过 `tool/build_ios_music_server.sh` 编译第三方酷狗 Rust 服务为静态库，Xcode 自动链接并保留 FFI 入口。服务仅监听回环地址，运行资料存放在应用私有 Application Support 目录。无需 Android 定制引擎、JDK 或 Node 服务。Rust 产物、Pods 和开发者签名配置均不提交。

Xcode 打开 `ios/Runner.xcworkspace`，选择 `beta` Scheme。普通构建从 PATH 查找 Cargo；本机独立工具链存在时，脚本自动使用 `~/.local/share/mesting-toolchain/{cargo,rustup}`。若系统旧 Ruby 的 CocoaPods 报 Logger 错误，可使用 `RUBYOPT=-rlogger pod install`。

## 平台行为

- 音频播放、锁屏控制和后台音频继续使用 audio_service / just_audio。音量和输出设备选择使用 iOS 系统接口。
- 本地音乐从系统“文件”选择器导入，复制到应用 Documents/Music。沙盒外文件不能按 Android 的全盘扫描方式访问。索引位于私有 Application Support，下载目录可通过选择器授权并持久化书签。
- 歌曲链接和诊断文件使用系统分享面板。微信分享需要实体设备安装微信并提供其分享扩展；不使用未配置的微信 App ID，也不保证模拟器中有微信入口。
- 海报保存使用相册“仅添加”授权。位置共享仅在用户主动请求时获取前台一次位置，不启用后台定位。
- 敏感页面在录屏和进入后台时覆盖隐私遮罩。iOS 不提供 Android FLAG_SECURE 的截图阻止保证。
- iOS 禁用 Android APK 更新和发行说明弹窗，版本由 TestFlight / App Store 管理。
- 汽水扫码登录依赖现有 Android 安全组件，iOS 暂不可用。本地均衡器、原版预设音效和桌面悬浮歌词暂不提供；界面会显示平台可用性说明。网易云和酷狗保留原有跨平台业务逻辑，账号登录仍需实际账号验收。

## 验证

```sh
flutter analyze --no-pub
# Stable 专属更新弹窗断言不应加 --flavor beta
flutter test test/app_update_test.dart --no-pub
flutter test integration_test/ios_platform_test.dart --no-pub --flavor beta -d <模拟器 ID>
flutter build ios --simulator --debug --flavor beta --no-pub
flutter build ipa --release --flavor beta --no-pub --no-codesign
tool/verify_ios_archive.sh
```

Release 使用 `STRIP_STYLE=non-global` 并显式保留 `_start_server` 链接入口，防止仅 Debug 可用而归档后的 FFI 符号丢失。归档后须检查最终可执行文件的导出表，不能只检查静态库。[Flutter FFI 符号保留说明](https://docs.flutter.dev/platform-integration/legacy-ffi-plugin#stripping-symbols)。

集成测试实际验证 iOS 原生版本读取、Rust 服务启动和搜索、Keychain 读写、本地索引、音频输出、下载保存、应用播放器播放与暂停。测试入口会覆盖模拟器中的可执行文件，验收后应重新安装正常 `lib/main.dart` 构建。

仍须完成欢迎页、导航、搜索和播放器的交互验收，以及账号、相册、文件选择器、后台播放、AirPlay/蓝牙、微信分享的实体 iOS 设备验证。模拟器不能替代这些外设和第三方 App 检查。

## TestFlight

发布前需确认正确的开发者 Team ID、唯一 Bundle ID 和 App Store Connect 应用记录。团队 API 密钥还需其 Issuer ID，个人 API 密钥不能代替团队的证书与描述文件权限。不得把私钥、证书密码或 API 令牌写入工程。

在 Runner 的 Signing & Capabilities 中设置已确认团队和 Bundle ID，使用未上传过的构建号签名归档，再导出 App Store Connect IPA。`--no-codesign` 仅验证设备架构，不能用于上传。发布时仍需根据真实情况填写加密出口合规、测试说明与 App 隐私信息；外部测试是否需要审核以 App Store Connect 实际状态为准。

发布完成以 App Store Connect 中构建处理成功且目标 TestFlight 测试组可用为准。

## 本次自动化结果（2026-11-11）

基于上游 `beta` 的 `649542a`，应用版本 `1.0.90+111`。

| 检查 | 实际结果 |
| --- | --- |
| 锁定依赖安装、静态分析 | 通过，分析 0 问题 |
| 平台可用性、Stable 更新、本地音乐、排版、分享、VIP 测试 | 47 项通过 |
| Beta 导航、平台回归、1.0.90 集成回归 | 27 项通过 |
| iPhone 17 Pro / iOS 26.5 原生集成测试 | 3 项通过 |
| 正常 main 入口的模拟器构建、安装和启动 | 通过 |
| iOS arm64 Release 无签名归档 | 通过，图标与应用设置验证通过 |
| 图形界面操作验收 | 等待 Mac 解锁及欢迎页协议确认 |
| TestFlight 签名、上传和处理 | 未执行，等待正确的团队和应用发布配置 |

无签名归档仅证明设备架构可构建，尚不能安装到实体 iPhone，也不代表已通过 App Store Connect 上传验证。
