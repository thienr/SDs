import { createFileRoute } from "@tanstack/react-router";
import { apiEmpty } from "@/lib/api-cors";
import { handleSoMucGet, handleSoMucPost } from "@/lib/so-muc-api.server";

export const Route = createFileRoute("/api/so-muc")({
  server: {
    handlers: {
      GET: ({ request }) => handleSoMucGet(request),
      POST: ({ request }) => handleSoMucPost(request),
      OPTIONS: () => apiEmpty(204),
    },
  },
});
