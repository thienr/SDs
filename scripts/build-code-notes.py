#!/usr/bin/env python3
"""Gộp các bản giải thích code viết tay (out_*.json) thành src/data/code-notes.json, khóa theo mã băm của code.
Dùng: python3 scripts/build-code-notes.py <thư mục chứa items.json và out_*.json>"""
import json, glob, struct, sys, re

def h(code: str) -> str:
    s = code.replace("\r", "").strip()
    b = s.encode("utf-16-le")
    x = 0x811C9DC5
    for (u,) in struct.iter_unpack("<H", b):
        x ^= u
        x = (x * 0x01000193) & 0xFFFFFFFF
    return format(x, "08x")

d = sys.argv[1]
items = json.load(open(f"{d}/items.json"))
out = {}
for f in sorted(glob.glob(f"{d}/out_*.json")):
    for x in json.load(open(f)):
        it = items[x["i"]]
        lines = it["code"].replace("\r", "").strip().split("\n")
        if all((not l.strip()) or re.match(r"^\s*(--|#|//)", l) for l in lines):
            continue
        rows = [r for r in x["rows"] if 1 <= r[0] <= r[1] <= len(lines)]
        if not rows:
            continue
        out[h(it["code"])] = {"s": x["summary"], "r": rows}
json.dump(out, open("src/data/code-notes.json", "w"), ensure_ascii=False, separators=(",", ":"))
print(len(out), "notes")
