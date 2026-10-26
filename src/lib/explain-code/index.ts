import { explainPython } from "./py";
import { explainSql } from "./sql";
import { explainExcel } from "./xl";
import { explainShell, explainCalc } from "./extra";
import type { Explained, Lg } from "./tpl";

export type { Explained, Row, Lg } from "./tpl";
export type CodeLang = "Python" | "SQL" | "Excel" | "Shell" | "Calc";

const SQL_START = /^\s*(SELECT|USE\s+\w+\s*;|CALL\s+\w+\s*\(|WITH|FROM|WHERE|GROUP\s+BY|ORDER\s+BY|HAVING|(?:LEFT|RIGHT|INNER|FULL|CROSS)?\s*JOIN|CREATE|INSERT|UPDATE|DELETE|ALTER|DROP|UNION|LIMIT|CASE|PARTITION\s+BY|FOREIGN\s+KEY|PRIMARY\s+KEY|WINDOW|(?:RANK|DENSE_RANK|ROW_NUMBER|NTILE)\s*\(|(?:SUM|AVG|COUNT|MIN|MAX|LAG|LEAD|FIRST_VALUE|LAST_VALUE)\s*\([^)]*\)\s*OVER|COALESCE\s*\(|DATE_TRUNC\s*\()/i;
const PY_TELL = /(^|\n)\s*(import |from \S+ import |def |print\(|for \w+ in |if .*:\s*$|\w+\s*=\s*[\w.]+\()|\bpd\.|\bnp\.|\bplt\.|\bdf\b/;

export function detectLang(code: string): CodeLang {
  const body = code.split("\n").filter((l) => l.trim() && !l.trim().startsWith("#") && !l.trim().startsWith("--"));
  if (!body.length) return "Python";
  if (body.every((l) => /^\s*(git|cd|ls|pip|pip3|python|python3|npm|npx|mkdir|cp|mv|rm|curl|conda|source|touch|cat|echo|code|open)\b/.test(l))) return "Shell";
  if (body.some((l) => /^\s*IF\b.*\bTHEN\b/i.test(l)) && !PY_TELL.test(code)) return "Calc";
  if (body.every((l) => /^\s*=/.test(l))) return "Excel";
  if (/^\s*=/.test(body[0])) return "Excel";
  if (body.every((l) => /^\s*[A-Z][A-Z0-9_.]*\(.*\)\s*(→.*)?$/.test(l)) && !body.some((l) => SQL_START.test(l))) return "Excel";
  if (PY_TELL.test(code)) return "Python";
  if (body.some((l) => SQL_START.test(l))) return "SQL";
  return "Python";
}

const cache = new Map<string, Explained>();

/** Dịch code ra «tiếng người». Trả null nếu chỉ có ghi chú (không có gì để dịch). */
export function explainCode(code: string, lg: Lg, hint?: string): Explained {
  if (code.split("\n").every((l) => !l.trim() || /^\s*(--|#|\/\/)/.test(l))) return null;
  const key = `${lg}|${hint ?? ""}|${code}`;
  if (cache.has(key)) return cache.get(key)!;
  const l: CodeLang = hint === "SQL" || hint === "Excel" || hint === "Python" ? hint : detectLang(code);
  let out: Explained = null;
  try {
    out = l === "SQL" ? explainSql(code, lg) : l === "Excel" ? explainExcel(code, lg) : l === "Shell" ? explainShell(code, lg) : l === "Calc" ? explainCalc(code, lg) : explainPython(code, lg);
  } catch {
    out = null;
  }
  cache.set(key, out);
  return out;
}
