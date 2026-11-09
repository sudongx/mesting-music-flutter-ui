"""Decode constant short-array XOR expressions as data; never import target code.

The output is an analyst-derived reading aid, not reconstructed original source.
Mutable obfuscation fields are evaluated at their DEX/JADX initial values only.
Each replacement keeps its original expression and location in the JSON ledger.
"""
import ast
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / "jadx-static"
DEST = ROOT / "decoded-static"
DEST.mkdir(exist_ok=True)
files = {p: p.read_text(encoding="utf-8") for p in SOURCE.glob("*.java")}
constants, arrays, getters, decoders = {}, {}, {}, set()
for path, source in files.items():
    for name, value in re.findall(r"public static int (f\d+) = (-?\d+);", source):
        constants[name] = int(value)
    for name, payload in re.findall(r"\b(f\d+short)\s*=\s*(?:new short\[\])?\{([^}]+)\}", source):
        if re.fullmatch(r"[\s,\d-]+", payload):
            arrays[name] = [int(x.strip()) for x in payload.split(",") if x.strip()]
    for match in re.finditer(r"public static short\[\] (m\d+)\(\)", source):
        stop = re.search(r"\n\s*(?:public|private|protected) (?:static )?", source[match.end():])
        body = source[match.end():match.end() + stop.start()] if stop else source[match.end():]
        names = set(re.findall(r"\bf\d+short\b", body))
        if len(names) == 1:
            getters[match.group(1)] = names.pop()
    decoders.update(re.findall(r"public static String (m\d+)\(short\[\]", source))

def evaluate(text):
    """Evaluate only a small whitelist of Java integer-expression AST nodes."""
    text = re.sub(r"C\d+\.(f\d+)", lambda m: str(constants[m.group(1)]), text)
    tree = ast.parse(text.strip(), mode="eval")
    def visit(node):
        if isinstance(node, ast.Constant) and type(node.value) is int:
            return node.value
        if isinstance(node, ast.UnaryOp):
            value = visit(node.operand)
            if isinstance(node.op, ast.USub): return -value
            if isinstance(node.op, ast.UAdd): return value
            if isinstance(node.op, ast.Invert): return ~value
        if isinstance(node, ast.BinOp):
            left, right = visit(node.left), visit(node.right)
            if isinstance(node.op, ast.BitXor): return left ^ right
            if isinstance(node.op, ast.BitOr): return left | right
            if isinstance(node.op, ast.BitAnd): return left & right
            if isinstance(node.op, ast.Add): return left + right
            if isinstance(node.op, ast.Sub): return left - right
            if isinstance(node.op, ast.Mult): return left * right
            if isinstance(node.op, ast.Div): return int(left / right)
            if isinstance(node.op, ast.Mod): return left - int(left / right) * right
            if isinstance(node.op, ast.LShift): return left << (right & 31)
            if isinstance(node.op, ast.RShift): return left >> (right & 31)
        raise ValueError("Unsupported integer expression")
    return visit(tree.body)

records, failures = [], []
start_pattern = re.compile(r"(?:C\d+\.)?(m\d+)\(((?:m\d+))\(\),")
for path, source in files.items():
    replacements = []
    for match in start_pattern.finditer(source):
        decoder, getter = match.groups()
        if decoder not in decoders or getter not in getters:
            continue
        depth, cursor, last, parts = 1, match.end(), match.end(), []
        while cursor < len(source):
            char = source[cursor]
            if char == "(": depth += 1
            if char == ")":
                depth -= 1
                if depth == 0:
                    parts.append(source[last:cursor])
                    break
            if char == "," and depth == 1:
                parts.append(source[last:cursor])
                last = cursor + 1
            cursor += 1
        original = source[match.start():cursor + 1]
        location = {"file": path.name, "line": source.count("\n", 0, match.start()) + 1,
                    "expression": original, "array": getters[getter]}
        try:
            offset, length, key = map(evaluate, parts)
            payload = arrays[getters[getter]]
            if offset < 0 or length < 0 or offset + length > len(payload):
                raise ValueError("Array bounds do not match initial values")
            value = "".join(chr((x ^ key) & 65535) for x in payload[offset:offset + length])
            records.append({**location, "offset": offset, "length": length, "key": key, "value": value})
            replacements.append((match.start(), cursor + 1, json.dumps(value, ensure_ascii=False)))
        except (ValueError, KeyError, SyntaxError, ZeroDivisionError) as exc:
            failures.append({**location, "error": str(exc)})
    for start, end, value in reversed(replacements):
        source = source[:start] + value + source[end:]
    (DEST / path.name).write_text(source, encoding="utf-8", errors="backslashreplace")
(ROOT / "decoded-strings.json").write_text(json.dumps({"initial_int_fields": constants,
    "arrays": {k: len(v) for k, v in arrays.items()}, "getters": getters,
    "decoder_methods": sorted(decoders), "decoded": records, "unresolved": failures},
    ensure_ascii=False, indent=2), encoding="utf-8", errors="backslashreplace")
print(json.dumps({"files": len(files), "arrays": len(arrays), "getters": len(getters),
    "decoded_expressions": len(records), "unresolved_expressions": len(failures)}, ensure_ascii=False))
