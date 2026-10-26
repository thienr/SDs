import type { Explained, Lg, Row, Tpl } from "./tpl";

type T = { k: "n" | "s" | "r" | "w" | "o"; v: string };

function lexXl(src: string): T[] {
  const out: T[] = [];
  let i = 0;
  const n = src.length;
  while (i < n) {
    const c = src[i];
    if (/\s/.test(c)) { i++; continue; }
    if (c === '"') {
      let j = i + 1; let v = "";
      while (j < n) { if (src[j] === '"') { if (src[j + 1] === '"') { v += '"'; j += 2; continue; } break; } v += src[j++]; }
      out.push({ k: "s", v });
      i = j + 1;
      continue;
    }
    const ref = /^(?:'[^']+'!|[A-Za-z_][\w.]*!)?\$?[A-Za-z]{1,3}\$?[0-9]+(?::\$?[A-Za-z]{1,3}\$?[0-9]+)?(?![\w(])|^(?:'[^']+'!|[A-Za-z_][\w.]*!)?\$?[A-Za-z]{1,3}:\$?[A-Za-z]{1,3}(?![\w(])|^(?:'[^']+'!|[A-Za-z_][\w.]*!)?\$?[0-9]+:\$?[0-9]+(?![\w(])/.exec(src.slice(i));
    if (ref) { out.push({ k: "r", v: ref[0] }); i += ref[0].length; continue; }
    if (/[0-9.]/.test(c) && /^[0-9]*\.?[0-9]+(?:[eE][+-]?[0-9]+)?%?/.test(src.slice(i))) {
      const m = /^[0-9]*\.?[0-9]+(?:[eE][+-]?[0-9]+)?%?/.exec(src.slice(i))!;
      out.push({ k: "n", v: m[0] });
      i += m[0].length;
      continue;
    }
    if (/[A-Za-z_\u0080-￿]/.test(c)) {
      const m = /^[A-Za-z_\u0080-￿][\w.\u0080-￿]*/.exec(src.slice(i))!;
      out.push({ k: "w", v: m[0] });
      i += m[0].length;
      continue;
    }
    const two = src.slice(i, i + 2);
    if (["<=", ">=", "<>"].includes(two)) { out.push({ k: "o", v: two }); i += 2; continue; }
    out.push({ k: "o", v: c });
    i++;
  }
  return out;
}

const FN: Record<string, Tpl> = {
  SUM: ["tổng của {all}", "the sum of {all}"],
  AVERAGE: ["trung bình của {all}", "the average of {all}"],
  COUNT: ["số ô chứa số trong {all}", "the number of numeric cells in {all}"],
  COUNTA: ["số ô không trống trong {all}", "the number of non-empty cells in {all}"],
  COUNTBLANK: ["số ô trống trong {0}", "the number of blank cells in {0}"],
  COUNTIF: ["số ô trong {0} thỏa điều kiện {1}", "the number of cells in {0} that meet {1}"],
  COUNTIFS: ["số dòng thỏa đồng thời mọi cặp (vùng, điều kiện): {all}", "the number of rows meeting every (range, condition) pair: {all}"],
  SUMIF: ["tổng của {2|chính vùng đó} cho các dòng mà {0} thỏa {1}", "the sum of {2|that same range} for rows where {0} meets {1}"],
  SUMIFS: ["tổng của {0} cho các dòng thỏa mọi cặp (vùng, điều kiện) còn lại", "the sum of {0} for rows meeting every remaining (range, condition) pair"],
  AVERAGEIF: ["trung bình của {2|chính vùng đó} cho các dòng mà {0} thỏa {1}", "the average of {2|that same range} for rows where {0} meets {1}"],
  MAX: ["giá trị lớn nhất trong {all}", "the largest value in {all}"],
  MIN: ["giá trị nhỏ nhất trong {all}", "the smallest value in {all}"],
  MEDIAN: ["trung vị của {all}", "the median of {all}"],
  STDEV: ["độ lệch chuẩn của {all}", "the standard deviation of {all}"],
  "STDEV.S": ["độ lệch chuẩn mẫu của {all}", "the sample standard deviation of {all}"],
  ROUND: ["{0} làm tròn {1} chữ số thập phân", "{0} rounded to {1} decimals"],
  ROUNDUP: ["{0} làm tròn lên {1} chữ số", "{0} rounded up to {1} decimals"],
  ROUNDDOWN: ["{0} làm tròn xuống {1} chữ số", "{0} rounded down to {1} decimals"],
  ABS: ["giá trị tuyệt đối của {0}", "the absolute value of {0}"],
  SQRT: ["căn bậc hai của {0}", "the square root of {0}"],
  POWER: ["{0} lũy thừa {1}", "{0} to the power {1}"],
  MOD: ["{0} chia lấy dư cho {1}", "{0} modulo {1}"],
  INT: ["phần nguyên của {0}", "the whole part of {0}"],
  IF: ["nếu {0} thì {1}, ngược lại {2|để FALSE}", "if {0} then {1}, otherwise {2|FALSE}"],
  IFERROR: ["{0}; nếu ra lỗi thì thay bằng {1}", "{0}; if it errors, use {1} instead"],
  IFS: ["kiểm tra lần lượt từng cặp (điều kiện, kết quả): {all}", "test each (condition, result) pair in turn: {all}"],
  AND: ["tất cả đều đúng: {all}", "all of these are true: {all}"],
  OR: ["ít nhất một điều kiện đúng: {all}", "at least one of these is true: {all}"],
  NOT: ["ngược lại của {0}", "the opposite of {0}"],
  ISBLANK: ["{0} có đang trống", "whether {0} is blank"],
  ISNUMBER: ["{0} có phải là số", "whether {0} is a number"],
  ISTEXT: ["{0} có phải là chữ", "whether {0} is text"],
  ISERROR: ["{0} có phải là lỗi", "whether {0} is an error"],
  ISNA: ["{0} có phải là lỗi #N/A", "whether {0} is the #N/A error"],
  VLOOKUP: ["tìm {0} ở cột đầu của {1}, rồi lấy giá trị ở cột thứ {2} cùng dòng ({3|mặc định: tìm gần đúng, bảng phải sắp xếp tăng dần})", "look up {0} in the first column of {1}, then take the value in column {2} of that row ({3|default: approximate match, table must be sorted ascending})"],
  HLOOKUP: ["tìm {0} ở hàng đầu của {1}, rồi lấy giá trị ở hàng thứ {2} cùng cột", "look up {0} in the first row of {1}, then take the value in row {2} of that column"],
  XLOOKUP: ["tìm {0} trong {1} rồi lấy giá trị cùng vị trí trong {2}[; không thấy thì {3}]", "find {0} in {1} and return the value at the same position in {2}[; if not found, {3}]"],
  INDEX: ["ô ở hàng thứ {1}[ và cột thứ {2}] của {0}", "the cell at row {1}[ and column {2}] of {0}"],
  MATCH: ["vị trí của {0} trong {1} ({2|mặc định: khớp gần đúng})", "the position of {0} in {1} ({2|default: approximate match})"],
  LEFT: ["{0|ô} lấy {1|1} ký tự đầu", "the first {1|1} character(s) of {0|the cell}"],
  RIGHT: ["{0|ô} lấy {1|1} ký tự cuối", "the last {1|1} character(s) of {0|the cell}"],
  MID: ["{0} lấy {2} ký tự bắt đầu từ ký tự thứ {1}", "{2} characters of {0} starting at character {1}"],
  LEN: ["số ký tự của {0}", "the number of characters in {0}"],
  TRIM: ["{0} bỏ khoảng trắng thừa", "{0} without extra spaces"],
  UPPER: ["{0} viết hoa", "{0} in capitals"],
  LOWER: ["{0} viết thường", "{0} in lowercase"],
  PROPER: ["{0} viết hoa chữ cái đầu mỗi từ", "{0} with each word capitalised"],
  TEXT: ["{0} hiển thị thành chữ theo khuôn {1}", "{0} displayed as text in the format {1}"],
  VALUE: ["{0} đổi từ chữ sang số", "{0} converted from text to a number"],
  CONCATENATE: ["nối chữ: {all}", "joined text: {all}"],
  CONCAT: ["nối chữ: {all}", "joined text: {all}"],
  TEXTJOIN: ["nối chữ bằng dấu {0}: {all}", "join text with {0}: {all}"],
  SUBSTITUTE: ["{0} với {1} được thay bằng {2}", "{0} with {1} replaced by {2}"],
  FIND: ["vị trí của {0} trong {1} (phân biệt hoa thường)", "the position of {0} in {1} (case-sensitive)"],
  SEARCH: ["vị trí của {0} trong {1}", "the position of {0} in {1}"],
  DATE: ["ngày {2}/{1}/{0}", "the date {2}/{1}/{0}"],
  TODAY: ["ngày hôm nay", "today's date"],
  NOW: ["thời điểm hiện tại", "the current date and time"],
  YEAR: ["năm của {0}", "the year of {0}"],
  MONTH: ["tháng của {0}", "the month of {0}"],
  DAY: ["ngày trong tháng của {0}", "the day of the month of {0}"],
  WEEKDAY: ["thứ trong tuần của {0}", "the weekday of {0}"],
  DATEDIF: ["số {2} giữa {0} và {1}", "the number of {2} between {0} and {1}"],
  RANK: ["thứ hạng của {0} trong {1}", "the rank of {0} within {1}"],
  LARGE: ["giá trị lớn thứ {1} của {0}", "the {1}th largest value in {0}"],
  SMALL: ["giá trị nhỏ thứ {1} của {0}", "the {1}th smallest value in {0}"],
  SUMPRODUCT: ["tổng các tích nhân từng cặp ô của {all}", "the sum of the products of each pair of cells in {all}"],
  CORREL: ["hệ số tương quan giữa {0} và {1}", "the correlation between {0} and {1}"],
  SLOPE: ["độ dốc đường hồi quy của {0} theo {1}", "the regression slope of {0} on {1}"],
  INTERCEPT: ["hệ số chặn đường hồi quy của {0} theo {1}", "the regression intercept of {0} on {1}"],
  RAND: ["số ngẫu nhiên từ 0 đến 1", "a random number from 0 to 1"],
  ROW: ["số dòng của {0|ô hiện tại}", "the row number of {0|the current cell}"],
  COLUMN: ["số cột của {0|ô hiện tại}", "the column number of {0|the current cell}"],
  OFFSET: ["vùng dịch từ {0} xuống {1} dòng, sang {2} cột", "the range shifted from {0} by {1} rows and {2} columns"],
  INDIRECT: ["vùng có địa chỉ ghi trong {0}", "the range whose address is written in {0}"],
  FILTER: ["các dòng của {0} thỏa {1}", "the rows of {0} that meet {1}"],
  UNIQUE: ["các giá trị khác nhau của {0}", "the distinct values of {0}"],
  SORT: ["{0} đã sắp xếp", "{0} sorted"],
  DIVIDE: ["{0} chia {1}", "{0} divided by {1}"],
  COUNTROWS: ["số dòng của bảng {0}", "the number of rows in the table {0}"],
  DISTINCTCOUNT: ["số giá trị khác nhau của {0}", "the number of distinct values of {0}"],
  CALCULATE: ["{0}, tính lại trong bối cảnh đã lọc theo {1}", "{0}, recomputed in the context filtered by {1}"],
};

export function explainExcel(code: string, lg: Lg): Explained {
  const i = lg === "vi" ? 0 : 1;
  const P = (t: Tpl) => t[i];
  let src: T[] = [];
  let pos = 0;
  const cur = () => src[pos];
  const isO = (v: string) => cur()?.k === "o" && cur().v === v;
  const OPN: Record<string, Tpl> = { "=": ["bằng", "equals"], "<>": ["khác", "differs from"], ">": ["lớn hơn", "is greater than"], "<": ["nhỏ hơn", "is less than"], ">=": ["lớn hơn hoặc bằng", "is at least"], "<=": ["nhỏ hơn hoặc bằng", "is at most"] };
  const ARI: Record<string, Tpl> = { "+": ["cộng", "plus"], "-": ["trừ", "minus"], "*": ["nhân", "times"], "/": ["chia", "divided by"], "^": ["lũy thừa", "to the power"], "&": ["nối chữ với", "joined with"] };

  const refText = (v: string): string => {
    const bang = v.lastIndexOf("!");
    const sheet = bang >= 0 ? v.slice(0, bang).replace(/'/g, "") : "";
    const r = (bang >= 0 ? v.slice(bang + 1) : v).replace(/\$/g, "");
    const pre = sheet ? P([`sheet ${sheet}, `, `sheet ${sheet}, `]) : "";
    if (/^[A-Za-z]+:[A-Za-z]+$/.test(r)) {
      const [a, b] = r.toUpperCase().split(":");
      return a === b ? `${pre}${P(["cả cột", "whole column"])} ${a}` : `${pre}${P(["các cột", "columns"])} ${a} ${P(["đến", "to"])} ${b}`;
    }
    if (/^[0-9]+:[0-9]+$/.test(r)) return `${pre}${P(["cả dòng", "whole row"])} ${r}`;
    if (r.includes(":")) return `${pre}${P(["vùng", "range"])} ${r.toUpperCase()}`;
    return `${pre}${P(["ô", "cell"])} ${r.toUpperCase()}`;
  };
  const argsOf = (): string[] => {
    const out: string[] = [];
    if (isO(")")) { pos++; return out; }
    for (;;) {
      if (isO(",") || isO(";")) { out.push(P(["(bỏ trống)", "(left out)"])); pos++; continue; }
      const st = pos;
      const piece = cmp();
      out.push(src[st]?.k === "w" && src[st + 1]?.v === "(" ? `(${piece})` : piece);
      if (isO(",") || isO(";")) { pos++; if (isO(")")) { pos++; break; } continue; }
      break;
    }
    if (isO(")")) pos++;
    return out;
  };
  const atom = (): string => {
    const t = cur();
    if (!t) return "";
    pos++;
    if (t.k === "n") return t.v.endsWith("%") ? t.v : t.v;
    if (t.k === "s") return `«${t.v}»`;
    if (t.k === "r") return refText(t.v);
    if (t.k === "o") {
      if (t.v === "(") { const e = cmp(); if (isO(")")) pos++; return e; }
      if (t.v === "-") return `−${atom()}`;
      if (t.v === "{") { const l: string[] = []; while (!isO("}") && pos < src.length) { if (!isO(",") && !isO(";")) l.push(src[pos].v); pos++; } pos++; return `{${l.join(", ")}}`; }
      return t.v;
    }
    const name = t.v;
    const NAME = name.toUpperCase();
    if (isO("[") && !FN[NAME]) {
      pos++;
      const col = cur()?.v ?? "";
      pos++;
      if (isO("]")) pos++;
      return P([`cột ${col} của bảng ${name}`, `column ${col} of the table ${name}`]);
    }
    if (isO("(")) {
      pos++;
      const a = argsOf();
      const tpl = FN[NAME];
      if (!tpl) return P([`kết quả của hàm ${name}${a.length ? ` với ${a.join(", ")}` : ""}`, `the result of ${name}${a.length ? ` with ${a.join(", ")}` : ""}`]);
      if (NAME === "VLOOKUP" || NAME === "HLOOKUP") { if (a[3] === P(["sai", "false"]) || a[3] === "0") a[3] = P(["khớp chính xác", "exact match"]); else if (a[3] === P(["đúng", "true"]) || a[3] === "1") a[3] = P(["khớp gần đúng, bảng phải sắp xếp tăng dần", "approximate match, table must be sorted ascending"]); }
      if (NAME === "MATCH" && a[2] !== undefined) a[2] = a[2] === "0" ? P(["khớp chính xác", "exact match"]) : a[2] === "1" ? P(["khớp gần đúng: giá trị lớn nhất không vượt quá", "approximate: largest value not above"]) : a[2] === "-1" ? P(["khớp gần đúng: giá trị nhỏ nhất không nhỏ hơn", "approximate: smallest value not below"]) : a[2];
      let s = P(tpl).replace(/\{all\}/g, a.join(", "));
      s = s.replace(/\[([^[\]]*)\]/g, (_m, inner: string) => {
        let miss = false;
        const r = inner.replace(/\{(\d)(?:\|([^}]*))?\}/g, (_x, k: string, d?: string) => { const v = a[+k]; if (v !== undefined) return v; if (d !== undefined) return d; miss = true; return ""; });
        return miss ? "" : r;
      });
      s = s.replace(/\{(\d)(?:\|([^}]*))?\}/g, (_m, k: string, d?: string) => a[+k] ?? d ?? "");
      return s.replace(/\s+/g, " ").replace(/\s+,/g, ",").trim();
    }
    if (NAME === "TRUE") return P(["đúng", "true"]);
    if (NAME === "FALSE") return P(["sai", "false"]);
    return P([`tên ${name}`, `the name ${name}`]);
  };
  const pct = (): string => { let a = atom(); while (isO("%")) { pos++; a += "%"; } return a; };
  const pow = (): string => { let l = pct(); while (isO("^")) { pos++; l = `${l} ${P(ARI["^"])} ${pct()}`; } return l; };
  const mul = (): string => { let l = pow(); while (isO("*") || isO("/")) { const op = cur().v; pos++; l = `${l} ${P(ARI[op])} ${pow()}`; } return l; };
  const add = (): string => { let l = mul(); while (isO("+") || isO("-")) { const op = cur().v; pos++; l = `${l} ${P(ARI[op])} ${mul()}`; } return l; };
  const cat = (): string => { let l = add(); while (isO("&")) { pos++; l = `${l} ${P(ARI["&"])} ${add()}`; } return l; };
  const cmp = (): string => {
    const l = cat();
    if (cur()?.k === "o" && OPN[cur().v]) { const op = cur().v; pos++; return `${l} ${P(OPN[op])} ${cat()}`; }
    return l;
  };

  const rows: Row[] = [];
  const lines = code.replace(/\r/g, "").split("\n");
  for (const raw of lines) {
    if (!raw.trim()) continue;
    const m = /^(.*?)(?:\s+(?:→|->|=>|\/\/)\s*(.*))?$/.exec(raw);
    const body = (m?.[1] ?? raw).trim();
    const note = (m?.[2] ?? "").trim();
    if (!/^=/.test(body) && /^[A-Z][A-Z0-9_.]*\(/.test(body)) {
      src = lexXl(body);
      pos = 0;
      let text2 = "";
      try { text2 = cmp(); if (pos < src.length) throw new Error("rest"); } catch { text2 = ""; }
      if (text2) { rows.push({ code: raw, text: P([`Tính ra ${text2}${note ? `; kết quả mẫu ${note}` : ""}.`, `Computes ${text2}${note ? `; sample result ${note}` : ""}.`]) }); continue; }
    }
    if (!/^=/.test(body)) {
      if (/^[A-Za-zÀ-ỹ0-9'"].*/.test(body) && !body.includes("(")) {
        rows.push({ code: raw, text: P([`Giá trị bạn gõ vào ô: ${body}${note ? ` (${note})` : ""}.`, `A value you type into a cell: ${body}${note ? ` (${note})` : ""}.`]) });
      } else rows.push({ code: raw, text: P([`Dòng ghi chú hoặc kết quả: ${body}`, `A note or a result: ${body}`]), kind: "note" });
      continue;
    }
    src = lexXl(body.slice(1));
    pos = 0;
    let text = "";
    try {
      text = cmp();
      if (pos < src.length) throw new Error("rest");
    } catch {
      rows.push({ code: raw, text: P(["Dòng giải thích bằng chữ, không phải một công thức đầy đủ.", "A line of prose, not a complete formula."]), kind: "note" });
      continue;
    }
    const first = text.charAt(0).toUpperCase() + text.slice(1);
    rows.push({ code: raw, text: P([`Ô tính ra ${text}${note ? `; kết quả mẫu ${note}` : ""}.`, `The cell shows ${text}${note ? `; sample result ${note}` : ""}.`]) });
    void first;
  }
  if (!rows.length) return null;
  const summary = lg === "vi"
    ? `Công thức Excel luôn bắt đầu bằng dấu =. Excel tính từ phần trong ngoặc ra ngoài, rồi hiện kết quả trong ô.`
    : `An Excel formula always starts with =. Excel works from the innermost brackets outwards and shows the result in the cell.`;
  return { lang: "Excel", summary, rows };
}
