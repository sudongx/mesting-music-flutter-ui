# CodexCache 优先项清理结果

2026-10-28（Asia/Shanghai）。用户确认按建议清理，执行此前优先推荐的两类：重复安装包/解压副本，以及旧迁移缓存备份。

已删除 1,556 个文件，按文件逻辑大小合计 1,093,667,055 字节（约 1.02 GiB）。

已删除路径：

- `D:\CodexCache\android-build\command-line-staging`
- `D:\CodexCache\android-build\commandlinetools-win-16111833_latest.zip`
- `D:\CodexCache\android-build\gradle-8.14-all.zip`
- `D:\CodexCache\android-build\jdk\OpenJDK17U-jdk_x64_windows_hotspot_17.0.20.1_1.zip`
- `D:\CodexCache\migration-backups`

所有已安装 SDK、JDK、Flutter 和 Playwright 浏览器运行环境保留；Gradle wrapper、构建转换缓存、依赖下载缓存、npm/npx、UI 工具和 Node 编译缓存保留。
清理后验证五个目标均不存在，SDK 哨兵文件摘要不变，其余候选缓存仍在，音乐项目 Git 工作区干净。

逐文件摘要见 priority-deletion-manifest.json；执行记录见 priority-deleted-targets.jsonl；最终核验见 priority-post-verification.json。
