"""Focused source editing helpers with original-byte preservation and guards."""
from pathlib import Path
import re

ROOT=Path('D:/AnLi')
OUT=Path(__file__).resolve().parent

def read(path): return (ROOT/path).read_text('utf8')

def write(path, content):
    target=(ROOT/path).resolve()
    assert target.is_relative_to(ROOT)
    if target.exists() and target.read_bytes()==content.encode('utf8'): return
    before=OUT/'source-before'/path
    if target.exists() and not before.exists():
        before.parent.mkdir(parents=True,exist_ok=True)
        before.write_bytes(target.read_bytes())
    target.parent.mkdir(parents=True,exist_ok=True)
    target.write_text(content,'utf8',newline='\n')

def remove(path):
    target=(ROOT/path).resolve()
    assert target.is_relative_to(ROOT) and target.is_file()
    before=OUT/'source-before'/path
    if not before.exists():
        before.parent.mkdir(parents=True,exist_ok=True)
        before.write_bytes(target.read_bytes())
    target.unlink()

def replace(s,old,new,count=1):
    assert s.count(old)==count,(old[:100],s.count(old),count)
    return s.replace(old,new)

def between(s,start,end,new=''):
    assert s.count(start)==1 and s.count(end)==1,(start,end)
    a,b=s.index(start),s.index(end)
    assert a<b
    return s[:a]+new+s[b:]

# Delimiters inside Dart strings and comments must not terminate a source
# block. This is a lexical helper, not a regex replacing arbitrary braces.
TOKEN=re.compile(r'''//[^\n]*|/\*[\s\S]*?\*/|r?"""[\s\S]*?"""|r?\'\'\'[\s\S]*?\'\'\'|r?"(?:\\.|[^"\\])*"|r?\'(?:\\.|[^\'\\])*\'|[()\[\]{}]''')

def closing(s,at):
    stack=[]
    pairs={')':'(',']':'[','}':'{'}
    for m in TOKEN.finditer(s,at):
        token=m[0]
        if token in ['(','[','{']: stack.append(token)
        elif token in pairs:
            assert stack and stack.pop()==pairs[token],(at,m.start(),token)
            if not stack:return m.end()
    raise ValueError('Unclosed source block')

def drop_collection(s,needle):
    assert s.count(needle)==1,needle
    start=s.index(needle)
    condition=s.index('(',start)
    end_condition=closing(s,condition)
    rest=end_condition
    while s[rest].isspace():rest+=1
    if s.startswith('...[',rest): end=closing(s,rest+3)
    else:end=closing(s,s.index('(',rest))
    if s[end:end+1]==',':end+=1
    return s[:start]+s[end:]

def drop_class(s,name):
    start=s.index('class '+name+' ')
    end=closing(s,s.index('{',start))
    return s[:start]+s[end:]
