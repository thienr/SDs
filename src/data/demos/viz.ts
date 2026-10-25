import { S, T, type Demo } from "./types";

export const vizDemos: Record<string, Demo> = {
  "tb-join": [
    S("Bảng chiến dịch có ngân sách mỗi chiến dịch. Bảng weeks có từng tuần chạy.", "The campaigns table has one budget per campaign. The weeks table has each running week.", [T("campaigns", ["id", "name", "budget"], [[1, "Tết", 100], [2, "Hè", 100]]), T("weeks", ["campaign_id", "week"], [[1, "w1"], [1, "w2"], [2, "w1"]])]),
    S("Nối hai bảng: Tết có hai tuần nên dòng Tết nhân đôi, và ngân sách 100 lặp hai lần.", "Join the tables: Tết has two weeks so its row doubles, and its budget 100 appears twice.", [T("sau khi nối", ["name", "budget", "week"], [["Tết", 100, "w1"], ["Tết", 100, "w2"], ["Hè", 100, "w1"]], { rows: [0, 1] })]),
    S("Kéo SUM(budget) lên biểu đồ ra 300, trong khi tổng thật là 200. Phép nối đã nhân dòng trước khi vẽ.", "Drag SUM(budget) onto a chart and you get 300, while the truth is 200. The join multiplied rows before the drawing.", [T("biểu đồ", ["", "tổng budget"], [["đúng (trước khi nối)", 200], ["sau khi nối", 300]], { bad: [1] })]),
  ],
  "tb-calc": [
    S("Dữ liệu gốc có chi tiêu và form theo kênh.", "The source data has spend and forms by channel.", [T("ads", ["channel", "spend", "forms"], [["GDN", 30, 89], ["TikTok", 17, 41]])]),
    S("Trường tính toán CPL là một công thức: tổng chi chia tổng form. Tableau chạy nó mỗi lần vẽ.", "The calculated field CPL is a formula: total spend divided by total forms. Tableau runs it each time it draws.", [T("trong biểu đồ", ["channel", "CPL"], [["GDN", 0.337], ["TikTok", 0.415]], { addCols: [1] })], "CPL = SUM([spend]) / SUM([forms])"),
    S("Bảng dữ liệu gốc vẫn không có cột CPL. Công thức không tạo dữ liệu mới.", "The source table still has no CPL column. A formula creates no new data.", [T("ads", ["channel", "spend", "forms"], [["GDN", 30, 89], ["TikTok", 17, 41]])]),
  ],
  "pb-model": [
    S("Mô hình là các bảng và đường nối giữa chúng. Bảng chiến dịch (mô tả) nối với bảng form (sự kiện) qua campaign_id.", "A model is tables and the lines between them. The campaign table (description) joins the form table (events) through campaign_id.", [T("campaign", ["campaign_id", "name"], [[1, "Tết"], [2, "Hè"]], { cols: [0] }), T("forms", ["form_id", "campaign_id"], [[1, 1], [2, 1], [3, 2]], { cols: [1] })]),
    S("Chọn «Tết» ở bảng chiến dịch: bộ lọc chảy qua đường nối, chỉ còn các form của Tết.", "Pick Tết in the campaign table: the filter flows along the line, leaving only Tết's forms.", [T("campaign", ["campaign_id", "name"], [[1, "Tết"], [2, "Hè"]], { rows: [0], dim: [1] }), T("forms", ["form_id", "campaign_id"], [[1, 1], [2, 1], [3, 2]], { rows: [0, 1], dim: [2] })]),
  ],
  "pb-pq": [
    S("Power Query là một danh sách bước. Mỗi bước là một công thức, chạy lần lượt trên dữ liệu thô.", "Power Query is a list of steps. Each step is a formula, run in order on the raw data.", [T("applied steps", ["#", "bước"], [[1, "Source: đọc file"], [2, "Filter: bỏ dòng trống"], [3, "Change type: spend thành số"]])]),
    S("Dữ liệu thô có một dòng trống và spend là chữ. Sau ba bước còn dữ liệu sạch.", "Raw data has a blank row and spend as text. After three steps it is clean.", [T("thô", ["channel", "spend"], [["GDN", "8"], [null, null], ["Meta", "12"]], { bad: [1] }), T("sau 3 bước", ["channel", "spend"], [["GDN", 8], ["Meta", 12]], { add: [0, 1] })]),
    S("Làm mới (refresh) là chạy lại cả ba công thức trên dữ liệu mới. Dòng TikTok mới tự đi qua các bước.", "Refresh runs all three formulas again on the new data. The new TikTok row passes through the steps by itself.", [T("sau khi refresh", ["channel", "spend"], [["GDN", 8], ["Meta", 12], ["TikTok", 6]], { add: [2] })]),
  ],
  "pb-grain": [
    S("Mỗi dòng của bảng này là một dòng hàng trong đơn, không phải một đơn. Đó là grain (độ mịn).", "Each row of this table is one order line, not one order. That is the grain.", [T("order_lines", ["order_id", "item"], [[1, "A"], [1, "B"], [2, "A"]])]),
    S("Đếm dòng ra 3. Đây là số dòng hàng, không phải số đơn.", "Counting rows gives 3. That is the number of lines, not of orders.", [T("order_lines", ["order_id", "item"], [[1, "A"], [1, "B"], [2, "A"]], { rows: [0, 1, 2] })], "COUNTROWS(order_lines)   → 3"),
    S("Muốn số đơn thì đếm mã đơn khác nhau: ra 2.", "For the number of orders, count distinct order ids: 2.", [T("order_lines", ["order_id", "item"], [[1, "A"], [1, "B"], [2, "A"]], { cols: [0] })], "DISTINCTCOUNT(order_lines[order_id])   → 2"),
  ],
  "pb-dax": [
    S("Bảng ads. Cột tính (calculated column) lưu một giá trị cho mỗi dòng, tính một lần lúc làm mới.", "The ads table. A calculated column stores one value per row, computed once at refresh.", [T("ads", ["channel", "spend", "forms", "cpl"], [["GDN", 8, 24, 0.333], ["GDN", 10, 35, 0.286], ["TikTok", 6, 12, 0.5]], { addCols: [3] })], "cpl = [spend] / [forms]"),
    S("Measure không lưu gì. Nó tính lại mỗi lần bộ lọc đổi. Không lọc: tổng chi chia tổng form.", "A measure stores nothing. It recomputes each time the filter changes. No filter: total spend over total forms.", [T("measure CPL", ["bộ lọc", "CPL"], [["không lọc", 0.362]], { cells: [[0, 1]] })], "CPL = DIVIDE(SUM(ads[spend]), SUM(ads[forms]))"),
    S("Lọc kênh nào thì measure tính lại trên các dòng của kênh đó. Trung bình các cột cpl sẽ không cho đúng con số này.", "Filter a channel and the measure recomputes over that channel's rows. Averaging the cpl column would not give these numbers.", [T("measure CPL", ["bộ lọc", "CPL"], [["không lọc", 0.362], ["channel = GDN", 0.337], ["channel = TikTok", 0.415]], { rows: [1, 2] })]),
  ],
  "pb-rls": [
    S("Bảng form, mỗi dòng có người phụ trách.", "A form table, each row with an owner.", [T("forms", ["form_id", "owner", "forms"], [[1, "An", 24], [2, "Bình", 12], [3, "An", 35], [4, "Bình", 9]])]),
    S("Luật RLS (row-level security) áp lên người xem. Khi Bình mở báo cáo, dòng của An bị ẩn đi hoàn toàn.", "An RLS (row-level security) rule is applied to the viewer. When Bình opens the report, An's rows are hidden entirely.", [T("Bình nhìn thấy", ["form_id", "owner", "forms"], [[1, "An", 24], [2, "Bình", 12], [3, "An", 35], [4, "Bình", 9]], { dim: [0, 2], rows: [1, 3] })], "[owner] = USERNAME()"),
    S("Slicer thì khác: người xem tự bấm và có thể bỏ chọn. RLS không cho người xem tự gỡ.", "A slicer is different: the viewer clicks and can clear it. RLS cannot be removed by the viewer.", [T("so sánh", ["", "ai quyết định", "bỏ được?"], [["slicer", "người xem", "được"], ["RLS", "người quản trị", "không"]], { rows: [1] })]),
  ],
  "pb-refresh": [
    S("Nguồn có ba dòng. Báo cáo tính tổng form: 71.", "The source has three rows. The report totals the forms: 71.", [T("nguồn", ["form_id", "forms"], [[1, 24], [2, 12], [3, 35]]), T("báo cáo", ["", "tổng form"], [["measure", 71]])]),
    S("Nguồn có thêm một dòng mới. Báo cáo chưa làm mới nên vẫn hiện 71.", "A new row lands in the source. The report has not refreshed, so it still shows 71.", [T("nguồn", ["form_id", "forms"], [[1, 24], [2, 12], [3, 35], [4, 9]], { add: [3] }), T("báo cáo", ["", "tổng form"], [["measure", 71]], { bad: [0] })]),
    S("Làm mới (refresh) kéo dòng mới về và chạy lại công thức: 80. Measure không giữ số cũ.", "Refresh pulls the new row and reruns the formula: 80. A measure does not keep the old number.", [T("nguồn", ["form_id", "forms"], [[1, 24], [2, 12], [3, 35], [4, 9]]), T("báo cáo", ["", "tổng form"], [["measure", 80]], { cells: [[0, 1]] })]),
  ],
};
