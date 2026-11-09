"""Append a verified independent-helper status correction after APK/source freeze.

Never edit the release179 receipt, APK, ZIP or its frozen version documents.
Only a new public status note and an AGENTS byte prefix may be added.
"""
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path
import hashlib
import json
import subprocess
import sys

ROOT = Path('D:/AnLi')
RELEASE = Path(__file__).resolve().parent
OUT = RELEASE / 'helper-push-status'
DOC = 'docs/qishui-helper-status-v1.0.79-after-freeze.md'
HELPER = Path('C:/Users/zyt/Documents/Codex/2026-11-06/mesting-qishui-signer/work/app')
COMMIT = '5d013276e51d0c07c6c9fa1a96b3b74bf8321baa'
mode = sys.argv[1] if len(sys.argv) > 1 else 'check'


def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


def git(*args, cwd=ROOT):
    return subprocess.check_output(['git', '--no-optional-locks', *args], cwd=cwd).decode('utf8')


def unchanged(row):
    path = ROOT / row['path']
    return path.is_file() and sha(path) == row['sha256']


parent = json.loads((RELEASE / 'after.json').read_text('utf8'))
if mode == 'record':
    assert not OUT.exists() and not (ROOT / DOC).exists()
    assert git('rev-parse', 'HEAD', cwd=HELPER).strip() == COMMIT
    remote = git('ls-remote', 'origin', 'refs/heads/codex/qishui-signer', cwd=HELPER).strip()
    assert remote.split()[0] == COMMIT
    # Commit/push only changed helper delivery docs after its local receipt;
    # verify the tested runtime/test inputs are still those that passed85.
    helper_receipt = json.loads((HELPER.parent.parent / 'outputs/qishui-signer-0.2.3-app-verified-validation.json').read_text('utf8'))
    # Receipt paths are relative to work/app, the helper repository root.
    for row in helper_receipt['test_inputs']:
        assert sha(HELPER / row['path']) == row['sha256'], row['path']
    with ThreadPoolExecutor(max_workers=5) as pool:
        assert all(pool.map(unchanged, parent['currentFiles']))
    OUT.mkdir()
    agents = (ROOT / 'AGENTS.md').read_bytes()
    (OUT / 'AGENTS-before.bin').write_bytes(agents)
    text = '''# 1.0.79冻结后核对到的助手状态更正

本补充优先于79冻结文档中“助手0.2.3尚未推送”的旧状态。原助手会话在用户明确要求“推送到gitee”后，已提交并推送0.2.3源码、测试及更新说明；主会话随后只读核对本地HEAD和Gitee远端分支，均为5d013276e51d0c07c6c9fa1a96b3b74bf8321baa（5d01327）。其85项测试的代码/夹具输入仍与测试收据一致，没有重跑累加。

Gitee分支：codex/qishui-signer。
更新说明：https://gitee.com/cai-chunshuang/app/blob/codex/qishui-signer/HANDOFF-QISHUI-SIGNER-NAS-0.2.3-2026-11-08.md。

NAS尚未更新到0.2.3。使用Mesting1.0.79的官方累计读取前，仍需按原助手会话说明拉取代码、只重建签名助手容器并确认0.2.3，保留原配置/令牌/卷。本会话没有访问或部署NAS，没有手机/账号/官方业务请求。真实累计返回、实际入账、非空汽水社交写入及真实封面HTTP400消失仍未验。

79冻结文档沿用了助手本地候选时点，本次追加更正当前外部源码状态；不将“推送Gitee”冒充NAS更新。主项目自身仍未提交或推送。79 APK/完整源码ZIP、原release179收据及冻结文档均不回填，此补充不在已冻结ZIP内。

本次只新增本文及AGENTS字节前缀；产品/测试/版本未变，不重新构建。接收改用 python -B .codex-artifacts/2026-11-08-release179/record_helper_push179.py check，核验helper-push-status/after.json；旧verify179.py的当前AGENTS哈希是在追加入口之前的冻结时点，不修改旧收据以消除该差异。
'''
    (ROOT / DOC).write_text(text, 'utf8')
    prefix = ('**2026-11-08 1.0.79助手状态更正优先：先读[助手当前状态](docs/qishui-helper-status-v1.0.79-after-freeze.md)。原助手会话按用户指令已将0.2.3推送Gitee，主会话只读核对本地/远端均5d01327；85项代码/夹具输入保持。NAS仍需更新重建到0.2.3，未代部署。79冻结文档中的“助手尚未推送”是旧时点，以本补充为准；主项目仍未提交推送。APK/源码ZIP及release179原收据/文档不回填，产品/测试/版本/签名/1629输入未变，无重测重建。按helper-push-status/after.json和record_helper_push179.py check只读接收，原verify179当前AGENTS哈希会因新增入口变化。98冻结物及全部旧边界保持，无手机/NAS/真实业务，真实累计/入账/封面400消失仍未验。下方均历史时点。**\r\n\r\n')
    (ROOT / 'AGENTS.md').write_bytes(prefix.encode('utf8') + agents)
    current = [row if row['path'] != 'AGENTS.md' else {
        'path': 'AGENTS.md', 'bytes': (ROOT / 'AGENTS.md').stat().st_size,
        'sha256': sha(ROOT / 'AGENTS.md')} for row in parent['currentFiles']]
    current.append({'path': DOC, 'bytes': (ROOT / DOC).stat().st_size, 'sha256': sha(ROOT / DOC)})
    receipt = {**parent, 'createdAtUtc': datetime.now(timezone.utc).isoformat(),
        'currentFiles': current, 'parentReleaseReceipt': str((RELEASE / 'after.json').relative_to(ROOT)),
        'parentReleaseReceiptSha256': sha(RELEASE / 'after.json'),
        'helperPushed': True, 'helperCommit': COMMIT, 'helperRemoteHeadVerified': True,
        'helperNasDeployed': False, 'helperCodeAndTestsStillMatch85Receipt': True,
        'statusNoteAddedAfterSourceFreeze': DOC, 'newDocumentNotInFrozenSourceZip': True,
        'allowedExistingFileChangeForThisStatusOnly': ['AGENTS.md'],
        'productOrTestsChangedAfter79Freeze': False, 'rerunOrRebuild': False,
        'pendingRuntimeTasks': False}
    (OUT / 'after.json').write_text(json.dumps(receipt, ensure_ascii=False, indent=2) + '\n', 'utf8')
elif mode != 'check':
    raise ValueError('Unknown mode')

receipt = json.loads((OUT / 'after.json').read_text('utf8'))
assert sha(RELEASE / 'after.json') == receipt['parentReleaseReceiptSha256']
assert (ROOT / 'AGENTS.md').read_bytes().endswith((OUT / 'AGENTS-before.bin').read_bytes())
assert git('branch', '--show-current').strip() == receipt['branch']
assert git('rev-parse', 'HEAD').strip() == receipt['head']
assert not git('diff', '--cached', '--name-only')
for key, path in [('indexSha256', '.git/index'), ('lockSha256', 'pubspec.lock'),
                  ('signingSha256', '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')]:
    assert sha(ROOT / path) == receipt[key], key
for key in ['currentFiles', 'productFiles', 'frozenArtifacts']:
    with ThreadPoolExecutor(max_workers=5) as pool:
        assert all(pool.map(unchanged, receipt[key])), key
selected = {path for path in git('ls-files', '--cached', '--others', '--exclude-standard', '-z').split('\0')
            if path and not path.startswith('android/build/') and (ROOT / path).is_file()}
assert selected == {row['path'] for row in receipt['currentFiles']}
assert not any((ROOT / path).exists() for path in receipt['authorizedRetiredPaths'])
print(json.dumps({'verified': True, 'version': '1.0.79', 'code': 100,
    'frozenArtifacts': len(receipt['frozenArtifacts']), 'currentFiles': len(receipt['currentFiles']),
    'productInputs': len(receipt['productFiles']), 'productAndFrozen79ArtifactsUnchanged': True,
    'helperPushedAndRemoteVerified': True, 'helperCommit': COMMIT,
    'nasDeployed': False, 'deviceAccess': False, 'pendingRuntimeTasks': False}, indent=2))
