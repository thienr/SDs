import type { Explained, Lg, Row, Tpl } from "./tpl";

type T = { k: "w" | "n" | "s" | "o" | "q"; v: string; s: number; e: number };

function lexSql(src: string): T[] {
  const out: T[] = [];
  let i = 0;
  const n = src.length;
  while (i < n) {
    const c = src[i];
    if (/\s/.test(c)) { i++; continue; }
    if (c === "-" && src[i + 1] === "-") { while (i < n && src[i] !== "\n") i++; continue; }
    if (c === "/" && src[i + 1] === "*") { const j = src.indexOf("*/", i + 2); i = j < 0 ? n : j + 2; continue; }
    if (c === "'") {
      let j = i + 1;
      while (j < n && !(src[j] === "'" && src[j + 1] !== "'")) j += src[j] === "'" ? 2 : 1;
      out.push({ k: "s", v: src.slice(i + 1, j).replace(/''/g, "'"), s: i, e: j + 1 });
      i = j + 1;
      continue;
    }
    if (c === '"' || c === "`") {
      const j = src.indexOf(c, i + 1);
      out.push({ k: "w", v: src.slice(i + 1, j < 0 ? n : j), s: i, e: (j < 0 ? n : j) + 1 });
      i = (j < 0 ? n : j) + 1;
      continue;
    }
    if (/[0-9]/.test(c) || (c === "." && /[0-9]/.test(src[i + 1] ?? ""))) {
      const m = /^[0-9]*\.?[0-9]+(?:[eE][+-]?[0-9]+)?/.exec(src.slice(i))!;
      out.push({ k: "n", v: m[0], s: i, e: i + m[0].length });
      i += m[0].length;
      continue;
    }
    if (/[A-Za-z_]/.test(c) || c.charCodeAt(0) > 127) {
      let j = i + 1;
      while (j < n && (/[A-Za-z0-9_$]/.test(src[j]) || src.charCodeAt(j) > 127 || (src[j] === "." && /[A-Za-z_*]/.test(src[j + 1] ?? "")))) j++;
      if (src[j - 1] === "." && src[j] === "*") j++;
      out.push({ k: "w", v: src.slice(i, j), s: i, e: j });
      i = j;
      continue;
    }
    const two = src.slice(i, i + 2);
    if (["<=", ">=", "<>", "!=", "||", "::", ":="].includes(two)) { out.push({ k: "o", v: two, s: i, e: i + 2 }); i += 2; continue; }
    out.push({ k: "o", v: c, s: i, e: i + 1 });
    i++;
  }
  return out;
}

const FN: Record<string, Tpl> = {
  COUNT: ["số dòng", "number of rows"],
  SUM: ["tổng của {0}", "sum of {0}"],
  AVG: ["trung bình của {0}", "average of {0}"],
  MIN: ["giá trị nhỏ nhất của {0}", "minimum of {0}"],
  MAX: ["giá trị lớn nhất của {0}", "maximum of {0}"],
  STDDEV: ["độ lệch chuẩn của {0}", "standard deviation of {0}"],
  VARIANCE: ["phương sai của {0}", "variance of {0}"],
  ROUND: ["{0} làm tròn {1|0} chữ số thập phân", "{0} rounded to {1|0} decimals"],
  ABS: ["giá trị tuyệt đối của {0}", "absolute value of {0}"],
  COALESCE: ["giá trị không trống đầu tiên trong ({all})", "the first non-empty value among ({all})"],
  IFNULL: ["{0}, nếu trống thì lấy {1}", "{0}, or {1} if empty"],
  NULLIF: ["{0}, nhưng thành trống nếu bằng {1}", "{0}, but empty if it equals {1}"],
  UPPER: ["{0} viết hoa", "{0} in capitals"],
  LOWER: ["{0} viết thường", "{0} in lowercase"],
  TRIM: ["{0} bỏ khoảng trắng đầu cuối", "{0} without outer spaces"],
  LENGTH: ["độ dài chữ của {0}", "length of {0}"],
  SUBSTR: ["đoạn chữ của {0} từ ký tự {1}[, dài {2} ký tự]", "part of {0} from character {1}[, {2} characters long]"],
  SUBSTRING: ["đoạn chữ của {0} từ ký tự {1}[, dài {2} ký tự]", "part of {0} from character {1}[, {2} characters long]"],
  CONCAT: ["nối chữ: {all}", "joined text: {all}"],
  REPLACE: ["{0} với {1} được thay bằng {2}", "{0} with {1} replaced by {2}"],
  DATE_TRUNC: ["{1} cắt về đầu {0}", "{1} cut down to the start of {0}"],
  EXTRACT: ["{0} lấy ra từ ngày", "{0} taken from the date"],
  DATE: ["ngày của {0}", "the date of {0}"],
  TO_DATE: ["{0} đổi sang kiểu ngày", "{0} converted to a date"],
  DATEDIFF: ["số ngày giữa {0} và {1}", "days between {0} and {1}"],
  CURRENT_DATE: ["ngày hôm nay", "today's date"],
  NOW: ["thời điểm hiện tại", "the current time"],
  RANK: ["hạng (đồng hạng thì nhảy số)", "rank (ties skip numbers)"],
  DENSE_RANK: ["hạng (đồng hạng không nhảy số)", "rank (ties do not skip numbers)"],
  ROW_NUMBER: ["số thứ tự dòng (không bao giờ trùng)", "row number (never tied)"],
  NTILE: ["chia thành {0} nhóm bằng nhau, số của nhóm", "group number when split into {0} equal groups"],
  LAG: ["giá trị {0} của dòng trước[ cách {1} dòng]", "the {0} of the previous row[, {1} rows back]"],
  LEAD: ["giá trị {0} của dòng sau[ cách {1} dòng]", "the {0} of the next row[, {1} rows ahead]"],
  FIRST_VALUE: ["giá trị {0} của dòng đầu cửa sổ", "the {0} of the first row in the window"],
  LAST_VALUE: ["giá trị {0} của dòng cuối cửa sổ", "the {0} of the last row in the window"],
  IF: ["nếu {0} thì {1}, ngược lại {2}", "if {0} then {1}, otherwise {2}"],
  DIVIDE: ["{0} chia {1} (an toàn khi chia cho 0)", "{0} divided by {1} (safe against zero)"],
  COUNTROWS: ["số dòng của {0}", "number of rows in {0}"],
  DISTINCTCOUNT: ["số giá trị khác nhau của {0}", "number of distinct values in {0}"],
  MOD: ["{0} chia lấy dư cho {1}", "{0} modulo {1}"],
  POWER: ["{0} lũy thừa {1}", "{0} to the power {1}"],
  SQRT: ["căn bậc hai của {0}", "square root of {0}"],
  LN: ["lôgarit tự nhiên của {0}", "natural log of {0}"],
  LOG: ["lôgarit của {0}", "log of {0}"],
  CEIL: ["{0} làm tròn lên", "{0} rounded up"],
  FLOOR: ["{0} làm tròn xuống", "{0} rounded down"],
  GREATEST: ["số lớn nhất trong ({all})", "the largest of ({all})"],
  LEAST: ["số nhỏ nhất trong ({all})", "the smallest of ({all})"],
  STRFTIME: ["{1} viết lại theo khuôn {0}", "{1} formatted as {0}"],
};

const KW_CLAUSE = ["WITH", "SELECT", "FROM", "WHERE", "GROUP", "HAVING", "ORDER", "LIMIT", "OFFSET", "UNION", "INTERSECT", "EXCEPT", "WINDOW", "JOIN", "LEFT", "RIGHT", "INNER", "FULL", "CROSS", "ON", "SET", "VALUES", "INSERT", "UPDATE", "DELETE", "CREATE", "ALTER", "DROP", "FOREIGN", "PRIMARY", "PARTITION", "USING", "USE", "CALL"];

export function explainSql(code: string, lg: Lg): Explained {
  const i = lg === "vi" ? 0 : 1;
  const P = (t: Tpl) => t[i];
  const toks = lexSql(code);
  if (!toks.length) return null;
  const up = (t: T | undefined) => (t && t.k === "w" ? t.v.toUpperCase() : "");

  /* biểu thức */
  let pos = 0;
  let src = toks;
  const cur = () => src[pos];
  const isW = (v: string) => up(cur()) === v;
  const isO = (v: string) => cur()?.k === "o" && cur().v === v;
  const OPN: Record<string, Tpl> = { "=": ["bằng", "equals"], "<>": ["khác", "differs from"], "!=": ["khác", "differs from"], ">": ["lớn hơn", "is greater than"], "<": ["nhỏ hơn", "is less than"], ">=": ["lớn hơn hoặc bằng", "is at least"], "<=": ["nhỏ hơn hoặc bằng", "is at most"] };
  const ARI: Record<string, Tpl> = { "+": ["cộng", "plus"], "-": ["trừ", "minus"], "*": ["nhân", "times"], "/": ["chia", "divided by"], "%": ["chia lấy dư", "modulo"], "||": ["nối với", "joined with"] };

  const argsOf = (): string[] => {
    const out: string[] = [];
    if (isO(")")) { pos++; return out; }
    for (;;) {
      if (isW("DISTINCT")) { pos++; out.push(P(["(các giá trị khác nhau) ", "(distinct) "]) + orExpr()); }
      else if (isO("*")) { pos++; out.push("*"); }
      else out.push(orExpr());
      if (isO(",")) { pos++; continue; }
      break;
    }
    if (isO(")")) pos++;
    return out;
  };
  const windowSpec = (): string => {
    // sau OVER
    if (!isO("(")) { const nm = cur()?.v ?? ""; pos++; return P([`cửa sổ đã đặt tên ${nm}`, `the named window ${nm}`]); }
    pos++;
    const parts: string[] = [];
    while (!isO(")") && pos < src.length) {
      if (isW("PARTITION")) { pos += 2; const l: string[] = []; do { l.push(addExpr()); } while (isO(",") && ++pos); parts.push(P([`mỗi nhóm ${l.join(", ")} tính riêng`, `computed separately for each ${l.join(", ")}`])); }
      else if (isW("ORDER")) { pos += 2; { const ol = orderList(); parts.push(P([`sắp theo ${ol}`, `ordered by ${ol}`])); } }
      else if (isW("ROWS") || isW("RANGE")) {
        const kind = up(cur());
        pos++;
        const words: string[] = [];
        while (!isO(")") && !isW("PARTITION") && !isW("ORDER") && pos < src.length) { words.push(cur().v); pos++; }
        const f = words.join(" ").toUpperCase();
        const m = /BETWEEN (\d+|UNBOUNDED) PRECEDING AND (CURRENT ROW|\d+ FOLLOWING|\d+ PRECEDING|UNBOUNDED FOLLOWING)/.exec(f);
        if (m) parts.push(P([`khung: từ ${m[1] === "UNBOUNDED" ? "dòng đầu" : `${m[1]} dòng trước`} đến ${m[2] === "CURRENT ROW" ? "dòng hiện tại" : m[2].toLowerCase()}${kind === "RANGE" ? " (theo giá trị)" : ""}`, `frame: from ${m[1] === "UNBOUNDED" ? "the first row" : `${m[1]} rows back`} to ${m[2] === "CURRENT ROW" ? "the current row" : m[2].toLowerCase()}`]));
        else parts.push(P([`khung: ${words.join(" ")}`, `frame: ${words.join(" ")}`]));
      } else pos++;
    }
    if (isO(")")) pos++;
    return parts.length ? parts.join(", ") : P(["toàn bộ bảng", "the whole table"]);
  };
  const orderList = (): string => {
    const l: string[] = [];
    for (;;) {
      let s = addExpr();
      if (isW("DESC")) { pos++; s += P([" giảm dần", " descending"]); }
      else if (isW("ASC")) { pos++; s += P([" tăng dần", " ascending"]); }
      if (isW("NULLS")) pos += 2;
      l.push(s);
      if (isO(",")) { pos++; continue; }
      break;
    }
    return l.join(", ");
  };
  const callFn = (name: string): string => {
    const NAME = name.toUpperCase();
    const a = argsOf();
    let out: string;
    if (NAME === "COUNT") {
      const d = a[0]?.startsWith(P(["(các giá trị khác nhau) ", "(distinct) "]));
      out = !a.length || a[0] === "*" ? P(["số dòng", "number of rows"]) : d ? P([`số giá trị khác nhau của ${a[0].replace(/^\([^)]*\) /, "")}`, `number of distinct values of ${a[0].replace(/^\([^)]*\) /, "")}`]) : P([`số ô có giá trị của ${a[0]}`, `number of non-empty cells in ${a[0]}`]);
    } else if (NAME === "CAST") {
      out = a[0] ?? "";
    } else if (FN[NAME]) {
      let t = P(FN[NAME]);
      t = t.replace(/\{all\}/g, a.join(", ")).replace(/\{(\d)(?:\|([^}]*))?\}/g, (_m, k: string, d?: string) => a[+k] ?? d ?? "");
      t = t.replace(/\[([^[\]]*)\]/g, (_m, inner: string) => (/\{/.test(inner) ? "" : inner));
      out = t.replace(/\[|\]/g, "");
      if (/\{/.test(out)) out = out.replace(/\{\d\}/g, "").replace(/\s+/g, " ");
    } else {
      out = P([`kết quả của hàm ${name}${a.length ? ` với ${a.join(", ")}` : ""}`, `result of the function ${name}${a.length ? ` with ${a.join(", ")}` : ""}`]);
    }
    if (isW("OVER")) {
      pos++;
      const ws = windowSpec();
      out += P([`, tính trên ${ws}`, `, computed over ${ws}`]);
    }
    if (isW("FILTER")) { pos++; if (isO("(")) { pos++; if (isW("WHERE")) pos++; const c = orExpr(); if (isO(")")) pos++; out += P([`, chỉ với dòng thỏa ${c}`, `, only for rows where ${c}`]); } }
    return out;
  };
  const caseExpr = (): string => {
    const branches: string[] = [];
    let base = "";
    if (!isW("WHEN")) base = addExpr();
    let other = "";
    while (isW("WHEN")) {
      pos++;
      const c = orExpr();
      if (isW("THEN")) pos++;
      const r = addExpr();
      branches.push(base ? P([`nếu bằng ${c} thì ${r}`, `if it equals ${c} then ${r}`]) : P([`nếu ${c} thì ${r}`, `if ${c} then ${r}`]));
    }
    if (isW("ELSE")) { pos++; other = addExpr(); }
    if (isW("END")) pos++;
    return P([`chia trường hợp: ${branches.join("; ")}${other ? `; còn lại thì ${other}` : "; không khớp thì để trống"}`, `cases: ${branches.join("; ")}${other ? `; otherwise ${other}` : "; empty if nothing matches"}`]);
  };
  const subquery = (): string => {
    // đang ở sau "("
    const start = pos;
    let depth = 1;
    while (pos < src.length && depth > 0) { if (isO("(")) depth++; else if (isO(")")) depth--; pos++; }
    const inner = src.slice(start, pos - 1);
    const saved = { src, pos };
    const text = clauseSummary(inner);
    src = saved.src;
    pos = saved.pos;
    return P([`kết quả của truy vấn con (${text})`, `result of the subquery (${text})`]);
  };
  const atom = (): string => {
    const t = cur();
    if (!t) return "";
    if (t.k === "n") { pos++; return t.v; }
    if (t.k === "s") { pos++; return `«${t.v}»`; }
    if (t.k === "o") {
      if (t.v === "(") {
        pos++;
        if (isW("SELECT") || isW("WITH")) return subquery();
        const l: string[] = [orExpr()];
        while (isO(",")) { pos++; l.push(orExpr()); }
        if (isO(")")) pos++;
        return l.length > 1 ? `(${l.join(", ")})` : l[0];
      }
      if (t.v === "*") { pos++; return P(["mọi cột", "all columns"]); }
      if (t.v === "-") { pos++; return `−${atom()}`; }
      pos++;
      return t.v;
    }
    const u = up(t);
    if (u === "CASE") { pos++; return caseExpr(); }
    if (u === "CAST" && src[pos + 1]?.v === "(") {
      pos += 2;
      const e = addExpr();
      let ty = "";
      if (isW("AS")) { pos++; ty = cur()?.v ?? ""; pos++; while (!isO(")") && pos < src.length) { if (isO("(")) { while (!isO(")")) pos++; } pos++; } }
      if (isO(")")) pos++;
      return P([`${e} đổi sang kiểu ${ty}`, `${e} converted to ${ty}`]);
    }
    if (u === "EXTRACT" && src[pos + 1]?.v === "(") {
      pos += 2;
      const part = cur()?.v ?? "";
      pos++;
      if (isW("FROM")) pos++;
      const e = addExpr();
      if (isO(")")) pos++;
      return P([`${part.toLowerCase()} lấy ra từ ${e}`, `the ${part.toLowerCase()} taken from ${e}`]);
    }
    if (u === "INTERVAL") { pos++; const v = cur(); pos++; const unit = cur()?.k === "w" ? cur().v : ""; if (unit) pos++; return P([`khoảng ${v?.v ?? ""} ${unit.toLowerCase()}`, `an interval of ${v?.v ?? ""} ${unit.toLowerCase()}`]); }
    if ((u === "DATE" || u === "TIMESTAMP") && src[pos + 1]?.k === "s") { const v = src[pos + 1].v; pos += 2; return P([`ngày «${v}»`, `the date “${v}”`]); }
    if (u === "NULL") { pos++; return P(["ô trống (NULL)", "an empty value (NULL)"]); }
    if (u === "TRUE") { pos++; return P(["đúng", "true"]); }
    if (u === "FALSE") { pos++; return P(["sai", "false"]); }
    if (u === "NOT" && src[pos + 1]?.v?.toUpperCase() === "EXISTS") { pos += 2; const ea = atom(); return P([`không tồn tại ${ea}`, `does not exist: ${ea}`]); }
    if (u === "EXISTS") { pos++; const ea = atom(); return P([`tồn tại ${ea}`, `exists: ${ea}`]); }
    pos++;
    if (isO("(")) { pos++; return callFn(t.v); }
    return t.v;
  };
  const postfix = (): string => {
    let a = atom();
    while (isO("::")) { pos++; const ty = cur()?.v ?? ""; pos++; a = P([`${a} đổi sang kiểu ${ty}`, `${a} converted to ${ty}`]); }
    return a;
  };
  const mulExpr = (): string => {
    let l = postfix();
    while (cur()?.k === "o" && ["*", "/", "%"].includes(cur().v)) { const op = cur().v; pos++; const r = postfix(); l = `${l} ${P(ARI[op])} ${r}`; }
    return l;
  };
  const addExpr = (): string => {
    let l = mulExpr();
    while (cur()?.k === "o" && ["+", "-", "||"].includes(cur().v)) { const op = cur().v; pos++; const r = mulExpr(); l = `${l} ${P(ARI[op])} ${r}`; }
    return l;
  };
  const cmpExpr = (): string => {
    const l = addExpr();
    let neg = false;
    const save = pos;
    if (isW("NOT") && ["LIKE", "IN", "BETWEEN", "ILIKE"].includes(up(src[pos + 1]))) { neg = true; pos++; }
    if (isW("IS")) {
      pos++;
      let n2 = false;
      if (isW("NOT")) { n2 = true; pos++; }
      const r = addExpr();
      if (r === P(["ô trống (NULL)", "an empty value (NULL)"])) return n2 ? P([`${l} không trống`, `${l} is not empty`]) : P([`${l} bị trống`, `${l} is empty`]);
      return P([`${l} ${n2 ? "không phải" : "là"} ${r}`, `${l} is ${n2 ? "not " : ""}${r}`]);
    }
    if (isW("LIKE") || isW("ILIKE")) {
      pos++;
      const r = addExpr();
      return P([`${l} ${neg ? "không " : ""}khớp mẫu ${r} (% là chuỗi bất kỳ, _ là một ký tự)`, `${l} ${neg ? "does not match" : "matches"} the pattern ${r} (% = any text, _ = one character)`]);
    }
    if (isW("IN")) {
      pos++;
      const r = atom();
      return P([`${l} ${neg ? "không " : ""}nằm trong ${r}`, `${l} is ${neg ? "not " : ""}in ${r}`]);
    }
    if (isW("BETWEEN")) {
      pos++;
      const a = addExpr();
      if (isW("AND")) pos++;
      const b = addExpr();
      return P([`${l} ${neg ? "không " : ""}nằm từ ${a} đến ${b} (gồm cả hai đầu)`, `${l} is ${neg ? "not " : ""}between ${a} and ${b} (inclusive)`]);
    }
    pos = neg ? save : pos;
    if (cur()?.k === "o" && OPN[cur().v]) {
      const op = cur().v;
      pos++;
      if (isW("ANY") || isW("ALL")) pos++;
      const r = addExpr();
      return `${l} ${P(OPN[op])} ${r}`;
    }
    return l;
  };
  const notExpr = (): string => {
    if (isW("NOT")) { pos++; const ne = notExpr(); return P([`không phải (${ne})`, `not (${ne})`]); }
    return cmpExpr();
  };
  const andExpr = (): string => {
    const l = [notExpr()];
    while (isW("AND")) { pos++; l.push(notExpr()); }
    return l.length > 1 ? l.join(P([" và ", " and "])) : l[0];
  };
  const orExpr = (): string => {
    const l = [andExpr()];
    while (isW("OR")) { pos++; l.push(andExpr()); }
    return l.length > 1 ? l.map((x) => (/ (và|and) /.test(x) ? `(${x})` : x)).join(P([" hoặc ", " or "])) : l[0];
  };

  /* mệnh đề */
  const selectList = (): string => {
    const items: string[] = [];
    let distinct = false;
    if (isW("DISTINCT")) { distinct = true; pos++; }
    for (;;) {
      if (pos >= src.length) break;
      let e = orExpr();
      if (isW("AS")) { pos++; e += P([` (đặt tên cột là ${cur()?.v})`, ` (named ${cur()?.v})`]); pos++; }
      else if (cur()?.k === "w" && !KW_CLAUSE.includes(up(cur())) && !["FROM", "AS"].includes(up(cur()))) { e += P([` (đặt tên cột là ${cur().v})`, ` (named ${cur().v})`]); pos++; }
      items.push(e);
      if (isO(",")) { pos++; continue; }
      break;
    }
    const list = items.join("; ");
    return distinct ? P([`các dòng không trùng của: ${list}`, `distinct rows of: ${list}`]) : list;
  };
  const tableRef = (): string => {
    let name: string;
    if (isO("(")) { pos++; name = isW("SELECT") || isW("WITH") ? subquery() : "(…)"; }
    else { name = cur()?.v ?? ""; pos++; }
    if (isW("AS")) pos++;
    if (cur()?.k === "w" && !KW_CLAUSE.includes(up(cur())) && up(cur()) !== "AS") { name += P([` (gọi tắt ${cur().v})`, ` (alias ${cur().v})`]); pos++; }
    return name;
  };

  function clauseSummary(tokens: T[]): string {
    const saved = { src, pos };
    src = tokens;
    pos = 0;
    const parts: string[] = [];
    while (pos < src.length) {
      const r = oneClause();
      if (r) parts.push(r.text);
      else pos++;
    }
    src = saved.src;
    pos = saved.pos;
    return parts.join("; ");
  }

  let dml = false;
  function oneClause(): { text: string; start: number } | null {
    const t = cur();
    if (!t) return null;
    const start = pos;
    const u = up(t);
    if (t.k === "o" && (t.v === ";" || t.v === "." || t.v === "…")) { pos++; return null; }
    if (u === "WITH") {
      pos++;
      const names: string[] = [];
      for (;;) {
        const nm = cur()?.v; pos++;
        if (isW("AS")) pos++;
        if (isO("(")) { pos++; const q = subquery(); names.push(`${nm}: ${q.replace(/^[^(]*/, "")}`); }
        if (isO(",")) { pos++; continue; }
        break;
      }
      return { text: P([`Đặt tên cho các bảng tạm để dùng ngay bên dưới: ${names.map((n2) => n2.split(":")[0]).join(", ")}`, `Name temporary tables for use below: ${names.map((n2) => n2.split(":")[0]).join(", ")}`]), start };
    }
    if (u === "SELECT") { pos++; const sl = selectList(); return { text: P([`Lấy ra: ${sl}`, `Select: ${sl}`]), start }; }
    if (u === "FROM") { pos++; const tn = tableRef(); const more: string[] = []; while (isO(",")) { pos++; more.push(tableRef()); } return { text: P([`Từ bảng ${tn}${more.length ? ", " + more.join(", ") : ""}`, `From the table ${tn}${more.length ? ", " + more.join(", ") : ""}`]), start }; }
    if (u === "WHERE") { pos++; const we = orExpr(); return { text: dml ? P([`Chỉ áp dụng cho các dòng thỏa: ${we}`, `Apply only to rows where: ${we}`]) : P([`Chỉ giữ các dòng thỏa: ${we}`, `Keep only rows where: ${we}`]), start }; }
    if (u === "GROUP") { pos += 2; const l: string[] = []; for (;;) { l.push(addExpr()); if (isO(",")) { pos++; continue; } break; } return { text: P([`Gom các dòng thành nhóm theo ${l.join(", ")}; mỗi nhóm thành một dòng kết quả`, `Group rows by ${l.join(", ")}; each group becomes one result row`]), start }; }
    if (u === "HAVING") { pos++; const he = orExpr(); return { text: P([`Chỉ giữ các nhóm thỏa: ${he}`, `Keep only groups where: ${he}`]), start }; }
    if (u === "ORDER") { pos += 2; const ol = orderList(); return { text: P([`Sắp xếp kết quả theo ${ol}`, `Sort the result by ${ol}`]), start }; }
    if (u === "LIMIT") { pos++; const n = cur()?.v; pos++; return { text: P([`Chỉ lấy ${n} dòng đầu`, `Take only the first ${n} rows`]), start }; }
    if (u === "OFFSET") { pos++; const n = cur()?.v; pos++; return { text: P([`Bỏ qua ${n} dòng đầu`, `Skip the first ${n} rows`]), start }; }
    if (u === "UNION" || u === "INTERSECT" || u === "EXCEPT") {
      pos++;
      let all = false;
      if (isW("ALL")) { all = true; pos++; }
      const w = u === "UNION" ? (all ? P(["Nối thêm các dòng của truy vấn sau (giữ cả dòng trùng)", "Stack the rows of the next query below (keeping duplicates)"]) : P(["Nối thêm các dòng của truy vấn sau (bỏ dòng trùng)", "Stack the rows of the next query below (dropping duplicates)"])) : u === "INTERSECT" ? P(["Chỉ giữ các dòng có ở cả hai truy vấn", "Keep only rows found in both queries"]) : P(["Giữ các dòng của truy vấn trên mà truy vấn sau không có", "Keep rows of the query above that the next one lacks"]);
      return { text: w, start };
    }
    if (u === "WINDOW") { pos++; const nm = cur()?.v; pos += 2; const w = windowSpec(); return { text: P([`Đặt tên cửa sổ ${nm}: ${w}`, `Name the window ${nm}: ${w}`]), start }; }
    if (["JOIN", "LEFT", "RIGHT", "INNER", "FULL", "CROSS"].includes(u)) {
      const kind = u;
      while (["LEFT", "RIGHT", "INNER", "FULL", "CROSS", "OUTER", "JOIN"].includes(up(cur()))) { if (isW("JOIN")) { pos++; break; } pos++; }
      const tn = tableRef();
      let cond = "";
      if (isW("ON")) { pos++; cond = orExpr(); }
      else if (isW("USING")) { pos++; if (isO("(")) { pos++; const l: string[] = []; while (!isO(")")) { if (!isO(",")) l.push(cur().v); pos++; } pos++; cond = P([`cột ${l.join(", ")} giống nhau`, `the column ${l.join(", ")} matches`]); } }
      const KJ: Record<string, Tpl> = {
        JOIN: ["Nối với bảng {t}, giữ các cặp dòng khớp", "Join the table {t}, keeping matching pairs"],
        INNER: ["Nối với bảng {t}, giữ các cặp dòng khớp", "Join the table {t}, keeping matching pairs"],
        LEFT: ["Nối với bảng {t}, giữ mọi dòng bên trái; dòng không khớp bên phải để trống", "Join the table {t}, keeping every left row; unmatched right rows stay empty"],
        RIGHT: ["Nối với bảng {t}, giữ mọi dòng bên phải; dòng không khớp bên trái để trống", "Join the table {t}, keeping every right row; unmatched left rows stay empty"],
        FULL: ["Nối với bảng {t}, giữ mọi dòng của cả hai bên", "Join the table {t}, keeping every row from both sides"],
        CROSS: ["Ghép mọi dòng với mọi dòng của bảng {t}", "Pair every row with every row of the table {t}"],
      };
      const base = P(KJ[kind]).replace("{t}", tn);
      return { text: cond ? P([`${base}, khớp khi ${cond}`, `${base}, matching when ${cond}`]) : base, start };
    }
    if (u === "ON") { pos++; const oe = orExpr(); return { text: P([`Điều kiện khớp: ${oe}`, `Matching condition: ${oe}`]), start }; }
    if (u === "CREATE") {
      pos++;
      const what = up(cur()); pos++;
      if (what === "TABLE" || what === "VIEW" || what === "INDEX" || what === "UNIQUE" || what === "OR") {
        if (what === "UNIQUE" || what === "OR") while (!["TABLE", "VIEW", "INDEX"].includes(up(cur())) && pos < src.length) pos++;
        const kind = what === "UNIQUE" || what === "OR" ? up(cur()) : what;
        if (what === "UNIQUE" || what === "OR") pos++;
        while (isW("IF") || isW("NOT") || isW("EXISTS") || isW("REPLACE")) pos++;
        const nm = cur()?.v; pos++;
        if (kind === "INDEX") {
          if (isW("ON")) { pos++; const tb = cur()?.v; pos++; let cols = ""; if (isO("(")) { pos++; const l: string[] = []; while (!isO(")") && pos < src.length) { if (!isO(",")) l.push(cur().v); pos++; } pos++; cols = l.join(", "); } return { text: P([`Tạo chỉ mục ${nm} trên cột ${cols} của bảng ${tb} để tìm nhanh hơn (kết quả không đổi)`, `Create the index ${nm} on column ${cols} of ${tb} so lookups are faster (results do not change)`]), start }; }
        }
        if (kind === "VIEW") { if (isW("AS")) pos++; return { text: P([`Tạo view ${nm}: một truy vấn được lưu tên, không sao chép dữ liệu`, `Create the view ${nm}: a saved, named query that does not copy data`]), start }; }
        let cols = "";
        if (isO("(")) {
          pos++;
          const l: string[] = [];
          let depth = 1;
          let item: string[] = [];
          while (pos < src.length && depth > 0) {
            if (isO("(")) depth++;
            else if (isO(")")) { depth--; if (depth === 0) break; }
            if (depth === 1 && isO(",")) { l.push(item.join(" ")); item = []; pos++; continue; }
            item.push(cur().v);
            pos++;
          }
          if (item.length) l.push(item.join(" "));
          pos++;
          cols = l.map((x) => {
            const w = x.split(" ");
            const extra = /PRIMARY KEY/i.test(x) ? P([" (khóa chính: duy nhất, không trống)", " (primary key: unique, never empty)"]) : /NOT NULL/i.test(x) ? P([" (không được trống)", " (cannot be empty)"]) : "";
            return /^(PRIMARY|FOREIGN|UNIQUE|CONSTRAINT)/i.test(w[0]) ? x : `${w[0]} ${P(["kiểu", "type"])} ${w[1] ?? ""}${extra}`;
          }).join("; ");
        }
        if (isW("AS")) { pos++; return { text: P([`Tạo bảng ${nm} từ kết quả của truy vấn sau`, `Create the table ${nm} from the result of the query below`]), start }; }
        return { text: P([`Tạo bảng ${nm}${cols ? ` gồm các cột: ${cols}` : ""}`, `Create the table ${nm}${cols ? ` with columns: ${cols}` : ""}`]), start };
      }
    }
    if (u === "ALTER") { pos++; const rest: string[] = []; while (pos < src.length && !isO(";")) { rest.push(cur().v); pos++; } return { text: P([`Sửa khung bảng: ${rest.join(" ")}`, `Change the table frame: ${rest.join(" ")}`]), start }; }
    if (u === "DROP") { pos++; const rest: string[] = []; while (pos < src.length && !isO(";")) { rest.push(cur().v); pos++; } return { text: P([`Xóa hẳn: ${rest.join(" ")} (không hoàn tác được)`, `Delete for good: ${rest.join(" ")} (cannot be undone)`]), start }; }
    if (u === "INSERT") { pos++; if (isW("INTO")) pos++; const tb = cur()?.v; pos++; while (pos < src.length && !isO(";")) pos++; return { text: P([`Thêm dòng mới vào bảng ${tb}`, `Add new rows to the table ${tb}`]), start }; }
    if (u === "UPDATE" || u === "DELETE") dml = true;
    if (u === "SELECT") dml = false;
    if (u === "UPDATE") { pos++; const tb = cur()?.v; pos++; return { text: P([`Sửa dữ liệu trong bảng ${tb}`, `Edit data in the table ${tb}`]), start }; }
    if (u === "SET") { pos++; const l: string[] = []; for (;;) { const c = cur()?.v; pos++; if (isO("=")) pos++; l.push(`${c} = ${addExpr()}`); if (isO(",")) { pos++; continue; } break; } return { text: P([`Đặt: ${l.join("; ")}`, `Set: ${l.join("; ")}`]), start }; }
    if (u === "DELETE") { pos++; if (isW("FROM")) pos++; const tb = cur()?.v; pos++; return { text: P([`Xóa dòng khỏi bảng ${tb}`, `Delete rows from the table ${tb}`]), start }; }
    if (u === "USE") { pos++; const db = cur()?.v; pos++; return { text: P([`Chọn cơ sở dữ liệu ${db} để các câu lệnh sau làm việc trên đó`, `Pick the database ${db} for the statements that follow`]), start }; }
    if (u === "CALL") { pos++; const nm = cur()?.v; pos++; let a: string[] = []; if (isO("(")) { pos++; a = argsOf(); } return { text: P([`Gọi thủ tục đã lưu sẵn ${nm}${a.length ? ` với ${a.join(", ")}` : ""}`, `Call the stored procedure ${nm}${a.length ? ` with ${a.join(", ")}` : ""}`]), start }; }
    if (u === "FOREIGN") { pos += 2; let col = ""; if (isO("(")) { pos++; col = cur().v; pos += 2; } let ref = ""; if (isW("REFERENCES")) { pos++; ref = cur()?.v ?? ""; pos++; let rc = ""; if (isO("(")) { pos++; rc = cur().v; pos += 2; } ref = `${ref}${rc ? `(${rc})` : ""}`; } return { text: P([`Khóa ngoại: cột ${col} phải trỏ tới một giá trị có thật trong ${ref}`, `Foreign key: column ${col} must point at a real value in ${ref}`]), start }; }
    if (u === "PRIMARY") { pos += 2; let col = ""; if (isO("(")) { pos++; col = cur().v; pos += 2; } return { text: P([`Khóa chính: cột ${col} duy nhất và không trống`, `Primary key: column ${col} is unique and never empty`]), start }; }
    if (u === "PARTITION") { pos += 2; const l = addExpr(); return { text: P([`Chia theo ${l}`, `Partition by ${l}`]), start }; }
    // biểu thức tự do (ví dụ RANK() OVER (...), một điều kiện)
    const e = orExpr();
    if (isW("AS")) { pos++; pos++; }
    if (pos === start) pos++;
    const asWord = "";
    return { text: P([`Biểu thức: ${e}${asWord}`, `Expression: ${e}${asWord}`]), start };
  }

  const rows: Row[] = [];
  src = toks;
  pos = 0;
  while (pos < src.length) {
    const r = oneClause();
    if (!r) continue;
    const s = src[r.start].s;
    const e = src[Math.max(r.start, pos - 1)].e;
    rows.push({ code: code.slice(s, e), text: r.text.replace(/\s+/g, " ").replace(/[.;]*$/, "") + "." });
  }
  if (!rows.length) return null;
  const summary = lg === "vi"
    ? `Đây là một câu truy vấn SQL: máy đọc theo thứ tự FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT, không phải thứ tự bạn viết. ${rows.length > 1 ? `Có ${rows.length} bước, đọc từng bước bên dưới.` : ""}`
    : `This is a SQL query: the engine reads it as FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT, not in the order you write it. ${rows.length > 1 ? `There are ${rows.length} steps, read below.` : ""}`;
  return { lang: "SQL", summary: summary.trim(), rows };
}
