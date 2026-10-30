import type { Overview } from "@/data/ov/types";
import { CODE, DEF, GO, H, NOTE, P, UL } from "@/data/ov/h";

const MM = "Mindmap là bản tóm tắt một trang của cả mô-đun: nhìn nhánh nào nối với nhánh nào để thấy cấu trúc, rồi quay về thẻ chi tiết khi cần nhớ lại. ";

export const ov5: Record<string, Overview> = {
  "d-42d2ea36147b": {
    title: "Giải quyết bài toán kinh doanh: luyện tập từ câu hỏi tới thước đo",
    lead: "Câu hỏi luyện tập của mô-đun này kiểm tra một việc: biến một vấn đề kinh doanh mơ hồ thành bài toán dữ liệu rõ ràng, chọn thước đo theo quyết định và nói được hành động tiếp theo. Mô hình tốt cho bài toán sai vẫn là thất bại.",
    blocks: [
      H("1. Chuỗi suy luận chuẩn"),
      DEF(
        ["Quyết định là gì?", "Ai sẽ làm gì khác đi nếu có kết quả? Nếu không có quyết định, chưa có bài toán."],
        ["Loại bài toán dữ liệu", "Dự đoán một số (hồi quy), một nhãn (phân loại), nhóm khách hàng (gom cụm), tương lai theo thời gian (chuỗi thời gian), hay tối ưu nguồn lực."],
        ["Dữ liệu cần có", "Mỗi dòng là gì, đáp án lấy từ đâu, có đủ lịch sử không, có rò rỉ thông tin từ tương lai không."],
        ["Thước đo", "Thước phản ánh chi phí thực: bỏ sót khách rời đắt hơn hay gọi nhầm đắt hơn? Dùng precision, recall hoặc tiền thay vì chỉ accuracy."],
        ["Hành động", "Điểm số được dùng thế nào: ưu tiên gọi 10% khách rủi ro nhất vì ngân sách chỉ đủ vậy."],
      ),
      H("2. Cách tự luyện"),
      UL(
        "Với mỗi tình huống, viết bốn dòng: quyết định – loại bài toán – thước đo – hành động.",
        "Tự hỏi 'nếu mô hình 90% chính xác thì quyết định có thay đổi không?' Nếu không, thước đo chưa đúng.",
        "Kiểm tra sự mất cân bằng lớp, độ lệch mẫu (mô hình học trên ai thì chỉ nói về nhóm đó) và độ trôi theo thời gian.",
      ),
      GO("biz-map", "biz-metric", "pred-proj", "logit-who", "logit-drift", "imb-trap"),
    ],
  },
  "d-c61a8b4c902b": {
    title: "Đóng góp cho dự án mã nguồn mở với Git và GitHub (tùy chọn)",
    lead: "Đóng góp cho thư viện mã nguồn mở là cách học thực chiến vì bạn đọc code của người khác, tuân thủ quy ước và nhận phản hồi công khai. Quy trình chuẩn trên GitHub là fork – clone – nhánh – commit – pull request.",
    blocks: [
      H("1. Quy trình đóng góp"),
      CODE("git clone <url-fork-của-bạn>\ncd repo\ngit checkout -b fix-typo-docs      # nhánh riêng cho thay đổi\n# sửa file...\ngit add .\ngit commit -m \"Fix typo in installation guide\"\ngit push origin fix-typo-docs\n# rồi mở Pull Request trên GitHub"),
      DEF(
        ["Fork", "Bản sao dự án về tài khoản của bạn để sửa tự do."],
        ["Branch", "Nhánh thử đi riêng, nhánh chính đứng yên; mỗi thay đổi một nhánh."],
        ["Commit", "Một ảnh chụp trạng thái kèm câu mô tả; viết câu mô tả cho người đọc sau này."],
        ["Pull Request", "Đề nghị gộp nhánh của bạn vào dự án gốc, kèm mô tả và để người bảo trì xét."],
      ),
      H("2. Cách chọn việc đầu tiên"),
      UL("Tìm nhãn 'good first issue' hoặc 'documentation'.", "Đọc CONTRIBUTING.md và quy tắc ứng xử trước khi làm.", "Bắt đầu với sửa lỗi chính tả, ví dụ trong tài liệu, kiểm thử còn thiếu."),
      GO("git-commit", "git-branch"),
    ],
  },
  "d-6b54e2c27b4d": {
    title: "Tạo website portfolio bằng GitHub Pages (tùy chọn)",
    lead: "Portfolio là bằng chứng bạn làm được việc: nhà tuyển dụng đọc dự án của bạn thay vì chỉ đọc CV. GitHub Pages cho phép đăng một trang tĩnh miễn phí từ một kho mã.",
    blocks: [
      H("1. Một portfolio tốt gồm gì"),
      UL(
        "Giới thiệu ngắn: bạn là ai, bạn giải loại bài toán nào.",
        "3–5 dự án; mỗi dự án có bài toán kinh doanh, dữ liệu, cách làm, kết quả và nhận xét.",
        "Liên kết tới mã nguồn và notebook sạch, có hướng dẫn chạy lại.",
        "Thông tin liên hệ.",
      ),
      H("2. Đăng lên GitHub Pages"),
      CODE("# tạo kho tên <tên-người-dùng>.github.io\ngit init && git add index.html && git commit -m \"First page\"\ngit remote add origin <url>\ngit push -u origin main\n# Settings > Pages > chọn nhánh main"),
      H("3. Trình bày dự án"),
      P("Mỗi dự án nên kể theo cấu trúc: tình huống – câu hỏi – cách làm – kết quả – hạn chế. Nhà tuyển dụng đọc nhanh nên câu chốt phải đứng đầu."),
      GO("git-commit", "git-branch", "st-shape", "st-pyramid"),
    ],
  },
  "d-375285700d78": {
    title: "Chạy K-means trong Python: từ dữ liệu tới cụm có ý nghĩa",
    lead: "Chạy K-means bằng scikit-learn chỉ vài dòng, nhưng phần quan trọng nằm ở quanh nó: chuẩn bị dữ liệu, chọn K, và đọc cụm. Trang này đưa quy trình và đoạn code mẫu theo trật tự thực hiện.",
    blocks: [
      H("1. Quy trình"),
      UL(
        "Chọn cột mô tả hành vi (số), xử lý giá trị thiếu và ngoại lai.",
        "Chuẩn hóa (StandardScaler) vì K-means dùng khoảng cách.",
        "Chạy K-means với nhiều K, ghi inertia và silhouette.",
        "Chọn K, huấn luyện lại, gắn nhãn cụm vào bảng gốc.",
        "Mô tả từng cụm bằng trung bình các cột gốc (chưa chuẩn hóa).",
      ),
      CODE("from sklearn.preprocessing import StandardScaler\nfrom sklearn.cluster import KMeans\nfrom sklearn.metrics import silhouette_score\n\nX = StandardScaler().fit_transform(df[['recency', 'frequency', 'monetary']])\n\nfor k in range(2, 8):\n    km = KMeans(n_clusters=k, n_init=10, random_state=0).fit(X)\n    print(k, round(km.inertia_, 1), round(silhouette_score(X, km.labels_), 3))\n\nkm = KMeans(n_clusters=4, n_init=10, random_state=0).fit(X)\ndf['cluster'] = km.labels_\ndf.groupby('cluster')[['recency', 'frequency', 'monetary']].mean()"),
      H("2. Đọc kết quả"),
      DEF(
        ["inertia", "Tổng bình phương khoảng cách trong cụm; luôn giảm khi K tăng nên chỉ dùng để tìm chỗ gập (elbow)."],
        ["silhouette", "Từ −1 đến 1; cao hơn là cụm tách rõ hơn. Chọn K có silhouette cao và có ý nghĩa nghiệp vụ."],
        ["profile cụm", "Bảng trung bình theo cụm; đặt tên mỗi cụm bằng hành vi nổi bật và kích thước cụm."],
      ),
      H("3. Bẫy"),
      UL("Quên chuẩn hóa nên một cột lấn át.", "random_state khác nhau cho cụm khác nhau; cố định để tái lập và dùng n_init lớn.", "Đọc elbow như bằng chứng cứng."),
      GO("clus-why", "km-loop", "km-k", "km-start", "eda-scale"),
    ],
  },
  "d-a2ac3e4d23bf": {
    title: "Mở đầu bài tập Hồi quy tuyến tính: yêu cầu, quy trình và cách chấm",
    lead: "Bài tập hồi quy yêu cầu xây một mô hình dự đoán trọn vẹn: hiểu dữ liệu, chuẩn bị, huấn luyện, kiểm tra giả định và diễn giải. Điểm không nằm ở con số R² cao nhất mà ở độ vững của từng bước và chất lượng nhận xét.",
    blocks: [
      H("1. Quy trình chuẩn của bài hồi quy"),
      UL(
        "EDA: phân phối đáp án, giá trị thiếu, ngoại lai, tương quan với từng cột.",
        "Chuẩn bị: xử lý thiếu, mã hóa biến phân loại (biến giả), tách tập huấn luyện/kiểm tra.",
        "Mô hình: hồi quy bội; chọn đặc trưng (kiểm tra VIF, p-value, hoặc chọn tiến/lùi).",
        "Kiểm tra giả định: phần dư vs giá trị dự đoán, phân phối phần dư, đa cộng tuyến.",
        "Đánh giá trên tập kiểm tra: RMSE, MAE, R².",
        "Diễn giải: hệ số theo đơn vị, kèm giới hạn.",
      ),
      H("2. Cách nhận xét có điểm"),
      P("Một nhận xét tốt có con số, ý nghĩa, giới hạn và bước tiếp: 'R² kiểm tra 0,71: mô hình giải thích khoảng 71% biến thiên thời gian giao; RMSE 6,2 phút nghĩa là dự đoán lệch điển hình ±6 phút. Phần dư loe khi quãng đường dài nên độ tin cậy giảm ở đơn xa.'"),
      NOTE("Bài hướng dẫn kèm kết quả chạy thật cho đề Delivery Time có ở trang riêng của bài (Linear Regression – Delivery Time Prediction)."),
      GO("slr-line", "slr-r2", "slr-assume", "slr-resid", "mlr-why", "mlr-coef", "mlr-vif", "mlr-dummy", "mlr-select", "met-reg"),
    ],
  },
  "d-f58cb26fc3e7": {
    title: "Mở đầu bài tập Hồi quy logistic: yêu cầu, quy trình và cách chấm",
    lead: "Bài tập logistic yêu cầu dự đoán một kết quả có/không (ví dụ nhân viên có nghỉ việc không) và đánh giá bằng các thước phù hợp với phân loại. Trọng tâm: xử lý lớp mất cân bằng, chọn ngưỡng và diễn giải odds.",
    blocks: [
      H("1. Quy trình"),
      UL(
        "EDA: tỷ lệ lớp, khác biệt giữa hai nhóm theo từng cột, giá trị thiếu.",
        "Chuẩn bị: mã hóa biến phân loại, chuẩn hóa nếu cần, tách huấn luyện/kiểm tra có phân tầng.",
        "Mô hình: logistic; kiểm tra đa cộng tuyến (VIF) và chọn đặc trưng.",
        "Đánh giá: ma trận nhầm lẫn, precision, recall, F1, ROC–AUC.",
        "Chọn ngưỡng theo chi phí; diễn giải hệ số qua odds.",
      ),
      H("2. Những điểm hay bị trừ điểm"),
      UL("Chỉ báo accuracy khi lớp mất cân bằng.", "Diễn giải hệ số như thay đổi xác suất thay vì odds.", "Chọn ngưỡng 0,5 mà không lý giải.", "Chuẩn hóa/điền thiếu trên toàn bộ dữ liệu trước khi tách (rò rỉ)."),
      NOTE("Bài hướng dẫn kèm kết quả chạy thật cho đề Employee Retention có ở trang riêng của bài."),
      GO("logit-sig", "logit-odds", "logit-many", "logit-cm", "logit-pr", "logit-roc", "mlr-vif", "imb-trap", "logit-who"),
    ],
  },
  "d-383a597fd8d5": {
    title: "Mở đầu Advanced ML Case Study: bài toán phát hiện gian lận và quy trình đầu-cuối",
    lead: "Case study cuối C4 ghép các kỹ thuật của khóa: xử lý lớp mất cân bằng, mô hình cây và ensemble, chính quy hóa, cross-validation và chọn ngưỡng theo chi phí. Đây là bài tích hợp, nên điểm đến từ trình tự và lý giải mỗi quyết định.",
    blocks: [
      H("1. Quy trình khuyến nghị"),
      UL(
        "Hiểu bối cảnh: một hồ sơ bồi thường gian lận bỏ sót tốn bao nhiêu, điều tra nhầm tốn bao nhiêu.",
        "EDA và làm sạch; chú ý giá trị thiếu mã hóa đặc biệt và tỷ lệ lớp.",
        "Tách tập có phân tầng; mọi bước học từ dữ liệu nằm trong pipeline.",
        "Mốc cơ sở (logistic/cây nông), rồi random forest/boosting.",
        "Xử lý mất cân bằng bằng class_weight hoặc lấy lại mẫu (chỉ trên tập huấn luyện).",
        "Điều chỉnh siêu tham số bằng cross-validation; đánh giá cuối trên tập kiểm tra một lần.",
        "Chọn ngưỡng theo chi phí và báo cáo precision/recall/AUC.",
      ),
      H("2. Kiểm tra lỗi hay gặp"),
      UL("Rò rỉ dữ liệu qua chuẩn hóa hoặc lấy lại mẫu trước khi tách.", "Báo accuracy thay vì recall/PR-AUC.", "Dùng độ quan trọng đặc trưng như bằng chứng nhân quả."),
      NOTE("Bài hướng dẫn kèm kết quả chạy thật cho đề Fraudulent Claim Detection có ở trang riêng của bài."),
      GO("ens-vote", "ens-bag", "rf-col", "imb-trap", "imb-fix", "imb-smote", "bv-bias", "cv-fold", "cv-grid", "logit-pr", "logit-roc"),
    ],
  },
  "d-6b65785fef68": {
    title: "Mindmap chương trình chung: bản đồ toàn bộ nội dung nền",
    lead: MM + "Bản mindmap chung này nối các mô-đun nền: Python, Data Science, trực quan hóa, EDA, thống kê suy diễn, hồi quy tuyến tính, logistic, SQL, SQL nâng cao, cây quyết định, gom cụm và NLP cơ bản.",
    blocks: [
      H("1. Hai trục chạy xuyên chương trình"),
      DEF(
        ["Trục dữ liệu", "Python/SQL lấy và xử lý dữ liệu → EDA hiểu dữ liệu → trực quan hóa trình bày."],
        ["Trục mô hình", "Thống kê suy diễn nói về bất định → hồi quy dự đoán số → logistic/cây dự đoán nhãn → gom cụm tìm nhóm → NLP xử lý văn bản."],
      ),
      H("2. Cách dùng mindmap để ôn"),
      UL("Che nội dung, tự vẽ lại sơ đồ từ trí nhớ rồi so với bản gốc.", "Với mỗi nhánh, nói một câu 'dùng khi nào' và một câu 'bẫy lớn nhất'."),
      GO("c0-order", "eda-ask", "ht-p", "slr-line", "logit-sig", "sql-join", "tree-ask", "clus-why", "nlp-tok"),
    ],
  },
  "d-c970f5fa2571": {
    title: "Mindmap: nhập môn lập trình Python",
    lead: MM + "Nhánh Python gồm giá trị và kiểu, biến, phép toán, câu lệnh điều kiện, vòng lặp, hàm và nhập–xuất.",
    blocks: [
      H("1. Cây khái niệm"),
      DEF(
        ["Giá trị và kiểu", "int, float, str, bool; chuyển kiểu; phép toán hợp lệ phụ thuộc kiểu."],
        ["Điều khiển luồng", "if/elif/else chọn nhánh; for/while lặp; break/continue; điều kiện kết hợp bằng and/or/not."],
        ["Hàm", "def, tham số, return; phạm vi biến."],
        ["Cấu trúc dữ liệu cơ bản", "list, tuple, set, dict và khi nào chọn cái nào."],
      ),
      H("2. Bẫy chính của mỗi nhánh"),
      UL("Kiểu: '3'+'4' khác 3+4.", "Điều kiện: = khác ==.", "Vòng lặp: while quên cập nhật điều kiện.", "Hàm: thiếu return trả về None."),
      GO("py-run", "py-type", "py-op", "py-if", "py-loop", "py-fn", "py-str", "py-list"),
    ],
  },
  "d-2cd83ace6f40": {
    title: "Mindmap: Python cho Data Science (NumPy, pandas)",
    lead: MM + "Nhánh này gồm cấu trúc dữ liệu nâng cao (dict, set), mảng NumPy, Series và DataFrame của pandas, lọc, nhóm và ghép bảng.",
    blocks: [
      H("1. Cây khái niệm"),
      DEF(
        ["NumPy", "Mảng cùng kiểu, phép toán vector hóa, thống kê trên mảng, broadcasting."],
        ["pandas", "Series và DataFrame; chọn bằng loc/iloc; lọc theo điều kiện; thêm cột; groupby; ghép bảng (merge); xử lý ô thiếu."],
        ["Vòng đời một phân tích", "Đọc dữ liệu → kiểm tra → làm sạch → biến đổi → tóm tắt → vẽ."],
      ),
      H("2. Bẫy chính"),
      UL("Series cộng theo nhãn, không theo vị trí.", "loc gồm điểm cuối, iloc thì không.", "Lọc nhiều điều kiện cần & và ngoặc đơn."),
      GO("py-np", "py-ser", "py-frame", "py-dict", "py-set", "eda-miss"),
    ],
  },
  "d-3afcb81e0cac": {
    title: "Mindmap: trực quan hóa dữ liệu bằng Python",
    lead: MM + "Nhánh này đi từ chọn loại biểu đồ theo câu hỏi, cách vẽ bằng Matplotlib/Seaborn, tới nguyên tắc để biểu đồ trung thực và dễ đọc.",
    blocks: [
      H("1. Chọn biểu đồ theo câu hỏi"),
      DEF(
        ["So sánh nhóm", "Biểu đồ cột (bar)."],
        ["Phân phối của một cột số", "Histogram, boxplot (cho thấy trung vị, tứ phân vị, ngoại lai)."],
        ["Quan hệ hai cột số", "Biểu đồ phân tán (scatter), thêm đường xu hướng."],
        ["Theo thời gian", "Biểu đồ đường, khi trục là thứ tự có thật."],
        ["Phần của tổng", "Biểu đồ tròn/treemap, chỉ khi ít phần."],
      ),
      H("2. Nguyên tắc trung thực"),
      UL("Trục có nhãn và đơn vị.", "Cột bắt đầu từ 0.", "Không dùng hai trục khi chưa ghi rõ hai đơn vị.", "Một biểu đồ, một thông điệp."),
      GO("py-plot", "tb-why", "tb-bar", "tb-box", "tb-part", "eda-num"),
    ],
  },
  "d-cbf9ea517cc6": {
    title: "Mindmap: phân tích khám phá dữ liệu (EDA)",
    lead: MM + "Nhánh EDA gồm: hiểu bối cảnh và nguồn, kiểm tra chất lượng (kiểu, thiếu, ngoại lai, không hợp lệ), phân tích đơn biến, hai biến và nhiều biến.",
    blocks: [
      H("1. Cây khái niệm"),
      DEF(
        ["Hiểu dữ liệu", "Nguồn, kiểu dữ liệu, mỗi dòng là gì."],
        ["Làm sạch", "Giá trị thiếu, ngoại lai, giá trị không hợp lệ, chuẩn hóa."],
        ["Đơn biến", "Cột chữ: đếm; cột chữ có thứ tự: giữ bậc; cột số: trung bình, trung vị, phân tán."],
        ["Hai biến", "Số–số: tương quan; số–chữ: so theo nhóm; chữ–chữ: bảng chéo và tỷ lệ."],
        ["Nhiều biến", "Biến gây nhiễu và nghịch lý Simpson."],
      ),
      H("2. Câu hỏi tự kiểm tra"),
      UL("Mỗi dòng là gì?", "Ô trống có nghĩa là không biết hay bằng 0?", "Tương quan này có thể do biến thứ ba không?"),
      GO("eda-ask", "eda-src", "eda-type", "eda-row", "eda-miss", "eda-out", "eda-r", "eda-cause", "eda-group", "eda-tab", "eda-flip"),
    ],
  },
  "d-957df50c166d": {
    title: "Mindmap: thống kê suy diễn",
    lead: MM + "Nhánh này gồm xác suất, phân phối, mẫu và tổng thể, định lý giới hạn trung tâm, khoảng tin cậy và kiểm định giả thuyết.",
    blocks: [
      H("1. Cây khái niệm"),
      DEF(
        ["Xác suất và phân phối", "Quy tắc cộng/nhân, có điều kiện, Bayes; nhị thức, chuẩn, điểm Z."],
        ["Mẫu và tổng thể", "Phân phối mẫu, CLT: trung bình mẫu tiến về hình chuông khi n lớn."],
        ["Ước lượng", "Khoảng tin cậy: độ tin cậy 95% nói về cách làm, không về một khoảng cụ thể."],
        ["Kiểm định", "H0/H1, α, p-value, sai lầm loại I/II; kiểm định t, hai tỷ lệ, chi-bình phương, ANOVA."],
      ),
      H("2. Hiểu lầm kinh điển"),
      UL("p-value là xác suất H0 đúng — sai: là độ hiếm của mẫu nếu H0 đúng.", "Không bác bỏ H0 nghĩa là H0 đúng — sai: chưa đủ bằng chứng.", "Nhìn trộm kết quả A/B làm hỏng mức α."),
      GO("samples", "clt", "ci", "ht-h0", "ht-p", "ht-err", "ht-t", "ht-means", "ht-props", "ht-chi", "ht-anova", "ht-peek"),
    ],
  },
  "d-19fe696951ce": {
    title: "Mindmap: hồi quy tuyến tính",
    lead: MM + "Nhánh hồi quy gồm hồi quy đơn, bình phương tối thiểu, R², giả định và phần dư, hồi quy bội, biến giả, đa cộng tuyến, chọn đặc trưng và gradient descent.",
    blocks: [
      H("1. Cây khái niệm"),
      DEF(
        ["Đơn và bội", "Một hay nhiều cột đầu vào; hệ số bội là độ dốc khi các cột khác giữ nguyên."],
        ["Khớp mô hình", "Bình phương tối thiểu hoặc gradient descent trên hàm chi phí."],
        ["Đánh giá", "R², RMSE, MAE, kiểm định độ dốc."],
        ["Chẩn đoán", "Giả định, phần dư, đa cộng tuyến (VIF), chọn đặc trưng."],
      ),
      H("2. Câu hỏi tự kiểm tra"),
      UL("Phần dư có hình dạng không?", "Hệ số này có thể chỉ là nhiễu không?", "Dự đoán này nằm trong hay ngoài vùng đã thấy?"),
      GO("slr-line", "slr-fit", "slr-r2", "slr-assume", "slr-resid", "slr-test", "gd-cost", "gd-step", "mlr-coef", "mlr-vif", "mlr-dummy", "mlr-select"),
    ],
  },
  "d-eee1f1621f86": {
    title: "Mindmap: hồi quy logistic",
    lead: MM + "Nhánh logistic gồm lý do không dùng hồi quy tuyến tính cho đáp án có/không, hàm sigmoid, odds, ma trận nhầm lẫn, precision/recall, ROC và chọn ngưỡng.",
    blocks: [
      H("1. Cây khái niệm"),
      DEF(
        ["Mô hình", "Điểm số tuyến tính → sigmoid → xác suất; hệ số tác động lên log-odds."],
        ["Đánh giá", "Ma trận nhầm lẫn, accuracy, precision, recall, specificity, F1, ROC–AUC."],
        ["Ra quyết định", "Chọn ngưỡng theo chi phí; xử lý lớp mất cân bằng."],
        ["Mở rộng", "Logistic bội, nhiều nhãn (OvR/softmax)."],
      ),
      H("2. Câu hỏi tự kiểm tra"),
      UL("Hệ số này nhân odds lên bao nhiêu lần?", "Chi phí bỏ sót và gọi nhầm cái nào lớn hơn?"),
      GO("logit-why", "logit-sig", "logit-odds", "logit-many", "logit-cm", "logit-pr", "logit-roc", "logit-rest", "logit-spec"),
    ],
  },
  "d-dbf07df4310b": {
    title: "Mindmap: SQL cơ bản và thiết kế cơ sở dữ liệu",
    lead: MM + "Nhánh SQL gồm kho dữ liệu và sơ đồ sao, khóa và ràng buộc, DDL/DML, truy vấn SELECT, gộp nhóm, các kiểu JOIN, phép tập hợp và chỉ mục.",
    blocks: [
      H("1. Cây khái niệm"),
      DEF(
        ["Thiết kế", "Kho dữ liệu, star schema, khóa chính/ngoại, ràng buộc, ERD."],
        ["Định nghĩa và thao tác", "DDL (CREATE, ALTER) khác DML (INSERT, UPDATE, DELETE)."],
        ["Truy vấn", "SELECT–FROM–WHERE–GROUP BY–HAVING–ORDER BY; hàm gộp."],
        ["Ghép bảng", "INNER, LEFT, RIGHT, UNION; khóa nối phải duy nhất."],
      ),
      H("2. Bẫy chính"),
      UL("Thứ tự thực thi: WHERE trước GROUP BY, HAVING sau.", "COUNT(*) khác COUNT(cột).", "LEFT JOIN cho NULL chứ không cho 0."),
      GO("sql-wh", "sql-star", "sql-key", "sql-ddl", "sql-run", "sql-having", "sql-count", "sql-join", "sql-left", "sql-union", "sql-idx"),
    ],
  },
  "d-8c4a5f7cfbea": {
    title: "Mindmap: SQL nâng cao",
    lead: MM + "Nhánh SQL nâng cao gồm hàm cửa sổ (xếp hạng, LAG/LEAD, khung), CASE, CTE và view, truy vấn lồng, UDF và thủ tục lưu sẵn, con trỏ và thực hành tốt.",
    blocks: [
      H("1. Cây khái niệm"),
      DEF(
        ["Hàm cửa sổ", "Thêm cột tổng hợp mà vẫn giữ từng dòng; PARTITION BY chia nhóm; ORDER BY và khung (frame) quyết định phạm vi tính."],
        ["Xếp hạng", "ROW_NUMBER, RANK, DENSE_RANK khác nhau khi hòa."],
        ["Cấu trúc truy vấn", "CASE, CTE, view, subquery."],
        ["Lập trình trong cơ sở dữ liệu", "UDF, stored procedure, cursor."],
      ),
      H("2. Bẫy chính"),
      UL("Khung ba dòng chưa chắc là ba tuần nếu thiếu ngày.", "LAG lấy dòng trước, không phải hôm qua nếu dữ liệu không liên tục.", "View không phải bản sao dữ liệu."),
      GO("sql-win", "sql-rank", "sql-part", "sql-frame", "sql-lag", "sql-nwin", "sql-case", "sql-cte", "sql-nest", "sql-proc", "sql-cur"),
    ],
  },
  "d-5302bf6c14bf": {
    title: "Mindmap: phân loại bằng cây quyết định",
    lead: MM + "Nhánh cây gồm câu hỏi đúng/sai, Gini, độ sâu và overfitting, độ quan trọng cột, cây hồi quy, và mở rộng sang rừng ngẫu nhiên.",
    blocks: [
      H("1. Cây khái niệm"),
      DEF(
        ["Cách cây học", "Chọn câu hỏi làm hai phía sạch hơn (Gini/entropy), lặp lại đệ quy."],
        ["Kiểm soát độ phức tạp", "Giới hạn độ sâu, số mẫu tối thiểu ở lá, cắt tỉa."],
        ["Đọc cây", "Từ gốc xuống lá là một luật; độ quan trọng cột cho biết cột dùng nhiều để chia."],
        ["Mở rộng", "Bagging, random forest, boosting."],
      ),
      GO("tree-ask", "tree-gini", "tree-deep", "tree-line", "tree-imp", "tree-num", "ens-vote", "rf-col"),
    ],
  },
  "d-cc418321b6d5": {
    title: "Mindmap: học không giám sát và gom cụm",
    lead: MM + "Nhánh gom cụm gồm lý do cần học không giám sát, K-means, chọn K, K-means++, gom cụm phân cấp, DBSCAN, GMM và K-modes cho dữ liệu phân loại.",
    blocks: [
      H("1. Cây khái niệm"),
      DEF(
        ["Chia theo tâm", "K-means, K-means++, K-modes."],
        ["Phân cấp", "Dendrogram, linkage."],
        ["Theo mật độ và xác suất", "DBSCAN, GMM."],
        ["Đánh giá", "Elbow, silhouette, độ ổn định, ý nghĩa kinh doanh."],
      ),
      GO("clus-why", "km-loop", "km-k", "km-start", "hier", "link-how", "db-scan", "gmm-soft", "k-mode"),
    ],
  },
  "d-cc40d77a900d": {
    title: "Mindmap: nhập môn xử lý ngôn ngữ tự nhiên (NLP)",
    lead: MM + "Nhánh NLP cơ bản gồm token hóa và từ hư, stemming/lemmatisation, bag-of-words, TF-IDF, khoảng cách sửa và PMI.",
    blocks: [
      H("1. Cây khái niệm"),
      DEF(
        ["Tiền xử lý", "Token hóa, loại từ hư, stemming, lemmatisation."],
        ["Biểu diễn", "Bag-of-words (đếm), TF-IDF (giảm trọng số từ có ở mọi văn bản)."],
        ["Đo độ giống", "Khoảng cách sửa (edit distance), PMI."],
      ),
      GO("nlp-tok", "nlp-stem", "nlp-bow", "nlp-tfidf", "nlp-edit", "nlp-pmi"),
    ],
  },
};
