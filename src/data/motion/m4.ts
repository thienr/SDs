import type { Motion } from "@/components/motion/types";
import { F, M, arr, at, bars, bell, box, chain, dot, ln, numline, pair, ring, stack, txt } from "@/data/motion/kit";


export const m4: Record<string, Motion> = {
  "im-grid": M([
    F("Một bức ảnh biển hiệu chia thành lưới ô nhỏ.", "A photo of a shop sign is divided into a grid of small cells.", ...Array.from({ length: 24 }, (_, i) => box(`g${i}`, 20 + (i % 6) * 12, 10 + Math.floor(i / 6) * 9, 11, 8, "", { c: "mute", f: "soft" }))),
    F("Mỗi ô là một con số độ sáng, không phải «chữ» hay «đường phố».", "Each cell is a brightness number, not “letters” or “a street”.", ...Array.from({ length: 24 }, (_, i) => box(`g${i}`, 20 + (i % 6) * 12, 10 + Math.floor(i / 6) * 9, 11, 8, String((i * 37) % 99), { c: "blue", f: "soft", s: 2.8 }))),
    F("Prompt «một góc phố» cho ra một lưới số trông giống góc phố; nó không phải địa chỉ bạn có thể gửi khách đến.", "A “street corner” prompt yields a number grid that looks like one; it is not an address you can send customers to.", box("a", 28, 26, 38, 14, "lưới số\ntrông như góc phố", { c: "blue" }), box("b", 72, 26, 38, 14, "địa chỉ thật\n(không có)", { c: "red", d: true }), txt("t", 50, 48, "biển hiệu trông thật ≠ có thật", { c: "red", s: 3.4 })),
  ]),
  "im-vae": M([
    F("Ảnh biển hiệu có một chữ nhỏ ở góc.", "The sign photo has a small word in the corner.", box("i", 50, 22, 60, 24, "ảnh gốc: chữ nhỏ rõ nét", { c: "blue" })),
    F("VAE nén ảnh thành một mã ngắn, chỉ giữ phần chung.", "A VAE compresses the image to a short code that keeps only the common parts.", ...chain("v", ["ảnh gốc", "mã ngắn", "ảnh dựng lại"], { y: 26, on: 1 })),
    F("Chữ nhỏ là phần riêng, đã bị bỏ khi nén: sau khi dựng lại nó thành một vệt mờ.", "The small word is a specific detail dropped in compression: after rebuilding it is a blur.", ...pair("p", "ảnh gốc\nchữ rõ", "dựng lại\nchữ thành vệt", { ca: "blue", cb: "red", fb: "soft" }), txt("t", 50, 48, "không phải «phông chữ nghệ thuật»", { c: "red", s: 3.2 })),
  ]),
  "im-gan": M([
    F("GAN có hai bên: kẻ làm giả viết ảnh, người chê phân biệt thật giả.", "A GAN has two sides: a forger writes images and a critic tells real from fake.", ...pair("p", "kẻ làm giả", "người chê", { ca: "accent", cb: "blue" })),
    F("Kẻ làm giả viết một đôi giày không có mã; người chê không bắt được và gật đầu.", "The forger writes a shoe with no SKU; the critic cannot catch it and nods.", box("a", 24, 22, 32, 12, "giày không mã", { c: "accent" }), arr("x", 41, 22, 55, 22, "mute"), box("b", 76, 22, 32, 12, "người chê: «ổn»", { c: "green" })),
    F("Người chê gật không có nghĩa là kho của bạn có đôi giày đó.", "The critic's nod does not mean your stock has that shoe.", box("a", 28, 24, 38, 14, "người chê\ngật đầu", { c: "green" }), box("b", 72, 24, 38, 14, "kho của bạn:\nkhông có", { c: "red", d: true }), txt("t", 50, 46, "ảnh đẹp ≠ sản phẩm tồn tại", { c: "red", s: 3.4 })),
  ]),
  "im-diff": M([
    F("Diffusion bắt đầu từ ảnh toàn nhiễu.", "Diffusion starts from an all-noise image.", ...Array.from({ length: 18 }, (_, i) => dot(`n${i}`, 20 + (i % 6) * 12, 14 + Math.floor(i / 6) * 10, "mute", 1.4))),
    F("Mỗi bước gỡ bớt một ít nhiễu theo hướng prompt mô tả, dần hiện ra một bao bì.", "Each step removes a little noise toward what the prompt describes, gradually revealing a package.", ...chain("d", ["toàn nhiễu", "bớt nhiễu", "hiện hình", "bao bì"], { y: 26, on: 2, h: 14 })),
    F("Mã vạch trên bao bì chỉ là các ô nhiễu còn sót lại, không phải mã trong hệ thống; nó không tra từ một kho ảnh.", "The barcode is leftover noise cells, not a code in your system; it was not looked up in an image store.", ...pair("p", "mã vạch\ntrong ảnh", "mã trong\nhệ thống", { ca: "red", cb: "mute", d: true }), txt("t", 50, 46, "chỉ là nhiễu còn sót", { c: "red", s: 3.4 })),
  ]),
  "im-txt": M([
    F("Prompt mô tả một bao bì, gửi vào mô hình sinh ảnh.", "A prompt describes a package and goes into an image model.", ...chain("p", ["prompt", "mô hình ảnh", "ảnh"], { y: 26, on: 2, all: true })),
    F("Ảnh ra chỉ là một hình minh họa, chưa phải một bao bì đã in.", "The output is only an illustration, not a printed package.", ...pair("p", "ảnh minh họa", "bao bì đã in", { ca: "blue", cb: "mute", d: true, ob: 0.5 })),
    F("Prompt lái bức ảnh nhưng không chứng nhận nó: đừng bịa thông số cho sản phẩm trong ảnh.", "A prompt steers the picture but does not certify it: do not invent specs for the product shown.", box("a", 28, 26, 38, 14, "prompt lái ảnh", { c: "blue" }), box("b", 72, 26, 38, 14, "chứng nhận\nthông số (không có)", { c: "red", d: true }), txt("t", 50, 48, "chỉ ghi thông số lấy từ nguồn thật", { c: "mute", s: 3 })),
  ]),
  "rag-job": M([
    F("Bài yêu cầu RAG trên các văn bản được giao.", "The assignment requires RAG over the assigned documents.", box("s", 50, 24, 70, 16, "văn bản được giao\n(phạm vi của bài)", { c: "green", f: "soft" })),
    F("Câu trả lời dẫn một điều khoản nằm trong các văn bản đó là câu trong bài.", "An answer quoting a clause that is inside those texts is in scope.", box("s", 50, 20, 70, 16, "văn bản được giao", { c: "green", f: "soft" }), box("c", 50, 20, 40, 8, "điều khoản trong file", { c: "green", f: "green" })),
    F("Một điều khoản không có trong đó là câu ngoài bài, dù ngoài đời nó có thật.", "A clause not in them is out of scope, even if it is real in life.", box("s", 36, 24, 52, 18, "văn bản được giao", { c: "green", f: "soft" }), box("c", 82, 24, 30, 12, "điều khoản lạ", { c: "red", d: true }), txt("t", 50, 48, "đúng ngoài đời ≠ đúng trong bài", { c: "red", s: 3.4 })),
  ]),
  "lc-tpl": M([
    F("Khuôn: «chỉ dùng đoạn sau: {passage}». Chỗ trống {passage} chờ được điền.", "Template: “use only this passage: {passage}”. The {passage} slot waits to be filled.", box("t", 50, 24, 80, 14, "chỉ dùng đoạn sau: {passage}", { c: "blue" })),
    F("Điền một đoạn tìm được vào chỗ trống: lần gọi bám theo nguồn.", "Fill the slot with a retrieved passage: the call stays tied to a source.", box("t", 50, 16, 80, 12, "chỉ dùng đoạn sau: «hoàn tiền trong 14 ngày»", { c: "green", s: 3 }), txt("n", 50, 36, "có nguồn → còn trong RAG", { c: "green", s: 3.4 })),
    F("Nếu passage rỗng mà vẫn gọi, mọi câu trả lời sau đó nằm ngoài RAG dù code dùng LangChain.", "If passage is empty and you still call, every answer is outside RAG even if the code uses LangChain.", box("t", 50, 16, 80, 12, "chỉ dùng đoạn sau: ( rỗng )", { c: "red", d: true, s: 3 }), txt("n", 50, 36, "tên thư viện không tạo ra nguồn", { c: "red", s: 3.4 })),
  ]),
  "lc-parse": M([
    F("Dạng yêu cầu: «có» hoặc «không», kèm đúng mã.", "The required form: “yes” or “no”, with the exact code.", box("p", 50, 24, 70, 14, "dạng: có|không + mã", { c: "blue" })),
    F("Mô hình viết: «tôi nghĩ là có, khoảng 2 triệu». Không đúng dạng.", "The model writes: “I think yes, about 2 million”. Wrong shape.", ...chain("c", ["mô hình viết\n«tôi nghĩ là có…»", "parser"], { y: 26, on: 1, h: 18 })),
    F("Parser vỡ và báo lỗi dạng. Kết quả đúng của hệ thống là lỗi, không phải «có».", "The parser breaks and reports a shape error. The system's right result is the error, not “yes”.", box("a", 28, 24, 38, 14, "parser:\nlỗi dạng", { c: "red", f: "red" }), box("b", 72, 24, 38, 14, "đừng đọc thành\n«có»", { c: "mute", d: true }), txt("t", 50, 46, "không đoán ý mô hình", { c: "red", s: 3.4 })),
  ]),
  "lc-agent": M([
    F("Chain là đường đã vẽ sẵn: tra catalog rồi trả lời.", "A chain is a pre-drawn path: query the catalog, then answer.", ...chain("c", ["tra catalog", "trả lời"], { y: 26, on: 1, x0: 25, x1: 75 })),
    F("Agent tự chọn bước sau: catalog hay chính sách tùy câu hỏi.", "An agent picks the next step itself: catalog or policy depending on the question.", box("q", 20, 26, 22, 12, "câu hỏi mở", { c: "accent" }), box("a", 62, 12, 30, 10, "catalog", { c: "blue" }), box("b", 62, 40, 30, 10, "chính sách", { c: "blue" }), arr("x", 31, 24, 47, 14, "mute"), arr("y", 31, 28, 47, 38, "mute")),
    F("Cả hai đều cần trần: dừng sau vài bước dù chưa «hài lòng».", "Both need a ceiling: stop after a few steps even if not “satisfied”.", ...chain("c", ["bước 1", "bước 2", "bước 3", "dừng"], { y: 26, on: 3, h: 14 }), txt("t", 50, 48, "trần số bước = bắt buộc", { c: "red", s: 3.4 })),
  ]),
  "cap-none": M([
    F("Một capstone vẫn bắt đầu bằng câu: ai quyết định điều gì?", "A capstone still starts with: who decides what?", box("q", 50, 24, 74, 14, "ai quyết định điều gì?", { f: "accent", c: "accent" })),
    F("Sau đó đi đúng các bước CRISP-DM quen thuộc.", "Then follow the familiar CRISP-DM steps.", ...chain("c", ["hiểu bài toán", "hiểu dữ liệu", "chuẩn bị", "mô hình", "đánh giá"], { y: 26, on: 0, h: 14 })),
    F("Không có công thức mới nào tên là capstone: nó chỉ là một bài làm.", "No new formula is named capstone: it is just an assignment.", box("a", 50, 24, 70, 14, "capstone = bài làm\nkhông có buổi dạy thêm", { c: "mute" })),
  ]),
  "ht-h0": M([
    F("Hai bản quảng cáo A và B. Muốn biết B có khác A không.", "Two ads A and B. We want to know whether B differs from A.", ...pair("p", "bản A", "bản B", { ca: "blue", cb: "accent" })),
    F("H0 (giả thuyết không): tỷ lệ form của B bằng A. H1: hai tỷ lệ khác nhau.", "H0 (null): B's form rate equals A's. H1: the two rates differ.", box("a", 28, 24, 38, 16, "H0\nB = A", { c: "blue" }), box("b", 72, 24, 38, 16, "H1\nB ≠ A", { c: "accent" })),
    F("«B thắng» chưa phải giả thuyết mà là kết luận, chỉ được nói sau khi có bằng chứng.", "“B wins” is a conclusion, not a hypothesis, to be said only after evidence.", box("a", 28, 24, 38, 14, "H0 / H1\n(viết trước)", { c: "green" }), box("b", 72, 24, 38, 14, "«B thắng»\n(kết luận sau)", { c: "red", d: true }), arr("x", 48, 24, 52, 24, "mute")),
  ]),
  "ht-p": M([
    F("Giả sử H0 đúng: hai bản bằng nhau, và mẫu hay lệch quanh 0.", "Assume H0 is true: the two ads are equal and samples scatter around 0.", ...bell("b", 50, 46, { w: 80, h: 28 }), txt("t", 50, 52, "mức chênh giữa hai bản", { s: 2.8, c: "mute" })),
    F("Mẫu của bạn lệch ở đây: phần đuôi từ chỗ đó ra ngoài là p-value.", "Your sample sits here: the tail beyond it is the p-value.", ...bell("b", 50, 46, { w: 80, h: 28 }), ln("m", 74, 46, 74, 20, "accent", { w: 0.7 }), txt("t", 80, 18, "p ≈ 0,03", { c: "accent", s: 3.6 })),
    F("p = 0,03: nếu H0 đúng, lệch như thế chỉ gặp khoảng 3 lần trong 100 lần làm lại. Đó không phải xác suất H0 đúng.", "p = 0.03: if H0 is true you would see a gap this big about 3 times in 100 repeats. It is not the probability H0 is true.", ...bell("b", 50, 46, { w: 80, h: 28, op: 0.5 }), ...Array.from({ length: 3 }, (_, i) => dot(`d${i}`, 78 + i * 4, 40, "accent", 1.2)), txt("t", 50, 10, "độ hiếm của mẫu, không phải P(H0 đúng)", { c: "red", s: 3.2 })),
  ]),
  "ht-err": M([
    F("Hai thực tế có thể xảy ra, và hai cách bạn kết luận.", "Two realities and two calls you can make.", box("a", 28, 14, 38, 10, "thật sự bằng nhau", { c: "blue" }), box("b", 72, 14, 38, 10, "thật sự khác", { c: "accent" }), box("c", 28, 36, 38, 10, "bạn báo «khác»", { c: "mute" }), box("d", 72, 36, 38, 10, "bạn báo «bằng»", { c: "mute" })),
    F("Thật sự bằng nhau mà bạn báo «khác»: báo động giả (loại I), cỡ α = 5%.", "Truly equal but you call “different”: false alarm (type I), size α = 5%.", box("a", 28, 14, 38, 10, "thật sự bằng nhau", { c: "blue" }), box("c", 28, 36, 38, 10, "bạn báo «khác»", { c: "red", f: "red" }), arr("x", 28, 20, 28, 31, "red"), txt("t", 70, 28, "báo động giả (loại I)", { c: "red", s: 3.2 })),
    F("Thật sự khác mà bạn báo «bằng»: bỏ sót (loại II). Với α = 5%, 100 lần làm đúng luật thì khoảng 5 lần vẫn báo sai ở trường hợp bằng nhau.", "Truly different but you call “equal”: a miss (type II). With α = 5%, about 5 of 100 rule-following runs still shout wrong when truly equal.", box("b", 72, 14, 38, 10, "thật sự khác", { c: "accent" }), box("d", 72, 36, 38, 10, "bạn báo «bằng»", { c: "red", f: "red" }), arr("x", 72, 20, 72, 31, "red"), txt("t", 28, 28, "bỏ sót (loại II)", { c: "red", s: 3.2 })),
  ]),
  "ht-t": M([
    F("12 tuần dữ liệu, độ lệch chuẩn tính từ chính 12 tuần đó.", "12 weeks of data, with the standard deviation estimated from those 12 weeks.", bars("b", [8, 9, 10, 10, 11, 12, 10, 9, 11, 12, 10, 11], ["", "", "", "", "", "", "", "", "", "", "", ""], { c: "blue", max: 14, show: false, base: 40, h: 26, x0: 10, x1: 90 }), txt("t", 50, 50, "độ lệch chuẩn cũng là ước lượng", { c: "mute", s: 3 })),
    F("Phân phối chuẩn có đuôi mỏng; vạch bác ở đây.", "The normal curve has thin tails; its cutoff sits here.", ...bell("b", 50, 44, { w: 80, h: 28, op: 1 }), ln("c1", 66, 44, 66, 24, "red", { w: 0.6, d: true }), txt("t", 66, 20, "vạch chuẩn", { c: "red", s: 2.8 })),
    F("Phân phối t với 11 bậc tự do đuôi dày hơn, vạch đứng xa hơn: khó bác quá sớm.", "The t curve with 11 degrees of freedom has fatter tails, its cutoff sits farther out: harder to reject too early.", ...bell("b", 50, 44, { w: 80, h: 28, op: 0.35 }), ...bell("f", 50, 44, { w: 80, h: 28, fat: 4, c: "accent" }), ln("c1", 66, 44, 66, 24, "red", { w: 0.6, d: true, o: 0.4 }), ln("c2", 71, 44, 71, 24, "accent", { w: 0.7 }), txt("t", 71, 20, "vạch t", { c: "accent", s: 2.8 })),
  ]),
  "ht-means": M([
    F("GDN trung bình 120.000đ (độ lệch chuẩn 30.000đ, 36 form), Facebook 135.000đ (40.000đ, 36 form).", "GDN averages 120,000 (SD 30,000, 36 forms), Facebook 135,000 (40,000, 36 forms).", ...numline("n", 100, 160, { y: 36, ticks: [100, 120, 135, 160] }), dot("a", at(120, 100, 160), 36, "blue", 2), dot("b", at(135, 100, 160), 36, "accent", 2), txt("la", at(120, 100, 160), 26, "GDN 120", { s: 3, c: "blue" }), txt("lb", at(135, 100, 160), 26, "FB 135", { s: 3, c: "accent" })),
    F("Khoảng cách giữa hai trung bình là 15.000đ, nhưng mỗi trung bình có sai số của nó.", "The gap between the means is 15,000, but each mean has its own error.", ...numline("n", 100, 160, { y: 36, ticks: [100, 120, 135, 160] }), ring("a", at(120, 100, 160), 36, 6, "blue"), ring("b", at(135, 100, 160), 36, 6.8, "accent"), dot("a2", at(120, 100, 160), 36, "blue", 2), dot("b2", at(135, 100, 160), 36, "accent", 2), txt("t", 50, 12, "sai số ≈ 8.000đ; chênh 15.000đ", { c: "mute", s: 3 })),
    F("So khoảng cách với sai số: khoảng 1,9 sai số, gần ngưỡng; phép kiểm định cho biết đó có thể chỉ là nhiễu.", "Compare the gap with its error: about 1.9 errors, near the threshold; the test says whether it may be only noise.", bars("b", [1.9, 2], ["chênh / sai số", "ngưỡng ≈ 2"], { c: ["accent", "mute"], max: 3, base: 46, h: 28, x0: 25, x1: 75 })),
  ]),
  "ht-props": M([
    F("Mỗi bản có 2.000 người xem. A: 40 form (2,0%). B: 52 form (2,6%).", "Each ad has 2,000 viewers. A: 40 forms (2.0%). B: 52 forms (2.6%).", bars("b", [2.0, 2.6], ["A 2,0%", "B 2,6%"], { c: ["blue", "accent"], max: 3, base: 46, h: 30, x0: 25, x1: 75, unit: "%" })),
    F("Chênh 0,6 điểm phần trăm. Câu hỏi: chênh đó có lớn hơn nhiễu do chọn mẫu không?", "A gap of 0.6 percentage points. Question: is it bigger than sampling noise?", bars("b", [2.0, 2.6], ["A 2,0%", "B 2,6%"], { c: ["blue", "accent"], max: 3, base: 46, h: 30, x0: 25, x1: 75, unit: "%" }), ln("g", 62, 14, 62, 22, "red", { w: 0.7 }), txt("t", 50, 8, "chênh 0,6 điểm", { c: "red", s: 3.2 })),
    F("Sai số ở cỡ mẫu này khoảng 0,45 điểm; chênh 0,6 chỉ ≈ 1,3 sai số, chưa đủ để kết luận.", "At this sample size the error is about 0.45 points; the 0.6 gap is only ≈ 1.3 errors, not enough to conclude.", bars("b", [1.3, 2], ["chênh / sai số", "ngưỡng ≈ 2"], { c: ["accent", "mute"], max: 3, base: 46, h: 28, x0: 25, x1: 75 }), txt("t", 50, 8, "2,0% và 2,6% vẫn có thể là nhiễu", { c: "red", s: 3.2 })),
  ]),
  "ht-peek": M([
    F("Bạn xem p mỗi ngày và định dừng khi p < 5%.", "You check p every day and plan to stop when p < 5%.", ...[0.3, 0.12, 0.2, 0.07, 0.04, 0.09, 0.15].map((v, i) => dot(`d${i}`, 12 + i * 12, 44 - v * 100, v < 0.05 ? "green" : "mute", 1.4)), ln("l", 6, 44 - 5, 94, 44 - 5, "red", { d: true, w: 0.4 }), txt("t", 20, 8, "p theo ngày", { s: 3, c: "mute" })),
    F("Mỗi ngày là một lần được báo; chỉ cần một ngày chạm dưới 5% là bạn dừng.", "Each day is another chance to call it; one day under 5% and you stop.", ...[0.3, 0.12, 0.2, 0.07, 0.04, 0.09, 0.15].map((v, i) => dot(`d${i}`, 12 + i * 12, 44 - v * 100, v < 0.05 ? "red" : "mute", 1.6)), ring("r", 12 + 4 * 12, 44 - 4, 4, "red"), ln("l", 6, 44 - 5, 94, 44 - 5, "red", { d: true, w: 0.4 })),
    F("Nhiều lần được báo thì tỷ lệ báo động giả thật cao hơn 5% đã viết. Phải định cỡ mẫu hoặc ngày dừng trước.", "With many chances the real false-alarm rate exceeds the written 5%. Fix the sample size or stop day beforehand.", bars("b", [5, 20], ["viết: 5%", "thực tế: cao hơn"], { c: ["mute", "red"], max: 25, base: 46, h: 28, x0: 25, x1: 75, unit: "%" }), txt("t", 50, 8, "nhìn trộm làm 5% không còn là 5%", { c: "red", s: 3.2 })),
  ]),
  "ht-chi": M([
    F("Bảng thực tế: GDN 30 mua / 70 không; TikTok 10 mua / 90 không.", "Observed table: GDN 30 buy / 70 not; TikTok 10 buy / 90 not.", bars("b", [30, 10], ["GDN mua", "TikTok mua"], { c: ["blue", "accent"], max: 40, base: 46, h: 28, x0: 25, x1: 75 })),
    F("Nếu kênh và việc mua không liên quan, mỗi kênh kỳ vọng 20 người mua.", "If channel and buying were unrelated, each channel would expect 20 buyers.", bars("b", [30, 10], ["GDN mua", "TikTok mua"], { c: ["blue", "accent"], max: 40, base: 46, h: 28, x0: 25, x1: 75 }), ln("e1", 14, 46 - 0.7 * 20, 50, 46 - 0.7 * 20, "mute", { d: true, w: 0.4 }), ln("e2", 50, 46 - 0.7 * 20, 86, 46 - 0.7 * 20, "mute", { d: true, w: 0.4 }), txt("t", 50, 8, "kỳ vọng = 20 mỗi ô", { c: "mute", s: 3 })),
    F("Chi-bình phương cộng độ lệch của cả bảng: (30−20)²/20 + (10−20)²/20 + … nhìn cả bảng, không từng ô.", "Chi-square adds the gaps of the whole table: (30−20)²/20 + (10−20)²/20 + … the whole table, not one cell.", box("a", 50, 24, 80, 14, "χ² = Σ (quan sát − kỳ vọng)² / kỳ vọng\n= 5 + 5 + 1,25 + 1,25 = 12,5", { c: "accent", s: 3 }), txt("t", 50, 46, "một số cho cả bảng", { c: "mute", s: 3 })),
  ]),
  "ht-anova": M([
    F("Ba kênh với ba số đo giá mỗi form: 10–12, 11–13, 19–21 (nghìn đồng).", "Three channels with three cost-per-form measures: 10–12, 11–13, 19–21 (thousand).", ...[[10, 11, 12], [11, 12, 13], [19, 20, 21]].flatMap((g, k) => g.map((v, i) => dot(`d${k}${i}`, 16 + k * 34, 44 - (v - 8) * 2.8, ["blue", "gold", "accent"][k] as "blue", 1.6)))),
    F("Trung bình từng kênh: 11, 12, 20. Khoảng cách giữa các kênh lớn hơn khoảng cách trong từng kênh.", "Channel means: 11, 12, 20. The gaps between channels exceed the spread within each channel.", ...[[10, 11, 12], [11, 12, 13], [19, 20, 21]].flatMap((g, k) => g.map((v, i) => dot(`d${k}${i}`, 16 + k * 34, 44 - (v - 8) * 2.8, ["blue", "gold", "accent"][k] as "blue", 1.6))), ...[11, 12, 20].map((m, k) => ln(`m${k}`, 8 + k * 34, 44 - (m - 8) * 2.8, 26 + k * 34, 44 - (m - 8) * 2.8, "ink", { w: 0.6 }))),
    F("ANOVA so hai phần đó trong một cuộc kiểm định (thay vì ba cuộc), rồi mới hỏi kênh nào khác kênh nào.", "ANOVA compares those two parts in one test (not three), and only then asks which pairs differ.", box("a", 28, 24, 38, 14, "giữa các kênh\n(lớn)", { c: "accent" }), box("b", 72, 24, 38, 14, "trong từng kênh\n(nhỏ)", { c: "blue" }), txt("t", 50, 46, "tỷ số F lớn → có kênh khác", { c: "green", s: 3.4 })),
  ]),
  "eda-ask": M([
    F("«Làm EDA» chưa phải một câu hỏi.", "“Do EDA” is not yet a question.", box("q", 50, 24, 60, 14, "«làm EDA»", { c: "red", d: true })),
    F("Câu viết được: tỷ lệ form tháng này có khác tháng trước không, và khác bao nhiêu form?", "A writable question: does this month's form rate differ from last month's, and by how many forms?", box("q", 50, 24, 84, 16, "tỷ lệ form tháng này có khác tháng trước không,\nvà khác bao nhiêu form?", { f: "accent", c: "accent", s: 3 })),
    F("Câu hỏi quyết định cột nào cần nhìn và hình nào cần vẽ.", "The question decides which columns to look at and which chart to draw.", ...chain("c", ["câu hỏi", "cột cần xem", "hình cần vẽ"], { y: 26, on: 2 })),
  ]),
  "eda-src": M([
    F("Hai file: chuyến taxi công khai và khách spa của bạn.", "Two files: public taxi trips and your own spa customers.", ...pair("p", "file chuyến taxi\ncông khai", "khách spa\ncủa bạn", { ca: "mute", cb: "accent" })),
    F("Một tỷ lệ tính trên file taxi nói về chuyến taxi, không nói về cửa hàng của bạn.", "A rate computed on the taxi file describes taxi trips, not your shop.", box("a", 28, 24, 38, 14, "tỷ lệ trên\nfile taxi", { c: "mute" }), box("b", 72, 24, 38, 14, "tỷ lệ đặt lịch\ncủa bạn", { c: "red", d: true }), txt("t", 50, 46, "không thay thế nhau", { c: "red", s: 3.4 })),
    F("Trước khi tính, hỏi: bảng này ghi ai?", "Before computing, ask: who does this table record?", box("q", 50, 24, 70, 14, "bảng này ghi ai?", { f: "accent", c: "accent" })),
  ]),
  "eda-type": M([
    F("Bốn cột, bốn kiểu: kênh (chữ), số sao (chữ có thứ tự), ngày form (ngày), chi tiêu (số).", "Four columns, four types: channel (text), stars (ordered text), form date (date), spend (number).", ...[["kênh", "chữ"], ["số sao", "chữ có\nthứ tự"], ["ngày form", "ngày"], ["chi tiêu", "số"]].map(([a, b], i) => box(`c${i}`, 14 + i * 24, 24, 21, 18, `${a}\n${b}`, { c: ["mute", "gold", "blue", "accent"][i] as "mute", s: 3 }))),
    F("Mỗi kiểu cho phép phép tính khác nhau: số thì trung bình được, ngày thì khoảng cách, chữ thì đếm.", "Each type allows different operations: numbers average, dates measure gaps, text is counted.", ...[["kênh", "đếm"], ["số sao", "thứ hạng"], ["ngày form", "khoảng\ncách"], ["chi tiêu", "trung bình"]].map(([a, b], i) => box(`c${i}`, 14 + i * 24, 24, 21, 18, `${a}\n${b}`, { c: ["mute", "gold", "blue", "accent"][i] as "mute", s: 3 }))),
    F("Trung bình của chữ «GDN» không tồn tại.", "The mean of the text “GDN” does not exist.", box("a", 50, 24, 66, 14, "trung bình(«GDN», «Facebook»)  →  không tồn tại", { c: "red", d: true, s: 3 })),
  ]),
  "eda-row": M([
    F("Một khách để lại form hai lần vì tải lại trang: hai dòng.", "One customer submitted twice because of a page reload: two rows.", ...stack("r", ["Lan — 2.000.000đ", "Lan — 2.000.000đ", "Minh — 1.000.000đ"], { y0: 10, gap: 11, w: 70, on: [0, 1], c: "blue" })),
    F("SUM chi tiêu tính Lan hai lần: 5.000.000 thay vì 3.000.000.", "SUM counts Lan twice: 5,000,000 instead of 3,000,000.", ...stack("r", ["Lan — 2.000.000đ", "Lan — 2.000.000đ", "Minh — 1.000.000đ"], { y0: 10, gap: 11, w: 70, on: [0, 1], bad: [1] }), txt("t", 50, 46, "tổng bị nhân đôi", { c: "red", s: 3.6 })),
    F("Mỗi dòng phải là một thứ bạn gọi tên được: một khách, một đơn, một lượt form.", "Each row must be a thing you can name: a customer, an order, a form submission.", box("q", 50, 24, 70, 14, "mỗi dòng = ?\nmột khách, hay một lần gửi?", { f: "accent", c: "accent" })),
  ]),
  "eda-miss": M([
    F("1.000 khách, cột tuổi có 100 ô trống; 900 người khai trung bình 35 tuổi.", "1,000 customers; the age column has 100 blanks; the 900 who answered average 35.", box("a", 38, 24, 58, 16, "900 người khai\ntrung bình 35", { c: "blue" }), box("b", 82, 24, 24, 16, "100 ô\ntrống", { c: "gold", d: true })),
    F("Điền 0 cho 100 người đó thì trung bình tụt còn 31,5 và có «khách 0 tuổi».", "Filling 0 for those 100 drops the mean to 31.5 and creates “0-year-old customers”.", box("a", 38, 24, 58, 16, "900 người: 35", { c: "blue" }), box("b", 82, 24, 24, 16, "100 ô = 0", { c: "red", f: "red" }), txt("t", 50, 46, "trung bình mới = 31,5", { c: "red", s: 3.6 })),
    F("Ô trống là «chưa biết», không phải số 0: bỏ riêng, hoặc điền có lý do và ghi lại.", "A blank means “unknown”, not zero: set aside, or fill with a stated reason.", box("a", 28, 24, 38, 14, "ô trống\n= chưa biết", { c: "green" }), box("b", 72, 24, 38, 14, "số 0\n= đã biết là 0", { c: "mute" })),
  ]),
  "eda-scale": M([
    F("Hai cột: chi tiêu tính bằng triệu đồng (khoảng 0–10), thời gian xem tính bằng giây (khoảng 0–600).", "Two columns: spend in millions (about 0–10), watch time in seconds (about 0–600).", ...pair("p", "chi tiêu\n0 … 10", "thời gian xem\n0 … 600", { ca: "blue", cb: "accent" })),
    F("Khi tính khoảng cách để gom cụm, cột có số lớn chiếm hết tiếng nói; chi tiêu gần như bị bỏ.", "When measuring distances for clustering the big-number column dominates; spend is almost ignored.", bars("b", [10, 600], ["chi tiêu", "thời gian xem"], { c: ["blue", "accent"], max: 600, show: false, base: 46, h: 30, x0: 25, x1: 75 }), txt("t", 50, 8, "khoảng cách do cột giây quyết định", { c: "red", s: 3.2 })),
    F("Đổi sang điểm z: mỗi cột cùng thước, nên có trọng lượng như nhau.", "Switch to z-scores: each column on the same scale carries equal weight.", bars("b", [1, 1], ["chi tiêu (z)", "thời gian (z)"], { c: ["blue", "accent"], max: 2, show: false, base: 46, h: 30, x0: 25, x1: 75 }), txt("t", 50, 8, "cùng một thước", { c: "green", s: 3.4 })),
  ]),
  "eda-bad": M([
    F("Ba giá trị lạ: tỷ lệ form 200%, ngày hẹn năm sau, tuổi −3.", "Three odd values: form rate 200%, appointment date next year, age −3.", ...stack("r", ["tỷ lệ form = 200%", "ngày hẹn: năm sau (file đã khóa)", "tuổi = −3"], { y0: 12, gap: 12, w: 70, c: "red", bad: [0, 1, 2], on: [0, 1, 2] })),
    F("Đó không phải khách lạ (điểm xa) mà là giá trị không được phép: lỗi nhập.", "These are not unusual customers (outliers) but forbidden values: entry errors.", box("a", 28, 24, 38, 14, "điểm xa\n(hợp lệ, hiếm)", { c: "blue" }), box("b", 72, 24, 38, 14, "không hợp lệ\n(sai luật)", { c: "red" })),
    F("Lọc theo luật miền giá trị trước, rồi mới xét điểm xa.", "Filter by domain rules first, then consider outliers.", ...chain("c", ["luật miền giá trị", "lọc giá trị sai", "xét điểm xa"], { y: 26, on: 1 })),
  ]),
  "eda-cat": M([
    F("Bảng có 400 dòng GDN, 550 Facebook, 250 TikTok: tổng 1.200.", "The table has 400 GDN, 550 Facebook, 250 TikTok rows: 1,200 in all.", bars("b", [400, 550, 250], ["GDN", "Facebook", "TikTok"], { c: ["blue", "gold", "accent"], max: 600, base: 46, h: 30, x0: 15, x1: 85 })),
    F("Phần của từng kênh: 33%, 46%, 21%.", "Each channel's share: 33%, 46%, 21%.", bars("b", [33, 46, 21], ["GDN", "Facebook", "TikTok"], { c: ["blue", "gold", "accent"], max: 55, unit: "%", base: 46, h: 30, x0: 15, x1: 85 })),
    F("Chữ không có thứ tự thì thứ tự vẽ cột không mang nghĩa: đếm, đừng nối đường.", "Unordered text means bar order carries no meaning: count, do not connect with a line.", bars("b", [46, 33, 21], ["Facebook", "GDN", "TikTok"], { c: ["gold", "blue", "accent"], max: 55, unit: "%", base: 46, h: 30, x0: 15, x1: 85 }), txt("t", 50, 6, "xếp từ lớn đến nhỏ cho dễ đọc", { c: "mute", s: 3 })),
  ]),
  "eda-ord": M([
    F("Đánh giá 1–5 sao: 40 người cho 5 sao, 30 cho 1 sao, 30 cho 3 sao.", "Ratings 1–5: 40 give 5 stars, 30 give 1 star, 30 give 3 stars.", bars("b", [30, 0, 30, 0, 40], ["1★", "2★", "3★", "4★", "5★"], { c: "gold", max: 45, base: 46, h: 30, x0: 15, x1: 85 })),
    F("Trung bình 3,2 trông như «tạm ổn».", "The mean 3.2 looks like “so-so”.", bars("b", [30, 0, 30, 0, 40], ["1★", "2★", "3★", "4★", "5★"], { c: "gold", max: 45, base: 46, h: 30, x0: 15, x1: 85 }), ln("m", at(3.2, 1, 5, 15, 85), 12, at(3.2, 1, 5, 15, 85), 46, "red", { d: true, w: 0.6 }), txt("t", at(3.2, 1, 5, 15, 85), 8, "trung bình 3,2", { c: "red", s: 3 })),
    F("Thật ra khách chia hai cực: giữ nguyên các bậc, đừng chỉ nhìn một con số.", "In truth customers split into two poles: keep the levels, do not look at a single number.", bars("b", [30, 0, 30, 0, 40], ["1★", "2★", "3★", "4★", "5★"], { c: ["red", "gold", "gold", "gold", "green"], max: 45, base: 46, h: 30, x0: 15, x1: 85 }), txt("t", 50, 8, "hai cực: 1★ và 5★", { c: "red", s: 3.4 })),
  ]),
  "eda-num": M([
    F("Tám tuần: 18, 19, 20, 20, 20, 21, 22 và 120.", "Eight weeks: 18, 19, 20, 20, 20, 21, 22 and 120.", bars("b", [18, 19, 20, 20, 20, 21, 22, 120], ["18", "19", "20", "20", "20", "21", "22", "120"], { c: ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "red"], max: 120, show: false, base: 46, h: 32 })),
    F("Trung vị là 20: chỗ giữa của các tuần.", "The median is 20: the middle of the weeks.", bars("b", [18, 19, 20, 20, 20, 21, 22, 120], ["18", "19", "20", "20", "20", "21", "22", "120"], { c: "blue", max: 120, show: false, base: 46, h: 32 }), ln("m", 6, 46 - (20 / 120) * 32, 94, 46 - (20 / 120) * 32, "green", { d: true, w: 0.6 }), txt("t", 50, 6, "trung vị = 20", { c: "green", s: 3.4 })),
    F("Trung bình bị tuần 120 kéo lên 30: hai số cách nhau xa là dấu hiệu có đuôi.", "The mean is dragged to 30 by week 120: two numbers far apart signal a tail.", bars("b", [18, 19, 20, 20, 20, 21, 22, 120], ["18", "19", "20", "20", "20", "21", "22", "120"], { c: "blue", max: 120, show: false, base: 46, h: 32 }), ln("m", 6, 46 - (20 / 120) * 32, 94, 46 - (20 / 120) * 32, "green", { d: true, w: 0.6 }), ln("a", 6, 46 - (30 / 120) * 32, 94, 46 - (30 / 120) * 32, "red", { d: true, w: 0.6 }), txt("t", 50, 6, "trung bình 30 ≠ trung vị 20", { c: "red", s: 3.4 })),
  ]),
  "eda-r": M([
    F("Các tuần của một tài khoản: chi tiêu càng cao, số form thường càng cao.", "Weeks of one account: more spend usually means more forms.", ...[[2, 6], [3, 10], [4, 9], [5, 15], [6, 14], [7, 22], [8, 16], [9, 24]].map(([x, y], i) => dot(`d${i}`, 12 + x * 8, 48 - y * 1.5, "blue", 1.5))),
    F("r = 0,6 nói hai cột đi cùng nhau, ở mức vừa.", "r = 0.6 says the two columns move together, moderately.", ...[[2, 6], [3, 10], [4, 9], [5, 15], [6, 14], [7, 22], [8, 16], [9, 24]].map(([x, y], i) => dot(`d${i}`, 12 + x * 8, 48 - y * 1.5, "blue", 1.5)), ln("l", 24, 40, 90, 12, "accent", { w: 0.7 }), txt("t", 30, 8, "r = 0,6", { c: "accent", s: 3.6 })),
    F("Một tuần cụ thể vẫn có thể lệch xa đường tóm tắt: r không phải một đường chắc chắn.", "A specific week can still sit far from the summary line: r is not a certain line.", ...[[2, 6], [3, 10], [4, 9], [5, 15], [6, 14], [7, 22], [8, 16], [9, 24]].map(([x, y], i) => dot(`d${i}`, 12 + x * 8, 48 - y * 1.5, i === 6 ? "red" : "blue", 1.5)), ln("l", 24, 40, 90, 12, "accent", { w: 0.7 }), ring("r", 12 + 8 * 8, 48 - 16 * 1.5, 4, "red")),
  ]),
  "eda-cause": M([
    F("Tuần nào số form tăng thì đơn kem gần cửa hàng cũng tăng.", "Weeks with more forms also have more cream orders near the shop.", ...[[1, 2], [2, 3], [3, 3.5], [4, 5], [5, 6]].map(([x, y], i) => dot(`d${i}`, 20 + x * 12, 46 - y * 5, "green", 1.6)), txt("t", 50, 8, "form ↑  kem ↑ (đi cùng nhau)", { c: "green", s: 3.4 })),
    F("Tắt kem không phải kế hoạch media: hai thứ không kéo nhau.", "Switching off cream is not a media plan: the two do not drag each other.", box("a", 28, 24, 38, 14, "form ↑", { c: "blue" }), box("b", 72, 24, 38, 14, "kem ↑", { c: "gold" }), arr("x", 48, 24, 52, 24, "red", { d: true }), txt("t", 50, 46, "mũi tên nhân quả: chưa có", { c: "red", s: 3.4 })),
    F("Cả hai cùng tăng theo mùa lễ: một nguyên nhân thứ ba.", "Both rise with the holiday season: a third cause.", box("m", 50, 10, 40, 10, "mùa lễ", { f: "accent", c: "accent" }), box("a", 28, 34, 30, 12, "form ↑", { c: "blue" }), box("b", 72, 34, 30, 12, "kem ↑", { c: "gold" }), arr("x", 42, 16, 30, 28, "accent"), arr("y", 58, 16, 70, 28, "accent")),
  ]),
  "eda-group": M([
    F("Số form mỗi tuần: GDN 38, 40, 42, 40 và Facebook 10, 20, 30, 100.", "Weekly forms: GDN 38, 40, 42, 40 and Facebook 10, 20, 30, 100.", ...[38, 40, 42, 40].map((v, i) => dot(`g${i}`, 14 + i * 7, 46 - (v / 100) * 36, "blue", 1.6)), ...[10, 20, 30, 100].map((v, i) => dot(`f${i}`, 62 + i * 7, 46 - (v / 100) * 36, "gold", 1.6))),
    F("Cả hai kênh đều có trung bình 40.", "Both channels have a mean of 40.", ...[38, 40, 42, 40].map((v, i) => dot(`g${i}`, 14 + i * 7, 46 - (v / 100) * 36, "blue", 1.6)), ...[10, 20, 30, 100].map((v, i) => dot(`f${i}`, 62 + i * 7, 46 - (v / 100) * 36, "gold", 1.6)), ln("m1", 10, 46 - 14.4, 44, 46 - 14.4, "blue", { d: true, w: 0.5 }), ln("m2", 58, 46 - 14.4, 92, 46 - 14.4, "gold", { d: true, w: 0.5 }), txt("t", 50, 6, "trung bình = 40 ở cả hai", { c: "mute", s: 3.2 })),
    F("GDN khít, Facebook rất rộng: so nhóm phải nhìn cả độ rộng, không chỉ trung bình.", "GDN is tight, Facebook very wide: comparing groups needs spread, not just means.", ...[38, 40, 42, 40].map((v, i) => dot(`g${i}`, 14 + i * 7, 46 - (v / 100) * 36, "blue", 1.6)), ...[10, 20, 30, 100].map((v, i) => dot(`f${i}`, 62 + i * 7, 46 - (v / 100) * 36, "gold", 1.6)), box("a", 28, 8, 30, 8, "GDN: khít", { c: "blue", s: 3 }), box("b", 76, 8, 30, 8, "Facebook: rộng", { c: "red", s: 3 })),
  ]),
};
