/** Teaching atoms. Keys are matched against course + module + session + segment text. */

export function T(p) {
  return {
    steps: [],
    pipeline: [],
    pitfalls: [],
    symbols: [],
    sources: [],
    glossary: [],
    recall: [],
    scope: null,
    avoid: null,
    sim: null,
    formula: null,
    code: null,
    ...p,
  };
}

const illus = (claim) => ({
  claim,
  source: "ví dụ minh họa, không phải số liệu ngành",
});

export const topics = [
  T({
    id: "crisp",
    keys: [/crisp-?dm/i, /business understanding/i, /owning an ipl/i, /understanding raw data/i, /preparing data for analysis/i, /heart of data analysis/i, /model evaluation and deployment/i],
    avoid: /industry demonstration/i,
    title: "CRISP-DM: sáu pha của một dự án dữ liệu",
    sim: "crisp",
    formula: null,
    situation:
      "Một trung tâm thương mại hỏi agency vì sao lượt khách cuối tuần giảm 12% so với cùng kỳ, trong khi ngân sách quảng cáo tăng. Ví dụ minh họa: 18.000 khách/ngày, CPA Google 42.000đ, nhưng chưa ai chỉ ra được mất khách ở tầng ăn hay ở tầng thời trang.",
    problem:
      "Cách làm ngây thơ là nhảy vào một mô hình, hoặc vẽ một dashboard đẹp, rồi kể một câu chuyện. Sai ngay từ pha đầu: chưa chốt bài toán kinh doanh, chưa biết dữ liệu nào đang có, và chưa định nghĩa thế nào là một kết quả dùng được.",
    why:
      "CRISP-DM (Cross-Industry Standard Process for Data Mining) tồn tại để một dự án dữ liệu không biến thành màn hình đồ thị. Sáu pha buộc đội phải đi từ câu hỏi của người ra quyết định, qua dữ liệu, rồi mới tới mô hình, và phải quay lại khi pha sau phát hiện pha trước bị sai.",
    plain:
      "CRISP-DM là quy trình làm việc, không phải thuật toán. Nó nhắc rằng mô hình chỉ là một pha ở giữa.",
    precise:
      "Sáu pha: Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, Deployment. Các pha không khóa cứng. Evaluation kém thì quay lại hiểu bài toán hoặc chuẩn bị dữ liệu. Deployment nghĩa là đưa kết quả vào quyết định thật, không phải nộp file.",
    pipeline: [
      { n: "1", title: "Business Understanding", body: "Mall mất khách cuối tuần. Câu hỏi đo được: phần giảm nằm ở nhóm khách nào, khung giờ nào, và có trùng với việc tắt một chiến dịch remarketing hay không." },
      { n: "2", title: "Data Understanding", body: "Có đếm camera cổng, doanh thu POS theo tầng, và log quảng cáo. Camera thiếu ngày lễ. POS đủ 14 tháng. Log ads chỉ có 90 ngày. Ví dụ minh họa." },
      { n: "3", title: "Data Preparation", body: "Ghép POS theo ngày, điền ngày thiếu của camera bằng cờ thiếu chứ không bịa số 0, và quy đơn vị về khách/ngày." },
      { n: "4", title: "Modeling", body: "Chưa cần học máy. Một bảng so sánh trước và sau ngày tắt remarketing, tách theo tầng, đã là một mô hình đơn giản." },
      { n: "5", title: "Evaluation", body: "Hỏi lại người vận hành: tầng thời trang giảm trước khi tắt ads. Mô hình ads-only không giải thích hết. Quay lại pha 1, thêm giả thuyết thời tiết và sự kiện đối thủ." },
      { n: "6", title: "Deployment", body: "Quy ước báo cáo tuần: một dòng kết luận, một số so với cùng kỳ, một việc sẽ làm. Không gửi 40 slide." },
    ],
    insight: "Nếu không nói được pha đang đứng, bạn chưa phân tích. Bạn đang dọn file.",
    sources: [
      { claim: "CRISP-DM gồm sáu pha và cho phép quay vòng, theo mô tả chuẩn của quy trình.", source: "Wikipedia, Cross-industry standard process for data mining", url: "https://en.wikipedia.org/wiki/Cross-industry_standard_process_for_data_mining" },
      illus("Câu chuyện mall, 18.000 khách và CPA 42.000đ là ví dụ minh họa."),
    ],
    glossary: [
      { term: "CRISP-DM", en: "Cross-Industry Standard Process for Data Mining", def: "Quy trình sáu pha cho dự án dữ liệu, từ hiểu bài toán đến đưa kết quả vào vận hành." },
    ],
  }),

  T({
    id: "frame",
    keys: [/framing the problem/i, /frame the problem/i, /facts and opinions/i, /prioritising key issues/i, /s\.?m\.?a\.?r\.?t/i, /hospital discharge/i, /understanding the problems/i, /types of problems/i, /analysing the problem/i, /analysing possible solutions/i, /prioritising options/i, /considering implications/i, /implementing the solutions/i],
    title: "Đặt bài toán cho rõ trước khi tìm số",
    sim: "frame",
    situation:
      "Sếp nhắn: «Landing page yếu, làm gì đi». Tuần đó trang có 9.400 phiên, tỷ lệ gửi form 1,1%. Câu này chưa đo được, nên mọi người trong agency sẽ tối ưu những thứ khác nhau.",
    problem:
      "Cách ngây thơ là mở heatmap hoặc đổ thêm ngân sách. Sai vì «yếu» là một ý kiến. Chưa tách được sự thật (form 1,1%) khỏi cảm giác (trang xấu), và chưa có tiêu chí xong việc.",
    why:
      "Khung SMART, fact và opinion, và cây vấn đề MECE tồn tại để một câu than phiền thành một bài toán có số. Không có bước này thì mọi mô hình phía sau trả lời nhầm câu hỏi.",
    plain:
      "Đặt bài toán là viết lại lời than thành một câu có đối tượng, thước đo, mốc thời gian và dấu hiệu thành công.",
    precise:
      "Fact là điều kiểm được trên dữ liệu. Opinion là lời đánh giá. MECE (Mutually Exclusive, Collectively Exhaustive) nghĩa là các nhánh không chồng lên nhau và cộng lại thì hết vấn đề. SMART: Specific, Measurable, Achievable, Relevant, Time-bound.",
    pipeline: [
      { n: "1", title: "Lời than gốc", body: "«Landing page yếu»." },
      { n: "2", title: "Tách fact", body: "9.400 phiên, 1,1% gửi form, 70% thoát trước khi kéo tới form. Đây là fact trong ví dụ minh họa. «Trang xấu» vẫn là opinion." },
      { n: "3", title: "Cây vấn đề", body: "Nhánh nguồn traffic, nhánh nội dung, nhánh form. Ba nhánh không chồng. Chưa đổ lỗi cho thiết kế." },
      { n: "4", title: "SMART", body: "Trong 21 ngày, đưa tỷ lệ gửi form từ 1,1% lên 1,6% trên cùng nguồn GDN, với giá form không tăng quá 15%." },
    ],
    pitfalls: [
      { left: "Fact", right: "Opinion", note: "Fact sống được khi đổi người đọc. Opinion đổi theo người nói. «CPA cao» là opinion cho đến khi ghi CPA là bao nhiêu, so với mốc nào." },
      { left: "MECE", right: "Danh sách brainstorm", note: "Brainstorm được phép trùng. Cây vấn đề thì không. Trùng nhánh là đếm hai lần cùng một nguyên nhân." },
    ],
    insight: "Một buổi phân tích bắt đầu bằng câu bài toán viết lại được, không bắt đầu bằng công cụ.",
    sources: [
      { claim: "SMART là bộ tiêu chí mục tiêu: cụ thể, đo được, làm được, liên quan, có hạn.", source: "Wikipedia, SMART criteria", url: "https://en.wikipedia.org/wiki/SMART_criteria" },
      { claim: "MECE là nguyên tắc chia vấn đề không chồng chéo và không bỏ sót, phổ biến trong tư duy cấu trúc.", source: "Wikipedia, MECE principle", url: "https://en.wikipedia.org/wiki/MECE_principle" },
      illus("9.400 phiên và form 1,1% là ví dụ minh họa."),
    ],
    glossary: [
      { term: "SMART", en: "Specific, Measurable, Achievable, Relevant, Time-bound", def: "Cách viết mục tiêu để biết khi nào thì xong." },
      { term: "MECE", en: "Mutually Exclusive, Collectively Exhaustive", def: "Chia vấn đề thành các nhánh không trùng và phủ hết." },
    ],
  }),

  T({
    id: "excel-base",
    scope: /excel/i,
    keys: [/excel interface/i, /sort and filter/i, /formatting/i, /printing and page/i, /passwords and naming/i, /delimited/i, /shortcuts/i, /formulae/i, /complex functions/i, /cell referencing/i, /text functions/i, /logical formula/i, /charts/i, /types of charts/i, /introduction to excel/i, /data analysis in excel/i],
    avoid: /pivot|vlookup|xlookup|index and match|what-if|macro/i,
    title: "Excel như một bàn tính để ra quyết định",
    sim: "pivot",
    situation:
      "Báo cáo tuần của khách F&B nằm trong một file 14.000 dòng: mỗi dòng một ngày, một cửa hàng, một kênh. Người nhận chỉ cần biết cửa hàng nào CPA vượt 90.000đ. File gốc không trả lời câu đó.",
    problem:
      "Cách ngây thơ là tô màu tay và sort một lần. Tuần sau file mới về, mọi thao tác làm lại, và một ô bị kéo sai công thức thì cả trang kết luận đổi mà không ai thấy.",
    why:
      "Các thao tác nền của Excel, gồm tham chiếu, hàm điều kiện, sort, filter và định dạng có điều kiện, tồn tại để câu kết luận bám vào ô tính chứ không bám vào trí nhớ người làm báo cáo.",
    plain:
      "Một file phân tích tốt là file mà người khác đổi số đầu vào và thấy kết luận đổi theo, không cần hỏi người tạo file.",
    precise:
      "Tham chiếu tương đối (A1) đổi khi kéo. Tham chiếu tuyệt đối ($A$1) giữ nguyên. Hàm điều kiện IF, AND, OR biến một quy tắc kinh doanh thành một cột. Định dạng có điều kiện chỉ là lớp nhìn, không phải phép tính. Sort và filter không làm hỏng dữ liệu gốc nếu bạn filter trên bảng, nhưng dễ cắt nhầm vùng nếu dữ liệu chưa là Table.",
    steps: [
      { label: "Quy tắc", math: "CPA = Spend / Conversions", say: "Viết một lần ở cột cạnh dữ liệu. Không tính nhẩm trên slide." },
      { label: "Cột cờ", math: '=IF(E2>90000,"vượt","ổn")', say: "Ngưỡng 90.000đ là ví dụ minh họa. Cột này để filter, không để tô tay." },
      { label: "Khóa ô", math: "=$B$1", say: "Ngưỡng để ở một ô. Mọi hàng nhìn vào ô đó. Đổi ngưỡng là đổi cả cột." },
    ],
    pitfalls: [
      { left: "Định dạng có điều kiện", right: "Cột cờ bằng IF", note: "Tô đỏ chỉ để mắt nhìn. Cột IF mới đếm được bằng COUNTIF và đưa sang pivot." },
      { left: "A1", right: "$A$1", note: "Kéo công thức mà quên khóa ô, ngưỡng sẽ trượt xuống ô trống và cả cột thành sai âm thầm." },
    ],
    insight: "Trong Excel, thứ đáng giữ là quy tắc nằm trong ô, không phải màu nằm trên ô.",
    sources: [
      { claim: "Tham chiếu tương đối và tuyệt đối là cơ chế chuẩn của công thức Excel.", source: "Microsoft Support, Switch between relative, absolute, and mixed references", url: "https://support.microsoft.com/en-us/office/switch-between-relative-absolute-and-mixed-references-dfec08cd-ae65-4f56-8393-132856221f44" },
      illus("File 14.000 dòng và ngưỡng CPA 90.000đ là ví dụ minh họa."),
    ],
    glossary: [
      { term: "Absolute reference", en: "Absolute reference", def: "Địa chỉ ô bị khóa bằng dấu $, không trượt khi kéo công thức." },
    ],
  }),

  T({
    id: "excel-stats",
    scope: /excel/i,
    keys: [/statistical functions/i, /logical functions/i],
    title: "Hàm thống kê và hàm logic trong Excel",
    formula: "s = \\sqrt{\\dfrac{\\sum_i (x_i-\\bar x)^2}{n-1}}",
    situation:
      "Tám tuần CPA, ví dụ minh họa, lần lượt là 2, 4, 4, 4, 5, 5, 7, 9. Sếp hỏi mức điển hình và độ dao động. Ai đó trả lời «khoảng 5» rồi tô đỏ tuần 9 vì nhìn thấy số lớn.",
    problem:
      "AVERAGE không nói độ lệch. STDEV.P chia cho n, dùng khi bạn có cả tổng thể. Tám tuần này là một mẫu, chia cho n thì độ lệch nhỏ hơn thực tế của mẫu. Tô màu không đếm được tuần nào vừa cao vừa ít form.",
    why:
      "Hàm thống kê tồn tại để mô tả một cột bằng một số có định nghĩa. Hàm logic tồn tại để một quy tắc vận hành thành cột, rồi COUNTIF đếm được.",
    plain:
      "AVERAGE là trung bình cộng. STDEV.S là độ lệch chuẩn mẫu, mẫu số n−1. AND và OR ghép điều kiện. IF trả về một trong hai giá trị.",
    precise:
      "Với mẫu x1…xn, trung bình x̄ = (Σxi)/n. Phương sai mẫu s² = Σ(xi−x̄)²/(n−1). STDEV.S là căn của s². STDEV.P chia cho n, chỉ đúng khi cột là cả tổng thể, không phải một mẫu rút ra. CORREL tính tương quan Pearson, không phải quan hệ nhân quả. COUNT đếm số, COUNTA đếm ô không trống. IF(điều kiện, giá trị nếu đúng, giá trị nếu sai). AND đúng khi mọi điều kiện đúng. OR đúng khi ít nhất một điều kiện đúng.",
    steps: [
      { label: "Trung bình", math: "(2+4+4+4+5+5+7+9)/8 = 5", say: "Đây là ví dụ số, không phải CPA ngành." },
      { label: "Độ lệch mẫu", math: "\\sum (x-5)^2 = 32,\\ s=\\sqrt{32/7}\\approx 2{,}14", say: "Chia 7 vì n−1 = 7. STDEV.S làm đúng phép này. STDEV.P chia 8." },
      { label: "Quy tắc", math: '=IF(AND(A2>6,B2<10),"soi","để")', say: "Ngưỡng 6 và 10 là ví dụ minh họa. Cột chữ này mới đếm được." },
    ],
    pitfalls: [
      { left: "STDEV.S", right: "STDEV.P", note: "S là sample, mẫu số n−1. P là population, mẫu số n. Nhầm hai hàm thì số vẫn ra, kết luận về độ dao động thì lệch." },
      { left: "CORREL", right: "Nguyên nhân", note: "Tương quan cao chỉ nói hai cột đi cùng nhau trong bảng. Không nói cột này gây ra cột kia." },
    ],
    insight: "Hàm thống kê trả về một định nghĩa. Hàm logic trả về một quyết định lặp lại được.",
    sources: [
      { claim: "Độ lệch chuẩn mẫu dùng mẫu số n−1.", source: "Wikipedia, Standard deviation", url: "https://en.wikipedia.org/wiki/Standard_deviation" },
      { claim: "STDEV.S tính độ lệch chuẩn mẫu. STDEV.P tính theo tổng thể.", source: "Microsoft Support, STDEV.S function", url: "https://support.microsoft.com/en-us/office/stdev-s-function-7d69cf97-0c1f-4acf-be27-f3e83904cc23" },
      illus("Dãy 2, 4, 4, 4, 5, 5, 7, 9 là ví dụ tính tay, không phải số liệu chiến dịch."),
    ],
    glossary: [
      { term: "STDEV.S", en: "sample standard deviation", def: "Độ lệch chuẩn mẫu, chia cho n−1." },
    ],
  }),

  T({
    id: "lookup",
    keys: [/vlookup/i, /xlookup/i, /index and match/i, /lookup functions/i],
    title: "Dò bảng: VLOOKUP, XLOOKUP, INDEX và MATCH",
    situation:
      "Bảng chi tiêu ads có mã cửa hàng CH-014. Bảng doanh thu dùng cùng mã nhưng nằm file khác. Cần ghép doanh thu vào từng dòng chi tiêu để tính MER. Ví dụ minh họa: 240 mã cửa hàng.",
    problem:
      "Copy tay thì sót mã mới. VLOOKUP cột cứng thì tháng sau ai đó chèn một cột, hàm vẫn chạy và trả về nhầm doanh thu của cột bên cạnh. Không có lỗi đỏ.",
    why:
      "Hàm dò bảng tồn tại để hai bảng gặp nhau bằng một khóa. INDEX kết hợp MATCH, hoặc XLOOKUP, tồn tại vì VLOOKUP dễ gãy khi cấu trúc bảng đổi.",
    plain:
      "Dò bảng là tìm một khóa và lấy một giá trị ở hàng đó. Chọn hàm nào tùy vào việc bạn có chịu được rủi ro lệch cột hay không.",
    precise:
      "VLOOKUP(khóa, vùng, số_cột, FALSE) chỉ nhìn khóa ở cột đầu của vùng và đếm số cột sang phải. XLOOKUP(khóa, cột_khóa, cột_trả) chỉ rõ hai cột, chèn cột ở giữa không làm hỏng. INDEX(cột_trả, MATCH(khóa, cột_khóa, 0)) là cách tương đương, khóa có thể đứng bất kỳ đâu.",
    formula: "\\mathrm{XLOOKUP}(k,\\ K,\\ V)",
    symbols: [
      { sym: "k", meaning: "khóa cần tìm, ví dụ mã cửa hàng" },
      { sym: "K", meaning: "cột chứa khóa" },
      { sym: "V", meaning: "cột giá trị muốn lấy về" },
    ],
    steps: [
      { label: "Khóa", math: "k = CH-014", say: "Cùng một mã ở cả hai bảng. Sai một ký tự là không khớp." },
      { label: "VLOOKUP", math: "=VLOOKUP(\"CH-014\", $A$2:$D$241, 4, FALSE)", say: "Lấy cột thứ 4. Ngày mai ai chèn cột, số 4 chỉ sang chỗ khác." },
      { label: "XLOOKUP", math: "=XLOOKUP(\"CH-014\", $A$2:$A$241, $D$2:$D$241)", say: "Chỉ đúng cột doanh thu. Chèn cột không đổi nghĩa." },
    ],
    pitfalls: [
      { left: "VLOOKUP", right: "XLOOKUP", note: "VLOOKUP đếm cột. XLOOKUP chỉ cột. Với báo cáo làm lại hàng tháng, XLOOKUP hoặc INDEX/MATCH ít gãy hơn." },
      { left: "FALSE", right: "TRUE", note: "TRUE là dò gần đúng, cần cột khóa đã sort. Để TRUE nhầm trên mã cửa hàng sẽ trả về một cửa hàng khác mà không báo lỗi." },
    ],
    insight: "Hàm dò sai mà không báo lỗi nguy hiểm hơn hàm dò ra #N/A.",
    sources: [
      { claim: "XLOOKUP tìm trên một cột khóa và trả về một cột kết quả, không phụ thuộc số thứ tự cột như VLOOKUP.", source: "Microsoft Support, XLOOKUP function", url: "https://support.microsoft.com/en-us/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929" },
      illus("240 mã cửa hàng là ví dụ minh họa."),
    ],
    glossary: [
      { term: "VLOOKUP", en: "Vertical lookup", def: "Dò khóa ở cột trái của một vùng và trả về ô cách đó một số cột." },
    ],
  }),

  T({
    id: "pivot",
    keys: [/pivot/i],
    title: "Pivot: gộp hàng thành một câu trả lời",
    sim: "pivot",
    situation:
      "14.000 dòng chi tiêu. Câu hỏi của khách chỉ là: kênh nào, tháng này, đang đốt bao nhiêu và ra bao nhiêu form. Không ai đọc 14.000 dòng.",
    problem:
      "SUMIF chồng nhiều tầng vẫn ra số, nhưng người đọc không tự xoay được chiều xem. Thêm một cắt theo vùng miền là phải viết lại hàm.",
    why:
      "Pivot table tồn tại để phép gộp, gồm sum, count, average, diễn ra trên nhãn chứ không trên địa chỉ ô. Đổi chiều xem không phải viết lại công thức.",
    plain:
      "Pivot là bảng động: bạn kéo một cột vào hàng, một cột vào cột, một cột vào giá trị, và Excel gộp giúp.",
    precise:
      "Mỗi dòng dữ liệu gốc nên là một quan sát. Cột là thuộc tính. Pivot không sửa dữ liệu gốc. Filter của pivot chỉ lọc bản gộp. Nếu cần lọc trước khi gộp thì lọc ở bảng nguồn hoặc dùng bộ lọc của pivot một cách có chủ đích, và nói rõ điều đó khi gửi báo cáo.",
    pipeline: [
      { n: "1", title: "Nguồn sạch", body: "Mỗi dòng một ngày-cửa hàng-kênh. Không có hàng tổng nằm lẫn trong dữ liệu." },
      { n: "2", title: "Hàng", body: "Kéo Channel vào Rows." },
      { n: "3", title: "Giá trị", body: "Kéo Spend vào Values, dạng Sum. Kéo Forms vào Values, dạng Sum." },
      { n: "4", title: "Đọc", body: "Ba dòng GDN, Meta, TikTok. CPA tính thêm bằng calculated field Spend/Forms, không tính nhẩm." },
    ],
    insight: "Pivot trả lời một câu hỏi gộp. Nếu bảng pivot cần chú thích dài, câu hỏi đang bị lẫn.",
    sources: [
      { claim: "PivotTable tóm tắt dữ liệu theo hàng, cột và phép gộp, không sửa bảng nguồn.", source: "Microsoft Support, Create a PivotTable", url: "https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576" },
      illus("Ba kênh và 14.000 dòng là ví dụ minh họa."),
    ],
  }),

  T({
    id: "py-think",
    scope: /python|git|problem-solving framework|problem solving in python/i,
    keys: [/computational thinking/i, /software development life cycle/i, /programming paradigm/i, /history of programming/i, /development tools/i, /code management/i, /testing and debugging/i, /collaborative development/i, /code as a language/i, /ides/i, /two sum/i, /valid brackets/i, /roman numerals/i, /understanding the problem/i, /planning an approach/i, /coding the program/i, /testing the program/i, /optimising/i],
    title: "Tư duy tính toán trước khi viết dòng lệnh",
    situation:
      "Mỗi sáng bạn xuất một file leads và cần biết bao nhiêu lead trùng số điện thoại. Làm tay mất 40 phút. Viết một đoạn mã mất một buổi, nhưng tuần sau chỉ mất vài giây.",
    problem:
      "Cách ngây thơ là mở mã và gõ ngay. Sai vì chưa nói được đầu vào, đầu ra, và một ví dụ nhỏ mà mắt còn kiểm được.",
    why:
      "Computational thinking và vòng đời phần mềm tồn tại để chương trình là một quy trình lặp được, không phải một mẹo nhớ trong đầu người làm.",
    plain:
      "Viết mã là mô tả các bước rõ đến mức máy làm lại y hệt. Trước đó phải có một ví dụ nhỏ đúng.",
    precise:
      "Bốn thói quen: chia việc thành bước, tìm quy luật, trừu tượng hóa phần lặp, và kiểm với một mẫu nhỏ. Vòng đời tối thiểu với việc phân tích: hiểu đầu vào, viết bước, chạy thử mẫu, đối chiếu bằng tay, rồi mới chạy file lớn.",
    pipeline: [
      { n: "1", title: "Mẫu", body: "Năm số: 0901, 0901, 0912, 0901, 0933. Mắt đếm được 3 số khác nhau." },
      { n: "2", title: "Bước", body: "Bỏ qua rỗng, chuẩn hóa khoảng trắng, cho vào một tập hợp, đếm phần tử." },
      { n: "3", title: "Đối chiếu", body: "Mã phải ra 3. Nếu ra 5, bạn đếm dòng chứ không đếm số duy nhất." },
    ],
    code: {
      lang: "python",
      source: "phones = ['0901', '0901', '0912', '0901', '0933', ' 0901']\nclean = {p.strip() for p in phones if p.strip()}\nprint(len(clean))",
      out: "3",
    },
    insight: "Một ví dụ năm dòng mà bạn đếm được bằng mắt đáng giá hơn một notebook chạy trên file chưa hiểu.",
    sources: [
      illus("Năm số điện thoại là ví dụ minh họa."),
      { claim: "Tập hợp trong Python không giữ phần tử trùng, nên len của set là số giá trị duy nhất.", source: "Python docs, Set types", url: "https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset" },
    ],
  }),

  T({
    id: "py-types",
    scope: /fundamentals of python|variables and data types|operators/i,
    keys: [/numeric/i, /strings/i, /boolean/i, /input and output/i, /nonetype/i, /arithmetic/i, /assignment operator/i, /comparison/i, /logical operator/i, /truthiness/i, /membership/i, /bitwise/i, /identity operator/i, /variables and data types/i, /\boperators?\b/i],
    title: "Biến, kiểu dữ liệu và toán tử",
    situation:
      "Một cột CPA trong file xuất ra toàn chữ «86.000», không phải số. Bạn cộng hai dòng và được «86.00090.000», không phải 176.000.",
    problem:
      "Máy không đoán ngữ cảnh marketing. Nó chỉ thấy kiểu. Nhầm kiểu thì phép tính vẫn chạy, kết quả vẫn sai nghĩa.",
    why:
      "Kiểu dữ liệu tồn tại để mỗi giá trị có một tập phép tính hợp lệ. Toán tử tồn tại để nói rõ bạn đang so sánh, gán, hay kết hợp điều kiện.",
    plain:
      "Biến là nhãn dán lên một giá trị. Kiểu nói giá trị đó là số, chữ, đúng-sai, hay rỗng.",
    precise:
      "int và float là số. str là chuỗi. bool là True hoặc False. None là chưa có giá trị, khác với 0 và khác với chuỗi rỗng. Phép + trên chuỗi là nối, trên số là cộng. == so sánh giá trị. is so sánh có phải cùng một đối tượng hay không. and, or, not kết hợp điều kiện.",
    steps: [
      { label: "Chữ", math: "a = \"86000\"", say: "Đây là chuỗi. Máy không biết đó là tiền." },
      { label: "Số", math: "b = int(a)", say: "int biến chuỗi thành số nguyên. b bằng 86000." },
      { label: "Cộng", math: "b + 90000 = 176000", say: "Chỉ khi cả hai vế là số, dấu cộng mới là cộng tiền." },
    ],
    pitfalls: [
      { left: "None", right: "0 hoặc \"\"", note: "None nghĩa là không có. 0 là một số đo được, bằng không. Chuỗi rỗng là có một chuỗi, nhưng dài 0." },
      { left: "==", right: "is", note: "Dùng == cho giá trị. is gần như chỉ dành cho None: x is None." },
      { left: "and", right: "&", note: "and là logic đúng-sai. & trên số là bitwise. Trên điều kiện lọc dữ liệu, nhầm hai cái này ra một bộ hàng khác." },
    ],
    code: {
      lang: "python",
      source: "a = '86000'\nprint(a + '90000')\nprint(int(a) + 90000)\nprint(None, 0, '')",
      out: "8600090000\n176000\nNone 0 ",
    },
    insight: "Trước khi viết phép tính, hỏi giá trị đang là số hay đang là chữ.",
    sources: [
      { claim: "Python phân biệt kiểu số, chuỗi, bool và NoneType. Phép cộng trên chuỗi là nối chuỗi.", source: "Python docs, Built-in types", url: "https://docs.python.org/3/library/stdtypes.html" },
      illus("CPA viết bằng chữ là ví dụ minh họa."),
    ],
    glossary: [
      { term: "None", en: "NoneType", def: "Giá trị biểu thị không có gì, không phải số 0." },
    ],
  }),

  T({
    id: "py-control",
    scope: /control structures|conditionals|loops|functions/i,
    keys: [/if statement/i, /if-else/i, /nested conditional/i, /match-case/i, /while loop/i, /for loop/i, /nested loop/i, /built-in function/i, /user-defined/i, /parameters and arguments/i, /scope/i, /recursion/i, /return value/i, /importing librar/i, /lambda/i, /higher-order/i],
    title: "Rẽ nhánh, lặp và hàm",
    situation:
      "Quy tắc khách: lead có điểm dưới 40 thì nurture, từ 40 đến 70 thì sales gọi, trên 70 thì ưu tiên trong ngày. Ví dụ minh họa: 1.200 lead mỗi sáng.",
    problem:
      "Viết 1.200 lần thì chắc chắn lệch quy tắc ở một vài dòng. Viết một đoạn if dài 200 dòng không hàm thì tuần sau không ai dám sửa.",
    why:
      "Rẽ nhánh diễn tả quy tắc. Vòng lặp diễn tả «làm với mọi dòng». Hàm gom một quy tắc thành một tên để gọi lại và để kiểm thử.",
    plain:
      "if chọn đường. for đi qua từng phần tử. Hàm là một cái tên cho một cụm bước, có đầu vào và đầu ra.",
    precise:
      "if chạy khối lệnh khi điều kiện đúng. else là đường còn lại. elif là các cửa giữa. for duyệt một tập đã biết độ dài. while lặp khi điều kiện còn đúng, và dễ lặp vô hạn nếu quên đổi biến. Tham số là tên trong định nghĩa hàm. Đối số là giá trị lúc gọi. Biến tạo trong hàm không nhìn thấy bên ngoài, đó là scope. lambda là hàm một biểu thức. Hàm bậc cao nhận một hàm khác, như map hay sorted với key.",
    steps: [
      { label: "Quy tắc", math: "score = 72", say: "Một lead trong ví dụ minh họa." },
      { label: "Rẽ", math: "score > 70 → ưu tiên", say: "Cửa trên cùng đúng, các cửa dưới không xét nữa." },
      { label: "Gom", math: "def lane(score): ...", say: "Cùng một hàm cho cả 1.200 lead. Đổi ngưỡng ở một chỗ." },
    ],
    code: {
      lang: "python",
      source: "def lane(score):\n    if score > 70: return 'uu tien'\n    if score >= 40: return 'goi'\n    return 'nuoi'\nprint([lane(s) for s in (30, 40, 72)])",
      out: "['nuoi', 'goi', 'uu tien']",
    },
    pitfalls: [
      { left: "for", right: "while", note: "for khi đã có danh sách. while khi chưa biết sẽ dừng ở đâu. Quên tăng biến trong while là treo." },
      { left: "Tham số", right: "Đối số", note: "Tham số là chỗ trống trong định nghĩa. Đối số là thứ bạn đổ vào lúc gọi." },
    ],
    insight: "Một quy tắc kinh doanh nên nằm trong một hàm nhỏ, để đổi ngưỡng không phải đi tìm trong vòng lặp.",
    sources: [
      { claim: "if, for và def là cú pháp điều khiển và hàm của Python.", source: "Python docs, More control flow tools", url: "https://docs.python.org/3/tutorial/controlflow.html" },
      illus("Ngưỡng 40 và 70 điểm là ví dụ minh họa."),
    ],
  }),

  T({
    id: "py-struct",
    scope: /data structures/i,
    keys: [/string/i, /list/i, /dictionary|dictionaries/i, /tuple/i, /set/i, /comprehension/i, /indexing and slicing/i, /unpacking/i],
    title: "Chuỗi, list, dict, tuple và set",
    situation:
      "Bạn có 80 lead. Mỗi lead cần giữ tên, kênh và điểm. Có lead trùng mã. Có lúc bạn cần sửa điểm, có lúc bạn cần một bản không ai sửa được để đưa vào báo cáo đã chốt.",
    problem:
      "Nhét mọi thứ vào một chuỗi ngăn bằng dấu phẩy thì tách ra sẽ vỡ lúc tên khách có dấu phẩy. Dùng list cho dữ liệu cần tìm theo mã thì mỗi lần tìm là đi từ đầu danh sách.",
    why:
      "Mỗi cấu trúc giữ một loại quan hệ. List giữ thứ tự. Dict giữ cặp khóa-giá trị. Set giữ sự duy nhất. Tuple giữ một bản ghi không cho sửa.",
    plain:
      "Chọn cấu trúc theo câu hỏi bạn sẽ hỏi lại dữ liệu, không theo thói quen.",
    precise:
      "str là bất biến: mọi «sửa» đều tạo chuỗi mới. list sửa được, có thứ tự, truy cập bằng vị trí. dict ánh xạ khóa sang giá trị, khóa không trùng. tuple có thứ tự nhưng không sửa. set không thứ tự, không trùng, hợp và giao rất nhanh. Comprehension là cách tạo list, dict hoặc set bằng một biểu thức, dễ đọc hơn vòng lặp phụ khi phép biến đổi là một dòng.",
    steps: [
      { label: "List", math: "scores = [30, 40, 72]", say: "Giữ thứ tự vào." },
      { label: "Dict", math: "lead['CH-014'] = 72", say: "Hỏi mã là ra điểm, không phải đi quét cả bảng." },
      { label: "Set", math: "{'gdn','gdn','meta'}", say: "Còn lại gdn và meta. Trùng biến mất." },
    ],
    pitfalls: [
      { left: "List", right: "Dict", note: "List khi thứ tự là chuyện chính. Dict khi bạn tìm bằng mã." },
      { left: "Tuple", right: "List", note: "Tuple cho bản ghi đã chốt. List cho danh sách còn thêm bớt." },
    ],
    code: {
      lang: "python",
      source: "leads = {'CH-014': 72, 'CH-002': 40}\nprint(leads['CH-014'])\nprint(sorted({'gdn','gdn','meta'}))",
      out: "72\n['gdn', 'meta']",
    },
    insight: "Hỏi dữ liệu bằng mã thì dùng dict. Hỏi «còn những giá trị nào» thì nghĩ tới set.",
    sources: [
      { claim: "List, tuple, dict và set là các cấu trúc dựng sẵn của Python, khác nhau ở thứ tự, khả năng sửa và khóa.", source: "Python docs, Data structures", url: "https://docs.python.org/3/tutorial/datastructures.html" },
      illus("80 lead là ví dụ minh họa."),
    ],
    glossary: [
      { term: "dict", en: "dictionary", def: "Tập các cặp khóa và giá trị. Khóa không trùng." },
    ],
  }),

  T({
    id: "numpy",
    scope: /numpy|data science libraries/i,
    keys: [/creating arrays/i, /indexing and slicing arrays/i, /array manipulation/i, /reshaping/i, /broadcasting/i, /operations on arrays/i, /image manipulation/i, /numpy/i],
    title: "NumPy: tính trên cả mảng, không tính từng ô",
    formula: "c_i = a_i + b_i",
    situation:
      "Bạn có chi tiêu 30 ngày của 12 cửa hàng, muốn cộng thêm phí nền 5% cho mọi ô. Viết vòng lặp lồng nhau chạy đúng, nhưng khó đọc và dễ lệch chỉ số.",
    problem:
      "Vòng lặp từng ô che mất ý «cộng một véctơ». Khi dữ liệu là ảnh hoặc ma trận, lệch một chỉ số là ra một bảng im lặng sai.",
    why:
      "NumPy tồn tại để các phép cộng, nhân, cắt và đổi hình chạy trên cả mảng, với quy tắc broadcasting nói rõ khi nào một số đơn được phép lan ra cả cột.",
    plain:
      "Mảng NumPy là một khối số cùng kiểu, có hình. Phép tính áp lên cả khối.",
    precise:
      "ndarray có shape, ví dụ (30, 12) là 30 hàng và 12 cột. Cắt mảng dùng chỉ số bắt đầu:kết thúc, kết thúc không tính. Reshape đổi cách nhìn, không đổi thứ tự ô nếu số ô giữ nguyên. Broadcasting cho phép một véctơ dài 12 cộng vào mọi hàng của ma trận 30×12, vì chiều cuối trùng nhau.",
    symbols: [
      { sym: "a_i", meaning: "phần tử thứ i của mảng a" },
    ],
    steps: [
      { label: "Mảng", math: "spend.shape = (3, 2)", say: "Ba ngày, hai kênh. Ví dụ minh họa." },
      { label: "Phí", math: "spend * 1.05", say: "Mỗi ô nhân 1,05. Không viết vòng lặp." },
      { label: "Cột", math: "spend[:, 1]", say: "Mọi hàng, cột thứ 2. Chỉ số bắt đầu từ 0." },
    ],
    code: {
      lang: "python",
      source: "spend = [[10, 40],[12, 36],[9, 42]]\nfee = [[round(x * 1.05, 1) for x in row] for row in spend]\nprint(fee)\nprint([row[1] for row in spend])",
      out: "[[10.5, 42.0], [12.6, 37.8], [9.4, 44.1]]\n[40, 36, 42]",
    },
    insight: "Khi mọi ô chịu cùng một quy tắc, viết quy tắc một lần cho cả mảng.",
    sources: [
      { claim: "ndarray là mảng nhiều chiều cùng kiểu. Broadcasting mô tả cách NumPy giãn các chiều khi tính.", source: "NumPy, Absolute beginners", url: "https://numpy.org/doc/stable/user/absolute_beginners.html" },
      illus("Ma trận 3×2 là ví dụ minh họa. Ô code trên chạy bằng JavaScript tương đương để xem số, đúng phép nhân 1,05."),
    ],
  }),

  T({
    id: "pandas",
    scope: /pandas|data science libraries|eda|exploratory/i,
    keys: [/series/i, /dataframe/i, /creating dataframes/i, /loading data/i, /indexing and slicing dataframes/i, /querying a dataframe/i, /operations on dataframes/i, /merging/i, /analysing a dataframe/i, /grouping and aggregation/i, /wrangling/i, /method chaining/i],
    avoid: /matplotlib|seaborn|scatter|histogram|box plot|heat map|pair plot|bar plot|pie chart/i,
    title: "Pandas: bảng dữ liệu có tên cột",
    situation:
      "File leads có cột channel, spend, forms. Bạn cần CPA theo kênh, và chỉ giữ kênh có ít nhất 30 form. Ví dụ minh họa: 6.200 dòng.",
    problem:
      "Làm trên list lồng list thì mỗi lần nhớ forms là chỉ số 2. Ai thêm một cột ở đầu, mọi chỉ số lệch, CPA ra số của cột khác.",
    why:
      "Pandas tồn tại để cột có tên, hàng có nhãn, và các phép lọc, ghép, gộp viết bằng ý định chứ không bằng số thứ tự cột.",
    plain:
      "Series là một cột. DataFrame là nhiều cột cùng nhau, mỗi cột một series.",
    precise:
      "Lọc điều kiện tạo một bảng nhỏ hơn, không sửa bảng gốc trừ khi bạn gán lại. groupby cắt bảng theo nhãn rồi tính sum hoặc mean trên từng mảnh. merge ghép hai bảng theo khóa, giống join. method chaining là viết các bước nối nhau, mỗi bước ra một bảng mới, dễ đọc từ trên xuống nếu không nhồi quá nhiều việc vào một dòng.",
    steps: [
      { label: "Bảng", math: "channel | spend | forms", say: "GDN 4.200.000 và 60 form. Meta 2.100.000 và 28 form. Ví dụ minh họa." },
      { label: "CPA", math: "spend / forms", say: "GDN = 70.000. Meta = 75.000." },
      { label: "Ngưỡng", math: "forms >= 30", say: "Chỉ còn GDN. Meta chưa đủ mẫu để mang ra cuộc họp." },
    ],
    code: {
      lang: "python",
      source: "rows = [\n  {'channel':'GDN','spend':4200000,'forms':60},\n  {'channel':'Meta','spend':2100000,'forms':28},\n]\nfor r in rows:\n    r['cpa'] = round(r['spend']/r['forms'])\nkept = [r for r in rows if r['forms'] >= 30]\nprint(kept)",
      out: "[{'channel': 'GDN', 'spend': 4200000, 'forms': 60, 'cpa': 70000}]",
    },
    pitfalls: [
      { left: "Lọc", right: "Sửa gốc", note: "Gán df2 = df[df.forms>=30] là một cái nhìn mới. Sửa df2 có thể đụng df nếu bạn chưa copy. Khi cố ý tách, dùng copy." },
      { left: "groupby", right: "merge", note: "groupby tóm tắt. merge ghép thêm cột từ bảng khác. Lẫn hai việc sẽ hoặc là mất dòng, hoặc là nhân đôi dòng." },
    ],
    insight: "Đặt tên cột cho đúng nghiệp vụ. Mọi phép sau đó đọc như một câu.",
    sources: [
      { claim: "DataFrame là cấu trúc bảng có nhãn của pandas. groupby dùng để gộp theo khóa.", source: "pandas user guide", url: "https://pandas.pydata.org/docs/user_guide/index.html" },
      illus("Số GDN và Meta là ví dụ minh họa."),
    ],
    glossary: [
      { term: "DataFrame", en: "DataFrame", def: "Bảng hai chiều có tên cột, một cột là một Series." },
    ],
  }),

  T({
    id: "plots",
    scope: /matplotlib|seaborn|visualisation|visualization|tableau|power bi|chart/i,
    keys: [/scatter/i, /line plot/i, /histogram/i, /bar plot/i, /bar chart/i, /box plot/i, /pie chart/i, /heat map/i, /pair plot/i, /area chart/i, /treemap/i, /dual axis/i, /maps and hierarchies/i, /data visuali[sz]ation/i, /advanced visuali[sz]ations?/i, /understanding a dataset/i],
    title: "Chọn đúng một kiểu biểu đồ cho một câu hỏi",
    sim: "eda",
    situation:
      "Cuộc họp có 20 phút. Bạn mang CPA theo ngày của ba kênh trong 8 tuần. Người nghe cần thấy kênh nào đang trượt, không cần thấy mọi điểm dữ liệu.",
    problem:
      "Pie cho chuỗi thời gian, hoặc dual axis hai thước đo khác nhau trên một trục, tạo một hình mà mắt đọc ra xu hướng không có thật.",
    why:
      "Mỗi kiểu biểu đồ trả lời một kiểu câu hỏi. Chọn sai kiểu thì dữ liệu đúng vẫn kể sai.",
    plain:
      "So sánh nhóm thì cột. Xu hướng theo thời gian thì đường. Phân bố thì histogram hoặc box. Quan hệ hai số thì scatter.",
    precise:
      "Bar so sánh đại lượng giữa các nhóm rời. Line nối theo trục có thứ tự, thường là thời gian. Histogram đếm số quan sát rơi vào từng khoảng. Box plot cho thấy trung vị, khoảng tứ phân vị và những điểm nằm xa. Scatter cho hai biến số. Heatmap cho một bảng số, màu là giá trị. Pie chỉ tạm ổn khi có rất ít phần và chúng cộng thành một tổng có nghĩa. Dual axis dễ đánh lừa vì hai thang đo không chung đơn vị.",
    pitfalls: [
      { left: "Histogram", right: "Bar chart", note: "Histogram là phân bố của một biến số, các cột dính nhau vì khoảng liên tục. Bar là nhóm rời, các cột tách nhau." },
      { left: "Box plot", right: "Một số trung bình", note: "Trung bình giấu phân bố. Box cho thấy nửa giữa của dữ liệu đang nằm ở đâu." },
    ],
    insight: "Một biểu đồ, một câu. Nếu cần chú thích cách đọc, hình đang làm quá nhiều việc.",
    sources: [
      { claim: "Histogram ước lượng phân bố. Box plot tóm tắt trung vị và khoảng tứ phân vị theo cách Tukey phổ biến.", source: "Wikipedia, Box plot", url: "https://en.wikipedia.org/wiki/Box_plot" },
      illus("Ba kênh trong 8 tuần là ví dụ minh họa."),
    ],
  }),
];
