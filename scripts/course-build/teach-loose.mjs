/** Original lessons for items that never matched a concept essay.
 *  Prose is standard knowledge plus a worked example. It does not quote the outline.
 */

const illus = (claim) => ({ claim, source: "ví dụ minh họa, không phải số liệu ngành" });

function lesson(p) {
  return {
    sim: null,
    formula: null,
    steps: [],
    pipeline: [],
    pitfalls: [],
    symbols: [],
    glossary: [],
    recall: [],
    sources: [],
    ...p,
  };
}

export function teachLoose({ course, module: mod, session }) {
  const where = `${mod.title}\n${session.title}`.toLowerCase();
  const courseName = course.title.toLowerCase();
  const hit = RULES.find((rule) => rule.test(where, courseName));
  return hit ? hit.call() : subjectOrder();
}

const RULES = [
  { test: (w, c) => /capstone/.test(c) || /chưa mở|nội dung chưa/.test(w), call: capstone },
  { test: (w) => /mind\s*map|mindmap/.test(w) && /inferential/.test(w), call: inferenceChain },
  { test: (w) => /mind\s*map|mindmap/.test(w) && /advanced sql/.test(w), call: sqlAdvanced },
  { test: (w) => /mind\s*map|mindmap/.test(w) && /python|data science/.test(w), call: pythonRole },
  { test: (w) => /mind\s*map|mindmap/.test(w), call: subjectOrder },
  { test: (w) => /practice|graded|assessment|interview|coding/.test(w) && /control structure|conditional|loop/.test(w), call: pyControl },
  { test: (w) => /practice|graded|assessment|interview|coding/.test(w) && /data structure/.test(w), call: pyStruct },
  { test: (w) => /practice|graded|assessment|interview|coding/.test(w) && /librar|numpy|pandas|matplotlib|seaborn/.test(w), call: pyLib },
  { test: (w) => /practice|graded|assessment|interview|coding/.test(w) && /python|operator|fundamental/.test(w), call: pyOps },
  { test: (w, c) => /practice|graded|assessment/.test(w) && /excel/.test(`${c}\n${w}`), call: excelDrill },
  { test: (w) => /practice|assessment/.test(w) && /descriptive|position|variability|association/.test(w), call: positionDrill },
  { test: (w) => /practice|graded|coding|case study/.test(w) && /window|best practice|advanced sql/.test(w), call: sqlAdvanced },
  { test: (w) => /practice|graded|coding|case study/.test(w) && /sql|mysql|database/.test(w), call: sqlDrill },
  { test: (w) => /interview|graded|practice|demonstration/.test(w) && /hypothesis|a\/b|anova|inferential/.test(w), call: hypDrill },
  { test: (w) => /interview|practice/.test(w) && /eda|exploratory/.test(w), call: edaDrill },
  { test: (w) => /graded|practice/.test(w) && /time series|forecast|smooth/.test(w), call: sesDrill },
  { test: (w) => /interview|practice|subjective/.test(w) && /logistic/.test(w), call: logitDrill },
  { test: (w) => /interview|practice/.test(w) && /cluster/.test(w), call: clusterDrill },
  { test: (w) => /practice|graded/.test(w) && /tableau|power bi|visual/.test(w), call: chartDrill },
  { test: (w) => /graded|practice|overview/.test(w) && /framework|problem solving|analytical thinking/.test(w), call: frameDrill },
  { test: (w) => /practice|graded|demonstration/.test(w) && /rag|retrieval|llama/.test(w), call: ragDrill },
  { test: (w) => /practice|graded/.test(w) && /genai|gen ai|openai|chatbot|shop/.test(w), call: genaiDrill },
  { test: (w) => /assignment|case study/.test(w), call: caseDrill },
  { test: (w) => /operations research/.test(w) || /\bor\b/.test(w), call: orDrill },
  { test: (w) => /tree|forest|bagging/.test(w), call: treeDrill },
  { test: (w) => /welcome|kickstart|learning experience|prism|program evaluation|journey/.test(w), call: howToStudy },
];

function capstone() {
  return lesson({
    id: "capstone",
    title: "Một bài tổng kết phân tích",
    situation:
      "Cuối chương trình thường là một quyết định kinh doanh thật, một bộ dữ liệu, và một giới hạn thời gian. Đề chi tiết có thể chưa được phát.",
    problem:
      "Viết một báo cáo công cụ: đã dùng SQL, đã vẽ biểu đồ, đã chạy một mô hình. Người đọc không biết nên làm gì vào thứ Hai.",
    why:
      "Bài tổng kết tồn tại để chứng minh bạn đi được từ câu hỏi tới khuyến nghị, và chỉ ra chỗ kết luận không đứng.",
    plain:
      "Một capstone phân tích có bốn phần: quyết định, dữ liệu, phương pháp, và giới hạn.",
    precise:
      "Quyết định là một hành động có người chịu trách nhiệm, không phải «khám phá dữ liệu». Dữ liệu phải nói được nguồn, đơn vị, và những hàng đã bỏ. Phương pháp phải khớp câu hỏi: mô tả nếu chỉ cần bức tranh, kiểm định nếu cần so hai nhóm, mô hình nếu cần dự đoán một hàng mới. Giới hạn ghi giả định nào nếu sai thì khuyến nghị đổi. Không có đề chính thức thì vẫn luyện được khung này trên một câu hỏi của chính công việc, với số ghi rõ là ví dụ.",
    steps: [
      { label: "Quyết định", math: "Giữ hay tắt một nhóm từ khóa", say: "Một câu, một người nhận kết quả." },
      { label: "Thước", math: "CPA và số form trong 14 ngày", say: "Hai số. Không thêm mười chỉ số cho đủ trang." },
      { label: "Giới hạn", math: "Chưa tách được thương hiệu và khuyến mại", say: "Viết điều này cạnh kết luận, không giấu ở phụ lục." },
    ],
    insight: "Người đọc phải làm được một việc khác đi sau báo cáo. Nếu không, bài chưa xong.",
    sources: [illus("Ví dụ từ khóa và 14 ngày không phải đề thi.")],
  });
}

function inferenceChain() {
  return lesson({
    id: "infer-chain",
    title: "Chuỗi suy diễn: từ mẫu tới kết luận",
    formula: "z = \\dfrac{\\bar x - \\mu_0}{\\sigma/\\sqrt n}",
    situation:
      "Một tuần 36 landing, thời gian ở lại trung bình 43 giây. Bạn muốn nói khách nói chung có ở lại hơn 40 giây hay không. Ví dụ minh họa, độ lệch chuẩn coi như 12 giây.",
    problem:
      "Lấy 43 lớn hơn 40 rồi kết luận. Trung bình mẫu luôn dao động quanh trung bình thật. Lệch 3 giây có thể chỉ là mẫu nhỏ.",
    why:
      "Suy diễn thống kê tồn tại để một số tính từ mẫu có kèm mức không chắc, thay vì bị kể như sự thật của cả tập.",
    plain:
      "Xác suất là luật của một phép thử. Phân phối mẫu nói trung bình của nhiều dòng dao động thế nào. Khoảng tin cậy và kiểm định là hai cách đọc cùng một dao động đó.",
    precise:
      "Thứ tự phụ thuộc: xác suất và biến ngẫu nhiên, rồi phân phối của trung bình mẫu, rồi định lý giới hạn trung tâm khi mẫu đủ lớn, rồi khoảng tin cậy, rồi kiểm định. Với ví dụ trên, sai số chuẩn là 12/√36 = 2. z = (43−40)/2 = 1,5. Hai phía, ngưỡng thông dụng 1,96 ở mức 5%. 1,5 chưa qua 1,96, nên theo quy ước này chưa bác bỏ giả thuyết trung bình bằng 40. p hai phía xấp xỉ 0,134. Đây không phải xác suất giả thuyết đúng.",
    symbols: [
      { sym: "z", meaning: "trung bình mẫu cách giả thuyết bao nhiêu sai số chuẩn" },
      { sym: "\\sigma/\\sqrt n", meaning: "sai số chuẩn của trung bình" },
    ],
    steps: [
      { label: "Sai số chuẩn", math: "12/\\sqrt{36} = 2", say: "n = 36, σ = 12. Ví dụ minh họa." },
      { label: "Thống kê", math: "z = (43-40)/2 = 1{,}5", say: "So với 1,96 nếu quy ước α = 0,05 hai phía." },
      { label: "Đọc", math: "p \\approx 0{,}134", say: "Chưa nhỏ hơn 0,05. Chưa bác bỏ H0 theo quy ước này." },
    ],
    pitfalls: [
      { left: "p-value", right: "P(H0 đúng)", note: "p tính trong thế giới H0 đúng. Nó không phải xác suất H0 đúng sau khi thấy dữ liệu." },
    ],
    insight: "43 lớn hơn 40 chưa phải một kết luận. 1,5 so với ngưỡng đã chốt mới là kết luận.",
    sources: [
      { claim: "Sai số chuẩn của trung bình là độ lệch chuẩn chia căn bậc hai cỡ mẫu.", source: "Wikipedia, Standard error", url: "https://en.wikipedia.org/wiki/Standard_error" },
      illus("36 phiên, trung bình 43 giây, sigma 12 là ví dụ tính tay."),
    ],
  });
}

function sqlDrill() {
  return lesson({
    id: "sql-drill",
    title: "Một câu SQL: lọc, ghép, rồi mới cộng",
    formula: "\\text{FROM} \\to \\text{JOIN} \\to \\text{WHERE} \\to \\text{GROUP BY} \\to \\text{HAVING} \\to \\text{SELECT} \\to \\text{ORDER BY}",
    situation:
      "Ba cửa hàng, bốn đơn. Cần doanh thu theo thành phố, và chỉ giữ thành phố từ 10 đơn vị tiền trở lên. Ví dụ minh họa, không phải dữ liệu bán hàng.",
    problem:
      "Lọc doanh thu đã cộng bằng WHERE. WHERE chạy trước khi cộng, nên nó không thấy tổng. Thành phố không có đơn bị mất nếu dùng INNER JOIN.",
    why:
      "Thứ tự logic của SQL tồn tại để mỗi mệnh đề có một việc. Viết đúng thứ tự thì kết quả không phụ thuộc vào việc bạn đang tưởng tượng bảng nào.",
    plain:
      "JOIN gắn hàng bằng khóa. WHERE bỏ hàng. GROUP BY gom những hàng còn lại. HAVING lọc sau khi đã gom. SELECT chọn cột được in ra.",
    precise:
      "Bảng stores có (1, Quận 1), (2, Quận 3), (3, Thủ Đức). Bảng orders có (1, 12), (1, 4), (2, 9). INNER JOIN bỏ Thủ Đức vì không có đơn. LEFT JOIN giữ Thủ Đức với tổng không có. Tổng Quận 1 là 16, Quận 3 là 9. HAVING tổng ≥ 10 thì chỉ còn Quận 1. HAVING không thay được bằng WHERE trên cột tổng, trừ khi tổng đã là một cột của bảng con.",
    steps: [
      { label: "Ghép", math: "LEFT JOIN orders ON orders.store_id = stores.id", say: "Thủ Đức còn trong bảng." },
      { label: "Cộng", math: "GROUP BY city", say: "Quận 1 = 16, Quận 3 = 9, Thủ Đức trống." },
      { label: "Giữ", math: "HAVING SUM(amount) >= 10", say: "Chỉ Quận 1. Ngưỡng 10 là ví dụ." },
    ],
    code: {
      lang: "sql",
      source:
        "SELECT s.city, SUM(o.amount) AS revenue\nFROM stores s\nLEFT JOIN orders o ON o.store_id = s.id\nGROUP BY s.city\nHAVING SUM(o.amount) >= 10;",
      out: "Quận 1 | 16",
    },
    insight: "WHERE bỏ hàng. HAVING bỏ nhóm. Nhầm hai từ này thì câu vẫn chạy và trả về nhầm nhóm.",
    sources: [
      { claim: "Thứ tự xử lý logic của SELECT bắt đầu từ FROM, WHERE đứng trước GROUP BY, HAVING đứng sau.", source: "MySQL 8.4, SELECT statement", url: "https://dev.mysql.com/doc/refman/8.4/en/select.html" },
      illus("Ba cửa hàng và bốn đơn là ví dụ tính tay."),
    ],
  });
}

function sqlAdvanced() {
  return lesson({
    id: "sql-adv",
    title: "Cửa sổ, CASE, và chỗ điều kiện được phép đứng",
    formula: "\\mathrm{SUM}(x)\\ \\mathrm{OVER}\\ (\\mathrm{ORDER\\ BY}\\ t\\ \\mathrm{ROWS\\ UNBOUNDED\\ PRECEDING})",
    situation:
      "Doanh thu năm tuần, ví dụ minh họa: 10, 12, 8, 15, 11. Cần tổng dồn tới từng tuần, và một nhãn «yếu» nếu tuần dưới 11, mà không làm sập các tuần khác.",
    problem:
      "GROUP BY tuần thì mỗi tuần một dòng, mất tổng dồn. Tự cộng trong bảng tính thì tuần mới về phải làm lại. CASE viết trong WHERE thì cả nhóm biến mất thay vì được dán nhãn.",
    why:
      "Hàm cửa sổ tồn tại để vừa giữ từng dòng vừa nhìn các dòng lân cận. CASE tồn tại để phân loại trên dòng, không phải để lọc dòng.",
    plain:
      "OVER không làm giảm số dòng. CASE trả về một giá trị mới trên mỗi dòng. Điều kiện lọc vẫn là WHERE hoặc HAVING.",
    precise:
      "Tổng dồn của dãy 10, 12, 8, 15, 11 là 10, 22, 30, 45, 56. Khung ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW nghĩa là từ dòng đầu phân vùng tới dòng hiện tại. LAG lấy giá trị dòng trước trong cùng thứ tự: tuần thứ ba nhìn thấy 12. CASE WHEN amount < 11 THEN 'yếu' ELSE 'đủ' END không xóa dòng. Bọc cột bằng hàm trong WHERE, ví dụ hàm trên ngày, có thể làm chỉ mục không được dùng. Đó là chuyện hiệu năng, khác với chuyện đúng sai của tổng.",
    steps: [
      { label: "Dồn", math: "10,\\ 22,\\ 30,\\ 45,\\ 56", say: "Mỗi số là tổng từ đầu tới tuần đó." },
      { label: "LAG", math: "tuần 3 nhìn thấy 12", say: "Không có tuần trước ở dòng đầu." },
      { label: "Nhãn", math: "CASE WHEN amount < 11 THEN 'yếu' ELSE 'đủ' END", say: "Ngưỡng 11 là ví dụ minh họa." },
    ],
    insight: "Cửa sổ giữ dòng. GROUP BY nuốt dòng. Chọn sai thì câu hỏi bị đổi nghĩa.",
    sources: [
      { claim: "Hàm cửa sổ tính trên một tập dòng liên quan tới dòng hiện tại và không gom kết quả thành một dòng.", source: "MySQL 8.4, Window functions", url: "https://dev.mysql.com/doc/refman/8.4/en/window-functions.html" },
      illus("Dãy năm tuần là ví dụ tính tay."),
    ],
  });
}

function pyOps() {
  return lesson({
    id: "py-ops",
    title: "Phép tính trên đúng kiểu",
    situation:
      "Chi tiêu 2.400.000 và 30 form. Cần CPA, và một cờ báo nếu form trên 20 đồng thời chi dưới 3.000.000. Ví dụ minh họa.",
    problem:
      "Để chi tiêu trong ngoặc kép thì phép cộng thành nối chữ. Dùng & để kết hợp điều kiện thì đang làm phép bit, không phải phép logic đọc được.",
    why:
      "Toán tử tồn tại để nói rõ so sánh, gán, chia, hay kết hợp điều kiện. Kiểu dữ liệu quyết định toán tử đó nghĩa là gì.",
    plain:
      "Dấu = là gán. Dấu == là so sánh. Dấu / là chia thực. and, or, not kết hợp điều kiện đúng-sai.",
    precise:
      "2_400_000 / 30 bằng 80000.0, kiểu float. // là chia lấy phần nguyên, % là số dư. Chuỗi \"30\" không chia được cho số, chương trình báo lỗi, còn chuỗi cộng chuỗi thì nối và không báo lỗi. Đó là kiểu sai nguy hiểm hơn. and dừng sớm: nếu vế trái sai thì vế phải không cần đúng. 0, chuỗi rỗng và None đều coi là sai trong một điều kiện if. Chúng không bằng nhau.",
    steps: [
      { label: "CPA", math: "2\\_400\\_000 / 30 = 80\\_000", say: "Một dấu gạch là chia thực." },
      { label: "Cờ", math: "forms > 20 and spend < 3_000_000", say: "Cả hai đều đúng thì cờ đúng." },
      { label: "Sai kiểu", math: "\\\"2400000\\\" + \\\"300000\\\"", say: "Ra chuỗi dài hơn, không ra tổng tiền." },
    ],
    code: {
      lang: "python",
      source: "spend = 2_400_000\nforms = 30\ncpa = spend / forms\nflag = forms > 20 and spend < 3_000_000\nprint(cpa, flag)",
      out: "80000.0 True",
    },
    insight: "CPA tính được chỉ khi chi tiêu và form còn là số lúc phép chia chạy.",
    sources: [
      { claim: "Phép / trên số trong Python 3 là chia thực. and, or, not là phép logic.", source: "Python docs, Numeric types", url: "https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex" },
      illus("2.400.000 và 30 form là ví dụ minh họa."),
    ],
  });
}

function pyControl() {
  return lesson({
    id: "py-control",
    title: "Rẽ nhánh và lặp có điểm dừng",
    situation:
      "Bốn ngày có 4, 0, 3 và 6 form. Cần tổng những ngày có form, bỏ ngày 0 vì ngày đó tracking hỏng, không phải ngày không có khách. Ví dụ minh họa.",
    problem:
      "Cộng cả bốn số được 13 vẫn đúng tình cờ vì số 0 không đổi tổng. Ngày tracking hỏng mà ghi −1 thì tổng bị kéo. Vòng while quên tăng biến thì không bao giờ thoát.",
    why:
      "if tồn tại để một quy tắc chỉ áp lên một số dòng. for tồn tại khi tập cần duyệt đã có sẵn. while tồn tại khi chưa biết trước số vòng, và vì thế cần một cách làm điều kiện thành sai.",
    plain:
      "if chọn một nhánh. for đi qua từng phần tử. continue bỏ phần còn lại của vòng hiện tại. break thoát hẳn vòng.",
    precise:
      "Với dãy 4, 0, 3, 6, bỏ số 0 thì tổng là 13. Nếu quy tắc là bỏ số âm, tổng vẫn 13. Hai quy tắc khác nhau, trùng kết quả trên ví dụ này. Phải thử một ngày −1 mới thấy khác. range(n) đi 0 tới n−1, không gồm n. Biến tạo trong hàm không nhìn thấy bên ngoài hàm.",
    steps: [
      { label: "Quy tắc", math: "bỏ ngày \\le 0", say: "0 và số âm đều không được cộng." },
      { label: "Tính", math: "4+3+6 = 13", say: "Ngày 0 bị bỏ." },
      { label: "Thử phá", math: "thêm một ngày -1", say: "Tổng vẫn 13. Nếu ai đó cộng tất cả trừ đúng số 0, tổng thành 12." },
    ],
    code: {
      lang: "python",
      source: "forms = [4, 0, 3, 6, -1]\ntotal = 0\nfor value in forms:\n    if value <= 0:\n        continue\n    total += value\nprint(total)",
      out: "13",
    },
    insight: "Một ví dụ mà hai quy tắc ra cùng số thì ví dụ đó chưa kiểm tra được quy tắc.",
    sources: [
      { claim: "for duyệt một iterable. continue sang vòng sau, break thoát vòng.", source: "Python docs, The for statement", url: "https://docs.python.org/3/tutorial/controlflow.html#for-statements" },
      illus("Dãy form bốn ngày là ví dụ minh họa."),
    ],
  });
}

function pyStruct() {
  return lesson({
    id: "py-struct",
    title: "Chọn đúng cấu trúc cho một việc",
    situation:
      "Ba kênh, mỗi kênh một khoản chi: GDN 4, Facebook 6, TikTok 4, đơn vị triệu, ví dụ minh họa. Cần tổng chi và cần biết một kênh đã có trong danh sách hay chưa.",
    problem:
      "Để chi tiêu trong một list rồi tìm theo vị trí thì lệch index là lấy nhầm kênh. Để trong set thì mất số tiền vì set không giữ kèm giá trị.",
    why:
      "Mỗi cấu trúc giữ một loại câu hỏi. List giữ thứ tự. Dict giữ một giá trị theo khóa. Set giữ sự có mặt, không giữ bản sao.",
    plain:
      "Tra theo tên thì dùng dict. Danh sách có thứ tự thì dùng list. Chỉ cần biết có hay không, và không muốn trùng, thì dùng set.",
    precise:
      "dict chi tiêu: tổng là 4+6+4 = 14. Khóa lặp thì giá trị sau ghi đè giá trị trước, không cộng dồn. Muốn cộng dồn phải tự cộng. set của tên kênh có 3 phần tử. Tuple không sửa tại chỗ, hợp để làm khóa của dict. Chuỗi là dãy ký tự, cắt bằng lát, không phải bằng split trừ khi có dấu ngăn.",
    steps: [
      { label: "Tổng", math: "4+6+4 = 14", say: "Cộng giá trị, không cộng số phần tử." },
      { label: "Tra", math: "spend[\\\"Facebook\\\"] = 6", say: "Khóa không có thì KeyError, trừ khi dùng get." },
      { label: "Có mặt", math: "\\\"GDN\\\" in {\\\"GDN\\\", \\\"Facebook\\\", \\\"TikTok\\\"}", say: "Set trả về đúng hoặc sai, không trả về số tiền." },
    ],
    insight: "Hỏi «bao nhiêu tiền của kênh này» là một dict. Hỏi «kênh này đã xuất hiện chưa» là một set.",
    sources: [
      { claim: "Dict ánh xạ khóa tới giá trị. Set là tập không có phần tử trùng.", source: "Python docs, Mapping types", url: "https://docs.python.org/3/library/stdtypes.html#mapping-types-dict" },
      illus("Ba khoản chi 4, 6, 4 là ví dụ minh họa."),
    ],
  });
}

function pyLib() {
  return lesson({
    id: "py-lib",
    title: "Một bảng, một phép gom",
    situation:
      "Sáu dòng chi tiêu, hai kênh. Cần tổng chi từng kênh. Ví dụ minh họa: GDN 10, GDN 5, Facebook 8, Facebook 2, GDN 1, Facebook 4.",
    problem:
      "Tự viết vòng lặp được, nhưng sót kênh mới hoặc cộng nhầm cột form vào cột tiền. Vẽ biểu đồ trước khi biết đơn vị của cột thì hình đúng dữ liệu sai nghĩa.",
    why:
      "DataFrame tồn tại để phép gom theo nhóm là một thao tác có tên, kiểm lại được, không phải một vòng lặp viết tay mỗi lần.",
    plain:
      "Một cột là một Series. groupby cắt bảng theo giá trị của một cột rồi tính trên từng mảnh.",
    precise:
      "Tổng GDN là 16, tổng Facebook là 14. groupby không sắp các nhóm theo tổng, trừ khi bạn yêu cầu sort. mean của một cột chữ sẽ bị bỏ hoặc báo lỗi tùy phiên bản và tùy kiểu, không phải lúc nào cũng ra một số. Histogram cần một cột số. Cột mã chiến dịch mà vẽ histogram thì ra một hình không có nghĩa tần suất.",
    steps: [
      { label: "GDN", math: "10+5+1 = 16", say: "Ba dòng cùng nhãn." },
      { label: "Facebook", math: "8+2+4 = 14", say: "Ba dòng còn lại." },
      { label: "Kiểm", math: "16+14 = 30", say: "Tổng các nhóm phải bằng tổng cả bảng." },
    ],
    code: {
      lang: "python",
      source:
        "import pandas as pd\ndf = pd.DataFrame({\n  'kenh': ['GDN','GDN','Facebook','Facebook','GDN','Facebook'],\n  'chi': [10, 5, 8, 2, 1, 4],\n})\nprint(df.groupby('kenh')['chi'].sum().to_dict())",
      out: "{'Facebook': 14, 'GDN': 16}",
    },
    insight: "Tổng các nhóm khác tổng cả bảng thì phép gom đang bỏ dòng hoặc cộng nhầm cột.",
    sources: [
      { claim: "groupby tách bảng theo khóa rồi áp một phép tính trên từng nhóm.", source: "pandas docs, Group by", url: "https://pandas.pydata.org/docs/user_guide/groupby.html" },
      illus("Sáu dòng chi tiêu là ví dụ minh họa."),
    ],
  });
}

function excelDrill() {
  return lesson({
    id: "excel-drill",
    title: "Một quy tắc, một ô, cả cột nhìn vào ô đó",
    formula: "\\text{CPA} = \\text{Spend}/\\text{Conversions}",
    situation:
      "Ngưỡng CPA đổi mỗi tháng. Tháng này 90.000đ, ví dụ minh họa. Bảng có nhiều dòng kênh. Cần đánh dấu dòng nào vượt ngưỡng mà tháng sau chỉ sửa một ô.",
    problem:
      "Gõ 90000 trong từng công thức. Tháng sau sửa sót một dòng thì báo cáo có hai ngưỡng mà không có lỗi.",
    why:
      "Tham chiếu tuyệt đối tồn tại để một giả định của báo cáo nằm ở một chỗ. Hàm IF tồn tại để quy tắc thành cột đếm được.",
    plain:
      "$ khóa ô. IF trả về một trong hai nhãn. COUNTIF đếm nhãn.",
    precise:
      "Ngưỡng để ở $B$1. Công thức =IF(E2>$B$1,\"vượt\",\"ổn\") kéo xuống thì B1 không trượt. Đổi B1 là đổi cả cột. COUNTIF trên cột nhãn đếm số dòng vượt. Định dạng có điều kiện chỉ đổi màu, không tạo ra số để cộng.",
    steps: [
      { label: "Ngưỡng", math: "B1 = 90000", say: "Ví dụ minh họa." },
      { label: "Dòng", math: "=IF(E2>$B$1,\"vượt\",\"ổn\")", say: "E2 là CPA của dòng." },
      { label: "Đếm", math: "=COUNTIF(F:F,\"vượt\")", say: "Đếm chữ, không đếm màu nền." },
    ],
    insight: "Sửa một ô ngưỡng mà cả báo cáo đổi theo thì file đang tính. Sửa từng dòng thì file đang nhớ hộ bạn.",
    sources: [
      { claim: "Dấu $ giữ nguyên hàng hoặc cột khi sao công thức.", source: "Microsoft Support, relative and absolute references", url: "https://support.microsoft.com/en-us/office/switch-between-relative-absolute-and-mixed-references-dfec08cd-ae65-4f56-8393-132856221f44" },
      illus("Ngưỡng 90.000đ là ví dụ minh họa."),
    ],
  });
}

function positionDrill() {
  return lesson({
    id: "position-drill",
    title: "Vị trí của một điểm trong mẫu",
    formula: "z = \\dfrac{x-\\bar x}{s}",
    situation:
      "Năm mức CPA, ví dụ minh họa: 40, 50, 55, 70, 200. Trung bình bị 200 kéo lên. Một kênh 70 có «cao» hay không còn tùy bạn so với trung bình hay với trung vị.",
    problem:
      "Gọi 70 là cao vì lớn hơn trung bình. Trung bình của năm số là 83. 70 thấp hơn trung bình nhưng cao hơn phần lớn các kênh còn lại.",
    why:
      "Trung vị và phân vị tồn tại vì trung bình không nói vị trí. Điểm z tồn tại để khoảng cách đó tính theo độ lệch, không theo đơn vị gốc.",
    plain:
      "Trung vị là điểm giữa sau khi sắp. z nói một điểm cách trung bình bao nhiêu độ lệch chuẩn mẫu.",
    precise:
      "Sắp 40, 50, 55, 70, 200. Trung vị là 55. Trung bình là 83. Độ lệch của 70 so với trung bình là âm, so với trung vị là dương. Với mẫu nhỏ, đừng biến một phân vị thành «top bao nhiêu phần trăm ngành». Phân vị ở đây chỉ là vị trí trong đúng năm số này.",
    steps: [
      { label: "Giữa", math: "40, 50, 55, 70, 200", say: "Số đứng giữa là 55." },
      { label: "Trung bình", math: "(40+50+55+70+200)/5 = 83", say: "200 kéo trung bình vượt 70." },
      { label: "Đọc", math: "70 < 83 và 70 > 55", say: "Cùng một điểm, hai câu khác nhau." },
    ],
    insight: "Hỏi «cao hơn phần đông trong mẫu này không» thì nhìn trung vị. Hỏi «cách tâm cộng bao xa» thì nhìn trung bình.",
    sources: [
      { claim: "Trung vị là giá trị giữa của mẫu đã sắp. Trung bình cộng chịu ảnh hưởng của điểm cực.", source: "Wikipedia, Median", url: "https://en.wikipedia.org/wiki/Median" },
      illus("Năm mức CPA là ví dụ minh họa."),
    ],
  });
}

function hypDrill() {
  return lesson({
    id: "hyp-drill",
    title: "Bảy bước của một kiểm định, trên một số",
    formula: "z = \\dfrac{\\hat p - p_0}{\\sqrt{p_0(1-p_0)/n}}",
    situation:
      "Landing thường có tỷ lệ form 2%. Tuần này 400 phiên, 12 form, tức 3%. Ví dụ minh họa. Cần một quy ước để không gọi mọi tuần nhích lên là thắng.",
    problem:
      "Thấy 3% lớn hơn 2% rồi đổi hết ngân sách. Với 400 phiên, sai số của một tỷ lệ quanh 2% không nhỏ.",
    why:
      "Các bước kiểm định tồn tại để ngưỡng được chốt trước khi nhìn độ hiếm của dữ liệu, không phải để trang trí một kết luận đã có.",
    plain:
      "Chọn H0, chọn α, tính thống kê, so với ngưỡng hoặc so p với α, rồi nói câu kết luận đúng phạm vi của phép thử.",
    precise:
      "H0: p = 0,02. α = 0,05 hai phía, ngưỡng z xấp xỉ 1,96. p̂ = 12/400 = 0,03. Sai số chuẩn dưới H0 là √(0,02×0,98/400) ≈ 0,007. z ≈ (0,03−0,02)/0,007 ≈ 1,43. Chưa qua 1,96. Theo quy ước này chưa bác bỏ H0. Câu được phép nói: tuần này chưa đủ hiếm để kết luận tỷ lệ đã khác 2%. Câu không được nói: đã chứng minh tỷ lệ vẫn là 2%.",
    steps: [
      { label: "Ước lượng", math: "12/400 = 0{,}03", say: "Tỷ lệ trong mẫu." },
      { label: "SE dưới H0", math: "\\sqrt{0{,}02\\times0{,}98/400}\\approx 0{,}007", say: "Dùng p0, không dùng p mũ, khi kiểm định một tỷ lệ." },
      { label: "z", math: "0{,}01/0{,}007\\approx 1{,}43", say: "Nhỏ hơn 1,96. Chưa bác bỏ." },
    ],
    pitfalls: [
      { left: "Không bác bỏ", right: "Chứng minh H0", note: "Không bác bỏ chỉ nghĩa là dữ liệu chưa vào vùng hiếm đã quy ước. Mẫu lớn hơn có thể bác bỏ cùng một hiệu." },
    ],
    insight: "3% so với 2% chưa phải kết quả. 1,43 so với 1,96 mới là kết quả của quy ước này.",
    sources: [
      { claim: "Kiểm định một tỷ lệ dùng sai số chuẩn tính bằng p0 khi H0 là một giá trị xác định.", source: "Wikipedia, Binomial proportion confidence interval", url: "https://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval" },
      { claim: "ASA: p-value không đo xác suất giả thuyết đúng, cũng không đo cỡ hiệu.", source: "ASA statement on p-values, 2016", url: "https://www.amstat.org/asa/files/pdfs/p-valuestatement.pdf" },
      illus("400 phiên và 12 form là ví dụ minh họa."),
    ],
  });
}

function edaDrill() {
  return lesson({
    id: "eda-drill",
    title: "Nhìn bảng trước khi kể chuyện",
    situation:
      "Một cột CPA có năm số 40, 42, 41, 39 và một số 900 vì lỗi đơn vị. Ví dụ minh họa.",
    problem:
      "Vẽ trung bình rồi nói CPA khoảng 212. Bốn kênh đang quanh 40. Một ô sai đơn vị nuốt mất câu chuyện.",
    why:
      "EDA tồn tại để phát hiện đơn vị, giá trị thiếu, và hình dạng trước khi một số tổng kết được mang ra quyết định.",
    plain:
      "Đếm dòng, đếm thiếu, nhìn min max, rồi mới tới trung bình. Một điểm cực cần một quyết định: sửa đơn vị, hoặc tách riêng, không được im lặng.",
    precise:
      "Min 39, max 900, trung vị quanh 41, trung bình khoảng 212. Khoảng tứ phân vị của bốn điểm hợp lệ nằm sát nhau. 900 không cùng đơn vị thì không được để trong cùng một trung bình. Impute bằng trung bình khi đó sẽ kéo cả phần thiếu về phía lỗi. Ghi lại quy tắc loại, đừng xóa rồi quên.",
    steps: [
      { label: "Tâm bền", math: "trung vị \\approx 41", say: "Không bị 900 kéo." },
      { label: "Tâm cộng", math: "(40+42+41+39+900)/5 \\approx 212", say: "Không mô tả bốn kênh đang chạy." },
      { label: "Việc", math: "tách ô 900, ghi lý do", say: "Rồi tính lại trung bình của phần còn lại." },
    ],
    insight: "Nếu min và max không cùng một đơn vị trong đầu bạn, đừng tính trung bình.",
    sources: [
      illus("Năm số CPA là ví dụ minh họa cho một lỗi đơn vị."),
      { claim: "Điểm cực làm lệch trung bình cộng mạnh hơn trung vị.", source: "Wikipedia, Outlier", url: "https://en.wikipedia.org/wiki/Outlier" },
    ],
  });
}

function sesDrill() {
  return lesson({
    id: "ses-drill",
    title: "Làm trơn mũ, tính tay ba bước",
    formula: "\\ell_t = \\alpha y_t + (1-\\alpha)\\ell_{t-1}",
    situation:
      "Ba tuần, lượng form 20, 22, 21. Ví dụ minh họa. Cần một mức nền cho tuần sau, không nhảy theo từng tuần một.",
    problem:
      "Lấy tuần cuối làm dự báo thì 21, bỏ mất thông tin tuần 20 và 22. Lấy trung bình cả ba thì tuần mới không nặng hơn tuần cũ.",
    why:
      "Làm trơn mũ tồn tại để dự báo bước tới là một trung bình có quên: quan sát mới nặng hơn, quan sát cũ vẫn còn dấu.",
    plain:
      "α gần 1 thì bám sát số mới. α gần 0 thì mức gần như không đổi. Dự báo bước tới, với SES, chính là mức vừa cập nhật.",
    precise:
      "Đặt ℓ0 = 20, α = 0,4. ℓ1 = 0,4×22 + 0,6×20 = 20,8. ℓ2 = 0,4×21 + 0,6×20,8 = 20,88. Dự báo tuần sau là 20,88, không phải 21 và không phải (20+22+21)/3 = 21. Công thức này chưa có xu hướng và chưa có mùa vụ. Chuỗi đang tăng đều thì SES đi chậm phía sau. Lúc đó Holt mới thêm một thành phần dốc.",
    steps: [
      { label: "Mốc", math: "\\ell_0 = 20,\\ \\alpha = 0{,}4", say: "Mốc đầu lấy bằng quan sát đầu. Đó là một quy ước đơn giản." },
      { label: "Bước 1", math: "0{,}4\\times22 + 0{,}6\\times20 = 20{,}8", say: "Tuần 22 kéo mức lên một ít." },
      { label: "Bước 2", math: "0{,}4\\times21 + 0{,}6\\times20{,}8 = 20{,}88", say: "Dự báo tuần tới của SES là số này." },
    ],
    insight: "α là tốc độ quên. Không có α «đúng cho ngành». Có α vừa với chuỗi đang cầm.",
    sources: [
      { claim: "SES cập nhật mức bằng trung bình có trọng số của quan sát mới và mức cũ.", source: "Wikipedia, Exponential smoothing", url: "https://en.wikipedia.org/wiki/Exponential_smoothing" },
      illus("20, 22, 21 và α = 0,4 là ví dụ tính tay."),
    ],
  });
}

function logitDrill() {
  return lesson({
    id: "logit-drill",
    title: "Từ log-odds sang một xác suất",
    formula: "p = \\dfrac{1}{1+e^{-(\\beta_0+\\beta_1 x)}}",
    situation:
      "Một khách, điểm của mô hình β0 + β1 x = 0. Ví dụ minh họa. Cần xác suất rời bỏ, không cần một nhãn 0 hoặc 1 vội.",
    problem:
      "Hồi quy tuyến tính trên cờ 0/1 có thể ra 1,2 hoặc −0,1. Đó không phải xác suất. Còn nếu chỉ nhìn accuracy, một mô hình luôn đoán «không rời» vẫn đúng phần lớn khi rất ít người rời.",
    why:
      "Hàm logistic tồn tại để mọi điểm số thực thành một số nằm giữa 0 và 1. Ngưỡng tồn tại vì xác suất chưa phải quyết định.",
    plain:
      "Log-odds là một số thực không giới hạn. Logistic ép số đó về khoảng (0, 1). Ngưỡng 0,5 chỉ là một lựa chọn, không phải định luật.",
    precise:
      "β0 + β1 x = 0 thì p = 1/(1+e^0) = 0,5. Bằng 2 thì p ≈ 0,88. Bằng −2 thì p ≈ 0,12. Odds nhân e^β1 khi x tăng 1, nếu các thứ khác giữ nguyên. Chọn ngưỡng 0,3 hay 0,7 đổi số lần báo động, không đổi các hệ số. Accuracy khi lớp lệch không nói được bạn có bắt được nhóm hiếm hay không.",
    steps: [
      { label: "Điểm 0", math: "p = 1/(1+1) = 0{,}5", say: "Log-odds bằng 0." },
      { label: "Điểm 2", math: "p = 1/(1+e^{-2}) \\approx 0{,}88", say: "Cùng mô hình, điểm cao hơn." },
      { label: "Ngưỡng", math: "0{,}88 > 0{,}7", say: "0,7 là ngưỡng ví dụ, không phải hệ số của mô hình." },
    ],
    insight: "Hệ số tạo ra xác suất. Ngưỡng mới tạo ra hành động. Hai thứ đó không sửa thay cho nhau.",
    sources: [
      { claim: "Hàm logistic đưa một tổ hợp tuyến tính về khoảng (0, 1).", source: "Wikipedia, Logistic function", url: "https://en.wikipedia.org/wiki/Logistic_function" },
      illus("Các điểm 0, 2 và −2 là ví dụ tính tay."),
    ],
  });
}

function clusterDrill() {
  return lesson({
    id: "cluster-drill",
    title: "Cụm là nhóm do khoảng cách tạo ra",
    situation:
      "Bốn khách, ví dụ minh họa, chi tiêu và số lần ghé: (1, 1), (1, 2), (8, 8), (9, 8). Muốn hai nhóm chăm sóc khác nhau.",
    problem:
      "Khoanh bằng mắt trên hai người thì được. Thêm chiều thứ ba thì mắt hết việc. Chọn k = 4 thì mỗi người một cụm, không còn là một nhóm để ra chính sách.",
    why:
      "K-means tồn tại để lặp một quy tắc: gán điểm về tâm gần nhất, rồi dời tâm tới trung bình của điểm vừa nhận.",
    plain:
      "Tâm là điểm đại diện của cụm. k là số cụm bạn yêu cầu, không phải số cụm «có thật» trong khách.",
    precise:
      "Hai điểm đầu gần nhau, hai điểm sau gần nhau. Một khởi tạo hợp lý cho hai cụm sẽ tách đúng hai cặp đó. Tâm cụm thấp quanh (1, 1,5), tâm cụm cao quanh (8,5, 8). Khoảng cách ở đây là Euclid trên số đã cùng đơn vị. Nếu một trục là đồng và một trục là số lần, trục đồng nuốt khoảng cách. Phải chuẩn hóa trước, hoặc chấp nhận rằng cụm đang chủ yếu là cụm theo tiền.",
    steps: [
      { label: "Nhóm thấp", math: "(1,1)\\ \\text{và}\\ (1,2)", say: "Tâm xấp xỉ (1, 1,5)." },
      { label: "Nhóm cao", math: "(8,8)\\ \\text{và}\\ (9,8)", say: "Tâm xấp xỉ (8,5, 8)." },
      { label: "k", math: "k = 2", say: "k = 4 trên bốn điểm thì hết ý nghĩa nhóm." },
    ],
    insight: "Cụm mô tả cách các điểm đứng cạnh nhau. Nó không tự đặt tên «khách tốt» hay «khách xấu».",
    sources: [
      { claim: "K-means xen kẽ bước gán điểm và bước cập nhật tâm.", source: "Wikipedia, k-means clustering", url: "https://en.wikipedia.org/wiki/K-means_clustering" },
      illus("Bốn điểm là ví dụ minh họa, trục coi như đã cùng thước."),
    ],
  });
}

function chartDrill() {
  return lesson({
    id: "chart-drill",
    title: "Một câu hỏi, một kiểu hình",
    situation:
      "Ba kênh trong tám tuần. Người nghe hỏi kênh nào đang trượt, không hỏi cơ cấu phần trăm của một tuần.",
    problem:
      "Biểu đồ tròn cho tám tuần thì không đọc được hướng. Hai trục y khác đơn vị trên cùng một hình thì hai đường giao nhau ở một chỗ không có nghĩa.",
    why:
      "Mỗi kiểu biểu đồ khớp một quan hệ. Chọn sai kiểu thì số đúng vẫn bị đọc thành một câu sai.",
    plain:
      "So nhóm thì cột. Theo thời gian thì đường. Phân bố thì histogram hoặc hộp. Hai biến số thì scatter.",
    precise:
      "Đường đòi trục hoành có thứ tự, thường là thời gian. Cột không cần thứ tự thời gian. Histogram gom một biến số vào các khoảng. Scatter cần từng cặp (x, y), không cần gom trước. Nếu câu hỏi là «kênh nào trượt», hình là ba đường theo tuần, hoặc một cột hiệu cuối trừ đầu. Không phải một bánh của tổng chi.",
    steps: [
      { label: "Câu hỏi", math: "kênh nào giảm", say: "Đây là câu về hướng theo thời gian." },
      { label: "Hình", math: "line theo tuần", say: "Mỗi kênh một đường." },
      { label: "Không dùng", math: "pie của một tuần", say: "Tròn trả lời cơ cấu, không trả lời hướng." },
    ],
    insight: "Đổi câu hỏi thì được phép đổi kiểu hình. Giữ câu hỏi mà đổi kiểu cho đẹp thì dễ kể sai.",
    sources: [illus("Ba kênh và tám tuần là khung ví dụ, không kèm số liệu.")],
  });
}

function frameDrill() {
  return lesson({
    id: "frame-drill",
    title: "Viết lại một lời than thành một bài toán",
    situation:
      "Câu nhận được: «landing yếu». Trong ví dụ minh họa, trang có 9.400 phiên và 1,1% gửi form.",
    problem:
      "«Yếu» không đo được. Người thì sửa chữ, người thì tăng ngân sách, người thì đổi form. Cả ba đều có thể đúng với một câu than, và không ai sai được vì không có vạch.",
    why:
      "Tách fact khỏi opinion, rồi viết mục tiêu có thước và có hạn, tồn tại để các việc làm sau trả lời cùng một câu hỏi.",
    plain:
      "Fact kiểm lại được trên dữ liệu. Opinion là lời đánh giá. Mục tiêu xong khi có mốc thời gian và một số.",
    precise:
      "1,1% form trên 9.400 phiên là fact trong ví dụ này. «Trang xấu» là opinion. Một mục tiêu viết lại được: trong 21 ngày, trên cùng nguồn, đưa tỷ lệ form từ 1,1% lên 1,6% mà giá một form không tăng quá 15%. Ba nhánh nguyên nhân không chồng nhau: nguồn phiên, nội dung trang, và chính cái form. Chưa cần mô hình để viết được câu này.",
    steps: [
      { label: "Fact", math: "9\\,400 phiên,\\ 1{,}1\\% form", say: "Ví dụ minh họa." },
      { label: "Bỏ", math: "«yếu», «xấu»", say: "Chưa có ngưỡng thì chưa là fact." },
      { label: "Mốc", math: "21 ngày,\\ 1{,}1\\% \\to 1{,}6\\%", say: "Kèm ràng buộc giá form." },
    ],
    insight: "Chưa viết lại được câu bài toán thì chưa tới lượt công cụ.",
    sources: [
      { claim: "SMART: cụ thể, đo được, làm được, liên quan, có hạn.", source: "Wikipedia, SMART criteria", url: "https://en.wikipedia.org/wiki/SMART_criteria" },
      illus("9.400 phiên và 1,1% là ví dụ minh họa."),
    ],
  });
}

function ragDrill() {
  return lesson({
    id: "rag-drill",
    title: "Trả lời từ đoạn đã tìm, không từ trí nhớ mô hình",
    situation:
      "Khách hỏi gói 90 phút có đá nóng không. Câu trả lời nằm trong một file giá nội bộ. Ví dụ minh họa: file không hề có đá nóng ở gói đó.",
    problem:
      "Hỏi mô hình trực tiếp thì nó có thể bịa một câu rất trôi. Nhét cả file dài vào prompt thì vừa tốn chỗ, vừa dễ bám nhầm đoạn không liên quan.",
    why:
      "RAG tồn tại để bước viết chỉ được dùng những đoạn đã truy xuất, và người đọc kiểm được đoạn đó.",
    plain:
      "Cắt tài liệu, tìm vài đoạn gần câu hỏi, rồi mới viết. Không thấy trong các đoạn thì nói không thấy.",
    precise:
      "Embedding biến một đoạn thành véctơ để đo gần nghĩa, không phải để trùng từ khóa. Đoạn quá dài thì một véctơ gánh nhiều chủ đề. Đoạn quá ngắn thì mất điều kiện. Bước tìm thô lấy ứng viên. Bước xếp lại có thể đổi thứ tự. Câu trả lời phải kèm đoạn đã dùng. Nếu đoạn không chứa đá nóng, câu đúng là không thấy trong tài liệu, không phải một lời đoán.",
    pipeline: [
      { n: "1", title: "Cắt", body: "Mỗi mục giá là một đoạn, kèm tên gói." },
      { n: "2", title: "Tìm", body: "Câu hỏi về gói 90 phút phải kéo đoạn của gói 90 phút, không phải đoạn gói 60." },
      { n: "3", title: "Viết", body: "Chỉ dùng đoạn đã kéo. Không có mặt hàng thì nói không có trong nguồn." },
    ],
    insight: "Một câu trôi chảy mà không chỉ được đoạn nguồn thì chưa phải câu trả lời của hệ này.",
    sources: [
      { claim: "RAG gắn bước sinh văn bản với các đoạn truy xuất từ một kho bên ngoài.", source: "Lewis et al., Retrieval-Augmented Generation, arXiv:2005.11401", url: "https://arxiv.org/abs/2005.11401" },
      illus("Gói 90 phút và đá nóng là ví dụ minh họa."),
    ],
  });
}

function genaiDrill() {
  return lesson({
    id: "genai-drill",
    title: "Prompt là đề bài, không phải câu thần chú",
    situation:
      "Cần một đoạn mô tả gói spa 60 phút cho khách đặt trên điện thoại. Giọng ngắn, không bịa công dụng y khoa.",
    problem:
      "Viết «hãy viết hay» thì mỗi lần chạy một giọng. Thêm nhiệt độ cao thì từ ngữ đa dạng hơn và cũng dễ bịa hơn.",
    why:
      "Một prompt có vai, việc, ràng buộc và ví dụ vì mô hình hoàn thành phần tiếp theo của văn bản bạn đã bắt đầu, không phải vì nó hiểu brief như một người.",
    plain:
      "Nhiệt độ thấp bám phương án chắc hơn. Nhiệt độ cao phẳng phân phối từ tiếp theo. Ràng buộc «không bịa» chỉ có tác dụng nếu câu trả lời còn được kiểm.",
    precise:
      "Một prompt làm được việc nói: người đọc là ai, sản phẩm nào, độ dài, điều cấm, và một mẫu đúng. Few-shot là đưa mẫu đó trong prompt. Zero-shot là không đưa mẫu. Chain-of-thought yêu cầu các bước ở những bài có lập luận, không làm một đoạn quảng cáo trở nên đúng hơn. Token là đơn vị tính tiền và tính độ dài, không phải từ trong từ điển tiếng Việt.",
    steps: [
      { label: "Vai", math: "người viết mô tả đặt chỗ", say: "Không phải bác sĩ." },
      { label: "Cấm", math: "không hứa điều trị", say: "Ràng buộc cụ thể hơn chữ «hãy đúng»." },
      { label: "Mẫu", math: "một đoạn 40 từ đạt yêu cầu", say: "Mẫu dạy giọng rõ hơn một tính từ." },
    ],
    insight: "Prompt tốt thu hẹp bài. Nó không tạo thêm sự thật về sản phẩm.",
    sources: [
      { claim: "Temperature chỉnh độ nhọn của phân phối xác suất token tiếp theo.", source: "Wikipedia, Softmax function", url: "https://en.wikipedia.org/wiki/Softmax_function" },
      illus("Gói spa 60 phút là tình huống ví dụ."),
    ],
  });
}

function caseDrill() {
  return lesson({
    id: "case-drill",
    title: "Mở case bằng câu quyết định",
    situation:
      "Một tệp hàng chục cột. Có thể là chuyến xe, đơn hàng, hoặc hồ sơ nhân sự. Chưa viết câu quyết định thì chưa biết cột nào là kết quả, cột nào chỉ là mã.",
    problem:
      "Vẽ mọi cột rồi chọn hình đẹp. Người giao việc hỏi «vậy làm gì» thì không có câu trả lời, chỉ có một thư viện ảnh.",
    why:
      "Case phân tích tồn tại để một phương pháp phục vụ một quyết định, và để bạn chỉ ra quyết định đó gãy ở đâu.",
    plain:
      "Một câu: ai làm gì nếu số này đổi. Rồi mới chọn mô tả, kiểm định, hay mô hình.",
    precise:
      "Dữ liệu chuyến taxi công khai hữu ích vì có thời gian, quãng đường và tiền, nên hỏi được về ca và về chuyến bất thường. Case phân loại hỏi xác suất của một trạng thái và một ngưỡng để hành động, không hỏi accuracy tối đa. Mỗi kết luận đi kèm một giả định. Nếu giả định sai mà hành động không đổi thì giả định đó không quan trọng, đừng dành nửa bài cho nó.",
    steps: [
      { label: "Câu", math: "ca nào thiếu xe", say: "Một quyết định vận hành." },
      { label: "Cột", math: "giờ, quãng đường, cước", say: "Cột không phục vụ câu này thì để sau." },
      { label: "Gãy", math: "thiếu cờ mưa", say: "Viết giới hạn cạnh kết luận." },
    ],
    insight: "Hết case, câu quyết định phải hẹp hơn lúc mở file.",
    sources: [
      { claim: "NYC TLC công bố trip records dùng được cho bài tập mô tả chuyến đi.", source: "NYC TLC, Trip Record Data", url: "https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page" },
      illus("Câu «ca nào thiếu xe» là khung ví dụ, không phải kết quả một thành phố."),
    ],
  });
}

function orDrill() {
  return lesson({
    id: "or-drill",
    title: "Một bài tối ưu có hàm mục tiêu và ràng buộc",
    formula: "\\max c^\\top x \\quad \\text{với} \\quad Ax \\le b,\\ x \\ge 0",
    situation:
      "Có 8 giờ media và 3 người thiết kế trong tuần. Ví dụ minh họa. Một bài đăng mất 1 giờ media và 0,5 người. Một banner mất 2 giờ media và 0,2 người. Bài đăng mang 5 điểm, banner mang 4 điểm, theo thang tự đặt.",
    problem:
      "Làm thật nhiều thứ đang có điểm cao cho tới khi ai đó kêu hết giờ. Không biết phương án nào là tốt nhất trong đúng quỹ đang có, cũng không biết nới một giờ thì đáng bao nhiêu.",
    why:
      "Vận trù tồn tại để tách ba thứ: biến quyết định, hàm cần cực trị, và ràng buộc không được phá.",
    plain:
      "Nghiệm là một phương án khả thi làm hàm mục tiêu tốt nhất. Không có phương án khả thi thì bài không có nghiệm, dù mục tiêu rất hấp dẫn.",
    precise:
      "x1 là số bài đăng, x2 là số banner. Max 5x1+4x2. Ràng buộc giờ: x1+2x2 ≤ 8. Ràng buộc người: 0,5x1+0,2x2 ≤ 3. x ≥ 0. Đây là bài tuyến tính nhỏ để thấy cấu trúc, không phải định mức ngành. Sensitivity hỏi hệ số hoặc vế phải đổi bao nhiêu thì phương án tối ưu đổi. OR không tự tạo hệ số 5 và 4. Hệ số sai thì nghiệm đúng của bài toán sai.",
    steps: [
      { label: "Biến", math: "x_1, x_2 \\ge 0", say: "Thứ được quyết định." },
      { label: "Mục tiêu", math: "5x_1+4x_2", say: "Điểm là ví dụ minh họa." },
      { label: "Ràng buộc", math: "x_1+2x_2 \\le 8", say: "Quỹ giờ media." },
    ],
    insight: "Tối ưu tìm phương án tốt nhất của một bài đã viết. Nó không chữa một hàm mục tiêu viết nhầm.",
    sources: [
      { claim: "Quy hoạch tuyến tính cực trị một hàm tuyến tính trên một đa diện ràng buộc tuyến tính.", source: "Wikipedia, Linear programming", url: "https://en.wikipedia.org/wiki/Linear_programming" },
      illus("8 giờ, 3 người, điểm 5 và 4 là ví dụ minh họa."),
    ],
  });
}

function treeDrill() {
  return lesson({
    id: "tree-drill",
    title: "Một nhát cắt, và vì sao không cắt mãi",
    situation:
      "Muốn tách khách có khả năng gửi form. Ví dụ minh họa: nhát cắt đầu theo «đã xem giá hay chưa» làm hai nhóm thuần hơn nhóm ban đầu.",
    problem:
      "Cắt tiếp tới khi mỗi lá một khách. Trên tập đang xem, lá nào cũng đúng. Tháng sau những lá đó không còn ai.",
    why:
      "Cây quyết định tồn tại để một quy tắc nếu-thì đọc được. Độ sâu và số lá tối thiểu tồn tại vì cây càng khít dữ liệu đã thấy thì càng kém dữ liệu chưa thấy.",
    plain:
      "Mỗi nút hỏi một câu có/không hoặc một ngưỡng. Lá chứa một tỷ lệ, không chứa một sự chắc chắn.",
    precise:
      "Gini của một nút bằng 0 khi nút chỉ còn một lớp, và cao nhất khi hai lớp cân bằng. Cây chọn nhát cắt làm tạp chất giảm nhiều. Độ sâu 1 là một quy tắc. Độ sâu rất lớn là một danh sách ngoại lệ. Rừng gom nhiều cây trên các mẫu khác nhau để một ngoại lệ khó chi phối mọi cây. Việc đó giảm phương sai, không biến một nhãn sai thành đúng.",
    insight: "Cây đọc được là cây còn kể thành một câu. Cây thuộc lòng từng dòng thì không còn là quy tắc.",
    sources: [
      { claim: "Gini impurity đo độ lẫn lớp trong một nút.", source: "Wikipedia, Decision tree learning", url: "https://en.wikipedia.org/wiki/Decision_tree_learning" },
      illus("Nhát cắt «đã xem giá» là ví dụ cấu trúc, không phải kết quả một chiến dịch."),
    ],
  });
}

function howToStudy() {
  return lesson({
    id: "how-to-study",
    title: "Học tới khi tính được",
    situation:
      "Một buổi ngắn. Danh sách việc thì dài. Nếu bắt đầu bằng phần giới thiệu, buổi kết thúc trước định nghĩa.",
    problem:
      "Nhớ tên kỹ thuật, không nhớ giả định. Lần sau gặp một số thật thì không biết công thức nào được phép dùng.",
    why:
      "Một khái niệm phân tích chỉ dùng được khi định nghĩa, giả định và một phép tính nhỏ nằm cùng một chỗ.",
    plain:
      "Đọc định nghĩa. Tính một ví dụ nhỏ bằng tay. Nói một câu về chỗ ví dụ sẽ sai nếu giả định sai.",
    precise:
      "Business intelligence lặp một chỉ số đã chốt. Analytics thêm một kiểm định hoặc một mô hình để chọn hành động. Engineering đưa dữ liệu tới nơi tính được. Ba việc đó không thay thế nhau. Bài kiểm tra trên hệ học là việc của hệ đó. Ở đây không có câu hỏi để trả lời. Có định nghĩa và có số ví dụ, và số ví dụ luôn được ghi là ví dụ.",
    insight: "Tên kỹ thuật không phải hiểu biết. Phép tính trên số nhỏ mới là hiểu biết.",
    sources: [
      illus("Độ dài một buổi là cách học, không phải định mức."),
      { claim: "Business analytics dùng dữ liệu và mô hình để hỗ trợ quyết định.", source: "Wikipedia, Business analytics", url: "https://en.wikipedia.org/wiki/Business_analytics" },
    ],
  });
}

function pythonRole() {
  return lesson({
    id: "python-role",
    title: "Python trong bài phân tích là để biến đổi bảng",
    situation:
      "Một bảng chi tiêu theo kênh. Việc cần là tổng theo kênh và một tỷ lệ. Không cần viết một hệ điều hành.",
    problem:
      "Học cú pháp rời cho tới khi quên bảng đang hỏi gì. Hoặc ngược lại, gọi một thư viện trước khi biết cột nào là số.",
    why:
      "Python ở chỗ này tồn tại vì bảng, nhóm, và mô hình là các đối tượng viết được, chạy lại được, không phải vì nó là ngôn ngữ phổ biến.",
    plain:
      "Biến giữ giá trị. Cấu trúc giữ nhiều giá trị. DataFrame giữ một bảng. Mô hình nhận một bảng đã sạch.",
    precise:
      "Thứ tự đáng giữ: kiểu và toán tử, rồi điều kiện và vòng lặp, rồi list và dict, rồi bảng và phép gom, rồi mới tới biểu đồ và mô hình. Bỏ bước giữa thì mô hình vẫn chạy trên cột sai. Một chương trình năm dòng mà tính đúng một tổng đáng tin hơn một notebook dài chưa kiểm tổng.",
    insight: "Trong bài này, Python xong việc khi bảng ra đúng số. Không xong việc khi cú pháp đã thuộc.",
    sources: [
      { claim: "Python là ngôn ngữ thông dịch, dùng rộng rãi cho xử lý dữ liệu.", source: "Python docs, Tutorial", url: "https://docs.python.org/3/tutorial/index.html" },
      illus("Bảng chi tiêu theo kênh là tình huống ví dụ."),
    ],
  });
}

function subjectOrder() {
  return lesson({
    id: "subject-order",
    title: "Cái gì phải hiểu trước cái gì",
    situation:
      "Đang đứng giữa chương. Các tên gần nhau: trung bình, kỳ vọng, xác suất, tỷ lệ mẫu, hồi quy, dự báo.",
    problem:
      "Nhảy vào mô hình khi chưa biết cột đó là mẫu hay là cả tập. Khoảng tin cậy và dự đoán của hồi quy bị dùng như cùng một thứ.",
    why:
      "Các khái niệm này xếp hàng vì cái sau dùng kết quả của cái trước. Sơ đồ chỉ có ích nếu nó chỉ sự phụ thuộc đó.",
    plain:
      "Mô tả nói trong bảng có gì. Suy diễn nói mẫu này cho phép nói gì về tập lớn hơn. Mô hình nói một hàng mới thì số nào. Diễn giải nói người quyết định làm gì với số đó.",
    precise:
      "SQL và bảng là đầu vào. EDA kiểm đơn vị, thiếu, và hình dạng. Xác suất là ngôn ngữ của suy diễn. Kiểm định và khoảng tin cậy là hai cách đọc sai số. Hồi quy tuyến tính là quan hệ gần thẳng cộng nhiễu. Logistic là xác suất của một lớp. Cây là quy tắc nếu-thì. Cụm là nhóm theo khoảng cách, không có nhãn sẵn. Chuỗi thời gian không được coi các dòng là độc lập. GenAI viết hoặc tìm chữ. Nó không thay một định nghĩa thống kê.",
    insight: "Lạc giữa hai tên thì hỏi khái niệm nào dùng kết quả của khái niệm nào. Đó là sơ đồ đáng giữ.",
    sources: [illus("Danh sách trên là thứ tự phụ thuộc của khái niệm, không phải một mục lục chép lại.")],
  });
}

const DEFAULT = subjectOrder;
