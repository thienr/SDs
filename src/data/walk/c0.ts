import type { Walk } from "@/data/walk/pilot";

/** C0: hiểu việc, giải quyết vấn đề, Excel. Tháng 1 ở Lotus Spa. */
export const c0Walks: Record<string, Walk> = {
  "c0-order": {
    vi: {
      story: "Tháng 1, Lotus Spa (3 chi nhánh: Quận 1, Quận 3, Thủ Đức). Chị Lan, chủ chuỗi, gọi bạn vào phòng: «Form đặt hẹn tháng 12 giảm, em xem giúp chị.» Đây là việc đầu tiên của bạn, và cả năm tới bạn sẽ đi cùng câu chuyện này.",
      words: [
        ["Giáo trình", "Danh sách các khóa học xếp theo thứ tự, khóa sau dùng kiến thức khóa trước."],
        ["Phụ thuộc", "Một kỹ năng cần kỹ năng khác làm nền. Ví dụ không đọc được bảng thì không tính được trung bình."],
      ],
      problem: "Form tháng 11 là 220, tháng 12 là 180. Chị Lan muốn biết vì sao giảm và nên làm gì. Bạn cần những kỹ năng nào, theo thứ tự nào?",
      steps: [
        ["Đo mức giảm trước", "(220 − 180) ÷ 220 = 40 ÷ 220 ≈ 18%. Việc đầu tiên là hiểu đúng câu hỏi, đây là khóa C0."],
        ["Lấy và làm sạch dữ liệu", "Mở file quảng cáo bằng Excel (C0) rồi Python (C1). Không có dữ liệu sạch thì mọi con số sau đều lung lay."],
        ["Mô tả rồi suy luận", "Tính trung bình, độ phân tán, rồi hỏi «mức giảm này là ngẫu nhiên hay thật?». Đây là thống kê (C2)."],
        ["Dự đoán", "Cho hội viên nào sắp rời và form tuần sau (C3, C4)."],
        ["Trình bày và quyết định", "Vẽ biểu đồ, kể cho chị Lan nghe, rồi đề xuất việc cần làm (C5, C6)."],
      ],
      say: "Mỗi bước dựa vào bước trước. Đảo thứ tự, ví dụ dự đoán khi chưa hiểu dữ liệu, thì được một con số nhưng không biết nó đúng hay sai. Sổ này xếp bài theo đúng thứ tự đó, nên học từ trên xuống.",
      check: ["Nếu bạn bỏ bước «làm sạch dữ liệu» rồi chạy ngay mô hình, rủi ro chính là gì?", "Mô hình học từ dữ liệu lỗi (ô trống bị coi là 0, số bị lưu thành chữ) nên cho ra kết quả trông hợp lý nhưng sai, và bạn không có cách phát hiện."],
    },
    en: {
      story: "January, Lotus Spa (3 branches: District 1, District 3, Thu Duc). Ms. Lan, the owner, calls you into her office: “Booking forms dropped in December, please look into it.” This is your first job, and you will follow this story all year.",
      words: [
        ["Curriculum", "A list of courses in order, where each later course builds on the earlier ones."],
        ["Dependency", "A skill that needs another skill as its base. You cannot compute an average if you cannot read the table."],
      ],
      problem: "Forms were 220 in November and 180 in December. Ms. Lan wants to know why they dropped and what to do. Which skills do you need, and in what order?",
      steps: [
        ["Measure the drop first", "(220 − 180) ÷ 220 = 40 ÷ 220 ≈ 18%. The first job is to understand the question correctly; this is course C0."],
        ["Get and clean the data", "Open the ads file in Excel (C0) and then Python (C1). Without clean data every later number wobbles."],
        ["Describe, then infer", "Compute the average and the spread, then ask “is this drop random or real?”. This is statistics (C2)."],
        ["Predict", "Which members are about to leave, and next week's forms (C3, C4)."],
        ["Present and decide", "Draw charts, tell Ms. Lan the story, then propose what to do (C5, C6)."],
      ],
      say: "Each step relies on the one before. Swap the order, for example predicting before understanding the data, and you get a number without knowing whether it is right. This notebook orders the lessons that way, so study from top to bottom.",
      check: ["If you skip “clean the data” and run a model straight away, what is the main risk?", "The model learns from faulty data (blank cells treated as 0, numbers stored as text), so it gives results that look reasonable but are wrong, and you have no way to notice."],
    },
  },
  "c0-read": {
    vi: {
      story: "Ngày đầu, bạn mở sổ học để chuẩn bị. Mỗi thẻ trong sổ là một ý nhỏ. Bạn thử đọc một thẻ bằng chính con số chị Lan vừa đưa: form giảm từ 220 xuống 180.",
      words: [
        ["Thẻ", "Một trang giải thích đúng một ý, kèm một hình và một câu nói cho đúng."],
        ["Phần trăm giảm", "Mức giảm chia cho giá trị lúc đầu: (trước − sau) ÷ trước."],
      ],
      problem: "Thẻ nói: «phần trăm giảm = (trước − sau) ÷ trước». Hình vẽ hai cột 220 và 180. Bạn có đọc đúng thẻ này không?",
      steps: [
        ["Đọc định nghĩa", "Phần trăm giảm = (trước − sau) ÷ trước. «Trước» là 220, «sau» là 180."],
        ["Nhìn hình", "Cột đầu cao 220, cột sau thấp hơn 180. Khoảng chênh giữa hai đỉnh là 40."],
        ["Đối chiếu định nghĩa với hình", "40 ÷ 220 ≈ 0,18, tức 18%. Chênh lệch trong hình khớp với tử số của công thức."],
        ["Dừng khi khớp", "Định nghĩa và hình đã nói cùng một điều nên bạn có thể chuyển thẻ sau, không cần xem hết gì thêm."],
      ],
      say: "Một thẻ không phải một video phải xem hết. Khi lời định nghĩa khớp với hình và con số bạn tự tính ra, bạn đã hiểu thẻ đó. Nếu chưa khớp thì quay lại đọc «Nói cho dễ».",
      check: ["Nếu bạn lấy (220 − 180) ÷ 180 thì ra bao nhiêu và vì sao sai?", "40 ÷ 180 ≈ 22%. Sai vì mẫu số phải là giá trị lúc đầu (220), không phải giá trị sau. Mẫu số sai thì mức giảm bị thổi phồng."],
    },
    en: {
      story: "On day one you open the notebook to get ready. Each card in it is one small idea. You try reading one card with the exact numbers Ms. Lan just gave you: forms fell from 220 to 180.",
      words: [
        ["Card", "A page that explains exactly one idea, with a picture and a precise sentence."],
        ["Percentage drop", "The drop divided by the starting value: (before − after) ÷ before."],
      ],
      problem: "The card says: “percentage drop = (before − after) ÷ before”. The picture shows two bars, 220 and 180. Are you reading the card correctly?",
      steps: [
        ["Read the definition", "Percentage drop = (before − after) ÷ before. “Before” is 220, “after” is 180."],
        ["Look at the picture", "The first bar is 220 tall, the second is shorter at 180. The gap between the tops is 40."],
        ["Match definition to picture", "40 ÷ 220 ≈ 0.18, or 18%. The gap in the picture matches the numerator of the formula."],
        ["Stop when they match", "The definition and the picture say the same thing, so you can move to the next card without watching anything more."],
      ],
      say: "A card is not a video you must watch to the end. When the definition matches the picture and the number you computed yourself, you have understood the card. If it does not match, go back and read “In plain words”.",
      check: ["If you computed (220 − 180) ÷ 180, what do you get and why is it wrong?", "40 ÷ 180 ≈ 22%. It is wrong because the denominator must be the starting value (220), not the later one. A wrong denominator inflates the drop."],
    },
  },
  "crisp-biz": {
    vi: {
      story: "Tuần đầu tiên. Chị Lan nói «làm gì đó đi». Trước khi mở bất kỳ file nào, bạn phải biến yêu cầu mơ hồ này thành một câu hỏi nghiệp vụ mà dữ liệu có thể trả lời.",
      words: [
        ["CRISP-DM", "Quy trình chuẩn cho một dự án dữ liệu, có sáu bước. Bước đầu là hiểu nghiệp vụ."],
        ["Câu hỏi nghiệp vụ", "Một câu cho biết ai quyết định, quyết định gì, và khi nào."],
        ["CPA", "Chi phí cho mỗi form: tổng chi quảng cáo chia cho số form."],
      ],
      problem: "Chị Lan nói: «Form giảm, làm gì đó đi». Bạn hỏi lại và biết được: ngân sách quảng cáo 15 triệu mỗi tuần chia cho Google Display (GDN), Meta và TikTok; chị muốn quyết định có chuyển ngân sách giữa các kênh không trước ngày 31/1. Hãy viết câu hỏi nghiệp vụ.",
      steps: [
        ["Ai quyết định", "Chị Lan quyết định, Thảo thực hiện thay đổi ngân sách."],
        ["Quyết định gì", "Có chuyển một phần trong 15 triệu mỗi tuần từ kênh này sang kênh khác hay không."],
        ["Khi nào", "Trước 31/1, để kịp kỳ ngân sách tháng 2."],
        ["Chọn thước đo", "Số form mỗi tuần và CPA. Hiện tại 15 triệu ÷ 50 form = 300 nghìn mỗi form."],
        ["Viết thành một câu", "«Trước 31/1, chị Lan có nên chuyển ngân sách giữa GDN, Meta và TikTok để tăng form mỗi tuần mà CPA không vượt 300 nghìn không?»"],
      ],
      say: "Câu «form giảm» chưa trả lời được vì không ai biết phải đo gì và để làm gì. Câu cuối thì rõ: có người quyết định, có lựa chọn, có hạn, có thước đo. Từ đây mọi file và mọi phép tính đều phục vụ đúng câu đó.",
      check: ["Câu «Tăng traffic website lên 20%» có phải một câu hỏi nghiệp vụ tốt không?", "Chưa. Nó không nói ai quyết định điều gì và traffic không chắc dẫn đến form. Một câu tốt phải nối với một quyết định cụ thể và một thước đo cho quyết định đó."],
    },
    en: {
      story: "The first week. Ms. Lan says “do something”. Before opening any file, you must turn this vague request into a business question the data can answer.",
      words: [
        ["CRISP-DM", "The standard process for a data project, in six steps. The first is business understanding."],
        ["Business question", "A sentence that says who decides, what they decide, and by when."],
        ["CPA", "Cost per form: total ad spend divided by the number of forms."],
      ],
      problem: "Ms. Lan says: “Forms dropped, do something”. You ask follow-ups and learn: the ad budget is 15 million per week split among Google Display (GDN), Meta and TikTok; she wants to decide whether to shift budget between channels before 31 January. Write the business question.",
      steps: [
        ["Who decides", "Ms. Lan decides, Thao carries out the budget change."],
        ["What they decide", "Whether to shift part of the 15 million per week from one channel to another."],
        ["By when", "Before 31 January, in time for February's budget cycle."],
        ["Choose the measure", "Forms per week and CPA. Right now 15 million ÷ 50 forms = 300 thousand per form."],
        ["Write it as one sentence", "“By 31 January, should Ms. Lan shift budget among GDN, Meta and TikTok to raise forms per week without CPA going above 300 thousand?”"],
      ],
      say: "“Forms dropped” cannot be answered because nobody knows what to measure or why. The final sentence is clear: a decider, a choice, a deadline, a measure. From here every file and calculation serves that exact sentence.",
      check: ["Is “raise website traffic by 20%” a good business question?", "Not yet. It does not say who decides what, and traffic does not necessarily lead to forms. A good question ties to one specific decision and a measure for that decision."],
    },
  },
  "crisp-data": {
    vi: {
      story: "Có câu hỏi nghiệp vụ rồi, Thảo gửi bạn file «ads_export.xlsx» chứa 12 tuần. Trước khi tin nó, bạn kiểm xem file có đo được đúng quyết định của chị Lan không.",
      words: [
        ["Hiểu dữ liệu", "Kiểm tra cột nào có, đo cái gì, và có đủ để trả lời câu hỏi nghiệp vụ hay không."],
        ["utm_source", "Nhãn gắn vào đường dẫn quảng cáo để biết form đến từ kênh nào."],
      ],
      problem: "Câu hỏi: nên chuyển ngân sách giữa GDN, Meta, TikTok không (đo bằng form và CPA theo từng kênh). File có 12 tuần với các cột: tuần, kênh, chi phí, và tổng form của cả ba kênh. Dùng file này được chưa?",
      steps: [
        ["Liệt kê điều quyết định cần", "Cần CPA từng kênh = chi phí kênh ÷ form kênh."],
        ["Đối chiếu từng cột", "Chi phí có theo kênh (3 kênh × 12 tuần = 36 dòng). Form chỉ có tổng cả ba kênh (12 dòng)."],
        ["Tìm chỗ thiếu", "Không có form theo từng kênh nên không chia được. Ví dụ tuần 1 tổng form 50 nhưng chưa biết GDN được bao nhiêu."],
        ["Tìm nguồn bổ sung", "Hệ thống form có trường utm_source ghi kênh của mỗi form. Xin thêm xuất dữ liệu đó."],
      ],
      say: "File đầy đặn 36 dòng nhưng vẫn chưa trả lời được câu hỏi, vì thiếu đúng một cột: form theo kênh. Phát hiện điều này bây giờ rẻ hơn nhiều so với phát hiện sau khi đã vẽ xong biểu đồ.",
      check: ["Sau khi có form theo kênh (GDN 18, Meta 20, TikTok 12 mỗi tuần), CPA của Meta là bao nhiêu nếu chi 5 triệu?", "5 triệu ÷ 20 form = 250 nghìn mỗi form."],
    },
    en: {
      story: "With the business question settled, Thao sends you “ads_export.xlsx” covering 12 weeks. Before trusting it, you check whether the file measures Ms. Lan's actual decision.",
      words: [
        ["Data understanding", "Checking which columns exist, what they measure, and whether they are enough to answer the business question."],
        ["utm_source", "A tag added to an ad link so you know which channel a form came from."],
      ],
      problem: "The question: should budget shift among GDN, Meta, TikTok (measured by forms and CPA per channel). The file has 12 weeks with columns: week, channel, spend, and total forms across all three channels. Can you use it yet?",
      steps: [
        ["List what the decision needs", "You need CPA per channel = channel spend ÷ channel forms."],
        ["Check each column", "Spend is per channel (3 channels × 12 weeks = 36 rows). Forms are only the total across the three channels (12 rows)."],
        ["Find the gap", "There are no forms per channel, so you cannot divide. For week 1 total forms are 50 but you do not know how many GDN got."],
        ["Find another source", "The form system has a utm_source field recording each form's channel. Ask for that export too."],
      ],
      say: "The file looks full at 36 rows yet still cannot answer the question, because exactly one column is missing: forms per channel. Discovering this now is far cheaper than discovering it after the charts are drawn.",
      check: ["Once you have forms per channel (GDN 18, Meta 20, TikTok 12 a week), what is Meta's CPA if it spends 5 million?", "5 million ÷ 20 forms = 250 thousand per form."],
    },
  },
  "crisp-prep": {
    vi: {
      story: "Có thêm file form theo kênh. Trước khi tính CPA, bạn làm sạch: ở file chi phí, TikTok tuần 5 bị để trống. Cách xử lý ô trống này sẽ làm CPA đúng hay sai.",
      words: [
        ["Chuẩn bị dữ liệu", "Đổi bảng để câu hỏi đọc được: lọc có chủ đích, điền chỗ trống và ghi lại cách điền, không xóa chỉ vì số trông lạ."],
        ["Ô trống", "Chưa có số liệu. Khác với số 0, tức là đã đo và chi bằng 0."],
      ],
      problem: "TikTok có chi phí 4 triệu mỗi tuần ở 11 tuần, riêng tuần 5 để trống. Form TikTok mỗi tuần đều là 12 (12 tuần, tổng 144). Hãy tính CPA TikTok bằng hai cách xử lý ô trống và so sánh.",
      steps: [
        ["Cách 1: coi ô trống là 0", "Tổng chi = 4 × 11 = 44 triệu. Chia cho 144 form: 44 ÷ 144 ≈ 0,306 triệu, tức 306 nghìn."],
        ["Cách 2: bỏ tuần thiếu ra khỏi cả hai vế", "Dùng 11 tuần có chi phí: chi 44 triệu, form 12 × 11 = 132. 44 ÷ 132 = 0,333 triệu, tức 333 nghìn."],
        ["So sánh", "306 nghìn so với 333 nghìn, chênh khoảng 27 nghìn mỗi form. Cách 1 làm TikTok trông rẻ hơn thật."],
        ["Chọn cách đúng và ghi lại", "Cách 2, vì tuần 5 thật ra có chi tiêu (chỉ chưa ghi), nên coi là 0 là sai. Ghi vào sổ: «bỏ tuần 5 của TikTok khi tính CPA»."],
      ],
      say: "Chỉ một ô trống đã làm CPA lệch 27 nghìn mỗi form, đủ làm TikTok trông tốt ngang Meta (250 nghìn) hơn thực tế. Chuẩn bị dữ liệu nghĩa là chọn cách xử lý có lý do và ghi lại, không phải tự động điền số.",
      check: ["Vì sao không xóa luôn dòng tuần 5 của TikTok khỏi file?", "Xóa làm mất cả 12 form của tuần đó khỏi các tính toán khác (ví dụ tổng form tuần). Chỉ cần loại tuần 5 khi tính CPA TikTok, các chỗ khác vẫn dùng."],
    },
    en: {
      story: "The per-channel form file arrives. Before computing CPA you clean up: in the spend file TikTok's week 5 is blank. How you handle this blank decides whether CPA is right or wrong.",
      words: [
        ["Data preparation", "Reshaping the table so the question can be read: filter on purpose, fill gaps and record how, never delete just because a number looks odd."],
        ["Blank cell", "No figure yet. Different from the number 0, which means it was measured and the spend was zero."],
      ],
      problem: "TikTok spends 4 million a week in 11 weeks; week 5 alone is blank. TikTok forms are 12 every week (12 weeks, total 144). Compute TikTok's CPA with two ways of handling the blank and compare.",
      steps: [
        ["Way 1: treat the blank as 0", "Total spend = 4 × 11 = 44 million. Divide by 144 forms: 44 ÷ 144 ≈ 0.306 million, i.e. 306 thousand."],
        ["Way 2: drop the missing week from both sides", "Use the 11 weeks with spend: spend 44 million, forms 12 × 11 = 132. 44 ÷ 132 = 0.333 million, i.e. 333 thousand."],
        ["Compare", "306 thousand versus 333 thousand, a gap of about 27 thousand per form. Way 1 makes TikTok look cheaper than it is."],
        ["Pick the right way and record it", "Way 2, because week 5 did have spend (it just was not recorded), so treating it as 0 is wrong. Write in the log: “dropped TikTok week 5 when computing CPA”."],
      ],
      say: "One blank cell shifted CPA by 27 thousand per form, enough to make TikTok look closer to Meta (250 thousand) than it really is. Preparing data means choosing a handling with a reason and recording it, not filling in numbers automatically.",
      check: ["Why not simply delete TikTok's week 5 row from the file?", "Deleting also removes that week's 12 forms from other calculations (for example weekly total forms). You only need to leave week 5 out when computing TikTok's CPA; elsewhere it is still used."],
    },
  },
  "crisp-ship": {
    vi: {
      story: "CPA đã sạch: Meta 250 nghìn, GDN và TikTok khoảng 333 nghìn. Giờ là bước cuối của vòng đầu: đưa kết quả vào quyết định thật của chị Lan và hẹn ngày đo lại.",
      words: [
        ["Triển khai", "Đưa kết quả vào công việc thật rồi theo dõi, không chỉ nộp một báo cáo."],
        ["Giả định", "Điều ta tạm tin là đúng, ví dụ CPA vẫn giữ nguyên khi chi thêm."],
      ],
      problem: "Chị Lan đồng ý chuyển 1 triệu mỗi tuần từ GDN (CPA 333 nghìn) sang Meta (CPA 250 nghìn) trong 4 tuần. Kết quả mong đợi là gì, và theo dõi bằng gì?",
      steps: [
        ["Form mất ở GDN", "1 triệu ÷ 333 nghìn ≈ 3 form mỗi tuần."],
        ["Form thêm ở Meta", "1 triệu ÷ 250 nghìn = 4 form mỗi tuần."],
        ["Mức tăng ròng", "4 − 3 = 1 form mỗi tuần, tức khoảng 4 form sau 4 tuần. Số này khiêm tốn."],
        ["Gọi tên giả định", "Tính trên giả định CPA không đổi khi chi thêm. Thực tế chi thêm thường làm CPA tăng."],
        ["Hẹn đo lại", "Mỗi tuần đếm form theo kênh bằng cùng cách (utm_source), so với mức 50 form và CPA 300 nghìn hiện tại."],
      ],
      say: "Triển khai không phải là «đã gửi báo cáo». Đó là một thay đổi cụ thể (chuyển 1 triệu), một kết quả dự kiến (thêm khoảng 1 form mỗi tuần) và một lần đo lại đã hẹn. Nếu số đo lại khác nhiều, ta quay lại hiểu nghiệp vụ và dữ liệu.",
      check: ["Nếu sau 4 tuần form theo tuần chỉ còn 49, kết luận nào đúng?", "Chưa kết luận được kênh nào kém. Dự kiến khiêm tốn là +1 form, và 49 nằm trong mức dao động bình thường. Cần xem CPA từng kênh, và có thể giả định «CPA không đổi» đã sai. Đây là chỗ thống kê (C2) giúp."],
    },
    en: {
      story: "CPA is clean: Meta 250 thousand, GDN and TikTok about 333 thousand. Now comes the last step of the first loop: put the result into Ms. Lan's real decision and book a date to measure again.",
      words: [
        ["Deployment", "Putting the result into real work and then monitoring it, not just handing in a report."],
        ["Assumption", "Something we temporarily trust, for example that CPA stays the same when spend increases."],
      ],
      problem: "Ms. Lan agrees to shift 1 million per week from GDN (CPA 333 thousand) to Meta (CPA 250 thousand) for 4 weeks. What result do you expect, and how do you monitor it?",
      steps: [
        ["Forms lost at GDN", "1 million ÷ 333 thousand ≈ 3 forms per week."],
        ["Forms gained at Meta", "1 million ÷ 250 thousand = 4 forms per week."],
        ["Net gain", "4 − 3 = 1 form per week, about 4 forms after 4 weeks. A modest number."],
        ["Name the assumption", "This assumes CPA does not change when spend rises. In practice more spend often raises CPA."],
        ["Book the re-measure", "Each week count forms by channel in the same way (utm_source) and compare with today's 50 forms and 300 thousand CPA."],
      ],
      say: "Deployment is not “the report was sent”. It is a concrete change (shift 1 million), an expected result (about 1 more form a week) and a booked re-measure. If the re-measured numbers differ a lot, you go back to business understanding and the data.",
      check: ["If after 4 weeks weekly forms are only 49, which conclusion is right?", "You cannot yet conclude a channel is worse. The expected gain was a modest +1 form, and 49 is within normal wobble. Look at CPA per channel, and the assumption “CPA unchanged” may have been wrong. This is where statistics (C2) helps."],
    },
  },
  "ps-open": {
    vi: {
      story: "Chị Lan hỏi tiếp: «Em định làm theo trình tự nào?» Bạn dùng sáu bước giải quyết vấn đề, chạy thử trên chính câu chuyện form giảm.",
      words: [
        ["Vấn đề", "Một khoảng cách giữa tình hình hiện tại và tình hình mong muốn, kèm một quyết định phải đưa ra."],
        ["Sáu bước", "Loại vấn đề, sự thật và ý kiến, khung SMART và ưu tiên, nguyên nhân, phương án và hệ quả, thực hiện và đo."],
      ],
      problem: "Form tháng 11 là 220, tháng 12 là 180. Chị Lan muốn một việc làm cụ thể trước 31/1. Đi qua sáu bước trên tình huống này.",
      steps: [
        ["1. Loại vấn đề", "Đây là vấn đề lựa chọn: «có chuyển ngân sách giữa các kênh không», không chỉ «vì sao giảm»."],
        ["2. Sự thật và ý kiến", "Sự thật: 220 xuống 180, giảm 18%. Ý kiến: «quảng cáo kém». Hai thứ ghi ở hai cột."],
        ["3. Mục tiêu SMART và ưu tiên", "Đến 31/1, form từ 50 lên 54 mỗi tuần (tăng 8%) với CPA không vượt 300 nghìn. Chỉ nhận việc phục vụ mục tiêu này."],
        ["4. Nguyên nhân", "Tìm nguyên nhân mà bạn thay đổi được trong 4 tuần, ví dụ lỗi trang đích trên điện thoại."],
        ["5. Phương án và hệ quả", "Mỗi phương án viết kèm cái được và cái mất, tính trên cùng thước đo."],
        ["6. Thực hiện và đo", "Làm xong thì đếm lại form bằng đúng cách đã viết ở bước 3."],
      ],
      say: "Mỗi bước trả lời một câu hỏi riêng, và bước sau dùng đầu ra của bước trước. «Form giảm» chỉ trở thành vấn đề giải được khi nó là «có chuyển ngân sách trước 31/1 không», và bước 3 cho nó một thước đo để biết khi nào xong.",
      check: ["Trong sáu bước, bước nào dễ bị bỏ nhất và vì sao quan trọng?", "Bước 6, đo lại. Nếu không đo lại bằng đúng câu đã viết thì không biết giải pháp có hiệu lực không, chỉ có cảm giác là đã làm."],
    },
    en: {
      story: "Ms. Lan asks next: “In what order will you work?” You use the six problem-solving steps and test them on the very story of falling forms.",
      words: [
        ["Problem", "A gap between the current situation and the desired one, together with a decision that has to be made."],
        ["Six steps", "Problem type, facts versus opinions, SMART goal and priority, cause, options and consequences, execute and measure."],
      ],
      problem: "Forms were 220 in November and 180 in December. Ms. Lan wants one concrete action before 31 January. Walk the six steps through this situation.",
      steps: [
        ["1. Problem type", "This is a choice problem: “shift budget between channels or not”, not just “why did it drop”."],
        ["2. Facts and opinions", "Fact: 220 down to 180, a drop of 18%. Opinion: “the ads are bad”. The two go in separate columns."],
        ["3. SMART goal and priority", "By 31 January, forms rise from 50 to 54 a week (up 8%) with CPA no higher than 300 thousand. Only take on work that serves this goal."],
        ["4. Cause", "Look for a cause you can change within 4 weeks, for example a landing-page fault on phones."],
        ["5. Options and consequences", "Write each option with what it gains and costs, on the same measure."],
        ["6. Execute and measure", "Once done, count forms again the exact way written in step 3."],
      ],
      say: "Each step answers its own question, and the next step uses the previous output. “Forms dropped” only becomes a solvable problem when it is “shift budget before 31 January or not”, and step 3 gives it a measure so you know when you are done.",
      check: ["Of the six steps, which is easiest to skip and why does it matter?", "Step 6, measuring again. Without re-measuring with the exact sentence you wrote, you cannot tell whether the fix worked; you only have a feeling that you did something."],
    },
  },
  "ps-type": {
    vi: {
      story: "Bước 1 của sáu bước. Trong cuộc họp, ba người hỏi ba câu khác nhau về cùng chuyện form giảm. Bạn phải gọi đúng loại từng câu trước khi chọn công cụ.",
      words: [
        ["Vấn đề chẩn đoán", "Câu hỏi «vì sao». Kết quả là một lời giải thích."],
        ["Vấn đề lựa chọn", "Câu hỏi «chọn cái nào». Kết quả là một quyết định."],
        ["Vấn đề vận hành", "Câu hỏi «làm thế nào cho đều, cho ổn định». Kết quả là một quy trình."],
      ],
      problem: "Ba câu trong cuộc họp: (a) «Vì sao form tháng 12 giảm 18%?» (b) «Có chuyển 1 triệu mỗi tuần từ GDN sang Meta không?» (c) «Làm sao để form mỗi tuần không lên xuống từ 30 đến 70?». Gọi tên loại từng câu.",
      steps: [
        ["Câu (a)", "Hỏi «vì sao», nên là vấn đề chẩn đoán. Đầu ra là một nguyên nhân."],
        ["Câu (b)", "Hỏi «chọn hay không, chọn cái nào», nên là vấn đề lựa chọn. Đầu ra là một quyết định kèm con số so sánh."],
        ["Câu (c)", "Hỏi «làm sao cho đều», nên là vấn đề vận hành. Đầu ra là một quy trình, ví dụ lịch kiểm tra hằng ngày."],
        ["Chọn công cụ theo loại", "Chẩn đoán dùng chia nhỏ và so sánh. Lựa chọn dùng CPA và hệ quả. Vận hành dùng biểu đồ kiểm soát."],
      ],
      say: "Chị Lan thật sự cần câu (b), vì có một hạn (31/1) và một số tiền để chia. Nếu bạn trả lời câu (a) bằng cả tuần phân tích, bạn có một nguyên nhân đẹp nhưng chưa có quyết định nào để chị bấm.",
      check: ["Bạn tìm ra nguyên nhân là «lỗi trang đích» rồi kết luận «tắt TikTok». Sai ở đâu?", "Nguyên nhân (chẩn đoán) trả lời «vì sao», không tự nói nên làm gì. Từ «lỗi trang đích» đúng ra dẫn tới «sửa trang», không phải «tắt kênh». Phải đi tiếp sang bước lựa chọn phương án."],
    },
    en: {
      story: "Step 1 of the six. In the meeting, three people ask three different questions about the same drop in forms. You must name each question's type before choosing a tool.",
      words: [
        ["Diagnostic problem", "A “why” question. The result is an explanation."],
        ["Choice problem", "A “which one” question. The result is a decision."],
        ["Operational problem", "A “how do we keep it steady” question. The result is a process."],
      ],
      problem: "Three questions in the meeting: (a) “Why did December forms drop 18%?” (b) “Should we shift 1 million a week from GDN to Meta?” (c) “How can weekly forms stop swinging between 30 and 70?”. Name each question's type.",
      steps: [
        ["Question (a)", "It asks “why”, so it is a diagnostic problem. The output is a cause."],
        ["Question (b)", "It asks “whether, which one”, so it is a choice problem. The output is a decision with comparison numbers."],
        ["Question (c)", "It asks “how to keep it steady”, so it is an operational problem. The output is a process, for example a daily check schedule."],
        ["Pick tools by type", "Diagnosis uses breaking down and comparing. Choice uses CPA and consequences. Operation uses a control chart."],
      ],
      say: "Ms. Lan truly needs question (b), because there is a deadline (31 January) and money to split. If you answer (a) with a week of analysis, you hold a nice cause but no decision for her to press.",
      check: ["You find the cause is a “landing-page fault” and then conclude “switch off TikTok”. What is wrong?", "A cause (diagnosis) answers “why”; it does not by itself say what to do. “Landing-page fault” properly leads to “fix the page”, not “switch off a channel”. You must go on to the options step."],
    },
  },
  "ps-fact": {
    vi: {
      story: "Trong cuộc họp, Thảo nói: «TikTok yếu lắm». Bạn tách câu đó thành sự thật có thể đo và ý kiến cần một ngưỡng.",
      words: [
        ["Sự thật", "Một phát biểu kiểm tra được trên dữ liệu đã chỉ rõ."],
        ["Ý kiến", "Một đánh giá, ví dụ «yếu», «tốt». Cần một ngưỡng thì mới kiểm tra được."],
        ["Tỷ lệ form", "Số form chia cho số click."],
      ],
      problem: "Tuần này: GDN 900 click, 18 form. Meta 800 click, 20 form. TikTok 800 click, 12 form. Thảo nói «TikTok yếu». Biến câu đó thành sự thật có thể kiểm tra.",
      steps: [
        ["Tính tỷ lệ form mỗi kênh", "GDN: 18 ÷ 900 = 2,0%. Meta: 20 ÷ 800 = 2,5%. TikTok: 12 ÷ 800 = 1,5%."],
        ["Ghi sự thật ở một cột", "«Tuần này tỷ lệ form của TikTok là 1,5%, thấp hơn GDN (2,0%) và Meta (2,5%)»."],
        ["Ghi ý kiến ở cột còn lại", "«TikTok yếu». Chưa kiểm tra được vì «yếu» chưa có ngưỡng."],
        ["Viết ngưỡng để ý kiến thành kiểm tra được", "«Yếu» = tỷ lệ form dưới 2,0% (mức trung bình của cả ba kênh: 50 ÷ 2.500 = 2,0%). TikTok 1,5% đạt điều kiện này."],
      ],
      say: "Bây giờ cả hai bên cùng nhìn một con số: TikTok thấp hơn mức trung bình 2,0%. Thảo có thể đúng, nhưng chỉ sau khi viết ngưỡng. Nếu ngưỡng là 1,0% thì kết luận ngược lại. Con số không tự bấm nút tắt kênh, đó vẫn là quyết định.",
      check: ["Với ngưỡng «yếu = dưới 2,0%», GDN có yếu không?", "Không. GDN đúng 2,0%, không dưới 2,0%. Đây là lý do phải viết rõ «dưới» hay «không trên»."],
    },
    en: {
      story: "In the meeting, Thao says: “TikTok is really weak”. You split that sentence into a measurable fact and an opinion that needs a threshold.",
      words: [
        ["Fact", "A statement that can be checked against clearly named data."],
        ["Opinion", "A judgement, for example “weak” or “good”. It needs a threshold before it can be checked."],
        ["Form rate", "Forms divided by clicks."],
      ],
      problem: "This week: GDN 900 clicks, 18 forms. Meta 800 clicks, 20 forms. TikTok 800 clicks, 12 forms. Thao says “TikTok is weak”. Turn that into something checkable.",
      steps: [
        ["Compute each channel's form rate", "GDN: 18 ÷ 900 = 2.0%. Meta: 20 ÷ 800 = 2.5%. TikTok: 12 ÷ 800 = 1.5%."],
        ["Put the fact in one column", "“This week TikTok's form rate is 1.5%, lower than GDN (2.0%) and Meta (2.5%)”."],
        ["Put the opinion in the other column", "“TikTok is weak”. Not checkable yet because “weak” has no threshold."],
        ["Write a threshold so the opinion can be checked", "“Weak” = form rate below 2.0% (the three-channel average: 50 ÷ 2,500 = 2.0%). TikTok at 1.5% meets this condition."],
      ],
      say: "Now both sides look at the same number: TikTok is below the 2.0% average. Thao may be right, but only after writing the threshold. If the threshold were 1.0% the conclusion would flip. A number does not press the switch-off button by itself; that is still a decision.",
      check: ["With the threshold “weak = below 2.0%”, is GDN weak?", "No. GDN is exactly 2.0%, not below 2.0%. This is why you must say clearly “below” or “at most”."],
    },
  },
  "ps-smart": {
    vi: {
      story: "Bước 3. Bạn và Thảo chốt mục tiêu cho TikTok, kênh có tỷ lệ form thấp nhất (1,5%). Mục tiêu phải là một câu SMART.",
      words: [
        ["SMART", "Specific (cụ thể), Measurable (đo được), Achievable (khả thi), Relevant (liên quan), Time-bound (có hạn)."],
      ],
      problem: "Mục tiêu nháp: «Làm TikTok tốt hơn». Hiện TikTok có 12 form mỗi tuần với chi 4 triệu (CPA ≈ 333 nghìn). Viết lại thành một câu SMART và kiểm từng chữ cái.",
      steps: [
        ["Specific", "Chỉ rõ đối tượng: «form từ TikTok», không phải «kênh nói chung»."],
        ["Measurable", "Công thức đếm: số form có utm_source = tiktok trong 7 ngày."],
        ["Achievable", "Từ 12 lên 15 form mỗi tuần (tăng 25%), nhờ sửa trang đích chứ không phải thêm tiền nhiều. Nếu chi tăng tới 4,5 triệu thì CPA = 4,5 ÷ 15 = 300 nghìn."],
        ["Relevant", "Nối với quyết định của chị Lan về chuyển ngân sách, vì CPA TikTok quyết định có giữ 4 triệu hay không."],
        ["Time-bound", "Có hạn cụ thể: ngày 31/1."],
        ["Gộp thành một câu", "«Đến 31/1, form từ TikTok tăng từ 12 lên 15 mỗi tuần (đếm theo utm_source, 7 ngày), chi không quá 4,5 triệu mỗi tuần, tức CPA không quá 300 nghìn.»"],
      ],
      say: "Câu cuối trả lời được cả năm câu hỏi: ai, đo thế nào, có khả thi không, để làm gì, đến khi nào. Nó cũng cho biết khi nào bạn thắng hay thua: 31/1 đếm lại, 15 là đạt, 13 là chưa.",
      check: ["«Tăng form TikTok sớm nhất có thể» vi phạm chữ cái nào?", "Time-bound, vì «sớm nhất» không phải một ngày. Có thể còn thiếu Measurable nếu không nói đếm form thế nào."],
    },
    en: {
      story: "Step 3. You and Thao settle the goal for TikTok, the channel with the lowest form rate (1.5%). The goal must be a SMART sentence.",
      words: [
        ["SMART", "Specific, Measurable, Achievable, Relevant, Time-bound."],
      ],
      problem: "Draft goal: “Make TikTok better”. TikTok currently gives 12 forms a week on 4 million spend (CPA ≈ 333 thousand). Rewrite it as a SMART sentence and check each letter.",
      steps: [
        ["Specific", "Name the subject: “forms from TikTok”, not “the channel in general”."],
        ["Measurable", "The counting formula: number of forms with utm_source = tiktok in 7 days."],
        ["Achievable", "From 12 to 15 forms a week (up 25%), by fixing the landing page rather than adding much money. If spend rises to 4.5 million, CPA = 4.5 ÷ 15 = 300 thousand."],
        ["Relevant", "Tied to Ms. Lan's budget-shift decision, because TikTok's CPA decides whether to keep the 4 million."],
        ["Time-bound", "A concrete deadline: 31 January."],
        ["Combine into one sentence", "“By 31 January, forms from TikTok rise from 12 to 15 a week (counted by utm_source, 7 days), spend no more than 4.5 million a week, i.e. CPA no higher than 300 thousand.”"],
      ],
      say: "The final sentence answers all five questions: who, measured how, feasible or not, for what, by when. It also tells you when you win or lose: on 31 January count again; 15 is a pass, 13 is not yet.",
      check: ["“Raise TikTok forms as soon as possible” breaks which letter?", "Time-bound, because “as soon as possible” is not a date. It may also lack Measurable if it does not say how forms are counted."],
    },
  },
  "ps-rank": {
    vi: {
      story: "Có ba việc cùng lúc xin nguồn lực. Hạn vẫn là 31/1. Bạn và Thảo phải bỏ bớt chứ không thể làm hết.",
      words: [
        ["Người-tuần", "Công của một người làm trong một tuần. Hai người làm 2 tuần là 4 người-tuần."],
        ["Ưu tiên", "Chọn việc làm trước và ghi rõ việc để sau. Không phải đánh số cho mọi thứ."],
      ],
      problem: "Còn 4 tuần đến 31/1, chỉ có bạn và Thảo, tổng nguồn lực 4 người-tuần cho việc mới. Ba việc: (1) sửa lỗi trang đích trên điện thoại: 0,4 người-tuần; (2) chạy chiến dịch TikTok mới: 3 người-tuần; (3) làm lại logo: 3 người-tuần. Chọn việc nào?",
      steps: [
        ["Cộng nhu cầu", "0,4 + 3 + 3 = 6,4 người-tuần, vượt nguồn lực 4."],
        ["Xếp theo liên quan tới mục tiêu SMART", "Việc 1 và 2 phục vụ form TikTok từ 12 lên 15. Việc 3 (logo) không liên quan tới mục tiêu này."],
        ["Chọn tổ hợp vừa nguồn lực", "Việc 1 + 2: 0,4 + 3 = 3,4 người-tuần, còn dư 0,6."],
        ["Ghi việc để sau", "Việc 3 (logo): «để sau 31/1» ghi thành một dòng trong danh sách, kèm lý do. Đây là một quyết định chứ không phải bị quên."],
      ],
      say: "Ba việc đều có giá trị, nhưng chỉ có 4 người-tuần. Chọn việc 1 và 2 vì chúng nối với mục tiêu; việc 3 đúng nhưng chưa tới lượt. Nếu cố làm cả ba thì không việc nào xong trước 31/1.",
      check: ["Nếu việc sửa trang đích hóa ra mất 1,5 người-tuần thay vì 0,4, kết quả chọn có đổi không?", "Việc 1 + 2 thành 1,5 + 3 = 4,5, vượt 4. Phải thu hẹp: ví dụ làm chiến dịch TikTok nhỏ hơn (2,5 người-tuần), hoặc xin thêm nguồn lực."],
    },
    en: {
      story: "Three jobs ask for resources at the same time. The deadline is still 31 January. You and Thao must drop some work rather than do it all.",
      words: [
        ["Person-week", "One person's work for one week. Two people for 2 weeks is 4 person-weeks."],
        ["Priority", "Choose what to do first and write down what waits. It is not numbering everything."],
      ],
      problem: "There are 4 weeks until 31 January, with only you and Thao, a total of 4 person-weeks for new work. Three jobs: (1) fix the landing-page fault on phones: 0.4 person-weeks; (2) run a new TikTok campaign: 3 person-weeks; (3) redo the logo: 3 person-weeks. Which do you pick?",
      steps: [
        ["Add up the demand", "0.4 + 3 + 3 = 6.4 person-weeks, above the 4 available."],
        ["Rank by link to the SMART goal", "Jobs 1 and 2 serve TikTok forms going from 12 to 15. Job 3 (the logo) is unrelated to this goal."],
        ["Pick a combination that fits", "Jobs 1 + 2: 0.4 + 3 = 3.4 person-weeks, with 0.6 left over."],
        ["Record what waits", "Job 3 (logo): “after 31 January”, written as a line in the list with the reason. This is a decision, not forgetting."],
      ],
      say: "All three jobs have value, but there are only 4 person-weeks. Pick jobs 1 and 2 because they tie to the goal; job 3 is right but not yet its turn. If you try all three, none finishes before 31 January.",
      check: ["If the landing-page fix turns out to take 1.5 person-weeks instead of 0.4, does the choice change?", "Jobs 1 + 2 become 1.5 + 3 = 4.5, over 4. You must shrink something: for example run a smaller TikTok campaign (2.5 person-weeks), or ask for more resources."],
    },
  },
  "ps-cause": {
    vi: {
      story: "Bước 4. TikTok chỉ có tỷ lệ form 1,5%. Có hai lời giải thích đang được nói. Bạn tách cái thay đổi được trong 4 tuần khỏi cái chỉ là bối cảnh.",
      words: [
        ["Nguyên nhân thay đổi được", "Một điều mà người trong hạn này làm được, và nếu nó đúng thì con số sẽ nhích."],
        ["Bối cảnh", "Điều có thật nhưng không chạm vào được trong hạn, ví dụ thói quen người dùng."],
      ],
      problem: "TikTok: 800 click mỗi tuần, tỷ lệ form 1,5%. Hai giả thuyết: (A) «người dùng chán mạng xã hội»; (B) «trang đích bị lỗi nút gửi form trên điện thoại». 85% click TikTok đến từ điện thoại. Cái nào đáng xử lý trước?",
      steps: [
        ["Liệt kê giả thuyết", "A: bối cảnh. B: một lỗi cụ thể."],
        ["Hỏi: có thay đổi được trong 4 tuần không", "A: không. Không ai đổi được thói quen người dùng trong 4 tuần. B: có, sửa nút gửi mất khoảng 2 ngày."],
        ["Đo xem B có đáng kể không", "85% của 800 click = 680 click đến từ điện thoại. Nếu lỗi chặn một phần gửi form trên điện thoại thì tỷ lệ chung bị kéo xuống."],
        ["Tính tác động nếu B đúng", "Nếu tỷ lệ form về mức trung bình 2,0%: 800 × 2,0% = 16 form, so với 12 hiện tại (+4)."],
      ],
      say: "Giả thuyết A có thể đúng nhưng không dẫn tới việc nào làm được. Giả thuyết B có thể kiểm tra, có thể sửa và nếu đúng thì mang về thêm khoảng 4 form mỗi tuần. Chọn nguyên nhân B để làm tiếp, không phải vì chắc chắn đúng mà vì làm được và đo được.",
      check: ["«Do nhân viên Thảo làm chưa tốt» có phải một nguyên nhân tốt để xử lý không?", "Không. Nó dừng ở «do con người», không chỉ ra một thay đổi cụ thể nào làm được. Phải hỏi tiếp: Thảo làm gì khác, ở khâu nào, và có sửa được trong hạn không."],
    },
    en: {
      story: "Step 4. TikTok's form rate is only 1.5%. Two explanations are being said aloud. You separate what can change within 4 weeks from what is just context.",
      words: [
        ["Changeable cause", "Something people can do within this deadline, and if it is right the number will move."],
        ["Context", "Something true but out of reach within the deadline, for example user habits."],
      ],
      problem: "TikTok: 800 clicks a week, form rate 1.5%. Two hypotheses: (A) “users are tired of social media”; (B) “the landing page has a broken submit button on phones”. 85% of TikTok clicks come from phones. Which deserves attention first?",
      steps: [
        ["List the hypotheses", "A: context. B: a specific fault."],
        ["Ask: can it change within 4 weeks", "A: no. Nobody can change user habits in 4 weeks. B: yes, fixing the submit button takes about 2 days."],
        ["Check whether B is significant", "85% of 800 clicks = 680 clicks come from phones. If the fault blocks part of form submissions on phones, the overall rate is dragged down."],
        ["Estimate the effect if B is right", "If the form rate returns to the 2.0% average: 800 × 2.0% = 16 forms, versus 12 today (+4)."],
      ],
      say: "Hypothesis A may be right but leads to no job you can do. Hypothesis B can be checked, can be fixed and, if right, brings about 4 more forms a week. Pick cause B to continue, not because it is certainly right but because it is doable and measurable.",
      check: ["Is “Thao did not do well enough” a good cause to act on?", "No. It stops at “because of a person” and points to no specific change that can be made. You must ask more: what did Thao do differently, at which step, and can it be fixed within the deadline?"],
    },
  },
  "ps-opt": {
    vi: {
      story: "Bước 5. Đã chọn nguyên nhân B (lỗi trang đích trên điện thoại). Bạn đặt ba phương án cạnh nhau, mỗi cái viết kèm hệ quả, đo bằng cùng một thước: form TikTok mỗi tuần vào 31/1.",
      words: [
        ["Hệ quả", "Cái được và cái mất của một phương án, kể cả cái mất khi chọn nhầm nguyên nhân."],
        ["Thước đo chung", "Một con số duy nhất dùng để so mọi phương án. Ở đây là số form TikTok mỗi tuần vào 31/1."],
      ],
      problem: "Hạn còn 4 tuần, form TikTok hiện 12 mỗi tuần. Phương án X: sửa lỗi nút gửi, mất 2 ngày của một người; nếu đúng nguyên nhân, form lên 16. Phương án Y: làm trang đích mới, mất 3 tuần thiết kế và 2 tuần kiểm thử. Phương án Z: không làm gì. So sánh ba phương án.",
      steps: [
        ["Viết hệ quả của X", "Mất 2 ngày. Nếu nguyên nhân đúng: 12 lên 16 (+4). Nếu sai: giữ 12, mất 2 ngày."],
        ["Viết hệ quả của Y", "3 + 2 = 5 tuần, vượt hạn 4 tuần. Không kịp 31/1 nên số form vào 31/1 vẫn là 12."],
        ["Viết hệ quả của Z", "Không tốn gì. Form giữ 12."],
        ["So sánh trên cùng thước đo", "Form TikTok vào 31/1: X = 16 hoặc 12, Y = 12, Z = 12."],
        ["Chọn", "X: tệ nhất cũng bằng Z (chỉ mất 2 ngày) và tốt nhất tăng 4 form. Y trễ hạn."],
      ],
      say: "Viết hệ quả bằng con số làm phương án «đẹp nhưng trễ» (Y) lộ ra ngay. Phương án X có rủi ro rất nhỏ (2 ngày) so với lợi ích (+4 form mỗi tuần), nên chọn. Không thêm thước đo mới ở bước này để phương án mình thích thắng.",
      check: ["Nếu ai đó thêm thước «trang đích trông đẹp hơn» để ủng hộ Y, vì sao nên từ chối?", "Thước đó không có trong câu SMART đã chốt. Thêm thước ở bước này chỉ để phương án yêu thích thắng. So sánh phải dùng đúng thước đã viết: form TikTok mỗi tuần vào 31/1."],
    },
    en: {
      story: "Step 5. Cause B (the landing-page fault on phones) is chosen. You put three options side by side, each written with its consequences, measured by one yardstick: TikTok forms per week on 31 January.",
      words: [
        ["Consequence", "The gain and the cost of an option, including the cost of choosing the wrong cause."],
        ["Common measure", "One single number used to compare every option. Here, TikTok forms per week on 31 January."],
      ],
      problem: "There are 4 weeks left and TikTok forms are 12 a week. Option X: fix the submit button, 2 days of one person's time; if it is the right cause, forms go to 16. Option Y: build a new landing page, 3 weeks of design and 2 weeks of testing. Option Z: do nothing. Compare the three options.",
      steps: [
        ["Write X's consequences", "Costs 2 days. If the cause is right: 12 to 16 (+4). If wrong: stays 12, 2 days lost."],
        ["Write Y's consequences", "3 + 2 = 5 weeks, past the 4-week deadline. It will not make 31 January, so forms on 31 January are still 12."],
        ["Write Z's consequences", "Costs nothing. Forms stay at 12."],
        ["Compare on the same measure", "TikTok forms on 31 January: X = 16 or 12, Y = 12, Z = 12."],
        ["Choose", "X: even the worst case equals Z (only 2 days lost) and the best case adds 4 forms. Y misses the deadline."],
      ],
      say: "Writing consequences as numbers instantly exposes the “nice but late” option (Y). Option X has a tiny risk (2 days) against its benefit (+4 forms a week), so choose it. Do not add a new measure at this step just so your favourite option wins.",
      check: ["If someone adds the measure “the landing page looks nicer” to favour Y, why should you refuse?", "That measure is not in the SMART sentence already agreed. Adding a measure at this step only serves to let a favourite win. The comparison must use the written measure: TikTok forms per week on 31 January."],
    },
  },
  "ps-do": {
    vi: {
      story: "Bước 6. Nút gửi form trên điện thoại đã được sửa ngày 15/1. Đến 31/1 bạn đo lại, bằng đúng cách đếm đã viết ở câu SMART.",
      words: [
        ["Đo lại", "Đếm lại cùng một con số bằng cùng một công thức sau khi thay đổi đã xảy ra."],
        ["Cách đếm", "Định nghĩa của con số: đếm gì, trong bao lâu, nguồn nào."],
      ],
      problem: "Trước: 12 form TikTok mỗi tuần (đếm theo utm_source = tiktok, 7 ngày). Sau khi sửa lỗi, tuần kết thúc 31/1 đếm được 15 form TikTok theo đúng cách đó. Ngoài ra Thảo còn nhận thêm 2 cuộc gọi đặt hẹn mà khách nói thấy quảng cáo TikTok. Kết luận thế nào?",
      steps: [
        ["Đọc kết quả theo cách đếm đã hẹn", "15 form so với 12 trước đó: tăng 3, tức 25%. Mục tiêu SMART là 15, nên đạt."],
        ["Không đổi cách đếm giữa chừng", "Hai cuộc gọi không đi qua form và không có utm_source, nên không cộng vào. Nếu cộng, con số thành 17 và không so được với mốc 12."],
        ["Ghi lại cuộc gọi như thông tin phụ", "Ghi «có thể còn thêm kênh điện thoại», nhưng đo bằng cách riêng, không trộn."],
        ["Kiểm tra CPA", "Chi vẫn 4 triệu: 4 triệu ÷ 15 form ≈ 267 nghìn mỗi form, thấp hơn 300 nghìn của mục tiêu."],
      ],
      say: "Bạn có thể kết luận có căn cứ: form TikTok tăng từ 12 lên 15 sau khi sửa lỗi, đạt mục tiêu, CPA giảm còn 267 nghìn. Chữ «có căn cứ» có được nhờ giữ nguyên cách đếm. Dù kết quả là 17 hay 11 thì vẫn phải báo bằng đúng cách đếm đã hẹn.",
      check: ["Nếu bạn đếm cả hai cuộc gọi, con số là 17. Tại sao vẫn không nên làm vậy?", "Vì mốc trước (12) không có cuộc gọi, nên so 17 với 12 là so hai thứ khác nhau và thổi phồng hiệu quả. Cách đếm phải giữ nguyên giữa trước và sau."],
    },
    en: {
      story: "Step 6. The phone submit button was fixed on 15 January. On 31 January you re-measure, using exactly the counting method written in the SMART sentence.",
      words: [
        ["Re-measure", "Count the same number again with the same formula after the change has happened."],
        ["Counting method", "The definition of the number: what is counted, over how long, from which source."],
      ],
      problem: "Before: 12 TikTok forms a week (counted by utm_source = tiktok, 7 days). After the fix, the week ending 31 January counts 15 TikTok forms by that same method. Thao also received 2 phone bookings from people who said they saw the TikTok ad. What do you conclude?",
      steps: [
        ["Read the result by the agreed method", "15 forms against 12 before: up 3, i.e. 25%. The SMART goal was 15, so it is met."],
        ["Do not change the counting method midway", "The two calls did not go through the form and have no utm_source, so they are not added. Adding them gives 17, which cannot be compared with the baseline of 12."],
        ["Record the calls as side information", "Note “there may be a phone channel too”, but measure it separately, not mixed in."],
        ["Check CPA", "Spend is still 4 million: 4 million ÷ 15 forms ≈ 267 thousand per form, below the goal's 300 thousand."],
      ],
      say: "You can conclude with grounds: TikTok forms rose from 12 to 15 after the fix, the goal is met, and CPA fell to 267 thousand. The words “with grounds” are earned by keeping the counting method unchanged. Whether the result is 17 or 11, report it by the agreed counting method.",
      check: ["If you counted both calls the number would be 17. Why still not do that?", "Because the earlier baseline (12) has no calls, so comparing 17 with 12 compares two different things and overstates the effect. The counting method must stay the same before and after."],
    },
  },
  "xl-cell": {
    vi: {
      story: "Tháng 1, bạn mở file Excel đầu tiên. Cột «Form tháng 11» của ba chi nhánh trông ổn, nhưng tổng ra thiếu so với con số 220 chị Lan nói.",
      words: [
        ["Kiểu ô", "Mỗi ô là số, chữ hoặc công thức. Kiểu quyết định phép toán nào dùng được."],
        ["Số lưu dạng chữ", "Một số bị lưu như chữ (thường do nhập từ file khác), Excel không cộng nó."],
      ],
      problem: "Form tháng 11: Quận 1 là 80, Quận 3 là «70» (lưu dạng chữ, canh trái), Thủ Đức là 70. Dùng =SUM(B2:B4). Tổng phải là 220, Excel cho kết quả nào và vì sao?",
      steps: [
        ["Nhìn canh lề", "80 và 70 (Thủ Đức) canh phải, «70» của Quận 3 canh trái. Canh trái là dấu hiệu của chữ."],
        ["Kiểm tra kiểu bằng công thức", "=ISTEXT(B3) cho TRUE, nghĩa là Quận 3 là chữ."],
        ["Xem kết quả SUM", "SUM bỏ qua ô chữ: 80 + 70 = 150, không phải 220. Thiếu đúng 70."],
        ["Đổi chữ thành số", "=VALUE(B3) cho 70, hoặc nhân với 1. Sau khi đổi: 80 + 70 + 70 = 220."],
      ],
      say: "Excel không báo lỗi gì. Con số 150 vẫn trông hợp lý, và nếu không biết dấu hiệu canh lề bạn đã báo chị Lan form tháng 11 là 150. Kiểm tra kiểu ô là bước đầu tiên trước khi cộng.",
      check: ["Nếu ô Quận 3 chứa chữ «bảy mươi» thì =VALUE cho kết quả gì?", "Lỗi #VALUE!, vì Excel không đổi chữ «bảy mươi» thành số. Cần nhập lại thành 70."],
    },
    en: {
      story: "In January you open your first Excel file. The “November forms” column for the three branches looks fine, but the total comes up short against the 220 Ms. Lan quoted.",
      words: [
        ["Cell type", "Each cell is a number, text or formula. The type decides which operations work."],
        ["Number stored as text", "A number saved as text (often from importing another file); Excel does not add it."],
      ],
      problem: "November forms: District 1 is 80, District 3 is “70” (stored as text, left-aligned), Thu Duc is 70. You use =SUM(B2:B4). The total should be 220; what does Excel return and why?",
      steps: [
        ["Look at the alignment", "80 and 70 (Thu Duc) are right-aligned, District 3's “70” is left-aligned. Left alignment signals text."],
        ["Check the type with a formula", "=ISTEXT(B3) returns TRUE, so District 3 is text."],
        ["See what SUM does", "SUM skips text cells: 80 + 70 = 150, not 220. Exactly 70 missing."],
        ["Convert text to number", "=VALUE(B3) gives 70, or multiply by 1. After converting: 80 + 70 + 70 = 220."],
      ],
      say: "Excel raises no error. The 150 still looks reasonable, and without knowing the alignment clue you would have told Ms. Lan November forms were 150. Checking cell types is the first step before adding.",
      check: ["If the District 3 cell holds the word “seventy”, what does =VALUE give?", "A #VALUE! error, because Excel cannot turn the word “seventy” into a number. You must retype it as 70."],
    },
  },
  "xl-lock": {
    vi: {
      story: "Số tổng form tháng 11 đã đúng (220). Giờ bạn tính mỗi chi nhánh chiếm bao nhiêu phần trăm bằng một công thức kéo xuống được.",
      words: [
        ["Địa chỉ tương đối", "B2 đổi theo ô khi kéo công thức: kéo xuống một dòng thì B2 thành B3."],
        ["Địa chỉ tuyệt đối $B$5", "Dấu $ giữ nguyên cả cột và hàng khi kéo."],
      ],
      problem: "Ô B2, B3, B4 là form Quận 1 (80), Quận 3 (70), Thủ Đức (70). Ô B5 là tổng 220. Cột C cần tỷ trọng mỗi chi nhánh = form ÷ tổng. Viết công thức ở C2 rồi kéo xuống C4.",
      steps: [
        ["Viết công thức thử ở C2 không có $", "=B2/B5. C2 = 80 ÷ 220 ≈ 36,4%."],
        ["Kéo xuống C3 và xem điều gì xảy ra", "C3 trở thành =B3/B6. B6 trống, nên ra lỗi #DIV/0! (chia cho 0)."],
        ["Khóa ô tổng bằng $", "=B2/$B$5. Dù kéo xuống thì mẫu số luôn là B5."],
        ["Kết quả sau khi kéo", "C2 = 80/220 ≈ 36,4%. C3 = 70/220 ≈ 31,8%. C4 = 70/220 ≈ 31,8%. Cộng lại 100%."],
      ],
      say: "Dấu $ nói với Excel: «ô này đứng yên khi kéo». Tử số (B2) cần đổi theo từng dòng, mẫu số ($B$5) cần đứng yên. Quên $ thì dòng đầu đúng còn các dòng sau sai, rất khó thấy nếu chỉ nhìn dòng đầu.",
      check: ["Nếu viết =B2/$B5 (chỉ khóa cột) rồi kéo xuống, C3 là gì?", "=B3/$B6, vì hàng không bị khóa nên B5 trượt thành B6. Vẫn lỗi. Cần khóa cả hàng ($B$5)."],
    },
    en: {
      story: "November's total forms are right (220). Now you compute each branch's share with one formula you can drag down.",
      words: [
        ["Relative reference", "B2 moves with the cell when you drag the formula: one row down turns B2 into B3."],
        ["Absolute reference $B$5", "The $ signs keep both column and row fixed when dragging."],
      ],
      problem: "Cells B2, B3, B4 are forms for District 1 (80), District 3 (70), Thu Duc (70). Cell B5 is the total 220. Column C needs each branch's share = forms ÷ total. Write the formula in C2 then drag down to C4.",
      steps: [
        ["Try a formula in C2 without $", "=B2/B5. C2 = 80 ÷ 220 ≈ 36.4%."],
        ["Drag to C3 and see what happens", "C3 becomes =B3/B6. B6 is blank, so you get #DIV/0! (division by zero)."],
        ["Lock the total with $", "=B2/$B$5. However far you drag, the denominator stays B5."],
        ["Result after dragging", "C2 = 80/220 ≈ 36.4%. C3 = 70/220 ≈ 31.8%. C4 = 70/220 ≈ 31.8%. They add up to 100%."],
      ],
      say: "The $ tells Excel: “this cell stands still when dragged”. The numerator (B2) must change with each row, the denominator ($B$5) must stay put. Forget the $ and the first row is right while the later rows are wrong, which is hard to notice if you only look at the first row.",
      check: ["If you write =B2/$B5 (locking only the column) and drag down, what is C3?", "=B3/$B6, because the row is not locked so B5 slides to B6. It still errors. You need to lock the row too ($B$5)."],
    },
  },
  "xl-if": {
    vi: {
      story: "Tính CPA từng kênh cho 12 tuần. Chi phí TikTok tuần 5 vẫn đang trống, bạn cần công thức không bị gãy khi gặp ô đó.",
      words: [
        ["IF", "IF(điều kiện, giá trị nếu đúng, giá trị nếu sai). Chọn một trong hai nhánh."],
        ["Ô trống", "Ô chưa có dữ liệu. Không giống số 0 và không giống FALSE."],
      ],
      problem: "Cột C là chi phí TikTok (triệu), cột D là form. Tuần 4: C = 4, D = 12. Tuần 5: C trống, D = 12. Viết công thức CPA ở E cho cả hai tuần mà không sinh ra con số sai.",
      steps: [
        ["Thử công thức đơn giản", "=C4/D4 = 4 ÷ 12 ≈ 0,333 (333 nghìn). Ổn. Ở tuần 5, =C5/D5 coi ô trống là 0 và cho 0, tức CPA bằng 0, một con số sai."],
        ["Xử lý trường hợp đặc biệt trước", "Kiểm tra ô trống đầu tiên: IF(C5=\"\", ...) vì trống phải có nhánh riêng."],
        ["Viết đủ công thức", "=IF(C5=\"\", \"chưa có\", C5/D5)."],
        ["Kết quả", "Tuần 4: 0,333. Tuần 5: chữ «chưa có». Các hàm tính trung bình sau đó tự bỏ qua chữ."],
      ],
      say: "Ô trống không phải là «sai» và cũng không phải số 0. Thứ tự rất quan trọng: nhánh ô trống phải đứng trước nhánh tính toán. Nhờ vậy tuần 5 hiện «chưa có» thay vì một CPA bằng 0 trông rất đẹp mà sai.",
      check: ["Nếu bỏ nhánh ô trống và để Excel tính C5/D5, tuần 5 sẽ làm CPA trung bình thế nào?", "Kéo xuống: CPA 0 được đưa vào trung bình, làm trung bình CPA thấp đi sai, khiến TikTok trông rẻ hơn thực tế."],
    },
    en: {
      story: "You compute CPA per channel for 12 weeks. TikTok's week-5 spend is still blank; you need a formula that does not break on that cell.",
      words: [
        ["IF", "IF(condition, value if true, value if false). It picks one of two branches."],
        ["Blank cell", "A cell with no data. Not the same as 0 and not the same as FALSE."],
      ],
      problem: "Column C is TikTok spend (million), column D is forms. Week 4: C = 4, D = 12. Week 5: C blank, D = 12. Write the CPA formula in column E for both weeks without producing a wrong number.",
      steps: [
        ["Try the simple formula", "=C4/D4 = 4 ÷ 12 ≈ 0.333 (333 thousand). Fine. In week 5, =C5/D5 treats the blank as 0 and returns 0, a CPA of zero, which is wrong."],
        ["Handle the special case first", "Test for blank first: IF(C5=\"\", ...) because blank needs its own branch."],
        ["Write the full formula", "=IF(C5=\"\", \"not yet\", C5/D5)."],
        ["Result", "Week 4: 0.333. Week 5: the text “not yet”. Average functions then skip the text on their own."],
      ],
      say: "A blank is not “false” and not the number 0. Order matters: the blank branch must come before the calculation branch. That way week 5 shows “not yet” instead of a CPA of zero that looks great but is wrong.",
      check: ["If you drop the blank branch and let Excel compute C5/D5, how does week 5 affect the average CPA?", "The CPA of 0 goes into the average, pulling it down wrongly and making TikTok look cheaper than it really is."],
    },
  },
  "xl-keep": {
    vi: {
      story: "Thảo muốn xem riêng kênh GDN. Bạn lọc trong Excel nhưng phát hiện tổng cuối cột không đổi. Đây là chỗ lọc và xóa khác nhau.",
      words: [
        ["Lọc (filter)", "Ẩn các dòng không khớp. Dòng vẫn còn trong file."],
        ["SUMIFS", "Tổng có điều kiện: cộng những dòng thỏa điều kiện bạn viết."],
      ],
      problem: "Bảng 6 dòng (3 tuần đầu): GDN form 18, 17, 19; Meta form 20, 21, 20. Bạn lọc cột Kênh = GDN. Ô tổng =SUM(D2:D7) hiển thị bao nhiêu, và làm sao có tổng đúng của GDN?",
      steps: [
        ["Lọc Kênh = GDN", "Excel ẩn 3 dòng Meta. Màn hình chỉ còn 3 dòng GDN."],
        ["Xem =SUM(D2:D7)", "SUM vẫn cộng cả dòng bị ẩn: 18 + 17 + 19 + 20 + 21 + 20 = 115, không phải tổng GDN."],
        ["Viết điều kiện thay vì dựa vào lọc", "=SUMIFS(D2:D7, B2:B7, \"GDN\") chỉ cộng dòng có kênh GDN."],
        ["Kết quả", "18 + 17 + 19 = 54. Con số này không phụ thuộc bạn đang lọc hay không."],
      ],
      say: "Lọc chỉ che mắt, không đổi phép tính. Muốn loại dòng khỏi phép đếm thì viết điều kiện, đừng xóa dòng: xóa là mất dữ liệu, còn lọc thì không đổi kết quả của SUM. Với SUMIFS, con số 54 luôn đúng cho dù ai đó đổi bộ lọc.",
      check: ["Nếu bạn xóa 3 dòng Meta thay vì lọc, rồi sau đó cần tổng Meta, chuyện gì xảy ra?", "Không tính được nữa vì dữ liệu Meta đã mất. Lọc hoặc SUMIFS giữ nguyên dòng nên bạn vẫn tính được cả Meta (20 + 21 + 20 = 61)."],
    },
    en: {
      story: "Thao wants to look at GDN alone. You filter in Excel but notice the column total does not change. This is where filtering and deleting differ.",
      words: [
        ["Filter", "Hides rows that do not match. The rows stay in the file."],
        ["SUMIFS", "A conditional sum: it adds the rows that satisfy the condition you write."],
      ],
      problem: "A table of 6 rows (first 3 weeks): GDN forms 18, 17, 19; Meta forms 20, 21, 20. You filter Channel = GDN. What does the total cell =SUM(D2:D7) show, and how do you get GDN's correct total?",
      steps: [
        ["Filter Channel = GDN", "Excel hides the 3 Meta rows. The screen shows just 3 GDN rows."],
        ["Look at =SUM(D2:D7)", "SUM still adds hidden rows: 18 + 17 + 19 + 20 + 21 + 20 = 115, not the GDN total."],
        ["Write a condition instead of relying on the filter", "=SUMIFS(D2:D7, B2:B7, \"GDN\") adds only rows whose channel is GDN."],
        ["Result", "18 + 17 + 19 = 54. This number does not depend on whether you are filtering."],
      ],
      say: "A filter only covers your eyes; it does not change the calculation. To leave rows out of a count, write a condition; do not delete rows: deleting loses data, while filtering does not change SUM's result. With SUMIFS, 54 is right no matter who changes the filter.",
      check: ["If you deleted the 3 Meta rows instead of filtering, and later needed Meta's total, what happens?", "You can no longer compute it because the Meta data is gone. Filtering or SUMIFS keeps the rows so you can still compute Meta too (20 + 21 + 20 = 61)."],
    },
  },
  "xl-chart": {
    vi: {
      story: "Chị Lan muốn xem hình, không muốn xem bảng. Bạn có hai câu hỏi cần hai loại biểu đồ khác nhau.",
      words: [
        ["Biểu đồ cột", "So sánh các nhóm rời nhau (ví dụ ba kênh)."],
        ["Biểu đồ đường", "Theo dõi một con số qua thời gian."],
      ],
      problem: "Hai câu hỏi: (1) «Tuần này kênh nào mang nhiều form nhất?» Dữ liệu: GDN 18, Meta 20, TikTok 12. (2) «Form tổng thay đổi thế nào qua 6 tuần?» Dữ liệu: 48, 51, 50, 47, 53, 50. Chọn biểu đồ cho từng câu.",
      steps: [
        ["Câu (1): so sánh ba nhóm rời nhau", "Dùng biểu đồ cột. Ba cột 18, 20, 12. Cột Meta cao nhất, đọc ra ngay."],
        ["Câu (2): theo dõi qua thời gian", "Dùng biểu đồ đường: trục ngang là tuần 1 đến 6, trục dọc là form tổng."],
        ["Tính trung bình để đối chiếu", "(48 + 51 + 50 + 47 + 53 + 50) ÷ 6 = 299 ÷ 6 ≈ 49,8. Đường dao động quanh 50, không dốc xuống."],
        ["Đọc kết luận", "Câu (1): Meta mang nhiều nhất. Câu (2): 6 tuần gần đây không giảm, quanh 50."],
      ],
      say: "Chọn biểu đồ theo câu hỏi, không theo hình đẹp. Cột cho «ai hơn ai», đường cho «đang đi lên hay xuống». Nếu vẽ ba kênh bằng đường nối từng kênh, người xem tưởng có xu hướng giữa các kênh, mà thực ra không có thứ tự nào.",
      check: ["Nếu bạn vẽ 6 tuần bằng biểu đồ cột thì có sai không?", "Không sai hẳn nhưng khó thấy xu hướng bằng đường nối các điểm. Đường làm mắt đi theo thời gian, cột làm mắt so từng cột riêng lẻ."],
    },
    en: {
      story: "Ms. Lan wants to see pictures, not tables. You have two questions that need two different chart types.",
      words: [
        ["Bar chart", "Compares separate groups (for example three channels)."],
        ["Line chart", "Tracks one number over time."],
      ],
      problem: "Two questions: (1) “Which channel brought the most forms this week?” Data: GDN 18, Meta 20, TikTok 12. (2) “How do total forms change over 6 weeks?” Data: 48, 51, 50, 47, 53, 50. Choose a chart for each.",
      steps: [
        ["Question (1): compare three separate groups", "Use a bar chart. Three bars 18, 20, 12. Meta's bar is tallest, readable at once."],
        ["Question (2): track over time", "Use a line chart: weeks 1 to 6 on the horizontal axis, total forms on the vertical."],
        ["Compute the average to check", "(48 + 51 + 50 + 47 + 53 + 50) ÷ 6 = 299 ÷ 6 ≈ 49.8. The line wobbles around 50 and does not slope down."],
        ["Read the conclusion", "Question (1): Meta brought the most. Question (2): the last 6 weeks did not drop, hovering around 50."],
      ],
      say: "Choose the chart by the question, not by what looks pretty. Bars for “who beats whom”, lines for “going up or down”. If you drew the three channels as a line joining them, viewers would imagine a trend between channels, when there is no order at all.",
      check: ["If you drew the 6 weeks as a bar chart, would that be wrong?", "Not strictly wrong but harder to see a trend than with a line joining the points. A line leads the eye through time; bars make the eye compare each bar alone."],
    },
  },
  "xl-pivot": {
    vi: {
      story: "File 2 tuần có 6 dòng (mỗi dòng là một kênh trong một tuần). Chị Lan muốn tổng form theo kênh. Bạn dùng PivotTable thay vì cộng tay.",
      words: [
        ["PivotTable", "Công cụ gom các dòng theo một cột rồi tính tổng, đếm hoặc trung bình."],
        ["Một dòng là gì", "Phải xác định một dòng trong bảng gốc đại diện cho cái gì trước khi kéo cột vào pivot."],
      ],
      problem: "Bảng gốc: Tuần 1: GDN 18, Meta 20, TikTok 12. Tuần 2: GDN 17, Meta 21, TikTok 12. Mỗi dòng là một kênh trong một tuần. Tạo pivot: hàng = Kênh, giá trị = tổng Form.",
      steps: [
        ["Xác định một dòng", "Một dòng = (kênh, tuần). Có 6 dòng cho 3 kênh × 2 tuần."],
        ["Kéo Kênh vào Hàng", "Pivot tạo 3 hàng: GDN, Meta, TikTok."],
        ["Kéo Form vào Giá trị (Tổng)", "GDN: 18 + 17 = 35. Meta: 20 + 21 = 41. TikTok: 12 + 12 = 24."],
        ["Kiểm tra tổng", "35 + 41 + 24 = 100 form, bằng 50 × 2 tuần. Khớp với tổng gốc nên pivot đúng."],
      ],
      say: "Pivot không tạo ra khách hàng hay form mới, nó chỉ gom lại những dòng đã có. Vì vậy phải biết một dòng gốc là gì: nếu một dòng là một lượt form thì phép đếm khác với khi một dòng là tổng của cả tuần.",
      check: ["Nếu kéo Form vào Giá trị nhưng chọn «Đếm» thay vì «Tổng», GDN hiện số mấy?", "2, vì có 2 dòng GDN. «Đếm» đếm số dòng, không cộng giá trị form. Phải chọn Tổng."],
    },
    en: {
      story: "The 2-week file has 6 rows (each row is one channel in one week). Ms. Lan wants total forms by channel. You use a PivotTable instead of adding by hand.",
      words: [
        ["PivotTable", "A tool that groups rows by a column and then sums, counts or averages."],
        ["What one row is", "You must decide what one row in the source table represents before dragging columns into the pivot."],
      ],
      problem: "Source table: Week 1: GDN 18, Meta 20, TikTok 12. Week 2: GDN 17, Meta 21, TikTok 12. Each row is one channel in one week. Create a pivot: rows = Channel, values = sum of Forms.",
      steps: [
        ["Decide what one row is", "One row = (channel, week). There are 6 rows for 3 channels × 2 weeks."],
        ["Drag Channel into Rows", "The pivot creates 3 rows: GDN, Meta, TikTok."],
        ["Drag Forms into Values (Sum)", "GDN: 18 + 17 = 35. Meta: 20 + 21 = 41. TikTok: 12 + 12 = 24."],
        ["Check the total", "35 + 41 + 24 = 100 forms, equal to 50 × 2 weeks. It matches the source total, so the pivot is right."],
      ],
      say: "A pivot does not create new customers or forms; it only regroups rows that exist. That is why you must know what a source row is: if one row is one form submission the count differs from when one row is a whole week's total.",
      check: ["If you drag Forms into Values but choose “Count” instead of “Sum”, what does GDN show?", "2, because there are 2 GDN rows. “Count” counts rows and does not add the form values. You must choose Sum."],
    },
  },
  "xl-look": {
    vi: {
      story: "Tháng 1 sắp kết thúc. Thảo gửi bảng giảm giá theo mã chiến dịch. Bạn tra mã của từng form để biết mức giảm, và gặp bẫy tìm gần đúng.",
      words: [
        ["VLOOKUP", "Tra một giá trị ở cột đầu của một bảng rồi lấy giá trị ở cột bên phải."],
        ["Tìm gần đúng", "Mặc định của VLOOKUP nếu bỏ đối số cuối: lấy dòng nhỏ nhất không vượt quá giá trị tra."],
        ["INDEX và MATCH", "Cặp hàm tra được cả sang trái."],
      ],
      problem: "Bảng giảm giá: mã 10 giảm 5%, mã 20 giảm 10%, mã 30 giảm 15%. Khách nhập mã 25, không có trong bảng. Dùng =VLOOKUP(25, bảng, 2) và =VLOOKUP(25, bảng, 2, FALSE), mỗi công thức cho ra gì?",
      steps: [
        ["VLOOKUP bỏ đối số cuối", "Mặc định tìm gần đúng, cần bảng sắp xếp tăng. Mã 25 không có, Excel lấy dòng nhỏ nhất không vượt 25 là mã 20 và trả 10%."],
        ["Vấn đề", "Khách nhập mã sai mà vẫn được giảm 10%. Excel không báo gì."],
        ["VLOOKUP với FALSE", "FALSE nghĩa là khớp đúng. Mã 25 không có nên trả #N/A."],
        ["Xử lý #N/A có chủ đích", "=IFERROR(VLOOKUP(25, bảng, 2, FALSE), \"mã không hợp lệ\")."],
      ],
      say: "Không có FALSE, VLOOKUP trả một con số hợp lý nhưng sai và không báo lỗi. Muốn khớp đúng mã thì luôn ghi FALSE. Nếu cột cần lấy nằm bên trái cột mã, VLOOKUP không với tới, khi đó dùng INDEX và MATCH.",
      check: ["Nếu cột «Mức giảm» nằm bên trái cột «Mã», công thức nào tra được?", "=INDEX(cột_mức_giảm, MATCH(mã_cần_tra, cột_mã, 0)). Số 0 trong MATCH nghĩa là khớp đúng, giống FALSE."],
    },
    en: {
      story: "January is nearly over. Thao sends a discount table by campaign code. You look up each form's code to find its discount and run into the approximate-match trap.",
      words: [
        ["VLOOKUP", "Looks up a value in the first column of a table and returns a value from a column to the right."],
        ["Approximate match", "VLOOKUP's default if you omit the last argument: it takes the largest row not exceeding the lookup value."],
        ["INDEX and MATCH", "A pair of functions that can also look to the left."],
      ],
      problem: "Discount table: code 10 gives 5%, code 20 gives 10%, code 30 gives 15%. A customer enters code 25, which is not in the table. What do =VLOOKUP(25, table, 2) and =VLOOKUP(25, table, 2, FALSE) each return?",
      steps: [
        ["VLOOKUP without the last argument", "The default is approximate match, which needs the table sorted ascending. Code 25 is missing, so Excel takes the largest row not exceeding 25, code 20, and returns 10%."],
        ["The problem", "A customer entered a wrong code yet still gets 10% off. Excel says nothing."],
        ["VLOOKUP with FALSE", "FALSE means exact match. Code 25 does not exist so it returns #N/A."],
        ["Handle #N/A on purpose", "=IFERROR(VLOOKUP(25, table, 2, FALSE), \"invalid code\")."],
      ],
      say: "Without FALSE, VLOOKUP returns a plausible but wrong number and raises no error. To match a code exactly always write FALSE. If the column you need sits to the left of the code column, VLOOKUP cannot reach it; then use INDEX and MATCH.",
      check: ["If the “Discount” column sits to the left of the “Code” column, which formula can look it up?", "=INDEX(discount_column, MATCH(code_to_find, code_column, 0)). The 0 in MATCH means exact match, like FALSE."],
    },
  },
};
