/** Mẫu câu hai ngôn ngữ. Dấu * ở đầu mẫu: câu mệnh lệnh (hành động), không phải cụm danh từ. */
export type Lg = "vi" | "en";
export type Tpl = [string, string];
export type Row = { code: string; text: string; steps?: string[]; kind?: "note" | "block" };
export type Explained = { lang: "Python" | "SQL" | "Excel" | "Shell"; summary: string; rows: Row[] } | null;

export type Ctx = { o?: string; pos: string[]; kw: Record<string, string> };

/**
 * {o} đối tượng; {0} tham số thứ 0; {by} tham số tên by; {0/by} thứ 0 hoặc tên by;
 * {x|mặc định}; [phần tùy chọn] bị bỏ nếu bên trong có {..} không có giá trị.
 */
export function fmt(tpl: string, c: Ctx): string {
  const get = (key: string): string | undefined => {
    if (key === "o") return c.o;
    for (const k of key.split("/")) {
      if (/^\d+$/.test(k)) { if (c.pos[+k] !== undefined) return c.pos[+k]; }
      else if (c.kw[k] !== undefined) return c.kw[k];
    }
    return undefined;
  };
  let miss = false;
  const sub = (s: string) =>
    s.replace(/\{([^}|]+)(?:\|([^}]*))?\}/g, (_m, key: string, def?: string) => {
      const v = get(key);
      if (v !== undefined) return v;
      if (def !== undefined) return def;
      miss = true;
      return "";
    });
  // phần tùy chọn
  const withOpt = tpl.replace(/\[([^[\]]*)\]/g, (_m, inner: string) => {
    miss = false;
    const r = sub(inner);
    return miss ? "" : r;
  });
  miss = false;
  return sub(withOpt).replace(/\s+/g, " ").replace(/\s+([,.;:])/g, "$1").trim();
}
