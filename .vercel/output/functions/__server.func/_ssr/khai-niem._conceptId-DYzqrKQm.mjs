import { o as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as studyCopy, B as subscribeRaw, F as getRawVersion, I as getServerRawVersion, M as studyNeighbors, O as subscribeProgress, b as getServerProgress, j as studyListTitle, k as getStudy, r as Route$1, y as getProgress } from "./router-DhyOigLQ.mjs";
import { n as Range, r as Sim, t as Lab } from "./labs-DBu-8TIJ.mjs";
import { t as Tex } from "./tex-t3KOuum9.mjs";
import { o as relatedOf } from "./map-CbrCj52C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/khai-niem._conceptId-DYzqrKQm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var wideBeats = {
	"x-drill": {
		a: ["bài luyện", "a drill"],
		b: ["phần dạy", "the teaching"],
		noteA: ["Buổi này là bài luyện hoặc bài nộp. Không có định nghĩa mới.", "This session is a drill or a submission. There is no new definition."],
		noteB: ["Mở lại phần dạy của khóa. Đừng học thuộc đáp án.", "Reopen the teaching part of the course. Don't memorize an answer."]
	},
	"g-c0-order": {
		a: ["đúng thứ tự", "in file order"],
		b: ["nhảy có", "skipping ahead"],
		noteA: ["Mục lục mở từ C0-1 tới C7. Mỗi khóa là một tầng, không phải một menu tùy ý.", "The contents run from C0-1 to C7. Each course is a layer, not a menu you hop around."],
		noteB: ["Nhảy tới rừng cây khi chưa có một dòng dữ liệu thì phiếu bầu không có gì để đếm.", "Jumping to a forest before you have a row of data means the vote has nothing to count."]
	},
	"g-c0-read": {
		a: ["một ý", "one idea"],
		b: ["không quiz", "no quiz"],
		noteA: ["Đọc vì sao cần, nối với ý trước, nhìn hình đang đổi, rồi câu nói cho đúng.", "Read why it matters, how it links, watch the picture change, then the precise sentence."],
		noteB: ["Sổ không hỏi lại bạn. Không có ô trả lời.", "The notebook does not ask you back. There is no answer box."]
	},
	"g-crisp-biz": {
		a: ["câu hỏi trước", "question first"],
		b: ["file trước", "file first"],
		noteA: ["Chưa có câu «quyết định gì» thì chưa có bài toán.", "Without “what will be decided”, there is no problem yet."],
		noteB: ["Có file mà chưa biết ai quyết định thì model không có chỗ dùng.", "A file with nobody to decide for has nowhere for a model to land."]
	},
	"g-crisp-data": {
		a: ["cột đang có", "the column you have"],
		b: ["cột cần quyết", "the column you need"],
		noteA: ["Một cột có mặt không có nghĩa nó đo đúng việc.", "A column being present does not mean it measures the job."],
		noteB: ["Đo nhầm thì làm sạch cũng chỉ làm sạch cái nhầm.", "The wrong measure, cleaned, is still the wrong measure."]
	},
	"g-crisp-prep": {
		a: ["làm cho đúng hạt", "fix the grain"],
		b: ["chấm bằng accuracy", "score with accuracy"],
		noteA: ["Chuẩn bị là sửa hạt và lỗ hổng. Model là một cách trả lời. Evaluation hỏi cách đó có đỡ quyết định không.", "Preparation fixes grain and holes. A model is one way to answer. Evaluation asks whether that way helps the decision."],
		noteB: ["Accuracy trên lớp đông có thể đẹp mà không giữ được ai.", "Accuracy on a crowded class can look good and still keep nobody."]
	},
	"g-crisp-ship": {
		a: ["một file gửi", "a file you send"],
		b: ["một quyết định chạy", "a decision that runs"],
		noteA: ["Deployment là quyết định được dùng lặp lại, có người chịu, có lúc nào thì làm lại.", "Deployment is a decision used again, with an owner, and a time when it is rebuilt."],
		noteB: ["Gửi một file cuối tuần không phải là đã đưa vào vận hành.", "Sending a Friday file is not the same as running it."]
	},
	"g-ps-open": {
		a: ["sáu bước", "six steps"],
		b: ["một mẹo", "one trick"],
		noteA: ["Hiểu việc, đặt khung, tìm nguyên nhân, xét cách, rồi làm và đo.", "Understand the job, frame it, find a cause, weigh options, then do it and measure."],
		noteB: ["Buổi 4 và buổi 6 trong file gốc chỉ có tiêu đề. Ý vẫn được dạy ở đây, không bịa thêm video.", "Sessions 4 and 6 in the source file are titles only. The idea is still taught here. No fake video."]
	},
	"g-ps-type": {
		a: ["đang chọn", "choosing"],
		b: ["đang giải thích", "explaining"],
		noteA: ["Việc «chọn» cần một thước. Việc «giải thích» cần một cơ chế. Trộn hai cái thì ra một slide không ai làm được.", "A choosing job needs a measure. An explaining job needs a mechanism. Mix them and you get a slide nobody can act on."],
		noteB: ["«Vì sao form giảm» và «có tắt kênh không» là hai việc.", "“Why did forms drop” and “do we turn the channel off” are two jobs."]
	},
	"g-ps-fact": {
		a: ["80 form", "80 forms"],
		b: ["em thấy yếu", "I feel it's weak"],
		noteA: ["Số là cái đếm được, trong một hạt, trong một khoảng thời gian. Ý kiến là một lời chưa có mẫu số.", "A fact is something counted, at a grain, over a time. An opinion is a sentence with no denominator."],
		noteB: ["«Yếu» không cộng được với «80».", "“Weak” cannot be added to “80”."]
	},
	"g-ps-smart": {
		a: ["tăng form", "raise forms"],
		b: ["+20 form, hạn chót", "plus 20 forms, by a date"],
		noteA: ["Một việc SMART nói rõ cái gì, đo bằng gì, với nguồn lực nào, liên quan quyết định nào, và hạn nào.", "A SMART job says what, measured how, with which means, tied to which decision, and by when."],
		noteB: ["«Tăng trưởng» không có hạn là một poster.", "“Growth” with no date is a poster."]
	},
	"g-ps-rank": {
		a: ["làm hạn này", "this window"],
		b: ["để hạn sau", "a later window"],
		noteA: ["Ưu tiên là chọn việc nào được nguồn lực của đúng hạn này. Việc còn lại không bị gọi là kém. Nó chỉ không nằm trong hạn.", "Priority is which job gets this window's means. The rest are not called lesser. They are just not in this window."],
		noteB: ["Đánh số 1 đến 10 mà vẫn làm cả mười là chưa ưu tiên.", "Numbering 1 to 10 and still doing all ten is not a priority."]
	},
	"g-ps-cause": {
		a: ["xoay được", "you can turn it"],
		b: ["chỉ là bối cảnh", "only the setting"],
		noteA: ["Một nguyên nhân đáng đưa vào việc là một thứ, nếu đổi nó, thước đã viết sẽ đổi. Bối cảnh không có nút thì không phải nguyên nhân để làm.", "A cause worth putting in the job is something that, if changed, moves the measure you wrote. A setting with no lever is not a cause you can work."],
		noteB: ["«Thị trường khó» không có nút bấm trong hạn 30/11.", "“The market is hard” has no button inside the 30 Nov window."]
	},
	"g-ps-opt": {
		a: ["cùng một giá", "the same cost"],
		b: ["mỗi cách một giá", "each way has a cost"],
		noteA: ["Một phương án là một việc làm được trong hạn, kèm cái sẽ xảy ra nếu làm, và nếu không làm.", "An option is something you can do in the window, with what happens if you do it, and if you don't."],
		noteB: ["Ba ý «hay» không có nghĩa là làm được cả ba.", "Three “good” ideas does not mean you can do all three."]
	},
	"g-ps-do": {
		a: ["đã làm", "we did it"],
		b: ["đo lại cùng hạt", "remeasure the same grain"],
		noteA: ["Làm là đổi cái đã chọn. Đo là đếm lại đúng công thức của câu SMART, sau hạn, cùng hạt.", "Doing is changing what you chose. Measuring is counting the SMART formula again, after the date, at the same grain."],
		noteB: ["Một buổi họp «xong» không phải một phép đo.", "A meeting called “done” is not a measurement."]
	},
	"g-xl-cell": {
		a: ["số 80", "the number 80"],
		b: ["chữ «80»", "the text “80”"],
		noteA: ["Ô số cộng được. Ô chữ chỉ nối. Công thức tính lại khi ô kia đổi.", "A number cell can be added. A text cell only joins. A formula recomputes when the other cell changes."],
		noteB: ["«80» cộng «20» ra «8020», không ra 100.", "“80” plus “20” becomes “8020”, not 100."]
	},
	"g-xl-lock": {
		a: ["kéo là trượt", "fill and it walks"],
		b: ["$ là giữ", "$ keeps it"],
		noteA: ["Không có $ thì địa chỉ đi theo hướng bạn kéo. $ cột giữ cột. $ hàng giữ hàng.", "With no $, the address follows the direction you fill. A $ on the column locks the column. A $ on the row locks the row."],
		noteB: ["Thuế ở ô B1. Kéo xuống mà không khóa thì dòng 2 lấy B2, thường là trống.", "The rate sits in B1. Fill down without a lock and row 2 reads B2, usually blank."]
	},
	"g-xl-if": {
		a: ["trúng một nhánh", "one branch hits"],
		b: ["ô trống rơi xuống", "a blank falls through"],
		noteA: ["IF hỏi một điều, trả một trong hai. Nhánh sau không được xét nếu nhánh trước đã đúng.", "IF asks one thing and returns one of two. The later branch is not looked at if the earlier one was true."],
		noteB: ["IF(A2<5, «thấp», «cao») gọi ô trống là thấp, vì trống không lớn hơn 5.", "IF(A2<5, “low”, “high”) calls a blank low, because a blank is not greater than 5."]
	},
	"g-xl-keep": {
		a: ["lọc: dòng còn", "filter: the row stays"],
		b: ["xóa: dòng mất", "delete: the row is gone"],
		noteA: ["Filter ẩn các dòng không khớp. Dòng vẫn trong file. Delete bỏ dòng. SUM thường vẫn cộng cả dòng đang ẩn. SUBTOTAL mới biết bỏ qua dòng ẩn.", "Filter hides rows that don't match. The rows stay in the file. Delete removes them. SUM usually still adds hidden rows. SUBTOTAL is what knows to skip hidden rows."],
		noteB: ["Ẩn 50 dòng rồi SUM vẫn ra tổng cũ. Không phải filter hỏng. Là SUM không nhìn filter.", "Hide 50 rows and SUM still shows the old total. The filter is not broken. SUM does not look at the filter."]
	},
	"g-xl-chart": {
		a: ["cột: so nhóm", "bars: compare groups"],
		b: ["đường: theo thời gian", "line: over time"],
		noteA: ["Bar so độ lớn của các nhóm không có thứ thời gian. Line đi theo một trục đã xếp, thường là ngày. Nối các kênh bằng một đường là bịa một độ dốc.", "A bar compares the size of groups that have no time order. A line follows an ordered axis, usually dates. Connecting channels with a line invents a slope."],
		noteB: ["GDN sang TikTok không phải một xu hướng. Đó là hai nhóm.", "GDN to TikTok is not a trend. Those are two groups."]
	},
	"g-xl-pivot": {
		a: ["400 dòng", "400 rows"],
		b: ["không phải 400 khách", "not 400 customers"],
		noteA: ["Pivot cộng, đếm, hoặc lấy trung bình theo nhóm bạn thả vào. Hạt của nguồn vẫn là hạt. Đếm dòng không phải đếm người nếu một người nhiều dòng.", "A pivot sums, counts, or averages by the group you drop in. The source grain stays the grain. A count of rows is not a count of people if one person has many rows."],
		noteB: ["Một khách năm dòng thì Count of rows là 5. Distinct là việc khác, và phải gọi đúng tên.", "One customer with five rows means a count of rows is 5. Distinct is a different job, and you have to name it."]
	},
	"g-xl-look": {
		a: ["không thấy: #N/A", "missing: #N/A"],
		b: ["gần đúng, im", "approximate, quietly"],
		noteA: ["VLOOKUP tìm cột đầu của vùng, trả một cột bên phải. Nhìn sang trái thì nó không làm. Để trống đối số cuối, hoặc ghi TRUE, là tìm gần đúng trên một cột đã sắp.", "VLOOKUP searches the first column of the range and returns a column to the right. It does not look left. Leave the last argument empty, or write TRUE, and it does an approximate match on a sorted column."],
		noteB: ["Mã không có trong bảng, mà cột không sắp và đang để gần đúng, có thể ra nhầm một mã khác. Không phải #N/A.", "A code that is not in the table, with an unsorted column and an approximate match, can return a different code. Not #N/A."]
	},
	"g-py-run": {
		a: ["trên trước", "the top first"],
		b: ["dùng tên chưa có", "use a name too early"],
		noteA: ["Một chương trình là các dòng. Dòng dưới nhìn thấy cái dòng trên đã tạo. Thụt đầu dòng là cấu trúc, không phải trang trí.", "A program is lines. A lower line can see what an upper line created. Indentation is the structure, not decoration."],
		noteB: ["Gọi form trước dòng form = 80 thì máy dừng vì chưa có form.", "Using form before the line form = 80 stops the machine, because form does not exist yet."]
	},
	"g-py-type": {
		a: ["3 + 4 = 7", "3 + 4 = 7"],
		b: ["«3» + «4» = «34»", "“3” + “4” = “34”"],
		noteA: ["Số, số thực, chữ, đúng/sai, và None là các kiểu khác nhau. None là chưa có, không phải 0, không phải chữ rỗng.", "Integer, float, text, true/false, and None are different types. None is “nothing yet”. It is not 0 and not an empty text."],
		noteB: ["Trung bình của cột tên kênh không tồn tại. Đó không phải một số xấu. Đó là nhầm kiểu.", "The mean of a channel-name column does not exist. That is not a bad number. That is the wrong type."]
	},
	"g-py-op": {
		a: ["n = 80", "n = 80"],
		b: ["n == 80", "n == 80"],
		noteA: ["= cất một giá trị vào tên. == hỏi hai bên có bằng nhau không. / là chia ra số thực. // là chia lấy phần nguyên.", "= stores a value in a name. == asks whether the two sides are equal. / divides and gives a float. // divides and keeps the integer part."],
		noteB: ["0.1 + 0.2 không đúng bằng 0.3 trong số thực máy. Đừng dùng == để so hai số thực vừa mới tính.", "0.1 + 0.2 is not exactly 0.3 in machine floats. Don't use == to compare two floats you just computed."]
	},
	"g-py-if": {
		a: ["một nhánh", "one branch"],
		b: ["không phải cả hai", "not both"],
		noteA: ["if hỏi một bool. Đúng thì chạy khối thụt vào. elif là các câu hỏi sau, chỉ khi câu trước sai. else là phần còn lại.", "if asks a bool. True runs the indented block. elif is a later question, only if the earlier one was false. else is whatever remains."],
		noteB: ["Chuỗi khác rỗng là đúng. 0 và chuỗi rỗng là sai. Đừng dựa vào đó để bắt ô trống của một bảng nếu bạn chưa kiểm.", "A non-empty text is true. 0 and an empty text are false. Don't rely on that to catch a blank table cell unless you checked."]
	},
	"g-py-loop": {
		a: ["đi hết đám", "walk the whole set"],
		b: ["while không có cửa ra", "while with no exit"],
		noteA: ["for tên in đám: chạy một lần cho mỗi phần. while điều kiện: chạy lại đến khi điều kiện sai.", "for name in collection: once per item. while condition: again until the condition is false."],
		noteB: ["Xóa phần tử ngay trong danh sách đang for thì máy nhảy cóc. Một phần tử không được thăm.", "Deleting an item inside the list you are walking makes the machine skip. One item is never visited."]
	},
	"g-py-fn": {
		a: ["có return", "there is a return"],
		b: ["ra None", "you get None"],
		noteA: ["def đặt tên. Tham số là đầu vào của lần gọi đó. return gửi một giá trị về chỗ gọi. Hết hàm mà không return thì giá trị là None.", "def names it. Parameters are the inputs of that call. return sends a value back to the caller. If the function ends without return, the value is None."],
		noteB: ["in ra 80 không phải trả về 80. Người gọi nhận None, rồi cộng None thì vỡ.", "Printing 80 is not returning 80. The caller receives None, and adding None breaks."]
	},
	"g-py-str": {
		a: ["bản mới", "a new one"],
		b: ["bản cũ còn", "the old one remains"],
		noteA: ["str là một dãy ký tự có thứ. Cắt [đầu:cuối] lấy từ đầu, không lấy cuối. Phương thức không sửa chữ gốc nếu bạn không giữ kết quả.", "A str is an ordered sequence of characters. A slice [start:end] takes from start and does not take end. A method does not change the original text unless you keep the result."],
		noteB: ["tên.strip() mà không gán lại thì tên vẫn còn dấu cách. Cột vẫn bẩn.", "name.strip() without assigning it back leaves the space on name. The column is still dirty."]
	},
	"g-py-list": {
		a: ["ô đầu là 0", "the first slot is 0"],
		b: ["ô cuối là -1", "the last slot is -1"],
		noteA: ["List giữ thứ tự và cho phép đổi từng ô. Chỉ số 0 là phần tử đầu. -1 là phần tử cuối. Cắt [a:b] là một danh sách mới, không gồm b.", "A list keeps order and lets you change a slot. Index 0 is the first item. -1 is the last. A slice [a:b] is a new list and does not include b."],
		noteB: ["form[1] trên [80, 90, 70] là 90, không phải 80.", "form[1] on [80, 90, 70] is 90, not 80."]
	},
	"g-py-dict": {
		a: ["khóa lạ: lỗi", "unknown key: error"],
		b: ["get: còn thiếu", "get: still missing"],
		noteA: ["Dict là khóa tới giá trị. Mỗi khóa một lần. form[\"tiktok\"] mà chưa có khóa thì KeyError. form.get(\"tiktok\") trả None, hoặc một giá trị bạn đưa sẵn.", "A dict maps a key to a value. Each key once. form[\"tiktok\"] with no such key is a KeyError. form.get(\"tiktok\") returns None, or a value you supplied."],
		noteB: ["Kênh mới xuất hiện giữa chừng là chuyện bình thường. Coi đó là lỗi chương trình thì vòng chết đúng chỗ dữ liệu mới.", "A channel showing up halfway is normal. Treating it as a program error kills the loop exactly where the data is new."]
	},
	"g-py-tup": {
		a: ["không sửa ô", "the slot stays"],
		b: ["list thì sửa được", "a list can be edited"],
		noteA: ["Tuple giống list ở chỗ có thứ và có chỉ số, khác ở chỗ không append, không gán lại từng ô.", "A tuple is like a list in order and index, and unlike it in that you cannot append or assign a slot."],
		noteB: ["(80, \"tiktok\") là một dòng đã đóng. Muốn đổi form thì tạo bộ mới, không sửa bộ cũ.", "(80, \"tiktok\") is a closed row. To change the forms, make a new tuple. Don't edit the old one."]
	},
	"g-py-set": {
		a: ["có trùng", "duplicates stay"],
		b: ["mất trùng, mất thứ", "duplicates go, order goes"],
		noteA: ["Set là tập hợp. Thêm một phần tử đã có thì tập không dài thêm. Kiểm «có trong tập» thì nhanh. Không có chỉ số ô thứ 0 đáng tin.", "A set is a collection of uniques. Adding an item you already have does not make it longer. “Is it in the set” is fast. There is no trustworthy slot 0."],
		noteB: ["Ba dòng cùng một mã khách, bỏ vào set, còn một mã. Không còn biết mã đó đứng đầu hay đứng cuối file.", "Three rows with the same customer code, put into a set, leave one code. You no longer know whether that code was first or last in the file."]
	},
	"g-py-np": {
		a: ["một kiểu", "one type"],
		b: ["lẫn chữ là hỏng", "text mixed in breaks it"],
		noteA: ["ndarray có shape, thường là (số dòng, số cột). Mọi ô cùng một dtype. Trung bình một trục là một phép trên số.", "An ndarray has a shape, usually (rows, columns). Every cell shares one dtype. A mean along an axis is an operation on numbers."],
		noteB: ["Nhét một chữ vào mảng số thì hoặc là lỗi, hoặc cả mảng thành chữ và .mean() không còn là trung bình form.", "Put a text into a numeric array and you either get an error, or the whole array becomes text and .mean() is no longer the mean of forms."]
	},
	"g-py-ser": {
		a: ["canh theo nhãn", "align by label"],
		b: ["canh theo chỗ đứng", "align by position"],
		noteA: ["Mỗi dòng của Series có một index. Cộng hai Series là ghép theo index. Khớp thì cộng. Không khớp thì ra thiếu, không phải cộng nhầm hàng dưới.", "Each row of a Series has an index. Adding two Series joins on the index. A match adds. A miss becomes missing. It does not add the row below by mistake."],
		noteB: ["Tuần của GDN và tuần của TikTok cùng dài 4, nhưng nhãn ngày lệch một hôm. Cộng theo chỗ đứng là cộng nhầm ngày.", "GDN's week and TikTok's week are both length 4, but the date labels are off by a day. Adding by position adds the wrong day."]
	},
	"g-py-frame": {
		a: ["loc gồm cuối", "loc includes the end"],
		b: ["iloc không gồm cuối", "iloc excludes the end"],
		noteA: ["loc[dòng, cột] dùng nhãn. iloc dùng số thứ tự, từ 0. loc[\"a\":\"c\"] gồm c. iloc[0:3] không gồm ô số 3.", "loc[row, column] uses labels. iloc uses positions, from 0. loc[\"a\":\"c\"] includes c. iloc[0:3] does not include position 3."],
		noteB: ["Cắt nhãn từ ngày 1 đến ngày 4 mà dùng iloc theo cảm giác thì dễ mất một ngày hoặc lấy thừa.", "Slicing labels from day 1 through day 4 with iloc, by feel, easily drops a day or takes an extra one."]
	},
	"g-py-plot": {
		a: ["cột đếm", "a count"],
		b: ["một tỷ lệ", "a rate"],
		noteA: ["Bar so các nhóm. Line theo thời gian. Trục ghi đơn vị. Tiêu đề là câu nhận xét, không phải tên loại hình.", "Bars compare groups. A line follows time. The axis states the unit. The title is the claim, not the name of the chart type."],
		noteB: ["200 form và 20 form là độ lớn. 4% và 8% là tỷ lệ. Vẽ 200 cạnh 20 rồi gọi là kênh tốt hơn là chưa chia cho số click.", "200 forms and 20 forms are sizes. 4% and 8% are rates. Drawing 200 next to 20 and calling a channel better has not divided by clicks."]
	},
	"g-py-g1": {
		a: ["bài chấm", "graded work"],
		b: ["mở lại C1", "reopen C1"],
		noteA: ["Một bài nộp kiểm bạn có dùng được ý cũ. Nó không phải một ý thứ hai.", "A submission checks that you can use the old ideas. It is not a second idea."],
		noteB: ["Sổ không chứa đề và không chứa đáp án.", "The notebook does not hold the prompt and does not hold the answer."]
	},
	"g-py-g2": {
		a: ["mở lại bảng", "reopen the table"],
		b: ["học thuộc điểm", "memorize the score"],
		noteA: ["Câu chấm thư viện hỏi shape, loc hay iloc, và hình có đúng câu không.", "A library question asks about shape, loc or iloc, and whether the picture matches the sentence."],
		noteB: ["Nhớ mang máng một hàm không cứu một lát cắt gồm nhầm đầu cuối.", "Half-remembering a function does not save a slice that includes the wrong end."]
	},
	"g-math-perm": {
		a: ["thứ tự tính", "order counts"],
		b: ["chỉ cần bộ", "only the set"],
		noteA: ["P(n, k) là số cách xếp k chỗ từ n thứ, có thứ tự.", "P(n, k) is the number of ways to fill k seats from n things, in order."],
		noteB: ["8 người lấy 3 suất lên sóng: 8×7×6 = 336. Cùng ba người đổi chỗ là một cách khác.", "8 people, 3 seats on air: 8×7×6 = 336. The same three people in another order is another way."]
	},
	"g-math-comb": {
		a: ["336 cách xếp", "336 arrangements"],
		b: ["56 bộ", "56 sets"],
		noteA: ["C(n, k) là số bộ k phần tử lấy từ n, không kể thứ tự.", "C(n, k) is the number of k-sets from n, ignoring order."],
		noteB: ["8 người lấy 3, không phân biệt ai ngồi ghế nào: 336 / 6 = 56. 3! = 6 cách xếp một bộ ba.", "8 people, take 3, and the seats don't matter: 336 / 6 = 56. 3! = 6 ways to order one trio."]
	},
	"g-math-disj": {
		a: ["không cùng lúc", "never together"],
		b: ["vẫn phụ thuộc", "still dependent"],
		noteA: ["Hai việc rời nhau thì không xảy ra cùng lúc. Nếu cả hai đều có xác suất dương, biết việc này xảy ra là biết việc kia không xảy ra. Đó là phụ thuộc.", "Two disjoint events do not happen together. If both have a positive probability, knowing that one happened tells you the other did not. That is dependence."],
		noteB: ["«Gửi form» và «không gửi form» rời nhau. Biết đã gửi thì chắc chắn không nằm ở nhóm không gửi. Chúng không độc lập.", "“Sent the form” and “did not send the form” are disjoint. Knowing it was sent tells you it is not in the other group. They are not independent."]
	},
	"g-math-kind": {
		a: ["đếm cách đều", "count equal ways"],
		b: ["một tuần 3%", "one week at 3%"],
		noteA: ["Cổ điển là số cách thuận trên số cách coi như đều. Tần suất là tỷ lệ sau nhiều lần lặp. Chủ quan là mức bạn sẵn sàng đánh đổi, khi không có cách đều và cũng chưa có nhiều lần lặp.", "Classical is favorable ways over ways you treat as equal. Frequency is a share after many repeats. Subjective is the stake you would take, when there are no equal ways and not many repeats either."],
		noteB: ["12 form trên 400 phiên là một tần suất của mẫu đó. Không phải «12 cách trên 400 cách đều nhau» nếu các phiên không được xây như những cách đều.", "12 forms out of 400 sessions is a frequency of that sample. It is not “12 ways out of 400 equal ways” unless the sessions were built as equal ways."]
	},
	"g-ds-pct": {
		a: ["chỗ trong dãy", "a place in the list"],
		b: ["90% của số max", "90% of the max"],
		noteA: ["Phân vị thứ p là một giá trị mà khoảng p phần trăm các quan sát nằm không cao hơn nó, theo đúng quy ước cắt bạn đã chọn.", "The p-th percentile is a value such that about p percent of the observations sit at or below it, under the cut rule you chose."],
		noteB: ["Dãy 2, 4, 4, 4, 5, 5, 7, 9. Số lớn nhất là 9. 90% của 9 là 8,1. Phân vị 90 không phải 8,1. Nó là một chỗ gần cuối dãy đã sắp.", "The list 2, 4, 4, 4, 5, 5, 7, 9. The maximum is 9. 90% of 9 is 8.1. The 90th percentile is not 8.1. It is a place near the end of the sorted list."]
	},
	"g-ds-range": {
		a: ["nhìn hai đầu", "looks at the ends"],
		b: ["cả đám ở giữa", "the middle is ignored"],
		noteA: ["Range = giá trị lớn nhất trừ giá trị nhỏ nhất. Mọi số ở giữa không đổi range.", "Range = the largest value minus the smallest. Every number in the middle leaves the range unchanged."],
		noteB: ["Dãy 2, 4, 4, 4, 5, 5, 7, 9 có range 7. Đổi các số 4 thành 5, range vẫn 7.", "The list 2, 4, 4, 4, 5, 5, 7, 9 has range 7. Change the 4s into 5s and the range is still 7."]
	},
	"g-ds-mad": {
		a: ["chia n, không căn", "divide by n, no root"],
		b: ["phương sai thì bình phương", "variance squares"],
		noteA: ["MAD ở đây là trung bình của |x − trung bình|. Chia cho n. Không lấy căn. Không chia n−1, trừ khi bạn nói một định nghĩa khác.", "MAD here is the mean of |x − mean|. Divide by n. Don't take a root. Don't divide by n−1 unless you name a different definition."],
		noteB: ["Dãy 2, 4, 4, 4, 5, 5, 7, 9. Trung bình 5. Độ lệch tuyệt đối 3, 1, 1, 1, 0, 0, 2, 4. Tổng 12. 12/8 = 1,5.", "The list 2, 4, 4, 4, 5, 5, 7, 9. The mean is 5. Absolute gaps 3, 1, 1, 1, 0, 0, 2, 4. Sum 12. 12/8 = 1.5."]
	},
	"g-sql-like": {
		a: ["% là mọi chữ", "% is any text"],
		b: ["regex là luật khác", "a regex is another rule"],
		noteA: ["LIKE dùng % cho một cụm bất kỳ và _ cho một ký tự. REGEXP hay RLIKE là biểu thức chính quy, tùy máy, không cùng một thư viện với LIKE.", "LIKE uses % for any stretch and _ for one character. REGEXP or RLIKE is a regular expression, depending on the engine, and it is not the same library as LIKE."],
		noteB: ["WHERE kênh LIKE '%tok' khớp tiktok. Nó cũng khớp một chữ rác kết thúc bằng tok. Không có mỏ neo thì đừng tưởng đó là cả ô.", "WHERE channel LIKE '%tok' matches tiktok. It also matches junk that ends in tok. With no anchor, don't treat it as the whole cell."]
	},
	"g-sql-date": {
		a: ["kiểu ngày", "a date type"],
		b: ["chữ cắt tay", "text sliced by hand"],
		noteA: ["Lưu ngày bằng kiểu ngày. YEAR, DATE, DATEDIFF làm việc lịch. Cắt chuỗi là làm việc chữ, và lệch khi format đổi.", "Store a date as a date type. YEAR, DATE, DATEDIFF do calendar work. Slicing a string does text work, and it breaks when the format changes."],
		noteB: ["Thiếu một ngày trong bảng là không có dòng. Không phải dòng đó bằng 0 form, trừ khi bạn đã tạo dòng 0.", "A missing day in the table is a missing row. It is not a row of 0 forms, unless you created that 0 row."]
	},
	"g-sql-nest": {
		a: ["chạy một lần", "runs once"],
		b: ["chạy từng dòng ngoài", "runs per outer row"],
		noteA: ["Câu con không tương quan chạy độc lập. Câu tương quan chạy lại theo từng dòng của câu ngoài, vì nó dùng cột của dòng đó.", "An uncorrelated subquery runs on its own. A correlated one runs again for each outer row, because it uses that row's columns."],
		noteB: ["«Khách có form cao hơn trung bình kênh của chính họ» là tương quan. Nó không tự nhanh hơn một lần JOIN với bảng trung bình.", "“Customers above the mean of their own channel” is correlated. It is not automatically faster than a JOIN to a table of means."]
	},
	"g-sql-nwin": {
		a: ["cùng một cửa", "the same window"],
		b: ["một phép mới", "a new operation"],
		noteA: ["WINDOW w AS (PARTITION BY ... ORDER BY ...) rồi OVER w dùng lại đúng cửa đó.", "WINDOW w AS (PARTITION BY ... ORDER BY ...) and then OVER w reuses that exact window."],
		noteB: ["Hai hàm dùng chung một cái tên cửa sổ thì cùng một cách chia nhóm và cùng một khung. Không phải một hàm được «ưu tiên».", "Two functions that share a window name share the partition and the frame. One function is not “preferred”."]
	},
	"g-sql-proc": {
		a: ["một câu đọc được", "a query you can read"],
		b: ["một kịch bản giấu", "a hidden script"],
		noteA: ["Stored procedure là một chương trình đã lưu, có thể có nhiều câu, có thể ghi bảng. Hàm (UDF) trả một giá trị và đáng lẽ không giấu một lần quét bảng.", "A stored procedure is a saved program. It can hold many statements and it can write tables. A function (UDF) returns a value and should not hide a table scan."],
		noteB: ["Một hàm bọc quanh cột trong WHERE có thể chạy từng dòng và bỏ mục lục. Người đọc chỉ thấy tên hàm.", "A function wrapped around a column in WHERE can run per row and skip the index. The reader only sees the function's name."]
	},
	"g-sql-cur": {
		a: ["cả tập một lần", "the whole set at once"],
		b: ["từng dòng", "one row at a time"],
		noteA: ["Cursor mở một kết quả rồi lần từng dòng trong chương trình. Set-based là một câu cho cả đám.", "A cursor opens a result and then steps through it in a program. Set-based is one statement for the whole group."],
		noteB: ["Cộng form theo kênh bằng một vòng FETCH là viết lại GROUP BY, chậm hơn, và dễ quên CLOSE.", "Summing forms by channel with a FETCH loop is a rewrite of GROUP BY, slower, and easy to forget to CLOSE."]
	},
	"g-ens-oob": {
		a: ["dòng bị bỏ", "a row left out"],
		b: ["không phải tháng sau", "not next month"],
		noteA: ["Out-of-bag là các dòng không được rút vào túi của một cây. Chúng có thể chấm cây đó. Chúng vẫn thuộc tập học, không phải một tháng tương lai.", "Out-of-bag means the rows not drawn into a tree's bag. They can score that tree. They still belong to the learning set. They are not a future month."],
		noteB: ["Nhân bản người hiếm trước khi chia tập thì một bản sao có thể nằm trong túi và bản sao kia bị gọi là «ngoài túi». Điểm đẹp vì cùng một người.", "Duplicate the rare person before the split and one copy can sit in the bag while the other is called “out of bag”. The score looks good because it is the same person."]
	},
	"g-imb-smote": {
		a: ["một khách thật", "a real customer"],
		b: ["một điểm nằm giữa", "a point in between"],
		noteA: ["SMOTE nội suy giữa các dòng thiểu số trong không gian các cột số. Điểm mới không phải một người đã mua.", "SMOTE interpolates between minority rows in the space of the numeric columns. The new point is not a person who bought."],
		noteB: ["Làm SMOTE trước khi chia tập thì một điểm nằm giữa có thể đứng một chân ở tập học và một chân ở tập chấm. Đó là rò.", "Run SMOTE before the split and a point in between can stand with one foot in the learning set and one foot in the scoring set. That is leakage."]
	},
	"g-tb-why": {
		a: ["một câu", "one question"],
		b: ["một trang trí", "a decoration"],
		noteA: ["Kéo field mà chưa có câu thì ra một hình không ai quyết được gì.", "Drag a field with no question and you get a picture nobody can decide from."],
		noteB: ["Màu, logo, và một bản đồ của những thứ không phải chỗ không trả lời ngân sách tuần sau.", "Color, a logo, and a map of things that are not places do not answer next week's budget."]
	},
	"g-tb-bar": {
		a: ["cột, không thứ thời gian", "bars, no time order"],
		b: ["đường, theo ngày", "a line, by date"],
		noteA: ["Bar so độ lớn. Line đi theo thứ tự, thường là ngày. Nối các hạng mục không có thứ tự là bịa độ dốc.", "Bars compare size. A line follows an order, usually dates. Connecting categories that have no order invents a slope."],
		noteB: ["Từ GDN sang TikTok không có «tuần tiếp theo». Một đường giữa hai tên là một dốc giả.", "There is no “next week” from GDN to TikTok. A line between the two names is a fake slope."]
	},
	"g-tb-box": {
		a: ["một hộp, nhiều dòng", "one box, many rows"],
		b: ["bản đồ chỗ giả", "a map of fake places"],
		noteA: ["Box plot cho thấy trung vị và phần giữa, không phải một khách. Map chỉ hợp khi mỗi điểm là một tọa độ hoặc một vùng thật.", "A box plot shows a median and the middle, not one customer. A map only fits when each mark is a real coordinate or a real region."],
		noteB: ["Vẽ ba kênh thành ba nước trên bản đồ là gán một chỗ không có trong dữ liệu.", "Drawing three channels as three countries on a map assigns a place that is not in the data."]
	},
	"g-tb-part": {
		a: ["một tổng", "one whole"],
		b: ["hai hình tròn", "two pies"],
		noteA: ["Pie và treemap cần các phần cùng một tổng, cộng lại thành tổng đó. Nhiều lát thì mắt không so được. Hãy dùng cột.", "A pie and a treemap need shares of one whole that add back to that whole. Many slices and the eye cannot compare. Use bars."],
		noteB: ["Form GDN cộng form TikTok cộng form khác phải bằng form của đúng tuần đó. Thiếu một kênh mà vẫn vẽ tròn là một tổng giả.", "GDN forms plus TikTok forms plus the rest must equal that week's forms. Leave out a channel and the pie is a fake whole."]
	},
	"g-tb-join": {
		a: ["một khách một dòng", "one customer, one row"],
		b: ["một khách nhiều dòng", "one customer, many rows"],
		noteA: ["Join trong Tableau cùng luật với SQL. Khóa không độc nhất thì một dòng bên trái thành nhiều dòng.", "A join in Tableau follows the same law as SQL. A key that is not unique turns one left-hand row into many."],
		noteB: ["Một khách ba lần ghé, nối với một bảng quà một-nhiều, rồi đếm dòng, ra nhiều hơn số khách.", "One customer with three visits, joined to a one-to-many gift table, then a count of rows, comes out larger than the number of customers."]
	},
	"g-tb-calc": {
		a: ["công thức", "a formula"],
		b: ["một lần đo mới", "a new measurement"],
		noteA: ["Calculated field là công thức trên dòng hoặc trên một phép cộng. Nó không tạo dữ liệu ngoài file.", "A calculated field is a formula on the row or on an aggregate. It does not create data outside the file."],
		noteB: ["form / click viết trong Tableau vẫn là form và click đã có. Click bằng 0 thì công thức vỡ, không phải tỷ lệ 0.", "form / click written in Tableau is still the forms and clicks you had. Clicks of 0 break the formula. It is not a rate of 0."]
	},
	"g-tb-dual": {
		a: ["một quyết định", "one decision"],
		b: ["hai thước một trục", "two rulers, one axis"],
		noteA: ["Dashboard là một trang cho một quyết định. Dual axis là hai measure trên một hình. Không ghi hai đơn vị thì mắt đọc một dốc chung giả.", "A dashboard is one page for one decision. A dual axis is two measures on one picture. Without both units labeled, the eye reads one fake shared slope."],
		noteB: ["Form và tiền trên một đường, trục do máy chọn, một tuần tiền tăng nhẹ trông như form gấp đôi.", "Forms and money on one line, with an axis the machine picked, make a small rise in money look like forms doubled."]
	},
	"g-xa-text": {
		a: ["vẫn là chữ", "still text"],
		b: ["chưa phải số", "not a number yet"],
		noteA: ["LEFT, RIGHT, MID, TRIM trả chữ. Muốn số thì bọc một lần đổi kiểu có chủ đích.", "LEFT, RIGHT, MID, TRIM return text. If you want a number, wrap an explicit cast."],
		noteB: ["LEFT của «80 form» lấy «80» vẫn là chữ. Cộng cột đó ra 0 hoặc ra nối, tùy ô.", "LEFT of “80 form” takes “80” and it is still text. Adding that column gives 0 or joins, depending on the cell."]
	},
	"g-xa-count": {
		a: ["COUNT: chỉ số", "COUNT: numbers only"],
		b: ["COUNTA: ô có nội dung", "COUNTA: cells with something"],
		noteA: ["COUNT đếm ô số. COUNTA đếm ô không rỗng, kể cả chữ. COUNTBLANK đếm ô trống.", "COUNT counts numeric cells. COUNTA counts non-empty cells, including text. COUNTBLANK counts empty cells."],
		noteB: ["Cột tên 100 khách, COUNT ra 0. Không phải hết khách. Là đếm nhầm hàm.", "A column of 100 customer names, COUNT returns 0. The customers are not gone. The function was the wrong count."]
	},
	"g-xa-match": {
		a: ["nhìn sang trái", "look left"],
		b: ["VLOOKUP không chịu", "VLOOKUP will not"],
		noteA: ["MATCH trả vị trí của khóa. INDEX lấy ô tại vị trí đó, ở cột bạn chỉ. Cột đó có thể nằm bên trái.", "MATCH returns the position of the key. INDEX takes the cell at that position, in the column you point at. That column can sit to the left."],
		noteB: ["Tên kênh nằm cột A, mã nằm cột B. VLOOKUP theo mã không lấy được tên, vì tên ở bên trái. INDEX/MATCH lấy được.", "Channel name in column A, code in column B. VLOOKUP by code cannot fetch the name, because the name is to the left. INDEX/MATCH can."]
	},
	"g-xa-what": {
		a: ["đổi đầu vào", "change the input"],
		b: ["không phải tuần sau", "not next week"],
		noteA: ["Data table và scenario đổi các ô đầu vào của một công thức bạn đã viết. Chúng không học từ dữ liệu mới.", "A data table and a scenario change input cells of a formula you already wrote. They do not learn from new data."],
		noteB: ["Đổi giá từ 100 thành 120, lãi trên file đổi theo công thức. Tuần sau giá có thể không phải 120.", "Change the price from 100 to 120 and the profit on the file moves by the formula. Next week's price might not be 120."]
	},
	"g-xa-macro": {
		a: ["lặp các cú bấm", "repeats the clicks"],
		b: ["không chọn hộ", "it does not choose"],
		noteA: ["Macro chạy lại một chuỗi việc đã ghi. Đổi cấu trúc file là chuỗi đó bấm nhầm chỗ.", "A macro reruns a recorded sequence. Change the file's structure and the sequence clicks the wrong place."],
		noteB: ["Ghi macro lúc đang lọc nhầm một kênh thì lần sau nó lọc nhầm tiếp, rất đều.", "Record a macro while the wrong channel is filtered and next time it filters the wrong one, very consistently."]
	},
	"g-pb-model": {
		a: ["sai quan hệ", "a bad relationship"],
		b: ["hình vẫn đẹp", "the visual still looks fine"],
		noteA: ["Model gồm bảng, khóa, và chiều lọc. Visual hỏi model. Hỏi sai model ra số đẹp và sai.", "The model is tables, keys, and filter direction. A visual asks the model. Ask a wrong model and you get a number that is pretty and wrong."],
		noteB: ["Một khách nối một-nhiều với đơn, rồi một card đếm dòng đơn, không phải đếm khách. Card vẫn tròn trịa.", "One customer joined one-to-many to orders, then a card that counts order rows, is not a count of customers. The card still looks tidy."]
	},
	"g-pb-pq": {
		a: ["một công thức", "a recipe"],
		b: ["một cú bấm một lần", "a one-time click"],
		noteA: ["Mỗi bước biến bảng. Làm mới thì các bước chạy lại trên nguồn lúc đó. Một cột đã Remove là hết trong model.", "Each step changes the table. On refresh the steps run again on the source as it is then. A column you removed is gone from the model."],
		noteB: ["Xóa cột chi phí để «đỡ rối» thì mọi measure về chi phí sau này không có cột để mà rối.", "Remove the cost column to “reduce clutter” and every later cost measure has no column left to be cluttered by."]
	},
	"g-pb-grain": {
		a: ["một dòng một đơn", "one row, one order"],
		b: ["không phải một khách", "not one customer"],
		noteA: ["Grain là ý nghĩa của một dòng trong bảng đang dùng. Mọi count và mọi sum ngồi trên hạt đó.", "Grain is what one row means in the table you are using. Every count and every sum sits on that grain."],
		noteB: ["Bảng đơn: một dòng một dòng hàng. Đếm dòng là đếm dòng hàng, không phải đếm đơn, nếu một đơn có nhiều dòng.", "An order-line table: one row is one line. A count of rows counts lines, not orders, if one order has many lines."]
	},
	"g-pb-dax": {
		a: ["lưu từng dòng", "stored per row"],
		b: ["tính lại theo lọc", "recomputed under the filter"],
		noteA: ["Calculated column được tính lúc làm mới và nằm trong từng dòng. Measure được tính khi hình hỏi, trong filter context lúc đó.", "A calculated column is computed on refresh and sits on each row. A measure is computed when a visual asks, in the filter context of that moment."],
		noteB: ["Một cột tỷ lệ = form/click của từng dòng không đổi khi bạn lọc một tuần. Measure SUM(form)/SUM(click) đổi theo tuần đang lọc.", "A column rate = form/click of each row does not change when you filter to one week. The measure SUM(form)/SUM(click) changes with the week that is filtered."]
	},
	"g-pb-page": {
		a: ["một quyết định", "one decision"],
		b: ["mười slicer", "ten slicers"],
		noteA: ["Một trang Power BI nên để một người làm một việc. Thêm slicer là thêm một cách để họ tự làm lạc câu.", "A Power BI page should let one person do one job. Another slicer is another way for them to wander off the sentence."],
		noteB: ["Trang «tổng hợp» có tám hình và sáu slicer không ai nhớ câu hỏi gốc.", "A “summary” page with eight visuals and six slicers means nobody remembers the original question."]
	},
	"g-pb-rls": {
		a: ["slicer: tự tắt được", "a slicer: they can turn it off"],
		b: ["RLS: không tắt được", "RLS: they cannot"],
		noteA: ["Row-level security lọc các dòng một người được phép thấy, theo danh tính của người đó. Nó không phải một bộ lọc trên trang.", "Row-level security filters the rows a person is allowed to see, by that person's identity. It is not a filter on the page."],
		noteB: ["Một slicer để sẵn kênh TikTok vẫn để người đó chọn GDN. RLS thật thì các dòng GDN không có trong mô hình của người đó.", "A slicer parked on TikTok still lets that person pick GDN. Real RLS means the GDN rows are not in that person's model."]
	},
	"g-pb-refresh": {
		a: ["kéo lại nguồn", "pull the source again"],
		b: ["không lưu hôm qua", "it does not store yesterday"],
		noteA: ["Scheduled refresh chạy Power Query lại. Thành công thì model đổi theo nguồn. Thất bại thì model cũ còn đó, rất im.", "A scheduled refresh reruns Power Query. If it succeeds, the model follows the source. If it fails, the old model stays, very quietly."],
		noteB: ["Lịch 6 giờ sáng lỗi từ thứ Hai. Thứ Năm bạn vẫn thấy số Chủ nhật. Không có một measure nào «nhớ» là số đã cũ.", "The 6am schedule has failed since Monday. On Thursday you still see Sunday's number. No measure “remembers” that the number is old."]
	},
	"g-fw-5why": {
		a: ["dừng ở nút xoay", "stop at a lever"],
		b: ["dừng ở «do người»", "stop at “a person”"],
		noteA: ["Mỗi vì sao phải là một cơ chế, không phải một tính từ. Dừng khi câu tiếp theo là một thay đổi trong quy trình mà hạn này làm được.", "Each why has to be a mechanism, not an adjective. Stop when the next sentence is a process change this window can make."],
		noteB: ["«Nhân viên quên» là một chỗ dừng quá sớm. Câu sau có thể là «không có checklist trước khi gửi». Cái đó xoay được.", "“The staff forgot” is too early a stop. The next sentence might be “there is no checklist before sending”. That one you can turn."]
	},
	"g-fw-spin": {
		a: ["bốn kiểu hỏi", "four kinds of question"],
		b: ["một kịch bản gài", "a script that traps"],
		noteA: ["Situation hỏi việc đang chạy thế nào. Problem hỏi chỗ đang kẹt. Implication hỏi kẹt đó kéo theo gì. Need-payoff hỏi nếu hết kẹt thì cái gì khá lên.", "Situation asks how the job runs now. Problem asks where it is stuck. Implication asks what the stuck part drags with it. Need-payoff asks what gets better if it is unstuck."],
		noteB: ["Hỏi xoáy cho đối phương phải nói «có» không phải SPIN. Đó là một mánh. SPIN không chứng minh một giải pháp.", "Pushing questions until the other person must say “yes” is not SPIN. That is a trick. SPIN does not prove a solution."]
	},
	"g-fw-ask": {
		a: ["còn đang hỏi", "still asking"],
		b: ["đã kết luận", "already a verdict"],
		noteA: ["Danh sách câu hỏi là một dụng cụ. Câu trả lời mới là nguyên liệu. Nguyên liệu chưa kiểm thì chưa thành khuyến nghị.", "A list of questions is a tool. The answers are the material. Unchecked material is not a recommendation yet."],
		noteB: ["Năm câu hỏi hay không bằng một số đo lại được.", "Five good questions are not equal to one number you can remeasure."]
	},
	"g-fw-bmc": {
		a: ["chín giả thuyết", "nine hypotheses"],
		b: ["chín sự thật", "nine facts"],
		noteA: ["Business model canvas có chín ô: phân khúc, giá trị, kênh, quan hệ khách, dòng doanh thu, nguồn lực, hoạt động chính, đối tác, cơ cấu chi phí.", "The business model canvas has nine boxes: segments, value, channels, customer relationships, revenue streams, resources, key activities, partners, cost structure."],
		noteB: ["Viết «khách trẻ thích trải nghiệm» trong ô phân khúc là một giả thuyết. Không có một cuộc đếm nào ở trong cây bút.", "Writing “young customers like experiences” in the segment box is a hypothesis. There is no count inside the pen."]
	},
	"g-fw-mece": {
		a: ["chồng nhau", "they overlap"],
		b: ["không chồng, đủ", "no overlap, and complete"],
		noteA: ["Mutually exclusive: một thứ chỉ nằm một nhánh. Collectively exhaustive: mọi thứ câu hỏi cần đều có nhánh.", "Mutually exclusive: a thing sits in only one branch. Collectively exhaustive: everything the question needs has a branch."],
		noteB: ["Chia form thành «kênh mới» và «TikTok» thì TikTok mới bị đếm hai lần. Quên kênh cũ thì bị sót.", "Split forms into “new channels” and “TikTok” and a new TikTok is counted twice. Forget the old channels and you have a gap."]
	},
	"g-fw-7p": {
		a: ["bảy mục kiểm", "seven checks"],
		b: ["bảy hạng", "seven ranks"],
		noteA: ["Product, price, place, promotion, people, process, physical evidence. Bảy mục. Không có thứ tự ai thắng.", "Product, price, place, promotion, people, process, physical evidence. Seven items. No order of who wins."],
		noteB: ["Cho promotion 5 điểm và process 2 điểm là một cuộc chấm không có công thức. Hai mục không cùng đơn vị.", "Giving promotion 5 points and process 2 points is a scoring with no formula. The two items do not share a unit."]
	},
	"g-fw-5c": {
		a: ["năm phía", "five sides"],
		b: ["năm tính từ", "five adjectives"],
		noteA: ["Company, customers, competitors, collaborators, climate. Năm phía. Mỗi phía một số hoặc một câu kiểm được.", "Company, customers, competitors, collaborators, climate. Five sides. Each side gets a number or a sentence you can check."],
		noteB: ["«Đối thủ mạnh» là một tính từ. «Đối thủ đang lấy cùng một từ khóa với giá thầu cao hơn» là một câu kiểm được.", "“The competitor is strong” is an adjective. “The competitor is buying the same keyword at a higher bid” is a sentence you can check."]
	},
	"g-st-shape": {
		a: ["có chỗ kẹt", "there is a stuck place"],
		b: ["chỉ có một hình", "only a picture"],
		noteA: ["Context là cái đang bình thường. Conflict là chỗ không còn bình thường. Resolution là việc bạn muốn được chốt.", "Context is what was normal. Conflict is where it is no longer normal. Resolution is the decision you want closed."],
		noteB: ["Một cột form không có chỗ kẹt thì người nghe không biết phải làm gì với cột đó.", "A bar of forms with no stuck place means the listener does not know what to do with the bar."]
	},
	"g-st-who": {
		a: ["năm phút, một việc", "five minutes, one job"],
		b: ["cả sổ tay", "the whole notebook"],
		noteA: ["Audience là người trong phòng: họ quyết định được việc gì, họ đã tin gì, họ có bao lâu.", "The audience is the person in the room: what they are allowed to decide, what they already believe, and how long they have."],
		noteB: ["Một founder có năm phút không cần thấy từng bước làm sạch. Một analyst cần, nếu việc của họ là kiểm hạt.", "A founder with five minutes does not need every cleaning step. An analyst does, if their job is to check the grain."]
	},
	"g-st-insight": {
		a: ["xu hướng", "a trend"],
		b: ["không phải hình tròn", "not a pie"],
		noteA: ["Trend là theo thời gian. Difference là giữa các nhóm. Share là phần của một tổng. Outlier là một điểm tách đám. Together là hai thứ đi cùng nhau, chưa phải nguyên nhân.", "Trend is over time. Difference is between groups. Share is part of one whole. Outlier is a point apart from the group. Together means two things move together, which is not yet a cause."],
		noteB: ["«Form và chi cùng tăng» là together. Nó không phải «chi gây ra form». C2 đã nói đi cùng không phải nguyên nhân.", "“Forms and spend rise together” is together. It is not “spend causes forms”. C2 already said moving together is not a cause."]
	},
	"g-st-pyramid": {
		a: ["câu chốt trước", "the decision first"],
		b: ["để đến slide cuối", "saved for the last slide"],
		noteA: ["Kim tự tháp: câu trả lời ở đỉnh, dưới là các lý do cùng một tầng, dưới nữa là bằng chứng của từng lý do.", "The pyramid: the answer at the top, the reasons on one level under it, the evidence for each reason under that."],
		noteB: ["Mười phút dẫn dắt rồi mới nói «nên cắt kênh» là mười phút người nghe không biết mình đang đi đâu.", "Ten minutes of buildup before “we should cut the channel” is ten minutes the listener does not know where they are going."]
	},
	"g-st-one": {
		a: ["một thông điệp", "one message"],
		b: ["hai tiêu đề", "two headlines"],
		noteA: ["Một trang một thông điệp. Nếu bạn cần chữ «và» để nối hai quyết định, đó là hai trang.", "One page, one message. If you need the word “and” to join two decisions, that is two pages."],
		noteB: ["«Cắt kênh này và làm lại thương hiệu» là hai việc. Một slide làm cả hai thì không việc nào được chốt.", "“Cut this channel and redo the brand” is two jobs. One slide that does both closes neither."]
	},
	"g-st-board": {
		a: ["thứ tự câu", "the order of sentences"],
		b: ["một bảng màu", "a color palette"],
		noteA: ["Mỗi khung là một câu, một hình, và việc người nghe làm với khung đó. Đổi thứ tự là đổi lập luận.", "Each frame is one sentence, one picture, and what the listener does with that frame. Change the order and you change the argument."],
		noteB: ["Chọn xong màu mà chưa có thứ tự các câu thì chưa có chuyện. Chỉ có một tập slide.", "Pick the colors with no order of sentences and you have no story. You have a pile of slides."]
	},
	"g-or-obj": {
		a: ["cái cần cực đại", "what you maximize"],
		b: ["cái bạn được chọn", "what you are allowed to choose"],
		noteA: ["Objective là hàm cần cực đại hoặc cực tiểu. Decision variable là những số bạn được chọn. Chúng không phải cùng một ô.", "The objective is the function to maximize or minimize. Decision variables are the numbers you are allowed to choose. They are not the same cell."],
		noteB: ["«Tối đa doanh thu» mà ô doanh thu lại là ô bạn gõ tay thì bạn đang gõ kết quả, không đang chọn.", "“Maximize revenue” while the revenue cell is a cell you type means you are typing the result, not choosing."]
	},
	"g-or-con": {
		a: ["tiêu một lần", "spent once"],
		b: ["cộng vượt", "added past the limit"],
		noteA: ["Constraint là một bất đẳng thức trên các biến. Tổng sử dụng không vượt quá lượng có, trừ khi bạn viết một giới hạn khác và chịu nó.", "A constraint is an inequality on the variables. Total use does not exceed what you have, unless you wrote a different limit and you accept it."],
		noteB: ["Ba kênh mỗi kênh xin cả ngân sách tháng thì không phải ba phương án cùng khả thi. Đó là một giới hạn bị viết thiếu.", "Three channels each asking for the whole month's budget are not three feasible options together. That is a constraint you forgot to write."]
	},
	"g-or-sens": {
		a: ["còn đúng góc này", "still this corner"],
		b: ["đã sang góc khác", "already another corner"],
		noteA: ["Shadow price là mức mục tiêu đổi khi nới một ràng buộc một đơn vị, trong khoảng góc hiện tại còn là góc tối ưu.", "The shadow price is how the objective moves when you loosen one constraint by one unit, inside the range where the current corner stays optimal."],
		noteB: ["Nới ngân sách thêm một ít mà góc các kênh vẫn vậy thì giá bóng dùng được. Nới đến mức một kênh bị tắt hẳn thì giá bóng cũ hết hạn.", "Loosen the budget a little and the channel corner stays: the shadow price still applies. Loosen it until a channel turns off entirely and the old shadow price has expired."]
	},
	"g-or-solv": {
		a: ["tìm một góc", "finds a corner"],
		b: ["dừng ở một lõm", "stops in a dent"],
		noteA: ["Với ràng buộc tuyến tính và mục tiêu tuyến tính, phương án tối ưu nằm ở một đỉnh. Phi tuyến có thể có nhiều chỗ lõm. Solver dừng ở một chỗ không có nghĩa hết chỗ khác tốt hơn.", "With linear constraints and a linear objective, an optimum sits at a vertex. A nonlinear problem can have many dents. A solver stopping does not mean there is no better place."],
		noteB: ["Một hàm lãi cong theo giá. Solver từ một giá xuất phát có thể dừng ở một đỉnh cục bộ. Đổi điểm xuất phát ra một số khác.", "A profit function curved in price. A solver from one starting price can stop at a local peak. Start from another price and you can get another number."]
	},
	"g-or-sheet": {
		a: ["ô được trỏ", "a cell that is pointed at"],
		b: ["một ghi chú", "a note"],
		noteA: ["Ô mục tiêu, các ô biến, từng dòng giới hạn: solver không đọc phần còn lại của sheet.", "The objective cell, the variable cells, each constraint row: the solver does not read the rest of the sheet."],
		noteB: ["Bạn ghi «tối đa 40 suất» ở một ô chữ bên cạnh. Không đưa ô đó vào constraints thì 40 không tồn tại với solver.", "You type “at most 40 slots” in a text cell nearby. If that cell is not in the constraints, 40 does not exist for the solver."]
	},
	"g-ga-next": {
		a: ["chữ kế tiếp", "the next text"],
		b: ["không tra bảng", "not a table lookup"],
		noteA: ["Mô hình chấm các mảnh chữ có thể đứng tiếp theo. Nó không mở file giá của bạn trừ khi đoạn chữ đó đang nằm trong prompt.", "The model scores pieces of text that might come next. It does not open your price file unless that text is already in the prompt."],
		noteB: ["Hỏi «giá gói tháng này» mà không đưa bảng giá thì câu trả lời là một câu hợp lệ, không phải một dòng trong bảng.", "Ask “this month's package price” without giving the price table and the answer is a grammatical sentence, not a row in the table."]
	},
	"g-ga-vs": {
		a: ["đoán một cột", "predict a column"],
		b: ["nối chữ", "continue text"],
		noteA: ["Một model churn trả một xác suất trên một dòng khách. Một mô hình sinh trả một đoạn chữ. Thước của hai việc khác nhau.", "A churn model returns a probability on one customer row. A generative model returns a piece of text. The measures of the two jobs differ."],
		noteB: ["Accuracy của một lớp hiếm không phải thước của một đoạn chat. Một đoạn chat hay không phải một AUC.", "Accuracy on a rare class is not the measure of a chat paragraph. A pleasant paragraph is not an AUC."]
	},
	"g-ga-stack": {
		a: ["đổi dữ liệu đưa vào", "change the data you pass"],
		b: ["đổi trọng số", "change the weights"],
		noteA: ["Model là trọng số. Data là cái bạn đưa vào lần gọi này. Product là việc người dùng làm với câu trả lời.", "The model is the weights. The data is what you pass on this call. The product is what the user does with the answer."],
		noteB: ["Sửa một câu trong prompt là sửa data của lần gọi. Không phải fine-tune. Không phải một sản phẩm mới.", "Editing a sentence in the prompt edits the data of that call. It is not a fine-tune. It is not a new product."]
	},
	"g-ga-use": {
		a: ["có giá của một lần sai", "there is a cost of being wrong"],
		b: ["một demo", "a demo"],
		noteA: ["Một việc GenAI cần một người chịu, một đầu ra, và một cách xử lý khi đầu ra sai. Demo không có ba thứ đó.", "A GenAI job needs an owner, an output, and a way to handle a wrong output. A demo has none of the three."],
		noteB: ["Một đoạn chat viết được bài quảng cáo. Đưa nhầm giá vào bài đó thì cái giá là tiền và lòng tin, không phải «chữ chưa hay».", "A chat can write an ad. Put the wrong price in that ad and the cost is money and trust, not “the prose is not nice yet”."]
	},
	"g-ga-chat": {
		a: ["chỉ thấy message này", "it only sees these messages"],
		b: ["không nhớ hộ", "it does not remember for you"],
		noteA: ["Một lần gọi nhận một danh sách message: system, user, và có thể là các lượt trước bạn tự gửi lại. Không gửi lại thì không còn.", "One call receives a list of messages: system, user, and maybe earlier turns you send again yourself. If you don't send them again, they are gone."],
		noteB: ["Hôm qua bạn nói giá trong một phiên khác. Hôm nay một request mới không kèm câu đó thì mô hình không «nhớ giá hôm qua».", "Yesterday you said a price in another session. Today a new request without that sentence means the model does not “remember yesterday's price”."]
	},
	"g-ga-temp": {
		a: ["đa dạng hơn", "more variety"],
		b: ["không đúng hơn", "not more true"],
		noteA: ["Temperature cao: các mảnh ít điểm hơn vẫn có cơ hội được chọn. Thấp: nghiêng về mảnh điểm cao. Không mảnh nào trở thành một dòng trong bảng giá nhờ nút này.", "High temperature: lower-scoring pieces still get a chance. Low: it leans toward the high-scoring piece. No piece becomes a row in the price table because of this knob."],
		noteB: ["Hạ temperature mà bảng giá không nằm trong message thì câu vẫn có thể viết sai giá, chỉ ít bay hơn.", "Lower the temperature while the price table is not in the messages and the sentence can still write the wrong price. It just wanders less."]
	},
	"g-ga-tok": {
		a: ["dài ra là đắt", "longer costs more"],
		b: ["quá trần thì cụt", "past the ceiling it cuts"],
		noteA: ["Bạn trả theo token vào và token ra. Một trần ngữ cảnh cắt phần không còn chỗ. Phần bị cắt là phần mô hình không thấy.", "You pay for tokens in and tokens out. A context ceiling cuts what no longer fits. The cut part is the part the model does not see."],
		noteB: ["Dán 200 trang chính sách vào một lần gọi có thể tốn tiền và vẫn mất đúng trang có điều khoản bạn cần, nếu trang đó bị cắt.", "Pasting 200 pages of policy into one call can cost money and still lose the page with the clause you need, if that page is what gets cut."]
	},
	"g-ga-prompt": {
		a: ["đủ ba phần", "the three parts"],
		b: ["một lời cổ vũ", "a pep talk"],
		noteA: ["Task là làm gì. Context là tài liệu và các ràng buộc của lần này. Format là đầu ra trông thế nào, để máy hoặc người sau đọc được.", "The task is what to do. The context is the documents and the limits of this call. The format is what the output should look like, so a machine or the next person can read it."],
		noteB: ["«Viết cho hay» không nói dùng bảng nào, cũng không nói cần một đoạn hay một bảng.", "“Write it well” does not say which table to use, and does not say whether you need a paragraph or a table."]
	},
	"g-ga-few": {
		a: ["một dạng để bắt chước", "a shape to copy"],
		b: ["không phải bằng chứng", "not evidence"],
		noteA: ["Bạn đưa một vài đầu vào và đầu ra mẫu. Mô hình noi dạng. Các mẫu không phải một tập chấm, cũng không phải một khảo sát.", "You give a few sample inputs and outputs. The model follows the shape. The samples are not a scoring set, and they are not a survey."],
		noteB: ["Hai ví dụ «khách trẻ thì thích A» không đo được khách trẻ. Nó chỉ dạy mô hình viết theo kiểu đó.", "Two examples of “young customers like A” do not measure young customers. They only teach the model to write in that style."]
	},
	"g-ga-cot": {
		a: ["các bước trôi", "fluent steps"],
		b: ["không phải chứng minh", "not a proof"],
		noteA: ["Xin mô hình viết từng bước có thể đổi câu trả lời. Các bước có thể mạch lạc và sai.", "Asking the model to write steps can change the answer. The steps can be coherent and wrong."],
		noteB: ["Một chuỗi «vì A nên B nên giá là 100» không tra bảng. Nó chỉ là một chuỗi chữ.", "A chain “because A, therefore B, therefore the price is 100” does not look up a table. It is only a chain of text."]
	},
	"g-sa-tune": {
		a: ["đổi trọng số", "change the weights"],
		b: ["đổi tài liệu", "change the documents"],
		noteA: ["Fine-tune chỉnh trọng số bằng các ví dụ huấn luyện. RAG để nguyên trọng số và nhét các đoạn tài liệu vào prompt rồi mới viết.", "Fine-tune adjusts weights with training examples. RAG leaves the weights and puts document passages into the prompt before writing."],
		noteB: ["Giá đổi mỗi sáng. Fine-tune đêm qua không biết giá sáng nay. RAG chỉ biết nếu đoạn giá sáng nay được đưa vào lần gọi.", "The price changes every morning. Last night's fine-tune does not know this morning's price. RAG only knows if this morning's price passage is put into the call."]
	},
	"g-sa-react": {
		a: ["có kết quả công cụ", "there is a tool result"],
		b: ["tự bịa đã tra", "invents that it looked"],
		noteA: ["ReAct là reason rồi act bằng một công cụ, rồi observe đúng cái công cụ trả về. Quan sát không phải một câu mô hình ước.", "ReAct is reason, then act with a tool, then observe exactly what the tool returned. The observation is not a sentence the model guesses."],
		noteB: ["Không có dòng log gọi catalog thì không được nói tồn kho. Dù câu chữ rất chắc.", "With no log line that called the catalog, you may not state the stock. Even if the sentence is very sure."]
	},
	"g-sa-stage": {
		a: ["ba chặng", "three stages"],
		b: ["một thoại bịa", "an invented transcript"],
		noteA: ["Chặng một là nói dựa trên prompt. Chặng hai là công cụ và catalog. Chặng ba là chấm các ca đã có. Sổ không bịa lời thoại của một cuộc gọi.", "Stage one is talking from the prompt. Stage two is the tool and the catalog. Stage three is scoring cases you already have. The notebook does not invent the lines of a call."],
		noteB: ["Một đoạn «khách nói: cho tôi gói 2 triệu» không có trong tài liệu thì đừng thêm vào để bài dễ chấm.", "A line “the customer said: give me the 2-million package” is not in the material, so don't add it to make the case easier to score."]
	},
	"g-sa-tool": {
		a: ["số từ catalog", "a number from the catalog"],
		b: ["số từ câu hay", "a number from a fluent sentence"],
		noteA: ["Công cụ catalog nhận một mã và trả các trường đang có: giá, tồn, điều kiện. Thiếu mã thì không có số.", "The catalog tool takes a code and returns the fields that exist: price, stock, conditions. No code, no number."],
		noteB: ["Model viết «khoảng 2 triệu» trong khi catalog không được gọi. Đó không phải một ước lượng. Đó là một số bịa.", "The model writes “about 2 million” while the catalog was not called. That is not an estimate. That is an invented number."]
	},
	"g-sa-score": {
		a: ["giống nhau", "they agree"],
		b: ["không phải đã đúng", "not the same as correct"],
		noteA: ["Self-consistency là chạy vài lần rồi lấy câu hay gặp. Các lần cùng bịa một giá thì câu hay gặp vẫn là giá bịa.", "Self-consistency is several runs, then the sentence that shows up most. If the runs invent the same price, the frequent sentence is still an invented price."],
		noteB: ["Năm lần cùng nói «còn hàng» trong khi catalog nói hết thì sự nhất trí là năm lần sai.", "Five runs all say “in stock” while the catalog says none left. The agreement is five wrong runs."]
	},
	"g-rag-why": {
		a: ["file ở ngoài", "the file is outside"],
		b: ["đoạn được đưa vào", "a passage is put in"],
		noteA: ["RAG tìm một vài đoạn rồi để mô hình viết có các đoạn đó trong prompt. Không tìm thì mô hình không thấy file.", "RAG finds a few passages and lets the model write with those passages in the prompt. If it does not find them, the model does not see the file."],
		noteB: ["Hỏi chính sách hoàn tiền mà không retrieval thì câu trả lời không đứng trên chính sách của công ty.", "Ask the refund policy with no retrieval and the answer does not stand on the company's policy."]
	},
	"g-rag-emb": {
		a: ["gần hướng", "near in direction"],
		b: ["không phải đúng điều khoản", "not the correct clause"],
		noteA: ["Embedding đặt một đoạn chữ thành một vectơ. Đoạn gần nhau thì góc gần. Gần không có nghĩa là cùng một điều khoản, và cũng không có nghĩa là chứa đúng từ bạn gõ.", "An embedding turns a passage into a vector. Nearby passages have a nearby angle. Near does not mean the same clause, and it does not mean it contains the exact word you typed."],
		noteB: ["«Được hoàn khi lỗi của shop» và «không được hoàn khi lỗi của shop» có thể nằm gần nhau vì cùng các chữ. Gần mà trái nghĩa.", "“Refunds are allowed when the shop is at fault” and “refunds are not allowed when the shop is at fault” can sit near each other because they share words. Near, and opposite."]
	},
	"g-rag-chunk": {
		a: ["còn cả điều khoản", "the whole clause"],
		b: ["chỉ còn một nửa", "only a half remains"],
		noteA: ["Chunk là mảnh bạn cắt từ file để tìm và để nhét vào prompt. Mảnh cụt mất điều kiện phía sau thì mô hình chỉ thấy nửa luật.", "A chunk is a piece you cut from the file to search and to put in the prompt. A piece that loses the condition after it means the model only sees half the rule."],
		noteB: ["«Được hoàn tiền» nằm một mảnh, «trừ khi đã qua 7 ngày» nằm mảnh sau không được tìm. Câu trả lời sẽ cho hoàn.", "“Refunds are allowed” sits in one piece, “unless 7 days have passed” sits in the next piece and is not retrieved. The answer will allow the refund."]
	},
	"g-rag-vec": {
		a: ["top-1", "top-1"],
		b: ["chưa đối chiếu", "not checked yet"],
		noteA: ["Vector store trả các đoạn gần nhất. Gần nhất trong kho hiện tại vẫn có thể là đoạn sai, đoạn cũ, hoặc một nửa điều khoản.", "A vector store returns the nearest passages. The nearest in the current store can still be the wrong passage, an old passage, or half a clause."],
		noteB: ["Điểm 0,91 của một mục quảng cáo không thắng điểm 0,86 của đúng điều khoản, nếu bạn không đọc.", "A score of 0.91 on an ad does not beat a score of 0.86 on the real clause, if you don't read."]
	},
	"g-rag-idx": {
		a: ["file đã đổi", "the file changed"],
		b: ["mục lục chưa đổi", "the index has not"],
		noteA: ["Index là bản các đoạn đã cắt và đã embedding. Sửa file nguồn không sửa index, trừ khi bạn xây lại.", "The index is the cut, embedded passages. Editing the source file does not edit the index, unless you build it again."],
		noteB: ["Sửa một câu trong PDF rồi hỏi ngay. Câu mới không có trong index. Câu trả lời bám câu cũ.", "Edit one sentence in the PDF and ask immediately. The new sentence is not in the index. The answer sticks to the old sentence."]
	},
	"g-rag-rank": {
		a: ["xếp lại đoạn đang có", "reorders what you have"],
		b: ["không thêm đoạn", "it adds no passage"],
		noteA: ["Re-ranker chấm lại một danh sách đoạn đã tìm. Đoạn không nằm trong danh sách đó không được chấm.", "A re-ranker scores again a list of passages already retrieved. A passage that is not in that list does not get scored."],
		noteB: ["Top-20 toàn là FAQ. Re-rank chọn FAQ nghe hợp nhất. Điều khoản không có trong 20 thì không thắng.", "The top 20 are all FAQ. The re-rank picks the FAQ that sounds best. A clause that is not in the 20 does not win."]
	},
	"g-rag-near": {
		a: ["một lần chạy", "one run"],
		b: ["một bộ ca", "a set of cases"],
		noteA: ["Demo là một câu hỏi bạn chọn vì nó chạy được. Bộ ca gồm cả câu cố ý khó: trái nghĩa, điều khoản bị cắt, file mới hơn index.", "A demo is a question you picked because it runs. A case set includes questions that are hard on purpose: an opposite, a cut clause, a file newer than the index."],
		noteB: ["Một câu trên slide ra đúng đoạn. Ba câu khách sẽ hỏi thì chưa được nhìn. Demo không kể ba câu đó.", "One question on the slide returns the right passage. The three questions a customer will ask have not been looked at. The demo does not mention those three."]
	},
	"g-rag-store": {
		a: ["đúng tên kho", "the right store name"],
		b: ["kho bên cạnh không được hỏi", "the store next to it is not asked"],
		noteA: ["Vector store giữ các đoạn theo collection. Hỏi một collection thì các collection kia đứng im.", "A vector store keeps passages by collection. Ask one collection and the others sit still."],
		noteB: ["Giá ở collection catalog, chính sách ở collection policy. Lần gọi chỉ mở catalog thì không thấy chính sách, dù hai kho cùng một máy.", "Prices live in the catalog collection, the policy in the policy collection. A call that only opens catalog does not see the policy, even if both stores are on the same machine."]
	},
	"g-rag-demo": {
		a: ["ống chạy", "the pipe runs"],
		b: ["chưa chấm", "not scored yet"],
		noteA: ["In được một câu là hệ thống sống. Đúng hay sai là việc của các ca: đoạn nào vào prompt, có thêm số không có trong đoạn không.", "Printing a sentence means the system is alive. Right or wrong is the job of the cases: which passage entered the prompt, and whether a number that is not in the passage was added."],
		noteB: ["Demo in một câu hoàn tiền nghe ổn. Không ai ghi đoạn nào đã vào. Không có gì để chấm.", "The demo prints a refund sentence that sounds fine. Nobody writes down which passage entered. There is nothing to score."]
	},
	"g-im-grid": {
		a: ["một lưới số", "a grid of numbers"],
		b: ["không phải biên bản", "not a record"],
		noteA: ["Mỗi ô lưới là một giá trị màu. Mô hình tạo các giá trị đó. Nó không chụp một nơi có thật chỉ vì câu chữ nhắc tên nơi đó.", "Each cell of the grid is a color value. The model creates those values. It does not photograph a real place just because the text names the place."],
		noteB: ["Một ảnh «cửa hàng của mình» do mô hình viết không phải ảnh cửa hàng, trừ khi bạn đưa ảnh cửa hàng vào và vẫn phải kiểm.", "A picture of “our shop” that the model wrote is not a picture of the shop, unless you passed a picture of the shop in, and you still have to check."]
	},
	"g-im-vae": {
		a: ["giữ cái chung", "keeps what is common"],
		b: ["mất cái riêng", "the particular is gone"],
		noteA: ["Bộ mã hóa nén. Bộ giải nén dựng một lưới gần. Những chi tiết ít gặp bị hy sinh vì chỗ trong vectơ không đủ.", "The encoder compresses. The decoder builds a nearby grid. Rare details are sacrificed because the vector does not have room."],
		noteB: ["Một khuôn mặt cụ thể sau một vòng nén-giải có thể còn giống một khuôn mặt, mất nốt ruồi. Đó không phải ảnh gốc.", "A specific face after a compress-and-decode can still look like a face, and lose a mole. That is not the original photo."]
	},
	"g-im-gan": {
		a: ["qua mặt người chê", "gets past the critic"],
		b: ["không phải đã xảy ra", "not something that happened"],
		noteA: ["Generator giả. Discriminator chê. Khi kẻ giả qua mặt được người chê, ảnh trông giống tập luyện. Tập luyện không phải thế giới hôm nay.", "The generator forges. The discriminator criticizes. When the forger gets past the critic, the picture looks like the training set. The training set is not the world today."],
		noteB: ["Một ảnh sản phẩm qua được discriminator vẫn có thể là một sản phẩm không có trong catalog của bạn.", "A product picture that gets past the discriminator can still be a product that is not in your catalog."]
	},
	"g-im-diff": {
		a: ["gỡ nhiễu", "undo noise"],
		b: ["không tra kho", "not a library lookup"],
		noteA: ["Xuất phát từ nhiễu, mỗi bước bớt nhiễu một chút, ra một lưới trông như ảnh. Không bước nào là một câu SELECT.", "Start from noise, each step removes a little noise, and you get a grid that looks like a photo. No step is a SELECT."],
		noteB: ["Nhắc tên một cửa hàng không làm bước gỡ nhiễu mở file ảnh cửa hàng đó.", "Naming a shop does not make the denoising step open that shop's photo file."]
	},
	"g-im-txt": {
		a: ["lái", "steers"],
		b: ["không chứng nhận", "does not certify"],
		noteA: ["Một prompt nói chủ đề, kiểu, và các thứ không muốn. Ảnh ra bám các chữ đó theo cách mô hình biết. Nó không ký nhận ảnh là hàng thật, người thật, hay thương hiệu của bạn.", "A prompt says the subject, the style, and what you don't want. The picture follows those words the way the model knows how. It does not sign that the picture is real stock, a real person, or your brand."],
		noteB: ["Gõ tên một sản phẩm của bạn. Ảnh có thể mang một logo gần giống, sai chi tiết, và không phải file nhận diện đã duyệt.", "Type your product's name. The picture may carry a near-logo, wrong in the details, and it is not the approved identity file."]
	},
	"g-rag-job": {
		a: ["trong tài liệu được giao", "in the given documents"],
		b: ["từ trí nhớ", "from memory"],
		noteA: ["Nếu một điều khoản không nằm trong tập tài liệu của bài, câu trả lời không được lấy nó từ chỗ khác, kể cả từ một lần huấn luyện.", "If a clause is not in the assignment's documents, the answer may not take it from somewhere else, including from a training run."],
		noteB: ["Đề là các văn bản được giao. Một điều luật bạn «nhớ» không nằm trong tập đó thì không được viết vào câu trả lời như thể nó ở trong tập.", "The brief is the documents you were given. A rule you “remember” that is not in that set may not be written into the answer as if it were in the set."]
	},
	"g-lc-tpl": {
		a: ["điền từ dữ liệu", "filled from data"],
		b: ["trống và bịa", "empty, then invented"],
		noteA: ["Template có các biến. Biến không được truyền thì chỗ đó trống hoặc lỗi, tùy cách bạn viết. Đừng bắt mô hình «tự hiểu chỗ trống».", "A template has variables. A variable you don't pass is empty or an error, depending on how you wrote it. Don't ask the model to “understand the blank”."],
		noteB: ["Biến `policy` không được truyền. Mô hình vẫn viết một chính sách. Đó là một chính sách không nguồn.", "The `policy` variable is not passed. The model still writes a policy. That policy has no source."]
	},
	"g-lc-parse": {
		a: ["đúng dạng", "the shape holds"],
		b: ["vỡ thì dừng", "if it breaks, stop"],
		noteA: ["Bạn xin JSON hoặc một bảng các trường. Model viết một đoạn văn. Parser không đọc được. Đó là lúc dừng.", "You ask for JSON or a table of fields. The model writes a paragraph. The parser cannot read it. That is when you stop."],
		noteB: ["Bắt lỗi rồi điền `{\"price\": 0}` là biến một lần vỡ thành một giá 0. Khách có thể bị thu 0.", "Catch the error and fill `{\"price\": 0}` and you turn one break into a price of 0. A customer might be charged 0."]
	},
	"g-lc-agent": {
		a: ["đường đã vẽ", "a path you drew"],
		b: ["tự chọn, có trần", "it chooses, with a cap"],
		noteA: ["Chain gọi các bước theo thứ tự bạn viết: khuôn, model, parser, có thể một công cụ. Agent chọn công cụ kế tiếp dựa trên chữ nó vừa viết.", "A chain calls steps in the order you wrote: template, model, parser, maybe a tool. An agent chooses the next tool from the text it just wrote."],
		noteB: ["Agent được phép gọi catalog rồi gọi nữa. Không có trần thì một lần hỏi tồn kho thành hai mươi lần gọi và một hóa đơn.", "An agent is allowed to call the catalog and then call it again. With no cap, one stock question becomes twenty calls and a bill."]
	},
	"g-cap-none": {
		a: ["dùng các khóa trước", "use the earlier courses"],
		b: ["không có buổi mới", "no new session"],
		noteA: ["File gốc của capstone chỉ có tiêu đề module. Không có video, không có một dataset mẫu trong sổ này.", "The source file of the capstone has only a module title. No video, and no sample dataset in this notebook."],
		noteB: ["Tự bịa một file khách rồi gọi là capstone là một bài khác, không phải bài của giáo trình.", "Inventing a customer file and calling it the capstone is a different assignment, not the syllabus one."]
	}
};
function say(kit, vi, en, tell) {
	tell(kit.L(vi, en));
}
function chip(THREE, world, kit, vi, en, x, y, w = 1.3) {
	const s = kit.label(THREE, kit.L(vi, en), w);
	s.position.set(x, y, .35);
	world.add(s);
	return s;
}
function box(THREE, world, kit, x, y, w, h, color) {
	const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, .16), kit.lambert(THREE, color));
	mesh.position.set(x, y, 0);
	world.add(mesh);
	return mesh;
}
function dot(THREE, world, kit, x, y, color, r = .08) {
	const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 12), kit.lambert(THREE, color));
	mesh.position.set(x, y, 0);
	world.add(mesh);
	return mesh;
}
function bars(THREE, world, kit, rows, note) {
	const n = rows.length;
	const gap = n <= 2 ? 1.55 : n === 3 ? 1.2 : .92;
	const lw = n <= 2 ? 1.35 : n === 3 ? 1.05 : .82;
	const meshes = rows.map(([vi, en, h, color], i) => {
		const x = (i - (n - 1) / 2) * gap;
		const mesh = kit.peg(THREE, x, h, color, n <= 2 ? .42 : .34);
		const cap = chip(THREE, world, kit, vi, en, x, -1.28, lw);
		world.add(mesh);
		return {
			mesh,
			cap,
			x,
			h
		};
	});
	return (_dt, t, tell) => {
		const bob = 1 + Math.sin(t * 2) * .04;
		meshes[0].mesh.scale.y = meshes[0].h * bob;
		meshes[0].mesh.position.y = -1.05 + meshes[0].mesh.scale.y / 2;
		say(kit, note[0], note[1], tell);
	};
}
function toggle(THREE, world, kit, a, b, noteA, noteB) {
	const make = (text, x, color) => {
		const group = new THREE.Group();
		const body = new THREE.Mesh(new THREE.BoxGeometry(2.1, 1.25, .3), kit.lambert(THREE, color));
		const face = kit.label(THREE, kit.L(text[0], text[1]), 1.9);
		face.position.set(0, 0, .24);
		const base = new THREE.Mesh(new THREE.BoxGeometry(2.1, .07, .34), new THREE.MeshBasicMaterial({ color: kit.GOLD }));
		base.position.set(0, -.72, 0);
		group.add(body, face, base);
		group.position.set(x, .1, 0);
		world.add(group);
		return {
			group,
			body,
			base
		};
	};
	const left = make(a, -1.25, kit.GOLD);
	const right = make(b, 1.25, kit.CLAY);
	return (dt, t, tell) => {
		const on = t % 6 > 3;
		const step = Math.min(1, dt * 7);
		[[left, !on], [right, on]].forEach(([card, active]) => {
			const c = card;
			const target = active ? 1 : 0;
			c.group.position.z += ((active ? .45 : -.2) - c.group.position.z) * step;
			c.group.scale.setScalar(c.group.scale.x + ((active ? 1.07 : .92) - c.group.scale.x) * step);
			c.base.visible = target === 1;
			const mat = c.body.material;
			mat.transparent = true;
			mat.opacity += ((active ? 1 : .45) - mat.opacity) * step;
		});
		const note = on ? noteB : noteA;
		say(kit, note[0], note[1], tell);
	};
}
function gate(THREE, world, kit, mode) {
	const axis = new THREE.Mesh(new THREE.BoxGeometry(3.3, .04, .04), new THREE.MeshBasicMaterial({ color: kit.CREAM }));
	const mark = new THREE.Mesh(new THREE.BoxGeometry(.05, 1.7, .05), new THREE.MeshBasicMaterial({ color: kit.GOLD }));
	const ball = new THREE.Mesh(new THREE.SphereGeometry(.12, 14, 14), new THREE.MeshBasicMaterial({ color: kit.GOLD }));
	const tag = chip(THREE, world, kit, "5%", "5%", 1.05, 1.05, .7);
	world.add(axis, mark, ball);
	return (_dt, t, tell) => {
		const x = -1.45 + t * .45 % 2.9;
		ball.position.set(x, .22, .1);
		const cut = mode === "peek" && t % 8 > 4 ? .15 : 1.05;
		mark.position.set(cut, .15, 0);
		tag.position.x = cut;
		const past = x > cut;
		if (mode === "peek" && t % 8 > 4) say(kit, past ? "Dời vạch sau khi nhìn. Viên vừa rơi vào vùng bác." : "Vạch bị kéo tới viên.", "Move the line after looking. The ball just fell into the reject zone.", tell);
		else say(kit, past ? "Vượt vạch: bác câu «không khác»." : "Chưa tới vạch. Câu «không khác» còn đứng.", past ? "Past the line: reject the “no difference” story." : "Not past the line. “No difference” still stands.", tell);
	};
}
function clouds(THREE, world, kit, groups, labels, note) {
	const dots = [];
	groups.forEach((g) => {
		for (let i = 0; i < g.n; i++) {
			const ang = i * 2.2;
			dots.push(dot(THREE, world, kit, g.x + Math.cos(ang) * .28, g.y + Math.sin(ang) * .22, g.color, .08));
		}
	});
	labels.forEach(([vi, en, x, y, w]) => chip(THREE, world, kit, vi, en, x, y, w));
	return (_dt, t, tell) => {
		dots.forEach((d, i) => {
			d.position.y += Math.sin(t * 1.4 + i) * .002;
		});
		say(kit, note[0], note[1], tell);
	};
}
function cells(THREE, world, kit, items, note) {
	items.forEach(([vi, en, x, y, color]) => {
		box(THREE, world, kit, x, y, 1.25, .72, color);
		chip(THREE, world, kit, vi, en, x, y, 1.15);
	});
	return (_dt, _t, tell) => say(kit, note[0], note[1], tell);
}
function series(THREE, world, kit, ys, cut, note, future = true) {
	const dots = ys.map((y, i) => {
		return dot(THREE, world, kit, -1.7 + i * .34, y, future && i >= cut ? kit.GOLD : kit.CREAM, i >= cut ? .1 : .07);
	});
	const marker = new THREE.Mesh(new THREE.SphereGeometry(.12, 12, 12), new THREE.MeshBasicMaterial({ color: kit.GOLD }));
	world.add(marker);
	return (_dt, t, tell) => {
		const i = Math.floor(t * .8) % Math.max(1, cut);
		marker.position.set(dots[i].position.x, dots[i].position.y, .15);
		say(kit, note[0], note[1], tell);
	};
}
function chain(THREE, world, kit, note, side) {
	const nodes = [];
	for (let i = 0; i < 4; i++) {
		const mesh = box(THREE, world, kit, -1.2 + i * .8, -.25, .42, .42, i === 3 ? kit.GOLD : kit.CREAM);
		nodes.push(mesh);
	}
	chip(THREE, world, kit, "chính", "main", 0, -1.05, 1.1);
	let sideNodes = [];
	if (side) {
		sideNodes = [0, 1].map((i) => box(THREE, world, kit, .4 + i * .8, .75, .42, .42, kit.CLAY));
		chip(THREE, world, kit, "thử", "try", .8, 1.2, .9);
	}
	return (_dt, t, tell) => {
		const k = Math.floor(t / .8) % 4;
		nodes.forEach((mesh, i) => {
			mesh.scale.setScalar(i === k ? 1.15 : 1);
		});
		sideNodes.forEach((mesh) => {
			mesh.visible = t % 7 > 2.5;
		});
		say(kit, note[0], note[1], tell);
	};
}
var scenes = {
	"x-rule": (T, w, k) => gate(T, w, k, "rule"),
	"x-peek": (T, w, k) => gate(T, w, k, "peek"),
	"x-h0": (T, w, k) => toggle(T, w, k, ["không khác", "no difference"], ["có khác", "there is a difference"], ["Câu nhàm viết trước. p tính khi câu này đúng.", "The dull sentence is written first. p is computed as if it is true."], ["Câu kia là điều bạn đang nghi. Kiểm định không chứng minh câu này.", "The other sentence is what you suspect. The test does not prove it."]),
	"x-rare": (T, w, k) => {
		const pts = [];
		for (let i = 0; i < 18; i++) pts.push(dot(T, w, k, -.2 + Math.sin(i * 1.7) * .7, Math.cos(i * 1.3) * .45, k.CREAM, .07));
		const gold = dot(T, w, k, 1.35, .15, k.GOLD, .13);
		chip(T, w, k, "mẫu này", "this sample", 1.35, -.55, 1.3);
		return (_dt, t, tell) => {
			gold.position.y = .15 + Math.sin(t * 2) * .06;
			say(k, "Đám kem là những mẫu nếu câu nhàm đúng. Viên vàng là mẫu bạn có. p là độ hiếm của viên đó, không phải xác suất câu nhàm đúng.", "The cream dots are samples if the dull story is true. The gold one is yours. p is how rare it is, not the probability the dull story is true.", tell);
		};
	},
	"x-err": (T, w, k) => toggle(T, w, k, ["báo động giả", "false alarm"], ["bỏ sót", "missed it"], ["α là tỷ lệ báo động giả khi câu nhàm đúng. Không phải xác suất bạn đã sai.", "α is the false-alarm rate when the dull story is true. Not the probability you were wrong."], ["Bỏ sót là câu nhàm sai mà bạn không bác. 1 − α không phải sức mạnh của cuộc kiểm.", "A miss is a false dull story you failed to reject. 1 − α is not the power of the test."]),
	"x-t": (T, w, k) => {
		for (let i = 0; i < 9; i++) {
			const x = (i - 4) * .28;
			dot(T, w, k, x, .15 - x * x * .12, k.CREAM, .06);
			dot(T, w, k, x * 1.25, -.55 - x * x * .08, k.GOLD, .06);
		}
		chip(T, w, k, "biết độ rộng", "width known", 0, 1.15, 1.8);
		chip(T, w, k, "độ rộng từ mẫu", "width from the sample", 0, -1.2, 2.2);
		return (_dt, _t, tell) => say(k, "Hàng dưới nặng đuôi hơn. Vạch bác phải đứng xa hơn khi độ rộng lấy từ mẫu.", "The lower row has heavier tails. The reject line has to stand farther out when the width comes from the sample.", tell);
	},
	"x-means": (T, w, k) => clouds(T, w, k, [{
		x: -.85,
		y: .1,
		color: k.CREAM,
		n: 7
	}, {
		x: .9,
		y: .45,
		color: k.GOLD,
		n: 7
	}], [[
		"GDN",
		"GDN",
		-.85,
		-.85,
		.9
	], [
		"Facebook",
		"Facebook",
		.9,
		-.85,
		1.4
	]], ["Hai đám, hai mức. Câu hỏi là khoảng cách này có hiếm không nếu thật ra bằng nhau.", "Two clouds, two levels. The question is whether this gap is rare if they are really equal."]),
	"x-props": (T, w, k) => bars(T, w, k, [[
		"2,0%",
		"2.0%",
		.55,
		k.CREAM
	], [
		"2,6%",
		"2.6%",
		.72,
		k.GOLD
	]], ["Hai tỷ lệ nhìn khác. z ví dụ khoảng 1,3, chưa tới vạch 1,96 của mức 5% hai phía.", "The two rates look different. The example z is about 1.3, short of the 1.96 line for a 5% two-sided test."]),
	"x-chi": (T, w, k) => cells(T, w, k, [
		[
			"30 mua",
			"30 buy",
			-.72,
			.42,
			k.GOLD
		],
		[
			"70 không",
			"70 no",
			.72,
			.42,
			k.CREAM
		],
		[
			"10 mua",
			"10 buy",
			-.72,
			-.5,
			k.CLAY
		],
		[
			"90 không",
			"90 no",
			.72,
			-.5,
			k.CREAM
		]
	], ["Nếu kênh và mua không liên quan, ô GDN-mua kỳ vọng khoảng 20, không phải 30. χ² ví dụ = 12,5.", "If channel and purchase were unrelated, the GDN-buy cell would be about 20, not 30. Example χ² = 12.5."]),
	"x-anova": (T, w, k) => clouds(T, w, k, [
		{
			x: -1.15,
			y: -.15,
			color: k.CREAM,
			n: 5
		},
		{
			x: 0,
			y: -.05,
			color: k.CREAM,
			n: 5
		},
		{
			x: 1.15,
			y: .55,
			color: k.GOLD,
			n: 5
		}
	], [
		[
			"11",
			"11",
			-1.15,
			-.95,
			.6
		],
		[
			"12",
			"12",
			0,
			-.95,
			.6
		],
		[
			"20",
			"20",
			1.15,
			-.95,
			.6
		]
	], ["Một cuộc cho cả ba mức. F lớn vì nhóm 20 đứng xa, không phải vì 11 khác 12.", "One test for all three levels. F is large because 20 sits far away, not because 11 differs from 12."]),
	"x-ask": (T, w, k) => {
		for (let i = 0; i < 12; i++) dot(T, w, k, -1.3 + i % 4 * .28, -.4 + Math.floor(i / 4) * .32, k.CREAM, .07);
		const q = chip(T, w, k, "tỷ lệ form?", "form rate?", .55, .85, 1.8);
		return (_dt, t, tell) => {
			q.position.y = .8 + Math.sin(t) * .05;
			say(k, "Câu hỏi đặt trước biểu đồ. Biểu đồ đẹp không phải là câu hỏi.", "The question comes before the chart. A pretty chart is not a question.", tell);
		};
	},
	"x-whose": (T, w, k) => toggle(T, w, k, ["bảng của mình", "our table"], ["bảng công khai", "a public file"], ["Bạn biết ai được ghi. Câu kết luận đi được xa hơn.", "You know who was recorded. The claim can go further."], ["Bạn không chọn ai vào file. Đừng nói như thể đó là khách của bạn.", "You did not choose who is in the file. Do not talk as if they were your customers."]),
	"x-types": (T, w, k) => bars(T, w, k, [
		[
			"số",
			"number",
			1.05,
			k.GOLD
		],
		[
			"chữ",
			"text",
			.45,
			k.CLAY
		],
		[
			"ngày",
			"date",
			.7,
			k.CREAM
		]
	], ["Trung bình một tên kênh không có nghĩa. Ngày không phải một số càng ngày càng «lớn hơn» theo cách bạn nghĩ.", "The average of a channel name means nothing. A date is not a number that simply gets “bigger”."]),
	"x-dup": (T, w, k) => {
		const a = box(T, w, k, -.55, .1, .7, .45, k.CREAM);
		const b = box(T, w, k, .35, .1, .7, .45, k.GOLD);
		chip(T, w, k, "cùng một người", "same person", 0, -.85, 2.2);
		return (_dt, t, tell) => {
			const hide = t % 6 > 3;
			b.visible = !hide;
			a.position.x = hide ? 0 : -.55;
			say(k, hide ? "Gộp lại một dòng. Tổng chi tiêu không còn bị nhân đôi." : "Hai dòng, một người. SUM tính hai lần.", hide ? "Collapse to one row. Spend is no longer counted twice." : "Two rows, one person. SUM counts them twice.", tell);
		};
	},
	"x-hole": (T, w, k) => toggle(T, w, k, ["ô trống", "blank"], ["điền số 0", "fill with 0"], ["Trống nghĩa là không biết. Để vậy và nói rõ.", "Blank means you do not know. Leave it and say so."], ["0 là một giá trị. Điền 0 khi bạn không có lý do thì kéo trung bình xuống.", "0 is a value. Filling 0 without a reason pulls the mean down."]),
	"x-far": (T, w, k) => {
		for (let i = 0; i < 8; i++) dot(T, w, k, -1.3 + i * .28, -.1 + Math.sin(i) * .12, k.CREAM, .07);
		const far = dot(T, w, k, 1.25, .85, k.GOLD, .12);
		const tag = chip(T, w, k, "tuần lễ?", "a real peak?", 1.15, 1.25, 1.5);
		return (_dt, t, tell) => {
			const typo = t % 7 > 3.5;
			tag.visible = true;
			far.position.y = typo ? .85 : .55;
			say(k, typo ? "Có thể là gõ nhầm. Cũng có thể là tuần lễ thật. Hàng rào chỉ đánh dấu, chưa xóa." : "Nhìn rồi mới quyết. Xóa vì «xa» không phải lý do.", typo ? "It might be a typo. It might be a real festival week. A fence only flags it. It does not delete it." : "Look, then decide. “It is far” is not a reason to delete.", tell);
		};
	},
	"x-z": (T, w, k) => toggle(T, w, k, ["triệu và giây", "millions and seconds"], ["cùng một thước", "one ruler"], ["Hai cột khác đơn vị. Cột to sẽ át cột nhỏ trong một khoảng cách.", "Two columns, different units. The big one drowns the small one in a distance."], ["z đưa về tâm 0, độ rộng 1. Nó không tạo ra quan hệ, và không biến đuôi thành hình chuông.", "z puts them at center 0 and width 1. It does not create a relationship, and it does not turn a tail into a bell."]),
	"x-bad": (T, w, k) => {
		const bad = chip(T, w, k, "200%", "200%", -.8, .2, 1.2);
		const ok = chip(T, w, k, "1,1%", "1.1%", .7, .2, 1.1);
		return (_dt, t, tell) => {
			bad.position.y = t % 5 > 2.5 ? 1.15 : .2;
			bad.visible = t % 5 < 4.2;
			ok.visible = true;
			say(k, "200% không phải điểm xa của một tỷ lệ. Đó là giá trị không hợp lệ. Lọc là một quyết định, phải viết lại được.", "200% is not a far point of a rate. It is an impossible value. A filter is a decision you must be able to write down.", tell);
		};
	},
	"x-cat": (T, w, k) => bars(T, w, k, [
		[
			"GDN",
			"GDN",
			.8,
			k.GOLD
		],
		[
			"FB",
			"FB",
			1.1,
			k.CREAM
		],
		[
			"TikTok",
			"TikTok",
			.5,
			k.CLAY
		]
	], ["Ba tên không có thứ tự. Đếm và lấy phần. Đừng kẻ một đường nối chúng.", "Three names, no order. Count them and take shares. Do not draw a line through them."]),
	"x-ord": (T, w, k) => bars(T, w, k, [
		[
			"1",
			"1",
			.35,
			k.CREAM
		],
		[
			"2",
			"2",
			.55,
			k.CREAM
		],
		[
			"3",
			"3",
			.8,
			k.GOLD
		],
		[
			"4",
			"4",
			.6,
			k.CREAM
		],
		[
			"5",
			"5",
			.4,
			k.CREAM
		]
	], ["1 đến 5 sao có thứ tự. Đừng xếp theo bảng chữ, đừng lấy trung bình như thể cách đều là chắc.", "1 to 5 stars have an order. Do not sort them alphabetically, and do not treat equal spacing as a fact."]),
	"x-num": (T, w, k) => {
		[
			0,
			.05,
			.08,
			.1,
			.12,
			.15,
			.2,
			.95
		].forEach((y, i) => dot(T, w, k, -1.3 + i * .32, y - .2, i === 7 ? k.GOLD : k.CREAM, .08));
		chip(T, w, k, "trung vị", "median", -.35, .7, 1.3);
		chip(T, w, k, "trung bình", "mean", .85, 1.15, 1.5);
		return (_dt, t, tell) => say(k, "Một điểm cao kéo trung bình. Trung vị ở giữa dãy. Khi hai số cách nhau, kể về cái đuôi.", "One high point pulls the mean. The median sits in the middle. When they disagree, talk about the tail.", tell);
	},
	"x-scat": (T, w, k) => {
		[
			[-1.4, -.4],
			[-1, -.15],
			[-.5, -.25],
			[-.1, .1],
			[.4, .05],
			[.9, .4],
			[1.3, .55]
		].forEach(([x, y]) => dot(T, w, k, x, y, k.CREAM, .08));
		const line = new T.Mesh(new T.BoxGeometry(2.8, .03, .03), new T.MeshBasicMaterial({ color: k.GOLD }));
		line.position.set(0, .1, 0);
		line.rotation.z = .35;
		w.add(line);
		return (_dt, t, tell) => {
			line.scale.x = .96 + Math.sin(t) * .04;
			say(k, "r ví dụ 0,6 là độ đi cùng nhau. r = 0 không có nghĩa là không có hình. Một hình chữ U vẫn có r gần 0.", "An example r of 0.6 is how they move together. r = 0 does not mean there is no shape. A U can still have r near 0.", tell);
		};
	},
	"x-cause": (T, w, k) => bars(T, w, k, [
		[
			"form",
			"forms",
			.7,
			k.GOLD
		],
		[
			"kem",
			"ice cream",
			.75,
			k.CREAM
		],
		[
			"mùa lễ",
			"festival",
			.95,
			k.CLAY
		]
	], ["Form và kem cùng tăng. Cả hai có thể bị mùa lễ kéo. r không phải nút nhân quả.", "Forms and ice cream rise together. A festival can pull both. r is not a causal switch."]),
	"x-group": (T, w, k) => clouds(T, w, k, [
		{
			x: -1.1,
			y: .15,
			color: k.CREAM,
			n: 6
		},
		{
			x: .15,
			y: .45,
			color: k.GOLD,
			n: 6
		},
		{
			x: 1.2,
			y: -.1,
			color: k.CLAY,
			n: 6
		}
	], [
		[
			"A",
			"A",
			-1.1,
			-.8,
			.5
		],
		[
			"B",
			"B",
			.15,
			-.8,
			.5
		],
		[
			"C",
			"C",
			1.2,
			-.8,
			.5
		]
	], ["Một số, một cột chữ. So từng nhóm. Đừng tính một r cho tên nhóm.", "A number and a text column. Compare the groups. Do not compute one r for the group names."]),
	"x-denom": (T, w, k) => toggle(T, w, k, ["30% của GDN", "30% of GDN"], ["75% của người mua", "75% of buyers"], ["30 mua trên 100 dòng GDN. Mẫu số là GDN.", "30 buys out of 100 GDN rows. The denominator is GDN."], ["30 trên 40 người mua. Mẫu số là người mua. Hai câu khác nhau.", "30 out of 40 buyers. The denominator is buyers. Those are different sentences."]),
	"x-flip": (T, w, k) => {
		kitBars(T, w, k, -.55, .35, .62, k.GOLD), kitBars(T, w, k, .55, .35, .32, k.CREAM);
		kitBars(T, w, k, -1.15, -.55, .28, k.CREAM);
		kitBars(T, w, k, -.45, -.55, .55, k.GOLD);
		kitBars(T, w, k, .45, -.55, .3, k.CREAM);
		kitBars(T, w, k, 1.15, -.55, .58, k.GOLD);
		chip(T, w, k, "gộp: GDN cao", "pooled: GDN higher", 0, 1.15, 2.15);
		return (_dt, t, tell) => {
			say(k, "Tách khách mới và khách cũ thì TikTok không thua. Gộp lại nói ngược vì GDN toàn khách cũ.", "Split new and returning and TikTok is not behind. Pooled, it looks behind because GDN is mostly returning customers.", tell);
		};
	},
	"x-wh": (T, w, k) => toggle(T, w, k, ["đang ghi đơn", "taking orders"], ["18 tháng", "18 months"], ["Bảng này phục vụ đơn hôm nay. Đừng kể chuyện cả năm từ nó.", "This table serves today's orders. Do not tell a year-long story from it."], ["Kho giữ lịch sử để đọc. Đơn mới vẫn ghi ở bảng kia.", "The warehouse keeps history for reading. New orders still land in the other table."]),
	"x-star": (T, w, k) => {
		box(T, w, k, 0, 0, 1.15, .55, k.GOLD);
		chip(T, w, k, "1 sự kiện", "1 event", 0, 0, 1.2);
		[
			[
				"kênh",
				"channel",
				0,
				1.15
			],
			[
				"ngày",
				"date",
				-1.35,
				-.85
			],
			[
				"cửa",
				"store",
				1.35,
				-.85
			]
		].forEach(([vi, en, x, y]) => {
			box(T, w, k, Number(x), Number(y), .95, .42, k.CREAM);
			chip(T, w, k, vi, en, Number(x), Number(y), .95);
		});
		return (_dt, t, tell) => say(k, "Giữa là từng sự kiện, một hạt đúng. Quanh là tên. Đừng để một dòng vừa là một click vừa là một ngày.", "The middle is each event, one grain. Around it are names. Do not let one row be both a click and a day.", tell);
	},
	"x-key": (T, w, k) => {
		chip(T, w, k, "form", "form", -.9, .1, 1);
		const ok = chip(T, w, k, "chiến dịch có thật", "a real campaign", .85, .1, 2);
		return (_dt, t, tell) => {
			const bad = t % 6 > 3;
			ok.position.x = bad ? 1.6 : .75;
			say(k, bad ? "Trỏ vào mã không có. Khóa ngoại phải chặn dòng mồ côi." : "Form trỏ tới chiến dịch đang tồn tại.", bad ? "It points at an id that is not there. A foreign key should block the orphan." : "The form points at a campaign that exists.", tell);
		};
	},
	"x-ddl": (T, w, k) => toggle(T, w, k, ["thêm một cột", "add a column"], ["sửa một dòng", "change a row"], ["DDL đổi khung bảng. CREATE, ALTER, DROP.", "DDL changes the table's shape. CREATE, ALTER, DROP."], ["DML đổi dòng. INSERT, UPDATE, DELETE. Không phải cùng một việc.", "DML changes rows. INSERT, UPDATE, DELETE. Not the same job."]),
	"x-run": (T, w, k) => {
		const chips = [
			["FROM", "FROM"],
			["WHERE", "WHERE"],
			["GROUP", "GROUP"],
			["HAVING", "HAVING"],
			["SELECT", "SELECT"],
			["ORDER", "ORDER"]
		].map(([vi, en], i) => {
			const col = i % 3;
			const row = Math.floor(i / 3);
			return chip(T, w, k, vi, en, (col - 1) * 1.2, .55 - row * .95, 1.05);
		});
		return (_dt, t, tell) => {
			const on = Math.floor(t / .9) % chips.length;
			chips.forEach((c, i) => {
				c.position.z = i === on ? .2 : 0;
				c.scale.setScalar(i === on ? 1.08 : 1);
			});
			say(k, "Máy không bắt đầu ở chữ SELECT. FROM trước, SELECT gần cuối.", "The engine does not start at the word SELECT. FROM comes first. SELECT is near the end.", tell);
		};
	},
	"x-having": (T, w, k) => toggle(T, w, k, ["WHERE lọc dòng", "WHERE filters rows"], ["HAVING lọc nhóm", "HAVING filters groups"], ["WHERE chạy trước khi cộng. Nó không thấy SUM.", "WHERE runs before the sum. It cannot see SUM."], ["HAVING thấy tổng của nhóm. TikTok dưới 15 form thì loại nhóm đó.", "HAVING sees the group's total. Drop TikTok if its forms are under 15."]),
	"x-count": (T, w, k) => toggle(T, w, k, ["COUNT(*) = 4", "COUNT(*) = 4"], ["COUNT(form) = 3", "COUNT(form) = 3"], ["Bốn dòng, một ô form trống. COUNT(*) đếm dòng.", "Four rows, one blank form cell. COUNT(*) counts rows."], ["COUNT(form) bỏ ô trống. SUM cũng bỏ trống, không coi trống là 0.", "COUNT(form) skips the blank. SUM skips blanks too. It does not treat blank as 0."]),
	"x-join": (T, w, k) => {
		chip(T, w, k, "3 form", "3 forms", -1.15, .35, 1.2);
		chip(T, w, k, "2 dòng giá", "2 price rows", 1.15, .35, 1.5);
		const out = chip(T, w, k, "6 dòng", "6 rows", 0, -.65, 1.2);
		return (_dt, t, tell) => {
			out.position.y = -.65 + Math.sin(t * 2) * .06;
			say(k, "Khóa không duy nhất thì nối nhân dòng. Đếm trước và sau. Inner bỏ dòng không khớp.", "A key that is not unique multiplies rows. Count before and after. An inner join drops rows that do not match.", tell);
		};
	},
	"x-left": (T, w, k) => toggle(T, w, k, ["cửa không có đơn", "a store with no orders"], ["null, không phải 0", "null, not 0"], ["Left giữ cửa đó. Bên đơn để trống.", "A left join keeps that store. The order side is blank."], ["Trống không phải doanh thu 0. WHERE bên phải = … sẽ biến left thành inner.", "Blank is not revenue 0. WHERE on the right side turns the left join into an inner join."]),
	"x-union": (T, w, k) => toggle(T, w, k, ["UNION bỏ trùng", "UNION drops copies"], ["UNION ALL giữ", "UNION ALL keeps them"], ["Xếp dọc hai bảng cùng cột. UNION còn một dòng nếu hai bên giống hệt.", "Stack two tables with the same columns. UNION keeps one row when both sides match."], ["UNION ALL giữ cả hai. Dùng nó khi trùng vẫn là hai sự kiện.", "UNION ALL keeps both. Use it when a copy is still two events."]),
	"x-win": (T, w, k) => toggle(T, w, k, ["GROUP BY còn 3 dòng", "GROUP BY leaves 3"], ["cửa sổ còn từng tuần", "a window keeps each week"], ["Cộng theo kênh thì mất từng tuần.", "Summing by channel loses the weeks."], ["Cửa sổ thêm hạng hoặc tổng chạy mà vẫn còn từng dòng.", "A window adds a rank or a running total and still keeps every row."]),
	"x-rank": (T, w, k) => toggle(T, w, k, ["RANK 1, 1, 3", "RANK 1, 1, 3"], ["DENSE 1, 1, 2", "DENSE 1, 1, 2"], ["Hai tuần hòa hạng 1. RANK nhảy xuống 3.", "Two weeks tie for 1. RANK skips to 3."], ["DENSE_RANK không nhảy. ROW_NUMBER thì phá hòa bằng cách tùy ý, 1 rồi 2 rồi 3.", "DENSE_RANK does not skip. ROW_NUMBER breaks the tie arbitrarily: 1 then 2 then 3."]),
	"x-part": (T, w, k) => bars(T, w, k, [
		[
			"hạng 1",
			"rank 1",
			1,
			k.GOLD
		],
		[
			"hạng 1",
			"rank 1",
			.85,
			k.GOLD
		],
		[
			"hạng 2",
			"rank 2",
			.55,
			k.CREAM
		]
	], ["Mỗi kênh đếm hạng lại từ 1. Hạng 1 của TikTok không phải hạng 1 của cả bảng.", "Each channel starts again at 1. TikTok's 1 is not number 1 of the whole table."]),
	"x-frame": (T, w, k) => {
		const ds = [
			.4,
			.7,
			.5,
			.9,
			.6
		].map((h, i) => k.peg(T, (i - 2) * .55, h, k.CREAM, .28));
		ds.forEach((m) => w.add(m));
		return (_dt, t, tell) => {
			const on = Math.floor(t / .8) % 5;
			ds.forEach((m, i) => {
				const mat = m.material;
				const inside = i <= on && i > on - 3;
				mat.color.setHex(inside ? k.GOLD : k.CREAM);
			});
			say(k, "Khung là vài dòng quanh dòng này, ví dụ 3 tuần. Không phải cả kênh. Thiếu tuần thì «3 dòng» không phải «3 tuần lịch».", "The frame is a few rows around this one, for example 3 weeks. Not the whole channel. If a week is missing, “3 rows” is not “3 calendar weeks”.", tell);
		};
	},
	"x-lag": (T, w, k) => {
		const today = chip(T, w, k, "hôm nay 40", "today 40", .7, .15, 1.6);
		chip(T, w, k, "hôm qua 32", "yesterday 32", -.85, .15, 1.7);
		return (_dt, t, tell) => {
			today.position.x = .55 + Math.sin(t) * .05;
			say(k, "Lag lấy đúng một dòng trước theo thứ bạn sắp. Chỉ là hôm qua nếu sắp theo ngày và không thiếu ngày.", "Lag takes the one previous row in your sort. It is yesterday only if you sorted by date and no date is missing.", tell);
		};
	},
	"x-case": (T, w, k) => bars(T, w, k, [
		[
			"thấp",
			"low",
			.45,
			k.CREAM
		],
		[
			"vừa",
			"mid",
			.8,
			k.GOLD
		],
		[
			"cao",
			"high",
			1.15,
			k.CLAY
		]
	], ["CASE viết bậc ngay trong câu. Luật thuế hay «chưa mua» đọc lại được, không nằm trong đầu người xuất file.", "CASE writes the bins in the query. A tax rule or “has not bought” stays readable. It does not live in someone's head."]),
	"x-cte": (T, w, k) => toggle(T, w, k, ["đặt tên câu con", "name the inner query"], ["view không phải bản sao", "a view is not a copy"], ["CTE cho một câu lồng có tên. Dễ đọc. Đừng chắc máy chạy nó một lần.", "A CTE gives a nested query a name. Easier to read. Do not assume the engine runs it once."], ["View lưu câu hỏi đó. Mỗi lần gọi là chạy lại. Không phải bản backup của các dòng.", "A view stores that question. Each use runs it again. It is not a backup of the rows."]),
	"x-idx": (T, w, k) => toggle(T, w, k, ["lật từng dòng", "scan every row"], ["tra đúng mã", "look up the id"], ["Không có chỉ mục thì máy đi qua cả bảng.", "With no index the engine walks the whole table."], ["Chỉ mục là mục lục cho cột bạn hay lọc. Nó không sửa một câu sai. Ghi thêm thì chậm hơn.", "An index is a lookup list for a column you filter on. It does not fix a wrong question. Extra writes get slower."]),
	"x-proj": (T, w, k) => toggle(T, w, k, ["tuần tới, cùng kiểu", "next week, same kind"], ["gấp đôi ngân sách", "double the budget"], ["Dự đoán là dòng mới cùng kiểu với các dòng đã học, kèm độ trượt.", "A prediction is a new row of the same kind as the rows you learned from, with a miss-size."], ["Đẩy chi tiêu tới chỗ chưa thấy rồi đọc đường. Đó là giả định, không phải dự báo.", "Push spend somewhere you have not seen, then read the line. That is a what-if, not a forecast."]),
	"x-spec": (T, w, k) => toggle(T, w, k, ["bắt được người rời", "caught the leavers"], ["để yên người ở", "left stayers alone"], ["Độ nhạy = người rời bị gọi / mọi người rời. Cùng là recall.", "Sensitivity = leavers you called / all leavers. That is recall."], ["Độ đặc hiệu = người ở mà bạn không gọi / mọi người ở. Không phải accuracy.", "Specificity = stayers you did not call / all stayers. Not accuracy."]),
	"x-who": (T, w, k) => toggle(T, w, k, ["cả file", "the whole file"], ["chỉ người nghe máy", "only people who picked up"], ["Xác suất học trên cả file thì nói về cả file.", "A probability fit on the whole file talks about the whole file."], ["Chỉ học trên người nghe máy thì đừng gán số đó cho người không nghe.", "If you fit only on people who picked up, do not give that number to people who did not."]),
	"x-drift": (T, w, k) => bars(T, w, k, [[
		"tháng 3",
		"March",
		.5,
		k.CREAM
	], [
		"tháng 12",
		"December",
		1.05,
		k.GOLD
	]], ["Cùng một mô hình. Tỷ lệ và kênh đã đổi. AUC tháng 3 không phải giấy phép cho tháng 12.", "Same model. The rate and the channels moved. March's AUC is not a permit for December."]),
	"x-treeline": (T, w, k) => toggle(T, w, k, ["một đường", "one line"], ["bậc thang", "steps"], ["Đường thẳng là một độ dốc. Nó trượt nếu form nhảy cóc theo nhóm.", "A straight line is one slope. It misses if forms jump by group."], ["Cây cắt thành bậc. Ngoài khoảng đã thấy, bậc cuối chỉ là trung bình của lá mép.", "A tree cuts steps. Outside what it has seen, the last step is only the edge leaf's average."]),
	"x-imp": (T, w, k) => bars(T, w, k, [
		[
			"ghé",
			"visits",
			1.15,
			k.GOLD
		],
		[
			"chi",
			"spend",
			.7,
			k.CREAM
		],
		[
			"tên thứ",
			"weekday",
			.4,
			k.CLAY
		]
	], ["Độ cao là phần làm nhóm sạch hơn khi cắt cột đó. Ví dụ, không phải «ghé gây ra form». Cột sao chép có thể cướp phần.", "The height is how much splits on that column cleaned the groups. An example, not “visits cause forms”. A copy column can steal the credit."]),
	"x-leaf": (T, w, k) => {
		const line = new T.Mesh(new T.BoxGeometry(1.1, .08, .08), new T.MeshBasicMaterial({ color: k.GOLD }));
		const line2 = line.clone();
		line.position.set(-.7, -.2, 0);
		line2.position.set(.7, .45, 0);
		w.add(line, line2);
		chip(T, w, k, "trung bình lá", "leaf average", 0, 1.15, 1.8);
		return (_dt, t, tell) => {
			line2.position.y = .45 + Math.sin(t) * .03;
			say(k, "Lá cây hồi quy là trung bình các dòng rơi vào đó. Không phải một độ dốc. Ra ngoài vết cắt cuối, bạn vẫn nhận số của lá mép.", "A regression-tree leaf is the average of the rows that landed there. Not a slope. Past the last cut you still get the edge leaf's number.", tell);
		};
	},
	"x-kpp": (T, w, k) => toggle(T, w, k, ["hai tâm cùng một đám", "two centers in one clump"], ["tâm cách xa", "centers spread out"], ["Khởi động ngẫu nhiên có thể đặt hai tâm vào một đám. Đám kia không có ai.", "A random start can drop two centers in one clump. The other clump has nobody."], ["K-means++ chọn tâm sau xa tâm trước. Vẫn nên chạy vài lần. Đó không phải bằng chứng k đúng.", "K-means++ picks the next center far from the ones it has. Still run a few starts. That is not proof that k is right."]),
	"x-link": (T, w, k) => toggle(T, w, k, ["dính chỗ gần nhất", "glue the nearest"], ["dính chỗ xa nhất", "glue the farthest"], ["Single linkage lấy khoảng cách hai điểm gần nhất. Dễ nối thành một sợi dài.", "Single linkage uses the closest pair. It can chain into a long snake."], ["Complete lấy hai điểm xa nhất. Cụm chặt hơn. Average ở giữa. Không cái nào là đúng tuyệt đối.", "Complete uses the farthest pair. Tighter clumps. Average sits in between. None of them is the truth."]),
	"x-db": (T, w, k) => {
		for (let i = 0; i < 8; i++) dot(T, w, k, -.6 + i % 4 * .28, .15 + Math.floor(i / 4) * .28, k.GOLD, .08);
		dot(T, w, k, 1.2, .7, k.RUST, .1);
		dot(T, w, k, 1.45, -.35, k.RUST, .1);
		chip(T, w, k, "nhiễu", "noise", 1.3, -1, 1);
		return (_dt, t, tell) => say(k, "Đám đặc là một cụm. Điểm thưa không bị ép vào cụm. Bạn chọn bán kính và số hàng xóm, không chọn k. Bán kính sai thì ra một đám, hoặc toàn nhiễu.", "A dense patch is a cluster. Sparse points are not forced in. You pick a radius and a neighbor count, not k. A bad radius is one blob, or all noise.", tell);
	},
	"x-gmm": (T, w, k) => {
		const mid = dot(T, w, k, .05, .1, k.GOLD, .12);
		for (let i = 0; i < 6; i++) {
			dot(T, w, k, -.8 + Math.cos(i) * .3, Math.sin(i) * .25, k.CREAM, .07);
			dot(T, w, k, .85 + Math.cos(i * 1.3) * .3, Math.sin(i) * .25, k.CLAY, .07);
		}
		return (_dt, t, tell) => {
			mid.material.color.setHex(t % 4 > 2 ? k.GOLD : k.CLAY);
			say(k, "Điểm giữa thuộc cả hai đám một phần. Không bị gán cứng. Hình phải giống bầu dục. Đám hình vòng thì mô hình này kể sai.", "The middle point belongs partly to both clouds. It is not a hard label. The shape is meant to be a blob. A ring-shaped group is the wrong story for this model.", tell);
		};
	},
	"x-kmode": (T, w, k) => bars(T, w, k, [
		[
			"GDN",
			"GDN",
			1.1,
			k.GOLD
		],
		[
			"FB",
			"FB",
			.55,
			k.CREAM
		],
		[
			"TikTok",
			"TikTok",
			.4,
			k.CLAY
		]
	], ["Không có trung bình của một tên kênh. Mode là tên gặp nhiều nhất. K-prototype mới trộn được cột số và cột chữ.", "There is no mean of a channel name. The mode is the name that shows up most. K-prototype is what mixes a number column and a text column."]),
	"x-stem": (T, w, k) => toggle(T, w, k, ["studies → studi", "studies → studi"], ["studies → study", "studies → study"], ["Stem cắt đuôi. Nhanh, và có thể thành một từ không có trong từ điển.", "A stem chops the ending. Fast, and it can become a word that is not in the dictionary."], ["Lemma đưa về từ từ điển. Cả hai đều vứt hình thái. Chúng có thể dán hai nghĩa khác vào một chữ.", "A lemma returns the dictionary word. Both throw the form away. They can glue two meanings onto one token."]),
	"x-pmi": (T, w, k) => bars(T, w, k, [[
		"chờ lâu",
		"long wait",
		1.15,
		k.GOLD
	], [
		"và spa",
		"and spa",
		.35,
		k.CREAM
	]], ["«chờ lâu» đi cùng nhiều hơn nếu hai từ độc lập. «và» đi với mọi thứ nên không được điểm. Đó không phải ngữ pháp.", "“Long wait” shows up together more than if the two words were independent. “And” goes with everything, so it scores low. This is not grammar."]),
	"x-git": (T, w, k) => chain(T, w, k, ["Mỗi ô là một ảnh của file, kèm một câu. Không phải nút Save trong đầu bạn.", "Each block is a snapshot of the files, plus a sentence. Not a Save button that lives in your head."], false),
	"x-branch": (T, w, k) => chain(T, w, k, ["Nhánh thử đi riêng. Nhánh chính đứng yên cho tới khi bạn nhập lại.", "The try-line goes off on its own. Main stays put until you merge."], true),
	"x-vote": (T, w, k) => {
		const votes = [
			1,
			1,
			0,
			1,
			1
		].map((v, i) => box(T, w, k, (i - 2) * .55, .35, .38, .38, v ? k.GOLD : k.CREAM));
		const out = chip(T, w, k, "4 trên 5", "4 of 5", 0, -.7, 1.4);
		return (_dt, t, tell) => {
			const i = Math.floor(t / .7) % 5;
			votes.forEach((m, knd) => {
				m.position.y = knd === i ? .55 : .35;
			});
			out.visible = true;
			say(k, "Năm cây bỏ phiếu. Kết quả là số đông, không phải cây nào cũng đúng. Rừng giảm nhảy, không sửa một họ mô hình vốn đã lệch.", "Five trees vote. The result is the majority, not a claim that every tree is right. A forest calms the jump. It does not fix a family of models that was already biased.", tell);
		};
	},
	"x-boot": (T, w, k) => {
		const chips = [
			0,
			1,
			2,
			3,
			4
		].map((i) => dot(T, w, k, -1.2 + i * .45, .4, k.CREAM, .1));
		return (_dt, t, tell) => {
			const skip = Math.floor(t) % 5;
			chips.forEach((m, i) => {
				m.position.y = i === skip ? -.4 : .45 + (i === (skip + 2) % 5 ? .25 : 0);
			});
			say(k, "Rút lại đủ số dòng, có hoàn lại. Có dòng vào hai lần, có dòng bị bỏ. Mỗi cây thấy một túi hơi khác.", "Draw the same number of rows, with replacement. Some rows enter twice. Some are left out. Each tree sees a slightly different bag.", tell);
		};
	},
	"x-rf": (T, w, k) => toggle(T, w, k, ["mọi cột đều được xét", "every column is offered"], ["chỉ vài cột ngẫu nhiên", "only a few random columns"], ["Cây nào cũng cắt cột mạnh nhất. Các cây giống hệt nhau.", "Every tree cuts the strongest column. The trees are copies."], ["Mỗi nhát cắt chỉ được nhìn một nhóm cột rút ngẫu nhiên. Cây bớt giống nhau.", "Each cut may look only at a random handful of columns. The trees look less alike."]),
	"x-imb": (T, w, k) => bars(T, w, k, [[
		"ở 92",
		"stay 92",
		1.2,
		k.CREAM
	], [
		"rời 8",
		"leave 8",
		.28,
		k.GOLD
	]], ["Gọi không ai rời thì đúng 92%. Bạn không giữ được ai. Accuracy không phải brief.", "Call nobody a leaver and you are 92% right. You kept nobody. Accuracy is not the brief."]),
	"x-weight": (T, w, k) => toggle(T, w, k, ["nhân đôi dòng hiếm", "duplicate the rare rows"], ["tăng giá của dòng hiếm", "raise the cost of a rare row"], ["Nhân đôi không tạo khách mới. Làm trước khi chia tập thì cùng một người lọt cả hai phía.", "Duplicating does not create a new customer. Do it before the split and the same person lands on both sides."], ["Tăng trọng số đổi cái giá của một lần bỏ sót. Vẫn là những dòng cũ. Đổi ngưỡng thường là nút nên thử trước.", "A class weight changes the cost of a miss. The rows are the old rows. Moving the threshold is usually the lever to try first."]),
	"x-bv": (T, w, k) => toggle(T, w, k, ["đường thẳng trên hình cong", "a line on a curve"], ["khớp từng điểm nhiễu", "a fit on each noisy point"], ["Lệch: họ mô hình không đủ hình. Cả tập học lẫn tập mới đều trượt.", "Bias: the family cannot make that shape. Both the training rows and new rows miss."], ["Nhảy: đổi mẫu là đổi đường. Tập học đẹp, tập mới xấu.", "Variance: change the sample and the line changes. Training looks good. New rows look bad."]),
	"x-ridge": (T, w, k) => {
		const a = k.peg(T, -.7, 1.15, k.CREAM, .4);
		const b = k.peg(T, .7, 1.05, k.CREAM, .4);
		w.add(a, b);
		return (_dt, t, tell) => {
			const s = .55 + .45 * (.5 + .5 * Math.sin(t * .8));
			a.scale.y = 1.15 * s;
			b.scale.y = 1.05 * s;
			a.position.y = -1.05 + a.scale.y / 2;
			b.position.y = -1.05 + b.scale.y / 2;
			say(k, "Ridge phạt tổng bình phương hệ số. Cột co về 0, ít khi thành đúng 0. Phải đưa cột về cùng thước trước. Đây không phải xếp hạng nguyên nhân.", "Ridge penalises the sum of squared coefficients. Columns shrink toward 0 and rarely become exactly 0. Put columns on one scale first. This is not a causal ranking.", tell);
		};
	},
	"x-lasso": (T, w, k) => {
		const a = k.peg(T, -.7, 1.1, k.GOLD, .4);
		const b = k.peg(T, .7, .8, k.CLAY, .4);
		w.add(a, b);
		chip(T, w, k, "còn", "kept", -.7, -1.25, .8);
		chip(T, w, k, "về 0", "to 0", .7, -1.25, .9);
		return (_dt, t, tell) => {
			const kill = t % 6 > 3;
			b.scale.y = kill ? .05 : .8;
			b.position.y = -1.05 + b.scale.y / 2;
			say(k, "Lasso phạt tổng trị tuyệt đối. Một cột có thể thành đúng 0. Số 0 phụ thuộc thước đo của cột. Không có nghĩa cột đó vô dụng ngoài đời.", "Lasso penalises the sum of absolute coefficients. A column can become exactly 0. The zero depends on the column's scale. It does not mean the column is useless in the world.", tell);
		};
	},
	"x-rmse": (T, w, k) => bars(T, w, k, [
		[
			"trượt 2",
			"miss 2",
			.4,
			k.CREAM
		],
		[
			"trượt 2",
			"miss 2",
			.4,
			k.CREAM
		],
		[
			"trượt 10",
			"miss 10",
			1.2,
			k.GOLD
		]
	], ["RMSE bình phương rồi lấy căn, nên tuần trượt 10 form bị phạt nặng. MAE cộng đều. R² vẫn là phần phương sai, không phải phần tuần nằm trên đường.", "RMSE squares then takes a root, so a week that misses by 10 forms is punished hard. MAE adds them evenly. R² is still a share of variance, not the share of weeks on the line."]),
	"x-log": (T, w, k) => toggle(T, w, k, ["một tuần rất to", "one huge week"], ["log kéo đuôi lại", "log pulls the tail in"], ["Chi tiêu vài tuần gấp chục lần tuần khác. Trung bình bị tuần đó chiếm.", "A few weeks of spend are tens of times the others. The mean is that week."], ["Log kéo đuôi. Log của 0 không có. Phải chọn log(1 + x) hoặc một luật khác, và nói lại đơn vị.", "Log pulls the tail in. Log of 0 does not exist. You must choose log(1 + x) or another rule, and translate the unit back."]),
	"x-hot": (T, w, k) => bars(T, w, k, [
		[
			"GDN",
			"GDN",
			.9,
			k.GOLD
		],
		[
			"FB",
			"FB",
			.3,
			k.CREAM
		],
		[
			"TikTok",
			"TikTok",
			.3,
			k.INK
		]
	], ["Mỗi kênh một cột 0/1. Mô hình có hệ số chặn thì bỏ một cột, nếu không là bẫy biến giả. Cây thì có thể giữ cả ba.", "One 0/1 column per channel. A model with an intercept drops one column, or it is the dummy trap. A tree can keep all three."]),
	"x-clock": (T, w, k) => toggle(T, w, k, ["một số tăng dần", "one rising number"], ["thứ, giờ, tháng", "weekday, hour, month"], ["Một mốc thời gian để nguyên chủ yếu nói «muộn hơn».", "A raw timestamp mostly says “later”."], ["Tách cái bạn định dùng: thứ, giờ, tháng. Chủ nhật và thứ hai không phải hai bậc của một đường thẳng.", "Split out what you mean: weekday, hour, month. Sunday and Monday are not two steps on a straight line."]),
	"x-cv": (T, w, k) => {
		const folds = [
			0,
			1,
			2,
			3
		].map((i) => box(T, w, k, (i - 1.5) * .7, 0, .55, .7, k.CREAM));
		return (_dt, t, tell) => {
			const on = Math.floor(t / 1.1) % 4;
			folds.forEach((m, i) => {
				m.material.color.setHex(i === on ? k.GOLD : k.CREAM);
			});
			say(k, "Mỗi lượt giấu một miếng, học phần còn lại. Điểm là trung bình các lần giấu. Chỉnh mô hình trên chính các lần đó thì điểm hơi đẹp hơn sự thật.", "Each round hides one slice and learns on the rest. The score is the average of those hides. Tune on those same rounds and the score is a bit prettier than the truth.", tell);
		};
	},
	"x-grid": (T, w, k) => toggle(T, w, k, ["mọi ô bạn liệt kê", "every cell you listed"], ["rút vài ô trong khoảng", "draw a few cells in the range"], ["Lưới thử hết tổ hợp bạn viết. Độ sâu bạn không viết thì không được thử.", "A grid tries every combination you wrote down. A depth you left out is never tried."], ["Rút ngẫu nhiên đỡ tốn khi nhiều nút vô hại. Vẫn chỉ trong khoảng bạn đặt.", "A random draw wastes less when many knobs do nothing. It still stays inside the ranges you set."]),
	"x-order": (T, w, k) => series(T, w, k, [
		.2,
		.15,
		.25,
		.1,
		.3,
		.55,
		.4,
		.7,
		.5
	], 9, ["Tuần đứng theo thứ tự. Xáo thì mất cái bạn định dự báo.", "The weeks stay in order. Shuffle them and you lose the thing you meant to forecast."], false),
	"x-dep": (T, w, k) => toggle(T, w, k, ["mỗi tuần một phiếu độc lập", "each week an independent draw"], ["tuần này giống tuần trước", "this week looks like last week"], ["Hồi quy thường tính như các dòng không kéo nhau. Sai số chuẩn rồi sẽ tự tin quá mức.", "Regression usually counts rows as if they do not pull each other. The standard error then gets too confident."], ["Phần dư tuần này giống tuần trước. Đó là chuỗi thời gian, không phải một đống dòng.", "This week's miss looks like last week's. That is a time series, not a pile of rows."]),
	"x-decomp": (T, w, k) => toggle(T, w, k, ["cộng thêm một mùa", "add a season"], ["nhân một mùa", "multiply a season"], ["Cộng: tháng lễ thêm khoảng 20 form, dù nền cao hay thấp.", "Additive: the festival month adds about 20 forms, whether the base is high or low."], ["Nhân: tháng lễ là ×1,4. Nền gấp đôi thì phần mùa cũng to hơn. Phải chọn, đừng đoán.", "Multiplicative: the festival month is ×1.4. Double the base and the seasonal swing grows. You have to choose. Do not guess."]),
	"x-naive": (T, w, k) => series(T, w, k, [
		-.2,
		0,
		.1,
		-.1,
		.2,
		.15,
		.35,
		.35
	], 7, ["Chấm vàng là «bằng tuần trước». Mô hình nào không thắng được câu này thì chưa xong.", "The gold dot is “same as last week”. A model that cannot beat that sentence is not done."]),
	"x-sma": (T, w, k) => {
		const ds = [
			.3,
			.8,
			.4,
			.9,
			.5,
			1.1,
			.45
		].map((h, i) => k.peg(T, (i - 3) * .42, h, k.CREAM, .28));
		ds.forEach((m) => w.add(m));
		return (_dt, t, tell) => {
			const on = 3 + Math.floor(t * .5 % 2);
			ds.forEach((m, i) => {
				m.material.color.setHex(i > on - 3 && i <= on ? k.GOLD : k.CREAM);
			});
			say(k, "Trung bình 3 tuần gần nhất, mỗi tuần một suất. Khúc cua bị chậm. Tuần lễ và tuần thường bị cân như nhau.", "The average of the last 3 weeks, each week one share. Turns show up late. A festival week and an ordinary week are weighed the same.", tell);
		};
	},
	"x-ses": (T, w, k) => bars(T, w, k, [
		[
			"tuần cũ",
			"old week",
			.4,
			k.CREAM
		],
		[
			"tuần giữa",
			"middle",
			.7,
			k.CLAY
		],
		[
			"tuần này",
			"this week",
			1.15,
			k.GOLD
		]
	], ["San bằng mũ: tuần này nặng hơn tuần cũ. Một hệ số α. Không có dốc, không có mùa. α gần 1 thì chạy theo nhiễu.", "Exponential smoothing: this week weighs more than an old week. One coefficient α. No slope, no season. α near 1 chases the noise."]),
	"x-holt": (T, w, k) => series(T, w, k, [
		-.5,
		-.35,
		-.15,
		.05,
		.2,
		.45,
		.7,
		.95
	], 6, ["Holt cộng thêm một dốc. Đẩy xa thì dốc cứ chạy. Một tháng lễ không phải một dốc cả năm.", "Holt adds a slope. Push it far and the slope keeps running. One festival month is not a slope for the whole year."]),
	"x-hw": (T, w, k) => {
		return series(T, w, k, [
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9
		].map((i) => Math.sin(i * 1.3) * .45 + i * .04), 8, ["Holt-Winters thêm mùa. Bạn phải đưa chu kỳ, 7 hoặc 52. Nó không tự tìm. Cần hơn một vòng mùa để thấy hình.", "Holt-Winters adds a season. You have to give the period, 7 or 52. It does not find it. You need more than one full cycle to see the shape."]);
	},
	"x-mape": (T, w, k) => bars(T, w, k, [
		[
			"10 form",
			"10 forms",
			.7,
			k.CREAM
		],
		[
			"0 form",
			"0 forms",
			.12,
			k.RUST
		],
		[
			"40 form",
			"40 forms",
			1.15,
			k.GOLD
		]
	], ["MAPE chia cho số thật. Tuần 0 form thì gãy. MAE vẫn tính bằng form. RMSE phạt tuần lệch lớn.", "MAPE divides by the actual. A week with 0 forms breaks it. MAE is still in forms. RMSE punishes a large miss."]),
	"x-walk": (T, w, k) => {
		const folds = [
			0,
			1,
			2,
			3,
			4,
			5
		].map((i) => box(T, w, k, (i - 2.5) * .48, 0, .38, .55, k.CREAM));
		return (_dt, t, tell) => {
			const cut = 3 + Math.floor(t / 1.4) % 2;
			folds.forEach((m, i) => {
				m.material.color.setHex(i < cut ? k.CREAM : i === cut ? k.GOLD : k.INK);
			});
			say(k, "Học trên quá khứ, chấm trên đoạn sau, rồi cuốn tới. Xáo tuần vào các fold sẽ cho mô hình nhìn thấy tương lai.", "Learn on the past, score the next block, then roll forward. Shuffling weeks into folds lets the model see the future.", tell);
		};
	},
	"x-stat": (T, w, k) => toggle(T, w, k, ["mức đứng yên", "the level stays"], ["mức trôi đi", "the level drifts"], ["Dừng: tâm và độ rộng không phụ thuộc lúc nào bạn nhìn.", "Stationary: the center and the width do not depend on when you look."], ["Có xu hướng thì chưa dừng. Lấy hiệu tuần này trừ tuần trước. Dự báo mức thì phải hoàn tác phép trừ đó.", "A trend is not stationary. Take this week minus last week. To forecast a level you have to undo that subtraction."]),
	"x-acf": (T, w, k) => bars(T, w, k, [
		[
			"lag 1",
			"lag 1",
			1.15,
			k.GOLD
		],
		[
			"lag 2",
			"lag 2",
			.7,
			k.CREAM
		],
		[
			"lag 3",
			"lag 3",
			.4,
			k.CREAM
		],
		[
			"lag 4",
			"lag 4",
			.2,
			k.INK
		]
	], ["ACF là tương quan với tuần cách k bước. PACF là phần còn lại sau khi đã tính các bước gần hơn. Đây là gợi ý, không phải bằng chứng, và chuỗi ngắn hay nói dối.", "ACF is the correlation with the week k steps back. PACF is what is left after the nearer steps are accounted for. A hint, not a proof, and a short series often lies."]),
	"x-ar": (T, w, k) => series(T, w, k, [
		-.2,
		.1,
		0,
		.25,
		.15,
		.35,
		.3,
		.5
	], 8, ["AR đoán tuần này từ vài tuần trước đó. Không phải từ các cú sốc.", "An AR guesses this week from a few earlier weeks. Not from the shocks."], false),
	"x-mam": (T, w, k) => toggle(T, w, k, ["trung bình trượt", "a moving average"], ["sốc của tuần trước", "last week's shock"], ["Trung bình trượt là làm mượt: cộng vài tuần rồi chia.", "A moving-average smoother evens things out: add a few weeks and divide."], ["MA trong ARIMA là cú sốc cũ còn vương lại. Cùng chữ, khác việc. Đừng trộn.", "The MA in ARIMA is an old shock still hanging around. Same word, different job. Do not mix them."]),
	"x-arima": (T, w, k) => toggle(T, w, k, ["lấy hiệu, rồi ARMA", "difference, then ARMA"], ["thêm mùa và một cột", "add a season and a column"], ["ARIMA lấy hiệu d lần cho chuỗi chịu đứng yên, rồi mới AR và MA. d = 1 là đoán cái thay đổi.", "ARIMA differences d times until the series can sit still, then adds AR and MA. d = 1 means you forecast the change."], ["SARIMA thêm chu kỳ. SARIMAX thêm một cột như khuyến mãi. Cột đó ở tuần tới phải biết trước, nếu không bạn đang đoán luôn cả khuyến mãi.", "SARIMA adds a period. SARIMAX adds a column such as a promo. You must already know that column next week, or you are forecasting the promo too."]),
	"x-sys": (T, w, k) => toggle(T, w, k, ["một điểm chung", "one shared point"], ["không có điểm nào", "no shared point"], ["Hai đường cắt nhau: một nghiệm. Ví dụ (2, 1).", "Two lines cross: one solution. Example (2, 1)."], ["Hai đường song song và mâu thuẫn: không có điểm nào thỏa cả hai. Đừng bịa một nghiệm.", "Parallel and contradictory: no point sits on both. Do not invent a solution."]),
	"x-vadd": (T, w, k) => toggle(T, w, k, ["cộng từng ô", "add slot by slot"], ["nhân mọi ô", "multiply every slot"], ["(10, 80) + (2, 5) = (12, 85). Không cộng chéo.", "(10, 80) + (2, 5) = (12, 85). Do not add across."], ["Nhân 2 là (20, 160). Mọi ô cùng một hệ số. Đường không qua gốc thì nhân sẽ rời đường.", "Times 2 is (20, 160). Every slot shares one factor. A line that misses the origin leaves the line when you scale."]),
	"x-arrow": (T, w, k) => {
		const shaft = new T.Mesh(new T.BoxGeometry(1.6, .05, .05), new T.MeshBasicMaterial({ color: k.GOLD }));
		shaft.position.set(.35, .15, 0);
		shaft.rotation.z = .45;
		w.add(shaft);
		chip(T, w, k, "10 triệu", "10 million", 1.15, -.85, 1.4);
		chip(T, w, k, "80 form", "80 forms", -1.15, .85, 1.3);
		return (_dt, t, tell) => {
			shaft.scale.x = .92 + Math.sin(t * 1.4) * .08;
			say(k, "Một véctơ là một danh sách số có thứ tự. (10, 80) là chi và form, không phải một số «tốt hơn».", "A vector is an ordered list of numbers. (10, 80) is spend and forms, not one number that is “better”.", tell);
		};
	},
	"x-dot": (T, w, k) => {
		const a = new T.Mesh(new T.BoxGeometry(1.5, .05, .05), new T.MeshBasicMaterial({ color: k.GOLD }));
		const b = new T.Mesh(new T.BoxGeometry(1.3, .05, .05), new T.MeshBasicMaterial({ color: k.CREAM }));
		a.position.set(.4, -.15, 0);
		w.add(a, b);
		return (_dt, t, tell) => {
			const ang = t % 8 / 8 * Math.PI;
			b.rotation.z = ang;
			b.position.set(Math.cos(ang) * .45, Math.sin(ang) * .45, 0);
			const flat = ang > 1.2 && ang < 1.9;
			say(k, flat ? "Gần vuông góc thì tích vô hướng gần 0. Không cùng hướng." : "Cùng hướng thì tích lớn. (2, 3)·(4, 1) = 11.", flat ? "Near a right angle, the dot product is near 0. They do not share a direction." : "Same direction, the product is large. (2, 3)·(4, 1) = 11.", tell);
		};
	},
	"x-mat": (T, w, k) => {
		const dots = [
			0,
			1,
			2,
			3
		].map((i) => dot(T, w, k, i % 2 * .7 - .2, Math.floor(i / 2) * .7 - .2, k.CREAM, .09));
		return (_dt, t, tell) => {
			const s = 1 + .7 * (.5 + .5 * Math.sin(t));
			dots.forEach((d, i) => {
				const x0 = i % 2 * .7 - .2;
				d.position.x = x0 * s;
			});
			say(k, "Ma trận ăn một véctơ và nhả véctơ khác. Ví dụ kéo trục chi gấp đôi, trục form giữ nguyên.", "A matrix eats a vector and returns another. Example: stretch the spend axis by two, leave the form axis as it is.", tell);
		};
	},
	"x-mul": (T, w, k) => toggle(T, w, k, ["2×3 rồi 3×1", "2×3 then 3×1"], ["3×1 rồi 2×3", "3×1 then 2×3"], ["Hàng của ma trận trái gặp cột của ma trận phải. Khớp số ở giữa thì nhân được.", "A row of the left matrix meets a column of the right. If the middle sizes match, you can multiply."], ["Đảo thứ tự thì số ở giữa không khớp. Không phải nhân từng ô.", "Reverse the order and the middle sizes do not match. It is not cell-by-cell multiply."]),
	"x-det": (T, w, k) => {
		const quad = new T.Mesh(new T.BoxGeometry(1.1, .8, .08), k.lambert(T, k.GOLD));
		w.add(quad);
		const tag = chip(T, w, k, "diện tích ×2", "area ×2", 0, 1.15, 1.8);
		const flatTag = chip(T, w, k, "diện tích 0", "area 0", 0, 1.15, 1.6);
		return (_dt, t, tell) => {
			const flat = t % 7 > 3.5;
			quad.scale.y = flat ? .08 : 1;
			quad.rotation.z = flat ? .4 : .15 * Math.sin(t);
			tag.visible = !flat;
			flatTag.visible = flat;
			say(k, flat ? "Định thức 0: mặt phẳng bị ép thành một đường. Không hoàn tác được." : "Định thức là hệ số nhân diện tích. 2 nghĩa là diện tích gấp đôi. Âm thì lật mặt.", flat ? "Determinant 0: the plane is pressed into a line. You cannot undo it." : "The determinant is the area multiplier. 2 means areas double. Negative flips the face.", tell);
		};
	},
	"x-eigen": (T, w, k) => toggle(T, w, k, ["chỉ dài ra", "it only gets longer"], ["bị quay đi", "it gets turned"], ["Vectơ riêng chỉ bị kéo hoặc lật. Av = λv. Ví dụ trục ngang, λ = 2.", "An eigenvector is only stretched or flipped. Av = λv. Example: the horizontal axis, λ = 2."], ["Vectơ (1, 1) bị ma trận kéo lệch hướng. Không phải vectơ riêng.", "The vector (1, 1) gets its direction changed. It is not an eigenvector."]),
	"x-slope": (T, w, k) => {
		[
			-1.4,
			-.8,
			-.2,
			.4,
			1,
			1.4
		].map((x) => dot(T, w, k, x, -.15 + .35 * x - .22 * x * x, k.CREAM, .07));
		const tan = new T.Mesh(new T.BoxGeometry(1.1, .04, .04), new T.MeshBasicMaterial({ color: k.GOLD }));
		w.add(tan);
		return (_dt, t, tell) => {
			const x = -.4 + Math.sin(t * .7) * .9;
			const y = -.15 + .35 * x - .22 * x * x;
			const slope = .35 - .44 * x;
			tan.position.set(x, y, .1);
			tan.rotation.z = Math.atan(slope);
			say(k, "Đạo hàm là độ dốc của tiếp tuyến tại đúng chỗ đó. Không phải độ dốc của cả đường.", "The derivative is the slope of the tangent at that exact spot. Not the slope of the whole curve.", tell);
		};
	},
	"x-hess": (T, w, k) => toggle(T, w, k, ["lòng bát", "a bowl"], ["yên ngựa", "a saddle"], ["Cong lên mọi phía thì đó là một đáy. Bước nhỏ nào cũng đi lên.", "Curving up in every direction is a bottom. Every small step goes up."], ["Lên một phía, xuống phía kia. Đạo hàm bậc hai một số không đủ khi có hai nút.", "Up on one side, down on the other. One second-derivative number is not enough when there are two knobs."]),
	"x-jac": (T, w, k) => {
		dot(T, w, k, -1.1, 0, k.GOLD, .12);
		const o1 = dot(T, w, k, .7, .45, k.CREAM, .1);
		const o2 = dot(T, w, k, .7, -.45, k.CLAY, .1);
		chip(T, w, k, "một bước chi", "one spend step", -1.1, -.85, 1.6);
		chip(T, w, k, "form", "forms", .7, 1.05, .9);
		chip(T, w, k, "giá", "cost", .7, -1.05, .8);
		return (_dt, t, tell) => {
			const s = .85 + Math.sin(t * 1.5) * .15;
			o1.position.x = .55 + s * .35;
			o2.position.x = .55 + s * .2;
			say(k, "Nhiều đầu ra thì đạo hàm là một bảng: một bước vào làm mỗi đầu ra nhích khác nhau. Đó là Jacobian.", "Several outputs means the derivative is a table: one input step moves each output by a different amount. That is the Jacobian.", tell);
		};
	},
	"x-taylor": (T, w, k) => {
		for (let i = 0; i < 8; i++) {
			const x = -1.5 + i * .42;
			dot(T, w, k, x, .2 * Math.sin(x * 1.4) + .15 * x, k.CREAM, .07);
		}
		const line = new T.Mesh(new T.BoxGeometry(1.3, .04, .04), new T.MeshBasicMaterial({ color: k.GOLD }));
		line.position.set(0, 0, 0);
		line.rotation.z = .25;
		w.add(line);
		return (_dt, t, tell) => {
			line.scale.x = .7 + t % 5 * .12;
			say(k, "Gần một điểm, đường cong giống tiếp tuyến của nó. Đi xa thì đường thẳng nói dối.", "Near one point, the curve looks like its tangent. Far away, the straight line lies.", tell);
		};
	},
	"x-mode": (T, w, k) => bars(T, w, k, [
		[
			"2",
			"2",
			.35,
			k.CREAM
		],
		[
			"4",
			"4",
			1.15,
			k.GOLD
		],
		[
			"5",
			"5",
			.7,
			k.CREAM
		],
		[
			"9",
			"9",
			.28,
			k.INK
		]
	], ["4 xuất hiện nhiều nhất. Mode là 4. Hai số cùng nhiều nhất thì có hai mode. Không có mode của một cái tên nếu bạn đang hỏi trung bình.", "4 shows up most. The mode is 4. Two numbers tied for most means two modes. A name has no mean."]),
	"x-q": (T, w, k) => {
		const axis = new T.Mesh(new T.BoxGeometry(3.1, .04, .04), new T.MeshBasicMaterial({ color: k.CREAM }));
		w.add(axis);
		[
			[
				"Q1",
				"Q1",
				-.8
			],
			[
				"Q2",
				"Q2",
				0
			],
			[
				"Q3",
				"Q3",
				.8
			]
		].forEach(([vi, en, x]) => {
			const m = new T.Mesh(new T.BoxGeometry(.05, .7, .05), new T.MeshBasicMaterial({ color: x === 0 ? k.GOLD : k.CREAM }));
			m.position.set(Number(x), .15, 0);
			w.add(m);
			chip(T, w, k, vi, en, Number(x), -.7, .7);
		});
		return (_dt, t, tell) => say(k, "Sắp dãy rồi cắt bốn phần. Q2 là trung vị. IQR = Q3 − Q1. Phần mềm có thể cắt lệch một ô. Nêu cách cắt.", "Sort the list, then cut four shares. Q2 is the median. IQR = Q3 − Q1. Software can disagree by a point. Name the cut.", tell);
	},
	"x-var": (T, w, k) => toggle(T, w, k, ["chia n − 1", "divide by n − 1"], ["chia n", "divide by n"], ["Mẫu: tổng bình phương lệch 32, chia 7, phương sai khoảng 4,57. Căn ra khoảng 2,14.", "A sample: squared gaps sum to 32, divide by 7, variance about 4.57. The root is about 2.14."], ["Cả nguồn thì chia n. Cùng dãy này ra 4, căn ra 2. Đừng trộn hai cách.", "The whole source divides by n. This same list gives 4, and the root is 2. Do not mix the two."]),
	"x-cov": (T, w, k) => toggle(T, w, k, ["cùng phía trung bình", "same side of the mean"], ["khác phía", "opposite sides"], ["Cùng phía thì hiệp phương sai dương. Đơn vị là đơn vị của x nhân y. Đừng so với một cặp khác đơn vị.", "Same side means positive covariance. The unit is x’s unit times y’s unit. Do not compare it with a pair in other units."], ["Khác phía thì âm. Dấu là câu chuyện. Độ lớn phụ thuộc thước đo.", "Opposite sides means negative. The sign is the story. The size depends on the ruler."])
};
function kitBars(THREE, world, kit, x, y, h, color) {
	const mesh = new THREE.Mesh(new THREE.BoxGeometry(.28, h, .16), kit.lambert(THREE, color));
	mesh.position.set(x, y, 0);
	world.add(mesh);
	return mesh;
}
function buildExtra(THREE, kind, world, kit) {
	const scene = scenes[kind];
	if (scene) return scene(THREE, world, kit);
	const beat = wideBeats[kind];
	if (beat) return toggle(THREE, world, kit, beat.a, beat.b, beat.noteA, beat.noteB);
	return null;
}
var swatchColor = {
	gold: "#f0c14a",
	cream: "#f4efe6",
	clay: "#c4623a",
	rust: "#b5461f",
	ink: "#3a332c",
	axis: "transparent"
};
var legends = {
	field: [
		[
			"cream",
			"Mỗi chấm là một phiên truy cập trong cả nguồn",
			"Each dot is one visit in the whole source"
		],
		[
			"gold",
			"Chấm vàng là loại phiên đang đếm",
			"Gold dots are the kind being counted"
		],
		[
			"gold",
			"Khung vàng là một lần lấy mẫu (một tuần)",
			"The gold frame is one sample (one week)"
		],
		[
			"axis",
			"Số % dưới khung là tỷ lệ trong riêng khung đó",
			"The % under the frame is the rate inside that frame only"
		]
	],
	seats: [[
		"gold",
		"Ba quả cầu A, B, C là ba người",
		"The three balls A, B, C are three people"
	], [
		"ink",
		"Ba bệ đen là ba ghế. Đổi thứ tự là một cách xếp mới",
		"The three dark slabs are three seats. A new order is a new arrangement"
	]],
	group: [[
		"gold",
		"Ba quả cầu là một nhóm. Xoay cả cụm thì vẫn là nhóm đó",
		"The three balls are one group. Spinning it is still the same group"
	]],
	fraction: [[
		"gold",
		"Hai viên vàng là trường hợp thuận (2)",
		"The two gold balls are the favorable cases (2)"
	], [
		"cream",
		"Tám viên kem là các trường hợp còn lại. Tổng là 10",
		"The eight cream balls are the rest. Ten in all"
	]],
	meet: [[
		"gold",
		"Hai quả cầu bên trái có thể xảy ra cùng lúc, nên có vùng chung",
		"The two left balls can happen together, so they share a zone"
	], [
		"cream",
		"Hai quả cầu bên phải loại trừ nhau, không bao giờ gặp",
		"The two right balls exclude each other and never meet"
	]],
	plus: [[
		"gold",
		"Hai vòng tròn là hai sự kiện",
		"The two circles are two events"
	], [
		"axis",
		"Phần hai vòng chồng nhau bị đếm hai lần, nên phải trừ một lần",
		"Where the circles overlap is counted twice, so subtract it once"
	]],
	times: [[
		"gold",
		"Hai cột là hai cửa mà viên bi phải đi qua",
		"The two posts are two doors the ball must pass"
	], [
		"cream",
		"Viên bi đi qua cả hai thì nhân hai xác suất",
		"A ball through both doors means multiplying the two probabilities"
	]],
	flip: [[
		"axis",
		"Chữ rồi số: mỗi việc phải được gán một số (có = 1, không = 0) thì mới tính trung bình được",
		"Words then numbers: each event gets a number (yes = 1, no = 0) so you can average it"
	]],
	cols: [[
		"axis",
		"Ngang: các giá trị có thể xảy ra. Cao: xác suất của giá trị đó",
		"Across: the possible values. Up: the probability of that value"
	], [
		"gold",
		"Cột vàng là giá trị thường gặp nhất",
		"The gold bar is the most common value"
	]],
	"cols-bin": [[
		"axis",
		"Ngang: số lần trúng (0, 1, 2...). Cao: xác suất của số lần đó",
		"Across: number of hits (0, 1, 2...). Up: probability of that count"
	], [
		"gold",
		"Cột vàng gần n × p, số lần trúng hay gặp nhất",
		"The gold bar sits near n × p, the most common hit count"
	]],
	"cols-ghost": [[
		"axis",
		"Ngang: các giá trị có thể có. Cao: xác suất theo giả định",
		"Across: possible values. Up: probability under the assumption"
	], [
		"cream",
		"Cột mờ dần hiện ra: hình dựng từ giả định, trước khi có dữ liệu",
		"Fading bars: a shape built from assumptions, before any data"
	]],
	"cols-cdf": [[
		"axis",
		"Ngang: giá trị. Cao: xác suất của từng giá trị",
		"Across: value. Up: probability of each value"
	], [
		"gold",
		"Khối vàng trượt phủ các cột bên trái. Cộng chúng ra xác suất «ít hơn»",
		"The gold slab slides over the left bars. Adding them gives the “less than” probability"
	]],
	level: [[
		"axis",
		"Thanh ngang là thang xác suất từ 0 đến 1",
		"The bar is the probability scale from 0 to 1"
	], [
		"gold",
		"Kim vàng lúc đầu lắc, rồi đứng yên ở 0,25: mức khi thử nhiều lần",
		"The gold needle first wobbles, then settles at 0.25: the level over many tries"
	]],
	bell: [[
		"axis",
		"Ngang: giá trị. Cao: mức hay gặp của giá trị đó",
		"Across: value. Up: how common that value is"
	], [
		"gold",
		"Vạch vàng giữa: trung bình. Hai vạch hai bên: cách tâm một độ lệch chuẩn",
		"Middle gold line: the mean. Side lines: one standard deviation from the center"
	]],
	"bell-area": [[
		"axis",
		"Ngang: giá trị. Cao: mức hay gặp của giá trị đó",
		"Across: value. Up: how common that value is"
	], [
		"gold",
		"Khối vàng là một khoảng bạn hỏi. Thể tích của nó là xác suất",
		"The gold block is the range you ask about. Its size is the probability"
	]],
	ruler: [[
		"axis",
		"Thước chung: -2, -1, 0, 1, 2 độ lệch chuẩn quanh trung bình",
		"One shared ruler: -2, -1, 0, 1, 2 standard deviations around the mean"
	], [
		"gold",
		"Vạch vàng là vạch thước. Giây và tiền được kéo về cùng thước rồi mới so",
		"Gold ticks are the ruler. Seconds and money are pulled onto it before comparing"
	]],
	pile: [
		[
			"clay",
			"Cột nâu bên trái: từng phiên, rất lệch nhau",
			"Brown bars on the left: single sessions, very scattered"
		],
		[
			"cream",
			"Hạt kem bên phải: trung bình của mỗi mẫu, rơi dần thành ụ",
			"Cream beads on the right: the mean of each sample, piling up into a mound"
		],
		[
			"gold",
			"Vạch vàng: số thật. Mẫu lớn thì ụ khít vào đây",
			"Gold line: the true value. A large sample makes the mound hug it"
		]
	],
	covers: [
		[
			"gold",
			"Vạch vàng đứng: số thật, thứ ta không biết",
			"The upright gold line: the true value we cannot see"
		],
		[
			"cream",
			"Mỗi thanh ngang là một khoảng tin cậy tính từ một mẫu",
			"Each horizontal bar is a confidence interval from one sample"
		],
		[
			"rust",
			"Thanh đỏ: khoảng trượt, không chạm số thật",
			"The red bar: an interval that misses the true value"
		]
	],
	bias: [[
		"gold",
		"Viên vàng và viên kem là hai loại trong đám",
		"Gold and cream chips are two kinds in the pile"
	], [
		"axis",
		"Khay bên phải: chỉ nhặt vàng thì khay lệch, nhặt cả hai thì giống đám",
		"The tray on the right: only gold makes it biased, both makes it match the pile"
	]],
	divide: [[
		"axis",
		"Ba dòng: xác suất của cả hai, chia cho xác suất của điều đã biết, ra xác suất có điều kiện",
		"Three lines: probability of both, divided by the probability of what you know, gives the conditional probability"
	]],
	priorbar: [[
		"gold",
		"Thanh vàng là mức tin hiện tại (bắt đầu 20%)",
		"The gold bar is your current belief (starting at 20%)"
	], [
		"axis",
		"Tin mới làm thanh dài ra. Nó không nhảy thẳng lên 100%",
		"New news stretches the bar. It does not jump to 100%"
	]],
	jobs: [[
		"gold",
		"Bên trái: đường dốc, đoán một con số",
		"Left: a sloping line, guessing a number"
	], [
		"axis",
		"Bên phải: chỉ có 1 hoặc 0, đoán có hay không",
		"Right: only 1 or 0, guessing yes or no"
	]],
	line: [
		[
			"cream",
			"Mỗi chấm kem là một tuần thật",
			"Each cream dot is a real week"
		],
		[
			"gold",
			"Đường vàng là câu đoán của mô hình",
			"The gold line is the model's guess"
		],
		[
			"axis",
			"Ngang: chi tiêu quảng cáo. Dọc: số form",
			"Across: ad spend. Up: forms"
		]
	],
	"line-resid": [
		[
			"cream",
			"Mỗi chấm kem là một tuần thật",
			"Each cream dot is a real week"
		],
		[
			"gold",
			"Đường vàng là câu đoán của mô hình",
			"The gold line is the model's guess"
		],
		[
			"clay",
			"Que nâu: phần đường đoán trượt (thật trừ đường)",
			"Brown stick: how far the guess missed (real minus line)"
		]
	],
	"line-fit": [
		[
			"cream",
			"Mỗi chấm kem là một tuần thật",
			"Each cream dot is a real week"
		],
		[
			"gold",
			"Đường vàng được chọn để tổng bình phương các que nâu nhỏ nhất",
			"The gold line is chosen to make the squared brown sticks smallest"
		],
		[
			"clay",
			"Que nâu: phần đường trượt",
			"Brown stick: the miss"
		]
	],
	r2: [[
		"gold",
		"Cột vàng cao: phần biến động mà đường giải thích được (70%)",
		"Tall gold bar: the share of variation the line explains (70%)"
	], [
		"cream",
		"Cột kem thấp: phần còn lại chưa giải thích",
		"Short cream bar: what is left unexplained"
	]],
	band: [[
		"cream",
		"Mỗi chấm là phần trượt của một tuần quanh đường",
		"Each dot is how far one week sits from the line"
	], [
		"axis",
		"Dải phẳng: trượt đều, đọc kiểm định được. Hình kèn: trượt rộng dần, đừng tin kiểm định",
		"A flat band: even misses, safe to read the test. A funnel: misses widen, do not trust the test"
	]],
	zero: [[
		"cream",
		"Vạch kem dọc: số 0, nghĩa là không có tác động",
		"The upright cream line: 0, meaning no effect"
	], [
		"gold",
		"Thanh vàng: khoảng tin cậy của độ dốc. Không chạm 0 nên khó nói «không tác động»",
		"Gold bar: the confidence interval of the slope. It misses 0, so “no effect” is hard to say"
	]],
	bowl: [[
		"cream",
		"Các cột kem tạo thành cái bát: chi phí theo từng bộ hệ số",
		"The cream bars form a bowl: cost for each set of coefficients"
	], [
		"gold",
		"Viên vàng lăn xuống đáy bát: bộ hệ số đỡ tệ nhất",
		"The gold ball rolls to the bottom: the least-bad coefficients"
	]],
	"bowl-fast": [[
		"cream",
		"Các cột kem tạo thành cái bát: chi phí theo từng bộ hệ số",
		"The cream bars form a bowl: cost for each set of coefficients"
	], [
		"gold",
		"Viên vàng nhảy quá xa mỗi bước nên vọt qua đáy và chi phí tăng",
		"The gold ball jumps too far each step, shoots past the bottom and the cost rises"
	]],
	many: [[
		"gold",
		"Ba cột là ba thứ cùng thay đổi trong một tuần: chi tiêu, email, khuyến mãi",
		"Three bars are three things changing in the same week: spend, email, promo"
	], [
		"clay",
		"Cột email nâu để dễ phân biệt",
		"The email bar is brown to tell it apart"
	]],
	held: [[
		"gold",
		"Cột vàng: chi tiêu, thứ đang nhích lên",
		"Gold bar: spend, the thing moving up"
	], [
		"ink",
		"Hai cột đen: email và khuyến mãi bị khóa, đứng yên",
		"Two dark bars: email and promo are locked, held still"
	]],
	vif: [[
		"gold",
		"Hai cột vàng và nâu là hai kênh luôn tăng giảm cùng nhau",
		"The gold and brown bars are two channels that always rise and fall together"
	], [
		"axis",
		"Vì đi cùng nhau nên độ dốc từng kênh có thể đảo dấu dù kênh không có hại",
		"Because they move together, each slope can flip sign even if the channel is not harmful"
	]],
	dummy: [
		[
			"gold",
			"Ô vàng: GDN, so với mốc",
			"Gold box: GDN, compared with the baseline"
		],
		[
			"clay",
			"Ô nâu: Facebook, so với mốc",
			"Brown box: Facebook, compared with the baseline"
		],
		[
			"ink",
			"Ô đen: TikTok là mốc, được bỏ ra để so",
			"Dark box: TikTok is the baseline, dropped as the reference"
		]
	],
	pick: [[
		"cream",
		"Ba cột kem: biến giữ lại",
		"Three cream bars: variables to keep"
	], [
		"clay",
		"Cột nâu nhấp nháy: biến nhiễu, không đổi quyết định nên bỏ",
		"The blinking brown bar: a noise variable that changes no decision, so drop it"
	]],
	escape: [
		[
			"cream",
			"Hai thanh kem ngang là 0 và 1, hai biên của xác suất",
			"The two cream bars are 0 and 1, the limits of a probability"
		],
		[
			"gold",
			"Đường vàng thẳng chui ra ngoài hai biên",
			"The straight gold line leaves both limits"
		],
		[
			"rust",
			"Chấm đỏ: chỗ đường ra ngoài, xác suất không thể thế",
			"Red dots: where the line escapes, which a probability cannot do"
		]
	],
	sig: [
		[
			"axis",
			"Ngang: điểm tổng hợp của mô hình. Dọc: xác suất, từ 0 đến 1",
			"Across: the model's combined score. Up: probability from 0 to 1"
		],
		[
			"cream",
			"Đường chữ S: xác suất không bao giờ ra ngoài 0 và 1",
			"The S curve: probability never leaves 0 and 1"
		],
		[
			"gold",
			"Chấm vàng: một khách cụ thể với xác suất 0,35",
			"Gold dot: one specific customer at probability 0.35"
		]
	],
	odds: [[
		"gold",
		"Thanh vàng dài ra gấp 1,04 lần mỗi ngày thêm: odds nhân lên, không cộng điểm phần trăm",
		"The gold bar stretches ×1.04 per extra day: odds multiply, they do not add percentage points"
	]],
	cm: [
		[
			"gold",
			"Ô vàng: nói rời và thật sự rời (đúng)",
			"Gold: said leave and truly left (right)"
		],
		[
			"cream",
			"Ô kem: nói rời nhưng ở lại (gọi nhầm), và nói ở lại và ở lại (ổn)",
			"Cream: said leave but stayed (false alarm), and said stay and stayed (fine)"
		],
		[
			"rust",
			"Ô đỏ: thật sự rời nhưng bị bỏ sót, thứ đắt nhất",
			"Red: truly left but missed, the costly one"
		]
	],
	pr: [[
		"axis",
		"Hai trạng thái: danh sách sạch (ít người nhưng đúng) và lưới rộng (bắt thêm người rời, kèm gọi nhầm)",
		"Two states: a clean list (few people, mostly right) and a wide net (catches more leavers, plus false alarms)"
	]],
	roc: [
		[
			"axis",
			"Ngang: tỷ lệ báo nhầm. Dọc: tỷ lệ bắt đúng",
			"Across: false alarm rate. Up: true catch rate"
		],
		[
			"cream",
			"Đường chấm kem: mọi ngưỡng có thể chọn",
			"The cream dots: every threshold you could pick"
		],
		[
			"gold",
			"Chấm vàng di chuyển: một ngưỡng cụ thể",
			"The moving gold dot: one particular threshold"
		]
	],
	rests: [[
		"axis",
		"Ba đường chữ S A, B, C: mỗi nhãn một đường xác suất riêng",
		"Three S curves A, B, C: one probability curve per label"
	], [
		"gold",
		"Đường vàng ở giữa là nhãn B, nổi bật để so với hai nhãn kia",
		"The gold middle curve is label B, picked out to compare with the other two"
	]],
	split: [[
		"gold",
		"Vạch vàng là một câu hỏi đúng/sai chia người làm hai phía",
		"The gold line is one yes/no question that splits people into two sides"
	], [
		"clay",
		"Chấm nâu: nhóm ở bên trái. Chấm vàng: nhóm bên phải",
		"Brown dots: the left group. Gold dots: the right group"
	]],
	gini: [[
		"axis",
		"Trái: nhóm trước khi cắt, lẫn hai màu (độ lẫn 0,48). Phải: sau khi cắt, ít lẫn hơn",
		"Left: the group before cutting, both colors mixed (impurity 0.48). Right: after cutting, less mixed"
	], [
		"gold",
		"Hai màu vàng và nâu là hai kết cục khác nhau",
		"Gold and brown are the two different outcomes"
	]],
	deep: [[
		"axis",
		"Cây từ trên xuống: mỗi ô là một câu hỏi, mỗi nhánh vàng là một câu trả lời",
		"The tree from the top: each box is a question, each gold branch an answer"
	], [
		"axis",
		"Cây sâu tách tới từng người: học thuộc dữ liệu cũ, không còn là luật dùng lại",
		"A deep tree cuts down to one person: memorizing old data, not a reusable rule"
	]],
	raw: [[
		"cream",
		"Các chấm kem không có màu hay nhãn: dữ liệu chưa có cột câu trả lời",
		"Dots with no color or label: data with no answer column"
	]],
	km: [[
		"gold",
		"Quả to vàng và nâu là hai tâm cụm",
		"The two big balls, gold and brown, are cluster centers"
	], [
		"cream",
		"Mỗi chấm nhỏ đổi sang màu của tâm gần nhất, rồi tâm dời vào giữa các chấm của nó",
		"Each small dot takes the color of its nearest center, then the center moves to the middle of its dots"
	]],
	elbow: [[
		"axis",
		"Ngang: số nhóm K từ ít tới nhiều. Cao: độ lỏng lẻo trong nhóm",
		"Across: number of groups K, few to many. Up: looseness inside groups"
	], [
		"gold",
		"Cột vàng: chỗ gập, nơi cột bắt đầu bẹt",
		"Gold bar: the bend, where bars start to flatten"
	]],
	merge: [[
		"axis",
		"Các chấm dưới cùng là từng điểm dữ liệu. Chấm gần nhau được dán trước, đi lên như một cây phân cấp",
		"The bottom dots are single data points. Close ones glue first and rise like a hierarchy tree"
	]],
	tok: [[
		"axis",
		"Bốn chữ là bốn mảnh sau khi cắt câu",
		"Four words are four pieces after cutting the sentence"
	], [
		"axis",
		"Từ hư («và», «của») mờ đi, chữ có nghĩa được giữ lại để đếm",
		"Filler words fade, meaningful words stay to be counted"
	]],
	bow: [[
		"gold",
		"Cột vàng: số lần mỗi chữ xuất hiện",
		"Gold bar: how often each word appears"
	], [
		"axis",
		"Chữ đổi chỗ nhưng độ cao cột không đổi: thứ tự câu đã mất",
		"Words swap places but bar heights stay: sentence order is lost"
	]],
	tfidf: [[
		"ink",
		"Cột đen thấp: «spa» có mặt ở mọi bài nên bị hạ điểm",
		"Short dark bar: “spa” appears in every review so it is scored down"
	], [
		"gold",
		"Cột vàng cao: «chờ» hiếm nên được giữ điểm cao",
		"Tall gold bar: “waited” is rare so it keeps a high score"
	]],
	edit: [[
		"axis",
		"Bốn chữ cái S P A A, rồi chữ A thứ hai rơi: một lần sửa đưa «spaa» về «spa»",
		"Four letters S P A A, then the second A drops: one edit turns “spaa” into “spa”"
	]],
	steps: [[
		"axis",
		"Bốn bước xếp dọc, bước đang nói tới nhích ra: quyết định, giả thuyết, dữ liệu rồi mới đến mô hình",
		"Four steps stacked, the current one slides out: decision, hypothesis, data, and only then the model"
	]],
	target: [[
		"axis",
		"Trái: tỷ lệ form hiện tại. Phải: mục tiêu",
		"Left: the current form rate. Right: the goal"
	], [
		"axis",
		"Dòng dưới là ràng buộc giá phải giữ",
		"The bottom line is the cost limit to respect"
	]]
};
var CREAM = 16052198;
var GOLD = 15778122;
var CLAY = 12870202;
var RUST = 11879967;
var INK = 3814188;
function smooth(u) {
	const x = Math.min(1, Math.max(0, u));
	return x * x * (3 - 2 * x);
}
function lambert(THREE, color, opacity = 1) {
	return new THREE.MeshLambertMaterial({
		color,
		transparent: opacity < 1,
		opacity,
		depthWrite: opacity >= 1
	});
}
function label(THREE, text, width = 1.7) {
	const canvas = document.createElement("canvas");
	canvas.width = 512;
	canvas.height = 160;
	const g = canvas.getContext("2d");
	const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true }));
	if (!g) return sprite;
	g.clearRect(0, 0, 512, 160);
	g.textAlign = "center";
	g.textBaseline = "middle";
	let size = 64;
	g.font = `600 ${size}px Georgia, serif`;
	while (g.measureText(text).width > 470 && size > 28) {
		size -= 4;
		g.font = `600 ${size}px Georgia, serif`;
	}
	const bar = Math.min(504, g.measureText(text).width + 56);
	g.fillStyle = "rgba(20,17,14,0.9)";
	g.fillRect(256 - bar / 2, 28, bar, 104);
	g.fillStyle = "#f4efe6";
	g.fillText(text, 256, 80);
	const tex = new THREE.CanvasTexture(canvas);
	tex.colorSpace = THREE.SRGBColorSpace;
	const mat = sprite.material;
	mat.map = tex;
	mat.depthTest = false;
	sprite.renderOrder = 10;
	const w = Math.max(width, 1.45);
	sprite.scale.set(w, w * .31, 1);
	return sprite;
}
function peg(THREE, x, h, color, w = .28) {
	const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, 1, .28), lambert(THREE, color));
	mesh.scale.y = Math.max(.05, h);
	mesh.position.set(x, -1.05 + mesh.scale.y / 2, 0);
	return mesh;
}
function show(list, index) {
	list.forEach((item, i) => {
		item.visible = i === index;
	});
}
var line = (vi) => vi;
function L(vi, en) {
	return line(vi, en);
}
function build(THREE, kind, world) {
	const extra = buildExtra(THREE, kind, world, {
		L,
		label,
		peg,
		lambert,
		smooth,
		CREAM,
		GOLD,
		CLAY,
		RUST,
		INK
	});
	if (extra) return extra;
	if (kind === "field") return field(THREE, world);
	if (kind === "seats") return seats(THREE, world);
	if (kind === "group") return group(THREE, world);
	if (kind === "fraction") return fraction(THREE, world);
	if (kind === "meet") return meet(THREE, world);
	if (kind === "plus") return plus(THREE, world);
	if (kind === "times") return times(THREE, world);
	if (kind === "flip") return flip(THREE, world);
	if (kind === "cols" || kind === "cols-bin" || kind === "cols-ghost" || kind === "cols-cdf") return cols(THREE, world, kind);
	if (kind === "level") return level(THREE, world);
	if (kind === "bell" || kind === "bell-area") return bell(THREE, world, kind === "bell-area");
	if (kind === "ruler") return ruler(THREE, world);
	if (kind === "pile") return pile(THREE, world);
	if (kind === "covers") return covers(THREE, world);
	if (kind === "bias") return bias(THREE, world);
	if (kind === "divide") return divide(THREE, world);
	if (kind === "priorbar") return priorbar(THREE, world);
	if (kind === "jobs") return jobs(THREE, world);
	if (kind === "line" || kind === "line-fit" || kind === "line-resid") return fitLine(THREE, world, kind);
	if (kind === "r2") return r2(THREE, world);
	if (kind === "band") return band(THREE, world);
	if (kind === "zero") return zero(THREE, world);
	if (kind === "bowl" || kind === "bowl-fast") return bowl(THREE, world, kind === "bowl-fast");
	if (kind === "many") return many(THREE, world);
	if (kind === "held") return held(THREE, world);
	if (kind === "vif") return vif(THREE, world);
	if (kind === "dummy") return dummy(THREE, world);
	if (kind === "pick") return pick(THREE, world);
	if (kind === "escape") return escape(THREE, world);
	if (kind === "sig") return sig(THREE, world);
	if (kind === "odds") return odds(THREE, world);
	if (kind === "cm") return cm(THREE, world);
	if (kind === "pr") return pr(THREE, world);
	if (kind === "roc") return roc(THREE, world);
	if (kind === "rests") return rests(THREE, world);
	if (kind === "split") return split(THREE, world);
	if (kind === "gini") return gini(THREE, world);
	if (kind === "deep") return deep(THREE, world);
	if (kind === "raw") return raw(THREE, world);
	if (kind === "km") return km(THREE, world);
	if (kind === "elbow") return elbow(THREE, world);
	if (kind === "merge") return merge(THREE, world);
	if (kind === "tok") return tok(THREE, world);
	if (kind === "bow") return bow(THREE, world);
	if (kind === "tfidf") return tfidf(THREE, world);
	if (kind === "edit") return edit(THREE, world);
	if (kind === "steps") return steps(THREE, world);
	if (kind === "target") return target(THREE, world);
	return field(THREE, world);
}
function field(THREE, world) {
	const dots = [];
	for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) {
		const gold = (c * 3 + r) % 5 === 0;
		const dot = new THREE.Mesh(new THREE.SphereGeometry(.09, 12, 12), lambert(THREE, gold ? GOLD : CREAM));
		dot.position.set((c - 2.5) * .58, (r - 1.5) * .5, 0);
		world.add(dot);
		dots.push(dot);
	}
	const frame = new THREE.Group();
	const edge = new THREE.MeshBasicMaterial({ color: GOLD });
	const hw = .62;
	const hh = .52;
	const t = .045;
	[
		[
			0,
			hh,
			1.285,
			t
		],
		[
			0,
			-.52,
			1.285,
			t
		],
		[
			-.62,
			0,
			t,
			hh * 2
		],
		[
			hw,
			0,
			t,
			hh * 2
		]
	].forEach(([x, y, w, h]) => {
		const bar = new THREE.Mesh(new THREE.BoxGeometry(w, h, .02), edge);
		bar.position.set(x, y, 0);
		frame.add(bar);
	});
	world.add(frame);
	const captions = [
		"3%",
		"2%",
		"4%"
	].map((text) => label(THREE, text, 1.15));
	captions.forEach((cap) => world.add(cap));
	const whole = label(THREE, L("cả nguồn", "whole source"), 1.5);
	whole.position.set(0, 1.45, 0);
	world.add(whole);
	const spots = [
		[1, 1],
		[4, 2],
		[2, 0]
	];
	return (_dt, t, say) => {
		const i = Math.floor(t / 2.2) % spots.length;
		const [c, r] = spots[i];
		frame.position.set((c - 2.5) * .58, (r - 1.5) * .5, .05);
		captions.forEach((cap, index) => {
			cap.visible = index === i;
			cap.position.set(frame.position.x, frame.position.y - .95, .2);
		});
		say(i === 0 ? L("Khung là một tuần. Đám chấm là cả nguồn.", "The frame is one week. The dots are the whole source.") : L("Đổi khung, phần trăm đổi. Cả nguồn không đổi.", "Move the frame, the percent changes. The source does not."));
	};
}
function seats(THREE, world) {
	const slots = [
		-1.25,
		0,
		1.25
	];
	slots.forEach((x) => {
		const chair = new THREE.Mesh(new THREE.BoxGeometry(.7, .08, .5), lambert(THREE, INK));
		chair.position.set(x, -.85, 0);
		world.add(chair);
	});
	const colors = [
		GOLD,
		CLAY,
		CREAM
	];
	const names = [
		"A",
		"B",
		"C"
	];
	const balls = names.map((name, i) => {
		const ball = new THREE.Mesh(new THREE.SphereGeometry(.28, 20, 20), lambert(THREE, colors[i]));
		const tag = label(THREE, name, .7);
		tag.position.set(0, .55, 0);
		ball.add(tag);
		world.add(ball);
		return ball;
	});
	const orders = [
		[
			0,
			1,
			2
		],
		[
			0,
			2,
			1
		],
		[
			2,
			0,
			1
		],
		[
			2,
			1,
			0
		],
		[
			1,
			2,
			0
		],
		[
			1,
			0,
			2
		]
	];
	const captions = orders.map((order) => label(THREE, order.map((i) => names[i]).join("  "), 2.2));
	captions.forEach((cap) => {
		cap.position.set(0, 1.25, 0);
		world.add(cap);
	});
	let step = 0;
	let from = 0;
	slots.map((_, i) => i);
	return (_dt, t, say) => {
		const k = Math.floor(t / 1.6);
		if (k !== step) {
			step = k;
			from = t;
		}
		const n = orders.length;
		const idx = (k % n + n) % n;
		const perm = orders[idx];
		const prev = orders[(idx + n - 1) % n];
		const u = smooth((t - from) / .7);
		balls.forEach((ball, i) => {
			const x = slots[prev[i]] + (slots[perm[i]] - slots[prev[i]]) * u;
			ball.position.set(x, -.35, 0);
		});
		show(captions, idx);
		say(L("Đổi chỗ là một cách xếp khác.", "A new seat order is a new arrangement."));
	};
}
function group(THREE, world) {
	const cluster = new THREE.Group();
	world.add(cluster);
	[
		GOLD,
		CLAY,
		CREAM
	].forEach((color, i) => {
		const ball = new THREE.Mesh(new THREE.SphereGeometry(.32, 18, 18), lambert(THREE, color));
		ball.position.set((i - 1) * .75, i === 1 ? .35 : -.15, 0);
		cluster.add(ball);
	});
	const cap = label(THREE, L("vẫn là 1 bộ", "still 1 set"), 2);
	cap.position.set(0, 1.3, 0);
	world.add(cap);
	return (_dt, t, say) => {
		cluster.rotation.y = Math.sin(t * .7) * .6;
		cluster.position.y = Math.sin(t * .9) * .08;
		say(L("Xoay cả cụm không tạo thêm một bộ mới.", "Spinning the cluster does not make a new set."));
	};
}
function fraction(THREE, world) {
	for (let i = 0; i < 10; i++) {
		const gold = i < 2;
		const ball = new THREE.Mesh(new THREE.SphereGeometry(.16, 14, 14), lambert(THREE, gold ? GOLD : CREAM));
		ball.position.set((i - 4.5) * .38, gold ? .15 : 0, 0);
		world.add(ball);
	}
	const cap = label(THREE, L("2 trong 10  =  0,2", "2 of 10 = 0.2"), 2.6);
	cap.position.set(0, 1.15, 0);
	const scale = label(THREE, L("0 không xảy ra  ·  1 chắc xảy ra", "0 never  ·  1 certain"), 3.1);
	scale.position.set(0, -1.15, 0);
	world.add(cap, scale);
	return (_dt, t, say) => {
		world.children.forEach((child, i) => {
			if (i < 2) child.position.y = .15 + Math.sin(t * 3 + i) * .06;
		});
		say(L("Đếm viên thuận, chia cho tất cả. Ra một số từ 0 đến 1.", "Count the favorable ones, divide by all. A number from 0 to 1."));
	};
}
function meet(THREE, world) {
	const a = new THREE.Mesh(new THREE.SphereGeometry(.32, 16, 16), lambert(THREE, GOLD, .9));
	const b = new THREE.Mesh(new THREE.SphereGeometry(.32, 16, 16), lambert(THREE, CLAY, .9));
	const tagA = label(THREE, L("gửi form", "sent form"), 1.35);
	const tagB = label(THREE, L("từ GDN", "from GDN"), 1.25);
	tagA.position.y = .55;
	tagB.position.y = .55;
	a.add(tagA);
	b.add(tagB);
	const yes = label(THREE, L("cùng được", "can meet"), 1.5);
	const c = new THREE.Mesh(new THREE.SphereGeometry(.28, 16, 16), lambert(THREE, CREAM));
	const d = new THREE.Mesh(new THREE.SphereGeometry(.28, 16, 16), lambert(THREE, INK));
	const tagC = label(THREE, L("gửi", "sent"), .9);
	const tagD = label(THREE, L("không gửi", "not sent"), 1.45);
	tagC.position.y = .5;
	tagD.position.y = .5;
	c.add(tagC);
	d.add(tagD);
	const no = label(THREE, L("không cùng được", "cannot meet"), 2);
	world.add(a, b, yes, c, d, no);
	return (_dt, t, say) => {
		const gap = .35 + (.5 + .5 * Math.sin(t * 1.1)) * .7;
		a.position.set(-1.7 - gap, .15, 0);
		b.position.set(-1.7 + gap, .15, 0);
		yes.position.set(-1.7, -.85, 0);
		yes.visible = gap < .7;
		c.position.set(1.35, .15, 0);
		d.position.set(2.15, .15, 0);
		no.position.set(1.75, -.85, 0);
		say(L("Gửi form và từ GDN gặp được nhau. Gửi và không gửi thì không.", "Form and GDN can meet. Sent and not sent cannot."));
	};
}
function plus(THREE, world) {
	const left = new THREE.Mesh(new THREE.SphereGeometry(.7, 24, 24), lambert(THREE, GOLD, .55));
	const right = new THREE.Mesh(new THREE.SphereGeometry(.7, 24, 24), lambert(THREE, CLAY, .55));
	left.position.x = -.45;
	right.position.x = .45;
	const raw = label(THREE, L("0,08 + 0,40 = 0,48", "0.08 + 0.40 = 0.48"), 2.7);
	const fix = label(THREE, L("0,48 − 0,05 = 0,43", "0.48 − 0.05 = 0.43"), 2.7);
	raw.position.set(0, 1.05, 0);
	fix.position.set(0, 1.05, 0);
	const mid = label(THREE, L("chỗ chồng", "overlap"), 1.4);
	mid.position.set(0, -.15, .2);
	world.add(left, right, raw, fix, mid);
	return (_dt, t, say) => {
		const fixing = t % 5 > 2.3;
		raw.visible = !fixing;
		fix.visible = fixing;
		const gap = fixing ? .38 : .85;
		left.position.x = -gap;
		right.position.x = gap;
		say(fixing ? L("Trừ chỗ chồng 0,05. Còn 0,43.", "Subtract the overlap 0.05. Left with 0.43.") : L("Cộng thẳng ra 0,48, chỗ chồng bị tính hai lần.", "Adding straight gives 0.48. The overlap was counted twice."));
	};
}
function times(THREE, world) {
	const doorA = new THREE.Mesh(new THREE.BoxGeometry(.12, 1.15, .12), lambert(THREE, GOLD));
	const doorB = new THREE.Mesh(new THREE.BoxGeometry(.12, 1.15, .12), lambert(THREE, CLAY));
	doorA.position.set(-1.15, .2, 0);
	doorB.position.set(1.15, .2, 0);
	const tagA = label(THREE, L("cửa 1 · 0,40", "door 1 · 0.40"), 1.55);
	const tagB = label(THREE, L("cửa 2 · 0,10", "door 2 · 0.10"), 1.55);
	tagA.position.set(-1.15, -.75, 0);
	tagB.position.set(1.15, -.75, 0);
	const ball = new THREE.Mesh(new THREE.SphereGeometry(.18, 16, 16), lambert(THREE, CREAM));
	const out = label(THREE, L("0,40 × 0,10 = 0,04", "0.40 × 0.10 = 0.04"), 2.6);
	out.position.set(0, 1.15, 0);
	world.add(doorA, doorB, tagA, tagB, ball, out);
	return (_dt, t, say) => {
		const cycle = t % 5.4;
		const travel = Math.min(cycle, 2.4) / 2.4;
		ball.position.set(-2.35 + travel * 3.7, .2, 0);
		const passed = cycle > 2.15;
		out.visible = passed;
		say(passed ? L("Qua cả hai cửa. 0,40 × 0,10 = 0,04.", "Through both doors. 0.40 × 0.10 = 0.04.") : L("Cửa 2 là form khi đã biết từ GDN.", "Door 2 is the form rate once you know it is GDN."));
	};
}
function flip(THREE, world) {
	const wordA = label(THREE, L("có form", "form"), 1.5);
	const numA = label(THREE, "1", .8);
	const wordB = label(THREE, L("không", "none"), 1.3);
	const numB = label(THREE, "0", .8);
	wordA.position.set(-.9, .2, 0);
	numA.position.set(-.9, .2, 0);
	wordB.position.set(.9, .2, 0);
	numB.position.set(.9, .2, 0);
	world.add(wordA, numA, wordB, numB);
	return (_dt, t, say) => {
		const showNum = Math.sin(t * 1.2) > 0;
		wordA.visible = !showNum;
		wordB.visible = !showNum;
		numA.visible = showNum;
		numB.visible = showNum;
		say(showNum ? L("Có số rồi mới tính trung bình được.", "Once it is a number, you can average it.") : L("Mỗi việc cần được gán một số.", "Each event needs a number."));
	};
}
function cols(THREE, world, kind) {
	const heights = kind === "cols-bin" ? [
		.35,
		.7,
		1.15,
		1.6,
		1.35,
		.8,
		.4,
		.2
	] : [
		.4,
		.7,
		1.2,
		1.7,
		1.45,
		.85,
		.45,
		.25
	];
	const bars = heights.map((h, i) => {
		const hot = kind === "cols-bin" ? i === 3 : i === 3;
		const mesh = peg(THREE, (i - 3.5) * .42, h, hot ? GOLD : CREAM);
		world.add(mesh);
		return mesh;
	});
	const slab = new THREE.Mesh(new THREE.BoxGeometry(.9, 1.9, .45), lambert(THREE, GOLD, .35));
	slab.visible = kind === "cols-cdf";
	world.add(slab);
	const cap = kind === "cols-cdf" ? label(THREE, L("ít hơn 2 = cột 0 + cột 1", "under 2 = bar 0 + bar 1"), 3) : kind === "cols-bin" ? label(THREE, L("cột vàng gần n × p", "gold bar near n × p"), 2.4) : kind === "cols-ghost" ? label(THREE, L("chưa có số liệu", "no data yet"), 2.1) : label(THREE, L("mỗi số một cột", "one bar per number"), 2);
	cap.position.set(0, 1.35, 0);
	world.add(cap);
	return (_dt, t, say) => {
		const appear = kind === "cols-ghost" ? .2 + .8 * smooth((t % 4 - .2) / 1.5) : 1;
		bars.forEach((mesh, i) => {
			const h = heights[i] * (kind === "cols-ghost" ? appear : smooth(Math.min(1, t * .8 - i * .03)));
			mesh.scale.y = Math.max(.04, h);
			mesh.position.y = -1.05 + mesh.scale.y / 2;
			const mat = mesh.material;
			mat.transparent = kind === "cols-ghost";
			mat.opacity = kind === "cols-ghost" ? appear : 1;
		});
		if (kind === "cols-cdf") {
			const w = .2 + smooth(Math.min(1, Math.max(0, t % 5 / 1.6))) * 1.5;
			slab.scale.x = w;
			slab.position.set(-1.55 + w * .42, 0, 0);
		}
		say(kind === "cols-cdf" ? L("Câu «ít hơn» là cộng các cột bên trái.", "\"Less than\" adds the bars on the left.") : kind === "cols-ghost" ? L("Hình hiện ra từ giả định, trước khi chạy tuần đó.", "The shape comes from assumptions, before that week runs.") : kind === "cols-bin" ? L("Cột cao là số lần trúng hay gặp. Tâm là n × p.", "The tall bar is the common hit count. The center is n × p.") : L("Đọc cả hàng cột, không chỉ một cột.", "Read the whole row, not one bar."));
	};
}
function level(THREE, world) {
	const track = new THREE.Mesh(new THREE.BoxGeometry(3.2, .06, .06), lambert(THREE, INK));
	const needle = new THREE.Mesh(new THREE.BoxGeometry(.08, .45, .08), new THREE.MeshBasicMaterial({ color: GOLD }));
	const mark = label(THREE, L("0,25", "0.25"), .9);
	const zero = label(THREE, "0", .5);
	const one = label(THREE, "1", .5);
	zero.position.set(-1.6, -.55, 0);
	one.position.set(1.6, -.55, 0);
	world.add(track, needle, mark, zero, one);
	for (let i = 0; i < 8; i++) {
		const coin = new THREE.Mesh(new THREE.CylinderGeometry(.1, .1, .04, 12), lambert(THREE, i % 4 === 0 ? GOLD : CREAM));
		coin.position.set(i % 4 - 1.5, .8 + Math.floor(i / 4) * .35, 0);
		coin.userData.speed = 1.2 + i % 3 * .4;
		world.add(coin);
	}
	return (dt, t, say) => {
		world.children.forEach((child) => {
			if (child.userData.speed) child.rotation.x += dt * child.userData.speed;
		});
		const settle = 1 - Math.exp(-t * .45);
		const x = -1.6 + .8 * settle + Math.sin(t * 3) * .12 * (1 - settle);
		needle.position.set(x, .28, 0);
		mark.position.set(x, .75, 0);
		say(L("0,25 là mức nhiều lần. Một lần vẫn có thể ra 0.", "0.25 is the level over many tries. One try can still be 0."));
	};
}
function bell(THREE, world, area) {
	[
		.2,
		.45,
		.85,
		1.35,
		1.7,
		1.35,
		.85,
		.45,
		.2
	].forEach((h, i) => world.add(peg(THREE, (i - 4) * .38, h, CREAM, .3)));
	const mid = new THREE.Mesh(new THREE.BoxGeometry(.04, 2, .04), new THREE.MeshBasicMaterial({ color: GOLD }));
	mid.position.y = 0;
	const left = mid.clone();
	const right = mid.clone();
	left.position.x = -.76;
	right.position.x = .76;
	const zone = new THREE.Mesh(new THREE.BoxGeometry(1.15, 1.5, .4), lambert(THREE, GOLD, .35));
	zone.position.set(-1.15, -.2, 0);
	zone.visible = area;
	const cap = label(THREE, area ? L("vùng vàng = một khoảng", "gold region = a range") : L("vạch vàng = tâm", "gold line = center"), 2.5);
	cap.position.set(0, 1.4, 0);
	world.add(mid, left, right, zone, cap);
	return (_dt, t, say) => {
		if (area) zone.scale.y = .65 + .35 * (.5 + .5 * Math.sin(t));
		say(area ? L("Hỏi một khoảng. Diện tích khoảng đó là xác suất.", "Ask for a range. The area of that range is the probability.") : L("Tâm và một độ rộng mỗi bên. Phần giữa là hầu hết phiên.", "Center, and one width on each side. The middle is most sessions."));
	};
}
function ruler(THREE, world) {
	const line = new THREE.Mesh(new THREE.BoxGeometry(3.4, .05, .05), lambert(THREE, CREAM));
	world.add(line);
	[
		"-2",
		"-1",
		"0",
		"1",
		"2"
	].map((_, i) => {
		const tick = new THREE.Mesh(new THREE.BoxGeometry(.04, .28, .04), lambert(THREE, GOLD));
		tick.position.set((i - 2) * .8, .14, 0);
		world.add(tick);
		return tick;
	});
	const scale = label(THREE, "-2      -1      0      1      2", 3.2);
	scale.position.set(0, -.48, 0);
	world.add(scale);
	const seconds = label(THREE, L("30 giây", "30 sec"), 1.35);
	const money = label(THREE, L("90.000đ", "90,000đ"), 1.4);
	world.add(seconds, money);
	return (_dt, t, say) => {
		const u = smooth(Math.min(1, Math.max(0, t % 6 / 2.4)));
		seconds.position.set(-2.15 + u * .95, 1.15 - u * .55, 0);
		money.position.set(2.2 - u * 1.4, 1.15 - u * .55, 0);
		say(u > .92 ? L("30 giây đậu ở -1,5. Tiền cũng nằm trên thước này.", "30 seconds lands at -1.5. The money sits on this same ruler.") : L("Giây và tiền khác đơn vị. Kéo về thước rồi mới so.", "Seconds and money use different units. Pull them onto the ruler, then compare."));
	};
}
function pile(THREE, world) {
	[
		1.3,
		.35,
		1.05,
		.22,
		.9,
		.28
	].forEach((h, i) => {
		const stick = peg(THREE, -2.15 + i * .22, h * .75, CLAY, .16);
		world.add(stick);
	});
	const src = label(THREE, L("từng phiên", "each session"), 1.4);
	src.position.set(-1.6, 1.2, 0);
	const means = label(THREE, L("trung bình mỗi mẫu", "mean of each sample"), 2.15);
	means.position.set(.85, 1.2, 0);
	const truth = new THREE.Mesh(new THREE.BoxGeometry(.045, 1.35, .045), new THREE.MeshBasicMaterial({ color: GOLD }));
	truth.position.set(.9, -.25, 0);
	const truthTag = label(THREE, L("số thật", "true value"), 1.2);
	truthTag.position.set(.9, .62, 0);
	world.add(src, means, truth, truthTag);
	const beads = [];
	const geo = new THREE.SphereGeometry(.07, 10, 10);
	const mat = lambert(THREE, CREAM);
	let acc = 0;
	let wasBig = false;
	const counts = Array.from({ length: 7 }, () => 0);
	return (dt, t, say) => {
		const big = t % 12 >= 5.5;
		if (big !== wasBig) {
			wasBig = big;
			beads.forEach((bead) => world.remove(bead));
			beads.length = 0;
			counts.fill(0);
			acc = 0;
		}
		acc += dt;
		if (acc > (big ? .14 : .32) && beads.length < 36) {
			acc = 0;
			const jitter = (beads.length * 3 + (big ? 1 : 4)) % 7 - 3;
			const col = Math.max(-3, Math.min(3, Math.round(jitter * (big ? .4 : 1))));
			const bead = new THREE.Mesh(geo, mat);
			bead.position.set(.9 + col * .22, -.9 + counts[col + 3] * .16, 0);
			counts[col + 3] += 1;
			world.add(bead);
			beads.push(bead);
		}
		say(big ? L("Mẫu lớn: trung bình khít vào số thật, thành một ụ.", "Large sample: means hug the true value and make a mound.") : L("Mẫu nhỏ: trung bình còn nhảy.", "Small sample: the means still jump."));
	};
}
function covers(THREE, world) {
	const line = new THREE.Mesh(new THREE.BoxGeometry(.05, 2.5, .05), new THREE.MeshBasicMaterial({ color: GOLD }));
	const cap = label(THREE, L("số thật", "true value"), 1.2);
	cap.position.set(0, 1.4, 0);
	world.add(line, cap);
	const bars = [];
	let spawned = -1;
	return (_dt, t, say) => {
		const p = t % 8;
		const want = Math.min(6, Math.floor(p / .7));
		if (p < .3 && spawned > 0) {
			bars.forEach((bar) => world.remove(bar));
			bars.length = 0;
			spawned = -1;
		}
		while (spawned < want) {
			spawned += 1;
			const miss = spawned === 4;
			const center = miss ? 1.15 : Math.sin(spawned * 1.7) * .35;
			const half = miss ? .45 : .85;
			const bar = new THREE.Mesh(new THREE.BoxGeometry(half * 2, .1, .1), miss ? new THREE.MeshBasicMaterial({ color: RUST }) : lambert(THREE, CREAM));
			bar.position.set(center, .95 - spawned * .32, 0);
			world.add(bar);
			bars.push(bar);
		}
		say(spawned >= 4 ? L("Thanh đỏ không chạm số thật. 95% nói về nhiều thanh, không về một thanh.", "The red bar misses the true value. 95% is about many bars, not one bar.") : L("Mỗi thanh là một khoảng tính từ một mẫu.", "Each bar is a range from one sample."));
	};
}
function bias(THREE, world) {
	const chips = [];
	for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) {
		const gold = r === 0;
		const mesh = new THREE.Mesh(new THREE.CylinderGeometry(.16, .16, .06, 14), lambert(THREE, gold ? GOLD : CREAM));
		const home = [(c - 1.5) * .48 - .7, (r - .5) * .5];
		mesh.position.set(home[0], home[1], 0);
		world.add(mesh);
		chips.push({
			mesh,
			gold,
			home
		});
	}
	const cap = label(THREE, L("khay", "tray"), .9);
	cap.position.set(1.7, 1.15, 0);
	world.add(cap);
	let wasFair = false;
	return (_dt, t, say) => {
		const fair = t % 8 >= 4;
		if (fair !== wasFair) wasFair = fair;
		chips.forEach((chip, i) => {
			const take = fair || chip.gold;
			const tx = take ? 1.55 : chip.home[0];
			const ty = take ? -.7 + (fair ? i : i) * .16 : chip.home[1];
			chip.mesh.position.x += (tx - chip.mesh.position.x) * .08;
			chip.mesh.position.y += (ty - chip.mesh.position.y) * .08;
		});
		say(fair ? L("Nhặt cả hai màu. Khay giống đám.", "Pick both colors. The tray looks like the pile.") : L("Chỉ nhặt viên vàng. Khay lệch.", "Pick only the gold chips. The tray is biased."));
	};
}
function divide(THREE, world) {
	const both = label(THREE, L("cả hai: 0,04", "both: 0.04"), 2.2);
	const op = label(THREE, L("chia cho 0,40", "divide by 0.40"), 2.2);
	const cond = label(THREE, L("khi đã biết GDN: 0,10", "given GDN: 0.10"), 2.8);
	both.position.set(0, .85, 0);
	op.position.set(0, .05, 0);
	cond.position.set(0, -.8, 0);
	world.add(both, op, cond);
	return (_dt, t, say) => {
		const on = t % 4 > 1.3;
		cond.visible = on;
		op.position.y = on ? .15 : .35;
		say(on ? L("0,04 / 0,40 = 0,10. Đây là form của riêng kênh GDN.", "0.04 / 0.40 = 0.10. That is the form rate of the GDN channel.") : L("0,04 là vừa form vừa GDN, chưa phải form của kênh.", "0.04 is form and GDN together, not yet the channel's form rate."));
	};
}
function priorbar(THREE, world) {
	const track = new THREE.Mesh(new THREE.BoxGeometry(3.2, .18, .12), lambert(THREE, INK));
	const fill = new THREE.Mesh(new THREE.BoxGeometry(1, .18, .14), new THREE.MeshBasicMaterial({ color: GOLD }));
	const news = label(THREE, L("tin mới", "news"), 1.3);
	const cap = label(THREE, "20%", .9);
	world.add(track, fill, news, cap);
	return (_dt, t, say) => {
		const p = t % 7;
		const grown = p > 2.6;
		const width = grown ? .7 + smooth(Math.min(1, (p - 2.6) / 1.2)) * .9 : .7;
		fill.scale.x = width;
		fill.position.set(-1.6 + width / 2, 0, 0);
		news.position.set(1.3, grown ? .7 : 1.15, 0);
		cap.position.set(-1.6 + width + .45, -.55, 0);
		say(grown ? L("Tin mới nới thanh. Không nhảy lên 100%.", "The news stretches the bar. It does not jump to 100%.") : L("20% là đoán ban đầu. Chưa xóa.", "20% is the starting guess. It is not erased."));
	};
}
function jobs(THREE, world) {
	const left = label(THREE, L("đoán số", "guess a number"), 1.7);
	const right = label(THREE, L("đoán có/không", "guess yes/no"), 1.9);
	left.position.set(-1.15, 1.15, 0);
	right.position.set(1.2, 1.15, 0);
	const line = new THREE.Mesh(new THREE.BoxGeometry(1.4, .04, .04), new THREE.MeshBasicMaterial({ color: GOLD }));
	line.position.set(-1.15, .15, 0);
	line.rotation.z = .4;
	const yes = label(THREE, "1", .7);
	const no = label(THREE, "0", .7);
	yes.position.set(1.2, .2, 0);
	no.position.set(1.2, .2, 0);
	world.add(left, right, line, yes, no);
	return (_dt, t, say) => {
		const on = Math.sin(t * 1.4) > 0;
		yes.visible = on;
		no.visible = !on;
		say(L("Số là hồi quy. Có/không là phân loại.", "A number is regression. Yes/no is classification."));
	};
}
function fitLine(THREE, world, kind) {
	const pts = [
		[-1.7, -.35],
		[-1.15, .05],
		[-.55, -.15],
		[.05, .25],
		[.6, .15],
		[1.15, .55],
		[1.65, .7]
	];
	const yOn = (x) => .32 * x + .15;
	pts.forEach(([x, y]) => {
		const dot = new THREE.Mesh(new THREE.SphereGeometry(.09, 12, 12), lambert(THREE, CREAM));
		dot.position.set(x, y, 0);
		world.add(dot);
	});
	const bar = new THREE.Mesh(new THREE.BoxGeometry(3.5, .035, .035), new THREE.MeshBasicMaterial({ color: GOLD }));
	bar.position.set(0, .15, 0);
	bar.rotation.z = Math.atan2(.32, 1);
	world.add(bar);
	const stick = new THREE.Mesh(new THREE.BoxGeometry(.035, .4, .035), new THREE.MeshBasicMaterial({ color: CLAY }));
	const gap = label(THREE, L("dư", "miss"), .7);
	stick.position.set(pts[2][0], (pts[2][1] + yOn(pts[2][0])) / 2, 0);
	stick.scale.y = Math.abs(pts[2][1] - yOn(pts[2][0])) / .4;
	gap.position.set(pts[2][0] - .45, (pts[2][1] + yOn(pts[2][0])) / 2, 0);
	stick.visible = kind !== "line";
	gap.visible = kind === "line-resid";
	world.add(stick, gap);
	const cap = label(THREE, kind === "line-fit" ? L("RSS nhỏ nhất", "smallest RSS") : kind === "line-resid" ? L("thật trừ đường", "real minus line") : L("+6 form / 1 triệu", "+6 forms / 1 million"), 2.3);
	cap.position.set(0, 1.25, 0);
	world.add(cap);
	return (_dt, t, say) => {
		bar.scale.x = kind === "line-fit" ? .92 + .08 * Math.sin(t * 1.5) : 1;
		say(kind === "line-fit" ? L("Chọn đường làm tổng bình phương phần trượt nhỏ nhất.", "Pick the line that makes the squared misses smallest.") : kind === "line-resid" ? L("Que là phần đường trượt. Đọc các que.", "The stick is what the line missed. Read the sticks.") : L("Đường vàng là câu đoán. Chấm là tuần thật.", "The gold line is the guess. A dot is a real week."));
	};
}
function r2(THREE, world) {
	const held = peg(THREE, -.7, 1.5, GOLD, .7);
	const left = peg(THREE, .7, .65, CREAM, .7);
	const a = label(THREE, L("đường nắm 70%", "line holds 70%"), 2);
	const b = label(THREE, L("còn lại", "left over"), 1.3);
	a.position.set(-.7, 1.15, 0);
	b.position.set(.7, .15, 0);
	world.add(held, left, a, b);
	return (_dt, t, say) => {
		const u = .85 + .15 * Math.sin(t);
		held.scale.y = 1.5 * u;
		held.position.y = -1.05 + held.scale.y / 2;
		say(L("70% là phần phương sai, không phải 70% tuần nằm trên đường.", "70% is a share of variance, not 70% of weeks sitting on the line."));
	};
}
function band(THREE, world) {
	const dots = [];
	for (let i = 0; i < 16; i++) {
		const dot = new THREE.Mesh(new THREE.SphereGeometry(.07, 10, 10), lambert(THREE, i % 5 === 0 ? CLAY : CREAM));
		world.add(dot);
		dots.push(dot);
	}
	const flat = label(THREE, L("dải phẳng", "flat band"), 1.6);
	const horn = label(THREE, L("hình kèn", "funnel"), 1.5);
	flat.position.set(0, 1.25, 0);
	horn.position.set(0, 1.25, 0);
	world.add(flat, horn);
	return (_dt, t, say) => {
		const bad = t % 8 > 4;
		flat.visible = !bad;
		horn.visible = bad;
		dots.forEach((dot, i) => {
			const x = (i - 7.5) * .2;
			const spread = bad ? .06 + Math.abs(x) * .72 : .22;
			const y = Math.sin(i * 1.7) * spread;
			dot.position.set(x, y, 0);
		});
		say(bad ? L("Hình kèn: tuần chi mạnh trượt rộng hơn.", "A funnel: big-spend weeks miss by more.") : L("Dải phẳng: phần trượt đều. Mới đọc kiểm định.", "A flat band: the misses stay even. Then you may read the test."));
	};
}
function zero(THREE, world) {
	const mark = new THREE.Mesh(new THREE.BoxGeometry(.04, 2.2, .04), new THREE.MeshBasicMaterial({ color: CREAM }));
	mark.position.x = -.9;
	const tag = label(THREE, "0", .55);
	tag.position.set(-.9, 1.25, 0);
	const range = new THREE.Mesh(new THREE.BoxGeometry(1.5, .12, .12), lambert(THREE, GOLD));
	range.position.set(.35, 0, 0);
	const cap = label(THREE, L("độ dốc 6", "slope 6"), 1.5);
	cap.position.set(.35, -.7, 0);
	world.add(mark, tag, range, cap);
	return (_dt, t, say) => {
		range.position.x = .25 + Math.sin(t * .8) * .08;
		say(L("Thanh không chạm 0. Độ dốc 0 là một câu khó với mẫu này.", "The bar misses 0. A slope of 0 is a hard story for this sample."));
	};
}
function bowl(THREE, world, fast) {
	for (let i = 0; i <= 12; i++) {
		const x = (i - 6) * .28;
		world.add(peg(THREE, x, .18 + x * x * .85, CREAM, .18));
	}
	const ball = new THREE.Mesh(new THREE.SphereGeometry(.14, 16, 16), new THREE.MeshBasicMaterial({ color: GOLD }));
	const cap = label(THREE, fast ? L("bước quá dài", "step too long") : L("chi phí", "cost"), 1.7);
	cap.position.set(0, 1.3, 0);
	world.add(ball, cap);
	return (_dt, t, say) => {
		const x = fast ? Math.sin(t * 2.6) * 1.45 : -1.55 * Math.exp(-t * .45);
		const y = -.95 + (.18 + x * x * .85);
		ball.position.set(x, y + .2, .2);
		say(fast ? L("Bước dài thì vọt qua đáy, chi phí tăng.", "A long step shoots past the bottom and the cost rises.") : L("Viên đi xuống đáy. Đáy là bộ hệ số đỡ tệ nhất.", "The ball walks to the bottom. The bottom is the least-bad coefficients."));
	};
}
function many(THREE, world) {
	const names = [
		L("chi tiêu", "spend"),
		L("email", "email"),
		L("khuyến mãi", "promo")
	];
	const heights = [
		1.1,
		.7,
		1.3
	];
	names.forEach((name, i) => {
		const x = (i - 1) * 1.15;
		world.add(peg(THREE, x, heights[i], i === 1 ? CLAY : GOLD, .4));
		const cap = label(THREE, name, 1.3);
		cap.position.set(x, -1.15, 0);
		world.add(cap);
	});
	return (_dt, t, say) => {
		say(L("Cả ba cùng nằm trong tuần. Một cột không kể hết.", "All three sit in the same week. One column does not tell it."));
	};
}
function held(THREE, world) {
	[
		L("chi tiêu", "spend"),
		L("email khóa", "email locked"),
		L("km khóa", "promo locked")
	].forEach((name, i) => {
		const x = (i - 1) * 1.25;
		const bar = peg(THREE, x, i === 0 ? 1.35 : .85, i === 0 ? GOLD : INK, .36);
		world.add(bar);
		const cap = label(THREE, name, 1.15);
		cap.position.set(x, -1.22, 0);
		world.add(cap);
	});
	const plus = label(THREE, "+6", .7);
	plus.position.set(-1.25, .05, .3);
	world.add(plus);
	return (_dt, t, say) => {
		plus.position.y = .02 + Math.sin(t * 2) * .08;
		say(L("Chỉ cột vàng nhích. +6 là khi các cột kia đứng yên.", "Only the gold column moves. +6 is while the others stay still."));
	};
}
function vif(THREE, world) {
	const a = peg(THREE, -.45, .4, GOLD, .35);
	const b = peg(THREE, .45, .4, CLAY, .35);
	const tag = label(THREE, L("độ dốc +6", "slope +6"), 1.6);
	const bad = label(THREE, L("độ dốc −2", "slope −2"), 1.6);
	tag.position.set(0, 1.2, 0);
	bad.position.set(0, 1.2, 0);
	world.add(a, b, tag, bad);
	return (_dt, t, say) => {
		const h = .45 + (.5 + .5 * Math.sin(t * 1.3)) * .9;
		a.scale.y = h;
		b.scale.y = h * .92;
		a.position.y = -1.05 + h / 2;
		b.position.y = -1.05 + h * .92 / 2;
		const flip = Math.sin(t * .7) > .2;
		tag.visible = !flip;
		bad.visible = flip;
		say(flip ? L("Hai cột cùng tăng. Độ dốc có thể đảo dấu. Kênh không thành có hại.", "The two columns rise together. The slope can flip sign. The channel did not become harmful.") : L("Chúng đi như một. Đừng brief từng độ dốc.", "They move as one. Do not brief either slope alone."));
	};
}
function dummy(THREE, world) {
	[
		"GDN",
		"Facebook",
		"TikTok"
	].forEach((name, i) => {
		const x = (i - 1) * 1.25;
		const box = new THREE.Mesh(new THREE.BoxGeometry(.9, .7, .2), lambert(THREE, i === 2 ? INK : i === 0 ? GOLD : CLAY));
		box.position.set(x, 0, 0);
		const cap = label(THREE, i === 2 ? L("mốc, bỏ", "baseline, drop") : name, 1.45);
		cap.position.set(x, -.85, 0);
		world.add(box, cap);
	});
	return (_dt, _t, say) => {
		say(L("Hệ số GDN là so với TikTok, không phải so với không có kênh.", "The GDN coefficient is versus TikTok, not versus no channel."));
	};
}
function pick(THREE, world) {
	const bars = [
		1.2,
		.8,
		.55,
		.35
	].map((h, i) => {
		const mesh = peg(THREE, (i - 1.5) * .7, h, i === 3 ? CLAY : CREAM, .4);
		world.add(mesh);
		return mesh;
	});
	const cap = label(THREE, L("bỏ cột nhiễu", "drop the noise"), 2);
	cap.position.set(0, 1.25, 0);
	world.add(cap);
	return (_dt, t, say) => {
		const fade = .15 + .85 * (.5 + .5 * Math.sin(t));
		const mat = bars[3].material;
		mat.transparent = true;
		mat.opacity = fade;
		say(L("R² không giảm khi thêm cột. Cột không đổi quyết định thì bỏ.", "R² does not fall when you add a column. Drop a column that does not change the decision."));
	};
}
function escape(THREE, world) {
	const floor = new THREE.Mesh(new THREE.BoxGeometry(3.3, .045, .04), lambert(THREE, CREAM));
	const ceil = floor.clone();
	floor.position.y = -.72;
	ceil.position.y = .72;
	const z0 = label(THREE, "0", .48);
	const z1 = label(THREE, "1", .48);
	z0.position.set(-1.85, -.72, 0);
	z1.position.set(-1.85, .72, 0);
	const line = new THREE.Mesh(new THREE.BoxGeometry(3.7, .045, .045), new THREE.MeshBasicMaterial({ color: GOLD }));
	line.rotation.z = Math.atan2(2.5, 3.1);
	const low = new THREE.Mesh(new THREE.SphereGeometry(.12, 14, 14), new THREE.MeshBasicMaterial({ color: RUST }));
	const high = low.clone();
	low.position.set(-1.44, -1.16, .05);
	high.position.set(1.44, 1.16, .05);
	const cap = label(THREE, L("ra ngoài", "outside"), 1.25);
	cap.position.set(-.15, 1.28, 0);
	world.add(floor, ceil, z0, z1, line, low, high, cap);
	return (_dt, _t, say) => {
		say(L("Đường thẳng chui ra ngoài 0 và 1. Xác suất thì không được.", "A straight line leaves 0 and 1. A probability cannot."));
	};
}
function sig(THREE, world) {
	for (let i = 0; i <= 16; i++) {
		const z = (i - 8) * .42;
		const p = 1 / (1 + Math.exp(-z));
		const dot = new THREE.Mesh(new THREE.SphereGeometry(.065, 12, 12), lambert(THREE, CREAM));
		dot.position.set(z * .42, -1.05 + p * 1.9, 0);
		world.add(dot);
	}
	const z = Math.log(.35 / .65);
	const gold = new THREE.Mesh(new THREE.SphereGeometry(.13, 16, 16), new THREE.MeshBasicMaterial({ color: GOLD }));
	gold.position.set(z * .42, -1.05 + .35 * 1.9, .08);
	const cap = label(THREE, L("0,35", "0.35"), .85);
	cap.position.set(gold.position.x + .7, gold.position.y, .1);
	const lo = label(THREE, "0", .45);
	const hi = label(THREE, "1", .45);
	lo.position.set(-1.85, -1.05, 0);
	hi.position.set(-1.85, .85, 0);
	world.add(gold, cap, lo, hi);
	return (_dt, t, say) => {
		cap.position.y = gold.position.y + Math.sin(t) * .04;
		say(L("Đường chữ S nằm giữa 0 và 1. Chấm vàng là xác suất 0,35.", "The S curve stays between 0 and 1. The gold dot is the probability 0.35."));
	};
}
function odds(THREE, world) {
	const bar = new THREE.Mesh(new THREE.BoxGeometry(1, .28, .12), lambert(THREE, GOLD));
	const cap = label(THREE, L("odds × 1,04", "odds × 1.04"), 2);
	cap.position.set(0, .8, 0);
	world.add(bar, cap);
	return (_dt, t, say) => {
		const w = 1.1 + (.5 + .5 * Math.sin(t * 1.2)) * .5;
		bar.scale.x = w;
		bar.position.x = -1.3 + w / 2;
		say(L("Thêm một ngày nhân odds khoảng 1,04. Không cộng 4 điểm phần trăm.", "One extra day multiplies the odds by about 1.04. It does not add 4 percentage points."));
	};
}
function cm(THREE, world) {
	[
		[
			L("30 đúng", "30 right"),
			-.82,
			.38,
			GOLD
		],
		[
			L("10 nhầm", "10 false"),
			.82,
			.38,
			CREAM
		],
		[
			L("20 sót", "20 missed"),
			-.82,
			-.58,
			RUST
		],
		[
			L("140 ổn", "140 ok"),
			.82,
			-.58,
			CREAM
		]
	].forEach(([text, x, y, color]) => {
		const box = new THREE.Mesh(new THREE.BoxGeometry(1.35, .78, .1), lambert(THREE, color));
		box.position.set(x, y, 0);
		const cap = label(THREE, text, 1.2);
		cap.position.set(x, y, .12);
		world.add(box, cap);
	});
	return (_dt, _t, say) => {
		say(L("170/200 = 0,85. Vẫn có 20 người rời bị bỏ sót.", "170/200 = 0.85. Twenty leavers are still missed."));
	};
}
function pr(THREE, world) {
	const clean = label(THREE, L("danh sách sạch", "clean list"), 2);
	const wide = label(THREE, L("lưới rộng", "wide net"), 1.7);
	clean.position.set(0, .4, 0);
	wide.position.set(0, .4, 0);
	world.add(clean, wide);
	return (_dt, t, say) => {
		const wideOn = t % 6 > 3;
		clean.visible = !wideOn;
		wide.visible = wideOn;
		say(wideOn ? L("Hạ ngưỡng: bắt thêm người rời, gọi nhầm cũng thêm.", "Lower the threshold: catch more leavers, and more false alarms.") : L("Precision 0,75. Recall 0,60. Ví dụ trên 200 người.", "Precision 0.75. Recall 0.60. An example on 200 people."));
	};
}
function roc(THREE, world) {
	const ax = new THREE.Mesh(new THREE.BoxGeometry(2.4, .02, .02), lambert(THREE, CREAM));
	const ay = new THREE.Mesh(new THREE.BoxGeometry(.02, 2.2, .02), lambert(THREE, CREAM));
	ax.position.set(.2, -1, 0);
	ay.position.set(-1, .1, 0);
	world.add(ax, ay);
	for (let i = 0; i <= 8; i++) {
		const x = i / 8;
		const y = 1 - (1 - x) * (1 - x);
		const dot = new THREE.Mesh(new THREE.SphereGeometry(.07, 10, 10), lambert(THREE, CREAM));
		dot.position.set(-1 + x * 2.2, -1 + y * 1.9, 0);
		world.add(dot);
	}
	const marker = new THREE.Mesh(new THREE.SphereGeometry(.12, 14, 14), new THREE.MeshBasicMaterial({ color: GOLD }));
	const cap = label(THREE, L("một ngưỡng", "one threshold"), 1.6);
	cap.position.set(.4, 1.25, 0);
	world.add(marker, cap);
	return (_dt, t, say) => {
		const x = (.5 + .5 * Math.sin(t * .8)) * .9;
		const y = 1 - (1 - x) * (1 - x);
		marker.position.set(-1 + x * 2.2, -1 + y * 1.9, .1);
		say(L("Mỗi chấm là một ngưỡng. 0,5 chỉ là một chấm.", "Each dot is a threshold. 0.5 is only one dot."));
	};
}
function rests(THREE, world) {
	[
		"A",
		"B",
		"C"
	].forEach((name, k) => {
		const x0 = (k - 1) * 1.15;
		for (let i = 0; i <= 6; i++) {
			const z = (i - 3) * .7;
			const p = 1 / (1 + Math.exp(-z));
			const dot = new THREE.Mesh(new THREE.SphereGeometry(.045, 8, 8), lambert(THREE, k === 1 ? GOLD : CREAM));
			dot.position.set(x0 + (i - 3) * .12, -.7 + p * 1.2, 0);
			world.add(dot);
		}
		const cap = label(THREE, name, .5);
		cap.position.set(x0, 1.15, 0);
		world.add(cap);
	});
	return (_dt, _t, say) => {
		say(L("Mỗi nhãn một đường. Bạn vẫn phải viết luật chọn hành động.", "One curve per label. You still write the rule that picks the action."));
	};
}
function split(THREE, world) {
	const cut = new THREE.Mesh(new THREE.BoxGeometry(.04, 2.2, .04), new THREE.MeshBasicMaterial({ color: GOLD }));
	const q = label(THREE, L("ghé < 2?", "visits < 2?"), 1.6);
	q.position.set(0, 1.25, 0);
	world.add(cut, q);
	for (let i = 0; i < 8; i++) {
		const left = i < 4;
		const dot = new THREE.Mesh(new THREE.SphereGeometry(.1, 12, 12), lambert(THREE, left ? CLAY : GOLD));
		dot.position.set(left ? -.9 - i % 2 * .4 : .7 + i % 2 * .45, -.6 + Math.floor(i / 2) * .45, 0);
		world.add(dot);
	}
	return (_dt, _t, say) => {
		say(L("Một câu đúng/sai đẩy người sang hai phía.", "One yes/no question sends people to two sides."));
	};
}
function gini(THREE, world) {
	const cap = label(THREE, "0,48", .9);
	cap.position.set(-1.15, 1.15, 0);
	const after = label(THREE, L("sạch hơn", "purer"), 1.4);
	after.position.set(1.05, 1.15, 0);
	world.add(cap, after);
	for (let i = 0; i < 8; i++) {
		const dot = new THREE.Mesh(new THREE.SphereGeometry(.09, 10, 10), lambert(THREE, i % 3 === 0 ? GOLD : CLAY));
		dot.position.set(-1.5 + i % 4 * .28, -.2 + Math.floor(i / 4) * .35, 0);
		world.add(dot);
	}
	for (let i = 0; i < 4; i++) {
		const dot = new THREE.Mesh(new THREE.SphereGeometry(.09, 10, 10), lambert(THREE, i < 3 ? GOLD : CLAY));
		dot.position.set(.55 + i % 2 * .32, .15 - Math.floor(i / 2) * .4, 0);
		world.add(dot);
	}
	return (_dt, _t, say) => {
		say(L("0,48 là độ lẫn. Nhát cắt tốt làm hai phía sạch hơn.", "0.48 is the mix. A good cut makes both sides purer."));
	};
}
function deep(THREE, world) {
	const root = label(THREE, L("ghé < 2?", "visits < 2?"), 1.45);
	const mid = label(THREE, L("chi < 500?", "spend < 500?"), 1.5);
	const leaf = label(THREE, L("một người", "one person"), 1.35);
	root.position.set(0, 1.05, 0);
	mid.position.set(.35, -.05, 0);
	leaf.position.set(.85, -1.15, 0);
	const a = new THREE.Mesh(new THREE.BoxGeometry(.04, .7, .04), new THREE.MeshBasicMaterial({ color: GOLD }));
	const b = a.clone();
	a.position.set(.16, .5, 0);
	a.rotation.z = .35;
	b.position.set(.58, -.58, 0);
	b.rotation.z = .4;
	world.add(root, mid, leaf, a, b);
	return (_dt, t, say) => {
		const show = t % 6 > 2.2;
		leaf.visible = show;
		b.visible = show;
		say(show ? L("Tách đến một người là học thuộc, không phải luật dùng lại.", "Cutting down to one person is memorizing, not a reusable rule.") : L("Cây ngắn nói được. Cây sâu khớp cả nhiễu.", "A short tree can be said aloud. A deep tree fits the noise too."));
	};
}
function raw(THREE, world) {
	for (let i = 0; i < 18; i++) {
		const dot = new THREE.Mesh(new THREE.SphereGeometry(.09, 10, 10), lambert(THREE, CREAM));
		const ang = i * 2.3;
		const rad = .35 + i % 5 * .22;
		dot.position.set(Math.cos(ang) * rad, Math.sin(ang * 1.3) * rad * .8, 0);
		world.add(dot);
	}
	const cap = label(THREE, L("không nhãn", "no labels"), 1.6);
	cap.position.set(0, 1.3, 0);
	world.add(cap);
	return (_dt, _t, say) => {
		say(L("Không có cột câu trả lời. Chưa hỏi logistic hay cây được.", "There is no answer column. Logistic and a tree have nothing to learn."));
	};
}
function km(THREE, world) {
	const dots = [
		[-1.3, .4],
		[-.9, .8],
		[-1.1, .1],
		[-.6, .45],
		[.8, -.2],
		[1.2, -.55],
		[.7, -.7],
		[1.15, .05]
	].map(([x, y]) => {
		const dot = new THREE.Mesh(new THREE.SphereGeometry(.09, 10, 10), lambert(THREE, CREAM));
		dot.position.set(x, y, 0);
		world.add(dot);
		return dot;
	});
	const c1 = new THREE.Mesh(new THREE.SphereGeometry(.14, 14, 14), new THREE.MeshBasicMaterial({ color: GOLD }));
	const c2 = new THREE.Mesh(new THREE.SphereGeometry(.14, 14, 14), new THREE.MeshBasicMaterial({ color: CLAY }));
	world.add(c1, c2);
	return (_dt, t, say) => {
		const u = .5 + .5 * Math.sin(t * .9);
		c1.position.set(-1.4 + u * .5, .9 - u * .4, .1);
		c2.position.set(1.4 - u * .4, -.9 + u * .35, .1);
		dots.forEach((dot) => {
			const d1 = dot.position.distanceTo(c1.position);
			const d2 = dot.position.distanceTo(c2.position);
			dot.material.color.setHex(d1 < d2 ? GOLD : CLAY);
		});
		say(u > .65 ? L("Tâm dời vào giữa các chấm của nó.", "The center moves to the middle of its dots.") : L("Mỗi chấm về tâm gần nhất.", "Each dot joins the nearest center."));
	};
}
function elbow(THREE, world) {
	[
		1.55,
		1.05,
		.62,
		.5,
		.44,
		.4
	].forEach((h, i) => world.add(peg(THREE, (i - 2.5) * .48, h, i === 2 ? GOLD : CREAM, .32)));
	const cap = label(THREE, L("chỗ gập", "the bend"), 1.4);
	cap.position.set(-.05, 1.25, 0);
	world.add(cap);
	return (_dt, _t, say) => {
		say(L("Cột giảm nhanh rồi bẹt. Chỗ gập không chứng minh K đúng.", "The bars drop, then flatten. The bend does not prove K."));
	};
}
function merge(THREE, world) {
	const dots = [];
	[
		-1.2,
		-.4,
		.45,
		1.2
	].forEach((x) => {
		const dot = new THREE.Mesh(new THREE.SphereGeometry(.12, 12, 12), lambert(THREE, CREAM));
		dot.position.set(x, -.8, 0);
		world.add(dot);
		dots.push(dot);
	});
	const cap = label(THREE, L("dán cái gần", "glue the closest"), 1.8);
	cap.position.set(0, 1.2, 0);
	world.add(cap);
	return (_dt, t, say) => {
		const u = smooth(t % 5 / 2.2);
		dots[0].position.x = -1.2 + u * .35;
		dots[1].position.x = -.4 - u * .35;
		dots[2].position.x = .45 + u * .3;
		dots[3].position.x = 1.2 - u * .3;
		dots.forEach((dot) => {
			dot.position.y = -.8 + u * .7;
		});
		say(u > .8 ? L("Cắt ngang để chọn số nhóm. Rồi đặt tên.", "Cut across to choose how many groups. Then name them.") : L("Cái gần nhau dán trước.", "The closest ones glue first."));
	};
}
function tok(THREE, world) {
	const chips = [
		[L("và", "and"), true],
		[L("của", "of"), true],
		[L("đau", "hurt"), false],
		[L("chờ", "wait"), false]
	].map(([text, stop], i) => {
		const cap = label(THREE, text, .78);
		cap.position.set((i - 1.5) * 1.05, .1, 0);
		world.add(cap);
		return {
			cap,
			stop
		};
	});
	return (_dt, t, say) => {
		const fade = t % 6 > 2.5;
		chips.forEach((chip) => {
			chip.cap.visible = !(fade && chip.stop);
		});
		say(fade ? L("Từ hư mờ. «đau» và «chờ» ở lại để đếm.", "Filler fades. \"hurt\" and \"wait\" stay so you can count them.") : L("Cắt câu thành mảnh trước khi đếm.", "Cut the sentence into pieces before you count."));
	};
}
function bow(THREE, world) {
	const chips = [
		L("chờ", "wait"),
		"40",
		L("phút", "min")
	].map((text) => {
		const cap = label(THREE, text, .85);
		world.add(cap);
		return cap;
	});
	[
		.9,
		.45,
		.7
	].forEach((h, i) => {
		world.add(peg(THREE, (i - 1) * 1.15, h, GOLD, .32));
	});
	return (_dt, t, say) => {
		const spin = Math.floor(t / 1.6) % 3;
		chips.forEach((cap, i) => {
			const slot = (i + spin) % 3;
			cap.position.set((slot - 1) * 1.15, 1.15, 0);
		});
		say(L("Từ đổi chỗ, độ cao không đổi. Thứ tự đã mất.", "The words swap places. The heights stay. Order is gone."));
	};
}
function tfidf(THREE, world) {
	world.add(peg(THREE, -.6, .4, INK, .45));
	world.add(peg(THREE, .6, 1.45, GOLD, .45));
	const a = label(THREE, "spa", .9);
	const b = label(THREE, L("chờ", "waited"), 1.1);
	a.position.set(-.6, .55, 0);
	b.position.set(.6, 1.15, 0);
	world.add(a, b);
	return (_dt, _t, say) => {
		say(L("«spa» ở mọi bài nên bị hạ. «chờ» hiếm nên được giữ.", "\"spa\" is in every review, so it shrinks. \"waited\" is rare, so it stays."));
	};
}
function edit(THREE, world) {
	const letters = [
		"S",
		"P",
		"A",
		"A"
	].map((ch, i) => {
		const cap = label(THREE, ch, .7);
		cap.position.set((i - 1.5) * .6, .1, 0);
		world.add(cap);
		return cap;
	});
	const cap = label(THREE, L("sửa 1 lần", "1 edit"), 1.5);
	cap.position.set(0, -.9, 0);
	world.add(cap);
	return (_dt, t, say) => {
		const drop = t % 5 > 2.4;
		letters[3].visible = !drop;
		letters.forEach((letter, i) => {
			const slot = drop && i > 2 ? i - 1 : i;
			letter.position.x = (slot - (drop ? 1 : 1.5)) * .6;
		});
		say(drop ? L("Mất một chữ A. «spaa» thành «spa».", "One A drops. \"spaa\" becomes \"spa\".") : L("Đếm số lần sửa một ký tự.", "Count the single-character edits."));
	};
}
function steps(THREE, world) {
	const chips = [
		L("quyết định", "decision"),
		L("giả thuyết", "guess"),
		L("dữ liệu", "data"),
		L("mô hình", "model")
	].map((name, i) => {
		const cap = label(THREE, name, 1.5);
		cap.position.set(0, .95 - i * .55, 0);
		world.add(cap);
		return cap;
	});
	return (_dt, t, say) => {
		const on = Math.floor(t / 1.3) % 4;
		chips.forEach((cap, i) => {
			cap.position.x = i === on ? .15 : 0;
		});
		say(L("Quyết định trước. Mô hình là bước sau.", "The decision comes first. The model is a later step."));
	};
}
function target(THREE, world) {
	const now = label(THREE, "1,1%", 1.2);
	const goal = label(THREE, "1,6%", 1.3);
	const guard = label(THREE, L("giá form ≤ +15%", "cost per form ≤ +15%"), 2.6);
	now.position.set(-.9, .2, 0);
	goal.position.set(.9, .2, 0);
	guard.position.set(0, -.8, 0);
	const arrow = new THREE.Mesh(new THREE.BoxGeometry(.7, .05, .05), new THREE.MeshBasicMaterial({ color: GOLD }));
	world.add(now, goal, guard, arrow);
	return (_dt, t, say) => {
		arrow.position.set(Math.sin(t) * .15, .2, 0);
		say(L("Đích là tỷ lệ form. Accuracy đẹp mà không nhích đích thì chưa xong.", "The target is the form rate. A pretty accuracy that does not move it is not done."));
	};
}
var HOME = {
	x: 0,
	y: .15,
	z: 6.1
};
function start(THREE, Orbit, host, canvas, kind, say, lang, touchOn) {
	const none = {
		stop: () => {},
		setPaused: () => {},
		setTouch: () => {},
		resetView: () => {}
	};
	line = (vi, en) => lang === "en" ? en : vi;
	let renderer;
	try {
		renderer = new THREE.WebGLRenderer({
			canvas,
			antialias: true,
			alpha: true,
			failIfMajorPerformanceCaveat: false
		});
	} catch {
		return none;
	}
	renderer.setClearColor(0, 0);
	renderer.outputColorSpace = THREE.SRGBColorSpace;
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(40, 1, .1, 40);
	camera.position.set(HOME.x, HOME.y, HOME.z);
	const controls = new Orbit(camera, canvas);
	controls.enableDamping = true;
	controls.dampingFactor = .08;
	controls.enablePan = false;
	controls.minDistance = 3;
	controls.maxDistance = 11;
	controls.minPolarAngle = .15;
	controls.maxPolarAngle = Math.PI - .35;
	controls.target.set(0, 0, 0);
	controls.enabled = touchOn;
	let paused = false;
	scene.add(new THREE.HemisphereLight(16774890, 3812390, 2.5));
	const key = new THREE.DirectionalLight(16775407, 2);
	key.position.set(3, 5, 4);
	scene.add(key);
	const world = new THREE.Group();
	scene.add(world);
	const floor = new THREE.GridHelper(9, 18, 7035981, 3813159);
	floor.position.y = -1.55;
	floor.material.transparent = true;
	floor.material.opacity = .55;
	scene.add(floor);
	const wall = new THREE.Mesh(new THREE.PlaneGeometry(7.4, 3.9), new THREE.MeshBasicMaterial({
		color: 2892830,
		transparent: true,
		opacity: .35,
		side: THREE.DoubleSide,
		depthWrite: false
	}));
	wall.position.set(0, .2, -.45);
	scene.add(wall);
	const update = build(THREE, kind, world);
	const slow = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	let last = performance.now();
	let elapsed = 0;
	let frame = 0;
	let visible = true;
	let lastLine = "";
	const io = new IntersectionObserver(([entry]) => {
		visible = entry?.isIntersecting ?? true;
	});
	io.observe(host);
	const resize = () => {
		const w = host.clientWidth || 320;
		const h = host.clientHeight || 280;
		renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
		renderer.setSize(w, h, false);
		camera.aspect = w / Math.max(1, h);
		camera.updateProjectionMatrix();
	};
	const ro = new ResizeObserver(resize);
	ro.observe(host);
	resize();
	const loop = (now) => {
		frame = requestAnimationFrame(loop);
		if (!visible) return;
		const dt = paused ? 0 : Math.min(.05, Math.max(0, (now - last) / 1e3)) * (slow ? .35 : 1);
		last = now;
		elapsed += dt;
		update(dt, elapsed, (note) => {
			if (note !== lastLine) {
				lastLine = note;
				say(note);
			}
		});
		controls.update();
		renderer.render(scene, camera);
	};
	frame = requestAnimationFrame(loop);
	const stop = () => {
		cancelAnimationFrame(frame);
		controls.dispose();
		ro.disconnect();
		io.disconnect();
		scene.traverse((obj) => {
			const mesh = obj;
			mesh.geometry?.dispose();
			const material = mesh.material;
			if (!material) return;
			(Array.isArray(material) ? material : [material]).forEach((item) => {
				item.map?.dispose();
				item.dispose();
			});
		});
		renderer.dispose();
	};
	return {
		stop,
		setPaused: (value) => {
			paused = value;
		},
		setTouch: (on) => {
			controls.enabled = on;
		},
		resetView: () => {
			camera.position.set(HOME.x, HOME.y, HOME.z);
			controls.target.set(0, 0, 0);
			controls.update();
		}
	};
}
var ui = {
	vi: {
		now: "Đang xảy ra",
		legend: "Cách đọc hình",
		hint: "Kéo để xoay · cuộn hoặc chụm hai ngón để zoom",
		hintOff: "Bấm «Xoay hình» để xoay bằng ngón tay. Đang tắt để bạn cuộn trang.",
		rotate: "Xoay hình",
		rotating: "Đang xoay",
		pause: "Dừng",
		play: "Chạy",
		replay: "Tua lại",
		home: "Về góc đầu"
	},
	en: {
		now: "What is happening",
		legend: "How to read the picture",
		hint: "Drag to rotate · scroll or pinch to zoom",
		hintOff: "Tap “Rotate” to turn the scene with your finger. It is off so the page can scroll.",
		rotate: "Rotate",
		rotating: "Rotating",
		pause: "Pause",
		play: "Play",
		replay: "Replay",
		home: "Reset view"
	}
};
function fineHover() {
	try {
		return window.matchMedia("(pointer: fine)").matches;
	} catch {
		return true;
	}
}
function Stage3D({ scene, lang }) {
	const hostRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const apiRef = (0, import_react.useRef)(null);
	const [note, setNote] = (0, import_react.useState)("");
	const [paused, setPaused] = (0, import_react.useState)(false);
	const [run, setRun] = (0, import_react.useState)(0);
	const [touch, setTouch] = (0, import_react.useState)(null);
	const t = ui[lang === "en" ? "en" : "vi"];
	const legend = legends[scene];
	(0, import_react.useEffect)(() => {
		setTouch(fineHover());
	}, []);
	const touchRef = (0, import_react.useRef)(true);
	touchRef.current = touch ?? true;
	(0, import_react.useEffect)(() => {
		const host = hostRef.current;
		const canvas = canvasRef.current;
		if (!host || !canvas) return;
		let dead = false;
		setNote("");
		Promise.all([import("../_libs/three.mjs").then((n) => n.n), import("../_libs/three.mjs").then((n) => n.t)]).then(([THREE, mod]) => {
			if (dead) return;
			apiRef.current = start(THREE, mod.OrbitControls, host, canvas, scene, setNote, lang, touchRef.current);
		});
		return () => {
			dead = true;
			apiRef.current?.stop();
			apiRef.current = null;
		};
	}, [
		scene,
		lang,
		run
	]);
	(0, import_react.useEffect)(() => {
		apiRef.current?.setPaused(paused);
	}, [paused, run]);
	(0, import_react.useEffect)(() => {
		apiRef.current?.setTouch(touch ?? true);
	}, [touch, run]);
	const btn = "inline-flex min-h-11 items-center rounded-full border border-line bg-card px-4 text-sm";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: hostRef,
			className: "relative h-80 overflow-hidden rounded-card bg-[#14110e] sm:h-96",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,#2c241e_0%,#14110e_72%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
					ref: canvasRef,
					className: "relative h-full w-full",
					style: {
						touchAction: touch === false ? "pan-y" : "none",
						cursor: touch === false ? "default" : "grab"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "pointer-events-none absolute bottom-2 left-3 right-3 text-xs text-[#d8cdbd]",
					children: touch === false ? t.hintOff : t.hint
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: btn,
					onClick: () => setPaused(!paused),
					children: paused ? t.play : t.pause
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: btn,
					onClick: () => {
						setPaused(false);
						setRun(run + 1);
					},
					children: t.replay
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: btn,
					onClick: () => apiRef.current?.resetView(),
					children: t.home
				}),
				touch === false || touch === true && !fineHover() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `${btn} ${touch ? "bg-ink text-paper" : ""}`,
					onClick: () => setTouch(!touch),
					children: touch ? t.rotating : t.rotate
				}) : null
			]
		}),
		legend ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 rounded-card border border-line bg-card px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-widest text-muted",
				children: t.legend
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-2",
				children: legend.map(([swatch, vi, en]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-3 text-sm leading-snug",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 inline-block size-3.5 shrink-0 rounded-full border border-line",
						style: { background: swatchColor[swatch] },
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: lang === "en" ? en : vi })]
				}, vi))
			})]
		}) : null,
		note ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 rounded-card border border-line bg-card px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-widest text-accent",
				children: t.now
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-base leading-snug",
				children: note
			})]
		}) : null
	] });
}
function t(lang, vi, en) {
	return lang === "en" ? en : vi;
}
function fact(n) {
	let out = 1;
	for (let i = 2; i <= n; i += 1) out *= i;
	return out;
}
function CountWidget({ lang }) {
	const [n, setN] = (0, import_react.useState)(8);
	const [k, setK] = (0, import_react.useState)(3);
	const perm = fact(n) / fact(n - k);
	const comb = perm / fact(k);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t(lang, "Đếm bộ và thứ tự", "Sets and order"),
		onReset: () => {
			setN(8);
			setK(3);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t(lang, "n người có sẵn", "n available"),
				min: 3,
				max: 10,
				step: 1,
				value: n,
				display: String(n),
				onChange: (value) => {
					setN(value);
					if (k > value) setK(value);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t(lang, "k người được chọn", "k chosen"),
				min: 1,
				max: n,
				step: 1,
				value: k,
				display: String(k),
				onChange: setK
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-2 gap-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: t(lang, "Hoán vị P(n,k)", "Permutation P(n,k)")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl",
						children: perm
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: t(lang, "Tổ hợp C(n,k)", "Combination C(n,k)")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl",
						children: comb
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t(lang, "Ví dụ minh họa. Tổ hợp = hoán vị / k!.", "An example. Combination = permutation / k!.")
			})
		]
	});
}
function AddRuleWidget({ lang }) {
	const [pa, setPa] = (0, import_react.useState)(.08);
	const [pb, setPb] = (0, import_react.useState)(.4);
	const [joint, setJoint] = (0, import_react.useState)(.05);
	const maxJoint = Math.min(pa, pb);
	const used = Math.min(joint, maxJoint);
	const or = pa + pb - used;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t(lang, "A hoặc B, trừ phần giao", "A or B, minus the overlap"),
		onReset: () => {
			setPa(.08);
			setPb(.4);
			setJoint(.05);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t(lang, "P(A) form", "P(A) form"),
				min: .02,
				max: .3,
				step: .01,
				value: pa,
				display: pa.toFixed(2),
				onChange: setPa
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t(lang, "P(B) từ GDN", "P(B) from GDN"),
				min: .1,
				max: .8,
				step: .01,
				value: pb,
				display: pb.toFixed(2),
				onChange: setPb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t(lang, "P(A và B)", "P(A and B)"),
				min: 0,
				max: maxJoint,
				step: .01,
				value: used,
				display: used.toFixed(2),
				onChange: setJoint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-display text-3xl",
				children: or.toFixed(2)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					t(lang, "P(A hoặc B)", "P(A or B)"),
					" = ",
					pa.toFixed(2),
					" + ",
					pb.toFixed(2),
					" − ",
					used.toFixed(2),
					". ",
					t(lang, "Ví dụ minh họa.", "An example.")
				]
			})
		]
	});
}
function MulRuleWidget({ lang }) {
	const [pa, setPa] = (0, import_react.useState)(.4);
	const [pbGiven, setPbGiven] = (0, import_react.useState)(.1);
	const both = pa * pbGiven;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t(lang, "Cả hai: nhân xác suất có điều kiện", "Both: multiply the conditional probability"),
		onReset: () => {
			setPa(.4);
			setPbGiven(.1);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "P(GDN)",
				min: .1,
				max: .8,
				step: .01,
				value: pa,
				display: pa.toFixed(2),
				onChange: setPa
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "P(form | GDN)",
				min: .02,
				max: .4,
				step: .01,
				value: pbGiven,
				display: pbGiven.toFixed(2),
				onChange: setPbGiven
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-display text-3xl",
				children: both.toFixed(3)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					t(lang, "P(GDN và form)", "P(GDN and form)"),
					" = ",
					pa.toFixed(2),
					" × ",
					pbGiven.toFixed(2),
					". ",
					t(lang, "Ví dụ minh họa.", "An example.")
				]
			})
		]
	});
}
function ExpectWidget({ lang }) {
	const [p, setP] = (0, import_react.useState)(.25);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t(lang, "Kỳ vọng của một biến 0/1", "Expectation of a 0/1 variable"),
		onReset: () => setP(.25),
		onExtreme: () => setP(p > .5 ? .1 : .8),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: "P(X = 1)",
				min: .05,
				max: .8,
				step: .05,
				value: p,
				display: p.toFixed(2),
				onChange: setP
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-display text-3xl",
				children: p.toFixed(2)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"E[X] = 0×",
					(1 - p).toFixed(2),
					" + 1×",
					p.toFixed(2),
					". ",
					t(lang, `Trên 100 lead, kỳ vọng khoảng ${Math.round(p * 100)} form. Ví dụ minh họa.`, `Over 100 leads, expect about ${Math.round(p * 100)} forms. An example.`)
				]
			})
		]
	});
}
function BayesWidget({ lang }) {
	const [prior, setPrior] = (0, import_react.useState)(.2);
	const [hit, setHit] = (0, import_react.useState)(.8);
	const [falseHit, setFalseHit] = (0, import_react.useState)(.1);
	const pb = hit * prior + falseHit * (1 - prior);
	const post = pb === 0 ? 0 : hit * prior / pb;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t(lang, "Cập nhật sau một tín hiệu", "Update after one signal"),
		onReset: () => {
			setPrior(.2);
			setHit(.8);
			setFalseHit(.1);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t(lang, "Tỷ lệ đúng khách ban đầu", "Starting rate of the right customer"),
				min: .05,
				max: .6,
				step: .05,
				value: prior,
				display: prior.toFixed(2),
				onChange: setPrior
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t(lang, "Thấy tín hiệu nếu đúng khách", "See the signal if it is the right customer"),
				min: .4,
				max: .95,
				step: .05,
				value: hit,
				display: hit.toFixed(2),
				onChange: setHit
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				label: t(lang, "Thấy tín hiệu nếu không phải", "See the signal if it is not"),
				min: .02,
				max: .4,
				step: .02,
				value: falseHit,
				display: falseHit.toFixed(2),
				onChange: setFalseHit
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-display text-3xl",
				children: post.toFixed(2)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: t(lang, "Xác suất đúng khách sau tín hiệu. Prior vẫn còn trọng lượng. Ví dụ minh họa.", "Probability it is the right customer after the signal. The prior still has weight. An example.")
			})
		]
	});
}
function methodsFor(lang) {
	return [
		{
			id: "random",
			name: t(lang, "Ngẫu nhiên đơn", "Simple random"),
			say: t(lang, "Mỗi phiên cùng cơ hội. Được phép suy ra nguồn, nếu danh sách nguồn đủ.", "Every session has the same chance. You may infer to the source, if the source list is complete.")
		},
		{
			id: "strata",
			name: t(lang, "Phân tầng", "Stratified"),
			say: t(lang, "Lấy trong từng kênh. Giữ được GDN, Facebook, TikTok. Đỡ bị một kênh nuốt mẫu.", "Draw inside each channel. You keep GDN, Facebook, TikTok. One channel does not swallow the sample.")
		},
		{
			id: "convenience",
			name: t(lang, "Thuận tiện", "Convenience"),
			say: t(lang, "Lấy người đã để lại số. Dễ. Không được kết luận về người không gửi form.", "Take people who left a number. Easy. You cannot conclude about people who did not send a form.")
		}
	];
}
function SampleWidget({ lang }) {
	const [id, setId] = (0, import_react.useState)("random");
	const methods = methodsFor(lang);
	const current = methods.find((method) => method.id === id) ?? methods[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lab, {
		title: t(lang, "Cách lấy mẫu đổi câu được nói", "The draw changes what you may say"),
		onReset: () => setId("random"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: methods.map((method) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `min-h-11 rounded-full px-3 text-sm ${id === method.id ? "bg-accent text-accent-ink" : "border border-line"}`,
					onClick: () => setId(method.id),
					children: method.name
				}, method.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg leading-relaxed",
				children: current.say
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t(lang, "Ví dụ minh họa trên một danh sách phiên.", "An example on a list of sessions.")
			})
		]
	});
}
function InferWidget({ id, lang }) {
	if (id === "count") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountWidget, { lang });
	if (id === "addrule") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRuleWidget, { lang });
	if (id === "mulrule") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MulRuleWidget, { lang });
	if (id === "expect") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpectWidget, { lang });
	if (id === "bayes") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BayesWidget, { lang });
	if (id === "sample") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleWidget, { lang });
	return null;
}
var heads = {
	vi: {
		why: "Biết để làm gì",
		prior: "Nối với cái trước",
		see: "Nhìn cái này",
		plain: "Nói cho dễ",
		example: "Tình huống (mọi số là số minh họa)",
		use: "Khi nào dùng",
		precise: "Nói cho đúng",
		more: "Kéo thêm",
		prev: "Từ trước",
		next: "Tiếp theo",
		links: "Dây nối",
		onMap: "Xem trên bản đồ"
	},
	en: {
		why: "What you use it for",
		prior: "How it links",
		see: "Look at this",
		plain: "In plain words",
		example: "Situation (all numbers are illustrations)",
		use: "When to use it",
		precise: "The precise version",
		more: "Try it",
		prev: "Previous",
		next: "Next",
		links: "Connections",
		onMap: "See on the map"
	}
};
function ConceptView({ concept }) {
	const progress = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress);
	(0, import_react.useSyncExternalStore)(subscribeRaw, getRawVersion, getServerRawVersion);
	const lang = progress.lang;
	const head = heads[lang];
	const text = studyCopy(concept, lang);
	const near = studyNeighbors(concept.id);
	const prevText = near.prev ? studyCopy(near.prev, lang) : null;
	const nextText = near.next ? studyCopy(near.next, lang) : null;
	const rel = relatedOf(concept.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "reading mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs uppercase tracking-widest text-muted",
				children: [
					concept.eyebrow,
					" · ",
					concept.session
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: [
					near.index + 1,
					"/",
					near.total,
					" · ",
					concept.video
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl leading-tight",
				children: text.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/goc",
				hash: concept.id,
				className: "mt-3 inline-block text-sm text-accent underline",
				children: lang === "en" ? "Edit the raw text" : "Sửa chữ gốc"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 rounded-card border border-line bg-card p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs uppercase tracking-widest text-accent",
					children: head.why
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-lg leading-relaxed",
					children: text.why
				})]
			}),
			text.prior ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs uppercase tracking-widest text-muted",
					children: head.prior
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 leading-relaxed",
					children: text.prior
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: head.see
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stage3D, {
							scene: concept.scene,
							lang
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg leading-relaxed",
						children: text.see
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs uppercase tracking-widest text-muted",
					children: head.plain
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-lg leading-relaxed",
					children: text.plain
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs uppercase tracking-widest text-muted",
					children: head.example
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 leading-relaxed",
					children: text.situation
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs uppercase tracking-widest text-muted",
					children: head.use
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-3 space-y-3",
					children: text.use.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl leading-none text-accent",
							children: index + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "leading-relaxed",
							children: step
						})]
					}, step))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: head.precise
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 leading-relaxed",
						children: text.precise
					}),
					text.formula ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 rounded-card border border-line bg-card px-3 py-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							tex: text.formula,
							block: true
						})
					}) : null,
					text.symbols.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: text.symbols.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, { tex: row.sym })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: row.meaning
							})]
						}, row.sym))
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
				className: "mt-8 border-l-4 border-accent pl-4 font-display text-2xl leading-snug",
				children: text.insight
			}),
			rel.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: head.links
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-3",
						children: rel.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/khai-niem/$conceptId",
							params: { conceptId: r.id },
							className: "font-medium underline",
							children: studyListTitle(r.id, lang)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: lang === "en" ? r.en : r.vi
						})] }, r.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/ban-do",
						hash: concept.id,
						className: "mt-3 inline-block text-sm text-accent underline",
						children: head.onMap
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/ban-do",
				hash: concept.id,
				className: "mt-6 inline-block text-sm text-accent underline",
				children: head.onMap
			}),
			concept.sim || concept.widget ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs uppercase tracking-widest text-muted",
					children: head.more
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3",
					children: [concept.widget ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InferWidget, {
						id: concept.widget,
						lang
					}) : null, concept.sim ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sim, { id: concept.sim }) : null]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-3 sm:grid-cols-2",
				children: [near.prev && prevText ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/khai-niem/$conceptId",
					params: { conceptId: near.prev.id },
					className: "rounded-card border border-line p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs tracking-widest text-muted",
						children: head.prev
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block font-medium",
						children: prevText.title
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), near.next && nextText ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/khai-niem/$conceptId",
					params: { conceptId: near.next.id },
					className: "rounded-card border border-line p-4 sm:text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs tracking-widest text-muted",
						children: head.next
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block font-medium",
						children: nextText.title
					})]
				}) : null]
			})
		]
	});
}
function ConceptPage() {
	const { conceptId } = Route$1.useParams();
	const concept = getStudy(conceptId);
	if (!concept) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "reading mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "Không thấy khái niệm này"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "mt-4 inline-block underline",
			children: "Về trang đầu"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConceptView, { concept });
}
//#endregion
export { ConceptPage as component };
