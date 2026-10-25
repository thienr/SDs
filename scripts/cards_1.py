from gapmod import K

C04 = "c-f3c8d7aa3721"
C1 = "c-3365bb99f989"
C1G = "c-5ebd125743f2"
MATH = "c-0598c14acf8d"
DESC = "c-75c5d36b41f2"
C2 = "c-cca6e1fa1c5f"
C4 = "c-a0c17afb8849"

K(
    "xl-cell", C04, "s-74fa9887f1cf", "A cell", "C0 · Excel", "S2 Ô", "M1",
    ("Một ô là số, chữ, hoặc công thức", "A cell is a number, text, or a formula."),
    ("Để một ô trông như số không bị cộng như số khi nó là chữ.", "So a cell that looks like a number is not added as a number when it is text."),
    ("Cách nghĩ đã có câu và thước. Excel là chỗ thước đó được đếm.", "The way of thinking already has a sentence and a measure. Excel is where that measure gets counted."),
    ("số 80", "the number 80"), ("chữ «80»", "the text “80”"),
    ("Ô số cộng được. Ô chữ chỉ nối. Công thức tính lại khi ô kia đổi.", "A number cell can be added. A text cell only joins. A formula recomputes when the other cell changes."),
    ("«80» cộng «20» ra «8020», không ra 100.", "“80” plus “20” becomes “8020”, not 100."),
    ("Nhìn ô là loại gì trước khi cộng.", "See what kind of cell it is before you add."),
    ("Ví dụ minh họa: form để dạng chữ vì có dấu cách. Tổng cả cột ra 0. Không phải tuần đó hết form.", "Illustration: forms were stored as text because of a space. The column sum is 0. That is not a week with no forms."),
    [("Hỏi ô là số, chữ, hay công thức.", "Ask whether the cell is a number, text, or a formula."), ("Chữ trông như số thì đổi kiểu, đừng cộng đại.", "Text that looks like a number gets its type changed. Don't just add."), ("Công thức để trong ô, đừng gõ đè bằng một số đã tính.", "Leave the formula in the cell. Don't paste a calculated number over it.")],
    ("Excel giữ kiểu. Một dấu nháy hoặc một dấu cách làm «80» thành chữ. SUM bỏ chữ và vẫn trả một tổng, nên tổng có thể thiếu mà không báo lỗi. Công thức bắt đầu bằng dấu bằng. Giá trị đã dán đè thì không còn tính lại.", "Excel keeps types. An apostrophe or a space makes “80” into text. SUM skips text and still returns a total, so the total can be short with no error. A formula starts with equals. A pasted value no longer recomputes."),
    ("Tổng im lặng không có nghĩa là tổng đủ.", "A quiet sum is not a complete sum."),
)

K(
    "xl-lock", C04, "s-8d966000106b", "Absolute references", "C0 · Excel", "S3 Giữ ô", "M1",
    ("Dấu $ giữ ô khi kéo công thức", "A $ keeps the cell when you fill the formula."),
    ("Để một thuế suất không bị trượt thành ô trống lúc kéo xuống.", "So a tax rate does not slide into a blank cell when you fill down."),
    ("Đã biết ô là công thức. Kéo công thức là lúc địa chỉ bị đi nhờ.", "You know a cell can be a formula. Filling it is when the address walks off."),
    ("kéo là trượt", "fill and it walks"), ("$ là giữ", "$ keeps it"),
    ("Không có $ thì địa chỉ đi theo hướng bạn kéo. $ cột giữ cột. $ hàng giữ hàng.", "With no $, the address follows the direction you fill. A $ on the column locks the column. A $ on the row locks the row."),
    ("Thuế ở ô B1. Kéo xuống mà không khóa thì dòng 2 lấy B2, thường là trống.", "The rate sits in B1. Fill down without a lock and row 2 reads B2, usually blank."),
    ("$A$1 giữ cả hai. A$1 giữ hàng. $A1 giữ cột.", "$A$1 locks both. A$1 locks the row. $A1 locks the column."),
    ("Ví dụ minh họa: doanh thu từng dòng nhân với thuế ở $B$1. Quên $ thì chỉ dòng đầu đúng.", "Illustration: each row's revenue times the rate in $B$1. Forget the $ and only the first row is right."),
    [("Khóa ô nào mọi dòng phải dùng chung.", "Lock the cell every row must share."), ("Đừng khóa ô nào phải đi theo dòng.", "Don't lock the cell that should follow the row."), ("Kéo một dòng thử trước khi kéo cả cột.", "Fill one row as a test before you fill the column.")],
    ("Tham chiếu tương đối đổi khi công thức được sao. Tham chiếu tuyệt đối không đổi phần đã khóa. Khóa nhầm ô doanh thu thì mọi dòng ra cùng một tiền. Khóa thiếu ô thuế thì các dòng dưới nhân với chỗ trống, ra 0.", "A relative reference changes when the formula is copied. An absolute reference does not change the locked part. Lock the revenue cell by mistake and every row shows the same money. Fail to lock the rate and the rows below multiply by a blank and return 0."),
    ("Kéo mà không nhìn dòng thứ hai là cách ra một cột sai im lặng.", "Filling without looking at row two is how a column goes quietly wrong."),
)

K(
    "xl-if", C04, "s-8d966000106b", "IF", "C0 · Excel", "S3 Giữ ô", "M1",
    ("IF lấy một nhánh. Ô trống không phải FALSE", "IF takes one branch. A blank is not FALSE."),
    ("Để một bậc «thấp» không nuốt luôn các ô trống.", "So a “low” band does not swallow the blank cells."),
    ("Đã giữ được ô thuế. IF là luật nếu-thì viết trong ô, để tháng sau còn đọc được.", "The rate cell stays put. IF is an if-then written in the cell, so next month can still read it."),
    ("trúng một nhánh", "one branch hits"), ("ô trống rơi xuống", "a blank falls through"),
    ("IF hỏi một điều, trả một trong hai. Nhánh sau không được xét nếu nhánh trước đã đúng.", "IF asks one thing and returns one of two. The later branch is not looked at if the earlier one was true."),
    ("IF(A2<5, «thấp», «cao») gọi ô trống là thấp, vì trống không lớn hơn 5.", "IF(A2<5, “low”, “high”) calls a blank low, because a blank is not greater than 5."),
    ("Luật đi từ trường hợp đặc biệt tới trường hợp còn lại, và có chỗ cho ô trống.", "The rule goes from the special case to the leftover, and it has a place for blanks."),
    ("Ví dụ minh họa: dưới 5 triệu là thấp, từ 5 đến dưới 20 là vừa, còn lại là cao. Ô trống phải ra «chưa có», không ra thấp.", "Illustration: under 5 million is low, from 5 up to under 20 is mid, the rest is high. A blank must say “missing”, not low."),
    [("Viết điều kiện hẹp trước.", "Write the narrow condition first."), ("Cho ô trống một nhánh riêng.", "Give blanks their own branch."), ("IF lồng quá ba tầng thì khó đọc. Khi đó tách bảng tra.", "More than three nested IFs is hard to read. Split it into a lookup table.")],
    ("IF(điều kiện, giá trị nếu đúng, giá trị nếu sai). So sánh với ô trống không ra TRUE theo kiểu bạn tưởng: trống bị coi là 0 trong nhiều phép so. Chữ «TRUE» không phải giá trị đúng. Một luật thuế để trong IF thì đi cùng file. Để trong đầu người xuất file thì tháng sau lệch.", "IF(condition, value if true, value if false). Comparing with a blank does not do what you expect: a blank counts as 0 in many comparisons. The text “TRUE” is not the truth value. A tax rule inside IF travels with the file. A rule that lives in the exporter's head drifts next month."),
    ("Ô trống rơi vào nhánh đầu tiên nó không phạm.", "A blank falls into the first branch it does not fail."),
)

K(
    "xl-keep", C04, "s-8d966000106b", "Filter is not delete", "C0 · Excel", "S3 Giữ ô", "M1",
    ("Lọc là giấu. Xóa là mất", "A filter hides. Delete is gone."),
    ("Để một tuần «đã dọn file» không thành một tuần mất khách.", "So a week of “cleaning the file” does not become a week of lost customers."),
    ("IF đã là một luật. Lọc không phải một luật. Nó chỉ đổi cái bạn đang nhìn.", "IF was a rule. A filter is not a rule. It only changes what you are looking at."),
    ("lọc: dòng còn", "filter: the row stays"), ("xóa: dòng mất", "delete: the row is gone"),
    ("Filter ẩn các dòng không khớp. Dòng vẫn trong file. Delete bỏ dòng. SUM thường vẫn cộng cả dòng đang ẩn. SUBTOTAL mới biết bỏ qua dòng ẩn.", "Filter hides rows that don't match. The rows stay in the file. Delete removes them. SUM usually still adds hidden rows. SUBTOTAL is what knows to skip hidden rows."),
    ("Ẩn 50 dòng rồi SUM vẫn ra tổng cũ. Không phải filter hỏng. Là SUM không nhìn filter.", "Hide 50 rows and SUM still shows the old total. The filter is not broken. SUM does not look at the filter."),
    ("Muốn giấu thì lọc. Muốn bỏ khỏi phép đếm thì viết điều kiện, đừng xóa.", "To hide, filter. To drop a row from the count, write a condition. Don't delete."),
    ("Ví dụ minh họa: lọc kênh TikTok để đọc. Tổng form cả file không được lấy từ một SUM trên cột đang lọc, nếu bạn định nói về riêng TikTok.", "Illustration: filter to TikTok so you can read. The file's form total must not come from a SUM on that filtered column if you meant TikTok only."),
    [("Lọc khi cần nhìn. Đừng xóa để nhìn.", "Filter when you need to see. Don't delete in order to see."), ("Tổng sau khi lọc: dùng SUBTOTAL, hoặc một bảng chỉ còn điều kiện.", "A total after a filter: use SUBTOTAL, or a table that only has the condition."), ("Xóa chỉ khi dòng đó là rác đã ghi lý do.", "Delete only when the row is junk and you wrote why.")],
    ("Một dòng ẩn vẫn tham gia SUM, AVERAGE, và nhiều biểu đồ. Người nhận file bỏ filter là thấy lại dòng. Người nhận file đã bị xóa thì không thấy lại. Dọn dữ liệu bằng delete là đổi sự thật của bảng, không phải đổi cách nhìn.", "A hidden row still joins SUM, AVERAGE, and many charts. Someone who clears the filter sees the row again. Someone who receives a deleted file does not. Cleaning by delete changes what the table is, not just how it looks."),
    ("Giấu không phải bỏ.", "Hidden is not removed."),
)

K(
    "xl-chart", C04, "s-92c00bac0dd6", "Charts", "C0 · Excel", "S4 Biểu đồ", "M1",
    ("Cột để so nhóm. Đường kẻ để theo thời gian", "Bars compare groups. A line follows time."),
    ("Để một đường kẻ xuyên qua tên kênh không bị đọc thành «đang tăng».", "So a line through channel names is not read as “it's rising”."),
    ("Đã biết lọc không đổi dữ liệu. Biểu đồ cũng không đổi dữ liệu. Nó đổi cái mắt thấy.", "You know a filter does not change the data. A chart doesn't either. It changes what the eye sees."),
    ("cột: so nhóm", "bars: compare groups"), ("đường: theo thời gian", "line: over time"),
    ("Bar so độ lớn của các nhóm không có thứ thời gian. Line đi theo một trục đã xếp, thường là ngày. Nối các kênh bằng một đường là bịa một độ dốc.", "A bar compares the size of groups that have no time order. A line follows an ordered axis, usually dates. Connecting channels with a line invents a slope."),
    ("GDN sang TikTok không phải một xu hướng. Đó là hai nhóm.", "GDN to TikTok is not a trend. Those are two groups."),
    ("Chọn biểu đồ theo câu hỏi, không theo mẫu đang đẹp.", "Pick the chart from the question, not from the template that looks nice."),
    ("Ví dụ minh họa: form theo tuần là một đường. Form theo kênh trong một tuần là các cột. Trộn hai câu vào một hình là hai câu đều mờ.", "Illustration: forms by week is a line. Forms by channel in one week is bars. Putting both questions in one picture blurs both."),
    [("Câu hỏi là «nhóm nào lớn» thì dùng cột.", "If the question is “which group is larger”, use bars."), ("Câu hỏi là «đang đi lên hay xuống» thì dùng đường, trục là thời gian.", "If the question is “rising or falling”, use a line, and the axis is time."), ("Ghi đơn vị trên trục. Đừng để Excel tự đặt một trục chung cho hai đơn vị.", "Label the axis with the unit. Don't let Excel share one axis across two units.")],
    ("Một biểu đồ tròn là phần của một tổng. Các phần phải cùng một tổng và không quá nhiều. Hai hình tròn cạnh nhau gần như không so được. Biểu đồ không sửa một SUM đang cộng nhầm dòng ẩn.", "A pie is a share of one total. The shares must be of that one total, and there must not be many of them. Two pies side by side are almost impossible to compare. A chart does not fix a SUM that is still adding hidden rows."),
    ("Hình đẹp không cứu một câu hỏi trộn.", "A pretty picture does not save a mixed question."),
)

K(
    "xl-pivot", C04, "s-92c00bac0dd6", "Pivot", "C0 · Excel", "S4 Biểu đồ", "M1",
    ("Pivot nhóm dòng. Nó không đẻ ra khách mới", "A pivot groups rows. It does not create customers."),
    ("Để một bảng pivot đếm 400 dòng không bị gọi là 400 khách.", "So a pivot that counts 400 rows is not called 400 customers."),
    ("Biểu đồ đã là một cách nhìn. Pivot là cách nhóm trước khi nhìn.", "A chart was a way of looking. A pivot is how you group before you look."),
    ("400 dòng", "400 rows"), ("không phải 400 khách", "not 400 customers"),
    ("Pivot cộng, đếm, hoặc lấy trung bình theo nhóm bạn thả vào. Hạt của nguồn vẫn là hạt. Đếm dòng không phải đếm người nếu một người nhiều dòng.", "A pivot sums, counts, or averages by the group you drop in. The source grain stays the grain. A count of rows is not a count of people if one person has many rows."),
    ("Một khách năm dòng thì Count of rows là 5. Distinct là việc khác, và phải gọi đúng tên.", "One customer with five rows means a count of rows is 5. Distinct is a different job, and you have to name it."),
    ("Viết hạt của nguồn trước khi kéo field.", "Write the source grain before you drag a field."),
    ("Ví dụ minh họa: mỗi dòng là một lần ghé. Pivot đếm 400. Khách không trùng là 250. Brief «400 khách» là sai hạt.", "Illustration: each row is one visit. The pivot counts 400. Distinct customers are 250. A brief that says “400 customers” has the wrong grain."),
    [("Nói một dòng nguồn là một gì.", "Say what one source row is."), ("Chọn phép cộng đúng với hạt đó.", "Pick the aggregate that matches that grain."), ("Đừng kéo mười field cho đủ trang.", "Don't drag ten fields just to fill the page.")],
    ("Pivot không lọc theo kiểu làm mất dòng nguồn. Nó tính trên vùng bạn chỉ. Vùng thiếu một tuần thì tuần đó không tồn tại trong pivot, không phải tuần đó bằng 0. Làm mới pivot sau khi nguồn đổi. Một số đã copy ra khỏi pivot là một số chết, không còn theo nguồn.", "A pivot does not delete source rows. It calculates on the range you point at. A range missing a week means that week does not exist in the pivot. It does not mean the week is 0. Refresh the pivot after the source changes. A number copied out of a pivot is a dead number. It no longer follows the source."),
    ("Đếm dòng là đếm dòng. Khách là một câu khác.", "A count of rows counts rows. Customers are a different sentence."),
)

K(
    "xl-look", C04, "s-92c00bac0dd6", "VLOOKUP", "C0 · Excel", "S4 Biểu đồ", "M1",
    ("VLOOKUP nhìn sang phải. Mặc định có thể là gần đúng", "VLOOKUP looks to the right. The default can be approximate."),
    ("Để một mã không thấy không bị trả về một mã hàng xóm.", "So a missing code is not given back as the neighbor code."),
    ("Pivot đã nhóm. VLOOKUP đi tìm một ô ở bảng khác.", "The pivot grouped. VLOOKUP goes to fetch a cell from another table."),
    ("không thấy: #N/A", "missing: #N/A"), ("gần đúng, im", "approximate, quietly"),
    ("VLOOKUP tìm cột đầu của vùng, trả một cột bên phải. Nhìn sang trái thì nó không làm. Để trống đối số cuối, hoặc ghi TRUE, là tìm gần đúng trên một cột đã sắp.", "VLOOKUP searches the first column of the range and returns a column to the right. It does not look left. Leave the last argument empty, or write TRUE, and it does an approximate match on a sorted column."),
    ("Mã không có trong bảng, mà cột không sắp và đang để gần đúng, có thể ra nhầm một mã khác. Không phải #N/A.", "A code that is not in the table, with an unsorted column and an approximate match, can return a different code. Not #N/A."),
    ("Muốn đúng mã thì FALSE. Muốn nhìn sang trái thì INDEX và MATCH.", "For an exact code, FALSE. To look left, INDEX and MATCH."),
    ("Ví dụ minh họa: tra mã kênh ra tên. FALSE mà không có mã thì #N/A, nghĩa là không thấy. Đó không phải lỗi file hỏng. Gần đúng trên cột chưa sắp là một tên sai mà không báo.", "Illustration: look up a channel code to get a name. FALSE with no such code is #N/A, which means not found. That is not a broken file. Approximate match on an unsorted column is a wrong name with no warning."),
    [("Việc tra đúng mã: đối số cuối là FALSE.", "An exact code lookup: the last argument is FALSE."), ("#N/A là không thấy. Đừng bọc thành 0 nếu 0 là một tên.", "#N/A means not found. Don't wrap it as 0 if 0 would look like a name."), ("Cột cần nằm bên trái khóa thì dùng INDEX/MATCH, đừng cắt bảng cho VLOOKUP.", "If the column you need is left of the key, use INDEX/MATCH. Don't rearrange the table just for VLOOKUP.")],
    ("VLOOKUP(khóa, vùng, số cột, FALSE). Số cột đếm từ cột khóa, cột khóa là 1. Chèn một cột trong vùng là số này trỏ nhầm mà không báo. INDEX trả ô tại hàng và cột. MATCH trả vị trí của khóa và có thể tìm sang trái. Range lookup TRUE đòi cột khóa đã sắp tăng. Quên điều đó là nguồn của những tên «gần đúng» rất tự tin.", "VLOOKUP(key, range, column index, FALSE). The column index counts from the key column, and the key column is 1. Insert a column inside the range and this number points at the wrong field with no warning. INDEX returns the cell at a row and a column. MATCH returns the position of the key and can look left. Range lookup TRUE needs the key column sorted ascending. Forgetting that is where very confident “close enough” names come from."),
    ("#N/A là không thấy. Im lặng mới đáng sợ.", "#N/A means missing. Silence is the scary one."),
    formula=None,
    symbols=(("\\#N/A", "không tìm thấy khóa, khi đang tìm đúng", "the key was not found, when the match is exact"),),
)

K(
    "py-run", C1, "s-316638b28187", "Run order", "C1 · Python", "S1 Máy chạy từ trên xuống", "M1 Fundamentals of Python",
    ("Máy đọc từ trên xuống. Tên phải có trước", "The machine reads top to bottom. A name has to exist first."),
    ("Để một lỗi «chưa có tên» không bị đọc thành máy hỏng.", "So a “name does not exist yet” error is not read as a broken machine."),
    ("Excel tính lại ô. Python làm đúng những dòng bạn viết, theo thứ tự.", "Excel recomputes a cell. Python does the lines you wrote, in order."),
    ("trên trước", "the top first"), ("dùng tên chưa có", "use a name too early"),
    ("Một chương trình là các dòng. Dòng dưới nhìn thấy cái dòng trên đã tạo. Thụt đầu dòng là cấu trúc, không phải trang trí.", "A program is lines. A lower line can see what an upper line created. Indentation is the structure, not decoration."),
    ("Gọi form trước dòng form = 80 thì máy dừng vì chưa có form.", "Using form before the line form = 80 stops the machine, because form does not exist yet."),
    ("Đọc từ trên xuống. Sửa đúng dòng, đừng sửa từ giữa.", "Read top to bottom. Fix the line. Don't start from the middle."),
    ("Ví dụ minh họa: dòng 1 tạo n = 80. Dòng 2 in n. Đảo hai dòng là lỗi NameError. Máy không «nhìn trước».", "Illustration: line 1 sets n = 80. Line 2 prints n. Swap them and you get a NameError. The machine does not look ahead."),
    [("Chạy từng khúc ngắn trước khi nối.", "Run a short piece before you join it."), ("Lỗi chỉ dòng: đọc dòng đó và dòng ngay trên.", "The error names a line. Read that line and the one just above."), ("Thụt lệch là một khối khác, không phải cho đẹp.", "A bad indent is a different block, not a style choice.")],
    ("Python thực thi tuần tự. Một tên được tạo khi dòng gán chạy xong. Dùng trước thì NameError. Thụt vào là đang ở trong một khối if, vòng lặp, hoặc hàm. Thụt ra là khối đó đã hết. Máy không đoán bạn «định» thụt.", "Python runs in order. A name is created when its assignment line finishes. Use it earlier and you get a NameError. Indenting in means you are inside an if, a loop, or a function. Indenting out means that block has ended. The machine does not guess the indent you “meant”."),
    ("Máy không đọc ý bạn. Nó đọc dòng.", "The machine does not read your intention. It reads the line."),
)

K(
    "py-type", C1, "s-1ec9799f5fd5", "Types", "C1 · Python", "S2 Kiểu", "M1 Fundamentals of Python",
    ("«3» cộng «4» ra «34». 3 cộng 4 ra 7", "“3” plus “4” is “34”. 3 plus 4 is 7."),
    ("Để một tên kênh không bị đem đi tính trung bình.", "So a channel name is not something you take a mean of."),
    ("Máy đã chạy từ trên xuống. Mỗi tên mang một kiểu, và kiểu quyết định phép nào hợp lệ.", "The machine runs top to bottom. Each name carries a type, and the type decides which operations are allowed."),
    ("3 + 4 = 7", "3 + 4 = 7"), ("«3» + «4» = «34»", "“3” + “4” = “34”"),
    ("Số, số thực, chữ, đúng/sai, và None là các kiểu khác nhau. None là chưa có, không phải 0, không phải chữ rỗng.", "Integer, float, text, true/false, and None are different types. None is “nothing yet”. It is not 0 and not an empty text."),
    ("Trung bình của cột tên kênh không tồn tại. Đó không phải một số xấu. Đó là nhầm kiểu.", "The mean of a channel-name column does not exist. That is not a bad number. That is the wrong type."),
    ("Nhìn kiểu trước khi làm phép.", "Look at the type before you do the operation."),
    ("Ví dụ minh họa: form = \"80\" là chữ. form = 80 là số. int(\"80\") mới thành số. int(\"80 form\") thì dừng.", "Illustration: form = \"80\" is text. form = 80 is a number. int(\"80\") becomes a number. int(\"80 form\") stops."),
    [("Hỏi kiểu của tên khi phép tính ra kỳ lạ.", "Ask the type of the name when an operation looks strange."), ("Đừng lấy trung bình một cột chữ.", "Don't take the mean of a text column."), ("None phải được xử lý riêng, đừng cộng như 0.", "None has to be handled on its own. Don't add it as 0.")],
    ("int là số nguyên, float là số thực, str là chữ, bool là True hoặc False, NoneType là None. Phép + trên hai chữ là nối. Phép + trên chữ và số là lỗi, không phải một kết quả gần đúng. Ép kiểu là một dòng tường minh. Một cột lẫn chữ và số không có một trung bình.", "int is an integer, float is a real number, str is text, bool is True or False, NoneType is None. + on two texts joins them. + on text and a number is an error, not an approximate result. A cast is an explicit line. A column that mixes text and numbers does not have a mean."),
    ("Sai kiểu thì đừng xin một số đẹp hơn.", "The wrong type does not need a prettier number."),
)

K(
    "py-op", C1, "s-17f6f983e499", "Operators", "C1 · Python", "S3 Phép", "M1 Fundamentals of Python",
    ("Một dấu bằng là gán. Hai dấu bằng là so", "One equals assigns. Two equals compare."),
    ("Để một dòng «gán» không bị tưởng là một câu hỏi đúng sai.", "So a line that assigns is not mistaken for a true-or-false question."),
    ("Đã có kiểu. Phép tính là cái bạn làm trên kiểu đó.", "You have types. An operator is what you do to a type."),
    ("n = 80", "n = 80"), ("n == 80", "n == 80"),
    ("= cất một giá trị vào tên. == hỏi hai bên có bằng nhau không. / là chia ra số thực. // là chia lấy phần nguyên.", "= stores a value in a name. == asks whether the two sides are equal. / divides and gives a float. // divides and keeps the integer part."),
    ("0.1 + 0.2 không đúng bằng 0.3 trong số thực máy. Đừng dùng == để so hai số thực vừa mới tính.", "0.1 + 0.2 is not exactly 0.3 in machine floats. Don't use == to compare two floats you just computed."),
    ("Gán và so là hai việc. Chia có hai kiểu.", "Assigning and comparing are two jobs. Division comes in two kinds."),
    ("Ví dụ minh họa: tỷ lệ 80/2000 ra 0.04. 80//2000 ra 0. Đừng lấy phép thứ hai rồi bảo form bằng 0.", "Illustration: the rate 80/2000 is 0.04. 80//2000 is 0. Don't take the second one and say forms are 0."),
    [("Một dấu = chỉ khi muốn cất.", "One = only when you mean to store."), ("So hai số thực: lấy độ lệch, đừng ==.", "Compare two floats by a gap, not by ==."), ("and, or, not là trên đúng/sai, không phải trên câu chữ.", "and, or, not work on true/false, not on a sentence.")],
    ("==, !=, <, > trả về bool. and dừng sớm: vế trước sai thì vế sau không chạy. or dừng khi vế trước đúng. not đảo bool. Chia / luôn ra float trong Python 3, kể cả 8/2 ra 4.0. // làm tròn xuống phía âm theo quy tắc floor, không phải «cắt phần thập phân» theo cảm giác.", "==, !=, <, > return a bool. and stops early: if the left side is false, the right side does not run. or stops when the left side is true. not flips a bool. / in Python 3 always returns a float, including 8/2 as 4.0. // floors toward negative infinity. It is not “cut the decimals” in the everyday sense."),
    ("Nhầm = và == là hai việc khác nhau, không phải một lỗi vặt.", "Mixing = and == is two different jobs, not a small typo."),
)

K(
    "py-if", C1, "s-6e0d562298cf", "Conditionals", "C1 · Python", "S1 Nhánh", "M2 Python Control Structures",
    ("Chỉ một nhánh chạy", "Only one branch runs."),
    ("Để hai nhánh không cùng sửa một số.", "So two branches don't both change the same number."),
    ("Đã so được hai giá trị. if là chỗ máy chọn một khối dòng.", "You can compare two values. if is where the machine picks one block of lines."),
    ("một nhánh", "one branch"), ("không phải cả hai", "not both"),
    ("if hỏi một bool. Đúng thì chạy khối thụt vào. elif là các câu hỏi sau, chỉ khi câu trước sai. else là phần còn lại.", "if asks a bool. True runs the indented block. elif is a later question, only if the earlier one was false. else is whatever remains."),
    ("Chuỗi khác rỗng là đúng. 0 và chuỗi rỗng là sai. Đừng dựa vào đó để bắt ô trống của một bảng nếu bạn chưa kiểm.", "A non-empty text is true. 0 and an empty text are false. Don't rely on that to catch a blank table cell unless you checked."),
    ("Viết nhánh hẹp trước. Đừng để hai nhánh cùng làm.", "Write the narrow branch first. Don't let two branches both act."),
    ("Ví dụ minh họa: form < 3 thì gọi là thấp, elif form < 6 thì vừa, else cao. form = 2 chỉ vào thấp, không vào vừa nữa.", "Illustration: form < 3 is low, elif form < 6 is mid, else high. form = 2 goes to low and does not also go to mid."),
    [("Mỗi khả năng một nhánh.", "One branch per possibility."), ("else là «còn lại», gồm cả cái bạn chưa nghĩ tới.", "else is “whatever is left”, including what you did not think of."), ("Đừng lồng if đến mức không đọc được. Tách hàm.", "Don't nest if until it cannot be read. Split a function.")],
    ("Các nhánh loại trừ nhau theo thứ tự viết. Đổi thứ tự là đổi kết quả, giống CASE trong SQL. Một biến được gán trong nhánh này có thể không tồn tại ở nhánh kia. Dùng nó sau if mà không có else là một NameError chờ sẵn.", "Branches exclude each other in the order written. Change the order and you change the result, the same way CASE works in SQL. A name assigned in one branch may not exist in the other. Using it after the if with no else is a NameError waiting."),
    ("Hai nhánh cùng đúng là bạn viết chưa loại trừ.", "Two branches both true means you have not excluded yet."),
)

K(
    "py-loop", C1, "s-6e381fe830d8", "Loops", "C1 · Python", "S2 Vòng", "M2 Python Control Structures",
    ("for đi hết một đám. while có thể không dừng", "for walks a whole collection. while might not stop."),
    ("Để một vòng sửa danh sách đang đi không ăn mất phần tử.", "So a loop that edits the list it is walking does not skip an item."),
    ("if chọn một nhánh một lần. Vòng là làm lại một khối cho từng phần tử.", "if picks one branch once. A loop repeats a block for each item."),
    ("đi hết đám", "walk the whole set"), ("while không có cửa ra", "while with no exit"),
    ("for tên in đám: chạy một lần cho mỗi phần. while điều kiện: chạy lại đến khi điều kiện sai.", "for name in collection: once per item. while condition: again until the condition is false."),
    ("Xóa phần tử ngay trong danh sách đang for thì máy nhảy cóc. Một phần tử không được thăm.", "Deleting an item inside the list you are walking makes the machine skip. One item is never visited."),
    ("for khi biết đám. while chỉ khi có một cửa dừng bạn viết được.", "for when you know the collection. while only when you can write an exit."),
    ("Ví dụ minh họa: ba kênh, for in kênh in ra ba dòng. while không có dòng làm điều kiện đổi thì trang treo.", "Illustration: three channels, for prints three lines. A while with nothing that changes the condition hangs the page."),
    [("for trên danh sách, đừng đếm tay nếu không cần vị trí.", "for over the list. Don't count by hand unless you need the position."), ("Cần vừa chỉ số vừa phần tử thì dùng enumerate, bắt đầu từ 0.", "If you need both the index and the item, use enumerate. It starts at 0."), ("Đừng thêm hoặc xóa phần tử của đúng danh sách đang đi.", "Don't add or remove items from the list you are walking.")],
    ("range(n) là 0 đến n-1, không gồm n. Vòng lồng là từng vòng trong cho mỗi vòng ngoài, nên một bảng lớn thành rất nhiều bước. break thoát vòng trong nhất. continue nhảy tới phần tử sau. Cả hai không sửa cái sai của việc sửa danh sách khi đang đi.", "range(n) is 0 through n-1, not including n. A nested loop runs the inner loop for each outer step, so a large table becomes a lot of steps. break leaves the innermost loop. continue jumps to the next item. Neither fixes the mistake of editing a list while walking it."),
    ("Không có cửa dừng thì while không phải một vòng. Nó là một trang treo.", "A while with no exit is not a loop. It is a hung page."),
)

K(
    "py-fn", C1, "s-b41b360d5ae7", "Functions", "C1 · Python", "S3 Hàm", "M2 Python Control Structures",
    ("Hàm trả cái gì thì người gọi nhận cái đó. Không return là None", "The caller receives what the function returns. No return means None."),
    ("Để một hàm «tính rồi» không bị dùng khi nó chẳng trả gì.", "So a function that “already calculated” is not used when it returned nothing."),
    ("Vòng làm lại một khối. Hàm là đặt tên cho một khối để gọi lại, với đầu vào rõ.", "A loop repeats a block. A function names a block so you can call it, with clear inputs."),
    ("có return", "there is a return"), ("ra None", "you get None"),
    ("def đặt tên. Tham số là đầu vào của lần gọi đó. return gửi một giá trị về chỗ gọi. Hết hàm mà không return thì giá trị là None.", "def names it. Parameters are the inputs of that call. return sends a value back to the caller. If the function ends without return, the value is None."),
    ("in ra 80 không phải trả về 80. Người gọi nhận None, rồi cộng None thì vỡ.", "Printing 80 is not returning 80. The caller receives None, and adding None breaks."),
    ("Muốn dùng kết quả thì return. in chỉ để mắt nhìn.", "If you want to use the result, return it. print is only for the eye."),
    ("Ví dụ minh họa: def ty_le(form, click): return form / click. ty_le(80, 2000) là 0.04. Quên return thì kết quả là None. Số là ví dụ.", "Illustration: def rate(form, click): return form / click. rate(80, 2000) is 0.04. Forget return and the result is None. The numbers illustrate."),
    [("Đầu vào viết thành tham số, đừng lấy tên ở ngoài hàm cho tiện.", "Write inputs as parameters. Don't grab an outside name because it is handy."), ("Mọi nhánh cần một kết quả thì mọi nhánh đều return.", "If every branch needs a result, every branch returns."), ("Một hàm làm một việc. Việc thứ hai là hàm thứ hai.", "One function does one job. A second job is a second function.")],
    ("Tên tham số là cục bộ. Gán vào nó không sửa tên ở ngoài, trừ khi bạn sửa bên trong một danh sách được truyền vào. Đó là một chuyện khác: danh sách là một đồ vật, gán lại tên là một tên mới. return một lần là thoát hàm. Dòng dưới return không chạy.", "Parameter names are local. Assigning to them does not change the outside name, unless you mutate a list that was passed in. That is a different fact: a list is an object, rebinding a name is a new name. One return leaves the function. Lines under return do not run."),
    ("in không phải return.", "print is not return."),
)

K(
    "py-str", C1, "s-bad388a5819d", "Strings", "C1 · Python", "S1 Chữ", "M3 Python Data Structures",
    ("Hàm chữ trả một chữ mới. Chữ cũ không tự đổi", "A string method returns a new string. The old one does not change itself."),
    ("Để một lần .strip() không bị tưởng là đã sửa cột.", "So one .strip() is not mistaken for a column that was already fixed."),
    ("Hàm đã return. Chữ là một kiểu dữ liệu, và các phép trên chữ thường trả bản mới.", "Functions return. Text is a type, and operations on text usually return a new one."),
    ("bản mới", "a new one"), ("bản cũ còn", "the old one remains"),
    ("str là một dãy ký tự có thứ. Cắt [đầu:cuối] lấy từ đầu, không lấy cuối. Phương thức không sửa chữ gốc nếu bạn không giữ kết quả.", "A str is an ordered sequence of characters. A slice [start:end] takes from start and does not take end. A method does not change the original text unless you keep the result."),
    ("tên.strip() mà không gán lại thì tên vẫn còn dấu cách. Cột vẫn bẩn.", "name.strip() without assigning it back leaves the space on name. The column is still dirty."),
    ("Gán lại nếu muốn giữ bản đã làm sạch.", "Assign it back if you want to keep the cleaned version."),
    ("Ví dụ minh họa: \" tiktok \".strip() ra \"tiktok\". Biến cũ không đổi cho đến khi bạn gán. \"tiktok\"[0:3] là \"tik\".", "Illustration: \" tiktok \".strip() gives \"tiktok\". The old name does not change until you assign. \"tiktok\"[0:3] is \"tik\"."),
    [("Muốn bản sạch thì gán: tên = tên.strip().", "If you want the clean version, assign: name = name.strip()."), ("So chữ thì thống nhất hoa thường trước, nếu việc không phân biệt hoa.", "If the job ignores case, make the case agree before you compare."), ("Đừng cộng số vào chữ. Đổi kiểu có chủ đích.", "Don't add a number onto text. Cast on purpose.")],
    ("Chỉ số bắt đầu từ 0. Chỉ số âm đếm từ cuối, -1 là ký tự cuối. len là số ký tự, không phải số từ. f-string chỉ là cách nhét giá trị vào một chữ mới. Nó không tính hộ một tỷ lệ sai.", "Indexes start at 0. A negative index counts from the end. -1 is the last character. len is the number of characters, not the number of words. An f-string is only a way to drop a value into a new text. It does not compute a wrong rate for you."),
    ("Gọi strip mà không giữ kết quả là chưa sửa gì.", "Calling strip and not keeping the result has changed nothing."),
)

K(
    "py-list", C1, "s-e3892c632af0", "Lists", "C1 · Python", "S2 Danh sách", "M3 Python Data Structures",
    ("Danh sách có thứ, sửa được, chỉ số từ 0", "A list is ordered, changeable, and indexed from 0."),
    ("Để phần tử đầu không bị gọi là 1.", "So the first item is not called 1."),
    ("Chữ là một dãy không sửa tại chỗ. Danh sách là một dãy sửa được.", "A string is a sequence you don't change in place. A list is a sequence you can change."),
    ("ô đầu là 0", "the first slot is 0"), ("ô cuối là -1", "the last slot is -1"),
    ("List giữ thứ tự và cho phép đổi từng ô. Chỉ số 0 là phần tử đầu. -1 là phần tử cuối. Cắt [a:b] là một danh sách mới, không gồm b.", "A list keeps order and lets you change a slot. Index 0 is the first item. -1 is the last. A slice [a:b] is a new list and does not include b."),
    ("form[1] trên [80, 90, 70] là 90, không phải 80.", "form[1] on [80, 90, 70] is 90, not 80."),
    ("Đếm từ 0. Cắt là bản mới, không phải «xem giúp».", "Count from 0. A slice is a new list, not just “a look”."),
    ("Ví dụ minh họa: tuần = [80, 90, 70]. tuần[0] là 80. tuần.append(60) thêm vào cuối. Trung bình của list chữ kênh thì đừng làm.", "Illustration: week = [80, 90, 70]. week[0] is 80. week.append(60) adds at the end. Don't take the mean of a list of channel names."),
    [("Ô đầu là 0 khi đưa chỉ số cho người khác.", "The first slot is 0 when you hand an index to someone else."), ("Cần bản không đụng bản gốc thì cắt hoặc copy.", "If you need a version that doesn't touch the original, slice or copy."), ("Một list lồng là từng list con, không phải một bảng có tên cột.", "A nested list is lists inside a list, not a table with column names.")],
    ("append thêm một phần tử. extend nối từng phần tử của một đám. append cả một list thì bạn được một phần tử là cái list đó. Gán tên mới = tên cũ không copy. Hai tên cùng một danh sách. Sửa qua tên này là tên kia thấy.", "append adds one item. extend adds each item of a collection. append a whole list and you get one item that is that list. Assigning a new name = the old name does not copy. Both names are one list. Edit through one and the other sees it."),
    ("Hai tên có thể là một danh sách.", "Two names can be one list."),
)

K(
    "py-dict", C1, "s-c48161f94fcb", "Dictionaries", "C1 · Python", "S3 Từ điển", "M3 Python Data Structures",
    ("Khóa không có thì lỗi. get mới chịu thiếu", "A missing key is an error. get is what tolerates a miss."),
    ("Để một kênh mới không làm sập cả vòng chỉ vì khóa lạ.", "So a new channel does not crash the loop just because the key is new."),
    ("Danh sách lấy theo vị trí. Dict lấy theo khóa.", "A list fetches by position. A dict fetches by key."),
    ("khóa lạ: lỗi", "unknown key: error"), ("get: còn thiếu", "get: still missing"),
    ("Dict là khóa tới giá trị. Mỗi khóa một lần. form[\"tiktok\"] mà chưa có khóa thì KeyError. form.get(\"tiktok\") trả None, hoặc một giá trị bạn đưa sẵn.", "A dict maps a key to a value. Each key once. form[\"tiktok\"] with no such key is a KeyError. form.get(\"tiktok\") returns None, or a value you supplied."),
    ("Kênh mới xuất hiện giữa chừng là chuyện bình thường. Coi đó là lỗi chương trình thì vòng chết đúng chỗ dữ liệu mới.", "A channel showing up halfway is normal. Treating it as a program error kills the loop exactly where the data is new."),
    ("Dùng get khi thiếu là một khả năng. Dùng ngoặc vuông khi thiếu là một sự cố.", "Use get when missing is a possibility. Use brackets when missing is an incident."),
    ("Ví dụ minh họa: {\"gdn\": 80, \"tiktok\": 40}. Lấy \"fb\" bằng ngoặc là dừng. get(\"fb\", 0) ra 0, và bạn phải chịu rằng 0 là «chưa thấy», không phải «đã đo được 0».", "Illustration: {\"gdn\": 80, \"tiktok\": 40}. Brackets on \"fb\" stop. get(\"fb\", 0) returns 0, and you have to accept that 0 means “not seen”, not “measured as 0”."),
    [("Khóa là cái đứng yên: mã, tên đã chuẩn hóa.", "The key is the stable thing: a code, a name you already normalized."), ("Thiếu khóa là một nhánh, đừng để thành một cú sập.", "A missing key is a branch. Don't let it become a crash."), ("Đừng dùng list làm khóa.", "Don't use a list as a key.")],
    ("Khóa phải không đổi được. Chữ, số, tuple của những thứ không đổi thì được. List thì không. Gán vào một khóa đã có là đè giá trị cũ, không phải thêm một dòng thứ hai. Duyệt dict là duyệt khóa, theo thứ tự được chèn ở các bản Python đang dùng, nhưng đừng dựa vào thứ tự đó như một xếp hạng.", "A key has to be unchangeable. Text, numbers, and tuples of unchangeable things are fine. A list is not. Assigning to a key that exists replaces the old value. It does not add a second row. Walking a dict walks the keys, in insertion order on current Python, but don't treat that order as a ranking."),
    ("0 do get trả về chưa phải một phép đo.", "A 0 that get returned is not yet a measurement."),
)

K(
    "py-tup", C1, "s-50436cc460a3", "Tuples", "C1 · Python", "S4 Bộ không sửa", "M3 Python Data Structures",
    ("Tuple có thứ mà không cho sửa từng ô", "A tuple is ordered and does not let you change a slot."),
    ("Để một dòng đã chốt không bị một dòng sau ghi đè từng ô.", "So a row you already closed is not overwritten slot by slot later."),
    ("Dict cần khóa không đổi. Tuple là một dãy không đổi, nên nó làm được khóa. List thì không.", "A dict needs an unchangeable key. A tuple is an unchangeable sequence, so it can be a key. A list cannot."),
    ("không sửa ô", "the slot stays"), ("list thì sửa được", "a list can be edited"),
    ("Tuple giống list ở chỗ có thứ và có chỉ số, khác ở chỗ không append, không gán lại từng ô.", "A tuple is like a list in order and index, and unlike it in that you cannot append or assign a slot."),
    ("(80, \"tiktok\") là một dòng đã đóng. Muốn đổi form thì tạo bộ mới, không sửa bộ cũ.", "(80, \"tiktok\") is a closed row. To change the forms, make a new tuple. Don't edit the old one."),
    ("Dùng tuple cho một dòng không muốn bị sửa tại chỗ.", "Use a tuple for a row you don't want edited in place."),
    ("Ví dụ minh họa: tuần = (80, 2000). tuần[0] = 90 thì lỗi. Đó là cái chốt, không phải máy hỏng.", "Illustration: week = (80, 2000). week[0] = 90 is an error. That is the lock, not a broken machine."),
    [("Một hàng cố định: dùng tuple.", "A fixed row: use a tuple."), ("Cần thêm phần tử: đó là list, hoặc một tuple mới.", "If you need to add an item, that is a list, or a new tuple."), ("Bóc nhiều tên một lúc là unpacking, đủ số tên mới chạy.", "Unpacking several names at once runs only if the count of names matches.")],
    ("Dấu phẩy làm nên tuple, không phải dấu ngoặc. (80) chỉ là số 80 trong ngoặc. (80,) mới là tuple một phần tử. Unpacking a, b = (80, 2000) cần đúng hai tên. Tuple lồng một list bên trong thì cái list đó vẫn sửa được. Cái vỏ không đổi, cái ruột có thể đổi.", "The comma makes the tuple, not the parentheses. (80) is just the number 80 in parentheses. (80,) is a one-item tuple. Unpacking a, b = (80, 2000) needs exactly two names. A tuple that holds a list still lets you edit that list. The shell doesn't change. The inside might."),
    ("Không gán được từng ô là tính năng.", "Not being able to assign a slot is the feature."),
)

K(
    "py-set", C1, "s-c37334c88040", "Sets", "C1 · Python", "S5 Tập không trùng", "M3 Python Data Structures",
    ("Set bỏ trùng. Đừng xin nó một thứ tự", "A set drops duplicates. Don't ask it for an order."),
    ("Để «khách không trùng» không bị đọc thành một bảng đã xếp.", "So “distinct customers” is not read as a sorted table."),
    ("List giữ trùng và giữ thứ. Set chỉ giữ mỗi giá trị một lần, và không hứa thứ tự để bạn xếp hạng.", "A list keeps duplicates and keeps order. A set keeps each value once, and does not promise an order you can rank."),
    ("có trùng", "duplicates stay"), ("mất trùng, mất thứ", "duplicates go, order goes"),
    ("Set là tập hợp. Thêm một phần tử đã có thì tập không dài thêm. Kiểm «có trong tập» thì nhanh. Không có chỉ số ô thứ 0 đáng tin.", "A set is a collection of uniques. Adding an item you already have does not make it longer. “Is it in the set” is fast. There is no trustworthy slot 0."),
    ("Ba dòng cùng một mã khách, bỏ vào set, còn một mã. Không còn biết mã đó đứng đầu hay đứng cuối file.", "Three rows with the same customer code, put into a set, leave one code. You no longer know whether that code was first or last in the file."),
    ("Dùng set để hỏi «có những ai». Đừng dùng set để giữ thứ tự tuần.", "Use a set to ask “who is here”. Don't use a set to keep the week's order."),
    ("Ví dụ minh họa: {\"a\", \"b\", \"a\"} còn hai mã. Thứ in ra không phải thứ bạn đưa vào.", "Illustration: {\"a\", \"b\", \"a\"} leaves two codes. The printed order is not the order you put in."),
    [("Đếm người không trùng: đưa mã vào set rồi lấy độ dài.", "Count distinct people: put the codes in a set, then take the length."), ("Cần thứ tự: giữ list, hoặc sắp lại một cách tường minh.", "If you need order, keep a list, or sort again on purpose."), ("Phần tử của set phải không đổi được, giống khóa của dict.", "A set's items have to be unchangeable, like a dict key.")],
    ("Phép | là hợp, & là giao, - là hiệu. Chúng trả set mới. Một set không phải một bảng: không có cột, không có dòng trùng để bạn còn truy. Muốn vừa không trùng vừa giữ một hàng đại diện thì việc đó không phải một set. Đó là một cách chọn hàng, và bạn phải viết cách chọn.", "| is the union, & is the intersection, - is the difference. They return a new set. A set is not a table: no columns, and no duplicate row left to look up. If you want unique and also one representative row, that is not a set. That is a way of choosing a row, and you have to write how."),
    ("Hết trùng là hết luôn thứ tự bạn đang nhớ.", "Dropping duplicates also drops the order you were remembering."),
)

K(
    "py-np", C1, "s-a52799fe8b2c", "NumPy", "C1 · Python", "S1 Mảng số", "M4 Python Data Science Libraries",
    ("Một mảng NumPy là một kiểu, một hình chữ nhật", "A NumPy array is one type and a rectangle."),
    ("Để một tên kênh lọt vào mảng số không biến cả cột thành chữ.", "So a channel name that slips into a numeric array does not turn the whole column into text."),
    ("List chịu lẫn kiểu. Mảng số không chịu. Đó là cái giá của việc tính nhanh từng cột.", "A list tolerates mixed types. A numeric array does not. That is the price of calculating a column quickly."),
    ("một kiểu", "one type"), ("lẫn chữ là hỏng", "text mixed in breaks it"),
    ("ndarray có shape, thường là (số dòng, số cột). Mọi ô cùng một dtype. Trung bình một trục là một phép trên số.", "An ndarray has a shape, usually (rows, columns). Every cell shares one dtype. A mean along an axis is an operation on numbers."),
    ("Nhét một chữ vào mảng số thì hoặc là lỗi, hoặc cả mảng thành chữ và .mean() không còn là trung bình form.", "Put a text into a numeric array and you either get an error, or the whole array becomes text and .mean() is no longer the mean of forms."),
    ("Chỉ đưa số vào mảng số. Tên để ở chỗ khác.", "Only put numbers in a numeric array. Names live somewhere else."),
    ("Ví dụ minh họa: ba tuần [80, 90, 70], mean là 80. Shape (3,) là một cột dài 3, không phải một bảng 3 cột. Chỉ số vẫn từ 0.", "Illustration: three weeks [80, 90, 70], the mean is 80. Shape (3,) is one column of length 3, not a table of 3 columns. The index still starts at 0."),
    [("Nhìn dtype và shape trước khi lấy mean.", "Look at dtype and shape before you take a mean."), ("axis=0 đi dọc các dòng. axis=1 đi ngang các cột. Nói rõ.", "axis=0 walks down the rows. axis=1 walks across the columns. Say which."), ("Đừng nhét mã kênh vào cùng mảng với form.", "Don't put a channel code in the same array as forms.")],
    ("NumPy ép một kiểu. Một mảng object thì bạn đã mất cái mình cần ở mảng số. Phép trên cả mảng không phải vòng for, và một ô NaN có thể làm cả mean thành NaN nếu bạn không chọn cách bỏ qua. Shape (n, 1) và (n,) không phải lúc nào cũng đi chung một phép. Đọc shape khi một chiều «tự nhiên» ra sai.", "NumPy forces one type. An object array means you already lost what you wanted from a numeric array. An operation on the whole array is not a for loop, and one NaN can make the whole mean NaN if you did not choose to skip it. Shape (n, 1) and (n,) do not always share an operation. Read the shape when a dimension comes out “naturally” wrong."),
    ("Một chữ trong cột số là đổi cả cột, không phải một ô bẩn.", "One text in a numeric column changes the whole column, not one dirty cell."),
)

K(
    "py-ser", C1, "s-970438cd1289", "Series", "C1 · Python", "S2 Một cột có nhãn", "M4 Python Data Science Libraries",
    ("Series cộng theo nhãn, không theo vị trí mắt thấy", "A Series adds by label, not by the position your eye sees."),
    ("Để hai cột «cùng dài» không bị cộng lệch khách.", "So two columns that are “the same length” are not added across the wrong customer."),
    ("Mảng số cộng theo vị trí. Series là một cột kèm nhãn, và nhãn mới là cái được canh.", "A numeric array adds by position. A Series is a column with labels, and the label is what lines up."),
    ("canh theo nhãn", "align by label"), ("canh theo chỗ đứng", "align by position"),
    ("Mỗi dòng của Series có một index. Cộng hai Series là ghép theo index. Khớp thì cộng. Không khớp thì ra thiếu, không phải cộng nhầm hàng dưới.", "Each row of a Series has an index. Adding two Series joins on the index. A match adds. A miss becomes missing. It does not add the row below by mistake."),
    ("Tuần của GDN và tuần của TikTok cùng dài 4, nhưng nhãn ngày lệch một hôm. Cộng theo chỗ đứng là cộng nhầm ngày.", "GDN's week and TikTok's week are both length 4, but the date labels are off by a day. Adding by position adds the wrong day."),
    ("Nhìn index trước khi cộng hai cột.", "Look at the index before you add two columns."),
    ("Ví dụ minh họa: ngày 1 đến 4 cộng với ngày 2 đến 5. Chỗ mắt thấy là bốn số chồng bốn số. Series chỉ cộng đúng những ngày trùng. Ngày lệch để trống.", "Illustration: days 1 through 4 added to days 2 through 5. The eye sees four numbers on four numbers. A Series only adds the days that match. The offset days stay empty."),
    [("Đặt index là cái định danh dòng, thường là ngày hoặc mã.", "Set the index to the row's identity, usually a date or a code."), ("Muốn cộng theo vị trí thì reset index một cách tường minh, và chịu rủi ro.", "If you want to add by position, reset the index on purpose, and accept the risk."), ("NaN sau một phép canh là không khớp, không phải 0.", "A NaN after an alignment is a miss, not a 0.")],
    ("Series mang một dtype cho phần giá trị, giống mảng. Index có thể trùng. Trùng thì phép canh nhân hàng, không còn «một dòng một ngày». iloc lấy theo vị trí, loc lấy theo nhãn. Nhầm hai cái là lấy đúng chỗ mắt thấy nhưng sai ngày, hoặc ngược lại.", "A Series carries one dtype for the values, like an array. The index can repeat. If it repeats, alignment multiplies rows. You no longer have one row per day. iloc takes by position. loc takes by label. Mix them up and you take what the eye sees but the wrong date, or the reverse."),
    ("Cùng dài chưa phải cùng ngày.", "The same length is not the same date."),
)

K(
    "py-frame", C1, "s-830830bf8776", "DataFrame", "C1 · Python", "S3 Bảng", "M4 Python Data Science Libraries",
    ("loc là nhãn. iloc là vị trí. Cắt loc gồm cả cuối", "loc is labels. iloc is positions. A loc slice includes the end."),
    ("Để một lát cắt «đến ngày 4» không mất ngày 4 hoặc nuốt thêm một dòng.", "So a slice “through day 4” does not drop day 4 or swallow an extra row."),
    ("Series là một cột. DataFrame là nhiều cột dùng chung một index, tức một bảng.", "A Series is one column. A DataFrame is several columns sharing an index, which is a table."),
    ("loc gồm cuối", "loc includes the end"), ("iloc không gồm cuối", "iloc excludes the end"),
    ("loc[dòng, cột] dùng nhãn. iloc dùng số thứ tự, từ 0. loc[\"a\":\"c\"] gồm c. iloc[0:3] không gồm ô số 3.", "loc[row, column] uses labels. iloc uses positions, from 0. loc[\"a\":\"c\"] includes c. iloc[0:3] does not include position 3."),
    ("Cắt nhãn từ ngày 1 đến ngày 4 mà dùng iloc theo cảm giác thì dễ mất một ngày hoặc lấy thừa.", "Slicing labels from day 1 through day 4 with iloc, by feel, easily drops a day or takes an extra one."),
    ("Nói bạn đang cầm nhãn hay đang cầm số thứ tự.", "Say whether you are holding a label or a position."),
    ("Ví dụ minh họa: bảng 5 dòng, iloc[0:2] là hai dòng đầu. loc của nhãn dòng 0 đến 2, nếu nhãn là 0,1,2, gồm cả dòng nhãn 2. Ba dòng, không phải hai.", "Illustration: a table of 5 rows, iloc[0:2] is the first two. loc from label 0 through label 2, if those are the labels, includes label 2. Three rows, not two."),
    [("Lọc điều kiện trên cột thì ghi điều kiện, đừng cắt đại theo số dòng.", "Filter a column with a condition. Don't slice by a row number you guessed."), ("Một cột chữ và một cột số đứng riêng. Đừng mean cả bảng.", "A text column and a number column stay separate. Don't take the mean of the whole table."), ("Chia tập học và tập chấm trước mọi phép nhân bản dòng.", "Split learning rows and scoring rows before any duplication of rows.")],
    ("Một dòng là một hạt bạn phải gọi tên. df[\"form\"] là một Series. df[[\"form\"]] là một bảng một cột. Hai cái không đi chung mọi hàm. loc với một lát nhãn gồm cả hai đầu, khác hẳn cắt list và khác iloc. Gán vào một lát cắt đôi khi đụng bản gốc, đôi khi không, tùy đó có phải một view hay không. Muốn chắc thì gán một cột bằng một Series đã canh index, và đọc lại vài dòng.", "One row is a grain you have to name. df[\"form\"] is a Series. df[[\"form\"]] is a one-column table. The two do not share every function. loc with a label slice includes both ends, unlike a list slice and unlike iloc. Assigning into a slice sometimes touches the original and sometimes does not, depending on whether it was a view. To be sure, assign a column from a Series already aligned on the index, and read a few rows back."),
    ("Gồm cả cuối hay không gồm là hai lát khác nhau.", "Including the end or not including it are two different slices."),
)

K(
    "py-plot", C1, "s-ca7fa78e32db", "Plots", "C1 · Python", "S4 Hình", "M4 Python Data Science Libraries",
    ("Hình là một câu. Trục phải có đơn vị", "A plot is a sentence. The axis needs a unit."),
    ("Để một cột đếm không bị đọc thành một tỷ lệ.", "So a bar of counts is not read as a rate."),
    ("Bảng đã có hạt. Hình không được đổi câu hỏi so với hạt đó.", "The table already has a grain. The plot does not get to change the question away from that grain."),
    ("cột đếm", "a count"), ("một tỷ lệ", "a rate"),
    ("Bar so các nhóm. Line theo thời gian. Trục ghi đơn vị. Tiêu đề là câu nhận xét, không phải tên loại hình.", "Bars compare groups. A line follows time. The axis states the unit. The title is the claim, not the name of the chart type."),
    ("200 form và 20 form là độ lớn. 4% và 8% là tỷ lệ. Vẽ 200 cạnh 20 rồi gọi là kênh tốt hơn là chưa chia cho số click.", "200 forms and 20 forms are sizes. 4% and 8% are rates. Drawing 200 next to 20 and calling a channel better has not divided by clicks."),
    ("Chọn hình theo câu, ghi đơn vị, đừng để trục tự nói dối.", "Pick the picture from the sentence, label the unit, and don't let the axis lie."),
    ("Ví dụ minh họa: GDN 80 form trên 4.000 click là 2%. TikTok 40 form trên 1.000 click là 4%. Cột theo form nói GDN lớn hơn. Cột theo tỷ lệ nói ngược. Cả hai có thể đúng với hai câu khác nhau. Số là ví dụ.", "Illustration: GDN has 80 forms on 4,000 clicks, which is 2%. TikTok has 40 forms on 1,000 clicks, which is 4%. Bars of forms say GDN is larger. Bars of rates say the opposite. Both can be right for two different sentences. The numbers illustrate."),
    [("Viết câu trước khi gọi hàm vẽ.", "Write the sentence before you call the plot."), ("Ghi đơn vị trên trục.", "Put the unit on the axis."), ("Đừng dùng một đường cho các kênh không có thứ thời gian.", "Don't use a line for channels that have no time order.")],
    ("Một hình Matplotlib hay Seaborn chỉ vẽ cái bạn đưa. Nó không chia cho mẫu số giúp bạn. Trục bị cắt không bắt đầu từ 0 làm một độ lệch nhỏ trông như một cú nhảy. Hai đơn vị trên một trục là một hình nói dối, trừ khi bạn ghi rất rõ hai thang. Màu không phải một phân tích.", "A Matplotlib or Seaborn figure only draws what you hand it. It does not divide by the denominator for you. An axis that does not start at 0 makes a small gap look like a jump. Two units on one axis is a picture that lies, unless you label both scales very clearly. Color is not an analysis."),
    ("Chưa có mẫu số thì đừng vẽ một cuộc đua.", "With no denominator, don't draw a race."),
)

K(
    "py-g1", C1G, "s-647c31ad5505", "Graded basics", "C1 · Bài chấm", "S1 Bài chấm phần cơ bản", "Python for Data Science Graded Assessments",
    ("Đây là bài chấm. Ý mới nằm ở C1", "This is graded work. The new ideas are in C1."),
    ("Để khỏi học thuộc một đáp án thay vì mở lại kiểu, nhánh, và vòng.", "So you don't memorize an answer instead of reopening types, branches, and loops."),
    ("C1 đã dạy máy chạy thế nào. Buổi này không thêm định nghĩa.", "C1 already taught how the machine runs. This session adds no definition."),
    ("bài chấm", "graded work"), ("mở lại C1", "reopen C1"),
    ("Một bài nộp kiểm bạn có dùng được ý cũ. Nó không phải một ý thứ hai.", "A submission checks that you can use the old ideas. It is not a second idea."),
    ("Sổ không chứa đề và không chứa đáp án.", "The notebook does not hold the prompt and does not hold the answer."),
    ("Quay lại các thẻ Python phần cơ bản khi một câu làm bạn lúng.", "Go back to the basic Python cards when a question sticks."),
    ("Ví dụ: một câu hỏi về chỉ số danh sách không được giải bằng cách nhớ «đáp án là 2». Ô đầu vẫn là 0, như thẻ danh sách.", "Example: a question about a list index is not solved by remembering “the answer is 2”. The first slot is still 0, as the list card said."),
    [("Mở lại thẻ kiểu, phép, nhánh, vòng, hàm, chữ, danh sách, dict, tuple, set.", "Reopen the cards for types, operators, branches, loops, functions, text, lists, dicts, tuples, sets."), ("Đừng chép một đáp án vào sổ.", "Don't copy an answer into the notebook."), ("Sai thì chỉ ra thẻ nào bị lệch, không phải «máy chấm khắt».", "If it is wrong, name which card you drifted from. Not “the grader is harsh”.")],
    ("Phần chấm cơ bản không introducing một cấu trúc mới. Nếu một câu trông như mẹo, nó vẫn đang hỏi một ý đã có: kiểu, thứ tự chạy, chỉ số từ 0, hoặc một nhánh. Không có ô trả lời trong sổ này.", "The basic graded part does not introduce a new structure. If a question looks like a trick, it is still asking an idea you have: a type, run order, an index from 0, or a branch. There is no answer box in this notebook."),
    ("Bài chấm không phải giáo trình thứ hai.", "Graded work is not a second syllabus."),
)

K(
    "py-g2", C1G, "s-13987bbe9945", "Graded libraries", "C1 · Bài chấm", "S2 Bài chấm thư viện", "Python for Data Science Graded Assessments",
    ("Bài chấm thư viện vẫn là hạt, nhãn, và lát cắt", "The library submission is still grain, labels, and slices."),
    ("Để một điểm pandas không thành một thư viện mới phải học thuộc.", "So a pandas score does not become a new library you have to memorize."),
    ("Thẻ NumPy, Series, DataFrame, và hình đã có. Buổi chấm không thêm ý.", "The NumPy, Series, DataFrame, and plot cards already exist. The graded session adds no idea."),
    ("mở lại bảng", "reopen the table"), ("học thuộc điểm", "memorize the score"),
    ("Câu chấm thư viện hỏi shape, loc hay iloc, và hình có đúng câu không.", "A library question asks about shape, loc or iloc, and whether the picture matches the sentence."),
    ("Nhớ mang máng một hàm không cứu một lát cắt gồm nhầm đầu cuối.", "Half-remembering a function does not save a slice that includes the wrong end."),
    ("Mở lại bốn thẻ thư viện.", "Reopen the four library cards."),
    ("Ví dụ: một câu bắt lấy các dòng đến hết một nhãn. Đó là loc, gồm cả cuối. Không phải một đáp án riêng của bài chấm.", "Example: a question that takes rows through a label. That is loc, which includes the end. It is not a special answer that belongs only to the graded work."),
    [("Sai shape thì đừng tiếp tục vẽ.", "If the shape is wrong, don't keep plotting."), ("Sai loc/iloc thì đọc lại thẻ bảng.", "If loc/iloc is wrong, reread the table card."), ("Hình không có đơn vị thì chưa trả lời câu hỏi.", "A picture with no unit has not answered the question.")],
    ("Không có định nghĩa mới ở buổi này. Không có đề trong sổ. Các ý cần dùng là mảng một kiểu, Series canh nhãn, loc gồm cuối, iloc không gồm cuối, và hình phải đúng câu.", "There is no new definition in this session. There is no prompt in the notebook. The ideas you need are: an array of one type, a Series aligning on labels, loc including the end, iloc excluding the end, and a picture that matches the sentence."),
    ("Điểm không phải một ý.", "A score is not an idea."),
)
