import { explainSql } from "./sql";
import type { Explained, Lg, Row } from "./tpl";

/** Lệnh terminal hay gặp (git, pip, cd…). */
export function explainShell(code: string, lg: Lg): Explained {
  const vi = lg === "vi";
  const rows: Row[] = [];
  for (const raw of code.replace(/\r/g, "").split("\n")) {
    if (!raw.trim()) continue;
    const t = raw.replace(/\s+#.*$/, "").trim();
    if (t.startsWith("#")) { rows.push({ code: raw, text: vi ? `Ghi chú: ${t.slice(1).trim()}` : `Comment: ${t.slice(1).trim()}`, kind: "note" }); continue; }
    const parts = t.split(/\s*&&\s*/);
    const said = parts.map((c) => sayShell(c.trim(), vi));
    rows.push({ code: raw, text: said.join(vi ? "; rồi " : "; then ") + "." });
  }
  if (!rows.length) return null;
  return { lang: "Shell", summary: vi ? "Các lệnh gõ trong cửa sổ dòng lệnh (terminal), chạy lần lượt từ trên xuống." : "Commands typed in the terminal, run one after another.", rows };
}

function sayShell(c: string, vi: boolean): string {
  const w = c.split(/\s+/);
  const a = w.slice(1);
  const P = (v: string, e: string) => (vi ? v : e);
  switch (w[0]) {
    case "cd": return P(`Đi vào thư mục ${a[0]}`, `Move into the folder ${a[0]}`);
    case "ls": return P("Liệt kê file trong thư mục hiện tại", "List the files in this folder");
    case "mkdir": return P(`Tạo thư mục ${a[0]}`, `Create the folder ${a[0]}`);
    case "pip": case "pip3": return P(`Cài thư viện Python: ${a.slice(1).join(" ")}`, `Install the Python library: ${a.slice(1).join(" ")}`);
    case "python": case "python3": return P(`Chạy file Python ${a[0]}`, `Run the Python file ${a[0]}`);
    case "npm": case "npx": return P(`Chạy lệnh Node: ${a.join(" ")}`, `Run a Node command: ${a.join(" ")}`);
    case "git": {
      const g = a[0];
      const rest = a.slice(1);
      if (g === "clone") return P(`Tải về máy một bản sao của kho code ${rest[0]}`, `Download a copy of the repository ${rest[0]}`);
      if (g === "init") return P("Biến thư mục này thành một kho git mới", "Turn this folder into a new git repository");
      if (g === "add") return P(`Đánh dấu ${rest.join(" ") === "." ? "mọi thay đổi" : rest.join(" ")} để đưa vào lần lưu kế tiếp`, `Stage ${rest.join(" ") === "." ? "every change" : rest.join(" ")} for the next save`);
      if (g === "commit") { const m = /-m\s+["'](.*)["']/.exec(c); return P(`Lưu một mốc (commit) các thay đổi đã đánh dấu${m ? `, ghi chú «${m[1]}»` : ""}`, `Save a commit of the staged changes${m ? `, message “${m[1]}”` : ""}`); }
      if (g === "push") return P(`Đẩy các commit lên GitHub${rest.length ? ` (${rest.filter((x) => !x.startsWith("-")).join(" ")})` : ""}`, `Push the commits to GitHub${rest.length ? ` (${rest.filter((x) => !x.startsWith("-")).join(" ")})` : ""}`);
      if (g === "pull") return P("Kéo thay đổi mới từ GitHub về", "Pull new changes from GitHub");
      if (g === "checkout" || g === "switch") return rest[0] === "-b" ? P(`Tạo nhánh mới ${rest[1]} rồi chuyển sang nhánh đó`, `Create the branch ${rest[1]} and switch to it`) : P(`Chuyển sang nhánh ${rest[0]}`, `Switch to the branch ${rest[0]}`);
      if (g === "remote") return P(`Khai báo nơi đặt kho từ xa: ${rest.slice(1).join(" ")}`, `Register the remote location: ${rest.slice(1).join(" ")}`);
      if (g === "status") return P("Xem các file nào đã thay đổi", "See which files changed");
      if (g === "branch") return P("Xem hoặc tạo nhánh", "List or create branches");
      if (g === "merge") return P(`Gộp nhánh ${rest[0]} vào nhánh hiện tại`, `Merge ${rest[0]} into the current branch`);
      return P(`Lệnh git ${g}`, `The git command ${g}`);
    }
    default: return P(`Chạy lệnh ${c}`, `Run the command ${c}`);
  }
}

/** Công thức dạng IF … THEN … ELSEIF … END (Tableau, Power BI). Đổi sang CASE rồi nhờ bộ dịch SQL. */
export function explainCalc(code: string, lg: Lg): Explained {
  const vi = lg === "vi";
  const rows: Row[] = [];
  for (const raw of code.replace(/\r/g, "").split("\n")) {
    if (!raw.trim()) continue;
    if (raw.trim().startsWith("//")) { rows.push({ code: raw, text: vi ? `Ghi chú: ${raw.trim().replace(/^\/\/\s*/, "")}` : `Comment: ${raw.trim().replace(/^\/\/\s*/, "")}`, kind: "note" }); continue; }
    const sql = raw.replace(/\bELSEIF\b/gi, "WHEN").replace(/^\s*IF\b/i, "CASE WHEN").replace(/\bTHEN\b/gi, "THEN").replace(/\[([^\]]+)\]/g, "$1");
    const e = explainSql(`SELECT ${sql}`, lg);
    const t = e?.rows[0]?.text.replace(/^(Lấy ra|Select): /, "") ?? "";
    rows.push({ code: raw, text: t ? (vi ? `Cột tính ra: ${t}` : `Calculated field: ${t}`) : (vi ? "Công thức điều kiện." : "A conditional formula.") });
  }
  if (!rows.length) return null;
  return { lang: "SQL", summary: vi ? "Công thức tạo cột mới bằng điều kiện: kiểm tra từ trên xuống, nhánh đúng đầu tiên thắng." : "A formula that builds a new field from conditions: checked top-down, the first true branch wins.", rows };
}
