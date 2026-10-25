from gapmod import K

MATH = "c-0598c14acf8d"
DESC = "c-75c5d36b41f2"
C2 = "c-cca6e1fa1c5f"
C4 = "c-a0c17afb8849"

K(
    "math-perm", MATH, "s-f1d333a5e293", "Permutations", "Toán", "S6 Hoán vị", "M1",
    ("Đổi thứ tự là một cách khác", "A different order is a different way."),
    ("Để đếm số cách xếp khi ai đứng trước cũng khác, trước khi nhân phí.", "So you count arrangements when who goes first matters, before you multiply a fee."),
    ("Đã có phần của một đám. Hoán vị là cách đếm khi thứ tự tính.", "You already have a share of a whole. A permutation is how you count when order counts."),
    ("thứ tự tính", "order counts"), ("chỉ cần bộ", "only the set"),
    ("P(n, k) là số cách xếp k chỗ từ n thứ, có thứ tự.", "P(n, k) is the number of ways to fill k seats from n things, in order."),
    ("8 người lấy 3 suất lên sóng: 8×7×6 = 336. Cùng ba người đổi chỗ là một cách khác.", "8 people, 3 seats on air: 8×7×6 = 336. The same three people in another order is another way."),
    ("Hỏi đổi chỗ có thành việc khác không. Có thì dùng hoán vị.", "Ask whether swapping two people makes a different job. If yes, use permutations."),
    ("Ví dụ minh họa: 8 KOL, chọn 3 người và ai nói trước cũng khác. 336 cách. Nếu chỉ cần đúng bộ người ngồi, đừng dùng 336. Bản dài nằm ở C2.", "Illustration: 8 KOLs, pick 3, and who speaks first matters. 336 ways. If you only need the set of people, don't use 336. The long version is in C2."),
    [("Viết n và k.", "Write n and k."), ("Nhân n × (n−1) × … đủ k thừa số.", "Multiply n × (n−1) × … for k factors."), ("Nếu thứ tự không tính, chuyển sang tổ hợp.", "If order does not count, switch to combinations.")],
    ("P(n,k) = n! / (n−k)!. n! là n × (n−1) × … × 1. 8! / 5! = 336. Đây là đếm, chưa phải xác suất. Xác suất còn phải chia cho số cách bạn coi là cả đám.", "P(n,k) = n! / (n−k)!. n! is n × (n−1) × … × 1. 8! / 5! = 336. This is a count, not yet a probability. A probability still divides by the count you treat as the whole."),
    ("336 là số cách. Chưa phải xác suất một cách.", "336 is a count of ways. Not the probability of one way."),
    formula="P(n,k)=\\dfrac{n!}{(n-k)!}",
    symbols=(("n", "số thứ có sẵn", "how many things you have"), ("k", "số chỗ, có thứ tự", "how many seats, in order")),
)

K(
    "math-comb", MATH, "s-f1d333a5e293", "Combinations", "Toán", "S6 Tổ hợp", "M1",
    ("Cùng một bộ, xoay thế nào cũng là một", "The same set, turned any way, is still one."),
    ("Để khỏi đếm một bộ khách mời nhiều lần khi thứ tự không có mặt.", "So a set of guests is not counted many times when order is not in the room."),
    ("Hoán vị đã đếm cả thứ tự. Tổ hợp bỏ thứ tự.", "Permutations counted order. Combinations drop order."),
    ("336 cách xếp", "336 arrangements"), ("56 bộ", "56 sets"),
    ("C(n, k) là số bộ k phần tử lấy từ n, không kể thứ tự.", "C(n, k) is the number of k-sets from n, ignoring order."),
    ("8 người lấy 3, không phân biệt ai ngồi ghế nào: 336 / 6 = 56. 3! = 6 cách xếp một bộ ba.", "8 people, take 3, and the seats don't matter: 336 / 6 = 56. 3! = 6 ways to order one trio."),
    ("Chia hoán vị cho số cách xếp bên trong một bộ.", "Divide the permutations by the ways to order the inside of one set."),
    ("Ví dụ minh họa: mời 3 KOL cùng một bàn, ai ngồi đâu cũng như nhau. 56 bộ, không phải 336. Bản dài ở C2.", "Illustration: invite 3 KOLs to one table, and seats don't matter. 56 sets, not 336. The long version is in C2."),
    [("Hỏi thứ tự có in trên kết quả không.", "Ask whether the order shows up in the result."), ("Không thì dùng C(n, k).", "If it doesn't, use C(n, k)."), ("Đừng nhân phí theo 336 nếu bạn chỉ mua một bộ.", "Don't price 336 if you only bought one set.")],
    ("C(n,k) = n! / (k! (n−k)!). Mẫu số là vì mỗi bộ đã bị P(n,k) đếm k! lần. C(8,3) = 56. Tổ hợp không lớn hơn hoán vị với cùng n và k, khi k > 1.", "C(n,k) = n! / (k! (n−k)!). The denominator is there because P(n,k) already counted each set k! times. C(8,3) = 56. A combination is not larger than the permutation for the same n and k, when k > 1."),
    ("Một bàn ba người là một bộ, không phải sáu bàn.", "One table of three is one set, not six tables."),
    formula="C(n,k)=\\dfrac{n!}{k!(n-k)!}",
    symbols=(("k!", "số cách xếp lại bên trong một bộ", "the ways to reorder the inside of one set"),),
)

K(
    "math-disj", MATH, "s-f1d333a5e293", "Disjoint is not independent", "Toán", "S6 Rời và độc lập", "M1",
    ("Rời nhau không phải độc lập", "Disjoint is not independent."),
    ("Để hai việc không bao giờ cùng lúc không bị gọi là «không liên quan».", "So two events that never happen together are not called “unrelated”."),
    ("Đã có «hoặc» trừ chỗ chồng, và «và» thì nhân. Chỗ chồng bằng 0 là một trường hợp đặc biệt, không phải độc lập.", "You already have “or”, which subtracts the overlap, and “and”, which multiplies. An overlap of 0 is a special case. It is not independence."),
    ("không cùng lúc", "never together"), ("vẫn phụ thuộc", "still dependent"),
    ("Hai việc rời nhau thì không xảy ra cùng lúc. Nếu cả hai đều có xác suất dương, biết việc này xảy ra là biết việc kia không xảy ra. Đó là phụ thuộc.", "Two disjoint events do not happen together. If both have a positive probability, knowing that one happened tells you the other did not. That is dependence."),
    ("«Gửi form» và «không gửi form» rời nhau. Biết đã gửi thì chắc chắn không nằm ở nhóm không gửi. Chúng không độc lập.", "“Sent the form” and “did not send the form” are disjoint. Knowing it was sent tells you it is not in the other group. They are not independent."),
    ("Độc lập là biết A không đổi cơ hội của B. Rời nhau thì biết A làm cơ hội của B thành 0.", "Independence means knowing A does not change B's chance. Disjoint means knowing A sets B's chance to 0."),
    ("Ví dụ minh họa: P(GDN) = 0,4 và P(TikTok) = 0,3, và một click chỉ một kênh. Giao bằng 0. Tích 0,4×0,3 = 0,12 khác 0. Nên không độc lập. Số là ví dụ. Bản dài ở C2.", "Illustration: P(GDN) = 0.4 and P(TikTok) = 0.3, and one click is one channel. The intersection is 0. The product 0.4×0.3 = 0.12, which is not 0. So they are not independent. The numbers illustrate. The long version is in C2."),
    [("Giao bằng 0: gọi là rời, nếu đó là sự thật của việc.", "Intersection 0: call them disjoint, if that is true of the job."), ("Cả hai xác suất đều dương: đừng gọi là độc lập.", "If both probabilities are positive, don't call them independent."), ("Độc lập chỉ khi P(A và B) bằng P(A) nhân P(B).", "Independence only when P(A and B) equals P(A) times P(B).")],
    ("Rời: P(A ∩ B) = 0. Độc lập: P(A ∩ B) = P(A)P(B). Hai đẳng thức chỉ cùng đúng khi ít nhất một xác suất bằng 0. Hai việc rời, mỗi việc một xác suất dương, là phụ thuộc. Nhầm chữ này thì phép nhân «vì độc lập» ra một xác suất dương cho một việc không bao giờ xảy ra.", "Disjoint: P(A ∩ B) = 0. Independent: P(A ∩ B) = P(A)P(B). Those two equations are true together only if at least one probability is 0. Two disjoint events, each with a positive probability, are dependent. Mix the words up and a product “because they are independent” gives a positive probability to something that never happens."),
    ("Không cùng lúc mà cả hai đều có thể xảy ra riêng thì chúng phụ thuộc nhau.", "If they never happen together, and each can still happen alone, they depend on each other."),
    formula="P(A\\cap B)=0 \\neq P(A)P(B)",
    symbols=(("P(A\\cap B)", "xác suất cả hai cùng lúc", "the probability both happen together"),),
)

K(
    "math-kind", MATH, "s-f1d333a5e293", "Three readings of probability", "Toán", "S6 Ba cách đọc", "M1",
    ("Cổ điển, tần suất, và một mức tin là ba việc", "Classical, frequency, and a degree of belief are three jobs."),
    ("Để 3% của một tuần không bị nói như thể đó là số cách chia đều.", "So 3% of one week is not spoken as if it were a count of equally likely ways."),
    ("Đã tách rời và độc lập. Vẫn còn ba cách người ta dùng chữ xác suất.", "Disjoint and independent are split. There are still three ways people use the word probability."),
    ("đếm cách đều", "count equal ways"), ("một tuần 3%", "one week at 3%"),
    ("Cổ điển là số cách thuận trên số cách coi như đều. Tần suất là tỷ lệ sau nhiều lần lặp. Chủ quan là mức bạn sẵn sàng đánh đổi, khi không có cách đều và cũng chưa có nhiều lần lặp.", "Classical is favorable ways over ways you treat as equal. Frequency is a share after many repeats. Subjective is the stake you would take, when there are no equal ways and not many repeats either."),
    ("12 form trên 400 phiên là một tần suất của mẫu đó. Không phải «12 cách trên 400 cách đều nhau» nếu các phiên không được xây như những cách đều.", "12 forms out of 400 sessions is a frequency of that sample. It is not “12 ways out of 400 equal ways” unless the sessions were built as equal ways."),
    ("Gọi đúng kiểu trước khi nhân.", "Name the kind before you multiply."),
    ("Ví dụ minh họa: tung một đồng xu cân là cổ điển, 1/2. Tỷ lệ form một tuần là tần suất. «Khả năng khách này quay lại» khi bạn chỉ có một khách, chưa có lịch sử, là một mức tin, không phải 1/2 cho đến khi bạn có căn cứ. Bản dài ở C2.", "Illustration: a fair coin is classical, 1/2. A week's form rate is a frequency. “The chance this customer returns”, with one customer and no history, is a degree of belief. It is not 1/2 until you have a basis. The long version is in C2."),
    [("Có các cách đều và đếm được: cổ điển.", "Equal ways you can count: classical."), ("Có một chuỗi lần lặp cùng một việc: tần suất.", "A string of repeats of the same job: frequency."), ("Không có hai cái đó: nói rõ là một mức tin, đừng viết một phân số giả.", "If you have neither, say it is a degree of belief. Don't write a fake fraction.")],
    ("Ba cách đọc không cộng được vào nhau. Một tuần 3% không nâng thành xác suất cổ điển của «mọi khách». Một mức tin không thành tần suất chỉ vì viết dưới dạng 0,3. C2 dạy bản dài của mẫu và khoảng. Ở đây chỉ cần không gọi nhầm tên.", "The three readings do not add together. One week at 3% does not promote itself into a classical probability of “every customer”. A degree of belief does not become a frequency just because you wrote 0.3. C2 teaches the long version of samples and intervals. Here you only need to not use the wrong name."),
    ("3% của một tuần là một tỷ lệ mẫu. Chưa phải một luật đều.", "3% of one week is a sample share. Not an equal-ways law."),
)

K(
    "ds-pct", DESC, "s-f10bee98eee6", "Percentiles", "Mô tả", "S3 Vị trí bất kỳ", "M1",
    ("Phân vị là một chỗ trong dãy đã sắp", "A percentile is a place in the sorted list."),
    ("Để «phân vị 90» không bị đọc thành 90% của số lớn nhất.", "So the 90th percentile is not read as 90% of the maximum."),
    ("Tứ phân vị đã cắt bốn phần. Phân vị là cắt tổng quát hơn, và phần mềm có thể lệch một ô.", "Quartiles already cut four shares. A percentile is the more general cut, and software can disagree by one slot."),
    ("chỗ trong dãy", "a place in the list"), ("90% của số max", "90% of the max"),
    ("Phân vị thứ p là một giá trị mà khoảng p phần trăm các quan sát nằm không cao hơn nó, theo đúng quy ước cắt bạn đã chọn.", "The p-th percentile is a value such that about p percent of the observations sit at or below it, under the cut rule you chose."),
    ("Dãy 2, 4, 4, 4, 5, 5, 7, 9. Số lớn nhất là 9. 90% của 9 là 8,1. Phân vị 90 không phải 8,1. Nó là một chỗ gần cuối dãy đã sắp.", "The list 2, 4, 4, 4, 5, 5, 7, 9. The maximum is 9. 90% of 9 is 8.1. The 90th percentile is not 8.1. It is a place near the end of the sorted list."),
    ("Sắp dãy, rồi nói quy ước cắt. Đừng nhân max.", "Sort the list, then name the cut. Don't multiply the max."),
    ("Ví dụ minh họa: 8 số như trên, trung vị là chỗ giữa, 4,5 hoặc 5 tùy cách cắt hai số giữa. Thập phân vị là mười khoảng. Cách cắt của Excel và của một thư viện có thể lệch một bậc. Ghi tên cách cắt.", "Illustration: the 8 numbers above. The median is the middle place, 4.5 or 5 depending on how you cut the two middle numbers. A decile is ten shares. Excel's cut and a library's cut can differ by one step. Name the cut."),
    [("Sắp tăng dần.", "Sort ascending."), ("Nói p là phần trăm số quan sát, không phải phần trăm của max.", "Say p is a percent of the observations, not a percent of the max."), ("Ghi phần mềm, vì bậc có thể lệch.", "Name the software, because the step can differ.")],
    ("Không có một công thức phân vị duy nhất mà mọi phần mềm dùng. Một định nghĩa lấy quan sát ở một bậc. Một định nghĩa nội suy giữa hai bậc. Với mẫu nhỏ, hai cách lệch nhìn thấy được. IQR vẫn là Q3 − Q1 của đúng cách cắt đó. Đừng trộn Q1 của máy này với Q3 của máy kia.", "There is no single percentile formula every piece of software uses. One definition takes the observation at a rank. Another interpolates between two ranks. On a small sample the two differ visibly. IQR is still Q3 − Q1 of that same cut. Don't mix one machine's Q1 with another machine's Q3."),
    ("Phân vị 90 không phải 0,9 nhân số lớn nhất.", "The 90th percentile is not 0.9 times the maximum."),
)

K(
    "ds-range", DESC, "s-828cd45acaa1", "Range", "Mô tả", "S4 Biên", "M1",
    ("Khoảng biến thiên chỉ nhìn hai đầu", "The range only looks at the two ends."),
    ("Để một điểm cực không được gọi là độ rộng của cả đám.", "So one extreme is not called the width of the whole group."),
    ("Vị trí trong dãy đã có. Độ rộng bắt đầu bằng cái thô nhất: max trừ min.", "A place in the list is already there. Width starts with the crudest one: max minus min."),
    ("nhìn hai đầu", "looks at the ends"), ("cả đám ở giữa", "the middle is ignored"),
    ("Range = giá trị lớn nhất trừ giá trị nhỏ nhất. Mọi số ở giữa không đổi range.", "Range = the largest value minus the smallest. Every number in the middle leaves the range unchanged."),
    ("Dãy 2, 4, 4, 4, 5, 5, 7, 9 có range 7. Đổi các số 4 thành 5, range vẫn 7.", "The list 2, 4, 4, 4, 5, 5, 7, 9 has range 7. Change the 4s into 5s and the range is still 7."),
    ("Dùng range như một cái nhìn nhanh về hai đầu, không phải độ phân tán.", "Use the range as a quick look at the two ends, not as the spread."),
    ("Ví dụ minh họa: một tuần 9 form và một tuần 2 form. Range 7. Sáu tuần còn lại có thể nằm sát nhau. Range không kể chuyện đó.", "Illustration: one week at 9 forms and one week at 2. Range 7. The other six weeks can sit close together. The range does not tell that story."),
    [("Lấy max và min của đúng cột số.", "Take the max and the min of the numeric column."), ("Nhắc là một điểm cực đổi được range.", "Remember that one extreme can change the range."), ("Muốn kể phần giữa thì dùng một thước khác.", "If you want the middle, use a different measure.")],
    ("Range không chia cho n và không dùng độ lệch từng điểm. Nó không có đơn vị riêng: đơn vị là đơn vị của cột. Một lỗi gõ 90 thay vì 9 làm range nhảy, trong khi phần lớn các tuần không đổi. Đó là lý do nó đứng trước phương sai, không thay phương sai.", "The range does not divide by n and does not use each point's gap. It has no private unit: the unit is the column's unit. Typing 90 instead of 9 jumps the range, while most weeks do not change. That is why it comes before variance. It does not replace variance."),
    ("Hai đầu không phải cả đám.", "The two ends are not the whole group."),
    formula="\\mathrm{range}=\\max - \\min",
    symbols=(("\\max", "giá trị lớn nhất của cột", "the largest value in the column"),),
)

K(
    "ds-mad", DESC, "s-828cd45acaa1", "Mean absolute deviation", "Mô tả", "S4 Độ lệch tuyệt đối", "M1",
    ("Trung bình của độ lệch tuyệt đối, không phải độ lệch chuẩn", "The mean of the absolute gaps, not the standard deviation."),
    ("Để một «độ lệch trung bình» không bị đem đi căn như phương sai.", "So an “average deviation” is not square-rooted like a variance."),
    ("Range chỉ hai đầu. MAD nhìn từng điểm, nhưng không bình phương.", "The range sees only the ends. MAD sees each point, but it does not square."),
    ("chia n, không căn", "divide by n, no root"), ("phương sai thì bình phương", "variance squares"),
    ("MAD ở đây là trung bình của |x − trung bình|. Chia cho n. Không lấy căn. Không chia n−1, trừ khi bạn nói một định nghĩa khác.", "MAD here is the mean of |x − mean|. Divide by n. Don't take a root. Don't divide by n−1 unless you name a different definition."),
    ("Dãy 2, 4, 4, 4, 5, 5, 7, 9. Trung bình 5. Độ lệch tuyệt đối 3, 1, 1, 1, 0, 0, 2, 4. Tổng 12. 12/8 = 1,5.", "The list 2, 4, 4, 4, 5, 5, 7, 9. The mean is 5. Absolute gaps 3, 1, 1, 1, 0, 0, 2, 4. Sum 12. 12/8 = 1.5."),
    ("Cộng |lệch|, chia n, dừng. Đừng căn.", "Add the absolute gaps, divide by n, stop. Don't take a root."),
    ("Ví dụ minh họa: 1,5 form là độ lệch tuyệt đối trung bình quanh 5. Độ lệch chuẩn mẫu của cùng dãy là khoảng 2,14, vì bình phương rồi chia n−1 rồi mới căn. Hai số không thay nhau.", "Illustration: 1.5 forms is the mean absolute gap around 5. The sample standard deviation of the same list is about 2.14, because you square, divide by n−1, then take a root. The two numbers do not stand in for each other."),
    [("Lấy trung bình trước.", "Take the mean first."), ("Cộng các độ lệch đã bỏ dấu, chia cho n.", "Add the gaps with the sign removed, divide by n."), ("Đừng gọi kết quả là độ lệch chuẩn.", "Don't call the result a standard deviation.")],
    ("Có nhiều định nghĩa MAD. Một cái chia cho trung bình, một cái chia cho trung vị, một cái dùng trung vị của độ lệch tuyệt đối và nhân một hằng để so với độ lệch chuẩn. Trong sổ này, ví dụ 12/8 = 1,5 là trung bình cộng của |x − mean| trên cả 8 số. Phương sai mẫu của dãy này là 32/7, khoảng 4,57, và căn là khoảng 2,14. Không đường nào từ 1,5 tới 2,14 bằng một lần căn.", "There are several definitions of MAD. One divides by the mean, one centers on the median, one takes the median of the absolute gaps and multiplies a constant to compare with a standard deviation. In this notebook, the example 12/8 = 1.5 is the arithmetic mean of |x − mean| over all 8 numbers. The sample variance of this list is 32/7, about 4.57, and the root is about 2.14. There is no path from 1.5 to 2.14 that is just a square root."),
    ("1,5 không phải độ lệch chuẩn.", "1.5 is not the standard deviation."),
    formula="\\mathrm{MAD}=\\dfrac{1}{n}\\sum |x_i-\\bar x|",
    symbols=(("n", "số quan sát, ở ví dụ là 8", "the number of observations, 8 in the example"),),
)

K(
    "sql-like", C2, "s-59c9d48947dd", "LIKE and regex", "C2 · SQL", "S3 Mẫu chữ", "Database Design and Introduction to MySQL",
    ("LIKE là mẫu đơn giản. Regex là một việc khác", "LIKE is a simple pattern. A regex is a different job."),
    ("Để một mẫu «có chữ form trong đó» không bị viết thành một biểu thức chính quy mỗi máy hiểu một kiểu.", "So a pattern “contains the text form” is not written as a regular expression each engine reads differently."),
    ("Đã đếm và đã nhóm. Lọc chữ là một kiểu WHERE nữa, và dễ nhầm với regex.", "You can already count and group. Filtering text is another WHERE, and it is easy to confuse with a regex."),
    ("% là mọi chữ", "% is any text"), ("regex là luật khác", "a regex is another rule"),
    ("LIKE dùng % cho một cụm bất kỳ và _ cho một ký tự. REGEXP hay RLIKE là biểu thức chính quy, tùy máy, không cùng một thư viện với LIKE.", "LIKE uses % for any stretch and _ for one character. REGEXP or RLIKE is a regular expression, depending on the engine, and it is not the same library as LIKE."),
    ("WHERE kênh LIKE '%tok' khớp tiktok. Nó cũng khớp một chữ rác kết thúc bằng tok. Không có mỏ neo thì đừng tưởng đó là cả ô.", "WHERE channel LIKE '%tok' matches tiktok. It also matches junk that ends in tok. With no anchor, don't treat it as the whole cell."),
    ("Việc «chứa một cụm» thì LIKE. Việc «đúng một luật ký tự» thì regex, và ghi máy.", "“Contains a piece” is LIKE. “Matches a character rule” is a regex, and you name the engine."),
    ("Ví dụ minh họa: mã dạng F- theo sau hai chữ số. LIKE 'F-__' là một F, một gạch, hai ký tự. Đó chưa phải một regex «đúng hai chữ số». Trên nhiều máy, regex phải viết riêng và có thể không dùng được mục lục.", "Illustration: a code shaped like F- and then two digits. LIKE 'F-__' is one F, one dash, two characters. That is not yet a regex for “exactly two digits”. On many engines the regex is written separately and may not use an index."),
    [("Bắt đầu bằng một cụm: 'tok%'. Kết thúc: '%tok'. Chứa: '%tok%'.", "Starts with a piece: 'tok%'. Ends: '%tok'. Contains: '%tok%'."), ("Cần đúng chữ số hoặc một luật: dùng regex của đúng máy, và nói tên máy.", "If you need real digits or a rule, use that engine's regex, and name the engine."), ("Đừng regex một cột ngày. Dùng hàm ngày.", "Don't regex a date column. Use a date function.")],
    ("Một mẫu không neo khớp ở giữa ô. Hoa thường tùy collation, không tùy tâm trạng. Hàm hoặc regex bọc lên cột thường làm mục lục trên cột đó không được dùng. LIKE không phải một cách an toàn để tách một chuỗi ngày đang để dạng chữ. Đưa về kiểu ngày.", "An unanchored pattern matches the middle of the cell. Case depends on the collation, not on your mood. A function or a regex wrapped around a column usually means an index on that column is not used. LIKE is not a safe way to split a date that was stored as text. Cast it to a date."),
    ("%tok không phải «đúng kênh tok».", "%tok is not “exactly the channel tok”."),
)

K(
    "sql-date", C2, "s-59c9d48947dd", "Dates", "C2 · SQL", "S3 Ngày", "Database Design and Introduction to MySQL",
    ("Ngày là ngày. Chữ trông giống ngày thì không cộng được lịch", "A date is a date. Text that looks like a date does not do calendar arithmetic."),
    ("Để «hôm qua» không thành một chuỗi cắt bằng tay.", "So “yesterday” does not become a string you slice by hand."),
    ("LIKE đã là chuyện chữ. Ngày là một kiểu riêng, và bọc hàm lên cột ngày có thể bỏ mục lục.", "LIKE was about text. A date is its own type, and wrapping a function around a date column can drop the index."),
    ("kiểu ngày", "a date type"), ("chữ cắt tay", "text sliced by hand"),
    ("Lưu ngày bằng kiểu ngày. YEAR, DATE, DATEDIFF làm việc lịch. Cắt chuỗi là làm việc chữ, và lệch khi format đổi.", "Store a date as a date type. YEAR, DATE, DATEDIFF do calendar work. Slicing a string does text work, and it breaks when the format changes."),
    ("Thiếu một ngày trong bảng là không có dòng. Không phải dòng đó bằng 0 form, trừ khi bạn đã tạo dòng 0.", "A missing day in the table is a missing row. It is not a row of 0 forms, unless you created that 0 row."),
    ("Đừng YEAR() lên cột nếu bạn đang cần mục lục của cột đó để lọc một khoảng.", "Don't wrap YEAR() on the column if you need that column's index to filter a range."),
    ("Ví dụ minh họa: lọc một tháng bằng ngày >= '2026-11-01' và ngày < '2026-12-01'. Khoảng nửa mở này không phụ thuộc số ngày của tháng. Bọc MONTH(ngày) = 11 có thể không dùng mục lục.", "Illustration: filter a month with day >= '2026-11-01' and day < '2026-12-01'. This half-open window does not depend on how many days the month has. Wrapping MONTH(day) = 11 may not use the index."),
    [("Giữ kiểu DATE hoặc TIMESTAMP, đừng để chữ.", "Keep a DATE or TIMESTAMP type. Don't store text."), ("Lọc bằng một khoảng, đừng bọc hàm lên cột nếu có thể.", "Filter with a range. Don't wrap a function on the column if you can avoid it."), ("Ngày không có dòng thì đừng kể là 0.", "A day with no row is not a 0.")],
    ("Múi giờ làm một TIMESTAMP lệch ngày khi bạn chỉ nhìn phần ngày. Nói múi giờ của cột. DATEDIFF đếm theo quy tắc của máy, thường là số biên ngày, không phải số giờ chia 24. Một chuỗi '11/02/2026' là không rõ ngày 2 tháng 11 hay ngày 11 tháng 2. Đừng để kiểu chữ rồi đoán.", "A time zone makes a TIMESTAMP cross a date boundary when you only look at the date part. Name the column's zone. DATEDIFF counts by the engine's rule, usually a count of date boundaries, not hours divided by 24. A string '11/02/2026' is unclear between 2 November and 11 February. Don't store text and then guess."),
    ("Cắt chuỗi ngày là một lỗi đang chờ format đổi.", "Slicing a date string is a bug waiting for the format to change."),
)

K(
    "sql-nest", C2, "s-59c9d48947dd", "Subqueries", "C2 · SQL", "S3 Câu lồng", "Database Design and Introduction to MySQL",
    ("Câu lồng không «cao cấp hơn» một lần nối", "A subquery is not “more advanced” than a join."),
    ("Để một câu tương quan không bị giữ chỉ vì nó trông khó.", "So a correlated subquery is not kept just because it looks hard."),
    ("Đã lọc ngày và chữ. Câu lồng là một cách viết «trong số những dòng thỏa một câu khác».", "You can filter dates and text. A subquery is one way to write “among the rows that satisfy another query”."),
    ("chạy một lần", "runs once"), ("chạy từng dòng ngoài", "runs per outer row"),
    ("Câu con không tương quan chạy độc lập. Câu tương quan chạy lại theo từng dòng của câu ngoài, vì nó dùng cột của dòng đó.", "An uncorrelated subquery runs on its own. A correlated one runs again for each outer row, because it uses that row's columns."),
    ("«Khách có form cao hơn trung bình kênh của chính họ» là tương quan. Nó không tự nhanh hơn một lần JOIN với bảng trung bình.", "“Customers above the mean of their own channel” is correlated. It is not automatically faster than a JOIN to a table of means."),
    ("Chọn câu đọc được. Đo nếu chậm. Đừng nâng cấp bằng cách lồng thêm.", "Pick the query you can read. Measure if it is slow. Don't upgrade by nesting more."),
    ("Ví dụ minh họa: IN (SELECT mã FROM ...) là một đám mã. JOIN với bảng đó thường là cùng một ý, và dễ thấy hạt hơn. NULL trong đám làm IN và NOT IN khác nhau. NOT IN gặp NULL có thể không trả dòng nào.", "Illustration: IN (SELECT code FROM ...) is a set of codes. A JOIN to that table is often the same idea, and the grain is easier to see. NULL inside the set makes IN and NOT IN differ. NOT IN that meets a NULL can return no rows."),
    [("Không dùng cột ngoài: câu con chạy một lần.", "If it does not use an outer column, the subquery runs once."), ("Có dùng cột ngoài: nói đó là tương quan.", "If it uses an outer column, say it is correlated."), ("NULL trong IN: đừng đoán NOT IN vẫn là phần bù.", "NULL inside IN: don't assume NOT IN is still the complement.")],
    ("EXISTS hỏi có dòng nào không, không hỏi giá trị. Nó thường đỡ hơn IN khi bạn không cần cột. Một câu tương quan đúng vẫn có thể quét cả bảng trong cho mỗi dòng ngoài. JOIN với một bảng đã nhóm là cách để thấy mình đang nhân hạt hay không. «Khó đọc» không phải một tối ưu.", "EXISTS asks whether any row exists. It does not ask for a value. It is often kinder than IN when you don't need the column. A correct correlated subquery can still scan the inner table for every outer row. A JOIN to an aggregated table is how you see whether you are multiplying the grain. “Hard to read” is not an optimization."),
    ("Lồng thêm không làm câu đúng hơn.", "Nesting more does not make the query righter."),
)

K(
    "sql-nwin", C2, "s-02f03ea9b31c", "Named window", "C2 · SQL", "S1 Đặt tên cửa sổ", "Advanced SQL and Best Practices",
    ("Đặt tên cửa sổ là đặt tên. Nghĩa không đổi", "Naming a window names it. The meaning does not change."),
    ("Để một WINDOW viết một lần không bị đọc thành một kiểu tính mới.", "So a WINDOW written once is not read as a new kind of calculation."),
    ("Lag và frame đã có nghĩa. Đặt tên chỉ để khỏi chép lại cùng một OVER.", "Lag and frame already have a meaning. A name only saves you from copying the same OVER."),
    ("cùng một cửa", "the same window"), ("một phép mới", "a new operation"),
    ("WINDOW w AS (PARTITION BY ... ORDER BY ...) rồi OVER w dùng lại đúng cửa đó.", "WINDOW w AS (PARTITION BY ... ORDER BY ...) and then OVER w reuses that exact window."),
    ("Hai hàm dùng chung một cái tên cửa sổ thì cùng một cách chia nhóm và cùng một khung. Không phải một hàm được «ưu tiên».", "Two functions that share a window name share the partition and the frame. One function is not “preferred”."),
    ("Dùng tên khi một OVER dài được lặp. Đừng đổi nghĩa nhờ cái tên.", "Use a name when a long OVER is repeated. Don't change the meaning with the name."),
    ("Ví dụ minh họa: tổng chạy và lag cùng PARTITION BY kênh ORDER BY ngày. Đặt tên một lần. Đổi frame ở một hàm thì hàm kia không tự đổi, trừ khi nó dùng đúng tên đó.", "Illustration: a running total and a lag share PARTITION BY channel ORDER BY day. Name it once. Change the frame on one function and the other does not change, unless it uses that same name."),
    [("Nhắc lại một OVER dài: đặt tên.", "A long OVER you repeat: give it a name."), ("Kiểm tra hàm nào đang dùng tên đó.", "Check which functions use that name."), ("Tên không sửa một tuần bị thiếu trong frame.", "The name does not fix a week that the frame is missing.")],
    ("Mệnh đề WINDOW là bí danh của một đặc tả. Máy không chạy nó thành một bảng trung gian mà bạn nhìn thấy. Đổi tên không đổi kết quả. Hai tên khác nhau là hai đặc tả, dù mắt thấy chúng giống nhau. Frame mặc định vẫn là mặc định của từng hàm nếu bạn không ghi đè.", "A WINDOW clause is an alias of a specification. The engine does not run it into a middle table you can see. Renaming it does not change the result. Two different names are two specifications, even if they look the same. The default frame is still each function's default if you do not override it."),
    ("Tên cửa sổ không phải một phép tính mới.", "A window's name is not a new calculation."),
)

K(
    "sql-proc", C2, "s-f0c3fe757f52", "Procedures and functions", "C2 · SQL", "S2 Thủ tục", "Advanced SQL and Best Practices",
    ("Thủ tục là một kịch bản đã lưu. Nó có thể làm việc ngoài câu hỏi", "A procedure is a saved script. It can do work outside the question."),
    ("Để một nút «chạy thủ tục» không bị tưởng là một SELECT trong suốt.", "So a “run the procedure” button is not mistaken for a transparent SELECT."),
    ("CASE đã để luật trong câu. Thủ tục để cả một kịch bản trên máy, và người đọc câu SELECT không thấy hết.", "CASE put a rule in the query. A procedure puts a whole script on the server, and a person reading the SELECT does not see all of it."),
    ("một câu đọc được", "a query you can read"), ("một kịch bản giấu", "a hidden script"),
    ("Stored procedure là một chương trình đã lưu, có thể có nhiều câu, có thể ghi bảng. Hàm (UDF) trả một giá trị và đáng lẽ không giấu một lần quét bảng.", "A stored procedure is a saved program. It can hold many statements and it can write tables. A function (UDF) returns a value and should not hide a table scan."),
    ("Một hàm bọc quanh cột trong WHERE có thể chạy từng dòng và bỏ mục lục. Người đọc chỉ thấy tên hàm.", "A function wrapped around a column in WHERE can run per row and skip the index. The reader only sees the function's name."),
    ("Chỉ cần một câu cho dễ đọc thì dùng CTE. Đừng nâng thành thủ tục.", "If you only need a query that is easier to read, use a CTE. Don't promote it into a procedure."),
    ("Ví dụ minh họa: một thủ tục «chốt tuần» vừa SELECT vừa INSERT vào bảng đã chốt. Gọi lại là ghi thêm. Đó không phải một view. Một UDF tính thuế mà bên trong lại quét bảng giá thì cái giá đó không hiện trên câu ngoài.", "Illustration: a procedure “close the week” both SELECTs and INSERTs into a closed table. Call it again and it writes more. That is not a view. A tax UDF that scans a price table on the inside does not show that price on the outer query."),
    [("Chỉ đọc và đặt tên: CTE hoặc view.", "Read only, and give it a name: a CTE or a view."), ("Có ghi bảng: gọi là thủ tục, và nói nó ghi đâu.", "If it writes a table, call it a procedure, and say where it writes."), ("Hàm trong WHERE: hỏi nó có bọc cột và có quét bảng không.", "A function in WHERE: ask whether it wraps a column and whether it scans a table.")],
    ("Quyền thực thi một thủ tục không cho người gọi thấy mọi bảng bên trong. Đó có thể là điều bạn muốn, và cũng là điều làm một số sai khó tìm. Hàm đáng lẽ thuần: cùng đầu vào, cùng đầu ra, không ghi. Một hàm ghi bảng là một thủ tục đang đội tên hàm. Đừng để luật thuế năm nay trong một thủ tục không có người chủ.", "Permission to execute a procedure does not let the caller see every table inside. That can be what you want, and it is also how a wrong number hides. A function should be plain: same inputs, same output, no writes. A function that writes a table is a procedure wearing a function's name. Don't leave this year's tax rule in a procedure with no owner."),
    ("Giấu kịch bản không làm số đúng hơn.", "Hiding the script does not make the number righter."),
)

K(
    "sql-cur", C2, "s-f0c3fe757f52", "Cursors", "C2 · SQL", "S2 Từng dòng", "Advanced SQL and Best Practices",
    ("Con trỏ đi từng dòng. Một câu đi cả tập", "A cursor walks row by row. A query walks the whole set."),
    ("Để một vòng «cho chắc» không thay một câu đã nói được bằng tập hợp.", "So a loop “just to be sure” does not replace a query that can already say it as a set."),
    ("Thủ tục đã có thể giấu nhiều câu. Con trỏ là kiểu giấu chậm nhất: cầm một dòng, làm gì đó, sang dòng sau.", "A procedure can already hide many statements. A cursor is the slowest kind of hiding: hold one row, do something, move on."),
    ("cả tập một lần", "the whole set at once"), ("từng dòng", "one row at a time"),
    ("Cursor mở một kết quả rồi lần từng dòng trong chương trình. Set-based là một câu cho cả đám.", "A cursor opens a result and then steps through it in a program. Set-based is one statement for the whole group."),
    ("Cộng form theo kênh bằng một vòng FETCH là viết lại GROUP BY, chậm hơn, và dễ quên CLOSE.", "Summing forms by channel with a FETCH loop is a rewrite of GROUP BY, slower, and easy to forget to CLOSE."),
    ("Viết một câu. Con trỏ chỉ khi bước sau là một tác động ngoài câu, từng dòng một, và bạn chịu cái chậm.", "Write one statement. A cursor only when the next step is a side effect outside the query, one row at a time, and you accept the slowness."),
    ("Ví dụ minh họa: gửi một thư cho từng khách đủ điều kiện có thể cần đi từng dòng, vì thư là một tác động ngoài. Tổng form thì không. Tổng là một câu.", "Illustration: sending one email per customer who qualifies might need a row at a time, because the email is an outside effect. A total of forms does not. A total is one statement."),
    [("Việc cộng, đếm, lọc: một câu.", "Sums, counts, filters: one statement."), ("Có tác động ngoài từng dòng: khi đó mới hỏi tới con trỏ.", "An outside effect per row: only then ask about a cursor."), ("Mở thì đóng. Một con trỏ quên đóng là một phiên bị giữ.", "If you open it, close it. A cursor left open holds a session.")],
    ("Con trỏ giữ trạng thái: mở, lấy dòng, hết, đóng. Quên đóng trên một phiên web là rò. Một câu tập hợp để máy chọn cách đọc. Con trỏ cấm máy làm vậy. Nó không «chính xác hơn» GROUP BY. Nó là một vòng lập trình ngồi trên SQL.", "A cursor holds state: open, fetch, done, close. Forgetting to close it on a web session leaks. A set statement lets the engine choose how to read. A cursor forbids that. It is not “more exact” than GROUP BY. It is a programming loop sitting on SQL."),
    ("Đi từng dòng không làm phép cộng đúng hơn.", "Walking row by row does not add more correctly."),
)

K(
    "ens-oob", C4, "s-d3c7e1ba6c5a", "Out of bag", "C4 · Advanced ML", "S1 Dòng bị bỏ", "Bagging and Random Forests",
    ("Dòng túi không cầm là điểm của cây đó. Không phải tháng sau", "A row the bag did not hold is that tree's score. Not next month."),
    ("Để một điểm out-of-bag không bị brief thành một tuần chưa xảy ra.", "So an out-of-bag score is not briefed as a week that has not happened."),
    ("Mỗi cây một túi, có dòng bị bỏ. Những dòng bị bỏ đó chấm đúng cây đó, nếu chúng thực sự là người khác.", "Each tree has a bag, and some rows were left out. Those left-out rows score that tree, if they are really other people."),
    ("dòng bị bỏ", "a row left out"), ("không phải tháng sau", "not next month"),
    ("Out-of-bag là các dòng không được rút vào túi của một cây. Chúng có thể chấm cây đó. Chúng vẫn thuộc tập học, không phải một tháng tương lai.", "Out-of-bag means the rows not drawn into a tree's bag. They can score that tree. They still belong to the learning set. They are not a future month."),
    ("Nhân bản người hiếm trước khi chia tập thì một bản sao có thể nằm trong túi và bản sao kia bị gọi là «ngoài túi». Điểm đẹp vì cùng một người.", "Duplicate the rare person before the split and one copy can sit in the bag while the other is called “out of bag”. The score looks good because it is the same person."),
    ("OOB chỉ sau khi đã tách tập chấm cuối. Và không gọi nó là tương lai.", "OOB only after the final scoring set is already split off. And don't call it the future."),
    ("Ví dụ minh họa: 1.000 khách ở tập học. Một cây bỏ khoảng một phần ba. Phần ba đó chấm cây này. Tuần sau không nằm trong 1.000 khách đó. Nhân đôi 8 khách rời trước lúc chia là cách làm OOB nói dối.", "Illustration: 1,000 customers in the learning set. One tree leaves out about a third. That third scores this tree. Next week is not inside those 1,000 customers. Duplicating 8 leavers before the split is how OOB starts lying."),
    [("Tách tập chấm cuối trước.", "Split off the final scoring set first."), ("OOB là dòng học không vào túi của cây đó.", "OOB is a learning row that missed that tree's bag."), ("Đừng nhân bản trước khi rút túi.", "Don't duplicate before you draw the bags.")],
    ("Mỗi cây một tập OOB khác nhau. Trung bình các điểm đó là một ước lượng trên tập học, thường lạc quan hơn một tập để riêng theo thời gian, vì các dòng OOB vẫn cùng một giai đoạn với túi. Nó không thay một lần kiểm theo thời gian. Trùng người giữa túi và OOB làm ước lượng này hỏng theo đúng cách rò rỉ.", "Each tree has a different OOB set. The average of those scores is an estimate on the learning set, usually more optimistic than a set held out by time, because the OOB rows are still from the same period as the bag. It does not replace a check through time. The same person in both the bag and the OOB breaks this estimate in exactly the way leakage does."),
    ("Ngoài túi không phải là tuần sau.", "Out of the bag is not next week."),
)

K(
    "imb-smote", C4, "s-6db41977b700", "SMOTE", "C4 · Advanced ML", "S2 Điểm nằm giữa", "Bagging and Random Forests",
    ("SMOTE tạo một điểm nằm giữa. Không tạo một khách", "SMOTE makes a point that sits between. It does not make a customer."),
    ("Để một điểm tổng hợp không được đưa vào tập chấm.", "So a synthetic point is not allowed into the scoring set."),
    ("Nhân đôi dòng hiếm không tạo khách mới. SMOTE cũng không. Nó chỉ đặt một điểm trên đoạn nối hai dòng hiếm.", "Duplicating a rare row does not create a customer. Neither does SMOTE. It only places a point on the segment between two rare rows."),
    ("một khách thật", "a real customer"), ("một điểm nằm giữa", "a point in between"),
    ("SMOTE nội suy giữa các dòng thiểu số trong không gian các cột số. Điểm mới không phải một người đã mua.", "SMOTE interpolates between minority rows in the space of the numeric columns. The new point is not a person who bought."),
    ("Làm SMOTE trước khi chia tập thì một điểm nằm giữa có thể đứng một chân ở tập học và một chân ở tập chấm. Đó là rò.", "Run SMOTE before the split and a point in between can stand with one foot in the learning set and one foot in the scoring set. That is leakage."),
    ("Chia tập trước. SMOTE chỉ trên tập học. Đừng chấm các điểm giả.", "Split first. SMOTE only on the learning set. Don't score the fake points."),
    ("Ví dụ minh họa: hai khách rời, một người chi 2 triệu, một người chi 4 triệu. SMOTE có thể thêm một điểm 3 triệu. Không có khách nào chi 3 triệu. Nếu 3 triệu lọt sang tập chấm, mô hình được chấm bằng một người không tồn tại.", "Illustration: two leavers, one spent 2 million, one spent 4. SMOTE can add a point at 3 million. Nobody spent 3 million. If that 3 million lands in the scoring set, the model is scored on a person who does not exist."),
    [("Chia tập học và tập chấm trước.", "Split learning and scoring first."), ("Chỉ nội suy trên tập học.", "Interpolate only on the learning set."), ("Tập chấm giữ nguyên các dòng thật.", "The scoring set keeps the real rows only.")],
    ("Nội suy giả định rằng đoạn thẳng giữa hai dòng hiếm vẫn là lớp hiếm. Với cột chữ, đoạn thẳng không có nghĩa. Làm SMOTE trên cả file rồi mới chia là rò, cùng họ với việc nhân bản trước lúc chia. SMOTE không sửa một nhãn sai. Nó nhân các nhãn đang có, kể cả nhãn bẩn.", "Interpolation assumes the straight segment between two rare rows is still the rare class. On a text column a straight segment means nothing. Running SMOTE on the whole file and splitting afterwards is leakage, the same family as duplicating before the split. SMOTE does not fix a wrong label. It multiplies the labels you already have, including dirty ones."),
    ("Điểm nằm giữa không phải một khách thứ ba.", "A point in between is not a third customer."),
)
