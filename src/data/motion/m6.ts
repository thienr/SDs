import type { Actor, Col, Motion } from "@/components/motion/types";
import { F, M, arr, at, bars, box, chain, dot, ln, pair, ring, txt } from "@/data/motion/kit";

/** Đường nối các điểm theo thứ tự (chuỗi thời gian). */
function ser(p: string, v: number[], o: { c?: Col; x0?: number; x1?: number; base?: number; h?: number; max?: number; min?: number; from?: number } = {}): Actor[] {
  const x0 = o.x0 ?? 8;
  const x1 = o.x1 ?? 92;
  const base = o.base ?? 46;
  const h = o.h ?? 32;
  const max = o.max ?? Math.max(...v);
  const min = o.min ?? 0;
  const px = (i: number) => x0 + ((i + (o.from ?? 0)) / Math.max(1, v.length - 1 + (o.from ?? 0))) * (x1 - x0);
  const py = (y: number) => base - ((y - min) / (max - min)) * h;
  const out: Actor[] = [];
  v.forEach((y, i) => {
    out.push(dot(`${p}d${i}`, px(i), py(y), o.c ?? "blue", 1.3));
    if (i > 0) out.push(ln(`${p}l${i}`, px(i - 1), py(v[i - 1]), px(i), py(y), o.c ?? "blue", { w: 0.6 }));
  });
  return out;
}
const vec = (p: string, x: number, y: number, c: Col = "blue", o0 = 20, base = 46, s = 3) => arr(p, o0, base, o0 + x * s, base - y * s, c, { w: 0.8 });
const axes = (p: string, o0 = 20, base = 46) => [ln(`${p}x`, o0, base, 90, base, "mute", { w: 0.3 }), ln(`${p}y`, o0, base, o0, 4, "mute", { w: 0.3 })];

export const m6: Record<string, Motion> = {
  "ts-decomp": M([
    F("Hai kiểu mùa: cộng thêm hay nhân lên.", "Two kinds of season: additive or multiplicative.", ...pair("p", "cộng\n+20 form", "nhân\n×1,4", { ca: "blue", cb: "accent" })),
    F("Kiểu cộng: tháng lễ luôn thêm khoảng 20 form dù nền cao hay thấp.", "Additive: a holiday month always adds about 20 forms whether the baseline is high or low.", bars("b", [40, 60, 80, 100], ["nền 40", "lễ", "nền 80", "lễ"], { c: ["blue", "accent", "blue", "accent"], max: 110, base: 46, h: 28, x0: 15, x1: 85 }), txt("t", 50, 6, "+20 ở cả hai mức nền", { c: "accent", s: 3.4 })),
    F("Kiểu nhân: lễ là ×1,4 nên nền gấp đôi thì phần mùa cũng gấp đôi. Chọn theo dữ liệu, đừng đoán từ một năm.", "Multiplicative: a holiday is ×1.4, so a doubled baseline doubles the seasonal part. Choose from data, not from one year.", bars("b", [40, 56, 80, 112], ["nền 40", "lễ", "nền 80", "lễ"], { c: ["blue", "accent", "blue", "accent"], max: 115, base: 46, h: 28, x0: 15, x1: 85 }), txt("t", 50, 6, "+16 rồi +32: mùa lớn theo nền", { c: "accent", s: 3.4 })),
  ]),
  "ts-naive": M([
    F("Tuần trước 40 form, nên câu ngây nói tuần này cũng 40.", "Last week 40 forms, so the naive forecast says this week 40 too.", box("a", 28, 24, 38, 14, "tuần trước: 40", { c: "blue" }), arr("x", 48, 24, 52, 24, "mute"), box("b", 72, 24, 38, 14, "dự báo ngây: 40", { c: "accent" })),
    F("Mô hình RMSE 9, câu ngây RMSE 6: mô hình tệ hơn câu ngây.", "Model RMSE 9, naive RMSE 6: the model is worse than the naive line.", bars("b", [9, 6], ["mô hình", "ngây"], { c: ["red", "green"], max: 10, base: 46, h: 28, x0: 25, x1: 75 }), txt("t", 50, 6, "chưa đáng dùng", { c: "red", s: 3.6 })),
    F("Dữ liệu có mùa năm thì câu ngây có thể là «bằng tuần cùng kỳ năm trước».", "With yearly seasonality the naive line may be “same as the same week last year”.", ...chain("c", ["tuần cùng kỳ\nnăm trước", "dự báo ngây\ntuần này"], { y: 26, on: 1, h: 18, x0: 25, x1: 75 })),
  ]),
  "ts-sma": M([
    F("Ba tuần gần nhất: 20, 24 và 80 form (lễ).", "The last three weeks: 20, 24 and 80 forms (holiday).", bars("b", [20, 24, 80], ["t−3", "t−2", "t−1"], { c: ["blue", "blue", "accent"], max: 90, base: 46, h: 30, x0: 20, x1: 80 })),
    F("SMA = (20 + 24 + 80) / 3 ≈ 41,3: tuần lễ được cân như một tuần thường.", "SMA = (20 + 24 + 80) / 3 ≈ 41.3: the holiday week weighs like an ordinary week.", bars("b", [20, 24, 80], ["t−3", "t−2", "t−1"], { c: ["blue", "blue", "accent"], max: 90, base: 46, h: 30, x0: 20, x1: 80 }), ln("m", 8, 46 - (41.3 / 90) * 30, 92, 46 - (41.3 / 90) * 30, "red", { d: true, w: 0.6 }), txt("t", 50, 6, "SMA ≈ 41,3", { c: "red", s: 3.4 })),
    F("Khi lễ đã qua, 80 vẫn nằm trong cửa sổ một lúc: dự báo phản ứng chậm.", "After the holiday, 80 stays in the window for a while: the forecast reacts slowly.", bars("b", [24, 80, 22], ["t−3", "t−2", "t−1"], { c: ["blue", "accent", "blue"], max: 90, base: 46, h: 30, x0: 20, x1: 80 }), ln("m", 8, 46 - (42 / 90) * 30, 92, 46 - (42 / 90) * 30, "red", { d: true, w: 0.6 }), txt("t", 50, 6, "vẫn cao dù tuần mới thấp", { c: "red", s: 3.4 })),
  ]),
  "ts-holt": M([
    F("Form tăng khoảng 3 mỗi tuần suốt một quý, mức hiện tại 40.", "Forms rise about 3 per week all quarter; the current level is 40.", ...ser("s", [28, 31, 34, 37, 40], { max: 70, x1: 50 })),
    F("Holt cộng độ dốc đó vào các tuần tới.", "Holt adds that slope to the coming weeks.", ...ser("s", [28, 31, 34, 37, 40], { max: 70, x1: 50 }), ln("f", 50, 46 - (40 / 70) * 32, 66, 46 - (49 / 70) * 32, "accent", { d: true, w: 0.7 })),
    F("Đẩy dự báo thật xa thì dốc vẫn chạy và có thể ra số vô lý; một tháng lễ nhảy một lần không phải dốc cả năm.", "Push the forecast far out and the slope keeps running into a silly number; a one-off holiday jump is not a yearlong slope.", ...ser("s", [28, 31, 34, 37, 40], { max: 70, x1: 50 }), ln("f", 50, 46 - (40 / 70) * 32, 92, 46 - (120 / 70) * 32, "red", { d: true, w: 0.7 }), txt("t", 70, 8, "dốc chạy mãi", { c: "red", s: 3.2 })),
  ]),
  "ts-hw": M([
    F("Form theo tuần có chu kỳ 7 (ngày).", "Weekly-ish forms with a cycle of 7 (days).", ...ser("s", [20, 22, 30, 28, 26, 40, 38, 21, 23, 31, 29, 27, 41, 39], { max: 45 })),
    F("Holt-Winters cần bạn nói 7: nó không tự quyết định là 7 hay 52.", "Holt-Winters needs you to say 7: it does not decide between 7 and 52.", ...ser("s", [20, 22, 30, 28, 26, 40, 38, 21, 23, 31, 29, 27, 41, 39], { max: 45 }), ln("a", 8, 50, 52, 50, "accent", { w: 0.7 }), txt("t", 30, 56, "chu kỳ = 7 (do bạn khai)", { c: "accent", s: 3 })),
    F("Cần hơn một vòng để thấy hình dạng; một năm dữ liệu tuần thì mùa năm chưa lặp lại lần nào.", "You need more than one cycle to see the shape; a year of weekly data has not repeated its yearly season even once.", box("a", 50, 24, 76, 14, "1 năm dữ liệu tuần\n= mùa năm mới xuất hiện 1 lần", { c: "red", s: 3 })),
  ]),
  "ts-mape": M([
    F("Số thật 10, đoán 12: lệch tương đối 2 / 10 = 20%.", "Actual 10, guess 12: relative error 2 / 10 = 20%.", box("a", 28, 24, 38, 14, "thật 10\nđoán 12", { c: "blue" }), box("b", 72, 24, 38, 14, "2 / 10 = 20%", { c: "green", s: 4 })),
    F("Số thật 0, đoán 3: không chia được cho 0, MAPE gãy.", "Actual 0, guess 3: you cannot divide by 0, MAPE breaks.", box("a", 28, 24, 38, 14, "thật 0\nđoán 3", { c: "blue" }), box("b", 72, 24, 38, 14, "3 / 0\n= không có", { c: "red", d: true })),
    F("MAE vẫn là 3 form dùng được; RMSE thì phạt tuần lệch lớn hơn.", "MAE is still a usable 3 forms; RMSE penalises large misses harder.", ...pair("p", "MAE = 3 form\nvẫn dùng được", "RMSE\nphạt lệch lớn", { ca: "green", cb: "accent" })),
  ]),
  "ts-walk": M([
    F("Học đến hết tháng 6, chấm tháng 7.", "Learn through June, score July.", ...["T1–6", "T7"].map((t, i) => box(`f${i}`, 30 + i * 36, 24, i === 0 ? 50 : 20, 12, t, { c: i === 0 ? "blue" : "accent", f: i === 1 ? "accent" : "soft" }))),
    F("Rồi học đến hết tháng 7, chấm tháng 8: cuốn tới từng bước.", "Then learn through July, score August: roll forward step by step.", ...["T1–7", "T8"].map((t, i) => box(`f${i}`, 30 + i * 36, 24, i === 0 ? 50 : 20, 12, t, { c: i === 0 ? "blue" : "accent", f: i === 1 ? "accent" : "soft" }))),
    F("Xáo tuần vào k-fold: mô hình thấy tuần 8 khi đang chấm tuần 7. Đó không còn là dự báo.", "Shuffling weeks into k-fold: the model sees week 8 while scoring week 7. That is no longer forecasting.", ...["tuần 8 (học)", "tuần 7 (chấm)"].map((t, i) => box(`f${i}`, 28 + i * 44, 24, 36, 12, t, { c: i === 0 ? "red" : "accent" })), arr("x", 46, 24, 54, 24, "red"), txt("t", 50, 46, "nhìn thấy tương lai", { c: "red", s: 3.4 })),
  ]),
  "ts-stat": M([
    F("Form dao động quanh 40 suốt năm với độ rộng không đổi: tạm gọi là dừng.", "Forms oscillate around 40 all year with constant width: call it stationary.", ...ser("s", [40, 44, 38, 42, 37, 43, 39, 41, 36, 42], { min: 20, max: 60, c: "green" })),
    F("Form tăng đều thì chưa dừng: tâm đi theo thời gian.", "A steadily rising series is not stationary: its centre moves with time.", ...ser("s", [20, 24, 27, 33, 36, 42, 45, 50, 54, 58], { min: 15, max: 60, c: "red" })),
    F("Lấy tuần này trừ tuần trước cho các bước thay đổi, ổn định hơn; muốn dự báo mức phải cộng ngược lại.", "Subtract last week from this week to get the changes, steadier; to forecast levels you add them back.", ...ser("s", [4, 3, 6, 3, 6, 3, 5, 4, 4], { min: 0, max: 10, c: "accent" }), txt("t", 50, 8, "phần thay đổi: tạm dừng", { c: "accent", s: 3.2 })),
  ]),
  "ts-acf": M([
    F("Form tuần này tương quan 0,6 với tuần trước và 0,3 với hai tuần trước (ACF).", "This week's forms correlate 0.6 with last week and 0.3 with two weeks ago (ACF).", bars("b", [0.6, 0.3], ["trễ 1", "trễ 2"], { c: "blue", max: 1, base: 46, h: 28, x0: 30, x1: 70 }), txt("t", 50, 6, "ACF", { c: "blue", s: 3.6 })),
    F("PACF hỏi phần còn lại sau khi đã tính các bước gần hơn: trễ 2 có thể còn rất ít.", "PACF asks what remains after accounting for nearer lags: lag 2 may be tiny.", bars("b", [0.6, 0.05], ["trễ 1", "trễ 2"], { c: "accent", max: 1, base: 46, h: 28, x0: 30, x1: 70 }), txt("t", 50, 6, "PACF", { c: "accent", s: 3.6 })),
    F("Chuỗi ngắn hay cho hình nói dối: đừng chọn bậc chỉ vì một cột vượt vạch.", "Short series often draw a lying picture: do not pick an order just because one bar crosses the line.", bars("b", [0.6, 0.3, 0.25, 0.1], ["1", "2", "3", "4"], { c: "blue", max: 1, base: 46, h: 28, x0: 20, x1: 80 }), ln("v", 8, 46 - 0.28 * 28, 92, 46 - 0.28 * 28, "red", { d: true, w: 0.5 }), txt("t", 50, 6, "một cột vượt vạch ≠ một quy luật", { c: "red", s: 3.2 })),
  ]),
  "ts-ar": M([
    F("Giả sử tuần này ≈ 10 + 0,5 × tuần trước.", "Suppose this week ≈ 10 + 0.5 × last week.", box("a", 50, 24, 74, 14, "tuần này = 10 + 0,5 × tuần trước", { c: "accent" })),
    F("Tuần trước 40 form thì dự báo 10 + 0,5 × 40 = 30.", "If last week was 40, the forecast is 10 + 0.5 × 40 = 30.", ...chain("c", ["tuần trước\n40", "10 + 0,5 × 40", "dự báo\n30"], { y: 26, on: 2, h: 16 })),
    F("Hệ số 0,5 không phải «một nửa nguyên nhân»: nó là mức bám trên một chuỗi đã được cho là dừng.", "The 0.5 is not “half the cause”: it is the stickiness of a series assumed stationary.", box("a", 28, 24, 38, 14, "0,5 = mức bám", { c: "green" }), box("b", 72, 24, 38, 14, "một nửa nguyên nhân", { c: "red", d: true })),
  ]),
  "ts-ma": M([
    F("Một tuần lỗi tracking làm form hụt 15.", "One tracking-error week drops forms by 15.", ...ser("s", [40, 41, 25, 33, 38, 40, 40], { min: 15, max: 45, c: "blue" }), ring("r", at(2, 0, 6), 46 - ((25 - 15) / 30) * 32, 4, "red")),
    F("Tuần sau còn vương lại một phần của cú sốc đó: đó là MA trong ARIMA.", "The week after still carries part of that shock: that is the MA in ARIMA.", ...ser("s", [40, 41, 25, 33, 38, 40, 40], { min: 15, max: 45, c: "blue" }), ring("r", at(2, 0, 6), 46 - ((25 - 15) / 30) * 32, 4, "red"), ring("q", at(3, 0, 6), 46 - ((33 - 15) / 30) * 32, 3, "accent"), txt("t", 50, 8, "cú sốc cũ còn vương lại", { c: "accent", s: 3.2 })),
    F("Trung bình của ba tuần gần nhất là một việc khác, dù cũng gọi «trung bình trượt». Đừng trộn hai thứ trong báo cáo.", "The average of the last three weeks is a different thing, though also called “moving average”. Do not mix them in a report.", ...pair("p", "MA trong ARIMA\ncú sốc cũ", "trung bình trượt\n3 tuần gần nhất", { ca: "accent", cb: "blue" })),
  ]),
  "ts-arima": M([
    F("Form có hướng đi lên: lấy hiệu một lần (d = 1).", "Forms trend up: difference once (d = 1).", ...chain("c", ["chuỗi có hướng", "lấy hiệu\nd = 1", "AR và MA"], { y: 26, on: 1, h: 16 })),
    F("Rồi AR và MA chạy trên phần thay đổi: đó là ARIMA. Mùa tuần cần SARIMA với chu kỳ 7.", "Then AR and MA run on the changes: that is ARIMA. A weekly season needs SARIMA with period 7.", ...chain("c", ["lấy hiệu", "AR + MA", "mùa 7 → SARIMA"], { y: 26, on: 2, h: 14 })),
    F("Thêm cột khuyến mãi là SARIMAX, và bạn phải biết khuyến mãi tuần tới; nếu chưa biết thì bạn đang đoán luôn cả khuyến mãi.", "Adding a promo column makes SARIMAX, and you must know next week's promo; if not, you are guessing the promo too.", box("a", 28, 24, 38, 14, "SARIMAX\ncần cột khuyến mãi", { c: "blue" }), box("b", 72, 24, 38, 14, "khuyến mãi tuần tới\nchưa biết → đoán", { c: "red", d: true })),
  ]),
  "math-vec": M([
    F("Một tuần: chi 10 triệu, thu 80 form, viết (10, 80).", "One week: spend 10 million, 80 forms, written (10, 80).", ...axes("a"), vec("v", 10, 80 / 4, "blue", 20, 46, 2.5), txt("t", 60, 12, "(10, 80)", { c: "blue", s: 3.6 })),
    F("Đổi chỗ thành (80, 10) là một tuần hoàn toàn khác: ô đầu là chi tiêu.", "Swapping to (80, 10) is a totally different week: the first cell is spend.", ...axes("a"), vec("v", 10, 80 / 4, "mute", 20, 46, 2.5), vec("w", 80 / 4, 10 / 4, "red", 20, 46, 2.5), txt("t", 60, 12, "(80, 10) ≠ (10, 80)", { c: "red", s: 3.4 })),
    F("Véctơ là một danh sách số có thứ tự: vị trí mỗi số có nghĩa.", "A vector is an ordered list of numbers: each position has a meaning.", ...pair("p", "ô 1\nchi tiêu", "ô 2\nsố form", { ca: "blue", cb: "accent" })),
  ]),
  "math-add": M([
    F("Hai tuần: (10, 80) và (2, 5).", "Two weeks: (10, 80) and (2, 5).", ...axes("a"), arr("u", 20, 46, 20 + 10 * 4, 46 - 8 * 4, "blue", { w: 0.8 }), arr("v", 20, 46, 20 + 2 * 4, 46 - 5 * 0.5 * 4, "accent", { w: 0.8 })),
    F("Cộng từng ô: (10 + 2, 80 + 5) = (12, 85).", "Add cell by cell: (10 + 2, 80 + 5) = (12, 85).", box("a", 50, 24, 74, 14, "(10, 80) + (2, 5) = (12, 85)", { c: "green", s: 3.6 })),
    F("Nhân với 2: (20, 160); cả chi tiêu lẫn form cùng gấp đôi, không phải chỉ một ô.", "Multiply by 2: (20, 160); spend and forms both double, not just one cell.", box("a", 50, 24, 74, 14, "2 × (10, 80) = (20, 160)", { c: "accent", s: 3.6 }), txt("t", 50, 44, "mọi ô cùng nhân", { c: "mute", s: 3.2 })),
  ]),
  "math-dot": M([
    F("Tuần A là (2, 3) và tuần B là (4, 1).", "Week A is (2, 3) and week B is (4, 1).", ...axes("a"), arr("u", 20, 46, 20 + 2 * 12, 46 - 3 * 8, "blue", { w: 0.8 }), arr("v", 20, 46, 20 + 4 * 12, 46 - 1 * 8, "accent", { w: 0.8 })),
    F("Tích vô hướng = 2 × 4 + 3 × 1 = 11: nhân từng ô rồi cộng.", "Dot product = 2 × 4 + 3 × 1 = 11: multiply cell by cell, then add.", box("a", 50, 24, 74, 14, "2 × 4 + 3 × 1 = 11", { f: "accent", c: "accent", s: 4 })),
    F("Hai trục (1, 0) và (0, 1) cho 1 × 0 + 0 × 1 = 0: không cùng hướng chút nào.", "The two axes (1, 0) and (0, 1) give 1 × 0 + 0 × 1 = 0: not aligned at all.", ...axes("a"), arr("u", 20, 46, 50, 46, "blue", { w: 0.8 }), arr("v", 20, 46, 20, 16, "accent", { w: 0.8 }), txt("t", 60, 24, "1×0 + 0×1 = 0", { c: "green", s: 3.4 })),
  ]),
  "math-mat": M([
    F("Ma trận [[2, 0], [0, 1]] và tuần (3, 4).", "Matrix [[2, 0], [0, 1]] and week (3, 4).", ...pair("p", "ma trận\n[[2,0],[0,1]]", "tuần\n(3, 4)", { ca: "accent", cb: "blue" })),
    F("Hàng 1 tạo ô 1: 2×3 + 0×4 = 6. Hàng 2 tạo ô 2: 0×3 + 1×4 = 4.", "Row 1 makes cell 1: 2×3 + 0×4 = 6. Row 2 makes cell 2: 0×3 + 1×4 = 4.", box("a", 50, 16, 74, 10, "hàng 1: 2×3 + 0×4 = 6", { c: "accent" }), box("b", 50, 32, 74, 10, "hàng 2: 0×3 + 1×4 = 4", { c: "accent" })),
    F("Kết quả (6, 4): chi tiêu được nhân đôi, số form giữ nguyên.", "Result (6, 4): spend doubled, forms unchanged.", ...axes("a"), arr("u", 20, 46, 20 + 3 * 8, 46 - 4 * 8, "mute", { w: 0.6, d: true }), arr("v", 20, 46, 20 + 6 * 8, 46 - 4 * 8, "green", { w: 0.9 })),
  ]),
  "math-mul": M([
    F("A cỡ 2×3 nhân với cột B gồm 3 số: các cỡ khớp nhau (3 = 3).", "A (2×3) times a column B of 3 numbers: sizes match (3 = 3).", ...pair("p", "A: 2 hàng\n× 3 cột", "B: 3 số", { ca: "blue", cb: "accent" }), txt("t", 50, 46, "3 cột = 3 số → làm được", { c: "green", s: 3.4 })),
    F("Kết quả có 2 số: mỗi hàng của A gặp cột B ra một số.", "The result has 2 numbers: each row of A meets column B once.", ...chain("c", ["A (2×3)", "× B (3)", "= 2 số"], { y: 26, on: 2 })),
    F("Nhân A với một cột chỉ có 2 số thì không làm được; và AB thường khác BA.", "Multiplying A by a column of only 2 numbers is impossible; and AB usually differs from BA.", box("a", 28, 24, 38, 14, "A × (2 số)\nkhông làm được", { c: "red", d: true }), box("b", 72, 24, 38, 14, "AB ≠ BA\n(thường)", { c: "accent" })),
  ]),
  "math-det": M([
    F("Ma trận [[2, 0], [0, 1]] biến hình vuông 1×1 thành hình chữ nhật 2×1.", "Matrix [[2, 0], [0, 1]] turns a 1×1 square into a 2×1 rectangle.", box("a", 28, 26, 14, 14, "1×1", { c: "mute" }), arr("x", 38, 26, 50, 26, "mute"), box("b", 70, 26, 28, 14, "2×1", { c: "blue", f: "soft" })),
    F("Định thức 2 × 1 − 0 × 0 = 2: diện tích gấp đôi.", "Determinant 2 × 1 − 0 × 0 = 2: the area doubles.", box("a", 28, 26, 14, 14, "diện tích 1", { c: "mute", s: 2.8 }), box("b", 70, 26, 28, 14, "diện tích 2", { f: "green", c: "green" }), txt("t", 50, 46, "det = 2", { c: "green", s: 3.6 })),
    F("[[1, 2], [2, 4]]: hàng dưới gấp hai hàng trên, định thức 1×4 − 2×2 = 0, mặt phẳng bị ép thành một đường.", "[[1, 2], [2, 4]]: the bottom row is twice the top row, determinant 1×4 − 2×2 = 0, the plane is squashed to a line.", box("a", 28, 26, 14, 14, "hình vuông", { c: "mute", s: 2.8 }), ln("l", 52, 26, 90, 26, "red", { w: 1.2 }), txt("t", 50, 46, "det = 0 → ép thành một đường", { c: "red", s: 3.4 })),
  ]),
  "math-sys": M([
    F("Hai đường: x + y = 3 và x − y = 1.", "Two lines: x + y = 3 and x − y = 1.", ...axes("a", 14, 46), ln("l1", 20, 12, 70, 46 - 0, "blue", { w: 0.7 }), ln("l2", 20, 46, 70, 12, "accent", { w: 0.7 })),
    F("Chúng gặp nhau tại (2, 1): nghiệm duy nhất nằm trên cả hai đường.", "They meet at (2, 1): the unique solution lies on both lines.", ...axes("a", 14, 46), ln("l1", 20, 12, 70, 46, "blue", { w: 0.7 }), ln("l2", 20, 46, 70, 12, "accent", { w: 0.7 }), ring("r", 45, 29, 3.5, "green"), txt("t", 45, 8, "(2, 1)", { c: "green", s: 3.6 })),
    F("Đổi điều kiện sau thành 2x + 2y = 5: hai đường song song, không có điểm nào thỏa cả hai.", "Change the second to 2x + 2y = 5: the lines are parallel and no point satisfies both.", ...axes("a", 14, 46), ln("l1", 20, 12, 70, 46, "blue", { w: 0.7 }), ln("l2", 20, 6, 70, 40, "red", { w: 0.7 }), txt("t", 50, 54, "song song → vô nghiệm", { c: "red", s: 3.4 })),
  ]),
  "math-eig": M([
    F("Ma trận [[2, 0], [0, 1]] kéo giãn mặt phẳng.", "The matrix [[2, 0], [0, 1]] stretches the plane.", ...axes("a"), arr("u", 20, 46, 20 + 22, 46, "blue", { w: 0.8 }), arr("v", 20, 46, 20, 46 - 22, "accent", { w: 0.8 })),
    F("(1, 0) thành (2, 0): cùng hướng, dài gấp 2 → λ = 2. (0, 1) giữ nguyên → λ = 1.", "(1, 0) becomes (2, 0): same direction, twice as long → λ = 2. (0, 1) stays → λ = 1.", ...axes("a"), arr("u", 20, 46, 20 + 22, 46, "mute", { w: 0.6, d: true }), arr("u2", 20, 46, 20 + 44, 46, "green", { w: 0.9 }), arr("v", 20, 46, 20, 46 - 22, "accent", { w: 0.9 }), txt("t", 60, 20, "λ = 2 và λ = 1", { c: "green", s: 3.4 })),
    F("(1, 1) thành (2, 1): lệch hướng nên không phải vectơ riêng.", "(1, 1) becomes (2, 1): the direction changes, so it is not an eigenvector.", ...axes("a"), arr("u", 20, 46, 42, 24, "mute", { w: 0.6, d: true }), arr("u2", 20, 46, 64, 24, "red", { w: 0.9 }), txt("t", 60, 20, "bị quay → không phải", { c: "red", s: 3.4 })),
  ]),
  "math-deriv": M([
    F("form ≈ 20 + 6x − 0,1x², x là số triệu chi: đường cong dần.", "forms ≈ 20 + 6x − 0.1x², x in millions of spend: a flattening curve.", ...ser("s", [20, 25.9, 31.6, 37.1, 42.4, 47.5, 52.4, 57.1, 61.6, 65.9, 70], { min: 15, max: 75, c: "blue" })),
    F("Độ dốc là 6 − 0,2x: tại x = 0 thêm 1 triệu được khoảng 6 form.", "The slope is 6 − 0.2x: at x = 0 one more million gives about 6 forms.", ...ser("s", [20, 25.9, 31.6, 37.1, 42.4, 47.5, 52.4, 57.1, 61.6, 65.9, 70], { min: 15, max: 75, c: "blue" }), ln("t", 8, 46 - (5 / 60) * 32, 30, 46 - (5 / 60) * 32 - 6 * 0.9, "green", { w: 0.8 }), txt("x", 28, 8, "x = 0: dốc 6", { c: "green", s: 3.2 })),
    F("Tại x = 10 độ dốc chỉ còn 6 − 2 = 4: thêm một triệu chỉ được khoảng 4 form.", "At x = 10 the slope is 6 − 2 = 4: one more million adds only about 4 forms.", ...ser("s", [20, 25.9, 31.6, 37.1, 42.4, 47.5, 52.4, 57.1, 61.6, 65.9, 70], { min: 15, max: 75, c: "blue" }), ln("t", 72, 46 - (55 / 60) * 32 + 2, 92, 46 - (55 / 60) * 32 - 8, "red", { w: 0.8 }), txt("x", 70, 8, "x = 10: dốc 4", { c: "red", s: 3.2 })),
  ]),
  "math-jac": M([
    F("Hai nút (chi, email) và hai đầu ra (form, lead đủ điều kiện).", "Two knobs (spend, email) and two outputs (forms, qualified leads).", ...pair("p", "nút: chi, email", "đầu ra: form, lead", { ca: "blue", cb: "accent" })),
    F("Mỗi đầu ra có một đạo hàm riêng theo mỗi nút: bảng 2×2 gồm bốn ô.", "Each output has a partial derivative for each knob: a 2×2 table of four cells.", ...["∂form/∂chi", "∂form/∂email", "∂lead/∂chi", "∂lead/∂email"].map((t, i) => box(`c${i}`, 30 + (i % 2) * 40, 16 + Math.floor(i / 2) * 16, 36, 12, t, { c: "accent", s: 3 }))),
    F("Chỉ có một đầu ra thì bảng thu về một hàng: chính là gradient.", "With a single output the table shrinks to one row: the gradient.", ...["∂form/∂chi", "∂form/∂email"].map((t, i) => box(`c${i}`, 30 + i * 40, 24, 36, 12, t, { c: "green", s: 3 })), ...["∂lead/∂chi", "∂lead/∂email"].map((t, i) => box(`d${i}`, 30 + i * 40, 40, 36, 12, t, { c: "mute", d: true, o: 0.3, s: 3 }))),
  ]),
  "math-hess": M([
    F("Một nút: f(w) = (w − 2)² có đạo hàm bậc hai 2: cong lên, nên là một đáy.", "One knob: f(w) = (w − 2)² has second derivative 2: curves up, so it is a bottom.", ...ser("s", [9, 4, 1, 0, 1, 4, 9], { min: 0, max: 9, c: "green", base: 44 }), txt("t", 50, 8, "cong lên → đáy", { c: "green", s: 3.4 })),
    F("Hai nút: x² − y² cong lên theo x và cong xuống theo y.", "Two knobs: x² − y² curves up along x and down along y.", ...ser("a", [9, 4, 1, 0, 1, 4, 9], { min: 0, max: 9, c: "blue", base: 36, h: 24, x0: 8, x1: 46 }), ...ser("b", [0, 5, 8, 9, 8, 5, 0], { min: 0, max: 9, c: "red", base: 36, h: 24, x0: 54, x1: 92 }), txt("t1", 27, 8, "theo x: lên", { c: "blue", s: 3 }), txt("t2", 73, 8, "theo y: xuống", { c: "red", s: 3 })),
    F("Đạo hàm bậc nhất bằng 0 tại gốc, nhưng đó là một yên ngựa chứ không phải đáy.", "The first derivative is 0 at the origin, but that is a saddle, not a bottom.", box("a", 28, 24, 38, 14, "đạo hàm = 0\ntại gốc", { c: "blue" }), box("b", 72, 24, 38, 14, "yên ngựa\nkhông phải đáy", { c: "red", f: "red" })),
  ]),
  "math-taylor": M([
    F("Tại mức chi 10 triệu, tiếp tuyến dùng độ dốc 4 form mỗi triệu.", "At spend 10 million the tangent uses a slope of 4 forms per million.", ...ser("s", [20, 25.9, 31.6, 37.1, 42.4, 47.5, 52.4, 57.1, 61.6, 65.9, 70], { min: 15, max: 100, c: "blue" })),
    F("Thêm 0,2 triệu thì tiếp tuyến gần đúng sát đường cong.", "Add 0.2 million and the tangent is close to the curve.", ...ser("s", [20, 25.9, 31.6, 37.1, 42.4, 47.5, 52.4, 57.1, 61.6, 65.9, 70], { min: 15, max: 100, c: "blue" }), ln("t", 60, 46 - (65.9 - 15) / 85 * 32 + 8, 92, 46 - (65.9 - 15) / 85 * 32 - 11, "green", { w: 0.8 }), ring("r", 92 - 32, 46 - (65.9 - 15) / 85 * 32, 3, "green")),
    F("Nhảy thêm 20 triệu thì đường bậc hai đã cong đi, và tiếp tuyến cho số lớn hơn nhiều so với thực tế.", "Jump another 20 million and the quadratic has bent away; the tangent gives a much larger number than reality.", ...ser("s", [20, 25.9, 31.6, 37.1, 42.4, 47.5, 52.4, 57.1, 61.6, 65.9, 70], { min: 15, max: 100, c: "blue", x1: 60 }), ln("t", 40, 46 - (65.9 - 15) / 85 * 32 + 6, 94, 8, "red", { w: 0.8, d: true }), txt("x", 70, 54, "ở xa: tiếp tuyến lệch", { c: "red", s: 3.2 })),
  ]),
  "ds-type": M([
    F("Ba kiểu: số (chi tiêu), chữ (kênh), chữ có thứ bậc (số sao).", "Three types: number (spend), text (channel), ordered text (stars).", ...[["số", "chi tiêu"], ["chữ", "kênh"], ["chữ có\nthứ bậc", "1–5 sao"]].map(([a, b], i) => box(`c${i}`, 18 + i * 32, 24, 28, 18, `${a}\n${b}`, { c: ["accent", "blue", "gold"][i] as Col, s: 3 }))),
    F("Mã hóa Google, Meta, TikTok thành 1, 2, 3 thì thứ tự 1 < 2 < 3 là do bạn tự gán.", "Encoding Google, Meta, TikTok as 1, 2, 3 makes 1 < 2 < 3 an order you invented.", ...["Google = 1", "Meta = 2", "TikTok = 3"].map((t, i) => box(`c${i}`, 20 + i * 30, 24, 26, 12, t, { c: "blue", s: 3 }))),
    F("«Trung bình mã kênh» là câu vô nghĩa: 2 không phải kênh nào cả.", "“Mean channel code” is meaningless: 2 is not a channel.", box("a", 50, 24, 70, 14, "TB(1, 2, 3) = 2 = ?", { c: "red", d: true })),
  ]),
  "ds-center": M([
    F("Tám tuần: 2, 4, 4, 4, 5, 5, 7, 9.", "Eight weeks: 2, 4, 4, 4, 5, 5, 7, 9.", bars("b", [2, 4, 4, 4, 5, 5, 7, 9], ["2", "4", "4", "4", "5", "5", "7", "9"], { c: "blue", max: 9, show: false, base: 44, h: 28 })),
    F("Trung bình = 40 / 8 = 5; trung vị = (4 + 5) / 2 = 4,5.", "Mean = 40 / 8 = 5; median = (4 + 5) / 2 = 4.5.", bars("b", [2, 4, 4, 4, 5, 5, 7, 9], ["2", "4", "4", "4", "5", "5", "7", "9"], { c: "blue", max: 9, show: false, base: 44, h: 28 }), ln("m", 8, 44 - (5 / 9) * 28, 92, 44 - (5 / 9) * 28, "accent", { d: true, w: 0.6 }), ln("d", 8, 44 - (4.5 / 9) * 28, 92, 44 - (4.5 / 9) * 28, "green", { d: true, w: 0.6 }), txt("t", 50, 6, "TB 5 · trung vị 4,5: gần nhau", { c: "mute", s: 3.2 })),
    F("Thêm một giá trị cực đoan 90: trung bình nhảy lên, trung vị gần như đứng yên.", "Add an extreme value 90: the mean jumps, the median barely moves.", bars("b", [2, 4, 4, 4, 5, 5, 7, 90], ["2", "4", "4", "4", "5", "5", "7", "90"], { c: ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "red"], max: 90, show: false, base: 44, h: 28 }), txt("t", 50, 6, "TB 15,1 · trung vị 4,5", { c: "red", s: 3.4 })),
  ]),
  "ds-mode": M([
    F("Dãy 2, 4, 4, 4, 5, 5, 7, 9: đếm số lần mỗi giá trị xuất hiện.", "The series 2, 4, 4, 4, 5, 5, 7, 9: count how often each value appears.", bars("b", [1, 3, 2, 1, 1], ["2", "4", "5", "7", "9"], { c: "blue", max: 4, base: 46, h: 28, x0: 20, x1: 80 })),
    F("Số 4 xuất hiện 3 lần, nhiều nhất: mode là 4.", "The value 4 appears 3 times, most often: the mode is 4.", bars("b", [1, 3, 2, 1, 1], ["2", "4", "5", "7", "9"], { c: ["blue", "accent", "blue", "blue", "blue"], max: 4, base: 46, h: 28, x0: 20, x1: 80 }), txt("t", 50, 6, "mode = 4", { c: "accent", s: 3.6 })),
    F("Nếu 5 cũng xuất hiện 3 lần thì có hai mode. Với cột kênh, mode là kênh có nhiều khách nhất.", "If 5 also appeared 3 times there would be two modes. For a channel column the mode is the channel with the most customers.", bars("b", [400, 550, 250], ["GDN", "Facebook", "TikTok"], { c: ["blue", "accent", "blue"], max: 600, base: 46, h: 28, x0: 20, x1: 80 }), txt("t", 50, 6, "mode = Facebook", { c: "accent", s: 3.4 })),
  ]),
  "ds-q": M([
    F("Dãy đã sắp: 2, 4, 4, 4 | 5, 5, 7, 9; chia làm nửa dưới và nửa trên.", "Sorted: 2, 4, 4, 4 | 5, 5, 7, 9; split into a lower and an upper half.", bars("b", [2, 4, 4, 4, 5, 5, 7, 9], ["2", "4", "4", "4", "5", "5", "7", "9"], { c: ["blue", "blue", "blue", "blue", "gold", "gold", "gold", "gold"], max: 9, show: false, base: 44, h: 28 })),
    F("Trung vị mỗi nửa: Q1 = 4 và Q3 = 6; trung vị cả dãy Q2 = 4,5.", "Median of each half: Q1 = 4 and Q3 = 6; the overall median Q2 = 4.5.", bars("b", [2, 4, 4, 4, 5, 5, 7, 9], ["2", "4", "4", "4", "5", "5", "7", "9"], { c: ["blue", "blue", "blue", "blue", "gold", "gold", "gold", "gold"], max: 9, show: false, base: 44, h: 28 }), txt("t", 50, 6, "Q1 = 4 · Q2 = 4,5 · Q3 = 6", { c: "accent", s: 3.4 })),
    F("IQR = Q3 − Q1 = 6 − 4 = 2. Phần mềm khác có thể cắt lệch một chút.", "IQR = Q3 − Q1 = 6 − 4 = 2. Other software may cut slightly differently.", box("a", 50, 24, 74, 14, "IQR = 6 − 4 = 2", { f: "accent", c: "accent", s: 4 }), txt("t", 50, 46, "ghi rõ cách cắt", { c: "mute", s: 3.2 })),
  ]),
  "ds-var": M([
    F("Dãy 2, 4, 4, 4, 5, 5, 7, 9 có trung bình 5.", "The series has mean 5.", bars("b", [2, 4, 4, 4, 5, 5, 7, 9], ["2", "4", "4", "4", "5", "5", "7", "9"], { c: "blue", max: 9, show: false, base: 44, h: 28 }), ln("m", 8, 44 - (5 / 9) * 28, 92, 44 - (5 / 9) * 28, "accent", { d: true, w: 0.6 })),
    F("Bình phương độ lệch: 9, 1, 1, 1, 0, 0, 4, 16 → tổng 32.", "Squared deviations: 9, 1, 1, 1, 0, 0, 4, 16 → sum 32.", bars("b", [9, 1, 1, 1, 0, 0, 4, 16], ["2", "4", "4", "4", "5", "5", "7", "9"], { c: "gold", max: 16, base: 44, h: 28 }), txt("t", 50, 6, "tổng = 32", { c: "accent", s: 3.6 })),
    F("Mẫu chia n − 1: 32 / 7 ≈ 4,57. Nếu có toàn bộ tổng thể, chia n: 32 / 8 = 4.", "Sample divides by n − 1: 32 / 7 ≈ 4.57. With the whole population divide by n: 32 / 8 = 4.", ...pair("p", "mẫu: 32 / 7\n≈ 4,57", "tổng thể: 32 / 8\n= 4", { ca: "blue", cb: "accent" })),
  ]),
  "ds-sd": M([
    F("Phương sai mẫu là 4,57 form²: đơn vị là bình phương.", "Sample variance is 4.57 forms²: the unit is squared.", box("a", 50, 24, 60, 14, "phương sai = 4,57 form²", { c: "gold", s: 3.6 })),
    F("Độ lệch chuẩn = √4,57 ≈ 2,14 form: về lại đơn vị gốc.", "Standard deviation = √4.57 ≈ 2.14 forms: back to the original unit.", ...chain("c", ["4,57 form²", "căn bậc hai", "2,14 form"], { y: 26, on: 2 })),
    F("Báo cáo «độ rộng là 4,57 form» là sai đơn vị: phải là 2,14 form.", "Reporting “the spread is 4.57 forms” is the wrong unit: it should be 2.14 forms.", box("a", 28, 24, 38, 14, "4,57 form\n(sai đơn vị)", { c: "red", d: true }), box("b", 72, 24, 38, 14, "2,14 form\n(đúng)", { c: "green" })),
  ]),
  "ds-cov": M([
    F("Ba tuần: chi 1, 2, 3 triệu; form 2, 2, 5. Trung bình chi 2, form 3.", "Three weeks: spend 1, 2, 3 million; forms 2, 2, 5. Mean spend 2, forms 3.", ...[[1, 2], [2, 2], [3, 5]].map(([x, y], i) => dot(`d${i}`, 20 + x * 18, 46 - y * 7, "blue", 1.8)), ln("mx", 20 + 2 * 18, 8, 20 + 2 * 18, 46, "mute", { d: true, w: 0.3 }), ln("my", 12, 46 - 3 * 7, 90, 46 - 3 * 7, "mute", { d: true, w: 0.3 })),
    F("Tích hai độ lệch từng tuần: (−1)(−1) = 1, 0 × (−1) = 0, (1)(2) = 2 → tổng 3.", "Product of the two deviations per week: (−1)(−1) = 1, 0 × (−1) = 0, (1)(2) = 2 → sum 3.", ...[[1, 2], [2, 2], [3, 5]].map(([x, y], i) => dot(`d${i}`, 20 + x * 18, 46 - y * 7, "blue", 1.8)), box("a", 50, 8, 70, 9, "1 + 0 + 2 = 3", { c: "accent", s: 3.4 })),
    F("Hiệp phương sai mẫu = 3 / 2 = 1,5 (triệu × form). Dương: cùng phía trung bình.", "Sample covariance = 3 / 2 = 1.5 (million × forms). Positive: same side of the means.", box("a", 50, 24, 74, 14, "cov = 3 / (n − 1) = 1,5", { f: "accent", c: "accent", s: 3.8 }), txt("t", 50, 46, "đơn vị: triệu × form", { c: "mute", s: 3.2 })),
  ]),
  "ds-corr": M([
    F("Với chi và form ở bài trước: cov = 1,5, độ lệch chuẩn chi = 1, form = √3.", "With spend and forms from before: cov = 1.5, SD of spend = 1, of forms = √3.", box("a", 50, 24, 74, 14, "cov = 1,5 · sd chi = 1 · sd form = √3", { c: "blue", s: 3.2 })),
    F("r = 1,5 / (1 × √3) ≈ 0,87: không còn đơn vị.", "r = 1.5 / (1 × √3) ≈ 0.87: unit-free.", box("a", 50, 24, 74, 14, "r = 1,5 / √3 ≈ 0,87", { f: "accent", c: "accent", s: 4 })),
    F("Đổi chi sang đồng thì r vẫn là 0,87; nhưng ba điểm là quá ít, và r không phải nguyên nhân.", "Switching spend to VND, r is still 0.87; but three points are too few, and r is not causation.", ...pair("p", "triệu hay đồng\nr = 0,87", "3 điểm: quá ít\nđể báo cáo", { ca: "green", cb: "red" })),
  ]),
};
