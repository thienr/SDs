import type { Overview } from "@/data/ov/types";
import { CODE, DEF, GO, H, NOTE, P, UL } from "@/data/ov/h";

const FOLLOW = "Trang này tóm tắt ý chính để bạn có bản đồ; thông tin chính thức về quy chế, hạn nộp và tỷ trọng điểm luôn lấy từ trang chương trình trên upGrad.";

export const ov3: Record<string, Overview> = {
  "d-24e4a74ab8e9": {
    title: "Giới thiệu chương trình: bức tranh nghề dữ liệu và cấu trúc lộ trình",
    lead: "Chương trình đi từ nền (Python, thống kê, SQL) tới học máy, trực quan hóa, GenAI và đồ án. Hiểu bản đồ này trước giúp bạn biết mỗi kỹ năng sẽ được dùng ở đâu và vì sao thứ tự học là như vậy. " + FOLLOW,
    blocks: [
      H("1. Hệ sinh thái nghề dữ liệu"),
      DEF(
        ["Business Intelligence / Data Analytics", "Biến dữ liệu thành báo cáo và dashboard để theo dõi hoạt động kinh doanh. Công cụ điển hình: SQL, Excel, Tableau, Power BI."],
        ["Business Analysis", "Nối nhu cầu kinh doanh với giải pháp dữ liệu: thu thập yêu cầu, xác định bài toán, đo hiệu quả. Cần cả kỹ năng phân tích và giao tiếp."],
        ["Data Science / Machine Learning", "Dùng mô hình thống kê và học máy để dự đoán và phân nhóm: hồi quy, phân loại, gom cụm, chuỗi thời gian."],
        ["Deep Learning và NLP", "Mạng nơ-ron nhiều lớp và xử lý ngôn ngữ tự nhiên; nền tảng của các mô hình sinh (GenAI)."],
        ["Data Engineering", "Xây hạ tầng đưa dữ liệu từ nguồn tới kho: pipeline, kho dữ liệu, chất lượng và hiệu năng truy vấn."],
      ),
      H("2. Lộ trình học theo tầng"),
      UL(
        "Tầng nền: Python, thống kê mô tả, xác suất, SQL — thứ mọi nhánh đều cần.",
        "Tầng mô hình: hồi quy tuyến tính, logistic, cây, gom cụm, chuỗi thời gian.",
        "Tầng ứng dụng: trực quan hóa và kể chuyện bằng dữ liệu, giải quyết vấn đề có cấu trúc, GenAI và RAG.",
        "Tầng tích hợp: bài tập lớn và đồ án, nơi dùng nhiều kỹ năng cùng lúc.",
      ),
      P("Mỗi tầng dựa trên tầng trước: không thể đọc kết quả hồi quy nếu chưa hiểu phân phối và kiểm định; không thể dựng pipeline RAG nếu chưa hiểu Python và vector."),
      NOTE("Cách dùng sổ này song song với upGrad: video để nghe giảng, thẻ ở đây để hiểu cặn kẽ một khái niệm, và nút 'Xem lại trên upGrad' ở cuối trang để quay về đúng chỗ khi cần."),
      GO("c0-order", "c0-read", "crisp-biz", "ps-open"),
    ],
  },
  "d-6f477552da7a": {
    title: "Thành công trong chương trình: cách học, cộng đồng, liêm chính học thuật",
    lead: "Chương trình học từ xa tốn nhiều kỷ luật hơn lớp truyền thống. Nghiên cứu về học tập cho thấy kết quả tốt đến từ ba thứ: lịch học đều, thực hành chủ động (làm bài, tự giải thích), và nhận phản hồi từ người khác. " + FOLLOW,
    blocks: [
      H("1. Học chủ động thay vì xem thụ động"),
      UL(
        "Truy hồi (retrieval practice): sau mỗi buổi, gấp ghi chú lại và tự viết những gì nhớ được; việc cố nhớ củng cố trí nhớ mạnh hơn đọc lại.",
        "Giãn cách (spaced repetition): ôn lại sau 1 ngày, 1 tuần, 1 tháng thay vì dồn một lần.",
        "Dạy lại (Feynman): giải thích một khái niệm cho người chưa biết; chỗ bạn vấp là chỗ chưa hiểu.",
        "Làm bài trước khi thấy đáp án: thất bại ngắn hạn trong việc tự giải giúp nhớ lâu hơn.",
      ),
      H("2. Cộng đồng học tập"),
      P("Hỏi đáp, thảo luận nhóm và làm việc với mentor giúp phát hiện hiểu lầm sớm. Quy tắc tốt: trước khi hỏi, viết rõ bạn đã thử gì và kết quả ra sao; cách hỏi này vừa tôn trọng người trả lời vừa buộc bạn tự phân tích lỗi."),
      H("3. Liêm chính học thuật"),
      P("Bài nộp phải là sản phẩm của bạn. Tham khảo ý tưởng được phép nếu ghi nguồn; sao chép bài hoặc nhờ người khác làm hộ là vi phạm và làm hỏng mục đích học. Trong bối cảnh có công cụ AI, ranh giới thực tế là: dùng AI để hiểu và kiểm tra là học; dùng AI để nộp mà không hiểu là mất đúng thứ chương trình muốn trao cho bạn."),
      H("4. Kế hoạch tuần mẫu"),
      UL(
        "Cố định các khung giờ học cùng ngày trong tuần.",
        "Mỗi buổi: xem bài (nghe) → làm bài tập nhỏ → ghi 3 điều nhớ + 1 câu hỏi còn vướng.",
        "Cuối tuần: ôn lại các câu hỏi vướng và làm bài tự kiểm tra.",
      ),
      GO("c0-read", "ps-do"),
    ],
  },
  "d-54978e5d574d": {
    title: "Đánh giá trong chương trình: bài luyện, bài chấm điểm và bài tập lớn",
    lead: "Chương trình dùng nhiều dạng đánh giá với mục đích khác nhau. Biết dạng nào để học và dạng nào để lấy điểm giúp phân bổ công sức đúng chỗ. " + FOLLOW,
    blocks: [
      H("1. Các dạng đánh giá"),
      DEF(
        ["Bài luyện (practice, ungraded)", "Không tính điểm; mục đích là phát hiện chỗ chưa hiểu. Làm nghiêm túc vì sai ở đây không mất gì."],
        ["Bài chấm điểm (graded)", "Câu hỏi hoặc bài code có tính điểm; thường giới hạn số lần nộp hoặc thời gian."],
        ["Bài tập lớn (assignment)", "Phân tích trọn vẹn trên dữ liệu thật, đánh giá khả năng tích hợp: làm sạch, phân tích, mô hình, diễn giải."],
        ["Đồ án / capstone", "Giải một bài toán kinh doanh đầu-cuối; thường là sản phẩm đưa vào hồ sơ năng lực."],
      ),
      H("2. Chiến lược chuẩn bị"),
      UL(
        "Với bài chấm điểm: làm lại bài luyện cùng chủ đề trước, vì phần lớn lỗi nằm ở khái niệm nền.",
        "Với bài tập lớn: đọc yêu cầu kỹ, chia thành các câu nhỏ, làm đủ ba lớp — kết quả, cách đọc kết quả, nhận xét kinh doanh. Chỉ có code mà thiếu nhận xét là mất điểm phổ biến nhất.",
        "Giữ ghi chú cá nhân về lỗi đã mắc; lỗi lặp lại là tín hiệu cần ôn khái niệm.",
      ),
      H("3. Tiêu chí một nhận xét tốt"),
      UL("Nêu con số cụ thể.", "Nói ý nghĩa kinh doanh.", "Nêu giới hạn (mẫu, giả định).", "Đề xuất bước tiếp."),
      GO("eda-ask", "ps-smart", "st-shape"),
    ],
  },
  "d-36ff15493354": {
    title: "Bắt đầu hành trình: thiết lập mục tiêu, kế hoạch và môi trường học",
    lead: "Phần khởi động là lúc đặt nền cho cả chương trình: mục tiêu rõ ràng, lịch học thực tế và môi trường làm việc sẵn sàng. Các quy tắc đặt mục tiêu ở đây cũng chính là những gì bạn dùng khi giải bài toán kinh doanh về sau. " + FOLLOW,
    blocks: [
      H("1. Mục tiêu theo chuẩn SMART"),
      P("Một mục tiêu SMART cụ thể (Specific), đo được (Measurable), khả thi (Achievable), liên quan (Relevant) và có hạn (Time-bound). 'Học tốt Python' không phải SMART; 'hoàn thành module Python trước ngày 30 với ít nhất 8/10 bài luyện đúng' thì phải."),
      H("2. Phác lộ trình"),
      UL(
        "Xác định điểm xuất phát (đã biết gì) và đích đến (công việc/vai trò mong muốn).",
        "Chia đường đi thành các chặng theo khóa; mỗi chặng có một sản phẩm kiểm chứng được (bài tập, dự án nhỏ).",
        "Dự phòng thời gian cho tuần ốm hoặc bận; kế hoạch không có đệm sẽ vỡ ở tuần đầu tiên.",
      ),
      H("3. Thiết lập môi trường"),
      P("Chuẩn bị trình soạn thảo/notebook, kiểm tra kết nối, làm quen bảng điều khiển học tập. Làm quen công cụ trước khi cần dùng giúp thời gian căng thẳng không bị tiêu vào việc cài đặt."),
      GO("ps-smart", "ps-rank", "ps-do"),
    ],
  },
  "d-a96ea32aa6c6": {
    title: "Trải nghiệm ngành: dữ liệu được dùng trong doanh nghiệp như thế nào",
    lead: "Buổi này nối nội dung học với công việc thật: một dự án dữ liệu trong doanh nghiệp đi từ câu hỏi kinh doanh, qua dữ liệu và mô hình, tới quyết định. Mô hình tham chiếu của ngành là CRISP-DM, cũng là khung xương của chương trình. " + FOLLOW,
    blocks: [
      H("1. Vòng đời một dự án dữ liệu"),
      DEF(
        ["Hiểu bài toán kinh doanh", "Xác định quyết định cần hỗ trợ, thước thành công, ràng buộc. Sai ở bước này thì mọi bước sau đều chính xác một cách vô ích."],
        ["Hiểu và chuẩn bị dữ liệu", "Tìm nguồn, kiểm tra chất lượng, làm sạch, tạo đặc trưng. Thường chiếm phần lớn thời gian dự án."],
        ["Mô hình hóa và đánh giá", "Chọn thuật toán, huấn luyện, đánh giá bằng thước phản ánh chi phí kinh doanh."],
        ["Triển khai và theo dõi", "Đưa kết quả vào quy trình thật, theo dõi hiệu quả và độ trôi của mô hình theo thời gian."],
      ),
      H("2. Kỹ năng ngoài kỹ thuật"),
      UL("Đặt câu hỏi đúng với người làm kinh doanh.", "Kể chuyện bằng dữ liệu cho người ra quyết định.", "Hiểu giới hạn dữ liệu để không hứa quá khả năng."),
      GO("crisp-biz", "crisp-data", "crisp-prep", "crisp-ship", "biz-map", "biz-metric", "st-shape"),
    ],
  },
  "d-3cf93b99665a": {
    title: "Hướng dẫn dùng Prism Coding Console (tùy chọn)",
    lead: "Prism là môi trường viết và chạy code trong các bài thực hành của chương trình. Dùng thành thạo công cụ làm bạn tập trung vào bài thay vì vật lộn với giao diện. " + FOLLOW,
    blocks: [
      H("1. Những thao tác cần biết"),
      UL(
        "Viết code trong ô soạn thảo, chạy toàn bộ hoặc chạy thử và xem đầu ra ở khung kết quả.",
        "Đọc thông báo lỗi từ dòng cuối lên: dòng cuối nói loại lỗi, các dòng trên chỉ chỗ xảy ra.",
        "Nộp bài chỉ sau khi đã chạy thử trên ví dụ đề cho và vài trường hợp biên tự nghĩ.",
      ),
      H("2. Ba lỗi người mới hay gặp"),
      DEF(
        ["NameError", "Dùng tên chưa được tạo (viết sai chính tả hoặc chạy ô sau trước ô trước). Python chạy từ trên xuống."],
        ["IndentationError", "Thụt lề sai; trong Python thụt lề là cú pháp."],
        ["TypeError", "Phép toán không hợp kiểu, như cộng chuỗi với số. Chuyển kiểu bằng int(), str(), float() cho đúng chỗ."],
      ),
      H("3. Thói quen gỡ lỗi"),
      CODE("print(type(x), x)        # xem kiểu và giá trị tại chỗ nghi ngờ\nprint(len(items))        # kiểm tra kích thước"),
      GO("py-run", "py-type", "py-op"),
    ],
  },
  "d-a1795284fc85": {
    title: "Ôn tập Python nền tảng: biến, kiểu, chuỗi và thực hành code tốt",
    lead: "Buổi thực hành của Module 1 củng cố bốn trụ: giá trị và kiểu, phép toán, chuỗi, và thói quen viết code sạch. Đa số lỗi ở người mới đến từ hiểu sai kiểu dữ liệu và thứ tự chạy, nên trang này tóm tắt đúng các điểm đó.",
    blocks: [
      H("1. Điểm cốt lõi"),
      DEF(
        ["Gán và so sánh", "Một dấu = gán giá trị vào tên; hai dấu == so sánh hai giá trị và trả True/False."],
        ["Kiểu dữ liệu", "int, float, str, bool. '3' + '4' là '34' (nối chuỗi) còn 3 + 4 là 7. Phép toán hợp lệ phụ thuộc kiểu."],
        ["Chuỗi bất biến", "Mọi phép trên chuỗi trả về chuỗi mới; chuỗi cũ không tự đổi. s.upper() không làm đổi s nếu bạn không gán lại."],
        ["Thứ tự chạy", "Python chạy từ trên xuống; một tên phải được tạo trước khi dùng."],
      ),
      H("2. Thực hành code tốt (coding best practices)"),
      UL(
        "Đặt tên biến nói lên ý nghĩa (so_don thay vì x1).",
        "Mỗi dòng làm một việc; tách biểu thức dài thành bước trung gian.",
        "Chú thích giải thích 'vì sao', không chép lại 'cái gì'.",
        "Tránh số 'thần kỳ' nằm trơ trong code; gán vào biến có tên.",
      ),
      H("3. Hiểu lầm thường gặp (common misconceptions)"),
      UL(
        "Tưởng input() trả về số: thực ra luôn là chuỗi, cần int()/float().",
        "Tưởng chia / cho kết quả nguyên: / luôn ra float; dùng // để chia nguyên.",
        "Tưởng so sánh chuỗi số đúng như số: '10' < '9' là True vì so từng ký tự.",
      ),
      H("4. Cách tự kiểm tra"),
      P("Trước khi chạy, đoán đầu ra từng dòng; sau đó chạy và so. Chỗ đoán sai là chỗ cần xem lại khái niệm."),
      GO("py-run", "py-type", "py-op", "py-str"),
    ],
  },
  "d-ed679b3f2eb6": {
    title: "Ôn tập cấu trúc điều khiển Python: if, for, while và hàm",
    lead: "Cấu trúc điều khiển quyết định chương trình đi nhánh nào và lặp bao nhiêu lần. Các bài code ở buổi này (CQ) thực chất đều quy về ba câu hỏi: điều kiện đúng khi nào, vòng lặp dừng khi nào, và hàm trả về gì.",
    blocks: [
      H("1. Ba ý chính"),
      DEF(
        ["if / elif / else", "Chỉ một nhánh chạy: nhánh đầu tiên có điều kiện đúng. Thứ tự các elif quan trọng. Chuỗi rỗng, 0, None, danh sách rỗng đều được coi là False."],
        ["for và while", "for đi qua từng phần tử của một chuỗi/danh sách/range; while lặp tới khi điều kiện sai và có thể không bao giờ dừng nếu quên cập nhật. break thoát vòng, continue bỏ qua lượt hiện tại."],
        ["Hàm", "Hàm trả về giá trị sau return; không có return thì trả về None. Biến tạo bên trong hàm không tồn tại bên ngoài."],
      ),
      H("2. Mẫu vòng lặp thường dùng"),
      CODE("total = 0\nfor x in data:\n    if x > 0:          # lọc\n        total += x     # tích lũy\n\ncount = 0\nwhile n > 1:           # lặp theo điều kiện\n    n //= 2\n    count += 1"),
      H("3. Lỗi cần soát"),
      UL(
        "Lệch một đơn vị (off-by-one): range(n) đi từ 0 đến n−1.",
        "Vòng while không đổi biến điều kiện → vòng lặp vô hạn.",
        "Khởi tạo biến tích lũy bên trong vòng lặp → bị đặt lại mỗi lượt.",
        "Quên return hoặc in thay vì trả về.",
      ),
      GO("py-if", "py-loop", "py-fn"),
    ],
  },
  "d-6c507411edff": {
    title: "Ôn tập cấu trúc dữ liệu Python: list, tuple, set, dict",
    lead: "Chọn đúng cấu trúc dữ liệu là nửa lời giải. Các bài ở buổi này (đếm số môn của học sinh, tính tổng số lần chạy) đều là biến thể của việc duyệt một cấu trúc và gom dữ liệu vào một cấu trúc khác, thường là dict.",
    blocks: [
      H("1. Bảng chọn nhanh"),
      DEF(
        ["list", "Có thứ tự, sửa được, cho phép trùng; chỉ số bắt đầu từ 0. Dùng khi cần giữ thứ tự và thay đổi."],
        ["tuple", "Có thứ tự nhưng không sửa được. Dùng cho bản ghi cố định như (tọa độ x, y)."],
        ["set", "Không trùng, không hứa thứ tự; kiểm tra thành viên nhanh. Dùng để loại trùng hoặc phép giao/hợp."],
        ["dict", "Cặp khóa–giá trị; tra theo khóa nhanh. d[khóa] báo lỗi nếu thiếu, d.get(khóa, mặc định) thì không."],
      ),
      H("2. Mẫu gom dữ liệu"),
      CODE("runs = {}\nfor name, score in innings:          # innings: list các cặp (tên, số điểm)\n    runs[name] = runs.get(name, 0) + score\n\nsubject_count = {s: len(subs) for s, subs in students.items()}"),
      H("3. Cắt lát và sao chép"),
      UL(
        "a[1:4] lấy chỉ số 1,2,3 (không gồm điểm cuối).",
        "b = a không sao chép mà trỏ cùng một danh sách; dùng a.copy() hoặc a[:] để có bản sao.",
        "Duyệt dict: .items() cho cả khóa lẫn giá trị.",
      ),
      GO("py-list", "py-tup", "py-set", "py-dict"),
    ],
  },
  "d-e55c173fd441": {
    title: "Ôn tập thư viện Python cho Data Science: NumPy, pandas, vẽ biểu đồ",
    lead: "Ba thư viện hợp thành bộ công cụ hằng ngày của người phân tích. NumPy cho mảng số tính nhanh, pandas cho bảng có nhãn, Matplotlib/Seaborn cho biểu đồ. Phần lớn bài code ở buổi này là chọn đúng dòng, đúng cột rồi tính hoặc vẽ.",
    blocks: [
      H("1. Mô hình tư duy"),
      DEF(
        ["NumPy array", "Mọi phần tử cùng một kiểu, xếp thành hình chữ nhật; phép toán áp lên cả mảng cùng lúc (vector hóa) thay vì vòng for."],
        ["pandas Series / DataFrame", "Series là một cột có nhãn (index); DataFrame là bảng nhiều cột. Phép cộng theo nhãn chứ không theo vị trí mắt nhìn."],
        ["loc và iloc", "loc chọn theo nhãn và gồm cả điểm cuối; iloc chọn theo vị trí và không gồm điểm cuối."],
        ["Biểu đồ", "Mỗi biểu đồ trả lời một câu hỏi; trục phải có nhãn và đơn vị."],
      ),
      H("2. Các thao tác quen thuộc"),
      CODE("df[df['revenue'] > 100]                  # lọc dòng\ndf.groupby('channel')['revenue'].mean()    # nhóm và tính\ndf['rate'] = df['orders'] / df['visits']  # cột mới\ndf.isna().sum()                            # đếm ô thiếu\ndf['revenue'].plot(kind='hist')           # biểu đồ phân phối"),
      H("3. Lỗi hay gặp"),
      UL(
        "Dùng and/or thay vì &/| khi lọc nhiều điều kiện (cần ngoặc đơn quanh từng điều kiện).",
        "Sửa trên lát cắt rồi không thấy bảng gốc đổi (SettingWithCopy) — dùng .loc để gán.",
        "Quên rằng groupby bỏ qua giá trị thiếu và có thể làm đổi kích thước nhóm.",
      ),
      GO("py-np", "py-ser", "py-frame", "py-plot", "eda-miss"),
    ],
  },
  "d-3b11cdbb8daf": {
    title: "Phân tích dữ liệu trong Excel: bản đồ module",
    lead: "Module Excel dạy cách làm việc có hệ thống trên bảng tính: từ ô và công thức, hàm logic và tra cứu, đến biểu đồ và PivotTable. Excel là công cụ phân tích phổ biến nhất trong doanh nghiệp nên đáng học như một ngôn ngữ thực thụ.",
    blocks: [
      H("1. Bản đồ module"),
      UL(
        "Ô, công thức và địa chỉ (tương đối, tuyệt đối với $).",
        "Hàm logic IF và các hàm đếm/tính theo điều kiện.",
        "Tra cứu: VLOOKUP, INDEX–MATCH.",
        "Làm sạch dữ liệu: lọc, sắp xếp, xử lý văn bản.",
        "Biểu đồ và PivotTable để tóm tắt và trực quan.",
      ),
      H("2. Nguyên tắc làm việc"),
      UL(
        "Một ô một ý: tách dữ liệu, tính toán và kết quả thành các vùng riêng.",
        "Công thức tham chiếu ô thay vì gõ cứng số, để đổi đầu vào là kết quả tự cập nhật.",
        "Lọc chỉ giấu dòng chứ không xóa; xóa mới làm mất dòng.",
      ),
      GO("xl-cell", "xl-lock", "xl-if", "xl-keep", "xl-chart", "xl-pivot", "xl-look"),
    ],
  },
  "d-15c2f4a07bf3": {
    title: "Excel: bài luyện và bài chấm điểm cuối module",
    lead: "Phần luyện tập gồm video giới thiệu, câu hỏi thực hành và bài ôn tổng hợp (recall quiz). Mục đích là kiểm tra bạn đã chuyển từ 'biết công thức' sang 'chọn đúng công cụ cho đúng bài'.",
    blocks: [
      H("1. Chọn công cụ theo câu hỏi"),
      DEF(
        ["Điều kiện → hành động", "IF (một điều kiện), IFS hoặc IF lồng nhau (nhiều bậc); COUNTIF/SUMIF cho đếm/tổng theo điều kiện."],
        ["Tìm giá trị theo khóa", "VLOOKUP nhìn sang phải và dễ tìm 'gần đúng' nếu quên đối số thứ tư; INDEX–MATCH nhìn được cả bên trái."],
        ["Tóm tắt nhiều dòng", "PivotTable gom dòng theo nhóm và tính tổng/trung bình, không tạo ra dữ liệu mới."],
        ["Hình dung xu hướng", "Cột để so các nhóm; đường để theo thời gian."],
      ),
      H("2. Lỗi thường gặp"),
      UL(
        "Quên $ nên địa chỉ trượt khi kéo công thức.",
        "Ô trống bị hiểu là 0 khi tính trung bình.",
        "VLOOKUP trả #N/A vì khóa có dấu cách thừa hoặc kiểu số/chữ khác nhau.",
      ),
      GO("xl-lock", "xl-if", "xl-look", "xa-match", "xl-pivot", "xa-count"),
    ],
  },
};
