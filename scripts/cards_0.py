from gapmod import K

C01 = "c-779b43bacf62"
C02 = "c-7780a48d5816"
C03 = "c-1f3e0f37b6e5"
C04 = "c-f3c8d7aa3721"
C1 = "c-3365bb99f989"
C1G = "c-5ebd125743f2"
MATH = "c-0598c14acf8d"
DESC = "c-75c5d36b41f2"
C2 = "c-cca6e1fa1c5f"
C4 = "c-a0c17afb8849"

K(
    "c0-order", C01, "s-dfc60185bae3", "Syllabus order", "C0 · Vào khóa", "S1 Thứ tự khóa", "M1",
    ("Học đúng thứ tự file, không nhảy có khóa", "Study in the file order. Don't skip ahead."),
    ("Để một ý sau không bị đọc khi ý trước còn chưa có chỗ đứng.", "So a later idea is not read before the earlier one has a place to stand."),
    None,
    ("đúng thứ tự", "in file order"), ("nhảy có", "skipping ahead"),
    ("Mục lục mở từ C0-1 tới C7. Mỗi khóa là một tầng, không phải một menu tùy ý.", "The contents run from C0-1 to C7. Each course is a layer, not a menu you hop around."),
    ("Nhảy tới rừng cây khi chưa có một dòng dữ liệu thì phiếu bầu không có gì để đếm.", "Jumping to a forest before you have a row of data means the vote has nothing to count."),
    ("Sổ này đi theo mục lục đã gửi.", "This notebook follows the syllabus you sent."),
    ("Ví dụ: C0 là cách đặt câu hỏi. C1 là nói được với máy. Toán và mô tả là bản ngắn, optional. C2 mới suy diễn. C3 là một dòng ra một dự đoán.", "Example: C0 is how you ask. C1 is how you talk to the machine. Math and descriptive are the short, optional pass. C2 is where inference starts. C3 is one row becoming a prediction."),
    [("Mở khóa theo số thứ tự.", "Open courses in number order."), ("Trong một khóa, đọc đầu khóa rồi mới tới từng phần.", "Inside a course, read the opener, then each part."), ("Ý nào chưa có hình thì đó là bài luyện, không phải định nghĩa mới.", "An item with no new picture is a drill, not a new definition.")],
    ("Thứ tự là thứ tự file giáo trình: Welcome, cách giải bài toán, Excel, Python, toán, mô tả, thống kê, học máy, học máy nâng, kể chuyện, GenAI, rồi capstone. Optional vẫn nằm đúng chỗ của nó, không bị giấu xuống cuối.", "The order is the syllabus file: welcome, problem solving, Excel, Python, math, descriptive, statistics, machine learning, advanced ML, storytelling, GenAI, then the capstone. Optional stays in its own place. It is not hidden at the end."),
    ("Nhảy có là tự làm mất cái móc.", "Skipping ahead throws away the hook."),
)

K(
    "c0-read", C01, "s-ff1d5348f9b7", "How to read one idea", "C0 · Vào khóa", "S2 Cách đọc một ý", "M1",
    ("Một ý, một hình, rồi nói cho đúng", "One idea, one picture, then the precise line."),
    ("Để khỏi biến sổ thành một thanh tiến độ phải ngồi xem hết video.", "So the notebook does not turn into a progress bar you have to sit through."),
    ("Đã có thứ tự khóa. Cách đọc từng ý là bước kế.", "You have the course order. How to read one idea is the next step."),
    ("một ý", "one idea"), ("không quiz", "no quiz"),
    ("Đọc vì sao cần, nối với ý trước, nhìn hình đang đổi, rồi câu nói cho đúng.", "Read why it matters, how it links, watch the picture change, then the precise sentence."),
    ("Sổ không hỏi lại bạn. Không có ô trả lời.", "The notebook does not ask you back. There is no answer box."),
    ("Mỗi thẻ là một ý, không phải một video phải ngồi hết.", "Each card is one idea, not a video you have to finish."),
    ("Ví dụ: bạn dừng khi câu «nói cho đúng» đã khớp với hình. Đánh dấu đã xem nếu muốn. Không có điểm.", "Example: you stop when the precise sentence matches the picture. Mark it seen if you want. There is no score."),
    [("Đọc «biết để làm gì» trước công thức.", "Read what you use it for before the formula."), ("Hình đang đổi là ví dụ, không phải số của công ty bạn.", "The moving picture is an example, not your company's number."), ("Gặp bài nộp hoặc quiz thì mở lại ý, đừng học thuộc đáp án.", "On a submission or a quiz, reopen the idea. Don't memorize an answer.")],
    ("Một ý có tình huống, một câu dễ, một câu chặt, và một hình riêng. Quiz, bài chấm, mindmap, và các bước cài đặt không thêm định nghĩa. Chúng được ghi là bài luyện.", "One idea has a situation, a plain line, a tight line, and its own picture. Quizzes, graded work, mindmaps, and install steps add no definition. They are marked as drills."),
    ("Hết một ý là hiểu một ý. Không phải hết một video.", "Finishing an idea means you understood it. Not that a video ended."),
)

K(
    "crisp-biz", C02, "s-a6c13734df70", "Business understanding", "C0 · CRISP", "S1 Việc trước dữ liệu", "Analytics Problem Solving",
    ("Câu hỏi việc làm đứng trước file", "The business question comes before the file."),
    ("Để khỏi đào một bảng chỉ vì bảng đang có.", "So you don't mine a table just because the table is there."),
    ("Cách đọc một ý đã có. CRISP bắt đầu bằng việc, không bằng model.", "You know how to read an idea. CRISP starts from the job, not from a model."),
    ("câu hỏi trước", "question first"), ("file trước", "file first"),
    ("Chưa có câu «quyết định gì» thì chưa có bài toán.", "Without “what will be decided”, there is no problem yet."),
    ("Có file mà chưa biết ai quyết định thì model không có chỗ dùng.", "A file with nobody to decide for has nowhere for a model to land."),
    ("CRISP-DM mở bằng business understanding.", "CRISP-DM opens with business understanding."),
    ("Ví dụ: spa muốn biết tuần sau có nên tăng ngân sách TikTok hay không. Câu đó là việc. File form chỉ là nguyên liệu.", "Example: a spa wants to know whether to raise the TikTok budget next week. That sentence is the job. The form file is only material."),
    [("Viết một câu: ai quyết định, quyết định gì, trễ hạn nào.", "Write one line: who decides, what they decide, and by when."), ("Hỏi số nào sẽ đổi quyết định đó.", "Ask which number would change that decision."), ("Chưa trả lời được hai câu trên thì đừng mở model.", "If those two are unanswered, don't open a model.")],
    ("Business understanding là chốt quyết định, người quyết, và cái giá của một lần sai. Nó không phải một slide mục tiêu chung. Data understanding chỉ bắt đầu sau câu đó.", "Business understanding locks the decision, the person who decides, and the cost of being wrong once. It is not a slide of vague goals. Data understanding starts only after that sentence."),
    ("File không phải là bài toán.", "A file is not a problem."),
)

K(
    "crisp-data", C02, "s-a6c13734df70", "Data understanding", "C0 · CRISP", "S1 Việc trước dữ liệu", "Analytics Problem Solving",
    ("Dữ liệu thô chưa phải câu trả lời", "Raw data is not the answer."),
    ("Để khỏi thấy một cột rồi tưởng đó là thứ cần quyết.", "So a column you happen to see is not treated as the thing to decide."),
    ("Đã có câu hỏi việc. Giờ mới được nhìn file có đỡ được câu đó không.", "The business question exists. Only now do you ask whether the file can hold it."),
    ("cột đang có", "the column you have"), ("cột cần quyết", "the column you need"),
    ("Một cột có mặt không có nghĩa nó đo đúng việc.", "A column being present does not mean it measures the job."),
    ("Đo nhầm thì làm sạch cũng chỉ làm sạch cái nhầm.", "The wrong measure, cleaned, is still the wrong measure."),
    ("Data understanding hỏi file có đo được quyết định đã chốt hay không.", "Data understanding asks whether the file can measure the decision you already locked."),
    ("Ví dụ: cột «số tin nhắn» không trả lời «khách có quay lại». Hai việc khác nhau. Số này là ví dụ về kiểu lệch, không phải một benchmark.", "Example: a “message count” column does not answer “did the customer come back”. Those are different jobs. The point is the kind of mismatch, not a benchmark."),
    [("Viết hạt của một dòng: một dòng là một gì.", "Write the grain: one row is one what."), ("Chỉ những cột mà câu hỏi việc thực sự dùng.", "Name the columns the business question actually uses."), ("Thiếu cột đó thì nói thiếu, đừng lấy cột hàng xóm thế chỗ.", "If that column is missing, say so. Don't substitute the neighbor column.")],
    ("Một dòng có hạt: một phiên, một đơn, hay một khách. Nhầm hạt thì mọi tỷ lệ sau đều là tỷ lệ của hạt đó, không phải của câu hỏi. Hiểu dữ liệu là kiểm hạt, nguồn, và độ phủ. Chưa phải làm model.", "A row has a grain: one session, one order, or one customer. The wrong grain makes every later rate a rate of that grain, not of the question. Understanding data checks grain, source, and coverage. It is not modeling yet."),
    ("Có cột không phải có câu trả lời.", "Having the column is not having the answer."),
)

K(
    "crisp-prep", C02, "s-8ee91c066372", "Prepare, model, evaluate", "C0 · CRISP", "S2 Làm rồi mới chấm", "Analytics Problem Solving",
    ("Làm sạch để hỏi được. Model chưa phải quyết định", "Clean so you can ask. A model is not yet a decision."),
    ("Để một accuracy đẹp không bị mang ra brief như thể việc đã xong.", "So a pretty accuracy is not briefed as if the job were done."),
    ("File đã được nhìn dưới câu hỏi việc. Bước sau là sửa file cho đúng hạt, rồi mới mô hình, rồi mới chấm.", "The file has been looked at under the business question. Next you fix the grain, then model, then score."),
    ("làm cho đúng hạt", "fix the grain"), ("chấm bằng accuracy", "score with accuracy"),
    ("Chuẩn bị là sửa hạt và lỗ hổng. Model là một cách trả lời. Evaluation hỏi cách đó có đỡ quyết định không.", "Preparation fixes grain and holes. A model is one way to answer. Evaluation asks whether that way helps the decision."),
    ("Accuracy trên lớp đông có thể đẹp mà không giữ được ai.", "Accuracy on a crowded class can look good and still keep nobody."),
    ("Ba bước giữa CRISP: prepare, model, evaluate. Chúng không phải một nút.", "The middle of CRISP is prepare, model, evaluate. They are not one button."),
    ("Ví dụ: 92 người ở, 8 người rời. Gọi tất cả là ở thì đúng 92%. Việc «giữ người sắp rời» được 0. Số này là ví dụ minh họa.", "Example: 92 stay, 8 leave. Calling everyone a stay is 92% right. The job “keep the people about to leave” scores 0. These numbers illustrate."),
    [("Sửa hạt và chỗ trống trước khi kể một tỷ lệ.", "Fix the grain and the blanks before you quote a rate."), ("Viết thước của quyết định trước khi train.", "Write the decision's measure before you train."), ("Thước đó không mặc định là accuracy.", "That measure is not accuracy by default.")],
    ("Data preparation đổi bảng để câu hỏi đọc được: lọc có chủ đích, điền chỗ trống có ghi lại cách điền, không xóa vì số trông lạ. Modeling chọn một họ mô hình. Evaluation chấm bằng cái giá đã viết ở business understanding, trên dữ liệu chưa dùng để chọn.", "Data preparation changes the table so the question can be read: filter on purpose, fill blanks and record how, don't delete a row because the number looks odd. Modeling picks a family. Evaluation scores with the cost written in business understanding, on data not used to choose."),
    ("Làm xong model chưa phải làm xong việc.", "A finished model is not a finished job."),
)

K(
    "crisp-ship", C02, "s-8ee91c066372", "Deployment", "C0 · CRISP", "S2 Làm rồi mới chấm", "Analytics Problem Solving",
    ("Đưa ra quyết định thật mới là deployment", "Deployment is the decision in the wild."),
    ("Để một file kết quả không bị gọi là đã triển khai.", "So a result file is not called deployed."),
    ("Đã chấm model bằng thước của việc. Bước cuối là việc đó có chạy ngoài sổ hay không.", "The model was scored on the job's measure. The last step is whether that job runs outside the notebook."),
    ("một file gửi", "a file you send"), ("một quyết định chạy", "a decision that runs"),
    ("Deployment là quyết định được dùng lặp lại, có người chịu, có lúc nào thì làm lại.", "Deployment is a decision used again, with an owner, and a time when it is rebuilt."),
    ("Gửi một file cuối tuần không phải là đã đưa vào vận hành.", "Sending a Friday file is not the same as running it."),
    ("Deployment trong CRISP là đưa kết quả vào việc, rồi theo dõi khi việc đổi.", "Deployment in CRISP puts the result into the job, then watches for the job changing."),
    ("Ví dụ: ngân sách TikTok tuần sau được chỉnh theo một ngưỡng đã viết. Ai bấm, bấm vào thứ mấy, và khi nào thì coi mô hình cũ. Không có ba câu đó thì mới chỉ là một bản xuất.", "Example: next week's TikTok budget moves by a threshold you wrote down. Who presses it, on which day, and when the old model is retired. Without those three, you only have an export."),
    [("Ghi ai dùng số này để làm gì.", "Write who uses this number, and for what."), ("Ghi khi nào chạy lại.", "Write when it is rerun."), ("Khi dữ liệu đổi nghĩa, quay lại câu hỏi việc, không vá model.", "When the data changes meaning, go back to the business question. Don't patch the model.")],
    ("CRISP là một vòng, không phải một mũi tên. Deployment mà không có chủ và không có lịch làm lại thì việc sẽ dùng một số cũ mà không ai biết số đó đã nói về tuần nào.", "CRISP is a loop, not an arrow. Deployment with no owner and no rerun date means the job keeps using an old number, and nobody knows which week that number was about."),
    ("Xuất file không phải triển khai.", "An export is not a deployment."),
)

K(
    "ps-open", C03, "s-fc0f8bf1409a", "Problem-solving map", "C0 · Cách nghĩ", "S1 Bản đồ cách nghĩ", "M1",
    ("Sáu bước, không phải một mẹo", "Six steps, not one trick."),
    ("Để một buổi không có video vẫn có chỗ đứng trong cách nghĩ.", "So a session with no video still has a place in the way of thinking."),
    ("CRISP đã là vòng của một dự án dữ liệu. Khóa này là cách nghĩ trước khi có file.", "CRISP was the loop of a data project. This course is how you think before there is a file."),
    ("sáu bước", "six steps"), ("một mẹo", "one trick"),
    ("Hiểu việc, đặt khung, tìm nguyên nhân, xét cách, rồi làm và đo.", "Understand the job, frame it, find a cause, weigh options, then do it and measure."),
    ("Buổi 4 và buổi 6 trong file gốc chỉ có tiêu đề. Ý vẫn được dạy ở đây, không bịa thêm video.", "Sessions 4 and 6 in the source file are titles only. The idea is still taught here. No fake video."),
    ("Cách giải một việc đi theo sáu cửa, mỗi cửa một câu hỏi khác.", "Solving a job walks six doors. Each door is a different question."),
    ("Ví dụ: «form giảm» chưa phải một việc. Việc là «tuần sau có tắt kênh này không». Các bước sau chỉ phục vụ câu đó.", "Example: “forms dropped” is not yet a job. The job is “do we turn this channel off next week”. Later steps only serve that sentence."),
    [("Đọc đủ sáu cửa trước khi nhảy vào một khung có tên.", "Read all six doors before you jump to a named framework."), ("Buổi nào không có video thì dùng thẻ, đừng chờ clip.", "A session with no video still uses the card. Don't wait for a clip."), ("Khung ở C5 là công cụ của các cửa này, không thay các cửa.", "The C5 frameworks are tools for these doors. They don't replace the doors.")],
    ("S1 của giáo trình là mở đầu. Các cửa là: loại việc, việc và ý kiến, khung SMART và thứ tự, nguyên nhân, phương án và hệ quả, rồi làm và đo. Hai cửa giữa và cuối không có video trong file. Chúng vẫn là ý, không phải chỗ trống.", "The syllabus S1 is the opener. The doors are: the kind of problem, fact and opinion, a SMART frame and an order, cause, options and what follows, then do it and measure. The middle door and the last door have no video in the file. They are still ideas, not blanks."),
    ("Không có video không có nghĩa là không có ý.", "No video does not mean no idea."),
)

K(
    "ps-type", C03, "s-cc61fb75c82c", "Kinds of problem", "C0 · Cách nghĩ", "S2 Loại việc", "M1",
    ("Loại việc đổi cách hỏi", "The kind of problem changes the question."),
    ("Để khỏi dùng một cây quyết định cho một việc chưa biết mình đang chọn hay đang giải thích.", "So a decision tree is not used on a job that does not know whether it is choosing or explaining."),
    ("Đã có sáu cửa. Cửa đầu là nhận loại việc.", "You have six doors. The first door is the kind of problem."),
    ("đang chọn", "choosing"), ("đang giải thích", "explaining"),
    ("Việc «chọn» cần một thước. Việc «giải thích» cần một cơ chế. Trộn hai cái thì ra một slide không ai làm được.", "A choosing job needs a measure. An explaining job needs a mechanism. Mix them and you get a slide nobody can act on."),
    ("«Vì sao form giảm» và «có tắt kênh không» là hai việc.", "“Why did forms drop” and “do we turn the channel off” are two jobs."),
    ("Gọi đúng loại việc trước khi chọn công cụ.", "Name the kind of problem before you pick a tool."),
    ("Ví dụ: tắt một kênh là một lựa chọn, có ngân sách và một ngày. Giải thích vì sao form giảm là một câu chuyện nguyên nhân. Câu chuyện không tự thành nút tắt.", "Example: turning a channel off is a choice, with a budget and a date. Explaining a drop in forms is a cause story. The story does not press the button by itself."),
    [("Hỏi: kết quả là một quyết định, hay một lời giải thích.", "Ask: is the output a decision, or an explanation."), ("Quyết định thì viết thước và hạn.", "A decision gets a measure and a deadline."), ("Giải thích thì viết cái gì sẽ đổi nếu lời giải thích đúng.", "An explanation gets what would change if it were right.")],
    ("Một việc vận hành (làm thế nào cho đều), một việc lựa chọn (chọn phương án nào), và một việc chẩn đoán (vì sao) không dùng chung một trang kết luận. Gọi nhầm loại thì mọi khung sau, kể cả 5 Whys hay một model, trả lời nhầm câu.", "An operations job (how to make it steady), a choice (which option), and a diagnosis (why) do not share one closing page. Name the kind wrong and every later frame, including 5 Whys or a model, answers the wrong question."),
    ("Sai loại việc thì đúng công cụ vẫn sai.", "The right tool on the wrong kind of job is still wrong."),
)

K(
    "ps-fact", C03, "s-cc61fb75c82c", "Fact and opinion", "C0 · Cách nghĩ", "S2 Loại việc", "M1",
    ("Một số đo được không phải một ý kiến", "A measured number is not an opinion."),
    ("Để «em thấy form yếu» không ngồi cùng chỗ với «tuần này 80 form».", "So “I feel forms are weak” does not sit in the same slot as “80 forms this week”."),
    ("Đã biết loại việc. Câu nói về việc đó vẫn phải tách số và lời.", "You know the kind of job. Sentences about it still have to split numbers from talk."),
    ("80 form", "80 forms"), ("em thấy yếu", "I feel it's weak"),
    ("Số là cái đếm được, trong một hạt, trong một khoảng thời gian. Ý kiến là một lời chưa có mẫu số.", "A fact is something counted, at a grain, over a time. An opinion is a sentence with no denominator."),
    ("«Yếu» không cộng được với «80».", "“Weak” cannot be added to “80”."),
    ("Việc và ý kiến phải để hai cột.", "Facts and opinions go in two columns."),
    ("Ví dụ: tuần này 80 form trên 2.000 click là 4%. «Kênh này yếu» là một lời. Lời đó có thể đúng với một ngưỡng bạn viết ra, ví dụ dưới 3%. Không viết ngưỡng thì lời vẫn là lời. Số là ví dụ.", "Example: 80 forms on 2,000 clicks this week is 4%. “This channel is weak” is a sentence. It can be true against a threshold you write, say under 3%. With no threshold, the sentence stays an opinion. The numbers illustrate."),
    [("Viết số kèm hạt và khoảng thời gian.", "Write the number with its grain and its time window."), ("Viết ý kiến ở cột khác.", "Write opinions in another column."), ("Một ý kiến chỉ thành việc khi có ngưỡng và người quyết.", "An opinion becomes a job only with a threshold and a person who decides.")],
    ("Fact là một phát biểu kiểm được trên dữ liệu đã chỉ. Opinion là một đánh giá. Đưa ý kiến vào chỗ của số thì người sau không biết phải đo lại cái gì. Đưa số vào chỗ của quyết định thì số không tự bấm nút.", "A fact is a claim you can check on data you named. An opinion is a judgment. Put the opinion where the number goes and the next person does not know what to remeasure. Put the number where the decision goes and the number does not press the button."),
    ("«Yếu» cần một ngưỡng. Không có ngưỡng thì chưa có việc.", "“Weak” needs a threshold. Without one, there is no job yet."),
)

K(
    "ps-smart", C03, "s-58778c38abea", "SMART frame", "C0 · Cách nghĩ", "S3 Khung việc", "M1",
    ("SMART là một câu việc, không phải một slogan", "SMART is a job sentence, not a slogan."),
    ("Để «tăng form» không được đem đi làm khi chưa có số, hạn, và người.", "So “raise forms” is not a job until it has a number, a date, and a person."),
    ("Đã tách số và lời. Khung việc ghép số đó thành một câu làm được.", "Numbers and talk are split. The frame turns the number into a sentence you can do."),
    ("tăng form", "raise forms"), ("+20 form, hạn chót", "plus 20 forms, by a date"),
    ("Một việc SMART nói rõ cái gì, đo bằng gì, với nguồn lực nào, liên quan quyết định nào, và hạn nào.", "A SMART job says what, measured how, with which means, tied to which decision, and by when."),
    ("«Tăng trưởng» không có hạn là một poster.", "“Growth” with no date is a poster."),
    ("Specific, measurable, achievable, relevant, time-bound. Năm chữ, một câu.", "Specific, measurable, achievable, relevant, time-bound. Five words, one sentence."),
    ("Ví dụ: «Đến 30/11, form từ TikTok thêm 20 một tuần so với tuần 80, trên cùng cách đếm, anh Minh quyết có tăng ngân sách thêm 10% hay không.» Số là ví dụ minh họa.", "Example: “By 30 Nov, TikTok forms are 20 a week above the week of 80, counted the same way, and Minh decides whether to add 10% budget.” The numbers illustrate."),
    [("Bỏ tính từ. Để lại số và hạn.", "Drop the adjective. Leave a number and a date."), ("Ghi người được phép kết luận.", "Name the person allowed to conclude."), ("Nếu không đo lại được bằng cùng một hạt, câu đó chưa measurable.", "If you cannot remeasure it at the same grain, it is not measurable yet.")],
    ("Specific là một đối tượng, không phải «kênh». Measurable là một công thức đếm lại được. Achievable là nằm trong nguồn lực đã có, không phải một lời cổ vũ. Relevant là nối tới quyết định, không phải tới một KPI trang trí. Time-bound là một ngày, không phải «sớm».", "Specific is one object, not “channels”. Measurable is a count you can repeat. Achievable sits inside the means you have, not a pep talk. Relevant ties to the decision, not to a decorative KPI. Time-bound is a date, not “soon”."),
    ("Không có hạn thì không có việc. Có một tính từ thì cũng chưa có.", "No date, no job. An adjective is not a job either."),
)

K(
    "ps-rank", C03, "s-58778c38abea", "Priority", "C0 · Cách nghĩ", "S3 Khung việc", "M1",
    ("Ưu tiên là bỏ bớt, không phải đánh số mọi thứ", "Priority is cutting, not numbering everything."),
    ("Để một danh sách mười việc «đều quan trọng» không thành kế hoạch.", "So a list of ten jobs that are “all important” is not a plan."),
    ("Đã có một câu SMART. Nếu có nhiều câu, phải có câu không làm trong hạn này.", "You have one SMART sentence. If there are several, some of them are not done in this window."),
    ("làm hạn này", "this window"), ("để hạn sau", "a later window"),
    ("Ưu tiên là chọn việc nào được nguồn lực của đúng hạn này. Việc còn lại không bị gọi là kém. Nó chỉ không nằm trong hạn.", "Priority is which job gets this window's means. The rest are not called lesser. They are just not in this window."),
    ("Đánh số 1 đến 10 mà vẫn làm cả mười là chưa ưu tiên.", "Numbering 1 to 10 and still doing all ten is not a priority."),
    ("Một hạn, một việc được nuôi. Các việc khác ghi là chưa làm.", "One window, one job that is fed. The others are written as not now."),
    ("Ví dụ: hạn 30/11 chỉ đủ cho câu TikTok. Câu «làm lại logo» có thể đúng mà vẫn để sau. Ghi «để sau» là một quyết định, không phải quên.", "Example: the 30 Nov window only fits the TikTok sentence. “Redo the logo” can be real and still wait. Writing “later” is a decision, not forgetting."),
    [("Liệt kê việc đang tranh cùng một nguồn lực.", "List the jobs that compete for the same means."), ("Chọn việc nào làm trong hạn đã viết.", "Pick which one is done inside the date you wrote."), ("Viết các việc kia là chưa làm, kèm hạn sẽ xem lại.", "Write the others as not now, with a date to look again.")],
    ("Hai việc cùng cần một người trong một tuần thì không cùng ưu tiên một. Ma trận gấp và quan trọng chỉ là một cách nhìn. Nó không biến hai việc thành một nguồn lực.", "Two jobs that need the same person in the same week are not both priority one. An urgent-important grid is only a view. It does not turn two jobs into one person's time."),
    ("Gọi mọi thứ là ưu tiên thì không có ưu tiên.", "Calling everything a priority means there is no priority."),
)

K(
    "ps-cause", C03, "s-564bad7a21d6", "Cause", "C0 · Cách nghĩ", "S4 Nguyên nhân", "M1",
    ("Nguyên nhân là cái bạn xoay được", "A cause is something you can turn."),
    ("Để «do thị trường» không kết thúc một buổi không có video.", "So “the market did it” does not end a session that has no video."),
    ("Việc đã được khung và đã được xếp hạn. Buổi này trong file chỉ có tiêu đề. Ý là: tìm cái xoay được.", "The job is framed and ordered. This session in the file is a title only. The idea is: find the thing you can turn."),
    ("xoay được", "you can turn it"), ("chỉ là bối cảnh", "only the setting"),
    ("Một nguyên nhân đáng đưa vào việc là một thứ, nếu đổi nó, thước đã viết sẽ đổi. Bối cảnh không có nút thì không phải nguyên nhân để làm.", "A cause worth putting in the job is something that, if changed, moves the measure you wrote. A setting with no lever is not a cause you can work."),
    ("«Thị trường khó» không có nút bấm trong hạn 30/11.", "“The market is hard” has no button inside the 30 Nov window."),
    ("Tách cái xoay được khỏi cái chỉ đứng quanh.", "Split what you can turn from what is only standing around."),
    ("Ví dụ: form TikTok giảm. «Người dùng chán mạng xã hội» không xoay được trong hai tuần. «Landing đang 404 trên điện thoại» xoay được. Buổi này không có clip trong giáo trình. Số 404 là ví dụ minh họa.", "Example: TikTok forms fell. “People are tired of social apps” cannot be turned in two weeks. “The landing page 404s on a phone” can. This session has no clip in the syllabus. The 404 is an illustration."),
    [("Liệt kê các lời giải thích đang có.", "List the explanations already in the room."), ("Gạch cái nào không có nút trong hạn.", "Cross out the ones with no lever inside the date."), ("Cái còn lại mới được đem đi thử.", "Only what remains is worth a test.")],
    ("File gốc không có video cho buổi Analysing the Problem. Ý không vì thế mà trống. Nguyên nhân ở đây không phải một hệ số hồi quy. Đó là một thay đổi mà người trong hạn này làm được, và thước SMART sẽ nhích nếu thay đổi đó là thật. C5 sẽ có 5 Whys như một cách hỏi tiếp. Đừng dừng ở «do con người».", "The source file has no video for Analysing the Problem. The idea is not empty because of that. A cause here is not a regression coefficient. It is a change someone in this window can make, such that the SMART measure moves if the change is real. C5 will use 5 Whys as a way to keep asking. Don't stop at “human error”."),
    ("Không xoay được thì chưa phải nguyên nhân của hạn này.", "If you cannot turn it, it is not this window's cause."),
)

K(
    "ps-opt", C03, "s-ad941297b818", "Options", "C0 · Cách nghĩ", "S5 Phương án", "M1",
    ("Mỗi phương án kéo theo một hệ quả", "Each option drags a consequence."),
    ("Để một danh sách ý tưởng không bị bỏ phiếu như thể chúng cùng giá.", "So a list of ideas is not voted on as if they cost the same."),
    ("Đã có một nguyên nhân xoay được. Giờ là các cách xoay, và cái giá của từng cách.", "You have a cause you can turn. Now the ways to turn it, and what each way costs."),
    ("cùng một giá", "the same cost"), ("mỗi cách một giá", "each way has a cost"),
    ("Một phương án là một việc làm được trong hạn, kèm cái sẽ xảy ra nếu làm, và nếu không làm.", "An option is something you can do in the window, with what happens if you do it, and if you don't."),
    ("Ba ý «hay» không có nghĩa là làm được cả ba.", "Three “good” ideas does not mean you can do all three."),
    ("Viết phương án kèm hệ quả, không kèm tính từ.", "Write the option with its consequence, not with an adjective."),
    ("Ví dụ: sửa 404 mất hai ngày của một người, form có thể về mức cũ nếu 404 là nguyên nhân. Làm landing mới mất ba tuần, trễ hạn 30/11. Không làm gì thì giữ nguyên 80. Số là ví dụ.", "Example: fixing the 404 takes one person two days, and forms might return if the 404 was the cause. A new landing page takes three weeks and misses 30 Nov. Doing nothing keeps 80. The numbers illustrate."),
    [("Mỗi phương án một dòng: làm gì, tốn gì, thước nhích thế nào.", "One line per option: what you do, what it costs, how the measure moves."), ("Gồm cả phương án không làm.", "Include the option of doing nothing."), ("Bỏ phương án nào không nằm trong hạn hoặc không đụng nguyên nhân.", "Drop any option outside the window, or that doesn't touch the cause.")],
    ("Hệ quả gồm cái được và cái mất, kể cả cái mất khi chọn nhầm nguyên nhân. So phương án trên cùng một thước đã viết ở SMART. Đừng thêm một thước mới ở bước này để phương án yêu thích thắng.", "Consequences include what you gain and what you lose, including the loss if the cause was wrong. Compare options on the measure already written in SMART. Don't add a new measure at this step so a favorite option wins."),
    ("Một ý tưởng chưa có hệ quả thì chưa phải phương án.", "An idea with no consequence is not an option yet."),
)

K(
    "ps-do", C03, "s-d689f82a906a", "Do and measure", "C0 · Cách nghĩ", "S6 Làm và đo", "M1",
    ("Làm xong phải đo lại bằng câu đã viết", "After you do it, remeasure the sentence you wrote."),
    ("Để «đã triển khai» không thay cho một số đo lại.", "So “we shipped” does not stand in for a remeasured number."),
    ("Đã chọn một phương án. Buổi này trong file cũng chỉ có tiêu đề. Ý là đóng vòng: làm, rồi đo đúng thước.", "An option was chosen. This session in the file is also only a title. The idea closes the loop: do it, then measure the same way."),
    ("đã làm", "we did it"), ("đo lại cùng hạt", "remeasure the same grain"),
    ("Làm là đổi cái đã chọn. Đo là đếm lại đúng công thức của câu SMART, sau hạn, cùng hạt.", "Doing is changing what you chose. Measuring is counting the SMART formula again, after the date, at the same grain."),
    ("Một buổi họp «xong» không phải một phép đo.", "A meeting called “done” is not a measurement."),
    ("Không có video cho buổi Implementing the Solutions. Vẫn có một ý: đo lại, đừng kể.", "There is no video for Implementing the Solutions. There is still an idea: remeasure, don't narrate."),
    ("Ví dụ: 404 đã sửa ngày 20/11. Đến 30/11 đếm form TikTok bằng cùng cách với tuần 80. Ra 90 hay ra 70 đều là kết quả. Không đổi cách đếm giữa chừng. Số là ví dụ.", "Example: the 404 was fixed on 20 Nov. On 30 Nov you count TikTok forms the same way as the week of 80. 90 or 70 are both results. You don't change the count in the middle. The numbers illustrate."),
    [("Làm đúng phương án đã chọn, không làm thêm một ý giữa chừng.", "Do the option you chose. Don't add an idea halfway."), ("Đếm lại bằng công thức cũ.", "Count again with the old formula."), ("Số không nhích thì quay lại nguyên nhân, không kể là do đo.", "If the number doesn't move, go back to the cause. Don't blame the measuring.")],
    ("File gốc không có video ở buổi này. Triển khai không phải một cảm giác. Nó là một thay đổi đã xảy ra, cộng một lần đo lại đã hẹn. Nếu hạt đếm đổi giữa chừng, bạn không biết việc có hiệu lực. Đó cũng là lý do CRISP quay lại business understanding khi số không còn nói về cùng một việc.", "The source file has no video for this session. Implementation is not a feeling. It is a change that happened, plus a remeasure you scheduled. If the grain of the count changes halfway, you don't know whether the job worked. That is also why CRISP returns to business understanding when the number no longer talks about the same job."),
    ("Không đo lại được thì chưa làm xong.", "If you cannot remeasure it, it is not done."),
)
