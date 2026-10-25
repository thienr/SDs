import { S, T, type Demo } from "./types";

const ads = (m = {}) => T("ads", ["week", "channel", "spend", "forms"], [[1, "GDN", 8, 24], [1, "TikTok", 6, 12], [2, "GDN", 10, 35], [2, "TikTok", 4, 9], [3, "GDN", 12, 30], [3, "TikTok", 7, 20]], m);

export const sqlDemos: Record<string, Demo> = {
  "sql-wh": [
    S("Bảng đang ghi đơn (nguồn). Hai đơn đang ở trạng thái new.", "The table that takes orders (the source). Two orders are new.", [T("orders", ["id", "status", "total"], [[1, "new", 200], [2, "new", 150]])]),
    S("Khi đơn 2 được trả tiền, nguồn ghi đè. Trạng thái cũ mất.", "When order 2 is paid, the source overwrites it. The old status is gone.", [T("orders", ["id", "status", "total"], [[1, "new", 200], [2, "paid", 150]], { cells: [[1, 1]] })], "UPDATE orders SET status = 'paid' WHERE id = 2;"),
    S("Kho dữ liệu chụp lại mỗi ngày và chỉ thêm dòng, nên còn cả lịch sử.", "The warehouse snapshots every day and only adds rows, so history stays.", [T("fact_order_daily", ["day", "id", "status"], [["Mon", 2, "new"], ["Tue", 2, "paid"]], { add: [1] })], "INSERT INTO fact_order_daily SELECT CURRENT_DATE, id, status FROM orders;"),
  ],
  "sql-star": [
    S("Ở giữa là bảng sự kiện: mỗi dòng là một lần có form. Nó chỉ giữ số và khóa.", "In the middle is the fact table: one row per form. It holds only numbers and keys.", [T("fact_form", ["form_id", "campaign_id", "channel_id", "forms"], [[1, 1, 1, 24], [2, 1, 2, 12], [3, 2, 1, 35]], { cols: [1, 2] })]),
    S("Xung quanh là các bảng mô tả: tên chiến dịch, tên kênh. Khóa trong bảng sự kiện trỏ tới chúng.", "Around it are description tables: campaign name, channel name. Keys in the fact table point to them.", [T("dim_campaign", ["campaign_id", "name"], [[1, "Tết"], [2, "Hè"]], { cols: [0] }), T("dim_channel", ["channel_id", "name"], [[1, "GDN"], [2, "TikTok"]], { cols: [0] })]),
    S("Muốn đọc ra chữ thì nối ba bảng theo khóa.", "To read words, join the three tables on the keys.", [T("kết quả", ["form_id", "campaign", "channel", "forms"], [[1, "Tết", "GDN", 24], [2, "Tết", "TikTok", 12], [3, "Hè", "GDN", 35]], { add: [0, 1, 2] })], "SELECT f.form_id, c.name, ch.name, f.forms\nFROM fact_form f\nJOIN dim_campaign c ON c.campaign_id = f.campaign_id\nJOIN dim_channel ch ON ch.channel_id = f.channel_id;"),
  ],
  "sql-key": [
    S("Khóa chính (id) nhận ra từng chiến dịch. Mỗi form có khóa ngoại campaign_id trỏ về đó.", "The primary key (id) identifies each campaign. Each form carries a foreign key campaign_id pointing to it.", [T("campaigns", ["id", "name"], [[1, "Tết"], [2, "Hè"]], { cols: [0] }), T("forms", ["id", "campaign_id"], [[1, 1], [2, 2]], { cols: [1] })]),
    S("Thêm form trỏ tới chiến dịch 9 không có thật thì cơ sở dữ liệu từ chối.", "A form pointing at campaign 9, which does not exist, is rejected by the database.", [T("forms", ["id", "campaign_id"], [[1, 1], [2, 2], [3, 9]], { bad: [2] })], "INSERT INTO forms VALUES (3, 9);  -- lỗi: không có campaigns.id = 9"),
    S("Trỏ tới chiến dịch 1 có thật thì được nhận.", "Pointing at the real campaign 1 is accepted.", [T("forms", ["id", "campaign_id"], [[1, 1], [2, 2], [3, 1]], { add: [2] })], "INSERT INTO forms VALUES (3, 1);"),
  ],
  "sql-ddl": [
    S("Bảng ads có hai cột. Đây là khung và các dòng dữ liệu.", "The ads table has two columns. That is the frame and the rows.", [T("ads", ["id", "spend"], [[1, 8], [2, 10]])]),
    S("DDL đổi khung: thêm một cột. Mọi dòng có sẵn ô trống ở cột mới.", "DDL changes the frame: it adds a column. Every row gets an empty cell there.", [T("ads", ["id", "spend", "note"], [[1, 8, null], [2, 10, null]], { addCols: [2] })], "ALTER TABLE ads ADD COLUMN note TEXT;"),
    S("DML sửa dòng: chỉ một ô đổi, khung vẫn vậy.", "DML edits rows: one cell changes, the frame stays.", [T("ads", ["id", "spend", "note"], [[1, 12, null], [2, 10, null]], { cells: [[0, 1]] })], "UPDATE ads SET spend = 12 WHERE id = 1;"),
  ],
  "sql-run": [
    S("Máy bắt đầu từ FROM: lấy cả bảng.", "The engine starts at FROM: it takes the whole table.", [ads()], "SELECT channel, SUM(spend) AS total\nFROM ads                 -- 1. chạy trước\nWHERE spend >= 6\nGROUP BY channel\nORDER BY total;"),
    S("WHERE lọc từng dòng, trước khi gộp. Dòng chi 4 bị loại.", "WHERE filters single rows, before grouping. The row with spend 4 is dropped.", [ads({ dim: [3] })], "WHERE spend >= 6         -- 2."),
    S("GROUP BY gom các dòng còn lại theo kênh.", "GROUP BY collects the remaining rows by channel.", [T("nhóm", ["channel", "spend của các dòng"], [["GDN", "8, 10, 12"], ["TikTok", "6, 7"]])], "GROUP BY channel         -- 3."),
    S("Lúc này SELECT mới chạy: tính tổng cho từng nhóm và đặt tên total.", "Only now does SELECT run: it computes the sum of each group and names it total.", [T("kết quả", ["channel", "total"], [["GDN", 30], ["TikTok", 13]], { addCols: [1] })], "SELECT channel, SUM(spend) AS total   -- 4."),
    S("ORDER BY chạy cuối nên dùng được tên total vừa đặt. Xếp tăng dần.", "ORDER BY runs last, so it can use the name total. Sorted ascending.", [T("kết quả", ["channel", "total"], [["TikTok", 13], ["GDN", 30]], { rows: [0, 1] })], "ORDER BY total           -- 5."),
  ],
  "sql-having": [
    S("Bảng gốc, sáu dòng.", "The base table, six rows.", [ads()]),
    S("WHERE lọc dòng trước khi gộp: dòng chi 4 bị loại.", "WHERE filters rows before grouping: the row with spend 4 is dropped.", [ads({ dim: [3] })], "WHERE spend >= 6"),
    S("Sau khi gộp, mỗi kênh còn một dòng tổng.", "After grouping, each channel has one total row.", [T("nhóm", ["channel", "SUM(spend)"], [["GDN", 30], ["TikTok", 13]])], "GROUP BY channel"),
    S("HAVING lọc nhóm theo con số đã tính. TikTok có tổng 13 nên bị loại.", "HAVING filters groups by the computed number. TikTok totals 13 and is dropped.", [T("nhóm", ["channel", "SUM(spend)"], [["GDN", 30], ["TikTok", 13]], { dim: [1], rows: [0] })], "HAVING SUM(spend) > 20"),
  ],
  "sql-count": [
    S("Bốn người điền form. Hai người không để số điện thoại.", "Four people filled the form. Two left no phone number.", [T("leads", ["id", "name", "phone"], [[1, "An", "0901"], [2, "Bình", null], [3, "Chi", "0933"], [4, "Dũng", null]])]),
    S("COUNT(*) đếm dòng, nên ra 4.", "COUNT(*) counts rows, so it returns 4.", [T("leads", ["id", "name", "phone"], [[1, "An", "0901"], [2, "Bình", null], [3, "Chi", "0933"], [4, "Dũng", null]], { rows: [0, 1, 2, 3] })], "SELECT COUNT(*) FROM leads;   -- 4"),
    S("COUNT(phone) chỉ đếm ô có giá trị, nên ra 2.", "COUNT(phone) counts only cells that have a value, so it returns 2.", [T("leads", ["id", "name", "phone"], [[1, "An", "0901"], [2, "Bình", null], [3, "Chi", "0933"], [4, "Dũng", null]], { cells: [[0, 2], [2, 2]] })], "SELECT COUNT(phone) FROM leads;   -- 2"),
  ],
  "sql-join": [
    S("Chiến dịch Tết có hai tuần chạy ở bảng weeks.", "The Tết campaign has two running weeks in the weeks table.", [T("campaigns", ["id", "name"], [[1, "Tết"], [2, "Hè"]], { cols: [0] }), T("weeks", ["campaign_id", "week"], [[1, "w1"], [1, "w2"], [2, "w1"]], { cols: [0] })]),
    S("Nối theo khóa không duy nhất: Tết khớp hai dòng nên xuất hiện hai lần. Hai dòng thành ba dòng.", "Joining on a key that is not unique: Tết matches two rows so it shows twice. Two rows become three.", [T("kết quả", ["id", "name", "week"], [[1, "Tết", "w1"], [1, "Tết", "w2"], [2, "Hè", "w1"]], { rows: [0, 1] })], "SELECT c.id, c.name, w.week\nFROM campaigns c JOIN weeks w ON w.campaign_id = c.id;"),
  ],
  "sql-left": [
    S("Ba chiến dịch, nhưng chỉ hai chiến dịch có form.", "Three campaigns, but only two have forms.", [T("campaigns", ["id", "name"], [[1, "Tết"], [2, "Hè"], [3, "Noel"]]), T("forms", ["campaign_id", "forms"], [[1, 40], [2, 25]])]),
    S("LEFT JOIN giữ cả ba chiến dịch. Noel không có form nên ô trống, là NULL.", "LEFT JOIN keeps all three campaigns. Noel has no forms, so its cell is empty, NULL.", [T("kết quả", ["name", "forms"], [["Tết", 40], ["Hè", 25], ["Noel", null]], { cells: [[2, 1]] })], "SELECT c.name, f.forms\nFROM campaigns c LEFT JOIN forms f ON f.campaign_id = c.id;"),
    S("NULL là «không có dữ liệu», không phải 0. Chỉ khi bạn quyết định mới đổi nó thành 0.", "NULL means no data, not 0. Only when you decide do you turn it into 0.", [T("kết quả", ["name", "forms"], [["Tết", 40], ["Hè", 25], ["Noel", 0]], { cells: [[2, 1]] })], "SELECT c.name, COALESCE(f.forms, 0) AS forms ..."),
  ],
  "sql-union": [
    S("Hai bảng cùng cột, đến từ hai nguồn. TikTok có mặt ở cả hai.", "Two tables with the same columns, from two sources. TikTok is in both.", [T("a", ["channel", "forms"], [["GDN", 24], ["TikTok", 12]]), T("b", ["channel", "forms"], [["TikTok", 12], ["Meta", 18]])]),
    S("UNION ALL xếp bảng này nối xuống dưới bảng kia, giữ cả dòng trùng.", "UNION ALL stacks one table under the other and keeps the duplicate.", [T("kết quả", ["channel", "forms"], [["GDN", 24], ["TikTok", 12], ["TikTok", 12], ["Meta", 18]], { rows: [1, 2] })], "SELECT * FROM a UNION ALL SELECT * FROM b;"),
    S("UNION bỏ dòng trùng. Đây là xếp dọc, khác JOIN là ghép ngang thêm cột.", "UNION removes the duplicate. It stacks down, unlike JOIN which adds columns across.", [T("kết quả", ["channel", "forms"], [["GDN", 24], ["TikTok", 12], ["TikTok", 12], ["Meta", 18]], { dim: [2] })], "SELECT * FROM a UNION SELECT * FROM b;"),
  ],
  "sql-win": [
    S("Bốn dòng, hai kênh.", "Four rows, two channels.", [T("ads", ["channel", "spend"], [["GDN", 8], ["GDN", 10], ["TikTok", 6], ["TikTok", 4]])]),
    S("GROUP BY gộp mỗi kênh thành một dòng. Từng dòng gốc biến mất.", "GROUP BY folds each channel into one row. The original rows disappear.", [T("kết quả", ["channel", "total"], [["GDN", 18], ["TikTok", 10]])], "SELECT channel, SUM(spend) AS total FROM ads GROUP BY channel;"),
    S("Hàm cửa sổ thêm một cột tổng nhưng vẫn giữ cả bốn dòng.", "A window function adds a total column but keeps all four rows.", [T("kết quả", ["channel", "spend", "total"], [["GDN", 8, 18], ["GDN", 10, 18], ["TikTok", 6, 10], ["TikTok", 4, 10]], { addCols: [2] })], "SELECT channel, spend,\n  SUM(spend) OVER (PARTITION BY channel) AS total\nFROM ads;"),
  ],
  "sql-rank": [
    S("Xếp hạng kênh theo form. Hai kênh hòa nhau ở 40.", "Rank channels by forms. Two channels tie at 40.", [T("kênh", ["channel", "forms"], [["GDN", 50], ["Meta", 40], ["TikTok", 40], ["Zalo", 30]], { rows: [1, 2] })]),
    S("ROW_NUMBER không quan tâm hòa: luôn 1, 2, 3, 4.", "ROW_NUMBER ignores ties: always 1, 2, 3, 4.", [T("kênh", ["channel", "forms", "row_number"], [["GDN", 50, 1], ["Meta", 40, 2], ["TikTok", 40, 3], ["Zalo", 30, 4]], { addCols: [2] })], "ROW_NUMBER() OVER (ORDER BY forms DESC)"),
    S("RANK cho hai kênh hòa cùng hạng 2 rồi nhảy số: kênh sau là hạng 4.", "RANK gives the tied channels the same rank 2, then skips: the next is 4.", [T("kênh", ["channel", "forms", "rank"], [["GDN", 50, 1], ["Meta", 40, 2], ["TikTok", 40, 2], ["Zalo", 30, 4]], { addCols: [2], cells: [[3, 2]] })], "RANK() OVER (ORDER BY forms DESC)"),
    S("DENSE_RANK cũng hòa ở hạng 2 nhưng không nhảy số: kênh sau là hạng 3.", "DENSE_RANK also ties at 2 but does not skip: the next is 3.", [T("kênh", ["channel", "forms", "dense_rank"], [["GDN", 50, 1], ["Meta", 40, 2], ["TikTok", 40, 2], ["Zalo", 30, 3]], { addCols: [2], cells: [[3, 2]] })], "DENSE_RANK() OVER (ORDER BY forms DESC)"),
  ],
  "sql-part": [
    S("Hai kênh, hai tuần mỗi kênh.", "Two channels, two weeks each.", [T("ads", ["channel", "week", "forms"], [["GDN", 1, 24], ["GDN", 2, 35], ["TikTok", 1, 12], ["TikTok", 2, 9]])]),
    S("Xếp hạng chung cả bảng: TikTok bị đẩy xuống hạng 3 và 4.", "Ranking the whole table: TikTok is pushed down to 3 and 4.", [T("ads", ["channel", "week", "forms", "rank"], [["GDN", 1, 24, 2], ["GDN", 2, 35, 1], ["TikTok", 1, 12, 3], ["TikTok", 2, 9, 4]], { addCols: [3] })], "RANK() OVER (ORDER BY forms DESC)"),
    S("PARTITION BY chia theo kênh. Mỗi kênh tự đếm hạng, bắt đầu từ 1.", "PARTITION BY splits by channel. Each channel counts its own rank, starting from 1.", [T("ads", ["channel", "week", "forms", "rank"], [["GDN", 1, 24, 2], ["GDN", 2, 35, 1], ["TikTok", 1, 12, 1], ["TikTok", 2, 9, 2]], { addCols: [3], cells: [[2, 3]] })], "RANK() OVER (PARTITION BY channel ORDER BY forms DESC)"),
  ],
  "sql-frame": [
    S("Thiếu tuần 3: chỉ có tuần 1, 2, 4, 5. Muốn trung bình của «ba dòng gần nhất».", "Week 3 is missing: only weeks 1, 2, 4, 5. We want the average of the last three rows.", [T("weeks", ["week", "spend"], [[1, 10], [2, 20], [4, 40], [5, 50]])], "AVG(spend) OVER (ORDER BY week\n  ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)"),
    S("Ở tuần 4, khung lấy ba dòng: tuần 1, 2 và 4. Nó trải qua bốn tuần lịch, vì tuần 3 không có dòng.", "At week 4 the frame takes three rows: weeks 1, 2 and 4. It spans four calendar weeks, because week 3 has no row.", [T("weeks", ["week", "spend", "avg3"], [[1, 10, 10], [2, 20, 15], [4, 40, 23.3], [5, 50, "…"]], { rows: [0, 1, 2], cells: [[2, 2]] })]),
    S("Ở tuần 5, khung là tuần 2, 4, 5. Khung đếm dòng, không đếm ngày.", "At week 5 the frame is weeks 2, 4, 5. The frame counts rows, not days.", [T("weeks", ["week", "spend", "avg3"], [[1, 10, 10], [2, 20, 15], [4, 40, 23.3], [5, 50, 36.7]], { rows: [1, 2, 3], cells: [[3, 2]] })]),
  ],
  "sql-lag": [
    S("Ba ngày có số liệu: ngày 1, 2 và 4. Ngày 3 thiếu.", "Three days with data: days 1, 2 and 4. Day 3 is missing.", [T("daily", ["day", "forms"], [[1, 10], [2, 14], [4, 9]])]),
    S("LAG lấy giá trị của dòng ngay trước. Dòng đầu chưa có dòng trước nên là NULL.", "LAG takes the value from the row right before. The first row has none, so NULL.", [T("daily", ["day", "forms", "prev"], [[1, 10, null], [2, 14, 10], [4, 9, 14]], { addCols: [2] })], "LAG(forms) OVER (ORDER BY day) AS prev"),
    S("Ở ngày 4, «dòng trước» là ngày 2, không phải hôm qua. Thiếu ngày thì LAG vẫn nhảy qua.", "On day 4 the previous row is day 2, not yesterday. With a missing day, LAG still jumps across.", [T("daily", ["day", "forms", "prev"], [[1, 10, null], [2, 14, 10], [4, 9, 14]], { cells: [[2, 2]], rows: [1] })]),
  ],
  "sql-case": [
    S("Bảng gốc chỉ có kênh và chi tiêu.", "The base table has only channel and spend.", [T("ads", ["channel", "spend"], [["GDN", 12], ["Meta", 8], ["TikTok", 4]])]),
    S("CASE tạo một cột mới ngay trong kết quả, theo từng bậc.", "CASE builds a new column right in the result, tier by tier.", [T("kết quả", ["channel", "spend", "tier"], [["GDN", 12, "cao"], ["Meta", 8, "vừa"], ["TikTok", 4, "thấp"]], { addCols: [2] })], "SELECT channel, spend,\n  CASE WHEN spend >= 10 THEN 'cao'\n       WHEN spend >= 6  THEN 'vừa'\n       ELSE 'thấp' END AS tier\nFROM ads;"),
    S("Bảng gốc vẫn không có cột tier. Bậc chỉ sống trong câu truy vấn.", "The base table still has no tier column. The tier lives only in the query.", [T("ads", ["channel", "spend"], [["GDN", 12], ["Meta", 8], ["TikTok", 4]])], "SELECT * FROM ads;"),
  ],
  "sql-cte": [
    S("Bảng gốc ads.", "The base table ads.", [T("ads", ["id", "channel", "spend"], [[1, "GDN", 8], [2, "TikTok", 6], [3, "Meta", 12]])]),
    S("Đặt tên cho một câu con: big là các dòng chi từ 8 trở lên. Nó chỉ là tên cho câu truy vấn.", "Name a sub-query: big is the rows with spend of 8 or more. It is just a name for a query.", [T("big", ["id", "channel", "spend"], [[1, "GDN", 8], [3, "Meta", 12]], { rows: [0, 1] })], "CREATE VIEW big AS\n  SELECT * FROM ads WHERE spend >= 8;"),
    S("Sửa bảng gốc: TikTok từ 6 lên 9.", "Edit the base table: TikTok goes from 6 to 9.", [T("ads", ["id", "channel", "spend"], [[1, "GDN", 8], [2, "TikTok", 9], [3, "Meta", 12]], { cells: [[1, 2]] })], "UPDATE ads SET spend = 9 WHERE id = 2;"),
    S("Hỏi lại big: TikTok tự có mặt. View không phải bản sao, nó chạy lại câu truy vấn mỗi lần.", "Ask big again: TikTok appears by itself. A view is not a copy, it reruns its query every time.", [T("big", ["id", "channel", "spend"], [[1, "GDN", 8], [2, "TikTok", 9], [3, "Meta", 12]], { add: [1] })], "SELECT * FROM big;"),
  ],
  "sql-idx": [
    S("Tìm kênh Meta trong bảng sáu dòng, không có chỉ mục: máy đọc từng dòng từ đầu.", "Finding Meta in a six-row table with no index: the engine reads every row from the top.", [T("ads", ["id", "channel"], [[1, "GDN"], [2, "Meta"], [3, "TikTok"], [4, "GDN"], [5, "Meta"], [6, "TikTok"]], { rows: [0, 1, 2, 3, 4, 5] })], "SELECT * FROM ads WHERE channel = 'Meta';"),
    S("Chỉ mục như mục lục: kênh nào nằm ở dòng nào. Máy tra mục lục rồi nhảy thẳng tới dòng 2 và 5.", "An index is like a table of contents: which channel sits on which rows. The engine looks it up and jumps straight to rows 2 and 5.", [T("index trên channel", ["channel", "dòng"], [["GDN", "1, 4"], ["Meta", "2, 5"], ["TikTok", "3, 6"]], { rows: [1] }), T("ads", ["id", "channel"], [[1, "GDN"], [2, "Meta"], [3, "TikTok"], [4, "GDN"], [5, "Meta"], [6, "TikTok"]], { rows: [1, 4] })]),
    S("Kết quả y hệt, chỉ nhanh hơn. Chỉ mục đổi tốc độ, không đổi câu trả lời.", "The result is identical, only faster. An index changes speed, not the answer.", [T("kết quả", ["id", "channel"], [[2, "Meta"], [5, "Meta"]])]),
  ],
  "sql-like": [
    S("Bốn tên chiến dịch. Ký tự % thay cho «bất kỳ chuỗi nào».", "Four campaign names. The % sign stands for any string.", [T("campaigns", ["name"], [["Tet Sale"], ["Tet 2026"], ["Mid-Tet"], ["Back Tet"]])]),
    S("'Tet%' khớp những tên bắt đầu bằng Tet.", "'Tet%' matches names that start with Tet.", [T("campaigns", ["name"], [["Tet Sale"], ["Tet 2026"], ["Mid-Tet"], ["Back Tet"]], { rows: [0, 1] })], "WHERE name LIKE 'Tet%'"),
    S("'%Tet' khớp những tên kết thúc bằng Tet.", "'%Tet' matches names that end with Tet.", [T("campaigns", ["name"], [["Tet Sale"], ["Tet 2026"], ["Mid-Tet"], ["Back Tet"]], { rows: [2, 3] })], "WHERE name LIKE '%Tet'"),
    S("'%Tet%' khớp tên có Tet ở bất kỳ đâu. LIKE chỉ có % và _. Luật phức tạp hơn là việc của regex.", "'%Tet%' matches Tet anywhere. LIKE has only % and _. Richer rules are regex's job.", [T("campaigns", ["name"], [["Tet Sale"], ["Tet 2026"], ["Mid-Tet"], ["Back Tet"]], { rows: [0, 1, 2, 3] })], "WHERE name LIKE '%Tet%'"),
  ],
  "sql-date": [
    S("Ba ngày được lưu thành chữ, không phải kiểu ngày.", "Three dates stored as text, not as a date type.", [T("log", ["d"], [["5/1/2026"], ["10/1/2026"], ["9/1/2026"]])]),
    S("Xếp theo chữ: «10/1» đứng trước «5/1» vì ký tự «1» nhỏ hơn «5». Thứ tự sai.", "Sorting as text: \"10/1\" comes before \"5/1\" because the character \"1\" is smaller than \"5\". The order is wrong.", [T("log", ["d"], [["10/1/2026"], ["5/1/2026"], ["9/1/2026"]], { bad: [0, 1, 2] })], "SELECT d FROM log ORDER BY d;"),
    S("Đổi sang kiểu ngày trước khi xếp: ngày 5, 9, rồi 10. Đúng thứ tự thời gian.", "Convert to a date type before sorting: 5, 9, 10. The true time order.", [T("log", ["d"], [["5/1/2026"], ["9/1/2026"], ["10/1/2026"]], { add: [0, 1, 2] })], "SELECT d FROM log ORDER BY TO_DATE(d, 'DD/MM/YYYY');"),
  ],
  "sql-nest": [
    S("Muốn các kênh đã có form. Kênh 2 chưa có form nào.", "We want channels that have forms. Channel 2 has none.", [T("channels", ["id", "name"], [[1, "GDN"], [2, "TikTok"], [3, "Meta"]]), T("forms", ["channel_id"], [[1], [1], [3]])]),
    S("Cách 1, câu con: hỏi «id nào có trong forms».", "Way 1, a subquery: ask which ids appear in forms.", [T("kết quả", ["id", "name"], [[1, "GDN"], [3, "Meta"]], { add: [0, 1] })], "SELECT * FROM channels\nWHERE id IN (SELECT channel_id FROM forms);"),
    S("Cách 2, phép nối: ra đúng kết quả đó. Câu lồng không cao cấp hơn. Chọn cách dễ đọc.", "Way 2, a join: the very same result. A nested query is not fancier. Pick the one that reads better.", [T("kết quả", ["id", "name"], [[1, "GDN"], [3, "Meta"]], { add: [0, 1] })], "SELECT DISTINCT c.*\nFROM channels c JOIN forms f ON f.channel_id = c.id;"),
  ],
  "sql-nwin": [
    S("Muốn cộng dồn form theo từng kênh qua các tuần.", "We want a running total of forms per channel across weeks.", [T("ads", ["channel", "week", "forms"], [["GDN", 1, 24], ["GDN", 2, 35], ["TikTok", 1, 12], ["TikTok", 2, 9]])]),
    S("Viết cửa sổ dài ngay trong hàm.", "Spell the window out inside the function.", [T("kết quả", ["channel", "week", "forms", "run"], [["GDN", 1, 24, 24], ["GDN", 2, 35, 59], ["TikTok", 1, 12, 12], ["TikTok", 2, 9, 21]], { addCols: [3] })], "SUM(forms) OVER (PARTITION BY channel ORDER BY week) AS run"),
    S("Đặt tên cửa sổ là w rồi gọi w. Kết quả y hệt. Tên chỉ để viết ngắn và dùng lại.", "Name the window w and call w. The result is identical. A name only shortens and reuses.", [T("kết quả", ["channel", "week", "forms", "run"], [["GDN", 1, 24, 24], ["GDN", 2, 35, 59], ["TikTok", 1, 12, 12], ["TikTok", 2, 9, 21]], { addCols: [3] })], "SUM(forms) OVER w AS run\n...\nWINDOW w AS (PARTITION BY channel ORDER BY week)"),
  ],
  "sql-proc": [
    S("Bảng ads đang có ba tuần, bảng archive còn trống.", "The ads table holds three weeks, the archive table is empty.", [T("ads", ["id", "week", "spend"], [[1, "w1", 8], [2, "w2", 10], [3, "w3", 12]]), T("archive", ["id", "week", "spend"], [])]),
    S("Gọi thủ tục một lần: nó chép tuần 1 sang archive rồi xóa khỏi ads. Hai việc trong một lệnh.", "Call the procedure once: it copies week 1 to archive then deletes it from ads. Two jobs in one command.", [T("ads", ["id", "week", "spend"], [[1, "w1", 8], [2, "w2", 10], [3, "w3", 12]], { dim: [0] }), T("archive", ["id", "week", "spend"], [[1, "w1", 8]], { add: [0] })], "CALL archive_week('w1');"),
    S("Kết quả: một kịch bản đã lưu đã sửa hai bảng, và có thể gọi lại bất cứ lúc nào.", "Result: one saved script edited two tables, and you can call it again any time.", [T("ads", ["id", "week", "spend"], [[2, "w2", 10], [3, "w3", 12]]), T("archive", ["id", "week", "spend"], [[1, "w1", 8]])]),
  ],
  "sql-cur": [
    S("Ba form cần chuyển từ new sang done.", "Three forms need to go from new to done.", [T("forms", ["id", "status"], [[1, "new"], [2, "new"], [3, "new"]])]),
    S("Con trỏ đi từng dòng một: dòng 1 xong, rồi mới tới dòng 2 và 3. Ba vòng lặp.", "A cursor goes one row at a time: row 1 is done, then row 2 and 3. Three loop turns.", [T("forms", ["id", "status"], [[1, "done"], [2, "new"], [3, "new"]], { rows: [0] })], "FETCH NEXT FROM cur;  -- vòng 1\nUPDATE forms SET status = 'done' WHERE id = 1;"),
    S("Vòng 2 và vòng 3 cũng như vậy, từng dòng một.", "Turns 2 and 3 do the same, one row each.", [T("forms", ["id", "status"], [[1, "done"], [2, "done"], [3, "done"]], { rows: [1, 2] })], "-- vòng 2, vòng 3"),
    S("Một câu UPDATE xử lý cả ba dòng cùng lúc, gọn hơn và thường nhanh hơn nhiều.", "One UPDATE handles all three rows at once, shorter and usually much faster.", [T("forms", ["id", "status"], [[1, "done"], [2, "done"], [3, "done"]], { rows: [0, 1, 2] })], "UPDATE forms SET status = 'done' WHERE status = 'new';"),
  ],
};
