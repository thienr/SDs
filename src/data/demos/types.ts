export type Cell = string | number | null;

/** Cách tô bảng. Chỉ số bắt đầu từ 0. */
export type Mark = {
  rows?: number[]; // dòng đang nói tới (vàng)
  cols?: number[]; // cột đang nói tới (vàng)
  cells?: [number, number][]; // ô đang nói tới (vàng đậm)
  dim?: number[]; // dòng bị loại hoặc bị gộp (mờ)
  add?: number[]; // dòng mới xuất hiện (xanh)
  addCols?: number[]; // cột mới xuất hiện (xanh)
  bad?: number[]; // dòng bị từ chối hoặc sai (đỏ)
};

export type Tbl = { name?: string; c: string[]; r: Cell[][]; m?: Mark };

export type Step = { vi: string; en: string; code?: string; t: Tbl[] };

export type Demo = Step[];

/** Viết gọn một bảng. */
export function T(name: string | undefined, c: string[], r: Cell[][], m?: Mark): Tbl {
  return { name, c, r, m };
}

/** Viết gọn một bước. */
export function S(vi: string, en: string, t: Tbl[], code?: string): Step {
  return { vi, en, code, t };
}
