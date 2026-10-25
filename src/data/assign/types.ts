/** Một ô của file starter, giữ nguyên nội dung và thứ tự. */
export type Cell = { t: "md" | "code"; s: string; ref?: string };
/** Hướng dẫn cho một mục của bài tập. Không thay đổi starter, chỉ đi kèm. */
export type Guide = {
  think: string;
  steps: string[];
  code: string;
  lotus: string;
  trap: string;
  /** Cách đọc kết quả: nhìn đâu trước, trục và cột nghĩa gì. */
  read?: string[];
  /** Nhận xét mẫu, có số thật. */
  remark?: string;
  /** Cách tự viết nhận xét: các bước từ số đến việc làm. */
  howRemark?: string[];
};
/** Kết quả chạy thật trên file dữ liệu của người học: code đã chạy, chữ in ra và ảnh biểu đồ. */
export type Result = { code: string; text: string; imgs: string[] };
export type Assignment = {
  id: string;
  course: string;
  /** Các thẻ khái niệm giữ chỗ (d-*) mà bài này thay thế nội dung. */
  concepts: string[];
  title: [string, string];
  file: string;
  /** Câu chuyện Lotus Spa nối với bài này. */
  story: [string, string];
  cells: Cell[];
  guides: Record<string, { vi: Guide; en: Guide }>;
  results?: Record<string, Result>;
};
