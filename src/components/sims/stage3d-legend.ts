/** Chú giải màu và trục cho các cảnh 3D. Mỗi mục: [màu, tiếng Việt, tiếng Anh]. */
export type Swatch = "gold" | "cream" | "clay" | "rust" | "ink" | "axis";
export type LegendItem = [Swatch, string, string];

export const swatchColor: Record<Swatch, string> = {
  gold: "#f0c14a",
  cream: "#f4efe6",
  clay: "#c4623a",
  rust: "#b5461f",
  ink: "#3a332c",
  axis: "transparent",
};


export const legends: Record<string, LegendItem[]> = {
  field: [
    ["cream", "Mỗi chấm là một phiên truy cập trong cả nguồn", "Each dot is one visit in the whole source"],
    ["gold", "Chấm vàng là loại phiên đang đếm", "Gold dots are the kind being counted"],
    ["gold", "Khung vàng là một lần lấy mẫu (một tuần)", "The gold frame is one sample (one week)"],
    ["axis", "Số % dưới khung là tỷ lệ trong riêng khung đó", "The % under the frame is the rate inside that frame only"],
  ],
  seats: [
    ["gold", "Ba quả cầu A, B, C là ba người", "The three balls A, B, C are three people"],
    ["ink", "Ba bệ đen là ba ghế. Đổi thứ tự là một cách xếp mới", "The three dark slabs are three seats. A new order is a new arrangement"],
  ],
  group: [["gold", "Ba quả cầu là một nhóm. Xoay cả cụm thì vẫn là nhóm đó", "The three balls are one group. Spinning it is still the same group"]],
  fraction: [
    ["gold", "Hai viên vàng là trường hợp thuận (2)", "The two gold balls are the favorable cases (2)"],
    ["cream", "Tám viên kem là các trường hợp còn lại. Tổng là 10", "The eight cream balls are the rest. Ten in all"],
  ],
  meet: [
    ["gold", "Hai quả cầu bên trái có thể xảy ra cùng lúc, nên có vùng chung", "The two left balls can happen together, so they share a zone"],
    ["cream", "Hai quả cầu bên phải loại trừ nhau, không bao giờ gặp", "The two right balls exclude each other and never meet"],
  ],
  plus: [
    ["gold", "Hai vòng tròn là hai sự kiện", "The two circles are two events"],
    ["axis", "Phần hai vòng chồng nhau bị đếm hai lần, nên phải trừ một lần", "Where the circles overlap is counted twice, so subtract it once"],
  ],
  times: [
    ["gold", "Hai cột là hai cửa mà viên bi phải đi qua", "The two posts are two doors the ball must pass"],
    ["cream", "Viên bi đi qua cả hai thì nhân hai xác suất", "A ball through both doors means multiplying the two probabilities"],
  ],
  flip: [["axis", "Chữ rồi số: mỗi việc phải được gán một số (có = 1, không = 0) thì mới tính trung bình được", "Words then numbers: each event gets a number (yes = 1, no = 0) so you can average it"]],
  cols: [
    ["axis", "Ngang: các giá trị có thể xảy ra. Cao: xác suất của giá trị đó", "Across: the possible values. Up: the probability of that value"],
    ["gold", "Cột vàng là giá trị thường gặp nhất", "The gold bar is the most common value"],
  ],
  "cols-bin": [
    ["axis", "Ngang: số lần trúng (0, 1, 2...). Cao: xác suất của số lần đó", "Across: number of hits (0, 1, 2...). Up: probability of that count"],
    ["gold", "Cột vàng gần n × p, số lần trúng hay gặp nhất", "The gold bar sits near n × p, the most common hit count"],
  ],
  "cols-ghost": [
    ["axis", "Ngang: các giá trị có thể có. Cao: xác suất theo giả định", "Across: possible values. Up: probability under the assumption"],
    ["cream", "Cột mờ dần hiện ra: hình dựng từ giả định, trước khi có dữ liệu", "Fading bars: a shape built from assumptions, before any data"],
  ],
  "cols-cdf": [
    ["axis", "Ngang: giá trị. Cao: xác suất của từng giá trị", "Across: value. Up: probability of each value"],
    ["gold", "Khối vàng trượt phủ các cột bên trái. Cộng chúng ra xác suất «ít hơn»", "The gold slab slides over the left bars. Adding them gives the “less than” probability"],
  ],
  level: [
    ["axis", "Thanh ngang là thang xác suất từ 0 đến 1", "The bar is the probability scale from 0 to 1"],
    ["gold", "Kim vàng lúc đầu lắc, rồi đứng yên ở 0,25: mức khi thử nhiều lần", "The gold needle first wobbles, then settles at 0.25: the level over many tries"],
  ],
  bell: [
    ["axis", "Ngang: giá trị. Cao: mức hay gặp của giá trị đó", "Across: value. Up: how common that value is"],
    ["gold", "Vạch vàng giữa: trung bình. Hai vạch hai bên: cách tâm một độ lệch chuẩn", "Middle gold line: the mean. Side lines: one standard deviation from the center"],
  ],
  "bell-area": [
    ["axis", "Ngang: giá trị. Cao: mức hay gặp của giá trị đó", "Across: value. Up: how common that value is"],
    ["gold", "Khối vàng là một khoảng bạn hỏi. Thể tích của nó là xác suất", "The gold block is the range you ask about. Its size is the probability"],
  ],
  ruler: [
    ["axis", "Thước chung: -2, -1, 0, 1, 2 độ lệch chuẩn quanh trung bình", "One shared ruler: -2, -1, 0, 1, 2 standard deviations around the mean"],
    ["gold", "Vạch vàng là vạch thước. Giây và tiền được kéo về cùng thước rồi mới so", "Gold ticks are the ruler. Seconds and money are pulled onto it before comparing"],
  ],
  pile: [
    ["clay", "Cột nâu bên trái: từng phiên, rất lệch nhau", "Brown bars on the left: single sessions, very scattered"],
    ["cream", "Hạt kem bên phải: trung bình của mỗi mẫu, rơi dần thành ụ", "Cream beads on the right: the mean of each sample, piling up into a mound"],
    ["gold", "Vạch vàng: số thật. Mẫu lớn thì ụ khít vào đây", "Gold line: the true value. A large sample makes the mound hug it"],
  ],
  covers: [
    ["gold", "Vạch vàng đứng: số thật, thứ ta không biết", "The upright gold line: the true value we cannot see"],
    ["cream", "Mỗi thanh ngang là một khoảng tin cậy tính từ một mẫu", "Each horizontal bar is a confidence interval from one sample"],
    ["rust", "Thanh đỏ: khoảng trượt, không chạm số thật", "The red bar: an interval that misses the true value"],
  ],
  bias: [
    ["gold", "Viên vàng và viên kem là hai loại trong đám", "Gold and cream chips are two kinds in the pile"],
    ["axis", "Khay bên phải: chỉ nhặt vàng thì khay lệch, nhặt cả hai thì giống đám", "The tray on the right: only gold makes it biased, both makes it match the pile"],
  ],
  divide: [["axis", "Ba dòng: xác suất của cả hai, chia cho xác suất của điều đã biết, ra xác suất có điều kiện", "Three lines: probability of both, divided by the probability of what you know, gives the conditional probability"]],
  priorbar: [
    ["gold", "Thanh vàng là mức tin hiện tại (bắt đầu 20%)", "The gold bar is your current belief (starting at 20%)"],
    ["axis", "Tin mới làm thanh dài ra. Nó không nhảy thẳng lên 100%", "New news stretches the bar. It does not jump to 100%"],
  ],
  jobs: [
    ["gold", "Bên trái: đường dốc, đoán một con số", "Left: a sloping line, guessing a number"],
    ["axis", "Bên phải: chỉ có 1 hoặc 0, đoán có hay không", "Right: only 1 or 0, guessing yes or no"],
  ],
  line: [
    ["cream", "Mỗi chấm kem là một tuần thật", "Each cream dot is a real week"],
    ["gold", "Đường vàng là câu đoán của mô hình", "The gold line is the model's guess"],
    ["axis", "Ngang: chi tiêu quảng cáo. Dọc: số form", "Across: ad spend. Up: forms"],
  ],
  "line-resid": [
    ["cream", "Mỗi chấm kem là một tuần thật", "Each cream dot is a real week"],
    ["gold", "Đường vàng là câu đoán của mô hình", "The gold line is the model's guess"],
    ["clay", "Que nâu: phần đường đoán trượt (thật trừ đường)", "Brown stick: how far the guess missed (real minus line)"],
  ],
  "line-fit": [
    ["cream", "Mỗi chấm kem là một tuần thật", "Each cream dot is a real week"],
    ["gold", "Đường vàng được chọn để tổng bình phương các que nâu nhỏ nhất", "The gold line is chosen to make the squared brown sticks smallest"],
    ["clay", "Que nâu: phần đường trượt", "Brown stick: the miss"],
  ],
  r2: [
    ["gold", "Cột vàng cao: phần biến động mà đường giải thích được (70%)", "Tall gold bar: the share of variation the line explains (70%)"],
    ["cream", "Cột kem thấp: phần còn lại chưa giải thích", "Short cream bar: what is left unexplained"],
  ],
  band: [
    ["cream", "Mỗi chấm là phần trượt của một tuần quanh đường", "Each dot is how far one week sits from the line"],
    ["axis", "Dải phẳng: trượt đều, đọc kiểm định được. Hình kèn: trượt rộng dần, đừng tin kiểm định", "A flat band: even misses, safe to read the test. A funnel: misses widen, do not trust the test"],
  ],
  zero: [
    ["cream", "Vạch kem dọc: số 0, nghĩa là không có tác động", "The upright cream line: 0, meaning no effect"],
    ["gold", "Thanh vàng: khoảng tin cậy của độ dốc. Không chạm 0 nên khó nói «không tác động»", "Gold bar: the confidence interval of the slope. It misses 0, so “no effect” is hard to say"],
  ],
  bowl: [
    ["cream", "Các cột kem tạo thành cái bát: chi phí theo từng bộ hệ số", "The cream bars form a bowl: cost for each set of coefficients"],
    ["gold", "Viên vàng lăn xuống đáy bát: bộ hệ số đỡ tệ nhất", "The gold ball rolls to the bottom: the least-bad coefficients"],
  ],
  "bowl-fast": [
    ["cream", "Các cột kem tạo thành cái bát: chi phí theo từng bộ hệ số", "The cream bars form a bowl: cost for each set of coefficients"],
    ["gold", "Viên vàng nhảy quá xa mỗi bước nên vọt qua đáy và chi phí tăng", "The gold ball jumps too far each step, shoots past the bottom and the cost rises"],
  ],
  many: [
    ["gold", "Ba cột là ba thứ cùng thay đổi trong một tuần: chi tiêu, email, khuyến mãi", "Three bars are three things changing in the same week: spend, email, promo"],
    ["clay", "Cột email nâu để dễ phân biệt", "The email bar is brown to tell it apart"],
  ],
  held: [
    ["gold", "Cột vàng: chi tiêu, thứ đang nhích lên", "Gold bar: spend, the thing moving up"],
    ["ink", "Hai cột đen: email và khuyến mãi bị khóa, đứng yên", "Two dark bars: email and promo are locked, held still"],
  ],
  vif: [
    ["gold", "Hai cột vàng và nâu là hai kênh luôn tăng giảm cùng nhau", "The gold and brown bars are two channels that always rise and fall together"],
    ["axis", "Vì đi cùng nhau nên độ dốc từng kênh có thể đảo dấu dù kênh không có hại", "Because they move together, each slope can flip sign even if the channel is not harmful"],
  ],
  dummy: [
    ["gold", "Ô vàng: GDN, so với mốc", "Gold box: GDN, compared with the baseline"],
    ["clay", "Ô nâu: Facebook, so với mốc", "Brown box: Facebook, compared with the baseline"],
    ["ink", "Ô đen: TikTok là mốc, được bỏ ra để so", "Dark box: TikTok is the baseline, dropped as the reference"],
  ],
  pick: [
    ["cream", "Ba cột kem: biến giữ lại", "Three cream bars: variables to keep"],
    ["clay", "Cột nâu nhấp nháy: biến nhiễu, không đổi quyết định nên bỏ", "The blinking brown bar: a noise variable that changes no decision, so drop it"],
  ],
  escape: [
    ["cream", "Hai thanh kem ngang là 0 và 1, hai biên của xác suất", "The two cream bars are 0 and 1, the limits of a probability"],
    ["gold", "Đường vàng thẳng chui ra ngoài hai biên", "The straight gold line leaves both limits"],
    ["rust", "Chấm đỏ: chỗ đường ra ngoài, xác suất không thể thế", "Red dots: where the line escapes, which a probability cannot do"],
  ],
  sig: [
    ["axis", "Ngang: điểm tổng hợp của mô hình. Dọc: xác suất, từ 0 đến 1", "Across: the model's combined score. Up: probability from 0 to 1"],
    ["cream", "Đường chữ S: xác suất không bao giờ ra ngoài 0 và 1", "The S curve: probability never leaves 0 and 1"],
    ["gold", "Chấm vàng: một khách cụ thể với xác suất 0,35", "Gold dot: one specific customer at probability 0.35"],
  ],
  odds: [["gold", "Thanh vàng dài ra gấp 1,04 lần mỗi ngày thêm: odds nhân lên, không cộng điểm phần trăm", "The gold bar stretches ×1.04 per extra day: odds multiply, they do not add percentage points"]],
  cm: [
    ["gold", "Ô vàng: nói rời và thật sự rời (đúng)", "Gold: said leave and truly left (right)"],
    ["cream", "Ô kem: nói rời nhưng ở lại (gọi nhầm), và nói ở lại và ở lại (ổn)", "Cream: said leave but stayed (false alarm), and said stay and stayed (fine)"],
    ["rust", "Ô đỏ: thật sự rời nhưng bị bỏ sót, thứ đắt nhất", "Red: truly left but missed, the costly one"],
  ],
  pr: [["axis", "Hai trạng thái: danh sách sạch (ít người nhưng đúng) và lưới rộng (bắt thêm người rời, kèm gọi nhầm)", "Two states: a clean list (few people, mostly right) and a wide net (catches more leavers, plus false alarms)"]],
  roc: [
    ["axis", "Ngang: tỷ lệ báo nhầm. Dọc: tỷ lệ bắt đúng", "Across: false alarm rate. Up: true catch rate"],
    ["cream", "Đường chấm kem: mọi ngưỡng có thể chọn", "The cream dots: every threshold you could pick"],
    ["gold", "Chấm vàng di chuyển: một ngưỡng cụ thể", "The moving gold dot: one particular threshold"],
  ],
  rests: [
    ["axis", "Ba đường chữ S A, B, C: mỗi nhãn một đường xác suất riêng", "Three S curves A, B, C: one probability curve per label"],
    ["gold", "Đường vàng ở giữa là nhãn B, nổi bật để so với hai nhãn kia", "The gold middle curve is label B, picked out to compare with the other two"],
  ],
  split: [
    ["gold", "Vạch vàng là một câu hỏi đúng/sai chia người làm hai phía", "The gold line is one yes/no question that splits people into two sides"],
    ["clay", "Chấm nâu: nhóm ở bên trái. Chấm vàng: nhóm bên phải", "Brown dots: the left group. Gold dots: the right group"],
  ],
  gini: [
    ["axis", "Trái: nhóm trước khi cắt, lẫn hai màu (độ lẫn 0,48). Phải: sau khi cắt, ít lẫn hơn", "Left: the group before cutting, both colors mixed (impurity 0.48). Right: after cutting, less mixed"],
    ["gold", "Hai màu vàng và nâu là hai kết cục khác nhau", "Gold and brown are the two different outcomes"],
  ],
  deep: [
    ["axis", "Cây từ trên xuống: mỗi ô là một câu hỏi, mỗi nhánh vàng là một câu trả lời", "The tree from the top: each box is a question, each gold branch an answer"],
    ["axis", "Cây sâu tách tới từng người: học thuộc dữ liệu cũ, không còn là luật dùng lại", "A deep tree cuts down to one person: memorizing old data, not a reusable rule"],
  ],
  raw: [["cream", "Các chấm kem không có màu hay nhãn: dữ liệu chưa có cột câu trả lời", "Dots with no color or label: data with no answer column"]],
  km: [
    ["gold", "Quả to vàng và nâu là hai tâm cụm", "The two big balls, gold and brown, are cluster centers"],
    ["cream", "Mỗi chấm nhỏ đổi sang màu của tâm gần nhất, rồi tâm dời vào giữa các chấm của nó", "Each small dot takes the color of its nearest center, then the center moves to the middle of its dots"],
  ],
  elbow: [
    ["axis", "Ngang: số nhóm K từ ít tới nhiều. Cao: độ lỏng lẻo trong nhóm", "Across: number of groups K, few to many. Up: looseness inside groups"],
    ["gold", "Cột vàng: chỗ gập, nơi cột bắt đầu bẹt", "Gold bar: the bend, where bars start to flatten"],
  ],
  merge: [["axis", "Các chấm dưới cùng là từng điểm dữ liệu. Chấm gần nhau được dán trước, đi lên như một cây phân cấp", "The bottom dots are single data points. Close ones glue first and rise like a hierarchy tree"]],
  tok: [
    ["axis", "Bốn chữ là bốn mảnh sau khi cắt câu", "Four words are four pieces after cutting the sentence"],
    ["axis", "Từ hư («và», «của») mờ đi, chữ có nghĩa được giữ lại để đếm", "Filler words fade, meaningful words stay to be counted"],
  ],
  bow: [
    ["gold", "Cột vàng: số lần mỗi chữ xuất hiện", "Gold bar: how often each word appears"],
    ["axis", "Chữ đổi chỗ nhưng độ cao cột không đổi: thứ tự câu đã mất", "Words swap places but bar heights stay: sentence order is lost"],
  ],
  tfidf: [
    ["ink", "Cột đen thấp: «spa» có mặt ở mọi bài nên bị hạ điểm", "Short dark bar: “spa” appears in every review so it is scored down"],
    ["gold", "Cột vàng cao: «chờ» hiếm nên được giữ điểm cao", "Tall gold bar: “waited” is rare so it keeps a high score"],
  ],
  edit: [["axis", "Bốn chữ cái S P A A, rồi chữ A thứ hai rơi: một lần sửa đưa «spaa» về «spa»", "Four letters S P A A, then the second A drops: one edit turns “spaa” into “spa”"]],
  steps: [["axis", "Bốn bước xếp dọc, bước đang nói tới nhích ra: quyết định, giả thuyết, dữ liệu rồi mới đến mô hình", "Four steps stacked, the current one slides out: decision, hypothesis, data, and only then the model"]],
  target: [
    ["axis", "Trái: tỷ lệ form hiện tại. Phải: mục tiêu", "Left: the current form rate. Right: the goal"],
    ["axis", "Dòng dưới là ràng buộc giá phải giữ", "The bottom line is the cost limit to respect"],
  ],

  // Cảnh phụ. Mỗi dòng nói khối nào nghĩa là gì, để đọc một lần là hiểu cả hai phía.
  "x-rule": [
    ["cream", "Thanh kem nằm ngang là thước của thống kê kiểm định.", "The cream bar is the ruler the test statistic runs on."],
    ["gold", "Vạch vàng và viên vàng. Nhãn 5% là mức viết trước, ví dụ minh họa. Viên vượt vạch thì bác câu «không khác». Chưa vượt thì câu đó còn đứng, không phải đã được chứng minh là đúng.", "The gold line and the gold ball. The 5% tag is the level written in advance, an example. Past the line, reject “no difference”. Short of it, that sentence still stands. It is not proved true."],
  ],
  "x-peek": [
    ["cream", "Thanh kem vẫn là thước. Luật đúng thì vạch đứng yên.", "The cream bar is still the ruler. Under a real rule the line stays put."],
    ["gold", "Vạch vàng bị kéo sau khi đã nhìn viên. Viên vừa rơi vào vùng bác vì vạch dời tới nó, không phải vì luật viết trước.", "The gold line is dragged after the ball has been seen. The ball falls into the reject zone because the line moved to it, not because of a rule written first."],
  ],
  "x-h0": [
    ["gold", "Thẻ vàng bên trái: câu «không khác». Viết câu này trước khi nhìn số. p được tính như thể câu này đúng. p không phải xác suất câu này đúng.", "Left gold card: the “no difference” sentence. Write it before looking at the numbers. p is computed as if this sentence is true. p is not the probability that it is true."],
    ["clay", "Thẻ nâu bên phải: câu «có khác», điều bạn đang nghi. Kiểm định không chứng minh câu này.", "Right brown card: “there is a difference”, what you suspect. The test does not prove this sentence."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-rare": [
    ["cream", "Đám chấm kem là những mẫu sẽ thấy nếu câu «không khác» đúng.", "The cream dots are samples you would see if “no difference” were true."],
    ["gold", "Chấm vàng là mẫu bạn đang cầm. p là độ hiếm của chấm đó trong đám kem, không phải xác suất câu nhàm đúng.", "The gold dot is the sample you hold. p is how rare that dot is among the cream ones, not the probability the dull story is true."],
  ],
  "x-err": [
    ["gold", "Thẻ vàng bên trái: báo động giả. α là tỷ lệ báo động giả khi câu «không khác» đúng. Không phải xác suất bạn đã quyết sai.", "Left gold card: a false alarm. α is the false-alarm rate when “no difference” is true. Not the probability that your decision was wrong."],
    ["clay", "Thẻ nâu bên phải: bỏ sót: câu nhàm sai mà bạn không bác. 1 − α không phải sức mạnh của cuộc kiểm.", "Right brown card: a miss: a false dull story you failed to reject. 1 − α is not the power of the test."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-t": [
    ["cream", "Hàng chấm kem phía trên: độ rộng của nguồn đã biết sẵn.", "Upper cream row: the source’s width is already known."],
    ["gold", "Hàng chấm vàng phía dưới: độ rộng lấy từ chính mẫu, nên đuôi nặng hơn. Vạch bác phải đứng xa hơn.", "Lower gold row: the width comes from the sample itself, so the tails are heavier. The reject line has to stand farther out."],
  ],
  "x-means": [
    ["cream", "Đám kem là kênh GDN, một mức, ví dụ minh họa.", "The cream cloud is the GDN channel, one level, an example."],
    ["gold", "Đám vàng là Facebook, mức kia. Câu hỏi là khoảng cách này có hiếm không nếu hai mức thật ra bằng nhau.", "The gold cloud is Facebook, the other level. The question is whether this gap is rare if the two levels are really equal."],
  ],
  "x-props": [
    ["cream", "Cột kem: tỷ lệ 2,0%, ví dụ minh họa.", "Cream bar: a rate of 2.0%, an example."],
    ["gold", "Cột vàng: tỷ lệ 2,6%. z ví dụ khoảng 1,3, chưa tới vạch 1,96 của mức 5% hai phía. Nhìn khác chưa đủ để bác.", "Gold bar: a rate of 2.6%. Example z is about 1.3, short of the 1.96 line for a 5% two-sided test. Looking different is not enough to reject."],
  ],
  "x-chi": [
    ["gold", "Ô vàng: 30 người mua, ví dụ minh họa. Nếu kênh và việc mua không liên quan, ô này kỳ vọng khoảng 20, không phải 30.", "Gold cell: 30 buyers, an example. If channel and purchase were unrelated, this cell would be about 20, not 30."],
    ["cream", "Hai ô kem: 70 và 90 người không mua.", "The two cream cells: 70 and 90 people who did not buy."],
    ["clay", "Ô nâu: 10 người mua. Một số χ² ví dụ cho cả bảng là 12,5. Đừng kiểm từng ô rồi chọn ô đẹp.", "Brown cell: 10 buyers. An example χ² for the whole table is 12.5. Do not test each cell and keep the pretty one."],
  ],
  "x-anova": [
    ["cream", "Hai đám kem: mức 11 và mức 12, ví dụ minh họa. Hai mức này gần nhau.", "Two cream clouds: levels 11 and 12, an example. Those two sit close."],
    ["gold", "Đám vàng: mức 20, đứng xa. F lớn vì 20 xa, không phải vì 11 khác 12.", "Gold cloud: level 20, far away. F is large because 20 is far, not because 11 differs from 12."],
  ],
  "x-ask": [
    ["cream", "Các chấm kem là dữ liệu. Chưa có câu hỏi thì chúng chỉ là một đám chấm.", "The cream dots are data. Without a question they are only a pile of dots."],
    ["axis", "Nhãn «tỷ lệ form?» là câu hỏi, phải đặt trước biểu đồ. Biểu đồ đẹp không phải là câu hỏi.", "The label “form rate?” is the question, and it comes before the chart. A pretty chart is not a question."],
  ],
  "x-whose": [
    ["gold", "Thẻ vàng bên trái: bảng của mình. Bạn biết ai được ghi, nên câu kết luận đi được xa hơn.", "Left gold card: our own table. You know who was recorded, so the claim can go further."],
    ["clay", "Thẻ nâu bên phải: bảng công khai. Bạn không chọn ai vào file. Đừng nói như thể đó là khách của bạn.", "Right brown card: a public file. You did not choose who is in it. Do not talk as if they were your customers."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-types": [
    ["gold", "Cột vàng: cột số. Chỉ cột này mới có trung bình.", "Gold bar: a number column. Only this kind has a mean."],
    ["clay", "Cột nâu: cột chữ, như tên kênh. Trung bình một cái tên không có nghĩa.", "Brown bar: a text column, such as a channel name. The average of a name means nothing."],
    ["cream", "Cột kem: cột ngày. Ngày không phải một số cứ lớn dần theo cách bạn nghĩ.", "Cream bar: a date column. A date is not a number that simply gets bigger."],
  ],
  "x-dup": [
    ["cream", "Ô kem là dòng thứ nhất của một người.", "The cream box is the first row for one person."],
    ["gold", "Ô vàng là dòng thứ hai của cùng người đó. Khi ô vàng tắt, hai dòng gộp lại và SUM không còn bị nhân đôi.", "The gold box is a second row for the same person. When the gold box disappears, the two rows collapse and SUM is no longer doubled."],
  ],
  "x-hole": [
    ["gold", "Thẻ vàng bên trái: ô trống. Trống nghĩa là không biết. Để vậy và nói rõ.", "Left gold card: a blank cell. Blank means you do not know. Leave it and say so."],
    ["clay", "Thẻ nâu bên phải: điền số 0. Số 0 là một giá trị. Điền 0 khi không có lý do thì kéo trung bình xuống.", "Right brown card: filling with 0. Zero is a value. Filling 0 without a reason pulls the mean down."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-far": [
    ["cream", "Đám chấm kem là các điểm bình thường.", "The cream dots are the ordinary points."],
    ["gold", "Chấm vàng đứng xa. Có thể là gõ nhầm, cũng có thể là tuần lễ thật. Hàng rào chỉ đánh dấu, chưa xóa.", "The gold dot sits far away. It might be a typo, or a real festival week. A fence only flags it. It does not delete it."],
  ],
  "x-z": [
    ["gold", "Thẻ vàng bên trái: triệu và giây để cạnh nhau. Hai cột khác đơn vị. Cột to át cột nhỏ khi tính khoảng cách.", "Left gold card: millions and seconds side by side. Two columns, different units. The big one drowns the small one in a distance."],
    ["clay", "Thẻ nâu bên phải: cùng một thước. z đưa về tâm 0, độ rộng 1. Nó không tạo ra quan hệ, và không biến một cái đuôi thành hình chuông.", "Right brown card: one ruler. z puts them at center 0 and width 1. It does not create a relationship, and it does not turn a tail into a bell."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-bad": [
    ["axis", "Nhãn 200% không phải một điểm xa của một tỷ lệ. Đó là giá trị không hợp lệ, ví dụ minh họa.", "The 200% label is not a far point of a rate. It is an impossible value, an example."],
    ["axis", "Nhãn 1,1% là một tỷ lệ hợp lệ. Lọc là một quyết định, phải viết lại được.", "The 1.1% label is a possible rate. A filter is a decision you must be able to write down."],
  ],
  "x-cat": [
    ["gold", "Cột vàng: tên GDN. Độ cao là ví dụ minh họa, không phải thứ hạng.", "Gold bar: the name GDN. The height is an example, not a rank."],
    ["cream", "Cột kem: tên FB.", "Cream bar: the name FB."],
    ["clay", "Cột nâu: tên TikTok. Ba tên không có thứ tự. Đếm và lấy phần. Đừng kẻ một đường nối chúng.", "Brown bar: the name TikTok. Three names have no order. Count them and take shares. Do not draw a line through them."],
  ],
  "x-ord": [
    ["cream", "Các cột kem là mức sao 1, 2, 4 và 5. Chúng có thứ tự, không xếp theo bảng chữ.", "The cream bars are star levels 1, 2, 4 and 5. They have an order. Do not sort them alphabetically."],
    ["gold", "Cột vàng là mức đang được chỉ (3 sao), không phải mức tốt nhất. Đừng lấy trung bình như thể các sao cách đều là chuyện chắc.", "The gold bar is the level being pointed at (3 stars), not the best level. Do not average them as if equal spacing were a fact."],
  ],
  "x-num": [
    ["cream", "Các chấm kem là phần đông của dãy, nằm thấp.", "The cream dots are the bulk of the list, sitting low."],
    ["gold", "Chấm vàng là một điểm rất cao. Nó kéo trung bình lên. Trung vị vẫn ở giữa dãy. Khi hai số cách nhau, kể về cái đuôi.", "The gold dot is one very high point. It pulls the mean up. The median stays in the middle of the list. When the two numbers disagree, talk about the tail."],
  ],
  "x-scat": [
    ["cream", "Mỗi chấm kem là một cặp số.", "Each cream dot is one pair of numbers."],
    ["gold", "Đường vàng là độ đi cùng nhau. r ví dụ 0,6. r = 0 không có nghĩa là không có hình. Một hình chữ U vẫn có r gần 0.", "The gold line is how they move together. An example r is 0.6. r = 0 does not mean there is no shape. A U can still have r near 0."],
  ],
  "x-cause": [
    ["gold", "Cột vàng: số form, ví dụ minh họa.", "Gold bar: forms, an example."],
    ["cream", "Cột kem: kem. Form và kem có thể cùng tăng.", "Cream bar: ice cream. Forms and ice cream can rise together."],
    ["clay", "Cột nâu cao hơn: mùa lễ, thứ có thể kéo cả hai. r không phải nút nhân quả.", "The taller brown bar: a festival, which can pull both. r is not a causal switch."],
  ],
  "x-group": [
    ["cream", "Đám kem: nhóm A.", "Cream cloud: group A."],
    ["gold", "Đám vàng: nhóm B.", "Gold cloud: group B."],
    ["clay", "Đám nâu: nhóm C. Đây là một số và một cột chữ. So từng nhóm. Đừng tính một r cho tên nhóm.", "Brown cloud: group C. This is a number and a text column. Compare the groups. Do not compute one r for the group names."],
  ],
  "x-denom": [
    ["gold", "Thẻ vàng bên trái: 30% của GDN, ví dụ minh họa: 30 người mua trên 100 dòng GDN. Mẫu số là GDN.", "Left gold card: 30% of GDN, an example: 30 buyers out of 100 GDN rows. The denominator is GDN."],
    ["clay", "Thẻ nâu bên phải: 75% của người mua: 30 trên 40 người mua. Mẫu số là người mua. Hai câu khác nhau.", "Right brown card: 75% of buyers: 30 out of 40 buyers. The denominator is the buyers. Those are different sentences."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-flip": [
    ["gold", "Cột vàng hàng trên cao hơn cột kem: bản gộp trông một bên thắng.", "On the top row the gold bar is taller than the cream bar: pooled, one side looks ahead."],
    ["cream", "Cột kem hàng trên là phía kia trong bản gộp.", "The cream bar on the top row is the other side of the pooled picture."],
    ["axis", "Hàng dưới tách khách mới và khách cũ. Lúc đó phía kia không còn thua. Bản gộp nói ngược vì một bên toàn khách cũ.", "The bottom row splits new and returning customers. Then the other side is not behind. The pooled picture says the opposite because one side is mostly returning customers."],
  ],
  "x-wh": [
    ["gold", "Thẻ vàng bên trái: bảng đang ghi đơn hôm nay. Đừng kể chuyện cả năm từ bảng này.", "Left gold card: the table taking today’s orders. Do not tell a year-long story from this table."],
    ["clay", "Thẻ nâu bên phải: kho 18 tháng, giữ lịch sử để đọc. Đơn mới vẫn ghi ở bảng kia.", "Right brown card: an 18-month warehouse, kept for reading. New orders still land in the other table."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-star": [
    ["gold", "Ô vàng ở giữa là một sự kiện, một hạt đúng.", "The gold box in the middle is one event, one grain."],
    ["cream", "Các ô kem quanh là tên: kênh, ngày, cửa. Đừng để một dòng vừa là một click vừa là một ngày.", "The cream boxes around it are names: channel, date, store. Do not let one row be both a click and a day."],
  ],
  "x-key": [
    ["axis", "Nhãn «form» trỏ sang nhãn «chiến dịch có thật». Khi chiến dịch đứng cạnh, dòng đang trỏ đúng chỗ.", "The “form” label points at “a real campaign”. When the campaign sits beside it, the row points at something that exists."],
    ["axis", "Khi nhãn chiến dịch trượt ra xa, form đang trỏ vào một mã không có. Khóa ngoại phải chặn dòng mồ côi đó.", "When the campaign label slides away, the form points at an id that is not there. A foreign key should block that orphan row."],
  ],
  "x-ddl": [
    ["gold", "Thẻ vàng bên trái: thêm một cột. DDL đổi khung bảng: CREATE, ALTER, DROP.", "Left gold card: adding a column. DDL changes the table’s shape: CREATE, ALTER, DROP."],
    ["clay", "Thẻ nâu bên phải: sửa một dòng. DML đổi dòng: INSERT, UPDATE, DELETE. Không phải cùng một việc.", "Right brown card: changing a row. DML changes rows: INSERT, UPDATE, DELETE. Not the same job."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-run": [
    ["axis", "Nhãn đang phóng to là bước máy đang chạy.", "The label that grows is the step the engine is on."],
    ["axis", "Thứ tự thật là FROM, WHERE, GROUP, HAVING, SELECT, ORDER. Máy không bắt đầu ở chữ SELECT.", "The real order is FROM, WHERE, GROUP, HAVING, SELECT, ORDER. The engine does not start at the word SELECT."],
  ],
  "x-having": [
    ["gold", "Thẻ vàng bên trái: WHERE lọc dòng, chạy trước khi cộng. Nó không thấy SUM.", "Left gold card: WHERE filters rows, and it runs before the sum. It cannot see SUM."],
    ["clay", "Thẻ nâu bên phải: HAVING lọc nhóm, thấy tổng của nhóm. Ví dụ: TikTok dưới 15 form thì loại cả nhóm đó.", "Right brown card: HAVING filters groups, and it sees the group’s total. Example: drop TikTok if its forms are under 15."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-count": [
    ["gold", "Thẻ vàng bên trái: COUNT(*) = 4, ví dụ minh họa. Bốn dòng, một ô form trống. COUNT(*) đếm dòng.", "Left gold card: COUNT(*) = 4, an example. Four rows, one blank form cell. COUNT(*) counts rows."],
    ["clay", "Thẻ nâu bên phải: COUNT(form) = 3. Nó bỏ ô trống. SUM cũng bỏ trống, không coi trống là 0.", "Right brown card: COUNT(form) = 3. It skips the blank. SUM skips blanks too. It does not treat a blank as 0."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-join": [
    ["axis", "Nhãn «3 form» và «2 dòng giá» là hai bảng, ví dụ minh họa.", "The labels “3 forms” and “2 price rows” are the two tables, an example."],
    ["axis", "Nhãn «6 dòng» là kết quả khi khóa không duy nhất: 3 nhân 2. Đếm trước và sau. Inner bỏ dòng không khớp.", "The label “6 rows” is what you get when the key is not unique: 3 times 2. Count before and after. An inner join drops rows that do not match."],
  ],
  "x-left": [
    ["gold", "Thẻ vàng bên trái: cửa không có đơn. Left join vẫn giữ cửa đó. Bên đơn để trống.", "Left gold card: a store with no orders. A left join still keeps that store. The order side is blank."],
    ["clay", "Thẻ nâu bên phải: null, không phải 0. Trống không phải doanh thu 0. WHERE bên phải sẽ biến left thành inner.", "Right brown card: null, not 0. Blank is not revenue of 0. A WHERE on the right side turns the left join into an inner join."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-union": [
    ["gold", "Thẻ vàng bên trái: UNION bỏ trùng. Xếp dọc hai bảng cùng cột. Hai dòng giống hệt thì chỉ còn một.", "Left gold card: UNION drops copies. Stack two tables with the same columns. Two identical rows become one."],
    ["clay", "Thẻ nâu bên phải: UNION ALL giữ cả hai. Dùng khi trùng vẫn là hai sự kiện.", "Right brown card: UNION ALL keeps both. Use it when a copy is still two events."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-win": [
    ["gold", "Thẻ vàng bên trái: GROUP BY còn 3 dòng, ví dụ. Cộng theo kênh thì mất từng tuần.", "Left gold card: GROUP BY leaves 3 rows, an example. Summing by channel loses the weeks."],
    ["clay", "Thẻ nâu bên phải: cửa sổ còn từng tuần. Hạng hoặc tổng chạy được thêm vào mà vẫn giữ từng dòng.", "Right brown card: a window keeps each week. A rank or a running total is added and every row stays."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-rank": [
    ["gold", "Thẻ vàng bên trái: RANK 1, 1, 3. Hai tuần hòa hạng 1 thì hạng kế tiếp nhảy xuống 3.", "Left gold card: RANK 1, 1, 3. Two weeks tied for 1 means the next rank skips to 3."],
    ["clay", "Thẻ nâu bên phải: DENSE 1, 1, 2. DENSE_RANK không nhảy. ROW_NUMBER thì phá hòa bằng cách tùy ý: 1 rồi 2 rồi 3.", "Right brown card: DENSE 1, 1, 2. DENSE_RANK does not skip. ROW_NUMBER breaks the tie arbitrarily: 1 then 2 then 3."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-part": [
    ["gold", "Hai cột vàng đều ghi hạng 1. Mỗi kênh đếm lại từ 1.", "Both gold bars say rank 1. Each channel starts again at 1."],
    ["cream", "Cột kem là hạng 2 của kênh đó. Hạng 1 của TikTok không phải hạng 1 của cả bảng.", "The cream bar is rank 2 inside that channel. TikTok’s 1 is not number 1 of the whole table."],
  ],
  "x-frame": [
    ["cream", "Cột kem nằm ngoài khung, không được cộng vào.", "Cream bars sit outside the frame and are not included."],
    ["gold", "Cột vàng là khung đang trượt, ví dụ 3 dòng quanh dòng này. Không phải cả kênh. Thiếu tuần thì «3 dòng» không phải «3 tuần lịch».", "Gold bars are the sliding frame, for example 3 rows around this one. Not the whole channel. If a week is missing, “3 rows” is not “3 calendar weeks”."],
  ],
  "x-lag": [
    ["axis", "Nhãn «hôm qua 32» là dòng đứng ngay trước, ví dụ minh họa.", "The label “yesterday 32” is the one previous row, an example."],
    ["axis", "Nhãn «hôm nay 40» là dòng hiện tại. Chỉ đúng là hôm qua nếu bạn sắp theo ngày và không thiếu ngày.", "The label “today 40” is the current row. It is really yesterday only if you sorted by date and no date is missing."],
  ],
  "x-case": [
    ["cream", "Cột kem: bậc «thấp».", "Cream bar: the “low” bin."],
    ["gold", "Cột vàng: bậc «vừa».", "Gold bar: the “mid” bin."],
    ["clay", "Cột nâu: bậc «cao». CASE viết các bậc này ngay trong câu, để đọc lại được.", "Brown bar: the “high” bin. CASE writes these bins in the query so they stay readable."],
  ],
  "x-cte": [
    ["gold", "Thẻ vàng bên trái: đặt tên cho câu con. CTE cho một câu lồng có tên, dễ đọc. Đừng chắc máy chạy nó một lần.", "Left gold card: naming the inner query. A CTE gives a nested query a name, so it is easier to read. Do not assume the engine runs it once."],
    ["clay", "Thẻ nâu bên phải: view không phải bản sao. View lưu câu hỏi. Mỗi lần gọi là chạy lại, không phải bản backup của các dòng.", "Right brown card: a view is not a copy. A view stores the question. Each use runs it again. It is not a backup of the rows."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-idx": [
    ["gold", "Thẻ vàng bên trái: lật từng dòng. Không có chỉ mục thì máy đi qua cả bảng.", "Left gold card: scanning every row. With no index the engine walks the whole table."],
    ["clay", "Thẻ nâu bên phải: tra đúng mã. Chỉ mục là mục lục cho cột bạn hay lọc. Nó không sửa một câu sai, và ghi thêm thì chậm hơn.", "Right brown card: looking up the id. An index is a lookup list for a column you filter on. It does not fix a wrong question, and extra writes get slower."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-proj": [
    ["gold", "Thẻ vàng bên trái: tuần tới, cùng kiểu. Dự đoán là một dòng mới cùng kiểu với các dòng đã học, kèm độ trượt.", "Left gold card: next week, same kind. A prediction is a new row of the same kind as the rows you learned from, with a miss-size."],
    ["clay", "Thẻ nâu bên phải: gấp đôi ngân sách. Đẩy chi tiêu tới chỗ chưa thấy rồi đọc đường. Đó là giả định, không phải dự báo.", "Right brown card: doubling the budget. Push spend somewhere you have not seen, then read the line. That is a what-if, not a forecast."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-spec": [
    ["gold", "Thẻ vàng bên trái: bắt được người rời. Độ nhạy bằng người rời bị gọi chia cho mọi người rời. Cùng là recall.", "Left gold card: catching the leavers. Sensitivity is leavers you called divided by all leavers. That is recall."],
    ["clay", "Thẻ nâu bên phải: để yên người ở. Độ đặc hiệu bằng người ở mà bạn không gọi chia cho mọi người ở. Không phải accuracy.", "Right brown card: leaving stayers alone. Specificity is stayers you did not call divided by all stayers. Not accuracy."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-who": [
    ["gold", "Thẻ vàng bên trái: cả file. Xác suất học trên cả file thì chỉ nói về cả file.", "Left gold card: the whole file. A probability fit on the whole file talks only about the whole file."],
    ["clay", "Thẻ nâu bên phải: chỉ người nghe máy. Đừng gán số đó cho người không nghe.", "Right brown card: only people who picked up. Do not give that number to people who did not."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-drift": [
    ["cream", "Cột kem: tháng 3, ví dụ minh họa.", "Cream bar: March, an example."],
    ["gold", "Cột vàng: tháng 12, cao hơn. Cùng một mô hình, nhưng tỷ lệ và kênh đã đổi. AUC tháng 3 không phải giấy phép cho tháng 12.", "Gold bar: December, taller. Same model, but the rate and the channels moved. March’s AUC is not a permit for December."],
  ],
  "x-treeline": [
    ["gold", "Thẻ vàng bên trái: một đường thẳng, một độ dốc. Nó trượt nếu form nhảy cóc theo nhóm.", "Left gold card: one straight line, one slope. It misses if forms jump by group."],
    ["clay", "Thẻ nâu bên phải: bậc thang của một cây. Ngoài khoảng đã thấy, bậc cuối chỉ là trung bình của lá mép.", "Right brown card: the steps of a tree. Outside what it has seen, the last step is only the edge leaf’s average."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-imp": [
    ["gold", "Cột vàng: cột «ghé». Độ cao là phần làm nhóm sạch hơn khi cắt cột đó, ví dụ minh họa. Không phải «ghé gây ra form».", "Gold bar: the visits column. The height is how much splits on that column cleaned the groups, an example. Not “visits cause forms”."],
    ["cream", "Cột kem: cột chi.", "Cream bar: the spend column."],
    ["clay", "Cột nâu: tên thứ. Cột sao chép có thể cướp phần của cột kia.", "Brown bar: the weekday name. A copy column can steal the credit."],
  ],
  "x-leaf": [
    ["gold", "Hai thanh vàng là trung bình của hai lá. Không phải một độ dốc.", "The two gold slabs are the averages of two leaves. Not a slope."],
    ["axis", "Ra ngoài vết cắt cuối, bạn vẫn nhận số của lá mép.", "Past the last cut you still get the edge leaf’s number."],
  ],
  "x-kpp": [
    ["gold", "Thẻ vàng bên trái: hai tâm cùng một đám. Khởi động ngẫu nhiên có thể đặt hai tâm vào một đám, đám kia không có ai.", "Left gold card: two centers in one clump. A random start can drop two centers in one clump and leave the other clump empty."],
    ["clay", "Thẻ nâu bên phải: các tâm cách xa. K-means++ chọn tâm sau xa tâm trước. Vẫn nên chạy vài lần. Đó không phải bằng chứng k đúng.", "Right brown card: centers spread out. K-means++ picks the next center far from the ones it has. Still run a few starts. That is not proof that k is right."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-link": [
    ["gold", "Thẻ vàng bên trái: dính chỗ gần nhất. Single linkage lấy hai điểm gần nhất, dễ nối thành một sợi dài.", "Left gold card: gluing the nearest. Single linkage uses the closest pair and can chain into a long snake."],
    ["clay", "Thẻ nâu bên phải: dính chỗ xa nhất. Complete lấy hai điểm xa nhất, cụm chặt hơn. Average ở giữa. Không cái nào là đúng tuyệt đối.", "Right brown card: gluing the farthest. Complete uses the farthest pair, so clumps are tighter. Average sits in between. None of them is the truth."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-db": [
    ["gold", "Đám chấm vàng là vùng đặc, một cụm. Bạn chọn bán kính và số hàng xóm, không chọn k.", "The gold dots are a dense patch, one cluster. You pick a radius and a neighbor count, not k."],
    ["rust", "Chấm đỏ là điểm thưa, ghi «nhiễu». Chúng không bị ép vào cụm. Bán kính sai thì ra một đám, hoặc toàn nhiễu.", "The red dots are sparse points, marked “noise”. They are not forced into a cluster. A bad radius is one blob, or all noise."],
  ],
  "x-gmm": [
    ["cream", "Đám kem là một cụm hình bầu dục.", "The cream cloud is one blob-shaped cluster."],
    ["clay", "Đám nâu là cụm kia.", "The brown cloud is the other cluster."],
    ["gold", "Chấm giữa đổi vàng rồi nâu: nó thuộc một phần mỗi đám, không bị gán cứng. Đám hình vòng thì mô hình này kể sai.", "The middle dot flips between gold and brown: it belongs partly to each cloud, not as a hard label. A ring-shaped group is the wrong story for this model."],
  ],
  "x-kmode": [
    ["gold", "Cột vàng cao nhất: GDN, ví dụ minh họa. Mode là tên gặp nhiều nhất.", "Tallest gold bar: GDN, an example. The mode is the name that shows up most."],
    ["cream", "Cột kem: FB.", "Cream bar: FB."],
    ["clay", "Cột nâu: TikTok. Không có trung bình của một tên kênh. K-prototype mới trộn được cột số và cột chữ.", "Brown bar: TikTok. A channel name has no mean. K-prototype is what mixes a number column and a text column."],
  ],
  "x-stem": [
    ["gold", "Thẻ vàng bên trái: studies thành studi. Stem cắt đuôi, nhanh, và có thể thành một từ không có trong từ điển.", "Left gold card: studies becomes studi. A stem chops the ending. It is fast, and it can become a word that is not in the dictionary."],
    ["clay", "Thẻ nâu bên phải: studies thành study. Lemma đưa về từ từ điển. Cả hai đều vứt hình thái, và có thể dán hai nghĩa khác vào một chữ.", "Right brown card: studies becomes study. A lemma returns the dictionary word. Both throw the form away, and they can glue two meanings onto one token."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-pmi": [
    ["gold", "Cột vàng cao: «chờ lâu». Hai từ đi cùng nhiều hơn mức nếu chúng độc lập.", "Tall gold bar: “long wait”. The two words show up together more than if they were independent."],
    ["cream", "Cột kem thấp: «và spa». «và» đi với mọi thứ nên điểm thấp. Đây không phải ngữ pháp.", "Short cream bar: “and spa”. “And” goes with everything, so the score stays low. This is not grammar."],
  ],
  "x-git": [
    ["cream", "Các ô kem là ảnh cũ của file. Mỗi ô kèm một câu, không phải nút Save trong đầu bạn.", "The cream blocks are older snapshots of the files. Each one comes with a sentence, not a Save button that lives in your head."],
    ["gold", "Ô vàng là ảnh mới nhất trên nhánh «chính».", "The gold block is the newest snapshot on “main”."],
  ],
  "x-branch": [
    ["cream", "Các ô kem trên hàng dưới là nhánh «chính», đứng yên.", "The cream blocks on the lower row are “main”, and they stay put."],
    ["gold", "Ô vàng là ảnh mới nhất của nhánh chính, tới khi bạn nhập nhánh thử vào.", "The gold block is the newest snapshot on main, until you merge the try-line in."],
    ["clay", "Các ô nâu phía trên là nhánh «thử», đi riêng. Chúng hiện ra rồi ẩn, không đụng vào nhánh chính.", "The brown blocks above are the “try” line, off on its own. They appear and hide without touching main."],
  ],
  "x-vote": [
    ["gold", "Ô vàng là phiếu «có». Ví dụ minh họa: 4 trên 5.", "Gold boxes are yes votes. Example: 4 of 5."],
    ["cream", "Ô kem là phiếu «không». Kết quả là số đông, không phải cây nào cũng đúng. Rừng giảm nhảy, không sửa một họ mô hình vốn đã lệch.", "The cream box is the no vote. The result is the majority, not a claim that every tree is right. A forest calms the jump. It does not fix a family of models that was already biased."],
  ],
  "x-boot": [
    ["cream", "Năm chấm kem là năm dòng rút lại, có hoàn lại.", "The five cream dots are five rows drawn again, with replacement."],
    ["axis", "Chấm tụt xuống là dòng bị bỏ lượt này. Chấm nhô cao là dòng bị rút hai lần. Mỗi cây thấy một túi hơi khác.", "A dot that drops is a row left out this round. A dot that rises is a row drawn twice. Each tree sees a slightly different bag."],
  ],
  "x-rf": [
    ["gold", "Thẻ vàng bên trái: mọi cột đều được xét. Cây nào cũng cắt cột mạnh nhất, nên các cây giống hệt nhau.", "Left gold card: every column is offered. Every tree cuts the strongest column, so the trees are copies."],
    ["clay", "Thẻ nâu bên phải: chỉ vài cột ngẫu nhiên. Mỗi nhát cắt chỉ nhìn một nhóm cột rút ra. Các cây bớt giống nhau.", "Right brown card: only a few random columns. Each cut may look only at a random handful. The trees look less alike."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-imb": [
    ["cream", "Cột kem cao: ở lại 92, ví dụ minh họa.", "Tall cream bar: stay, 92, an example."],
    ["gold", "Cột vàng thấp: rời 8. Gọi không ai rời thì đúng 92% mà không giữ được ai. Accuracy không phải brief.", "Short gold bar: leave, 8. Call nobody a leaver and you are 92% right while keeping nobody. Accuracy is not the brief."],
  ],
  "x-weight": [
    ["gold", "Thẻ vàng bên trái: nhân đôi dòng hiếm. Nhân đôi không tạo khách mới. Làm trước khi chia tập thì cùng một người lọt cả hai phía. Đừng làm vậy.", "Left gold card: duplicating the rare rows. Duplicating does not create a new customer. Do it before the split and the same person lands on both sides. Do not do that."],
    ["clay", "Thẻ nâu bên phải: tăng giá của dòng hiếm. Trọng số đổi cái giá của một lần bỏ sót. Vẫn là những dòng cũ. Đổi ngưỡng thường là nút nên thử trước.", "Right brown card: raising the cost of a rare row. A class weight changes the cost of a miss. The rows are the old rows. Moving the threshold is usually the lever to try first."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-bv": [
    ["gold", "Thẻ vàng bên trái: đường thẳng trên một hình cong. Đó là lệch: họ mô hình không đủ hình. Cả tập học lẫn tập mới đều trượt.", "Left gold card: a straight line on a curve. That is bias: the family cannot make that shape. Both the training rows and new rows miss."],
    ["clay", "Thẻ nâu bên phải: khớp từng điểm nhiễu. Đó là nhảy: đổi mẫu là đổi đường. Tập học đẹp, tập mới xấu.", "Right brown card: a fit on each noisy point. That is variance: change the sample and the line changes. Training looks good. New rows look bad."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-ridge": [
    ["cream", "Hai cột kem là hai hệ số. Chúng co về 0, ít khi thành đúng 0.", "The two cream bars are two coefficients. They shrink toward 0 and rarely become exactly 0."],
    ["axis", "Phải đưa các cột về cùng một thước trước. Đây không phải xếp hạng nguyên nhân.", "Put the columns on one scale first. This is not a causal ranking."],
  ],
  "x-lasso": [
    ["gold", "Cột vàng ghi «còn»: hệ số được giữ.", "The gold bar marked “kept” is a coefficient that stays."],
    ["clay", "Cột nâu ghi «về 0»: có thể thành đúng 0. Số 0 phụ thuộc thước đo của cột, không có nghĩa cột đó vô dụng ngoài đời.", "The brown bar marked “to 0” can become exactly 0. The zero depends on the column’s scale. It does not mean the column is useless in the world."],
  ],
  "x-rmse": [
    ["cream", "Hai cột kem: mỗi lần trượt 2, ví dụ minh họa. MAE cộng đều các lần trượt.", "Two cream bars: a miss of 2 each, an example. MAE adds the misses evenly."],
    ["gold", "Cột vàng: trượt 10. RMSE bình phương rồi lấy căn, nên lần này bị phạt nặng. R² vẫn là phần phương sai, không phải phần tuần nằm trên đường.", "Gold bar: a miss of 10. RMSE squares then takes a root, so this miss is punished hard. R² is still a share of variance, not the share of weeks that sit on the line."],
  ],
  "x-log": [
    ["gold", "Thẻ vàng bên trái: một tuần rất to. Vài tuần chi tiêu gấp chục lần tuần khác. Trung bình bị tuần đó chiếm.", "Left gold card: one huge week. A few weeks of spend are tens of times the others. The mean is that week."],
    ["clay", "Thẻ nâu bên phải: log kéo đuôi lại. Log của 0 không có. Phải chọn log(1 + x) hoặc một luật khác, rồi nói lại đơn vị.", "Right brown card: log pulling the tail in. Log of 0 does not exist. Choose log(1 + x) or another rule, then translate the unit back."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-hot": [
    ["gold", "Cột vàng: GDN, một cột 0/1, ví dụ minh họa.", "Gold bar: GDN, one 0/1 column, an example."],
    ["cream", "Cột kem: FB, một cột 0/1.", "Cream bar: FB, one 0/1 column."],
    ["ink", "Cột đen: TikTok. Mô hình có hệ số chặn thì bỏ một cột, nếu không là bẫy biến giả. Cây thì có thể giữ cả ba.", "Dark bar: TikTok. A model with an intercept drops one column, or it is the dummy trap. A tree can keep all three."],
  ],
  "x-clock": [
    ["gold", "Thẻ vàng bên trái: một số tăng dần. Một mốc thời gian để nguyên chủ yếu nói «muộn hơn».", "Left gold card: one rising number. A raw timestamp mostly says “later”."],
    ["clay", "Thẻ nâu bên phải: thứ, giờ, tháng. Tách cái bạn định dùng. Chủ nhật và thứ hai không phải hai bậc của một đường thẳng.", "Right brown card: weekday, hour, month. Split out what you mean. Sunday and Monday are not two steps on a straight line."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-cv": [
    ["cream", "Các ô kem là phần đang dùng để học.", "The cream boxes are the part used for learning."],
    ["gold", "Ô vàng là miếng bị giấu lượt này. Điểm là trung bình các lần giấu. Chỉnh mô hình trên chính các lần đó thì điểm hơi đẹp hơn sự thật.", "The gold box is the slice hidden this round. The score is the average of those hides. Tune on those same rounds and the score is a bit prettier than the truth."],
  ],
  "x-grid": [
    ["gold", "Thẻ vàng bên trái: mọi ô bạn liệt kê. Lưới thử hết tổ hợp bạn viết. Độ sâu bạn không viết thì không được thử.", "Left gold card: every cell you listed. A grid tries every combination you wrote down. A depth you left out is never tried."],
    ["clay", "Thẻ nâu bên phải: rút vài ô trong khoảng. Đỡ tốn khi nhiều nút vô hại. Vẫn chỉ trong khoảng bạn đặt.", "Right brown card: drawing a few cells in the range. It wastes less when many knobs do nothing. It still stays inside the ranges you set."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-order": [
    ["cream", "Mọi chấm tuần đều kem và đứng đúng thứ tự. Chưa tô một đoạn tương lai.", "Every week-dot is cream and stays in order. No future stretch is painted."],
    ["gold", "Viên vàng chạy lần lượt theo thứ tự đó. Xáo các tuần thì mất đúng cái bạn định dự báo.", "The gold bead walks them in that order. Shuffle the weeks and you lose the thing you meant to forecast."],
  ],
  "x-dep": [
    ["gold", "Thẻ vàng bên trái: mỗi tuần một phiếu độc lập. Hồi quy thường tính như các dòng không kéo nhau. Sai số chuẩn rồi sẽ tự tin quá mức.", "Left gold card: each week an independent draw. Regression usually counts rows as if they do not pull each other. The standard error then gets too confident."],
    ["clay", "Thẻ nâu bên phải: tuần này giống tuần trước. Phần dư tuần này giống tuần trước. Đó là chuỗi thời gian, không phải một đống dòng.", "Right brown card: this week looks like last week. This week’s miss looks like last week’s. That is a time series, not a pile of rows."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-decomp": [
    ["gold", "Thẻ vàng bên trái: cộng thêm một mùa. Ví dụ minh họa: tháng lễ thêm khoảng 20 form, dù nền cao hay thấp.", "Left gold card: adding a season. Example: the festival month adds about 20 forms, whether the base is high or low."],
    ["clay", "Thẻ nâu bên phải: nhân một mùa. Ví dụ: tháng lễ là ×1,4. Nền gấp đôi thì phần mùa cũng to hơn. Phải chọn, đừng đoán.", "Right brown card: multiplying a season. Example: the festival month is ×1.4. Double the base and the seasonal swing grows. You have to choose. Do not guess."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-naive": [
    ["cream", "Chấm kem là các tuần đã qua.", "Cream dots are the weeks already seen."],
    ["gold", "Chấm vàng ở cuối là «bằng tuần trước». Viên vàng chạy trên các tuần đã có. Mô hình nào không thắng được câu này thì chưa xong.", "The gold dot at the end is “same as last week”. The gold bead moves across past weeks. A model that cannot beat that sentence is not done."],
  ],
  "x-sma": [
    ["cream", "Cột kem nằm ngoài cửa sổ.", "Cream bars sit outside the window."],
    ["gold", "Cột vàng là 3 tuần gần nhất, mỗi tuần một suất bằng nhau. Khúc cua bị chậm. Tuần lễ và tuần thường bị cân như nhau.", "Gold bars are the last 3 weeks, each week one equal share. Turns show up late. A festival week and an ordinary week are weighed the same."],
  ],
  "x-ses": [
    ["cream", "Cột kem thấp: tuần cũ, nhẹ.", "Short cream bar: an old week, light."],
    ["clay", "Cột nâu: tuần giữa.", "Brown bar: a middle week."],
    ["gold", "Cột vàng cao: tuần này, nặng nhất. α ở đây là trọng số làm mượt, không phải α của kiểm định. Không có dốc, không có mùa.", "Tall gold bar: this week, heaviest. α here is a smoothing weight, not the test’s α. No slope, no season."],
  ],
  "x-holt": [
    ["cream", "Chấm kem là các tuần đã có.", "Cream dots are the weeks already seen."],
    ["gold", "Chấm vàng phía trước là dốc được đẩy tới. Một tháng lễ không phải một dốc cả năm.", "Gold dots ahead are the slope pushed forward. One festival month is not a slope for the whole year."],
  ],
  "x-hw": [
    ["cream", "Chấm kem là các tuần đã có, có sóng mùa nằm trên đó.", "Cream dots are the weeks already seen, with a seasonal wave on them."],
    ["gold", "Chấm vàng phía trước là mùa được đẩy tiếp. Chu kỳ, ví dụ 7 hoặc 52, là do bạn đưa. Máy không tự tìm.", "Gold dots ahead are the season pushed forward. The period, for example 7 or 52, is one you give. The machine does not find it."],
  ],
  "x-mape": [
    ["cream", "Cột kem: 10 form, ví dụ minh họa. MAPE chia được cho số thật.", "Cream bar: 10 forms, an example. MAPE can divide by the actual."],
    ["rust", "Cột đỏ thấp: 0 form. MAPE gãy vì chia cho số thật bằng 0.", "Short red bar: 0 forms. MAPE breaks because it divides by an actual of 0."],
    ["gold", "Cột vàng: 40 form. MAE vẫn tính bằng form. RMSE phạt tuần lệch lớn.", "Gold bar: 40 forms. MAE is still in forms. RMSE punishes a large miss."],
  ],
  "x-walk": [
    ["cream", "Ô kem là quá khứ đã dùng để học.", "Cream boxes are the past already used for learning."],
    ["gold", "Ô vàng là đoạn đang chấm, đứng ngay sau quá khứ.", "The gold box is the block being scored, standing just after the past."],
    ["ink", "Ô đen là đoạn chưa tới. Học quá khứ, chấm đoạn sau, rồi cuốn tới. Xáo tuần vào các fold sẽ cho mô hình nhìn thấy tương lai.", "Dark boxes are not reached yet. Learn the past, score the next block, then roll forward. Shuffling weeks into folds lets the model see the future."],
  ],
  "x-stat": [
    ["gold", "Thẻ vàng bên trái: mức đứng yên. Tâm và độ rộng không phụ thuộc lúc nào bạn nhìn.", "Left gold card: the level stays put. The center and the width do not depend on when you look."],
    ["clay", "Thẻ nâu bên phải: mức trôi đi. Có xu hướng thì chưa dừng. Lấy hiệu tuần này trừ tuần trước. Dự báo mức thì phải hoàn tác phép trừ đó.", "Right brown card: the level drifts. A trend is not stationary. Take this week minus last week. To forecast a level you have to undo that subtraction."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-acf": [
    ["gold", "Cột vàng cao nhất: lag 1, tương quan với tuần ngay trước, ví dụ minh họa.", "Tallest gold bar: lag 1, the correlation with the week just before, an example."],
    ["cream", "Hai cột kem: lag 2 và lag 3, thấp dần. PACF là phần còn lại sau khi đã tính các bước gần hơn.", "Two cream bars: lag 2 and lag 3, shorter. PACF is what is left after the nearer steps are accounted for."],
    ["ink", "Cột đen thấp: lag 4. Đây là gợi ý, không phải bằng chứng, và chuỗi ngắn hay nói dối.", "Short dark bar: lag 4. A hint, not a proof, and a short series often lies."],
  ],
  "x-ar": [
    ["cream", "Mọi chấm tuần đều kem: AR nhìn các tuần đã có, không tô một đoạn tương lai riêng.", "Every week-dot is cream: an AR looks at weeks already seen and does not paint a separate future stretch."],
    ["gold", "Viên vàng chạy trên các tuần đó. AR đoán tuần này từ vài tuần trước, không phải từ các cú sốc.", "The gold bead moves across those weeks. An AR guesses this week from a few earlier weeks, not from the shocks."],
  ],
  "x-mam": [
    ["gold", "Thẻ vàng bên trái: trung bình trượt: cộng vài tuần rồi chia, để làm mượt.", "Left gold card: a moving average: add a few weeks and divide, to smooth."],
    ["clay", "Thẻ nâu bên phải: sốc của tuần trước. MA trong ARIMA là cú sốc cũ còn vương lại. Cùng chữ, khác việc. Đừng trộn.", "Right brown card: last week’s shock. The MA in ARIMA is an old shock still hanging around. Same word, different job. Do not mix them."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-arima": [
    ["gold", "Thẻ vàng bên trái: lấy hiệu, rồi ARMA. ARIMA lấy hiệu d lần cho chuỗi chịu đứng yên, rồi mới AR và MA. d = 1 là đoán cái thay đổi.", "Left gold card: difference, then ARMA. ARIMA differences d times until the series can sit still, then adds AR and MA. d = 1 means you forecast the change."],
    ["clay", "Thẻ nâu bên phải: thêm mùa và một cột. SARIMA thêm chu kỳ. SARIMAX thêm một cột như khuyến mãi. Cột đó ở tuần tới phải biết trước, nếu không bạn đang đoán luôn cả khuyến mãi.", "Right brown card: adding a season and a column. SARIMA adds a period. SARIMAX adds a column such as a promo. You must already know that column next week, or you are forecasting the promo too."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-sys": [
    ["gold", "Thẻ vàng bên trái: một điểm chung. Hai đường cắt nhau thì có một nghiệm. Ví dụ minh họa: (2, 1).", "Left gold card: one shared point. Two lines that cross have one solution. Example: (2, 1)."],
    ["clay", "Thẻ nâu bên phải: không có điểm nào. Hai đường song song và mâu thuẫn thì không có điểm nào thỏa cả hai. Đừng bịa một nghiệm.", "Right brown card: no shared point. Parallel and contradictory lines have no point on both. Do not invent a solution."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-vadd": [
    ["gold", "Thẻ vàng bên trái: cộng từng ô. Ví dụ minh họa: (10, 80) + (2, 5) = (12, 85). Không cộng chéo.", "Left gold card: adding slot by slot. Example: (10, 80) + (2, 5) = (12, 85). Do not add across."],
    ["clay", "Thẻ nâu bên phải: nhân mọi ô với cùng một số. Nhân 2 là (20, 160). Đường không qua gốc thì nhân sẽ rời đường.", "Right brown card: multiplying every slot by the same number. Times 2 is (20, 160). A line that misses the origin leaves the line when you scale."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-arrow": [
    ["gold", "Thanh vàng là một véctơ: một danh sách số có thứ tự, không phải một số «tốt hơn».", "The gold shaft is a vector: an ordered list of numbers, not one number that is “better”."],
    ["axis", "Hai nhãn là ví dụ minh họa: 10 triệu chi và 80 form. Đổi chỗ hai số là một véctơ khác.", "The two labels are an example: 10 million of spend and 80 forms. Swap the two numbers and it is a different vector."],
  ],
  "x-dot": [
    ["gold", "Thanh vàng là véctơ thứ nhất, đứng yên.", "The gold shaft is the first vector, and it stays put."],
    ["cream", "Thanh kem xoay. Cùng hướng thì tích lớn. Gần vuông góc thì tích gần 0. Ví dụ minh họa: (2, 3)·(4, 1) = 11.", "The cream shaft turns. Same direction, the product is large. Near a right angle, the product is near 0. Example: (2, 3)·(4, 1) = 11."],
  ],
  "x-mat": [
    ["cream", "Bốn chấm kem là một hình. Ma trận kéo chúng thành hình khác.", "The four cream dots are one shape. A matrix pulls them into another shape."],
    ["axis", "Ví dụ minh họa: trục chi bị kéo gấp đôi, trục form giữ nguyên. Ma trận ăn một véctơ và nhả véctơ khác.", "Example: the spend axis is stretched by two, the form axis stays. A matrix eats a vector and returns another."],
  ],
  "x-mul": [
    ["gold", "Thẻ vàng bên trái: 2×3 rồi 3×1. Hàng của ma trận trái gặp cột của ma trận phải. Khớp số ở giữa thì nhân được.", "Left gold card: 2×3 then 3×1. A row of the left matrix meets a column of the right. If the middle sizes match, you can multiply."],
    ["clay", "Thẻ nâu bên phải: 3×1 rồi 2×3. Đảo thứ tự thì số ở giữa không khớp. Không phải nhân từng ô.", "Right brown card: 3×1 then 2×3. Reverse the order and the middle sizes do not match. It is not cell-by-cell multiply."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-det": [
    ["gold", "Mảnh vàng là hình đang bị kéo. Lúc nhãn «diện tích ×2»: định thức là hệ số nhân diện tích. Âm thì lật mặt.", "The gold slab is the shape being stretched. When the label says “area ×2”, the determinant is the area multiplier. Negative flips the face."],
    ["axis", "Lúc nhãn «diện tích 0»: mặt phẳng bị ép thành một đường. Định thức 0 thì không hoàn tác được.", "When the label says “area 0”, the plane is pressed into a line. Determinant 0 cannot be undone."],
  ],
  "x-eigen": [
    ["gold", "Thẻ vàng bên trái: chỉ dài ra. Vectơ riêng chỉ bị kéo hoặc lật. Av = λv. Ví dụ minh họa: trục ngang, λ = 2.", "Left gold card: it only gets longer. An eigenvector is only stretched or flipped. Av = λv. Example: the horizontal axis, λ = 2."],
    ["clay", "Thẻ nâu bên phải: bị quay đi. Vectơ (1, 1) bị ma trận kéo lệch hướng. Không phải vectơ riêng.", "Right brown card: it gets turned. The vector (1, 1) gets its direction changed. It is not an eigenvector."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-slope": [
    ["cream", "Các chấm kem là đường cong.", "The cream dots are the curve."],
    ["gold", "Thanh vàng là tiếp tuyến tại đúng một điểm. Đạo hàm là độ dốc của thanh đó, không phải độ dốc của cả đường.", "The gold bar is the tangent at one exact point. The derivative is the slope of that bar, not the slope of the whole curve."],
  ],
  "x-hess": [
    ["gold", "Thẻ vàng bên trái: lòng bát. Cong lên mọi phía thì đó là một đáy. Bước nhỏ nào cũng đi lên.", "Left gold card: a bowl. Curving up in every direction is a bottom. Every small step goes up."],
    ["clay", "Thẻ nâu bên phải: yên ngựa. Lên một phía, xuống phía kia. Một số đạo hàm bậc hai dương chưa đủ để gọi là đáy khi có hai nút.", "Right brown card: a saddle. Up on one side, down on the other. One positive second-derivative number is not enough to call it a bottom when there are two knobs."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-jac": [
    ["gold", "Chấm vàng bên trái là một bước của đầu vào, ví dụ một bước chi.", "The gold dot on the left is one step of the input, for example one step of spend."],
    ["cream", "Chấm kem là đầu ra form. Nó nhích một lượng.", "The cream dot is the forms output. It moves by one amount."],
    ["clay", "Chấm nâu là đầu ra giá. Cùng một bước vào, nó nhích một lượng khác. Bảng các lượng nhích đó là Jacobian.", "The brown dot is the cost output. The same input step moves it by a different amount. The table of those moves is the Jacobian."],
  ],
  "x-taylor": [
    ["cream", "Các chấm kem là đường cong.", "The cream dots are the curve."],
    ["gold", "Đoạn vàng là tiếp tuyến gần một điểm. Đi xa điểm đó thì đường thẳng nói dối.", "The gold segment is the tangent near one point. Far from that point, the straight line lies."],
  ],
  "x-mode": [
    ["cream", "Hai cột kem: số 2 và số 5, gặp ít hơn, ví dụ minh họa.", "Two cream bars: 2 and 5, which show up less, an example."],
    ["gold", "Cột vàng cao nhất: số 4, gặp nhiều nhất. Mode là 4. Hai số cùng nhiều nhất thì có hai mode.", "Tallest gold bar: 4, which shows up most. The mode is 4. Two numbers tied for most means two modes."],
    ["ink", "Cột đen thấp: số 9, gặp ít. Không có «mode» của một cái tên nếu bạn đang hỏi trung bình.", "Short dark bar: 9, which shows up rarely. A name has no mode if what you asked for was a mean."],
  ],
  "x-q": [
    ["cream", "Thước kem và hai vạch kem: Q1 và Q3.", "The cream ruler and the two cream ticks: Q1 and Q3."],
    ["gold", "Vạch vàng ở giữa: Q2, chính là trung vị. IQR = Q3 − Q1. Phần mềm có thể cắt lệch một ô. Nêu cách cắt.", "The gold tick in the middle: Q2, which is the median. IQR = Q3 − Q1. Software can disagree by a point. Name the cut."],
  ],
  "x-var": [
    ["gold", "Thẻ vàng bên trái: chia cho n − 1. Ví dụ minh họa: tổng bình phương lệch 32, chia 7, phương sai khoảng 4,57. Căn ra khoảng 2,14. Đây là cách của một mẫu.", "Left gold card: divide by n − 1. Example: squared gaps sum to 32, divide by 7, variance about 4.57. The root is about 2.14. This is the sample way."],
    ["clay", "Thẻ nâu bên phải: chia cho n. Cùng dãy, cả nguồn thì ra 4, căn ra 2. Đừng trộn hai cách.", "Right brown card: divide by n. The same list, for the whole source, gives 4, and the root is 2. Do not mix the two ways."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-cov": [
    ["gold", "Thẻ vàng bên trái: cùng phía trung bình thì hiệp phương sai dương. Đơn vị là đơn vị của x nhân đơn vị của y. Đừng so với một cặp khác đơn vị.", "Left gold card: the same side of the mean means positive covariance. The unit is x’s unit times y’s unit. Do not compare it with a pair in other units."],
    ["clay", "Thẻ nâu bên phải: khác phía thì hiệp phương sai âm. Dấu là câu chuyện. Độ lớn phụ thuộc thước đo.", "Right brown card: opposite sides means negative covariance. The sign is the story. The size depends on the ruler."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "x-drill": [
    ["gold", "Thẻ vàng bên trái, «bài luyện»: Buổi này là bài luyện hoặc bài nộp. Không có định nghĩa mới.", "Left gold card, “a drill”: This session is a drill or a submission. There is no new definition."],
    ["clay", "Thẻ nâu bên phải, «phần dạy»: Mở lại phần dạy của khóa. Đừng học thuộc đáp án.", "Right brown card, “the teaching”: Reopen the teaching part of the course. Don't memorize an answer."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-c0-order": [
    ["gold", "Thẻ vàng bên trái, «đúng thứ tự»: Mục lục mở từ C0-1 tới C7. Mỗi khóa là một tầng, không phải một menu tùy ý.", "Left gold card, “in file order”: The contents run from C0-1 to C7. Each course is a layer, not a menu you hop around."],
    ["clay", "Thẻ nâu bên phải, «nhảy có»: Nhảy tới rừng cây khi chưa có một dòng dữ liệu thì phiếu bầu không có gì để đếm.", "Right brown card, “skipping ahead”: Jumping to a forest before you have a row of data means the vote has nothing to count."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-c0-read": [
    ["gold", "Thẻ vàng bên trái, «một ý»: Đọc vì sao cần, nối với ý trước, nhìn hình đang đổi, rồi câu nói cho đúng.", "Left gold card, “one idea”: Read why it matters, how it links, watch the picture change, then the precise sentence."],
    ["clay", "Thẻ nâu bên phải, «không quiz»: Sổ không hỏi lại bạn. Không có ô trả lời.", "Right brown card, “no quiz”: The notebook does not ask you back. There is no answer box."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-crisp-biz": [
    ["gold", "Thẻ vàng bên trái, «câu hỏi trước»: Chưa có câu «quyết định gì» thì chưa có bài toán.", "Left gold card, “question first”: Without “what will be decided”, there is no problem yet."],
    ["clay", "Thẻ nâu bên phải, «file trước»: Có file mà chưa biết ai quyết định thì model không có chỗ dùng.", "Right brown card, “file first”: A file with nobody to decide for has nowhere for a model to land."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-crisp-data": [
    ["gold", "Thẻ vàng bên trái, «cột đang có»: Một cột có mặt không có nghĩa nó đo đúng việc.", "Left gold card, “the column you have”: A column being present does not mean it measures the job."],
    ["clay", "Thẻ nâu bên phải, «cột cần quyết»: Đo nhầm thì làm sạch cũng chỉ làm sạch cái nhầm.", "Right brown card, “the column you need”: The wrong measure, cleaned, is still the wrong measure."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-crisp-prep": [
    ["gold", "Thẻ vàng bên trái, «làm cho đúng hạt»: Chuẩn bị là sửa hạt và lỗ hổng. Model là một cách trả lời. Evaluation hỏi cách đó có đỡ quyết định không.", "Left gold card, “fix the grain”: Preparation fixes grain and holes. A model is one way to answer. Evaluation asks whether that way helps the decision."],
    ["clay", "Thẻ nâu bên phải, «chấm bằng accuracy»: Accuracy trên lớp đông có thể đẹp mà không giữ được ai.", "Right brown card, “score with accuracy”: Accuracy on a crowded class can look good and still keep nobody."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-crisp-ship": [
    ["gold", "Thẻ vàng bên trái, «một file gửi»: Deployment là quyết định được dùng lặp lại, có người chịu, có lúc nào thì làm lại.", "Left gold card, “a file you send”: Deployment is a decision used again, with an owner, and a time when it is rebuilt."],
    ["clay", "Thẻ nâu bên phải, «một quyết định chạy»: Gửi một file cuối tuần không phải là đã đưa vào vận hành.", "Right brown card, “a decision that runs”: Sending a Friday file is not the same as running it."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ps-open": [
    ["gold", "Thẻ vàng bên trái, «sáu bước»: Hiểu việc, đặt khung, tìm nguyên nhân, xét cách, rồi làm và đo.", "Left gold card, “six steps”: Understand the job, frame it, find a cause, weigh options, then do it and measure."],
    ["clay", "Thẻ nâu bên phải, «một mẹo»: Buổi 4 và buổi 6 trong file gốc chỉ có tiêu đề. Ý vẫn được dạy ở đây, không bịa thêm video.", "Right brown card, “one trick”: Sessions 4 and 6 in the source file are titles only. The idea is still taught here. No fake video."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ps-type": [
    ["gold", "Thẻ vàng bên trái, «đang chọn»: Việc «chọn» cần một thước. Việc «giải thích» cần một cơ chế. Trộn hai cái thì ra một slide không ai làm được.", "Left gold card, “choosing”: A choosing job needs a measure. An explaining job needs a mechanism. Mix them and you get a slide nobody can act on."],
    ["clay", "Thẻ nâu bên phải, «đang giải thích»: «Vì sao form giảm» và «có tắt kênh không» là hai việc.", "Right brown card, “explaining”: “Why did forms drop” and “do we turn the channel off” are two jobs."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ps-fact": [
    ["gold", "Thẻ vàng bên trái, «80 form»: Số là cái đếm được, trong một hạt, trong một khoảng thời gian. Ý kiến là một lời chưa có mẫu số.", "Left gold card, “80 forms”: A fact is something counted, at a grain, over a time. An opinion is a sentence with no denominator."],
    ["clay", "Thẻ nâu bên phải, «em thấy yếu»: «Yếu» không cộng được với «80».", "Right brown card, “I feel it's weak”: “Weak” cannot be added to “80”."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ps-smart": [
    ["gold", "Thẻ vàng bên trái, «tăng form»: Một việc SMART nói rõ cái gì, đo bằng gì, với nguồn lực nào, liên quan quyết định nào, và hạn nào.", "Left gold card, “raise forms”: A SMART job says what, measured how, with which means, tied to which decision, and by when."],
    ["clay", "Thẻ nâu bên phải, «+20 form, hạn chót»: «Tăng trưởng» không có hạn là một poster.", "Right brown card, “plus 20 forms, by a date”: “Growth” with no date is a poster."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ps-rank": [
    ["gold", "Thẻ vàng bên trái, «làm hạn này»: Ưu tiên là chọn việc nào được nguồn lực của đúng hạn này. Việc còn lại không bị gọi là kém. Nó chỉ không nằm trong hạn.", "Left gold card, “this window”: Priority is which job gets this window's means. The rest are not called lesser. They are just not in this window."],
    ["clay", "Thẻ nâu bên phải, «để hạn sau»: Đánh số 1 đến 10 mà vẫn làm cả mười là chưa ưu tiên.", "Right brown card, “a later window”: Numbering 1 to 10 and still doing all ten is not a priority."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ps-cause": [
    ["gold", "Thẻ vàng bên trái, «xoay được»: Một nguyên nhân đáng đưa vào việc là một thứ, nếu đổi nó, thước đã viết sẽ đổi. Bối cảnh không có nút thì không phải nguyên nhân để làm.", "Left gold card, “you can turn it”: A cause worth putting in the job is something that, if changed, moves the measure you wrote. A setting with no lever is not a cause you can work."],
    ["clay", "Thẻ nâu bên phải, «chỉ là bối cảnh»: «Thị trường khó» không có nút bấm trong hạn 30/11.", "Right brown card, “only the setting”: “The market is hard” has no button inside the 30 Nov window."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ps-opt": [
    ["gold", "Thẻ vàng bên trái, «cùng một giá»: Một phương án là một việc làm được trong hạn, kèm cái sẽ xảy ra nếu làm, và nếu không làm.", "Left gold card, “the same cost”: An option is something you can do in the window, with what happens if you do it, and if you don't."],
    ["clay", "Thẻ nâu bên phải, «mỗi cách một giá»: Ba ý «hay» không có nghĩa là làm được cả ba.", "Right brown card, “each way has a cost”: Three “good” ideas does not mean you can do all three."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ps-do": [
    ["gold", "Thẻ vàng bên trái, «đã làm»: Làm là đổi cái đã chọn. Đo là đếm lại đúng công thức của câu SMART, sau hạn, cùng hạt.", "Left gold card, “we did it”: Doing is changing what you chose. Measuring is counting the SMART formula again, after the date, at the same grain."],
    ["clay", "Thẻ nâu bên phải, «đo lại cùng hạt»: Một buổi họp «xong» không phải một phép đo.", "Right brown card, “remeasure the same grain”: A meeting called “done” is not a measurement."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-xl-cell": [
    ["gold", "Thẻ vàng bên trái, «số 80»: Ô số cộng được. Ô chữ chỉ nối. Công thức tính lại khi ô kia đổi.", "Left gold card, “the number 80”: A number cell can be added. A text cell only joins. A formula recomputes when the other cell changes."],
    ["clay", "Thẻ nâu bên phải, «chữ «80»»: «80» cộng «20» ra «8020», không ra 100.", "Right brown card, “the text “80””: “80” plus “20” becomes “8020”, not 100."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-xl-lock": [
    ["gold", "Thẻ vàng bên trái, «kéo là trượt»: Không có $ thì địa chỉ đi theo hướng bạn kéo. $ cột giữ cột. $ hàng giữ hàng.", "Left gold card, “fill and it walks”: With no $, the address follows the direction you fill. A $ on the column locks the column. A $ on the row locks the row."],
    ["clay", "Thẻ nâu bên phải, «$ là giữ»: Thuế ở ô B1. Kéo xuống mà không khóa thì dòng 2 lấy B2, thường là trống.", "Right brown card, “$ keeps it”: The rate sits in B1. Fill down without a lock and row 2 reads B2, usually blank."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-xl-if": [
    ["gold", "Thẻ vàng bên trái, «trúng một nhánh»: IF hỏi một điều, trả một trong hai. Nhánh sau không được xét nếu nhánh trước đã đúng.", "Left gold card, “one branch hits”: IF asks one thing and returns one of two. The later branch is not looked at if the earlier one was true."],
    ["clay", "Thẻ nâu bên phải, «ô trống rơi xuống»: IF(A2<5, «thấp», «cao») gọi ô trống là thấp, vì trống không lớn hơn 5.", "Right brown card, “a blank falls through”: IF(A2<5, “low”, “high”) calls a blank low, because a blank is not greater than 5."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-xl-keep": [
    ["gold", "Thẻ vàng bên trái, «lọc: dòng còn»: Filter ẩn các dòng không khớp. Dòng vẫn trong file. Delete bỏ dòng. SUM thường vẫn cộng cả dòng đang ẩn. SUBTOTAL mới biết bỏ qua dòng ẩn.", "Left gold card, “filter: the row stays”: Filter hides rows that don't match. The rows stay in the file. Delete removes them. SUM usually still adds hidden rows. SUBTOTAL is what knows to skip hidden rows."],
    ["clay", "Thẻ nâu bên phải, «xóa: dòng mất»: Ẩn 50 dòng rồi SUM vẫn ra tổng cũ. Không phải filter hỏng. Là SUM không nhìn filter.", "Right brown card, “delete: the row is gone”: Hide 50 rows and SUM still shows the old total. The filter is not broken. SUM does not look at the filter."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-xl-chart": [
    ["gold", "Thẻ vàng bên trái, «cột: so nhóm»: Bar so độ lớn của các nhóm không có thứ thời gian. Line đi theo một trục đã xếp, thường là ngày. Nối các kênh bằng một đường là bịa một độ dốc.", "Left gold card, “bars: compare groups”: A bar compares the size of groups that have no time order. A line follows an ordered axis, usually dates. Connecting channels with a line invents a slope."],
    ["clay", "Thẻ nâu bên phải, «đường: theo thời gian»: GDN sang TikTok không phải một xu hướng. Đó là hai nhóm.", "Right brown card, “line: over time”: GDN to TikTok is not a trend. Those are two groups."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-xl-pivot": [
    ["gold", "Thẻ vàng bên trái, «400 dòng»: Pivot cộng, đếm, hoặc lấy trung bình theo nhóm bạn thả vào. Hạt của nguồn vẫn là hạt. Đếm dòng không phải đếm người nếu một người nhiều dòng.", "Left gold card, “400 rows”: A pivot sums, counts, or averages by the group you drop in. The source grain stays the grain. A count of rows is not a count of people if one person has many rows."],
    ["clay", "Thẻ nâu bên phải, «không phải 400 khách»: Một khách năm dòng thì Count of rows là 5. Distinct là việc khác, và phải gọi đúng tên.", "Right brown card, “not 400 customers”: One customer with five rows means a count of rows is 5. Distinct is a different job, and you have to name it."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-xl-look": [
    ["gold", "Thẻ vàng bên trái, «không thấy: #N/A»: VLOOKUP tìm cột đầu của vùng, trả một cột bên phải. Nhìn sang trái thì nó không làm. Để trống đối số cuối, hoặc ghi TRUE, là tìm gần đúng trên một cột đã sắp.", "Left gold card, “missing: #N/A”: VLOOKUP searches the first column of the range and returns a column to the right. It does not look left. Leave the last argument empty, or write TRUE, and it does an approximate match on a sorted column."],
    ["clay", "Thẻ nâu bên phải, «gần đúng, im»: Mã không có trong bảng, mà cột không sắp và đang để gần đúng, có thể ra nhầm một mã khác. Không phải #N/A.", "Right brown card, “approximate, quietly”: A code that is not in the table, with an unsorted column and an approximate match, can return a different code. Not #N/A."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-py-run": [
    ["gold", "Thẻ vàng bên trái, «trên trước»: Một chương trình là các dòng. Dòng dưới nhìn thấy cái dòng trên đã tạo. Thụt đầu dòng là cấu trúc, không phải trang trí.", "Left gold card, “the top first”: A program is lines. A lower line can see what an upper line created. Indentation is the structure, not decoration."],
    ["clay", "Thẻ nâu bên phải, «dùng tên chưa có»: Gọi form trước dòng form = 80 thì máy dừng vì chưa có form.", "Right brown card, “use a name too early”: Using form before the line form = 80 stops the machine, because form does not exist yet."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-py-type": [
    ["gold", "Thẻ vàng bên trái, «3 + 4 = 7»: Số, số thực, chữ, đúng/sai, và None là các kiểu khác nhau. None là chưa có, không phải 0, không phải chữ rỗng.", "Left gold card, “3 + 4 = 7”: Integer, float, text, true/false, and None are different types. None is “nothing yet”. It is not 0 and not an empty text."],
    ["clay", "Thẻ nâu bên phải, ««3» + «4» = «34»»: Trung bình của cột tên kênh không tồn tại. Đó không phải một số xấu. Đó là nhầm kiểu.", "Right brown card, ““3” + “4” = “34””: The mean of a channel-name column does not exist. That is not a bad number. That is the wrong type."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-py-op": [
    ["gold", "Thẻ vàng bên trái, «n = 80»: = cất một giá trị vào tên. == hỏi hai bên có bằng nhau không. / là chia ra số thực. // là chia lấy phần nguyên.", "Left gold card, “n = 80”: = stores a value in a name. == asks whether the two sides are equal. / divides and gives a float. // divides and keeps the integer part."],
    ["clay", "Thẻ nâu bên phải, «n == 80»: 0.1 + 0.2 không đúng bằng 0.3 trong số thực máy. Đừng dùng == để so hai số thực vừa mới tính.", "Right brown card, “n == 80”: 0.1 + 0.2 is not exactly 0.3 in machine floats. Don't use == to compare two floats you just computed."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-py-if": [
    ["gold", "Thẻ vàng bên trái, «một nhánh»: if hỏi một bool. Đúng thì chạy khối thụt vào. elif là các câu hỏi sau, chỉ khi câu trước sai. else là phần còn lại.", "Left gold card, “one branch”: if asks a bool. True runs the indented block. elif is a later question, only if the earlier one was false. else is whatever remains."],
    ["clay", "Thẻ nâu bên phải, «không phải cả hai»: Chuỗi khác rỗng là đúng. 0 và chuỗi rỗng là sai. Đừng dựa vào đó để bắt ô trống của một bảng nếu bạn chưa kiểm.", "Right brown card, “not both”: A non-empty text is true. 0 and an empty text are false. Don't rely on that to catch a blank table cell unless you checked."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-py-loop": [
    ["gold", "Thẻ vàng bên trái, «đi hết đám»: for tên in đám: chạy một lần cho mỗi phần. while điều kiện: chạy lại đến khi điều kiện sai.", "Left gold card, “walk the whole set”: for name in collection: once per item. while condition: again until the condition is false."],
    ["clay", "Thẻ nâu bên phải, «while không có cửa ra»: Xóa phần tử ngay trong danh sách đang for thì máy nhảy cóc. Một phần tử không được thăm.", "Right brown card, “while with no exit”: Deleting an item inside the list you are walking makes the machine skip. One item is never visited."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-py-fn": [
    ["gold", "Thẻ vàng bên trái, «có return»: def đặt tên. Tham số là đầu vào của lần gọi đó. return gửi một giá trị về chỗ gọi. Hết hàm mà không return thì giá trị là None.", "Left gold card, “there is a return”: def names it. Parameters are the inputs of that call. return sends a value back to the caller. If the function ends without return, the value is None."],
    ["clay", "Thẻ nâu bên phải, «ra None»: in ra 80 không phải trả về 80. Người gọi nhận None, rồi cộng None thì vỡ.", "Right brown card, “you get None”: Printing 80 is not returning 80. The caller receives None, and adding None breaks."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-py-str": [
    ["gold", "Thẻ vàng bên trái, «bản mới»: str là một dãy ký tự có thứ. Cắt [đầu:cuối] lấy từ đầu, không lấy cuối. Phương thức không sửa chữ gốc nếu bạn không giữ kết quả.", "Left gold card, “a new one”: A str is an ordered sequence of characters. A slice [start:end] takes from start and does not take end. A method does not change the original text unless you keep the result."],
    ["clay", "Thẻ nâu bên phải, «bản cũ còn»: tên.strip() mà không gán lại thì tên vẫn còn dấu cách. Cột vẫn bẩn.", "Right brown card, “the old one remains”: name.strip() without assigning it back leaves the space on name. The column is still dirty."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-py-list": [
    ["gold", "Thẻ vàng bên trái, «ô đầu là 0»: List giữ thứ tự và cho phép đổi từng ô. Chỉ số 0 là phần tử đầu. -1 là phần tử cuối. Cắt [a:b] là một danh sách mới, không gồm b.", "Left gold card, “the first slot is 0”: A list keeps order and lets you change a slot. Index 0 is the first item. -1 is the last. A slice [a:b] is a new list and does not include b."],
    ["clay", "Thẻ nâu bên phải, «ô cuối là -1»: form[1] trên [80, 90, 70] là 90, không phải 80.", "Right brown card, “the last slot is -1”: form[1] on [80, 90, 70] is 90, not 80."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-py-dict": [
    ["gold", "Thẻ vàng bên trái, «khóa lạ: lỗi»: Dict là khóa tới giá trị. Mỗi khóa một lần. form[\"tiktok\"] mà chưa có khóa thì KeyError. form.get(\"tiktok\") trả None, hoặc một giá trị bạn đưa sẵn.", "Left gold card, “unknown key: error”: A dict maps a key to a value. Each key once. form[\"tiktok\"] with no such key is a KeyError. form.get(\"tiktok\") returns None, or a value you supplied."],
    ["clay", "Thẻ nâu bên phải, «get: còn thiếu»: Kênh mới xuất hiện giữa chừng là chuyện bình thường. Coi đó là lỗi chương trình thì vòng chết đúng chỗ dữ liệu mới.", "Right brown card, “get: still missing”: A channel showing up halfway is normal. Treating it as a program error kills the loop exactly where the data is new."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-py-tup": [
    ["gold", "Thẻ vàng bên trái, «không sửa ô»: Tuple giống list ở chỗ có thứ và có chỉ số, khác ở chỗ không append, không gán lại từng ô.", "Left gold card, “the slot stays”: A tuple is like a list in order and index, and unlike it in that you cannot append or assign a slot."],
    ["clay", "Thẻ nâu bên phải, «list thì sửa được»: (80, \"tiktok\") là một dòng đã đóng. Muốn đổi form thì tạo bộ mới, không sửa bộ cũ.", "Right brown card, “a list can be edited”: (80, \"tiktok\") is a closed row. To change the forms, make a new tuple. Don't edit the old one."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-py-set": [
    ["gold", "Thẻ vàng bên trái, «có trùng»: Set là tập hợp. Thêm một phần tử đã có thì tập không dài thêm. Kiểm «có trong tập» thì nhanh. Không có chỉ số ô thứ 0 đáng tin.", "Left gold card, “duplicates stay”: A set is a collection of uniques. Adding an item you already have does not make it longer. “Is it in the set” is fast. There is no trustworthy slot 0."],
    ["clay", "Thẻ nâu bên phải, «mất trùng, mất thứ»: Ba dòng cùng một mã khách, bỏ vào set, còn một mã. Không còn biết mã đó đứng đầu hay đứng cuối file.", "Right brown card, “duplicates go, order goes”: Three rows with the same customer code, put into a set, leave one code. You no longer know whether that code was first or last in the file."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-py-np": [
    ["gold", "Thẻ vàng bên trái, «một kiểu»: ndarray có shape, thường là (số dòng, số cột). Mọi ô cùng một dtype. Trung bình một trục là một phép trên số.", "Left gold card, “one type”: An ndarray has a shape, usually (rows, columns). Every cell shares one dtype. A mean along an axis is an operation on numbers."],
    ["clay", "Thẻ nâu bên phải, «lẫn chữ là hỏng»: Nhét một chữ vào mảng số thì hoặc là lỗi, hoặc cả mảng thành chữ và .mean() không còn là trung bình form.", "Right brown card, “text mixed in breaks it”: Put a text into a numeric array and you either get an error, or the whole array becomes text and .mean() is no longer the mean of forms."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-py-ser": [
    ["gold", "Thẻ vàng bên trái, «canh theo nhãn»: Mỗi dòng của Series có một index. Cộng hai Series là ghép theo index. Khớp thì cộng. Không khớp thì ra thiếu, không phải cộng nhầm hàng dưới.", "Left gold card, “align by label”: Each row of a Series has an index. Adding two Series joins on the index. A match adds. A miss becomes missing. It does not add the row below by mistake."],
    ["clay", "Thẻ nâu bên phải, «canh theo chỗ đứng»: Tuần của GDN và tuần của TikTok cùng dài 4, nhưng nhãn ngày lệch một hôm. Cộng theo chỗ đứng là cộng nhầm ngày.", "Right brown card, “align by position”: GDN's week and TikTok's week are both length 4, but the date labels are off by a day. Adding by position adds the wrong day."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-py-frame": [
    ["gold", "Thẻ vàng bên trái, «loc gồm cuối»: loc[dòng, cột] dùng nhãn. iloc dùng số thứ tự, từ 0. loc[\"a\":\"c\"] gồm c. iloc[0:3] không gồm ô số 3.", "Left gold card, “loc includes the end”: loc[row, column] uses labels. iloc uses positions, from 0. loc[\"a\":\"c\"] includes c. iloc[0:3] does not include position 3."],
    ["clay", "Thẻ nâu bên phải, «iloc không gồm cuối»: Cắt nhãn từ ngày 1 đến ngày 4 mà dùng iloc theo cảm giác thì dễ mất một ngày hoặc lấy thừa.", "Right brown card, “iloc excludes the end”: Slicing labels from day 1 through day 4 with iloc, by feel, easily drops a day or takes an extra one."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-py-plot": [
    ["gold", "Thẻ vàng bên trái, «cột đếm»: Bar so các nhóm. Line theo thời gian. Trục ghi đơn vị. Tiêu đề là câu nhận xét, không phải tên loại hình.", "Left gold card, “a count”: Bars compare groups. A line follows time. The axis states the unit. The title is the claim, not the name of the chart type."],
    ["clay", "Thẻ nâu bên phải, «một tỷ lệ»: 200 form và 20 form là độ lớn. 4% và 8% là tỷ lệ. Vẽ 200 cạnh 20 rồi gọi là kênh tốt hơn là chưa chia cho số click.", "Right brown card, “a rate”: 200 forms and 20 forms are sizes. 4% and 8% are rates. Drawing 200 next to 20 and calling a channel better has not divided by clicks."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-py-g1": [
    ["gold", "Thẻ vàng bên trái, «bài chấm»: Một bài nộp kiểm bạn có dùng được ý cũ. Nó không phải một ý thứ hai.", "Left gold card, “graded work”: A submission checks that you can use the old ideas. It is not a second idea."],
    ["clay", "Thẻ nâu bên phải, «mở lại C1»: Sổ không chứa đề và không chứa đáp án.", "Right brown card, “reopen C1”: The notebook does not hold the prompt and does not hold the answer."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-py-g2": [
    ["gold", "Thẻ vàng bên trái, «mở lại bảng»: Câu chấm thư viện hỏi shape, loc hay iloc, và hình có đúng câu không.", "Left gold card, “reopen the table”: A library question asks about shape, loc or iloc, and whether the picture matches the sentence."],
    ["clay", "Thẻ nâu bên phải, «học thuộc điểm»: Nhớ mang máng một hàm không cứu một lát cắt gồm nhầm đầu cuối.", "Right brown card, “memorize the score”: Half-remembering a function does not save a slice that includes the wrong end."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-math-perm": [
    ["gold", "Thẻ vàng bên trái, «thứ tự tính»: P(n, k) là số cách xếp k chỗ từ n thứ, có thứ tự.", "Left gold card, “order counts”: P(n, k) is the number of ways to fill k seats from n things, in order."],
    ["clay", "Thẻ nâu bên phải, «chỉ cần bộ»: 8 người lấy 3 suất lên sóng: 8×7×6 = 336. Cùng ba người đổi chỗ là một cách khác.", "Right brown card, “only the set”: 8 people, 3 seats on air: 8×7×6 = 336. The same three people in another order is another way."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-math-comb": [
    ["gold", "Thẻ vàng bên trái, «336 cách xếp»: C(n, k) là số bộ k phần tử lấy từ n, không kể thứ tự.", "Left gold card, “336 arrangements”: C(n, k) is the number of k-sets from n, ignoring order."],
    ["clay", "Thẻ nâu bên phải, «56 bộ»: 8 người lấy 3, không phân biệt ai ngồi ghế nào: 336 / 6 = 56. 3! = 6 cách xếp một bộ ba.", "Right brown card, “56 sets”: 8 people, take 3, and the seats don't matter: 336 / 6 = 56. 3! = 6 ways to order one trio."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-math-disj": [
    ["gold", "Thẻ vàng bên trái, «không cùng lúc»: Hai việc rời nhau thì không xảy ra cùng lúc. Nếu cả hai đều có xác suất dương, biết việc này xảy ra là biết việc kia không xảy ra. Đó là phụ thuộc.", "Left gold card, “never together”: Two disjoint events do not happen together. If both have a positive probability, knowing that one happened tells you the other did not. That is dependence."],
    ["clay", "Thẻ nâu bên phải, «vẫn phụ thuộc»: «Gửi form» và «không gửi form» rời nhau. Biết đã gửi thì chắc chắn không nằm ở nhóm không gửi. Chúng không độc lập.", "Right brown card, “still dependent”: “Sent the form” and “did not send the form” are disjoint. Knowing it was sent tells you it is not in the other group. They are not independent."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-math-kind": [
    ["gold", "Thẻ vàng bên trái, «đếm cách đều»: Cổ điển là số cách thuận trên số cách coi như đều. Tần suất là tỷ lệ sau nhiều lần lặp. Chủ quan là mức bạn sẵn sàng đánh đổi, khi không có cách đều và cũng chưa có nhiều lần lặp.", "Left gold card, “count equal ways”: Classical is favorable ways over ways you treat as equal. Frequency is a share after many repeats. Subjective is the stake you would take, when there are no equal ways and not many repeats either."],
    ["clay", "Thẻ nâu bên phải, «một tuần 3%»: 12 form trên 400 phiên là một tần suất của mẫu đó. Không phải «12 cách trên 400 cách đều nhau» nếu các phiên không được xây như những cách đều.", "Right brown card, “one week at 3%”: 12 forms out of 400 sessions is a frequency of that sample. It is not “12 ways out of 400 equal ways” unless the sessions were built as equal ways."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ds-pct": [
    ["gold", "Thẻ vàng bên trái, «chỗ trong dãy»: Phân vị thứ p là một giá trị mà khoảng p phần trăm các quan sát nằm không cao hơn nó, theo đúng quy ước cắt bạn đã chọn.", "Left gold card, “a place in the list”: The p-th percentile is a value such that about p percent of the observations sit at or below it, under the cut rule you chose."],
    ["clay", "Thẻ nâu bên phải, «90% của số max»: Dãy 2, 4, 4, 4, 5, 5, 7, 9. Số lớn nhất là 9. 90% của 9 là 8,1. Phân vị 90 không phải 8,1. Nó là một chỗ gần cuối dãy đã sắp.", "Right brown card, “90% of the max”: The list 2, 4, 4, 4, 5, 5, 7, 9. The maximum is 9. 90% of 9 is 8.1. The 90th percentile is not 8.1. It is a place near the end of the sorted list."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ds-range": [
    ["gold", "Thẻ vàng bên trái, «nhìn hai đầu»: Range = giá trị lớn nhất trừ giá trị nhỏ nhất. Mọi số ở giữa không đổi range.", "Left gold card, “looks at the ends”: Range = the largest value minus the smallest. Every number in the middle leaves the range unchanged."],
    ["clay", "Thẻ nâu bên phải, «cả đám ở giữa»: Dãy 2, 4, 4, 4, 5, 5, 7, 9 có range 7. Đổi các số 4 thành 5, range vẫn 7.", "Right brown card, “the middle is ignored”: The list 2, 4, 4, 4, 5, 5, 7, 9 has range 7. Change the 4s into 5s and the range is still 7."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ds-mad": [
    ["gold", "Thẻ vàng bên trái, «chia n, không căn»: MAD ở đây là trung bình của |x − trung bình|. Chia cho n. Không lấy căn. Không chia n−1, trừ khi bạn nói một định nghĩa khác.", "Left gold card, “divide by n, no root”: MAD here is the mean of |x − mean|. Divide by n. Don't take a root. Don't divide by n−1 unless you name a different definition."],
    ["clay", "Thẻ nâu bên phải, «phương sai thì bình phương»: Dãy 2, 4, 4, 4, 5, 5, 7, 9. Trung bình 5. Độ lệch tuyệt đối 3, 1, 1, 1, 0, 0, 2, 4. Tổng 12. 12/8 = 1,5.", "Right brown card, “variance squares”: The list 2, 4, 4, 4, 5, 5, 7, 9. The mean is 5. Absolute gaps 3, 1, 1, 1, 0, 0, 2, 4. Sum 12. 12/8 = 1.5."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-sql-like": [
    ["gold", "Thẻ vàng bên trái, «% là mọi chữ»: LIKE dùng % cho một cụm bất kỳ và _ cho một ký tự. REGEXP hay RLIKE là biểu thức chính quy, tùy máy, không cùng một thư viện với LIKE.", "Left gold card, “% is any text”: LIKE uses % for any stretch and _ for one character. REGEXP or RLIKE is a regular expression, depending on the engine, and it is not the same library as LIKE."],
    ["clay", "Thẻ nâu bên phải, «regex là luật khác»: WHERE kênh LIKE '%tok' khớp tiktok. Nó cũng khớp một chữ rác kết thúc bằng tok. Không có mỏ neo thì đừng tưởng đó là cả ô.", "Right brown card, “a regex is another rule”: WHERE channel LIKE '%tok' matches tiktok. It also matches junk that ends in tok. With no anchor, don't treat it as the whole cell."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-sql-date": [
    ["gold", "Thẻ vàng bên trái, «kiểu ngày»: Lưu ngày bằng kiểu ngày. YEAR, DATE, DATEDIFF làm việc lịch. Cắt chuỗi là làm việc chữ, và lệch khi format đổi.", "Left gold card, “a date type”: Store a date as a date type. YEAR, DATE, DATEDIFF do calendar work. Slicing a string does text work, and it breaks when the format changes."],
    ["clay", "Thẻ nâu bên phải, «chữ cắt tay»: Thiếu một ngày trong bảng là không có dòng. Không phải dòng đó bằng 0 form, trừ khi bạn đã tạo dòng 0.", "Right brown card, “text sliced by hand”: A missing day in the table is a missing row. It is not a row of 0 forms, unless you created that 0 row."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-sql-nest": [
    ["gold", "Thẻ vàng bên trái, «chạy một lần»: Câu con không tương quan chạy độc lập. Câu tương quan chạy lại theo từng dòng của câu ngoài, vì nó dùng cột của dòng đó.", "Left gold card, “runs once”: An uncorrelated subquery runs on its own. A correlated one runs again for each outer row, because it uses that row's columns."],
    ["clay", "Thẻ nâu bên phải, «chạy từng dòng ngoài»: «Khách có form cao hơn trung bình kênh của chính họ» là tương quan. Nó không tự nhanh hơn một lần JOIN với bảng trung bình.", "Right brown card, “runs per outer row”: “Customers above the mean of their own channel” is correlated. It is not automatically faster than a JOIN to a table of means."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-sql-nwin": [
    ["gold", "Thẻ vàng bên trái, «cùng một cửa»: WINDOW w AS (PARTITION BY ... ORDER BY ...) rồi OVER w dùng lại đúng cửa đó.", "Left gold card, “the same window”: WINDOW w AS (PARTITION BY ... ORDER BY ...) and then OVER w reuses that exact window."],
    ["clay", "Thẻ nâu bên phải, «một phép mới»: Hai hàm dùng chung một cái tên cửa sổ thì cùng một cách chia nhóm và cùng một khung. Không phải một hàm được «ưu tiên».", "Right brown card, “a new operation”: Two functions that share a window name share the partition and the frame. One function is not “preferred”."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-sql-proc": [
    ["gold", "Thẻ vàng bên trái, «một câu đọc được»: Stored procedure là một chương trình đã lưu, có thể có nhiều câu, có thể ghi bảng. Hàm (UDF) trả một giá trị và đáng lẽ không giấu một lần quét bảng.", "Left gold card, “a query you can read”: A stored procedure is a saved program. It can hold many statements and it can write tables. A function (UDF) returns a value and should not hide a table scan."],
    ["clay", "Thẻ nâu bên phải, «một kịch bản giấu»: Một hàm bọc quanh cột trong WHERE có thể chạy từng dòng và bỏ mục lục. Người đọc chỉ thấy tên hàm.", "Right brown card, “a hidden script”: A function wrapped around a column in WHERE can run per row and skip the index. The reader only sees the function's name."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-sql-cur": [
    ["gold", "Thẻ vàng bên trái, «cả tập một lần»: Cursor mở một kết quả rồi lần từng dòng trong chương trình. Set-based là một câu cho cả đám.", "Left gold card, “the whole set at once”: A cursor opens a result and then steps through it in a program. Set-based is one statement for the whole group."],
    ["clay", "Thẻ nâu bên phải, «từng dòng»: Cộng form theo kênh bằng một vòng FETCH là viết lại GROUP BY, chậm hơn, và dễ quên CLOSE.", "Right brown card, “one row at a time”: Summing forms by channel with a FETCH loop is a rewrite of GROUP BY, slower, and easy to forget to CLOSE."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ens-oob": [
    ["gold", "Thẻ vàng bên trái, «dòng bị bỏ»: Out-of-bag là các dòng không được rút vào túi của một cây. Chúng có thể chấm cây đó. Chúng vẫn thuộc tập học, không phải một tháng tương lai.", "Left gold card, “a row left out”: Out-of-bag means the rows not drawn into a tree's bag. They can score that tree. They still belong to the learning set. They are not a future month."],
    ["clay", "Thẻ nâu bên phải, «không phải tháng sau»: Nhân bản người hiếm trước khi chia tập thì một bản sao có thể nằm trong túi và bản sao kia bị gọi là «ngoài túi». Điểm đẹp vì cùng một người.", "Right brown card, “not next month”: Duplicate the rare person before the split and one copy can sit in the bag while the other is called “out of bag”. The score looks good because it is the same person."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-imb-smote": [
    ["gold", "Thẻ vàng bên trái, «một khách thật»: SMOTE nội suy giữa các dòng thiểu số trong không gian các cột số. Điểm mới không phải một người đã mua.", "Left gold card, “a real customer”: SMOTE interpolates between minority rows in the space of the numeric columns. The new point is not a person who bought."],
    ["clay", "Thẻ nâu bên phải, «một điểm nằm giữa»: Làm SMOTE trước khi chia tập thì một điểm nằm giữa có thể đứng một chân ở tập học và một chân ở tập chấm. Đó là rò.", "Right brown card, “a point in between”: Run SMOTE before the split and a point in between can stand with one foot in the learning set and one foot in the scoring set. That is leakage."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-tb-why": [
    ["gold", "Thẻ vàng bên trái, «một câu»: Kéo field mà chưa có câu thì ra một hình không ai quyết được gì.", "Left gold card, “one question”: Drag a field with no question and you get a picture nobody can decide from."],
    ["clay", "Thẻ nâu bên phải, «một trang trí»: Màu, logo, và một bản đồ của những thứ không phải chỗ không trả lời ngân sách tuần sau.", "Right brown card, “a decoration”: Color, a logo, and a map of things that are not places do not answer next week's budget."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-tb-bar": [
    ["gold", "Thẻ vàng bên trái, «cột, không thứ thời gian»: Bar so độ lớn. Line đi theo thứ tự, thường là ngày. Nối các hạng mục không có thứ tự là bịa độ dốc.", "Left gold card, “bars, no time order”: Bars compare size. A line follows an order, usually dates. Connecting categories that have no order invents a slope."],
    ["clay", "Thẻ nâu bên phải, «đường, theo ngày»: Từ GDN sang TikTok không có «tuần tiếp theo». Một đường giữa hai tên là một dốc giả.", "Right brown card, “a line, by date”: There is no “next week” from GDN to TikTok. A line between the two names is a fake slope."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-tb-box": [
    ["gold", "Thẻ vàng bên trái, «một hộp, nhiều dòng»: Box plot cho thấy trung vị và phần giữa, không phải một khách. Map chỉ hợp khi mỗi điểm là một tọa độ hoặc một vùng thật.", "Left gold card, “one box, many rows”: A box plot shows a median and the middle, not one customer. A map only fits when each mark is a real coordinate or a real region."],
    ["clay", "Thẻ nâu bên phải, «bản đồ chỗ giả»: Vẽ ba kênh thành ba nước trên bản đồ là gán một chỗ không có trong dữ liệu.", "Right brown card, “a map of fake places”: Drawing three channels as three countries on a map assigns a place that is not in the data."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-tb-part": [
    ["gold", "Thẻ vàng bên trái, «một tổng»: Pie và treemap cần các phần cùng một tổng, cộng lại thành tổng đó. Nhiều lát thì mắt không so được. Hãy dùng cột.", "Left gold card, “one whole”: A pie and a treemap need shares of one whole that add back to that whole. Many slices and the eye cannot compare. Use bars."],
    ["clay", "Thẻ nâu bên phải, «hai hình tròn»: Form GDN cộng form TikTok cộng form khác phải bằng form của đúng tuần đó. Thiếu một kênh mà vẫn vẽ tròn là một tổng giả.", "Right brown card, “two pies”: GDN forms plus TikTok forms plus the rest must equal that week's forms. Leave out a channel and the pie is a fake whole."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-tb-join": [
    ["gold", "Thẻ vàng bên trái, «một khách một dòng»: Join trong Tableau cùng luật với SQL. Khóa không độc nhất thì một dòng bên trái thành nhiều dòng.", "Left gold card, “one customer, one row”: A join in Tableau follows the same law as SQL. A key that is not unique turns one left-hand row into many."],
    ["clay", "Thẻ nâu bên phải, «một khách nhiều dòng»: Một khách ba lần ghé, nối với một bảng quà một-nhiều, rồi đếm dòng, ra nhiều hơn số khách.", "Right brown card, “one customer, many rows”: One customer with three visits, joined to a one-to-many gift table, then a count of rows, comes out larger than the number of customers."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-tb-calc": [
    ["gold", "Thẻ vàng bên trái, «công thức»: Calculated field là công thức trên dòng hoặc trên một phép cộng. Nó không tạo dữ liệu ngoài file.", "Left gold card, “a formula”: A calculated field is a formula on the row or on an aggregate. It does not create data outside the file."],
    ["clay", "Thẻ nâu bên phải, «một lần đo mới»: form / click viết trong Tableau vẫn là form và click đã có. Click bằng 0 thì công thức vỡ, không phải tỷ lệ 0.", "Right brown card, “a new measurement”: form / click written in Tableau is still the forms and clicks you had. Clicks of 0 break the formula. It is not a rate of 0."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-tb-dual": [
    ["gold", "Thẻ vàng bên trái, «một quyết định»: Dashboard là một trang cho một quyết định. Dual axis là hai measure trên một hình. Không ghi hai đơn vị thì mắt đọc một dốc chung giả.", "Left gold card, “one decision”: A dashboard is one page for one decision. A dual axis is two measures on one picture. Without both units labeled, the eye reads one fake shared slope."],
    ["clay", "Thẻ nâu bên phải, «hai thước một trục»: Form và tiền trên một đường, trục do máy chọn, một tuần tiền tăng nhẹ trông như form gấp đôi.", "Right brown card, “two rulers, one axis”: Forms and money on one line, with an axis the machine picked, make a small rise in money look like forms doubled."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-xa-text": [
    ["gold", "Thẻ vàng bên trái, «vẫn là chữ»: LEFT, RIGHT, MID, TRIM trả chữ. Muốn số thì bọc một lần đổi kiểu có chủ đích.", "Left gold card, “still text”: LEFT, RIGHT, MID, TRIM return text. If you want a number, wrap an explicit cast."],
    ["clay", "Thẻ nâu bên phải, «chưa phải số»: LEFT của «80 form» lấy «80» vẫn là chữ. Cộng cột đó ra 0 hoặc ra nối, tùy ô.", "Right brown card, “not a number yet”: LEFT of “80 form” takes “80” and it is still text. Adding that column gives 0 or joins, depending on the cell."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-xa-count": [
    ["gold", "Thẻ vàng bên trái, «COUNT: chỉ số»: COUNT đếm ô số. COUNTA đếm ô không rỗng, kể cả chữ. COUNTBLANK đếm ô trống.", "Left gold card, “COUNT: numbers only”: COUNT counts numeric cells. COUNTA counts non-empty cells, including text. COUNTBLANK counts empty cells."],
    ["clay", "Thẻ nâu bên phải, «COUNTA: ô có nội dung»: Cột tên 100 khách, COUNT ra 0. Không phải hết khách. Là đếm nhầm hàm.", "Right brown card, “COUNTA: cells with something”: A column of 100 customer names, COUNT returns 0. The customers are not gone. The function was the wrong count."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-xa-match": [
    ["gold", "Thẻ vàng bên trái, «nhìn sang trái»: MATCH trả vị trí của khóa. INDEX lấy ô tại vị trí đó, ở cột bạn chỉ. Cột đó có thể nằm bên trái.", "Left gold card, “look left”: MATCH returns the position of the key. INDEX takes the cell at that position, in the column you point at. That column can sit to the left."],
    ["clay", "Thẻ nâu bên phải, «VLOOKUP không chịu»: Tên kênh nằm cột A, mã nằm cột B. VLOOKUP theo mã không lấy được tên, vì tên ở bên trái. INDEX/MATCH lấy được.", "Right brown card, “VLOOKUP will not”: Channel name in column A, code in column B. VLOOKUP by code cannot fetch the name, because the name is to the left. INDEX/MATCH can."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-xa-what": [
    ["gold", "Thẻ vàng bên trái, «đổi đầu vào»: Data table và scenario đổi các ô đầu vào của một công thức bạn đã viết. Chúng không học từ dữ liệu mới.", "Left gold card, “change the input”: A data table and a scenario change input cells of a formula you already wrote. They do not learn from new data."],
    ["clay", "Thẻ nâu bên phải, «không phải tuần sau»: Đổi giá từ 100 thành 120, lãi trên file đổi theo công thức. Tuần sau giá có thể không phải 120.", "Right brown card, “not next week”: Change the price from 100 to 120 and the profit on the file moves by the formula. Next week's price might not be 120."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-xa-macro": [
    ["gold", "Thẻ vàng bên trái, «lặp các cú bấm»: Macro chạy lại một chuỗi việc đã ghi. Đổi cấu trúc file là chuỗi đó bấm nhầm chỗ.", "Left gold card, “repeats the clicks”: A macro reruns a recorded sequence. Change the file's structure and the sequence clicks the wrong place."],
    ["clay", "Thẻ nâu bên phải, «không chọn hộ»: Ghi macro lúc đang lọc nhầm một kênh thì lần sau nó lọc nhầm tiếp, rất đều.", "Right brown card, “it does not choose”: Record a macro while the wrong channel is filtered and next time it filters the wrong one, very consistently."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-pb-model": [
    ["gold", "Thẻ vàng bên trái, «sai quan hệ»: Model gồm bảng, khóa, và chiều lọc. Visual hỏi model. Hỏi sai model ra số đẹp và sai.", "Left gold card, “a bad relationship”: The model is tables, keys, and filter direction. A visual asks the model. Ask a wrong model and you get a number that is pretty and wrong."],
    ["clay", "Thẻ nâu bên phải, «hình vẫn đẹp»: Một khách nối một-nhiều với đơn, rồi một card đếm dòng đơn, không phải đếm khách. Card vẫn tròn trịa.", "Right brown card, “the visual still looks fine”: One customer joined one-to-many to orders, then a card that counts order rows, is not a count of customers. The card still looks tidy."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-pb-pq": [
    ["gold", "Thẻ vàng bên trái, «một công thức»: Mỗi bước biến bảng. Làm mới thì các bước chạy lại trên nguồn lúc đó. Một cột đã Remove là hết trong model.", "Left gold card, “a recipe”: Each step changes the table. On refresh the steps run again on the source as it is then. A column you removed is gone from the model."],
    ["clay", "Thẻ nâu bên phải, «một cú bấm một lần»: Xóa cột chi phí để «đỡ rối» thì mọi measure về chi phí sau này không có cột để mà rối.", "Right brown card, “a one-time click”: Remove the cost column to “reduce clutter” and every later cost measure has no column left to be cluttered by."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-pb-grain": [
    ["gold", "Thẻ vàng bên trái, «một dòng một đơn»: Grain là ý nghĩa của một dòng trong bảng đang dùng. Mọi count và mọi sum ngồi trên hạt đó.", "Left gold card, “one row, one order”: Grain is what one row means in the table you are using. Every count and every sum sits on that grain."],
    ["clay", "Thẻ nâu bên phải, «không phải một khách»: Bảng đơn: một dòng một dòng hàng. Đếm dòng là đếm dòng hàng, không phải đếm đơn, nếu một đơn có nhiều dòng.", "Right brown card, “not one customer”: An order-line table: one row is one line. A count of rows counts lines, not orders, if one order has many lines."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-pb-dax": [
    ["gold", "Thẻ vàng bên trái, «lưu từng dòng»: Calculated column được tính lúc làm mới và nằm trong từng dòng. Measure được tính khi hình hỏi, trong filter context lúc đó.", "Left gold card, “stored per row”: A calculated column is computed on refresh and sits on each row. A measure is computed when a visual asks, in the filter context of that moment."],
    ["clay", "Thẻ nâu bên phải, «tính lại theo lọc»: Một cột tỷ lệ = form/click của từng dòng không đổi khi bạn lọc một tuần. Measure SUM(form)/SUM(click) đổi theo tuần đang lọc.", "Right brown card, “recomputed under the filter”: A column rate = form/click of each row does not change when you filter to one week. The measure SUM(form)/SUM(click) changes with the week that is filtered."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-pb-page": [
    ["gold", "Thẻ vàng bên trái, «một quyết định»: Một trang Power BI nên để một người làm một việc. Thêm slicer là thêm một cách để họ tự làm lạc câu.", "Left gold card, “one decision”: A Power BI page should let one person do one job. Another slicer is another way for them to wander off the sentence."],
    ["clay", "Thẻ nâu bên phải, «mười slicer»: Trang «tổng hợp» có tám hình và sáu slicer không ai nhớ câu hỏi gốc.", "Right brown card, “ten slicers”: A “summary” page with eight visuals and six slicers means nobody remembers the original question."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-pb-rls": [
    ["gold", "Thẻ vàng bên trái, «slicer: tự tắt được»: Row-level security lọc các dòng một người được phép thấy, theo danh tính của người đó. Nó không phải một bộ lọc trên trang.", "Left gold card, “a slicer: they can turn it off”: Row-level security filters the rows a person is allowed to see, by that person's identity. It is not a filter on the page."],
    ["clay", "Thẻ nâu bên phải, «RLS: không tắt được»: Một slicer để sẵn kênh TikTok vẫn để người đó chọn GDN. RLS thật thì các dòng GDN không có trong mô hình của người đó.", "Right brown card, “RLS: they cannot”: A slicer parked on TikTok still lets that person pick GDN. Real RLS means the GDN rows are not in that person's model."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-pb-refresh": [
    ["gold", "Thẻ vàng bên trái, «kéo lại nguồn»: Scheduled refresh chạy Power Query lại. Thành công thì model đổi theo nguồn. Thất bại thì model cũ còn đó, rất im.", "Left gold card, “pull the source again”: A scheduled refresh reruns Power Query. If it succeeds, the model follows the source. If it fails, the old model stays, very quietly."],
    ["clay", "Thẻ nâu bên phải, «không lưu hôm qua»: Lịch 6 giờ sáng lỗi từ thứ Hai. Thứ Năm bạn vẫn thấy số Chủ nhật. Không có một measure nào «nhớ» là số đã cũ.", "Right brown card, “it does not store yesterday”: The 6am schedule has failed since Monday. On Thursday you still see Sunday's number. No measure “remembers” that the number is old."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-fw-5why": [
    ["gold", "Thẻ vàng bên trái, «dừng ở nút xoay»: Mỗi vì sao phải là một cơ chế, không phải một tính từ. Dừng khi câu tiếp theo là một thay đổi trong quy trình mà hạn này làm được.", "Left gold card, “stop at a lever”: Each why has to be a mechanism, not an adjective. Stop when the next sentence is a process change this window can make."],
    ["clay", "Thẻ nâu bên phải, «dừng ở «do người»»: «Nhân viên quên» là một chỗ dừng quá sớm. Câu sau có thể là «không có checklist trước khi gửi». Cái đó xoay được.", "Right brown card, “stop at “a person””: “The staff forgot” is too early a stop. The next sentence might be “there is no checklist before sending”. That one you can turn."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-fw-spin": [
    ["gold", "Thẻ vàng bên trái, «bốn kiểu hỏi»: Situation hỏi việc đang chạy thế nào. Problem hỏi chỗ đang kẹt. Implication hỏi kẹt đó kéo theo gì. Need-payoff hỏi nếu hết kẹt thì cái gì khá lên.", "Left gold card, “four kinds of question”: Situation asks how the job runs now. Problem asks where it is stuck. Implication asks what the stuck part drags with it. Need-payoff asks what gets better if it is unstuck."],
    ["clay", "Thẻ nâu bên phải, «một kịch bản gài»: Hỏi xoáy cho đối phương phải nói «có» không phải SPIN. Đó là một mánh. SPIN không chứng minh một giải pháp.", "Right brown card, “a script that traps”: Pushing questions until the other person must say “yes” is not SPIN. That is a trick. SPIN does not prove a solution."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-fw-ask": [
    ["gold", "Thẻ vàng bên trái, «còn đang hỏi»: Danh sách câu hỏi là một dụng cụ. Câu trả lời mới là nguyên liệu. Nguyên liệu chưa kiểm thì chưa thành khuyến nghị.", "Left gold card, “still asking”: A list of questions is a tool. The answers are the material. Unchecked material is not a recommendation yet."],
    ["clay", "Thẻ nâu bên phải, «đã kết luận»: Năm câu hỏi hay không bằng một số đo lại được.", "Right brown card, “already a verdict”: Five good questions are not equal to one number you can remeasure."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-fw-bmc": [
    ["gold", "Thẻ vàng bên trái, «chín giả thuyết»: Business model canvas có chín ô: phân khúc, giá trị, kênh, quan hệ khách, dòng doanh thu, nguồn lực, hoạt động chính, đối tác, cơ cấu chi phí.", "Left gold card, “nine hypotheses”: The business model canvas has nine boxes: segments, value, channels, customer relationships, revenue streams, resources, key activities, partners, cost structure."],
    ["clay", "Thẻ nâu bên phải, «chín sự thật»: Viết «khách trẻ thích trải nghiệm» trong ô phân khúc là một giả thuyết. Không có một cuộc đếm nào ở trong cây bút.", "Right brown card, “nine facts”: Writing “young customers like experiences” in the segment box is a hypothesis. There is no count inside the pen."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-fw-mece": [
    ["gold", "Thẻ vàng bên trái, «chồng nhau»: Mutually exclusive: một thứ chỉ nằm một nhánh. Collectively exhaustive: mọi thứ câu hỏi cần đều có nhánh.", "Left gold card, “they overlap”: Mutually exclusive: a thing sits in only one branch. Collectively exhaustive: everything the question needs has a branch."],
    ["clay", "Thẻ nâu bên phải, «không chồng, đủ»: Chia form thành «kênh mới» và «TikTok» thì TikTok mới bị đếm hai lần. Quên kênh cũ thì bị sót.", "Right brown card, “no overlap, and complete”: Split forms into “new channels” and “TikTok” and a new TikTok is counted twice. Forget the old channels and you have a gap."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-fw-7p": [
    ["gold", "Thẻ vàng bên trái, «bảy mục kiểm»: Product, price, place, promotion, people, process, physical evidence. Bảy mục. Không có thứ tự ai thắng.", "Left gold card, “seven checks”: Product, price, place, promotion, people, process, physical evidence. Seven items. No order of who wins."],
    ["clay", "Thẻ nâu bên phải, «bảy hạng»: Cho promotion 5 điểm và process 2 điểm là một cuộc chấm không có công thức. Hai mục không cùng đơn vị.", "Right brown card, “seven ranks”: Giving promotion 5 points and process 2 points is a scoring with no formula. The two items do not share a unit."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-fw-5c": [
    ["gold", "Thẻ vàng bên trái, «năm phía»: Company, customers, competitors, collaborators, climate. Năm phía. Mỗi phía một số hoặc một câu kiểm được.", "Left gold card, “five sides”: Company, customers, competitors, collaborators, climate. Five sides. Each side gets a number or a sentence you can check."],
    ["clay", "Thẻ nâu bên phải, «năm tính từ»: «Đối thủ mạnh» là một tính từ. «Đối thủ đang lấy cùng một từ khóa với giá thầu cao hơn» là một câu kiểm được.", "Right brown card, “five adjectives”: “The competitor is strong” is an adjective. “The competitor is buying the same keyword at a higher bid” is a sentence you can check."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-st-shape": [
    ["gold", "Thẻ vàng bên trái, «có chỗ kẹt»: Context là cái đang bình thường. Conflict là chỗ không còn bình thường. Resolution là việc bạn muốn được chốt.", "Left gold card, “there is a stuck place”: Context is what was normal. Conflict is where it is no longer normal. Resolution is the decision you want closed."],
    ["clay", "Thẻ nâu bên phải, «chỉ có một hình»: Một cột form không có chỗ kẹt thì người nghe không biết phải làm gì với cột đó.", "Right brown card, “only a picture”: A bar of forms with no stuck place means the listener does not know what to do with the bar."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-st-who": [
    ["gold", "Thẻ vàng bên trái, «năm phút, một việc»: Audience là người trong phòng: họ quyết định được việc gì, họ đã tin gì, họ có bao lâu.", "Left gold card, “five minutes, one job”: The audience is the person in the room: what they are allowed to decide, what they already believe, and how long they have."],
    ["clay", "Thẻ nâu bên phải, «cả sổ tay»: Một founder có năm phút không cần thấy từng bước làm sạch. Một analyst cần, nếu việc của họ là kiểm hạt.", "Right brown card, “the whole notebook”: A founder with five minutes does not need every cleaning step. An analyst does, if their job is to check the grain."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-st-insight": [
    ["gold", "Thẻ vàng bên trái, «xu hướng»: Trend là theo thời gian. Difference là giữa các nhóm. Share là phần của một tổng. Outlier là một điểm tách đám. Together là hai thứ đi cùng nhau, chưa phải nguyên nhân.", "Left gold card, “a trend”: Trend is over time. Difference is between groups. Share is part of one whole. Outlier is a point apart from the group. Together means two things move together, which is not yet a cause."],
    ["clay", "Thẻ nâu bên phải, «không phải hình tròn»: «Form và chi cùng tăng» là together. Nó không phải «chi gây ra form». C2 đã nói đi cùng không phải nguyên nhân.", "Right brown card, “not a pie”: “Forms and spend rise together” is together. It is not “spend causes forms”. C2 already said moving together is not a cause."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-st-pyramid": [
    ["gold", "Thẻ vàng bên trái, «câu chốt trước»: Kim tự tháp: câu trả lời ở đỉnh, dưới là các lý do cùng một tầng, dưới nữa là bằng chứng của từng lý do.", "Left gold card, “the decision first”: The pyramid: the answer at the top, the reasons on one level under it, the evidence for each reason under that."],
    ["clay", "Thẻ nâu bên phải, «để đến slide cuối»: Mười phút dẫn dắt rồi mới nói «nên cắt kênh» là mười phút người nghe không biết mình đang đi đâu.", "Right brown card, “saved for the last slide”: Ten minutes of buildup before “we should cut the channel” is ten minutes the listener does not know where they are going."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-st-one": [
    ["gold", "Thẻ vàng bên trái, «một thông điệp»: Một trang một thông điệp. Nếu bạn cần chữ «và» để nối hai quyết định, đó là hai trang.", "Left gold card, “one message”: One page, one message. If you need the word “and” to join two decisions, that is two pages."],
    ["clay", "Thẻ nâu bên phải, «hai tiêu đề»: «Cắt kênh này và làm lại thương hiệu» là hai việc. Một slide làm cả hai thì không việc nào được chốt.", "Right brown card, “two headlines”: “Cut this channel and redo the brand” is two jobs. One slide that does both closes neither."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-st-board": [
    ["gold", "Thẻ vàng bên trái, «thứ tự câu»: Mỗi khung là một câu, một hình, và việc người nghe làm với khung đó. Đổi thứ tự là đổi lập luận.", "Left gold card, “the order of sentences”: Each frame is one sentence, one picture, and what the listener does with that frame. Change the order and you change the argument."],
    ["clay", "Thẻ nâu bên phải, «một bảng màu»: Chọn xong màu mà chưa có thứ tự các câu thì chưa có chuyện. Chỉ có một tập slide.", "Right brown card, “a color palette”: Pick the colors with no order of sentences and you have no story. You have a pile of slides."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-or-obj": [
    ["gold", "Thẻ vàng bên trái, «cái cần cực đại»: Objective là hàm cần cực đại hoặc cực tiểu. Decision variable là những số bạn được chọn. Chúng không phải cùng một ô.", "Left gold card, “what you maximize”: The objective is the function to maximize or minimize. Decision variables are the numbers you are allowed to choose. They are not the same cell."],
    ["clay", "Thẻ nâu bên phải, «cái bạn được chọn»: «Tối đa doanh thu» mà ô doanh thu lại là ô bạn gõ tay thì bạn đang gõ kết quả, không đang chọn.", "Right brown card, “what you are allowed to choose”: “Maximize revenue” while the revenue cell is a cell you type means you are typing the result, not choosing."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-or-con": [
    ["gold", "Thẻ vàng bên trái, «tiêu một lần»: Constraint là một bất đẳng thức trên các biến. Tổng sử dụng không vượt quá lượng có, trừ khi bạn viết một giới hạn khác và chịu nó.", "Left gold card, “spent once”: A constraint is an inequality on the variables. Total use does not exceed what you have, unless you wrote a different limit and you accept it."],
    ["clay", "Thẻ nâu bên phải, «cộng vượt»: Ba kênh mỗi kênh xin cả ngân sách tháng thì không phải ba phương án cùng khả thi. Đó là một giới hạn bị viết thiếu.", "Right brown card, “added past the limit”: Three channels each asking for the whole month's budget are not three feasible options together. That is a constraint you forgot to write."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-or-sens": [
    ["gold", "Thẻ vàng bên trái, «còn đúng góc này»: Shadow price là mức mục tiêu đổi khi nới một ràng buộc một đơn vị, trong khoảng góc hiện tại còn là góc tối ưu.", "Left gold card, “still this corner”: The shadow price is how the objective moves when you loosen one constraint by one unit, inside the range where the current corner stays optimal."],
    ["clay", "Thẻ nâu bên phải, «đã sang góc khác»: Nới ngân sách thêm một ít mà góc các kênh vẫn vậy thì giá bóng dùng được. Nới đến mức một kênh bị tắt hẳn thì giá bóng cũ hết hạn.", "Right brown card, “already another corner”: Loosen the budget a little and the channel corner stays: the shadow price still applies. Loosen it until a channel turns off entirely and the old shadow price has expired."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-or-solv": [
    ["gold", "Thẻ vàng bên trái, «tìm một góc»: Với ràng buộc tuyến tính và mục tiêu tuyến tính, phương án tối ưu nằm ở một đỉnh. Phi tuyến có thể có nhiều chỗ lõm. Solver dừng ở một chỗ không có nghĩa hết chỗ khác tốt hơn.", "Left gold card, “finds a corner”: With linear constraints and a linear objective, an optimum sits at a vertex. A nonlinear problem can have many dents. A solver stopping does not mean there is no better place."],
    ["clay", "Thẻ nâu bên phải, «dừng ở một lõm»: Một hàm lãi cong theo giá. Solver từ một giá xuất phát có thể dừng ở một đỉnh cục bộ. Đổi điểm xuất phát ra một số khác.", "Right brown card, “stops in a dent”: A profit function curved in price. A solver from one starting price can stop at a local peak. Start from another price and you can get another number."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-or-sheet": [
    ["gold", "Thẻ vàng bên trái, «ô được trỏ»: Ô mục tiêu, các ô biến, từng dòng giới hạn: solver không đọc phần còn lại của sheet.", "Left gold card, “a cell that is pointed at”: The objective cell, the variable cells, each constraint row: the solver does not read the rest of the sheet."],
    ["clay", "Thẻ nâu bên phải, «một ghi chú»: Bạn ghi «tối đa 40 suất» ở một ô chữ bên cạnh. Không đưa ô đó vào constraints thì 40 không tồn tại với solver.", "Right brown card, “a note”: You type “at most 40 slots” in a text cell nearby. If that cell is not in the constraints, 40 does not exist for the solver."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ga-next": [
    ["gold", "Thẻ vàng bên trái, «chữ kế tiếp»: Mô hình chấm các mảnh chữ có thể đứng tiếp theo. Nó không mở file giá của bạn trừ khi đoạn chữ đó đang nằm trong prompt.", "Left gold card, “the next text”: The model scores pieces of text that might come next. It does not open your price file unless that text is already in the prompt."],
    ["clay", "Thẻ nâu bên phải, «không tra bảng»: Hỏi «giá gói tháng này» mà không đưa bảng giá thì câu trả lời là một câu hợp lệ, không phải một dòng trong bảng.", "Right brown card, “not a table lookup”: Ask “this month's package price” without giving the price table and the answer is a grammatical sentence, not a row in the table."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ga-vs": [
    ["gold", "Thẻ vàng bên trái, «đoán một cột»: Một model churn trả một xác suất trên một dòng khách. Một mô hình sinh trả một đoạn chữ. Thước của hai việc khác nhau.", "Left gold card, “predict a column”: A churn model returns a probability on one customer row. A generative model returns a piece of text. The measures of the two jobs differ."],
    ["clay", "Thẻ nâu bên phải, «nối chữ»: Accuracy của một lớp hiếm không phải thước của một đoạn chat. Một đoạn chat hay không phải một AUC.", "Right brown card, “continue text”: Accuracy on a rare class is not the measure of a chat paragraph. A pleasant paragraph is not an AUC."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ga-stack": [
    ["gold", "Thẻ vàng bên trái, «đổi dữ liệu đưa vào»: Model là trọng số. Data là cái bạn đưa vào lần gọi này. Product là việc người dùng làm với câu trả lời.", "Left gold card, “change the data you pass”: The model is the weights. The data is what you pass on this call. The product is what the user does with the answer."],
    ["clay", "Thẻ nâu bên phải, «đổi trọng số»: Sửa một câu trong prompt là sửa data của lần gọi. Không phải fine-tune. Không phải một sản phẩm mới.", "Right brown card, “change the weights”: Editing a sentence in the prompt edits the data of that call. It is not a fine-tune. It is not a new product."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ga-use": [
    ["gold", "Thẻ vàng bên trái, «có giá của một lần sai»: Một việc GenAI cần một người chịu, một đầu ra, và một cách xử lý khi đầu ra sai. Demo không có ba thứ đó.", "Left gold card, “there is a cost of being wrong”: A GenAI job needs an owner, an output, and a way to handle a wrong output. A demo has none of the three."],
    ["clay", "Thẻ nâu bên phải, «một demo»: Một đoạn chat viết được bài quảng cáo. Đưa nhầm giá vào bài đó thì cái giá là tiền và lòng tin, không phải «chữ chưa hay».", "Right brown card, “a demo”: A chat can write an ad. Put the wrong price in that ad and the cost is money and trust, not “the prose is not nice yet”."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ga-chat": [
    ["gold", "Thẻ vàng bên trái, «chỉ thấy message này»: Một lần gọi nhận một danh sách message: system, user, và có thể là các lượt trước bạn tự gửi lại. Không gửi lại thì không còn.", "Left gold card, “it only sees these messages”: One call receives a list of messages: system, user, and maybe earlier turns you send again yourself. If you don't send them again, they are gone."],
    ["clay", "Thẻ nâu bên phải, «không nhớ hộ»: Hôm qua bạn nói giá trong một phiên khác. Hôm nay một request mới không kèm câu đó thì mô hình không «nhớ giá hôm qua».", "Right brown card, “it does not remember for you”: Yesterday you said a price in another session. Today a new request without that sentence means the model does not “remember yesterday's price”."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ga-temp": [
    ["gold", "Thẻ vàng bên trái, «đa dạng hơn»: Temperature cao: các mảnh ít điểm hơn vẫn có cơ hội được chọn. Thấp: nghiêng về mảnh điểm cao. Không mảnh nào trở thành một dòng trong bảng giá nhờ nút này.", "Left gold card, “more variety”: High temperature: lower-scoring pieces still get a chance. Low: it leans toward the high-scoring piece. No piece becomes a row in the price table because of this knob."],
    ["clay", "Thẻ nâu bên phải, «không đúng hơn»: Hạ temperature mà bảng giá không nằm trong message thì câu vẫn có thể viết sai giá, chỉ ít bay hơn.", "Right brown card, “not more true”: Lower the temperature while the price table is not in the messages and the sentence can still write the wrong price. It just wanders less."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ga-tok": [
    ["gold", "Thẻ vàng bên trái, «dài ra là đắt»: Bạn trả theo token vào và token ra. Một trần ngữ cảnh cắt phần không còn chỗ. Phần bị cắt là phần mô hình không thấy.", "Left gold card, “longer costs more”: You pay for tokens in and tokens out. A context ceiling cuts what no longer fits. The cut part is the part the model does not see."],
    ["clay", "Thẻ nâu bên phải, «quá trần thì cụt»: Dán 200 trang chính sách vào một lần gọi có thể tốn tiền và vẫn mất đúng trang có điều khoản bạn cần, nếu trang đó bị cắt.", "Right brown card, “past the ceiling it cuts”: Pasting 200 pages of policy into one call can cost money and still lose the page with the clause you need, if that page is what gets cut."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ga-prompt": [
    ["gold", "Thẻ vàng bên trái, «đủ ba phần»: Task là làm gì. Context là tài liệu và các ràng buộc của lần này. Format là đầu ra trông thế nào, để máy hoặc người sau đọc được.", "Left gold card, “the three parts”: The task is what to do. The context is the documents and the limits of this call. The format is what the output should look like, so a machine or the next person can read it."],
    ["clay", "Thẻ nâu bên phải, «một lời cổ vũ»: «Viết cho hay» không nói dùng bảng nào, cũng không nói cần một đoạn hay một bảng.", "Right brown card, “a pep talk”: “Write it well” does not say which table to use, and does not say whether you need a paragraph or a table."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ga-few": [
    ["gold", "Thẻ vàng bên trái, «một dạng để bắt chước»: Bạn đưa một vài đầu vào và đầu ra mẫu. Mô hình noi dạng. Các mẫu không phải một tập chấm, cũng không phải một khảo sát.", "Left gold card, “a shape to copy”: You give a few sample inputs and outputs. The model follows the shape. The samples are not a scoring set, and they are not a survey."],
    ["clay", "Thẻ nâu bên phải, «không phải bằng chứng»: Hai ví dụ «khách trẻ thì thích A» không đo được khách trẻ. Nó chỉ dạy mô hình viết theo kiểu đó.", "Right brown card, “not evidence”: Two examples of “young customers like A” do not measure young customers. They only teach the model to write in that style."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-ga-cot": [
    ["gold", "Thẻ vàng bên trái, «các bước trôi»: Xin mô hình viết từng bước có thể đổi câu trả lời. Các bước có thể mạch lạc và sai.", "Left gold card, “fluent steps”: Asking the model to write steps can change the answer. The steps can be coherent and wrong."],
    ["clay", "Thẻ nâu bên phải, «không phải chứng minh»: Một chuỗi «vì A nên B nên giá là 100» không tra bảng. Nó chỉ là một chuỗi chữ.", "Right brown card, “not a proof”: A chain “because A, therefore B, therefore the price is 100” does not look up a table. It is only a chain of text."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-sa-tune": [
    ["gold", "Thẻ vàng bên trái, «đổi trọng số»: Fine-tune chỉnh trọng số bằng các ví dụ huấn luyện. RAG để nguyên trọng số và nhét các đoạn tài liệu vào prompt rồi mới viết.", "Left gold card, “change the weights”: Fine-tune adjusts weights with training examples. RAG leaves the weights and puts document passages into the prompt before writing."],
    ["clay", "Thẻ nâu bên phải, «đổi tài liệu»: Giá đổi mỗi sáng. Fine-tune đêm qua không biết giá sáng nay. RAG chỉ biết nếu đoạn giá sáng nay được đưa vào lần gọi.", "Right brown card, “change the documents”: The price changes every morning. Last night's fine-tune does not know this morning's price. RAG only knows if this morning's price passage is put into the call."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-sa-react": [
    ["gold", "Thẻ vàng bên trái, «có kết quả công cụ»: ReAct là reason rồi act bằng một công cụ, rồi observe đúng cái công cụ trả về. Quan sát không phải một câu mô hình ước.", "Left gold card, “there is a tool result”: ReAct is reason, then act with a tool, then observe exactly what the tool returned. The observation is not a sentence the model guesses."],
    ["clay", "Thẻ nâu bên phải, «tự bịa đã tra»: Không có dòng log gọi catalog thì không được nói tồn kho. Dù câu chữ rất chắc.", "Right brown card, “invents that it looked”: With no log line that called the catalog, you may not state the stock. Even if the sentence is very sure."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-sa-stage": [
    ["gold", "Thẻ vàng bên trái, «ba chặng»: Chặng một là nói dựa trên prompt. Chặng hai là công cụ và catalog. Chặng ba là chấm các ca đã có. Sổ không bịa lời thoại của một cuộc gọi.", "Left gold card, “three stages”: Stage one is talking from the prompt. Stage two is the tool and the catalog. Stage three is scoring cases you already have. The notebook does not invent the lines of a call."],
    ["clay", "Thẻ nâu bên phải, «một thoại bịa»: Một đoạn «khách nói: cho tôi gói 2 triệu» không có trong tài liệu thì đừng thêm vào để bài dễ chấm.", "Right brown card, “an invented transcript”: A line “the customer said: give me the 2-million package” is not in the material, so don't add it to make the case easier to score."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-sa-tool": [
    ["gold", "Thẻ vàng bên trái, «số từ catalog»: Công cụ catalog nhận một mã và trả các trường đang có: giá, tồn, điều kiện. Thiếu mã thì không có số.", "Left gold card, “a number from the catalog”: The catalog tool takes a code and returns the fields that exist: price, stock, conditions. No code, no number."],
    ["clay", "Thẻ nâu bên phải, «số từ câu hay»: Model viết «khoảng 2 triệu» trong khi catalog không được gọi. Đó không phải một ước lượng. Đó là một số bịa.", "Right brown card, “a number from a fluent sentence”: The model writes “about 2 million” while the catalog was not called. That is not an estimate. That is an invented number."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-sa-score": [
    ["gold", "Thẻ vàng bên trái, «giống nhau»: Self-consistency là chạy vài lần rồi lấy câu hay gặp. Các lần cùng bịa một giá thì câu hay gặp vẫn là giá bịa.", "Left gold card, “they agree”: Self-consistency is several runs, then the sentence that shows up most. If the runs invent the same price, the frequent sentence is still an invented price."],
    ["clay", "Thẻ nâu bên phải, «không phải đã đúng»: Năm lần cùng nói «còn hàng» trong khi catalog nói hết thì sự nhất trí là năm lần sai.", "Right brown card, “not the same as correct”: Five runs all say “in stock” while the catalog says none left. The agreement is five wrong runs."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-rag-why": [
    ["gold", "Thẻ vàng bên trái, «file ở ngoài»: RAG tìm một vài đoạn rồi để mô hình viết có các đoạn đó trong prompt. Không tìm thì mô hình không thấy file.", "Left gold card, “the file is outside”: RAG finds a few passages and lets the model write with those passages in the prompt. If it does not find them, the model does not see the file."],
    ["clay", "Thẻ nâu bên phải, «đoạn được đưa vào»: Hỏi chính sách hoàn tiền mà không retrieval thì câu trả lời không đứng trên chính sách của công ty.", "Right brown card, “a passage is put in”: Ask the refund policy with no retrieval and the answer does not stand on the company's policy."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-rag-emb": [
    ["gold", "Thẻ vàng bên trái, «gần hướng»: Embedding đặt một đoạn chữ thành một vectơ. Đoạn gần nhau thì góc gần. Gần không có nghĩa là cùng một điều khoản, và cũng không có nghĩa là chứa đúng từ bạn gõ.", "Left gold card, “near in direction”: An embedding turns a passage into a vector. Nearby passages have a nearby angle. Near does not mean the same clause, and it does not mean it contains the exact word you typed."],
    ["clay", "Thẻ nâu bên phải, «không phải đúng điều khoản»: «Được hoàn khi lỗi của shop» và «không được hoàn khi lỗi của shop» có thể nằm gần nhau vì cùng các chữ. Gần mà trái nghĩa.", "Right brown card, “not the correct clause”: “Refunds are allowed when the shop is at fault” and “refunds are not allowed when the shop is at fault” can sit near each other because they share words. Near, and opposite."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-rag-chunk": [
    ["gold", "Thẻ vàng bên trái, «còn cả điều khoản»: Chunk là mảnh bạn cắt từ file để tìm và để nhét vào prompt. Mảnh cụt mất điều kiện phía sau thì mô hình chỉ thấy nửa luật.", "Left gold card, “the whole clause”: A chunk is a piece you cut from the file to search and to put in the prompt. A piece that loses the condition after it means the model only sees half the rule."],
    ["clay", "Thẻ nâu bên phải, «chỉ còn một nửa»: «Được hoàn tiền» nằm một mảnh, «trừ khi đã qua 7 ngày» nằm mảnh sau không được tìm. Câu trả lời sẽ cho hoàn.", "Right brown card, “only a half remains”: “Refunds are allowed” sits in one piece, “unless 7 days have passed” sits in the next piece and is not retrieved. The answer will allow the refund."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-rag-vec": [
    ["gold", "Thẻ vàng bên trái, «top-1»: Vector store trả các đoạn gần nhất. Gần nhất trong kho hiện tại vẫn có thể là đoạn sai, đoạn cũ, hoặc một nửa điều khoản.", "Left gold card, “top-1”: A vector store returns the nearest passages. The nearest in the current store can still be the wrong passage, an old passage, or half a clause."],
    ["clay", "Thẻ nâu bên phải, «chưa đối chiếu»: Điểm 0,91 của một mục quảng cáo không thắng điểm 0,86 của đúng điều khoản, nếu bạn không đọc.", "Right brown card, “not checked yet”: A score of 0.91 on an ad does not beat a score of 0.86 on the real clause, if you don't read."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-rag-idx": [
    ["gold", "Thẻ vàng bên trái, «file đã đổi»: Index là bản các đoạn đã cắt và đã embedding. Sửa file nguồn không sửa index, trừ khi bạn xây lại.", "Left gold card, “the file changed”: The index is the cut, embedded passages. Editing the source file does not edit the index, unless you build it again."],
    ["clay", "Thẻ nâu bên phải, «mục lục chưa đổi»: Sửa một câu trong PDF rồi hỏi ngay. Câu mới không có trong index. Câu trả lời bám câu cũ.", "Right brown card, “the index has not”: Edit one sentence in the PDF and ask immediately. The new sentence is not in the index. The answer sticks to the old sentence."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-rag-rank": [
    ["gold", "Thẻ vàng bên trái, «xếp lại đoạn đang có»: Re-ranker chấm lại một danh sách đoạn đã tìm. Đoạn không nằm trong danh sách đó không được chấm.", "Left gold card, “reorders what you have”: A re-ranker scores again a list of passages already retrieved. A passage that is not in that list does not get scored."],
    ["clay", "Thẻ nâu bên phải, «không thêm đoạn»: Top-20 toàn là FAQ. Re-rank chọn FAQ nghe hợp nhất. Điều khoản không có trong 20 thì không thắng.", "Right brown card, “it adds no passage”: The top 20 are all FAQ. The re-rank picks the FAQ that sounds best. A clause that is not in the 20 does not win."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-rag-near": [
    ["gold", "Thẻ vàng bên trái, «một lần chạy»: Demo là một câu hỏi bạn chọn vì nó chạy được. Bộ ca gồm cả câu cố ý khó: trái nghĩa, điều khoản bị cắt, file mới hơn index.", "Left gold card, “one run”: A demo is a question you picked because it runs. A case set includes questions that are hard on purpose: an opposite, a cut clause, a file newer than the index."],
    ["clay", "Thẻ nâu bên phải, «một bộ ca»: Một câu trên slide ra đúng đoạn. Ba câu khách sẽ hỏi thì chưa được nhìn. Demo không kể ba câu đó.", "Right brown card, “a set of cases”: One question on the slide returns the right passage. The three questions a customer will ask have not been looked at. The demo does not mention those three."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-rag-store": [
    ["gold", "Thẻ vàng bên trái, «đúng tên kho»: Vector store giữ các đoạn theo collection. Hỏi một collection thì các collection kia đứng im.", "Left gold card, “the right store name”: A vector store keeps passages by collection. Ask one collection and the others sit still."],
    ["clay", "Thẻ nâu bên phải, «kho bên cạnh không được hỏi»: Giá ở collection catalog, chính sách ở collection policy. Lần gọi chỉ mở catalog thì không thấy chính sách, dù hai kho cùng một máy.", "Right brown card, “the store next to it is not asked”: Prices live in the catalog collection, the policy in the policy collection. A call that only opens catalog does not see the policy, even if both stores are on the same machine."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-rag-demo": [
    ["gold", "Thẻ vàng bên trái, «ống chạy»: In được một câu là hệ thống sống. Đúng hay sai là việc của các ca: đoạn nào vào prompt, có thêm số không có trong đoạn không.", "Left gold card, “the pipe runs”: Printing a sentence means the system is alive. Right or wrong is the job of the cases: which passage entered the prompt, and whether a number that is not in the passage was added."],
    ["clay", "Thẻ nâu bên phải, «chưa chấm»: Demo in một câu hoàn tiền nghe ổn. Không ai ghi đoạn nào đã vào. Không có gì để chấm.", "Right brown card, “not scored yet”: The demo prints a refund sentence that sounds fine. Nobody writes down which passage entered. There is nothing to score."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-im-grid": [
    ["gold", "Thẻ vàng bên trái, «một lưới số»: Mỗi ô lưới là một giá trị màu. Mô hình tạo các giá trị đó. Nó không chụp một nơi có thật chỉ vì câu chữ nhắc tên nơi đó.", "Left gold card, “a grid of numbers”: Each cell of the grid is a color value. The model creates those values. It does not photograph a real place just because the text names the place."],
    ["clay", "Thẻ nâu bên phải, «không phải biên bản»: Một ảnh «cửa hàng của mình» do mô hình viết không phải ảnh cửa hàng, trừ khi bạn đưa ảnh cửa hàng vào và vẫn phải kiểm.", "Right brown card, “not a record”: A picture of “our shop” that the model wrote is not a picture of the shop, unless you passed a picture of the shop in, and you still have to check."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-im-vae": [
    ["gold", "Thẻ vàng bên trái, «giữ cái chung»: Bộ mã hóa nén. Bộ giải nén dựng một lưới gần. Những chi tiết ít gặp bị hy sinh vì chỗ trong vectơ không đủ.", "Left gold card, “keeps what is common”: The encoder compresses. The decoder builds a nearby grid. Rare details are sacrificed because the vector does not have room."],
    ["clay", "Thẻ nâu bên phải, «mất cái riêng»: Một khuôn mặt cụ thể sau một vòng nén-giải có thể còn giống một khuôn mặt, mất nốt ruồi. Đó không phải ảnh gốc.", "Right brown card, “the particular is gone”: A specific face after a compress-and-decode can still look like a face, and lose a mole. That is not the original photo."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-im-gan": [
    ["gold", "Thẻ vàng bên trái, «qua mặt người chê»: Generator giả. Discriminator chê. Khi kẻ giả qua mặt được người chê, ảnh trông giống tập luyện. Tập luyện không phải thế giới hôm nay.", "Left gold card, “gets past the critic”: The generator forges. The discriminator criticizes. When the forger gets past the critic, the picture looks like the training set. The training set is not the world today."],
    ["clay", "Thẻ nâu bên phải, «không phải đã xảy ra»: Một ảnh sản phẩm qua được discriminator vẫn có thể là một sản phẩm không có trong catalog của bạn.", "Right brown card, “not something that happened”: A product picture that gets past the discriminator can still be a product that is not in your catalog."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-im-diff": [
    ["gold", "Thẻ vàng bên trái, «gỡ nhiễu»: Xuất phát từ nhiễu, mỗi bước bớt nhiễu một chút, ra một lưới trông như ảnh. Không bước nào là một câu SELECT.", "Left gold card, “undo noise”: Start from noise, each step removes a little noise, and you get a grid that looks like a photo. No step is a SELECT."],
    ["clay", "Thẻ nâu bên phải, «không tra kho»: Nhắc tên một cửa hàng không làm bước gỡ nhiễu mở file ảnh cửa hàng đó.", "Right brown card, “not a library lookup”: Naming a shop does not make the denoising step open that shop's photo file."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-im-txt": [
    ["gold", "Thẻ vàng bên trái, «lái»: Một prompt nói chủ đề, kiểu, và các thứ không muốn. Ảnh ra bám các chữ đó theo cách mô hình biết. Nó không ký nhận ảnh là hàng thật, người thật, hay thương hiệu của bạn.", "Left gold card, “steers”: A prompt says the subject, the style, and what you don't want. The picture follows those words the way the model knows how. It does not sign that the picture is real stock, a real person, or your brand."],
    ["clay", "Thẻ nâu bên phải, «không chứng nhận»: Gõ tên một sản phẩm của bạn. Ảnh có thể mang một logo gần giống, sai chi tiết, và không phải file nhận diện đã duyệt.", "Right brown card, “does not certify”: Type your product's name. The picture may carry a near-logo, wrong in the details, and it is not the approved identity file."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-rag-job": [
    ["gold", "Thẻ vàng bên trái, «trong tài liệu được giao»: Nếu một điều khoản không nằm trong tập tài liệu của bài, câu trả lời không được lấy nó từ chỗ khác, kể cả từ một lần huấn luyện.", "Left gold card, “in the given documents”: If a clause is not in the assignment's documents, the answer may not take it from somewhere else, including from a training run."],
    ["clay", "Thẻ nâu bên phải, «từ trí nhớ»: Đề là các văn bản được giao. Một điều luật bạn «nhớ» không nằm trong tập đó thì không được viết vào câu trả lời như thể nó ở trong tập.", "Right brown card, “from memory”: The brief is the documents you were given. A rule you “remember” that is not in that set may not be written into the answer as if it were in the set."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-lc-tpl": [
    ["gold", "Thẻ vàng bên trái, «điền từ dữ liệu»: Template có các biến. Biến không được truyền thì chỗ đó trống hoặc lỗi, tùy cách bạn viết. Đừng bắt mô hình «tự hiểu chỗ trống».", "Left gold card, “filled from data”: A template has variables. A variable you don't pass is empty or an error, depending on how you wrote it. Don't ask the model to “understand the blank”."],
    ["clay", "Thẻ nâu bên phải, «trống và bịa»: Biến `policy` không được truyền. Mô hình vẫn viết một chính sách. Đó là một chính sách không nguồn.", "Right brown card, “empty, then invented”: The `policy` variable is not passed. The model still writes a policy. That policy has no source."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-lc-parse": [
    ["gold", "Thẻ vàng bên trái, «đúng dạng»: Bạn xin JSON hoặc một bảng các trường. Model viết một đoạn văn. Parser không đọc được. Đó là lúc dừng.", "Left gold card, “the shape holds”: You ask for JSON or a table of fields. The model writes a paragraph. The parser cannot read it. That is when you stop."],
    ["clay", "Thẻ nâu bên phải, «vỡ thì dừng»: Bắt lỗi rồi điền `{\"price\": 0}` là biến một lần vỡ thành một giá 0. Khách có thể bị thu 0.", "Right brown card, “if it breaks, stop”: Catch the error and fill `{\"price\": 0}` and you turn one break into a price of 0. A customer might be charged 0."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-lc-agent": [
    ["gold", "Thẻ vàng bên trái, «đường đã vẽ»: Chain gọi các bước theo thứ tự bạn viết: khuôn, model, parser, có thể một công cụ. Agent chọn công cụ kế tiếp dựa trên chữ nó vừa viết.", "Left gold card, “a path you drew”: A chain calls steps in the order you wrote: template, model, parser, maybe a tool. An agent chooses the next tool from the text it just wrote."],
    ["clay", "Thẻ nâu bên phải, «tự chọn, có trần»: Agent được phép gọi catalog rồi gọi nữa. Không có trần thì một lần hỏi tồn kho thành hai mươi lần gọi và một hóa đơn.", "Right brown card, “it chooses, with a cap”: An agent is allowed to call the catalog and then call it again. With no cap, one stock question becomes twenty calls and a bill."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
  "g-cap-none": [
    ["gold", "Thẻ vàng bên trái, «dùng các khóa trước»: File gốc của capstone chỉ có tiêu đề module. Không có video, không có một dataset mẫu trong sổ này.", "Left gold card, “use the earlier courses”: The source file of the capstone has only a module title. No video, and no sample dataset in this notebook."],
    ["clay", "Thẻ nâu bên phải, «không có buổi mới»: Tự bịa một file khách rồi gọi là capstone là một bài khác, không phải bài của giáo trình.", "Right brown card, “no new session”: Inventing a customer file and calling it the capstone is a different assignment, not the syllabus one."],
    ["gold", "Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.", "The gold strip under a card marks the side being explained. The two cards take turns coming forward."],
  ],
};
