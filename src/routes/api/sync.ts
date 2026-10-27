import { createFileRoute } from "@tanstack/react-router";
import { apiEmpty, apiJson } from "@/lib/api-cors";
import { syncExchange } from "@/lib/sync.server";

export const Route = createFileRoute("/api/sync")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const text = await request.text();
          if (text.length > 400_000) return apiJson({ error: "Dữ liệu quá lớn." }, 413);
          const body = JSON.parse(text) as { code?: unknown; data?: unknown };
          const res = await syncExchange(body.code, body.data ?? null);
          if (!res.ok) return apiJson({ error: res.error }, res.status);
          return apiJson({ data: res.data });
        } catch {
          return apiJson({ error: "Chưa đồng bộ được. Kiểm tra database của máy chủ." }, 500);
        }
      },
      OPTIONS: () => apiEmpty(204),
    },
  },
});
