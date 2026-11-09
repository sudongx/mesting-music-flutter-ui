# 本机旧 Beta 清理清单（待用户确认执行）

2026-10-28（Asia/Shanghai）。范围仅限 D:/AnLi。当前正式版源码为 beta / v1.0.5 / code 26，工作区干净。

## 已核验的恢复入口

- Beta.1–21：本地与远端注解标签及实际 commit 全部一致；21 份完整源码树可读，2242 个历史源码 blob 均存在。
- 21 个历史安装包、17 个原始源码 ZIP 的公开下载入口均已实际读取并验证 ZIP/APK 文件头。
- Beta.14–17 未另附原始源码 ZIP，完整源码通过其 Git 标签恢复；其他 17 版同时提供原始源码 ZIP。
- 本机 10 份原始交付安装包/源码 ZIP 的完整 SHA-256 和大小均与 GitHub 附件匹配（包含一份 Beta.20 已安装基包副本）。
- 回滚范围是恢复源码与历史安装包。Android 仍限制降级及跨证书覆盖；不承诺可直接覆盖安装旧版并保留数据。

[全部 Beta Release](https://github.com/Mesting42/mesting-music-flutter/releases)；逐版入口见同目录 beta-recovery-audit.json。

## 拟清理

- 28 个旧目录、11 个独立文件，共 9479 个文件，3,521,554,843 字节（约 3.28 GiB）。
- 包含旧 Beta 原 APK、源码 ZIP、解压副本、缓存、历史开发备份、研究/测试日志与主机截图。
- 直接删除以释放磁盘空间；不删除 Git 跟踪文件，不修改 Git/GitHub 标签或 Release。

| 相对路径 | 文件数 | MiB |
| --- | ---: | ---: |
| `.codex-artifacts/2026-10-26-beta14-apk` | 14 | 3.26 |
| `.codex-artifacts/2026-10-26-beta15` | 77 | 5.49 |
| `.codex-artifacts/2026-10-26-beta15-investigation` | 5 | 0.26 |
| `.codex-artifacts/2026-10-26-beta16` | 58 | 5.47 |
| `.codex-artifacts/2026-10-26-beta17` | 58 | 1.84 |
| `.codex-artifacts/2026-10-26-beta17-git` | 9 | 0.04 |
| `.codex-artifacts/2026-10-26-beta17-investigation` | 11 | 0.48 |
| `.codex-artifacts/2026-10-26-git-archive` | 27 | 0.99 |
| `.codex-artifacts/2026-10-26-ui-fixes` | 21 | 2.95 |
| `.codex-artifacts/2026-10-27-beta21` | 37 | 73.74 |
| `.codex-artifacts/2026-10-27-beta22-plan` | 3 | 0.04 |
| `.codex-artifacts/2026-10-27-listening-investigation` | 34 | 4.40 |
| `.codex-artifacts/2026-10-27-ui-review` | 25 | 1.71 |
| `.codex-artifacts/2026-10-27-release-backfill/snapshots/v1.0.37-beta.20` | 1053 | 60.87 |
| `.codex-artifacts/2026-10-27-release-backfill/snapshots/v1.0.37-beta.21` | 1070 | 62.22 |
| `.codex-artifacts/2026-10-27-release-backfill/generated/v1.0.37-beta.20` | 1 | 0.00 |
| `.codex-artifacts/2026-10-27-release-backfill/generated/v1.0.37-beta.21` | 1 | 0.00 |
| `.codex-artifacts/2026-10-27-release-backfill/assets/v1.0.37-beta.20` | 1 | 0.00 |
| `.codex-artifacts/2026-10-27-release-backfill/assets/v1.0.37-beta.21` | 1 | 0.00 |
| `.codex-backups/2026-10-26-beta14-packaging` | 4 | 0.02 |
| `.codex-backups/2026-10-26-beta15` | 628 | 21.45 |
| `.codex-backups/2026-10-26-beta16` | 641 | 21.77 |
| `.codex-backups/2026-10-26-beta17` | 973 | 55.54 |
| `.codex-backups/2026-10-26-navigation-progress-menus` | 467 | 4.64 |
| `.codex-backups/2026-10-27-beta21-before` | 18 | 2.93 |
| `.codex-backups/2026-10-27-sync-beta19-1ikgtei0` | 5 | 0.06 |
| `.codex-temp/listencheck-e7_504_y` | 4195 | 2407.67 |
| `.impeccable/review/beta21` | 31 | 2.16 |
| `.codex-artifacts/2026-10-27-release-backfill/index-v1.0.37-beta.20` | 1 | 0.13 |
| `.codex-artifacts/2026-10-27-release-backfill/index-v1.0.37-beta.21` | 1 | 0.13 |
| `release/Mesting-Music-v1.0.37-beta.14.apk` | 1 | 86.03 |
| `release/Mesting-Music-v1.0.37-beta.15.apk` | 1 | 86.28 |
| `release/Mesting-Music-v1.0.37-beta.16.apk` | 1 | 86.41 |
| `release/Mesting-Music-v1.0.37-beta.17.apk` | 1 | 86.87 |
| `release/Mesting-Music-v1.0.37-beta.20.apk` | 1 | 71.28 |
| `release/Mesting-Music-v1.0.37-beta.21.apk` | 1 | 72.51 |
| `Mesting-Music-beta.20-source.zip` | 1 | 43.76 |
| `Mesting-Music-beta.21-source.zip` | 1 | 45.00 |
| `Mesting-Music-md3-Beta-1.0.37-beta.13-source.zip` | 1 | 40.02 |

## 保留

当前 1.0.5 工程与 SDK/依赖、所有正式版 1.0.x 本地交付和相关目录、签名 keystore/签名 ZIP/使用说明、.git 历史及全部标签、受 Git 跟踪的版本索引/核验清单/回滚文档。
根 build 中 app-beta-release.apk 的 beta 是正式版的兼容 flavor，不据文件名删除；当前共享构建缓存不在本次清单。
本次清理审计目录保留，记录删除前摘要、恢复入口和执行结果。

## 需要确定的例外：7 份未归档中间稿

已比较候选备份中的源文件，4614 份与历史 Git 内容匹配。另有 3 份自动生成的插件注册器可重建；下列 7 份是未发布的中间稿/隔离测试探针，未在历史 Beta Git 中找到相同字节，不能把它们声称为已归档。
总计 33,288 字节（约 32.5 KiB）。建议先复制到本审计目录 unarchived-source/ 下并核验摘要，再清理原目录；不上传这些探针文件。若用户明确只需恢复已发布版本，也可连同删除。

| 未归档文件 | 字节数 |
| --- | ---: |
| `.codex-backups/2026-10-27-beta21-before/pre-shoulder-welcome/beta_companion_stage.dart` | 6751 |
| `.codex-temp/listencheck-e7_504_y/android/app/build.gradle.kts` | 2134 |
| `.codex-temp/listencheck-e7_504_y/android/app/src/beta/res/values/strings.xml` | 119 |
| `.codex-temp/listencheck-e7_504_y/android/app/src/main/AndroidManifest.xml` | 1424 |
| `.codex-temp/listencheck-e7_504_y/android/app/src/main/kotlin/com/mesting/mesting_music/MainActivity.kt` | 932 |
| `.codex-temp/listencheck-e7_504_y/lib/listening_probe/actual_playback_clock.dart` | 514 |
| `.codex-temp/listencheck-e7_504_y/lib/main_listening_probe.dart` | 21414 |

确认后执行前将再次核对绝对路径、文件清单/大小/修改时间、原始交付摘要、受保护文件摘要、Git HEAD 与工作区。当前尚未删除任何内容。
