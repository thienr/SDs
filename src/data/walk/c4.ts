import type { Visual, Walk } from "@/data/walk/pilot";

/**
 * C4 (tháng 7-8, Lotus Spa): rừng cây, chọn mô hình, chuỗi thời gian.
 * Chuỗi form 8 tuần đầu (tổng ba kênh): 50, 50, 51, 52, 54, 53, 56, 58.
 */
const base: Record<string, Walk> = {
 "ens-vote": {
  "vi": {
   "story": "Tháng 7, chị Lan muốn công cụ báo hội viên sắp rời đáng tin hơn một cây quyết định đơn lẻ. Bạn thử cho năm cây cùng bỏ phiếu.",
   "words": [
    [
     "Ensemble",
     "Nhiều mô hình cùng trả lời, rồi gộp lại."
    ],
    [
     "Bỏ phiếu số đông",
     "Lấy đáp án có nhiều phiếu nhất."
    ]
   ],
   "problem": "Mỗi cây đúng 70% và các cây sai độc lập với nhau. Năm cây bỏ phiếu thì số đông đúng với xác suất bao nhiêu?",
   "steps": [
    [
     "Cần ít nhất 3 cây đúng",
     "Số đông của 5 phiếu là từ 3 phiếu trở lên."
    ],
    [
     "Đúng đúng 3",
     "C(5,3) × 0,7³ × 0,3² = 10 × 0,343 × 0,09 = 0,3087."
    ],
    [
     "Đúng đúng 4",
     "C(5,4) × 0,7⁴ × 0,3 = 5 × 0,2401 × 0,3 = 0,3602."
    ],
    [
     "Đúng cả 5",
     "0,7⁵ = 0,1681."
    ],
    [
     "Cộng lại",
     "0,3087 + 0,3602 + 0,1681 = 0,837, khoảng 83,7%."
    ]
   ],
   "say": "Năm cây 70% cho số đông 83,7%. Nhưng chỉ đúng khi các cây sai độc lập: nếu cả năm cây nhìn cùng dữ liệu và sai giống nhau thì bỏ phiếu không giúp gì. Vì vậy bước sau (bagging) làm cho các cây khác nhau.",
   "check": [
    "Nếu các cây luôn sai giống hệt nhau thì số đông đúng bao nhiêu?",
    "Vẫn 70%, vì cả năm cây cùng đúng hoặc cùng sai."
   ]
  },
  "en": {
   "story": "In July, Ms. Lan wants the about-to-leave flag to be more trustworthy than a single decision tree. You let five trees vote.",
   "words": [
    [
     "Ensemble",
     "Many models answer together, then combine."
    ],
    [
     "Majority vote",
     "Take the answer with the most votes."
    ]
   ],
   "problem": "Each tree is right 70% of the time and the trees err independently. With five trees voting, what is the probability the majority is right?",
   "steps": [
    [
     "Need at least 3 right",
     "A majority of 5 votes is 3 or more."
    ],
    [
     "Exactly 3",
     "C(5,3) × 0.7³ × 0.3² = 10 × 0.343 × 0.09 = 0.3087."
    ],
    [
     "Exactly 4",
     "C(5,4) × 0.7⁴ × 0.3 = 5 × 0.2401 × 0.3 = 0.3602."
    ],
    [
     "All 5",
     "0.7⁵ = 0.1681."
    ],
    [
     "Add up",
     "0.3087 + 0.3602 + 0.1681 = 0.837, about 83.7%."
    ]
   ],
   "say": "Five 70% trees give a majority of 83.7%. But only when the trees err independently: if all five see the same data and err alike, voting helps nothing. That is why the next step (bagging) makes the trees differ.",
   "check": [
    "If the trees always err identically, how often is the majority right?",
    "Still 70%, since all five are right or wrong together."
   ]
  }
 },
 "ens-bag": {
  "vi": {
   "story": "Để các cây khác nhau, bạn không cho chúng xem cùng một danh sách hội viên. Mỗi cây nhận một «túi» rút có hoàn lại.",
   "words": [
    [
     "Bootstrap",
     "Rút n dòng có hoàn lại từ n dòng."
    ],
    [
     "Out-of-bag (OOB)",
     "Những dòng cây này không được rút, dùng để chấm cây đó."
    ]
   ],
   "problem": "Sáu hội viên đánh số 1 đến 6. Một cây rút 6 lần có hoàn lại được dãy [2, 5, 2, 6, 1, 5]. Dòng nào vào túi, dòng nào là OOB, và xác suất một dòng bị bỏ ngoài là bao nhiêu?",
   "steps": [
    [
     "Dòng trong túi",
     "2 (hai lần), 5 (hai lần), 6, 1: bốn dòng khác nhau."
    ],
    [
     "Dòng OOB",
     "3 và 4: cây này chưa từng thấy hai hội viên này."
    ],
    [
     "Dùng OOB",
     "Cho cây dự đoán hội viên 3 và 4 rồi so với đáp án thật, như một bài kiểm tra miễn phí."
    ],
    [
     "Xác suất một dòng bị bỏ",
     "Mỗi lần rút bỏ qua dòng đó với xác suất 5/6. Sau 6 lần: (5/6)⁶ = 0,335."
    ],
    [
     "Khi n lớn",
     "Xác suất này tiến về 1/e ≈ 0,368, nên mỗi cây thấy khoảng 63,2% dòng khác nhau."
    ]
   ],
   "say": "Mỗi cây học trên một túi khác nhau nên các cây khác nhau, và khoảng một phần ba dòng của mỗi cây là OOB, đủ để ước lượng sai số mà không cần tập kiểm tra riêng.",
   "check": [
    "Vì sao túi vẫn có 6 dòng mà chỉ có 4 hội viên khác nhau?",
    "Vì rút có hoàn lại: hội viên 2 và 5 bị rút hai lần."
   ]
  },
  "en": {
   "story": "To make the trees differ, you do not show them the same member list. Each tree gets a “bag” drawn with replacement.",
   "words": [
    [
     "Bootstrap",
     "Draw n rows with replacement from n rows."
    ],
    [
     "Out-of-bag (OOB)",
     "The rows a tree did not draw, used to score that tree."
    ]
   ],
   "problem": "Six members numbered 1 to 6. A tree draws 6 times with replacement and gets [2, 5, 2, 6, 1, 5]. Which rows are in the bag, which are OOB, and what is the chance a row is left out?",
   "steps": [
    [
     "Rows in the bag",
     "2 (twice), 5 (twice), 6, 1: four distinct rows."
    ],
    [
     "OOB rows",
     "3 and 4: this tree never saw these two members."
    ],
    [
     "Use OOB",
     "Have the tree predict members 3 and 4 and compare with the truth, a free test."
    ],
    [
     "Chance a row is left out",
     "Each draw skips that row with probability 5/6. After 6 draws: (5/6)⁶ = 0.335."
    ],
    [
     "For large n",
     "This tends to 1/e ≈ 0.368, so each tree sees about 63.2% distinct rows."
    ]
   ],
   "say": "Each tree learns from a different bag so the trees differ, and about a third of each tree's rows are OOB, enough to estimate error with no separate test set.",
   "check": [
    "Why does the bag have 6 rows but only 4 distinct members?",
    "Because of replacement: members 2 and 5 were drawn twice."
   ]
  }
 },
 "rf-col": {
  "vi": {
   "story": "Bagging vẫn có vấn đề: cột «số lần ghé» mạnh nhất nên cây nào cũng cắt ở đó trước, làm các cây giống nhau. Rừng ngẫu nhiên cấm cây nhìn hết các cột.",
   "words": [
    [
     "max_features",
     "Số cột mỗi nhát cắt được phép xem, thường √(số cột)."
    ],
    [
     "Tương quan giữa các cây",
     "Hai cây hay sai giống nhau thì tương quan cao."
    ]
   ],
   "problem": "Có 9 cột (số lần ghé, chi tiêu, thời gian làm hội viên, tuổi, chi nhánh, gói, kênh đến, ngày từ lần ghé cuối, số khiếu nại). Mỗi nhát cắt xem √9 = 3 cột. Hỏi: cột «số lần ghé» được xem ở một nhát cắt với xác suất nào, và 100 cây trung bình hóa giảm phương sai thế nào?",
   "steps": [
    [
     "Xác suất được xem",
     "3 trên 9 cột: 3/9 = 33%."
    ],
    [
     "Hệ quả",
     "Khoảng 67% nhát cắt gốc không thấy «số lần ghé» và phải dùng cột khác."
    ],
    [
     "Phương sai trung bình",
     "ρσ² + (1 − ρ)σ²/B với σ² = 1 và B = 100 cây."
    ],
    [
     "Cây giống nhau, ρ = 0,8",
     "0,8 + 0,2 ÷ 100 = 0,802."
    ],
    [
     "Cây khác nhau, ρ = 0,3",
     "0,3 + 0,7 ÷ 100 = 0,307."
    ]
   ],
   "say": "Thêm cây chỉ giảm được phần (1 − ρ)σ²/B, còn phần ρσ² còn lại do các cây giống nhau. Giảm ρ bằng cách giới hạn cột mới làm rừng tốt lên: từ 0,802 xuống 0,307.",
   "check": [
    "Nếu max_features = 9 (tất cả cột) thì rừng thành gì?",
    "Thành bagging thuần: mọi nhát cắt thấy hết các cột."
   ]
  },
  "en": {
   "story": "Bagging still has a problem: the column “visits” is strongest so every tree splits on it first, making the trees alike. A random forest forbids trees from seeing all columns.",
   "words": [
    [
     "max_features",
     "How many columns each split may look at, usually √(number of columns)."
    ],
    [
     "Correlation between trees",
     "Two trees that often err alike are highly correlated."
    ]
   ],
   "problem": "There are 9 columns (visits, spend, tenure, age, branch, package, channel, days since last visit, complaints). Each split sees √9 = 3 columns. Question: what is the chance “visits” is seen at a split, and how does averaging 100 trees reduce variance?",
   "steps": [
    [
     "Chance it is seen",
     "3 of 9 columns: 3/9 = 33%."
    ],
    [
     "Consequence",
     "About 67% of root splits do not see “visits” and must use another column."
    ],
    [
     "Variance of the average",
     "ρσ² + (1 − ρ)σ²/B with σ² = 1 and B = 100 trees."
    ],
    [
     "Alike trees, ρ = 0.8",
     "0.8 + 0.2 ÷ 100 = 0.802."
    ],
    [
     "Different trees, ρ = 0.3",
     "0.3 + 0.7 ÷ 100 = 0.307."
    ]
   ],
   "say": "Adding trees only reduces the part (1 − ρ)σ²/B; the part ρσ² remains because the trees are alike. Lowering ρ by limiting columns is what makes the forest better: from 0.802 down to 0.307.",
   "check": [
    "If max_features = 9 (all columns), what does the forest become?",
    "Plain bagging: every split sees all the columns."
   ]
  }
 },
 "imb-trap": {
  "vi": {
   "story": "Trong 1000 hội viên chỉ 50 người sắp rời. Một «mô hình» lười luôn nói «không ai rời» cũng nghe có vẻ tốt.",
   "words": [
    [
     "Lớp hiếm",
     "Nhóm ít xuất hiện nhưng là nhóm bạn cần tìm."
    ],
    [
     "Recall",
     "Trong người thật sự rời, tỷ lệ mô hình bắt được."
    ]
   ],
   "problem": "Mô hình lười: luôn đoán «ở lại». Công cụ thật bắt đúng 45 người rời, bỏ sót 5, báo nhầm 76, và đúng 874 người ở lại. So accuracy và recall.",
   "steps": [
    [
     "Accuracy của mô hình lười",
     "950 đúng trên 1000 = 95,0%."
    ],
    [
     "Recall của mô hình lười",
     "0 trên 50 = 0%. Không bắt được ai."
    ],
    [
     "Accuracy của công cụ",
     "(45 + 874) ÷ 1000 = 91,9%."
    ],
    [
     "Recall của công cụ",
     "45 ÷ 50 = 90%."
    ],
    [
     "So sánh",
     "Mô hình lười thắng accuracy (95,0 so với 91,9) nhưng vô dụng, còn công cụ thua accuracy mà có ích."
    ]
   ],
   "say": "Khi một lớp quá hiếm, accuracy bị lớp đông kéo lên. Với bài toán rời đi, hãy nhìn recall và precision của lớp hiếm.",
   "check": [
    "Precision của công cụ là bao nhiêu?",
    "45 ÷ (45 + 76) = 37,2%."
   ]
  },
  "en": {
   "story": "Among 1,000 members only 50 are about to leave. A lazy “model” that always says “nobody leaves” sounds fine.",
   "words": [
    [
     "Rare class",
     "The group that occurs seldom but is the one you need to find."
    ],
    [
     "Recall",
     "Among those truly leaving, the share the model catches."
    ]
   ],
   "problem": "Lazy model: always predicts “stays”. The real tool catches 45 leavers, misses 5, falsely flags 76, and gets 874 stayers right. Compare accuracy and recall.",
   "steps": [
    [
     "Lazy model accuracy",
     "950 right out of 1,000 = 95.0%."
    ],
    [
     "Lazy model recall",
     "0 of 50 = 0%. It catches no one."
    ],
    [
     "Tool accuracy",
     "(45 + 874) ÷ 1,000 = 91.9%."
    ],
    [
     "Tool recall",
     "45 ÷ 50 = 90%."
    ],
    [
     "Compare",
     "The lazy model wins on accuracy (95.0 vs 91.9) but is useless, while the tool loses on accuracy and is useful."
    ]
   ],
   "say": "When a class is very rare, accuracy is pulled up by the big class. For a leaving problem, look at recall and precision of the rare class.",
   "check": [
    "What is the tool's precision?",
    "45 ÷ (45 + 76) = 37.2%."
   ]
  }
 },
 "imb-fix": {
  "vi": {
   "story": "Bạn muốn mô hình chú ý hơn tới 50 người sắp rời. Có hai cách: cho họ trọng số lớn hơn, hoặc nhân bản dòng của họ.",
   "words": [
    [
     "Trọng số lớp",
     "Mỗi dòng của lớp hiếm tính nặng hơn khi tính sai số."
    ],
    [
     "Nhân bản",
     "Chép thêm các dòng của lớp hiếm."
    ]
   ],
   "problem": "1000 hội viên: 50 rời, 950 ở lại. Tính trọng số lớp theo n ÷ (2 × số dòng lớp), và nói cái bẫy của nhân bản.",
   "steps": [
    [
     "Trọng số lớp rời",
     "1000 ÷ (2 × 50) = 10."
    ],
    [
     "Trọng số lớp ở lại",
     "1000 ÷ (2 × 950) = 0,526."
    ],
    [
     "Tổng trọng số hai lớp",
     "Rời: 50 × 10 = 500. Ở lại: 950 × 0,526 = 500. Hai lớp ngang nhau."
    ],
    [
     "Nhân bản",
     "Chép mỗi người rời 19 lần được 950 dòng rời, bằng 950 dòng ở lại."
    ],
    [
     "Cái bẫy",
     "Chỉ có 50 người thật. Nếu chép trước rồi mới tách train/test thì bản chép của một người nằm ở cả hai phía và điểm số đẹp giả."
    ]
   ],
   "say": "Cả hai cách cho mô hình biết lớp rời quan trọng, nhưng không tạo ra khách mới. Luôn tách train/test trước, rồi mới chỉnh trọng số hay nhân bản chỉ trên phần train.",
   "check": [
    "Vì sao tách trước khi nhân bản?",
    "Để không có bản chép nào của người trong tập train xuất hiện lại trong tập test."
   ]
  },
  "en": {
   "story": "You want the model to pay more attention to the 50 leavers. Two ways: give them a larger weight, or duplicate their rows.",
   "words": [
    [
     "Class weight",
     "Each row of the rare class counts more when computing the error."
    ],
    [
     "Duplicating",
     "Copying extra rows of the rare class."
    ]
   ],
   "problem": "1,000 members: 50 leave, 950 stay. Compute class weights as n ÷ (2 × class rows), and state the trap of duplication.",
   "steps": [
    [
     "Weight of the leaving class",
     "1,000 ÷ (2 × 50) = 10."
    ],
    [
     "Weight of the staying class",
     "1,000 ÷ (2 × 950) = 0.526."
    ],
    [
     "Total weight of each class",
     "Leaving: 50 × 10 = 500. Staying: 950 × 0.526 = 500. The classes are equal."
    ],
    [
     "Duplication",
     "Copy each leaver 19 times to get 950 leaving rows, equal to 950 staying rows."
    ],
    [
     "The trap",
     "There are still only 50 real people. If you copy first and split train/test later, a person's copy lands on both sides and the score is falsely good."
    ]
   ],
   "say": "Both ways tell the model the leaving class matters, but neither creates new customers. Always split train/test first, then apply weights or duplication to the train part only.",
   "check": [
    "Why split before duplicating?",
    "So no copy of a person in train reappears in test."
   ]
  }
 },
 "bv-bias": {
  "vi": {
   "story": "Chị Lan hỏi vì sao mô hình thử trên dữ liệu cũ tốt mà dùng thật lại sai. Bạn tách sai số thành hai phần: lệch (bias) và nhảy (variance).",
   "words": [
    [
     "Bias",
     "Sai lệch có hệ thống: trung bình các dự đoán lệch khỏi giá trị thật."
    ],
    [
     "Variance",
     "Dự đoán nhảy lên xuống khi đổi mẫu huấn luyện."
    ]
   ],
   "problem": "Giá trị thật là 10. Ba mô hình, mỗi mô hình huấn luyện lại 4 lần cho dự đoán: A = 7, 7, 7, 7. B = 6, 14, 8, 12. C = 9, 11, 10, 10. Tính bias², variance và sai số bình phương trung bình.",
   "steps": [
    [
     "A",
     "Trung bình 7, bias = 7 − 10 = −3, bias² = 9. Variance 0. Sai số = 9."
    ],
    [
     "B",
     "Trung bình 10, bias 0. Độ lệch −4, 4, −2, 2: variance = (16 + 16 + 4 + 4) ÷ 4 = 10. Sai số = 10."
    ],
    [
     "C",
     "Trung bình 10, bias 0. Độ lệch −1, 1, 0, 0: variance = 2 ÷ 4 = 0,5. Sai số = 0,5."
    ],
    [
     "Kiểm tra A",
     "Sai số trực tiếp: (−3)² = 9 mỗi lần, trung bình 9. Khớp."
    ],
    [
     "Đọc",
     "A thẳng và ổn nhưng lệch (quá đơn giản). B trúng trung bình nhưng nhảy (quá phức tạp). C vừa."
    ]
   ],
   "say": "Sai số = bias² + variance (+ nhiễu không tránh được). Mô hình quá đơn giản lệch, mô hình quá phức tạp nhảy; mục tiêu là điểm cân bằng như C.",
   "check": [
    "Tăng độ phức tạp thường làm bias và variance thay đổi thế nào?",
    "Bias giảm, variance tăng."
   ]
  },
  "en": {
   "story": "Ms. Lan asks why a model does well on old data but errs in real use. You split the error into two parts: bias and variance.",
   "words": [
    [
     "Bias",
     "Systematic error: the average prediction is off from the truth."
    ],
    [
     "Variance",
     "Predictions jump when the training sample changes."
    ]
   ],
   "problem": "The true value is 10. Three models, each retrained 4 times, predict: A = 7, 7, 7, 7. B = 6, 14, 8, 12. C = 9, 11, 10, 10. Compute bias², variance and mean squared error.",
   "steps": [
    [
     "A",
     "Mean 7, bias = 7 − 10 = −3, bias² = 9. Variance 0. Error = 9."
    ],
    [
     "B",
     "Mean 10, bias 0. Deviations −4, 4, −2, 2: variance = (16 + 16 + 4 + 4) ÷ 4 = 10. Error = 10."
    ],
    [
     "C",
     "Mean 10, bias 0. Deviations −1, 1, 0, 0: variance = 2 ÷ 4 = 0.5. Error = 0.5."
    ],
    [
     "Check A",
     "Direct error: (−3)² = 9 each time, mean 9. Matches."
    ],
    [
     "Read",
     "A is steady but off (too simple). B hits the average but jumps (too complex). C is just right."
    ]
   ],
   "say": "Error = bias² + variance (+ irreducible noise). Too-simple models are biased, too-complex ones jump; the goal is a balance like C.",
   "check": [
    "How do bias and variance typically change as complexity rises?",
    "Bias falls, variance rises."
   ]
  }
 },
 "reg-ridge": {
  "vi": {
   "story": "Tháng 7, bạn có nhiều cột dự đoán form hơn tuần dữ liệu và hệ số nhảy lung tung. Ridge phạt hệ số lớn để ép chúng nhỏ lại.",
   "words": [
    [
     "Ridge",
     "Thêm phạt λ × (tổng bình phương hệ số) vào hàm mất mát."
    ],
    [
     "λ",
     "Độ mạnh của phạt. λ = 0 là hồi quy thường."
    ]
   ],
   "problem": "Một cột đã chuẩn hóa có Sxy = 28 và Sxx = 28. Tính hệ số theo công thức ridge một biến b = Sxy ÷ (Sxx + λ) với λ = 0, 28, 280.",
   "steps": [
    [
     "λ = 0",
     "28 ÷ 28 = 1,00."
    ],
    [
     "λ = 28",
     "28 ÷ 56 = 0,50."
    ],
    [
     "λ = 280",
     "28 ÷ 308 = 0,091."
    ],
    [
     "Có về 0 không?",
     "Không bao giờ chính xác bằng 0, vì mẫu số luôn hữu hạn."
    ],
    [
     "Điều kiện",
     "Phải chuẩn hóa các cột trước, nếu không phạt đối xử bất công với cột có thang đo lớn."
    ]
   ],
   "say": "λ tăng thì hệ số co dần nhưng không về 0. Ridge hợp khi nhiều cột đều có ích một chút. Chọn λ bằng cross-validation (thẻ sau).",
   "check": [
    "Nếu λ = 0 thì ridge giống gì?",
    "Hồi quy bình phương tối thiểu thường."
   ]
  },
  "en": {
   "story": "In July you have more predictor columns than weeks of data and the coefficients jump wildly. Ridge penalises large coefficients to shrink them.",
   "words": [
    [
     "Ridge",
     "Adds a penalty λ × (sum of squared coefficients) to the loss."
    ],
    [
     "λ",
     "Strength of the penalty. λ = 0 is ordinary regression."
    ]
   ],
   "problem": "One standardised column has Sxy = 28 and Sxx = 28. Compute the coefficient by the one-variable ridge formula b = Sxy ÷ (Sxx + λ) for λ = 0, 28, 280.",
   "steps": [
    [
     "λ = 0",
     "28 ÷ 28 = 1.00."
    ],
    [
     "λ = 28",
     "28 ÷ 56 = 0.50."
    ],
    [
     "λ = 280",
     "28 ÷ 308 = 0.091."
    ],
    [
     "Does it reach 0?",
     "Never exactly 0, because the denominator stays finite."
    ],
    [
     "Condition",
     "Standardise the columns first, otherwise the penalty treats large-scale columns unfairly."
    ]
   ],
   "say": "As λ rises the coefficient shrinks but does not reach 0. Ridge suits cases where many columns help a little. Choose λ by cross-validation (a later card).",
   "check": [
    "If λ = 0 what is ridge the same as?",
    "Ordinary least squares."
   ]
  }
 },
 "reg-lasso": {
  "vi": {
   "story": "Bạn cũng muốn loại bớt cột không cần. Lasso phạt tổng giá trị tuyệt đối của hệ số nên có thể đưa hệ số về đúng 0.",
   "words": [
    [
     "Lasso",
     "Phạt λ × (tổng |hệ số|)."
    ],
    [
     "Soft-threshold",
     "Với cột trực giao: hệ số mới = dấu × max(|b| − λ, 0)."
    ]
   ],
   "problem": "Bốn cột có hệ số thường: số lần ghé 3,0; chi tiêu 1,2; thời gian làm hội viên 0,4; tuổi 0,1. Dùng lasso soft-threshold với λ = 0,5, và ridge co hệ số theo b ÷ (1 + 1) = b ÷ 2. So sánh.",
   "steps": [
    [
     "Lasso: ghé",
     "3,0 − 0,5 = 2,5."
    ],
    [
     "Lasso: chi tiêu",
     "1,2 − 0,5 = 0,7."
    ],
    [
     "Lasso: thời gian",
     "0,4 − 0,5 < 0 → 0. Bị loại."
    ],
    [
     "Lasso: tuổi",
     "0,1 − 0,5 < 0 → 0. Bị loại."
    ],
    [
     "Ridge (chia 2)",
     "1,5; 0,6; 0,2; 0,05. Không cột nào về 0."
    ]
   ],
   "say": "Lasso vừa co vừa chọn cột: còn lại 2 cột. Ridge giữ cả 4 với hệ số nhỏ. Dùng lasso khi bạn nghĩ nhiều cột là thừa.",
   "check": [
    "Cột «tuổi» bị loại nghĩa là tuổi không ảnh hưởng thật sự?",
    "Không hẳn: nó chỉ đóng góp ít hơn mức phạt. Với λ khác nó có thể quay lại."
   ]
  },
  "en": {
   "story": "You also want to drop columns you do not need. Lasso penalises the sum of absolute coefficients, so it can push a coefficient to exactly 0.",
   "words": [
    [
     "Lasso",
     "Penalty λ × (sum of |coefficients|)."
    ],
    [
     "Soft-threshold",
     "For orthogonal columns: new coefficient = sign × max(|b| − λ, 0)."
    ]
   ],
   "problem": "Four columns with ordinary coefficients: visits 3.0; spend 1.2; tenure 0.4; age 0.1. Apply lasso soft-threshold with λ = 0.5, and ridge shrinking by b ÷ (1 + 1) = b ÷ 2. Compare.",
   "steps": [
    [
     "Lasso: visits",
     "3.0 − 0.5 = 2.5."
    ],
    [
     "Lasso: spend",
     "1.2 − 0.5 = 0.7."
    ],
    [
     "Lasso: tenure",
     "0.4 − 0.5 < 0 → 0. Dropped."
    ],
    [
     "Lasso: age",
     "0.1 − 0.5 < 0 → 0. Dropped."
    ],
    [
     "Ridge (halve)",
     "1.5; 0.6; 0.2; 0.05. No column reaches 0."
    ]
   ],
   "say": "Lasso both shrinks and selects: 2 columns remain. Ridge keeps all 4 with small coefficients. Use lasso when you think many columns are redundant.",
   "check": [
    "Does dropping “age” mean age truly has no effect?",
    "Not necessarily: it only contributes less than the penalty. With another λ it can return."
   ]
  }
 },
 "met-reg": {
  "vi": {
   "story": "Bạn dự báo form cho 4 tuần rồi chấm bằng hai thước. Một tuần bị lệch lớn do khuyến mãi bất ngờ.",
   "words": [
    [
     "MAE",
     "Trung bình giá trị tuyệt đối của sai số."
    ],
    [
     "RMSE",
     "Căn của trung bình bình phương sai số."
    ]
   ],
   "problem": "Sai số dự báo 4 tuần: 1, 2, 1, 10 form. Tính MAE và RMSE, rồi tính lại khi tuần lệch được thay bằng 2.",
   "steps": [
    [
     "MAE",
     "(1 + 2 + 1 + 10) ÷ 4 = 3,5."
    ],
    [
     "RMSE",
     "√((1 + 4 + 1 + 100) ÷ 4) = √26,5 = 5,15."
    ],
    [
     "Nếu bỏ tuần lệch (thay bằng 2): MAE",
     "(1 + 2 + 1 + 2) ÷ 4 = 1,5."
    ],
    [
     "Nếu bỏ tuần lệch: RMSE",
     "√((1 + 4 + 1 + 4) ÷ 4) = √2,5 = 1,58."
    ],
    [
     "So",
     "MAE giảm 3,5 → 1,5 (gấp 2,3 lần); RMSE giảm 5,15 → 1,58 (gấp 3,3 lần)."
    ]
   ],
   "say": "RMSE phạt nặng sai số lớn nên nhạy với tuần lệch. Dùng RMSE khi một lần sai lớn gây hại nhiều (hết nhân viên), dùng MAE khi mọi form sai đều tốn như nhau.",
   "check": [
    "RMSE có bao giờ nhỏ hơn MAE không?",
    "Không. RMSE luôn ≥ MAE."
   ]
  },
  "en": {
   "story": "You forecast forms for 4 weeks and score with two measures. One week is far off because of a surprise promotion.",
   "words": [
    [
     "MAE",
     "Mean of the absolute errors."
    ],
    [
     "RMSE",
     "Square root of the mean squared error."
    ]
   ],
   "problem": "Forecast errors for 4 weeks: 1, 2, 1, 10 forms. Compute MAE and RMSE, then recompute when the off week is replaced by 2.",
   "steps": [
    [
     "MAE",
     "(1 + 2 + 1 + 10) ÷ 4 = 3.5."
    ],
    [
     "RMSE",
     "√((1 + 4 + 1 + 100) ÷ 4) = √26.5 = 5.15."
    ],
    [
     "Without the off week (replaced by 2): MAE",
     "(1 + 2 + 1 + 2) ÷ 4 = 1.5."
    ],
    [
     "Without the off week: RMSE",
     "√((1 + 4 + 1 + 4) ÷ 4) = √2.5 = 1.58."
    ],
    [
     "Compare",
     "MAE falls 3.5 → 1.5 (2.3×); RMSE falls 5.15 → 1.58 (3.3×)."
    ]
   ],
   "say": "RMSE punishes big errors heavily so it is sensitive to the off week. Use RMSE when one big miss does much harm (running out of staff), MAE when every form of error costs the same.",
   "check": [
    "Can RMSE ever be smaller than MAE?",
    "No. RMSE is always ≥ MAE."
   ]
  }
 },
 "fe-num": {
  "vi": {
   "story": "Cột chi tiêu của hội viên lệch rất mạnh: đa số chi ít, vài người chi rất nhiều. Hồi quy thích cột đối xứng hơn, nên bạn thử log.",
   "words": [
    [
     "Log",
     "Biến phép nhân thành phép cộng: mỗi lần ×10 chỉ cộng 1."
    ],
    [
     "log(1 + x)",
     "Dùng khi x có thể bằng 0, vì log(0) không tồn tại."
    ]
   ],
   "problem": "Bốn hội viên chi 0, 9, 99, 999 (trăm nghìn). Tính log₁₀(1 + x) cho từng người và nói vì sao không dùng log₁₀(x).",
   "steps": [
    [
     "x = 0",
     "log₁₀(1) = 0."
    ],
    [
     "x = 9",
     "log₁₀(10) = 1."
    ],
    [
     "x = 99",
     "log₁₀(100) = 2."
    ],
    [
     "x = 999",
     "log₁₀(1000) = 3."
    ],
    [
     "Vì sao không dùng log₁₀(x)",
     "Hội viên chi 0 cho log₁₀(0), không tồn tại; và máy sẽ báo lỗi hoặc −∞."
    ]
   ],
   "say": "Từ khoảng 0 đến 999 (rất lệch) thành 0, 1, 2, 3 (đều). Lưu ý: khi dự đoán ra thang log, nhớ đổi ngược bằng 10^y − 1.",
   "check": [
    "Dự đoán ra y = 2,5 trên thang này tương ứng chi bao nhiêu?",
    "10^2,5 − 1 ≈ 315 (trăm nghìn)."
   ]
  },
  "en": {
   "story": "The spend column of members is strongly skewed: most spend little, a few spend a lot. Regression prefers symmetric columns, so you try a log.",
   "words": [
    [
     "Log",
     "Turns multiplication into addition: each ×10 only adds 1."
    ],
    [
     "log(1 + x)",
     "Used when x can be 0, since log(0) does not exist."
    ]
   ],
   "problem": "Four members spend 0, 9, 99, 999 (hundreds of thousands). Compute log₁₀(1 + x) for each and say why not log₁₀(x).",
   "steps": [
    [
     "x = 0",
     "log₁₀(1) = 0."
    ],
    [
     "x = 9",
     "log₁₀(10) = 1."
    ],
    [
     "x = 99",
     "log₁₀(100) = 2."
    ],
    [
     "x = 999",
     "log₁₀(1000) = 3."
    ],
    [
     "Why not log₁₀(x)",
     "A member spending 0 gives log₁₀(0), which does not exist; software gives an error or −∞."
    ]
   ],
   "say": "From a range 0 to 999 (very skewed) to 0, 1, 2, 3 (even). Note: when the model predicts on the log scale, convert back with 10^y − 1.",
   "check": [
    "A prediction y = 2.5 on this scale corresponds to what spend?",
    "10^2.5 − 1 ≈ 315 (hundreds of thousands)."
   ]
  }
 },
 "fe-cat": {
  "vi": {
   "story": "Kênh quảng cáo là chữ (GDN, Meta, TikTok), mà hồi quy chỉ nhận số. Bạn đổi mỗi kênh thành cột 0/1.",
   "words": [
    [
     "Biến giả",
     "Cột 0/1 báo «có thuộc kênh này không»."
    ],
    [
     "Kênh gốc",
     "Kênh bị bỏ cột, làm mốc so sánh."
    ]
   ],
   "problem": "Form trung bình mỗi tuần: GDN 18, Meta 20, TikTok 12. Lập hai cột giả (Meta, TikTok) với GDN làm gốc, tìm hệ số, và nói vì sao không dùng đủ ba cột.",
   "steps": [
    [
     "Hệ số chặn",
     "Bằng giá trị của kênh gốc: 18."
    ],
    [
     "Hệ số Meta",
     "20 − 18 = +2."
    ],
    [
     "Hệ số TikTok",
     "12 − 18 = −6."
    ],
    [
     "Dự đoán TikTok",
     "18 + (−6) = 12. Khớp trung bình."
    ],
    [
     "Bẫy dùng đủ ba cột",
     "Cột GDN + Meta + TikTok luôn bằng 1, trùng với cột hệ số chặn: các cột phụ thuộc hoàn toàn, hệ số không xác định duy nhất."
    ]
   ],
   "say": "Với k nhóm cần k − 1 cột giả khi có hệ số chặn. Hệ số đọc là «hơn/kém kênh gốc», nên đổi kênh gốc thì hệ số đổi nhưng dự đoán không đổi.",
   "check": [
    "Nếu chọn Meta làm kênh gốc, hệ số TikTok là bao nhiêu?",
    "12 − 20 = −8."
   ]
  },
  "en": {
   "story": "Ad channel is text (GDN, Meta, TikTok) but regression takes only numbers. You turn each channel into a 0/1 column.",
   "words": [
    [
     "Dummy",
     "A 0/1 column saying “does it belong to this channel”."
    ],
    [
     "Base channel",
     "The channel whose column is dropped, used as the reference."
    ]
   ],
   "problem": "Mean forms per week: GDN 18, Meta 20, TikTok 12. Build two dummies (Meta, TikTok) with GDN as base, find the coefficients, and say why not use all three.",
   "steps": [
    [
     "Intercept",
     "Equals the base channel's value: 18."
    ],
    [
     "Meta coefficient",
     "20 − 18 = +2."
    ],
    [
     "TikTok coefficient",
     "12 − 18 = −6."
    ],
    [
     "Predict TikTok",
     "18 + (−6) = 12. Matches the mean."
    ],
    [
     "Trap of all three",
     "GDN + Meta + TikTok columns always sum to 1, equal to the intercept column: the columns are perfectly dependent and coefficients are not uniquely defined."
    ]
   ],
   "say": "With k groups you need k − 1 dummies when there is an intercept. Coefficients read as “more/less than the base channel”, so changing the base changes the coefficients but not the predictions.",
   "check": [
    "If Meta is chosen as the base, what is the TikTok coefficient?",
    "12 − 20 = −8."
   ]
  }
 },
 "fe-time": {
  "vi": {
   "story": "Tháng trong năm là số 1 đến 12, nhưng tháng 12 và tháng 1 là hàng xóm. Nếu đưa số tháng thẳng vào mô hình, hai tháng này cách nhau 11.",
   "words": [
    [
     "Sin/cos",
     "Đặt tháng lên vòng tròn: (sin, cos) của góc 360° × m ÷ 12."
    ]
   ],
   "problem": "Tính khoảng cách giữa tháng 12 và tháng 1, và giữa tháng 12 và tháng 6, khi dùng số tháng thẳng và khi dùng (sin, cos).",
   "steps": [
    [
     "Số tháng thẳng",
     "12 và 1 cách 11; 12 và 6 cách 6. Mô hình nghĩ tháng 12 gần tháng 6 hơn tháng 1."
    ],
    [
     "Tọa độ tháng 12",
     "Góc 360°: (sin, cos) = (0, 1)."
    ],
    [
     "Tọa độ tháng 1",
     "Góc 30°: (0,5; 0,866)."
    ],
    [
     "Khoảng cách 12 ↔ 1",
     "√(0,5² + (1 − 0,866)²) = √(0,25 + 0,018) = 0,52."
    ],
    [
     "Tháng 6",
     "Góc 180°: (0, −1). Khoảng cách 12 ↔ 6 = 2,0."
    ]
   ],
   "say": "Trên vòng tròn tháng 12 và tháng 1 chỉ cách 0,52, còn tháng 6 cách 2,0. Đúng với thực tế mùa vụ: Tết nối cuối năm với đầu năm. Với tuần trong chuỗi thời gian thì số thứ tự chỉ nói «muộn hơn», không nói gì về mùa.",
   "check": [
    "Hai tháng đối diện nhau trên vòng tròn cách nhau bao nhiêu?",
    "2,0 (đường kính của vòng tròn bán kính 1)."
   ]
  },
  "en": {
   "story": "Month of the year is a number from 1 to 12, but December and January are neighbours. Feeding the month number straight in makes them 11 apart.",
   "words": [
    [
     "Sin/cos",
     "Place the month on a circle: (sin, cos) of the angle 360° × m ÷ 12."
    ]
   ],
   "problem": "Compute the distance between month 12 and month 1, and between month 12 and month 6, using the raw month number and using (sin, cos).",
   "steps": [
    [
     "Raw month number",
     "12 and 1 are 11 apart; 12 and 6 are 6 apart. The model thinks December is closer to June than to January."
    ],
    [
     "Coordinates of month 12",
     "Angle 360°: (sin, cos) = (0, 1)."
    ],
    [
     "Coordinates of month 1",
     "Angle 30°: (0.5, 0.866)."
    ],
    [
     "Distance 12 ↔ 1",
     "√(0.5² + (1 − 0.866)²) = √(0.25 + 0.018) = 0.52."
    ],
    [
     "Month 6",
     "Angle 180°: (0, −1). Distance 12 ↔ 6 = 2.0."
    ]
   ],
   "say": "On the circle December and January are only 0.52 apart while June is 2.0. This matches seasonal reality: Tết links year-end to year-start. For weeks in a time series, a running number only says “later”, nothing about season.",
   "check": [
    "How far apart are two opposite months on the circle?",
    "2.0 (the diameter of a circle of radius 1)."
   ]
  }
 },
 "cv-fold": {
  "vi": {
   "story": "Với 20 hội viên, một lần tách train/test cho điểm phụ thuộc vào ai rơi vào test. Cross-validation xoay vòng để mỗi người đều được dùng làm test một lần.",
   "words": [
    [
     "K-fold",
     "Chia dữ liệu thành K miếng; mỗi lượt giấu một miếng làm test, huấn luyện trên K − 1 miếng còn lại."
    ]
   ],
   "problem": "20 hội viên chia 5 miếng (4 người mỗi miếng). Tỷ lệ đoán sai trên từng miếng test: 0,10; 0,08; 0,12; 0,09; 0,11. Tính trung bình và độ lệch chuẩn, và số lần mỗi người làm test.",
   "steps": [
    [
     "Số lượt huấn luyện",
     "5 lượt, mỗi lượt học trên 16 người, chấm 4 người."
    ],
    [
     "Mỗi người làm test",
     "Đúng 1 lần, làm train 4 lần."
    ],
    [
     "Trung bình",
     "(0,10 + 0,08 + 0,12 + 0,09 + 0,11) ÷ 5 = 0,10."
    ],
    [
     "Độ lệch",
     "0; −0,02; 0,02; −0,01; 0,01 → bình phương 0,001 → ÷ 4 = 0,00025 → căn = 0,016."
    ],
    [
     "Kết luận",
     "Sai số ước lượng 10% ± 1,6%."
    ]
   ],
   "say": "Nhờ xoay vòng, bạn có cả ước lượng sai số (10%) lẫn mức dao động (1,6%), điều mà một lần tách không cho. Cái giá là phải huấn luyện K lần.",
   "check": [
    "Với K = 20 trên 20 hội viên thì gọi là gì?",
    "Leave-one-out: mỗi lượt giấu đúng 1 người."
   ]
  },
  "en": {
   "story": "With 20 members, a single train/test split gives a score that depends on who lands in the test set. Cross-validation rotates so each person serves as test once.",
   "words": [
    [
     "K-fold",
     "Split the data into K pieces; each round hides one piece as test and trains on the other K − 1."
    ]
   ],
   "problem": "20 members split into 5 folds (4 people each). Error rate on each test fold: 0.10; 0.08; 0.12; 0.09; 0.11. Compute the mean and standard deviation, and how often each person is test.",
   "steps": [
    [
     "Number of training rounds",
     "5 rounds, each learning on 16 people and scoring 4."
    ],
    [
     "Each person as test",
     "Exactly once, as train 4 times."
    ],
    [
     "Mean",
     "(0.10 + 0.08 + 0.12 + 0.09 + 0.11) ÷ 5 = 0.10."
    ],
    [
     "Spread",
     "0; −0.02; 0.02; −0.01; 0.01 → squares sum 0.001 → ÷ 4 = 0.00025 → root = 0.016."
    ],
    [
     "Conclusion",
     "Estimated error 10% ± 1.6%."
    ]
   ],
   "say": "By rotating you get both an error estimate (10%) and its fluctuation (1.6%), which one split cannot give. The price is training K times.",
   "check": [
    "What is K = 20 on 20 members called?",
    "Leave-one-out: each round hides exactly 1 person."
   ]
  }
 },
 "cv-grid": {
  "vi": {
   "story": "Cây quyết định có hai nút chỉnh: độ sâu tối đa và số hội viên tối thiểu ở mỗi lá. Bạn thử mọi cặp trong một lưới.",
   "words": [
    [
     "Siêu tham số",
     "Nút chỉnh bạn đặt trước khi học, không do dữ liệu học ra."
    ],
    [
     "Grid search",
     "Thử mọi tổ hợp trong lưới và chọn tổ hợp có sai số CV nhỏ nhất."
    ]
   ],
   "problem": "Lưới: độ sâu {2, 3, 5} × lá tối thiểu {5, 10}. Sai số CV: sâu 2: 0,13 và 0,12; sâu 3: 0,11 và 0,10; sâu 5: 0,09 và 0,08. Có bao nhiêu lần huấn luyện với CV 5 miếng và nên chọn gì?",
   "steps": [
    [
     "Số tổ hợp",
     "3 × 2 = 6."
    ],
    [
     "Số lần huấn luyện",
     "6 × 5 miếng = 30 lần."
    ],
    [
     "Tổ hợp tốt nhất",
     "Sâu 5, lá tối thiểu 10, sai số 0,08."
    ],
    [
     "Cảnh báo",
     "Sâu 5 là giá trị lớn nhất của lưới: nghiệm nằm ở rìa."
    ],
    [
     "Việc cần làm",
     "Mở rộng lưới (sâu 7, 10) để xem sai số còn giảm hay đã quay lại tăng."
    ]
   ],
   "say": "Grid search chỉ chọn trong những ô bạn viết ra. Nếu ô tốt nhất ở rìa lưới, lưới chưa đủ rộng. Và nên giữ một tập test cuối chưa chạm tới để chấm mô hình đã chọn.",
   "check": [
    "Thêm một siêu tham số thứ ba có 4 giá trị thì số lần huấn luyện là bao nhiêu?",
    "6 × 4 × 5 = 120."
   ]
  },
  "en": {
   "story": "A decision tree has two knobs: maximum depth and minimum members per leaf. You try every pair in a grid.",
   "words": [
    [
     "Hyperparameter",
     "A knob you set before learning, not learned from the data."
    ],
    [
     "Grid search",
     "Try every combination in the grid and choose the one with the lowest CV error."
    ]
   ],
   "problem": "Grid: depth {2, 3, 5} × minimum leaf {5, 10}. CV error: depth 2: 0.13 and 0.12; depth 3: 0.11 and 0.10; depth 5: 0.09 and 0.08. How many trainings with 5-fold CV and what to choose?",
   "steps": [
    [
     "Number of combinations",
     "3 × 2 = 6."
    ],
    [
     "Number of trainings",
     "6 × 5 folds = 30."
    ],
    [
     "Best combination",
     "Depth 5, minimum leaf 10, error 0.08."
    ],
    [
     "Warning",
     "Depth 5 is the largest value in the grid: the optimum is at the edge."
    ],
    [
     "What to do",
     "Widen the grid (depth 7, 10) to see whether error keeps falling or turns back up."
    ]
   ],
   "say": "Grid search only chooses among cells you wrote. If the best cell is at the grid edge, the grid is too narrow. And keep a final test set untouched to score the chosen model.",
   "check": [
    "Add a third hyperparameter with 4 values: how many trainings?",
    "6 × 4 × 5 = 120."
   ]
  }
 },
 "ts-order": {
  "vi": {
   "story": "Từ đây bạn dự báo form theo tuần. Tám tuần đầu của tổng form (ba kênh cộng lại) là 50, 50, 51, 52, 54, 53, 56, 58. Điều đầu tiên: thứ tự tuần là thông tin.",
   "words": [
    [
     "Chuỗi thời gian",
     "Dãy giá trị đo theo thời gian, thứ tự có nghĩa."
    ],
    [
     "Rò rỉ tương lai",
     "Mô hình học từ dữ liệu xảy ra sau điểm cần dự báo."
    ]
   ],
   "problem": "Chấm bằng hai cách. Cách sai: giấu ngẫu nhiên tuần 3 và 6, dự báo mỗi tuần bằng trung bình hai tuần kề. Cách đúng: học tuần 1–6, dự báo tuần 7–8 bằng giá trị tuần cuối (53). So MAE.",
   "steps": [
    [
     "Cách sai, tuần 3",
     "(50 + 52) ÷ 2 = 51; thật 51; sai số 0."
    ],
    [
     "Cách sai, tuần 6",
     "(54 + 56) ÷ 2 = 55; thật 53; sai số 2."
    ],
    [
     "MAE cách sai",
     "(0 + 2) ÷ 2 = 1."
    ],
    [
     "Cách đúng",
     "Tuần 7: |56 − 53| = 3. Tuần 8: |58 − 53| = 5. MAE = 4."
    ],
    [
     "So",
     "1 so với 4: cách sai trông tốt gấp 4 lần vì nó nhìn được tuần sau để đoán tuần trước."
    ]
   ],
   "say": "Khi dự báo, tương lai không có sẵn. Luôn tách theo thời gian: học trước, chấm sau, và không xáo các tuần.",
   "check": [
    "Vì sao xáo ngẫu nhiên làm điểm đẹp giả?",
    "Vì tập train chứa tuần sau điểm test, mô hình đã «thấy trước» hướng đi."
   ]
  },
  "en": {
   "story": "From here you forecast forms by week. The first eight weeks of total forms (three channels added) are 50, 50, 51, 52, 54, 53, 56, 58. The first lesson: week order is information.",
   "words": [
    [
     "Time series",
     "A sequence of values measured over time where order matters."
    ],
    [
     "Future leakage",
     "The model learns from data that happened after the point being forecast."
    ]
   ],
   "problem": "Score two ways. Wrong: hide weeks 3 and 6 at random and forecast each by the mean of its two neighbours. Right: learn weeks 1–6 and forecast weeks 7–8 with the last value (53). Compare MAE.",
   "steps": [
    [
     "Wrong, week 3",
     "(50 + 52) ÷ 2 = 51; actual 51; error 0."
    ],
    [
     "Wrong, week 6",
     "(54 + 56) ÷ 2 = 55; actual 53; error 2."
    ],
    [
     "Wrong MAE",
     "(0 + 2) ÷ 2 = 1."
    ],
    [
     "Right",
     "Week 7: |56 − 53| = 3. Week 8: |58 − 53| = 5. MAE = 4."
    ],
    [
     "Compare",
     "1 vs 4: the wrong way looks 4× better because it peeks at the later week to guess the earlier one."
    ]
   ],
   "say": "When forecasting, the future is not available. Always split by time: learn first, score later, and never shuffle weeks.",
   "check": [
    "Why does random shuffling make the score falsely good?",
    "Because train contains weeks after the test point, so the model has already “seen” the direction."
   ]
  }
 },
 "ts-dep": {
  "vi": {
   "story": "Trong bài hồi quy trước, mỗi hội viên là một dòng độc lập. Với chuỗi tuần, tuần này giống tuần trước nên các dòng không còn độc lập.",
   "words": [
    [
     "Tự tương quan",
     "Mối tương quan giữa một chuỗi và chính nó lùi vài bước."
    ]
   ],
   "problem": "Ghép tuần t với tuần t − 1 trong chuỗi 50, 50, 51, 52, 54, 53, 56, 58: bảy cặp (50,50), (50,51), (51,52), (52,54), (54,53), (53,56), (56,58). Tính tương quan của hai cột.",
   "steps": [
    [
     "Trung bình hai cột",
     "Cột tuần trước: 366 ÷ 7 = 52,29. Cột tuần này: 374 ÷ 7 = 53,43."
    ],
    [
     "Tích độ lệch",
     "Cộng bảy tích ≈ 33,15."
    ],
    [
     "Tổng bình phương",
     "Cột 1 ≈ 29,43; cột 2 ≈ 47,7."
    ],
    [
     "Tương quan",
     "33,15 ÷ √(29,43 × 47,7) = 33,15 ÷ 37,47 ≈ 0,88."
    ],
    [
     "Ý nghĩa",
     "Biết tuần trước là biết rất nhiều về tuần này."
    ]
   ],
   "say": "Tương quan 0,88 vừa là cơ hội (tuần trước giúp dự báo) vừa là cảnh báo: số dòng hiệu dụng ít hơn số dòng thật, nên kiểm định và khoảng tin cậy thông thường quá lạc quan.",
   "check": [
    "Nếu các tuần độc lập hoàn toàn, tương quan này khoảng bao nhiêu?",
    "Gần 0."
   ]
  },
  "en": {
   "story": "In the earlier regression, each member was an independent row. In a weekly series, this week resembles last week so rows are no longer independent.",
   "words": [
    [
     "Autocorrelation",
     "Correlation between a series and itself a few steps back."
    ]
   ],
   "problem": "Pair week t with week t − 1 in the series 50, 50, 51, 52, 54, 53, 56, 58: seven pairs (50,50), (50,51), (51,52), (52,54), (54,53), (53,56), (56,58). Compute the correlation of the two columns.",
   "steps": [
    [
     "Means of the two columns",
     "Previous week: 366 ÷ 7 = 52.29. This week: 374 ÷ 7 = 53.43."
    ],
    [
     "Product of deviations",
     "Sum of the seven products ≈ 33.15."
    ],
    [
     "Sums of squares",
     "Column 1 ≈ 29.43; column 2 ≈ 47.7."
    ],
    [
     "Correlation",
     "33.15 ÷ √(29.43 × 47.7) = 33.15 ÷ 37.47 ≈ 0.88."
    ],
    [
     "Meaning",
     "Knowing last week tells you a lot about this week."
    ]
   ],
   "say": "A correlation of 0.88 is both an opportunity (last week helps forecast) and a warning: effective rows are fewer than real rows, so usual tests and confidence intervals are too optimistic.",
   "check": [
    "If weeks were totally independent, about what would this correlation be?",
    "Near 0."
   ]
  }
 },
 "ts-decomp": {
  "vi": {
   "story": "Tháng Tết form tăng. Nhưng tăng thêm một số cố định hay tăng theo tỷ lệ? Điều đó quyết định cách tách chuỗi.",
   "words": [
    [
     "Xu hướng, mùa, nhiễu",
     "Ba phần của chuỗi."
    ],
    [
     "Cộng",
     "Chuỗi = xu hướng + mùa + nhiễu. Biên độ mùa cố định."
    ],
    [
     "Nhân",
     "Chuỗi = xu hướng × mùa × nhiễu. Biên độ mùa lớn theo mức."
    ]
   ],
   "problem": "Tháng Tết hiện nay tăng +10 form so với mức nền 50. Nếu mức nền lên 100, kết quả là bao nhiêu theo mô hình cộng và theo mô hình nhân (hệ số mùa 1,2)?",
   "steps": [
    [
     "Mức nền 50, cộng",
     "50 + 10 = 60."
    ],
    [
     "Mức nền 50, nhân",
     "50 × 1,2 = 60. Hai mô hình trùng nhau."
    ],
    [
     "Mức nền 100, cộng",
     "100 + 10 = 110."
    ],
    [
     "Mức nền 100, nhân",
     "100 × 1,2 = 120."
    ],
    [
     "Đọc",
     "Hai mô hình chỉ khác nhau khi mức nền thay đổi."
    ]
   ],
   "say": "Nếu biên độ mùa lớn dần cùng mức nền, dùng mô hình nhân; nếu giữ nguyên, dùng mô hình cộng. Lotus Spa đang mở rộng, nên mùa Tết nhiều khả năng tăng theo tỷ lệ.",
   "check": [
    "Hệ số mùa 1,2 nghĩa là gì?",
    "Tháng đó cao hơn mức nền 20%."
   ]
  },
  "en": {
   "story": "Forms rise in the Tết month. But does it rise by a fixed amount or by a proportion? That decides how to decompose the series.",
   "words": [
    [
     "Trend, season, noise",
     "Three parts of a series."
    ],
    [
     "Additive",
     "Series = trend + season + noise. Seasonal amplitude is fixed."
    ],
    [
     "Multiplicative",
     "Series = trend × season × noise. Seasonal amplitude grows with the level."
    ]
   ],
   "problem": "Today the Tết month adds +10 forms over a base of 50. If the base rises to 100, what is the result under the additive model and under the multiplicative model (seasonal factor 1.2)?",
   "steps": [
    [
     "Base 50, additive",
     "50 + 10 = 60."
    ],
    [
     "Base 50, multiplicative",
     "50 × 1.2 = 60. The two models coincide."
    ],
    [
     "Base 100, additive",
     "100 + 10 = 110."
    ],
    [
     "Base 100, multiplicative",
     "100 × 1.2 = 120."
    ],
    [
     "Read",
     "The two models differ only when the base level changes."
    ]
   ],
   "say": "If the seasonal swing grows with the level, use the multiplicative model; if it stays fixed, use additive. Lotus Spa is expanding, so the Tết season likely grows proportionally.",
   "check": [
    "What does a seasonal factor of 1.2 mean?",
    "That month is 20% above the base level."
   ]
  }
 },
 "ts-naive": {
  "vi": {
   "story": "Trước khi dùng mô hình phức tạp, bạn cần một mốc: dự báo ngây là «tuần này bằng tuần trước». Mô hình nào không thắng nó thì không đáng dùng.",
   "words": [
    [
     "Naive",
     "Dự báo mọi tuần bằng giá trị tuần liền trước."
    ]
   ],
   "problem": "Chuỗi 50, 50, 51, 52, 54, 53, 56, 58. Dự báo naive cho tuần 2 đến 8 và tính MAE; rồi dự báo tuần 9.",
   "steps": [
    [
     "Dự báo tuần 2–8",
     "50, 50, 51, 52, 54, 53, 56."
    ],
    [
     "Thật tuần 2–8",
     "50, 51, 52, 54, 53, 56, 58."
    ],
    [
     "Sai số tuyệt đối",
     "0, 1, 1, 2, 1, 3, 2."
    ],
    [
     "MAE",
     "10 ÷ 7 = 1,43 form."
    ],
    [
     "Tuần 9",
     "Dự báo = 58 (tuần 8)."
    ]
   ],
   "say": "MAE 1,43 là mốc phải thắng. Mỗi mô hình sau (SMA, SES, Holt, ARIMA) phải có MAE thấp hơn 1,43 trên cùng các tuần thì mới đáng dùng.",
   "check": [
    "Nếu một mô hình phức tạp cho MAE 2,0 thì kết luận gì?",
    "Nó tệ hơn naive, nên đừng dùng."
   ]
  },
  "en": {
   "story": "Before using complex models you need a benchmark: the naive forecast is “this week equals last week”. A model that cannot beat it is not worth using.",
   "words": [
    [
     "Naive",
     "Forecast every week as the value of the week before."
    ]
   ],
   "problem": "Series 50, 50, 51, 52, 54, 53, 56, 58. Naive forecasts for weeks 2 to 8 and the MAE; then the forecast for week 9.",
   "steps": [
    [
     "Forecast weeks 2–8",
     "50, 50, 51, 52, 54, 53, 56."
    ],
    [
     "Actual weeks 2–8",
     "50, 51, 52, 54, 53, 56, 58."
    ],
    [
     "Absolute errors",
     "0, 1, 1, 2, 1, 3, 2."
    ],
    [
     "MAE",
     "10 ÷ 7 = 1.43 forms."
    ],
    [
     "Week 9",
     "Forecast = 58 (week 8)."
    ]
   ],
   "say": "MAE 1.43 is the bar to beat. Every later model (SMA, SES, Holt, ARIMA) must have MAE below 1.43 on the same weeks to be worth using.",
   "check": [
    "If a complex model gives MAE 2.0, what is the conclusion?",
    "It is worse than naive, so do not use it."
   ]
  }
 },
 "ts-sma": {
  "vi": {
   "story": "Naive tin hết vào một tuần nên nhảy theo nhiễu. SMA lấy trung bình ba tuần gần nhất để làm mượt.",
   "words": [
    [
     "SMA(3)",
     "Dự báo tuần t = trung bình ba tuần t−3, t−2, t−1."
    ]
   ],
   "problem": "Chuỗi 50, 50, 51, 52, 54, 53, 56, 58. Dự báo SMA(3) cho tuần 4–8, tính MAE và so với naive trên cùng các tuần (sai số naive 1, 2, 1, 3, 2), rồi dự báo tuần 9.",
   "steps": [
    [
     "Dự báo",
     "Tuần 4: 50,33. Tuần 5: 51. Tuần 6: 52,33. Tuần 7: 53. Tuần 8: 54,33."
    ],
    [
     "Thật",
     "52, 54, 53, 56, 58."
    ],
    [
     "Sai số tuyệt đối",
     "1,67; 3; 0,67; 3; 3,67."
    ],
    [
     "MAE SMA",
     "12 ÷ 5 = 2,40."
    ],
    [
     "Naive trên cùng tuần",
     "MAE = (1 + 2 + 1 + 3 + 2) ÷ 5 = 1,8. Tuần 9 SMA = (53 + 56 + 58) ÷ 3 = 55,67."
    ]
   ],
   "say": "SMA tệ hơn naive (2,40 so với 1,8) vì chuỗi đang đi lên và trung bình ba tuần luôn tụt lại phía sau xu hướng. SMA hợp với chuỗi đi ngang nhiều nhiễu, không hợp chuỗi có dốc.",
   "check": [
    "Tăng cửa sổ từ 3 lên 6 làm độ trễ tăng hay giảm?",
    "Tăng: trung bình dài hơn thì mượt hơn nhưng trễ hơn."
   ]
  },
  "en": {
   "story": "Naive trusts a single week so it jumps with noise. SMA averages the last three weeks to smooth.",
   "words": [
    [
     "SMA(3)",
     "Forecast for week t = mean of weeks t−3, t−2, t−1."
    ]
   ],
   "problem": "Series 50, 50, 51, 52, 54, 53, 56, 58. SMA(3) forecasts for weeks 4–8, its MAE compared with naive on the same weeks (naive errors 1, 2, 1, 3, 2), then the week-9 forecast.",
   "steps": [
    [
     "Forecast",
     "Week 4: 50.33. Week 5: 51. Week 6: 52.33. Week 7: 53. Week 8: 54.33."
    ],
    [
     "Actual",
     "52, 54, 53, 56, 58."
    ],
    [
     "Absolute errors",
     "1.67; 3; 0.67; 3; 3.67."
    ],
    [
     "SMA MAE",
     "12 ÷ 5 = 2.40."
    ],
    [
     "Naive on the same weeks",
     "MAE = (1 + 2 + 1 + 3 + 2) ÷ 5 = 1.8. Week 9 SMA = (53 + 56 + 58) ÷ 3 = 55.67."
    ]
   ],
   "say": "SMA is worse than naive (2.40 vs 1.8) because the series is rising and a three-week average always lags the trend. SMA suits flat noisy series, not series with a slope.",
   "check": [
    "Raising the window from 3 to 6 increases or decreases the lag?",
    "Increases: a longer average is smoother but laggier."
   ]
  }
 },
 "ts-ses": {
  "vi": {
   "story": "SES giữ một «mức» và cập nhật mỗi tuần: mức mới = α × tuần mới + (1 − α) × mức cũ. Tuần mới nặng hơn tuần cũ, nhưng chưa có dốc.",
   "words": [
    [
     "α",
     "Hệ số làm mượt, từ 0 đến 1. Lớn thì bám sát tuần mới."
    ],
    [
     "Mức",
     "Giá trị nền ước lượng ở thời điểm hiện tại."
    ]
   ],
   "problem": "Dùng α = 0,5, mức đầu l₁ = 50 (tuần 1). Cập nhật qua tuần 2 đến 8 để dự báo tuần 9, và nói trọng số của ba tuần gần nhất.",
   "steps": [
    [
     "Tuần 2",
     "0,5 × 50 + 0,5 × 50 = 50."
    ],
    [
     "Tuần 3 và 4",
     "0,5 × 51 + 0,5 × 50 = 50,5; rồi 0,5 × 52 + 0,5 × 50,5 = 51,25."
    ],
    [
     "Tuần 5 và 6",
     "0,5 × 54 + 0,5 × 51,25 = 52,63; rồi 0,5 × 53 + 0,5 × 52,63 = 52,81."
    ],
    [
     "Tuần 7 và 8",
     "0,5 × 56 + 0,5 × 52,81 = 54,41; rồi 0,5 × 58 + 0,5 × 54,41 = 56,20."
    ],
    [
     "Dự báo tuần 9",
     "56,2. Trọng số tuần 8, 7, 6 = 0,5; 0,25; 0,125."
    ]
   ],
   "say": "Dự báo 56,2 gần giá trị mới hơn SMA (55,67 dùng ba tuần ngang nhau) nhưng vẫn thấp hơn xu hướng. Với α = 0,9 dự báo là 57,77 (bám sát), với α = 0,1 là 52,06 (rất chậm).",
   "check": [
    "α = 1 cho dự báo gì?",
    "Chính là naive: dự báo bằng tuần cuối."
   ]
  },
  "en": {
   "story": "SES keeps a “level” and updates it each week: new level = α × new week + (1 − α) × old level. Recent weeks weigh more, but there is no slope.",
   "words": [
    [
     "α",
     "Smoothing factor from 0 to 1. Large hugs the latest week."
    ],
    [
     "Level",
     "The estimated base value at the present moment."
    ]
   ],
   "problem": "Use α = 0.5, initial level l₁ = 50 (week 1). Update through weeks 2 to 8 to forecast week 9, and state the weights of the last three weeks.",
   "steps": [
    [
     "Week 2",
     "0.5 × 50 + 0.5 × 50 = 50."
    ],
    [
     "Weeks 3 and 4",
     "0.5 × 51 + 0.5 × 50 = 50.5; then 0.5 × 52 + 0.5 × 50.5 = 51.25."
    ],
    [
     "Weeks 5 and 6",
     "0.5 × 54 + 0.5 × 51.25 = 52.63; then 0.5 × 53 + 0.5 × 52.63 = 52.81."
    ],
    [
     "Weeks 7 and 8",
     "0.5 × 56 + 0.5 × 52.81 = 54.41; then 0.5 × 58 + 0.5 × 54.41 = 56.20."
    ],
    [
     "Week-9 forecast",
     "56.2. Weights of weeks 8, 7, 6 = 0.5; 0.25; 0.125."
    ]
   ],
   "say": "The forecast 56.2 is closer to recent values than SMA (55.67, three weeks equal) but still below the trend. With α = 0.9 the forecast is 57.77 (hugging), with α = 0.1 it is 52.06 (very slow).",
   "check": [
    "What forecast does α = 1 give?",
    "Exactly naive: the forecast equals the last week."
   ]
  }
 },
 "ts-holt": {
  "vi": {
   "story": "Chuỗi đang đi lên mỗi tuần khoảng 1 đến 2 form, mà SES không biết dốc. Holt giữ thêm một «dốc» và cộng nó vào dự báo.",
   "words": [
    [
     "Dốc (b)",
     "Mức tăng ước lượng mỗi tuần."
    ],
    [
     "Dự báo h tuần",
     "Mức hiện tại + h × dốc."
    ]
   ],
   "problem": "Holt với α = 0,5, β = 0,5, mức đầu 50, dốc đầu 0, chạy qua tuần 2–8 cho mức 57,20 và dốc 1,63. Dự báo tuần 9, 10 và 12, rồi nói rủi ro dự báo xa.",
   "steps": [
    [
     "Tuần 9 (h = 1)",
     "57,20 + 1 × 1,63 = 58,83."
    ],
    [
     "Tuần 10 (h = 2)",
     "57,20 + 2 × 1,63 = 60,46."
    ],
    [
     "Tuần 12 (h = 4)",
     "57,20 + 4 × 1,63 = 63,73."
    ],
    [
     "Tuần 20 (h = 12)",
     "57,20 + 12 × 1,63 = 76,77."
    ],
    [
     "Vấn đề",
     "Dốc cứ chạy mãi: sau 12 tuần vẫn cộng thêm 1,63 mỗi tuần, ngay cả khi form không thể tăng vô hạn."
    ]
   ],
   "say": "Holt thắng SES khi có xu hướng, nhưng xu hướng thẳng tắp là giả định mạnh. Dự báo xa nên giảm dốc dần (damped trend) hoặc cập nhật thường xuyên.",
   "check": [
    "Nếu dốc ước lượng bằng 0 thì Holt thành gì?",
    "Thành SES."
   ]
  },
  "en": {
   "story": "The series rises by about 1 to 2 forms per week, but SES does not know about slope. Holt keeps an extra “slope” and adds it to the forecast.",
   "words": [
    [
     "Slope (b)",
     "The estimated gain per week."
    ],
    [
     "h-week forecast",
     "Current level + h × slope."
    ]
   ],
   "problem": "Holt with α = 0.5, β = 0.5, initial level 50, initial slope 0, run through weeks 2–8 gives level 57.20 and slope 1.63. Forecast weeks 9, 10 and 12, then state the risk of long-range forecasts.",
   "steps": [
    [
     "Week 9 (h = 1)",
     "57.20 + 1 × 1.63 = 58.83."
    ],
    [
     "Week 10 (h = 2)",
     "57.20 + 2 × 1.63 = 60.46."
    ],
    [
     "Week 12 (h = 4)",
     "57.20 + 4 × 1.63 = 63.73."
    ],
    [
     "Week 20 (h = 12)",
     "57.20 + 12 × 1.63 = 76.77."
    ],
    [
     "The problem",
     "The slope runs on forever: after 12 weeks it still adds 1.63 per week, even though forms cannot grow without limit."
    ]
   ],
   "say": "Holt beats SES when there is a trend, but a straight-line trend is a strong assumption. For long forecasts damp the slope gradually (damped trend) or update frequently.",
   "check": [
    "If the estimated slope is 0, what does Holt become?",
    "SES."
   ]
  }
 },
 "ts-hw": {
  "vi": {
   "story": "Form trong tháng có nhịp: đầu tháng thấp, cuối tháng (sau lương) cao. Chu kỳ là 4 tuần. Holt-Winters nhận chu kỳ này, nhưng bạn phải khai bốn tuần mỗi vòng.",
   "words": [
    [
     "Hệ số mùa",
     "Mức tuần đó so với mức nền; trung bình các hệ số bằng 1."
    ],
    [
     "Chu kỳ",
     "Số tuần trong một vòng mùa, ở đây là 4."
    ]
   ],
   "problem": "Hệ số mùa theo tuần trong tháng: 0,90; 0,96; 1,00; 1,14. Mức nền hiện tại 55. Dự báo bốn tuần tới và kiểm tra tổng hệ số.",
   "steps": [
    [
     "Kiểm tra",
     "0,90 + 0,96 + 1,00 + 1,14 = 4,00: trung bình 1."
    ],
    [
     "Tuần 1 của tháng",
     "55 × 0,90 = 49,5."
    ],
    [
     "Tuần 2",
     "55 × 0,96 = 52,8."
    ],
    [
     "Tuần 3",
     "55 × 1,00 = 55,0."
    ],
    [
     "Tuần 4",
     "55 × 1,14 = 62,7."
    ]
   ],
   "say": "Cùng mức nền 55 nhưng dự báo dao động 49,5 đến 62,7. Máy không tự tìm chu kỳ: nếu bạn khai 4 mà thực tế là 5 tuần, các hệ số sẽ lệch pha. Cần ít nhất hai chu kỳ dữ liệu để ước lượng.",
   "check": [
    "Vì sao cần ít nhất hai chu kỳ dữ liệu?",
    "Với một chu kỳ, không phân biệt được mùa với nhiễu của chính chu kỳ đó."
   ]
  },
  "en": {
   "story": "Forms have a monthly rhythm: low at the start of the month, high at the end (after payday). The cycle is 4 weeks. Holt-Winters accepts this cycle, but you must declare four weeks per round.",
   "words": [
    [
     "Seasonal factor",
     "That week's level relative to the base; the factors average 1."
    ],
    [
     "Period",
     "The number of weeks in one seasonal round, here 4."
    ]
   ],
   "problem": "Seasonal factors by week of month: 0.90; 0.96; 1.00; 1.14. Current base level 55. Forecast the next four weeks and check the sum of factors.",
   "steps": [
    [
     "Check",
     "0.90 + 0.96 + 1.00 + 1.14 = 4.00: average 1."
    ],
    [
     "Week 1 of month",
     "55 × 0.90 = 49.5."
    ],
    [
     "Week 2",
     "55 × 0.96 = 52.8."
    ],
    [
     "Week 3",
     "55 × 1.00 = 55.0."
    ],
    [
     "Week 4",
     "55 × 1.14 = 62.7."
    ]
   ],
   "say": "With the same base 55 the forecast swings from 49.5 to 62.7. The machine does not find the period itself: if you declare 4 but reality is 5 weeks, the factors fall out of phase. You need at least two cycles of data to estimate.",
   "check": [
    "Why at least two cycles of data?",
    "With one cycle, you cannot tell season from that cycle's own noise."
   ]
  }
 },
 "ts-mape": {
  "vi": {
   "story": "Chị Lan thích nghe «sai bao nhiêu phần trăm». MAPE chia sai số cho giá trị thật, nên rất dễ hiểu, nhưng gãy khi có tuần 0 form.",
   "words": [
    [
     "MAPE",
     "Trung bình của |sai số| ÷ |thật|, tính bằng %."
    ],
    [
     "WAPE",
     "Tổng |sai số| ÷ tổng |thật|."
    ]
   ],
   "problem": "Bốn tuần: thật 50, 40, 0, 60 và dự báo 45, 44, 3, 57. Tính phần trăm sai từng tuần, MAPE, và nêu cách thay thế.",
   "steps": [
    [
     "Sai số tuyệt đối",
     "5, 4, 3, 3."
    ],
    [
     "Phần trăm sai",
     "Tuần 1: 5 ÷ 50 = 10%. Tuần 2: 4 ÷ 40 = 10%. Tuần 4: 3 ÷ 60 = 5%."
    ],
    [
     "Tuần 3",
     "3 ÷ 0: không xác định. MAPE không tính được."
    ],
    [
     "MAPE nếu bỏ tuần 0",
     "(10 + 10 + 5) ÷ 3 = 8,33%."
    ],
    [
     "WAPE",
     "15 ÷ 150 = 10% (tổng sai số 5 + 4 + 3 + 3 = 15; tổng thật 150). Tính được kể cả có tuần 0."
    ]
   ],
   "say": "Bỏ tuần 0 như thể nó không tồn tại là xóa đúng tuần khó nhất. WAPE thay MAPE khi có giá trị bằng hoặc gần 0. MAPE còn bất đối xứng: dự báo thiếu một nửa sai 50%, dự báo gấp đôi sai 100%.",
   "check": [
    "Dự báo 20 khi thật là 40 sai bao nhiêu phần trăm, và dự báo 80 thì sao?",
    "20 ÷ 40 = 50% và 40 ÷ 40 = 100%."
   ]
  },
  "en": {
   "story": "Ms. Lan likes to hear “how many percent off”. MAPE divides the error by the actual so it is easy to grasp, but breaks when there is a week with 0 forms.",
   "words": [
    [
     "MAPE",
     "Mean of |error| ÷ |actual|, as %."
    ],
    [
     "WAPE",
     "Sum of |error| ÷ sum of |actual|."
    ]
   ],
   "problem": "Four weeks: actual 50, 40, 0, 60 and forecast 45, 44, 3, 57. Compute each week's percentage error, MAPE, and state the alternative.",
   "steps": [
    [
     "Absolute errors",
     "5, 4, 3, 3."
    ],
    [
     "Percentage errors",
     "Week 1: 5 ÷ 50 = 10%. Week 2: 4 ÷ 40 = 10%. Week 4: 3 ÷ 60 = 5%."
    ],
    [
     "Week 3",
     "3 ÷ 0: undefined. MAPE cannot be computed."
    ],
    [
     "MAPE if week 0 is dropped",
     "(10 + 10 + 5) ÷ 3 = 8.33%."
    ],
    [
     "WAPE",
     "15 ÷ 150 = 10% (total error 5 + 4 + 3 + 3 = 15; total actual 150). Works even with a 0 week."
    ]
   ],
   "say": "Dropping the 0 week as if it did not exist deletes the hardest week. Use WAPE in place of MAPE when values are 0 or near 0. MAPE is also asymmetric: forecasting half the actual is 50% off, forecasting double is 100% off.",
   "check": [
    "Forecasting 20 when the actual is 40 is how many percent off, and forecasting 80?",
    "20 ÷ 40 = 50% and 40 ÷ 40 = 100%."
   ]
  }
 },
 "ts-walk": {
  "vi": {
   "story": "Kiểm tra dự báo giống như dự báo thật: chỉ biết quá khứ rồi đoán tuần kế tiếp. Walk-forward lặp lại việc đó khi cửa sổ học cuốn dài ra.",
   "words": [
    [
     "Walk-forward",
     "Học trên đoạn đầu, chấm tuần kế, thêm tuần đó vào dữ liệu học, rồi lặp lại."
    ]
   ],
   "problem": "Chuỗi 50, 50, 51, 52, 54, 53, 56, 58 với dự báo naive. Bắt đầu học tuần 1–5 và đi tới tuần 8. Tính sai số từng bước và MAE.",
   "steps": [
    [
     "Bước 1",
     "Học tuần 1–5, dự báo tuần 6 = 54; thật 53; sai số 1."
    ],
    [
     "Bước 2",
     "Học tuần 1–6, dự báo tuần 7 = 53; thật 56; sai số 3."
    ],
    [
     "Bước 3",
     "Học tuần 1–7, dự báo tuần 8 = 56; thật 58; sai số 2."
    ],
    [
     "MAE",
     "(1 + 3 + 2) ÷ 3 = 2,0."
    ],
    [
     "Số lần chấm",
     "3 lần, mỗi lần chỉ dùng dữ liệu xảy ra trước."
    ]
   ],
   "say": "Khác với cross-validation thường, walk-forward không bao giờ nhìn vào tương lai, và cho nhiều điểm chấm hơn một lần tách. MAE 2,0 phản ánh chất lượng thực tế như khi chạy hàng tuần.",
   "check": [
    "Vì sao không dùng cross-validation xáo ngẫu nhiên?",
    "Vì nó đưa tuần sau vào tập học, rò rỉ tương lai."
   ]
  },
  "en": {
   "story": "Test a forecast like a real forecast: know only the past, then guess the next week. Walk-forward repeats this as the learning window rolls longer.",
   "words": [
    [
     "Walk-forward",
     "Learn on the early part, score the next week, add that week to the learning data, then repeat."
    ]
   ],
   "problem": "Series 50, 50, 51, 52, 54, 53, 56, 58 with the naive forecast. Start learning on weeks 1–5 and walk to week 8. Compute each step's error and the MAE.",
   "steps": [
    [
     "Step 1",
     "Learn weeks 1–5, forecast week 6 = 54; actual 53; error 1."
    ],
    [
     "Step 2",
     "Learn weeks 1–6, forecast week 7 = 53; actual 56; error 3."
    ],
    [
     "Step 3",
     "Learn weeks 1–7, forecast week 8 = 56; actual 58; error 2."
    ],
    [
     "MAE",
     "(1 + 3 + 2) ÷ 3 = 2.0."
    ],
    [
     "Number of scorings",
     "3, each using only data that happened before."
    ]
   ],
   "say": "Unlike ordinary cross-validation, walk-forward never looks at the future, and gives more scoring points than one split. MAE 2.0 reflects real quality as when run weekly.",
   "check": [
    "Why not use shuffled cross-validation?",
    "Because it puts later weeks into the learning set, leaking the future."
   ]
  }
 },
 "ts-stat": {
  "vi": {
   "story": "ARIMA đòi chuỗi «đứng yên»: trung bình và độ dao động không đổi theo thời gian. Chuỗi form đang đi lên thì chưa đứng yên.",
   "words": [
    [
     "Đứng yên",
     "Trung bình và phương sai không đổi theo lúc bạn nhìn."
    ],
    [
     "Lấy hiệu",
     "Thay mỗi giá trị bằng hiệu với giá trị trước."
    ]
   ],
   "problem": "Chuỗi 50, 50, 51, 52, 54, 53, 56, 58. So trung bình hai nửa, rồi lấy hiệu bậc 1 và so lại.",
   "steps": [
    [
     "Nửa đầu và cuối",
     "(50 + 50 + 51 + 52) ÷ 4 = 50,75; (54 + 53 + 56 + 58) ÷ 4 = 55,25. Lệch 4,5."
    ],
    [
     "Kết luận",
     "Trung bình trôi lên: không đứng yên."
    ],
    [
     "Hiệu bậc 1",
     "0, 1, 1, 2, −1, 3, 2."
    ],
    [
     "Trung bình ba hiệu đầu và bốn hiệu cuối",
     "0,67 và 1,5. Lệch 0,83."
    ],
    [
     "Đọc",
     "Sau khi lấy hiệu, mức trôi từ 4,5 giảm còn 0,83; chuỗi hiệu quanh một giá trị khoảng 1,14."
    ]
   ],
   "say": "Lấy hiệu biến «mức form» thành «form tăng thêm bao nhiêu mỗi tuần», dễ đứng yên hơn. Đó là chữ I (integrated) trong ARIMA.",
   "check": [
    "Hiệu bậc 1 của chuỗi tăng đều 2 mỗi tuần là gì?",
    "Mọi giá trị đều bằng 2: hằng số, đứng yên."
   ]
  },
  "en": {
   "story": "ARIMA demands a “stationary” series: mean and fluctuation do not change with when you look. A rising forms series is not stationary yet.",
   "words": [
    [
     "Stationary",
     "Mean and variance do not change with when you look."
    ],
    [
     "Differencing",
     "Replace each value with its difference from the previous value."
    ]
   ],
   "problem": "Series 50, 50, 51, 52, 54, 53, 56, 58. Compare the means of the two halves, then take the first difference and compare again.",
   "steps": [
    [
     "First and second half",
     "(50 + 50 + 51 + 52) ÷ 4 = 50.75; (54 + 53 + 56 + 58) ÷ 4 = 55.25. Gap 4.5."
    ],
    [
     "Conclusion",
     "The mean drifts upward: not stationary."
    ],
    [
     "First difference",
     "0, 1, 1, 2, −1, 3, 2."
    ],
    [
     "Mean of the first three and last four differences",
     "0.67 and 1.5. Gap 0.83."
    ],
    [
     "Read",
     "After differencing, the drift falls from 4.5 to 0.83; the differences hover around 1.14."
    ]
   ],
   "say": "Differencing turns “the level of forms” into “how many forms added per week”, which is easier to make stationary. That is the I (integrated) in ARIMA.",
   "check": [
    "What is the first difference of a series rising steadily by 2 each week?",
    "Every value equals 2: a constant, stationary."
   ]
  }
 },
 "ts-acf": {
  "vi": {
   "story": "Để biết nên đưa bao nhiêu tuần quá khứ vào mô hình, bạn đo tương quan của chuỗi với chính nó lùi k tuần: ACF.",
   "words": [
    [
     "ACF(k)",
     "Tương quan giữa tuần t và tuần t − k, dùng trung bình cả chuỗi."
    ],
    [
     "PACF(k)",
     "Tương quan với tuần t − k sau khi đã trừ ảnh hưởng của các tuần giữa."
    ]
   ],
   "problem": "Chuỗi 50, 50, 51, 52, 54, 53, 56, 58 (trung bình 53). Kết quả ACF: lag 1 = 0,53; lag 2 = 0,17; lag 3 = 0,03. Tính PACF lag 2 theo công thức (r₂ − r₁²) ÷ (1 − r₁²) và đọc.",
   "steps": [
    [
     "r₁² ",
     "0,534² = 0,285."
    ],
    [
     "Tử số",
     "0,172 − 0,285 = −0,113."
    ],
    [
     "Mẫu số",
     "1 − 0,285 = 0,715."
    ],
    [
     "PACF lag 2",
     "−0,113 ÷ 0,715 = −0,16."
    ],
    [
     "Đọc",
     "ACF giảm dần (0,53 → 0,17 → 0,03). PACF lag 2 gần 0: ảnh hưởng của tuần t − 2 gần như chỉ đi qua tuần t − 1."
    ]
   ],
   "say": "ACF lag 1 là 0,53 vì dùng trung bình cả chuỗi; nó nhỏ hơn tương quan cặp 0,88 ở thẻ trước vì xu hướng bị trừ khỏi trung bình chung. ACF giảm dần với PACF cắt sau lag 1 gợi ý AR(1). Mẫu 8 tuần quá ngắn để tin hẳn.",
   "check": [
    "ACF lag 1 = 0,53 có nghĩa tuần này và tuần trước tương quan thế nào?",
    "Tương quan dương vừa phải: tuần trước cao thường kéo theo tuần này cao."
   ]
  },
  "en": {
   "story": "To know how many past weeks to put in the model, you measure the series' correlation with itself k weeks back: ACF.",
   "words": [
    [
     "ACF(k)",
     "Correlation between week t and week t − k, using the whole-series mean."
    ],
    [
     "PACF(k)",
     "Correlation with week t − k after removing the effect of the weeks in between."
    ]
   ],
   "problem": "Series 50, 50, 51, 52, 54, 53, 56, 58 (mean 53). ACF results: lag 1 = 0.53; lag 2 = 0.17; lag 3 = 0.03. Compute PACF lag 2 by (r₂ − r₁²) ÷ (1 − r₁²) and read it.",
   "steps": [
    [
     "r₁²",
     "0.534² = 0.285."
    ],
    [
     "Numerator",
     "0.172 − 0.285 = −0.113."
    ],
    [
     "Denominator",
     "1 − 0.285 = 0.715."
    ],
    [
     "PACF lag 2",
     "−0.113 ÷ 0.715 = −0.16."
    ],
    [
     "Read",
     "ACF decays (0.53 → 0.17 → 0.03). PACF at lag 2 is near 0: the effect of week t − 2 passes almost entirely through week t − 1."
    ]
   ],
   "say": "ACF lag 1 is 0.53 because it uses the whole-series mean; it is smaller than the pairwise correlation 0.88 on the earlier card because the trend is subtracted from the overall mean. A decaying ACF with PACF cutting off after lag 1 suggests AR(1). Eight weeks is too short to trust fully.",
   "check": [
    "ACF lag 1 = 0.53: how are this week and last week related?",
    "Moderately positive: a high last week tends to bring a high this week."
   ]
  }
 },
 "ts-ar": {
  "vi": {
   "story": "AR(1) đoán tuần này từ độ lệch của tuần trước so với mức trung bình, nhân một hệ số φ.",
   "words": [
    [
     "AR(1)",
     "x̂ₜ = μ + φ × (xₜ₋₁ − μ)."
    ],
    [
     "φ",
     "Mức độ «nhớ» tuần trước; ở AR(1) xấp xỉ ACF lag 1."
    ]
   ],
   "problem": "Với μ = 53, φ = 0,53 (từ ACF lag 1) và tuần 8 = 58, dự báo tuần 9, 10 và 11.",
   "steps": [
    [
     "Tuần 9",
     "53 + 0,53 × (58 − 53) = 53 + 2,65 = 55,65."
    ],
    [
     "Tuần 10",
     "53 + 0,53 × (55,65 − 53) = 53 + 1,40 = 54,40."
    ],
    [
     "Tuần 11",
     "53 + 0,53 × (54,40 − 53) = 53 + 0,74 = 53,74."
    ],
    [
     "Xu hướng",
     "55,65 → 54,40 → 53,74: tiến dần về 53."
    ],
    [
     "Quy luật",
     "Độ lệch nhân 0,53 mỗi tuần: 5 → 2,65 → 1,40 → 0,74."
    ]
   ],
   "say": "AR(1) quay về trung bình, nên dự báo xa hội tụ về μ. Điều đó tốt cho chuỗi dao động quanh mức cố định và sai cho chuỗi có xu hướng, vì vậy cần lấy hiệu trước (thẻ ARIMA). Dùng φ chính xác 0,534 cho tuần 9 là 55,67.",
   "check": [
    "Nếu φ = 1 thì dự báo thế nào?",
    "Mọi dự báo bằng tuần cuối (58): giống naive, không về trung bình."
   ]
  },
  "en": {
   "story": "AR(1) guesses this week from last week's deviation from the mean, multiplied by a coefficient φ.",
   "words": [
    [
     "AR(1)",
     "x̂ₜ = μ + φ × (xₜ₋₁ − μ)."
    ],
    [
     "φ",
     "How much last week is “remembered”; in AR(1) approximately ACF at lag 1."
    ]
   ],
   "problem": "With μ = 53, φ = 0.53 (from ACF lag 1) and week 8 = 58, forecast weeks 9, 10 and 11.",
   "steps": [
    [
     "Week 9",
     "53 + 0.53 × (58 − 53) = 53 + 2.65 = 55.65."
    ],
    [
     "Week 10",
     "53 + 0.53 × (55.65 − 53) = 53 + 1.40 = 54.40."
    ],
    [
     "Week 11",
     "53 + 0.53 × (54.40 − 53) = 53 + 0.74 = 53.74."
    ],
    [
     "Trend",
     "55.65 → 54.40 → 53.74: converging toward 53."
    ],
    [
     "Rule",
     "The deviation is multiplied by 0.53 each week: 5 → 2.65 → 1.40 → 0.74."
    ]
   ],
   "say": "AR(1) reverts to the mean, so long forecasts converge to μ. That is good for a series fluctuating around a fixed level and wrong for a series with a trend, hence the need to difference first (the ARIMA card). Using the exact φ 0.534 for week 9 gives 55.67.",
   "check": [
    "If φ = 1 how does the forecast behave?",
    "Every forecast equals the last week (58): like naive, no reversion to the mean."
   ]
  }
 },
 "ts-ma": {
  "vi": {
   "story": "MA không phải «trung bình trượt» như SMA. Trong ARIMA, MA nghĩa là chuỗi nhớ các cú sốc cũ (sự kiện bất ngờ), chỉ trong vài tuần.",
   "words": [
    [
     "Cú sốc",
     "Phần không đoán được của một tuần, ví dụ khuyến mãi bất ngờ."
    ],
    [
     "MA(1)",
     "xₜ = μ + eₜ + θ × eₜ₋₁."
    ]
   ],
   "problem": "μ = 50 và θ = 0,5. Tuần 1 có một cú sốc +4 (khuyến mãi bất ngờ), các tuần sau không có cú sốc nào. Tính xₜ cho tuần 1, 2, 3 và so với AR(1) có φ = 0,5.",
   "steps": [
    [
     "MA(1) tuần 1",
     "50 + 4 + 0,5 × 0 = 54."
    ],
    [
     "MA(1) tuần 2",
     "50 + 0 + 0,5 × 4 = 52."
    ],
    [
     "MA(1) tuần 3",
     "50 + 0 + 0,5 × 0 = 50. Hết ảnh hưởng."
    ],
    [
     "AR(1) tuần 1, 2, 3, 4",
     "Độ lệch 4; 2; 1; 0,5."
    ],
    [
     "So",
     "MA: 4, 2, 0, 0 (ngắt hẳn sau 1 tuần). AR: 4, 2, 1, 0,5 (giảm dần mãi, không bao giờ ngắt)."
    ]
   ],
   "say": "MA có trí nhớ hữu hạn: cú sốc chỉ ảnh hưởng vài tuần rồi biến mất, còn AR nhớ giảm dần vô hạn. Ở ACF, MA(1) cho một cột nổi rồi ngắt, AR giảm dần.",
   "check": [
    "MA(2) nhớ cú sốc bao nhiêu tuần?",
    "Hai tuần, rồi ngắt."
   ]
  },
  "en": {
   "story": "MA is not a “moving average” like SMA. In ARIMA, MA means the series remembers old shocks (surprise events) for only a few weeks.",
   "words": [
    [
     "Shock",
     "The unpredictable part of a week, for example a surprise promotion."
    ],
    [
     "MA(1)",
     "xₜ = μ + eₜ + θ × eₜ₋₁."
    ]
   ],
   "problem": "μ = 50 and θ = 0.5. Week 1 has a shock of +4 (a surprise promotion), later weeks have none. Compute xₜ for weeks 1, 2, 3 and compare with AR(1) having φ = 0.5.",
   "steps": [
    [
     "MA(1) week 1",
     "50 + 4 + 0.5 × 0 = 54."
    ],
    [
     "MA(1) week 2",
     "50 + 0 + 0.5 × 4 = 52."
    ],
    [
     "MA(1) week 3",
     "50 + 0 + 0.5 × 0 = 50. Effect gone."
    ],
    [
     "AR(1) weeks 1, 2, 3, 4",
     "Deviations 4; 2; 1; 0.5."
    ],
    [
     "Compare",
     "MA: 4, 2, 0, 0 (cut off after 1 week). AR: 4, 2, 1, 0.5 (decays forever, never cuts off)."
    ]
   ],
   "say": "MA has finite memory: a shock affects a few weeks and vanishes, while AR remembers with infinite decay. In the ACF, MA(1) shows one bar then cuts off, AR decays.",
   "check": [
    "How many weeks does MA(2) remember a shock?",
    "Two weeks, then cuts off."
   ]
  }
 },
 "ts-arima": {
  "vi": {
   "story": "ARIMA(p, d, q) ghép ba ý: lấy hiệu d lần cho đứng yên, rồi AR bậc p và MA bậc q trên chuỗi hiệu. Bạn dự báo tuần 9 bằng ARIMA(1, 1, 0).",
   "words": [
    [
     "I (d)",
     "Số lần lấy hiệu."
    ],
    [
     "SARIMAX",
     "ARIMA thêm phần mùa (S) và biến bên ngoài (X), ví dụ chi phí quảng cáo."
    ]
   ],
   "problem": "Chuỗi hiệu 0, 1, 1, 2, −1, 3, 2 (trung bình 1,14), φ ước lượng cho hiệu = −0,38. Dự báo tuần 9.",
   "steps": [
    [
     "Hiệu cuối",
     "d₈ = 58 − 56 = 2."
    ],
    [
     "Độ lệch",
     "2 − 1,14 = 0,86."
    ],
    [
     "Dự báo hiệu tuần 9",
     "1,14 + (−0,38) × 0,86 = 1,14 − 0,33 = 0,81."
    ],
    [
     "Cộng lại",
     "58 + 0,81 = 58,81."
    ],
    [
     "So",
     "Naive 58; Holt 58,83; AR(1) 55,65; ARIMA 58,81."
    ]
   ],
   "say": "ARIMA dự báo tuần 9 gần Holt vì cả hai đều tính xu hướng; AR(1) trên mức thô kéo về trung bình nên thấp. Với 8 tuần, φ ước lượng rất không chắc: đừng tin con số quá chi tiết. Muốn đưa chi phí quảng cáo (6, 5, 4 triệu) vào dự báo, dùng X trong SARIMAX.",
   "check": [
    "ARIMA(0, 1, 0) cho dự báo gì?",
    "Naive: dự báo bằng giá trị cuối (hiệu dự báo bằng trung bình 0 hoặc hằng)."
   ]
  },
  "en": {
   "story": "ARIMA(p, d, q) combines three ideas: difference d times to become stationary, then AR of order p and MA of order q on the differenced series. You forecast week 9 with ARIMA(1, 1, 0).",
   "words": [
    [
     "I (d)",
     "Number of differences."
    ],
    [
     "SARIMAX",
     "ARIMA plus a seasonal part (S) and outside variables (X), such as ad spend."
    ]
   ],
   "problem": "Difference series 0, 1, 1, 2, −1, 3, 2 (mean 1.14), φ estimated for the differences = −0.38. Forecast week 9.",
   "steps": [
    [
     "Last difference",
     "d₈ = 58 − 56 = 2."
    ],
    [
     "Deviation",
     "2 − 1.14 = 0.86."
    ],
    [
     "Forecast difference for week 9",
     "1.14 + (−0.38) × 0.86 = 1.14 − 0.33 = 0.81."
    ],
    [
     "Add back",
     "58 + 0.81 = 58.81."
    ],
    [
     "Compare",
     "Naive 58; Holt 58.83; AR(1) 55.65; ARIMA 58.81."
    ]
   ],
   "say": "ARIMA forecasts week 9 near Holt because both account for the trend; AR(1) on the raw level pulls to the mean so it is lower. With 8 weeks, the estimated φ is very uncertain: do not trust overly fine numbers. To add ad spend (6, 5, 4 million) to the forecast, use the X in SARIMAX.",
   "check": [
    "What does ARIMA(0, 1, 0) forecast?",
    "Naive: the forecast equals the last value (the forecast difference is a constant or 0)."
   ]
  }
 }
};

const visuals: Record<string, Visual> = {
 "ens-vote": {
  "kind": "bars",
  "title": [
   "Độ đúng của số đông theo số cây (mỗi cây 70%)",
   "Majority accuracy by number of trees (each 70%)"
  ],
  "items": [
   {
    "label": [
     "1 cây",
     "1 tree"
    ],
    "value": 70
   },
   {
    "label": [
     "3 cây",
     "3 trees"
    ],
    "value": 78.4
   },
   {
    "label": [
     "5 cây",
     "5 trees"
    ],
    "value": 83.7
   }
  ],
  "unit": "%"
 },
 "rf-col": {
  "kind": "bars",
  "title": [
   "Phương sai của trung bình 100 cây",
   "Variance of the average of 100 trees"
  ],
  "items": [
   {
    "label": [
     "Cây giống nhau (ρ=0,8)",
     "Alike trees (ρ=0.8)"
    ],
    "value": 0.802
   },
   {
    "label": [
     "Cây khác nhau (ρ=0,3)",
     "Different trees (ρ=0.3)"
    ],
    "value": 0.307
   }
  ]
 },
 "imb-trap": {
  "kind": "table",
  "title": [
   "Mô hình lười và công cụ thật",
   "Lazy model vs the real tool"
  ],
  "head": [
   [
    "",
    ""
   ],
   [
    "Accuracy",
    "Accuracy"
   ],
   [
    "Recall",
    "Recall"
   ]
  ],
  "rows": [
   [
    "Lười / Lazy",
    "95,0%",
    "0%"
   ],
   [
    "Công cụ / Tool",
    "91,9%",
    "90%"
   ]
  ],
  "mark": [
   [
    0,
    1
   ],
   [
    1,
    2
   ]
  ]
 },
 "bv-bias": {
  "kind": "table",
  "title": [
   "Bias và variance của ba mô hình",
   "Bias and variance of three models"
  ],
  "head": [
   [
    "Mô hình",
    "Model"
   ],
   [
    "Bias²",
    "Bias²"
   ],
   [
    "Variance",
    "Variance"
   ],
   [
    "Sai số",
    "Error"
   ]
  ],
  "rows": [
   [
    "A",
    9,
    0,
    9
   ],
   [
    "B",
    0,
    10,
    10
   ],
   [
    "C",
    0,
    0.5,
    0.5
   ]
  ],
  "mark": [
   [
    2,
    3
   ]
  ]
 },
 "reg-ridge": {
  "kind": "bars",
  "title": [
   "Hệ số ridge theo λ",
   "Ridge coefficient by λ"
  ],
  "items": [
   {
    "label": [
     "λ=0",
     "λ=0"
    ],
    "value": 1
   },
   {
    "label": [
     "λ=28",
     "λ=28"
    ],
    "value": 0.5
   },
   {
    "label": [
     "λ=280",
     "λ=280"
    ],
    "value": 0.091
   }
  ]
 },
 "reg-lasso": {
  "kind": "table",
  "title": [
   "Hệ số: thường, lasso, ridge",
   "Coefficients: ordinary, lasso, ridge"
  ],
  "head": [
   [
    "Cột",
    "Column"
   ],
   [
    "Thường",
    "Ordinary"
   ],
   [
    "Lasso",
    "Lasso"
   ],
   [
    "Ridge",
    "Ridge"
   ]
  ],
  "rows": [
   [
    "Ghé / Visits",
    3.0,
    2.5,
    1.5
   ],
   [
    "Chi tiêu / Spend",
    1.2,
    0.7,
    0.6
   ],
   [
    "Thời gian / Tenure",
    0.4,
    0,
    0.2
   ],
   [
    "Tuổi / Age",
    0.1,
    0,
    0.05
   ]
  ],
  "mark": [
   [
    2,
    2
   ],
   [
    3,
    2
   ]
  ]
 },
 "met-reg": {
  "kind": "bars",
  "title": [
   "MAE và RMSE trước và sau khi bỏ tuần lệch",
   "MAE and RMSE with and without the off week"
  ],
  "items": [
   {
    "label": [
     "MAE (có)",
     "MAE (with)"
    ],
    "value": 3.5
   },
   {
    "label": [
     "RMSE (có)",
     "RMSE (with)"
    ],
    "value": 5.15
   },
   {
    "label": [
     "MAE (bỏ)",
     "MAE (without)"
    ],
    "value": 1.5
   },
   {
    "label": [
     "RMSE (bỏ)",
     "RMSE (without)"
    ],
    "value": 1.58
   }
  ]
 },
 "fe-num": {
  "kind": "bars",
  "title": [
   "Chi tiêu trước và sau log₁₀(1+x)",
   "Spend before and after log₁₀(1+x)"
  ],
  "items": [
   {
    "label": [
     "0 → ",
     "0 → "
    ],
    "value": 0
   },
   {
    "label": [
     "9 → ",
     "9 → "
    ],
    "value": 1
   },
   {
    "label": [
     "99 → ",
     "99 → "
    ],
    "value": 2
   },
   {
    "label": [
     "999 → ",
     "999 → "
    ],
    "value": 3
   }
  ],
  "unit": "log"
 },
 "fe-cat": {
  "kind": "table",
  "title": [
   "Mã hóa biến giả (GDN là gốc)",
   "Dummy coding (GDN is base)"
  ],
  "head": [
   [
    "Kênh",
    "Channel"
   ],
   [
    "Meta",
    "Meta"
   ],
   [
    "TikTok",
    "TikTok"
   ],
   [
    "Dự đoán",
    "Prediction"
   ]
  ],
  "rows": [
   [
    "GDN",
    0,
    0,
    18
   ],
   [
    "Meta",
    1,
    0,
    20
   ],
   [
    "TikTok",
    0,
    1,
    12
   ]
  ]
 },
 "fe-time": {
  "kind": "bars",
  "title": [
   "Khoảng cách tới tháng 12",
   "Distance from month 12"
  ],
  "items": [
   {
    "label": [
     "Tháng 1 (số thẳng)",
     "Month 1 (raw)"
    ],
    "value": 11
   },
   {
    "label": [
     "Tháng 1 (vòng tròn)",
     "Month 1 (circle)"
    ],
    "value": 0.52
   },
   {
    "label": [
     "Tháng 6 (vòng tròn)",
     "Month 6 (circle)"
    ],
    "value": 2.0
   }
  ]
 },
 "cv-fold": {
  "kind": "bars",
  "title": [
   "Sai số trên từng miếng (%)",
   "Error on each fold (%)"
  ],
  "items": [
   {
    "label": [
     "Miếng 1",
     "Fold 1"
    ],
    "value": 10
   },
   {
    "label": [
     "Miếng 2",
     "Fold 2"
    ],
    "value": 8
   },
   {
    "label": [
     "Miếng 3",
     "Fold 3"
    ],
    "value": 12
   },
   {
    "label": [
     "Miếng 4",
     "Fold 4"
    ],
    "value": 9
   },
   {
    "label": [
     "Miếng 5",
     "Fold 5"
    ],
    "value": 11
   }
  ],
  "unit": "%"
 },
 "cv-grid": {
  "kind": "table",
  "title": [
   "Sai số CV theo lưới",
   "CV error over the grid"
  ],
  "head": [
   [
    "Độ sâu",
    "Depth"
   ],
   [
    "Lá tối thiểu 5",
    "Min leaf 5"
   ],
   [
    "Lá tối thiểu 10",
    "Min leaf 10"
   ]
  ],
  "rows": [
   [
    "2",
    0.13,
    0.12
   ],
   [
    "3",
    0.11,
    0.1
   ],
   [
    "5",
    0.09,
    0.08
   ]
  ],
  "mark": [
   [
    2,
    2
   ]
  ]
 },
 "ts-order": {
  "kind": "line",
  "title": [
   "Tổng form 8 tuần đầu",
   "Total forms, first 8 weeks"
  ],
  "xs": [
   "1",
   "2",
   "3",
   "4",
   "5",
   "6",
   "7",
   "8"
  ],
  "ys": [
   50,
   50,
   51,
   52,
   54,
   53,
   56,
   58
  ],
  "unit": "form"
 },
 "ts-decomp": {
  "kind": "table",
  "title": [
   "Cộng và nhân khi mức nền đổi",
   "Additive vs multiplicative as the base changes"
  ],
  "head": [
   [
    "Mức nền",
    "Base"
   ],
   [
    "Cộng (+10)",
    "Additive (+10)"
   ],
   [
    "Nhân (×1,2)",
    "Multiplicative (×1.2)"
   ]
  ],
  "rows": [
   [
    50,
    60,
    60
   ],
   [
    100,
    110,
    120
   ]
  ],
  "mark": [
   [
    1,
    2
   ]
  ]
 },
 "ts-sma": {
  "kind": "line",
  "title": [
   "SMA(3) so với thật (tuần 4–8)",
   "SMA(3) vs actual (weeks 4–8)"
  ],
  "xs": [
   "4",
   "5",
   "6",
   "7",
   "8"
  ],
  "ys": [
   50.33,
   51,
   52.33,
   53,
   54.33
  ],
  "unit": "form"
 },
 "ts-ses": {
  "kind": "bars",
  "title": [
   "Dự báo tuần 9 theo α",
   "Week-9 forecast by α"
  ],
  "items": [
   {
    "label": [
     "α=0,1",
     "α=0.1"
    ],
    "value": 52.06
   },
   {
    "label": [
     "α=0,5",
     "α=0.5"
    ],
    "value": 56.2
   },
   {
    "label": [
     "α=0,9",
     "α=0.9"
    ],
    "value": 57.77
   }
  ]
 },
 "ts-holt": {
  "kind": "line",
  "title": [
   "Dự báo Holt cho tuần 9 trở đi",
   "Holt forecast from week 9"
  ],
  "xs": [
   "9",
   "10",
   "12",
   "20"
  ],
  "ys": [
   58.83,
   60.46,
   63.73,
   76.77
  ],
  "unit": "form"
 },
 "ts-hw": {
  "kind": "bars",
  "title": [
   "Dự báo 4 tuần tới (mức nền 55)",
   "Forecast for the next 4 weeks (base 55)"
  ],
  "items": [
   {
    "label": [
     "Tuần 1",
     "Week 1"
    ],
    "value": 49.5
   },
   {
    "label": [
     "Tuần 2",
     "Week 2"
    ],
    "value": 52.8
   },
   {
    "label": [
     "Tuần 3",
     "Week 3"
    ],
    "value": 55
   },
   {
    "label": [
     "Tuần 4",
     "Week 4"
    ],
    "value": 62.7
   }
  ]
 },
 "ts-acf": {
  "kind": "bars",
  "title": [
   "ACF theo lag",
   "ACF by lag"
  ],
  "items": [
   {
    "label": [
     "Lag 1",
     "Lag 1"
    ],
    "value": 0.53
   },
   {
    "label": [
     "Lag 2",
     "Lag 2"
    ],
    "value": 0.17
   },
   {
    "label": [
     "Lag 3",
     "Lag 3"
    ],
    "value": 0.03
   }
  ]
 },
 "ts-ar": {
  "kind": "line",
  "title": [
   "Dự báo AR(1) về trung bình 53",
   "AR(1) forecast reverting to the mean 53"
  ],
  "xs": [
   "8 (thật)",
   "9",
   "10",
   "11"
  ],
  "ys": [
   58,
   55.65,
   54.4,
   53.74
  ],
  "unit": "form"
 },
 "ts-arima": {
  "kind": "bars",
  "title": [
   "Dự báo tuần 9 theo từng phương pháp",
   "Week-9 forecast by method"
  ],
  "items": [
   {
    "label": [
     "Naive",
     "Naive"
    ],
    "value": 58
   },
   {
    "label": [
     "SMA(3)",
     "SMA(3)"
    ],
    "value": 55.67
   },
   {
    "label": [
     "SES α=0,5",
     "SES α=0.5"
    ],
    "value": 56.2
   },
   {
    "label": [
     "Holt",
     "Holt"
    ],
    "value": 58.83
   },
   {
    "label": [
     "AR(1)",
     "AR(1)"
    ],
    "value": 55.65
   },
   {
    "label": [
     "ARIMA(1,1,0)",
     "ARIMA(1,1,0)"
    ],
    "value": 58.81
   }
  ]
 }
};

export const c4Walks: Record<string, Walk> = Object.fromEntries(
  Object.entries(base).map(([id, w]) => [id, visuals[id] ? { ...w, visual: visuals[id] } : w]),
);
