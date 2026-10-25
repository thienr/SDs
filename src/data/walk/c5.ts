import type { Visual, Walk } from "@/data/walk/pilot";

/**
 * C5 (tháng 9-10, Lotus Spa): Tableau, Excel nâng cao, Power BI, framework, kể chuyện bằng dữ liệu.
 * Số cố định: form tuần GDN 18, Meta 20, TikTok 12; click 450, 500, 600 (tỷ lệ 4, 4, 2 phần trăm); chi 6, 5, 4 triệu; ngưỡng 3 phần trăm; hạn 30/11.
 */
const base: Record<string, Walk> = {
 "tb-why": {
  "vi": {
   "story": "Tháng 9, Thảo mở Tableau và định kéo mọi trường vào cho «có biểu đồ». Chị Lan chỉ hỏi một câu: «Tuần này kênh nào có nhiều form hơn?»",
   "words": [
    [
     "Trường (field)",
     "Một cột dữ liệu bạn kéo vào sheet."
    ],
    [
     "Đơn vị dòng",
     "Mỗi dòng nguồn là một cái gì (ở đây: một kênh trong một tuần)."
    ]
   ],
   "problem": "Tuần này: GDN 18 form, Meta 20, TikTok 12. Viết câu hỏi, chọn trường, chọn hình, rồi đọc đáp án.",
   "steps": [
    [
     "Viết câu hỏi",
     "«Tuần này kênh nào có nhiều form hơn?» Một câu, một so sánh."
    ],
    [
     "Chọn trường",
     "Chỉ cần Kênh và SUM(Form). Bỏ mọi trường khác."
    ],
    [
     "Chọn hình",
     "So ba nhóm: biểu đồ cột."
    ],
    [
     "Đọc đáp án",
     "Meta 20 > GDN 18 > TikTok 12. Meta hơn GDN 2 form, hơn TikTok 8 form."
    ],
    [
     "Cái gì là trang trí",
     "Bản đồ thế giới vẽ ba kênh: ba kênh không phải địa điểm, hình đó không trả lời câu hỏi nào."
    ]
   ],
   "say": "Một cột là đủ. Biểu đồ đẹp mà không có câu hỏi thì không giúp chị Lan chốt ngân sách tuần sau.",
   "check": [
    "Nếu chị Lan hỏi «form của TikTok tăng hay giảm?» thì câu hỏi và hình đổi thế nào?",
    "Đổi thành một câu hỏi về thời gian: dùng đường theo tuần, không dùng cột ba kênh."
   ]
  },
  "en": {
   "story": "In September, Thao opens Tableau and plans to drag every field in “so there is a chart”. Ms. Lan asks just one question: “Which channel got more forms this week?”",
   "words": [
    [
     "Field",
     "A data column you drag onto a sheet."
    ],
    [
     "Row grain",
     "What each source row is (here: one channel in one week)."
    ]
   ],
   "problem": "This week: GDN 18 forms, Meta 20, TikTok 12. Write the question, choose the fields, choose the chart, then read the answer.",
   "steps": [
    [
     "Write the question",
     "“Which channel got more forms this week?” One sentence, one comparison."
    ],
    [
     "Choose fields",
     "Only Channel and SUM(Forms). Drop every other field."
    ],
    [
     "Choose the chart",
     "Comparing three groups: a bar chart."
    ],
    [
     "Read the answer",
     "Meta 20 > GDN 18 > TikTok 12. Meta beats GDN by 2 forms and TikTok by 8."
    ],
    [
     "What is decoration",
     "A world map of three channels: channels are not places, so that picture answers no question."
    ]
   ],
   "say": "One bar chart is enough. A pretty chart with no question does not help Ms. Lan settle next week's budget.",
   "check": [
    "If Ms. Lan asked “are TikTok forms going up or down?”, how do the question and chart change?",
    "It becomes a question over time: use a line by week, not three channel bars."
   ]
  }
 },
 "tb-bar": {
  "vi": {
   "story": "Thảo có hai câu hỏi và định dùng một loại hình cho cả hai. Hình sai sẽ nói điều sai.",
   "words": [
    [
     "Cột",
     "So các nhóm không có thứ tự tự nhiên."
    ],
    [
     "Đường",
     "Nối các điểm theo trục có thứ tự thật, như tuần."
    ]
   ],
   "problem": "Câu 1: form ba kênh trong một tuần (18, 20, 12). Câu 2: tổng form tám tuần (50, 50, 51, 52, 54, 53, 56, 58). Chọn hình và đọc.",
   "steps": [
    [
     "Câu 1",
     "Ba kênh là ba nhóm: cột. Meta cao nhất, TikTok thấp nhất."
    ],
    [
     "Nếu nối ba kênh bằng một đường",
     "Đường đi từ GDN 18 lên Meta 20 rồi xuống TikTok 12, như thể có thứ tự và «xu hướng» giữa các kênh. Không có."
    ],
    [
     "Câu 2",
     "Tám tuần có thứ tự thật: đường. Từ 50 lên 58."
    ],
    [
     "Mức tăng",
     "58 − 50 = 8 form, tức 8 ÷ 50 = 16% trong 7 tuần."
    ],
    [
     "Nếu vẽ tám tuần bằng cột",
     "Vẫn đọc được, nhưng mất cảm giác chuyển động liên tục."
    ]
   ],
   "say": "Cột để so nhóm, đường cho thứ tự thật. Đổi hình của hai câu này cho nhau là đổi nghĩa của chúng.",
   "check": [
    "«Chi nhánh Quận 1, Quận 3, Thủ Đức» nên vẽ bằng cột hay đường?",
    "Cột: ba chi nhánh không có thứ tự tự nhiên."
   ]
  },
  "en": {
   "story": "Thao has two questions and plans to use one chart type for both. The wrong chart says the wrong thing.",
   "words": [
    [
     "Bar",
     "Compares groups with no natural order."
    ],
    [
     "Line",
     "Joins points along a genuinely ordered axis, such as weeks."
    ]
   ],
   "problem": "Question 1: forms of three channels in one week (18, 20, 12). Question 2: total forms over eight weeks (50, 50, 51, 52, 54, 53, 56, 58). Choose the charts and read them.",
   "steps": [
    [
     "Question 1",
     "Three channels are three groups: bars. Meta highest, TikTok lowest."
    ],
    [
     "If you join the three channels with a line",
     "The line goes GDN 18 up to Meta 20 then down to TikTok 12, as if there were order and a “trend” between channels. There is none."
    ],
    [
     "Question 2",
     "Eight weeks have a real order: a line. From 50 up to 58."
    ],
    [
     "The rise",
     "58 − 50 = 8 forms, i.e. 8 ÷ 50 = 16% in 7 weeks."
    ],
    [
     "If you draw eight weeks as bars",
     "Still readable, but you lose the feeling of continuous movement."
    ]
   ],
   "say": "Bars compare groups, lines follow real order. Swapping the charts of these two questions swaps their meaning.",
   "check": [
    "Should District 1, District 3 and Thu Duc branches be drawn as bars or a line?",
    "Bars: three branches have no natural order."
   ]
  }
 },
 "tb-box": {
  "vi": {
   "story": "Chị Lan không chỉ muốn trung bình. Chị hỏi: «TikTok có tuần nào lạ không?» Biểu đồ hộp cho thấy độ rộng và điểm lạ.",
   "words": [
    [
     "Tứ phân vị Q1, Q3",
     "Mốc 25% và 75% của dữ liệu đã sắp."
    ],
    [
     "IQR",
     "Q3 − Q1."
    ],
    [
     "Điểm lạ",
     "Giá trị ngoài [Q1 − 1,5 × IQR, Q3 + 1,5 × IQR]."
    ]
   ],
   "problem": "Form TikTok của 9 tuần, đã sắp: 8, 10, 11, 12, 12, 13, 13, 14, 20. Vẽ hộp và tìm tuần lạ.",
   "steps": [
    [
     "Trung vị",
     "Giá trị thứ 5 trong 9 giá trị: 12."
    ],
    [
     "Q1 và Q3",
     "Q1 = trung vị của 8, 10, 11, 12 = 10,5. Q3 = trung vị của 13, 13, 14, 20 = 13,5."
    ],
    [
     "IQR",
     "13,5 − 10,5 = 3."
    ],
    [
     "Rào",
     "Dưới: 10,5 − 4,5 = 6. Trên: 13,5 + 4,5 = 18."
    ],
    [
     "Điểm lạ",
     "20 > 18: tuần 20 form là điểm lạ. Râu hộp kéo tới 8 và 14."
    ]
   ],
   "say": "Phần giữa của TikTok rất hẹp (10,5 đến 13,5) nên tuần 20 form nổi bật. Đi kiểm tra tuần đó (khuyến mãi? nhập trùng?) trước khi kết luận gì. Và nếu file không có địa điểm thì đừng vẽ bản đồ.",
   "check": [
    "Nếu tuần 20 được sửa thành 14 thì còn điểm lạ không?",
    "Không: 14 nằm trong [6, 18]."
   ]
  },
  "en": {
   "story": "Ms. Lan wants more than the mean. She asks: “Does TikTok have any odd week?” A box plot shows spread and odd points.",
   "words": [
    [
     "Quartiles Q1, Q3",
     "The 25% and 75% marks of sorted data."
    ],
    [
     "IQR",
     "Q3 − Q1."
    ],
    [
     "Outlier",
     "A value outside [Q1 − 1.5 × IQR, Q3 + 1.5 × IQR]."
    ]
   ],
   "problem": "TikTok forms for 9 weeks, sorted: 8, 10, 11, 12, 12, 13, 13, 14, 20. Draw the box and find the odd week.",
   "steps": [
    [
     "Median",
     "The 5th of 9 values: 12."
    ],
    [
     "Q1 and Q3",
     "Q1 = median of 8, 10, 11, 12 = 10.5. Q3 = median of 13, 13, 14, 20 = 13.5."
    ],
    [
     "IQR",
     "13.5 − 10.5 = 3."
    ],
    [
     "Fences",
     "Lower: 10.5 − 4.5 = 6. Upper: 13.5 + 4.5 = 18."
    ],
    [
     "Outlier",
     "20 > 18: the week with 20 forms is an outlier. The whiskers reach 8 and 14."
    ]
   ],
   "say": "TikTok's middle is very narrow (10.5 to 13.5) so the 20-form week stands out. Check that week (promotion? duplicate import?) before concluding anything. And if the file has no places, do not draw a map.",
   "check": [
    "If the 20 were corrected to 14, would there still be an outlier?",
    "No: 14 lies inside [6, 18]."
   ]
  }
 },
 "tb-part": {
  "vi": {
   "story": "Chị Lan hỏi: «Mỗi kênh chiếm bao nhiêu phần form tuần này?» Đây là câu hỏi về các phần của một tổng.",
   "words": [
    [
     "Phần của tổng",
     "Mỗi phần là một tỷ lệ của tổng; cộng lại bằng 100%."
    ],
    [
     "Treemap",
     "Mỗi phần là một ô, diện tích tỷ lệ với giá trị."
    ]
   ],
   "problem": "Tuần này GDN 18, Meta 20, TikTok 12 (tổng 50). Tính phần trăm, góc trên biểu đồ tròn, và nói khi nào dùng cột thay vì tròn.",
   "steps": [
    [
     "Tổng",
     "18 + 20 + 12 = 50."
    ],
    [
     "Phần trăm",
     "GDN 36%, Meta 40%, TikTok 24%. Cộng lại 100%."
    ],
    [
     "Góc biểu đồ tròn",
     "36% × 360° = 129,6°; 40% × 360° = 144°; 24% × 360° = 86,4°. Tổng 360°."
    ],
    [
     "Đọc",
     "Ba phần, tròn đọc được vì ít nhóm và khác nhau rõ."
    ],
    [
     "Khi nào dùng cột",
     "Tám kênh mỗi kênh khoảng 12 form (12,5% mỗi kênh): các lát gần như bằng nhau, mắt khó so. Hai tuần vẽ bằng hai hình tròn cũng khó so."
    ]
   ],
   "say": "Tròn và treemap hợp với ít phần, khác nhau rõ. Khi cần so nhiều nhóm hoặc so giữa hai thời điểm, dùng cột.",
   "check": [
    "Hai phần 70% và 30% thì tròn có đọc được không?",
    "Có: hai lát khác nhau rõ."
   ]
  },
  "en": {
   "story": "Ms. Lan asks: “What share of this week's forms does each channel take?” This is a question about parts of a whole.",
   "words": [
    [
     "Part of a whole",
     "Each part is a proportion of the total; together they make 100%."
    ],
    [
     "Treemap",
     "Each part is a tile whose area is proportional to its value."
    ]
   ],
   "problem": "This week GDN 18, Meta 20, TikTok 12 (total 50). Compute percentages, pie angles, and say when to use bars instead of a pie.",
   "steps": [
    [
     "Total",
     "18 + 20 + 12 = 50."
    ],
    [
     "Percentages",
     "GDN 36%, Meta 40%, TikTok 24%. Sum 100%."
    ],
    [
     "Pie angles",
     "36% × 360° = 129.6°; 40% × 360° = 144°; 24% × 360° = 86.4°. Total 360°."
    ],
    [
     "Read",
     "Three parts; a pie is readable because the groups are few and clearly different."
    ],
    [
     "When to use bars",
     "Eight channels at about 12 forms each (12.5% each): slices are nearly equal and hard to compare by eye. Two weeks drawn as two pies are also hard to compare."
    ]
   ],
   "say": "Pies and treemaps suit few, clearly different parts. When comparing many groups or two moments, use bars.",
   "check": [
    "Two parts of 70% and 30%: is a pie readable?",
    "Yes: the two slices differ clearly."
   ]
  }
 },
 "tb-join": {
  "vi": {
   "story": "Thảo nối bảng hội viên (100 người) với bảng đơn (200 đơn) trong Tableau rồi đếm. Số ra không phải 100.",
   "words": [
    [
     "Phép nối",
     "Ghép hai bảng theo một cột chung."
    ],
    [
     "Nhân dòng",
     "Một dòng của bảng này khớp nhiều dòng của bảng kia nên bị lặp."
    ]
   ],
   "problem": "100 hội viên, mỗi người phí tháng 1 triệu. 200 đơn, trung bình 2 đơn mỗi hội viên. Sau khi nối, COUNT và SUM(phí) ra gì, và đếm đúng thế nào?",
   "steps": [
    [
     "Số dòng sau nối",
     "Mỗi hội viên xuất hiện một lần cho mỗi đơn: 200 dòng."
    ],
    [
     "COUNT dòng",
     "200. Báo cáo «200 hội viên» là sai."
    ],
    [
     "SUM(phí tháng)",
     "200 × 1 triệu = 200 triệu. Thật chỉ là 100 triệu."
    ],
    [
     "Đếm đúng hội viên",
     "COUNT DISTINCT mã hội viên = 100."
    ],
    [
     "Tổng phí đúng",
     "Dùng bảng hội viên riêng, hoặc cố định mức chi tiết (FIXED) theo hội viên: 100 triệu."
    ]
   ],
   "say": "Sau mỗi phép nối, hỏi: một dòng bây giờ là cái gì? Đếm sai đơn vị thì cả đếm lẫn tổng đều phồng gấp đôi.",
   "check": [
    "Nếu một hội viên có 0 đơn và nối trong (inner join) thì sao?",
    "Hội viên đó biến mất khỏi kết quả, nên đếm thiếu."
   ]
  },
  "en": {
   "story": "Thao joins the member table (100 people) with the orders table (200 orders) in Tableau and counts. The number is not 100.",
   "words": [
    [
     "Join",
     "Matching two tables on a shared column."
    ],
    [
     "Row multiplication",
     "One row of this table matches many rows of the other so it is repeated."
    ]
   ],
   "problem": "100 members, each paying a 1 million monthly fee. 200 orders, on average 2 per member. After the join, what do COUNT and SUM(fee) give, and how to count properly?",
   "steps": [
    [
     "Rows after the join",
     "Each member appears once per order: 200 rows."
    ],
    [
     "COUNT of rows",
     "200. Reporting “200 members” is wrong."
    ],
    [
     "SUM(monthly fee)",
     "200 × 1 million = 200 million. The truth is only 100 million."
    ],
    [
     "Counting members correctly",
     "COUNT DISTINCT of member id = 100."
    ],
    [
     "Correct fee total",
     "Use the member table alone, or fix the level of detail (FIXED) per member: 100 million."
    ]
   ],
   "say": "After every join ask: what is a row now? Count the wrong unit and both counts and sums swell to double.",
   "check": [
    "If a member has 0 orders and you use an inner join, what happens?",
    "That member disappears from the result, so the count is short."
   ]
  }
 },
 "tb-calc": {
  "vi": {
   "story": "Chị Lan hỏi «tỷ lệ form trên click của cả tuần». Thảo viết một trường tính toán, nhưng có hai cách viết cho hai con số khác nhau.",
   "words": [
    [
     "Trường tính toán",
     "Một công thức bạn tự viết dựa trên các trường có sẵn."
    ],
    [
     "Trung bình có trọng số",
     "Mỗi nhóm đóng góp theo kích thước của nó."
    ]
   ],
   "problem": "GDN 18 form trên 450 click, Meta 20 trên 500, TikTok 12 trên 600. Tính tỷ lệ bằng hai cách.",
   "steps": [
    [
     "Tỷ lệ từng kênh",
     "GDN 18 ÷ 450 = 4%. Meta 20 ÷ 500 = 4%. TikTok 12 ÷ 600 = 2%."
    ],
    [
     "Cách 1: trung bình các tỷ lệ",
     "(4 + 4 + 2) ÷ 3 = 3,33%."
    ],
    [
     "Cách 2: SUM(form) ÷ SUM(click)",
     "(18 + 20 + 12) ÷ (450 + 500 + 600) = 50 ÷ 1550 = 3,23%."
    ],
    [
     "Vì sao lệch",
     "Cách 1 coi ba kênh nặng như nhau. Cách 2 để TikTok (600 click, nhiều nhất) nặng hơn."
    ],
    [
     "Chọn",
     "Câu hỏi là «tỷ lệ của cả tuần»: cách 2."
    ]
   ],
   "say": "Trường tính toán chỉ là công thức, không phải phép đo mới. Tỷ lệ tổng là tổng chia tổng, không phải trung bình của các tỷ lệ.",
   "check": [
    "Nếu muốn «tỷ lệ trung bình mỗi kênh» thì chọn cách nào?",
    "Cách 1, vì câu hỏi coi mỗi kênh ngang nhau."
   ]
  },
  "en": {
   "story": "Ms. Lan asks for “the form-to-click rate of the whole week”. Thao writes a calculated field, but there are two ways to write it that give two different numbers.",
   "words": [
    [
     "Calculated field",
     "A formula you write from the available fields."
    ],
    [
     "Weighted average",
     "Each group contributes by its size."
    ]
   ],
   "problem": "GDN 18 forms from 450 clicks, Meta 20 from 500, TikTok 12 from 600. Compute the rate two ways.",
   "steps": [
    [
     "Each channel's rate",
     "GDN 18 ÷ 450 = 4%. Meta 20 ÷ 500 = 4%. TikTok 12 ÷ 600 = 2%."
    ],
    [
     "Way 1: mean of the rates",
     "(4 + 4 + 2) ÷ 3 = 3.33%."
    ],
    [
     "Way 2: SUM(forms) ÷ SUM(clicks)",
     "(18 + 20 + 12) ÷ (450 + 500 + 600) = 50 ÷ 1,550 = 3.23%."
    ],
    [
     "Why they differ",
     "Way 1 treats the three channels as equal weight. Way 2 lets TikTok (600 clicks, the most) weigh more."
    ],
    [
     "Choose",
     "The question is “the rate of the whole week”: way 2."
    ]
   ],
   "say": "A calculated field is just a formula, not a new measurement. An overall rate is total divided by total, not the mean of the rates.",
   "check": [
    "If you wanted “the average rate per channel”, which way?",
    "Way 1, since the question treats each channel equally."
   ]
  }
 },
 "tb-dual": {
  "vi": {
   "story": "Thảo muốn đưa tất cả lên một trang với tám bộ lọc. Chị Lan chỉ cần chốt một việc: có tăng ngân sách TikTok không?",
   "words": [
    [
     "Trục kép",
     "Hai thước đo khác đơn vị chung một hình, mỗi cái một trục."
    ]
   ],
   "problem": "Chi mỗi tuần: GDN 6 triệu, Meta 5, TikTok 4. Tỷ lệ form/click: 4%, 4%, 2%. Dựng trang cho quyết định, gồm chi phí mỗi form.",
   "steps": [
    [
     "Quyết định",
     "Tăng ngân sách TikTok hay không."
    ],
    [
     "Hai số cần",
     "Mức chi (triệu) và tỷ lệ form/click (%). Hai đơn vị khác nhau nên hai trục, mỗi trục ghi đơn vị."
    ],
    [
     "Chi phí mỗi form",
     "GDN 6 ÷ 18 = 0,333 triệu. Meta 5 ÷ 20 = 0,25 triệu. TikTok 4 ÷ 12 = 0,333 triệu."
    ],
    [
     "Đọc",
     "Meta rẻ nhất mỗi form (250 nghìn). TikTok không rẻ hơn GDN và tỷ lệ chỉ 2%."
    ],
    [
     "Phần bỏ đi",
     "Tám bộ lọc biến trang thành màn hình tìm kiếm. Giữ lại một bộ lọc tuần."
    ]
   ],
   "say": "Một trang một quyết định: chi, tỷ lệ, chi phí mỗi form. Trục kép phải ghi hai đơn vị, nếu không người xem tưởng hai cột cùng thang đo.",
   "check": [
    "Vì sao cột chi (6, 5, 4) và cột tỷ lệ (4, 4, 2) không nên cùng một trục?",
    "Vì khác đơn vị (triệu và %); số gần nhau trên trục chung sẽ gây hiểu nhầm là so sánh được."
   ]
  },
  "en": {
   "story": "Thao wants everything on one page with eight filters. Ms. Lan needs to settle one thing: should the TikTok budget go up?",
   "words": [
    [
     "Dual axis",
     "Two measures of different units in one chart, each with its own axis."
    ]
   ],
   "problem": "Weekly spend: GDN 6 million, Meta 5, TikTok 4. Form/click rates: 4%, 4%, 2%. Build the page for the decision, including cost per form.",
   "steps": [
    [
     "Decision",
     "Whether to raise the TikTok budget."
    ],
    [
     "Two numbers needed",
     "Spend (million) and form/click rate (%). Different units, so two axes, each labelled with its unit."
    ],
    [
     "Cost per form",
     "GDN 6 ÷ 18 = 0.333 million. Meta 5 ÷ 20 = 0.25 million. TikTok 4 ÷ 12 = 0.333 million."
    ],
    [
     "Read",
     "Meta is cheapest per form (250 thousand). TikTok is no cheaper than GDN and its rate is only 2%."
    ],
    [
     "What to drop",
     "Eight filters turn the page into a search screen. Keep one week filter."
    ]
   ],
   "say": "One page, one decision: spend, rate, cost per form. A dual axis must name both units, otherwise viewers think two bars share a scale.",
   "check": [
    "Why should spend (6, 5, 4) and rate (4, 4, 2) not share an axis?",
    "They have different units (million and %); numbers close together on a shared axis would suggest they are comparable."
   ]
  }
 },
 "xa-text": {
  "vi": {
   "story": "Thảo xuất mã chiến dịch từ hệ thống, ví dụ « GDN-06 » (có dấu cách thừa). Chị Lan muốn tách kênh và mức chi (triệu).",
   "words": [
    [
     "TRIM",
     "Bỏ dấu cách thừa ở đầu, cuối và giữa."
    ],
    [
     "LEFT/RIGHT",
     "Lấy vài ký tự từ trái hoặc phải."
    ],
    [
     "VALUE",
     "Đổi chữ dạng số thành số."
    ]
   ],
   "problem": "Ô A2 chứa « GDN-06 ». Tách kênh và mức chi, và nói vì sao cộng cột mã ra 0.",
   "steps": [
    [
     "TRIM",
     "TRIM(A2) = «GDN-06» (6 ký tự)."
    ],
    [
     "Lấy kênh",
     "LEFT(TRIM(A2), 3) = «GDN» (chữ)."
    ],
    [
     "Lấy mức chi, bước 1",
     "RIGHT(TRIM(A2), 2) = «06». Vẫn là chữ."
    ],
    [
     "Bước 2",
     "VALUE(«06») = 6 (số, triệu)."
    ],
    [
     "Bẫy",
     "SUM trên cột mã hoặc cột «06» dạng chữ cho 0 vì SUM bỏ qua chữ."
    ]
   ],
   "say": "Hàm chuỗi trả về chữ. Chỉ khi bạn tách rồi VALUE thì mới có số để cộng. Cột mã nên là mã, không nên đem cộng.",
   "check": [
    "LEN(« GDN-06 ») là bao nhiêu, và LEN(TRIM(...))?",
    "8 (kể cả hai dấu cách) và 6."
   ]
  },
  "en": {
   "story": "Thao exports campaign codes from the system, for example “ GDN-06 ” (with extra spaces). Ms. Lan wants the channel and the spend (million) separated.",
   "words": [
    [
     "TRIM",
     "Removes extra spaces at the start, end and middle."
    ],
    [
     "LEFT/RIGHT",
     "Take a few characters from the left or right."
    ],
    [
     "VALUE",
     "Turns number-looking text into a number."
    ]
   ],
   "problem": "Cell A2 holds “ GDN-06 ”. Split out channel and spend, and say why summing the code column gives 0.",
   "steps": [
    [
     "TRIM",
     "TRIM(A2) = “GDN-06” (6 characters)."
    ],
    [
     "Get the channel",
     "LEFT(TRIM(A2), 3) = “GDN” (text)."
    ],
    [
     "Get the spend, step 1",
     "RIGHT(TRIM(A2), 2) = “06”. Still text."
    ],
    [
     "Step 2",
     "VALUE(“06”) = 6 (a number, million)."
    ],
    [
     "The trap",
     "SUM on the code column or the text “06” column gives 0 because SUM ignores text."
    ]
   ],
   "say": "String functions return text. Only after splitting and VALUE do you have a number to add. A code column should stay a code, not be summed.",
   "check": [
    "What are LEN(“ GDN-06 ”) and LEN(TRIM(...))?",
    "8 (counting the two spaces) and 6."
   ]
  }
 },
 "xa-count": {
  "vi": {
   "story": "Bảng 100 hội viên có cột «số buổi» với 90 ô có số và 10 ô trống. Báo cáo «100 hội viên đã đi» là sai.",
   "words": [
    [
     "COUNT",
     "Đếm ô chứa số."
    ],
    [
     "COUNTA",
     "Đếm ô không rỗng (cả chữ)."
    ],
    [
     "COUNTBLANK",
     "Đếm ô trống."
    ]
   ],
   "problem": "Cột Tên có 100 ô chữ. Cột Số buổi có 90 ô số, 10 ô trống, tổng 450. Tính các phép đếm và số buổi trung bình.",
   "steps": [
    [
     "COUNTA cột Tên",
     "100."
    ],
    [
     "COUNT cột Số buổi",
     "90."
    ],
    [
     "COUNTBLANK cột Số buổi",
     "10. Kiểm tra: 90 + 10 = 100."
    ],
    [
     "Trung bình đúng",
     "450 ÷ 90 = 5 buổi mỗi người đã đi."
    ],
    [
     "Trung bình sai",
     "450 ÷ 100 = 4,5, vì chia cho cả người chưa đi."
    ]
   ],
   "say": "Chọn hàm đếm theo câu hỏi: «bao nhiêu người có số» là COUNT; «bao nhiêu dòng» là COUNTA. Ô trống có nghĩa gì (chưa đi hay quên nhập) cần hỏi người nhập.",
   "check": [
    "Nếu 10 ô trống thực ra là 0 buổi thì trung bình bao nhiêu?",
    "450 ÷ 100 = 4,5."
   ]
  },
  "en": {
   "story": "A table of 100 members has a “sessions” column with 90 numeric cells and 10 blank. Reporting “100 members attended” is wrong.",
   "words": [
    [
     "COUNT",
     "Counts cells containing numbers."
    ],
    [
     "COUNTA",
     "Counts non-empty cells (text too)."
    ],
    [
     "COUNTBLANK",
     "Counts blank cells."
    ]
   ],
   "problem": "The Name column has 100 text cells. The Sessions column has 90 numeric cells, 10 blank, total 450. Compute the counts and mean sessions.",
   "steps": [
    [
     "COUNTA of Name",
     "100."
    ],
    [
     "COUNT of Sessions",
     "90."
    ],
    [
     "COUNTBLANK of Sessions",
     "10. Check: 90 + 10 = 100."
    ],
    [
     "Correct mean",
     "450 ÷ 90 = 5 sessions per person who attended."
    ],
    [
     "Wrong mean",
     "450 ÷ 100 = 4.5, because it divides by those who did not attend too."
    ]
   ],
   "say": "Choose the counting function by the question: “how many people have a number” is COUNT; “how many rows” is COUNTA. What a blank means (did not attend or forgot to enter) must be asked of whoever entered it.",
   "check": [
    "If the 10 blanks are really 0 sessions, what is the mean?",
    "450 ÷ 100 = 4.5."
   ]
  }
 },
 "xa-match": {
  "vi": {
   "story": "Bảng nhỏ: cột A là tên kênh, cột B là form. Chị Lan hỏi «kênh nào có 20 form?». Câu tìm đi từ cột B ra cột A bên trái, nơi VLOOKUP bó tay.",
   "words": [
    [
     "MATCH(giá trị, vùng, 0)",
     "Tìm vị trí của giá trị khớp đúng trong vùng."
    ],
    [
     "INDEX(vùng, k)",
     "Lấy ô thứ k trong vùng."
    ]
   ],
   "problem": "A2:A4 = GDN, Meta, TikTok và B2:B4 = 18, 20, 12. Tìm kênh có 20 form, rồi 15 form, rồi thử match_type = 1.",
   "steps": [
    [
     "MATCH(20, B2:B4, 0)",
     "Vị trí 2."
    ],
    [
     "INDEX(A2:A4, 2)",
     "«Meta». Gộp: INDEX(A2:A4, MATCH(20, B2:B4, 0)) = Meta."
    ],
    [
     "VLOOKUP",
     "VLOOKUP chỉ lấy kết quả ở bên phải cột tìm. Tra «TikTok» ra form được (VLOOKUP(\"TikTok\", A2:B4, 2, FALSE) = 12), nhưng tra form ra tên kênh thì kết quả nằm bên trái nên không làm được."
    ],
    [
     "Không thấy",
     "MATCH(15, B2:B4, 0) = #N/A, cùng nghĩa với VLOOKUP khi dùng FALSE."
    ],
    [
     "match_type = 1",
     "Chỉ đúng khi cột đã sắp tăng dần. Cột 18, 20, 12 chưa sắp thì kết quả không đáng tin."
    ]
   ],
   "say": "INDEX/MATCH nhìn được cả hai phía. Dùng match_type 0 cho tra cứu đúng; đừng để 1 khi cột chưa sắp xếp.",
   "check": [
    "Muốn tra «TikTok ra bao nhiêu form» bằng INDEX/MATCH thì viết gì?",
    "INDEX(B2:B4, MATCH(\"TikTok\", A2:A4, 0)) = 12."
   ]
  },
  "en": {
   "story": "A small table: column A holds channel names, column B forms. Ms. Lan asks “which channel got 20 forms?”. The search goes from column B to column A on its left, where VLOOKUP gives up.",
   "words": [
    [
     "MATCH(value, range, 0)",
     "Finds the position of an exact match in the range."
    ],
    [
     "INDEX(range, k)",
     "Returns the k-th cell of the range."
    ]
   ],
   "problem": "A2:A4 = GDN, Meta, TikTok and B2:B4 = 18, 20, 12. Find the channel with 20 forms, then 15 forms, then try match_type = 1.",
   "steps": [
    [
     "MATCH(20, B2:B4, 0)",
     "Position 2."
    ],
    [
     "INDEX(A2:A4, 2)",
     "“Meta”. Combined: INDEX(A2:A4, MATCH(20, B2:B4, 0)) = Meta."
    ],
    [
     "VLOOKUP",
     "VLOOKUP only returns from the right of the lookup column. Looking up “TikTok” to get forms works (VLOOKUP(\"TikTok\", A2:B4, 2, FALSE) = 12), but looking up forms to get the channel name puts the result on the left, which it cannot do."
    ],
    [
     "Not found",
     "MATCH(15, B2:B4, 0) = #N/A, the same as VLOOKUP with FALSE."
    ],
    [
     "match_type = 1",
     "Only valid when the column is sorted ascending. The column 18, 20, 12 is unsorted so the result is untrustworthy."
    ]
   ],
   "say": "INDEX/MATCH sees both directions. Use match_type 0 for exact lookup; do not leave 1 when the column is not sorted.",
   "check": [
    "To look up “how many forms did TikTok get” with INDEX/MATCH, what do you write?",
    "INDEX(B2:B4, MATCH(\"TikTok\", A2:A4, 0)) = 12."
   ]
  }
 },
 "xa-what": {
  "vi": {
   "story": "Chị Lan hỏi: «Nếu bán 220 gói và giá 650 nghìn thì lãi bao nhiêu?» Bạn lập bảng hai chiều đổi số bán và giá.",
   "words": [
    [
     "Bảng dữ liệu hai chiều",
     "Một bảng tính lại cùng một công thức với nhiều cặp đầu vào."
    ],
    [
     "Công thức lãi",
     "Số bán × giá − chi."
    ]
   ],
   "problem": "Chi cố định 100 triệu. Số bán 180, 200, 220 gói; giá 0,55; 0,60; 0,65 triệu. Lập bảng lãi (triệu).",
   "steps": [
    [
     "Công thức",
     "lãi = bán × giá − 100."
    ],
    [
     "Hàng 180 gói",
     "180 × 0,55 − 100 = −1; 180 × 0,60 − 100 = 8; 180 × 0,65 − 100 = 17."
    ],
    [
     "Hàng 200 gói",
     "10; 20; 30."
    ],
    [
     "Hàng 220 gói",
     "21; 32; 43."
    ],
    [
     "Đọc",
     "Cặp 220 gói và 0,65 triệu cho lãi 43 triệu. Cặp 180 và 0,55 lỗ 1 triệu."
    ]
   ],
   "say": "Mỗi ô là một lần tính lại công thức với đầu vào giả định, không phải một tuần đã xảy ra. Bảng chỉ đúng nếu công thức đúng, ví dụ chi cố định 100 triệu có thật cố định khi bán nhiều hơn không.",
   "check": [
    "Hòa vốn ở giá 0,60 cần bán bao nhiêu gói?",
    "100 ÷ 0,60 = 166,7, tức 167 gói."
   ]
  },
  "en": {
   "story": "Ms. Lan asks: “If we sell 220 packages at a price of 650 thousand, what is the profit?” You build a two-way table varying sales and price.",
   "words": [
    [
     "Two-variable data table",
     "A table recalculating one formula for many pairs of inputs."
    ],
    [
     "Profit formula",
     "Sales × price − cost."
    ]
   ],
   "problem": "Fixed cost 100 million. Sales 180, 200, 220 packages; price 0.55; 0.60; 0.65 million. Build the profit table (million).",
   "steps": [
    [
     "Formula",
     "profit = sales × price − 100."
    ],
    [
     "Row 180 packages",
     "180 × 0.55 − 100 = −1; 180 × 0.60 − 100 = 8; 180 × 0.65 − 100 = 17."
    ],
    [
     "Row 200 packages",
     "10; 20; 30."
    ],
    [
     "Row 220 packages",
     "21; 32; 43."
    ],
    [
     "Read",
     "The pair 220 packages and 0.65 million gives a profit of 43 million. The pair 180 and 0.55 loses 1 million."
    ]
   ],
   "say": "Each cell is a recalculation of the formula with assumed inputs, not a week that happened. The table is only right if the formula is right, for example whether the fixed cost of 100 million is really fixed when selling more.",
   "check": [
    "At price 0.60, how many packages break even?",
    "100 ÷ 0.60 = 166.7, i.e. 167 packages."
   ]
  }
 },
 "xa-macro": {
  "vi": {
   "story": "Mỗi sáng Thảo dán ba số form (18, 20, 12) vào bảng, cộng tổng, tô màu. Việc này lặp lại, nên đem ghi thành macro.",
   "words": [
    [
     "Macro",
     "Chuỗi thao tác được ghi lại rồi chạy lại."
    ]
   ],
   "problem": "Làm tay mất 90 giây mỗi sáng, macro mất 2 giây. 20 ngày làm việc mỗi tháng. Tính thời gian tiết kiệm, rồi nêu giới hạn của macro.",
   "steps": [
    [
     "Tay mỗi tháng",
     "90 giây × 20 = 1.800 giây = 30 phút."
    ],
    [
     "Macro mỗi tháng",
     "2 × 20 = 40 giây."
    ],
    [
     "Tiết kiệm",
     "1.800 − 40 = 1.760 giây, gần 29 phút."
    ],
    [
     "Giới hạn 1",
     "Macro dán vào vùng cố định B2:B4. Tuần có kênh thứ tư, dòng thứ tư không được dán."
    ],
    [
     "Giới hạn 2",
     "Macro không có thao tác nào chứa câu hỏi «có tăng ngân sách TikTok không»: tỷ lệ 2% so ngưỡng 3% vẫn do người nhìn."
    ]
   ],
   "say": "Macro nhân bản thao tác, không đưa ra quyết định. Dùng nó cho việc đã rõ từng bước, và kiểm lại khi hình dạng dữ liệu đổi.",
   "check": [
    "Nếu bảng nguồn thêm một cột giữa chừng thì macro cũ chạy ra sao?",
    "Có thể dán sai cột mà không báo lỗi, nên cần kiểm lại macro."
   ]
  },
  "en": {
   "story": "Every morning Thao pastes three form numbers (18, 20, 12) into a table, sums, and colours it. This repeats, so record it as a macro.",
   "words": [
    [
     "Macro",
     "A recorded sequence of actions you can replay."
    ]
   ],
   "problem": "By hand it takes 90 seconds each morning, by macro 2 seconds. 20 working days a month. Compute the time saved, then state the macro's limits.",
   "steps": [
    [
     "By hand per month",
     "90 seconds × 20 = 1,800 seconds = 30 minutes."
    ],
    [
     "By macro per month",
     "2 × 20 = 40 seconds."
    ],
    [
     "Saved",
     "1,800 − 40 = 1,760 seconds, nearly 29 minutes."
    ],
    [
     "Limit 1",
     "The macro pastes into the fixed range B2:B4. In a week with a fourth channel, the fourth row is not pasted."
    ],
    [
     "Limit 2",
     "No macro action contains the question “should we raise the TikTok budget”: the 2% rate against the 3% threshold is still for a person to look at."
    ]
   ],
   "say": "A macro replicates actions, it does not decide. Use it for steps that are already clear, and recheck when the shape of the data changes.",
   "check": [
    "If the source table gains a column in the middle, what does the old macro do?",
    "It may paste into the wrong column without an error, so recheck the macro."
   ]
  }
 },
 "pb-model": {
  "vi": {
   "story": "Thảo kéo thẻ «Count of orders» vào trang Power BI và đặt tên «Số khách». Số hiện 200.",
   "words": [
    [
     "Mô hình",
     "Các bảng và quan hệ giữa chúng."
    ],
    [
     "Quan hệ một-nhiều",
     "Một dòng ở bảng khách khớp nhiều dòng ở bảng đơn."
    ]
   ],
   "problem": "Bảng Khách có 100 dòng, bảng Đơn có 200 dòng, quan hệ qua mã khách. Mỗi khách có ít nhất một đơn. Thẻ nào ra số nào?",
   "steps": [
    [
     "Count of orders",
     "200 (đếm dòng bảng Đơn)."
    ],
    [
     "Distinct count của mã khách trong Đơn",
     "100: mỗi khách xuất hiện ít nhất một lần."
    ],
    [
     "Count của bảng Khách",
     "100."
    ],
    [
     "Nhãn đúng",
     "«Số đơn» = 200; «Số khách» = 100."
    ],
    [
     "Lọc",
     "Lọc chi nhánh = Quận 1 trên bảng Khách sẽ chảy xuống bảng Đơn qua quan hệ, nên số đơn cũng thu theo."
    ]
   ],
   "say": "Biểu đồ chỉ là một câu hỏi đặt lên mô hình. Số 200 là đếm dòng của bảng Đơn nên đặt tên nó «khách» là sai đơn vị.",
   "check": [
    "Trung bình mỗi khách có bao nhiêu đơn?",
    "200 ÷ 100 = 2."
   ]
  },
  "en": {
   "story": "Thao drags the “Count of orders” card onto the Power BI page and names it “Customers”. It shows 200.",
   "words": [
    [
     "Model",
     "The tables and the relationships between them."
    ],
    [
     "One-to-many relationship",
     "One row in the customer table matches many rows in the orders table."
    ]
   ],
   "problem": "The Customers table has 100 rows, the Orders table 200 rows, related by customer id. Every customer has at least one order. Which card gives which number?",
   "steps": [
    [
     "Count of orders",
     "200 (counting rows of the Orders table)."
    ],
    [
     "Distinct count of customer id in Orders",
     "100: each customer appears at least once."
    ],
    [
     "Count of the Customers table",
     "100."
    ],
    [
     "Correct labels",
     "“Orders” = 200; “Customers” = 100."
    ],
    [
     "Filtering",
     "Filtering branch = District 1 on the Customers table flows down to Orders through the relationship, so orders shrink as well."
    ]
   ],
   "say": "A chart is just a question placed on the model. The number 200 counts rows of the Orders table so naming it “customers” is the wrong unit.",
   "check": [
    "On average how many orders does each customer have?",
    "200 ÷ 100 = 2."
   ]
  }
 },
 "pb-pq": {
  "vi": {
   "story": "Thảo thêm bước lọc «chỉ TikTok» trong Power Query. Tuần sau nguồn có thêm kênh Zalo và báo cáo vẫn chỉ hiện TikTok.",
   "words": [
    [
     "Power Query",
     "Chuỗi bước biến đổi dữ liệu, viết thành công thức."
    ],
    [
     "Làm mới",
     "Chạy lại toàn bộ chuỗi bước trên nguồn mới."
    ]
   ],
   "problem": "Nguồn có 400 dòng (4 kênh × 100 tuần-dòng). Các bước: lọc TikTok, bỏ dòng form trống (4 dòng). Tuần sau nguồn thêm 4 dòng (mỗi kênh một dòng). Số dòng qua từng bước, trước và sau làm mới?",
   "steps": [
    [
     "Nguồn",
     "400 dòng."
    ],
    [
     "Lọc kênh = TikTok",
     "100 dòng."
    ],
    [
     "Bỏ form trống",
     "100 − 4 = 96 dòng."
    ],
    [
     "Tuần sau, làm mới",
     "Nguồn 404. Lọc TikTok: 101. Bỏ trống: 97 (nếu dòng mới có form)."
    ],
    [
     "Zalo ở đâu",
     "Dòng Zalo bị bước lọc loại, không phải nguồn hết Zalo."
    ]
   ],
   "say": "Power Query là một công thức; làm mới chỉ chạy lại công thức đó. Muốn thấy Zalo phải sửa bước lọc, không phải nghi ngờ nguồn.",
   "check": [
    "Bước nào nên kiểm tra đầu tiên khi báo cáo thiếu một kênh?",
    "Các bước lọc trong query."
   ]
  },
  "en": {
   "story": "Thao adds a “TikTok only” filter step in Power Query. Next week the source gains a Zalo channel and the report still shows only TikTok.",
   "words": [
    [
     "Power Query",
     "A chain of data-transform steps written as a formula."
    ],
    [
     "Refresh",
     "Rerun the whole chain of steps on the new source."
    ]
   ],
   "problem": "The source has 400 rows (4 channels × 100 week-rows). Steps: filter TikTok, drop blank-form rows (4 rows). Next week the source gains 4 rows (one per channel). Row counts through each step, before and after refresh?",
   "steps": [
    [
     "Source",
     "400 rows."
    ],
    [
     "Filter channel = TikTok",
     "100 rows."
    ],
    [
     "Drop blank forms",
     "100 − 4 = 96 rows."
    ],
    [
     "Next week, refresh",
     "Source 404. Filter TikTok: 101. Drop blanks: 97 (if the new row has a form)."
    ],
    [
     "Where is Zalo",
     "Zalo rows are removed by the filter step, not because the source has no Zalo."
    ]
   ],
   "say": "Power Query is a formula; refresh only reruns that formula. To see Zalo you must edit the filter step, not doubt the source.",
   "check": [
    "Which step to check first when a report is missing a channel?",
    "The filter steps in the query."
   ]
  }
 },
 "pb-grain": {
  "vi": {
   "story": "Bảng chi tiết bán hàng của Lotus Spa có 200 dòng. Thẻ số nào cũng «đúng», nhưng mỗi thẻ đếm một thứ khác.",
   "words": [
    [
     "Mức chi tiết (grain)",
     "Một dòng của bảng là cái gì."
    ]
   ],
   "problem": "200 dòng hàng thuộc 80 đơn của 50 khách. Tính các con số đếm và trung bình.",
   "steps": [
    [
     "Đếm dòng",
     "200 dòng hàng."
    ],
    [
     "Đếm đơn khác nhau",
     "80 đơn."
    ],
    [
     "Đếm khách khác nhau",
     "50 khách."
    ],
    [
     "Dòng mỗi đơn",
     "200 ÷ 80 = 2,5."
    ],
    [
     "Đơn mỗi khách",
     "80 ÷ 50 = 1,6."
    ]
   ],
   "say": "Cả ba số 200, 80, 50 đều thật. Thẻ phải ghi rõ nó đếm dòng hàng, đơn hay khách, và «trung bình» phải nói chia cho cái gì.",
   "check": [
    "Doanh thu trung bình mỗi khách tính thế nào nếu tổng là 100 triệu?",
    "100 ÷ 50 = 2 triệu mỗi khách (không chia cho 200 hay 80)."
   ]
  },
  "en": {
   "story": "The Lotus Spa sales detail table has 200 rows. Every number card is “right”, but each counts a different thing.",
   "words": [
    [
     "Grain",
     "What one row of the table is."
    ]
   ],
   "problem": "200 line rows belong to 80 orders of 50 customers. Compute the counts and averages.",
   "steps": [
    [
     "Count rows",
     "200 line rows."
    ],
    [
     "Distinct orders",
     "80 orders."
    ],
    [
     "Distinct customers",
     "50 customers."
    ],
    [
     "Lines per order",
     "200 ÷ 80 = 2.5."
    ],
    [
     "Orders per customer",
     "80 ÷ 50 = 1.6."
    ]
   ],
   "say": "All of 200, 80 and 50 are real. A card must say whether it counts line rows, orders or customers, and an “average” must say what it divides by.",
   "check": [
    "How is average revenue per customer computed if the total is 100 million?",
    "100 ÷ 50 = 2 million per customer (not divided by 200 or 80)."
   ]
  }
 },
 "pb-dax": {
  "vi": {
   "story": "Thảo có một cột tính «tỷ lệ của dòng» và một measure. Khi lọc, hai thứ cư xử khác nhau.",
   "words": [
    [
     "Cột tính",
     "Giá trị tính cho từng dòng lúc làm mới và được lưu."
    ],
    [
     "Measure",
     "Công thức tính lại theo bộ lọc đang bật."
    ]
   ],
   "problem": "Ba dòng: GDN 18/450, Meta 20/500, TikTok 12/600. Cột «tỷ lệ dòng» = form ÷ click. Measure = DIVIDE(SUM(form), SUM(click)). So khi không lọc và khi lọc TikTok.",
   "steps": [
    [
     "Cột tính lưu",
     "4%; 4%; 2%."
    ],
    [
     "Không lọc, trung bình cột",
     "(4 + 4 + 2) ÷ 3 = 3,33%."
    ],
    [
     "Không lọc, measure",
     "50 ÷ 1550 = 3,23%."
    ],
    [
     "Lọc TikTok, measure",
     "12 ÷ 600 = 2%. Tự đổi theo lát cắt."
    ],
    [
     "Cột sau khi lọc",
     "Vẫn là 2% đã lưu cho dòng đó, và trung bình các tỷ lệ không có trọng số."
    ]
   ],
   "say": "Measure đúng cho tỷ lệ tổng vì tính trên tổng trong bộ lọc. Cột tính dễ đưa vào lỗi «trung bình của các tỷ lệ».",
   "check": [
    "Khi lọc GDN thì measure ra bao nhiêu?",
    "18 ÷ 450 = 4%."
   ]
  },
  "en": {
   "story": "Thao has a calculated column “row rate” and a measure. When filtering, the two behave differently.",
   "words": [
    [
     "Calculated column",
     "A value computed per row at refresh time and stored."
    ],
    [
     "Measure",
     "A formula recomputed under the active filters."
    ]
   ],
   "problem": "Three rows: GDN 18/450, Meta 20/500, TikTok 12/600. Column “row rate” = forms ÷ clicks. Measure = DIVIDE(SUM(forms), SUM(clicks)). Compare unfiltered and filtered to TikTok.",
   "steps": [
    [
     "Stored column",
     "4%; 4%; 2%."
    ],
    [
     "Unfiltered, average of the column",
     "(4 + 4 + 2) ÷ 3 = 3.33%."
    ],
    [
     "Unfiltered, measure",
     "50 ÷ 1,550 = 3.23%."
    ],
    [
     "Filter TikTok, measure",
     "12 ÷ 600 = 2%. Changes with the slice."
    ],
    [
     "Column after filtering",
     "Still the 2% stored for that row, and the average of rates is unweighted."
    ]
   ],
   "say": "The measure is right for an overall rate because it computes on the totals within the filter. A calculated column easily brings in the “mean of rates” error.",
   "check": [
    "When filtered to GDN what does the measure give?",
    "18 ÷ 450 = 4%."
   ]
  }
 },
 "pb-page": {
  "vi": {
   "story": "Thảo có một trang với 12 hình. Chị Lan chỉ cần quyết định ngân sách tuần sau. Bạn đếm cái gì thuộc trang đó.",
   "words": [
    [
     "Một trang một quyết định",
     "Mỗi hình trên trang phải giúp trả lời đúng quyết định đó."
    ]
   ],
   "problem": "Quyết định: ngân sách tuần sau. Trang cũ 12 hình + 5 bộ lọc. Giữ: thẻ tỷ lệ form/click, cột chi phí mỗi form, bộ lọc tuần. Tính số hình bỏ và chi phí mỗi form.",
   "steps": [
    [
     "Giữ lại",
     "3 thành phần: thẻ tỷ lệ, cột chi phí mỗi form, bộ lọc tuần."
    ],
    [
     "Bỏ",
     "17 − 3 = 14 thành phần (cả hình và bộ lọc): bản đồ, bộ lọc theo màu logo, ..."
    ],
    [
     "Chi phí mỗi form",
     "GDN 6 ÷ 18 = 0,333; Meta 5 ÷ 20 = 0,25; TikTok 4 ÷ 12 = 0,333 (triệu)."
    ],
    [
     "Đọc",
     "Meta rẻ nhất; TikTok ngang GDN và có tỷ lệ 2%."
    ],
    [
     "Chuyển phần bỏ đi",
     "Sang trang khác, để người cần xem tìm được."
    ]
   ],
   "say": "Trang gọn cho phép chị Lan chốt trong năm phút. Phần chi tiết không bị xóa mà chuyển sang trang riêng.",
   "check": [
    "Bộ lọc theo màu logo có giúp quyết định ngân sách không?",
    "Không: màu logo không ảnh hưởng đến form hay chi phí."
   ]
  },
  "en": {
   "story": "Thao has a page with 12 visuals. Ms. Lan only needs next week's budget decision. You count what belongs on that page.",
   "words": [
    [
     "One page one decision",
     "Every visual on the page must help answer that decision."
    ]
   ],
   "problem": "Decision: next week's budget. The old page has 12 visuals + 5 filters. Keep: the form/click rate card, a cost-per-form bar, a week filter. Compute how many to drop and the cost per form.",
   "steps": [
    [
     "Keep",
     "3 components: rate card, cost-per-form bar, week filter."
    ],
    [
     "Drop",
     "17 − 3 = 14 components (visuals and filters): map, logo-colour filter, ..."
    ],
    [
     "Cost per form",
     "GDN 6 ÷ 18 = 0.333; Meta 5 ÷ 20 = 0.25; TikTok 4 ÷ 12 = 0.333 (million)."
    ],
    [
     "Read",
     "Meta is cheapest; TikTok matches GDN and has a rate of 2%."
    ],
    [
     "Move what is dropped",
     "To another page, so whoever needs it can find it."
    ]
   ],
   "say": "A lean page lets Ms. Lan settle in five minutes. The detail is not deleted but moved to its own page.",
   "check": [
    "Does a logo-colour filter help the budget decision?",
    "No: logo colour affects neither forms nor cost."
   ]
  }
 },
 "pb-rls": {
  "vi": {
   "story": "Ba trưởng kênh cùng mở một báo cáo, mỗi người chỉ nên thấy kênh của mình. Slicer không làm được vì người xem tự đổi được.",
   "words": [
    [
     "RLS",
     "Luật hàng: mỗi role có một bộ lọc áp lên dữ liệu, người xem không gỡ được."
    ],
    [
     "Role",
     "Nhóm người dùng với bộ lọc riêng."
    ]
   ],
   "problem": "36 tuần, mỗi tuần GDN 18, Meta 20, TikTok 12 form. Tạo role theo kênh. Mỗi người thấy tổng form bao nhiêu và quản lý thấy bao nhiêu?",
   "steps": [
    [
     "Role GDN",
     "Bộ lọc kênh = GDN: 36 × 18 = 648 form."
    ],
    [
     "Role Meta",
     "36 × 20 = 720 form."
    ],
    [
     "Role TikTok",
     "36 × 12 = 432 form."
    ],
    [
     "Role quản lý",
     "Không lọc: 648 + 720 + 432 = 1.800 form."
    ],
    [
     "Kiểm tra",
     "Dùng «xem dưới tư cách role» (view as) trước khi công bố."
    ]
   ],
   "say": "RLS là luật áp lên người xem, không phải một slicer. Slicer chỉ là tiện lợi, ai cũng đổi được; RLS mới thực sự giới hạn dữ liệu.",
   "check": [
    "Trưởng kênh TikTok thấy tỷ lệ của cả công ty không?",
    "Không: dữ liệu bị lọc nên tỷ lệ ông ấy thấy chỉ là của TikTok."
   ]
  },
  "en": {
   "story": "Three channel heads open the same report and each should only see their own channel. A slicer cannot do that because viewers can change it.",
   "words": [
    [
     "RLS",
     "Row-level security: each role has a filter on the data that viewers cannot remove."
    ],
    [
     "Role",
     "A group of users with its own filter."
    ]
   ],
   "problem": "36 weeks, each week GDN 18, Meta 20, TikTok 12 forms. Create a role per channel. What total forms does each head see and what does the manager see?",
   "steps": [
    [
     "GDN role",
     "Filter channel = GDN: 36 × 18 = 648 forms."
    ],
    [
     "Meta role",
     "36 × 20 = 720 forms."
    ],
    [
     "TikTok role",
     "36 × 12 = 432 forms."
    ],
    [
     "Manager role",
     "No filter: 648 + 720 + 432 = 1,800 forms."
    ],
    [
     "Check",
     "Use “view as role” before publishing."
    ]
   ],
   "say": "RLS is a rule applied to the viewer, not a slicer. A slicer is only a convenience anyone can change; RLS truly limits the data.",
   "check": [
    "Does the TikTok head see the whole company's rate?",
    "No: the data is filtered so the rate they see is TikTok's alone."
   ]
  }
 },
 "pb-refresh": {
  "vi": {
   "story": "Sáng nay biểu đồ ngày hôm qua trống. Thảo định báo «hôm qua là tuần yếu». Trước hết bạn kiểm tra làm mới.",
   "words": [
    [
     "Làm mới",
     "Kéo lại dòng theo công thức Power Query."
    ],
    [
     "Thời điểm làm mới cuối",
     "Dấu thời gian cho biết số liệu mới nhất đến lúc nào."
    ]
   ],
   "problem": "Bảng form có 10.000 dòng (mỗi dòng một form). Đêm qua nguồn thêm 1.000 dòng, nhưng làm mới lỗi. Báo cáo hiện gì, thiếu bao nhiêu phần trăm?",
   "steps": [
    [
     "Nguồn thật",
     "10.000 + 1.000 = 11.000 dòng."
    ],
    [
     "Báo cáo hiện",
     "10.000 dòng. Ngày hôm qua 0 form mới."
    ],
    [
     "Thiếu",
     "1.000 ÷ 11.000 = 9,1%."
    ],
    [
     "Kết luận",
     "Không phải tuần yếu: dữ liệu chưa về."
    ],
    [
     "Việc cần làm",
     "Xem dấu làm mới, xem lỗi làm mới, chạy lại, rồi mới đọc số."
    ]
   ],
   "say": "Báo cáo vẫn chạy bình thường khi làm mới lỗi, chỉ thiếu dữ liệu mới. Số trông như tuần yếu có thể chỉ là lỗi làm mới.",
   "check": [
    "Dấu hiệu nào trên trang cho biết dữ liệu cũ?",
    "Thời điểm làm mới cuối cùng cũ hơn kỳ vọng."
   ]
  },
  "en": {
   "story": "This morning yesterday's chart is empty. Thao is about to report “yesterday was a weak week”. First you check the refresh.",
   "words": [
    [
     "Refresh",
     "Pulling rows again via the Power Query formula."
    ],
    [
     "Last refresh time",
     "A timestamp showing how recent the data is."
    ]
   ],
   "problem": "The forms table has 10,000 rows (one row per form). Last night the source added 1,000 rows, but the refresh failed. What does the report show, and what percentage is missing?",
   "steps": [
    [
     "True source",
     "10,000 + 1,000 = 11,000 rows."
    ],
    [
     "Report shows",
     "10,000 rows. Yesterday has 0 new forms."
    ],
    [
     "Missing",
     "1,000 ÷ 11,000 = 9.1%."
    ],
    [
     "Conclusion",
     "Not a weak week: the data has not arrived."
    ],
    [
     "What to do",
     "Check the refresh stamp, check the refresh error, rerun, then read the numbers."
    ]
   ],
   "say": "The report keeps working when a refresh fails, just missing new data. A figure that looks like a weak week may just be a refresh failure.",
   "check": [
    "Which sign on the page tells you the data is old?",
    "The last refresh time is older than expected."
   ]
  }
 },
 "fw-5why": {
  "vi": {
   "story": "Tuần này 8 trong 50 form thiếu số điện thoại nên nhân viên không gọi lại được. Thảo hỏi «vì sao» cho đến khi gặp thứ sửa được.",
   "words": [
    [
     "5 Why",
     "Hỏi «vì sao» liên tiếp tới khi gặp một điều có thể thay đổi."
    ],
    [
     "Điểm can thiệp",
     "Việc cụ thể có người làm được."
    ]
   ],
   "problem": "8 trên 50 form thiếu số điện thoại. Đi từng «vì sao» và tính mức cải thiện nếu sửa đúng chỗ.",
   "steps": [
    [
     "Tỷ lệ hỏng",
     "8 ÷ 50 = 16%."
    ],
    [
     "Vì sao 1",
     "Vì sao thiếu số? Vì ô số điện thoại không bắt buộc."
    ],
    [
     "Vì sao 2",
     "Vì sao không bắt buộc? Vì mẫu form cũ."
    ],
    [
     "Vì sao 3",
     "Vì sao mẫu cũ? Vì không ai được giao cập nhật mẫu."
    ],
    [
     "Điểm can thiệp",
     "Giao một người cập nhật mẫu và bắt buộc ô số. Nếu 8 form đó đủ số: 50 ÷ 50 = 100% gọi lại được, từ 42 ÷ 50 = 84%."
    ]
   ],
   "say": "Dừng ở điểm can thiệp (giao người cập nhật mẫu) dù mới ba câu hỏi. Năm không phải con số thiêng; sửa lỗi nhân viên điền thiếu chỉ vá triệu chứng.",
   "check": [
    "Nếu dừng ở «vì sao 1» thì sửa gì?",
    "Nhắc nhân viên điền số, vá triệu chứng, sai tuần sau vẫn có thể lặp lại."
   ]
  },
  "en": {
   "story": "This week 8 of 50 forms lack a phone number so staff cannot call back. Thao asks “why” until finding something fixable.",
   "words": [
    [
     "5 Whys",
     "Ask “why” repeatedly until reaching something that can be changed."
    ],
    [
     "Intervention point",
     "A concrete thing someone can do."
    ]
   ],
   "problem": "8 of 50 forms lack a phone number. Go through each “why” and compute the improvement if fixed at the right place.",
   "steps": [
    [
     "Failure rate",
     "8 ÷ 50 = 16%."
    ],
    [
     "Why 1",
     "Why is the number missing? Because the phone field is optional."
    ],
    [
     "Why 2",
     "Why optional? Because the form template is old."
    ],
    [
     "Why 3",
     "Why old? Because no one is assigned to update the template."
    ],
    [
     "Intervention point",
     "Assign someone to update the template and make the phone field required. If those 8 forms had numbers: 50 ÷ 50 = 100% callable, up from 42 ÷ 50 = 84%."
    ]
   ],
   "say": "Stop at the intervention point (assign someone to update the template) even after three questions. Five is not a sacred number; reminding staff to fill the number only patches the symptom.",
   "check": [
    "If you stop at “why 1”, what is fixed?",
    "Reminding staff to fill the number, a patch of the symptom; the problem can recur next week."
   ]
  }
 },
 "fw-spin": {
  "vi": {
   "story": "Thảo chuẩn bị nói chuyện với chị Lan về ngân sách. SPIN giúp hỏi bốn loại câu theo thứ tự, để chị tự thấy vấn đề.",
   "words": [
    [
     "S, P, I, N",
     "Situation, Problem, Implication, Need-payoff."
    ]
   ],
   "problem": "Lập bốn câu hỏi SPIN cho chuyện ngân sách TikTok, kèm con số.",
   "steps": [
    [
     "Situation",
     "«Mỗi tuần mình được bao nhiêu form, chi bao nhiêu?» Đáp: 50 form, 15 triệu."
    ],
    [
     "Problem",
     "«Có biết kênh nào đáng tiền không?» Đáp: chưa, TikTok 12 form với 4 triệu, tỷ lệ 2%."
    ],
    [
     "Implication",
     "«Nếu giữ nguyên thì sao?» TikTok tốn 4 × 4 = 16 triệu mỗi tháng mà tỷ lệ thấp hơn ngưỡng."
    ],
    [
     "Need-payoff",
     "«Nếu có một ngưỡng để cắt thì sao?» Một ngưỡng 3% giúp chốt trong một buổi, giải phóng 16 triệu."
    ],
    [
     "Cẩn thận",
     "Mỗi câu hỏi để nghe, không phải kịch bản để người ta gật đầu."
    ]
   ],
   "say": "SPIN bốn loại câu hỏi từ tình hình đến lợi ích. Nó dùng để hiểu, không để dẫn dắt người ta tới một câu trả lời định sẵn.",
   "check": [
    "Câu nào ở trên là Implication?",
    "«Nếu giữ nguyên thì sao?», nó đo hậu quả của vấn đề."
   ]
  },
  "en": {
   "story": "Thao prepares to talk with Ms. Lan about the budget. SPIN helps ask four kinds of question in order so she sees the problem herself.",
   "words": [
    [
     "S, P, I, N",
     "Situation, Problem, Implication, Need-payoff."
    ]
   ],
   "problem": "Build four SPIN questions for the TikTok budget issue, with numbers.",
   "steps": [
    [
     "Situation",
     "“How many forms do we get each week and what do we spend?” Answer: 50 forms, 15 million."
    ],
    [
     "Problem",
     "“Do we know which channel is worth it?” Answer: not yet, TikTok 12 forms for 4 million, rate 2%."
    ],
    [
     "Implication",
     "“What if we keep it as is?” TikTok costs 4 × 4 = 16 million a month at a rate below the threshold."
    ],
    [
     "Need-payoff",
     "“What if we had a threshold to cut by?” A 3% threshold lets you settle in one meeting and frees 16 million."
    ],
    [
     "Be careful",
     "Each question is for listening, not a script to make people nod."
    ]
   ],
   "say": "SPIN is four kinds of question from situation to benefit. It is for understanding, not for steering people to a pre-set answer.",
   "check": [
    "Which question above is the Implication?",
    "“What if we keep it as is?”, it measures the consequence of the problem."
   ]
  }
 },
 "fw-ask": {
  "vi": {
   "story": "Thảo hỏi chị Lan «Chị có thấy kênh TikTok yếu không?» và chị trả lời «yếu». Thảo ghi vào báo cáo «TikTok yếu». Chưa được.",
   "words": [
    [
     "Câu hỏi dẫn dắt",
     "Câu chứa sẵn câu trả lời mong muốn."
    ],
    [
     "Ngưỡng",
     "Con số đã viết ra từ trước để phán xét."
    ]
   ],
   "problem": "Ngưỡng form/click là 3%. TikTok tuần này 12 form trên 600 click. Biến câu hỏi cảm tính thành kết luận có căn cứ.",
   "steps": [
    [
     "Câu hỏi cảm tính",
     "«Anh có thấy kênh này yếu không?» Trả lời «yếu» chỉ là ý kiến."
    ],
    [
     "Câu hỏi đo được",
     "«Tỷ lệ form trên click của TikTok tuần qua là bao nhiêu?»"
    ],
    [
     "Tính",
     "12 ÷ 600 = 2,0%."
    ],
    [
     "So ngưỡng",
     "2,0% < 3%: dưới ngưỡng 1 điểm phần trăm."
    ],
    [
     "Kết luận",
     "«TikTok dưới ngưỡng 3% tuần này», có căn cứ, có thể kiểm lại."
    ]
   ],
   "say": "Một câu hỏi chưa phải một kết luận. Kết luận cần số đo và ngưỡng đã viết ra từ trước.",
   "check": [
    "Nếu tuần sau TikTok có 21 form trên 600 click thì sao?",
    "21 ÷ 600 = 3,5% ≥ 3%, không còn dưới ngưỡng."
   ]
  },
  "en": {
   "story": "Thao asks Ms. Lan “Do you think the TikTok channel is weak?” and she answers “weak”. Thao writes “TikTok is weak” in the report. Not yet.",
   "words": [
    [
     "Leading question",
     "A question that carries the desired answer."
    ],
    [
     "Threshold",
     "A number written in advance for judging."
    ]
   ],
   "problem": "The form/click threshold is 3%. TikTok this week has 12 forms from 600 clicks. Turn the gut-feel question into a grounded conclusion.",
   "steps": [
    [
     "Gut-feel question",
     "“Do you think this channel is weak?” Answering “weak” is only an opinion."
    ],
    [
     "Measurable question",
     "“What was TikTok's form-to-click rate last week?”"
    ],
    [
     "Compute",
     "12 ÷ 600 = 2.0%."
    ],
    [
     "Compare to threshold",
     "2.0% < 3%: 1 percentage point below."
    ],
    [
     "Conclusion",
     "“TikTok is below the 3% threshold this week”, grounded and re-checkable."
    ]
   ],
   "say": "A question is not yet a conclusion. A conclusion needs a measure and a threshold written in advance.",
   "check": [
    "If next week TikTok has 21 forms from 600 clicks?",
    "21 ÷ 600 = 3.5% ≥ 3%, no longer below the threshold."
   ]
  }
 },
 "fw-bmc": {
  "vi": {
   "story": "Thảo điền Business Model Canvas cho Lotus Spa: chín ô đầy chữ. Nhưng điền xong chưa có nghĩa là đúng.",
   "words": [
    [
     "Ô giả thuyết",
     "Mỗi ô của canvas là một điều bạn tin, chưa phải điều đã kiểm."
    ]
   ],
   "problem": "Ô Kênh ghi «TikTok đem khách tới». Kiểm tra ô đó bằng số và đếm số ô còn lại chưa kiểm.",
   "steps": [
    [
     "Chín ô",
     "Khách hàng, giá trị, kênh, quan hệ, doanh thu, nguồn lực, hoạt động, đối tác, chi phí."
    ],
    [
     "Ô cần kiểm",
     "Kênh: «TikTok đem khách tới»."
    ],
    [
     "Cách kiểm",
     "Tỷ lệ form trên click của TikTok = 12 ÷ 600 = 2%."
    ],
    [
     "So ngưỡng",
     "2% < 3%: giả thuyết chưa được ủng hộ."
    ],
    [
     "Còn lại",
     "9 − 1 = 8 ô vẫn là lời nói chưa kiểm."
    ]
   ],
   "say": "Canvas là danh sách giả thuyết. Với mỗi ô, hỏi: đo bằng số nào, cùng đơn vị dòng nào. Ô nào không đo được thì vẫn chỉ là lời nói.",
   "check": [
    "Ô Doanh thu nên kiểm bằng gì?",
    "Doanh thu thật từ các đơn trong sổ, so với giả thuyết."
   ]
  },
  "en": {
   "story": "Thao fills in the Business Model Canvas for Lotus Spa: nine boxes full of text. But filled in does not mean correct.",
   "words": [
    [
     "Hypothesis box",
     "Each canvas box is something you believe, not yet something verified."
    ]
   ],
   "problem": "The Channels box says “TikTok brings customers”. Test that box with numbers and count the boxes still untested.",
   "steps": [
    [
     "Nine boxes",
     "Customers, value, channels, relationships, revenue, resources, activities, partners, costs."
    ],
    [
     "Box to test",
     "Channels: “TikTok brings customers”."
    ],
    [
     "How to test",
     "TikTok form-to-click rate = 12 ÷ 600 = 2%."
    ],
    [
     "Compare to threshold",
     "2% < 3%: the hypothesis is not supported."
    ],
    [
     "Remaining",
     "9 − 1 = 8 boxes are still untested words."
    ]
   ],
   "say": "A canvas is a list of hypotheses. For each box ask: which number measures it, at which row grain. A box that cannot be measured is still just talk.",
   "check": [
    "What should the Revenue box be tested with?",
    "Real revenue from orders on the books, compared with the hypothesis."
   ]
  }
 },
 "fw-mece": {
  "vi": {
   "story": "Chị Lan hỏi «form đến từ đâu». Thảo chia câu hỏi thành các nhánh. Nhánh tốt không chồng nhau và cộng lại đủ.",
   "words": [
    [
     "MECE",
     "Mutually Exclusive, Collectively Exhaustive: không chồng nhau, cộng lại đủ."
    ]
   ],
   "problem": "50 form tuần này: GDN 18, Meta 20, TikTok 12. Trong đó 20 form đến từ khách dưới 30 tuổi (rải ở cả ba kênh). Thử hai cách chia.",
   "steps": [
    [
     "Chia theo kênh",
     "18 + 20 + 12 = 50. Mỗi form một kênh, cộng đủ 50: MECE."
    ],
    [
     "Thêm nhánh «khách trẻ»",
     "Bốn nhánh: 18 + 20 + 12 + 20 = 70 ≠ 50."
    ],
    [
     "Chênh lệch",
     "70 − 50 = 20 form bị đếm hai lần."
    ],
    [
     "Vì sao",
     "Khách trẻ là tiêu chí khác, một form vừa thuộc kênh vừa thuộc khách trẻ: chồng nhau."
    ],
    [
     "Sửa",
     "Đặt «độ tuổi» thành một cây riêng: dưới 30 (20) và từ 30 trở lên (30), cộng 50."
    ]
   ],
   "say": "Mỗi cây chỉ dùng một tiêu chí chia. Kiểm tra nhanh: cộng các nhánh có bằng tổng không.",
   "check": [
    "Hai nhánh «Quận 1» và «chi nhánh có TikTok» có MECE không?",
    "Không: một chi nhánh vừa ở Quận 1 vừa có TikTok thì thuộc cả hai."
   ]
  },
  "en": {
   "story": "Ms. Lan asks “where do forms come from”. Thao splits the question into branches. Good branches do not overlap and add up in full.",
   "words": [
    [
     "MECE",
     "Mutually Exclusive, Collectively Exhaustive: no overlap, adding up in full."
    ]
   ],
   "problem": "50 forms this week: GDN 18, Meta 20, TikTok 12. Of these, 20 forms come from customers under 30 (spread across all three channels). Try two splits.",
   "steps": [
    [
     "Split by channel",
     "18 + 20 + 12 = 50. Each form has one channel, adding to 50: MECE."
    ],
    [
     "Add a branch “young customers”",
     "Four branches: 18 + 20 + 12 + 20 = 70 ≠ 50."
    ],
    [
     "Difference",
     "70 − 50 = 20 forms counted twice."
    ],
    [
     "Why",
     "Young customers is a different criterion; a form belongs to a channel and to young customers: overlap."
    ],
    [
     "Fix",
     "Make “age” its own tree: under 30 (20) and 30 or over (30), adding to 50."
    ]
   ],
   "say": "Each tree uses one splitting criterion. Quick check: do the branches add up to the total.",
   "check": [
    "Are the branches “District 1” and “branch with TikTok” MECE?",
    "No: a branch in District 1 that also has TikTok belongs to both."
   ]
  }
 },
 "fw-7p": {
  "vi": {
   "story": "Thảo xem lại dịch vụ chăm sóc của Lotus Spa bằng 7P. Đây là danh sách kiểm tra, không phải bảng xếp hạng.",
   "words": [
    [
     "7P",
     "Product, Price, Place, Promotion, People, Process, Physical evidence."
    ]
   ],
   "problem": "Lập 7P cho Lotus Spa và ghi mục nào có, mục nào thiếu. Tính số mục đủ.",
   "steps": [
    [
     "Product",
     "Gói chăm sóc da và massage. Có."
    ],
    [
     "Price",
     "Giá gói đã niêm yết. Có."
    ],
    [
     "Place",
     "Ba chi nhánh: Quận 1, Quận 3, Thủ Đức. Có."
    ],
    [
     "Promotion",
     "Quảng cáo GDN, Meta, TikTok. Có."
    ],
    [
     "People, Process, Physical evidence",
     "People: nhân viên đã tập huấn. Có. Process: các bước một lượt chăm sóc chưa viết ra, thiếu. Physical evidence: phòng và phiếu dịch vụ chưa đồng bộ giữa chi nhánh, thiếu."
    ]
   ],
   "say": "Kết quả: 5 mục đủ, 2 mục thiếu trên 7. Ghi thiếu là thiếu, đừng nhân điểm hay tính trung bình, vì các P không cùng thang đo.",
   "check": [
    "Vì sao không nên cộng điểm 7P ra một con số duy nhất?",
    "Vì các mục không cùng thang đo, tổng sẽ che mất mục thiếu."
   ]
  },
  "en": {
   "story": "Thao reviews Lotus Spa's care service with the 7Ps. It is a checklist, not a ranking.",
   "words": [
    [
     "7Ps",
     "Product, Price, Place, Promotion, People, Process, Physical evidence."
    ]
   ],
   "problem": "Build the 7Ps for Lotus Spa and record which items are present and which are missing. Count the complete items.",
   "steps": [
    [
     "Product",
     "Skin care and massage packages. Present."
    ],
    [
     "Price",
     "Package prices are listed. Present."
    ],
    [
     "Place",
     "Three branches: District 1, District 3, Thu Duc. Present."
    ],
    [
     "Promotion",
     "GDN, Meta, TikTok ads. Present."
    ],
    [
     "People, Process, Physical evidence",
     "People: staff trained. Present. Process: the steps of a care session are not written down, missing. Physical evidence: rooms and service slips are not aligned across branches, missing."
    ]
   ],
   "say": "Result: 5 items complete, 2 missing out of 7. Record missing as missing; do not multiply scores or average, because the Ps are not on one scale.",
   "check": [
    "Why not add the 7P scores into one number?",
    "Because items are not on one scale and a total hides the missing items."
   ]
  }
 },
 "fw-5c": {
  "vi": {
   "story": "Trước khi tăng ngân sách, Thảo nhìn năm phía 5C. Phía Company cho thấy một giới hạn mà tỷ lệ form không cho thấy.",
   "words": [
    [
     "5C",
     "Customers, Competitors, Collaborators, Climate, Company."
    ]
   ],
   "problem": "Nhân viên gọi lại được tối đa 60 form mỗi tuần. Hiện có 50 form. Mỗi form thêm tốn 0,333 triệu. Tăng thêm 3 triệu hay 6 triệu thì sao?",
   "steps": [
    [
     "Customers",
     "Ai gửi form: hội viên cũ và khách mới từ quảng cáo."
    ],
    [
     "Competitors, Collaborators, Climate",
     "Ai mua cùng kênh quảng cáo; đơn vị chạy quảng cáo; mùa vụ như Tết."
    ],
    [
     "Company: năng lực",
     "60 form/tuần gọi lại được, hiện 50, còn dư 10."
    ],
    [
     "Tăng 3 triệu",
     "3 ÷ 0,333 = 9 form thêm: 59 ≤ 60. Còn trong sức."
    ],
    [
     "Tăng 6 triệu",
     "6 ÷ 0,333 = 18 form thêm: 68 > 60. Thừa 8 form không gọi kịp."
    ]
   ],
   "say": "Tăng 3 triệu vừa sức, tăng 6 triệu vượt năng lực gọi lại 8 form. Không nhìn phía Company thì chỉ thấy số form tăng mà không thấy form bị bỏ rơi.",
   "check": [
    "Nếu nhân viên gọi được 75 form mỗi tuần thì tăng 6 triệu có kịp không?",
    "68 ≤ 75, kịp."
   ]
  },
  "en": {
   "story": "Before raising the budget, Thao looks at the five Cs. The Company side shows a limit that form rates do not.",
   "words": [
    [
     "5C",
     "Customers, Competitors, Collaborators, Climate, Company."
    ]
   ],
   "problem": "Staff can call back at most 60 forms a week. There are 50 now. Each extra form costs 0.333 million. What if the budget rises by 3 million or 6 million?",
   "steps": [
    [
     "Customers",
     "Who sends forms: existing members and new customers from ads."
    ],
    [
     "Competitors, Collaborators, Climate",
     "Who buys the same ad channel; the party running the ads; seasons like Tết."
    ],
    [
     "Company: capacity",
     "60 forms/week can be called back, 50 now, 10 spare."
    ],
    [
     "Raise by 3 million",
     "3 ÷ 0.333 = 9 more forms: 59 ≤ 60. Within capacity."
    ],
    [
     "Raise by 6 million",
     "6 ÷ 0.333 = 18 more forms: 68 > 60. 8 forms cannot be called in time."
    ]
   ],
   "say": "Raising 3 million fits, raising 6 million exceeds callback capacity by 8 forms. Without the Company view you see forms rising but not the forms left unattended.",
   "check": [
    "If staff could call 75 forms a week, would a 6-million rise be in time?",
    "68 ≤ 75, yes."
   ]
  }
 },
 "st-shape": {
  "vi": {
   "story": "Chị Lan có năm phút. Thảo cần một câu chuyện ba phần: bình thường, chỗ vướng, việc cần chốt.",
   "words": [
    [
     "Tình huống bình thường",
     "Mức nền mọi người đều biết."
    ],
    [
     "Chỗ vướng",
     "Điều lệch khỏi mức nền."
    ],
    [
     "Việc cần chốt",
     "Quyết định nhờ người nghe."
    ]
   ],
   "problem": "Tỷ lệ form/click: GDN 4%, Meta 4%, TikTok 2%. Ngưỡng 3%. Viết ba phần.",
   "steps": [
    [
     "Bình thường",
     "Hai kênh đang ở 4% form trên click."
    ],
    [
     "Chỗ vướng",
     "Tuần này TikTok chỉ còn 2%, thấp hơn ngưỡng 3% một điểm và chỉ bằng một nửa hai kênh kia (2 ÷ 4 = 50%)."
    ],
    [
     "Việc cần chốt",
     "Có tăng ngân sách TikTok 4 triệu mỗi tuần không, hay giữ lại đến hạn 30/11."
    ],
    [
     "Bỏ gì",
     "Lịch sử nền tảng, định nghĩa form, mười biểu đồ phụ."
    ],
    [
     "Kiểm tra",
     "Mỗi phần một câu, và phần 3 là một quyết định có hạn."
    ]
   ],
   "say": "Ba phần là đủ: nền, vướng, chốt. Nếu thiếu phần chốt, người nghe không biết cần làm gì.",
   "check": [
    "Câu nào là «chỗ vướng» trong ví dụ này?",
    "«Tuần này TikTok chỉ còn 2%, dưới ngưỡng 3%.»"
   ]
  },
  "en": {
   "story": "Ms. Lan has five minutes. Thao needs a three-part story: normal, snag, decision.",
   "words": [
    [
     "Normal situation",
     "The baseline everyone knows."
    ],
    [
     "Snag",
     "What deviates from the baseline."
    ],
    [
     "Decision",
     "What you ask the listener to settle."
    ]
   ],
   "problem": "Form/click rate: GDN 4%, Meta 4%, TikTok 2%. Threshold 3%. Write the three parts.",
   "steps": [
    [
     "Normal",
     "Two channels sit at 4% forms per click."
    ],
    [
     "Snag",
     "This week TikTok is only 2%, one point below the 3% threshold and half of the other two (2 ÷ 4 = 50%)."
    ],
    [
     "Decision",
     "Raise the TikTok budget of 4 million a week, or hold until the 30/11 deadline."
    ],
    [
     "What to drop",
     "Platform history, form definitions, ten side charts."
    ],
    [
     "Check",
     "One sentence per part, and part 3 is a decision with a deadline."
    ]
   ],
   "say": "Three parts are enough: baseline, snag, decision. Without the decision part, listeners do not know what to do.",
   "check": [
    "Which sentence is the “snag” in this example?",
    "“This week TikTok is only 2%, below the 3% threshold.”"
   ]
  }
 },
 "st-who": {
  "vi": {
   "story": "Người nghe là chị Lan: chốt ngân sách, có năm phút, và đang tin «TikTok rẻ». Câu chuyện phải chạm vào niềm tin đó.",
   "words": [
    [
     "Người nghe",
     "Ai, quyết định được gì, có bao nhiêu thời gian, đang tin gì."
    ]
   ],
   "problem": "Chi phí mỗi form: GDN 6 ÷ 18, Meta 5 ÷ 20, TikTok 4 ÷ 12 (triệu). Kiểm tra niềm tin «TikTok rẻ» và chia thời gian cho slide.",
   "steps": [
    [
     "Chi phí mỗi form",
     "GDN 0,333; Meta 0,25; TikTok 0,333 triệu."
    ],
    [
     "Niềm tin «TikTok rẻ»",
     "TikTok ngang GDN và đắt hơn Meta (0,333 so với 0,25, tức hơn 33%)."
    ],
    [
     "Thời gian",
     "5 phút = 300 giây. Mười slide thì 30 giây mỗi slide; ba slide thì 100 giây mỗi slide."
    ],
    [
     "Câu chuyện",
     "Slide 1: đề nghị. Slide 2: chi phí mỗi form ba kênh (chạm niềm tin). Slide 3: phương án."
    ],
    [
     "Bỏ",
     "Mười slide định nghĩa; chị không đủ thời gian đọc."
    ]
   ],
   "say": "Bắt đầu từ cái người nghe tin và cần quyết, không phải từ cái bạn biết. Một tỷ lệ chạm đúng niềm tin có sức hơn mười slide định nghĩa.",
   "check": [
    "Nếu chị Lan có 20 phút thì bao nhiêu slide hợp lý?",
    "Có thể thêm slide phụ, nhưng vẫn phải giữ ba slide chính nói về quyết định."
   ]
  },
  "en": {
   "story": "The listener is Ms. Lan: she settles the budget, has five minutes, and believes “TikTok is cheap”. The story must touch that belief.",
   "words": [
    [
     "Audience",
     "Who, what they can decide, how much time they have, what they believe."
    ]
   ],
   "problem": "Cost per form: GDN 6 ÷ 18, Meta 5 ÷ 20, TikTok 4 ÷ 12 (million). Test the belief “TikTok is cheap” and allocate time to slides.",
   "steps": [
    [
     "Cost per form",
     "GDN 0.333; Meta 0.25; TikTok 0.333 million."
    ],
    [
     "The belief “TikTok is cheap”",
     "TikTok equals GDN and is dearer than Meta (0.333 vs 0.25, i.e. 33% more)."
    ],
    [
     "Time",
     "5 minutes = 300 seconds. Ten slides is 30 seconds each; three slides is 100 seconds each."
    ],
    [
     "The story",
     "Slide 1: recommendation. Slide 2: cost per form of three channels (touches the belief). Slide 3: options."
    ],
    [
     "Drop",
     "Ten slides of definitions; she has no time to read them."
    ]
   ],
   "say": "Start from what the listener believes and must decide, not from what you know. One rate that touches the belief carries more than ten definition slides.",
   "check": [
    "If Ms. Lan had 20 minutes, how many slides would be reasonable?",
    "You may add supporting slides, but three main slides about the decision must stay."
   ]
  }
 },
 "st-insight": {
  "vi": {
   "story": "Thảo có một đống con số. Mỗi nhận xét thuộc một trong năm dạng, và dạng quyết định hình vẽ.",
   "words": [
    [
     "Xu hướng, khác biệt, phần của tổng, điểm lạ, đi cùng nhau",
     "Năm dạng nhận xét."
    ]
   ],
   "problem": "Phân loại và chọn hình: (a) tổng form 8 tuần, 50 đến 58. (b) form ba kênh trong một tuần. (c) mỗi kênh chiếm bao nhiêu phần. (d) một tuần 500 form khi các tuần khác khoảng 50. (e) chi tiêu và form cùng tăng.",
   "steps": [
    [
     "(a) Xu hướng",
     "Đường theo tuần. Từ 50 lên 58 (+16%)."
    ],
    [
     "(b) Khác biệt",
     "Cột: Meta 20, GDN 18, TikTok 12."
    ],
    [
     "(c) Phần của tổng",
     "36%, 40%, 24%: cột hoặc tròn ít nhóm."
    ],
    [
     "(d) Điểm lạ",
     "500 gấp 10 lần 50. Chưa kết luận: kiểm tra nhập trùng hoặc thêm số 0 trước đã."
    ],
    [
     "(e) Đi cùng nhau",
     "Biểu đồ chấm hai trục: chi tiêu và form. Đi cùng nhau không có nghĩa chi nhiều làm form nhiều."
    ]
   ],
   "say": "Chọn dạng nhận xét trước, hình vẽ sau. Điểm lạ phải đi kiểm tra trước khi thành «phát hiện».",
   "check": [
    "Hình nào hợp với «mỗi kênh chiếm bao nhiêu»?",
    "Cột hoặc tròn khi ít nhóm: đó là phần của tổng."
   ]
  },
  "en": {
   "story": "Thao has a pile of numbers. Every insight belongs to one of five kinds, and the kind decides the chart.",
   "words": [
    [
     "Trend, difference, share, outlier, together",
     "The five kinds of insight."
    ]
   ],
   "problem": "Classify and choose the chart: (a) total forms over 8 weeks, 50 to 58. (b) forms of three channels in one week. (c) the share each channel takes. (d) one week with 500 forms when other weeks are around 50. (e) spend and forms both rise.",
   "steps": [
    [
     "(a) Trend",
     "A line by week. From 50 up to 58 (+16%)."
    ],
    [
     "(b) Difference",
     "Bars: Meta 20, GDN 18, TikTok 12."
    ],
    [
     "(c) Share",
     "36%, 40%, 24%: bars or a pie with few groups."
    ],
    [
     "(d) Outlier",
     "500 is 10 times 50. Do not conclude: first check for a duplicate import or an extra zero."
    ],
    [
     "(e) Together",
     "A two-axis scatter: spend and forms. Moving together does not mean more spend causes more forms."
    ]
   ],
   "say": "Choose the kind of insight first, the chart second. An outlier must be checked before it becomes a “finding”.",
   "check": [
    "Which chart fits “how much does each channel take”?",
    "Bars or a pie with few groups: it is a share of a whole."
   ]
  }
 },
 "st-pyramid": {
  "vi": {
   "story": "Chị Lan nghe tới giữa bài mà chưa biết bạn muốn gì. Kim tự tháp đảo thứ tự: nói câu cần chốt trước.",
   "words": [
    [
     "Kim tự tháp",
     "Kết luận ở đỉnh, rồi lý do, rồi bằng chứng."
    ]
   ],
   "problem": "Tỷ lệ TikTok 2% so ngưỡng 3%. Với 600 click cần 18 form để đạt 3%, hiện có 12. Viết ba tầng.",
   "steps": [
    [
     "Đỉnh",
     "«Đề nghị giữ ngân sách TikTok đến 30/11, không tăng.»"
    ],
    [
     "Lý do",
     "Tỷ lệ form trên click 2% thấp hơn ngưỡng 3%."
    ],
    [
     "Số cần thêm",
     "600 × 3% = 18 form để đạt ngưỡng; hiện 12, thiếu 6 form (+50%)."
    ],
    [
     "Bằng chứng",
     "Cùng cách đếm với tuần nền (form ÷ click), cùng đơn vị dòng."
    ],
    [
     "Thứ tự nói",
     "Đỉnh, rồi lý do, rồi bằng chứng; chị Lan muốn hỏi thì mới đi sâu."
    ]
   ],
   "say": "Nói đáp án trước giúp người nghe đọc phần còn lại như bằng chứng, không như câu đố. Nếu chị phản đối đỉnh thì bạn đã biết chỗ cần giải thích.",
   "check": [
    "Câu nào ở trên là đỉnh của kim tự tháp?",
    "«Đề nghị giữ ngân sách TikTok đến 30/11, không tăng.»"
   ]
  },
  "en": {
   "story": "Ms. Lan listens to the middle of a talk without knowing what you want. The pyramid reverses the order: say the decision first.",
   "words": [
    [
     "Pyramid",
     "Conclusion at the top, then reasons, then evidence."
    ]
   ],
   "problem": "TikTok rate 2% against the 3% threshold. With 600 clicks, 18 forms are needed to reach 3%, there are 12. Write three levels.",
   "steps": [
    [
     "Top",
     "“I recommend holding the TikTok budget until 30/11, not raising it.”"
    ],
    [
     "Reason",
     "The form-to-click rate of 2% is below the 3% threshold."
    ],
    [
     "Gap",
     "600 × 3% = 18 forms to reach the threshold; now 12, short by 6 forms (+50%)."
    ],
    [
     "Evidence",
     "The same counting as the baseline weeks (forms ÷ clicks), the same row grain."
    ],
    [
     "Speaking order",
     "Top, then reason, then evidence; go deeper only if Ms. Lan asks."
    ]
   ],
   "say": "Saying the answer first lets listeners read the rest as evidence, not a riddle. If she objects to the top you already know what to explain.",
   "check": [
    "Which sentence above is the top of the pyramid?",
    "“I recommend holding the TikTok budget until 30/11, not raising it.”"
   ]
  }
 },
 "st-one": {
  "vi": {
   "story": "Thảo có hai ý muốn nói: giữ ngân sách TikTok, và nên đầu tư thương hiệu Lotus Spa. Hai tiêu đề là hai câu chuyện.",
   "words": [
    [
     "Một trang một thông điệp",
     "Mỗi trang chỉ nói một việc người nghe cần chốt."
    ]
   ],
   "problem": "Năm phút = 300 giây. Hai thông điệp: giữ ngân sách TikTok (cần chốt hôm nay), thương hiệu (chưa gấp). Chia trang và thời gian.",
   "steps": [
    [
     "Thông điệp 1",
     "Giữ ngân sách TikTok đến 30/11 (cần chốt hôm nay)."
    ],
    [
     "Thông điệp 2",
     "Đầu tư thương hiệu (không gấp, không có hạn)."
    ],
    [
     "Chia trang",
     "Trang 1 chỉ nói thông điệp 1. Trang 2 chỉ nói thông điệp 2, chỉ khi còn giờ."
    ],
    [
     "Chia giờ",
     "Trang 1: 240 giây (80%). Trang 2: 60 giây (20%) nếu còn."
    ],
    [
     "Nếu chị Lan chỉ có 5 phút",
     "Chị chỉ nhận trang 1, và không bị phân tâm bởi thương hiệu."
    ]
   ],
   "say": "Hai thông điệp trên một trang buộc chị Lan chọn nghe cái nào. Tách ra thì cái gấp được chốt trước.",
   "check": [
    "Nếu bắt buộc nói cả hai trong 5 phút thì làm sao?",
    "Vẫn tách hai trang, ưu tiên thông điệp có hạn trước và để trang 2 làm phần mở rộng."
   ]
  },
  "en": {
   "story": "Thao has two things to say: hold the TikTok budget, and invest in the Lotus Spa brand. Two headlines are two stories.",
   "words": [
    [
     "One page one message",
     "Each page says only one thing the listener must settle."
    ]
   ],
   "problem": "Five minutes = 300 seconds. Two messages: hold the TikTok budget (to settle today), brand (not urgent). Split pages and time.",
   "steps": [
    [
     "Message 1",
     "Hold the TikTok budget until 30/11 (to settle today)."
    ],
    [
     "Message 2",
     "Invest in the brand (not urgent, no deadline)."
    ],
    [
     "Split pages",
     "Page 1 says only message 1. Page 2 says only message 2, only if time remains."
    ],
    [
     "Split time",
     "Page 1: 240 seconds (80%). Page 2: 60 seconds (20%) if any."
    ],
    [
     "If Ms. Lan has only 5 minutes",
     "She receives only page 1, undistracted by the brand."
    ]
   ],
   "say": "Two messages on one page force Ms. Lan to choose which to hear. Separate them and the urgent one is settled first.",
   "check": [
    "If you must say both within 5 minutes?",
    "Still separate the pages, put the message with a deadline first, and make page 2 an extension."
   ]
  }
 },
 "st-board": {
  "vi": {
   "story": "Trước khi làm slide, Thảo vẽ storyboard: thứ tự các câu, không phải bảng màu.",
   "words": [
    [
     "Storyboard",
     "Chuỗi khung, mỗi khung một câu và một hình cần có."
    ]
   ],
   "problem": "Ba khung: câu chốt, tỷ lệ so ngưỡng, phương án trong hạn. Nếu bỏ khung 2 thì sao?",
   "steps": [
    [
     "Khung 1",
     "Câu chốt: «giữ ngân sách TikTok đến 30/11». Hình: không cần, chỉ chữ."
    ],
    [
     "Khung 2",
     "Tỷ lệ so ngưỡng: cột GDN 4%, Meta 4%, TikTok 2% và đường ngưỡng 3%."
    ],
    [
     "Khung 3",
     "Phương án trong hạn: giữ 4 triệu, hoặc chuyển 2 triệu sang Meta."
    ],
    [
     "Bỏ khung 2",
     "Khung 3 mất căn cứ: người nghe không biết vì sao phải giữ."
    ],
    [
     "Sửa màu cột",
     "Đổi màu xanh của cột không vá được chỗ hổng đó."
    ]
   ],
   "say": "Storyboard kiểm tra logic trước khi tốn công thiết kế. Mỗi khung phải dựa vào khung trước.",
   "check": [
    "Khung nào phụ thuộc vào khung 2?",
    "Khung 3: phương án dựa vào việc đã thấy tỷ lệ thấp hơn ngưỡng."
   ]
  },
  "en": {
   "story": "Before making slides, Thao draws a storyboard: the order of sentences, not a colour palette.",
   "words": [
    [
     "Storyboard",
     "A chain of frames, each with one sentence and the visual it needs."
    ]
   ],
   "problem": "Three frames: the decision sentence, the rate against the threshold, the options within the deadline. What if frame 2 is dropped?",
   "steps": [
    [
     "Frame 1",
     "Decision sentence: “hold the TikTok budget until 30/11”. Visual: none needed, only text."
    ],
    [
     "Frame 2",
     "Rate against threshold: bars GDN 4%, Meta 4%, TikTok 2% and a 3% threshold line."
    ],
    [
     "Frame 3",
     "Options within the deadline: hold 4 million, or move 2 million to Meta."
    ],
    [
     "Drop frame 2",
     "Frame 3 loses its basis: listeners do not know why to hold."
    ],
    [
     "Recolour the bars",
     "Changing the blue of the bars does not patch that hole."
    ]
   ],
   "say": "A storyboard checks the logic before design effort is spent. Each frame must lean on the previous one.",
   "check": [
    "Which frame depends on frame 2?",
    "Frame 3: the options rely on having seen the rate below the threshold."
   ]
  }
 }
};

const visuals: Record<string, Visual> = {
 "tb-why": {
  "kind": "bars",
  "title": [
   "Form tuần này theo kênh",
   "Forms this week by channel"
  ],
  "items": [
   {
    "label": [
     "GDN",
     "GDN"
    ],
    "value": 18
   },
   {
    "label": [
     "Meta",
     "Meta"
    ],
    "value": 20
   },
   {
    "label": [
     "TikTok",
     "TikTok"
    ],
    "value": 12
   }
  ],
  "unit": "form"
 },
 "tb-bar": {
  "kind": "line",
  "title": [
   "Tổng form 8 tuần",
   "Total forms over 8 weeks"
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
 "tb-box": {
  "kind": "table",
  "title": [
   "Tóm tắt hộp của TikTok",
   "Box summary of TikTok"
  ],
  "head": [
   [
    "Số",
    "Statistic"
   ],
   [
    "Giá trị",
    "Value"
   ]
  ],
  "rows": [
   [
    "Min / Min",
    8
   ],
   [
    "Q1",
    10.5
   ],
   [
    "Trung vị / Median",
    12
   ],
   [
    "Q3",
    13.5
   ],
   [
    "Max / Max",
    20
   ],
   [
    "Rào trên / Upper fence",
    18
   ]
  ],
  "mark": [
   [
    4,
    1
   ]
  ]
 },
 "tb-part": {
  "kind": "bars",
  "title": [
   "Phần form theo kênh (%)",
   "Share of forms by channel (%)"
  ],
  "items": [
   {
    "label": [
     "GDN",
     "GDN"
    ],
    "value": 36
   },
   {
    "label": [
     "Meta",
     "Meta"
    ],
    "value": 40
   },
   {
    "label": [
     "TikTok",
     "TikTok"
    ],
    "value": 24
   }
  ],
  "unit": "%"
 },
 "tb-join": {
  "kind": "table",
  "title": [
   "Trước và sau khi nối",
   "Before and after the join"
  ],
  "head": [
   [
    "Số đo",
    "Measure"
   ],
   [
    "Đúng",
    "Correct"
   ],
   [
    "Sau nối",
    "After join"
   ]
  ],
  "rows": [
   [
    "Hội viên / Members",
    100,
    200
   ],
   [
    "Tổng phí (triệu) / Fee total (m)",
    100,
    200
   ]
  ],
  "mark": [
   [
    0,
    2
   ],
   [
    1,
    2
   ]
  ]
 },
 "tb-calc": {
  "kind": "table",
  "title": [
   "Hai cách tính tỷ lệ",
   "Two ways to compute the rate"
  ],
  "head": [
   [
    "Cách",
    "Way"
   ],
   [
    "Kết quả",
    "Result"
   ]
  ],
  "rows": [
   [
    "Trung bình các tỷ lệ / Mean of rates",
    "3,33%"
   ],
   [
    "SUM / SUM",
    "3,23%"
   ]
  ],
  "mark": [
   [
    1,
    1
   ]
  ]
 },
 "tb-dual": {
  "kind": "table",
  "title": [
   "Trang quyết định ngân sách",
   "Budget decision page"
  ],
  "head": [
   [
    "Kênh",
    "Channel"
   ],
   [
    "Chi (triệu)",
    "Spend (m)"
   ],
   [
    "Tỷ lệ",
    "Rate"
   ],
   [
    "Chi/form (triệu)",
    "Cost/form (m)"
   ]
  ],
  "rows": [
   [
    "GDN",
    6,
    "4%",
    0.333
   ],
   [
    "Meta",
    5,
    "4%",
    0.25
   ],
   [
    "TikTok",
    4,
    "2%",
    0.333
   ]
  ],
  "mark": [
   [
    2,
    2
   ]
  ]
 },
 "xa-what": {
  "kind": "table",
  "title": [
   "Lãi (triệu) theo số bán và giá",
   "Profit (million) by sales and price"
  ],
  "head": [
   [
    "Số bán \\ Giá",
    "Sales \\ Price"
   ],
   [
    "0,55",
    "0.55"
   ],
   [
    "0,60",
    "0.60"
   ],
   [
    "0,65",
    "0.65"
   ]
  ],
  "rows": [
   [
    "180",
    -1,
    8,
    17
   ],
   [
    "200",
    10,
    20,
    30
   ],
   [
    "220",
    21,
    32,
    43
   ]
  ],
  "mark": [
   [
    2,
    3
   ]
  ]
 },
 "pb-pq": {
  "kind": "table",
  "title": [
   "Số dòng qua từng bước",
   "Row count through each step"
  ],
  "head": [
   [
    "Bước",
    "Step"
   ],
   [
    "Trước",
    "Before"
   ],
   [
    "Sau làm mới",
    "After refresh"
   ]
  ],
  "rows": [
   [
    "Nguồn / Source",
    400,
    404
   ],
   [
    "Lọc TikTok / Filter",
    100,
    101
   ],
   [
    "Bỏ trống / Drop blanks",
    96,
    97
   ]
  ],
  "mark": [
   [
    1,
    2
   ]
  ]
 },
 "pb-grain": {
  "kind": "bars",
  "title": [
   "Cùng dữ liệu, ba cách đếm",
   "Same data, three counts"
  ],
  "items": [
   {
    "label": [
     "Dòng hàng",
     "Line rows"
    ],
    "value": 200
   },
   {
    "label": [
     "Đơn",
     "Orders"
    ],
    "value": 80
   },
   {
    "label": [
     "Khách",
     "Customers"
    ],
    "value": 50
   }
  ]
 },
 "pb-page": {
  "kind": "bars",
  "title": [
   "Chi phí mỗi form (triệu)",
   "Cost per form (million)"
  ],
  "items": [
   {
    "label": [
     "GDN",
     "GDN"
    ],
    "value": 0.333
   },
   {
    "label": [
     "Meta",
     "Meta"
    ],
    "value": 0.25
   },
   {
    "label": [
     "TikTok",
     "TikTok"
    ],
    "value": 0.333
   }
  ]
 },
 "pb-rls": {
  "kind": "bars",
  "title": [
   "Form 36 tuần mỗi role thấy",
   "Forms over 36 weeks each role sees"
  ],
  "items": [
   {
    "label": [
     "GDN",
     "GDN"
    ],
    "value": 648
   },
   {
    "label": [
     "Meta",
     "Meta"
    ],
    "value": 720
   },
   {
    "label": [
     "TikTok",
     "TikTok"
    ],
    "value": 432
   },
   {
    "label": [
     "Quản lý",
     "Manager"
    ],
    "value": 1800
   }
  ]
 },
 "fw-mece": {
  "kind": "table",
  "title": [
   "Hai cách chia 50 form",
   "Two ways to split 50 forms"
  ],
  "head": [
   [
    "Cách chia",
    "Split"
   ],
   [
    "Tổng nhánh",
    "Sum of branches"
   ],
   [
    "Tổng thật",
    "True total"
   ]
  ],
  "rows": [
   [
    "Theo kênh / By channel",
    50,
    50
   ],
   [
    "Kênh + khách trẻ / Channel + young",
    70,
    50
   ]
  ],
  "mark": [
   [
    1,
    1
   ]
  ]
 },
 "st-shape": {
  "kind": "bars",
  "title": [
   "Tỷ lệ form/click (%), ngưỡng 3%",
   "Form/click rate (%), threshold 3%"
  ],
  "items": [
   {
    "label": [
     "GDN",
     "GDN"
    ],
    "value": 4
   },
   {
    "label": [
     "Meta",
     "Meta"
    ],
    "value": 4
   },
   {
    "label": [
     "TikTok",
     "TikTok"
    ],
    "value": 2
   }
  ],
  "unit": "%"
 },
 "st-who": {
  "kind": "bars",
  "title": [
   "Chi phí mỗi form (triệu)",
   "Cost per form (million)"
  ],
  "items": [
   {
    "label": [
     "GDN",
     "GDN"
    ],
    "value": 0.333
   },
   {
    "label": [
     "Meta",
     "Meta"
    ],
    "value": 0.25
   },
   {
    "label": [
     "TikTok",
     "TikTok"
    ],
    "value": 0.333
   }
  ]
 },
 "st-insight": {
  "kind": "table",
  "title": [
   "Dạng nhận xét và hình",
   "Kinds of insight and charts"
  ],
  "head": [
   [
    "Dạng",
    "Kind"
   ],
   [
    "Ví dụ",
    "Example"
   ],
   [
    "Hình",
    "Chart"
   ]
  ],
  "rows": [
   [
    "Xu hướng / Trend",
    "50 → 58",
    "Đường / Line"
   ],
   [
    "Khác biệt / Difference",
    "18, 20, 12",
    "Cột / Bars"
   ],
   [
    "Phần / Share",
    "36, 40, 24%",
    "Cột / Bars"
   ],
   [
    "Điểm lạ / Outlier",
    "500 vs 50",
    "Hộp / Box"
   ],
   [
    "Đi cùng / Together",
    "chi vs form",
    "Chấm / Scatter"
   ]
  ]
 },
 "st-board": {
  "kind": "table",
  "title": [
   "Storyboard ba khung",
   "Three-frame storyboard"
  ],
  "head": [
   [
    "Khung",
    "Frame"
   ],
   [
    "Nội dung",
    "Content"
   ],
   [
    "Dựa vào",
    "Depends on"
   ]
  ],
  "rows": [
   [
    "1",
    "Câu chốt / Decision",
    "-"
   ],
   [
    "2",
    "Tỷ lệ vs ngưỡng / Rate vs threshold",
    "1"
   ],
   [
    "3",
    "Phương án / Options",
    "2"
   ]
  ],
  "mark": [
   [
    2,
    2
   ]
  ]
 }
};

export const c5Walks: Record<string, Walk> = Object.fromEntries(
  Object.entries(base).map(([id, w]) => [id, visuals[id] ? { ...w, visual: visuals[id] } : w]),
);
