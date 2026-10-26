/** Bộ phân tích biểu thức Python (đủ dùng cho code của khóa học). Lỗi thì ném, người gọi sẽ dùng cách dự phòng. */
export type Node =
  | { t: "name"; v: string }
  | { t: "num"; v: string }
  | { t: "str"; v: string; f?: boolean }
  | { t: "list" | "tuple" | "set"; v: Node[] }
  | { t: "dict"; v: [Node | null, Node][] }
  | { t: "call"; fn: Node; args: Arg[] }
  | { t: "attr"; o: Node; n: string }
  | { t: "sub"; o: Node; i: Node }
  | { t: "slice"; a?: Node; b?: Node; c?: Node }
  | { t: "bin"; op: string; l: Node; r: Node }
  | { t: "un"; op: string; x: Node }
  | { t: "cmp"; ops: string[]; v: Node[] }
  | { t: "bool"; op: "and" | "or"; v: Node[] }
  | { t: "lambda"; p: string[]; b: Node }
  | { t: "cond"; c: Node; a: Node; b: Node }
  | { t: "comp"; k: "list" | "set" | "dict" | "gen"; e: Node; e2?: Node; v: Node; it: Node; ifs: Node[] }
  | { t: "star"; x: Node; d: boolean };
export type Arg = { k?: string; v: Node };

type Tok = { k: "name" | "num" | "str" | "op" | "end"; v: string; f?: boolean };

const OPS3 = ["**=", "//=", ">>=", "<<=", "..."];
const OPS2 = ["**", "//", "==", "!=", "<=", ">=", "->", "+=", "-=", "*=", "/=", "%=", "&=", "|=", ":=", "<<", ">>"];

export function lex(src: string): Tok[] {
  const out: Tok[] = [];
  let i = 0;
  const n = src.length;
  while (i < n) {
    const ch = src[i];
    if (/\s/.test(ch)) { i++; continue; }
    if (ch === "#") { while (i < n && src[i] !== "\n") i++; continue; }
    const sm = /^([rRbBfFuU]{0,2})("""|'''|"|')/.exec(src.slice(i, i + 5));
    if (sm) {
      const pre = sm[1].toLowerCase();
      const q = sm[2];
      let j = i + sm[0].length;
      let val = "";
      while (j < n && !src.startsWith(q, j)) {
        if (src[j] === "\\" && j + 1 < n && !pre.includes("r")) { val += src[j + 1]; j += 2; continue; }
        val += src[j++];
      }
      j += q.length;
      out.push({ k: "str", v: val, f: pre.includes("f") });
      i = j;
      continue;
    }
    if (/[0-9]/.test(ch) || (ch === "." && /[0-9]/.test(src[i + 1] ?? ""))) {
      const m = /^(0[xX][0-9a-fA-F_]+|[0-9][0-9_]*\.?[0-9_]*(?:[eE][+-]?[0-9]+)?|\.[0-9_]+(?:[eE][+-]?[0-9]+)?)/.exec(src.slice(i))!;
      out.push({ k: "num", v: m[0] });
      i += m[0].length;
      continue;
    }
    if (/[A-Za-z_]/.test(ch) || ch.charCodeAt(0) > 127) {
      let j = i + 1;
      while (j < n && (/[A-Za-z0-9_]/.test(src[j]) || src.charCodeAt(j) > 127)) j++;
      out.push({ k: "name", v: src.slice(i, j) });
      i = j;
      continue;
    }
    const o3 = src.slice(i, i + 3);
    if (OPS3.includes(o3)) { out.push({ k: "op", v: o3 }); i += 3; continue; }
    const o2 = src.slice(i, i + 2);
    if (OPS2.includes(o2)) { out.push({ k: "op", v: o2 }); i += 2; continue; }
    out.push({ k: "op", v: ch });
    i++;
  }
  out.push({ k: "end", v: "" });
  return out;
}

export class Parser {
  p = 0;
  constructor(public toks: Tok[]) {}
  get cur() { return this.toks[this.p]; }
  isOp(v: string) { return this.cur.k === "op" && this.cur.v === v; }
  isKw(v: string) { return this.cur.k === "name" && this.cur.v === v; }
  eat(v: string) { if (this.isOp(v) || this.isKw(v)) { this.p++; return true; } return false; }
  expect(v: string) { if (!this.eat(v)) throw new Error(`expected ${v} got ${this.cur.v}`); }
  atEnd() { return this.cur.k === "end"; }

  exprList(): Node {
    const first = this.expr();
    if (!this.isOp(",")) return first;
    const v = [first];
    while (this.eat(",")) {
      if (this.atEnd() || this.isOp("=") || this.isOp(")") || this.isOp(":")) break;
      v.push(this.expr());
    }
    return { t: "tuple", v };
  }
  expr(): Node {
    if (this.isKw("lambda")) {
      this.p++;
      const p: string[] = [];
      while (!this.isOp(":")) { if (this.cur.k === "name") p.push(this.cur.v); this.p++; if (this.atEnd()) throw new Error("lambda"); }
      this.expect(":");
      return { t: "lambda", p, b: this.expr() };
    }
    const a = this.orTest();
    if (this.isKw("if")) {
      this.p++;
      const c = this.orTest();
      this.expect("else");
      const b = this.expr();
      return { t: "cond", c, a, b };
    }
    return a;
  }
  orTest(): Node {
    const l = this.andTest();
    if (!this.isKw("or")) return l;
    const v = [l];
    while (this.eat("or")) v.push(this.andTest());
    return { t: "bool", op: "or", v };
  }
  andTest(): Node {
    const l = this.notTest();
    if (!this.isKw("and")) return l;
    const v = [l];
    while (this.eat("and")) v.push(this.notTest());
    return { t: "bool", op: "and", v };
  }
  notTest(): Node {
    if (this.isKw("not")) { this.p++; return { t: "un", op: "not", x: this.notTest() }; }
    return this.cmp();
  }
  cmp(): Node {
    const first = this.bitor();
    const ops: string[] = [];
    const v = [first];
    for (;;) {
      let op = "";
      if (this.cur.k === "op" && ["<", ">", "==", "!=", "<=", ">="].includes(this.cur.v)) { op = this.cur.v; this.p++; }
      else if (this.isKw("in")) { op = "in"; this.p++; }
      else if (this.isKw("not") && this.toks[this.p + 1]?.v === "in") { op = "not in"; this.p += 2; }
      else if (this.isKw("is")) { this.p++; if (this.eat("not")) op = "is not"; else op = "is"; }
      else break;
      ops.push(op);
      v.push(this.bitor());
    }
    return ops.length ? { t: "cmp", ops, v } : first;
  }
  binLevel(next: () => Node, ops: string[]): Node {
    let l = next();
    while (this.cur.k === "op" && ops.includes(this.cur.v)) {
      const op = this.cur.v;
      this.p++;
      l = { t: "bin", op, l, r: next() };
    }
    return l;
  }
  bitor(): Node { return this.binLevel(() => this.bitxor(), ["|"]); }
  bitxor(): Node { return this.binLevel(() => this.bitand(), ["^"]); }
  bitand(): Node { return this.binLevel(() => this.shift(), ["&"]); }
  shift(): Node { return this.binLevel(() => this.arith(), ["<<", ">>"]); }
  arith(): Node { return this.binLevel(() => this.term(), ["+", "-"]); }
  term(): Node { return this.binLevel(() => this.factor(), ["*", "/", "//", "%", "@"]); }
  factor(): Node {
    if (this.cur.k === "op" && ["-", "+", "~"].includes(this.cur.v)) {
      const op = this.cur.v;
      this.p++;
      return { t: "un", op, x: this.factor() };
    }
    return this.power();
  }
  power(): Node {
    const b = this.postfix();
    if (this.eat("**")) return { t: "bin", op: "**", l: b, r: this.factor() };
    return b;
  }
  postfix(): Node {
    let n = this.atom();
    for (;;) {
      if (this.eat(".")) {
        if (this.cur.k !== "name") throw new Error("attr");
        n = { t: "attr", o: n, n: this.cur.v };
        this.p++;
      } else if (this.isOp("(")) {
        this.p++;
        n = { t: "call", fn: n, args: this.args() };
      } else if (this.isOp("[")) {
        this.p++;
        const i = this.subscript();
        this.expect("]");
        n = { t: "sub", o: n, i };
      } else break;
    }
    return n;
  }
  subscript(): Node {
    const one = (): Node => {
      let a: Node | undefined;
      if (!this.isOp(":")) a = this.expr();
      if (!this.isOp(":")) return a!;
      this.p++;
      let b: Node | undefined;
      let c: Node | undefined;
      if (!this.isOp(":") && !this.isOp("]") && !this.isOp(",")) b = this.expr();
      if (this.eat(":")) { if (!this.isOp("]") && !this.isOp(",")) c = this.expr(); }
      return { t: "slice", a, b, c };
    };
    const f = one();
    if (!this.isOp(",")) return f;
    const v = [f];
    while (this.eat(",")) { if (this.isOp("]")) break; v.push(one()); }
    return { t: "tuple", v };
  }
  args(): Arg[] {
    const out: Arg[] = [];
    while (!this.isOp(")")) {
      if (this.atEnd()) throw new Error("args");
      if (this.isOp("*") || this.isOp("**")) {
        const d = this.cur.v === "**";
        this.p++;
        out.push({ v: { t: "star", x: this.expr(), d } });
      } else if (this.cur.k === "name" && this.toks[this.p + 1]?.v === "=" && this.toks[this.p + 1].k === "op") {
        const k = this.cur.v;
        this.p += 2;
        out.push({ k, v: this.expr() });
      } else {
        const e = this.expr();
        if (this.isKw("for")) out.push({ v: this.compTail("gen", e) });
        else out.push({ v: e });
      }
      if (!this.eat(",")) break;
    }
    this.expect(")");
    return out;
  }
  compTail(k: "list" | "set" | "dict" | "gen", e: Node, e2?: Node): Node {
    this.expect("for");
    const v = this.targetList();
    this.expect("in");
    const it = this.orTest();
    const ifs: Node[] = [];
    while (this.isKw("if")) { this.p++; ifs.push(this.orTest()); }
    if (this.isKw("for")) { /* lồng nhau: bỏ qua phần sau, giữ vòng đầu */ let depth = 0; while (!this.atEnd() && !(depth === 0 && (this.isOp(")") || this.isOp("]") || this.isOp("}")))) { if (["(", "[", "{"].includes(this.cur.v)) depth++; if ([")", "]", "}"].includes(this.cur.v)) depth--; this.p++; } }
    return { t: "comp", k, e, e2, v, it, ifs };
  }
  targetList(): Node {
    const first = this.bitor();
    if (!this.isOp(",")) return first;
    const v = [first];
    while (this.eat(",")) { if (this.isKw("in")) break; v.push(this.bitor()); }
    return { t: "tuple", v };
  }
  atom(): Node {
    const c = this.cur;
    if (c.k === "name") {
      if (["lambda", "not"].includes(c.v)) return this.expr();
      this.p++;
      return { t: "name", v: c.v };
    }
    if (c.k === "num") { this.p++; return { t: "num", v: c.v }; }
    if (c.k === "str") {
      let v = c.v;
      let f = c.f;
      this.p++;
      while (this.cur.k === "str") { v += this.cur.v; f = f || this.cur.f; this.p++; }
      return { t: "str", v, f };
    }
    if (c.k === "op") {
      if (c.v === "(") {
        this.p++;
        if (this.eat(")")) return { t: "tuple", v: [] };
        const e = this.expr();
        if (this.isKw("for")) { const r = this.compTail("gen", e); this.expect(")"); return r; }
        if (this.isOp(",")) {
          const v = [e];
          while (this.eat(",")) { if (this.isOp(")")) break; v.push(this.expr()); }
          this.expect(")");
          return { t: "tuple", v };
        }
        this.expect(")");
        return e;
      }
      if (c.v === "[") {
        this.p++;
        if (this.eat("]")) return { t: "list", v: [] };
        const e = this.expr();
        if (this.isKw("for")) { const r = this.compTail("list", e); this.expect("]"); return r; }
        const v = [e];
        while (this.eat(",")) { if (this.isOp("]")) break; v.push(this.expr()); }
        this.expect("]");
        return { t: "list", v };
      }
      if (c.v === "{") {
        this.p++;
        if (this.eat("}")) return { t: "dict", v: [] };
        if (this.isOp("**")) {
          // {**a, 'k': v}
          const items: [Node | null, Node][] = [];
          for (;;) {
            if (this.eat("**")) items.push([null, this.bitor()]);
            else { const k = this.expr(); this.expect(":"); items.push([k, this.expr()]); }
            if (!this.eat(",")) break;
            if (this.isOp("}")) break;
          }
          this.expect("}");
          return { t: "dict", v: items };
        }
        const k = this.expr();
        if (this.eat(":")) {
          const val = this.expr();
          if (this.isKw("for")) { const r = this.compTail("dict", k, val); this.expect("}"); return r; }
          const items: [Node | null, Node][] = [[k, val]];
          while (this.eat(",")) {
            if (this.isOp("}")) break;
            if (this.eat("**")) { items.push([null, this.bitor()]); continue; }
            const kk = this.expr();
            this.expect(":");
            items.push([kk, this.expr()]);
          }
          this.expect("}");
          return { t: "dict", v: items };
        }
        if (this.isKw("for")) { const r = this.compTail("set", k); this.expect("}"); return r; }
        const v = [k];
        while (this.eat(",")) { if (this.isOp("}")) break; v.push(this.expr()); }
        this.expect("}");
        return { t: "set", v };
      }
      if (c.v === "...") { this.p++; return { t: "name", v: "..." }; }
    }
    throw new Error(`atom ${c.v}`);
  }
}

export function parseExpr(src: string): Node {
  const p = new Parser(lex(src));
  const n = p.exprList();
  if (!p.atEnd()) throw new Error("trailing " + p.cur.v);
  return n;
}
