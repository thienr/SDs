import type { Motion } from "@/components/motion/types";
import { F, M, arr, box, chain, ln, pair, stack, txt } from "@/data/motion/kit";

const C = ["C0\nđặt câu hỏi", "C1\nlàm với máy", "C2\nsuy diễn", "C3\nmô hình"];
const sc = (n: number) => chain("c", C, { y: 22, on: n, all: true, h: 14 });

export const m3: Record<string, Motion> = {
  "c0-order": M([
    F("Giáo trình có bốn khóa nối tiếp: C0 đặt câu hỏi, C1 làm việc với máy, C2 suy diễn, C3 mô hình.", "The syllabus has four courses in sequence: C0 asking, C1 working with the machine, C2 inference, C3 models.", ...sc(0)),
    F("C3 cần một dòng dữ liệu để dự đoán; dòng đó chỉ có sau C1 và C2.", "C3 needs a data row to predict from; that row only exists after C1 and C2.", ...sc(3), arr("a", 50, 34, 50, 44, "red", { d: true }), txt("t", 50, 52, "nhảy tới C3 → chưa có gì để đếm", { c: "red", s: 3.4 })),
    F("Đi đúng thứ tự: mỗi khóa dựa vào khóa trước.", "Go in order: each course builds on the previous one.", ...sc(2), txt("t", 50, 46, "Toán và mô tả là bản ngắn, tùy chọn", { c: "mute", s: 3 })),
  ]),
  "c0-read": M([
    F("Một thẻ gồm bốn phần: lý do cần ý đó, nối với ý trước, hình minh họa, câu định nghĩa.", "A card has four parts: why it matters, link to the previous idea, an illustration, a definition.", ...chain("c", ["lý do", "nối ý trước", "hình", "định nghĩa"], { y: 26, on: 0, all: true, h: 14 })),
    F("Bạn đọc lần lượt từng phần, không phải xem hết một video.", "You read part by part, not watch a whole video.", ...chain("c", ["lý do", "nối ý trước", "hình", "định nghĩa"], { y: 26, on: 2, h: 14 })),
    F("Dừng khi câu định nghĩa đã khớp với hình. Sổ không chấm điểm.", "Stop when the definition matches the picture. The notebook does not grade.", ...chain("c", ["lý do", "nối ý trước", "hình", "định nghĩa"], { y: 26, on: 3, h: 14 }), txt("t", 50, 46, "khớp hình = xong thẻ", { c: "green", s: 3.6 })),
  ]),
  "or-obj": M([
    F("Hai loại ô khác nhau: biến quyết định (bạn chọn) và hàm mục tiêu (công thức).", "Two different cells: decision variables (you choose) and the objective (a formula).", ...pair("p", "biến quyết định\nsố suất mỗi kênh", "hàm mục tiêu\ndoanh thu = công thức", { ca: "blue", cb: "accent" })),
    F("Bạn chỉ gõ số suất; doanh thu tự ra từ công thức của các suất đó.", "You only type slots; revenue comes out of the formula of those slots.", ...pair("p", "gõ: 10, 20, 5", "doanh thu = tổng(suất × giá)", { ca: "blue", cb: "accent", fb: "soft" }), arr("a", 48, 26, 52, 26, "mute")),
    F("Nếu gõ cả doanh thu, bạn tự điền đáp án và không còn gì để giải.", "If you type revenue too, you fill in the answer yourself and nothing is left to solve.", ...pair("p", "gõ: 10, 20, 5", "gõ cả doanh thu", { ca: "blue", cb: "red", d: true }), txt("t", 50, 46, "tự điền đáp án = không còn bài toán", { c: "red", s: 3.4 })),
  ]),
  "or-con": M([
    F("Ngân sách là 100. Mỗi suất có đơn giá riêng.", "The budget is 100. Each slot has its own unit cost.", box("b", 50, 20, 70, 14, "ngân sách ≤ 100", { f: "accent", c: "accent" })),
    F("Tổng số suất × đơn giá phải nhỏ hơn hoặc bằng 100.", "Total slots × unit cost must be at most 100.", box("b", 50, 12, 70, 10, "ngân sách ≤ 100", { c: "accent" }), ...stack("s", ["kênh A: 10 × 3 = 30", "kênh B: 20 × 2 = 40", "kênh C: 5 × 6 = 30"], { y0: 26, gap: 10, w: 60 }), txt("t", 50, 56, "tổng = 100 ≤ 100", { c: "green", s: 3.4 })),
    F("Quên dòng này thì «tối ưu» cứ tăng số suất mãi; đổi ≤ thành ≥ thì có thể không còn phương án.", "Forget the row and the “optimum” keeps adding slots; flip ≤ to ≥ and there may be no feasible plan.", box("b", 28, 24, 38, 14, "quên giới hạn\n→ tăng mãi", { c: "red" }), box("c", 72, 24, 38, 14, "viết ≥ thay ≤\n→ vô nghiệm", { c: "red", d: true }), txt("t", 50, 46, "mỗi nguồn lực: một bất đẳng thức", { c: "mute", s: 3.2 })),
  ]),
  "or-solv": M([
    F("Hai biến, ràng buộc là các đường thẳng: vùng khả thi là một đa giác.", "Two variables with linear constraints: the feasible region is a polygon.", ln("p1", 20, 40, 20, 12, "blue"), ln("p2", 20, 12, 70, 12, "blue"), ln("p3", 70, 12, 82, 36, "blue"), ln("p4", 82, 36, 55, 44, "blue"), ln("p5", 55, 44, 20, 40, "blue")),
    F("Với mục tiêu tuyến tính, solver chỉ cần xét các đỉnh: nó dừng ở một đỉnh.", "With a linear objective, the solver only needs to check the corners: it stops at a corner.", ln("p1", 20, 40, 20, 12, "blue"), ln("p2", 20, 12, 70, 12, "blue"), ln("p3", 70, 12, 82, 36, "blue"), ln("p4", 82, 36, 55, 44, "blue"), ln("p5", 55, 44, 20, 40, "blue"), ...[[20, 40], [20, 12], [70, 12], [82, 36], [55, 44]].map(([x, y], i) => ({ id: `v${i}`, k: "dot" as const, x, y, r: i === 3 ? 2.2 : 1.2, c: i === 3 ? ("accent" as const) : ("blue" as const) })), txt("t", 50, 54, "tối ưu nằm ở một đỉnh", { c: "accent", s: 3.4 })),
    F("Thêm một bình phương vào mục tiêu: đường đồng mức cong, tối ưu có thể nằm giữa, và solver có thể dừng ở cực trị cục bộ.", "Add a square to the objective: contours curve, the optimum can be inside, and the solver may stop at a local extremum.", ln("p1", 20, 40, 20, 12, "blue", { o: 0.5 }), ln("p2", 20, 12, 70, 12, "blue", { o: 0.5 }), ln("p3", 70, 12, 82, 36, "blue", { o: 0.5 }), ln("p4", 82, 36, 55, 44, "blue", { o: 0.5 }), ln("p5", 55, 44, 20, 40, "blue", { o: 0.5 }), { id: "r", k: "ring", x: 48, y: 28, r: 8, c: "red" }, { id: "d", k: "dot", x: 48, y: 28, r: 1.8, c: "red" }, txt("t", 50, 54, "bài cong: thử nhiều điểm xuất phát", { c: "red", s: 3.2 })),
  ]),
  "or-sheet": M([
    F("Trang tính: B2:B4 là biến, B6 là mục tiêu, B8 ≤ B9 là giới hạn.", "Sheet: B2:B4 are variables, B6 the objective, B8 ≤ B9 the constraint.", ...stack("s", ["B2:B4 — biến (Solver được sửa)", "B6 — mục tiêu (công thức)", "B8 ≤ B9 — giới hạn ngân sách", "B12 — «nhớ kiểm tra giá»"], { y0: 12, gap: 11, w: 76, on: [0, 1, 2] })),
    F("Solver chỉ đọc ba vùng đã khai báo, không đọc B12.", "Solver reads only the three declared ranges, not B12.", ...stack("s", ["B2:B4 — biến (Solver được sửa)", "B6 — mục tiêu (công thức)", "B8 ≤ B9 — giới hạn ngân sách", "B12 — «nhớ kiểm tra giá»"], { y0: 12, gap: 11, w: 76, on: [0, 1, 2], bad: [] }), txt("t", 50, 54, "B12 không tham gia bài toán", { c: "mute", s: 3 })),
    F("Một giới hạn gõ thành ghi chú thì không phải giới hạn; phải là một ô công thức được khai báo.", "A constraint typed as a note is not a constraint; it must be a declared formula cell.", ...stack("s", ["B8 ≤ B9 — khai báo trong Solver", "B12: «ngân sách tối đa 100» (chữ)"], { y0: 18, gap: 16, w: 76, on: [0], bad: [1] }), txt("t", 50, 54, "chữ ghi chú ≠ giới hạn", { c: "red", s: 3.4 })),
  ]),
  "ga-next": M([
    F("Prompt: «Giá gói spa là bao nhiêu?», không kèm bảng giá.", "Prompt: “How much is the spa package?”, no price list attached.", box("p", 50, 24, 70, 14, "Giá gói spa là bao nhiêu?\n(không có bảng giá)", { c: "blue" })),
    F("Mô hình tính phân phối xác suất trên các mảnh chữ kế tiếp, rồi chọn một mảnh.", "The model computes a probability over next text pieces and picks one.", box("p", 50, 8, 70, 9, "Giá gói spa là...", { o: 0.6, s: 3 }), ...["800.000", "1.200.000", "950.000"].map((t, i) => box(`o${i}`, 22 + i * 28, 30, 24, 10, t, { c: "gold", s: 3 })), txt("t", 50, 48, "mỗi mảnh có một xác suất", { c: "mute", s: 3 })),
    F("Một số được viết ra, nghe hợp lý; nó không được tra từ cơ sở dữ liệu của công ty.", "A number gets written and sounds plausible; it was not looked up in the company's database.", box("p", 28, 26, 38, 14, "«1.200.000»\n(được sinh ra)", { c: "gold" }), box("d", 72, 26, 38, 14, "bảng giá thật\n(không có trong prompt)", { c: "red", d: true }), txt("t", 50, 48, "đừng báo con số này cho khách", { c: "red", s: 3.4 })),
  ]),
  "ga-vs": M([
    F("Hai việc khác nhau: đoán một cột và nối tiếp một đoạn chữ.", "Two different jobs: predict a column and continue a text.", ...pair("p", "học máy\nđoán một cột", "GenAI\nnối tiếp đoạn chữ")),
    F("Học máy: «khách này có rời đi không?» — có nhãn, có tập chấm, có một ô đúng.", "ML: “will this customer leave?” — labelled, with a test set and one right cell.", box("a", 50, 16, 80, 12, "khách này có rời đi không?  →  có / không", { c: "blue" }), box("b", 50, 36, 80, 12, "chấm bằng tập kiểm tra có nhãn", { f: "blue", c: "blue" })),
    F("GenAI: «viết một tin nhắn» — không có một ô đúng duy nhất, nên thước đo của việc 1 không áp được.", "GenAI: “write a message” — no single right cell, so the first job's metric does not apply.", box("a", 50, 16, 80, 12, "viết một tin nhắn cho khách", { c: "accent" }), box("b", 50, 36, 80, 12, "không có một ô đúng duy nhất", { c: "red", d: true }), txt("t", 50, 52, "gọi đúng tên việc trước khi chọn thước đo", { c: "mute", s: 3.2 })),
  ]),
  "ga-stack": M([
    F("Ba tầng: model, data, sản phẩm.", "Three layers: model, data, product.", ...stack("l", ["sản phẩm (nút, giao diện)", "data (tài liệu trong lần gọi)", "model (viết câu)"], { y0: 14, gap: 14, w: 70, h: 10 })),
    F("Cùng một model: lần gọi có dán chính sách đổi trả cho câu khác lần không dán. Đó là tầng data.", "Same model: a call with the return policy pasted gives different text than one without. That is the data layer.", ...stack("l", ["sản phẩm (nút, giao diện)", "data (dán chính sách đổi trả)", "model (viết câu)"], { y0: 14, gap: 14, w: 70, h: 10, on: [1] })),
    F("Sản phẩm chưa có nút «đặt lịch» thì người dùng vẫn chỉ nhận được một đoạn chữ. Đó là tầng sản phẩm.", "If the product has no “book” button, users still only get text. That is the product layer.", ...stack("l", ["sản phẩm (chưa có nút đặt lịch)", "data (dán chính sách đổi trả)", "model (viết câu)"], { y0: 14, gap: 14, w: 70, h: 10, on: [0] }), txt("t", 50, 56, "nói rõ bạn đang đụng tầng nào", { c: "mute", s: 3 })),
  ]),
  "ga-use": M([
    F("Hai việc cùng dùng một mô hình: nháp tiêu đề và gửi giá cho khách.", "Two jobs, one model: drafting a headline and sending prices to a customer.", ...pair("p", "nháp tiêu đề\n(người sửa lại)", "tự gửi giá\ncho khách")),
    F("Giá của một lần sai: tiêu đề tệ thì sửa; giá sai gửi đi có thể thành một hợp đồng.", "Cost of one error: a bad headline is edited; a wrong price sent can become a contract.", ...pair("p", "sai → sửa\ngiá thấp", "sai → hợp đồng\ngiá cao", { ca: "green", cb: "red", fa: "soft" })),
    F("Hai việc không dùng chung một nút: việc giá cao phải có người duyệt hoặc nguồn kiểm được.", "The two jobs should not share a button: the high-cost one needs a reviewer or a checkable source.", ...pair("p", "tự động\nvới người sửa", "có người duyệt\n+ nguồn kiểm được", { ca: "green", cb: "red" })),
  ]),
  "ga-chat": M([
    F("Một lần gọi gồm các message: system và user.", "One call contains messages: system and user.", box("s", 50, 14, 76, 10, "system: «chỉ dùng bảng giá đính kèm»", { c: "blue" }), box("u", 50, 30, 76, 10, "user: dán bảng giá + câu hỏi", { c: "accent" })),
    F("Thiếu một trong hai thì lần gọi không đủ thông tin.", "Missing either one means the call lacks information.", box("s", 50, 14, 76, 10, "system: «chỉ dùng bảng giá đính kèm»", { c: "blue" }), box("u", 50, 30, 76, 10, "user: (chưa dán bảng giá)", { c: "red", d: true }), txt("t", 50, 48, "không có bảng giá → không có nguồn", { c: "red", s: 3.4 })),
    F("Mô hình không giữ hộ: lần gọi sau ứng dụng phải gửi lại cả hai.", "The model keeps nothing: on the next call the app must send both again.", box("a", 28, 22, 38, 14, "lần gọi 1\nsystem + user", { c: "blue" }), box("b", 72, 22, 38, 14, "lần gọi 2\ngửi lại cả hai", { c: "accent" }), arr("x", 48, 22, 52, 22, "mute"), txt("t", 50, 44, "system không phải khóa pháp lý", { c: "mute", s: 3 })),
  ]),
  "ga-tok": M([
    F("Cửa sổ ngữ cảnh có một trần token.", "The context window has a token ceiling.", box("w", 50, 24, 80, 18, "", { c: "blue", f: "soft" }), txt("t", 50, 10, "trần token", { c: "blue", s: 3.2 })),
    F("Bảng giá dài một trang nằm trọn trong trần: lần gọi thấy được nó.", "A one-page price list fits inside the ceiling: the call sees it.", box("w", 50, 24, 80, 18, "", { c: "blue", f: "soft" }), box("p", 50, 24, 40, 10, "bảng giá 1 trang", { f: "green", c: "green" })),
    F("Chôn nó ở cuối một lần dán khổng lồ thì có thể không còn trong cửa sổ, nhưng hóa đơn vẫn tính phần đã gửi.", "Bury it at the end of a giant paste and it may fall out of the window, yet the bill counts what was sent.", box("w", 36, 24, 52, 18, "", { c: "blue", f: "soft" }), box("big", 58, 24, 56, 12, "đoạn dán khổng lồ …………… bảng giá", { c: "red", o: 0.8, s: 2.8 }), txt("t", 50, 50, "ngoài trần = không thấy, vẫn bị tính tiền", { c: "red", s: 3.2 })),
  ]),
  "ga-prompt": M([
    F("Một prompt gồm ba phần: việc cần làm, ngữ cảnh, dạng đầu ra.", "A prompt has three parts: the task, the context, the output format.", ...chain("c", ["việc cần làm", "ngữ cảnh", "dạng đầu ra"], { y: 26, on: 0, all: true })),
    F("Việc: trả lời có được hoàn tiền không. Ngữ cảnh: đoạn chính sách đính kèm, không bịa thêm.", "Task: answer whether a refund is allowed. Context: the attached policy; no inventions.", ...chain("c", ["trả lời có\nhoàn tiền không", "đoạn chính sách\nđính kèm", "dạng đầu ra"], { y: 26, on: 1, h: 18 })),
    F("Dạng: một câu có dẫn đúng chỗ trong đoạn, hoặc nói «không thấy trong đoạn».", "Format: one sentence citing the passage, or “not found in the passage”.", ...chain("c", ["trả lời có\nhoàn tiền không", "đoạn chính sách\nđính kèm", "một câu có dẫn\nhoặc «không thấy»"], { y: 26, on: 2, h: 18 })),
  ]),
  "ga-few": M([
    F("Muốn đầu ra là «có / không / không thấy trong đoạn».", "You want the output to be “yes / no / not in the passage”.", box("g", 50, 24, 70, 14, "đầu ra: có | không | không thấy", { c: "accent" })),
    F("Đưa ba mẫu đúng dạng đó vào prompt.", "Put three examples of exactly that format into the prompt.", ...["mẫu 1 → có", "mẫu 2 → không", "mẫu 3 → không thấy"].map((t, i) => box(`e${i}`, 50, 12 + i * 12, 60, 9, t, { c: "blue", s: 3 }))),
    F("Mẫu cố định dạng câu, nhưng không làm đoạn chính sách đúng hơn: chúng chỉ giúp dễ kiểm.", "Examples fix the sentence shape but do not make the policy any truer; they only make answers easier to check.", ...pair("p", "ví dụ\ncố định dạng", "dữ liệu\nvẫn phải đúng", { ca: "blue", cb: "red", d: true })),
  ]),
  "ga-cot": M([
    F("Context không có giá. Mô hình vẫn được bảo «viết từng bước».", "The context has no price. The model is still told to “write step by step”.", box("c", 28, 24, 38, 14, "context:\nkhông có giá", { c: "red", d: true }), box("s", 72, 24, 38, 14, "«hãy viết\ntừng bước»", { c: "blue" })),
    F("Chuỗi bước vẫn viết ra một mức giá và một lý do nghe hợp lý.", "The chain still writes a price and a sensible-sounding reason.", ...stack("s", ["bước 1: gói thường ~ 1 triệu", "bước 2: cộng phụ phí", "bước 3: giá = 1.200.000"], { y0: 10, gap: 11, w: 70 })),
    F("Không bước nào trỏ về nguồn trong context, nên đó không phải bằng chứng: đừng thu tiền theo giá đó.", "No step points to a source in the context, so it is not evidence: do not charge that price.", ...stack("s", ["bước 1: gói thường ~ 1 triệu", "bước 2: cộng phụ phí", "bước 3: giá = 1.200.000"], { y0: 10, gap: 11, w: 70, bad: [0, 1, 2], on: [0, 1, 2] }), txt("t", 50, 50, "bước không trỏ nguồn → bỏ", { c: "red", s: 3.4 })),
  ]),
  "sa-tune": M([
    F("Chính sách đổi trả sửa một câu.", "The return policy changes by one sentence.", box("p", 50, 24, 70, 14, "chính sách: «7 ngày» → «14 ngày»", { c: "accent" })),
    F("RAG: đổi tài liệu được tìm; câu mới có ngay ở lần gọi sau.", "RAG: change the searched document; the new sentence appears on the next call.", ...chain("c", ["sửa tài liệu", "xây lại index", "câu trả lời mới"], { y: 26, on: 2 })),
    F("Fine-tune: huấn luyện lại cả mô hình vì một câu là nhầm tầng; nó đổi cách viết, không đổi sự thật như một bảng tra.", "Fine-tune: retraining the whole model for one sentence is the wrong layer; it changes style, not facts like a lookup table.", ...pair("p", "RAG\nđổi tài liệu", "fine-tune\nđổi trọng số", { ca: "green", cb: "red", fa: "green", d: true }), txt("t", 50, 46, "sự thật thay đổi → RAG; giọng văn ổn định → xét fine-tune", { c: "mute", s: 3 })),
  ]),
  "sa-react": M([
    F("Khách hỏi: «còn hàng không?»", "Customer asks: “is it in stock?”", ...chain("r", ["suy nghĩ", "gọi catalog", "nhìn kết quả"], { y: 26, on: 0, all: true })),
    F("Bước act: gọi catalog theo mã. Bước observe: số catalog trả về.", "Act: call the catalog by code. Observe: the number the catalog returns.", ...chain("r", ["suy nghĩ", "gọi catalog\ntheo mã A12", "catalog trả:\ncòn 0"], { y: 26, on: 2, h: 18 })),
    F("Không có bước đó thì phải nói «chưa tra», không được bịa «còn 3». Vòng lặp cần một trần số bước.", "Without that step say “not checked yet”, never invent “3 left”. The loop needs a step ceiling.", box("a", 28, 26, 38, 14, "không tra\n→ «còn 3»", { c: "red", d: true }), box("b", 72, 26, 38, 14, "không tra\n→ «chưa tra»", { c: "green" })),
  ]),
  "sa-stage": M([
    F("Ba chặng: nói theo prompt, gọi catalog, chấm các ca.", "Three stages: talk from the prompt, call the catalog, score the cases.", ...chain("s", ["1 nói theo\nprompt", "2 gọi\ncatalog", "3 chấm\ncác ca"], { y: 26, on: 0, all: true, h: 18 })),
    F("Chặng 1 chưa có catalog nên chưa được nói giá. Chặng 2 mới có kết quả catalog.", "Stage 1 has no catalog so it may not quote prices. Stage 2 has catalog results.", ...chain("s", ["1 nói theo\nprompt", "2 gọi\ncatalog", "3 chấm\ncác ca"], { y: 26, on: 1, h: 18 })),
    F("Chặng 3 so các ca với thước đo viết trước; chặng nào chưa có log thì chưa xảy ra.", "Stage 3 compares cases to a metric written beforehand; a stage without a log has not happened.", ...chain("s", ["1 nói theo\nprompt", "2 gọi\ncatalog", "3 chấm\ncác ca"], { y: 26, on: 2, h: 18 }), txt("t", 50, 48, "không bịa một cuộc hội thoại", { c: "red", s: 3.2 })),
  ]),
  "sa-tool": M([
    F("Mã A12 gọi catalog: trả về giá và tồn kho.", "Code A12 calls the catalog: it returns price and stock.", box("q", 28, 26, 38, 14, "tra mã A12", { c: "blue" }), box("r", 72, 26, 38, 14, "giá: 900.000\ntồn: 4", { f: "green", c: "green" }), arr("a", 48, 26, 52, 26, "mute")),
    F("Câu trả lời nhắc lại đúng các trường đó và không thêm gì.", "The answer repeats exactly those fields and adds nothing.", box("r", 28, 26, 38, 14, "giá: 900.000\ntồn: 4", { c: "green" }), box("a", 72, 26, 38, 14, "«A12: 900.000đ,\ncòn 4»", { c: "accent" }), arr("x", 48, 26, 52, 26, "green")),
    F("Gói không có mã: không có dòng thì không có số; trả «không thấy mã», đừng đoán giá gần đúng.", "A package with no code: no row means no number; answer “code not found”, not a rough price.", box("q", 28, 26, 38, 14, "tra mã ???", { c: "blue" }), box("r", 72, 26, 38, 14, "không thấy mã", { c: "green" }), arr("x", 48, 26, 52, 26, "mute"), txt("t", 50, 48, "không có dòng ≠ giá 0", { c: "red", s: 3.4 })),
  ]),
  "sa-score": M([
    F("Ca viết trước: mã A12, catalog trả «hết hàng».", "Case written first: code A12, catalog says “out of stock”.", box("c", 50, 24, 70, 14, "ca: mã A12 → catalog: hết hàng", { c: "blue" })),
    F("Mô hình nói «còn hàng», rất chắc. Ca này sai.", "The model says “in stock”, very confidently. This case fails.", box("c", 28, 24, 38, 14, "đúng:\nhết hàng", { c: "green" }), box("m", 72, 24, 38, 14, "mô hình:\ncòn hàng", { c: "red", f: "red" })),
    F("Ba lần cùng nói «còn hàng» không làm nó đúng; thước đo là kết quả catalog, không phải số lần lặp lại.", "Saying “in stock” three times does not make it right; the metric is the catalog result, not repetition.", ...["còn hàng", "còn hàng", "còn hàng"].map((t, i) => box(`m${i}`, 18 + i * 32, 22, 26, 10, t, { c: "red", s: 3 })), box("c", 50, 42, 70, 10, "catalog: hết hàng → cả ba đều sai", { c: "green", s: 3 })),
  ]),
  "rag-why": M([
    F("Một file PDF nội bộ nằm ngoài mô hình.", "An internal PDF lives outside the model.", pair("p", "file PDF nội bộ", "mô hình", { ca: "gold", cb: "blue" })[0], pair("p", "file PDF nội bộ", "mô hình", { ca: "gold", cb: "blue" })[1]),
    F("RAG thêm một bước tìm: lấy vài đoạn của file rồi đặt vào prompt.", "RAG adds a search step: fetch a few passages of the file and put them in the prompt.", ...chain("r", ["file PDF", "tìm đoạn", "đoạn vào prompt", "mô hình"], { y: 26, on: 2, h: 14 })),
    F("Không có đoạn nào vào prompt thì câu trả lời về file là câu không nguồn, dù bạn nói «RAG».", "With no passage in the prompt the answer about the file has no source, however much you say “RAG”.", ...chain("r", ["file PDF", "tìm đoạn", "(rỗng)", "mô hình"], { y: 26, on: 3, h: 14 }), txt("t", 50, 48, "phải thấy đoạn nào đã vào prompt", { c: "red", s: 3.2 })),
  ]),
  "rag-chunk": M([
    F("Một mục dài 8 dòng, trong đó dòng 1 là lời hứa và dòng 6 là điều kiện.", "A section of 8 lines: line 1 is the promise, line 6 is the condition.", ...Array.from({ length: 8 }, (_, i) => box(`l${i}`, 50, 6 + i * 7, 70, 6, i === 0 ? "dòng 1: hoàn tiền" : i === 5 ? "dòng 6: điều kiện" : `dòng ${i + 1}`, { c: i === 0 || i === 5 ? "accent" : "mute", s: 2.8 }))),
    F("Cắt mỗi mảnh 2 dòng: lời hứa và điều kiện nằm ở hai mảnh khác nhau.", "Cut into 2-line chunks: the promise and the condition land in different chunks.", ...Array.from({ length: 8 }, (_, i) => box(`l${i}`, i % 2 === 0 ? 40 : 40, 6 + i * 7, 56, 6, i === 0 ? "dòng 1: hoàn tiền" : i === 5 ? "dòng 6: điều kiện" : `dòng ${i + 1}`, { c: Math.floor(i / 2) === 0 ? "blue" : Math.floor(i / 2) === 2 ? "red" : "mute", s: 2.8 })), txt("m1", 82, 9, "mảnh 1", { s: 2.8, c: "blue" }), txt("m3", 82, 37, "mảnh 3", { s: 2.8, c: "red" })),
    F("Hỏi về hoàn tiền có thể chỉ tìm thấy mảnh 1: lời hứa mà không có điều kiện.", "A refund question may only find chunk 1: the promise without its condition.", box("m1", 50, 20, 70, 14, "mảnh 1: «hoàn tiền»", { f: "gold", c: "gold" }), box("m3", 50, 40, 70, 12, "mảnh 3: «chỉ trong 7 ngày» (không được tìm)", { c: "red", d: true, s: 3 }), txt("t", 50, 56, "cắt đoạn là cắt nghĩa", { c: "red", s: 3.4 })),
  ]),
  "rag-vec": M([
    F("Kho có hai tài liệu: FAQ marketing và điều khoản.", "The store holds two documents: a marketing FAQ and the terms.", ...pair("p", "FAQ marketing", "điều khoản", { ca: "gold", cb: "blue" })),
    F("Câu hỏi dùng chữ của FAQ nên FAQ đứng thứ nhất, điều khoản thứ hai.", "The question uses FAQ wording so the FAQ ranks first and the terms second.", ...stack("r", ["1. FAQ marketing", "2. điều khoản"], { y0: 14, gap: 14, w: 60, h: 10, on: [0] }), txt("t", 50, 46, "gần nhất theo độ gần, chưa phải đúng nhất", { c: "mute", s: 3 })),
    F("Trả lời theo top-1 là trả lời nhầm tài liệu: lấy vài đoạn, đọc, rồi mới viết.", "Answering from top-1 uses the wrong document: take a few passages, read, then write.", ...stack("r", ["1. FAQ marketing", "2. điều khoản"], { y0: 14, gap: 14, w: 60, h: 10, on: [0, 1], bad: [0] }), txt("t", 50, 46, "top-1 không phải kết luận", { c: "red", s: 3.4 })),
  ]),
  "rag-idx": M([
    F("8 giờ: xây index khi điều khoản ghi «7 ngày».", "8:00: the index is built when the policy says “7 days”.", box("i", 28, 24, 38, 14, "8h: index\n«7 ngày»", { c: "blue" }), box("f", 72, 24, 38, 14, "file nguồn\n«7 ngày»", { c: "blue" })),
    F("9 giờ: file sửa thành «14 ngày», nhưng index vẫn là bản 8 giờ.", "9:00: the file becomes “14 days”, but the index is still the 8:00 version.", box("i", 28, 24, 38, 14, "index (8h)\n«7 ngày»", { c: "red" }), box("f", 72, 24, 38, 14, "file nguồn (9h)\n«14 ngày»", { f: "green", c: "green" })),
    F("Cả buổi sáng bot nói 7 ngày: đó là chỉ mục cũ, không phải mô hình ngoan cố. Phải xây lại index khi nguồn đổi.", "All morning the bot says 7 days: a stale index, not a stubborn model. Rebuild the index when the source changes.", ...chain("c", ["file đổi", "xây lại index", "bot nói 14"], { y: 26, on: 2 })),
  ]),
  "rag-rank": M([
    F("Có 20 đoạn xếp theo độ gần; điều khoản đúng đứng thứ 15.", "20 passages ordered by similarity; the right clause is 15th.", ...Array.from({ length: 20 }, (_, i) => box(`p${i}`, 8 + (i % 10) * 9.4, 20 + Math.floor(i / 10) * 12, 8, 8, String(i + 1), { c: i === 14 ? "accent" : "mute", f: i === 14 ? "accent" : "soft", s: 2.8 }))),
    F("Re-rank đọc lại cả danh sách và kéo điều khoản đó lên đầu.", "Re-rank reads the list again and lifts that clause to the top.", ...Array.from({ length: 20 }, (_, i) => box(`p${i}`, 8 + (i % 10) * 9.4, 20 + Math.floor(i / 10) * 12, 8, 8, String(i + 1), { c: i === 14 ? "green" : "mute", f: i === 14 ? "green" : "soft", s: 2.8 })), box("t", 50, 52, 70, 8, "re-rank: đoạn 15 → hạng 1", { c: "green", s: 3 })),
    F("Nhưng nếu bước tìm chỉ giữ 5 đoạn đầu thì đoạn 15 không bao giờ vào danh sách: re-rank không tìm hộ.", "But if the search keeps only the top 5, passage 15 never enters the list: re-rank cannot find it for you.", ...Array.from({ length: 20 }, (_, i) => box(`p${i}`, 8 + (i % 10) * 9.4, 20 + Math.floor(i / 10) * 12, 8, 8, String(i + 1), { c: i < 5 ? "blue" : i === 14 ? "red" : "mute", f: i < 5 ? "soft" : "soft", o: i < 5 || i === 14 ? 1 : 0.35, s: 2.8 })), txt("t", 50, 52, "chỉ giữ 5 đoạn → đoạn 15 ngoài danh sách", { c: "red", s: 3.2 })),
  ]),
  "rag-near": M([
    F("Buổi demo chạy một câu hỏi và tìm được một đoạn.", "The demo runs one question and finds one passage.", box("d", 50, 24, 60, 14, "demo: 1 câu hỏi → 1 đoạn", { c: "blue" })),
    F("Đó chưa phải đánh giá: đánh giá cần một bộ ca, gồm cả ca mà độ gần sẽ phản bội.", "That is not an evaluation: evaluation needs a set of cases, including ones where similarity betrays you.", ...["ca 1 (demo)", "ca 2", "ca 3: độ gần sai"].map((t, i) => box(`c${i}`, 50, 12 + i * 12, 60, 9, t, { c: i === 2 ? "red" : "blue", s: 3, o: i === 0 ? 1 : 0.9 }))),
    F("Giữ một bộ ca; demo chỉ là một câu trong bộ đó, nếu nó đáng nằm trong bộ.", "Keep a case set; the demo is just one row in it, if it deserves to be.", box("s", 50, 24, 76, 18, "bộ ca: demo là một dòng", { c: "green", f: "soft" }), txt("t", 50, 46, "một lần chạy được ≠ một kết quả", { c: "mute", s: 3.2 })),
  ]),
  "rag-store": M([
    F("Hai collection trong Chroma: policy-2026-09 và policy-2026-10.", "Two Chroma collections: policy-2026-09 and policy-2026-10.", ...pair("p", "policy-2026-09", "policy-2026-10", { ca: "blue", cb: "blue" })),
    F("Lần gọi trỏ nhầm vào policy-2026-09 nên câu trả lời bám theo tháng 9.", "The call points at policy-2026-09, so the answer follows September.", ...pair("p", "policy-2026-09\n← lần gọi trỏ vào", "policy-2026-10", { ca: "red", fa: "red", cb: "mute", ob: 0.4 })),
    F("Đó không phải embedding hỏng: ghi tên kho trong log, đừng nói «đã tìm vector store» như thể chỉ có một kho.", "Not a broken embedding: log the collection name; do not say “searched the vector store” as if there were one.", ...pair("p", "log: tìm trong\npolicy-2026-10", "tên kho phải\nnằm trong log", { ca: "green", cb: "accent" })),
  ]),
  "rag-demo": M([
    F("Buổi RAG Demonstration chạy một câu và in ra một câu trả lời.", "The RAG demonstration runs one question and prints one answer.", ...chain("r", ["câu hỏi", "đoạn đã tìm", "câu đã viết"], { y: 26, on: 2, all: true })),
    F("Giữ đoạn đã tìm cạnh câu đã viết: có cặp đó mới có một ca.", "Keep the retrieved passage next to the written answer: only that pair makes a case.", ...pair("p", "đoạn đã tìm\n«hoàn tiền: không nêu số»", "câu đã viết\n«hoàn 500.000đ»", { ca: "blue", cb: "red" })),
    F("Kiểm tra: số tiền trong câu có nằm trong đoạn không? Không thì câu bịa số.", "Check: is the amount in the answer inside the passage? If not, the answer invented it.", ...pair("p", "đoạn: không có\nsố tiền", "câu: có số\n500.000đ", { ca: "blue", cb: "red", d: true }), txt("t", 50, 46, "số không nằm trong đoạn → bịa", { c: "red", s: 3.4 })),
  ]),
};
