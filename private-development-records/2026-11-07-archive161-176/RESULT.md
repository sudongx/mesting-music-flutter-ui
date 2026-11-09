# 2026-11-07：1.0.61～1.0.76 归档结果

用户已确认沿用此前规则补齐全部已冻结版本。本轮仅处理归档与远端核验，没有重建产品、连接手机或更新音乐平台后台/NAS。

- GitHub：16 个公开 Release，47 个附件，最新归档为 v1.0.76；原 APK、15 个版本各自的产品源码包及 SHA256 校验文件已发布。附件大小及 GitHub 返回的 SHA256 摘要逐项核对。
- GitHub / Gitee：各 16 个版本标签；从独立裸仓库重新拉取，逐文件核对源码大小与 SHA256，并通过 git fsck --full --strict。原有标签及无关分支保留。GitHub main 更新归档索引、beta 指向 76 产品归档；Gitee main 更新产品归档。
- 1.0.63：缺少原冻结源码，只发布原 APK 和校验文件；对应标签保存缺口说明，不以其他版本源码替代。
- 私有 Gitee：private-development-records-20261107-v176，提交 98991fea84b93c369420064192f6e11e75eaad89。新增或更新 9156 条记录，698 条经过脱敏；签名材料、凭据及设备原始数据等排除。该分支未推送 GitHub。
- 本地 Git：仅导入 16 个版本标签。beta、HEAD b6bcd5425e0df3e03febdd460b56d0ed42004c52、暂存区及签名/锁文件保持；92 个冻结文件字节不变。

归档过程中工作区出现 1.0.77 相关新改动。最终工作区与 76 交接快照并非字节一致：currentFiles 中 13 项、productFiles 中 10 项发生变化；没有回退或覆盖这些变更，也未将它们作为 61～76 产品源码发布。详细差异以 complete.json / local-git-tags.json 为准。1.0.77 尚在开发，不在本次冻结归档范围。

原有性能、业务及实机验收边界保持；发布归档不代表稳定 120 FPS 或未完成业务验收已通过。原冻结包、原校验文件及原交接收据未回填。

证据：complete.json、final-remote-refs.json、local-git-tags.json、private-backup-result.json、prepared.json。preparation-preservation.json 记录归档开始时与 76 交接快照一致；发布后由于上述工作区变更，旧严格工作区断言失败，后续保留该失败并单独记录实际差异，冻结文件仍强制核对通过。
