from pathlib import Path
p=Path('D:/AnLi/.codex-artifacts/2026-11-01-release132/sign_and_verify.py')
s=p.read_text(encoding='utf-8-sig')
s=s.replace('1.0.31','PRIOR_VERSION').replace('1.0.32','1.0.33').replace('PRIOR_VERSION','1.0.32')
s=s.replace('release132','release133').replace('MESTING132','MESTING133').replace('LocalV131','LocalV132')
s=s.replace("'53'","'54'").replace('== 53','== 54').replace(': 53',': 54')

exec(compile(s,str(p),'exec'))
