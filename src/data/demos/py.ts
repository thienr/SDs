import { S, T, type Demo } from "./types";

const mem = (r: (string | number | null)[][], m = {}) => T("bộ nhớ", ["tên", "giá trị"], r, m);
const df = (m = {}) => T("df", ["", "channel", "spend"], [["a", "GDN", 8], ["b", "Meta", 12], ["c", "TikTok", 6]], m);

export const pyDemos: Record<string, Demo> = {
  "py-run": [
    S("Python đọc từ trên xuống. Dòng 1 dùng cpl khi chưa ai tạo nó nên báo lỗi.", "Python reads top to bottom. Line 1 uses cpl before anyone created it, so it errors.", [mem([["cpl", "chưa có"]], { bad: [0] })], "print(cpl)      # dòng 1: NameError\ncpl = 8 / 24    # dòng 2"),
    S("Đảo thứ tự: tạo cpl trước, dùng sau. Bộ nhớ có tên cpl nên dòng print chạy được.", "Swap the order: create cpl first, use it after. The memory holds the name cpl, so print works.", [mem([["cpl", 0.333]], { add: [0] })], "cpl = 8 / 24    # dòng 1: tạo tên\nprint(cpl)      # dòng 2: dùng tên"),
  ],
  "py-type": [
    S("Với số nguyên, + là cộng.", "With integers, + adds.", [T("biểu thức", ["biểu thức", "kết quả", "kiểu"], [["3 + 4", 7, "int"]], { rows: [0] })]),
    S("Với chuỗi, + là nối. «3» + «4» ra «34», không phải 7.", "With strings, + joins. \"3\" + \"4\" gives \"34\", not 7.", [T("biểu thức", ["biểu thức", "kết quả", "kiểu"], [["3 + 4", 7, "int"], ["\"3\" + \"4\"", "\"34\"", "str"], ["\"3\" * 2", "\"33\"", "str"]], { rows: [1, 2] })]),
    S("Trộn số với chuỗi thì Python từ chối, vì kiểu quyết định phép nào hợp lệ.", "Mix a number with a string and Python refuses, because the type decides which operation is valid.", [T("biểu thức", ["biểu thức", "kết quả", "kiểu"], [["3 + 4", 7, "int"], ["\"3\" + \"4\"", "\"34\"", "str"], ["3 + \"4\"", "TypeError", "—"]], { bad: [2] })]),
  ],
  "py-op": [
    S("Một dấu = là gán: đặt tên x vào ô nhớ giá trị 5.", "One = assigns: it puts the name x on a memory slot holding 5.", [mem([["x", 5]], { add: [0] })], "x = 5"),
    S("Hai dấu == là so sánh: hỏi «x có bằng 5 không?» và trả về True. x không đổi.", "Two == compare: they ask whether x equals 5 and return True. x does not change.", [mem([["x", 5], ["x == 5", "True"]], { cells: [[1, 1]] })], "x == 5"),
    S("So sánh với 6 ra False, và x vẫn là 5. Chỉ dấu = mới làm bộ nhớ đổi.", "Comparing with 6 gives False, and x is still 5. Only = changes memory.", [mem([["x", 5], ["x == 6", "False"]], { cells: [[1, 1]] })], "x == 6"),
  ],
  "py-if": [
    S("Với spend = 12, nhánh if đúng nên chạy. Các nhánh sau không được xét.", "With spend = 12, the if branch is true so it runs. The later branches are not even checked.", [T("nhánh", ["nhánh", "điều kiện", "chạy?"], [["if", "spend >= 10", "chạy"], ["elif", "spend >= 6", "bỏ qua"], ["else", "(còn lại)", "bỏ qua"]], { rows: [0], dim: [1, 2] })], "spend = 12\nif spend >= 10: tier = 'cao'\nelif spend >= 6: tier = 'vừa'\nelse: tier = 'thấp'"),
    S("Với spend = 8, if sai nên xét tiếp: elif đúng và chạy. Else bỏ qua.", "With spend = 8, if is false so it checks on: elif is true and runs. Else is skipped.", [T("nhánh", ["nhánh", "điều kiện", "chạy?"], [["if", "spend >= 10", "sai"], ["elif", "spend >= 6", "chạy"], ["else", "(còn lại)", "bỏ qua"]], { rows: [1], dim: [0, 2] })], "spend = 8"),
    S("Với spend = 4, hai điều kiện đều sai nên else chạy. Luôn đúng một nhánh.", "With spend = 4, both conditions fail so else runs. Exactly one branch runs.", [T("nhánh", ["nhánh", "điều kiện", "chạy?"], [["if", "spend >= 10", "sai"], ["elif", "spend >= 6", "sai"], ["else", "(còn lại)", "chạy"]], { rows: [2], dim: [0, 1] })], "spend = 4"),
  ],
  "py-loop": [
    S("for đi qua từng phần tử của danh sách, lần lượt một. Bắt đầu: total = 0.", "for walks through each element of a list, one by one. Start: total = 0.", [T("vòng lặp", ["vòng", "spend", "total"], [["—", "—", 0]])], "total = 0\nfor spend in [8, 10, 12]:\n    total = total + spend"),
    S("Vòng 1: spend = 8, total thành 8. Vòng 2: spend = 10, total thành 18.", "Turn 1: spend = 8, total becomes 8. Turn 2: spend = 10, total becomes 18.", [T("vòng lặp", ["vòng", "spend", "total"], [[1, 8, 8], [2, 10, 18]], { add: [0, 1] })]),
    S("Vòng 3: spend = 12, total thành 30. Hết phần tử thì for tự dừng.", "Turn 3: spend = 12, total becomes 30. When the elements run out, for stops by itself.", [T("vòng lặp", ["vòng", "spend", "total"], [[1, 8, 8], [2, 10, 18], [3, 12, 30]], { add: [2] })]),
    S("while thì khác: nó lặp tới khi điều kiện sai. Quên đổi spend thì điều kiện mãi đúng và không bao giờ dừng.", "while is different: it repeats until the condition is false. Forget to change spend and the condition stays true forever.", [T("vòng lặp", ["vòng", "spend < 10 ?"], [[1, "đúng"], [2, "đúng"], [3, "đúng"], ["…", "đúng mãi"]], { bad: [3] })], "spend = 8\nwhile spend < 10:\n    print(spend)   # quên tăng spend"),
  ],
  "py-fn": [
    S("Hàm nhận hai số và trả về s / f. return là thứ người gọi nhận lại.", "The function takes two numbers and returns s / f. return is what the caller gets back.", [mem([["cpl(8, 24)", 0.333]], { cells: [[0, 1]] })], "def cpl(s, f):\n    return s / f\n\nx = cpl(8, 24)"),
    S("Thiếu return thì hàm vẫn chạy nhưng không trả gì: người gọi nhận None.", "Without return the function still runs but hands nothing back: the caller gets None.", [mem([["cpl(8, 24)", 0.333], ["cpl_bad(8, 24)", "None"]], { bad: [1] })], "def cpl_bad(s, f):\n    s / f           # tính xong rồi bỏ\n\ny = cpl_bad(8, 24)   # y là None"),
  ],
  "py-str": [
    S("Một chuỗi s là «Tet Sale». Gọi .upper() trả về một chuỗi mới viết hoa.", "A string s is Tet Sale. Calling .upper() returns a new uppercase string.", [mem([["s", "Tet Sale"], ["s.upper()", "TET SALE"]], { add: [1] })], "s = \"Tet Sale\"\ns.upper()"),
    S("Nhưng s vẫn là «Tet Sale». Chuỗi cũ không tự đổi.", "But s is still Tet Sale. The old string does not change by itself.", [mem([["s", "Tet Sale"]], { cells: [[0, 1]] })], "print(s)   # Tet Sale"),
    S("Muốn giữ kết quả thì gán lại tên.", "To keep the result, assign it back to a name.", [mem([["s", "TET SALE"]], { cells: [[0, 1]] })], "s = s.upper()"),
  ],
  "py-list": [
    S("Danh sách có thứ tự. Chỉ số bắt đầu từ 0, không phải từ 1.", "A list has an order. Indexes start at 0, not 1.", [T("spend = [8, 10, 12]", ["chỉ số", "giá trị"], [[0, 8], [1, 10], [2, 12]])]),
    S("spend[0] là phần tử đầu tiên: 8.", "spend[0] is the first element: 8.", [T("spend = [8, 10, 12]", ["chỉ số", "giá trị"], [[0, 8], [1, 10], [2, 12]], { cells: [[0, 1]] })], "spend[0]   → 8"),
    S("spend[-1] đếm từ cuối: 12. spend[3] không có nên báo IndexError.", "spend[-1] counts from the end: 12. spend[3] does not exist so it raises IndexError.", [T("spend = [8, 10, 12]", ["chỉ số", "giá trị"], [[0, 8], [1, 10], [2, 12], [3, "IndexError"]], { cells: [[2, 1]], bad: [3] })], "spend[-1]  → 12\nspend[3]   → IndexError"),
    S("List sửa được: gán lại một ô, hoặc thêm vào cuối bằng append.", "A list can be edited: assign a cell, or add to the end with append.", [T("spend", ["chỉ số", "giá trị"], [[0, 8], [1, 15], [2, 12], [3, 20]], { cells: [[1, 1]], add: [3] })], "spend[1] = 15\nspend.append(20)"),
  ],
  "py-dict": [
    S("Dictionary tra giá trị theo khóa: kênh GDN có chi tiêu 8.", "A dictionary looks up a value by key: channel GDN has spend 8.", [T("d", ["khóa", "giá trị"], [["GDN", 8], ["Meta", 12]], { cols: [0] })], "d = {\"GDN\": 8, \"Meta\": 12}\nd[\"GDN\"]   → 8"),
    S("Hỏi khóa không có: d[\"TikTok\"] báo KeyError.", "Ask for a missing key: d[\"TikTok\"] raises KeyError.", [T("d", ["khóa", "giá trị"], [["GDN", 8], ["Meta", 12], ["TikTok", "KeyError"]], { bad: [2] })], "d[\"TikTok\"]   → KeyError"),
    S("get thì chịu trả về giá trị mặc định thay vì lỗi: None, hoặc 0 nếu bạn nói.", "get is willing to return a default instead of an error: None, or 0 if you say so.", [T("d", ["biểu thức", "kết quả"], [["d.get(\"TikTok\")", "None"], ["d.get(\"TikTok\", 0)", 0]], { rows: [1] })]),
  ],
  "py-tup": [
    S("Tuple cũng có thứ tự, viết bằng ngoặc tròn.", "A tuple also has an order, written with round brackets.", [T("t = (\"GDN\", 8)", ["chỉ số", "giá trị"], [[0, "GDN"], [1, 8]])]),
    S("Đọc t[1] thì được 8. Nhưng gán t[1] = 9 báo TypeError: tuple không cho sửa từng ô.", "Reading t[1] gives 8. But assigning t[1] = 9 raises TypeError: a tuple does not allow editing a cell.", [T("t = (\"GDN\", 8)", ["chỉ số", "giá trị"], [[0, "GDN"], [1, 8]], { bad: [1] })], "t[1]     → 8\nt[1] = 9 → TypeError"),
    S("Muốn đổi thì tạo tuple mới, hoặc dùng list nếu cần sửa.", "To change it, build a new tuple, or use a list if you need to edit.", [T("t", ["chỉ số", "giá trị"], [[0, "GDN"], [1, 9]], { add: [1] })], "t = (t[0], 9)"),
  ],
  "py-set": [
    S("Một danh sách có GDN hai lần.", "A list with GDN twice.", [T("list", ["vị trí", "giá trị"], [[0, "GDN"], [1, "Meta"], [2, "GDN"]], { rows: [0, 2] })], "ch = [\"GDN\", \"Meta\", \"GDN\"]"),
    S("set(ch) giữ mỗi giá trị một lần. Còn hai phần tử.", "set(ch) keeps each value once. Two elements remain.", [T("set", ["giá trị"], [["GDN"], ["Meta"]], { add: [0, 1] })], "set(ch)   → {\"GDN\", \"Meta\"}"),
    S("Set không có vị trí, nên không hứa thứ tự và không có s[0]. Dùng nó để hỏi «có hay không» và đếm giá trị khác nhau.", "A set has no position, so no order promise and no s[0]. Use it to ask is it in there and to count distinct values.", [T("set", ["biểu thức", "kết quả"], [["\"GDN\" in s", "True"], ["len(s)", 2], ["s[0]", "TypeError"]], { bad: [2] })]),
  ],
  "py-np": [
    S("Mảng NumPy là một hình chữ nhật số, mọi ô cùng một kiểu. Đây là mảng 2 dòng 2 cột.", "A NumPy array is a rectangle of numbers, every cell of one type. This is 2 rows by 2 columns.", [T("a", ["", "cột 0", "cột 1"], [["dòng 0", 8, 24], ["dòng 1", 6, 12]])], "a = np.array([[8, 24], [6, 12]])"),
    S("sum(axis=0) cộng theo từng cột, ra hai số.", "sum(axis=0) adds down each column, giving two numbers.", [T("a", ["", "cột 0", "cột 1"], [["dòng 0", 8, 24], ["dòng 1", 6, 12], ["a.sum(axis=0)", 14, 36]], { cols: [1, 2], rows: [2] })], "a.sum(axis=0)   → [14, 36]"),
    S("Trộn số với chữ thì cả mảng bị ép thành chữ. Lúc đó không cộng được nữa.", "Mix numbers with text and the whole array is forced to text. You can no longer add.", [T("np.array([8, \"GDN\"])", ["phần tử", "giá trị", "kiểu"], [[0, "8", "chữ"], [1, "GDN", "chữ"]], { bad: [0, 1] })]),
  ],
  "py-ser": [
    S("Hai Series có nhãn (index) khác nhau: s1 có a, b, c; s2 có b, c, d.", "Two Series with different labels (index): s1 has a, b, c; s2 has b, c, d.", [T("s1", ["nhãn", "giá trị"], [["a", 1], ["b", 2], ["c", 3]]), T("s2", ["nhãn", "giá trị"], [["b", 10], ["c", 20], ["d", 30]])]),
    S("s1 + s2 cộng theo nhãn, không theo vị trí mắt nhìn. b và c có ở cả hai nên cộng được. a và d chỉ có một bên nên ra NaN.", "s1 + s2 adds by label, not by position. b and c are in both so they add. a and d are in only one so they give NaN.", [T("s1 + s2", ["nhãn", "kết quả"], [["a", "NaN"], ["b", 12], ["c", 23], ["d", "NaN"]], { rows: [1, 2], bad: [0, 3] })], "s1 + s2"),
  ],
  "py-frame": [
    S("DataFrame có nhãn dòng (a, b, c) và có vị trí (0, 1, 2). Hai thứ này khác nhau.", "A DataFrame has row labels (a, b, c) and positions (0, 1, 2). They are different things.", [df()]),
    S("loc dùng nhãn: df.loc[\"b\"] là dòng có nhãn b.", "loc uses labels: df.loc[\"b\"] is the row labeled b.", [df({ rows: [1] })], "df.loc[\"b\"]"),
    S("iloc dùng vị trí: df.iloc[1] là dòng ở vị trí 1. Hôm nay trùng, nhưng sau khi lọc hay xếp lại thì không còn trùng.", "iloc uses position: df.iloc[1] is the row at position 1. Same row today, but after filtering or sorting they no longer match.", [df({ rows: [1] })], "df.iloc[1]"),
    S("Cắt bằng loc lấy cả điểm cuối: df.loc[\"a\":\"b\"] có hai dòng.", "Slicing with loc includes the end: df.loc[\"a\":\"b\"] has two rows.", [df({ rows: [0, 1] })], "df.loc[\"a\":\"b\"]"),
    S("Cắt bằng iloc bỏ điểm cuối: df.iloc[0:1] chỉ có một dòng.", "Slicing with iloc excludes the end: df.iloc[0:1] has just one row.", [df({ rows: [0] })], "df.iloc[0:1]"),
  ],
};
