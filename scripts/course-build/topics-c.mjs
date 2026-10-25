import { T } from "./topics.mjs";

const illus = (claim) => ({ claim, source: "ví dụ minh họa, không phải số liệu ngành" });

export const topicsC = [
  T({
    id: "warehouse",
    keys: [/data warehouse/i, /star schema/i, /olap|oltp/i, /entity constraint/i, /referential/i, /semantic constraint/i, /\berd/i, /database design/i],
    title: "Kho dữ liệu, star schema, OLTP và OLAP",
    situation:
      "Cửa hàng ghi từng hóa đơn vào hệ bán hàng cả ngày. Sáng hôm sau giám đốc muốn doanh thu theo vùng và theo nhóm hàng của 18 tháng. Hai việc này không nên đè lên cùng một bảng.",
    problem:
      "Chạy tổng hợp nặng trên đúng bảng đang ghi hóa đơn sẽ làm chậm thu ngân. Gom mọi thứ vào một bảng rộng thì vừa trùng dữ liệu vừa khó sửa một tên vùng.",
    why:
      "Tách OLTP và OLAP, rồi mô hình sao với bảng fact ở giữa và các bảng dimension xung quanh, tồn tại để giao dịch thì nhanh, còn câu hỏi quản trị thì hỏi trên bản đã tổ chức để gộp.",
    plain:
      "OLTP là hệ đang chạy nghiệp vụ. OLAP là hệ để hỏi và gộp. Star schema đặt số đo ở fact, thuộc tính mô tả ở dimension.",
    precise:
      "Fact chứa khóa ngoại và các số đo như doanh thu, số lượng. Dimension chứa thuộc tính như tên cửa hàng, vùng, ngày. Khóa ngoại là ràng buộc tham chiếu: không có dòng fact trỏ tới cửa hàng không tồn tại. ERD vẽ các thực thể và quan hệ trước khi viết CREATE TABLE.",
    pipeline: [
      { n: "1", title: "Fact", body: "Mỗi dòng một hóa đơn-sản phẩm: khóa ngày, khóa cửa hàng, số lượng, tiền. Ví dụ minh họa." },
      { n: "2", title: "Dimension", body: "dim_store: mã, tên, vùng. Sửa tên vùng ở một chỗ." },
      { n: "3", title: "Hỏi", body: "Gộp fact theo vùng bằng cách nối sang dim_store. Hệ bán hàng buổi trưa không phải chịu câu hỏi này." },
    ],
    insight: "Bảng đang ghi đơn không phải bảng để kể chuyện 18 tháng.",
    sources: [
      { claim: "Star schema gồm bảng fact trung tâm nối ra các dimension.", source: "Wikipedia, Star schema", url: "https://en.wikipedia.org/wiki/Star_schema" },
      illus("Hóa đơn và 18 tháng là ví dụ minh họa."),
    ],
    glossary: [
      { term: "OLTP", en: "online transaction processing", def: "Hệ xử lý giao dịch nghiệp vụ từng dòng." },
      { term: "Star schema", en: "star schema", def: "Mô hình một fact ở giữa, các dimension xung quanh." },
    ],
  }),

  T({
    id: "sql-core",
    keys: [/ddl|dml/i, /select/i, /aggregate/i, /ordering/i, /having/i, /string and date/i, /regular expression/i, /nested quer/i, /subquer/i, /\bctes?\b/i, /\bviews?\b/i, /modifying columns/i, /sql statements and operators/i, /\bsql\b/i],
    avoid: /window|rank function|partition|lead and lag|join|advanced sql/i,
    title: "SQL: hỏi dữ liệu theo từng mệnh đề",
    sim: "sql",
    situation:
      "Bảng campaigns có kênh, ngày, spend, forms. Bạn cần tổng form theo kênh, chỉ tính ngày spend trên 0, và chỉ giữ kênh có hơn 30 form. Ví dụ minh họa.",
    problem:
      "Viết WHERE forms > 30 sau khi đã nghĩ về tổng thì sai thứ tự. WHERE lọc từng dòng trước khi gộp. Hàng rào sau khi gộp phải là HAVING.",
    why:
      "SQL tồn tại để diễn tả câu hỏi trên bảng. Thứ tự viết và thứ tự máy chạy không trùng nhau, nên WHERE và HAVING mới hay bị lẫn.",
    plain:
      "SELECT chọn cột. FROM chọn bảng. WHERE lọc dòng. GROUP BY gộp. HAVING lọc nhóm. ORDER BY sắp xếp.",
    precise:
      "Thứ tự logic thường gặp của một câu SELECT là FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY. Bí danh trong SELECT chưa tồn tại ở WHERE. COUNT đếm, SUM cộng, AVG lấy trung bình sau khi nhóm. CTE là một bảng tạm có tên trong câu hỏi, để khỏi lồng subquery khó đọc. VIEW lưu câu hỏi thành một cái tên.",
    formula: "\\underbrace{FROM \\rightarrow WHERE \\rightarrow GROUP\\ BY \\rightarrow HAVING \\rightarrow SELECT \\rightarrow ORDER\\ BY}_{\\text{thứ tự logic}}",
    steps: [
      { label: "FROM", math: "campaigns", say: "Sáu dòng mẫu trong hình." },
      { label: "WHERE", math: "spend > 0", say: "Bỏ dòng chưa chạy. Lọc trước khi gộp." },
      { label: "GROUP BY", math: "channel", say: "Mỗi kênh còn một nhóm." },
      { label: "HAVING", math: "SUM(forms) > 30", say: "Bỏ nhóm quá nhỏ. Đây không phải WHERE." },
      { label: "SELECT", math: "channel, SUM(forms)", say: "Cột hiện ra." },
      { label: "ORDER BY", math: "SUM(forms) DESC", say: "Kênh nhiều form đứng trên." },
    ],
    pitfalls: [
      { left: "WHERE", right: "HAVING", note: "WHERE lọc dòng gốc. HAVING lọc sau GROUP BY. Điều kiện trên SUM gần như luôn là HAVING." },
      { left: "COUNT(*)", right: "COUNT(col)", note: "COUNT(*) đếm dòng. COUNT(col) bỏ qua NULL trong cột đó." },
    ],
    code: {
      lang: "sql",
      source: "SELECT channel, SUM(forms) AS forms\nFROM campaigns\nWHERE spend > 0\nGROUP BY channel\nHAVING SUM(forms) > 30\nORDER BY forms DESC;",
      out: "GDN | 60\nMeta | 48",
    },
    insight: "Đọc một câu SQL từ FROM trở đi, đừng đọc từ SELECT.",
    sources: [
      { claim: "Tài liệu MySQL mô tả các mệnh đề của SELECT gồm WHERE, GROUP BY, HAVING và ORDER BY.", source: "MySQL 8.4 Reference Manual, SELECT statement", url: "https://dev.mysql.com/doc/refman/8.4/en/select.html" },
      illus("Ngưỡng 30 form là ví dụ minh họa. Bảng trong hình là dữ liệu mẫu."),
    ],
    glossary: [
      { term: "HAVING", en: "HAVING", def: "Lọc các nhóm sau GROUP BY." },
      { term: "CTE", en: "common table expression", def: "Một kết quả trung gian có tên, viết bằng WITH, dùng trong câu hỏi bên dưới." },
    ],
  }),

  T({
    id: "join",
    keys: [/join/i, /set theory/i, /set operation/i, /outer join/i],
    title: "JOIN và phép tập hợp",
    sim: "join",
    situation:
      "Bảng stores có 5 cửa hàng. Bảng orders tháng này chỉ có đơn của 3 cửa hàng. Bạn muốn doanh thu theo cửa hàng, và vẫn thấy hai cửa hàng chưa có đơn.",
    problem:
      "INNER JOIN làm mất hai cửa hàng im hơi. Báo cáo sẽ kể rằng chuỗi chỉ có ba cửa hàng. UNION hai danh sách không cùng cột thì ra một bảng không đọc được.",
    why:
      "JOIN tồn tại để ghép hàng theo khóa. Các kiểu outer join tồn tại để giữ những hàng không có bạn bên kia. Phép UNION, INTERSECT, EXCEPT làm việc trên các tập hàng đã cùng cấu trúc.",
    plain:
      "INNER chỉ giữ khớp. LEFT giữ mọi hàng bên trái, chỗ không khớp để trống. FULL giữ cả hai phía.",
    precise:
      "Khóa nối phải cùng nghĩa, không chỉ cùng tên. Nối sai cấp, ví dụ đơn hàng nối với ngày mà không đủ khóa, sẽ nhân dòng và doanh thu bị cộng nhiều lần. UNION bỏ trùng. UNION ALL giữ trùng và thường rẻ hơn khi bạn biết không có trùng hoặc bạn cần giữ trùng.",
    pitfalls: [
      { left: "INNER", right: "LEFT", note: "Thiếu dòng trong báo cáo rất hay là do INNER đã vứt các khóa không khớp." },
      { left: "JOIN", right: "Nối rồi SUM", note: "Nếu một cửa hàng khớp hai dòng dimension, SUM nhân đôi. Đếm số dòng trước và sau khi nối." },
    ],
    insight: "Trước khi nối, đếm số khóa duy nhất mỗi bên. Sau khi nối, đếm lại.",
    sources: [
      { claim: "INNER JOIN trả về các hàng khớp. OUTER JOIN giữ hàng không khớp của một hoặc cả hai phía.", source: "Wikipedia, Join (SQL)", url: "https://en.wikipedia.org/wiki/Join_(SQL)" },
      illus("5 cửa hàng là ví dụ minh họa."),
    ],
  }),

  T({
    id: "window",
    keys: [/window/i, /rank function/i, /partition/i, /frames/i, /lead and lag/i, /named window/i],
    title: "Hàm cửa sổ",
    sim: "window",
    formula: "\\mathrm{SUM}(x)\\ \\mathrm{OVER}\\ (\\mathrm{PARTITION\\ BY}\\ g\\ \\mathrm{ORDER\\ BY}\\ t)",
    situation:
      "Bạn có doanh thu từng tuần của mỗi cửa hàng và cần hạng trong vùng, cùng tổng lũy kế trong năm của chính cửa hàng đó. GROUP BY sẽ làm sập mất các tuần.",
    problem:
      "GROUP BY trả về một dòng mỗi nhóm. Muốn vừa giữ từng tuần vừa có tổng chạy thì GROUP BY không phải công cụ.",
    why:
      "Hàm cửa sổ tính trên một tập hàng liên quan nhưng không gộp mất dòng hiện tại. PARTITION cắt cửa sổ. ORDER BY trong OVER định thứ tự. Frame định bao nhiêu hàng đi vào phép tính.",
    plain:
      "OVER là «nhìn các hàng láng giềng, nhưng vẫn để hàng này đứng nguyên».",
    precise:
      "RANK để hạng, có khoảng trống khi hòa. DENSE_RANK không để trống. ROW_NUMBER luôn khác nhau. LAG lấy giá trị hàng trước. LEAD lấy hàng sau. Frame ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW là tổng từ đầu tới dòng hiện tại trong partition.",
    steps: [
      { label: "Dòng", math: "tuần 1: 10, tuần 2: 12, tuần 3: 8", say: "Một cửa hàng, ví dụ minh họa, đơn vị triệu." },
      { label: "Lũy kế", math: "10, 22, 30", say: "SUM OVER ORDER BY tuần, frame từ đầu đến dòng hiện tại." },
      { label: "LAG", math: "tuần 3 so với tuần 2: 8-12 = -4", say: "LAG lấy 12. Không cần tự nối bảng với chính nó." },
    ],
    pitfalls: [
      { left: "GROUP BY", right: "OVER", note: "GROUP BY thu nhỏ số dòng. OVER giữ số dòng." },
      { left: "RANK", right: "ROW_NUMBER", note: "Hòa hạng thì RANK chia chỗ. ROW_NUMBER vẫn đánh số khác nhau, thứ tự hòa là tùy ý nếu không có khóa phụ." },
    ],
    insight: "Cần thêm một cột nhìn hàng xóm mà vẫn giữ từng dòng thì đó là cửa sổ, không phải GROUP BY.",
    sources: [
      { claim: "Hàm cửa sổ tính trên một tập hàng liên quan tới dòng hiện tại mà không gộp các dòng thành một.", source: "Wikipedia, Window function (SQL)", url: "https://en.wikipedia.org/wiki/Window_function_(SQL)" },
      illus("Ba tuần 10, 12, 8 là ví dụ minh họa."),
    ],
  }),

  T({
    id: "sql-opt",
    keys: [/best practice/i, /index/i, /order of query execution/i, /joins vs nested/i, /query optimisation|query optimization/i],
    scope: /sql/i,
    title: "Chỉ mục và thứ tự chạy câu hỏi",
    sim: "sql",
    situation:
      "Báo cáo sáng chạy 40 giây trên bảng 8 triệu dòng hóa đơn. Câu hỏi lọc theo ngày và cửa hàng. Ví dụ minh họa.",
    problem:
      "Thêm RAM hoặc SELECT ít cột hơn một chút không đụng đúng bệnh nếu máy đang đọc cả bảng vì không có chỉ mục trên cột lọc.",
    why:
      "Chỉ mục tồn tại để tìm một tập hàng nhỏ mà không đọc cả bảng. Biết thứ tự logic của SELECT để khỏi viết điều kiện ở sai chỗ, khiến chỉ mục không dùng được.",
    plain:
      "Chỉ mục là một cấu trúc tra cứu, đổi lấy chỗ lưu và chi phí khi ghi.",
    precise:
      "B-tree index hợp với lọc đẳng thức và khoảng trên cột có thứ tự, như ngày. Chỉ mục không miễn phí: mỗi lần INSERT phải cập nhật. Hàm bọc lên cột trong WHERE, ví dụ DATE(created_at), thường làm hỏng khả năng dùng chỉ mục trên created_at. Viết JOIN rõ thường dễ cho bộ tối ưu đọc hơn một rừng subquery tương đương, nhưng thước đo cuối là kế hoạch chạy, không phải cảm giác.",
    insight: "Đo kế hoạch chạy trước khi viết lại câu cho «đẹp».",
    sources: [
      { claim: "Tối ưu câu hỏi bắt đầu từ việc hiểu truy cập dữ liệu và chỉ mục, không từ việc viết lại cho ngắn.", source: "MySQL 8.4, Optimization", url: "https://dev.mysql.com/doc/refman/8.4/en/optimization.html" },
      illus("8 triệu dòng và 40 giây là ví dụ minh họa."),
    ],
  }),

  T({
    id: "slr",
    keys: [/linear regression/i, /regression line/i, /best fit/i, /strength of simple linear/i, /assumptions of simple linear/i, /residual/i, /sklearn/i, /reading and understanding the data/i, /building a linear model/i, /hypothesis testing in linear/i],
    avoid: /multiple linear|gradient descent|logistic/i,
    title: "Hồi quy tuyến tính đơn",
    sim: "regression",
    formula: "y = \\beta_0 + \\beta_1 x + \\varepsilon \\qquad R^2 = 1 - \\dfrac{RSS}{TSS}",
    situation:
      "Chi tiêu ads tuần và số form. Ví dụ minh họa, tám tuần: chi 10 triệu thì khoảng 80 form, chi thêm thì form tăng, nhưng không nằm đúng trên một đường thẳng.",
    problem:
      "Kẻ một đường bằng mắt thì mỗi người kẻ một kiểu. Không có thước nào nói đường này khớp hơn đường kia, và không tách được phần form mà đường không giải thích.",
    why:
      "Hồi quy tuyến tính đơn tồn tại để chọn một đường thẳng theo một tiêu chí rõ: tổng bình phương phần dư nhỏ nhất. R² nói phần phương sai của y mà đường này nắm được.",
    plain:
      "Một đường thẳng dự đoán form từ chi tiêu. Phần dư là form thật trừ form trên đường. Đường khớp nhất là đường có tổng bình phương phần dư nhỏ nhất.",
    precise:
      "β0 là hoành độ gốc, β1 là số form kỳ vọng thêm khi chi tiêu tăng một đơn vị. ε là phần đường không giải thích. RSS là tổng bình phương phần dư. TSS là tổng bình phương độ lệch của y so với chính trung bình của y. R² = 1 − RSS/TSS, từ 0 đến 1 với mô hình có hệ số chặn. RSE, residual standard error, là độ lớn điển hình của phần dư, cùng đơn vị với y. Các giả định thường dùng khi suy diễn: tuyến tính, phần dư độc lập, phương sai phần dư ổn định, phần dư gần chuẩn.",
    symbols: [
      { sym: "\\beta_0", meaning: "hệ số chặn" },
      { sym: "\\beta_1", meaning: "độ dốc" },
      { sym: "RSS", meaning: "tổng bình phương phần dư" },
      { sym: "R^2", meaning: "phần phương sai của y mà đường nắm được" },
    ],
    steps: [
      { label: "Đường", math: "\\hat y = 20 + 6x", say: "x là triệu đồng chi tiêu. Ví dụ minh họa: chi 10 thì đường nói 80 form." },
      { label: "Một điểm", math: "thật 90, đường 80, dư = 10", say: "Tuần đó tốt hơn đường 10 form." },
      { label: "RSS", math: "\\sum (y-\\hat y)^2", say: "Kéo đường trong hình, RSS và R² đổi ngay." },
    ],
    pitfalls: [
      { left: "R²", right: "RSE", note: "R² không có đơn vị, nói tỷ lệ. RSE cùng đơn vị với form, nói sai số điển hình. R² cao vẫn có thể sai vài chục form nếu y rất phân tán." },
      { left: "Khớp", right: "Nhân quả", note: "Đường mô tả cùng tăng. Nó không chứng minh tăng ngân sách sẽ ra đúng bấy nhiêu form nếu có yếu tố khác đổi theo." },
    ],
    insight: "Đường thẳng là một bản tóm tắt có phần dư. Đọc phần dư trước khi tin độ dốc.",
    sources: [
      { claim: "Bình phương tối thiểu chọn hệ số để RSS nhỏ nhất. R² = 1 − RSS/TSS.", source: "Wikipedia, Coefficient of determination", url: "https://en.wikipedia.org/wiki/Coefficient_of_determination" },
      { claim: "Hồi quy tuyến tính đơn mô hình một biến giải thích và một hệ số chặn.", source: "Wikipedia, Simple linear regression", url: "https://en.wikipedia.org/wiki/Simple_linear_regression" },
      illus("Đường 20 + 6x là ví dụ minh họa."),
    ],
    glossary: [
      { term: "Residual", en: "residual", def: "Giá trị thật trừ giá trị trên đường hồi quy." },
      { term: "R²", en: "coefficient of determination", def: "Phần phương sai của biến phụ thuộc mà mô hình nắm được." },
    ],
  }),

  T({
    id: "gd",
    keys: [/gradient descent/i, /cost function/i, /learning rate/i, /optimisation method|optimization method/i],
    title: "Gradient descent",
    sim: "gd",
    formula: "w := w - \\eta\\,\\nabla J(w)",
    situation:
      "Với nhiều hệ số, không có công thức đóng gọn như hồi quy một biến. Máy phải đi từng bước trên mặt chi phí để tìm chỗ thấp.",
    problem:
      "Bước quá nhỏ thì lâu. Bước quá lớn thì nhảy qua đáy và phóng đi. Không nhìn learning rate thì «mô hình không hội tụ» thành một câu thần chú.",
    why:
      "Gradient descent tồn tại như một cách tìm cực tiểu của hàm chi phí khi đạo hàm chỉ ra hướng dốc nhất. Learning rate là độ dài bước.",
    plain:
      "Đứng trên sườn đồi chi phí, nhìn hướng dốc xuống, bước một đoạn. Lặp lại cho đến khi gần đáy.",
    precise:
      "Hàm chi phí J đo độ tệ của bộ hệ số hiện tại. Gradient là véctơ các đạo hàm riêng, trỏ hướng tăng nhanh nhất. Trừ gradient là đi xuống. η, learning rate, nhân vào bước đó. η quá lớn làm J tăng và phân kỳ. Với hàm lồi bậc hai như RSS của hồi quy tuyến tính, có một đáy. Với mặt phức tạp hơn có thể có nhiều vùng lõm.",
    symbols: [
      { sym: "J(w)", meaning: "chi phí tại hệ số w" },
      { sym: "\\nabla J", meaning: "độ dốc" },
      { sym: "\\eta", meaning: "learning rate, độ dài bước" },
    ],
    steps: [
      { label: "Chi phí", math: "J(w)=(w-2{,}2)^2", say: "Một tham số, đáy ở 2,2. Ví dụ minh họa để thấy bước đi." },
      { label: "Độ dốc", math: "J'(w)=2(w-2{,}2)", say: "Đứng bên trái đáy thì độ dốc âm, bước trừ độ dốc sẽ đi sang phải." },
      { label: "Bước", math: "w := w - \\eta J'(w)", say: "Kéo η trong hình: nhỏ thì bò, vừa thì tới đáy, lớn thì bắn ra." },
    ],
    insight: "Learning rate không phải chi tiết kỹ thuật. Nó quyết định bước có tới đáy hay không.",
    sources: [
      { claim: "Gradient descent cập nhật tham số ngược hướng gradient của hàm chi phí.", source: "Wikipedia, Gradient descent", url: "https://en.wikipedia.org/wiki/Gradient_descent" },
      illus("Hàm (w−2,2)² là ví dụ minh họa một chiều."),
    ],
    glossary: [
      { term: "Learning rate", en: "learning rate", def: "Độ dài bước khi cập nhật hệ số theo gradient." },
    ],
    recall: ["slr"],
  }),

  T({
    id: "mlr",
    keys: [/multiple linear/i, /multicollinearity/i, /categorical variable/i, /dummy/i, /feature selection/i, /adjusted r/i, /vif/i, /when one variable is not enough/i, /rfe/i],
    avoid: /logistic/i,
    title: "Hồi quy nhiều biến",
    formula: "\\mathrm{VIF}_j = \\dfrac{1}{1-R^2_j}",
    situation:
      "Form không chỉ phụ thuộc chi tiêu. Cùng một tuần có thể có cả email, cả khuyến mãi, cả chi tiêu GDN. Ví dụ minh họa: ba cột cùng tăng vào tháng lễ.",
    problem:
      "Đưa cả ba vào một phương trình, độ dốc của GDN có thể âm dù tăng ngân sách GDN vẫn ra form. Không phải GDN có hại. Các cột đang đi cùng nhau, máy không tách được từng việc.",
    why:
      "Hồi quy bội tồn tại khi một biến không đủ. VIF, biến giả và R² hiệu chỉnh tồn tại vì thêm biến tạo ra các bệnh mới: đa cộng tuyến, thang đo khác nhau, và R² luôn có cửa tăng dù biến thêm là nhiễu.",
    plain:
      "Nhiều cột thì mỗi hệ số là độ dốc khi các cột khác giữ nguyên. Nếu các cột không thể giữ nguyên lẫn nhau ngoài đời, hệ số không còn là một nút bạn vặn được.",
    precise:
      "Đa cộng tuyến là các biến giải thích gần như tổ hợp của nhau. VIF cao nghĩa là cột đó được các cột còn lại dự đoán rất tốt. Biến giả biến một hạng mục thành các cột 0/1, và phải bỏ một mức làm mốc nếu có hệ số chặn. Adjusted R² phạt việc thêm biến. Chuẩn hóa đưa các cột về cùng thang khi bạn muốn so độ lớn hệ số, không bắt buộc để dự đoán.",
    symbols: [
      { sym: "R^2_j", meaning: "R² khi hồi quy chính biến j bằng các biến còn lại" },
      { sym: "VIF_j", meaning: "mức một biến bị các biến kia giải thích" },
    ],
    pitfalls: [
      { left: "R²", right: "Adjusted R²", note: "R² không giảm khi thêm biến. Adjusted R² có thể giảm. So mô hình khác số biến thì đừng chỉ nhìn R²." },
      { left: "Hệ số", right: "Nút bấm", note: "Hệ số là hiệu khi cột khác giữ nguyên trên dữ liệu. Ngoài đời các cột hay đi cùng nhau, nên không phải cứ tăng một kênh đúng bằng hệ số." },
    ],
    insight: "Thêm biến cho đến khi câu chuyện tách được, không phải cho đến khi R² đẹp.",
    sources: [
      { claim: "VIF bằng 1/(1−R²) của hồi quy phụ, đo đa cộng tuyến.", source: "Wikipedia, Variance inflation factor", url: "https://en.wikipedia.org/wiki/Variance_inflation_factor" },
      illus("Ba kênh cùng tăng trong tháng lễ là ví dụ minh họa."),
    ],
    glossary: [
      { term: "VIF", en: "variance inflation factor", def: "Chỉ số cho biết một biến bị các biến còn lại giải thích mạnh đến đâu." },
      { term: "Dummy variable", en: "dummy variable", def: "Cột 0/1 thay cho một mức của biến hạng mục." },
    ],
    recall: ["slr"],
  }),

  T({
    id: "logit",
    keys: [/logistic/i, /sigmoid/i, /odds/i, /confusion matrix/i, /sensitivity|specificity/i, /roc/i, /threshold/i, /precision and recall/i, /binary classification/i, /churn/i, /one vs one|one vs rest|multiclass/i, /woe|information value|\biv\b|\bpsi\b/i],
    title: "Hồi quy logistic",
    sim: "sigmoid",
    formula: "P(y=1\\mid x)=\\dfrac{1}{1+e^{-(\\beta_0+\\beta_1 x)}}",
    situation:
      "Tệp 10.000 khách spa, ví dụ minh họa. Khoảng 8% không quay lại trong 90 ngày. Bạn muốn một điểm xác suất cho từng khách, không muốn đường thẳng dự đoán «1,2 người» hay «−0,1 người».",
    problem:
      "Hồi quy tuyến tính trên cờ 0/1 cho ra số ngoài đoạn 0 đến 1. Ngưỡng 0,5 mặc định thì với tỷ lệ 8%, mô hình có thể hô ai cũng ở lại và accuracy vẫn trên 90%.",
    why:
      "Logistic dùng hàm sigmoid để ép tổ hợp tuyến tính thành một xác suất. Odds và log-odds giúp hệ số đọc được. Ma trận nhầm, precision, recall và ROC tồn tại vì accuracy một số không đủ khi lớp lệch.",
    plain:
      "Mô hình cho một xác suất rời bỏ. Bạn chọn ngưỡng để biến xác suất thành danh sách sẽ gọi. Đổi ngưỡng là đổi số cuộc gọi và đổi tỷ lệ gọi trúng.",
    precise:
      "Log-odds là β0+β1x. Odds nhân e^β1 khi x tăng 1, nếu các biến khác giữ nguyên. Ma trận nhầm đếm TP, FP, TN, FN. Sensitivity, hay recall, là TP/(TP+FN): trong số người thật sự rời, bắt được bao nhiêu. Precision là TP/(TP+FP): trong số mình hô là rời, đúng bao nhiêu. ROC vẽ sensitivity against 1−specificity khi quét ngưỡng. PSI theo dõi phân phối điểm số có trượt theo thời gian hay không.",
    symbols: [
      { sym: "\\beta_0+\\beta_1 x", meaning: "log-odds" },
      { sym: "e^{\\beta_1}", meaning: "odds nhân lên bấy nhiêu khi x tăng 1" },
    ],
    steps: [
      { label: "Log-odds", math: "-2{,}2 + 0{,}04\\times x", say: "x là số ngày từ lần ghé gần nhất. Ví dụ minh họa." },
      { label: "Xác suất", math: "x=40 \\Rightarrow z=-0{,}6 \\Rightarrow p\\approx 0{,}35", say: "Sigmoid của −0,6." },
      { label: "Ngưỡng", math: "gọi nếu p \\ge 0{,}25", say: "Kéo ngưỡng trong hình. Ma trận nhầm và đường ROC đổi theo." },
    ],
    pitfalls: [
      { left: "Accuracy", right: "Recall", note: "Lớp hiếm thì đoán ai cũng thuộc lớp đông vẫn ra accuracy cao. Recall mới nói bạn có bỏ sót người cần gọi hay không." },
      { left: "Precision", right: "Recall", note: "Precision là độ sạch của danh sách gọi. Recall là độ phủ. Hạ ngưỡng thường tăng recall và giảm precision." },
      { left: "fit", right: "transform", note: "fit học quy tắc trên tập huấn luyện, ví dụ trung bình để chuẩn hóa. transform áp quy tắc đó. fit trên cả dữ liệu tương lai là để thông tin tương lai chảy vào quy tắc." },
    ],
    insight: "Logistic cho xác suất. Ngưỡng mới là quyết định vận hành, và accuracy không chọn giúp ngưỡng đó khi lớp bị lệch.",
    sources: [
      { claim: "Hồi quy logistic mô hình log-odds tuyến tính và xác suất qua hàm logistic.", source: "Wikipedia, Logistic regression", url: "https://en.wikipedia.org/wiki/Logistic_regression" },
      { claim: "ROC quét ngưỡng và vẽ tỷ lệ dương thật với tỷ lệ dương giả.", source: "Wikipedia, Receiver operating characteristic", url: "https://en.wikipedia.org/wiki/Receiver_operating_characteristic" },
      illus("Tỷ lệ 8% và hệ số minh họa −2,2 + 0,04x không phải ước lượng từ một tập thật."),
    ],
    glossary: [
      { term: "Sigmoid", en: "logistic function", def: "Hàm ép một số thực vào khoảng (0, 1)." },
      { term: "Recall", en: "sensitivity", def: "Trong số các trường hợp dương thật, mô hình bắt được bao nhiêu." },
      { term: "Precision", en: "precision", def: "Trong số các lần mô hình báo dương, bao nhiêu lần đúng." },
    ],
  }),

  T({
    id: "tree",
    keys: [/decision tree/i, /gini/i, /entropy/i, /impurity/i, /splitting and homogeneity/i, /tree truncation|prun/i, /hyperparameter/i, /feature importance in decision/i, /tree models/i],
    title: "Cây quyết định",
    sim: "tree",
    formula: "G = 1 - \\sum_k p_k^2",
    situation:
      "Tệp khách mall: số lần ghé và chi tiêu tháng. Muốn tách nhóm hay nhận voucher. Ví dụ minh họa: một quy tắc «ghé dưới 2 lần và chi dưới 500 nghìn» dễ nói với đội vận hành hơn một véctơ hệ số.",
    problem:
      "Cây để sâu sẽ tách đến từng khách. Trên dữ liệu năm ngoái thì đúng tuyệt đối, sang tháng này thì vỡ. Đó là overfitting theo đúng nghĩa nhìn thấy được.",
    why:
      "Cây tồn tại để cắt không gian thành các hộp thuần hơn. Gini và entropy là thước độ lẫn. Độ sâu và số lá tối thiểu tồn tại để chặn cây học thuộc lòng.",
    plain:
      "Mỗi nút hỏi một câu đúng-sai. Dữ liệu đi về một phía. Lá cuối là một nhãn, hoặc một trung bình nếu đang dự đoán số.",
    precise:
      "Gini của một nút bằng 1 trừ tổng bình phương tỷ lệ các lớp. Nút thuần một lớp thì Gini bằng 0. Phép tách tốt là phép giảm Gini có trọng số theo số dòng mỗi phía. Entropy dùng logarit, cùng mục đích. Feature importance của cây thường dựa trên tổng độ giảm impurity mà biến đó mang lại. Cây hồi quy thì lá là trung bình của y, thước tách thường là giảm phương sai.",
    steps: [
      { label: "Nút", math: "40 ở, 60 rời", say: "p = 0,4 và 0,6. Ví dụ minh họa." },
      { label: "Gini", math: "1-(0{,}4^2+0{,}6^2)=0{,}48", say: "Chưa thuần." },
      { label: "Tách", math: "ghé < 2", say: "Hai phía thuần hơn thì Gini trọng số giảm. Hình vẽ từng nhát cắt." },
    ],
    pitfalls: [
      { left: "Cây sâu", right: "Cây ngắn", note: "Sâu thì sai trên dữ liệu đã thấy rất thấp và sai trên dữ liệu mới cao. Đó là overfitting nhìn được bằng độ sâu." },
      { left: "Cây", right: "Hồi quy tuyến tính", note: "Cây không cần quan hệ thẳng và bắt được ngưỡng. Hồi quy cho một độ dốc để nói «thêm một đơn vị thì sao». Đội vận hành thường đọc cây nhanh hơn." },
    ],
    insight: "Một cây dễ đọc là một cây nông với ít lá. Độ sâu là quyết định sản phẩm, không chỉ là tham số.",
    sources: [
      { claim: "Chỉ số Gini của một phân phối lớp là 1 trừ tổng bình phương xác suất.", source: "Wikipedia, Decision tree learning", url: "https://en.wikipedia.org/wiki/Decision_tree_learning" },
      illus("Tỷ lệ 40/60 là ví dụ minh họa."),
    ],
    glossary: [
      { term: "Gini", en: "Gini impurity", def: "Độ lẫn của một nút. Bằng 0 khi nút chỉ còn một lớp." },
      { term: "Overfitting", en: "overfitting", def: "Khớp dữ liệu đã thấy quá sát, kể cả nhiễu, nên kém trên dữ liệu mới." },
    ],
  }),

  T({
    id: "kmeans",
    keys: [/cluster/i, /k-?means|k means/i, /centroid/i, /euclidean/i, /elbow|silhouette/i, /hierarchical/i, /dendrogram/i, /linkage/i, /k-?mode|k-?prototype|dbscan|gaussian mixture/i],
    title: "Gom cụm",
    sim: "kmeans",
    situation:
      "Khách mall không có nhãn sẵn «thích giảm giá» hay «mua cuối tuần». Bạn chỉ có số lần ghé và giỏ hàng trung bình. Ví dụ minh họa: 80 khách trên hai trục đã chuẩn hóa.",
    problem:
      "Tự kẻ nhóm bằng mắt thì không làm lại được, và với mười cột thì mắt không kẻ nổi. Chọn 12 cụm thì mỗi cụm là một câu chuyện không đủ người để chạy chiến dịch.",
    why:
      "K-means tồn tại để đặt K tâm và gán mỗi điểm về tâm gần nhất, rồi dời tâm, cho đến khi ổn định. Elbow và silhouette là các cách nhìn để không chọn K chỉ vì thích số đó.",
    plain:
      "Cụm là nhóm tự nổi từ khoảng cách, không phải từ nhãn có sẵn. K là số nhóm bạn yêu cầu thuật toán tạo ra.",
    precise:
      "Một vòng: gán mỗi điểm vào tâm gần nhất theo Euclid, rồi đặt tâm mới bằng trung bình các điểm vừa gán. K-means++ chọn tâm đầu bớt dính nhau. Hierarchical dán dần thành một dendrogram, cắt ngang để ra số cụm. K-means cần biến số và nhạy với thang đo, nên chuẩn hóa trước khi khoảng cách có nghĩa. K-modes dùng cho biến hạng mục.",
    pipeline: [
      { n: "1", title: "Chuẩn hóa", body: "Số lần ghé và tiền không cùng đơn vị. Đưa về cùng thang trước." },
      { n: "2", title: "Gán", body: "Mỗi khách về tâm gần nhất." },
      { n: "3", title: "Dời tâm", body: "Tâm mới là trung bình của khách vừa nhận." },
      { n: "4", title: "Dừng", body: "Khi tâm gần như không đổi. Rồi đặt tên cụm bằng ngôn ngữ chiến dịch, không bằng số cụm." },
    ],
    insight: "Cụm chưa có tên thì chưa dùng được. Đặt tên bằng hành vi, rồi mới viết ưu đãi.",
    sources: [
      { claim: "K-means lặp bước gán điểm và cập nhật tâm theo trung bình.", source: "Wikipedia, K-means clustering", url: "https://en.wikipedia.org/wiki/K-means_clustering" },
      illus("80 khách là ví dụ minh họa trong hình."),
    ],
    glossary: [
      { term: "Centroid", en: "centroid", def: "Tâm cụm, thường là trung bình các điểm trong cụm." },
    ],
  }),

  T({
    id: "nlp",
    keys: [/nlp/i, /token/i, /stop word/i, /bag-of-words|bag of words/i, /tf-?idf/i, /stemming|lemmat/i, /canonical/i, /soundex|phonetic/i, /edit distance/i, /pointwise mutual|\bpmi\b/i, /lexical/i],
    title: "Xử lý chữ: token, BoW, TF-IDF",
    formula: "\\mathrm{tfidf}(t,d)=\\mathrm{tf}(t,d)\\times\\log\\dfrac{N}{\\mathrm{df}(t)}",
    situation:
      "200 lời đánh giá spa, ví dụ minh họa. Cần biết «đau», «chờ», «sạch» xuất hiện ở đâu, không cần đọc hết trong cuộc họp 15 phút.",
    problem:
      "Đếm chữ thô thì «và», «của», «rất» chiếm ngôi. Stemming cắt quá tay thì hai ý khác nhau dính vào một gốc. Không có bước này thì đám mây từ toàn là hư từ.",
    why:
      "Token hóa để có đơn vị đếm. Stop word để bỏ hư từ. TF-IDF để chữ xuất hiện ở mọi bài không còn át chữ đặc trưng của một bài.",
    plain:
      "Bag-of-words đếm từ, bỏ thứ tự câu. TF-IDF vẫn đếm từ nhưng giảm giá những từ quá phổ biến trong cả tập.",
    precise:
      "Token là mảnh chữ. Lemma là dạng từ điển, stemming là cắt đuôi theo luật, dễ hơn và thô hơn. df là số tài liệu chứa từ. N là số tài liệu. Từ có mặt khắp nơi có IDF gần 0. Edit distance đếm số lần sửa để biến chuỗi này thành chuỗi kia, dùng trong gợi ý chính tả. PMI cao khi hai từ xuất hiện cùng nhau nhiều hơn mức ngẫu nhiên.",
    insight: "Đếm từ xong hãy trừ những từ có mặt ở khắp nơi. Phần còn lại mới là giọng của một bài đánh giá.",
    sources: [
      { claim: "TF-IDF nhân tần suất trong tài liệu với một trọng số giảm nếu từ xuất hiện ở nhiều tài liệu.", source: "Wikipedia, tf–idf", url: "https://en.wikipedia.org/wiki/Tf%E2%80%93idf" },
      illus("200 lời đánh giá là ví dụ minh họa."),
    ],
    glossary: [
      { term: "TF-IDF", en: "term frequency–inverse document frequency", def: "Điểm của một từ trong một bài, thấp đi nếu từ đó ở khắp các bài." },
    ],
  }),

  T({
    id: "forest",
    keys: [/ensemble/i, /random forest/i, /out-of-bag|oob/i, /bagging/i, /class imbalance/i, /smote|undersampl/i, /feature importance in random/i],
    title: "Ensemble và rừng ngẫu nhiên",
    sim: "ensemble",
    situation:
      "Một cây sâu nhớ tháng khuyến mãi năm ngoái. Bạn muốn một mô hình ổn hơn trên khách mới, vẫn dùng được các ngưỡng mà cây hay bắt.",
    problem:
      "Một cây phương sai cao: đổi vài dòng huấn luyện là cấu trúc cây đổi. Lấy đúng một cây để chấm điểm tệp tháng sau thì điểm số nhảy theo mẫu đã rút.",
    why:
      "Bagging huấn luyện nhiều cây trên các mẫu bootstrap và cho chúng bỏ phiếu, để nhiễu của từng cây triệt lẫn nhau. Rừng ngẫu nhiên còn rút ngẫu nhiên một tập cột ở mỗi lần tách, để các cây không giống hệt nhau.",
    plain:
      "Nhiều cây, mỗi cây nhìn một mẫu hơi khác, rồi biểu quyết. Lớp nào nhiều phiếu hơn thì lấy.",
    precise:
      "Bootstrap là rút có hoàn lại. Out-of-bag là những dòng không lọt vào một lần rút, dùng để ước lượng lỗi mà không cần tập kiểm riêng. Feature importance của rừng thường trung bình độ giảm impurity, hoặc hoán vị cột và đo lỗi tăng. Mất cân bằng lớp: nếu 2% rời bỏ, rừng có thể toàn dự đoán «ở lại». Undersample bớt lớp đông, oversample hoặc SMOTE thêm lớp hiếm. Đó là đổi dữ liệu huấn luyện, phải giữ tập kiểm nguyên bản.",
    pitfalls: [
      { left: "Một cây", right: "Rừng", note: "Rừng thường ổn định hơn và khó vẽ lên một tờ giấy hơn. Khi cần giải thích cho khách, một cây nông vẫn có chỗ." },
      { left: "SMOTE trên mọi dữ liệu", right: "SMOTE chỉ trên tập huấn luyện", note: "Biến đổi lớp hiếm trên cả tập kiểm làm accuracy thành một số không còn nghĩa vận hành." },
    ],
    insight: "Rừng đổi độ ổn định lấy sự dễ kể. Đừng dùng rừng rồi vẫn hứa một quy tắc nếu-thì duy nhất.",
    sources: [
      { claim: "Random forest xây nhiều cây trên mẫu bootstrap và tập con đặc trưng, rồi lấy phiếu.", source: "Wikipedia, Random forest", url: "https://en.wikipedia.org/wiki/Random_forest" },
      illus("Tỷ lệ 2% là ví dụ minh họa."),
    ],
    glossary: [
      { term: "Bagging", en: "bootstrap aggregating", def: "Huấn luyện nhiều mô hình trên các mẫu rút có hoàn lại rồi gộp kết quả." },
      { term: "OOB", en: "out-of-bag error", def: "Lỗi ước lượng trên những dòng không được rút vào lần huấn luyện của một cây." },
    ],
  }),

  T({
    id: "biasvar",
    keys: [/model selection/i, /overfitting and underfitting/i, /bias-variance|bias variance/i, /simplicity vs complexity/i, /cross-validation|grid search|randomized search/i, /regularisation|regularization/i, /learning algorithm/i],
    title: "Bias, variance và cách chọn mô hình",
    sim: "bias",
    situation:
      "Cùng một tệp churn. Cây sâu 30 lá đúng 99% trên dữ liệu đã học và 74% trên tháng sau. Cây 4 lá đúng 86% lúc học và 84% tháng sau. Ví dụ minh họa.",
    problem:
      "Chọn mô hình theo điểm trên đúng tập đã học thì lúc nào cũng chọn mô hình phức tạp hơn. Đó là underfitting bị ghét oan và overfitting được thưởng.",
    why:
      "Bias là sai vì mô hình quá cứng, không đủ hình để theo tín hiệu. Variance là sai vì mô hình đổi theo từng mẫu rút. Cross-validation tồn tại để ước lượng điểm trên dữ liệu chưa dùng cho việc học, bằng cách xoay vòng các fold.",
    plain:
      "Tăng độ phức tạp thì lỗi trên tập học giảm. Lỗi trên tập mới giảm rồi tăng trở lại. Chỗ đáy của lỗi tập mới là vùng đáng chọn.",
    precise:
      "Underfitting: cả lỗi học và lỗi mới đều cao. Overfitting: lỗi học thấp, lỗi mới cao. K-fold cắt tập huấn luyện thành K phần, lần lượt để một phần ra để chấm, học trên phần còn lại. Grid search thử một lưới siêu tham số. Random search bốc ngẫu nhiên trong lưới, hợp khi có nhiều siêu tham số. Regularization cộng thêm một phạt vào hàm chi phí để hệ số đừng quá lớn.",
    pitfalls: [
      { left: "Tập học", right: "Tập kiểm", note: "Điểm để đi họp là điểm trên dữ liệu không tham gia học và không tham gia việc chọn ngưỡng. Dùng đi dùng lại cùng một tập kiểm cũng làm nó thành tập học theo một nghĩa khác." },
    ],
    insight: "Mô hình đáng giữ là mô hình sai ít trên dữ liệu chưa thấy, không phải mô hình thuộc lòng dữ liệu đã thấy.",
    sources: [
      { claim: "Đánh đổi bias-variance mô tả lỗi của mô hình quá đơn giản và mô hình quá bám mẫu.", source: "Wikipedia, Bias–variance tradeoff", url: "https://en.wikipedia.org/wiki/Bias%E2%80%93variance_tradeoff" },
      { claim: "Cross-validation xoay vòng phần dữ liệu để ước lượng khả năng khái quát.", source: "Wikipedia, Cross-validation (statistics)", url: "https://en.wikipedia.org/wiki/Cross-validation_(statistics)" },
      illus("99% và 74% là ví dụ minh họa, không phải benchmark."),
    ],
    glossary: [
      { term: "Underfitting", en: "underfitting", def: "Mô hình quá đơn giản nên bỏ sót cấu trúc thật trong dữ liệu." },
    ],
  }),

  T({
    id: "features",
    keys: [/feature engineering/i, /numeric feature/i, /categorical feature/i, /time-based feature/i, /handling numeric/i, /handling categorical/i, /handling time/i],
    title: "Tạo đặc trưng",
    situation:
      "Một cột ngày giờ ghé spa, ví dụ minh họa, chưa dùng được cho cây hay hồi quy. «2026-02-14 21:10» không phải một độ dốc có nghĩa.",
    problem:
      "Đưa nguyên cột ngày dưới dạng số serial thì mô hình hiểu đó là một đại lượng tăng đều. Tối thứ bảy và trưa thứ ba bị coi là hai điểm trên một thước, không phải hai kiểu nhu cầu.",
    why:
      "Feature engineering tồn tại để biến cột thô thành các tín hiệu đúng với cách khách hành xử: hạng mục, ngưỡng, chu kỳ tuần, khoảng cách tới một mốc.",
    plain:
      "Đặc trưng là cột mà mô hình được phép nhìn. Việc tạo cột này là nơi kiến thức ngành đi vào, trước cả thuật toán.",
    precise:
      "Với số: log khi đuôi dài, cắt bin khi quan hệ là ngưỡng, chuẩn hóa khi thuật toán phụ thuộc khoảng cách. Với hạng mục: biến giả hoặc target encoding có kiểm soát rò rỉ. Với thời gian: giờ trong ngày, thứ, khoảng cách tới lần ghé trước, cờ ngày lễ. Mọi thống kê để tạo đặc trưng chỉ được fit trên tập huấn luyện.",
    pitfalls: [
      { left: "fit", right: "transform", note: "Trung bình, min, max, và encoding học trên tập huấn luyện. Tập kiểm chỉ transform. Fit trên tất cả là rò thông tin." },
    ],
    insight: "Một cột ngày giấu thứ trong tuần và khoảng cách giữa hai lần ghé. Tách ra thì mô hình mới thấy lịch hẹn.",
    sources: [
      illus("Mốc thời gian spa là ví dụ minh họa."),
      { claim: "Rò rỉ dữ liệu xảy ra khi thông tin từ tập đánh giá lọt vào quá trình xây đặc trưng hoặc huấn luyện.", source: "scikit-learn, Common pitfalls", url: "https://scikit-learn.org/stable/common_pitfalls.html" },
    ],
  }),

  T({
    id: "ts",
    keys: [/time series/i, /forecast/i, /decomposition/i, /moving average/i, /exponential smoothing/i, /smoothing/i, /\bAR models?\b/i, /holt/i, /stationar/i, /acf|pacf/i, /auto regressive|autoregressive|\barima\b|\barma\b|\bsarima\b/i, /seasonal/i],
    title: "Chuỗi thời gian",
    sim: "smooth",
    formula: "\\hat y_t = \\alpha y_{t-1} + (1-\\alpha)\\hat y_{t-1}",
    situation:
      "Lượt khách mall theo tuần, ví dụ minh họa, có nhịp cuối tuần và một xu hướng giảm chậm từ đầu quý. Dự báo tuần tới bằng trung bình cả năm sẽ bỏ mất cả nhịp lẫn đà.",
    problem:
      "Hồi quy thường giả định các dòng độc lập. Doanh thu tuần này dính tuần trước. Coi mỗi tuần là một dòng độc lập thì khoảng tin cậy và độ dốc đều dễ nói quá.",
    why:
      "Các phương pháp chuỗi thời gian tồn tại vì thứ tự thời gian là cấu trúc, không phải một cột như mọi cột. Làm trơn, phân rã mùa vụ, và họ ARIMA là các cách dùng chính quá khứ của chuỗi để nói về bước tiếp theo.",
    plain:
      "Làm trơn mũ là trung bình có quên: quan sát mới nặng hơn quan sát cũ. Phân rã tách xu hướng, mùa vụ và phần còn lại. ARIMA thêm đạo hàm để chuỗi bớt trôi, rồi dùng vài bước trễ.",
    precise:
      "SES, simple exponential smoothing, có một hệ số α. Holt thêm xu hướng với β. Holt-Winters thêm mùa vụ với γ, dạng cộng hoặc nhân. Chuỗi dừng là chuỗi mà trung bình và phương sai không trôi theo thời gian. ACF đo tương quan với chính nó ở các độ trễ. PACF đo tương quan ở độ trễ k sau khi đã tính đến các trễ ngắn hơn. AR dùng các giá trị trễ. MA dùng các sai số trễ. ARIMA thêm bậc sai phân d. SARIMA thêm chu kỳ mùa.",
    symbols: [
      { sym: "\\alpha", meaning: "trọng số của quan sát mới nhất, từ 0 đến 1" },
    ],
    steps: [
      { label: "α", math: "\\alpha = 0{,}4", say: "Tuần mới chiếm 40% dự báo kế tiếp, phần còn lại là dự báo cũ. Ví dụ minh họa." },
      { label: "Cập nhật", math: "\\hat y_t = 0{,}4 y_{t-1} + 0{,}6 \\hat y_{t-1}", say: "Kéo α trong hình để thấy đường bám sát hoặc lì hơn." },
    ],
    pitfalls: [
      { left: "Dự báo", right: "Ngoại suy hồi quy", note: "Hồi quy trên thứ tự thời gian không tự có mùa vụ và tự tương quan. Chuỗi thời gian lấy cấu trúc đó làm trung tâm." },
      { left: "MAE", right: "MAPE", note: "MAPE chia cho giá trị thật, vỡ hoặc phóng khi mẫu số gần 0, ví dụ tuần đóng cửa doanh thu bằng 0." },
    ],
    insight: "Tuần tới chủ yếu là anh em của tuần vừa rồi và của cùng kỳ. Mô hình chỉ là cách nói điều đó bằng số.",
    sources: [
      { claim: "Làm trơn mũ đơn cập nhật mức bằng trung bình có trọng số giảm dần của quá khứ.", source: "Wikipedia, Exponential smoothing", url: "https://en.wikipedia.org/wiki/Exponential_smoothing" },
      { claim: "ARIMA gồm thành phần tự hồi quy, sai phân và trung bình trượt.", source: "Wikipedia, Autoregressive integrated moving average", url: "https://en.wikipedia.org/wiki/Autoregressive_integrated_moving_average" },
      illus("Nhịp cuối tuần của mall là ví dụ minh họa."),
    ],
    glossary: [
      { term: "Stationarity", en: "stationarity", def: "Trung bình và phương sai của chuỗi không đổi theo thời gian." },
      { term: "ACF", en: "autocorrelation function", def: "Tương quan của chuỗi với chính nó ở từng độ trễ." },
    ],
  }),

  T({
    id: "sql-case",
    keys: [/case statement/i, /stored procedure/i, /\budf\b/i, /cursor/i, /profitab/i, /customers without orders/i, /fraud detection/i],
    title: "CASE, hàm và câu hỏi kinh doanh trong SQL",
    sim: "sql",
    situation:
      "Bảng đơn hàng cần một cột thuế theo bậc doanh thu, và một danh sách khách chưa có đơn nào trong quý. Ví dụ minh họa: bậc 0–5 triệu thuế 0, trên 5 triệu thuế 8%.",
    problem:
      "Kéo dữ liệu ra Excel để if từng dòng thì quy tắc thuế nằm ngoài cơ sở dữ liệu. Lần sau người khác tính một bậc khác. Khách không có đơn thì INNER JOIN làm mất họ khỏi báo cáo.",
    why:
      "CASE WHEN viết một quy tắc phân loại ngay trong câu hỏi. LEFT JOIN cộng điều kiện đơn là NULL để tìm khách không mua. Hàm và procedure gom quy tắc đó lại khi nhiều báo cáo dùng chung.",
    plain:
      "CASE là if trong SQL. Khách không có đơn là hàng còn lại sau khi nối phía khách và chỉ giữ chỗ đơn bị trống.",
    precise:
      "CASE WHEN điều kiện THEN giá trị ELSE giá trị khác END trả về một cột. UDF là hàm người dùng viết. Stored procedure là một chuỗi câu lệnh có tên. Cursor đi từng dòng, chậm, chỉ dùng khi thật sự cần xử lý tuần tự. Với bài profitability, gross profit là doanh thu trừ giá vốn, rồi mới xếp khách. Fraud detection trong các buổi này thường là tìm độ lệch khỏi hành vi thường của chính khách đó, không phải một điểm số kỳ lạ đơn lẻ.",
    steps: [
      { label: "Bậc", math: "WHEN amount <= 5000000 THEN 0 ELSE amount * 0.08", say: "Ví dụ minh họa cho một bậc." },
      { label: "Không có đơn", math: "FROM customers c LEFT JOIN orders o ON c.id = o.customer_id WHERE o.id IS NULL", say: "Giữ khách, bỏ những người đã có đơn." },
    ],
    pitfalls: [
      { left: "WHERE trên cột bảng phải", right: "Điều kiện trong ON", note: "WHERE o.amount > 0 sau LEFT JOIN biến nó thành INNER, vì hàng không khớp có amount NULL và bị loại." },
    ],
    insight: "Quy tắc thuế và quy tắc «chưa mua» nên nằm trong câu SQL đọc lại được, không nằm trong trí nhớ người xuất file.",
    sources: [
      { claim: "CASE là biểu thức điều kiện chuẩn của SQL. LEFT JOIN giữ hàng bên trái khi không khớp.", source: "MySQL 8.4, CASE statement", url: "https://dev.mysql.com/doc/refman/8.4/en/case.html" },
      illus("Bậc 5 triệu và thuế 8% là ví dụ minh họa."),
    ],
  }),
];
