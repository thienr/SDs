const CORS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, OPTIONS",
  "access-control-allow-headers": "content-type, authorization, accept, mcp-protocol-version, mcp-session-id",
  "access-control-expose-headers": "mcp-session-id",
  "cache-control": "no-store",
};

export function apiJson(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", ...CORS },
  });
}

export function apiEmpty(status = 204): Response {
  return new Response(null, { status, headers: CORS });
}

export function bearer(request: Request): string | null {
  const header = request.headers.get("authorization") ?? "";
  const match = /^Bearer\s+(\S+)/i.exec(header);
  return match?.[1] ?? null;
}
