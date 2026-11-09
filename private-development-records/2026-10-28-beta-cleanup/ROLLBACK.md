# 旧 Beta 清理结果与回滚入口

日期：2026-10-28（Asia/Shanghai）。用户确认清理 D:/AnLi 的旧 Beta 交付、缓存、解压副本和历史备份，并保留 7 份未归档试验代码。

已删除 28 个旧目录和 11 个独立文件，共 9479 个文件，按原文件逻辑大小合计 3,521,554,843 字节（约 3.28 GiB）。
7 份试验代码副本共 33,288 字节，保存在本目录 unarchived-source/；原路径和逐文件摘要见 retained-drafts.json。
当前 1.0.5 / code 26 工程、正式版交付、原签名材料、Git 历史、全部标签及受跟踪文档均保持；工作区干净。根 build 中 beta 名称属于兼容 flavor，共享正式构建缓存不在本轮删除范围。

## 已验证的恢复方式

清理前核实 Beta.1–21 本地/远端标签一致、完整源码对象可用，38 个公开 APK/原始源码 ZIP 入口正常；本机 10 份原始交付文件大小和完整摘要与 GitHub 附件一致。Beta.14–17 的完整源码通过 Git 标签恢复，其余 17 版另有原始源码 ZIP。
清理后再次检查全部远端引用未变、21 个旧标签 commit 未变、Git 对象完整性通过，以及全部受保护文件摘要和 7 份试验副本匹配。

要查看旧源码，请在另一个新目录克隆固定标签，保留当前 1.0.5 工作目录。例如：

```powershell
git clone --branch v1.0.37-beta.21 --single-branch https://github.com/Mesting42/mesting-music-flutter.git Mesting-Music-Beta21-rollback
```

需要历史安装包时下载下表对应原始 APK。源码/安装包可恢复与 Android 覆盖降级是不同事项；系统仍限制降级及跨证书覆盖，不能由这些记录承诺保留数据降级。

| Beta | 固定源码 | 原始 APK |
| --- | --- | --- |
| 1 | [v1.0.37-beta.1](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.1) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.1/Mesting-Music-md3-Beta-1.0.37-beta.1.apk) |
| 2 | [v1.0.37-beta.2](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.2) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.2/Mesting-Music-md3-Beta-1.0.37-beta.2.apk) |
| 3 | [v1.0.37-beta.3](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.3) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.3/Mesting-Music-md3-Beta-1.0.37-beta.3.apk) |
| 4 | [v1.0.37-beta.4](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.4) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.4/Mesting-Music-md3-Beta-1.0.37-beta.4.apk) |
| 5 | [v1.0.37-beta.5](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.5) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.5/Mesting-Music-md3-Beta-1.0.37-beta.5.apk) |
| 6 | [v1.0.37-beta.6](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.6) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.6/Mesting-Music-md3-Beta-1.0.37-beta.6.apk) |
| 7 | [v1.0.37-beta.7](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.7) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.7/Mesting-Music-md3-Beta-1.0.37-beta.7.apk) |
| 8 | [v1.0.37-beta.8](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.8) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.8/Mesting-Music-md3-Beta-1.0.37-beta.8.apk) |
| 9 | [v1.0.37-beta.9](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.9) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.9/Mesting-Music-md3-Beta-1.0.37-beta.9.apk) |
| 10 | [v1.0.37-beta.10](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.10) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.10/Mesting-Music-md3-Beta-1.0.37-beta.10.apk) |
| 11 | [v1.0.37-beta.11](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.11) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.11/Mesting-Music-md3-Beta-1.0.37-beta.11.apk) |
| 12 | [v1.0.37-beta.12](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.12) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.12/Mesting-Music-md3-Beta-1.0.37-beta.12.apk) |
| 13 | [v1.0.37-beta.13](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.13) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.13/Mesting-Music-md3-Beta-1.0.37-beta.13.apk) |
| 14 | [v1.0.37-beta.14](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.14) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.14/Mesting-Music-v1.0.37-beta.14.apk) |
| 15 | [v1.0.37-beta.15](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.15) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.15/Mesting-Music-v1.0.37-beta.15.apk) |
| 16 | [v1.0.37-beta.16](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.16) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.16/Mesting-Music-v1.0.37-beta.16.apk) |
| 17 | [v1.0.37-beta.17](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.17) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.17/Mesting-Music-v1.0.37-beta.17.apk) |
| 18 | [v1.0.37-beta.18](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.18) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.18/Mesting-Music-v1.0.37-beta.18.apk) |
| 19 | [v1.0.37-beta.19](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.19) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.19/Mesting-Music-v1.0.37-beta.19.apk) |
| 20 | [v1.0.37-beta.20](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.20) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.20/Mesting-Music-v1.0.37-beta.20.apk) |
| 21 | [v1.0.37-beta.21](https://github.com/Mesting42/mesting-music-flutter/tree/v1.0.37-beta.21) | [下载](https://github.com/Mesting42/mesting-music-flutter/releases/download/v1.0.37-beta.21/Mesting-Music-v1.0.37-beta.21.apk) |

逐项删除清单：cleanup-inventory.json / deleted-targets.jsonl。清理前审计：beta-recovery-audit.json。最终核验：post-cleanup-verification.json。签名文件和凭据未公开，未访问手机或修改线上发布。
