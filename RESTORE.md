# 私有开发、调查和验证资料归档

范围为本机 `.codex-artifacts` 全部普通文件、当前 `docs`、`.impeccable` 和根目录 Markdown。原文件不修改，不执行清理。

`manifest.json` 逐文件列出原路径、大小、原始SHA256、存储SHA256及处理方式：

- `original`：分块原样保存，可按SHA256恢复。
- `redacted`：凭据/隐私文本脱敏副本，不能宣称原字节完全备份。
- `existingReleaseAsset`：与既有GitHub私有附件完全相同，清单引用原附件，无需重复上传。恢复时也须下载这些附件。
- `excludedLocalSecret`：签名、密钥、机器凭据或需另行检查的数据，仍保留本机，不上传。
- `linkNotFollowed`：记录本地链接，不遍历其目标，不上传链接目标之外的数据。

`private-evidence-part-NNN.zip` 保存按内容哈希去重的块。各包大小及哈希在清单中；`restore.py` 只恢复至新目录、拒绝路径越界和覆盖，并核对每块及每文件SHA256。它不读取或上传登录凭据。

既有附件按 `existing/assetId/assetName` 放置在下载目录内；assetId在清单reference字段中，可避免不同历史Release中同名SHA256SUMS.txt互相覆盖。恢复器也兼容下载目录根级文件，但仍强制核对内容哈希。

本机本次归档暂存目录 `.codex-backups/2026-11-09-full-private-archive` 不递归包含进自身；归档脚本、恢复器、清单及完成回执单独保存。

GitHub附件私有，Gitee同步清单/恢复说明及可检索文本记录。不能把单独一份Gitee清单称为全部二进制数据副本。完成报告区分新增上传、既有远端引用、脱敏、排除及未通过项。
