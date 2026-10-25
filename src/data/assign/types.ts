/** Một ô của file starter, giữ nguyên nội dung và thứ tự. */
export type Cell = { t: "md" | "code"; s: string; ref?: string };
/** Hướng dẫn cho một mục của bài tập. Không thay đổi starter, chỉ đi kèm. */
export type Guide = { think: string; steps: string[]; code: string; lotus: string; trap: string };
export type Assignment = {
  id: string;
  course: string;
  title: [string, string];
  file: string;
  /** Câu chuyện Lotus Spa nối với bài này. */
  story: [string, string];
  cells: Cell[];
  guides: Record<string, { vi: Guide; en: Guide }>;
};
