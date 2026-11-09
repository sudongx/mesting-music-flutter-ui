"""Create the reviewable plan, distinguishing released versions from drafts."""
from pathlib import Path
import json

OUT = Path(__file__).resolve().parent
inventory = json.loads((OUT / "cleanup-inventory.json").read_text(encoding="utf-8"))
recovery = json.loads((OUT / "beta-recovery-audit.json").read_text(encoding="utf-8"))
drafts = [entry for entry in inventory["unmatchedCandidateSourceFiles"] if not entry["path"].endswith("GeneratedPluginRegistrant.java")]
assert len(drafts) == 7 and sum(entry["bytes"] for entry in drafts) == 33288
lines = [
    "# 本机旧 Beta 清理清单（待用户确认执行）", "",
    "2026-10-28（Asia/Shanghai）。范围仅限 D:/AnLi。当前正式版源码为 beta / v1.0.5 / code 26，工作区干净。", "",
    "## 已核验的恢复入口", "",
    "- Beta.1–21：本地与远端注解标签及实际 commit 全部一致；21 份完整源码树可读，2242 个历史源码 blob 均存在。",
    "- 21 个历史安装包、17 个原始源码 ZIP 的公开下载入口均已实际读取并验证 ZIP/APK 文件头。",
    "- Beta.14–17 未另附原始源码 ZIP，完整源码通过其 Git 标签恢复；其他 17 版同时提供原始源码 ZIP。",
    "- 本机 10 份原始交付安装包/源码 ZIP 的完整 SHA-256 和大小均与 GitHub 附件匹配（包含一份 Beta.20 已安装基包副本）。",
    "- 回滚范围是恢复源码与历史安装包。Android 仍限制降级及跨证书覆盖；不承诺可直接覆盖安装旧版并保留数据。", "",
    "[全部 Beta Release](https://github.com/Mesting42/mesting-music-flutter/releases)；逐版入口见同目录 beta-recovery-audit.json。", "",
    "## 拟清理", "",
    f"- {inventory['targetDirectories']} 个旧目录、{inventory['targetLooseFiles']} 个独立文件，共 {inventory['files']} 个文件，{inventory['bytes']:,} 字节（约 {inventory['bytes']/1024**3:.2f} GiB）。",
    "- 包含旧 Beta 原 APK、源码 ZIP、解压副本、缓存、历史开发备份、研究/测试日志与主机截图。",
    "- 直接删除以释放磁盘空间；不删除 Git 跟踪文件，不修改 Git/GitHub 标签或 Release。", "",
    "| 相对路径 | 文件数 | MiB |", "| --- | ---: | ---: |",
]
lines.extend(f"| `{target['relativePath']}` | {target['files']} | {target['bytes']/1024**2:.2f} |" for target in inventory["targets"])
lines += [
    "", "## 保留", "",
    "当前 1.0.5 工程与 SDK/依赖、所有正式版 1.0.x 本地交付和相关目录、签名 keystore/签名 ZIP/使用说明、.git 历史及全部标签、受 Git 跟踪的版本索引/核验清单/回滚文档。",
    "根 build 中 app-beta-release.apk 的 beta 是正式版的兼容 flavor，不据文件名删除；当前共享构建缓存不在本次清单。",
    "本次清理审计目录保留，记录删除前摘要、恢复入口和执行结果。", "",
    "## 需要确定的例外：7 份未归档中间稿", "",
    "已比较候选备份中的源文件，4614 份与历史 Git 内容匹配。另有 3 份自动生成的插件注册器可重建；下列 7 份是未发布的中间稿/隔离测试探针，未在历史 Beta Git 中找到相同字节，不能把它们声称为已归档。",
    "总计 33,288 字节（约 32.5 KiB）。建议先复制到本审计目录 unarchived-source/ 下并核验摘要，再清理原目录；不上传这些探针文件。若用户明确只需恢复已发布版本，也可连同删除。", "",
    "| 未归档文件 | 字节数 |", "| --- | ---: |",
]
lines.extend(f"| `{entry['path']}` | {entry['bytes']} |" for entry in drafts)
lines += ["", "确认后执行前将再次核对绝对路径、文件清单/大小/修改时间、原始交付摘要、受保护文件摘要、Git HEAD 与工作区。当前尚未删除任何内容。", ""]
(OUT / "cleanup-plan.md").write_text("\n".join(lines), encoding="utf-8")
(OUT / "unarchived-source-list.json").write_text(json.dumps(drafts, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(json.dumps({"plan": str(OUT / "cleanup-plan.md"), "draftFiles": len(drafts), "draftBytes": sum(item["bytes"] for item in drafts), "cleanupGiB": round(inventory["bytes"]/1024**3, 2)}))
