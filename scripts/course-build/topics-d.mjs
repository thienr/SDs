import { T } from "./topics.mjs";

const illus = (claim) => ({ claim, source: "ví dụ minh họa, không phải số liệu ngành" });

export const topicsD = [
  T({
    id: "math-vec",
    scope: /math for data|vector|matrix|eigen|calculus|derivative/i,
    keys: [/vector/i, /dot product/i, /matrix|matrices/i, /linear transformation/i, /determinant/i, /linear equation/i, /least squares/i, /eigen/i, /derivative|differentiation/i, /partial/i, /jacobian/i, /hessian/i, /critical point/i, /taylor/i, /gradient/i, /multivariable/i, /functions primer/i],
    title: "Véctơ, ma trận và đạo hàm",
    sim: "slope",
    formula: "a\\cdot b = \\|a\\|\\|b\\|\\cos\\theta \\qquad f'(x)\\approx \\dfrac{f(x+h)-f(x)}{h}",
    situation:
      "Hai chiến dịch được mô tả bằng các chỉ số cùng chiều: CTR, CPM, tỷ lệ xem hết video. Hỏi chúng có đi cùng hướng hay không là hỏi một góc, không hỏi từng chỉ số riêng.",
    problem:
      "So từng chỉ số bằng mắt thì mỗi chỉ số một kết luận. Không có một số nào nói mức cùng hướng. Với hàm chi phí, không có đạo hàm thì không biết vặn tham số chiều nào.",
    why:
      "Tích vô hướng đo độ cùng hướng của hai véctơ. Ma trận là một cách biến một véctơ thành véctơ khác. Đạo hàm là tốc độ đổi tại một điểm, chính là thứ gradient descent đang bước theo.",
    plain:
      "Đạo hàm tại một điểm là độ dốc của tiếp tuyến. Tích vô hướng lớn và dương nghĩa là hai véctơ cùng hướng.",
    precise:
      "Nhân ma trận với véctơ là một biến đổi tuyến tính. Định thức khác 0 thì biến đổi đó nghịch đảo được. Trị riêng và véctơ riêng là hướng mà biến đổi chỉ phóng to hoặc thu nhỏ. Bình phương tối thiểu tìm véctơ hệ số để độ dài phần dư nhỏ nhất, cùng họ với hồi quy tuyến tính. Đạo hàm riêng là độ dốc khi chỉ một biến đổi. Jacobian gom các đạo hàm riêng bậc nhất. Hessian gom đạo hàm bậc hai, nói độ cong.",
    steps: [
      { label: "Hai véctơ", math: "a=(2, 1),\\ b=(1, 2)", say: "Ví dụ minh họa, hai chỉ số đã cùng thang." },
      { label: "Tích", math: "2\\times1+1\\times2=4", say: "Cùng hướng. Nếu b=(1, −2) thì tích bằng 0, vuông góc." },
      { label: "Dốc", math: "f(x)=x^2,\\ f'(x)=2x", say: "Tại x=3, dốc bằng 6. Kéo điểm trong hình để thấy tiếp tuyến." },
    ],
    insight: "Độ dốc là tốc độ đổi tại đúng chỗ đang đứng, không phải độ thay đổi của cả quãng đường.",
    sources: [
      { claim: "Tích vô hướng bằng tích độ dài và cos của góc giữa hai véctơ.", source: "Wikipedia, Dot product", url: "https://en.wikipedia.org/wiki/Dot_product" },
      { claim: "Đạo hàm là giới hạn của tỷ số thay đổi, hình học là độ dốc tiếp tuyến.", source: "Wikipedia, Derivative", url: "https://en.wikipedia.org/wiki/Derivative" },
      illus("Véctơ (2, 1) và (1, 2) là ví dụ minh họa."),
    ],
    glossary: [
      { term: "Derivative", en: "derivative", def: "Độ dốc tức thời của một hàm tại một điểm." },
    ],
  }),

  T({
    id: "story",
    keys: [/storytelling/i, /narrative/i, /pyramid/i, /insight/i, /visual design/i, /good story/i, /storyboard/i],
    title: "Kể chuyện bằng dữ liệu",
    sim: "story",
    situation:
      "Báo cáo 28 trang về CPA. Người duyệt có 6 phút trước cuộc họp khách. Trang 14 mới có câu «Meta đang rẻ hơn GDN 18% trên cùng nhóm sản phẩm». Ví dụ minh họa.",
    problem:
      "Mở bằng nguồn dữ liệu và định nghĩa cột thì hết giờ trước câu kết luận. Người nghe tự bịa một câu kết từ một biểu đồ chưa có tiêu đề.",
    why:
      "Kể chuyện bằng dữ liệu tồn tại để thứ tự đưa thông tin đi từ kết luận xuống bằng chứng, không phải từ quy trình làm việc của người phân tích.",
    plain:
      "Một báo cáo có một câu kết luận, một xung đột so với kỳ vọng, và bằng chứng vừa đủ. Tiêu đề biểu đồ nói câu kết, không nói tên loại chart.",
    precise:
      "Pyramid principle đặt câu trả lời trước, rồi các luận điểm cùng cấp, rồi bằng chứng. Ba nhịp thường dùng: bối cảnh, xung đột, hướng xử lý. Một slide một thông điệp. Trục và đơn vị phải đọc được khi không có người thuyết minh đứng cạnh.",
    pipeline: [
      { n: "1", title: "Bối cảnh", body: "Ngân sách quý giữ nguyên. Ví dụ minh họa." },
      { n: "2", title: "Xung đột", body: "CPA Meta 54 nghìn, GDN 66 nghìn, cùng nhóm sản phẩm, cùng 4 tuần." },
      { n: "3", title: "Hướng", body: "Dịch 15% ngân sách GDN của nhóm này sang Meta trong hai tuần, rồi đo lại CPA và số form." },
    ],
    pitfalls: [
      { left: "Tiêu đề mô tả", right: "Tiêu đề kết luận", note: "«CPA theo kênh» không nói gì. «Meta rẻ hơn GDN 18% trên nhóm A» nói một việc." },
    ],
    insight: "Nếu rút tiêu đề các slide mà không thành một đoạn văn, bộ slide chưa có câu chuyện.",
    sources: [
      { claim: "Nguyên tắc kim tự tháp đặt kết luận trước các luận điểm đỡ bên dưới, theo cách Barbara Minto phổ biến trong tư vấn.", source: "Wikipedia, Pyramid principle", url: "https://en.wikipedia.org/wiki/Pyramid_principle" },
      illus("CPA 54 và 66 nghìn là ví dụ minh họa."),
    ],
  }),

  T({
    id: "frameworks",
    keys: [/issue tree/i, /business model canvas/i, /7ps|7p/i, /5c framework/i, /5 whys|5w/i, /spin/i, /interviewing/i, /business problem/i],
    title: "Khung vấn đề kinh doanh",
    situation:
      "Doanh thu nhà hàng trong mall giảm 9% cùng kỳ, ví dụ minh họa. Cuộc họp đầu tiên có mười giả thuyết nói cùng lúc: giá, thời tiết, đối thủ, bãi xe, quảng cáo.",
    problem:
      "Làm mười hướng một lúc thì không hướng nào đủ dữ liệu. Một cây vấn đề không MECE sẽ đếm thời tiết hai lần dưới hai cái tên.",
    why:
      "Issue tree, 5 Whys, Business Model Canvas, 5C và 7P tồn tại để trải các giả thuyết ra giấy trước khi chi tiền đo.",
    plain:
      "Khung là cách trải câu hỏi, không phải kết luận. Nó giúp thấy chỗ chưa có số.",
    precise:
      "Issue tree chia một câu hỏi thành các nhánh con cho đến khi một nhánh đo được. 5 Whys đi sâu một chuỗi nhân quả, hợp khi sự cố đã rõ, không hợp khi còn nhiều nhánh ngang hàng. Business Model Canvas nhìn khách, kênh, dòng tiền trên một trang. 5C thường là company, customers, competitors, collaborators, climate. 7P thêm people, process, physical evidence vào marketing mix.",
    insight: "Khung xong thì mỗi nhánh lá phải là một số lấy được trong tuần này, hoặc một nhánh xếp lại vì không đo.",
    sources: [
      { claim: "Business Model Canvas là bản một trang mô tả cách một tổ chức tạo và thu giá trị.", source: "Wikipedia, Business Model Canvas", url: "https://en.wikipedia.org/wiki/Business_Model_Canvas" },
      illus("Mức giảm 9% là ví dụ minh họa."),
    ],
    recall: ["frame"],
  }),

  T({
    id: "bi-tools",
    scope: /tableau|power bi|powerbi|advanced excel|visualisation|visualization/i,
    keys: [/tableau/i, /power bi/i, /dashboard/i, /dax/i, /data model/i, /calculated/i, /bookmark/i, /row level/i, /filter action/i, /publishing/i, /macro/i, /what-if/i, /conditional formatting/i],
    avoid: /storytelling|pyramid/i,
    title: "Dashboard: một màn hình, một quyết định",
    sim: "pivot",
    situation:
      "Khách mở điện thoại trên taxi và cần biết hôm nay có đang vượt CPA mục tiêu hay không. File 12 sheet không sống nổi trong quãng đường đó.",
    problem:
      "Nhét mọi cắt vào một màn hình thì mỗi bộ lọc là một câu hỏi khác. Người xem sẽ thấy một số tình cờ đẹp và mang đi.",
    why:
      "Tableau, Power BI và Excel nâng cao tồn tại để nối dữ liệu, tạo trường tính, và lọc mà không sửa nguồn. Chúng không thay câu hỏi.",
    plain:
      "Một dashboard phục vụ một quyết định lặp lại. Mọi bộ lọc phải là một chiều của đúng quyết định đó.",
    precise:
      "Dimension là chiều để cắt. Measure là số để gộp. Calculated field là một cột tính trong công cụ BI. Trong Power BI, measure DAX tính theo ngữ cảnh lọc, khác calculated column tính theo từng hàng và lưu sẵn. Row-level security lọc hàng theo người xem. What-if đổi một giả định, ví dụ đơn giá, và xem chỉ tiêu chạy theo.",
    pitfalls: [
      { left: "Calculated column", right: "Measure", note: "Cột tính xong lưu từng hàng. Measure tính lại theo filter trên hình. CPA nên là measure, vì mẫu số đổi khi người dùng lọc kênh." },
    ],
    insight: "Nếu không đọc được quyết định trong mười giây, màn hình đang là kho lọc chứ chưa phải dashboard.",
    sources: [
      { claim: "Power BI dùng mô hình dữ liệu và DAX cho measure tính theo ngữ cảnh bộ lọc.", source: "Microsoft Learn, Power BI overview", url: "https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-overview" },
      illus("Cảnh xem chỉ tiêu trên taxi là ví dụ minh họa."),
    ],
    glossary: [
      { term: "Measure", en: "measure", def: "Phép gộp tính tại lúc xem, theo các bộ lọc đang bật." },
    ],
  }),

  T({
    id: "or",
    keys: [/operations research/i, /optimisation|optimization/i, /knapsack/i, /constraint/i, /sensitivity/i, /objective function/i, /decision variable/i, /solver/i, /airline/i, /history of or/i, /stages of or/i, /applications of or/i, /limitations of or/i, /introduction to or/i],
    title: "Tối ưu có ràng buộc",
    sim: "or",
    formula: "\\max c^\\top x \\quad \\text{với} \\quad Ax \\le b,\\ x \\ge 0",
    situation:
      "Ngân sách ads 200 triệu cho ba kênh. Mỗi kênh có một CPA kỳ vọng khác nhau và một trần chi do đội vận hành đặt. Ví dụ minh họa: không được đổ hơn 60% vào một kênh.",
    problem:
      "Chọn kênh rẻ nhất và đổ hết tiền thì vi phạm trần, và bỏ qua ràng buộc tần suất. Cảm giác «kênh rẻ» không cộng các ràng buộc cùng lúc.",
    why:
      "Bài toán tối ưu tồn tại khi có một mục tiêu số và nhiều ràng buộc cùng đúng. Solver tìm một điểm trong vùng khả thi cho mục tiêu tốt nhất. Sensitivity nói mục tiêu đổi thế nào nếu nới một ràng buộc.",
    plain:
      "Biến quyết định là thứ bạn được vặn. Hàm mục tiêu là thứ cần lớn hoặc nhỏ. Ràng buộc là các bức tường. Miền khả thi là nơi mọi bức tường cùng thỏa.",
    precise:
      "Với mục tiêu và ràng buộc tuyến tính, đây là quy hoạch tuyến tính. Điểm tối ưu của bài tuyến tính nằm ở biên. Shadow price, hay giá bóng, là mức mục tiêu cải thiện khi nới một ràng buộc thêm một đơn vị, trong một phạm vi. Ngoài phạm vi đó thì cấu trúc điểm tối ưu đổi, giá bóng không còn nguyên.",
    pipeline: [
      { n: "1", title: "Biến", body: "x1, x2, x3 là tiền triệu cho ba kênh." },
      { n: "2", title: "Mục tiêu", body: "Tối đa số form kỳ vọng = tổng xi / CPAi. Ví dụ minh họa." },
      { n: "3", title: "Tường", body: "Tổng xi ≤ 200. Mỗi xi ≤ 120. xi ≥ 0." },
      { n: "4", title: "Nới", body: "Hỏi thêm 10 triệu ngân sách thì thêm bao nhiêu form. Đó là sensitivity, chỉ đúng trong đoạn Solver báo." },
    ],
    insight: "Nếu không viết được ràng buộc, bạn chưa có bài tối ưu. Bạn chỉ có một sở thích.",
    sources: [
      { claim: "Quy hoạch tuyến tính tối ưu một hàm tuyến tính trên một miền ràng buộc tuyến tính.", source: "Wikipedia, Linear programming", url: "https://en.wikipedia.org/wiki/Linear_programming" },
      illus("Ngân sách 200 triệu và trần 60% là ví dụ minh họa."),
    ],
    glossary: [
      { term: "Feasible region", en: "feasible region", def: "Tập các phương án thỏa mọi ràng buộc." },
    ],
  }),

  T({
    id: "genai",
    keys: [/generative ai|genai|gen ai/i, /openai/i, /prompt/i, /chat completion/i, /temperature|top-p|top p/i, /chain-of-thought|few-shot|zero-shot/i, /token/i, /api usage/i],
    avoid: /rag|retrieval|langchain|diffusion|stable diffusion|shopassist|llama/i,
    title: "Mô hình sinh và prompt",
    sim: "temperature",
    situation:
      "Bạn nhờ mô hình viết năm dòng mô tả một suất ăn tối tại nhà hàng trong mall, giọng ngắn, không ký tự đặc biệt. Lần một ra văn ổn. Lần hai, cùng prompt, ra một thực đơn không có trong nhà hàng.",
    problem:
      "Coi đầu ra như tra cứu cơ sở dữ liệu thì sẽ đưa một món không tồn tại vào bài đăng. Temperature cao làm đuôi phân phối từ dày hơn, chữ lạ xuất hiện nhiều hơn.",
    why:
      "Mô hình ngôn ngữ lớn sinh từ tiếp theo theo một phân phối. Temperature và top-p tồn tại để chỉnh độ phẳng của phân phối đó. Prompt tồn tại vì bạn không sửa trọng số, bạn sửa ngữ cảnh.",
    plain:
      "Mô hình không nhớ thực đơn của bạn trừ khi thực đơn nằm trong prompt hoặc trong kho truy xuất. Nó tiếp tục một chuỗi cho hợp lý.",
    precise:
      "Token là mảnh chữ mà mô hình đọc và sinh, không phải lúc nào cũng bằng một từ. Temperature thấp làm phân phối nhọn, đầu ra ổn định hơn. Temperature cao làm các phương án kém xác suất hơn cũng được chọn. Top-p chỉ lấy một tập từ mà tổng xác suất đạt ngưỡng. Zero-shot là không cho ví dụ. Few-shot là cho vài cặp mẫu. Chain-of-thought là yêu cầu các bước trung gian hiện ra trước câu trả lời. Chi phí API thường tính theo token vào và token ra.",
    pitfalls: [
      { left: "Temperature", right: "Độ đúng", note: "Hạ temperature giảm độ ngẫu nhiên, không biến mô hình thành nguồn sự thật." },
      { left: "Few-shot", right: "Một câu ra lệnh", note: "Vài ví dụ đúng giọng thường kéo đầu ra hơn một tính từ khen hay chê." },
    ],
    insight: "Prompt là phần việc bạn kiểm soát được. Sự thật về nhà hàng phải do bạn đưa vào, không nằm sẵn trong temperature.",
    sources: [
      { claim: "Temperature và top-p là tham số lấy mẫu của mô hình sinh, mô tả trong tài liệu API của OpenAI.", source: "OpenAI, Text generation guide", url: "https://platform.openai.com/docs/guides/text-generation" },
      illus("Suất ăn trong mall là ví dụ minh họa, không phải một nhà hàng cụ thể."),
    ],
    glossary: [
      { term: "Token", en: "token", def: "Đơn vị chữ mà mô hình đọc và sinh. Không luôn trùng một từ." },
      { term: "Temperature", en: "temperature", def: "Tham số làm phân phối từ tiếp theo nhọn hơn hoặc phẳng hơn." },
    ],
  }),

  T({
    id: "rag",
    keys: [/retrieval augmented|\brag\b/i, /embedding/i, /vector store|chroma/i, /semantic search/i, /llamaindex|llama index/i, /chunk/i, /document ingestion/i, /re-ranking|rerank/i],
    title: "RAG: trả lời dựa trên tài liệu được truy xuất",
    sim: "rag",
    situation:
      "Khách hỏi chatbot của spa: «gói 90 phút có gồm đá nóng không». Câu này có trong PDF bảng giá nội bộ, không có trên internet công khai. Ví dụ minh họa.",
    problem:
      "Hỏi thẳng mô hình thì nó trả lời trôi chảy một gói không tồn tại. Đưa cả PDF 80 trang vào prompt thì tốn token và mô hình vẫn có thể bám nhầm trang.",
    why:
      "RAG (Retrieval Augmented Generation) tồn tại để câu trả lời bám vào vài đoạn được tìm ra từ kho của bạn, thay vì chỉ bám vào trọng số đã học.",
    plain:
      "Cắt tài liệu thành đoạn, đổi mỗi đoạn thành một véctơ, khi có câu hỏi thì tìm đoạn gần câu hỏi nhất, rồi mới nhờ mô hình viết câu trả lời từ các đoạn đó.",
    precise:
      "Embedding là một véctơ số đại diện cho nghĩa của một đoạn, để «gần» nghĩa là gần về hướng véctơ chứ không phải trùng từ khóa. Vector store lưu các véctơ đó. Chunk quá dài thì lẫn nhiều chủ đề trong một véctơ. Chunk quá ngắn thì mất điều kiện áp dụng. Re-ranking sắp lại các đoạn ứng viên bằng một mô hình chính xác hơn bước tìm thô. LlamaIndex là một thư viện để nối các bước này.",
    pipeline: [
      { n: "1", title: "Cắt", body: "PDF bảng giá thành các đoạn theo gói, không cắt giữa một bảng." },
      { n: "2", title: "Embedding", body: "Mỗi đoạn một điểm trong không gian. Câu hỏi cũng thành một điểm." },
      { n: "3", title: "Tìm", body: "Lấy vài đoạn gần câu hỏi nhất." },
      { n: "4", title: "Viết", body: "Mô hình chỉ được dùng các đoạn đó. Không thấy đoạn thì nói không thấy, không bịa gói." },
    ],
    insight: "RAG không làm mô hình biết thêm. Nó giới hạn mô hình vào những đoạn bạn vừa tìm thấy.",
    sources: [
      { claim: "RAG kết hợp truy xuất tài liệu với mô hình sinh, theo bài Lewis và cộng sự, 2020.", source: "arXiv, Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", url: "https://arxiv.org/abs/2005.11401" },
      illus("Gói 90 phút là ví dụ minh họa."),
    ],
    glossary: [
      { term: "RAG", en: "retrieval-augmented generation", def: "Sinh câu trả lời có kèm các đoạn tài liệu được truy xuất." },
      { term: "Embedding", en: "embedding", def: "Véctơ số đại diện cho một đoạn chữ để đo độ gần nghĩa." },
    ],
  }),

  T({
    id: "shop",
    keys: [/shopassist/i, /llm-based system|llm system/i, /self-consistency/i, /react/i, /fine-tuning|fine tuning/i, /designing safe/i, /chatbot/i],
    title: "Thiết kế chatbot theo từng tầng",
    situation:
      "Một trợ lý đặt bàn cho nhà hàng cần hiểu «tối mai, 4 người, không cay». Nó không được tự bịa giờ còn trống nếu hệ đặt bàn chưa trả lời.",
    problem:
      "Nhồi mọi quy tắc vào một prompt khổng lồ thì hết chỗ, khó sửa, và một câu đùa của khách có thể kéo mô hình ra khỏi quy trình.",
    why:
      "Thiết kế hệ thống LLM chia việc: hiểu ý, gọi công cụ, kiểm tra, rồi mới viết câu. Self-consistency và ReAct là các cách làm bước trung gian rõ hơn một lần sinh duy nhất.",
    plain:
      "Chatbot vận hành là một quy trình có cổng, không phải một hộp thoại vô hạn.",
    precise:
      "Một cách chia: tầng hiểu yêu cầu, tầng gọi dữ liệu hoặc API, tầng viết câu có kiểm. ReAct xen kẽ một câu lý do với một hành động công cụ. Self-consistency sinh vài đường đi rồi lấy phương án lặp lại. Fine-tuning sửa trọng số khi giọng hoặc định dạng lặp rất nhiều và prompt không đủ. An toàn gồm giới hạn công cụ, không để mô hình tự xác nhận tồn kho, và một câu từ chối khi thiếu dữ liệu.",
    pipeline: [
      { n: "1", title: "Hiểu", body: "Ngày, số khách, ràng buộc món. Thiếu thì hỏi một câu, không đoán." },
      { n: "2", title: "Gọi", body: "API bàn trống trả về giờ. Mô hình không bịa giờ." },
      { n: "3", title: "Viết", body: "Câu xác nhận ngắn, kèm đúng giờ API trả về." },
    ],
    insight: "Chỗ mô hình được phép nói là chỗ công cụ đã trả dữ liệu. Chỗ còn lại thì hỏi lại hoặc từ chối.",
    sources: [
      illus("Đặt bàn 4 người là ví dụ minh họa, không phải một hệ thống đang chạy."),
      { claim: "ReAct xen kẽ suy luận và hành động gọi công cụ khi làm việc với mô hình ngôn ngữ.", source: "arXiv, ReAct: Synergizing Reasoning and Acting in Language Models", url: "https://arxiv.org/abs/2210.03629" },
    ],
  }),

  T({
    id: "imagegen",
    keys: [/image generation/i, /variational autoencoder|\bvae\b/i, /generative adversarial|\bgan\b/i, /diffusion/i, /stable diffusion/i, /pixxel/i, /conditioned on text/i],
    title: "Sinh ảnh: VAE, GAN và diffusion",
    situation:
      "Bạn cần một ảnh khái niệm cho poster suất ăn mới, chưa có buổi chụp. Prompt mô tả đĩa, ánh sáng, và tỉ lệ khung. Ví dụ minh họa.",
    problem:
      "Coi ảnh sinh như ảnh chụp món thật thì đăng nhầm một đĩa không có trong bếp. Coi prompt như một nút chính xác tuyệt đối thì các lần chạy sẽ khác nhau mà bạn không biết vì sao.",
    why:
      "VAE, GAN và diffusion là ba họ mô hình học cách tạo dữ liệu mới giống phân phối đã thấy. Diffusion đang là cách phổ biến cho ảnh điều khiển bằng chữ: thêm nhiễu rồi học khử nhiễu.",
    plain:
      "Diffusion học đi ngược từ ảnh nhiễu về ảnh rõ, có chữ hướng dẫn ở bên. Nó không tra một kho ảnh món của nhà hàng bạn.",
    precise:
      "VAE nén một ảnh vào một phân phối ẩn rồi giải nén, có một ràng buộc để không gian ẩn trơn. GAN có một mạng sinh và một mạng phân biệt chơi với nhau. Diffusion phá ảnh bằng nhiễu qua nhiều bước, rồi huấn luyện mô hình dự đoán nhiễu để trừ dần. Điều kiện hóa bằng chữ đưa embedding của prompt vào các bước khử nhiễu.",
    insight: "Ảnh sinh là một bản phác thảo có kiểm duyệt của người, không phải bằng chứng món ăn tồn tại.",
    sources: [
      { claim: "Mô hình diffusion sinh dữ liệu bằng cách học đảo ngược một quá trình thêm nhiễu.", source: "Wikipedia, Diffusion model", url: "https://en.wikipedia.org/wiki/Diffusion_model" },
      { claim: "GAN gồm mạng sinh và mạng phân biệt được huấn luyện cùng nhau.", source: "Wikipedia, Generative adversarial network", url: "https://en.wikipedia.org/wiki/Generative_adversarial_network" },
      illus("Poster suất ăn là ví dụ minh họa."),
    ],
  }),

  T({
    id: "langchain",
    keys: [/langchain/i, /prompt template/i, /output parsing/i, /\bagents\b/i, /\bchains\b/i, /model i\/o|model io/i],
    scope: /langchain/i,
    title: "LangChain: chuỗi, mẫu prompt, agent",
    situation:
      "Cùng một trợ lý cần làm ba việc lặp: lấy đoạn tài liệu, nhét vào một mẫu câu, rồi ép đầu ra thành JSON có đúng ba khóa để đưa vào CRM. Ví dụ minh họa.",
    problem:
      "Viết lại toàn bộ prompt trong code mỗi lần đổi giọng thì dễ lệch một dấu ngoặc, và đầu ra văn xuôi không đổ được vào một cột CRM.",
    why:
      "Một framework như LangChain tách mẫu prompt, bước gọi mô hình, và bước parse đầu ra thành các khúc nối được. Agent là khúc được phép chọn công cụ.",
    plain:
      "Chain là các bước nối sẵn. Agent là một vòng được chọn công cụ theo tình huống. Prompt template là mẫu có chỗ trống.",
    precise:
      "Template giữ phần chữ cố định và các biến. Output parser kiểm tra đầu ra có đúng dạng đã hẹn hay không. Làm việc với tài liệu là bước cắt và truy xuất, có thể đứng trước prompt. Agent khác chain ở chỗ bước tiếp theo không bị đóng cứng hoàn toàn.",
    insight: "Nếu đầu ra phải vào một hệ khác, hãy ép định dạng ngay tại bước parse, đừng hy vọng một đoạn văn luôn đủ trường.",
    sources: [
      { claim: "LangChain mô tả các thành phần prompt, model, và chuỗi xử lý trong tài liệu của dự án.", source: "LangChain docs, Introduction", url: "https://python.langchain.com/docs/introduction/" },
      illus("Ba khóa JSON cho CRM là ví dụ minh họa."),
    ],
  }),

  T({
    id: "git",
    keys: [/version control/i, /\bgit\b/i, /github/i, /branch/i, /commit/i, /revert|resetting/i, /open source/i, /portfolio website/i],
    title: "Git: lịch sử các lần sửa",
    situation:
      "Hai người sửa cùng một notebook dự báo CPA. Sáng thứ hai file trên máy bạn đè file trên máy đồng nghiệp. Cột đang dùng cho khách biến mất.",
    problem:
      "Đổi tên file thành final_v7 không nói được dòng nào đổi, và không quay lại đúng một lần sửa.",
    why:
      "Git tồn tại để mỗi lần sửa là một commit có tên, nhánh để thử mà chưa đụng bản đang dùng, và lịch sử để hoàn tác đúng một thay đổi.",
    plain:
      "Commit là một mốc. Branch là một dòng lịch sử song song. Git là công cụ trên máy. GitHub là nơi đẩy các mốc đó lên mạng để người khác lấy.",
    precise:
      "Ba vùng hay nhắc: thư mục làm việc, staging, và lịch sử commit. add chọn những gì sẽ vào mốc. commit đóng mốc. Branch tạo điểm rẽ. Merge hợp lại. Reset di chuyển con trỏ nhánh, dễ mất cam kết nếu dùng nhầm dạng cứng. Revert tạo một mốc mới đảo một mốc cũ, an toàn hơn khi mốc đã chia sẻ.",
    pitfalls: [
      { left: "Git", right: "GitHub", note: "Git chạy được không cần GitHub. GitHub là một chỗ chứa remote, thêm giao diện và quyền truy cập." },
      { left: "reset cứng", right: "revert", note: "Reset cứng viết lại chỗ đang đứng. Revert thêm một mốc đảo ngược. Trên nhánh đã đẩy cho người khác, revert ít phá hơn." },
    ],
    insight: "Một commit nên là một ý. «Sửa nhiều thứ» không phải tên commit.",
    sources: [
      { claim: "Git là hệ quản lý phiên bản phân tán. Commit, branch và merge là các thao tác cốt lõi.", source: "Git documentation", url: "https://git-scm.com/doc" },
      illus("Hai người sửa một notebook là ví dụ minh họa."),
    ],
  }),

  T({
    id: "orient",
    scope: /welcome|succeeding|program evaluation|starting the journey|industry immersion|prism|kickstart|learner outcome|specialization track|specialisation|introduction to the program|introduction to tracks|faq/i,
    keys: [/kickstart/i, /learning experience/i, /program evaluation/i, /before you begin/i, /document requirements/i, /prism/i, /introduction to the program/i, /succeeding in the program/i, /welcome/i, /community/i, /academic integrity|originality/i, /syllabus/i, /business intelligence/i, /business analysis/i, /data engineering/i, /deep learning/i, /grading/i, /learner/i, /industry/i, /accountability/i, /statement of purpose/i, /track/i, /faq/i, /immersion/i],
    title: "Cách học một khái niệm cho tới khi dùng được",
    situation:
      "Một buổi tối có khoảng 25 phút giữa hai việc ở agency. Mở một danh sách video dài thì hết giờ ở phần giới thiệu, chưa chạm định nghĩa.",
    problem:
      "Xem hết một video rồi đánh dấu đã học. Ngày sau không nói lại được công thức, cũng không chỉ được số nào là ví dụ và số nào là định nghĩa.",
    why:
      "Khái niệm phân tích chỉ đứng được khi bạn tách được định nghĩa, giả định, và một phép tính trên số nhỏ. Không có ba thứ đó thì tên kỹ thuật chỉ là nhãn.",
    plain:
      "Một buổi xong khi nói lại được định nghĩa bằng lời thường, viết được công thức, và tính được một ví dụ nhỏ bằng tay.",
    precise:
      "Thứ tự đáng giữ: bài toán quyết định, khái niệm trả lời bài toán đó, giả định khiến khái niệm hợp lệ, rồi một con số tính được. Business intelligence lặp một chỉ số đã chốt. Business analytics thêm kiểm định hoặc mô hình để chọn một hành động. Data engineering làm đường dữ liệu tới được chỗ phân tích. Ba việc khác nhau. Track phân tích kinh doanh nghiêng về quyết định và cách diễn giải, không phải xây cụm máy.",
    insight: "Buổi học xong khi nói lại được một định nghĩa và một phép tính. Không xong khi thanh video chạy hết.",
    sources: [
      illus("Nhịp 25 phút là cách chia buổi, không phải số liệu."),
      { claim: "Business intelligence thiên về báo cáo lặp. Analytics thêm mô hình hoặc kiểm định để chọn hành động.", source: "Wikipedia, Business analytics", url: "https://en.wikipedia.org/wiki/Business_analytics" },
    ],
  }),

  T({
    id: "assign",
    keys: [/assignment/i, /nyc taxi/i, /pmfby|farmers/i, /delivery time/i, /employee retention/i, /fraudulent/i, /namma yatri/i, /legal document/i, /case study/i, /business objective/i, /final submission/i, /capstone/i],
    title: "Đọc một bài lớn như một quyết định",
    situation:
      "Một tệp dữ liệu mở ra hàng chục cột. Nếu chưa viết câu quyết định, mọi biểu đồ đều có vẻ hợp lệ.",
    problem:
      "Chạy lần lượt mọi mô hình rồi chọn số đẹp nhất. Bài lớn loại này thưởng lập luận: dữ liệu nào được dùng, giả định nào, và hành động nào đổi nếu kết quả đổi.",
    why:
      "Một case tồn tại để đi hết vòng từ câu hỏi tới khuyến nghị, không phải để thuộc một notebook mẫu.",
    plain:
      "Viết một câu: ai quyết định, quyết định gì, số nào sẽ làm câu đó đổi.",
    precise:
      "Dữ liệu chuyến taxi công khai của New York là một case EDA điển hình: thời lượng, quãng đường, tiền cước, và các chuyến lệch. Câu quyết định có thể là ca nào cần thêm xe, không phải «vẽ hết các cột». Với case phân loại, như giữ chân nhân viên hay hồ sơ bất thường, sản phẩm là một xác suất và một ngưỡng hành động, không phải accuracy cao nhất. Với tài liệu nội bộ, câu trả lời phải trích được đoạn đã đưa vào, không được bịa điều khoản. Module tổng kết cuối chương trình, nếu chưa có đề chi tiết, vẫn làm được phần này: chốt một quyết định kinh doanh, một nguồn dữ liệu, một thước đo, và một giới hạn của kết luận.",
    insight: "Viết một câu quyết định trước khi mở file. Hết buổi, câu đó phải cụ thể hơn lúc mở.",
    sources: [
      { claim: "NYC Taxi and Limousine Commission công bố dữ liệu chuyến xe, dùng rộng rãi để tập EDA.", source: "NYC TLC, Trip Record Data", url: "https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page" },
      illus("Các tình huống giữ chân nhân viên và hồ sơ bất thường ở trên là khung quyết định, không phải số liệu của một công ty."),
    ],
    recall: ["crisp"],
  }),

  T({
    id: "mindmap",
    keys: [/mind\s*map|mindmap/i, /common curriculum/i],
    title: "Các khái niệm đứng cạnh nhau thế nào",
    situation:
      "Giữa chừng một chương dễ lẫn tên gần nhau: trung bình với kỳ vọng, xác suất với tỷ lệ trong mẫu, hồi quy với dự báo chuỗi thời gian.",
    problem:
      "Học thuộc sơ đồ thì nhớ vị trí ô, không nhớ ô đó trả lời câu hỏi gì.",
    why:
      "Một sơ đồ chương chỉ có ích khi nó chỉ thứ tự phụ thuộc: khái niệm sau dùng kết quả của khái niệm trước.",
    plain:
      "Bảng và câu hỏi SQL đưa dữ liệu tới chỗ phân tích. Thống kê mô tả nói bảng đang có gì. Suy diễn nói một mẫu có được phép kết luận cho phần lớn hơn không. Hồi quy và phân loại biến câu đó thành một dự đoán. Diễn giải biến dự đoán thành một quyết định.",
    precise:
      "Python, ở chương trình này, là cách biến đổi bảng và gọi mô hình, không phải một giáo trình khoa học máy tính. SQL giữ dữ liệu ở dạng quan hệ và trả về đúng tập hàng. EDA tìm cấu trúc, giá trị thiếu và quan hệ trước khi mô hình. Kiểm định và khoảng tin cậy nói về độ không chắc. Hồi quy tuyến tính mô tả một quan hệ gần thẳng. Logistic cho một xác suất của lớp. Cây và cụm là các cách khác để tách nhóm. NLP biến chữ thành số trước khi những mô hình đó dùng được.",
    insight: "Sơ đồ để biết khái niệm nào phải đứng trước. Định nghĩa nằm ở bài của khái niệm đó.",
    sources: [illus("Không có số liệu trong bài bản đồ.")],
  }),

  T({
    id: "metrics-extra",
    keys: [/classification metric/i, /regression metric/i, /error measure/i, /project pipeline/i, /model building and evaluation/i, /prediction vs projection/i],
    title: "Thước đo mô hình và đường ống dự án",
    situation:
      "Hai mô hình dự đoán form. Một cái MAE 12 form, một cái MAE 9 nhưng luôn dưới thực tế vào tuần lễ. Ví dụ minh họa. Chọn MAE nhỏ hơn có thể vẫn sai nghiệp vụ.",
    problem:
      "Một số điểm không nói hướng sai. Dự báo thấp đều vào đúng tuần cần tăng người trực thì thiệt hại không nằm trong MAE.",
    why:
      "Nhiều thước đo tồn tại vì mỗi thước phạt một kiểu sai khác nhau. Đường ống dự án tồn tại để thước đo được chốt trước khi nhìn mô hình đẹp.",
    plain:
      "MAE là sai số tuyệt đối trung bình. RMSE phạt mạnh sai số lớn. Với lớp lệch, accuracy gần như không dùng một mình.",
    precise:
      "MAE lấy trung bình |sai số|. RMSE lấy căn của trung bình bình phương, nhạy với điểm sai lớn. MAPE là tỷ lệ, dễ vỡ khi mẫu số gần 0. Prediction là nói về các trường hợp cùng kiểu với dữ liệu đã thấy. Projection trong bài hồi quy của chương trình thường chỉ việc kéo đường ra ngoài vùng đã quan sát. Kéo ra ngoài vùng là mong manh hơn.",
    pitfalls: [
      { left: "Prediction", right: "Projection", note: "Nội suy trong vùng dữ liệu và ngoại suy ra ngoài vùng không cùng độ tin. Gọi cả hai là dự báo sẽ hứa quá." },
    ],
    insight: "Chọn thước đo theo cái giá của việc sai lớn, không theo thói quen của thư viện.",
    sources: [
      { claim: "MAE và RMSE là các thước sai số hồi quy phổ biến. RMSE nhấn mạnh sai số lớn hơn MAE.", source: "Wikipedia, Mean squared error", url: "https://en.wikipedia.org/wiki/Mean_squared_error" },
      illus("MAE 12 và 9 là ví dụ minh họa."),
    ],
  }),
];
