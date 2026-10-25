import type { Overview } from "@/data/ov/types";
import { CODE, DEF, GO, H, NOTE, P, UL } from "@/data/ov/h";

export const ov6: Record<string, Overview> = {
  "d-dfbb0360cfc3": {
    title: "Chuỗi thời gian I: bài chấm điểm về thứ tự, tách thành phần và dự báo đơn giản",
    lead: "Chuỗi thời gian khác dữ liệu thường ở một điểm: thứ tự là thông tin. Bài chấm điểm phần I kiểm tra bạn tôn trọng thứ tự khi chia dữ liệu, biết tách xu hướng–mùa vụ–nhiễu và có mốc dự báo đơn giản để so sánh.",
    blocks: [
      H("1. Ba thành phần"),
      DEF(
        ["Xu hướng (trend)", "Hướng đi dài hạn."],
        ["Mùa vụ (seasonality)", "Mẫu lặp theo chu kỳ cố định (tuần, tháng, quý)."],
        ["Nhiễu (residual)", "Phần còn lại không giải thích được. Cộng (additive) khi biên độ mùa không đổi; nhân (multiplicative) khi biên độ tăng theo mức."],
      ),
      H("2. Các phương pháp dự báo đơn giản"),
      DEF(
        ["Naive", "Dự báo bằng giá trị gần nhất; mốc tối thiểu — chưa thắng naive thì chưa xong."],
        ["SMA (trung bình trượt)", "Trung bình k kỳ gần nhất, mỗi kỳ một suất; làm mượt nhưng trễ."],
        ["San bằng mũ đơn (SES)", "Trọng số giảm theo thời gian, kỳ gần nặng hơn; không có xu hướng."],
        ["Holt / Holt-Winters", "Thêm thành phần dốc (Holt) và mùa (Holt-Winters); chu kỳ mùa do bạn khai báo."],
      ),
      H("3. Chia dữ liệu và thước đo"),
      UL("Không xáo trộn: huấn luyện trên quá khứ, kiểm tra trên đoạn sau.", "Walk-forward: học, chấm đoạn kế, cuốn tới.", "MAE/RMSE cùng đơn vị; MAPE gãy khi giá trị thật bằng 0."),
      GO("ts-order", "ts-dep", "ts-decomp", "ts-naive", "ts-sma", "ts-ses", "ts-holt", "ts-hw", "ts-mape", "ts-walk"),
    ],
  },
  "d-afabc672ce93": {
    title: "Chuỗi thời gian II: bài chấm điểm về tính dừng, ACF/PACF và ARIMA",
    lead: "Phần II chuyển từ làm mượt sang mô hình hóa quan hệ giữa các kỳ. Bài chấm kiểm tra bạn biết chuỗi dừng nghĩa gì, đọc ACF/PACF để chọn bậc, và phân biệt AR, MA, ARIMA, SARIMAX.",
    blocks: [
      H("1. Tính dừng"),
      P("Chuỗi dừng có trung bình, phương sai và cấu trúc tự tương quan không phụ thuộc thời điểm quan sát. Mô hình ARIMA đòi hỏi tính dừng nên chuỗi có xu hướng được lấy hiệu (differencing) trước. Kiểm tra bằng đồ thị và kiểm định ADF."),
      H("2. Các khối"),
      DEF(
        ["AR(p)", "Dự đoán kỳ này từ p kỳ trước."],
        ["MA(q)", "Dự đoán từ q cú sốc (sai số) kỳ trước; không phải trung bình trượt."],
        ["ARIMA(p,d,q)", "Lấy hiệu d lần rồi áp AR và MA."],
        ["SARIMAX", "Thêm mùa vụ (S) và biến ngoại sinh (X)."],
      ),
      H("3. Chọn bậc bằng ACF/PACF"),
      UL("PACF cắt đột ngột sau độ trễ p → gợi ý AR(p).", "ACF cắt đột ngột sau độ trễ q → gợi ý MA(q).", "Cả hai giảm dần → có thể cần ARMA hoặc lấy hiệu thêm.", "So sánh mô hình bằng AIC/BIC và kiểm tra phần dư có giống nhiễu trắng."),
      GO("ts-stat", "ts-acf", "ts-ar", "ts-ma", "ts-arima", "ts-walk", "ts-mape"),
    ],
  },
  "d-9de790455b93": {
    title: "Tableau: luyện chọn biểu đồ, nối bảng và trường tính toán",
    lead: "Câu hỏi luyện Tableau xoay quanh ba kỹ năng: chọn biểu đồ đúng với câu hỏi, nối dữ liệu đúng độ chi tiết, và viết trường tính toán cho chỉ số. Sai ở bước nối dữ liệu làm hỏng mọi biểu đồ vẽ sau.",
    blocks: [
      H("1. Chọn biểu đồ"),
      UL("So nhóm: cột. Theo thời gian: đường. Phần của tổng: tròn/treemap khi ít phần. Phân phối: histogram/hộp. Địa điểm thật: bản đồ."),
      H("2. Nối bảng"),
      P("Phép nối có thể nhân dòng nếu khóa không duy nhất nên tổng bị thổi phồng. Hãy kiểm tra số dòng trước và sau khi nối, và luôn biết 'một dòng là gì' (độ chi tiết)."),
      H("3. Trường tính toán và dashboard"),
      DEF(
        ["Calculated field", "Một công thức (IF, SUM, tỷ lệ) chứ không phải một phép đo mới; chú ý mức tổng hợp (aggregation)."],
        ["Dashboard", "Một trang cho một quyết định; hai trục phải ghi hai đơn vị; ưu tiên một thông điệp."],
      ),
      CODE("// tỷ lệ chuyển đổi\nSUM([Orders]) / SUM([Visits])\n// bậc chi tiêu\nIF [Spend] >= 1000 THEN 'Cao' ELSEIF [Spend] >= 300 THEN 'TB' ELSE 'Thấp' END"),
      GO("tb-why", "tb-bar", "tb-box", "tb-part", "tb-join", "tb-calc", "tb-dual"),
    ],
  },
  "d-7be4cc3e88c5": {
    title: "Excel nâng cao: bản đồ module (hàm văn bản, tra cứu, What-If, Solver, macro)",
    lead: "Module Excel nâng cao nâng từ công thức đơn lẻ lên mô hình bảng tính: xử lý văn bản, đếm có điều kiện, tra cứu hai chiều, phân tích What-If, tối ưu bằng Solver và tự động hóa bằng macro.",
    blocks: [
      H("1. Bản đồ"),
      DEF(
        ["Hàm văn bản", "LEFT, RIGHT, MID, TEXTJOIN… trả về chữ; không tự biến chữ thành số."],
        ["Đếm và tra cứu", "COUNT đếm ô số, COUNTA đếm ô không rỗng; INDEX–MATCH nhìn được sang trái, VLOOKUP thì không."],
        ["What-If", "Goal Seek, Data Table, kịch bản: đổi đầu vào để xem đầu ra; không phải nhìn thấy tương lai."],
        ["Solver", "Tối ưu với ô mục tiêu, ô quyết định và ràng buộc."],
        ["Macro", "Ghi lại thao tác bấm để lặp lại; không tự ra quyết định."],
      ),
      H("2. Nguyên tắc"),
      UL("Tách đầu vào – tính toán – kết quả.", "Solver chỉ đọc các ô bạn chỉ định; số gõ ngoài mô hình không được tính.", "Kiểm tra mô hình bằng vài bộ đầu vào mà bạn tự tính tay được."),
      GO("xa-text", "xa-count", "xa-match", "xa-what", "xa-macro", "or-sheet", "or-obj", "or-con"),
    ],
  },
  "d-64440fdb52d5": {
    title: "Power BI: bản đồ module (mô hình dữ liệu, Power Query, DAX, trang, RLS)",
    lead: "Power BI xây trên ba lớp: Power Query chuẩn bị dữ liệu, mô hình (bảng và quan hệ) và DAX tính chỉ số, rồi lớp trình bày (trang và bộ lọc). Hiểu lớp nào gây lỗi giúp sửa nhanh.",
    blocks: [
      H("1. Ba lớp"),
      DEF(
        ["Power Query", "Công thức biến đổi dữ liệu; 'làm mới' chạy lại công thức đó."],
        ["Mô hình", "Các bảng và quan hệ; biểu đồ chỉ là một câu hỏi đặt lên mô hình. Mỗi bảng cần rõ 'mỗi dòng là gì' (grain)."],
        ["DAX", "Cột tính lưu giá trị từng dòng; measure tính trong bộ lọc đang bật."],
        ["Trang và bảo mật", "Một trang cho một quyết định; RLS (Row-Level Security) là luật áp lên người xem, không phải slicer."],
      ),
      H("2. Lỗi hay gặp"),
      UL("Quan hệ nhiều–nhiều khiến tổng nhân lên.", "Dùng cột tính thay vì measure nên số không đổi theo bộ lọc.", "Quên làm mới dữ liệu nên báo cáo hiển thị số cũ."),
      GO("pb-model", "pb-pq", "pb-grain", "pb-dax", "pb-page", "pb-rls", "pb-refresh"),
    ],
  },
  "d-fbaabf353a86": {
    title: "Tư duy phân tích và khung giải quyết vấn đề I: câu hỏi, nguyên nhân gốc, cấu trúc nhánh",
    lead: "Bài chấm điểm phần I kiểm tra khung tư duy dùng trước khi mở dữ liệu: đặt câu hỏi đúng, tìm nguyên nhân gốc và chia vấn đề thành các nhánh không chồng lấn. Các khung này giúp phân tích đi đúng hướng ngay từ đầu.",
    blocks: [
      H("1. Các khung chính"),
      DEF(
        ["5 Whys", "Hỏi 'vì sao' đến khi gặp một nguyên nhân bạn thay đổi được; 'năm' là gợi ý, không phải luật."],
        ["SPIN", "Bốn loại câu hỏi (tình huống, vấn đề, hệ quả, nhu cầu) để khơi vấn đề; không phải kịch bản ép gật đầu."],
        ["MECE", "Các nhánh không chồng lấn (Mutually Exclusive) và cộng lại đủ (Collectively Exhaustive)."],
        ["Cây vấn đề", "Phân rã mục tiêu thành các nhánh MECE tới mức đo được."],
      ),
      H("2. Cách trả lời câu hỏi tình huống"),
      UL("Xác định loại vấn đề trước (sự thật hay ý kiến).", "Chia nhánh MECE rồi nêu nhánh ưu tiên và dữ liệu cần để kiểm.", "Phân biệt nguyên nhân bạn thay đổi được với yếu tố bên ngoài."),
      GO("ps-open", "ps-type", "ps-fact", "ps-cause", "fw-5why", "fw-spin", "fw-ask", "fw-mece"),
    ],
  },
  "d-de23140a9a0d": {
    title: "Tư duy phân tích và khung giải quyết vấn đề II: mô hình kinh doanh, 7P, 5C và kể chuyện",
    lead: "Phần II chuyển từ chẩn đoán sang đánh giá và đề xuất: Business Model Canvas, 7P, 5C và cách trình bày kết luận theo nguyên tắc kim tự tháp. Khung chỉ là danh sách kiểm tra, không phải bằng chứng.",
    blocks: [
      H("1. Các khung"),
      DEF(
        ["Business Model Canvas", "Chín ô mô tả mô hình kinh doanh; mỗi ô là một giả thuyết cần kiểm chứng, điền chữ chưa phải bằng chứng."],
        ["7P", "Sản phẩm, giá, địa điểm, xúc tiến, con người, quy trình, bằng chứng hữu hình — danh sách kiểm tra cho dịch vụ."],
        ["5C", "Công ty, khách hàng, đối thủ, cộng tác viên, bối cảnh — năm phía cần nhìn trước khi chọn."],
        ["Nguyên tắc kim tự tháp", "Nói câu cần chốt trước, rồi đến lý do và bằng chứng."],
      ),
      H("2. Sai lầm hay gặp"),
      UL("Điền đầy khung mà không có dữ liệu chứng minh.", "Liệt kê mọi yếu tố thay vì ưu tiên.", "Kết luận không gắn với hành động hay thước đo."),
      GO("fw-bmc", "fw-7p", "fw-5c", "st-pyramid", "st-shape", "ps-rank", "ps-opt", "ps-do"),
    ],
  },
  "d-17cff00e9c45": {
    title: "Mở đầu bài tập Trực quan hóa nâng cao: yêu cầu và cách làm một dashboard tốt",
    lead: "Bài tập yêu cầu biến một bộ dữ liệu thực thành các biểu đồ và dashboard trả lời câu hỏi kinh doanh. Điểm đến từ việc chọn đúng biểu đồ, nối dữ liệu đúng độ chi tiết và kể được một câu chuyện chứ không phải số biểu đồ.",
    blocks: [
      H("1. Quy trình"),
      UL(
        "Viết ra 3–5 câu hỏi kinh doanh trước khi vẽ.",
        "Kiểm tra dữ liệu: mỗi dòng là gì, giá trị thiếu, nối bảng có nhân dòng không.",
        "Chọn biểu đồ cho từng câu hỏi; ghi trục, đơn vị và tiêu đề là một câu kết luận.",
        "Ghép thành dashboard: một trang cho một quyết định.",
        "Viết nhận xét: con số, ý nghĩa, đề xuất.",
      ),
      NOTE("Bài hướng dẫn kèm kết quả chạy thật cho đề Namma Yatri có ở trang riêng của bài."),
      GO("tb-why", "tb-bar", "tb-box", "tb-join", "tb-dual", "st-who", "st-insight", "st-one"),
    ],
  },
  "d-2c490f5c2f11": {
    title: "GenAI cơ bản: luyện về token, temperature, prompt và gọi API (tùy chọn)",
    lead: "Câu hỏi luyện tập củng cố nền của mô hình sinh: mô hình sinh token kế tiếp, token là đơn vị tính tiền và độ dài, temperature đổi độ đa dạng chứ không đổi sự thật, và một prompt tốt gồm việc cần làm, ngữ cảnh, dạng đầu ra.",
    blocks: [
      H("1. Bốn ý nền"),
      DEF(
        ["Sinh token kế tiếp", "Mô hình ngôn ngữ dự đoán phân phối token kế tiếp rồi lấy mẫu; nó không tra từ một cơ sở dữ liệu sự thật."],
        ["Token", "Mảnh chữ (không bằng một từ); giá API và giới hạn ngữ cảnh tính theo token."],
        ["Temperature", "Điều chỉnh độ ngẫu nhiên khi lấy mẫu: thấp thì ổn định, cao thì đa dạng; không làm câu trả lời đúng hơn."],
        ["Messages", "Mô hình chỉ thấy đoạn chữ gửi trong lần gọi này; 'trí nhớ' của chatbot là do bạn gửi lại lịch sử."],
      ),
      H("2. Cấu trúc một prompt tốt"),
      UL("Vai trò và việc cần làm.", "Ngữ cảnh/dữ liệu liên quan.", "Dạng đầu ra mong muốn (JSON, bảng, độ dài).", "Vài ví dụ (few-shot) cho dạng câu; ví dụ không chứng minh dạng đó đúng với mọi trường hợp."),
      CODE("from openai import OpenAI\nclient = OpenAI()\nr = client.chat.completions.create(\n    model=\"gpt-4o-mini\",\n    temperature=0,\n    messages=[{\"role\": \"system\", \"content\": \"Bạn là trợ lý phân tích.\"},\n              {\"role\": \"user\", \"content\": \"Tóm tắt đánh giá sau thành 3 ý: ...\"}],\n)\nprint(r.choices[0].message.content)"),
      GO("ga-next", "ga-vs", "ga-stack", "ga-use", "ga-chat", "ga-temp", "ga-tok", "ga-prompt", "ga-few", "ga-cot"),
    ],
  },
  "d-6ad31ed5bbc2": {
    title: "GenAI: bài chấm điểm về nền tảng mô hình sinh và kỹ thuật prompt",
    lead: "Bài chấm điểm kiểm tra bạn phân biệt học máy với GenAI, hiểu các tầng của một sản phẩm GenAI, và dùng đúng kỹ thuật prompt: ví dụ mẫu, nhắc suy luận từng bước, kiểm soát temperature.",
    blocks: [
      H("1. Phân biệt"),
      DEF(
        ["Học máy so với GenAI", "Học máy truyền thống dự đoán một cột; GenAI nối tiếp một đoạn chữ (hoặc ảnh)."],
        ["Ba tầng", "Mô hình, dữ liệu và sản phẩm là ba tầng khác nhau; lỗi có thể nằm ở bất kỳ tầng nào."],
        ["Fine-tune và RAG", "Fine-tune đổi trọng số; RAG đổi tài liệu đưa vào prompt."],
      ),
      H("2. Kỹ thuật prompt và giới hạn"),
      UL(
        "Few-shot cho thấy dạng câu nhưng không chứng minh đúng.",
        "Bảo mô hình viết từng bước (chain-of-thought) không phải là một chứng minh.",
        "Một use case là một công việc kèm cái giá khi chữ sai — chọn mức kiểm duyệt tương ứng.",
      ),
      GO("ga-vs", "ga-stack", "ga-use", "ga-prompt", "ga-few", "ga-cot", "ga-temp", "sa-tune"),
    ],
  },
  "d-76b08971b8b5": {
    title: "Chatbot ShopAssist: luyện về ReAct, gọi công cụ và chấm hội thoại",
    lead: "Xây chatbot có thể trả lời đúng giá và tồn kho cần quy trình suy nghĩ – gọi công cụ – nhìn kết quả (ReAct) thay vì bịa. Bài luyện kiểm tra bạn thiết kế đúng chặng và chấm được từng ca.",
    blocks: [
      H("1. Kiến trúc ba chặng"),
      DEF(
        ["Trò chuyện dựa trên prompt", "Mô hình hỏi làm rõ nhu cầu."],
        ["Gọi catalog", "Giá và tồn kho đến từ catalog (công cụ), không đến từ câu trả lời của mô hình."],
        ["Chấm các ca", "Một bộ ca đã viết sẵn với kết quả mong đợi; vài lần trả lời giống nhau không phải là sự thật."],
      ),
      H("2. Vòng ReAct"),
      UL("Suy nghĩ: cần thông tin gì?", "Hành động: gọi một công cụ với tham số cụ thể.", "Quan sát: đọc kết quả thật; không bịa kết quả công cụ.", "Lặp lại hoặc trả lời."),
      GO("sa-react", "sa-stage", "sa-tool", "sa-score", "sa-tune", "ga-chat"),
    ],
  },
  "d-767bfd8d068e": {
    title: "Chatbot ShopAssist: bài chấm điểm về thiết kế hệ thống và đánh giá",
    lead: "Bài chấm điểm kiểm tra thiết kế hệ thống chatbot: tách tầng, gọi công cụ đúng chỗ, và đánh giá bằng bộ ca có đáp án chứ không bằng cảm giác.",
    blocks: [
      H("1. Điểm cần nắm"),
      UL(
        "Tách logic nghiệp vụ (catalog, tính giá) khỏi lời văn của mô hình.",
        "Template là khuôn có chỗ trống; chỗ trống đừng để mô hình tự điền.",
        "Parser đòi một dạng đầu ra; mô hình không nghe lời thì parser báo lỗi — cần xử lý lỗi.",
        "Chain là đường vẽ sẵn, agent tự chọn bước sau; cả hai đều cần được chấm.",
      ),
      H("2. Đánh giá"),
      P("Một bộ ca đánh giá gồm đầu vào, hành vi mong đợi và tiêu chí đạt/không đạt. Chạy lại bộ ca mỗi lần đổi prompt hoặc mô hình để biết đổi có cải thiện thật hay chỉ làm hỏng chỗ khác."),
      GO("sa-react", "sa-stage", "sa-tool", "sa-score", "lc-tpl", "lc-parse", "lc-agent"),
    ],
  },
  "d-f6099b6ccf4d": {
    title: "RAG với LlamaIndex: bài chấm điểm về embedding, cắt đoạn, chỉ mục và truy hồi",
    lead: "RAG (Retrieval-Augmented Generation) cho mô hình đọc tài liệu của bạn bằng cách tìm đoạn liên quan rồi đưa vào prompt. Bài chấm kiểm tra bạn hiểu từng mắt xích và biết mỗi mắt xích có thể sai ở đâu.",
    blocks: [
      H("1. Pipeline RAG"),
      DEF(
        ["Cắt đoạn (chunking)", "Cắt tài liệu thành đoạn; cắt đoạn là cắt nghĩa nên một điều khoản bị xẻ đôi thì mất ý."],
        ["Embedding", "Biến mỗi đoạn thành véctơ; gần nhau trong không gian embedding là gần nghĩa, không phải trùng từ khóa và cũng không phải 'đúng'."],
        ["Chỉ mục và kho vector", "Lưu véctơ để tìm láng giềng gần nhất; đổi file mà không xây lại chỉ mục thì lần tìm sẽ thấy bản cũ."],
        ["Truy hồi và re-rank", "Lấy top-k đoạn; re-rank đọc lại danh sách để sắp xếp tốt hơn, không phải một nguồn mới."],
        ["Sinh câu trả lời", "Đưa đoạn tìm được vào prompt; mô hình trả lời dựa trên đó."],
      ),
      H("2. Lỗi hay gặp"),
      UL("Đoạn gần nhất không phải đoạn đúng.", "Một buổi demo tìm được đoạn chưa phải là một đánh giá.", "Kho (collection) khác nhau không tự được tìm."),
      GO("rag-why", "rag-emb", "rag-chunk", "rag-vec", "rag-idx", "rag-rank", "rag-near", "rag-store", "rag-demo"),
    ],
  },
  "d-c1ec1e8ce0c3": {
    title: "Đồ án RAG trên tài liệu pháp lý: đề bài, quy trình và tiêu chí đánh giá",
    lead: "Đồ án yêu cầu dựng hệ thống RAG trả lời câu hỏi từ tập tài liệu pháp lý được giao, không trả lời từ trí nhớ của mô hình. Văn bản pháp lý khó vì mỗi điều khoản dài, tham chiếu chéo, và sai một chữ có thể đổi nghĩa.",
    blocks: [
      H("1. Quy trình khuyến nghị"),
      UL(
        "Đọc tài liệu và xác định đơn vị tự nhiên (điều, khoản) để cắt đoạn giữ trọn nghĩa.",
        "Chọn mô hình embedding, xây chỉ mục, thử vài giá trị top-k.",
        "Viết prompt buộc mô hình chỉ trả lời từ đoạn được cung cấp và nói 'không tìm thấy' khi thiếu.",
        "Kèm trích dẫn nguồn (đoạn nào, điều nào) trong câu trả lời.",
        "Xây bộ ca đánh giá: câu hỏi, đáp án mong đợi, đoạn nguồn đúng; đo tỷ lệ truy hồi đúng và chất lượng câu trả lời.",
      ),
      H("2. Rủi ro"),
      UL("Đoạn bị cắt đôi làm mất điều kiện hoặc ngoại lệ.", "Mô hình trộn kiến thức chung với tài liệu.", "Không có đánh giá thì không biết thay đổi tốt hơn hay tệ hơn."),
      NOTE("Đề đồ án sẽ mở theo lịch của upGrad; khi có đề, bài hướng dẫn kèm kết quả chạy thật sẽ được thêm."),
      GO("rag-job", "rag-why", "rag-chunk", "rag-emb", "rag-vec", "rag-rank", "rag-near", "rag-demo", "lc-tpl", "lc-parse"),
    ],
  },
};
