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

模拟器已完成欢迎页、导航、搜索、播放器、本地文件导入、海报与系统分享面板验收。账号登录、相册授权、持续后台播放、AirPlay/蓝牙及微信分享仍需实体 iOS 设备验证。模拟器不能替代这些外设和第三方 App 检查。

## TestFlight

发布前需确认正确的开发者 Team ID、唯一 Bundle ID 和 App Store Connect 应用记录。团队 API 密钥还需其 Issuer ID，个人 API 密钥不能代替团队的证书与描述文件权限。不得把私钥、证书密码或 API 令牌写入工程。

在 Runner 的 Signing & Capabilities 中设置已确认团队和 Bundle ID，使用未上传过的构建号签名归档，再导出 App Store Connect IPA。`--no-codesign` 仅验证设备架构，不能用于上传。发布时仍需根据真实情况填写加密出口合规、测试说明与 App 隐私信息；外部测试是否需要审核以 App Store Connect 实际状态为准。

发布完成以 App Store Connect 中构建处理成功且目标 TestFlight 测试组可用为准。

## 本次自动化结果（2026-11-11）

基于上游 `beta` 的 `8111d62`，应用版本 `1.0.91+112`。公开测试构建的源码固定在 `ios-v1.0.91-112` 标签（`02a6ded`）。

| 检查 | 实际结果 |
| --- | --- |
| 锁定依赖安装、静态分析 | 通过，分析 0 问题 |
| 平台可用性、Stable 更新、本地音乐、排版、分享、VIP 测试 | 47 项通过 |
| Beta 导航、平台、登录、音效及 1.0.91 集成回归 | 48 项通过 |
| iPhone 17 Pro / iOS 26.5 原生集成测试 | 3 项通过 |
| iOS 协议、原有协议页面及登录返回测试 | 6 项通过，与前述部分测试重叠 |
| 正常 main 入口的模拟器构建、安装和启动 | 通过 |
| 图形界面操作验收 | 首页、功能页、音乐库、我的、热搜结果、本地文件选择器导入、播放器进度、海报生成与系统分享面板通过 |
| 1.0.91 (112) 签名归档、IPA 导出及 Apple 上传前验证 | 通过，归档和最终 IPA 均确认 Rust FFI 入口导出 |
| 1.0.91 (112) 上传与内部测试 | 上传成功，Apple 处理 VALID；内部组 IN_BETA_TESTING |
| 1.0.91 (112) 公开测试 | 已加入外部组并提交 Beta App Review，WAITING_FOR_REVIEW；自动通知已启用 |

## 公开测试资料

iOS 协议按实际实现单独定义，Android 文档保持原有行为。`dart run tool/export_ios_legal.dart` 从应用使用的同一份定义生成 [iOS 隐私政策](legal/ios-privacy-policy.md) 和 [iOS 用户协议](legal/ios-user-agreement.md)，上传构建前需将对应标签推送到公开仓库。测试说明、反馈邮箱和隐私政策链接已配置；审核联系电话仅留在 Apple 审核资料，不在仓库公开。

公开组 `Mesting Public Beta` 的邀请链接为 https://testflight.apple.com/join/SWAdEbBP 。链接已创建，1.0.91 (112) 已提交 Apple Beta App Review，当前 WAITING_FOR_REVIEW。首次外部测试须等待批准；创建链接不代表测试者现在能够下载。审核通过后仍需回读公开页面确认可安装。

当前内部测试组已加入 `1.0.91 (112)`，原 `1.0.90 (111)` 仍保留。公开组仅加入 `1.0.91 (112)`，上限 10,000 名测试者。构建来源为 `02a6ded`；IPA SHA-256 为 `07609d11d809e4c3e5f1477e929d3bda6bdae98b91cdf9aa21adcc7c6b40634a`。

本次发布方确认不向法国分发，出口问卷按“Apple 系统之外的标准加密算法”及“不在法国分发”填写。公开链接本身不提供按国家阻止访问的保证，请勿面向法国推广；如改变分发范围，需重新核对加密文档要求。源码未把本次豁免值固定写入 Info.plist。
