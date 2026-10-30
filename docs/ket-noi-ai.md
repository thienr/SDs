# Nối Gemini hoặc Grok vào Sổ Mực

Địa chỉ MCP (chỉ cần phần đọc): `https://s-ds-navy.vercel.app/api/mcp`
Công cụ đọc: list_courses, outline, search_ideas, get_idea, get_heads, get_lesson.
Đừng cấu hình khóa nếu không muốn AI sửa thẻ (submit_edit cần khóa cầu nối).

## Gemini CLI
Lệnh: `gemini mcp add --transport http --scope user so-muc https://s-ds-navy.vercel.app/api/mcp`
Hoặc sửa `~/.gemini/settings.json`:
{ "mcpServers": { "so-muc": { "httpUrl": "https://s-ds-navy.vercel.app/api/mcp" } } }
Mở `gemini`, gõ `/mcp` xem so-muc đã nối chưa. Nhờ: «Dùng so-muc, hỏi mình 5 câu vấn đáp về khoảng tin cậy.»

## Grok (xAI API)
Thêm vào mảng `tools` của yêu cầu Responses API:
{ "type": "mcp", "server_url": "https://s-ds-navy.vercel.app/api/mcp", "server_label": "so-muc" }
Chỉ hỗ trợ Streamable HTTP và SSE.

## App Gemini/Grok trên web hoặc điện thoại
Chưa kiểm chứng có cho nối MCP tùy ý hay không. Dự phòng: dán nội dung thẻ lấy từ
`https://s-ds-navy.vercel.app/api/so-muc?what=idea&id=<id thẻ>&lang=vi` vào khung chat.

## Claude.ai và ChatGPT (đăng nhập bằng tài khoản có sẵn)
Claude.ai: Settings → Connectors → Add custom connector → dán `https://s-ds-navy.vercel.app/api/mcp`.
ChatGPT: Settings → Connectors (bật Developer mode nếu gói của bạn có) → thêm server MCP với địa chỉ trên.
Sau đó chat ngay trong app của họ, họ đọc thẻ Sổ Mực qua các công cụ list_courses, search_ideas, get_idea.
(Tên menu và gói được hỗ trợ có thể đã đổi, kiểm tra trong phần Trợ giúp của từng app.)
