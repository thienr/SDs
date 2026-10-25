import { S, T, type Demo } from "./types";

export const xlDemos: Record<string, Demo> = {
  "xl-cell": [
    S("Một ô giữ ba loại thứ: số, chữ hoặc công thức. Bảng này cho thấy bạn gõ gì và ô hiện gì.", "A cell holds one of three things: a number, text or a formula. This shows what you type and what the cell shows.", [T("sheet", ["ô", "bạn gõ", "ô hiện", "loại"], [["A1", "12", "12", "số"], ["A2", "'12", "12", "chữ trông giống số"], ["A3", "=A1*2", "24", "công thức"]])]),
    S("SUM bỏ qua ô chữ. Tổng A1:A2 chỉ là 12, không phải 24.", "SUM skips text cells. The total of A1:A2 is just 12, not 24.", [T("sheet", ["ô", "bạn gõ", "ô hiện", "loại"], [["A1", "12", "12", "số"], ["A2", "'12", "12", "chữ trông giống số"], ["A3", "=A1*2", "24", "công thức"]], { rows: [0], dim: [1] })], "=SUM(A1:A2)   → 12"),
  ],
  "xl-lock": [
    S("Công thức =B2*$E$1 nhân chi tiêu với tỷ lệ ở E1. Dấu $ khóa địa chỉ E1.", "The formula =B2*$E$1 multiplies spend by the rate in E1. The $ signs lock E1.", [T("kéo xuống bốn dòng", ["dòng", "công thức"], [[2, "=B2*$E$1"], [3, "=B3*$E$1"], [4, "=B4*$E$1"]], { cols: [1] })], "=B2*$E$1"),
    S("Không có $, địa chỉ trượt theo khi kéo: E1 thành E2, E3. Các ô đó trống nên ra 0.", "Without $, the address slides as you drag: E1 becomes E2, E3. Those cells are empty so you get 0.", [T("kéo xuống bốn dòng", ["dòng", "công thức"], [[2, "=B2*E1"], [3, "=B3*E2"], [4, "=B4*E3"]], { bad: [1, 2] })], "=B2*E1"),
  ],
  "xl-if": [
    S("IF chọn một nhánh: chi từ 10 trở lên là «cao», còn lại là «thấp».", "IF picks one branch: spend of 10 or more is cao, otherwise thấp.", [T("tuần", ["tuần", "chi", "tier"], [["w1", 12, "cao"], ["w2", 8, "thấp"], ["w3", "(trống)", "thấp"]], { addCols: [2] })], "=IF(B2>=10, \"cao\", \"thấp\")"),
    S("Tuần 3 chưa nhập số. Ô trống bị coi như 0 nên rơi vào «thấp», trông như tuần chi ít.", "Week 3 has no number yet. A blank is treated as 0, so it lands in thấp, looking like a low-spend week.", [T("tuần", ["tuần", "chi", "tier"], [["w1", 12, "cao"], ["w2", 8, "thấp"], ["w3", "(trống)", "thấp"]], { cells: [[2, 2]] })]),
    S("Muốn tách trường hợp chưa có số thì kiểm tra ô trống trước.", "To separate the not-entered case, test for blank first.", [T("tuần", ["tuần", "chi", "tier"], [["w1", 12, "cao"], ["w2", 8, "thấp"], ["w3", "(trống)", "chưa có"]], { cells: [[2, 2]] })], "=IF(ISBLANK(B4), \"chưa có\", IF(B4>=10, \"cao\", \"thấp\"))"),
  ],
  "xl-keep": [
    S("Bảng có năm dòng.", "A table with five rows.", [T("ads", ["kênh", "chi"], [["GDN", 12], ["Meta", 8], ["TikTok", 4], ["Zalo", 3], ["Bing", 9]])]),
    S("Lọc chi ≥ 8: dòng khác bị giấu đi, không bị xóa.", "Filter spend ≥ 8: the other rows are hidden, not deleted.", [T("ads", ["kênh", "chi"], [["GDN", 12], ["Meta", 8], ["TikTok", 4], ["Zalo", 3], ["Bing", 9]], { dim: [2, 3] })]),
    S("Bỏ bộ lọc thì mọi dòng quay lại như cũ.", "Clear the filter and every row comes back.", [T("ads", ["kênh", "chi"], [["GDN", 12], ["Meta", 8], ["TikTok", 4], ["Zalo", 3], ["Bing", 9]])]),
    S("Xóa dòng mới làm mất dữ liệu thật. Lúc này không còn đường quay lại ngoài hoàn tác.", "Deleting is what really loses data. Only undo gets it back.", [T("ads", ["kênh", "chi"], [["GDN", 12], ["Meta", 8], ["Bing", 9]])]),
  ],
  "xl-chart": [
    S("Muốn so các nhóm với nhau (kênh này với kênh kia): dùng biểu đồ cột. Mỗi nhóm một cột.", "To compare groups (one channel with another): use a bar chart. One bar per group.", [T("so nhóm → biểu đồ cột", ["kênh", "form"], [["GDN", 90], ["Meta", 55], ["TikTok", 41]], { cols: [1] })]),
    S("Muốn xem một thứ đổi theo thời gian: dùng biểu đồ đường. Thứ tự tuần là có thật nên nối các điểm được.", "To see one thing change over time: use a line chart. Week order is real, so joining the points makes sense.", [T("theo thời gian → biểu đồ đường", ["tuần", "form"], [["w1", 41], ["w2", 55], ["w3", 90]], { cols: [1] })]),
  ],
  "xl-pivot": [
    S("Sáu dòng gốc: mỗi dòng là một kênh trong một tuần.", "Six raw rows: each is one channel in one week.", [T("ads", ["week", "channel", "spend"], [[1, "GDN", 8], [1, "TikTok", 6], [2, "GDN", 10], [2, "TikTok", 4], [3, "GDN", 12], [3, "TikTok", 7]])]),
    S("PivotTable nhóm các dòng theo kênh và cộng chi tiêu. Sáu dòng thành hai dòng.", "A PivotTable groups rows by channel and sums spend. Six rows become two.", [T("pivot: hàng = channel, giá trị = tổng spend", ["channel", "tổng spend"], [["GDN", 30], ["TikTok", 17]], { addCols: [1] })]),
    S("Đưa tuần lên cột thì ra bảng chéo. Tổng vẫn là 47, như ở bảng gốc. Pivot chỉ sắp lại, không tạo thêm số.", "Move week to columns for a cross-table. The total is still 47, as in the raw table. A pivot only rearranges, it creates no new numbers.", [T("pivot: hàng = channel, cột = week", ["channel", "w1", "w2", "w3", "tổng"], [["GDN", 8, 10, 12, 30], ["TikTok", 6, 4, 7, 17], ["tổng", 14, 14, 19, 47]], { rows: [2] })]),
  ],
  "xl-look": [
    S("Bảng tra: cột đầu là tên kênh, bên phải là mã và giá mỗi form.", "A lookup table: the first column is the channel name, to the right are the code and cost per form.", [T("kênh", ["name", "id", "cpl"], [["GDN", 1, 40], ["Meta", 2, 55], ["TikTok", 3, 32]], { cols: [0] })]),
    S("VLOOKUP tìm «Meta» ở cột đầu rồi lấy ô ở cột thứ 3 của dòng đó. FALSE ở cuối nghĩa là chỉ lấy khớp đúng.", "VLOOKUP finds Meta in the first column then takes the cell from the 3rd column of that row. The final FALSE means exact match only.", [T("kênh", ["name", "id", "cpl"], [["GDN", 1, 40], ["Meta", 2, 55], ["TikTok", 3, 32]], { rows: [1], cells: [[1, 2]] })], "=VLOOKUP(\"Meta\", A:C, 3, FALSE)   → 55"),
    S("Nó chỉ nhìn sang bên phải của cột tìm. Muốn lấy cột nằm bên trái cột tìm thì VLOOKUP không làm được. Bỏ FALSE thì nó tìm gần đúng và có thể trả về dòng sai.", "It only looks to the right of the search column. A column to the left of it cannot be fetched. Drop FALSE and it matches approximately and may return the wrong row.", [T("kênh", ["name", "id", "cpl"], [["GDN", 1, 40], ["Meta", 2, 55], ["TikTok", 3, 32]], { bad: [0, 1, 2] })], "=VLOOKUP(2, B:C, ...) không lấy được cột name ở bên trái"),
  ],
  "xa-text": [
    S("Hàm xử lý chuỗi trả về chữ. LEFT lấy bốn ký tự đầu của «2026-01».", "String functions return text. LEFT takes the first four characters of 2026-01.", [T("công thức", ["công thức", "kết quả", "loại"], [["=LEFT(\"2026-01\", 4)", "2026", "chữ"]], { cells: [[0, 1]] })]),
    S("Trông giống số nhưng vẫn là chữ nên SUM bỏ qua. Muốn thành số phải bọc VALUE.", "It looks like a number but it is text, so SUM skips it. To make it a number, wrap it in VALUE.", [T("công thức", ["công thức", "kết quả", "loại"], [["=LEFT(\"2026-01\", 4)", "2026", "chữ"], ["=VALUE(LEFT(\"2026-01\", 4))", 2026, "số"]], { rows: [1] })]),
  ],
  "xa-count": [
    S("Một cột có số, chữ «n/a» và một ô trống.", "A column with numbers, the text n/a and a blank cell.", [T("cột B", ["ô", "giá trị"], [["B1", 12], ["B2", "n/a"], ["B3", "(trống)"], ["B4", 7]])]),
    S("COUNT chỉ đếm ô là số: B1 và B4, ra 2.", "COUNT counts only numeric cells: B1 and B4, so 2.", [T("cột B", ["ô", "giá trị"], [["B1", 12], ["B2", "n/a"], ["B3", "(trống)"], ["B4", 7]], { cells: [[0, 1], [3, 1]] })], "=COUNT(B1:B4)   → 2"),
    S("COUNTA đếm mọi ô không trống, kể cả chữ: ra 3.", "COUNTA counts every non-empty cell, text included: 3.", [T("cột B", ["ô", "giá trị"], [["B1", 12], ["B2", "n/a"], ["B3", "(trống)"], ["B4", 7]], { cells: [[0, 1], [1, 1], [3, 1]] })], "=COUNTA(B1:B4)   → 3"),
  ],
  "xa-match": [
    S("Bảng có tên kênh ở cột A và mã ở cột B. Cần tìm tên khi biết mã 2: tên nằm bên trái cột mã.", "Names in column A and codes in column B. We need the name given code 2: the name is left of the code column.", [T("kênh", ["A: name", "B: id"], [["GDN", 1], ["Meta", 2], ["TikTok", 3]], { cols: [1] })]),
    S("MATCH tìm mã 2 trong cột B và báo vị trí: dòng thứ 2.", "MATCH finds code 2 in column B and reports the position: the 2nd row.", [T("kênh", ["A: name", "B: id"], [["GDN", 1], ["Meta", 2], ["TikTok", 3]], { cells: [[1, 1]] })], "=MATCH(2, B:B, 0)   → 2"),
    S("INDEX lấy ô thứ 2 của cột A. Nó nhìn được sang trái, điều VLOOKUP không làm được.", "INDEX takes the 2nd cell of column A. It can look left, which VLOOKUP cannot.", [T("kênh", ["A: name", "B: id"], [["GDN", 1], ["Meta", 2], ["TikTok", 3]], { cells: [[1, 0]] })], "=INDEX(A:A, MATCH(2, B:B, 0))   → Meta"),
  ],
  "xa-what": [
    S("Mô hình nhỏ: số form = chi tiêu × tỷ lệ. Ô đầu vào là chi tiêu 8 và tỷ lệ 3.", "A small model: forms = spend × rate. The input cells are spend 8 and rate 3.", [T("ô đầu vào", ["ô", "giá trị"], [["spend", 8], ["rate", 3], ["forms = spend × rate", 24]], { rows: [0, 1], cells: [[2, 1]] })]),
    S("Đổi tỷ lệ thành 4, số form tự tính lại ra 32. Đây là phép tính theo giả định bạn nhập, không phải dự báo.", "Change rate to 4 and forms recalculates to 32. This is arithmetic on the assumption you typed, not a forecast.", [T("ô đầu vào", ["ô", "giá trị"], [["spend", 8], ["rate", 4], ["forms = spend × rate", 32]], { cells: [[1, 1], [2, 1]] })]),
  ],
  "xa-macro": [
    S("Macro ghi lại các thao tác bạn bấm theo thứ tự.", "A macro records the steps you click, in order.", [T("macro đã ghi", ["#", "thao tác"], [[1, "chọn cột C"], [2, "xếp giảm dần"], [3, "tô vàng dòng đầu"]])]),
    S("Chạy lại macro là bấm lại đúng các bước đó trên dữ liệu mới.", "Running the macro replays exactly those clicks on new data.", [T("macro đã ghi", ["#", "thao tác"], [[1, "chọn cột C"], [2, "xếp giảm dần"], [3, "tô vàng dòng đầu"]], { rows: [0, 1, 2] })]),
    S("Nó không biết bạn muốn gì. Nếu dữ liệu mới có thêm một cột thì «cột C» là cột khác, và macro vẫn bấm.", "It does not know what you want. If the new data has an extra column, column C is a different column, and the macro still clicks.", [T("macro đã ghi", ["#", "thao tác"], [[1, "chọn cột C"], [2, "xếp giảm dần"], [3, "tô vàng dòng đầu"]], { bad: [0] })]),
  ],
};
