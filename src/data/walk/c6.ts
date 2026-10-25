import type { Visual, Walk } from "@/data/walk/pilot";

/**
 * C6 (tháng 11, Lotus Spa): tối ưu ngân sách (OR), GenAI, ShopAssist, RAG, ảnh sinh, LangChain.
 * Số cố định: ngân sách 15 triệu/tuần; form mỗi triệu GDN 3, Meta 4, TikTok 3; trần 8, 6, 4 triệu; giá catalog 650, 950, 350 nghìn; hoàn tiền 14 ngày.
 * Bài or-solv đã có trong pilot.ts nên không lặp lại ở đây.
 */
const base: Record<string, Walk> = {
 "or-obj": {
  "vi": {
   "story": "Tháng 11, chị Lan hỏi: «Nếu có 15 triệu mỗi tuần thì chia cho ba kênh thế nào để được nhiều form nhất?» Trước khi mở Solver, bạn phải tách hai thứ: cái bạn chọn và cái bạn muốn tối đa.",
   "words": [
    [
     "Biến quyết định",
     "Con số bạn được quyền chọn (ở đây: mức chi mỗi kênh)."
    ],
    [
     "Hàm mục tiêu",
     "Công thức tính cái bạn muốn tối đa, dựa vào biến."
    ]
   ],
   "problem": "Form trên mỗi triệu: GDN 18 ÷ 6 = 3, Meta 20 ÷ 5 = 4, TikTok 12 ÷ 4 = 3. Gọi g, m, t là chi (triệu) cho GDN, Meta, TikTok. Viết hàm mục tiêu và chấm hai phương án: (6, 5, 4) và (5, 6, 4).",
   "steps": [
    [
     "Biến quyết định",
     "g, m, t: ba mức chi. Bạn được chọn chúng."
    ],
    [
     "Hàm mục tiêu",
     "form = 3g + 4m + 3t. Form không phải biến: không gõ form vào ô, chỉ tính từ g, m, t."
    ],
    [
     "Phương án hiện tại (6, 5, 4)",
     "3 × 6 + 4 × 5 + 3 × 4 = 18 + 20 + 12 = 50 form, chi 15 triệu."
    ],
    [
     "Phương án (5, 6, 4)",
     "3 × 5 + 4 × 6 + 3 × 4 = 15 + 24 + 12 = 51 form, cũng chi 15 triệu."
    ],
    [
     "Đọc",
     "Chuyển 1 triệu từ GDN sang Meta thêm 1 form, vì Meta cho 4 form mỗi triệu còn GDN chỉ 3."
    ]
   ],
   "say": "Chọn biến, rồi để công thức tính mục tiêu. Hệ số 3, 4, 3 lấy từ tuần quá khứ nên chỉ đúng nếu mỗi triệu thêm vẫn cho cùng số form, điều ràng buộc ở thẻ sau sẽ giới hạn.",
   "check": [
    "Trong bài này, «51 form» là biến hay là kết quả?",
    "Là kết quả của hàm mục tiêu, tính từ g, m, t."
   ]
  },
  "en": {
   "story": "In November, Ms. Lan asks: “With 15 million a week, how should we split it across the three channels to get the most forms?” Before opening Solver you must separate two things: what you choose and what you want to maximise.",
   "words": [
    [
     "Decision variable",
     "A number you are free to choose (here: spend per channel)."
    ],
    [
     "Objective function",
     "The formula for what you want to maximise, based on the variables."
    ]
   ],
   "problem": "Forms per million: GDN 18 ÷ 6 = 3, Meta 20 ÷ 5 = 4, TikTok 12 ÷ 4 = 3. Let g, m, t be spend (million) on GDN, Meta, TikTok. Write the objective and score two plans: (6, 5, 4) and (5, 6, 4).",
   "steps": [
    [
     "Decision variables",
     "g, m, t: three spends. You may choose them."
    ],
    [
     "Objective",
     "forms = 3g + 4m + 3t. Forms are not a variable: you do not type forms into a cell, you compute them from g, m, t."
    ],
    [
     "Current plan (6, 5, 4)",
     "3 × 6 + 4 × 5 + 3 × 4 = 18 + 20 + 12 = 50 forms, spending 15 million."
    ],
    [
     "Plan (5, 6, 4)",
     "3 × 5 + 4 × 6 + 3 × 4 = 15 + 24 + 12 = 51 forms, also spending 15 million."
    ],
    [
     "Read",
     "Moving 1 million from GDN to Meta adds 1 form, because Meta gives 4 forms per million and GDN only 3."
    ]
   ],
   "say": "Choose the variables, then let the formula compute the objective. The coefficients 3, 4, 3 come from past weeks so they hold only if each extra million keeps giving the same forms, which the constraints on the next card limit.",
   "check": [
    "In this problem is “51 forms” a variable or a result?",
    "A result of the objective function, computed from g, m, t."
   ]
  }
 },
 "or-con": {
  "vi": {
   "story": "Nếu chỉ có hàm mục tiêu, Solver sẽ đổ hết tiền vào Meta mãi. Mỗi giới hạn thật phải được viết thành một dòng.",
   "words": [
    [
     "Ràng buộc",
     "Một bất đẳng thức giới hạn các biến."
    ],
    [
     "Phương án khả thi",
     "Thỏa mọi ràng buộc cùng lúc."
    ]
   ],
   "problem": "Ràng buộc: g + m + t ≤ 15 (ngân sách), g ≤ 8, m ≤ 6, t ≤ 4 (mỗi kênh chỉ hấp thụ được bấy nhiêu). Kiểm tra (5, 6, 4), (6, 6, 4), và hỏi nếu quên dòng ngân sách.",
   "steps": [
    [
     "(5, 6, 4)",
     "Tổng 15 ≤ 15; 5 ≤ 8; 6 ≤ 6; 4 ≤ 4. Khả thi, được 51 form."
    ],
    [
     "(6, 6, 4)",
     "Tổng 16 > 15 nên vi phạm ngân sách, dù trông hấp dẫn: 18 + 24 + 12 = 54 form."
    ],
    [
     "Quên dòng ngân sách",
     "Solver đặt mọi kênh ở mức trần (8, 6, 4): 24 + 24 + 12 = 60 form, chi 18 triệu."
    ],
    [
     "Đọc",
     "Dòng ngân sách là thứ đưa 60 form xuống còn 51 form: 9 form là giá của việc chỉ có 15 triệu."
    ]
   ],
   "say": "Mỗi ràng buộc là một nguồn lực không được tiêu hai lần. Thiếu một dòng thì «tối ưu» chỉ đúng trên giấy.",
   "check": [
    "(8, 6, 1) có khả thi không và cho bao nhiêu form?",
    "Tổng 15, các trần đều đúng: khả thi. Form 24 + 24 + 3 = 51."
   ]
  },
  "en": {
   "story": "With only an objective, Solver would pour money into Meta endlessly. Every real limit must be written as a line.",
   "words": [
    [
     "Constraint",
     "An inequality that limits the variables."
    ],
    [
     "Feasible plan",
     "Satisfies every constraint at once."
    ]
   ],
   "problem": "Constraints: g + m + t ≤ 15 (budget), g ≤ 8, m ≤ 6, t ≤ 4 (each channel can absorb only so much). Check (5, 6, 4), (6, 6, 4), and ask what if the budget line is forgotten.",
   "steps": [
    [
     "(5, 6, 4)",
     "Total 15 ≤ 15; 5 ≤ 8; 6 ≤ 6; 4 ≤ 4. Feasible, giving 51 forms."
    ],
    [
     "(6, 6, 4)",
     "Total 16 > 15 so it breaks the budget, though tempting: 18 + 24 + 12 = 54 forms."
    ],
    [
     "Forgetting the budget line",
     "Solver sets every channel at its cap (8, 6, 4): 24 + 24 + 12 = 60 forms, spending 18 million."
    ],
    [
     "Read",
     "The budget line is what brings 60 down to 51: 9 forms is the price of having only 15 million."
    ]
   ],
   "say": "Each constraint is a resource that cannot be spent twice. Miss one and the “optimum” is true only on paper.",
   "check": [
    "Is (8, 6, 1) feasible and how many forms?",
    "Total 15, all caps respected: feasible. Forms 24 + 24 + 3 = 51."
   ]
  }
 },
 "or-sens": {
  "vi": {
   "story": "Chị Lan hỏi tiếp: «Thêm một triệu thì được thêm bao nhiêu form?» Solver trả lời bằng giá bóng của ngân sách, nhưng giá đó chỉ đúng trong một khoảng.",
   "words": [
    [
     "Giá bóng",
     "Mức mục tiêu tăng khi nới một ràng buộc thêm một đơn vị."
    ],
    [
     "Khoảng hợp lệ",
     "Phạm vi thay đổi mà giá bóng còn đúng."
    ]
   ],
   "problem": "Tại ngân sách 15: nghiệm tối ưu 51 form, giá bóng của ngân sách là 3 form mỗi triệu, hợp lệ khi ngân sách từ 6 đến 18. Tính form ở ngân sách 16, 18 và 20, và so với cách nhân thẳng.",
   "steps": [
    [
     "Công thức trong khoảng",
     "form = 24 + 3 × (ngân sách − 6) với ngân sách 6 đến 18. Meta chiếm 6 triệu (24 form), phần còn lại 3 form mỗi triệu."
    ],
    [
     "Ngân sách 16",
     "24 + 3 × 10 = 54 form (+3 so với 51)."
    ],
    [
     "Ngân sách 18",
     "24 + 3 × 12 = 60 form: mọi kênh chạm trần (8, 6, 4)."
    ],
    [
     "Ngân sách 20 (ngoài khoảng)",
     "Vẫn 60 form vì không kênh nào nhận thêm. Nhân thẳng 51 + 3 × 5 = 66 là sai."
    ],
    [
     "Ngân sách 14",
     "24 + 3 × 8 = 48 form (−3)."
    ]
   ],
   "say": "Giá bóng 3 form mỗi triệu chỉ đúng trong khoảng ngân sách 6 đến 18. Ra ngoài khoảng, đừng nhân rồi đưa vào brief, hãy chạy lại Solver.",
   "check": [
    "Thêm 3 triệu (15 → 18) được bao nhiêu form?",
    "3 × 3 = 9 form (51 → 60)."
   ]
  },
  "en": {
   "story": "Ms. Lan follows up: “If we add one million, how many more forms?” Solver answers with the budget's shadow price, but that price holds only within a range.",
   "words": [
    [
     "Shadow price",
     "How much the objective rises when a constraint is relaxed by one unit."
    ],
    [
     "Valid range",
     "The span of change over which the shadow price still holds."
    ]
   ],
   "problem": "At budget 15: optimum 51 forms, the budget's shadow price is 3 forms per million, valid for budget 6 to 18. Compute forms at budget 16, 18 and 20 and compare with straight multiplication.",
   "steps": [
    [
     "Formula within the range",
     "forms = 24 + 3 × (budget − 6) for budget 6 to 18. Meta takes 6 million (24 forms), the rest earns 3 forms per million."
    ],
    [
     "Budget 16",
     "24 + 3 × 10 = 54 forms (+3 over 51)."
    ],
    [
     "Budget 18",
     "24 + 3 × 12 = 60 forms: every channel hits its cap (8, 6, 4)."
    ],
    [
     "Budget 20 (outside the range)",
     "Still 60 forms because no channel can take more. Straight multiplication 51 + 3 × 5 = 66 is wrong."
    ],
    [
     "Budget 14",
     "24 + 3 × 8 = 48 forms (−3)."
    ]
   ],
   "say": "A shadow price of 3 forms per million holds only for budgets 6 to 18. Outside it, do not multiply and put it in the brief; rerun Solver.",
   "check": [
    "Adding 3 million (15 → 18) gives how many forms?",
    "3 × 3 = 9 forms (51 → 60)."
   ]
  }
 },
 "or-sheet": {
  "vi": {
   "story": "Bạn dựng bài toán ngân sách trong Excel. Solver chỉ đọc những ô bạn chỉ định, nên ô nào không được nối vào thì không tham gia.",
   "words": [
    [
     "Ô biến",
     "Ô Solver được phép đổi."
    ],
    [
     "Ô mục tiêu",
     "Ô chứa công thức cần tối đa."
    ],
    [
     "Ô ràng buộc",
     "Cặp ô so sánh được khai báo trong hộp ràng buộc."
    ]
   ],
   "problem": "Bố cục: B2:B4 = chi GDN, Meta, TikTok (biến); C2:C4 = 3, 4, 3 (form mỗi triệu); B6 = SUMPRODUCT(B2:B4, C2:C4) (mục tiêu); B8 = SUM(B2:B4) và B9 = 15; D2:D4 = 8, 6, 4 (trần). Ô B12 ghi «ngân sách tối đa 15». Khai báo đầy đủ, rồi thử bỏ ràng buộc B8 ≤ B9.",
   "steps": [
    [
     "Khai báo",
     "Đặt mục tiêu B6 tối đa; đổi B2:B4; ràng buộc B8 ≤ B9, B2 ≤ D2, B3 ≤ D3, B4 ≤ D4; B2:B4 ≥ 0."
    ],
    [
     "Kết quả đầy đủ",
     "Tổng chi 15, B6 = 51 form (ví dụ B2:B4 = 8, 6, 1)."
    ],
    [
     "Chỉ gõ lời nhắc ở B12",
     "Ô B12 là chữ, không nằm trong ràng buộc nào. Solver không đọc nó."
    ],
    [
     "Bỏ B8 ≤ B9",
     "Solver đặt (8, 6, 4): B6 = 24 + 24 + 12 = 60, B8 = 18 > 15."
    ],
    [
     "Kiểm tra",
     "Sau khi chạy, tính lại B8 so với B9 bằng mắt trước khi tin."
    ]
   ],
   "say": "Ghi chú không phải ràng buộc. Chỉ những gì nằm trong hộp Solver mới giới hạn nghiệm, và «Solver xong» chưa chứng minh bạn khai báo đủ.",
   "check": [
    "Hệ số 3, 4, 3 nằm ở ô nào và vì sao Solver không được đổi chúng?",
    "Ở C2:C4. Chúng là dữ liệu (từ tuần quá khứ), không phải biến quyết định."
   ]
  },
  "en": {
   "story": "You build the budget problem in Excel. Solver reads only the cells you point it at, so any cell not wired in takes no part.",
   "words": [
    [
     "Variable cells",
     "Cells Solver may change."
    ],
    [
     "Objective cell",
     "The cell holding the formula to maximise."
    ],
    [
     "Constraint cells",
     "Pairs of cells compared in the constraint box."
    ]
   ],
   "problem": "Layout: B2:B4 = spend on GDN, Meta, TikTok (variables); C2:C4 = 3, 4, 3 (forms per million); B6 = SUMPRODUCT(B2:B4, C2:C4) (objective); B8 = SUM(B2:B4) and B9 = 15; D2:D4 = 8, 6, 4 (caps). Cell B12 reads “maximum budget 15”. Declare everything, then try dropping the constraint B8 ≤ B9.",
   "steps": [
    [
     "Declare",
     "Set objective B6 to maximise; change B2:B4; constraints B8 ≤ B9, B2 ≤ D2, B3 ≤ D3, B4 ≤ D4; B2:B4 ≥ 0."
    ],
    [
     "Full result",
     "Total spend 15, B6 = 51 forms (for example B2:B4 = 8, 6, 1)."
    ],
    [
     "Only a note in B12",
     "B12 is text and sits in no constraint. Solver does not read it."
    ],
    [
     "Drop B8 ≤ B9",
     "Solver sets (8, 6, 4): B6 = 24 + 24 + 12 = 60, B8 = 18 > 15."
    ],
    [
     "Check",
     "After running, compare B8 with B9 by eye before trusting."
    ]
   ],
   "say": "A note is not a constraint. Only what is in the Solver box limits the solution, and “Solver finished” does not prove you declared enough.",
   "check": [
    "Where do the coefficients 3, 4, 3 live and why must Solver not change them?",
    "In C2:C4. They are data (from past weeks), not decision variables."
   ]
  }
 },
 "ga-next": {
  "vi": {
   "story": "Chị Lan muốn một chatbot trả lời hội viên về giá. Bạn thử hỏi mô hình mà chưa đưa bảng giá, để thấy nó tạo ra số bằng cách nào.",
   "words": [
    [
     "Token",
     "Một mảnh chữ mô hình đọc và viết."
    ],
    [
     "Xác suất token kế tiếp",
     "Mô hình chấm điểm mọi token có thể đứng sau, rồi chọn."
    ]
   ],
   "problem": "Prompt: «Gói 60 phút giá ». Giả sử mô hình cho xác suất token kế tiếp: «600» 0,40; «500» 0,25; «700» 0,15; «650» 0,10; khác 0,10. Giá thật trong bảng giá của Lotus Spa là 650 nghìn nhưng bảng không có trong prompt. Mô hình viết gì?",
   "steps": [
    [
     "Kiểm tra tổng",
     "0,40 + 0,25 + 0,15 + 0,10 + 0,10 = 1,00."
    ],
    [
     "Chọn tham lam",
     "Lấy token có xác suất cao nhất: «600»."
    ],
    [
     "Chọn ngẫu nhiên theo xác suất",
     "Có thể ra «500» (25%), «700» (15%) hay cả «650» (10%)."
    ],
    [
     "So với giá thật",
     "600 sai 50 nghìn, tức 50 ÷ 650 = 7,7%. Mô hình chỉ có 10% khả năng ra 650."
    ],
    [
     "Nguồn",
     "Không có bước tra bảng giá nào: «600» là con số hay đứng sau cụm này trong chữ nó đã học."
    ]
   ],
   "say": "Mô hình sinh token kế tiếp, không tra cơ sở dữ liệu. Một số tiền trơn tru vẫn chưa phải số của công ty, nên đừng đem đi báo khách khi chưa có nguồn.",
   "check": [
    "Nếu bảng giá 650 được dán vào prompt, xác suất token «650» thay đổi thế nào?",
    "Tăng mạnh, vì giờ nó nằm trong chữ mô hình đang đọc. Đó là lý do bạn đưa tài liệu vào prompt."
   ]
  },
  "en": {
   "story": "Ms. Lan wants a chatbot to answer members about prices. You ask the model before giving it the price list, to see how it makes up a number.",
   "words": [
    [
     "Token",
     "A piece of text the model reads and writes."
    ],
    [
     "Next-token probability",
     "The model scores every possible next token, then picks."
    ]
   ],
   "problem": "Prompt: “The 60-minute package costs ”. Suppose the model gives next-token probabilities: “600” 0.40; “500” 0.25; “700” 0.15; “650” 0.10; other 0.10. The true price in Lotus Spa's list is 650 thousand but the list is not in the prompt. What does the model write?",
   "steps": [
    [
     "Check the total",
     "0.40 + 0.25 + 0.15 + 0.10 + 0.10 = 1.00."
    ],
    [
     "Greedy choice",
     "Take the highest-probability token: “600”."
    ],
    [
     "Random choice by probability",
     "Could be “500” (25%), “700” (15%) or even “650” (10%)."
    ],
    [
     "Against the true price",
     "600 is off by 50 thousand, i.e. 50 ÷ 650 = 7.7%. The model has only a 10% chance of 650."
    ],
    [
     "Source",
     "No price-list lookup occurred: “600” is the number that often follows this phrase in the text it learned."
    ]
   ],
   "say": "The model generates the next token, it does not look up a database. A smooth-looking amount is still not the company's number, so do not report it to customers without a source.",
   "check": [
    "If the 650 price list is pasted into the prompt, how does the probability of “650” change?",
    "It rises sharply, because it is now in the text the model is reading. That is why you put documents in the prompt."
   ]
  }
 },
 "ga-vs": {
  "vi": {
   "story": "Bạn đã có công cụ báo hội viên sắp rời (tháng 5–6). Giờ chị Lan muốn một tin nhắn giữ chân gửi cho họ. Hai việc nghe gần nhau nhưng khác bản chất.",
   "words": [
    [
     "Học máy dự đoán",
     "Đoán một cột có nhãn, chấm được bằng đáp án."
    ],
    [
     "GenAI",
     "Viết tiếp một đoạn chữ; thường không có một đáp án đúng duy nhất."
    ]
   ],
   "problem": "Công cụ rời: gắn cờ 121 người, 45 đúng, bắt 45 trên 50 người rời. Tin nhắn giữ chân: model viết hai bản khác nhau cho cùng một hội viên. Chấm từng việc thế nào?",
   "steps": [
    [
     "Việc 1, dự đoán",
     "Có đáp án thật cho từng người. Recall = 45 ÷ 50 = 90%. Precision = 45 ÷ 121 = 37,2%."
    ],
    [
     "Việc 2, hai bản tin",
     "Cả hai bản đều có thể ổn. Không có «đáp án đúng» để so từng ký tự."
    ],
    [
     "Chấm việc 2",
     "Viết trước một bảng tiêu chí: (1) gọi đúng tên, (2) nêu đúng ưu đãi, (3) không quá 40 từ."
    ],
    [
     "Bản A",
     "Đạt 3/3. Bản B nêu sai ưu đãi: đạt 2/3, trượt tiêu chí 2."
    ],
    [
     "Đọc",
     "Việc 1 chấm bằng nhãn; việc 2 chấm bằng tiêu chí bạn đã viết trước."
    ]
   ],
   "say": "Học máy trả lời «cột này bằng gì», GenAI trả lời «viết tiếp thế nào». Vì GenAI không có một ô đúng duy nhất, bạn phải viết thước chấm trước khi nhìn kết quả.",
   "check": [
    "Vì sao không chấm tin nhắn bằng cách so với một tin «mẫu»?",
    "Vì nhiều tin khác nhau đều tốt; so với một mẫu sẽ phạt cả những bản đúng."
   ]
  },
  "en": {
   "story": "You already have the tool flagging members about to leave (months 5–6). Now Ms. Lan wants a retention message sent to them. The two jobs sound close but differ in nature.",
   "words": [
    [
     "Machine-learning prediction",
     "Guess a labelled column, scored against answers."
    ],
    [
     "GenAI",
     "Continue a piece of text; usually no single correct answer."
    ]
   ],
   "problem": "The leaving tool: flagged 121 people, 45 correct, catching 45 of 50 leavers. Retention message: the model writes two different versions for one member. How to score each job?",
   "steps": [
    [
     "Job 1, prediction",
     "There is a true answer per person. Recall = 45 ÷ 50 = 90%. Precision = 45 ÷ 121 = 37.2%."
    ],
    [
     "Job 2, two messages",
     "Both may be fine. There is no “right answer” to compare character by character."
    ],
    [
     "Scoring job 2",
     "Write a rubric in advance: (1) uses the right name, (2) states the correct offer, (3) at most 40 words."
    ],
    [
     "Version A",
     "Passes 3/3. Version B states the wrong offer: passes 2/3, failing criterion 2."
    ],
    [
     "Read",
     "Job 1 is scored by labels; job 2 by a rubric you wrote beforehand."
    ]
   ],
   "say": "Machine learning answers “what is this column”, GenAI answers “how to continue the text”. Because GenAI has no single correct cell, you must write the scoring ruler before looking at results.",
   "check": [
    "Why not score the message by comparing with a “model” message?",
    "Because many different messages are good; comparing with one sample penalises correct versions too."
   ]
  }
 },
 "ga-stack": {
  "vi": {
   "story": "Chatbot của Lotus Spa gồm ba tầng khác nhau. Khi trả lời sai, bạn phải biết lỗi ở tầng nào.",
   "words": [
    [
     "Mô hình",
     "Phần biết viết chữ."
    ],
    [
     "Dữ liệu",
     "Tài liệu và công cụ bạn đưa vào mỗi lần gọi."
    ],
    [
     "Sản phẩm",
     "Giao diện và nút bấm người dùng thật sự dùng."
    ]
   ],
   "problem": "Cùng một mô hình, hai lần gọi hỏi «gói chưa dùng có hoàn tiền không?». Lần 1 không đính chính sách, lần 2 dán đoạn «gói chưa dùng được hoàn trong 14 ngày kể từ ngày mua». Và sản phẩm chưa có nút «đặt lịch». Phân tầng.",
   "steps": [
    [
     "Lần 1",
     "Mô hình trả lời chung chung («thường có thể hoàn, tùy chính sách»): tầng Dữ liệu thiếu."
    ],
    [
     "Lần 2",
     "Cùng mô hình nhưng trả lời «được, trong 14 ngày kể từ ngày mua»: chỉ vì Dữ liệu đổi."
    ],
    [
     "Số tầng",
     "3: mô hình giữ nguyên, dữ liệu đổi, sản phẩm chưa đổi."
    ],
    [
     "Người dùng muốn đặt lịch",
     "Chat chỉ cho ra một đoạn chữ. Muốn đặt lịch thật, tầng Sản phẩm cần một nút hay công cụ gọi hệ thống đặt lịch."
    ],
    [
     "Sửa đúng tầng",
     "Câu sai về chính sách: sửa Dữ liệu. Câu đúng nhưng không đặt được lịch: sửa Sản phẩm. Đổi mô hình thường không cần."
    ]
   ],
   "say": "Trả lời sai chưa chắc do mô hình. Hỏi trước: nó có đọc đúng tài liệu không, và sản phẩm có làm được việc người dùng mong không.",
   "check": [
    "Bot trả lời đúng chính sách nhưng khách vẫn không đặt được lịch. Lỗi ở tầng nào?",
    "Tầng Sản phẩm."
   ]
  },
  "en": {
   "story": "Lotus Spa's chatbot has three different layers. When it answers wrongly you must know which layer is at fault.",
   "words": [
    [
     "Model",
     "The part that knows how to write text."
    ],
    [
     "Data",
     "The documents and tools you feed in each call."
    ],
    [
     "Product",
     "The interface and buttons users actually use."
    ]
   ],
   "problem": "The same model, two calls asking “can an unused package be refunded?”. Call 1 attaches no policy, call 2 pastes “unused packages can be refunded within 14 days of purchase”. And the product has no “book” button yet. Assign the layers.",
   "steps": [
    [
     "Call 1",
     "The model answers vaguely (“usually refundable, depending on policy”): the Data layer is missing."
    ],
    [
     "Call 2",
     "The same model answers “yes, within 14 days of purchase”: only because Data changed."
    ],
    [
     "Number of layers",
     "3: model unchanged, data changed, product unchanged."
    ],
    [
     "User wants to book",
     "The chat only yields a piece of text. To really book, the Product layer needs a button or a tool calling the booking system."
    ],
    [
     "Fix the right layer",
     "A wrong policy answer: fix Data. A correct answer but no booking: fix Product. Changing the model is usually not needed."
    ]
   ],
   "say": "A wrong answer is not necessarily the model's fault. First ask: did it read the right document, and can the product do what users expect.",
   "check": [
    "The bot answers the policy correctly but customers still cannot book. Which layer is at fault?",
    "The Product layer."
   ]
  }
 },
 "ga-use": {
  "vi": {
   "story": "Thảo muốn dùng GenAI cho nhiều việc. Bạn xếp từng việc theo cái giá của một lần sai, không theo mức «thông minh».",
   "words": [
    [
     "Use case",
     "Một công việc cụ thể kèm người chịu trách nhiệm."
    ],
    [
     "Giá của một lần sai",
     "Thiệt hại khi câu chữ sai và không ai kịp sửa."
    ]
   ],
   "problem": "Việc A: nháp 20 tiêu đề quảng cáo mỗi tuần cho Thảo chọn, tiết kiệm 3 phút mỗi tiêu đề. Việc B: tự gửi bảng giá cho khách, 100 tin mỗi tuần; sai giá thì khách đòi chênh trung bình 300 nghìn, tỷ lệ sai giả định 5%. Tính lợi và hại.",
   "steps": [
    [
     "Việc A: lợi",
     "20 × 3 phút = 60 phút mỗi tuần."
    ],
    [
     "Việc A: hại",
     "Thảo đọc và sửa trước khi dùng, giá một lần sai gần bằng 0."
    ],
    [
     "Việc B: hại nếu không soát",
     "100 × 5% = 5 tin sai × 300 nghìn = 1,5 triệu mỗi tuần, chưa kể mất uy tín."
    ],
    [
     "Việc B có người soát",
     "Mỗi tin soát 15 giây: 100 × 15 giây = 1.500 giây = 25 phút mỗi tuần."
    ],
    [
     "Kết luận",
     "A chạy ngay. B chỉ chạy khi có người soát hoặc nguồn bảng giá được kiểm tra."
    ]
   ],
   "say": "Một use case là một việc cộng cái giá khi chữ sai. Việc có người sửa sau cùng thì rẻ; việc gửi thẳng cho khách thì phải có nguồn và người soát.",
   "check": [
    "Thêm người soát cho việc B thì tốn 25 phút mỗi tuần để tránh mất bao nhiêu?",
    "Tránh 1,5 triệu mỗi tuần tổn thất giả định."
   ]
  },
  "en": {
   "story": "Thao wants to use GenAI for many jobs. You rank each job by the cost of one error, not by how “smart” it looks.",
   "words": [
    [
     "Use case",
     "A concrete job with someone responsible."
    ],
    [
     "Cost of one error",
     "The damage when the text is wrong and nobody fixes it in time."
    ]
   ],
   "problem": "Job A: draft 20 ad headlines a week for Thao to choose from, saving 3 minutes per headline. Job B: automatically send price lists to customers, 100 messages a week; a wrong price makes the customer claim 300 thousand on average, assumed error rate 5%. Compute benefit and harm.",
   "steps": [
    [
     "Job A: benefit",
     "20 × 3 minutes = 60 minutes a week."
    ],
    [
     "Job A: harm",
     "Thao reads and edits before use, the cost of one error is almost 0."
    ],
    [
     "Job B: harm without review",
     "100 × 5% = 5 wrong messages × 300 thousand = 1.5 million a week, not counting lost trust."
    ],
    [
     "Job B with a reviewer",
     "Reviewing each in 15 seconds: 100 × 15 seconds = 1,500 seconds = 25 minutes a week."
    ],
    [
     "Conclusion",
     "A runs now. B runs only with a reviewer or a verified price-list source."
    ]
   ],
   "say": "A use case is a job plus the cost when text is wrong. Jobs with a human fixing at the end are cheap; jobs sent straight to customers need a source and a reviewer.",
   "check": [
    "Adding a reviewer to job B costs 25 minutes a week to avoid how much?",
    "It avoids the assumed 1.5 million per week of loss."
   ]
  }
 },
 "ga-chat": {
  "vi": {
   "story": "API của mô hình không nhớ cuộc trò chuyện. Mỗi lần gọi, ứng dụng phải gửi lại những message cần thiết.",
   "words": [
    [
     "System message",
     "Luật chung của bot, ví dụ «chỉ dùng bảng giá đính kèm»."
    ],
    [
     "User message",
     "Câu hỏi hoặc tài liệu từ người dùng."
    ],
    [
     "Không trạng thái",
     "Mô hình không giữ gì giữa hai lần gọi."
    ]
   ],
   "problem": "Lần gọi 1: system 40 token + bảng giá dán trong user 200 token + câu hỏi 20 token, mô hình trả 80 token. Khách hỏi tiếp 20 token. Lần gọi 2 phải gửi gì, tổng bao nhiêu token vào?",
   "steps": [
    [
     "Lần gọi 1",
     "Vào: 40 + 200 + 20 = 260 token. Ra: 80 token."
    ],
    [
     "Lần gọi 2 phải gửi lại",
     "System 40, bảng giá 200, câu hỏi cũ 20, câu trả lời cũ 80, câu hỏi mới 20."
    ],
    [
     "Tổng vào lần 2",
     "40 + 200 + 20 + 80 + 20 = 360 token."
    ],
    [
     "Nếu quên gửi bảng giá",
     "Mô hình không còn bảng giá để dựa vào, và có thể bịa giá."
    ],
    [
     "Đọc",
     "Lịch sử là thứ ứng dụng lưu và gửi lại. Chi phí cũng tăng theo độ dài hội thoại."
    ]
   ],
   "say": "Message là đoạn chữ mô hình thấy trong lần gọi này, không phải trí nhớ. Muốn nó «nhớ», ứng dụng phải gửi lại.",
   "check": [
    "Sau 5 lượt như vậy, mỗi lượt thêm 100 token, lượt thứ 6 có xấp xỉ bao nhiêu token vào?",
    "260 + 5 × 100 = 760 token."
   ]
  },
  "en": {
   "story": "The model API does not remember the conversation. On each call, the app must resend the messages that matter.",
   "words": [
    [
     "System message",
     "The bot's standing rules, for example “use only the attached price list”."
    ],
    [
     "User message",
     "A question or document from the user."
    ],
    [
     "Stateless",
     "The model keeps nothing between two calls."
    ]
   ],
   "problem": "Call 1: system 40 tokens + price list pasted in user 200 tokens + question 20 tokens, the model returns 80 tokens. The customer follows up with 20 tokens. What must call 2 send, and how many input tokens in total?",
   "steps": [
    [
     "Call 1",
     "Input: 40 + 200 + 20 = 260 tokens. Output: 80 tokens."
    ],
    [
     "Call 2 must resend",
     "System 40, price list 200, old question 20, old answer 80, new question 20."
    ],
    [
     "Total input in call 2",
     "40 + 200 + 20 + 80 + 20 = 360 tokens."
    ],
    [
     "If you forget the price list",
     "The model has no list left to rely on and may invent a price."
    ],
    [
     "Read",
     "History is what the app stores and resends. Cost also grows with the length of the conversation."
    ]
   ],
   "say": "Messages are the text the model sees in this call, not memory. To make it “remember”, the app must resend.",
   "check": [
    "After 5 such turns, each adding 100 tokens, about how many input tokens does turn 6 have?",
    "260 + 5 × 100 = 760 tokens."
   ]
  }
 },
 "ga-temp": {
  "vi": {
   "story": "Bạn chạy cùng một prompt thiếu bảng giá nhiều lần để xem temperature làm gì.",
   "words": [
    [
     "Temperature",
     "Độ rộng khi chọn token: cao thì đa dạng hơn, thấp thì gần như luôn chọn token xác suất cao nhất."
    ]
   ],
   "problem": "Chạy 5 lần cùng prompt «Gói 60 phút giá» (không có bảng giá). Temperature cao ra: 600, 550, 700, 650, 580 (nghìn). Temperature thấp ra: 600 mỗi lần. Giá thật 650. Đọc kết quả.",
   "steps": [
    [
     "Temperature cao: trung bình",
     "(600 + 550 + 700 + 650 + 580) ÷ 5 = 3080 ÷ 5 = 616."
    ],
    [
     "Temperature cao: dao động",
     "Từ 550 đến 700, rộng 150."
    ],
    [
     "Temperature thấp",
     "600, 600, 600, 600, 600: lặp lại, không dao động."
    ],
    [
     "Sai so với giá thật 650",
     "Thấp: 600 sai 50 nghìn (7,7%), lần nào cũng sai giống nhau. Cao: có lần trúng 650 nhưng chỉ 1 trong 5."
    ],
    [
     "Đọc",
     "Hạ temperature làm câu trả lời ổn định chứ không đúng hơn."
    ]
   ],
   "say": "Temperature đổi độ đa dạng của chữ, không đổi sự thật. Một con số lặp lại 5 lần vẫn có thể sai; sự thật đến từ tài liệu.",
   "check": [
    "Với bot trả lời chính sách, nên đặt temperature cao hay thấp?",
    "Thấp: bạn muốn ổn định, nhưng vẫn cần đưa tài liệu vào để đúng."
   ]
  },
  "en": {
   "story": "You run the same price-list-less prompt several times to see what temperature does.",
   "words": [
    [
     "Temperature",
     "The breadth when choosing a token: high is more varied, low almost always picks the highest-probability token."
    ]
   ],
   "problem": "Run the same prompt “The 60-minute package costs” (no price list) 5 times. High temperature gives: 600, 550, 700, 650, 580 (thousand). Low temperature gives 600 every time. The true price is 650. Read the results.",
   "steps": [
    [
     "High temperature: mean",
     "(600 + 550 + 700 + 650 + 580) ÷ 5 = 3,080 ÷ 5 = 616."
    ],
    [
     "High temperature: spread",
     "From 550 to 700, a range of 150."
    ],
    [
     "Low temperature",
     "600, 600, 600, 600, 600: repeated, no variation."
    ],
    [
     "Error against the true 650",
     "Low: 600 is off by 50 thousand (7.7%), the same error every time. High: one run hits 650 but only 1 in 5."
    ],
    [
     "Read",
     "Lowering temperature makes answers stable, not more correct."
    ]
   ],
   "say": "Temperature changes the variety of the text, not the truth. A number repeated 5 times can still be wrong; truth comes from documents.",
   "check": [
    "For a policy-answering bot, should temperature be high or low?",
    "Low: you want stability, but you still need to supply the document to be correct."
   ]
  }
 },
 "ga-tok": {
  "vi": {
   "story": "Chị Lan hỏi bot tốn bao nhiêu và vì sao nó «quên» bảng giá khi dán nhiều tài liệu. Cả hai là chuyện token.",
   "words": [
    [
     "Cửa sổ ngữ cảnh",
     "Số token tối đa mô hình đọc trong một lần gọi."
    ],
    [
     "Giá theo token",
     "Tiền tính trên token vào và token ra."
    ]
   ],
   "problem": "Cửa sổ 4.096 token (số minh họa). Bạn dán 6.000 token tài liệu, bảng giá 500 token nằm cuối, và hệ thống cắt phần vượt cửa sổ. Giá minh họa: 3 USD mỗi triệu token vào, 15 USD mỗi triệu token ra. Mỗi lần gọi: 6.000 vào, 200 ra, 10.000 lần mỗi tháng.",
   "steps": [
    [
     "Bảng giá còn trong cửa sổ không",
     "Bảng giá chiếm token 5.501 đến 6.000. Cửa sổ chỉ giữ tới 4.096: bảng giá bị cắt."
    ],
    [
     "Phần vượt",
     "6.000 − 4.096 = 1.904 token bị cắt."
    ],
    [
     "Tiền vào mỗi lần",
     "6.000 ÷ 1.000.000 × 3 = 0,018 USD."
    ],
    [
     "Tiền ra mỗi lần",
     "200 ÷ 1.000.000 × 15 = 0,003 USD. Tổng 0,021 USD."
    ],
    [
     "Một tháng",
     "0,021 × 10.000 = 210 USD."
    ]
   ],
   "say": "Token là đơn vị cả tiền lẫn độ dài. Đừng chôn bảng giá ở cuối một đống dán: nó có thể không còn trong cửa sổ, và bạn vẫn trả tiền cho phần không dùng.",
   "check": [
    "Nếu chỉ dán phần liên quan (1.000 token) thì tiền vào mỗi lần là bao nhiêu?",
    "1.000 ÷ 1.000.000 × 3 = 0,003 USD, rẻ gấp 6 lần."
   ]
  },
  "en": {
   "story": "Ms. Lan asks how much the bot costs and why it “forgets” the price list when many documents are pasted. Both are about tokens.",
   "words": [
    [
     "Context window",
     "The maximum tokens the model reads in one call."
    ],
    [
     "Token pricing",
     "Money charged on input and output tokens."
    ]
   ],
   "problem": "A window of 4,096 tokens (illustrative). You paste 6,000 tokens of documents with the 500-token price list at the end, and the system cuts what exceeds the window. Illustrative prices: 3 USD per million input tokens, 15 USD per million output tokens. Each call: 6,000 in, 200 out, 10,000 calls a month.",
   "steps": [
    [
     "Is the price list still in the window",
     "The price list occupies tokens 5,501 to 6,000. The window keeps only up to 4,096: the price list is cut."
    ],
    [
     "Excess",
     "6,000 − 4,096 = 1,904 tokens cut."
    ],
    [
     "Input cost per call",
     "6,000 ÷ 1,000,000 × 3 = 0.018 USD."
    ],
    [
     "Output cost per call",
     "200 ÷ 1,000,000 × 15 = 0.003 USD. Total 0.021 USD."
    ],
    [
     "Per month",
     "0.021 × 10,000 = 210 USD."
    ]
   ],
   "say": "Tokens are the unit of both money and length. Do not bury the price list at the end of a heap of pasted text: it may fall outside the window, and you still pay for the unused part.",
   "check": [
    "If you paste only the relevant part (1,000 tokens), what is the input cost per call?",
    "1,000 ÷ 1,000,000 × 3 = 0.003 USD, 6 times cheaper."
   ]
  }
 },
 "ga-prompt": {
  "vi": {
   "story": "Bạn viết prompt cho bot hoàn tiền. Một prompt tốt có ba phần: việc, ngữ cảnh, dạng đầu ra.",
   "words": [
    [
     "Việc",
     "Mô hình phải làm gì."
    ],
    [
     "Ngữ cảnh",
     "Tài liệu hoặc dữ liệu nó được phép dùng."
    ],
    [
     "Dạng đầu ra",
     "Hình dạng câu trả lời mong muốn."
    ]
   ],
   "problem": "Việc: trả lời «có được hoàn tiền không». Ngữ cảnh: «Gói chưa dùng được hoàn trong 14 ngày kể từ ngày mua.» Đầu ra: «Có / Không / Không thấy trong đoạn», kèm câu trích. Áp dụng cho hai hội viên: mua 10 ngày trước, và mua 20 ngày trước. Gói chưa dùng.",
   "steps": [
    [
     "Hội viên 1",
     "Mua 10 ngày trước; 10 ≤ 14."
    ],
    [
     "Trả lời 1",
     "«Có. Trích: Gói chưa dùng được hoàn trong 14 ngày kể từ ngày mua.»"
    ],
    [
     "Hội viên 2",
     "Mua 20 ngày trước; 20 > 14."
    ],
    [
     "Trả lời 2",
     "«Không. Trích: ... 14 ngày ...», vì 20 − 14 = 6 ngày quá hạn."
    ],
    [
     "Câu hỏi ngoài đoạn",
     "Hỏi «hoàn bằng chuyển khoản hay tiền mặt?»: đoạn không nói, nên đáp «Không thấy trong đoạn», không bịa."
    ]
   ],
   "say": "Ba phần giúp câu trả lời kiểm được: có việc rõ, có đoạn để đối chiếu, có dạng để máy hay người chấm nhanh. Thiếu ngữ cảnh thì «Có/Không» là đoán.",
   "check": [
    "Nếu bỏ phần ngữ cảnh, câu trả lời thiếu gì?",
    "Thiếu căn cứ: mô hình sẽ tự nghĩ ra thời hạn."
   ]
  },
  "en": {
   "story": "You write the prompt for the refund bot. A good prompt has three parts: task, context, output form.",
   "words": [
    [
     "Task",
     "What the model must do."
    ],
    [
     "Context",
     "Documents or data it may use."
    ],
    [
     "Output form",
     "The desired shape of the answer."
    ]
   ],
   "problem": "Task: answer “is a refund allowed”. Context: “Unused packages can be refunded within 14 days of purchase.” Output: “Yes / No / Not found in the passage”, with the quoted sentence. Apply to two members: bought 10 days ago and bought 20 days ago. Package unused.",
   "steps": [
    [
     "Member 1",
     "Bought 10 days ago; 10 ≤ 14."
    ],
    [
     "Answer 1",
     "“Yes. Quote: Unused packages can be refunded within 14 days of purchase.”"
    ],
    [
     "Member 2",
     "Bought 20 days ago; 20 > 14."
    ],
    [
     "Answer 2",
     "“No. Quote: ... 14 days ...”, because 20 − 14 = 6 days past the limit."
    ],
    [
     "Question outside the passage",
     "Asked “refund by bank transfer or cash?”: the passage does not say, so answer “Not found in the passage”, do not invent."
    ]
   ],
   "say": "The three parts make answers checkable: a clear task, a passage to compare against, a form for people or machines to score fast. Without context, “Yes/No” is a guess.",
   "check": [
    "If you drop the context part, what does the answer lack?",
    "A basis: the model will invent a time limit itself."
   ]
  }
 },
 "ga-few": {
  "vi": {
   "story": "Bạn muốn bot luôn trả lời đúng dạng «Có / Không / Không thấy». Cho nó vài ví dụ đúng dạng đó.",
   "words": [
    [
     "Few-shot",
     "Đưa vài cặp (câu hỏi, câu trả lời mẫu) vào prompt."
    ]
   ],
   "problem": "Ba ví dụ mẫu: (mua 5 ngày → «Có»), (mua 30 ngày → «Không»), (hỏi hoàn bằng tiền mặt → «Không thấy»). Giả sử chạy 5 câu hỏi mới: cả 5 trả lời đúng dạng. Đối chiếu với đoạn chính sách thì 4 câu đúng nội dung. Tính hai tỷ lệ.",
   "steps": [
    [
     "Đúng dạng",
     "5 ÷ 5 = 100%."
    ],
    [
     "Đúng nội dung",
     "4 ÷ 5 = 80%."
    ],
    [
     "Câu sai nội dung",
     "Một câu thuộc dạng «Có» nhưng thời hạn trong đoạn quá hạn: mô hình theo mẫu mà không tính ngày."
    ],
    [
     "Ví dụ có làm đoạn đúng không",
     "Không. Ba mẫu chỉ cho thấy hình dạng, không làm chính sách 14 ngày trở nên đúng hơn."
    ],
    [
     "Việc cần làm",
     "Giữ ví dụ để câu dễ kiểm, rồi vẫn chấm nội dung bằng đoạn chính sách."
    ]
   ],
   "say": "Few-shot dạy dạng, không bảo đảm sự thật. 100% đúng dạng không phải 100% đúng nghĩa.",
   "check": [
    "Thêm ví dụ thứ tư thì nội dung có chắc đúng hơn không?",
    "Không chắc. Có thể ổn định dạng hơn nhưng nội dung vẫn phải đối chiếu với đoạn."
   ]
  },
  "en": {
   "story": "You want the bot to always answer in the form “Yes / No / Not found”. Give it a few examples of that form.",
   "words": [
    [
     "Few-shot",
     "Put a few (question, model answer) pairs in the prompt."
    ]
   ],
   "problem": "Three examples: (bought 5 days ago → “Yes”), (bought 30 days ago → “No”), (asked about cash refund → “Not found”). Suppose 5 new questions are run: all 5 are in the right form. Checking against the policy passage, 4 are right in content. Compute both rates.",
   "steps": [
    [
     "Right form",
     "5 ÷ 5 = 100%."
    ],
    [
     "Right content",
     "4 ÷ 5 = 80%."
    ],
    [
     "The wrong-content answer",
     "One is of the “Yes” form but the passage's limit was exceeded: the model followed the pattern without counting days."
    ],
    [
     "Do examples make the passage true",
     "No. Three examples show a shape, they do not make the 14-day policy any truer."
    ],
    [
     "What to do",
     "Keep the examples so answers are easy to check, and still score content against the policy passage."
    ]
   ],
   "say": "Few-shot teaches form, it does not guarantee truth. 100% right form is not 100% right meaning.",
   "check": [
    "Would adding a fourth example make the content more certainly right?",
    "Not necessarily. The form may be steadier but content must still be checked against the passage."
   ]
  }
 },
 "ga-cot": {
  "vi": {
   "story": "Bạn bảo mô hình «nghĩ từng bước» khi hỏi giá, mà không có bảng giá. Nghe hợp lý hơn, nhưng có đúng hơn không?",
   "words": [
    [
     "Chuỗi suy luận",
     "Các bước mô hình viết ra trước khi trả lời."
    ]
   ],
   "problem": "Hỏi: «Gói 90 phút đá nóng giá bao nhiêu?» Không có bảng giá. Mô hình viết: «60 phút là 650 nghìn. 90 phút gấp 1,5 lần. 650 × 1,5 = 975. Đáp: 975 nghìn.» Giá thật là 950 nghìn. Kiểm tra từng bước.",
   "steps": [
    [
     "Phép tính",
     "650 × 1,5 = 975. Phép nhân đúng."
    ],
    [
     "Dữ kiện 60 phút = 650",
     "Có, nhưng mô hình lấy ở đâu? Prompt không có. (Trong ví dụ này ta cho nó trùng giá thật.)"
    ],
    [
     "Giả định giá tỷ lệ thời gian",
     "Sai: gói 90 phút có đá nóng, giá thật 950, không phải 975."
    ],
    [
     "Sai lệch",
     "975 − 950 = 25 nghìn, tức 25 ÷ 950 = 2,6%."
    ],
    [
     "Đọc",
     "Từng bước nghe hợp lý nhưng một bước là giả định không có nguồn."
    ]
   ],
   "say": "Viết từng bước làm dễ xem lỗi ở bước nào, không phải chứng minh. Một chuỗi bước vẫn có thể dựa trên giả định bịa; nguồn đến từ tài liệu, không từ chuỗi bước.",
   "check": [
    "Muốn bot đáp đúng giá 90 phút, bạn làm gì?",
    "Đưa bảng giá vào ngữ cảnh (hoặc cho bot gọi công cụ tra catalog)."
   ]
  },
  "en": {
   "story": "You tell the model to “think step by step” when asking for a price, with no price list. It sounds more reasonable, but is it more correct?",
   "words": [
    [
     "Chain of thought",
     "The steps the model writes out before answering."
    ]
   ],
   "problem": "Ask: “How much is the 90-minute hot-stone package?” No price list. The model writes: “60 minutes is 650 thousand. 90 minutes is 1.5 times. 650 × 1.5 = 975. Answer: 975 thousand.” The true price is 950 thousand. Check each step.",
   "steps": [
    [
     "The calculation",
     "650 × 1.5 = 975. The multiplication is right."
    ],
    [
     "The fact 60 min = 650",
     "Where did the model get it? Not in the prompt. (In this example we let it coincide with the true price.)"
    ],
    [
     "The assumption that price scales with time",
     "Wrong: the 90-minute package with hot stones costs 950, not 975."
    ],
    [
     "Gap",
     "975 − 950 = 25 thousand, i.e. 25 ÷ 950 = 2.6%."
    ],
    [
     "Read",
     "Each step sounds reasonable but one step is an unsourced assumption."
    ]
   ],
   "say": "Writing steps makes it easier to see where the error is, not a proof. A chain of steps can still rest on an invented assumption; sources come from documents, not from chains.",
   "check": [
    "To make the bot answer the 90-minute price correctly, what do you do?",
    "Put the price list in the context (or let the bot call a catalog lookup tool)."
   ]
  }
 },
 "sa-tune": {
  "vi": {
   "story": "Chính sách hoàn tiền của Lotus Spa đổi từ 7 ngày thành 14 ngày. Thảo hỏi: «Mình có phải huấn luyện lại bot không?»",
   "words": [
    [
     "Fine-tune",
     "Huấn luyện thêm để đổi trọng số của mô hình."
    ],
    [
     "RAG",
     "Tìm tài liệu đúng và đưa vào prompt mỗi lần gọi."
    ]
   ],
   "problem": "Thay đổi chỉ là một câu, khoảng 120 token. Nếu fine-tune cần 2.000 ví dụ, mỗi ví dụ 300 token. So khối lượng cần làm với việc sửa tài liệu cho RAG.",
   "steps": [
    [
     "Sửa tài liệu cho RAG",
     "Sửa 1 đoạn 120 token và dựng lại chỉ mục đoạn đó."
    ],
    [
     "Fine-tune",
     "2.000 × 300 = 600.000 token phải chuẩn bị và huấn luyện."
    ],
    [
     "Tỷ lệ",
     "600.000 ÷ 120 = 5.000 lần nhiều hơn."
    ],
    [
     "Rủi ro fine-tune",
     "Câu «7 ngày» cũ vẫn có thể còn trong trọng số và lẫn với «14 ngày» mới."
    ],
    [
     "Chọn",
     "Thông tin hay đổi, cần dẫn nguồn: RAG. Fine-tune hợp với phong cách hay dạng trả lời ổn định."
    ]
   ],
   "say": "Fine-tune đổi trọng số, còn RAG đổi tài liệu trong prompt. Huấn luyện lại cả mô hình vì một câu chính sách là nhầm tầng.",
   "check": [
    "Muốn bot luôn trả lời lịch sự theo giọng Lotus Spa thì nên chọn gì?",
    "Fine-tune hoặc một system prompt ổn định, vì đó là phong cách, không phải sự thật hay đổi."
   ]
  },
  "en": {
   "story": "Lotus Spa's refund policy changes from 7 days to 14 days. Thao asks: “Do we have to retrain the bot?”",
   "words": [
    [
     "Fine-tune",
     "Extra training that changes the model's weights."
    ],
    [
     "RAG",
     "Find the right document and put it in the prompt on each call."
    ]
   ],
   "problem": "The change is one sentence, about 120 tokens. Fine-tuning would need 2,000 examples of 300 tokens each. Compare the work with editing a document for RAG.",
   "steps": [
    [
     "Edit the document for RAG",
     "Edit one 120-token passage and rebuild that passage's index."
    ],
    [
     "Fine-tune",
     "2,000 × 300 = 600,000 tokens to prepare and train on."
    ],
    [
     "Ratio",
     "600,000 ÷ 120 = 5,000 times more."
    ],
    [
     "Fine-tune risk",
     "The old “7 days” may linger in the weights and mix with the new “14 days”."
    ],
    [
     "Choose",
     "Information that changes and needs citation: RAG. Fine-tuning suits steady style or answer form."
    ]
   ],
   "say": "Fine-tuning changes weights, RAG changes the documents in the prompt. Retraining a whole model for one policy sentence is the wrong layer.",
   "check": [
    "To make the bot always answer politely in Lotus Spa's voice, which fits?",
    "Fine-tuning or a steady system prompt, because it is style, not fast-changing facts."
   ]
  }
 },
 "sa-react": {
  "vi": {
   "story": "Khách hỏi bot: «Ghế massage tối nay còn lịch không?» Bot không được đoán; nó phải đi tra hệ thống đặt lịch.",
   "words": [
    [
     "ReAct",
     "Vòng lặp: Thought (nghĩ), Action (gọi công cụ), Observation (đọc kết quả)."
    ]
   ],
   "problem": "Công cụ lich(dich_vu, thoi_gian) trả về danh sách giờ trống. Giới hạn tối đa 5 bước. Chạy vòng ReAct cho câu hỏi trên, giả sử hệ thống trả 19:00, 20:00, 21:00.",
   "steps": [
    [
     "Thought 1",
     "Cần biết giờ trống của ghế massage tối nay, phải gọi công cụ."
    ],
    [
     "Action 1",
     "lich(\"ghế massage\", \"tối nay\")."
    ],
    [
     "Observation 1",
     "19:00, 20:00, 21:00: 3 giờ trống."
    ],
    [
     "Thought 2 và trả lời",
     "«Còn 3 khung: 19:00, 20:00, 21:00.» Dùng 2 trong tối đa 5 bước."
    ],
    [
     "Nếu công cụ lỗi",
     "Observation rỗng: bot phải nói «tôi chưa tra được lịch», không được bịa giờ."
    ]
   ],
   "say": "Suy nghĩ, gọi công cụ, nhìn kết quả; đừng bịa kết quả của công cụ. Thiếu bước nhìn thì câu trả lời phải nói rõ là chưa tra.",
   "check": [
    "Vì sao cần giới hạn số bước?",
    "Để vòng lặp không chạy mãi nếu công cụ liên tục lỗi hay câu hỏi không có đáp án."
   ]
  },
  "en": {
   "story": "A customer asks the bot: “Is the massage chair free tonight?” The bot must not guess; it must look up the booking system.",
   "words": [
    [
     "ReAct",
     "A loop: Thought, Action (call a tool), Observation (read the result)."
    ]
   ],
   "problem": "The tool slots(service, time) returns a list of free times. Maximum 5 steps. Run the ReAct loop for the question, supposing the system returns 19:00, 20:00, 21:00.",
   "steps": [
    [
     "Thought 1",
     "I need the free times of the massage chair tonight, so I must call the tool."
    ],
    [
     "Action 1",
     "slots(\"massage chair\", \"tonight\")."
    ],
    [
     "Observation 1",
     "19:00, 20:00, 21:00: 3 free times."
    ],
    [
     "Thought 2 and answer",
     "“3 slots left: 19:00, 20:00, 21:00.” Used 2 of at most 5 steps."
    ],
    [
     "If the tool fails",
     "Empty observation: the bot must say “I could not check the schedule”, not invent times."
    ]
   ],
   "say": "Think, call a tool, look at the result; do not invent the tool's result. Without the looking step the answer must say it did not check.",
   "check": [
    "Why cap the number of steps?",
    "So the loop does not run forever if the tool keeps failing or the question has no answer."
   ]
  }
 },
 "sa-stage": {
  "vi": {
   "story": "ShopAssist AI xây qua ba chặng. Với Lotus Spa, bạn lập kế hoạch cho 10 câu hỏi thử trước khi viết code.",
   "words": [
    [
     "Chặng 1",
     "Bot nói dựa trên prompt, chưa có công cụ."
    ],
    [
     "Chặng 2",
     "Bot gọi catalog để có giá và lịch."
    ],
    [
     "Chặng 3",
     "Chấm các ca bằng thước đã viết trước."
    ]
   ],
   "problem": "10 ca thử: 6 ca hỏi giá hoặc lịch, 2 ca hỏi chính sách, 2 ca chào hỏi. Chặng 1 chỉ trả lời được chào hỏi và nói «chưa tra» với các ca còn lại. Chặng 2 gọi catalog cho 6 ca giá/lịch. Đếm theo từng chặng.",
   "steps": [
    [
     "Chặng 1",
     "Trả lời đúng 2 ca chào hỏi; 8 ca còn lại phải đáp «tôi chưa tra được». Không được nói giá."
    ],
    [
     "Chặng 2",
     "Thêm 6 ca giá/lịch có kết quả từ catalog: 2 + 6 = 8 ca trả lời được."
    ],
    [
     "Còn lại",
     "2 ca chính sách chưa có tài liệu: vẫn «chưa tra»."
    ],
    [
     "Chặng 3",
     "Chấm cả 10 ca bằng tiêu chí viết trước: đúng nguồn, đúng số, hoặc nói rõ chưa tra."
    ],
    [
     "Đọc",
     "Mỗi chặng thêm một khả năng; chặng 3 là thứ cho biết có thật sự đúng không."
    ]
   ],
   "say": "Ba chặng: nói dựa trên prompt, gọi catalog, rồi chấm. Đừng bịa một cuộc hội thoại đẹp để thay cho phép chấm.",
   "check": [
    "Ở chặng 1, bot trả lời giá một gói thì nên đánh giá thế nào?",
    "Là lỗi: chặng này chưa có nguồn giá."
   ]
  },
  "en": {
   "story": "ShopAssist AI is built in three stages. For Lotus Spa you plan 10 test questions before writing code.",
   "words": [
    [
     "Stage 1",
     "The bot speaks from the prompt, no tools yet."
    ],
    [
     "Stage 2",
     "The bot calls the catalog for prices and schedules."
    ],
    [
     "Stage 3",
     "Score the cases with a ruler written in advance."
    ]
   ],
   "problem": "10 test cases: 6 ask price or schedule, 2 ask policy, 2 are greetings. Stage 1 can answer only greetings and says “not checked” to the rest. Stage 2 calls the catalog for the 6 price/schedule cases. Count per stage.",
   "steps": [
    [
     "Stage 1",
     "Answers the 2 greetings correctly; the other 8 must reply “I could not check”. It must not state prices."
    ],
    [
     "Stage 2",
     "Adds 6 price/schedule cases with catalog results: 2 + 6 = 8 cases answerable."
    ],
    [
     "Remaining",
     "2 policy cases have no document yet: still “not checked”."
    ],
    [
     "Stage 3",
     "Score all 10 cases with criteria written beforehand: right source, right number, or clearly “not checked”."
    ],
    [
     "Read",
     "Each stage adds an ability; stage 3 tells you whether it is actually right."
    ]
   ],
   "say": "Three stages: speak from the prompt, call the catalog, then score. Do not invent a pretty conversation to replace the scoring.",
   "check": [
    "At stage 1, the bot states a package's price. How is it judged?",
    "As an error: this stage has no price source."
   ]
  }
 },
 "sa-tool": {
  "vi": {
   "story": "Catalog của Lotus Spa là nguồn duy nhất cho giá và lịch. Bot chỉ được nhắc lại những trường catalog trả về.",
   "words": [
    [
     "Catalog",
     "Bảng mã dịch vụ với giá và số lượt còn."
    ],
    [
     "Trường",
     "Một cột trong kết quả: giá, số lượt còn."
    ]
   ],
   "problem": "Catalog (số minh họa): A12 = 60 phút, 650 nghìn, còn 4 lượt. B07 = 90 phút đá nóng, 950 nghìn, còn 0. C03 = ghế massage, 350 nghìn, còn 6. Khách hỏi A12, B07 và Z99. Viết câu trả lời cho từng mã.",
   "steps": [
    [
     "A12",
     "Catalog trả giá 650 nghìn, còn 4 lượt. Trả lời nhắc lại đúng hai trường đó."
    ],
    [
     "B07",
     "Giá 950 nghìn, còn 0 lượt. Trả lời: «hết lượt», không nói «còn»."
    ],
    [
     "Z99",
     "Catalog không trả dòng nào. Trả lời: «không thấy mã Z99», không đoán giá gần đúng."
    ],
    [
     "Giá trị nếu bán hết A12",
     "4 × 650 nghìn = 2.600 nghìn (2,6 triệu)."
    ],
    [
     "Kiểm tra",
     "Mỗi con số trong câu trả lời phải truy được về một trường catalog."
    ]
   ],
   "say": "Giá và tồn kho đến từ catalog, không từ một câu trả lời hay. Khi không thấy mã, nói không thấy.",
   "check": [
    "Khách hỏi «ghế massage C03 còn không», bot nên trả lời gì?",
    "«Còn 6 lượt, giá 350 nghìn», đúng hai trường catalog trả về."
   ]
  },
  "en": {
   "story": "Lotus Spa's catalog is the only source for prices and schedules. The bot may repeat only the fields the catalog returns.",
   "words": [
    [
     "Catalog",
     "A table of service codes with price and remaining slots."
    ],
    [
     "Field",
     "A column in the result: price, remaining slots."
    ]
   ],
   "problem": "Catalog (illustrative numbers): A12 = 60 minutes, 650 thousand, 4 slots left. B07 = 90-minute hot-stone, 950 thousand, 0 left. C03 = massage chair, 350 thousand, 6 left. A customer asks about A12, B07 and Z99. Write the reply for each code.",
   "steps": [
    [
     "A12",
     "The catalog returns price 650 thousand, 4 slots left. The reply repeats exactly those two fields."
    ],
    [
     "B07",
     "Price 950 thousand, 0 left. Reply: “sold out”, not “available”."
    ],
    [
     "Z99",
     "The catalog returns no row. Reply: “code Z99 not found”, not a guessed price."
    ],
    [
     "Value if A12 sells out",
     "4 × 650 thousand = 2,600 thousand (2.6 million)."
    ],
    [
     "Check",
     "Every number in the reply must trace to a catalog field."
    ]
   ],
   "say": "Prices and stock come from the catalog, not from a nice-sounding answer. When a code is not found, say not found.",
   "check": [
    "A customer asks “is massage chair C03 available”, what should the bot say?",
    "“6 slots left, price 350 thousand”, exactly the two catalog fields."
   ]
  }
 },
 "sa-score": {
  "vi": {
   "story": "Bạn chấm ShopAssist bằng ca đã viết trước, không bằng cảm giác sau khi xem vài câu trả lời đẹp.",
   "words": [
    [
     "Ca kiểm thử",
     "Một câu hỏi kèm đáp án đúng viết trước."
    ]
   ],
   "problem": "5 ca viết trước: 4 ca bot trả lời đúng, 1 ca (mã B07, catalog trả hết lượt) bot nói «còn lượt» rất tự tin. Tính điểm, rồi xem điều gì xảy ra nếu bạn thêm 5 ca dễ vừa đủ để đẹp điểm.",
   "steps": [
    [
     "Điểm 5 ca",
     "4 ÷ 5 = 80%."
    ],
    [
     "Ca sai",
     "B07: bot nói còn nhưng catalog trả 0. Sai dù giọng chắc chắn."
    ],
    [
     "Thêm 5 ca dễ, đều đúng",
     "(4 + 5) ÷ (5 + 5) = 9 ÷ 10 = 90%."
    ],
    [
     "Điều đó làm gì",
     "Điểm tăng 10 điểm phần trăm mà lỗi B07 vẫn còn nguyên."
    ],
    [
     "Việc cần làm",
     "Giữ bộ ca cố định, sửa lỗi B07, rồi chấm lại đúng bộ ca đó."
    ]
   ],
   "say": "Chấm từng ca đã viết; vài lần trả lời giống nhau không phải là sự thật. Đừng thêm ca mới cho đủ điểm.",
   "check": [
    "Sau khi sửa B07, bộ 5 ca cho bao nhiêu điểm nếu tất cả đúng?",
    "5 ÷ 5 = 100%."
   ]
  },
  "en": {
   "story": "You score ShopAssist with cases written in advance, not by feel after seeing a few nice answers.",
   "words": [
    [
     "Test case",
     "A question with a correct answer written beforehand."
    ]
   ],
   "problem": "5 cases written in advance: the bot answers 4 correctly; in 1 case (code B07, catalog returns sold out) the bot says “slots available” very confidently. Compute the score, then see what happens if you add just enough easy cases to look good.",
   "steps": [
    [
     "Score of 5 cases",
     "4 ÷ 5 = 80%."
    ],
    [
     "The wrong case",
     "B07: the bot says available but the catalog returns 0. Wrong despite a confident tone."
    ],
    [
     "Add 5 easy cases, all correct",
     "(4 + 5) ÷ (5 + 5) = 9 ÷ 10 = 90%."
    ],
    [
     "What that does",
     "The score rises 10 percentage points while the B07 bug is still there."
    ],
    [
     "What to do",
     "Keep the case set fixed, fix B07, then score exactly that set again."
    ]
   ],
   "say": "Score each written case; several similar answers are not the truth. Do not add new cases just to reach a score.",
   "check": [
    "After fixing B07, what does the 5-case set score if all are right?",
    "5 ÷ 5 = 100%."
   ]
  }
 },
 "rag-why": {
  "vi": {
   "story": "Lotus Spa có một file PDF chính sách 20 trang. Mô hình chưa từng thấy file này, nên bạn phải đưa đoạn liên quan vào mỗi lần gọi.",
   "words": [
    [
     "RAG",
     "Retrieval-Augmented Generation: tìm đoạn liên quan rồi bảo mô hình trả lời từ đoạn đó."
    ]
   ],
   "problem": "Hỏi «gói chưa dùng có hoàn trong 14 ngày không». Lần gọi A không kèm đoạn nào. Lần gọi B kèm 3 đoạn tìm được, trong đó 1 đoạn là điều khoản hoàn tiền. Đếm số đoạn nguồn và nói chất lượng câu trả lời.",
   "steps": [
    [
     "Lần gọi A",
     "0 đoạn nguồn. Mọi câu trả lời về file là câu không nguồn, dù bạn có nhắc chữ RAG trong prompt."
    ],
    [
     "Lần gọi B",
     "3 đoạn đưa vào, 1 đúng điều khoản. Trả lời có thể dẫn đúng câu «hoàn trong 14 ngày»."
    ],
    [
     "Tỷ lệ đoạn đúng",
     "1 ÷ 3 = 33%: 2 đoạn còn lại là nhiễu mô hình phải bỏ qua."
    ],
    [
     "Nếu không tìm được đoạn đúng",
     "Bot phải nói «không thấy trong tài liệu», không được trả lời theo trí nhớ."
    ],
    [
     "Đọc",
     "RAG cho nguồn, không tự bảo đảm đúng; chất lượng nằm ở bước tìm."
    ]
   ],
   "say": "File của bạn không nằm sẵn trong mô hình. Phải có đoạn kèm theo lần gọi thì câu trả lời mới có nguồn.",
   "check": [
    "Gõ «hãy dùng RAG» trong prompt có thay được việc tìm đoạn không?",
    "Không: RAG là bước hệ thống làm, không phải một lời dặn."
   ]
  },
  "en": {
   "story": "Lotus Spa has a 20-page policy PDF. The model has never seen this file, so you must put the relevant passage into each call.",
   "words": [
    [
     "RAG",
     "Retrieval-Augmented Generation: find relevant passages, then tell the model to answer from them."
    ]
   ],
   "problem": "Ask “can an unused package be refunded within 14 days”. Call A attaches no passage. Call B attaches 3 retrieved passages, one being the refund clause. Count source passages and discuss answer quality.",
   "steps": [
    [
     "Call A",
     "0 source passages. Any answer about the file is sourceless, even if you mention the word RAG in the prompt."
    ],
    [
     "Call B",
     "3 passages in, 1 is the right clause. The answer can quote the sentence “refund within 14 days”."
    ],
    [
     "Share of right passages",
     "1 ÷ 3 = 33%: the other 2 are noise the model must ignore."
    ],
    [
     "If the right passage is not found",
     "The bot must say “not found in the document”, not answer from memory."
    ],
    [
     "Read",
     "RAG supplies sources, it does not itself guarantee correctness; quality lies in the retrieval step."
    ]
   ],
   "say": "Your file is not inside the model. A passage must accompany the call for the answer to have a source.",
   "check": [
    "Does typing “use RAG” in the prompt replace the retrieval step?",
    "No: RAG is a step the system performs, not an instruction."
   ]
  }
 },
 "rag-emb": {
  "vi": {
   "story": "Để tìm đoạn gần câu hỏi, mỗi đoạn và câu hỏi được đổi thành một vectơ (embedding). Gần nhau là cosine lớn.",
   "words": [
    [
     "Embedding",
     "Dãy số biểu diễn nghĩa của một đoạn chữ."
    ],
    [
     "Cosine",
     "Độ giống nhau của hai vectơ cùng độ dài 1: bằng tích vô hướng."
    ]
   ],
   "problem": "Vectơ 2 chiều minh họa, độ dài 1. Câu hỏi q = (1, 0) ý «hoàn tiền». Đoạn P (điều khoản hoàn tiền) = (0,8; 0,6). Đoạn Q (quảng cáo «hoàn tiền ưu đãi 10%») = (0,96; 0,28). Đoạn nào được kéo lên đầu?",
   "steps": [
    [
     "Cosine q với P",
     "1 × 0,8 + 0 × 0,6 = 0,80."
    ],
    [
     "Cosine q với Q",
     "1 × 0,96 + 0 × 0,28 = 0,96."
    ],
    [
     "Xếp hạng",
     "Q (0,96) đứng trước P (0,80)."
    ],
    [
     "Vì sao",
     "Cả hai có chữ «hoàn tiền» nên gần câu hỏi; Q còn chung nhiều từ hơn."
    ],
    [
     "Hệ quả",
     "Đoạn được kéo lên là quảng cáo, không phải điều khoản. Điểm cao hơn không sửa được chuyện đó."
    ]
   ],
   "say": "Gần nhau trong embedding không phải trùng từ khóa, cũng không phải đúng. Bạn vẫn phải kiểm đoạn lấy lên có thật là nguồn cần không.",
   "check": [
    "Muốn tránh quảng cáo, có thể làm gì ở kho đoạn?",
    "Gắn nhãn loại tài liệu (chính sách/quảng cáo) và chỉ tìm trong chính sách."
   ]
  },
  "en": {
   "story": "To find passages near a question, each passage and the question are turned into a vector (embedding). Near means a large cosine.",
   "words": [
    [
     "Embedding",
     "A list of numbers representing the meaning of a piece of text."
    ],
    [
     "Cosine",
     "Similarity of two vectors of length 1: equals the dot product."
    ]
   ],
   "problem": "Illustrative 2-D vectors of length 1. The question q = (1, 0) meaning “refund”. Passage P (the refund clause) = (0.8, 0.6). Passage Q (an ad “refund bonus 10%”) = (0.96, 0.28). Which passage is pulled to the top?",
   "steps": [
    [
     "Cosine q with P",
     "1 × 0.8 + 0 × 0.6 = 0.80."
    ],
    [
     "Cosine q with Q",
     "1 × 0.96 + 0 × 0.28 = 0.96."
    ],
    [
     "Ranking",
     "Q (0.96) ahead of P (0.80)."
    ],
    [
     "Why",
     "Both contain the word “refund” so both are near the question; Q shares even more wording."
    ],
    [
     "Consequence",
     "The passage pulled up is the ad, not the clause. A higher score does not fix that."
    ]
   ],
   "say": "Near in embedding is not the same as sharing keywords, nor as being correct. You must still check that the retrieved passage is really the source you need.",
   "check": [
    "To avoid the ad, what can you do in the passage store?",
    "Tag document types (policy/ad) and search only the policy."
   ]
  }
 },
 "rag-chunk": {
  "vi": {
   "story": "PDF chính sách được cắt thành các đoạn để tìm. Cắt ở đâu quyết định đoạn lấy lên có đủ ý không.",
   "words": [
    [
     "Chunk",
     "Một mảnh văn bản được lập chỉ mục."
    ],
    [
     "Chồng lấn (overlap)",
     "Hai mảnh liền nhau dùng chung vài dòng."
    ]
   ],
   "problem": "Điều khoản hoàn tiền có 8 dòng. Dòng 1: «Hoàn tiền trong 14 ngày.» Dòng 6: «Chỉ áp dụng cho gói chưa dùng.» Cắt mỗi mảnh 2 dòng, rồi cắt mỗi mảnh 6 dòng bước 3. Xem mảnh nào chứa cả lời hứa và điều kiện.",
   "steps": [
    [
     "Cắt 2 dòng",
     "4 mảnh: [1-2], [3-4], [5-6], [7-8]. Dòng 1 và dòng 6 nằm ở hai mảnh khác nhau."
    ],
    [
     "Hỏi «hoàn tiền không?»",
     "Mảnh [1-2] được tìm lên với lời hứa, thiếu điều kiện «gói chưa dùng»: câu trả lời quá rộng."
    ],
    [
     "Cắt 6 dòng, bước 3",
     "2 mảnh: [1-6] và [4-8]."
    ],
    [
     "Mảnh [1-6]",
     "Chứa cả dòng 1 và dòng 6: lời hứa đi cùng điều kiện."
    ],
    [
     "Đổi lại",
     "Mảnh dài thì có thể kéo thêm nhiễu và tốn token hơn, nên không cắt quá to."
    ]
   ],
   "say": "Cắt đoạn là cắt nghĩa. Một điều khoản bị xẻ đôi không còn là điều khoản; cắt theo ranh giới của ý và chồng lấn vừa đủ.",
   "check": [
    "Có cách nào cắt mà không phụ thuộc số dòng cố định?",
    "Cắt theo mục hoặc điều khoản, để mỗi mảnh là trọn một ý."
   ]
  },
  "en": {
   "story": "The policy PDF is cut into chunks for searching. Where you cut decides whether a retrieved chunk carries the full idea.",
   "words": [
    [
     "Chunk",
     "A piece of text that is indexed."
    ],
    [
     "Overlap",
     "Two adjacent chunks sharing a few lines."
    ]
   ],
   "problem": "The refund clause has 8 lines. Line 1: “Refund within 14 days.” Line 6: “Applies only to unused packages.” Cut chunks of 2 lines, then chunks of 6 lines with step 3. See which chunk holds both the promise and the condition.",
   "steps": [
    [
     "Cut 2 lines",
     "4 chunks: [1-2], [3-4], [5-6], [7-8]. Lines 1 and 6 sit in different chunks."
    ],
    [
     "Ask “is it refundable?”",
     "Chunk [1-2] is retrieved with the promise but lacks the condition “unused packages”: the answer is too broad."
    ],
    [
     "Cut 6 lines, step 3",
     "2 chunks: [1-6] and [4-8]."
    ],
    [
     "Chunk [1-6]",
     "Holds both line 1 and line 6: promise travels with the condition."
    ],
    [
     "In return",
     "A long chunk may bring more noise and cost more tokens, so do not cut too big."
    ]
   ],
   "say": "Cutting passages is cutting meaning. A clause split in half is no longer a clause; cut at the boundaries of ideas with just enough overlap.",
   "check": [
    "Is there a way to cut without a fixed number of lines?",
    "Cut by section or clause so each chunk is one whole idea."
   ]
  }
 },
 "rag-vec": {
  "vi": {
   "story": "Kho vectơ của Lotus Spa có cả FAQ marketing lẫn điều khoản. Câu hỏi của khách dùng chữ của FAQ.",
   "words": [
    [
     "Top-k",
     "Số đoạn gần nhất bạn lấy lên."
    ]
   ],
   "problem": "Điểm gần theo thứ tự: FAQ 0,91; điều khoản hoàn tiền 0,88; đoạn khác 0,60. Bạn lấy top-1 rồi top-3. Đoạn đúng là điều khoản.",
   "steps": [
    [
     "Top-1",
     "Chỉ FAQ (0,91). Điều khoản bị bỏ."
    ],
    [
     "Khoảng cách điểm",
     "0,91 − 0,88 = 0,03, rất nhỏ."
    ],
    [
     "Top-3",
     "Lấy FAQ, điều khoản, và đoạn 0,60: điều khoản có mặt."
    ],
    [
     "Gửi cho mô hình",
     "Với top-1, mô hình trả lời bằng FAQ: sai tài liệu. Với top-3, mô hình có điều khoản trong tay."
    ],
    [
     "Cái giá của top-3",
     "Thêm 1 đoạn nhiễu (0,60), tốn thêm token."
    ]
   ],
   "say": "Đoạn gần nhất không phải đoạn đúng. Lấy nhiều hơn một đoạn hoặc re-rank giúp, nhưng vẫn phải kiểm tài liệu nào mô hình đã dùng.",
   "check": [
    "Hai đoạn điểm 0,91 và 0,88 có nghĩa đoạn thứ nhất đúng hơn chắc chắn không?",
    "Không: chênh 0,03 là rất nhỏ so với nhiễu của embedding."
   ]
  },
  "en": {
   "story": "Lotus Spa's vector store holds both marketing FAQs and the policy clauses. The customer's question uses FAQ wording.",
   "words": [
    [
     "Top-k",
     "The number of nearest passages you pull."
    ]
   ],
   "problem": "Similarity in order: FAQ 0.91; refund clause 0.88; another passage 0.60. You take top-1 then top-3. The right passage is the clause.",
   "steps": [
    [
     "Top-1",
     "Only the FAQ (0.91). The clause is dropped."
    ],
    [
     "Score gap",
     "0.91 − 0.88 = 0.03, very small."
    ],
    [
     "Top-3",
     "Takes the FAQ, the clause and the 0.60 passage: the clause is present."
    ],
    [
     "Sent to the model",
     "With top-1 the model answers from the FAQ: wrong document. With top-3 the model holds the clause."
    ],
    [
     "Cost of top-3",
     "One more noise passage (0.60), more tokens."
    ]
   ],
   "say": "The nearest passage is not the right passage. Taking more than one passage or re-ranking helps, but you must still check which document the model used.",
   "check": [
    "Do scores 0.91 and 0.88 certainly mean the first is more correct?",
    "No: a gap of 0.03 is very small compared with embedding noise."
   ]
  }
 },
 "rag-idx": {
  "vi": {
   "story": "Chính sách vừa đổi từ 7 ngày sang 14 ngày, nhưng bot sáng nay vẫn nói 7 ngày. Mô hình không ngoan cố, chỉ mục cũ.",
   "words": [
    [
     "Chỉ mục (index)",
     "Bản đã nhúng và lưu của tài liệu tại thời điểm xây."
    ]
   ],
   "problem": "Điều khoản sửa lúc 9:00; chỉ mục xây lúc 8:00; xây lại lúc 12:00. Trung bình 10 câu hỏi hoàn tiền mỗi giờ. Đếm số câu trả lời sai, và nếu xây lại ngay lúc 9:06.",
   "steps": [
    [
     "Khoảng chỉ mục cũ",
     "Từ 9:00 đến 12:00 là 3 giờ."
    ],
    [
     "Câu trả lời sai",
     "3 × 10 = 30 câu nói «7 ngày»."
    ],
    [
     "Nếu xây lại lúc 9:06",
     "6 phút = 0,1 giờ × 10 = 1 câu sai."
    ],
    [
     "Tránh từ gốc",
     "Gắn việc dựng lại chỉ mục vào bước sửa tài liệu, hoặc kiểm ngày cập nhật tài liệu trước khi trả lời."
    ],
    [
     "Cách phát hiện",
     "Hỏi bot một câu có đáp án đã biết ngay sau mỗi lần sửa."
    ]
   ],
   "say": "Đổi file mà không xây lại chỉ mục thì lần tìm thấy bản cũ. Sai lúc này là lỗi vận hành, không phải lỗi mô hình.",
   "check": [
    "Nếu sửa lúc 9:00 và chỉ mục tự xây lại mỗi đêm, tệ nhất bao lâu bot dùng bản cũ?",
    "Gần 24 giờ."
   ]
  },
  "en": {
   "story": "The policy just changed from 7 days to 14 days, but the bot this morning still says 7 days. The model is not stubborn; the index is old.",
   "words": [
    [
     "Index",
     "The embedded and stored version of the documents at build time."
    ]
   ],
   "problem": "The clause was edited at 9:00; the index was built at 8:00; rebuilt at 12:00. On average 10 refund questions per hour. Count the wrong answers, and the case where it is rebuilt at 9:06.",
   "steps": [
    [
     "Stale-index period",
     "9:00 to 12:00 is 3 hours."
    ],
    [
     "Wrong answers",
     "3 × 10 = 30 answers saying “7 days”."
    ],
    [
     "If rebuilt at 9:06",
     "6 minutes = 0.1 hour × 10 = 1 wrong answer."
    ],
    [
     "Prevent at the root",
     "Tie index rebuilding to the document edit step, or check the document's update date before answering."
    ],
    [
     "How to detect",
     "Ask the bot a question with a known answer right after each edit."
    ]
   ],
   "say": "Change the file without rebuilding the index and search finds the old version. This is an operations error, not a model error.",
   "check": [
    "If the edit is at 9:00 and the index rebuilds nightly, how long at worst does the bot use the old version?",
    "Nearly 24 hours."
   ]
  }
 },
 "rag-rank": {
  "vi": {
   "story": "Điều khoản đúng đứng thứ 15 theo embedding trong 20 đoạn. Nếu bước tìm chỉ giữ 5, re-rank không thể cứu nó.",
   "words": [
    [
     "Re-rank",
     "Một mô hình chấm lại danh sách ứng viên theo mức liên quan với câu hỏi."
    ]
   ],
   "problem": "Có 20 đoạn ứng viên, điều khoản đúng ở thứ 15 theo embedding. Cách A: giữ top-5 rồi re-rank. Cách B: giữ top-20, re-rank, rồi lấy top-3. Điểm re-rank của điều khoản là 0,92, cao nhất.",
   "steps": [
    [
     "Cách A",
     "Top-5 không chứa thứ 15. Re-rank chỉ chấm lại 5 đoạn đó: điều khoản không có mặt."
    ],
    [
     "Cách B, ứng viên",
     "20 đoạn, gồm cả điều khoản ở thứ 15."
    ],
    [
     "Cách B, sau re-rank",
     "Điều khoản được 0,92, lên thứ 1."
    ],
    [
     "Cách B, lấy top-3",
     "Điều khoản nằm trong 3 đoạn gửi cho mô hình."
    ],
    [
     "Cái giá",
     "Re-rank 20 đoạn tốn nhiều hơn 5 đoạn: gấp 4 lần số lần chấm (20 ÷ 5)."
    ]
   ],
   "say": "Re-rank là một lần đọc lại danh sách, không phải một nguồn mới. Nó chỉ cứu được những gì bước tìm đã đưa vào danh sách.",
   "check": [
    "Nếu điều khoản đứng thứ 40 và bạn chỉ lấy 20 ứng viên thì sao?",
    "Re-rank không thấy nó; cần tăng số ứng viên hoặc cải thiện bước tìm."
   ]
  },
  "en": {
   "story": "The right clause ranks 15th by embedding among 20 passages. If the search step keeps only 5, re-ranking cannot save it.",
   "words": [
    [
     "Re-rank",
     "A model that rescores a candidate list by relevance to the question."
    ]
   ],
   "problem": "There are 20 candidate passages, the right clause is 15th by embedding. Way A: keep top-5 then re-rank. Way B: keep top-20, re-rank, then take top-3. The clause's re-rank score is 0.92, the highest.",
   "steps": [
    [
     "Way A",
     "Top-5 does not contain rank 15. Re-ranking rescores only those 5: the clause is absent."
    ],
    [
     "Way B, candidates",
     "20 passages, including the clause at rank 15."
    ],
    [
     "Way B, after re-rank",
     "The clause scores 0.92, moving to rank 1."
    ],
    [
     "Way B, take top-3",
     "The clause is among the 3 passages sent to the model."
    ],
    [
     "The cost",
     "Re-ranking 20 costs more than 5: 4 times the scoring (20 ÷ 5)."
    ]
   ],
   "say": "Re-ranking is a re-read of a list, not a new source. It can save only what the search step already put in the list.",
   "check": [
    "If the clause were ranked 40th and you only took 20 candidates?",
    "Re-rank never sees it; increase the number of candidates or improve the search step."
   ]
  }
 },
 "rag-near": {
  "vi": {
   "story": "Buổi demo tìm kiếm ngữ nghĩa chỉ chạy một câu và tìm đúng. Một lần đúng chưa phải là đánh giá.",
   "words": [
    [
     "Ca đối kháng",
     "Câu hỏi mà độ gần dễ dẫn sai."
    ]
   ],
   "problem": "Bạn viết thêm 4 ca đối kháng cho Lotus Spa: hỏi «hoàn tiền» khi có quảng cáo hoàn tiền; hỏi «hủy lịch» khi có chính sách hoàn tiền; hỏi một dịch vụ không có trong kho; hỏi cùng ý bằng chữ khác. Giả sử kết quả: demo gốc đúng 1/1; 4 ca đối kháng đúng 1/4.",
   "steps": [
    [
     "Demo gốc",
     "1 ÷ 1 = 100%, nhưng chỉ có một ca."
    ],
    [
     "Bộ đầy đủ",
     "Gộp 5 ca: đúng 1 + 1 = 2 ÷ 5 = 40%."
    ],
    [
     "Ca nào sai",
     "Ca quảng cáo, ca hủy lịch và ca không có trong kho (mô hình vẫn kéo lên một đoạn)."
    ],
    [
     "Ca đúng thứ hai",
     "Ca đồng nghĩa: cùng ý khác chữ, embedding làm tốt."
    ],
    [
     "Việc cần làm",
     "Lưu 5 ca và chạy lại mỗi khi đổi cách cắt đoạn hay embedding."
    ]
   ],
   "say": "Một buổi demo tìm được đoạn chưa phải là một đánh giá. Viết ca mà độ gần sẽ phản bội, và nhớ ca «không có trong kho» phải trả về «không thấy».",
   "check": [
    "Ca «dịch vụ không có trong kho» được coi là đúng khi nào?",
    "Khi hệ thống không kéo lên đoạn nào liên quan và nói không thấy."
   ]
  },
  "en": {
   "story": "The semantic search demo runs one question and finds the right answer. One success is not an evaluation.",
   "words": [
    [
     "Adversarial case",
     "A question where closeness easily misleads."
    ]
   ],
   "problem": "You write 4 more adversarial cases for Lotus Spa: ask “refund” when there is a refund ad; ask “cancel booking” when there is a refund policy; ask about a service not in the store; ask the same idea in different words. Suppose results: original demo right 1/1; the 4 adversarial cases right 1/4.",
   "steps": [
    [
     "Original demo",
     "1 ÷ 1 = 100%, but only one case."
    ],
    [
     "Full set",
     "Combine 5 cases: right 1 + 1 = 2 ÷ 5 = 40%."
    ],
    [
     "Which fail",
     "The ad case, the cancel case and the not-in-store case (the model still pulls up some passage)."
    ],
    [
     "The second right case",
     "The synonym case: same idea different words, embeddings do well."
    ],
    [
     "What to do",
     "Save the 5 cases and rerun them whenever you change the chunking or embedding."
    ]
   ],
   "say": "A demo finding a passage is not an evaluation. Write cases where closeness will betray you, and remember a “not in the store” case must return “not found”.",
   "check": [
    "When is the “service not in the store” case counted as right?",
    "When the system pulls up no relevant passage and says not found."
   ]
  }
 },
 "rag-store": {
  "vi": {
   "story": "Chroma lưu các đoạn trong những collection có tên. Bot sáng nay vẫn nói 7 ngày dù bạn đã xây collection mới.",
   "words": [
    [
     "Collection",
     "Một kho đoạn có tên trong cơ sở dữ liệu vectơ."
    ]
   ],
   "problem": "Collection `policy-2026-09` có 42 đoạn (bản 7 ngày). Collection `policy-2026-10` có 45 đoạn (bản 14 ngày). Code vẫn mở `policy-2026-09`. Câu hỏi hoàn tiền trả lời thế nào và kiểm bằng gì?",
   "steps": [
    [
     "Bot đọc từ đâu",
     "`policy-2026-09`, nên trả lời «7 ngày»."
    ],
    [
     "Embedding có hỏng không",
     "Không: kho cũ vẫn tìm đúng đoạn của kho cũ."
    ],
    [
     "Kiểm đếm",
     "Đếm đoạn của collection đang mở: 42, trong khi kỳ vọng 45."
    ],
    [
     "Chênh",
     "45 − 42 = 3 đoạn thiếu."
    ],
    [
     "Sửa",
     "Đổi tên collection trong code thành `policy-2026-10`, rồi hỏi lại một câu có đáp án đã biết."
    ]
   ],
   "say": "Một collection là một kho có tên; kho khác sẽ không tự được tìm. Khi câu trả lời cũ, kiểm tên kho trước khi nghi ngờ embedding.",
   "check": [
    "Làm sao tránh quên đổi tên collection mỗi tháng?",
    "Đặt tên collection trong một biến cấu hình duy nhất, hoặc dùng một alias trỏ tới bản mới nhất."
   ]
  },
  "en": {
   "story": "Chroma stores passages in named collections. This morning the bot still says 7 days though you built a new collection.",
   "words": [
    [
     "Collection",
     "A named store of passages in a vector database."
    ]
   ],
   "problem": "Collection `policy-2026-09` has 42 passages (the 7-day version). Collection `policy-2026-10` has 45 passages (the 14-day version). The code still opens `policy-2026-09`. How does the refund question get answered and how do you check?",
   "steps": [
    [
     "Where the bot reads from",
     "`policy-2026-09`, so it answers “7 days”."
    ],
    [
     "Is the embedding broken",
     "No: the old store still finds the old store's passages correctly."
    ],
    [
     "Count to check",
     "Count the passages in the opened collection: 42, while 45 is expected."
    ],
    [
     "Difference",
     "45 − 42 = 3 missing passages."
    ],
    [
     "Fix",
     "Change the collection name in code to `policy-2026-10`, then ask one question with a known answer."
    ]
   ],
   "say": "A collection is a named store; another store will not be searched automatically. When answers are stale, check the store's name before suspecting the embedding.",
   "check": [
    "How to avoid forgetting to change the collection name each month?",
    "Keep the collection name in one config variable, or use an alias pointing to the newest."
   ]
  }
 },
 "rag-demo": {
  "vi": {
   "story": "Buổi demo RAG chạy một câu và in ra đáp án. Bạn thêm một ca khó để xem bot có bịa số tiền không.",
   "words": [
    [
     "Ca khó",
     "Ca mà đoạn đúng có mặt nhưng không chứa chi tiết mà câu hỏi đòi."
    ]
   ],
   "problem": "Điều khoản hoàn tiền: «Hoàn theo giá gói đã mua.» (không có số). Câu hỏi: «Hoàn bao nhiêu tiền cho gói 60 phút?». Đáp án tốt: nêu quy tắc, nói chưa thấy số cụ thể trong đoạn. Đáp án tồi: «hoàn 650 nghìn» khi đoạn không nói giá. 4 ca thường đã đạt. Tính điểm khi bot bịa và khi bot nói thật.",
   "steps": [
    [
     "Ca thường",
     "4 ca đạt: 4 ÷ 4 = 100%."
    ],
    [
     "Bot bịa «650 nghìn»",
     "Ca khó trượt (số không có trong đoạn). Tổng 4 ÷ 5 = 80%."
    ],
    [
     "Bot nói «theo giá đã mua; đoạn chưa nêu số»",
     "Ca khó đạt. Tổng 5 ÷ 5 = 100%."
    ],
    [
     "Vì sao phải có ca này",
     "Demo gốc chỉ có ca mà đoạn chứa đủ câu trả lời, nên không phát hiện bịa."
    ],
    [
     "Cách chấm",
     "Ghi trước: mọi con số trong đáp án phải xuất hiện trong đoạn hoặc từ công cụ."
    ]
   ],
   "say": "Một lần RAG in ra câu trả lời chưa phải một lần chấm. Hãy thêm ca mà đoạn đúng không chứa con số, rồi kiểm bot có bịa không.",
   "check": [
    "Số 650 nghìn có thể đúng ngoài đời, vì sao vẫn bị tính sai?",
    "Vì nó không đến từ đoạn tài liệu hay công cụ: đúng do tình cờ, không có nguồn."
   ]
  },
  "en": {
   "story": "The RAG demo runs one question and prints an answer. You add a hard case to see whether the bot invents an amount.",
   "words": [
    [
     "Hard case",
     "A case where the right passage is present but lacks the detail the question asks for."
    ]
   ],
   "problem": "The refund clause: “Refund at the price of the package purchased.” (no number). The question: “How much is refunded for the 60-minute package?”. A good answer states the rule and says no specific number appears in the passage. A bad answer: “refund 650 thousand” when the passage gives no price. 4 normal cases already pass. Compute the score when the bot invents and when it tells the truth.",
   "steps": [
    [
     "Normal cases",
     "4 pass: 4 ÷ 4 = 100%."
    ],
    [
     "Bot invents “650 thousand”",
     "The hard case fails (the number is not in the passage). Total 4 ÷ 5 = 80%."
    ],
    [
     "Bot says “at the purchase price; the passage gives no number”",
     "The hard case passes. Total 5 ÷ 5 = 100%."
    ],
    [
     "Why this case is needed",
     "The original demo only has cases where the passage holds the full answer, so it cannot detect invention."
    ],
    [
     "How to score",
     "Write in advance: every number in the answer must appear in the passage or come from a tool."
    ]
   ],
   "say": "One RAG run printing an answer is not a scoring run. Add a case where the right passage lacks the number, then check whether the bot invents.",
   "check": [
    "650 thousand may be right in real life, so why is it scored wrong?",
    "Because it came from neither the passage nor a tool: right by coincidence, with no source."
   ]
  }
 },
 "rag-job": {
  "vi": {
   "story": "Bài tập RAG của khóa yêu cầu trả lời từ tập tài liệu được giao, không từ trí nhớ. Bạn đặt tiêu chí chấm trước khi chạy.",
   "words": [
    [
     "Ngoài bài",
     "Câu trả lời dựa vào điều không có trong tài liệu được giao."
    ]
   ],
   "problem": "Bộ 10 câu hỏi: 7 câu có đáp án trong tài liệu, 3 câu đáp án không có trong tài liệu (dù có thật ngoài đời). Hành vi đúng: 7 câu trả lời kèm trích dẫn, 3 câu nói không thấy. Một bot trả lời chắc chắn cả 10 câu thì sai ở đâu?",
   "steps": [
    [
     "Hành vi đúng",
     "7 trả lời có trích dẫn + 3 «không thấy trong tài liệu» = 10 ca đạt."
    ],
    [
     "Bot trả lời cả 10",
     "7 ca trong tài liệu có thể đạt; 3 ca còn lại là câu ngoài bài."
    ],
    [
     "Tỷ lệ vi phạm",
     "3 ÷ 10 = 30% câu trả lời ngoài bài."
    ],
    [
     "Điểm của bot",
     "7 ÷ 10 = 70%, dù có thể trả lời đúng ngoài đời."
    ],
    [
     "Kiểm tra",
     "Mỗi câu trả lời phải dẫn được về một đoạn của tài liệu được giao."
    ]
   ],
   "say": "Bài RAG là trả lời từ tập tài liệu được giao, không từ trí nhớ. Một câu đúng ngoài đời nhưng không có trong tài liệu vẫn là câu ngoài bài.",
   "check": [
    "Vì sao «không thấy trong tài liệu» là câu trả lời đạt?",
    "Vì nó đúng với phạm vi bài: bot chỉ trả lời điều tài liệu hỗ trợ."
   ]
  },
  "en": {
   "story": "The course's RAG assignment requires answering from the assigned set of documents, not from memory. You set the scoring criteria before running.",
   "words": [
    [
     "Off-scope",
     "An answer relying on something not in the assigned documents."
    ]
   ],
   "problem": "A set of 10 questions: 7 have answers in the documents, 3 have answers not in the documents (though real in the world). Correct behaviour: 7 answers with citations, 3 saying not found. Where does a bot that answers all 10 confidently go wrong?",
   "steps": [
    [
     "Correct behaviour",
     "7 cited answers + 3 “not found in the documents” = 10 passing cases."
    ],
    [
     "Bot answers all 10",
     "The 7 in-document cases may pass; the other 3 are off-scope answers."
    ],
    [
     "Violation rate",
     "3 ÷ 10 = 30% off-scope answers."
    ],
    [
     "The bot's score",
     "7 ÷ 10 = 70%, even if it may be right in the real world."
    ],
    [
     "Check",
     "Every answer must trace to a passage of the assigned documents."
    ]
   ],
   "say": "A RAG assignment is answering from the assigned documents, not from memory. An answer right in the world but absent from the documents is still off-scope.",
   "check": [
    "Why is “not found in the documents” a passing answer?",
    "Because it is right within the assignment's scope: the bot answers only what the documents support."
   ]
  }
 },
 "im-grid": {
  "vi": {
   "story": "Chị Lan muốn ảnh quảng cáo cho gói mới. Trước khi dùng AI vẽ ảnh, bạn cần biết máy hiểu một bức ảnh là gì.",
   "words": [
    [
     "Pixel",
     "Một ô của ảnh, gồm giá trị cho từng kênh màu."
    ],
    [
     "Kênh màu",
     "Đỏ, lục, lam: 3 số cho mỗi pixel."
    ]
   ],
   "problem": "Một ảnh 1.024 × 1.024 pixel, 3 kênh màu. Một ảnh xám 2 × 2 có các pixel 0, 128, 255, 64. Đếm số và đọc ảnh nhỏ.",
   "steps": [
    [
     "Số giá trị trong ảnh lớn",
     "1.024 × 1.024 × 3 = 3.145.728 số."
    ],
    [
     "Ảnh 2 × 2",
     "4 pixel: 0 (đen), 128 (xám), 255 (trắng), 64 (xám tối)."
    ],
    [
     "Trung bình độ sáng",
     "(0 + 128 + 255 + 64) ÷ 4 = 447 ÷ 4 = 111,75."
    ],
    [
     "Ý nghĩa",
     "Một bức ảnh là một lưới số. Không có «góc phố» hay «biển hiệu» trong dữ liệu, chỉ là các số."
    ],
    [
     "Hệ quả",
     "Một ảnh sinh ra có góc phố trông thật vẫn không phải một địa chỉ bạn có thể gửi khách đến."
    ]
   ],
   "say": "Một bức ảnh là một lưới số, chưa phải một sự thật. Trông giống thật không có nghĩa là có thật.",
   "check": [
    "Ảnh xám 100 × 100 có bao nhiêu số?",
    "100 × 100 = 10.000 số (1 kênh)."
   ]
  },
  "en": {
   "story": "Ms. Lan wants ad images for a new package. Before using AI to draw, you need to know what a machine takes an image to be.",
   "words": [
    [
     "Pixel",
     "One cell of an image, holding a value for each colour channel."
    ],
    [
     "Colour channel",
     "Red, green, blue: 3 numbers per pixel."
    ]
   ],
   "problem": "An image of 1,024 × 1,024 pixels, 3 colour channels. A 2 × 2 grey image has pixels 0, 128, 255, 64. Count the numbers and read the small image.",
   "steps": [
    [
     "Numbers in the large image",
     "1,024 × 1,024 × 3 = 3,145,728 numbers."
    ],
    [
     "The 2 × 2 image",
     "4 pixels: 0 (black), 128 (grey), 255 (white), 64 (dark grey)."
    ],
    [
     "Mean brightness",
     "(0 + 128 + 255 + 64) ÷ 4 = 447 ÷ 4 = 111.75."
    ],
    [
     "Meaning",
     "An image is a grid of numbers. There is no “street corner” or “shop sign” in the data, only numbers."
    ],
    [
     "Consequence",
     "A generated image with a realistic street corner is still not an address you can send customers to."
    ]
   ],
   "say": "An image is a grid of numbers, not yet a fact. Looking real does not mean being real.",
   "check": [
    "How many numbers does a 100 × 100 grey image hold?",
    "100 × 100 = 10,000 numbers (1 channel)."
   ]
  }
 },
 "im-vae": {
  "vi": {
   "story": "Để máy làm việc với ảnh lớn nhanh hơn, VAE nén ảnh thành một mã nhỏ rồi dựng lại.",
   "words": [
    [
     "Latent",
     "Mã nén nhỏ giữ phần chung của ảnh."
    ],
    [
     "Dựng lại",
     "Giải mã latent trở về ảnh."
    ]
   ],
   "problem": "Ảnh 1.024 × 1.024 × 3 được nén thành latent 128 × 128 × 4. Tính tỷ lệ nén và nói chuyện gì xảy ra với một chữ nhỏ trên biển hiệu.",
   "steps": [
    [
     "Số giá trị ảnh",
     "1.024 × 1.024 × 3 = 3.145.728."
    ],
    [
     "Số giá trị latent",
     "128 × 128 × 4 = 65.536."
    ],
    [
     "Tỷ lệ nén",
     "3.145.728 ÷ 65.536 = 48 lần."
    ],
    [
     "Chữ nhỏ",
     "Chi tiết riêng bị bỏ khi nén: chữ nhỏ trên biển hiệu thành một vệt khi dựng lại."
    ],
    [
     "Đọc",
     "Mờ là dấu hiệu của chi tiết đã mất, không phải «phong cách nghệ thuật»."
    ]
   ],
   "say": "VAE giữ phần chung; bản dựng lại bị mờ vì phần riêng đã bị bỏ. Đừng dùng ảnh dựng lại khi chữ nhỏ quan trọng.",
   "check": [
    "Nén mạnh hơn (latent nhỏ hơn) thì bản dựng lại thường thế nào?",
    "Mờ hơn, vì mất nhiều chi tiết hơn."
   ]
  },
  "en": {
   "story": "To let machines work faster with large images, a VAE compresses an image into a small code and then rebuilds it.",
   "words": [
    [
     "Latent",
     "The small compressed code that keeps the image's shared structure."
    ],
    [
     "Reconstruction",
     "Decoding the latent back into an image."
    ]
   ],
   "problem": "A 1,024 × 1,024 × 3 image is compressed to a 128 × 128 × 4 latent. Compute the compression ratio and say what happens to a small word on a shop sign.",
   "steps": [
    [
     "Image values",
     "1,024 × 1,024 × 3 = 3,145,728."
    ],
    [
     "Latent values",
     "128 × 128 × 4 = 65,536."
    ],
    [
     "Compression ratio",
     "3,145,728 ÷ 65,536 = 48 times."
    ],
    [
     "Small word",
     "Specific detail is dropped in compression: the small text on the sign becomes a smear when rebuilt."
    ],
    [
     "Read",
     "Blur is a sign of lost detail, not an “artistic style”."
    ]
   ],
   "say": "A VAE keeps what is shared; the rebuilt image is blurry because the specifics were dropped. Do not use a rebuilt image when small text matters.",
   "check": [
    "With stronger compression (a smaller latent), how does the rebuild usually look?",
    "Blurrier, because more detail is lost."
   ]
  }
 },
 "im-gan": {
  "vi": {
   "story": "GAN gồm hai phần: kẻ làm giả (generator) vẽ ảnh, người chê (discriminator) đoán thật hay giả. Chúng luyện nhau.",
   "words": [
    [
     "Generator",
     "Vẽ ảnh giả từ nhiễu."
    ],
    [
     "Discriminator",
     "Đoán một ảnh là thật hay giả."
    ]
   ],
   "problem": "Sau nhiều vòng huấn luyện, người chê nhận 1.000 ảnh (500 thật, 500 giả) và đoán đúng 500. Đọc con số đó, và nói điều gì nó chưa chứng minh. Ví dụ: tập huấn luyện toàn ảnh giày, GAN vẽ đôi giày không có mã trong kho.",
   "steps": [
    [
     "Độ chính xác người chê",
     "500 ÷ 1.000 = 50%, bằng tung đồng xu."
    ],
    [
     "Ý nghĩa",
     "Người chê không phân biệt được ảnh giả với ảnh thật."
    ],
    [
     "Điều chưa chứng minh",
     "Không có nghĩa đôi giày vẽ ra tồn tại trong kho hay có thể bán."
    ],
    [
     "Đôi giày không mã",
     "Người chê không bắt được vì nó trông giống giày thật; kho của bạn vẫn không có."
    ],
    [
     "Việc cần làm",
     "Nếu cần sản phẩm thật, tra mã trong catalog, không dựa vào ảnh sinh."
    ]
   ],
   "say": "GAN gồm một kẻ làm giả và một người chê; người chê gật đầu không có nghĩa là đời thực. Ảnh sinh là ảnh trông giống, không phải ảnh của một món hàng có thật.",
   "check": [
    "Người chê đạt 100% chính xác thì GAN đang ở trạng thái nào?",
    "Kẻ làm giả còn kém: ảnh giả dễ bị bắt."
   ]
  },
  "en": {
   "story": "A GAN has two parts: a forger (generator) draws images and a critic (discriminator) guesses real or fake. They train each other.",
   "words": [
    [
     "Generator",
     "Draws fake images from noise."
    ],
    [
     "Discriminator",
     "Guesses whether an image is real or fake."
    ]
   ],
   "problem": "After many rounds of training, the critic receives 1,000 images (500 real, 500 fake) and guesses 500 correctly. Read that number and say what it does not prove. Example: the training set is all shoe images, the GAN draws a shoe with no code in the store.",
   "steps": [
    [
     "Critic accuracy",
     "500 ÷ 1,000 = 50%, equal to a coin toss."
    ],
    [
     "Meaning",
     "The critic cannot tell fakes from real."
    ],
    [
     "What it does not prove",
     "It does not mean the drawn shoe exists in the store or can be sold."
    ],
    [
     "The shoe with no code",
     "The critic does not catch it because it looks like a real shoe; your store still does not have it."
    ],
    [
     "What to do",
     "If you need a real product, look up the code in the catalog, do not rely on a generated image."
    ]
   ],
   "say": "A GAN is a forger and a critic; the critic nodding does not mean real life. A generated image looks like something, it is not a picture of a real item.",
   "check": [
    "If the critic reaches 100% accuracy, what state is the GAN in?",
    "The forger is still weak: fakes are easily caught."
   ]
  }
 },
 "im-diff": {
  "vi": {
   "story": "Diffusion học cách gỡ nhiễu khỏi ảnh. Bạn tính tay một pixel để thấy việc gỡ nhiễu là phép tính gì.",
   "words": [
    [
     "Nhiễu",
     "Số ngẫu nhiên cộng vào ảnh."
    ],
    [
     "ᾱ",
     "Tỷ lệ ảnh gốc còn lại ở bước này."
    ]
   ],
   "problem": "Pixel gốc x₀ = 200. Ở bước t có ᾱ = 0,64, tức √ᾱ = 0,8 và √(1 − ᾱ) = 0,6. Nhiễu ε = 10. Tính pixel nhiễu xₜ = 0,8 × x₀ + 0,6 × ε, rồi gỡ nhiễu nếu mô hình đoán đúng ε̂ = 10.",
   "steps": [
    [
     "Pixel nhiễu",
     "xₜ = 0,8 × 200 + 0,6 × 10 = 160 + 6 = 166."
    ],
    [
     "Mô hình đoán nhiễu",
     "ε̂ = 10 (giả sử đoán đúng)."
    ],
    [
     "Gỡ nhiễu",
     "x₀ = (xₜ − 0,6 × ε̂) ÷ 0,8 = (166 − 6) ÷ 0,8 = 160 ÷ 0,8 = 200."
    ],
    [
     "Nếu đoán sai ε̂ = 20",
     "x₀ = (166 − 12) ÷ 0,8 = 154 ÷ 0,8 = 192,5. Lệch 7,5."
    ],
    [
     "Đọc",
     "Mô hình học đoán nhiễu; ảnh tạo ra là kết quả gỡ nhiễu nhiều bước, không phải tra một kho ảnh."
    ]
   ],
   "say": "Diffusion học cách gỡ nhiễu; nó không tra một kho ảnh. Vì thế mã vạch trong ảnh sinh chỉ là các ô trông giống mã, không phải mã trong hệ thống.",
   "check": [
    "Nếu ε̂ lớn hơn nhiễu thật thì x₀ ước lượng nhỏ hơn hay lớn hơn 200?",
    "Nhỏ hơn: bạn trừ đi quá nhiều (như ví dụ 192,5)."
   ]
  },
  "en": {
   "story": "Diffusion learns to remove noise from images. You compute one pixel by hand to see what denoising is as a calculation.",
   "words": [
    [
     "Noise",
     "Random numbers added to an image."
    ],
    [
     "ᾱ",
     "The share of the original image remaining at this step."
    ]
   ],
   "problem": "Original pixel x₀ = 200. At step t, ᾱ = 0.64, i.e. √ᾱ = 0.8 and √(1 − ᾱ) = 0.6. Noise ε = 10. Compute the noisy pixel xₜ = 0.8 × x₀ + 0.6 × ε, then denoise if the model predicts ε̂ = 10 correctly.",
   "steps": [
    [
     "Noisy pixel",
     "xₜ = 0.8 × 200 + 0.6 × 10 = 160 + 6 = 166."
    ],
    [
     "Model predicts the noise",
     "ε̂ = 10 (suppose correct)."
    ],
    [
     "Denoise",
     "x₀ = (xₜ − 0.6 × ε̂) ÷ 0.8 = (166 − 6) ÷ 0.8 = 160 ÷ 0.8 = 200."
    ],
    [
     "If it predicts wrongly ε̂ = 20",
     "x₀ = (166 − 12) ÷ 0.8 = 154 ÷ 0.8 = 192.5. Off by 7.5."
    ],
    [
     "Read",
     "The model learns to predict noise; the generated image is the result of many denoising steps, not a lookup in an image store."
    ]
   ],
   "say": "Diffusion learns to remove noise; it does not look up an image store. So a barcode in a generated image is just cells that look like a code, not a code in the system.",
   "check": [
    "If ε̂ is larger than the true noise, is the estimated x₀ smaller or larger than 200?",
    "Smaller: you subtract too much (as in the example 192.5)."
   ]
  }
 },
 "im-txt": {
  "vi": {
   "story": "Thảo dùng mô tả chữ để lái ảnh quảng cáo. Mức bám theo mô tả được điều chỉnh bằng guidance scale.",
   "words": [
    [
     "Guidance scale s",
     "Mức đẩy kết quả về phía mô tả: ε = ε_không mô tả + s × (ε_có mô tả − ε_không mô tả)."
    ]
   ],
   "problem": "Giả sử ε_không mô tả = 2 và ε_có mô tả = 5 (một số minh họa). Tính ε với s = 0, 1, 7,5, và nói điều prompt chưa làm được.",
   "steps": [
    [
     "s = 0",
     "ε = 2 + 0 × (5 − 2) = 2: bỏ qua mô tả."
    ],
    [
     "s = 1",
     "ε = 2 + 1 × 3 = 5: đúng mức có mô tả."
    ],
    [
     "s = 7,5",
     "ε = 2 + 7,5 × 3 = 2 + 22,5 = 24,5: bám mô tả rất mạnh."
    ],
    [
     "Rủi ro khi s cao",
     "Ảnh bám mô tả mạnh nhưng có thể mất tự nhiên hoặc bị bão hòa."
    ],
    [
     "Điều prompt không làm",
     "Mô tả một bao bì không sinh ra một bao bì đã in. Không được bịa thông số của sản phẩm thật."
    ]
   ],
   "say": "Prompt lái bức ảnh nhưng không chứng nhận bức ảnh. Ảnh minh họa là minh họa, không phải ảnh của sản phẩm có thật.",
   "check": [
    "Muốn ảnh bao bì đúng logo thật của Lotus Spa thì nên làm gì?",
    "Dùng file logo thật chèn vào, không để mô hình vẽ lại."
   ]
  },
  "en": {
   "story": "Thao uses text descriptions to steer ad images. How closely the image follows the description is tuned by the guidance scale.",
   "words": [
    [
     "Guidance scale s",
     "How hard the result is pushed toward the description: ε = ε_uncond + s × (ε_cond − ε_uncond)."
    ]
   ],
   "problem": "Suppose ε_uncond = 2 and ε_cond = 5 (an illustrative number). Compute ε at s = 0, 1, 7.5, and say what the prompt cannot do.",
   "steps": [
    [
     "s = 0",
     "ε = 2 + 0 × (5 − 2) = 2: ignores the description."
    ],
    [
     "s = 1",
     "ε = 2 + 1 × 3 = 5: exactly the conditioned level."
    ],
    [
     "s = 7.5",
     "ε = 2 + 7.5 × 3 = 2 + 22.5 = 24.5: follows the description very strongly."
    ],
    [
     "Risk at high s",
     "The image follows the description strongly but may lose naturalness or oversaturate."
    ],
    [
     "What a prompt cannot do",
     "Describing a package does not produce a printed package. Do not invent specifications of a real product."
    ]
   ],
   "say": "A prompt steers the image but does not certify it. A generated image is an illustration, not a photo of a real product.",
   "check": [
    "To get the package with Lotus Spa's true logo, what should you do?",
    "Insert the real logo file, do not let the model redraw it."
   ]
  }
 },
 "lc-tpl": {
  "vi": {
   "story": "Bot hoàn tiền dùng một khuôn prompt có chỗ trống cho đoạn tìm được. Chỗ trống rỗng là lỗi lặng lẽ.",
   "words": [
    [
     "Template",
     "Khuôn prompt có các chỗ trống {…}."
    ],
    [
     "Chỗ trống rỗng",
     "Biến không được điền, thường vì bước tìm không ra gì."
    ]
   ],
   "problem": "Khuôn: «Chỉ dùng đoạn sau để trả lời: {passage}. Câu hỏi: {question}». Trong 200 lần gọi, bước tìm không ra đoạn nào ở 12 lần, nên {passage} rỗng. Tính tỷ lệ và nói điều gì xảy ra nếu vẫn gọi mô hình.",
   "steps": [
    [
     "Tỷ lệ rỗng",
     "12 ÷ 200 = 6%."
    ],
    [
     "Nếu vẫn gọi",
     "Mô hình thấy «Chỉ dùng đoạn sau: » rồi không có gì, và vẫn viết một câu trả lời từ trí nhớ."
    ],
    [
     "Hệ quả",
     "12 câu trả lời nằm ngoài RAG, dù code dùng một thư viện tên LangChain."
    ],
    [
     "Rào chắn",
     "Nếu {passage} rỗng, trả lời cố định: «không tìm thấy trong tài liệu», không gọi mô hình."
    ],
    [
     "Kiểm tra",
     "Ghi log số lần rỗng mỗi ngày để thấy nếu bước tìm hỏng."
    ]
   ],
   "say": "Template là khuôn có các chỗ trống. Đừng để mô hình tự điền nguồn: nếu chỗ trống rỗng thì phải dừng.",
   "check": [
    "Nếu tỷ lệ rỗng tăng từ 6% lên 30% thì điều đó báo hiệu gì?",
    "Bước tìm có vấn đề (chỉ mục cũ, sai collection, câu hỏi ngoài kho)."
   ]
  },
  "en": {
   "story": "The refund bot uses a prompt template with a blank for the retrieved passage. An empty blank is a silent error.",
   "words": [
    [
     "Template",
     "A prompt mould with blanks {…}."
    ],
    [
     "Empty blank",
     "A variable left unfilled, usually because retrieval found nothing."
    ]
   ],
   "problem": "Template: “Use only the following passage to answer: {passage}. Question: {question}”. In 200 calls, retrieval finds no passage 12 times, so {passage} is empty. Compute the rate and say what happens if the model is still called.",
   "steps": [
    [
     "Empty rate",
     "12 ÷ 200 = 6%."
    ],
    [
     "If still called",
     "The model sees “Use only the following passage: ” and nothing, yet still writes an answer from memory."
    ],
    [
     "Consequence",
     "12 answers sit outside RAG, even though the code uses a library named LangChain."
    ],
    [
     "Guard",
     "If {passage} is empty, return a fixed reply “not found in the documents”, do not call the model."
    ],
    [
     "Monitor",
     "Log the number of empty blanks each day to see if retrieval breaks."
    ]
   ],
   "say": "A template is a mould with blanks. Do not let the model fill in sources itself: if a blank is empty, stop.",
   "check": [
    "If the empty rate rises from 6% to 30%, what does that signal?",
    "A problem in retrieval (stale index, wrong collection, questions outside the store)."
   ]
  }
 },
 "lc-parse": {
  "vi": {
   "story": "Hệ thống cần câu trả lời có dạng cố định để máy đọc được: JSON gồm «đáp án» và «mã». Mô hình không phải lúc nào cũng nghe lời.",
   "words": [
    [
     "Parser",
     "Bộ đọc đầu ra theo một dạng cố định; sai dạng thì báo lỗi."
    ]
   ],
   "problem": "Dạng yêu cầu: {\"dap_an\": \"co\" hoặc \"khong\", \"ma\": \"A12\"}. Mô hình viết: «tôi nghĩ là có, khoảng 650 nghìn». Trong 100 lần gọi, 8 lần sai dạng. Cho phép thử lại tối đa 2 lần, giả sử mỗi lần thử độc lập sai 8%. Tính tỷ lệ còn lỗi.",
   "steps": [
    [
     "Câu viết tự do",
     "Parser không đọc ra dap_an và ma: báo lỗi dạng. Đây là kết quả đúng của hệ thống, không phải «có»."
    ],
    [
     "Sai ở lần đầu",
     "8% = 0,08."
    ],
    [
     "Sai sau 1 lần thử lại",
     "0,08 × 0,08 = 0,0064 = 0,64%."
    ],
    [
     "Sai sau 2 lần thử lại",
     "0,08³ = 0,000512 ≈ 0,05%."
    ],
    [
     "Số lần gọi tăng",
     "Trung bình thêm 8% + 0,64% = 8,64 lần gọi cho mỗi 100 lần: rẻ so với lợi ích."
    ]
   ],
   "say": "Parser đòi một dạng đầu ra; mô hình không nghe lời thì parser báo lỗi. Nếu thử lại vẫn hỏng, hệ thống phải dừng ở lỗi dạng, không được đoán đáp án.",
   "check": [
    "Nếu thử lại vẫn lỗi, hệ thống nên trả gì cho khách?",
    "Một thông báo chưa xử lý được và chuyển cho nhân viên, không phải một «có» đoán."
   ]
  },
  "en": {
   "story": "The system needs answers in a fixed form so machines can read them: JSON with “answer” and “code”. The model does not always obey.",
   "words": [
    [
     "Parser",
     "A reader of output in a fixed form; a wrong form raises an error."
    ]
   ],
   "problem": "Required form: {\"answer\": \"yes\" or \"no\", \"code\": \"A12\"}. The model writes: “I think yes, about 650 thousand”. In 100 calls, 8 are in the wrong form. Allow up to 2 retries, assuming each try fails independently 8% of the time. Compute the remaining error rate.",
   "steps": [
    [
     "Free-form text",
     "The parser cannot extract answer and code: it raises a form error. That is the system's right result, not “yes”."
    ],
    [
     "Fails at the first try",
     "8% = 0.08."
    ],
    [
     "Fails after 1 retry",
     "0.08 × 0.08 = 0.0064 = 0.64%."
    ],
    [
     "Fails after 2 retries",
     "0.08³ = 0.000512 ≈ 0.05%."
    ],
    [
     "Extra calls",
     "On average 8% + 0.64% = 8.64 extra calls per 100: cheap against the benefit."
    ]
   ],
   "say": "A parser demands an output form; if the model does not obey, the parser reports an error. If retries still fail, the system must stop at a form error, not guess the answer.",
   "check": [
    "If retries still fail, what should the system return to the customer?",
    "A message that it could not process and a hand-off to staff, not a guessed “yes”."
   ]
  }
 },
 "lc-agent": {
  "vi": {
   "story": "Một câu hỏi đơn giản đi đường đã vẽ sẵn, một câu hỏi mở cần bot tự chọn bước. Cả hai đều cần trần số bước.",
   "words": [
    [
     "Chain",
     "Chuỗi bước cố định."
    ],
    [
     "Agent",
     "Mô hình tự chọn bước kế tiếp."
    ]
   ],
   "problem": "Câu 1: «Giá mã A12?» đi chain 2 bước: catalog rồi trả lời. Câu 2 mở: «Mình mua gói 60 phút 10 ngày trước, hoàn được không và nếu hoàn thì lấy lại bao nhiêu?». Agent chọn: tra chính sách, tra catalog, trả lời. Mỗi bước tốn khoảng 2.000 token. Trần 4 bước. Tính chi phí.",
   "steps": [
    [
     "Chain câu 1",
     "2 bước × 2.000 = 4.000 token, đường cố định."
    ],
    [
     "Agent câu 2, đường thường",
     "3 bước (chính sách, catalog, trả lời) × 2.000 = 6.000 token."
    ],
    [
     "Agent xấu nhất",
     "Chạm trần 4 bước × 2.000 = 8.000 token."
    ],
    [
     "Nếu không có trần",
     "Agent lặp mãi khi công cụ lỗi và chi phí không giới hạn."
    ],
    [
     "Khi chạm trần",
     "Dừng và trả lời «tôi chưa giải quyết được, đã chuyển cho nhân viên»."
    ]
   ],
   "say": "Chain là một đường đã vẽ sẵn; agent tự chọn bước sau; cả hai đều cần trần. Dùng chain khi đường đi rõ, dùng agent khi câu hỏi mở.",
   "check": [
    "Vì sao câu 1 không cần agent?",
    "Vì đường đi luôn giống nhau (catalog rồi trả lời), không cần mô hình chọn."
   ]
  },
  "en": {
   "story": "A simple question takes a pre-drawn path, an open question needs the bot to choose its steps. Both need a cap on steps.",
   "words": [
    [
     "Chain",
     "A fixed sequence of steps."
    ],
    [
     "Agent",
     "The model chooses the next step itself."
    ]
   ],
   "problem": "Question 1: “Price of code A12?” goes through a 2-step chain: catalog then answer. Question 2 is open: “I bought the 60-minute package 10 days ago, can I get a refund and how much would I get back?”. The agent chooses: look up the policy, look up the catalog, answer. Each step costs about 2,000 tokens. Cap 4 steps. Compute the cost.",
   "steps": [
    [
     "Chain for question 1",
     "2 steps × 2,000 = 4,000 tokens, a fixed path."
    ],
    [
     "Agent for question 2, usual path",
     "3 steps (policy, catalog, answer) × 2,000 = 6,000 tokens."
    ],
    [
     "Agent worst case",
     "Hits the cap 4 steps × 2,000 = 8,000 tokens."
    ],
    [
     "With no cap",
     "The agent loops forever when a tool fails and cost is unbounded."
    ],
    [
     "On hitting the cap",
     "Stop and reply “I could not resolve this, handed over to staff”."
    ]
   ],
   "say": "A chain is a pre-drawn path, an agent chooses its next step; both need a cap. Use a chain when the path is clear, an agent when the question is open.",
   "check": [
    "Why does question 1 not need an agent?",
    "Because the path is always the same (catalog then answer), the model need not choose."
   ]
  }
 }
};

const visuals: Record<string, Visual> = {
 "or-obj": {
  "kind": "table",
  "title": [
   "Hai phương án cùng chi 15 triệu",
   "Two plans with the same 15 million"
  ],
  "head": [
   [
    "Phương án (g, m, t)",
    "Plan (g, m, t)"
   ],
   [
    "Form",
    "Forms"
   ]
  ],
  "rows": [
   [
    "(6, 5, 4)",
    50
   ],
   [
    "(5, 6, 4)",
    51
   ]
  ],
  "mark": [
   [
    1,
    1
   ]
  ]
 },
 "or-con": {
  "kind": "table",
  "title": [
   "Kiểm tra khả thi",
   "Feasibility check"
  ],
  "head": [
   [
    "Phương án",
    "Plan"
   ],
   [
    "Tổng chi",
    "Total spend"
   ],
   [
    "Form",
    "Forms"
   ]
  ],
  "rows": [
   [
    "(5, 6, 4)",
    15,
    51
   ],
   [
    "(6, 6, 4) ✗",
    16,
    54
   ],
   [
    "(8, 6, 4) bỏ ngân sách",
    18,
    60
   ]
  ],
  "mark": [
   [
    1,
    1
   ]
  ]
 },
 "or-sens": {
  "kind": "line",
  "title": [
   "Form tối đa theo ngân sách (triệu)",
   "Maximum forms by budget (million)"
  ],
  "xs": [
   "6",
   "10",
   "14",
   "15",
   "16",
   "18",
   "20"
  ],
  "ys": [
   24,
   36,
   48,
   51,
   54,
   60,
   60
  ],
  "unit": "form"
 },
 "ga-next": {
  "kind": "bars",
  "title": [
   "Xác suất token kế tiếp (%)",
   "Next-token probability (%)"
  ],
  "items": [
   {
    "label": [
     "600",
     "600"
    ],
    "value": 40
   },
   {
    "label": [
     "500",
     "500"
    ],
    "value": 25
   },
   {
    "label": [
     "700",
     "700"
    ],
    "value": 15
   },
   {
    "label": [
     "650 (giá thật)",
     "650 (true)"
    ],
    "value": 10
   },
   {
    "label": [
     "khác",
     "other"
    ],
    "value": 10
   }
  ],
  "unit": "%"
 },
 "ga-temp": {
  "kind": "bars",
  "title": [
   "Giá model viết ở temperature cao (nghìn), giá thật 650",
   "Prices written at high temperature (thousand), true 650"
  ],
  "items": [
   {
    "label": [
     "Lần 1",
     "Run 1"
    ],
    "value": 600
   },
   {
    "label": [
     "Lần 2",
     "Run 2"
    ],
    "value": 550
   },
   {
    "label": [
     "Lần 3",
     "Run 3"
    ],
    "value": 700
   },
   {
    "label": [
     "Lần 4",
     "Run 4"
    ],
    "value": 650
   },
   {
    "label": [
     "Lần 5",
     "Run 5"
    ],
    "value": 580
   }
  ]
 },
 "ga-few": {
  "kind": "bars",
  "title": [
   "Đúng dạng và đúng nội dung (%)",
   "Right form vs right content (%)"
  ],
  "items": [
   {
    "label": [
     "Đúng dạng",
     "Right form"
    ],
    "value": 100
   },
   {
    "label": [
     "Đúng nội dung",
     "Right content"
    ],
    "value": 80
   }
  ],
  "unit": "%"
 },
 "sa-tune": {
  "kind": "bars",
  "title": [
   "Khối lượng cần làm (token)",
   "Work needed (tokens)"
  ],
  "items": [
   {
    "label": [
     "Sửa tài liệu (RAG)",
     "Edit document (RAG)"
    ],
    "value": 120
   },
   {
    "label": [
     "Fine-tune",
     "Fine-tune"
    ],
    "value": 600000
   }
  ]
 },
 "sa-stage": {
  "kind": "table",
  "title": [
   "Ca trả lời được theo chặng (10 ca)",
   "Answerable cases by stage (10 cases)"
  ],
  "head": [
   [
    "Chặng",
    "Stage"
   ],
   [
    "Trả lời được",
    "Answerable"
   ],
   [
    "Chưa tra",
    "Not checked"
   ]
  ],
  "rows": [
   [
    "1",
    2,
    8
   ],
   [
    "2",
    8,
    2
   ]
  ],
  "mark": [
   [
    1,
    1
   ]
  ]
 },
 "rag-emb": {
  "kind": "bars",
  "title": [
   "Cosine với câu hỏi",
   "Cosine with the question"
  ],
  "items": [
   {
    "label": [
     "P: điều khoản",
     "P: clause"
    ],
    "value": 0.8
   },
   {
    "label": [
     "Q: quảng cáo",
     "Q: ad"
    ],
    "value": 0.96
   }
  ]
 },
 "rag-chunk": {
  "kind": "table",
  "title": [
   "Hai cách cắt 8 dòng",
   "Two ways to cut 8 lines"
  ],
  "head": [
   [
    "Cách cắt",
    "Cut"
   ],
   [
    "Số mảnh",
    "Chunks"
   ],
   [
    "Có dòng 1 và 6 cùng mảnh?",
    "Lines 1 and 6 together?"
   ]
  ],
  "rows": [
   [
    "2 dòng / 2 lines",
    4,
    "Không / No"
   ],
   [
    "6 dòng, bước 3 / 6 lines, step 3",
    2,
    "Có / Yes"
   ]
  ],
  "mark": [
   [
    1,
    2
   ]
  ]
 },
 "rag-vec": {
  "kind": "bars",
  "title": [
   "Điểm gần của từng đoạn",
   "Similarity of each passage"
  ],
  "items": [
   {
    "label": [
     "FAQ",
     "FAQ"
    ],
    "value": 0.91
   },
   {
    "label": [
     "Điều khoản",
     "Clause"
    ],
    "value": 0.88
   },
   {
    "label": [
     "Đoạn khác",
     "Other"
    ],
    "value": 0.6
   }
  ]
 },
 "rag-idx": {
  "kind": "table",
  "title": [
   "Câu trả lời sai theo thời điểm xây lại",
   "Wrong answers by rebuild time"
  ],
  "head": [
   [
    "Xây lại lúc",
    "Rebuilt at"
   ],
   [
    "Câu sai",
    "Wrong answers"
   ]
  ],
  "rows": [
   [
    "9:06",
    1
   ],
   [
    "12:00",
    30
   ]
  ],
  "mark": [
   [
    1,
    1
   ]
  ]
 },
 "im-vae": {
  "kind": "bars",
  "title": [
   "Số giá trị: ảnh và latent",
   "Values: image vs latent"
  ],
  "items": [
   {
    "label": [
     "Ảnh",
     "Image"
    ],
    "value": 3145728
   },
   {
    "label": [
     "Latent",
     "Latent"
    ],
    "value": 65536
   }
  ]
 },
 "im-txt": {
  "kind": "bars",
  "title": [
   "ε theo guidance scale",
   "ε by guidance scale"
  ],
  "items": [
   {
    "label": [
     "s=0",
     "s=0"
    ],
    "value": 2
   },
   {
    "label": [
     "s=1",
     "s=1"
    ],
    "value": 5
   },
   {
    "label": [
     "s=7,5",
     "s=7.5"
    ],
    "value": 24.5
   }
  ]
 },
 "lc-parse": {
  "kind": "bars",
  "title": [
   "Tỷ lệ còn lỗi dạng theo số lần thử lại (%)",
   "Remaining form-error rate by retries (%)"
  ],
  "items": [
   {
    "label": [
     "0 lần",
     "0 retries"
    ],
    "value": 8
   },
   {
    "label": [
     "1 lần",
     "1 retry"
    ],
    "value": 0.64
   },
   {
    "label": [
     "2 lần",
     "2 retries"
    ],
    "value": 0.05
   }
  ],
  "unit": "%"
 }
};

export const c6Walks: Record<string, Walk> = Object.fromEntries(
  Object.entries(base).map(([id, w]) => [id, visuals[id] ? { ...w, visual: visuals[id] } : w]),
);
