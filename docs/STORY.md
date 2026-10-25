# Câu chuyện xuyên suốt: Lotus Spa

Mọi mục «Làm từng bước với số thật» (`src/data/walk/*.ts`) nằm trong **một câu chuyện liền mạch** theo thứ tự giáo trình. Người học đóng vai **bạn**, nhà phân tích mới vào làm. Khái niệm sau tiếp nối kết quả của khái niệm trước. Viết thêm ví dụ mới thì phải theo bảng dưới.

## Nhân vật và bối cảnh
- **Lotus Spa**: chuỗi spa 3 chi nhánh: **Quận 1, Quận 3, Thủ Đức**. Khoảng **1000 hội viên**.
- **Chị Lan**: chủ chuỗi, người ra quyết định.
- **Thảo**: phụ trách marketing, chạy quảng cáo.
- **Bạn**: nhà phân tích.
- Gói dịch vụ: **60 phút**, **90 phút có đá nóng**, **ghế massage**.

## Bảng số cố định (không đổi giữa các ví dụ)
| Mục | Giá trị |
|---|---|
| Phiên truy cập web mỗi tuần | 4.500, tỷ lệ gửi form 1,1%, ≈ 50 form/tuần |
| Form tháng 11 / tháng 12 | 220 / 180 (giảm 18%) |
| Chi quảng cáo mỗi tuần (triệu) | GDN 6, Meta 5, TikTok 4, tổng 15 |
| Form mỗi tuần theo kênh | GDN 18, Meta 20, TikTok 12, tổng 50 |
| Chi phí mỗi form (CPA) | GDN ≈ 333 nghìn, Meta 250 nghìn, TikTok ≈ 333 nghìn |
| Click mỗi tuần theo kênh | GDN 900, Meta 800, TikTok 800 (tỷ lệ form 2,0%; 2,5%; 1,5%) |
| 36 tuần dữ liệu | trung bình 50 form/tuần, độ lệch chuẩn 12 |
| Hội viên sắp rời | 5% (≈ 50 trong 1000), công cụ cảnh báo bắt đúng 90%, báo nhầm 8% |
| Tệp quảng cáo 12 tuần | TikTok tuần 5 để trống chi phí |

## Dòng thời gian
1. **Tháng 1 (C0):** chị Lan giao việc: «form tháng 12 giảm, xem giúp chị». Hiểu việc, Excel.
2. **Tháng 2 (C1):** chuyển sang Python cho 36 tuần dữ liệu.
3. **Tháng 3 (Toán, mô tả, C2 phần 1):** mô tả dữ liệu, xác suất, lấy mẫu, khoảng tin cậy.
4. **Tháng 4 (C2 phần 2):** kiểm định (trang đích mới), hồi quy chi tiêu → form, SQL.
5. **Tháng 5–6 (C3):** dự đoán hội viên rời, phân nhóm khách, đo mô hình.
6. **Tháng 7–8 (C4):** mô hình mạnh hơn, dự báo chuỗi thời gian, văn bản.
7. **Tháng 9–10 (C5):** vẽ biểu đồ, kể chuyện cho chị Lan.
8. **Tháng 11 (C6):** yêu cầu nghiệp vụ, GenAI, tối ưu ngân sách.
9. **Tháng 12 (C7):** tổng kết cả năm.

## Quy tắc viết một mục
- Có `story`: 1 đến 2 câu nói **đang ở đâu trong câu chuyện** và nối với kết quả trước đó.
- Ví dụ dùng số của bảng trên khi liên quan; số mới phải chia hết gọn, tự tính lại được bằng tay.
- Mọi thuật ngữ giải nghĩa ở `words`. Mỗi bước tính ghi rõ phép tính.
- Có tiếng Việt và tiếng Anh, nghĩa như nhau.
