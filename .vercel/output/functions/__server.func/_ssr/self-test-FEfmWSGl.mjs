//#region node_modules/.nitro/vite/services/ssr/assets/self-test-FEfmWSGl.js
var permut = [{
	"q": ["Tình huống nào cần dùng hoán vị?", "Which situation calls for permutations?"],
	"o": [
		["Xếp 3 trong 8 KOL vào 3 khung giờ livestream khác nhau.", "Assigning 3 of 8 KOLs to 3 different livestream time slots."],
		["Chọn 3 trong 8 KOL vào một gói seeding làm việc cùng lúc.", "Choosing 3 of 8 KOLs for one seeding package that works simultaneously."],
		["Đếm số nhóm 3 người có thể lập từ 8 người.", "Counting how many 3-person groups can be formed from 8 people."],
		["Chọn 3 voucher giống hệt nhau từ một kho.", "Picking 3 identical vouchers from stock."]
	],
	"a": 0,
	"w": ["Hoán vị dùng khi vị trí khác nhau thì phương án khác nhau, như mở màn hay chốt. Ba tình huống còn lại không phân biệt thứ tự nên đó là bài của tổ hợp.", "Permutations apply when different positions make different outcomes, such as opening versus closing. The other three ignore order, so they are combination problems."]
}, {
	"q": ["Có 10 mẫu quảng cáo. Chọn 3 mẫu và đặt vào 3 vị trí banner khác nhau (trên, giữa, dưới). Có bao nhiêu phương án?", "There are 10 ad creatives. Choose 3 and place them in 3 different banner positions (top, middle, bottom). How many arrangements are there?"],
	"o": [
		["120", "120"],
		["1.000", "1,000"],
		["30", "30"],
		["720", "720"]
	],
	"a": 3,
	"w": ["10 × 9 × 8 = 720. Con số 120 là số nhóm khi không quan tâm thứ tự (720 chia 6), còn 1.000 sai vì mẫu đã đặt rồi thì không dùng lại.", "10 × 9 × 8 = 720. The figure 120 is the number of groups when order is ignored (720 divided by 6), and 1,000 is wrong because a creative already placed cannot be reused."]
}];
var combin = [{
	"q": ["Vì sao tính tổ hợp phải chia hoán vị cho 3!?", "Why do we divide the permutation count by 3! when computing combinations?"],
	"o": [
		["Vì mỗi nhóm 3 người bị đếm 6 lần trong hoán vị, một lần cho mỗi cách sắp xếp.", "Because each group of 3 is counted 6 times in the permutation count, once per ordering."],
		["Vì có 3 người nên phải chia cho 3.", "Because there are 3 people, we divide by 3."],
		["Vì tổng số KOL luôn phải chia cho số khung giờ.", "Because the total number of KOLs must be divided by the number of slots."],
		["Vì tổ hợp luôn nhỏ hơn hoán vị đúng 10 lần.", "Because combinations are always exactly 10 times smaller than permutations."]
	],
	"a": 0,
	"w": ["3 người có 3! = 6 cách xếp, nên 336 hoán vị đếm mỗi nhóm 6 lần. Chia cho 3 thay vì 3! sẽ vẫn đếm lặp.", "Three people can be arranged 3! = 6 ways, so the 336 permutations count each group 6 times. Dividing by 3 instead of 3! would still double count."]
}, {
	"q": ["Khách chọn 4 địa điểm pop-up từ 10 địa điểm, chạy đồng thời, không có thứ tự. Có bao nhiêu cách chọn?", "A client picks 4 pop-up locations out of 10, run simultaneously with no order. How many ways are there to choose?"],
	"o": [
		["5.040", "5,040"],
		["840", "840"],
		["40", "40"],
		["210", "210"]
	],
	"a": 3,
	"w": ["C(10,4) = 5.040 / 4! = 5.040 / 24 = 210. Con số 5.040 là hoán vị, còn 840 là do chia nhầm cho 3! thay vì 4!.", "C(10,4) = 5,040 / 4! = 5,040 / 24 = 210. The figure 5,040 is the permutation count, and 840 comes from dividing by 3! instead of 4!."]
}];
var events = [{
	"q": ["Hai biến cố xung khắc, mỗi cái có xác suất lớn hơn 0. Điều nào đúng?", "Two mutually exclusive events each have probability greater than 0. Which is correct?"],
	"o": [
		["Chúng luôn phụ thuộc nhau, vì biết cái này xảy ra thì chắc chắn cái kia không xảy ra.", "They are always dependent, since knowing one occurred guarantees the other did not."],
		["Chúng độc lập vì không bao giờ cùng xảy ra.", "They are independent because they never occur together."],
		["Chúng độc lập khi tổng hai xác suất bằng 1.", "They are independent when the two probabilities sum to 1."],
		["Chúng có thể vừa xung khắc vừa độc lập nếu xác suất đủ nhỏ.", "They can be both mutually exclusive and independent if the probabilities are small enough."]
	],
	"a": 0,
	"w": ["Xung khắc cho P(A∩B) = 0, trong khi độc lập đòi P(A∩B) = P(A) × P(B) > 0. Hai điều này mâu thuẫn, nên xung khắc (với xác suất dương) kéo theo phụ thuộc.", "Mutual exclusivity gives P(A∩B) = 0, while independence requires P(A∩B) = P(A) × P(B) > 0. These conflict, so exclusive events with positive probabilities are dependent."]
}, {
	"q": ["P(lượt truy cập đến từ GDN) = 0,35. Xác suất một lượt không đến từ GDN là bao nhiêu?", "P(visit comes from GDN) = 0.35. What is the probability that a visit does not come from GDN?"],
	"o": [
		["0,35", "0.35"],
		["0,65", "0.65"],
		["0,70", "0.70"],
		["0,0", "0.0"]
	],
	"a": 1,
	"w": ["Biến cố đối có xác suất 1 − 0,35 = 0,65. Chọn 0,35 là lấy nguyên biến cố gốc, còn 0,70 là nhân đôi nhầm.", "The complement has probability 1 − 0.35 = 0.65. Choosing 0.35 repeats the original event, and 0.70 comes from wrongly doubling it."]
}];
var rv = [{
	"q": ["Biến nào sau đây là biến ngẫu nhiên rời rạc?", "Which of the following is a discrete random variable?"],
	"o": [
		["Số form nhận được trong một ngày.", "The number of forms received in a day."],
		["Số giây khách ở lại trang.", "The number of seconds a visitor stays on the page."],
		["Thời gian tải trang tính bằng giây (số thực bất kỳ).", "Page load time in seconds (any real number)."],
		["Tỷ lệ thoát trang đo chính xác từ 0% đến 100%.", "Bounce rate measured exactly between 0% and 100%."]
	],
	"a": 0,
	"w": ["Số form chỉ nhận 0, 1, 2, … nên đếm được. Ba biến còn lại nhận giá trị bất kỳ trong một khoảng nên là liên tục.", "The number of forms takes only 0, 1, 2, … so it is countable. The other three take any value in an interval, so they are continuous."]
}, {
	"q": ["Gán X = 1 nếu lượt mua hàng, X = 0 nếu không. Với 8 lượt: 0, 1, 0, 0, 1, 1, 0, 0, trung bình của X là bao nhiêu?", "Assign X = 1 if a visit buys and X = 0 otherwise. For 8 visits: 0, 1, 0, 0, 1, 1, 0, 0, what is the mean of X?"],
	"o": [
		["3", "3"],
		["0,625", "0.625"],
		["0,375", "0.375"],
		["0,5", "0.5"]
	],
	"a": 2,
	"w": ["Tổng X = 3, chia cho 8 lượt được 0,375, chính là tỷ lệ mua hàng. Con số 3 là tổng chứ chưa chia, 0,625 là tỷ lệ không mua, và 0,5 chỉ là trung bình của hai giá trị 0 và 1.", "The sum of X is 3, and dividing by 8 visits gives 0.375, which is the purchase rate. The 3 is the unscaled total, 0.625 is the non-purchase rate, and 0.5 merely averages the two values 0 and 1."]
}];
var dist = [{
	"q": ["Hai ngày có cùng số form trung bình. Điều nào đúng?", "Two days have the same average number of forms. Which statement is correct?"],
	"o": [
		["Phân phối của chúng chắc chắn giống nhau.", "Their distributions must be identical."],
		["Tổng xác suất của ngày có phân phối rộng hơn sẽ lớn hơn 1.", "The day with the wider distribution has total probability above 1."],
		["Trung bình đã đủ để biết xác suất của từng giá trị.", "The mean is enough to know the probability of each value."],
		["Phân phối xác suất của chúng vẫn có thể khác nhau.", "Their probability distributions can still differ."]
	],
	"a": 3,
	"w": ["Trung bình chỉ là một con số tóm tắt nên nhiều phân phối khác nhau có thể cùng trung bình. Tổng xác suất luôn bằng 1 với mọi phân phối.", "The mean is a single summary number, so many different distributions can share it. The total probability is always 1 for every distribution."]
}, {
	"q": ["Số form một ngày có P(0) = 0,35; P(1) = 0,30; P(2) = 0,25; P(3) = 0,10. Xác suất có tối đa 1 form là bao nhiêu?", "Forms per day have P(0) = 0.35; P(1) = 0.30; P(2) = 0.25; P(3) = 0.10. What is the probability of at most 1 form?"],
	"o": [
		["0,30", "0.30"],
		["0,35", "0.35"],
		["0,65", "0.65"],
		["0,90", "0.90"]
	],
	"a": 2,
	"w": ["Tối đa 1 nghĩa là X = 0 hoặc X = 1: 0,35 + 0,30 = 0,65. Chọn 0,30 hay 0,35 là chỉ lấy một cột, còn 0,90 là cộng tới X = 2.", "At most 1 means X = 0 or X = 1: 0.35 + 0.30 = 0.65. Picking 0.30 or 0.35 takes one column only, and 0.90 adds up to X = 2."]
}];
var ev = [{
	"q": ["Mỗi lead cho 1 form với xác suất 0,25, nên E[X] = 0,25. Điều nào đúng?", "Each lead yields 1 form with probability 0.25, so E[X] = 0.25. Which is correct?"],
	"o": [
		["Mỗi lead chắc chắn cho 0,25 form.", "Each lead surely yields 0.25 forms."],
		["0,25 là mức trung bình dài hạn mỗi lead; một lead riêng lẻ chỉ cho 0 hoặc 1 form.", "0.25 is the long-run average per lead; a single lead gives only 0 or 1 form."],
		["Với 100 lead chắc chắn nhận đúng 25 form.", "With 100 leads you will receive exactly 25 forms for sure."],
		["Kỳ vọng luôn là giá trị xuất hiện nhiều nhất.", "The expected value is always the most frequent value."]
	],
	"a": 1,
	"w": ["Kỳ vọng là trung bình khi lặp nhiều lần, nên không nhất thiết là giá trị X nhận được. Với 100 lead, 25 chỉ là con số trung bình, kết quả thực tế dao động quanh nó.", "The expected value is the average over many repetitions, so it need not be a value X can take. For 100 leads, 25 is only the average and real results fluctuate around it."]
}, {
	"q": ["Một lead cho 0 đơn với xác suất 0,6; 1 đơn với xác suất 0,3; 2 đơn với xác suất 0,1. Kỳ vọng số đơn mỗi lead là bao nhiêu?", "A lead yields 0 orders with probability 0.6, 1 order with 0.3, and 2 orders with 0.1. What is the expected number of orders per lead?"],
	"o": [
		["1,0", "1.0"],
		["0,6", "0.6"],
		["0,5", "0.5"],
		["0,3", "0.3"]
	],
	"a": 2,
	"w": ["E = 0 × 0,6 + 1 × 0,3 + 2 × 0,1 = 0,5. Con số 1,0 là trung bình đơn giản của 0, 1, 2 mà bỏ qua xác suất; 0,6 và 0,3 chỉ là một xác suất đơn lẻ.", "E = 0 × 0.6 + 1 × 0.3 + 2 × 0.1 = 0.5. The 1.0 is the plain average of 0, 1, 2 ignoring probabilities; 0.6 and 0.3 are single probabilities."]
}];
var binomial = [{
	"q": ["Với n = 40 và p = 0,08 thì n × p = 3,2. Điều nào đúng?", "With n = 40 and p = 0.08, n × p = 3.2. Which is correct?"],
	"o": [
		["Mỗi tuần chắc chắn ra đúng 3 form.", "Every week will surely give exactly 3 forms."],
		["3,2 là xác suất có đúng một form.", "3.2 is the probability of exactly one form."],
		["Một tuần vẫn có thể ra 0 form hoặc 7 form; 3,2 chỉ là mức trung bình dài hạn.", "A week can still give 0 or 7 forms; 3.2 is only the long-run average."],
		["Tuần ra 0 form là không thể xảy ra.", "A week with 0 forms is impossible."]
	],
	"a": 2,
	"w": ["n × p là trung bình, còn phân phối nhị thức cho xác suất từng cột, trong đó 0 form có xác suất khoảng 0,036 nên vẫn xảy ra. Xác suất không bao giờ vượt quá 1.", "n × p is the mean, while the binomial gives each column's probability, and 0 forms has about 0.036 so it can happen. A probability can never exceed 1."]
}, {
	"q": ["n = 5 lượt, p = 0,2, các lượt độc lập. Xác suất có đúng 2 lượt thành công là bao nhiêu?", "n = 5 trials, p = 0.2, independent. What is the probability of exactly 2 successes?"],
	"o": [
		["0,0205", "0.0205"],
		["0,2048", "0.2048"],
		["0,4", "0.4"],
		["0,3277", "0.3277"]
	],
	"a": 1,
	"w": ["C(5,2) × 0,2² × 0,8³ = 10 × 0,04 × 0,512 = 0,2048. Quên hệ số C(5,2) cho 0,0205; 0,4 là 2 chia 5; 0,3277 là xác suất 0 thành công (0,8⁵).", "C(5,2) × 0.2² × 0.8³ = 10 × 0.04 × 0.512 = 0.2048. Forgetting C(5,2) gives 0.0205; 0.4 is 2 divided by 5; 0.3277 is the probability of 0 successes (0.8⁵)."]
}];
var cdf = [{
	"q": ["«Ít hơn 2 form» tương ứng với biểu thức nào?", "Which expression corresponds to 'fewer than 2 forms'?"],
	"o": [
		["P(X ≤ 2)", "P(X ≤ 2)"],
		["P(X = 2)", "P(X = 2)"],
		["P(X ≤ 1)", "P(X ≤ 1)"],
		["P(X ≥ 2)", "P(X ≥ 2)"]
	],
	"a": 2,
	"w": ["Ít hơn 2 là 0 hoặc 1, tức X ≤ 1. X ≤ 2 là «tối đa 2» có thêm cột 2, còn X ≥ 2 là hướng ngược lại.", "Fewer than 2 means 0 or 1, i.e. X ≤ 1. X ≤ 2 is 'at most 2' and adds the column for 2, while X ≥ 2 goes the opposite way."]
}, {
	"q": ["P(0) = 0,15; P(1) = 0,25; P(2) = 0,35; P(3) = 0,25. Xác suất có tối đa 2 form là bao nhiêu?", "P(0) = 0.15; P(1) = 0.25; P(2) = 0.35; P(3) = 0.25. What is the probability of at most 2 forms?"],
	"o": [
		["0,75", "0.75"],
		["0,40", "0.40"],
		["0,35", "0.35"],
		["0,60", "0.60"]
	],
	"a": 0,
	"w": ["0,15 + 0,25 + 0,35 = 0,75, hay 1 − P(3) = 0,75. Con số 0,40 là «ít hơn 2», 0,35 là đúng 2, và 0,60 là «từ 2 trở lên».", "0.15 + 0.25 + 0.35 = 0.75, or 1 − P(3) = 0.75. The 0.40 is 'fewer than 2', 0.35 is exactly 2, and 0.60 is '2 or more'."]
}];
var pdf = [{
	"q": ["Thời gian ở lại trang là biến liên tục với hàm mật độ f(x). Điều nào đúng?", "Time on page is a continuous variable with density f(x). Which is correct?"],
	"o": [
		["f(30) chính là xác suất ở lại đúng 30 giây.", "f(30) is the probability of staying exactly 30 seconds."],
		["Xác suất ở lại đúng 30 giây bằng 0; xác suất là diện tích dưới f(x) trên một khoảng.", "The probability of staying exactly 30 seconds is 0; probability is the area under f(x) over an interval."],
		["f(x) không bao giờ được lớn hơn 1.", "f(x) can never exceed 1."],
		["Tổng các giá trị f(x) tại mọi điểm bằng 1.", "The sum of f(x) at every point equals 1."]
	],
	"a": 1,
	"w": ["Với biến liên tục, xác suất lấy từ diện tích; chiều cao f(x) có thể lớn hơn 1 (với đơn vị nhỏ) mà tổng diện tích vẫn bằng 1.", "For a continuous variable, probability comes from area; the height f(x) may exceed 1 (with small units) while the total area still equals 1."]
}, {
	"q": ["Thời gian ở lại phân phối đều từ 0 đến 50 giây. Xác suất ở lại từ 10 đến 20 giây là bao nhiêu?", "Time on page is uniform from 0 to 50 seconds. What is the probability of staying between 10 and 20 seconds?"],
	"o": [
		["0,02", "0.02"],
		["0,4", "0.4"],
		["0,2", "0.2"],
		["0,6", "0.6"]
	],
	"a": 2,
	"w": ["Diện tích = độ rộng 10 × chiều cao 1/50 = 0,2. Con số 0,02 là chính chiều cao f(x), 0,4 là 20 chia 50, và 0,6 là xác suất ở lại hơn 20 giây.", "Area = width 10 × height 1/50 = 0.2. The 0.02 is the height f(x) itself, 0.4 is 20 divided by 50, and 0.6 is the probability of staying more than 20 seconds."]
}];
var normal = [{
	"q": ["Giá trị đơn hàng lệch phải mạnh, trung bình 500.000đ, độ lệch chuẩn 200.000đ. Có nên nói «95% đơn nằm trong 100.000đ đến 900.000đ» theo quy tắc chuẩn không?", "Order values are strongly right-skewed, mean 500,000 VND, standard deviation 200,000 VND. Should we say '95% of orders fall in 100,000 to 900,000 VND' by the normal rule?"],
	"o": [
		["Không, vì quy tắc 68-95-99,7 chỉ đúng khi hình gần giống chuông.", "No, because the 68-95-99.7 rule holds only when the shape is roughly bell-shaped."],
		["Có, vì mọi dữ liệu đều theo quy tắc này.", "Yes, because all data follow this rule."],
		["Có, vì σ lớn thì khoảng luôn chứa 95%.", "Yes, because a large σ makes the interval always contain 95%."],
		["Không, vì khoảng đúng phải là μ ± σ.", "No, because the correct interval should be μ ± σ."]
	],
	"a": 0,
	"w": ["Quy tắc 68-95-99,7 là tính chất của phân phối chuẩn, nên không dùng cho dữ liệu lệch nhiều. Còn μ ± 2σ mới là khoảng xấp xỉ 95% khi hình chuông, chứ không phải μ ± σ.", "The 68-95-99.7 rule is a property of the normal distribution, so it should not be used for heavily skewed data. Also μ ± 2σ, not μ ± σ, is the roughly 95% interval for bell shapes."]
}, {
	"q": ["Thời gian ở lại xấp xỉ chuẩn, trung bình 120 giây, độ lệch chuẩn 15 giây. Khoảng chứa khoảng 95% lượt truy cập là gì?", "Time on page is approximately normal, mean 120 seconds, standard deviation 15 seconds. Which interval contains about 95% of visits?"],
	"o": [
		["105 đến 135 giây", "105 to 135 seconds"],
		["75 đến 165 giây", "75 to 165 seconds"],
		["90 đến 150 giây", "90 to 150 seconds"],
		["100 đến 140 giây", "100 to 140 seconds"]
	],
	"a": 2,
	"w": ["95% nằm trong μ ± 2σ = 120 ± 30, tức 90 đến 150. Khoảng 105 đến 135 là μ ± σ (khoảng 68%), còn 75 đến 165 là μ ± 3σ (khoảng 99,7%).", "95% lies within μ ± 2σ = 120 ± 30, i.e. 90 to 150. The 105 to 135 range is μ ± σ (about 68%), and 75 to 165 is μ ± 3σ (about 99.7%)."]
}];
var zscore = [{
	"q": ["Một CPA có z = −0,5. Hiểu thế nào là đúng?", "A CPA has z = −0.5. What is the correct interpretation?"],
	"o": [
		["Dữ liệu bị nhập sai vì z không được âm.", "The data were entered wrongly because z cannot be negative."],
		["Thấp hơn trung bình nửa độ lệch chuẩn; z âm không có nghĩa là xấu hay lỗi.", "Half a standard deviation below the mean; a negative z does not mean bad or an error."],
		["CPA bằng đúng −0,5 đồng.", "The CPA equals exactly −0.5 currency units."],
		["CPA thấp hơn trung bình 50%.", "The CPA is 50% below the mean."]
	],
	"a": 1,
	"w": ["z đo khoảng cách theo đơn vị độ lệch chuẩn, âm chỉ là thấp hơn trung bình (với CPA còn là điều tốt). Nó không phải đơn vị tiền hay phần trăm.", "z measures distance in standard deviation units; negative just means below the mean (which is even good for CPA). It is neither a currency amount nor a percentage."]
}, {
	"q": ["Thời gian ở lại: trung bình 42 giây, σ = 8 giây; giá trị 58 giây. CPA: trung bình 100.000đ, σ = 20.000đ; giá trị 130.000đ. Giá trị nào lệch xa trung bình hơn?", "Time on page: mean 42 s, σ = 8 s; value 58 s. CPA: mean 100,000 VND, σ = 20,000 VND; value 130,000 VND. Which value is farther from its mean?"],
	"o": [
		["58 giây, vì z = 2 so với z = 1,5 của CPA.", "58 seconds, because z = 2 versus z = 1.5 for the CPA."],
		["130.000đ, vì chênh 30.000 lớn hơn chênh 16.", "130,000 VND, because a gap of 30,000 is larger than a gap of 16."],
		["Hai giá trị lệch bằng nhau.", "Both are equally far."],
		["Không so sánh được vì khác đơn vị.", "They cannot be compared because the units differ."]
	],
	"a": 0,
	"w": ["Z-score là: (58 − 42)/8 = 2 và (130.000 − 100.000)/20.000 = 1,5. So chênh lệch thô bị đơn vị đánh lừa; chính z mới giúp so sánh các đơn vị khác nhau.", "Z-scores: (58 − 42)/8 = 2 and (130,000 − 100,000)/20,000 = 1.5. Comparing raw gaps is fooled by units; z is exactly what makes different units comparable."]
}];
var samples = [{
	"q": ["Tuần 1 có 3,0% lượt gửi form, tuần 2 có 3,5% (mỗi tuần 400 lượt). Điều nào đúng?", "Week 1 had 3.0% form submissions and week 2 had 3.5% (400 visits each). Which is correct?"],
	"o": [
		["Tổng thể chắc chắn đã thay đổi vì hai con số khác nhau.", "The population has certainly changed because the numbers differ."],
		["Một trong hai mẫu chắc chắn bị lấy sai.", "One of the two samples was certainly taken wrongly."],
		["Hai con số khác nhau có thể chỉ do biến thiên lấy mẫu, chưa đủ nói tổng thể đã đổi.", "The two figures may differ merely from sampling variation; that is not enough to say the population changed."],
		["Nếu lấy mẫu đúng thì mọi tuần phải ra cùng một con số.", "If sampled correctly, every week would give the same number."]
	],
	"a": 2,
	"w": ["Mẫu khác nhau cho thống kê khác nhau ngay cả khi tổng thể không đổi. Muốn kết luận thay đổi thật phải so với mức dao động lấy mẫu.", "Different samples give different statistics even when the population is unchanged. A real change must be judged against sampling variation."]
}, {
	"q": ["Tỷ lệ gửi form tuần 1 là 3,0% và tuần 2 là 3,5% với sai số chuẩn mỗi tuần khoảng 0,85 điểm phần trăm. Kết luận phù hợp nhất?", "Form rate was 3.0% in week 1 and 3.5% in week 2, with a standard error of about 0.85 percentage points each week. What is the most appropriate conclusion?"],
	"o": [
		["Tỷ lệ tăng 16,7% nên trang đã tốt hơn rõ rệt.", "The rate rose 16.7%, so the page is clearly better."],
		["Phải kết luận trang kém đi vì 3,5% lớn hơn 3,0%.", "We must conclude the page got worse because 3.5% is greater than 3.0%."],
		["Chỉ cần thêm một tuần nữa là chắc chắn trang đã đổi.", "One more week will definitely confirm the page changed."],
		["Chênh 0,5 điểm nhỏ hơn một sai số chuẩn, nên chưa đủ bằng chứng trang đã khác đi.", "A 0.5-point gap is smaller than one standard error, so there is not enough evidence the page changed."]
	],
	"a": 3,
	"w": ["Chênh 0,5 điểm chỉ bằng khoảng nửa sai số chuẩn nên nằm trong dao động thường gặp. Phần trăm tăng tương đối 16,7% (14/12 − 1) nghe lớn nhưng không đổi được thực tế đó.", "A 0.5-point gap is only about half a standard error, well within normal fluctuation. The 16.7% relative rise (14/12 − 1) sounds big but does not change that fact."]
}];
var clt = [{
	"q": ["Thời gian ở lại trang lệch phải. Với n = 40, định lý giới hạn trung tâm nói gì?", "Time on page is right-skewed. With n = 40, what does the central limit theorem say?"],
	"o": [
		["Trung bình mẫu xấp xỉ phân phối chuẩn, còn từng lượt truy cập vẫn lệch.", "The sample mean is approximately normal, while individual visits remain skewed."],
		["Từng lượt truy cập sẽ trở thành hình chuông khi n lớn.", "Individual visits become bell-shaped when n is large."],
		["Định lý chỉ áp dụng được khi dữ liệu gốc đã là phân phối chuẩn.", "The theorem applies only when the raw data are already normal."],
		["Chỉ cần n = 5 là trung bình mẫu chắc chắn chuẩn.", "n = 5 is enough to make the sample mean surely normal."]
	],
	"a": 0,
	"w": ["Định lý nói về phân phối của trung bình mẫu, không đổi hình dạng dữ liệu gốc. Dữ liệu lệch nhiều thì cần n lớn hơn, nên n quá nhỏ thì chưa đủ.", "The theorem concerns the distribution of the sample mean and does not change the raw data's shape. Heavily skewed data needs a larger n, so a tiny n is not enough."]
}, {
	"q": ["μ = 42 giây, σ = 12 giây, n = 36. Khoảng nào chứa khoảng 95% các trung bình mẫu?", "μ = 42 seconds, σ = 12 seconds, n = 36. Which interval contains about 95% of sample means?"],
	"o": [
		["30 đến 54 giây", "30 to 54 seconds"],
		["40 đến 44 giây", "40 to 44 seconds"],
		["18 đến 66 giây", "18 to 66 seconds"],
		["38 đến 46 giây", "38 to 46 seconds"]
	],
	"a": 3,
	"w": ["SE = 12 / 6 = 2 nên 95% nằm trong 42 ± 2 × 2 = 38 đến 46. Khoảng 30 đến 54 dùng σ thay vì SE, 40 đến 44 chỉ chứa khoảng 68%, và 18 đến 66 dùng 2σ.", "SE = 12 / 6 = 2, so 95% lies within 42 ± 2 × 2 = 38 to 46. The 30 to 54 range uses σ instead of SE, 40 to 44 holds only about 68%, and 18 to 66 uses 2σ."]
}];
var ci = [{
	"q": ["Khoảng tin cậy 95% cho thời gian ở lại là 43 đến 49 giây. Cách hiểu nào đúng?", "A 95% confidence interval for time on page is 43 to 49 seconds. Which interpretation is correct?"],
	"o": [
		["Giá trị thật có 95% xác suất nằm trong khoảng 43 đến 49.", "The true value has a 95% probability of lying in 43 to 49."],
		["95% lượt truy cập ở lại từ 43 đến 49 giây.", "95% of visits stay between 43 and 49 seconds."],
		["95% các mẫu sau sẽ có trung bình nằm trong 43 đến 49.", "95% of future samples will have means within 43 to 49."],
		["95% nói về quy trình: lặp lại nhiều lần thì khoảng 95% các khoảng tính được sẽ chứa giá trị thật.", "The 95% describes the procedure: repeated many times, about 95% of the computed intervals contain the true value."]
	],
	"a": 3,
	"w": ["Sau khi tính, khoảng cụ thể hoặc chứa giá trị thật hoặc không; độ tin cậy là của cách làm. Khoảng này cũng không nói về từng lượt hay trung bình của mẫu sau.", "Once computed, the specific interval either contains the true value or does not; the confidence belongs to the method. It also says nothing about individual visits or future sample means."]
}, {
	"q": ["Mẫu 100 lượt: trung bình 50 giây, s = 15 giây. Khoảng tin cậy 95% (z = 1,96) cho trung bình là gì?", "Sample of 100 visits: mean 50 seconds, s = 15 seconds. What is the 95% confidence interval (z = 1.96) for the mean?"],
	"o": [
		["Khoảng 35 đến 65 giây", "About 35 to 65 seconds"],
		["Khoảng 47,1 đến 52,9 giây", "About 47.1 to 52.9 seconds"],
		["Khoảng 48,5 đến 51,5 giây", "About 48.5 to 51.5 seconds"],
		["Khoảng 20,6 đến 79,4 giây", "About 20.6 to 79.4 seconds"]
	],
	"a": 1,
	"w": ["SE = 15 / 10 = 1,5 và sai số biên = 1,96 × 1,5 ≈ 2,9, nên khoảng là 50 ± 2,9. Khoảng 35 đến 65 là ± s, 48,5 đến 51,5 là ± SE, 20,6 đến 79,4 là ± 1,96 × s.", "SE = 15 / 10 = 1.5 and margin = 1.96 × 1.5 ≈ 2.9, so the interval is 50 ± 2.9. The 35 to 65 range is ± s, 48.5 to 51.5 is ± SE, and 20.6 to 79.4 is ± 1.96 × s."]
}];
var joint = [{
	"q": ["Câu nào đúng về P(form ∣ GDN) và P(GDN ∣ form)?", "Which statement about P(form ∣ GDN) and P(GDN ∣ form) is correct?"],
	"o": [
		["Hai giá trị luôn bằng nhau.", "They are always equal."],
		["P(form ∣ GDN) luôn lớn hơn P(GDN ∣ form).", "P(form ∣ GDN) is always larger than P(GDN ∣ form)."],
		["Hai giá trị nói về hai câu hỏi khác nhau nên thường khác nhau.", "They answer two different questions, so they are usually different."],
		["Cả hai đều bằng P(form và GDN).", "Both equal P(form and GDN)."]
	],
	"a": 2,
	"w": ["Cùng tử số P(form và GDN) nhưng mẫu số khác: P(GDN) và P(form). Chỉ khi hai xác suất nền bằng nhau thì hai giá trị mới trùng nhau.", "They share the numerator P(form and GDN) but have different denominators: P(GDN) and P(form). They coincide only when the two base probabilities are equal."]
}, {
	"q": ["P(GDN và form) = 0,06 và P(GDN) = 0,30. Tính P(form ∣ GDN).", "P(GDN and form) = 0.06 and P(GDN) = 0.30. Compute P(form ∣ GDN)."],
	"o": [
		["0,06", "0.06"],
		["0,20", "0.20"],
		["0,60", "0.60"],
		["0,018", "0.018"]
	],
	"a": 1,
	"w": ["P(form ∣ GDN) = 0,06 / 0,30 = 0,20. Con số 0,06 quên chia, 0,018 là nhân thay vì chia, còn 0,60 sẽ là kết quả nếu chia nhầm cho một xác suất khác (như P(form) = 0,10).", "P(form ∣ GDN) = 0.06 / 0.30 = 0.20. The 0.06 forgets to divide, 0.018 multiplies instead of dividing, and 0.60 would result from dividing by a different probability (such as P(form) = 0.10)."]
}];
var bayes = [{
	"q": ["Một tín hiệu xuất hiện ở 90% khách đúng. Một lead có tín hiệu này. Kết luận nào hợp lý?", "A signal appears in 90% of correct-fit customers. A lead shows this signal. Which conclusion is reasonable?"],
	"o": [
		["Chưa kết luận được; cần biết tỷ lệ khách đúng ban đầu và tín hiệu xuất hiện ở khách sai bao nhiêu.", "No conclusion yet; we also need the initial share of right customers and how often the signal appears in wrong ones."],
		["Lead này đúng khách với xác suất 90%.", "This lead is a right-fit customer with 90% probability."],
		["Lead này đúng khách với xác suất 10%.", "This lead is a right-fit customer with 10% probability."],
		["Tín hiệu không mang thông tin gì vì có thể sai.", "The signal carries no information because it can be wrong."]
	],
	"a": 0,
	"w": ["90% là P(tín hiệu ∣ đúng khách), khác với P(đúng khách ∣ tín hiệu). Muốn đảo chiều phải dùng Bayes với xác suất ban đầu và tỷ lệ tín hiệu ở khách sai.", "90% is P(signal ∣ right fit), which differs from P(right fit ∣ signal). Reversing it requires Bayes with the prior and the signal rate among wrong-fit customers."]
}, {
	"q": ["Trước chiến dịch, 10% lead đúng khách. Tín hiệu có ở 70% khách đúng và 20% khách sai. Lead có tín hiệu thì xác suất đúng khách bằng bao nhiêu?", "Before the campaign, 10% of leads are right-fit. The signal appears in 70% of right-fit and 20% of wrong-fit customers. Given the signal, what is the probability the lead is right-fit?"],
	"o": [
		["0,70", "0.70"],
		["0,78", "0.78"],
		["0,28", "0.28"],
		["0,10", "0.10"]
	],
	"a": 2,
	"w": ["P(tín hiệu) = 0,7 × 0,1 + 0,2 × 0,9 = 0,25, nên P = 0,07 / 0,25 = 0,28. Con số 0,70 nhầm chiều điều kiện, 0,78 bỏ qua xác suất ban đầu, 0,10 bỏ qua tín hiệu.", "P(signal) = 0.7 × 0.1 + 0.2 × 0.9 = 0.25, so P = 0.07 / 0.25 = 0.28. The 0.70 reverses the condition, 0.78 ignores the prior, and 0.10 ignores the signal."]
}];
var hier = [{
	"q": ["Dendrogram được cắt ở độ cao cao hơn thì ra kết quả nào?", "What happens if you cut a dendrogram at a higher height?"],
	"o": [
		["Nhiều nhóm hơn và mỗi nhóm nhỏ hơn", "More, smaller groups"],
		["Số nhóm không đổi", "The number of groups stays the same"],
		["Ít nhóm hơn và mỗi nhóm lớn hơn", "Fewer, larger groups"],
		["Thuật toán tự đặt tên cho từng nhóm", "The algorithm names each group automatically"]
	],
	"a": 2,
	"w": ["Độ cao mối nối là khoảng cách lúc dán; cắt cao thì chỉ giữ lại những mối nối lớn nên còn ít nhóm. Việc cắt và đặt tên vẫn do bạn quyết định.", "A join's height is the distance at which it happened; cutting high leaves only the biggest joins, hence fewer groups. Cutting and naming are still your decisions."]
}, {
	"q": ["Hai mối nối cuối của dendrogram có độ cao 5 và 8, mọi mối nối còn lại thấp hơn 4. Cắt tại độ cao 6 cho bao nhiêu nhóm?", "The last two joins of a dendrogram have heights 5 and 8, and all other joins are below 4. How many groups does a cut at height 6 give?"],
	"o": [
		["3 nhóm", "3 groups"],
		["1 nhóm", "1 group"],
		["4 nhóm", "4 groups"],
		["2 nhóm", "2 groups"]
	],
	"a": 3,
	"w": ["Chỉ mối nối ở độ cao 8 nằm trên nhát cắt 6, nên còn 2 nhóm; cắt dưới 5 (ví dụ tại 4) mới cho 3 nhóm, còn cắt trên 8 cho 1 nhóm.", "Only the join at height 8 lies above a cut at 6, leaving 2 groups; cutting below 5 (say at 4) gives 3 groups, and cutting above 8 gives 1."]
}];
var self_test_default = {
	"infer-intro": [{
		"q": ["Câu nào dưới đây là kết luận về tổng thể, chứ không chỉ mô tả mẫu?", "Which statement is a conclusion about the population, not just a description of the sample?"],
		"o": [
			["Trong 400 lượt tuần này có 12 lượt gửi form.", "In this week's 400 visits, 12 submitted the form."],
			["Tỷ lệ gửi form thật của trang này cao hơn 2%.", "The true form-submission rate of this page is higher than 2%."],
			["Tỷ lệ gửi form của mẫu là 3%.", "The sample's form-submission rate is 3%."],
			["Thống kê mẫu bằng 12 chia 400.", "The sample statistic equals 12 divided by 400."]
		],
		"a": 1,
		"w": ["Chỉ câu nói về tỷ lệ thật của trang mới là kết luận về tổng thể (tham số). Ba câu còn lại chỉ mô tả hoặc tính từ 400 lượt đã quan sát, nên là thống kê mẫu.", "Only the statement about the page's true rate concerns the population (a parameter). The other three only describe or compute from the 400 observed visits, so they are sample statistics."]
	}, {
		"q": ["Mẫu 500 lượt có 20 lượt gửi form (4,0%), sai lệch khoảng 1,7 điểm phần trăm ở mức 95%. Khách hỏi trang có cao hơn 2% không. Câu trả lời hợp lý nhất?", "A sample of 500 visits has 20 form submissions (4.0%), with a margin of about 1.7 percentage points at 95%. The client asks whether the page is above 2%. What is the most reasonable answer?"],
		"o": [
			["Khoảng khoảng 2,3% đến 5,7% không chứa 2%, nên có bằng chứng trang cao hơn 2%.", "The interval of about 2.3% to 5.7% does not contain 2%, so there is evidence the page is above 2%."],
			["Mẫu cho 4,0% nên chắc chắn trang cao hơn 2%.", "The sample gives 4.0%, so the page is certainly above 2%."],
			["Khoảng 0,3% đến 7,7% chứa 2%, nên chưa đủ kết luận.", "The interval 0.3% to 7.7% contains 2%, so it is not enough to conclude."],
			["Không thể trả lời vì chưa xem hết mọi lượt truy cập.", "It cannot be answered because not every visit has been observed."]
		],
		"a": 0,
		"w": ["Khoảng 4,0% ± 1,7 điểm là 2,3% đến 5,7%, không chứa 2% nên đủ cơ sở nói cao hơn. Chỉ nhìn con số 4,0% bỏ qua sai lệch, còn không trả lời được là bỏ phí chính điều suy luận làm được.", "4.0% ± 1.7 points gives 2.3% to 5.7%, which excludes 2%, so we can say it is higher. Citing 4.0% alone ignores the margin, and refusing to answer wastes exactly what inference is for."]
	}],
	permut,
	combin,
	"prob-def": [{
		"q": ["Trong 200 lượt thử có 16 lượt gửi form, tức 0,08. Điều nào đúng?", "In 200 test visits, 16 submitted the form, i.e. 0.08. Which statement is correct?"],
		"o": [
			["0,08 chính là xác suất thật của mọi lượt truy cập sau này.", "0.08 is exactly the true probability for all future visits."],
			["Trong 100 lượt kế tiếp chắc chắn có đúng 8 lượt gửi form.", "In the next 100 visits exactly 8 will certainly submit."],
			["Xác suất có thể nhận giá trị 8 nếu tính theo phần trăm.", "The probability can take the value 8 if expressed as a percentage."],
			["0,08 là ước lượng xác suất từ 200 lượt; xác suất thật có thể hơi khác.", "0.08 is an estimate of the probability from 200 visits; the true probability may differ slightly."]
		],
		"a": 3,
		"w": ["Tần suất từ mẫu chỉ là ước lượng nên có sai lệch. Việc 0,08 làm xác suất thật hoặc cam kết đúng 8 lượt đều là hiểu nhầm; 8% chỉ là cách viết khác của 0,08.", "A sample frequency is only an estimate and carries error. Treating 0.08 as the exact true probability or promising exactly 8 submissions are misunderstandings; 8% is just another way to write 0.08."]
	}, {
		"q": ["Trong 300 lượt có 21 lượt gửi form. Ước lượng xác suất một lượt bất kỳ không gửi form là bao nhiêu?", "Out of 300 visits, 21 submitted the form. What is the estimated probability that a random visit does not submit?"],
		"o": [
			["0,93", "0.93"],
			["0,07", "0.07"],
			["0,70", "0.70"],
			["14,3", "14.3"]
		],
		"a": 0,
		"w": ["Xác suất gửi form là 21 / 300 = 0,07, nên không gửi là 1 − 0,07 = 0,93. Con số 0,07 là biến cố gửi form, còn 14,3 là 300 / 21 bị đảo ngược và vượt quá 1.", "The submission probability is 21 / 300 = 0.07, so not submitting is 1 − 0.07 = 0.93. The 0.07 is the submission event itself, and 14.3 is 300 / 21 inverted, which exceeds 1."]
	}],
	events,
	"add-rule": [{
		"q": ["Vì sao khi tính P(A hoặc B) phải trừ P(A và B)?", "Why must we subtract P(A and B) when computing P(A or B)?"],
		"o": [
			["Vì phần chung bị tính hai lần khi cộng P(A) với P(B).", "Because the overlap is counted twice when adding P(A) and P(B)."],
			["Vì A và B luôn xung khắc.", "Because A and B are always mutually exclusive."],
			["Vì tổng xác suất không được vượt quá 0,5.", "Because the total probability may not exceed 0.5."],
			["Vì phải đổi từ «hoặc» sang xác suất có điều kiện.", "Because we must convert from 'or' to a conditional probability."]
		],
		"a": 0,
		"w": ["Lượt thuộc cả A và B nằm trong cả hai xác suất nên bị cộng hai lần, phải trừ đi một lần. Nếu A và B xung khắc thì phần chung bằng 0 và không cần trừ.", "A visit in both A and B appears in both probabilities, so it is added twice and must be subtracted once. If A and B were mutually exclusive the overlap would be 0 and nothing would need subtracting."]
	}, {
		"q": ["P(A) = 0,30; P(B) = 0,25; P(A và B) = 0,10. Tính P(A hoặc B).", "P(A) = 0.30; P(B) = 0.25; P(A and B) = 0.10. Compute P(A or B)."],
		"o": [
			["0,55", "0.55"],
			["0,45", "0.45"],
			["0,075", "0.075"],
			["0,35", "0.35"]
		],
		"a": 1,
		"w": ["0,30 + 0,25 − 0,10 = 0,45. Con số 0,55 là quên trừ phần chung, 0,075 là nhân hai xác suất, còn 0,35 là trừ phần chung hai lần.", "0.30 + 0.25 − 0.10 = 0.45. The 0.55 forgets the overlap, 0.075 multiplies the probabilities, and 0.35 subtracts the overlap twice."]
	}],
	"mul-rule": [{
		"q": ["Khi nào được nhân thẳng P(A) × P(B) để ra P(A và B)?", "When can we directly multiply P(A) × P(B) to get P(A and B)?"],
		"o": [
			["Luôn luôn, với mọi cặp biến cố.", "Always, for any pair of events."],
			["Khi A và B độc lập; nếu không thì phải dùng P(A) × P(B∣A).", "When A and B are independent; otherwise use P(A) × P(B∣A)."],
			["Khi A và B xung khắc.", "When A and B are mutually exclusive."],
			["Khi tổng P(A) + P(B) bằng 1.", "When P(A) + P(B) equals 1."]
		],
		"a": 1,
		"w": ["Phép nhân thẳng chỉ đúng với biến cố độc lập. Với biến cố xung khắc tích thật là 0, không phải tích hai xác suất.", "Direct multiplication holds only for independent events. For mutually exclusive events the true joint probability is 0, not the product."]
	}, {
		"q": ["50% lượt truy cập đến từ Facebook. Trong các lượt từ Facebook, 6% mua hàng. Tỷ lệ lượt vừa từ Facebook vừa mua hàng là bao nhiêu?", "50% of visits come from Facebook. Among Facebook visits, 6% purchase. What share of visits are both from Facebook and purchase?"],
		"o": [
			["3%", "3%"],
			["6%", "6%"],
			["56%", "56%"],
			["30%", "30%"]
		],
		"a": 0,
		"w": ["0,50 × 0,06 = 0,03, tức 3%. Con số 6% là tỷ lệ có điều kiện chứ chưa nhân với phần của Facebook, còn 56% là cộng nhầm.", "0.50 × 0.06 = 0.03, i.e. 3%. The 6% is the conditional rate not yet scaled by the Facebook share, and 56% wrongly adds the two."]
	}],
	rv,
	dist,
	ev,
	"no-exp": [{
		"q": ["Mô hình nhị thức cho xác suất đúng 5 form trong 40 lượt là 0,116 khi p = 0,08. Câu nào đúng?", "The binomial model gives P(exactly 5 forms in 40 visits) = 0.116 when p = 0.08. Which is correct?"],
		"o": [
			["Kết quả đúng nếu các giả định (độc lập, cùng p = 0,08) đúng, và cần kiểm tra bằng dữ liệu thật.", "The result holds if the assumptions (independence, same p = 0.08) hold, and it must be checked against real data."],
			["Công thức đã chứng minh p thật bằng 0,08.", "The formula has proven that the true p is 0.08."],
			["Mô hình không cần giả định nào vì chỉ là toán.", "The model needs no assumptions because it is just mathematics."],
			["Tính trước luôn chính xác hơn dữ liệu thật.", "Computing in advance is always more accurate than real data."]
		],
		"a": 0,
		"w": ["Công thức chỉ cho biết điều gì xảy ra nếu giả định đúng; nó không chứng minh giả định. Dữ liệu thật vẫn là thước đo cuối cùng.", "The formula only says what happens if the assumptions are true; it does not prove them. Real data remains the final yardstick."]
	}, {
		"q": ["Giả sử các lượt độc lập và mỗi lượt gửi form với p = 0,1. Xác suất cả 3 lượt liên tiếp đều gửi form là bao nhiêu?", "Assume visits are independent and each submits with p = 0.1. What is the probability that all 3 consecutive visits submit?"],
		"o": [
			["0,3", "0.3"],
			["0,001", "0.001"],
			["0,1", "0.1"],
			["0,03", "0.03"]
		],
		"a": 1,
		"w": ["0,1 × 0,1 × 0,1 = 0,001 nhờ giả định độc lập. Con số 0,3 là cộng thay vì nhân, và 0,03 là nhân 0,1 với 3.", "0.1 × 0.1 × 0.1 = 0.001 thanks to the independence assumption. The 0.3 adds instead of multiplying, and 0.03 multiplies 0.1 by 3."]
	}],
	binomial,
	cdf,
	pdf,
	normal,
	zscore,
	samples,
	"samp-dist": [{
		"q": ["Sự khác nhau giữa độ lệch chuẩn σ và sai số chuẩn SE là gì?", "What is the difference between the standard deviation σ and the standard error SE?"],
		"o": [
			["σ đo độ dao động của trung bình mẫu; SE đo độ phân tán của từng lượt.", "σ measures the fluctuation of the sample mean; SE measures the spread of individual visits."],
			["Hai khái niệm này giống hệt nhau.", "They are exactly the same thing."],
			["σ đo độ phân tán của từng lượt truy cập; SE đo độ dao động của trung bình mẫu.", "σ measures the spread of individual visits; SE measures the fluctuation of the sample mean."],
			["SE luôn lớn hơn σ vì có thêm căn bậc hai của n.", "SE is always larger than σ because it includes the square root of n."]
		],
		"a": 2,
		"w": ["SE = σ / √n nên nhỏ hơn σ khi n lớn hơn 1. Hai khái niệm đo hai thứ khác nhau, đừng đảo vai trò của chúng.", "SE = σ / √n, so it is smaller than σ whenever n exceeds 1. They measure two different things; do not swap their roles."]
	}, {
		"q": ["σ = 20 giây, n = 100. Sai số chuẩn của trung bình mẫu là bao nhiêu?", "σ = 20 seconds, n = 100. What is the standard error of the sample mean?"],
		"o": [
			["0,2 giây", "0.2 seconds"],
			["20 giây", "20 seconds"],
			["200 giây", "200 seconds"],
			["2 giây", "2 seconds"]
		],
		"a": 3,
		"w": ["SE = 20 / √100 = 20 / 10 = 2. Chia cho n thay vì √n cho 0,2; giữ nguyên σ cho 20; nhân với √n cho 200.", "SE = 20 / √100 = 20 / 10 = 2. Dividing by n instead of √n gives 0.2; keeping σ gives 20; multiplying by √n gives 200."]
	}],
	"samp-props": [{
		"q": ["Một mẫu lớn được lấy chỉ từ những người đã để lại số điện thoại. Tăng thêm cỡ mẫu sẽ làm gì?", "A large sample is taken only from people who left a phone number. What will increasing the sample size do?"],
		"o": [
			["Sửa luôn độ lệch vì n lớn thì mẫu luôn đại diện.", "It fixes the bias since a large n always makes the sample representative."],
			["Làm sai số chuẩn tăng lên.", "It increases the standard error."],
			["Làm trung bình mẫu ổn định hơn nhưng vẫn lệch, vì nhóm bị bỏ sót vẫn vắng mặt.", "It makes the sample mean steadier but still biased, because the omitted group is still absent."],
			["Làm trung bình mẫu khác hẳn kỳ vọng μ.", "It makes the sample mean differ entirely from the expectation μ."]
		],
		"a": 2,
		"w": ["Công thức σ / √n chỉ giảm dao động ngẫu nhiên, không sửa lỗi chọn mẫu. Tính không lệch của X̄ chỉ đúng khi mẫu được lấy ngẫu nhiên.", "The σ / √n formula only reduces random fluctuation and does not repair selection error. The unbiasedness of X̄ holds only for randomly drawn samples."]
	}, {
		"q": ["σ = 12 giây. Với n = 36, SE = 2. Cần cỡ mẫu n bằng bao nhiêu để SE còn 1 giây?", "σ = 12 seconds. With n = 36, SE = 2. What sample size n is needed to bring SE down to 1 second?"],
		"o": [
			["72", "72"],
			["108", "108"],
			["432", "432"],
			["144", "144"]
		],
		"a": 3,
		"w": ["SE = 12 / √n = 1 nên √n = 12 và n = 144. Muốn SE giảm một nửa phải gấp 4 lần n, nên gấp đôi (72) hay gấp ba (108) đều chưa đủ.", "SE = 12 / √n = 1 gives √n = 12, so n = 144. Halving SE requires quadrupling n, so doubling (72) or tripling (108) is not enough."]
	}],
	clt,
	"clt-est": [{
		"q": ["Vì sao sai số biên dùng s / √n chứ không dùng s?", "Why does the margin of error use s / √n rather than s?"],
		"o": [
			["Vì mẫu nhỏ thì phải chia cho căn bậc hai của n để cho đẹp.", "Because with small samples we divide by the square root of n for neatness."],
			["Vì s chưa biết nên phải bỏ nó khỏi công thức.", "Because s is unknown so it has to be dropped from the formula."],
			["Vì ta ước lượng trung bình, và trung bình mẫu dao động ít hơn từng lượt truy cập.", "Because we are estimating a mean, and sample means fluctuate less than individual visits."],
			["Vì khoảng ước lượng phải chứa 95% từng lượt truy cập.", "Because the interval must contain 95% of individual visits."]
		],
		"a": 2,
		"w": ["Khoảng này nói về trung bình tổng thể, không phải về từng lượt, nên dùng độ dao động của trung bình mẫu là s / √n. Dùng s sẽ cho khoảng quá rộng.", "The interval concerns the population mean, not individual visits, so we use the sample mean's fluctuation s / √n. Using s would give an interval that is far too wide."]
	}, {
		"q": ["Mẫu 36 lượt: trung bình 30 giây, s = 9 giây. Dùng z ≈ 2, khoảng ước lượng cho trung bình là gì?", "Sample of 36 visits: mean 30 seconds, s = 9 seconds. Using z ≈ 2, what is the estimation interval for the mean?"],
		"o": [
			["21 đến 39 giây", "21 to 39 seconds"],
			["28,5 đến 31,5 giây", "28.5 to 31.5 seconds"],
			["12 đến 48 giây", "12 to 48 seconds"],
			["27 đến 33 giây", "27 to 33 seconds"]
		],
		"a": 3,
		"w": ["SE = 9 / 6 = 1,5 và sai số biên = 2 × 1,5 = 3, nên khoảng là 30 ± 3. Khoảng 21 đến 39 là ± s, 28,5 đến 31,5 là ± SE (quên z), 12 đến 48 là ± 2s.", "SE = 9 / 6 = 1.5 and margin = 2 × 1.5 = 3, so the interval is 30 ± 3. The 21 to 39 range is ± s, 28.5 to 31.5 is ± SE (forgetting z), and 12 to 48 is ± 2s."]
	}],
	ci,
	"samp-types": [{
		"q": ["Khảo sát 10.000 người, tất cả đều đã để lại số điện thoại, để ước lượng tỷ lệ gửi form của kênh GDN. Vấn đề chính là gì?", "A survey of 10,000 people, all of whom left a phone number, estimates the form rate of the GDN channel. What is the main problem?"],
		"o": [
			["Cỡ mẫu 10.000 vẫn quá nhỏ cho mọi kết luận.", "10,000 is still too small for any conclusion."],
			["Mẫu thiên lệch vì bỏ sót nhóm không gửi form, nên cỡ mẫu lớn cũng không cứu được.", "The sample is biased because it omits those who did not submit, so a large size cannot rescue it."],
			["Phải luôn lấy mẫu theo cụm mới đúng.", "Cluster sampling is always required to be valid."],
			["Không có vấn đề gì vì mẫu rất lớn.", "There is no problem because the sample is very large."]
		],
		"a": 1,
		"w": ["Chọn từ những người đã gửi form làm tỷ lệ gửi form bị thổi phồng bất kể n bao nhiêu. Cách chọn mẫu quyết định mẫu có đại diện hay không, không phải cỡ mẫu.", "Sampling only people who already submitted inflates the submission rate no matter how big n is. The selection method, not the sample size, decides whether it is representative."]
	}, {
		"q": ["Tổng thể có 70% thành viên trẻ và 30% thành viên lớn tuổi. Muốn mẫu 200 người giữ đúng tỷ lệ này bằng lấy mẫu phân tầng, cần lấy bao nhiêu người từ nhóm trẻ?", "The population is 70% younger members and 30% older members. To keep these proportions in a stratified sample of 200, how many should come from the younger group?"],
		"o": [
			["100", "100"],
			["70", "70"],
			["140", "140"],
			["60", "60"]
		],
		"a": 2,
		"w": ["200 × 0,70 = 140 người trẻ và 200 × 0,30 = 60 người lớn tuổi. Con số 100 là chia đều, 70 là phần trăm bị nhầm với số người, 60 là cỡ nhóm lớn tuổi.", "200 × 0.70 = 140 younger and 200 × 0.30 = 60 older. The 100 is an even split, 70 confuses the percentage with a head count, and 60 is the older group's size."]
	}],
	"samp-use": [{
		"q": ["So sánh hai creative, mỗi bên 1.000 lượt. Điều kiện nào làm kết luận đáng tin?", "Comparing two creatives with 1,000 visits each. What condition makes the conclusion trustworthy?"],
		"o": [
			["Creative nào nhiều lượt thuận tiện hơn thì chọn làm mẫu.", "Whichever creative has more convenient visits is used as the sample."],
			["Cứ đủ 1.000 lượt mỗi bên là kết luận đúng, bất kể cách chọn.", "1,000 visits per side is enough, regardless of how they were chosen."],
			["Mục đích sử dụng khác thì có thể bỏ qua đại diện của mẫu.", "With a different purpose, representativeness of the sample can be ignored."],
			["Hai nhóm được chia ngẫu nhiên và đại diện cho cùng một tổng thể.", "The two groups are randomly assigned and represent the same population."]
		],
		"a": 3,
		"w": ["Mọi mục đích dùng mẫu đều cần mẫu giống tổng thể. Cỡ mẫu lớn hay chọn cho tiện không thay thế việc chia ngẫu nhiên.", "Every use of a sample requires it to resemble the population. A large size or convenience does not replace random assignment."]
	}, {
		"q": ["Kiểm tra ngẫu nhiên 50 sản phẩm từ lô 5.000, thấy 2 sản phẩm lỗi. Ước lượng số sản phẩm lỗi trong cả lô là bao nhiêu?", "Randomly inspecting 50 items from a lot of 5,000 finds 2 defective. What is the estimated number of defective items in the whole lot?"],
		"o": [
			["2", "2"],
			["Khoảng 200", "About 200"],
			["Khoảng 50", "About 50"],
			["Khoảng 2.000", "About 2,000"]
		],
		"a": 1,
		"w": ["Tỷ lệ lỗi mẫu = 2 / 50 = 4%, nhân 5.000 được khoảng 200. Con số 2 là số lỗi của mẫu, còn 2.000 là lệch một bậc thập phân. Đây chỉ là ước lượng điểm nên cần kèm khoảng.", "The sample defect rate is 2 / 50 = 4%, and 4% of 5,000 is about 200. The 2 is the sample count, and 2,000 is off by a decimal place. This is only a point estimate and should come with an interval."]
	}],
	joint,
	bayes,
	"samp-est": [{
		"q": ["Mẫu cho tỷ lệ gửi form 3%. Câu nào đúng?", "A sample gives a 3% form rate. Which statement is correct?"],
		"o": [
			["3% chính là tỷ lệ thật của tổng thể.", "3% is the true rate of the population."],
			["3% là ước lượng điểm; cần kèm khoảng để thể hiện mức không chắc chắn.", "3% is a point estimate; it needs an interval to show the uncertainty."],
			["Khoảng ước lượng 95% chắc chắn chứa tỷ lệ thật.", "A 95% interval certainly contains the true rate."],
			["Cỡ mẫu càng lớn thì ước lượng điểm càng bằng đúng tham số.", "The larger the sample, the exactly equal the point estimate is to the parameter."]
		],
		"a": 1,
		"w": ["Ước lượng điểm chỉ là một con số từ mẫu, gần nhưng hiếm khi bằng tham số. Khoảng 95% là từ cách làm đúng khoảng 95% số lần, không phải chắc chắn.", "A point estimate is one number from the sample, close to but rarely equal to the parameter. A 95% interval comes from a method that succeeds about 95% of the time, not with certainty."]
	}, {
		"q": ["Mẫu 200 lượt có 10 form (5%). Khoảng 95% cho tỷ lệ thật xấp xỉ là bao nhiêu?", "A sample of 200 visits has 10 forms (5%). What is the approximate 95% interval for the true rate?"],
		"o": [
			["4,0% đến 6,0%", "4.0% to 6.0%"],
			["0,0% đến 10,0%", "0.0% to 10.0%"],
			["3,5% đến 6,5%", "3.5% to 6.5%"],
			["2,0% đến 8,0%", "2.0% to 8.0%"]
		],
		"a": 3,
		"w": ["SE = √(0,05 × 0,95 / 200) ≈ 0,0154 và sai số biên = 1,96 × 0,0154 ≈ 0,030, nên khoảng là 5% ± 3,0 điểm. Các khoảng còn lại hẹp quá hoặc rộng quá so với tính toán.", "SE = √(0.05 × 0.95 / 200) ≈ 0.0154 and margin = 1.96 × 0.0154 ≈ 0.030, so the interval is 5% ± 3.0 points. The other intervals are too narrow or too wide compared with the computation."]
	}],
	"ht-rule": [{
		"q": ["Vì sao phải chốt α và vạch bác bỏ trước khi mở số?", "Why must α and the rejection line be fixed before opening the numbers?"],
		"o": [
			["Vì α càng lớn thì kết quả càng đúng.", "Because the larger α is, the more correct the result."],
			["Vì vạch bác bỏ chỉ có ý nghĩa với mẫu nhỏ.", "Because the rejection line matters only for small samples."],
			["Vì đổi α sau khi nhìn mẫu thì α không còn là tỷ lệ báo động giả đã hứa.", "Because changing α after seeing the sample means α is no longer the false-alarm rate you promised."],
			["Vì quy định pháp luật bắt buộc dùng α = 5%.", "Because the law requires α = 5%."]
		],
		"a": 2,
		"w": ["Mức ý nghĩa là cam kết về tỷ lệ báo động giả của luật quyết định. Điều chỉnh sau khi biết kết quả làm cam kết đó mất giá trị.", "The significance level is a commitment about the decision rule's false-alarm rate. Adjusting it after seeing the result destroys that commitment."]
	}, {
		"q": ["Kiểm định hai phía mức 5% với vạch ±1,96. Thống kê z = −2,10. Quyết định đúng là gì?", "A two-sided test at the 5% level has cutoffs of ±1.96. The test statistic is z = −2.10. What is the correct decision?"],
		"o": [
			["Không bác H0, vì z âm.", "Do not reject H0, because z is negative."],
			["Không bác H0, vì 2,10 vẫn gần 2.", "Do not reject H0, because 2.10 is still near 2."],
			["Bác H0 và kết luận chắc chắn H1 đúng.", "Reject H0 and conclude H1 is certainly true."],
			["Bác H0, vì ∣−2,10∣ vượt 1,96.", "Reject H0, because ∣−2.10∣ exceeds 1.96."]
		],
		"a": 3,
		"w": ["Kiểm định hai phía bác khi thống kê vượt vạch ở một trong hai đuôi, và −2,10 thấp hơn −1,96. Dấu âm không làm mất ý nghĩa; bác H0 vẫn không chứng minh chắc chắn H1.", "A two-sided test rejects when the statistic crosses the cutoff in either tail, and −2.10 is below −1.96. The negative sign does not matter; rejecting H0 still does not prove H1 with certainty."]
	}],
	"ht-h0": [{
		"q": ["P-value lớn, mẫu chỉ vài chục form. Cách nói nào đúng nhất?", "The p-value is large and the sample has only a few dozen forms. Which wording is most accurate?"],
		"o": [
			["Chưa bác H0; mẫu chưa đủ lệch để bác, chưa phải chứng minh hai bản bằng nhau.", "We have not rejected H0; the sample is not deviant enough, which does not prove the two versions are equal."],
			["Chấp nhận H0: hai bản đã được chứng minh bằng nhau.", "Accept H0: the two versions are proven equal."],
			["Bác H1 vì p lớn.", "Reject H1 because p is large."],
			["Bản B chắc chắn thắng vì p lớn.", "Version B surely wins because p is large."]
		],
		"a": 0,
		"w": ["Không bác H0 chỉ nói bằng chứng chưa đủ, nhất là với mẫu nhỏ. Từ «chấp nhận H0» dễ khiến người nghe tin rằng đã chứng minh không có khác biệt.", "Failing to reject H0 only says the evidence is insufficient, especially with a small sample. The phrase 'accept H0' misleads listeners into thinking no difference was proven."]
	}, {
		"q": ["Bạn muốn kiểm tra bản mới B có tỷ lệ form khác bản A hay không. Cặp giả thuyết đúng là gì?", "You want to test whether the new version B has a different form rate than version A. Which pair of hypotheses is correct?"],
		"o": [
			["H0: p_B ≠ p_A; H1: p_B = p_A", "H0: p_B ≠ p_A; H1: p_B = p_A"],
			["H0: B thắng; H1: A thắng", "H0: B wins; H1: A wins"],
			["H0: p_B > p_A; H1: p_B < p_A", "H0: p_B > p_A; H1: p_B < p_A"],
			["H0: p_B = p_A; H1: p_B ≠ p_A", "H0: p_B = p_A; H1: p_B ≠ p_A"]
		],
		"a": 3,
		"w": ["H0 là giả định «không khác» để tính p-value, còn H1 là điều bạn nghi ngờ. Đảo vai trò, hay đưa «B thắng» vào H0, không cho phép tính được p-value.", "H0 is the 'no difference' assumption used to compute the p-value, and H1 is what you suspect. Swapping roles, or putting 'B wins' in H0, does not allow computing the p-value."]
	}],
	"ht-p": [{
		"q": ["p = 0,03 nghĩa là gì?", "What does p = 0.03 mean?"],
		"o": [
			["Xác suất H0 đúng là 3%.", "The probability that H0 is true is 3%."],
			["Xác suất H1 đúng là 97%.", "The probability that H1 is true is 97%."],
			["Hai bản quảng cáo khác nhau 3%.", "The two ads differ by 3%."],
			["Nếu H0 đúng, mẫu lệch ít nhất như mẫu quan sát chỉ gặp khoảng 3% số lần.", "If H0 is true, a sample at least as extreme as the observed one occurs only about 3% of the time."]
		],
		"a": 3,
		"w": ["p là xác suất của dữ liệu trong thế giới H0, không phải xác suất của chính H0. Đảo hai vế thành P(H0 ∣ dữ liệu) là lỗi kinh điển.", "p is the probability of data in the H0 world, not the probability of H0 itself. Flipping it into P(H0 ∣ data) is a classic error."]
	}, {
		"q": ["Một thử nghiệm với 2 triệu lượt cho p = 0,001, nhưng tỷ lệ chỉ khác nhau 0,01 điểm phần trăm. Kết luận phù hợp?", "A test with 2 million visits gives p = 0.001, but the rates differ by only 0.01 percentage points. What is the appropriate conclusion?"],
		"o": [
			["Khác biệt lớn vì p rất nhỏ.", "The difference is large because p is very small."],
			["Xác suất H0 đúng là 0,1%.", "The probability that H0 is true is 0.1%."],
			["Có bằng chứng khác biệt thật, nhưng khác biệt rất nhỏ và cần xem có đáng tiền không.", "There is evidence of a real difference, but it is tiny and we should check whether it is worth the cost."],
			["Không có khác biệt vì chỉ 0,01 điểm.", "There is no difference because it is only 0.01 points."]
		],
		"a": 2,
		"w": ["Mẫu rất lớn làm p nhỏ ngay cả với khác biệt vô dụng, nên p không đo độ lớn. p cũng không phải xác suất của H0.", "A huge sample makes p small even for a useless difference, so p does not measure effect size. Nor is p the probability of H0."]
	}],
	"ht-err": [{
		"q": ["Với α = 5%, nghĩa là gì?", "With α = 5%, what does it mean?"],
		"o": [
			["5% quyết định của bạn là sai.", "5% of your decisions are wrong."],
			["Nếu hai bản thật sự bằng nhau và làm đúng luật, khoảng 5% số lần vẫn báo «khác».", "If the two versions are truly equal and the rule is followed, about 5% of the time you still report 'different'."],
			["Khi đã bác H0, xác suất H0 đúng là 5%.", "Once H0 is rejected, the probability H0 is true is 5%."],
			["Xác suất bạn bỏ sót một khác biệt thật là 5%.", "The probability you miss a real difference is 5%."]
		],
		"a": 1,
		"w": ["α là sai lầm loại I, tính khi H0 đúng. Việc bỏ sót khác biệt thật là sai lầm loại II với xác suất β, một khái niệm khác.", "α is the Type I error rate, computed when H0 is true. Missing a real difference is Type II error with probability β, a different concept."]
	}, {
		"q": ["Một kiểm định có β = 0,35. Sức mạnh của kiểm định là bao nhiêu?", "A test has β = 0.35. What is its power?"],
		"o": [
			["0,35", "0.35"],
			["0,95", "0.95"],
			["0,05", "0.05"],
			["0,65", "0.65"]
		],
		"a": 3,
		"w": ["Sức mạnh = 1 − β = 0,65, là xác suất phát hiện khác biệt thật. Con số 0,35 là β (xác suất bỏ sót), còn 0,95 và 0,05 liên quan đến α chứ không phải β.", "Power = 1 − β = 0.65, the probability of detecting a real difference. The 0.35 is β (the miss rate), while 0.95 and 0.05 relate to α, not β."]
	}],
	"ht-t": [{
		"q": ["Vì sao dùng phân phối t thay vì z khi kiểm định trung bình với mẫu nhỏ?", "Why use the t distribution instead of z when testing a mean with a small sample?"],
		"o": [
			["Vì trung bình mẫu chắc chắn không theo phân phối chuẩn", "Because the sample mean is certainly not normally distributed"],
			["Vì vạch t luôn nhỏ hơn 1,96 nên dễ bác H0 hơn", "Because the t cutoff is always below 1.96, making H0 easier to reject"],
			["Vì độ lệch chuẩn phải ước từ mẫu nên có thêm bất định, đuôi dày hơn và vạch phải xa hơn", "Because the standard deviation is estimated from the sample, adding uncertainty, so tails are heavier and the cutoff sits farther out"],
			["Vì t chỉ dùng khi biết trước tổng thể có 12 phần tử", "Because t is only used when the population is known to have 12 elements"]
		],
		"a": 2,
		"w": ["Khi s thay cho σ, thống kê có thêm nhiễu nên đuôi dày hơn và vạch (ví dụ 2,201 với 11 bậc tự do) lớn hơn 1,96. Vạch t không nhỏ hơn mà lớn hơn z; dùng z sẽ bác H0 quá dễ.", "When s replaces σ the statistic carries extra noise, so tails are heavier and the cutoff (e.g. 2.201 with 11 df) is larger than 1.96. The t cutoff is larger, not smaller, than z; using z rejects H0 too easily."]
	}, {
		"q": ["Mẫu n = 16 tuần có x̄ = 105 form, s = 10, giả thuyết μ0 = 100. Giá trị t = (x̄ − μ0) / (s / √n) là bao nhiêu?", "A sample of n = 16 weeks has x̄ = 105 forms, s = 10, and H0 says μ0 = 100. What is t = (x̄ − μ0) / (s / √n)?"],
		"o": [
			["2,0", "2.0"],
			["0,5", "0.5"],
			["8,0", "8.0"],
			["1,25", "1.25"]
		],
		"a": 0,
		"w": ["s/√n = 10/4 = 2,5 nên t = 5 / 2,5 = 2,0, với 15 bậc tự do. 0,5 là quên chia cho √n; 8,0 là chia cho s/n thay vì s/√n; 1,25 là quên chia cho s.", "s/√n = 10/4 = 2.5, so t = 5 / 2.5 = 2.0 with 15 df. 0.5 forgets the √n; 8.0 divides by s/n instead of s/√n; 1.25 forgets to divide by s."]
	}],
	"ht-peek": [{
		"q": ["Bạn xem p-value mỗi ngày và dừng thí nghiệm ngay khi p dưới 5%. Điều gì đúng?", "You check the p-value daily and stop the test as soon as p drops below 5%. What is true?"],
		"o": [
			["Tỷ lệ báo động giả vẫn đúng 5% vì mỗi lần xem dùng mức 5%", "The false alarm rate stays exactly 5% because each look uses the 5% level"],
			["Tỷ lệ báo động giả thấp hơn 5% vì bạn có nhiều dữ liệu hơn", "The false alarm rate is below 5% because you have more data"],
			["Chỉ độ mạnh (power) bị ảnh hưởng, báo động giả không đổi", "Only power is affected; false alarms do not change"],
			["Tỷ lệ báo động giả thực tế cao hơn 5% đã viết", "The real false alarm rate is higher than the 5% you wrote"]
		],
		"a": 3,
		"w": ["Mỗi lần xem là thêm một cơ hội báo nhầm, nên xác suất ít nhất một lần báo nhầm vượt 5%. Mức 5% từng lần không cộng lại thành 5% cho cả quá trình xem lặp.", "Every look is another chance of a false alarm, so the chance of at least one exceeds 5%. A 5% level per look does not add up to 5% across repeated looks."]
	}, {
		"q": ["Bạn xem kết quả 4 lần, mỗi lần có 5% cơ hội báo nhầm, coi các lần độc lập. Xác suất ít nhất một lần báo nhầm gần bằng bao nhiêu?", "You look at the results 4 times, each with a 5% chance of a false alarm, treating looks as independent. About what is the chance of at least one false alarm?"],
		"o": [
			["20%", "20%"],
			["Khoảng 18,5%", "About 18.5%"],
			["5%", "5%"],
			["Khoảng 81,5%", "About 81.5%"]
		],
		"a": 1,
		"w": ["1 − 0,95⁴ = 1 − 0,8145 ≈ 0,185. 20% là cộng thẳng 4 × 5% (chỉ xấp xỉ thô, không chính xác); 81,5% là 0,95⁴, tức xác suất không báo nhầm lần nào.", "1 − 0.95⁴ = 1 − 0.8145 ≈ 0.185. 20% is the crude sum 4 × 5% (a rough approximation, not exact); 81.5% is 0.95⁴, the chance of no false alarm at all."]
	}],
	"ht-means": [{
		"q": ["Trường hợp nào làm công thức kiểm định t hai trung bình độc lập ở thẻ này không còn đúng?", "In which case does the independent two-sample t formula on this card stop being valid?"],
		"o": [
			["Cùng một nhóm người nhìn thấy cả hai bản quảng cáo, nên hai mẫu không độc lập", "The same people saw both ad versions, so the two samples are not independent"],
			["Hai nhóm có độ lệch chuẩn khác nhau (30 và 40)", "The two groups have different standard deviations (30 and 40)"],
			["Trung bình hai nhóm khác nhau (120 và 135)", "The two group means differ (120 and 135)"],
			["Mỗi nhóm có 36 quan sát", "Each group has 36 observations"]
		],
		"a": 0,
		"w": ["Công thức SE = √(s1²/n1 + s2²/n2) đã cho phép độ lệch chuẩn khác nhau, và việc có hiệu giữa hai trung bình chính là thứ ta kiểm. Điều kiện cốt lõi là hai mẫu độc lập.", "The SE = √(s1²/n1 + s2²/n2) formula already allows different standard deviations, and a gap between means is exactly what we test. The core condition is that the samples are independent."]
	}, {
		"q": ["Kênh X: trung bình 200, s = 30, n = 25. Kênh Y: trung bình 175, s = 40, n = 25 (nghìn đồng). Giá trị t của hiệu hai trung bình là bao nhiêu?", "Channel X: mean 200, s = 30, n = 25. Channel Y: mean 175, s = 40, n = 25 (thousand VND). What is t for the difference of means?"],
		"o": [
			["0,25", "0.25"],
			["0,5", "0.5"],
			["1,79", "1.79"],
			["2,5", "2.5"]
		],
		"a": 3,
		"w": ["SE = √(30²/25 + 40²/25) = √(36 + 64) = 10, nên t = 25 / 10 = 2,5. 0,25 là quên căn bậc hai; 0,5 là chia cho √(30² + 40²) = 50 mà bỏ qua n; 1,79 là cộng hai sai số riêng (6 + 8 = 14) thay vì cộng phương sai.", "SE = √(30²/25 + 40²/25) = √(36 + 64) = 10, so t = 25 / 10 = 2.5. 0.25 forgets the square root; 0.5 divides by √(30² + 40²) = 50 and ignores n; 1.79 adds the two standard errors (6 + 8 = 14) instead of adding variances."]
	}],
	"ht-props": [{
		"q": ["Với 2,0% và 2,6% trên 2.000 lượt xem mỗi bản, z ≈ 1,27 < 1,96. Kết luận đúng là gì?", "With 2.0% and 2.6% on 2,000 views per version, z ≈ 1.27 < 1.96. What is the right conclusion?"],
		"o": [
			["Đã chứng minh hai bản có tỷ lệ bằng nhau", "It proves the two versions have equal rates"],
			["Chưa đủ bằng chứng để bác H0, nhưng không chứng minh hai bản bằng nhau", "Not enough evidence to reject H0, but this does not prove the two versions are equal"],
			["Bản B thắng vì 2,6% lớn hơn 2,0%", "B wins because 2.6% is larger than 2.0%"],
			["Bản A chắc chắn tốt hơn vì z dương nhỏ", "A is certainly better because z is small and positive"]
		],
		"a": 1,
		"w": ["Không bác được H0 chỉ nghĩa là dữ liệu chưa đủ mạnh để loại nhiễu, không phải bằng chứng hai bản giống nhau. Chênh 0,6 điểm phần trăm với khoảng 50 form mỗi bản vẫn có thể là nhiễu.", "Failing to reject H0 only means the data are too weak to rule out noise, not evidence that the versions are the same. A 0.6 point gap with about 50 forms per version can still be noise."]
	}, {
		"q": ["Bản A: 50 form trên 1.000 lượt (5%). Bản B: 70 form trên 1.000 lượt (7%). Dùng tỷ lệ gộp, z gần bằng bao nhiêu?", "Version A: 50 forms on 1,000 views (5%). Version B: 70 forms on 1,000 views (7%). Using the pooled rate, about what is z?"],
		"o": [
			["2,66", "2.66"],
			["3,77", "3.77"],
			["1,88", "1.88"],
			["1,33", "1.33"]
		],
		"a": 2,
		"w": ["Tỷ lệ gộp = 120/2000 = 0,06; SE = √(0,06 × 0,94 × (1/1000 + 1/1000)) ≈ 0,01062; z = 0,02 / 0,01062 ≈ 1,88, vẫn dưới 1,96. 2,66 là quên cộng cả hai nhóm trong (1/n1 + 1/n2); 3,77 là nhân đôi z.", "Pooled rate = 120/2000 = 0.06; SE = √(0.06 × 0.94 × (1/1000 + 1/1000)) ≈ 0.01062; z = 0.02 / 0.01062 ≈ 1.88, still below 1.96. 2.66 uses only one group in (1/n1 + 1/n2); 3.77 doubles z."]
	}],
	"ht-chi": [{
		"q": ["Giả thuyết H0 của kiểm định chi-bình phương trên bảng kênh × mua hàng là gì?", "What is H0 in a chi-square test on a channel × purchase table?"],
		"o": [
			["Kênh gây ra việc mua hàng", "The channel causes the purchase"],
			["Dữ liệu theo phân phối chuẩn", "The data follow a normal distribution"],
			["Kênh và việc mua hàng độc lập với nhau", "Channel and purchase are independent"],
			["Hai kênh có cùng số người", "The two channels have the same number of people"]
		],
		"a": 2,
		"w": ["H0 nói hai biến không liên quan, và các ô kỳ vọng được tính theo giả thuyết đó. Bác H0 cho thấy có liên hệ, chưa chứng minh nhân quả; kiểm định này không đòi dữ liệu chuẩn.", "H0 says the two variables are unrelated, and the expected cells are computed under it. Rejecting H0 shows an association, not causation; this test does not need normal data."]
	}, {
		"q": ["GDN: 45 mua, 55 không mua. TikTok: 15 mua, 85 không mua. Tính χ² (1 bậc tự do).", "GDN: 45 buy, 55 do not. TikTok: 15 buy, 85 do not. Compute χ² (1 df)."],
		"o": [
			["Khoảng 21,43", "About 21.43"],
			["15,0", "15.0"],
			["Khoảng 10,71", "About 10.71"],
			["3,84", "3.84"]
		],
		"a": 0,
		"w": ["N = 200, tổng cột mua = 60 nên E = 30 cho ô mua của mỗi kênh và 70 cho ô không mua. χ² = 15²/30 + 15²/30 + 15²/70 + 15²/70 = 7,5 + 7,5 + 3,21 + 3,21 ≈ 21,43. 15,0 chỉ cộng hai ô mua; 10,71 chỉ tính một kênh; 3,84 là vạch tới hạn chứ không phải χ².", "N = 200 and total buyers = 60, so E = 30 for each channel's buy cell and 70 for the no-buy cell. χ² = 15²/30 + 15²/30 + 15²/70 + 15²/70 = 7.5 + 7.5 + 3.21 + 3.21 ≈ 21.43. 15.0 sums only the buy cells; 10.71 covers one channel only; 3.84 is the critical value, not χ²."]
	}],
	"ht-anova": [{
		"q": ["Vì sao không nên chạy kiểm định t cho từng cặp trong ba kênh thay vì một kiểm định ANOVA?", "Why not run a t test on each pair of three channels instead of one ANOVA?"],
		"o": [
			["Vì kiểm định t không dùng được khi có hơn hai nhóm dữ liệu số", "Because the t test cannot be used on numeric data with more than two groups"],
			["Vì ANOVA cho biết ngay cặp kênh nào khác nhau", "Because ANOVA tells you directly which pair of channels differs"],
			["Vì ANOVA không cần giả định gì về độ rộng các nhóm", "Because ANOVA needs no assumption about the spread of the groups"],
			["Vì nhiều kiểm định làm tỷ lệ báo động giả tổng thể tăng lên", "Because multiple tests raise the overall false alarm rate"]
		],
		"a": 3,
		"w": ["Ba kênh có 3 cặp, mỗi cặp là một cơ hội báo nhầm nên rủi ro tổng vượt 5%. Kiểm định t vẫn chạy được trên từng cặp, và F chỉ nói ít nhất một nhóm khác, không chỉ ra cặp nào; ANOVA còn giả định độ rộng các nhóm gần nhau.", "Three channels give 3 pairs, each a chance for a false alarm, so the total risk exceeds 5%. A t test can run on each pair, and F only says at least one group differs without naming the pair; ANOVA also assumes similar spreads."]
	}, {
		"q": ["Ba nhóm (nghìn đồng): 5, 6, 7 / 7, 8, 9 / 12, 13, 14. Tính F = MS_giữa / MS_trong.", "Three groups (thousand VND): 5, 6, 7 / 7, 8, 9 / 12, 13, 14. Compute F = MS_between / MS_within."],
		"o": [
			["78", "78"],
			["39", "39"],
			["13", "13"],
			["6,5", "6.5"]
		],
		"a": 1,
		"w": ["Trung bình nhóm là 6, 8, 13; trung bình chung 9. SS giữa = 3 × (9 + 1 + 16) = 78, chia 2 bậc tự do được 39. SS trong = 2 + 2 + 2 = 6, chia 6 bậc tự do được 1. F = 39. 78 là quên chia bậc tự do tử số; 13 là chia 78 cho 6; 6,5 là chia 39 cho 6.", "Group means are 6, 8, 13; grand mean 9. SS between = 3 × (9 + 1 + 16) = 78, divided by 2 df gives 39. SS within = 2 + 2 + 2 = 6, divided by 6 df gives 1. F = 39. 78 skips the numerator df; 13 divides 78 by 6; 6.5 divides 39 by 6."]
	}],
	"eda-ask": [{
		"q": ["Bạn vẽ mọi cặp cột, chọn cặp đẹp nhất rồi tính p-value cho cặp đó. Dùng p-value này thế nào là đúng?", "You plot every pair of columns, pick the prettiest, then compute a p-value for that pair. What is the right way to use it?"],
		"o": [
			["Coi đó là gợi ý để viết một câu hỏi và kiểm định mới trước khi báo cáo", "Treat it as a lead to write a new question and test in advance before reporting"],
			["Báo cáo như một kiểm định đã viết trước", "Report it as a test that was written in advance"],
			["Dùng được vì cặp đẹp nhất luôn có ý nghĩa thực", "It is fine because the prettiest pair is always truly significant"],
			["Chỉ cần làm tròn p xuống cho đẹp", "Just round p down so it looks better"]
		],
		"a": 0,
		"w": ["Chọn cặp sau khi đã thấy kết quả làm p-value mất nghĩa của một kiểm định viết trước. Khám phá là hợp lệ để tìm ý, nhưng ý đó phải được kiểm lại bằng câu hỏi đặt trước.", "Picking the pair after seeing the result strips the p-value of its meaning as a pre-written test. Exploring is fine for finding ideas, but the idea must be re-tested with a question set in advance."]
	}, {
		"q": ["Tỷ lệ form giảm từ 2,0% xuống 1,6% trên 25.000 lượt. Mất khoảng bao nhiêu form so với tỷ lệ cũ?", "The form rate dropped from 2.0% to 1.6% on 25,000 views. About how many forms were lost versus the old rate?"],
		"o": [
			["400 form", "400 forms"],
			["500 form", "500 forms"],
			["10 form", "10 forms"],
			["100 form", "100 forms"]
		],
		"a": 3,
		"w": ["Giảm 0,4 điểm phần trăm × 25.000 = 100 form. 400 là số form ở mức 1,6%; 500 là số form ở mức 2,0%; cả hai không phải phần chênh.", "A drop of 0.4 percentage points × 25,000 = 100 forms. 400 is the number of forms at 1.6% and 500 at 2.0%; neither is the difference."]
	}],
	"eda-src": [{
		"q": ["File có 10.000 dòng, mỗi dòng là một chuyến taxi, và 30% dòng có tip. Điều đó nghĩa là gì?", "A file has 10,000 rows, each a taxi trip, and 30% of rows have a tip. What does that mean?"],
		"o": [
			["30% người đi taxi luôn boa", "30% of taxi riders always tip"],
			["30% chuyến có tip, chưa chắc là 30% số người đi", "30% of trips have a tip, not necessarily 30% of riders"],
			["30% khách hàng của cửa hàng bạn sẽ boa", "30% of your own store's customers will tip"],
			["Dòng nào cũng có tip với xác suất 30% như nhau, bất kể nguồn", "Every row has a 30% tip probability regardless of source"]
		],
		"a": 1,
		"w": ["Hạt của dòng là chuyến, nên tỷ lệ là tỷ lệ chuyến. Muốn nói về người cần dữ liệu có mã người; và file công khai không đại diện cho khách của bạn.", "The row grain is a trip, so the rate is a rate of trips. Speaking about people needs a person ID, and a public file does not represent your customers."]
	}, {
		"q": ["Bảng có 500 dòng, mỗi dòng là một lịch hẹn, 200 khách khác nhau, 120 dòng ghi «hủy». Tỷ lệ lịch hẹn bị hủy là bao nhiêu?", "A table has 500 rows, each an appointment, 200 distinct customers, and 120 rows marked cancelled. What share of appointments was cancelled?"],
		"o": [
			["60%", "60%"],
			["40%", "40%"],
			["24%", "24%"],
			["76%", "76%"]
		],
		"a": 2,
		"w": ["Mẫu số phải cùng hạt với dòng: 120 / 500 = 24%. 60% lấy 120 chia 200 khách, lẫn hạt; 40% là 200/500; 76% là phần không hủy.", "The denominator must match the row grain: 120 / 500 = 24%. 60% divides by the 200 customers, mixing grains; 40% is 200/500; 76% is the share not cancelled."]
	}],
	"eda-type": [{
		"q": ["Cột mã kênh (1 = GDN, 2 = Facebook, 3 = TikTok) có trung bình 2,4. Nhận định nào đúng?", "A channel code column (1 = GDN, 2 = Facebook, 3 = TikTok) has a mean of 2.4. Which statement is right?"],
		"o": [
			["Kênh trung bình nằm giữa Facebook và TikTok", "The average channel sits between Facebook and TikTok"],
			["Khách nghiêng về Facebook hơn GDN", "Customers lean toward Facebook over GDN"],
			["Con số 2,4 không có nghĩa vì đây là dữ liệu chữ không thứ tự", "The 2.4 is meaningless because this is unordered categorical data"],
			["2,4 là trung vị của ba kênh", "2.4 is the median of the three channels"]
		],
		"a": 2,
		"w": ["Mã 1, 2, 3 chỉ là nhãn nhóm (nominal), khoảng cách giữa chúng không đo được. Phép tính vẫn chạy nhưng câu trả lời vô nghĩa.", "Codes 1, 2, 3 are only group labels (nominal) and the gaps between them are not measurable. The calculation runs, but the answer is meaningless."]
	}, {
		"q": ["Cột nào sau đây là kiểu chữ có thứ tự (ordinal)?", "Which column below is ordinal?"],
		"o": [
			["Số sao đánh giá từ 1 đến 5", "Star rating from 1 to 5"],
			["Tên kênh quảng cáo", "Ad channel name"],
			["Chi tiêu quảng cáo theo triệu đồng", "Ad spend in millions of VND"],
			["Mã khách hàng", "Customer ID"]
		],
		"a": 0,
		"w": ["Số sao có hướng (nhiều hơn là tốt hơn) nhưng khoảng giữa các bậc chưa chắc đều. Tên kênh và mã khách là nominal; chi tiêu là số với khoảng đo được.", "Stars have direction (more is better) but the gaps between steps are not necessarily equal. Channel name and customer ID are nominal; spend is numeric with measurable gaps."]
	}],
	"eda-row": [{
		"q": ["Một khách có hai dòng vì tải lại trang. Có nên luôn xóa dòng trùng không?", "A customer has two rows because the page was reloaded. Should duplicate rows always be deleted?"],
		"o": [
			["Có, mọi dòng cùng mã khách đều là lỗi", "Yes, every row with the same customer ID is an error"],
			["Không bao giờ xóa vì SUM tự loại trùng", "Never delete, because SUM removes duplicates automatically"],
			["Có, vì hạt của dòng luôn là một khách", "Yes, because the row grain is always one customer"],
			["Không, phải kiểm tra xem đó là trùng lặp hay hai lần mua thật", "No, first check whether it is a duplicate or two genuine purchases"]
		],
		"a": 3,
		"w": ["Hai lần mua thật là hai dòng hợp lệ; chỉ lần gửi form lặp mới là lỗi. SUM cộng mọi dòng đang có nên không tự loại trùng.", "Two genuine purchases are two valid rows; only a repeated form submission is an error. SUM adds every row present, so it does not remove duplicates."]
	}, {
		"q": ["Bảng 2.000 dòng nhưng chỉ 1.850 mã khách khác nhau; 150 dòng thừa đều là trùng thật, mỗi dòng 300 nghìn đồng. Tổng bị phóng thêm bao nhiêu?", "A table has 2,000 rows but only 1,850 distinct customer IDs; the 150 extra rows are true duplicates of 300 thousand VND each. By how much is the total inflated?"],
		"o": [
			["555.000 nghìn đồng", "555,000 thousand VND"],
			["45.000 nghìn đồng", "45,000 thousand VND"],
			["600.000 nghìn đồng", "600,000 thousand VND"],
			["150 nghìn đồng", "150 thousand VND"]
		],
		"a": 1,
		"w": ["2.000 − 1.850 = 150 dòng thừa, 150 × 300 = 45.000 nghìn đồng. 555.000 là 1.850 × 300 (tổng đúng); 600.000 là tổng đã phóng (2.000 × 300).", "2,000 − 1,850 = 150 extra rows, and 150 × 300 = 45,000 thousand. 555,000 is 1,850 × 300 (the correct total); 600,000 is the inflated total (2,000 × 300)."]
	}],
	"eda-miss": [{
		"q": ["Người chi rất cao hay không khai thu nhập. Điền ô trống bằng trung bình sẽ ra sao?", "Very high spenders tend not to report income. What happens if you fill blanks with the mean?"],
		"o": [
			["Kéo kết quả về phía an toàn giả và che mất nhóm chi cao", "It pulls results toward a false safe middle and hides the high spenders"],
			["Cho kết quả không chệch vì trung bình là ước lượng tốt nhất", "It is unbiased because the mean is the best estimate"],
			["Chỉ làm mẫu nhỏ đi, không đổi gì khác", "It only shrinks the sample and changes nothing else"],
			["Làm trung bình tăng lên vì thêm nhiều giá trị lớn", "It raises the mean because many large values are added"]
		],
		"a": 0,
		"w": ["Khi ô trống phụ thuộc chính giá trị bị thiếu, điền trung bình đưa nhóm đó về giữa và làm sai phân phối. Điền cho đủ bảng không có nghĩa là biết giá trị.", "When missingness depends on the missing value itself, mean-filling drags that group to the middle and distorts the distribution. A full table does not mean you know the values."]
	}, {
		"q": ["800 khách khai tuổi, trung bình 40; 200 khách để trống. Nếu điền 0 cho 200 ô trống thì trung bình cột tuổi là bao nhiêu?", "800 customers gave an age with mean 40; 200 left it blank. If the 200 blanks are filled with 0, what is the column mean?"],
		"o": [
			["40", "40"],
			["36", "36"],
			["28", "28"],
			["32", "32"]
		],
		"a": 3,
		"w": ["(40 × 800 + 0 × 200) / 1.000 = 32. 40 là trung bình khi bỏ ô trống; 36 và 28 không ra từ phép tính nào.", "(40 × 800 + 0 × 200) / 1,000 = 32. 40 is the mean ignoring the blanks; 36 and 28 do not come from any valid calculation."]
	}],
	"eda-out": [{
		"q": ["Một tuần có 120 form vượt hàng rào IQR. Nên làm gì?", "One week has 120 forms and exceeds the IQR fence. What should you do?"],
		"o": [
			["Xóa ngay vì vượt hàng rào là sai", "Delete it right away because crossing the fence means it is wrong"],
			["Kiểm tra nguồn (tuần lễ thật hay gõ thừa số 0) rồi mới quyết định", "Check the source (a real peak week or an extra typed zero) before deciding"],
			["Giữ nguyên vì ngoại lai luôn là dữ liệu thật", "Keep it because outliers are always real data"],
			["Thay bằng trung bình vì như vậy là trung lập", "Replace it with the mean because that is neutral"]
		],
		"a": 1,
		"w": ["Vượt hàng rào chỉ là bất thường so với phần giữa mẫu, không chứng minh sai. Xóa hay thay đều là quyết định đổi con số đã xảy ra và có thể làm mất đúng câu chuyện.", "Crossing the fence only means unusual relative to the middle of the sample, not that it is wrong. Deleting or replacing both change what happened and can erase the very story."]
	}, {
		"q": ["Q1 = 15, Q3 = 25. Hàng rào trên theo Q3 + 1,5 × IQR là bao nhiêu?", "Q1 = 15, Q3 = 25. What is the upper fence Q3 + 1.5 × IQR?"],
		"o": [
			["15", "15"],
			["35", "35"],
			["40", "40"],
			["55", "55"]
		],
		"a": 2,
		"w": ["IQR = 25 − 15 = 10, hàng rào = 25 + 15 = 40. 15 là chỉ 1,5 × IQR; 35 là cộng 1 × IQR; 55 là dùng hệ số 3.", "IQR = 25 − 15 = 10, fence = 25 + 15 = 40. 15 is only 1.5 × IQR; 35 adds 1 × IQR; 55 uses a factor of 3."]
	}],
	"eda-scale": [{
		"q": ["Chuẩn hóa z KHÔNG làm được điều nào sau đây?", "Which of these does z-standardizing NOT do?"],
		"o": [
			["Đưa trung bình của cột về 0", "Bring the column mean to 0"],
			["Đưa độ lệch chuẩn của cột về 1", "Bring the column standard deviation to 1"],
			["Biến một cột lệch thành đối xứng", "Turn a skewed column into a symmetric one"],
			["Đặt các cột về cùng thước để tính khoảng cách", "Put columns on one scale for distance calculations"]
		],
		"a": 2,
		"w": ["z chỉ dịch và co giãn, hình dạng phân phối giữ nguyên nên cột lệch vẫn lệch. Ba tác dụng còn lại đều đúng.", "z only shifts and rescales, so the shape stays and a skewed column stays skewed. The other three effects are true."]
	}, {
		"q": ["Cột chi tiêu có trung bình 8 triệu, độ lệch chuẩn 4 triệu. Một khách chi 14 triệu có điểm z bao nhiêu?", "A spend column has mean 8 million and standard deviation 4 million. What is the z-score of a customer who spent 14 million?"],
		"o": [
			["1,5", "1.5"],
			["6", "6"],
			["0,75", "0.75"],
			["3,5", "3.5"]
		],
		"a": 0,
		"w": ["z = (14 − 8) / 4 = 1,5. 6 là chưa chia cho độ lệch chuẩn; 0,75 là chia 6 cho 8 (trung bình); 3,5 là chia 14 cho 4.", "z = (14 − 8) / 4 = 1.5. 6 skips the division by the standard deviation; 0.75 divides 6 by 8 (the mean); 3.5 divides 14 by 4."]
	}],
	"eda-bad": [{
		"q": ["Tỷ lệ form 200% và tuổi −3 khác gì ngoại lai?", "How do a 200% form rate and an age of −3 differ from outliers?"],
		"o": [
			["Chúng là ngoại lai nên nên giới hạn về mức trần", "They are outliers and should be capped at a ceiling"],
			["Chúng là khách hiếm nhưng thật", "They are rare but genuine customers"],
			["Chúng chỉ cần giữ vì xóa làm đổi trung bình", "They should be kept because deleting changes the mean"],
			["Chúng là giá trị không được phép, xử lý bằng luật rõ ràng và phải báo cáo bộ lọc", "They are impossible values, handled by an explicit rule and with the filter reported"]
		],
		"a": 3,
		"w": ["Ngoại lai là hiếm nhưng có thể xảy ra; 200% hay tuổi âm thì không thể xảy ra. Vì vậy cần luật thống nhất để bỏ hoặc sửa, và ghi rõ trong báo cáo.", "Outliers are rare but possible; 200% or a negative age is impossible. So a consistent rule to drop or fix them is needed, and it must be stated in the report."]
	}, {
		"q": ["Bảng 5.000 dòng, bỏ 150 dòng có tỷ lệ ngoài 0–100%. Câu báo cáo nào đúng?", "A table has 5,000 rows and 150 rows with a rate outside 0-100% are dropped. Which report line is correct?"],
		"o": [
			["5.000 dòng, không nhắc việc bỏ dòng", "5,000 rows, with no mention of dropped rows"],
			["4.850 dòng, sau khi bỏ 150 dòng (3%) có tỷ lệ ngoài 0–100%", "4,850 rows, after dropping 150 rows (3%) with a rate outside 0-100%"],
			["4.850 dòng, sau khi bỏ 15% dòng không hợp lệ", "4,850 rows, after dropping 15% invalid rows"],
			["4.850 dòng, sau khi bỏ 0,3% dòng không hợp lệ", "4,850 rows, after dropping 0.3% invalid rows"]
		],
		"a": 1,
		"w": ["5.000 − 150 = 4.850 và 150/5.000 = 3%. Báo cáo phải ghi bộ lọc và số dòng bị bỏ; 15% và 0,3% là phần trăm sai.", "5,000 − 150 = 4,850 and 150/5,000 = 3%. The report must state the filter and the rows dropped; 15% and 0.3% are wrong percentages."]
	}],
	"eda-cat": [{
		"q": ["Với cột kênh (chữ không thứ tự), nhận định nào đúng?", "For a channel column (unordered text), which statement is right?"],
		"o": [
			["Mode chỉ cho biết nhóm lớn nhất, không cho biết các nhóm còn lại nhỏ thế nào", "The mode only names the largest group, not how small the others are"],
			["Có thể tính trung bình của các kênh", "You can compute the mean of the channels"],
			["Sắp cột theo bảng chữ cái cho thấy xu hướng", "Sorting bars alphabetically shows a trend"],
			["Trung vị cho biết kênh nằm giữa", "The median tells you the middle channel"]
		],
		"a": 0,
		"w": ["Với nhóm không thứ tự chỉ có đếm và tỷ lệ; mode là phép tóm tắt duy nhất hợp lệ nhưng thiếu thông tin về phần còn lại. Thứ tự cột không mang ý nghĩa.", "Unordered groups allow only counts and shares; the mode is the only valid summary but says nothing about the rest. Bar order carries no meaning."]
	}, {
		"q": ["GDN 270 dòng, Facebook 450 dòng, TikTok 180 dòng. Facebook chiếm bao nhiêu phần trăm tổng số dòng?", "GDN has 270 rows, Facebook 450, TikTok 180. What percent of all rows is Facebook?"],
		"o": [
			["33%", "33%"],
			["62,5%", "62.5%"],
			["20%", "20%"],
			["50%", "50%"]
		],
		"a": 3,
		"w": ["Tổng 900 dòng, 450 / 900 = 50%. 33% là chia đều 3 kênh; 62,5% là 450 / 720 (bỏ GDN khỏi mẫu số); 20% là phần của TikTok.", "Total is 900 rows, 450 / 900 = 50%. 33% splits equally across 3 channels; 62.5% is 450 / 720 (leaving GDN out of the denominator); 20% is TikTok's share."]
	}],
	"eda-ord": [{
		"q": ["Điểm đánh giá trung bình 3,2 của khách chia hai cực (nhiều 5 sao và nhiều 1 sao) có vấn đề gì?", "An average rating of 3.2 comes from customers split between many 5-star and many 1-star votes. What is the problem?"],
		"o": [
			["Trung bình sao luôn là phép tính bị cấm", "Averaging stars is always forbidden"],
			["Trung bình giả định khoảng đều giữa các bậc và che đi việc khách chia hai cực", "The mean assumes equal gaps between steps and hides the two-pole split"],
			["3,2 chính là mode của cột", "3.2 is the mode of the column"],
			["Trung vị không dùng được với thang sao", "The median cannot be used with a star scale"]
		],
		"a": 1,
		"w": ["Thang sao có thứ tự nhưng khoảng giữa các bậc chỉ là giả định, và một con số trung bình giấu hình hai đỉnh. Trung vị lại chỉ cần thứ tự nên dùng được; 3,2 cũng không phải mode.", "A star scale is ordered but the gaps are an assumption, and one mean hides a two-peak shape. The median needs only order, so it can be used; 3.2 is not the mode either."]
	}, {
		"q": ["50 khách: 30 người cho 5 sao, 10 người cho 3 sao, 10 người cho 1 sao. Trung vị là bao nhiêu?", "50 customers: 30 gave 5 stars, 10 gave 3 stars, 10 gave 1 star. What is the median?"],
		"o": [
			["3,8", "3.8"],
			["3", "3"],
			["5", "5"],
			["1", "1"]
		],
		"a": 2,
		"w": ["Xếp tăng dần: 10 giá trị 1, 10 giá trị 3, rồi 30 giá trị 5. Vị trí 25 và 26 đều là 5 nên trung vị = 5. 3,8 là trung bình (190 / 50); 3 là điểm giữa thang, không phải trung vị.", "Sorted: ten 1s, ten 3s, then thirty 5s. Positions 25 and 26 are both 5, so the median is 5. 3.8 is the mean (190 / 50); 3 is the middle of the scale, not the median."]
	}],
	"eda-num": [{
		"q": ["Trung bình 30 lớn hơn nhiều trung vị 20 cho thấy điều gì?", "A mean of 30 well above a median of 20 suggests what?"],
		"o": [
			["Dữ liệu đối xứng hoàn hảo", "The data are perfectly symmetric"],
			["Trung vị tính sai", "The median was miscalculated"],
			["Có đuôi phải kéo dài, một vài giá trị lớn kéo trung bình lên", "A long right tail: a few large values pull the mean up"],
			["Trung bình luôn là con số đáng tin hơn", "The mean is always the more trustworthy figure"]
		],
		"a": 2,
		"w": ["Điểm cực đoan làm trung bình đổi nhiều còn trung vị gần như không đổi, nên khoảng cách giữa hai số là dấu hiệu lệch. Dữ liệu đối xứng thì hai số xấp xỉ nhau.", "An extreme point moves the mean a lot while the median barely moves, so a gap between them signals skew. Symmetric data would give nearly equal values."]
	}, {
		"q": ["Số form 5 tuần: 10, 12, 14, 16, 98. Trung vị là bao nhiêu?", "Forms over 5 weeks: 10, 12, 14, 16, 98. What is the median?"],
		"o": [
			["14", "14"],
			["30", "30"],
			["12", "12"],
			["20", "20"]
		],
		"a": 0,
		"w": ["Giá trị ở giữa của 5 số đã xếp là 14. 30 là trung bình (150 / 5); 12 và 16 là các giá trị liền kề, không phải ở giữa.", "The middle value of the 5 sorted numbers is 14. 30 is the mean (150 / 5); 12 and 16 are neighbors, not the middle."]
	}],
	"eda-r": [{
		"q": ["Hệ số r gần 0 nghĩa là gì?", "What does an r near 0 mean?"],
		"o": [
			["Hai cột hoàn toàn độc lập", "The two columns are completely independent"],
			["Cột này không gây ra cột kia", "One column does not cause the other"],
			["Các điểm nằm sát nhau", "The points sit close together"],
			["Không có quan hệ tuyến tính rõ, nhưng vẫn có thể có quan hệ khác như hình chữ U", "No clear linear relation, but another relation such as a U shape may still exist"]
		],
		"a": 3,
		"w": ["r chỉ đo mức đi cùng theo đường thẳng, nên r gần 0 không loại được quan hệ phi tuyến. Nó cũng không nói gì về nhân quả, và cần nhìn biểu đồ chấm.", "r measures only straight-line co-movement, so r near 0 cannot rule out a nonlinear relation. It also says nothing about causation, so look at the scatter plot."]
	}, {
		"q": ["cov(x, y) = 18, s_x = 4, s_y = 15. Tính r = cov / (s_x × s_y).", "cov(x, y) = 18, s_x = 4, s_y = 15. Compute r = cov / (s_x × s_y)."],
		"o": [
			["0,95", "0.95"],
			["0,3", "0.3"],
			["0,03", "0.03"],
			["1,2", "1.2"]
		],
		"a": 1,
		"w": ["r = 18 / (4 × 15) = 18 / 60 = 0,3. 0,95 là cộng 4 + 15 thay vì nhân; 1,2 là quên chia cho s_x và vì r không thể vượt 1 nên đã báo lỗi.", "r = 18 / (4 × 15) = 18 / 60 = 0.3. 0.95 adds 4 + 15 instead of multiplying; 1.2 forgets s_x, and since r cannot exceed 1 it signals an error."]
	}],
	"eda-cause": [{
		"q": ["Số form và đơn kem cùng tăng với r = 0,8. Nhận định nào đúng nhất?", "Forms and cream orders rise together with r = 0.8. Which statement is best?"],
		"o": [
			["Có thể có biến thứ ba như mùa lễ làm cả hai cùng tăng, nên chưa kết luận được nhân quả", "A third variable such as the holiday season may lift both, so causation cannot be concluded"],
			["Tăng form làm đơn kem tăng", "More forms cause more cream orders"],
			["Đơn kem tăng nên form tăng", "Cream orders rising causes forms to rise"],
			["Vì form tăng trước nên form là nguyên nhân", "Because forms rose first, forms are the cause"]
		],
		"a": 0,
		"w": ["r cao chỉ cho thấy đi cùng nhau; một biến gây nhiễu (confounder) có thể tạo ra tương quan. Thứ tự thời gian cũng chưa đủ để chứng minh nhân quả.", "A high r only shows co-movement; a confounder can create the correlation. Time order alone does not prove causation."]
	}, {
		"q": ["Muốn biết tăng ngân sách có làm tăng form hay không, cách nào đáng tin nhất?", "To learn whether raising budget increases forms, which approach is most reliable?"],
		"o": [
			["So sánh form tuần này với tuần trước", "Compare this week's forms with last week's"],
			["Tính r giữa ngân sách và form qua các tuần", "Compute r between budget and forms across weeks"],
			["Chờ thêm vài tuần xem form có tăng cùng ngân sách không", "Wait a few more weeks to see if forms rise with budget"],
			["Tăng ngân sách ở một nhóm và giữ nguyên ở nhóm đối chứng cùng thời điểm", "Raise budget in one group and keep it flat in a control group at the same time"]
		],
		"a": 3,
		"w": ["Nhóm đối chứng cùng thời điểm tách phần tăng do ngân sách khỏi mùa vụ và kênh. So sánh trước sau, r, hay chờ thêm đều vẫn bị trộn với yếu tố khác.", "A concurrent control group separates the budget effect from season and channel. Before-after comparisons, r, or waiting are all still mixed with other factors."]
	}],
	"eda-group": [{
		"q": ["Hai kênh cùng trung bình 40 form mỗi tuần. Điều gì đúng?", "Two channels both average 40 forms per week. What is true?"],
		"o": [
			["Hai kênh hiệu quả như nhau", "The two channels perform equally"],
			["Trung bình giấu độ rộng, một kênh có thể ổn định còn kênh kia dao động mạnh", "The mean hides spread: one channel may be steady while the other swings widely"],
			["Hai kênh có cùng độ lệch chuẩn", "The two channels have the same standard deviation"],
			["Có thể tính r giữa tên kênh và số form", "You can compute r between channel name and forms"]
		],
		"a": 1,
		"w": ["Cùng trung bình vẫn có thể rất khác về phân phối (ví dụ nhờ một tuần lễ). Tên kênh là nhóm, không nằm trên trục số nên không có r với nó.", "The same mean can hide very different distributions (for example one peak week). Channel name is a group, not a number line, so r does not apply."]
	}, {
		"q": ["Số form Facebook theo 4 tuần: 10, 20, 30, 100 (trung bình 40). Trung vị là bao nhiêu?", "Facebook forms over 4 weeks: 10, 20, 30, 100 (mean 40). What is the median?"],
		"o": [
			["40", "40"],
			["20", "20"],
			["25", "25"],
			["100", "100"]
		],
		"a": 2,
		"w": ["Với 4 số đã xếp, trung vị là trung bình hai số giữa: (20 + 30) / 2 = 25. 40 là trung bình bị kéo lên bởi tuần 100; 20 chỉ là một trong hai số giữa.", "With 4 sorted numbers the median is the average of the middle two: (20 + 30) / 2 = 25. 40 is the mean pulled up by the 100 week; 20 is just one of the two middle values."]
	}],
	"eda-tab": [{
		"q": ["Trong bảng kênh × mua, 30 trong 40 người mua đến từ GDN, tức 75%. Con số này nói gì?", "In a channel × purchase table, 30 of 40 buyers came from GDN, i.e. 75%. What does this figure say?"],
		"o": [
			["GDN có tỷ lệ chuyển đổi 75%", "GDN has a 75% conversion rate"],
			["75% người xem GDN đã mua", "75% of GDN viewers bought"],
			["75% người mua đến từ GDN, không phải tỷ lệ mua của GDN", "75% of buyers came from GDN; it is not GDN's purchase rate"],
			["GDN gây ra 75% đơn hàng", "GDN caused 75% of the orders"]
		],
		"a": 2,
		"w": ["Mẫu số là tổng cột (40 người mua), nên đây là phần của người mua. Tỷ lệ mua của GDN dùng tổng hàng (30/100 = 30%); và bảng chưa nói gì về nguyên nhân.", "The denominator is the column total (40 buyers), so this is a share of buyers. GDN's purchase rate uses the row total (30/100 = 30%), and the table says nothing about causes."]
	}, {
		"q": ["GDN: 30 mua, 70 không. TikTok: 10 mua, 90 không. Trong 40 người mua, bao nhiêu phần trăm đến từ TikTok?", "GDN: 30 buy, 70 do not. TikTok: 10 buy, 90 do not. Of the 40 buyers, what percent came from TikTok?"],
		"o": [
			["25%", "25%"],
			["10%", "10%"],
			["5%", "5%"],
			["75%", "75%"]
		],
		"a": 0,
		"w": ["Theo cột: 10 / 40 = 25%. 10% là tỷ lệ mua của TikTok (10/100, theo hàng); 5% là 10/200; 75% là phần của GDN.", "By column: 10 / 40 = 25%. 10% is TikTok's purchase rate (10/100, by row); 5% is 10/200; 75% is GDN's share."]
	}],
	"eda-flip": [{
		"q": ["Nghịch lý Simpson xảy ra khi nào?", "When does Simpson's paradox happen?"],
		"o": [
			["Khi tính sai số học ở một trong các tầng", "When one stratum has an arithmetic error"],
			["Khi mẫu lớn hơn luôn cho kết quả đúng hơn", "When the larger sample always gives the right answer"],
			["Khi tầng luôn là nguyên nhân thật của kết quả", "When the stratum is always the true cause of the result"],
			["Khi tỷ lệ gộp trộn các tầng có kích thước lệch nhau nên đảo chiều so với từng tầng", "When the pooled rate mixes strata of unequal size and so reverses the direction seen in each stratum"]
		],
		"a": 3,
		"w": ["Không có lỗi tính toán: mọi con số đều đúng, chỉ là gộp trộn hai đám khác thành phần. Tầng nào là nguyên nhân thì cần hỏi riêng, không tự động suy ra.", "There is no arithmetic error: every number is right, but pooling mixes groups of different composition. Whether a stratum is the cause needs a separate question."]
	}, {
		"q": ["Kênh X: khách mới 30/100, khách cũ 19/20. Kênh Y: khách mới 5/20, khách cũ 90/100. Tỷ lệ gộp của X là bao nhiêu?", "Channel X: new customers 30/100, returning 19/20. Channel Y: new 5/20, returning 90/100. What is X's pooled rate?"],
		"o": [
			["62,5%", "62.5%"],
			["Khoảng 41%", "About 41%"],
			["49%", "49%"],
			["30%", "30%"]
		],
		"a": 1,
		"w": ["X gộp = (30 + 19) / (100 + 20) = 49 / 120 ≈ 40,8%. Y gộp = 95 / 120 ≈ 79%, nên Y thắng gộp dù X hơn ở cả hai tầng. 62,5% là trung bình đơn của 30% và 95%; 49% là số lượng, không phải tỷ lệ.", "X pooled = (30 + 19) / (100 + 20) = 49 / 120 ≈ 40.8%. Y pooled = 95 / 120 ≈ 79%, so Y wins pooled even though X wins in both strata. 62.5% is a simple average of 30% and 95%; 49% is a count, not a rate."]
	}],
	"sql-wh": [{
		"q": ["Vì sao không nên hỏi doanh thu 18 tháng trực tiếp trên bảng đơn hàng đang phục vụ thu ngân?", "Why avoid asking 18-month revenue directly on the live order table used by cashiers?"],
		"o": [
			["Bảng giao dịch (OLTP) tối ưu cho ghi nhỏ và trạng thái hiện tại; truy vấn nặng cạnh tranh tài nguyên và có thể thiếu lịch sử", "The transactional table (OLTP) is tuned for small writes and current state; heavy queries compete for resources and history may be missing"],
			["Vì SQL không cộng được trên bảng OLTP", "Because SQL cannot aggregate on an OLTP table"],
			["Vì kho dữ liệu chỉ giữ trạng thái hiện tại", "Because a data warehouse keeps only the current state"],
			["Vì ETL xóa dữ liệu nguồn sau khi nạp", "Because ETL deletes the source data after loading"]
		],
		"a": 0,
		"w": ["OLTP dành cho nhiều lần ghi ngắn; OLAP trong kho dành cho câu hỏi đọc trên lịch sử. SQL vẫn cộng được trên OLTP, và ETL sao chép sang kho chứ không xóa nguồn.", "OLTP is built for many short writes; OLAP in a warehouse is for reads across history. SQL can still aggregate on OLTP, and ETL copies into the warehouse rather than deleting the source."]
	}, {
		"q": ["Bước nào của ETL đổi chuỗi «VND 1.200.000» thành số 1200000?", "Which ETL step turns the string «VND 1.200.000» into the number 1200000?"],
		"o": [
			["Extract (trích xuất)", "Extract"],
			["Load (nạp)", "Load"],
			["Query (truy vấn)", "Query"],
			["Transform (biến đổi, làm sạch)", "Transform (convert and clean)"]
		],
		"a": 3,
		"w": ["Đổi định dạng và làm sạch là Transform. Extract chỉ lấy dữ liệu ra khỏi nguồn, Load chỉ ghi vào kho; Query không phải bước của ETL.", "Converting formats and cleaning is Transform. Extract only pulls data from the source and Load only writes it into the warehouse; Query is not an ETL step."]
	}],
	"sql-star": [{
		"q": ["«Hạt» (grain) của bảng sự kiện trong sơ đồ sao là gì?", "What is the «grain» of a fact table in a star schema?"],
		"o": [
			["Số dòng của bảng", "The number of rows in the table"],
			["Điều một dòng đại diện, ví dụ một form hay một dòng sản phẩm", "What one row represents, such as one form or one product line"],
			["Số cột của bảng", "The number of columns in the table"],
			["Tên của bảng danh mục", "The name of the dimension table"]
		],
		"a": 1,
		"w": ["Hạt xác định nghĩa của một dòng; lẫn hạt (đơn hàng với dòng sản phẩm) làm SUM bị nhân lên. Nó không phải kích thước hay tên bảng.", "Grain defines what a row means; mixing grains (order versus product line) multiplies SUMs. It is not table size or a table name."]
	}, {
		"q": ["100 đơn, mỗi đơn có 3 dòng sản phẩm; phí vận chuyển 20 nghìn đồng mỗi đơn được lặp ở cả 3 dòng. Tổng phí vận chuyển thật là bao nhiêu?", "100 orders, each with 3 product lines; the 20 thousand VND shipping fee per order is repeated on all 3 lines. What is the true total shipping fee?"],
		"o": [
			["6.000 nghìn đồng", "6,000 thousand VND"],
			["600 nghìn đồng", "600 thousand VND"],
			["2.000 nghìn đồng", "2,000 thousand VND"],
			["20 nghìn đồng", "20 thousand VND"]
		],
		"a": 2,
		"w": ["100 đơn × 20 = 2.000 nghìn đồng. SUM trên bảng dòng sản phẩm cho 300 dòng × 20 = 6.000, bị nhân 3 vì sai hạt.", "100 orders × 20 = 2,000 thousand. SUM over the product-line table gives 300 rows × 20 = 6,000, tripled by the wrong grain."]
	}],
	"sql-key": [{
		"q": ["Form có campaign_id = 884 nhưng bảng chiến dịch chỉ có 881, 882, 883. Ràng buộc nào bị vi phạm?", "A form has campaign_id = 884 but the campaign table has only 881, 882, 883. Which constraint is violated?"],
		"o": [
			["Ràng buộc thực thể (khóa chính duy nhất, không null)", "The entity constraint (unique, non-null primary key)"],
			["Ràng buộc nghĩa (tỷ lệ từ 0 đến 1)", "The domain constraint (rate between 0 and 1)"],
			["Ràng buộc tham chiếu (khóa ngoại mồ côi)", "The referential constraint (orphan foreign key)"],
			["Không có ràng buộc nào, đây chỉ là lỗi hiển thị", "None; it is only a display issue"]
		],
		"a": 2,
		"w": ["Khóa ngoại 884 trỏ tới một dòng không tồn tại nên vi phạm tham chiếu. Khóa chính của bảng chiến dịch vẫn hợp lệ và cột không có giá trị vô lý.", "Foreign key 884 points to a nonexistent row, violating referential integrity. The campaign primary key is still valid and the column holds no absurd value."]
	}, {
		"q": ["Bảng form có 1.000 dòng, trong đó 20 dòng mang campaign_id = 884 không tồn tại. INNER JOIN sang bảng chiến dịch trả về bao nhiêu dòng?", "A form table has 1,000 rows, 20 of which carry the nonexistent campaign_id = 884. How many rows does an INNER JOIN to the campaign table return?"],
		"o": [
			["980", "980"],
			["1.000", "1,000"],
			["20", "20"],
			["1.020", "1,020"]
		],
		"a": 0,
		"w": ["INNER JOIN chỉ giữ dòng có khóa khớp nên 1.000 − 20 = 980; 20 form biến mất khỏi báo cáo. 1.000 sẽ là kết quả của LEFT JOIN (kèm tên trống); JOIN không tự nhân thêm dòng.", "INNER JOIN keeps only matching keys, so 1,000 − 20 = 980; those 20 forms vanish from the report. 1,000 would be a LEFT JOIN (with empty names); the join does not add rows."]
	}],
	"sql-ddl": [{
		"q": ["Muốn xóa chỉ các dòng tháng 1 nhưng giữ bảng, lệnh nào phù hợp?", "You want to remove only January rows but keep the table. Which command fits?"],
		"o": [
			["DROP TABLE bang", "DROP TABLE t"],
			["ALTER TABLE bang DROP COLUMN thang", "ALTER TABLE t DROP COLUMN month"],
			["TRUNCATE rồi nhập lại tay phần còn lại", "TRUNCATE then retype the remaining rows"],
			["DELETE FROM bang WHERE thang = 1", "DELETE FROM t WHERE month = 1"]
		],
		"a": 3,
		"w": ["DELETE kèm WHERE chỉ xóa dòng thỏa điều kiện (DML). DROP TABLE xóa cả bảng, ALTER ... DROP COLUMN xóa cả cột, TRUNCATE xóa toàn bộ dòng.", "DELETE with WHERE removes only matching rows (DML). DROP TABLE removes the whole table, ALTER ... DROP COLUMN removes a column, TRUNCATE removes all rows."]
	}, {
		"q": ["Bảng có 12.000 dòng. Chạy UPDATE spend = 0 mà quên WHERE. Bao nhiêu dòng bị đổi?", "A table has 12,000 rows. You run UPDATE spend = 0 and forget the WHERE. How many rows change?"],
		"o": [
			["1", "1"],
			["12.000", "12,000"],
			["0", "0"],
			["1.500", "1,500"]
		],
		"a": 1,
		"w": ["UPDATE không có WHERE áp dụng cho mọi dòng nên cả 12.000 dòng về 0. Một dòng hay 1.500 dòng chỉ xảy ra nếu có điều kiện lọc.", "UPDATE without WHERE applies to every row, so all 12,000 become 0. One row or 1,500 would require a filter condition."]
	}],
	"sql-run": [{
		"q": ["Vì sao SELECT channel, SUM(forms) AS total ... WHERE total > 0 báo lỗi?", "Why does SELECT channel, SUM(forms) AS total ... WHERE total > 0 fail?"],
		"o": [
			["WHERE chạy trước SELECT và GROUP BY nên chưa có tên total cũng như tổng", "WHERE runs before SELECT and GROUP BY, so neither the alias total nor the sum exists yet"],
			["Vì alias phải viết hoa", "Because aliases must be uppercase"],
			["Vì SUM không dùng được cùng SELECT", "Because SUM cannot be used with SELECT"],
			["Vì SELECT luôn chạy đầu tiên nên total bị trùng tên", "Because SELECT always runs first, so total clashes"]
		],
		"a": 0,
		"w": ["Thứ tự logic là FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY. Lọc theo tổng phải dùng HAVING; SELECT không chạy đầu tiên dù viết đầu tiên.", "Logical order is FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY. Filtering on a sum needs HAVING; SELECT does not run first even though it is written first."]
	}, {
		"q": ["Sau WHERE và GROUP BY có 4 kênh với tổng form 30, 8, 25, 5. Câu có HAVING SUM(forms) > 10 trả về bao nhiêu dòng?", "After WHERE and GROUP BY there are 4 channels with form totals 30, 8, 25, 5. How many rows does HAVING SUM(forms) > 10 return?"],
		"o": [
			["4", "4"],
			["3", "3"],
			["1", "1"],
			["2", "2"]
		],
		"a": 3,
		"w": ["Chỉ 30 và 25 lớn hơn 10, nên có 2 dòng. 4 là số nhóm trước HAVING; 3 hoặc 1 là đếm sai ngưỡng.", "Only 30 and 25 exceed 10, so 2 rows. 4 is the number of groups before HAVING; 3 or 1 miscount the threshold."]
	}],
	"sql-having": [{
		"q": ["Điều kiện spend > 0 (không dùng hàm gộp) nên đặt ở đâu?", "Where should the condition spend > 0 (no aggregate function) go?"],
		"o": [
			["Chỉ ở HAVING", "Only in HAVING"],
			["Ở WHERE, để bỏ dòng trước khi nhóm", "In WHERE, to drop rows before grouping"],
			["Ở SELECT", "In SELECT"],
			["Không thể dùng cùng GROUP BY", "It cannot be used with GROUP BY"]
		],
		"a": 1,
		"w": ["WHERE lọc dòng trước khi nhóm nên bớt việc cho bước sau; HAVING dành cho điều kiện trên kết quả gộp. Hai mệnh đề dùng chung được.", "WHERE filters rows before grouping, saving later work; HAVING is for conditions on aggregates. They can be used together."]
	}, {
		"q": ["Tổng form theo kênh: GDN 25, Facebook 60, TikTok 15, Zalo 10. HAVING SUM(forms) > 15 giữ lại bao nhiêu kênh?", "Form totals by channel: GDN 25, Facebook 60, TikTok 15, Zalo 10. How many channels does HAVING SUM(forms) > 15 keep?"],
		"o": [
			["3", "3"],
			["1", "1"],
			["2", "2"],
			["4", "4"]
		],
		"a": 2,
		"w": ["Chỉ GDN (25) và Facebook (60) lớn hơn 15; TikTok đúng bằng 15 nên không thỏa dấu lớn hơn hẳn. 3 sẽ đúng nếu dùng >=.", "Only GDN (25) and Facebook (60) are strictly above 15; TikTok equals 15 so it fails the strict comparison. 3 would be right with >=."]
	}],
	"sql-count": [{
		"q": ["AVG(forms) tính trên cột có ô NULL được tính thế nào?", "How is AVG(forms) computed on a column that has NULL cells?"],
		"o": [
			["Chia tổng cho số dòng, coi NULL là 0", "Total divided by the row count, treating NULL as 0"],
			["Trả về NULL nếu có một ô NULL", "Returns NULL if any cell is NULL"],
			["Trung bình của các ô có số, bỏ qua NULL", "The average of the cells with numbers, ignoring NULL"],
			["Chia tổng cho COUNT(*)", "Total divided by COUNT(*)"]
		],
		"a": 2,
		"w": ["SUM, AVG và COUNT(cột) bỏ NULL, nên AVG chia cho số ô có số, không phải số dòng. Coi NULL là 0 hay chia cho COUNT(*) làm trung bình thấp đi.", "SUM, AVG and COUNT(column) skip NULL, so AVG divides by the number of non-NULL cells, not rows. Treating NULL as 0 or dividing by COUNT(*) lowers the average."]
	}, {
		"q": ["5 tuần có số form 8, NULL, 12, 10, NULL. AVG(forms) bằng bao nhiêu?", "Five weeks have forms 8, NULL, 12, 10, NULL. What is AVG(forms)?"],
		"o": [
			["10", "10"],
			["6", "6"],
			["30", "30"],
			["5", "5"]
		],
		"a": 0,
		"w": ["SUM = 30 trên 3 ô có số nên AVG = 10. 6 là 30 chia 5 dòng; 30 là SUM; 5 là COUNT(*).", "SUM = 30 over 3 non-NULL cells, so AVG = 10. 6 is 30 divided by 5 rows; 30 is the SUM; 5 is COUNT(*)."]
	}],
	"sql-like": [{
		"q": ["Mẫu LIKE 'F-__' có khớp «F-AB» không?", "Does the pattern LIKE 'F-__' match «F-AB»?"],
		"o": [
			["Không, vì chỉ khớp hai chữ số", "No, because it matches only two digits"],
			["Không, vì LIKE phân biệt chữ hoa với số", "No, because LIKE separates letters from digits"],
			["Có, nhưng chỉ khi dùng REGEXP", "Yes, but only when REGEXP is used"],
			["Có, vì hai dấu gạch dưới khớp hai ký tự bất kỳ, kể cả chữ", "Yes, because the two underscores match any two characters, letters included"]
		],
		"a": 3,
		"w": ["Dấu gạch dưới là một ký tự bất kỳ, không phải chữ số. Muốn đòi đúng hai chữ số phải dùng regex của hệ thống.", "The underscore is any single character, not a digit. Requiring exactly two digits needs the system's regex."]
	}, {
		"q": ["Các tên kênh: tiktok, tok, xtok, tokyo. Bao nhiêu tên khớp LIKE '%tok'?", "Channel names: tiktok, tok, xtok, tokyo. How many match LIKE '%tok'?"],
		"o": [
			["1", "1"],
			["3", "3"],
			["2", "2"],
			["4", "4"]
		],
		"a": 1,
		"w": ["%tok khớp chuỗi kết thúc bằng tok: tiktok, tok, xtok. «tokyo» không khớp vì kết thúc bằng yo.", "%tok matches strings ending in tok: tiktok, tok, xtok. «tokyo» does not match because it ends in yo."]
	}],
	"sql-date": [{
		"q": ["Vì sao ngay >= '2026-11-01' AND ngay < '2026-12-01' tốt hơn MONTH(ngay) = 11?", "Why is ngay >= '2026-11-01' AND ngay < '2026-12-01' better than MONTH(ngay) = 11?"],
		"o": [
			["Không phụ thuộc số ngày của tháng và thường dùng được chỉ mục", "It does not depend on the days in a month and can usually use the index"],
			["Vì MONTH không tồn tại trong SQL", "Because MONTH does not exist in SQL"],
			["Vì khoảng ngắn hơn luôn chạy nhanh hơn", "Because a shorter range always runs faster"],
			["Vì phải dùng BETWEEN với '2026-11-31'", "Because you must use BETWEEN with '2026-11-31'"]
		],
		"a": 0,
		"w": ["Khoảng nửa mở không cần biết tháng có 28, 30 hay 31 ngày, và không bọc hàm quanh cột nên chỉ mục còn dùng được. MONTH có tồn tại nhưng thường khiến chỉ mục bị bỏ; ngày 11-31 không có.", "A half-open range needs no knowledge of 28, 30 or 31 days and wraps no function around the column, so the index stays usable. MONTH exists but often defeats the index; November 31 does not exist."]
	}, {
		"q": ["Khoảng ngay >= '2028-02-01' AND ngay < '2028-03-01' bao phủ bao nhiêu ngày?", "How many days does ngay >= '2028-02-01' AND ngay < '2028-03-01' cover?"],
		"o": [
			["28", "28"],
			["30", "30"],
			["31", "31"],
			["29", "29"]
		],
		"a": 3,
		"w": ["2028 là năm nhuận nên tháng 2 có 29 ngày, từ 01 đến 29. 28 là tháng 2 năm thường.", "2028 is a leap year, so February has 29 days, from the 1st to the 29th. 28 is February in a common year."]
	}],
	"sql-nest": [{
		"q": ["Nếu tập con trong NOT IN (SELECT ...) có chứa NULL thì điều gì có thể xảy ra?", "If the subquery set inside NOT IN (SELECT ...) contains NULL, what can happen?"],
		"o": [
			["Câu có thể không trả về dòng nào", "The query may return no rows at all"],
			["NULL bị bỏ qua nên kết quả vẫn đúng như bình thường", "NULL is ignored so the result is the same as usual"],
			["Câu luôn báo lỗi cú pháp", "The query always raises a syntax error"],
			["NOT IN tự động hoạt động giống hệt EXISTS", "NOT IN automatically behaves exactly like EXISTS"]
		],
		"a": 0,
		"w": ["NOT IN so sánh với từng giá trị trong tập; gặp NULL thì phép so sánh thành không xác định nên có thể không dòng nào được giữ. Nói NULL bị bỏ qua là sai, và NOT EXISTS mới là cách an toàn hơn.", "NOT IN compares against every value in the set; a comparison with NULL is unknown, so no row may qualify. Saying NULL is ignored is wrong, and NOT EXISTS is the safer alternative."]
	}, {
		"q": ["Một câu truy vấn tương quan có 1.000 dòng ngoài và 500 dòng trong. Trường hợp xấu nhất, số lần so sánh là bao nhiêu?", "A correlated query has 1,000 outer rows and 500 inner rows. In the worst case, how many comparisons are made?"],
		"o": [
			["1.500", "1,500"],
			["500.000", "500,000"],
			["1.000", "1,000"],
			["5.000", "5,000"]
		],
		"a": 1,
		"w": ["Quét cả bảng trong cho mỗi dòng ngoài nên 1.000 × 500 = 500.000. Con số 1.500 là cộng chứ không phải nhân.", "Scanning the whole inner table for each outer row gives 1,000 × 500 = 500,000. The 1,500 figure adds instead of multiplying."]
	}],
	"sql-join": [{
		"q": ["Khi khóa nối bị lặp ở cả hai bảng thì INNER JOIN cho ra số dòng thế nào?", "When the join key repeats in both tables, how many rows does an INNER JOIN return?"],
		"o": [
			["INNER JOIN tự loại trùng nên số dòng không tăng", "INNER JOIN removes duplicates automatically so the row count does not grow"],
			["Bằng số dòng của bảng nhỏ hơn", "It equals the row count of the smaller table"],
			["Có thể bằng tích của số lần lặp ở hai bên", "It can equal the product of the repeat counts on both sides"],
			["Luôn báo lỗi vì khóa không duy nhất", "It always raises an error because the key is not unique"]
		],
		"a": 2,
		"w": ["Mỗi dòng bên trái ghép với mọi dòng cùng khóa bên phải nên dòng bị nhân lên. JOIN không tự khử trùng và cũng không báo lỗi.", "Each left row pairs with every right row of the same key, so rows multiply. JOIN neither deduplicates nor raises an error."]
	}, {
		"q": ["Một chiến dịch có 4 form, mỗi form đáng 10. Bảng giá có 3 dòng cùng mã chiến dịch. Sau INNER JOIN, số dòng và SUM(giá trị form) là bao nhiêu?", "A campaign has 4 forms, each worth 10. The price table has 3 rows with the same campaign code. After an INNER JOIN, what are the row count and SUM(form value)?"],
		"o": [
			["12 dòng, SUM = 40", "12 rows, SUM = 40"],
			["7 dòng, SUM = 70", "7 rows, SUM = 70"],
			["4 dòng, SUM = 40", "4 rows, SUM = 40"],
			["12 dòng, SUM = 120", "12 rows, SUM = 120"]
		],
		"a": 3,
		"w": ["4 × 3 = 12 dòng và mỗi form xuất hiện 3 lần nên SUM = 12 × 10 = 120 thay vì 40. SUM = 40 chỉ đúng khi chưa nhân dòng.", "4 × 3 = 12 rows, and each form appears 3 times, so SUM = 12 × 10 = 120 instead of 40. SUM = 40 holds only before the rows multiply."]
	}],
	"sql-left": [{
		"q": ["Sau LEFT JOIN, bạn thêm WHERE trên một cột của bảng bên phải (ví dụ cột = 'x'). Điều gì xảy ra với các dòng không khớp?", "After a LEFT JOIN you add a WHERE condition on a right-table column (for example column = 'x'). What happens to the unmatched rows?"],
		"o": [
			["Chúng bị loại vì cột đó là NULL, nên câu hành xử như INNER JOIN", "They are dropped because that column is NULL, so the query behaves like an INNER JOIN"],
			["Chúng được giữ lại với giá trị 0", "They are kept with the value 0"],
			["Chúng được giữ lại vì LEFT JOIN luôn giữ bên trái", "They are kept because LEFT JOIN always keeps the left side"],
			["Câu báo lỗi vì WHERE không được dùng sau LEFT JOIN", "The query errors because WHERE cannot follow a LEFT JOIN"]
		],
		"a": 0,
		"w": ["NULL = 'x' không đúng nên dòng không khớp bị lọc mất. Muốn vừa giữ vừa lọc thì đặt điều kiện trong ON.", "NULL = 'x' is not true, so unmatched rows are filtered out. To keep them and still filter, put the condition in ON."]
	}, {
		"q": ["8 cửa hàng, trong đó 6 cửa hàng có đúng một form. Sau LEFT JOIN từ bảng cửa hàng, COUNT(*) và COUNT(mã_form) lần lượt là bao nhiêu?", "There are 8 stores, 6 of which have exactly one form. After a LEFT JOIN from the store table, what are COUNT(*) and COUNT(form_id)?"],
		"o": [
			["6 và 8", "6 and 8"],
			["8 và 6", "8 and 6"],
			["6 và 6", "6 and 6"],
			["8 và 8", "8 and 8"]
		],
		"a": 1,
		"w": ["COUNT(*) đếm cả 2 cửa hàng có cột form là NULL nên ra 8; COUNT(mã_form) bỏ NULL nên ra 6.", "COUNT(*) also counts the 2 stores whose form column is NULL, giving 8; COUNT(form_id) skips NULLs, giving 6."]
	}],
	"sql-union": [{
		"q": ["UNION khác UNION ALL ở điểm nào?", "How does UNION differ from UNION ALL?"],
		"o": [
			["UNION ghép ngang theo khóa, UNION ALL xếp dọc", "UNION joins sideways by key, UNION ALL stacks vertically"],
			["UNION ALL loại dòng trùng, UNION thì không", "UNION ALL removes duplicate rows, UNION does not"],
			["UNION loại các dòng giống hệt nhau, UNION ALL giữ tất cả", "UNION removes identical rows, UNION ALL keeps all of them"],
			["Chỉ UNION yêu cầu các cột cùng số lượng", "Only UNION requires the same number of columns"]
		],
		"a": 2,
		"w": ["Cả hai đều xếp dọc, nhưng UNION thêm bước khử dòng trùng nên thường chậm hơn. Ghép ngang là việc của JOIN.", "Both stack vertically, but UNION adds a duplicate-removal step and is usually slower. Joining sideways is JOIN's job."]
	}, {
		"q": ["Bảng form tháng 1 có 150 dòng, tháng 2 có 90 dòng. Có 5 dòng của tháng 2 giống hệt từng ô một dòng của tháng 1 (không có trùng trong cùng một bảng). UNION cho bao nhiêu dòng?", "The January form table has 150 rows and February has 90. Five February rows are cell-for-cell identical to January rows (no duplicates within a single table). How many rows does UNION return?"],
		"o": [
			["240", "240"],
			["230", "230"],
			["150", "150"],
			["235", "235"]
		],
		"a": 3,
		"w": ["150 + 90 = 240 với UNION ALL, trừ 5 dòng trùng còn 235. 240 là kết quả của UNION ALL.", "150 + 90 = 240 with UNION ALL; removing the 5 duplicates leaves 235. 240 is what UNION ALL would return."]
	}],
	"sql-win": [{
		"q": ["Khác biệt chính giữa hàm cửa sổ và GROUP BY là gì?", "What is the main difference between a window function and GROUP BY?"],
		"o": [
			["Hàm cửa sổ giữ nguyên từng dòng và thêm một cột tính toán", "A window function keeps every row and adds a computed column"],
			["Hàm cửa sổ gộp các dòng về một dòng mỗi nhóm", "A window function collapses rows to one per group"],
			["Hàm cửa sổ bắt buộc phải đi cùng GROUP BY", "A window function must always be used together with GROUP BY"],
			["ORDER BY trong OVER giống hệt ORDER BY cuối câu", "ORDER BY inside OVER is identical to the final ORDER BY"]
		],
		"a": 0,
		"w": ["Hàm cửa sổ chỉ tính rồi dán giá trị lại vào từng dòng. ORDER BY trong OVER quyết định thứ tự tính, không phải thứ tự hiển thị.", "A window function computes and attaches a value to each row. ORDER BY inside OVER sets the calculation order, not the display order."]
	}, {
		"q": ["Bảng có 10 tuần cho 4 kênh (40 dòng). Câu SELECT kênh, tuần, forms, RANK() OVER (PARTITION BY kênh ORDER BY forms DESC) trả về bao nhiêu dòng?", "A table holds 10 weeks for 4 channels (40 rows). How many rows does SELECT channel, week, forms, RANK() OVER (PARTITION BY channel ORDER BY forms DESC) return?"],
		"o": [
			["4", "4"],
			["40", "40"],
			["10", "10"],
			["44", "44"]
		],
		"a": 1,
		"w": ["Hàm cửa sổ không thu gọn bảng nên vẫn còn 40 dòng, thêm một cột hạng. Chỉ GROUP BY kênh mới còn 4 dòng.", "A window function does not collapse the table, so all 40 rows remain with an added rank column. Only GROUP BY channel would leave 4 rows."]
	}],
	"sql-rank": [{
		"q": ["RANK và DENSE_RANK khác nhau thế nào khi có hòa?", "How do RANK and DENSE_RANK differ when there are ties?"],
		"o": [
			["DENSE_RANK để trống số hạng, RANK không để trống", "DENSE_RANK leaves a gap, RANK does not"],
			["Cả hai đều phá hòa giống ROW_NUMBER", "Both break ties the way ROW_NUMBER does"],
			["RANK để trống số hạng sau cụm hòa, DENSE_RANK không để trống", "RANK leaves a gap after a tie, DENSE_RANK does not"],
			["RANK bỏ các dòng hòa khỏi kết quả", "RANK drops tied rows from the result"]
		],
		"a": 2,
		"w": ["Ví dụ 40, 40, 35: RANK cho 1, 1, 3 còn DENSE_RANK cho 1, 1, 2. Chỉ ROW_NUMBER phá hòa bằng cách đánh số liên tục.", "For 40, 40, 35, RANK gives 1, 1, 3 while DENSE_RANK gives 1, 1, 2. Only ROW_NUMBER breaks ties by numbering consecutively."]
	}, {
		"q": ["Số form các tuần xếp giảm dần: 50, 50, 50, 42, 30. Tuần có 42 form có hạng bao nhiêu theo RANK và theo DENSE_RANK?", "Weekly forms sorted descending: 50, 50, 50, 42, 30. What rank does the 42-form week get under RANK and under DENSE_RANK?"],
		"o": [
			["2 và 4", "2 and 4"],
			["4 và 4", "4 and 4"],
			["2 và 2", "2 and 2"],
			["4 và 2", "4 and 2"]
		],
		"a": 3,
		"w": ["Ba tuần hòa chiếm hạng 1 nên RANK nhảy tới 4; DENSE_RANK không nhảy nên là 2.", "Three tied weeks take rank 1, so RANK jumps to 4; DENSE_RANK does not skip, so it gives 2."]
	}],
	"sql-part": [{
		"q": ["PARTITION BY trong hàm xếp hạng làm gì?", "What does PARTITION BY do in a ranking function?"],
		"o": [
			["Chia nhóm để mỗi nhóm tự xếp hạng từ 1 mà không mất dòng", "Splits rows into groups so each ranks from 1 without losing rows"],
			["Gộp mỗi nhóm thành một dòng như GROUP BY", "Collapses each group into one row like GROUP BY"],
			["Lọc các nhóm theo điều kiện như HAVING", "Filters groups by a condition like HAVING"],
			["Tạo một hạng 1 duy nhất cho cả bảng", "Creates a single rank 1 for the whole table"]
		],
		"a": 0,
		"w": ["PARTITION BY chỉ vẽ biên cửa sổ; nó không thu gọn dòng và không lọc nhóm. Bỏ nó đi thì cả bảng mới chỉ có một hạng 1.", "PARTITION BY only draws the window boundary; it neither collapses rows nor filters groups. Remove it and the whole table has just one rank 1."]
	}, {
		"q": ["5 kênh, mỗi kênh 8 tuần, dùng RANK() OVER (PARTITION BY kênh ORDER BY forms DESC) và không có hòa. Có bao nhiêu dòng mang hạng 1?", "There are 5 channels with 8 weeks each, using RANK() OVER (PARTITION BY channel ORDER BY forms DESC) with no ties. How many rows have rank 1?"],
		"o": [
			["1", "1"],
			["5", "5"],
			["8", "8"],
			["40", "40"]
		],
		"a": 1,
		"w": ["Mỗi kênh có đúng một hạng 1 nên có 5 dòng. Chỉ 1 dòng nếu bỏ PARTITION BY.", "Each channel has exactly one rank 1, so 5 rows. It would be 1 row only without PARTITION BY."]
	}],
	"sql-frame": [{
		"q": ["Với ROWS BETWEEN 2 PRECEDING AND CURRENT ROW, bảng thiếu một tuần giữa chừng thì điều gì xảy ra?", "With ROWS BETWEEN 2 PRECEDING AND CURRENT ROW, what happens when the table is missing a week in the middle?"],
		"o": [
			["Khung tự điền tuần vắng bằng 0", "The frame fills the missing week with 0"],
			["Khung chỉ lấy 3 tuần lịch gần nhất", "The frame takes only the last 3 calendar weeks"],
			["Khung vẫn lấy 3 dòng, nên trải rộng hơn 3 tuần lịch", "The frame still takes 3 rows, so it spans more than 3 calendar weeks"],
			["Khung luôn bằng cả partition", "The frame always equals the whole partition"]
		],
		"a": 2,
		"w": ["ROWS đếm theo dòng chứ không theo lịch và không tự điền giá trị thiếu.", "ROWS counts rows, not calendar time, and never fills in missing values."]
	}, {
		"q": ["Các dòng là tuần 1, 2, 4, 5 với forms 10, 20, 40, 50 (thiếu tuần 3). Trung bình ROWS BETWEEN 2 PRECEDING AND CURRENT ROW tại tuần 4 là bao nhiêu?", "The rows are weeks 1, 2, 4, 5 with forms 10, 20, 40, 50 (week 3 missing). What is the ROWS BETWEEN 2 PRECEDING AND CURRENT ROW average at week 4?"],
		"o": [
			["20", "20"],
			["30", "30"],
			["36,7", "36.7"],
			["23,3", "23.3"]
		],
		"a": 3,
		"w": ["Khung gồm tuần 1, 2, 4: (10 + 20 + 40) / 3 ≈ 23,3. Giá trị 20 coi tuần 3 là 0, còn 36,7 lấy nhầm cả tuần 5.", "The frame holds weeks 1, 2, 4: (10 + 20 + 40) / 3 ≈ 23.3. The value 20 treats week 3 as 0, and 36.7 wrongly includes week 5."]
	}],
	"sql-lag": [{
		"q": ["LAG(forms, 1) OVER (PARTITION BY kênh ORDER BY ngày) trả về giá trị nào?", "What does LAG(forms, 1) OVER (PARTITION BY channel ORDER BY date) return?"],
		"o": [
			["Giá trị của dòng đứng ngay trước trong thứ tự đã sắp", "The value of the row immediately before in the sorted order"],
			["Luôn là giá trị của ngày hôm qua theo lịch", "Always the value of yesterday on the calendar"],
			["Giá trị của dòng kế tiếp", "The value of the next row"],
			["Giá trị hôm qua, tự điền 0 nếu thiếu ngày", "Yesterday's value, filled with 0 if the date is missing"]
		],
		"a": 0,
		"w": ["LAG đi theo dòng chứ không theo lịch; thiếu ngày thì nó lấy dòng cũ hơn. Dòng kế tiếp là việc của LEAD.", "LAG follows rows, not the calendar; if a date is missing it takes an older row. The next row is LEAD's job."]
	}, {
		"q": ["Hôm nay có 45 form, dòng ngay trước (hôm qua) có 36 form. Mức tăng so với hôm qua là bao nhiêu phần trăm?", "Today has 45 forms and the previous row (yesterday) has 36. What is the percentage increase over yesterday?"],
		"o": [
			["20%", "20%"],
			["25%", "25%"],
			["9%", "9%"],
			["80%", "80%"]
		],
		"a": 1,
		"w": ["(45 − 36) / 36 = 9 / 36 = 25%. Chia cho 45 cho ra 20% là chia nhầm mẫu số.", "(45 − 36) / 36 = 9 / 36 = 25%. Dividing by 45 gives 20%, the wrong denominator."]
	}],
	"sql-nwin": [{
		"q": ["Mệnh đề WINDOW w AS (...) có tác dụng gì?", "What does a WINDOW w AS (...) clause do?"],
		"o": [
			["Tạo một bảng trung gian lưu sẵn kết quả", "It creates a stored intermediate table of results"],
			["Làm câu truy vấn cho kết quả khác đi", "It changes the query results"],
			["Chỉ đặt bí danh cho một đặc tả cửa sổ, ý nghĩa phép tính không đổi", "It only aliases a window specification; the meaning of the calculation does not change"],
			["Tự đồng bộ khung của mọi hàm trong câu", "It automatically syncs the frame of every function in the query"]
		],
		"a": 2,
		"w": ["Tên chỉ giúp khỏi viết lặp OVER dài. Không có bảng trung gian nào và không có phép tính mới.", "The name only avoids repeating a long OVER. There is no intermediate table and no new calculation."]
	}, {
		"q": ["w1 = (PARTITION BY kênh ORDER BY ngày) và w2 = (PARTITION BY kênh ORDER BY ngày DESC). Tổng chạy SUM(forms) OVER w1 và OVER w2 trên cùng một dòng có giống nhau không?", "w1 = (PARTITION BY channel ORDER BY date) and w2 = (PARTITION BY channel ORDER BY date DESC). Are the running totals SUM(forms) OVER w1 and OVER w2 the same on a given row?"],
		"o": [
			["Giống nhau vì cùng các cột", "The same, because they use the same columns"],
			["Giống nhau vì tên cửa sổ không có nghĩa", "The same, because window names carry no meaning"],
			["w2 báo lỗi vì DESC không dùng được trong WINDOW", "w2 errors because DESC cannot be used in WINDOW"],
			["Thường khác nhau, vì hai tên là hai đặc tả khác nhau", "Usually different, because two names are two different specifications"]
		],
		"a": 3,
		"w": ["Chiều sắp xếp đổi thì tổng chạy tính từ đầu khác nhau (một bên cộng từ ngày đầu, một bên từ ngày cuối). Hai tên khác nhau là hai đặc tả riêng dù nhìn giống.", "Reversing the order changes what the running total accumulates (from the first day versus from the last day). Two different names are two separate specs even if they look alike."]
	}],
	"sql-case": [{
		"q": ["Trong CASE WHEN, thứ tự các nhánh WHEN quan trọng như thế nào?", "In CASE WHEN, how much does the order of the WHEN branches matter?"],
		"o": [
			["Quan trọng: CASE lấy nhánh đúng đầu tiên từ trên xuống", "It matters: CASE takes the first true branch from the top"],
			["Không quan trọng, mọi nhánh đúng đều được áp dụng", "It does not matter; every true branch is applied"],
			["Nhánh đúng cuối cùng được lấy", "The last true branch is used"],
			["Không quan trọng vì NULL luôn rơi vào nhánh đầu", "It does not matter because NULL always falls into the first branch"]
		],
		"a": 0,
		"w": ["CASE dừng ở nhánh đúng đầu tiên, nên đảo thứ tự có thể đổi kết quả. NULL không bằng số nào nên cần nhánh riêng.", "CASE stops at the first true branch, so reordering can change results. NULL equals no number, so it needs its own branch."]
	}, {
		"q": ["Luật: dưới 5 triệu là 'thấp', từ 5 đến dưới 20 triệu là 'vừa', còn lại là 'cao'. Khách chi đúng 20 triệu thuộc nhãn nào?", "Rule: under 5 million is 'low', 5 up to under 20 million is 'mid', everything else is 'high'. Which label does a customer spending exactly 20 million get?"],
		"o": [
			["vừa", "mid"],
			["cao", "high"],
			["thấp", "low"],
			["NULL", "NULL"]
		],
		"a": 1,
		"w": ["20 không nhỏ hơn 20 nên không vào 'vừa', và rơi xuống nhánh còn lại là 'cao'. Biên của khoảng cần đọc kỹ.", "20 is not less than 20, so it misses 'mid' and falls to the remaining branch, 'high'. Read interval boundaries carefully."]
	}],
	"sql-proc": [{
		"q": ["Điểm nào đúng về thủ tục lưu sẵn (stored procedure) so với view?", "Which statement about a stored procedure versus a view is correct?"],
		"o": [
			["Thủ tục luôn chỉ đọc giống view", "A procedure is always read-only like a view"],
			["Quyền chạy thủ tục cho thấy mọi bảng bên trong nó", "Execute permission on a procedure exposes every table inside it"],
			["Thủ tục có thể ghi dữ liệu, nên gọi lại có thể ghi thêm", "A procedure can write data, so calling it again may write again"],
			["Một hàm có ghi bảng vẫn được coi là hàm thuần", "A function that writes a table is still considered a pure function"]
		],
		"a": 2,
		"w": ["Thủ tục có thể INSERT hoặc UPDATE; view chỉ là câu hỏi được lưu. Quyền chạy thủ tục không đồng nghĩa với quyền xem các bảng trong đó.", "A procedure can INSERT or UPDATE; a view is just a saved question. Execute permission does not mean permission to see its underlying tables."]
	}, {
		"q": ["Thủ tục chot_tuan INSERT tổng form tuần 40 (300 form) vào bảng đã chốt, bảng không có ràng buộc khóa. Lỡ chạy hai lần thì bảng có tổng cho tuần 40 là bao nhiêu nếu cộng lại?", "The procedure close_week INSERTs week 40's total (300 forms) into a closed table with no key constraint. If it is accidentally run twice, what do the rows for week 40 add up to?"],
		"o": [
			["300, vì lần hai tự ghi đè", "300, because the second run overwrites automatically"],
			["300, vì thủ tục chỉ SELECT", "300, because the procedure only SELECTs"],
			["0, vì lần hai hủy lần một", "0, because the second run cancels the first"],
			["600, vì có hai dòng", "600, because there are two rows"]
		],
		"a": 3,
		"w": ["INSERT không tự ghi đè nên mỗi lần chạy thêm một dòng, tổng thành 300 + 300 = 600. Đây là lý do thủ tục ghi dữ liệu cần có người chịu trách nhiệm và cách chống chạy lặp.", "INSERT does not overwrite, so each run adds a row and the total becomes 300 + 300 = 600. That is why a writing procedure needs an owner and protection against repeat runs."]
	}],
	"sql-cur": [{
		"q": ["Trường hợp nào hợp lý nhất để dùng con trỏ (cursor)?", "When is a cursor most reasonable?"],
		"o": [
			["Gửi một email cho từng khách đủ điều kiện, vì mỗi dòng gây một tác động bên ngoài", "Sending one email per eligible customer, because each row triggers an external effect"],
			["Cộng tổng form của mỗi kênh", "Summing forms per channel"],
			["Đếm số khách theo thành phố", "Counting customers per city"],
			["Tính hạng tuần trong từng kênh", "Ranking weeks within each channel"]
		],
		"a": 0,
		"w": ["Ba việc còn lại là phép tính theo tập hợp, làm bằng một câu GROUP BY hoặc hàm cửa sổ. Con trỏ không làm phép cộng đúng hơn, chỉ chậm hơn.", "The other three are set-based jobs for one GROUP BY or window query. A cursor does not make a sum more accurate, only slower."]
	}, {
		"q": ["Cộng form của 2.000 dòng bằng con trỏ so với bằng một câu SUM: kết quả và số lần lấy dòng thế nào?", "Summing forms over 2,000 rows with a cursor versus one SUM query: what about the result and the number of row fetches?"],
		"o": [
			["Con trỏ lấy 1 lần và chính xác hơn", "The cursor fetches once and is more accurate"],
			["Con trỏ lấy 2.000 lần, tổng bằng nhau", "The cursor fetches 2,000 times; the total is the same"],
			["Con trỏ lấy 2.000 lần và chính xác hơn", "The cursor fetches 2,000 times and is more accurate"],
			["Con trỏ lấy 2.000 lần nhưng tổng khác", "The cursor fetches 2,000 times but the total differs"]
		],
		"a": 1,
		"w": ["Cùng dữ liệu thì cùng tổng; khác biệt chỉ ở cách làm. Con trỏ là vòng lặp nằm trên SQL nên tốn 2.000 lần lấy dòng.", "Same data gives the same total; only the method differs. A cursor is a loop on top of SQL, costing 2,000 fetches."]
	}],
	"sql-cte": [{
		"q": ["Câu nào đúng về view thường (không phải materialized view)?", "Which statement is correct about an ordinary view (not a materialized view)?"],
		"o": [
			["View là bản chụp dữ liệu tại lúc tạo", "A view is a snapshot of the data at creation time"],
			["View sao chép dữ liệu sang bảng riêng", "A view copies the data into a separate table"],
			["Mỗi lần SELECT từ view là chạy lại câu hỏi đã lưu", "Every SELECT from the view re-runs the saved query"],
			["CTE luôn chạy đúng một lần", "A CTE always runs exactly once"]
		],
		"a": 2,
		"w": ["View chỉ lưu câu hỏi, không lưu dữ liệu. CTE thì có thể được nhập vào câu ngoài và chạy một hay nhiều lần tùy hệ thống.", "A view stores the question, not the data. A CTE may be inlined into the outer query and run once or several times depending on the system."]
	}, {
		"q": ["Bảng gốc có 10.000 dòng hôm nay và 10.500 dòng ngày mai. Ngày mai, COUNT(*) trên một view thường dựng từ bảng đó (không lọc) trả về bao nhiêu?", "The base table has 10,000 rows today and 10,500 tomorrow. Tomorrow, what does COUNT(*) on an ordinary, unfiltered view of that table return?"],
		"o": [
			["10.000", "10,000"],
			["500", "500"],
			["20.500", "20,500"],
			["10.500", "10,500"]
		],
		"a": 3,
		"w": ["View chạy lại trên dữ liệu hiện tại nên thấy 10.500. 10.000 là kết quả nếu view là một bản chụp, điều không đúng với view thường.", "The view re-runs on current data, so it sees 10,500. 10,000 would apply only if a view were a snapshot, which an ordinary view is not."]
	}],
	"sql-idx": [{
		"q": ["Thêm chỉ mục trên cột khóa nối có sửa được lỗi JOIN đang nhân dòng không?", "Does adding an index on the join key fix a JOIN that is multiplying rows?"],
		"o": [
			["Không, chỉ mục đổi tốc độ chứ không đổi nghĩa của câu", "No, an index changes speed, not the meaning of the query"],
			["Có, chỉ mục tự loại các dòng bị nhân", "Yes, the index removes the multiplied rows automatically"],
			["Có, vì chỉ mục làm kết quả đúng hơn", "Yes, because an index makes results more correct"],
			["Không, vì chỉ mục chỉ dùng cho INSERT", "No, because indexes are used only for INSERT"]
		],
		"a": 0,
		"w": ["Chỉ mục như mục lục: giúp tìm nhanh, không sửa logic. Nó còn làm INSERT và UPDATE nặng hơn, không phải chỉ dùng cho INSERT.", "An index is like a table of contents: it speeds up lookup but does not fix logic. It even makes INSERT and UPDATE heavier, so it is not just for INSERT."]
	}, {
		"q": ["Tìm 1 mã trong bảng 1.000.000 dòng. Quét cả bảng đọc 1.000.000 dòng; chỉ mục dạng cây cần khoảng bao nhiêu bước?", "Looking up one code in a 1,000,000-row table. A full scan reads 1,000,000 rows; about how many steps does a tree index need?"],
		"o": [
			["Khoảng 1.000", "About 1,000"],
			["Khoảng 20", "About 20"],
			["Khoảng 500.000", "About 500,000"],
			["Khoảng 1.000.000", "About 1,000,000"]
		],
		"a": 1,
		"w": ["log₂(1.000.000) ≈ 19,9 nên cỡ 20 bước. Các con số lớn hơn là chi phí của việc quét bảng.", "log₂(1,000,000) ≈ 19.9, so about 20 steps. The larger numbers are the cost of scanning the table."]
	}],
	"ml-what": [{
		"q": ["Điều nào đúng về học có giám sát?", "Which statement about supervised learning is correct?"],
		"o": [
			["Không cần cột đáp án", "It needs no answer column"],
			["Quy tắc học được chứng minh nguyên nhân", "The learned rule proves causes"],
			["Huấn luyện trên các dòng đã có đáp án rồi áp quy tắc cho dòng chưa có", "Train on rows that have answers, then apply the rule to rows that do not"],
			["Cột đáp án gọi là đặc trưng (feature)", "The answer column is called a feature"]
		],
		"a": 2,
		"w": ["Cột đáp án là biến mục tiêu; các cột đã biết là đặc trưng. Quy tắc chỉ tóm tắt dữ liệu huấn luyện, không chứng minh nhân quả.", "The answer column is the target; the known columns are features. The rule only summarizes the training rows and does not prove causation."]
	}, {
		"q": ["Bảng khách spa có các cột: tên, số buổi đã dùng, tuổi, đã rời đi (có/không). Muốn dự đoán khách mới có rời đi không, biến mục tiêu là cột nào?", "A spa customer table has columns: name, sessions used, age, left (yes/no). To predict whether a new customer will leave, which column is the target?"],
		"o": [
			["số buổi đã dùng", "sessions used"],
			["tuổi", "age"],
			["tên", "name"],
			["đã rời đi (có/không)", "left (yes/no)"]
		],
		"a": 3,
		"w": ["Biến mục tiêu là thứ cần dự đoán. Số buổi và tuổi là đặc trưng đầu vào.", "The target is what you want to predict. Sessions and age are input features."]
	}],
	"slr-line": [{
		"q": ["Trong ŷ = β0 + β1 x, β1 có ý nghĩa gì?", "In ŷ = β0 + β1 x, what does β1 mean?"],
		"o": [
			["Mức thay đổi của dự đoán khi x tăng một đơn vị", "The change in the prediction when x increases by one unit"],
			["Giá trị dự đoán khi x bằng 0", "The prediction when x equals 0"],
			["Mức tăng form chắc chắn khi tăng ngân sách", "The guaranteed form increase when the budget rises"],
			["Phần dư của một tuần", "The residual of a week"]
		],
		"a": 0,
		"w": ["β1 là độ dốc. Giá trị khi x = 0 là β0. Đường là bản tóm tắt chứ không là lời hứa.", "β1 is the slope. The value at x = 0 is β0. The line is a summary, not a promise."]
	}, {
		"q": ["Đường dự đoán số form = 15 + 4 × chi tiêu (triệu đồng). Với chi tiêu 12 triệu, dự đoán là bao nhiêu form?", "The line is forms = 15 + 4 × spend (million VND). For a spend of 12 million, how many forms does it predict?"],
		"o": [
			["48", "48"],
			["63", "63"],
			["180", "180"],
			["27", "27"]
		],
		"a": 1,
		"w": ["15 + 4 × 12 = 63. Số 48 quên hệ số chặn, còn 27 là 15 + 12.", "15 + 4 × 12 = 63. The 48 forgets the intercept, and 27 is 15 + 12."]
	}],
	"slr-r2": [{
		"q": ["R² = 0,70 nghĩa là gì?", "What does R² = 0.70 mean?"],
		"o": [
			["70% số tuần nằm trên đường", "70% of the weeks lie on the line"],
			["Dự đoán đúng 70% số lần", "Predictions are right 70% of the time"],
			["Đường giải thích 70% phương sai của y", "The line explains 70% of the variance of y"],
			["Độ dốc bằng 0,7", "The slope equals 0.7"]
		],
		"a": 2,
		"w": ["R² là tỷ lệ phương sai được giải thích. Một tuần cụ thể vẫn có thể lệch nhiều so với đường.", "R² is the share of variance explained. An individual week can still deviate a lot from the line."]
	}, {
		"q": ["TSS = 800 và RSS = 200. R² bằng bao nhiêu?", "TSS = 800 and RSS = 200. What is R²?"],
		"o": [
			["0,25", "0.25"],
			["4,0", "4.0"],
			["0,50", "0.50"],
			["0,75", "0.75"]
		],
		"a": 3,
		"w": ["R² = 1 − RSS / TSS = 1 − 200 / 800 = 0,75. Số 0,25 là RSS / TSS, tức phần chưa giải thích.", "R² = 1 − RSS / TSS = 1 − 200 / 800 = 0.75. The 0.25 is RSS / TSS, the unexplained share."]
	}],
	"slr-assume": [{
		"q": ["Dải phần dư rộng ra khi chi tiêu tăng (hình kèn). Giả định nào bị vi phạm?", "The residual band widens as spend increases (a funnel shape). Which assumption is violated?"],
		"o": [
			["Phương sai phần dư không đổi", "Constant variance of the residuals"],
			["Biến x phải có phân phối chuẩn", "The variable x must be normally distributed"],
			["Biến x phải độc lập với y", "x must be independent of y"],
			["Hệ số chặn phải bằng 0", "The intercept must be zero"]
		],
		"a": 0,
		"w": ["Hình kèn là dấu hiệu phương sai không đều. Giả định chuẩn nói về phần dư chứ không về x. Đường vẫn có thể là bản tóm tắt, nhưng p-value không còn đáng tin.", "A funnel signals unequal variance. The normality assumption concerns the residuals, not x. The line can still be a summary, but the p-value is no longer reliable."]
	}, {
		"q": ["Dữ liệu theo tuần có phần dư dương hay đi liền sau phần dư dương (không độc lập). Hệ quả với kiểm định độ dốc là gì?", "Weekly data have residuals that tend to follow a positive residual with another positive one (not independent). What is the consequence for the slope test?"],
		"o": [
			["Độ dốc luôn bị ép về 0", "The slope is always forced to 0"],
			["Sai số chuẩn thường bị đánh giá thấp nên p-value trông nhỏ hơn thực tế", "Standard errors tend to be understated, so the p-value looks smaller than it should"],
			["R² thành số âm", "R² becomes negative"],
			["Không có hệ quả vì chỉ phương sai đều mới quan trọng", "No consequence, since only constant variance matters"]
		],
		"a": 1,
		"w": ["Khi phần dư phụ thuộc nhau, thông tin thật ít hơn số tuần đếm được nên sai số chuẩn thông thường quá lạc quan. Độ dốc ước lượng không bị ép về 0 và R² không âm.", "When residuals depend on each other, there is less real information than the number of weeks suggests, so the usual standard errors are too optimistic. The slope is not forced to 0 and R² does not go negative."]
	}],
	"slr-fit": [{
		"q": ["Bình phương tối thiểu chọn đường nào?", "Which line does least squares choose?"],
		"o": [
			["Đường đi qua mọi điểm dữ liệu", "The line passing through every data point"],
			["Đường có tổng sai số tuyệt đối nhỏ nhất", "The line with the smallest sum of absolute errors"],
			["Đường có tổng bình phương phần dư nhỏ nhất", "The line with the smallest sum of squared residuals"],
			["Đường có tổng phần dư lớn nhất", "The line with the largest sum of residuals"]
		],
		"a": 2,
		"w": ["Mục tiêu là RSS = Σ (y − ŷ)² nhỏ nhất. Dùng sai số tuyệt đối là quy tắc khác và có thể chọn đường khác.", "The goal is the smallest RSS = Σ (y − ŷ)². Using absolute errors is a different rule and can pick a different line."]
	}, {
		"q": ["Bốn tuần có phần dư +6, −3, +2 và −5. RSS bằng bao nhiêu?", "Four weeks have residuals +6, −3, +2 and −5. What is the RSS?"],
		"o": [
			["0", "0"],
			["16", "16"],
			["25", "25"],
			["74", "74"]
		],
		"a": 3,
		"w": ["RSS = 36 + 9 + 4 + 25 = 74. Cộng thẳng phần dư cho 0 và cộng giá trị tuyệt đối cho 16; cả hai đều không phải RSS.", "RSS = 36 + 9 + 4 + 25 = 74. Adding residuals directly gives 0 and adding absolute values gives 16; neither is the RSS."]
	}],
	"slr-resid": [{
		"q": ["Phần dư trung bình bằng 0 cho biết điều gì?", "What does a mean residual of 0 tell you?"],
		"o": [
			["Chưa đủ để kết luận mô hình tốt, cần nhìn hình của phần dư", "Not enough to call the model good; you need to look at the residual plot"],
			["Mô hình chắc chắn đúng dạng tuyến tính", "The model is definitely linear"],
			["Mọi tuần nằm đúng trên đường", "Every week lies exactly on the line"],
			["Không còn yếu tố nào bị bỏ sót", "No factor has been left out"]
		],
		"a": 0,
		"w": ["Có hệ số chặn thì tổng phần dư gần bằng 0 theo cách tính. Vấn đề như thiếu khuyến mãi chỉ lộ ra ở hình dạng phần dư.", "With an intercept, residuals sum to about zero by construction. Problems such as a missing promotion only show in the shape of the residuals."]
	}, {
		"q": ["Một tuần có đường dự đoán 44 form nhưng thực tế 35 form. Phần dư e = y − ŷ là bao nhiêu?", "For one week the line predicts 44 forms but the actual is 35. What is the residual e = y − ŷ?"],
		"o": [
			["+9", "+9"],
			["−9", "−9"],
			["79", "79"],
			["−44", "−44"]
		],
		"a": 1,
		"w": ["e = 35 − 44 = −9: đường dự đoán cao hơn thực tế. Dấu +9 là do trừ ngược chiều.", "e = 35 − 44 = −9: the line over-predicts. The +9 comes from subtracting in the wrong order."]
	}],
	"slr-test": [{
		"q": ["p-value của độ dốc cho biết điều gì?", "What does the p-value of a slope tell you?"],
		"o": [
			["Xác suất độ dốc của bạn là đúng", "The probability that your slope is correct"],
			["Xác suất giả thuyết độ dốc bằng 0 là đúng", "The probability that the zero-slope hypothesis is true"],
			["Mức hiếm của mẫu này nếu độ dốc thật bằng 0", "How rare a sample like this is if the true slope is 0"],
			["Xác suất tuần sau rơi đúng vào đường", "The probability that next week lands on the line"]
		],
		"a": 2,
		"w": ["p-value được tính với điều kiện độ dốc thật bằng 0, nên không phải xác suất của chính giả thuyết đó. Mẫu rất lớn còn có thể làm độ dốc cực nhỏ thành có ý nghĩa thống kê.", "The p-value is computed assuming the true slope is 0, so it is not the probability of that hypothesis. A very large sample can also make a tiny slope statistically significant."]
	}, {
		"q": ["Độ dốc ước lượng là 8 form mỗi triệu đồng, sai số chuẩn là 2,5. Thống kê t bằng bao nhiêu?", "The estimated slope is 8 forms per million VND with a standard error of 2.5. What is the t statistic?"],
		"o": [
			["20", "20"],
			["0,31", "0.31"],
			["5,5", "5.5"],
			["3,2", "3.2"]
		],
		"a": 3,
		"w": ["t = độ dốc / sai số chuẩn = 8 / 2,5 = 3,2. Số 0,31 là phép chia ngược.", "t = slope / standard error = 8 / 2.5 = 3.2. The 0.31 is the inverted division."]
	}],
	"gd-cost": [{
		"q": ["Gradient của hàm chi phí chỉ hướng nào, và đáy của cái bát ứng với gì?", "Which direction does the gradient of the cost function point, and what corresponds to the bottom of the bowl?"],
		"o": [
			["Hướng dốc lên nhanh nhất; ở đáy gradient bằng 0", "Steepest uphill; at the bottom the gradient is 0"],
			["Hướng đi xuống nhanh nhất; ở đáy gradient lớn nhất", "Steepest downhill; at the bottom the gradient is largest"],
			["Hướng đi xuống nhanh nhất; ở đáy gradient bằng 0", "Steepest downhill; at the bottom the gradient is 0"],
			["Hướng dốc lên nhanh nhất; ở đáy gradient lớn nhất", "Steepest uphill; at the bottom the gradient is largest"]
		],
		"a": 0,
		"w": ["Gradient chỉ lên dốc nên ta đi ngược chiều nó; tại đáy mặt phẳng nên gradient bằng 0.", "The gradient points uphill, so we move opposite to it; at the bottom the surface is flat, so the gradient is 0."]
	}, {
		"q": ["Đường dự đoán 60 và 75, số thật là 66 và 70. Chi phí J = tổng bình phương phần dư là bao nhiêu?", "The line predicts 60 and 75, and the actual values are 66 and 70. What is the cost J = sum of squared residuals?"],
		"o": [
			["11", "11"],
			["61", "61"],
			["1", "1"],
			["121", "121"]
		],
		"a": 1,
		"w": ["J = (66 − 60)² + (70 − 75)² = 36 + 25 = 61. Số 11 là cộng phần dư chưa bình phương, còn 121 là bình phương của tổng.", "J = (66 − 60)² + (70 − 75)² = 36 + 25 = 61. The 11 adds unsquared residuals and 121 squares the sum."]
	}],
	"gd-step": [{
		"q": ["Vì sao quy tắc cập nhật là w := w − η ∇J(w) với dấu trừ?", "Why does the update rule use a minus sign: w := w − η ∇J(w)?"],
		"o": [
			["Vì gradient luôn âm", "Because the gradient is always negative"],
			["Vì dấu cộng sẽ làm hệ số bằng 0", "Because a plus sign would set the coefficient to 0"],
			["Vì gradient chỉ lên dốc, nên trừ đi để đi xuống đáy", "Because the gradient points uphill, so subtracting moves toward the bottom"],
			["Vì dấu trừ làm bước nhỏ hơn", "Because the minus makes the step smaller"]
		],
		"a": 2,
		"w": ["Gradient có thể âm hay dương; điều quan trọng là nó chỉ hướng tăng chi phí nên phải đi ngược lại. Độ lớn bước do η quyết định, không phải dấu.", "The gradient can be negative or positive; what matters is that it points toward higher cost, so we go the opposite way. Step size comes from η, not the sign."]
	}, {
		"q": ["J(w) = (w − 3)², bắt đầu w = 0, η = 0,1. Sau một bước, w bằng bao nhiêu?", "J(w) = (w − 3)², start at w = 0, η = 0.1. What is w after one step?"],
		"o": [
			["−0,6", "−0.6"],
			["6", "6"],
			["0,3", "0.3"],
			["0,6", "0.6"]
		],
		"a": 3,
		"w": ["Độ dốc J'(0) = 2(0 − 3) = −6, nên w = 0 − 0,1 × (−6) = 0,6. Giá trị −0,6 là sai dấu.", "The slope J'(0) = 2(0 − 3) = −6, so w = 0 − 0.1 × (−6) = 0.6. The −0.6 has the wrong sign."]
	}],
	"gd-rate": [{
		"q": ["Chi phí tăng lên sau mỗi bước huấn luyện. Nghi ngờ đầu tiên nên là gì?", "The cost rises after each training step. What should be your first suspicion?"],
		"o": [
			["Learning rate quá lớn nên bước vọt qua đáy", "The learning rate is too large, so steps overshoot the bottom"],
			["Learning rate quá nhỏ", "The learning rate is too small"],
			["Cần tăng learning rate thêm nữa", "The learning rate must be increased further"],
			["Mô hình đã đạt đáy", "The model has reached the bottom"]
		],
		"a": 0,
		"w": ["Bước quá nhỏ chỉ làm chậm, không làm chi phí tăng. Chi phí tăng là dấu hiệu vọt quá đà; giảm η trước khi nghi ngờ nơi khác.", "A step that is too small only slows things down and does not raise the cost. Rising cost signals overshooting; lower η before suspecting other things."]
	}, {
		"q": ["J(w) = (w − 3)², bắt đầu w = 0 (cách đáy 3), η = 1,1. Sau một bước kết quả thế nào?", "J(w) = (w − 3)², start at w = 0 (distance 3 from the bottom), η = 1.1. What is the result after one step?"],
		"o": [
			["w = 0,66, tiến gần đáy", "w = 0.66, closer to the bottom"],
			["w = 6,6, cách đáy 3,6 nên xa hơn lúc đầu", "w = 6.6, 3.6 from the bottom, so farther than at the start"],
			["w = 6,6, gần đáy hơn vì bước lớn", "w = 6.6, closer to the bottom because the step is big"],
			["w = 3, đúng đáy", "w = 3, exactly the bottom"]
		],
		"a": 1,
		"w": ["Độ dốc −6 nên w = 0 + 1,1 × 6 = 6,6; khoảng cách 3,6 lớn hơn 3, tức phân kỳ. Bước lớn không có nghĩa là gần đáy hơn.", "With slope −6, w = 0 + 1.1 × 6 = 6.6; the distance 3.6 exceeds 3, so it diverges. A bigger step does not mean closer to the bottom."]
	}],
	"mlr-why": [{
		"q": ["Vì sao hồi quy chỉ theo chi tiêu có thể cho kết luận lệch vào tháng lễ?", "Why can a regression on spend alone mislead in a holiday month?"],
		"o": [
			["Vì hồi quy một cột không thể có độ dốc", "Because a one-column regression cannot have a slope"],
			["Vì R² luôn bằng 1 khi có một cột", "Because R² always equals 1 with one column"],
			["Vì email và khuyến mãi cũng tăng cùng lúc, và độ dốc của chi tiêu hứng luôn phần tác động của chúng", "Because email and promotions also rise at the same time, and the spend slope absorbs their effect"],
			["Vì khuyến mãi luôn làm giảm số form", "Because promotions always reduce forms"]
		],
		"a": 2,
		"w": ["Khi các yếu tố đi cùng nhau, mô hình một cột gán mọi tác động cho chi tiêu. Hồi quy bội tách phần riêng của từng cột (trong phạm vi dữ liệu cho phép).", "When factors move together, a one-column model credits everything to spend. Multiple regression separates each column's own part (as far as the data allow)."]
	}, {
		"q": ["ŷ = 10 + 5 × chi tiêu + 8 × email + 12 × khuyến mãi. Tuần chi tiêu 6, email 3, không khuyến mãi (0). ŷ là bao nhiêu?", "ŷ = 10 + 5 × spend + 8 × email + 12 × promo. A week has spend 6, email 3, and no promo (0). What is ŷ?"],
		"o": [
			["76", "76"],
			["40", "40"],
			["54", "54"],
			["64", "64"]
		],
		"a": 3,
		"w": ["10 + 30 + 24 + 0 = 64. Số 76 coi như có khuyến mãi, 40 quên email, 54 quên hệ số chặn.", "10 + 30 + 24 + 0 = 64. The 76 assumes a promo, 40 forgets email, and 54 forgets the intercept."]
	}],
	"mlr-coef": [{
		"q": ["Hệ số của chi tiêu trong hồi quy bội diễn đạt điều gì?", "What does the spend coefficient in a multiple regression express?"],
		"o": [
			["Độ dốc của chi tiêu khi các cột khác trong mô hình giữ nguyên", "The slope of spend when the other columns in the model are held fixed"],
			["Hiệu ứng nhân quả chắc chắn của chi tiêu", "The certain causal effect of spend"],
			["Hiệu ứng tổng cộng kể cả qua email và khuyến mãi", "The total effect including through email and promotions"],
			["Mức chi tiêu tối ưu", "The optimal level of spend"]
		],
		"a": 0,
		"w": ["Đó là hiệu ứng riêng trong phương trình, không phải nhân quả hay nút điều chỉnh, vì ngoài đời các cột khó giữ yên riêng lẻ.", "It is the effect within the equation, not causality or a control knob, because in real life the columns rarely stay fixed on their own."]
	}, {
		"q": ["Hệ số chi tiêu là 4 form mỗi triệu đồng. Chi thêm 5 triệu, email và khuyến mãi giữ nguyên, dự đoán tăng bao nhiêu form?", "The spend coefficient is 4 forms per million VND. Spending 5 million more, with email and promo unchanged, raises the prediction by how many forms?"],
		"o": [
			["4", "4"],
			["20", "20"],
			["9", "9"],
			["1,25", "1.25"]
		],
		"a": 1,
		"w": ["4 × 5 = 20. Số 4 là mức tăng cho một triệu, 9 là cộng thay vì nhân, 1,25 là phép chia ngược.", "4 × 5 = 20. The 4 is the gain per million, 9 adds instead of multiplying, and 1.25 divides the wrong way."]
	}],
	"mlr-vif": [{
		"q": ["Chi tiêu và khuyến mãi cùng tăng vào các tuần lễ, và mô hình cho khuyến mãi một hệ số âm. Kết luận hợp lý là gì?", "Spend and promotions rise together in holiday weeks, and the model gives promotions a negative coefficient. What is a sensible conclusion?"],
		"o": [
			["Khuyến mãi chắc chắn làm giảm form", "Promotions definitely reduce forms"],
			["Dự đoán của mô hình chắc chắn vô dụng", "The model's predictions are certainly useless"],
			["Chưa kết luận khuyến mãi gây hại; có thể do đa cộng tuyến làm hệ số không ổn định", "Do not conclude promotions hurt; multicollinearity may make the coefficient unstable"],
			["VIF thấp vì hai cột đi cùng nhau", "VIF is low because the two columns move together"]
		],
		"a": 2,
		"w": ["Khi các cột dự đoán lẫn nhau, bảng dữ liệu không tách được tác động riêng nên từng độ dốc kém tin cậy dù dự đoán chung vẫn có thể ổn. Hai cột đi cùng nhau thì VIF cao.", "When columns predict each other, the data cannot separate their individual effects, so each slope is unreliable even if overall predictions may be fine. Two columns moving together give a high VIF."]
	}, {
		"q": ["Hồi quy cột j theo các cột còn lại cho R²j = 0,9. VIF của cột j là bao nhiêu?", "Regressing column j on the other columns gives R²j = 0.9. What is the VIF of column j?"],
		"o": [
			["9", "9"],
			["0,1", "0.1"],
			["1,1", "1.1"],
			["10", "10"]
		],
		"a": 3,
		"w": ["VIF = 1 / (1 − 0,9) = 1 / 0,1 = 10. Số 0,1 là mẫu số, chưa lấy nghịch đảo.", "VIF = 1 / (1 − 0.9) = 1 / 0.1 = 10. The 0.1 is the denominator before taking the reciprocal."]
	}],
	"mlr-dummy": [{
		"q": ["Mô hình có hệ số chặn và biến hạng mục ba kênh. Nên làm gì và hệ số một biến giả nghĩa là gì?", "The model has an intercept and a three-level channel variable. What should you do, and what does a dummy coefficient mean?"],
		"o": [
			["Dùng hai cột 0/1 và bỏ một kênh làm mốc; hệ số là mức chênh so với mốc đó", "Use two 0/1 columns and drop one channel as baseline; the coefficient is the difference from that baseline"],
			["Giữ cả ba cột; hệ số là mức so với không có kênh nào", "Keep all three columns; the coefficient is the level versus no channel"],
			["Dùng hai cột; hệ số là mức so với không có kênh nào", "Use two columns; the coefficient is the level versus no channel"],
			["Giữ cả ba cột; hệ số là mức chênh so với kênh đầu tiên", "Keep all three columns; the coefficient is the difference from the first channel"]
		],
		"a": 0,
		"w": ["Ba cột cộng lại luôn bằng 1, trùng với hệ số chặn, nên rơi vào bẫy biến giả. Mốc là kênh bị bỏ, không phải trạng thái không có kênh.", "Three columns always sum to 1, duplicating the intercept, which is the dummy variable trap. The baseline is the dropped channel, not a no-channel state."]
	}, {
		"q": ["Mốc là TikTok. Hệ số GDN là +4 và hệ số Facebook là −2. GDN cao hơn Facebook bao nhiêu form (các cột khác giữ nguyên)?", "The baseline is TikTok. The GDN coefficient is +4 and the Facebook coefficient is −2. By how many forms is GDN higher than Facebook (other columns fixed)?"],
		"o": [
			["2", "2"],
			["6", "6"],
			["4", "4"],
			["−2", "−2"]
		],
		"a": 1,
		"w": ["Chênh lệch giữa hai kênh = 4 − (−2) = 6. Số 4 là GDN so với TikTok, không phải so với Facebook.", "The gap between the two channels = 4 − (−2) = 6. The 4 is GDN versus TikTok, not versus Facebook."]
	}],
	"mlr-select": [{
		"q": ["Khi thêm một cột nhiễu vào mô hình, R² và R² hiệu chỉnh thay đổi thế nào?", "When you add a noise column to a model, what happens to R² and adjusted R²?"],
		"o": [
			["Cả hai đều không bao giờ giảm", "Neither can ever decrease"],
			["R² giảm, R² hiệu chỉnh tăng", "R² decreases and adjusted R² increases"],
			["R² không giảm, còn R² hiệu chỉnh có thể giảm", "R² does not decrease, while adjusted R² can decrease"],
			["Cả hai đều chắc chắn giảm", "Both are certain to decrease"]
		],
		"a": 2,
		"w": ["Thêm cột luôn làm RSS không tăng nên R² không giảm; R² hiệu chỉnh phạt số cột nên có thể giảm. Vì thế R² một mình dễ đánh lừa.", "Adding a column never raises RSS, so R² cannot fall; adjusted R² penalizes the number of columns and can fall. That is why R² alone is misleading."]
	}, {
		"q": ["n = 40. Mô hình A: p = 3, R² = 0,600. Mô hình B (thêm 1 cột): p = 4, R² = 0,605. Theo R² hiệu chỉnh = 1 − (1 − R²)(n − 1)/(n − p − 1), mô hình nào tốt hơn?", "n = 40. Model A: p = 3, R² = 0.600. Model B (one extra column): p = 4, R² = 0.605. By adjusted R² = 1 − (1 − R²)(n − 1)/(n − p − 1), which model is better?"],
		"o": [
			["B, vì R² 0,605 cao hơn 0,600", "B, because R² 0.605 is higher than 0.600"],
			["B: 0,567 cao hơn A: 0,560", "B: 0.567 beats A: 0.560"],
			["Bằng nhau vì chỉ chênh 0,005", "Equal, since they differ by only 0.005"],
			["A: 0,567 cao hơn B: 0,560", "A: 0.567 beats B: 0.560"]
		],
		"a": 3,
		"w": ["A: 1 − 0,4 × 39/36 ≈ 0,567; B: 1 − 0,395 × 39/35 ≈ 0,560. Cột thêm tăng R² quá ít so với cái giá của nó nên R² hiệu chỉnh giảm.", "A: 1 − 0.4 × 39/36 ≈ 0.567; B: 1 − 0.395 × 39/35 ≈ 0.560. The extra column raises R² too little for its cost, so adjusted R² falls."]
	}],
	"pred-proj": [{
		"q": ["Đường học trên các tuần chi 2 đến 12 triệu. Đọc đường tại mức chi 40 triệu là gì?", "The line was learned on weeks with spend from 2 to 12 million. What is reading the line at a spend of 40 million?"],
		"o": [
			["Một giả định (ngoại suy), vì nằm ngoài vùng dữ liệu đã học", "An assumption (extrapolation), because it lies outside the learned data range"],
			["Một dự đoán đáng tin như mọi điểm khác trên đường", "A prediction as reliable as any other point on the line"],
			["Một dự đoán được khoảng dự đoán bảo vệ", "A prediction protected by the prediction interval"],
			["Một dự đoán đúng vì đường là đường thẳng", "A correct prediction because the line is straight"]
		],
		"a": 0,
		"w": ["Khoảng dự đoán không bảo vệ ngoại suy. Đường thẳng đi lên là do ta ép nó thẳng, không phải số form thật sẽ cứ thẳng như vậy.", "The prediction interval does not protect extrapolation. The line keeps rising because we forced it straight, not because real forms will stay linear."]
	}, {
		"q": ["Đường: form = 3 + 2,5 × chi, học trên chi từ 2 đến 12 triệu. Khách hỏi mức chi 10 và 30 triệu. Phát biểu nào đúng?", "The line is forms = 3 + 2.5 × spend, learned on spend from 2 to 12 million. A client asks about spend of 10 and 30 million. Which statement is right?"],
		"o": [
			["10 triệu cho 28 form và 30 triệu cho 78 form, cả hai đáng tin như nhau", "10 million gives 28 and 30 million gives 78, both equally reliable"],
			["10 triệu cho 28 form (trong vùng học); 30 triệu cho 78 form là giả định", "10 million gives 28 forms (in range); 30 million giving 78 forms is an assumption"],
			["10 triệu cho 25 form (2,5 × 10); 30 triệu cho 75 form là giả định", "10 million gives 25 (2.5 × 10); 30 million giving 75 is an assumption"],
			["10 triệu cho 28 form là giả định; 30 triệu cho 78 form là dự đoán chắc chắn", "10 million giving 28 is an assumption; 30 million giving 78 is a firm prediction"]
		],
		"a": 1,
		"w": ["3 + 2,5 × 10 = 28 và 3 + 2,5 × 30 = 78; chỉ điểm đầu nằm trong vùng đã học. Số 25 quên hệ số chặn.", "3 + 2.5 × 10 = 28 and 3 + 2.5 × 30 = 78; only the first lies in the learned range. The 25 forgets the intercept."]
	}],
	"logit-why": [{
		"q": ["Vì sao khớp hồi quy tuyến tính lên cột 0/1 (rời / không rời) là không hợp?", "Why is fitting linear regression to a 0/1 column (churn / no churn) a poor fit?"],
		"o": [
			["Đường thẳng không có biên nên dự đoán có thể ra ngoài khoảng 0 đến 1, không còn là xác suất", "A straight line has no bounds, so predictions can fall outside 0 to 1 and stop being probabilities"],
			["Vì cột 0/1 có quá ít giá trị để tính được một đường thẳng", "Because a 0/1 column has too few values to compute a line"],
			["Vì hồi quy tuyến tính không nhận được cột đầu vào dạng số", "Because linear regression cannot take numeric input columns"],
			["Vì đường thẳng luôn cho đúng 0,5 với mọi khách", "Because the line always gives exactly 0.5 for every customer"]
		],
		"a": 0,
		"w": ["Xác suất có biên 0 và 1 còn đường thẳng thì không, nên có điểm như −0,1 hoặc 1,2. Hồi quy tuyến tính vẫn tính được với cột 0/1, nó chỉ cho đầu ra không đọc được như xác suất.", "Probabilities are bounded by 0 and 1 but a line is not, so you can get scores like −0.1 or 1.2. Linear regression can still be computed on a 0/1 column; its output just cannot be read as a probability."]
	}, {
		"q": ["Đường thẳng cho 4 khách các điểm −0,1; 0,35; 0,92 và 1,2. Có bao nhiêu điểm không thể là xác suất?", "A line gives 4 customers the scores −0.1, 0.35, 0.92 and 1.2. How many scores cannot be probabilities?"],
		"o": [
			["1 điểm (chỉ 1,2 vì vượt quá 1)", "1 score (only 1.2, because it is above 1)"],
			["2 điểm (−0,1 và 1,2)", "2 scores (−0.1 and 1.2)"],
			["4 điểm, vì đường thẳng không bao giờ cho xác suất", "4 scores, because a line never gives probabilities"],
			["0 điểm, vì mọi số thực đều là xác suất hợp lệ", "0 scores, because any real number is a valid probability"]
		],
		"a": 1,
		"w": ["Xác suất phải nằm trong [0; 1]: −0,1 nhỏ hơn 0 và 1,2 lớn hơn 1, còn 0,35 và 0,92 hợp lệ. Hay quên rằng giá trị âm cũng vi phạm, không chỉ giá trị trên 1.", "A probability must lie in [0, 1]: −0.1 is below 0 and 1.2 is above 1, while 0.35 and 0.92 are fine. People often forget that negative values also break the rule, not only values above 1."]
	}],
	"logit-sig": [{
		"q": ["Khi z (điểm tuyến tính) tăng thêm cùng một lượng, xác suất của hồi quy logistic đổi thế nào?", "When z (the linear score) rises by the same amount, how does the logistic probability change?"],
		"o": [
			["Đổi đều như nhau ở mọi mức xác suất", "It changes by the same amount at every probability level"],
			["Đổi nhiều nhất ở hai đuôi, gần 0 và gần 1", "It changes most in the tails, near 0 and near 1"],
			["Đổi nhiều nhất quanh xác suất 0,5 và đổi ít ở hai đuôi", "It changes most near probability 0.5 and changes little in the tails"],
			["Xác suất có thể vượt 1 nếu z đủ lớn", "The probability can exceed 1 if z is large enough"]
		],
		"a": 2,
		"w": ["Đường chữ S dốc nhất ở giữa và bẹt ở hai đuôi, và luôn nằm trong (0; 1). Đổi đều ở mọi nơi là tính chất của đường thẳng, không phải của sigmoid.", "The S-curve is steepest in the middle, flat in the tails and always stays within (0, 1). Equal change everywhere is a property of a straight line, not of the sigmoid."]
	}, {
		"q": ["Điểm = −2,2 + 0,04 × số ngày chưa ghé. Khách đã 60 ngày chưa ghé. Xác suất không quay lại xấp xỉ bao nhiêu?", "Score = −2.2 + 0.04 × days since last visit. A customer has not visited for 60 days. About what is the probability of not returning?"],
		"o": [
			["Khoảng 0,20 vì lấy z làm xác suất", "About 0.20, using z as the probability"],
			["Khoảng 0,45", "About 0.45"],
			["Khoảng 0,82 vì lấy 1 / e^0,2", "About 0.82, using 1 / e^0.2"],
			["Khoảng 0,55", "About 0.55"]
		],
		"a": 3,
		"w": ["z = −2,2 + 0,04 × 60 = 0,2; P = 1 / (1 + e^(−0,2)) = 1 / (1 + 0,819) ≈ 0,55. Sai lầm thường gặp là lấy thẳng z làm xác suất hoặc quên cộng 1 ở mẫu số.", "z = −2.2 + 0.04 × 60 = 0.2; P = 1 / (1 + e^(−0.2)) = 1 / (1 + 0.819) ≈ 0.55. Common slips are using z directly as a probability or forgetting the +1 in the denominator."]
	}],
	"logit-odds": [{
		"q": ["Độ dốc 0,04 cho mỗi ngày chưa ghé trong hồi quy logistic có nghĩa là gì?", "In a logistic regression, what does a slope of 0.04 per day since last visit mean?"],
		"o": [
			["Mỗi ngày thêm, odds được nhân với e^0,04 ≈ 1,04 khi các cột khác giữ nguyên", "Each extra day multiplies the odds by e^0.04 ≈ 1.04, other columns held fixed"],
			["Mỗi ngày thêm, xác suất tăng đúng 4 điểm phần trăm", "Each extra day raises the probability by exactly 4 percentage points"],
			["Mỗi ngày thêm, xác suất được nhân với 1,04", "Each extra day multiplies the probability by 1.04"],
			["Mỗi ngày thêm, odds được cộng thêm 0,04", "Each extra day adds 0.04 to the odds"]
		],
		"a": 0,
		"w": ["Độ dốc là hệ số cộng trên log-odds, nên trên odds nó là hệ số nhân e^β. Xác suất không đổi đều vì nó phụ thuộc vị trí trên đường cong.", "The slope is additive on log-odds, so on the odds it is a multiplier e^β. Probability does not move by a fixed amount because it depends on where you are on the curve."]
	}, {
		"q": ["Một cột có odds ratio bằng 2. Khách đang có xác suất 0,5. Khi cột này tăng 1 đơn vị (các cột khác giữ nguyên), xác suất mới là bao nhiêu?", "A column has an odds ratio of 2. A customer currently has probability 0.5. When this column rises by 1 unit (others fixed), what is the new probability?"],
		"o": [
			["1,00 vì xác suất nhân đôi", "1.00, because the probability doubles"],
			["Khoảng 0,67", "About 0.67"],
			["0,75", "0.75"],
			["0,60", "0.60"]
		],
		"a": 1,
		"w": ["Xác suất 0,5 cho odds = 1; nhân 2 được odds = 2; xác suất mới = 2 / (1 + 2) ≈ 0,67. Odds nhân đôi chứ xác suất không nhân đôi.", "A probability of 0.5 gives odds = 1; doubling gives odds = 2; the new probability = 2 / (1 + 2) ≈ 0.67. The odds double, the probability does not."]
	}],
	"logit-many": [{
		"q": ["Khi thêm cột thứ hai và thứ ba vào mô hình logistic, cách đọc từng hệ số thay đổi thế nào?", "When you add a second and third column to a logistic model, how does the reading of each coefficient change?"],
		"o": [
			["Mỗi hệ số giờ là tác động riêng của cột đó, bỏ qua các cột khác", "Each coefficient is now that column's standalone effect, ignoring the others"],
			["Các hệ số giờ được cộng thẳng vào xác suất", "The coefficients are now added directly to the probability"],
			["Không đổi cách đọc: mỗi hệ số vẫn là hệ số nhân odds khi các cột còn lại giữ nguyên", "The reading is the same: each coefficient is still an odds multiplier with the other columns held fixed"],
			["Cột đi cùng nhau làm hệ số ổn định hơn", "Columns that move together make the coefficients more stable"]
		],
		"a": 2,
		"w": ["Mô hình bội vẫn đọc theo kiểu «các cột khác đứng yên». Cột đi cùng nhau (đa cộng tuyến) làm hệ số kém ổn định chứ không ổn định hơn.", "A multiple model is still read as 'other columns held still'. Columns that move together (multicollinearity) make coefficients less stable, not more."]
	}, {
		"q": ["z = −1,5 + 0,02 × số ngày + (−0,3) × số lần ghé + (−0,5) × gói. Khách: 50 ngày, 2 lần ghé, có gói (gói = 1). Xác suất xấp xỉ bao nhiêu?", "z = −1.5 + 0.02 × days + (−0.3) × visits + (−0.5) × package. Customer: 50 days, 2 visits, has a package (package = 1). About what is the probability?"],
		"o": [
			["Khoảng 0,83", "About 0.83"],
			["Khoảng 0,20 vì lấy e^(−1,6)", "About 0.20, using e^(−1.6)"],
			["Khoảng 0,50", "About 0.50"],
			["Khoảng 0,17", "About 0.17"]
		],
		"a": 3,
		"w": ["z = −1,5 + 1,0 − 0,6 − 0,5 = −1,6; P = 1 / (1 + e^1,6) = 1 / (1 + 4,953) ≈ 0,17. 0,83 là 1 − P, còn 0,20 chỉ là e^(−1,6) chưa chuẩn hóa.", "z = −1.5 + 1.0 − 0.6 − 0.5 = −1.6; P = 1 / (1 + e^1.6) = 1 / (1 + 4.953) ≈ 0.17. 0.83 is 1 − P, and 0.20 is just e^(−1.6) without the normalisation."]
	}],
	"logit-spec": [{
		"q": ["Nếu bạn gọi tất cả khách (coi mọi người là sẽ rời), độ nhạy và độ đặc hiệu bằng bao nhiêu?", "If you flag every customer as a churner, what are the sensitivity and specificity?"],
		"o": [
			["Độ nhạy 100%, độ đặc hiệu 0%", "Sensitivity 100%, specificity 0%"],
			["Độ nhạy 0%, độ đặc hiệu 100%", "Sensitivity 0%, specificity 100%"],
			["Cả hai đều 100%", "Both 100%"],
			["Cả hai đều 50%", "Both 50%"]
		],
		"a": 0,
		"w": ["Gọi hết thì bắt đủ mọi người rời (độ nhạy 100%) nhưng không bỏ qua đúng ai (độ đặc hiệu 0%). Trường hợp đảo ngược là khi không gọi ai.", "Flagging everyone catches every churner (sensitivity 100%) but correctly passes over nobody (specificity 0%). The reverse case is flagging no one."]
	}, {
		"q": ["Có 40 người rời, gọi trúng 30. Có 160 người ở lại, gọi nhầm 16. Độ đặc hiệu là bao nhiêu?", "There are 40 churners and you reach 30 of them. There are 160 stayers and you wrongly flag 16. What is the specificity?"],
		"o": [
			["0,10", "0.10"],
			["0,90", "0.90"],
			["0,75", "0.75"],
			["0,87", "0.87"]
		],
		"a": 1,
		"w": ["Độ đặc hiệu = TN / (TN + FP) = (160 − 16) / 160 = 0,90. 0,10 là tỷ lệ dương giả, 0,75 là độ nhạy (30 / 40) và 0,87 là accuracy (174 / 200).", "Specificity = TN / (TN + FP) = (160 − 16) / 160 = 0.90. 0.10 is the false positive rate, 0.75 is sensitivity (30 / 40) and 0.87 is accuracy (174 / 200)."]
	}],
	"logit-cm": [{
		"q": ["Chỉ 8% khách rời. Bạn không gọi ai cả và accuracy là 92%. Kết luận nào đúng?", "Only 8% of customers churn. You call nobody and accuracy is 92%. Which conclusion is right?"],
		"o": [
			["Mô hình tốt vì accuracy 92%", "The model is good because accuracy is 92%"],
			["Recall cũng là 92%", "Recall is also 92%"],
			["Accuracy cao nhưng recall bằng 0: không bắt được người rời nào", "Accuracy is high but recall is 0: not a single churner is caught"],
			["Precision là 92%", "Precision is 92%"]
		],
		"a": 2,
		"w": ["Lớp đông (ở lại) nuốt lớp hiếm (rời) nên accuracy cao dù không bắt được ai. Cần nhìn đủ bốn ô, nhất là recall của lớp bạn quan tâm.", "The large class (stayers) swamps the rare class (churners), so accuracy stays high while nothing is caught. Look at all four cells, especially recall for the class you care about."]
	}, {
		"q": ["Trên 200 khách: TP = 24, FP = 6, FN = 16, TN = 154. Accuracy là bao nhiêu?", "On 200 customers: TP = 24, FP = 6, FN = 16, TN = 154. What is the accuracy?"],
		"o": [
			["0,60 (đó là recall)", "0.60 (that is recall)"],
			["0,80 (đó là precision)", "0.80 (that is precision)"],
			["0,77 (chỉ tính ô TN)", "0.77 (counting only the TN cell)"],
			["0,89", "0.89"]
		],
		"a": 3,
		"w": ["Accuracy = (TP + TN) / N = (24 + 154) / 200 = 0,89. Recall là 24 / 40 = 0,60 và precision là 24 / 30 = 0,80, mỗi số trả lời một câu hỏi khác.", "Accuracy = (TP + TN) / N = (24 + 154) / 200 = 0.89. Recall is 24 / 40 = 0.60 and precision is 24 / 30 = 0.80; each answers a different question."]
	}],
	"logit-pr": [{
		"q": ["Khi hạ ngưỡng quyết định (gọi thêm nhiều khách hơn), thường xảy ra điều gì?", "When you lower the decision threshold (flag more customers), what usually happens?"],
		"o": [
			["Recall tăng, precision giảm", "Recall goes up and precision goes down"],
			["Cả recall và precision cùng tăng", "Both recall and precision go up"],
			["Recall giảm, precision tăng", "Recall goes down and precision goes up"],
			["Cả hai giữ nguyên vì mô hình không đổi", "Both stay the same because the model has not changed"]
		],
		"a": 0,
		"w": ["Gọi nhiều hơn thì bắt được thêm người rời (recall tăng) nhưng cũng gọi nhầm thêm (precision giảm). Trường hợp đảo ngược xảy ra khi nâng ngưỡng.", "Flagging more catches more churners (recall up) but also adds false calls (precision down). The reverse happens when you raise the threshold."]
	}, {
		"q": ["Bạn gọi 50 người, trúng 35. Thực tế có 60 người rời. Recall là bao nhiêu?", "You call 50 people and 35 are hits. In reality 60 people churned. What is the recall?"],
		"o": [
			["0,70 (đó là precision)", "0.70 (that is precision)"],
			["Khoảng 0,58", "About 0.58"],
			["0,30 (tỷ lệ gọi nhầm trong số đã gọi)", "0.30 (the share of wrong calls among those called)"],
			["Khoảng 0,42 (tỷ lệ bỏ sót)", "About 0.42 (the miss rate)"]
		],
		"a": 1,
		"w": ["Recall = TP / (TP + FN) = 35 / 60 ≈ 0,58. 0,70 = 35 / 50 là precision và 0,42 = 25 / 60 là phần người rời bị bỏ sót.", "Recall = TP / (TP + FN) = 35 / 60 ≈ 0.58. 0.70 = 35 / 50 is precision and 0.42 = 25 / 60 is the share of churners missed."]
	}],
	"logit-roc": [{
		"q": ["AUC của mô hình là 0,90. Điều này có cho biết nên dùng ngưỡng nào không?", "The model's AUC is 0.90. Does that tell you which threshold to use?"],
		"o": [
			["Có: dùng ngưỡng 0,5 vì đó là điểm mặc định tốt nhất", "Yes: use 0.5 because it is the best default point"],
			["Có: dùng ngưỡng 0,90 bằng đúng AUC", "Yes: use a threshold of 0.90, equal to the AUC"],
			["Không: AUC đo chất lượng xếp hạng, còn ngưỡng chọn từ chi phí của một lần bỏ sót và một lần báo động giả", "No: AUC measures ranking quality; you pick the threshold from the cost of a miss versus a false alarm"],
			["Có: ngưỡng tốt nhất luôn là điểm cao nhất trên đường ROC", "Yes: the best threshold is always the highest point on the ROC curve"]
		],
		"a": 2,
		"w": ["AUC tóm tắt khả năng xếp hạng qua mọi ngưỡng nên không chọn ngưỡng thay bạn. Ngưỡng 0,5 chỉ là một chấm trên đường ROC.", "AUC summarises ranking ability across all thresholds, so it does not choose one for you. A threshold of 0.5 is just one dot on the ROC curve."]
	}, {
		"q": ["Có 50 người rời, bắt được 35. Có 150 người ở lại, gọi nhầm 18. Tỷ lệ dương giả (FPR) là bao nhiêu?", "There are 50 churners and 35 are caught. There are 150 stayers and 18 are wrongly flagged. What is the false positive rate (FPR)?"],
		"o": [
			["0,70 (đó là recall)", "0.70 (that is recall)"],
			["0,88 (đó là độ đặc hiệu)", "0.88 (that is specificity)"],
			["0,34 (18 chia cho số người đã gọi)", "0.34 (18 divided by the number flagged)"],
			["0,12", "0.12"]
		],
		"a": 3,
		"w": ["FPR = FP / (FP + TN) = 18 / 150 = 0,12 = 1 − độ đặc hiệu. Mẫu số là toàn bộ người ở lại, không phải số người đã gọi.", "FPR = FP / (FP + TN) = 18 / 150 = 0.12 = 1 − specificity. The denominator is all stayers, not the number flagged."]
	}],
	"logit-who": [{
		"q": ["Mô hình được học trên những người nghe máy, rồi bạn dùng nó cho cả những người không nghe máy. Điều nào đúng?", "A model is trained on people who answered the phone, then applied to people who did not answer. Which is true?"],
		"o": [
			["Hệ số chỉ mô tả người nghe máy; áp cho nhóm khác là một câu hỏi khác cần hiệu chỉnh riêng", "The coefficients describe only answerers; applying them to others is a different question that needs separate calibration"],
			["Không sao nếu cỡ mẫu đủ lớn", "It is fine as long as the sample is large enough"],
			["Không sao nếu các hệ số có ý nghĩa thống kê", "It is fine if the coefficients are statistically significant"],
			["Không sao nếu AUC trên file học cao", "It is fine if the AUC on the training file is high"]
		],
		"a": 0,
		"w": ["Đây là vấn đề chọn mẫu, không phải cỡ mẫu: thêm dữ liệu cùng loại không đưa người không nghe máy vào. Ý nghĩa thống kê và AUC trên file học không sửa được điều đó.", "This is a selection problem, not a sample-size problem: more data of the same kind does not bring in non-answerers. Statistical significance and training AUC cannot fix it."]
	}, {
		"q": ["Trong file học, 25% người nghe máy để lại form. Chỉ 60% danh sách nghe máy và người không nghe máy không bao giờ để lại form. Tỷ lệ form trên cả danh sách là bao nhiêu?", "In the training file 25% of answerers leave a form. Only 60% of the list answers, and non-answerers never leave a form. What is the form rate across the whole list?"],
		"o": [
			["25%", "25%"],
			["15%", "15%"],
			["60%", "60%"],
			["35%", "35%"]
		],
		"a": 1,
		"w": ["0,6 × 25% = 15%. Lấy 25% cho cả danh sách là sai vì bỏ qua 40% người không nghe máy.", "0.6 × 25% = 15%. Using 25% for the whole list is wrong because it ignores the 40% who never answer."]
	}],
	"logit-drift": [{
		"q": ["Các cột đầu vào có phân phối như cũ, nhưng cùng một cột (ví dụ số lần ghé) không còn dự đoán được kết quả như trước. Đây là loại trôi nào?", "The input columns have the same distribution as before, but the same column (e.g. number of visits) no longer predicts the outcome as it used to. Which kind of drift is this?"],
		"o": [
			["Trôi dữ liệu (data drift)", "Data drift"],
			["Overfitting", "Overfitting"],
			["Trôi khái niệm (concept drift)", "Concept drift"],
			["Lỗi chọn mẫu theo kết quả", "Selection on the outcome"]
		],
		"a": 2,
		"w": ["Trôi khái niệm là khi quan hệ giữa cột và kết quả đổi dù đầu vào trông như cũ. Trôi dữ liệu là khi phân phối đầu vào hoặc tỷ lệ lớp đổi.", "Concept drift is when the relation between a column and the outcome changes even though inputs look the same. Data drift is when the input distribution or class mix changes."]
	}, {
		"q": ["Mô hình học từ tháng 3, khi GDN chiếm phần lớn form. Tháng 12, TikTok chiếm phần lớn form và tỷ lệ rời đổi. Việc nên làm là gì?", "The model was trained in March, when GDN gave most forms. In December TikTok gives most forms and churn has changed. What should you do?"],
		"o": [
			["Giữ nguyên vì mã nguồn không đổi nên mô hình không đổi", "Keep it, because the code has not changed so the model has not changed"],
			["Dùng AUC 0,82 của tháng 3 để báo cáo cho tháng 12", "Report the March AUC of 0.82 for December"],
			["Nâng ngưỡng lên 0,9 để bù cho thay đổi kênh", "Raise the threshold to 0.9 to compensate for the channel change"],
			["Chấm lại mô hình trên dữ liệu tháng 12 có nhãn và huấn luyện lại nếu điểm tụt", "Re-score the model on labelled December data and retrain if performance drops"]
		],
		"a": 3,
		"w": ["Mã không đổi nhưng dữ liệu đổi nên điểm cũ không còn bảo đảm gì. Chỉ có chấm lại trên dữ liệu mới mới biết mô hình còn dùng được; đổi ngưỡng tùy ý không sửa được trôi dữ liệu.", "The code is the same but the data changed, so the old score guarantees nothing. Only re-scoring on new data shows whether the model still works; changing the threshold arbitrarily does not fix drift."]
	}],
	"logit-rest": [{
		"q": ["Phương pháp một-đối-phần-còn-lại cho ba nhãn ra các xác suất 0,50; 0,30; 0,40. Điều nào đúng?", "A one-versus-rest approach with three labels gives probabilities 0.50, 0.30 and 0.40. Which is correct?"],
		"o": [
			["Ba số không cần cộng thành 1; chọn nhãn cao nhất hoặc dùng luật bạn tự viết", "The three need not sum to 1; pick the highest label or apply a rule you write yourself"],
			["Kết quả sai vì xác suất phải cộng thành 1", "The result is wrong because probabilities must sum to 1"],
			["Mô hình tự chuẩn hóa nên tổng luôn là 1", "The model normalises itself so the total is always 1"],
			["Nên chọn nhãn có xác suất thấp nhất", "You should choose the label with the lowest probability"]
		],
		"a": 0,
		"w": ["Mỗi mô hình được huấn luyện riêng nên tổng có thể là 1,20. Việc chọn nhãn hay hành động vẫn là quy tắc do bạn viết ra.", "Each model is trained separately, so the total can be 1.20. Choosing a label or an action is still a rule you have to write."]
	}, {
		"q": ["Có 4 nhãn. Phương pháp một-đối-một cần huấn luyện bao nhiêu mô hình?", "There are 4 labels. How many models does one-versus-one need?"],
		"o": [
			["4 mô hình (số này là của một-đối-phần-còn-lại)", "4 models (that is the one-versus-rest count)"],
			["6 mô hình", "6 models"],
			["8 mô hình", "8 models"],
			["12 mô hình (đếm cả hai chiều của mỗi cặp)", "12 models (counting both directions of every pair)"]
		],
		"a": 1,
		"w": ["Một-đối-một làm một mô hình cho mỗi cặp nhãn: 4 × 3 / 2 = 6. Một cặp chỉ cần một mô hình, không cần hai chiều.", "One-versus-one fits one model per pair of labels: 4 × 3 / 2 = 6. A pair needs one model, not one per direction."]
	}],
	"tree-ask": [{
		"q": ["Điều nào đúng về cây quyết định so với hồi quy tuyến tính?", "Which statement about a decision tree versus linear regression is true?"],
		"o": [
			["Cây chỉ hoạt động khi quan hệ là đường thẳng", "A tree only works when the relation is a straight line"],
			["Cây cho một độ dốc cho mỗi cột như hồi quy", "A tree gives one slope per column like regression"],
			["Cây cắt dữ liệu thành các hộp theo ngưỡng và không cho một độ dốc kiểu «thêm một đơn vị thì được thêm bấy nhiêu»", "A tree cuts the data into boxes at thresholds and gives no 'one more unit adds this much' slope"],
			["Cây không dùng được cột số", "A tree cannot use numeric columns"]
		],
		"a": 2,
		"w": ["Cây không cần quan hệ thẳng và tự tìm ngưỡng. Vì vậy nó không có độ dốc để đọc, chỉ có các lá.", "A tree does not need a straight-line relation and finds thresholds itself. That is why it has no slope to read, only leaves."]
	}, {
		"q": ["Luật: «dưới 2 lần ghé và chi dưới 500 nghìn đồng» thì vào lá «dễ rời». Bốn khách (lần ghé, chi nghìn đồng): (1; 300), (1; 700), (3; 200), (0; 450). Có bao nhiêu khách vào lá «dễ rời»?", "Rule: 'fewer than 2 visits and spend below 500k VND' goes to the 'likely to churn' leaf. Four customers (visits, spend in k VND): (1, 300), (1, 700), (3, 200), (0, 450). How many land in that leaf?"],
		"o": [
			["1 khách", "1 customer"],
			["3 khách", "3 customers"],
			["4 khách", "4 customers"],
			["2 khách", "2 customers"]
		],
		"a": 3,
		"w": ["Phải thỏa cả hai điều kiện: (1; 300) và (0; 450) thỏa. (1; 700) trượt điều kiện chi tiêu, (3; 200) trượt điều kiện lần ghé.", "Both conditions must hold: (1, 300) and (0, 450) qualify. (1, 700) fails on spend and (3, 200) fails on visits."]
	}],
	"tree-line": [{
		"q": ["Số form nhảy lên khi chi vượt 5 triệu đồng rồi đứng yên. Mô hình nào khớp tự nhiên hơn và vì sao?", "Forms jump when spend passes 5 million VND and then stay flat. Which model fits more naturally and why?"],
		"o": [
			["Cây, vì một nhát cắt ở 5 triệu tạo đúng một bậc thang", "A tree, because a single split at 5 million creates exactly one step"],
			["Đường thẳng, vì nó nội suy mượt qua bậc nhảy", "A line, because it interpolates smoothly through the jump"],
			["Hai mô hình như nhau vì dữ liệu cùng một cột", "Both are equal because the data has the same column"],
			["Đường thẳng, vì nó cho hai mức riêng ở hai phía", "A line, because it gives separate levels on each side"]
		],
		"a": 0,
		"w": ["Đường thẳng chỉ có một độ dốc và trượt qua cả hai phía, nên không bắt được bậc nhảy. Cây cho mỗi lá một mức nên khớp bậc thang.", "A line has one slope that runs through both sides, so it cannot capture a jump. A tree gives each leaf its own level, which suits a step."]
	}, {
		"q": ["Cây có ngưỡng 5 triệu, lá dưới ngưỡng cho 12 form, lá từ ngưỡng trở lên cho 28 form. Dự đoán cho tuần chi 4,9 triệu và tuần chi 40 triệu là bao nhiêu?", "A tree splits at 5 million, with 12 forms for the lower leaf and 28 forms for the upper leaf. What does it predict for a week with 4.9 million spend and a week with 40 million?"],
		"o": [
			["12 và 12", "12 and 12"],
			["12 và 28", "12 and 28"],
			["20 và 28 (nội suy gần ngưỡng)", "20 and 28 (interpolating near the threshold)"],
			["12 và 40", "12 and 40"]
		],
		"a": 1,
		"w": ["4,9 triệu nằm dưới ngưỡng nên nhận 12 và 40 triệu nằm trên ngưỡng nên nhận 28. Cây không nội suy giữa hai lá và không vượt quá mức của lá.", "4.9 million is below the threshold so it gets 12, and 40 million is above so it gets 28. A tree does not interpolate between leaves or go beyond a leaf's level."]
	}],
	"tree-gini": [{
		"q": ["Điều nào đúng về Gini và một nhát cắt tốt?", "Which statement about Gini and a good split is true?"],
		"o": [
			["Nút thuần một nhãn có G = 1", "A node with one label has G = 1"],
			["Nhát cắt tốt khi hai nút con có số dòng bằng nhau", "A split is good when both children have equal row counts"],
			["Nút thuần một nhãn có G = 0; nhát cắt tốt khi Gini có trọng số của hai nút con thấp hơn nút cha", "A node with one label has G = 0; a split is good when the weighted Gini of the children is lower than the parent's"],
			["Nhát cắt tốt khi Gini có trọng số cao hơn nút cha", "A split is good when the weighted Gini is higher than the parent's"]
		],
		"a": 2,
		"w": ["Gini đo độ lẫn nên nút thuần có 0, và cây tìm nhát cắt làm độ lẫn có trọng số giảm nhiều nhất. Kích thước hai nút con không cần bằng nhau.", "Gini measures impurity, so a pure node scores 0, and the tree looks for the split that cuts weighted impurity most. The two children do not need equal size."]
	}, {
		"q": ["Một nút có 30% ở lại và 70% rời. Gini G = 1 − Σ pₖ² là bao nhiêu?", "A node has 30% stayers and 70% leavers. What is the Gini G = 1 − Σ pₖ²?"],
		"o": [
			["0,58 (chỉ là Σ pₖ², quên lấy 1 trừ)", "0.58 (just Σ pₖ², forgetting 1 minus)"],
			["0,21 (chỉ lấy 0,3 × 0,7)", "0.21 (just 0.3 × 0.7)"],
			["0,30", "0.30"],
			["0,42", "0.42"]
		],
		"a": 3,
		"w": ["G = 1 − (0,3² + 0,7²) = 1 − (0,09 + 0,49) = 0,42. 0,58 là tổng bình phương chưa trừ khỏi 1.", "G = 1 − (0.3² + 0.7²) = 1 − (0.09 + 0.49) = 0.42. 0.58 is the sum of squares before subtracting from 1."]
	}],
	"tree-imp": [{
		"q": ["Thanh «lần ghé» cao nhất trong biểu đồ độ quan trọng của cột. Điều nào đúng?", "The 'visits' bar is the tallest on the column importance chart. Which statement is correct?"],
		"o": [
			["Cột đó giúp làm nhóm sạch hơn nhiều nhất ở các lần cắt của cây này, chưa chứng tỏ nó gây ra form", "That column cut impurity the most in this tree's splits; it does not prove it causes forms"],
			["Tăng số lần ghé chắc chắn làm tăng form", "Raising visits will certainly raise forms"],
			["Nên dồn thêm ngân sách vào cột đó", "You should shift more budget to that column"],
			["Cột có thanh thấp chắc chắn không liên quan đến form", "A column with a low bar has no relation to forms"]
		],
		"a": 0,
		"w": ["Độ quan trọng chỉ cho biết cột nào hữu ích cho các lần cắt, không nói về nhân quả. Hai cột gần giống nhau có thể chia điểm bất công vì cây chọn một cột trước.", "Importance only shows which column was useful for the splits, not causation. Two near-duplicate columns can split credit unfairly because the tree picks one first."]
	}, {
		"q": ["Mức giảm độ lẫn theo cột: lần ghé 0,18; lần xem 0,02; chi tiêu 0,10. Nếu chuẩn hóa tổng về 100%, «lần ghé» chiếm bao nhiêu?", "Impurity reduction by column: visits 0.18, views 0.02, spend 0.10. If normalised to a 100% total, what share does 'visits' get?"],
		"o": [
			["90%", "90%"],
			["60%", "60%"],
			["18%", "18%"],
			["33%", "33%"]
		],
		"a": 1,
		"w": ["Tổng là 0,18 + 0,02 + 0,10 = 0,30 nên 0,18 / 0,30 = 60%. 90% là kết quả nếu bỏ quên cột chi tiêu.", "The total is 0.18 + 0.02 + 0.10 = 0.30, so 0.18 / 0.30 = 60%. 90% would result from forgetting the spend column."]
	}],
	"tree-deep": [{
		"q": ["Dấu hiệu nào cho thấy cây bị overfitting?", "Which sign shows a tree is overfitting?"],
		"o": [
			["Sai số cao trên cả dòng đã học và dòng mới", "High error on both learned and new rows"],
			["Sai số bằng nhau trên dòng đã học và dòng mới", "Equal error on learned and new rows"],
			["Sai số thấp trên dòng đã học nhưng cao hơn trên dòng mới", "Low error on rows it learned but higher error on new rows"],
			["Sai số trên dòng đã học cao hơn trên dòng mới", "Higher error on learned rows than on new rows"]
		],
		"a": 2,
		"w": ["Overfitting là học thuộc dữ liệu cũ nên khoảng cách giữa điểm học và điểm mới rộng ra. Sai số cao ở cả hai nơi là underfitting.", "Overfitting is memorising old data, so the gap between training and new scores widens. High error in both places is underfitting."]
	}, {
		"q": ["Bốn cây (đúng trên dòng học / dòng mới): sâu 2: 80% / 78%; sâu 4: 88% / 84%; sâu 8: 96% / 79%; sâu 20: 100% / 70%. Nên chọn cây nào?", "Four trees (accuracy on learned rows / new rows): depth 2: 80% / 78%; depth 4: 88% / 84%; depth 8: 96% / 79%; depth 20: 100% / 70%. Which should you pick?"],
		"o": [
			["Cây sâu 20, vì đúng cao nhất trên dòng học", "Depth 20, because it is most accurate on learned rows"],
			["Cây sâu 8, vì điểm học cao mà điểm mới vẫn khá", "Depth 8, because its training score is high and the new score is still decent"],
			["Cây sâu 2, vì khoảng cách học và mới nhỏ nhất (2 điểm)", "Depth 2, because the gap between learned and new is smallest (2 points)"],
			["Cây sâu 4, vì đúng cao nhất trên dòng mới (84%)", "Depth 4, because it is most accurate on new rows (84%)"]
		],
		"a": 3,
		"w": ["Chọn theo điểm trên dữ liệu mới: 84% là cao nhất. Khoảng cách nhỏ nhất của cây sâu 2 chỉ cho thấy nó ít overfit, nhưng nó đoán kém hơn cây sâu 4.", "Choose by the score on new data: 84% is the highest. Depth 2 has the smallest gap, which only shows it overfits less, but it predicts worse than depth 4."]
	}],
	"tree-num": [{
		"q": ["Với hàm lỗi bình phương, cây hồi quy dự đoán gì cho mọi dòng rơi vào cùng một lá?", "With squared-error loss, what does a regression tree predict for every row that lands in the same leaf?"],
		"o": [
			["Trung bình của biến mục tiêu trong lá đó", "The mean of the target in that leaf"],
			["Trung vị của biến mục tiêu trong lá", "The median of the target in that leaf"],
			["Giá trị lớn nhất trong lá", "The maximum value in the leaf"],
			["Giá trị nội suy giữa lá này và lá bên cạnh", "A value interpolated between this leaf and the neighbouring leaf"]
		],
		"a": 0,
		"w": ["Trung bình làm tổng bình phương sai số trong lá nhỏ nhất. Trung vị chỉ xuất hiện khi đổi sang lỗi trị tuyệt đối, và cây không nội suy giữa các lá.", "The mean minimises the sum of squared errors in a leaf. The median appears only under absolute-error loss, and a tree does not interpolate between leaves."]
	}, {
		"q": ["Một lá có 4 tuần với số form 8, 10, 12 và 18. Giá trị lá (hàm lỗi bình phương) là bao nhiêu?", "A leaf holds 4 weeks with form counts 8, 10, 12 and 18. What is the leaf value (squared-error loss)?"],
		"o": [
			["11 (đó là trung vị)", "11 (that is the median)"],
			["12", "12"],
			["18 (giá trị lớn nhất)", "18 (the maximum)"],
			["10", "10"]
		],
		"a": 1,
		"w": ["Trung bình = (8 + 10 + 12 + 18) / 4 = 12. Trung vị là (10 + 12) / 2 = 11, chỉ đúng khi dùng lỗi trị tuyệt đối.", "Mean = (8 + 10 + 12 + 18) / 4 = 12. The median is (10 + 12) / 2 = 11, which applies only with absolute-error loss."]
	}],
	"clus-why": [{
		"q": ["Sau khi thuật toán gom khách thành các cụm, bước tiếp theo đúng là gì?", "After an algorithm groups customers into clusters, what is the correct next step?"],
		"o": [
			["Dùng luôn cụm làm phân khúc vì thuật toán đã cho biết ưu đãi nào hợp", "Use the clusters as segments, since the algorithm already tells you the right offer"],
			["Coi số thứ tự cụm là nhãn có nghĩa thật", "Treat the cluster number as a meaningful label"],
			["Mô tả đặc điểm từng cụm, đặt tên và quyết định ưu đãi phù hợp", "Profile each cluster, name it and decide a fitting offer"],
			["Kiểm tra độ chính xác so với cột đáp án", "Check accuracy against the answer column"]
		],
		"a": 2,
		"w": ["Học không giám sát không có cột đáp án và chỉ tạo nhóm; một cụm chưa có tên thì chưa phải phân khúc. Việc hiểu và hành động thuộc về con người.", "Unsupervised learning has no answer column and only creates groups; an unnamed cluster is not yet a segment. Understanding and acting are up to people."]
	}, {
		"q": ["Chỉ xét số lần ghé mỗi tháng: A = 2, B = 3, C = 10, khách D = 4. D gần khách nào nhất?", "Using only visits per month: A = 2, B = 3, C = 10, customer D = 4. Which customer is D closest to?"],
		"o": [
			["A (cách 2)", "A (distance 2)"],
			["C (cách 6)", "C (distance 6)"],
			["A và B hòa nhau", "A and B tie"],
			["B (cách 1)", "B (distance 1)"]
		],
		"a": 3,
		"w": ["Khoảng cách: 4 − 3 = 1, 4 − 2 = 2, 10 − 4 = 6, nên B gần nhất. Khoảng cách là khái niệm duy nhất về «giống nhau» ở đây.", "Distances: 4 − 3 = 1, 4 − 2 = 2, 10 − 4 = 6, so B is closest. Distance is the only notion of 'similar' here."]
	}],
	"km-loop": [{
		"q": ["Chạy k-means hai lần với các tâm xuất phát khác nhau. Điều nào đúng?", "You run k-means twice with different starting centres. Which is true?"],
		"o": [
			["Có thể ra kết quả khác nhau vì chi phí có nhiều thung lũng", "The results can differ because the cost has several valleys"],
			["Luôn ra đúng cùng một kết quả", "The result is always exactly the same"],
			["Lần chạy sau luôn tốt hơn lần chạy trước", "The later run is always better than the earlier one"],
			["Chỉ khác nếu đổi số cột", "They differ only if the number of columns changes"]
		],
		"a": 0,
		"w": ["K-means chỉ hội tụ về một điểm tối ưu cục bộ phụ thuộc vào tâm đầu. Vì vậy nên chạy nhiều lần hoặc dùng K-means++.", "K-means converges only to a local optimum that depends on the starting centres. That is why you should run it several times or use K-means++."]
	}, {
		"q": ["Một cụm gồm ba khách có số lần ghé 1, 3 và 8. Tâm mới của cụm sau bước dời tâm là bao nhiêu?", "A cluster has three customers with 1, 3 and 8 visits. What is the new centre after the update step?"],
		"o": [
			["3 (đó là trung vị)", "3 (that is the median)"],
			["4", "4"],
			["4,5 (trung điểm của 1 và 8)", "4.5 (the midpoint of 1 and 8)"],
			["8", "8"]
		],
		"a": 1,
		"w": ["Tâm mới là trung bình: (1 + 3 + 8) / 3 = 4. Trung vị bằng 3 và trung điểm bằng 4,5 đều không phải bước cập nhật của k-means.", "The new centre is the mean: (1 + 3 + 8) / 3 = 4. The median (3) and the midpoint (4.5) are not what the k-means update uses."]
	}],
	"km-k": [{
		"q": ["Vì sao không nên chọn K chỉ vì nó có tổng bình phương trong cụm nhỏ nhất?", "Why should you not pick K just because it has the smallest within-cluster sum of squares?"],
		"o": [
			["Vì độ tản càng nhỏ thì cụm càng kém", "Because smaller spread means worse clusters"],
			["Vì chỉ số này tăng khi K tăng", "Because this measure rises as K rises"],
			["Vì độ tản luôn giảm khi K tăng và bằng 0 khi mỗi điểm là một cụm, nên không phản ánh nhóm có ích", "Because the spread always falls as K grows and hits 0 when every point is its own cluster, so it does not show useful groups"],
			["Vì chỗ gập của đường elbow chứng minh có đúng K nhóm thật", "Because the elbow point proves there are exactly K real groups"]
		],
		"a": 2,
		"w": ["Độ tản không bao giờ tăng khi thêm cụm nên K lớn luôn thắng. Chỗ gập chỉ là gợi ý, vẫn cần nhóm đặt tên được và đủ lớn để vận hành.", "The spread never rises when you add clusters, so a large K always wins. The elbow is only a hint; you still need groups you can name and that are large enough to run."]
	}, {
		"q": ["Độ tản: K = 1: 1.000; K = 2: 520; K = 3: 300; K = 4: 270; K = 5: 250. Mức giảm khi đi từ K = 2 lên 3 và từ 3 lên 4 là bao nhiêu?", "Spread: K = 1: 1,000; K = 2: 520; K = 3: 300; K = 4: 270; K = 5: 250. How much does it drop going from K = 2 to 3 and from 3 to 4?"],
		"o": [
			["Giảm 300 rồi giảm 270", "Drops 300 then 270"],
			["Giảm 520 rồi giảm 300", "Drops 520 then 300"],
			["Giảm 30 rồi giảm 220", "Drops 30 then 220"],
			["Giảm 220 rồi giảm 30, đường bẹt sau K = 3", "Drops 220 then 30, so the curve flattens after K = 3"]
		],
		"a": 3,
		"w": ["520 − 300 = 220 và 300 − 270 = 30: mức giảm đột ngột nhỏ lại sau K = 3, nên K = 3 là ứng viên. 300 và 270 là giá trị độ tản, không phải mức giảm.", "520 − 300 = 220 and 300 − 270 = 30: the drop shrinks sharply after K = 3, making K = 3 a candidate. 300 and 270 are spread values, not drops."]
	}],
	"km-start": [{
		"q": ["K-means++ chọn tâm tiếp theo bằng cách nào?", "How does K-means++ pick the next centre?"],
		"o": [
			["Chọn ngẫu nhiên với xác suất tỷ lệ với bình phương khoảng cách tới tâm gần nhất đã có", "Randomly, with probability proportional to the squared distance to the nearest existing centre"],
			["Luôn chọn điểm xa nhất so với các tâm hiện có", "Always the point farthest from the existing centres"],
			["Chọn ngẫu nhiên đều trong mọi điểm", "Uniformly at random among all points"],
			["Chọn sao cho chắc chắn đạt kết quả tối ưu toàn cục", "So as to guarantee the global optimum"]
		],
		"a": 0,
		"w": ["Điểm xa có xác suất cao hơn nhưng không chắc chắn được chọn, và không có bảo đảm tối ưu toàn cục. Vẫn nên chạy vài lần.", "Far points are likelier but not certain to be chosen, and there is no global-optimum guarantee. You should still run it several times."]
	}, {
		"q": ["Hai điểm ứng viên: A cách tâm gần nhất 2 và B cách 4. Theo K-means++, xác suất chọn B làm tâm mới là bao nhiêu?", "Two candidate points: A is 2 from the nearest centre and B is 4. By K-means++, what is the probability B is chosen as the new centre?"],
		"o": [
			["67% (dùng khoảng cách chưa bình phương)", "67% (using unsquared distances)"],
			["80%", "80%"],
			["50%", "50%"],
			["100% vì B xa hơn", "100%, because B is farther"]
		],
		"a": 1,
		"w": ["Bình phương khoảng cách: 4 và 16; xác suất của B = 16 / (4 + 16) = 80%. Dùng khoảng cách thẳng cho 4 / 6 ≈ 67% là sai.", "Squared distances: 4 and 16; B's probability = 16 / (4 + 16) = 80%. Using the plain distances gives 4 / 6 ≈ 67%, which is wrong."]
	}],
	hier,
	"link-how": [{
		"q": ["Cách linkage nào dễ nối cả một dải điểm thành một sợi dài?", "Which linkage tends to string a whole band of points into one long chain?"],
		"o": [
			["Single linkage (lấy khoảng cách nhỏ nhất)", "Single linkage (smallest distance)"],
			["Complete linkage (lấy khoảng cách lớn nhất)", "Complete linkage (largest distance)"],
			["Average linkage", "Average linkage"],
			["Không cách nào, vì linkage không ảnh hưởng đến hình dạng cụm", "None, because linkage does not affect cluster shape"]
		],
		"a": 0,
		"w": ["Single chỉ cần hai điểm gần nhau là dính, nên dễ tạo chuỗi. Complete chỉ dính khi cả cụm còn chặt, và linkage khác nhau có thể cho nhóm khác nhau.", "Single only needs two close points to join, so it easily chains. Complete joins only when the whole cluster stays tight, and different linkages can give different groups."]
	}, {
		"q": ["Cụm A gồm điểm 1 và 3, cụm B gồm điểm 6 và 10. Khoảng cách average linkage giữa hai cụm là bao nhiêu?", "Cluster A has points 1 and 3, and cluster B has points 6 and 10. What is the average-linkage distance between them?"],
		"o": [
			["3 (đó là single)", "3 (that is single)"],
			["6", "6"],
			["9 (đó là complete)", "9 (that is complete)"],
			["5", "5"]
		],
		"a": 1,
		"w": ["Bốn cặp: 5, 9, 3, 7; trung bình = 24 / 4 = 6. Single lấy nhỏ nhất (3) và complete lấy lớn nhất (9).", "The four pairs are 5, 9, 3, 7; the mean = 24 / 4 = 6. Single takes the smallest (3) and complete takes the largest (9)."]
	}],
	"db-scan": [{
		"q": ["Điều nào đúng về DBSCAN?", "Which statement about DBSCAN is true?"],
		"o": [
			["Không cần chọn tham số nào", "No parameters need to be chosen"],
			["Mọi điểm đều bị ép vào cụm gần nhất", "Every point is forced into the nearest cluster"],
			["Không cần chọn k nhưng phải chọn bán kính ε và số hàng xóm tối thiểu; điểm thưa được để là nhiễu", "You do not choose k but you must choose the radius ε and the minimum neighbours; sparse points are left as noise"],
			["Số cụm do người dùng đặt trước bằng k", "The number of clusters is set in advance by k"]
		],
		"a": 2,
		"w": ["Không chọn k không có nghĩa là không chọn gì: ε và MinPts quyết định thế nào là «đặc». Điểm thưa không ép vào cụm mà được gắn nhiễu.", "Not choosing k does not mean choosing nothing: ε and MinPts decide what counts as 'dense'. Sparse points are marked as noise, not forced into a cluster."]
	}, {
		"q": ["ε = 0,5 và MinPts = 4. Số hàng xóm trong bán kính 0,5 của bốn khách: P có 6, Q có 1, R có 9, S có 0. Có bao nhiêu khách là điểm lõi?", "ε = 0.5 and MinPts = 4. Neighbours within radius 0.5 for four customers: P has 6, Q has 1, R has 9, S has 0. How many are core points?"],
		"o": [
			["3 khách", "3 customers"],
			["1 khách", "1 customer"],
			["4 khách", "4 customers"],
			["2 khách (P và R)", "2 customers (P and R)"]
		],
		"a": 3,
		"w": ["Điểm lõi cần ít nhất 4 hàng xóm trong bán kính: chỉ P (6) và R (9) đủ. Q (1) không đủ và S (0) là nhiễu.", "A core point needs at least 4 neighbours in the radius: only P (6) and R (9) qualify. Q (1) falls short and S (0) is noise."]
	}],
	"gmm-soft": [{
		"q": ["Một khách có phần thuộc 0,6 với nhóm A theo GMM. Cách đọc đúng là gì?", "A customer has a 0.6 membership for group A under a GMM. What is the correct reading?"],
		"o": [
			["Theo mô hình, 60% khả năng điểm này được sinh ra từ nhóm A, và chỉ đúng nếu các đám đúng là bầu dục", "Under the model, a 60% chance this point came from group A, valid only if the clusters are really elliptical"],
			["Chắc chắn 60% rằng nhãn thật của khách là A", "A 60% certainty that the customer's true label is A"],
			["60% chi tiêu của khách thuộc về nhóm A", "60% of the customer's spend belongs to group A"],
			["Khách chắc chắn thuộc cả hai nhóm cùng lúc", "The customer definitely belongs to both groups at once"]
		],
		"a": 0,
		"w": ["Phần thuộc về là xác suất trong mô hình, không phải độ chắc chắn về một nhãn thật có sẵn. Nếu các đám không giống bầu dục thì con số này là của một mô hình sai.", "Membership is a probability within the model, not certainty about some existing true label. If the clusters are not elliptical, the number comes from a wrong model."]
	}, {
		"q": ["Một khách có phần thuộc 0,55 với nhóm A, 0,30 với nhóm B, còn lại thuộc nhóm C. Phần thuộc nhóm C là bao nhiêu?", "A customer has a membership of 0.55 for group A, 0.30 for group B and the rest for group C. What is the membership for group C?"],
		"o": [
			["0,45", "0.45"],
			["0,15", "0.15"],
			["0,30", "0.30"],
			["0,85", "0.85"]
		],
		"a": 1,
		"w": ["Các phần thuộc của một điểm cộng lại bằng 1: 1 − 0,55 − 0,30 = 0,15. Khác với các xác suất một-đối-phần-còn-lại, ở đây tổng phải là 1.", "A point's memberships sum to 1: 1 − 0.55 − 0.30 = 0.15. Unlike one-versus-rest probabilities, these must total 1."]
	}],
	"k-mode": [{
		"q": ["Vì sao không lấy trung bình mã số của tên kênh (GDN = 1, Facebook = 2, TikTok = 3)?", "Why should you not average the numeric codes of channel names (GDN = 1, Facebook = 2, TikTok = 3)?"],
		"o": [
			["Vì tính trung bình quá chậm với cột chữ", "Because averaging is too slow for text columns"],
			["Vì trung bình luôn bằng mode", "Because the mean always equals the mode"],
			["Vì mã chỉ là nhãn không có thứ tự, nên trung bình như 2,4 không phải một kênh nào cả", "Because the codes are unordered labels, so an average such as 2.4 is not any channel"],
			["Vì mã số đã là số nên có thể tính trung bình bình thường", "Because the codes are already numbers so averaging is fine"]
		],
		"a": 2,
		"w": ["Cột phân loại cần mode (giá trị hay gặp nhất) làm tâm, đó là ý của k-modes. Gán mã số rồi lấy trung bình tạo ra thứ tự giả.", "Categorical columns use the mode (most frequent value) as the centre, which is the point of k-modes. Coding then averaging invents a false order."]
	}, {
		"q": ["K-prototype: khoảng cách số = 2,0; hai khách khác nhau ở 2 cột chữ; γ = 0,5. Tổng khoảng cách là bao nhiêu?", "K-prototype: numeric distance = 2.0; two customers differ in 2 categorical columns; γ = 0.5. What is the total distance?"],
		"o": [
			["4,0 (quên nhân γ)", "4.0 (forgetting to multiply by γ)"],
			["2,5 (cộng γ thay vì γ × 2)", "2.5 (adding γ instead of γ × 2)"],
			["1,0 (quên khoảng cách số)", "1.0 (forgetting the numeric distance)"],
			["3,0", "3.0"]
		],
		"a": 3,
		"w": ["Tổng = 2,0 + 0,5 × 2 = 3,0. Đổi γ là đổi trọng số của phần chữ so với phần số, nên đổi cụm.", "Total = 2.0 + 0.5 × 2 = 3.0. Changing γ changes the weight of the text part versus the numeric part, and so changes the clusters."]
	}],
	"nlp-tok": [{
		"q": ["Rủi ro chính khi dùng danh sách từ hư (stop words) quá tay là gì?", "What is the main risk of an over-aggressive stop-word list?"],
		"o": [
			["Có thể bỏ mất từ bạn cần, ví dụ «không» làm mất phủ định", "It can remove words you need, e.g. dropping 'không' loses negation"],
			["Làm các token dài ra", "It makes tokens longer"],
			["Làm đổi chính tả của các từ còn lại", "It changes the spelling of the remaining words"],
			["Làm tăng số lần xuất hiện của từ hay gặp", "It increases the count of common words"]
		],
		"a": 0,
		"w": ["Từ hư thường là từ có mặt ở mọi câu nên bỏ đi là hợp lý, nhưng danh sách xấu có thể xóa luôn từ mang nghĩa. Chính tả và độ dài token không bị đổi.", "Stop words appear in nearly every sentence so dropping them makes sense, but a bad list can delete meaningful words too. Spelling and token length are not affected."]
	}, {
		"q": ["Câu «đau rất lâu và chờ rất mệt» được tách theo khoảng trắng thành 7 token. Bỏ từ hư «rất» và «và» thì còn bao nhiêu token?", "The sentence 'đau rất lâu và chờ rất mệt' is split by spaces into 7 tokens. After removing the stop words 'rất' and 'và', how many tokens remain?"],
		"o": [
			["5 token (chỉ bỏ 2 loại từ, mỗi loại một lần)", "5 tokens (removing only 2 words, once each)"],
			["4 token", "4 tokens"],
			["7 token", "7 tokens"],
			["3 token", "3 tokens"]
		],
		"a": 1,
		"w": ["«rất» xuất hiện 2 lần và «và» 1 lần, tổng 3 token bị bỏ: 7 − 3 = 4 (đau, lâu, chờ, mệt). Phải bỏ mọi lần xuất hiện, không chỉ mỗi loại một lần.", "'rất' appears twice and 'và' once, so 3 tokens go: 7 − 3 = 4 (đau, lâu, chờ, mệt). Every occurrence is removed, not just one per word type."]
	}],
	"nlp-bow": [{
		"q": ["Điều gì bị mất khi dùng bag-of-words?", "What is lost when you use bag-of-words?"],
		"o": [
			["Số lần xuất hiện của từng từ", "The count of each word"],
			["Danh sách từ trong vốn từ", "The list of words in the vocabulary"],
			["Thứ tự từ, nên phủ định đứng xa từ và giọng mỉa mai không được giữ", "Word order, so negation placed far from a word and sarcasm are not preserved"],
			["Không mất gì vì ma trận vẫn có đủ mọi từ", "Nothing, since the matrix still has every word"]
		],
		"a": 2,
		"w": ["Bag-of-words giữ số đếm nhưng bỏ thứ tự, nên hai câu khác nghĩa có thể cho cùng một dòng đếm. Đó là lý do nó chỉ là bảng kê từ, không phải câu.", "Bag-of-words keeps counts but drops order, so two sentences with different meaning can give the same row of counts. That is why it is a tally of words, not a sentence."]
	}, {
		"q": ["Hai đánh giá: D1 = «chờ lâu, chờ mãi»; D2 = «sạch, thơm, chờ». Cột «chờ» (đếm số lần) có giá trị (D1, D2) là bao nhiêu?", "Two reviews: D1 = 'chờ lâu, chờ mãi'; D2 = 'sạch, thơm, chờ'. What are the values (D1, D2) of the 'chờ' column (counts)?"],
		"o": [
			["(1; 1) như khi chỉ ghi có/không", "(1, 1), as if recording only yes/no"],
			["(2; 0)", "(2, 0)"],
			["(1; 2)", "(1, 2)"],
			["(2; 1)", "(2, 1)"]
		],
		"a": 3,
		"w": ["D1 có «chờ» 2 lần và D2 có 1 lần, nên cột là (2; 1). (1; 1) sẽ là cách ghi có/không chứ không phải đếm.", "D1 has 'chờ' twice and D2 once, so the column is (2, 1). (1, 1) would be a yes/no encoding, not counts."]
	}],
	"nlp-tfidf": [{
		"q": ["Đổi logarit trong TF-IDF từ cơ số e sang cơ số 10 thì ảnh hưởng gì?", "What happens if you change the TF-IDF logarithm from base e to base 10?"],
		"o": [
			["Thang điểm đổi nhưng thứ hạng các từ không đổi, miễn là dùng cùng một cơ số ở mọi nơi", "The scale changes but the ranking of words does not, as long as one base is used throughout"],
			["Thứ hạng các từ đảo ngược", "The ranking of words is reversed"],
			["Từ có mặt ở mọi bài bắt đầu có điểm cao", "A word present in every document starts to get a high score"],
			["TF-IDF không tính được nữa", "TF-IDF can no longer be computed"]
		],
		"a": 0,
		"w": ["Hai logarit khác nhau chỉ lệch một hằng số nhân, nên thứ tự được giữ nguyên. Từ có df = N vẫn có idf = 0 ở mọi cơ số.", "Logarithms in two bases differ by a constant factor, so the order is preserved. A word with df = N still has idf = 0 in any base."]
	}, {
		"q": ["N = 100 bài. Từ «sạch» có df = 5 và xuất hiện 2 lần trong một bài. Dùng logarit tự nhiên, TF-IDF của «sạch» trong bài đó xấp xỉ bao nhiêu?", "N = 100 documents. The word 'sạch' has df = 5 and appears 2 times in one document. Using the natural log, about what is its TF-IDF in that document?"],
		"o": [
			["40 (quên logarit)", "40 (forgetting the logarithm)"],
			["Khoảng 6,0", "About 6.0"],
			["Khoảng 9,2 (dùng ln 100 thay vì ln 20)", "About 9.2 (using ln 100 instead of ln 20)"],
			["2,0 (chỉ lấy tf)", "2.0 (just tf)"]
		],
		"a": 1,
		"w": ["idf = ln(100 / 5) = ln 20 ≈ 3,0; tf-idf = 2 × 3,0 ≈ 6,0. Quên logarit cho 2 × 20 = 40 và quên df cho 2 × ln 100 ≈ 9,2.", "idf = ln(100 / 5) = ln 20 ≈ 3.0; tf-idf = 2 × 3.0 ≈ 6.0. Forgetting the log gives 2 × 20 = 40 and forgetting df gives 2 × ln 100 ≈ 9.2."]
	}],
	"nlp-stem": [{
		"q": ["Stemmer đưa «studies» thành «studi». Điều này cho thấy gì?", "A stemmer turns 'studies' into 'studi'. What does this show?"],
		"o": [
			["Stemmer luôn trả về dạng từ điển", "A stemmer always returns the dictionary form"],
			["Đây là kết quả của lemmatiser, không phải stemmer", "This is a lemmatiser result, not a stemmer result"],
			["Stemmer cắt đuôi theo quy tắc và có thể tạo ra chuỗi không phải từ thật", "A stemmer cuts suffixes by rules and may produce strings that are not real words"],
			["Từ điển bị lỗi", "The dictionary has an error"]
		],
		"a": 2,
		"w": ["Lemmatiser mới dùng từ điển và từ loại để cho «study». Stemmer không tra nghĩa nên chỉ cần cắt theo quy tắc.", "A lemmatiser uses a dictionary and part of speech to return 'study'. A stemmer does not look up meaning and just cuts by rule."]
	}, {
		"q": ["Bạn bỏ từ «không» như một từ hư, rồi stemming đánh giá «không sạch». Bạn mất gì?", "You drop 'không' as a stop word and then stem the review 'không sạch'. What do you lose?"],
		"o": [
			["Không mất gì vì stemmer khôi phục lại từ «không»", "Nothing, because the stemmer restores 'không'"],
			["Chỉ mất chính tả của từ «sạch»", "Only the spelling of 'sạch'"],
			["Chỉ mất thứ tự của các từ khác", "Only the order of the other words"],
			["Phủ định: đánh giá còn lại «sạch» trông như khen", "The negation: what is left, 'sạch', looks like praise"]
		],
		"a": 3,
		"w": ["Stemmer và lemmatiser không giữ được phủ định đã bị bỏ ở bước trước. Hậu quả là đánh giá chê bị đếm thành khen.", "Stemmers and lemmatisers cannot restore a negation removed in an earlier step. The result is a complaint counted as praise."]
	}],
	"nlp-edit": [{
		"q": ["Công cụ nào đo số lần thêm, xóa hoặc thay ký tự ít nhất để biến chuỗi này thành chuỗi kia?", "Which tool measures the fewest insertions, deletions or substitutions needed to turn one string into another?"],
		"o": [
			["Khoảng cách Levenshtein", "Levenshtein distance"],
			["PMI", "PMI"],
			["Hash ngữ âm", "A phonetic hash"],
			["Khoảng cách Hamming trên hai chuỗi bất kỳ", "Hamming distance on any two strings"]
		],
		"a": 0,
		"w": ["PMI đo hai từ đi cùng nhau nhiều hơn ngẫu nhiên, hash ngữ âm gom các từ nghe giống nhau. Hamming chỉ so ký tự cùng vị trí nên không xử lý thêm hay xóa.", "PMI measures how much more often two words co-occur than by chance, and a phonetic hash groups words that sound alike. Hamming compares only same-position characters so it cannot handle insertions or deletions."]
	}, {
		"q": ["Khoảng cách Levenshtein giữa «mesage» và «massage» là bao nhiêu?", "What is the Levenshtein distance between 'mesage' and 'massage'?"],
		"o": [
			["1", "1"],
			["2", "2"],
			["3", "3"],
			["4", "4"]
		],
		"a": 1,
		"w": ["Thay «e» đầu tiên bằng «a» (m-a-sage) và thêm một «s» (m-a-ss-age) là 2 lần sửa, và không có cách ngắn hơn vì độ dài lệch 1 và còn một ký tự khác. Một lần sửa không đủ.", "Substitute the 'e' with 'a' (m-a-sage) and insert one 's' (m-a-ss-age): 2 edits, and nothing shorter works because the lengths differ by 1 and one character also differs. A single edit is not enough."]
	}],
	"nlp-pmi": [{
		"q": ["Điểm PMI của một cặp chữ cao nghĩa là gì?", "What does a high PMI score for a word pair mean?"],
		"o": [
			["Hai chữ đi cùng nhau nhiều hơn mức sẽ có nếu chúng độc lập", "The two words occur together more than they would if they were independent"],
			["Cặp chữ đó xuất hiện rất nhiều lần trong file", "The pair appears very many times in the file"],
			["Mỗi chữ trong cặp đều là chữ rất phổ biến", "Each word in the pair is very common"],
			["Hai chữ có quan hệ nhân quả với nhau", "One word causes the other"]
		],
		"a": 0,
		"w": ["PMI so tần suất đi cùng với tần suất kỳ vọng khi độc lập. Chữ như «và» rất phổ biến nhưng đi với mọi thứ nên PMI gần 0, còn tần suất thô không làm PMI cao.", "PMI compares the joint frequency with the frequency expected under independence. A word like «and» is very common but goes with everything, so its PMI is near 0; raw frequency alone does not make PMI high."]
	}, {
		"q": ["Trong 1.000 câu review: chữ x có trong 100 câu, chữ y có trong 20 câu, cả hai cùng có trong 16 câu. PMI(x, y) bằng bao nhiêu (log cơ số 2)?", "In 1,000 reviews: word x appears in 100, word y in 20, and both together in 16. What is PMI(x, y) (log base 2)?"],
		"o": [
			["8", "8"],
			["0,8", "0.8"],
			["3", "3"],
			["5", "5"]
		],
		"a": 2,
		"w": ["P(x) = 0,1, P(y) = 0,02, P(x, y) = 0,016. Tỷ số = 0,016 / (0,1 × 0,02) = 8, và PMI = log₂ 8 = 3. Con số 8 là tỷ số chưa lấy log, còn 0,8 là 16/20, tức xác suất có điều kiện.", "P(x) = 0.1, P(y) = 0.02, P(x, y) = 0.016. The ratio is 0.016 / (0.1 × 0.02) = 8, so PMI = log₂ 8 = 3. The value 8 is the ratio before taking the log, and 0.8 is 16/20, a conditional probability."]
	}],
	"biz-map": [{
		"q": ["Câu nào là một giả thuyết kinh doanh đúng nghĩa (có thể sai và gắn với thước đo)?", "Which is a proper business hypothesis (it can be wrong and is tied to a metric)?"],
		"o": [
			["Trang đích đang yếu", "The landing page is weak"],
			["Huấn luyện một random forest trên mọi cột", "Train a random forest on all columns"],
			["Nếu đổi trang đích chiến dịch Facebook, tỷ lệ form tăng từ 2% lên ít nhất 2,5% trong 14 ngày", "If we change the Facebook campaign landing page, the form rate rises from 2% to at least 2.5% within 14 days"],
			["Nâng accuracy của mô hình lên 90%", "Raise the model accuracy to 90%"]
		],
		"a": 2,
		"w": ["Giả thuyết phải nêu quyết định, thước đo, ngưỡng và thời gian. «Trang yếu» là lời than, còn random forest hay accuracy 90% là công cụ và điểm số, không phải quyết định.", "A hypothesis names the decision, the metric, the threshold and the time window. «The page is weak» is a complaint, while a random forest or 90% accuracy are tools and scores, not a decision."]
	}, {
		"q": ["Giả thuyết: tỷ lệ form tăng từ 1,1% lên ít nhất 1,4% trong 21 ngày. Nếu có 5.000 lượt truy cập trong 21 ngày thì cần tối thiểu bao nhiêu form để đạt ngưỡng?", "Hypothesis: form rate rises from 1.1% to at least 1.4% in 21 days. With 5,000 visits in 21 days, how many forms are needed at minimum to hit the threshold?"],
		"o": [
			["55 form", "55 forms"],
			["70 form", "70 forms"],
			["15 form", "15 forms"],
			["140 form", "140 forms"]
		],
		"a": 1,
		"w": ["1,4% × 5.000 = 70. Con số 55 là mức hiện tại (1,1% × 5.000), còn 15 chỉ là phần chênh lệch cần thêm, không phải tổng số form.", "1.4% × 5,000 = 70. The value 55 is the current level (1.1% × 5,000), and 15 is only the extra gap, not the total number of forms."]
	}],
	"biz-metric": [{
		"q": ["AUC của mô hình tăng nhưng tỷ lệ form của kênh không nhích. Kết luận đúng là gì?", "The model AUC went up but the channel form rate did not move. What is the right conclusion?"],
		"o": [
			["Vẫn là chiến thắng, vì AUC cao là thước chính", "Still a win, because a higher AUC is the main metric"],
			["Hàng rào (guardrail) mới là thước chính, nên không cần xem tỷ lệ form", "The guardrail is the main metric, so the form rate does not matter"],
			["Chỉ cần chấm lại trên những dòng mô hình đã học", "Just re-score on the rows the model already learned from"],
			["Chưa phải chiến thắng, vì quyết định được đo bằng con số kinh doanh đã viết", "Not a win yet, because the decision is judged by the business number you wrote down"]
		],
		"a": 3,
		"w": ["Điểm mô hình chỉ có giá trị khi làm nhích con số của quyết định. Hàng rào là con số thứ hai không được tệ đi, không thay thước chính, và chấm trên dòng đã học chỉ khen mô hình quá mức.", "A model score only matters if it moves the number tied to the decision. A guardrail is a second number that must not get worse, it does not replace the main metric, and scoring on already-learned rows just over-praises the model."]
	}, {
		"q": ["Tỷ lệ form tăng từ 2,0% lên 2,6%. Giá một form tăng từ 80.000đ lên 90.000đ, hàng rào là không quá 15%. Kết luận nào đúng?", "Form rate rises from 2.0% to 2.6%. Cost per form rises from 80,000 VND to 90,000 VND, with a guardrail of at most 15%. Which conclusion is correct?"],
		"o": [
			["Form tăng 0,6% tương đối, giá tăng 12,5%, nằm trong hàng rào", "Forms up 0.6% relative, cost up 12.5%, within the guardrail"],
			["Form tăng 30% tương đối, giá tăng 12,5%, nằm trong hàng rào", "Forms up 30% relative, cost up 12.5%, within the guardrail"],
			["Form tăng 30% tương đối, giá tăng 125%, vượt hàng rào", "Forms up 30% relative, cost up 125%, over the guardrail"],
			["Form tăng 30% tương đối, nhưng giá tăng nên chắc chắn vượt hàng rào", "Forms up 30% relative, but cost rose so it certainly breaks the guardrail"]
		],
		"a": 1,
		"w": ["(2,6 − 2,0) / 2,0 = 30% tương đối (0,6 là điểm phần trăm, không phải %). Giá (90 − 80) / 80 = 12,5% nhỏ hơn 15%, nên đạt. Giá tăng không tự động vi phạm, chỉ vi phạm khi vượt ngưỡng.", "(2.6 − 2.0) / 2.0 = 30% relative (0.6 is percentage points, not a percent). Cost (90 − 80) / 80 = 12.5%, below 15%, so it passes. A cost increase is not automatically a breach, only exceeding the threshold is."]
	}],
	"git-commit": [{
		"q": ["Một commit trong Git là gì?", "What is a commit in Git?"],
		"o": [
			["Hành động gửi file lên máy của người khác", "The act of sending files to someone else's machine"],
			["Chỉ danh sách các dòng đã đổi, không gắn với ảnh trước", "Only a list of changed lines, not linked to the previous snapshot"],
			["Một ảnh chụp nội dung kèm một câu mô tả, nối vào lịch sử", "A snapshot of the content plus a message, linked into the history"],
			["Một bản sao lưu bị ghi đè sau mỗi lần lưu", "A backup copy that is overwritten every time you save"]
		],
		"a": 2,
		"w": ["Commit là ảnh chụp có mô tả và có liên kết với ảnh trước, tạo thành chuỗi lịch sử. Gửi cho người khác là việc của push, và các ảnh cũ không bị ghi đè.", "A commit is a described snapshot linked to the previous one, forming the history chain. Sending to others is what push does, and older snapshots are not overwritten."]
	}, {
		"q": ["Lịch sử đang có 7 commit. Bạn thêm một cột vào file form 1.000 dòng rồi commit một lần. Lịch sử bây giờ ra sao?", "The history has 7 commits. You add one column to a 1,000-row form file and commit once. What does the history look like now?"],
		"o": [
			["Có 8 commit, thêm đúng một ảnh mới và một câu mô tả", "8 commits: exactly one new snapshot and one message added"],
			["Vẫn 7 commit, cột mới được ghi đè vào ảnh cũ", "Still 7 commits, the new column is written into the old snapshot"],
			["Có 1.007 commit, mỗi dòng một commit", "1,007 commits, one per row"],
			["Có 14 commit, vì mỗi ảnh lưu thêm một bản đầy đủ", "14 commits, because every snapshot stores a full extra copy"]
		],
		"a": 0,
		"w": ["Một lần commit tạo đúng một ảnh mới, nên 7 + 1 = 8. Commit không ghi đè ảnh cũ và không tách theo dòng.", "One commit creates exactly one new snapshot, so 7 + 1 = 8. A commit does not overwrite old snapshots and is not split per row."]
	}],
	"git-branch": [{
		"q": ["Một nhánh (branch) trong Git thực chất là gì?", "What is a branch in Git, really?"],
		"o": [
			["Một con trỏ tới một ảnh (commit)", "A pointer to a snapshot (commit)"],
			["Một bản sao của cả thư mục dự án", "A copy of the whole project folder"],
			["Một máy chủ riêng chạy song song", "A separate server running in parallel"],
			["Một file sao lưu phải được nhập tay", "A backup file that must be merged by hand"]
		],
		"a": 0,
		"w": ["Nhánh chỉ là con trỏ nên rẻ và nhanh, không sao chép dữ liệu. Vì vậy thử trên nhánh riêng không làm nhánh chính đổi.", "A branch is just a pointer, so it is cheap and fast and copies no data. That is why trying things on your own branch leaves the main branch unchanged."]
	}, {
		"q": ["Nhánh chính có 10 ảnh. Nhánh thử rẽ ra từ ảnh 10 và thêm 3 ảnh, nhánh chính không đổi. Sau khi nhập (merge) thì nhánh chính đứng ở ảnh thứ mấy?", "Main has 10 snapshots. A test branch splits from snapshot 10 and adds 3, while main stays unchanged. After merging, which snapshot does main point to?"],
		"o": [
			["Ảnh thứ 10, vì nhánh chính không đổi", "Snapshot 10, because main did not change"],
			["Ảnh thứ 3", "Snapshot 3"],
			["Ảnh thứ 14, vì nhập luôn thêm một ảnh", "Snapshot 14, because merging always adds one more snapshot"],
			["Ảnh thứ 13", "Snapshot 13"]
		],
		"a": 3,
		"w": ["Chưa ai rẽ riêng ở nhánh chính nên chỉ cần dời con trỏ tới ảnh 13 (10 + 3). Chỉ khi cả hai nhánh cùng có ảnh mới thì mới tạo thêm ảnh nhập có hai ảnh cha.", "Nobody diverged on main, so Git just moves the pointer to snapshot 13 (10 + 3). An extra merge snapshot with two parents is only created when both branches have new snapshots."]
	}],
	"ens-vote": [{
		"q": ["Bốn trong năm cây dự đoán khách ở lại, một cây dự đoán rời đi. Điều nào đúng?", "Four of five trees predict the customer stays, one predicts leaving. Which statement is correct?"],
		"o": [
			["Nhãn theo số đông là ở lại, nhưng điều đó không có nghĩa xác suất đúng là 80%", "The majority label is stay, but that does not mean an 80% chance of being right"],
			["Khách có 80% khả năng ở lại", "The customer has an 80% chance of staying"],
			["Bốn cây đó chắc chắn đúng", "Those four trees are certainly right"],
			["Đếm phiếu luôn cho cùng kết quả với lấy trung bình xác suất", "Counting votes always gives the same result as averaging probabilities"]
		],
		"a": 0,
		"w": ["4/5 là số đông phiếu, không phải một xác suất đã hiệu chỉnh. Nếu các cây cùng mắc một lỗi thì số đông vẫn sai, và đếm phiếu có thể khác trung bình xác suất khi áp ngưỡng.", "4/5 is a count of votes, not a calibrated probability. If the trees share the same mistake the majority is still wrong, and counting votes can differ from averaging probabilities once a threshold is applied."]
	}, {
		"q": ["Năm cây cho xác suất rời đi: 0,8, 0,1, 0,1, 0,1, 0,1. Ngưỡng là 0,2. So sánh lấy trung bình xác suất và đếm phiếu:", "Five trees give churn probabilities 0.8, 0.1, 0.1, 0.1, 0.1. The threshold is 0.2. Compare averaging probabilities with counting votes:"],
		"o": [
			["Trung bình 0,24 nên rời đi; đếm phiếu cũng ra rời đi", "The average is 0.24 so leave; vote counting also gives leave"],
			["Trung bình 0,12 nên ở lại; đếm phiếu ra rời đi", "The average is 0.12 so stay; vote counting gives leave"],
			["Cả hai cách đều ra ở lại vì chỉ có 1 cây cao", "Both methods give stay because only one tree is high"],
			["Trung bình 0,24 nên rời đi; đếm phiếu chỉ 1/5 chọn rời nên ở lại", "The average is 0.24 so leave; only 1 of 5 votes leave so stay"]
		],
		"a": 3,
		"w": ["(0,8 + 0,1 × 4) / 5 = 1,2 / 5 = 0,24 lớn hơn 0,2, nên trung bình cho rời đi. Chỉ cây đầu vượt 0,2, tức 1/5 phiếu, nên đếm phiếu cho ở lại. Hai cách có thể khác nhau.", "(0.8 + 0.1 × 4) / 5 = 1.2 / 5 = 0.24, above 0.2, so the average says leave. Only the first tree exceeds 0.2, i.e. 1 of 5 votes, so counting votes says stay. The two methods can disagree."]
	}],
	"ens-bag": [{
		"q": ["Bootstrap trong bagging hoạt động thế nào?", "How does the bootstrap in bagging work?"],
		"o": [
			["Rút n dòng có hoàn lại từ n dòng, nên có dòng vào nhiều lần và có dòng không vào", "Draw n rows with replacement from n rows, so some rows appear several times and some not at all"],
			["Rút n dòng không hoàn lại, mỗi dòng đúng một lần", "Draw n rows without replacement, each row exactly once"],
			["Chọn một nửa số dòng ngẫu nhiên cho mỗi cây", "Pick a random half of the rows for each tree"],
			["Nhân bản dòng hiếm trước khi chia tập để cân bằng lớp", "Duplicate rare rows before splitting to balance the classes"]
		],
		"a": 0,
		"w": ["Rút có hoàn lại giữ nguyên cỡ mẫu nhưng tạo ra các túi khác nhau. Nhân bản dòng hiếm trước khi chia tập là một việc khác và gây rò rỉ dữ liệu.", "Drawing with replacement keeps the sample size but yields different bags. Duplicating rare rows before splitting is a different thing and causes data leakage."]
	}, {
		"q": ["Có 500 khách, một cây bootstrap rút 500 lần có hoàn lại. Xấp xỉ bao nhiêu khách không vào túi của cây đó?", "There are 500 customers and one tree bootstraps 500 draws with replacement. Roughly how many customers are left out of that tree's bag?"],
		"o": [
			["Khoảng 316 khách", "About 316 customers"],
			["Khoảng 184 khách", "About 184 customers"],
			["Khoảng 250 khách", "About 250 customers"],
			["Không ai bị bỏ ra", "None are left out"]
		],
		"a": 1,
		"w": ["(1 − 1/500)^500 ≈ 0,368, nên 500 × 0,368 ≈ 184 khách bị bỏ ra. Con số 316 là số khách khác nhau có trong túi (khoảng 63,2%).", "(1 − 1/500)^500 ≈ 0.368, so 500 × 0.368 ≈ 184 customers are left out. The 316 figure is the number of distinct customers inside the bag (about 63.2%)."]
	}],
	"rf-col": [{
		"q": ["Vì sao rừng ngẫu nhiên chỉ cho mỗi nhát cắt nhìn một nhóm cột?", "Why does a random forest let each split see only a subset of columns?"],
		"o": [
			["Để cột bị giấu bị loại khỏi mô hình vĩnh viễn", "To permanently remove the hidden columns from the model"],
			["Để các cây bớt giống nhau, vì cột mạnh nhất không thắng ở mọi cây", "So the trees are less alike, because the strongest column does not win in every tree"],
			["Chỉ để chạy nhanh hơn, không ảnh hưởng đến kết quả", "Only to run faster, with no effect on the result"],
			["Vì cột bị giấu chắc chắn không quan trọng", "Because a hidden column is certainly unimportant"]
		],
		"a": 1,
		"w": ["Nếu cây nào cũng thấy mọi cột thì cột mạnh nhất luôn thắng và các cây cắt giống nhau. Cột bị giấu ở một nhát vẫn được xét ở nhát khác và vẫn có thể quan trọng.", "If every tree sees every column the strongest column always wins and the trees split alike. A column hidden at one split is still considered at others and can still be important."]
	}, {
		"q": ["Bài toán phân loại có 25 cột. Theo quy ước thường dùng, mỗi nhát cắt được xem khoảng bao nhiêu cột?", "A classification problem has 25 columns. By the usual convention, about how many columns may each split look at?"],
		"o": [
			["25 cột", "25 columns"],
			["12 cột (một nửa)", "12 columns (half)"],
			["5 cột (√25)", "5 columns (√25)"],
			["2 cột", "2 columns"]
		],
		"a": 2,
		"w": ["Quy ước cho phân loại là căn bậc hai của số cột: √25 = 5. Xem cả 25 cột là bagging thường, làm các cây giống nhau hơn.", "The convention for classification is the square root of the number of columns: √25 = 5. Looking at all 25 is plain bagging, which makes the trees more alike."]
	}],
	"ens-oob": [{
		"q": ["Điểm out-of-bag (OOB) cho biết điều gì?", "What does the out-of-bag (OOB) score tell you?"],
		"o": [
			["Điểm dự báo cho tuần sau, có thể thay kiểm tra theo thời gian", "The forecast score for next week, able to replace a time-based check"],
			["Một ước lượng trên tập học bằng các dòng mà từng cây chưa thấy, thường lạc quan hơn kiểm tra theo thời gian", "An estimate within the training set using rows each tree has not seen, usually more optimistic than a time-based check"],
			["Đúng bằng accuracy trên các dòng cây đã học", "Exactly the accuracy on the rows the tree learned from"],
			["Luôn bi quan hơn điểm trên dữ liệu mới", "Always more pessimistic than the score on new data"]
		],
		"a": 1,
		"w": ["Dòng OOB vẫn nằm cùng giai đoạn với tập học nên không phải tuần sau. Nếu một khách bị nhân đôi trước khi chia, bản sao nằm cả trong túi lẫn OOB và điểm bị rò rỉ.", "OOB rows still come from the same period as the training set, so they are not next week. If a customer is duplicated before splitting, the copy lands in both the bag and OOB and the score leaks."]
	}, {
		"q": ["Tập học có 2.000 khách. Dùng (1 − 1/n)ⁿ ≈ 0,37, mỗi cây có khoảng bao nhiêu dòng OOB?", "The training set has 2,000 customers. Using (1 − 1/n)ⁿ ≈ 0.37, about how many OOB rows does each tree have?"],
		"o": [
			["Khoảng 740 dòng", "About 740 rows"],
			["Khoảng 1.260 dòng", "About 1,260 rows"],
			["Khoảng 1.000 dòng", "About 1,000 rows"],
			["Khoảng 370 dòng", "About 370 rows"]
		],
		"a": 0,
		"w": ["2.000 × 0,37 = 740 dòng OOB. Con số 1.260 là số dòng khác nhau có trong túi (63%), còn 370 là 37% của 1.000 chứ không phải của 2.000.", "2,000 × 0.37 = 740 OOB rows. The 1,260 figure is the number of distinct rows inside the bag (63%), and 370 is 37% of 1,000, not of 2,000."]
	}],
	"imb-trap": [{
		"q": ["Có 92 khách ở lại và 8 khách rời đi. Mô hình gọi mọi người là «ở lại». Điều nào đúng?", "There are 92 customers who stay and 8 who leave. The model labels everyone «stay». Which is correct?"],
		"o": [
			["Accuracy 92% và recall của lớp rời đi cũng 92%", "Accuracy is 92% and recall for the leave class is also 92%"],
			["Accuracy 50% vì mô hình chỉ đoán một lớp", "Accuracy is 50% because the model predicts only one class"],
			["Accuracy 92% nhưng recall của lớp rời đi là 0%", "Accuracy is 92% but recall for the leave class is 0%"],
			["Accuracy 8% vì bỏ sót 8 khách", "Accuracy is 8% because it missed 8 customers"]
		],
		"a": 2,
		"w": ["Đúng 92 trên 100 nên accuracy 92%, nhưng không bắt được khách rời nào nên recall 0/8 = 0%. Accuracy không phản ánh việc giữ được khách.", "92 out of 100 are right so accuracy is 92%, but no leaving customer is caught so recall is 0/8 = 0%. Accuracy says nothing about retaining customers."]
	}, {
		"q": ["1.000 khách, 50 người thật sự rời đi. Mô hình báo 30 người rời, trong đó 20 người đúng. Recall của lớp rời đi là bao nhiêu?", "1,000 customers, 50 really leave. The model flags 30 as leaving, of which 20 are correct. What is the recall of the leave class?"],
		"o": [
			["40%", "40%"],
			["67%", "67%"],
			["96%", "96%"],
			["60%", "60%"]
		],
		"a": 0,
		"w": ["Recall = 20 / 50 = 40%. Con số 67% (20/30) là precision. Con số 96% là accuracy: (20 + 940) / 1.000, một thước đẹp nhưng che mất việc bỏ sót 30 người.", "Recall = 20 / 50 = 40%. The 67% figure (20/30) is precision. The 96% figure is accuracy: (20 + 940) / 1,000, a pretty number that hides the 30 missed customers."]
	}],
	"imb-fix": [{
		"q": ["Vì sao nhân bản dòng hiếm trước khi chia tập học/chấm là sai?", "Why is duplicating rare rows before splitting into train and test wrong?"],
		"o": [
			["Vì nó làm mất thông tin của lớp đông", "Because it throws away information from the majority class"],
			["Vì nó đổi hàm lỗi mà không thêm khách", "Because it changes the loss function without adding customers"],
			["Bản sao của cùng một người nằm ở cả hai phía, nên điểm đẹp giả (rò rỉ dữ liệu)", "Copies of the same person land on both sides, so the score looks falsely good (data leakage)"],
			["Vì nó khiến mô hình chạy quá chậm", "Because it makes the model run too slowly"]
		],
		"a": 2,
		"w": ["Hai dòng của cùng một người không phải hai bằng chứng; nếu một bản vào tập học và một bản vào tập chấm thì mô hình được chấm bằng chính người nó đã thấy. Mất thông tin lớp đông là của undersampling, còn đổi hàm lỗi là của class weight.", "Two rows of the same person are not two pieces of evidence; if one copy is in train and another in test the model is scored on someone it has already seen. Losing majority information belongs to undersampling, and changing the loss belongs to class weight."]
	}, {
		"q": ["Có 950 khách ở lại và 50 khách rời đi. Theo cách tính trong thẻ (số lớp đông / số lớp hiếm), trọng số cho lớp rời đi là bao nhiêu?", "There are 950 stayers and 50 leavers. Using the card's method (majority count / minority count), what weight goes on the leave class?"],
		"o": [
			["20", "20"],
			["900", "900"],
			["0,05", "0.05"],
			["19", "19"]
		],
		"a": 3,
		"w": ["950 / 50 = 19, nên một lần bỏ sót khách rời đắt bằng 19 lần gọi nhầm. Con số 20 là 1.000 / 50 (tổng chia lớp hiếm), còn 900 là hiệu hai lớp.", "950 / 50 = 19, so missing a leaver costs as much as 19 false alarms. The 20 figure is 1,000 / 50 (total over minority), and 900 is the difference between the two classes."]
	}],
	"imb-smote": [{
		"q": ["SMOTE thực sự tạo ra gì, và nên làm vào lúc nào?", "What does SMOTE actually create, and when should it be applied?"],
		"o": [
			["Một điểm nội suy giữa các dòng hiếm, chỉ làm trên tập học sau khi chia", "An interpolated point between rare rows, applied only to the training set after splitting"],
			["Một khách hàng thật mới, làm trên cả file rồi mới chia", "A new real customer, applied to the whole file before splitting"],
			["Một nhãn đúng thay cho nhãn bẩn", "A correct label replacing a dirty label"],
			["Một điểm hợp lý cho cả cột chữ vì đoạn thẳng luôn có nghĩa", "A valid point even for text columns, since a line segment always makes sense"]
		],
		"a": 0,
		"w": ["SMOTE chỉ nội suy, không tạo khách mới và không sửa nhãn sai. Làm trên cả file trước khi chia khiến điểm nội suy lọt sang tập chấm, là rò rỉ.", "SMOTE only interpolates; it creates no new customer and fixes no wrong label. Applying it to the whole file before splitting lets interpolated points leak into the test set."]
	}, {
		"q": ["Hai khách rời đi chi 2 triệu và 6 triệu. SMOTE dùng hệ số ngẫu nhiên 0,25 theo công thức a + hệ số × (b − a). Điểm mới ở mức chi nào?", "Two churned customers spent 2 million and 6 million. SMOTE uses a random factor of 0.25 in a + factor × (b − a). What spend level is the new point?"],
		"o": [
			["4 triệu", "4 million"],
			["1,5 triệu", "1.5 million"],
			["8 triệu", "8 million"],
			["3 triệu", "3 million"]
		],
		"a": 3,
		"w": ["2 + 0,25 × (6 − 2) = 3 triệu. Điểm 4 triệu chỉ đúng khi hệ số là 0,5, còn 1,5 là 0,25 × 6, tức nhân nhầm vào giá trị thay vì vào khoảng cách.", "2 + 0.25 × (6 − 2) = 3 million. The 4 million point would need a factor of 0.5, and 1.5 is 0.25 × 6, i.e. multiplying the value instead of the gap."]
	}],
	"bv-bias": [{
		"q": ["Cặp RMSE (tập học / tuần mới) nào cho thấy chủ yếu là lệch (bias)?", "Which pair of RMSE values (training / new weeks) shows mostly bias?"],
		"o": [
			["1 / 9", "1 / 9"],
			["1 / 1,2", "1 / 1.2"],
			["0 / 15", "0 / 15"],
			["8 / 8,5", "8 / 8.5"]
		],
		"a": 3,
		"w": ["Lệch cao là khi sai số cao ở cả tập học lẫn tập mới, vì họ mô hình quá thẳng. Các cặp 1 / 9 và 0 / 15 là nhảy (variance) khi khớp nhiễu, còn 1 / 1,2 là khớp tốt.", "High bias means error is high on both training and new data because the model family is too rigid. The pairs 1 / 9 and 0 / 15 are variance from fitting noise, while 1 / 1.2 is a good fit."]
	}, {
		"q": ["Sai số kỳ vọng = lệch² + phương sai + nhiễu. Nếu lệch² = 9, phương sai = 4, nhiễu = 1 thì sai số bình phương kỳ vọng là bao nhiêu?", "Expected error = bias² + variance + noise. If bias² = 9, variance = 4 and noise = 1, what is the expected squared error?"],
		"o": [
			["13", "13"],
			["6", "6"],
			["36", "36"],
			["14", "14"]
		],
		"a": 3,
		"w": ["9 + 4 + 1 = 14. Con số 13 bỏ quên phần nhiễu không học được; 36 là phép nhân sai, còn 6 là cộng 3 + 2 + 1 (lấy căn trước khi cộng).", "9 + 4 + 1 = 14. The 13 forgets the irreducible noise; 36 wrongly multiplies, and 6 adds 3 + 2 + 1 (taking square roots before summing)."]
	}],
	"reg-ridge": [{
		"q": ["Ridge khác gì với việc loại cột?", "How does Ridge differ from dropping columns?"],
		"o": [
			["Ridge đưa nhiều hệ số về đúng 0 như Lasso", "Ridge sets many coefficients to exactly 0 like Lasso"],
			["Ridge tăng λ thì lệch giảm và dao động tăng", "Raising λ in Ridge lowers bias and raises variance"],
			["Ridge co hệ số về gần 0 nhưng hiếm khi về đúng 0, nên cột vẫn nằm trong mô hình", "Ridge shrinks coefficients toward 0 but rarely to exactly 0, so the column stays in the model"],
			["Sau khi co, hệ số vẫn đọc được như hồi quy thường", "After shrinking, coefficients still read like ordinary regression"]
		],
		"a": 2,
		"w": ["Phạt bình phương phạt nặng hệ số lớn nên Ridge dàn đều thay vì xóa. λ lớn làm lệch tăng và dao động giảm, và hệ số đã co thì không còn là «thêm một đơn vị được bao nhiêu».", "The squared penalty punishes large coefficients heavily so Ridge spreads weight out instead of deleting. A larger λ raises bias and lowers variance, and a shrunken coefficient no longer means «per extra unit»."]
	}, {
		"q": ["Với λ = 2 và hệ số β = (3, −4), phần phạt Ridge λ‖β‖₂² bằng bao nhiêu?", "With λ = 2 and coefficients β = (3, −4), what is the Ridge penalty λ‖β‖₂²?"],
		"o": [
			["14", "14"],
			["−2", "−2"],
			["50", "50"],
			["25", "25"]
		],
		"a": 2,
		"w": ["‖β‖₂² = 9 + 16 = 25, nhân λ = 2 được 50. Con số 14 là 2 × (3 + 4), tức phạt trị tuyệt đối kiểu Lasso, còn 25 quên nhân λ.", "‖β‖₂² = 9 + 16 = 25, times λ = 2 gives 50. The 14 is 2 × (3 + 4), a Lasso-style absolute penalty, and 25 forgets to multiply by λ."]
	}],
	"reg-lasso": [{
		"q": ["Lasso đưa hệ số của cột «lượt mở email» về đúng 0. Kết luận nào hợp lý?", "Lasso set the coefficient of «email opens» to exactly 0. Which conclusion is reasonable?"],
		"o": [
			["Cột đó chắc chắn vô dụng và nên bỏ khỏi mọi phân tích", "The column is certainly useless and should be dropped from every analysis"],
			["Với λ này và các cột còn lại, cột đó thêm rất ít; chưa chứng minh nó vô dụng ngoài đời", "With this λ and the other columns, it adds very little; that does not prove it is useless in real life"],
			["Hệ số của các cột còn lại bằng hệ số hồi quy thường", "The remaining coefficients equal ordinary regression coefficients"],
			["Lasso luôn giữ cột có ý nghĩa nhất, nên kết quả không phụ thuộc đơn vị", "Lasso always keeps the most meaningful column, so the result does not depend on units"]
		],
		"a": 1,
		"w": ["Phạt trị tuyệt đối có góc nhọn ở 0 nên nghiệm có thể rơi đúng vào 0. Kết quả phụ thuộc λ, đơn vị và các cột khác (hai cột gần giống nhau có thể chỉ giữ một), và hệ số còn lại vẫn bị co.", "The absolute-value penalty has a corner at 0 so the solution can land exactly on 0. The outcome depends on λ, units and the other columns (of two near-duplicates only one may stay), and the remaining coefficients are still shrunk."]
	}, {
		"q": ["Với λ = 0,5 và β = (3, −2, 0, 1), phần phạt Lasso λ‖β‖₁ bằng bao nhiêu?", "With λ = 0.5 and β = (3, −2, 0, 1), what is the Lasso penalty λ‖β‖₁?"],
		"o": [
			["7", "7"],
			["3", "3"],
			["6", "6"],
			["1,5", "1.5"]
		],
		"a": 1,
		"w": ["‖β‖₁ = 3 + 2 + 0 + 1 = 6, nhân 0,5 được 3. Con số 7 là 0,5 × (9 + 4 + 0 + 1), tức phạt bình phương kiểu Ridge, còn 6 quên nhân λ.", "‖β‖₁ = 3 + 2 + 0 + 1 = 6, times 0.5 gives 3. The 7 is 0.5 × (9 + 4 + 0 + 1), a Ridge-style squared penalty, and 6 forgets to multiply by λ."]
	}],
	"met-reg": [{
		"q": ["Quan hệ nào giữa RMSE và MAE trên cùng một tập dự báo là đúng?", "Which relation between RMSE and MAE on the same set of forecasts is correct?"],
		"o": [
			["RMSE luôn nhỏ hơn MAE vì có căn bậc hai", "RMSE is always smaller than MAE because of the square root"],
			["RMSE và MAE luôn bằng nhau khi dữ liệu cùng đơn vị", "RMSE and MAE are always equal when the data share a unit"],
			["R² không bao giờ âm", "R² is never negative"],
			["RMSE luôn lớn hơn hoặc bằng MAE, và chênh lệch lớn khi có vài tuần lệch rất nhiều", "RMSE is always at least MAE, and the gap is large when a few weeks are far off"]
		],
		"a": 3,
		"w": ["Bình phương rồi lấy căn phạt các sai số lớn nặng hơn, nên RMSE ≥ MAE và bằng nhau chỉ khi mọi sai số như nhau. R² có thể âm nếu đường tệ hơn đường nằm ngang tại trung bình.", "Squaring then rooting punishes large errors more, so RMSE ≥ MAE with equality only when all errors are equal. R² can be negative if the line is worse than a flat line at the mean."]
	}, {
		"q": ["Hai tuần lệch 1 form và 7 form. RMSE bằng bao nhiêu?", "Two weeks are off by 1 form and 7 forms. What is the RMSE?"],
		"o": [
			["4 form", "4 forms"],
			["5 form", "5 forms"],
			["8 form", "8 forms"],
			["25 form", "25 forms"]
		],
		"a": 1,
		"w": ["RMSE = √((1 + 49) / 2) = √25 = 5. Con số 4 là MAE ((1 + 7) / 2), 8 là tổng độ lệch, còn 25 là sai số bình phương trung bình chưa lấy căn.", "RMSE = √((1 + 49) / 2) = √25 = 5. The 4 is the MAE ((1 + 7) / 2), 8 is the plain sum, and 25 is the mean squared error before the square root."]
	}],
	"fe-num": [{
		"q": ["Vì sao dùng log(1 + x) thay cho log(x) với cột chi tiêu?", "Why use log(1 + x) instead of log(x) for a spend column?"],
		"o": [
			["Vì log(x) không kéo đuôi lại được", "Because log(x) cannot pull in a tail"],
			["Vì sau khi log, hệ số vẫn có nghĩa là «thêm một triệu được bao nhiêu form»", "Because after the log, the coefficient still means «per extra million, how many forms»"],
			["Vì tuần chi 0 vẫn tính được, và nó vẫn kéo đuôi dài lại", "Because a week with 0 spend still works, and it still pulls in the long tail"],
			["Vì log(0) bằng 0 nên không cần chỉnh gì", "Because log(0) equals 0 so nothing needs adjusting"]
		],
		"a": 2,
		"w": ["log(x) chỉ xác định khi x > 0, còn log(0) không tồn tại. Sau khi log, hệ số đã đổi nghĩa và không còn là «một triệu thêm».", "log(x) is only defined for x > 0 and log(0) does not exist. After the log, the coefficient has a new meaning and is no longer «per extra million»."]
	}, {
		"q": ["Chi 9 triệu và 99 triệu. Giá trị log₁₀(1 + x) của hai tuần đó là bao nhiêu?", "Spend is 9 million and 99 million. What are the log₁₀(1 + x) values of those two weeks?"],
		"o": [
			["0,95 và 2,0", "0.95 and 2.0"],
			["2,3 và 4,6", "2.3 and 4.6"],
			["1 và 2", "1 and 2"],
			["9 và 99", "9 and 99"]
		],
		"a": 2,
		"w": ["log₁₀(10) = 1 và log₁₀(100) = 2, nên tỷ lệ 11 lần thu còn 2 lần. Cặp 0,95 và 2,0 là log₁₀(x) không cộng 1, còn 2,3 và 4,6 là log tự nhiên.", "log₁₀(10) = 1 and log₁₀(100) = 2, so an 11-fold ratio shrinks to 2-fold. The pair 0.95 and 2.0 is log₁₀(x) without the +1, and 2.3 and 4.6 are natural logs."]
	}],
	"fe-cat": [{
		"q": ["Mô hình hồi quy có hệ số chặn và biến kênh GDN, Facebook, TikTok. Vì sao bỏ một cột kênh?", "A regression has an intercept and a channel variable GDN, Facebook, TikTok. Why drop one channel column?"],
		"o": [
			["Vì mô hình chỉ chấp nhận tối đa hai biến giả", "Because the model accepts at most two dummy variables"],
			["Vì kênh bị bỏ không ảnh hưởng đến số form", "Because the dropped channel does not affect the number of forms"],
			["Ba cột 0/1 cộng lại luôn bằng 1, trùng hệ số chặn, nên hệ số không duy nhất", "The three 0/1 columns always sum to 1, duplicating the intercept, so coefficients are not unique"],
			["Vì cây quyết định cũng bắt buộc phải bỏ một cột", "Because decision trees must also drop one column"]
		],
		"a": 2,
		"w": ["Giữ cả k cột cùng hệ số chặn làm X không đủ hạng. Kênh bị bỏ làm mốc nên vẫn có tác động, được gói trong hệ số chặn; cây cắt theo tên kênh nên không gặp bẫy này.", "Keeping all k columns with an intercept makes X rank-deficient. The dropped channel is the baseline and still has an effect, absorbed in the intercept; trees split on channel names so they avoid this trap."]
	}, {
		"q": ["Mốc là GDN với hệ số chặn 20 form. Hệ số Facebook là +3 và TikTok là −5. Dự báo form cho TikTok là bao nhiêu?", "The baseline is GDN with an intercept of 20 forms. The Facebook coefficient is +3 and TikTok is −5. What is the predicted number of forms for TikTok?"],
		"o": [
			["−5 form", "−5 forms"],
			["20 form", "20 forms"],
			["25 form", "25 forms"],
			["15 form", "15 forms"]
		],
		"a": 3,
		"w": ["20 + (−5) = 15. Hệ số TikTok là chênh lệch so với mốc GDN, không phải mức form của TikTok (−5 không thể là số form). Con số 25 là cộng nhầm dấu.", "20 + (−5) = 15. The TikTok coefficient is the difference from the GDN baseline, not TikTok's own form level (−5 cannot be a form count). The 25 comes from flipping the sign."]
	}],
	"fe-time": [{
		"q": ["Đưa cột ngày nguyên bản vào hồi quy tuyến tính thì đường đọc nó thành gì?", "If you feed a raw date column into a linear regression, what does the line read it as?"],
		"o": [
			["Một xu hướng đơn điệu: càng muộn thì form càng tăng (hoặc giảm) đều", "A monotonic trend: the later the date, steadily more (or fewer) forms"],
			["Một chu kỳ tuần lặp lại tự động", "A weekly cycle that repeats automatically"],
			["Một cột phân loại cho từng thứ trong tuần", "A categorical column for each weekday"],
			["Một hiệu ứng tháng lễ", "A holiday month effect"]
		],
		"a": 0,
		"w": ["Một cột ngày chỉ có độ dốc nên chỉ nói «muộn hơn». Muốn có chu kỳ tuần, tháng lễ thì phải tách thứ, tháng ra thành cột riêng.", "A date column only carries a slope, so it just says «later». To get a weekly cycle or a holiday month you must split out weekday and month as separate columns."]
	}, {
		"q": ["Mã hóa thứ trong tuần thành 1 đến 7 (thứ hai = 1, chủ nhật = 7) và dùng một độ dốc. Mô hình coi chủ nhật và thứ hai cách nhau bao nhiêu bậc?", "Weekday is coded 1 to 7 (Monday = 1, Sunday = 7) with a single slope. How many steps apart does the model treat Sunday and Monday?"],
		"o": [
			["1 bậc", "1 step"],
			["6 bậc", "6 steps"],
			["0 bậc", "0 steps"],
			["7 bậc", "7 steps"]
		],
		"a": 1,
		"w": ["Hiệu 7 − 1 = 6, trong khi thứ hai và thứ ba chỉ cách 1 bậc. Thực tế chủ nhật sát thứ hai, nên cần cột 0/1 hoặc cặp sin, cos để giữ vòng lặp.", "7 − 1 = 6, while Monday and Tuesday are only 1 step apart. In reality Sunday sits right next to Monday, so use 0/1 columns or a sin, cos pair to keep the cycle."]
	}],
	"cv-fold": [{
		"q": ["Trong k-fold cross-validation, điều nào đúng?", "In k-fold cross-validation, which statement is correct?"],
		"o": [
			["Mỗi phần làm tập chấm đúng một lần, các lượt còn lại học trên k − 1 phần", "Each fold is the validation set exactly once, and the other rounds train on k − 1 folds"],
			["Học trên một phần và chấm trên k − 1 phần còn lại", "Train on one fold and validate on the remaining k − 1"],
			["Trung bình các lượt luôn không lạc quan dù đã dùng nó để chọn nút", "The average is never optimistic even after using it to pick settings"],
			["Có thể xáo các tuần vào fold khi dự báo chuỗi thời gian", "You can shuffle weeks into folds when forecasting time series"]
		],
		"a": 0,
		"w": ["Mỗi phần bị giấu đúng một lần. Nếu chọn độ sâu hay λ bằng chính điểm này thì nó lạc quan, và xáo tuần vào fold cho mô hình nhìn thấy tương lai.", "Each fold is held out exactly once. If you pick depth or λ using this very score it becomes optimistic, and shuffling weeks into folds lets the model see the future."]
	}, {
		"q": ["RMSE của 5 lượt cross-validation là 3, 4, 5, 6 và 12. Điểm cross-validation (trung bình) là bao nhiêu?", "The RMSE of 5 cross-validation rounds is 3, 4, 5, 6 and 12. What is the cross-validation score (the mean)?"],
		"o": [
			["5", "5"],
			["12", "12"],
			["30", "30"],
			["6", "6"]
		],
		"a": 3,
		"w": ["(3 + 4 + 5 + 6 + 12) / 5 = 30 / 5 = 6. Con số 5 là trung vị, 12 là lượt tệ nhất, và 30 là tổng chưa chia cho số lượt.", "(3 + 4 + 5 + 6 + 12) / 5 = 30 / 5 = 6. The 5 is the median, 12 is the worst round, and 30 is the sum before dividing by the number of rounds."]
	}],
	"cv-grid": [{
		"q": ["Grid search thử độ sâu 2, 4, 8. Phát biểu nào đúng?", "A grid search tries depths 2, 4, 8. Which statement is correct?"],
		"o": [
			["Độ sâu 3 chắc chắn tệ hơn mọi ô trong lưới", "Depth 3 is certainly worse than every cell in the grid"],
			["Độ sâu 3 chưa được xét, nghĩa là chưa thử chứ không phải đã bị bác", "Depth 3 has not been tried, meaning untested rather than rejected"],
			["Nên chấm mỗi ô bằng điểm trên tập học", "Each cell should be scored on the training set"],
			["Random search có thể tìm ra giá trị ngoài khoảng bạn đã đặt", "Random search can find values outside the range you set"]
		],
		"a": 1,
		"w": ["Lưới chỉ thử các ô bạn viết ra, và random search cũng không ra khỏi khoảng đặt. Mỗi ô nên chấm bằng điểm cross-validation, không phải điểm tập học.", "The grid only tries cells you wrote down, and random search also stays inside the range you set. Each cell should be scored with cross-validation, not the training score."]
	}, {
		"q": ["Lưới có độ sâu 2, 4, 8, 16 và số cột mỗi nhát cắt 2, 4, 6. Mỗi cặp chấm bằng cross-validation 5 phần. Tổng số lần học là bao nhiêu?", "The grid has depths 2, 4, 8, 16 and columns per split 2, 4, 6. Each pair is scored with 5-fold cross-validation. How many fits in total?"],
		"o": [
			["12 lần", "12 fits"],
			["35 lần", "35 fits"],
			["20 lần", "20 fits"],
			["60 lần", "60 fits"]
		],
		"a": 3,
		"w": ["4 × 3 = 12 cặp, nhân 5 phần được 60 lần học. Con số 12 quên nhân fold, còn 35 là (4 + 3) × 5, tức cộng thay vì nhân hai danh sách.", "4 × 3 = 12 pairs, times 5 folds gives 60 fits. The 12 forgets the folds, and 35 is (4 + 3) × 5, adding the two lists instead of multiplying."]
	}],
	"ts-order": [{
		"q": ["Vì sao không nên xáo các dòng của bảng số form theo tuần trước khi học?", "Why should you not shuffle the rows of a weekly form table before training?"],
		"o": [
			["Vì xáo chỉ ảnh hưởng tập học, không ảnh hưởng tập chấm", "Because shuffling only affects the training set, not the test set"],
			["Không sao nếu bảng vẫn có cột ngày", "It is fine as long as the table still has a date column"],
			["Vì xáo làm mô hình chạy chậm hơn", "Because shuffling makes the model run slower"],
			["Vì thứ tự là thứ cần dự báo: cột trễ thành một tuần ngẫu nhiên và mô hình nhìn thấy tương lai", "Because order is what you want to forecast: lag columns become a random week and the model sees the future"]
		],
		"a": 3,
		"w": ["Bảng khách có thể xáo vì các dòng tách biệt, bảng tuần thì không. Có cột ngày chưa đủ nếu các dòng không đứng đúng thứ tự lúc học và lúc chấm.", "A customer table can be shuffled because rows are separate; a weekly table cannot. A date column alone is not enough if rows are not kept in order when training and scoring."]
	}, {
		"q": ["Có dữ liệu tuần 1 đến tuần 30 và bạn muốn dự báo tuần 20. Được phép dùng bao nhiêu tuần để học?", "You have data for weeks 1 to 30 and want to forecast week 20. How many weeks may you learn from?"],
		"o": [
			["29 tuần (mọi tuần trừ tuần 20)", "29 weeks (every week except week 20)"],
			["30 tuần", "30 weeks"],
			["19 tuần (tuần 1 đến 19)", "19 weeks (weeks 1 to 19)"],
			["20 tuần (tuần 1 đến 20)", "20 weeks (weeks 1 to 20)"]
		],
		"a": 2,
		"w": ["Chỉ quá khứ của tuần 20 mới hợp lệ, tức tuần 1 đến 19. Dùng cả tuần 21 đến 30 là cho mô hình nhìn thấy tương lai, còn tuần 20 là chính đáp án.", "Only the past of week 20 is valid, i.e. weeks 1 to 19. Using weeks 21 to 30 lets the model see the future, and week 20 itself is the answer."]
	}],
	"ts-dep": [{
		"q": ["Phần dư theo tuần cùng dấu với tuần trước suốt một tháng. Hệ quả chính cho hồi quy là gì?", "Weekly residuals share the sign of the previous week for a month. What is the main consequence for the regression?"],
		"o": [
			["Hệ số chắc chắn bị lệch", "The coefficients are certainly biased"],
			["Sai số chuẩn quá lớn nên kiểm định ít bác hơn", "Standard errors are too large so tests reject less often"],
			["Xáo các tuần sẽ chữa được vấn đề", "Shuffling the weeks would fix the problem"],
			["Hệ số có thể vẫn không lệch nhưng sai số chuẩn nhỏ giả, nên kiểm định bác quá thường", "Coefficients may still be unbiased but standard errors are too small, so tests reject too often"]
		],
		"a": 3,
		"w": ["Tương quan liên tiếp làm các tuần mang ít thông tin độc lập hơn số dòng, nên khoảng quanh hệ số hẹp quá mức. Xáo không chữa được, còn việc thêm biến trễ hay dùng mô hình chuỗi mới là hướng xử lý.", "Serial correlation means the weeks carry less independent information than the row count suggests, so the interval around a coefficient is too narrow. Shuffling does not fix it; lag terms or a time-series model do."]
	}, {
		"q": ["Có n = 80 tuần, tương quan liên tiếp ρ = 0,6. Cỡ mẫu hiệu dụng xấp xỉ n(1 − ρ)/(1 + ρ) là bao nhiêu?", "There are n = 80 weeks with serial correlation ρ = 0.6. What is the effective sample size n(1 − ρ)/(1 + ρ)?"],
		"o": [
			["80 tuần", "80 weeks"],
			["20 tuần", "20 weeks"],
			["32 tuần", "32 weeks"],
			["48 tuần", "48 weeks"]
		],
		"a": 1,
		"w": ["80 × 0,4 / 1,6 = 20. Giữ nguyên 80 là coi các tuần độc lập; 32 chỉ nhân 80 × 0,4 mà quên chia cho 1,6; 48 là 80 × 0,6.", "80 × 0.4 / 1.6 = 20. Keeping 80 treats the weeks as independent; 32 is just 80 × 0.4 without dividing by 1.6; 48 is 80 × 0.6."]
	}],
	"ts-decomp": [{
		"q": ["Khi nào nên dùng mô hình mùa kiểu nhân thay cho kiểu cộng?", "When should you use a multiplicative seasonal model instead of an additive one?"],
		"o": [
			["Khi tháng lễ luôn thêm đúng một lượng cố định dù nền cao hay thấp", "When the holiday month always adds the same fixed amount whether the base is high or low"],
			["Khi dữ liệu chỉ có một năm, vì nhân cần ít dữ liệu hơn", "When there is only one year of data, because multiplicative needs less data"],
			["Khi biên độ mùa lớn lên theo mức nền, ví dụ nền gấp đôi thì phần mùa cũng gấp đôi", "When the seasonal swing grows with the level, e.g. a doubled base also doubles the seasonal part"],
			["Khi dữ liệu không có mùa", "When the data has no seasonality"]
		],
		"a": 2,
		"w": ["Kiểu cộng có phần mùa cố định, kiểu nhân có phần mùa tỷ lệ với nền. Chọn sai kiểu thì phần dư còn hình mùa, và cần ít nhất hai năm để thấy mùa năm lặp lại.", "Additive has a fixed seasonal amount, multiplicative a seasonal part proportional to the base. A wrong choice leaves a seasonal shape in the residuals, and you need at least two years to see an annual season repeat."]
	}, {
		"q": ["Mùa tháng lễ kiểu nhân là ×1,4. Nếu nền (mức) tháng đó là 150 form thì dự báo có mùa là bao nhiêu?", "The holiday season is multiplicative at ×1.4. If the base level that month is 150 forms, what is the seasonal forecast?"],
		"o": [
			["170 form", "170 forms"],
			["210 form", "210 forms"],
			["151,4 form", "151.4 forms"],
			["290 form", "290 forms"]
		],
		"a": 1,
		"w": ["150 × 1,4 = 210. Con số 170 là kiểu cộng +20 (không phải ×1,4), còn 151,4 và 290 cộng 1,4 hay 140 vào nền, là lẫn giữa hệ số nhân và lượng cộng.", "150 × 1.4 = 210. The 170 is the additive +20 case (not ×1.4), and 151.4 and 290 add 1.4 or 140 to the base, mixing up a multiplier with an addend."]
	}],
	"ts-naive": [{
		"q": ["Một mô hình có RMSE 9, dự báo ngây (bằng tuần trước) có RMSE 6, cùng đoạn walk-forward và cùng thước. Kết luận?", "A model has RMSE 9 and the naive «same as last week» forecast has RMSE 6 on the same walk-forward segment with the same metric. Conclusion?"],
		"o": [
			["Mô hình chưa đáng dùng vì chưa thắng mốc ngây", "The model is not worth using yet because it has not beaten the naive baseline"],
			["Mô hình tốt hơn vì phức tạp hơn", "The model is better because it is more complex"],
			["Hai con số không so sánh được với nhau", "The two numbers cannot be compared"],
			["Dự báo ngây chỉ dùng được trên tập học", "The naive forecast only works on the training set"]
		],
		"a": 0,
		"w": ["RMSE thấp hơn là tốt hơn, và mốc ngây là thanh tối thiểu phải vượt. Độ phức tạp không phải bằng chứng, và cùng đoạn cùng thước thì so sánh được.", "A lower RMSE is better, and the naive forecast is the minimum bar to clear. Complexity is not evidence, and the same segment with the same metric is comparable."]
	}, {
		"q": ["Dữ liệu theo tuần có mùa năm (m = 52). Theo dự báo ngây theo mùa ŷ_t = y_(t−m), tuần 60 được dự báo bằng số form của tuần nào?", "Weekly data with an annual season (m = 52). Using the seasonal naive ŷ_t = y_(t−m), which week's form count is the forecast for week 60?"],
		"o": [
			["Tuần 8", "Week 8"],
			["Tuần 59", "Week 59"],
			["Tuần 52", "Week 52"],
			["Tuần 112", "Week 112"]
		],
		"a": 0,
		"w": ["60 − 52 = 8. Tuần 59 là naive một bước (tuần trước), tuần 52 nhầm m với chỉ số, và tuần 112 là cộng thay vì trừ nên nằm ở tương lai.", "60 − 52 = 8. Week 59 is the one-step naive (last week), week 52 mistakes m for an index, and week 112 adds instead of subtracts, landing in the future."]
	}],
	"ts-sma": [{
		"q": ["Trung bình trượt đơn giản (SMA) xử lý tuần lễ có số form rất cao như thế nào?", "How does a simple moving average (SMA) treat a holiday week with a very high form count?"],
		"o": [
			["Cân tuần gần nhất nặng hơn nên lễ qua là hết ảnh hưởng ngay", "It weights the latest week more, so the holiday stops mattering right after it ends"],
			["Tính nó như mọi tuần khác trong cửa sổ và giữ nó cho đến khi nó rời cửa sổ", "It counts it like any other week in the window and keeps it until it leaves the window"],
			["Tự động bỏ tuần ngoại lai", "It automatically drops outlier weeks"],
			["Dùng nó làm thành phần MA của ARIMA", "It uses it as the MA component of ARIMA"]
		],
		"a": 1,
		"w": ["SMA cho mọi kỳ trong cửa sổ cùng trọng số, nên tuần lễ vẫn bị tính khi lễ đã qua. Cân nặng tuần gần là việc của san bằng mũ, và SMA chỉ là làm mượt, không phải MA của ARIMA.", "SMA gives every period in the window equal weight, so the holiday week still counts after the holiday. Weighting recent weeks is exponential smoothing, and SMA is just smoothing, not the MA of ARIMA."]
	}, {
		"q": ["Ba tuần gần nhất có 12, 15 và 33 form. SMA với k = 3 bằng bao nhiêu?", "The last three weeks have 12, 15 and 33 forms. What is the SMA with k = 3?"],
		"o": [
			["33 form", "33 forms"],
			["15 form", "15 forms"],
			["60 form", "60 forms"],
			["20 form", "20 forms"]
		],
		"a": 3,
		"w": ["(12 + 15 + 33) / 3 = 60 / 3 = 20. Con số 33 chỉ là tuần cuối (naive), 15 là trung vị, và 60 là tổng chưa chia.", "(12 + 15 + 33) / 3 = 60 / 3 = 20. The 33 is just the last week (naive), 15 is the median, and 60 is the sum before dividing."]
	}],
	"ts-ses": [{
		"q": ["San bằng mũ đơn giản dự báo gì cho nhiều tuần phía trước?", "What does simple exponential smoothing forecast for many weeks ahead?"],
		"o": [
			["Một đường dốc theo xu hướng gần nhất", "A sloped line following the latest trend"],
			["Một đường có mùa lặp lại", "A line with a repeating season"],
			["Một đường nằm ngang bằng mức hiện tại, không có dốc", "A flat line at the current level, with no slope"],
			["Một mức giảm dần về 0", "A level decaying toward 0"]
		],
		"a": 2,
		"w": ["Mô hình chỉ có thành phần mức nên mọi bước phía trước bằng mức hiện tại. Xu hướng tăng sẽ bị dự báo thành đứng yên, muốn có dốc phải dùng Holt.", "The model only has a level component so every future step equals the current level. A rising trend would be forecast as flat; you need Holt for a slope."]
	}, {
		"q": ["Mức cũ là 60 form, tuần này thực tế là 80 form, hệ số san bằng α = 0,3. Mức mới là bao nhiêu?", "The old level is 60 forms, this week's actual is 80, and the smoothing factor is α = 0.3. What is the new level?"],
		"o": [
			["74", "74"],
			["70", "70"],
			["66", "66"],
			["80", "80"]
		],
		"a": 2,
		"w": ["0,3 × 80 + 0,7 × 60 = 24 + 42 = 66. Con số 74 là đổi nhầm trọng số (0,7 cho tuần mới), 70 là trung bình đơn giản, và 80 là α = 1.", "0.3 × 80 + 0.7 × 60 = 24 + 42 = 66. The 74 swaps the weights (0.7 on the new week), 70 is the plain average, and 80 corresponds to α = 1."]
	}],
	"ts-holt": [{
		"q": ["Holt dự báo h bước phía trước thế nào, và hạn chế chính là gì?", "How does Holt forecast h steps ahead, and what is its main limitation?"],
		"o": [
			["Mức + h × dốc; dốc cứ chạy mãi nên dự báo xa có thể vô lý", "Level + h × slope; the slope keeps running forever so far-ahead forecasts can become absurd"],
			["Chỉ bằng mức hiện tại, không có dốc", "Just the current level, with no slope"],
			["Mức + mùa, vì Holt tự tìm chu kỳ", "Level + season, because Holt finds the cycle itself"],
			["Dốc tự tắt sau khi tháng lễ kết thúc", "The slope switches itself off once the holiday month ends"]
		],
		"a": 0,
		"w": ["Holt thêm một dốc vào mức nên dự báo là đường thẳng, nhưng không có mùa và không biết lễ đã hết. Dự báo phẳng là của san bằng mũ đơn giản.", "Holt adds a slope to the level so the forecast is a straight line, but it has no season and does not know the holiday is over. A flat forecast belongs to simple exponential smoothing."]
	}, {
		"q": ["Mức hiện tại là 50 form, dốc là 2 form mỗi tuần. Holt dự báo bao nhiêu form cho 10 tuần tới?", "The current level is 50 forms and the slope is 2 forms per week. What does Holt forecast 10 weeks ahead?"],
		"o": [
			["70 form", "70 forms"],
			["52 form", "52 forms"],
			["60 form", "60 forms"],
			["100 form", "100 forms"]
		],
		"a": 0,
		"w": ["50 + 10 × 2 = 70. Con số 52 chỉ cộng một bước dốc, 60 cộng 10 thay vì 10 lần dốc, còn 100 nhân mức với dốc.", "50 + 10 × 2 = 70. The 52 adds only one step of slope, 60 adds 10 instead of 10 times the slope, and 100 multiplies the level by the slope."]
	}],
	"ts-hw": [{
		"q": ["Holt-Winters biết chu kỳ mùa bằng cách nào?", "How does Holt-Winters know the seasonal period?"],
		"o": [
			["Máy tự khám phá chu kỳ từ dữ liệu", "The machine discovers the period from the data"],
			["Chu kỳ luôn mặc định là 12", "The period always defaults to 12"],
			["Chỉ cần một vòng dữ liệu là đủ tách mùa khỏi nhiễu", "One cycle of data is enough to separate season from noise"],
			["Bạn phải đưa chu kỳ vào, máy không tự tìm ra là 7 hay 52", "You must supply the period; the machine does not discover whether it is 7 or 52"]
		],
		"a": 3,
		"w": ["Mỗi vị trí trong chu kỳ có một hệ số mùa do bạn định nghĩa. Với ít hơn hai vòng, mùa và nhiễu không tách được, và đổi chu kỳ từ 7 sang 52 là một mô hình khác.", "Each position in the cycle gets a seasonal coefficient defined by the period you give. With fewer than two cycles, season and noise cannot be separated, and changing the period from 7 to 52 is a different model."]
	}, {
		"q": ["Dữ liệu theo tuần, bạn muốn mô hình mùa năm (m = 52). Cần tối thiểu bao nhiêu tuần dữ liệu?", "Weekly data, and you want an annual seasonal model (m = 52). What is the minimum number of weeks of data?"],
		"o": [
			["52 tuần", "52 weeks"],
			["104 tuần", "104 weeks"],
			["53 tuần", "53 weeks"],
			["208 tuần", "208 weeks"]
		],
		"a": 1,
		"w": ["Cần ít nhất hai chu kỳ: 2 × 52 = 104 tuần. 52 hay 53 tuần chỉ chứa một vòng nên mùa chưa lặp lại lần nào.", "You need at least two cycles: 2 × 52 = 104 weeks. 52 or 53 weeks hold just one cycle so the season has not repeated even once."]
	}],
	"ts-mape": [{
		"q": ["Vì sao MAPE gãy khi có tuần 0 form?", "Why does MAPE break when a week has 0 forms?"],
		"o": [
			["Vì MAPE chia cho giá trị dự báo", "Because MAPE divides by the forecast value"],
			["Vì MAPE chia sai số cho số thật, mà chia cho 0 không có nghĩa", "Because MAPE divides the error by the actual value, and dividing by 0 is undefined"],
			["Vì MAPE đối xứng nên phạt giống nhau cả hai phía", "Because MAPE is symmetric and penalises both sides equally"],
			["Vì sMAPE hoàn toàn miễn nhiễm với số 0", "Because sMAPE is completely immune to zeros"]
		],
		"a": 1,
		"w": ["Mẫu số của MAPE là số thật nên tuần 0 form làm công thức vô nghĩa, trong khi MAE và RMSE không chia nên vẫn chấm được. MAPE cũng không đối xứng, và sMAPE vẫn kỳ lạ khi cả hai về 0.", "MAPE's denominator is the actual value so a 0-form week makes the formula meaningless, while MAE and RMSE do not divide and still work. MAPE is also asymmetric, and sMAPE is still odd when both are 0."]
	}, {
		"q": ["Tuần A: thật 50, dự báo 40. Tuần B: thật 10, dự báo 15. MAPE của hai tuần là bao nhiêu?", "Week A: actual 50, forecast 40. Week B: actual 10, forecast 15. What is the MAPE of the two weeks?"],
		"o": [
			["29%", "29%"],
			["35%", "35%"],
			["25%", "25%"],
			["7,5%", "7.5%"]
		],
		"a": 1,
		"w": ["Tuần A: 10 / 50 = 20%, tuần B: 5 / 10 = 50%, trung bình 35%. Con số 29% chia cho dự báo thay vì số thật, còn 7,5 là MAE (đơn vị form, không phải %).", "Week A: 10 / 50 = 20%, week B: 5 / 10 = 50%, mean 35%. The 29% divides by the forecast instead of the actual, and 7.5 is the MAE (in forms, not a percentage)."]
	}],
	"ts-walk": [{
		"q": ["Cách nào đúng với walk-forward validation?", "Which is correct for walk-forward validation?"],
		"o": [
			["Học trên quá khứ, chấm đoạn sau, rồi cuốn tới; mọi nút chỉnh cũng chỉ được nhìn quá khứ", "Learn on the past, score the next segment, then roll forward; every tuning knob may also only see the past"],
			["Giấu một tháng ở giữa chuỗi rồi dự báo nó từ hai phía", "Hide a month in the middle and forecast it from both sides"],
			["Chọn nút trên cả chuỗi rồi mới chạy walk-forward", "Choose settings on the full series and only then run walk-forward"],
			["Xáo các tuần vào k-fold để tăng độ tin cậy", "Shuffle the weeks into k-fold to improve reliability"]
		],
		"a": 0,
		"w": ["Walk-forward giữ nguyên thứ tự thời gian ở mỗi lần. Giấu tháng giữa, xáo vào fold, hay chọn nút bằng cả chuỗi đều cho mô hình nhìn lén tương lai.", "Walk-forward preserves time order in every round. Hiding a middle month, shuffling into folds, or tuning on the full series all let the model peek at the future."]
	}, {
		"q": ["Có 12 tháng dữ liệu. Ở lần chấm tháng 12, mô hình được học trên bao nhiêu tháng?", "There are 12 months of data. In the round that scores December, how many months does the model learn from?"],
		"o": [
			["11 tháng (tháng 1 đến 11)", "11 months (January to November)"],
			["6 tháng", "6 months"],
			["12 tháng", "12 months"],
			["1 tháng", "1 month"]
		],
		"a": 0,
		"w": ["Mỗi lần học trên mọi tháng trước tháng cần chấm, nên tháng 12 dùng tháng 1 đến 11. Con số 12 gồm cả tháng 12, tức rò rỉ; 6 chỉ là cỡ tập học ban đầu của lần chấm đầu tiên.", "Each round learns from every month before the one scored, so December uses January to November. The 12 includes December itself, a leak; 6 is only the initial training size of the first round."]
	}],
	"ts-stat": [{
		"q": ["Chuỗi nào sau đây có thể coi là dừng (stationary)?", "Which series can be considered stationary?"],
		"o": [
			["Form tăng đều khoảng 3 mỗi tuần", "Forms rise steadily by about 3 per week"],
			["Form quanh 40 nửa đầu năm, quanh 60 nửa cuối năm", "Forms around 40 in the first half of the year and around 60 in the second half"],
			["Form có độ dao động phình to dần theo thời gian", "Forms whose swings keep growing wider over time"],
			["Form dao động quanh mức 40 suốt năm với độ rộng gần như không đổi", "Forms fluctuate around 40 all year with roughly constant spread"]
		],
		"a": 3,
		"w": ["Dừng nghĩa là trung bình và độ rộng không phụ thuộc mốc thời gian. Ba phương án còn lại đều có trung bình hoặc độ rộng đổi theo thời gian.", "Stationary means the mean and spread do not depend on when you look. The other three all have a mean or spread that changes over time."]
	}, {
		"q": ["Chuỗi form là 50, 54, 58 và mô hình dự báo bước thay đổi (sai phân) tiếp theo là 4. Mức form dự báo là bao nhiêu?", "The form series is 50, 54, 58 and the model forecasts the next change (difference) as 4. What is the forecast level?"],
		"o": [
			["4", "4"],
			["58", "58"],
			["62", "62"],
			["66", "66"]
		],
		"a": 2,
		"w": ["Phải cộng ngược bước thay đổi vào mức cuối: 58 + 4 = 62. Chọn 4 là báo cáo bước thay đổi như thể nó là số form; 66 là cộng bước hai lần.", "Add the change back to the last level: 58 + 4 = 62. Choosing 4 reports the change as if it were the form count; 66 adds the step twice."]
	}],
	"ts-acf": [{
		"q": ["PACF tại lag 2 đo điều gì?", "What does the PACF at lag 2 measure?"],
		"o": [
			["Chính là ACF tại lag 2, chỉ khác tên gọi", "Exactly the ACF at lag 2, just a different name"],
			["Tương quan giữa y_t và y_(t−2) sau khi đã loại ảnh hưởng của lag 1", "The correlation between y_t and y_(t−2) after removing the effect of lag 1"],
			["Trung bình của ACF tại lag 1 và lag 2", "The average of the ACF at lag 1 and lag 2"],
			["Bằng chứng chắc chắn rằng mô hình cần bậc 2", "Firm proof that the model needs order 2"]
		],
		"a": 1,
		"w": ["PACF là phần tương quan còn lại khi các bước ở giữa đã được tính. Nó khác ACF khi lag 1 cũng tương quan, và chỉ là gợi ý bậc, không chứng minh bậc.", "PACF is the leftover correlation once the in-between lags are accounted for. It differs from the ACF when lag 1 is also correlated, and it only hints at the order rather than proving it."]
	}, {
		"q": ["Chuỗi có n = 100 tuần nên vạch xấp xỉ ±2/√n = ±0,2. ACF tại 4 lag đầu là 0,35; 0,18; −0,22; 0,05. Có bao nhiêu lag vượt vạch?", "The series has n = 100 weeks, so the bounds are about ±2/√n = ±0.2. The ACF at the first 4 lags is 0.35, 0.18, −0.22, 0.05. How many lags exceed the bounds?"],
		"o": [
			["2 lag (0,35 và −0,22)", "2 lags (0.35 and −0.22)"],
			["1 lag (chỉ 0,35)", "1 lag (only 0.35)"],
			["3 lag (0,35; 0,18; −0,22)", "3 lags (0.35, 0.18, −0.22)"],
			["4 lag, vì ACF nào cũng vượt vạch", "4 lags, because every ACF value exceeds the bounds"]
		],
		"a": 0,
		"w": ["2/√100 = 0,2. Chỉ 0,35 và −0,22 (theo trị tuyệt đối) lớn hơn 0,2. Giá trị âm vẫn tính theo trị tuyệt đối, còn 0,18 và 0,05 nằm trong vạch.", "2/√100 = 0.2. Only 0.35 and −0.22 (by absolute value) exceed 0.2. Negative values count by absolute value, while 0.18 and 0.05 are inside the bounds."]
	}],
	"ts-ar": [{
		"q": ["Trong AR(1) với φ = 0,5 trên chuỗi dừng, φ có nghĩa là gì?", "In an AR(1) with φ = 0.5 on a stationary series, what does φ mean?"],
		"o": [
			["Một nửa số form tuần này là do tuần trước gây ra theo nghĩa nguyên nhân", "Half of this week's forms are caused by last week in a causal sense"],
			["Mức bám của kỳ trước vào kỳ này: lệch so với mức dài hạn còn giữ lại một phần", "How strongly the previous period carries into this one: part of the deviation from the long-run level persists"],
			["Tuần này luôn bằng đúng một nửa tuần trước", "This week always equals exactly half of last week"],
			["Xác suất 50% rằng tuần này giống tuần trước", "A 50% probability that this week repeats last week"]
		],
		"a": 1,
		"w": ["φ là độ bám trong mô hình dự báo, không phải tỷ lệ nguyên nhân và không phải xác suất. Hằng số c và cú sốc ε vẫn góp vào giá trị mỗi tuần.", "φ is persistence in a forecasting model, not a causal share or a probability. The constant c and the shock ε still contribute to each week's value."]
	}, {
		"q": ["AR(1): y_t = 10 + 0,5 y_(t−1). Tuần trước là 40, tuần này dự báo 30. Dự báo cho tuần kế tiếp (không có cú sốc) là bao nhiêu?", "AR(1): y_t = 10 + 0.5 y_(t−1). Last week was 40 and this week is forecast at 30. What is the forecast for the following week (no shock)?"],
		"o": [
			["30", "30"],
			["20", "20"],
			["25", "25"],
			["22,5", "22.5"]
		],
		"a": 2,
		"w": ["Dùng chính dự báo trước: 10 + 0,5 × 30 = 25. 20 là mức dài hạn c/(1−φ) mà chuỗi chỉ dần tới; 22,5 là bước thứ ba; 30 là chưa cập nhật.", "Use the previous forecast: 10 + 0.5 × 30 = 25. 20 is the long-run level c/(1−φ) that the series only approaches; 22.5 is the third step; 30 is not updated."]
	}],
	"ts-ma": [{
		"q": ["Thành phần MA trong ARIMA khác gì với trung bình trượt dùng để làm mượt?", "How does the MA part of ARIMA differ from the moving average used for smoothing?"],
		"o": [
			["Hai khái niệm giống nhau, chỉ khác cách gọi", "They are the same thing under different names"],
			["MA của ARIMA là trung bình của k giá trị y gần nhất", "The ARIMA MA is the average of the last k y values"],
			["Trung bình trượt mô hình cú sốc, còn MA của ARIMA thì làm mượt", "The moving average models shocks, while the ARIMA MA does the smoothing"],
			["MA của ARIMA mô hình ảnh hưởng của các cú sốc ε cũ; trung bình trượt chỉ cộng vài giá trị y gần nhất rồi chia", "The ARIMA MA models the effect of past shocks ε; a moving average just adds the last few y values and divides"]
		],
		"a": 3,
		"w": ["Trong y_t = μ + ε_t + θ ε_(t−1), ε là cú sốc chứ không phải giá trị y. Trung bình trượt cộng các y cũ, nên chúng không thể thay thế nhau.", "In y_t = μ + ε_t + θ ε_(t−1), ε is a shock, not a y value. A moving average adds old y values, so the two are not interchangeable."]
	}, {
		"q": ["MA(1): y_t = 40 + ε_t + 0,4 ε_(t−1). Tuần trước có cú sốc ε = −10. Dự báo điểm tuần này là bao nhiêu?", "MA(1): y_t = 40 + ε_t + 0.4 ε_(t−1). Last week had a shock ε = −10. What is this week's point forecast?"],
		"o": [
			["36", "36"],
			["44", "44"],
			["40", "40"],
			["30", "30"]
		],
		"a": 0,
		"w": ["Dự báo = 40 + 0,4 × (−10) = 36. 44 là sai dấu; 40 là bỏ qua phần còn vương lại; 30 là cộng cả cú sốc −10 mà quên nhân θ.", "Forecast = 40 + 0.4 × (−10) = 36. 44 flips the sign; 40 ignores the leftover effect; 30 adds the full −10 shock without multiplying by θ."]
	}],
	"ts-arima": [{
		"q": ["Trong ARIMA(p, d, q), tham số d = 1 nghĩa là gì?", "In ARIMA(p, d, q), what does d = 1 mean?"],
		"o": [
			["Lấy sai phân một lần, mô hình AR và MA chạy trên phần thay đổi, rồi cộng ngược để về mức", "Difference once, fit AR and MA on the changes, then add back to return to levels"],
			["Bậc của phần tự hồi quy AR bằng 1", "The AR order equals 1"],
			["Chu kỳ mùa là 1 tuần", "The seasonal period is 1 week"],
			["Có thêm đúng một cột ngoài như khuyến mãi", "Exactly one external column such as promotions is added"]
		],
		"a": 0,
		"w": ["d là số lần lấy sai phân; p và q mới là bậc AR và MA. Chu kỳ mùa thuộc SARIMA và cột ngoài thuộc SARIMAX.", "d is the number of differencing steps; p and q are the AR and MA orders. The seasonal period belongs to SARIMA and external columns to SARIMAX."]
	}, {
		"q": ["Bạn dự báo form tuần tới bằng SARIMAX với cột khuyến mãi, nhưng lịch khuyến mãi tuần tới chưa chốt. Cách xử lý đúng là gì?", "You forecast next week's forms with SARIMAX using a promo column, but next week's promo schedule is not final. What is the right approach?"],
		"o": [
			["Điền 0 cho khuyến mãi và giữ nguyên khoảng dự báo", "Fill in 0 for the promo and keep the same interval"],
			["Đưa ra các kịch bản (có hoặc không khuyến mãi) hoặc dự báo cột đó, và chấp nhận khoảng dự báo rộng hơn", "Provide scenarios (promo or no promo) or forecast that column too, and accept a wider forecast interval"],
			["Lấy giá trị khuyến mãi của tuần này làm giá trị tuần tới rồi báo cáo như đã biết", "Use this week's promo value for next week and report it as known"],
			["Tăng d lên 2 để mô hình tự tìm ra khuyến mãi", "Raise d to 2 so the model finds the promo itself"]
		],
		"a": 1,
		"w": ["Cột ngoài phải được biết ở thời điểm dự báo. Nếu chưa biết, bạn đang đoán thêm một đại lượng nên khoảng phải rộng hơn hoặc nên tách theo kịch bản; giả vờ đã biết cho khoảng hẹp giả.", "The external column must be known at forecast time. If it is not, you are guessing another quantity, so the interval should be wider or split by scenario; pretending it is known gives a falsely narrow interval."]
	}],
	"math-vec": [{
		"q": ["Tuần quảng cáo viết là (chi, form) = (10, 80). Vì sao (80, 10) là một tuần khác hẳn?", "A week is written as (spend, forms) = (10, 80). Why is (80, 10) a completely different week?"],
		"o": [
			["Vì (80, 10) có tổng lớn hơn (10, 80)", "Because (80, 10) has a larger sum than (10, 80)"],
			["Nó không khác, hai véctơ có cùng các số nên bằng nhau", "It is not different; the two vectors contain the same numbers so they are equal"],
			["Vì vị trí ô quyết định ý nghĩa: ô đầu là chi tiêu, ô hai là form", "Because cell position determines meaning: the first cell is spend, the second is forms"],
			["Vì số lớn luôn phải đứng sau trong một véctơ", "Because the larger number must always come second in a vector"]
		],
		"a": 2,
		"w": ["Véctơ là danh sách có thứ tự, đổi chỗ ô là đổi ý nghĩa. Hai tổng đều bằng 90 nên đáp án về tổng sai, và không có quy tắc số lớn đứng sau.", "A vector is an ordered list, so swapping cells changes meaning. Both sums equal 90, so the sum answer is wrong, and there is no rule that the larger number goes last."]
	}, {
		"q": ["So sánh tuần P = (10, 80) và tuần Q = (12, 70) (chi triệu, form). Phát biểu nào đúng?", "Compare week P = (10, 80) and week Q = (12, 70) (spend in millions, forms). Which statement is correct?"],
		"o": [
			["P lớn hơn Q vì tổng các ô 90 lớn hơn 82", "P is larger because its cell total 90 is greater than 82"],
			["P nhỏ hơn Q vì ô đầu 10 nhỏ hơn 12", "P is smaller because the first cell 10 is less than 12"],
			["P bằng Q vì cả hai đều có hai ô", "P equals Q because both have two cells"],
			["Không có thứ tự tự nhiên giữa hai véctơ; phải chọn một cách đo (ví dụ từng ô hoặc độ dài) và cách đo khác có thể cho kết luận khác", "There is no natural ordering between the two vectors; you must choose a measure (for example per cell or length) and a different measure may give a different conclusion"]
		],
		"a": 3,
		"w": ["Một véctơ không tự có quan hệ lớn hơn hay nhỏ hơn. Cộng chi tiêu với form còn trộn hai đơn vị khác nhau, và so sánh một ô duy nhất bỏ qua ô còn lại.", "A vector has no built-in greater-than or less-than. Adding spend to forms also mixes two units, and comparing a single cell ignores the other."]
	}],
	"math-add": [{
		"q": ["Nhân véctơ (10, 80) với số 2 cho kết quả nào về mặt ý nghĩa?", "What does multiplying the vector (10, 80) by 2 do?"],
		"o": [
			["Chỉ nhân đôi ô đầu, ô còn lại giữ nguyên", "It doubles only the first cell and leaves the other unchanged"],
			["Cộng thêm 2 vào mọi ô", "It adds 2 to every cell"],
			["Nhân hai ô với nhau rồi nhân với 2 thành một số", "It multiplies the two cells together, then by 2, giving a single number"],
			["Nhân đôi mọi ô: chi tiêu và form cùng gấp đôi", "It doubles every cell: both spend and forms double"]
		],
		"a": 3,
		"w": ["Nhân một số (scalar) kéo mọi ô theo cùng tỷ lệ, cho (20, 160). Nó không phải cộng thêm và không gộp hai ô lại.", "Scalar multiplication scales every cell by the same factor, giving (20, 160). It is not an addition and does not merge the two cells."]
	}, {
		"q": ["Tính (6, 40) + 3 × (2, 5).", "Compute (6, 40) + 3 × (2, 5)."],
		"o": [
			["(8, 45)", "(8, 45)"],
			["(12, 55)", "(12, 55)"],
			["(20, 125)", "(20, 125)"],
			["(12, 45)", "(12, 45)"]
		],
		"a": 1,
		"w": ["3 × (2, 5) = (6, 15), cộng với (6, 40) cho (12, 55). (8, 45) quên nhân 3; (12, 45) chỉ nhân 3 ở ô đầu; (20, 125) nhân 3 sai véctơ.", "3 × (2, 5) = (6, 15), and adding (6, 40) gives (12, 55). (8, 45) forgets the 3; (12, 45) applies the 3 to the first cell only; (20, 125) scales the wrong vector."]
	}],
	"math-dot": [{
		"q": ["Nếu tích vô hướng của hai véctơ khác 0 bằng 0, điều gì đúng?", "If the dot product of two nonzero vectors equals 0, what is true?"],
		"o": [
			["Hai véctơ vuông góc (cos θ = 0)", "The vectors are perpendicular (cos θ = 0)"],
			["Hai véctơ cùng hướng", "The vectors point in the same direction"],
			["Hai véctơ bằng nhau", "The vectors are equal"],
			["Hai véctơ ngược hướng", "The vectors point in opposite directions"]
		],
		"a": 0,
		"w": ["u · v = ‖u‖·‖v‖·cos θ, nên bằng 0 khi cos θ = 0, tức vuông góc. Cùng hướng cho cos = 1 còn ngược hướng cho cos = −1.", "u · v = ‖u‖·‖v‖·cos θ, so it is 0 when cos θ = 0, i.e. perpendicular. Same direction gives cos = 1 and opposite gives cos = −1."]
	}, {
		"q": ["Tính tích vô hướng của u = (3, 2) và v = (1, 4).", "Compute the dot product of u = (3, 2) and v = (1, 4)."],
		"o": [
			["25", "25"],
			["14", "14"],
			["11", "11"],
			["10", "10"]
		],
		"a": 2,
		"w": ["3 × 1 + 2 × 4 = 3 + 8 = 11. 25 là cộng ô trước rồi nhân; 14 ghép sai cặp ô (3 × 4 + 2 × 1); 10 là cộng tất cả các ô.", "3 × 1 + 2 × 4 = 3 + 8 = 11. 25 adds the cells before multiplying; 14 pairs the wrong cells (3 × 4 + 2 × 1); 10 just sums all the cells."]
	}],
	"math-mat": [{
		"q": ["Khi ma trận nhân với một véctơ đầu vào, mỗi ô của kết quả được tạo ra như thế nào?", "When a matrix multiplies an input vector, how is each cell of the result produced?"],
		"o": [
			["Ô thứ i là trung bình của cột i", "Cell i is the average of column i"],
			["Ô thứ i là tích từng ô của hàng i với cột i của ma trận", "Cell i is the elementwise product of row i and column i of the matrix"],
			["Ô thứ i là tích vô hướng của hàng i với véctơ đầu vào", "Cell i is the dot product of row i with the input vector"],
			["Mọi ô của kết quả đều bằng tổng toàn bộ bảng", "Every result cell equals the total of the whole table"]
		],
		"a": 2,
		"w": ["Mỗi hàng chấm với đầu vào cho đúng một ô đầu ra. Ma trận là máy biến số, không phải bảng để lấy trung bình.", "Each row dotted with the input gives exactly one output cell. A matrix is a transformation machine, not a table to average."]
	}, {
		"q": ["Ma trận [[3, 0], [0, 2]] tác động lên véctơ (4, 5). Kết quả là gì?", "The matrix [[3, 0], [0, 2]] acts on the vector (4, 5). What is the result?"],
		"o": [
			["(12, 5)", "(12, 5)"],
			["(12, 10)", "(12, 10)"],
			["(10, 12)", "(10, 12)"],
			["(4, 10)", "(4, 10)"]
		],
		"a": 1,
		"w": ["Hàng một: 3 × 4 + 0 × 5 = 12; hàng hai: 0 × 4 + 2 × 5 = 10. Các đáp án kia chỉ biến đổi một ô hoặc đổi chỗ hai ô.", "Row one: 3 × 4 + 0 × 5 = 12; row two: 0 × 4 + 2 × 5 = 10. The other answers transform only one cell or swap the two."]
	}],
	"math-mul": [{
		"q": ["Ma trận A cỡ 2×3 và ma trận B cũng cỡ 2×3. Phép nhân AB có tồn tại không?", "Matrix A is 2×3 and matrix B is also 2×3. Does the product AB exist?"],
		"o": [
			["Không, vì số cột của A (3) không bằng số hàng của B (2)", "No, because the columns of A (3) do not equal the rows of B (2)"],
			["Có, nhân từng ô cho ra ma trận 2×3", "Yes, elementwise multiplication gives a 2×3 matrix"],
			["Có, cho ra ma trận 3×3", "Yes, giving a 3×3 matrix"],
			["Có, cho ra ma trận 2×2", "Yes, giving a 2×2 matrix"]
		],
		"a": 0,
		"w": ["Nhân ma trận cần n của A (m×n) bằng số hàng của B. Nhân từng ô là phép Hadamard, một phép khác.", "Matrix multiplication needs the n of A (m×n) to equal the number of rows of B. Elementwise multiplication is the Hadamard product, a different operation."]
	}, {
		"q": ["A = [[2, 1, 0], [1, 0, 3]] và B là cột (1, 2, 3). Tính AB.", "A = [[2, 1, 0], [1, 0, 3]] and B is the column (1, 2, 3). Compute AB."],
		"o": [
			["(10, 4)", "(10, 4)"],
			["(3, 4)", "(3, 4)"],
			["(6, 6)", "(6, 6)"],
			["(4, 10)", "(4, 10)"]
		],
		"a": 3,
		"w": ["Hàng một: 2 + 2 + 0 = 4; hàng hai: 1 + 0 + 9 = 10. (3, 4) chỉ cộng các ô của A; (6, 6) cộng các ô của B; (10, 4) đảo thứ tự.", "Row one: 2 + 2 + 0 = 4; row two: 1 + 0 + 9 = 10. (3, 4) only sums A's cells; (6, 6) sums B's cells; (10, 4) swaps the order."]
	}],
	"math-det": [{
		"q": ["Định thức của một ma trận vuông bằng 0 nghĩa là gì?", "What does it mean when a square matrix has determinant 0?"],
		"o": [
			["Ma trận chỉ gồm toàn số 0", "The matrix contains only zeros"],
			["Diện tích bị giảm đi một nửa nhưng vẫn hoàn tác được", "Area is halved but the change can still be undone"],
			["Ma trận ép dẹp hình (mất một hướng), nên không khả nghịch", "The matrix flattens shapes (loses a direction), so it is not invertible"],
			["Ma trận nhỏ nên làm hình co lại ít", "The matrix is small so it shrinks shapes slightly"]
		],
		"a": 2,
		"w": ["Định thức 0 nghĩa là diện tích bị ép về 0 và không có ma trận hoàn tác. Ma trận khác 0 vẫn có thể có định thức 0, ví dụ [[1, 2], [2, 4]].", "A determinant of 0 means area is squashed to 0 and no undoing matrix exists. A nonzero matrix can still have determinant 0, for example [[1, 2], [2, 4]]."]
	}, {
		"q": ["Tính định thức của [[3, 1], [2, 2]].", "Compute the determinant of [[3, 1], [2, 2]]."],
		"o": [
			["8", "8"],
			["4", "4"],
			["6", "6"],
			["−4", "−4"]
		],
		"a": 1,
		"w": ["ad − bc = 3 × 2 − 1 × 2 = 4. 8 là cộng thay vì trừ; 6 chỉ lấy đường chéo chính; −4 đảo dấu hiệu.", "ad − bc = 3 × 2 − 1 × 2 = 4. 8 adds instead of subtracting; 6 takes only the main diagonal; −4 flips the subtraction."]
	}],
	"math-sys": [{
		"q": ["Hệ x + y = 3 và 2x + 2y = 6 có bao nhiêu nghiệm?", "How many solutions does the system x + y = 3 and 2x + 2y = 6 have?"],
		"o": [
			["Vô nghiệm, vì hai phương trình khác nhau về hệ số", "No solution, because the equations have different coefficients"],
			["Đúng một nghiệm là (1,5; 1,5)", "Exactly one solution, (1.5, 1.5)"],
			["Đúng hai nghiệm", "Exactly two solutions"],
			["Vô số nghiệm, vì phương trình thứ hai chỉ là gấp đôi phương trình đầu", "Infinitely many, because the second equation is just double the first"]
		],
		"a": 3,
		"w": ["Hai đường trùng nhau nên mọi điểm trên đường x + y = 3 đều thỏa cả hai. Vô nghiệm chỉ xảy ra khi các hàng mâu thuẫn, ví dụ x + y = 3 và 2x + 2y = 5.", "The two lines coincide, so every point on x + y = 3 satisfies both. No solution only happens when rows contradict, such as x + y = 3 and 2x + 2y = 5."]
	}, {
		"q": ["Giải hệ x + y = 7 và x − y = 3.", "Solve the system x + y = 7 and x − y = 3."],
		"o": [
			["x = 5, y = 2", "x = 5, y = 2"],
			["x = 2, y = 5", "x = 2, y = 5"],
			["x = 4, y = 3", "x = 4, y = 3"],
			["x = 7, y = 3", "x = 7, y = 3"]
		],
		"a": 0,
		"w": ["Cộng hai phương trình: 2x = 10 nên x = 5, rồi y = 2. Kiểm tra: 5 + 2 = 7 và 5 − 2 = 3. (4, 3) chỉ thỏa phương trình đầu.", "Adding the equations gives 2x = 10 so x = 5, then y = 2. Check: 5 + 2 = 7 and 5 − 2 = 3. (4, 3) satisfies only the first equation."]
	}],
	"math-ls": [{
		"q": ["Dữ liệu không nằm trên một đường thẳng. Đường bình phương tối thiểu được chọn theo tiêu chí nào?", "The data do not lie on one straight line. By what criterion is the least-squares line chosen?"],
		"o": [
			["Đi qua mọi điểm dữ liệu", "It passes through every data point"],
			["Làm phần dư lớn nhất nhỏ nhất có thể (chỉ để ý điểm xấu nhất)", "It makes the largest residual as small as possible (only the worst point matters)"],
			["Đi qua điểm đầu tiên và điểm cuối cùng", "It passes through the first and last points"],
			["Làm tổng bình phương các phần dư nhỏ nhất", "It minimizes the sum of squared residuals"]
		],
		"a": 3,
		"w": ["Bình phương tối thiểu giảm tổng ‖Ax − b‖², cho phần dư vuông góc với các cột của A. Không đường thẳng nào đi qua mọi điểm khi hệ vô nghiệm.", "Least squares minimizes ‖Ax − b‖², leaving residuals perpendicular to the columns of A. No line passes through every point when the system has no exact solution."]
	}, {
		"q": ["Chi 1, 2, 3 triệu và form 3, 5, 5. Với đường form = b × chi qua gốc, b theo bình phương tối thiểu là bao nhiêu?", "Spend is 1, 2, 3 million and forms are 3, 5, 5. For the line forms = b × spend through the origin, what is b by least squares?"],
		"o": [
			["2,17 (tổng form chia tổng chi: 13/6)", "2.17 (total forms over total spend: 13/6)"],
			["2,39 (trung bình các tỷ lệ form/chi)", "2.39 (average of the forms/spend ratios)"],
			["2", "2"],
			["1,67 (tỷ lệ của điểm cuối: 5/3)", "1.67 (the last point's ratio: 5/3)"]
		],
		"a": 2,
		"w": ["b = Σxy/Σx² = (3 + 10 + 15)/14 = 28/14 = 2. Phần dư 1; 1; −1 nhân cột chi cho 1 + 2 − 3 = 0, đúng điều kiện. Các đáp án kia là các tỷ lệ tiện tay chứ không làm nhỏ tổng bình phương.", "b = Σxy/Σx² = (3 + 10 + 15)/14 = 28/14 = 2. Residuals 1, 1, −1 times the spend column give 1 + 2 − 3 = 0, as required. The others are convenient ratios that do not minimize squared error."]
	}],
	"math-eig": [{
		"q": ["Vectơ riêng của một ma trận là gì?", "What is an eigenvector of a matrix?"],
		"o": [
			["Mọi véctơ bất kỳ mà ma trận biến đổi", "Any vector that the matrix transforms"],
			["Một hướng mà ma trận chỉ kéo giãn hoặc lật ngược, không làm quay: Av = λv", "A direction the matrix only stretches or flips without rotating: Av = λv"],
			["Véctơ mà ma trận giữ nguyên độ dài", "A vector whose length the matrix preserves"],
			["Véctơ mà ma trận quay đi một góc cố định", "A vector the matrix rotates by a fixed angle"]
		],
		"a": 1,
		"w": ["Vectơ riêng giữ nguyên hướng (hoặc chỉ đảo chiều), độ dài đổi theo λ. Không phải véctơ nào cũng thế, và độ dài không cần được giữ.", "An eigenvector keeps its direction (or just reverses it), and its length scales by λ. Not every vector qualifies, and length need not be preserved."]
	}, {
		"q": ["Với A = [[3, 0], [0, 2]], véctơ nào là vectơ riêng?", "For A = [[3, 0], [0, 2]], which vector is an eigenvector?"],
		"o": [
			["(0, 5), với λ = 2", "(0, 5), with λ = 2"],
			["(1, 1)", "(1, 1)"],
			["(1, 2)", "(1, 2)"],
			["(2, 1)", "(2, 1)"]
		],
		"a": 0,
		"w": ["A(0, 5) = (0, 10) = 2 × (0, 5). Còn A(1, 1) = (3, 2), A(1, 2) = (3, 4), A(2, 1) = (6, 2) đều lệch khỏi hướng ban đầu.", "A(0, 5) = (0, 10) = 2 × (0, 5). By contrast A(1, 1) = (3, 2), A(1, 2) = (3, 4) and A(2, 1) = (6, 2) all leave their original direction."]
	}],
	"math-deriv": [{
		"q": ["Đạo hàm của một hàm tại điểm x = a cho biết điều gì?", "What does the derivative of a function at x = a tell you?"],
		"o": [
			["Độ dốc trung bình của cả đường cong", "The average slope of the whole curve"],
			["Giá trị của hàm tại a", "The value of the function at a"],
			["Hiệu f(b) − f(a) chia cho khoảng cách một bước dài", "The difference f(b) − f(a) divided by a long step"],
			["Độ dốc của tiếp tuyến tại đúng điểm đó, và có thể khác ở chỗ khác", "The slope of the tangent at exactly that point, which can differ elsewhere"]
		],
		"a": 3,
		"w": ["Đạo hàm là tỷ lệ thay đổi tức thời tại một điểm. Hiệu chia cho một bước dài chỉ là độ dốc trung bình trên đoạn.", "The derivative is the instantaneous rate of change at one point. A difference over a long step is only the average slope across an interval."]
	}, {
		"q": ["form ≈ 20 + 6x − 0,1x² (x triệu chi). Độ dốc f′(x) = 6 − 0,2x. Tại x = 20, thêm một triệu chi cho khoảng bao nhiêu form?", "forms ≈ 20 + 6x − 0.1x² (x in millions of spend). The slope is f′(x) = 6 − 0.2x. At x = 20, roughly how many forms does one more million add?"],
		"o": [
			["6", "6"],
			["4", "4"],
			["2", "2"],
			["0", "0"]
		],
		"a": 2,
		"w": ["f′(20) = 6 − 0,2 × 20 = 2. Kiểm tra: f(21) − f(20) = 101,9 − 100 = 1,9. 6 là độ dốc ở x = 0, 4 là ở x = 10, 0 là ở x = 30.", "f′(20) = 6 − 0.2 × 20 = 2. Check: f(21) − f(20) = 101.9 − 100 = 1.9. 6 is the slope at x = 0, 4 at x = 10, and 0 at x = 30."]
	}],
	"math-crit": [{
		"q": ["Tại một điểm có đạo hàm bằng 0, điều nào đúng?", "At a point where the derivative equals 0, which is true?"],
		"o": [
			["Luôn là đỉnh", "It is always a peak"],
			["Có thể là đỉnh, đáy, hoặc chỗ phẳng như x³ tại 0, nên cần xem thêm xung quanh", "It could be a peak, a valley, or a flat spot like x³ at 0, so you must look around it"],
			["Luôn là đáy", "It is always a valley"],
			["Luôn là giá trị lớn nhất toàn cục", "It is always the global maximum"]
		],
		"a": 1,
		"w": ["Độ dốc bằng 0 chỉ là điều kiện cần. Hàm x³ có f′(0) = 0 nhưng tăng cả hai phía, nên không phải đỉnh hay đáy.", "A zero slope is only a necessary condition. The function x³ has f′(0) = 0 but rises on both sides, so it is neither a peak nor a valley."]
	}, {
		"q": ["Cho g(x) = x² − 8x + 3. Điểm tới hạn nằm ở đâu và là loại gì?", "Let g(x) = x² − 8x + 3. Where is the critical point and what type is it?"],
		"o": [
			["x = 4, là đáy cục bộ vì g″ = 2 > 0", "x = 4, a local minimum because g″ = 2 > 0"],
			["x = 4, là đỉnh cục bộ", "x = 4, a local maximum"],
			["x = 8, là đáy cục bộ", "x = 8, a local minimum"],
			["x = 4, là điểm yên ngựa", "x = 4, a saddle point"]
		],
		"a": 0,
		"w": ["g′(x) = 2x − 8 = 0 cho x = 4, và g″ = 2 > 0 nên cong lên, tức đáy. Yên ngựa chỉ có khi nhiều biến; x = 8 là nghiệm của x − 8 = 0, không phải của g′.", "g′(x) = 2x − 8 = 0 gives x = 4, and g″ = 2 > 0 means curving upward, a valley. Saddles only occur with several variables; x = 8 would come from x − 8 = 0, not from g′."]
	}],
	"math-part": [{
		"q": ["Trong form ≈ 20 + 6 × chi + 2 × email, hệ số 6 của chi có nghĩa chính xác là gì?", "In forms ≈ 20 + 6 × spend + 2 × email, what exactly does the coefficient 6 on spend mean?"],
		"o": [
			["Thêm 1 triệu chi thì form tăng 6 dù email thay đổi thế nào", "Adding 1 million of spend raises forms by 6 no matter how email changes"],
			["6% số form đến từ chi tiêu", "6% of forms come from spend"],
			["Chi tiêu chiếm 6/8 nguyên nhân tạo ra form", "Spend accounts for 6/8 of the cause of forms"],
			["Thêm 1 triệu chi, giữ email không đổi, form tăng khoảng 6", "Adding 1 million of spend, holding email fixed, raises forms by about 6"]
		],
		"a": 3,
		"w": ["Đạo hàm riêng giữ các biến khác cố định, nên câu «giữ email» là một phần của ý nghĩa. Nếu email đổi cùng lúc thì độ thay đổi thật của form khác 6.", "A partial derivative holds the other variables fixed, so the phrase about holding email is part of the meaning. If email changes at the same time, the real change in forms differs from 6."]
	}, {
		"q": ["f = 10 + 4x + 3y, nhưng ngoài đời y luôn bằng 2x. Form thay đổi bao nhiêu khi x tăng 1?", "f = 10 + 4x + 3y, but in practice y is always 2x. By how much does f change when x rises by 1?"],
		"o": [
			["10", "10"],
			["4", "4"],
			["7", "7"],
			["14", "14"]
		],
		"a": 0,
		"w": ["Thay y = 2x: f = 10 + 4x + 6x = 10 + 10x, nên tăng 10. 4 là đạo hàm riêng khi giữ y cố định; 7 là cộng 4 + 3 mà quên y đổi gấp đôi x; 14 không có cơ sở.", "Substituting y = 2x gives f = 10 + 4x + 6x = 10 + 10x, so it rises by 10. 4 is the partial derivative with y held fixed; 7 adds 4 + 3 and forgets y moves twice as fast; 14 has no basis."]
	}],
	"math-grad": [{
		"q": ["Muốn giảm hàm chi phí J bằng gradient descent, ta bước theo hướng nào?", "To reduce a cost function J with gradient descent, which direction do you step?"],
		"o": [
			["Cùng hướng gradient của J", "Along the gradient of J"],
			["Ngược hướng gradient của J", "Opposite to the gradient of J"],
			["Vuông góc với gradient của J", "Perpendicular to the gradient of J"],
			["Một hướng ngẫu nhiên bất kỳ", "Any random direction"]
		],
		"a": 1,
		"w": ["Gradient chỉ hướng J tăng nhanh nhất, nên giảm chi phí phải đi ngược lại: w ← w − η∇J. Đi cùng hướng sẽ làm chi phí tăng.", "The gradient points where J rises fastest, so reducing cost means stepping the other way: w ← w − η∇J. Going along it would increase the cost."]
	}, {
		"q": ["J(w) = (w − 4)², bắt đầu w = 6, bước học η = 0,1. Sau một bước gradient descent, w mới bằng bao nhiêu?", "J(w) = (w − 4)², start at w = 6, learning rate η = 0.1. What is w after one gradient descent step?"],
		"o": [
			["6,4", "6.4"],
			["2", "2"],
			["5,6", "5.6"],
			["5,8", "5.8"]
		],
		"a": 2,
		"w": ["∇J = 2(w − 4) = 4, nên w mới = 6 − 0,1 × 4 = 5,6. 6,4 đi nhầm chiều; 2 quên nhân η; 5,8 dùng w − 4 thay cho 2(w − 4).", "∇J = 2(w − 4) = 4, so new w = 6 − 0.1 × 4 = 5.6. 6.4 steps the wrong way; 2 forgets η; 5.8 uses w − 4 instead of 2(w − 4)."]
	}],
	"math-jac": [{
		"q": ["Một hàm có 2 nút vào (chi, email) và 3 đầu ra. Jacobian có cỡ nào?", "A function has 2 inputs (spend, email) and 3 outputs. What size is its Jacobian?"],
		"o": [
			["3×2 (hàng theo đầu ra, cột theo nút vào)", "3×2 (rows by output, columns by input)"],
			["2×3", "2×3"],
			["2×2", "2×2"],
			["3×3", "3×3"]
		],
		"a": 0,
		"w": ["Jacobian có m hàng (số đầu ra) và n cột (số nút vào), ô (i, j) là ∂f_i/∂x_j. Vậy là 3×2, tức 6 đạo hàm riêng.", "The Jacobian has m rows (outputs) and n columns (inputs), with entry (i, j) equal to ∂f_i/∂x_j. That is 3×2, or 6 partial derivatives."]
	}, {
		"q": ["form = 20 + 6x + 2y và lead = 8 + 2x + y có Jacobian J = [[6, 2], [2, 1]]. Với bước nhỏ Δ = (2, 1), J·Δ bằng bao nhiêu?", "form = 20 + 6x + 2y and lead = 8 + 2x + y have Jacobian J = [[6, 2], [2, 1]]. For a small step Δ = (2, 1), what is J·Δ?"],
		"o": [
			["(5, 14)", "(5, 14)"],
			["(8, 3)", "(8, 3)"],
			["(12, 2)", "(12, 2)"],
			["(14, 5): form tăng khoảng 14, lead tăng khoảng 5", "(14, 5): forms rise about 14, leads rise about 5"]
		],
		"a": 3,
		"w": ["Hàng một: 6 × 2 + 2 × 1 = 14; hàng hai: 2 × 2 + 1 × 1 = 5. (8, 3) cộng hệ số mà không nhân với bước; (12, 2) chỉ lấy ảnh hưởng của x.", "Row one: 6 × 2 + 2 × 1 = 14; row two: 2 × 2 + 1 × 1 = 5. (8, 3) adds coefficients without multiplying by the step; (12, 2) uses only the effect of x."]
	}],
	"math-hess": [{
		"q": ["f(x, y) = x² − y². Tại gốc (0, 0) gradient bằng 0. Kết luận nào đúng?", "f(x, y) = x² − y². At the origin (0, 0) the gradient is 0. Which conclusion is right?"],
		"o": [
			["Đáy cục bộ, vì có đạo hàm bậc hai dương theo x", "A local minimum, because the second derivative in x is positive"],
			["Đỉnh cục bộ, vì gradient bằng 0", "A local maximum, because the gradient is 0"],
			["Điểm yên ngựa, vì Hessian có một số dương (2) và một số âm (−2)", "A saddle point, because the Hessian has one positive (2) and one negative (−2) entry"],
			["Không thể có điểm đặc biệt nào, vì hàm trơn", "There can be no special point because the function is smooth"]
		],
		"a": 2,
		"w": ["Đáy cần cong lên theo mọi hướng. Ở đây cong lên theo x nhưng cong xuống theo y, nên là yên ngựa; một đạo hàm bậc hai dương không đủ khi còn nút khác.", "A valley needs upward curvature in every direction. Here it curves up in x but down in y, so it is a saddle; one positive second derivative is not enough when other variables exist."]
	}, {
		"q": ["f = 3x² + y². Hessian và kết luận tại điểm tới hạn (0, 0) là gì?", "f = 3x² + y². What is the Hessian and conclusion at the critical point (0, 0)?"],
		"o": [
			["[[3, 0], [0, 1]], đáy cục bộ", "[[3, 0], [0, 1]], a local minimum"],
			["[[6, 0], [0, 2]], đáy cục bộ", "[[6, 0], [0, 2]], a local minimum"],
			["[[6, 0], [0, 2]], yên ngựa", "[[6, 0], [0, 2]], a saddle point"],
			["[[6, 2], [2, 6]], đáy cục bộ", "[[6, 2], [2, 6]], a local minimum"]
		],
		"a": 1,
		"w": ["∂²f/∂x² = 6, ∂²f/∂y² = 2, đạo hàm hỗn hợp bằng 0, và cả hai số dương nên là đáy. [[3, 0], [0, 1]] quên nhân hệ số 2 khi đạo hàm lần hai; hai số dương không thể là yên ngựa.", "∂²f/∂x² = 6, ∂²f/∂y² = 2, the mixed derivative is 0, and both are positive so it is a valley. [[3, 0], [0, 1]] forgets the factor 2 from differentiating twice; two positive entries cannot be a saddle."]
	}],
	"math-taylor": [{
		"q": ["Xấp xỉ tuyến tính (Taylor bậc một) quanh điểm a đáng tin nhất khi nào?", "When is the linear (first-order Taylor) approximation around a most reliable?"],
		"o": [
			["Khi x rất xa a, vì đường cong dần thành đường thẳng", "When x is far from a, because the curve gradually becomes a straight line"],
			["Khi x gần a; càng xa a thì phần bị bỏ đi càng lớn", "When x is close to a; the farther from a, the larger the discarded part"],
			["Khi viết thật nhiều chữ số lẻ cho hệ số", "When the coefficients are written with many decimals"],
			["Ở mọi x, miễn là hàm có đạo hàm tại a", "At every x, as long as the function has a derivative at a"]
		],
		"a": 1,
		"w": ["Phần dư của Taylor nhỏ khi x gần a. Thêm chữ số lẻ không làm tiếp tuyến bớt sai ở xa, và tồn tại đạo hàm tại a không đảm bảo đúng ở mọi nơi.", "The Taylor remainder is small when x is near a. Extra decimals do not make the tangent less wrong far away, and having a derivative at a does not guarantee accuracy everywhere."]
	}, {
		"q": ["f(x) = 20 + 6x − 0,1x², a = 10: f(10) = 70, f′(10) = 4. Dùng xấp xỉ tuyến tính ước lượng f(12).", "f(x) = 20 + 6x − 0.1x², a = 10: f(10) = 70, f′(10) = 4. Use the linear approximation to estimate f(12)."],
		"o": [
			["77,6", "77.6"],
			["74", "74"],
			["78", "78"],
			["82", "82"]
		],
		"a": 2,
		"w": ["70 + 4 × (12 − 10) = 78. Giá trị thật là 77,6 nên sai lệch nhỏ vì gần a, nhưng đó là đáp án của hàm đúng chứ không phải của xấp xỉ. 82 dùng nhầm độ dốc 6; 74 chỉ đi một bước.", "70 + 4 × (12 − 10) = 78. The true value is 77.6, a small error since 12 is near a, but that is the exact function, not the approximation. 82 wrongly uses slope 6; 74 takes only one step."]
	}],
	"math-p": [{
		"q": ["Phát biểu nào về xác suất là đúng?", "Which statement about probability is correct?"],
		"o": [
			["45 form là xác suất của form", "45 forms is the probability of a form"],
			["Xác suất 0,03 nghĩa là cứ 3 click thì có 1 form", "A probability of 0.03 means 1 form for every 3 clicks"],
			["Xác suất của một biến cố có thể lớn hơn 1 nếu có nhiều click", "The probability of an event can exceed 1 when there are many clicks"],
			["Xác suất là một số từ 0 đến 1 và luôn phải nói rõ mẫu số", "Probability is a number between 0 and 1 and always needs a stated denominator"]
		],
		"a": 3,
		"w": ["Xác suất là tỷ lệ trên toàn bộ tập hợp, nên nằm trong [0, 1]. 0,03 nghĩa là khoảng 3 form trên 100 click; 45 là số đếm chứ chưa chia cho mẫu số.", "Probability is a ratio over the whole set, so it lies in [0, 1]. 0.03 means about 3 forms per 100 clicks; 45 is a count that has not been divided by a denominator."]
	}, {
		"q": ["Có 90 form trên 1.500 click. Xác suất một click không có form là bao nhiêu?", "There are 90 forms from 1,500 clicks. What is the probability a click has no form?"],
		"o": [
			["0,94", "0.94"],
			["0,06", "0.06"],
			["0,9", "0.9"],
			["1,06", "1.06"]
		],
		"a": 0,
		"w": ["P(form) = 90/1.500 = 0,06 nên P(không form) = 1 − 0,06 = 0,94. 0,06 là xác suất có form; 1,06 vượt 1 nên không thể là xác suất.", "P(form) = 90/1,500 = 0.06 so P(no form) = 1 − 0.06 = 0.94. 0.06 is the chance of a form; 1.06 exceeds 1 so it cannot be a probability."]
	}],
	"math-or": [{
		"q": ["Vì sao P(A hoặc B) = P(A) + P(B) − P(A và B) phải trừ số hạng cuối?", "Why must P(A or B) = P(A) + P(B) − P(A and B) subtract the last term?"],
		"o": [
			["Vì A và B luôn độc lập", "Because A and B are always independent"],
			["Để kết quả luôn nhỏ hơn 0,5", "So the result is always below 0.5"],
			["Vì phải chia kết quả cho 2", "Because the result must be divided by 2"],
			["Vì phần chồng nhau của A và B đã bị đếm hai lần khi cộng", "Because the overlap of A and B was counted twice in the sum"]
		],
		"a": 3,
		"w": ["Khách vừa thuộc A vừa thuộc B nằm trong cả P(A) lẫn P(B), nên phải trừ bớt một lần. Công thức không đòi độc lập và không ép kết quả nhỏ hơn 0,5.", "People in both A and B sit inside both P(A) and P(B), so one copy must be removed. The formula does not require independence and does not force the result below 0.5."]
	}, {
		"q": ["35% khách đến từ Meta, 15% có form, 6% vừa từ Meta vừa có form. Xác suất «từ Meta hoặc có form» là bao nhiêu?", "35% of visitors come from Meta, 15% submit a form, and 6% are both. What is the probability of Meta or form?"],
		"o": [
			["0,44", "0.44"],
			["0,50", "0.50"],
			["0,56", "0.56"],
			["0,38", "0.38"]
		],
		"a": 0,
		"w": ["0,35 + 0,15 − 0,06 = 0,44. 0,50 quên trừ phần chồng; 0,56 lại cộng thêm phần chồng; 0,38 trừ phần chồng hai lần.", "0.35 + 0.15 − 0.06 = 0.44. 0.50 forgets to subtract the overlap; 0.56 adds the overlap again; 0.38 subtracts it twice."]
	}],
	"math-and": [{
		"q": ["40% khách đến từ GDN, và trong số đó 10% để lại form. Con số 10% là gì?", "40% of visitors come from GDN, and 10% of those leave a form. What is the 10%?"],
		"o": [
			["Xác suất vừa từ GDN vừa có form trên cả tập khách", "The probability of GDN and form across all visitors"],
			["Tỷ lệ form trong riêng nhóm GDN, tức P(form, biết GDN)", "The form rate within the GDN group only, i.e. P(form given GDN)"],
			["Tỷ lệ form trên toàn bộ khách", "The form rate across all visitors"],
			["Tỷ lệ khách từ GDN trong số những người có form", "The share of GDN visitors among those who left a form"]
		],
		"a": 1,
		"w": ["10% tính trên mẫu số là nhóm GDN (điều kiện), nên là xác suất có điều kiện. Phần vừa GDN vừa form trên cả tập là 0,40 × 0,10 = 0,04.", "The 10% is taken over the GDN group (the condition), so it is a conditional probability. The share who are GDN and form across everyone is 0.40 × 0.10 = 0.04."]
	}, {
		"q": ["25% khách đến từ TikTok, trong số đó 8% có form. Xác suất một khách vừa từ TikTok vừa có form là bao nhiêu?", "25% of visitors come from TikTok and 8% of them submit a form. What is the probability a visitor is from TikTok and submits a form?"],
		"o": [
			["0,08", "0.08"],
			["0,33", "0.33"],
			["0,02", "0.02"],
			["0,17", "0.17"]
		],
		"a": 2,
		"w": ["P(A và B) = P(A) × P(B, biết A) = 0,25 × 0,08 = 0,02. 0,08 là tỷ lệ trong riêng nhóm TikTok; 0,33 và 0,17 là cộng hoặc trừ thay vì nhân.", "P(A and B) = P(A) × P(B given A) = 0.25 × 0.08 = 0.02. 0.08 is the rate inside the TikTok group alone; 0.33 and 0.17 add or subtract instead of multiplying."]
	}],
	"math-perm": [{
		"q": ["Tình huống nào phù hợp với hoán vị?", "Which situation calls for a permutation?"],
		"o": [
			["Chọn 3 KOL cùng ngồi một bàn, vị trí ngồi không quan trọng", "Choosing 3 KOLs to sit at one table, seating order irrelevant"],
			["Chọn 3 mẫu thử từ 8 mẫu để gửi đi cùng một hộp", "Choosing 3 of 8 samples to put in the same box"],
			["Chọn 3 kênh để chia ngân sách bằng nhau", "Choosing 3 channels to split the budget equally"],
			["Xếp 3 KOL vào 3 vai khác nhau: mở màn, giữa, kết", "Assigning 3 KOLs to 3 different roles: opening, middle, closing"]
		],
		"a": 3,
		"w": ["Hoán vị dùng khi đổi thứ tự cho ra kết quả khác, như các vai khác nhau. Ba phương án còn lại chỉ cần đúng bộ, nên dùng tổ hợp.", "Permutations apply when swapping order gives a different outcome, like distinct roles. The other three only need the right set, so they call for combinations."]
	}, {
		"q": ["Có 6 KOL, cần chọn 3 người và thứ tự phát biểu cũng tính. Có bao nhiêu cách?", "There are 6 KOLs and you need 3 speakers whose order also counts. How many ways are there?"],
		"o": [
			["20", "20"],
			["120", "120"],
			["216", "216"],
			["720", "720"]
		],
		"a": 1,
		"w": ["P(6, 3) = 6!/3! = 6 × 5 × 4 = 120. 20 là số tổ hợp (không tính thứ tự); 216 = 6³ cho phép lặp; 720 = 6! xếp cả 6 người.", "P(6, 3) = 6!/3! = 6 × 5 × 4 = 120. 20 is the combination count (order ignored); 216 = 6³ allows repeats; 720 = 6! arranges all 6 people."]
	}],
	"math-comb": [{
		"q": ["Vì sao C(n, k) bằng P(n, k) chia cho k!?", "Why does C(n, k) equal P(n, k) divided by k!?"],
		"o": [
			["Vì phải loại các bộ có phần tử trùng nhau", "Because sets with repeated items must be removed"],
			["Vì n! luôn lớn hơn k! nên cần chia để thu nhỏ", "Because n! is always larger than k!, so dividing shrinks it"],
			["Vì mỗi bộ k phần tử đã bị hoán vị đếm k! lần với các thứ tự khác nhau", "Because the permutation count counted each k-item set k! times in different orders"],
			["Vì tổ hợp chỉ tính các bộ có đúng k người nổi tiếng", "Because combinations count only sets with exactly k famous people"]
		],
		"a": 2,
		"w": ["Một bộ ba người có 3! = 6 cách xếp, và hoán vị đếm cả sáu. Chia k! gộp chúng thành một bộ.", "A set of three people has 3! = 6 orderings and the permutation count includes all six. Dividing by k! merges them into one set."]
	}, {
		"q": ["Chọn 2 trong 10 mẫu để thử (không quan trọng thứ tự). Có bao nhiêu bộ?", "Choose 2 of 10 samples to test (order does not matter). How many sets are there?"],
		"o": [
			["45", "45"],
			["90", "90"],
			["20", "20"],
			["100", "100"]
		],
		"a": 0,
		"w": ["C(10, 2) = 10 × 9 / 2 = 45. 90 là hoán vị (tính thứ tự); 20 là 10 × 2; 100 là 10² cho phép lặp.", "C(10, 2) = 10 × 9 / 2 = 45. 90 is the permutation count (order matters); 20 is 10 × 2; 100 is 10² allowing repeats."]
	}],
	"math-disj": [{
		"q": ["P(GDN) = 0,4, P(TikTok) = 0,3 và mỗi click chỉ đến từ một kênh. Hai biến cố này có độc lập không?", "P(GDN) = 0.4, P(TikTok) = 0.3 and each click comes from one channel only. Are the two events independent?"],
		"o": [
			["Không, vì P(giao) = 0 còn P(GDN) × P(TikTok) = 0,12", "No, because P(both) = 0 while P(GDN) × P(TikTok) = 0.12"],
			["Có, vì phần giao bằng 0 nên chúng không ảnh hưởng nhau", "Yes, because the overlap is 0 so they do not affect each other"],
			["Có, vì chúng không xảy ra cùng lúc", "Yes, because they never happen together"],
			["Không, vì P(giao) phải bằng 0,12", "No, because P(both) must equal 0.12"]
		],
		"a": 0,
		"w": ["Độc lập cần P(giao) = P(A) × P(B) = 0,12, nhưng giao bằng 0. Biết click là GDN thì chắc chắn không phải TikTok, nên chúng phụ thuộc mạnh.", "Independence needs P(both) = P(A) × P(B) = 0.12, but the overlap is 0. Knowing a click is GDN guarantees it is not TikTok, so they are strongly dependent."]
	}, {
		"q": ["Cũng với các số trên (0,4 và 0,3, mỗi click một kênh), xác suất click đến từ GDN hoặc TikTok là bao nhiêu?", "With the same numbers (0.4 and 0.3, one channel per click), what is the probability a click comes from GDN or TikTok?"],
		"o": [
			["0,12", "0.12"],
			["0,58", "0.58"],
			["0,3", "0.3"],
			["0,7", "0.7"]
		],
		"a": 3,
		"w": ["Hai biến cố rời nhau nên P(hoặc) = 0,4 + 0,3 = 0,7. 0,12 là nhân như thể độc lập; 0,58 trừ phần giao giả định 0,12 dù thật ra giao bằng 0.", "The events are disjoint so P(either) = 0.4 + 0.3 = 0.7. 0.12 multiplies as if independent; 0.58 subtracts an assumed overlap of 0.12 even though the real overlap is 0."]
	}],
	"math-kind": [{
		"q": ["12 form trên 400 phiên cho 3%. Cách nói nào đúng nhất?", "12 forms from 400 sessions gives 3%. Which wording is most accurate?"],
		"o": [
			["Đó là xác suất cổ điển, vì ta đã đếm", "It is a classical probability, because we counted"],
			["Đó là mức tin chủ quan của người làm báo cáo", "It is the report author's subjective belief"],
			["Đó là tần suất của mẫu này, chưa phải xác suất cổ điển của mọi khách", "It is the frequency in this sample, not the classical probability for all visitors"],
			["Đó là quy luật chắc chắn: mọi khách đều có 3% cơ hội", "It is a fixed law: every visitor has exactly a 3% chance"]
		],
		"a": 2,
		"w": ["Tỷ lệ mẫu mô tả những gì đã quan sát. Xác suất cổ điển cần các kết quả đồng khả năng như xúc xắc cân đối, và tỷ lệ mẫu chưa chứng minh cơ hội đồng đều cho mọi khách.", "A sample rate describes what was observed. Classical probability needs equally likely outcomes like a fair die, and a sample rate does not prove equal chances for every visitor."]
	}, {
		"q": ["Trường hợp nào là xác suất cổ điển?", "Which case is a classical probability?"],
		"o": [
			["Tỷ lệ mở email tuần trước là 22%", "Last week's email open rate was 22%"],
			["Gieo một xúc xắc 6 mặt cân đối ra mặt 6: 1/6", "A fair 6-sided die landing on 6: 1/6"],
			["Tôi tin 70% khách này sẽ quay lại", "I believe this customer has a 70% chance of returning"],
			["Tỷ lệ chuyển đổi của chiến dịch là 3%", "The campaign's conversion rate is 3%"]
		],
		"a": 1,
		"w": ["Xác suất cổ điển đến từ các kết quả đồng khả năng. 22% và 3% là tần suất quan sát, còn 70% cho một khách chưa có lịch sử là mức tin.", "Classical probability comes from equally likely outcomes. 22% and 3% are observed frequencies, while 70% for a customer with no history is a degree of belief."]
	}],
	"ds-type": [{
		"q": ["Cột «số sao đánh giá từ 1 đến 5» thuộc kiểu dữ liệu nào?", "What data type is a column of star ratings from 1 to 5?"],
		"o": [
			["Số liên tục, nên khoảng cách luôn đều nhau", "Continuous numeric, so the gaps are always equal"],
			["Chữ không thứ tự (nominal), nên không có hướng", "Nominal, so there is no direction"],
			["Nhị phân, vì chỉ có tốt hoặc xấu", "Binary, because it only means good or bad"],
			["Chữ có thứ bậc (ordinal): có hướng nhưng khoảng giữa các bậc chưa chắc bằng nhau", "Ordinal: it has a direction but the gaps between levels are not necessarily equal"]
		],
		"a": 3,
		"w": ["Sao có thứ tự rõ ràng nhưng bước từ 1 lên 2 chưa chắc bằng từ 4 lên 5, nên lấy trung bình là thêm một giả định. Nominal thì không có thứ tự.", "Stars have a clear order but going from 1 to 2 is not necessarily the same as 4 to 5, so averaging adds an assumption. Nominal data has no order."]
	}, {
		"q": ["Cột kênh được mã hóa Google = 1, Meta = 2, TikTok = 3 và có người báo trung bình mã là 2,0. Nhận xét đúng là gì?", "A channel column is coded Google = 1, Meta = 2, TikTok = 3 and someone reports an average code of 2.0. What is the right comment?"],
		"o": [
			["Vô nghĩa, vì kênh là chữ không thứ tự; nên đếm tần suất hoặc dùng mode", "Meaningless, because channel is nominal; count frequencies or use the mode instead"],
			["Khách trung bình đến từ Meta", "The average customer comes from Meta"],
			["Hợp lý, vì cột đã là số nên trung bình luôn có nghĩa", "Reasonable, since the column is numeric so averages always mean something"],
			["Meta là kênh tốt nhất vì nằm ở giữa", "Meta is the best channel because it sits in the middle"]
		],
		"a": 0,
		"w": ["Mã 1, 2, 3 chỉ là nhãn, không có khoảng cách thật. Máy vẫn ra số 2,0 nhưng con số không mang ý nghĩa.", "Codes 1, 2, 3 are only labels with no real distances. The machine still returns 2.0 but it carries no meaning."]
	}],
	"ds-center": [{
		"q": ["Khi có một tuần form cao bất thường, đại lượng nào gần như đứng yên?", "When one week has an unusually high form count, which measure barely moves?"],
		"o": [
			["Trung bình", "The mean"],
			["Trung vị", "The median"],
			["Tổng số form", "The total number of forms"],
			["Trung bình và trung vị thay đổi như nhau", "The mean and median change equally"]
		],
		"a": 1,
		"w": ["Trung vị chỉ phụ thuộc thứ tự giữa dãy nên ít bị giá trị cực đoan kéo. Trung bình và tổng đều cộng cả giá trị đó vào.", "The median depends only on the middle of the sorted data so extreme values pull it little. The mean and total both include that value."]
	}, {
		"q": ["Số form 5 tuần: 2, 3, 3, 4, 18. Trung bình và trung vị là bao nhiêu?", "Forms over 5 weeks: 2, 3, 3, 4, 18. What are the mean and median?"],
		"o": [
			["Trung bình 3, trung vị 6", "Mean 3, median 6"],
			["Trung bình 6, trung vị 4", "Mean 6, median 4"],
			["Trung bình 6, trung vị 3", "Mean 6, median 3"],
			["Trung bình 3, trung vị 3", "Mean 3, median 3"]
		],
		"a": 2,
		"w": ["Tổng 30 chia 5 = 6. Dãy đã sắp có số giữa là 3. Giá trị 18 kéo trung bình lên 6 nhưng không đụng đến trung vị; 4 là giá trị đứng thứ tư, không phải số giữa.", "The total 30 divided by 5 is 6. The sorted middle value is 3. The 18 pulls the mean up to 6 without touching the median; 4 is the fourth value, not the middle."]
	}],
	"ds-mode": [{
		"q": ["Dãy 3, 5, 5, 7, 7, 9 có mode là gì?", "What is the mode of 3, 5, 5, 7, 7, 9?"],
		"o": [
			["Chỉ 5", "Only 5"],
			["5 và 7 (hai mode)", "5 and 7 (two modes)"],
			["6", "6"],
			["Không có mode", "There is no mode"]
		],
		"a": 1,
		"w": ["5 và 7 cùng xuất hiện hai lần, nhiều nhất, nên có hai mode. 6 vừa là trung bình vừa là trung vị nhưng không xuất hiện trong dãy.", "5 and 7 each appear twice, the most, so there are two modes. 6 is both the mean and the median but does not appear in the data."]
	}, {
		"q": ["360 khách: Google 120, Meta 150, TikTok 90. Mode của cột kênh là gì?", "360 visitors: Google 120, Meta 150, TikTok 90. What is the mode of the channel column?"],
		"o": [
			["150", "150"],
			["Google", "Google"],
			["Không có mode vì Meta chưa chiếm quá nửa", "No mode, because Meta does not exceed half"],
			["Meta", "Meta"]
		],
		"a": 3,
		"w": ["Mode là giá trị xuất hiện nhiều nhất, tức Meta (150 lần, khoảng 42%). 150 là tần suất chứ không phải giá trị; mode không cần chiếm quá nửa.", "The mode is the most frequent value, so Meta (150 times, about 42%). 150 is the frequency, not the value; a mode does not need a majority."]
	}],
	"ds-q": [{
		"q": ["Q1 (tứ phân vị thứ nhất) trong một dãy đã sắp xếp có nghĩa là gì?", "What does Q1 (the first quartile) of a sorted series mean?"],
		"o": [
			["Mức mà khoảng 25% số giá trị nằm từ đó trở xuống", "A level at or below which about 25% of the values fall"],
			["Con số 25 trong dãy", "The number 25 in the series"],
			["25% của giá trị trung bình", "25% of the mean"],
			["25% của giá trị lớn nhất", "25% of the maximum"]
		],
		"a": 0,
		"w": ["Q1 là một vị trí trên dãy đã sắp, chia khoảng 25% giá trị về phía dưới. Nó không phải số 25 và không phải 25% của trung bình hay của max.", "Q1 is a position in the sorted series with about 25% of values below it. It is not the number 25 and not 25% of the mean or the max."]
	}, {
		"q": ["Dãy 3, 5, 7, 9, 11, 13, 15, 17 (đã sắp). Chia hai nửa theo cách trong thẻ, IQR bằng bao nhiêu?", "Series 3, 5, 7, 9, 11, 13, 15, 17 (sorted). Splitting into halves as in the card, what is the IQR?"],
		"o": [
			["14", "14"],
			["4", "4"],
			["8", "8"],
			["6", "6"]
		],
		"a": 2,
		"w": ["Nửa dưới 3, 5, 7, 9 có trung vị 6 nên Q1 = 6. Nửa trên 11, 13, 15, 17 có trung vị 14 nên Q3 = 14. IQR = 14 − 6 = 8. Chọn 14 là nhầm Q3 với IQR.", "Lower half 3, 5, 7, 9 has median 6 so Q1 = 6. Upper half 11, 13, 15, 17 has median 14 so Q3 = 14. IQR = 14 − 6 = 8. Picking 14 confuses Q3 with the IQR."]
	}],
	"ds-pct": [{
		"q": ["Vì sao hai phần mềm có thể cho phân vị thứ 90 khác nhau trên cùng một dãy nhỏ?", "Why can two programs give different 90th percentiles on the same small series?"],
		"o": [
			["Vì một trong hai phần mềm chắc chắn bị lỗi", "One of the two programs must have a bug"],
			["Vì phân vị thứ 90 luôn bằng 0,9 nhân với số lớn nhất", "The 90th percentile always equals 0.9 times the maximum"],
			["Vì chúng dùng quy ước cắt khác nhau, ví dụ nội suy hoặc lấy quan sát bậc gần nhất", "They use different conventions, such as interpolation or nearest-rank"],
			["Vì một phần mềm tự động sắp dãy còn phần mềm kia thì không", "One program sorts the series automatically and the other does not"]
		],
		"a": 2,
		"w": ["Không có một công thức phân vị duy nhất; với mẫu nhỏ các quy ước lệch nhau rõ. Vì vậy cần ghi tên cách cắt, và không phải cứ khác nhau là có lỗi.", "There is no single percentile formula; on small samples conventions differ visibly. So name the method used; a difference does not imply a bug."]
	}, {
		"q": ["Dãy 10, 20, 30, 40. Theo nội suy kiểu PERCENTILE.INC, phân vị thứ 90 là bao nhiêu?", "Series 10, 20, 30, 40. With PERCENTILE.INC-style interpolation, what is the 90th percentile?"],
		"o": [
			["36", "36"],
			["37", "37"],
			["40", "40"],
			["30", "30"]
		],
		"a": 1,
		"w": ["Vị trí = 1 + 0,9 × 3 = 3,7, nằm giữa số thứ 3 (30) và số thứ 4 (40): 30 + 0,7 × 10 = 37. Số 36 là 0,9 × max, một phép sai thường gặp.", "Position = 1 + 0.9 × 3 = 3.7, between the 3rd (30) and 4th (40) values: 30 + 0.7 × 10 = 37. 36 is 0.9 × max, a common mistake."]
	}],
	"ds-var": [{
		"q": ["Vì sao phương sai mẫu chia cho n − 1 thay vì n?", "Why is the sample variance divided by n − 1 instead of n?"],
		"o": [
			["Để phương sai có cùng đơn vị với dữ liệu gốc", "So the variance has the same unit as the raw data"],
			["Vì một điểm dữ liệu luôn là điểm ngoại lai và phải bỏ đi", "Because one data point is always an outlier and must be dropped"],
			["Vì mẫu nhỏ hơn tổng thể nên cần chia cho số nhỏ hơn cho an toàn", "Because the sample is smaller than the population, so a smaller divisor is safer"],
			["Vì trung bình mẫu bám sát chính mẫu nên chia n sẽ ước lượng thấp hơn phương sai thật", "Because the sample mean hugs the sample, so dividing by n underestimates the true variance"]
		],
		"a": 3,
		"w": ["Đó là hiệu chỉnh Bessel: độ lệch quanh trung bình mẫu nhỏ hơn quanh trung bình thật. Đổi đơn vị là việc của phép căn, không phải của n − 1.", "This is Bessel's correction: deviations around the sample mean are smaller than around the true mean. Restoring the unit is the job of the square root, not of n − 1."]
	}, {
		"q": ["Mẫu 1, 3, 5 (trung bình 3). Phương sai mẫu bằng bao nhiêu?", "Sample 1, 3, 5 (mean 3). What is the sample variance?"],
		"o": [
			["2,67", "2.67"],
			["4", "4"],
			["8", "8"],
			["2", "2"]
		],
		"a": 1,
		"w": ["Tổng bình phương độ lệch = 4 + 0 + 4 = 8; chia n − 1 = 2 được 4. 2,67 là 8/3 (chia n, kiểu tổng thể); 8 chưa chia; 2 là độ lệch chuẩn.", "Sum of squared deviations = 4 + 0 + 4 = 8; dividing by n − 1 = 2 gives 4. 2.67 is 8/3 (population style); 8 is undivided; 2 is the standard deviation."]
	}],
	"ds-sd": [{
		"q": ["Doanh thu đo bằng triệu đồng. Độ lệch chuẩn của nó có đơn vị gì?", "Revenue is measured in million VND. What is the unit of its standard deviation?"],
		"o": [
			["Triệu đồng bình phương", "Million VND squared"],
			["Không có đơn vị", "No unit"],
			["Triệu đồng, cùng đơn vị với dữ liệu", "Million VND, the same unit as the data"],
			["Phần trăm", "Percent"]
		],
		"a": 2,
		"w": ["Căn bậc hai đưa phương sai (đơn vị bình phương) về đơn vị gốc. Triệu đồng bình phương là đơn vị của phương sai.", "The square root brings the variance (squared unit) back to the original unit. Squared million VND is the unit of the variance."]
	}, {
		"q": ["Hai phần độc lập có độ lệch chuẩn 3 và 4. Độ lệch chuẩn của tổng hai phần là bao nhiêu?", "Two independent parts have standard deviations 3 and 4. What is the standard deviation of their sum?"],
		"o": [
			["5", "5"],
			["7", "7"],
			["25", "25"],
			["3,5", "3.5"]
		],
		"a": 0,
		"w": ["Phương sai cộng được: 9 + 16 = 25, căn được 5. Cộng thẳng độ lệch chuẩn (3 + 4 = 7) là sai; 25 là phương sai, không phải độ lệch chuẩn.", "Variances add: 9 + 16 = 25, and the root is 5. Adding SDs directly (3 + 4 = 7) is wrong; 25 is the variance, not the SD."]
	}],
	"ds-range": [{
		"q": ["Điều nào đúng về khoảng biến thiên (range)?", "Which statement about the range is correct?"],
		"o": [
			["Chỉ phụ thuộc giá trị lớn nhất và nhỏ nhất nên rất nhạy với một lỗi gõ", "It depends only on the max and min, so it is very sensitive to a typo"],
			["Dùng độ lệch của mọi điểm nên bền vững với ngoại lai", "It uses every point's deviation, so it is robust to outliers"],
			["Luôn bằng hai lần độ lệch chuẩn", "It always equals twice the standard deviation"],
			["Có thể thay thế hoàn toàn phương sai", "It can fully replace the variance"]
		],
		"a": 0,
		"w": ["Range = max − min, bỏ qua mọi điểm ở giữa. Vì thế một giá trị gõ sai kéo nó đi rất xa, và nó không thay được phương sai.", "Range = max − min and ignores everything in between. So one mistyped value drags it far, and it cannot replace the variance."]
	}, {
		"q": ["Form theo tuần: 10, 12, 11, 13, 12. Một người gõ nhầm 12 thành 120 ở tuần cuối. Range mới là bao nhiêu?", "Weekly forms: 10, 12, 11, 13, 12. Someone mistypes the last 12 as 120. What is the new range?"],
		"o": [
			["3", "3"],
			["108", "108"],
			["55", "55"],
			["110", "110"]
		],
		"a": 3,
		"w": ["Max = 120, min = 10 nên range = 110 (từ 3 lên 110 dù bốn tuần kia không đổi). 108 trừ nhầm cho 12.", "Max = 120, min = 10, so range = 110 (from 3, even though the other four weeks did not change). 108 subtracts 12 by mistake."]
	}],
	"ds-mad": [{
		"q": ["MAD trong thẻ này là gì?", "What is the MAD defined as in this card?"],
		"o": [
			["Trung bình của giá trị tuyệt đối (x − trung bình), không bình phương và không lấy căn", "The mean of the absolute value of (x − mean), with no squaring and no square root"],
			["Căn bậc hai của phương sai mẫu", "The square root of the sample variance"],
			["Phương sai chia cho n", "The variance divided by n"],
			["Hiệu giữa giá trị lớn nhất và nhỏ nhất", "The difference between the maximum and the minimum"]
		],
		"a": 0,
		"w": ["MAD cộng độ lệch đã bỏ dấu rồi chia n. Căn của phương sai mới là độ lệch chuẩn; hai số này không đổi cho nhau bằng một lần lấy căn.", "MAD sums unsigned deviations and divides by n. The root of the variance is the standard deviation; the two do not convert into each other by one root."]
	}, {
		"q": ["Dãy 2, 4, 6 (trung bình 4). MAD bằng bao nhiêu?", "Series 2, 4, 6 (mean 4). What is the MAD?"],
		"o": [
			["2", "2"],
			["4", "4"],
			["8/3 ≈ 2,67", "8/3 ≈ 2.67"],
			["4/3 ≈ 1,33", "4/3 ≈ 1.33"]
		],
		"a": 3,
		"w": ["Độ lệch tuyệt đối 2 + 0 + 2 = 4, chia 3 được 1,33. Số 2 là độ lệch chuẩn mẫu (√(8/2)); 8/3 là phương sai tổng thể.", "Absolute deviations 2 + 0 + 2 = 4, divided by 3 gives 1.33. 2 is the sample SD (√(8/2)); 8/3 is the population variance."]
	}],
	"ds-cov": [{
		"q": ["Hiệp phương sai dương cho biết điều gì?", "What does a positive covariance tell you?"],
		"o": [
			["Hai cột thường nằm cùng phía so với trung bình của chúng", "The two columns tend to lie on the same side of their means"],
			["Cột x làm cột y tăng lên", "Column x causes column y to rise"],
			["Cả hai cột chỉ chứa số dương", "Both columns contain only positive numbers"],
			["Quan hệ giữa hai cột mạnh vì con số lớn", "The relationship is strong because the number is large"]
		],
		"a": 0,
		"w": ["Dấu chỉ hướng đi cùng nhau, không chỉ nguyên nhân. Độ lớn phụ thuộc đơn vị nên chưa thể gọi là mạnh hay yếu.", "The sign shows co-movement, not cause. The magnitude depends on units, so it cannot be called strong or weak yet."]
	}, {
		"q": ["x = 1, 2, 3 và y = 6, 4, 2. Hiệp phương sai mẫu bằng bao nhiêu?", "x = 1, 2, 3 and y = 6, 4, 2. What is the sample covariance?"],
		"o": [
			["2", "2"],
			["−2", "−2"],
			["−4", "−4"],
			["−1", "−1"]
		],
		"a": 1,
		"w": ["Độ lệch x: −1, 0, 1; y: 2, 0, −2. Tích: −2, 0, −2, tổng −4, chia n − 1 = 2 được −2. Chọn 2 là bỏ dấu; −4 là quên chia.", "x deviations: −1, 0, 1; y: 2, 0, −2. Products: −2, 0, −2, sum −4, divided by n − 1 = 2 gives −2. 2 drops the sign; −4 forgets to divide."]
	}],
	"ds-corr": [{
		"q": ["Hai cột có r = 0,9. Kết luận nào hợp lý nhất?", "Two columns have r = 0.9. Which conclusion is most reasonable?"],
		"o": [
			["Cột x gây ra 90% thay đổi của cột y", "Column x causes 90% of the change in column y"],
			["Chúng thường đi cùng nhau, nhưng chưa chứng minh cột này gây ra cột kia", "They tend to move together, but that does not prove one causes the other"],
			["90% số điểm nằm đúng trên một đường thẳng", "90% of the points lie exactly on a straight line"],
			["Đổi đơn vị của x sẽ làm r giảm đi", "Changing the unit of x will reduce r"]
		],
		"a": 1,
		"w": ["r đo mức đi cùng nhau và không đổi khi đổi đơn vị. Nó không phải tỷ lệ nguyên nhân hay tỷ lệ điểm nằm trên đường.", "r measures co-movement and does not change with units. It is neither a causal share nor a share of points on the line."]
	}, {
		"q": ["Cho cov(x, y) = 3, s_x = 2, s_y = 3. Tương quan r bằng bao nhiêu?", "Given cov(x, y) = 3, s_x = 2, s_y = 3. What is r?"],
		"o": [
			["1,5", "1.5"],
			["0,6", "0.6"],
			["0,5", "0.5"],
			["18", "18"]
		],
		"a": 2,
		"w": ["r = 3 / (2 × 3) = 0,5. 1,5 là chia chỉ cho s_x; 0,6 là chia cho tổng 2 + 3; 18 là nhân thay vì chia.", "r = 3 / (2 × 3) = 0.5. 1.5 divides by s_x only; 0.6 divides by the sum 2 + 3; 18 multiplies instead of dividing."]
	}],
	"c0-order": [{
		"q": ["Vì sao nên học theo thứ tự các khóa của giáo trình?", "Why follow the course order of the curriculum?"],
		"o": [
			["Vì sổ chấm điểm theo thứ tự học", "Because the notebook grades you by order"],
			["Vì khóa sau dựa vào kiến thức của khóa trước", "Because later courses build on earlier ones"],
			["Vì các phần tùy chọn luôn bị đẩy xuống cuối", "Because optional parts are always pushed to the end"],
			["Vì thứ tự nào cũng cho kết quả như nhau", "Because any order gives the same result"]
		],
		"a": 1,
		"w": ["Mối nối giữa các ý sẽ mất nếu nhảy cóc. Sổ không chấm điểm, và phần tùy chọn vẫn nằm đúng chỗ của chúng.", "Jumping ahead breaks the links between ideas. The notebook does not grade, and optional parts stay in their proper place."]
	}, {
		"q": ["Thứ tự nào khớp với giáo trình?", "Which order matches the curriculum?"],
		"o": [
			["Đặt câu hỏi, làm việc với máy tính, suy diễn thống kê, mô hình dự đoán", "Framing questions, working with the computer, statistical inference, predictive models"],
			["Mô hình dự đoán, đặt câu hỏi, suy diễn thống kê, làm việc với máy tính", "Predictive models, framing questions, statistical inference, working with the computer"],
			["Suy diễn thống kê, mô hình dự đoán, đặt câu hỏi, làm việc với máy tính", "Statistical inference, predictive models, framing questions, working with the computer"],
			["Làm việc với máy tính, mô hình dự đoán, suy diễn thống kê, đặt câu hỏi", "Working with the computer, predictive models, statistical inference, framing questions"]
		],
		"a": 0,
		"w": ["C0 đặt câu hỏi, C1 máy tính, C2 suy diễn, C3 mô hình dự đoán. Nhảy tới mô hình khi chưa có dữ liệu một dòng thì không có gì để đếm.", "C0 framing, C1 computer, C2 inference, C3 predictive models. Jumping to models before having a row of data leaves nothing to count."]
	}],
	"c0-read": [{
		"q": ["Câu hỏi trắc nghiệm, mindmap và các bước cài đặt trong sổ có vai trò gì?", "What role do quizzes, mindmaps and setup steps play in the notebook?"],
		"o": [
			["Là phần chấm điểm bắt buộc để qua thẻ", "They are mandatory graded parts needed to pass a card"],
			["Là nơi chứa các định nghĩa chính của thẻ", "They hold the main definitions of the card"],
			["Là bài luyện, không thêm định nghĩa mới", "They are practice and add no new definitions"],
			["Là video phải xem hết mới được sang thẻ sau", "They are videos you must finish before the next card"]
		],
		"a": 2,
		"w": ["Định nghĩa nằm ở câu định nghĩa của thẻ. Bài luyện chỉ củng cố; sổ không chấm điểm.", "Definitions live in the card's definition sentence. Practice items only reinforce; the notebook does not grade."]
	}, {
		"q": ["Bạn đọc một thẻ và thấy câu định nghĩa đã khớp với hình minh họa. Nên làm gì?", "You read a card and the definition already matches the illustration. What should you do?"],
		"o": [
			["Dừng ở đây, có thể đánh dấu đã xem rồi sang ý tiếp", "Stop there, optionally mark it as seen, and move to the next idea"],
			["Đọc lại cả thẻ từ đầu cho đủ thời lượng", "Reread the whole card to fill the expected time"],
			["Chờ điểm số hiện ra rồi mới sang thẻ sau", "Wait for a score before moving on"],
			["Bỏ qua hình và học thuộc câu định nghĩa", "Ignore the figure and memorise the definition"]
		],
		"a": 0,
		"w": ["Một thẻ là một ý, không phải một video; hiểu xong là xong. Không có điểm số, và hình đi cùng định nghĩa chứ không bị bỏ.", "A card is one idea, not a video; once understood you are done. There is no score, and the figure goes with the definition rather than being skipped."]
	}],
	"crisp-biz": [{
		"q": ["Hiểu nghiệp vụ (business understanding) trong CRISP-DM nghĩa là chốt những gì?", "What does business understanding in CRISP-DM fix?"],
		"o": [
			["Một slide mục tiêu chung chung cho cả dự án", "A generic goals slide for the whole project"],
			["Danh sách các cột cần làm sạch trong file", "The list of file columns to clean"],
			["Quyết định cần đưa ra, người quyết định và cái giá của một lần sai", "The decision to make, who makes it, and the cost of being wrong"],
			["Họ mô hình sẽ dùng", "The model family to use"]
		],
		"a": 2,
		"w": ["Bước này đứng trước hiểu dữ liệu. Làm sạch và chọn mô hình thuộc các bước sau.", "This step comes before data understanding. Cleaning and model choice belong to later steps."]
	}, {
		"q": ["Sếp đưa file 10.000 dòng quảng cáo và nói «xem có gì hay». Bước đầu tiên hợp lý nhất?", "Your boss hands you a 10,000-row ads file and says: see what you find. What is the most sensible first step?"],
		"o": [
			["Chạy tương quan giữa mọi cặp cột", "Run correlations between every pair of columns"],
			["Dựng ngay một mô hình dự đoán", "Build a predictive model right away"],
			["Điền hết các ô trống trong file", "Fill in all the blank cells in the file"],
			["Hỏi xem quyết định nào cần đưa ra, ai quyết và khi nào", "Ask which decision is needed, who decides and when"]
		],
		"a": 3,
		"w": ["Một file chưa phải một bài toán. Phải có câu hỏi nghiệp vụ trước, các việc kia chỉ có nghĩa khi biết chúng phục vụ quyết định nào.", "A file is not yet a problem. The business question comes first; the other tasks only make sense once you know which decision they serve."]
	}],
	"crisp-data": [{
		"q": ["«Độ chi tiết» (grain) của một bảng dữ liệu là gì?", "What is the grain of a data table?"],
		"o": [
			["Một dòng đại diện cho cái gì: một phiên, một đơn hay một khách", "What one row represents: a session, an order or a customer"],
			["Số cột có trong bảng", "The number of columns in the table"],
			["Dung lượng của file", "The file size"],
			["Kiểu dữ liệu của cột đầu tiên", "The data type of the first column"]
		],
		"a": 0,
		"w": ["Nhầm grain thì mọi tỷ lệ tính sau đó là tỷ lệ của grain đó, không phải của câu hỏi nghiệp vụ.", "Get the grain wrong and every ratio afterwards belongs to that grain, not to the business question."]
	}, {
		"q": ["Bảng có 500 dòng, mỗi dòng là một phiên truy cập, và có 50 đơn. Tỷ lệ 50/500 = 10% là tỷ lệ gì?", "A table has 500 rows, each one a session, and 50 orders. What kind of rate is 50/500 = 10%?"],
		"o": [
			["Số đơn trên mỗi khách hàng", "Orders per customer"],
			["Phần trăm khách đã mua hàng", "Percentage of customers who bought"],
			["Tỷ lệ nhấp chuột", "Click-through rate"],
			["Số đơn trên mỗi phiên, không phải trên mỗi khách", "Orders per session, not per customer"]
		],
		"a": 3,
		"w": ["Mẫu số là số phiên nên đây là đơn trên phiên. Một khách có thể có nhiều phiên, nên không thể đọc đây là tỷ lệ khách mua.", "The denominator is sessions, so this is orders per session. One customer can have several sessions, so it cannot be read as the share of buyers."]
	}],
	"crisp-prep": [{
		"q": ["Mô hình dự đoán «tất cả khách đều ở lại» đạt độ chính xác cao khi hầu hết khách ở lại. Vì sao vẫn chưa dùng được?", "A model predicting every customer will stay scores high accuracy when most customers stay. Why is it still unusable?"],
		"o": [
			["Vì độ chính xác cao luôn chứng tỏ mô hình tốt", "Because high accuracy always proves a good model"],
			["Vì mô hình cần thêm nhiều cột hơn", "Because the model needs more columns"],
			["Vì dữ liệu mất cân bằng không ảnh hưởng gì đến đánh giá", "Because imbalanced data has no effect on evaluation"],
			["Vì nó không bắt được ai trong nhóm sắp rời đi, nên không phục vụ việc giữ chân", "Because it catches no one who is about to leave, so it does not serve retention"]
		],
		"a": 3,
		"w": ["Đánh giá phải dùng cái giá đã viết ở bước nghiệp vụ. Khi lớp hiếm là lớp quan trọng, độ chính xác tổng có thể đánh lừa.", "Evaluation must use the cost written in the business step. When the rare class is the one that matters, overall accuracy can mislead."]
	}, {
		"q": ["Có 95 khách ở lại và 5 khách rời đi. Mô hình gọi tất cả là «ở lại». Độ chính xác và số người rời đi bắt được là bao nhiêu?", "95 customers stay and 5 leave. A model labels all as staying. What are its accuracy and the number of leavers caught?"],
		"o": [
			["95% và 5 người", "95% and 5 people"],
			["5% và 0 người", "5% and 0 people"],
			["50% và 5 người", "50% and 5 people"],
			["95% và 0 người", "95% and 0 people"]
		],
		"a": 3,
		"w": ["Đúng 95 trên 100 nên chính xác 95%, nhưng không dự đoán ai rời đi nên bắt được 0 trên 5. Độ chính xác cao ở đây là ảo giác.", "95 of 100 are correct so accuracy is 95%, but nobody is predicted to leave so 0 of 5 are caught. High accuracy here is an illusion."]
	}],
	"crisp-ship": [{
		"q": ["Điều nào mới là «triển khai» theo CRISP-DM?", "Which counts as deployment in CRISP-DM?"],
		"o": [
			["Xuất một file kết quả gửi qua email", "Exporting a results file and emailing it"],
			["Huấn luyện xong mô hình", "Finishing model training"],
			["Kết quả được đưa vào công việc, có người phụ trách, có ngày chạy lại và có lúc thay mô hình cũ", "The result is in daily work, with an owner, a rerun date and a point to replace the old model"],
			["Làm xong slide trình bày", "Finishing the presentation slides"]
		],
		"a": 2,
		"w": ["Xuất file mới chỉ là sản phẩm phụ. Thiếu chủ, lịch làm lại và kế hoạch thay mô hình, người dùng sẽ dùng một con số cũ mà không biết.", "An exported file is only a by-product. Without an owner, a rerun schedule and a replacement plan, people keep using a stale number unaware."]
	}, {
		"q": ["Nhóm gửi file dự đoán qua email, không ai nhận phụ trách và không có ngày chạy lại. Thêm gì để thành triển khai?", "A team emails a prediction file; nobody owns it and there is no rerun date. What turns this into deployment?"],
		"o": [
			["Định dạng file đẹp hơn", "A nicer file format"],
			["Tăng độ chính xác thêm 1%", "Raise accuracy by 1%"],
			["Chỉ định người bấm điều chỉnh, đặt ngày chạy lại và kế hoạch thay mô hình cũ", "Name who acts on it, set a rerun date and a plan to replace the old model"],
			["Thêm nhiều cột vào file", "Add more columns to the file"]
		],
		"a": 2,
		"w": ["Triển khai là chuyện vận hành, không phải độ đẹp hay độ chính xác thêm. Vòng lặp CRISP-DM cần chủ và lịch để kết quả không cũ đi.", "Deployment is about operations, not polish or a bit more accuracy. The CRISP-DM loop needs an owner and a schedule so results do not go stale."]
	}],
	"ps-open": [{
		"q": ["Vì sao «form giảm» chưa phải là một vấn đề theo giáo trình?", "Why is 'forms dropped' not yet a problem statement in the curriculum?"],
		"o": [
			["Vì chỉ có số liệu tuần này mới là vấn đề", "Because only this week's data counts as a problem"],
			["Vì chưa gắn với quyết định cần chọn, như «tuần sau có tắt kênh này không»", "Because it is not tied to a decision, such as whether to switch the channel off next week"],
			["Vì vấn đề phải luôn là một câu có chữ «vì sao»", "Because a problem must always be a why question"],
			["Vì giảm form không bao giờ là chuyện đáng bàn", "Because a drop in forms is never worth discussing"]
		],
		"a": 1,
		"w": ["Một quan sát chưa phải vấn đề; vấn đề là quyết định cần đưa ra. Các bước sau chỉ phục vụ câu hỏi đó.", "An observation is not a problem; the decision to make is. The later steps only serve that question."]
	}, {
		"q": ["Thứ tự sáu bước nào đúng?", "Which order of the six steps is correct?"],
		"o": [
			["Phương án và hệ quả, loại vấn đề, nguyên nhân, SMART và ưu tiên, sự thật và ý kiến, thực hiện và đo", "Options and consequences, problem type, causes, SMART and priority, facts and opinions, implement and measure"],
			["Loại vấn đề, sự thật và ý kiến, SMART và ưu tiên, nguyên nhân, phương án và hệ quả, thực hiện và đo", "Problem type, facts and opinions, SMART and priority, causes, options and consequences, implement and measure"],
			["Thực hiện và đo, loại vấn đề, sự thật và ý kiến, nguyên nhân, SMART và ưu tiên, phương án và hệ quả", "Implement and measure, problem type, facts and opinions, causes, SMART and priority, options and consequences"],
			["Nguyên nhân, loại vấn đề, phương án và hệ quả, sự thật và ý kiến, SMART và ưu tiên, thực hiện và đo", "Causes, problem type, options and consequences, facts and opinions, SMART and priority, implement and measure"]
		],
		"a": 1,
		"w": ["Đi từ gọi đúng vấn đề, tách sự thật, đặt mục tiêu, tìm nguyên nhân, cân phương án rồi mới làm và đo. Đảo thứ tự dễ giải sai câu hỏi.", "Name the problem, separate facts, set the goal, find causes, weigh options, then act and measure. Reordering easily answers the wrong question."]
	}],
	"ps-type": [{
		"q": ["Gọi nhầm loại vấn đề (ví dụ coi một vấn đề chẩn đoán là vấn đề lựa chọn) dẫn đến hậu quả gì?", "What happens if you misclassify the problem, such as treating a diagnostic problem as a choice?"],
		"o": [
			["Không sao, công cụ đúng luôn cho kết quả đúng", "Nothing, the right tool always gives the right result"],
			["Chỉ phần trình bày bị ảnh hưởng", "Only the presentation is affected"],
			["Dữ liệu sẽ tự sửa lại cho khớp", "The data will correct itself to fit"],
			["Mọi khung sau đó, kể cả 5 Whys hay một mô hình, sẽ trả lời nhầm câu hỏi", "Every later framework, including 5 Whys or a model, answers the wrong question"]
		],
		"a": 3,
		"w": ["Loại vấn đề quyết định câu hỏi. Công cụ đúng cho câu hỏi sai vẫn cho kết quả sai.", "The problem type decides the question. The right tool on the wrong question still gives a wrong result."]
	}, {
		"q": ["Câu nào là vấn đề chẩn đoán?", "Which one is a diagnostic problem?"],
		"o": [
			["Có tắt kênh GDN không?", "Should we switch off the GDN channel?"],
			["Vì sao form TikTok giảm tuần này?", "Why did TikTok forms drop this week?"],
			["Chọn agency A hay agency B?", "Agency A or agency B?"],
			["Làm sao để báo cáo tuần chạy đều?", "How do we keep the weekly report running smoothly?"]
		],
		"a": 1,
		"w": ["Chẩn đoán trả lời «vì sao». «Có tắt không» và «chọn A hay B» là lựa chọn; «làm sao cho đều» là vận hành.", "Diagnosis answers 'why'. 'Switch off or not' and 'A or B' are choices; 'keep it running' is operations."]
	}],
	"ps-fact": [{
		"q": ["Khi nào nhận xét «kênh này yếu» mới kiểm tra được?", "When does the remark 'this channel is weak' become testable?"],
		"o": [
			["Khi nhiều người đồng ý với nhận xét", "When many people agree with it"],
			["Khi nhận xét được in đậm trong báo cáo", "When it is bolded in the report"],
			["Khi bạn viết ra một ngưỡng, chẳng hạn tỷ lệ dưới 3%", "When you write down a threshold, for example a rate below 3%"],
			["Khi nhận xét do người có chức vụ cao nói", "When a senior person says it"]
		],
		"a": 2,
		"w": ["Ý kiến cần ngưỡng đo được mới thành sự thật kiểm tra được. Số người đồng ý hay chức vụ không làm nó thành sự thật.", "An opinion needs a measurable threshold to become testable. Agreement or seniority does not make it a fact."]
	}, {
		"q": ["Ngưỡng «yếu» là tỷ lệ form trên click dưới 3%. Kênh nào yếu? A: 45 form/1.800 click; B: 60/2.000; C: 90/2.500; D: 70/2.000.", "The weak threshold is a form-to-click rate below 3%. Which channel is weak? A: 45 forms/1,800 clicks; B: 60/2,000; C: 90/2,500; D: 70/2,000."],
		"o": [
			["B (3,0%)", "B (3.0%)"],
			["C (3,6%)", "C (3.6%)"],
			["A (2,5%)", "A (2.5%)"],
			["D (3,5%)", "D (3.5%)"]
		],
		"a": 2,
		"w": ["A = 45/1.800 = 2,5% < 3%. B đúng bằng 3,0% nên không dưới ngưỡng; C = 3,6% và D = 3,5% đều trên ngưỡng.", "A = 45/1,800 = 2.5% < 3%. B is exactly 3.0% so not below the threshold; C = 3.6% and D = 3.5% are above it."]
	}],
	"ps-smart": [{
		"q": ["Chữ A (Achievable) trong SMART nghĩa là gì?", "What does the A (Achievable) in SMART mean?"],
		"o": [
			["Thật tham vọng để truyền cảm hứng", "Ambitious enough to inspire"],
			["Được sếp đồng ý bằng lời", "Verbally approved by the boss"],
			["Nằm trong nguồn lực đã có", "It sits within the resources you already have"],
			["Chắc chắn đạt được mà không cần cố gắng", "Certain to be hit without effort"]
		],
		"a": 2,
		"w": ["Achievable là khả thi với nguồn lực hiện có, không phải lời cổ vũ hay sự đồng ý miệng.", "Achievable means feasible with current resources, not a pep talk or verbal approval."]
	}, {
		"q": ["Mục tiêu: «Đến 30/11, form TikTok tăng thêm 20 mỗi tuần so với mức 80 hiện tại.» Mức form mỗi tuần cần đạt là bao nhiêu?", "Goal: By 30/11, TikTok forms rise by 20 per week from the current 80. What weekly level must be reached?"],
		"o": [
			["20", "20"],
			["96", "96"],
			["80", "80"],
			["100", "100"]
		],
		"a": 3,
		"w": ["80 + 20 = 100 form mỗi tuần. 20 chỉ là mức tăng; 96 là hiểu nhầm «+20» thành +20%; 80 là mức hiện tại.", "80 + 20 = 100 forms per week. 20 is only the increase; 96 misreads +20 as +20%; 80 is the current level."]
	}],
	"ps-rank": [{
		"q": ["Ưu tiên theo giáo trình nghĩa là gì?", "What does prioritising mean in the curriculum?"],
		"o": [
			["Một hạn chót nuôi một việc chính; việc khác ghi rõ là để sau", "One deadline feeds one main task; the others are explicitly marked for later"],
			["Đánh số ưu tiên một cho mọi việc", "Number every task as priority one"],
			["Ma trận khẩn cấp và quan trọng tạo thêm nguồn lực", "The urgent-important matrix creates extra resources"],
			["Việc «để sau» là việc bị bỏ quên", "A task marked for later is a forgotten task"]
		],
		"a": 0,
		"w": ["Ưu tiên là bỏ bớt có chủ ý. «Để sau» là một quyết định được ghi lại, còn ma trận chỉ là một cách nhìn, không sinh ra người làm.", "Prioritising is deliberate dropping. 'Later' is a recorded decision, and the matrix is just a view, not a source of extra people."]
	}, {
		"q": ["Cả mục tiêu TikTok (hạn 30/11) và việc làm lại logo đều cần cùng một nhà thiết kế trong cùng tuần. Nên làm gì?", "Both the TikTok goal (deadline 30/11) and the logo redo need the same designer in the same week. What should you do?"],
		"o": [
			["Chia đôi thời gian cho cả hai việc và gọi cả hai là ưu tiên một", "Split time evenly and call both priority one"],
			["Dành nhà thiết kế cho TikTok và ghi logo là «để sau»", "Give the designer to TikTok and record the logo as later"],
			["Làm logo trước vì nó quan trọng hơn", "Do the logo first because it matters more"],
			["Hủy hẳn việc logo mãi mãi", "Cancel the logo job for good"]
		],
		"a": 1,
		"w": ["Hai việc cùng cần một người trong một tuần thì không cùng là số một. Hạn 30/11 chỉ đủ nuôi TikTok; logo vẫn có thể đúng, chỉ là chưa tới lượt.", "Two tasks needing one person in one week cannot both be number one. The 30/11 deadline only feeds TikTok; the logo may still be right, just not yet."]
	}],
	"ps-cause": [{
		"q": ["Nguyên nhân đáng xử lý trong một hạn chót là nguyên nhân nào?", "Which cause is worth handling within a deadline?"],
		"o": [
			["Nguyên nhân mà bạn thay đổi được trong hạn đó", "The cause you can change within that deadline"],
			["Nguyên nhân có hệ số hồi quy lớn nhất", "The cause with the largest regression coefficient"],
			["Nguyên nhân được nhiều người tin nhất", "The cause most people believe"],
			["Nguyên nhân sâu nhất, kể cả khi không làm gì được", "The deepest cause, even if nothing can be done about it"]
		],
		"a": 0,
		"w": ["Nguyên nhân ở đây là thay đổi làm được, không phải một hệ số. Cái không đổi được trong hạn thì mới chỉ là bối cảnh.", "A cause here is a change you can make, not a coefficient. What cannot change in the window is only background."]
	}, {
		"q": ["Form TikTok giảm. Ba giả thuyết: (a) người dùng chán mạng xã hội; (b) trang đích lỗi 404 trên điện thoại, sửa mất 2 ngày; (c) đối thủ chạy chiến dịch lớn. Hạn 2 tuần, nên xử lý cái nào trước?", "TikTok forms dropped. Three hypotheses: (a) users are tired of social media; (b) landing page 404 on mobile, 2 days to fix; (c) a competitor runs a big campaign. With a 2-week deadline, which do you handle first?"],
		"o": [
			["(a) người dùng chán mạng xã hội", "(a) users tired of social media"],
			["(c) chiến dịch của đối thủ", "(c) the competitor's campaign"],
			["Cả ba cùng lúc", "All three at once"],
			["(b) lỗi 404 trên điện thoại", "(b) the mobile 404 error"]
		],
		"a": 3,
		"w": ["Chỉ (b) là thay đổi được trong hạn. (a) và (c) là bối cảnh bạn không điều khiển được trong hai tuần.", "Only (b) can be changed in the window. (a) and (c) are background you cannot control in two weeks."]
	}],
	"ps-opt": [{
		"q": ["Điều gì khiến một ý tưởng trở thành «phương án» đúng nghĩa?", "What makes an idea a proper option?"],
		"o": [
			["Nó được mô tả bằng nhiều tính từ tích cực", "It is described with many positive adjectives"],
			["Nó đi kèm hệ quả, gồm cái được và cái mất", "It comes with consequences, both gains and losses"],
			["Nó dùng một thước đo mới do mình chọn", "It uses a new metric you picked yourself"],
			["Nó là phương án được yêu thích nhất", "It is the most liked option"]
		],
		"a": 1,
		"w": ["Phương án so với nhau trên cùng một thước đo đã viết ở bước SMART, kèm hệ quả. Thêm thước đo mới chỉ để phương án yêu thích thắng là sai.", "Options are compared on the same metric written in the SMART step, with consequences. Adding a new metric just so a favourite wins is wrong."]
	}, {
		"q": ["Hôm nay là 12/11, hạn 30/11. Phương án A: sửa lỗi 404, mất 2 ngày. Phương án B: làm trang đích mới, mất 3 tuần. Phương án nào kịp hạn?", "Today is 12/11 and the deadline is 30/11. Option A: fix the 404, 2 days. Option B: build a new landing page, 3 weeks. Which fits the deadline?"],
		"o": [
			["Cả A và B", "Both A and B"],
			["Chỉ B vì trang mới tốt hơn", "Only B because a new page is better"],
			["Không phương án nào", "Neither"],
			["Chỉ A", "Only A"]
		],
		"a": 3,
		"w": ["Từ 12/11 đến 30/11 có 18 ngày. A mất 2 ngày nên kịp; B mất 21 ngày nên trễ hạn. Tốt hơn về chất không cứu được việc trễ.", "From 12/11 to 30/11 is 18 days. A takes 2 days so it fits; B takes 21 days so it misses. Being better in quality does not fix being late."]
	}],
	"ps-do": [{
		"q": ["Sau khi triển khai giải pháp, điều nào là đúng?", "After implementing a solution, which is correct?"],
		"o": [
			["Chỉ cần kể lại cảm nhận của đội", "Just report how the team feels about it"],
			["Có thể đổi cách đếm cho thuận tiện", "You may change the counting rule for convenience"],
			["Làm xong là xong, không cần đo", "Once done, no measurement is needed"],
			["Phải đo lại bằng đúng cách đếm đã viết trước đó", "You must remeasure with exactly the counting rule written earlier"]
		],
		"a": 3,
		"w": ["Đổi cách đếm giữa chừng làm bạn không biết giải pháp có hiệu lực hay không. Triển khai là thay đổi đã xảy ra cộng một lần đo lại đã hẹn.", "Changing the counting rule midway leaves you unable to tell whether the fix worked. Implementation is a change made plus a promised remeasurement."]
	}, {
		"q": ["Trước khi sửa: 80 form mỗi tuần. Sau khi sửa, đếm lại cùng cách ngày 30/11 ra 70. Kết luận đúng là gì?", "Before the fix: 80 forms per week. After it, a recount by the same rule on 30/11 gives 70. What is the right conclusion?"],
		"o": [
			["Giải pháp chắc chắn có hiệu quả vì đã được thực hiện", "The fix surely worked because it was carried out"],
			["Phép đo bị hỏng nên bỏ qua kết quả", "The measurement is broken so ignore it"],
			["Form giảm 10 (12,5%); đây vẫn là một kết quả, và giải pháp chưa nâng được form", "Forms fell by 10 (12.5%); this is still a result, and the fix has not raised forms"],
			["Đổi cách đếm cho tới khi ra trên 80", "Change the counting rule until it exceeds 80"]
		],
		"a": 2,
		"w": ["70 − 80 = −10, tức −12,5% so với 80. Ra 90 hay 70 đều là kết quả; không được đổi cách đếm để cứu kết luận mong muốn.", "70 − 80 = −10, that is −12.5% of 80. Whether 90 or 70, it is a result; you must not change the rule to rescue a hoped-for conclusion."]
	}],
	"xl-cell": [{
		"q": ["SUM xử lý một ô chứa số lưu dạng chữ như thế nào?", "How does SUM treat a cell holding a number stored as text?"],
		"o": [
			["Báo lỗi #VALUE! cho cả hàm", "It returns #VALUE! for the whole formula"],
			["Tự đổi thành số rồi cộng", "It converts it to a number and adds it"],
			["Cộng như 0 và hiện cảnh báo", "It adds 0 and shows a warning"],
			["Bỏ qua ô đó mà không báo lỗi", "It skips the cell without any error"]
		],
		"a": 3,
		"w": ["SUM bỏ qua chữ một cách im lặng, nên tổng có thể thiếu mà không ai biết. Cần kiểm tra kiểu ô trước khi cộng.", "SUM silently ignores text, so the total can be short with nobody noticing. Check cell types before summing."]
	}, {
		"q": ["Cột có các ô: 50, 25, «15» (lưu dạng chữ) và 10. SUM của cột ra bao nhiêu?", "A column has cells: 50, 25, '15' (stored as text) and 10. What does SUM return?"],
		"o": [
			["100", "100"],
			["85", "85"],
			["#VALUE!", "#VALUE!"],
			["0", "0"]
		],
		"a": 1,
		"w": ["50 + 25 + 10 = 85; ô chữ «15» bị bỏ qua. 100 là tổng nếu ô đó là số.", "50 + 25 + 10 = 85; the text cell '15' is skipped. 100 would be the total if that cell were a number."]
	}],
	"xl-lock": [{
		"q": ["Công thức =$A1 ở ô C1, được kéo sang ô D2 (sang phải một cột, xuống một dòng), sẽ thành gì?", "The formula =$A1 in C1 is copied to D2 (one column right, one row down). What does it become?"],
		"o": [
			["=B2", "=B2"],
			["=$A1", "=$A1"],
			["=$A2", "=$A2"],
			["=A$2", "=A$2"]
		],
		"a": 2,
		"w": ["Dấu $ trước A khóa cột nên A giữ nguyên; số dòng không khóa nên 1 thành 2. =B2 là khi không khóa gì; =$A1 là khi khóa cả hàng.", "The $ before A locks the column so A stays; the row is unlocked so 1 becomes 2. =B2 is the no-lock case; =$A1 would need the row locked too."]
	}, {
		"q": ["A2 = 200, A3 = 300, thuế ở B1 = 10%, B2 để trống. C2 là =A2*$B$1 cho 20. Nếu viết =A2*B1 (không khóa) rồi kéo xuống C3, kết quả C3 là bao nhiêu?", "A2 = 200, A3 = 300, tax in B1 = 10%, B2 blank. C2 is =A2*$B$1 giving 20. If you wrote =A2*B1 (unlocked) and filled down to C3, what does C3 show?"],
		"o": [
			["30", "30"],
			["0", "0"],
			["20", "20"],
			["#REF!", "#REF!"]
		],
		"a": 1,
		"w": ["Kéo xuống thì =A2*B1 thành =A3*B2, và B2 trống nên 300 × 0 = 0. 30 là kết quả khi khóa đúng ($B$1).", "Filling down turns =A2*B1 into =A3*B2, and B2 is blank so 300 × 0 = 0. 30 is the result only when correctly locked ($B$1)."]
	}],
	"xl-if": [{
		"q": ["Vì sao phải kiểm tra ô trống ở nhánh đầu của công thức IF?", "Why check for a blank cell in the first branch of the IF?"],
		"o": [
			["Vì nhiều phép so sánh coi ô trống là 0, nên nó sẽ lọt vào nhánh «thấp»", "Because many comparisons treat a blank as 0, so it would fall into the 'low' branch"],
			["Vì IF báo lỗi khi gặp ô trống", "Because IF returns an error on a blank"],
			["Vì ô trống luôn bằng FALSE", "Because a blank always equals FALSE"],
			["Vì Excel tự bỏ qua ô trống nên không cần nhánh riêng", "Because Excel skips blanks so no separate branch is needed"]
		],
		"a": 0,
		"w": ["Ô trống rơi vào nhánh đầu tiên mà nó không vi phạm. Nếu không chặn trước, 0 sẽ nhỏ hơn 5 và bị gọi là «thấp».", "A blank falls into the first branch it does not violate. Without a guard, 0 is below 5 and gets called 'low'."]
	}, {
		"q": ["Công thức: =IF(A2=\"\", \"chưa có\", IF(A2<5, \"thấp\", IF(A2<20, \"vừa\", \"cao\"))). Với A2 = 20, kết quả là gì?", "Formula: =IF(A2=\"\", \"none\", IF(A2<5, \"low\", IF(A2<20, \"mid\", \"high\"))). With A2 = 20, what is the result?"],
		"o": [
			["cao", "high"],
			["vừa", "mid"],
			["thấp", "low"],
			["chưa có", "none"]
		],
		"a": 0,
		"w": ["20 không nhỏ hơn 5 và cũng không nhỏ hơn 20 (so sánh «<» không gồm 20), nên rơi xuống nhánh cuối là «cao». «Vừa» là nhầm biên.", "20 is not below 5 and not below 20 ('<' excludes 20), so it reaches the last branch: high. 'Mid' is a boundary slip."]
	}],
	"xl-keep": [{
		"q": ["Bạn lọc (filter) cột kênh còn TikTok rồi dùng SUM trên cột form. Điều gì xảy ra?", "You filter the channel column to TikTok and use SUM on the form column. What happens?"],
		"o": [
			["SUM chỉ cộng các dòng đang hiện", "SUM adds only the visible rows"],
			["SUM vẫn cộng cả các dòng đang ẩn", "SUM still adds the hidden rows too"],
			["SUM báo lỗi vì có dòng ẩn", "SUM errors because of hidden rows"],
			["Các dòng ẩn bị xóa khỏi bảng", "The hidden rows are deleted from the table"]
		],
		"a": 1,
		"w": ["Filter chỉ giấu dòng; SUM không nhìn filter. Muốn chỉ cộng dòng hiện thì dùng SUBTOTAL(109, …). Giấu không phải là bỏ.", "A filter only hides rows; SUM ignores the filter. To add visible rows only, use SUBTOTAL(109, …). Hiding is not removing."]
	}, {
		"q": ["Bảng 200 dòng có tổng form 1.000. Lọc còn 150 dòng TikTok với tổng form 700. SUM trên cột form khi đang lọc ra bao nhiêu?", "A 200-row table has total forms of 1,000. You filter to 150 TikTok rows whose forms total 700. What does SUM on the form column return while filtered?"],
		"o": [
			["700", "700"],
			["300", "300"],
			["150", "150"],
			["1.000", "1,000"]
		],
		"a": 3,
		"w": ["SUM cộng cả 200 dòng nên ra 1.000. 700 là kết quả của SUBTOTAL(109, …) trên các dòng đang hiện. 150 là số dòng, không phải tổng form.", "SUM adds all 200 rows so it returns 1,000. 700 is what SUBTOTAL(109, …) gives over the visible rows. 150 is a row count, not a form total."]
	}],
	"xl-chart": [{
		"q": ["Biểu đồ tròn phù hợp khi nào?", "When is a pie chart appropriate?"],
		"o": [
			["Khi muốn theo dõi xu hướng theo thời gian", "When tracking a trend over time"],
			["Khi so sánh nhiều chỉ số khác đơn vị", "When comparing several metrics in different units"],
			["Khi các phần thuộc cùng một tổng và không quá nhiều", "When the slices are parts of one total and there are not too many"],
			["Khi có hơn mười nhóm cần so sánh", "When there are over ten groups to compare"]
		],
		"a": 2,
		"w": ["Tròn là các phần của một tổng. Xu hướng theo thời gian dùng đường; so sánh nhóm dùng cột, và hai hình tròn cạnh nhau gần như không so sánh được.", "A pie shows parts of one total. Trends over time use a line; group comparison uses columns, and two pies side by side are hard to compare."]
	}, {
		"q": ["Form theo 5 kênh trong một tuần: 40, 30, 20, 7, 3. Cách vẽ nào trả lời đúng câu «kênh nào nhiều nhất»?", "Forms by 5 channels in one week: 40, 30, 20, 7, 3. Which chart best answers 'which channel is biggest'?"],
		"o": [
			["Một đường nối năm điểm", "A line joining the five points"],
			["Hai biểu đồ tròn đặt cạnh nhau", "Two pies side by side"],
			["Biểu đồ cột, mỗi kênh một cột", "A bar chart with one bar per channel"],
			["Biểu đồ đường theo thứ tự tên kênh", "A line chart ordered by channel name"]
		],
		"a": 2,
		"w": ["Đây là so sánh các nhóm rời nhau nên dùng cột. Đường nối ngụ ý các kênh có thứ tự, điều không đúng.", "This compares separate groups, so use bars. A joining line implies the channels have an order, which they do not."]
	}],
	"xl-pivot": [{
		"q": ["PivotTable đếm được 400 dòng. Điều nào đúng?", "A PivotTable counts 400 rows. Which is correct?"],
		"o": [
			["Đó là 400 lần ghé (dòng), chưa chắc là 400 khách khác nhau", "That is 400 visits (rows), not necessarily 400 distinct customers"],
			["Chắc chắn có 400 khách khác nhau", "There are certainly 400 distinct customers"],
			["Pivot tự loại các khách trùng", "The pivot automatically removes duplicate customers"],
			["Số 400 tự cập nhật khi copy sang báo cáo", "The 400 updates itself once copied into a report"]
		],
		"a": 0,
		"w": ["Pivot nhóm các dòng, nó không tạo khách mới. Số khách là một câu hỏi khác (distinct count), và con số đã copy ra là số chết.", "A pivot groups rows; it does not create customers. Customer count is a different question (distinct count), and a copied number is static."]
	}, {
		"q": ["400 lần ghé đến từ 250 khách khác nhau. Trung bình mỗi khách ghé bao nhiêu lần?", "400 visits come from 250 distinct customers. On average, how many visits per customer?"],
		"o": [
			["1,6", "1.6"],
			["0,625", "0.625"],
			["1,5", "1.5"],
			["150", "150"]
		],
		"a": 0,
		"w": ["400 / 250 = 1,6. 0,625 là chia ngược (250/400); 150 là hiệu số, không phải trung bình.", "400 / 250 = 1.6. 0.625 divides the wrong way (250/400); 150 is a difference, not an average."]
	}],
	"xl-look": [{
		"q": ["VLOOKUP với tham số cuối là FALSE trả về #N/A. Điều đó nghĩa là gì?", "VLOOKUP with FALSE as the last argument returns #N/A. What does that mean?"],
		"o": [
			["File Excel bị hỏng", "The Excel file is corrupted"],
			["Excel tìm gần đúng và không ra", "Excel did a near match and failed"],
			["Cần làm mới PivotTable", "The PivotTable needs refreshing"],
			["Không tìm thấy khóa đó trong cột đầu của vùng", "The key was not found in the first column of the range"]
		],
		"a": 3,
		"w": ["#N/A với FALSE là «không thấy», một thông báo trung thực. Điều đáng ngại hơn là chế độ gần đúng trên cột chưa sắp, vì nó trả sai mà im lặng.", "#N/A with FALSE means 'not found', an honest signal. More worrying is approximate mode on an unsorted column, which returns a wrong answer silently."]
	}, {
		"q": ["Bảng có cột A là tên kênh, cột B là mã kênh. Bạn muốn tra mã để lấy tên (nằm bên trái cột khóa). Dùng gì?", "A table has channel names in column A and channel codes in column B. You look up a code to get the name (to the left of the key column). What should you use?"],
		"o": [
			["VLOOKUP với số cột là 0", "VLOOKUP with column number 0"],
			["INDEX kết hợp MATCH", "INDEX combined with MATCH"],
			["VLOOKUP với số cột âm", "VLOOKUP with a negative column number"],
			["VLOOKUP ở chế độ TRUE", "VLOOKUP in TRUE mode"]
		],
		"a": 1,
		"w": ["VLOOKUP chỉ nhìn sang phải của cột khóa. MATCH tìm vị trí của khóa và INDEX lấy ô ở vị trí đó, kể cả bên trái.", "VLOOKUP only looks to the right of the key column. MATCH finds the key's position and INDEX returns the cell there, even on the left."]
	}],
	"py-run": [{
		"q": ["Vì sao dùng một tên trước dòng gán nó gây NameError?", "Why does using a name before its assignment line cause a NameError?"],
		"o": [
			["Vì Python tự nhìn xuống dưới để tìm tên", "Because Python looks ahead to find the name"],
			["Vì Python chạy từ trên xuống và chỉ tạo tên khi dòng gán chạy xong", "Because Python runs top to bottom and creates a name only after its assignment line runs"],
			["Vì tên biến quá ngắn", "Because the variable name is too short"],
			["Vì phải khai báo kiểu dữ liệu trước", "Because the data type must be declared first"]
		],
		"a": 1,
		"w": ["Máy không đọc ý định của bạn, nó đọc từng dòng theo thứ tự. Python không nhìn trước xuống các dòng phía dưới.", "The machine does not read intent, it reads line by line in order. Python does not look ahead to later lines."]
	}, {
		"q": ["Đoạn mã: dòng 1 a = 80; dòng 2 print(a); dòng 3 a = a + 20. Chương trình in ra gì?", "Code: line 1 a = 80; line 2 print(a); line 3 a = a + 20. What does the program print?"],
		"o": [
			["100", "100"],
			["80", "80"],
			["NameError", "NameError"],
			["20", "20"]
		],
		"a": 1,
		"w": ["print chạy ở dòng 2 khi a mới là 80; dòng 3 chạy sau nên không ảnh hưởng gì đến kết quả đã in. 100 là giá trị a sau cùng.", "print runs on line 2 when a is still 80; line 3 runs afterwards and does not change what was printed. 100 is the final value of a."]
	}],
	"py-type": [{
		"q": ["Trong Python, «80» + 20 (chữ cộng với số) cho kết quả gì?", "In Python, what does '80' + 20 (a string plus a number) give?"],
		"o": [
			["Một lỗi kiểu (TypeError)", "A type error (TypeError)"],
			["100", "100"],
			["Chữ «8020»", "The string '8020'"],
			["80", "80"]
		],
		"a": 0,
		"w": ["Chữ cộng với số là lỗi, không phải một kết quả gần đúng. Muốn cộng số phải ép kiểu tường minh bằng int().", "A string plus a number is an error, not an approximate result. To add numbers you must convert explicitly with int()."]
	}, {
		"q": ["Cho x = \"12\" và y = \"30\" (đều là chữ). x + y là gì?", "Given x = \"12\" and y = \"30\" (both strings). What is x + y?"],
		"o": [
			["Chuỗi chữ «1230»", "The string '1230'"],
			["Số 42", "The number 42"],
			["Một lỗi TypeError", "A TypeError"],
			["Số 12", "The number 12"]
		],
		"a": 0,
		"w": ["Phép + trên hai chữ là nối chữ, nên ra «1230». Muốn 42 thì phải int(x) + int(y).", "+ on two strings concatenates, giving '1230'. To get 42 you need int(x) + int(y)."]
	}],
	"py-op": [{
		"q": ["Để kiểm tra form có bằng 80 hay không (kết quả True hoặc False), cần viết gì?", "Which expression checks whether form equals 80 (giving True or False)?"],
		"o": [
			["form = 80", "form = 80"],
			["form == 80", "form == 80"],
			["form // 80", "form // 80"],
			["form != 80", "form != 80"]
		],
		"a": 1,
		"w": ["Hai dấu == là phép so sánh và trả về bool. Một dấu = là gán, nó đặt giá trị cho form chứ không hỏi form có bằng 80 không. != hỏi điều ngược lại.", "Double == is the comparison and returns a bool. A single = assigns, setting form instead of asking whether it equals 80. != asks the opposite question."]
	}, {
		"q": ["-7 // 2 bằng bao nhiêu trong Python?", "What is -7 // 2 in Python?"],
		"o": [
			["-3", "-3"],
			["-3.5", "-3.5"],
			["3", "3"],
			["-4", "-4"]
		],
		"a": 3,
		"w": ["// làm tròn xuống (floor): -3.5 xuống thành -4. Đáp án -3 là do tưởng // chỉ cắt phần thập phân, nhưng đó không phải quy tắc của nó. -3.5 là kết quả của phép / .", "// floors the result: -3.5 goes down to -4. Choosing -3 assumes // just drops the decimals, which is not its rule. -3.5 is what / would give."]
	}],
	"py-if": [{
		"q": ["Cho: if form < 3 thì «thấp», elif form < 6 thì «vừa», else «cao». Với form = 2, chương trình làm gì?", "Given: if form < 3 then 'low', elif form < 6 then 'medium', else 'high'. With form = 2, what happens?"],
		"o": [
			["Chỉ chạy nhánh «thấp», không xét nhánh «vừa»", "Only the 'low' branch runs; the 'medium' branch is never checked"],
			["Chạy cả «thấp» lẫn «vừa» vì 2 < 6 cũng đúng", "Both 'low' and 'medium' run because 2 < 6 is also true"],
			["Chạy nhánh «vừa» vì nó đứng sau", "The 'medium' branch runs because it comes later"],
			["Báo lỗi vì hai điều kiện cùng đúng", "It raises an error because two conditions are true"]
		],
		"a": 0,
		"w": ["Mỗi lần chỉ một nhánh chạy: nhánh đầu tiên có điều kiện đúng. elif chỉ được xét khi các nhánh trước sai.", "Only one branch runs: the first whose condition is true. elif is only checked when earlier branches were false."]
	}, {
		"q": ["Viết đảo thứ tự: if form < 6 thì «vừa», elif form < 3 thì «thấp». Với form = 2, kết quả là gì?", "Order reversed: if form < 6 then 'medium', elif form < 3 then 'low'. With form = 2, what is the result?"],
		"o": [
			["«thấp»", "'low'"],
			["Cả «vừa» và «thấp»", "Both 'medium' and 'low'"],
			["«vừa»", "'medium'"],
			["Không có gì (None)", "Nothing (None)"]
		],
		"a": 2,
		"w": ["2 < 6 đúng ngay ở nhánh đầu nên chạy «vừa» và dừng; nhánh form < 3 không bao giờ được xét. Đổi thứ tự là đổi kết quả.", "2 < 6 is true at the first branch, so 'medium' runs and the rest is skipped; the form < 3 branch is never reached. Changing the order changes the result."]
	}],
	"py-loop": [{
		"q": ["Một vòng while x < 5: print(x) với x = 0 ban đầu, và không dòng nào thay đổi x. Chuyện gì xảy ra?", "A loop while x < 5: print(x) starts with x = 0 and nothing changes x. What happens?"],
		"o": [
			["Chạy 5 lần rồi dừng", "It runs 5 times and stops"],
			["Không chạy lần nào", "It never runs"],
			["Python tự tăng x để dừng", "Python increments x automatically to stop it"],
			["Chạy mãi không dừng, in 0 liên tục", "It never stops and keeps printing 0"]
		],
		"a": 3,
		"w": ["while chỉ dừng khi điều kiện thành sai; x không đổi nên 0 < 5 luôn đúng. Python không tự tăng biến cho bạn.", "while only stops when the condition becomes false; x never changes so 0 < 5 stays true. Python does not increment variables for you."]
	}, {
		"q": ["Vòng ngoài duyệt 3 kênh, với mỗi kênh vòng trong chạy for tuan in range(4). Phần thân vòng trong chạy tổng cộng bao nhiêu lần?", "The outer loop goes over 3 channels; for each, the inner loop runs for week in range(4). How many times does the inner body run in total?"],
		"o": [
			["7", "7"],
			["12", "12"],
			["4", "4"],
			["3", "3"]
		],
		"a": 1,
		"w": ["Vòng trong chạy trọn 4 lần cho mỗi bước vòng ngoài: 3 × 4 = 12. 7 là cộng thay vì nhân.", "The inner loop runs fully (4 times) for each outer step: 3 × 4 = 12. 7 comes from adding instead of multiplying."]
	}],
	"py-fn": [{
		"q": ["Hàm def ty_le(form, click): print(form / click) không có return. Sau x = ty_le(80, 2000), x là gì?", "The function def ty_le(form, click): print(form / click) has no return. After x = ty_le(80, 2000), what is x?"],
		"o": [
			["0.04", "0.04"],
			["0", "0"],
			["None", "None"],
			["Báo lỗi", "An error"]
		],
		"a": 2,
		"w": ["print chỉ hiện chữ lên màn hình; không có return thì hàm trả về None. 0.04 chỉ được in ra, không được giao cho x.", "print only shows text on screen; with no return the function gives back None. 0.04 is printed but never handed to x."]
	}, {
		"q": ["def g(x): y = x + 1; return y; y = y * 10. Gọi g(4) trả về gì?", "def g(x): y = x + 1; return y; y = y * 10. What does g(4) return?"],
		"o": [
			["5", "5"],
			["50", "50"],
			["40", "40"],
			["None", "None"]
		],
		"a": 0,
		"w": ["return chạy là thoát hàm, dòng y = y * 10 phía dưới không bao giờ chạy. y = 4 + 1 = 5.", "Once return runs the function exits, so y = y * 10 below never executes. y = 4 + 1 = 5."]
	}],
	"py-str": [{
		"q": ["s = \" tiktok \" rồi gọi s.strip() mà không gán lại. Giá trị của s sau đó là gì?", "s = \" tiktok \" and then s.strip() is called without assigning the result. What is s afterwards?"],
		"o": [
			["\"tiktok\"", "\"tiktok\""],
			["\" tiktok \" (không đổi)", "\" tiktok \" (unchanged)"],
			["None", "None"],
			["\"tik\"", "\"tik\""]
		],
		"a": 1,
		"w": ["Chuỗi không sửa tại chỗ; strip() trả về một chuỗi mới và s vẫn là chuỗi cũ nếu bạn không gán s = s.strip().", "Strings are not modified in place; strip() returns a new string and s stays the old one unless you write s = s.strip()."]
	}, {
		"q": ["\"tiktok\"[1:4] cho kết quả nào?", "What does \"tiktok\"[1:4] return?"],
		"o": [
			["\"ikto\"", "\"ikto\""],
			["\"tik\"", "\"tik\""],
			["\"kto\"", "\"kto\""],
			["\"ikt\"", "\"ikt\""]
		],
		"a": 3,
		"w": ["Chỉ số bắt đầu từ 0 và điểm cuối không gồm: lấy vị trí 1, 2, 3 là i, k, t. \"ikto\" nhầm là gồm điểm cuối.", "Indexing starts at 0 and the end is excluded: positions 1, 2, 3 give i, k, t. \"ikto\" wrongly includes the end."]
	}],
	"py-list": [{
		"q": ["a = [1, 2]; b = a; b.append(3). Giá trị của a bây giờ là gì?", "a = [1, 2]; b = a; b.append(3). What is a now?"],
		"o": [
			["[1, 2, 3]", "[1, 2, 3]"],
			["[1, 2]", "[1, 2]"],
			["[3]", "[3]"],
			["Báo lỗi", "An error"]
		],
		"a": 0,
		"w": ["b = a không tạo bản copy; hai tên cùng trỏ vào một danh sách nên sửa qua b thì a cũng thấy.", "b = a does not make a copy; both names point at the same list, so a change through b shows up in a."]
	}, {
		"q": ["x = [80, 90]; x.append([70, 60]). len(x) bằng bao nhiêu?", "x = [80, 90]; x.append([70, 60]). What is len(x)?"],
		"o": [
			["4", "4"],
			["2", "2"],
			["3", "3"],
			["5", "5"]
		],
		"a": 2,
		"w": ["append thêm cả list [70, 60] như một phần tử, nên có 80, 90 và [70, 60] là 3. Muốn ra 4 phải dùng extend.", "append adds the whole list [70, 60] as one element, giving 80, 90 and [70, 60], so 3. You would need extend to get 4."]
	}],
	"py-dict": [{
		"q": ["Với d = {\"gdn\": 80, \"tiktok\": 40}, lệnh d[\"fb\"] làm gì?", "With d = {\"gdn\": 80, \"tiktok\": 40}, what does d[\"fb\"] do?"],
		"o": [
			["Trả về 0", "Returns 0"],
			["Trả về None", "Returns None"],
			["Tự thêm khóa fb", "Adds the key fb automatically"],
			["Báo KeyError, dừng chương trình", "Raises a KeyError and stops the program"]
		],
		"a": 3,
		"w": ["Ngoặc vuông với khóa thiếu là sự cố nên báo lỗi. Chỉ get(\"fb\", 0) mới trả giá trị mặc định, và 0 đó chỉ nghĩa là «chưa thấy».", "Square brackets with a missing key are treated as a fault and raise an error. Only get(\"fb\", 0) returns a default, and that 0 just means 'not seen'."]
	}, {
		"q": ["d = {\"gdn\": 80, \"tiktok\": 40}. Chạy d[\"gdn\"] = 100. Tổng sum(d.values()) bằng bao nhiêu?", "d = {\"gdn\": 80, \"tiktok\": 40}. After d[\"gdn\"] = 100, what is sum(d.values())?"],
		"o": [
			["220", "220"],
			["140", "140"],
			["120", "120"],
			["40", "40"]
		],
		"a": 1,
		"w": ["Gán vào khóa đã có là đè giá trị cũ: 100 + 40 = 140. 220 do tưởng thêm dòng thứ hai (80 + 100 + 40).", "Assigning to an existing key overwrites it: 100 + 40 = 140. 220 assumes a second entry was added (80 + 100 + 40)."]
	}],
	"py-tup": [{
		"q": ["Khác biệt giữa (80) và (80,) là gì?", "What is the difference between (80) and (80,)?"],
		"o": [
			["Cả hai đều là tuple một phần tử", "Both are one-element tuples"],
			["(80) là tuple, (80,) là list", "(80) is a tuple and (80,) is a list"],
			["(80) chỉ là số 80 trong ngoặc, (80,) mới là tuple một phần tử", "(80) is just the number 80 in parentheses; (80,) is a one-element tuple"],
			["Không khác gì, dấu phẩy là thừa", "No difference, the comma is redundant"]
		],
		"a": 2,
		"w": ["Dấu phẩy làm nên tuple, không phải dấu ngoặc. Ngoặc đơn thuần chỉ nhóm biểu thức.", "The comma makes the tuple, not the parentheses. Parentheses alone just group an expression."]
	}, {
		"q": ["a, b = (80, 2000). Giá trị của a / b là bao nhiêu?", "a, b = (80, 2000). What is a / b?"],
		"o": [
			["0.04", "0.04"],
			["25.0", "25.0"],
			["0", "0"],
			["Báo lỗi vì tuple không tách được", "An error because tuples cannot be unpacked"]
		],
		"a": 0,
		"w": ["Unpacking gán a = 80, b = 2000 nên 80 / 2000 = 0.04. 25.0 là do đảo thứ tự; 0 là kết quả của //.", "Unpacking gives a = 80, b = 2000 so 80 / 2000 = 0.04. 25.0 comes from swapping the order; 0 would be the result of //."]
	}],
	"py-set": [{
		"q": ["Điều nào đúng với set {\"a\", \"b\", \"a\"}?", "Which is true about the set {\"a\", \"b\", \"a\"}?"],
		"o": [
			["Còn 3 phần tử, giữ nguyên thứ tự", "It keeps 3 elements in the same order"],
			["Chỉ còn 2 phần tử và thứ tự in ra không được đảm bảo", "It has only 2 elements and print order is not guaranteed"],
			["Chỉ còn 2 phần tử và luôn in theo thứ tự đưa vào", "It has 2 elements and always prints in insertion order"],
			["Báo lỗi vì có giá trị trùng", "It raises an error because of the duplicate"]
		],
		"a": 1,
		"w": ["Set tự loại trùng nên còn a, b, nhưng không hứa hẹn thứ tự. Đừng dùng nó để giữ thứ tự theo tuần.", "A set removes duplicates, leaving a and b, but promises no order. Do not use it to keep weekly order."]
	}, {
		"q": ["Khách mua tuần 1 là A = {1, 2, 3}, tuần 2 là B = {2, 3, 4}. A - B cho kết quả nào?", "Week 1 buyers are A = {1, 2, 3}, week 2 buyers are B = {2, 3, 4}. What does A - B give?"],
		"o": [
			["{2, 3}", "{2, 3}"],
			["{1, 4}", "{1, 4}"],
			["{1, 2, 3, 4}", "{1, 2, 3, 4}"],
			["{1}", "{1}"]
		],
		"a": 3,
		"w": ["A - B là các phần tử chỉ có ở A: khách 1. {2, 3} là giao của A và B; {1, 2, 3, 4} là hợp của A và B.", "A - B keeps elements only in A: customer 1. {2, 3} is the intersection of A and B; {1, 2, 3, 4} is their union."]
	}],
	"py-np": [{
		"q": ["np.array([80, 90, \"abc\"]) tạo ra mảng thế nào?", "What does np.array([80, 90, \"abc\"]) produce?"],
		"o": [
			["Cả mảng bị ép thành kiểu chữ, kể cả 80 và 90", "The whole array is coerced to text, including 80 and 90"],
			["Chỉ ô \"abc\" là chữ, hai ô kia vẫn là số", "Only \"abc\" is text; the other two stay numbers"],
			["Báo lỗi vì lẫn kiểu", "An error because of mixed types"],
			["Ô \"abc\" bị bỏ đi", "The \"abc\" cell is dropped"]
		],
		"a": 0,
		"w": ["Mảng NumPy chỉ có một kiểu, nên một chữ làm đổi cả mảng. Không có ô nào giữ riêng kiểu số.", "A NumPy array holds a single type, so one string changes the whole array. No cell keeps its own numeric type."]
	}, {
		"q": ["np.mean([80, 90, nan, 70]) cho kết quả nào?", "What does np.mean([80, 90, nan, 70]) return?"],
		"o": [
			["80", "80"],
			["60", "60"],
			["nan", "nan"],
			["Báo lỗi", "An error"]
		],
		"a": 2,
		"w": ["Một ô NaN làm cả mean thành NaN nếu không chọn cách bỏ qua (như np.nanmean). 80 là kết quả nếu nan bị bỏ; 60 nếu nan coi như 0 (240 / 4).", "One NaN makes the whole mean NaN unless you choose to skip it (np.nanmean). 80 would be the result if it were dropped; 60 if it counted as 0 (240 / 4)."]
	}],
	"py-ser": [{
		"q": ["Hai Series cùng độ dài 4, nhưng index của Series thứ hai lệch một ngày. Khi cộng bằng +, chuyện gì xảy ra?", "Two Series have the same length 4 but the second one's index is shifted by one day. What happens with +?"],
		"o": [
			["Cộng theo vị trí, hàng thứ nhất với hàng thứ nhất", "Added by position, first row with first row"],
			["Báo lỗi vì index khác nhau", "An error because the indexes differ"],
			["Ngày lệch được tự điền 0", "Unmatched days are filled with 0 automatically"],
			["Chỉ các ngày trùng nhãn được cộng, ngày lệch thành NaN", "Only days with matching labels are added; the others become NaN"]
		],
		"a": 3,
		"w": ["Series canh theo nhãn (index), không theo vị trí mắt thấy. Nhãn không trùng cho NaN, không phải 0.", "Series align on labels (index), not on the position your eye sees. Unmatched labels give NaN, not 0."]
	}, {
		"q": ["a có index 1 đến 4 (giá trị 10, 20, 30, 40); b có index 3 đến 6 (giá trị 1, 2, 3, 4). Trong a + b có bao nhiêu ô khác NaN?", "a has index 1 to 4 (values 10, 20, 30, 40); b has index 3 to 6 (values 1, 2, 3, 4). How many cells of a + b are not NaN?"],
		"o": [
			["4", "4"],
			["2", "2"],
			["6", "6"],
			["0", "0"]
		],
		"a": 1,
		"w": ["Chỉ nhãn 3 và 4 có ở cả hai (31 và 42); nhãn 1, 2, 5, 6 là NaN, tổng 6 nhãn. 4 là số phần tử của mỗi Series.", "Only labels 3 and 4 exist in both (31 and 42); labels 1, 2, 5, 6 are NaN, 6 labels in all. 4 is just the length of each Series."]
	}],
	"py-frame": [{
		"q": ["Bảng 5 dòng có nhãn mặc định 0 đến 4. df.loc[0:2] cho mấy dòng?", "A 5-row table has default labels 0 to 4. How many rows does df.loc[0:2] return?"],
		"o": [
			["2", "2"],
			["1", "1"],
			["3", "3"],
			["5", "5"]
		],
		"a": 2,
		"w": ["loc cắt theo nhãn và gồm cả điểm cuối nên lấy nhãn 0, 1, 2. 2 dòng là kết quả của iloc[0:2].", "loc slices by label and includes the end, so it takes labels 0, 1, 2. 2 rows is what iloc[0:2] would give."]
	}, {
		"q": ["Bảng có nhãn 5, 6, 7, 8, 9. Muốn lấy các dòng từ nhãn 6 đến nhãn 8 (gồm cả hai), dùng cách nào?", "A table has labels 5, 6, 7, 8, 9. Which takes the rows from label 6 to label 8 inclusive?"],
		"o": [
			["df.loc[6:8]", "df.loc[6:8]"],
			["df.iloc[6:8]", "df.iloc[6:8]"],
			["df.iloc[1:3]", "df.iloc[1:3]"],
			["df.loc[6:9]", "df.loc[6:9]"]
		],
		"a": 0,
		"w": ["loc[6:8] lấy nhãn 6, 7, 8. iloc[6:8] dùng vị trí 6 và 7, vốn không tồn tại (rỗng); iloc[1:3] thiếu nhãn 8; loc[6:9] thừa nhãn 9.", "loc[6:8] takes labels 6, 7, 8. iloc[6:8] uses positions 6 and 7, which do not exist (empty); iloc[1:3] misses label 8; loc[6:9] adds label 9."]
	}],
	"py-plot": [{
		"q": ["Vì sao cắt trục tung không bắt đầu từ 0 ở biểu đồ cột có thể gây hiểu lầm?", "Why can a bar chart whose y-axis does not start at 0 be misleading?"],
		"o": [
			["Vì Matplotlib tự chia cho mẫu số", "Because Matplotlib divides by the denominator itself"],
			["Một chênh lệch nhỏ trông như cú nhảy lớn", "A small difference looks like a big jump"],
			["Vì cột sẽ bị đổi sang màu khác", "Because the bars change color"],
			["Vì dữ liệu bị sửa đổi", "Because the data gets altered"]
		],
		"a": 1,
		"w": ["Trục cắt phóng đại độ lệch khi mắt so chiều cao cột. Còn Matplotlib chỉ vẽ những gì bạn đưa vào, không tự chia mẫu số.", "A truncated axis exaggerates differences when the eye compares bar heights. And Matplotlib only draws what you give it; it never divides by a denominator."]
	}, {
		"q": ["Kênh A: 60 form trên 1.500 click. Kênh B: 90 form trên 3.000 click. Kênh nào có hiệu quả cao hơn theo tỷ lệ form trên click?", "Channel A: 60 forms on 1,500 clicks. Channel B: 90 forms on 3,000 clicks. Which channel is better by forms per click?"],
		"o": [
			["Kênh B vì có nhiều form hơn", "Channel B because it has more forms"],
			["Hai kênh bằng nhau", "They are equal"],
			["Không so được nếu thiếu doanh thu", "Cannot be compared without revenue"],
			["Kênh A (4% so với 3%)", "Channel A (4% vs 3%)"]
		],
		"a": 3,
		"w": ["60 / 1.500 = 4% còn 90 / 3.000 = 3%. Kênh B nhiều form hơn chỉ vì có nhiều click hơn; so tỷ lệ phải chia cho mẫu số.", "60 / 1,500 = 4% while 90 / 3,000 = 3%. Channel B has more forms only because it has more clicks; rates need the denominator."]
	}],
	"py-g1": [{
		"q": ["tuan = [80, 90, 70]. Lệnh tuan[3] cho kết quả nào?", "tuan = [80, 90, 70]. What does tuan[3] give?"],
		"o": [
			["IndexError, vì chỉ số lớn nhất là 2", "IndexError, since the highest index is 2"],
			["70", "70"],
			["None", "None"],
			["0", "0"]
		],
		"a": 0,
		"w": ["Chỉ số bắt đầu từ 0 nên 3 phần tử có chỉ số 0, 1, 2. Chỉ số 3 vượt phạm vi và báo lỗi, không trả None hay 0.", "Indexing starts at 0 so three elements have indexes 0, 1, 2. Index 3 is out of range and raises an error rather than returning None or 0."]
	}, {
		"q": ["x = 7 // 2 và y = 7 / 2. Giá trị x + y là bao nhiêu?", "x = 7 // 2 and y = 7 / 2. What is x + y?"],
		"o": [
			["7.0", "7.0"],
			["6", "6"],
			["6.5", "6.5"],
			["7", "7"]
		],
		"a": 2,
		"w": ["7 // 2 = 3 (làm tròn xuống) và 7 / 2 = 3.5, tổng 6.5. 7.0 là do tưởng cả hai đều bằng 3.5.", "7 // 2 = 3 (floor) and 7 / 2 = 3.5, so the sum is 6.5. 7.0 assumes both equal 3.5."]
	}],
	"py-g2": [{
		"q": ["Bảng nhãn 0 đến 9. df.loc[:3] cho mấy dòng?", "A table has labels 0 to 9. How many rows does df.loc[:3] return?"],
		"o": [
			["3", "3"],
			["5", "5"],
			["2", "2"],
			["4", "4"]
		],
		"a": 3,
		"w": ["loc gồm điểm cuối nên lấy nhãn 0, 1, 2, 3 là 4 dòng. 3 dòng là kết quả của iloc[:3].", "loc includes the end, so labels 0, 1, 2, 3 give 4 rows. 3 rows is what iloc[:3] returns."]
	}, {
		"q": ["s1 có index 1, 2, 3 (giá trị 10, 20, 30); s2 có index 2, 3, 4 (giá trị 1, 2, 3). Giá trị của s1 + s2 tại nhãn 3 là gì?", "s1 has index 1, 2, 3 (values 10, 20, 30); s2 has index 2, 3, 4 (values 1, 2, 3). What is (s1 + s2) at label 3?"],
		"o": [
			["33", "33"],
			["32", "32"],
			["NaN", "NaN"],
			["30", "30"]
		],
		"a": 1,
		"w": ["Nhãn 3 có ở cả hai: 30 + 2 = 32. 33 là cộng theo vị trí (30 + 3); NaN sai vì nhãn 3 có mặt ở cả hai Series.", "Label 3 exists in both: 30 + 2 = 32. 33 comes from adding by position (30 + 3); NaN is wrong because label 3 is in both Series."]
	}],
	"tb-why": [{
		"q": ["Điều nào đúng về cách Tableau xử lý dữ liệu bạn thả vào biểu đồ?", "Which is true about how Tableau handles the fields you drop into a view?"],
		"o": [
			["Nó tự đoán câu hỏi bạn muốn trả lời", "It guesses the question you want answered"],
			["Nó tự sửa phép nối đang nhân dòng", "It fixes a join that multiplies rows"],
			["Nó cộng những gì bạn thả vào theo đơn vị dòng của nguồn, nên câu hỏi phải có trước", "It aggregates what you drop in at the source row grain, so the question must come first"],
			["Biểu đồ phức tạp hơn thì đáng tin hơn", "A more complex chart is more trustworthy"]
		],
		"a": 2,
		"w": ["Tableau không biết câu hỏi và không sửa được phép nối nhân dòng; đơn vị dòng và câu hỏi do bạn xác định.", "Tableau does not know your question and cannot repair a row-multiplying join; the row grain and the question are yours to define."]
	}, {
		"q": ["Ba kênh có 40, 30 và 10 form. Kênh dẫn đầu chiếm bao nhiêu phần trăm tổng form?", "Three channels have 40, 30 and 10 forms. What share of total forms does the top channel have?"],
		"o": [
			["50%", "50%"],
			["40%", "40%"],
			["33%", "33%"],
			["75%", "75%"]
		],
		"a": 0,
		"w": ["Tổng là 80 nên 40 / 80 = 50%. 40% nhầm số form với phần trăm; 33% nhầm là chia đều ba kênh.", "The total is 80 so 40 / 80 = 50%. 40% confuses the form count with a percentage; 33% assumes an even split across three channels."]
	}],
	"tb-bar": [{
		"q": ["Khi nối ba kênh GDN, TikTok, FB bằng một đường, điều gì không ổn?", "What is wrong with joining the three channels GDN, TikTok, FB with a line?"],
		"o": [
			["Không sao, đường luôn dễ đọc hơn cột", "Nothing, lines are always easier to read than bars"],
			["Đường hàm ý có thứ tự hay xu hướng giữa các kênh, mà thực tế không có", "A line implies an order or trend between channels, which does not exist"],
			["Chỉ sai nếu thiếu màu", "Only wrong if color is missing"],
			["Chỉ sai khi có hơn 10 kênh", "Only wrong with more than 10 channels"]
		],
		"a": 1,
		"w": ["Đường dành cho trục có thứ tự thật như tuần hay tháng. Với hạng mục như kênh, dùng cột.", "Lines are for a truly ordered axis such as weeks or months. For categories like channels, use bars."]
	}, {
		"q": ["Form theo kênh: GDN 40, TikTok 25, FB 30. Thứ tự cột nào giúp mắt so sánh độ lớn dễ nhất?", "Forms by channel: GDN 40, TikTok 25, FB 30. Which bar order makes sizes easiest to compare?"],
		"o": [
			["FB, GDN, TikTok (theo thứ tự chữ cái)", "FB, GDN, TikTok (alphabetical)"],
			["GDN, TikTok, FB (theo thứ tự nhập)", "GDN, TikTok, FB (as entered)"],
			["TikTok, GDN, FB", "TikTok, GDN, FB"],
			["GDN (40), FB (30), TikTok (25)", "GDN (40), FB (30), TikTok (25)"]
		],
		"a": 3,
		"w": ["Xếp theo độ lớn (40, 30, 25) cho mắt thấy ngay thứ hạng. Thứ tự chữ cái hay thứ tự nhập làm các cột lên xuống lộn xộn.", "Sorting by size (40, 30, 25) shows rank at a glance. Alphabetical or entry order makes the bars jump up and down."]
	}],
	"tb-box": [{
		"q": ["Biểu đồ hộp (box plot) trả lời tốt nhất câu hỏi nào?", "Which question does a box plot answer best?"],
		"o": [
			["Tập giá trị này rộng thế nào, phần giữa và các đuôi ra sao", "How wide is this set of values, and what do the middle and tails look like"],
			["Giá trị này đứng ở tỉnh nào", "Which province does this value belong to"],
			["Từng dòng dữ liệu có giá trị chính xác bao nhiêu", "What is the exact value of each row"],
			["Tổng cộng bao nhiêu form", "What is the total number of forms"]
		],
		"a": 0,
		"w": ["Hộp tóm tắt phân bố (tứ phân vị và ngoại lệ) nhưng giấu từng dòng. Câu hỏi «ở đâu» cần bản đồ và dữ liệu địa điểm thật.", "A box summarizes the distribution (quartiles and outliers) but hides individual rows. A 'where' question needs a map and real location data."]
	}, {
		"q": ["40 tuần đã sắp xếp, Q1 quanh tuần thứ 10 và Q3 quanh tuần thứ 30. Hộp chứa khoảng bao nhiêu tuần?", "40 weeks sorted, with Q1 near the 10th week and Q3 near the 30th. About how many weeks does the box cover?"],
		"o": [
			["10 tuần", "10 weeks"],
			["30 tuần", "30 weeks"],
			["20 tuần", "20 weeks"],
			["40 tuần", "40 weeks"]
		],
		"a": 2,
		"w": ["Hộp đi từ Q1 đến Q3, tức 30 − 10 = 20 tuần (nửa số dữ liệu ở giữa). 40 là toàn bộ, gồm cả đuôi.", "The box runs from Q1 to Q3, so 30 − 10 = 20 weeks (the middle half of the data). 40 would be everything, tails included."]
	}],
	"tb-part": [{
		"q": ["Tám kênh, mỗi kênh khoảng 12 form. Nên chọn biểu đồ nào để so sánh các kênh?", "Eight channels with about 12 forms each. Which chart best compares the channels?"],
		"o": [
			["Biểu đồ tròn tám lát", "An eight-slice pie chart"],
			["Hai biểu đồ tròn cạnh nhau", "Two pie charts side by side"],
			["Bản đồ nhiệt theo địa lý", "A geographic heat map"],
			["Biểu đồ cột", "A bar chart"]
		],
		"a": 3,
		"w": ["Biểu đồ tròn không có trục, nhiều lát gần bằng nhau thì mắt không phân biệt được; cột thắng khi mục đích là so sánh.", "A pie has no axis, and many near-equal slices cannot be told apart; bars win when the goal is comparison."]
	}, {
		"q": ["Hai biểu đồ tròn giống hệt nhau: kênh A chiếm 70%. Tuần 1 tổng 100 form, tuần 2 tổng 50 form. Form của A ở tuần 2 là bao nhiêu?", "Two identical pies show channel A at 70%. Week 1 totals 100 forms, week 2 totals 50. How many forms did A get in week 2?"],
		"o": [
			["70", "70"],
			["35", "35"],
			["50", "50"],
			["15", "15"]
		],
		"a": 1,
		"w": ["70% của 50 = 35. Hai hình tròn trông giống nhau nhưng không cho thấy tổng đã giảm một nửa; 70 là số của tuần 1; 15 là phần của kênh còn lại.", "70% of 50 = 35. The pies look identical yet hide that the total halved; 70 is week 1's figure; 15 is the other channel's share."]
	}],
	"tb-join": [{
		"q": ["Trong Tableau, relationship hay join có miễn bạn khỏi việc kiểm tra đơn vị dòng không?", "In Tableau, do relationships or joins excuse you from checking the row grain?"],
		"o": [
			["Có, Tableau tự khử dòng trùng", "Yes, Tableau removes duplicate rows automatically"],
			["Có, chỉ cần dùng calculated field", "Yes, just use a calculated field"],
			["Không; vẫn phải so số dòng trước và sau khi nối", "No; you still compare row counts before and after the join"],
			["Chỉ cần kiểm tra khi dùng biểu đồ tròn", "Only when using pie charts"]
		],
		"a": 2,
		"w": ["Phép nối nhân dòng thì mọi measure kéo vào sau đó cũng bị nhân. Calculated field không tự vá được điều này.", "If a join multiplies rows, every measure added afterwards is multiplied too. A calculated field does not repair that."]
	}, {
		"q": ["Bảng khách có 100 khách, mỗi khách có phí thành viên 50 (nghìn đồng). Nối với bảng đơn (trung bình 2 đơn mỗi khách) rồi SUM(phí). Kết quả khoảng bao nhiêu?", "The customer table has 100 customers, each with a membership fee of 50 (thousand). Join to the orders table (avg 2 orders per customer) then SUM(fee). About what result?"],
		"o": [
			["10.000 (nghìn đồng), gấp đôi sự thật", "10,000 (thousand), double the truth"],
			["5.000 (nghìn đồng)", "5,000 (thousand)"],
			["200 (nghìn đồng)", "200 (thousand)"],
			["100 (nghìn đồng)", "100 (thousand)"]
		],
		"a": 0,
		"w": ["Mỗi khách xuất hiện 2 dòng sau khi nối nên phí bị cộng 2 lần: 100 × 50 × 2 = 10.000. Giá trị đúng là 100 × 50 = 5.000.", "Each customer appears on 2 rows after the join so the fee is added twice: 100 × 50 × 2 = 10,000. The true value is 100 × 50 = 5,000."]
	}],
	"tb-calc": [{
		"q": ["Calculated field (trường tính toán) trong Tableau là gì?", "What is a calculated field in Tableau?"],
		"o": [
			["Một khảo sát mới được Tableau tự thu thập", "A new survey Tableau collects itself"],
			["Một công thức trên dữ liệu đã có, không phải phép đo mới từ thực tế", "A formula over existing data, not a new measurement from reality"],
			["Một cách sửa phép nối đang nhân dòng", "A way to fix a row-multiplying join"],
			["Một số liệu luôn đúng vì do máy tính tính", "A number that is always right because a computer computes it"]
		],
		"a": 1,
		"w": ["Công thức chỉ biến đổi dữ liệu có sẵn; nó không thêm dữ liệu và không vá được lỗi đơn vị dòng.", "A formula only transforms the data you already have; it adds no data and cannot repair a row-grain error."]
	}, {
		"q": ["Hai dòng: (20 form, 100 click) và (30 form, 600 click). Tỷ lệ của tổng SUM(form) / SUM(click) bằng khoảng bao nhiêu?", "Two rows: (20 forms, 100 clicks) and (30 forms, 600 clicks). About what is SUM(forms) / SUM(clicks)?"],
		"o": [
			["12,5%", "12.5%"],
			["25%", "25%"],
			["50%", "50%"],
			["7,1%", "7.1%"]
		],
		"a": 3,
		"w": ["(20 + 30) / (100 + 600) = 50 / 700 ≈ 7,1%. 12,5% là trung bình hai tỷ lệ dòng (20% và 5%); 25% là tổng hai tỷ lệ.", "(20 + 30) / (100 + 600) = 50 / 700 ≈ 7.1%. 12.5% is the average of the two row rates (20% and 5%); 25% is their sum."]
	}],
	"tb-dual": [{
		"q": ["Trên biểu đồ dual axis, hai đường cắt nhau tại một điểm. Nên hiểu thế nào?", "On a dual-axis chart two lines cross at a point. How should you read it?"],
		"o": [
			["Không có ý nghĩa tự thân, vì hai trục có đơn vị và thang khác nhau", "It carries no meaning by itself, since the axes have different units and scales"],
			["Hai đại lượng bằng nhau tại điểm đó", "The two measures are equal at that point"],
			["Đó là điểm hòa vốn", "It is the break-even point"],
			["Chắc chắn là bước ngoặt của chiến dịch", "It is surely the campaign's turning point"]
		],
		"a": 0,
		"w": ["Mỗi trục có thể có thang riêng và không bắt đầu từ 0, nên giao điểm chỉ là hệ quả của cách chọn thang. Phải ghi rõ hai đơn vị hoặc tách thành hai hình.", "Each axis can have its own scale and not start at 0, so a crossing is just an artifact of scale choice. Label both units or split into two charts."]
	}, {
		"q": ["Tuần 1: 40 form, chi 10 triệu. Tuần 2: 80 form, chi 11 triệu. Chi phí mỗi form ở tuần 2 là bao nhiêu?", "Week 1: 40 forms, spend 10 million. Week 2: 80 forms, spend 11 million. What is the cost per form in week 2?"],
		"o": [
			["275 nghìn đồng", "275 thousand"],
			["250 nghìn đồng", "250 thousand"],
			["137,5 nghìn đồng", "137.5 thousand"],
			["110 nghìn đồng", "110 thousand"]
		],
		"a": 2,
		"w": ["11.000 nghìn / 80 = 137,5 nghìn. 250 nghìn là của tuần 1 (10.000 / 40); 275 nghìn do lấy chi tuần 2 chia form tuần 1.", "11,000 thousand / 80 = 137.5 thousand. 250 thousand is week 1 (10,000 / 40); 275 thousand mixes week 2 spend with week 1 forms."]
	}],
	"xa-text": [{
		"q": ["A1 chứa \"F-12\". =MID(A1, 3, 2) trả về gì?", "A1 contains \"F-12\". What does =MID(A1, 3, 2) return?"],
		"o": [
			["Số 12 sẵn sàng để cộng", "The number 12, ready to add"],
			["Chữ \"F-\"", "The text \"F-\""],
			["Số 3", "The number 3"],
			["Chữ \"12\" (text), chưa phải số", "The text \"12\", not yet a number"]
		],
		"a": 3,
		"w": ["Hàm xử lý chuỗi trả về chữ. Muốn thành số phải đổi kiểu, ví dụ VALUE(MID(A1, 3, 2)).", "Text functions return text. To get a number you must convert, e.g. VALUE(MID(A1, 3, 2))."]
	}, {
		"q": ["=VALUE(MID(\"F-12\", 3, 2)) + VALUE(MID(\"F-30\", 3, 2)) cho kết quả nào?", "What does =VALUE(MID(\"F-12\", 3, 2)) + VALUE(MID(\"F-30\", 3, 2)) return?"],
		"o": [
			["1230", "1230"],
			["42", "42"],
			["#VALUE!", "#VALUE!"],
			["4", "4"]
		],
		"a": 1,
		"w": ["MID lấy \"12\" và \"30\", VALUE đổi thành số 12 và 30, tổng 42. 1230 là nối chuỗi, không phải cộng.", "MID takes \"12\" and \"30\", VALUE turns them into 12 and 30, sum 42. 1230 would be concatenation, not addition."]
	}],
	"xa-count": [{
		"q": ["Cột tên có 100 ô chữ đầy đủ. =COUNT(cột tên) cho kết quả nào?", "A name column has 100 filled text cells. What does =COUNT(name column) return?"],
		"o": [
			["100", "100"],
			["99", "99"],
			["0", "0"],
			["Báo lỗi", "An error"]
		],
		"a": 2,
		"w": ["COUNT chỉ đếm ô số và lặng lẽ bỏ qua chữ. Muốn đếm ô không rỗng phải dùng COUNTA.", "COUNT only counts numeric cells and silently ignores text. To count non-empty cells you need COUNTA."]
	}, {
		"q": ["Cột form 100 dòng có 90 ô số và 10 ô trống, tổng các số là 1.800. AVERAGE của cột bằng bao nhiêu?", "A form column has 100 rows: 90 numbers and 10 blanks, summing to 1,800. What is AVERAGE of the column?"],
		"o": [
			["20", "20"],
			["18", "18"],
			["180", "180"],
			["90", "90"]
		],
		"a": 0,
		"w": ["AVERAGE bỏ qua ô trống nên 1.800 / 90 = 20. 18 là do chia cho 100 dòng như thể ô trống bằng 0.", "AVERAGE skips blanks so 1,800 / 90 = 20. 18 divides by all 100 rows as if blanks were 0."]
	}],
	"xa-match": [{
		"q": ["INDEX và MATCH với match_type = 1 trên cột khóa chưa sắp xếp tăng dần, điều gì có thể xảy ra?", "What can happen with INDEX and MATCH using match_type = 1 on a key column that is not sorted ascending?"],
		"o": [
			["Luôn trả #N/A", "It always returns #N/A"],
			["Có thể trả về kết quả sai mà không báo lỗi", "It may return a wrong result without any error"],
			["Tự động sắp xếp lại cột", "It sorts the column automatically"],
			["Giống hệt match_type = 0", "Identical to match_type = 0"]
		],
		"a": 1,
		"w": ["match_type 1 là tìm gần đúng trên cột tăng dần, cùng bẫy với VLOOKUP TRUE. Muốn tìm đúng thì dùng 0.", "match_type 1 is an approximate match on an ascending column, the same trap as VLOOKUP TRUE. Use 0 for an exact match."]
	}, {
		"q": ["Cột A là giá trị trả [100, 200, 300, 400] ở A1:A4; cột B là khóa [K1, K2, K3, K4] ở B1:B4. =INDEX(A1:A4, MATCH(\"K3\", B1:B4, 0)) cho kết quả nào?", "Column A holds return values [100, 200, 300, 400] in A1:A4; column B holds keys [K1, K2, K3, K4] in B1:B4. What does =INDEX(A1:A4, MATCH(\"K3\", B1:B4, 0)) return?"],
		"o": [
			["3", "3"],
			["200", "200"],
			["#N/A", "#N/A"],
			["300", "300"]
		],
		"a": 3,
		"w": ["MATCH cho vị trí 3 của K3, INDEX lấy ô thứ 3 của cột A là 300. Cột trả nằm bên trái khóa cũng không sao; VLOOKUP thì không làm được. 3 chỉ là vị trí.", "MATCH gives position 3 for K3 and INDEX takes the 3rd cell of column A, 300. A return column left of the key is fine; VLOOKUP cannot do that. 3 is just the position."]
	}],
	"xa-what": [{
		"q": ["Bảng hai chiều đổi số bán và giá cho ra nhiều ô lãi. Mỗi ô đó là gì?", "A two-way table varying units sold and price shows many profit cells. What is each cell?"],
		"o": [
			["Một lần tính lại công thức với giả định khác, chưa phải điều đã xảy ra", "One recalculation of the formula under a different assumption, not something that happened"],
			["Một dự báo chắc chắn của tuần tới", "A certain forecast for next week"],
			["Một quan sát thật từ thị trường", "A real observation from the market"],
			["Một kết quả đã được kiểm định", "A validated result"]
		],
		"a": 0,
		"w": ["Đổi đầu vào chỉ chạy lại công thức. Không bộ giả định nào là sự thật cho đến khi việc xảy ra và bạn đo lại.", "Changing inputs just reruns the formula. No assumption set is true until it happens and you measure it."]
	}, {
		"q": ["Lãi = số bán × giá − chi. Với số bán 60, giá 120, chi 3.000, lãi là bao nhiêu?", "Profit = units × price − cost. With units 60, price 120, cost 3,000, what is the profit?"],
		"o": [
			["3.000", "3,000"],
			["7.200", "7,200"],
			["4.200", "4,200"],
			["10.200", "10,200"]
		],
		"a": 2,
		"w": ["60 × 120 = 7.200, trừ 3.000 còn 4.200. 7.200 quên trừ chi; 3.000 là kết quả của bộ số cũ (50 bán); 10.200 là cộng thay vì trừ.", "60 × 120 = 7,200, minus 3,000 leaves 4,200. 7,200 forgets the cost; 3,000 belongs to the old inputs (50 units); 10,200 adds instead of subtracting."]
	}],
	"xa-macro": [{
		"q": ["Nhận file Excel có macro từ người lạ. Điều nào đúng?", "You receive an Excel file with macros from a stranger. Which is true?"],
		"o": [
			["Macro chỉ là định dạng nên an toàn", "Macros are only formatting so they are safe"],
			["Macro chỉ chạy khi bạn tự ghi lại", "Macros only run if you recorded them yourself"],
			["Macro tự kiểm tra dữ liệu giúp bạn", "Macros validate the data for you"],
			["Mở và bật macro là chạy chương trình của họ trên máy bạn", "Opening it and enabling macros runs their program on your machine"]
		],
		"a": 3,
		"w": ["Macro là mã (thường là VBA) và có thể sửa dữ liệu mà không hỏi lại. Nó lặp thao tác, không đưa ra quyết định hay kiểm định.", "A macro is code (usually VBA) and can change data without asking. It repeats actions; it makes no decisions and runs no validation."]
	}, {
		"q": ["Macro dán 30 dòng mới vào A2:A31 mỗi sáng. Sau 5 sáng, vùng A2:A31 chứa dữ liệu của những ngày nào?", "A macro pastes 30 new rows into A2:A31 every morning. After 5 mornings, whose data does A2:A31 hold?"],
		"o": [
			["Cả 5 sáng, 150 dòng", "All 5 mornings, 150 rows"],
			["Chỉ của sáng thứ 5, 30 dòng", "Only the 5th morning's 30 rows"],
			["Sáng đầu và sáng cuối", "The first and last mornings"],
			["Không có gì vì macro báo lỗi", "Nothing, because the macro errors out"]
		],
		"a": 1,
		"w": ["A2:A31 là 30 ô, và macro ghi đè chúng mỗi lần chạy, nên chỉ còn dữ liệu lần cuối. Muốn giữ lịch sử phải dán xuống dòng trống kế tiếp.", "A2:A31 is 30 cells and the macro overwrites them each run, leaving only the last batch. To keep history you must paste below the next empty row."]
	}],
	"pb-model": [{
		"q": ["Trong mô hình Power BI, quan hệ không active (inactive) được dùng khi nào?", "In a Power BI model, when is an inactive relationship used?"],
		"o": [
			["Luôn được dùng cùng quan hệ active", "Always, alongside the active one"],
			["Không bao giờ được dùng", "Never"],
			["Chỉ khi một measure gọi đến nó một cách rõ ràng", "Only when a measure explicitly calls it"],
			["Khi biểu đồ có nhiều hơn 5 trường", "When the chart has more than 5 fields"]
		],
		"a": 2,
		"w": ["Quan hệ inactive nằm im cho đến khi một measure kích hoạt nó. Hai đường nối active giữa cùng cặp bảng thì mô hình mơ hồ.", "An inactive relationship stays dormant until a measure activates it. Two active paths between the same tables make the model ambiguous."]
	}, {
		"q": ["Bảng Đơn có 200 dòng thuộc 100 khách khác nhau. Để thẻ số hiện đúng «số khách», cần làm gì?", "The Orders table has 200 rows from 100 distinct customers. To make a card show the true number of customers, what should you do?"],
		"o": [
			["Đếm khóa khách ở bảng Khách, hoặc count distinct mã khách; kết quả 100", "Count the customer key in the Customers table, or count distinct customer ID; result 100"],
			["Dùng Count of orders, kết quả 200", "Use Count of orders, result 200"],
			["Đổi tên thẻ thành «khách» là đủ", "Just rename the card to 'customers'"],
			["Chia 200 cho 4", "Divide 200 by 4"]
		],
		"a": 0,
		"w": ["Count of orders đếm đơn nên ra 200 dù tên thẻ là gì. Đếm khách phải đếm khóa khách (distinct) và ra 100.", "Count of orders counts orders, so it gives 200 whatever the card is named. Counting customers means counting distinct customer keys, giving 100."]
	}],
	"pb-pq": [{
		"q": ["Query có bước lọc «chỉ TikTok». Nguồn dữ liệu đã có thêm kênh mới. Sau khi làm mới, bảng có gì?", "The query has a filter step 'TikTok only'. The source now contains new channels. After refresh, what does the table hold?"],
		"o": [
			["Thêm các kênh mới tự động", "The new channels are added automatically"],
			["Vẫn chỉ TikTok, vì làm mới chạy lại đúng các bước đang có", "Still only TikTok, because refresh reruns exactly the steps in place"],
			["Rỗng vì nguồn đã đổi", "Empty because the source changed"],
			["Bước lọc tự gỡ bỏ", "The filter step removes itself"]
		],
		"a": 1,
		"w": ["Power Query là một công thức; làm mới chạy lại công thức đó chứ không tự lấy thêm cho đủ. Kênh mới bị lọc bỏ như cũ.", "Power Query is a recipe; refresh reruns that recipe and does not fetch extra to be complete. New channels are filtered out as before."]
	}, {
		"q": ["Cột form có 10 dòng, trong đó 2 dòng chứa chữ \"n/a\". Bước đổi kiểu sang số cho kết quả nào?", "A form column has 10 rows, 2 of which contain the text \"n/a\". What does a change-type-to-number step produce?"],
		"o": [
			["10 ô số, \"n/a\" được đổi thành 0", "10 numeric cells, with \"n/a\" turned into 0"],
			["Chỉ còn 8 dòng, hai dòng kia bị xóa", "Only 8 rows remain, the other 2 are deleted"],
			["Cả cột thành lỗi", "The whole column becomes errors"],
			["8 ô là số, 2 ô thành lỗi hoặc trống; cần xem các dòng lỗi", "8 numeric cells and 2 cells turning into errors or blanks; you should check the error rows"]
		],
		"a": 3,
		"w": ["Ô không phải số thành lỗi hoặc trống tùy cách đặt, không bao giờ tự thành 0. Nếu chỉ nhìn một thẻ tổng sẽ bỏ sót hai dòng đó.", "Non-numeric cells become errors or blanks depending on settings, never 0 automatically. Looking only at a total card would miss those two rows."]
	}],
	"pb-grain": [{
		"q": ["Thẻ số hiện 200 (đếm dòng của bảng chi tiết hàng). Để thẻ nói đúng «số khách», cần gì?", "A card shows 200 (a count of rows in the line-item table). What is needed for it to truthfully say 'customers'?"],
		"o": [
			["Count distinct trên khóa khách, hoặc đếm ở bảng khách", "Count distinct on the customer key, or count in the customer table"],
			["Chỉ cần đổi tên thẻ", "Just rename the card"],
			["Đổi định dạng số của thẻ", "Change the card's number format"],
			["Chia 200 cho một số tùy ý", "Divide 200 by an arbitrary number"]
		],
		"a": 0,
		"w": ["Sai đơn vị dòng không sửa được bằng tên hay định dạng. 200 vẫn là số dòng hàng; phải đếm đúng khóa của khách.", "A wrong row grain cannot be fixed by a label or format. 200 is still line items; you must count the customer key."]
	}, {
		"q": ["Có 200 dòng hàng thuộc 80 đơn của 50 khách. Trung bình mỗi khách có bao nhiêu đơn?", "There are 200 line items in 80 orders from 50 customers. How many orders per customer on average?"],
		"o": [
			["4", "4"],
			["2,5", "2.5"],
			["1,6", "1.6"],
			["0,625", "0.625"]
		],
		"a": 2,
		"w": ["80 đơn / 50 khách = 1,6. 4 là dòng hàng chia khách (200 / 50); 2,5 là dòng hàng chia đơn (200 / 80); 0,625 là phép chia ngược.", "80 orders / 50 customers = 1.6. 4 is line items per customer (200 / 50); 2.5 is line items per order (200 / 80); 0.625 is the division inverted."]
	}],
	"pb-dax": [{
		"q": ["Slicer đang chọn TikTok. Cột tính «tỷ lệ của dòng» và measure form thay đổi thế nào?", "A slicer selects TikTok. What happens to a calculated column 'row rate' and to a form measure?"],
		"o": [
			["Cả hai đều tính lại theo TikTok", "Both recalculate for TikTok"],
			["Cột tính đổi, measure giữ nguyên", "The column changes, the measure stays"],
			["Cả hai đều giữ nguyên", "Neither changes"],
			["Measure đổi theo TikTok, còn cột tính vẫn là giá trị đã lưu lúc làm mới", "The measure changes to TikTok, while the calculated column keeps its stored value from refresh"]
		],
		"a": 3,
		"w": ["Measure tính trong filter context đang bật; cột tính được lưu theo từng dòng khi làm mới và không nghe slicer.", "A measure is computed in the active filter context; a calculated column is stored per row at refresh and ignores the slicer."]
	}, {
		"q": ["Hai dòng: (20 form, 100 click) và (10 form, 400 click). Measure SUM(form) / SUM(click) cho kết quả nào?", "Two rows: (20 forms, 100 clicks) and (10 forms, 400 clicks). What does the measure SUM(form) / SUM(click) give?"],
		"o": [
			["22,5%", "22.5%"],
			["6%", "6%"],
			["11,25%", "11.25%"],
			["30%", "30%"]
		],
		"a": 1,
		"w": ["(20 + 10) / (100 + 400) = 30 / 500 = 6%. 22,5% là cộng hai cột tỷ lệ (20% + 2,5%); 11,25% là trung bình hai tỷ lệ dòng.", "(20 + 10) / (100 + 400) = 30 / 500 = 6%. 22.5% adds the two row rates (20% + 2.5%); 11.25% averages them."]
	}],
	"pb-page": [{
		"q": ["Trang báo cáo có câu hỏi đầu trang là «Ngân sách tuần này chia thế nào?». Một biểu đồ doanh thu theo thương hiệu cả năm nên xử lý ra sao?", "A report page is headed «How should this week's budget be split?». What should you do with a chart of full-year revenue by brand?"],
		"o": [
			["Chuyển sang một trang khác cho câu hỏi khác", "Move it to a different page built for a different question"],
			["Giữ lại trang này và thêm một slicer cho nó", "Keep it on this page and add a slicer for it"],
			["Dùng bookmark để ẩn hiện nó khi cần", "Use a bookmark to show and hide it when needed"],
			["Thu nhỏ lại cho vừa trang", "Shrink it so it fits on the page"]
		],
		"a": 0,
		"w": ["Biểu đồ không phục vụ câu hỏi đầu trang thì thuộc về trang khác (có thể qua drill-through). Slicer, bookmark hay thu nhỏ chỉ che chứ không làm trang bớt lạc đề.", "A chart that does not serve the headline question belongs on another page (possibly via drill-through). A slicer, bookmark or shrinking only hides the problem and the page stays off-topic."]
	}, {
		"q": ["Trang A có 3 biểu đồ và 1 slicer. Trang B có 8 biểu đồ và 6 slicer. Trang B nhiều hơn trang A bao nhiêu thành phần (biểu đồ cộng slicer)?", "Page A has 3 charts and 1 slicer. Page B has 8 charts and 6 slicers. How many more components (charts plus slicers) does page B have than page A?"],
		"o": [
			["5 thành phần, vì chỉ tính chênh lệch biểu đồ", "5 components, counting only the chart difference"],
			["10 thành phần (14 so với 4)", "10 components (14 versus 4)"],
			["14 thành phần", "14 components"],
			["4 thành phần", "4 components"]
		],
		"a": 1,
		"w": ["A có 3+1=4, B có 8+6=14, chênh 14-4=10. Con số 5 chỉ là chênh riêng biểu đồ (hoặc riêng slicer); 14 và 4 là tổng của từng trang chứ không phải chênh lệch. Trang gọn hơn thường phục vụ quyết định tốt hơn.", "A has 3+1=4 and B has 8+6=14, a difference of 14-4=10. The 5 is only the chart difference (or only the slicer difference); 14 and 4 are the page totals, not the gap. The leaner page usually serves the decision better."]
	}],
	"pb-rls": [{
		"q": ["Bạn muốn trưởng kênh A không thể xem dữ liệu của kênh B, kể cả khi họ tự thao tác trên báo cáo. Cách nào đúng?", "You want the head of channel A to be unable to see channel B data, even if they play with the report. Which approach is right?"],
		"o": [
			["Đặt một slicer mặc định ở kênh A", "Set a default slicer on channel A"],
			["Ẩn trang chứa dữ liệu kênh B", "Hide the page that holds channel B data"],
			["Viết role RLS lọc theo mã kênh của họ", "Write an RLS role that filters on their channel code"],
			["Viết measure dùng CALCULATE để chỉ tính kênh A", "Write a measure using CALCULATE that only counts channel A"]
		],
		"a": 2,
		"w": ["RLS lọc trên mô hình theo vai trò nên người xem không bật được kênh khác. Slicer người xem tự đổi được, trang ẩn vẫn truy cập được nếu biết đường, và measure có thể vô tình bỏ bộ lọc.", "RLS filters on the model by role, so the viewer cannot switch to another channel. A slicer can be changed by the viewer, a hidden page is still reachable by someone who knows how, and a measure may accidentally drop the filter."]
	}, {
		"q": ["Bảng có 200 dòng, chia theo 4 kênh: 80, 60, 40 và 20 dòng. Role RLS lọc đúng mã kênh có 60 dòng. Trưởng kênh đó thấy bao nhiêu dòng?", "A table has 200 rows split across 4 channels: 80, 60, 40 and 20 rows. The RLS role filters on the channel with 60 rows. How many rows does that channel head see?"],
		"o": [
			["200 dòng, vì dữ liệu vẫn nằm trong mô hình", "200 rows, because the data is still in the model"],
			["140 dòng, là phần của các kênh còn lại", "140 rows, the share of the other channels"],
			["80 dòng, là kênh lớn nhất", "80 rows, the largest channel"],
			["60 dòng", "60 rows"]
		],
		"a": 3,
		"w": ["RLS chỉ giữ lại các dòng khớp mã kênh nên còn 60 dòng. 200 là kết quả của trang ẩn hay slicer, nơi dữ liệu vẫn nằm trong mô hình của người xem.", "RLS keeps only rows matching the channel code, leaving 60. The 200 is what you would get with a hidden page or a slicer, where the data still sits in the viewer's model."]
	}],
	"pb-refresh": [{
		"q": ["Hôm qua nguồn thêm dữ liệu mới nhưng lần làm mới đêm qua bị lỗi. Báo cáo Import vẫn mở bình thường, không báo gì. Các số trên đó là gì?", "The source added new data yesterday but last night's refresh failed. The Import report still opens normally and shows no warning. What are the numbers on it?"],
		"o": [
			["Số của hôm nay, vì báo cáo vẫn chạy bình thường", "Today's numbers, because the report still runs fine"],
			["Số của lần làm mới thành công gần nhất, tức số cũ", "Numbers from the last successful refresh, so they are stale"],
			["Số của hôm nay, vì measure tính lại mỗi khi mở", "Today's numbers, because measures recalculate on open"],
			["Số rỗng, vì lần làm mới lỗi xóa dữ liệu", "Blank numbers, because a failed refresh wipes the data"]
		],
		"a": 1,
		"w": ["Import giữ dữ liệu của lần làm mới trước đến khi có lần mới. Measure chỉ tính lại trên dữ liệu đang có trong mô hình, không kéo thêm dòng từ nguồn.", "Import keeps the data from the previous refresh until a new one succeeds. Measures only recalculate over what is already in the model; they do not pull new rows from the source."]
	}, {
		"q": ["Nguồn có 20.000 dòng nhưng báo cáo chỉ có 19.000 dòng vì lần làm mới lỗi. Báo cáo hụt bao nhiêu phần trăm so với nguồn?", "The source has 20,000 rows but the report only has 19,000 because a refresh failed. By what percentage is the report short of the source?"],
		"o": [
			["5,3%, vì lấy 1.000 chia cho 19.000", "5.3%, taking 1,000 divided by 19,000"],
			["0,5%", "0.5%"],
			["5%", "5%"],
			["10%", "10%"]
		],
		"a": 2,
		"w": ["Thiếu 1.000 trên nền 20.000 là 1.000/20.000 = 5%. Chia cho 19.000 là lấy sai mẫu số (nền phải là nguồn đầy đủ).", "Missing 1,000 against a base of 20,000 is 1,000/20,000 = 5%. Dividing by 19,000 uses the wrong denominator; the base is the full source."]
	}],
	"fw-5why": [{
		"q": ["Khi nào thì nên dừng chuỗi «vì sao»?", "When should you stop asking «why»?"],
		"o": [
			["Khi đã hỏi đúng năm lần", "After exactly five questions"],
			["Khi tìm ra người đã làm sai", "When you find the person who made the mistake"],
			["Khi gặp nguyên nhân như «thị trường» hay «ý thức kém»", "When you reach a cause like «the market» or «poor attitude»"],
			["Khi gặp một điều có thể thay đổi, như một quy trình hay một phân công", "When you reach something that can be changed, such as a process or an assignment"]
		],
		"a": 3,
		"w": ["Chuỗi dừng ở điểm can thiệp được. Năm chỉ là gợi ý để đếm; «do con người» hay «thị trường» là chuỗi chưa có điểm can thiệp.", "Stop at a point you can act on. Five is only a rule of thumb; «human error» or «the market» means the chain has no intervention point yet."]
	}, {
		"q": ["Quảng cáo ít form. Vì sao 1: nút form nằm cuối trang. Vì sao 2: trang mới đưa lên không ai kiểm form. Vì sao 3: quy trình đưa trang lên không có bước kiểm form. Điểm can thiệp nào hợp lý nhất?", "An ad gets few forms. Why 1: the form button sits at the bottom of the page. Why 2: nobody checked the form when the new page went live. Why 3: the launch process has no form-check step. Which intervention point makes the most sense?"],
		"o": [
			["Thêm bước kiểm form vào quy trình đưa trang lên", "Add a form-check step to the page launch process"],
			["Nhắc nhân viên cẩn thận hơn lần sau", "Remind staff to be more careful next time"],
			["Dời nút form lên đầu trang rồi dừng", "Move the button to the top and stop there"],
			["Hỏi thêm hai câu vì sao cho đủ năm", "Ask two more whys to reach five"]
		],
		"a": 0,
		"w": ["Câu 3 đã chạm quy trình, là thứ đổi được và chặn lỗi lặp lại. Dời nút chỉ vá triệu chứng, nhắc nhở không đổi gì, còn hỏi cho đủ năm là coi con số như định lý.", "Why 3 reaches the process, which can be changed and prevents recurrence. Moving the button only patches the symptom, a reminder changes nothing, and asking to reach five treats the number as a law."]
	}],
	"fw-spin": [{
		"q": ["Bạn hỏi khách: «Anh có đồng ý một thước đo giúp cắt kênh yếu sẽ rất hữu ích không?» Điều gì đúng về câu này?", "You ask a client: «Would you agree a metric that helps cut weak channels would be very useful?» What is true about this question?"],
		"o": [
			["Đó là một câu need-payoff chuẩn, ghi luôn thành nhu cầu của khách", "It is a textbook need-payoff question, so record it as the client's need"],
			["Đó là câu situation vì hỏi về hiện trạng", "It is a situation question because it asks about the current state"],
			["Đó là câu bạn đặt sẵn vào miệng khách, nên không ghi thành nhu cầu của họ", "It puts words in the client's mouth, so you should not record it as their need"],
			["Khách gật là đã có hợp đồng", "If the client nods, you have a deal"]
		],
		"a": 2,
		"w": ["SPIN sắp xếp câu hỏi để hiểu vấn đề, không tạo ra nhu cầu. Cần ghi lại đúng câu khách tự nói; một cái gật trước câu bạn dẫn dắt không phải nhu cầu hay hợp đồng.", "SPIN orders questions to understand a problem; it does not create need. Record what the client says in their own words; a nod to a leading question is neither a need nor a contract."]
	}, {
		"q": ["Câu hỏi «Nếu không biết kênh nào đáng tiền thì ngân sách tháng sau sẽ được chốt thế nào?» thuộc loại nào của SPIN?", "Which SPIN type is the question «If you do not know which channel is worth the money, how will next month's budget be decided?»"],
		"o": [
			["Situation", "Situation"],
			["Problem", "Problem"],
			["Need-payoff", "Need-payoff"],
			["Implication", "Implication"]
		],
		"a": 3,
		"w": ["Câu này hỏi hệ quả của vấn đề (ngân sách chốt theo cảm giác) nên là Implication. Problem là nêu khó khăn («không biết kênh nào đáng tiền»), Need-payoff là lợi ích của giải pháp.", "It asks about the consequence of a problem (budget set by gut feel), so it is Implication. Problem states the difficulty («we do not know which channel pays»), and Need-payoff is the benefit of a solution."]
	}],
	"fw-ask": [{
		"q": ["Bạn hỏi «Anh có thấy kênh này yếu không?» và khách trả lời «yếu». Điều gì đúng?", "You ask «Do you think this channel is weak?» and the client says «weak». What is true?"],
		"o": [
			["Đó mới là ý kiến; muốn thành kết luận cần gắn với một ngưỡng đã viết ra", "It is only an opinion; to become a conclusion it needs a written threshold"],
			["Đó là kết luận, vì khách là người hiểu kênh nhất", "It is a conclusion, because the client knows the channel best"],
			["Đó là kết luận nếu hỏi thêm vài người nữa đều nói «yếu»", "It is a conclusion if a few more people also say «weak»"],
			["Đó là một con số vì đã có câu trả lời", "It is a number because there is an answer"]
		],
		"a": 0,
		"w": ["Hỏi xong chưa có nghĩa là biết. Nhiều người cùng nói «yếu» vẫn là nhiều ý kiến; cần thước đo và ngưỡng từ trước.", "Having asked does not mean knowing. Many people saying «weak» are still many opinions; you need a measure and a threshold set beforehand."]
	}, {
		"q": ["Ngưỡng đã viết: tỷ lệ form dưới 2% thì coi là yếu. Một kênh có 500 click và 8 form. Kết luận nào đúng?", "The written threshold says a form rate below 2% counts as weak. A channel has 500 clicks and 8 forms. Which conclusion is correct?"],
		"o": [
			["Tỷ lệ 16%, trên ngưỡng, nên kênh không yếu", "The rate is 16%, above the threshold, so the channel is not weak"],
			["Tỷ lệ 1,6%, dưới ngưỡng 2%, nên kết luận có căn cứ là yếu", "The rate is 1.6%, below the 2% threshold, so «weak» is a grounded conclusion"],
			["Tỷ lệ 0,16%, thấp hơn nhiều so với ngưỡng", "The rate is 0.16%, far below the threshold"],
			["Tỷ lệ 1,6% nhưng vẫn chỉ là ý kiến vì khách cũng nói yếu", "The rate is 1.6% but it is still only an opinion because the client also said weak"]
		],
		"a": 1,
		"w": ["8/500 = 0,016 = 1,6%, dưới 2%. Lỗi hay gặp là lệch dấu phẩy thập phân (16% hoặc 0,16%). Khi đã có ngưỡng và số đo, đó là kết luận chứ không còn là ý kiến.", "8/500 = 0.016 = 1.6%, below 2%. A common slip is shifting the decimal point (16% or 0.16%). With a threshold and a measurement, this is a conclusion, no longer an opinion."]
	}],
	"fw-bmc": [{
		"q": ["Ô «Kênh» trong canvas ghi «TikTok». Điều gì đúng?", "The «Channels» box on the canvas says «TikTok». What is true?"],
		"o": [
			["Đó là bằng chứng vì đã được điền vào canvas", "It is evidence because it has been filled into the canvas"],
			["Đó là kết luận về kênh hiệu quả nhất", "It is a conclusion that this is the most effective channel"],
			["Đó là mục tiêu SMART vì có tên kênh cụ thể", "It is a SMART goal because it names a specific channel"],
			["Đó là một giả thuyết, cần cách kiểm như tỷ lệ form trên click của kênh đó", "It is a hypothesis that needs a test, such as that channel's form-to-click rate"]
		],
		"a": 3,
		"w": ["Canvas chín ô là chín giả thuyết. Điền chữ không phải bằng chứng và cũng không thay được mục tiêu SMART.", "A nine-box canvas holds nine hypotheses. Filling in text is not evidence and does not replace a SMART goal."]
	}, {
		"q": ["Canvas 9 ô: 2 ô đã kiểm bằng số liệu, 3 ô ghi «chưa có căn cứ», 4 ô điền chữ nhưng chưa kiểm. Có bao nhiêu ô chưa có bằng chứng?", "A 9-box canvas: 2 boxes tested with data, 3 marked «no basis yet», 4 filled in but untested. How many boxes still lack evidence?"],
		"o": [
			["7 ô", "7 boxes"],
			["4 ô, vì ô ghi «chưa có căn cứ» là đã xử lý rồi", "4 boxes, since boxes marked «no basis yet» are already dealt with"],
			["5 ô", "5 boxes"],
			["2 ô", "2 boxes"]
		],
		"a": 0,
		"w": ["Chỉ 2 ô được kiểm nên còn 9-2=7 ô chưa có bằng chứng (3+4). Ghi trung thực «chưa có căn cứ» là tốt, nhưng ô đó vẫn chưa có bằng chứng.", "Only 2 boxes were tested, so 9-2=7 lack evidence (3+4). Honestly writing «no basis yet» is good practice, but that box still has no evidence."]
	}],
	"fw-mece": [{
		"q": ["Câu hỏi «Form đến từ đâu?» được chia thành Facebook, TikTok, Google và «khách trẻ». Vấn đề là gì?", "The question «Where do forms come from?» is split into Facebook, TikTok, Google and «young customers». What is the problem?"],
		"o": [
			["Thiếu kênh nên các nhánh không đủ", "Channels are missing so the branches are incomplete"],
			["Nhánh «khách trẻ» là tiêu chí khác, một form có thể thuộc cả TikTok lẫn khách trẻ nên bị đếm hai lần", "«Young customers» is a different criterion; a form can be both TikTok and young, so it is counted twice"],
			["Không vấn đề gì, thêm góc nhìn càng tốt", "No problem, more angles are better"],
			["Chia 4 nhánh là quá nhiều nên không MECE", "Four branches are too many so it is not MECE"]
		],
		"a": 1,
		"w": ["MECE đòi các nhánh không chồng và cộng đủ. Trộn thêm một tiêu chí khác làm các nhánh chồng nhau. Số nhánh nhiều hay ít không quyết định MECE.", "MECE requires branches that do not overlap and add up fully. Mixing in another criterion makes branches overlap. The number of branches does not decide MECE."]
	}, {
		"q": ["Tuần có 100 form. Chia theo kênh được 45, 30 và 15 form. Phần còn lại là gì?", "A week has 100 forms. By channel you get 45, 30 and 15 forms. What is the remainder?"],
		"o": [
			["10 form bị đếm hai lần", "10 forms that were counted twice"],
			["90 form bị sót", "90 forms that were missed"],
			["10 form chưa thuộc nhánh nào, tức bị sót và không ai nhìn tới", "10 forms that belong to no branch, so they are missed and nobody looks at them"],
			["Không có gì, vì 3 nhánh là đủ", "Nothing, because 3 branches are enough"]
		],
		"a": 2,
		"w": ["45+30+15=90, còn 100-90=10 form không có chỗ. Sót khác với đếm hai lần (chồng nhau); phải thêm nhánh như «kênh khác» để cộng đủ 100.", "45+30+15=90, leaving 100-90=10 forms with no home. Being missed is different from double counting (overlap); add a branch such as «other channels» to reach 100."]
	}],
	"fw-7p": [{
		"q": ["Dùng 7P cho một spa thế nào là đúng?", "What is the right way to use the 7Ps for a spa?"],
		"o": [
			["Đi qua đủ bảy mục như checklist, mục thiếu thì ghi là thiếu", "Go through all seven as a checklist and note any that are missing"],
			["Chấm điểm từng P rồi cộng thành tổng", "Score each P and add them into a total"],
			["Chọn P điểm cao nhất làm chiến lược", "Pick the highest-scoring P as the strategy"],
			["Bỏ ba P cuối vì chỉ là phần mở rộng", "Drop the last three Ps since they are only extras"]
		],
		"a": 0,
		"w": ["7P là danh sách kiểm tra, không phải bảng xếp hạng. Ba P cuối (people, process, physical evidence) đặc biệt quan trọng với dịch vụ.", "The 7Ps are a checklist, not a ranking. The last three (people, process, physical evidence) matter especially for services."]
	}, {
		"q": ["Ở spa, «căn phòng và phiếu dịch vụ khách nhìn thấy» thuộc P nào?", "In a spa, which P covers «the room and the service slip the customer can see»?"],
		"o": [
			["Process", "Process"],
			["Physical evidence", "Physical evidence"],
			["Place", "Place"],
			["People", "People"]
		],
		"a": 1,
		"w": ["Căn phòng và phiếu là bằng chứng hữu hình của dịch vụ. Process là các bước của một lượt chăm sóc, Place là nơi/kênh phân phối, People là nhân viên.", "The room and the slip are tangible evidence of the service. Process is the steps of a treatment, Place is location or distribution, People is the staff."]
	}],
	"fw-5c": [{
		"q": ["Đối tác đo dữ liệu đếm sai đơn vị dòng. Phía nào của 5C bị ảnh hưởng trước và hệ quả là gì?", "A measurement partner counts the wrong row unit. Which of the 5Cs is affected first, and what is the consequence?"],
		"o": [
			["Competitors; đối thủ sẽ có lợi thế", "Competitors; rivals will gain an edge"],
			["Climate; mùa vụ làm số liệu lệch", "Climate; seasonality skews the data"],
			["Collaborators; phía Company có thể đang quyết định trên số sai", "Collaborators; the Company side may be deciding on wrong numbers"],
			["Customers; khách hàng sẽ gửi ít form hơn", "Customers; customers will send fewer forms"]
		],
		"a": 2,
		"w": ["Đối tác dữ liệu là Collaborators. Nếu họ đo sai thì mọi quyết định của Company dựa trên số sai. Khách, đối thủ và mùa vụ không đổi vì số đo sai.", "A data partner is a Collaborator. If they measure wrongly, every Company decision rests on wrong numbers. Customers, rivals and seasonality do not change because of a faulty measurement."]
	}, {
		"q": ["Câu nào kiểm được (có thể bị chứng minh sai) cho phía Customers?", "Which statement is testable (could be proven wrong) for the Customers side?"],
		"o": [
			["Khách hàng của ta rất đa dạng và nhiều tiềm năng", "Our customers are very diverse and full of potential"],
			["Khách hàng ngày càng thông minh hơn", "Customers are getting smarter"],
			["Khách hàng là trung tâm của mọi hoạt động", "Customers are at the center of everything we do"],
			["Trong form tuần này, trường tuổi cho thấy phần lớn người gửi ở nhóm 25-34", "In this week's forms, the age field shows most senders are in the 25-34 group"]
		],
		"a": 3,
		"w": ["Chỉ câu đầu có thể đối chiếu với số liệu. Ba câu còn lại là tính từ hay khẩu hiệu, không phía nào được lấp đầy bằng chúng.", "Only the first can be checked against data. The other three are adjectives or slogans, and no side is filled by those."]
	}],
	"st-shape": [{
		"q": ["Trong câu chuyện dữ liệu ba phần, phần thứ ba (việc cần chốt) nên là gì?", "In a three-part data story, what should the third part (the thing to settle) be?"],
		"o": [
			["Một lời hy vọng mọi thứ sẽ tốt", "A hope that everything will be fine"],
			["Một quyết định cụ thể kèm hạn", "A concrete decision with a deadline"],
			["Phần tóm tắt lại những gì đã nói", "A recap of what was said"],
			["Phần kết bài của bài văn", "The conclusion paragraph of an essay"]
		],
		"a": 1,
		"w": ["Ba phần không phải mở, thân, kết bài. Phần cuối là một quyết định, và không có chỗ vướng có số đo thì không cần họp.", "The three parts are not intro, body and conclusion. The last is a decision, and without a measured conflict there is no need for a meeting."]
	}, {
		"q": ["Tỷ lệ form trên click bình thường là 4%, tuần này một kênh còn 2%. Chênh lệch là bao nhiêu?", "The normal form-to-click rate is 4%, and this week one channel dropped to 2%. How big is the gap?"],
		"o": [
			["2%, nói gọn là giảm 2%", "2%, simply put a drop of 2%"],
			["50 điểm phần trăm", "50 percentage points"],
			["2 điểm phần trăm, tức giảm một nửa so với bình thường", "2 percentage points, which is half the normal rate"],
			["200%", "200%"]
		],
		"a": 2,
		"w": ["4%-2%=2 điểm phần trăm; 2/4=50% giảm tương đối. Nói «giảm 2%» dễ nhầm điểm phần trăm với phần trăm; 50 điểm phần trăm và 200% đều sai.", "4%-2%=2 percentage points; 2/4=50% relative drop. Saying «down 2%» confuses points with percent; 50 points and 200% are both wrong."]
	}],
	"st-who": [{
		"q": ["Người nghe chốt ngân sách, có 5 phút và đang tin «TikTok rẻ». Cách trình bày nào phù hợp?", "The audience decides the budget, has 5 minutes and believes «TikTok is cheap». Which presentation fits?"],
		"o": [
			["Mười slide định nghĩa trước rồi mới vào số", "Ten definition slides before the numbers"],
			["Một deck chung cho cả analyst lẫn người quyết định", "One shared deck for both analyst and decision maker"],
			["Cho xem toàn bộ phần làm sạch dữ liệu để chứng minh công sức", "Show the whole data-cleaning process to prove the effort"],
			["Chạm vào niềm tin đó bằng một tỷ lệ và vài slide", "Challenge that belief with one rate and a few slides"]
		],
		"a": 3,
		"w": ["Người quyết định cần câu conflict và phương án, không cần phần làm sạch. Hai loại người nghe là hai câu chuyện.", "A decision maker needs the conflict and the options, not the cleaning. Two audiences mean two stories."]
	}, {
		"q": ["Có 5 phút cho 1 quyết định và 3 slide, chia thời gian đều. Mỗi slide được khoảng bao lâu?", "You have 5 minutes for 1 decision and 3 slides, split evenly. About how long does each slide get?"],
		"o": [
			["Khoảng 100 giây, tức 1 phút 40 giây", "About 100 seconds, i.e. 1 minute 40 seconds"],
			["Khoảng 30 giây, như khi có 10 slide", "About 30 seconds, as with 10 slides"],
			["Khoảng 3 phút", "About 3 minutes"],
			["Khoảng 5 phút", "About 5 minutes"]
		],
		"a": 0,
		"w": ["5 phút = 300 giây, chia 3 là 100 giây. Với 10 slide chỉ còn 30 giây mỗi slide, quá gấp để người nghe quyết định.", "5 minutes = 300 seconds, divided by 3 is 100 seconds. With 10 slides it would be 30 seconds each, too rushed for a decision."]
	}],
	"st-insight": [{
		"q": ["Một kênh có một tuần cao gấp mười các tuần còn lại. Nên gọi đúng dạng nhận xét nào và làm gì?", "One channel has a single week ten times higher than all other weeks. Which insight type is it and what should you do?"],
		"o": [
			["Trend; kết luận kênh đang tăng mạnh", "Trend; conclude the channel is growing fast"],
			["Difference; kết luận kênh tốt nhất", "Difference; conclude it is the best channel"],
			["Outlier; đi kiểm tra (có thể là lỗi gõ) rồi mới kết luận", "Outlier; check it (it may be a typo) before concluding"],
			["Share; kết luận kênh chiếm phần lớn tổng", "Share; conclude it holds most of the total"]
		],
		"a": 2,
		"w": ["Một điểm lệch hẳn là outlier, có thể do lỗi gõ nên cần kiểm tra. Trend cần nhiều kỳ liên tiếp, difference so sánh các nhóm cùng kỳ.", "A single extreme point is an outlier and may be a typo, so check it. A trend needs many consecutive periods, and difference compares groups in the same period."]
	}, {
		"q": ["Bạn muốn so tỷ lệ form của 3 kênh trong cùng một tuần. Dạng nhận xét và biểu đồ nào hợp?", "You want to compare the form rate of 3 channels in the same week. Which insight type and chart fit?"],
		"o": [
			["Trend, dùng biểu đồ đường", "Trend, using a line chart"],
			["Share, dùng một cột chia phần của 100%", "Share, using a single 100% split bar"],
			["Together, dùng biểu đồ tán xạ", "Together, using a scatter plot"],
			["Difference, dùng biểu đồ cột", "Difference, using a bar chart"]
		],
		"a": 3,
		"w": ["So nhiều nhóm tại một thời điểm là difference và cột là hợp. Đường dành cho nhiều kỳ liên tiếp của một nhóm. Tỷ lệ của từng kênh không cộng thành 100% nên không phải share.", "Comparing groups at one moment is difference, and bars fit. Lines are for consecutive periods of one group. Each channel's rate does not add to 100%, so it is not share."]
	}],
	"st-pyramid": [{
		"q": ["Theo nguyên tắc kim tự tháp, câu đầu tiên của bài nói nên là gì?", "Under the pyramid principle, what should the first sentence of the talk be?"],
		"o": [
			["Việc cần chốt (kết luận hoặc đề nghị)", "The point to settle (the conclusion or recommendation)"],
			["Lời chào và giới thiệu quá trình phân tích", "A greeting and an overview of the analysis process"],
			["Dữ liệu nền của các tuần trước", "Baseline data from previous weeks"],
			["Định nghĩa các thước đo sẽ dùng", "Definitions of the measures to be used"]
		],
		"a": 0,
		"w": ["Câu trả lời đi trước, lý do và bằng chứng theo sau. Giữ câu trả lời đến cuối là giấu bài chứ không phải phân tích.", "The answer comes first, with reasons and evidence after. Holding the answer until the end is hiding the ball, not analysis."]
	}, {
		"q": ["Một bài nói có 1 câu chốt, 2 lý do, và mỗi lý do có 1 bằng chứng. Tổng cộng có bao nhiêu ý cần nói?", "A talk has 1 conclusion, 2 reasons, and 1 piece of evidence for each reason. How many points in total?"],
		"o": [
			["3 ý", "3 points"],
			["5 ý", "5 points"],
			["4 ý", "4 points"],
			["6 ý", "6 points"]
		],
		"a": 1,
		"w": ["1+2+2=5. Con số 3 bỏ quên bằng chứng, 4 chỉ đếm câu chốt, lý do và một bằng chứng, 6 là đếm dư.", "1+2+2=5. Three forgets the evidence, four omits one piece of evidence, and six overcounts."]
	}],
	"st-one": [{
		"q": ["Tiêu đề trang là «Ngân sách kênh TikTok và định vị thương hiệu». Vấn đề là gì?", "A page title reads «TikTok channel budget and brand positioning». What is wrong?"],
		"o": [
			["Không có vấn đề, trang nhiều thông tin thì tốt", "Nothing is wrong, an information-rich page is good"],
			["Cần thay tiêu đề bằng một khẩu hiệu ngắn", "The title should be replaced with a short slogan"],
			["Cần thêm một biểu đồ xu hướng để đủ lập luận", "It needs a trend chart to complete the argument"],
			["Có chữ «và» nghĩa là hai câu chuyện, nên tách thành hai trang", "The «and» means two stories, so split into two pages"]
		],
		"a": 3,
		"w": ["Mỗi trang chỉ xin một việc. Một thông điệp là một quyết định cộng lý do, không phải khẩu hiệu, và trộn dạng nhận xét làm rối người nghe.", "Each page should ask for one thing. A message is a decision plus its reasons, not a slogan, and mixing insight types confuses the audience."]
	}, {
		"q": ["Người nghe có 5 phút, và bạn có 2 quyết định: ngân sách kênh và thương hiệu. Nên làm gì?", "The audience has 5 minutes and you have 2 decisions: channel budget and brand. What should you do?"],
		"o": [
			["Trang 1 cho ngân sách; trang 2 về thương hiệu chỉ dùng nếu còn giờ", "Page 1 for the budget; page 2 on brand only if time remains"],
			["Nhồi cả hai vào một trang cho gọn", "Cram both onto one page to keep it short"],
			["Nói thương hiệu trước vì nó quan trọng hơn", "Cover brand first because it matters more"],
			["Xin cả hai quyết định trong 5 phút bằng cách nói nhanh", "Ask for both decisions in 5 minutes by speaking fast"]
		],
		"a": 0,
		"w": ["2 quyết định cần 2 trang, và với 5 phút chỉ trang chính được nhận. Gộp hay nói nhanh chỉ khiến người nghe nhớ biểu đồ rối nhất.", "Two decisions need two pages, and in 5 minutes only the main page is taken. Merging or rushing only leaves the audience remembering the messiest chart."]
	}],
	"st-board": [{
		"q": ["Storyboard của một câu chuyện dữ liệu là gì?", "What is the storyboard of a data story?"],
		"o": [
			["Bảng màu và phông chữ cho báo cáo", "The color palette and fonts for the report"],
			["Thứ tự các câu có chủ đích, mỗi khung một việc cho người nghe", "A deliberate order of sentences, each frame doing a job for the listener"],
			["Một moodboard cảm hứng thiết kế", "A design inspiration moodboard"],
			["Danh sách các biểu đồ đẹp nhất đã làm", "A list of the prettiest charts made"]
		],
		"a": 1,
		"w": ["Xếp các câu bằng chữ trước, màu để sau. Khung không có việc cho người nghe chỉ là trang trí.", "Order the sentences in words first and leave color for later. A frame with no job for the listener is decoration."]
	}, {
		"q": ["Storyboard có 3 khung: (1) câu chốt, (2) tỷ lệ so với ngưỡng, (3) phương án trong hạn. Bỏ khung 2 thì điều gì xảy ra?", "A storyboard has 3 frames: (1) the point, (2) the rate versus the threshold, (3) the options within the deadline. What happens if you drop frame 2?"],
		"o": [
			["Còn 2 khung, gọn hơn nên tốt hơn", "Two frames remain and it is tighter, so better"],
			["Còn 2 khung, đổi màu cột ở khung 3 là vá được", "Two frames remain and recoloring the bars in frame 3 fixes it"],
			["Còn 2 khung và khung 3 mất căn cứ", "Two frames remain and frame 3 loses its basis"],
			["Vẫn đủ 3 khung vì khung 1 đã chứa hết", "Still three frames since frame 1 contains everything"]
		],
		"a": 2,
		"w": ["3-1=2 khung, nhưng phương án ở khung 3 không còn số nào làm cơ sở. Màu sắc không vá được chỗ hổng lập luận.", "3-1=2 frames, but the options in frame 3 no longer rest on any number. Color cannot patch a gap in the argument."]
	}],
	"or-obj": [{
		"q": ["Bài toán chọn số suất quảng cáo của 3 kênh để tối đa doanh thu. Đâu là biến quyết định và đâu là hàm mục tiêu?", "A problem chooses the number of ad slots on 3 channels to maximize revenue. Which are the decision variables and which is the objective?"],
		"o": [
			["Biến là số suất của từng kênh; mục tiêu là doanh thu, một công thức của các biến", "Variables are the slots per channel; the objective is revenue, a formula of those variables"],
			["Biến là doanh thu; mục tiêu là số suất", "Variable is revenue; objective is the number of slots"],
			["Biến là ngân sách; mục tiêu là số kênh", "Variable is the budget; objective is the number of channels"],
			["Doanh thu vừa là biến vừa là mục tiêu", "Revenue is both a variable and the objective"]
		],
		"a": 0,
		"w": ["Bạn chọn số suất (biến); doanh thu được tính ra từ chúng. Cho doanh thu làm biến là tự gõ đáp án, và một ô không thể vừa là biến vừa là mục tiêu.", "You choose the slots (variables); revenue is computed from them. Making revenue a variable means typing the answer yourself, and one cell cannot be both variable and objective."]
	}, {
		"q": ["Số liệu minh họa: doanh thu mỗi suất là 5, 4 và 3 cho kênh 1, 2, 3. Một phương án chọn 10, 20 và 5 suất. Ô mục tiêu (doanh thu) bằng bao nhiêu?", "Illustrative figures: revenue per slot is 5, 4 and 3 for channels 1, 2, 3. A plan picks 10, 20 and 5 slots. What does the objective cell (revenue) equal?"],
		"o": [
			["35, là tổng số suất", "35, the total number of slots"],
			["145", "145"],
			["12, là tổng ba hệ số doanh thu", "12, the sum of the three revenue coefficients"],
			["160, là khi kênh 3 dùng 10 suất", "160, as if channel 3 used 10 slots"]
		],
		"a": 1,
		"w": ["10×5 + 20×4 + 5×3 = 50 + 80 + 15 = 145. Tổng suất (35) và tổng hệ số (12) bỏ qua phép nhân; 160 dùng sai số suất của kênh 3.", "10×5 + 20×4 + 5×3 = 50 + 80 + 15 = 145. The slot total (35) and coefficient total (12) skip the multiplication; 160 misuses channel 3's slots."]
	}],
	"or-con": [{
		"q": ["Mô hình quên không khai báo giới hạn ngân sách và solver báo mục tiêu tăng mãi. Điều này nghĩa là gì?", "A model forgets to declare the budget limit and the solver reports the objective grows without end. What does this mean?"],
		"o": [
			["Các giới hạn mâu thuẫn nhau (infeasible)", "The limits contradict each other (infeasible)"],
			["Solver bị hỏng nên cần cài lại", "The solver is broken and must be reinstalled"],
			["Bài toán unbounded do thiếu một giới hạn; đó là lỗi mô hình", "The problem is unbounded because a limit is missing; it is a model error"],
			["Kết quả kinh doanh rất tốt, cứ tăng suất", "The business result is great, just keep adding slots"]
		],
		"a": 2,
		"w": ["Unbounded là mục tiêu tăng mãi vì thiếu giới hạn; infeasible là các giới hạn mâu thuẫn. Cả hai là lỗi mô hình chứ không phải kết quả kinh doanh.", "Unbounded means the objective keeps growing because a limit is missing; infeasible means limits conflict. Both are model errors, not business results."]
	}, {
		"q": ["Số liệu minh họa: ngân sách là 100, mỗi suất giá 20. Ràng buộc 20 × số suất ≤ 100 cho phép tối đa bao nhiêu suất?", "Illustrative figures: the budget is 100 and each slot costs 20. The constraint 20 × slots ≤ 100 allows at most how many slots?"],
		"o": [
			["100 suất", "100 slots"],
			["20 suất", "20 slots"],
			["80 suất", "80 slots"],
			["5 suất", "5 slots"]
		],
		"a": 3,
		"w": ["100/20 = 5. Con số 100 là ngân sách chứ không phải số suất; 20 là đơn giá; 80 là 100-20, một phép trừ không có nghĩa gì ở đây.", "100/20 = 5. The 100 is the budget, not slots; 20 is the unit price; 80 is 100-20, a subtraction with no meaning here."]
	}],
	"or-sens": [{
		"q": ["Báo cáo độ nhạy nói giá bóng của ngân sách là 0,2 và chỉ đúng khi cộng thêm không quá 10. Bạn tăng ngân sách thêm 30. Nên làm gì?", "A sensitivity report says the shadow price of the budget is 0.2 and holds only for increases up to 10. You raise the budget by 30. What should you do?"],
		"o": [
			["Nhân 30 × 0,2 = 6 và đưa vào brief", "Multiply 30 × 0.2 = 6 and put it in the brief"],
			["Giải lại mô hình vì đã ra ngoài khoảng cho phép", "Re-solve the model because you are outside the allowable range"],
			["Dùng 10 × 0,2 = 2 cho cả phần vượt", "Use 10 × 0.2 = 2 for the whole increase"],
			["Giá bóng luôn đúng nên cứ dùng", "Shadow prices are always valid so just use it"]
		],
		"a": 1,
		"w": ["Giá bóng chỉ đúng khi nghiệm còn ở cùng một đỉnh. Vượt khoảng thì đỉnh đổi và giá bóng đổi theo, nên 6 không đáng tin; phải giải lại.", "A shadow price holds only while the solution stays at the same vertex. Beyond the range the vertex changes and so does the price, so 6 is unreliable; re-solve."]
	}, {
		"q": ["Cùng giá bóng 0,2 hiệu lực đến mức cộng thêm 10. Ngân sách cộng thêm 8 thì mục tiêu tăng thêm bao nhiêu?", "With the same shadow price of 0.2 valid up to an increase of 10, by how much does the objective rise if the budget increases by 8?"],
		"o": [
			["8", "8"],
			["2", "2"],
			["1,6", "1.6"],
			["40", "40"]
		],
		"a": 2,
		"w": ["8 nằm trong khoảng 10 nên áp dụng được: 8 × 0,2 = 1,6. Tăng 8 là quên nhân giá bóng, 2 là dùng cận 10, còn 40 là chia 8 cho 0,2.", "8 is within the range of 10, so it applies: 8 × 0.2 = 1.6. An answer of 8 forgets the shadow price, 2 uses the bound 10, and 40 divides 8 by 0.2."]
	}],
	"or-solv": [{
		"q": ["Mục tiêu có thêm một số hạng bình phương, và GRG dừng ở một nghiệm. Có thể tin đó là nghiệm toàn cục không?", "The objective now has a squared term and GRG stops at a solution. Can you trust it as the global optimum?"],
		"o": [
			["Có, vì solver đã báo xong", "Yes, because the solver reported it finished"],
			["Có, vì mọi bài toán đều chỉ cần xét đỉnh của đa giác", "Yes, because every problem only needs the polygon's vertices"],
			["Không cần kiểm gì, chỉ cần dán báo cáo độ nhạy của LP", "Nothing to check, just paste the LP sensitivity report"],
			["Không chắc; có thể là cực trị cục bộ nên cần thử nhiều điểm xuất phát", "Not necessarily; it may be a local optimum so try several starting points"]
		],
		"a": 3,
		"w": ["Phương pháp phi tuyến đi theo dốc cục bộ và có thể dừng vì bước quá nhỏ. «Xong» nghĩa là đã dừng, không phải hết chỗ tốt hơn, và độ nhạy của LP không áp cho bài có bình phương.", "Nonlinear methods follow local slopes and can stop because steps become tiny. «Done» means stopped, not that nothing better exists, and LP sensitivity does not apply to a squared problem."]
	}, {
		"q": ["Bài tối đa hóa chạy từ 3 điểm xuất phát cho 3 kết quả khác nhau: 120, 135 và 128. Nhận định nào đúng?", "A maximization problem run from 3 starting points gives 3 different results: 120, 135 and 128. Which statement is right?"],
		"o": [
			["Chưa chắc có toàn cục; 135 chỉ là tốt nhất trong số đã thử", "A global optimum is not guaranteed; 135 is only the best among those tried"],
			["135 chắc chắn là toàn cục vì lớn nhất", "135 is certainly global because it is the largest"],
			["Lấy trung bình ≈ 127,7 làm kết quả", "Take the average ≈ 127.7 as the result"],
			["Solver bị lỗi nên không dùng được kết quả nào", "The solver is faulty so no result is usable"]
		],
		"a": 0,
		"w": ["Kết quả khác nhau cho thấy có nhiều cực trị cục bộ. 135 chỉ là cái tốt nhất đã tìm thấy; trung bình của các nghiệm không phải một nghiệm khả thi, và đây không phải lỗi solver.", "Different results show multiple local optima. 135 is only the best found; the average of solutions is not a feasible solution, and this is not a solver bug."]
	}],
	"or-sheet": [{
		"q": ["Ô B12 ghi «Không vượt quá 50 suất» nhưng không được khai báo trong Solver. Điều gì xảy ra?", "Cell B12 says «Do not exceed 50 slots» but is not declared in Solver. What happens?"],
		"o": [
			["Solver đọc chữ và áp dụng giới hạn 50", "Solver reads the text and applies a limit of 50"],
			["Solver báo lỗi và không chạy", "Solver reports an error and does not run"],
			["Solver bỏ qua nó, vì chỉ đọc các ô được chỉ định", "Solver ignores it, since it only reads the cells you designate"],
			["Giới hạn được áp dụng tự động vì nằm cùng bảng tính", "The limit applies automatically since it is in the same sheet"]
		],
		"a": 2,
		"w": ["Giới hạn phải là một ô công thức được khai báo, không phải ghi chú. Chữ trong ô không tham gia bài toán nên nghiệm có thể vượt 50.", "A limit must be a declared formula cell, not a note. Text in a cell does not enter the problem, so the solution may exceed 50."]
	}, {
		"q": ["Biến là B2:B4, mục tiêu là B6, giới hạn ngân sách B8 ≤ B9 đã khai báo, còn B12 chỉ là lời nhắc. Solver coi bài có bao nhiêu biến, mục tiêu và giới hạn?", "Variables are B2:B4, the objective is B6, the budget limit B8 ≤ B9 is declared, and B12 is just a reminder. How many variables, objectives and limits does Solver see?"],
		"o": [
			["3 biến, 1 mục tiêu, 2 giới hạn", "3 variables, 1 objective, 2 limits"],
			["4 biến, 1 mục tiêu, 1 giới hạn", "4 variables, 1 objective, 1 limit"],
			["3 biến, 2 mục tiêu, 1 giới hạn", "3 variables, 2 objectives, 1 limit"],
			["3 biến, 1 mục tiêu, 1 giới hạn", "3 variables, 1 objective, 1 limit"]
		],
		"a": 3,
		"w": ["B2:B4 là 3 ô biến, B6 là 1 mục tiêu, B8 ≤ B9 là 1 giới hạn. B12 không khai báo nên không được tính; đếm nó thành giới hạn thứ hai là lỗi.", "B2:B4 is 3 variable cells, B6 is 1 objective, B8 ≤ B9 is 1 limit. B12 is undeclared, so it does not count; counting it as a second limit is a mistake."]
	}],
	"ga-next": [{
		"q": ["Prompt không có bảng giá, nhưng mô hình vẫn viết «1.200.000 đồng». Con số đó là gì?", "The prompt has no price list, yet the model writes «1,200,000 VND». What is that number?"],
		"o": [
			["Một con số được sinh ra, không phải được tra từ dữ liệu của công ty", "A generated number, not looked up from the company's data"],
			["Giá thật lấy từ cơ sở dữ liệu của công ty", "The real price taken from the company database"],
			["Giá đúng vì mô hình biết công ty qua huấn luyện", "The right price because the model knows the company from training"],
			["Giá đúng nếu lặp lại nhiều lần", "The right price if it repeats several times"]
		],
		"a": 0,
		"w": ["Mô hình sinh token kế tiếp theo xác suất, không tra khóa như VLOOKUP. Lặp lại chỉ cho thấy ổn định, không cho thấy có nguồn.", "The model generates the next token by probability and does not look up a key like VLOOKUP. Repetition shows stability, not a source."]
	}, {
		"q": ["Bảng giá 3 gói nằm trong file, nhưng bạn hỏi mô hình mà không dán file. Cách xử lý đúng?", "A 3-plan price list is in a file, but you ask the model without pasting it. What is the right fix?"],
		"o": [
			["Tăng temperature để mô hình nhớ ra", "Raise the temperature so the model recalls it"],
			["Đưa bảng giá vào prompt rồi mới hỏi", "Put the price list in the prompt, then ask"],
			["Hỏi 3 lần và lấy số lặp lại nhiều nhất", "Ask 3 times and take the most repeated number"],
			["Tin con số vì nghe hợp lý", "Trust the number because it sounds plausible"]
		],
		"a": 1,
		"w": ["Muốn số từ file thì đưa file vào. Temperature hay hỏi lặp chỉ đổi cách chọn token, không thêm nguồn.", "To get a number from a file, supply the file. Temperature or repeated asking only changes token choice and adds no source."]
	}],
	"ga-vs": [{
		"q": ["Việc «dự đoán khách có rời đi không» khác việc «viết một tin nhắn» ở điểm nào?", "How does «predict whether a customer will leave» differ from «write a message»?"],
		"o": [
			["Cả hai đều chấm bằng accuracy", "Both are scored by accuracy"],
			["Việc đầu dùng GenAI, việc sau dùng học máy", "The first uses GenAI, the second uses machine learning"],
			["Không khác, cùng một thước đo vì cùng họ mô hình", "No difference, same metric because same model family"],
			["Việc đầu ra một xác suất có tập chấm; việc sau ra đoạn chữ không có một ô đúng duy nhất", "The first outputs a probability with a labeled test set; the second outputs text with no single right answer"]
		],
		"a": 3,
		"w": ["Cần nói rõ đầu ra là xác suất có nhãn hay đoạn chữ, vì thước đo khác nhau. Họ mô hình không quyết định thước đo.", "State whether the output is a labeled probability or text, since the metrics differ. The model family does not decide the metric."]
	}, {
		"q": ["Có 1.000 khách, 80 người sẽ rời. Mô hình đoán «không rời» cho tất cả. Kết quả nào đúng?", "There are 1,000 customers and 80 will leave. A model predicts «stays» for everyone. Which result is correct?"],
		"o": [
			["Accuracy 92% nhưng không bắt được khách rời nào", "Accuracy is 92% but it catches none of the leavers"],
			["Accuracy 8%", "Accuracy is 8%"],
			["Accuracy 92%, nên mô hình rất tốt", "Accuracy is 92%, so the model is very good"],
			["Accuracy 50%", "Accuracy is 50%"]
		],
		"a": 0,
		"w": ["Đoán đúng 920 khách ở lớp «ở lại», 920/1000 = 92%, nhưng bỏ sót cả 80 khách rời. Accuracy cao trên lớp hiếm không nói lên mô hình hữu ích.", "It is right for the 920 who stay, 920/1000 = 92%, but misses all 80 leavers. High accuracy on a rare class does not make a model useful."]
	}],
	"ga-stack": [{
		"q": ["Mô hình viết trôi chảy nhưng sai chính sách đổi trả vì chính sách không được đưa vào lần gọi. Hỏng ở tầng nào?", "The model writes fluently but gets the return policy wrong because the policy was not included in the call. Which layer failed?"],
		"o": [
			["Tầng model", "The model layer"],
			["Tầng data", "The data layer"],
			["Tầng sản phẩm", "The product layer"],
			["Cả ba tầng như nhau, gọi chung là AI", "All three equally, just called AI"]
		],
		"a": 1,
		"w": ["Câu trôi chảy cho thấy model làm được việc viết; thiếu chính sách là thiếu data. Ba tầng hỏng độc lập nên không nên gộp lại.", "Fluent text shows the model can write; the missing policy is a data gap. The three layers fail independently, so do not lump them together."]
	}, {
		"q": ["Câu trả lời đúng chính sách, nhưng giao diện không cho người dùng xem nguồn để kiểm lại, và họ làm theo mà không biết. Tầng nào cần sửa?", "The answer matches the policy, but the interface gives users no way to check the source and they just follow it. Which layer needs fixing?"],
		"o": [
			["Tầng model, hãy huấn luyện lại", "The model layer, retrain it"],
			["Tầng data, thêm nhiều tài liệu hơn", "The data layer, add more documents"],
			["Tầng sản phẩm", "The product layer"],
			["Không tầng nào, vì câu trả lời đã đúng", "None, because the answer is already correct"]
		],
		"a": 2,
		"w": ["Câu đúng nên model và data chưa phải nguyên nhân. Thiếu cách kiểm lại nguồn là vấn đề của sản phẩm.", "The answer is right, so model and data are not the cause. The missing way to verify the source is a product problem."]
	}],
	"ga-use": [{
		"q": ["Hai việc: nháp tiêu đề cho người marketing sửa, và tự động gửi báo giá cho khách. Việc nào cần kiểm soát chặt hơn và vì sao?", "Two jobs: drafting headlines for marketers to edit, and automatically sending quotes to customers. Which needs tighter control and why?"],
		"o": [
			["Tự gửi báo giá, vì giá của một lần sai có thể là một hợp đồng", "Auto-sending quotes, because the cost of one error could be a contract"],
			["Nháp tiêu đề, vì nó tạo ra nhiều chữ hơn", "Drafting headlines, because it produces more text"],
			["Cả hai như nhau vì dùng cùng một model", "Both the same because they use the same model"],
			["Không việc nào, vì đều thuộc marketing", "Neither, because both are marketing"]
		],
		"a": 0,
		"w": ["Use case là một công việc kèm cái giá khi sai. Nháp có người sửa nên giá thấp; báo giá tự gửi không có lớp chặn.", "A use case is a job plus the cost of being wrong. Drafts have a human editor so the cost is low; auto-sent quotes have no safety layer."]
	}, {
		"q": ["Nháp tiêu đề sai 10 lần, mỗi lần người sửa mất 3 phút. Tổng thời gian sửa và nhận định nào đúng?", "A headline draft is wrong 10 times and each fix takes 3 minutes. What is the total fix time and which conclusion is right?"],
		"o": [
			["13 phút, giá thấp", "13 minutes, a low cost"],
			["30 phút, giá thấp, vẫn nên giữ người sửa", "30 minutes, a low cost, keep a human editor"],
			["300 phút, quá đắt", "300 minutes, too expensive"],
			["30 phút, nên báo giá tự gửi sai cũng chỉ tốn cỡ đó", "30 minutes, so an auto-sent wrong quote would cost about the same"]
		],
		"a": 1,
		"w": ["10 × 3 = 30 phút, chấp nhận được. Báo giá sai gửi thẳng cho khách có thể mất cả hợp đồng, không quy ra phút sửa được.", "10 × 3 = 30 minutes, acceptable. A wrong quote sent straight to a customer can cost a contract, which cannot be measured in editing minutes."]
	}],
	"ga-chat": [{
		"q": ["Hôm qua khách A đã cho địa chỉ trong một lần gọi. Hôm nay request mới không kèm lịch sử. Mô hình có biết địa chỉ không?", "Yesterday customer A gave an address in one call. Today's new request does not include the history. Does the model know the address?"],
		"o": [
			["Có, vì cùng một mô hình", "Yes, because it is the same model"],
			["Có, nếu temperature thấp", "Yes, if temperature is low"],
			["Không; mô hình chỉ thấy những gì có trong message của lần gọi này", "No; the model only sees what is in this call's messages"],
			["Có, nếu system prompt viết đúng", "Yes, if the system prompt is written well"]
		],
		"a": 2,
		"w": ["Lịch sử do ứng dụng lưu và gửi lại, mô hình không có trí nhớ chung. Temperature và system prompt không tạo ra thông tin chưa được gửi.", "The app stores and resends history; the model has no shared memory. Temperature and system prompt do not create information that was not sent."]
	}, {
		"q": ["System ghi «chỉ dùng bảng giá đính kèm». Khách hỏi một gói không có trong bảng. Nhận định nào đúng?", "The system message says «use only the attached price list». A customer asks about a plan not in the list. Which statement is right?"],
		"o": [
			["Chắc chắn mô hình sẽ không bịa vì có system", "The model certainly will not invent because of the system message"],
			["System là khóa pháp lý nên mô hình không thể vi phạm", "System is a legal lock so the model cannot violate it"],
			["Tin nhắn của user luôn thắng system", "The user message always overrides system"],
			["Mô hình vẫn có thể viết lệch, nên cần kiểm đầu ra", "The model can still drift, so check the output"]
		],
		"a": 3,
		"w": ["Role system chỉ là message đứng trước, không phải khóa. Nó giảm khả năng lệch nhưng không đảm bảo, nên cần kiểm.", "The system role is just an earlier message, not a lock. It lowers the chance of drift but does not guarantee it, so verify."]
	}],
	"ga-temp": [{
		"q": ["Chạy cùng prompt 5 lần ở temperature thấp, cả 5 lần ra cùng một giá. Điều đó nói gì?", "Running the same prompt 5 times at low temperature gives the same price every time. What does that tell you?"],
		"o": [
			["Giá đó đúng", "The price is correct"],
			["Câu trả lời ổn định, nhưng chưa chắc đúng hay có nguồn", "The answer is stable, but not necessarily correct or sourced"],
			["Giá đó là giá của công ty", "The price is the company's price"],
			["Mô hình đã kiểm chứng giá đó", "The model has verified that price"]
		],
		"a": 1,
		"w": ["Temperature là tham số lấy mẫu, không phải xác suất đúng. Lặp lại chỉ cho thấy ổn định; ổn định không có nghĩa là đúng.", "Temperature is a sampling parameter, not a probability of being right. Repetition shows stability, and stability does not mean correctness."]
	}, {
		"q": ["Bạn cần 5 phương án tiêu đề khác nhau cho một quảng cáo. Nên chỉnh temperature thế nào?", "You need 5 different headline options for an ad. How should you set temperature?"],
		"o": [
			["Thấp, để các tiêu đề chính xác hơn", "Lower, so the headlines are more accurate"],
			["Về 0 để tránh bịa", "To 0 to avoid making things up"],
			["Cao hơn, để câu chữ đa dạng hơn", "Higher, for more varied wording"],
			["Không ảnh hưởng gì đến độ đa dạng", "It has no effect on variety"]
		],
		"a": 2,
		"w": ["Temperature cao tăng độ đa dạng, hợp khi cần nhiều phương án. Hạ thấp không làm câu chữ đúng hơn, chỉ làm chúng giống nhau hơn.", "Higher temperature increases variety, which suits needing many options. Lowering it does not make text more accurate, only more alike."]
	}],
	"ga-tok": [{
		"q": ["Token có bằng số từ không?", "Is a token the same as a word?"],
		"o": [
			["Có, một token luôn là một từ", "Yes, one token is always one word"],
			["Có, chỉ khác ở dấu cách", "Yes, they only differ by spaces"],
			["Không, nhưng mọi ngôn ngữ nở ra như nhau", "No, but all languages expand equally"],
			["Không; token là mảnh chữ, và tiếng Việt với tiếng Anh nở ra khác nhau", "No; a token is a piece of text, and Vietnamese and English expand differently"]
		],
		"a": 3,
		"w": ["Token là mảnh chữ dùng để viết và tính tiền, không phải từ điển. Số token ứng với cùng một câu khác nhau giữa các ngôn ngữ.", "A token is a text piece used for generating and billing, not a dictionary word. The token count for the same sentence differs across languages."]
	}, {
		"q": ["Trần của lần gọi là 8.000 token. Prompt và lịch sử đã chiếm 7.800 token. Còn bao nhiêu token để viết câu trả lời?", "The call's limit is 8,000 tokens. The prompt and history already take 7,800 tokens. How many tokens remain for the answer?"],
		"o": [
			["200 token", "200 tokens"],
			["800 token", "800 tokens"],
			["7.800 token", "7,800 tokens"],
			["8.000 token", "8,000 tokens"]
		],
		"a": 0,
		"w": ["8.000 - 7.800 = 200, nên câu trả lời dài dễ bị cụt. Trần tính chung cho cả phần vào và phần viết ra, không riêng phần vào.", "8,000 - 7,800 = 200, so a long answer is likely to be cut off. The limit covers input and output together, not input alone."]
	}],
	"ga-prompt": [{
		"q": ["Câu «Hãy cẩn thận và trả lời thật hay» đóng vai trò gì trong ba phần của prompt (việc, ngữ cảnh, dạng đầu ra)?", "What role does «Be careful and answer really well» play among the three prompt parts (task, context, output format)?"],
		"o": [
			["Ngữ cảnh", "Context"],
			["Dạng đầu ra", "Output format"],
			["Không phải phần nào cả; lời cổ vũ không phải ngữ cảnh", "None of them; encouragement is not context"],
			["Việc cần làm", "Task"]
		],
		"a": 2,
		"w": ["Ngữ cảnh là nguồn thật của lần gọi, như đoạn chính sách. Lời dặn chung chung không thêm thông tin hay dạng để kiểm.", "Context is the real source for the call, like a policy excerpt. A vague plea adds no information and no format to check against."]
	}, {
		"q": ["Prompt: «Trả lời khách có được hoàn tiền không. Đoạn chính sách: …». Thiếu phần nào?", "Prompt: «Answer whether the customer gets a refund. Policy excerpt: …». Which part is missing?"],
		"o": [
			["Việc cần làm", "The task"],
			["Ngữ cảnh", "The context"],
			["Không thiếu gì, đã đủ ba phần", "Nothing, all three parts are present"],
			["Dạng đầu ra, như một câu có dẫn chỗ trong đoạn hoặc «không thấy trong đoạn»", "The output format, such as one sentence citing the passage or «not found in the passage»"]
		],
		"a": 3,
		"w": ["Đã có việc (trả lời hoàn tiền) và ngữ cảnh (đoạn chính sách), chỉ thiếu dạng đầu ra. Thiếu dạng thì mô hình dễ bịa thêm và khó kiểm.", "The task (answer about refunds) and context (policy excerpt) are present; only the output format is missing. Without it the model may invent extras and the answer is hard to check."]
	}],
	"ga-few": [{
		"q": ["Bạn đưa 3 mẫu «có / không / không thấy trong đoạn». Few-shot giúp được gì?", "You give 3 examples of «yes / no / not found in the passage». What does few-shot help with?"],
		"o": [
			["Cố định dạng câu trả lời để dễ kiểm, nhưng không làm chính sách thành đúng", "It fixes the answer format so it is easy to check, but does not make the policy correct"],
			["Fine-tune mô hình trên dữ liệu của bạn", "It fine-tunes the model on your data"],
			["Chứng minh chính sách đúng với khách hàng", "It proves the policy is true for customers"],
			["Miễn phí vì không tốn token", "It is free because it costs no tokens"]
		],
		"a": 0,
		"w": ["Few-shot nằm trong prompt, tốn token và chỉ cố định dạng. Nó không phải fine-tune và cũng không phải mẫu điều tra.", "Few-shot lives in the prompt, costs tokens and only fixes format. It is not fine-tuning and not a survey sample."]
	}, {
		"q": ["Cả 3 mẫu đều kết bằng «Chắc chắn có». Ở temperature thấp, 20 câu hỏi đều ra «Chắc chắn có», kể cả khi đoạn không nói gì. Giải thích nào đúng?", "All 3 examples end with «Definitely yes». At low temperature, 20 questions all return «Definitely yes», even when the passage says nothing. Which explanation is right?"],
		"o": [
			["Mô hình đã hiểu đúng chính sách", "The model understood the policy correctly"],
			["Mẫu sai dạng đã dạy sai rất đều; đó là sự ổn định của một cái sai", "The wrong-style examples taught the wrong pattern consistently; it is the stability of an error"],
			["Temperature thấp làm câu trả lời chính xác hơn", "Low temperature made the answers more accurate"],
			["Few-shot đã huấn luyện lại mô hình", "Few-shot retrained the model"]
		],
		"a": 1,
		"w": ["Ví dụ sai dạng bị lặp lại đều, nhất là ở temperature thấp. Ổn định không phải chính xác, và few-shot không huấn luyện lại mô hình.", "A wrong-style example gets repeated very consistently, especially at low temperature. Stable is not accurate, and few-shot does not retrain the model."]
	}],
	"ga-cot": [{
		"q": ["Mô hình viết 4 bước lập luận để ra một mức giá, nhưng không bước nào trỏ vào bảng giá. Nhận định nào đúng?", "A model writes 4 reasoning steps to reach a price, but none of them points to the price list. Which statement is right?"],
		"o": [
			["Đúng, vì các bước mạch lạc", "It is right because the steps are coherent"],
			["Chỉ bước cuối cần kiểm", "Only the last step needs checking"],
			["Đúng, vì chuỗi bước là một chứng minh", "It is right because a chain of steps is a proof"],
			["Cả 4 bước đều chưa có nguồn", "None of the 4 steps has a source yet"]
		],
		"a": 3,
		"w": ["Chain-of-thought không phải chứng minh. Một bước giữa sai vẫn có thể dẫn đến câu cuối nghe hay, nên mượt không có nghĩa là có nguồn.", "Chain-of-thought is not a proof. A wrong middle step can still lead to a nice-sounding conclusion, so smooth does not mean sourced."]
	}, {
		"q": ["Context không có giá, nhưng chuỗi bước vẫn ra «850.000 đồng vì phí cố định cộng 10%». Bạn nên làm gì?", "The context has no price, yet the reasoning still produces «850,000 VND because of a fixed fee plus 10%». What should you do?"],
		"o": [
			["Không thu theo mức đó; coi là chưa có nguồn và trả lời «không thấy trong ngữ cảnh»", "Do not charge that amount; treat it as unsourced and answer «not found in the context»"],
			["Dùng mức đó vì lý do nghe hợp lý", "Use it because the reasoning sounds plausible"],
			["Hỏi lại nhiều lần và lấy đa số", "Ask repeatedly and take the majority"],
			["Tăng temperature để có lý do tốt hơn", "Raise temperature to get better reasoning"]
		],
		"a": 0,
		"w": ["Lý do nghe hợp lý không phải nguồn. Lấy đa số hay đổi temperature chỉ đổi cách sinh chữ; phải kiểm câu cuối bằng nguồn.", "A plausible reason is not a source. Majority voting or changing temperature only changes how text is generated; check the final answer against a source."]
	}],
	"sa-tune": [{
		"q": ["Điều nào đúng về fine-tune so với RAG?", "Which statement about fine-tuning versus RAG is correct?"],
		"o": [
			["Fine-tune chủ yếu đổi cách viết/hành vi, không đảm bảo mô hình thuộc một bảng để tra như khóa chính", "Fine-tuning mainly changes writing style and behavior; it does not guarantee the model memorizes a table you can look up like a primary key"],
			["Fine-tune là cách tốt nhất để cập nhật sự thật thay đổi hằng ngày", "Fine-tuning is the best way to update facts that change daily"],
			["RAG làm mô hình hiểu tài liệu và ghi vào trọng số", "RAG makes the model understand the document and writes it into the weights"],
			["Fine-tune biến mô hình thành một bảng tra cứu chính xác", "Fine-tuning turns the model into an exact lookup table"]
		],
		"a": 0,
		"w": ["Fine-tune đổi cách viết; RAG chỉ cho lần gọi thấy vài đoạn chứ không đổi trọng số. Các đáp án kia gán nhầm cho fine-tune hoặc RAG những khả năng chúng không có.", "Fine-tuning changes how the model writes, while RAG only shows the call a few passages without touching the weights. The other options credit each method with abilities it does not have."]
	}, {
		"q": ["Giá sản phẩm đổi 1 lần mỗi sáng. Nếu dùng fine-tune để cập nhật giá, một tháng 30 ngày cần huấn luyện lại bao nhiêu lần, và cách hợp lý hơn là gì?", "A product price changes once every morning. If you used fine-tuning to update it, how many retrainings would a 30-day month need, and what is the better approach?"],
		"o": [
			["1 lần; huấn luyện một lần là mô hình thuộc giá cả tháng", "1 time; one training run makes the model know the whole month's prices"],
			["30 lần; hợp lý hơn là để giá trong một bảng kèm công cụ đọc bảng", "30 times; better to keep the price in a table with a tool that reads it"],
			["4 lần; chỉ cần huấn luyện mỗi tuần", "4 times; weekly training is enough"],
			["30 lần; hợp lý hơn là huấn luyện lại thêm mỗi đêm cho chắc", "30 times; the better approach is to keep retraining every night to be safe"]
		],
		"a": 1,
		"w": ["1 lần mỗi sáng × 30 ngày = 30 lần, không khả thi. Giá cần một con số đúng nên nằm trong bảng và được công cụ đọc; huấn luyện đêm qua không theo kịp giá ngày mai.", "1 per morning × 30 days = 30 retrainings, which is not practical. A price needs an exact number, so keep it in a table read by a tool; last night's training cannot keep up with tomorrow's price."]
	}],
	"sa-react": [{
		"q": ["Trong vòng lặp suy nghĩ–hành động–quan sát, công cụ trả về lỗi. Bước observe là gì?", "In a think-act-observe loop, the tool returns an error. What is the observe step?"],
		"o": [
			["Một kết quả hợp lý do mô hình tự điền cho trọn vòng", "A plausible result the model fills in to complete the loop"],
			["Chính cái lỗi đó", "The error itself"],
			["Giá trị mặc định như «còn 3»", "A default value such as 'in stock: 3'"],
			["Không có gì; bỏ qua bước observe", "Nothing; the observe step is skipped"]
		],
		"a": 1,
		"w": ["Observe là kết quả thật của công cụ, kể cả lỗi. Tự điền một kết quả đẹp là bịa kết quả của công cụ.", "Observe is the tool's real output, including errors. Filling in a nice-looking result is inventing the tool's result."]
	}, {
		"q": ["Trần là 5 bước. Agent đã dùng đủ 5 bước mà chưa có kết quả catalog nào. Câu trả lời đúng là gì?", "The cap is 5 steps. The agent has used all 5 and has no catalog result. What is the right answer?"],
		"o": [
			["Chưa tra được", "Not checked yet"],
			["Còn hàng, vì thường là vậy", "In stock, since that is usually the case"],
			["Chạy thêm bước thứ 6 cho đến khi có kết quả", "Run a 6th step until a result appears"],
			["Hết hàng, tồn kho bằng 0", "Out of stock, stock equals 0"]
		],
		"a": 0,
		"w": ["Trần số bước là giới hạn của sản phẩm; không có log kết quả nghĩa là chưa tra. Đoán còn/hết hàng hay vượt trần đều sai quy tắc.", "The step cap is a product limit; with no result in the log, nothing was checked. Guessing in/out of stock or exceeding the cap both break the rule."]
	}],
	"sa-stage": [{
		"q": ["Vì sao không nên tự viết một cuộc hội thoại rồi chấm chính cuộc hội thoại đó ở chặng ba?", "Why should you not write your own conversation and then score that same conversation in stage three?"],
		"o": [
			["Vì hội thoại tự viết thường quá ngắn để chấm", "Because self-written conversations are usually too short to score"],
			["Vì giáo trình cấm viết bất kỳ ca nào", "Because the course forbids writing any case at all"],
			["Vì như vậy là chấm một chuyện bạn vừa bịa; các ca phải viết trước với kết quả đúng lấy từ catalog hoặc chính sách", "Because you would be scoring something you just invented; cases must be written first with correct results taken from the catalog or policy"],
			["Vì transcript chuẩn của giáo trình đã đủ, không cần ca riêng", "Because the course's standard transcript is enough and no cases of your own are needed"]
		],
		"a": 2,
		"w": ["Giáo trình không cấp transcript chuẩn, và chấm thứ tự bịa thì không đo được gì. Thước đo phải có trước, lấy từ catalog hoặc chính sách.", "The course gives no standard transcript, and scoring something invented measures nothing. The yardstick must exist first, taken from the catalog or policy."]
	}, {
		"q": ["Ở chặng một chưa có catalog. Khách hỏi giá gói A. Cách làm đúng?", "In stage one there is no catalog yet. A customer asks the price of package A. What is the right move?"],
		"o": [
			["Nêu giá gần đúng cho khách tham khảo", "Give an approximate price for reference"],
			["Nêu giá của tháng trước", "Quote last month's price"],
			["Nói giá là 0 vì không có dữ liệu", "Say the price is 0 because there is no data"],
			["Không nêu giá; nói là chưa tra được", "Do not state a price; say it has not been checked"]
		],
		"a": 3,
		"w": ["Chặng nào chưa có log thì chặng đó chưa xảy ra: chưa có catalog nên chưa được nói giá. Giá gần đúng hay giá cũ đều là số không có nguồn.", "A stage with no log has not happened: no catalog yet means no price may be stated. An approximate or old price is a number with no source."]
	}],
	"sa-tool": [{
		"q": ["Khác nhau giữa «tồn kho bằng 0» và «không thấy mã» là gì?", "What is the difference between 'stock equals 0' and 'code not found'?"],
		"o": [
			["Hai trường hợp như nhau, đều là hết hàng", "They are the same, both mean out of stock"],
			["Không thấy mã nghĩa là tồn kho bằng 0", "Code not found means stock is 0"],
			["Không thấy mã nghĩa là mã đó còn hàng nhưng chưa nhập", "Code not found means the item is in stock but not yet entered"],
			["Tồn kho 0 là một dòng có tồn kho bằng 0; không thấy mã là không có dòng nào", "Stock 0 is a row whose stock equals 0; code not found means there is no row"]
		],
		"a": 3,
		"w": ["Giống bảng SQL: không có dòng thì không có số, chứ không phải số 0. Gộp hai trường hợp là đổi nghĩa.", "As with an SQL table: no row means no number, not the number 0. Merging the two cases changes the meaning."]
	}, {
		"q": ["Công cụ catalog báo lỗi khi tra mã A12. Câu trả lời nào đúng với quy tắc?", "The catalog tool returns an error when looking up code A12. Which reply follows the rule?"],
		"o": [
			["Mã A12 tạm hết hàng", "Code A12 is temporarily out of stock"],
			["Mã A12 còn 0 sản phẩm", "Code A12 has 0 units"],
			["Hiện không tra được catalog, vì công cụ báo lỗi", "The catalog cannot be checked right now because the tool returned an error"],
			["Giá A12 theo chính sách hoàn tiền là như sau", "A12's price according to the refund policy is as follows"]
		],
		"a": 2,
		"w": ["Bọc lỗi thành «tạm hết hàng» là đổi nghĩa; lỗi phải được trả là lỗi. Chính sách là tài liệu, không phải nguồn giá.", "Wrapping an error as 'temporarily out of stock' changes its meaning; an error must be reported as an error. The policy is a document, not the source of prices."]
	}],
	"sa-score": [{
		"q": ["Self-consistency (cho mô hình trả lời nhiều lần rồi lấy đáp án phổ biến) làm được gì?", "What does self-consistency (sampling several answers and taking the most common) do?"],
		"o": [
			["Giảm một kiểu nhiễu của cách chọn token nhưng không tạo ra nguồn sự thật", "It reduces one kind of token-sampling noise but does not create a source of truth"],
			["Xác minh câu trả lời với catalog", "It verifies the answer against the catalog"],
			["Thay thế bộ ca chấm đã viết trước", "It replaces the pre-written test cases"],
			["Đảm bảo câu trả lời đúng nếu đa số lần giống nhau", "It guarantees correctness if most runs agree"]
		],
		"a": 0,
		"w": ["Nhiều lần đồng ý với nhau không phải đồng ý với catalog. Thước đo của một ca là kết quả catalog hoặc câu chính sách.", "Agreeing with each other is not agreeing with the catalog. A case's yardstick is the catalog result or a policy sentence."]
	}, {
		"q": ["Ca A12: catalog nói hết hàng. Mô hình trả lời «còn hàng» cả 5 lần. Điểm của ca này?", "Case A12: the catalog says out of stock. The model answers 'in stock' in all 5 runs. What is this case's score?"],
		"o": [
			["5 trên 5, vì nhất quán", "5 out of 5, because it is consistent"],
			["0 trên 1", "0 out of 1"],
			["1 trên 1, vì mô hình nói chắc", "1 out of 1, because the model sounded sure"],
			["0,5 trên 1, vì chắc chắn nhưng sai", "0.5 out of 1, for being confident but wrong"]
		],
		"a": 1,
		"w": ["Ca chỉ chấm theo kết quả catalog; 5 lần cùng sai vẫn là sai, điểm 0/1. Độ chắc chắn và số lần lặp không cộng điểm.", "A case is scored only against the catalog result; five identical wrong answers are still wrong, 0/1. Confidence and repetition earn no points."]
	}],
	"rag-why": [{
		"q": ["Bạn nói «dùng RAG» với một file PDF nội bộ, nhưng lần gọi không kèm đoạn nào của file. Câu trả lời về file thì sao?", "You say 'we use RAG' on an internal PDF, but the call includes no passage from the file. What about answers on the file?"],
		"o": [
			["Vẫn đúng, vì RAG đã nhét cả file vào trọng số", "Still fine, because RAG put the whole file into the weights"],
			["Là câu không nguồn, vì chưa có bước tìm đưa đoạn vào prompt", "They are unsourced, since no retrieval step put a passage into the prompt"],
			["Vẫn đúng, vì file nằm trong thư mục của dự án", "Still fine, because the file is in the project folder"],
			["Đúng nhưng chậm hơn bình thường", "Correct but slower than usual"]
		],
		"a": 1,
		"w": ["RAG không đổi trọng số; nó chỉ cho lần gọi thấy vài đoạn. Không thấy đoạn nào thì không có nguồn, dù nhắc chữ RAG.", "RAG does not change the weights; it only shows the call a few passages. With no passage shown there is no source, however often you say RAG."]
	}, {
		"q": ["Hệ thống tìm 3 đoạn, chỉ 1 đoạn chứa điều khoản. Có bao nhiêu đoạn là nhiễu?", "The system retrieves 3 passages and only 1 contains the clause. How many passages are noise?"],
		"o": [
			["2", "2"],
			["1", "1"],
			["3", "3"],
			["0, vì đã tìm được đoạn đúng thì mọi đoạn đều hữu ích", "0, because once the right passage is found every passage helps"]
		],
		"a": 0,
		"w": ["3 − 1 = 2 đoạn không chứa điều khoản là nhiễu. Có mặt đoạn đúng không làm các đoạn kia hết nhiễu; chúng vẫn tốn token và có thể gây nhầm.", "3 − 1 = 2 passages without the clause are noise. The right passage being present does not clean up the others; they still cost tokens and may mislead."]
	}],
	"rag-emb": [{
		"q": ["Hai câu cùng chủ đề, một câu phủ định câu kia. Trong embedding chúng thường?", "Two sentences share a topic and one negates the other. In embedding space they are usually?"],
		"o": [
			["Rất xa nhau vì ý trái ngược", "Far apart because the meanings are opposite"],
			["Trùng nhau hoàn toàn", "Exactly identical"],
			["Vẫn có thể gần nhau", "Possibly close together"],
			["Không thể so được vì embedding chỉ so từ khóa", "Not comparable, since embeddings only compare keywords"]
		],
		"a": 2,
		"w": ["Embedding đo gần về chủ đề, không kiểm định đúng sai hay phủ định. Vì vậy điểm gần chỉ cho ứng viên, không cho sự thật.", "Embeddings measure topical closeness, not truth or negation. So a high similarity only gives a candidate, not a fact."]
	}, {
		"q": ["Đoạn quảng cáo có điểm 0,91, điều khoản hoàn tiền có điểm 0,86. Đoạn nào là đoạn đúng cho câu hỏi về điều khoản?", "The promo passage scores 0.91 and the refund clause scores 0.86. Which is the right passage for a question about the clause?"],
		"o": [
			["Đoạn quảng cáo, vì điểm cao hơn", "The promo passage, because its score is higher"],
			["Cả hai đúng ngang nhau vì cùng có chữ hoàn tiền", "Both are equally right since both contain the word refund"],
			["Không đoạn nào, vì điểm dưới 0,95", "Neither, because scores are below 0.95"],
			["Điều khoản (0,86), dù điểm thấp hơn", "The clause (0.86), despite the lower score"]
		],
		"a": 3,
		"w": ["Điểm cao hơn chỉ nghĩa là gần hơn, không phải đúng hơn. Phải đọc nội dung đoạn để biết đâu là điều khoản.", "A higher score only means nearer, not more correct. You must read the passage to know which one is the clause."]
	}],
	"rag-chunk": [{
		"q": ["So sánh chunk nhỏ và chunk lớn, phát biểu nào đúng?", "Comparing small and large chunks, which statement is correct?"],
		"o": [
			["Chunk nhỏ luôn tốt hơn vì chính xác hơn", "Small chunks are always better because they are more precise"],
			["Chunk lớn không bao giờ mất điều kiện nên luôn tốt hơn", "Large chunks never lose conditions so they are always better"],
			["Có một kích thước chuẩn đúng cho mọi file", "There is one standard size that is right for every file"],
			["Chunk nhỏ dễ trúng một chữ nhưng dễ mất điều kiện; chunk lớn tốn token và kéo theo đoạn không liên quan", "Small chunks hit a keyword easily but may lose conditions; large chunks cost tokens and pull in unrelated text"]
		],
		"a": 3,
		"w": ["Không có kích thước đúng cho mọi file; cần kiểm bằng các ca có điều kiện nằm sau lời hứa. Hai cực đều có cái giá riêng.", "No size fits every file; test with cases where the condition comes after the promise. Both extremes have their own cost."]
	}, {
		"q": ["Một mục có 8 dòng, cắt mỗi mảnh 2 dòng (mảnh 1 gồm dòng 1–2, mảnh 2 gồm dòng 3–4...). Lời hứa ở dòng 1, điều kiện ở dòng 6. Hai thông tin nằm ở mảnh nào?", "A section has 8 lines, cut into 2-line chunks (chunk 1 is lines 1-2, chunk 2 is lines 3-4...). The promise is on line 1 and the condition on line 6. Which chunks hold them?"],
		"o": [
			["Mảnh 1 và mảnh 2", "Chunk 1 and chunk 2"],
			["Cùng mảnh 1", "Both in chunk 1"],
			["Mảnh 1 và mảnh 3", "Chunk 1 and chunk 3"],
			["Mảnh 1 và mảnh 4", "Chunk 1 and chunk 4"]
		],
		"a": 2,
		"w": ["8 dòng cắt mỗi 2 dòng được 4 mảnh; dòng 6 thuộc mảnh thứ 6/2 = 3. Hai thông tin ở hai mảnh khác nhau nên hỏi về hoàn tiền có thể chỉ thấy lời hứa mà thiếu điều kiện.", "8 lines in 2-line chunks gives 4 chunks; line 6 belongs to chunk 6/2 = 3. The two facts sit in different chunks, so a refund question may retrieve the promise without its condition."]
	}],
	"rag-vec": [{
		"q": ["Kho có cả FAQ marketing và điều khoản. Top-1 là FAQ, điều khoản đứng thứ hai. Cách xử lý đúng?", "The store has both a marketing FAQ and the terms. Top-1 is the FAQ and the terms are second. What is the right handling?"],
		"o": [
			["Lấy vài đoạn đầu, đọc rồi mới viết; top-1 không phải kết luận", "Take several top passages, read them, then write; top-1 is not a conclusion"],
			["Trả lời theo top-1 vì gần nhất là đúng nhất", "Answer from top-1 because nearest means most correct"],
			["Re-rank sẽ biến đoạn sai thành đoạn đúng", "Re-ranking will turn the wrong passage into the right one"],
			["Bỏ FAQ khỏi kho mà không cần kiểm tra ca nào", "Remove the FAQ from the store without checking any case"]
		],
		"a": 0,
		"w": ["Nearest neighbor chỉ là thứ tự trong kho đã nạp, không phải thứ tự của sự thật. Re-rank là đọc lần hai, không làm đoạn sai thành đúng.", "Nearest neighbor is only an ordering within the loaded store, not an ordering of truth. Re-ranking is a second reading and does not make a wrong passage right."]
	}, {
		"q": ["Top-3 có điểm 0,91, 0,86, 0,84. Cách dùng nào hợp lý?", "The top-3 scores are 0.91, 0.86 and 0.84. Which use is sensible?"],
		"o": [
			["Chỉ lấy đoạn 0,91 vì cao nhất", "Take only the 0.91 passage because it is highest"],
			["Đọc cả ba đoạn rồi mới viết câu trả lời", "Read all three passages before writing the answer"],
			["Loại hai đoạn có điểm dưới 0,90 vì chắc chắn sai", "Drop the two below 0.90 as surely wrong"],
			["Lấy trung bình ba điểm 0,87 làm độ tin cậy của câu trả lời", "Use the average 0.87 as the answer's confidence"]
		],
		"a": 1,
		"w": ["Điểm chênh nhau chỉ vài phần trăm, điều khoản có thể ở đoạn 0,86. Điểm gần là ứng viên; đọc cả ba mới biết đoạn đúng.", "The scores differ by only a few hundredths, and the clause may be in the 0.86 passage. Closeness gives candidates; reading all three reveals the right one."]
	}],
	"rag-idx": [{
		"q": ["Điều khoản 7 ngày đã sửa thành 14 ngày nhưng bot vẫn nói 7 ngày cả buổi sáng. Nguyên nhân hợp lý nhất?", "The 7-day clause was changed to 14 days but the bot kept saying 7 all morning. The most likely cause?"],
		"o": [
			["Mô hình ngoan cố giữ câu trả lời cũ", "The model stubbornly keeps its old answer"],
			["Chỉ mục (index) là một snapshot cũ chưa được xây lại", "The index is an old snapshot that was not rebuilt"],
			["Embedding bị hỏng do sửa file", "The embeddings broke because the file was edited"],
			["LlamaIndex tự theo dõi mọi lần sửa nên lỗi nằm ở prompt", "LlamaIndex tracks every edit automatically so the fault is in the prompt"]
		],
		"a": 1,
		"w": ["Thư viện không tự theo dõi mọi lần sửa file; nếu không đặt việc đó thì index là snapshot. Im lặng nghĩa là bản cũ.", "Libraries do not track every file edit on their own; unless set up, the index is a snapshot. Silence means the old version."]
	}, {
		"q": ["File sửa lúc 9:00, index xây lúc 8:00 và xây lại lúc 11:00. Có ba câu hỏi lúc 8:30, 9:30 và 10:45. Câu nào nhận bản cũ sai lệch so với file hiện tại?", "The file is edited at 9:00; the index is built at 8:00 and rebuilt at 11:00. Three questions arrive at 8:30, 9:30 and 10:45. Which get an outdated answer compared with the current file?"],
		"o": [
			["Câu lúc 9:30 và 10:45", "The 9:30 and 10:45 questions"],
			["Chỉ câu lúc 9:30", "Only the 9:30 question"],
			["Cả ba câu", "All three"],
			["Chỉ câu lúc 10:45", "Only the 10:45 question"]
		],
		"a": 0,
		"w": ["Lúc 8:30 file chưa sửa nên bản trong index vẫn khớp. Từ 9:00 đến khi xây lại lúc 11:00 thì index lệch, nên 9:30 và 10:45 thấy bản cũ.", "At 8:30 the file is not yet edited, so the index still matches. From 9:00 until the rebuild at 11:00 the index is stale, so 9:30 and 10:45 see the old version."]
	}],
	"rag-rank": [{
		"q": ["Re-rank không làm được việc nào sau đây?", "Which of these can re-ranking not do?"],
		"o": [
			["Chấm lại độ hợp giữa câu hỏi và các ứng viên", "Re-score how well each candidate fits the question"],
			["Kéo một đoạn đúng từ vị trí 15 lên đầu nếu nó còn trong danh sách", "Lift a correct passage from position 15 to the top if it is still in the list"],
			["Tìm ra một đoạn chưa nằm trong danh sách ứng viên", "Find a passage that is not in the candidate list"],
			["Sắp xếp lại thứ tự các ứng viên", "Reorder the candidates"]
		],
		"a": 2,
		"w": ["Re-rank chỉ chấm lại những gì đã được đưa vào. Xếp lại không đẻ ra đoạn còn thiếu.", "Re-ranking only rescored what was passed in. Reordering cannot produce a missing passage."]
	}, {
		"q": ["Có 20 đoạn, điều khoản đúng đứng thứ 15. Bước tìm chỉ giữ 5 đoạn đầu rồi mới re-rank. Kết quả?", "There are 20 passages and the right clause ranks 15th. Retrieval keeps only the top 5 before re-ranking. What happens?"],
		"o": [
			["Re-rank đưa nó lên vị trí 1", "The re-ranker lifts it to position 1"],
			["Re-rank đưa nó vào vị trí 5", "The re-ranker moves it to position 5"],
			["Nó vẫn được thấy vì top-1 của embedding luôn đúng", "It is still seen because the embedding's top-1 is always right"],
			["Điều khoản bị loại từ trước nên re-rank không thấy nó", "The clause is dropped beforehand so the re-ranker never sees it"]
		],
		"a": 3,
		"w": ["Vị trí 15 > 5 nên đoạn không nằm trong danh sách đưa vào re-rank. Phải giữ đủ ứng viên (ví dụ 20) thì re-rank mới có thể cứu nó.", "Position 15 is beyond 5, so the passage is not in the re-ranker's input. Enough candidates (for example 20) must be kept for re-ranking to rescue it."]
	}],
	"rag-near": [{
		"q": ["Buổi demo tìm kiếm ngữ nghĩa chạy đúng một câu. Điều gì đúng?", "The semantic search demo ran just one query correctly. What is true?"],
		"o": [
			["Đó là đánh giá đủ vì tìm được đoạn đúng", "It is a sufficient evaluation since the right passage was found"],
			["Có thể suy ra tỷ lệ chính xác khoảng 100%", "You can infer an accuracy of about 100%"],
			["Có thể suy ra giáo trình đã cấp bộ ca chuẩn", "You can infer the course supplied a standard case set"],
			["Đó chỉ là một ca, chưa phải đánh giá; cần một bộ ca có cả ca độ gần dễ phản bội", "It is only one case, not an evaluation; you need a case set including ones where closeness misleads"]
		],
		"a": 3,
		"w": ["Một câu chạy được không phải một tỷ lệ. Demo là một câu trong bộ, nếu nó đáng nằm trong bộ.", "One working query is not a rate. A demo is one case in the set, if it deserves a place there."]
	}, {
		"q": ["Bộ 20 ca, đạt 16 ca. Tỷ lệ đạt là bao nhiêu?", "A set of 20 cases, with 16 passing. What is the pass rate?"],
		"o": [
			["16%", "16%"],
			["20%", "20%"],
			["80%", "80%"],
			["84%", "84%"]
		],
		"a": 2,
		"w": ["16 ÷ 20 = 0,8 = 80%. 20% là tỷ lệ nếu nhầm 4 ca rớt thành ca đạt; 16% là lấy tử số làm phần trăm.", "16 ÷ 20 = 0.8 = 80%. 20% would come from counting the 4 failures instead; 16% takes the numerator as a percentage."]
	}],
	"rag-store": [{
		"q": ["Một collection không có đoạn nào, lần tìm trả về rỗng. Điều gì nên xảy ra?", "A collection holds no passages and the search returns empty. What should happen?"],
		"o": [
			["Báo là không tìm thấy; không để mô hình viết tiếp như thể có đoạn", "Report nothing was found; do not let the model continue as if it had a passage"],
			["Lấy đoạn gần nhất ở collection khác cho đủ", "Borrow the nearest passage from another collection to fill in"],
			["Để mô hình trả lời từ trí nhớ", "Let the model answer from memory"],
			["Coi như embedding hỏng và xây lại ngay", "Assume the embeddings are broken and rebuild immediately"]
		],
		"a": 0,
		"w": ["Rỗng không phải một đoạn gần. Viết tiếp trên lần tìm rỗng là tạo câu không nguồn.", "Empty is not a nearby passage. Writing on after an empty search produces an unsourced answer."]
	}, {
		"q": ["Collection mới nhất là policy-2026-10 nhưng lần gọi trỏ vào policy-2026-09, câu trả lời bám theo tháng 9. Nguyên nhân?", "The newest collection is policy-2026-10 but the call points to policy-2026-09 and the answer follows September. What is the cause?"],
		"o": [
			["Embedding bị hỏng", "The embeddings are broken"],
			["Trỏ nhầm tên kho, tức lấy nhầm cả một phiên bản", "The wrong store name, so a whole wrong version is retrieved"],
			["Chunk quá lớn", "The chunks are too large"],
			["Mô hình quên điều khoản tháng 10", "The model forgot the October clause"]
		],
		"a": 1,
		"w": ["Hai collection là hai kho khác nhau và kho khác không tự được tìm. Ghi tên kho trong log giúp thấy lỗi này.", "Two collections are separate stores, and another store is never searched automatically. Logging the store name makes this error visible."]
	}],
	"rag-demo": [{
		"q": ["Một lần RAG in ra câu trả lời trơn tru cho thấy điều gì?", "What does one RAG run that prints a fluent answer show?"],
		"o": [
			["Câu trả lời đã bám theo file", "The answer follows the file"],
			["Đường ống chạy được (điều kiện cần), chưa phải thước đo", "The pipeline runs (a necessary condition), not yet a measurement"],
			["Độ chính xác chuẩn của ngành", "The industry-standard accuracy"],
			["Hệ thống không còn bịa số", "The system no longer invents numbers"]
		],
		"a": 1,
		"w": ["Thước đo là các ca đối chiếu đoạn đã tìm với câu viết ra. In được câu không có nghĩa là đã bám theo file.", "The yardstick is cases that compare the retrieved passage with the written answer. Printing a sentence does not mean it follows the file."]
	}, {
		"q": ["Bộ 20 ca có 17 ca đạt. Tỷ lệ đạt là?", "A 20-case set has 17 passing. What is the pass rate?"],
		"o": [
			["85%", "85%"],
			["17%", "17%"],
			["15%", "15%"],
			["100%", "100%"]
		],
		"a": 0,
		"w": ["17 ÷ 20 = 0,85 = 85%. 15% là tỷ lệ ca rớt (3/20); 100% chỉ đúng nếu cả 20 đạt.", "17 ÷ 20 = 0.85 = 85%. 15% is the failure rate (3/20); 100% would need all 20 to pass."]
	}],
	"rag-job": [{
		"q": ["Bài yêu cầu RAG trên các văn bản được giao. Một câu trả lời dẫn một điều khoản có thật ngoài đời nhưng không có trong các văn bản. Đánh giá?", "The task requires RAG over the assigned documents. An answer cites a real-world clause that is not in those documents. How is it judged?"],
		"o": [
			["Hợp lệ vì điều khoản đó có thật", "Valid because the clause is real"],
			["Được điểm cộng vì bổ sung kiến thức", "Earns bonus credit for extra knowledge"],
			["Là câu ngoài bài", "It is out of scope"],
			["Hợp lệ nếu trích dẫn đúng số điều", "Valid if the article number is quoted correctly"]
		],
		"a": 2,
		"w": ["Nguồn của bài là tập được giao; không có trong tập thì phải nói không thấy trong tập. Có thật ngoài đời không đủ.", "The task's source is the assigned set; if it is not in the set, say it was not found there. Being real elsewhere is not enough."]
	}, {
		"q": ["Ba câu trả lời: A dẫn một đoạn trong tập; B dẫn điều khoản ngoài tập; C dẫn đúng đoạn nhưng thêm một con số không có trong đoạn. Câu nào hợp lệ?", "Three answers: A cites a passage from the set; B cites a clause outside the set; C cites the right passage but adds a number not in it. Which are valid?"],
		"o": [
			["A và B", "A and B"],
			["A và C", "A and C"],
			["Cả ba", "All three"],
			["Chỉ A", "Only A"]
		],
		"a": 3,
		"w": ["B ngoài bài; C thêm con số không có trong đoạn, và một con số như vậy là một lần sai. Chỉ A bám đúng tập được giao.", "B is out of scope; C adds a number absent from the passage, which counts as an error. Only A stays within the assigned set."]
	}],
	"im-grid": [{
		"q": ["Ảnh sinh có độ phân giải cao hơn thì?", "If a generated image has higher resolution, then?"],
		"o": [
			["Đáng tin hơn vì chi tiết rõ hơn", "It is more trustworthy because details are clearer"],
			["Chữ trên biển hiệu chắc chắn đúng", "Text on signs is certainly correct"],
			["Trở thành ảnh tư liệu", "It becomes documentary evidence"],
			["Có nhiều ô hơn, không có nghĩa là nhiều sự thật hơn", "It has more cells, not more truth"]
		],
		"a": 3,
		"w": ["Độ phân giải chỉ là số ô. Chữ trong ảnh sinh cũng chỉ là các ô, không phải chuỗi đã được tra.", "Resolution is only the number of cells. Text in a generated image is also just cells, not a string that was looked up."]
	}, {
		"q": ["Ảnh 1024 × 1024 có bao nhiêu ô, và có ô nào là bằng chứng không?", "How many cells does a 1024 × 1024 image have, and is any of them evidence?"],
		"o": [
			["1.048.576 ô; ảnh sinh sắc nét là bằng chứng", "1,048,576 cells; a sharp generated image is evidence"],
			["2.048 ô; không ô nào là bằng chứng", "2,048 cells; none is evidence"],
			["1.048.576 ô; không ô nào là bằng chứng", "1,048,576 cells; none is evidence"],
			["10.240 ô; mỗi ô là một bằng chứng", "10,240 cells; each is a piece of evidence"]
		],
		"a": 2,
		"w": ["1024 × 1024 = 1.048.576 ô. Nhiều ô không biến lưới sinh thành sự thật; 2.048 là 1024 × 2, không phải diện tích.", "1024 × 1024 = 1,048,576 cells. Many cells do not turn a generated grid into fact; 2,048 would be 1024 × 2, not the area."]
	}],
	"im-vae": [{
		"q": ["Chữ nhỏ trên biển hiệu thành một vệt sau khi qua VAE. Giải thích đúng là?", "Small lettering on a sign becomes a smear after a VAE. What is the correct explanation?"],
		"o": [
			["Chi tiết riêng đã bị bỏ khi nén", "The specific detail was discarded in compression"],
			["Đó là phông chữ nghệ thuật", "It is an artistic font"],
			["Máy ảnh bị rung khi chụp", "The camera shook while shooting"],
			["VAE lưu từng tấm ảnh như khóa nên đã lưu sai", "The VAE stores each image like a key and stored it wrongly"]
		],
		"a": 0,
		"w": ["VAE giữ phần chung và bỏ phần riêng, nên bản dựng lại mềm hơn. Mờ ở đây là mất thông tin, không phải hiệu ứng.", "A VAE keeps what is shared and drops what is specific, so the reconstruction is softer. The blur here is information loss, not an effect."]
	}, {
		"q": ["Ảnh xám 1024 × 1024 (1.048.576 giá trị) được nén còn vectơ 4.096 số. Số giá trị giảm bao nhiêu lần?", "A 1024 × 1024 grayscale image (1,048,576 values) is compressed to a vector of 4,096 numbers. By what factor does the number of values drop?"],
		"o": [
			["16 lần", "16 times"],
			["256 lần", "256 times"],
			["64 lần", "64 times"],
			["1.024 lần", "1,024 times"]
		],
		"a": 1,
		"w": ["1.048.576 ÷ 4.096 = 256. Giảm mạnh như vậy thì phần chi tiết riêng khó còn nằm trong mã.", "1,048,576 ÷ 4,096 = 256. With such a drop, the specific detail can hardly remain in the code."]
	}],
	"im-gan": [{
		"q": ["Trong GAN, người chê (discriminator) không bắt được ảnh giả. Điều đó có nghĩa là?", "In a GAN the discriminator fails to catch a fake. What does that mean?"],
		"o": [
			["Sản phẩm trong ảnh có thật ngoài đời", "The product in the image exists in real life"],
			["Chỉ là qua mặt được người chê; không có nghĩa sản phẩm đó có thật", "Only that it fooled the discriminator; it does not mean the product exists"],
			["Ảnh được chứng nhận là ảnh chụp", "The image is certified as a photograph"],
			["Kho hàng chắc chắn có mặt hàng đó", "The warehouse surely stocks that item"]
		],
		"a": 1,
		"w": ["«Giống ảnh thật» nghĩa là giống tập huấn luyện. Ảnh GAN không có log chụp ở đâu và không đối chiếu kho.", "'Looks real' means resembling the training set. A GAN image has no log of where it was shot and is not checked against stock."]
	}, {
		"q": ["Tập huấn luyện có 1.000 ảnh giày. Có thể suy ra kho của bạn có 1.000 mã giày không?", "The training set has 1,000 shoe photos. Can you conclude your catalog has 1,000 shoe codes?"],
		"o": [
			["Không; số ảnh huấn luyện không cho biết gì về kho, phải kiểm catalog", "No; the number of training images says nothing about stock, check the catalog"],
			["Có, mỗi ảnh tương ứng một mã", "Yes, each image matches one code"],
			["Có ít nhất 1 mã cho đôi giày GAN vừa sinh", "At least one code exists for the shoe the GAN just generated"],
			["Chắc chắn 0 mã vì ảnh là ảnh sinh", "Surely 0 codes because the images are generated"]
		],
		"a": 0,
		"w": ["Tập huấn luyện và catalog là hai nguồn độc lập. Cũng không thể kết luận 0 mã; chỉ catalog trả lời được.", "The training set and the catalog are independent sources. You cannot conclude 0 either; only the catalog can answer."]
	}],
	"im-diff": [{
		"q": ["Diffusion thực chất làm gì?", "What does diffusion actually do?"],
		"o": [
			["Tra một cơ sở dữ liệu ảnh rồi cắt ghép", "It queries an image database and stitches pieces together"],
			["Đối chiếu bao bì với catalog trước khi vẽ", "It checks packaging against the catalog before drawing"],
			["Học cách gỡ nhiễu để ra một lưới trông thật, không tra kho ảnh", "It learns to denoise toward a realistic-looking grid, not look up an image library"],
			["Sinh mã vạch hợp lệ trong hệ thống", "It generates barcodes valid in your system"]
		],
		"a": 2,
		"w": ["Mã vạch trong ảnh chỉ là các ô nhiễu còn sót, không phải mã trong hệ thống. Việc luôn ra được một ảnh không phải dấu hiệu đã tìm thấy.", "A barcode in the image is just leftover noise cells, not a code in your system. Always producing an image does not signal that anything was found."]
	}, {
		"q": ["Một mô hình gỡ nhiễu qua 50 bước. Có bao nhiêu bước đối chiếu với catalog?", "A model denoises over 50 steps. How many of those steps check the catalog?"],
		"o": [
			["1, bước cuối", "1, the last step"],
			["25, nửa đầu", "25, the first half"],
			["50, mỗi bước đều kiểm", "50, every step checks"],
			["0", "0"]
		],
		"a": 3,
		"w": ["Cả 50 bước chỉ làm lưới trông thật hơn; không bước nào kiểm sự thật. Guidance mạnh hơn cũng không đổi điều đó.", "All 50 steps only make the grid look more real; none checks facts. A higher guidance scale does not change that."]
	}],
	"im-txt": [{
		"q": ["Thêm chữ «official» vào prompt tạo ảnh thì?", "What does adding the word 'official' to an image prompt do?"],
		"o": [
			["Ảnh trở thành tài liệu chính thức", "The image becomes an official document"],
			["Giải được vấn đề quyền với thương hiệu", "It resolves brand rights issues"],
			["Hoạt động như bộ lọc pháp lý", "It acts as a legal filter"],
			["Không tạo ra văn bản hay quyền chính thức nào", "It creates no official document or rights"]
		],
		"a": 3,
		"w": ["Prompt lái ảnh nhưng không chứng nhận ảnh. Ảnh có thương hiệu của người khác là câu hỏi về quyền, không giải bằng thêm chữ.", "A prompt steers the image but does not certify it. A picture with someone else's brand is a rights question, not solved by adding words."]
	}, {
		"q": ["Bạn sinh ảnh một bao bì giống thương hiệu có thật để đăng quảng cáo. Bước đúng?", "You generate an image of packaging resembling a real brand to run in an ad. What is the right step?"],
		"o": [
			["Thêm negative prompt «no copyright» rồi đăng", "Add the negative prompt 'no copyright' and publish"],
			["Tăng guidance scale cho ảnh nghe lời hơn rồi đăng", "Raise the guidance scale so the image obeys more, then publish"],
			["Coi nó là bản phác; duyệt bằng mắt người, tài sản thật và kiểm tra quyền trước khi đăng", "Treat it as a sketch; review with human eyes, real assets and a rights check before publishing"],
			["Thêm chữ official vào prompt rồi đăng", "Add 'official' to the prompt and publish"]
		],
		"a": 2,
		"w": ["Guidance làm ảnh nghe lời hơn nhưng vẫn có thể sai sự thật. Negative prompt chỉ thêm một hướng tránh, không phải giấy phép.", "Guidance makes the image more obedient yet it can still be false. A negative prompt only adds a direction to avoid; it is not a licence."]
	}],
	"lc-tpl": [{
		"q": ["Khuôn «chỉ dùng đoạn sau: {passage}» nhưng passage rỗng. Cách làm đúng?", "The template says 'use only this passage: {passage}' but passage is empty. What is the right move?"],
		"o": [
			["Dừng hoặc báo thiếu biến, không gọi mô hình", "Stop or report the missing variable; do not call the model"],
			["Vẫn gọi mô hình để nó tự điền nguồn", "Call the model anyway and let it fill in a source"],
			["Tin LangChain sẽ tự kiểm tra tài liệu đúng", "Trust LangChain to verify the right document"],
			["Gọi mô hình rồi bỏ qua nếu câu trả lời lạ", "Call the model and ignore the answer if it looks odd"]
		],
		"a": 0,
		"w": ["Template chỉ là chuỗi có lỗ; thư viện không thêm sự thật. Gọi với lỗ rỗng thì câu trả lời nằm ngoài RAG.", "A template is a string with holes; the library adds no facts. Calling with an empty hole puts the answer outside RAG."]
	}, {
		"q": ["Khuôn có 2 biến bắt buộc nhưng chỉ truyền 1 biến. Cách xử lý?", "The template has 2 required variables but only 1 is passed. How to handle it?"],
		"o": [
			["Gọi với biến còn thiếu để trống", "Call with the missing variable left blank"],
			["Dừng, không gọi mô hình", "Stop without calling the model"],
			["Để mô hình đoán biến thứ hai", "Let the model guess the second variable"],
			["Gọi rồi thử lại 3 lần cho đến khi ra kết quả", "Call and retry 3 times until a result appears"]
		],
		"a": 1,
		"w": ["Việc kiểm tra đủ biến, đúng nguồn nằm ở sản phẩm, không nằm trong dấu ngoặc nhọn. Thiếu 2 − 1 = 1 biến thì phải dừng.", "Checking for all variables and the right source is the product's job, not the braces'. With 2 − 1 = 1 variable missing, you must stop."]
	}],
	"lc-parse": [{
		"q": ["Output parser kiểm tra điều gì?", "What does an output parser check?"],
		"o": [
			["Giá trong JSON có khớp catalog không", "Whether the price in the JSON matches the catalog"],
			["Dạng của đầu ra, không kiểm sự thật của các trường", "The shape of the output, not the truth of its fields"],
			["Mô hình có nói thật không", "Whether the model is telling the truth"],
			["Nguồn của đoạn đã tìm", "The source of the retrieved passage"]
		],
		"a": 1,
		"w": ["JSON hợp lệ vẫn có thể chứa mức giá không có trong catalog. Việc đó thuộc về log công cụ, không thuộc parser.", "Valid JSON can still contain a price absent from the catalog. That belongs to the tool log, not the parser."]
	}, {
		"q": ["Dạng yêu cầu là có hoặc không kèm mã. Mô hình viết «tôi nghĩ là có, khoảng 2 triệu» và parser vỡ cả 3 lần thử. Kết quả đúng của hệ thống?", "The required format is yes or no plus a code. The model writes 'I think yes, around 2 million' and the parser fails on all 3 tries. What is the system's correct result?"],
		"o": [
			["Lỗi dạng sau lần thử thứ 3", "A format error after the 3rd attempt"],
			["«Có», vì mô hình nghiêng về có", "'Yes', since the model leans toward yes"],
			["Giá 2 triệu, vì mô hình đã nêu", "A price of 2 million, since the model stated it"],
			["Giá 0, vì không parse được", "A price of 0, since nothing could be parsed"]
		],
		"a": 0,
		"w": ["Nuốt lỗi parser là mất dấu một lần mô hình không theo dạng. Vỡ dạng mà thành số 0 là tự bịa một quyết định.", "Swallowing a parser error loses the trace of the model ignoring the format. Turning a broken format into 0 invents a decision."]
	}],
	"lc-agent": [{
		"q": ["Chain và agent khác nhau thế nào?", "How do chains and agents differ?"],
		"o": [
			["Agent thông minh hơn nên không cần trần", "An agent is smarter so it needs no cap"],
			["Chain tự chọn bước sau, agent đi đường cố định", "A chain picks the next step, an agent follows a fixed path"],
			["Chain là đường đã vẽ sẵn, agent tự chọn bước sau; cả hai đều cần trần số bước", "A chain is a pre-drawn path, an agent picks the next step; both need a step cap"],
			["Chỉ chain cần trần vì agent tự dừng khi hài lòng", "Only chains need a cap because agents stop when satisfied"]
		],
		"a": 2,
		"w": ["Agent chỉ được phép rẽ nhánh, mỗi nhánh tốn token và có thể gọi nhầm công cụ. Không có trần là vòng lặp không có cửa ra.", "An agent is merely allowed to branch; each branch costs tokens and may call the wrong tool. No cap is a loop with no exit."]
	}, {
		"q": ["Agent có trần 5 bước, mỗi bước tốn tối đa 1.000 token. Lần chạy tệ nhất tốn bao nhiêu token?", "An agent has a cap of 5 steps and each step costs at most 1,000 tokens. What is the worst-case run cost?"],
		"o": [
			["1.000 token", "1,000 tokens"],
			["6.000 token", "6,000 tokens"],
			["Không giới hạn", "Unlimited"],
			["5.000 token", "5,000 tokens"]
		],
		"a": 3,
		"w": ["5 × 1.000 = 5.000. Chính trần là thứ giúp chặn trên được chi phí; không trần thì không có chặn trên.", "5 × 1,000 = 5,000. The cap is what provides an upper bound on cost; without it there is none."]
	}],
	"cap-none": [{
		"q": ["Khóa này có module BA Capstone. Điều gì đúng?", "This course has a BA Capstone module. What is true?"],
		"o": [
			["Capstone dạy một công thức tổng hợp mới", "The capstone teaches a new combined formula"],
			["Capstone cấp một bộ dữ liệu mẫu chuẩn của ngành", "The capstone supplies a standard industry sample dataset"],
			["Capstone có KPI ngành riêng cần thuộc", "The capstone has its own industry KPIs to memorize"],
			["Không có buổi, công thức hay case mới; làm bài bằng các ý đã học", "There is no new lesson, formula or case; you work with ideas already learned"]
		],
		"a": 3,
		"w": ["Module này chỉ là một đầu mục; các buổi dạy nằm ở C0 đến C6 và hai phần bổ sung. Dữ liệu riêng nếu có thuộc về đề bài.", "The module is only a heading; the lessons live in C0 to C6 and two supplements. Any specific data belongs to the assignment."]
	}, {
		"q": ["Bạn bắt đầu một bài capstone. Bước đầu tiên đúng là gì?", "You start a capstone assignment. What is the correct first step?"],
		"o": [
			["Tự bịa một KPI ngành mới để đo", "Invent a new industry KPI to measure"],
			["Chạy mô hình trước rồi tìm câu hỏi sau", "Run a model first and find the question later"],
			["Hỏi ai quyết định điều gì, như bước đầu của CRISP-DM", "Ask who decides what, as in the first step of CRISP-DM"],
			["Tạo một bộ dữ liệu mẫu cho đủ bài", "Create a sample dataset to fill out the assignment"]
		],
		"a": 2,
		"w": ["Capstone vẫn bắt đầu từ quyết định cần hỗ trợ, như thẻ CRISP-DM. Bịa KPI hay dữ liệu là thêm thứ khóa này không cấp.", "A capstone still starts from the decision to support, as in the CRISP-DM card. Inventing KPIs or data adds things this course does not provide."]
	}]
};
//#endregion
export { bayes, binomial, cdf, ci, clt, combin, self_test_default as default, dist, ev, events, hier, joint, normal, pdf, permut, rv, samples, zscore };
