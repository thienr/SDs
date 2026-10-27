//#region node_modules/.nitro/vite/services/ssr/assets/audio-CB2C-30s.js
var audio_default = {
	"infer-intro": {
		"s": "Thẻ này nói về thống kê suy luận, tức là dùng một nhóm nhỏ đã quan sát để nói về nhóm lớn mà bạn không thể xem hết. Hãy tưởng tượng một trang đích có hàng chục nghìn lượt truy cập mỗi tháng. Tuần này bạn chỉ xem bốn trăm lượt và thấy mười hai lượt gửi form, tức ba phần trăm. Khách hỏi: tỷ lệ gửi form của trang có cao hơn hai phần trăm không? Nhóm lớn gọi là tổng thể, nhóm bốn trăm lượt gọi là mẫu. Ba phần trăm chỉ mô tả mẫu, còn kết luận về trang là chuyện của tổng thể. Với bốn trăm lượt, sai lệch khoảng một phẩy bảy điểm phần trăm, nên con số thật có thể nằm từ một phẩy ba đến bốn phẩy bảy phần trăm. Khoảng đó vẫn chứa hai phần trăm, nên chưa đủ để khẳng định. Điều cần nhớ: một con số của mẫu chỉ là ước lượng cho tổng thể, và nó chỉ có ý nghĩa khi đi kèm mức sai lệch.",
		"q": "Mẫu bốn trăm lượt cho ba phần trăm gửi form. Vì sao chưa thể khẳng định tỷ lệ thật cao hơn hai phần trăm?",
		"a": "Vì khoảng sai lệch từ một phẩy ba đến bốn phẩy bảy phần trăm vẫn chứa hai phần trăm. Ba phần trăm chỉ là ước lượng từ mẫu."
	},
	permut: {
		"s": "Thẻ này nói về hoán vị, tức là đếm số cách chọn và xếp khi thứ tự có ý nghĩa. Đáng biết vì lập lịch, xếp hạng hay phân vai đều cần đếm kiểu này. Giả sử agency có tám KOL, và bạn cần chọn ba người cho ba khung giờ livestream: mở màn, giữa chương trình và chốt. Khung giờ khác nhau, nên một KOL mở màn khác với chính người đó chốt chương trình. Cách đếm rất đơn giản. Vị trí mở màn có tám lựa chọn. Chọn xong, vị trí giữa còn bảy lựa chọn. Vị trí chốt còn sáu. Nhân ba số này lại: tám nhân bảy nhân sáu bằng ba trăm ba mươi sáu phương án lịch. Cẩn thận chỗ này: nếu thứ tự không quan trọng thì chỉ có năm mươi sáu nhóm, và con số ba trăm ba mươi sáu sẽ đếm mỗi nhóm tới sáu lần. Điều cần nhớ: khi thứ tự có ý nghĩa, số cách chọn và xếp được tính bằng hoán vị.",
		"q": "Có tám KOL, chọn ba người cho ba khung giờ khác nhau. Có bao nhiêu phương án lịch?",
		"a": "Ba trăm ba mươi sáu phương án, lấy tám nhân bảy nhân sáu."
	},
	combin: {
		"s": "Thẻ này nói về tổ hợp, tức là đếm số cách chọn một nhóm khi thứ tự không có ý nghĩa. Đáng biết vì nếu nhầm với hoán vị, bạn sẽ đếm dư nhiều lần. Vẫn tám KOL, nhưng lần này khách chỉ cần chọn ba người vào một gói seeding. Ba người làm việc cùng lúc, không có ai mở màn hay chốt. Chọn A, B, C hay C, B, A đều là cùng một gói. Bắt đầu từ con số hoán vị là ba trăm ba mươi sáu. Mỗi nhóm ba người cụ thể đã bị đếm sáu lần, vì ba người có sáu cách sắp xếp với nhau. Vậy chia ba trăm ba mươi sáu cho sáu, ra năm mươi sáu nhóm khác nhau. Nếu bạn báo ba trăm ba mươi sáu cho gói seeding, bạn đã đếm mỗi nhóm sáu lần. Điều cần nhớ: tổ hợp bằng hoán vị chia cho số cách sắp xếp bên trong một nhóm.",
		"q": "Tám KOL, chọn ba người vào một gói seeding mà không phân thứ tự. Có bao nhiêu nhóm?",
		"a": "Năm mươi sáu nhóm, bằng ba trăm ba mươi sáu chia cho sáu."
	},
	"prob-def": {
		"s": "Thẻ này nói về xác suất, một con số từ không đến một đo khả năng một việc xảy ra. Không nghĩa là không thể xảy ra, một nghĩa là chắc chắn xảy ra. Đáng biết vì mọi kết luận về dữ liệu đều đứng trên khái niệm này. Giả sử trong hai trăm lượt truy cập thử nghiệm, có mười sáu lượt gửi form. Khách muốn biết khả năng một lượt bất kỳ sẽ gửi form. Biến cố bạn quan tâm là lượt truy cập gửi form. Lấy mười sáu chia hai trăm được không phẩy không tám, tức tám phần trăm. Đây là ước lượng của xác suất, tính từ dữ liệu đã quan sát. Nhưng cẩn thận, tám phần trăm chỉ ước lượng từ hai trăm lượt, nên xác suất thật của lượt kế tiếp có thể hơi khác. Điều cần nhớ: xác suất cho biết biến cố chiếm bao nhiêu phần trong toàn bộ các kết quả có thể xảy ra.",
		"q": "Hai trăm lượt thử nghiệm có mười sáu lượt gửi form. Ước lượng xác suất một lượt gửi form là bao nhiêu?",
		"a": "Không phẩy không tám, tức tám phần trăm, lấy mười sáu chia hai trăm."
	},
	events: {
		"s": "Thẻ này giúp bạn phân biệt hai khái niệm hay bị lẫn: biến cố xung khắc và biến cố độc lập. Xung khắc nghĩa là không thể cùng xảy ra. Độc lập nghĩa là biết cái này xảy ra không làm đổi xác suất của cái kia. Một lượt truy cập có thể vừa gửi form vừa đến từ Google Display Network, nên hai biến cố này không xung khắc. Nhưng một lượt không thể vừa gửi form vừa không gửi form, nên hai biến cố này xung khắc. Nếu xác suất gửi form là tám phần trăm, xác suất không gửi là chín mươi hai phần trăm. Lưu ý: xung khắc không có nghĩa là độc lập. Hai biến cố xung khắc mà mỗi cái có xác suất lớn hơn không thì luôn phụ thuộc nhau, vì biết cái này xảy ra là chắc chắn cái kia không xảy ra. Điều cần nhớ: xung khắc là không thể cùng xảy ra, còn độc lập là biết cái này không làm đổi xác suất của cái kia.",
		"q": "Hai biến cố xung khắc và có xác suất lớn hơn không thì có độc lập không?",
		"a": "Không, chúng luôn phụ thuộc nhau, vì biết cái này xảy ra là chắc chắn cái kia không xảy ra."
	},
	"add-rule": {
		"s": "Thẻ này nói về quy tắc cộng, dùng để tính xác suất của việc này hoặc việc kia. Giả sử trong các lượt truy cập, tám phần trăm gửi form và bốn mươi phần trăm đến từ Google Display Network. Có năm phần trăm lượt vừa gửi form vừa đến từ kênh đó. Khách muốn biết tỷ lệ lượt thuộc ít nhất một trong hai nhóm. Cộng tám với bốn mươi được bốn mươi tám phần trăm. Nhưng năm phần trăm lượt vừa gửi form vừa từ kênh đó đã bị tính hai lần, một lần ở mỗi nhóm. Trừ đi năm phần trăm, còn bốn mươi ba phần trăm. Vậy bốn mươi ba phần trăm lượt gửi form hoặc đến từ kênh đó. Nếu quên trừ, bạn sẽ báo bốn mươi tám phần trăm, cao hơn thực tế. Điều cần nhớ: xác suất của A hoặc B là tổng hai xác suất trừ phần chung. Chỉ khi hai biến cố xung khắc thì phần chung bằng không và không cần trừ.",
		"q": "Tám phần trăm gửi form, bốn mươi phần trăm từ kênh GDN, năm phần trăm thuộc cả hai. Bao nhiêu phần trăm thuộc ít nhất một nhóm?",
		"a": "Bốn mươi ba phần trăm, vì tám cộng bốn mươi trừ năm."
	},
	"mul-rule": {
		"s": "Thẻ này nói về quy tắc nhân, dùng để tính xác suất hai việc cùng xảy ra. Đáng biết vì nhân sai tỷ lệ là lỗi rất phổ biến trong báo cáo. Giả sử bốn mươi phần trăm lượt truy cập đến từ Google Display Network. Trong riêng các lượt từ kênh này, mười phần trăm gửi form. Khách muốn biết tỷ lệ lượt vừa đến từ kênh đó vừa gửi form. Lấy bốn mươi phần trăm nhân với mười phần trăm, ra bốn phần trăm. Mười phần trăm ở đây là xác suất có điều kiện, nghĩa là xác suất gửi form tính riêng trong những lượt đã đến từ kênh đó. Nếu bạn lấy bốn mươi phần trăm nhân với tám phần trăm, tức tỷ lệ gửi form của mọi lượt, thì sẽ sai, trừ khi hai việc độc lập. Điều cần nhớ: chỉ được nhân thẳng hai xác suất riêng lẻ khi hai biến cố độc lập. Nếu không, phải dùng xác suất có điều kiện.",
		"q": "Bốn mươi phần trăm lượt từ GDN, và trong các lượt đó mười phần trăm gửi form. Bao nhiêu phần trăm lượt vừa từ GDN vừa gửi form?",
		"a": "Bốn phần trăm, bằng bốn mươi phần trăm nhân mười phần trăm."
	},
	rv: {
		"s": "Thẻ này nói về biến ngẫu nhiên, tức là cách biến kết quả của một phép thử có yếu tố ngẫu nhiên thành con số. Đáng biết vì có con số thì bạn mới tính được trung bình và mức dao động. Ví dụ, với mỗi lượt truy cập, bạn cho điểm một nếu lượt đó gửi form và điểm không nếu không. Hoặc bạn chọn đếm số form nhận được trong một ngày. Số form là biến rời rạc, nhận các giá trị đếm được. Số giây ở lại trang là biến liên tục, nhận giá trị bất kỳ trong một khoảng. Lưu ý: biến ngẫu nhiên là quy tắc gán số cho kết quả, chứ không phải một con số cố định. Điều cần nhớ: biến ngẫu nhiên biến kết quả thành con số, và đó là điều kiện để tính trung bình và mức dao động.",
		"q": "Số giây một người ở lại trang là biến rời rạc hay biến liên tục?",
		"a": "Là biến liên tục, vì nó nhận giá trị bất kỳ trong một khoảng."
	},
	dist: {
		"s": "Thẻ này nói về phân phối xác suất, cho biết mỗi giá trị của biến ngẫu nhiên có xác suất bao nhiêu. Đáng biết vì chỉ một con số trung bình không đủ để mô tả sự bất định. Giả sử một ngày có thể nhận không, một, hai hoặc ba form. Khách không chỉ muốn số form trung bình mà còn muốn biết khả năng của từng số. Giả sử xác suất lần lượt là bốn mươi, ba mươi, hai mươi và mười phần trăm. Cộng lại vừa đúng một trăm phần trăm, đúng như phân phối rời rạc phải có. Với biến liên tục như số giây, xác suất tại đúng một điểm bằng không, nên ta phải hỏi xác suất của một khoảng. Lưu ý rằng hai ngày có cùng số form trung bình vẫn có thể có phân phối rất khác nhau. Điều cần nhớ: trung bình chỉ là một con số, còn phân phối xác suất mô tả khả năng của mọi giá trị.",
		"q": "Vì sao hai ngày có cùng số form trung bình vẫn có thể khác nhau?",
		"a": "Vì phân phối xác suất có thể khác nhau, còn trung bình chỉ là một con số."
	},
	ev: {
		"s": "Thẻ này nói về kỳ vọng, tức là mức trung bình mà một biến ngẫu nhiên đạt được nếu lặp lại phép thử rất nhiều lần. Giả sử mỗi lead trở thành một form với xác suất hai mươi lăm phần trăm. Khách có một trăm lead và muốn biết khoảng bao nhiêu form sẽ đến. Cách tính là lấy mỗi giá trị nhân xác suất của nó rồi cộng lại: không nhân bảy mươi lăm phần trăm, cộng một nhân hai mươi lăm phần trăm, ra không phẩy hai lăm. Với một trăm lead thì số form kỳ vọng là một trăm nhân không phẩy hai lăm, bằng hai mươi lăm. Lưu ý: kỳ vọng không nhất thiết là giá trị mà biến có thể nhận. Không phẩy hai lăm không phải không hay một, và một lead riêng lẻ vẫn có thể cho không form. Điều cần nhớ: kỳ vọng là mức trung bình của rất nhiều lần lặp, không phải kết quả chắc chắn của một lần.",
		"q": "Mỗi lead cho form với xác suất hai mươi lăm phần trăm. Với một trăm lead, số form kỳ vọng là bao nhiêu?",
		"a": "Khoảng hai mươi lăm form, nhưng đó là mức dài hạn, không phải lời hứa chắc chắn."
	},
	"no-exp": {
		"s": "Thẻ này nói rằng bạn có thể tính xác suất từ một mô hình gồm các giả định, ngay cả khi chưa có dữ liệu. Đáng biết vì khi chiến dịch chưa chạy, đây là cách duy nhất để ước tính trước. Giả sử mỗi lượt truy cập gửi form với xác suất tám phần trăm. Khách muốn biết khả năng có đúng năm lượt gửi form trong bốn mươi lượt. Bạn dùng mô hình nhị thức, giả định rằng có bốn mươi lượt thử, mỗi lượt chỉ thành công hoặc thất bại, các lượt độc lập và có cùng xác suất thành công. Với những giả định đó, xác suất có đúng năm form là khoảng mười một phẩy sáu phần trăm. Cách tính nằm ở bài phân phối nhị thức. Nhưng hãy nhớ, kết quả này chỉ đúng nếu giả định đúng, và nó không thay thế việc kiểm tra bằng dữ liệu thật. Điều cần nhớ: công thức không thay thế dữ liệu; nó cho biết điều gì xảy ra nếu các giả định là đúng.",
		"q": "Kết quả mười một phẩy sáu phần trăm từ mô hình nhị thức đúng với điều kiện gì?",
		"a": "Đúng nếu các giả định của mô hình là đúng. Nó không thay thế việc kiểm tra bằng dữ liệu thật."
	},
	binomial: {
		"s": "Thẻ này nói về phân phối nhị thức, dùng để đếm số lần thành công trong nhiều lần thử giống nhau và độc lập. Đáng biết vì nó cho bạn biết một tuần ít form có bất thường hay không. Giả sử có bốn mươi lượt truy cập, mỗi lượt gửi form với xác suất tám phần trăm, và các lượt không ảnh hưởng nhau. Khách hỏi khả năng có đúng năm form. Tính ra khoảng mười một phẩy sáu phần trăm. Mức trung bình dài hạn là bốn mươi nhân không phẩy không tám, bằng ba phẩy hai form. Nhưng ba phẩy hai chỉ là trung bình. Một tuần vẫn có thể ra không form với xác suất khoảng ba phẩy sáu phần trăm. Điều cần nhớ: số lượt nhân xác suất cho biết mức trung bình, còn cả phân phối mới cho biết một tuần ít form có bất thường hay không.",
		"q": "Bốn mươi lượt, xác suất gửi form tám phần trăm. Số form trung bình dài hạn là bao nhiêu?",
		"a": "Ba phẩy hai form, bằng bốn mươi nhân không phẩy không tám."
	},
	cdf: {
		"s": "Thẻ này nói về xác suất tích lũy, tức là cộng dồn xác suất từ giá trị nhỏ nhất đến một mốc nào đó. Đáng biết vì khách hiếm khi hỏi đúng một con số, họ hay hỏi ít hơn hoặc nhiều hơn một mốc. Giả sử một tuần có bốn mươi lượt truy cập, xác suất gửi form là tám phần trăm. Khách muốn biết khả năng tuần đó chỉ có ít hơn hai form. Ít hơn hai nghĩa là không form hoặc một form. Xác suất không form khoảng ba phẩy sáu phần trăm, xác suất đúng một form khoảng mười hai phẩy bốn phần trăm. Cộng lại ra khoảng mười lăm phẩy chín phần trăm. Lưu ý: ít hơn hai gồm cả giá trị không, và tối đa hai khác ít hơn hai vì có thêm cột hai. Điều cần nhớ: câu hỏi ít hơn hay tối đa được trả lời bằng tổng của nhiều cột, không phải bằng một cột.",
		"q": "Ít hơn hai form nghĩa là những giá trị nào cần cộng lại?",
		"a": "Là không form và một form. Cộng hai xác suất đó lại."
	},
	pdf: {
		"s": "Thẻ này nói về hàm mật độ xác suất, dùng cho biến liên tục. Điểm mấu chốt là bạn hỏi xác suất của một khoảng, không hỏi xác suất của một điểm. Đáng biết vì thời gian, tiền, khoảng cách đều là biến liên tục. Giả sử thời gian ở lại trang là số giây, và khách muốn biết bao nhiêu phần trăm lượt ở lại dưới ba mươi giây. Xác suất của một khoảng bằng diện tích dưới đường mật độ trong khoảng đó, và tổng diện tích dưới cả đường bằng một. Nếu thời gian ở lại có phân phối chuẩn, trung bình bốn mươi hai giây, độ lệch chuẩn tám giây, thì diện tích phần dưới ba mươi giây là khoảng sáu phẩy bảy phần trăm. Cẩn thận: chiều cao của đường có thể lớn hơn một mà vẫn không phải xác suất, và xác suất tại đúng một điểm luôn bằng không. Điều cần nhớ: với biến liên tục, xác suất là diện tích của một khoảng, và xác suất tại đúng một điểm bằng không.",
		"q": "Với biến liên tục, xác suất ở lại trang đúng bốn mươi giây là bao nhiêu?",
		"a": "Bằng không. Xác suất chỉ có ý nghĩa với một khoảng, tính bằng diện tích."
	},
	normal: {
		"s": "Thẻ này nói về phân phối chuẩn, một họ hình chuông đối xứng. Đáng biết vì chỉ cần hai con số, trung bình và độ lệch chuẩn, là vẽ được cả hình. Giả sử thời gian ở lại trang có trung bình bốn mươi hai giây và độ lệch chuẩn tám giây. Trung bình là tâm, độ lệch chuẩn đo độ rộng. Khoảng sáu mươi tám phần trăm giá trị nằm trong một độ lệch chuẩn quanh trung bình, chín mươi lăm phần trăm nằm trong hai độ lệch chuẩn, và chín mươi chín phẩy bảy phần trăm nằm trong ba. Với bài này, sáu mươi tám phần trăm lượt ở lại từ ba mươi bốn đến năm mươi giây, và chín mươi lăm phần trăm ở lại từ hai mươi sáu đến năm mươi tám giây. Nhưng các mốc này chỉ đúng khi hình gần giống chuông, và không áp dụng cho dữ liệu lệch nhiều. Điều cần nhớ: hai con số, trung bình và độ lệch chuẩn, xác định cả phân phối chuẩn.",
		"q": "Trung bình bốn mươi hai giây, độ lệch chuẩn tám giây. Chín mươi lăm phần trăm lượt ở lại trong khoảng nào?",
		"a": "Từ hai mươi sáu đến năm mươi tám giây, tức hai độ lệch chuẩn quanh trung bình."
	},
	zscore: {
		"s": "Thẻ này nói về điểm Z, cho biết một giá trị nằm cách trung bình bao nhiêu độ lệch chuẩn. Đáng biết vì nó cho phép so sánh những thứ khác đơn vị. Giả sử thời gian ở lại có trung bình bốn mươi hai giây và độ lệch chuẩn tám giây. Chi phí mỗi lead có trung bình một trăm nghìn đồng và độ lệch chuẩn hai mươi nghìn đồng. Bạn không thể so ba mươi giây với chín mươi nghìn đồng trực tiếp. Cách tính: lấy giá trị trừ trung bình rồi chia cho độ lệch chuẩn. Ba mươi giây cho ra âm một phẩy năm. Chín mươi nghìn đồng cho ra âm không phẩy năm. Vậy ba mươi giây lệch xa trung bình hơn. Lưu ý: Z âm không có nghĩa là xấu, chỉ là thấp hơn trung bình. Điều cần nhớ: điểm Z đổi mọi giá trị về cùng một thước, là số độ lệch chuẩn tính từ trung bình.",
		"q": "Giá trị ba mươi giây, trung bình bốn mươi hai, độ lệch chuẩn tám. Điểm Z là bao nhiêu?",
		"a": "Âm một phẩy năm, nghĩa là thấp hơn trung bình một rưỡi độ lệch chuẩn."
	},
	samples: {
		"s": "Thẻ này nói về sự khác nhau giữa mẫu và tổng thể. Đáng biết vì hai mẫu cho hai con số khác nhau chưa chắc có gì thay đổi thật. Cả tháng có hàng chục nghìn lượt truy cập, nhưng bạn chỉ xem bốn trăm lượt của tuần này. Tuần sau bạn xem bốn trăm lượt khác và thấy con số khác. Khách hỏi liệu trang đã thay đổi chưa. Tuần đầu có mười hai form trên bốn trăm lượt, tức ba phần trăm. Tuần hai có mười bốn form, tức ba phẩy năm phần trăm. Hai con số khác nhau, nhưng đó có thể chỉ là biến thiên do lấy mẫu, vì mỗi mẫu là một phần ngẫu nhiên khác nhau của tổng thể. Với chênh lệch nhỏ như vậy, chưa đủ để nói tổng thể đã đổi. Điều cần nhớ: hai mẫu cho hai con số khác nhau chưa có nghĩa là tổng thể đã thay đổi.",
		"q": "Tuần một ba phần trăm, tuần hai ba phẩy năm phần trăm. Có thể kết luận trang đã thay đổi không?",
		"a": "Chưa thể. Chênh lệch nhỏ có thể chỉ do biến thiên khi lấy mẫu."
	},
	"samp-dist": {
		"s": "Thẻ này nói về phân phối mẫu, tức là hình dạng của một thống kê, như trung bình mẫu, khi bạn lặp lại việc lấy mẫu nhiều lần. Đáng biết vì nó cho biết trung bình mẫu dao động bao nhiêu. Giả sử bạn lấy bốn trăm lượt truy cập và tính thời gian ở lại trung bình. Làm lại nhiều lần, mỗi lần ra một trung bình khác nhau. Độ dao động của các trung bình đó gọi là sai số chuẩn. Cách tính: lấy độ lệch chuẩn của từng lượt chia cho căn bậc hai của cỡ mẫu. Với mười hai giây và cỡ mẫu ba mươi sáu, sai số chuẩn là mười hai chia sáu, bằng hai giây. Đừng nhầm hai khái niệm: sai số chuẩn là độ dao động của trung bình mẫu, còn độ lệch chuẩn là độ phân tán của từng lượt truy cập. Điều cần nhớ: trung bình mẫu dao động ít hơn từng quan sát riêng lẻ, và độ dao động giảm theo căn bậc hai của cỡ mẫu.",
		"q": "Độ lệch chuẩn mười hai giây, cỡ mẫu ba mươi sáu. Sai số chuẩn là bao nhiêu?",
		"a": "Hai giây, bằng mười hai chia cho căn bậc hai của ba mươi sáu."
	},
	"samp-props": {
		"s": "Thẻ này nói về hai tính chất của phân phối mẫu: lấy mẫu công bằng thì trung bình các mẫu bằng giá trị thật, và mẫu càng lớn thì các trung bình càng tập trung. Đáng biết vì nó cho bạn biết khi nào nên tăng cỡ mẫu. Giả sử bạn lấy nhiều mẫu cùng cỡ từ một tổng thể. Có mẫu cho trung bình cao, có mẫu cho trung bình thấp, nhưng chúng quanh quẩn đúng giá trị thật. Với độ lệch chuẩn mười hai giây, mẫu ba mươi sáu lượt cho sai số chuẩn hai giây. Mẫu một trăm bốn mươi bốn lượt cho sai số chuẩn một giây. Nghĩa là gấp bốn lần cỡ mẫu thì sai số chỉ giảm một nửa. Nhưng cẩn thận: cỡ mẫu lớn không sửa được lỗi lấy mẫu. Nếu cách lấy bỏ sót một nhóm, tâm vẫn bị lệch. Điều cần nhớ: tăng cỡ mẫu làm trung bình mẫu tập trung hơn quanh giá trị thật, nhưng không sửa được một mẫu đã bỏ sót nhóm.",
		"q": "Muốn giảm sai số chuẩn đi một nửa, cần tăng cỡ mẫu lên bao nhiêu lần?",
		"a": "Gấp bốn lần."
	},
	clt: {
		"s": "Thẻ này nói về định lý giới hạn trung tâm. Định lý nói rằng trung bình của nhiều quan sát độc lập có dạng gần hình chuông, dù từng quan sát không có dạng đó. Đáng biết vì nó cho phép bạn dùng hình chuông ngay cả khi dữ liệu gốc bị lệch. Thời gian ở lại trang thường lệch, không phải hình chuông. Nhưng khách vẫn muốn nói về trung bình thời gian ở lại, dựa trên mẫu bốn mươi lượt. Khi cỡ mẫu đủ lớn, thường khoảng ba mươi trở lên nếu dữ liệu không lệch nhiều, trung bình mẫu xấp xỉ phân phối chuẩn. Với trung bình thật bốn mươi hai giây, độ lệch chuẩn mười hai giây và cỡ mẫu ba mươi sáu, trung bình mẫu có tâm bốn mươi hai và độ rộng hai giây. Lưu ý: định lý nói về trung bình mẫu, không biến từng lượt truy cập thành hình chuông. Điều cần nhớ: định lý giới hạn trung tâm áp dụng cho trung bình mẫu, không áp dụng cho từng quan sát.",
		"q": "Định lý giới hạn trung tâm làm cho cái gì có dạng hình chuông: từng lượt truy cập hay trung bình mẫu?",
		"a": "Trung bình mẫu. Từng lượt truy cập vẫn giữ dạng ban đầu."
	},
	"clt-est": {
		"s": "Thẻ này nói về ước lượng trung bình bằng một khoảng, thay vì chỉ báo một con số. Đáng biết vì một con số đơn lẻ không cho thấy mức không chắc chắn. Giả sử mẫu bốn mươi lượt truy cập cho thời gian ở lại trung bình bốn mươi sáu giây, độ lệch chuẩn mẫu mười giây. Khách muốn một khoảng cho trung bình thật. Bước một, tính sai số chuẩn: mười chia căn bậc hai của bốn mươi, khoảng một phẩy năm tám giây. Bước hai, nhân với hệ số khoảng hai cho một khoảng thô, được khoảng ba phẩy hai giây. Bước ba, lấy bốn mươi sáu cộng và trừ ba phẩy hai, ra khoảng từ bốn mươi hai phẩy tám đến bốn mươi chín phẩy hai giây. Khoảng chính thức dùng hệ số một phẩy chín sáu cho mức chín mươi lăm phần trăm. Điều cần nhớ: câu trả lời đúng là một khoảng quanh trung bình mẫu, không phải riêng con số trung bình mẫu.",
		"q": "Trung bình mẫu bốn mươi sáu giây, sai số chuẩn khoảng một phẩy năm tám. Khoảng thô quanh trung bình là bao nhiêu?",
		"a": "Khoảng từ bốn mươi hai phẩy tám đến bốn mươi chín phẩy hai giây."
	},
	ci: {
		"s": "Thẻ này nói về khoảng tin cậy, và cách hiểu đúng con số chín mươi lăm phần trăm. Đáng biết vì đây là câu bị nói sai nhiều nhất trong báo cáo. Vẫn mẫu bốn mươi lượt, trung bình bốn mươi sáu giây, độ lệch chuẩn mẫu mười giây. Sai số chuẩn khoảng một phẩy năm tám. Nhân với một phẩy chín sáu được sai số biên khoảng ba phẩy một. Khoảng tin cậy chín mươi lăm phần trăm là khoảng từ bốn mươi ba đến bốn mươi chín giây. Chín mươi lăm phần trăm nghĩa là: nếu lặp lại quy trình này nhiều lần, khoảng chín mươi lăm trong một trăm khoảng sẽ chứa giá trị thật. Vì vậy đừng nói giá trị thật có chín mươi lăm phần trăm xác suất nằm trong khoảng bốn mươi ba đến bốn mươi chín vừa tính. Điều cần nhớ: mức chín mươi lăm phần trăm mô tả độ tin cậy của quy trình tính khoảng, không phải xác suất giá trị thật nằm trong một khoảng đã tính.",
		"q": "Chín mươi lăm phần trăm trong khoảng tin cậy chín mươi lăm phần trăm mô tả điều gì?",
		"a": "Mô tả quy trình: lặp lại nhiều lần thì khoảng chín mươi lăm trong một trăm khoảng chứa giá trị thật. Nó không phải xác suất cho một khoảng cụ thể."
	},
	"samp-types": {
		"s": "Thẻ này nói rằng cách lấy mẫu là một phần của kết luận. Đáng biết vì khoảng tin cậy không thể sửa một mẫu đã bị lấy thiên lệch. Giả sử bạn muốn biết tỷ lệ gửi form của kênh Google Display Network. Nếu chỉ hỏi những người đã để lại số điện thoại, bạn đã bỏ sót toàn bộ nhóm không gửi form. Có bốn cách lấy mẫu thường gặp. Lấy mẫu ngẫu nhiên đơn giản: mỗi phần tử có cùng cơ hội được chọn. Lấy mẫu phân tầng: chia tổng thể thành các tầng rồi lấy ngẫu nhiên trong từng tầng. Lấy mẫu theo cụm: chọn ngẫu nhiên vài cụm rồi lấy mọi phần tử trong cụm. Lấy mẫu thuận tiện: lấy những phần tử dễ lấy nhất. Chỉ cách lấy không bỏ hẳn một nhóm mới cho phép kết luận về cả tổng thể. Mẫu lớn mà lấy thiên lệch vẫn cho kết luận sai. Điều cần nhớ: trước khi tin một khoảng tin cậy, hãy hỏi nhóm nào đã không có mặt trong mẫu.",
		"q": "Chỉ hỏi những người đã để lại số điện thoại để đo tỷ lệ gửi form thì sai ở đâu?",
		"a": "Mẫu đã bỏ sót toàn bộ nhóm không gửi form, nên kết luận bị lệch."
	},
	"samp-use": {
		"s": "Thẻ này nói về lý do ta dùng mẫu: đo toàn bộ tổng thể thì quá tốn kém hoặc không cần thiết. Đáng biết vì mẫu chỉ có giá trị khi nó giống tổng thể bạn muốn kết luận. Bạn không đo mọi lượt truy cập mỗi ngày. Bạn đo một phần để chọn creative quảng cáo, chọn landing page hoặc kiểm tra một lô sản phẩm của khách. Bốn mục đích hay gặp là ước lượng tỷ lệ khách hàng, so sánh hai creative, thử nghiệm một bản mới và kiểm tra chất lượng một lô. Cả bốn đều dựa trên cùng một điều kiện: mẫu phải giống tổng thể cần kết luận. Ví dụ, so hai creative trên một nghìn lượt mỗi bên chỉ đáng tin nếu hai nhóm được chia ngẫu nhiên. Đổi mục đích sử dụng không phải là lý do để lấy mẫu cho tiện. Điều cần nhớ: mẫu chỉ nói thay được cho tổng thể khi nó giống tổng thể ở những đặc điểm liên quan.",
		"q": "So hai creative trên một nghìn lượt mỗi bên, điều kiện nào để kết quả đáng tin?",
		"a": "Hai nhóm phải được chia ngẫu nhiên, để mẫu giống tổng thể."
	},
	joint: {
		"s": "Thẻ này nói về hai con số dễ lẫn nhau: xác suất đồng thời và xác suất có điều kiện. Đáng biết vì chọn nhầm con số sẽ dẫn tới tối ưu sai kênh. Xác suất đồng thời là xác suất hai việc cùng xảy ra. Xác suất có điều kiện là xác suất của một việc khi đã biết việc kia xảy ra. Giả sử bốn phần trăm lượt vừa đến từ Google Display Network vừa gửi form, và bốn mươi phần trăm lượt đến từ kênh đó. Để biết tỷ lệ gửi form trong riêng kênh này, lấy bốn chia bốn mươi, ra mười phần trăm. Hai chiều không giống nhau. Nếu tám phần trăm lượt gửi form, thì trong số người gửi form, tỷ lệ đến từ kênh đó là bốn chia tám, tức năm mươi phần trăm. Khác hẳn mười phần trăm. Điều cần nhớ: xác suất có điều kiện bằng xác suất đồng thời chia cho xác suất của điều kiện. Nếu không chia, con số vẫn chỉ là xác suất của cả hai.",
		"q": "Bốn phần trăm lượt vừa từ GDN vừa gửi form, bốn mươi phần trăm lượt từ GDN. Tỷ lệ gửi form riêng trong GDN là bao nhiêu?",
		"a": "Mười phần trăm, bằng bốn chia bốn mươi."
	},
	bayes: {
		"s": "Thẻ này nói về định lý Bayes, cách cập nhật một xác suất ban đầu khi có thông tin mới. Đáng biết vì nó giúp bạn đánh giá lead một cách có căn cứ. Giả sử trước chiến dịch, bạn ước tính hai mươi phần trăm lead là đúng khách hàng mục tiêu. Sau đó một lead tải bảng giá, là hành vi đặc trưng của khách mục tiêu. Hành vi này xuất hiện ở tám mươi phần trăm khách đúng và mười phần trăm khách sai. Bước một, tính tỷ lệ chung của hành vi này: tám mươi phần trăm nhân hai mươi phần trăm, cộng mười phần trăm nhân tám mươi phần trăm, ra hai mươi bốn phần trăm. Bước hai, phần của khách đúng là mười sáu chia hai mươi bốn, khoảng sáu mươi bảy phần trăm. Đừng nhầm: tám mươi phần trăm không phải xác suất lead này đúng khách; xác suất đó là sáu mươi bảy phần trăm. Điều cần nhớ: thông tin mới không xóa xác suất ban đầu mà cập nhật nó.",
		"q": "Ban đầu hai mươi phần trăm lead đúng khách. Sau khi lead tải bảng giá, xác suất đúng khách khoảng bao nhiêu?",
		"a": "Khoảng sáu mươi bảy phần trăm, không phải tám mươi phần trăm."
	},
	"samp-est": {
		"s": "Thẻ này nói về ước lượng từ mẫu, và vì sao một con số đơn lẻ là chưa đủ. Đáng biết vì khách cần biết mức chắc chắn, không chỉ một con số. Giả sử bạn lấy mẫu bốn trăm lượt, có mười hai form, và cần báo tỷ lệ gửi form thật của trang. Ước lượng điểm là mười hai chia bốn trăm, bằng ba phần trăm. Sai số chuẩn của tỷ lệ này khoảng không phẩy không không tám lăm. Nhân với một phẩy chín sáu được khoảng một phẩy bảy điểm phần trăm. Vậy khoảng chín mươi lăm phần trăm đi từ một phẩy ba đến bốn phẩy bảy phần trăm. Ba phần trăm là ước lượng điểm, không phải tỷ lệ thật của tổng thể. Điều cần nhớ: một ước lượng điểm không kèm khoảng thì chưa cho biết mức không chắc chắn.",
		"q": "Mười hai form trên bốn trăm lượt. Ước lượng điểm và khoảng chín mươi lăm phần trăm cho tỷ lệ thật là gì?",
		"a": "Ba phần trăm, và khoảng từ một phẩy ba đến bốn phẩy bảy phần trăm."
	},
	"ht-rule": {
		"s": "Thẻ này nói về mức ý nghĩa và vạch bác bỏ trong kiểm định. Đáng biết vì luật phải được viết trước khi nhìn số, nếu không kết quả mất giá trị. Giả sử bạn chạy hai bản quảng cáo A và B. Trước khi mở số, bạn chốt: chỉ gọi là khác nếu thống kê kiểm định vượt vạch ứng với mức năm phần trăm. Mức ý nghĩa, thường là năm phần trăm, là tỷ lệ báo động giả khi hai bản thật sự không khác và bạn làm đúng luật. Với kiểm định hai phía mức năm phần trăm và mẫu lớn, vạch là một phẩy chín sáu về hai phía. Nếu thống kê đo được là hai phẩy ba thì vượt vạch, nên bạn bác. Dùng p-value, hay giá trị p, hoặc dùng vạch đều cho cùng một quyết định. Đổi mức ý nghĩa sau khi nhìn mẫu thì không còn đúng như đã hứa. Điều cần nhớ: vạch bác bỏ là một phần của câu hỏi, không phải đường kẻ thêm sau khi thấy kết quả.",
		"q": "Vì sao không được đổi mức ý nghĩa sau khi đã nhìn mẫu?",
		"a": "Vì khi đó mức ý nghĩa không còn là tỷ lệ báo động giả mà bạn đã hứa từ trước."
	},
	"ht-h0": {
		"s": "Thẻ này nói về giả thuyết không và giả thuyết đối. Đáng biết vì cách đặt giả thuyết quyết định cách bạn nói kết luận. Giả thuyết không, gọi tắt là H không, là câu mặc định dùng để tính độ hiếm của mẫu. Giả thuyết đối là hướng bạn đang nghi ngờ. Với hai bản quảng cáo, H không nói tỷ lệ form của bản B bằng bản A. Giả thuyết đối nói hai tỷ lệ khác nhau. Bạn chưa viết B thắng, vì đó là kết luận chứ chưa phải giả thuyết. Giả sử mẫu chỉ có vài chục form, giá trị p có thể lớn, và bạn nói chưa bác H không. Đừng nói chấp nhận H không, vì người nghe sẽ tưởng bạn đã chứng minh không có khác biệt, trong khi mẫu chỉ chưa đủ lệch để bác. Điều cần nhớ: chưa bác giả thuyết không không phải là chứng minh hai bản bằng nhau.",
		"q": "Giá trị p lớn thì nên nói gì về giả thuyết không?",
		"a": "Nói chưa bác giả thuyết không. Đó không phải chứng minh hai bản bằng nhau."
	},
	"ht-p": {
		"s": "Thẻ này nói về p-value, hay giá trị p, và hiểu nó đúng thế nào. Đáng biết vì đây là con số bị diễn giải sai nhiều nhất. Giá trị p là xác suất gặp kết quả lệch ít nhất bằng mẫu này, nếu giả thuyết không đúng. Nó không phải xác suất giả thuyết không đúng. Ví dụ p bằng không phẩy không ba nghĩa là: nếu hai bản quảng cáo thật sự bằng nhau và các giả định đúng, một mẫu lệch ít nhất như mẫu này chỉ gặp khoảng ba lần trong một trăm lần làm lại. Đảo câu này thành xác suất giả thuyết không đúng khi đã có dữ liệu là sai. Thêm một lưu ý nữa: giá trị p nhỏ không nói khác biệt có đáng tiền hay không, vì mẫu rất lớn có thể biến một khác biệt vô dụng thành p nhỏ. Điều cần nhớ: giá trị p nói về mẫu trong thế giới giả thuyết không, không nói về xác suất của giả thuyết không.",
		"q": "Giá trị p bằng không phẩy không ba có nghĩa là xác suất giả thuyết không đúng là ba phần trăm không?",
		"a": "Không. Nó nghĩa là nếu giả thuyết không đúng thì mẫu lệch như vậy chỉ gặp khoảng ba lần trong một trăm."
	},
	"ht-err": {
		"s": "Thẻ này nói về hai cách sai trong kiểm định: báo động giả, gọi là sai lầm loại một, và bỏ sót, gọi là sai lầm loại hai. Đáng biết vì mức năm phần trăm thường bị hiểu sai. Với mức ý nghĩa năm phần trăm, nếu hai bản quảng cáo thật sự bằng nhau, cứ làm đúng luật một trăm lần thì khoảng năm lần vẫn báo khác. Con số này không nói rằng năm phần trăm quyết định của bạn là sai. Sai lầm loại một là bác giả thuyết không khi nó đúng. Sai lầm loại hai là không bác khi nó sai, với xác suất gọi là bê-ta. Sức mạnh của kiểm định bằng một trừ bê-ta, nên nếu bê-ta là hai mươi phần trăm thì sức mạnh là tám mươi phần trăm. Sức mạnh phụ thuộc độ lệch thật và cỡ mẫu. Điều cần nhớ: năm phần trăm là tỷ lệ báo nhầm khi không có gì để báo, không phải tỷ lệ bạn đang sai.",
		"q": "Mức ý nghĩa năm phần trăm có nghĩa là năm phần trăm quyết định của bạn bị sai, đúng không?",
		"a": "Không. Nó là tỷ lệ báo động giả khi giả thuyết không đúng và bạn làm đúng luật."
	},
	"sa-tune": {
		"s": "Thẻ này nói về việc chọn giữa hai cách làm cho mô hình biết điều mới, và đáng biết vì chọn nhầm sẽ tốn công mà vẫn sai. Có hai cách. Fine-tune, hay tinh chỉnh, là đổi bên trong mô hình, tức là đổi trọng số. RAG, hay truy xuất tài liệu, là giữ nguyên mô hình và chỉ đổi tài liệu được đưa vào câu lệnh. Bạn thử hình dung chính sách đổi trả của cửa hàng sửa đúng một câu. Việc cần làm là để câu mới nằm trong tài liệu được tìm ra. Huấn luyện lại cả mô hình chỉ vì một câu là chọn nhầm tầng. Giá đổi mỗi sáng nghĩa là ba mươi lần một tháng, không thể huấn luyện lại ba mươi lần. Giá nên nằm trong một bảng, kèm công cụ đọc bảng, vì fine-tune chỉ đổi cách viết. Vậy hãy nhớ một ý thôi: giá đổi vào ngày mai thì huấn luyện đêm qua không phải là kế hoạch.",
		"q": "Dữ liệu thay đổi mỗi ngày thì nên dùng cách nào, tinh chỉnh hay truy xuất tài liệu?",
		"a": "Nên dùng truy xuất tài liệu, và giữ những con số như giá trong một bảng có công cụ đọc. Tinh chỉnh chỉ hợp khi giọng văn ổn định và sự thật ít đổi."
	},
	"sa-react": {
		"s": "Thẻ này nói về cách một trợ lý làm việc với công cụ: suy nghĩ, gọi một công cụ, rồi nhìn kết quả. Điều đáng biết là nó giúp trợ lý không bịa. Bạn tưởng tượng khách hỏi còn hàng không. Bước hành động là gọi danh mục sản phẩm theo mã. Bước quan sát là con số mà danh mục trả về. Nếu không có bước quan sát đó, câu trả lời đúng phải là chưa tra được, chứ không được tự nói còn ba cái. Nếu công cụ báo lỗi, thì điều quan sát được chính là cái lỗi, không phải một kết quả đẹp do mô hình tự điền. Vòng lặp này cũng có thể chạy mãi, nên cần một trần số bước. Ví dụ trần là năm bước, đã dùng hết năm bước mà chưa có kết quả từ danh mục, thì trả lời là chưa tra được. Ý cần nhớ: không có log nghĩa là chưa tra.",
		"q": "Nếu công cụ báo lỗi thì trợ lý nên coi điều gì là kết quả quan sát?",
		"a": "Chính cái lỗi đó. Không được tự điền một kết quả đẹp thay cho nó."
	},
	"sa-stage": {
		"s": "Thẻ này nói về ba chặng của bài làm, và đáng biết vì chặng nào chưa có bằng chứng thì chưa được coi là đã xảy ra. Chặng một là trò chuyện dựa trên câu lệnh, lúc này chưa có danh mục sản phẩm nên chưa được nói giá. Chặng hai là gọi danh mục, và mới có kết quả thật. Chặng ba là chấm các ca, so với một thước đo mà bạn viết ra từ trước. Giáo trình có ba buổi giới thiệu ba chặng này, nhưng không buổi nào đưa sẵn một đoạn hội thoại chuẩn. Có người sẽ tự viết một cuộc trò chuyện rồi chấm chính nó. Làm vậy là chấm một chuyện mình vừa bịa ra. Ba chặng thì có ba loại log khác nhau, và không có bản hội thoại mẫu nào. Ý cần nhớ: không có transcript mẫu, vậy đừng tự sản xuất một cái.",
		"q": "Vì sao không nên tự viết một cuộc hội thoại rồi chấm chính nó?",
		"a": "Vì đó là chấm một chuyện mình vừa bịa ra. Các ca chấm phải được viết trước, với kết quả đúng lấy từ danh mục hoặc chính sách."
	},
	"sa-tool": {
		"s": "Thẻ này nói về nguồn của giá và tồn kho, và đáng biết vì một câu trả lời trôi chảy vẫn có thể sai số. Giá và tồn kho phải đến từ danh mục sản phẩm. Ví dụ mã A mười hai trả về giá và tồn kho, câu trả lời chỉ việc nhắc lại đúng các con số đó. Khi khách hỏi một gói không có mã, câu trả lời phải là không thấy mã, chứ không phải một mức giá gần đúng. Danh mục hoạt động giống một bảng dữ liệu: không có dòng thì không có số, chứ không phải số không. Tồn kho bằng không là một dòng có tồn kho bằng không. Không thấy mã là không có dòng nào cả. Hai trường hợp này khác nhau. Công cụ lỗi thì phải báo lỗi, đừng bọc lại thành tạm hết hàng. Chính sách hoàn tiền cũng không phải nguồn giá. Ý cần nhớ: không có mã thì không có giá.",
		"q": "Tồn kho bằng không khác với không thấy mã ở điểm nào?",
		"a": "Tồn kho bằng không là có dòng và con số là không. Không thấy mã là không có dòng nào, nên không có con số."
	},
	"sa-score": {
		"s": "Thẻ này nói về cách chấm từng ca, và đáng biết vì nhiều người nhầm sự lặp lại với sự đúng đắn. Thước đo của một ca là kết quả từ danh mục sản phẩm, hoặc một câu trong chính sách. Không phải là số lần mô hình nói giống nhau. Ví dụ ca được viết trước là mã A mười hai, danh mục trả về hết hàng. Mô hình lại nói còn hàng. Ca đó sai, dù mô hình nói rất chắc. Có kỹ thuật cho mô hình trả lời nhiều lần rồi lấy câu đa số, gọi là self-consistency, tức là tự nhất quán. Nó chỉ giảm bớt nhiễu khi chọn từ, chứ không tạo ra nguồn. Nếu năm lần liền đều nói còn hàng mà danh mục nói hết hàng, thì điểm của ca đó vẫn là không trên một. Và đừng thêm một ca bịa cho đủ điểm. Ý cần nhớ: đồng ý với nhau không phải đồng ý với danh mục.",
		"q": "Năm lần trả lời giống nhau có chứng minh được câu trả lời đúng không?",
		"a": "Không. Phải so với kết quả đúng từ danh mục hoặc chính sách. Nếu danh mục nói khác thì ca đó vẫn bị không điểm."
	},
	"rag-why": {
		"s": "Thẻ này nói về một hiểu lầm phổ biến: có file thì mô hình tự biết nội dung file. Điều đó không đúng, và đáng biết vì nó quyết định câu trả lời có nguồn hay không. Bạn có một file PDF nội bộ. Nếu lần gọi không kèm đoạn nào của file đó, thì mọi câu trả lời về file là câu không nguồn, dù bạn có nhắc đến chữ RAG, tức là truy xuất tài liệu. Cách này không nhét cả file vào mô hình. Nó cần một bước tìm, và bạn phải thấy được đoạn nào đã vào câu lệnh. Nó thất bại theo hai kiểu. Một là tìm nhầm đoạn. Hai là tìm đúng đoạn nhưng câu viết ra vẫn thêm một con số không có trong đoạn. Ví dụ tìm ba đoạn mà chỉ một đoạn chứa điều khoản, thì hai đoạn kia là nhiễu. Ý cần nhớ: nhắc chữ RAG không có nghĩa là file đã được đọc.",
		"q": "Hai kiểu thất bại của truy xuất tài liệu là gì?",
		"a": "Tìm nhầm đoạn, hoặc tìm đúng đoạn nhưng câu viết ra thêm một con số không có trong đoạn đó."
	},
	"rag-emb": {
		"s": "Thẻ này nói về embedding, tức là cách biến câu chữ thành điểm trong không gian để so độ gần. Đáng biết vì gần nhau chưa chắc đúng. Bạn hỏi về hoàn tiền. Đoạn được kéo lên có thể là một mục quảng cáo cũng có chữ hoàn tiền, chứ không phải điều khoản. Điểm cao hơn cũng không sửa được chuyện đó. Ví dụ đoạn quảng cáo được điểm không phẩy chín mươi mốt, còn điều khoản được không phẩy tám mươi sáu. Điểm cao hơn vẫn là đoạn sai. Hai câu cùng chủ đề sẽ gần nhau, kể cả khi một câu phủ định câu kia. Tìm theo từ khóa thì ngược lại, đúng chữ nhưng có thể sai ý, tuy ít nhất chữ đó có mặt. Cả hai cách chỉ cho bạn ứng viên, không cho sự thật. Hãy đọc đoạn đó. Ý cần nhớ: gần không phải đúng, và hai câu trái nghĩa vẫn có thể gần nhau.",
		"q": "Điểm gần cao nhất có đảm bảo đó là đoạn đúng không?",
		"a": "Không. Điểm gần chỉ cho một ứng viên. Phải đọc đoạn đó, vì đoạn quảng cáo vẫn có thể điểm cao hơn điều khoản."
	},
	"rag-chunk": {
		"s": "Thẻ này nói về việc cắt tài liệu thành các mảnh nhỏ, và đáng biết vì cắt sai là cắt mất nghĩa. Mục tiêu là một điều khoản còn nguyên trong một mảnh, hoặc chấp nhận đưa cả các mảnh liền kề. Ví dụ một mục dài tám dòng. Nếu cắt mỗi mảnh hai dòng, ta có bốn mảnh. Lời hứa ở dòng một nằm ở mảnh một, còn điều kiện ở dòng sáu nằm ở mảnh ba. Khi hỏi về hoàn tiền, hệ thống có thể chỉ thấy dòng một, và bỏ sót điều kiện. Mảnh nhỏ thì dễ trúng một chữ nhưng dễ mất điều kiện. Mảnh lớn thì tốn nhiều chữ và kéo theo đoạn không liên quan. Không có kích thước đúng cho mọi file. Cách kiểm tra là viết các ca mà điều kiện nằm sau lời hứa. Ý cần nhớ: một nửa điều khoản không phải một điều khoản ngắn hơn.",
		"q": "Làm sao kiểm tra xem cách cắt mảnh có làm mất nghĩa không?",
		"a": "Viết các ca chấm mà điều kiện nằm sau lời hứa. Nếu rớt các ca đó thì đang cắt mất nghĩa."
	},
	"rag-vec": {
		"s": "Thẻ này nói về việc đoạn gần nhất chưa chắc là đoạn đúng, và đáng biết vì nhiều hệ thống chỉ lấy một đoạn đầu rồi trả lời. Giả sử kho có cả câu hỏi thường gặp của bên marketing lẫn điều khoản. Câu hỏi của bạn dùng đúng chữ của phần marketing, nên đoạn đứng đầu là phần marketing, còn điều khoản đứng thứ hai. Trả lời theo đoạn đầu là trả lời nhầm tài liệu. Cách làm tốt hơn là lấy ba đoạn, ví dụ với điểm không phẩy chín mươi mốt, không phẩy tám mươi sáu và không phẩy tám mươi bốn, rồi đọc cả ba trước khi viết. Thứ tự gần nhất chỉ là thứ tự trong kho bạn đã nạp. Nếu kho thiếu điều khoản thì điều khoản không bao giờ thắng. Ý cần nhớ: gần nhất trong một kho thiếu vẫn là thiếu.",
		"q": "Vì sao không nên chỉ lấy đoạn đứng đầu rồi trả lời?",
		"a": "Vì đoạn đứng đầu có thể là nhầm tài liệu. Nên lấy vài đoạn, đọc hết, rồi mới viết."
	},
	"rag-idx": {
		"s": "Thẻ này nói về chỉ mục, tức là bản tra cứu được xây từ tài liệu của bạn. Đáng biết vì sửa file mà không xây lại chỉ mục thì hệ thống vẫn trả lời theo bản cũ. Ví dụ điều khoản bảy ngày được sửa thành mười bốn ngày lúc chín giờ sáng, nhưng chỉ mục được xây lúc tám giờ. Cả buổi sáng, trợ lý vẫn nói bảy ngày. Đó không phải mô hình ngoan cố, mà là chỉ mục cũ. Các thư viện như LlamaIndex không tự theo dõi mọi lần bạn sửa file, trừ khi bạn đặt việc đó. Nếu không, chỉ mục chỉ là một bản chụp tại một thời điểm. Ý này giống việc làm mới dữ liệu trong Power BI: im lặng nghĩa là vẫn đang dùng bản cũ. Hãy có một ca chấm dùng file mới hơn chỉ mục. Ý cần nhớ: sửa file không phải là sửa chỉ mục.",
		"q": "Điều khoản sửa lúc chín giờ, chỉ mục xây lúc tám giờ, thì chuyện gì xảy ra?",
		"a": "Mọi câu hỏi từ chín giờ cho đến lần xây lại sẽ thấy bản cũ. Cần xây lại chỉ mục mỗi khi nguồn đổi."
	},
	"rag-rank": {
		"s": "Thẻ này nói về re-rank, nghĩa là xếp hạng lại danh sách ứng viên. Đáng biết vì nó hữu ích nhưng có giới hạn rõ. Ví dụ có hai mươi đoạn, và điều khoản đúng đứng thứ mười lăm theo embedding. Nếu danh sách đưa vào re-rank giữ đủ hai mươi đoạn, re-rank có thể kéo điều khoản đó lên đầu. Nhưng nếu bước tìm chỉ giữ năm đoạn, điều khoản ở vị trí mười lăm đã bị loại từ trước, và re-rank không thể thấy nó. Re-rank là một mô hình khác chấm độ hợp giữa câu hỏi và đoạn. Nó vẫn chỉ là điểm số, không phải sự thật. Một đoạn trái nghĩa vẫn có thể được chấm cao nếu chữ khớp. Hãy chấm bằng các ca mà đoạn đứng đầu của embedding sai, nhưng đoạn đúng vẫn còn trong danh sách. Ý cần nhớ: xếp lại không đẻ ra đoạn còn thiếu.",
		"q": "Khi nào re-rank không thể cứu được câu trả lời?",
		"a": "Khi đoạn đúng đã bị loại ngay từ bước tìm, tức là không có trong danh sách đưa vào re-rank."
	},
	"rag-near": {
		"s": "Thẻ này nói về buổi demo tìm kiếm theo ngữ nghĩa trong giáo trình, và đáng biết vì một buổi demo chưa phải là một đánh giá. Buổi đó chỉ chạy một câu hỏi. Nhiệm vụ của bạn là viết thêm những ca mà độ gần sẽ phản bội, tức là những câu mà đoạn gần nhất lại là đoạn sai. Thiếu các ca đó thì buổi demo chưa thành một kết quả. Một câu demo chạy đúng chưa cho bạn biết tỷ lệ đúng là bao nhiêu. Muốn có tỷ lệ, bạn cần một bộ ca, ví dụ hai mươi câu. Giáo trình không cấp sẵn bộ ca nào, nên đừng bịa một đoạn hội thoại, và đừng bịa một tỷ lệ chính xác cho buổi demo. Làm vậy giống như lấy một con số đẹp nhưng sai việc. Ý cần nhớ: một câu chạy được không phải là một tỷ lệ.",
		"q": "Cần tối thiểu điều gì để tính được tỷ lệ đúng của hệ thống tìm kiếm?",
		"a": "Một bộ ca, ví dụ hai mươi câu, trong đó có cả những câu mà độ gần dễ dẫn đến đoạn sai."
	},
	"rag-store": {
		"s": "Thẻ này nói về collection, tức là một kho có tên trong cơ sở dữ liệu vector như Chroma. Đáng biết vì trỏ nhầm tên kho là lấy nhầm cả một phiên bản tài liệu. Ví dụ bạn có hai kho: chính sách tháng mười năm hai nghìn không trăm hai mươi sáu, và chính sách tháng chín cùng năm. Nhưng lần gọi lại trỏ vào kho tháng chín, nên câu trả lời bám theo tháng chín. Chuyện này không phải do embedding hỏng. Các kho tách collection để các việc không trộn lẫn nhau, và trộn lẫn là một lựa chọn nguy hiểm. Nếu một collection không có đoạn nào thì lần tìm trả về rỗng. Rỗng không phải một đoạn gần, và đừng để mô hình viết tiếp trên một lần tìm rỗng. Hãy ghi tên kho vào log. Ý cần nhớ: sai tên kho là tìm nhầm cả một phiên bản.",
		"q": "Vì sao nên ghi tên kho vào log?",
		"a": "Để biết lần tìm đã dùng kho nào. Trỏ nhầm tên kho là lấy nhầm cả một phiên bản tài liệu."
	},
	"rag-demo": {
		"s": "Thẻ này nói về buổi demo RAG, và đáng biết vì việc in ra được một câu trả lời chưa phải là đã chấm. Buổi demo chỉ chạy một câu. Bạn cần thêm một ca trong đó đoạn đúng không chứa số tiền, rồi kiểm tra xem câu viết ra có tự bịa số tiền hay không. Bản demo gốc không làm hộ bạn việc đó. Buổi này cũng giống buổi tìm kiếm ngữ nghĩa: không cấp bộ ca và không cấp một độ chính xác chuẩn của ngành. Đường ống chạy được chỉ là điều kiện cần. Thước đo thật là các ca đối chiếu đoạn đã tìm với câu đã viết. Ví dụ một ca đạt trên một lần chạy chưa cho tỷ lệ nào. Hai mươi ca mà mười bảy ca đạt thì ra tám mươi lăm phần trăm. Ý cần nhớ: in được câu không có nghĩa là đã bám theo file.",
		"q": "Cần giữ cặp nào cạnh nhau để có một ca chấm?",
		"a": "Đoạn đã tìm được và câu đã viết ra. Không có cặp đó thì chưa có một ca."
	},
	"rag-job": {
		"s": "Thẻ này nói về phạm vi của bài RAG, và đáng biết vì trả lời đúng ngoài đời vẫn có thể là sai bài. Bài yêu cầu trả lời trên các văn bản được giao, không trả lời từ trí nhớ. Nếu một câu trả lời dẫn một điều khoản không có trong các văn bản đó, nó là câu ngoài bài, dù điều khoản ấy có thật ngoài đời. Phần này không chứa đề bài và không chứa các văn bản, nên đừng bịa nội dung của chúng. Nguồn của bài là tập được giao, và chỉ mục phải là chỉ mục của tập đó. Một con số không có trong đoạn là một lần sai. Ví dụ một câu trả lời có một đoạn dẫn nằm trong tập thì hợp lệ. Câu trả lời dẫn điều khoản ngoài tập thì ngoài bài. Nếu không có trong tập, hãy nói là không thấy trong tập. Ý cần nhớ: nhớ một điều khoản không có trong tập là đã ra ngoài bài.",
		"q": "Nếu câu hỏi không có đáp án trong tập tài liệu được giao thì nên trả lời thế nào?",
		"a": "Nói là không thấy trong tập. Đừng bổ sung từ trí nhớ."
	},
	"im-grid": {
		"s": "Thẻ này nói về bản chất của một bức ảnh do máy sinh ra, và đáng biết vì ảnh trông thật chưa phải là bằng chứng. Về mặt máy tính, một bức ảnh chỉ là một lưới số. Ví dụ prompt nhắc đến một góc phố và ảnh ra có một góc phố. Nhưng đó không phải địa chỉ bạn có thể gửi khách đến, dù biển hiệu trông rất thật. Độ phân giải chỉ là số ô. Nhiều ô hơn không có nghĩa là nhiều sự thật hơn. Chữ trên biển trong ảnh sinh thường sai, vì chữ cũng chỉ là các ô, không phải một chuỗi đã được tra cứu. Một ảnh một nghìn không trăm hai mươi bốn nhân một nghìn không trăm hai mươi bốn có hơn một triệu ô, nhưng không ô nào là bằng chứng. Hãy gọi nó là một lưới đã sinh, đừng gọi là ảnh tư liệu. Ý cần nhớ: trông giống ảnh không có nghĩa là đã được chụp.",
		"q": "Tăng độ phân giải của ảnh sinh có làm nó thật hơn không?",
		"a": "Không. Độ phân giải chỉ là số ô, nhiều ô hơn không có nghĩa là nhiều sự thật hơn."
	},
	"im-vae": {
		"s": "Thẻ này nói về VAE, một kiểu mô hình nén ảnh rồi dựng lại. Đáng biết vì chỗ mờ trong ảnh dựng lại chính là thông tin đã mất. Ví dụ ảnh biển hiệu có một chữ nhỏ. Sau khi qua VAE, chữ đó thành một vệt. Đó không phải phông chữ nghệ thuật, mà là chi tiết đã bị bỏ khi nén. VAE học phần chung của rất nhiều ảnh, chứ không học từng tấm ảnh của bạn. Không gian nén ép những ảnh gần nhau lại gần nhau. Bản dựng lại là một ảnh hợp lý trong vùng đó, thường mềm hơn, vì phần riêng không còn nằm trong mã. Ví dụ một ảnh lớn nén còn bốn nghìn không trăm chín mươi sáu con số thì mất phần lớn chi tiết riêng. Vì vậy đừng dùng bản giải nén làm bản lưu trữ. Ý cần nhớ: mờ vì đã bị bỏ bớt, không phải vì máy ảnh rung.",
		"q": "Vì sao chữ nhỏ trong ảnh thường thành vệt mờ sau khi qua VAE?",
		"a": "Vì chi tiết riêng đã bị bỏ đi khi nén, nên bản dựng lại chỉ giữ phần chung."
	},
	"im-gan": {
		"s": "Thẻ này nói về GAN, gồm hai mạng: một bên làm giả và một bên chê. Đáng biết vì người chê gật đầu không có nghĩa là đời thực gật đầu. Ví dụ tập huấn luyện có nhiều ảnh giày. GAN vẽ ra một đôi giày không có mã, và người chê không bắt được. Nhưng kho hàng của bạn vẫn không có đôi giày đó. Hai mạng cùng học nên cùng có thể sai: người chê lười, hoặc bên làm giả chỉ vẽ một kiểu ảnh hẹp mà người chê không còn phân biệt được. Đó là thất bại bên trong trò chơi của chúng, không phải một chứng nhận. Ảnh GAN cũng không có log cho biết đã chụp ở đâu. Một nghìn ảnh giày trong tập không có nghĩa là có một nghìn mã trong kho. Nếu định bán thứ trong ảnh, hãy kiểm danh mục. Ý cần nhớ: qua mặt được người chê không phải là qua mặt được kho hàng.",
		"q": "Giống ảnh thật trong GAN nghĩa là giống cái gì?",
		"a": "Giống tập ảnh huấn luyện. Muốn bán thứ trong ảnh thì phải kiểm danh mục sản phẩm."
	},
	"im-diff": {
		"s": "Thẻ này nói về diffusion, kỹ thuật tạo ảnh bằng cách gỡ nhiễu dần dần. Đáng biết vì nó không tra cứu kho ảnh nào cả. Ví dụ prompt mô tả một bao bì và ảnh ra có một bao bì. Mã vạch trên bao bì chỉ là các ô nhiễu còn sót lại, chứ không phải mã trong hệ thống của bạn. Stable Diffusion thuộc họ này. Nó gỡ nhiễu trong một không gian đã nén, thường là không gian của một VAE, nên chi tiết chữ càng dễ hỏng. Tham số guidance scale kéo ảnh về phía prompt mạnh hơn, nhưng kéo mạnh không làm prompt thành sự thật. Không bước nào đối chiếu với danh mục. Nếu gỡ nhiễu qua năm mươi bước, thì cả năm mươi bước chỉ làm lưới trông thật hơn, không bước nào kiểm sự thật. Ý cần nhớ: nó luôn ra được một ảnh, và điều đó không phải dấu hiệu đã tìm thấy.",
		"q": "Tăng guidance scale có làm ảnh đúng sự thật hơn không?",
		"a": "Không. Nó chỉ kéo ảnh về phía prompt mạnh hơn, chứ không kiểm tra sự thật."
	},
	"im-txt": {
		"s": "Thẻ này nói về vai trò của prompt trong tạo ảnh, và đáng biết vì prompt chỉ lái bức ảnh chứ không chứng nhận nó. Buổi PixxelCraft trong giáo trình là một sản phẩm minh họa, không phải giấy chứng nhận. Một prompt mô tả bao bì không sinh ra một bao bì đã in, và bạn không được bịa thông số của sản phẩm đó. Kéo guidance mạnh về prompt làm ảnh nghe lời hơn, nhưng vẫn có thể sai sự thật một cách rất nghe lời. Negative prompt, tức là lời dặn tránh điều gì, chỉ thêm một hướng để tránh, không phải bộ lọc pháp lý. Ảnh có người thật hoặc thương hiệu của người khác là câu hỏi về quyền, không giải được bằng cách thêm chữ official vào prompt. Một prompt, một ảnh, không có giấy phép nào. Hãy dùng ảnh sinh như bản phác, và để mắt người duyệt. Ý cần nhớ: thêm chữ official không tạo ra một văn bản chính thức.",
		"q": "Negative prompt có thay được việc xin phép quyền hình ảnh không?",
		"a": "Không. Nó chỉ thêm một hướng để tránh. Vấn đề về quyền phải được xử lý riêng."
	},
	"lc-tpl": {
		"s": "Thẻ này nói về template, tức là một khuôn câu lệnh có các chỗ trống, và đáng biết vì chỗ trống bị bỏ sót sẽ làm câu trả lời mất nguồn. Ví dụ khuôn viết là chỉ dùng đoạn sau, rồi một chỗ trống dành cho đoạn tài liệu. Nếu đoạn tài liệu rỗng mà vẫn gọi mô hình, thì mọi câu trả lời sau đó nằm ngoài RAG, dù code của bạn nằm trong thư viện LangChain. Buổi LangChain trong giáo trình là phần tùy chọn. Thư viện này giúp nối các bước thành chuỗi, nhưng không thêm sự thật nào. Template chỉ là một chuỗi có lỗ, và lỗ được điền bằng một chuỗi khác. Việc kiểm tra không nằm trong khuôn mà nằm ở sản phẩm: đủ biến, đúng nguồn, đúng dạng. Nếu khuôn cần hai biến mà chỉ truyền một, phải dừng lại. Ý cần nhớ: cái khuôn không biết cái lỗ đó có đúng tài liệu hay không.",
		"q": "Khuôn cần hai biến mà mới có một biến thì nên làm gì?",
		"a": "Dừng lại hoặc báo là thiếu, không được gọi mô hình."
	},
	"lc-parse": {
		"s": "Thẻ này nói về parser, bộ phận đọc đầu ra của mô hình theo một dạng đã định. Đáng biết vì khi mô hình không theo dạng, bạn phải thấy lỗi chứ không được che đi. Ví dụ dạng yêu cầu là có hoặc không, kèm đúng mã. Mô hình lại viết là tôi nghĩ là có, khoảng hai triệu. Parser vỡ. Kết quả đúng của hệ thống lúc này là lỗi về dạng, không phải câu có. Parser chỉ là một giao kèo về dạng. Nó không kiểm tra sự thật của các trường. Một dữ liệu JSON hợp lệ vẫn có thể chứa một mức giá không có trong danh mục, và việc đó thuộc về log của công cụ. Nuốt lỗi parser là mất dấu một lần mô hình không tuân theo dạng. Nếu thử lại ba lần đều vỡ, kết quả là lỗi sau lần thứ ba, không phải giá bằng không. Ý cần nhớ: vỡ dạng mà thành số không là một quyết định bạn vừa tự bịa.",
		"q": "Parser báo lỗi dạng sau ba lần thử lại thì kết quả đúng là gì?",
		"a": "Là một lỗi về dạng. Không được đổi thành một con số như giá bằng không."
	},
	"lc-agent": {
		"s": "Thẻ này nói về hai kiểu tổ chức các bước: chain và agent. Đáng biết vì cả hai đều cần một giới hạn số bước. Chain là một đường đã vẽ sẵn, dùng khi đường đi đã rõ. Ví dụ tra một mã là chain hai bước: gọi danh mục rồi trả lời. Agent là khi mô hình tự chọn bước sau, dùng khi bước sau tùy câu hỏi. Một câu hỏi mở cần chọn giữa danh mục và chính sách mới là việc của agent, và nó phải dừng sau vài bước dù chưa hài lòng. Agent không thông minh hơn chain, nó chỉ được phép rẽ nhánh. Mỗi nhánh rẽ tốn token và có thể gọi nhầm công cụ. Nếu trần là năm bước, mỗi bước một nghìn token, thì lần chạy tệ nhất tốn năm nghìn token. LangChain không tự thêm trần nếu bạn không viết. Ý cần nhớ: tự chọn bước sau mà không có trần là một vòng lặp không có cửa ra.",
		"q": "Khi nào dùng chain, khi nào dùng agent?",
		"a": "Dùng chain khi đường đi đã rõ, dùng agent khi bước sau tùy câu hỏi. Cả hai đều phải có số bước tối đa."
	},
	"cap-none": {
		"s": "Thẻ này nói về phần capstone, tức là bài làm cuối khóa, và đáng biết vì nó không có kiến thức mới để học. Giáo trình không có buổi dạy thêm ở đây. Bạn làm bài bằng các ý đã học. Một bài capstone vẫn bắt đầu bằng câu ai quyết định điều gì, đúng như thẻ về CRISP-DM trước đó. Không có công thức mới nào tên là capstone. Module BA Capstone trong file gốc chỉ là một đầu mục. Các buổi dạy đã nằm ở các phần từ C không đến C sáu, cùng hai phần bổ sung. Vì vậy khóa này không được bịa thêm một case, một chỉ số ngành hay một thước đo mới. Nếu đề bài sau này có dữ liệu riêng thì dữ liệu đó thuộc về đề, không thuộc về tài liệu này. Không có buổi mới, không có công thức mới, không có bộ dữ liệu mẫu. Ý cần nhớ: không có buổi mới, nên đừng tự sản xuất một buổi.",
		"q": "Bài capstone nên bắt đầu bằng câu hỏi nào, theo các thẻ đã học?",
		"a": "Bắt đầu bằng câu ai quyết định điều gì, rồi dùng các ý đã học để làm bài."
	},
	"ht-t": {
		"s": "Thẻ này nói về phân phối t, và đáng biết vì nó quyết định bạn đặt vạch kết luận ở đâu khi dữ liệu còn ít. Bạn có mười hai tuần dữ liệu. Độ lệch chuẩn, tức mức dao động thường thấy, bạn không biết sẵn mà phải tính từ chính mười hai tuần đó. Vì ước từ mẫu nhỏ nên con số đó cũng dao động, và phân phối t có đuôi dày hơn hình chuông chuẩn để phản ánh điều này. Với mười hai tuần, ta có mười một bậc tự do. Vạch kết luận hai phía ở mức năm phần trăm khi đó là hai phẩy hai không một, chứ không phải một phẩy chín sáu như hình chuông chuẩn. Dùng vạch của hình chuông chuẩn thì bạn dễ bác giả thuyết quá sớm, và báo động giả thật sẽ lớn hơn năm phần trăm bạn đã viết. Vậy điều cần nhớ là: độ lệch chuẩn ước từ mẫu thì không được dùng vạch của người đã biết độ lệch chuẩn.",
		"q": "Vì sao mẫu nhỏ với độ lệch chuẩn tự ước lại cần vạch xa hơn vạch của hình chuông chuẩn?",
		"a": "Vì độ lệch chuẩn ước từ mẫu có thêm sai lệch, nên phân phối t có đuôi dày hơn, và vạch phải lùi ra xa để giữ báo động giả ở năm phần trăm."
	},
	"ht-peek": {
		"s": "Thẻ này nói về việc nhìn trộm kết quả thử nghiệm A B, và đáng biết vì nó làm con số năm phần trăm của bạn trở nên không còn đúng. Giả sử bạn xem kết quả mỗi ngày và hứa với mình sẽ dừng ngay khi giá trị p, hay p-value, xuống dưới năm phần trăm. Mỗi lần xem là một cơ hội để máy báo nhầm. Nếu mỗi lần xem có năm phần trăm cơ hội báo động giả và bạn xem năm lần, xác suất ít nhất một lần báo nhầm là khoảng hai mươi ba phần trăm, nếu coi các lần xem là độc lập. Cách giữ cho con số đó trung thực là viết luật dừng từ trước, ví dụ chốt cỡ mẫu cố định rồi mới xem. Điều cần nhớ: xem đến khi đẹp rồi mới dừng là đổi luật sau khi đã biết điểm.",
		"q": "Nếu mỗi lần xem có năm phần trăm báo động giả và bạn xem năm lần, xác suất báo nhầm khoảng bao nhiêu?",
		"a": "Khoảng hai mươi ba phần trăm, vượt xa năm phần trăm, nên phải viết luật dừng từ trước."
	},
	"ht-means": {
		"s": "Thẻ này nói về kiểm định hai trung bình, và đáng biết vì hai con số khác nhau chưa chắc là khác thật. Ví dụ, giá một form trên GDN trung bình một trăm hai mươi nghìn đồng, độ lệch chuẩn ba mươi nghìn, trên ba mươi sáu form. Trên Facebook trung bình một trăm ba mươi lăm nghìn đồng, độ lệch chuẩn bốn mươi nghìn, cũng ba mươi sáu form. Cách làm là tính sai số chuẩn của hiệu, ra khoảng tám nghìn ba trăm đồng. Lấy mười lăm nghìn chia cho con số đó được khoảng một phẩy tám, nhỏ hơn vạch khoảng hai, nên chưa đủ để bác giả thuyết rằng hai kênh bằng nhau. Cần nhớ thêm hai điều. Công thức này chỉ đúng khi hai mẫu độc lập, không phải cùng một người thấy cả hai bản. Và có ý nghĩa thống kê vẫn có thể chỉ là vài nghìn đồng, không đáng đổi ngân sách. Điều cần nhớ: khoảng cách nhìn thấy chưa phải khoảng cách thật, hãy hỏi nó có hiếm không.",
		"q": "Chênh lệch mười lăm nghìn đồng giữa hai kênh có đủ để kết luận kênh nào rẻ hơn không?",
		"a": "Chưa, vì thống kê kiểm định chỉ khoảng một phẩy tám, nhỏ hơn vạch khoảng hai, nên khoảng cách đó vẫn có thể chỉ là nhiễu."
	},
	"ht-props": {
		"s": "Thẻ này nói về kiểm định hai tỷ lệ, và đáng biết vì hai phần trăm với hai phẩy sáu phần trăm vẫn có thể chỉ là nhiễu. Mỗi bản quảng cáo có hai nghìn người xem. Bản A được bốn mươi form, tức hai phần trăm. Bản B được năm mươi hai form, tức hai phẩy sáu phần trăm. Cách làm là gộp cả hai bản lại, ra tỷ lệ chung là hai phẩy ba phần trăm, rồi tính sai số chuẩn của hiệu, khoảng không phẩy không không bốn bảy. Lấy hiệu không phẩy không không sáu chia cho số đó, ra khoảng một phẩy hai bảy, nhỏ hơn vạch một phẩy chín sáu, nên chưa bác được giả thuyết hai bản bằng nhau. Điều cần nhớ: hơn sáu phần mười điểm phần trăm chưa phải là một bản thắng, khi mỗi bản chỉ có khoảng năm mươi form.",
		"q": "Hai bản có hai phần trăm và hai phẩy sáu phần trăm, mỗi bản hai nghìn người xem, đã đủ để nói bản B thắng chưa?",
		"a": "Chưa. Thống kê khoảng một phẩy hai bảy, nhỏ hơn vạch một phẩy chín sáu, nên chênh lệch đó vẫn có thể là nhiễu."
	},
	"ht-chi": {
		"s": "Thẻ này nói về kiểm định chi-bình phương, và đáng biết vì nó nhìn cả bảng chứ không soi từng ô. Giả sử kênh GDN có ba mươi người mua và bảy mươi người không mua. Kênh TikTok có mười người mua và chín mươi người không mua. Tổng cộng hai trăm người, bốn mươi người mua. Nếu kênh và việc mua không liên quan, mỗi kênh sẽ có hai mươi người mua. Ta so số thật với số kỳ vọng ở cả bốn ô. Mỗi ô lấy chênh lệch, bình phương lên, chia cho số kỳ vọng, rồi cộng lại. Kết quả là mười hai phẩy năm, với một bậc tự do. Vạch ở mức năm phần trăm là ba phẩy tám bốn, nên ta bác giả thuyết rằng kênh và việc mua độc lập. Lưu ý các ô kỳ vọng không nên quá nhỏ, dưới năm thì phép này yếu. Đó là kinh nghiệm chứ không phải định lý. Điều cần nhớ: một ô nhìn lớn chưa đủ, cả bảng mới là một cuộc kiểm định.",
		"q": "Trong ví dụ hai kênh, vì sao ta bác được giả thuyết kênh và việc mua không liên quan?",
		"a": "Vì thống kê chi-bình phương là mười hai phẩy năm, lớn hơn vạch ba phẩy tám bốn của một bậc tự do."
	},
	"ht-anova": {
		"s": "Thẻ này nói về ANOVA, và đáng biết vì khi so ba mức trở lên, bạn chỉ nên làm một cuộc kiểm định thay vì nhiều cuộc nhỏ. Ví dụ ba kênh, mỗi kênh có ba số đo giá một form, tính bằng nghìn đồng. Kênh một là mười, mười một, mười hai. Kênh hai là mười một, mười hai, mười ba. Kênh ba là mười chín, hai mươi, hai mươi mốt. ANOVA so độ chênh giữa các nhóm với độ chênh trong từng nhóm. Ở đây phương sai giữa các nhóm là bảy mươi ba, còn trong nhóm chỉ là một, nên tỷ số F là bảy mươi ba, rất lớn, và ta bác giả thuyết rằng các trung bình bằng nhau. Nhưng F lớn chỉ do nhóm hai mươi đứng xa, nó không cho biết cặp nào khác nhau. Điều cần nhớ: nhiều kiểm định là nhiều lần được báo nhầm, một kiểm định F chỉ là một lần.",
		"q": "Vì sao nên dùng một kiểm định F thay vì nhiều kiểm định t cho từng cặp kênh?",
		"a": "Vì mỗi kiểm định thêm là thêm một cơ hội báo động giả, còn một kiểm định F chỉ tốn một lần."
	},
	"eda-ask": {
		"s": "Thẻ này nói về phân tích khám phá dữ liệu, gọi tắt là EDA, và đáng biết vì biểu đồ chỉ có ích khi có câu hỏi đứng trước. Bạn mở file chi tiêu của một tuần. Câu nói làm EDA thì chưa phải một câu hỏi. Một câu hỏi thật sẽ là: tỷ lệ form tháng này có khác tháng trước không, và khác bao nhiêu form. Chẳng hạn tỷ lệ form giảm từ hai phần trăm xuống một phẩy sáu phần trăm, tức mất khoảng tám mươi form trên hai mươi nghìn lượt. Khám phá vẫn cần một đích: quyết định nào sẽ đổi nếu hình này khác đi. Vẽ mọi cặp cột rồi chọn cặp đẹp là tự kể chuyện sau khi đã thấy kết quả. Điều cần nhớ: biểu đồ là dụng cụ, câu hỏi mới là mục đích.",
		"q": "Vì sao câu làm EDA chưa phải là một câu hỏi tốt?",
		"a": "Vì nó không chỉ ra cột cần xem hay quyết định nào sẽ đổi, nên khám phá thiếu một đích rõ ràng."
	},
	"eda-src": {
		"s": "Thẻ này nói về nguồn dữ liệu, và đáng biết vì nguồn quyết định bạn được phép nói điều gì. File chuyến taxi công khai không phải là khách spa của bạn. Một tỷ lệ tính trên file đó không phải tỷ lệ đặt lịch ở cửa hàng của bạn. Dữ liệu riêng là dữ liệu bạn có quyền dùng và tự thiết kế cách thu. Dữ liệu công khai là dữ liệu người khác đã chọn, lọc và định nghĩa. Ví dụ, file ghi mười nghìn chuyến và mỗi dòng là một chuyến. Khi nó nói ba mươi phần trăm có tiền boa, đó là ba mươi phần trăm số chuyến, không phải ba mươi phần trăm số người đi. Vì vậy, trước khi cộng, hãy ghi rõ mỗi dòng đại diện cho cái gì, còn gọi là hạt của dòng. Điều cần nhớ: một con số đúng trên file sai vẫn cho một câu sai.",
		"q": "Trước khi cộng hay tính tỷ lệ, bạn nên ghi rõ điều gì về bảng dữ liệu?",
		"a": "Ghi rõ mỗi dòng đại diện cho cái gì, ví dụ một chuyến hay một người, tức là hạt của dòng."
	},
	"eda-type": {
		"s": "Thẻ này nói về kiểu dữ liệu, và đáng biết vì phép tính vẫn chạy được ngay cả khi nó vô nghĩa. Trong một bảng, cột kênh là chữ. Cột số sao là chữ có thứ tự. Cột ngày ghi form là ngày. Cột chi tiêu là số. Cột số có khoảng cách đo được. Chữ không thứ tự chỉ có nhóm. Chữ có thứ tự có hướng, nhưng khoảng giữa các bậc chưa chắc đều. Chẳng hạn, nếu bạn mã hóa GDN, Facebook, TikTok thành một, hai, ba, thì không thể nói kênh trung bình là hai phẩy bốn, vì trung bình của một cái tên không tồn tại. Ngày để dạng số hay dấu thời gian nguyên thô cũng chỉ cho biết muộn hơn hay sớm hơn, chứ không nói được thứ trong tuần. Và khi file tự đổi kiểu ngầm, cột mã dễ bị đem đi tính trung bình. Điều cần nhớ: sai kiểu thì phép tính vẫn chạy được, còn câu trả lời thì sai.",
		"q": "Vì sao không thể nói kênh trung bình là hai phẩy bốn khi kênh được mã hóa thành một, hai, ba?",
		"a": "Vì kênh là chữ không thứ tự, các mã chỉ là nhãn nhóm, không có khoảng cách đo được nên trung bình vô nghĩa."
	},
	"eda-row": {
		"s": "Thẻ này nói về dòng và cột, và đáng biết vì chỉ cần một người xuất hiện hai dòng là mọi tổng bị phóng to. Một khách để lại form hai lần vì tải lại trang, nên hàm cộng chi tiêu tính họ hai lần. Mỗi dòng phải là một thứ bạn gọi tên được. Ví dụ, bảng có một nghìn dòng nhưng chỉ có chín trăm bốn mươi mã khách khác nhau, nghĩa là sáu mươi dòng trùng. Nếu mỗi dòng ghi năm trăm nghìn đồng, tổng bị phóng thêm ba mươi triệu đồng. Tuy vậy, xóa trùng không phải lúc nào cũng đúng, vì hai lần mua thật là hai dòng. Cũng cần chú ý khi một cột vừa là tên vừa là mã, hoặc một cột gộp nhiều giá trị, vì chúng khiến việc nhóm và nối bảng nói sai. Cách phòng là đặt lại hạt và tên của dòng, rồi đếm số khóa. Điều cần nhớ: hãy đếm số khóa trước khi tin một tổng.",
		"q": "Bảng có một nghìn dòng nhưng chín trăm bốn mươi mã khách. Điều đó cho thấy gì?",
		"a": "Có sáu mươi dòng trùng khóa, nên các tổng tính trên bảng có thể bị phóng to."
	},
	"eda-miss": {
		"s": "Thẻ này nói về giá trị thiếu, và đáng biết vì ô trống không phải là số không. Giả sử cột tuổi của một nghìn khách có một trăm ô trống. Chín trăm người đã khai có tuổi trung bình là ba mươi lăm. Nếu bạn điền số không cho một trăm người còn lại, trung bình tụt còn ba mươi mốt phẩy năm, và mô hình tưởng có khách không tuổi. Nếu ô trống xảy ra hoàn toàn ngẫu nhiên, xóa dòng chỉ làm mẫu nhỏ đi. Nếu ô trống phụ thuộc cột khác, như người trẻ hay bỏ qua ô thu nhập, việc điền phải dựa vào các cột đó và vẫn chỉ là ước lượng. Tệ hơn, khi ô trống phụ thuộc chính giá trị bị thiếu, như người chi rất cao không khai, điền bằng trung bình sẽ kéo kết quả về phía an toàn giả. Không có một cách điền đúng cho mọi cột. Điều cần nhớ: điền cho đủ bảng không có nghĩa là bạn biết giá trị đó.",
		"q": "Điền số không vào ô tuổi bị trống thì có hại gì?",
		"a": "Nó kéo trung bình tụt xuống, ví dụ từ ba mươi lăm còn ba mươi mốt phẩy năm, và tạo ra những khách không tuổi không có thật."
	},
	"eda-out": {
		"s": "Thẻ này nói về giá trị ngoại lai, và đáng biết vì xa không có nghĩa là sai. Hầu hết các tuần có dưới bốn mươi form, riêng một tuần có một trăm hai mươi. Hàng rào IQR sẽ đánh dấu tuần đó. Cách tính là lấy tứ phân vị ba cộng một phẩy năm lần khoảng cách giữa tứ phân vị ba và một. Với tứ phân vị một là hai mươi và ba là hai mươi tám, khoảng cách là tám, và hàng rào trên là bốn mươi. Tuần một trăm hai mươi vượt hàng rào. Nhưng nếu đó là tuần Tết thì con số có thể là thật. Nếu ai đó gõ thừa một số không thì nó có thể là lỗi. Điểm vượt hàng rào chỉ là bất thường so với phần giữa của mẫu, không chứng minh dữ liệu sai. Xóa điểm thật làm trung bình và mô hình mất đúng chỗ đáng chú ý. Điều cần nhớ: xóa vì xa là xóa đi thứ có thể chính là câu chuyện.",
		"q": "Một tuần có một trăm hai mươi form vượt hàng rào, vậy có nên xóa ngay không?",
		"a": "Không. Hãy kiểm tra trước, vì đó có thể là tuần lễ thật, và xóa đi là mất đúng chỗ đáng chú ý."
	},
	"eda-scale": {
		"s": "Thẻ này nói về chuẩn hóa z, và đáng biết vì nó đưa các cột về cùng một thước đo. Giả sử chi tiêu tính bằng triệu đồng, còn thời gian xem tính bằng giây. Nếu bạn tính khoảng cách để gom cụm, gần như chỉ cột có số lớn hơn mới có tiếng nói. Điểm z giải quyết chuyện đó bằng cách lấy giá trị trừ đi trung bình của cột, rồi chia cho độ lệch chuẩn của cột. Ví dụ một khách chi sáu triệu, trung bình cột là năm triệu, độ lệch chuẩn là hai triệu, thì điểm z là không phẩy năm. Sau khi chuẩn hóa, mọi cột có trung bình bằng không và độ lệch chuẩn bằng một, nên có trọng lượng như nhau. Điều cần nhớ: cùng thước là để không cột nào át tiếng cột khác, không phải để tạo ra một đường thẳng.",
		"q": "Khách chi sáu triệu, trung bình cột năm triệu, độ lệch chuẩn hai triệu. Điểm z là bao nhiêu?",
		"a": "Không phẩy năm, vì lấy sáu trừ năm được một, rồi chia cho hai."
	},
	"eda-bad": {
		"s": "Thẻ này nói về giá trị không hợp lệ và bộ lọc, và đáng biết vì chúng khác hẳn giá trị hiếm. Tỷ lệ form là hai trăm phần trăm, ngày hẹn nằm ở năm sau khi file đã khóa, tuổi là âm ba. Đó không phải khách lạ mà là những giá trị không được phép theo định nghĩa của cột. Khi lọc, bạn tạo ra một tập con, và mọi tỷ lệ phía sau là tỷ lệ trên tập đó. Ví dụ, bảng một nghìn dòng, lọc còn chín trăm sáu mươi, nghĩa là bỏ bốn mươi dòng. Câu báo cáo phải ghi rõ chín trăm sáu mươi dòng sau khi bỏ bốn mươi dòng có tỷ lệ ngoài khoảng từ không đến một trăm phần trăm. Điều cần nhớ: bộ lọc là một phần của câu kết luận, giấu bộ lọc là giấu một phần câu.",
		"q": "Sau khi lọc bỏ bốn mươi dòng không hợp lệ, báo cáo cần ghi gì?",
		"a": "Cần ghi số dòng còn lại, số dòng đã bỏ và lý do bỏ, vì bộ lọc là một phần của kết luận."
	},
	"eda-cat": {
		"s": "Thẻ này nói về cách phân tích một cột chữ không thứ tự, và đáng biết vì với loại cột này bạn chỉ nên đếm, đừng nối. Giả sử bảng có bốn trăm dòng GDN, năm trăm năm mươi dòng Facebook và hai trăm năm mươi dòng TikTok, tổng một nghìn hai trăm dòng. Phần của từng kênh là ba mươi ba phần trăm, bốn mươi sáu phần trăm và hai mươi mốt phần trăm. Thứ tự vẽ các cột không mang ý nghĩa gì. Có thể nêu nhóm xuất hiện nhiều nhất, gọi là mode, nhưng nó không nói các nhóm còn lại nhỏ thế nào. Mỗi phần trăm cần có mẫu số rõ ràng: tính trên người, trên dòng hay trên tiền. Và sắp các cột theo bảng chữ cái không tạo ra một xu hướng nào cả. Điều cần nhớ: ba tên kênh là ba đống riêng, không phải ba điểm trên một trục.",
		"q": "Với cột kênh có ba tên, nên mô tả bằng cách nào?",
		"a": "Bằng số đếm và phần trăm của từng nhóm, với mẫu số rõ ràng, chứ không nối chúng thành một đường."
	},
	"eda-ord": {
		"s": "Thẻ này nói về cột chữ có thứ tự, như đánh giá từ một đến năm sao, và đáng biết vì con số trung bình có thể giấu mất sự thật. Giả sử đánh giá spa có bốn mươi người cho năm sao, ba mươi người cho một sao và ba mươi người cho ba sao. Trung bình là ba phẩy hai, nghe như tạm ổn, trong khi khách thật ra chia thành hai cực. Thang bậc có hướng, nhưng việc các bậc cách đều nhau chỉ là một giả định thêm, không phải sự thật của nhãn. Trung vị chỉ cần thứ tự mà không cần khoảng đều, còn trung bình thì cần giả định đó. Vì vậy hãy vẽ phân bố từng bậc, đúng thứ tự từ một đến năm. Cũng cẩn thận với thang bị mã hóa ngược, chẳng hạn một là tốt nhất, vì nó đảo ngược mọi kết luận. Điều cần nhớ: giữ đúng bậc, đừng để bảng chữ cái sắp lại thành một, năm, bốn.",
		"q": "Vì sao trung bình ba phẩy hai sao có thể gây hiểu lầm về đánh giá spa?",
		"a": "Vì khách chia hai cực, nhiều người năm sao và nhiều người một sao, nên con số ở giữa giấu mất hình dạng thật."
	},
	"eda-num": {
		"s": "Thẻ này nói về thống kê mô tả của cột số, và đáng biết vì khoảng cách giữa trung bình và trung vị là dấu hiệu của cái đuôi. Giả sử tám tuần có số form là mười tám, mười chín, hai mươi, hai mươi, hai mươi, hai mươi mốt, hai mươi hai và một trăm hai mươi. Tổng là hai trăm bốn mươi, chia cho tám được trung bình ba mươi. Còn trung vị, mức mà một nửa mẫu nằm từ đó trở xuống, là hai mươi. Một điểm cực đoan kéo trung bình lên, nhưng trung vị bỏ qua độ lớn của đuôi. Nếu chỉ kể một số, bạn hoặc giấu tuần lễ, hoặc giấu các tuần thường. Độ lệch chuẩn thì mô tả độ rộng quanh trung bình. Một phân phối hai đám còn có thể có trung bình rơi vào chỗ gần như không có tuần nào. Điều cần nhớ: một số ở giữa chưa phải hình dạng của cả cột.",
		"q": "Khi trung bình là ba mươi còn trung vị là hai mươi, điều đó gợi ý gì?",
		"a": "Gợi ý dữ liệu có cái đuôi dài về phía số lớn, nên phải kể cả đuôi chứ không chỉ một con số."
	},
	"eda-r": {
		"s": "Thẻ này nói về hệ số tương quan Pearson, gọi là r, khi phân tích hai cột số, và đáng biết vì r chỉ là con số tóm tắt chứ không phải bản thân hình. Giữa chi tiêu và số form qua các tuần của một tài khoản, giả sử bạn tính được r bằng không phẩy sáu. Cách tính là lấy hiệp phương sai, mười hai, chia cho tích hai độ lệch chuẩn, hai triệu đồng nhân mười form. Kết quả là không phẩy sáu. Khi r bằng một, các điểm nằm đúng trên một đường thẳng tăng. Nhưng một tuần cụ thể vẫn có thể lệch xa đường tóm tắt. Và r gần không không loại trừ một hình chữ U. Một điểm rất xa cũng có thể kéo r đi nhiều. Hệ số Spearman nhìn thứ hạng nên ít bị điểm xa kéo, nhưng vẫn không chỉ ra nguyên nhân. Điều cần nhớ: hãy nhìn các chấm trước, r chỉ là con số tóm tắt sau hình.",
		"q": "Vì sao r gần không chưa chắc nghĩa là hai cột không liên quan?",
		"a": "Vì r chỉ đo mức đi cùng nhau theo đường thẳng, nên một hình chữ U vẫn có thể cho r gần không."
	},
	"eda-cause": {
		"s": "Thẻ này nói về việc tương quan không phải nhân quả, và đáng biết vì nó giúp bạn khỏi ra quyết định sai. Giả sử tuần nào số form tăng thì đơn kem gần cửa hàng cũng tăng. Tắt kem đi không phải một kế hoạch media, vì cả hai có thể cùng tăng theo mùa lễ. Mùa lễ ở đây là một biến thứ ba, gọi là confounder, hay yếu tố gây nhiễu. Nếu mùa lễ làm form tăng ba mươi phần trăm và đơn kem tăng bốn mươi phần trăm, hai cột đi cùng nhau mà không cột nào ảnh hưởng cột kia. Thứ tự thời gian cũng chưa đủ, vì xảy ra trước chưa phải là một nút bạn can thiệp được. Muốn nói về việc tăng ngân sách, bạn cần một so sánh mà phần tăng đó không bị trộn với mùa và với kênh. Điều cần nhớ: đi cùng nhau là gợi ý để đặt câu hỏi, không phải nút để bấm.",
		"q": "Hai cột cùng tăng trong mùa lễ có nghĩa là cột này kéo cột kia không?",
		"a": "Không. Một yếu tố thứ ba như mùa lễ có thể làm cả hai cùng tăng mà chúng không tác động lên nhau."
	},
	"eda-group": {
		"s": "Thẻ này nói về việc so sánh một cột số theo một cột chữ, và đáng biết vì trung bình nhóm có thể giấu độ rộng. Giả sử số form mỗi tuần của GDN là ba mươi tám, bốn mươi, bốn mươi hai, bốn mươi. Của Facebook là mười, hai mươi, ba mươi, một trăm. Cả hai kênh đều có tổng một trăm sáu mươi trong bốn tuần, nên trung bình cùng là bốn mươi. Nhưng GDN rất khít, các tuần chỉ lệch hai form. Còn Facebook rất rộng, có tuần chỉ mười, có tuần tới một trăm. Một kênh trung bình cao nhờ một tuần lễ khác với một kênh tuần nào cũng cao. Nếu cần kiểm định, hãy viết nó trước, đừng chạy một cuộc cho mọi cặp bạn vừa nhìn thấy. Và vì tên nhóm không nằm trên trục số, đừng hỏi hệ số tương quan của nó. Điều cần nhớ: tên nhóm không nằm trên trục số, đừng hỏi r của nó.",
		"q": "Hai kênh cùng trung bình bốn mươi form nhưng một kênh khít, một kênh rộng. Khác biệt đó quan trọng ở đâu?",
		"a": "Nó cho biết kênh rộng có thể trung bình cao nhờ một tuần đột biến, còn kênh khít thì tuần nào cũng ổn định."
	},
	"eda-tab": {
		"s": "Thẻ này nói về việc phân tích hai cột chữ, và đáng biết vì một phần trăm không nói rõ là phần của cái gì thì chưa dùng được. Giả sử kênh GDN có ba mươi người mua trên một trăm dòng, và cả bảng có bốn mươi người mua. Nếu lấy ba mươi chia cho một trăm, ta được ba mươi phần trăm, đó là phần dòng GDN có mua. Nếu lấy ba mươi chia cho bốn mươi, ta được bảy mươi lăm phần trăm, đó là phần người mua đến từ GDN. Một cái tính theo hàng, lấy tổng hàng làm mẫu số. Một cái tính theo cột, lấy tổng cột làm mẫu số. Đổi mẫu số là đổi câu hỏi. Nếu kiểm định trên bảng, hãy dùng số đếm thật, không dùng phần trăm đã làm tròn. Và bảng này chưa nói gì về nguyên nhân. Điều cần nhớ: ba mươi phần trăm mà không nói của cái gì thì chưa dùng được.",
		"q": "Ba mươi trên một trăm và ba mươi trên bốn mươi khác nhau ở điểm nào?",
		"a": "Mẫu số khác nhau: một là phần dòng GDN có mua, ba mươi phần trăm, còn một là phần người mua đến từ GDN, bảy mươi lăm phần trăm."
	},
	"eda-flip": {
		"s": "Thẻ này nói về nghịch lý Simpson khi phân tích nhiều biến, và đáng biết vì tỷ lệ gộp có thể nói ngược với từng nhóm. Với khách mới, TikTok có ba mươi trên một trăm form, tức ba mươi phần trăm, còn GDN có tám trên bốn mươi, tức hai mươi phần trăm. Với khách cũ, TikTok là mười tám trên hai mươi, GDN là chín mươi trên một trăm, cả hai đều chín mươi phần trăm. Vậy TikTok không thua GDN ở nhóm nào. Thế mà gộp lại, GDN được bảy mươi phần trăm còn TikTok chỉ bốn mươi phần trăm. GDN trông thắng vì phần lớn khách của nó là khách cũ, vốn dễ để lại form. Nghịch lý này không nói tầng nào là nguyên nhân, nó chỉ cho thấy tỷ lệ gộp đang trộn hai đám khác nhau. Tách xong vẫn phải hỏi tầng đó có phải thứ bạn can thiệp được không. Điều cần nhớ: gộp lại là một cách trộn, và trộn có thể đảo ngược câu trả lời.",
		"q": "Vì sao GDN trông thắng khi gộp, dù TikTok không thua ở từng nhóm khách?",
		"a": "Vì phần lớn khách của GDN là khách cũ, vốn có tỷ lệ cao, nên tỷ lệ gộp bị trộn và đảo chiều."
	},
	"sql-wh": {
		"s": "Thẻ này nói về kho dữ liệu, và đáng biết vì hỏi sai bảng thì câu truy vấn đúng vẫn cho kết quả sai. Bảng đơn hàng đang phục vụ thu ngân. Hỏi doanh thu mười tám tháng ngay trên bảng đó là hỏi một bàn đang bận, và bảng có thể không còn giữ đủ lịch sử. Hệ thống vận hành chuyên ghi nhiều lần nhỏ và giữ trạng thái hiện tại, còn kho dữ liệu chuyên trả lời câu hỏi đọc trên lịch sử. Đường đi từ cái này sang cái kia gọi là ETL, gồm ba bước: trích xuất, biến đổi và làm sạch, rồi nạp vào kho. Nếu mười tám tháng có năm trăm bốn mươi nghìn đơn, truy vấn trên bảng vận hành phải quét cả khối đó trong lúc thu ngân đang ghi đơn. Điều cần nhớ: hỏi sai bảng thì câu hỏi đúng vẫn cho một câu chuyện sai.",
		"q": "Vì sao không nên hỏi doanh thu mười tám tháng trực tiếp trên bảng đang ghi đơn của thu ngân?",
		"a": "Vì bảng đó phục vụ việc ghi, có thể thiếu lịch sử, và truy vấn nặng sẽ làm chậm hệ thống đang bận. Lịch sử nên nằm trong kho dữ liệu."
	},
	"sql-star": {
		"s": "Thẻ này nói về sơ đồ sao, và đáng biết vì nó giúp bạn biết một dòng là gì trước khi cộng. Ở giữa là bảng sự kiện, nơi mỗi dòng là một việc đã xảy ra, ví dụ một form. Xung quanh là các bảng danh mục, như kênh, ngày, cửa hàng. Cột kênh trong bảng giữa chỉ là mã, còn tên kênh nằm ở bảng kênh, nên không phải lặp lại cả đoạn chữ ở mọi dòng. Ý nghĩa của một dòng trong bảng giữa gọi là hạt, và nó phải nói được thành một câu. Ví dụ, mỗi form gắn với ba dòng sản phẩm, và bạn đếm dòng, thì một trăm form sẽ thành ba trăm. Sai hạt, như lẫn đơn hàng với dòng sản phẩm, làm phép cộng bị nhân lên. Điều cần nhớ: một dòng là một việc cụ thể, và chỉ khi nói được việc đó mới nên cộng.",
		"q": "Nếu mỗi form gắn với ba dòng sản phẩm và bạn đếm dòng, một trăm form thành bao nhiêu?",
		"a": "Thành ba trăm, vì sai hạt làm phép đếm bị nhân lên."
	},
	"sql-key": {
		"s": "Thẻ này nói về khóa chính và khóa ngoại, và đáng biết vì mã không có chủ làm mọi câu nối bảng bị thủng. Giả sử một form ghi mã chiến dịch tám trăm tám mươi bốn, trong khi bảng chiến dịch chỉ có các mã tám trăm tám mươi mốt, hai và ba. Doanh thu của mã tám trăm tám mươi bốn sẽ không nối được, hoặc nối ra một cái tên trống. Nếu hai mươi form mang mã đó, hai mươi form ấy biến mất khỏi mọi báo cáo theo chiến dịch. Khóa chính là danh tính của một dòng, phải duy nhất và không để trống. Khóa ngoại là lời hứa rằng dòng được trỏ tới có thật. Còn có luật riêng của từng cột, như tỷ lệ phải nằm từ không đến một. Thiếu các ràng buộc này thì phép nối không cứu được dữ liệu. Điều cần nhớ: mã không có chủ thì mọi câu nối phía sau đều bị thủng.",
		"q": "Khóa ngoại là lời hứa gì?",
		"a": "Là lời hứa rằng dòng mà nó trỏ tới có thật, để không có mã mồ côi làm thủng báo cáo."
	},
	"sql-ddl": {
		"s": "Thẻ này nói về hai nhóm lệnh trong cơ sở dữ liệu, và đáng biết vì nhầm hai nhóm này có thể làm mất cả bảng. Lệnh định nghĩa, gọi là DDL, đổi cấu trúc bảng. Thêm cột kênh là đổi khung, và mọi dòng đều có một ô mới. Lệnh thao tác, gọi là DML, đổi dữ liệu trong bảng. Sửa chi tiêu của một tuần là đổi một dòng. Lệnh xóa bảng làm mất cả bảng, còn lệnh xóa dòng chỉ xóa dòng và có thể đi kèm điều kiện. Lệnh cập nhật mà không có điều kiện sẽ sửa mọi dòng. Ví dụ bảng có mười hai nghìn dòng, và bạn đặt chi tiêu bằng không mà quên điều kiện, cả mười hai nghìn dòng về không. Quyền đổi khung và quyền đổi dữ liệu thường tách riêng. Câu chỉ để xem thì không nên chạy bằng tài khoản có quyền xóa. Điều cần nhớ: muốn xem thì dùng SELECT, và sửa một ô không phải lúc để đổi khung.",
		"q": "Một lệnh cập nhật không có điều kiện sẽ làm gì?",
		"a": "Nó sửa mọi dòng trong bảng, ví dụ đặt chi tiêu của cả mười hai nghìn dòng về không."
	},
	"sql-run": {
		"s": "Thẻ này nói về thứ tự chạy của một truy vấn, và đáng biết vì máy không đọc từ chữ SELECT như bạn tưởng. Giả sử bạn viết chọn kênh và tổng form, đặt tên là total, rồi lọc bằng WHERE total lớn hơn không. Câu này lỗi, vì máy lấy bảng trước, rồi lọc dòng, rồi nhóm, và chỉ sau đó mới chọn cột. Nên bước lọc dòng không nhìn thấy cái tên total vừa đặt ở SELECT. Thứ tự thường gặp là FROM và JOIN, rồi WHERE, GROUP BY, HAVING, SELECT, ORDER BY và LIMIT. Ví dụ bảng mười nghìn dòng, WHERE giữ tám nghìn, GROUP BY nhóm thành ba kênh, HAVING giữ hai kênh, và SELECT mới tạo cột kết quả. Bộ tối ưu bên dưới có thể chạy khác đi, nhưng nghĩa của câu luôn theo thứ tự này. Điều cần nhớ: hãy đọc từ FROM; chữ SELECT chỉ là danh sách đầu ra, không phải bước một.",
		"q": "Vì sao bước WHERE không dùng được tên cột đặt ở SELECT?",
		"a": "Vì WHERE chạy trước SELECT, nên tên đó chưa tồn tại ở bước lọc dòng."
	},
	"sql-having": {
		"s": "Thẻ này nói về WHERE và HAVING, và đáng biết vì chọn nhầm một trong hai sẽ cho lỗi hoặc kết quả sai. WHERE lọc dòng trước khi nhóm. HAVING lọc nhóm sau khi đã có tổng. Ví dụ, điều kiện chi tiêu lớn hơn không ở WHERE sẽ bỏ những dòng chưa chi tiêu. Còn điều kiện tổng form lớn hơn mười lăm ở HAVING sẽ bỏ cả kênh nếu tổng form của kênh đó không quá mười lăm. Với GDN bốn mươi form, Facebook năm mươi lăm form và TikTok mười hai form, TikTok bị bỏ. Một điều kiện không dùng hàm gộp thì nên viết ở WHERE, để khỏi phải nhóm những dòng sẽ bị bỏ. Dùng cả hai cùng lúc là hợp lệ: trước lọc dòng, sau bỏ nhóm yếu. Điều cần nhớ: tổng chưa tồn tại ở bước WHERE, nên đừng hỏi WHERE về một tổng.",
		"q": "Muốn bỏ những kênh có tổng form không quá mười lăm thì dùng WHERE hay HAVING?",
		"a": "HAVING, vì tổng chỉ có sau khi nhóm, còn WHERE chạy trước khi nhóm."
	},
	"sql-count": {
		"s": "Thẻ này nói về hàm gộp, và đáng biết vì ô trống làm kết quả đổi nghĩa mà bạn không thấy lỗi. Giả sử có bốn tuần, số form là mười, mười hai, trống và mười bốn, trong đó một tuần không ghi. Đếm tất cả dòng cho ra bốn. Đếm cột form cho ra ba, vì bỏ ô trống. Tổng là ba mươi sáu, bỏ ô trống chứ không cộng thêm số không. Trung bình là ba mươi sáu chia cho ba, được mười hai, chứ không phải ba mươi sáu chia cho bốn, tức chín. Nghĩa là trung bình chỉ tính trên những ô có số, không phải mọi dòng. Ngoài ra, mọi cột không nằm trong hàm gộp phải có trong phần nhóm. Quên một cột chữ thì câu hoặc báo lỗi, hoặc cột đó bị gộp lặng lẽ tùy máy. Điều cần nhớ: một ô trống làm đếm và trung bình đổi nghĩa, nên hãy biết mình đang bỏ qua gì.",
		"q": "Với số form mười, mười hai, trống và mười bốn, trung bình của hàm gộp là bao nhiêu?",
		"a": "Mười hai, vì ô trống bị bỏ qua nên lấy ba mươi sáu chia cho ba chứ không phải cho bốn."
	},
	"sql-like": {
		"s": "Thẻ này nói về LIKE và regex, và đáng biết vì chúng là hai công cụ khác nhau dù cùng để khớp chữ. Giả sử mã có dạng chữ F, một dấu gạch, rồi hai chữ số. Mẫu LIKE có chữ F, dấu gạch và hai dấu gạch dưới khớp chữ F, một dấu gạch và hai ký tự bất kỳ, chưa phải đúng hai chữ số. Muốn kiểm đúng hai chữ số thì cần regex, tức biểu thức chính quy, của đúng hệ thống đang dùng. Một mẫu không có mỏ neo có thể khớp ở giữa ô. Chữ hoa chữ thường còn phụ thuộc cách so sánh chữ của cột. Hàm hoặc regex bọc quanh một cột thường làm chỉ mục của cột đó không được dùng. Và đừng dùng LIKE để tách ngày đang để dạng chữ, hãy đưa về kiểu ngày. Ví dụ mẫu có dấu phần trăm đứng trước chữ tok khớp tiktok, nhưng cũng khớp xtok. Điều cần nhớ: mẫu như vậy không có nghĩa là đúng kênh tok.",
		"q": "Mẫu LIKE tìm chữ tok có thể khớp nhầm gì?",
		"a": "Nó khớp cả tiktok lẫn xtok, vì mẫu không có mỏ neo nên khớp được ở giữa ô."
	},
	"sql-date": {
		"s": "Thẻ này nói về kiểu ngày, và đáng biết vì một chuỗi trông giống ngày thì không làm được phép lịch. Muốn lọc tháng mười một, hãy lấy ngày từ mùng một tháng mười một đến trước mùng một tháng mười hai. Khoảng nửa mở này không phụ thuộc số ngày của tháng, và đúng ba mươi ngày. Còn bọc hàm lấy tháng quanh cột ngày có thể làm chỉ mục không dùng được. Múi giờ cũng có thể làm một dấu thời gian lệch ngày khi bạn chỉ nhìn phần ngày, nên cần nói rõ múi giờ của cột. Hàm tính chênh ngày đếm theo quy tắc của hệ thống, thường là số biên ngày chứ không phải số giờ chia cho hai mươi bốn. Một chuỗi như mười một, không hai, hai nghìn không trăm hai mươi sáu thì không rõ là ngày hai tháng mười một hay ngày mười một tháng hai. Điều cần nhớ: cắt chuỗi ngày là một lỗi đang chờ định dạng thay đổi.",
		"q": "Vì sao nên lọc tháng bằng khoảng từ đầu tháng đến trước đầu tháng sau?",
		"a": "Vì khoảng đó không phụ thuộc số ngày của tháng, và vẫn dùng được chỉ mục của cột ngày."
	},
	"sql-nest": {
		"s": "Thẻ này nói về chuyện lồng câu truy vấn trong câu truy vấn, và vì sao lồng thêm không có nghĩa là cao tay hơn. Hãy hình dung bạn có một danh sách mã cần lọc. Bạn có thể dùng IN với một câu truy vấn con, hoặc nối bảng đó vào bằng JOIN. Thường hai cách cùng một ý, nhưng phép nối cho bạn thấy rõ hơn mỗi dòng đại diện cho cái gì. Có một cái bẫy đáng nhớ. Nếu danh sách mã có ô trống, thì IN và NOT IN cư xử khác nhau. Gặp ô trống, NOT IN có thể không trả về dòng nào cả. Về tốc độ, một câu lồng có thể bắt máy so sánh rất nhiều lần. Một nghìn dòng ngoài với năm trăm dòng trong có thể thành tới năm trăm nghìn lần so sánh. Vì vậy hãy chọn câu dễ đọc, và chỉ đo thời gian khi thấy chậm. Điều cần nhớ: lồng thêm không làm câu truy vấn đúng hơn.",
		"q": "Nếu danh sách trong câu IN có ô trống, dùng NOT IN có thể gây ra chuyện gì?",
		"a": "Có thể không trả về dòng nào cả, vì NOT IN gặp ô trống thì kết quả không còn rõ ràng."
	},
	"sql-join": {
		"s": "Thẻ này nói về các kiểu nối bảng, đặc biệt là chuyện khóa không duy nhất thì dòng bị nhân lên. Đáng biết vì lỗi này không báo gì cả, nó chỉ lặng lẽ làm tổng của bạn sai. Một chiến dịch có ba form, còn bảng giá lại có hai dòng cùng mã chiến dịch đó. Khi nối, mỗi form ghép với từng dòng giá, ba nhân hai ra sáu dòng. Nếu mỗi form đáng mười đơn vị, tổng đáng ra là ba mươi, nhưng bây giờ thành sáu mươi. Cách phòng là đếm số khóa khác nhau trước khi nối, rồi đếm lại sau khi nối. Nếu số dòng tự nhiên tăng lên, đó là tiếng còi báo động. Cũng cần nhớ rằng nối theo một điều kiện sai, ví dụ nối theo tên không duy nhất, vẫn chạy bình thường và vẫn cho kết quả sai. Còn INNER JOIN thì làm mất những dòng không khớp. Điều cần nhớ: đếm trước, nối, rồi đếm lại; số dòng tăng lên là một tiếng còi báo động.",
		"q": "Chiến dịch có ba form, bảng giá có hai dòng cùng mã. Nối ra bao nhiêu dòng?",
		"a": "Sáu dòng, vì ba nhân hai. Tổng cộng dồn sẽ bị thừa nếu bạn không để ý."
	},
	"sql-left": {
		"s": "Thẻ này nói về LEFT JOIN, tức là phép nối giữ lại mọi dòng bên trái, và về việc ô trống không phải là số không. Hãy nghĩ đến năm cửa hàng, trong đó bốn cửa hàng có form, riêng cửa hàng Thủ Đức chưa có form nào. LEFT JOIN từ bảng cửa hàng vẫn giữ Thủ Đức, chỉ là cột form để trống. Nếu bạn đếm theo cột form thì ra bốn, còn đếm tất cả các dòng thì ra năm. Coi ô trống là số không để tính trung bình là một luật riêng, và bạn phải viết ra rõ ràng. Một cái bẫy hay gặp: sau LEFT JOIN, nếu bạn đặt điều kiện lọc cột bên phải ở phần WHERE, các dòng trống bị loại, và câu trở lại thành INNER JOIN. Muốn vừa giữ dòng không khớp vừa lọc bên phải, hãy đặt điều kiện trong phần ON. Điều cần nhớ: giữ lại cửa hàng không có đơn là việc của LEFT JOIN; biến nó thành số không là một câu khác.",
		"q": "Năm cửa hàng, bốn cửa hàng có form. Đếm theo cột form và đếm tất cả các dòng cho ra mấy?",
		"a": "Đếm theo cột form ra bốn, đếm tất cả các dòng ra năm."
	},
	"sql-union": {
		"s": "Thẻ này nói về UNION, tức là xếp hai bảng chồng lên nhau theo chiều dọc, khác với JOIN là ghép hai bảng cạnh nhau. Đáng biết vì hai thứ này hay bị dùng lẫn. Ví dụ, form tháng một có một trăm hai mươi dòng, form tháng hai có một trăm dòng, cùng các cột. UNION ALL xếp chồng và cho hai trăm hai mươi dòng. Còn UNION thì bỏ những dòng giống hệt nhau từng ô. Nếu có hai dòng như vậy, bạn chỉ còn hai trăm mười tám dòng, và có thể mất một form thật chỉ vì tình cờ nó giống form khác. UNION ALL không phải loại trùng nên thường rẻ hơn. Tên cột lấy theo câu đầu tiên. Một điểm dễ nhầm nữa: phần sắp xếp đặt ở cuối cả câu, không đặt trong từng vế. Còn INTERSECT và EXCEPT là lấy phần giao và phần hiệu của hai tập, không phải xếp dọc. Điều cần nhớ: ghép ngang là JOIN, xếp dọc là UNION; đừng dùng một chữ cho cả hai.",
		"q": "Hai bảng có một trăm hai mươi và một trăm dòng. UNION ALL cho bao nhiêu dòng?",
		"a": "Hai trăm hai mươi dòng, vì nó chỉ xếp chồng và không loại dòng trùng."
	},
	"sql-win": {
		"s": "Thẻ này nói về hàm cửa sổ, một cách thêm cột tính toán mà vẫn giữ nguyên từng dòng. Đáng biết vì GROUP BY thường làm bạn mất chi tiết đúng lúc bạn cần nó. Giả sử bạn muốn biết hạng của từng tuần trong mỗi kênh, nhưng vẫn muốn thấy số form của tuần đó. Nếu gom nhóm theo kênh, từng tuần biến mất. Cụ thể, bảng mười hai tuần của ba kênh có ba mươi sáu dòng. Gom nhóm chỉ còn ba dòng, còn hàm cửa sổ vẫn giữ đủ ba mươi sáu dòng và thêm một cột hạng. Hàm cửa sổ luôn đi kèm từ OVER. Phần chia nhóm giúp tính mà không làm mất dòng, còn thứ tự bên trong OVER dùng để xếp hạng hay cộng dồn. Và khi không viết khung rõ ràng, mặc định của từng hàm có thể khác nhau, nên hãy đọc mặc định trước khi tin một tổng chạy. Điều cần nhớ: còn cần từng dòng thì đừng gom nhóm cho mất dòng.",
		"q": "Bảng mười hai tuần của ba kênh. Hàm cửa sổ giữ lại bao nhiêu dòng?",
		"a": "Ba mươi sáu dòng, và thêm một cột như cột hạng."
	},
	"sql-rank": {
		"s": "Thẻ này nói về ba hàm xếp hạng, khác nhau ở cách xử lý khi có hòa. Đáng biết vì chọn hàm nào là chọn luật hòa, và nó quyết định ai lọt vào top. Lấy bốn tuần có số form là bốn mươi, bốn mươi, ba mươi lăm và ba mươi. Hàm RANK cho hạng một, một, ba, bốn, nghĩa là để lại chỗ trống sau cụm hòa. Hàm DENSE RANK cho một, một, hai, ba, không để chỗ trống. Còn ROW NUMBER cho một, hai, ba, bốn, vì nó cứ phá hòa bằng cách đánh số liên tục. Như vậy tuần thứ ba có hạng ba theo RANK nhưng hạng hai theo DENSE RANK. Một lưu ý: nếu phần sắp xếp không đủ để phân biệt hai dòng hòa, ROW NUMBER có thể đổi thứ tự giữa hai lần chạy. Muốn ổn định, hãy thêm một khóa duy nhất vào phần sắp xếp. Điều cần nhớ: hòa không phải chi tiết nhỏ; nó quyết định ai lọt vào top.",
		"q": "Số form bốn mươi, bốn mươi, ba mươi lăm, ba mươi. Tuần ba mươi lăm có hạng mấy theo RANK và theo DENSE RANK?",
		"a": "Hạng ba theo RANK và hạng hai theo DENSE RANK."
	},
	"sql-part": {
		"s": "Thẻ này nói về PARTITION BY, cách cho mỗi nhóm tự xếp hạng bắt đầu từ một. Đáng biết vì hạng một luôn là hạng một của một cuộc xếp nào đó, và bạn cần nói rõ đó là cuộc nào. Hãy nghĩ đến tuần tốt nhất của TikTok và tuần tốt nhất của GDN. Cả hai đều mang hạng một trong kênh của mình. Đó không phải hai hạng một của cả tài khoản. Cụ thể hơn, nếu có ba kênh và không có hòa, bạn sẽ thấy đúng ba dòng hạng một, mỗi kênh một dòng. Còn nếu bỏ phần chia nhóm đi, cả bảng chỉ có một hạng một duy nhất. Cần nhớ rằng PARTITION BY không phải GROUP BY, các dòng không bị thu gọn, và nó cũng không thay thế điều kiện lọc sau khi gom nhóm. Nó chỉ vẽ lại ranh giới của cửa sổ. Điều cần nhớ: hạng một luôn là hạng một của một cuộc xếp, hãy nói rõ đó là cuộc nào.",
		"q": "Có ba kênh, không hòa, xếp hạng chia theo kênh. Có mấy dòng hạng một?",
		"a": "Ba dòng, mỗi kênh một dòng."
	},
	"sql-frame": {
		"s": "Thẻ này nói về khung cửa sổ, tức là tập các dòng mà hàm được phép nhìn quanh dòng hiện tại. Đáng biết vì ba dòng chưa chắc là ba tuần. Giả sử bạn tính trung bình của ba dòng gần nhất. Nếu bảng thiếu một tuần, ba dòng đó trải rộng hơn ba tuần theo lịch. Khung không tự điền những tuần vắng. Ví dụ bảng có tuần một, tuần hai và tuần bốn, thiếu tuần ba. Khi khung được đặt là hai dòng trước đó, dòng tuần bốn nhìn lại tuần hai và tuần một, tức là trải tới bốn tuần lịch chứ không phải ba. Có hai cách đếm. ROWS đếm theo số dòng. RANGE đếm theo giá trị của cột sắp xếp, nên các dòng hòa có thể vào chung một cửa sổ. Điều cần nhớ: khung là số dòng bạn chỉ định, không phải khoảng lịch bạn tưởng.",
		"q": "Bảng có tuần một, hai, bốn. Khung hai dòng trước tại tuần bốn trải qua mấy tuần lịch?",
		"a": "Bốn tuần lịch, vì nó nhìn lại tuần hai và tuần một, bỏ qua tuần ba đã thiếu."
	},
	"sql-lag": {
		"s": "Thẻ này nói về LAG và LEAD, hai hàm lấy giá trị của dòng liền trước hoặc liền sau. Đáng biết vì dòng trước chỉ là hôm qua nếu bảng của bạn không thiếu ngày nào. LAG lấy số form của dòng ngay phía trên, sau khi đã sắp theo ngày trong từng kênh. Nếu bảng thiếu ngày thứ ba thì dòng ngày thứ tư sẽ lấy giá trị của ngày thứ hai. Đó không phải hôm qua theo lịch. Hôm nay bốn mươi form, hôm qua ba mươi hai form, thì tăng tám form, tức là tám chia ba mươi hai, bằng hai mươi lăm phần trăm. Nhưng thiếu ngày, trùng ngày hoặc sắp nhầm cột đều làm hôm qua bị sai. Còn LEAD nhìn tới tương lai trong bảng đã có, nên dùng nó để dự báo là dùng một con số mà vào ngày ra quyết định bạn sẽ chưa có. Điều cần nhớ: một dòng trước là một dòng trong bảng, còn hôm qua là một ngày trên lịch.",
		"q": "Bảng thiếu ngày thứ ba. Ở dòng ngày thứ tư, LAG lấy giá trị của ngày nào?",
		"a": "Ngày thứ hai, vì đó là dòng liền trước trong bảng, không phải hôm qua theo lịch."
	},
	"sql-nwin": {
		"s": "Thẻ này nói về việc đặt tên cho cửa sổ, và điều đáng biết là tên chỉ là tên, ý nghĩa phép tính không đổi. Hãy tưởng tượng bạn có một tổng chạy và một hàm LAG, cả hai cùng chia theo kênh và sắp theo ngày. Thay vì viết lại đoạn mô tả cửa sổ hai lần, bạn đặt tên cho nó một lần rồi gọi tên ở cả hai hàm. Câu ngắn gọn hơn, dễ đọc hơn. Nhưng tên không tạo ra một bảng trung gian nào để bạn nhìn thấy. Nó chỉ là bí danh của một đặc tả cửa sổ. Đổi tên thì kết quả không đổi. Cũng cần cẩn thận: hai tên khác nhau là hai đặc tả khác nhau, dù mắt bạn thấy chúng giống nhau. Nếu bạn đổi khung ở một hàm, hàm kia không tự đổi theo, trừ khi nó dùng đúng cái tên đó. Và nếu không ghi đè, khung mặc định vẫn là mặc định của từng hàm. Điều cần nhớ: tên cửa sổ không phải một phép tính mới.",
		"q": "Đổi tên một cửa sổ có làm kết quả thay đổi không?",
		"a": "Không. Tên chỉ là bí danh của đặc tả cửa sổ, ý nghĩa phép tính vẫn như cũ."
	},
	"sql-case": {
		"s": "Thẻ này nói về CASE, một luật nếu thì viết ngay trong câu truy vấn. Ví dụ bạn chia bậc chi tiêu: dưới năm triệu đồng là thấp, từ năm đến dưới hai mươi triệu là vừa, còn lại là cao. Nếu viết luật này trong câu truy vấn, tháng sau chạy lại vẫn cùng bậc. Nếu để trong một file xuất tay, mỗi người sẽ tự đặt một ngưỡng riêng. Cách CASE chạy là đi từ trên xuống và lấy nhánh đúng đầu tiên, nên thứ tự các nhánh làm đổi kết quả. Khách chi mười hai triệu không thuộc nhóm dưới năm triệu, nhưng thuộc nhóm dưới hai mươi triệu, nên nhận nhãn vừa. Ô trống không bằng bất kỳ số nào, vì vậy cần một nhánh riêng cho nó. Và luật đặt trong truy vấn thì nằm cùng dữ liệu, còn luật trong bảng tính xuất ra sẽ mất khi người khác tải lại. Điều cần nhớ: một luật không viết ra sẽ được mỗi người nhớ một kiểu.",
		"q": "Khách chi mười hai triệu đồng sẽ mang nhãn nào theo luật trong thẻ?",
		"a": "Nhãn vừa, vì không dưới năm triệu nhưng dưới hai mươi triệu."
	},
	"sql-proc": {
		"s": "Thẻ này nói về thủ tục lưu sẵn, tức là một kịch bản đã lưu có thể làm việc ngoài phạm vi một câu truy vấn. Đáng biết vì giấu một kịch bản vào trong không làm con số đúng hơn. Ví dụ, một thủ tục chốt tuần vừa đọc dữ liệu, vừa ghi thêm vào bảng đã chốt. Hoặc một hàm tính thuế mà bên trong lại quét bảng giá, thì chi phí đó không hiện ra trên câu truy vấn bên ngoài. Một hàm tốt nên thuần: cùng đầu vào cho cùng đầu ra và không ghi dữ liệu. Hàm mà có ghi bảng thực chất là một thủ tục đội tên hàm. Quyền chạy một thủ tục cũng không cho người gọi thấy mọi bảng bên trong, điều này có thể là mong muốn, nhưng cũng khiến một số lỗi khó tìm. Và quy tắc thuế của năm nay không nên nằm trong thủ tục không ai chịu trách nhiệm. Điều cần nhớ: giấu kịch bản đi không làm con số đúng hơn.",
		"q": "Một hàm có ghi dữ liệu vào bảng thực chất là gì?",
		"a": "Là một thủ tục đội tên hàm, vì hàm tốt phải thuần và không ghi dữ liệu."
	},
	"sql-cur": {
		"s": "Thẻ này nói về con trỏ, cách xử lý từng dòng một, đối lập với một câu truy vấn xử lý cả tập hợp. Đáng biết vì đi từng dòng nghe có vẻ cẩn thận, nhưng nó không làm kết quả đúng hơn. Hãy nghĩ đến hai việc. Gửi email cho từng khách đủ điều kiện có thể cần đi từng dòng, vì gửi email là một tác động ra bên ngoài. Còn cộng tổng số form thì không cần, đó chỉ là một câu gom nhóm. Về chi phí, cộng form của một nghìn dòng bằng một câu là một lần quét. Bằng con trỏ là một nghìn lần lấy dòng. Con trỏ còn giữ trạng thái: mở, lấy dòng, hết dữ liệu, đóng. Khi viết theo tập hợp, hệ thống tự chọn cách đọc hiệu quả; con trỏ thì không cho hệ thống làm vậy, nó thực chất là một vòng lặp lập trình ngồi trên SQL. Điều cần nhớ: đi từng dòng không làm phép cộng đúng hơn.",
		"q": "Khi nào nên cân nhắc dùng con trỏ?",
		"a": "Khi bước tiếp theo là một tác động ra bên ngoài cần làm từng dòng, như gửi email, và bạn chấp nhận chậm."
	},
	"sql-cte": {
		"s": "Thẻ này nói về CTE và view, hai cách đặt tên cho một câu con. Đáng biết vì tên giúp người đọc, nhưng nó không đóng băng các con số. CTE, viết tắt của common table expression, tức biểu thức bảng chung, đặt tên cho một câu con ngay trong câu lệnh, bằng từ WITH. Ví dụ câu tuần lễ được đặt tên, rồi câu ngoài chỉ gọi tên đó. Tùy phiên bản, máy có thể gộp câu đó vào câu ngoài và chạy một hoặc nhiều lần, nên đừng dựa vào việc nó chạy đúng một lần. View thì lưu câu hỏi lại để gọi sau. Mỗi lần đọc từ view là chạy lại câu hỏi, trừ khi đó là view vật hóa được khai rõ. Nên nếu bảng gốc có mười nghìn dòng hôm nay và mười nghìn năm trăm dòng ngày mai, cùng một view sẽ trả về mười nghìn năm trăm dòng ngày mai. Điều cần nhớ: tên giúp người đọc, nhưng nó không đóng băng các con số.",
		"q": "Bảng gốc tăng từ mười nghìn lên mười nghìn năm trăm dòng. View thường trả về bao nhiêu dòng vào ngày mai?",
		"a": "Mười nghìn năm trăm dòng, vì view chỉ là câu hỏi được lưu và chạy lại mỗi lần đọc."
	},
	"sql-idx": {
		"s": "Thẻ này nói về chỉ mục, tức là mục lục của bảng. Đáng biết vì nó làm truy vấn nhanh hơn, nhưng không làm truy vấn đúng hơn. Hãy tưởng tượng bạn lọc theo mã chiến dịch trên một bảng có hàng triệu dòng. Nếu có chỉ mục trên cột đó, máy khỏi phải lật cả bảng. Tìm một mã trong một triệu dòng, quét cả bảng phải đọc một triệu dòng, còn chỉ mục dạng cây chỉ cần khoảng hai mươi bước. Nhưng chỉ mục không sửa logic. Nó không sửa một phép nối đang nhân dòng, và không thay một điều kiện lọc đúng. Một hàm bọc lên cột, ví dụ lấy năm của ngày, có thể khiến chỉ mục trên cột ngày không được dùng. Chỉ mục cũng làm việc thêm và cập nhật dữ liệu nặng hơn. Vì vậy hãy xem kế hoạch chạy để biết máy có thật sự dùng chỉ mục, hay vẫn quét cả bảng. Điều cần nhớ: nhanh hơn không có nghĩa là đúng hơn.",
		"q": "Tìm một mã trong một triệu dòng, chỉ mục dạng cây cần khoảng bao nhiêu bước?",
		"a": "Khoảng hai mươi bước, thay vì đọc cả một triệu dòng."
	},
	"ml-what": {
		"s": "Thẻ này nói về học có giám sát, tức là học từ những dòng đã có đáp án để dự đoán đáp án cho dòng chưa có. Đáng biết vì đây là nền của gần như mọi mô hình dự đoán bạn sẽ gặp. Ví dụ bạn có số liệu các tuần trước, gồm chi tiêu quảng cáo và số form. Hoặc một danh sách khách spa, mỗi người được ghi là ở lại hay đã rời đi. Đến tuần mới, hay một khách mới, bạn chưa có đáp án và cần dự đoán. Các cột đã biết gọi là đặc trưng, tiếng Anh là feature. Cột đáp án gọi là biến mục tiêu, tiếng Anh là target. Huấn luyện là chỉnh quy tắc dự đoán trên các dòng đã có mục tiêu. Cũng cần nhớ quy tắc này không phải là nguyên nhân, nó chỉ tóm tắt những dòng đã dùng để huấn luyện. Điều cần nhớ: cần gọi tên cột đáp án trước, rồi mới chọn mô hình.",
		"q": "Trong học có giám sát, cột đáp án được gọi là gì?",
		"a": "Là biến mục tiêu, tiếng Anh là target."
	},
	"slr-line": {
		"s": "Thẻ này nói về hồi quy tuyến tính đơn, tức là vẽ một đường thẳng nối một cột đầu vào với đáp án. Đáng biết vì đây là mô hình dự đoán đơn giản nhất và là nền cho các mô hình phức tạp hơn. Giả sử số form dự đoán bằng hai mươi cộng sáu lần chi tiêu, với chi tiêu tính bằng triệu đồng. Khách chi mười triệu thì đường này dự đoán hai mươi cộng sáu mươi, tức tám mươi form. Số hai mươi là hệ số chặn, cho biết dự đoán khi chi tiêu bằng không. Số sáu là độ dốc, cho biết mỗi triệu chi thêm làm dự đoán tăng bao nhiêu. Tuần thật còn có thêm một phần sai lệch, là phần đường chưa giải thích được. Nhưng đường này không chứng minh rằng tăng ngân sách sẽ cho đúng bấy nhiêu form. Điều cần nhớ: đường thẳng là bản tóm tắt dữ liệu, không phải lời hứa cho một tuần cụ thể.",
		"q": "Với đường hai mươi cộng sáu lần chi tiêu, chi mười triệu dự đoán bao nhiêu form?",
		"a": "Tám mươi form."
	},
	"slr-r2": {
		"s": "Thẻ này nói về R bình phương, một con số cho biết đường thẳng giải thích được bao nhiêu phần biến động của đáp án. Giả sử R bình phương bằng không phẩy bảy. Nghĩa là đường giải thích được bảy mươi phần trăm phương sai của số form. Nhưng một tuần cụ thể vẫn có thể lệch nhiều form so với đường. Lấy tổng bình phương phần dư của đường, chia cho tổng bình phương khoảng cách từ mỗi tuần tới trung bình, rồi lấy một trừ đi kết quả. Ví dụ tổng khoảng cách tới trung bình là một nghìn, tổng phần dư là ba trăm, thì R bình phương là một trừ không phẩy ba, bằng không phẩy bảy. Điều dễ nhầm là R bình phương không có nghĩa bảy mươi phần trăm số tuần nằm trên đường. Điều cần nhớ: R bình phương là tỷ lệ phương sai được giải thích, còn phần dư tính bằng form mới cho biết một tuần có thể lệch bao xa.",
		"q": "R bình phương bằng không phẩy bảy có nghĩa bảy mươi phần trăm số tuần nằm trên đường không?",
		"a": "Không. Nó nghĩa là đường giải thích bảy mươi phần trăm phương sai của số form."
	},
	"slr-assume": {
		"s": "Thẻ này nói về các giả định của hồi quy tuyến tính. Đáng biết vì nếu bạn chỉ vẽ đường thì không cần lo nhiều, nhưng nếu muốn suy luận về độ dốc thì các giả định phải đúng. Một là quan hệ giữa cột đầu vào và đáp án là đường thẳng. Hai là các phần dư độc lập với nhau. Ba là phần dư có độ rộng gần như đều ở mọi mức chi tiêu. Bốn là phần dư có hình chuông nếu bạn dùng sai số chuẩn thông thường. Giả sử các tuần chi mạnh có phần dư lớn hơn các tuần chi ít. Khi đó dải phần dư mở ra như hình cái kèn, và một độ dốc duy nhất là bản tóm tắt kém cho cả hai loại tuần. Khi một giả định bị vi phạm, đường vẫn có thể là bản tóm tắt hữu ích. Thứ không nên tin nữa là giá trị p, tiếng Anh là p-value. Điều cần nhớ: cần nhìn phần dư trước khi đọc kết quả kiểm định.",
		"q": "Nếu dải phần dư mở ra như hình cái kèn, thứ gì không còn đáng tin?",
		"a": "Giá trị p, vì giả định về độ rộng đều của phần dư bị vi phạm."
	},
	"slr-fit": {
		"s": "Thẻ này nói về phương pháp bình phương tối thiểu, cách chọn ra đường thẳng khớp nhất với dữ liệu. Đáng biết vì chữ khớp nhất ở đây có một định nghĩa cụ thể. Ý tưởng là chọn hệ số chặn và độ dốc sao cho tổng bình phương phần dư nhỏ nhất. Hãy xem một tuần có chín mươi form thật, trong khi đường dự đoán tám mươi. Phần dư là mười form, bình phương lên được một trăm. Với ba tuần có phần dư cộng mười, trừ bốn và cộng hai, tổng bình phương là một trăm cộng mười sáu cộng bốn, bằng một trăm hai mươi. Bình phương khiến một lần trượt lớn bị phạt nặng hơn nhiều lần trượt nhỏ. Với một cột đầu vào, đường tốt nhất có công thức sẵn, nhưng bạn không cần thuộc nó để đọc đường. Điều cần nhớ: đường khớp nhất nghĩa là tổng bình phương phần dư nhỏ nhất, không có nghĩa mọi tuần nằm trên đường.",
		"q": "Ba tuần có phần dư cộng mười, trừ bốn, cộng hai. Tổng bình phương phần dư là bao nhiêu?",
		"a": "Một trăm hai mươi, tức một trăm cộng mười sáu cộng bốn."
	},
	"slr-resid": {
		"s": "Thẻ này nói về phân tích phần dư, tức là đọc những chỗ đường dự đoán trượt. Đáng biết vì biểu đồ phần dư là nơi các vấn đề của mô hình lộ ra. Phần dư là số thật trừ số trên đường. Ví dụ đường dự đoán tám mươi form, tuần thật có chín mươi, thì phần dư là cộng mười. Giờ nghĩ xem nếu mọi tuần có khuyến mãi đều có phần dư dương. Điều đó cho thấy đường đang thiếu yếu tố khuyến mãi, và bạn chỉ nhận ra khi nhìn phần dư. Một điểm cần cẩn thận: khi đường có hệ số chặn, tổng các phần dư gần bằng không. Cho nên bạn không thể yên tâm chỉ vì phần dư trung bình bằng không. Dự đoán cho một tuần mới là con số trên đường, còn cỡ phần dư cho biết đường đã trượt bao xa ở những tuần tương tự. Điều cần nhớ: một độ dốc không kèm biểu đồ phần dư là một kết luận chưa được kiểm tra.",
		"q": "Đường dự đoán tám mươi form, tuần thật có chín mươi. Phần dư là bao nhiêu?",
		"a": "Cộng mười form, vì lấy số thật trừ số dự đoán."
	},
	"slr-test": {
		"s": "Thẻ này nói về kiểm định độ dốc, một cách hỏi xem độ dốc bạn thấy là tín hiệu thật hay chỉ là nhiễu của mẫu. Câu hỏi chính xác là thế này: nếu độ dốc thật bằng không, thì một độ dốc lệch xa như vậy có hiếm gặp không? Ví dụ đường hồi quy cho độ dốc sáu form mỗi triệu đồng, với sai số chuẩn là hai. Thống kê t bằng độ dốc chia cho sai số chuẩn, tức sáu chia hai, bằng ba. Với mẫu vừa phải, giá trị p khoảng không phẩy không không ba. Hai điều dễ nhầm. Giá trị p không phải xác suất giả thuyết không đúng. Và mẫu rất lớn có thể làm một độ dốc cực nhỏ thành có ý nghĩa thống kê mà vẫn vô dụng. Điều cần nhớ: giá trị p cho biết mẫu này hiếm đến mức nào nếu độ dốc bằng không, chứ không phải xác suất độ dốc của bạn đúng.",
		"q": "Độ dốc sáu, sai số chuẩn hai. Thống kê t bằng bao nhiêu?",
		"a": "Bằng ba, vì lấy độ dốc chia cho sai số chuẩn."
	},
	"gd-cost": {
		"s": "Thẻ này nói về hàm chi phí, thước đo mức tệ của bộ hệ số hiện tại. Với một đường thẳng, chi phí là tổng bình phương các phần dư. Ví dụ hai tuần: đường dự đoán tám mươi và bảy mươi, số thật là chín mươi và sáu mươi lăm. Chênh lệch là mười và năm, bình phương lên một trăm và hai mươi lăm, chi phí là một trăm hai mươi lăm. Khi chi tiêu, email và khuyến mãi cùng nằm trong một phương trình, bạn không chọn từng độ dốc bằng tay. Máy tính đi xuống dốc của hàm chi phí để tìm bộ hệ số tốt. Với hồi quy tuyến tính, hàm chi phí có hình một cái bát với đúng một đáy. Đáy là nơi độ dốc bằng không, cũng là nơi phương pháp bình phương tối thiểu chọn. Chi phí khác thì cho đáy khác. Điều cần nhớ: mô hình được dẫn đến đáy của hàm chi phí mà bạn đã chọn, chứ không được dạy một cách trừu tượng.",
		"q": "Đường dự đoán tám mươi và bảy mươi, số thật chín mươi và sáu mươi lăm. Chi phí là bao nhiêu?",
		"a": "Một trăm hai mươi lăm, tức một trăm cộng hai mươi lăm."
	},
	"gd-step": {
		"s": "Thẻ này nói về gradient descent, hay hạ gradient, cách máy tìm đáy của hàm chi phí bằng những bước nhỏ. Quy tắc là lấy hệ số trừ đi một phần của độ dốc, rồi lặp lại. Xét một hệ số có chi phí bằng bình phương của hiệu giữa nó và hai phẩy hai. Đáy nằm ở hai phẩy hai. Khi bạn đứng bên trái đáy, độ dốc âm, nên trừ đi độ dốc sẽ đưa hệ số sang phải. Bắt đầu từ không, độ dốc là âm bốn phẩy bốn, bước nhỏ là không phẩy một. Bước một đưa hệ số lên không phẩy bốn bốn. Bước hai, độ dốc là âm ba phẩy năm hai, hệ số lên không phẩy bảy chín hai. Lưu ý rằng trên cái bát bình phương sai số chỉ có một đáy, còn chi phí gồ ghề có thể có nhiều thung lũng. Điều cần nhớ: phép cập nhật là bước ngược chiều độ dốc, và đó là toàn bộ ý tưởng.",
		"q": "Nếu đứng bên trái đáy, độ dốc âm, thì hệ số sẽ di chuyển về phía nào sau mỗi bước?",
		"a": "Về bên phải, tiến gần đáy, vì ta trừ đi độ dốc âm."
	},
	"gd-rate": {
		"s": "Thẻ này nói về learning rate, hay tốc độ học, tức là độ dài của mỗi bước khi hạ xuống đáy. Đáng biết vì chọn sai thì mô hình hoặc bò rất chậm, hoặc văng ra xa. Hãy dùng lại cái bát của bài trước, đáy ở hai phẩy hai, bắt đầu từ không, độ dốc là âm bốn phẩy bốn. Với bước một phẩy hai, hệ số mới là năm phẩy hai tám. Khoảng cách tới đáy giờ là ba phẩy không tám, lớn hơn khoảng cách ban đầu là hai phẩy hai. Bước đã vọt quá đà, chi phí tăng thay vì giảm, và quá trình đang phân kỳ. Với bước không phẩy một, hệ số mới là không phẩy bốn bốn, gần đáy hơn. Bước quá nhỏ thì chậm, quá lớn thì vọt qua đáy. Nhưng giảm tốc độ học chỉ sửa được tốc độ, không sửa được hàm chi phí sai hay một cột dữ liệu hỏng. Điều cần nhớ: khi quá trình huấn luyện văng ra xa, hãy kiểm tra độ dài bước trước.",
		"q": "Khi huấn luyện văng ra xa đáy, bạn nên kiểm tra điều gì trước?",
		"a": "Độ dài bước, tức learning rate, có đang quá lớn không."
	},
	"mlr-why": {
		"s": "Thẻ này nói về hồi quy tuyến tính bội, tức là đưa nhiều cột đầu vào vào cùng một phương trình. Số form phụ thuộc chi tiêu, một đợt email và một chương trình khuyến mãi. Vào tháng lễ, cả ba cùng tăng, nên chỉ nhìn chi tiêu sẽ cho kết luận lệch. Mỗi độ dốc là mức thay đổi của dự đoán khi cột đó tăng một đơn vị và các cột khác trong phương trình giữ nguyên. Ví dụ dự đoán bằng mười, cộng năm lần chi tiêu, cộng tám lần email, cộng mười hai lần khuyến mãi. Với chi tiêu mười, email hai, khuyến mãi một, ta được mười cộng năm mươi cộng mười sáu cộng mười hai, bằng tám mươi tám form. Nhưng nếu ngoài đời các cột đó không thể giữ nguyên, thì độ dốc không phải một nút bạn có thể bấm. Điều cần nhớ: chỉ thêm cột khi nó là một yếu tố tác động khác, không thêm chỉ vì muốn R bình phương đẹp hơn.",
		"q": "Với chi tiêu mười, email hai, khuyến mãi một, phương trình trong thẻ dự đoán bao nhiêu form?",
		"a": "Tám mươi tám form."
	},
	"mlr-coef": {
		"s": "Thẻ này nói về cách đọc hệ số trong hồi quy bội. Một hệ số là độ dốc của cột đó khi các cột khác trong mô hình được giữ nguyên. Hệ số của chi tiêu là sáu form cho mỗi triệu đồng chi thêm, nếu số email và khuyến mãi không đổi. Nghĩa là chi thêm hai triệu làm dự đoán tăng sáu nhân hai, tức mười hai form. Nhưng trong thực tế, các tuần hay có chi tiêu, email và khuyến mãi đi cùng nhau, nên bạn không vặn riêng được từng núm. Hệ số là hiệu ứng riêng trong phương trình, không phải hiệu ứng nhân quả. Có một kỹ thuật là chuẩn hóa, đưa các cột về cùng thang đo để so độ lớn các hệ số với nhau. Điều cần nhớ: hệ số không phải nút điều chỉnh ngân sách, trừ khi các cột còn lại thật sự giữ yên được.",
		"q": "Hệ số chi tiêu là sáu. Chi thêm hai triệu, dự đoán tăng bao nhiêu form, nếu các cột khác không đổi?",
		"a": "Tăng mười hai form."
	},
	"mlr-vif": {
		"s": "Thẻ này nói về đa cộng tuyến, tình huống các cột đầu vào dự đoán được lẫn nhau. Ví dụ chi tiêu và khuyến mãi cùng tăng vào các tuần lễ. Phương trình có thể cho khuyến mãi một độ dốc âm. Người ta đo hiện tượng này bằng hệ số lạm phát phương sai, tiếng Anh là VIF. Cách tính là lấy hồi quy của cột đó theo các cột còn lại, được một R bình phương. Nếu R bình phương bằng không phẩy tám thì VIF bằng một chia cho không phẩy hai, tức năm. Người ta thường xem xét kỹ khi VIF từ năm hoặc từ mười, nhưng đó là mốc kinh nghiệm, không phải quy luật. Dự đoán của mô hình vẫn có thể ổn, nhưng từng độ dốc riêng thì không đáng tin. Điều cần nhớ: khi hai cột đi như một, không nên trình bày độ dốc nào của chúng như một cần gạt riêng.",
		"q": "Nếu R bình phương của một cột theo các cột còn lại là không phẩy tám, VIF bằng bao nhiêu?",
		"a": "Bằng năm, vì một chia cho một trừ không phẩy tám."
	},
	"mlr-dummy": {
		"s": "Thẻ này nói về biến giả, cách đổi một hạng mục thành các cột chỉ có số không và số một. Giả sử có ba kênh: GDN, Facebook và TikTok. Khi mô hình có hệ số chặn, bạn bỏ đi một kênh làm mốc, ví dụ TikTok. Cột GDN bằng một nếu lượt đến từ GDN, bằng không nếu không phải. Cột Facebook làm tương tự. Khi đó hệ số của GDN là mức chênh so với TikTok, không phải so với không có kênh nào. Nếu hệ số GDN là cộng bốn form, thì GDN cao hơn TikTok khoảng bốn form khi các cột khác giữ nguyên. Nếu giữ cả ba kênh cùng hệ số chặn, bạn rơi vào bẫy biến giả: ba cột cộng lại luôn bằng một nên độ dốc không còn duy nhất. Nếu không có hệ số chặn thì có thể giữ cả ba, và mỗi hệ số là mức của chính kênh đó. Điều cần nhớ: hệ số của một kênh là mức chênh so với mốc mà bạn đã bỏ.",
		"q": "Khi bỏ TikTok làm mốc và hệ số GDN là cộng bốn form, điều đó nghĩa là gì?",
		"a": "GDN cao hơn TikTok khoảng bốn form khi các cột khác giữ nguyên."
	},
	"mlr-select": {
		"s": "Thẻ này nói về chọn đặc trưng, tức là quyết định giữ cột nào. Đáng biết vì thêm cột không miễn phí. R bình phương không bao giờ giảm khi thêm cột, nên nó dễ đánh lừa. R bình phương hiệu chỉnh thì có thể giảm, vì nó phạt việc thêm cột. Ví dụ với ba mươi tuần, mô hình A có ba cột, R bình phương không phẩy bảy, R bình phương hiệu chỉnh khoảng không phẩy sáu sáu năm. Mô hình B thêm một cột nhiễu, R bình phương nhích lên không phẩy bảy không hai, nhưng R bình phương hiệu chỉnh tụt còn khoảng không phẩy sáu năm bốn, thấp hơn. Ví dụ cột tên thứ trong tuần đẩy R bình phương lên chút ít nhưng không đổi kênh bạn sẽ rót tiền, thì nên bỏ. Giá trị p nhỏ cũng không phải lý do giữ một cột mà bạn không hành động được. Điều cần nhớ: dừng thêm cột khi câu chuyện đã tách bạch, không dừng khi R bình phương trông đẹp.",
		"q": "Thêm một cột nhiễu thì R bình phương và R bình phương hiệu chỉnh thay đổi thế nào?",
		"a": "R bình phương nhích lên, còn R bình phương hiệu chỉnh có thể giảm."
	},
	"pred-proj": {
		"s": "Thẻ này nói về hai việc hay bị gộp làm một: dự đoán và ngoại suy. Đáng biết vì tuần tới cùng kiểu với tuần đã học khác hẳn chuyện gấp đôi ngân sách. Giả sử đường học trên các tuần chi từ hai đến mười hai triệu đồng, số form bằng ba cộng hai phẩy năm lần chi tiêu. Đoán tuần chi tám triệu ra hai mươi ba form là một dự đoán, vì nằm trong vùng đã thấy. Đọc đường tại bốn mươi triệu ra một trăm lẻ ba form thì là một giả định, vì đường không hứa đúng ở đó. Khoảng dự đoán cho một dòng mới rộng hơn khoảng tin cậy của đường trung bình, vì còn thêm nhiễu của chính dòng đó. Nhưng ngoại suy thì khoảng này cũng không bảo vệ được bạn. Đường thẳng tiếp tục đi lên chỉ vì bạn bắt nó thẳng, chứ không phải vì số form thật sẽ tiếp tục thẳng. Điều cần nhớ: cùng một đường nhưng khác câu hỏi thì mức được phép tin cũng khác.",
		"q": "Đường học trên chi từ hai đến mười hai triệu. Đọc đường tại bốn mươi triệu là dự đoán hay giả định?",
		"a": "Là giả định, vì đó là ngoại suy ra ngoài vùng dữ liệu đã thấy."
	},
	"logit-why": {
		"s": "Thẻ này nói về lý do hồi quy tuyến tính không hợp với câu hỏi có hoặc không, và đáng biết vì nó giải thích vì sao ta cần một mô hình khác. Hãy tưởng tượng một spa có mười nghìn khách, trong đó khoảng tám phần trăm không quay lại trong chín mươi ngày. Bạn ghi mỗi khách là không hoặc một, rồi kẻ một đường thẳng qua các điểm đó. Đường thẳng thì cứ đi mãi, lên cao hoặc xuống thấp, không có giới hạn. Nên với một số khách, nó sẽ cho điểm âm không phẩy một, hoặc một phẩy hai. Mà xác suất thì chỉ nằm từ không đến một. Hai con số kia không thể là xác suất. Chưa hết, khi khớp đường thẳng lên cột không và một, phần dư còn xòe rộng theo giá trị dự đoán, nên sai số chuẩn thông thường không còn đúng nữa. Vậy điều cần nhớ là: đáp án có hoặc không không phải một đường thẳng, và đầu ra phải nằm giữa không và một.",
		"q": "Vì sao một đường thẳng khớp lên cột không và một lại có vấn đề với xác suất?",
		"a": "Vì đường thẳng không có biên nên có thể cho giá trị âm hoặc lớn hơn một, trong khi xác suất phải nằm giữa không và một."
	},
	"logit-sig": {
		"s": "Thẻ này nói về hồi quy logistic, cách biến một điểm số thành xác suất, và đáng biết vì đây là công cụ nền tảng để dự đoán một việc có xảy ra hay không. Mô hình lấy một điểm tuyến tính, rồi đưa qua một đường cong hình chữ S gọi là hàm sigmoid để ra xác suất. Ví dụ, giả sử điểm bằng âm hai phẩy hai, cộng không phẩy không bốn nhân với số ngày kể từ lần ghé gần nhất. Một khách đã bốn mươi ngày chưa ghé thì có điểm là âm không phẩy sáu. Đưa qua đường cong chữ S, bạn được xác suất khách này không quay lại khoảng ba mươi lăm phần trăm. Đường cong này dốc nhất quanh mức năm mươi phần trăm và bẹt ở hai đầu, nên cùng một thay đổi của điểm sẽ làm xác suất đổi nhiều ở giữa hơn ở hai đuôi. Điều cần nhớ: mô hình cho một xác suất, chưa phải một quyết định.",
		"q": "Mô hình logistic cho ra thứ gì, một xác suất hay một quyết định?",
		"a": "Nó cho một xác suất. Quyết định gọi hay không gọi là bước bạn phải làm thêm."
	},
	"logit-odds": {
		"s": "Thẻ này nói về cách đọc hệ số của hồi quy logistic, và đáng biết vì rất nhiều người đọc nhầm nó như mức tăng xác suất. Hệ số ở đây tác động lên odds, tức tỷ lệ giữa khả năng xảy ra và không xảy ra. Ví dụ, độ dốc là không phẩy không bốn cho mỗi ngày chưa ghé. Mỗi ngày thêm, odds rời đi được nhân với khoảng một phẩy không bốn, tức tăng tương đối chừng bốn phần trăm. Ở ngày thứ bốn mươi, xác suất rời khoảng ba mươi lăm phẩy bốn phần trăm. Sang ngày thứ bốn mươi mốt, xác suất lên khoảng ba mươi sáu phẩy bốn phần trăm. Như vậy odds tăng bốn phần trăm, nhưng xác suất chỉ tăng chừng chín phần mười điểm phần trăm. Lượng xác suất đổi còn phụ thuộc bạn đang đứng ở đâu trên đường cong. Điều cần nhớ: độ dốc logistic nhân odds, nó không cộng xác suất.",
		"q": "Khi số ngày chưa ghé tăng thêm một, hệ số logistic tác động lên đại lượng nào?",
		"a": "Nó nhân odds lên một lần, chứ không cộng thêm vào xác suất."
	},
	"logit-many": {
		"s": "Thẻ này nói về hồi quy logistic bội, tức dùng nhiều cột cùng lúc, và đáng biết vì thực tế hiếm khi chỉ có một yếu tố. Bạn vẫn dùng cùng một đường chữ S, chỉ khác là điểm số được ghép từ nhiều cột. Ví dụ ba cột: số ngày kể từ lần ghé, số lần ghé trong năm, và khách có mua gói hay không. Mỗi cột có một độ dốc riêng. Với một khách bốn mươi ngày chưa ghé, bốn lần ghé trong năm và có mua gói, điểm cộng lại ra âm hai phẩy sáu. Đưa qua đường cong, xác suất rời chỉ khoảng bảy phần trăm. Các quy tắc cũ vẫn áp dụng. Hai cột đi cùng nhau làm hệ số kém ổn định, và biến giả vẫn đọc so với mốc đã bỏ. Điều cần nhớ: thêm cột không làm đổi cách đọc, mỗi hệ số vẫn tính khi các cột còn lại giữ nguyên.",
		"q": "Khi có nhiều cột, mỗi hệ số logistic được đọc trong điều kiện nào?",
		"a": "Được đọc khi các cột còn lại giữ nguyên, và nó vẫn là hệ số nhân của odds."
	},
	"logit-spec": {
		"s": "Thẻ này nói về độ nhạy và độ đặc hiệu, hai thước đo cho biết mô hình bắt đúng người rời và để yên đúng người ở. Chúng đáng biết vì accuracy, hay độ chính xác tổng, rất dễ đánh lừa. Hãy hình dung có hai mươi người rời và tám mươi người ở lại. Bạn gọi trúng mười lăm người rời, bỏ sót năm. Bạn cũng gọi nhầm tám người ở lại. Độ nhạy là phần người rời mà bạn bắt được, tức mười lăm trên hai mươi, bằng bảy mươi lăm phần trăm. Độ đặc hiệu là phần người ở lại mà bạn để yên, tức bảy mươi hai trên tám mươi, bằng chín mươi phần trăm. Hai số này không cộng lại thành một. Còn accuracy trộn mọi thứ theo kích thước nhóm, nên nhóm đông át nhóm hiếm. Điều cần nhớ: gọi tất cả mọi người thì bắt hết người rời, nhưng độ đặc hiệu khi đó bằng không.",
		"q": "Độ nhạy cho biết điều gì?",
		"a": "Cho biết bạn bắt được bao nhiêu phần trong số những người thật sự rời đi."
	},
	"logit-cm": {
		"s": "Thẻ này nói về ma trận nhầm lẫn, bảng bốn ô cho biết mô hình đúng và sai theo những cách nào, và đáng biết vì một con số accuracy không đủ để kết luận. Hãy xét hai trăm khách. Có ba mươi cuộc gọi đúng người rời, mười cuộc gọi nhầm, hai mươi người rời bị bỏ sót, và một trăm bốn mươi người ở lại được bỏ qua đúng. Accuracy là cộng các ô đúng, ba mươi với một trăm bốn mươi, được một trăm bảy mươi, chia cho hai trăm, ra tám mươi lăm phần trăm. Nghe thì ổn, nhưng hãy thử một tình huống khác. Nếu chỉ tám phần trăm khách rời và bạn không gọi ai cả, accuracy vẫn là chín mươi hai phần trăm, mà bạn không bắt được một người nào. Điều cần nhớ: accuracy có thể cao trong khi bạn bỏ sót đúng những người cần gọi.",
		"q": "Vì sao accuracy cao vẫn có thể là một mô hình vô dụng?",
		"a": "Vì nếu người rời hiếm, không gọi ai vẫn có accuracy cao, trong khi bạn bỏ sót toàn bộ người cần gọi."
	},
	"logit-pr": {
		"s": "Thẻ này nói về precision và recall, hai cách đo chất lượng danh sách gọi, và đáng biết vì chúng kéo nhau theo hai hướng. Precision, hay độ chính xác, cho biết danh sách gọi sạch đến đâu. Recall, hay độ phủ, cho biết bạn bắt được bao nhiêu phần người thật sự rời. Hãy dùng ví dụ hai trăm khách. Bạn gọi bốn mươi người và ba mươi người trong đó đúng là người rời. Precision là ba mươi trên bốn mươi, bằng bảy mươi lăm phần trăm. Có tất cả năm mươi người thật sự rời, nên recall là ba mươi trên năm mươi, bằng sáu mươi phần trăm. Recall còn gọi là độ nhạy. Khi bạn hạ ngưỡng, bạn gọi thêm nhiều người, nên recall thường tăng còn precision thường giảm. Không có ngưỡng nào thắng mọi chỉ số. Điều cần nhớ: hạ ngưỡng thì bắt được nhiều hơn nhưng làm phiền nhiều hơn, đó là sự đánh đổi.",
		"q": "Khi hạ ngưỡng gọi xuống thấp hơn, recall và precision thường đổi thế nào?",
		"a": "Recall thường tăng, còn precision thường giảm, vì bạn bắt nhiều hơn nhưng gọi nhầm cũng nhiều hơn."
	},
	"logit-roc": {
		"s": "Thẻ này nói về đường ROC, một cách nhìn mô hình qua mọi ngưỡng thay vì chỉ một ngưỡng, và đáng biết vì ngưỡng mặc định thường không phải ngưỡng tốt. Bạn kéo ngưỡng từ cao xuống thấp, và với mỗi ngưỡng, ghi lại hai con số. Một là tỷ lệ bắt đúng, tức recall. Hai là tỷ lệ báo động giả, tức phần người ở lại bị gọi nhầm. Với ví dụ hai trăm khách, recall là sáu mươi phần trăm, còn tỷ lệ báo động giả là mười trên một trăm năm mươi, khoảng sáu phẩy bảy phần trăm. Mỗi ngưỡng là một chấm trên đường. Diện tích dưới đường, gọi là AUC, gần nửa nghĩa là mô hình xếp hạng không hơn tung đồng xu. Nhưng AUC không chọn ngưỡng hộ bạn. Bạn chọn dựa trên chi phí của một lần bỏ sót và một lần báo động giả. Điều cần nhớ: ngưỡng không phẩy năm chỉ là một chấm trên đường, và bạn là người chọn chấm.",
		"q": "Ai là người chọn ngưỡng phù hợp trên đường ROC, và dựa vào đâu?",
		"a": "Chính bạn chọn, dựa vào chi phí của một lần bỏ sót và một lần báo động giả, cùng ngân sách gọi."
	},
	"logit-who": {
		"s": "Thẻ này nói về việc mô hình chỉ nói được về nhóm người mà nó đã học, và đáng biết vì đổi nhóm là đổi câu hỏi. Ví dụ, bạn xây mô hình dự đoán ai sẽ để lại form, nhưng chỉ học trên những người đã nghe máy. Rồi bạn gán xác suất ấy cho cả người không nghe máy. Đó là một câu hỏi khác mà mô hình chưa từng được học. Cũng vậy, một file chỉ có khách đã đặt lịch thì không nói được gì về người chưa từng gọi. Hãy xem số liệu: trong file học, ba mươi phần trăm người nghe máy để lại form, nhưng chỉ bốn mươi phần trăm danh sách nghe máy. Nếu người không nghe máy không bao giờ để lại form, tỷ lệ trên cả danh sách chỉ còn khoảng mười hai phần trăm. Đây không phải vấn đề cỡ mẫu, và việc hiệu chỉnh là một bước riêng. Điều cần nhớ: hệ số đẹp trên người nghe máy không phải hệ số của người không nghe máy.",
		"q": "Vì sao xác suất học trên người nghe máy không dùng thẳng cho cả danh sách được?",
		"a": "Vì đó là nhóm khác, nên xác suất trên cả danh sách có thể thấp hơn nhiều, ví dụ chỉ khoảng mười hai phần trăm thay vì ba mươi."
	},
	"logit-drift": {
		"s": "Thẻ này nói về độ ổn định của mô hình theo thời gian, và đáng biết vì một mô hình tốt hôm nay có thể sai vào tháng sau mà không có dấu hiệu nào. Mô hình đứng yên, nhưng dữ liệu thì đổi. Ví dụ, tháng ba kênh GDN chiếm phần lớn form, còn tháng mười hai là TikTok chiếm phần lớn, và tỷ lệ rời bỏ cũng khác. Mô hình có AUC tháng ba là không phẩy tám hai, một con số tốt. Nhưng chấm lại trên tháng mười hai, nó có thể chỉ còn khoảng không phẩy sáu lăm. Có hai kiểu trôi. Một là các cột đầu vào đổi phân phối. Hai là cùng một cột nhưng không còn quan hệ cũ với kết quả. Cả hai làm điểm cũ sai mà file cũ không báo gì. Một lần chấm lại cũng không bảo hiểm cho cả năm. Điều cần nhớ: mô hình không hỏng trong mã nguồn, nó hỏng vì tháng đã đổi.",
		"q": "Vì sao điểm tốt của tháng ba không bảo đảm cho tháng mười hai?",
		"a": "Vì dữ liệu đã đổi, nên bạn phải chấm lại mô hình trên dữ liệu của tháng mới."
	},
	"logit-rest": {
		"s": "Thẻ này nói về phân loại nhiều nhãn bằng cách một-đối-phần-còn-lại, và đáng biết vì hồi quy logistic gốc chỉ trả lời có hoặc không. Cách làm là huấn luyện một mô hình cho mỗi nhãn, rồi so sánh các xác suất. Ví dụ khách spa có ba nhãn: đặt liệu trình, mua sản phẩm, hoặc chỉ xem. Bạn xây ba mô hình. Giả sử chúng cho xác suất lần lượt là năm mươi, ba mươi và bốn mươi phần trăm. Cộng lại ra một trăm hai mươi phần trăm, vì các mô hình độc lập nên xác suất không tự cộng thành một trăm. Nhãn cao nhất là đặt liệu trình. Còn có cách khác gọi là một-đối-một, làm một mô hình cho mỗi cặp nhãn. Dù dùng cách nào, quy tắc vận hành vẫn là một quyết định bạn phải tự viết ra. Điều cần nhớ: nhiều nhãn nghĩa là nhiều đường cong, và bạn vẫn phải viết quy tắc chọn hành động.",
		"q": "Với ba nhãn, cách một-đối-phần-còn-lại cần bao nhiêu mô hình, và các xác suất có cộng thành một không?",
		"a": "Cần ba mô hình, mỗi nhãn một mô hình, và các xác suất không tự cộng thành một."
	},
	"tree-ask": {
		"s": "Thẻ này nói về cây quyết định, một chuỗi câu hỏi đúng hoặc sai, và đáng biết vì đây là mô hình dễ đưa cho đội vận hành nhất. Ở mỗi nút, cây hỏi một câu đúng hoặc sai. Cuối nhánh là một lá, cho một nhãn, hoặc một giá trị trung bình nếu bạn dự đoán một con số. Ví dụ với khách của một trung tâm thương mại, bạn có số lần ghé và chi tiêu mỗi tháng. Một quy tắc như dưới hai lần ghé và dưới năm trăm nghìn đồng rất dễ nói thành lời. Một khách có một lần ghé và chi ba trăm nghìn đồng sẽ đi qua hai câu hỏi và rơi vào lá dễ rời. Cây không cần quan hệ thẳng và tự cắt ở những ngưỡng tự nhiên. Nhưng nó không cho bạn câu thêm một đơn vị thì được thêm bấy nhiêu. Điều cần nhớ: cây là một chồng câu hỏi, và lá là câu trả lời bạn trình bày.",
		"q": "Lá của cây quyết định cho ra thứ gì?",
		"a": "Một nhãn nếu là bài toán phân loại, hoặc một giá trị trung bình nếu là bài toán dự đoán số."
	},
	"tree-line": {
		"s": "Thẻ này so sánh cây quyết định với mô hình tuyến tính, và đáng biết vì chúng nhìn cùng một dữ liệu theo hai cách rất khác. Đường thẳng là một độ dốc trên cả khoảng. Cây là những bậc thang. Ví dụ số form nhảy lên khi chi vượt năm triệu đồng, rồi đứng yên. Đường thẳng cố lấy một độ dốc và trượt cả hai phía. Cây thì cắt một bậc ở năm triệu. Giả sử cây có hai lá, mười hai form và hai mươi tám form. Một tuần chi bốn triệu nhận mười hai, một tuần chi bốn mươi triệu nhận hai mươi tám. Giữa các lá không có đường nối, chỉ có bậc gần nhất. Và ngoài vùng đã thấy, cây không tiếp tục đi lên. Cả hai đều có thể sai nếu quan hệ thật là một vòng cung. Điều cần nhớ: cây không hiểu xu hướng chỉ vì nó khớp các bậc trong mẫu.",
		"q": "Ngoài vùng dữ liệu đã thấy, cây quyết định xử lý thế nào, khác gì đường thẳng?",
		"a": "Cây giữ nguyên giá trị của lá ở mép, không tiếp tục đi lên như đường thẳng."
	},
	"tree-gini": {
		"s": "Thẻ này nói về Gini, thước đo độ lẫn giúp cây chọn câu hỏi, và đáng biết vì nó là toàn bộ cách cây tìm kiếm. Gini cho biết một nút lẫn đến mức nào. Nút thuần một nhãn thì bằng không. Ví dụ một nút có một trăm khách, bốn mươi ở lại và sáu mươi rời đi, độ lẫn là không phẩy bốn tám. Bạn thử một câu hỏi chia nút làm hai. Bên trái có bốn mươi người, ba mươi ở lại, mười rời, độ lẫn khoảng không phẩy ba bảy lăm. Bên phải có sáu mươi người, mười ở lại, năm mươi rời, độ lẫn khoảng không phẩy hai bảy tám. Tính trung bình có trọng số theo số người, được khoảng không phẩy ba mốt bảy, thấp hơn lúc đầu, nên nhát cắt có ích. Điều cần nhớ: cây giữ câu hỏi làm hai phía sạch hơn, và đó là toàn bộ cách nó tìm kiếm.",
		"q": "Một câu hỏi được coi là tốt khi nào theo Gini?",
		"a": "Khi sau khi chia, độ lẫn trung bình của hai phía thấp hơn độ lẫn của nút ban đầu."
	},
	"tree-imp": {
		"s": "Thẻ này nói về độ quan trọng của cột trong cây, và đáng biết vì rất dễ hiểu nhầm thanh cao là cột gây ra kết quả. Độ quan trọng chỉ cho biết cột đó đã làm các nhóm sạch hơn bao nhiêu trong các lần cắt. Nó không phải hiệu ứng của một triệu đồng chi thêm. Ví dụ số lần ghé và số lần xem gần như là một cột viết hai lần. Cây có thể dồn hết điểm cho một trong hai. Giả sử cột lần ghé làm giảm độ lẫn không phẩy mười tám, còn cột lần xem chỉ giảm không phẩy không hai. Thanh lần ghé cao gấp chín lần, chỉ vì cây chọn nó trước. Cột có nhiều giá trị khác nhau cũng có nhiều cơ hội cắt nên dễ cao hơn. Vì vậy câu lần ghé gây ra form là câu biểu đồ này không nói. Điều cần nhớ: thanh cao là cột hữu ích cho các lần cắt này, không phải cột đáng tăng ngân sách.",
		"q": "Thanh độ quan trọng cao của một cột có nghĩa là cột đó gây ra kết quả không?",
		"a": "Không. Nó chỉ cho biết cột đó hữu ích cho các lần cắt, không chứng minh quan hệ nhân quả."
	},
	"tree-deep": {
		"s": "Thẻ này nói về overfitting, hay học thuộc dữ liệu, ở cây quá sâu, và đáng biết vì nó làm mô hình đẹp trên giấy nhưng yếu ngoài đời. Nếu không giới hạn độ sâu, cây có thể chia đến khi mỗi lá chỉ còn một khách. Khi đó nó đúng tuyệt đối trên tệp năm ngoái, kể cả phần nhiễu. Hãy xem số liệu: cây sâu đúng một trăm phần trăm trên một nghìn khách năm ngoái, nhưng chỉ đúng bảy mươi phần trăm trên ba trăm khách tháng này. Cây ngắn thì đúng tám mươi lăm phần trăm rồi tám mươi hai phần trăm, ổn định hơn nhiều. Các phanh thường dùng là độ sâu tối đa, số mẫu tối thiểu để tách, và số mẫu tối thiểu trong một lá. Tỉa cây là cắt bớt nhánh sau khi cây đã mọc sâu. Điều cần nhớ: độ sâu không phải chi tiết kỹ thuật phụ, nó quyết định luật có đọc được và dùng lại được hay không.",
		"q": "Dấu hiệu nào cho thấy một cây đang bị overfitting?",
		"a": "Cây đúng rất cao trên dữ liệu đã học nhưng đúng thấp hơn hẳn trên dữ liệu mới."
	},
	"tree-num": {
		"s": "Thẻ này nói về cây hồi quy, tức cây dùng để đoán một con số, và đáng biết vì cách nó đoán khác hẳn một đường thẳng. Mỗi lá đoán bằng trung bình của các dòng rơi vào lá đó. Nó không dùng hệ số nhân. Ví dụ lá chi dưới năm triệu đồng có trung bình mười hai form, lá còn lại có hai mươi tám form. Một tuần chi bốn triệu được gán mười hai, không phải một số nằm giữa mười hai và hai mươi tám. Một tuần chi bốn mươi triệu vẫn nhận số của lá ở mép. Vì sao trung bình? Với sai số bình phương, trung bình là con số làm tổng sai số trong lá nhỏ nhất. Ví dụ bốn tuần với mười, mười hai, mười hai và mười bốn form có trung bình là mười hai. Cây càng sâu thì lá càng ít dòng và trung bình càng nhảy. Điều cần nhớ: hai lá không tạo thành một đường, chúng là hai mức.",
		"q": "Cây hồi quy đoán một con số bằng cách nào?",
		"a": "Bằng trung bình của các dòng nằm trong lá mà điểm đó rơi vào."
	},
	"clus-why": {
		"s": "Thẻ này nói về học không giám sát và gom cụm, và đáng biết vì phần lớn dữ liệu khách hàng không có sẵn cột đáp án. Gom cụm nhóm các dòng dữ liệu theo khoảng cách giữa chúng. Ví dụ khách của một trung tâm thương mại có số lần ghé và giá trị giỏ hàng trung bình. Không ai gắn nhãn săn giảm giá hay mua cuối tuần, nhưng bạn vẫn muốn tìm những nhóm có hành vi giống nhau. Khách A ghé hai lần, giỏ bốn trăm nghìn đồng. Khách B ghé ba lần, giỏ bốn trăm năm mươi nghìn đồng. Hai người này ở gần nhau. Khách C ghé mười lần, giỏ một triệu rưỡi, nằm xa cả hai. Khoảng cách là khái niệm duy nhất về sự giống nhau. Thuật toán chỉ tạo nhóm, nó không biết nhóm nào nên nhận ưu đãi gì. Điều cần nhớ: một cụm chưa có tên thì chưa phải một phân khúc khách hàng.",
		"q": "Vì sao một cụm vừa tìm được chưa phải là phân khúc khách hàng?",
		"a": "Vì thuật toán chỉ nhóm theo khoảng cách, còn việc hiểu và đặt tên cho nhóm là việc của bạn."
	},
	"km-loop": {
		"s": "Thẻ này nói về K-means, thuật toán gom cụm phổ biến nhất, và đáng biết vì nó chỉ là hai bước lặp đi lặp lại. Bước một, gán mỗi điểm về tâm gần nhất. Bước hai, dời mỗi tâm tới trung bình các điểm vừa được gán. Ví dụ bạn muốn chia khách của trung tâm thương mại thành ba nhóm, sau khi số lần ghé và chi tiêu đã được đưa về cùng một thang đo. Khoảng cách dùng ở đây là khoảng cách thông thường như đo bằng thước. Giả sử ba khách trong cùng một cụm có số lần ghé là hai, bốn và sáu. Tâm mới là trung bình của ba số này, bằng bốn. Vì các tâm xuất phát khác nhau có thể cho kết quả khác nhau, người ta hay rải các tâm đầu cho xa nhau. Điều cần nhớ: chuẩn hóa trước, rồi chỉ còn hai bước, gán điểm và dời tâm.",
		"q": "Hai bước lặp của K-means là gì?",
		"a": "Gán mỗi điểm về tâm gần nhất, rồi dời mỗi tâm tới trung bình các điểm của nó."
	},
	"km-k": {
		"s": "Thẻ này nói về việc chọn số nhóm K, và đáng biết vì chỗ gập của đường elbow không phải là bằng chứng. Phương pháp elbow tìm chỗ mà thêm một nhóm không còn làm các cụm khít hơn bao nhiêu. Tổng độ tản trong cụm luôn giảm khi K tăng, và bằng không khi mỗi điểm là một cụm. Ví dụ độ tản là một nghìn khi K bằng một, năm trăm hai mươi khi K bằng hai, ba trăm khi K bằng ba. Sang K bằng bốn còn hai trăm bảy mươi, K bằng năm còn hai trăm năm mươi. Độ tản giảm mạnh đến ba rồi bẹt, nên ba là ứng viên. Chỉ số silhouette cũng vậy, nó không biết ưu đãi của bạn. Ba nhóm đặt tên được và gửi thư riêng được thì hữu ích hơn mười hai nhóm mỏng. Điều cần nhớ: chọn K mà bạn đặt tên được và vận hành được, còn chỗ gập chỉ ngăn bạn thêm nhóm tùy tiện.",
		"q": "Nên chọn K dựa trên tiêu chí nào, ngoài chỗ gập của đường elbow?",
		"a": "Chọn K mà bạn đặt tên được và vận hành được, với các nhóm đủ lớn để chạy chiến dịch."
	},
	"km-start": {
		"s": "Thẻ này nói về K-means cộng cộng, cách chọn các tâm khởi đầu thông minh hơn, và đáng biết vì khởi động tệ có thể làm kết quả lệch. Ý tưởng là tâm tiếp theo nên chọn ở xa các tâm đã có. Ví dụ có hai đám khách và bạn cần hai nhóm. Nếu khởi động ngẫu nhiên, cả hai tâm có thể rơi vào đám đông, và đám kia không có tâm. Với cách mới, xác suất chọn một điểm tỷ lệ với bình phương khoảng cách tới tâm gần nhất. Giả sử điểm A cách một và điểm B cách ba. Bình phương là một và chín, nên B có xác suất chín mươi phần trăm, còn A chỉ mười phần trăm. Các vòng sau vẫn là gán rồi cập nhật tâm như thường. Bạn vẫn nên chạy vài lần, và nếu mỗi lần ra cụm khác thì đừng báo cáo một lần chạy. Điều cần nhớ: tâm đặt xa nhau là một khởi động đỡ tệ, không phải bằng chứng ngoài đời có đúng hai nhóm.",
		"q": "Vì sao K-means cộng cộng chọn tâm mới ở xa các tâm cũ?",
		"a": "Để các tâm khởi đầu không dồn vào một đám, giúp khởi động đỡ tệ hơn, dù không chứng minh có đúng bấy nhiêu nhóm."
	},
	hier: {
		"s": "Thẻ này nói về gom cụm phân cấp, và đáng biết vì nó cho bạn thấy các nhóm lồng nhau thay vì chỉ một đáp án. Cách làm là dán dần các nhóm gần nhau từng bước, rồi cắt cây ở một độ cao để ra số nhóm mong muốn. Sơ đồ ghi lại các lần dán gọi là dendrogram. Độ cao của một mối nối cho biết lúc đó hai nhóm cách nhau bao xa. Ví dụ hai mối nối cuối cùng ở độ cao năm và tám. Nếu cắt ở độ cao sáu, bạn được ba nhóm. Nếu cắt ở độ cao chín, chỉ còn một nhóm. Nhờ vậy bạn có thể xem nhóm hai lần ghé và nhóm ba lần ghé có bị tách ra quá sớm hay không. Bạn cần chuẩn hóa các cột trước, nếu không cột tiền sẽ át các cột khác. Điều cần nhớ: cây cho thấy các nhóm lồng nhau, nhưng bạn vẫn phải cắt và đặt tên cho từng nhóm.",
		"q": "Độ cao của một mối nối trên sơ đồ phân cấp cho biết điều gì?",
		"a": "Cho biết hai nhóm lúc được dán lại cách nhau bao xa."
	},
	"link-how": {
		"s": "Thẻ này nói về linkage, luật đo khoảng cách giữa hai cụm, và đáng biết vì đổi luật là đổi hình dạng cụm. Có ba luật chính. Luật gần nhất lấy khoảng cách nhỏ nhất giữa hai điểm của hai cụm. Luật xa nhất lấy khoảng cách lớn nhất. Luật trung bình lấy trung bình mọi cặp. Ví dụ cụm A có điểm một và hai, cụm B có điểm bốn và chín. Luật gần nhất cho khoảng cách hai. Luật xa nhất cho tám. Luật trung bình cho năm, là trung bình của bốn cặp. Với khách spa xếp thành một dải theo giờ đến, luật gần nhất dễ nối cả dải thành một sợi, còn luật xa nhất chỉ dính khi cụm vẫn chặt. Cùng một sơ đồ, cắt cùng một tầng, vẫn có thể ra nhóm khác nếu luật khác. Điều cần nhớ: sợi dài có thể chỉ là hệ quả của luật dính, không phải một nhóm khách thật.",
		"q": "Với cùng dữ liệu, vì sao đổi luật linkage lại có thể ra nhóm khác?",
		"a": "Vì mỗi luật đo khoảng cách giữa hai cụm theo một cách khác nhau, nên hình dạng cụm cũng khác."
	},
	"db-scan": {
		"s": "Thẻ này nói về DBSCAN, thuật toán coi cụm là vùng đặc và để các điểm thưa làm nhiễu, và đáng biết vì nó không ép mọi người vào một nhóm. Hãy hình dung đa số khách nằm trong một đám giờ vàng, còn vài người đến lúc hai giờ sáng. DBSCAN có thể để họ là nhiễu thay vì nhét vào đám. Bạn không chọn số nhóm, mà chọn một bán kính và số hàng xóm tối thiểu. Ví dụ bán kính không phẩy năm và tối thiểu bốn hàng xóm. Một khách có sáu người khác trong bán kính đó là điểm lõi. Một khách chỉ có một người khác là nhiễu. Cần lưu ý hai đám nối với nhau bởi một dải điểm có thể dính thành một, giống luật gần nhất ở gom cụm phân cấp. Và nếu các cột chưa cùng thước đo thì bán kính không có nghĩa. Điều cần nhớ: không chọn số nhóm không có nghĩa là không chọn gì, bạn đang chọn bán kính.",
		"q": "DBSCAN không cần bạn chọn số nhóm, vậy bạn phải chọn gì?",
		"a": "Chọn bán kính và số hàng xóm tối thiểu."
	},
	"gmm-soft": {
		"s": "Thẻ này nói về hỗn hợp Gauss, một cách gom cụm mềm, và đáng biết vì một khách thật có thể thuộc nhiều nhóm cùng lúc. Mô hình này cho mỗi điểm một phần thuộc về từng đám hình bầu dục, thay vì một nhãn cứng. Ví dụ một khách vừa giống nhóm gói lẻ vừa giống nhóm gói tháng. Mô hình cho hai phần, chẳng hạn sáu mươi phần trăm và bốn mươi phần trăm, cộng lại đúng một trăm. Còn K-means thì bắt phải chọn một. Mỗi thành phần có một tâm, một độ rộng và một trọng số, và thường được ước lượng bằng thuật toán gọi là EM. Nhưng nếu các đám không giống bầu dục, chẳng hạn hình vòng cung, mô hình vẫn ra một bộ phần, và đó là phần của một mô hình sai. Điều cần nhớ: sáu mươi phần trăm không có nghĩa là chắc chắn sáu mươi phần trăm đây là nhóm A theo kiểu có một nhãn thật sẵn.",
		"q": "Con số sáu mươi phần trăm của hỗn hợp Gauss có nghĩa là gì?",
		"a": "Là phần thuộc về nhóm A theo mô hình, không phải mức chắc chắn rằng có một nhãn thật sẵn."
	},
	"k-mode": {
		"s": "Thẻ này nói về K-modes và K-prototype, hai cách gom cụm khi có cột chữ như tên kênh, và đáng biết vì tên kênh không có trung bình. K-modes lấy giá trị hay gặp nhất, gọi là mode, làm tâm. Ví dụ kênh của ba khách trong một cụm là GDN, GDN và Facebook. Mode là GDN. Trung bình của mã kênh thì vô nghĩa, chẳng hạn hai phẩy bốn. Khoảng cách của K-modes đếm số ô chữ khác nhau giữa hai dòng. K-prototype thì ghép được cả cột số, như chi tiêu, với cột chữ, như kênh. Nó cộng khoảng cách số với khoảng cách chữ nhân một trọng số do bạn chọn. Giả sử hai khách khác nhau ở hai cột chữ, khoảng cách số là một phẩy năm, trọng số là một nửa. Tổng là một phẩy năm cộng một, bằng hai phẩy năm. Đổi trọng số là đổi cụm. Điều cần nhớ: mode của một cụm là cái tên hay gặp nhất, không phải một mã trung bình hai phẩy bốn.",
		"q": "Vì sao tâm của cụm cột chữ lại dùng mode chứ không phải trung bình?",
		"a": "Vì tên kênh không có trung bình, nên ta lấy cái tên xuất hiện nhiều nhất."
	},
	"nlp-tok": {
		"s": "Thẻ này nói về token hóa và từ hư, bước đầu tiên khi xử lý đánh giá của khách, và đáng biết vì nó quyết định bạn đếm cái gì. Token là một mảnh chữ. Từ hư, tiếng Anh gọi là stop word, là những từ phổ biến mà bạn bỏ đi trước khi đếm. Ví dụ bạn có hai trăm đánh giá của khách spa. Cuộc họp cần biết các từ như chờ, sạch, đau, chứ không cần một đám mây từ toàn rất và và. Câu chờ rất lâu và đau có thể tách thành chờ, rất, lâu, và, đau. Bỏ từ hư rất và và, còn lại chờ, lâu, đau. Cách tách token là một lựa chọn, ví dụ chữ không có là một token riêng hay không. Và một danh sách từ hư xấu có thể bỏ mất đúng từ bạn cần. Điều cần nhớ: cần đếm từng mảnh chữ, không đếm cả câu, và bỏ những từ có mặt trong mọi câu.",
		"q": "Từ hư là gì, và vì sao phải bỏ trước khi đếm?",
		"a": "Là những từ quá phổ biến như rất hay và, bỏ đi để các từ mang ý nghĩa nổi lên khi đếm."
	},
	"nlp-bow": {
		"s": "Thẻ này nói về bag-of-words, hay túi từ, và đáng biết vì nó cho thấy máy đọc chữ khác người đọc thế nào. Túi từ đếm các token và bỏ thứ tự của các từ. Mỗi dòng là một đánh giá, mỗi cột là một từ trong vốn từ. Ví dụ đánh giá chờ lâu, chờ mãi cho cột chờ bằng hai và cột lâu bằng một. Hai câu chờ bốn mươi phút và bốn mươi phút rồi mới chờ có thể cho cùng một bộ đếm. Bạn mất ý nghĩa của câu và chỉ giữ bảng kê các từ. Có thể đếm số lần hoặc chỉ ghi có hay không, và bảng này phần lớn là số không. Những thứ bị mất gồm thứ tự, phủ định đứng xa từ, và giọng mỉa mai. Điều cần nhớ: bag-of-words là bảng kê các từ, nó không phải câu.",
		"q": "Túi từ giữ lại gì và bỏ đi gì?",
		"a": "Giữ số lần mỗi từ xuất hiện, bỏ đi thứ tự các từ trong câu."
	},
	"nlp-tfidf": {
		"s": "Thẻ này nói về TF-IDF, cách cho điểm từ sao cho từ có mặt ở khắp nơi được tính ít hơn, và đáng biết vì nó giúp tìm đúng từ đặc trưng. Điểm bằng số lần từ xuất hiện trong một bài, nhân với một hệ số nhỏ dần khi từ có trong nhiều bài. Ví dụ bạn có hai trăm đánh giá. Từ spa có trong cả hai trăm bài, nên hệ số bằng không, và điểm bằng không. Từ chờ chỉ có trong mười bài, nên hệ số khoảng ba. Nếu chờ xuất hiện ba lần trong một bài thì điểm là ba nhân ba, bằng chín. Đổi cơ số logarit làm đổi thang điểm nhưng không đổi thứ hạng, miễn là mọi chỗ dùng cùng một cơ số. Điều cần nhớ: TF-IDF hạ điểm những từ có ở khắp nơi, phần còn lại là tiếng nói riêng của từng bài.",
		"q": "Vì sao từ spa có điểm TF-IDF bằng không trong ví dụ hai trăm đánh giá?",
		"a": "Vì nó có mặt trong cả hai trăm bài, nên không giúp phân biệt bài nào với bài nào."
	},
	"nlp-stem": {
		"s": "Thẻ này nói về stemming và lemmatisation, hai cách gom các dạng của cùng một từ, và đáng biết vì gom dạng từ không phải gom nghĩa. Stemming cắt đuôi từ theo luật, không tra nghĩa, nên có thể tạo ra một chuỗi không phải từ. Lemmatisation đưa từ về dạng từ điển, dùng từ loại để chọn dạng, và nếu từ loại sai thì dạng cũng sai. Ví dụ từ tiếng Anh studies, stemmer đưa thành studi, còn lemmatiser đưa thành study. Với review có đã chờ, chờ mãi và sự chờ, cắt đuôi có thể dồn chúng làm một, nhưng cũng có thể dồn hai nghĩa khác nhau vào cùng một mảnh. Cả hai chạy trước khi đếm túi từ. Và chúng không giữ được phủ định nếu bạn đã bỏ chữ không ở bước trước. Điều cần nhớ: gom dạng từ không phải gom nghĩa.",
		"q": "Stemming khác lemmatisation ở điểm nào?",
		"a": "Stemming cắt đuôi theo luật nên có thể ra chuỗi lạ, còn lemmatisation đưa từ về dạng trong từ điển."
	},
	"nlp-edit": {
		"s": "Thẻ này nói về khoảng cách sửa, cách đếm số lần sửa ít nhất để biến chuỗi này thành chuỗi kia, và đáng biết vì nó giúp tự động gợi ý từ đúng cho lỗi chính tả. Mỗi lần thêm, xóa hoặc thay một ký tự tính là một lần sửa. Ví dụ khách viết spaa hoặc massagee. Từ spaa thành spa chỉ cần một lần xóa, nên khoảng cách là một. Từ massagee thành massage cũng là một. Còn từ spa thành sau cần hai lần thay, nên khoảng cách là hai. Bạn có thể gợi ý từ trong từ điển có khoảng cách nhỏ nhất. Ngoài ra còn có cách gom các từ nghe giống nhau nhưng viết khác, và một thước đo khác tên PMI, cao khi hai từ đi cùng nhau nhiều hơn mức ngẫu nhiên. Điều cần nhớ: lỗi chính tả là một số lần sửa, hãy gợi ý từ gần nhất và đừng đoán khi có hai từ bằng nhau.",
		"q": "Từ spaa cách từ spa bao nhiêu lần sửa, và sửa bằng thao tác nào?",
		"a": "Một lần sửa, bằng cách xóa một chữ a."
	},
	"nlp-pmi": {
		"s": "Thẻ này nói về điểm PMI, một cách đo xem hai chữ có thật sự đi cùng nhau hay chỉ tình cờ gặp nhau. Biết điều này giúp bạn tìm được những cụm từ có nghĩa trong đống review. Hãy tưởng tượng bạn có một nghìn câu review. Chữ chờ xuất hiện trong năm mươi câu, chữ lâu xuất hiện trong một trăm câu. Nếu hai chữ này không liên quan gì nhau, bạn chỉ mong đợi khoảng năm câu có cả hai. Nhưng thực tế có tới hai mươi câu chứa cả chờ lẫn lâu. Gấp bốn lần mức mong đợi, nên điểm PMI dương và khá cao. Ngược lại, những chữ như và xuất hiện cùng mọi thứ, nên điểm của chúng gần bằng không. Vì vậy, chữ nào chỉ đơn giản là hay gặp thì chưa chắc đáng chú ý. Điều cần nhớ là: hay gặp chưa đủ, hai chữ phải hay gặp cùng nhau hơn mức từng chữ riêng lẻ.",
		"q": "Trong ví dụ review, vì sao cặp chờ và lâu có điểm PMI cao?",
		"a": "Vì hai chữ cùng xuất hiện trong hai mươi câu, nhiều gấp bốn lần mức năm câu mà ta mong đợi nếu chúng độc lập."
	},
	"biz-map": {
		"s": "Thẻ này nói về việc gọi tên quyết định kinh doanh trước khi nghĩ đến mô hình. Điều này đáng biết vì rất nhiều dự án phân tích đi sai ngay từ câu hỏi đầu tiên. Giả sử sếp than rằng trang đích yếu. Đó mới chỉ là một lời than, chưa phải bài toán cho mô hình. Quyết định thật có thể là: có nên đổi trang đích của chiến dịch quảng cáo GDN hay không. Từ đó bạn viết ra một giả thuyết mà bạn có thể sai, gắn với một con số. Ví dụ, nếu đổi trang đích thì tỷ lệ điền form tăng từ một phẩy một phần trăm lên ít nhất một phẩy bốn phần trăm trong hai mươi mốt ngày. Có câu đó rồi, bạn mới biết cần thu thập dữ liệu gì, và các biểu đồ khám phá sẽ cho biết giả thuyết có đáng tin hay không. Điều cần nhớ là: chưa gọi được tên quyết định thì chưa đến lúc huấn luyện mô hình.",
		"q": "Một lời than như trang đích yếu cần được biến thành gì để làm bài toán phân tích?",
		"a": "Thành một quyết định cụ thể và một giả thuyết gắn với con số, chẳng hạn có nên đổi trang đích hay không và tỷ lệ form phải tăng bao nhiêu."
	},
	"biz-metric": {
		"s": "Thẻ này nói về cách chấm mô hình bằng thước đo kinh doanh chứ không chỉ bằng điểm accuracy, tức độ chính xác. Nó đáng biết vì một mô hình điểm đẹp vẫn có thể không giúp gì cho công việc. Ví dụ, mục tiêu của bạn là trong hai mươi mốt ngày, tỷ lệ điền form của kênh GDN tăng từ một phẩy một phần trăm lên một phẩy sáu phần trăm, và giá một form không tăng quá mười lăm phần trăm. Đó là con số bạn đã viết ra từ trước. Bây giờ giả sử có một mô hình mới với chỉ số AUC cao hơn, nhưng tỷ lệ form không nhích và giá form vẫn vậy. Vậy thì đó không phải một chiến thắng. Điểm đẹp hơn trên giấy không đổi được quyết định nào. Điều cần nhớ là: hãy đưa ra thay đổi làm nhích con số bạn đã viết, không phải mô hình có điểm đẹp hơn.",
		"q": "Nếu mô hình có AUC cao hơn nhưng tỷ lệ form không nhích, bạn kết luận gì?",
		"a": "Đó chưa phải chiến thắng, vì thước đo kinh doanh đã viết ra không đổi."
	},
	"git-commit": {
		"s": "Thẻ này nói về commit trong Git, tức một ảnh chụp công việc của bạn kèm một câu mô tả. Biết cách viết câu mô tả giúp cả nhóm đọc lại lịch sử mà không bị lạc. Hãy hình dung một commit mang câu thêm cột kênh vào file form. Người khác chỉ cần đọc câu đó là hiểu ảnh chụp này khác ảnh trước ở chỗ nào. Bây giờ hình dung một commit chỉ ghi chữ update. Ảnh chụp vẫn nằm đó, nhưng không ai biết nó đã đổi gì, nên cũng không ai dám quay về dùng nó. Vì vậy mỗi lần lưu, hãy dành mười giây viết một câu cho rõ ràng. Mười giây ấy sẽ tiết kiệm cho bạn và đồng nghiệp rất nhiều thời gian sau này. Điều cần nhớ là: không có câu mô tả thì ảnh vẫn nằm đó, nhưng không ai dám dùng.",
		"q": "Vì sao một commit chỉ ghi chữ update lại gây khó cho người khác?",
		"a": "Vì không ai biết ảnh chụp đó khác ảnh trước ở đâu, nên không ai dám dùng nó."
	},
	"git-branch": {
		"s": "Thẻ này nói về branch, hay nhánh, trong Git. Nhánh cho phép bạn thử nghiệm mà không làm hỏng bản đang chạy. Ví dụ, bạn muốn thử đổi cách tính giá một form. Bạn tạo một nhánh riêng và thử ở đó. Trong lúc ấy, nhánh chính vẫn đứng yên và vẫn là bản đang chạy báo cáo cho mọi người. Khi thử xong và thấy ổn, bạn mới nhập nhánh thử vào nhánh chính. Còn nếu bạn nhập khi chưa xong, báo cáo của cả nhóm có thể gãy ngay giữa buổi họp. Vì thế thói quen tốt là luôn tạo nhánh trước khi đổi một thứ gì đó chưa chắc chắn, và chỉ nhập lại khi đã kiểm tra kỹ. Điều cần nhớ là: thử trên nhánh chính là thử trên bản mà người khác đang đọc.",
		"q": "Vì sao nên thử cách tính mới trên một nhánh riêng?",
		"a": "Vì nhánh chính là bản người khác đang đọc, nhập khi chưa xong có thể làm báo cáo gãy."
	},
	"ens-vote": {
		"s": "Thẻ này nói về ensemble, tức ghép nhiều mô hình, và cách bỏ phiếu giữa chúng. Nó đáng biết vì kết quả bỏ phiếu rất dễ bị hiểu sai thành độ chắc chắn. Hãy tưởng tượng năm cây quyết định cùng đoán một khách của spa có rời đi hay không. Bốn cây nói ở lại, một cây nói rời đi. Phiếu cuối cùng là ở lại. Nhưng điều đó không có nghĩa bốn cây kia đều đúng, cũng không có nghĩa khách này có tám mươi phần trăm khả năng ở lại một cách chắc chắn. Đó chỉ là số đông trong năm cây. Không cây nào trong số đó là sự thật, chúng chỉ là những người đoán. Điều cần nhớ là: bốn trên năm là số đông, không phải đúng tám mươi phần trăm.",
		"q": "Năm cây có bốn cây nói ở lại. Có thể nói khách đó đúng tám mươi phần trăm sẽ ở lại không?",
		"a": "Không. Bốn trên năm chỉ là số đông giữa các cây, không phải xác suất đúng tám mươi phần trăm."
	},
	"ens-bag": {
		"s": "Thẻ này nói về bagging, cách cho mỗi cây một túi dữ liệu riêng. Nó giúp các cây trong rừng không chép lại nhau. Giả sử bạn có một nghìn khách. Mỗi cây rút lại một nghìn dòng từ danh sách đó, và rút xong thì trả lại, nên có khách được chọn hai lần, có khách không được chọn lần nào cho cây này. Cây khác lại rút ra một túi hơi khác. Nhờ vậy mỗi cây nhìn thấy dữ liệu theo một góc khác nhau, và khi ghép lại ta được kết quả ổn định hơn. Lưu ý là khi một dòng vào túi hai lần, đó vẫn chỉ là một khách, chỉ là cây ấy nhìn thấy khách đó hai lần. Điều cần nhớ là: một dòng vào hai lần không phải là hai khách.",
		"q": "Trong bagging, vì sao các cây không chép lại nhau?",
		"a": "Vì mỗi cây rút một túi dữ liệu khác nhau, có dòng vào hai lần và có dòng vắng mặt."
	},
	"rf-col": {
		"s": "Thẻ này nói về rừng ngẫu nhiên, và một mẹo nhỏ là mỗi nhát cắt chỉ được nhìn vài cột. Nó đáng biết vì giải thích vì sao rừng khác với việc trồng nhiều cây giống hệt nhau. Giả sử cột số lần ghé luôn là cột tốt nhất. Nếu cây nào cũng được nhìn mọi cột, thì cây nào cũng cắt đầu tiên theo cột đó, và cả rừng trở thành những bản sao của nhau. Vì thế rừng chỉ cho mỗi nhát cắt một nhóm cột ngẫu nhiên. Có lúc cột số lần ghé không nằm trong nhóm, và cây buộc phải cắt theo một cột khác. Nhờ vậy các cây khác nhau hơn. Lưu ý rằng cột bị giấu ở một nhát cắt không có nghĩa là nó vô dụng. Điều cần nhớ là: cột bị giấu ở một nhát cắt vẫn có thể quan trọng, chỉ là nó không được xét lúc đó.",
		"q": "Vì sao rừng ngẫu nhiên chỉ cho mỗi nhát cắt nhìn một nhóm cột?",
		"a": "Để các cây không đều cắt theo cùng một cột mạnh nhất, nhờ đó chúng khác nhau hơn."
	},
	"ens-oob": {
		"s": "Thẻ này nói về dòng ngoài túi, hay out-of-bag, dùng để chấm điểm từng cây. Nó đáng biết vì rất dễ hiểu nhầm đây là phép thử cho tương lai. Giả sử tập học có một nghìn khách. Mỗi cây bỏ lại khoảng một phần ba số dòng khi rút túi, và phần bỏ lại đó dùng để chấm chính cây ấy. Đây là cách chấm tiện lợi, không cần chia riêng một tập kiểm tra. Nhưng tuần sau không nằm trong một nghìn khách này. Còn nếu bạn nhân đôi tám khách rời đi trước khi chia, cùng một người sẽ lọt cả hai phía, và điểm ngoài túi sẽ nói dối bạn. Điều cần nhớ là: dòng ngoài túi không phải là tuần sau.",
		"q": "Dòng ngoài túi dùng để làm gì, và nó có thay thế được dữ liệu của tuần sau không?",
		"a": "Nó dùng để chấm chính cây đã bỏ lại những dòng đó, và không thay được dữ liệu tuần sau vì tuần sau không nằm trong tập học."
	},
	"imb-trap": {
		"s": "Thẻ này nói về bẫy của lớp mất cân bằng, nơi con số accuracy trông rất đẹp nhưng vô nghĩa. Hãy tưởng tượng có chín mươi hai khách ở lại và tám khách rời đi. Một mô hình lười biếng gọi mọi người là ở lại sẽ đúng chín mươi hai phần trăm. Nghe rất tốt. Nhưng bạn không giữ lại được một ai trong tám người sắp rời, trong khi đó mới là mục tiêu của bài toán. Vì vậy với bài toán khách rời bỏ, đừng chỉ nhìn accuracy. Hãy hỏi mô hình bắt được bao nhiêu trong số những người thật sự rời đi. Điều cần nhớ là: chín mươi hai phần trăm đúng có thể có nghĩa là không phần trăm người rời được giữ lại.",
		"q": "Vì sao mô hình đoán mọi khách đều ở lại vẫn đạt chín mươi hai phần trăm mà vô dụng?",
		"a": "Vì có tới chín mươi hai trên một trăm khách vốn ở lại, nên mô hình đoán đúng số đông nhưng không bắt được ai trong tám người rời đi."
	},
	"imb-fix": {
		"s": "Thẻ này nói về cách xử lý lớp hiếm: tăng trọng số, nhân bản dòng, hoặc đổi ngưỡng. Nó đáng biết vì cách nhân bản rất dễ làm điểm số đẹp giả. Giả sử có tám khách rời đi. Nếu bạn chép chúng thành mười sáu dòng trước khi chia tập, cùng một người có thể vừa nằm ở tập học vừa nằm ở tập chấm, nên mô hình như được xem đáp án trước. Còn tăng trọng số thì vẫn là tám người, chỉ là mỗi lần bỏ sót một người sẽ bị tính nặng hơn. Và đổi ngưỡng quyết định thường là nút nên thử trước tiên. Điều cần nhớ là: hai dòng của cùng một người không phải hai bằng chứng.",
		"q": "Vì sao nhân đôi dòng của khách rời đi trước khi chia tập là nguy hiểm?",
		"a": "Vì cùng một người có thể nằm ở cả tập học lẫn tập chấm, làm điểm số đẹp một cách giả tạo."
	},
	"imb-smote": {
		"s": "Thẻ này nói về SMOTE, một kỹ thuật tạo thêm dữ liệu cho lớp hiếm. Cần hiểu rõ nó tạo ra cái gì, kẻo bị đánh lừa. Giả sử có hai khách rời đi, một người chi hai triệu và một người chi bốn triệu. SMOTE có thể thêm một điểm nằm giữa, ứng với ba triệu. Nhưng trong đời thật không có khách nào chi đúng ba triệu, đây chỉ là một điểm toán học nằm giữa hai người thật. Nếu điểm này lọt sang tập chấm, mô hình sẽ được chấm bằng một người không tồn tại, và điểm số sẽ đẹp hơn sự thật. Vì vậy chỉ nên tạo điểm mới trong tập học. Điều cần nhớ là: điểm nằm giữa không phải một khách hàng thứ ba.",
		"q": "Điểm ba triệu do SMOTE tạo ra có phải một khách hàng thật không?",
		"a": "Không. Đó chỉ là một điểm nằm giữa hai khách thật, và nếu lọt vào tập chấm thì điểm số sẽ đẹp giả."
	},
	"bv-bias": {
		"s": "Thẻ này nói về hai kiểu sai của mô hình: lệch và nhảy, tiếng Anh gọi là bias và variance. Phân biệt được chúng bạn mới biết nên sửa theo hướng nào. Giả sử số form theo mức chi tiêu là một đường cong. Nếu bạn dùng một đường thẳng, nó trượt cả ở tập học lẫn ở tuần mới. Đó là lệch, vì họ mô hình quá thẳng. Ngược lại, một cây rất sâu sẽ khớp từng tuần nhiễu, nên tập học đẹp nhưng tuần mới xấu. Đó là nhảy, vì mô hình khớp cả nhiễu. Chỉ nhìn tập học thì bạn không phân biệt được hai trường hợp này. Điều cần nhớ là: tập học đẹp chưa cho biết là lệch hay nhảy, phải nhìn tập mới.",
		"q": "Làm sao phân biệt mô hình bị lệch với mô hình bị nhảy?",
		"a": "Phải so tập học với tập mới. Lệch thì cả hai đều xấu, nhảy thì tập học đẹp nhưng tập mới xấu."
	},
	"reg-ridge": {
		"s": "Thẻ này nói về hồi quy Ridge, một cách giữ các hệ số của mô hình không phình quá lớn. Nó đáng biết khi các cột trong mô hình nói gần như cùng một điều. Giả sử bạn đưa vào mô hình chi tiêu tính bằng đồng và chi tiêu tính bằng triệu đồng. Hai cột này giống nhau, nên hệ số của chúng giằng co, ví dụ một cột cộng năm mươi, cột kia trừ bốn mươi tám. Ridge kéo cả hai về gần không, chẳng hạn còn một và không phẩy chín. Nhưng Ridge hiếm khi đưa một hệ số về đúng không. Điều cần nhớ là: không về không nghĩa là cột vẫn còn trong câu, dù hệ số rất nhỏ.",
		"q": "Ridge xử lý hai cột gần giống nhau như thế nào?",
		"a": "Nó kéo cả hai hệ số về gần không, nhưng hiếm khi về đúng không nên cột vẫn còn trong mô hình."
	},
	"reg-lasso": {
		"s": "Thẻ này nói về hồi quy Lasso, một cách co hệ số có thể đưa một vài hệ số về đúng không. Nó đáng biết vì nó vừa co vừa chọn cột. Giả sử mô hình có mười cột về kênh và hành vi khách. Lasso có thể đưa hệ số của vài cột về đúng không và giữ lại những cột còn lại. Nhìn vào kết quả, bạn dễ nghĩ những cột bị đưa về không là vô dụng. Nhưng không hẳn như vậy. Có thể cột đó có ích ngoài đời, chỉ là trong mô hình này nó bị cột khác thay thế. Điều cần nhớ là: đúng không là bị đưa ra khỏi câu này, không phải bằng chứng cột đó vô dụng.",
		"q": "Nếu Lasso đưa hệ số của một cột về đúng không, có thể kết luận cột đó vô dụng không?",
		"a": "Không. Nó chỉ bị đưa ra khỏi mô hình này, ngoài đời cột đó vẫn có thể có ích."
	},
	"met-reg": {
		"s": "Thẻ này nói về hai cách đo sai số của dự báo là MAE và RMSE. Hiểu sự khác nhau giúp bạn không thấy hai con số này mâu thuẫn. Giả sử ba tuần có độ lệch lần lượt là hai, hai và mười form. MAE lấy trung bình các độ lệch, được khoảng bốn phẩy sáu bảy form. RMSE thì bình phương độ lệch, lấy trung bình, rồi lấy căn, ra đúng sáu form. Tuần lệch mười form kéo RMSE lên cao hơn, vì RMSE phạt các lần trượt lớn nặng tay hơn. Cả hai đều đúng, chỉ là cách phạt khác nhau. Điều cần nhớ là: RMSE sáu form và MAE bốn phẩy bảy form không mâu thuẫn, chúng chỉ phạt khác nhau.",
		"q": "Vì sao RMSE lớn hơn MAE khi có một tuần trượt rất xa?",
		"a": "Vì RMSE phạt các lần trượt lớn nặng hơn, nên tuần lệch mười form kéo nó lên cao."
	},
	"fe-num": {
		"s": "Thẻ này nói về việc biến đổi cột số bằng phép log, tức lấy logarit. Nó giúp khi dữ liệu có một cái đuôi dài. Giả sử hầu hết các tuần chi dưới năm triệu đồng, nhưng có một tuần chi tám mươi triệu. Trung bình bị tuần đó chiếm hết chỗ. Log kéo cái đuôi lại gần nhau hơn. Tuy nhiên tuần chi bằng không thì log không có nghĩa, nên phải dùng log của một cộng với giá trị, hoặc chọn luật khác. Và sau khi biến đổi, cách đọc hệ số cũng khác đi, vì bạn đang nói về phần trăm thay đổi chứ không phải đồng. Điều cần nhớ là: kéo đuôi xong thì câu về hệ số cũng đã đổi.",
		"q": "Vì sao không thể lấy log trực tiếp cho tuần chi tiêu bằng không?",
		"a": "Vì log của không không tồn tại, nên phải cộng thêm một trước khi lấy log hoặc dùng cách khác."
	},
	"fe-cat": {
		"s": "Thẻ này nói về biến giả, cách biến một cột chữ như tên kênh thành các cột không và một. Nó đáng biết vì có một cái bẫy cột thừa. Giả sử có ba kênh là GDN, Facebook và TikTok. Bạn tạo ba cột, mỗi kênh một cột. Nhưng nếu mô hình đã có hệ số chặn, thì một cột là thừa, vì biết hai cột là biết luôn cột thứ ba. Cách làm là bỏ một kênh để làm mốc so sánh. Riêng cây quyết định thì không bị vướng chuyện này và có thể giữ cả ba cột. Điều cần nhớ là: ba kênh không cần ba hệ số khi đã có một hệ số chặn.",
		"q": "Có ba kênh và một hệ số chặn, cần tạo mấy cột biến giả cho mô hình tuyến tính?",
		"a": "Hai cột, vì một kênh được bỏ ra làm mốc so sánh."
	},
	"fe-time": {
		"s": "Thẻ này nói về đặc trưng thời gian. Nó đáng biết vì nếu để nguyên cột ngày, mô hình hiểu sai điều bạn muốn hỏi. Khi bạn đưa cột ngày vào một đường thẳng, đường đó chỉ đọc được là càng muộn càng nhiều form, hoặc càng ít form. Nó chỉ biết muộn hơn, không biết gì về thói quen theo tuần. Chủ nhật và thứ hai không phải hai bậc liền nhau trên một đường thẳng như thế. Nếu câu bạn hỏi là về thứ trong tuần, giờ trong ngày hay tháng trong năm, hãy tách chúng ra thành các cột riêng. Điều cần nhớ là: Chủ nhật không phải số bảy trên một đường form.",
		"q": "Vì sao không nên đưa nguyên cột ngày vào mô hình đường thẳng?",
		"a": "Vì mô hình chỉ đọc nó như càng muộn càng tăng hoặc giảm, chứ không hiểu thứ, giờ hay tháng."
	},
	"cv-fold": {
		"s": "Thẻ này nói về cross-validation, hay kiểm chéo, một cách chấm mô hình bằng cách luân phiên giấu từng miếng dữ liệu. Nó đáng biết vì cho điểm ổn định hơn một lần chia duy nhất. Giả sử bạn chia khách thành bốn phần. Mỗi lượt học trên ba phần rồi chấm phần bị giấu. Bốn lượt cho sai số năm phẩy tám, sáu phẩy hai, sáu phẩy không và sáu phẩy bốn, trung bình sáu phẩy một. Tuy nhiên nếu bạn dùng chính bốn lượt này để chỉnh độ sâu của cây, điểm số sẽ đẹp hơn sự thật một chút, vì bạn đã chọn nút xoay theo nó. Điều cần nhớ là: trung bình bốn lần giấu vẫn có thể lạc quan nếu bạn đã dùng nó để chọn nút.",
		"q": "Vì sao điểm kiểm chéo có thể hơi lạc quan?",
		"a": "Vì nếu bạn đã dùng chính các lượt đó để chỉnh các nút của mô hình thì điểm đã bị chọn cho đẹp."
	},
	"cv-grid": {
		"s": "Thẻ này nói về grid search, tức tìm trên lưới các giá trị tham số. Nó đáng biết để bạn hiểu giới hạn của việc tự động chỉnh. Giả sử bạn thử độ sâu hai, bốn, tám và số cột mỗi nhát cắt là hai và bốn. Lưới có ba nhân hai, tức sáu cặp. Độ sâu ba không được thử vì bạn không viết nó vào lưới. Rút ngẫu nhiên thì đỡ tốn hơn khi có nhiều nút xoay, nhưng cũng không bước ra ngoài khoảng bạn đặt. Cho nên kết quả tốt nhất chỉ là tốt nhất trong những gì bạn đã cho thử. Điều cần nhớ là: không có trong lưới nghĩa là chưa được xét, không phải đã bị bác.",
		"q": "Độ sâu ba không có trong lưới thì có nghĩa là nó tệ không?",
		"a": "Không. Nó chỉ chưa được thử vì bạn không đưa vào lưới."
	},
	"ts-order": {
		"s": "Thẻ này nói về thứ tự trong chuỗi thời gian. Nó đáng biết vì xáo dòng là lỗi rất dễ mắc mà lại phá hỏng cả bài toán dự báo. Số form tuần này thường giống tuần trước hơn là giống một tuần bất kỳ. Nếu bạn xáo các dòng rồi mới cho mô hình học, bạn đang dạy nó trên một đống không còn khái niệm tuần tới. Mà điều bạn muốn dự báo chính là thứ tự đó. Vì vậy cả lúc học lẫn lúc chấm, các dòng phải đứng đúng thứ tự thời gian. Điều cần nhớ là: có cột ngày chưa đủ, phải để các dòng đứng đúng thứ tự lúc học và lúc chấm.",
		"q": "Vì sao không được xáo các tuần trước khi dự báo?",
		"a": "Vì thứ tự thời gian chính là thứ cần dự báo, xáo đi thì mô hình mất khái niệm tuần tới."
	},
	"ts-dep": {
		"s": "Thẻ này nói về việc các dòng trong chuỗi thời gian phụ thuộc vào nhau. Nó đáng biết vì ảnh hưởng đến độ tin cậy của khoảng quanh hệ số. Giả sử bạn vẽ đường form theo mức chi tiêu, và thấy phần dư tuần này cùng dấu với tuần trước suốt một tháng. Nghĩa là sai số các tuần dính vào nhau. Khi đó sai số chuẩn của hệ số được tính ra sẽ quá tự tin, tức khoảng quanh hệ số hẹp hơn thực tế. Đây là một chuỗi, không phải một đống dòng độc lập. Điều cần nhớ là: hệ số không sai chỉ vì các tuần dính nhau; cái bị hẹp quá mức là khoảng quanh hệ số.",
		"q": "Khi sai số các tuần dính nhau, điều gì bị ảnh hưởng, hệ số hay khoảng quanh hệ số?",
		"a": "Khoảng quanh hệ số bị hẹp quá mức, còn bản thân hệ số không vì thế mà sai."
	},
	"ts-decomp": {
		"s": "Thẻ này nói về việc tách chuỗi thời gian và câu hỏi tháng lễ cộng thêm hay nhân lên. Nó đáng biết vì chọn sai kiểu sẽ dự báo sai mùa. Nếu tháng lễ luôn thêm khoảng hai mươi form dù nền cao hay thấp, đó là kiểu cộng. Nếu tháng lễ là gấp một phẩy bốn lần, và nền đã gấp đôi, thì phần mùa cũng lớn gấp đôi, đó là kiểu nhân. Hai kiểu cho dự báo rất khác nhau khi nền thay đổi. Bạn phải chọn dựa trên cách dữ liệu hành xử, đừng chỉ nhìn một năm rồi đoán. Điều cần nhớ là: có mùa chưa cho biết mùa đó là cộng hay nhân.",
		"q": "Phân biệt mùa kiểu cộng và mùa kiểu nhân như thế nào?",
		"a": "Kiểu cộng thêm một lượng cố định dù nền cao hay thấp, kiểu nhân tăng theo tỷ lệ của nền."
	},
	"ts-naive": {
		"s": "Thẻ này nói về dự báo ngây, tiếng Anh gọi là naive, một mốc so sánh đơn giản mà mọi mô hình phải vượt qua. Giả sử tuần trước có bốn mươi form. Câu ngây nói tuần này cũng bốn mươi. Nếu mô hình của bạn có sai số RMSE là chín trong khi câu ngây chỉ có sáu, thì mô hình đó chưa đáng dùng. Nếu dữ liệu có mùa theo năm, câu ngây có thể đổi thành bằng tuần cùng kỳ năm trước. Hãy luôn tính mốc này trước khi khoe một mô hình phức tạp. Điều cần nhớ là: một mô hình phức tạp mà thua bằng tuần trước là một mô hình chưa xong.",
		"q": "Mô hình có RMSE chín, dự báo ngây có RMSE sáu. Bạn kết luận gì?",
		"a": "Mô hình chưa đáng dùng vì còn thua cách dự báo đơn giản là bằng tuần trước."
	},
	"ts-sma": {
		"s": "Thẻ này nói về trung bình trượt đơn giản, lấy trung bình vài tuần gần nhất để dự báo. Nó đáng biết vì cách này phản ứng chậm. Giả sử ba tuần gần nhất có hai mươi, hai mươi bốn và tám mươi form. Trung bình ba tuần là khoảng bốn mươi mốt phẩy ba. Tuần lễ tám mươi form được tính như một tuần thường, mỗi tuần một suất. Khi lễ đã qua, con số tám mươi vẫn nằm trong cửa sổ thêm một lúc, nên dự báo vẫn bị kéo lên cao. Phương pháp này không biết lễ đã hết. Điều cần nhớ là: tuần lễ còn nằm trong cửa sổ thì nó vẫn bị tính, dù lễ đã qua.",
		"q": "Vì sao trung bình trượt vẫn cao sau khi tuần lễ đã qua?",
		"a": "Vì tuần lễ vẫn còn nằm trong cửa sổ ba tuần và vẫn được tính như một tuần thường."
	},
	"ts-ses": {
		"s": "Thẻ này nói về san bằng mũ đơn giản, một cách dự báo cho tuần gần đây nhiều trọng lượng hơn tuần cũ. Giả sử mức cũ là bốn mươi form, tuần này có năm mươi form, và hệ số san bằng là không phẩy bốn. Mức mới bằng không phẩy bốn nhân năm mươi, cộng không phẩy sáu nhân bốn mươi, ra bốn mươi bốn. Hệ số gần một thì mô hình chạy theo từng tuần nhiễu, còn gần không thì hầu như không nhúc nhích. Một điểm cần lưu ý là dự báo phía trước chỉ là một mức nằm ngang. Điều cần nhớ là: phía trước chỉ là một mức nằm ngang, không phải một dốc chỉ vì quá khứ đang đi lên.",
		"q": "Mức cũ bốn mươi, tuần này năm mươi, hệ số không phẩy bốn. Mức mới là bao nhiêu?",
		"a": "Là bốn mươi bốn, vì không phẩy bốn nhân năm mươi cộng không phẩy sáu nhân bốn mươi."
	},
	"ts-holt": {
		"s": "Thẻ này nói về phương pháp Holt, thêm một độ dốc vào dự báo. Nó đáng biết vì dốc này có thể chạy mãi mà không biết dừng. Giả sử số form tăng khoảng ba mỗi tuần suốt một quý, và mức hiện tại là bốn mươi. Holt cộng độ dốc đó vào các tuần tới. Nhưng một tháng lễ nhảy lên một lần không phải là một dốc kéo dài cả năm. Nếu đẩy dự báo thật xa, dốc vẫn chạy và có thể cho ra một con số vô lý. Phương pháp này không biết lễ đã hết, bạn phải là người biết. Điều cần nhớ là: dốc không biết lễ đã hết; bạn phải là người biết.",
		"q": "Vì sao dự báo Holt đi quá xa có thể ra con số vô lý?",
		"a": "Vì độ dốc cứ được cộng mãi, không biết rằng đợt tăng do lễ đã kết thúc."
	},
	"ts-hw": {
		"s": "Thẻ này nói về Holt-Winters, phương pháp thêm yếu tố mùa vào dự báo. Nó đáng biết vì máy không tự tìm ra chu kỳ cho bạn. Với số form theo tuần, chu kỳ là bảy. Bạn phải nói con số bảy cho mô hình, nó không tự quyết định đó là bảy hay năm mươi hai. Ngoài ra cần có hơn một vòng dữ liệu thì mới thấy được hình dạng của mùa. Ví dụ với một năm dữ liệu theo tuần, mùa theo năm chưa lặp lại lần nào nên chưa thể học được. Điều cần nhớ là: máy không tự khám phá ra rằng tuần có bảy ngày, bạn phải nói với nó.",
		"q": "Holt-Winters cần bạn cung cấp điều gì về mùa?",
		"a": "Độ dài chu kỳ, chẳng hạn bảy, và phải có hơn một vòng dữ liệu để thấy hình dạng mùa."
	},
	"ts-mape": {
		"s": "Thẻ này nói về MAPE, sai số phần trăm trung bình. Nó đáng biết vì có một tình huống làm nó hỏng hẳn. Giả sử số thật là mười form, bạn đoán mười hai, độ lệch tương đối là hai chia mười, tức hai mươi phần trăm. Nhưng nếu số thật là không form, bạn đoán ba, thì không thể chia cho không. MAPE gãy. Trong trường hợp đó, MAE vẫn cho biết sai ba form, còn RMSE phạt các tuần lệch lớn nặng hơn. Vậy nên với dữ liệu có tuần bằng không, hãy dùng thước đo khác. Điều cần nhớ là: một tuần đóng cửa làm MAPE vô nghĩa, nhưng không làm mô hình vô nghĩa.",
		"q": "Vì sao MAPE không dùng được khi có tuần số thật bằng không?",
		"a": "Vì phải chia cho số thật, mà không thể chia cho không."
	},
	"ts-walk": {
		"s": "Thẻ này nói về walk-forward validation, cách chấm dự báo bằng cách học quá khứ rồi chấm đoạn sau, rồi cuốn dần về phía trước. Nó đáng biết vì mô phỏng đúng cách bạn sẽ dùng mô hình thật. Ví dụ, bạn học đến hết tháng sáu và chấm tháng bảy. Sau đó học đến hết tháng bảy và chấm tháng tám. Mỗi lần mô hình chỉ thấy quá khứ. Còn nếu bạn xáo các tuần vào kiểm chéo thông thường, mô hình có thể thấy tuần tám khi đang chấm tuần bảy. Đó không còn là dự báo nữa. Điều cần nhớ là: giấu một tháng ở giữa không phải là dự báo tháng đó.",
		"q": "Walk-forward validation khác kiểm chéo xáo ngẫu nhiên ở điểm nào?",
		"a": "Mỗi lần mô hình chỉ học từ quá khứ rồi chấm đoạn sau, không bao giờ nhìn thấy tương lai."
	},
	"ts-stat": {
		"s": "Thẻ này nói về tính dừng của chuỗi thời gian, và nó đáng biết vì rất nhiều mô hình dự báo chỉ chạy đúng trên chuỗi đã dừng. Chuỗi dừng là chuỗi có tâm và độ rộng không phụ thuộc vào lúc bạn nhìn. Ví dụ số form dao động quanh bốn mươi suốt năm, với độ rộng không đổi, thì tạm gọi là dừng. Còn nếu số form tăng đều theo thời gian thì chuỗi chưa dừng. Cách làm chuỗi dễ đứng yên hơn là lấy hiệu, tức lấy tuần này trừ tuần trước để ra các bước thay đổi. Giả sử chuỗi là bốn mươi, bốn mươi ba, bốn mươi sáu, thì các bước thay đổi là ba và ba. Nếu dự báo bước kế tiếp là ba thì mức dự báo là bốn mươi sáu cộng ba, bằng bốn mươi chín. Nhiều người quên bước cộng ngược này và báo cáo cái thay đổi như thể nó là số form. Hãy nhớ: dự báo được cái thay đổi chưa có nghĩa là đã dự báo được mức.",
		"q": "Vì sao sau khi dự báo các bước thay đổi, bạn vẫn phải cộng ngược lại?",
		"a": "Vì cái dự báo được mới là phần thay đổi, còn muốn có mức số form thì phải cộng phần thay đổi đó vào giá trị tuần trước."
	},
	"ts-acf": {
		"s": "Thẻ này nói về hai biểu đồ tương quan, gọi tắt là ACF và PACF, giúp bạn gợi ý bậc của mô hình dự báo. Đáng biết vì đọc sai chúng rất dễ. ACF đo mức giống nhau giữa một tuần với tuần cách nó một số bước. Ví dụ số form tuần này tương quan không phẩy sáu với tuần trước và không phẩy ba với hai tuần trước. Còn PACF hỏi phần tương quan còn lại sau khi đã tính các bước ở giữa. Với năm mươi tuần dữ liệu, vạch ngưỡng nằm quanh không phẩy hai tám, nên hai giá trị không phẩy sáu và không phẩy ba đều vượt vạch, còn không phẩy một thì không. Nhưng chuỗi ngắn thường cho hình nói dối, vì cột có thể vượt vạch chỉ do tình cờ. Vì vậy đừng chọn bậc mô hình chỉ vì một cột vượt vạch. Hãy nhớ: một cột vượt vạch trên chuỗi ngắn chỉ là một gợi ý mỏng.",
		"q": "Vì sao không nên chọn bậc mô hình chỉ vì một cột vượt vạch?",
		"a": "Vì trên chuỗi ngắn, cột vượt vạch có thể chỉ do tình cờ, nên nó chỉ là một gợi ý mỏng chứ không phải bằng chứng."
	},
	"ts-ar": {
		"s": "Thẻ này nói về mô hình tự hồi quy, gọi tắt là AR, tức đoán tuần này từ vài tuần trước. Đáng biết vì nó là nền của rất nhiều mô hình dự báo, và dễ bị hiểu sai ý nghĩa của hệ số. Giả sử tuần này bằng mười cộng không phẩy năm lần tuần trước. Nếu tuần trước có bốn mươi form thì dự báo là mười cộng hai mươi, bằng ba mươi. Tuần sau nữa là hai mươi lăm, rồi hai mươi hai phẩy năm, và cứ thế dần về mức hai mươi. Con số không phẩy năm không có nghĩa là một nửa số form đến từ tuần trước. Nó chỉ là độ bám của chuỗi, trên một chuỗi được cho là dừng. Nếu độ bám này từ một trở lên thì chuỗi không dừng và dự báo xa sẽ chạy mất hoặc nổ tung. Hãy nhớ: hệ số không phẩy năm là độ bám, không phải một nửa số form đến từ tuần trước theo nghĩa nguyên nhân.",
		"q": "Nếu tuần này bằng mười cộng không phẩy năm lần tuần trước, và tuần trước có bốn mươi form, dự báo là bao nhiêu?",
		"a": "Dự báo là ba mươi form, vì mười cộng không phẩy năm nhân bốn mươi bằng ba mươi."
	},
	"ts-ma": {
		"s": "Thẻ này nói về phần MA trong mô hình ARIMA, và đáng biết vì tên gọi của nó dễ gây nhầm. MA ở đây không phải trung bình trượt mà bạn hay dùng để làm mượt. Nó là trí nhớ về các cú sốc cũ. Ví dụ một tuần lỗi tracking làm form hụt mười lăm, rồi tuần sau vẫn còn vương lại một phần. Giả sử mức trung bình là bốn mươi, hệ số là không phẩy năm, và cú sốc tuần trước là âm mười lăm. Khi đó dự báo tuần này là bốn mươi cộng không phẩy năm nhân âm mười lăm, bằng ba mươi hai phẩy năm. Sau một bước, nếu không có cú sốc mới thì phần vương lại này tắt hẳn. Trung bình trượt thì khác, vì nó cộng các giá trị cũ rồi chia ra. Đừng trộn hai khái niệm này trong báo cáo. Hãy nhớ: làm mượt thì cộng các tuần, còn MA của ARIMA thì nhớ cú sốc.",
		"q": "MA trong ARIMA khác trung bình trượt ở điểm nào?",
		"a": "Trung bình trượt cộng các giá trị tuần cũ để làm mượt, còn MA của ARIMA ghi nhớ các cú sốc cũ."
	},
	"ts-arima": {
		"s": "Thẻ này nói về ARIMA và SARIMAX, và đáng biết vì nó cho bạn thứ tự các bước dựng mô hình dự báo. Ý chính là lấy hiệu trước, rồi mới áp dụng AR và MA lên phần thay đổi. Ví dụ số form có xu hướng, bạn lấy hiệu một lần rồi mô hình hóa phần thay đổi, đó là ARIMA với d bằng một. Nếu có mùa theo tuần thì cần SARIMA với chu kỳ bảy ngày. Nếu thêm một cột khuyến mãi thì gọi là SARIMAX, nhưng bạn phải biết khuyến mãi của tuần tới. Nếu chưa biết, bạn đang đoán luôn cả khuyến mãi, và khoảng dự báo phải rộng hơn cho phần đoán đó. Bỏ quên điều này sẽ cho một khoảng tin cậy hẹp giả. Hãy nhớ: nếu khuyến mãi tuần tới vẫn là dấu hỏi thì mô hình không được giả vờ đã biết.",
		"q": "Khi dùng SARIMAX mà chưa biết khuyến mãi tuần tới, điều gì phải thay đổi?",
		"a": "Phải tính cả việc đoán khuyến mãi vào độ bất định, nên khoảng dự báo phải rộng hơn, không được giả vờ đã biết."
	},
	"math-vec": {
		"s": "Thẻ này nói về véctơ, tức một danh sách số có thứ tự, và đáng biết vì mọi dữ liệu bảng của bạn đều có thể viết thành véctơ. Ví dụ một tuần quảng cáo chi mười triệu và thu tám mươi form, viết thành mười rồi tám mươi. Nếu đổi chỗ hai số thành tám mươi rồi mười, đó là một tuần hoàn toàn khác, vì ô đầu là chi tiêu chứ không phải số form. Cộng hai véctơ hay nhân véctơ với một số đều làm theo từng ô. Véctơ cũng không tự có thứ tự lớn hơn nhỏ hơn, trừ khi bạn chọn một cách đo như độ dài. Và đừng cộng các ô của cùng một véctơ để ra một điểm, vì như thế là trộn hai đơn vị khác nhau, triệu đồng và số form. Hãy nhớ: đổi thứ tự các ô là đổi ý nghĩa của véctơ.",
		"q": "Vì sao đổi chỗ chi tiêu và số form trong một véctơ lại thành một tuần khác?",
		"a": "Vì mỗi vị trí có một ý nghĩa riêng, ô đầu là chi tiêu còn ô thứ hai là số form, nên đổi thứ tự là đổi ý nghĩa."
	},
	"math-add": {
		"s": "Thẻ này nói về hai phép cơ bản của véctơ: cộng từng ô và nhân một số, và đáng biết vì nó là nền của đại số tuyến tính. Ví dụ tuần thứ nhất là mười triệu chi và tám mươi form, tuần thứ hai là hai triệu chi và năm form. Cộng hai tuần cho mười hai triệu và tám mươi lăm form. Nhân tuần đầu với hai cho hai mươi triệu và một trăm sáu mươi form, nghĩa là cả chi tiêu lẫn form cùng gấp đôi, chứ không phải chỉ một ô. Một tập cộng và nhân số mà vẫn nằm trong tập, và có véctơ không, gọi là không gian véctơ. Một đường thẳng đi qua gốc là không gian con, còn đường không qua gốc thì không, vì nhân hai làm điểm nhảy ra khỏi đường. Hãy nhớ: nhân một số phải đụng đến mọi ô, không được chỉ đụng một ô.",
		"q": "Nhân tuần chi mười triệu thu tám mươi form với hai thì ra gì?",
		"a": "Ra hai mươi triệu và một trăm sáu mươi form, vì mọi ô đều được nhân hai."
	},
	"math-dot": {
		"s": "Thẻ này nói về tích vô hướng, một phép đo xem hai véctơ cùng hướng đến mức nào, và đáng biết vì nó xuất hiện khắp nơi, từ hồi quy đến độ giống nhau. Cách tính là nhân từng cặp ô tương ứng rồi cộng lại. Ví dụ tuần A là hai và ba, tuần B là bốn và một. Tích vô hướng là hai nhân bốn cộng ba nhân một, bằng mười một. Còn hai trục, một không và không một, cho kết quả bằng không, nghĩa là hai trục không cùng hướng chút nào. Nếu chia tích này cho tích hai độ dài, bạn được góc giữa hai véctơ, ở ví dụ trên cho khoảng không phẩy bảy bốn, tức khá cùng hướng. Nếu không chia cho độ dài, véctơ dài sẽ cho tích lớn chỉ vì nó dài. Hãy nhớ: vuông góc nghĩa là tích bằng không, và không có nghĩa là không liên quan theo mọi nghĩa đời thường.",
		"q": "Tích vô hướng bằng không cho bạn biết điều gì về hai véctơ?",
		"a": "Hai véctơ vuông góc, tức không cùng hướng chút nào, chứ không có nghĩa là chúng không liên quan theo mọi nghĩa."
	},
	"math-mat": {
		"s": "Thẻ này nói về ma trận, và đáng biết vì ma trận là cỗ máy biến một véctơ thành một véctơ khác. Ví dụ một ma trận có hàng đầu là hai và không, hàng hai là không và một. Đưa tuần ba triệu và bốn mươi form vào, nó trả ra sáu triệu và bốn. Chi tiêu được nhân đôi, còn số form giữ nguyên. Cách tính là mỗi hàng của ma trận lấy tích vô hướng với véctơ đầu vào, và cho ra đúng một ô của kết quả. Hàng đầu chấm ra sáu, hàng hai chấm ra bốn. Cộng hai ma trận là cộng từng ô và chỉ làm được khi cùng cỡ. Còn nhân ma trận là một phép khác, không phải nhân từng ô. Hãy nhớ: ma trận là một máy biến số, không phải một bảng báo cáo.",
		"q": "Mỗi ô của kết quả khi nhân ma trận với véctơ được tính từ đâu?",
		"a": "Mỗi ô là tích vô hướng của một hàng của ma trận với véctơ đầu vào."
	},
	"math-mul": {
		"s": "Thẻ này nói về phép nhân ma trận, và đáng biết vì rất nhiều người nhân sai cỡ. Quy tắc là hàng của ma trận bên trái gặp cột của ma trận bên phải. Ví dụ ma trận A cỡ hai hàng ba cột nhân với một cột B gồm ba số thì cho ra hai số. Còn nhân A với một cột chỉ có hai số thì không làm được, vì số cột của A phải bằng số hàng của B. Cụ thể, nếu hàng một của A là một, hai, không và cột B là một, hai, một, thì ô đầu bằng một cộng bốn cộng không, tức năm. Ngay cả khi cả hai thứ tự nhân cùng tồn tại, kết quả thường khác nhau. Phép nhân từng ô là một phép khác, và hồi quy không dùng nó để tính hệ số. Hãy nhớ: cỡ không khớp thì không có phép nhân, đừng ép ra một kết quả.",
		"q": "Khi nào hai ma trận không thể nhân với nhau?",
		"a": "Khi số cột của ma trận bên trái không bằng số hàng của ma trận bên phải, lúc đó phép nhân không tồn tại."
	},
	"math-det": {
		"s": "Thẻ này nói về định thức, một con số cho biết ma trận có làm hình bị ép dẹp hay không. Đáng biết vì nó cho bạn biết ma trận có hoàn tác được hay không. Với ma trận hai nhân hai, định thức là tích đường chéo chính trừ tích đường chéo phụ. Ví dụ ma trận có hàng một là hai và không, hàng hai là không và một có định thức là hai, nên diện tích gấp đôi. Còn ma trận có hàng một là một và hai, hàng hai là hai và bốn có định thức bằng không, vì hàng dưới gấp hai lần hàng trên, và mặt phẳng bị ép thành một đường. Định thức khác không thì ma trận khả nghịch, tức có đúng một ma trận hoàn tác. Bằng không thì không có. Hãy nhớ: định thức bằng không là mất đi một hướng, không phải ma trận nhỏ.",
		"q": "Định thức bằng không cho bạn biết điều gì?",
		"a": "Ma trận ép hình bị dẹp, mất đi một hướng, nên không thể hoàn tác được."
	},
	"math-sys": {
		"s": "Thẻ này nói về hệ phương trình tuyến tính, tức đi tìm điểm nằm trên mọi đường cùng lúc, và đáng biết vì hồi quy cũng là một hệ như vậy. Ví dụ hai điều kiện: x cộng y bằng ba, và x trừ y bằng một. Cộng hai phương trình lại được hai x bằng bốn, nên x bằng hai và y bằng một. Hai đường gặp nhau tại một điểm. Nhưng nếu đổi điều kiện sau thành hai x cộng hai y bằng năm, thì hai đường song song, không có điểm nào thỏa cả hai. Nói chung, hệ có nghiệm duy nhất khi ma trận vuông và khả nghịch, có vô số nghiệm khi các hàng dư thừa mà vẫn khớp, và vô nghiệm khi các hàng mâu thuẫn. Hãy nhớ: không có điểm chung thì đừng lấy một điểm cho đủ bài.",
		"q": "Khi nào một hệ phương trình tuyến tính vô nghiệm?",
		"a": "Khi các hàng mâu thuẫn nhau, chẳng hạn hai đường song song nên không có điểm chung."
	},
	"math-ls": {
		"s": "Thẻ này nói về bình phương tối thiểu, cách chọn một đáp án khi hệ phương trình không có nghiệm đúng, và đáng biết vì đó chính là hồi quy. Ví dụ ba tuần có chi một, hai, ba triệu và thu hai, hai, năm form, ba điểm này không nằm trên cùng một đường thẳng. Vẫn có một đường làm tổng bình phương khoảng lệch nhỏ nhất, đó là form bằng một phẩy năm lần chi. Dự đoán của đường này là một phẩy năm, ba và bốn phẩy năm, nên phần dư là không phẩy năm, âm một và không phẩy năm, tổng bình phương là một phẩy năm. Điểm đặc biệt là phần dư vuông góc với cột chi tiêu, vì không phẩy năm trừ hai cộng một phẩy năm bằng không. Hãy nhớ: đây chính là đường khớp nhất của hồi quy, không phải một mẹo riêng của đại số.",
		"q": "Bình phương tối thiểu chọn đường nào khi các điểm không nằm trên một đường thẳng?",
		"a": "Chọn đường làm tổng bình phương các khoảng lệch nhỏ nhất, đó chính là đường khớp nhất của hồi quy."
	},
	"math-eig": {
		"s": "Thẻ này nói về vectơ riêng, hướng mà ma trận chỉ kéo giãn chứ không làm quay, và đáng biết vì nó cho thấy bản chất của một phép biến đổi. Ví dụ ma trận có hàng một là hai và không, hàng hai là không và một. Nó biến hướng một không thành hai không, tức chỉ kéo dài gấp đôi, nên trị riêng là hai. Nó biến hướng không một thành chính nó, nên trị riêng là một. Nhưng hướng một một bị biến thành hai một, bị lệch hướng, nên không phải vectơ riêng. Vậy trị riêng là hệ số kéo giãn, còn vectơ riêng là hướng được giữ nguyên. Phân tích riêng viết ma trận thành ba bước: đổi trục, kéo theo các trị riêng, rồi đổi trục ngược lại. Hãy nhớ: không phải hướng nào cũng là vectơ riêng, phải kiểm tra hướng ra có còn là hướng vào.",
		"q": "Làm sao biết một hướng có phải vectơ riêng của ma trận?",
		"a": "Đưa hướng đó qua ma trận, nếu kết quả vẫn cùng hướng với đầu vào, chỉ bị kéo giãn, thì đó là vectơ riêng."
	},
	"math-deriv": {
		"s": "Thẻ này nói về đạo hàm, tức độ dốc tại một chỗ, và đáng biết vì nó cho bạn biết thêm tiền vào còn hiệu quả đến đâu. Giả sử số form xấp xỉ hai mươi cộng sáu lần x trừ không phẩy một lần x bình phương, với x là số triệu chi. Độ dốc là sáu trừ không phẩy hai lần x. Lúc mới chi, mỗi triệu thêm được khoảng sáu form. Nhưng tại mức chi mười triệu, thêm một triệu chỉ còn được khoảng bốn form. Kiểm tra: ở mười một triệu có bảy mươi ba phẩy chín form, ở mười triệu có bảy mươi, chênh ba phẩy chín, rất gần bốn. Còn tại ba mươi triệu, độ dốc bằng không, nghĩa là thêm tiền không còn thêm form. Hãy nhớ: một hệ số ở đầu đường cong không phải độ dốc ở cuối đường.",
		"q": "Vì sao hệ số sáu ở đầu đường cong không còn đúng khi chi đến mười triệu?",
		"a": "Vì độ dốc thay đổi dọc đường cong, tại mười triệu mỗi triệu thêm chỉ còn khoảng bốn form."
	},
	"math-crit": {
		"s": "Thẻ này nói về điểm tới hạn, nơi độ dốc bằng không, và đáng biết vì độ dốc bằng không chưa chắc là đỉnh. Với số form xấp xỉ hai mươi cộng sáu x trừ không phẩy một x bình phương, độ dốc bằng không tại ba mươi triệu. Đó là một đỉnh, vì độ dốc đổi từ dương sang âm, và đạo hàm bậc hai bằng âm không phẩy hai, nhỏ hơn không, nghĩa là cong xuống. Ngược lại, hàm x lập phương có độ dốc bằng không tại gốc nhưng vẫn đi lên cả hai phía, nên không phải đỉnh hay đáy. Với nhiều biến, phải cong lên theo mọi hướng thì mới là đáy. Một hướng cong lên và một hướng cong xuống là điểm yên ngựa. Hãy nhớ: dừng lại chỉ vì độ dốc bằng không mà không nhìn xung quanh thì có thể đang đứng ở yên ngựa.",
		"q": "Độ dốc bằng không có chắc là đỉnh hay đáy không?",
		"a": "Không chắc, vì có thể là điểm yên ngựa hoặc điểm phẳng, cần xem độ cong xung quanh để kết luận."
	},
	"math-part": {
		"s": "Thẻ này nói về đạo hàm riêng, tức xoay một nút và giữ nguyên các nút còn lại, và đáng biết vì đó là nghĩa của hệ số trong hồi quy nhiều biến. Giả sử số form xấp xỉ hai mươi cộng sáu lần chi cộng hai lần email. Đạo hàm riêng theo chi là sáu, với điều kiện email giữ nguyên. Điều đó không nói gì về lúc email cũng thay đổi ngoài đời. Chẳng hạn nếu email tự tăng bằng một nửa chi tiêu, thì form thực chất bằng hai mươi cộng bảy lần chi, và mỗi triệu chi thêm lại đem về bảy form chứ không phải sáu. Vì vậy câu giải thích đúng cho một hệ số luôn có vế sau là giữ nguyên các biến còn lại. Hãy nhớ: giữ các nút kia là một phần của câu, bỏ nó đi thì số sáu không còn nghĩa.",
		"q": "Hệ số sáu của chi tiêu trong mô hình nhiều biến đúng với điều kiện gì?",
		"a": "Đúng khi các biến còn lại như email được giữ nguyên, không đổi."
	},
	"math-grad": {
		"s": "Thẻ này nói về gradient, hướng làm một hàm tăng nhanh nhất, và đáng biết vì đó là cách máy tự học. Hãy hình dung chi phí sai số có hình một cái bát. Gradient là hướng leo lên nhanh nhất, nên muốn giảm chi phí thì bước ngược hướng đó. Ví dụ chi phí bằng w trừ ba, rồi bình phương, và w đang là năm. Gradient là hai nhân hai, bằng bốn. Với bước học không phẩy một, w mới là năm trừ không phẩy bốn, bằng bốn phẩy sáu, tiến gần đáy ở ba. Nếu bước học quá lớn, w vọt qua đáy và chi phí tăng lên. Lưu ý gradient của hàm số form thì chỉ hướng làm form tăng, còn khi học ta đi ngược gradient của chi phí. Hãy nhớ: đi ngược gradient của chi phí, đừng đi ngược gradient của form.",
		"q": "Muốn giảm chi phí sai số thì bạn bước theo hướng nào so với gradient?",
		"a": "Bước ngược hướng gradient của chi phí."
	},
	"math-jac": {
		"s": "Thẻ này nói về Jacobian, tức đạo hàm khi có nhiều đầu ra, và đáng biết vì nó cho thấy một nút tác động lên nhiều thứ cùng lúc. Giả sử có hai nút là chi và email, và hai đầu ra là số form và số lead đủ điều kiện. Mỗi đầu ra có một đạo hàm riêng theo mỗi nút, nên ta có một bảng bốn ô. Ví dụ form thay đổi sáu theo chi và hai theo email, còn lead thay đổi hai theo chi và một theo email. Nếu chi tăng một và email tăng ba, thì form tăng khoảng sáu cộng sáu, bằng mười hai, còn lead tăng khoảng hai cộng ba, bằng năm. Bảng này chỉ đúng cho bước nhỏ và không nói gì về nguyên nhân. Nếu chỉ có một đầu ra, bảng thu về đúng gradient. Hãy nhớ: một nút tác động đến nhiều đầu ra thì một hệ số là chưa đủ.",
		"q": "Jacobian có bao nhiêu ô khi có hai nút và hai đầu ra?",
		"a": "Có bốn ô, mỗi ô là đạo hàm riêng của một đầu ra theo một nút."
	},
	"math-hess": {
		"s": "Thẻ này nói về Hessian, bảng các đạo hàm bậc hai, và đáng biết vì nó cho bạn biết một điểm là đáy hay yên ngựa. Với một nút, hàm w trừ hai rồi bình phương có đạo hàm bậc hai bằng hai, tức cong lên, nên là một đáy. Với hai nút thì khác. Hàm x bình phương trừ y bình phương cong lên theo x và cong xuống theo y. Đạo hàm bậc nhất bằng không tại gốc, nhưng đó không phải đáy mà là yên ngựa. Bảng đạo hàm bậc hai của nó có một số dương và một số âm, đó là dấu hiệu của yên ngựa. Điểm là đáy khi mọi hướng đều cong lên. Chi phí bình phương tối thiểu cong lên theo mọi hướng, miễn là các cột còn độc lập. Hãy nhớ: một đạo hàm bậc hai dương không đủ kết luận khi còn các nút khác.",
		"q": "Điểm nào là đáy cục bộ theo Hessian?",
		"a": "Điểm mà mọi hướng đều cong lên, tức Hessian xác định dương."
	},
	"math-taylor": {
		"s": "Thẻ này nói về xấp xỉ tuyến tính, hay chuỗi Taylor, nghĩa là gần một điểm thì đường cong giống tiếp tuyến của nó. Đáng biết vì ta hay dùng độ dốc để dự đoán, mà đoán xa thì sai. Tại mức chi mười triệu, tiếp tuyến dùng độ dốc bốn form mỗi triệu, và form hiện là bảy mươi. Thêm không phẩy hai triệu thì tiếp tuyến cho bảy mươi phẩy tám, rất sát giá trị thật là bảy mươi phẩy bảy chín sáu. Nhưng nhảy thêm hai mươi triệu thì tiếp tuyến cho một trăm năm mươi, trong khi giá trị thật chỉ một trăm mười, vì đường cong đã cong đi. Phần bị bỏ chỉ nhỏ khi bạn ở gần điểm gốc. Đừng mang tiếp tuyến sang một mức chi chưa từng thấy rồi gọi đó là dự báo. Hãy nhớ: tiếp tuyến đúng tại một chỗ, mang nó đi xa là một giả định, không phải một dự báo.",
		"q": "Vì sao tiếp tuyến dự đoán sai khi tăng chi thêm hai mươi triệu?",
		"a": "Vì tiếp tuyến chỉ đúng gần điểm gốc, còn xa thì đường cong đã cong đi nên giá trị thật nhỏ hơn nhiều."
	},
	"math-p": {
		"s": "Thẻ này nói về xác suất, và đáng biết vì mọi con số xác suất đều cần một mẫu số. Xác suất là một phần của cả tập hợp đang xét, là một số từ không đến một. Ví dụ có ba mươi form trên một nghìn lượt click, thì xác suất có form sau một click là ba mươi chia một nghìn, bằng không phẩy không ba. Con số này không phải ba mươi, và cũng không thể gọi là khá chắc nếu chưa nêu mẫu số. Phần còn lại, chín trăm bảy mươi click không có form, cho không phẩy chín bảy, và cộng hai phần lại bằng một. Với cả tập hợp, tổng các xác suất luôn bằng một. Hai biến cố không thể xảy ra cùng lúc thì xác suất của một trong hai là tổng hai xác suất. Hãy nhớ: chưa có mẫu số thì chưa có xác suất.",
		"q": "Ba mươi form trên một nghìn click cho xác suất có form là bao nhiêu?",
		"a": "Là không phẩy không ba, tức ba phần trăm."
	},
	"math-or": {
		"s": "Thẻ này nói về quy tắc cộng xác suất, và đáng biết vì cộng hai phần mà quên phần chồng nhau thì sẽ đếm dư. Ví dụ trong một nhóm khách, không phẩy hai tám đến từ Google Display Network, không phẩy hai có form, và không phẩy không năm vừa đến từ mạng đó vừa có form. Xác suất đến từ mạng đó hoặc có form là không phẩy hai tám cộng không phẩy hai, rồi trừ không phẩy không năm, bằng không phẩy bốn ba. Vì sao phải trừ? Vì nhóm vừa đến từ mạng đó vừa có form đã bị đếm hai lần. Nếu quên số trừ, kết quả là không phẩy bốn tám, lớn hơn sự thật, và với các phần lớn có thể vượt quá một. Hãy nhớ: phần chồng nhau không được cộng hai lần.",
		"q": "Vì sao khi cộng xác suất của hai biến cố phải trừ đi phần chung?",
		"a": "Vì phần chung đã bị đếm hai lần, một lần ở mỗi biến cố."
	},
	"math-and": {
		"s": "Thẻ này nói về quy tắc nhân xác suất, dùng khi cả hai điều cùng xảy ra, và đáng biết vì nó dễ bị nhầm với tỷ lệ riêng của một nhóm. Ví dụ có không phẩy bốn khách đến từ Google Display Network. Trong số đó, không phẩy một để lại form. Xác suất vừa đến từ mạng đó vừa có form là không phẩy bốn nhân không phẩy một, bằng không phẩy không bốn. Con số này là phần của cả tập khách, không phải tỷ lệ form của riêng nhóm từ mạng đó, vì tỷ lệ ấy vẫn là không phẩy một. Cách nghĩ dễ nhất là đi qua hai cửa: cửa đầu là đến từ mạng đó, cửa sau là để lại form, và cửa sau được tính khi đã biết cửa trước. Hãy nhớ: nhân là đi qua hai cửa, và cửa sau được tính khi đã biết cửa trước.",
		"q": "Không phẩy không bốn trong ví dụ là phần của nhóm nào?",
		"a": "Là phần của cả tập khách vừa đến từ mạng đó vừa có form, còn tỷ lệ form của riêng nhóm từ mạng đó vẫn là không phẩy một."
	},
	"math-perm": {
		"s": "Thẻ này nói về hoán vị, nghĩa là đổi thứ tự là một cách xếp khác, và đáng biết vì nó cho bạn biết khi nào dùng phép đếm nào. Ví dụ có tám KOL, tức người có sức ảnh hưởng, cần chọn ba người và thứ tự phát biểu cũng khác nhau. Có tám lần bảy lần sáu, bằng ba trăm ba mươi sáu cách. Cũng có thể tính bằng cách lấy tám giai thừa chia cho năm giai thừa, ra cùng kết quả. Nếu bạn chỉ cần đúng bộ ba người mà không quan tâm ai nói trước, thì ba trăm ba mươi sáu không phải con số đúng. Và đây mới là phép đếm, chưa phải xác suất. Muốn có xác suất, bạn còn phải chia cho tổng số cách được coi là toàn bộ tập hợp. Hãy nhớ: ba trăm ba mươi sáu là số cách xếp, chưa phải xác suất của một cách.",
		"q": "Chọn ba trong tám KOL có tính thứ tự phát biểu thì có bao nhiêu cách?",
		"a": "Có ba trăm ba mươi sáu cách."
	},
	"math-comb": {
		"s": "Thẻ này nói về tổ hợp, nghĩa là cùng một bộ thì xoay thế nào cũng chỉ tính một, và đáng biết vì dùng nhầm hoán vị sẽ làm số đếm phình lên. Ví dụ mời ba KOL ngồi cùng một bàn, ai ngồi đâu cũng như nhau. Khi đó có năm mươi sáu bộ khác nhau, không phải ba trăm ba mươi sáu. Cách tính là lấy số hoán vị chia cho sáu, vì mỗi bộ ba người đã bị đếm sáu lần, ứng với sáu cách xếp thứ tự của ba người. Ba trăm ba mươi sáu chia sáu bằng năm mươi sáu. Nếu nhân chi phí theo ba trăm ba mươi sáu thì bạn đã tính nhiều gấp sáu lần số bộ thật. Hãy nhớ: một bàn ba người là một bộ, không phải sáu bàn.",
		"q": "Vì sao số tổ hợp nhỏ hơn số hoán vị?",
		"a": "Vì tổ hợp không phân biệt thứ tự, nên mỗi bộ chỉ tính một lần thay vì nhiều lần theo các cách xếp."
	},
	"math-disj": {
		"s": "Thẻ này nói về một nhầm lẫn kinh điển: hai biến cố rời nhau không có nghĩa là độc lập. Đáng biết vì nhầm chúng sẽ cho bạn xác suất dương cho một việc không bao giờ xảy ra. Ví dụ một click chỉ đến từ một kênh, xác suất từ Google Display Network là không phẩy bốn và từ TikTok là không phẩy ba. Một click không thể đến từ cả hai, nên phần giao bằng không. Nếu hai biến cố độc lập, phần giao sẽ phải bằng tích hai xác suất, tức không phẩy mười hai. Nhưng thực tế nó bằng không, nên hai biến cố này không độc lập. Thật ra biết click đến từ kênh này là biết ngay nó không đến từ kênh kia. Hãy nhớ: hai biến cố có thể xảy ra riêng lẻ nhưng không bao giờ cùng lúc thì chúng phụ thuộc nhau.",
		"q": "Hai biến cố rời nhau, mỗi cái có xác suất dương, thì có độc lập không?",
		"a": "Không, chúng phụ thuộc nhau, vì biết cái này xảy ra là biết chắc cái kia không xảy ra."
	},
	"math-kind": {
		"s": "Thẻ này nói về ba cách hiểu xác suất: cổ điển, tần suất và mức độ tin. Đáng biết vì cùng một con số có thể mang ba ý nghĩa rất khác nhau. Tung một đồng xu cân đối cho xác suất cổ điển là một phần hai. Tỷ lệ form của một tuần là xác suất theo tần suất. Còn khả năng khách này quay lại, khi mới có một khách và chưa có lịch sử, là một mức tin, và không nên gọi là một nửa cho đến khi có căn cứ. Ba cách hiểu này không cộng được vào nhau. Ví dụ mười hai form trên bốn trăm phiên cho ba phần trăm, đó là tần suất của riêng mẫu này, không nâng thành xác suất cổ điển của mọi khách. Hãy nhớ: ba phần trăm của một tuần là một tỷ lệ mẫu, chưa phải một quy luật đồng khả năng.",
		"q": "Mười hai form trên bốn trăm phiên cho ba phần trăm, đó là loại xác suất nào?",
		"a": "Đó là tần suất của mẫu này, không phải xác suất cổ điển của mọi khách."
	},
	"ds-type": {
		"s": "Thẻ này nói về các kiểu dữ liệu, và đáng biết vì chọn sai kiểu thì phần mềm vẫn ra một con số nhưng con số đó vô nghĩa. Có ba loại chính. Chi tiêu là kiểu số, có khoảng cách giữa các giá trị. Kênh quảng cáo là kiểu chữ không thứ tự, chỉ có các nhóm. Số sao từ một đến năm là kiểu chữ có thứ bậc, có hướng nhưng khoảng giữa các bậc chưa chắc bằng nhau, chẳng hạn từ một lên hai chưa chắc giống từ bốn lên năm sao. Nếu bạn mã hóa kênh Google, Meta, TikTok thành một, hai, ba, thì câu trung bình mã kênh là một câu vô nghĩa. Với kiểu có thứ bậc, lấy trung bình cũng là thêm một giả định. Hãy nhớ: sai kiểu thì máy vẫn ra một con số, nhưng con số đó không mang ý nghĩa nào.",
		"q": "Vì sao không nên lấy trung bình của mã kênh một, hai, ba?",
		"a": "Vì kênh là dữ liệu chữ không thứ tự, mã số chỉ là nhãn, nên trung bình của nó vô nghĩa."
	},
	"ds-center": {
		"s": "Thẻ này nói về trung bình và trung vị, và đáng biết vì chọn nhầm thước đo sẽ làm bạn hiểu sai mức điển hình. Ví dụ số form của tám tuần là hai, bốn, bốn, bốn, năm, năm, bảy, chín. Tổng bốn mươi chia tám, trung bình là năm. Trung vị là trung bình của giá trị thứ tư và thứ năm, tức bốn cộng năm chia hai, bằng bốn phẩy năm. Hai số gần nhau vì dãy không có giá trị cực đoan. Giờ thay chín bằng chín mươi, tức một tuần bất thường. Tổng thành một trăm hai mươi mốt, trung bình tăng lên khoảng mười lăm, gấp ba. Nhưng trung vị vẫn là bốn phẩy năm. Hãy nhớ: cần tổng thì dùng trung bình, cần mức điển hình khi có giá trị cực đoan thì hỏi trung vị.",
		"q": "Khi có một tuần bất thường, thước đo nào ổn định hơn: trung bình hay trung vị?",
		"a": "Trung vị, vì giá trị cực đoan kéo trung bình đi nhưng không đụng vào trung vị."
	},
	"ds-mode": {
		"s": "Thẻ này nói về mode, tức giá trị xuất hiện nhiều lần nhất, và đáng biết vì nó dùng được cả cho chữ lẫn số. Ví dụ với dãy hai, bốn, bốn, bốn, năm, năm, bảy, chín, số bốn xuất hiện ba lần, nhiều nhất, nên mode là bốn. Nếu số năm cũng xuất hiện ba lần thì dãy có hai mode. Với cột kênh quảng cáo, mode là kênh có nhiều khách nhất. Mode không cho biết các giá trị khác nằm xa đến đâu. Hai mode nghĩa là hai đỉnh, và một trung bình nằm giữa hai đỉnh đó có thể là chỗ gần như không ai gặp. Với số liên tục đo rất chi tiết, mỗi giá trị có thể chỉ gặp một lần, và mode mất ý nghĩa cho đến khi bạn gom thành các khoảng. Hãy nhớ: giá trị gặp nhiều nhất không phải là trung bình, cũng không phải trung vị.",
		"q": "Mode của cột kênh quảng cáo cho bạn biết điều gì?",
		"a": "Cho biết kênh có nhiều khách nhất."
	},
	"ds-q": {
		"s": "Thẻ này nói về tứ phân vị, cách cắt một dãy số đã sắp thành bốn phần gần đều nhau. Đáng biết vì bạn sẽ gặp nó rất thường. Hãy lấy dãy tám số: hai, bốn, bốn, bốn, năm, năm, bảy, chín. Nửa dưới gồm hai, bốn, bốn, bốn, có trung vị là bốn. Nửa trên gồm năm, năm, bảy, chín, có trung vị là sáu. Vậy tứ phân vị thứ nhất là bốn, tứ phân vị thứ hai chính là trung vị, bằng bốn phẩy năm, và tứ phân vị thứ ba là sáu. Hiệu của hai đầu, sáu trừ bốn, ra hai, và đó gọi là khoảng tứ phân vị. Phân vị, hay percentile, là cùng ý tưởng với tỷ lệ tùy ý. Mỗi phần mềm có thể cắt lệch một chút. Cuối cùng, hãy nhớ một điều thôi: tứ phân vị thứ nhất không phải là số hai mươi lăm, cũng không phải hai mươi lăm phần trăm của trung bình. Nó là một vị trí trong dãy đã sắp xếp.",
		"q": "Với dãy hai, bốn, bốn, bốn, năm, năm, bảy, chín, tứ phân vị thứ ba bằng mấy?",
		"a": "Bằng sáu, là trung vị của nửa trên gồm năm, năm, bảy, chín."
	},
	"ds-pct": {
		"s": "Thẻ này nói về phân vị, hay percentile, và vì sao nó chỉ là một vị trí trong dãy đã sắp xếp chứ không phải phép nhân. Đáng biết vì cùng một con số có thể ra hai kết quả khác nhau tùy phần mềm. Quay lại dãy tám số trước đó, số lớn nhất là chín. Phân vị thứ chín mươi theo cách nội suy của Excel ra bảy phẩy sáu. Cách nội suy là tìm vị trí bảy phẩy ba, nằm giữa số thứ bảy là bảy và số thứ tám là chín, rồi lấy bảy cộng không phẩy ba nhân hai. Còn nếu lấy quan sát ở bậc gần nhất thì ra chín. Hai kết quả lệch nhau thấy rõ vì mẫu quá nhỏ. Vì vậy bạn cần ghi rõ mình dùng cách cắt nào, và không trộn tứ phân vị của máy này với máy kia. Điều cần nhớ: phân vị thứ chín mươi không phải là không phẩy chín nhân với số lớn nhất.",
		"q": "Vì sao hai phần mềm có thể cho phân vị thứ chín mươi khác nhau?",
		"a": "Vì không có một công thức duy nhất. Có cách lấy một quan sát, có cách nội suy giữa hai quan sát, nên cần ghi rõ cách cắt."
	},
	"ds-var": {
		"s": "Thẻ này nói về phương sai, thước đo độ phân tán, và vì sao với mẫu ta chia cho số quan sát trừ một. Đáng biết vì chọn nhầm cách chia sẽ làm bạn ước lượng thấp hơn sự thật. Phương sai là trung bình của bình phương độ lệch quanh trung bình. Lấy dãy hai, bốn, bốn, bốn, năm, năm, bảy, chín, trung bình là năm. Các độ lệch so với năm là âm ba, âm một, âm một, âm một, không, không, hai, bốn. Bình phương lên rồi cộng lại được ba mươi hai. Nếu đây là một mẫu, ta chia cho bảy và ra khoảng bốn phẩy năm bảy. Nếu bạn có toàn bộ tổng thể, ta chia cho tám và ra đúng bốn. Lý do là trung bình mẫu bám sát chính mẫu đó nên độ phân tán bị co lại. Còn một ý cần nhớ: đơn vị của bốn phẩy năm bảy là đơn vị bình phương, nên đừng gọi nó là số form.",
		"q": "Khi nào chia cho số quan sát trừ một, khi nào chia cho số quan sát?",
		"a": "Chia cho số quan sát trừ một khi dữ liệu là một mẫu. Chia cho số quan sát khi có toàn bộ tổng thể."
	},
	"ds-sd": {
		"s": "Thẻ này nói về độ lệch chuẩn, và vì sao nó dễ dùng hơn phương sai khi báo cáo. Đáng biết vì nó đưa độ phân tán về đúng đơn vị của dữ liệu gốc. Độ lệch chuẩn là căn bậc hai của phương sai. Với dãy số form theo tuần, phương sai mẫu là bốn phẩy năm bảy, tính theo form bình phương. Lấy căn lên được khoảng hai phẩy một bốn form. Nếu bạn viết độ rộng là bốn phẩy năm bảy form thì đã sai đơn vị. Với toàn bộ tổng thể, phương sai là bốn nên độ lệch chuẩn là đúng hai form. Một quy tắc kinh nghiệm: nếu dữ liệu có hình gần như quả chuông, khoảng một độ lệch chuẩn mỗi bên trung bình chứa phần lớn quan sát. Đừng áp quy tắc ấy cho dữ liệu lệch nặng. Điều cần nhớ: phương sai dùng để cộng các phần độc lập, còn độ lệch chuẩn dùng để nói bằng đơn vị quen thuộc, như số form mỗi tuần.",
		"q": "Vì sao báo cáo thường dùng độ lệch chuẩn thay vì phương sai?",
		"a": "Vì độ lệch chuẩn cùng đơn vị với dữ liệu gốc, còn phương sai mang đơn vị bình phương nên khó diễn giải."
	},
	"ds-range": {
		"s": "Thẻ này nói về khoảng biến thiên, hay range, thước đo độ phân tán đơn giản nhất. Đáng biết vì nó nhanh, nhưng dễ đánh lừa bạn. Range là số lớn nhất trừ số nhỏ nhất. Ví dụ một tuần có chín form và một tuần chỉ có hai form, range là bảy form. Nhưng sáu tuần còn lại có thể nằm rất sát nhau, và range không cho bạn biết điều đó, vì nó chỉ nhìn hai đầu. Nó cũng không chia cho số quan sát và không dùng độ lệch của từng điểm. Chỉ cần gõ nhầm chín mươi thay vì chín, range nhảy vọt lên tám mươi tám, trong khi phần lớn các tuần chẳng đổi. Đó là lý do range đứng trước phương sai trong phần mô tả, nhưng không thay thế được phương sai. Hãy dùng nó như một cái nhìn nhanh. Điều cần nhớ: hai đầu của dãy không phải là cả tập dữ liệu.",
		"q": "Vì sao range dễ bị đánh lừa?",
		"a": "Vì nó chỉ dựa vào số lớn nhất và nhỏ nhất, nên một giá trị gõ nhầm làm nó thay đổi mạnh dù phần lớn dữ liệu không đổi."
	},
	"ds-mad": {
		"s": "Thẻ này nói về độ lệch tuyệt đối trung bình, thường gọi tắt là MAD, và vì sao nó không phải là độ lệch chuẩn. Đáng biết vì hai con số này hay bị lẫn với nhau. Cách tính MAD rất đơn giản: lấy từng độ lệch so với trung bình, bỏ dấu âm, cộng lại, chia cho số quan sát rồi dừng, không lấy căn. Với dãy tám số quen thuộc, tổng các độ lệch đã bỏ dấu là mười hai, chia cho tám ra một phẩy năm form. Trong khi đó độ lệch chuẩn mẫu của cùng dãy khoảng hai phẩy một bốn, vì phải bình phương, chia cho bảy rồi mới lấy căn. Có nhiều định nghĩa MAD khác nhau, nên khi dùng hãy nói rõ bạn dùng cách nào. Không có phép nào biến một phẩy năm thành hai phẩy một bốn chỉ bằng một lần lấy căn. Điều cần nhớ: một phẩy năm không phải là độ lệch chuẩn.",
		"q": "Với dãy tám số trước, MAD bằng bao nhiêu, và nó có bằng độ lệch chuẩn không?",
		"a": "MAD bằng một phẩy năm, còn độ lệch chuẩn mẫu khoảng hai phẩy một bốn. Hai số này không thay thế nhau."
	},
	"ds-cov": {
		"s": "Thẻ này nói về hiệp phương sai, đo xem hai cột số có cùng đi lên hay đi xuống với nhau không. Đáng biết vì nó là nền cho khái niệm tương quan. Hiệp phương sai dương khi hai cột thường nằm cùng một phía so với trung bình của chúng, và âm khi nằm ở hai phía đối nhau. Hãy xem ba tuần có chi tiêu là một, hai, ba triệu và số form là hai, hai, năm. Trung bình chi là hai, trung bình form là ba. Nhân hai độ lệch của từng tuần ta được một, không và hai, tổng là ba. Chia cho hai, ta có hiệp phương sai mẫu là một phẩy năm. Con số này mang đơn vị triệu nhân form. Nếu đổi chi tiêu sang đồng, nó sẽ nhân lên một triệu lần, nên bạn không thể gọi nó là lớn hay nhỏ khi chưa có thước. Điều cần nhớ: dấu thì dùng được, còn độ lớn thì chưa, chừng nào đơn vị còn lẫn trong con số.",
		"q": "Hiệp phương sai dương cho bạn biết điều gì?",
		"a": "Hai cột thường nằm cùng một phía so với trung bình của chúng, tức có xu hướng cùng tăng hoặc cùng giảm."
	},
	"ds-corr": {
		"s": "Thẻ này nói về tương quan, phiên bản của hiệp phương sai đã bỏ được đơn vị. Đáng biết vì nó cho bạn một con số so sánh được, nhưng dễ bị hiểu thành quan hệ nhân quả. Tương quan là hiệp phương sai chia cho độ lệch chuẩn của cả hai cột. Với ba tuần chi tiêu và số form ở bài trước, hiệp phương sai là một phẩy năm, độ lệch chuẩn của chi là một, và của form là căn của ba, khoảng một phẩy bảy ba. Chia ra được khoảng không phẩy tám bảy. Nếu đổi chi tiêu sang đồng, kết quả vẫn là không phẩy tám bảy, vì đơn vị đã bị triệt tiêu. Nhưng ba điểm là quá ít để đưa vào báo cáo, và một điểm xa cũng có thể kéo con số đi rất nhiều. Điều cần nhớ: bỏ đơn vị xong thì tương quan vẫn chỉ nói rằng hai cột đi cùng nhau, chứ không nói cột này kéo cột kia.",
		"q": "Đổi đơn vị chi tiêu từ triệu sang đồng thì tương quan có đổi không?",
		"a": "Không đổi, vì tương quan đã chia cho độ lệch chuẩn nên đơn vị bị triệt tiêu."
	},
	"c0-order": {
		"s": "Thẻ này nói về việc nên học theo đúng thứ tự các khóa trong giáo trình. Đáng biết vì mỗi khóa đứng sau dựa vào kiến thức của khóa đứng trước. Khóa không là phần đặt câu hỏi cho bài toán. Khóa một dạy cách làm việc với máy tính. Phần toán và phần mô tả là bản ngắn, và bạn có thể chọn học hoặc không. Khóa hai mới đến suy diễn thống kê, còn khóa ba là mô hình dự đoán từ một dòng dữ liệu. Giả sử bạn nhảy thẳng tới rừng cây quyết định khi chưa hiểu một dòng dữ liệu là gì, thì bạn sẽ không có gì để đếm. Thứ tự này chính là thứ tự các file của giáo trình, từ mở đầu, Excel, Python, toán, thống kê, học máy, cho đến dự án tổng kết ở cuối. Các phần tùy chọn vẫn nằm đúng chỗ của chúng. Điều cần nhớ: nhảy cóc làm mất mối nối giữa các ý.",
		"q": "Vì sao không nên nhảy thẳng tới mô hình rừng cây quyết định?",
		"a": "Vì khi chưa hiểu một dòng dữ liệu là gì thì không có gì để đếm, và các khóa sau dựa vào khóa trước."
	},
	"c0-read": {
		"s": "Thẻ này nói về cách đọc các thẻ học trong sổ này, và vì sao bạn không cần xem hết một video. Mỗi thẻ chỉ trình bày một ý. Ví dụ một thẻ về tỷ lệ chuyển đổi sẽ mở bằng lý do cần ý đó, nối với ý trước, rồi đến một hình minh họa và một câu định nghĩa. Bạn dừng lại khi câu định nghĩa đã khớp với hình. Bạn có thể đánh dấu đã xem nếu muốn, nhưng sổ không chấm điểm. Về cấu trúc, một thẻ gồm tình huống, một câu giải thích dễ hiểu, một câu định nghĩa chặt chẽ và một hình riêng. Câu hỏi trắc nghiệm, bài chấm, sơ đồ tư duy và các bước cài đặt không thêm định nghĩa mới, chúng chỉ là bài luyện. Vì vậy bạn có thể nghe hoặc đọc theo nhịp của mình. Điều cần nhớ: hiểu xong một ý là xong một ý, không phải xong một video.",
		"q": "Khi nào bạn có thể dừng lại ở một thẻ?",
		"a": "Khi câu định nghĩa đã khớp với hình minh họa và bạn hiểu xong ý đó."
	},
	"crisp-biz": {
		"s": "Thẻ này nói về bước đầu tiên của quy trình CRISP-DM, tức là hiểu nghiệp vụ. Đáng biết vì câu hỏi nghiệp vụ phải có trước file dữ liệu. CRISP-DM là quy trình chuẩn cho một dự án dữ liệu. Ở bước đầu, bạn chốt ba điều: ai là người quyết định, quyết định gì, và khi nào. Ví dụ một spa muốn biết tuần sau có nên tăng ngân sách TikTok hay không. Đó mới là bài toán nghiệp vụ. File form chỉ là nguyên liệu để trả lời nó. Hiểu nghiệp vụ cũng gồm việc biết cái giá của một lần quyết định sai, chứ không phải một slide mục tiêu chung chung. Chỉ sau khi có câu hỏi đó, bước hiểu dữ liệu mới bắt đầu. Điều cần nhớ: một file dữ liệu chưa phải là một bài toán.",
		"q": "Bước hiểu nghiệp vụ cần chốt những điều gì?",
		"a": "Ai quyết định, quyết định gì, khi nào, và cái giá của một lần sai."
	},
	"crisp-data": {
		"s": "Thẻ này nói về bước hiểu dữ liệu, và vì sao dữ liệu thô chưa phải là câu trả lời. Đáng biết vì file bạn có chưa chắc đo đúng thứ bạn cần quyết định. Ví dụ cột số tin nhắn không trả lời câu hỏi khách có quay lại không. Hai điều ấy khác nhau, và đây là kiểu lệch rất thường gặp. Một khái niệm quan trọng là độ chi tiết của một dòng, tiếng Anh là grain. Một dòng có thể là một phiên, một đơn hoặc một khách. Nếu bạn nhầm grain, mọi tỷ lệ tính sau đó sẽ là tỷ lệ của grain đó, chứ không phải của câu hỏi. Vì thế hiểu dữ liệu nghĩa là kiểm tra grain, nguồn gốc và độ phủ của dữ liệu, chứ chưa phải làm mô hình. Điều cần nhớ: có một cột không có nghĩa là đã có câu trả lời.",
		"q": "Grain của một bảng dữ liệu là gì?",
		"a": "Là một dòng đại diện cho cái gì, ví dụ một phiên, một đơn hoặc một khách."
	},
	"crisp-prep": {
		"s": "Thẻ này nói về ba bước giữa của CRISP-DM: chuẩn bị dữ liệu, xây mô hình và đánh giá. Đáng biết vì có mô hình chưa có nghĩa là xong việc. Hãy hình dung có chín mươi hai khách ở lại và tám khách rời đi. Một mô hình gọi tất cả là ở lại sẽ đạt độ chính xác chín mươi hai phần trăm. Nhưng nếu mục tiêu là giữ chân người sắp rời đi thì mô hình đó giữ được không người nào. Vì vậy chuẩn bị dữ liệu là đổi bảng để câu hỏi đọc được: lọc có chủ đích, điền chỗ trống và ghi lại cách điền, không xóa chỉ vì số trông lạ. Đánh giá phải chấm bằng cái giá đã viết ở bước hiểu nghiệp vụ, trên dữ liệu chưa dùng để chọn mô hình. Điều cần nhớ: xong mô hình chưa phải là xong công việc.",
		"q": "Vì sao mô hình đạt chín mươi hai phần trăm chính xác vẫn có thể vô dụng?",
		"a": "Vì nó gọi tất cả là ở lại nên không giữ chân được người nào trong số khách sắp rời đi."
	},
	"crisp-ship": {
		"s": "Thẻ này nói về bước cuối của CRISP-DM, triển khai, tức là đưa kết quả vào quyết định thật. Đáng biết vì nhiều dự án dừng ở việc xuất file. Ví dụ ngân sách TikTok tuần sau được chỉnh theo một ngưỡng đã viết sẵn. Để gọi là triển khai, cần ba điều: có người phụ trách bấm điều chỉnh, có ngày chạy lại, và có lúc thay mô hình cũ. Thiếu ba điều đó thì mới chỉ có một bản xuất file. CRISP-DM là một vòng lặp chứ không phải một mũi tên một chiều. Nếu triển khai không có chủ và không có lịch làm lại, người dùng sẽ dùng một con số cũ mà không biết nó nói về tuần nào. Điều cần nhớ: xuất file không phải là triển khai.",
		"q": "Cần những gì để một kết quả được gọi là đã triển khai?",
		"a": "Có người phụ trách, có ngày chạy lại, và có lúc thay mô hình cũ."
	},
	"ps-open": {
		"s": "Thẻ này mở đầu phần giải quyết vấn đề, với sáu bước, mỗi bước trả lời một câu hỏi khác nhau. Đáng biết vì nó giúp bạn khỏi lao vào làm khi chưa rõ mình đang giải bài toán gì. Sáu bước gồm: xác định loại vấn đề, tách sự thật khỏi ý kiến, đặt mục tiêu theo khung SMART và sắp thứ tự ưu tiên, tìm nguyên nhân, cân nhắc phương án cùng hệ quả, rồi thực hiện và đo. Ví dụ, câu form giảm chưa phải một vấn đề. Vấn đề là tuần sau có tắt kênh này không. Mọi bước sau chỉ phục vụ câu hỏi đó. Hai buổi giữa và cuối không có video trong file gốc, nhưng vẫn là nội dung của giáo trình. Điều cần nhớ: không có video không có nghĩa là không có ý.",
		"q": "Kể tên sáu bước giải quyết vấn đề theo thẻ này.",
		"a": "Loại vấn đề, sự thật và ý kiến, SMART và ưu tiên, nguyên nhân, phương án và hệ quả, rồi thực hiện và đo."
	},
	"ps-type": {
		"s": "Thẻ này nói về việc gọi đúng loại vấn đề trước khi chọn công cụ. Đáng biết vì sai loại thì mọi bước sau đều trả lời nhầm câu hỏi. Hãy so sánh hai tình huống. Tắt một kênh quảng cáo là một lựa chọn, có ngân sách và một ngày hạn. Còn giải thích vì sao form giảm là một câu chuyện về nguyên nhân, và nó không tự trở thành một nút để tắt. Có ba loại. Vấn đề vận hành hỏi làm thế nào cho đều. Vấn đề lựa chọn hỏi chọn phương án nào. Vấn đề chẩn đoán hỏi vì sao. Ba loại này không dùng chung một trang kết luận. Nếu gọi nhầm loại, thì dù bạn dùng khung năm câu hỏi tại sao hay một mô hình, kết quả vẫn trả lời nhầm câu hỏi. Điều cần nhớ: sai loại vấn đề thì công cụ đúng cũng cho kết quả sai.",
		"q": "Ba loại vấn đề là gì?",
		"a": "Vận hành, lựa chọn và chẩn đoán."
	},
	"ps-fact": {
		"s": "Thẻ này nói về sự khác nhau giữa sự thật đo được và ý kiến. Đáng biết vì trộn hai thứ này làm người sau không biết phải đo lại cái gì. Ví dụ tuần này có tám mươi form trên hai nghìn lượt nhấp, tức bốn phần trăm. Đó là sự thật, vì kiểm tra được trên dữ liệu đã chỉ rõ. Còn câu kênh này yếu là một nhận xét, một ý kiến. Nhận xét đó chỉ kiểm tra được khi bạn viết ra một ngưỡng, chẳng hạn dưới ba phần trăm. Hãy ghi sự thật và ý kiến ở hai cột riêng. Đặt ý kiến vào chỗ của con số thì không ai biết đo lại gì, còn đặt con số vào chỗ của quyết định thì con số cũng không tự bấm nút. Điều cần nhớ: chữ yếu cần một ngưỡng, chưa có ngưỡng thì chưa có vấn đề.",
		"q": "Làm thế nào để biến nhận xét kênh này yếu thành thứ kiểm tra được?",
		"a": "Viết ra một ngưỡng cụ thể, chẳng hạn tỷ lệ dưới ba phần trăm."
	},
	"ps-smart": {
		"s": "Thẻ này nói về khung SMART, một cách viết mục tiêu thành đúng một câu. Đáng biết vì mục tiêu mơ hồ thì không ai biết khi nào đã đạt. SMART gồm năm tiêu chí: cụ thể, đo được, khả thi, liên quan và có hạn. Xét câu này: đến ngày ba mươi tháng mười một, số form từ TikTok tăng thêm hai mươi mỗi tuần so với mức tám mươi hiện tại, tính theo cùng cách đếm. Câu này có đối tượng, cách đo và ngày hạn. Anh Minh có thể dựa vào đó để quyết định có tăng ngân sách thêm mười phần trăm hay không. Cụ thể là một đối tượng rõ ràng, không phải kênh nói chung. Đo được là một cách đếm lặp lại được. Khả thi là nằm trong nguồn lực đang có. Liên quan là nối tới quyết định. Có hạn là một ngày cụ thể, không phải sớm. Điều cần nhớ: không có hạn chót thì chưa có mục tiêu.",
		"q": "Năm tiêu chí của SMART là gì?",
		"a": "Cụ thể, đo được, khả thi, liên quan và có hạn."
	},
	"ps-rank": {
		"s": "Thẻ này nói về việc ưu tiên, và vì sao ưu tiên nghĩa là bỏ bớt chứ không phải đánh số mọi thứ. Đáng biết vì nguồn lực luôn ít hơn việc muốn làm. Nguyên tắc là một hạn chót chỉ nuôi một việc chính, các việc khác được ghi là chưa làm. Ví dụ hạn ngày ba mươi tháng mười một chỉ đủ nguồn lực cho mục tiêu TikTok. Việc làm lại logo có thể đúng, nhưng vẫn để sau. Ghi để sau là một quyết định, không phải bị quên. Nếu hai nhiệm vụ cùng cần một người trong cùng một tuần thì không thể cả hai cùng là ưu tiên số một. Ma trận khẩn cấp và quan trọng chỉ là một cách nhìn, nó không biến hai việc thành một nguồn lực. Điều cần nhớ: gọi mọi thứ là ưu tiên thì không có ưu tiên nào cả.",
		"q": "Vì sao việc làm lại logo được ghi là để sau?",
		"a": "Vì hạn ngày ba mươi tháng mười một chỉ đủ nguồn lực cho mục tiêu TikTok, và để sau là một quyết định có chủ ý."
	},
	"ps-cause": {
		"s": "Thẻ này nói về việc chọn nguyên nhân đáng xử lý, tức là nguyên nhân mà bạn thay đổi được. Đáng biết vì không phải mọi lý do đều là thứ bạn làm gì được. Ví dụ form từ TikTok giảm. Giải thích người dùng chán mạng xã hội thì không thay đổi được trong hai tuần. Nhưng trang đích đang lỗi bốn không bốn trên điện thoại thì sửa được. Nguyên nhân ở đây không phải một hệ số hồi quy, mà là một thay đổi mà người trong hạn này làm được, và thước SMART sẽ nhích nếu thay đổi đó đúng. Giáo trình có công cụ năm câu hỏi tại sao như một cách hỏi tiếp, và bạn không nên dừng ở câu trả lời do con người. File gốc không có video cho buổi này, nhưng ý vẫn đầy đủ. Điều cần nhớ: không thay đổi được thì chưa phải nguyên nhân của hạn này.",
		"q": "Trong hai ví dụ, nguyên nhân nào đáng xử lý trước?",
		"a": "Trang đích lỗi bốn không bốn trên điện thoại, vì sửa được trong hạn."
	},
	"ps-opt": {
		"s": "Thẻ này nói về việc đánh giá phương án, và vì sao mỗi phương án phải đi kèm một hệ quả. Đáng biết vì một ý tưởng chưa có hệ quả thì chưa phải phương án. Hãy xem ba lựa chọn. Sửa lỗi bốn không bốn mất hai ngày của một người, và form có thể về mức cũ nếu bốn không bốn đúng là nguyên nhân. Làm trang đích mới mất ba tuần, nghĩa là trễ hạn ngày ba mươi tháng mười một. Không làm gì thì form giữ nguyên ở tám mươi. Hệ quả gồm cái được và cái mất, kể cả cái mất khi bạn chọn nhầm nguyên nhân. Các phương án phải được so trên cùng một thước đo đã viết ở bước SMART. Đừng thêm một thước đo mới chỉ để phương án mình thích thắng. Điều cần nhớ: một ý tưởng chưa có hệ quả thì chưa phải là phương án.",
		"q": "Một phương án cần đi kèm điều gì?",
		"a": "Hệ quả, gồm cái được và cái mất, so trên cùng thước đo đã đặt ở bước SMART."
	},
	"ps-do": {
		"s": "Thẻ này nói về bước cuối: làm xong thì phải đo lại bằng đúng câu đã viết. Đáng biết vì kể lại là chưa đủ. Ví dụ lỗi bốn không bốn được sửa ngày hai mươi tháng mười một. Đến ngày ba mươi tháng mười một, form TikTok được đếm lại bằng đúng cách như tuần có tám mươi form. Ra chín mươi hay bảy mươi đều là kết quả. Điều quan trọng là cách đếm không được đổi giữa chừng, vì nếu đổi thì bạn không biết giải pháp có hiệu lực hay không. Triển khai không phải một cảm giác, mà là một thay đổi đã xảy ra, cộng một lần đo lại đã hẹn. Đó cũng là lý do CRISP-DM quay lại bước hiểu nghiệp vụ khi con số không còn nói về cùng một vấn đề. Điều cần nhớ: không đo lại được thì chưa làm xong.",
		"q": "Vì sao cách đếm không được đổi giữa chừng?",
		"a": "Vì nếu đổi cách đếm thì bạn không biết giải pháp có hiệu lực hay không."
	},
	"xl-cell": {
		"s": "Thẻ này nói về kiểu dữ liệu của một ô trong Excel: số, chữ hoặc công thức. Đáng biết vì kiểu của ô quyết định phép toán nào dùng được. Ví dụ cột form bị để dạng chữ vì có dấu cách thừa. Tổng cả cột ra không, nhưng điều đó không có nghĩa là tuần đó hết form. Hàm SUM bỏ qua các ô chữ mà không báo lỗi. Một dấu nháy hoặc một dấu cách là đủ biến tám mươi thành chữ. Hãy hình dung cột có ba ô: tám mươi, hai mươi và ba mươi, trong đó ô tám mươi đang ở dạng chữ. SUM chỉ cộng hai ô còn lại và cho năm mươi chứ không phải một trăm ba mươi. Công thức bắt đầu bằng dấu bằng, và giá trị đã dán đè lên công thức thì không còn tự tính lại. Vì vậy hãy kiểm tra kiểu của ô trước khi cộng. Điều cần nhớ: một tổng im lặng chưa chắc là một tổng đầy đủ.",
		"q": "Vì sao SUM có thể ra thiếu mà không báo lỗi?",
		"a": "Vì hàm SUM bỏ qua các ô lưu dạng chữ mà không cảnh báo."
	},
	"xl-lock": {
		"s": "Thẻ này nói về dấu đô la trong Excel, dùng để giữ nguyên địa chỉ ô khi kéo công thức. Đáng biết vì quên nó sẽ tạo ra một cột sai mà không có thông báo nào. Dấu đô la đặt trước cột và hàng thì khóa cả hai. Đặt trước hàng thì chỉ khóa hàng. Đặt trước cột thì chỉ khóa cột. Ví dụ doanh thu từng dòng được nhân với thuế suất nằm ở một ô đã khóa. Nếu quên khóa, chỉ dòng đầu tiên đúng, vì khi kéo xuống dòng ba, công thức trỏ sang ô thuế ở dòng kế tiếp, tức là một ô trống, và kết quả ra không. Ngược lại, nếu khóa nhầm ô doanh thu thì mọi dòng ra cùng một số tiền. Hãy luôn kiểm tra dòng thứ hai sau khi kéo. Điều cần nhớ: kéo công thức mà không kiểm tra dòng thứ hai là cách tạo ra một cột sai mà không ai báo.",
		"q": "Khi kéo công thức, ô thuế suất cần được làm gì?",
		"a": "Cần khóa địa chỉ ô bằng dấu đô la để nó không dịch chuyển khi kéo."
	},
	"xl-if": {
		"s": "Thẻ này nói về hàm IF trong Excel, chọn một nhánh theo điều kiện, và về chuyện ô trống không phải là sai. Đáng biết vì ô trống rất dễ bị xếp nhầm nhóm. Ví dụ quy tắc phân loại doanh thu: dưới năm triệu là thấp, từ năm đến dưới hai mươi triệu là vừa, còn lại là cao. Ô còn trống phải ra chưa có, chứ không phải thấp, vì nhiều phép so sánh coi ô trống như số không. Cách làm là kiểm tra ô trống trước tiên, rồi mới xét các mức. Khi đó ô có giá trị ba cho thấp, giá trị mười hai cho vừa, và ô trống cho chưa có. Hãy đặt quy tắc ngay trong công thức đi cùng file. Quy tắc để trong đầu người xuất file thì tháng sau sẽ lệch. Điều cần nhớ: ô trống rơi vào nhánh đầu tiên mà nó không vi phạm.",
		"q": "Vì sao phải kiểm tra ô trống trước các mức thấp, vừa, cao?",
		"a": "Vì ô trống bị coi như số không và sẽ rơi nhầm vào nhánh thấp."
	},
	"xl-keep": {
		"s": "Thẻ này nói về khác biệt giữa lọc và xóa dòng trong Excel. Đáng biết vì giấu một dòng không có nghĩa là bỏ nó khỏi phép tính. Giả sử bạn lọc kênh TikTok để đọc cho dễ. Bạn ẩn năm mươi dòng, rồi dùng SUM thì vẫn ra tổng cũ, không phải vì bộ lọc hỏng mà vì SUM không nhìn bộ lọc. Ví dụ có hai trăm dòng, lọc còn một trăm năm mươi dòng TikTok. SUM vẫn cộng cả hai trăm dòng, còn hàm SUBTOTAL chỉ cộng một trăm năm mươi dòng nhìn thấy. Dòng ẩn vẫn tham gia nhiều phép tính và biểu đồ, và người nhận file bỏ bộ lọc là thấy lại. Dòng đã xóa thì không lấy lại được. Dọn dữ liệu bằng xóa là đổi sự thật của bảng, không chỉ đổi cách nhìn. Điều cần nhớ: giấu không phải là bỏ.",
		"q": "Muốn cộng chỉ các dòng đang nhìn thấy sau khi lọc thì dùng hàm nào?",
		"a": "Dùng SUBTOTAL, vì SUM vẫn cộng cả các dòng bị ẩn."
	},
	"xl-chart": {
		"s": "Thẻ này nói về cách chọn biểu đồ theo câu hỏi cần trả lời. Đáng biết vì một hình đẹp không cứu được câu hỏi bị trộn lẫn. Biểu đồ đường dùng để theo dõi theo thời gian, ví dụ số form theo từng tuần. Biểu đồ cột dùng để so sánh các nhóm, ví dụ số form theo từng kênh trong một tuần. Chuyển từ kênh này sang kênh khác không phải một xu hướng, mà là hai nhóm khác nhau. Giả sử năm kênh có form là bốn mươi, ba mươi, hai mươi, bảy và ba. Vẽ bằng cột thì thấy ngay kênh nhỏ nhất. Nối năm điểm bằng một đường lại ngụ ý các kênh có thứ tự, trong khi thực tế không có. Biểu đồ tròn chỉ hợp để thể hiện các phần của một tổng, và không nên có quá nhiều phần. Điều cần nhớ: một hình đẹp không cứu được một câu hỏi bị trộn lẫn.",
		"q": "Theo dõi form theo tuần và so sánh form giữa các kênh thì dùng biểu đồ nào?",
		"a": "Theo tuần dùng biểu đồ đường, so sánh giữa các kênh dùng biểu đồ cột."
	},
	"xl-pivot": {
		"s": "Thẻ này nói về PivotTable, công cụ nhóm các dòng trong Excel. Đáng biết vì nó chỉ đếm dòng, chứ không tự đếm ra khách hàng. Trước khi kéo các trường vào pivot, hãy xác định một dòng trong bảng gốc là gì. Ví dụ mỗi dòng là một lần khách ghé. Pivot đếm được bốn trăm dòng, nhưng số khách không trùng chỉ là hai trăm năm mươi. Nếu báo cáo viết bốn trăm khách thì bạn đã nhầm đơn vị đếm. Cần nhớ thêm hai điều. Pivot tính trên vùng dữ liệu bạn chỉ định, nên nếu vùng thiếu một tuần thì tuần đó không tồn tại trong pivot, chứ không phải bằng không. Và pivot cần được làm mới sau khi dữ liệu gốc đổi, còn một con số đã chép ra khỏi pivot là con số chết. Điều cần nhớ: đếm dòng là đếm dòng, còn số khách là một câu hỏi khác.",
		"q": "Pivot đếm bốn trăm dòng, vậy số khách có chắc là bốn trăm không?",
		"a": "Không chắc. Bốn trăm là số lần ghé, còn số khách không trùng có thể ít hơn, như hai trăm năm mươi."
	},
	"xl-look": {
		"s": "Thẻ này nói về hàm VLOOKUP trong Excel và cách dùng nó cho đúng. Đáng biết vì sai chế độ tìm sẽ trả về kết quả sai mà không báo gì. VLOOKUP chỉ nhìn sang bên phải của cột khóa. Số cột được đếm từ cột khóa, và cột khóa là cột một. Muốn khớp đúng mã thì ghi FALSE ở cuối. Ví dụ tra mã kênh để ra tên kênh. Với FALSE, mã không có trong bảng cho kết quả báo không tìm thấy. Đó không phải lỗi file hỏng, mà chỉ là không thấy. Ngược lại, tìm gần đúng trên cột chưa sắp xếp sẽ trả về một tên sai mà không báo gì cả. Chèn thêm một cột vào vùng tra cũng làm số cột trỏ nhầm mà không cảnh báo. Muốn nhìn sang trái thì dùng INDEX kết hợp MATCH. Điều cần nhớ: báo không tìm thấy là tốt, sự im lặng mới đáng ngại.",
		"q": "Muốn VLOOKUP khớp đúng mã thì ghi gì ở đối số cuối?",
		"a": "Ghi FALSE, để nó chỉ khớp đúng và báo không tìm thấy khi mã không có."
	},
	"py-run": {
		"s": "Thẻ này nói về cách Python chạy chương trình, và vì sao một tên phải được tạo trước khi dùng. Đáng biết vì nó giúp bạn đọc lỗi nhanh hơn. Python đọc từ trên xuống, từng dòng một. Ví dụ dòng một tạo n bằng tám mươi, dòng hai in n ra màn hình, kết quả là tám mươi. Nếu đảo hai dòng, Python báo lỗi NameError, vì khi dòng in chạy thì n chưa tồn tại. Máy không nhìn trước xuống các dòng bên dưới. Một tên chỉ được tạo khi dòng gán chạy xong. Thụt vào nghĩa là bạn đang ở trong một khối, như một điều kiện, một vòng lặp hoặc một hàm. Thụt ra nghĩa là khối đó đã kết thúc. Khi có lỗi, hãy sửa đúng dòng báo lỗi, đừng sửa từ giữa chương trình. Điều cần nhớ: máy không đọc ý định của bạn, nó đọc từng dòng.",
		"q": "Vì sao đảo hai dòng gán và in lại gây lỗi NameError?",
		"a": "Vì khi dòng in chạy thì tên đó chưa được tạo, và Python không nhìn trước xuống dòng dưới."
	},
	"py-type": {
		"s": "Thẻ này nói về kiểu dữ liệu trong Python và vì sao nó quyết định phép nào hợp lệ. Đáng biết vì cùng một dấu cộng có thể nối chữ hoặc cộng số. Cộng hai chữ ba và bốn trong ngoặc kép cho ra chữ ba bốn, còn cộng hai số ba và bốn cho ra bảy. Ví dụ form bằng tám mươi trong ngoặc kép là chữ, còn không có ngoặc là số. Hàm int mới đổi chữ tám mươi thành số, còn chữ tám mươi form thì báo lỗi vì chuỗi không chỉ có chữ số. Các kiểu thường gặp là số nguyên, số thực, chữ, đúng hoặc sai, và không có gì. Cộng chữ với số là lỗi, không phải một kết quả gần đúng. Việc ép kiểu phải là một dòng tường minh. Một cột lẫn chữ và số thì không có trung bình. Điều cần nhớ: sai kiểu thì đừng mong có một con số đẹp hơn.",
		"q": "Cộng hai chữ ba và bốn nằm trong ngoặc kép cho kết quả gì?",
		"a": "Cho chữ ba bốn, vì phép cộng trên chữ là nối chữ, không phải cộng số."
	},
	"py-op": {
		"s": "Thẻ này nói về hai chuyện dễ lẫn trong Python: dấu bằng đơn và dấu bằng đôi, cùng hai kiểu phép chia. Đáng biết vì nhầm một chỗ là cả kết luận sai theo. Dấu bằng đơn nghĩa là gán, tức là cất một giá trị vào một cái tên. Dấu bằng đôi nghĩa là so sánh, tức là hỏi hai bên có bằng nhau không. Bây giờ đến phép chia. Giả sử có tám mươi form trên hai nghìn lượt bấm. Chia bình thường thì ra không phẩy không bốn, tức là bốn phần trăm. Nhưng nếu bạn dùng phép chia lấy phần nguyên, kết quả ra đúng số không. Nếu bạn nhìn con số không đó rồi kết luận là kênh này không ra form nào, thì bạn đã nhầm phép chia, chứ dữ liệu đâu có sai. Phép chia lấy phần nguyên còn làm tròn xuống, nên số âm có thể cho kết quả bất ngờ. Vậy ý cần nhớ là: nhầm gán với so sánh là nhầm hai phép khác nhau, không phải một lỗi nhỏ.",
		"q": "Dấu bằng đơn và dấu bằng đôi khác nhau thế nào?",
		"a": "Dấu bằng đơn là gán giá trị cho một cái tên, còn dấu bằng đôi là so sánh xem hai bên có bằng nhau không."
	},
	"py-if": {
		"s": "Thẻ này nói về câu lệnh if, nơi chương trình chọn đúng một nhánh để chạy. Đáng biết vì thứ tự viết các nhánh quyết định kết quả. Hãy tưởng tượng bạn phân loại điểm form. Nếu form nhỏ hơn ba thì gọi là thấp. Nếu không, mà form nhỏ hơn sáu thì gọi là vừa. Còn lại là cao. Với form bằng hai, chương trình vào ngay nhánh thấp và dừng ở đó, không xét nhánh vừa nữa. Với form bằng bốn, nhánh thấp sai, nhánh vừa đúng, nên kết quả là vừa. Nếu bạn đảo thứ tự các nhánh, kết quả có thể khác đi, giống như lệnh điều kiện trong ngôn ngữ truy vấn dữ liệu. Một lưu ý nữa: biến được tạo trong nhánh này có thể không tồn tại ở nhánh kia, nên dùng nó phía sau mà thiếu nhánh còn lại dễ gây lỗi báo thiếu tên. Ý cần nhớ: nếu thấy hai nhánh cùng đúng, nghĩa là các điều kiện của bạn chưa loại trừ nhau.",
		"q": "Với form bằng hai, chương trình chạy mấy nhánh?",
		"a": "Chỉ một nhánh, là nhánh thấp, rồi dừng và không xét các nhánh sau."
	},
	"py-loop": {
		"s": "Thẻ này so sánh hai loại vòng lặp: for và while. Đáng biết vì chọn sai có thể làm chương trình treo mãi. Vòng for dùng khi bạn biết rõ tập cần duyệt. Ví dụ có ba kênh quảng cáo, vòng for sẽ in tên từng kênh, ra đúng ba dòng rồi tự dừng. Vòng while thì chạy chừng nào điều kiện còn đúng. Nếu trong vòng không có dòng nào làm điều kiện đó thay đổi, chương trình sẽ chạy mãi không dừng. Một chi tiết hay gặp: lệnh tạo dãy số với số ba sẽ cho các số không, một, hai, và không gồm số ba. Vòng lặp lồng nhau thì chạy hết vòng trong cho mỗi bước của vòng ngoài, nên một bảng lớn nhanh chóng thành rất nhiều bước. Ngoài ra, lệnh break thoát khỏi vòng, còn lệnh continue nhảy sang phần tử kế tiếp. Ý cần nhớ: không có điều kiện dừng thì while không phải vòng lặp, mà là một trang treo.",
		"q": "Khi nào nên dùng while thay vì for?",
		"a": "Chỉ khi bạn viết được điều kiện dừng rõ ràng, còn biết sẵn tập cần duyệt thì dùng for."
	},
	"py-fn": {
		"s": "Thẻ này nói về hàm trong Python và việc trả kết quả về cho người gọi. Đáng biết vì quên một lệnh nhỏ là cả phép tính trở thành không có gì. Giả sử bạn viết hàm tính tỷ lệ, lấy số form chia cho số lượt bấm. Gọi hàm với tám mươi form và hai nghìn lượt bấm thì nhận về không phẩy không bốn. Nhưng nếu bạn quên lệnh return, hàm vẫn chạy mà người gọi chỉ nhận được giá trị rỗng, tên là None. Lệnh in ra màn hình chỉ để mắt người nhìn, còn muốn dùng kết quả tiếp thì phải trả về. Thêm hai ý nhỏ. Tên tham số chỉ có tác dụng bên trong hàm, gán lại nó không đổi tên ở bên ngoài. Và khi lệnh return chạy, hàm thoát ngay, các dòng bên dưới không chạy nữa. Ý cần nhớ: in ra màn hình không phải là trả về giá trị.",
		"q": "Quên lệnh return thì người gọi hàm nhận được gì?",
		"a": "Họ nhận giá trị rỗng, gọi là None, dù hàm đã tính xong bên trong."
	},
	"py-str": {
		"s": "Thẻ này nói về phép xử lý chuỗi chữ. Đáng biết vì chuỗi không tự đổi, và nhiều người tưởng đã làm sạch dữ liệu mà thật ra chưa. Lấy ví dụ chữ tiktok có hai dấu cách ở hai đầu. Gọi lệnh bỏ khoảng trắng sẽ cho ra chữ tiktok sạch, nhưng đó là một chuỗi mới. Biến cũ vẫn y nguyên cho đến khi bạn gán kết quả lại cho nó. Một ví dụ khác: lấy từ vị trí số không đến vị trí số ba của chữ tiktok thì được ba chữ đầu là tik. Vị trí đếm từ số không, còn vị trí âm đếm từ cuối, nên vị trí âm một là chữ cuối cùng, ở đây là chữ k. Hàm đếm độ dài cho số ký tự, không phải số từ. Còn cách chèn giá trị vào chuỗi cũng chỉ tạo chuỗi mới, nó không sửa hộ một tỷ lệ sai. Ý cần nhớ: gọi hàm làm sạch mà không giữ kết quả thì chưa sửa gì cả.",
		"q": "Muốn giữ chuỗi đã được làm sạch thì phải làm gì?",
		"a": "Phải gán kết quả vào một biến, vì phép xử lý chỉ trả về chuỗi mới chứ không sửa chuỗi cũ."
	},
	"py-list": {
		"s": "Thẻ này nói về danh sách, tức list, trong Python. Đáng biết vì đây là cấu trúc bạn dùng nhiều nhất, và nó có một cái bẫy khá kín. Danh sách có thứ tự, sửa được, và đếm từ số không. Giả sử số form theo ba tuần là tám mươi, chín mươi, bảy mươi. Phần tử đầu tiên ở vị trí số không, giá trị tám mươi. Thêm một tuần mới bằng lệnh append thì sáu mươi được nối vào cuối. Cắt từ vị trí một đến ba thì được hai số là chín mươi và bảy mươi, và đó là một bản mới. Cái bẫy là thế này: khi bạn gán một tên mới bằng danh sách cũ, máy không tạo bản sao. Hai tên cùng chỉ vào một danh sách, nên sửa qua tên này thì tên kia cũng thấy. Ý cần nhớ: hai cái tên có thể là cùng một danh sách.",
		"q": "Gán danh sách cũ cho một tên mới có tạo ra bản sao không?",
		"a": "Không, hai tên cùng trỏ vào một danh sách, nên sửa ở tên này thì tên kia cũng đổi."
	},
	"py-dict": {
		"s": "Thẻ này nói về dictionary, hay từ điển, tức là bộ các cặp khóa và giá trị. Đáng biết vì cách bạn lấy giá trị quyết định chương trình báo lỗi hay lặng lẽ cho ra một con số dễ gây hiểu lầm. Giả sử bạn có từ điển ghi kênh GDN được tám mươi form và TikTok được bốn mươi. Lấy khóa fb bằng ngoặc vuông thì chương trình dừng vì khóa không có. Dùng lệnh get với giá trị mặc định bằng không thì trả về số không và chạy tiếp. Nhưng số không đó chỉ có nghĩa là chưa thấy, không phải đã đo được không form. Thêm hai ý: khóa phải là kiểu không đổi được, nên chữ và số dùng được, còn danh sách thì không. Gán vào một khóa đã có là đè giá trị cũ chứ không thêm dòng thứ hai. Ý cần nhớ: số không do get trả về chưa phải một phép đo.",
		"q": "Số không mà lệnh get trả về khi thiếu khóa có nghĩa là gì?",
		"a": "Nó chỉ có nghĩa là chưa thấy khóa đó, không phải đã đo được giá trị bằng không."
	},
	"py-tup": {
		"s": "Thẻ này nói về tuple, một dãy có thứ tự nhưng không cho sửa từng ô. Đáng biết vì khi thấy lỗi báo không sửa được, bạn sẽ hiểu đó là chủ ý chứ không phải máy hỏng. Giả sử một tuần được ghi là tuple gồm tám mươi form và hai nghìn lượt bấm. Nếu bạn thử gán chín mươi vào ô đầu tiên, chương trình báo lỗi. Đó chính là cái chốt của tuple, giúp một dòng dữ liệu không bị sửa nhầm tại chỗ. Một chi tiết hay gây nhầm: dấu phẩy mới làm nên tuple, không phải dấu ngoặc. Tám mươi trong ngoặc chỉ là số tám mươi, còn muốn tuple một phần tử thì phải có dấu phẩy phía sau. Bạn cũng có thể tách tuple thành hai tên, mỗi tên nhận một giá trị. Nhưng nếu bên trong tuple có một danh sách, danh sách đó vẫn sửa được: vỏ không đổi, ruột có thể đổi. Ý cần nhớ: không gán được từng ô là một tính năng, không phải một thiếu sót.",
		"q": "Cái gì làm nên một tuple: dấu ngoặc hay dấu phẩy?",
		"a": "Dấu phẩy mới làm nên tuple, dấu ngoặc chỉ để gom nhóm."
	},
	"py-set": {
		"s": "Thẻ này nói về set, tức tập hợp, loại bỏ giá trị trùng. Đáng biết vì nó rất tiện để hỏi có những ai, nhưng lại làm mất thứ tự. Giả sử bạn có năm dòng ghi mã khách, trong đó chỉ có ba mã khác nhau. Đưa vào set thì độ dài còn ba. Hoặc một set gồm a, b, a chỉ còn hai mã. Thứ tự khi in ra không phải thứ tự bạn đưa vào, nên đừng dùng set để giữ thứ tự theo tuần. Set còn có các phép hợp, giao và hiệu, và mỗi phép trả về một set mới. Điều cần cẩn thận là set không phải một bảng. Nó không có cột, và các dòng trùng đã biến mất nên không truy ngược được. Nếu bạn muốn không trùng mà vẫn giữ một dòng đại diện, đó là một cách chọn dòng, và bạn phải tự viết ra cách chọn. Ý cần nhớ: hết trùng cũng là hết luôn thứ tự bạn đang nhớ.",
		"q": "Vì sao không nên dùng set để giữ dữ liệu theo thứ tự tuần?",
		"a": "Vì set không hứa hẹn thứ tự, thứ tự khi in ra có thể khác với thứ tự bạn đã đưa vào."
	},
	"py-np": {
		"s": "Thẻ này nói về mảng của thư viện NumPy, nơi mọi ô chỉ có một kiểu dữ liệu. Đáng biết vì chỉ một chữ lọt vào cột số cũng đổi cả cột. Giả sử ba tuần có số form là tám mươi, chín mươi, bảy mươi. Cộng lại rồi chia ba thì trung bình là tám mươi. Hình dạng của mảng này là một dãy dài ba, chứ không phải một bảng ba cột. Vị trí vẫn đếm từ số không. NumPy ép mọi ô về cùng một kiểu. Nếu mảng thành kiểu đối tượng chung chung, bạn đã mất lợi thế của mảng số. Phép tính trên cả mảng không phải vòng for. Và chỉ một ô thiếu dữ liệu có thể làm cả phép trung bình thành thiếu, nếu bạn không chọn cách bỏ qua nó. Ý cần nhớ: một chữ trong cột số làm đổi cả cột, không chỉ một ô bẩn.",
		"q": "Điều gì xảy ra khi một chữ lọt vào mảng số của NumPy?",
		"a": "NumPy ép mọi ô về cùng một kiểu, nên cả cột bị đổi chứ không chỉ riêng một ô đó."
	},
	"py-ser": {
		"s": "Thẻ này nói về Series trong thư viện pandas, một cột dữ liệu có nhãn. Đáng biết vì khi cộng hai cột, máy cộng theo nhãn chứ không theo vị trí mắt bạn nhìn thấy. Giả sử một cột có các ngày từ một đến bốn, cột kia có các ngày từ hai đến năm. Bằng mắt thì có vẻ bốn số chồng lên bốn số. Nhưng máy chỉ cộng những ngày trùng nhau là ngày hai, ba và bốn. Ngày một và ngày năm bị bỏ trống, nên có ba ngày có giá trị và hai ngày thiếu. Cũng vì vậy, bạn cần phân biệt hai cách lấy dữ liệu: một cách lấy theo vị trí, một cách lấy theo nhãn. Nhầm hai cách thì có thể lấy đúng chỗ mắt thấy nhưng sai ngày. Nếu nhãn bị trùng, phép cộng còn nhân số hàng lên. Ý cần nhớ: cùng độ dài chưa phải cùng ngày.",
		"q": "Vì sao hai cột cùng độ dài cộng lại vẫn có thể ra giá trị thiếu?",
		"a": "Vì pandas cộng theo nhãn, nên ngày nào không trùng nhãn thì để trống."
	},
	"py-frame": {
		"s": "Thẻ này nói về DataFrame, tức bảng dữ liệu trong pandas, và hai cách lấy dòng. Đáng biết vì cắt theo nhãn và cắt theo vị trí cho số dòng khác nhau. Giả sử bảng có năm dòng. Lấy theo vị trí từ không đến hai thì được hai dòng đầu, vì điểm cuối không tính. Nhưng nếu nhãn các dòng là không, một, hai và bạn cắt theo nhãn từ không đến hai, bạn được cả ba dòng, vì cắt theo nhãn gồm cả điểm cuối. Vì vậy hãy tự hỏi mình đang cầm nhãn hay đang cầm số thứ tự. Một chi tiết nữa: lấy một cột bằng ngoặc đơn cho ra một Series, còn lấy bằng ngoặc đôi cho ra một bảng một cột, và hai thứ này không dùng chung mọi hàm. Muốn chắc chắn khi gán, hãy gán cả cột đã canh nhãn rồi đọc lại vài dòng. Ý cần nhớ: gồm hay không gồm điểm cuối tạo ra hai lát cắt khác nhau.",
		"q": "Cắt theo nhãn và cắt theo vị trí khác nhau ở điểm nào?",
		"a": "Cắt theo nhãn gồm cả điểm cuối, còn cắt theo vị trí thì không gồm điểm cuối."
	},
	"py-plot": {
		"s": "Thẻ này nói về việc chọn biểu đồ. Đáng biết vì cùng một dữ liệu có thể vẽ ra hai câu trả lời ngược nhau, và cả hai đều đúng. Hãy xem ví dụ. Kênh GDN có tám mươi form trên bốn nghìn lượt bấm, tức hai phần trăm. Kênh TikTok có bốn mươi form trên một nghìn lượt bấm, tức bốn phần trăm. Vẽ cột theo số form thì GDN lớn hơn. Vẽ cột theo tỷ lệ thì TikTok cao hơn. Hai hình trả lời hai câu hỏi khác nhau. Thư viện vẽ chỉ vẽ những gì bạn đưa vào, nó không tự chia cho mẫu số. Trục bị cắt không bắt đầu từ số không có thể làm một chênh lệch nhỏ trông như cú nhảy. Hai đơn vị trên một trục thì cần ghi rõ hai thang. Ý cần nhớ: chưa có mẫu số thì đừng vẽ một cuộc đua.",
		"q": "Vì sao biểu đồ theo số form và theo tỷ lệ cho kết luận ngược nhau?",
		"a": "Vì chúng trả lời hai câu hỏi khác nhau: một cái hỏi ai nhiều hơn, cái kia hỏi ai hiệu quả hơn trên mỗi lượt bấm."
	},
	"py-g1": {
		"s": "Thẻ này là bài chấm phần Python cơ bản, và điều đáng biết là nó không có ý mới. Ý mới nằm ở phần trước đó. Khi một câu hỏi làm bạn lúng túng, đừng cố nhớ đáp án, mà hãy quay lại các thẻ cơ bản. Ví dụ, một câu hỏi về chỉ số của danh sách không được giải bằng cách nhớ rằng đáp án là hai. Bạn chỉ cần nhớ ô đầu tiên của danh sách có chỉ số không, đúng như thẻ về danh sách đã nói, rồi đếm tiếp. Phần chấm cơ bản không giới thiệu cấu trúc nào mới. Nếu một câu trông như mẹo, nó vẫn đang hỏi một ý đã có: kiểu dữ liệu, thứ tự chạy, chỉ số bắt đầu từ không, hoặc một nhánh điều kiện. Thẻ này cũng không có ô để trả lời. Ý cần nhớ: bài chấm không phải là giáo trình thứ hai.",
		"q": "Khi một câu chấm điểm cơ bản làm bạn lúng túng, nên làm gì?",
		"a": "Quay lại các thẻ Python cơ bản, vì câu đó đang hỏi một ý bạn đã học chứ không phải ý mới."
	},
	"py-g2": {
		"s": "Thẻ này là bài chấm phần thư viện, và điều đáng biết là nó vẫn xoay quanh những ý bạn đã gặp: đơn vị dòng, nhãn và lát cắt. Giả sử có một câu yêu cầu lấy các dòng đến hết một nhãn nào đó. Đó là cách lấy theo nhãn, và cách này gồm cả điểm cuối. Đây không phải một đáp án riêng của bài chấm, mà là ý đã có trong thẻ về bảng dữ liệu. Buổi này không có định nghĩa mới và không chứa đề. Những ý bạn cần dùng gồm có năm điều. Mảng chỉ có một kiểu dữ liệu. Series canh theo nhãn. Lấy theo nhãn thì gồm điểm cuối. Lấy theo vị trí thì không gồm điểm cuối. Và biểu đồ phải đúng với câu hỏi. Khi gặp khó, hãy mở lại bốn thẻ về thư viện. Ý cần nhớ: điểm số không phải là một ý mới.",
		"q": "Lấy dòng theo nhãn và theo vị trí khác nhau thế nào ở điểm cuối?",
		"a": "Theo nhãn thì gồm điểm cuối, theo vị trí thì không gồm."
	},
	"tb-why": {
		"s": "Thẻ này nói về lý do cần có câu hỏi trước khi vẽ biểu đồ trong Tableau. Đáng biết vì công cụ không biết bạn muốn hỏi gì. Giả sử câu hỏi là: tuần này kênh nào có nhiều form hơn. Với ba kênh có bốn mươi, ba mươi và mười form, một biểu đồ cột với đúng ba cột là đủ. Nếu bạn vẽ cùng dữ liệu đó lên bản đồ thế giới thì chỉ là trang trí, vì dữ liệu không nói gì về địa điểm. Tableau chỉ cộng những gì bạn thả vào, theo đơn vị dòng của nguồn. Một biểu đồ cũng không sửa được một phép nối đang nhân dòng lên. Công cụ này và một đoạn mã vẽ biểu đồ chịu cùng một quy tắc: câu hỏi trước, đơn vị rõ ràng, một hình cho một câu hỏi. Ý cần nhớ: chưa có câu hỏi thì chưa nên kéo.",
		"q": "Quy tắc chung khi vẽ biểu đồ là gì?",
		"a": "Câu hỏi đi trước, đơn vị phải rõ ràng, và mỗi hình chỉ trả lời một câu hỏi."
	},
	"tb-bar": {
		"s": "Thẻ này nói về chọn giữa biểu đồ cột và biểu đồ đường. Đáng biết vì đổi hình là đổi nghĩa của câu hỏi. Hạng mục thì dùng cột, thời gian thì dùng đường. Ví dụ, form theo ba kênh trong một tuần là ba cột, vì ba kênh là ba nhóm để so sánh. Còn form của một kênh qua tám tuần là một đường tám điểm, vì tám tuần có thứ tự thật. Thứ tự các cột hạng mục là do bạn chọn. Xếp theo độ lớn thì mắt so sánh dễ. Xếp theo một mã vô nghĩa thì mắt có thể đọc ra một xu hướng không có thật. Với đường thì khác: trục phải là thứ tự thật, không còn là chuyện trang trí. Nếu bạn nối một đường qua tên các kênh, bạn đang bịa ra một xu hướng. Ý cần nhớ: một đường xuyên qua tên các kênh là một câu bịa.",
		"q": "Khi nào dùng biểu đồ đường thay vì biểu đồ cột?",
		"a": "Khi trục là một thứ tự có thật như thời gian, còn so sánh các nhóm hạng mục thì dùng cột."
	},
	"tb-box": {
		"s": "Thẻ này nói về biểu đồ hộp và bản đồ. Đáng biết vì mỗi loại chỉ đúng với một kiểu câu hỏi. Dùng hộp khi bạn hỏi tập số liệu này rộng đến đâu. Dùng bản đồ khi bạn hỏi ở đâu. Giả sử form của một kênh trong bốn mươi tuần được vẽ thành hộp. Hộp cho thấy phần giữa của dữ liệu và những tuần cực đoan. Nhưng hộp giấu từng dòng, nên một tuần chín form và một tuần hai form có thể là hai đuôi trong khi phần giữa vẫn hẹp. Còn nếu trong file không có tỉnh hay thành phố nào thì không nên có bản đồ. Kênh quảng cáo không phải một vùng địa lý. Bản đồ tô màu cũng khiến mắt thấy diện tích vùng thay vì độ lớn của con số. Ý cần nhớ: không có địa điểm thật thì bản đồ chỉ là trang trí.",
		"q": "Khi nào bản đồ là lựa chọn hợp lý?",
		"a": "Khi dữ liệu có địa điểm thật và câu hỏi là ở đâu."
	},
	"tb-part": {
		"s": "Thẻ này nói về biểu đồ tròn và treemap, hai hình thể hiện các phần của một tổng. Đáng biết vì dùng sai chúng làm mắt đọc sai. Biểu đồ tròn chỉ hợp khi có một tổng và ít lát. Ví dụ một tuần có một trăm form chia thành bảy mươi và ba mươi thì biểu đồ tròn đọc rất rõ. Nhưng với tám kênh, mỗi kênh khoảng mười hai form, nên dùng cột. Lưu ý tám lần mười hai là chín mươi sáu, không phải một trăm, nên đó là một tổng khác. Vẽ hai tuần bằng hai hình tròn cũng là cách so sánh kém, vì biểu đồ tròn không có trục. Một lát ba mươi ba phần trăm và một lát ba mươi phần trăm trông gần như nhau. Còn treemap dùng diện tích, và diện tích phải đúng là cái phần đó. Ý cần nhớ: hai hình tròn là hai câu hỏi mà mắt không đọc được.",
		"q": "Vì sao nên dùng cột thay cho hai biểu đồ tròn khi cần so sánh?",
		"a": "Vì biểu đồ tròn không có trục, nên mắt khó so sánh các lát gần bằng nhau, còn cột thì so sánh được."
	},
	"tb-join": {
		"s": "Thẻ này nói về việc kiểm tra số dòng khi nối bảng trong Tableau. Đáng biết vì phép nối có thể nhân dòng lên mà biểu đồ vẫn trông bình thường. Giả sử bạn có một trăm khách, nối với bảng đơn hàng, trung bình mỗi khách hai đơn. Sau khi nối, bảng có khoảng hai trăm dòng. Nếu bạn đếm dòng rồi báo cáo hai trăm khách thì đã sai đơn vị đếm, vì hai trăm là số đơn. Công cụ có quan hệ hay phép nối cũng không miễn cho bạn việc kiểm tra đơn vị dòng. Một số đo kéo vào sau phép nối nhân dòng sẽ bị nhân theo. Có cách giữ đúng đơn vị, như tính ở mức chi tiết riêng hoặc tổng hợp trước khi nối, nhưng chúng không tự bật. Hãy so số dòng trước và sau khi nối. Ý cần nhớ: vẽ trên một bảng đã bị nhân dòng là vẽ một con số khác.",
		"q": "Làm thế nào để phát hiện phép nối đã nhân dòng?",
		"a": "So sánh số dòng trước và sau khi nối, hoặc đếm trước khi nối."
	},
	"tb-calc": {
		"s": "Thẻ này nói về trường tính toán, tức calculated field, trong Tableau. Đáng biết vì nó chỉ là một công thức, không phải một phép đo mới từ thực tế. Điểm quan trọng nhất là thứ tự: tỷ lệ của tổng khác với tổng của các tỷ lệ. Hãy lấy ví dụ hai dòng. Dòng một có mười form trên một trăm lượt bấm. Dòng hai có ba mươi form trên một trăm lượt bấm. Tỷ lệ của tổng là bốn mươi chia hai trăm, tức hai mươi phần trăm. Trung bình hai tỷ lệ của từng dòng là mười và ba mươi, trung bình cũng hai mươi phần trăm, nhưng chỉ vì hai mẫu số bằng nhau. Nếu mẫu số khác nhau thì hai cách ra hai số khác nhau. Câu tỷ lệ của tuần thường là tỷ lệ của tổng. Và công thức này cũng không vá được phép nối đã nhân dòng. Ý cần nhớ: công thức không đi đếm thêm.",
		"q": "Tỷ lệ của tuần thường là tỷ lệ của tổng hay trung bình các tỷ lệ theo dòng?",
		"a": "Thường là tỷ lệ của tổng, tức tổng form chia cho tổng lượt bấm."
	},
	"tb-dual": {
		"s": "Thẻ này nói về cách dựng một trang báo cáo trong Tableau: mỗi trang cho một quyết định, và hai trục phải ghi hai đơn vị. Đáng biết vì thêm nhiều thứ không làm trang rõ hơn. Giả sử quyết định là có tăng ngân sách cho kênh này không. Khi đó trang chỉ cần tỷ lệ form và mức chi. Nếu thêm tám bộ lọc, trang trở thành một màn hình tìm kiếm chứ không còn là một quyết định, và việc suy nghĩ bị đẩy sang người xem. Về hai trục, khi một đường cắt đường kia thì điểm giao không có ý nghĩa nếu hai đơn vị khác nhau. Mỗi thang còn có thể không bắt đầu từ số không, nên form và chi phí trên hai trục tự chọn có thể trông giống nhau. Hãy ghi rõ hai nhãn, hoặc tách thành hai hình. Ý cần nhớ: hai đơn vị trên một trục là một hình gây hiểu lầm nếu không ghi rõ.",
		"q": "Vì sao điểm giao của hai đường trên hai trục có thể gây hiểu lầm?",
		"a": "Vì hai trục có đơn vị và thang khác nhau, nên điểm giao không có ý nghĩa thật."
	},
	"xa-text": {
		"s": "Thẻ này nói về các hàm xử lý chữ trong bảng tính. Đáng biết vì làm sạch chữ chưa phải là có số. Giả sử có mã F gạch nối mười hai. Hàm lấy bên trái cho ra chữ F, hàm bỏ khoảng trắng thừa chỉ xóa dấu cách. Không hàm nào trong đó ra số mười hai, trừ khi bạn tách phần số ra rồi đổi kiểu. Hàm đổi chữ thành số sẽ báo lỗi trên chữ không phải số, và đó là điều bạn muốn, vì lỗi lộ ra còn hơn một tổng im lặng bị thiếu. Hàm nối chữ chỉ nối chữ, không cộng tiền. Các hàm viết hoa hay viết thường cũng không làm một mã thành khóa tra đúng, nếu bảng kia không theo cùng quy tắc. Ý cần nhớ: cắt một mã ra không thành một số tiền.",
		"q": "Sau khi cắt phần số ra từ một mã chữ, bước tiếp theo là gì?",
		"a": "Phải đổi kiểu từ chữ sang số, rồi mới được cộng."
	},
	"xa-count": {
		"s": "Thẻ này nói về hai hàm đếm trong bảng tính: một hàm đếm ô số, một hàm đếm ô không rỗng. Đáng biết vì chọn nhầm hàm sẽ ra một con số trông hợp lý nhưng sai. Giả sử có một trăm tên và cột form chỉ có chín mươi ô số, mười ô trống. Hàm đếm số trên cột form cho chín mươi. Hàm đếm ô không rỗng trên cột tên cho một trăm. Nếu bạn báo cáo một trăm form thì đã sai. Hàm đếm số bỏ qua chữ, ô trống và lỗi, mà không cảnh báo. Vì vậy một cột toàn mã dạng chữ cho kết quả bằng không dù cột đầy. Còn hàm đếm ô không rỗng có thể đếm cả ô chỉ chứa dấu cách. Hãy nhìn vài ô thật, đừng chỉ tin vào tổng đếm. Ý cần nhớ: kết quả bằng không trên cột tên là đếm sai hàm.",
		"q": "Đếm cột tên thì dùng hàm đếm ô số hay hàm đếm ô không rỗng?",
		"a": "Dùng hàm đếm ô không rỗng, vì hàm đếm số bỏ qua chữ."
	},
	"xa-match": {
		"s": "Thẻ này nói về cặp hàm INDEX và MATCH, và vì sao chúng nhìn được sang trái còn VLOOKUP thì không. Đáng biết vì khi khóa tra cứu không nằm ở cột trái nhất của vùng, VLOOKUP không dùng được. Cách làm là dùng hàm vị trí để tìm khóa nằm ở dòng thứ mấy, rồi dùng hàm chỉ mục để lấy ô tương ứng trong cột kết quả. Hàm vị trí không quan tâm cột kết quả nằm bên nào. Ví dụ, khóa K ba nằm ở vị trí thứ ba của cột khóa, nên hàm chỉ mục lấy ô thứ ba của cột kết quả. Tham số cuối bằng không nghĩa là tìm đúng. Không thấy thì ra lỗi, giống VLOOKUP khi chọn sai. Đừng đặt tham số bằng một nếu cột chưa sắp xếp. Và hãy khóa vùng bằng dấu đô la để chèn hàng không làm lệch. Ý cần nhớ: nhìn sang trái không phải một mẹo mà chỉ là hướng của cột.",
		"q": "Tham số cuối bằng không trong hàm vị trí có nghĩa là gì?",
		"a": "Nghĩa là tìm khớp đúng, và nếu không thấy thì báo lỗi."
	},
	"xa-what": {
		"s": "Thẻ này nói về các công cụ giả định trong bảng tính, như bảng hai chiều, Goal Seek và Scenario Manager. Đáng biết vì đổi một ô đầu vào không có nghĩa là nhìn thấy tương lai. Giả sử lãi bằng số bán nhân giá trừ chi phí. Với số bán năm mươi, giá một trăm hai mươi và chi phí ba nghìn, lãi là ba nghìn. Một bảng hai chiều đổi số bán và giá, nhưng mỗi ô chỉ là một lần tính lại công thức đó, chứ không phải một tuần đã xảy ra. Goal Seek đảo một đầu vào để đầu ra trúng một con số, nhưng vẫn là công thức của bạn, và có thể có nhiều đầu vào cùng ra một đích. Scenario Manager chỉ lưu các bộ đầu vào. Bộ nào cũng không phải sự thật cho đến khi sự việc xảy ra và bạn đo lại. Ý cần nhớ: một ô giả định không phải một quan sát.",
		"q": "Nên gọi kết quả từ bảng giả định là dự báo hay phép thử trên công thức?",
		"a": "Là phép thử trên công thức, vì nó chỉ tính lại công thức với đầu vào bạn chọn."
	},
	"xa-macro": {
		"s": "Thẻ này nói về macro trong bảng tính. Đáng biết vì nó làm việc lặp lại rất tốt nhưng không đưa ra quyết định. Macro lặp lại các thao tác bấm. Ví dụ, mỗi sáng dán số vào một vùng cố định là việc macro làm được. Còn câu hỏi có tăng ngân sách không thì không nằm trong macro, vì không có thao tác bấm nào chứa câu hỏi đó. Macro thực chất là mã, thường viết bằng VBA, dù bạn ghi bằng nút bấm. Nó có thể sửa dữ liệu mà không hỏi lại. Vì vậy một file có macro là một file có chương trình, và mở file từ người lạ là chạy chương trình của họ. Macro không thêm kiểm định, không thêm mô hình và không biết đơn vị dòng của bảng. Nếu macro dán ba mươi dòng vào một vùng, nó ghi đè ba mươi dòng đó mỗi lần chạy. Ý cần nhớ: đều đặn không có nghĩa là đúng; macro chỉ đều đặn.",
		"q": "Vì sao mở file có macro từ người lạ là rủi ro?",
		"a": "Vì macro là mã chương trình, mở file là chạy chương trình của họ."
	},
	"pb-model": {
		"s": "Thẻ này nói về mô hình dữ liệu trong Power BI, gồm các bảng và quan hệ giữa chúng. Đáng biết vì biểu đồ chỉ là một câu hỏi đặt lên mô hình, nên mô hình sai thì biểu đồ đẹp mấy cũng sai. Giả sử có một trăm khách và hai trăm đơn. Một thẻ đếm đơn hàng sẽ hiện hai trăm. Đặt tên thẻ đó là khách thì sai, vì hai trăm là số đơn. Hướng lọc quyết định bảng nào lọc được bảng nào, và lọc ngược không phải mặc định như nhiều người nghĩ. Một quan hệ không hoạt động sẽ không được dùng cho đến khi một công thức đo gọi đến nó. Nếu có hai đường nối giữa cùng một cặp bảng, mô hình bị mơ hồ, và biểu đồ không chọn giúp bạn đường nào đúng. Hãy sửa quan hệ trước, rồi mới tin biểu đồ. Ý cần nhớ: biểu đồ đẹp trên quan hệ sai là một con số sai được trình bày tốt.",
		"q": "Nên làm gì trước khi tin một biểu đồ trong Power BI?",
		"a": "Kiểm tra và sửa các quan hệ giữa các bảng trong mô hình."
	},
	"pb-pq": {
		"s": "Thẻ này nói về Power Query, công cụ làm sạch dữ liệu trong Power BI. Đáng biết vì nó là một công thức, và làm mới chính là chạy lại công thức đó. Giả sử trong query có một bước lọc chỉ giữ kênh TikTok. Tuần sau làm mới, nguồn đã có thêm kênh, nhưng kết quả vẫn chỉ ra TikTok. Điều đó không có nghĩa là nguồn hết kênh. Nếu nguồn có năm kênh mà bước lọc giữ một kênh, bảng sau khi làm mới luôn chỉ có một kênh. Power Query không sửa file nguồn, mà dựng một bảng mới mỗi lần làm mới. Đổi thứ tự các bước là đổi kết quả. Một bước đổi kiểu chữ sang số sẽ biến ô không phải số thành lỗi hoặc ô trống, nên hãy xem các dòng lỗi, đừng chỉ nhìn một thẻ số. Ý cần nhớ: làm mới không phải là lấy thêm cho đủ, mà là chạy lại đúng những bước đang có.",
		"q": "Làm mới dữ liệu trong Power Query thực chất làm gì?",
		"a": "Nó chạy lại đúng những bước trong query trên nguồn, chứ không tự lấy thêm cho đủ."
	},
	"pb-grain": {
		"s": "Thẻ này nói về đơn vị dòng, tức mỗi dòng của bảng là một cái gì. Đáng biết vì đếm dòng là đếm chính cái đó. Giả sử có hai trăm dòng hàng, thuộc tám mươi đơn của năm mươi khách. Cả ba con số đều thật, và một thẻ số phải nói rõ nó đang hiện số nào. Nếu bạn muốn đếm khách, phải đếm khóa khách ở bảng khách, hoặc đếm giá trị khác nhau một cách có chủ đích. Kéo nhầm bảng sẽ ra một số khác, trong khi biểu đồ vẫn trông bình thường. Sai đơn vị dòng không sửa được bằng định dạng. Đây cũng là ý đã gặp ở bảng tổng hợp trong Excel và phép nối ở Tableau. Hãy ghi đơn vị dòng vào tên bảng để khỏi quên. Ý cần nhớ: đổi tên thẻ số không đổi được đơn vị dòng.",
		"q": "Hai trăm dòng hàng, tám mươi đơn, năm mươi khách là gì?",
		"a": "Là ba phép đếm cho ba đơn vị khác nhau, và cả ba đều là số thật."
	},
	"pb-dax": {
		"s": "Thẻ này nói về hai thứ trong Power BI: cột tính và measure, tức công thức đo. Đáng biết vì chỉ một trong hai biết nghe bộ lọc. Cột tính lưu giá trị cho từng dòng, tính một lần lúc làm mới. Measure thì tính lại theo bộ lọc đang bật, như slicer, trục hay các biểu đồ khác. Ví dụ, khi bạn lọc TikTok, measure form đổi thành form của TikTok. Còn cột tỷ lệ của dòng vẫn là tỷ lệ đã lưu, không phải tỷ lệ của lát cắt. Cột tính cũng tốn bộ nhớ, vì được tính cho mọi dòng kể cả dòng biểu đồ không hiện. Lấy hai dòng: mười trên một trăm và ba mươi trên một trăm. Cộng hai cột tỷ lệ cho bốn mươi phần trăm, nhưng measure lấy tổng form chia tổng lượt bấm cho hai mươi phần trăm. Ý cần nhớ: cột tính không nghe slicer, còn measure không nằm sẵn trong từng dòng.",
		"q": "Số cần đổi theo bộ lọc thì nên viết cột tính hay measure?",
		"a": "Nên viết measure, vì measure tính lại theo bộ lọc đang bật còn cột tính thì không."
	},
	"pb-page": {
		"s": "Thẻ này nói về việc một trang báo cáo chỉ nên phục vụ một quyết định. Đáng biết vì báo cáo nhồi nhiều thứ thì người xem không biết nhìn vào đâu. Bạn hình dung thế này. Quyết định của tuần là chia ngân sách. Vậy trang chỉ cần tỷ lệ form, mức chi và một bộ lọc theo tuần. Một bộ lọc theo màu logo thì không giúp ai chia ngân sách, nên nó thuộc về trang khác. Khi cần đào sâu, bạn mở một trang riêng cho một câu hỏi riêng, chứ không nhét thêm biểu đồ vào trang cũ. Còn dấu trang đã lưu, hay bookmark, chỉ là một trạng thái được ghi lại. Nếu người xem phải bấm một bookmark mới thấy số đúng, nghĩa là trang đang giấu số đúng. Con số đơn giản để nhớ: ba biểu đồ và một bộ lọc cho một quyết định, tốt hơn tám biểu đồ và sáu bộ lọc. Điều cần nhớ: một trang không giúp quyết định điều gì thì chưa phải là một báo cáo.",
		"q": "Một trang báo cáo tốt nên bắt đầu bằng việc viết ra điều gì trên đầu trang?",
		"a": "Một câu hỏi, tức là một quyết định mà trang đó phục vụ. Biểu đồ nào không phục vụ câu đó thì chuyển sang trang khác."
	},
	"pb-rls": {
		"s": "Thẻ này nói về hai cách khác nhau để kiểm soát ai thấy gì: giới hạn dữ liệu theo vai trò và bộ lọc. Đáng biết vì nhầm hai thứ này có thể làm lộ dữ liệu. Ví dụ đời thường: công ty có bốn trưởng kênh. Mỗi người có một vai trò riêng, và vai trò đó chỉ giữ lại đúng dòng dữ liệu của kênh họ. Bốn trưởng kênh thì cần bốn vai trò. Họ không có cách nào bật kênh khác lên xem. Còn bộ lọc mặc định thì khác, người xem tự bỏ chọn là thấy hết. Ngoài ra, ẩn một trang cũng không phải là bảo mật, vì ai biết đường vẫn vào được, và dữ liệu vẫn nằm trong mô hình của họ. Một công thức bỏ bộ lọc cũng có thể vô tình nhìn ra ngoài vai trò, nên bạn phải kiểm bằng đúng tài khoản của người đó. Điều cần nhớ: bộ lọc là một lựa chọn, còn giới hạn theo vai trò là một ranh giới.",
		"q": "Muốn giấu dữ liệu của kênh khác khỏi một trưởng kênh thì nên dùng vai trò hay bộ lọc?",
		"a": "Dùng vai trò, vì nó là luật áp lên người xem. Bộ lọc chỉ giúp họ tập trung, họ vẫn có thể tự bật tắt."
	},
	"pb-refresh": {
		"s": "Thẻ này nói về việc kiểm tra xem dữ liệu đã được làm mới thành công chưa trước khi nói một con số là của hôm nay. Đáng biết vì báo cáo lỗi làm mới vẫn chạy bình thường, chỉ là âm thầm cũ. Ví dụ: nguồn thêm một nghìn dòng đêm qua, nhưng lần làm mới bị lỗi. Báo cáo vẫn mở được, biểu đồ vẫn đẹp, chỉ thiếu một nghìn dòng. Nếu nền là hai mươi nghìn dòng thì bạn đang hụt năm phần trăm, và dễ tưởng đó là một tuần yếu. Hai chế độ dữ liệu cũng không cùng nghĩa với chữ mới. Chế độ nhập giữ dữ liệu trong file cho đến lần làm mới sau. Chế độ truy vấn trực tiếp thì hỏi nguồn mỗi lần mở báo cáo. Lịch có thể xanh ở máy thiết kế nhưng đỏ trên dịch vụ, nên hãy đọc trạng thái trên dịch vụ. Điều cần nhớ: im lặng sau một lần làm mới lỗi nghĩa là bạn đang xem số cũ.",
		"q": "Báo cáo vẫn chạy bình thường nhưng thiếu dòng của đêm qua, bạn nên kiểm tra điều gì đầu tiên?",
		"a": "Giờ làm mới thành công gần nhất trên dịch vụ. Im lặng sau một lần lỗi nghĩa là đang xem số cũ."
	},
	"fw-5why": {
		"s": "Thẻ này nói về cách hỏi vì sao liên tục để tìm ra một điều có thể thay đổi được. Đáng biết vì nhiều người hỏi đủ năm lần mà vẫn chưa đến đâu. Ví dụ: một biểu mẫu bị sai. Vì sao? Vì thiếu một trường. Vì sao? Vì đang dùng mẫu cũ. Vì sao? Vì không ai được giao việc cập nhật mẫu. Đến đây bạn đã có điểm can thiệp rồi: giao cho một người việc cập nhật mẫu. Ba câu hỏi là đủ, không cần hỏi thêm câu thứ tư và thứ năm. Con số năm chỉ là gợi ý để đếm, không phải một định lý. Chuỗi vì sao viết trên giấy cũng chưa chứng minh nguyên nhân, nó là giả thuyết để đem đi đo. Một chuỗi dừng ở thị trường hay ý thức kém thì chưa có điểm can thiệp. Điều cần nhớ: đủ năm câu cũng không cứu được một chuỗi dừng ở lỗi của con người.",
		"q": "Khi nào bạn có thể dừng hỏi vì sao?",
		"a": "Khi gặp một điều có thể thay đổi, thường là một khâu trong quy trình. Dừng ở lỗi của con người thì chưa đủ."
	},
	"fw-spin": {
		"s": "Thẻ này nói về bốn loại câu hỏi dùng để hiểu vấn đề của khách. Đáng biết vì nó giúp cuộc trò chuyện đi từng bước, thay vì nhảy từ lời chào sang báo giá. Bốn loại là tình huống, vấn đề, hệ quả và lợi ích mong muốn. Ví dụ: hỏi mỗi tuần được bao nhiêu form, đó là tình huống. Khách nói không biết kênh nào đáng tiền, đó là vấn đề. Hỏi tiếp thì ra ngân sách tháng sau đang chốt theo cảm giác, đó là hệ quả. Cuối cùng khách nói muốn có một thước đo để cắt bớt một kênh, đó là lợi ích mong muốn. Không câu nào trong đó là hợp đồng. Bộ câu hỏi này không tạo ra nhu cầu. Nếu bạn đặt sẵn câu trả lời vào miệng khách thì đó là câu bạn gán cho họ. Hãy ghi lại đúng lời khách nói, và tách số liệu khỏi ý kiến. Điều cần nhớ: bộ bốn câu hỏi này không làm ai đúng, nó chỉ sắp xếp câu hỏi.",
		"q": "Bốn loại câu hỏi trong bộ này dùng để làm gì?",
		"a": "Để hiểu vấn đề của khách theo thứ tự, không phải để ép khách gật đầu. Nó chỉ sắp xếp câu hỏi."
	},
	"fw-ask": {
		"s": "Thẻ này nói về việc tách câu hỏi khỏi kết luận. Đáng biết vì một cuộc trò chuyện hay dễ khiến ta tưởng mình đã biết sự thật. Ví dụ: bạn hỏi anh trưởng phòng, anh có thấy kênh này yếu không. Anh trả lời là yếu. Đó mới là một ý kiến, chưa phải kết luận. Muốn kết luận thì cần một ngưỡng đã viết ra từ trước, chẳng hạn tỷ lệ form dưới hai phần trăm là yếu. Cách làm gọn là ghi câu hỏi ở một cột, câu trả lời ở một cột khác, và chỉ kết luận khi đã có thước đo. Năm câu hỏi cho năm câu trả lời chỉ là năm ý kiến. Các buổi học về khung phỏng vấn vẫn là cách hỏi, không phải một bài chấm điểm ẩn. Không thang điểm nào biến một cuộc trò chuyện thành sự thật. Điều cần nhớ: hỏi xong chưa có nghĩa là đã biết.",
		"q": "Một người trả lời kênh này yếu, vậy đã có thể kết luận chưa?",
		"a": "Chưa. Đó mới là ý kiến, phải gắn với một ngưỡng đo đã viết ra từ trước mới thành kết luận."
	},
	"fw-bmc": {
		"s": "Thẻ này nói về khung chín ô mô tả một mô hình kinh doanh. Đáng biết vì điền kín chín ô rất dễ tạo cảm giác đã hiểu thị trường. Hãy coi mỗi ô là một giả thuyết. Ví dụ: ô kênh ghi TikTok. Cách kiểm tra là lấy tỷ lệ form trên số lượt bấm của kênh đó, cùng một đơn vị dòng. Nếu không có cách kiểm tra thì ô đó vẫn chỉ là lời nói. Chín ô giúp bạn nhìn toàn cảnh, nhưng không thay được một mục tiêu cụ thể và đo được. Ô doanh thu và ô chi phí cũng không tự thành báo cáo lãi lỗ, chúng chỉ là giả thuyết về tiền đến từ đâu và đi đâu. Cho dù là ý tưởng mới hay một việc đang chạy, tờ giấy này vẫn chỉ là tờ giấy cho đến khi mỗi ô có cách đo. Nếu mới kiểm được hai ô thì còn bảy ô chưa có bằng chứng. Điều cần nhớ: điền kín canvas chưa có nghĩa là đã hiểu thị trường.",
		"q": "Chín ô trong khung này nên được xem là gì?",
		"a": "Là chín giả thuyết. Mỗi ô cần một câu kiểm tra được, hoặc ghi rõ là chưa có căn cứ."
	},
	"fw-mece": {
		"s": "Thẻ này nói về cách chia một câu hỏi thành các nhánh không chồng lên nhau và cộng lại đủ cả câu hỏi. Giới chuyên môn gọi là MECE, hiểu đơn giản là chia sao cho không trùng và không sót. Đáng biết vì chia sai thì số liệu đếm loạn. Ví dụ: câu hỏi là form đến từ đâu. Bạn chia theo kênh, mỗi form thuộc đúng một kênh, và các kênh cộng lại đủ một trăm phần trăm của tuần. Ba kênh có năm mươi, ba mươi và hai mươi form thì cộng lại đúng một trăm form. Nếu bạn thêm nhánh khách trẻ, đó là một tiêu chí khác chồng lên, nên không còn chia đúng nữa. Chồng nhau thì một đơn bị cộng hai lần. Sót thì có nhóm không bao giờ được nhìn tới. Cách chia này cũng không chứng minh nhánh nào là nguyên nhân, nó chỉ giữ cho cái cây không đếm loạn. Điều cần nhớ: chồng nhau là đếm hai lần, sót là không nhìn thấy.",
		"q": "Hai lỗi nào xảy ra khi các nhánh không chia gọn?",
		"a": "Chồng nhau thì một đơn bị đếm hai lần, còn sót thì một nhóm không bao giờ được nhìn tới."
	},
	"fw-7p": {
		"s": "Thẻ này nói về bảy chữ P, một danh sách kiểm tra cho các dịch vụ. Đáng biết vì nó nhắc bạn không bỏ sót những phần dịch vụ mà sản phẩm thường không có. Bốn chữ P đầu là bộ marketing cổ điển. Ba chữ P sau nhắc rằng dịch vụ có con người, có quy trình và có bằng chứng nhìn thấy được. Ví dụ xét một spa. Quy trình là các bước của một lượt chăm sóc. Bằng chứng nhìn thấy được là căn phòng và phiếu dịch vụ. Mục nào còn thiếu thì ghi là thiếu, đừng cộng trừ nhân điểm. Danh sách này cũng không phải lúc nào cũng khớp với mọi bài toán. Một việc sản xuất thuần có thể không cần căn phòng tiếp khách. Hãy dùng nó như danh sách kiểm tra cho đúng loại dịch vụ: bảy mục, mỗi mục một câu mô tả, không có tổng điểm. Điều cần nhớ: danh sách kiểm tra thì không có ngôi vô địch.",
		"q": "Bảy chữ P nên được dùng như thế nào?",
		"a": "Như một danh sách kiểm tra, đi qua đủ bảy mục, không xếp hạng và không cho điểm."
	},
	"fw-5c": {
		"s": "Thẻ này nói về năm phía cần nhìn trước khi chọn một phương án. Đáng biết vì nhiều bản trình bày chỉ toàn tính từ mà không có điều gì kiểm tra được. Năm phía là khách hàng, đối thủ, đối tác, môi trường bên ngoài và chính công ty. Ví dụ: khách hàng là ai đang gửi form. Đối thủ là ai đang mua cùng một kênh. Đối tác là đơn vị đo và đơn vị chạy quảng cáo. Môi trường là một quy định hoặc một mùa vụ. Công ty là năng lực thật sự có trong thời hạn. Mỗi phía cần một câu có thể bị chứng minh là sai. Chưa có câu đó thì phía ấy còn trống. Nếu bên làm dữ liệu đo sai đơn vị dòng, công ty có thể đang quyết định trên số sai. Năm phía thì cần năm câu kiểm tra được, chứ không phải năm tính từ. Điều cần nhớ: tính từ không lấp đầy được một phía.",
		"q": "Mỗi phía trong năm phía cần có gì để không còn trống?",
		"a": "Một câu có thể kiểm tra, tức là có thể bị chứng minh là sai. Tính từ thì không đủ."
	},
	"st-shape": {
		"s": "Thẻ này nói về hình dạng của một câu chuyện dữ liệu, gồm ba phần: tình huống bình thường, chỗ vướng và việc cần chốt. Đáng biết vì thiếu một phần là cuộc họp trở thành buổi đọc số. Ví dụ: bình thường, tỷ lệ form trên lượt bấm là bốn phần trăm. Chỗ vướng là tuần này một kênh chỉ còn hai phần trăm, chênh hai điểm phần trăm. Việc cần chốt là có cắt ngân sách kênh đó trong hạn đã viết hay không. Ba phần này không phải mở bài, thân bài, kết bài của một bài văn. Phần kết là một quyết định, không phải lời hy vọng sẽ tốt hơn. Nếu không có chỗ vướng thì không cần họp. Và chỗ vướng mà không có số thì vẫn chỉ là ý kiến. Điều cần nhớ: một biểu đồ không có chỗ vướng chỉ là tấm áp phích.",
		"q": "Ba phần của một câu chuyện dữ liệu là gì?",
		"a": "Tình huống bình thường, chỗ vướng, và việc cần chốt. Phần cuối phải là một quyết định."
	},
	"st-who": {
		"s": "Thẻ này nói về việc xác định người nghe trước khi làm bài trình bày. Đáng biết vì cùng một con số nhưng người nghe khác nhau thì câu chuyện khác nhau. Ví dụ: người nghe sẽ chốt ngân sách, họ có năm phút, và đang tin rằng TikTok rẻ. Câu chuyện phải chạm vào niềm tin đó bằng một tỷ lệ cụ thể, chứ không phải bằng mười slide định nghĩa. Năm phút cho một quyết định thì khoảng ba slide là đủ. Người phân tích cần biết đơn vị dòng và cách đếm. Người quyết định cần biết chỗ vướng và các phương án. Nhét cả hai vào một bộ slide thì không ai dùng hết nó. Đừng bắt người quyết định đi qua phần làm sạch dữ liệu chỉ để chứng minh bạn đã vất vả. Hãy viết ra người nghe trước khi viết slide. Điều cần nhớ: sai người nghe thì số đúng cũng trượt.",
		"q": "Bạn nên viết ra điều gì trước khi bắt tay làm slide?",
		"a": "Người nghe: họ quyết định được việc gì và có bao nhiêu phút."
	},
	"st-insight": {
		"s": "Thẻ này nói về năm dạng nhận xét từ dữ liệu: xu hướng, khác biệt, phần của tổng, điểm lạ và đi cùng nhau. Đáng biết vì gọi đúng dạng thì chọn biểu đồ dễ hơn nhiều. Ví dụ: tám tuần của một kênh là xu hướng, nên dùng biểu đồ đường. Ba kênh trong một tuần là khác biệt, nên dùng cột. Một tuần với đủ các kênh là phần của tổng. Một tuần gấp mười các tuần còn lại là điểm lạ, cần đi kiểm tra chứ chưa vội kết luận, vì nó có thể chỉ là lỗi gõ. Hai thứ đi cùng nhau cho thấy tương quan mô tả, không phải quan hệ nhân quả. Năm dạng này giúp chọn biểu đồ nhưng không thay được một phép kiểm định. Nhầm dạng là nhầm biểu đồ, và người nghe sẽ nhớ chính biểu đồ đó. Điều cần nhớ: gọi đúng dạng thì biểu đồ gần như tự được chọn.",
		"q": "Tám tuần liên tiếp của một kênh thuộc dạng nhận xét nào?",
		"a": "Dạng xu hướng, và nên dùng biểu đồ đường."
	},
	"st-pyramid": {
		"s": "Thẻ này nói về việc nói câu cần chốt trước, rồi mới đến lý do. Đáng biết vì người nghe bận, và câu đầu tiên quyết định họ có theo kịp hay không. Ví dụ: bạn mở bằng một câu, đề nghị không tăng ngân sách kênh này trong hạn ngày ba mươi tháng mười một. Sau đó nêu lý do: tỷ lệ hai phần trăm đang dưới ngưỡng ba phần trăm, và không kịp sửa trong hạn. Cuối cùng là bằng chứng, đếm cùng một cách với tuần nền. Một câu chốt, hai lý do, mỗi lý do một bằng chứng sẽ gọn hơn mười phút dẫn dắt. Cách sắp xếp này chỉ xếp thứ tự lập luận, không tạo ra lập luận. Nếu các lý do chồng nhau thì cây chưa chia gọn. Nếu bằng chứng chỉ là ý kiến thì nó vẫn là ý kiến. Đừng dùng thứ tự này để giấu một mẫu số yếu ở slide cuối. Điều cần nhớ: giữ câu trả lời đến cuối là trò giấu bài, không phải phân tích.",
		"q": "Câu đầu tiên của bài trình bày nên là gì?",
		"a": "Việc cần chốt, tức là đề nghị của bạn. Lý do và bằng chứng đi sau."
	},
	"st-one": {
		"s": "Thẻ này nói về việc mỗi trang chỉ nên xin một việc. Đáng biết vì hai tiêu đề là hai câu chuyện, nhét chung thì cả hai đều yếu. Ví dụ: trang một chỉ nói về ngân sách kênh trong hạn này. Trang hai, nếu còn giờ, mới nói về thương hiệu. Người nghe chỉ có năm phút thì chỉ nhận trang một. Một thông điệp không phải khẩu hiệu. Nó là một quyết định cộng với các lý do của quyết định đó. Nếu bạn nhét một nhận xét về xu hướng vào trang đang xin một sự khác biệt, thì bạn đã trộn hai dạng, hai câu. Người nghe thường nhớ biểu đồ cuối cùng, và thường đó là biểu đồ rối nhất. Hai quyết định cần hai trang, mỗi trang một tiêu đề. Hãy tách đến khi mỗi trang chỉ xin một việc. Điều cần nhớ: thêm một chữ và là thêm một cuộc họp.",
		"q": "Hai quyết định thì nên làm bao nhiêu trang?",
		"a": "Hai trang, mỗi trang một tiêu đề và xin một việc."
	},
	"st-board": {
		"s": "Thẻ này nói về bảng phác thảo câu chuyện, hay storyboard. Đáng biết vì nhiều người mở bảng màu trước khi biết mình định nói gì. Storyboard là thứ tự các câu, không phải bảng màu. Ví dụ: khung một là câu chốt. Khung hai là tỷ lệ so với ngưỡng. Khung ba là phương án trong hạn. Nếu bỏ khung hai thì khung ba mất căn cứ, chỉ còn hai câu mà câu cuối đứng lơ lửng. Đổi màu xanh của cái cột không vá được chỗ hổng đó. Một câu chuyện dữ liệu giống một chuỗi có chủ đích, chứ không phải bảng cảm hứng. Một khung không giao việc gì cho người nghe là khung trang trí, và trang trí không phải phân tích. Hãy xếp các câu trước, màu để sau, và chỉ để các câu dễ đọc hơn. Điều cần nhớ: chưa xếp được các câu bằng chữ thì đừng mở bảng màu.",
		"q": "Bạn nên làm gì trước khi chọn màu cho bài trình bày?",
		"a": "Xếp thứ tự các câu bằng chữ. Màu chỉ để sau, để các câu dễ đọc hơn."
	},
	"or-obj": {
		"s": "Thẻ này nói về việc phân biệt hai thứ trong bài toán tối ưu: mục tiêu và biến quyết định. Đáng biết vì nhầm hai thứ này thì bài toán không còn gì để giải. Ví dụ: bạn chọn số suất quảng cáo của từng kênh. Đó là biến quyết định, thứ bạn được phép thay đổi. Doanh thu thì là kết quả tính ra từ các suất đó bằng một công thức, nên bạn không tự gõ doanh thu vào. Ba kênh nghĩa là ba biến số suất, còn doanh thu là một ô công thức của ba biến đó. Nếu bạn gõ tay vào ô mục tiêu thì bạn tự điền đáp án. Một giới hạn cũng không phải mục tiêu: không vượt ngân sách là giới hạn, còn lợi nhuận mới có thể là mục tiêu. Hai thứ cùng một ô là một mô hình gãy. Các con số ở đây chỉ minh họa cấu trúc. Điều cần nhớ: nếu gõ tay được vào ô mục tiêu thì mô hình chưa thành.",
		"q": "Doanh thu trong ví dụ là biến quyết định hay mục tiêu, và vì sao?",
		"a": "Là mục tiêu, vì nó được tính ra bằng công thức từ số suất. Số suất mới là biến để bạn chọn."
	},
	"or-con": {
		"s": "Thẻ này nói về giới hạn trong bài toán tối ưu. Mỗi giới hạn là một nguồn lực không được tiêu hai lần. Đáng biết vì quên một giới hạn thì kết quả tối ưu trở nên vô nghĩa. Ví dụ: ngân sách là một trăm. Số suất nhân với đơn giá, cộng lại, phải không vượt quá một trăm. Quên dòng này thì phần mềm cứ tăng số suất mãi. Nếu viết giới hạn sai chiều thì bạn đã giải một bài toán khác, thậm chí không còn phương án nào. Không có phương án nghĩa là các giới hạn mâu thuẫn nhau, không phải phần mềm hỏng. Kết quả cứ tăng mãi nghĩa là thiếu một giới hạn. Cả hai là lỗi mô hình. Ba kênh, mỗi kênh tối đa bốn mươi suất, mà ngân sách chỉ đủ sáu mươi suất, thì tổng không thể là một trăm hai mươi. Con số chỉ để minh họa. Điều cần nhớ: thiếu một giới hạn thì tối ưu là cái hố không đáy.",
		"q": "Nếu phần mềm giải báo kết quả tăng mãi không dừng, nguyên nhân thường là gì?",
		"a": "Mô hình thiếu một giới hạn. Đó là lỗi mô hình, không phải kết quả kinh doanh."
	},
	"or-sens": {
		"s": "Thẻ này nói về báo cáo độ nhạy trong bài toán tuyến tính, và vì sao nó chỉ đúng trong một khoảng. Đáng biết vì dễ bị cám dỗ nhân số rồi đưa thẳng vào kế hoạch. Ví dụ: giá bóng của ngân sách là không phẩy hai, đúng trong khoảng cộng thêm không quá mười. Cộng thêm năm thì lợi ích tăng khoảng một, đó là đúng. Nhưng cộng thêm ba mươi là ra ngoài khoảng, nên đừng lấy ba mươi nhân không phẩy hai rồi ghi vào bản tóm tắt. Lý do là báo cáo này chỉ nói về đỉnh nghiệm đang chọn. Đổi một hệ số vượt quá khoảng thì đỉnh đổi, và các giá bóng đổi theo. Nó cũng không phải đạo hàm dùng mãi được, và không áp cho bài phi tuyến theo cùng một cách. Các con số chỉ để minh họa. Điều cần nhớ: hết khoảng thì giá bóng đó cũng hết hiệu lực.",
		"q": "Khi muốn thay đổi vượt ngoài khoảng cho phép của giá bóng, bạn nên làm gì?",
		"a": "Giải lại bài toán, vì ngoài khoảng đó giá bóng không còn đáng tin."
	},
	"or-solv": {
		"s": "Thẻ này nói về hai loại bài toán tối ưu: bài tuyến tính tìm một đỉnh, còn bài cong có thể dừng ở cực trị cục bộ. Đáng biết vì phần mềm báo xong không có nghĩa là đã tìm được chỗ tốt nhất. Ví dụ: hai biến, các giới hạn là những đường thẳng, vùng khả thi là một đa giác, và phần mềm đứng ở một đỉnh của đa giác đó. Với bài như vậy bạn tin vào đỉnh, rồi đọc độ nhạy trong khoảng cho phép. Thêm một bình phương vào mục tiêu thì bài trở nên cong, và không còn chỉ cần xét đỉnh nữa. Phương pháp cho bài cong đi theo dốc tại chỗ, nên có thể dừng vì bước quá nhỏ chứ không phải vì hết chỗ tốt hơn. Vì vậy hãy thử nhiều điểm xuất phát. Ba điểm xuất phát cho ba kết quả khác nhau nghĩa là chưa tìm được đỉnh toàn cục. Điều cần nhớ: với bài cong, phần mềm xong nghĩa là đã dừng, không phải hết chỗ tốt hơn.",
		"q": "Với bài cong, làm sao bạn tăng niềm tin vào kết quả?",
		"a": "Thử nhiều điểm xuất phát khác nhau, và đừng gọi kết quả là toàn cục khi chúng cho ra các đáp án khác nhau."
	},
	"or-sheet": {
		"s": "Thẻ này nói về việc đặt mô hình tối ưu vào bảng tính sao cho phần mềm giải đọc đúng. Đáng biết vì phần mềm chỉ đọc những ô bạn chỉ định. Ví dụ: các ô biến nằm ở một vùng ba ô, ô mục tiêu là một ô riêng, và giới hạn ngân sách so sánh một ô tổng chi với một ô trần ngân sách. Nếu bạn gõ một lời nhắc vào ô khác thì nó không tham gia vào bài toán. Ô biến phải là số mà phần mềm được phép sửa. Nếu trỏ nhầm vào một ô đang chứa công thức thì hoặc báo lỗi, hoặc bạn tưởng đang chọn một thứ mà thực ra công thức đang giữ. Khai báo tuyến tính mà có hàm điều kiện hoặc phép nhân hai biến thì báo cáo độ nhạy không còn đúng nghĩa. Hãy giữ mô hình trên một vùng nhỏ, dễ đọc. Điều cần nhớ: chưa được trỏ vào thì chưa phải là giới hạn.",
		"q": "Một ghi chú gõ ở ô ngoài có được tính là giới hạn không?",
		"a": "Không. Giới hạn phải là một ô công thức được khai báo cho phần mềm giải."
	},
	"ga-next": {
		"s": "Thẻ này nói về cách một mô hình ngôn ngữ viết ra chữ: nó sinh ra mảnh chữ kế tiếp, chứ không tra từ một cơ sở dữ liệu. Đáng biết vì nó giải thích vì sao mô hình có thể viết một con số rất tự tin mà không có nguồn. Ví dụ: bạn hỏi giá nhưng không dán bảng giá vào. Mô hình vẫn viết được một số tiền. Số đó không phải số của công ty, nên đừng đem đi báo cho khách. Mảnh chữ ở đây gọi là token, nó không phải một từ trong từ điển. Mô hình tính xác suất cho các mảnh, rồi chọn một mảnh. Mảnh đó lại được dùng để chấm mảnh tiếp theo. Không có bước nào tra theo khóa như hàm tìm kiếm trong bảng tính. Số mô hình viết ra là số sinh ra, không phải số tra ra. Điều cần nhớ: viết được một con số không có nghĩa là đã tra được con số đó.",
		"q": "Muốn mô hình đưa ra đúng giá của công ty, bạn phải làm gì?",
		"a": "Đưa bảng giá vào lần gọi. Nếu không, số nó viết ra chỉ là số được sinh ra."
	},
	"ga-vs": {
		"s": "Thẻ này nói về sự khác nhau giữa học máy dự đoán và trí tuệ nhân tạo sinh nội dung. Đáng biết vì chọn nhầm thước đo thì brief sai ngay từ đầu. Học máy kiểu dự đoán đoán một cột. Ví dụ: khách này có rời đi không. Có nhãn, có tập để chấm điểm. Còn trí tuệ nhân tạo sinh nội dung thì nối tiếp một đoạn chữ. Ví dụ: viết một tin nhắn cho khách. Không có một ô đúng duy nhất. Cùng một họ mô hình lớn có thể được huấn luyện theo nhiều cách, nên việc của bạn không phải đoán kiến trúc. Việc của bạn là nói rõ đầu ra là một xác suất có tập chấm, hay một đoạn chữ không có ô đúng duy nhất. Hãy cẩn thận với độ chính xác: nếu nhóm hiếm chỉ chiếm tám phần trăm, thì đoán mọi khách đều không rời đi cũng đạt chín mươi hai phần trăm. Điều cần nhớ: một đoạn văn không phải là một xác suất.",
		"q": "Hai kiểu đầu ra khác nhau ở điểm nào?",
		"a": "Một kiểu đoán một cột có nhãn và có tập chấm. Kiểu kia nối tiếp một đoạn chữ, không có một ô đúng duy nhất."
	},
	"ga-stack": {
		"s": "Thẻ này nói về ba tầng của một sản phẩm dùng trí tuệ nhân tạo: mô hình, dữ liệu và sản phẩm. Đáng biết vì khi có lỗi, bạn cần biết đang sửa tầng nào. Ví dụ: cùng một mô hình, lần gọi có dán chính sách đổi trả thì câu chữ khác với lần gọi không dán. Và nếu sản phẩm chưa có nút đặt lịch, người dùng vẫn chỉ nhận được một đoạn chữ. Ba tầng hỏng độc lập với nhau. Mô hình viết trôi chảy nhưng dữ liệu thiếu chính sách thì câu trôi chảy vẫn sai chính sách. Dữ liệu đủ mà sản phẩm không cho người dùng kiểm lại nguồn thì họ vẫn làm theo một đoạn chữ. Vì vậy ba tầng cần ba câu hỏi riêng: trọng số nào, dữ liệu nào, nút nào. Đừng gói cả ba thành hai chữ trí tuệ nhân tạo rồi giao cho một người ngồi sửa lời nhắc. Điều cần nhớ: sửa lời nhắc không phải là sửa bộ não của mô hình.",
		"q": "Ba tầng của một sản phẩm trí tuệ nhân tạo là gì?",
		"a": "Mô hình, dữ liệu và sản phẩm. Ba tầng này hỏng độc lập với nhau."
	},
	"ga-use": {
		"s": "Thẻ này nói về cách định nghĩa một trường hợp sử dụng: một công việc đi kèm cái giá khi chữ sai. Đáng biết vì cùng một công cụ có thể rất rẻ ở việc này nhưng rất đắt ở việc khác. Ví dụ: nháp tiêu đề cho người làm marketing sửa lại là việc mà một lần sai gần như không tốn gì. Có thể sai mười lần mà chỉ mất vài phút chỉnh. Còn tự động gửi báo giá cho khách là việc khác, một lần sai có thể là cả một hợp đồng. Hai việc này không nên dùng chung một nút. Nói dùng cho marketing thì chưa nói được sai thì ai mất gì. Hãy nghĩ như khi đưa một hệ thống vào chạy thật: cần có người chịu trách nhiệm, có việc lặp lại, và có lúc dừng. Một buổi trình diễn trong phòng họp chưa phải là chạy thật. Điều cần nhớ: hay trong phòng họp không có nghĩa là rẻ khi sai.",
		"q": "Trước khi đưa một việc vào dùng trí tuệ nhân tạo, bạn nên viết ra điều gì?",
		"a": "Cái giá của một lần sai: sai thì ai mất gì."
	},
	"ga-chat": {
		"s": "Thẻ này nói về các message, tức là các đoạn chữ mà mô hình nhìn thấy trong lần gọi này. Đáng biết vì mô hình không có trí nhớ chung về mọi cuộc trò chuyện. Ví dụ: tin nhắn hệ thống dặn chỉ dùng bảng giá đính kèm. Người dùng dán bảng giá vào. Thiếu một trong hai thì lần gọi đó không đủ thông tin. Ứng dụng phải gửi lại mọi thứ, mô hình không giữ hộ. Ba message gồm hệ thống, người dùng và bảng giá thì mô hình thấy đúng ba message đó, không thấy gì khác. Tin nhắn hệ thống cũng không phải một ổ khóa pháp lý, nó chỉ là một message đứng trước, và mô hình vẫn có thể viết lệch. Lịch sử hội thoại do ứng dụng của bạn lưu. Dán nhầm lịch sử của khách này vào yêu cầu của khách khác là lỗi sản phẩm. Điều cần nhớ: không gửi thì không thấy, kể cả khi hôm qua đã nói.",
		"q": "Hôm qua bạn đã dặn mô hình một điều, hôm nay có cần dặn lại không?",
		"a": "Có, nếu ứng dụng không gửi lại. Mô hình chỉ thấy những message trong lần gọi này."
	},
	"ga-temp": {
		"s": "Thẻ này nói về tham số nhiệt độ, hay temperature, của mô hình ngôn ngữ. Đáng biết vì nhiều người chỉnh nó với hy vọng câu trả lời sẽ đúng hơn. Thực ra nó chỉ đổi độ đa dạng của câu chữ. Ví dụ: một lời nhắc thiếu giá. Chạy năm lần ở nhiệt độ cao ra năm con số khác nhau. Chạy ở nhiệt độ thấp thì ra một con số lặp lại. Nhưng con số lặp lại đó vẫn không phải giá của công ty. Nhiệt độ không phải xác suất câu đúng, nó chỉ là một tham số của cách lấy mẫu. Một tham số gần giống là top p cũng không thêm sự thật. Một câu lặp lại năm lần ở nhiệt độ không là câu ổn định, chứ chưa phải câu đã được kiểm. Chỉnh nó khi bạn cần sự đồng đều, hoặc cần nhiều phương án chữ. Điều cần nhớ: ổn định không có nghĩa là đúng.",
		"q": "Chạy năm lần ra cùng một giá thì giá đó có đúng không?",
		"a": "Chưa chắc. Ổn định chỉ cho thấy câu lặp lại, còn đúng hay sai phải kiểm bằng nguồn."
	},
	"ga-tok": {
		"s": "Thẻ này nói về token, đơn vị vừa dùng để tính tiền vừa dùng để đo độ dài. Đáng biết vì phần bạn gửi vào có thể bị cắt mà vẫn bị tính tiền. Ví dụ: một bảng giá dài một trang nằm gọn trong giới hạn thì lần gọi nhìn thấy nó. Nhưng nếu bảng giá ấy bị chôn ở cuối một lần dán khổng lồ thì có thể không còn trong cửa sổ, vậy mà hóa đơn vẫn tính phần đã gửi. Token không khớp với số từ. Giới hạn tính cho cả message đi vào, lịch sử gửi lại, và chỗ để viết ra. Hết chỗ viết thì câu bị cụt, và cụt không phải một kết luận. Nếu giới hạn là tám nghìn token mà lời nhắc đã chiếm bảy nghìn tám trăm, thì chỉ còn hai trăm token cho câu trả lời. Hãy đưa phần việc cần, đừng đưa cả kho. Điều cần nhớ: bị cắt là không thấy, nhưng phần đã gửi vẫn mất tiền.",
		"q": "Vì sao nên đưa vào mô hình phần việc cần, không đưa cả kho?",
		"a": "Vì độ dài có giới hạn và bị tính tiền. Phần bị cắt thì mô hình không thấy, nhưng phần đã gửi vẫn mất tiền."
	},
	"ga-prompt": {
		"s": "Thẻ này nói về cấu trúc của một lời nhắc tốt: việc cần làm, ngữ cảnh và dạng đầu ra. Đáng biết vì nó giảm hai kiểu sai thường gặp: mô hình không biết việc, và mô hình bịa thêm vì không có khuôn. Ví dụ: việc là trả lời khách có được hoàn tiền không. Ngữ cảnh là đoạn chính sách đính kèm, và dặn mô hình không được bịa thêm. Dạng đầu ra là một câu có dẫn đúng chỗ trong đoạn đó, hoặc nói không thấy trong đoạn. Ba phần này không biến mô hình thành cơ sở dữ liệu, ngữ cảnh vẫn phải là nguồn thật của lần gọi. Dạng đầu ra là một giao kèo để bạn dễ kiểm tra, không phải một sự thật mới. Ba phần, mỗi phần một đến hai câu, tốt hơn một lời dặn dài hai trang. Đừng chỉ viết hãy cẩn thận. Điều cần nhớ: hãy cẩn thận không phải là ngữ cảnh.",
		"q": "Ba phần của một lời nhắc đủ là gì?",
		"a": "Việc cần làm, ngữ cảnh và dạng đầu ra."
	},
	"ga-few": {
		"s": "Thẻ này nói về việc đưa vài ví dụ vào lời nhắc, hay còn gọi là học từ vài mẫu. Đáng biết vì ví dụ giúp cố định dạng câu trả lời, nhưng không biến điều gì thành đúng. Ví dụ: bạn muốn đầu ra là một trong ba dạng: có, không, hoặc không thấy trong đoạn. Bạn đưa ba mẫu đúng dạng đó. Ba mẫu này không làm đoạn chính sách trở nên đúng, chúng chỉ làm câu trả lời dễ kiểm. Các ví dụ nằm ngay trong lời nhắc, nên chúng tốn token và là dữ liệu của lần gọi, không phải huấn luyện lại mô hình. Một ví dụ sai dạng sẽ dạy sai dạng rất đều, nhất là khi nhiệt độ thấp. Đó là sự ổn định của một cái sai, không phải độ chính xác. Ba mẫu ở đây là ba dạng câu trả lời mà bạn sẽ kiểm, không phải ba bằng chứng về khách hàng. Điều cần nhớ: ví dụ trong lời nhắc không phải một mẫu điều tra.",
		"q": "Ví dụ trong lời nhắc dùng để làm gì?",
		"a": "Để cố định dạng câu trả lời cho dễ kiểm, không phải để thay thế dữ liệu thật."
	},
	"ga-cot": {
		"s": "Thẻ này nói về việc bảo mô hình viết từng bước, hay chuỗi suy luận. Đáng biết vì các bước nghe hợp lý dễ khiến ta tin kết quả. Ví dụ: ngữ cảnh không có giá. Chuỗi bước vẫn viết ra một mức giá và một lý do nghe rất hợp lý. Lý do đó không phải nguồn, nên đừng thu tiền theo mức giá ấy. Chuỗi bước này không phải suy diễn thống kê, cũng không phải lời giải của phần mềm tối ưu. Nó không có đỉnh nghiệm, không có tập chấm điểm, và không báo lỗi thiếu dữ liệu. Một bước trung gian sai vẫn có thể dẫn tới câu cuối nghe hay. Vậy hãy đọc xem bước nào trỏ tới nguồn trong ngữ cảnh. Bước nào không trỏ thì bỏ. Bốn bước lập luận mà không bước nào trỏ vào bảng giá thì cả bốn đều chưa có nguồn. Hãy kiểm câu cuối bằng nguồn, đừng kiểm bằng độ mượt. Điều cần nhớ: mượt không có nghĩa là đã chứng minh.",
		"q": "Làm sao kiểm một chuỗi suy luận của mô hình?",
		"a": "Xem từng bước có trỏ tới nguồn trong ngữ cảnh hay không. Bước nào không trỏ thì chưa có nguồn."
	}
};
//#endregion
export { audio_default as default };
