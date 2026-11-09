"""Write conservative recommendations while retaining every shared SDK."""
from pathlib import Path
import hashlib
import json
import subprocess

OUT = Path(__file__).resolve().parent
ROOT = Path(r"D:\CodexCache")
data = json.loads((OUT / "inventory.json").read_text(encoding="utf-8"))
verified = json.loads((OUT / "verified-candidates.json").read_text(encoding="utf-8"))
sizes = {entry["path"]: entry["bytes"] for entry in data["folders"]}
sizes.update({entry["path"]: entry["bytes"] for entry in verified["deepDirectoryTotals"]})
archive_sizes = {entry["archive"].replace("\\", "/"): entry["compressedBytes"] for entry in verified["installerZipsMatchExtractedFiles"]}
archive_sizes["android-build/gradle-8.14-all.zip"] = verified["gradleStandaloneZipIsExactDuplicate"]["bytes"]
installer_paths = ["android-build/command-line-staging", "android-build/commandlinetools-win-16111833_latest.zip", "android-build/gradle-8.14-all.zip", "android-build/jdk/OpenJDK17U-jdk_x64_windows_hotspot_17.0.20.1_1.zip"]
groups = [
    {"label": "重复解压副本和安装压缩包", "paths": installer_paths, "bytes": sum(sizes.get(path, archive_sizes.get(path, 0)) for path in installer_paths), "effect": "保留实际 SDK/JDK 及 wrapper 内的 Gradle 运行文件；候选均已核对安装副本或重复包。", "priority": "优先"},
    {"label": "迁移旧缓存备份", "paths": ["migration-backups"], "bytes": sizes["migration-backups"], "effect": "2026-09-23 迁移前的浏览器/插件目录缓存；当前缓存使用独立现行路径。", "priority": "优先"},
    {"label": "Gradle 转换缓存", "paths": ["android-build/gradle/caches/8.14/transforms"], "bytes": sizes["android-build/gradle/caches/8.14/transforms"], "effect": "下次 Android 构建重新转换依赖，首次会更慢；保留 modules-2 下载缓存与 Gradle 运行文件。", "priority": "可重建"},
    {"label": "npm/npx 临时工具缓存", "paths": ["npm-npx"], "bytes": sizes["npm-npx"], "effect": "包含 32 组临时工具安装；下次使用 npx 工具可能需要联网重新下载。退出相关工具后清理。", "priority": "可重建"},
    {"label": "UI 技能临时缓存", "paths": ["ui-skills-task-cache"], "bytes": sizes["ui-skills-task-cache"], "effect": "npm 下载及 npx 展开缓存；下次使用相关 UI 工具会重新下载/生成。", "priority": "可重建"},
    {"label": "Node 编译缓存", "paths": ["node-compile-cache"], "bytes": sizes["node-compile-cache"], "effect": "由 Node 重建；首次工具启动可能变慢。退出相关工具后清理。", "priority": "可重建"},
]
optional = [
    {"label": "PyCharm 索引和缓存", "paths": ["JetBrains/PyCharm2024.1/index", "JetBrains/PyCharm2024.1/caches", "JetBrains/PyCharm2024.1/icon-cache"], "bytes": sum(sizes[path] for path in ["JetBrains/PyCharm2024.1/index", "JetBrains/PyCharm2024.1/caches", "JetBrains/PyCharm2024.1/icon-cache"]), "effect": "退出 PyCharm 后可重建，但后续项目需要重新索引；不纳入优先合计。"},
    {"label": "当前 Codex/浏览器缓存", "paths": ["codex-home/cache", "codex-browser"], "bytes": sizes["codex-home/cache"] + sizes["codex-browser"], "effect": "当前 Codex 会话正在使用相关组件；本次建议保留，另行退出应用后再考虑清理。"},
]
for entry in verified["sdkSentinelHashes"]:
    with Path(entry["path"]).open("rb") as stream:
        assert hashlib.file_digest(stream, "sha256").hexdigest().upper() == entry["sha256"]
assert not subprocess.check_output(["git", "status", "--porcelain"], cwd=r"D:\AnLi").strip()
total = sum(group["bytes"] for group in groups)
priority = sum(group["bytes"] for group in groups if group["priority"] == "优先")
result = {"root": str(ROOT), "auditOnly": True, "filesDeleted": 0, "allSharedSdksRetained": True,
          "totalBytes": data["bytes"], "candidateBytes": total, "priorityCandidateBytes": priority,
          "groups": groups, "optionalOnly": optional,
          "preserveInstalledRoots": ["flutter-3.41.9", "android-build/sdk", "android-build/jdk/jdk-17.0.20.1+1", "android-build/gradle/wrapper", "ms-playwright"],
          "currentProjectGitClean": True}
(OUT / "cleanup-recommendations.json").write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
lines = [
    "# D:/CodexCache 占用与可清理项", "", "2026-10-28（Asia/Shanghai）。用户要求先查看占用，并确认该目录供其他项目使用，各套 SDK 均保留。本次只读检查，未删除任何文件。", "",
    f"总计 {data['bytes']:,} 字节（{data['bytes']/1024**3:.2f} GiB）、{data['files']:,} 个文件、{data['directories']:,} 个子目录。扫描没有报错或跳过链接。与所给截图的文件数/目录数/逻辑大小一致。",
    "D 盘分配簇大小为 4096 字节；大量小文件的簇尾空隙解释了截图中占用空间高于逻辑大小的现象。此目录的统计与此前 D:/AnLi 旧 Beta 产物清理独立。", "",
    "## 主要占用", "", "| 目录 | GiB | 文件数 |", "| --- | ---: | ---: |",
]
for row in sorted((entry for entry in data["folders"] if entry["path"] != "." and "/" not in entry["path"]), key=lambda entry: entry["bytes"], reverse=True):
    lines.append(f"| `{row['path']}` | {row['bytes']/1024**3:.2f} | {row['files']:,} |")
lines += ["", "android-build 中 Gradle 整体约 5.99 GiB，Android SDK/NDK 约 2.77 GiB；已安装 SDK/NDK/JDK、Flutter 和各套 Playwright 浏览器运行环境保留。", "",
          "## 可清理候选", "", f"合计 {total:,} 字节（约 {total/1024**3:.2f} GiB），其中优先项约 {priority/1024**3:.2f} GiB。此清单是待决定的候选，不是已删除结果。", "",
          "| 项目 | GiB | 清理后的影响 |", "| --- | ---: | --- |"]
for group in groups:
    lines.append(f"| {group['label']} | {group['bytes']/1024**3:.2f} | {group['effect']} |")
lines += ["", "### 准确路径", ""]
for group in groups:
    lines.append(f"- {group['label']}：" + "、".join(f"`{ROOT.as_posix()}/{path}`" for path in group["paths"]))
lines += ["", "## 已验证的重复项", "",
          "- command-line-staging 中 139 个文件与 sdk/cmdline-tools/latest 逐文件 SHA-256 一致。",
          "- commandlinetools 安装 ZIP 的 139 个文件与解压副本一致。",
          "- JDK 安装 ZIP 的 492 个文件与已安装 JDK 一致。",
          "- android-build 根目录 Gradle ZIP 与 wrapper 中同版本 ZIP 完全一致，wrapper 对应运行文件存在。",
          "- migration-backups 为旧浏览器代码/着色器/字典缓存及旧插件目录缓存；当前 C:/Users/zyt/.codex/cache 指向 D:/CodexCache/codex-home/cache。", "",
          "## 另行考虑", ""]
for item in optional:
    lines.append(f"- {item['label']}（约 {item['bytes']/1024**3:.2f} GiB）：{item['effect']}")
lines += ["", "建议先清重复安装残留和旧迁移缓存备份（约 1.02 GiB）；若接受后续首次重建/下载，再清其余候选。不要整体删除 CodexCache。共享目录清理前应退出使用这些缓存的构建或工具进程。", "",
          "原始统计见 inventory.json，重复项逐文件核验见 verified-candidates.json，机器可读建议见 cleanup-recommendations.json。当前尚未执行清理，SDK 哨兵文件摘要保持，音乐工程 Git 工作区干净。", ""]
(OUT / "REPORT.md").write_text("\n".join(lines), encoding="utf-8")
print(json.dumps({"auditOnly": True, "totalGiB": round(data["bytes"]/1024**3, 2), "candidateGiB": round(total/1024**3, 2), "priorityGiB": round(priority/1024**3, 2), "groups": [{"label": item["label"], "GiB": round(item["bytes"]/1024**3, 2)} for item in groups], "filesDeleted": 0, "report": str(OUT / "REPORT.md")}, ensure_ascii=True))
