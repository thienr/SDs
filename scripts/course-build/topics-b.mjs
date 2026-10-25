import { T } from "./topics.mjs";

const illus = (claim) => ({ claim, source: "ví dụ minh họa, không phải số liệu ngành" });

export const topicsB = [
  T({
    id: "desc",
    scope: /descriptive|central tendency|measures of position|variability|association|univariate|statistics on numerical/i,
    keys: [/central tendency/i, /\bmean\b/i, /\bmedian\b/i, /\bmode\b/i, /quartile/i, /decile|percentile/i, /measures of position/i, /variability/i, /\brange\b/i, /absolute deviation/i, /variance|standard deviation/i, /covariance/i, /correlation/i, /types of data/i, /numerical features/i, /categorical unordered/i, /categorical ordered/i, /applied statistics/i, /descriptive statistics/i],
    title: "Mô tả một cột số: trung tâm, vị trí, độ phân tán",
    formula: "\\bar x = \\dfrac{1}{n}\\sum_i x_i \\qquad s = \\sqrt{\\dfrac{\\sum_i (x_i-\\bar x)^2}{n-1}}",
    situation:
      "CPA tám tuần của một kênh, ví dụ minh họa: 70, 72, 71, 74, 73, 90, 69, 71 nghìn đồng. Sếp hỏi «CPA điển hình là bao nhiêu».",
    problem:
      "Lấy trung bình ra khoảng 73,8. Tuần 90 kéo trung bình lên. Trung vị nằm ở 71,5. Hai câu trả lời khác nhau, và người nghe không biết bạn đang nói cái nào.",
    why:
      "Các thước đo mô tả tồn tại để một cột số dài được tóm bằng vài số mà không giấu hình dạng. Trung bình, trung vị, phân vị và độ lệch chuẩn mỗi cái chịu một kiểu méo khác nhau.",
    plain:
      "Trung bình là điểm cân. Trung vị là giá trị đứng giữa khi đã sắp xếp. Độ lệch chuẩn nói các điểm thường nằm cách trung bình bao xa.",
    precise:
      "Mean cộng rồi chia. Median không bị một điểm cực đoan kéo mạnh như mean. Mode là giá trị lặp nhiều nhất, hữu ích với dữ liệu rời. Quartile cắt dữ liệu đã sắp thành bốn phần. Phương sai là trung bình bình phương độ lệch. Với một mẫu, mẫu số thường là n−1 để ước lượng phương sai quần thể. Độ lệch chuẩn là căn của phương sai, cùng đơn vị với dữ liệu. Covariance dương nghĩa là hai cột cùng hướng. Correlation chia covariance cho hai độ lệch chuẩn nên nằm từ −1 đến 1.",
    symbols: [
      { sym: "\\bar x", meaning: "trung bình mẫu" },
      { sym: "n", meaning: "số quan sát" },
      { sym: "s", meaning: "độ lệch chuẩn mẫu" },
    ],
    steps: [
      { label: "Số", math: "70, 72, 71, 74, 73, 90, 69, 71", say: "Tám tuần, đơn vị nghìn đồng. Ví dụ minh họa." },
      { label: "Mean", math: "(70+72+71+74+73+90+69+71)/8 = 73{,}75", say: "Tuần 90 kéo mean lên." },
      { label: "Median", math: "69, 70, 71, 71, 72, 73, 74, 90", say: "Giữa hai số 71 và 72. Median = 71,5." },
      { label: "Đọc", math: "mean 73{,}8 \\neq median 71{,}5", say: "Chênh nhau vì có một tuần bất thường. Nói cả hai, không giấu tuần 90." },
    ],
    pitfalls: [
      { left: "s (mẫu)", right: "σ (quần thể)", note: "s chia cho n−1. σ chia cho n khi bạn đang mô tả đúng tập đó chứ không ước lượng tập lớn hơn. Trong báo cáo mẫu, nói rõ đang dùng cái nào." },
      { left: "Correlation", right: "Causation", note: "Hai cột cùng tăng chưa nghĩa là cột này gây ra cột kia. Tháng lễ có thể đẩy cả chi tiêu lẫn doanh thu." },
    ],
    insight: "Khi mean và median cách nhau, hãy kể về cái đuôi, đừng chỉ kể một số.",
    sources: [
      { claim: "Độ lệch chuẩn mẫu thường dùng mẫu số n−1. Hệ số tương quan Pearson nằm trong [−1, 1].", source: "Wikipedia, Standard deviation", url: "https://en.wikipedia.org/wiki/Standard_deviation" },
      { claim: "Tương quan đo mức cùng biến thiên tuyến tính, không tự nó chứng minh quan hệ nhân quả.", source: "Wikipedia, Pearson correlation coefficient", url: "https://en.wikipedia.org/wiki/Pearson_correlation_coefficient" },
      illus("Tám tuần CPA là ví dụ minh họa."),
    ],
    glossary: [
      { term: "Median", en: "median", def: "Giá trị đứng giữa của dữ liệu đã sắp xếp." },
      { term: "Standard deviation", en: "standard deviation", def: "Căn của phương sai. Cùng đơn vị với dữ liệu gốc." },
    ],
  }),

  T({
    id: "prob",
    scope: /probability|inferential|math for data/i,
    keys: [/permutation/i, /combination/i, /definition of probability/i, /definition and properties/i, /types of events/i, /addition rule/i, /multiplication rule/i, /rules of probability/i, /random variable/i, /expected value/i, /joint probability|conditional probability/i, /bayes/i, /generating probability/i, /types of probability/i, /probability distributions?/i, /basics of probability/i],
    title: "Xác suất, biến ngẫu nhiên và giá trị kỳ vọng",
    formula: "P(A\\cup B)=P(A)+P(B)-P(A\\cap B) \\qquad E[X]=\\sum_x x\\,P(X=x)",
    sim: "binomial",
    situation:
      "Bạn bốc 3 KOL từ một danh sách 8 người cho một đợt seeding. Ví dụ minh họa: mỗi người có một mức phí đã biết. Câu hỏi thứ nhất là có bao nhiêu bộ ba. Câu hỏi thứ hai là phí trung bình nếu bốc ngẫu nhiên.",
    problem:
      "Nhân 8×7×6 rồi dừng thì bạn đang đếm cả thứ tự. Bộ {An, Bình, Chi} bị đếm nhiều lần. Kỳ vọng tính bằng cách cộng phí của một bộ đẹp thì không phải kỳ vọng.",
    why:
      "Hoán vị và tổ hợp tồn tại để đếm đúng không gian mẫu. Quy tắc cộng và nhân để ghép biến cố. Kỳ vọng tồn tại để nói mức trung bình dài hạn của một biến ngẫu nhiên, không phải kết quả của một lần bốc.",
    plain:
      "Xác suất là tỷ lệ của những kết quả thuận trên những kết quả cùng khả năng, hoặc tổng quát hơn là một độ đo từ 0 đến 1 gán cho biến cố. Kỳ vọng là trung bình có trọng số chính là các xác suất đó.",
    precise:
      "Hoán vị quan tâm thứ tự. Tổ hợp không quan tâm thứ tự. Hai biến cố rời nhau thì giao bằng rỗng, xác suất hợp bằng tổng. Độc lập nghĩa là biết A không đổi xác suất của B, P(A∩B)=P(A)P(B). Rời nhau và độc lập là hai việc khác nhau. Biến ngẫu nhiên gán một số cho mỗi kết quả. Kỳ vọng của biến rời là tổng x nhân P(X=x).",
    symbols: [
      { sym: "P(A)", meaning: "xác suất biến cố A" },
      { sym: "E[X]", meaning: "giá trị kỳ vọng của X" },
    ],
    steps: [
      { label: "Tổ hợp", math: "C(8,3) = 8!/(3!5!) = 56", say: "56 bộ ba, không phân biệt thứ tự." },
      { label: "Một biến đơn giản", math: "X = 0 hoặc 1, P(X=1)=0{,}25", say: "Ví dụ minh họa: xác suất một lead thành form." },
      { label: "Kỳ vọng", math: "E[X]=0\\times0{,}75+1\\times0{,}25=0{,}25", say: "Trên nhiều lead, tỷ lệ form kỳ vọng là 25%, không phải kết quả của một lead." },
    ],
    pitfalls: [
      { left: "Disjoint (rời)", right: "Independent (độc lập)", note: "Hai biến cố rời và cùng có xác suất dương thì không độc lập, vì nếu A xảy ra thì B không thể xảy ra." },
      { left: "Hoán vị", right: "Tổ hợp", note: "Thứ tự lên sóng của ba KOL thì là hoán vị. Một bộ ba ngồi chung một bàn, không kể chỗ, thì là tổ hợp." },
    ],
    insight: "Kỳ vọng là trung bình của rất nhiều lần lặp lại quy tắc, không phải lời hứa cho một lần chạy ads.",
    sources: [
      { claim: "Quy tắc cộng có trừ phần giao. Độc lập được định nghĩa bằng xác suất giao bằng tích.", source: "Wikipedia, Probability axioms", url: "https://en.wikipedia.org/wiki/Probability_axioms" },
      { claim: "Kỳ vọng của biến rời là tổng giá trị nhân xác suất.", source: "Wikipedia, Expected value", url: "https://en.wikipedia.org/wiki/Expected_value" },
      illus("Danh sách 8 KOL là ví dụ minh họa."),
    ],
    glossary: [
      { term: "Expected value", en: "expected value", def: "Trung bình có trọng số của một biến ngẫu nhiên." },
      { term: "Independent", en: "independence", def: "Biết biến cố này không đổi xác suất biến cố kia." },
    ],
  }),

  T({
    id: "binomial",
    keys: [/binomial/i, /bernoulli/i, /cumulative probability/i, /discrete probability/i, /probability without experiment/i],
    title: "Phân phối nhị thức",
    sim: "binomial",
    formula: "P(X=k)=\\binom{n}{k} p^k (1-p)^{n-k}",
    situation:
      "Landing page có xác suất gửi form p = 0,08 trên mỗi phiên, ví dụ minh họa. Tuần này có 40 phiên từ một nhóm nhỏ. Bạn muốn biết khả năng có đúng 5 form, và khả năng có ít hơn 2 form.",
    problem:
      "Nhân 40×0,08 = 3,2 rồi tưởng tuần nào cũng ra 3 form. Đó là kỳ vọng, không phải xác suất của từng khả năng. Tuần ra 0 form vẫn có thể xảy ra mà quy trình không hỏng.",
    why:
      "Phân phối nhị thức tồn tại vì đây là phép đếm số lần thành công trong n lần thử độc lập, mỗi lần chỉ thành hoặc không, với cùng xác suất p.",
    plain:
      "Nếu mỗi phiên là một lần tung đồng xu không đều, số form trong 40 phiên là một biến nhị thức.",
    precise:
      "X ~ Binomial(n, p) khi có n thử độc lập, mỗi thử thành công với xác suất p. P(X=k) tính bằng số cách chọn k vị trí thành công, nhân p^k, nhân (1−p) cho các lần thất bại. Kỳ vọng là np. Phương sai là np(1−p). Xác suất tích lũy P(X≤k) là cộng các P(X=i) từ 0 đến k.",
    symbols: [
      { sym: "n", meaning: "số lần thử" },
      { sym: "p", meaning: "xác suất thành công mỗi lần" },
      { sym: "k", meaning: "số lần thành công muốn tính" },
    ],
    steps: [
      { label: "Đặt", math: "n=40,\\ p=0{,}08,\\ k=5", say: "Ví dụ minh họa." },
      { label: "Kỳ vọng", math: "np = 3{,}2", say: "Mức trung bình dài hạn, không phải lời hứa của tuần này." },
      { label: "Một điểm", math: "P(X=5)=\\binom{40}{5}(0{,}08)^5(0{,}92)^{35}", say: "Kéo thanh trong hình để thấy cột này cao hay thấp so với các k khác." },
    ],
    insight: "np là tâm. Cả hình cột mới là câu trả lời cho «liệu tuần này ra ít form thì có lạ không».",
    sources: [
      { claim: "Công thức nhị thức và kỳ vọng np, phương sai np(1−p) là kết quả chuẩn.", source: "Wikipedia, Binomial distribution", url: "https://en.wikipedia.org/wiki/Binomial_distribution" },
      illus("p = 0,08 và 40 phiên là ví dụ minh họa."),
    ],
    glossary: [
      { term: "Binomial", en: "binomial distribution", def: "Phân phối của số lần thành công trong n lần thử độc lập, cùng xác suất p." },
    ],
  }),

  T({
    id: "normal",
    keys: [/normal distribution/i, /standard normal/i, /z-score|z score/i, /probability density/i, /continuous probability/i, /pdf/i, /68-95|empirical rule/i],
    title: "Phân phối chuẩn, mật độ và điểm Z",
    sim: "normal",
    formula: "z = \\dfrac{x-\\mu}{\\sigma}",
    situation:
      "Thời gian người dùng ở lại landing, ví dụ minh họa, có trung bình 42 giây và độ lệch chuẩn 8 giây. Bạn muốn biết khoảng bao nhiêu phiên nằm dưới 30 giây, tức là nhóm thoát rất nhanh.",
    problem:
      "Lấy 30 trừ 42 rồi chia cảm tính không ra một tỷ lệ. Với biến liên tục, xác suất tại đúng một điểm bằng 0. Phải nói về một khoảng.",
    why:
      "Họ phân phối chuẩn và điểm Z tồn tại để đưa mọi cột số hình chuông về cùng một thước, rồi đọc diện tích dưới đường cong như một xác suất.",
    plain:
      "Đường cong chuẩn là một hình chuông xác định bởi trung bình và độ lệch chuẩn. Diện tích dưới đường cong giữa hai mốc là xác suất rơi vào khoảng đó.",
    precise:
      "Hàm mật độ PDF cho biết độ cao của đường cong, không phải xác suất tại một điểm. Hàm tích lũy CDF tại x là xác suất nhỏ hơn hoặc bằng x. Điểm Z đếm xem x cách trung bình bao nhiêu lần độ lệch chuẩn. Quy tắc thực nghiệm: khoảng 68% khối lượng nằm trong 1 độ lệch, 95% trong 2, 99,7% trong 3, với phân phối chuẩn.",
    symbols: [
      { sym: "\\mu", meaning: "trung bình" },
      { sym: "\\sigma", meaning: "độ lệch chuẩn" },
      { sym: "z", meaning: "số lần lệch chuẩn so với trung bình" },
    ],
    steps: [
      { label: "Mốc", math: "x=30,\\ \\mu=42,\\ \\sigma=8", say: "Ví dụ minh họa, đơn vị giây." },
      { label: "Z", math: "z=(30-42)/8=-1{,}5", say: "30 giây nằm dưới trung bình 1,5 độ lệch chuẩn." },
      { label: "Diện tích", math: "P(X<30)=\\Phi(-1{,}5)\\approx 0{,}067", say: "Khoảng 6,7% phiên. Đây là diện tích, không phải chiều cao đường cong." },
    ],
    pitfalls: [
      { left: "PDF", right: "CDF", note: "PDF là độ cao. CDF là diện tích từ trái tới mốc. Xác suất một khoảng là hiệu hai CDF." },
      { left: "SE", right: "s", note: "s là độ phân tán của từng quan sát. SE = s/√n là độ phân tán của trung bình mẫu. Đừng chia Z của một người bằng SE." },
    ],
    insight: "Điểm Z là đơn vị chung. Diện tích mới là xác suất.",
    sources: [
      { claim: "Khoảng 68–95–99,7 phần trăm khối lượng của phân phối chuẩn nằm trong 1, 2 và 3 độ lệch chuẩn.", source: "Wikipedia, Normal distribution", url: "https://en.wikipedia.org/wiki/Normal_distribution" },
      { claim: "68–95–99,7 là quy tắc thực nghiệm cho phân phối chuẩn, không phải cho mọi hình dạng dữ liệu.", source: "Wikipedia, 68–95–99.7 rule", url: "https://en.wikipedia.org/wiki/68%E2%80%9395%E2%80%9399.7_rule" },
      illus("42 giây và 8 giây là ví dụ minh họa."),
    ],
    glossary: [
      { term: "Z-score", en: "standard score", def: "Khoảng cách tới trung bình, đo bằng số lần độ lệch chuẩn." },
      { term: "PDF", en: "probability density function", def: "Độ cao của đường cong mật độ. Diện tích dưới PDF mới là xác suất." },
    ],
  }),

  T({
    id: "clt",
    keys: [/central limit/i, /sampling distribution/i, /\bsamples\b/i, /properties of sampling/i, /clt demonstration/i, /estimating mean using clt/i],
    avoid: /confidence interval/i,
    title: "Định lý giới hạn trung tâm",
    sim: "clt",
    formula: "\\bar X \\approx \\mathcal{N}\\!\\left(\\mu,\\ \\dfrac{\\sigma^2}{n}\\right)",
    situation:
      "CPA từng landing rất lệch: nhiều trang rẻ, vài trang đắt bất ngờ. Ví dụ minh họa: bạn không đo được mọi trang, chỉ bốc 40 trang mỗi lần và lấy CPA trung bình của mẫu đó.",
    problem:
      "Một trung bình mẫu nhìn rất chắc, nên người ta tưởng nó gần như đúng quần thể. Không nói được nó thường dao động bao nhiêu thì một lần bốc may mắn sẽ bị kể như một sự thật.",
    why:
      "Định lý giới hạn trung tâm (CLT, Central Limit Theorem) tồn tại để nói về phân phối của trung bình mẫu, dù dữ liệu gốc có lệch. Nó cho một hình chuông và một độ rộng thu nhỏ theo √n.",
    plain:
      "Lấy nhiều mẫu cùng cỡ, tính trung bình mỗi mẫu, rồi nhìn các trung bình đó. Chúng tạo thành một hình chuông quanh trung bình thật, hẹp dần khi mỗi mẫu có nhiều quan sát hơn.",
    precise:
      "Nếu các quan sát độc lập, cùng phân phối, phương sai hữu hạn, thì trung bình mẫu tiến về phân phối chuẩn tâm μ, phương sai σ²/n khi n lớn. Sai số chuẩn SE = σ/√n là độ lệch chuẩn của trung bình mẫu, không phải của từng quan sát. CLT không biến một mẫu thành chuẩn. Nó nói về sự phân bố của nhiều trung bình mẫu.",
    symbols: [
      { sym: "\\bar X", meaning: "trung bình của một mẫu" },
      { sym: "\\mu", meaning: "trung bình của toàn bộ tập" },
      { sym: "\\sigma", meaning: "độ lệch chuẩn của từng quan sát" },
      { sym: "n", meaning: "cỡ mẫu" },
    ],
    steps: [
      { label: "Gốc", math: "\\sigma = 30\\ \\text{nghìn đồng}", say: "CPA từng trang phân tán mạnh. Ví dụ minh họa." },
      { label: "Mẫu", math: "n = 40", say: "Mỗi lần bốc 40 trang, lấy một trung bình." },
      { label: "SE", math: "SE = 30/\\sqrt{40} \\approx 4{,}7", say: "Các trung bình mẫu thường lệch khỏi μ khoảng vài nghìn, không phải 30 nghìn." },
    ],
    pitfalls: [
      { left: "Một mẫu lớn", right: "Nhiều trung bình mẫu", note: "CLT mô tả histogram của các trung bình. Một mẫu duy nhất, dù n lớn, vẫn chỉ là một số." },
      { left: "SE", right: "s", note: "s đo từng dòng. SE = s/√n đo độ tin của trung bình. Báo cáo CPA trung bình mà ghi s thay cho SE sẽ phóng đại độ bất định, hoặc ngược lại." },
    ],
    insight: "Muốn trung bình chắc hơn thì tăng n. Độ rộng chỉ giảm theo căn, không giảm theo n.",
    sources: [
      { claim: "Với quan sát độc lập, cùng phân phối, phương sai hữu hạn, phân phối của trung bình mẫu tiến về chuẩn khi n tăng.", source: "Wikipedia, Central limit theorem", url: "https://en.wikipedia.org/wiki/Central_limit_theorem" },
      illus("σ = 30 và n = 40 là ví dụ minh họa."),
    ],
    glossary: [
      { term: "CLT", en: "Central Limit Theorem", def: "Phân phối của trung bình mẫu tiến về hình chuông khi mẫu đủ lớn." },
      { term: "Standard error", en: "standard error", def: "Độ lệch chuẩn của một thống kê mẫu, thường là của trung bình: σ/√n." },
    ],
    recall: ["normal"],
  }),

  T({
    id: "ci",
    keys: [/confidence interval/i, /sampling and estimation/i],
    title: "Khoảng tin cậy",
    sim: "ci",
    formula: "\\bar x \\pm z_{\\alpha/2}\\,\\dfrac{s}{\\sqrt n}",
    situation:
      "Mẫu 40 landing cho CPA trung bình 73 nghìn đồng, s = 30. Khách hỏi khoảng nào đáng dùng để lập ngân sách, không hỏi mỗi trang.",
    problem:
      "Nói «CPA là 73» là nói một điểm. Lần bốc sau có thể ra 68 hoặc 79. Một điểm không kèm độ rộng sẽ bị dùng như sự thật đến hàng đơn vị.",
    why:
      "Khoảng tin cậy tồn tại để kèm theo trung bình một dải số, với một quy ước về tỷ lệ lần mà quy trình này bắt trúng giá trị thật.",
    plain:
      "Khoảng tin cậy 95% là một quy trình: làm đi làm lại thì khoảng 95% các khoảng tạo ra sẽ chứa trung bình thật. Không phải «xác suất μ nằm trong khoảng này là 95%» sau khi khoảng đã tính xong.",
    precise:
      "Với mẫu lớn, khoảng cho trung bình là trung bình mẫu cộng trừ một hệ số nhân với sai số chuẩn. Hệ số z lấy từ phân phối chuẩn theo mức tin cậy. Mẫu nhỏ và σ không biết thì dùng hệ số t. Một khoảng không chứa μ là một lần quy trình trượt, không phải bằng chứng μ đã đổi.",
    symbols: [
      { sym: "\\bar x", meaning: "trung bình mẫu vừa tính" },
      { sym: "z_{\\alpha/2}", meaning: "mốc trên phân phối chuẩn, ví dụ 1,96 cho mức 95%" },
      { sym: "s/\\sqrt n", meaning: "sai số chuẩn ước lượng" },
    ],
    steps: [
      { label: "Số", math: "\\bar x=73,\\ s=30,\\ n=40", say: "Ví dụ minh họa, đơn vị nghìn đồng." },
      { label: "SE", math: "30/\\sqrt{40}\\approx 4{,}74", say: "Độ rộng của trung bình, không phải của từng trang." },
      { label: "Khoảng 95%", math: "73 \\pm 1{,}96\\times 4{,}74 \\approx [63{,}7,\\ 82{,}3]", say: "Quy trình này, nếu lặp, khoảng 95% lần sẽ bắt trúng μ. Đây không phải xác suất hậu nghiệm cho đúng khoảng vừa ra." },
    ],
    insight: "Khoảng rộng là do mẫu ít hoặc dữ liệu phân tán, không phải do phép tính yếu.",
    sources: [
      { claim: "Một khoảng tin cậy 95% theo nghĩa cổ điển là quy trình mà về dài hạn khoảng 95% khoảng bắt được tham số.", source: "Wikipedia, Confidence interval", url: "https://en.wikipedia.org/wiki/Confidence_interval" },
      illus("73, s = 30, n = 40 là ví dụ minh họa."),
    ],
    glossary: [
      { term: "Confidence interval", en: "confidence interval", def: "Một dải số đi kèm ước lượng, theo một mức tin cậy của quy trình." },
    ],
    recall: ["clt"],
  }),

  T({
    id: "hyp",
    scope: /hypothesis/i,
    keys: [/hypothesis/i, /null and alternate/i, /making a decision/i, /making the decision/i, /critical value/i, /critical region/i, /p-value/i, /types of errors/i, /t distribution/i, /two-sample/i, /a\/b testing/i, /ab testing/i, /test-?statistic/i, /representative sample/i, /business understanding/i, /industry relevance/i],
    avoid: /linear regression|logistic/i,
    title: "Kiểm định giả thuyết",
    sim: "hypothesis",
    formula: "p = P(\\text{dữ liệu cực đoan này hoặc hơn} \\mid H_0)",
    situation:
      "Hai creative cho cùng một landing. A có 4.000 phiên, 96 form. B có 4.000 phiên, 120 form. Ví dụ minh họa. Khách muốn biết B có thật hơn A hay chỉ là một tuần may.",
    problem:
      "Lấy 120 trừ 96 rồi tuyên bố thắng. Với tỷ lệ quanh 2 đến 3%, dao động mẫu đủ lớn để một creative ngang cơ vẫn thỉnh thoảng lệch 24 form.",
    why:
      "Kiểm định giả thuyết tồn tại để quy ước trước thế nào là «lệch quá nhiều so với chuyện ngẫu nhiên», rồi mới nhìn số. p-value, miền bác bỏ và hai loại sai là các mảnh của quy ước đó.",
    plain:
      "Đặt một giả thuyết không có khác biệt, giả sử nó đúng, rồi hỏi dữ liệu vừa thấy có thuộc vùng hiếm hay không. Hiếm theo ngưỡng đã chốt thì bác bỏ giả thuyết đó.",
    precise:
      "H0 thường là không khác, hoặc hiệu bằng 0. H1 là điều còn lại mà bạn muốn có cửa để kết luận. Mức ý nghĩa α là tỷ lệ bác bỏ H0 nhầm khi H0 đúng, tức sai lầm loại I. p-value là xác suất, nếu H0 đúng, của một kết quả cực đoan ít nhất bằng kết quả đã thấy. p nhỏ hơn α thì bác bỏ H0 theo đúng quy ước đó. Không bác bỏ không có nghĩa là đã chứng minh H0. Sai lầm loại II là không bác bỏ khi H1 mới đúng. Power là xác suất không mắc sai lầm loại II.",
    symbols: [
      { sym: "H_0", meaning: "giả thuyết dùng làm mốc, thường là không có hiệu" },
      { sym: "\\alpha", meaning: "ngưỡng chấp nhận bác bỏ nhầm" },
      { sym: "p", meaning: "độ hiếm của dữ liệu nếu H0 đúng" },
    ],
    steps: [
      { label: "H0", math: "p_B - p_A = 0", say: "Hai creative cùng tỷ lệ form. Đây là mốc, không phải niềm tin." },
      { label: "Số", math: "\\hat p_A=96/4000=0{,}024,\\ \\hat p_B=0{,}030", say: "Ví dụ minh họa." },
      { label: "Đọc p", math: "p < \\alpha \\Rightarrow \\text{bác bỏ } H_0", say: "Kéo cỡ mẫu và hiệu trong hình để thấy p đổi, và thấy vùng bác bỏ nhầm." },
    ],
    pitfalls: [
      { left: "p-value", right: "Xác suất H0 đúng", note: "p tính khi giả sử H0 đúng. Nó không phải xác suất giả thuyết là thật. Câu này đã được Hiệp hội Thống kê Mỹ nhấn mạnh." },
      { left: "Không bác bỏ", right: "Chứng minh không khác", note: "Mẫu nhỏ gần như không bác bỏ được gì. Im lặng của kiểm định không phải bằng chứng hai creative ngang nhau." },
      { left: "α", right: "Power", note: "α khống chế bác bỏ nhầm. Power nói khả năng phát hiện một hiệu thật. Tăng n là cách chính để tăng power." },
    ],
    insight: "Chốt ngưỡng và cỡ mẫu trước khi nhìn creative thắng. Nhìn rồi mới chọn ngưỡng thì p-value không còn nghĩa như quy ước.",
    sources: [
      { claim: "p-value không đo xác suất giả thuyết đúng, và không đo cỡ hiệu.", source: "American Statistical Association, Statement on p-values (2016)", url: "https://www.amstat.org/asa/files/pdfs/p-valuestatement.pdf" },
      { claim: "Sai lầm loại I và loại II, cùng power, là các xác suất của quy trình kiểm định.", source: "Wikipedia, Type I and type II errors", url: "https://en.wikipedia.org/wiki/Type_I_and_type_II_errors" },
      illus("4.000 phiên, 96 và 120 form là ví dụ minh họa."),
    ],
    glossary: [
      { term: "p-value", en: "p-value", def: "Xác suất của dữ liệu cực đoan như đã thấy, hoặc hơn nữa, nếu giả thuyết mốc đúng." },
      { term: "Type I error", en: "type I error", def: "Bác bỏ giả thuyết mốc dù nó đúng." },
      { term: "Power", en: "statistical power", def: "Xác suất phát hiện một hiệu thật, tức không mắc sai lầm loại II." },
    ],
  }),

  T({
    id: "anova",
    keys: [/anova/i, /chi-squared|chi squared|chi square/i],
    title: "Chi-squared và ANOVA",
    formula: "F = \\dfrac{MS_{between}}{MS_{within}}",
    situation:
      "Ba nhóm creative, không chỉ hai. Hoặc một bảng: hàng là kênh, cột là có gửi form hay không. Ví dụ minh họa: GDN, Meta, TikTok, mỗi kênh vài trăm phiên.",
    problem:
      "So từng cặp bằng nhiều lần kiểm định t thì mỗi lần có một cửa sai α. Ba nhóm thành ba cặp, xác suất ít nhất một lần hô hoán tăng lên dù không nhóm nào khác nhau.",
    why:
      "ANOVA so nhiều trung bình trong một phép, bằng cách tách phương sai giữa nhóm và trong nhóm. Chi-squared cho bảng đếm kiểm tra hai biến hạng mục có độc lập hay không.",
    plain:
      "ANOVA hỏi các trung bình nhóm có lệch hơn mức phân tán nội bộ hay không. Chi-squared hỏi các ô đếm có lệch khỏi bảng «nếu hai biến không liên quan» hay không.",
    precise:
      "ANOVA một yếu tố tách tổng bình phương thành between và within. F lớn khi khác biệt giữa nhóm nổi bật so với nhiễu trong nhóm. Giả định thường gặp: độc lập, phương sai nhóm gần nhau, phần dư gần chuẩn. Chi-squared độc lập so ô quan sát với ô kỳ vọng. Ô kỳ vọng quá nhỏ thì phép xấp xỉ yếu.",
    steps: [
      { label: "Ba trung bình", math: "CPA: 70, 74, 92", say: "Ví dụ minh họa, nghìn đồng. Nhóm thứ ba nằm xa." },
      { label: "Câu hỏi F", math: "độ lệch giữa nhóm / độ lệch trong nhóm", say: "Nếu các trang trong cùng một nhóm đã nhảy 30 nghìn, thì khoảng cách 4 nghìn giữa nhóm là nhiễu." },
      { label: "Bảng đếm", math: "form và không form theo kênh", say: "Chi-squared nhìn cả bảng, không nhìn một ô đơn lẻ." },
    ],
    pitfalls: [
      { left: "ANOVA", right: "Nhiều lần t-test", note: "ANOVA là một cửa α cho câu «có nhóm nào lệch không». Nó chưa chỉ nhóm nào. Muốn chỉ nhóm thì cần bước so cặp có khống chế." },
      { left: "Chi-squared", right: "Tỷ lệ từng ô mắt thấy", note: "Một ô cao chưa đủ. Phép tính so với kỳ vọng của cả bảng." },
    ],
    insight: "Nhiều nhóm thì đừng mở nhiều cuộc kiểm định riêng rồi lấy cuộc nào đẹp.",
    sources: [
      { claim: "ANOVA so trung bình nhiều nhóm qua tỷ số phương sai giữa nhóm và trong nhóm.", source: "Wikipedia, Analysis of variance", url: "https://en.wikipedia.org/wiki/Analysis_of_variance" },
      { claim: "Kiểm định chi-squared độc lập so tần suất quan sát với tần suất kỳ vọng nếu độc lập.", source: "Wikipedia, Pearson's chi-squared test", url: "https://en.wikipedia.org/wiki/Pearson%27s_chi-squared_test" },
      illus("Ba mức CPA là ví dụ minh họa."),
    ],
  }),

  T({
    id: "eda",
    keys: [/data sourcing/i, /public and private data/i, /private data/i, /public data/i, /data cleaning/i, /data types/i, /fixing the rows/i, /missing value/i, /impute/i, /outlier/i, /standardising|standardizing/i, /invalid value/i, /univariate/i, /bivariate/i, /multivariate/i, /numeric - numeric|numeric-numeric/i, /correlation vs causation|correlation and causation/i, /introduction to eda/i, /exploratory data analysis/i],
    title: "EDA: làm sạch rồi mới kể",
    sim: "eda",
    situation:
      "File 20.000 phiên landing. Cột thời gian ở lại có vài dòng 0, vài dòng trống, và một dòng 86.400 giây, tức cả một ngày để tab mở. CPA tính trên file này sẽ bị kéo.",
    problem:
      "Xóa mọi dòng trống thì mất cả một kênh vì kênh đó không đo được một trường phụ. Giữ outlier 86.400 thì mean thời gian ở lại thành một câu chuyện không có người dùng nào sống như vậy.",
    why:
      "EDA (Exploratory Data Analysis) tồn tại để biết dữ liệu đang nói gì trước khi mô hình hóa: kiểu cột, hàng hỏng, giá trị thiếu, điểm cực đoan, và quan hệ từng cặp.",
    plain:
      "EDA là nhìn có cấu trúc. Không phải vẽ cho đủ loại chart. Mỗi bước làm sạch cần một lý do ghi lại được.",
    precise:
      "Thiếu dữ liệu có thể bỏ hàng, điền, hoặc giữ một cờ thiếu. Điền bằng mean là một lựa chọn có hệ quả, không phải mặc định vô hại. Outlier theo IQR: dưới Q1−1,5 IQR hoặc trên Q3+1,5 IQR. Theo Z: thường |z|>3 với dữ liệu gần chuẩn. Ngưỡng là quy ước, không phải định luật. Quan hệ số-số dùng scatter và tương quan. Số và nhóm dùng so trung vị hoặc box. Nhóm và nhóm dùng bảng đếm. Tương quan vẫn không phải nhân quả.",
    steps: [
      { label: "IQR", math: "Q1=20,\\ Q3=60,\\ IQR=40", say: "Ví dụ minh họa, giây ở lại trang." },
      { label: "Hàng rào", math: "60+1{,}5\\times40=120", say: "Trên 120 giây bị đánh dấu để xem, chưa tự động xóa." },
      { label: "Quyết định", math: "86.400", say: "Một ngày là tab quên đóng. Gắn cờ và loại khỏi mean thời gian đọc, nhưng đừng xóa cả phiên nếu các cột khác còn dùng." },
    ],
    pitfalls: [
      { left: "Thiếu", right: "Số 0", note: "0 là đo được và bằng không. Trống là không đo. Điền 0 vào form chưa ghi sẽ tạo ra một kênh giả thật rẻ hoặc thật đắt." },
      { left: "Outlier", right: "Điểm xấu", note: "Điểm xa có thể là sự cố đo, cũng có thể là khách hàng thật. Xem trước khi xóa." },
    ],
    insight: "Mỗi hàng bị xóa cần một câu lý do. «Cho sạch» không phải lý do.",
    sources: [
      { claim: "Hàng rào 1,5 IQR là quy ước phổ biến để đánh dấu điểm xa trên box plot, theo cách Tukey.", source: "Wikipedia, Interquartile range", url: "https://en.wikipedia.org/wiki/Interquartile_range" },
      { claim: "EDA là cách dùng đồ thị và tóm tắt để hiểu dữ liệu trước mô hình, theo truyền thống Tukey.", source: "Wikipedia, Exploratory data analysis", url: "https://en.wikipedia.org/wiki/Exploratory_data_analysis" },
      illus("Dòng 86.400 giây là ví dụ minh họa."),
    ],
    glossary: [
      { term: "IQR", en: "interquartile range", def: "Q3 trừ Q1, bề rộng của nửa giữa dữ liệu." },
      { term: "EDA", en: "exploratory data analysis", def: "Bước nhìn, làm sạch và mô tả dữ liệu trước khi mô hình hóa." },
    ],
  }),

  T({
    id: "sampling",
    keys: [/sampling method/i, /uses of sampling/i, /market research/i, /pilot testing/i, /quality control/i],
    title: "Chọn mẫu",
    situation:
      "Không gọi được mọi khách của một chuỗi 40 cửa hàng để hỏi về chiến dịch Tết. Ngân sách nghiên cứu đủ cho 600 cuộc gọi. Ví dụ minh họa.",
    problem:
      "Gọi 600 người đầu tiên trong file CRM thì đó là người mới phát sinh giao dịch, không phải chân dung cả tệp. Kết luận sẽ nghiêng về nhóm dễ gọi.",
    why:
      "Các cách chọn mẫu tồn tại để độ lệch do cách chọn không nuốt mất hiệu bạn đang muốn đo.",
    plain:
      "Mẫu xác suất nghĩa là mỗi đơn vị có một xác suất được chọn mà bạn nói được. Mẫu phi xác suất tiện hơn và khó suy ra tổng thể hơn.",
    precise:
      "Ngẫu nhiên đơn: mỗi tập cùng cỡ cùng cơ hội. Phân tầng: chia nhóm rồi bốc trong nhóm, hợp khi CPA khác nhau nhiều giữa các tầng. Chùm: bốc cả cụm, rẻ hơn khi cụm là cửa hàng. Thuận tiện: ai đang có mặt. Chỉ mẫu xác suất đi với sai số chuẩn theo kiểu sách giáo khoa một cách thẳng.",
    insight: "Cách bốc mẫu là một phần của kết luận. Giấu cách bốc là giấu độ tin.",
    sources: [
      { claim: "Mẫu xác suất và các biến thể phân tầng, chùm là phân loại chuẩn trong thống kê khảo sát.", source: "Wikipedia, Sampling (statistics)", url: "https://en.wikipedia.org/wiki/Sampling_(statistics)" },
      illus("600 cuộc gọi là ví dụ minh họa."),
    ],
  }),
];
