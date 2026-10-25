/** «Làm từng bước với số thật»: một bài tính đầy đủ cho mỗi khái niệm, để chỉ đọc trang này cũng hiểu. */
export type WalkText = {
  /** Chỗ khái niệm này nằm trong câu chuyện Lotus Spa (xem docs/STORY.md). */
  story?: string;
  words: [string, string][];
  problem: string;
  steps: [string, string][];
  say: string;
  check: [string, string];
};
/** Cặp [tiếng Việt, tiếng Anh]. */
export type S = [string, string];
/** Hình minh họa dùng chung cho hai ngôn ngữ: bảng tính, biểu đồ cột, biểu đồ đường. */
export type Visual =
  | { kind: "table"; title: S; head: S[]; rows: (string | number)[][]; mark?: [number, number][]; note?: S }
  | { kind: "bars"; title: S; items: { label: S; value: number }[]; unit?: string; note?: S }
  | { kind: "line"; title: S; xs: string[]; ys: number[]; unit?: string; note?: S };
export type Walk = { vi: WalkText; en: WalkText; visual?: Visual };

export const pilotWalks: Record<string, Walk> = {
  bayes: {
    vi: {
      story: "Tháng 3, công cụ cảnh báo của Lotus Spa gắn cờ 121 hội viên trong 1000 người. Chị Lan hỏi: «Người bị gắn cờ có thật sự sắp rời không?» Đó là xác suất có điều kiện.",
      words: [
        ["Xác suất ban đầu (prior)", "Khả năng một khách bất kỳ sắp rời, tính trước khi có bất kỳ cảnh báo nào."],
        ["Bắt đúng", "Trong những khách thật sự sắp rời, công cụ gắn cờ được bao nhiêu phần trăm."],
        ["Báo nhầm", "Trong những khách sẽ ở lại, công cụ vẫn gắn cờ nhầm bao nhiêu phần trăm."],
        ["Xác suất sau (posterior)", "Khả năng khách thật sự sắp rời, tính sau khi biết khách đã bị gắn cờ."],
      ],
      problem: "Spa có 1000 khách. 5% trong số họ thật sự sắp rời. Công cụ cảnh báo bắt đúng 90% người sắp rời, nhưng cũng báo nhầm 8% người ở lại. Một khách vừa bị gắn cờ. Khả năng khách đó thật sự sắp rời là bao nhiêu?",
      steps: [
        ["Chia 1000 khách thành hai nhóm", "5% của 1000 là 50 người sắp rời. Còn lại 950 người ở lại."],
        ["Đếm những người sắp rời mà bị gắn cờ", "90% của 50 là 45 người. Đây là cảnh báo đúng."],
        ["Đếm những người ở lại mà vẫn bị gắn cờ", "8% của 950 là 76 người. Đây là cảnh báo nhầm."],
        ["Gộp tất cả những người bị gắn cờ", "45 + 76 = 121 người bị gắn cờ."],
        ["Hỏi lại câu hỏi ban đầu", "Trong 121 người bị gắn cờ chỉ có 45 người thật sự sắp rời: 45 ÷ 121 ≈ 37%."],
      ],
      say: "Công cụ bắt đúng tới 90%, nhưng một khách bị gắn cờ chỉ có khoảng 37% khả năng thật sự sắp rời. Lý do: người ở lại đông gấp 19 lần người sắp rời, nên dù tỷ lệ báo nhầm chỉ 8% thì số báo nhầm (76) vẫn nhiều hơn số báo đúng (45). Xác suất ban đầu phải đi vào phép tính.",
      check: ["Nếu tỷ lệ khách sắp rời là 20% thay vì 5%, xác suất sau tăng hay giảm? Con số khoảng bao nhiêu?", "Tăng. 200 người sắp rời, 90% là 180 báo đúng. 800 người ở lại, 8% là 64 báo nhầm. 180 ÷ (180 + 64) ≈ 74%."],
    },
    en: {
      story: "In March, Lotus Spa's alert tool flags 121 of 1,000 members. Ms. Lan asks: “Is a flagged member really about to leave?” That is conditional probability.",
      words: [
        ["Prior", "How likely a random customer is to leave, before any alert exists."],
        ["Catches correctly", "Of those who really are leaving, the percentage the tool flags."],
        ["False alarm", "Of those who will stay, the percentage the tool flags by mistake."],
        ["Posterior", "How likely the customer really is to leave, after knowing they were flagged."],
      ],
      problem: "A spa has 1000 customers. 5% of them are really about to leave. The alert tool catches 90% of those leaving, but also falsely flags 8% of those staying. One customer has just been flagged. How likely is it that this customer is really about to leave?",
      steps: [
        ["Split the 1000 customers into two groups", "5% of 1000 is 50 people about to leave. The other 950 will stay."],
        ["Count those leaving who are flagged", "90% of 50 is 45 people. These are correct alerts."],
        ["Count those staying who are still flagged", "8% of 950 is 76 people. These are false alarms."],
        ["Put all flagged people together", "45 + 76 = 121 people are flagged."],
        ["Go back to the original question", "Of the 121 flagged, only 45 are really leaving: 45 ÷ 121 ≈ 37%."],
      ],
      say: "The tool catches 90%, yet a flagged customer has only about a 37% chance of really leaving. The reason: people who stay outnumber people who leave 19 to 1, so even an 8% false-alarm rate gives more false alarms (76) than correct ones (45). The prior has to go into the calculation.",
      check: ["If 20% of customers were about to leave instead of 5%, would the posterior rise or fall? Roughly to what?", "It rises. 200 are leaving, 90% is 180 correct alerts. 800 stay, 8% is 64 false alarms. 180 ÷ (180 + 64) ≈ 74%."],
    },
  },
  ci: {
    vi: {
      story: "Tháng 3, chị Lan hỏi: «Form trung bình mỗi tuần là bao nhiêu, chắc đến đâu?» Bạn dùng 36 tuần dữ liệu để dựng một khoảng quanh con số 50.",
      words: [
        ["Trung bình mẫu", "Trung bình của những tuần bạn đã đo được."],
        ["Độ lệch chuẩn σ", "Mức các tuần thường lệch khỏi trung bình bao xa. Ở đây giả sử đã biết σ = 12."],
        ["Sai số chuẩn (SE)", "Trung bình mẫu dao động bao nhiêu từ mẫu này sang mẫu khác. SE = σ ÷ √n."],
        ["Mức tin cậy 95%", "Nếu lặp lại việc lấy mẫu rất nhiều lần, khoảng 95 trên 100 khoảng tính ra sẽ chứa trung bình thật."],
        ["z", "Hệ số nhân độ rộng. Với 95%, z ≈ 1,96."],
      ],
      problem: "Bạn đo số form mỗi tuần trong 36 tuần. Trung bình 50 form. Giả sử σ = 12. Hãy dựng khoảng tin cậy 95% cho trung bình thật.",
      steps: [
        ["Tính sai số chuẩn", "SE = 12 ÷ √36 = 12 ÷ 6 = 2."],
        ["Nhân với z", "Nửa độ rộng = 1,96 × 2 = 3,92."],
        ["Cộng và trừ quanh trung bình mẫu", "50 − 3,92 = 46,08 và 50 + 3,92 = 53,92."],
        ["Viết kết luận", "Khoảng tin cậy 95% là từ 46,1 đến 53,9 form mỗi tuần."],
      ],
      say: "Trung bình thật có thể nằm ở đâu đó giữa khoảng 46 và 54. Nói «95%» là nói về cách làm: làm theo cách này nhiều lần thì khoảng 95 lần khoảng tính ra sẽ bắt được giá trị thật. Không phải nói «có 95% xác suất giá trị thật nằm trong khoảng cụ thể này».",
      check: ["Nếu đo 144 tuần thay vì 36 tuần (gấp 4 lần), khoảng sẽ rộng gấp mấy so với trước?", "Hẹp đi một nửa. SE = 12 ÷ 12 = 1, nửa độ rộng = 1,96, khoảng từ 48,04 đến 51,96. Gấp 4 lần mẫu thì khoảng hẹp đi 2 lần."],
    },
    en: {
      story: "In March, Ms. Lan asks: “What is the average weekly form count, and how sure are we?” You use 36 weeks of data to build a range around the figure 50.",
      words: [
        ["Sample mean", "The average of the weeks you actually measured."],
        ["Standard deviation σ", "How far weeks typically stray from the average. Here we assume σ = 12 is known."],
        ["Standard error (SE)", "How much the sample mean wobbles from one sample to the next. SE = σ ÷ √n."],
        ["95% confidence level", "If you repeated the sampling very many times, about 95 of every 100 intervals would contain the true mean."],
        ["z", "The width multiplier. For 95%, z ≈ 1.96."],
      ],
      problem: "You measure forms per week over 36 weeks. The average is 50 forms. Assume σ = 12. Build a 95% confidence interval for the true mean.",
      steps: [
        ["Compute the standard error", "SE = 12 ÷ √36 = 12 ÷ 6 = 2."],
        ["Multiply by z", "Half-width = 1.96 × 2 = 3.92."],
        ["Add and subtract around the sample mean", "50 − 3.92 = 46.08 and 50 + 3.92 = 53.92."],
        ["State the conclusion", "The 95% confidence interval is 46.1 to 53.9 forms per week."],
      ],
      say: "The true mean could be anywhere between about 46 and 54. “95%” describes the method: do this over and over and about 95 of the intervals will catch the true value. It does not say “there is a 95% probability the true value lies in this particular interval”.",
      check: ["If you measured 144 weeks instead of 36 (4 times as many), how does the interval change?", "It halves in width. SE = 12 ÷ 12 = 1, half-width = 1.96, interval 48.04 to 51.96. Four times the sample makes the interval twice as narrow."],
    },
  },
  "tree-gini": {
    vi: {
      story: "Tháng 6, bạn để máy tự đặt câu hỏi nhằm tách hội viên sắp rời khỏi người ở lại. Gini là thước chấm xem một câu hỏi tốt đến đâu.",
      words: [
        ["Nút", "Một nhóm khách đang xét. Nút gốc là cả nhóm trước khi chia."],
        ["Gini", "Mức «lẫn lộn» của nhóm. Bằng 0 khi cả nhóm cùng một nhãn. Lớn nhất là 0,5 khi hai nhãn chia đôi. Công thức: 1 − p² − q²."],
        ["Chia (split)", "Một câu hỏi có/không tách nhóm thành hai nhánh, ví dụ «ghé ít hơn 2 lần?»."],
      ],
      problem: "Có 100 khách: 40 người ở lại, 60 người rời. Câu hỏi «số lần ghé nhỏ hơn 2?» tách thành nhánh trái (10 ở, 40 rời) và nhánh phải (30 ở, 20 rời). Câu hỏi này có làm nhóm bớt lẫn lộn không?",
      steps: [
        ["Tính Gini của nút gốc", "Ở lại 40% và rời 60%. Gini = 1 − 0,4² − 0,6² = 1 − 0,16 − 0,36 = 0,48."],
        ["Tính Gini nhánh trái (50 người)", "Ở 20%, rời 80%. Gini = 1 − 0,2² − 0,8² = 1 − 0,04 − 0,64 = 0,32."],
        ["Tính Gini nhánh phải (50 người)", "Ở 60%, rời 40%. Gini = 1 − 0,6² − 0,4² = 0,48."],
        ["Lấy trung bình có trọng số", "Hai nhánh đều 50 người nên mỗi nhánh nặng một nửa: 0,5 × 0,32 + 0,5 × 0,48 = 0,40."],
        ["So với trước khi chia", "0,48 − 0,40 = 0,08. Mức lẫn lộn giảm 0,08, nên chia như vậy có ích."],
      ],
      say: "Cây chọn câu hỏi làm Gini giảm nhiều nhất. Ở đây mức giảm là 0,08, một chút. Nếu một câu hỏi khác tách hẳn người ở khỏi người rời thì Gini mỗi nhánh về 0 và mức giảm là 0,48, tối đa.",
      check: ["Nếu một câu hỏi tách hoàn hảo (nhánh trái 40 người ở, nhánh phải 60 người rời), Gini sau khi chia bằng bao nhiêu?", "0. Mỗi nhánh chỉ có một nhãn nên Gini mỗi nhánh bằng 0, trung bình cũng 0. Mức giảm là 0,48."],
    },
    en: {
      story: "In June, you let the machine ask its own questions to separate members about to leave from those staying. Gini is the ruler for how good a question is.",
      words: [
        ["Node", "A group of customers under consideration. The root node is the whole group before any split."],
        ["Gini", "How “mixed” a group is. It is 0 when the whole group has one label. The maximum is 0.5 when two labels split 50/50. Formula: 1 − p² − q²."],
        ["Split", "A yes/no question that divides the group into two branches, for example “fewer than 2 visits?”."],
      ],
      problem: "There are 100 customers: 40 stay, 60 leave. The question “fewer than 2 visits?” splits them into a left branch (10 stay, 40 leave) and a right branch (30 stay, 20 leave). Does this question make the groups less mixed?",
      steps: [
        ["Compute the Gini of the root node", "Stay 40%, leave 60%. Gini = 1 − 0.4² − 0.6² = 1 − 0.16 − 0.36 = 0.48."],
        ["Compute the Gini of the left branch (50 people)", "Stay 20%, leave 80%. Gini = 1 − 0.2² − 0.8² = 1 − 0.04 − 0.64 = 0.32."],
        ["Compute the Gini of the right branch (50 people)", "Stay 60%, leave 40%. Gini = 1 − 0.6² − 0.4² = 0.48."],
        ["Take the weighted average", "Both branches have 50 people so each counts half: 0.5 × 0.32 + 0.5 × 0.48 = 0.40."],
        ["Compare with before the split", "0.48 − 0.40 = 0.08. The mix dropped by 0.08, so this split helps."],
      ],
      say: "The tree picks the question that lowers Gini the most. Here the drop is 0.08, a small one. If another question separated the stayers from the leavers completely, each branch's Gini would be 0 and the drop would be 0.48, the maximum.",
      check: ["If a question separated them perfectly (left branch 40 stayers, right branch 60 leavers), what would the Gini after the split be?", "0. Each branch has a single label, so each Gini is 0 and so is the average. The drop is 0.48."],
    },
  },
  "nlp-tfidf": {
    vi: {
      story: "Tháng 6, hội viên viết đánh giá tự do. Bạn muốn biết từ nào đặc trưng cho từng đánh giá, thay vì từ nào chỉ xuất hiện nhiều.",
      words: [
        ["TF (tần suất từ)", "Từ đó chiếm bao nhiêu phần trong văn bản này. Một từ xuất hiện 1 lần trong văn bản 5 từ thì TF = 1 ÷ 5 = 0,2."],
        ["df (số văn bản chứa từ)", "Từ đó có mặt ở bao nhiêu văn bản trong bộ sưu tập."],
        ["IDF", "Điểm hiếm của từ: IDF = ln(N ÷ df), N là tổng số văn bản. Từ có mặt ở càng nhiều văn bản thì IDF càng thấp."],
        ["TF-IDF", "TF × IDF. Điểm cao nghĩa là từ lặp lại trong văn bản này và hiếm ở các văn bản khác."],
      ],
      problem: "Có 4 văn bản. Xét văn bản d3: «khách thích ghế massage rẻ». Trong cả bộ: «khách», «thích», «massage» có mặt ở 3 văn bản; «ghế», «rẻ» có mặt ở 2 văn bản. Từ nào đáng chú ý nhất trong d3?",
      steps: [
        ["Tính TF", "d3 có 5 từ, mỗi từ xuất hiện 1 lần nên mọi từ có TF = 1 ÷ 5 = 0,20."],
        ["Tính IDF cho từ phổ biến", "«khách», «thích», «massage»: N = 4, df = 3. IDF = ln(4 ÷ 3) ≈ 0,29."],
        ["Tính IDF cho từ hiếm hơn", "«ghế», «rẻ»: df = 2. IDF = ln(4 ÷ 2) ≈ 0,69."],
        ["Nhân TF với IDF", "Từ phổ biến: 0,20 × 0,29 ≈ 0,06. Từ hiếm hơn: 0,20 × 0,69 ≈ 0,14."],
      ],
      say: "Trong d3, «ghế» và «rẻ» được điểm gấp đôi (0,14 so với 0,06) vì ít văn bản khác nhắc tới. Chúng mô tả d3 rõ hơn là «khách» hay «massage». TF-IDF làm những từ ở đâu cũng có tự nhiên nhạt đi.",
      check: ["Nếu một từ có mặt ở cả 4 văn bản thì điểm TF-IDF của nó là bao nhiêu?", "0. IDF = ln(4 ÷ 4) = ln 1 = 0, nên TF × 0 = 0 dù từ đó lặp lại bao nhiêu lần."],
    },
    en: {
      story: "In June, members write free-text reviews. You want to know which words are distinctive for each review, rather than which words merely appear a lot.",
      words: [
        ["TF (term frequency)", "What share of this text the word takes up. A word appearing once in a 5-word text has TF = 1 ÷ 5 = 0.2."],
        ["df (document frequency)", "How many documents in the collection contain the word."],
        ["IDF", "How rare the word is: IDF = ln(N ÷ df), N being the number of documents. The more documents contain the word, the lower its IDF."],
        ["TF-IDF", "TF × IDF. A high score means the word repeats in this text and is rare in the others."],
      ],
      problem: "There are 4 documents. Look at d3: “guests like massage chair cheap”. Across the set, “guests”, “like” and “massage” appear in 3 documents; “chair” and “cheap” appear in 2. Which word stands out most in d3?",
      steps: [
        ["Compute TF", "d3 has 5 words, each appearing once, so every word has TF = 1 ÷ 5 = 0.20."],
        ["Compute IDF for the common words", "“guests”, “like”, “massage”: N = 4, df = 3. IDF = ln(4 ÷ 3) ≈ 0.29."],
        ["Compute IDF for the rarer words", "“chair”, “cheap”: df = 2. IDF = ln(4 ÷ 2) ≈ 0.69."],
        ["Multiply TF by IDF", "Common words: 0.20 × 0.29 ≈ 0.06. Rarer words: 0.20 × 0.69 ≈ 0.14."],
      ],
      say: "In d3, “chair” and “cheap” score more than double (0.14 vs 0.06) because few other documents mention them. They describe d3 better than “guests” or “massage” do. TF-IDF naturally fades the words that are everywhere.",
      check: ["If a word appears in all 4 documents, what is its TF-IDF score?", "0. IDF = ln(4 ÷ 4) = ln 1 = 0, so TF × 0 = 0 no matter how often the word repeats."],
    },
  },
  "slr-assume": {
    vi: {
      story: "Tháng 5, bạn đã có đường thẳng với R² cao. Trước khi tin nó, bạn kiểm xem giả định «đường thẳng» có đúng không bằng cách đọc phần dư.",
      words: [
        ["Phần dư", "Giá trị thật trừ giá trị đường thẳng dự đoán. Dương nghĩa là điểm nằm trên đường, âm nghĩa là nằm dưới."],
        ["R²", "Phần biến động của y mà đường thẳng giải thích được. Gần 1 nghĩa là bám sát, nhưng chưa nói đường có đúng dạng hay không."],
        ["Giả định tuyến tính", "Quan hệ giữa x và y là một đường thẳng, không phải đường cong."],
      ],
      problem: "Năm điểm dữ liệu: x = 1, 2, 3, 4, 5 và y = 1, 4, 9, 16, 25 (thực ra y = x²). Bạn vẫn vẽ một đường thẳng bình phương tối thiểu qua chúng. Đường đó có ổn không?",
      steps: [
        ["Tìm đường thẳng", "Trung bình x = 3, trung bình y = 11. Độ dốc = 6, chặn = 11 − 6 × 3 = −7. Đường là y = −7 + 6x."],
        ["Tính giá trị đường dự đoán", "x = 1, 2, 3, 4, 5 cho −1, 5, 11, 17, 23."],
        ["Tính phần dư (thật trừ dự đoán)", "1 − (−1) = +2; 4 − 5 = −1; 9 − 11 = −2; 16 − 17 = −1; 25 − 23 = +2."],
        ["Nhìn dãy phần dư theo x", "+2, −1, −2, −1, +2: giảm xuống rồi tăng lên, thành hình chữ U."],
        ["Tính R²", "Tổng sai lệch của y so với trung bình = 374. Tổng bình phương phần dư = 4 + 1 + 4 + 1 + 4 = 14. R² = 1 − 14 ÷ 374 ≈ 0,96."],
      ],
      say: "R² = 0,96 nghe rất tốt, nhưng dãy phần dư hình chữ U cho thấy đường thẳng đang sai có hệ thống: cao ở hai đầu, thấp ở giữa. Phần dư lẽ ra phải rải ngẫu nhiên quanh 0. Một hình dạng rõ ràng nghĩa là giả định tuyến tính đã bị phá.",
      check: ["Phần dư thấy được hình phễu (càng sang phải càng xòe rộng) cho biết giả định nào bị phá?", "Phương sai không đều: độ nhiễu tăng theo x. Hệ số vẫn tính ra được, nhưng khoảng tin cậy và p-value sẽ không đáng tin."],
    },
    en: {
      story: "In May, you have a line with a high R². Before trusting it, you check whether the “straight line” assumption holds by reading the residuals.",
      words: [
        ["Residual", "The actual value minus the value the line predicts. Positive means the point is above the line, negative means below."],
        ["R²", "The share of y's variation the line explains. Close to 1 means a tight fit, but it does not say the line has the right shape."],
        ["Linearity assumption", "The relationship between x and y is a straight line, not a curve."],
      ],
      problem: "Five data points: x = 1, 2, 3, 4, 5 and y = 1, 4, 9, 16, 25 (in truth y = x²). You still draw a least-squares straight line through them. Is that line fine?",
      steps: [
        ["Find the line", "Mean of x = 3, mean of y = 11. Slope = 6, intercept = 11 − 6 × 3 = −7. The line is y = −7 + 6x."],
        ["Compute the line's predictions", "x = 1, 2, 3, 4, 5 give −1, 5, 11, 17, 23."],
        ["Compute the residuals (actual minus predicted)", "1 − (−1) = +2; 4 − 5 = −1; 9 − 11 = −2; 16 − 17 = −1; 25 − 23 = +2."],
        ["Look at the residuals in order of x", "+2, −1, −2, −1, +2: down, then up, forming a U."],
        ["Compute R²", "Total variation of y around its mean = 374. Sum of squared residuals = 4 + 1 + 4 + 1 + 4 = 14. R² = 1 − 14 ÷ 374 ≈ 0.96."],
      ],
      say: "R² = 0.96 sounds great, but the U-shaped residuals show the line is wrong in a systematic way: too low at both ends, too high in the middle. Residuals should scatter randomly around 0. A clear shape means the linearity assumption is broken.",
      check: ["Residuals that fan out like a funnel (wider to the right) break which assumption?", "Constant variance: the noise grows with x. The coefficients can still be computed, but confidence intervals and p-values become unreliable."],
    },
  },
  "or-solv": {
    vi: {
      story: "Tháng 11, chị Lan hỏi giá bán và cách chia ngân sách tối ưu. Bạn dùng solver, nhưng cần biết khi nào nó đáng tin.",
      words: [
        ["Ràng buộc", "Giới hạn bạn phải tuân theo, ví dụ tổng ngân sách không quá 4."],
        ["Vùng khả thi", "Tập mọi phương án thỏa tất cả ràng buộc."],
        ["Đỉnh", "Góc của vùng khả thi, nơi hai ràng buộc gặp nhau."],
        ["Cực trị cục bộ", "Điểm tốt hơn mọi điểm ngay quanh nó, nhưng chưa chắc tốt nhất toàn bộ."],
      ],
      problem: "Phần A, bài tuyến tính: tối đa hóa 3x + 2y với x + y ≤ 4, x ≤ 3, x và y không âm. Phần B, bài cong: lãi theo giá (số minh họa) là 10 → 40, 20 → 55, 30 → 45, 40 → 50, 50 → 70, 60 → 30. Solver đi từ một giá, mỗi lần sang ô lân cận cao hơn cho tới khi không còn ô nào cao hơn. Kết quả có chắc là tốt nhất không?",
      steps: [
        ["A1. Liệt kê các đỉnh của vùng khả thi", "(0, 0), (3, 0), (3, 1), (0, 4)."],
        ["A2. Tính 3x + 2y tại từng đỉnh", "0, 9, 11, 8. Lớn nhất là 11 tại (3, 1)."],
        ["A3. Kết luận cho bài tuyến tính", "Phương án tối ưu luôn nằm ở một đỉnh, nên chỉ cần xét các đỉnh. Kết quả này là tối ưu toàn cục."],
        ["B1. Xuất phát từ giá 10", "Giá 10 cho lãi 40. Giá 20 cao hơn (55) nên đi sang 20. Từ 20, giá 10 cho 40 và giá 30 cho 45, đều thấp hơn, nên dừng ở giá 20 với lãi 55."],
        ["B2. Xuất phát từ giá 40", "Giá 40 cho lãi 50. Giá 50 cao hơn (70) nên đi sang 50. Từ 50, giá 40 cho 50 và giá 60 cho 30, đều thấp hơn, nên dừng ở giá 50 với lãi 70."],
        ["B3. So sánh", "Hai điểm xuất phát cho hai kết quả khác nhau: 55 và 70."],
      ],
      say: "Bài tuyến tính chỉ có một đáp án đáng tin: đỉnh tốt nhất. Bài cong thì solver chỉ đi theo dốc ở chỗ nó đứng, nên dừng ở chỗ nó leo tới được. Giá 20 là một đỉnh cục bộ (lãi 55), còn giá 50 mới tốt nhất (lãi 70). «Solver xong» chỉ nghĩa là «đã dừng», không phải «hết chỗ tốt hơn».",
      check: ["Bạn chạy solver ở bài cong từ 3 điểm xuất phát (10, 30, 60). Ra 55, 55, 70. Bạn kết luận gì và làm gì tiếp?", "Chưa thể gọi 55 là tối ưu toàn cục vì có kết quả 70 tốt hơn. Nên thử thêm nhiều điểm xuất phát và lấy kết quả tốt nhất, đồng thời nói rõ đây là cực trị cục bộ."],
    },
    en: {
      story: "In November, Ms. Lan asks about pricing and the best way to split the budget. You use a solver, but need to know when to trust it.",
      words: [
        ["Constraint", "A limit you must obey, for example total budget no more than 4."],
        ["Feasible region", "The set of all plans that satisfy every constraint."],
        ["Vertex (corner)", "A corner of the feasible region, where two constraints meet."],
        ["Local optimum", "A point better than everything right around it, but not necessarily the best overall."],
      ],
      problem: "Part A, a linear problem: maximise 3x + 2y with x + y ≤ 4, x ≤ 3, and x, y not negative. Part B, a curved problem: profit by price (illustrative numbers) is 10 → 40, 20 → 55, 30 → 45, 40 → 50, 50 → 70, 60 → 30. The solver starts from one price and each time moves to a neighbouring price that is higher, until none is higher. Is the result guaranteed to be the best?",
      steps: [
        ["A1. List the vertices of the feasible region", "(0, 0), (3, 0), (3, 1), (0, 4)."],
        ["A2. Compute 3x + 2y at each vertex", "0, 9, 11, 8. The largest is 11 at (3, 1)."],
        ["A3. Conclude for the linear problem", "The optimum always sits at a vertex, so only vertices need checking. This result is the global optimum."],
        ["B1. Start from price 10", "Price 10 gives profit 40. Price 20 is higher (55), so move to 20. From 20, price 10 gives 40 and price 30 gives 45, both lower, so it stops at price 20 with profit 55."],
        ["B2. Start from price 40", "Price 40 gives profit 50. Price 50 is higher (70), so move to 50. From 50, price 40 gives 50 and price 60 gives 30, both lower, so it stops at price 50 with profit 70."],
        ["B3. Compare", "Two starting points give two different results: 55 and 70."],
      ],
      say: "A linear problem has one answer you can trust: the best vertex. On a curved problem the solver only follows the slope where it stands, so it stops wherever it manages to climb to. Price 20 is a local optimum (profit 55) while price 50 is the best (profit 70). “The solver finished” only means “it stopped”, not “no better place exists”.",
      check: ["You run the solver on the curved problem from 3 starting points (10, 30, 60) and get 55, 55, 70. What do you conclude and do next?", "You cannot call 55 the global optimum, because 70 is better. Try more starting points, keep the best result, and say plainly that these are local optima."],
    },
  },
};
