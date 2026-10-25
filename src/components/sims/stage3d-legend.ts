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
};

