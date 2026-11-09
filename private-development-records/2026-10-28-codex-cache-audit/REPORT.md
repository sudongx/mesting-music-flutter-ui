# D:/CodexCache 占用与可清理项

2026-10-28（Asia/Shanghai）。用户要求先查看占用，并确认该目录供其他项目使用，各套 SDK 均保留。本次只读检查，未删除任何文件。

总计 18,154,065,473 字节（16.91 GiB）、330,512 个文件、70,239 个子目录。扫描没有报错或跳过链接。与所给截图的文件数/目录数/逻辑大小一致。
D 盘分配簇大小为 4096 字节；大量小文件的簇尾空隙解释了截图中占用空间高于逻辑大小的现象。此目录的统计与此前 D:/AnLi 旧 Beta 产物清理独立。

## 主要占用

| 目录 | GiB | 文件数 |
| --- | ---: | ---: |
| `android-build` | 9.75 | 107,450 |
| `npm-npx` | 1.91 | 149,741 |
| `flutter-3.41.9` | 1.15 | 16,916 |
| `ms-playwright` | 0.98 | 723 |
| `ui-skills-task-cache` | 0.83 | 20,968 |
| `JetBrains` | 0.75 | 1,654 |
| `codex-browser` | 0.64 | 7,428 |
| `codex-home` | 0.44 | 40 |
| `migration-backups` | 0.32 | 1,414 |
| `node-compile-cache` | 0.13 | 24,174 |
| `aapt2` | 0.01 | 4 |

android-build 中 Gradle 整体约 5.99 GiB，Android SDK/NDK 约 2.77 GiB；已安装 SDK/NDK/JDK、Flutter 和各套 Playwright 浏览器运行环境保留。

## 可清理候选

合计 8,150,535,029 字节（约 7.59 GiB），其中优先项约 1.02 GiB。此清单是待决定的候选，不是已删除结果。

| 项目 | GiB | 清理后的影响 |
| --- | ---: | --- |
| 重复解压副本和安装压缩包 | 0.70 | 保留实际 SDK/JDK 及 wrapper 内的 Gradle 运行文件；候选均已核对安装副本或重复包。 |
| 迁移旧缓存备份 | 0.32 | 2026-09-23 迁移前的浏览器/插件目录缓存；当前缓存使用独立现行路径。 |
| Gradle 转换缓存 | 3.70 | 下次 Android 构建重新转换依赖，首次会更慢；保留 modules-2 下载缓存与 Gradle 运行文件。 |
| npm/npx 临时工具缓存 | 1.91 | 包含 32 组临时工具安装；下次使用 npx 工具可能需要联网重新下载。退出相关工具后清理。 |
| UI 技能临时缓存 | 0.83 | npm 下载及 npx 展开缓存；下次使用相关 UI 工具会重新下载/生成。 |
| Node 编译缓存 | 0.13 | 由 Node 重建；首次工具启动可能变慢。退出相关工具后清理。 |

### 准确路径

- 重复解压副本和安装压缩包：`D:/CodexCache/android-build/command-line-staging`、`D:/CodexCache/android-build/commandlinetools-win-16111833_latest.zip`、`D:/CodexCache/android-build/gradle-8.14-all.zip`、`D:/CodexCache/android-build/jdk/OpenJDK17U-jdk_x64_windows_hotspot_17.0.20.1_1.zip`
- 迁移旧缓存备份：`D:/CodexCache/migration-backups`
- Gradle 转换缓存：`D:/CodexCache/android-build/gradle/caches/8.14/transforms`
- npm/npx 临时工具缓存：`D:/CodexCache/npm-npx`
- UI 技能临时缓存：`D:/CodexCache/ui-skills-task-cache`
- Node 编译缓存：`D:/CodexCache/node-compile-cache`

## 已验证的重复项

- command-line-staging 中 139 个文件与 sdk/cmdline-tools/latest 逐文件 SHA-256 一致。
- commandlinetools 安装 ZIP 的 139 个文件与解压副本一致。
- JDK 安装 ZIP 的 492 个文件与已安装 JDK 一致。
- android-build 根目录 Gradle ZIP 与 wrapper 中同版本 ZIP 完全一致，wrapper 对应运行文件存在。
- migration-backups 为旧浏览器代码/着色器/字典缓存及旧插件目录缓存；当前 C:/Users/zyt/.codex/cache 指向 D:/CodexCache/codex-home/cache。

## 另行考虑

- PyCharm 索引和缓存（约 0.67 GiB）：退出 PyCharm 后可重建，但后续项目需要重新索引；不纳入优先合计。
- 当前 Codex/浏览器缓存（约 1.08 GiB）：当前 Codex 会话正在使用相关组件；本次建议保留，另行退出应用后再考虑清理。

建议先清重复安装残留和旧迁移缓存备份（约 1.02 GiB）；若接受后续首次重建/下载，再清其余候选。不要整体删除 CodexCache。共享目录清理前应退出使用这些缓存的构建或工具进程。

原始统计见 inventory.json，重复项逐文件核验见 verified-candidates.json，机器可读建议见 cleanup-recommendations.json。当前尚未执行清理，SDK 哨兵文件摘要保持，音乐工程 Git 工作区干净。
