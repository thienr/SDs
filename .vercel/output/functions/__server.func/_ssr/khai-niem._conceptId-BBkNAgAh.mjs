import { o as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as studyCopy, B as subscribeRaw, F as getRawVersion, I as getServerRawVersion, M as studyNeighbors, O as subscribeProgress, b as getServerProgress, j as studyListTitle, k as getStudy, r as Route$1, y as getProgress } from "./router-BQTkODUb.mjs";
import { n as Range, r as Sim, t as Lab } from "./labs-o_JKy24n.mjs";
import { t as Tex } from "./tex-t3KOuum9.mjs";
import { o as relatedOf } from "./map-BcZ7aO81.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/khai-niem._conceptId-BBkNAgAh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ui$1 = {
	vi: {
		step: "Bước",
		of: "trên",
		prev: "Lùi",
		next: "Bước kế",
		again: "Chạy lại",
		auto: "Tự chạy",
		stop: "Dừng",
		legend: "Màu",
		focus: "đang nói tới",
		gone: "bị loại hoặc gộp",
		fresh: "mới xuất hiện",
		bad: "sai hoặc bị từ chối",
		empty: "trống (NULL)"
	},
	en: {
		step: "Step",
		of: "of",
		prev: "Back",
		next: "Next step",
		again: "Run again",
		auto: "Autoplay",
		stop: "Stop",
		legend: "Colors",
		focus: "in focus",
		gone: "dropped or merged",
		fresh: "new",
		bad: "wrong or rejected",
		empty: "empty (NULL)"
	}
};
function show$1(v) {
	if (v === null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "italic text-muted",
		children: "NULL"
	});
	return String(v);
}
function Grid({ t }) {
	const m = t.m ?? {};
	const cellClass = (r, c) => {
		const classes = ["border border-line px-2 py-1 text-sm whitespace-nowrap"];
		if (m.cells?.some(([rr, cc]) => rr === r && cc === c)) return classes.concat("bg-[#f0c14a] text-[#14110e] font-semibold").join(" ");
		if (m.dim?.includes(r)) classes.push("opacity-35 line-through");
		if (m.bad?.includes(r)) classes.push("bg-[#b5461f]/30");
		else if (m.add?.includes(r) || m.addCols?.includes(c)) classes.push("bg-good/25");
		else if (m.rows?.includes(r) || m.cols?.includes(c)) classes.push("bg-[#f0c14a]/35");
		return classes.join(" ");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [t.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-1 font-mono text-xs text-muted",
			children: t.name
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-card border border-line bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full border-collapse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: t.c.map((name, c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: `border border-line bg-paper px-2 py-1 text-left font-mono text-xs font-semibold ${m.addCols?.includes(c) ? "bg-good/25" : ""} ${m.cols?.includes(c) ? "bg-[#f0c14a]/50" : ""}`,
					children: name
				}, name + c)) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: t.r.map((row, r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: row.map((v, c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: cellClass(r, c),
					children: show$1(v)
				}, c)) }, r)) })]
			})
		})]
	});
}
function DataDemo({ demo, lang }) {
	const t = ui$1[lang];
	const [i, setI] = (0, import_react.useState)(0);
	const [auto, setAuto] = (0, import_react.useState)(false);
	const last = demo.length - 1;
	const step = demo[Math.min(i, last)];
	(0, import_react.useEffect)(() => {
		setI(0);
		setAuto(false);
	}, [demo]);
	(0, import_react.useEffect)(() => {
		if (!auto) return;
		const id = window.setInterval(() => {
			setI((v) => {
				if (v >= last) {
					setAuto(false);
					return v;
				}
				return v + 1;
			});
		}, 3200);
		return () => window.clearInterval(id);
	}, [auto, last]);
	const btn = "inline-flex min-h-11 items-center rounded-full border border-line bg-card px-4 text-sm disabled:opacity-40";
	const used = /* @__PURE__ */ new Set();
	step.t.forEach((tb) => {
		const m = tb.m;
		if (!m) return;
		if (m.rows || m.cols || m.cells) used.add("focus");
		if (m.dim) used.add("gone");
		if (m.add || m.addCols) used.add("fresh");
		if (m.bad) used.add("bad");
		if (tb.r.some((row) => row.includes(null))) used.add("empty");
	});
	const sw = {
		focus: "bg-[#f0c14a]",
		gone: "bg-line",
		fresh: "bg-good/60",
		bad: "bg-[#b5461f]/60",
		empty: "border border-line bg-card"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-card border border-line bg-paper p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs uppercase tracking-widest text-accent",
					children: [
						t.step,
						" ",
						Math.min(i, last) + 1,
						" ",
						t.of,
						" ",
						demo.length
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1",
					"aria-hidden": true,
					children: demo.map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2 w-6 rounded-full ${k <= i ? "bg-accent" : "bg-line"}` }, k))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-base leading-snug",
				children: lang === "en" ? step.en : step.vi
			}),
			step.code ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "mt-3 overflow-x-auto rounded-card bg-[#14110e] px-3 py-2 font-mono text-sm leading-relaxed text-[#f4efe6]",
				children: step.code
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mt-3 grid gap-3 ${step.t.length > 1 ? "md:grid-cols-2" : ""}`,
				children: step.t.map((tb, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid, { t: tb }, k))
			}),
			used.size > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [t.legend, ":"] }), [...used].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `inline-block size-3 rounded-sm ${sw[k]}` }), t[k]]
				}, k))]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: btn,
						disabled: i === 0,
						onClick: () => setI(Math.max(0, i - 1)),
						children: t.prev
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `${btn} bg-ink text-paper`,
						disabled: i >= last,
						onClick: () => setI(Math.min(last, i + 1)),
						children: t.next
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: btn,
						onClick: () => i >= last ? (setI(0), setAuto(true)) : setAuto(!auto),
						children: auto ? t.stop : i >= last ? t.again : t.auto
					})
				]
			})
		]
	});
}
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
	]],
	"x-rule": [[
		"cream",
		"Thanh kem nằm ngang là thước của thống kê kiểm định.",
		"The cream bar is the ruler the test statistic runs on."
	], [
		"gold",
		"Vạch vàng và viên vàng. Nhãn 5% là mức viết trước, ví dụ minh họa. Viên vượt vạch thì bác câu «không khác». Chưa vượt thì câu đó còn đứng, không phải đã được chứng minh là đúng.",
		"The gold line and the gold ball. The 5% tag is the level written in advance, an example. Past the line, reject “no difference”. Short of it, that sentence still stands. It is not proved true."
	]],
	"x-peek": [[
		"cream",
		"Thanh kem vẫn là thước. Luật đúng thì vạch đứng yên.",
		"The cream bar is still the ruler. Under a real rule the line stays put."
	], [
		"gold",
		"Vạch vàng bị kéo sau khi đã nhìn viên. Viên vừa rơi vào vùng bác vì vạch dời tới nó, không phải vì luật viết trước.",
		"The gold line is dragged after the ball has been seen. The ball falls into the reject zone because the line moved to it, not because of a rule written first."
	]],
	"x-h0": [
		[
			"gold",
			"Thẻ vàng bên trái: câu «không khác». Viết câu này trước khi nhìn số. p được tính như thể câu này đúng. p không phải xác suất câu này đúng.",
			"Left gold card: the “no difference” sentence. Write it before looking at the numbers. p is computed as if this sentence is true. p is not the probability that it is true."
		],
		[
			"clay",
			"Thẻ nâu bên phải: câu «có khác», điều bạn đang nghi. Kiểm định không chứng minh câu này.",
			"Right brown card: “there is a difference”, what you suspect. The test does not prove this sentence."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-rare": [[
		"cream",
		"Đám chấm kem là những mẫu sẽ thấy nếu câu «không khác» đúng.",
		"The cream dots are samples you would see if “no difference” were true."
	], [
		"gold",
		"Chấm vàng là mẫu bạn đang cầm. p là độ hiếm của chấm đó trong đám kem, không phải xác suất câu nhàm đúng.",
		"The gold dot is the sample you hold. p is how rare that dot is among the cream ones, not the probability the dull story is true."
	]],
	"x-err": [
		[
			"gold",
			"Thẻ vàng bên trái: báo động giả. α là tỷ lệ báo động giả khi câu «không khác» đúng. Không phải xác suất bạn đã quyết sai.",
			"Left gold card: a false alarm. α is the false-alarm rate when “no difference” is true. Not the probability that your decision was wrong."
		],
		[
			"clay",
			"Thẻ nâu bên phải: bỏ sót: câu nhàm sai mà bạn không bác. 1 − α không phải sức mạnh của cuộc kiểm.",
			"Right brown card: a miss: a false dull story you failed to reject. 1 − α is not the power of the test."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-t": [[
		"cream",
		"Hàng chấm kem phía trên: độ rộng của nguồn đã biết sẵn.",
		"Upper cream row: the source’s width is already known."
	], [
		"gold",
		"Hàng chấm vàng phía dưới: độ rộng lấy từ chính mẫu, nên đuôi nặng hơn. Vạch bác phải đứng xa hơn.",
		"Lower gold row: the width comes from the sample itself, so the tails are heavier. The reject line has to stand farther out."
	]],
	"x-means": [[
		"cream",
		"Đám kem là kênh GDN, một mức, ví dụ minh họa.",
		"The cream cloud is the GDN channel, one level, an example."
	], [
		"gold",
		"Đám vàng là Facebook, mức kia. Câu hỏi là khoảng cách này có hiếm không nếu hai mức thật ra bằng nhau.",
		"The gold cloud is Facebook, the other level. The question is whether this gap is rare if the two levels are really equal."
	]],
	"x-props": [[
		"cream",
		"Cột kem: tỷ lệ 2,0%, ví dụ minh họa.",
		"Cream bar: a rate of 2.0%, an example."
	], [
		"gold",
		"Cột vàng: tỷ lệ 2,6%. z ví dụ khoảng 1,3, chưa tới vạch 1,96 của mức 5% hai phía. Nhìn khác chưa đủ để bác.",
		"Gold bar: a rate of 2.6%. Example z is about 1.3, short of the 1.96 line for a 5% two-sided test. Looking different is not enough to reject."
	]],
	"x-chi": [
		[
			"gold",
			"Ô vàng: 30 người mua, ví dụ minh họa. Nếu kênh và việc mua không liên quan, ô này kỳ vọng khoảng 20, không phải 30.",
			"Gold cell: 30 buyers, an example. If channel and purchase were unrelated, this cell would be about 20, not 30."
		],
		[
			"cream",
			"Hai ô kem: 70 và 90 người không mua.",
			"The two cream cells: 70 and 90 people who did not buy."
		],
		[
			"clay",
			"Ô nâu: 10 người mua. Một số χ² ví dụ cho cả bảng là 12,5. Đừng kiểm từng ô rồi chọn ô đẹp.",
			"Brown cell: 10 buyers. An example χ² for the whole table is 12.5. Do not test each cell and keep the pretty one."
		]
	],
	"x-anova": [[
		"cream",
		"Hai đám kem: mức 11 và mức 12, ví dụ minh họa. Hai mức này gần nhau.",
		"Two cream clouds: levels 11 and 12, an example. Those two sit close."
	], [
		"gold",
		"Đám vàng: mức 20, đứng xa. F lớn vì 20 xa, không phải vì 11 khác 12.",
		"Gold cloud: level 20, far away. F is large because 20 is far, not because 11 differs from 12."
	]],
	"x-ask": [[
		"cream",
		"Các chấm kem là dữ liệu. Chưa có câu hỏi thì chúng chỉ là một đám chấm.",
		"The cream dots are data. Without a question they are only a pile of dots."
	], [
		"axis",
		"Nhãn «tỷ lệ form?» là câu hỏi, phải đặt trước biểu đồ. Biểu đồ đẹp không phải là câu hỏi.",
		"The label “form rate?” is the question, and it comes before the chart. A pretty chart is not a question."
	]],
	"x-whose": [
		[
			"gold",
			"Thẻ vàng bên trái: bảng của mình. Bạn biết ai được ghi, nên câu kết luận đi được xa hơn.",
			"Left gold card: our own table. You know who was recorded, so the claim can go further."
		],
		[
			"clay",
			"Thẻ nâu bên phải: bảng công khai. Bạn không chọn ai vào file. Đừng nói như thể đó là khách của bạn.",
			"Right brown card: a public file. You did not choose who is in it. Do not talk as if they were your customers."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-types": [
		[
			"gold",
			"Cột vàng: cột số. Chỉ cột này mới có trung bình.",
			"Gold bar: a number column. Only this kind has a mean."
		],
		[
			"clay",
			"Cột nâu: cột chữ, như tên kênh. Trung bình một cái tên không có nghĩa.",
			"Brown bar: a text column, such as a channel name. The average of a name means nothing."
		],
		[
			"cream",
			"Cột kem: cột ngày. Ngày không phải một số cứ lớn dần theo cách bạn nghĩ.",
			"Cream bar: a date column. A date is not a number that simply gets bigger."
		]
	],
	"x-dup": [[
		"cream",
		"Ô kem là dòng thứ nhất của một người.",
		"The cream box is the first row for one person."
	], [
		"gold",
		"Ô vàng là dòng thứ hai của cùng người đó. Khi ô vàng tắt, hai dòng gộp lại và SUM không còn bị nhân đôi.",
		"The gold box is a second row for the same person. When the gold box disappears, the two rows collapse and SUM is no longer doubled."
	]],
	"x-hole": [
		[
			"gold",
			"Thẻ vàng bên trái: ô trống. Trống nghĩa là không biết. Để vậy và nói rõ.",
			"Left gold card: a blank cell. Blank means you do not know. Leave it and say so."
		],
		[
			"clay",
			"Thẻ nâu bên phải: điền số 0. Số 0 là một giá trị. Điền 0 khi không có lý do thì kéo trung bình xuống.",
			"Right brown card: filling with 0. Zero is a value. Filling 0 without a reason pulls the mean down."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-far": [[
		"cream",
		"Đám chấm kem là các điểm bình thường.",
		"The cream dots are the ordinary points."
	], [
		"gold",
		"Chấm vàng đứng xa. Có thể là gõ nhầm, cũng có thể là tuần lễ thật. Hàng rào chỉ đánh dấu, chưa xóa.",
		"The gold dot sits far away. It might be a typo, or a real festival week. A fence only flags it. It does not delete it."
	]],
	"x-z": [
		[
			"gold",
			"Thẻ vàng bên trái: triệu và giây để cạnh nhau. Hai cột khác đơn vị. Cột to át cột nhỏ khi tính khoảng cách.",
			"Left gold card: millions and seconds side by side. Two columns, different units. The big one drowns the small one in a distance."
		],
		[
			"clay",
			"Thẻ nâu bên phải: cùng một thước. z đưa về tâm 0, độ rộng 1. Nó không tạo ra quan hệ, và không biến một cái đuôi thành hình chuông.",
			"Right brown card: one ruler. z puts them at center 0 and width 1. It does not create a relationship, and it does not turn a tail into a bell."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-bad": [[
		"axis",
		"Nhãn 200% không phải một điểm xa của một tỷ lệ. Đó là giá trị không hợp lệ, ví dụ minh họa.",
		"The 200% label is not a far point of a rate. It is an impossible value, an example."
	], [
		"axis",
		"Nhãn 1,1% là một tỷ lệ hợp lệ. Lọc là một quyết định, phải viết lại được.",
		"The 1.1% label is a possible rate. A filter is a decision you must be able to write down."
	]],
	"x-cat": [
		[
			"gold",
			"Cột vàng: tên GDN. Độ cao là ví dụ minh họa, không phải thứ hạng.",
			"Gold bar: the name GDN. The height is an example, not a rank."
		],
		[
			"cream",
			"Cột kem: tên FB.",
			"Cream bar: the name FB."
		],
		[
			"clay",
			"Cột nâu: tên TikTok. Ba tên không có thứ tự. Đếm và lấy phần. Đừng kẻ một đường nối chúng.",
			"Brown bar: the name TikTok. Three names have no order. Count them and take shares. Do not draw a line through them."
		]
	],
	"x-ord": [[
		"cream",
		"Các cột kem là mức sao 1, 2, 4 và 5. Chúng có thứ tự, không xếp theo bảng chữ.",
		"The cream bars are star levels 1, 2, 4 and 5. They have an order. Do not sort them alphabetically."
	], [
		"gold",
		"Cột vàng là mức đang được chỉ (3 sao), không phải mức tốt nhất. Đừng lấy trung bình như thể các sao cách đều là chuyện chắc.",
		"The gold bar is the level being pointed at (3 stars), not the best level. Do not average them as if equal spacing were a fact."
	]],
	"x-num": [[
		"cream",
		"Các chấm kem là phần đông của dãy, nằm thấp.",
		"The cream dots are the bulk of the list, sitting low."
	], [
		"gold",
		"Chấm vàng là một điểm rất cao. Nó kéo trung bình lên. Trung vị vẫn ở giữa dãy. Khi hai số cách nhau, kể về cái đuôi.",
		"The gold dot is one very high point. It pulls the mean up. The median stays in the middle of the list. When the two numbers disagree, talk about the tail."
	]],
	"x-scat": [[
		"cream",
		"Mỗi chấm kem là một cặp số.",
		"Each cream dot is one pair of numbers."
	], [
		"gold",
		"Đường vàng là độ đi cùng nhau. r ví dụ 0,6. r = 0 không có nghĩa là không có hình. Một hình chữ U vẫn có r gần 0.",
		"The gold line is how they move together. An example r is 0.6. r = 0 does not mean there is no shape. A U can still have r near 0."
	]],
	"x-cause": [
		[
			"gold",
			"Cột vàng: số form, ví dụ minh họa.",
			"Gold bar: forms, an example."
		],
		[
			"cream",
			"Cột kem: kem. Form và kem có thể cùng tăng.",
			"Cream bar: ice cream. Forms and ice cream can rise together."
		],
		[
			"clay",
			"Cột nâu cao hơn: mùa lễ, thứ có thể kéo cả hai. r không phải nút nhân quả.",
			"The taller brown bar: a festival, which can pull both. r is not a causal switch."
		]
	],
	"x-group": [
		[
			"cream",
			"Đám kem: nhóm A.",
			"Cream cloud: group A."
		],
		[
			"gold",
			"Đám vàng: nhóm B.",
			"Gold cloud: group B."
		],
		[
			"clay",
			"Đám nâu: nhóm C. Đây là một số và một cột chữ. So từng nhóm. Đừng tính một r cho tên nhóm.",
			"Brown cloud: group C. This is a number and a text column. Compare the groups. Do not compute one r for the group names."
		]
	],
	"x-denom": [
		[
			"gold",
			"Thẻ vàng bên trái: 30% của GDN, ví dụ minh họa: 30 người mua trên 100 dòng GDN. Mẫu số là GDN.",
			"Left gold card: 30% of GDN, an example: 30 buyers out of 100 GDN rows. The denominator is GDN."
		],
		[
			"clay",
			"Thẻ nâu bên phải: 75% của người mua: 30 trên 40 người mua. Mẫu số là người mua. Hai câu khác nhau.",
			"Right brown card: 75% of buyers: 30 out of 40 buyers. The denominator is the buyers. Those are different sentences."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-flip": [
		[
			"gold",
			"Cột vàng hàng trên cao hơn cột kem: bản gộp trông một bên thắng.",
			"On the top row the gold bar is taller than the cream bar: pooled, one side looks ahead."
		],
		[
			"cream",
			"Cột kem hàng trên là phía kia trong bản gộp.",
			"The cream bar on the top row is the other side of the pooled picture."
		],
		[
			"axis",
			"Hàng dưới tách khách mới và khách cũ. Lúc đó phía kia không còn thua. Bản gộp nói ngược vì một bên toàn khách cũ.",
			"The bottom row splits new and returning customers. Then the other side is not behind. The pooled picture says the opposite because one side is mostly returning customers."
		]
	],
	"x-wh": [
		[
			"gold",
			"Thẻ vàng bên trái: bảng đang ghi đơn hôm nay. Đừng kể chuyện cả năm từ bảng này.",
			"Left gold card: the table taking today’s orders. Do not tell a year-long story from this table."
		],
		[
			"clay",
			"Thẻ nâu bên phải: kho 18 tháng, giữ lịch sử để đọc. Đơn mới vẫn ghi ở bảng kia.",
			"Right brown card: an 18-month warehouse, kept for reading. New orders still land in the other table."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-star": [[
		"gold",
		"Ô vàng ở giữa là một sự kiện, một hạt đúng.",
		"The gold box in the middle is one event, one grain."
	], [
		"cream",
		"Các ô kem quanh là tên: kênh, ngày, cửa. Đừng để một dòng vừa là một click vừa là một ngày.",
		"The cream boxes around it are names: channel, date, store. Do not let one row be both a click and a day."
	]],
	"x-key": [[
		"axis",
		"Nhãn «form» trỏ sang nhãn «chiến dịch có thật». Khi chiến dịch đứng cạnh, dòng đang trỏ đúng chỗ.",
		"The “form” label points at “a real campaign”. When the campaign sits beside it, the row points at something that exists."
	], [
		"axis",
		"Khi nhãn chiến dịch trượt ra xa, form đang trỏ vào một mã không có. Khóa ngoại phải chặn dòng mồ côi đó.",
		"When the campaign label slides away, the form points at an id that is not there. A foreign key should block that orphan row."
	]],
	"x-ddl": [
		[
			"gold",
			"Thẻ vàng bên trái: thêm một cột. DDL đổi khung bảng: CREATE, ALTER, DROP.",
			"Left gold card: adding a column. DDL changes the table’s shape: CREATE, ALTER, DROP."
		],
		[
			"clay",
			"Thẻ nâu bên phải: sửa một dòng. DML đổi dòng: INSERT, UPDATE, DELETE. Không phải cùng một việc.",
			"Right brown card: changing a row. DML changes rows: INSERT, UPDATE, DELETE. Not the same job."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-run": [[
		"axis",
		"Nhãn đang phóng to là bước máy đang chạy.",
		"The label that grows is the step the engine is on."
	], [
		"axis",
		"Thứ tự thật là FROM, WHERE, GROUP, HAVING, SELECT, ORDER. Máy không bắt đầu ở chữ SELECT.",
		"The real order is FROM, WHERE, GROUP, HAVING, SELECT, ORDER. The engine does not start at the word SELECT."
	]],
	"x-having": [
		[
			"gold",
			"Thẻ vàng bên trái: WHERE lọc dòng, chạy trước khi cộng. Nó không thấy SUM.",
			"Left gold card: WHERE filters rows, and it runs before the sum. It cannot see SUM."
		],
		[
			"clay",
			"Thẻ nâu bên phải: HAVING lọc nhóm, thấy tổng của nhóm. Ví dụ: TikTok dưới 15 form thì loại cả nhóm đó.",
			"Right brown card: HAVING filters groups, and it sees the group’s total. Example: drop TikTok if its forms are under 15."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-count": [
		[
			"gold",
			"Thẻ vàng bên trái: COUNT(*) = 4, ví dụ minh họa. Bốn dòng, một ô form trống. COUNT(*) đếm dòng.",
			"Left gold card: COUNT(*) = 4, an example. Four rows, one blank form cell. COUNT(*) counts rows."
		],
		[
			"clay",
			"Thẻ nâu bên phải: COUNT(form) = 3. Nó bỏ ô trống. SUM cũng bỏ trống, không coi trống là 0.",
			"Right brown card: COUNT(form) = 3. It skips the blank. SUM skips blanks too. It does not treat a blank as 0."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-join": [[
		"axis",
		"Nhãn «3 form» và «2 dòng giá» là hai bảng, ví dụ minh họa.",
		"The labels “3 forms” and “2 price rows” are the two tables, an example."
	], [
		"axis",
		"Nhãn «6 dòng» là kết quả khi khóa không duy nhất: 3 nhân 2. Đếm trước và sau. Inner bỏ dòng không khớp.",
		"The label “6 rows” is what you get when the key is not unique: 3 times 2. Count before and after. An inner join drops rows that do not match."
	]],
	"x-left": [
		[
			"gold",
			"Thẻ vàng bên trái: cửa không có đơn. Left join vẫn giữ cửa đó. Bên đơn để trống.",
			"Left gold card: a store with no orders. A left join still keeps that store. The order side is blank."
		],
		[
			"clay",
			"Thẻ nâu bên phải: null, không phải 0. Trống không phải doanh thu 0. WHERE bên phải sẽ biến left thành inner.",
			"Right brown card: null, not 0. Blank is not revenue of 0. A WHERE on the right side turns the left join into an inner join."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-union": [
		[
			"gold",
			"Thẻ vàng bên trái: UNION bỏ trùng. Xếp dọc hai bảng cùng cột. Hai dòng giống hệt thì chỉ còn một.",
			"Left gold card: UNION drops copies. Stack two tables with the same columns. Two identical rows become one."
		],
		[
			"clay",
			"Thẻ nâu bên phải: UNION ALL giữ cả hai. Dùng khi trùng vẫn là hai sự kiện.",
			"Right brown card: UNION ALL keeps both. Use it when a copy is still two events."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-win": [
		[
			"gold",
			"Thẻ vàng bên trái: GROUP BY còn 3 dòng, ví dụ. Cộng theo kênh thì mất từng tuần.",
			"Left gold card: GROUP BY leaves 3 rows, an example. Summing by channel loses the weeks."
		],
		[
			"clay",
			"Thẻ nâu bên phải: cửa sổ còn từng tuần. Hạng hoặc tổng chạy được thêm vào mà vẫn giữ từng dòng.",
			"Right brown card: a window keeps each week. A rank or a running total is added and every row stays."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-rank": [
		[
			"gold",
			"Thẻ vàng bên trái: RANK 1, 1, 3. Hai tuần hòa hạng 1 thì hạng kế tiếp nhảy xuống 3.",
			"Left gold card: RANK 1, 1, 3. Two weeks tied for 1 means the next rank skips to 3."
		],
		[
			"clay",
			"Thẻ nâu bên phải: DENSE 1, 1, 2. DENSE_RANK không nhảy. ROW_NUMBER thì phá hòa bằng cách tùy ý: 1 rồi 2 rồi 3.",
			"Right brown card: DENSE 1, 1, 2. DENSE_RANK does not skip. ROW_NUMBER breaks the tie arbitrarily: 1 then 2 then 3."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-part": [[
		"gold",
		"Hai cột vàng đều ghi hạng 1. Mỗi kênh đếm lại từ 1.",
		"Both gold bars say rank 1. Each channel starts again at 1."
	], [
		"cream",
		"Cột kem là hạng 2 của kênh đó. Hạng 1 của TikTok không phải hạng 1 của cả bảng.",
		"The cream bar is rank 2 inside that channel. TikTok’s 1 is not number 1 of the whole table."
	]],
	"x-frame": [[
		"cream",
		"Cột kem nằm ngoài khung, không được cộng vào.",
		"Cream bars sit outside the frame and are not included."
	], [
		"gold",
		"Cột vàng là khung đang trượt, ví dụ 3 dòng quanh dòng này. Không phải cả kênh. Thiếu tuần thì «3 dòng» không phải «3 tuần lịch».",
		"Gold bars are the sliding frame, for example 3 rows around this one. Not the whole channel. If a week is missing, “3 rows” is not “3 calendar weeks”."
	]],
	"x-lag": [[
		"axis",
		"Nhãn «hôm qua 32» là dòng đứng ngay trước, ví dụ minh họa.",
		"The label “yesterday 32” is the one previous row, an example."
	], [
		"axis",
		"Nhãn «hôm nay 40» là dòng hiện tại. Chỉ đúng là hôm qua nếu bạn sắp theo ngày và không thiếu ngày.",
		"The label “today 40” is the current row. It is really yesterday only if you sorted by date and no date is missing."
	]],
	"x-case": [
		[
			"cream",
			"Cột kem: bậc «thấp».",
			"Cream bar: the “low” bin."
		],
		[
			"gold",
			"Cột vàng: bậc «vừa».",
			"Gold bar: the “mid” bin."
		],
		[
			"clay",
			"Cột nâu: bậc «cao». CASE viết các bậc này ngay trong câu, để đọc lại được.",
			"Brown bar: the “high” bin. CASE writes these bins in the query so they stay readable."
		]
	],
	"x-cte": [
		[
			"gold",
			"Thẻ vàng bên trái: đặt tên cho câu con. CTE cho một câu lồng có tên, dễ đọc. Đừng chắc máy chạy nó một lần.",
			"Left gold card: naming the inner query. A CTE gives a nested query a name, so it is easier to read. Do not assume the engine runs it once."
		],
		[
			"clay",
			"Thẻ nâu bên phải: view không phải bản sao. View lưu câu hỏi. Mỗi lần gọi là chạy lại, không phải bản backup của các dòng.",
			"Right brown card: a view is not a copy. A view stores the question. Each use runs it again. It is not a backup of the rows."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-idx": [
		[
			"gold",
			"Thẻ vàng bên trái: lật từng dòng. Không có chỉ mục thì máy đi qua cả bảng.",
			"Left gold card: scanning every row. With no index the engine walks the whole table."
		],
		[
			"clay",
			"Thẻ nâu bên phải: tra đúng mã. Chỉ mục là mục lục cho cột bạn hay lọc. Nó không sửa một câu sai, và ghi thêm thì chậm hơn.",
			"Right brown card: looking up the id. An index is a lookup list for a column you filter on. It does not fix a wrong question, and extra writes get slower."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-proj": [
		[
			"gold",
			"Thẻ vàng bên trái: tuần tới, cùng kiểu. Dự đoán là một dòng mới cùng kiểu với các dòng đã học, kèm độ trượt.",
			"Left gold card: next week, same kind. A prediction is a new row of the same kind as the rows you learned from, with a miss-size."
		],
		[
			"clay",
			"Thẻ nâu bên phải: gấp đôi ngân sách. Đẩy chi tiêu tới chỗ chưa thấy rồi đọc đường. Đó là giả định, không phải dự báo.",
			"Right brown card: doubling the budget. Push spend somewhere you have not seen, then read the line. That is a what-if, not a forecast."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-spec": [
		[
			"gold",
			"Thẻ vàng bên trái: bắt được người rời. Độ nhạy bằng người rời bị gọi chia cho mọi người rời. Cùng là recall.",
			"Left gold card: catching the leavers. Sensitivity is leavers you called divided by all leavers. That is recall."
		],
		[
			"clay",
			"Thẻ nâu bên phải: để yên người ở. Độ đặc hiệu bằng người ở mà bạn không gọi chia cho mọi người ở. Không phải accuracy.",
			"Right brown card: leaving stayers alone. Specificity is stayers you did not call divided by all stayers. Not accuracy."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-who": [
		[
			"gold",
			"Thẻ vàng bên trái: cả file. Xác suất học trên cả file thì chỉ nói về cả file.",
			"Left gold card: the whole file. A probability fit on the whole file talks only about the whole file."
		],
		[
			"clay",
			"Thẻ nâu bên phải: chỉ người nghe máy. Đừng gán số đó cho người không nghe.",
			"Right brown card: only people who picked up. Do not give that number to people who did not."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-drift": [[
		"cream",
		"Cột kem: tháng 3, ví dụ minh họa.",
		"Cream bar: March, an example."
	], [
		"gold",
		"Cột vàng: tháng 12, cao hơn. Cùng một mô hình, nhưng tỷ lệ và kênh đã đổi. AUC tháng 3 không phải giấy phép cho tháng 12.",
		"Gold bar: December, taller. Same model, but the rate and the channels moved. March’s AUC is not a permit for December."
	]],
	"x-treeline": [
		[
			"gold",
			"Thẻ vàng bên trái: một đường thẳng, một độ dốc. Nó trượt nếu form nhảy cóc theo nhóm.",
			"Left gold card: one straight line, one slope. It misses if forms jump by group."
		],
		[
			"clay",
			"Thẻ nâu bên phải: bậc thang của một cây. Ngoài khoảng đã thấy, bậc cuối chỉ là trung bình của lá mép.",
			"Right brown card: the steps of a tree. Outside what it has seen, the last step is only the edge leaf’s average."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-imp": [
		[
			"gold",
			"Cột vàng: cột «ghé». Độ cao là phần làm nhóm sạch hơn khi cắt cột đó, ví dụ minh họa. Không phải «ghé gây ra form».",
			"Gold bar: the visits column. The height is how much splits on that column cleaned the groups, an example. Not “visits cause forms”."
		],
		[
			"cream",
			"Cột kem: cột chi.",
			"Cream bar: the spend column."
		],
		[
			"clay",
			"Cột nâu: tên thứ. Cột sao chép có thể cướp phần của cột kia.",
			"Brown bar: the weekday name. A copy column can steal the credit."
		]
	],
	"x-leaf": [[
		"gold",
		"Hai thanh vàng là trung bình của hai lá. Không phải một độ dốc.",
		"The two gold slabs are the averages of two leaves. Not a slope."
	], [
		"axis",
		"Ra ngoài vết cắt cuối, bạn vẫn nhận số của lá mép.",
		"Past the last cut you still get the edge leaf’s number."
	]],
	"x-kpp": [
		[
			"gold",
			"Thẻ vàng bên trái: hai tâm cùng một đám. Khởi động ngẫu nhiên có thể đặt hai tâm vào một đám, đám kia không có ai.",
			"Left gold card: two centers in one clump. A random start can drop two centers in one clump and leave the other clump empty."
		],
		[
			"clay",
			"Thẻ nâu bên phải: các tâm cách xa. K-means++ chọn tâm sau xa tâm trước. Vẫn nên chạy vài lần. Đó không phải bằng chứng k đúng.",
			"Right brown card: centers spread out. K-means++ picks the next center far from the ones it has. Still run a few starts. That is not proof that k is right."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-link": [
		[
			"gold",
			"Thẻ vàng bên trái: dính chỗ gần nhất. Single linkage lấy hai điểm gần nhất, dễ nối thành một sợi dài.",
			"Left gold card: gluing the nearest. Single linkage uses the closest pair and can chain into a long snake."
		],
		[
			"clay",
			"Thẻ nâu bên phải: dính chỗ xa nhất. Complete lấy hai điểm xa nhất, cụm chặt hơn. Average ở giữa. Không cái nào là đúng tuyệt đối.",
			"Right brown card: gluing the farthest. Complete uses the farthest pair, so clumps are tighter. Average sits in between. None of them is the truth."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-db": [[
		"gold",
		"Đám chấm vàng là vùng đặc, một cụm. Bạn chọn bán kính và số hàng xóm, không chọn k.",
		"The gold dots are a dense patch, one cluster. You pick a radius and a neighbor count, not k."
	], [
		"rust",
		"Chấm đỏ là điểm thưa, ghi «nhiễu». Chúng không bị ép vào cụm. Bán kính sai thì ra một đám, hoặc toàn nhiễu.",
		"The red dots are sparse points, marked “noise”. They are not forced into a cluster. A bad radius is one blob, or all noise."
	]],
	"x-gmm": [
		[
			"cream",
			"Đám kem là một cụm hình bầu dục.",
			"The cream cloud is one blob-shaped cluster."
		],
		[
			"clay",
			"Đám nâu là cụm kia.",
			"The brown cloud is the other cluster."
		],
		[
			"gold",
			"Chấm giữa đổi vàng rồi nâu: nó thuộc một phần mỗi đám, không bị gán cứng. Đám hình vòng thì mô hình này kể sai.",
			"The middle dot flips between gold and brown: it belongs partly to each cloud, not as a hard label. A ring-shaped group is the wrong story for this model."
		]
	],
	"x-kmode": [
		[
			"gold",
			"Cột vàng cao nhất: GDN, ví dụ minh họa. Mode là tên gặp nhiều nhất.",
			"Tallest gold bar: GDN, an example. The mode is the name that shows up most."
		],
		[
			"cream",
			"Cột kem: FB.",
			"Cream bar: FB."
		],
		[
			"clay",
			"Cột nâu: TikTok. Không có trung bình của một tên kênh. K-prototype mới trộn được cột số và cột chữ.",
			"Brown bar: TikTok. A channel name has no mean. K-prototype is what mixes a number column and a text column."
		]
	],
	"x-stem": [
		[
			"gold",
			"Thẻ vàng bên trái: studies thành studi. Stem cắt đuôi, nhanh, và có thể thành một từ không có trong từ điển.",
			"Left gold card: studies becomes studi. A stem chops the ending. It is fast, and it can become a word that is not in the dictionary."
		],
		[
			"clay",
			"Thẻ nâu bên phải: studies thành study. Lemma đưa về từ từ điển. Cả hai đều vứt hình thái, và có thể dán hai nghĩa khác vào một chữ.",
			"Right brown card: studies becomes study. A lemma returns the dictionary word. Both throw the form away, and they can glue two meanings onto one token."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-pmi": [[
		"gold",
		"Cột vàng cao: «chờ lâu». Hai từ đi cùng nhiều hơn mức nếu chúng độc lập.",
		"Tall gold bar: “long wait”. The two words show up together more than if they were independent."
	], [
		"cream",
		"Cột kem thấp: «và spa». «và» đi với mọi thứ nên điểm thấp. Đây không phải ngữ pháp.",
		"Short cream bar: “and spa”. “And” goes with everything, so the score stays low. This is not grammar."
	]],
	"x-git": [[
		"cream",
		"Các ô kem là ảnh cũ của file. Mỗi ô kèm một câu, không phải nút Save trong đầu bạn.",
		"The cream blocks are older snapshots of the files. Each one comes with a sentence, not a Save button that lives in your head."
	], [
		"gold",
		"Ô vàng là ảnh mới nhất trên nhánh «chính».",
		"The gold block is the newest snapshot on “main”."
	]],
	"x-branch": [
		[
			"cream",
			"Các ô kem trên hàng dưới là nhánh «chính», đứng yên.",
			"The cream blocks on the lower row are “main”, and they stay put."
		],
		[
			"gold",
			"Ô vàng là ảnh mới nhất của nhánh chính, tới khi bạn nhập nhánh thử vào.",
			"The gold block is the newest snapshot on main, until you merge the try-line in."
		],
		[
			"clay",
			"Các ô nâu phía trên là nhánh «thử», đi riêng. Chúng hiện ra rồi ẩn, không đụng vào nhánh chính.",
			"The brown blocks above are the “try” line, off on its own. They appear and hide without touching main."
		]
	],
	"x-vote": [[
		"gold",
		"Ô vàng là phiếu «có». Ví dụ minh họa: 4 trên 5.",
		"Gold boxes are yes votes. Example: 4 of 5."
	], [
		"cream",
		"Ô kem là phiếu «không». Kết quả là số đông, không phải cây nào cũng đúng. Rừng giảm nhảy, không sửa một họ mô hình vốn đã lệch.",
		"The cream box is the no vote. The result is the majority, not a claim that every tree is right. A forest calms the jump. It does not fix a family of models that was already biased."
	]],
	"x-boot": [[
		"cream",
		"Năm chấm kem là năm dòng rút lại, có hoàn lại.",
		"The five cream dots are five rows drawn again, with replacement."
	], [
		"axis",
		"Chấm tụt xuống là dòng bị bỏ lượt này. Chấm nhô cao là dòng bị rút hai lần. Mỗi cây thấy một túi hơi khác.",
		"A dot that drops is a row left out this round. A dot that rises is a row drawn twice. Each tree sees a slightly different bag."
	]],
	"x-rf": [
		[
			"gold",
			"Thẻ vàng bên trái: mọi cột đều được xét. Cây nào cũng cắt cột mạnh nhất, nên các cây giống hệt nhau.",
			"Left gold card: every column is offered. Every tree cuts the strongest column, so the trees are copies."
		],
		[
			"clay",
			"Thẻ nâu bên phải: chỉ vài cột ngẫu nhiên. Mỗi nhát cắt chỉ nhìn một nhóm cột rút ra. Các cây bớt giống nhau.",
			"Right brown card: only a few random columns. Each cut may look only at a random handful. The trees look less alike."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-imb": [[
		"cream",
		"Cột kem cao: ở lại 92, ví dụ minh họa.",
		"Tall cream bar: stay, 92, an example."
	], [
		"gold",
		"Cột vàng thấp: rời 8. Gọi không ai rời thì đúng 92% mà không giữ được ai. Accuracy không phải brief.",
		"Short gold bar: leave, 8. Call nobody a leaver and you are 92% right while keeping nobody. Accuracy is not the brief."
	]],
	"x-weight": [
		[
			"gold",
			"Thẻ vàng bên trái: nhân đôi dòng hiếm. Nhân đôi không tạo khách mới. Làm trước khi chia tập thì cùng một người lọt cả hai phía. Đừng làm vậy.",
			"Left gold card: duplicating the rare rows. Duplicating does not create a new customer. Do it before the split and the same person lands on both sides. Do not do that."
		],
		[
			"clay",
			"Thẻ nâu bên phải: tăng giá của dòng hiếm. Trọng số đổi cái giá của một lần bỏ sót. Vẫn là những dòng cũ. Đổi ngưỡng thường là nút nên thử trước.",
			"Right brown card: raising the cost of a rare row. A class weight changes the cost of a miss. The rows are the old rows. Moving the threshold is usually the lever to try first."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-bv": [
		[
			"gold",
			"Thẻ vàng bên trái: đường thẳng trên một hình cong. Đó là lệch: họ mô hình không đủ hình. Cả tập học lẫn tập mới đều trượt.",
			"Left gold card: a straight line on a curve. That is bias: the family cannot make that shape. Both the training rows and new rows miss."
		],
		[
			"clay",
			"Thẻ nâu bên phải: khớp từng điểm nhiễu. Đó là nhảy: đổi mẫu là đổi đường. Tập học đẹp, tập mới xấu.",
			"Right brown card: a fit on each noisy point. That is variance: change the sample and the line changes. Training looks good. New rows look bad."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-ridge": [[
		"cream",
		"Hai cột kem là hai hệ số. Chúng co về 0, ít khi thành đúng 0.",
		"The two cream bars are two coefficients. They shrink toward 0 and rarely become exactly 0."
	], [
		"axis",
		"Phải đưa các cột về cùng một thước trước. Đây không phải xếp hạng nguyên nhân.",
		"Put the columns on one scale first. This is not a causal ranking."
	]],
	"x-lasso": [[
		"gold",
		"Cột vàng ghi «còn»: hệ số được giữ.",
		"The gold bar marked “kept” is a coefficient that stays."
	], [
		"clay",
		"Cột nâu ghi «về 0»: có thể thành đúng 0. Số 0 phụ thuộc thước đo của cột, không có nghĩa cột đó vô dụng ngoài đời.",
		"The brown bar marked “to 0” can become exactly 0. The zero depends on the column’s scale. It does not mean the column is useless in the world."
	]],
	"x-rmse": [[
		"cream",
		"Hai cột kem: mỗi lần trượt 2, ví dụ minh họa. MAE cộng đều các lần trượt.",
		"Two cream bars: a miss of 2 each, an example. MAE adds the misses evenly."
	], [
		"gold",
		"Cột vàng: trượt 10. RMSE bình phương rồi lấy căn, nên lần này bị phạt nặng. R² vẫn là phần phương sai, không phải phần tuần nằm trên đường.",
		"Gold bar: a miss of 10. RMSE squares then takes a root, so this miss is punished hard. R² is still a share of variance, not the share of weeks that sit on the line."
	]],
	"x-log": [
		[
			"gold",
			"Thẻ vàng bên trái: một tuần rất to. Vài tuần chi tiêu gấp chục lần tuần khác. Trung bình bị tuần đó chiếm.",
			"Left gold card: one huge week. A few weeks of spend are tens of times the others. The mean is that week."
		],
		[
			"clay",
			"Thẻ nâu bên phải: log kéo đuôi lại. Log của 0 không có. Phải chọn log(1 + x) hoặc một luật khác, rồi nói lại đơn vị.",
			"Right brown card: log pulling the tail in. Log of 0 does not exist. Choose log(1 + x) or another rule, then translate the unit back."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-hot": [
		[
			"gold",
			"Cột vàng: GDN, một cột 0/1, ví dụ minh họa.",
			"Gold bar: GDN, one 0/1 column, an example."
		],
		[
			"cream",
			"Cột kem: FB, một cột 0/1.",
			"Cream bar: FB, one 0/1 column."
		],
		[
			"ink",
			"Cột đen: TikTok. Mô hình có hệ số chặn thì bỏ một cột, nếu không là bẫy biến giả. Cây thì có thể giữ cả ba.",
			"Dark bar: TikTok. A model with an intercept drops one column, or it is the dummy trap. A tree can keep all three."
		]
	],
	"x-clock": [
		[
			"gold",
			"Thẻ vàng bên trái: một số tăng dần. Một mốc thời gian để nguyên chủ yếu nói «muộn hơn».",
			"Left gold card: one rising number. A raw timestamp mostly says “later”."
		],
		[
			"clay",
			"Thẻ nâu bên phải: thứ, giờ, tháng. Tách cái bạn định dùng. Chủ nhật và thứ hai không phải hai bậc của một đường thẳng.",
			"Right brown card: weekday, hour, month. Split out what you mean. Sunday and Monday are not two steps on a straight line."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-cv": [[
		"cream",
		"Các ô kem là phần đang dùng để học.",
		"The cream boxes are the part used for learning."
	], [
		"gold",
		"Ô vàng là miếng bị giấu lượt này. Điểm là trung bình các lần giấu. Chỉnh mô hình trên chính các lần đó thì điểm hơi đẹp hơn sự thật.",
		"The gold box is the slice hidden this round. The score is the average of those hides. Tune on those same rounds and the score is a bit prettier than the truth."
	]],
	"x-grid": [
		[
			"gold",
			"Thẻ vàng bên trái: mọi ô bạn liệt kê. Lưới thử hết tổ hợp bạn viết. Độ sâu bạn không viết thì không được thử.",
			"Left gold card: every cell you listed. A grid tries every combination you wrote down. A depth you left out is never tried."
		],
		[
			"clay",
			"Thẻ nâu bên phải: rút vài ô trong khoảng. Đỡ tốn khi nhiều nút vô hại. Vẫn chỉ trong khoảng bạn đặt.",
			"Right brown card: drawing a few cells in the range. It wastes less when many knobs do nothing. It still stays inside the ranges you set."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-order": [[
		"cream",
		"Mọi chấm tuần đều kem và đứng đúng thứ tự. Chưa tô một đoạn tương lai.",
		"Every week-dot is cream and stays in order. No future stretch is painted."
	], [
		"gold",
		"Viên vàng chạy lần lượt theo thứ tự đó. Xáo các tuần thì mất đúng cái bạn định dự báo.",
		"The gold bead walks them in that order. Shuffle the weeks and you lose the thing you meant to forecast."
	]],
	"x-dep": [
		[
			"gold",
			"Thẻ vàng bên trái: mỗi tuần một phiếu độc lập. Hồi quy thường tính như các dòng không kéo nhau. Sai số chuẩn rồi sẽ tự tin quá mức.",
			"Left gold card: each week an independent draw. Regression usually counts rows as if they do not pull each other. The standard error then gets too confident."
		],
		[
			"clay",
			"Thẻ nâu bên phải: tuần này giống tuần trước. Phần dư tuần này giống tuần trước. Đó là chuỗi thời gian, không phải một đống dòng.",
			"Right brown card: this week looks like last week. This week’s miss looks like last week’s. That is a time series, not a pile of rows."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-decomp": [
		[
			"gold",
			"Thẻ vàng bên trái: cộng thêm một mùa. Ví dụ minh họa: tháng lễ thêm khoảng 20 form, dù nền cao hay thấp.",
			"Left gold card: adding a season. Example: the festival month adds about 20 forms, whether the base is high or low."
		],
		[
			"clay",
			"Thẻ nâu bên phải: nhân một mùa. Ví dụ: tháng lễ là ×1,4. Nền gấp đôi thì phần mùa cũng to hơn. Phải chọn, đừng đoán.",
			"Right brown card: multiplying a season. Example: the festival month is ×1.4. Double the base and the seasonal swing grows. You have to choose. Do not guess."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-naive": [[
		"cream",
		"Chấm kem là các tuần đã qua.",
		"Cream dots are the weeks already seen."
	], [
		"gold",
		"Chấm vàng ở cuối là «bằng tuần trước». Viên vàng chạy trên các tuần đã có. Mô hình nào không thắng được câu này thì chưa xong.",
		"The gold dot at the end is “same as last week”. The gold bead moves across past weeks. A model that cannot beat that sentence is not done."
	]],
	"x-sma": [[
		"cream",
		"Cột kem nằm ngoài cửa sổ.",
		"Cream bars sit outside the window."
	], [
		"gold",
		"Cột vàng là 3 tuần gần nhất, mỗi tuần một suất bằng nhau. Khúc cua bị chậm. Tuần lễ và tuần thường bị cân như nhau.",
		"Gold bars are the last 3 weeks, each week one equal share. Turns show up late. A festival week and an ordinary week are weighed the same."
	]],
	"x-ses": [
		[
			"cream",
			"Cột kem thấp: tuần cũ, nhẹ.",
			"Short cream bar: an old week, light."
		],
		[
			"clay",
			"Cột nâu: tuần giữa.",
			"Brown bar: a middle week."
		],
		[
			"gold",
			"Cột vàng cao: tuần này, nặng nhất. α ở đây là trọng số làm mượt, không phải α của kiểm định. Không có dốc, không có mùa.",
			"Tall gold bar: this week, heaviest. α here is a smoothing weight, not the test’s α. No slope, no season."
		]
	],
	"x-holt": [[
		"cream",
		"Chấm kem là các tuần đã có.",
		"Cream dots are the weeks already seen."
	], [
		"gold",
		"Chấm vàng phía trước là dốc được đẩy tới. Một tháng lễ không phải một dốc cả năm.",
		"Gold dots ahead are the slope pushed forward. One festival month is not a slope for the whole year."
	]],
	"x-hw": [[
		"cream",
		"Chấm kem là các tuần đã có, có sóng mùa nằm trên đó.",
		"Cream dots are the weeks already seen, with a seasonal wave on them."
	], [
		"gold",
		"Chấm vàng phía trước là mùa được đẩy tiếp. Chu kỳ, ví dụ 7 hoặc 52, là do bạn đưa. Máy không tự tìm.",
		"Gold dots ahead are the season pushed forward. The period, for example 7 or 52, is one you give. The machine does not find it."
	]],
	"x-mape": [
		[
			"cream",
			"Cột kem: 10 form, ví dụ minh họa. MAPE chia được cho số thật.",
			"Cream bar: 10 forms, an example. MAPE can divide by the actual."
		],
		[
			"rust",
			"Cột đỏ thấp: 0 form. MAPE gãy vì chia cho số thật bằng 0.",
			"Short red bar: 0 forms. MAPE breaks because it divides by an actual of 0."
		],
		[
			"gold",
			"Cột vàng: 40 form. MAE vẫn tính bằng form. RMSE phạt tuần lệch lớn.",
			"Gold bar: 40 forms. MAE is still in forms. RMSE punishes a large miss."
		]
	],
	"x-walk": [
		[
			"cream",
			"Ô kem là quá khứ đã dùng để học.",
			"Cream boxes are the past already used for learning."
		],
		[
			"gold",
			"Ô vàng là đoạn đang chấm, đứng ngay sau quá khứ.",
			"The gold box is the block being scored, standing just after the past."
		],
		[
			"ink",
			"Ô đen là đoạn chưa tới. Học quá khứ, chấm đoạn sau, rồi cuốn tới. Xáo tuần vào các fold sẽ cho mô hình nhìn thấy tương lai.",
			"Dark boxes are not reached yet. Learn the past, score the next block, then roll forward. Shuffling weeks into folds lets the model see the future."
		]
	],
	"x-stat": [
		[
			"gold",
			"Thẻ vàng bên trái: mức đứng yên. Tâm và độ rộng không phụ thuộc lúc nào bạn nhìn.",
			"Left gold card: the level stays put. The center and the width do not depend on when you look."
		],
		[
			"clay",
			"Thẻ nâu bên phải: mức trôi đi. Có xu hướng thì chưa dừng. Lấy hiệu tuần này trừ tuần trước. Dự báo mức thì phải hoàn tác phép trừ đó.",
			"Right brown card: the level drifts. A trend is not stationary. Take this week minus last week. To forecast a level you have to undo that subtraction."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-acf": [
		[
			"gold",
			"Cột vàng cao nhất: lag 1, tương quan với tuần ngay trước, ví dụ minh họa.",
			"Tallest gold bar: lag 1, the correlation with the week just before, an example."
		],
		[
			"cream",
			"Hai cột kem: lag 2 và lag 3, thấp dần. PACF là phần còn lại sau khi đã tính các bước gần hơn.",
			"Two cream bars: lag 2 and lag 3, shorter. PACF is what is left after the nearer steps are accounted for."
		],
		[
			"ink",
			"Cột đen thấp: lag 4. Đây là gợi ý, không phải bằng chứng, và chuỗi ngắn hay nói dối.",
			"Short dark bar: lag 4. A hint, not a proof, and a short series often lies."
		]
	],
	"x-ar": [[
		"cream",
		"Mọi chấm tuần đều kem: AR nhìn các tuần đã có, không tô một đoạn tương lai riêng.",
		"Every week-dot is cream: an AR looks at weeks already seen and does not paint a separate future stretch."
	], [
		"gold",
		"Viên vàng chạy trên các tuần đó. AR đoán tuần này từ vài tuần trước, không phải từ các cú sốc.",
		"The gold bead moves across those weeks. An AR guesses this week from a few earlier weeks, not from the shocks."
	]],
	"x-mam": [
		[
			"gold",
			"Thẻ vàng bên trái: trung bình trượt: cộng vài tuần rồi chia, để làm mượt.",
			"Left gold card: a moving average: add a few weeks and divide, to smooth."
		],
		[
			"clay",
			"Thẻ nâu bên phải: sốc của tuần trước. MA trong ARIMA là cú sốc cũ còn vương lại. Cùng chữ, khác việc. Đừng trộn.",
			"Right brown card: last week’s shock. The MA in ARIMA is an old shock still hanging around. Same word, different job. Do not mix them."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-arima": [
		[
			"gold",
			"Thẻ vàng bên trái: lấy hiệu, rồi ARMA. ARIMA lấy hiệu d lần cho chuỗi chịu đứng yên, rồi mới AR và MA. d = 1 là đoán cái thay đổi.",
			"Left gold card: difference, then ARMA. ARIMA differences d times until the series can sit still, then adds AR and MA. d = 1 means you forecast the change."
		],
		[
			"clay",
			"Thẻ nâu bên phải: thêm mùa và một cột. SARIMA thêm chu kỳ. SARIMAX thêm một cột như khuyến mãi. Cột đó ở tuần tới phải biết trước, nếu không bạn đang đoán luôn cả khuyến mãi.",
			"Right brown card: adding a season and a column. SARIMA adds a period. SARIMAX adds a column such as a promo. You must already know that column next week, or you are forecasting the promo too."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-sys": [
		[
			"gold",
			"Thẻ vàng bên trái: một điểm chung. Hai đường cắt nhau thì có một nghiệm. Ví dụ minh họa: (2, 1).",
			"Left gold card: one shared point. Two lines that cross have one solution. Example: (2, 1)."
		],
		[
			"clay",
			"Thẻ nâu bên phải: không có điểm nào. Hai đường song song và mâu thuẫn thì không có điểm nào thỏa cả hai. Đừng bịa một nghiệm.",
			"Right brown card: no shared point. Parallel and contradictory lines have no point on both. Do not invent a solution."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-vadd": [
		[
			"gold",
			"Thẻ vàng bên trái: cộng từng ô. Ví dụ minh họa: (10, 80) + (2, 5) = (12, 85). Không cộng chéo.",
			"Left gold card: adding slot by slot. Example: (10, 80) + (2, 5) = (12, 85). Do not add across."
		],
		[
			"clay",
			"Thẻ nâu bên phải: nhân mọi ô với cùng một số. Nhân 2 là (20, 160). Đường không qua gốc thì nhân sẽ rời đường.",
			"Right brown card: multiplying every slot by the same number. Times 2 is (20, 160). A line that misses the origin leaves the line when you scale."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-arrow": [[
		"gold",
		"Thanh vàng là một véctơ: một danh sách số có thứ tự, không phải một số «tốt hơn».",
		"The gold shaft is a vector: an ordered list of numbers, not one number that is “better”."
	], [
		"axis",
		"Hai nhãn là ví dụ minh họa: 10 triệu chi và 80 form. Đổi chỗ hai số là một véctơ khác.",
		"The two labels are an example: 10 million of spend and 80 forms. Swap the two numbers and it is a different vector."
	]],
	"x-dot": [[
		"gold",
		"Thanh vàng là véctơ thứ nhất, đứng yên.",
		"The gold shaft is the first vector, and it stays put."
	], [
		"cream",
		"Thanh kem xoay. Cùng hướng thì tích lớn. Gần vuông góc thì tích gần 0. Ví dụ minh họa: (2, 3)·(4, 1) = 11.",
		"The cream shaft turns. Same direction, the product is large. Near a right angle, the product is near 0. Example: (2, 3)·(4, 1) = 11."
	]],
	"x-mat": [[
		"cream",
		"Bốn chấm kem là một hình. Ma trận kéo chúng thành hình khác.",
		"The four cream dots are one shape. A matrix pulls them into another shape."
	], [
		"axis",
		"Ví dụ minh họa: trục chi bị kéo gấp đôi, trục form giữ nguyên. Ma trận ăn một véctơ và nhả véctơ khác.",
		"Example: the spend axis is stretched by two, the form axis stays. A matrix eats a vector and returns another."
	]],
	"x-mul": [
		[
			"gold",
			"Thẻ vàng bên trái: 2×3 rồi 3×1. Hàng của ma trận trái gặp cột của ma trận phải. Khớp số ở giữa thì nhân được.",
			"Left gold card: 2×3 then 3×1. A row of the left matrix meets a column of the right. If the middle sizes match, you can multiply."
		],
		[
			"clay",
			"Thẻ nâu bên phải: 3×1 rồi 2×3. Đảo thứ tự thì số ở giữa không khớp. Không phải nhân từng ô.",
			"Right brown card: 3×1 then 2×3. Reverse the order and the middle sizes do not match. It is not cell-by-cell multiply."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-det": [[
		"gold",
		"Mảnh vàng là hình đang bị kéo. Lúc nhãn «diện tích ×2»: định thức là hệ số nhân diện tích. Âm thì lật mặt.",
		"The gold slab is the shape being stretched. When the label says “area ×2”, the determinant is the area multiplier. Negative flips the face."
	], [
		"axis",
		"Lúc nhãn «diện tích 0»: mặt phẳng bị ép thành một đường. Định thức 0 thì không hoàn tác được.",
		"When the label says “area 0”, the plane is pressed into a line. Determinant 0 cannot be undone."
	]],
	"x-eigen": [
		[
			"gold",
			"Thẻ vàng bên trái: chỉ dài ra. Vectơ riêng chỉ bị kéo hoặc lật. Av = λv. Ví dụ minh họa: trục ngang, λ = 2.",
			"Left gold card: it only gets longer. An eigenvector is only stretched or flipped. Av = λv. Example: the horizontal axis, λ = 2."
		],
		[
			"clay",
			"Thẻ nâu bên phải: bị quay đi. Vectơ (1, 1) bị ma trận kéo lệch hướng. Không phải vectơ riêng.",
			"Right brown card: it gets turned. The vector (1, 1) gets its direction changed. It is not an eigenvector."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-slope": [[
		"cream",
		"Các chấm kem là đường cong.",
		"The cream dots are the curve."
	], [
		"gold",
		"Thanh vàng là tiếp tuyến tại đúng một điểm. Đạo hàm là độ dốc của thanh đó, không phải độ dốc của cả đường.",
		"The gold bar is the tangent at one exact point. The derivative is the slope of that bar, not the slope of the whole curve."
	]],
	"x-hess": [
		[
			"gold",
			"Thẻ vàng bên trái: lòng bát. Cong lên mọi phía thì đó là một đáy. Bước nhỏ nào cũng đi lên.",
			"Left gold card: a bowl. Curving up in every direction is a bottom. Every small step goes up."
		],
		[
			"clay",
			"Thẻ nâu bên phải: yên ngựa. Lên một phía, xuống phía kia. Một số đạo hàm bậc hai dương chưa đủ để gọi là đáy khi có hai nút.",
			"Right brown card: a saddle. Up on one side, down on the other. One positive second-derivative number is not enough to call it a bottom when there are two knobs."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-jac": [
		[
			"gold",
			"Chấm vàng bên trái là một bước của đầu vào, ví dụ một bước chi.",
			"The gold dot on the left is one step of the input, for example one step of spend."
		],
		[
			"cream",
			"Chấm kem là đầu ra form. Nó nhích một lượng.",
			"The cream dot is the forms output. It moves by one amount."
		],
		[
			"clay",
			"Chấm nâu là đầu ra giá. Cùng một bước vào, nó nhích một lượng khác. Bảng các lượng nhích đó là Jacobian.",
			"The brown dot is the cost output. The same input step moves it by a different amount. The table of those moves is the Jacobian."
		]
	],
	"x-taylor": [[
		"cream",
		"Các chấm kem là đường cong.",
		"The cream dots are the curve."
	], [
		"gold",
		"Đoạn vàng là tiếp tuyến gần một điểm. Đi xa điểm đó thì đường thẳng nói dối.",
		"The gold segment is the tangent near one point. Far from that point, the straight line lies."
	]],
	"x-mode": [
		[
			"cream",
			"Hai cột kem: số 2 và số 5, gặp ít hơn, ví dụ minh họa.",
			"Two cream bars: 2 and 5, which show up less, an example."
		],
		[
			"gold",
			"Cột vàng cao nhất: số 4, gặp nhiều nhất. Mode là 4. Hai số cùng nhiều nhất thì có hai mode.",
			"Tallest gold bar: 4, which shows up most. The mode is 4. Two numbers tied for most means two modes."
		],
		[
			"ink",
			"Cột đen thấp: số 9, gặp ít. Không có «mode» của một cái tên nếu bạn đang hỏi trung bình.",
			"Short dark bar: 9, which shows up rarely. A name has no mode if what you asked for was a mean."
		]
	],
	"x-q": [[
		"cream",
		"Thước kem và hai vạch kem: Q1 và Q3.",
		"The cream ruler and the two cream ticks: Q1 and Q3."
	], [
		"gold",
		"Vạch vàng ở giữa: Q2, chính là trung vị. IQR = Q3 − Q1. Phần mềm có thể cắt lệch một ô. Nêu cách cắt.",
		"The gold tick in the middle: Q2, which is the median. IQR = Q3 − Q1. Software can disagree by a point. Name the cut."
	]],
	"x-var": [
		[
			"gold",
			"Thẻ vàng bên trái: chia cho n − 1. Ví dụ minh họa: tổng bình phương lệch 32, chia 7, phương sai khoảng 4,57. Căn ra khoảng 2,14. Đây là cách của một mẫu.",
			"Left gold card: divide by n − 1. Example: squared gaps sum to 32, divide by 7, variance about 4.57. The root is about 2.14. This is the sample way."
		],
		[
			"clay",
			"Thẻ nâu bên phải: chia cho n. Cùng dãy, cả nguồn thì ra 4, căn ra 2. Đừng trộn hai cách.",
			"Right brown card: divide by n. The same list, for the whole source, gives 4, and the root is 2. Do not mix the two ways."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-cov": [
		[
			"gold",
			"Thẻ vàng bên trái: cùng phía trung bình thì hiệp phương sai dương. Đơn vị là đơn vị của x nhân đơn vị của y. Đừng so với một cặp khác đơn vị.",
			"Left gold card: the same side of the mean means positive covariance. The unit is x’s unit times y’s unit. Do not compare it with a pair in other units."
		],
		[
			"clay",
			"Thẻ nâu bên phải: khác phía thì hiệp phương sai âm. Dấu là câu chuyện. Độ lớn phụ thuộc thước đo.",
			"Right brown card: opposite sides means negative covariance. The sign is the story. The size depends on the ruler."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"x-drill": [
		[
			"gold",
			"Thẻ vàng bên trái, «bài luyện»: Buổi này là bài luyện hoặc bài nộp. Không có định nghĩa mới.",
			"Left gold card, “a drill”: This session is a drill or a submission. There is no new definition."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «phần dạy»: Mở lại phần dạy của khóa. Đừng học thuộc đáp án.",
			"Right brown card, “the teaching”: Reopen the teaching part of the course. Don't memorize an answer."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-c0-order": [
		[
			"gold",
			"Thẻ vàng bên trái, «đúng thứ tự»: Mục lục mở từ C0-1 tới C7. Mỗi khóa là một tầng, không phải một menu tùy ý.",
			"Left gold card, “in file order”: The contents run from C0-1 to C7. Each course is a layer, not a menu you hop around."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «nhảy có»: Nhảy tới rừng cây khi chưa có một dòng dữ liệu thì phiếu bầu không có gì để đếm.",
			"Right brown card, “skipping ahead”: Jumping to a forest before you have a row of data means the vote has nothing to count."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-c0-read": [
		[
			"gold",
			"Thẻ vàng bên trái, «một ý»: Đọc vì sao cần, nối với ý trước, nhìn hình đang đổi, rồi câu nói cho đúng.",
			"Left gold card, “one idea”: Read why it matters, how it links, watch the picture change, then the precise sentence."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không quiz»: Sổ không hỏi lại bạn. Không có ô trả lời.",
			"Right brown card, “no quiz”: The notebook does not ask you back. There is no answer box."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-crisp-biz": [
		[
			"gold",
			"Thẻ vàng bên trái, «câu hỏi trước»: Chưa có câu «quyết định gì» thì chưa có bài toán.",
			"Left gold card, “question first”: Without “what will be decided”, there is no problem yet."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «file trước»: Có file mà chưa biết ai quyết định thì model không có chỗ dùng.",
			"Right brown card, “file first”: A file with nobody to decide for has nowhere for a model to land."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-crisp-data": [
		[
			"gold",
			"Thẻ vàng bên trái, «cột đang có»: Một cột có mặt không có nghĩa nó đo đúng việc.",
			"Left gold card, “the column you have”: A column being present does not mean it measures the job."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «cột cần quyết»: Đo nhầm thì làm sạch cũng chỉ làm sạch cái nhầm.",
			"Right brown card, “the column you need”: The wrong measure, cleaned, is still the wrong measure."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-crisp-prep": [
		[
			"gold",
			"Thẻ vàng bên trái, «làm cho đúng hạt»: Chuẩn bị là sửa hạt và lỗ hổng. Model là một cách trả lời. Evaluation hỏi cách đó có đỡ quyết định không.",
			"Left gold card, “fix the grain”: Preparation fixes grain and holes. A model is one way to answer. Evaluation asks whether that way helps the decision."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «chấm bằng accuracy»: Accuracy trên lớp đông có thể đẹp mà không giữ được ai.",
			"Right brown card, “score with accuracy”: Accuracy on a crowded class can look good and still keep nobody."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-crisp-ship": [
		[
			"gold",
			"Thẻ vàng bên trái, «một file gửi»: Deployment là quyết định được dùng lặp lại, có người chịu, có lúc nào thì làm lại.",
			"Left gold card, “a file you send”: Deployment is a decision used again, with an owner, and a time when it is rebuilt."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «một quyết định chạy»: Gửi một file cuối tuần không phải là đã đưa vào vận hành.",
			"Right brown card, “a decision that runs”: Sending a Friday file is not the same as running it."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ps-open": [
		[
			"gold",
			"Thẻ vàng bên trái, «sáu bước»: Hiểu việc, đặt khung, tìm nguyên nhân, xét cách, rồi làm và đo.",
			"Left gold card, “six steps”: Understand the job, frame it, find a cause, weigh options, then do it and measure."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «một mẹo»: Buổi 4 và buổi 6 trong file gốc chỉ có tiêu đề. Ý vẫn được dạy ở đây, không bịa thêm video.",
			"Right brown card, “one trick”: Sessions 4 and 6 in the source file are titles only. The idea is still taught here. No fake video."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ps-type": [
		[
			"gold",
			"Thẻ vàng bên trái, «đang chọn»: Việc «chọn» cần một thước. Việc «giải thích» cần một cơ chế. Trộn hai cái thì ra một slide không ai làm được.",
			"Left gold card, “choosing”: A choosing job needs a measure. An explaining job needs a mechanism. Mix them and you get a slide nobody can act on."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «đang giải thích»: «Vì sao form giảm» và «có tắt kênh không» là hai việc.",
			"Right brown card, “explaining”: “Why did forms drop” and “do we turn the channel off” are two jobs."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ps-fact": [
		[
			"gold",
			"Thẻ vàng bên trái, «80 form»: Số là cái đếm được, trong một hạt, trong một khoảng thời gian. Ý kiến là một lời chưa có mẫu số.",
			"Left gold card, “80 forms”: A fact is something counted, at a grain, over a time. An opinion is a sentence with no denominator."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «em thấy yếu»: «Yếu» không cộng được với «80».",
			"Right brown card, “I feel it's weak”: “Weak” cannot be added to “80”."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ps-smart": [
		[
			"gold",
			"Thẻ vàng bên trái, «tăng form»: Một việc SMART nói rõ cái gì, đo bằng gì, với nguồn lực nào, liên quan quyết định nào, và hạn nào.",
			"Left gold card, “raise forms”: A SMART job says what, measured how, with which means, tied to which decision, and by when."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «+20 form, hạn chót»: «Tăng trưởng» không có hạn là một poster.",
			"Right brown card, “plus 20 forms, by a date”: “Growth” with no date is a poster."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ps-rank": [
		[
			"gold",
			"Thẻ vàng bên trái, «làm hạn này»: Ưu tiên là chọn việc nào được nguồn lực của đúng hạn này. Việc còn lại không bị gọi là kém. Nó chỉ không nằm trong hạn.",
			"Left gold card, “this window”: Priority is which job gets this window's means. The rest are not called lesser. They are just not in this window."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «để hạn sau»: Đánh số 1 đến 10 mà vẫn làm cả mười là chưa ưu tiên.",
			"Right brown card, “a later window”: Numbering 1 to 10 and still doing all ten is not a priority."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ps-cause": [
		[
			"gold",
			"Thẻ vàng bên trái, «xoay được»: Một nguyên nhân đáng đưa vào việc là một thứ, nếu đổi nó, thước đã viết sẽ đổi. Bối cảnh không có nút thì không phải nguyên nhân để làm.",
			"Left gold card, “you can turn it”: A cause worth putting in the job is something that, if changed, moves the measure you wrote. A setting with no lever is not a cause you can work."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «chỉ là bối cảnh»: «Thị trường khó» không có nút bấm trong hạn 30/11.",
			"Right brown card, “only the setting”: “The market is hard” has no button inside the 30 Nov window."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ps-opt": [
		[
			"gold",
			"Thẻ vàng bên trái, «cùng một giá»: Một phương án là một việc làm được trong hạn, kèm cái sẽ xảy ra nếu làm, và nếu không làm.",
			"Left gold card, “the same cost”: An option is something you can do in the window, with what happens if you do it, and if you don't."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «mỗi cách một giá»: Ba ý «hay» không có nghĩa là làm được cả ba.",
			"Right brown card, “each way has a cost”: Three “good” ideas does not mean you can do all three."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ps-do": [
		[
			"gold",
			"Thẻ vàng bên trái, «đã làm»: Làm là đổi cái đã chọn. Đo là đếm lại đúng công thức của câu SMART, sau hạn, cùng hạt.",
			"Left gold card, “we did it”: Doing is changing what you chose. Measuring is counting the SMART formula again, after the date, at the same grain."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «đo lại cùng hạt»: Một buổi họp «xong» không phải một phép đo.",
			"Right brown card, “remeasure the same grain”: A meeting called “done” is not a measurement."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-xl-cell": [
		[
			"gold",
			"Thẻ vàng bên trái, «số 80»: Ô số cộng được. Ô chữ chỉ nối. Công thức tính lại khi ô kia đổi.",
			"Left gold card, “the number 80”: A number cell can be added. A text cell only joins. A formula recomputes when the other cell changes."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «chữ «80»»: «80» cộng «20» ra «8020», không ra 100.",
			"Right brown card, “the text “80””: “80” plus “20” becomes “8020”, not 100."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-xl-lock": [
		[
			"gold",
			"Thẻ vàng bên trái, «kéo là trượt»: Không có $ thì địa chỉ đi theo hướng bạn kéo. $ cột giữ cột. $ hàng giữ hàng.",
			"Left gold card, “fill and it walks”: With no $, the address follows the direction you fill. A $ on the column locks the column. A $ on the row locks the row."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «$ là giữ»: Thuế ở ô B1. Kéo xuống mà không khóa thì dòng 2 lấy B2, thường là trống.",
			"Right brown card, “$ keeps it”: The rate sits in B1. Fill down without a lock and row 2 reads B2, usually blank."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-xl-if": [
		[
			"gold",
			"Thẻ vàng bên trái, «trúng một nhánh»: IF hỏi một điều, trả một trong hai. Nhánh sau không được xét nếu nhánh trước đã đúng.",
			"Left gold card, “one branch hits”: IF asks one thing and returns one of two. The later branch is not looked at if the earlier one was true."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «ô trống rơi xuống»: IF(A2<5, «thấp», «cao») gọi ô trống là thấp, vì trống không lớn hơn 5.",
			"Right brown card, “a blank falls through”: IF(A2<5, “low”, “high”) calls a blank low, because a blank is not greater than 5."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-xl-keep": [
		[
			"gold",
			"Thẻ vàng bên trái, «lọc: dòng còn»: Filter ẩn các dòng không khớp. Dòng vẫn trong file. Delete bỏ dòng. SUM thường vẫn cộng cả dòng đang ẩn. SUBTOTAL mới biết bỏ qua dòng ẩn.",
			"Left gold card, “filter: the row stays”: Filter hides rows that don't match. The rows stay in the file. Delete removes them. SUM usually still adds hidden rows. SUBTOTAL is what knows to skip hidden rows."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «xóa: dòng mất»: Ẩn 50 dòng rồi SUM vẫn ra tổng cũ. Không phải filter hỏng. Là SUM không nhìn filter.",
			"Right brown card, “delete: the row is gone”: Hide 50 rows and SUM still shows the old total. The filter is not broken. SUM does not look at the filter."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-xl-chart": [
		[
			"gold",
			"Thẻ vàng bên trái, «cột: so nhóm»: Bar so độ lớn của các nhóm không có thứ thời gian. Line đi theo một trục đã xếp, thường là ngày. Nối các kênh bằng một đường là bịa một độ dốc.",
			"Left gold card, “bars: compare groups”: A bar compares the size of groups that have no time order. A line follows an ordered axis, usually dates. Connecting channels with a line invents a slope."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «đường: theo thời gian»: GDN sang TikTok không phải một xu hướng. Đó là hai nhóm.",
			"Right brown card, “line: over time”: GDN to TikTok is not a trend. Those are two groups."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-xl-pivot": [
		[
			"gold",
			"Thẻ vàng bên trái, «400 dòng»: Pivot cộng, đếm, hoặc lấy trung bình theo nhóm bạn thả vào. Hạt của nguồn vẫn là hạt. Đếm dòng không phải đếm người nếu một người nhiều dòng.",
			"Left gold card, “400 rows”: A pivot sums, counts, or averages by the group you drop in. The source grain stays the grain. A count of rows is not a count of people if one person has many rows."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không phải 400 khách»: Một khách năm dòng thì Count of rows là 5. Distinct là việc khác, và phải gọi đúng tên.",
			"Right brown card, “not 400 customers”: One customer with five rows means a count of rows is 5. Distinct is a different job, and you have to name it."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-xl-look": [
		[
			"gold",
			"Thẻ vàng bên trái, «không thấy: #N/A»: VLOOKUP tìm cột đầu của vùng, trả một cột bên phải. Nhìn sang trái thì nó không làm. Để trống đối số cuối, hoặc ghi TRUE, là tìm gần đúng trên một cột đã sắp.",
			"Left gold card, “missing: #N/A”: VLOOKUP searches the first column of the range and returns a column to the right. It does not look left. Leave the last argument empty, or write TRUE, and it does an approximate match on a sorted column."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «gần đúng, im»: Mã không có trong bảng, mà cột không sắp và đang để gần đúng, có thể ra nhầm một mã khác. Không phải #N/A.",
			"Right brown card, “approximate, quietly”: A code that is not in the table, with an unsorted column and an approximate match, can return a different code. Not #N/A."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-py-run": [
		[
			"gold",
			"Thẻ vàng bên trái, «trên trước»: Một chương trình là các dòng. Dòng dưới nhìn thấy cái dòng trên đã tạo. Thụt đầu dòng là cấu trúc, không phải trang trí.",
			"Left gold card, “the top first”: A program is lines. A lower line can see what an upper line created. Indentation is the structure, not decoration."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «dùng tên chưa có»: Gọi form trước dòng form = 80 thì máy dừng vì chưa có form.",
			"Right brown card, “use a name too early”: Using form before the line form = 80 stops the machine, because form does not exist yet."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-py-type": [
		[
			"gold",
			"Thẻ vàng bên trái, «3 + 4 = 7»: Số, số thực, chữ, đúng/sai, và None là các kiểu khác nhau. None là chưa có, không phải 0, không phải chữ rỗng.",
			"Left gold card, “3 + 4 = 7”: Integer, float, text, true/false, and None are different types. None is “nothing yet”. It is not 0 and not an empty text."
		],
		[
			"clay",
			"Thẻ nâu bên phải, ««3» + «4» = «34»»: Trung bình của cột tên kênh không tồn tại. Đó không phải một số xấu. Đó là nhầm kiểu.",
			"Right brown card, ““3” + “4” = “34””: The mean of a channel-name column does not exist. That is not a bad number. That is the wrong type."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-py-op": [
		[
			"gold",
			"Thẻ vàng bên trái, «n = 80»: = cất một giá trị vào tên. == hỏi hai bên có bằng nhau không. / là chia ra số thực. // là chia lấy phần nguyên.",
			"Left gold card, “n = 80”: = stores a value in a name. == asks whether the two sides are equal. / divides and gives a float. // divides and keeps the integer part."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «n == 80»: 0.1 + 0.2 không đúng bằng 0.3 trong số thực máy. Đừng dùng == để so hai số thực vừa mới tính.",
			"Right brown card, “n == 80”: 0.1 + 0.2 is not exactly 0.3 in machine floats. Don't use == to compare two floats you just computed."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-py-if": [
		[
			"gold",
			"Thẻ vàng bên trái, «một nhánh»: if hỏi một bool. Đúng thì chạy khối thụt vào. elif là các câu hỏi sau, chỉ khi câu trước sai. else là phần còn lại.",
			"Left gold card, “one branch”: if asks a bool. True runs the indented block. elif is a later question, only if the earlier one was false. else is whatever remains."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không phải cả hai»: Chuỗi khác rỗng là đúng. 0 và chuỗi rỗng là sai. Đừng dựa vào đó để bắt ô trống của một bảng nếu bạn chưa kiểm.",
			"Right brown card, “not both”: A non-empty text is true. 0 and an empty text are false. Don't rely on that to catch a blank table cell unless you checked."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-py-loop": [
		[
			"gold",
			"Thẻ vàng bên trái, «đi hết đám»: for tên in đám: chạy một lần cho mỗi phần. while điều kiện: chạy lại đến khi điều kiện sai.",
			"Left gold card, “walk the whole set”: for name in collection: once per item. while condition: again until the condition is false."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «while không có cửa ra»: Xóa phần tử ngay trong danh sách đang for thì máy nhảy cóc. Một phần tử không được thăm.",
			"Right brown card, “while with no exit”: Deleting an item inside the list you are walking makes the machine skip. One item is never visited."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-py-fn": [
		[
			"gold",
			"Thẻ vàng bên trái, «có return»: def đặt tên. Tham số là đầu vào của lần gọi đó. return gửi một giá trị về chỗ gọi. Hết hàm mà không return thì giá trị là None.",
			"Left gold card, “there is a return”: def names it. Parameters are the inputs of that call. return sends a value back to the caller. If the function ends without return, the value is None."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «ra None»: in ra 80 không phải trả về 80. Người gọi nhận None, rồi cộng None thì vỡ.",
			"Right brown card, “you get None”: Printing 80 is not returning 80. The caller receives None, and adding None breaks."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-py-str": [
		[
			"gold",
			"Thẻ vàng bên trái, «bản mới»: str là một dãy ký tự có thứ. Cắt [đầu:cuối] lấy từ đầu, không lấy cuối. Phương thức không sửa chữ gốc nếu bạn không giữ kết quả.",
			"Left gold card, “a new one”: A str is an ordered sequence of characters. A slice [start:end] takes from start and does not take end. A method does not change the original text unless you keep the result."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «bản cũ còn»: tên.strip() mà không gán lại thì tên vẫn còn dấu cách. Cột vẫn bẩn.",
			"Right brown card, “the old one remains”: name.strip() without assigning it back leaves the space on name. The column is still dirty."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-py-list": [
		[
			"gold",
			"Thẻ vàng bên trái, «ô đầu là 0»: List giữ thứ tự và cho phép đổi từng ô. Chỉ số 0 là phần tử đầu. -1 là phần tử cuối. Cắt [a:b] là một danh sách mới, không gồm b.",
			"Left gold card, “the first slot is 0”: A list keeps order and lets you change a slot. Index 0 is the first item. -1 is the last. A slice [a:b] is a new list and does not include b."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «ô cuối là -1»: form[1] trên [80, 90, 70] là 90, không phải 80.",
			"Right brown card, “the last slot is -1”: form[1] on [80, 90, 70] is 90, not 80."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-py-dict": [
		[
			"gold",
			"Thẻ vàng bên trái, «khóa lạ: lỗi»: Dict là khóa tới giá trị. Mỗi khóa một lần. form[\"tiktok\"] mà chưa có khóa thì KeyError. form.get(\"tiktok\") trả None, hoặc một giá trị bạn đưa sẵn.",
			"Left gold card, “unknown key: error”: A dict maps a key to a value. Each key once. form[\"tiktok\"] with no such key is a KeyError. form.get(\"tiktok\") returns None, or a value you supplied."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «get: còn thiếu»: Kênh mới xuất hiện giữa chừng là chuyện bình thường. Coi đó là lỗi chương trình thì vòng chết đúng chỗ dữ liệu mới.",
			"Right brown card, “get: still missing”: A channel showing up halfway is normal. Treating it as a program error kills the loop exactly where the data is new."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-py-tup": [
		[
			"gold",
			"Thẻ vàng bên trái, «không sửa ô»: Tuple giống list ở chỗ có thứ và có chỉ số, khác ở chỗ không append, không gán lại từng ô.",
			"Left gold card, “the slot stays”: A tuple is like a list in order and index, and unlike it in that you cannot append or assign a slot."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «list thì sửa được»: (80, \"tiktok\") là một dòng đã đóng. Muốn đổi form thì tạo bộ mới, không sửa bộ cũ.",
			"Right brown card, “a list can be edited”: (80, \"tiktok\") is a closed row. To change the forms, make a new tuple. Don't edit the old one."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-py-set": [
		[
			"gold",
			"Thẻ vàng bên trái, «có trùng»: Set là tập hợp. Thêm một phần tử đã có thì tập không dài thêm. Kiểm «có trong tập» thì nhanh. Không có chỉ số ô thứ 0 đáng tin.",
			"Left gold card, “duplicates stay”: A set is a collection of uniques. Adding an item you already have does not make it longer. “Is it in the set” is fast. There is no trustworthy slot 0."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «mất trùng, mất thứ»: Ba dòng cùng một mã khách, bỏ vào set, còn một mã. Không còn biết mã đó đứng đầu hay đứng cuối file.",
			"Right brown card, “duplicates go, order goes”: Three rows with the same customer code, put into a set, leave one code. You no longer know whether that code was first or last in the file."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-py-np": [
		[
			"gold",
			"Thẻ vàng bên trái, «một kiểu»: ndarray có shape, thường là (số dòng, số cột). Mọi ô cùng một dtype. Trung bình một trục là một phép trên số.",
			"Left gold card, “one type”: An ndarray has a shape, usually (rows, columns). Every cell shares one dtype. A mean along an axis is an operation on numbers."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «lẫn chữ là hỏng»: Nhét một chữ vào mảng số thì hoặc là lỗi, hoặc cả mảng thành chữ và .mean() không còn là trung bình form.",
			"Right brown card, “text mixed in breaks it”: Put a text into a numeric array and you either get an error, or the whole array becomes text and .mean() is no longer the mean of forms."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-py-ser": [
		[
			"gold",
			"Thẻ vàng bên trái, «canh theo nhãn»: Mỗi dòng của Series có một index. Cộng hai Series là ghép theo index. Khớp thì cộng. Không khớp thì ra thiếu, không phải cộng nhầm hàng dưới.",
			"Left gold card, “align by label”: Each row of a Series has an index. Adding two Series joins on the index. A match adds. A miss becomes missing. It does not add the row below by mistake."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «canh theo chỗ đứng»: Tuần của GDN và tuần của TikTok cùng dài 4, nhưng nhãn ngày lệch một hôm. Cộng theo chỗ đứng là cộng nhầm ngày.",
			"Right brown card, “align by position”: GDN's week and TikTok's week are both length 4, but the date labels are off by a day. Adding by position adds the wrong day."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-py-frame": [
		[
			"gold",
			"Thẻ vàng bên trái, «loc gồm cuối»: loc[dòng, cột] dùng nhãn. iloc dùng số thứ tự, từ 0. loc[\"a\":\"c\"] gồm c. iloc[0:3] không gồm ô số 3.",
			"Left gold card, “loc includes the end”: loc[row, column] uses labels. iloc uses positions, from 0. loc[\"a\":\"c\"] includes c. iloc[0:3] does not include position 3."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «iloc không gồm cuối»: Cắt nhãn từ ngày 1 đến ngày 4 mà dùng iloc theo cảm giác thì dễ mất một ngày hoặc lấy thừa.",
			"Right brown card, “iloc excludes the end”: Slicing labels from day 1 through day 4 with iloc, by feel, easily drops a day or takes an extra one."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-py-plot": [
		[
			"gold",
			"Thẻ vàng bên trái, «cột đếm»: Bar so các nhóm. Line theo thời gian. Trục ghi đơn vị. Tiêu đề là câu nhận xét, không phải tên loại hình.",
			"Left gold card, “a count”: Bars compare groups. A line follows time. The axis states the unit. The title is the claim, not the name of the chart type."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «một tỷ lệ»: 200 form và 20 form là độ lớn. 4% và 8% là tỷ lệ. Vẽ 200 cạnh 20 rồi gọi là kênh tốt hơn là chưa chia cho số click.",
			"Right brown card, “a rate”: 200 forms and 20 forms are sizes. 4% and 8% are rates. Drawing 200 next to 20 and calling a channel better has not divided by clicks."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-py-g1": [
		[
			"gold",
			"Thẻ vàng bên trái, «bài chấm»: Một bài nộp kiểm bạn có dùng được ý cũ. Nó không phải một ý thứ hai.",
			"Left gold card, “graded work”: A submission checks that you can use the old ideas. It is not a second idea."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «mở lại C1»: Sổ không chứa đề và không chứa đáp án.",
			"Right brown card, “reopen C1”: The notebook does not hold the prompt and does not hold the answer."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-py-g2": [
		[
			"gold",
			"Thẻ vàng bên trái, «mở lại bảng»: Câu chấm thư viện hỏi shape, loc hay iloc, và hình có đúng câu không.",
			"Left gold card, “reopen the table”: A library question asks about shape, loc or iloc, and whether the picture matches the sentence."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «học thuộc điểm»: Nhớ mang máng một hàm không cứu một lát cắt gồm nhầm đầu cuối.",
			"Right brown card, “memorize the score”: Half-remembering a function does not save a slice that includes the wrong end."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-math-perm": [
		[
			"gold",
			"Thẻ vàng bên trái, «thứ tự tính»: P(n, k) là số cách xếp k chỗ từ n thứ, có thứ tự.",
			"Left gold card, “order counts”: P(n, k) is the number of ways to fill k seats from n things, in order."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «chỉ cần bộ»: 8 người lấy 3 suất lên sóng: 8×7×6 = 336. Cùng ba người đổi chỗ là một cách khác.",
			"Right brown card, “only the set”: 8 people, 3 seats on air: 8×7×6 = 336. The same three people in another order is another way."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-math-comb": [
		[
			"gold",
			"Thẻ vàng bên trái, «336 cách xếp»: C(n, k) là số bộ k phần tử lấy từ n, không kể thứ tự.",
			"Left gold card, “336 arrangements”: C(n, k) is the number of k-sets from n, ignoring order."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «56 bộ»: 8 người lấy 3, không phân biệt ai ngồi ghế nào: 336 / 6 = 56. 3! = 6 cách xếp một bộ ba.",
			"Right brown card, “56 sets”: 8 people, take 3, and the seats don't matter: 336 / 6 = 56. 3! = 6 ways to order one trio."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-math-disj": [
		[
			"gold",
			"Thẻ vàng bên trái, «không cùng lúc»: Hai việc rời nhau thì không xảy ra cùng lúc. Nếu cả hai đều có xác suất dương, biết việc này xảy ra là biết việc kia không xảy ra. Đó là phụ thuộc.",
			"Left gold card, “never together”: Two disjoint events do not happen together. If both have a positive probability, knowing that one happened tells you the other did not. That is dependence."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «vẫn phụ thuộc»: «Gửi form» và «không gửi form» rời nhau. Biết đã gửi thì chắc chắn không nằm ở nhóm không gửi. Chúng không độc lập.",
			"Right brown card, “still dependent”: “Sent the form” and “did not send the form” are disjoint. Knowing it was sent tells you it is not in the other group. They are not independent."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-math-kind": [
		[
			"gold",
			"Thẻ vàng bên trái, «đếm cách đều»: Cổ điển là số cách thuận trên số cách coi như đều. Tần suất là tỷ lệ sau nhiều lần lặp. Chủ quan là mức bạn sẵn sàng đánh đổi, khi không có cách đều và cũng chưa có nhiều lần lặp.",
			"Left gold card, “count equal ways”: Classical is favorable ways over ways you treat as equal. Frequency is a share after many repeats. Subjective is the stake you would take, when there are no equal ways and not many repeats either."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «một tuần 3%»: 12 form trên 400 phiên là một tần suất của mẫu đó. Không phải «12 cách trên 400 cách đều nhau» nếu các phiên không được xây như những cách đều.",
			"Right brown card, “one week at 3%”: 12 forms out of 400 sessions is a frequency of that sample. It is not “12 ways out of 400 equal ways” unless the sessions were built as equal ways."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ds-pct": [
		[
			"gold",
			"Thẻ vàng bên trái, «chỗ trong dãy»: Phân vị thứ p là một giá trị mà khoảng p phần trăm các quan sát nằm không cao hơn nó, theo đúng quy ước cắt bạn đã chọn.",
			"Left gold card, “a place in the list”: The p-th percentile is a value such that about p percent of the observations sit at or below it, under the cut rule you chose."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «90% của số max»: Dãy 2, 4, 4, 4, 5, 5, 7, 9. Số lớn nhất là 9. 90% của 9 là 8,1. Phân vị 90 không phải 8,1. Nó là một chỗ gần cuối dãy đã sắp.",
			"Right brown card, “90% of the max”: The list 2, 4, 4, 4, 5, 5, 7, 9. The maximum is 9. 90% of 9 is 8.1. The 90th percentile is not 8.1. It is a place near the end of the sorted list."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ds-range": [
		[
			"gold",
			"Thẻ vàng bên trái, «nhìn hai đầu»: Range = giá trị lớn nhất trừ giá trị nhỏ nhất. Mọi số ở giữa không đổi range.",
			"Left gold card, “looks at the ends”: Range = the largest value minus the smallest. Every number in the middle leaves the range unchanged."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «cả đám ở giữa»: Dãy 2, 4, 4, 4, 5, 5, 7, 9 có range 7. Đổi các số 4 thành 5, range vẫn 7.",
			"Right brown card, “the middle is ignored”: The list 2, 4, 4, 4, 5, 5, 7, 9 has range 7. Change the 4s into 5s and the range is still 7."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ds-mad": [
		[
			"gold",
			"Thẻ vàng bên trái, «chia n, không căn»: MAD ở đây là trung bình của |x − trung bình|. Chia cho n. Không lấy căn. Không chia n−1, trừ khi bạn nói một định nghĩa khác.",
			"Left gold card, “divide by n, no root”: MAD here is the mean of |x − mean|. Divide by n. Don't take a root. Don't divide by n−1 unless you name a different definition."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «phương sai thì bình phương»: Dãy 2, 4, 4, 4, 5, 5, 7, 9. Trung bình 5. Độ lệch tuyệt đối 3, 1, 1, 1, 0, 0, 2, 4. Tổng 12. 12/8 = 1,5.",
			"Right brown card, “variance squares”: The list 2, 4, 4, 4, 5, 5, 7, 9. The mean is 5. Absolute gaps 3, 1, 1, 1, 0, 0, 2, 4. Sum 12. 12/8 = 1.5."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-sql-like": [
		[
			"gold",
			"Thẻ vàng bên trái, «% là mọi chữ»: LIKE dùng % cho một cụm bất kỳ và _ cho một ký tự. REGEXP hay RLIKE là biểu thức chính quy, tùy máy, không cùng một thư viện với LIKE.",
			"Left gold card, “% is any text”: LIKE uses % for any stretch and _ for one character. REGEXP or RLIKE is a regular expression, depending on the engine, and it is not the same library as LIKE."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «regex là luật khác»: WHERE kênh LIKE '%tok' khớp tiktok. Nó cũng khớp một chữ rác kết thúc bằng tok. Không có mỏ neo thì đừng tưởng đó là cả ô.",
			"Right brown card, “a regex is another rule”: WHERE channel LIKE '%tok' matches tiktok. It also matches junk that ends in tok. With no anchor, don't treat it as the whole cell."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-sql-date": [
		[
			"gold",
			"Thẻ vàng bên trái, «kiểu ngày»: Lưu ngày bằng kiểu ngày. YEAR, DATE, DATEDIFF làm việc lịch. Cắt chuỗi là làm việc chữ, và lệch khi format đổi.",
			"Left gold card, “a date type”: Store a date as a date type. YEAR, DATE, DATEDIFF do calendar work. Slicing a string does text work, and it breaks when the format changes."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «chữ cắt tay»: Thiếu một ngày trong bảng là không có dòng. Không phải dòng đó bằng 0 form, trừ khi bạn đã tạo dòng 0.",
			"Right brown card, “text sliced by hand”: A missing day in the table is a missing row. It is not a row of 0 forms, unless you created that 0 row."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-sql-nest": [
		[
			"gold",
			"Thẻ vàng bên trái, «chạy một lần»: Câu con không tương quan chạy độc lập. Câu tương quan chạy lại theo từng dòng của câu ngoài, vì nó dùng cột của dòng đó.",
			"Left gold card, “runs once”: An uncorrelated subquery runs on its own. A correlated one runs again for each outer row, because it uses that row's columns."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «chạy từng dòng ngoài»: «Khách có form cao hơn trung bình kênh của chính họ» là tương quan. Nó không tự nhanh hơn một lần JOIN với bảng trung bình.",
			"Right brown card, “runs per outer row”: “Customers above the mean of their own channel” is correlated. It is not automatically faster than a JOIN to a table of means."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-sql-nwin": [
		[
			"gold",
			"Thẻ vàng bên trái, «cùng một cửa»: WINDOW w AS (PARTITION BY ... ORDER BY ...) rồi OVER w dùng lại đúng cửa đó.",
			"Left gold card, “the same window”: WINDOW w AS (PARTITION BY ... ORDER BY ...) and then OVER w reuses that exact window."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «một phép mới»: Hai hàm dùng chung một cái tên cửa sổ thì cùng một cách chia nhóm và cùng một khung. Không phải một hàm được «ưu tiên».",
			"Right brown card, “a new operation”: Two functions that share a window name share the partition and the frame. One function is not “preferred”."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-sql-proc": [
		[
			"gold",
			"Thẻ vàng bên trái, «một câu đọc được»: Stored procedure là một chương trình đã lưu, có thể có nhiều câu, có thể ghi bảng. Hàm (UDF) trả một giá trị và đáng lẽ không giấu một lần quét bảng.",
			"Left gold card, “a query you can read”: A stored procedure is a saved program. It can hold many statements and it can write tables. A function (UDF) returns a value and should not hide a table scan."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «một kịch bản giấu»: Một hàm bọc quanh cột trong WHERE có thể chạy từng dòng và bỏ mục lục. Người đọc chỉ thấy tên hàm.",
			"Right brown card, “a hidden script”: A function wrapped around a column in WHERE can run per row and skip the index. The reader only sees the function's name."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-sql-cur": [
		[
			"gold",
			"Thẻ vàng bên trái, «cả tập một lần»: Cursor mở một kết quả rồi lần từng dòng trong chương trình. Set-based là một câu cho cả đám.",
			"Left gold card, “the whole set at once”: A cursor opens a result and then steps through it in a program. Set-based is one statement for the whole group."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «từng dòng»: Cộng form theo kênh bằng một vòng FETCH là viết lại GROUP BY, chậm hơn, và dễ quên CLOSE.",
			"Right brown card, “one row at a time”: Summing forms by channel with a FETCH loop is a rewrite of GROUP BY, slower, and easy to forget to CLOSE."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ens-oob": [
		[
			"gold",
			"Thẻ vàng bên trái, «dòng bị bỏ»: Out-of-bag là các dòng không được rút vào túi của một cây. Chúng có thể chấm cây đó. Chúng vẫn thuộc tập học, không phải một tháng tương lai.",
			"Left gold card, “a row left out”: Out-of-bag means the rows not drawn into a tree's bag. They can score that tree. They still belong to the learning set. They are not a future month."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không phải tháng sau»: Nhân bản người hiếm trước khi chia tập thì một bản sao có thể nằm trong túi và bản sao kia bị gọi là «ngoài túi». Điểm đẹp vì cùng một người.",
			"Right brown card, “not next month”: Duplicate the rare person before the split and one copy can sit in the bag while the other is called “out of bag”. The score looks good because it is the same person."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-imb-smote": [
		[
			"gold",
			"Thẻ vàng bên trái, «một khách thật»: SMOTE nội suy giữa các dòng thiểu số trong không gian các cột số. Điểm mới không phải một người đã mua.",
			"Left gold card, “a real customer”: SMOTE interpolates between minority rows in the space of the numeric columns. The new point is not a person who bought."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «một điểm nằm giữa»: Làm SMOTE trước khi chia tập thì một điểm nằm giữa có thể đứng một chân ở tập học và một chân ở tập chấm. Đó là rò.",
			"Right brown card, “a point in between”: Run SMOTE before the split and a point in between can stand with one foot in the learning set and one foot in the scoring set. That is leakage."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-tb-why": [
		[
			"gold",
			"Thẻ vàng bên trái, «một câu»: Kéo field mà chưa có câu thì ra một hình không ai quyết được gì.",
			"Left gold card, “one question”: Drag a field with no question and you get a picture nobody can decide from."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «một trang trí»: Màu, logo, và một bản đồ của những thứ không phải chỗ không trả lời ngân sách tuần sau.",
			"Right brown card, “a decoration”: Color, a logo, and a map of things that are not places do not answer next week's budget."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-tb-bar": [
		[
			"gold",
			"Thẻ vàng bên trái, «cột, không thứ thời gian»: Bar so độ lớn. Line đi theo thứ tự, thường là ngày. Nối các hạng mục không có thứ tự là bịa độ dốc.",
			"Left gold card, “bars, no time order”: Bars compare size. A line follows an order, usually dates. Connecting categories that have no order invents a slope."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «đường, theo ngày»: Từ GDN sang TikTok không có «tuần tiếp theo». Một đường giữa hai tên là một dốc giả.",
			"Right brown card, “a line, by date”: There is no “next week” from GDN to TikTok. A line between the two names is a fake slope."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-tb-box": [
		[
			"gold",
			"Thẻ vàng bên trái, «một hộp, nhiều dòng»: Box plot cho thấy trung vị và phần giữa, không phải một khách. Map chỉ hợp khi mỗi điểm là một tọa độ hoặc một vùng thật.",
			"Left gold card, “one box, many rows”: A box plot shows a median and the middle, not one customer. A map only fits when each mark is a real coordinate or a real region."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «bản đồ chỗ giả»: Vẽ ba kênh thành ba nước trên bản đồ là gán một chỗ không có trong dữ liệu.",
			"Right brown card, “a map of fake places”: Drawing three channels as three countries on a map assigns a place that is not in the data."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-tb-part": [
		[
			"gold",
			"Thẻ vàng bên trái, «một tổng»: Pie và treemap cần các phần cùng một tổng, cộng lại thành tổng đó. Nhiều lát thì mắt không so được. Hãy dùng cột.",
			"Left gold card, “one whole”: A pie and a treemap need shares of one whole that add back to that whole. Many slices and the eye cannot compare. Use bars."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «hai hình tròn»: Form GDN cộng form TikTok cộng form khác phải bằng form của đúng tuần đó. Thiếu một kênh mà vẫn vẽ tròn là một tổng giả.",
			"Right brown card, “two pies”: GDN forms plus TikTok forms plus the rest must equal that week's forms. Leave out a channel and the pie is a fake whole."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-tb-join": [
		[
			"gold",
			"Thẻ vàng bên trái, «một khách một dòng»: Join trong Tableau cùng luật với SQL. Khóa không độc nhất thì một dòng bên trái thành nhiều dòng.",
			"Left gold card, “one customer, one row”: A join in Tableau follows the same law as SQL. A key that is not unique turns one left-hand row into many."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «một khách nhiều dòng»: Một khách ba lần ghé, nối với một bảng quà một-nhiều, rồi đếm dòng, ra nhiều hơn số khách.",
			"Right brown card, “one customer, many rows”: One customer with three visits, joined to a one-to-many gift table, then a count of rows, comes out larger than the number of customers."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-tb-calc": [
		[
			"gold",
			"Thẻ vàng bên trái, «công thức»: Calculated field là công thức trên dòng hoặc trên một phép cộng. Nó không tạo dữ liệu ngoài file.",
			"Left gold card, “a formula”: A calculated field is a formula on the row or on an aggregate. It does not create data outside the file."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «một lần đo mới»: form / click viết trong Tableau vẫn là form và click đã có. Click bằng 0 thì công thức vỡ, không phải tỷ lệ 0.",
			"Right brown card, “a new measurement”: form / click written in Tableau is still the forms and clicks you had. Clicks of 0 break the formula. It is not a rate of 0."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-tb-dual": [
		[
			"gold",
			"Thẻ vàng bên trái, «một quyết định»: Dashboard là một trang cho một quyết định. Dual axis là hai measure trên một hình. Không ghi hai đơn vị thì mắt đọc một dốc chung giả.",
			"Left gold card, “one decision”: A dashboard is one page for one decision. A dual axis is two measures on one picture. Without both units labeled, the eye reads one fake shared slope."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «hai thước một trục»: Form và tiền trên một đường, trục do máy chọn, một tuần tiền tăng nhẹ trông như form gấp đôi.",
			"Right brown card, “two rulers, one axis”: Forms and money on one line, with an axis the machine picked, make a small rise in money look like forms doubled."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-xa-text": [
		[
			"gold",
			"Thẻ vàng bên trái, «vẫn là chữ»: LEFT, RIGHT, MID, TRIM trả chữ. Muốn số thì bọc một lần đổi kiểu có chủ đích.",
			"Left gold card, “still text”: LEFT, RIGHT, MID, TRIM return text. If you want a number, wrap an explicit cast."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «chưa phải số»: LEFT của «80 form» lấy «80» vẫn là chữ. Cộng cột đó ra 0 hoặc ra nối, tùy ô.",
			"Right brown card, “not a number yet”: LEFT of “80 form” takes “80” and it is still text. Adding that column gives 0 or joins, depending on the cell."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-xa-count": [
		[
			"gold",
			"Thẻ vàng bên trái, «COUNT: chỉ số»: COUNT đếm ô số. COUNTA đếm ô không rỗng, kể cả chữ. COUNTBLANK đếm ô trống.",
			"Left gold card, “COUNT: numbers only”: COUNT counts numeric cells. COUNTA counts non-empty cells, including text. COUNTBLANK counts empty cells."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «COUNTA: ô có nội dung»: Cột tên 100 khách, COUNT ra 0. Không phải hết khách. Là đếm nhầm hàm.",
			"Right brown card, “COUNTA: cells with something”: A column of 100 customer names, COUNT returns 0. The customers are not gone. The function was the wrong count."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-xa-match": [
		[
			"gold",
			"Thẻ vàng bên trái, «nhìn sang trái»: MATCH trả vị trí của khóa. INDEX lấy ô tại vị trí đó, ở cột bạn chỉ. Cột đó có thể nằm bên trái.",
			"Left gold card, “look left”: MATCH returns the position of the key. INDEX takes the cell at that position, in the column you point at. That column can sit to the left."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «VLOOKUP không chịu»: Tên kênh nằm cột A, mã nằm cột B. VLOOKUP theo mã không lấy được tên, vì tên ở bên trái. INDEX/MATCH lấy được.",
			"Right brown card, “VLOOKUP will not”: Channel name in column A, code in column B. VLOOKUP by code cannot fetch the name, because the name is to the left. INDEX/MATCH can."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-xa-what": [
		[
			"gold",
			"Thẻ vàng bên trái, «đổi đầu vào»: Data table và scenario đổi các ô đầu vào của một công thức bạn đã viết. Chúng không học từ dữ liệu mới.",
			"Left gold card, “change the input”: A data table and a scenario change input cells of a formula you already wrote. They do not learn from new data."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không phải tuần sau»: Đổi giá từ 100 thành 120, lãi trên file đổi theo công thức. Tuần sau giá có thể không phải 120.",
			"Right brown card, “not next week”: Change the price from 100 to 120 and the profit on the file moves by the formula. Next week's price might not be 120."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-xa-macro": [
		[
			"gold",
			"Thẻ vàng bên trái, «lặp các cú bấm»: Macro chạy lại một chuỗi việc đã ghi. Đổi cấu trúc file là chuỗi đó bấm nhầm chỗ.",
			"Left gold card, “repeats the clicks”: A macro reruns a recorded sequence. Change the file's structure and the sequence clicks the wrong place."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không chọn hộ»: Ghi macro lúc đang lọc nhầm một kênh thì lần sau nó lọc nhầm tiếp, rất đều.",
			"Right brown card, “it does not choose”: Record a macro while the wrong channel is filtered and next time it filters the wrong one, very consistently."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-pb-model": [
		[
			"gold",
			"Thẻ vàng bên trái, «sai quan hệ»: Model gồm bảng, khóa, và chiều lọc. Visual hỏi model. Hỏi sai model ra số đẹp và sai.",
			"Left gold card, “a bad relationship”: The model is tables, keys, and filter direction. A visual asks the model. Ask a wrong model and you get a number that is pretty and wrong."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «hình vẫn đẹp»: Một khách nối một-nhiều với đơn, rồi một card đếm dòng đơn, không phải đếm khách. Card vẫn tròn trịa.",
			"Right brown card, “the visual still looks fine”: One customer joined one-to-many to orders, then a card that counts order rows, is not a count of customers. The card still looks tidy."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-pb-pq": [
		[
			"gold",
			"Thẻ vàng bên trái, «một công thức»: Mỗi bước biến bảng. Làm mới thì các bước chạy lại trên nguồn lúc đó. Một cột đã Remove là hết trong model.",
			"Left gold card, “a recipe”: Each step changes the table. On refresh the steps run again on the source as it is then. A column you removed is gone from the model."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «một cú bấm một lần»: Xóa cột chi phí để «đỡ rối» thì mọi measure về chi phí sau này không có cột để mà rối.",
			"Right brown card, “a one-time click”: Remove the cost column to “reduce clutter” and every later cost measure has no column left to be cluttered by."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-pb-grain": [
		[
			"gold",
			"Thẻ vàng bên trái, «một dòng một đơn»: Grain là ý nghĩa của một dòng trong bảng đang dùng. Mọi count và mọi sum ngồi trên hạt đó.",
			"Left gold card, “one row, one order”: Grain is what one row means in the table you are using. Every count and every sum sits on that grain."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không phải một khách»: Bảng đơn: một dòng một dòng hàng. Đếm dòng là đếm dòng hàng, không phải đếm đơn, nếu một đơn có nhiều dòng.",
			"Right brown card, “not one customer”: An order-line table: one row is one line. A count of rows counts lines, not orders, if one order has many lines."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-pb-dax": [
		[
			"gold",
			"Thẻ vàng bên trái, «lưu từng dòng»: Calculated column được tính lúc làm mới và nằm trong từng dòng. Measure được tính khi hình hỏi, trong filter context lúc đó.",
			"Left gold card, “stored per row”: A calculated column is computed on refresh and sits on each row. A measure is computed when a visual asks, in the filter context of that moment."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «tính lại theo lọc»: Một cột tỷ lệ = form/click của từng dòng không đổi khi bạn lọc một tuần. Measure SUM(form)/SUM(click) đổi theo tuần đang lọc.",
			"Right brown card, “recomputed under the filter”: A column rate = form/click of each row does not change when you filter to one week. The measure SUM(form)/SUM(click) changes with the week that is filtered."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-pb-page": [
		[
			"gold",
			"Thẻ vàng bên trái, «một quyết định»: Một trang Power BI nên để một người làm một việc. Thêm slicer là thêm một cách để họ tự làm lạc câu.",
			"Left gold card, “one decision”: A Power BI page should let one person do one job. Another slicer is another way for them to wander off the sentence."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «mười slicer»: Trang «tổng hợp» có tám hình và sáu slicer không ai nhớ câu hỏi gốc.",
			"Right brown card, “ten slicers”: A “summary” page with eight visuals and six slicers means nobody remembers the original question."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-pb-rls": [
		[
			"gold",
			"Thẻ vàng bên trái, «slicer: tự tắt được»: Row-level security lọc các dòng một người được phép thấy, theo danh tính của người đó. Nó không phải một bộ lọc trên trang.",
			"Left gold card, “a slicer: they can turn it off”: Row-level security filters the rows a person is allowed to see, by that person's identity. It is not a filter on the page."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «RLS: không tắt được»: Một slicer để sẵn kênh TikTok vẫn để người đó chọn GDN. RLS thật thì các dòng GDN không có trong mô hình của người đó.",
			"Right brown card, “RLS: they cannot”: A slicer parked on TikTok still lets that person pick GDN. Real RLS means the GDN rows are not in that person's model."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-pb-refresh": [
		[
			"gold",
			"Thẻ vàng bên trái, «kéo lại nguồn»: Scheduled refresh chạy Power Query lại. Thành công thì model đổi theo nguồn. Thất bại thì model cũ còn đó, rất im.",
			"Left gold card, “pull the source again”: A scheduled refresh reruns Power Query. If it succeeds, the model follows the source. If it fails, the old model stays, very quietly."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không lưu hôm qua»: Lịch 6 giờ sáng lỗi từ thứ Hai. Thứ Năm bạn vẫn thấy số Chủ nhật. Không có một measure nào «nhớ» là số đã cũ.",
			"Right brown card, “it does not store yesterday”: The 6am schedule has failed since Monday. On Thursday you still see Sunday's number. No measure “remembers” that the number is old."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-fw-5why": [
		[
			"gold",
			"Thẻ vàng bên trái, «dừng ở nút xoay»: Mỗi vì sao phải là một cơ chế, không phải một tính từ. Dừng khi câu tiếp theo là một thay đổi trong quy trình mà hạn này làm được.",
			"Left gold card, “stop at a lever”: Each why has to be a mechanism, not an adjective. Stop when the next sentence is a process change this window can make."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «dừng ở «do người»»: «Nhân viên quên» là một chỗ dừng quá sớm. Câu sau có thể là «không có checklist trước khi gửi». Cái đó xoay được.",
			"Right brown card, “stop at “a person””: “The staff forgot” is too early a stop. The next sentence might be “there is no checklist before sending”. That one you can turn."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-fw-spin": [
		[
			"gold",
			"Thẻ vàng bên trái, «bốn kiểu hỏi»: Situation hỏi việc đang chạy thế nào. Problem hỏi chỗ đang kẹt. Implication hỏi kẹt đó kéo theo gì. Need-payoff hỏi nếu hết kẹt thì cái gì khá lên.",
			"Left gold card, “four kinds of question”: Situation asks how the job runs now. Problem asks where it is stuck. Implication asks what the stuck part drags with it. Need-payoff asks what gets better if it is unstuck."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «một kịch bản gài»: Hỏi xoáy cho đối phương phải nói «có» không phải SPIN. Đó là một mánh. SPIN không chứng minh một giải pháp.",
			"Right brown card, “a script that traps”: Pushing questions until the other person must say “yes” is not SPIN. That is a trick. SPIN does not prove a solution."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-fw-ask": [
		[
			"gold",
			"Thẻ vàng bên trái, «còn đang hỏi»: Danh sách câu hỏi là một dụng cụ. Câu trả lời mới là nguyên liệu. Nguyên liệu chưa kiểm thì chưa thành khuyến nghị.",
			"Left gold card, “still asking”: A list of questions is a tool. The answers are the material. Unchecked material is not a recommendation yet."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «đã kết luận»: Năm câu hỏi hay không bằng một số đo lại được.",
			"Right brown card, “already a verdict”: Five good questions are not equal to one number you can remeasure."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-fw-bmc": [
		[
			"gold",
			"Thẻ vàng bên trái, «chín giả thuyết»: Business model canvas có chín ô: phân khúc, giá trị, kênh, quan hệ khách, dòng doanh thu, nguồn lực, hoạt động chính, đối tác, cơ cấu chi phí.",
			"Left gold card, “nine hypotheses”: The business model canvas has nine boxes: segments, value, channels, customer relationships, revenue streams, resources, key activities, partners, cost structure."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «chín sự thật»: Viết «khách trẻ thích trải nghiệm» trong ô phân khúc là một giả thuyết. Không có một cuộc đếm nào ở trong cây bút.",
			"Right brown card, “nine facts”: Writing “young customers like experiences” in the segment box is a hypothesis. There is no count inside the pen."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-fw-mece": [
		[
			"gold",
			"Thẻ vàng bên trái, «chồng nhau»: Mutually exclusive: một thứ chỉ nằm một nhánh. Collectively exhaustive: mọi thứ câu hỏi cần đều có nhánh.",
			"Left gold card, “they overlap”: Mutually exclusive: a thing sits in only one branch. Collectively exhaustive: everything the question needs has a branch."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không chồng, đủ»: Chia form thành «kênh mới» và «TikTok» thì TikTok mới bị đếm hai lần. Quên kênh cũ thì bị sót.",
			"Right brown card, “no overlap, and complete”: Split forms into “new channels” and “TikTok” and a new TikTok is counted twice. Forget the old channels and you have a gap."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-fw-7p": [
		[
			"gold",
			"Thẻ vàng bên trái, «bảy mục kiểm»: Product, price, place, promotion, people, process, physical evidence. Bảy mục. Không có thứ tự ai thắng.",
			"Left gold card, “seven checks”: Product, price, place, promotion, people, process, physical evidence. Seven items. No order of who wins."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «bảy hạng»: Cho promotion 5 điểm và process 2 điểm là một cuộc chấm không có công thức. Hai mục không cùng đơn vị.",
			"Right brown card, “seven ranks”: Giving promotion 5 points and process 2 points is a scoring with no formula. The two items do not share a unit."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-fw-5c": [
		[
			"gold",
			"Thẻ vàng bên trái, «năm phía»: Company, customers, competitors, collaborators, climate. Năm phía. Mỗi phía một số hoặc một câu kiểm được.",
			"Left gold card, “five sides”: Company, customers, competitors, collaborators, climate. Five sides. Each side gets a number or a sentence you can check."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «năm tính từ»: «Đối thủ mạnh» là một tính từ. «Đối thủ đang lấy cùng một từ khóa với giá thầu cao hơn» là một câu kiểm được.",
			"Right brown card, “five adjectives”: “The competitor is strong” is an adjective. “The competitor is buying the same keyword at a higher bid” is a sentence you can check."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-st-shape": [
		[
			"gold",
			"Thẻ vàng bên trái, «có chỗ kẹt»: Context là cái đang bình thường. Conflict là chỗ không còn bình thường. Resolution là việc bạn muốn được chốt.",
			"Left gold card, “there is a stuck place”: Context is what was normal. Conflict is where it is no longer normal. Resolution is the decision you want closed."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «chỉ có một hình»: Một cột form không có chỗ kẹt thì người nghe không biết phải làm gì với cột đó.",
			"Right brown card, “only a picture”: A bar of forms with no stuck place means the listener does not know what to do with the bar."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-st-who": [
		[
			"gold",
			"Thẻ vàng bên trái, «năm phút, một việc»: Audience là người trong phòng: họ quyết định được việc gì, họ đã tin gì, họ có bao lâu.",
			"Left gold card, “five minutes, one job”: The audience is the person in the room: what they are allowed to decide, what they already believe, and how long they have."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «cả sổ tay»: Một founder có năm phút không cần thấy từng bước làm sạch. Một analyst cần, nếu việc của họ là kiểm hạt.",
			"Right brown card, “the whole notebook”: A founder with five minutes does not need every cleaning step. An analyst does, if their job is to check the grain."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-st-insight": [
		[
			"gold",
			"Thẻ vàng bên trái, «xu hướng»: Trend là theo thời gian. Difference là giữa các nhóm. Share là phần của một tổng. Outlier là một điểm tách đám. Together là hai thứ đi cùng nhau, chưa phải nguyên nhân.",
			"Left gold card, “a trend”: Trend is over time. Difference is between groups. Share is part of one whole. Outlier is a point apart from the group. Together means two things move together, which is not yet a cause."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không phải hình tròn»: «Form và chi cùng tăng» là together. Nó không phải «chi gây ra form». C2 đã nói đi cùng không phải nguyên nhân.",
			"Right brown card, “not a pie”: “Forms and spend rise together” is together. It is not “spend causes forms”. C2 already said moving together is not a cause."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-st-pyramid": [
		[
			"gold",
			"Thẻ vàng bên trái, «câu chốt trước»: Kim tự tháp: câu trả lời ở đỉnh, dưới là các lý do cùng một tầng, dưới nữa là bằng chứng của từng lý do.",
			"Left gold card, “the decision first”: The pyramid: the answer at the top, the reasons on one level under it, the evidence for each reason under that."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «để đến slide cuối»: Mười phút dẫn dắt rồi mới nói «nên cắt kênh» là mười phút người nghe không biết mình đang đi đâu.",
			"Right brown card, “saved for the last slide”: Ten minutes of buildup before “we should cut the channel” is ten minutes the listener does not know where they are going."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-st-one": [
		[
			"gold",
			"Thẻ vàng bên trái, «một thông điệp»: Một trang một thông điệp. Nếu bạn cần chữ «và» để nối hai quyết định, đó là hai trang.",
			"Left gold card, “one message”: One page, one message. If you need the word “and” to join two decisions, that is two pages."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «hai tiêu đề»: «Cắt kênh này và làm lại thương hiệu» là hai việc. Một slide làm cả hai thì không việc nào được chốt.",
			"Right brown card, “two headlines”: “Cut this channel and redo the brand” is two jobs. One slide that does both closes neither."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-st-board": [
		[
			"gold",
			"Thẻ vàng bên trái, «thứ tự câu»: Mỗi khung là một câu, một hình, và việc người nghe làm với khung đó. Đổi thứ tự là đổi lập luận.",
			"Left gold card, “the order of sentences”: Each frame is one sentence, one picture, and what the listener does with that frame. Change the order and you change the argument."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «một bảng màu»: Chọn xong màu mà chưa có thứ tự các câu thì chưa có chuyện. Chỉ có một tập slide.",
			"Right brown card, “a color palette”: Pick the colors with no order of sentences and you have no story. You have a pile of slides."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-or-obj": [
		[
			"gold",
			"Thẻ vàng bên trái, «cái cần cực đại»: Objective là hàm cần cực đại hoặc cực tiểu. Decision variable là những số bạn được chọn. Chúng không phải cùng một ô.",
			"Left gold card, “what you maximize”: The objective is the function to maximize or minimize. Decision variables are the numbers you are allowed to choose. They are not the same cell."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «cái bạn được chọn»: «Tối đa doanh thu» mà ô doanh thu lại là ô bạn gõ tay thì bạn đang gõ kết quả, không đang chọn.",
			"Right brown card, “what you are allowed to choose”: “Maximize revenue” while the revenue cell is a cell you type means you are typing the result, not choosing."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-or-con": [
		[
			"gold",
			"Thẻ vàng bên trái, «tiêu một lần»: Constraint là một bất đẳng thức trên các biến. Tổng sử dụng không vượt quá lượng có, trừ khi bạn viết một giới hạn khác và chịu nó.",
			"Left gold card, “spent once”: A constraint is an inequality on the variables. Total use does not exceed what you have, unless you wrote a different limit and you accept it."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «cộng vượt»: Ba kênh mỗi kênh xin cả ngân sách tháng thì không phải ba phương án cùng khả thi. Đó là một giới hạn bị viết thiếu.",
			"Right brown card, “added past the limit”: Three channels each asking for the whole month's budget are not three feasible options together. That is a constraint you forgot to write."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-or-sens": [
		[
			"gold",
			"Thẻ vàng bên trái, «còn đúng góc này»: Shadow price là mức mục tiêu đổi khi nới một ràng buộc một đơn vị, trong khoảng góc hiện tại còn là góc tối ưu.",
			"Left gold card, “still this corner”: The shadow price is how the objective moves when you loosen one constraint by one unit, inside the range where the current corner stays optimal."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «đã sang góc khác»: Nới ngân sách thêm một ít mà góc các kênh vẫn vậy thì giá bóng dùng được. Nới đến mức một kênh bị tắt hẳn thì giá bóng cũ hết hạn.",
			"Right brown card, “already another corner”: Loosen the budget a little and the channel corner stays: the shadow price still applies. Loosen it until a channel turns off entirely and the old shadow price has expired."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-or-solv": [
		[
			"gold",
			"Thẻ vàng bên trái, «tìm một góc»: Với ràng buộc tuyến tính và mục tiêu tuyến tính, phương án tối ưu nằm ở một đỉnh. Phi tuyến có thể có nhiều chỗ lõm. Solver dừng ở một chỗ không có nghĩa hết chỗ khác tốt hơn.",
			"Left gold card, “finds a corner”: With linear constraints and a linear objective, an optimum sits at a vertex. A nonlinear problem can have many dents. A solver stopping does not mean there is no better place."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «dừng ở một lõm»: Một hàm lãi cong theo giá. Solver từ một giá xuất phát có thể dừng ở một đỉnh cục bộ. Đổi điểm xuất phát ra một số khác.",
			"Right brown card, “stops in a dent”: A profit function curved in price. A solver from one starting price can stop at a local peak. Start from another price and you can get another number."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-or-sheet": [
		[
			"gold",
			"Thẻ vàng bên trái, «ô được trỏ»: Ô mục tiêu, các ô biến, từng dòng giới hạn: solver không đọc phần còn lại của sheet.",
			"Left gold card, “a cell that is pointed at”: The objective cell, the variable cells, each constraint row: the solver does not read the rest of the sheet."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «một ghi chú»: Bạn ghi «tối đa 40 suất» ở một ô chữ bên cạnh. Không đưa ô đó vào constraints thì 40 không tồn tại với solver.",
			"Right brown card, “a note”: You type “at most 40 slots” in a text cell nearby. If that cell is not in the constraints, 40 does not exist for the solver."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ga-next": [
		[
			"gold",
			"Thẻ vàng bên trái, «chữ kế tiếp»: Mô hình chấm các mảnh chữ có thể đứng tiếp theo. Nó không mở file giá của bạn trừ khi đoạn chữ đó đang nằm trong prompt.",
			"Left gold card, “the next text”: The model scores pieces of text that might come next. It does not open your price file unless that text is already in the prompt."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không tra bảng»: Hỏi «giá gói tháng này» mà không đưa bảng giá thì câu trả lời là một câu hợp lệ, không phải một dòng trong bảng.",
			"Right brown card, “not a table lookup”: Ask “this month's package price” without giving the price table and the answer is a grammatical sentence, not a row in the table."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ga-vs": [
		[
			"gold",
			"Thẻ vàng bên trái, «đoán một cột»: Một model churn trả một xác suất trên một dòng khách. Một mô hình sinh trả một đoạn chữ. Thước của hai việc khác nhau.",
			"Left gold card, “predict a column”: A churn model returns a probability on one customer row. A generative model returns a piece of text. The measures of the two jobs differ."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «nối chữ»: Accuracy của một lớp hiếm không phải thước của một đoạn chat. Một đoạn chat hay không phải một AUC.",
			"Right brown card, “continue text”: Accuracy on a rare class is not the measure of a chat paragraph. A pleasant paragraph is not an AUC."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ga-stack": [
		[
			"gold",
			"Thẻ vàng bên trái, «đổi dữ liệu đưa vào»: Model là trọng số. Data là cái bạn đưa vào lần gọi này. Product là việc người dùng làm với câu trả lời.",
			"Left gold card, “change the data you pass”: The model is the weights. The data is what you pass on this call. The product is what the user does with the answer."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «đổi trọng số»: Sửa một câu trong prompt là sửa data của lần gọi. Không phải fine-tune. Không phải một sản phẩm mới.",
			"Right brown card, “change the weights”: Editing a sentence in the prompt edits the data of that call. It is not a fine-tune. It is not a new product."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ga-use": [
		[
			"gold",
			"Thẻ vàng bên trái, «có giá của một lần sai»: Một việc GenAI cần một người chịu, một đầu ra, và một cách xử lý khi đầu ra sai. Demo không có ba thứ đó.",
			"Left gold card, “there is a cost of being wrong”: A GenAI job needs an owner, an output, and a way to handle a wrong output. A demo has none of the three."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «một demo»: Một đoạn chat viết được bài quảng cáo. Đưa nhầm giá vào bài đó thì cái giá là tiền và lòng tin, không phải «chữ chưa hay».",
			"Right brown card, “a demo”: A chat can write an ad. Put the wrong price in that ad and the cost is money and trust, not “the prose is not nice yet”."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ga-chat": [
		[
			"gold",
			"Thẻ vàng bên trái, «chỉ thấy message này»: Một lần gọi nhận một danh sách message: system, user, và có thể là các lượt trước bạn tự gửi lại. Không gửi lại thì không còn.",
			"Left gold card, “it only sees these messages”: One call receives a list of messages: system, user, and maybe earlier turns you send again yourself. If you don't send them again, they are gone."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không nhớ hộ»: Hôm qua bạn nói giá trong một phiên khác. Hôm nay một request mới không kèm câu đó thì mô hình không «nhớ giá hôm qua».",
			"Right brown card, “it does not remember for you”: Yesterday you said a price in another session. Today a new request without that sentence means the model does not “remember yesterday's price”."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ga-temp": [
		[
			"gold",
			"Thẻ vàng bên trái, «đa dạng hơn»: Temperature cao: các mảnh ít điểm hơn vẫn có cơ hội được chọn. Thấp: nghiêng về mảnh điểm cao. Không mảnh nào trở thành một dòng trong bảng giá nhờ nút này.",
			"Left gold card, “more variety”: High temperature: lower-scoring pieces still get a chance. Low: it leans toward the high-scoring piece. No piece becomes a row in the price table because of this knob."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không đúng hơn»: Hạ temperature mà bảng giá không nằm trong message thì câu vẫn có thể viết sai giá, chỉ ít bay hơn.",
			"Right brown card, “not more true”: Lower the temperature while the price table is not in the messages and the sentence can still write the wrong price. It just wanders less."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ga-tok": [
		[
			"gold",
			"Thẻ vàng bên trái, «dài ra là đắt»: Bạn trả theo token vào và token ra. Một trần ngữ cảnh cắt phần không còn chỗ. Phần bị cắt là phần mô hình không thấy.",
			"Left gold card, “longer costs more”: You pay for tokens in and tokens out. A context ceiling cuts what no longer fits. The cut part is the part the model does not see."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «quá trần thì cụt»: Dán 200 trang chính sách vào một lần gọi có thể tốn tiền và vẫn mất đúng trang có điều khoản bạn cần, nếu trang đó bị cắt.",
			"Right brown card, “past the ceiling it cuts”: Pasting 200 pages of policy into one call can cost money and still lose the page with the clause you need, if that page is what gets cut."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ga-prompt": [
		[
			"gold",
			"Thẻ vàng bên trái, «đủ ba phần»: Task là làm gì. Context là tài liệu và các ràng buộc của lần này. Format là đầu ra trông thế nào, để máy hoặc người sau đọc được.",
			"Left gold card, “the three parts”: The task is what to do. The context is the documents and the limits of this call. The format is what the output should look like, so a machine or the next person can read it."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «một lời cổ vũ»: «Viết cho hay» không nói dùng bảng nào, cũng không nói cần một đoạn hay một bảng.",
			"Right brown card, “a pep talk”: “Write it well” does not say which table to use, and does not say whether you need a paragraph or a table."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ga-few": [
		[
			"gold",
			"Thẻ vàng bên trái, «một dạng để bắt chước»: Bạn đưa một vài đầu vào và đầu ra mẫu. Mô hình noi dạng. Các mẫu không phải một tập chấm, cũng không phải một khảo sát.",
			"Left gold card, “a shape to copy”: You give a few sample inputs and outputs. The model follows the shape. The samples are not a scoring set, and they are not a survey."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không phải bằng chứng»: Hai ví dụ «khách trẻ thì thích A» không đo được khách trẻ. Nó chỉ dạy mô hình viết theo kiểu đó.",
			"Right brown card, “not evidence”: Two examples of “young customers like A” do not measure young customers. They only teach the model to write in that style."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-ga-cot": [
		[
			"gold",
			"Thẻ vàng bên trái, «các bước trôi»: Xin mô hình viết từng bước có thể đổi câu trả lời. Các bước có thể mạch lạc và sai.",
			"Left gold card, “fluent steps”: Asking the model to write steps can change the answer. The steps can be coherent and wrong."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không phải chứng minh»: Một chuỗi «vì A nên B nên giá là 100» không tra bảng. Nó chỉ là một chuỗi chữ.",
			"Right brown card, “not a proof”: A chain “because A, therefore B, therefore the price is 100” does not look up a table. It is only a chain of text."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-sa-tune": [
		[
			"gold",
			"Thẻ vàng bên trái, «đổi trọng số»: Fine-tune chỉnh trọng số bằng các ví dụ huấn luyện. RAG để nguyên trọng số và nhét các đoạn tài liệu vào prompt rồi mới viết.",
			"Left gold card, “change the weights”: Fine-tune adjusts weights with training examples. RAG leaves the weights and puts document passages into the prompt before writing."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «đổi tài liệu»: Giá đổi mỗi sáng. Fine-tune đêm qua không biết giá sáng nay. RAG chỉ biết nếu đoạn giá sáng nay được đưa vào lần gọi.",
			"Right brown card, “change the documents”: The price changes every morning. Last night's fine-tune does not know this morning's price. RAG only knows if this morning's price passage is put into the call."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-sa-react": [
		[
			"gold",
			"Thẻ vàng bên trái, «có kết quả công cụ»: ReAct là reason rồi act bằng một công cụ, rồi observe đúng cái công cụ trả về. Quan sát không phải một câu mô hình ước.",
			"Left gold card, “there is a tool result”: ReAct is reason, then act with a tool, then observe exactly what the tool returned. The observation is not a sentence the model guesses."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «tự bịa đã tra»: Không có dòng log gọi catalog thì không được nói tồn kho. Dù câu chữ rất chắc.",
			"Right brown card, “invents that it looked”: With no log line that called the catalog, you may not state the stock. Even if the sentence is very sure."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-sa-stage": [
		[
			"gold",
			"Thẻ vàng bên trái, «ba chặng»: Chặng một là nói dựa trên prompt. Chặng hai là công cụ và catalog. Chặng ba là chấm các ca đã có. Sổ không bịa lời thoại của một cuộc gọi.",
			"Left gold card, “three stages”: Stage one is talking from the prompt. Stage two is the tool and the catalog. Stage three is scoring cases you already have. The notebook does not invent the lines of a call."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «một thoại bịa»: Một đoạn «khách nói: cho tôi gói 2 triệu» không có trong tài liệu thì đừng thêm vào để bài dễ chấm.",
			"Right brown card, “an invented transcript”: A line “the customer said: give me the 2-million package” is not in the material, so don't add it to make the case easier to score."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-sa-tool": [
		[
			"gold",
			"Thẻ vàng bên trái, «số từ catalog»: Công cụ catalog nhận một mã và trả các trường đang có: giá, tồn, điều kiện. Thiếu mã thì không có số.",
			"Left gold card, “a number from the catalog”: The catalog tool takes a code and returns the fields that exist: price, stock, conditions. No code, no number."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «số từ câu hay»: Model viết «khoảng 2 triệu» trong khi catalog không được gọi. Đó không phải một ước lượng. Đó là một số bịa.",
			"Right brown card, “a number from a fluent sentence”: The model writes “about 2 million” while the catalog was not called. That is not an estimate. That is an invented number."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-sa-score": [
		[
			"gold",
			"Thẻ vàng bên trái, «giống nhau»: Self-consistency là chạy vài lần rồi lấy câu hay gặp. Các lần cùng bịa một giá thì câu hay gặp vẫn là giá bịa.",
			"Left gold card, “they agree”: Self-consistency is several runs, then the sentence that shows up most. If the runs invent the same price, the frequent sentence is still an invented price."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không phải đã đúng»: Năm lần cùng nói «còn hàng» trong khi catalog nói hết thì sự nhất trí là năm lần sai.",
			"Right brown card, “not the same as correct”: Five runs all say “in stock” while the catalog says none left. The agreement is five wrong runs."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-rag-why": [
		[
			"gold",
			"Thẻ vàng bên trái, «file ở ngoài»: RAG tìm một vài đoạn rồi để mô hình viết có các đoạn đó trong prompt. Không tìm thì mô hình không thấy file.",
			"Left gold card, “the file is outside”: RAG finds a few passages and lets the model write with those passages in the prompt. If it does not find them, the model does not see the file."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «đoạn được đưa vào»: Hỏi chính sách hoàn tiền mà không retrieval thì câu trả lời không đứng trên chính sách của công ty.",
			"Right brown card, “a passage is put in”: Ask the refund policy with no retrieval and the answer does not stand on the company's policy."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-rag-emb": [
		[
			"gold",
			"Thẻ vàng bên trái, «gần hướng»: Embedding đặt một đoạn chữ thành một vectơ. Đoạn gần nhau thì góc gần. Gần không có nghĩa là cùng một điều khoản, và cũng không có nghĩa là chứa đúng từ bạn gõ.",
			"Left gold card, “near in direction”: An embedding turns a passage into a vector. Nearby passages have a nearby angle. Near does not mean the same clause, and it does not mean it contains the exact word you typed."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không phải đúng điều khoản»: «Được hoàn khi lỗi của shop» và «không được hoàn khi lỗi của shop» có thể nằm gần nhau vì cùng các chữ. Gần mà trái nghĩa.",
			"Right brown card, “not the correct clause”: “Refunds are allowed when the shop is at fault” and “refunds are not allowed when the shop is at fault” can sit near each other because they share words. Near, and opposite."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-rag-chunk": [
		[
			"gold",
			"Thẻ vàng bên trái, «còn cả điều khoản»: Chunk là mảnh bạn cắt từ file để tìm và để nhét vào prompt. Mảnh cụt mất điều kiện phía sau thì mô hình chỉ thấy nửa luật.",
			"Left gold card, “the whole clause”: A chunk is a piece you cut from the file to search and to put in the prompt. A piece that loses the condition after it means the model only sees half the rule."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «chỉ còn một nửa»: «Được hoàn tiền» nằm một mảnh, «trừ khi đã qua 7 ngày» nằm mảnh sau không được tìm. Câu trả lời sẽ cho hoàn.",
			"Right brown card, “only a half remains”: “Refunds are allowed” sits in one piece, “unless 7 days have passed” sits in the next piece and is not retrieved. The answer will allow the refund."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-rag-vec": [
		[
			"gold",
			"Thẻ vàng bên trái, «top-1»: Vector store trả các đoạn gần nhất. Gần nhất trong kho hiện tại vẫn có thể là đoạn sai, đoạn cũ, hoặc một nửa điều khoản.",
			"Left gold card, “top-1”: A vector store returns the nearest passages. The nearest in the current store can still be the wrong passage, an old passage, or half a clause."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «chưa đối chiếu»: Điểm 0,91 của một mục quảng cáo không thắng điểm 0,86 của đúng điều khoản, nếu bạn không đọc.",
			"Right brown card, “not checked yet”: A score of 0.91 on an ad does not beat a score of 0.86 on the real clause, if you don't read."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-rag-idx": [
		[
			"gold",
			"Thẻ vàng bên trái, «file đã đổi»: Index là bản các đoạn đã cắt và đã embedding. Sửa file nguồn không sửa index, trừ khi bạn xây lại.",
			"Left gold card, “the file changed”: The index is the cut, embedded passages. Editing the source file does not edit the index, unless you build it again."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «mục lục chưa đổi»: Sửa một câu trong PDF rồi hỏi ngay. Câu mới không có trong index. Câu trả lời bám câu cũ.",
			"Right brown card, “the index has not”: Edit one sentence in the PDF and ask immediately. The new sentence is not in the index. The answer sticks to the old sentence."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-rag-rank": [
		[
			"gold",
			"Thẻ vàng bên trái, «xếp lại đoạn đang có»: Re-ranker chấm lại một danh sách đoạn đã tìm. Đoạn không nằm trong danh sách đó không được chấm.",
			"Left gold card, “reorders what you have”: A re-ranker scores again a list of passages already retrieved. A passage that is not in that list does not get scored."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không thêm đoạn»: Top-20 toàn là FAQ. Re-rank chọn FAQ nghe hợp nhất. Điều khoản không có trong 20 thì không thắng.",
			"Right brown card, “it adds no passage”: The top 20 are all FAQ. The re-rank picks the FAQ that sounds best. A clause that is not in the 20 does not win."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-rag-near": [
		[
			"gold",
			"Thẻ vàng bên trái, «một lần chạy»: Demo là một câu hỏi bạn chọn vì nó chạy được. Bộ ca gồm cả câu cố ý khó: trái nghĩa, điều khoản bị cắt, file mới hơn index.",
			"Left gold card, “one run”: A demo is a question you picked because it runs. A case set includes questions that are hard on purpose: an opposite, a cut clause, a file newer than the index."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «một bộ ca»: Một câu trên slide ra đúng đoạn. Ba câu khách sẽ hỏi thì chưa được nhìn. Demo không kể ba câu đó.",
			"Right brown card, “a set of cases”: One question on the slide returns the right passage. The three questions a customer will ask have not been looked at. The demo does not mention those three."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-rag-store": [
		[
			"gold",
			"Thẻ vàng bên trái, «đúng tên kho»: Vector store giữ các đoạn theo collection. Hỏi một collection thì các collection kia đứng im.",
			"Left gold card, “the right store name”: A vector store keeps passages by collection. Ask one collection and the others sit still."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «kho bên cạnh không được hỏi»: Giá ở collection catalog, chính sách ở collection policy. Lần gọi chỉ mở catalog thì không thấy chính sách, dù hai kho cùng một máy.",
			"Right brown card, “the store next to it is not asked”: Prices live in the catalog collection, the policy in the policy collection. A call that only opens catalog does not see the policy, even if both stores are on the same machine."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-rag-demo": [
		[
			"gold",
			"Thẻ vàng bên trái, «ống chạy»: In được một câu là hệ thống sống. Đúng hay sai là việc của các ca: đoạn nào vào prompt, có thêm số không có trong đoạn không.",
			"Left gold card, “the pipe runs”: Printing a sentence means the system is alive. Right or wrong is the job of the cases: which passage entered the prompt, and whether a number that is not in the passage was added."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «chưa chấm»: Demo in một câu hoàn tiền nghe ổn. Không ai ghi đoạn nào đã vào. Không có gì để chấm.",
			"Right brown card, “not scored yet”: The demo prints a refund sentence that sounds fine. Nobody writes down which passage entered. There is nothing to score."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-im-grid": [
		[
			"gold",
			"Thẻ vàng bên trái, «một lưới số»: Mỗi ô lưới là một giá trị màu. Mô hình tạo các giá trị đó. Nó không chụp một nơi có thật chỉ vì câu chữ nhắc tên nơi đó.",
			"Left gold card, “a grid of numbers”: Each cell of the grid is a color value. The model creates those values. It does not photograph a real place just because the text names the place."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không phải biên bản»: Một ảnh «cửa hàng của mình» do mô hình viết không phải ảnh cửa hàng, trừ khi bạn đưa ảnh cửa hàng vào và vẫn phải kiểm.",
			"Right brown card, “not a record”: A picture of “our shop” that the model wrote is not a picture of the shop, unless you passed a picture of the shop in, and you still have to check."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-im-vae": [
		[
			"gold",
			"Thẻ vàng bên trái, «giữ cái chung»: Bộ mã hóa nén. Bộ giải nén dựng một lưới gần. Những chi tiết ít gặp bị hy sinh vì chỗ trong vectơ không đủ.",
			"Left gold card, “keeps what is common”: The encoder compresses. The decoder builds a nearby grid. Rare details are sacrificed because the vector does not have room."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «mất cái riêng»: Một khuôn mặt cụ thể sau một vòng nén-giải có thể còn giống một khuôn mặt, mất nốt ruồi. Đó không phải ảnh gốc.",
			"Right brown card, “the particular is gone”: A specific face after a compress-and-decode can still look like a face, and lose a mole. That is not the original photo."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-im-gan": [
		[
			"gold",
			"Thẻ vàng bên trái, «qua mặt người chê»: Generator giả. Discriminator chê. Khi kẻ giả qua mặt được người chê, ảnh trông giống tập luyện. Tập luyện không phải thế giới hôm nay.",
			"Left gold card, “gets past the critic”: The generator forges. The discriminator criticizes. When the forger gets past the critic, the picture looks like the training set. The training set is not the world today."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không phải đã xảy ra»: Một ảnh sản phẩm qua được discriminator vẫn có thể là một sản phẩm không có trong catalog của bạn.",
			"Right brown card, “not something that happened”: A product picture that gets past the discriminator can still be a product that is not in your catalog."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-im-diff": [
		[
			"gold",
			"Thẻ vàng bên trái, «gỡ nhiễu»: Xuất phát từ nhiễu, mỗi bước bớt nhiễu một chút, ra một lưới trông như ảnh. Không bước nào là một câu SELECT.",
			"Left gold card, “undo noise”: Start from noise, each step removes a little noise, and you get a grid that looks like a photo. No step is a SELECT."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không tra kho»: Nhắc tên một cửa hàng không làm bước gỡ nhiễu mở file ảnh cửa hàng đó.",
			"Right brown card, “not a library lookup”: Naming a shop does not make the denoising step open that shop's photo file."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-im-txt": [
		[
			"gold",
			"Thẻ vàng bên trái, «lái»: Một prompt nói chủ đề, kiểu, và các thứ không muốn. Ảnh ra bám các chữ đó theo cách mô hình biết. Nó không ký nhận ảnh là hàng thật, người thật, hay thương hiệu của bạn.",
			"Left gold card, “steers”: A prompt says the subject, the style, and what you don't want. The picture follows those words the way the model knows how. It does not sign that the picture is real stock, a real person, or your brand."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không chứng nhận»: Gõ tên một sản phẩm của bạn. Ảnh có thể mang một logo gần giống, sai chi tiết, và không phải file nhận diện đã duyệt.",
			"Right brown card, “does not certify”: Type your product's name. The picture may carry a near-logo, wrong in the details, and it is not the approved identity file."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-rag-job": [
		[
			"gold",
			"Thẻ vàng bên trái, «trong tài liệu được giao»: Nếu một điều khoản không nằm trong tập tài liệu của bài, câu trả lời không được lấy nó từ chỗ khác, kể cả từ một lần huấn luyện.",
			"Left gold card, “in the given documents”: If a clause is not in the assignment's documents, the answer may not take it from somewhere else, including from a training run."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «từ trí nhớ»: Đề là các văn bản được giao. Một điều luật bạn «nhớ» không nằm trong tập đó thì không được viết vào câu trả lời như thể nó ở trong tập.",
			"Right brown card, “from memory”: The brief is the documents you were given. A rule you “remember” that is not in that set may not be written into the answer as if it were in the set."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-lc-tpl": [
		[
			"gold",
			"Thẻ vàng bên trái, «điền từ dữ liệu»: Template có các biến. Biến không được truyền thì chỗ đó trống hoặc lỗi, tùy cách bạn viết. Đừng bắt mô hình «tự hiểu chỗ trống».",
			"Left gold card, “filled from data”: A template has variables. A variable you don't pass is empty or an error, depending on how you wrote it. Don't ask the model to “understand the blank”."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «trống và bịa»: Biến `policy` không được truyền. Mô hình vẫn viết một chính sách. Đó là một chính sách không nguồn.",
			"Right brown card, “empty, then invented”: The `policy` variable is not passed. The model still writes a policy. That policy has no source."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-lc-parse": [
		[
			"gold",
			"Thẻ vàng bên trái, «đúng dạng»: Bạn xin JSON hoặc một bảng các trường. Model viết một đoạn văn. Parser không đọc được. Đó là lúc dừng.",
			"Left gold card, “the shape holds”: You ask for JSON or a table of fields. The model writes a paragraph. The parser cannot read it. That is when you stop."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «vỡ thì dừng»: Bắt lỗi rồi điền `{\"price\": 0}` là biến một lần vỡ thành một giá 0. Khách có thể bị thu 0.",
			"Right brown card, “if it breaks, stop”: Catch the error and fill `{\"price\": 0}` and you turn one break into a price of 0. A customer might be charged 0."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-lc-agent": [
		[
			"gold",
			"Thẻ vàng bên trái, «đường đã vẽ»: Chain gọi các bước theo thứ tự bạn viết: khuôn, model, parser, có thể một công cụ. Agent chọn công cụ kế tiếp dựa trên chữ nó vừa viết.",
			"Left gold card, “a path you drew”: A chain calls steps in the order you wrote: template, model, parser, maybe a tool. An agent chooses the next tool from the text it just wrote."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «tự chọn, có trần»: Agent được phép gọi catalog rồi gọi nữa. Không có trần thì một lần hỏi tồn kho thành hai mươi lần gọi và một hóa đơn.",
			"Right brown card, “it chooses, with a cap”: An agent is allowed to call the catalog and then call it again. With no cap, one stock question becomes twenty calls and a bill."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	],
	"g-cap-none": [
		[
			"gold",
			"Thẻ vàng bên trái, «dùng các khóa trước»: File gốc của capstone chỉ có tiêu đề module. Không có video, không có một dataset mẫu trong sổ này.",
			"Left gold card, “use the earlier courses”: The source file of the capstone has only a module title. No video, and no sample dataset in this notebook."
		],
		[
			"clay",
			"Thẻ nâu bên phải, «không có buổi mới»: Tự bịa một file khách rồi gọi là capstone là một bài khác, không phải bài của giáo trình.",
			"Right brown card, “no new session”: Inventing a customer file and calling it the capstone is a different assignment, not the syllabus one."
		],
		[
			"gold",
			"Gạch vàng dưới một thẻ là phía đang được giải thích. Hai thẻ lần lượt nổi lên.",
			"The gold strip under a card marks the side being explained. The two cards take turns coming forward."
		]
	]
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
				className: "mt-2 space-y-3",
				children: legend.map(([swatch, vi, en]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-3 text-base leading-relaxed",
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
/** Viết gọn một bảng. */
function T(name, c, r, m) {
	return {
		name,
		c,
		r,
		m
	};
}
/** Viết gọn một bước. */
function S(vi, en, t, code) {
	return {
		vi,
		en,
		code,
		t
	};
}
var mem = (r, m = {}) => T("bộ nhớ", ["tên", "giá trị"], r, m);
var df = (m = {}) => T("df", [
	"",
	"channel",
	"spend"
], [
	[
		"a",
		"GDN",
		8
	],
	[
		"b",
		"Meta",
		12
	],
	[
		"c",
		"TikTok",
		6
	]
], m);
var pyDemos = {
	"py-run": [S("Python đọc từ trên xuống. Dòng 1 dùng cpl khi chưa ai tạo nó nên báo lỗi.", "Python reads top to bottom. Line 1 uses cpl before anyone created it, so it errors.", [mem([["cpl", "chưa có"]], { bad: [0] })], "print(cpl)      # dòng 1: NameError\ncpl = 8 / 24    # dòng 2"), S("Đảo thứ tự: tạo cpl trước, dùng sau. Bộ nhớ có tên cpl nên dòng print chạy được.", "Swap the order: create cpl first, use it after. The memory holds the name cpl, so print works.", [mem([["cpl", .333]], { add: [0] })], "cpl = 8 / 24    # dòng 1: tạo tên\nprint(cpl)      # dòng 2: dùng tên")],
	"py-type": [
		S("Với số nguyên, + là cộng.", "With integers, + adds.", [T("biểu thức", [
			"biểu thức",
			"kết quả",
			"kiểu"
		], [[
			"3 + 4",
			7,
			"int"
		]], { rows: [0] })]),
		S("Với chuỗi, + là nối. «3» + «4» ra «34», không phải 7.", "With strings, + joins. \"3\" + \"4\" gives \"34\", not 7.", [T("biểu thức", [
			"biểu thức",
			"kết quả",
			"kiểu"
		], [
			[
				"3 + 4",
				7,
				"int"
			],
			[
				"\"3\" + \"4\"",
				"\"34\"",
				"str"
			],
			[
				"\"3\" * 2",
				"\"33\"",
				"str"
			]
		], { rows: [1, 2] })]),
		S("Trộn số với chuỗi thì Python từ chối, vì kiểu quyết định phép nào hợp lệ.", "Mix a number with a string and Python refuses, because the type decides which operation is valid.", [T("biểu thức", [
			"biểu thức",
			"kết quả",
			"kiểu"
		], [
			[
				"3 + 4",
				7,
				"int"
			],
			[
				"\"3\" + \"4\"",
				"\"34\"",
				"str"
			],
			[
				"3 + \"4\"",
				"TypeError",
				"—"
			]
		], { bad: [2] })])
	],
	"py-op": [
		S("Một dấu = là gán: đặt tên x vào ô nhớ giá trị 5.", "One = assigns: it puts the name x on a memory slot holding 5.", [mem([["x", 5]], { add: [0] })], "x = 5"),
		S("Hai dấu == là so sánh: hỏi «x có bằng 5 không?» và trả về True. x không đổi.", "Two == compare: they ask whether x equals 5 and return True. x does not change.", [mem([["x", 5], ["x == 5", "True"]], { cells: [[1, 1]] })], "x == 5"),
		S("So sánh với 6 ra False, và x vẫn là 5. Chỉ dấu = mới làm bộ nhớ đổi.", "Comparing with 6 gives False, and x is still 5. Only = changes memory.", [mem([["x", 5], ["x == 6", "False"]], { cells: [[1, 1]] })], "x == 6")
	],
	"py-if": [
		S("Với spend = 12, nhánh if đúng nên chạy. Các nhánh sau không được xét.", "With spend = 12, the if branch is true so it runs. The later branches are not even checked.", [T("nhánh", [
			"nhánh",
			"điều kiện",
			"chạy?"
		], [
			[
				"if",
				"spend >= 10",
				"chạy"
			],
			[
				"elif",
				"spend >= 6",
				"bỏ qua"
			],
			[
				"else",
				"(còn lại)",
				"bỏ qua"
			]
		], {
			rows: [0],
			dim: [1, 2]
		})], "spend = 12\nif spend >= 10: tier = 'cao'\nelif spend >= 6: tier = 'vừa'\nelse: tier = 'thấp'"),
		S("Với spend = 8, if sai nên xét tiếp: elif đúng và chạy. Else bỏ qua.", "With spend = 8, if is false so it checks on: elif is true and runs. Else is skipped.", [T("nhánh", [
			"nhánh",
			"điều kiện",
			"chạy?"
		], [
			[
				"if",
				"spend >= 10",
				"sai"
			],
			[
				"elif",
				"spend >= 6",
				"chạy"
			],
			[
				"else",
				"(còn lại)",
				"bỏ qua"
			]
		], {
			rows: [1],
			dim: [0, 2]
		})], "spend = 8"),
		S("Với spend = 4, hai điều kiện đều sai nên else chạy. Luôn đúng một nhánh.", "With spend = 4, both conditions fail so else runs. Exactly one branch runs.", [T("nhánh", [
			"nhánh",
			"điều kiện",
			"chạy?"
		], [
			[
				"if",
				"spend >= 10",
				"sai"
			],
			[
				"elif",
				"spend >= 6",
				"sai"
			],
			[
				"else",
				"(còn lại)",
				"chạy"
			]
		], {
			rows: [2],
			dim: [0, 1]
		})], "spend = 4")
	],
	"py-loop": [
		S("for đi qua từng phần tử của danh sách, lần lượt một. Bắt đầu: total = 0.", "for walks through each element of a list, one by one. Start: total = 0.", [T("vòng lặp", [
			"vòng",
			"spend",
			"total"
		], [[
			"—",
			"—",
			0
		]])], "total = 0\nfor spend in [8, 10, 12]:\n    total = total + spend"),
		S("Vòng 1: spend = 8, total thành 8. Vòng 2: spend = 10, total thành 18.", "Turn 1: spend = 8, total becomes 8. Turn 2: spend = 10, total becomes 18.", [T("vòng lặp", [
			"vòng",
			"spend",
			"total"
		], [[
			1,
			8,
			8
		], [
			2,
			10,
			18
		]], { add: [0, 1] })]),
		S("Vòng 3: spend = 12, total thành 30. Hết phần tử thì for tự dừng.", "Turn 3: spend = 12, total becomes 30. When the elements run out, for stops by itself.", [T("vòng lặp", [
			"vòng",
			"spend",
			"total"
		], [
			[
				1,
				8,
				8
			],
			[
				2,
				10,
				18
			],
			[
				3,
				12,
				30
			]
		], { add: [2] })]),
		S("while thì khác: nó lặp tới khi điều kiện sai. Quên đổi spend thì điều kiện mãi đúng và không bao giờ dừng.", "while is different: it repeats until the condition is false. Forget to change spend and the condition stays true forever.", [T("vòng lặp", ["vòng", "spend < 10 ?"], [
			[1, "đúng"],
			[2, "đúng"],
			[3, "đúng"],
			["…", "đúng mãi"]
		], { bad: [3] })], "spend = 8\nwhile spend < 10:\n    print(spend)   # quên tăng spend")
	],
	"py-fn": [S("Hàm nhận hai số và trả về s / f. return là thứ người gọi nhận lại.", "The function takes two numbers and returns s / f. return is what the caller gets back.", [mem([["cpl(8, 24)", .333]], { cells: [[0, 1]] })], "def cpl(s, f):\n    return s / f\n\nx = cpl(8, 24)"), S("Thiếu return thì hàm vẫn chạy nhưng không trả gì: người gọi nhận None.", "Without return the function still runs but hands nothing back: the caller gets None.", [mem([["cpl(8, 24)", .333], ["cpl_bad(8, 24)", "None"]], { bad: [1] })], "def cpl_bad(s, f):\n    s / f           # tính xong rồi bỏ\n\ny = cpl_bad(8, 24)   # y là None")],
	"py-str": [
		S("Một chuỗi s là «Tet Sale». Gọi .upper() trả về một chuỗi mới viết hoa.", "A string s is Tet Sale. Calling .upper() returns a new uppercase string.", [mem([["s", "Tet Sale"], ["s.upper()", "TET SALE"]], { add: [1] })], "s = \"Tet Sale\"\ns.upper()"),
		S("Nhưng s vẫn là «Tet Sale». Chuỗi cũ không tự đổi.", "But s is still Tet Sale. The old string does not change by itself.", [mem([["s", "Tet Sale"]], { cells: [[0, 1]] })], "print(s)   # Tet Sale"),
		S("Muốn giữ kết quả thì gán lại tên.", "To keep the result, assign it back to a name.", [mem([["s", "TET SALE"]], { cells: [[0, 1]] })], "s = s.upper()")
	],
	"py-list": [
		S("Danh sách có thứ tự. Chỉ số bắt đầu từ 0, không phải từ 1.", "A list has an order. Indexes start at 0, not 1.", [T("spend = [8, 10, 12]", ["chỉ số", "giá trị"], [
			[0, 8],
			[1, 10],
			[2, 12]
		])]),
		S("spend[0] là phần tử đầu tiên: 8.", "spend[0] is the first element: 8.", [T("spend = [8, 10, 12]", ["chỉ số", "giá trị"], [
			[0, 8],
			[1, 10],
			[2, 12]
		], { cells: [[0, 1]] })], "spend[0]   → 8"),
		S("spend[-1] đếm từ cuối: 12. spend[3] không có nên báo IndexError.", "spend[-1] counts from the end: 12. spend[3] does not exist so it raises IndexError.", [T("spend = [8, 10, 12]", ["chỉ số", "giá trị"], [
			[0, 8],
			[1, 10],
			[2, 12],
			[3, "IndexError"]
		], {
			cells: [[2, 1]],
			bad: [3]
		})], "spend[-1]  → 12\nspend[3]   → IndexError"),
		S("List sửa được: gán lại một ô, hoặc thêm vào cuối bằng append.", "A list can be edited: assign a cell, or add to the end with append.", [T("spend", ["chỉ số", "giá trị"], [
			[0, 8],
			[1, 15],
			[2, 12],
			[3, 20]
		], {
			cells: [[1, 1]],
			add: [3]
		})], "spend[1] = 15\nspend.append(20)")
	],
	"py-dict": [
		S("Dictionary tra giá trị theo khóa: kênh GDN có chi tiêu 8.", "A dictionary looks up a value by key: channel GDN has spend 8.", [T("d", ["khóa", "giá trị"], [["GDN", 8], ["Meta", 12]], { cols: [0] })], "d = {\"GDN\": 8, \"Meta\": 12}\nd[\"GDN\"]   → 8"),
		S("Hỏi khóa không có: d[\"TikTok\"] báo KeyError.", "Ask for a missing key: d[\"TikTok\"] raises KeyError.", [T("d", ["khóa", "giá trị"], [
			["GDN", 8],
			["Meta", 12],
			["TikTok", "KeyError"]
		], { bad: [2] })], "d[\"TikTok\"]   → KeyError"),
		S("get thì chịu trả về giá trị mặc định thay vì lỗi: None, hoặc 0 nếu bạn nói.", "get is willing to return a default instead of an error: None, or 0 if you say so.", [T("d", ["biểu thức", "kết quả"], [["d.get(\"TikTok\")", "None"], ["d.get(\"TikTok\", 0)", 0]], { rows: [1] })])
	],
	"py-tup": [
		S("Tuple cũng có thứ tự, viết bằng ngoặc tròn.", "A tuple also has an order, written with round brackets.", [T("t = (\"GDN\", 8)", ["chỉ số", "giá trị"], [[0, "GDN"], [1, 8]])]),
		S("Đọc t[1] thì được 8. Nhưng gán t[1] = 9 báo TypeError: tuple không cho sửa từng ô.", "Reading t[1] gives 8. But assigning t[1] = 9 raises TypeError: a tuple does not allow editing a cell.", [T("t = (\"GDN\", 8)", ["chỉ số", "giá trị"], [[0, "GDN"], [1, 8]], { bad: [1] })], "t[1]     → 8\nt[1] = 9 → TypeError"),
		S("Muốn đổi thì tạo tuple mới, hoặc dùng list nếu cần sửa.", "To change it, build a new tuple, or use a list if you need to edit.", [T("t", ["chỉ số", "giá trị"], [[0, "GDN"], [1, 9]], { add: [1] })], "t = (t[0], 9)")
	],
	"py-set": [
		S("Một danh sách có GDN hai lần.", "A list with GDN twice.", [T("list", ["vị trí", "giá trị"], [
			[0, "GDN"],
			[1, "Meta"],
			[2, "GDN"]
		], { rows: [0, 2] })], "ch = [\"GDN\", \"Meta\", \"GDN\"]"),
		S("set(ch) giữ mỗi giá trị một lần. Còn hai phần tử.", "set(ch) keeps each value once. Two elements remain.", [T("set", ["giá trị"], [["GDN"], ["Meta"]], { add: [0, 1] })], "set(ch)   → {\"GDN\", \"Meta\"}"),
		S("Set không có vị trí, nên không hứa thứ tự và không có s[0]. Dùng nó để hỏi «có hay không» và đếm giá trị khác nhau.", "A set has no position, so no order promise and no s[0]. Use it to ask is it in there and to count distinct values.", [T("set", ["biểu thức", "kết quả"], [
			["\"GDN\" in s", "True"],
			["len(s)", 2],
			["s[0]", "TypeError"]
		], { bad: [2] })])
	],
	"py-np": [
		S("Mảng NumPy là một hình chữ nhật số, mọi ô cùng một kiểu. Đây là mảng 2 dòng 2 cột.", "A NumPy array is a rectangle of numbers, every cell of one type. This is 2 rows by 2 columns.", [T("a", [
			"",
			"cột 0",
			"cột 1"
		], [[
			"dòng 0",
			8,
			24
		], [
			"dòng 1",
			6,
			12
		]])], "a = np.array([[8, 24], [6, 12]])"),
		S("sum(axis=0) cộng theo từng cột, ra hai số.", "sum(axis=0) adds down each column, giving two numbers.", [T("a", [
			"",
			"cột 0",
			"cột 1"
		], [
			[
				"dòng 0",
				8,
				24
			],
			[
				"dòng 1",
				6,
				12
			],
			[
				"a.sum(axis=0)",
				14,
				36
			]
		], {
			cols: [1, 2],
			rows: [2]
		})], "a.sum(axis=0)   → [14, 36]"),
		S("Trộn số với chữ thì cả mảng bị ép thành chữ. Lúc đó không cộng được nữa.", "Mix numbers with text and the whole array is forced to text. You can no longer add.", [T("np.array([8, \"GDN\"])", [
			"phần tử",
			"giá trị",
			"kiểu"
		], [[
			0,
			"8",
			"chữ"
		], [
			1,
			"GDN",
			"chữ"
		]], { bad: [0, 1] })])
	],
	"py-ser": [S("Hai Series có nhãn (index) khác nhau: s1 có a, b, c; s2 có b, c, d.", "Two Series with different labels (index): s1 has a, b, c; s2 has b, c, d.", [T("s1", ["nhãn", "giá trị"], [
		["a", 1],
		["b", 2],
		["c", 3]
	]), T("s2", ["nhãn", "giá trị"], [
		["b", 10],
		["c", 20],
		["d", 30]
	])]), S("s1 + s2 cộng theo nhãn, không theo vị trí mắt nhìn. b và c có ở cả hai nên cộng được. a và d chỉ có một bên nên ra NaN.", "s1 + s2 adds by label, not by position. b and c are in both so they add. a and d are in only one so they give NaN.", [T("s1 + s2", ["nhãn", "kết quả"], [
		["a", "NaN"],
		["b", 12],
		["c", 23],
		["d", "NaN"]
	], {
		rows: [1, 2],
		bad: [0, 3]
	})], "s1 + s2")],
	"py-frame": [
		S("DataFrame có nhãn dòng (a, b, c) và có vị trí (0, 1, 2). Hai thứ này khác nhau.", "A DataFrame has row labels (a, b, c) and positions (0, 1, 2). They are different things.", [df()]),
		S("loc dùng nhãn: df.loc[\"b\"] là dòng có nhãn b.", "loc uses labels: df.loc[\"b\"] is the row labeled b.", [df({ rows: [1] })], "df.loc[\"b\"]"),
		S("iloc dùng vị trí: df.iloc[1] là dòng ở vị trí 1. Hôm nay trùng, nhưng sau khi lọc hay xếp lại thì không còn trùng.", "iloc uses position: df.iloc[1] is the row at position 1. Same row today, but after filtering or sorting they no longer match.", [df({ rows: [1] })], "df.iloc[1]"),
		S("Cắt bằng loc lấy cả điểm cuối: df.loc[\"a\":\"b\"] có hai dòng.", "Slicing with loc includes the end: df.loc[\"a\":\"b\"] has two rows.", [df({ rows: [0, 1] })], "df.loc[\"a\":\"b\"]"),
		S("Cắt bằng iloc bỏ điểm cuối: df.iloc[0:1] chỉ có một dòng.", "Slicing with iloc excludes the end: df.iloc[0:1] has just one row.", [df({ rows: [0] })], "df.iloc[0:1]")
	]
};
var ads = (m = {}) => T("ads", [
	"week",
	"channel",
	"spend",
	"forms"
], [
	[
		1,
		"GDN",
		8,
		24
	],
	[
		1,
		"TikTok",
		6,
		12
	],
	[
		2,
		"GDN",
		10,
		35
	],
	[
		2,
		"TikTok",
		4,
		9
	],
	[
		3,
		"GDN",
		12,
		30
	],
	[
		3,
		"TikTok",
		7,
		20
	]
], m);
var sqlDemos = {
	"sql-wh": [
		S("Bảng đang ghi đơn (nguồn). Hai đơn đang ở trạng thái new.", "The table that takes orders (the source). Two orders are new.", [T("orders", [
			"id",
			"status",
			"total"
		], [[
			1,
			"new",
			200
		], [
			2,
			"new",
			150
		]])]),
		S("Khi đơn 2 được trả tiền, nguồn ghi đè. Trạng thái cũ mất.", "When order 2 is paid, the source overwrites it. The old status is gone.", [T("orders", [
			"id",
			"status",
			"total"
		], [[
			1,
			"new",
			200
		], [
			2,
			"paid",
			150
		]], { cells: [[1, 1]] })], "UPDATE orders SET status = 'paid' WHERE id = 2;"),
		S("Kho dữ liệu chụp lại mỗi ngày và chỉ thêm dòng, nên còn cả lịch sử.", "The warehouse snapshots every day and only adds rows, so history stays.", [T("fact_order_daily", [
			"day",
			"id",
			"status"
		], [[
			"Mon",
			2,
			"new"
		], [
			"Tue",
			2,
			"paid"
		]], { add: [1] })], "INSERT INTO fact_order_daily SELECT CURRENT_DATE, id, status FROM orders;")
	],
	"sql-star": [
		S("Ở giữa là bảng sự kiện: mỗi dòng là một lần có form. Nó chỉ giữ số và khóa.", "In the middle is the fact table: one row per form. It holds only numbers and keys.", [T("fact_form", [
			"form_id",
			"campaign_id",
			"channel_id",
			"forms"
		], [
			[
				1,
				1,
				1,
				24
			],
			[
				2,
				1,
				2,
				12
			],
			[
				3,
				2,
				1,
				35
			]
		], { cols: [1, 2] })]),
		S("Xung quanh là các bảng mô tả: tên chiến dịch, tên kênh. Khóa trong bảng sự kiện trỏ tới chúng.", "Around it are description tables: campaign name, channel name. Keys in the fact table point to them.", [T("dim_campaign", ["campaign_id", "name"], [[1, "Tết"], [2, "Hè"]], { cols: [0] }), T("dim_channel", ["channel_id", "name"], [[1, "GDN"], [2, "TikTok"]], { cols: [0] })]),
		S("Muốn đọc ra chữ thì nối ba bảng theo khóa.", "To read words, join the three tables on the keys.", [T("kết quả", [
			"form_id",
			"campaign",
			"channel",
			"forms"
		], [
			[
				1,
				"Tết",
				"GDN",
				24
			],
			[
				2,
				"Tết",
				"TikTok",
				12
			],
			[
				3,
				"Hè",
				"GDN",
				35
			]
		], { add: [
			0,
			1,
			2
		] })], "SELECT f.form_id, c.name, ch.name, f.forms\nFROM fact_form f\nJOIN dim_campaign c ON c.campaign_id = f.campaign_id\nJOIN dim_channel ch ON ch.channel_id = f.channel_id;")
	],
	"sql-key": [
		S("Khóa chính (id) nhận ra từng chiến dịch. Mỗi form có khóa ngoại campaign_id trỏ về đó.", "The primary key (id) identifies each campaign. Each form carries a foreign key campaign_id pointing to it.", [T("campaigns", ["id", "name"], [[1, "Tết"], [2, "Hè"]], { cols: [0] }), T("forms", ["id", "campaign_id"], [[1, 1], [2, 2]], { cols: [1] })]),
		S("Thêm form trỏ tới chiến dịch 9 không có thật thì cơ sở dữ liệu từ chối.", "A form pointing at campaign 9, which does not exist, is rejected by the database.", [T("forms", ["id", "campaign_id"], [
			[1, 1],
			[2, 2],
			[3, 9]
		], { bad: [2] })], "INSERT INTO forms VALUES (3, 9);  -- lỗi: không có campaigns.id = 9"),
		S("Trỏ tới chiến dịch 1 có thật thì được nhận.", "Pointing at the real campaign 1 is accepted.", [T("forms", ["id", "campaign_id"], [
			[1, 1],
			[2, 2],
			[3, 1]
		], { add: [2] })], "INSERT INTO forms VALUES (3, 1);")
	],
	"sql-ddl": [
		S("Bảng ads có hai cột. Đây là khung và các dòng dữ liệu.", "The ads table has two columns. That is the frame and the rows.", [T("ads", ["id", "spend"], [[1, 8], [2, 10]])]),
		S("DDL đổi khung: thêm một cột. Mọi dòng có sẵn ô trống ở cột mới.", "DDL changes the frame: it adds a column. Every row gets an empty cell there.", [T("ads", [
			"id",
			"spend",
			"note"
		], [[
			1,
			8,
			null
		], [
			2,
			10,
			null
		]], { addCols: [2] })], "ALTER TABLE ads ADD COLUMN note TEXT;"),
		S("DML sửa dòng: chỉ một ô đổi, khung vẫn vậy.", "DML edits rows: one cell changes, the frame stays.", [T("ads", [
			"id",
			"spend",
			"note"
		], [[
			1,
			12,
			null
		], [
			2,
			10,
			null
		]], { cells: [[0, 1]] })], "UPDATE ads SET spend = 12 WHERE id = 1;")
	],
	"sql-run": [
		S("Máy bắt đầu từ FROM: lấy cả bảng.", "The engine starts at FROM: it takes the whole table.", [ads()], "SELECT channel, SUM(spend) AS total\nFROM ads                 -- 1. chạy trước\nWHERE spend >= 6\nGROUP BY channel\nORDER BY total;"),
		S("WHERE lọc từng dòng, trước khi gộp. Dòng chi 4 bị loại.", "WHERE filters single rows, before grouping. The row with spend 4 is dropped.", [ads({ dim: [3] })], "WHERE spend >= 6         -- 2."),
		S("GROUP BY gom các dòng còn lại theo kênh.", "GROUP BY collects the remaining rows by channel.", [T("nhóm", ["channel", "spend của các dòng"], [["GDN", "8, 10, 12"], ["TikTok", "6, 7"]])], "GROUP BY channel         -- 3."),
		S("Lúc này SELECT mới chạy: tính tổng cho từng nhóm và đặt tên total.", "Only now does SELECT run: it computes the sum of each group and names it total.", [T("kết quả", ["channel", "total"], [["GDN", 30], ["TikTok", 13]], { addCols: [1] })], "SELECT channel, SUM(spend) AS total   -- 4."),
		S("ORDER BY chạy cuối nên dùng được tên total vừa đặt. Xếp tăng dần.", "ORDER BY runs last, so it can use the name total. Sorted ascending.", [T("kết quả", ["channel", "total"], [["TikTok", 13], ["GDN", 30]], { rows: [0, 1] })], "ORDER BY total           -- 5.")
	],
	"sql-having": [
		S("Bảng gốc, sáu dòng.", "The base table, six rows.", [ads()]),
		S("WHERE lọc dòng trước khi gộp: dòng chi 4 bị loại.", "WHERE filters rows before grouping: the row with spend 4 is dropped.", [ads({ dim: [3] })], "WHERE spend >= 6"),
		S("Sau khi gộp, mỗi kênh còn một dòng tổng.", "After grouping, each channel has one total row.", [T("nhóm", ["channel", "SUM(spend)"], [["GDN", 30], ["TikTok", 13]])], "GROUP BY channel"),
		S("HAVING lọc nhóm theo con số đã tính. TikTok có tổng 13 nên bị loại.", "HAVING filters groups by the computed number. TikTok totals 13 and is dropped.", [T("nhóm", ["channel", "SUM(spend)"], [["GDN", 30], ["TikTok", 13]], {
			dim: [1],
			rows: [0]
		})], "HAVING SUM(spend) > 20")
	],
	"sql-count": [
		S("Bốn người điền form. Hai người không để số điện thoại.", "Four people filled the form. Two left no phone number.", [T("leads", [
			"id",
			"name",
			"phone"
		], [
			[
				1,
				"An",
				"0901"
			],
			[
				2,
				"Bình",
				null
			],
			[
				3,
				"Chi",
				"0933"
			],
			[
				4,
				"Dũng",
				null
			]
		])]),
		S("COUNT(*) đếm dòng, nên ra 4.", "COUNT(*) counts rows, so it returns 4.", [T("leads", [
			"id",
			"name",
			"phone"
		], [
			[
				1,
				"An",
				"0901"
			],
			[
				2,
				"Bình",
				null
			],
			[
				3,
				"Chi",
				"0933"
			],
			[
				4,
				"Dũng",
				null
			]
		], { rows: [
			0,
			1,
			2,
			3
		] })], "SELECT COUNT(*) FROM leads;   -- 4"),
		S("COUNT(phone) chỉ đếm ô có giá trị, nên ra 2.", "COUNT(phone) counts only cells that have a value, so it returns 2.", [T("leads", [
			"id",
			"name",
			"phone"
		], [
			[
				1,
				"An",
				"0901"
			],
			[
				2,
				"Bình",
				null
			],
			[
				3,
				"Chi",
				"0933"
			],
			[
				4,
				"Dũng",
				null
			]
		], { cells: [[0, 2], [2, 2]] })], "SELECT COUNT(phone) FROM leads;   -- 2")
	],
	"sql-join": [S("Chiến dịch Tết có hai tuần chạy ở bảng weeks.", "The Tết campaign has two running weeks in the weeks table.", [T("campaigns", ["id", "name"], [[1, "Tết"], [2, "Hè"]], { cols: [0] }), T("weeks", ["campaign_id", "week"], [
		[1, "w1"],
		[1, "w2"],
		[2, "w1"]
	], { cols: [0] })]), S("Nối theo khóa không duy nhất: Tết khớp hai dòng nên xuất hiện hai lần. Hai dòng thành ba dòng.", "Joining on a key that is not unique: Tết matches two rows so it shows twice. Two rows become three.", [T("kết quả", [
		"id",
		"name",
		"week"
	], [
		[
			1,
			"Tết",
			"w1"
		],
		[
			1,
			"Tết",
			"w2"
		],
		[
			2,
			"Hè",
			"w1"
		]
	], { rows: [0, 1] })], "SELECT c.id, c.name, w.week\nFROM campaigns c JOIN weeks w ON w.campaign_id = c.id;")],
	"sql-left": [
		S("Ba chiến dịch, nhưng chỉ hai chiến dịch có form.", "Three campaigns, but only two have forms.", [T("campaigns", ["id", "name"], [
			[1, "Tết"],
			[2, "Hè"],
			[3, "Noel"]
		]), T("forms", ["campaign_id", "forms"], [[1, 40], [2, 25]])]),
		S("LEFT JOIN giữ cả ba chiến dịch. Noel không có form nên ô trống, là NULL.", "LEFT JOIN keeps all three campaigns. Noel has no forms, so its cell is empty, NULL.", [T("kết quả", ["name", "forms"], [
			["Tết", 40],
			["Hè", 25],
			["Noel", null]
		], { cells: [[2, 1]] })], "SELECT c.name, f.forms\nFROM campaigns c LEFT JOIN forms f ON f.campaign_id = c.id;"),
		S("NULL là «không có dữ liệu», không phải 0. Chỉ khi bạn quyết định mới đổi nó thành 0.", "NULL means no data, not 0. Only when you decide do you turn it into 0.", [T("kết quả", ["name", "forms"], [
			["Tết", 40],
			["Hè", 25],
			["Noel", 0]
		], { cells: [[2, 1]] })], "SELECT c.name, COALESCE(f.forms, 0) AS forms ...")
	],
	"sql-union": [
		S("Hai bảng cùng cột, đến từ hai nguồn. TikTok có mặt ở cả hai.", "Two tables with the same columns, from two sources. TikTok is in both.", [T("a", ["channel", "forms"], [["GDN", 24], ["TikTok", 12]]), T("b", ["channel", "forms"], [["TikTok", 12], ["Meta", 18]])]),
		S("UNION ALL xếp bảng này nối xuống dưới bảng kia, giữ cả dòng trùng.", "UNION ALL stacks one table under the other and keeps the duplicate.", [T("kết quả", ["channel", "forms"], [
			["GDN", 24],
			["TikTok", 12],
			["TikTok", 12],
			["Meta", 18]
		], { rows: [1, 2] })], "SELECT * FROM a UNION ALL SELECT * FROM b;"),
		S("UNION bỏ dòng trùng. Đây là xếp dọc, khác JOIN là ghép ngang thêm cột.", "UNION removes the duplicate. It stacks down, unlike JOIN which adds columns across.", [T("kết quả", ["channel", "forms"], [
			["GDN", 24],
			["TikTok", 12],
			["TikTok", 12],
			["Meta", 18]
		], { dim: [2] })], "SELECT * FROM a UNION SELECT * FROM b;")
	],
	"sql-win": [
		S("Bốn dòng, hai kênh.", "Four rows, two channels.", [T("ads", ["channel", "spend"], [
			["GDN", 8],
			["GDN", 10],
			["TikTok", 6],
			["TikTok", 4]
		])]),
		S("GROUP BY gộp mỗi kênh thành một dòng. Từng dòng gốc biến mất.", "GROUP BY folds each channel into one row. The original rows disappear.", [T("kết quả", ["channel", "total"], [["GDN", 18], ["TikTok", 10]])], "SELECT channel, SUM(spend) AS total FROM ads GROUP BY channel;"),
		S("Hàm cửa sổ thêm một cột tổng nhưng vẫn giữ cả bốn dòng.", "A window function adds a total column but keeps all four rows.", [T("kết quả", [
			"channel",
			"spend",
			"total"
		], [
			[
				"GDN",
				8,
				18
			],
			[
				"GDN",
				10,
				18
			],
			[
				"TikTok",
				6,
				10
			],
			[
				"TikTok",
				4,
				10
			]
		], { addCols: [2] })], "SELECT channel, spend,\n  SUM(spend) OVER (PARTITION BY channel) AS total\nFROM ads;")
	],
	"sql-rank": [
		S("Xếp hạng kênh theo form. Hai kênh hòa nhau ở 40.", "Rank channels by forms. Two channels tie at 40.", [T("kênh", ["channel", "forms"], [
			["GDN", 50],
			["Meta", 40],
			["TikTok", 40],
			["Zalo", 30]
		], { rows: [1, 2] })]),
		S("ROW_NUMBER không quan tâm hòa: luôn 1, 2, 3, 4.", "ROW_NUMBER ignores ties: always 1, 2, 3, 4.", [T("kênh", [
			"channel",
			"forms",
			"row_number"
		], [
			[
				"GDN",
				50,
				1
			],
			[
				"Meta",
				40,
				2
			],
			[
				"TikTok",
				40,
				3
			],
			[
				"Zalo",
				30,
				4
			]
		], { addCols: [2] })], "ROW_NUMBER() OVER (ORDER BY forms DESC)"),
		S("RANK cho hai kênh hòa cùng hạng 2 rồi nhảy số: kênh sau là hạng 4.", "RANK gives the tied channels the same rank 2, then skips: the next is 4.", [T("kênh", [
			"channel",
			"forms",
			"rank"
		], [
			[
				"GDN",
				50,
				1
			],
			[
				"Meta",
				40,
				2
			],
			[
				"TikTok",
				40,
				2
			],
			[
				"Zalo",
				30,
				4
			]
		], {
			addCols: [2],
			cells: [[3, 2]]
		})], "RANK() OVER (ORDER BY forms DESC)"),
		S("DENSE_RANK cũng hòa ở hạng 2 nhưng không nhảy số: kênh sau là hạng 3.", "DENSE_RANK also ties at 2 but does not skip: the next is 3.", [T("kênh", [
			"channel",
			"forms",
			"dense_rank"
		], [
			[
				"GDN",
				50,
				1
			],
			[
				"Meta",
				40,
				2
			],
			[
				"TikTok",
				40,
				2
			],
			[
				"Zalo",
				30,
				3
			]
		], {
			addCols: [2],
			cells: [[3, 2]]
		})], "DENSE_RANK() OVER (ORDER BY forms DESC)")
	],
	"sql-part": [
		S("Hai kênh, hai tuần mỗi kênh.", "Two channels, two weeks each.", [T("ads", [
			"channel",
			"week",
			"forms"
		], [
			[
				"GDN",
				1,
				24
			],
			[
				"GDN",
				2,
				35
			],
			[
				"TikTok",
				1,
				12
			],
			[
				"TikTok",
				2,
				9
			]
		])]),
		S("Xếp hạng chung cả bảng: TikTok bị đẩy xuống hạng 3 và 4.", "Ranking the whole table: TikTok is pushed down to 3 and 4.", [T("ads", [
			"channel",
			"week",
			"forms",
			"rank"
		], [
			[
				"GDN",
				1,
				24,
				2
			],
			[
				"GDN",
				2,
				35,
				1
			],
			[
				"TikTok",
				1,
				12,
				3
			],
			[
				"TikTok",
				2,
				9,
				4
			]
		], { addCols: [3] })], "RANK() OVER (ORDER BY forms DESC)"),
		S("PARTITION BY chia theo kênh. Mỗi kênh tự đếm hạng, bắt đầu từ 1.", "PARTITION BY splits by channel. Each channel counts its own rank, starting from 1.", [T("ads", [
			"channel",
			"week",
			"forms",
			"rank"
		], [
			[
				"GDN",
				1,
				24,
				2
			],
			[
				"GDN",
				2,
				35,
				1
			],
			[
				"TikTok",
				1,
				12,
				1
			],
			[
				"TikTok",
				2,
				9,
				2
			]
		], {
			addCols: [3],
			cells: [[2, 3]]
		})], "RANK() OVER (PARTITION BY channel ORDER BY forms DESC)")
	],
	"sql-frame": [
		S("Thiếu tuần 3: chỉ có tuần 1, 2, 4, 5. Muốn trung bình của «ba dòng gần nhất».", "Week 3 is missing: only weeks 1, 2, 4, 5. We want the average of the last three rows.", [T("weeks", ["week", "spend"], [
			[1, 10],
			[2, 20],
			[4, 40],
			[5, 50]
		])], "AVG(spend) OVER (ORDER BY week\n  ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)"),
		S("Ở tuần 4, khung lấy ba dòng: tuần 1, 2 và 4. Nó trải qua bốn tuần lịch, vì tuần 3 không có dòng.", "At week 4 the frame takes three rows: weeks 1, 2 and 4. It spans four calendar weeks, because week 3 has no row.", [T("weeks", [
			"week",
			"spend",
			"avg3"
		], [
			[
				1,
				10,
				10
			],
			[
				2,
				20,
				15
			],
			[
				4,
				40,
				23.3
			],
			[
				5,
				50,
				"…"
			]
		], {
			rows: [
				0,
				1,
				2
			],
			cells: [[2, 2]]
		})]),
		S("Ở tuần 5, khung là tuần 2, 4, 5. Khung đếm dòng, không đếm ngày.", "At week 5 the frame is weeks 2, 4, 5. The frame counts rows, not days.", [T("weeks", [
			"week",
			"spend",
			"avg3"
		], [
			[
				1,
				10,
				10
			],
			[
				2,
				20,
				15
			],
			[
				4,
				40,
				23.3
			],
			[
				5,
				50,
				36.7
			]
		], {
			rows: [
				1,
				2,
				3
			],
			cells: [[3, 2]]
		})])
	],
	"sql-lag": [
		S("Ba ngày có số liệu: ngày 1, 2 và 4. Ngày 3 thiếu.", "Three days with data: days 1, 2 and 4. Day 3 is missing.", [T("daily", ["day", "forms"], [
			[1, 10],
			[2, 14],
			[4, 9]
		])]),
		S("LAG lấy giá trị của dòng ngay trước. Dòng đầu chưa có dòng trước nên là NULL.", "LAG takes the value from the row right before. The first row has none, so NULL.", [T("daily", [
			"day",
			"forms",
			"prev"
		], [
			[
				1,
				10,
				null
			],
			[
				2,
				14,
				10
			],
			[
				4,
				9,
				14
			]
		], { addCols: [2] })], "LAG(forms) OVER (ORDER BY day) AS prev"),
		S("Ở ngày 4, «dòng trước» là ngày 2, không phải hôm qua. Thiếu ngày thì LAG vẫn nhảy qua.", "On day 4 the previous row is day 2, not yesterday. With a missing day, LAG still jumps across.", [T("daily", [
			"day",
			"forms",
			"prev"
		], [
			[
				1,
				10,
				null
			],
			[
				2,
				14,
				10
			],
			[
				4,
				9,
				14
			]
		], {
			cells: [[2, 2]],
			rows: [1]
		})])
	],
	"sql-case": [
		S("Bảng gốc chỉ có kênh và chi tiêu.", "The base table has only channel and spend.", [T("ads", ["channel", "spend"], [
			["GDN", 12],
			["Meta", 8],
			["TikTok", 4]
		])]),
		S("CASE tạo một cột mới ngay trong kết quả, theo từng bậc.", "CASE builds a new column right in the result, tier by tier.", [T("kết quả", [
			"channel",
			"spend",
			"tier"
		], [
			[
				"GDN",
				12,
				"cao"
			],
			[
				"Meta",
				8,
				"vừa"
			],
			[
				"TikTok",
				4,
				"thấp"
			]
		], { addCols: [2] })], "SELECT channel, spend,\n  CASE WHEN spend >= 10 THEN 'cao'\n       WHEN spend >= 6  THEN 'vừa'\n       ELSE 'thấp' END AS tier\nFROM ads;"),
		S("Bảng gốc vẫn không có cột tier. Bậc chỉ sống trong câu truy vấn.", "The base table still has no tier column. The tier lives only in the query.", [T("ads", ["channel", "spend"], [
			["GDN", 12],
			["Meta", 8],
			["TikTok", 4]
		])], "SELECT * FROM ads;")
	],
	"sql-cte": [
		S("Bảng gốc ads.", "The base table ads.", [T("ads", [
			"id",
			"channel",
			"spend"
		], [
			[
				1,
				"GDN",
				8
			],
			[
				2,
				"TikTok",
				6
			],
			[
				3,
				"Meta",
				12
			]
		])]),
		S("Đặt tên cho một câu con: big là các dòng chi từ 8 trở lên. Nó chỉ là tên cho câu truy vấn.", "Name a sub-query: big is the rows with spend of 8 or more. It is just a name for a query.", [T("big", [
			"id",
			"channel",
			"spend"
		], [[
			1,
			"GDN",
			8
		], [
			3,
			"Meta",
			12
		]], { rows: [0, 1] })], "CREATE VIEW big AS\n  SELECT * FROM ads WHERE spend >= 8;"),
		S("Sửa bảng gốc: TikTok từ 6 lên 9.", "Edit the base table: TikTok goes from 6 to 9.", [T("ads", [
			"id",
			"channel",
			"spend"
		], [
			[
				1,
				"GDN",
				8
			],
			[
				2,
				"TikTok",
				9
			],
			[
				3,
				"Meta",
				12
			]
		], { cells: [[1, 2]] })], "UPDATE ads SET spend = 9 WHERE id = 2;"),
		S("Hỏi lại big: TikTok tự có mặt. View không phải bản sao, nó chạy lại câu truy vấn mỗi lần.", "Ask big again: TikTok appears by itself. A view is not a copy, it reruns its query every time.", [T("big", [
			"id",
			"channel",
			"spend"
		], [
			[
				1,
				"GDN",
				8
			],
			[
				2,
				"TikTok",
				9
			],
			[
				3,
				"Meta",
				12
			]
		], { add: [1] })], "SELECT * FROM big;")
	],
	"sql-idx": [
		S("Tìm kênh Meta trong bảng sáu dòng, không có chỉ mục: máy đọc từng dòng từ đầu.", "Finding Meta in a six-row table with no index: the engine reads every row from the top.", [T("ads", ["id", "channel"], [
			[1, "GDN"],
			[2, "Meta"],
			[3, "TikTok"],
			[4, "GDN"],
			[5, "Meta"],
			[6, "TikTok"]
		], { rows: [
			0,
			1,
			2,
			3,
			4,
			5
		] })], "SELECT * FROM ads WHERE channel = 'Meta';"),
		S("Chỉ mục như mục lục: kênh nào nằm ở dòng nào. Máy tra mục lục rồi nhảy thẳng tới dòng 2 và 5.", "An index is like a table of contents: which channel sits on which rows. The engine looks it up and jumps straight to rows 2 and 5.", [T("index trên channel", ["channel", "dòng"], [
			["GDN", "1, 4"],
			["Meta", "2, 5"],
			["TikTok", "3, 6"]
		], { rows: [1] }), T("ads", ["id", "channel"], [
			[1, "GDN"],
			[2, "Meta"],
			[3, "TikTok"],
			[4, "GDN"],
			[5, "Meta"],
			[6, "TikTok"]
		], { rows: [1, 4] })]),
		S("Kết quả y hệt, chỉ nhanh hơn. Chỉ mục đổi tốc độ, không đổi câu trả lời.", "The result is identical, only faster. An index changes speed, not the answer.", [T("kết quả", ["id", "channel"], [[2, "Meta"], [5, "Meta"]])])
	],
	"sql-like": [
		S("Bốn tên chiến dịch. Ký tự % thay cho «bất kỳ chuỗi nào».", "Four campaign names. The % sign stands for any string.", [T("campaigns", ["name"], [
			["Tet Sale"],
			["Tet 2026"],
			["Mid-Tet"],
			["Back Tet"]
		])]),
		S("'Tet%' khớp những tên bắt đầu bằng Tet.", "'Tet%' matches names that start with Tet.", [T("campaigns", ["name"], [
			["Tet Sale"],
			["Tet 2026"],
			["Mid-Tet"],
			["Back Tet"]
		], { rows: [0, 1] })], "WHERE name LIKE 'Tet%'"),
		S("'%Tet' khớp những tên kết thúc bằng Tet.", "'%Tet' matches names that end with Tet.", [T("campaigns", ["name"], [
			["Tet Sale"],
			["Tet 2026"],
			["Mid-Tet"],
			["Back Tet"]
		], { rows: [2, 3] })], "WHERE name LIKE '%Tet'"),
		S("'%Tet%' khớp tên có Tet ở bất kỳ đâu. LIKE chỉ có % và _. Luật phức tạp hơn là việc của regex.", "'%Tet%' matches Tet anywhere. LIKE has only % and _. Richer rules are regex's job.", [T("campaigns", ["name"], [
			["Tet Sale"],
			["Tet 2026"],
			["Mid-Tet"],
			["Back Tet"]
		], { rows: [
			0,
			1,
			2,
			3
		] })], "WHERE name LIKE '%Tet%'")
	],
	"sql-date": [
		S("Ba ngày được lưu thành chữ, không phải kiểu ngày.", "Three dates stored as text, not as a date type.", [T("log", ["d"], [
			["5/1/2026"],
			["10/1/2026"],
			["9/1/2026"]
		])]),
		S("Xếp theo chữ: «10/1» đứng trước «5/1» vì ký tự «1» nhỏ hơn «5». Thứ tự sai.", "Sorting as text: \"10/1\" comes before \"5/1\" because the character \"1\" is smaller than \"5\". The order is wrong.", [T("log", ["d"], [
			["10/1/2026"],
			["5/1/2026"],
			["9/1/2026"]
		], { bad: [
			0,
			1,
			2
		] })], "SELECT d FROM log ORDER BY d;"),
		S("Đổi sang kiểu ngày trước khi xếp: ngày 5, 9, rồi 10. Đúng thứ tự thời gian.", "Convert to a date type before sorting: 5, 9, 10. The true time order.", [T("log", ["d"], [
			["5/1/2026"],
			["9/1/2026"],
			["10/1/2026"]
		], { add: [
			0,
			1,
			2
		] })], "SELECT d FROM log ORDER BY TO_DATE(d, 'DD/MM/YYYY');")
	],
	"sql-nest": [
		S("Muốn các kênh đã có form. Kênh 2 chưa có form nào.", "We want channels that have forms. Channel 2 has none.", [T("channels", ["id", "name"], [
			[1, "GDN"],
			[2, "TikTok"],
			[3, "Meta"]
		]), T("forms", ["channel_id"], [
			[1],
			[1],
			[3]
		])]),
		S("Cách 1, câu con: hỏi «id nào có trong forms».", "Way 1, a subquery: ask which ids appear in forms.", [T("kết quả", ["id", "name"], [[1, "GDN"], [3, "Meta"]], { add: [0, 1] })], "SELECT * FROM channels\nWHERE id IN (SELECT channel_id FROM forms);"),
		S("Cách 2, phép nối: ra đúng kết quả đó. Câu lồng không cao cấp hơn. Chọn cách dễ đọc.", "Way 2, a join: the very same result. A nested query is not fancier. Pick the one that reads better.", [T("kết quả", ["id", "name"], [[1, "GDN"], [3, "Meta"]], { add: [0, 1] })], "SELECT DISTINCT c.*\nFROM channels c JOIN forms f ON f.channel_id = c.id;")
	],
	"sql-nwin": [
		S("Muốn cộng dồn form theo từng kênh qua các tuần.", "We want a running total of forms per channel across weeks.", [T("ads", [
			"channel",
			"week",
			"forms"
		], [
			[
				"GDN",
				1,
				24
			],
			[
				"GDN",
				2,
				35
			],
			[
				"TikTok",
				1,
				12
			],
			[
				"TikTok",
				2,
				9
			]
		])]),
		S("Viết cửa sổ dài ngay trong hàm.", "Spell the window out inside the function.", [T("kết quả", [
			"channel",
			"week",
			"forms",
			"run"
		], [
			[
				"GDN",
				1,
				24,
				24
			],
			[
				"GDN",
				2,
				35,
				59
			],
			[
				"TikTok",
				1,
				12,
				12
			],
			[
				"TikTok",
				2,
				9,
				21
			]
		], { addCols: [3] })], "SUM(forms) OVER (PARTITION BY channel ORDER BY week) AS run"),
		S("Đặt tên cửa sổ là w rồi gọi w. Kết quả y hệt. Tên chỉ để viết ngắn và dùng lại.", "Name the window w and call w. The result is identical. A name only shortens and reuses.", [T("kết quả", [
			"channel",
			"week",
			"forms",
			"run"
		], [
			[
				"GDN",
				1,
				24,
				24
			],
			[
				"GDN",
				2,
				35,
				59
			],
			[
				"TikTok",
				1,
				12,
				12
			],
			[
				"TikTok",
				2,
				9,
				21
			]
		], { addCols: [3] })], "SUM(forms) OVER w AS run\n...\nWINDOW w AS (PARTITION BY channel ORDER BY week)")
	],
	"sql-proc": [
		S("Bảng ads đang có ba tuần, bảng archive còn trống.", "The ads table holds three weeks, the archive table is empty.", [T("ads", [
			"id",
			"week",
			"spend"
		], [
			[
				1,
				"w1",
				8
			],
			[
				2,
				"w2",
				10
			],
			[
				3,
				"w3",
				12
			]
		]), T("archive", [
			"id",
			"week",
			"spend"
		], [])]),
		S("Gọi thủ tục một lần: nó chép tuần 1 sang archive rồi xóa khỏi ads. Hai việc trong một lệnh.", "Call the procedure once: it copies week 1 to archive then deletes it from ads. Two jobs in one command.", [T("ads", [
			"id",
			"week",
			"spend"
		], [
			[
				1,
				"w1",
				8
			],
			[
				2,
				"w2",
				10
			],
			[
				3,
				"w3",
				12
			]
		], { dim: [0] }), T("archive", [
			"id",
			"week",
			"spend"
		], [[
			1,
			"w1",
			8
		]], { add: [0] })], "CALL archive_week('w1');"),
		S("Kết quả: một kịch bản đã lưu đã sửa hai bảng, và có thể gọi lại bất cứ lúc nào.", "Result: one saved script edited two tables, and you can call it again any time.", [T("ads", [
			"id",
			"week",
			"spend"
		], [[
			2,
			"w2",
			10
		], [
			3,
			"w3",
			12
		]]), T("archive", [
			"id",
			"week",
			"spend"
		], [[
			1,
			"w1",
			8
		]])])
	],
	"sql-cur": [
		S("Ba form cần chuyển từ new sang done.", "Three forms need to go from new to done.", [T("forms", ["id", "status"], [
			[1, "new"],
			[2, "new"],
			[3, "new"]
		])]),
		S("Con trỏ đi từng dòng một: dòng 1 xong, rồi mới tới dòng 2 và 3. Ba vòng lặp.", "A cursor goes one row at a time: row 1 is done, then row 2 and 3. Three loop turns.", [T("forms", ["id", "status"], [
			[1, "done"],
			[2, "new"],
			[3, "new"]
		], { rows: [0] })], "FETCH NEXT FROM cur;  -- vòng 1\nUPDATE forms SET status = 'done' WHERE id = 1;"),
		S("Vòng 2 và vòng 3 cũng như vậy, từng dòng một.", "Turns 2 and 3 do the same, one row each.", [T("forms", ["id", "status"], [
			[1, "done"],
			[2, "done"],
			[3, "done"]
		], { rows: [1, 2] })], "-- vòng 2, vòng 3"),
		S("Một câu UPDATE xử lý cả ba dòng cùng lúc, gọn hơn và thường nhanh hơn nhiều.", "One UPDATE handles all three rows at once, shorter and usually much faster.", [T("forms", ["id", "status"], [
			[1, "done"],
			[2, "done"],
			[3, "done"]
		], { rows: [
			0,
			1,
			2
		] })], "UPDATE forms SET status = 'done' WHERE status = 'new';")
	]
};
var vizDemos = {
	"tb-join": [
		S("Bảng chiến dịch có ngân sách mỗi chiến dịch. Bảng weeks có từng tuần chạy.", "The campaigns table has one budget per campaign. The weeks table has each running week.", [T("campaigns", [
			"id",
			"name",
			"budget"
		], [[
			1,
			"Tết",
			100
		], [
			2,
			"Hè",
			100
		]]), T("weeks", ["campaign_id", "week"], [
			[1, "w1"],
			[1, "w2"],
			[2, "w1"]
		])]),
		S("Nối hai bảng: Tết có hai tuần nên dòng Tết nhân đôi, và ngân sách 100 lặp hai lần.", "Join the tables: Tết has two weeks so its row doubles, and its budget 100 appears twice.", [T("sau khi nối", [
			"name",
			"budget",
			"week"
		], [
			[
				"Tết",
				100,
				"w1"
			],
			[
				"Tết",
				100,
				"w2"
			],
			[
				"Hè",
				100,
				"w1"
			]
		], { rows: [0, 1] })]),
		S("Kéo SUM(budget) lên biểu đồ ra 300, trong khi tổng thật là 200. Phép nối đã nhân dòng trước khi vẽ.", "Drag SUM(budget) onto a chart and you get 300, while the truth is 200. The join multiplied rows before the drawing.", [T("biểu đồ", ["", "tổng budget"], [["đúng (trước khi nối)", 200], ["sau khi nối", 300]], { bad: [1] })])
	],
	"tb-calc": [
		S("Dữ liệu gốc có chi tiêu và form theo kênh.", "The source data has spend and forms by channel.", [T("ads", [
			"channel",
			"spend",
			"forms"
		], [[
			"GDN",
			30,
			89
		], [
			"TikTok",
			17,
			41
		]])]),
		S("Trường tính toán CPL là một công thức: tổng chi chia tổng form. Tableau chạy nó mỗi lần vẽ.", "The calculated field CPL is a formula: total spend divided by total forms. Tableau runs it each time it draws.", [T("trong biểu đồ", ["channel", "CPL"], [["GDN", .337], ["TikTok", .415]], { addCols: [1] })], "CPL = SUM([spend]) / SUM([forms])"),
		S("Bảng dữ liệu gốc vẫn không có cột CPL. Công thức không tạo dữ liệu mới.", "The source table still has no CPL column. A formula creates no new data.", [T("ads", [
			"channel",
			"spend",
			"forms"
		], [[
			"GDN",
			30,
			89
		], [
			"TikTok",
			17,
			41
		]])])
	],
	"pb-model": [S("Mô hình là các bảng và đường nối giữa chúng. Bảng chiến dịch (mô tả) nối với bảng form (sự kiện) qua campaign_id.", "A model is tables and the lines between them. The campaign table (description) joins the form table (events) through campaign_id.", [T("campaign", ["campaign_id", "name"], [[1, "Tết"], [2, "Hè"]], { cols: [0] }), T("forms", ["form_id", "campaign_id"], [
		[1, 1],
		[2, 1],
		[3, 2]
	], { cols: [1] })]), S("Chọn «Tết» ở bảng chiến dịch: bộ lọc chảy qua đường nối, chỉ còn các form của Tết.", "Pick Tết in the campaign table: the filter flows along the line, leaving only Tết's forms.", [T("campaign", ["campaign_id", "name"], [[1, "Tết"], [2, "Hè"]], {
		rows: [0],
		dim: [1]
	}), T("forms", ["form_id", "campaign_id"], [
		[1, 1],
		[2, 1],
		[3, 2]
	], {
		rows: [0, 1],
		dim: [2]
	})])],
	"pb-pq": [
		S("Power Query là một danh sách bước. Mỗi bước là một công thức, chạy lần lượt trên dữ liệu thô.", "Power Query is a list of steps. Each step is a formula, run in order on the raw data.", [T("applied steps", ["#", "bước"], [
			[1, "Source: đọc file"],
			[2, "Filter: bỏ dòng trống"],
			[3, "Change type: spend thành số"]
		])]),
		S("Dữ liệu thô có một dòng trống và spend là chữ. Sau ba bước còn dữ liệu sạch.", "Raw data has a blank row and spend as text. After three steps it is clean.", [T("thô", ["channel", "spend"], [
			["GDN", "8"],
			[null, null],
			["Meta", "12"]
		], { bad: [1] }), T("sau 3 bước", ["channel", "spend"], [["GDN", 8], ["Meta", 12]], { add: [0, 1] })]),
		S("Làm mới (refresh) là chạy lại cả ba công thức trên dữ liệu mới. Dòng TikTok mới tự đi qua các bước.", "Refresh runs all three formulas again on the new data. The new TikTok row passes through the steps by itself.", [T("sau khi refresh", ["channel", "spend"], [
			["GDN", 8],
			["Meta", 12],
			["TikTok", 6]
		], { add: [2] })])
	],
	"pb-grain": [
		S("Mỗi dòng của bảng này là một dòng hàng trong đơn, không phải một đơn. Đó là grain (độ mịn).", "Each row of this table is one order line, not one order. That is the grain.", [T("order_lines", ["order_id", "item"], [
			[1, "A"],
			[1, "B"],
			[2, "A"]
		])]),
		S("Đếm dòng ra 3. Đây là số dòng hàng, không phải số đơn.", "Counting rows gives 3. That is the number of lines, not of orders.", [T("order_lines", ["order_id", "item"], [
			[1, "A"],
			[1, "B"],
			[2, "A"]
		], { rows: [
			0,
			1,
			2
		] })], "COUNTROWS(order_lines)   → 3"),
		S("Muốn số đơn thì đếm mã đơn khác nhau: ra 2.", "For the number of orders, count distinct order ids: 2.", [T("order_lines", ["order_id", "item"], [
			[1, "A"],
			[1, "B"],
			[2, "A"]
		], { cols: [0] })], "DISTINCTCOUNT(order_lines[order_id])   → 2")
	],
	"pb-dax": [
		S("Bảng ads. Cột tính (calculated column) lưu một giá trị cho mỗi dòng, tính một lần lúc làm mới.", "The ads table. A calculated column stores one value per row, computed once at refresh.", [T("ads", [
			"channel",
			"spend",
			"forms",
			"cpl"
		], [
			[
				"GDN",
				8,
				24,
				.333
			],
			[
				"GDN",
				10,
				35,
				.286
			],
			[
				"TikTok",
				6,
				12,
				.5
			]
		], { addCols: [3] })], "cpl = [spend] / [forms]"),
		S("Measure không lưu gì. Nó tính lại mỗi lần bộ lọc đổi. Không lọc: tổng chi chia tổng form.", "A measure stores nothing. It recomputes each time the filter changes. No filter: total spend over total forms.", [T("measure CPL", ["bộ lọc", "CPL"], [["không lọc", .362]], { cells: [[0, 1]] })], "CPL = DIVIDE(SUM(ads[spend]), SUM(ads[forms]))"),
		S("Lọc kênh nào thì measure tính lại trên các dòng của kênh đó. Trung bình các cột cpl sẽ không cho đúng con số này.", "Filter a channel and the measure recomputes over that channel's rows. Averaging the cpl column would not give these numbers.", [T("measure CPL", ["bộ lọc", "CPL"], [
			["không lọc", .362],
			["channel = GDN", .337],
			["channel = TikTok", .415]
		], { rows: [1, 2] })])
	],
	"pb-rls": [
		S("Bảng form, mỗi dòng có người phụ trách.", "A form table, each row with an owner.", [T("forms", [
			"form_id",
			"owner",
			"forms"
		], [
			[
				1,
				"An",
				24
			],
			[
				2,
				"Bình",
				12
			],
			[
				3,
				"An",
				35
			],
			[
				4,
				"Bình",
				9
			]
		])]),
		S("Luật RLS (row-level security) áp lên người xem. Khi Bình mở báo cáo, dòng của An bị ẩn đi hoàn toàn.", "An RLS (row-level security) rule is applied to the viewer. When Bình opens the report, An's rows are hidden entirely.", [T("Bình nhìn thấy", [
			"form_id",
			"owner",
			"forms"
		], [
			[
				1,
				"An",
				24
			],
			[
				2,
				"Bình",
				12
			],
			[
				3,
				"An",
				35
			],
			[
				4,
				"Bình",
				9
			]
		], {
			dim: [0, 2],
			rows: [1, 3]
		})], "[owner] = USERNAME()"),
		S("Slicer thì khác: người xem tự bấm và có thể bỏ chọn. RLS không cho người xem tự gỡ.", "A slicer is different: the viewer clicks and can clear it. RLS cannot be removed by the viewer.", [T("so sánh", [
			"",
			"ai quyết định",
			"bỏ được?"
		], [[
			"slicer",
			"người xem",
			"được"
		], [
			"RLS",
			"người quản trị",
			"không"
		]], { rows: [1] })])
	],
	"pb-refresh": [
		S("Nguồn có ba dòng. Báo cáo tính tổng form: 71.", "The source has three rows. The report totals the forms: 71.", [T("nguồn", ["form_id", "forms"], [
			[1, 24],
			[2, 12],
			[3, 35]
		]), T("báo cáo", ["", "tổng form"], [["measure", 71]])]),
		S("Nguồn có thêm một dòng mới. Báo cáo chưa làm mới nên vẫn hiện 71.", "A new row lands in the source. The report has not refreshed, so it still shows 71.", [T("nguồn", ["form_id", "forms"], [
			[1, 24],
			[2, 12],
			[3, 35],
			[4, 9]
		], { add: [3] }), T("báo cáo", ["", "tổng form"], [["measure", 71]], { bad: [0] })]),
		S("Làm mới (refresh) kéo dòng mới về và chạy lại công thức: 80. Measure không giữ số cũ.", "Refresh pulls the new row and reruns the formula: 80. A measure does not keep the old number.", [T("nguồn", ["form_id", "forms"], [
			[1, 24],
			[2, 12],
			[3, 35],
			[4, 9]
		]), T("báo cáo", ["", "tổng form"], [["measure", 80]], { cells: [[0, 1]] })])
	]
};
var xlDemos = {
	"xl-cell": [S("Một ô giữ ba loại thứ: số, chữ hoặc công thức. Bảng này cho thấy bạn gõ gì và ô hiện gì.", "A cell holds one of three things: a number, text or a formula. This shows what you type and what the cell shows.", [T("sheet", [
		"ô",
		"bạn gõ",
		"ô hiện",
		"loại"
	], [
		[
			"A1",
			"12",
			"12",
			"số"
		],
		[
			"A2",
			"'12",
			"12",
			"chữ trông giống số"
		],
		[
			"A3",
			"=A1*2",
			"24",
			"công thức"
		]
	])]), S("SUM bỏ qua ô chữ. Tổng A1:A2 chỉ là 12, không phải 24.", "SUM skips text cells. The total of A1:A2 is just 12, not 24.", [T("sheet", [
		"ô",
		"bạn gõ",
		"ô hiện",
		"loại"
	], [
		[
			"A1",
			"12",
			"12",
			"số"
		],
		[
			"A2",
			"'12",
			"12",
			"chữ trông giống số"
		],
		[
			"A3",
			"=A1*2",
			"24",
			"công thức"
		]
	], {
		rows: [0],
		dim: [1]
	})], "=SUM(A1:A2)   → 12")],
	"xl-lock": [S("Công thức =B2*$E$1 nhân chi tiêu với tỷ lệ ở E1. Dấu $ khóa địa chỉ E1.", "The formula =B2*$E$1 multiplies spend by the rate in E1. The $ signs lock E1.", [T("kéo xuống bốn dòng", ["dòng", "công thức"], [
		[2, "=B2*$E$1"],
		[3, "=B3*$E$1"],
		[4, "=B4*$E$1"]
	], { cols: [1] })], "=B2*$E$1"), S("Không có $, địa chỉ trượt theo khi kéo: E1 thành E2, E3. Các ô đó trống nên ra 0.", "Without $, the address slides as you drag: E1 becomes E2, E3. Those cells are empty so you get 0.", [T("kéo xuống bốn dòng", ["dòng", "công thức"], [
		[2, "=B2*E1"],
		[3, "=B3*E2"],
		[4, "=B4*E3"]
	], { bad: [1, 2] })], "=B2*E1")],
	"xl-if": [
		S("IF chọn một nhánh: chi từ 10 trở lên là «cao», còn lại là «thấp».", "IF picks one branch: spend of 10 or more is cao, otherwise thấp.", [T("tuần", [
			"tuần",
			"chi",
			"tier"
		], [
			[
				"w1",
				12,
				"cao"
			],
			[
				"w2",
				8,
				"thấp"
			],
			[
				"w3",
				"(trống)",
				"thấp"
			]
		], { addCols: [2] })], "=IF(B2>=10, \"cao\", \"thấp\")"),
		S("Tuần 3 chưa nhập số. Ô trống bị coi như 0 nên rơi vào «thấp», trông như tuần chi ít.", "Week 3 has no number yet. A blank is treated as 0, so it lands in thấp, looking like a low-spend week.", [T("tuần", [
			"tuần",
			"chi",
			"tier"
		], [
			[
				"w1",
				12,
				"cao"
			],
			[
				"w2",
				8,
				"thấp"
			],
			[
				"w3",
				"(trống)",
				"thấp"
			]
		], { cells: [[2, 2]] })]),
		S("Muốn tách trường hợp chưa có số thì kiểm tra ô trống trước.", "To separate the not-entered case, test for blank first.", [T("tuần", [
			"tuần",
			"chi",
			"tier"
		], [
			[
				"w1",
				12,
				"cao"
			],
			[
				"w2",
				8,
				"thấp"
			],
			[
				"w3",
				"(trống)",
				"chưa có"
			]
		], { cells: [[2, 2]] })], "=IF(ISBLANK(B4), \"chưa có\", IF(B4>=10, \"cao\", \"thấp\"))")
	],
	"xl-keep": [
		S("Bảng có năm dòng.", "A table with five rows.", [T("ads", ["kênh", "chi"], [
			["GDN", 12],
			["Meta", 8],
			["TikTok", 4],
			["Zalo", 3],
			["Bing", 9]
		])]),
		S("Lọc chi ≥ 8: dòng khác bị giấu đi, không bị xóa.", "Filter spend ≥ 8: the other rows are hidden, not deleted.", [T("ads", ["kênh", "chi"], [
			["GDN", 12],
			["Meta", 8],
			["TikTok", 4],
			["Zalo", 3],
			["Bing", 9]
		], { dim: [2, 3] })]),
		S("Bỏ bộ lọc thì mọi dòng quay lại như cũ.", "Clear the filter and every row comes back.", [T("ads", ["kênh", "chi"], [
			["GDN", 12],
			["Meta", 8],
			["TikTok", 4],
			["Zalo", 3],
			["Bing", 9]
		])]),
		S("Xóa dòng mới làm mất dữ liệu thật. Lúc này không còn đường quay lại ngoài hoàn tác.", "Deleting is what really loses data. Only undo gets it back.", [T("ads", ["kênh", "chi"], [
			["GDN", 12],
			["Meta", 8],
			["Bing", 9]
		])])
	],
	"xl-chart": [S("Muốn so các nhóm với nhau (kênh này với kênh kia): dùng biểu đồ cột. Mỗi nhóm một cột.", "To compare groups (one channel with another): use a bar chart. One bar per group.", [T("so nhóm → biểu đồ cột", ["kênh", "form"], [
		["GDN", 90],
		["Meta", 55],
		["TikTok", 41]
	], { cols: [1] })]), S("Muốn xem một thứ đổi theo thời gian: dùng biểu đồ đường. Thứ tự tuần là có thật nên nối các điểm được.", "To see one thing change over time: use a line chart. Week order is real, so joining the points makes sense.", [T("theo thời gian → biểu đồ đường", ["tuần", "form"], [
		["w1", 41],
		["w2", 55],
		["w3", 90]
	], { cols: [1] })])],
	"xl-pivot": [
		S("Sáu dòng gốc: mỗi dòng là một kênh trong một tuần.", "Six raw rows: each is one channel in one week.", [T("ads", [
			"week",
			"channel",
			"spend"
		], [
			[
				1,
				"GDN",
				8
			],
			[
				1,
				"TikTok",
				6
			],
			[
				2,
				"GDN",
				10
			],
			[
				2,
				"TikTok",
				4
			],
			[
				3,
				"GDN",
				12
			],
			[
				3,
				"TikTok",
				7
			]
		])]),
		S("PivotTable nhóm các dòng theo kênh và cộng chi tiêu. Sáu dòng thành hai dòng.", "A PivotTable groups rows by channel and sums spend. Six rows become two.", [T("pivot: hàng = channel, giá trị = tổng spend", ["channel", "tổng spend"], [["GDN", 30], ["TikTok", 17]], { addCols: [1] })]),
		S("Đưa tuần lên cột thì ra bảng chéo. Tổng vẫn là 47, như ở bảng gốc. Pivot chỉ sắp lại, không tạo thêm số.", "Move week to columns for a cross-table. The total is still 47, as in the raw table. A pivot only rearranges, it creates no new numbers.", [T("pivot: hàng = channel, cột = week", [
			"channel",
			"w1",
			"w2",
			"w3",
			"tổng"
		], [
			[
				"GDN",
				8,
				10,
				12,
				30
			],
			[
				"TikTok",
				6,
				4,
				7,
				17
			],
			[
				"tổng",
				14,
				14,
				19,
				47
			]
		], { rows: [2] })])
	],
	"xl-look": [
		S("Bảng tra: cột đầu là tên kênh, bên phải là mã và giá mỗi form.", "A lookup table: the first column is the channel name, to the right are the code and cost per form.", [T("kênh", [
			"name",
			"id",
			"cpl"
		], [
			[
				"GDN",
				1,
				40
			],
			[
				"Meta",
				2,
				55
			],
			[
				"TikTok",
				3,
				32
			]
		], { cols: [0] })]),
		S("VLOOKUP tìm «Meta» ở cột đầu rồi lấy ô ở cột thứ 3 của dòng đó. FALSE ở cuối nghĩa là chỉ lấy khớp đúng.", "VLOOKUP finds Meta in the first column then takes the cell from the 3rd column of that row. The final FALSE means exact match only.", [T("kênh", [
			"name",
			"id",
			"cpl"
		], [
			[
				"GDN",
				1,
				40
			],
			[
				"Meta",
				2,
				55
			],
			[
				"TikTok",
				3,
				32
			]
		], {
			rows: [1],
			cells: [[1, 2]]
		})], "=VLOOKUP(\"Meta\", A:C, 3, FALSE)   → 55"),
		S("Nó chỉ nhìn sang bên phải của cột tìm. Muốn lấy cột nằm bên trái cột tìm thì VLOOKUP không làm được. Bỏ FALSE thì nó tìm gần đúng và có thể trả về dòng sai.", "It only looks to the right of the search column. A column to the left of it cannot be fetched. Drop FALSE and it matches approximately and may return the wrong row.", [T("kênh", [
			"name",
			"id",
			"cpl"
		], [
			[
				"GDN",
				1,
				40
			],
			[
				"Meta",
				2,
				55
			],
			[
				"TikTok",
				3,
				32
			]
		], { bad: [
			0,
			1,
			2
		] })], "=VLOOKUP(2, B:C, ...) không lấy được cột name ở bên trái")
	],
	"xa-text": [S("Hàm xử lý chuỗi trả về chữ. LEFT lấy bốn ký tự đầu của «2026-01».", "String functions return text. LEFT takes the first four characters of 2026-01.", [T("công thức", [
		"công thức",
		"kết quả",
		"loại"
	], [[
		"=LEFT(\"2026-01\", 4)",
		"2026",
		"chữ"
	]], { cells: [[0, 1]] })]), S("Trông giống số nhưng vẫn là chữ nên SUM bỏ qua. Muốn thành số phải bọc VALUE.", "It looks like a number but it is text, so SUM skips it. To make it a number, wrap it in VALUE.", [T("công thức", [
		"công thức",
		"kết quả",
		"loại"
	], [[
		"=LEFT(\"2026-01\", 4)",
		"2026",
		"chữ"
	], [
		"=VALUE(LEFT(\"2026-01\", 4))",
		2026,
		"số"
	]], { rows: [1] })])],
	"xa-count": [
		S("Một cột có số, chữ «n/a» và một ô trống.", "A column with numbers, the text n/a and a blank cell.", [T("cột B", ["ô", "giá trị"], [
			["B1", 12],
			["B2", "n/a"],
			["B3", "(trống)"],
			["B4", 7]
		])]),
		S("COUNT chỉ đếm ô là số: B1 và B4, ra 2.", "COUNT counts only numeric cells: B1 and B4, so 2.", [T("cột B", ["ô", "giá trị"], [
			["B1", 12],
			["B2", "n/a"],
			["B3", "(trống)"],
			["B4", 7]
		], { cells: [[0, 1], [3, 1]] })], "=COUNT(B1:B4)   → 2"),
		S("COUNTA đếm mọi ô không trống, kể cả chữ: ra 3.", "COUNTA counts every non-empty cell, text included: 3.", [T("cột B", ["ô", "giá trị"], [
			["B1", 12],
			["B2", "n/a"],
			["B3", "(trống)"],
			["B4", 7]
		], { cells: [
			[0, 1],
			[1, 1],
			[3, 1]
		] })], "=COUNTA(B1:B4)   → 3")
	],
	"xa-match": [
		S("Bảng có tên kênh ở cột A và mã ở cột B. Cần tìm tên khi biết mã 2: tên nằm bên trái cột mã.", "Names in column A and codes in column B. We need the name given code 2: the name is left of the code column.", [T("kênh", ["A: name", "B: id"], [
			["GDN", 1],
			["Meta", 2],
			["TikTok", 3]
		], { cols: [1] })]),
		S("MATCH tìm mã 2 trong cột B và báo vị trí: dòng thứ 2.", "MATCH finds code 2 in column B and reports the position: the 2nd row.", [T("kênh", ["A: name", "B: id"], [
			["GDN", 1],
			["Meta", 2],
			["TikTok", 3]
		], { cells: [[1, 1]] })], "=MATCH(2, B:B, 0)   → 2"),
		S("INDEX lấy ô thứ 2 của cột A. Nó nhìn được sang trái, điều VLOOKUP không làm được.", "INDEX takes the 2nd cell of column A. It can look left, which VLOOKUP cannot.", [T("kênh", ["A: name", "B: id"], [
			["GDN", 1],
			["Meta", 2],
			["TikTok", 3]
		], { cells: [[1, 0]] })], "=INDEX(A:A, MATCH(2, B:B, 0))   → Meta")
	],
	"xa-what": [S("Mô hình nhỏ: số form = chi tiêu × tỷ lệ. Ô đầu vào là chi tiêu 8 và tỷ lệ 3.", "A small model: forms = spend × rate. The input cells are spend 8 and rate 3.", [T("ô đầu vào", ["ô", "giá trị"], [
		["spend", 8],
		["rate", 3],
		["forms = spend × rate", 24]
	], {
		rows: [0, 1],
		cells: [[2, 1]]
	})]), S("Đổi tỷ lệ thành 4, số form tự tính lại ra 32. Đây là phép tính theo giả định bạn nhập, không phải dự báo.", "Change rate to 4 and forms recalculates to 32. This is arithmetic on the assumption you typed, not a forecast.", [T("ô đầu vào", ["ô", "giá trị"], [
		["spend", 8],
		["rate", 4],
		["forms = spend × rate", 32]
	], { cells: [[1, 1], [2, 1]] })])],
	"xa-macro": [
		S("Macro ghi lại các thao tác bạn bấm theo thứ tự.", "A macro records the steps you click, in order.", [T("macro đã ghi", ["#", "thao tác"], [
			[1, "chọn cột C"],
			[2, "xếp giảm dần"],
			[3, "tô vàng dòng đầu"]
		])]),
		S("Chạy lại macro là bấm lại đúng các bước đó trên dữ liệu mới.", "Running the macro replays exactly those clicks on new data.", [T("macro đã ghi", ["#", "thao tác"], [
			[1, "chọn cột C"],
			[2, "xếp giảm dần"],
			[3, "tô vàng dòng đầu"]
		], { rows: [
			0,
			1,
			2
		] })]),
		S("Nó không biết bạn muốn gì. Nếu dữ liệu mới có thêm một cột thì «cột C» là cột khác, và macro vẫn bấm.", "It does not know what you want. If the new data has an extra column, column C is a different column, and the macro still clicks.", [T("macro đã ghi", ["#", "thao tác"], [
			[1, "chọn cột C"],
			[2, "xếp giảm dần"],
			[3, "tô vàng dòng đầu"]
		], { bad: [0] })])
	]
};
var demos = {
	...sqlDemos,
	...xlDemos,
	...pyDemos,
	...vizDemos
};
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
var pilotWalks = {
	bayes: {
		vi: {
			words: [
				["Xác suất ban đầu (prior)", "Khả năng một khách bất kỳ sắp rời, tính trước khi có bất kỳ cảnh báo nào."],
				["Bắt đúng", "Trong những khách thật sự sắp rời, công cụ gắn cờ được bao nhiêu phần trăm."],
				["Báo nhầm", "Trong những khách sẽ ở lại, công cụ vẫn gắn cờ nhầm bao nhiêu phần trăm."],
				["Xác suất sau (posterior)", "Khả năng khách thật sự sắp rời, tính sau khi biết khách đã bị gắn cờ."]
			],
			problem: "Spa có 1000 khách. 5% trong số họ thật sự sắp rời. Công cụ cảnh báo bắt đúng 90% người sắp rời, nhưng cũng báo nhầm 8% người ở lại. Một khách vừa bị gắn cờ. Khả năng khách đó thật sự sắp rời là bao nhiêu?",
			steps: [
				["Chia 1000 khách thành hai nhóm", "5% của 1000 là 50 người sắp rời. Còn lại 950 người ở lại."],
				["Đếm những người sắp rời mà bị gắn cờ", "90% của 50 là 45 người. Đây là cảnh báo đúng."],
				["Đếm những người ở lại mà vẫn bị gắn cờ", "8% của 950 là 76 người. Đây là cảnh báo nhầm."],
				["Gộp tất cả những người bị gắn cờ", "45 + 76 = 121 người bị gắn cờ."],
				["Hỏi lại câu hỏi ban đầu", "Trong 121 người bị gắn cờ chỉ có 45 người thật sự sắp rời: 45 ÷ 121 ≈ 37%."]
			],
			say: "Công cụ bắt đúng tới 90%, nhưng một khách bị gắn cờ chỉ có khoảng 37% khả năng thật sự sắp rời. Lý do: người ở lại đông gấp 19 lần người sắp rời, nên dù tỷ lệ báo nhầm chỉ 8% thì số báo nhầm (76) vẫn nhiều hơn số báo đúng (45). Xác suất ban đầu phải đi vào phép tính.",
			check: ["Nếu tỷ lệ khách sắp rời là 20% thay vì 5%, xác suất sau tăng hay giảm? Con số khoảng bao nhiêu?", "Tăng. 200 người sắp rời, 90% là 180 báo đúng. 800 người ở lại, 8% là 64 báo nhầm. 180 ÷ (180 + 64) ≈ 74%."]
		},
		en: {
			words: [
				["Prior", "How likely a random customer is to leave, before any alert exists."],
				["Catches correctly", "Of those who really are leaving, the percentage the tool flags."],
				["False alarm", "Of those who will stay, the percentage the tool flags by mistake."],
				["Posterior", "How likely the customer really is to leave, after knowing they were flagged."]
			],
			problem: "A spa has 1000 customers. 5% of them are really about to leave. The alert tool catches 90% of those leaving, but also falsely flags 8% of those staying. One customer has just been flagged. How likely is it that this customer is really about to leave?",
			steps: [
				["Split the 1000 customers into two groups", "5% of 1000 is 50 people about to leave. The other 950 will stay."],
				["Count those leaving who are flagged", "90% of 50 is 45 people. These are correct alerts."],
				["Count those staying who are still flagged", "8% of 950 is 76 people. These are false alarms."],
				["Put all flagged people together", "45 + 76 = 121 people are flagged."],
				["Go back to the original question", "Of the 121 flagged, only 45 are really leaving: 45 ÷ 121 ≈ 37%."]
			],
			say: "The tool catches 90%, yet a flagged customer has only about a 37% chance of really leaving. The reason: people who stay outnumber people who leave 19 to 1, so even an 8% false-alarm rate gives more false alarms (76) than correct ones (45). The prior has to go into the calculation.",
			check: ["If 20% of customers were about to leave instead of 5%, would the posterior rise or fall? Roughly to what?", "It rises. 200 are leaving, 90% is 180 correct alerts. 800 stay, 8% is 64 false alarms. 180 ÷ (180 + 64) ≈ 74%."]
		}
	},
	ci: {
		vi: {
			words: [
				["Trung bình mẫu", "Trung bình của những tuần bạn đã đo được."],
				["Độ lệch chuẩn σ", "Mức các tuần thường lệch khỏi trung bình bao xa. Ở đây giả sử đã biết σ = 12."],
				["Sai số chuẩn (SE)", "Trung bình mẫu dao động bao nhiêu từ mẫu này sang mẫu khác. SE = σ ÷ √n."],
				["Mức tin cậy 95%", "Nếu lặp lại việc lấy mẫu rất nhiều lần, khoảng 95 trên 100 khoảng tính ra sẽ chứa trung bình thật."],
				["z", "Hệ số nhân độ rộng. Với 95%, z ≈ 1,96."]
			],
			problem: "Bạn đo số form mỗi tuần trong 36 tuần. Trung bình 50 form. Giả sử σ = 12. Hãy dựng khoảng tin cậy 95% cho trung bình thật.",
			steps: [
				["Tính sai số chuẩn", "SE = 12 ÷ √36 = 12 ÷ 6 = 2."],
				["Nhân với z", "Nửa độ rộng = 1,96 × 2 = 3,92."],
				["Cộng và trừ quanh trung bình mẫu", "50 − 3,92 = 46,08 và 50 + 3,92 = 53,92."],
				["Viết kết luận", "Khoảng tin cậy 95% là từ 46,1 đến 53,9 form mỗi tuần."]
			],
			say: "Trung bình thật có thể nằm ở đâu đó giữa khoảng 46 và 54. Nói «95%» là nói về cách làm: làm theo cách này nhiều lần thì khoảng 95 lần khoảng tính ra sẽ bắt được giá trị thật. Không phải nói «có 95% xác suất giá trị thật nằm trong khoảng cụ thể này».",
			check: ["Nếu đo 144 tuần thay vì 36 tuần (gấp 4 lần), khoảng sẽ rộng gấp mấy so với trước?", "Hẹp đi một nửa. SE = 12 ÷ 12 = 1, nửa độ rộng = 1,96, khoảng từ 48,04 đến 51,96. Gấp 4 lần mẫu thì khoảng hẹp đi 2 lần."]
		},
		en: {
			words: [
				["Sample mean", "The average of the weeks you actually measured."],
				["Standard deviation σ", "How far weeks typically stray from the average. Here we assume σ = 12 is known."],
				["Standard error (SE)", "How much the sample mean wobbles from one sample to the next. SE = σ ÷ √n."],
				["95% confidence level", "If you repeated the sampling very many times, about 95 of every 100 intervals would contain the true mean."],
				["z", "The width multiplier. For 95%, z ≈ 1.96."]
			],
			problem: "You measure forms per week over 36 weeks. The average is 50 forms. Assume σ = 12. Build a 95% confidence interval for the true mean.",
			steps: [
				["Compute the standard error", "SE = 12 ÷ √36 = 12 ÷ 6 = 2."],
				["Multiply by z", "Half-width = 1.96 × 2 = 3.92."],
				["Add and subtract around the sample mean", "50 − 3.92 = 46.08 and 50 + 3.92 = 53.92."],
				["State the conclusion", "The 95% confidence interval is 46.1 to 53.9 forms per week."]
			],
			say: "The true mean could be anywhere between about 46 and 54. “95%” describes the method: do this over and over and about 95 of the intervals will catch the true value. It does not say “there is a 95% probability the true value lies in this particular interval”.",
			check: ["If you measured 144 weeks instead of 36 (4 times as many), how does the interval change?", "It halves in width. SE = 12 ÷ 12 = 1, half-width = 1.96, interval 48.04 to 51.96. Four times the sample makes the interval twice as narrow."]
		}
	},
	"tree-gini": {
		vi: {
			words: [
				["Nút", "Một nhóm khách đang xét. Nút gốc là cả nhóm trước khi chia."],
				["Gini", "Mức «lẫn lộn» của nhóm. Bằng 0 khi cả nhóm cùng một nhãn. Lớn nhất là 0,5 khi hai nhãn chia đôi. Công thức: 1 − p² − q²."],
				["Chia (split)", "Một câu hỏi có/không tách nhóm thành hai nhánh, ví dụ «ghé ít hơn 2 lần?»."]
			],
			problem: "Có 100 khách: 40 người ở lại, 60 người rời. Câu hỏi «số lần ghé nhỏ hơn 2?» tách thành nhánh trái (10 ở, 40 rời) và nhánh phải (30 ở, 20 rời). Câu hỏi này có làm nhóm bớt lẫn lộn không?",
			steps: [
				["Tính Gini của nút gốc", "Ở lại 40% và rời 60%. Gini = 1 − 0,4² − 0,6² = 1 − 0,16 − 0,36 = 0,48."],
				["Tính Gini nhánh trái (50 người)", "Ở 20%, rời 80%. Gini = 1 − 0,2² − 0,8² = 1 − 0,04 − 0,64 = 0,32."],
				["Tính Gini nhánh phải (50 người)", "Ở 60%, rời 40%. Gini = 1 − 0,6² − 0,4² = 0,48."],
				["Lấy trung bình có trọng số", "Hai nhánh đều 50 người nên mỗi nhánh nặng một nửa: 0,5 × 0,32 + 0,5 × 0,48 = 0,40."],
				["So với trước khi chia", "0,48 − 0,40 = 0,08. Mức lẫn lộn giảm 0,08, nên chia như vậy có ích."]
			],
			say: "Cây chọn câu hỏi làm Gini giảm nhiều nhất. Ở đây mức giảm là 0,08, một chút. Nếu một câu hỏi khác tách hẳn người ở khỏi người rời thì Gini mỗi nhánh về 0 và mức giảm là 0,48, tối đa.",
			check: ["Nếu một câu hỏi tách hoàn hảo (nhánh trái 40 người ở, nhánh phải 60 người rời), Gini sau khi chia bằng bao nhiêu?", "0. Mỗi nhánh chỉ có một nhãn nên Gini mỗi nhánh bằng 0, trung bình cũng 0. Mức giảm là 0,48."]
		},
		en: {
			words: [
				["Node", "A group of customers under consideration. The root node is the whole group before any split."],
				["Gini", "How “mixed” a group is. It is 0 when the whole group has one label. The maximum is 0.5 when two labels split 50/50. Formula: 1 − p² − q²."],
				["Split", "A yes/no question that divides the group into two branches, for example “fewer than 2 visits?”."]
			],
			problem: "There are 100 customers: 40 stay, 60 leave. The question “fewer than 2 visits?” splits them into a left branch (10 stay, 40 leave) and a right branch (30 stay, 20 leave). Does this question make the groups less mixed?",
			steps: [
				["Compute the Gini of the root node", "Stay 40%, leave 60%. Gini = 1 − 0.4² − 0.6² = 1 − 0.16 − 0.36 = 0.48."],
				["Compute the Gini of the left branch (50 people)", "Stay 20%, leave 80%. Gini = 1 − 0.2² − 0.8² = 1 − 0.04 − 0.64 = 0.32."],
				["Compute the Gini of the right branch (50 people)", "Stay 60%, leave 40%. Gini = 1 − 0.6² − 0.4² = 0.48."],
				["Take the weighted average", "Both branches have 50 people so each counts half: 0.5 × 0.32 + 0.5 × 0.48 = 0.40."],
				["Compare with before the split", "0.48 − 0.40 = 0.08. The mix dropped by 0.08, so this split helps."]
			],
			say: "The tree picks the question that lowers Gini the most. Here the drop is 0.08, a small one. If another question separated the stayers from the leavers completely, each branch's Gini would be 0 and the drop would be 0.48, the maximum.",
			check: ["If a question separated them perfectly (left branch 40 stayers, right branch 60 leavers), what would the Gini after the split be?", "0. Each branch has a single label, so each Gini is 0 and so is the average. The drop is 0.48."]
		}
	},
	"nlp-tfidf": {
		vi: {
			words: [
				["TF (tần suất từ)", "Từ đó chiếm bao nhiêu phần trong văn bản này. Một từ xuất hiện 1 lần trong văn bản 5 từ thì TF = 1 ÷ 5 = 0,2."],
				["df (số văn bản chứa từ)", "Từ đó có mặt ở bao nhiêu văn bản trong bộ sưu tập."],
				["IDF", "Điểm hiếm của từ: IDF = ln(N ÷ df), N là tổng số văn bản. Từ có mặt ở càng nhiều văn bản thì IDF càng thấp."],
				["TF-IDF", "TF × IDF. Điểm cao nghĩa là từ lặp lại trong văn bản này và hiếm ở các văn bản khác."]
			],
			problem: "Có 4 văn bản. Xét văn bản d3: «khách thích ghế massage rẻ». Trong cả bộ: «khách», «thích», «massage» có mặt ở 3 văn bản; «ghế», «rẻ» có mặt ở 2 văn bản. Từ nào đáng chú ý nhất trong d3?",
			steps: [
				["Tính TF", "d3 có 5 từ, mỗi từ xuất hiện 1 lần nên mọi từ có TF = 1 ÷ 5 = 0,20."],
				["Tính IDF cho từ phổ biến", "«khách», «thích», «massage»: N = 4, df = 3. IDF = ln(4 ÷ 3) ≈ 0,29."],
				["Tính IDF cho từ hiếm hơn", "«ghế», «rẻ»: df = 2. IDF = ln(4 ÷ 2) ≈ 0,69."],
				["Nhân TF với IDF", "Từ phổ biến: 0,20 × 0,29 ≈ 0,06. Từ hiếm hơn: 0,20 × 0,69 ≈ 0,14."]
			],
			say: "Trong d3, «ghế» và «rẻ» được điểm gấp đôi (0,14 so với 0,06) vì ít văn bản khác nhắc tới. Chúng mô tả d3 rõ hơn là «khách» hay «massage». TF-IDF làm những từ ở đâu cũng có tự nhiên nhạt đi.",
			check: ["Nếu một từ có mặt ở cả 4 văn bản thì điểm TF-IDF của nó là bao nhiêu?", "0. IDF = ln(4 ÷ 4) = ln 1 = 0, nên TF × 0 = 0 dù từ đó lặp lại bao nhiêu lần."]
		},
		en: {
			words: [
				["TF (term frequency)", "What share of this text the word takes up. A word appearing once in a 5-word text has TF = 1 ÷ 5 = 0.2."],
				["df (document frequency)", "How many documents in the collection contain the word."],
				["IDF", "How rare the word is: IDF = ln(N ÷ df), N being the number of documents. The more documents contain the word, the lower its IDF."],
				["TF-IDF", "TF × IDF. A high score means the word repeats in this text and is rare in the others."]
			],
			problem: "There are 4 documents. Look at d3: “guests like massage chair cheap”. Across the set, “guests”, “like” and “massage” appear in 3 documents; “chair” and “cheap” appear in 2. Which word stands out most in d3?",
			steps: [
				["Compute TF", "d3 has 5 words, each appearing once, so every word has TF = 1 ÷ 5 = 0.20."],
				["Compute IDF for the common words", "“guests”, “like”, “massage”: N = 4, df = 3. IDF = ln(4 ÷ 3) ≈ 0.29."],
				["Compute IDF for the rarer words", "“chair”, “cheap”: df = 2. IDF = ln(4 ÷ 2) ≈ 0.69."],
				["Multiply TF by IDF", "Common words: 0.20 × 0.29 ≈ 0.06. Rarer words: 0.20 × 0.69 ≈ 0.14."]
			],
			say: "In d3, “chair” and “cheap” score more than double (0.14 vs 0.06) because few other documents mention them. They describe d3 better than “guests” or “massage” do. TF-IDF naturally fades the words that are everywhere.",
			check: ["If a word appears in all 4 documents, what is its TF-IDF score?", "0. IDF = ln(4 ÷ 4) = ln 1 = 0, so TF × 0 = 0 no matter how often the word repeats."]
		}
	},
	"slr-assume": {
		vi: {
			words: [
				["Phần dư", "Giá trị thật trừ giá trị đường thẳng dự đoán. Dương nghĩa là điểm nằm trên đường, âm nghĩa là nằm dưới."],
				["R²", "Phần biến động của y mà đường thẳng giải thích được. Gần 1 nghĩa là bám sát, nhưng chưa nói đường có đúng dạng hay không."],
				["Giả định tuyến tính", "Quan hệ giữa x và y là một đường thẳng, không phải đường cong."]
			],
			problem: "Năm điểm dữ liệu: x = 1, 2, 3, 4, 5 và y = 1, 4, 9, 16, 25 (thực ra y = x²). Bạn vẫn vẽ một đường thẳng bình phương tối thiểu qua chúng. Đường đó có ổn không?",
			steps: [
				["Tìm đường thẳng", "Trung bình x = 3, trung bình y = 11. Độ dốc = 6, chặn = 11 − 6 × 3 = −7. Đường là y = −7 + 6x."],
				["Tính giá trị đường dự đoán", "x = 1, 2, 3, 4, 5 cho −1, 5, 11, 17, 23."],
				["Tính phần dư (thật trừ dự đoán)", "1 − (−1) = +2; 4 − 5 = −1; 9 − 11 = −2; 16 − 17 = −1; 25 − 23 = +2."],
				["Nhìn dãy phần dư theo x", "+2, −1, −2, −1, +2: giảm xuống rồi tăng lên, thành hình chữ U."],
				["Tính R²", "Tổng sai lệch của y so với trung bình = 374. Tổng bình phương phần dư = 4 + 1 + 4 + 1 + 4 = 14. R² = 1 − 14 ÷ 374 ≈ 0,96."]
			],
			say: "R² = 0,96 nghe rất tốt, nhưng dãy phần dư hình chữ U cho thấy đường thẳng đang sai có hệ thống: cao ở hai đầu, thấp ở giữa. Phần dư lẽ ra phải rải ngẫu nhiên quanh 0. Một hình dạng rõ ràng nghĩa là giả định tuyến tính đã bị phá.",
			check: ["Phần dư thấy được hình phễu (càng sang phải càng xòe rộng) cho biết giả định nào bị phá?", "Phương sai không đều: độ nhiễu tăng theo x. Hệ số vẫn tính ra được, nhưng khoảng tin cậy và p-value sẽ không đáng tin."]
		},
		en: {
			words: [
				["Residual", "The actual value minus the value the line predicts. Positive means the point is above the line, negative means below."],
				["R²", "The share of y's variation the line explains. Close to 1 means a tight fit, but it does not say the line has the right shape."],
				["Linearity assumption", "The relationship between x and y is a straight line, not a curve."]
			],
			problem: "Five data points: x = 1, 2, 3, 4, 5 and y = 1, 4, 9, 16, 25 (in truth y = x²). You still draw a least-squares straight line through them. Is that line fine?",
			steps: [
				["Find the line", "Mean of x = 3, mean of y = 11. Slope = 6, intercept = 11 − 6 × 3 = −7. The line is y = −7 + 6x."],
				["Compute the line's predictions", "x = 1, 2, 3, 4, 5 give −1, 5, 11, 17, 23."],
				["Compute the residuals (actual minus predicted)", "1 − (−1) = +2; 4 − 5 = −1; 9 − 11 = −2; 16 − 17 = −1; 25 − 23 = +2."],
				["Look at the residuals in order of x", "+2, −1, −2, −1, +2: down, then up, forming a U."],
				["Compute R²", "Total variation of y around its mean = 374. Sum of squared residuals = 4 + 1 + 4 + 1 + 4 = 14. R² = 1 − 14 ÷ 374 ≈ 0.96."]
			],
			say: "R² = 0.96 sounds great, but the U-shaped residuals show the line is wrong in a systematic way: too low at both ends, too high in the middle. Residuals should scatter randomly around 0. A clear shape means the linearity assumption is broken.",
			check: ["Residuals that fan out like a funnel (wider to the right) break which assumption?", "Constant variance: the noise grows with x. The coefficients can still be computed, but confidence intervals and p-values become unreliable."]
		}
	},
	"or-solv": {
		vi: {
			words: [
				["Ràng buộc", "Giới hạn bạn phải tuân theo, ví dụ tổng ngân sách không quá 4."],
				["Vùng khả thi", "Tập mọi phương án thỏa tất cả ràng buộc."],
				["Đỉnh", "Góc của vùng khả thi, nơi hai ràng buộc gặp nhau."],
				["Cực trị cục bộ", "Điểm tốt hơn mọi điểm ngay quanh nó, nhưng chưa chắc tốt nhất toàn bộ."]
			],
			problem: "Phần A, bài tuyến tính: tối đa hóa 3x + 2y với x + y ≤ 4, x ≤ 3, x và y không âm. Phần B, bài cong: lãi theo giá (số minh họa) là 10 → 40, 20 → 55, 30 → 45, 40 → 50, 50 → 70, 60 → 30. Solver đi từ một giá, mỗi lần sang ô lân cận cao hơn cho tới khi không còn ô nào cao hơn. Kết quả có chắc là tốt nhất không?",
			steps: [
				["A1. Liệt kê các đỉnh của vùng khả thi", "(0, 0), (3, 0), (3, 1), (0, 4)."],
				["A2. Tính 3x + 2y tại từng đỉnh", "0, 9, 11, 8. Lớn nhất là 11 tại (3, 1)."],
				["A3. Kết luận cho bài tuyến tính", "Phương án tối ưu luôn nằm ở một đỉnh, nên chỉ cần xét các đỉnh. Kết quả này là tối ưu toàn cục."],
				["B1. Xuất phát từ giá 10", "Giá 10 cho lãi 40. Giá 20 cao hơn (55) nên đi sang 20. Từ 20, giá 10 cho 40 và giá 30 cho 45, đều thấp hơn, nên dừng ở giá 20 với lãi 55."],
				["B2. Xuất phát từ giá 40", "Giá 40 cho lãi 50. Giá 50 cao hơn (70) nên đi sang 50. Từ 50, giá 40 cho 50 và giá 60 cho 30, đều thấp hơn, nên dừng ở giá 50 với lãi 70."],
				["B3. So sánh", "Hai điểm xuất phát cho hai kết quả khác nhau: 55 và 70."]
			],
			say: "Bài tuyến tính chỉ có một đáp án đáng tin: đỉnh tốt nhất. Bài cong thì solver chỉ đi theo dốc ở chỗ nó đứng, nên dừng ở chỗ nó leo tới được. Giá 20 là một đỉnh cục bộ (lãi 55), còn giá 50 mới tốt nhất (lãi 70). «Solver xong» chỉ nghĩa là «đã dừng», không phải «hết chỗ tốt hơn».",
			check: ["Bạn chạy solver ở bài cong từ 3 điểm xuất phát (10, 30, 60). Ra 55, 55, 70. Bạn kết luận gì và làm gì tiếp?", "Chưa thể gọi 55 là tối ưu toàn cục vì có kết quả 70 tốt hơn. Nên thử thêm nhiều điểm xuất phát và lấy kết quả tốt nhất, đồng thời nói rõ đây là cực trị cục bộ."]
		},
		en: {
			words: [
				["Constraint", "A limit you must obey, for example total budget no more than 4."],
				["Feasible region", "The set of all plans that satisfy every constraint."],
				["Vertex (corner)", "A corner of the feasible region, where two constraints meet."],
				["Local optimum", "A point better than everything right around it, but not necessarily the best overall."]
			],
			problem: "Part A, a linear problem: maximise 3x + 2y with x + y ≤ 4, x ≤ 3, and x, y not negative. Part B, a curved problem: profit by price (illustrative numbers) is 10 → 40, 20 → 55, 30 → 45, 40 → 50, 50 → 70, 60 → 30. The solver starts from one price and each time moves to a neighbouring price that is higher, until none is higher. Is the result guaranteed to be the best?",
			steps: [
				["A1. List the vertices of the feasible region", "(0, 0), (3, 0), (3, 1), (0, 4)."],
				["A2. Compute 3x + 2y at each vertex", "0, 9, 11, 8. The largest is 11 at (3, 1)."],
				["A3. Conclude for the linear problem", "The optimum always sits at a vertex, so only vertices need checking. This result is the global optimum."],
				["B1. Start from price 10", "Price 10 gives profit 40. Price 20 is higher (55), so move to 20. From 20, price 10 gives 40 and price 30 gives 45, both lower, so it stops at price 20 with profit 55."],
				["B2. Start from price 40", "Price 40 gives profit 50. Price 50 is higher (70), so move to 50. From 50, price 40 gives 50 and price 60 gives 30, both lower, so it stops at price 50 with profit 70."],
				["B3. Compare", "Two starting points give two different results: 55 and 70."]
			],
			say: "A linear problem has one answer you can trust: the best vertex. On a curved problem the solver only follows the slope where it stands, so it stops wherever it manages to climb to. Price 20 is a local optimum (profit 55) while price 50 is the best (profit 70). “The solver finished” only means “it stopped”, not “no better place exists”.",
			check: ["You run the solver on the curved problem from 3 starting points (10, 30, 60) and get 55, 55, 70. What do you conclude and do next?", "You cannot call 55 the global optimum, because 70 is better. Try more starting points, keep the best result, and say plainly that these are local optima."]
		}
	}
};
/** C0: hiểu việc, giải quyết vấn đề, Excel. Tháng 1 ở Lotus Spa. */
var base$3 = {
	"c0-order": {
		vi: {
			story: "Tháng 1, Lotus Spa (3 chi nhánh: Quận 1, Quận 3, Thủ Đức). Chị Lan, chủ chuỗi, gọi bạn vào phòng: «Form đặt hẹn tháng 12 giảm, em xem giúp chị.» Đây là việc đầu tiên của bạn, và cả năm tới bạn sẽ đi cùng câu chuyện này.",
			words: [["Giáo trình", "Danh sách các khóa học xếp theo thứ tự, khóa sau dùng kiến thức khóa trước."], ["Phụ thuộc", "Một kỹ năng cần kỹ năng khác làm nền. Ví dụ không đọc được bảng thì không tính được trung bình."]],
			problem: "Form tháng 11 là 220, tháng 12 là 180. Chị Lan muốn biết vì sao giảm và nên làm gì. Bạn cần những kỹ năng nào, theo thứ tự nào?",
			steps: [
				["Đo mức giảm trước", "(220 − 180) ÷ 220 = 40 ÷ 220 ≈ 18%. Việc đầu tiên là hiểu đúng câu hỏi, đây là khóa C0."],
				["Lấy và làm sạch dữ liệu", "Mở file quảng cáo bằng Excel (C0) rồi Python (C1). Không có dữ liệu sạch thì mọi con số sau đều lung lay."],
				["Mô tả rồi suy luận", "Tính trung bình, độ phân tán, rồi hỏi «mức giảm này là ngẫu nhiên hay thật?». Đây là thống kê (C2)."],
				["Dự đoán", "Cho hội viên nào sắp rời và form tuần sau (C3, C4)."],
				["Trình bày và quyết định", "Vẽ biểu đồ, kể cho chị Lan nghe, rồi đề xuất việc cần làm (C5, C6)."]
			],
			say: "Mỗi bước dựa vào bước trước. Đảo thứ tự, ví dụ dự đoán khi chưa hiểu dữ liệu, thì được một con số nhưng không biết nó đúng hay sai. Sổ này xếp bài theo đúng thứ tự đó, nên học từ trên xuống.",
			check: ["Nếu bạn bỏ bước «làm sạch dữ liệu» rồi chạy ngay mô hình, rủi ro chính là gì?", "Mô hình học từ dữ liệu lỗi (ô trống bị coi là 0, số bị lưu thành chữ) nên cho ra kết quả trông hợp lý nhưng sai, và bạn không có cách phát hiện."]
		},
		en: {
			story: "January, Lotus Spa (3 branches: District 1, District 3, Thu Duc). Ms. Lan, the owner, calls you into her office: “Booking forms dropped in December, please look into it.” This is your first job, and you will follow this story all year.",
			words: [["Curriculum", "A list of courses in order, where each later course builds on the earlier ones."], ["Dependency", "A skill that needs another skill as its base. You cannot compute an average if you cannot read the table."]],
			problem: "Forms were 220 in November and 180 in December. Ms. Lan wants to know why they dropped and what to do. Which skills do you need, and in what order?",
			steps: [
				["Measure the drop first", "(220 − 180) ÷ 220 = 40 ÷ 220 ≈ 18%. The first job is to understand the question correctly; this is course C0."],
				["Get and clean the data", "Open the ads file in Excel (C0) and then Python (C1). Without clean data every later number wobbles."],
				["Describe, then infer", "Compute the average and the spread, then ask “is this drop random or real?”. This is statistics (C2)."],
				["Predict", "Which members are about to leave, and next week's forms (C3, C4)."],
				["Present and decide", "Draw charts, tell Ms. Lan the story, then propose what to do (C5, C6)."]
			],
			say: "Each step relies on the one before. Swap the order, for example predicting before understanding the data, and you get a number without knowing whether it is right. This notebook orders the lessons that way, so study from top to bottom.",
			check: ["If you skip “clean the data” and run a model straight away, what is the main risk?", "The model learns from faulty data (blank cells treated as 0, numbers stored as text), so it gives results that look reasonable but are wrong, and you have no way to notice."]
		}
	},
	"c0-read": {
		vi: {
			story: "Ngày đầu, bạn mở sổ học để chuẩn bị. Mỗi thẻ trong sổ là một ý nhỏ. Bạn thử đọc một thẻ bằng chính con số chị Lan vừa đưa: form giảm từ 220 xuống 180.",
			words: [["Thẻ", "Một trang giải thích đúng một ý, kèm một hình và một câu nói cho đúng."], ["Phần trăm giảm", "Mức giảm chia cho giá trị lúc đầu: (trước − sau) ÷ trước."]],
			problem: "Thẻ nói: «phần trăm giảm = (trước − sau) ÷ trước». Hình vẽ hai cột 220 và 180. Bạn có đọc đúng thẻ này không?",
			steps: [
				["Đọc định nghĩa", "Phần trăm giảm = (trước − sau) ÷ trước. «Trước» là 220, «sau» là 180."],
				["Nhìn hình", "Cột đầu cao 220, cột sau thấp hơn 180. Khoảng chênh giữa hai đỉnh là 40."],
				["Đối chiếu định nghĩa với hình", "40 ÷ 220 ≈ 0,18, tức 18%. Chênh lệch trong hình khớp với tử số của công thức."],
				["Dừng khi khớp", "Định nghĩa và hình đã nói cùng một điều nên bạn có thể chuyển thẻ sau, không cần xem hết gì thêm."]
			],
			say: "Một thẻ không phải một video phải xem hết. Khi lời định nghĩa khớp với hình và con số bạn tự tính ra, bạn đã hiểu thẻ đó. Nếu chưa khớp thì quay lại đọc «Nói cho dễ».",
			check: ["Nếu bạn lấy (220 − 180) ÷ 180 thì ra bao nhiêu và vì sao sai?", "40 ÷ 180 ≈ 22%. Sai vì mẫu số phải là giá trị lúc đầu (220), không phải giá trị sau. Mẫu số sai thì mức giảm bị thổi phồng."]
		},
		en: {
			story: "On day one you open the notebook to get ready. Each card in it is one small idea. You try reading one card with the exact numbers Ms. Lan just gave you: forms fell from 220 to 180.",
			words: [["Card", "A page that explains exactly one idea, with a picture and a precise sentence."], ["Percentage drop", "The drop divided by the starting value: (before − after) ÷ before."]],
			problem: "The card says: “percentage drop = (before − after) ÷ before”. The picture shows two bars, 220 and 180. Are you reading the card correctly?",
			steps: [
				["Read the definition", "Percentage drop = (before − after) ÷ before. “Before” is 220, “after” is 180."],
				["Look at the picture", "The first bar is 220 tall, the second is shorter at 180. The gap between the tops is 40."],
				["Match definition to picture", "40 ÷ 220 ≈ 0.18, or 18%. The gap in the picture matches the numerator of the formula."],
				["Stop when they match", "The definition and the picture say the same thing, so you can move to the next card without watching anything more."]
			],
			say: "A card is not a video you must watch to the end. When the definition matches the picture and the number you computed yourself, you have understood the card. If it does not match, go back and read “In plain words”.",
			check: ["If you computed (220 − 180) ÷ 180, what do you get and why is it wrong?", "40 ÷ 180 ≈ 22%. It is wrong because the denominator must be the starting value (220), not the later one. A wrong denominator inflates the drop."]
		}
	},
	"crisp-biz": {
		vi: {
			story: "Tuần đầu tiên. Chị Lan nói «làm gì đó đi». Trước khi mở bất kỳ file nào, bạn phải biến yêu cầu mơ hồ này thành một câu hỏi nghiệp vụ mà dữ liệu có thể trả lời.",
			words: [
				["CRISP-DM", "Quy trình chuẩn cho một dự án dữ liệu, có sáu bước. Bước đầu là hiểu nghiệp vụ."],
				["Câu hỏi nghiệp vụ", "Một câu cho biết ai quyết định, quyết định gì, và khi nào."],
				["CPA", "Chi phí cho mỗi form: tổng chi quảng cáo chia cho số form."]
			],
			problem: "Chị Lan nói: «Form giảm, làm gì đó đi». Bạn hỏi lại và biết được: ngân sách quảng cáo 15 triệu mỗi tuần chia cho Google Display (GDN), Meta và TikTok; chị muốn quyết định có chuyển ngân sách giữa các kênh không trước ngày 31/1. Hãy viết câu hỏi nghiệp vụ.",
			steps: [
				["Ai quyết định", "Chị Lan quyết định, Thảo thực hiện thay đổi ngân sách."],
				["Quyết định gì", "Có chuyển một phần trong 15 triệu mỗi tuần từ kênh này sang kênh khác hay không."],
				["Khi nào", "Trước 31/1, để kịp kỳ ngân sách tháng 2."],
				["Chọn thước đo", "Số form mỗi tuần và CPA. Hiện tại 15 triệu ÷ 50 form = 300 nghìn mỗi form."],
				["Viết thành một câu", "«Trước 31/1, chị Lan có nên chuyển ngân sách giữa GDN, Meta và TikTok để tăng form mỗi tuần mà CPA không vượt 300 nghìn không?»"]
			],
			say: "Câu «form giảm» chưa trả lời được vì không ai biết phải đo gì và để làm gì. Câu cuối thì rõ: có người quyết định, có lựa chọn, có hạn, có thước đo. Từ đây mọi file và mọi phép tính đều phục vụ đúng câu đó.",
			check: ["Câu «Tăng traffic website lên 20%» có phải một câu hỏi nghiệp vụ tốt không?", "Chưa. Nó không nói ai quyết định điều gì và traffic không chắc dẫn đến form. Một câu tốt phải nối với một quyết định cụ thể và một thước đo cho quyết định đó."]
		},
		en: {
			story: "The first week. Ms. Lan says “do something”. Before opening any file, you must turn this vague request into a business question the data can answer.",
			words: [
				["CRISP-DM", "The standard process for a data project, in six steps. The first is business understanding."],
				["Business question", "A sentence that says who decides, what they decide, and by when."],
				["CPA", "Cost per form: total ad spend divided by the number of forms."]
			],
			problem: "Ms. Lan says: “Forms dropped, do something”. You ask follow-ups and learn: the ad budget is 15 million per week split among Google Display (GDN), Meta and TikTok; she wants to decide whether to shift budget between channels before 31 January. Write the business question.",
			steps: [
				["Who decides", "Ms. Lan decides, Thao carries out the budget change."],
				["What they decide", "Whether to shift part of the 15 million per week from one channel to another."],
				["By when", "Before 31 January, in time for February's budget cycle."],
				["Choose the measure", "Forms per week and CPA. Right now 15 million ÷ 50 forms = 300 thousand per form."],
				["Write it as one sentence", "“By 31 January, should Ms. Lan shift budget among GDN, Meta and TikTok to raise forms per week without CPA going above 300 thousand?”"]
			],
			say: "“Forms dropped” cannot be answered because nobody knows what to measure or why. The final sentence is clear: a decider, a choice, a deadline, a measure. From here every file and calculation serves that exact sentence.",
			check: ["Is “raise website traffic by 20%” a good business question?", "Not yet. It does not say who decides what, and traffic does not necessarily lead to forms. A good question ties to one specific decision and a measure for that decision."]
		}
	},
	"crisp-data": {
		vi: {
			story: "Có câu hỏi nghiệp vụ rồi, Thảo gửi bạn file «ads_export.xlsx» chứa 12 tuần. Trước khi tin nó, bạn kiểm xem file có đo được đúng quyết định của chị Lan không.",
			words: [["Hiểu dữ liệu", "Kiểm tra cột nào có, đo cái gì, và có đủ để trả lời câu hỏi nghiệp vụ hay không."], ["utm_source", "Nhãn gắn vào đường dẫn quảng cáo để biết form đến từ kênh nào."]],
			problem: "Câu hỏi: nên chuyển ngân sách giữa GDN, Meta, TikTok không (đo bằng form và CPA theo từng kênh). File có 12 tuần với các cột: tuần, kênh, chi phí, và tổng form của cả ba kênh. Dùng file này được chưa?",
			steps: [
				["Liệt kê điều quyết định cần", "Cần CPA từng kênh = chi phí kênh ÷ form kênh."],
				["Đối chiếu từng cột", "Chi phí có theo kênh (3 kênh × 12 tuần = 36 dòng). Form chỉ có tổng cả ba kênh (12 dòng)."],
				["Tìm chỗ thiếu", "Không có form theo từng kênh nên không chia được. Ví dụ tuần 1 tổng form 50 nhưng chưa biết GDN được bao nhiêu."],
				["Tìm nguồn bổ sung", "Hệ thống form có trường utm_source ghi kênh của mỗi form. Xin thêm xuất dữ liệu đó."]
			],
			say: "File đầy đặn 36 dòng nhưng vẫn chưa trả lời được câu hỏi, vì thiếu đúng một cột: form theo kênh. Phát hiện điều này bây giờ rẻ hơn nhiều so với phát hiện sau khi đã vẽ xong biểu đồ.",
			check: ["Sau khi có form theo kênh (GDN 18, Meta 20, TikTok 12 mỗi tuần), CPA của Meta là bao nhiêu nếu chi 5 triệu?", "5 triệu ÷ 20 form = 250 nghìn mỗi form."]
		},
		en: {
			story: "With the business question settled, Thao sends you “ads_export.xlsx” covering 12 weeks. Before trusting it, you check whether the file measures Ms. Lan's actual decision.",
			words: [["Data understanding", "Checking which columns exist, what they measure, and whether they are enough to answer the business question."], ["utm_source", "A tag added to an ad link so you know which channel a form came from."]],
			problem: "The question: should budget shift among GDN, Meta, TikTok (measured by forms and CPA per channel). The file has 12 weeks with columns: week, channel, spend, and total forms across all three channels. Can you use it yet?",
			steps: [
				["List what the decision needs", "You need CPA per channel = channel spend ÷ channel forms."],
				["Check each column", "Spend is per channel (3 channels × 12 weeks = 36 rows). Forms are only the total across the three channels (12 rows)."],
				["Find the gap", "There are no forms per channel, so you cannot divide. For week 1 total forms are 50 but you do not know how many GDN got."],
				["Find another source", "The form system has a utm_source field recording each form's channel. Ask for that export too."]
			],
			say: "The file looks full at 36 rows yet still cannot answer the question, because exactly one column is missing: forms per channel. Discovering this now is far cheaper than discovering it after the charts are drawn.",
			check: ["Once you have forms per channel (GDN 18, Meta 20, TikTok 12 a week), what is Meta's CPA if it spends 5 million?", "5 million ÷ 20 forms = 250 thousand per form."]
		}
	},
	"crisp-prep": {
		vi: {
			story: "Có thêm file form theo kênh. Trước khi tính CPA, bạn làm sạch: ở file chi phí, TikTok tuần 5 bị để trống. Cách xử lý ô trống này sẽ làm CPA đúng hay sai.",
			words: [["Chuẩn bị dữ liệu", "Đổi bảng để câu hỏi đọc được: lọc có chủ đích, điền chỗ trống và ghi lại cách điền, không xóa chỉ vì số trông lạ."], ["Ô trống", "Chưa có số liệu. Khác với số 0, tức là đã đo và chi bằng 0."]],
			problem: "TikTok có chi phí 4 triệu mỗi tuần ở 11 tuần, riêng tuần 5 để trống. Form TikTok mỗi tuần đều là 12 (12 tuần, tổng 144). Hãy tính CPA TikTok bằng hai cách xử lý ô trống và so sánh.",
			steps: [
				["Cách 1: coi ô trống là 0", "Tổng chi = 4 × 11 = 44 triệu. Chia cho 144 form: 44 ÷ 144 ≈ 0,306 triệu, tức 306 nghìn."],
				["Cách 2: bỏ tuần thiếu ra khỏi cả hai vế", "Dùng 11 tuần có chi phí: chi 44 triệu, form 12 × 11 = 132. 44 ÷ 132 = 0,333 triệu, tức 333 nghìn."],
				["So sánh", "306 nghìn so với 333 nghìn, chênh khoảng 27 nghìn mỗi form. Cách 1 làm TikTok trông rẻ hơn thật."],
				["Chọn cách đúng và ghi lại", "Cách 2, vì tuần 5 thật ra có chi tiêu (chỉ chưa ghi), nên coi là 0 là sai. Ghi vào sổ: «bỏ tuần 5 của TikTok khi tính CPA»."]
			],
			say: "Chỉ một ô trống đã làm CPA lệch 27 nghìn mỗi form, đủ làm TikTok trông tốt ngang Meta (250 nghìn) hơn thực tế. Chuẩn bị dữ liệu nghĩa là chọn cách xử lý có lý do và ghi lại, không phải tự động điền số.",
			check: ["Vì sao không xóa luôn dòng tuần 5 của TikTok khỏi file?", "Xóa làm mất cả 12 form của tuần đó khỏi các tính toán khác (ví dụ tổng form tuần). Chỉ cần loại tuần 5 khi tính CPA TikTok, các chỗ khác vẫn dùng."]
		},
		en: {
			story: "The per-channel form file arrives. Before computing CPA you clean up: in the spend file TikTok's week 5 is blank. How you handle this blank decides whether CPA is right or wrong.",
			words: [["Data preparation", "Reshaping the table so the question can be read: filter on purpose, fill gaps and record how, never delete just because a number looks odd."], ["Blank cell", "No figure yet. Different from the number 0, which means it was measured and the spend was zero."]],
			problem: "TikTok spends 4 million a week in 11 weeks; week 5 alone is blank. TikTok forms are 12 every week (12 weeks, total 144). Compute TikTok's CPA with two ways of handling the blank and compare.",
			steps: [
				["Way 1: treat the blank as 0", "Total spend = 4 × 11 = 44 million. Divide by 144 forms: 44 ÷ 144 ≈ 0.306 million, i.e. 306 thousand."],
				["Way 2: drop the missing week from both sides", "Use the 11 weeks with spend: spend 44 million, forms 12 × 11 = 132. 44 ÷ 132 = 0.333 million, i.e. 333 thousand."],
				["Compare", "306 thousand versus 333 thousand, a gap of about 27 thousand per form. Way 1 makes TikTok look cheaper than it is."],
				["Pick the right way and record it", "Way 2, because week 5 did have spend (it just was not recorded), so treating it as 0 is wrong. Write in the log: “dropped TikTok week 5 when computing CPA”."]
			],
			say: "One blank cell shifted CPA by 27 thousand per form, enough to make TikTok look closer to Meta (250 thousand) than it really is. Preparing data means choosing a handling with a reason and recording it, not filling in numbers automatically.",
			check: ["Why not simply delete TikTok's week 5 row from the file?", "Deleting also removes that week's 12 forms from other calculations (for example weekly total forms). You only need to leave week 5 out when computing TikTok's CPA; elsewhere it is still used."]
		}
	},
	"crisp-ship": {
		vi: {
			story: "CPA đã sạch: Meta 250 nghìn, GDN và TikTok khoảng 333 nghìn. Giờ là bước cuối của vòng đầu: đưa kết quả vào quyết định thật của chị Lan và hẹn ngày đo lại.",
			words: [["Triển khai", "Đưa kết quả vào công việc thật rồi theo dõi, không chỉ nộp một báo cáo."], ["Giả định", "Điều ta tạm tin là đúng, ví dụ CPA vẫn giữ nguyên khi chi thêm."]],
			problem: "Chị Lan đồng ý chuyển 1 triệu mỗi tuần từ GDN (CPA 333 nghìn) sang Meta (CPA 250 nghìn) trong 4 tuần. Kết quả mong đợi là gì, và theo dõi bằng gì?",
			steps: [
				["Form mất ở GDN", "1 triệu ÷ 333 nghìn ≈ 3 form mỗi tuần."],
				["Form thêm ở Meta", "1 triệu ÷ 250 nghìn = 4 form mỗi tuần."],
				["Mức tăng ròng", "4 − 3 = 1 form mỗi tuần, tức khoảng 4 form sau 4 tuần. Số này khiêm tốn."],
				["Gọi tên giả định", "Tính trên giả định CPA không đổi khi chi thêm. Thực tế chi thêm thường làm CPA tăng."],
				["Hẹn đo lại", "Mỗi tuần đếm form theo kênh bằng cùng cách (utm_source), so với mức 50 form và CPA 300 nghìn hiện tại."]
			],
			say: "Triển khai không phải là «đã gửi báo cáo». Đó là một thay đổi cụ thể (chuyển 1 triệu), một kết quả dự kiến (thêm khoảng 1 form mỗi tuần) và một lần đo lại đã hẹn. Nếu số đo lại khác nhiều, ta quay lại hiểu nghiệp vụ và dữ liệu.",
			check: ["Nếu sau 4 tuần form theo tuần chỉ còn 49, kết luận nào đúng?", "Chưa kết luận được kênh nào kém. Dự kiến khiêm tốn là +1 form, và 49 nằm trong mức dao động bình thường. Cần xem CPA từng kênh, và có thể giả định «CPA không đổi» đã sai. Đây là chỗ thống kê (C2) giúp."]
		},
		en: {
			story: "CPA is clean: Meta 250 thousand, GDN and TikTok about 333 thousand. Now comes the last step of the first loop: put the result into Ms. Lan's real decision and book a date to measure again.",
			words: [["Deployment", "Putting the result into real work and then monitoring it, not just handing in a report."], ["Assumption", "Something we temporarily trust, for example that CPA stays the same when spend increases."]],
			problem: "Ms. Lan agrees to shift 1 million per week from GDN (CPA 333 thousand) to Meta (CPA 250 thousand) for 4 weeks. What result do you expect, and how do you monitor it?",
			steps: [
				["Forms lost at GDN", "1 million ÷ 333 thousand ≈ 3 forms per week."],
				["Forms gained at Meta", "1 million ÷ 250 thousand = 4 forms per week."],
				["Net gain", "4 − 3 = 1 form per week, about 4 forms after 4 weeks. A modest number."],
				["Name the assumption", "This assumes CPA does not change when spend rises. In practice more spend often raises CPA."],
				["Book the re-measure", "Each week count forms by channel in the same way (utm_source) and compare with today's 50 forms and 300 thousand CPA."]
			],
			say: "Deployment is not “the report was sent”. It is a concrete change (shift 1 million), an expected result (about 1 more form a week) and a booked re-measure. If the re-measured numbers differ a lot, you go back to business understanding and the data.",
			check: ["If after 4 weeks weekly forms are only 49, which conclusion is right?", "You cannot yet conclude a channel is worse. The expected gain was a modest +1 form, and 49 is within normal wobble. Look at CPA per channel, and the assumption “CPA unchanged” may have been wrong. This is where statistics (C2) helps."]
		}
	},
	"ps-open": {
		vi: {
			story: "Chị Lan hỏi tiếp: «Em định làm theo trình tự nào?» Bạn dùng sáu bước giải quyết vấn đề, chạy thử trên chính câu chuyện form giảm.",
			words: [["Vấn đề", "Một khoảng cách giữa tình hình hiện tại và tình hình mong muốn, kèm một quyết định phải đưa ra."], ["Sáu bước", "Loại vấn đề, sự thật và ý kiến, khung SMART và ưu tiên, nguyên nhân, phương án và hệ quả, thực hiện và đo."]],
			problem: "Form tháng 11 là 220, tháng 12 là 180. Chị Lan muốn một việc làm cụ thể trước 31/1. Đi qua sáu bước trên tình huống này.",
			steps: [
				["1. Loại vấn đề", "Đây là vấn đề lựa chọn: «có chuyển ngân sách giữa các kênh không», không chỉ «vì sao giảm»."],
				["2. Sự thật và ý kiến", "Sự thật: 220 xuống 180, giảm 18%. Ý kiến: «quảng cáo kém». Hai thứ ghi ở hai cột."],
				["3. Mục tiêu SMART và ưu tiên", "Đến 31/1, form từ 50 lên 54 mỗi tuần (tăng 8%) với CPA không vượt 300 nghìn. Chỉ nhận việc phục vụ mục tiêu này."],
				["4. Nguyên nhân", "Tìm nguyên nhân mà bạn thay đổi được trong 4 tuần, ví dụ lỗi trang đích trên điện thoại."],
				["5. Phương án và hệ quả", "Mỗi phương án viết kèm cái được và cái mất, tính trên cùng thước đo."],
				["6. Thực hiện và đo", "Làm xong thì đếm lại form bằng đúng cách đã viết ở bước 3."]
			],
			say: "Mỗi bước trả lời một câu hỏi riêng, và bước sau dùng đầu ra của bước trước. «Form giảm» chỉ trở thành vấn đề giải được khi nó là «có chuyển ngân sách trước 31/1 không», và bước 3 cho nó một thước đo để biết khi nào xong.",
			check: ["Trong sáu bước, bước nào dễ bị bỏ nhất và vì sao quan trọng?", "Bước 6, đo lại. Nếu không đo lại bằng đúng câu đã viết thì không biết giải pháp có hiệu lực không, chỉ có cảm giác là đã làm."]
		},
		en: {
			story: "Ms. Lan asks next: “In what order will you work?” You use the six problem-solving steps and test them on the very story of falling forms.",
			words: [["Problem", "A gap between the current situation and the desired one, together with a decision that has to be made."], ["Six steps", "Problem type, facts versus opinions, SMART goal and priority, cause, options and consequences, execute and measure."]],
			problem: "Forms were 220 in November and 180 in December. Ms. Lan wants one concrete action before 31 January. Walk the six steps through this situation.",
			steps: [
				["1. Problem type", "This is a choice problem: “shift budget between channels or not”, not just “why did it drop”."],
				["2. Facts and opinions", "Fact: 220 down to 180, a drop of 18%. Opinion: “the ads are bad”. The two go in separate columns."],
				["3. SMART goal and priority", "By 31 January, forms rise from 50 to 54 a week (up 8%) with CPA no higher than 300 thousand. Only take on work that serves this goal."],
				["4. Cause", "Look for a cause you can change within 4 weeks, for example a landing-page fault on phones."],
				["5. Options and consequences", "Write each option with what it gains and costs, on the same measure."],
				["6. Execute and measure", "Once done, count forms again the exact way written in step 3."]
			],
			say: "Each step answers its own question, and the next step uses the previous output. “Forms dropped” only becomes a solvable problem when it is “shift budget before 31 January or not”, and step 3 gives it a measure so you know when you are done.",
			check: ["Of the six steps, which is easiest to skip and why does it matter?", "Step 6, measuring again. Without re-measuring with the exact sentence you wrote, you cannot tell whether the fix worked; you only have a feeling that you did something."]
		}
	},
	"ps-type": {
		vi: {
			story: "Bước 1 của sáu bước. Trong cuộc họp, ba người hỏi ba câu khác nhau về cùng chuyện form giảm. Bạn phải gọi đúng loại từng câu trước khi chọn công cụ.",
			words: [
				["Vấn đề chẩn đoán", "Câu hỏi «vì sao». Kết quả là một lời giải thích."],
				["Vấn đề lựa chọn", "Câu hỏi «chọn cái nào». Kết quả là một quyết định."],
				["Vấn đề vận hành", "Câu hỏi «làm thế nào cho đều, cho ổn định». Kết quả là một quy trình."]
			],
			problem: "Ba câu trong cuộc họp: (a) «Vì sao form tháng 12 giảm 18%?» (b) «Có chuyển 1 triệu mỗi tuần từ GDN sang Meta không?» (c) «Làm sao để form mỗi tuần không lên xuống từ 30 đến 70?». Gọi tên loại từng câu.",
			steps: [
				["Câu (a)", "Hỏi «vì sao», nên là vấn đề chẩn đoán. Đầu ra là một nguyên nhân."],
				["Câu (b)", "Hỏi «chọn hay không, chọn cái nào», nên là vấn đề lựa chọn. Đầu ra là một quyết định kèm con số so sánh."],
				["Câu (c)", "Hỏi «làm sao cho đều», nên là vấn đề vận hành. Đầu ra là một quy trình, ví dụ lịch kiểm tra hằng ngày."],
				["Chọn công cụ theo loại", "Chẩn đoán dùng chia nhỏ và so sánh. Lựa chọn dùng CPA và hệ quả. Vận hành dùng biểu đồ kiểm soát."]
			],
			say: "Chị Lan thật sự cần câu (b), vì có một hạn (31/1) và một số tiền để chia. Nếu bạn trả lời câu (a) bằng cả tuần phân tích, bạn có một nguyên nhân đẹp nhưng chưa có quyết định nào để chị bấm.",
			check: ["Bạn tìm ra nguyên nhân là «lỗi trang đích» rồi kết luận «tắt TikTok». Sai ở đâu?", "Nguyên nhân (chẩn đoán) trả lời «vì sao», không tự nói nên làm gì. Từ «lỗi trang đích» đúng ra dẫn tới «sửa trang», không phải «tắt kênh». Phải đi tiếp sang bước lựa chọn phương án."]
		},
		en: {
			story: "Step 1 of the six. In the meeting, three people ask three different questions about the same drop in forms. You must name each question's type before choosing a tool.",
			words: [
				["Diagnostic problem", "A “why” question. The result is an explanation."],
				["Choice problem", "A “which one” question. The result is a decision."],
				["Operational problem", "A “how do we keep it steady” question. The result is a process."]
			],
			problem: "Three questions in the meeting: (a) “Why did December forms drop 18%?” (b) “Should we shift 1 million a week from GDN to Meta?” (c) “How can weekly forms stop swinging between 30 and 70?”. Name each question's type.",
			steps: [
				["Question (a)", "It asks “why”, so it is a diagnostic problem. The output is a cause."],
				["Question (b)", "It asks “whether, which one”, so it is a choice problem. The output is a decision with comparison numbers."],
				["Question (c)", "It asks “how to keep it steady”, so it is an operational problem. The output is a process, for example a daily check schedule."],
				["Pick tools by type", "Diagnosis uses breaking down and comparing. Choice uses CPA and consequences. Operation uses a control chart."]
			],
			say: "Ms. Lan truly needs question (b), because there is a deadline (31 January) and money to split. If you answer (a) with a week of analysis, you hold a nice cause but no decision for her to press.",
			check: ["You find the cause is a “landing-page fault” and then conclude “switch off TikTok”. What is wrong?", "A cause (diagnosis) answers “why”; it does not by itself say what to do. “Landing-page fault” properly leads to “fix the page”, not “switch off a channel”. You must go on to the options step."]
		}
	},
	"ps-fact": {
		vi: {
			story: "Trong cuộc họp, Thảo nói: «TikTok yếu lắm». Bạn tách câu đó thành sự thật có thể đo và ý kiến cần một ngưỡng.",
			words: [
				["Sự thật", "Một phát biểu kiểm tra được trên dữ liệu đã chỉ rõ."],
				["Ý kiến", "Một đánh giá, ví dụ «yếu», «tốt». Cần một ngưỡng thì mới kiểm tra được."],
				["Tỷ lệ form", "Số form chia cho số click."]
			],
			problem: "Tuần này: GDN 900 click, 18 form. Meta 800 click, 20 form. TikTok 800 click, 12 form. Thảo nói «TikTok yếu». Biến câu đó thành sự thật có thể kiểm tra.",
			steps: [
				["Tính tỷ lệ form mỗi kênh", "GDN: 18 ÷ 900 = 2,0%. Meta: 20 ÷ 800 = 2,5%. TikTok: 12 ÷ 800 = 1,5%."],
				["Ghi sự thật ở một cột", "«Tuần này tỷ lệ form của TikTok là 1,5%, thấp hơn GDN (2,0%) và Meta (2,5%)»."],
				["Ghi ý kiến ở cột còn lại", "«TikTok yếu». Chưa kiểm tra được vì «yếu» chưa có ngưỡng."],
				["Viết ngưỡng để ý kiến thành kiểm tra được", "«Yếu» = tỷ lệ form dưới 2,0% (mức trung bình của cả ba kênh: 50 ÷ 2.500 = 2,0%). TikTok 1,5% đạt điều kiện này."]
			],
			say: "Bây giờ cả hai bên cùng nhìn một con số: TikTok thấp hơn mức trung bình 2,0%. Thảo có thể đúng, nhưng chỉ sau khi viết ngưỡng. Nếu ngưỡng là 1,0% thì kết luận ngược lại. Con số không tự bấm nút tắt kênh, đó vẫn là quyết định.",
			check: ["Với ngưỡng «yếu = dưới 2,0%», GDN có yếu không?", "Không. GDN đúng 2,0%, không dưới 2,0%. Đây là lý do phải viết rõ «dưới» hay «không trên»."]
		},
		en: {
			story: "In the meeting, Thao says: “TikTok is really weak”. You split that sentence into a measurable fact and an opinion that needs a threshold.",
			words: [
				["Fact", "A statement that can be checked against clearly named data."],
				["Opinion", "A judgement, for example “weak” or “good”. It needs a threshold before it can be checked."],
				["Form rate", "Forms divided by clicks."]
			],
			problem: "This week: GDN 900 clicks, 18 forms. Meta 800 clicks, 20 forms. TikTok 800 clicks, 12 forms. Thao says “TikTok is weak”. Turn that into something checkable.",
			steps: [
				["Compute each channel's form rate", "GDN: 18 ÷ 900 = 2.0%. Meta: 20 ÷ 800 = 2.5%. TikTok: 12 ÷ 800 = 1.5%."],
				["Put the fact in one column", "“This week TikTok's form rate is 1.5%, lower than GDN (2.0%) and Meta (2.5%)”."],
				["Put the opinion in the other column", "“TikTok is weak”. Not checkable yet because “weak” has no threshold."],
				["Write a threshold so the opinion can be checked", "“Weak” = form rate below 2.0% (the three-channel average: 50 ÷ 2,500 = 2.0%). TikTok at 1.5% meets this condition."]
			],
			say: "Now both sides look at the same number: TikTok is below the 2.0% average. Thao may be right, but only after writing the threshold. If the threshold were 1.0% the conclusion would flip. A number does not press the switch-off button by itself; that is still a decision.",
			check: ["With the threshold “weak = below 2.0%”, is GDN weak?", "No. GDN is exactly 2.0%, not below 2.0%. This is why you must say clearly “below” or “at most”."]
		}
	},
	"ps-smart": {
		vi: {
			story: "Bước 3. Bạn và Thảo chốt mục tiêu cho TikTok, kênh có tỷ lệ form thấp nhất (1,5%). Mục tiêu phải là một câu SMART.",
			words: [["SMART", "Specific (cụ thể), Measurable (đo được), Achievable (khả thi), Relevant (liên quan), Time-bound (có hạn)."]],
			problem: "Mục tiêu nháp: «Làm TikTok tốt hơn». Hiện TikTok có 12 form mỗi tuần với chi 4 triệu (CPA ≈ 333 nghìn). Viết lại thành một câu SMART và kiểm từng chữ cái.",
			steps: [
				["Specific", "Chỉ rõ đối tượng: «form từ TikTok», không phải «kênh nói chung»."],
				["Measurable", "Công thức đếm: số form có utm_source = tiktok trong 7 ngày."],
				["Achievable", "Từ 12 lên 15 form mỗi tuần (tăng 25%), nhờ sửa trang đích chứ không phải thêm tiền nhiều. Nếu chi tăng tới 4,5 triệu thì CPA = 4,5 ÷ 15 = 300 nghìn."],
				["Relevant", "Nối với quyết định của chị Lan về chuyển ngân sách, vì CPA TikTok quyết định có giữ 4 triệu hay không."],
				["Time-bound", "Có hạn cụ thể: ngày 31/1."],
				["Gộp thành một câu", "«Đến 31/1, form từ TikTok tăng từ 12 lên 15 mỗi tuần (đếm theo utm_source, 7 ngày), chi không quá 4,5 triệu mỗi tuần, tức CPA không quá 300 nghìn.»"]
			],
			say: "Câu cuối trả lời được cả năm câu hỏi: ai, đo thế nào, có khả thi không, để làm gì, đến khi nào. Nó cũng cho biết khi nào bạn thắng hay thua: 31/1 đếm lại, 15 là đạt, 13 là chưa.",
			check: ["«Tăng form TikTok sớm nhất có thể» vi phạm chữ cái nào?", "Time-bound, vì «sớm nhất» không phải một ngày. Có thể còn thiếu Measurable nếu không nói đếm form thế nào."]
		},
		en: {
			story: "Step 3. You and Thao settle the goal for TikTok, the channel with the lowest form rate (1.5%). The goal must be a SMART sentence.",
			words: [["SMART", "Specific, Measurable, Achievable, Relevant, Time-bound."]],
			problem: "Draft goal: “Make TikTok better”. TikTok currently gives 12 forms a week on 4 million spend (CPA ≈ 333 thousand). Rewrite it as a SMART sentence and check each letter.",
			steps: [
				["Specific", "Name the subject: “forms from TikTok”, not “the channel in general”."],
				["Measurable", "The counting formula: number of forms with utm_source = tiktok in 7 days."],
				["Achievable", "From 12 to 15 forms a week (up 25%), by fixing the landing page rather than adding much money. If spend rises to 4.5 million, CPA = 4.5 ÷ 15 = 300 thousand."],
				["Relevant", "Tied to Ms. Lan's budget-shift decision, because TikTok's CPA decides whether to keep the 4 million."],
				["Time-bound", "A concrete deadline: 31 January."],
				["Combine into one sentence", "“By 31 January, forms from TikTok rise from 12 to 15 a week (counted by utm_source, 7 days), spend no more than 4.5 million a week, i.e. CPA no higher than 300 thousand.”"]
			],
			say: "The final sentence answers all five questions: who, measured how, feasible or not, for what, by when. It also tells you when you win or lose: on 31 January count again; 15 is a pass, 13 is not yet.",
			check: ["“Raise TikTok forms as soon as possible” breaks which letter?", "Time-bound, because “as soon as possible” is not a date. It may also lack Measurable if it does not say how forms are counted."]
		}
	},
	"ps-rank": {
		vi: {
			story: "Có ba việc cùng lúc xin nguồn lực. Hạn vẫn là 31/1. Bạn và Thảo phải bỏ bớt chứ không thể làm hết.",
			words: [["Người-tuần", "Công của một người làm trong một tuần. Hai người làm 2 tuần là 4 người-tuần."], ["Ưu tiên", "Chọn việc làm trước và ghi rõ việc để sau. Không phải đánh số cho mọi thứ."]],
			problem: "Còn 4 tuần đến 31/1, chỉ có bạn và Thảo, tổng nguồn lực 4 người-tuần cho việc mới. Ba việc: (1) sửa lỗi trang đích trên điện thoại: 0,4 người-tuần; (2) chạy chiến dịch TikTok mới: 3 người-tuần; (3) làm lại logo: 3 người-tuần. Chọn việc nào?",
			steps: [
				["Cộng nhu cầu", "0,4 + 3 + 3 = 6,4 người-tuần, vượt nguồn lực 4."],
				["Xếp theo liên quan tới mục tiêu SMART", "Việc 1 và 2 phục vụ form TikTok từ 12 lên 15. Việc 3 (logo) không liên quan tới mục tiêu này."],
				["Chọn tổ hợp vừa nguồn lực", "Việc 1 + 2: 0,4 + 3 = 3,4 người-tuần, còn dư 0,6."],
				["Ghi việc để sau", "Việc 3 (logo): «để sau 31/1» ghi thành một dòng trong danh sách, kèm lý do. Đây là một quyết định chứ không phải bị quên."]
			],
			say: "Ba việc đều có giá trị, nhưng chỉ có 4 người-tuần. Chọn việc 1 và 2 vì chúng nối với mục tiêu; việc 3 đúng nhưng chưa tới lượt. Nếu cố làm cả ba thì không việc nào xong trước 31/1.",
			check: ["Nếu việc sửa trang đích hóa ra mất 1,5 người-tuần thay vì 0,4, kết quả chọn có đổi không?", "Việc 1 + 2 thành 1,5 + 3 = 4,5, vượt 4. Phải thu hẹp: ví dụ làm chiến dịch TikTok nhỏ hơn (2,5 người-tuần), hoặc xin thêm nguồn lực."]
		},
		en: {
			story: "Three jobs ask for resources at the same time. The deadline is still 31 January. You and Thao must drop some work rather than do it all.",
			words: [["Person-week", "One person's work for one week. Two people for 2 weeks is 4 person-weeks."], ["Priority", "Choose what to do first and write down what waits. It is not numbering everything."]],
			problem: "There are 4 weeks until 31 January, with only you and Thao, a total of 4 person-weeks for new work. Three jobs: (1) fix the landing-page fault on phones: 0.4 person-weeks; (2) run a new TikTok campaign: 3 person-weeks; (3) redo the logo: 3 person-weeks. Which do you pick?",
			steps: [
				["Add up the demand", "0.4 + 3 + 3 = 6.4 person-weeks, above the 4 available."],
				["Rank by link to the SMART goal", "Jobs 1 and 2 serve TikTok forms going from 12 to 15. Job 3 (the logo) is unrelated to this goal."],
				["Pick a combination that fits", "Jobs 1 + 2: 0.4 + 3 = 3.4 person-weeks, with 0.6 left over."],
				["Record what waits", "Job 3 (logo): “after 31 January”, written as a line in the list with the reason. This is a decision, not forgetting."]
			],
			say: "All three jobs have value, but there are only 4 person-weeks. Pick jobs 1 and 2 because they tie to the goal; job 3 is right but not yet its turn. If you try all three, none finishes before 31 January.",
			check: ["If the landing-page fix turns out to take 1.5 person-weeks instead of 0.4, does the choice change?", "Jobs 1 + 2 become 1.5 + 3 = 4.5, over 4. You must shrink something: for example run a smaller TikTok campaign (2.5 person-weeks), or ask for more resources."]
		}
	},
	"ps-cause": {
		vi: {
			story: "Bước 4. TikTok chỉ có tỷ lệ form 1,5%. Có hai lời giải thích đang được nói. Bạn tách cái thay đổi được trong 4 tuần khỏi cái chỉ là bối cảnh.",
			words: [["Nguyên nhân thay đổi được", "Một điều mà người trong hạn này làm được, và nếu nó đúng thì con số sẽ nhích."], ["Bối cảnh", "Điều có thật nhưng không chạm vào được trong hạn, ví dụ thói quen người dùng."]],
			problem: "TikTok: 800 click mỗi tuần, tỷ lệ form 1,5%. Hai giả thuyết: (A) «người dùng chán mạng xã hội»; (B) «trang đích bị lỗi nút gửi form trên điện thoại». 85% click TikTok đến từ điện thoại. Cái nào đáng xử lý trước?",
			steps: [
				["Liệt kê giả thuyết", "A: bối cảnh. B: một lỗi cụ thể."],
				["Hỏi: có thay đổi được trong 4 tuần không", "A: không. Không ai đổi được thói quen người dùng trong 4 tuần. B: có, sửa nút gửi mất khoảng 2 ngày."],
				["Đo xem B có đáng kể không", "85% của 800 click = 680 click đến từ điện thoại. Nếu lỗi chặn một phần gửi form trên điện thoại thì tỷ lệ chung bị kéo xuống."],
				["Tính tác động nếu B đúng", "Nếu tỷ lệ form về mức trung bình 2,0%: 800 × 2,0% = 16 form, so với 12 hiện tại (+4)."]
			],
			say: "Giả thuyết A có thể đúng nhưng không dẫn tới việc nào làm được. Giả thuyết B có thể kiểm tra, có thể sửa và nếu đúng thì mang về thêm khoảng 4 form mỗi tuần. Chọn nguyên nhân B để làm tiếp, không phải vì chắc chắn đúng mà vì làm được và đo được.",
			check: ["«Do nhân viên Thảo làm chưa tốt» có phải một nguyên nhân tốt để xử lý không?", "Không. Nó dừng ở «do con người», không chỉ ra một thay đổi cụ thể nào làm được. Phải hỏi tiếp: Thảo làm gì khác, ở khâu nào, và có sửa được trong hạn không."]
		},
		en: {
			story: "Step 4. TikTok's form rate is only 1.5%. Two explanations are being said aloud. You separate what can change within 4 weeks from what is just context.",
			words: [["Changeable cause", "Something people can do within this deadline, and if it is right the number will move."], ["Context", "Something true but out of reach within the deadline, for example user habits."]],
			problem: "TikTok: 800 clicks a week, form rate 1.5%. Two hypotheses: (A) “users are tired of social media”; (B) “the landing page has a broken submit button on phones”. 85% of TikTok clicks come from phones. Which deserves attention first?",
			steps: [
				["List the hypotheses", "A: context. B: a specific fault."],
				["Ask: can it change within 4 weeks", "A: no. Nobody can change user habits in 4 weeks. B: yes, fixing the submit button takes about 2 days."],
				["Check whether B is significant", "85% of 800 clicks = 680 clicks come from phones. If the fault blocks part of form submissions on phones, the overall rate is dragged down."],
				["Estimate the effect if B is right", "If the form rate returns to the 2.0% average: 800 × 2.0% = 16 forms, versus 12 today (+4)."]
			],
			say: "Hypothesis A may be right but leads to no job you can do. Hypothesis B can be checked, can be fixed and, if right, brings about 4 more forms a week. Pick cause B to continue, not because it is certainly right but because it is doable and measurable.",
			check: ["Is “Thao did not do well enough” a good cause to act on?", "No. It stops at “because of a person” and points to no specific change that can be made. You must ask more: what did Thao do differently, at which step, and can it be fixed within the deadline?"]
		}
	},
	"ps-opt": {
		vi: {
			story: "Bước 5. Đã chọn nguyên nhân B (lỗi trang đích trên điện thoại). Bạn đặt ba phương án cạnh nhau, mỗi cái viết kèm hệ quả, đo bằng cùng một thước: form TikTok mỗi tuần vào 31/1.",
			words: [["Hệ quả", "Cái được và cái mất của một phương án, kể cả cái mất khi chọn nhầm nguyên nhân."], ["Thước đo chung", "Một con số duy nhất dùng để so mọi phương án. Ở đây là số form TikTok mỗi tuần vào 31/1."]],
			problem: "Hạn còn 4 tuần, form TikTok hiện 12 mỗi tuần. Phương án X: sửa lỗi nút gửi, mất 2 ngày của một người; nếu đúng nguyên nhân, form lên 16. Phương án Y: làm trang đích mới, mất 3 tuần thiết kế và 2 tuần kiểm thử. Phương án Z: không làm gì. So sánh ba phương án.",
			steps: [
				["Viết hệ quả của X", "Mất 2 ngày. Nếu nguyên nhân đúng: 12 lên 16 (+4). Nếu sai: giữ 12, mất 2 ngày."],
				["Viết hệ quả của Y", "3 + 2 = 5 tuần, vượt hạn 4 tuần. Không kịp 31/1 nên số form vào 31/1 vẫn là 12."],
				["Viết hệ quả của Z", "Không tốn gì. Form giữ 12."],
				["So sánh trên cùng thước đo", "Form TikTok vào 31/1: X = 16 hoặc 12, Y = 12, Z = 12."],
				["Chọn", "X: tệ nhất cũng bằng Z (chỉ mất 2 ngày) và tốt nhất tăng 4 form. Y trễ hạn."]
			],
			say: "Viết hệ quả bằng con số làm phương án «đẹp nhưng trễ» (Y) lộ ra ngay. Phương án X có rủi ro rất nhỏ (2 ngày) so với lợi ích (+4 form mỗi tuần), nên chọn. Không thêm thước đo mới ở bước này để phương án mình thích thắng.",
			check: ["Nếu ai đó thêm thước «trang đích trông đẹp hơn» để ủng hộ Y, vì sao nên từ chối?", "Thước đó không có trong câu SMART đã chốt. Thêm thước ở bước này chỉ để phương án yêu thích thắng. So sánh phải dùng đúng thước đã viết: form TikTok mỗi tuần vào 31/1."]
		},
		en: {
			story: "Step 5. Cause B (the landing-page fault on phones) is chosen. You put three options side by side, each written with its consequences, measured by one yardstick: TikTok forms per week on 31 January.",
			words: [["Consequence", "The gain and the cost of an option, including the cost of choosing the wrong cause."], ["Common measure", "One single number used to compare every option. Here, TikTok forms per week on 31 January."]],
			problem: "There are 4 weeks left and TikTok forms are 12 a week. Option X: fix the submit button, 2 days of one person's time; if it is the right cause, forms go to 16. Option Y: build a new landing page, 3 weeks of design and 2 weeks of testing. Option Z: do nothing. Compare the three options.",
			steps: [
				["Write X's consequences", "Costs 2 days. If the cause is right: 12 to 16 (+4). If wrong: stays 12, 2 days lost."],
				["Write Y's consequences", "3 + 2 = 5 weeks, past the 4-week deadline. It will not make 31 January, so forms on 31 January are still 12."],
				["Write Z's consequences", "Costs nothing. Forms stay at 12."],
				["Compare on the same measure", "TikTok forms on 31 January: X = 16 or 12, Y = 12, Z = 12."],
				["Choose", "X: even the worst case equals Z (only 2 days lost) and the best case adds 4 forms. Y misses the deadline."]
			],
			say: "Writing consequences as numbers instantly exposes the “nice but late” option (Y). Option X has a tiny risk (2 days) against its benefit (+4 forms a week), so choose it. Do not add a new measure at this step just so your favourite option wins.",
			check: ["If someone adds the measure “the landing page looks nicer” to favour Y, why should you refuse?", "That measure is not in the SMART sentence already agreed. Adding a measure at this step only serves to let a favourite win. The comparison must use the written measure: TikTok forms per week on 31 January."]
		}
	},
	"ps-do": {
		vi: {
			story: "Bước 6. Nút gửi form trên điện thoại đã được sửa ngày 15/1. Đến 31/1 bạn đo lại, bằng đúng cách đếm đã viết ở câu SMART.",
			words: [["Đo lại", "Đếm lại cùng một con số bằng cùng một công thức sau khi thay đổi đã xảy ra."], ["Cách đếm", "Định nghĩa của con số: đếm gì, trong bao lâu, nguồn nào."]],
			problem: "Trước: 12 form TikTok mỗi tuần (đếm theo utm_source = tiktok, 7 ngày). Sau khi sửa lỗi, tuần kết thúc 31/1 đếm được 15 form TikTok theo đúng cách đó. Ngoài ra Thảo còn nhận thêm 2 cuộc gọi đặt hẹn mà khách nói thấy quảng cáo TikTok. Kết luận thế nào?",
			steps: [
				["Đọc kết quả theo cách đếm đã hẹn", "15 form so với 12 trước đó: tăng 3, tức 25%. Mục tiêu SMART là 15, nên đạt."],
				["Không đổi cách đếm giữa chừng", "Hai cuộc gọi không đi qua form và không có utm_source, nên không cộng vào. Nếu cộng, con số thành 17 và không so được với mốc 12."],
				["Ghi lại cuộc gọi như thông tin phụ", "Ghi «có thể còn thêm kênh điện thoại», nhưng đo bằng cách riêng, không trộn."],
				["Kiểm tra CPA", "Chi vẫn 4 triệu: 4 triệu ÷ 15 form ≈ 267 nghìn mỗi form, thấp hơn 300 nghìn của mục tiêu."]
			],
			say: "Bạn có thể kết luận có căn cứ: form TikTok tăng từ 12 lên 15 sau khi sửa lỗi, đạt mục tiêu, CPA giảm còn 267 nghìn. Chữ «có căn cứ» có được nhờ giữ nguyên cách đếm. Dù kết quả là 17 hay 11 thì vẫn phải báo bằng đúng cách đếm đã hẹn.",
			check: ["Nếu bạn đếm cả hai cuộc gọi, con số là 17. Tại sao vẫn không nên làm vậy?", "Vì mốc trước (12) không có cuộc gọi, nên so 17 với 12 là so hai thứ khác nhau và thổi phồng hiệu quả. Cách đếm phải giữ nguyên giữa trước và sau."]
		},
		en: {
			story: "Step 6. The phone submit button was fixed on 15 January. On 31 January you re-measure, using exactly the counting method written in the SMART sentence.",
			words: [["Re-measure", "Count the same number again with the same formula after the change has happened."], ["Counting method", "The definition of the number: what is counted, over how long, from which source."]],
			problem: "Before: 12 TikTok forms a week (counted by utm_source = tiktok, 7 days). After the fix, the week ending 31 January counts 15 TikTok forms by that same method. Thao also received 2 phone bookings from people who said they saw the TikTok ad. What do you conclude?",
			steps: [
				["Read the result by the agreed method", "15 forms against 12 before: up 3, i.e. 25%. The SMART goal was 15, so it is met."],
				["Do not change the counting method midway", "The two calls did not go through the form and have no utm_source, so they are not added. Adding them gives 17, which cannot be compared with the baseline of 12."],
				["Record the calls as side information", "Note “there may be a phone channel too”, but measure it separately, not mixed in."],
				["Check CPA", "Spend is still 4 million: 4 million ÷ 15 forms ≈ 267 thousand per form, below the goal's 300 thousand."]
			],
			say: "You can conclude with grounds: TikTok forms rose from 12 to 15 after the fix, the goal is met, and CPA fell to 267 thousand. The words “with grounds” are earned by keeping the counting method unchanged. Whether the result is 17 or 11, report it by the agreed counting method.",
			check: ["If you counted both calls the number would be 17. Why still not do that?", "Because the earlier baseline (12) has no calls, so comparing 17 with 12 compares two different things and overstates the effect. The counting method must stay the same before and after."]
		}
	},
	"xl-cell": {
		vi: {
			story: "Tháng 1, bạn mở file Excel đầu tiên. Cột «Form tháng 11» của ba chi nhánh trông ổn, nhưng tổng ra thiếu so với con số 220 chị Lan nói.",
			words: [["Kiểu ô", "Mỗi ô là số, chữ hoặc công thức. Kiểu quyết định phép toán nào dùng được."], ["Số lưu dạng chữ", "Một số bị lưu như chữ (thường do nhập từ file khác), Excel không cộng nó."]],
			problem: "Form tháng 11: Quận 1 là 80, Quận 3 là «70» (lưu dạng chữ, canh trái), Thủ Đức là 70. Dùng =SUM(B2:B4). Tổng phải là 220, Excel cho kết quả nào và vì sao?",
			steps: [
				["Nhìn canh lề", "80 và 70 (Thủ Đức) canh phải, «70» của Quận 3 canh trái. Canh trái là dấu hiệu của chữ."],
				["Kiểm tra kiểu bằng công thức", "=ISTEXT(B3) cho TRUE, nghĩa là Quận 3 là chữ."],
				["Xem kết quả SUM", "SUM bỏ qua ô chữ: 80 + 70 = 150, không phải 220. Thiếu đúng 70."],
				["Đổi chữ thành số", "=VALUE(B3) cho 70, hoặc nhân với 1. Sau khi đổi: 80 + 70 + 70 = 220."]
			],
			say: "Excel không báo lỗi gì. Con số 150 vẫn trông hợp lý, và nếu không biết dấu hiệu canh lề bạn đã báo chị Lan form tháng 11 là 150. Kiểm tra kiểu ô là bước đầu tiên trước khi cộng.",
			check: ["Nếu ô Quận 3 chứa chữ «bảy mươi» thì =VALUE cho kết quả gì?", "Lỗi #VALUE!, vì Excel không đổi chữ «bảy mươi» thành số. Cần nhập lại thành 70."]
		},
		en: {
			story: "In January you open your first Excel file. The “November forms” column for the three branches looks fine, but the total comes up short against the 220 Ms. Lan quoted.",
			words: [["Cell type", "Each cell is a number, text or formula. The type decides which operations work."], ["Number stored as text", "A number saved as text (often from importing another file); Excel does not add it."]],
			problem: "November forms: District 1 is 80, District 3 is “70” (stored as text, left-aligned), Thu Duc is 70. You use =SUM(B2:B4). The total should be 220; what does Excel return and why?",
			steps: [
				["Look at the alignment", "80 and 70 (Thu Duc) are right-aligned, District 3's “70” is left-aligned. Left alignment signals text."],
				["Check the type with a formula", "=ISTEXT(B3) returns TRUE, so District 3 is text."],
				["See what SUM does", "SUM skips text cells: 80 + 70 = 150, not 220. Exactly 70 missing."],
				["Convert text to number", "=VALUE(B3) gives 70, or multiply by 1. After converting: 80 + 70 + 70 = 220."]
			],
			say: "Excel raises no error. The 150 still looks reasonable, and without knowing the alignment clue you would have told Ms. Lan November forms were 150. Checking cell types is the first step before adding.",
			check: ["If the District 3 cell holds the word “seventy”, what does =VALUE give?", "A #VALUE! error, because Excel cannot turn the word “seventy” into a number. You must retype it as 70."]
		}
	},
	"xl-lock": {
		vi: {
			story: "Số tổng form tháng 11 đã đúng (220). Giờ bạn tính mỗi chi nhánh chiếm bao nhiêu phần trăm bằng một công thức kéo xuống được.",
			words: [["Địa chỉ tương đối", "B2 đổi theo ô khi kéo công thức: kéo xuống một dòng thì B2 thành B3."], ["Địa chỉ tuyệt đối $B$5", "Dấu $ giữ nguyên cả cột và hàng khi kéo."]],
			problem: "Ô B2, B3, B4 là form Quận 1 (80), Quận 3 (70), Thủ Đức (70). Ô B5 là tổng 220. Cột C cần tỷ trọng mỗi chi nhánh = form ÷ tổng. Viết công thức ở C2 rồi kéo xuống C4.",
			steps: [
				["Viết công thức thử ở C2 không có $", "=B2/B5. C2 = 80 ÷ 220 ≈ 36,4%."],
				["Kéo xuống C3 và xem điều gì xảy ra", "C3 trở thành =B3/B6. B6 trống, nên ra lỗi #DIV/0! (chia cho 0)."],
				["Khóa ô tổng bằng $", "=B2/$B$5. Dù kéo xuống thì mẫu số luôn là B5."],
				["Kết quả sau khi kéo", "C2 = 80/220 ≈ 36,4%. C3 = 70/220 ≈ 31,8%. C4 = 70/220 ≈ 31,8%. Cộng lại 100%."]
			],
			say: "Dấu $ nói với Excel: «ô này đứng yên khi kéo». Tử số (B2) cần đổi theo từng dòng, mẫu số ($B$5) cần đứng yên. Quên $ thì dòng đầu đúng còn các dòng sau sai, rất khó thấy nếu chỉ nhìn dòng đầu.",
			check: ["Nếu viết =B2/$B5 (chỉ khóa cột) rồi kéo xuống, C3 là gì?", "=B3/$B6, vì hàng không bị khóa nên B5 trượt thành B6. Vẫn lỗi. Cần khóa cả hàng ($B$5)."]
		},
		en: {
			story: "November's total forms are right (220). Now you compute each branch's share with one formula you can drag down.",
			words: [["Relative reference", "B2 moves with the cell when you drag the formula: one row down turns B2 into B3."], ["Absolute reference $B$5", "The $ signs keep both column and row fixed when dragging."]],
			problem: "Cells B2, B3, B4 are forms for District 1 (80), District 3 (70), Thu Duc (70). Cell B5 is the total 220. Column C needs each branch's share = forms ÷ total. Write the formula in C2 then drag down to C4.",
			steps: [
				["Try a formula in C2 without $", "=B2/B5. C2 = 80 ÷ 220 ≈ 36.4%."],
				["Drag to C3 and see what happens", "C3 becomes =B3/B6. B6 is blank, so you get #DIV/0! (division by zero)."],
				["Lock the total with $", "=B2/$B$5. However far you drag, the denominator stays B5."],
				["Result after dragging", "C2 = 80/220 ≈ 36.4%. C3 = 70/220 ≈ 31.8%. C4 = 70/220 ≈ 31.8%. They add up to 100%."]
			],
			say: "The $ tells Excel: “this cell stands still when dragged”. The numerator (B2) must change with each row, the denominator ($B$5) must stay put. Forget the $ and the first row is right while the later rows are wrong, which is hard to notice if you only look at the first row.",
			check: ["If you write =B2/$B5 (locking only the column) and drag down, what is C3?", "=B3/$B6, because the row is not locked so B5 slides to B6. It still errors. You need to lock the row too ($B$5)."]
		}
	},
	"xl-if": {
		vi: {
			story: "Tính CPA từng kênh cho 12 tuần. Chi phí TikTok tuần 5 vẫn đang trống, bạn cần công thức không bị gãy khi gặp ô đó.",
			words: [["IF", "IF(điều kiện, giá trị nếu đúng, giá trị nếu sai). Chọn một trong hai nhánh."], ["Ô trống", "Ô chưa có dữ liệu. Không giống số 0 và không giống FALSE."]],
			problem: "Cột C là chi phí TikTok (triệu), cột D là form. Tuần 4: C = 4, D = 12. Tuần 5: C trống, D = 12. Viết công thức CPA ở E cho cả hai tuần mà không sinh ra con số sai.",
			steps: [
				["Thử công thức đơn giản", "=C4/D4 = 4 ÷ 12 ≈ 0,333 (333 nghìn). Ổn. Ở tuần 5, =C5/D5 coi ô trống là 0 và cho 0, tức CPA bằng 0, một con số sai."],
				["Xử lý trường hợp đặc biệt trước", "Kiểm tra ô trống đầu tiên: IF(C5=\"\", ...) vì trống phải có nhánh riêng."],
				["Viết đủ công thức", "=IF(C5=\"\", \"chưa có\", C5/D5)."],
				["Kết quả", "Tuần 4: 0,333. Tuần 5: chữ «chưa có». Các hàm tính trung bình sau đó tự bỏ qua chữ."]
			],
			say: "Ô trống không phải là «sai» và cũng không phải số 0. Thứ tự rất quan trọng: nhánh ô trống phải đứng trước nhánh tính toán. Nhờ vậy tuần 5 hiện «chưa có» thay vì một CPA bằng 0 trông rất đẹp mà sai.",
			check: ["Nếu bỏ nhánh ô trống và để Excel tính C5/D5, tuần 5 sẽ làm CPA trung bình thế nào?", "Kéo xuống: CPA 0 được đưa vào trung bình, làm trung bình CPA thấp đi sai, khiến TikTok trông rẻ hơn thực tế."]
		},
		en: {
			story: "You compute CPA per channel for 12 weeks. TikTok's week-5 spend is still blank; you need a formula that does not break on that cell.",
			words: [["IF", "IF(condition, value if true, value if false). It picks one of two branches."], ["Blank cell", "A cell with no data. Not the same as 0 and not the same as FALSE."]],
			problem: "Column C is TikTok spend (million), column D is forms. Week 4: C = 4, D = 12. Week 5: C blank, D = 12. Write the CPA formula in column E for both weeks without producing a wrong number.",
			steps: [
				["Try the simple formula", "=C4/D4 = 4 ÷ 12 ≈ 0.333 (333 thousand). Fine. In week 5, =C5/D5 treats the blank as 0 and returns 0, a CPA of zero, which is wrong."],
				["Handle the special case first", "Test for blank first: IF(C5=\"\", ...) because blank needs its own branch."],
				["Write the full formula", "=IF(C5=\"\", \"not yet\", C5/D5)."],
				["Result", "Week 4: 0.333. Week 5: the text “not yet”. Average functions then skip the text on their own."]
			],
			say: "A blank is not “false” and not the number 0. Order matters: the blank branch must come before the calculation branch. That way week 5 shows “not yet” instead of a CPA of zero that looks great but is wrong.",
			check: ["If you drop the blank branch and let Excel compute C5/D5, how does week 5 affect the average CPA?", "The CPA of 0 goes into the average, pulling it down wrongly and making TikTok look cheaper than it really is."]
		}
	},
	"xl-keep": {
		vi: {
			story: "Thảo muốn xem riêng kênh GDN. Bạn lọc trong Excel nhưng phát hiện tổng cuối cột không đổi. Đây là chỗ lọc và xóa khác nhau.",
			words: [["Lọc (filter)", "Ẩn các dòng không khớp. Dòng vẫn còn trong file."], ["SUMIFS", "Tổng có điều kiện: cộng những dòng thỏa điều kiện bạn viết."]],
			problem: "Bảng 6 dòng (3 tuần đầu): GDN form 18, 17, 19; Meta form 20, 21, 20. Bạn lọc cột Kênh = GDN. Ô tổng =SUM(D2:D7) hiển thị bao nhiêu, và làm sao có tổng đúng của GDN?",
			steps: [
				["Lọc Kênh = GDN", "Excel ẩn 3 dòng Meta. Màn hình chỉ còn 3 dòng GDN."],
				["Xem =SUM(D2:D7)", "SUM vẫn cộng cả dòng bị ẩn: 18 + 17 + 19 + 20 + 21 + 20 = 115, không phải tổng GDN."],
				["Viết điều kiện thay vì dựa vào lọc", "=SUMIFS(D2:D7, B2:B7, \"GDN\") chỉ cộng dòng có kênh GDN."],
				["Kết quả", "18 + 17 + 19 = 54. Con số này không phụ thuộc bạn đang lọc hay không."]
			],
			say: "Lọc chỉ che mắt, không đổi phép tính. Muốn loại dòng khỏi phép đếm thì viết điều kiện, đừng xóa dòng: xóa là mất dữ liệu, còn lọc thì không đổi kết quả của SUM. Với SUMIFS, con số 54 luôn đúng cho dù ai đó đổi bộ lọc.",
			check: ["Nếu bạn xóa 3 dòng Meta thay vì lọc, rồi sau đó cần tổng Meta, chuyện gì xảy ra?", "Không tính được nữa vì dữ liệu Meta đã mất. Lọc hoặc SUMIFS giữ nguyên dòng nên bạn vẫn tính được cả Meta (20 + 21 + 20 = 61)."]
		},
		en: {
			story: "Thao wants to look at GDN alone. You filter in Excel but notice the column total does not change. This is where filtering and deleting differ.",
			words: [["Filter", "Hides rows that do not match. The rows stay in the file."], ["SUMIFS", "A conditional sum: it adds the rows that satisfy the condition you write."]],
			problem: "A table of 6 rows (first 3 weeks): GDN forms 18, 17, 19; Meta forms 20, 21, 20. You filter Channel = GDN. What does the total cell =SUM(D2:D7) show, and how do you get GDN's correct total?",
			steps: [
				["Filter Channel = GDN", "Excel hides the 3 Meta rows. The screen shows just 3 GDN rows."],
				["Look at =SUM(D2:D7)", "SUM still adds hidden rows: 18 + 17 + 19 + 20 + 21 + 20 = 115, not the GDN total."],
				["Write a condition instead of relying on the filter", "=SUMIFS(D2:D7, B2:B7, \"GDN\") adds only rows whose channel is GDN."],
				["Result", "18 + 17 + 19 = 54. This number does not depend on whether you are filtering."]
			],
			say: "A filter only covers your eyes; it does not change the calculation. To leave rows out of a count, write a condition; do not delete rows: deleting loses data, while filtering does not change SUM's result. With SUMIFS, 54 is right no matter who changes the filter.",
			check: ["If you deleted the 3 Meta rows instead of filtering, and later needed Meta's total, what happens?", "You can no longer compute it because the Meta data is gone. Filtering or SUMIFS keeps the rows so you can still compute Meta too (20 + 21 + 20 = 61)."]
		}
	},
	"xl-chart": {
		vi: {
			story: "Chị Lan muốn xem hình, không muốn xem bảng. Bạn có hai câu hỏi cần hai loại biểu đồ khác nhau.",
			words: [["Biểu đồ cột", "So sánh các nhóm rời nhau (ví dụ ba kênh)."], ["Biểu đồ đường", "Theo dõi một con số qua thời gian."]],
			problem: "Hai câu hỏi: (1) «Tuần này kênh nào mang nhiều form nhất?» Dữ liệu: GDN 18, Meta 20, TikTok 12. (2) «Form tổng thay đổi thế nào qua 6 tuần?» Dữ liệu: 48, 51, 50, 47, 53, 50. Chọn biểu đồ cho từng câu.",
			steps: [
				["Câu (1): so sánh ba nhóm rời nhau", "Dùng biểu đồ cột. Ba cột 18, 20, 12. Cột Meta cao nhất, đọc ra ngay."],
				["Câu (2): theo dõi qua thời gian", "Dùng biểu đồ đường: trục ngang là tuần 1 đến 6, trục dọc là form tổng."],
				["Tính trung bình để đối chiếu", "(48 + 51 + 50 + 47 + 53 + 50) ÷ 6 = 299 ÷ 6 ≈ 49,8. Đường dao động quanh 50, không dốc xuống."],
				["Đọc kết luận", "Câu (1): Meta mang nhiều nhất. Câu (2): 6 tuần gần đây không giảm, quanh 50."]
			],
			say: "Chọn biểu đồ theo câu hỏi, không theo hình đẹp. Cột cho «ai hơn ai», đường cho «đang đi lên hay xuống». Nếu vẽ ba kênh bằng đường nối từng kênh, người xem tưởng có xu hướng giữa các kênh, mà thực ra không có thứ tự nào.",
			check: ["Nếu bạn vẽ 6 tuần bằng biểu đồ cột thì có sai không?", "Không sai hẳn nhưng khó thấy xu hướng bằng đường nối các điểm. Đường làm mắt đi theo thời gian, cột làm mắt so từng cột riêng lẻ."]
		},
		en: {
			story: "Ms. Lan wants to see pictures, not tables. You have two questions that need two different chart types.",
			words: [["Bar chart", "Compares separate groups (for example three channels)."], ["Line chart", "Tracks one number over time."]],
			problem: "Two questions: (1) “Which channel brought the most forms this week?” Data: GDN 18, Meta 20, TikTok 12. (2) “How do total forms change over 6 weeks?” Data: 48, 51, 50, 47, 53, 50. Choose a chart for each.",
			steps: [
				["Question (1): compare three separate groups", "Use a bar chart. Three bars 18, 20, 12. Meta's bar is tallest, readable at once."],
				["Question (2): track over time", "Use a line chart: weeks 1 to 6 on the horizontal axis, total forms on the vertical."],
				["Compute the average to check", "(48 + 51 + 50 + 47 + 53 + 50) ÷ 6 = 299 ÷ 6 ≈ 49.8. The line wobbles around 50 and does not slope down."],
				["Read the conclusion", "Question (1): Meta brought the most. Question (2): the last 6 weeks did not drop, hovering around 50."]
			],
			say: "Choose the chart by the question, not by what looks pretty. Bars for “who beats whom”, lines for “going up or down”. If you drew the three channels as a line joining them, viewers would imagine a trend between channels, when there is no order at all.",
			check: ["If you drew the 6 weeks as a bar chart, would that be wrong?", "Not strictly wrong but harder to see a trend than with a line joining the points. A line leads the eye through time; bars make the eye compare each bar alone."]
		}
	},
	"xl-pivot": {
		vi: {
			story: "File 2 tuần có 6 dòng (mỗi dòng là một kênh trong một tuần). Chị Lan muốn tổng form theo kênh. Bạn dùng PivotTable thay vì cộng tay.",
			words: [["PivotTable", "Công cụ gom các dòng theo một cột rồi tính tổng, đếm hoặc trung bình."], ["Một dòng là gì", "Phải xác định một dòng trong bảng gốc đại diện cho cái gì trước khi kéo cột vào pivot."]],
			problem: "Bảng gốc: Tuần 1: GDN 18, Meta 20, TikTok 12. Tuần 2: GDN 17, Meta 21, TikTok 12. Mỗi dòng là một kênh trong một tuần. Tạo pivot: hàng = Kênh, giá trị = tổng Form.",
			steps: [
				["Xác định một dòng", "Một dòng = (kênh, tuần). Có 6 dòng cho 3 kênh × 2 tuần."],
				["Kéo Kênh vào Hàng", "Pivot tạo 3 hàng: GDN, Meta, TikTok."],
				["Kéo Form vào Giá trị (Tổng)", "GDN: 18 + 17 = 35. Meta: 20 + 21 = 41. TikTok: 12 + 12 = 24."],
				["Kiểm tra tổng", "35 + 41 + 24 = 100 form, bằng 50 × 2 tuần. Khớp với tổng gốc nên pivot đúng."]
			],
			say: "Pivot không tạo ra khách hàng hay form mới, nó chỉ gom lại những dòng đã có. Vì vậy phải biết một dòng gốc là gì: nếu một dòng là một lượt form thì phép đếm khác với khi một dòng là tổng của cả tuần.",
			check: ["Nếu kéo Form vào Giá trị nhưng chọn «Đếm» thay vì «Tổng», GDN hiện số mấy?", "2, vì có 2 dòng GDN. «Đếm» đếm số dòng, không cộng giá trị form. Phải chọn Tổng."]
		},
		en: {
			story: "The 2-week file has 6 rows (each row is one channel in one week). Ms. Lan wants total forms by channel. You use a PivotTable instead of adding by hand.",
			words: [["PivotTable", "A tool that groups rows by a column and then sums, counts or averages."], ["What one row is", "You must decide what one row in the source table represents before dragging columns into the pivot."]],
			problem: "Source table: Week 1: GDN 18, Meta 20, TikTok 12. Week 2: GDN 17, Meta 21, TikTok 12. Each row is one channel in one week. Create a pivot: rows = Channel, values = sum of Forms.",
			steps: [
				["Decide what one row is", "One row = (channel, week). There are 6 rows for 3 channels × 2 weeks."],
				["Drag Channel into Rows", "The pivot creates 3 rows: GDN, Meta, TikTok."],
				["Drag Forms into Values (Sum)", "GDN: 18 + 17 = 35. Meta: 20 + 21 = 41. TikTok: 12 + 12 = 24."],
				["Check the total", "35 + 41 + 24 = 100 forms, equal to 50 × 2 weeks. It matches the source total, so the pivot is right."]
			],
			say: "A pivot does not create new customers or forms; it only regroups rows that exist. That is why you must know what a source row is: if one row is one form submission the count differs from when one row is a whole week's total.",
			check: ["If you drag Forms into Values but choose “Count” instead of “Sum”, what does GDN show?", "2, because there are 2 GDN rows. “Count” counts rows and does not add the form values. You must choose Sum."]
		}
	},
	"xl-look": {
		vi: {
			story: "Tháng 1 sắp kết thúc. Thảo gửi bảng giảm giá theo mã chiến dịch. Bạn tra mã của từng form để biết mức giảm, và gặp bẫy tìm gần đúng.",
			words: [
				["VLOOKUP", "Tra một giá trị ở cột đầu của một bảng rồi lấy giá trị ở cột bên phải."],
				["Tìm gần đúng", "Mặc định của VLOOKUP nếu bỏ đối số cuối: lấy dòng nhỏ nhất không vượt quá giá trị tra."],
				["INDEX và MATCH", "Cặp hàm tra được cả sang trái."]
			],
			problem: "Bảng giảm giá: mã 10 giảm 5%, mã 20 giảm 10%, mã 30 giảm 15%. Khách nhập mã 25, không có trong bảng. Dùng =VLOOKUP(25, bảng, 2) và =VLOOKUP(25, bảng, 2, FALSE), mỗi công thức cho ra gì?",
			steps: [
				["VLOOKUP bỏ đối số cuối", "Mặc định tìm gần đúng, cần bảng sắp xếp tăng. Mã 25 không có, Excel lấy dòng nhỏ nhất không vượt 25 là mã 20 và trả 10%."],
				["Vấn đề", "Khách nhập mã sai mà vẫn được giảm 10%. Excel không báo gì."],
				["VLOOKUP với FALSE", "FALSE nghĩa là khớp đúng. Mã 25 không có nên trả #N/A."],
				["Xử lý #N/A có chủ đích", "=IFERROR(VLOOKUP(25, bảng, 2, FALSE), \"mã không hợp lệ\")."]
			],
			say: "Không có FALSE, VLOOKUP trả một con số hợp lý nhưng sai và không báo lỗi. Muốn khớp đúng mã thì luôn ghi FALSE. Nếu cột cần lấy nằm bên trái cột mã, VLOOKUP không với tới, khi đó dùng INDEX và MATCH.",
			check: ["Nếu cột «Mức giảm» nằm bên trái cột «Mã», công thức nào tra được?", "=INDEX(cột_mức_giảm, MATCH(mã_cần_tra, cột_mã, 0)). Số 0 trong MATCH nghĩa là khớp đúng, giống FALSE."]
		},
		en: {
			story: "January is nearly over. Thao sends a discount table by campaign code. You look up each form's code to find its discount and run into the approximate-match trap.",
			words: [
				["VLOOKUP", "Looks up a value in the first column of a table and returns a value from a column to the right."],
				["Approximate match", "VLOOKUP's default if you omit the last argument: it takes the largest row not exceeding the lookup value."],
				["INDEX and MATCH", "A pair of functions that can also look to the left."]
			],
			problem: "Discount table: code 10 gives 5%, code 20 gives 10%, code 30 gives 15%. A customer enters code 25, which is not in the table. What do =VLOOKUP(25, table, 2) and =VLOOKUP(25, table, 2, FALSE) each return?",
			steps: [
				["VLOOKUP without the last argument", "The default is approximate match, which needs the table sorted ascending. Code 25 is missing, so Excel takes the largest row not exceeding 25, code 20, and returns 10%."],
				["The problem", "A customer entered a wrong code yet still gets 10% off. Excel says nothing."],
				["VLOOKUP with FALSE", "FALSE means exact match. Code 25 does not exist so it returns #N/A."],
				["Handle #N/A on purpose", "=IFERROR(VLOOKUP(25, table, 2, FALSE), \"invalid code\")."]
			],
			say: "Without FALSE, VLOOKUP returns a plausible but wrong number and raises no error. To match a code exactly always write FALSE. If the column you need sits to the left of the code column, VLOOKUP cannot reach it; then use INDEX and MATCH.",
			check: ["If the “Discount” column sits to the left of the “Code” column, which formula can look it up?", "=INDEX(discount_column, MATCH(code_to_find, code_column, 0)). The 0 in MATCH means exact match, like FALSE."]
		}
	}
};
var visuals$3 = {
	"c0-order": {
		kind: "bars",
		title: ["Form theo tháng", "Forms by month"],
		items: [{
			label: ["Th.11", "Nov"],
			value: 220
		}, {
			label: ["Th.12", "Dec"],
			value: 180
		}],
		note: ["Giảm 40 form, tức khoảng 18%.", "A drop of 40 forms, about 18%."]
	},
	"c0-read": {
		kind: "bars",
		title: ["Hình trong thẻ: hai cột", "The card's picture: two bars"],
		items: [{
			label: ["Trước", "Before"],
			value: 220
		}, {
			label: ["Sau", "After"],
			value: 180
		}],
		note: ["Khoảng chênh giữa hai đỉnh là 40.", "The gap between the tops is 40."]
	},
	"crisp-data": {
		kind: "table",
		title: ["File ads_export: thiếu cột form theo kênh", "ads_export file: forms-by-channel column missing"],
		head: [
			["Tuần", "Week"],
			["Kênh", "Channel"],
			["Chi phí (triệu)", "Spend (million)"],
			["Tổng form", "Total forms"]
		],
		rows: [
			[
				1,
				"GDN",
				6,
				50
			],
			[
				1,
				"Meta",
				5,
				50
			],
			[
				1,
				"TikTok",
				4,
				50
			]
		],
		mark: [
			[0, 3],
			[1, 3],
			[2, 3]
		],
		note: ["Cột D là tổng cả ba kênh, nên không chia được CPA theo kênh.", "Column D is the total of all three channels, so you cannot divide CPA by channel."]
	},
	"crisp-prep": {
		kind: "table",
		title: ["TikTok: tuần 5 bị trống", "TikTok: week 5 is blank"],
		head: [
			["Tuần", "Week"],
			["Chi phí (triệu)", "Spend (million)"],
			["Form", "Forms"]
		],
		rows: [
			[
				3,
				4,
				12
			],
			[
				4,
				4,
				12
			],
			[
				5,
				"",
				12
			],
			[
				6,
				4,
				12
			]
		],
		mark: [[2, 1]],
		note: ["Ô B3 trống, không phải số 0.", "Cell B3 is blank, not 0."]
	},
	"ps-fact": {
		kind: "bars",
		title: ["Tỷ lệ form theo kênh (%)", "Form rate by channel (%)"],
		items: [
			{
				label: ["GDN", "GDN"],
				value: 2
			},
			{
				label: ["Meta", "Meta"],
				value: 2.5
			},
			{
				label: ["TikTok", "TikTok"],
				value: 1.5
			}
		],
		unit: "%",
		note: ["Ngưỡng «yếu» = dưới 2,0%.", "Threshold for “weak” = below 2.0%."]
	},
	"ps-smart": {
		kind: "bars",
		title: ["Form TikTok mỗi tuần: hiện tại và mục tiêu", "TikTok forms per week: now and target"],
		items: [{
			label: ["Hiện tại", "Now"],
			value: 12
		}, {
			label: ["31/1", "31 Jan"],
			value: 15
		}]
	},
	"ps-opt": {
		kind: "table",
		title: ["Ba phương án, cùng một thước đo", "Three options, one measure"],
		head: [
			["Phương án", "Option"],
			["Thời gian", "Time"],
			["Form TikTok vào 31/1", "TikTok forms on 31 Jan"]
		],
		rows: [
			[
				"X",
				"2 ngày / 2 days",
				"16 | 12"
			],
			[
				"Y",
				"5 tuần / weeks",
				12
			],
			[
				"Z",
				"0",
				12
			]
		],
		mark: [[0, 2]]
	},
	"ps-do": {
		kind: "bars",
		title: ["Form TikTok mỗi tuần: trước và sau khi sửa lỗi", "TikTok forms per week: before and after the fix"],
		items: [{
			label: ["Trước", "Before"],
			value: 12
		}, {
			label: ["Sau", "After"],
			value: 15
		}]
	},
	"xl-cell": {
		kind: "table",
		title: ["Form tháng 11 (ô B3 là chữ)", "November forms (cell B3 is text)"],
		head: [["Chi nhánh", "Branch"], ["Form", "Forms"]],
		rows: [
			["Quận 1 / D1", 80],
			["Quận 3 / D3", "'70"],
			["Thủ Đức / Thu Duc", 70],
			["SUM", 150]
		],
		mark: [[1, 1], [3, 1]],
		note: ["SUM bỏ qua B3 nên ra 150 thay vì 220.", "SUM skips B3 so it returns 150 instead of 220."]
	},
	"xl-lock": {
		kind: "table",
		title: ["Tỷ trọng = B2/$B$5", "Share = B2/$B$5"],
		head: [["Form", "Forms"], ["Tỷ trọng", "Share"]],
		rows: [
			[80, "36,4%"],
			[70, "31,8%"],
			[70, "31,8%"],
			[220, "100%"]
		],
		mark: [[3, 0]]
	},
	"xl-if": {
		kind: "table",
		title: ["CPA tuần 4 và tuần 5", "CPA, weeks 4 and 5"],
		head: [
			["Chi phí", "Spend"],
			["Form", "Forms"],
			["CPA", "CPA"]
		],
		rows: [[
			4,
			12,
			.333
		], [
			"",
			12,
			"chưa có / not yet"
		]],
		mark: [[1, 0]]
	},
	"xl-keep": {
		kind: "table",
		title: ["Lọc GDN: dòng Meta chỉ bị ẩn", "Filter GDN: Meta rows are only hidden"],
		head: [["Kênh", "Channel"], ["Form", "Forms"]],
		rows: [
			["GDN", 18],
			["GDN", 17],
			["GDN", 19],
			["Meta (ẩn / hidden)", 20],
			["Meta (ẩn / hidden)", 21],
			["Meta (ẩn / hidden)", 20]
		],
		mark: [
			[0, 1],
			[1, 1],
			[2, 1]
		],
		note: ["SUMIFS chỉ cộng ba ô tô sáng: 54.", "SUMIFS adds only the three highlighted cells: 54."]
	},
	"xl-chart": {
		kind: "line",
		title: ["Form tổng 6 tuần", "Total forms, 6 weeks"],
		xs: [
			"1",
			"2",
			"3",
			"4",
			"5",
			"6"
		],
		ys: [
			48,
			51,
			50,
			47,
			53,
			50
		],
		note: ["Dao động quanh 50, không dốc xuống.", "Wobbles around 50, no downward slope."]
	},
	"xl-pivot": {
		kind: "bars",
		title: ["Kết quả pivot: tổng form theo kênh", "Pivot result: total forms by channel"],
		items: [
			{
				label: ["GDN", "GDN"],
				value: 35
			},
			{
				label: ["Meta", "Meta"],
				value: 41
			},
			{
				label: ["TikTok", "TikTok"],
				value: 24
			}
		],
		note: ["35 + 41 + 24 = 100 = 50 × 2 tuần.", "35 + 41 + 24 = 100 = 50 × 2 weeks."]
	},
	"xl-look": {
		kind: "table",
		title: ["Bảng mã giảm giá", "Discount code table"],
		head: [["Mã", "Code"], ["Giảm", "Discount"]],
		rows: [
			[10, "5%"],
			[20, "10%"],
			[30, "15%"]
		],
		mark: [[1, 1]],
		note: ["Mã 25 không có: tìm gần đúng lấy dòng mã 20.", "Code 25 is missing: approximate match takes the code 20 row."]
	}
};
var c0Walks = Object.fromEntries(Object.entries(base$3).map(([id, w]) => [id, visuals$3[id] ? {
	...w,
	visual: visuals$3[id]
} : w]));
/** C1: Python cho khoa học dữ liệu. Tháng 2 ở Lotus Spa. */
var base$2 = {
	"py-run": {
		vi: {
			story: "Tháng 2. Excel đã cho bạn thấy hạn chế: file 12 tuần × 3 kênh quá nhiều để làm tay. Bạn mở notebook Python đầu tiên và tính lại CPA tuần này (chi 15 triệu, 50 form).",
			words: [
				["Ô (cell)", "Một khối code trong notebook. Bấm chạy thì máy chạy khối đó."],
				["Biến", "Một cái tên giữ một giá trị, ví dụ forms = 50."],
				["Thứ tự chạy", "Máy chỉ biết những gì đã chạy, theo thứ tự bạn bấm, không phải thứ tự trên màn hình."]
			],
			problem: "Ô 1: forms = 50. Ô 2: cpa = 15000 / forms (đơn vị nghìn đồng). Bạn chạy cả hai, được 300. Sau đó sửa ô 1 thành forms = 54 nhưng không chạy lại ô 2. Giá trị cpa là bao nhiêu và cần làm gì?",
			steps: [
				["Chạy ô 1 rồi ô 2", "forms = 50, cpa = 15000 ÷ 50 = 300."],
				["Sửa ô 1 thành 54 và chạy ô 1", "Máy đổi forms thành 54. Nhưng cpa là kết quả đã tính ở lần chạy trước, nó không tự tính lại."],
				["Xem cpa lúc này", "Vẫn 300. Ô 2 trên màn hình viết 15000 / forms nhưng giá trị cũ vẫn nằm trong bộ nhớ."],
				["Chạy lại ô 2", "15000 ÷ 54 ≈ 277,8. Bây giờ cpa khớp với forms."]
			],
			say: "Notebook nhớ giá trị theo lần chạy, không theo những gì đang nhìn thấy. Nếu bạn gửi chị Lan con số 300 trong khi forms đã là 54, bạn báo sai mà code trông hoàn toàn đúng. Thói quen an toàn: sửa xong thì chạy lại từ trên xuống.",
			check: ["Nếu bạn chạy ô 2 trước khi chạy ô 1 trong một notebook mới, điều gì xảy ra?", "Lỗi NameError: forms chưa được định nghĩa, vì máy chưa chạy dòng gán forms. Chạy ô 1 trước rồi ô 2 là hết lỗi."]
		},
		en: {
			story: "February. Excel has shown its limits: 12 weeks × 3 channels is too much to do by hand. You open your first Python notebook and recompute this week's CPA (15 million spend, 50 forms).",
			words: [
				["Cell", "A block of code in the notebook. Click run and the machine runs that block."],
				["Variable", "A name that holds a value, for example forms = 50."],
				["Run order", "The machine only knows what has been run, in the order you clicked, not the order on screen."]
			],
			problem: "Cell 1: forms = 50. Cell 2: cpa = 15000 / forms (in thousand dong). You run both and get 300. Then you edit cell 1 to forms = 54 but do not re-run cell 2. What is cpa and what should you do?",
			steps: [
				["Run cell 1 then cell 2", "forms = 50, cpa = 15000 ÷ 50 = 300."],
				["Edit cell 1 to 54 and run cell 1", "The machine changes forms to 54. But cpa is a result computed in the earlier run; it does not recompute itself."],
				["Look at cpa now", "Still 300. Cell 2 on screen says 15000 / forms but the old value remains in memory."],
				["Re-run cell 2", "15000 ÷ 54 ≈ 277.8. Now cpa matches forms."]
			],
			say: "A notebook remembers values by run, not by what you see. If you send Ms. Lan the number 300 while forms is already 54, you report a wrong number while the code looks perfectly right. A safe habit: after editing, run again from the top.",
			check: ["If you run cell 2 before cell 1 in a fresh notebook, what happens?", "A NameError: forms is not defined, because the machine has not run the line that assigns forms. Run cell 1 first, then cell 2, and the error is gone."]
		}
	},
	"py-type": {
		vi: {
			story: "Thảo xuất form từ hệ thống ra file CSV. Khi bạn đọc vào Python, số form của TikTok tuần này nằm trong biến, nhưng phép cộng cho ra kết quả kỳ lạ.",
			words: [
				["int", "Số nguyên, ví dụ 12."],
				["float", "Số có phần thập phân, ví dụ 333,3."],
				["str", "Chuỗi chữ, đặt trong dấu nháy, ví dụ \"12\"."],
				["Ép kiểu", "Đổi một giá trị sang kiểu khác, ví dụ int(\"12\") thành 12."]
			],
			problem: "File CSV đọc vào cho tiktok_forms = \"12\" và meta_forms = \"20\" (đều là chuỗi). Bạn viết tiktok_forms + meta_forms. Kết quả là gì, và làm sao có tổng đúng 32?",
			steps: [
				["Xem kiểu", "type(tiktok_forms) cho str. Dấu nháy trong \"12\" nói rằng đây là chữ chứ không phải số."],
				["Chạy phép + trên hai chuỗi", "+ với chuỗi là nối chữ: \"12\" + \"20\" = \"1220\". Không có lỗi, chỉ là kết quả sai."],
				["Ép kiểu trước khi cộng", "int(\"12\") + int(\"20\") = 12 + 20 = 32."],
				["Kiểm tra", "type(int(\"12\")) cho int. Tổng 32 khớp với 12 + 20."]
			],
			say: "Đây chính là lỗi «số lưu dạng chữ» của Excel, nhưng ở Python nó còn khó thấy hơn: \"1220\" trông như một con số. Mỗi khi đọc dữ liệu từ file, hãy kiểm tra kiểu trước khi tính.",
			check: ["int(\"12.5\") cho kết quả gì?", "Lỗi ValueError, vì \"12.5\" không phải số nguyên viết thẳng. Dùng float(\"12.5\") để có 12.5, rồi int() nếu cần cắt phần thập phân."]
		},
		en: {
			story: "Thao exports forms from the system to a CSV file. When you read it into Python, TikTok's forms for this week sit in a variable, but addition gives odd results.",
			words: [
				["int", "A whole number, for example 12."],
				["float", "A number with a decimal part, for example 333.3."],
				["str", "A string of text, in quotes, for example \"12\"."],
				["Casting", "Converting a value to another type, for example int(\"12\") becomes 12."]
			],
			problem: "The CSV is read in with tiktok_forms = \"12\" and meta_forms = \"20\" (both strings). You write tiktok_forms + meta_forms. What is the result, and how do you get the correct total of 32?",
			steps: [
				["Check the type", "type(tiktok_forms) gives str. The quotes in \"12\" say it is text, not a number."],
				["Run + on two strings", "+ on strings joins text: \"12\" + \"20\" = \"1220\". No error, just a wrong result."],
				["Cast before adding", "int(\"12\") + int(\"20\") = 12 + 20 = 32."],
				["Check", "type(int(\"12\")) gives int. The total 32 matches 12 + 20."]
			],
			say: "This is exactly Excel's “number stored as text” problem, but in Python it is even harder to see: \"1220\" looks like a number. Every time you read data from a file, check the types before calculating.",
			check: ["What does int(\"12.5\") give?", "A ValueError, because \"12.5\" is not a whole number written plainly. Use float(\"12.5\") to get 12.5, then int() if you want to cut the decimals."]
		}
	},
	"py-op": {
		vi: {
			story: "Bạn tính CPA cho tuần có 54 form (tuần sau khi sửa lỗi trang đích) và cần hiểu rõ từng phép toán Python trước khi viết công thức cho 12 tuần.",
			words: [
				["/", "Chia thường, luôn cho số thập phân."],
				["//", "Chia lấy phần nguyên."],
				["%", "Chia lấy số dư."],
				["== và =", "= là gán giá trị, == là hỏi «có bằng nhau không»."]
			],
			problem: "Chi 15 triệu = 15000 nghìn, 54 form. Tính 15000 / 54, 15000 // 54 và 15000 % 54, rồi giải thích. Sau đó tính xem 15000 % 50 cho gì.",
			steps: [
				["15000 / 54", "= 277,78 (làm tròn). Đây là CPA, tức khoảng 277,8 nghìn mỗi form."],
				["15000 // 54", "54 × 277 = 14958, nằm dưới 15000, còn 54 × 278 = 15012 là vượt. Vậy phần nguyên là 277."],
				["15000 % 54", "Số dư = 15000 − 14958 = 42."],
				["Kiểm tra lại", "277 × 54 + 42 = 14958 + 42 = 15000. Phép chia lấy nguyên và dư luôn ghép lại thành số ban đầu."],
				["15000 % 50", "50 × 300 = 15000, nên số dư là 0. Dư bằng 0 nghĩa là chia hết."]
			],
			say: "/ cho CPA thật (277,8), còn // chỉ cho 277, tức bỏ mất 0,8 nghìn mỗi form, khoảng 800 đồng. Khi báo cáo tiền, dùng / chứ đừng dùng // trừ khi bạn muốn cố tình làm tròn xuống. Còn % rất hữu ích để kiểm tra chia hết.",
			check: ["Viết if forms = 50 thay vì if forms == 50 thì sao?", "Python báo lỗi cú pháp, vì = là gán, không phải so sánh. Muốn hỏi «forms có bằng 50 không» phải viết ==."]
		},
		en: {
			story: "You compute CPA for the week with 54 forms (the week after the landing-page fix) and need to understand each Python operator before writing a formula for 12 weeks.",
			words: [
				["/", "Ordinary division, always gives a decimal."],
				["//", "Division keeping the whole part."],
				["%", "Division keeping the remainder."],
				["== and =", "= assigns a value, == asks “are they equal?”."]
			],
			problem: "Spend 15 million = 15000 thousand, 54 forms. Compute 15000 / 54, 15000 // 54 and 15000 % 54 and explain them. Then work out what 15000 % 50 gives.",
			steps: [
				["15000 / 54", "= 277.78 (rounded). This is the CPA, about 277.8 thousand per form."],
				["15000 // 54", "54 × 277 = 14958, below 15000, while 54 × 278 = 15012 is over. So the whole part is 277."],
				["15000 % 54", "Remainder = 15000 − 14958 = 42."],
				["Check back", "277 × 54 + 42 = 14958 + 42 = 15000. Whole-part and remainder always put back together into the original number."],
				["15000 % 50", "50 × 300 = 15000, so the remainder is 0. A remainder of 0 means it divides evenly."]
			],
			say: "/ gives the real CPA (277.8) while // gives only 277, dropping 0.8 thousand per form, about 800 dong. When reporting money use /, not //, unless you deliberately want to round down. And % is handy for checking divisibility.",
			check: ["What if you write if forms = 50 instead of if forms == 50?", "Python raises a syntax error, because = assigns, it does not compare. To ask “does forms equal 50” you must write ==."]
		}
	},
	"py-if": {
		vi: {
			story: "Chị Lan yêu cầu: kênh nào có CPA trên 300 nghìn thì đánh dấu «xem lại». Bạn viết quy tắc đó thành code.",
			words: [
				["if / elif / else", "Chọn một nhánh. Máy đi từ trên xuống và dừng ở nhánh đầu tiên đúng."],
				["Điều kiện", "Một biểu thức cho True hoặc False, ví dụ cpa > 300."],
				["Thụt lề", "Dòng thụt vào dưới if thuộc nhánh đó."]
			],
			problem: "CPA ba kênh: GDN 333,3; Meta 250; TikTok 333,3 (nghìn). Quy tắc: trên 300 là «xem lại», từ 260 đến 300 là «ổn», còn lại là «tốt». Mỗi kênh rơi vào nhánh nào?",
			steps: [
				["Viết nhánh nghiêm nhất trước", "if cpa > 300: \"xem lại\""],
				["Nhánh thứ hai", "elif cpa >= 260: \"ổn\""],
				["Nhánh cuối", "else: \"tốt\""],
				["Chạy GDN (333,3)", "333,3 > 300 đúng, nên dừng ở nhánh đầu: «xem lại»."],
				["Chạy Meta (250)", "250 > 300 sai, 250 >= 260 cũng sai, rơi vào else: «tốt»."],
				["Chạy TikTok (333,3)", "Giống GDN: «xem lại». Kết quả: GDN xem lại, Meta tốt, TikTok xem lại."]
			],
			say: "Thứ tự nhánh quan trọng. Nếu bạn đặt elif cpa >= 260 lên đầu thì GDN (333,3) cũng đúng nhánh đó và bị gắn «ổn» thay vì «xem lại». Máy dừng ở nhánh đầu tiên đúng, nên viết điều kiện hẹp nhất trước.",
			check: ["Nếu đổi thứ tự thành: if cpa >= 260 trước, rồi elif cpa > 300, GDN nhận nhãn gì?", "«ổn», vì 333,3 >= 260 đúng nên máy dừng ngay ở nhánh đầu, không bao giờ đến nhánh > 300. Đây là lỗi sai thứ tự nhánh."]
		},
		en: {
			story: "Ms. Lan asks: any channel with CPA above 300 thousand should be marked “review”. You turn that rule into code.",
			words: [
				["if / elif / else", "Pick one branch. The machine goes top to bottom and stops at the first true branch."],
				["Condition", "An expression that gives True or False, for example cpa > 300."],
				["Indentation", "Lines indented under an if belong to that branch."]
			],
			problem: "CPA of the three channels: GDN 333.3; Meta 250; TikTok 333.3 (thousand). Rule: above 300 is “review”, 260 to 300 is “ok”, otherwise “good”. Which branch does each channel land in?",
			steps: [
				["Write the strictest branch first", "if cpa > 300: \"review\""],
				["The second branch", "elif cpa >= 260: \"ok\""],
				["The last branch", "else: \"good\""],
				["Run GDN (333.3)", "333.3 > 300 is true, so it stops at the first branch: “review”."],
				["Run Meta (250)", "250 > 300 is false, 250 >= 260 is also false, so it falls into else: “good”."],
				["Run TikTok (333.3)", "Same as GDN: “review”. Result: GDN review, Meta good, TikTok review."]
			],
			say: "Branch order matters. If you put elif cpa >= 260 first, GDN (333.3) also satisfies that branch and is labelled “ok” instead of “review”. The machine stops at the first true branch, so write the narrowest condition first.",
			check: ["If you swap the order to: if cpa >= 260 first, then elif cpa > 300, what label does GDN get?", "“ok”, because 333.3 >= 260 is true so the machine stops at the first branch and never reaches > 300. This is a branch-order bug."]
		}
	},
	"py-loop": {
		vi: {
			story: "Thay vì cộng tay form từng kênh, bạn dùng vòng lặp để duyệt cả ba kênh trong tuần và cộng lại. Bạn kỳ vọng 50, vì đó là số form mỗi tuần của spa.",
			words: [
				["for", "Lặp qua từng phần tử của một danh sách, mỗi lần gán phần tử đó cho biến lặp."],
				["Biến tích lũy", "Biến bắt đầu từ 0 rồi cộng dồn trong mỗi vòng."],
				["Vòng lặp", "Một khối code chạy lại nhiều lần."]
			],
			problem: "forms = [18, 20, 12] (GDN, Meta, TikTok). Viết vòng lặp cộng tổng và theo dõi biến total qua từng vòng.",
			steps: [
				["Khởi tạo", "total = 0 trước vòng lặp."],
				["Vòng 1: f = 18", "total = 0 + 18 = 18."],
				["Vòng 2: f = 20", "total = 18 + 20 = 38."],
				["Vòng 3: f = 12", "total = 38 + 12 = 50."],
				["Kiểm tra", "50 khớp với 50 form mỗi tuần. Hết danh sách thì vòng dừng."]
			],
			say: "Nếu quên dòng total = 0 trước vòng lặp, Python báo lỗi vì total chưa tồn tại. Nếu đặt nó bên trong vòng lặp, mỗi vòng reset về 0 và kết quả cuối chỉ là 12 (phần tử cuối). Vị trí khởi tạo quyết định kết quả.",
			check: ["Nếu đặt total = 0 bên trong vòng lặp, kết quả cuối là bao nhiêu?", "12. Mỗi vòng total quay về 0 rồi cộng một phần tử, nên sau vòng cuối chỉ còn 0 + 12 = 12."]
		},
		en: {
			story: "Instead of adding each channel's forms by hand, you use a loop to walk the three channels of the week and add them up. You expect 50, since that is the spa's weekly forms.",
			words: [
				["for", "Loops through each element of a list, assigning that element to the loop variable each time."],
				["Accumulator", "A variable that starts at 0 and builds up in each round."],
				["Loop", "A block of code that runs again and again."]
			],
			problem: "forms = [18, 20, 12] (GDN, Meta, TikTok). Write a loop that adds the total and track the variable total through each round.",
			steps: [
				["Initialise", "total = 0 before the loop."],
				["Round 1: f = 18", "total = 0 + 18 = 18."],
				["Round 2: f = 20", "total = 18 + 20 = 38."],
				["Round 3: f = 12", "total = 38 + 12 = 50."],
				["Check", "50 matches 50 forms a week. When the list runs out, the loop stops."]
			],
			say: "If you forget total = 0 before the loop, Python errors because total does not exist. If you put it inside the loop, each round resets to 0 and the final result is only 12 (the last element). Where you initialise decides the result.",
			check: ["If you put total = 0 inside the loop, what is the final result?", "12. Each round total returns to 0 and then adds one element, so after the last round it is only 0 + 12 = 12."]
		}
	},
	"py-fn": {
		vi: {
			story: "Bạn đã tính CPA cho ba kênh ba lần với ba đoạn code gần giống nhau. Đến lúc gói phép tính vào một hàm để dùng lại cho cả 12 tuần.",
			words: [
				["Hàm", "Khối code có tên, nhận đầu vào và trả đầu ra."],
				["Tham số", "Tên của đầu vào trong định nghĩa hàm."],
				["return", "Trả giá trị ra cho nơi gọi hàm."]
			],
			problem: "Viết hàm cpa(spend, forms) trả spend / forms. Gọi cho GDN (6000, 18), Meta (5000, 20), TikTok (4000, 12). Sau đó xử lý trường hợp forms = 0.",
			steps: [
				["Định nghĩa", "def cpa(spend, forms): return spend / forms"],
				["Gọi cho GDN", "cpa(6000, 18) = 6000 ÷ 18 = 333,3."],
				["Gọi cho Meta", "cpa(5000, 20) = 250."],
				["Gọi cho TikTok", "cpa(4000, 12) = 333,3."],
				["Thử forms = 0", "cpa(4000, 0) báo ZeroDivisionError vì không chia được cho 0."],
				["Thêm phòng thủ", "if forms == 0: return None, rồi mới chia. Giờ cpa(4000, 0) trả None thay vì làm hỏng cả vòng lặp."]
			],
			say: "Một hàm viết một lần, dùng 36 lần cho 12 tuần × 3 kênh. Sửa công thức ở một chỗ là cả 36 chỗ đúng theo. Quan trọng hơn, bạn nghĩ trước về trường hợp xấu (forms = 0) ngay trong hàm, như bạn đã làm với ô trống ở Excel.",
			check: ["Hàm không có dòng return thì cpa(6000, 18) trả về gì?", "None, vì hàm chạy xong mà không trả gì. Nếu bạn gán x = cpa(6000, 18) rồi in x, bạn sẽ thấy None chứ không phải 333,3."]
		},
		en: {
			story: "You have computed CPA for the three channels three times with three nearly identical pieces of code. Time to wrap the calculation in a function to reuse for all 12 weeks.",
			words: [
				["Function", "A named block of code that takes input and returns output."],
				["Parameter", "The name of an input in the function's definition."],
				["return", "Sends a value back to where the function was called."]
			],
			problem: "Write a function cpa(spend, forms) that returns spend / forms. Call it for GDN (6000, 18), Meta (5000, 20), TikTok (4000, 12). Then handle the case forms = 0.",
			steps: [
				["Define", "def cpa(spend, forms): return spend / forms"],
				["Call for GDN", "cpa(6000, 18) = 6000 ÷ 18 = 333.3."],
				["Call for Meta", "cpa(5000, 20) = 250."],
				["Call for TikTok", "cpa(4000, 12) = 333.3."],
				["Try forms = 0", "cpa(4000, 0) raises ZeroDivisionError because you cannot divide by 0."],
				["Add a guard", "if forms == 0: return None, before dividing. Now cpa(4000, 0) returns None instead of breaking the whole loop."]
			],
			say: "A function written once is used 36 times for 12 weeks × 3 channels. Fix the formula in one place and all 36 places are right. More importantly, you think about the bad case (forms = 0) inside the function, as you did with blank cells in Excel.",
			check: ["If the function has no return line, what does cpa(6000, 18) give back?", "None, because the function finishes without returning anything. If you assign x = cpa(6000, 18) and print x you will see None, not 333.3."]
		}
	},
	"py-str": {
		vi: {
			story: "File form theo kênh có cột utm_source, nhưng người nhập viết không thống nhất: «tiktok», «TikTok », «TIKTOK». Nếu không làm sạch, form của TikTok bị đếm thiếu.",
			words: [
				["Chuỗi", "Văn bản trong dấu nháy. Python đếm từng ký tự, kể cả khoảng trắng."],
				["strip()", "Cắt khoảng trắng ở hai đầu."],
				["lower()", "Đổi toàn bộ sang chữ thường."]
			],
			problem: "Cột utm_source có 4 giá trị: \"tiktok\", \"TikTok \", \" TIKTOK\", \"meta\". Đếm số dòng của TikTok bằng ==  \"tiktok\" trước và sau khi làm sạch.",
			steps: [
				["Đếm trước khi làm sạch", "Chỉ \"tiktok\" khớp chính xác. \"TikTok \" khác vì chữ hoa và có khoảng trắng cuối; \" TIKTOK\" khác vì chữ hoa và khoảng trắng đầu. Đếm được 1."],
				["Cắt khoảng trắng", "\"TikTok \".strip() cho \"TikTok\"; \" TIKTOK\".strip() cho \"TIKTOK\"."],
				["Đổi chữ thường", "\"TikTok\".lower() cho \"tiktok\"; \"TIKTOK\".lower() cho \"tiktok\"."],
				["Gộp thành một bước", "s.strip().lower() áp dụng cho cả bốn giá trị."],
				["Đếm lại", "Ba giá trị đầu cùng thành \"tiktok\", đếm được 3. \"meta\" vẫn là \"meta\"."]
			],
			say: "Chưa làm sạch, TikTok chỉ có 1 dòng thay vì 3, tức mất 2 trong 3 form. Lỗi này không hiện ra lỗi nào, chỉ làm CPA TikTok cao hơn thật. Làm sạch chuỗi rồi mới đếm là bước phải có.",
			check: ["\"Tik Tok\".strip().lower() == \"tiktok\" có đúng không?", "Không: strip chỉ cắt hai đầu, khoảng trắng giữa vẫn còn nên được \"tik tok\". Cần thêm .replace(\" \", \"\")."]
		},
		en: {
			story: "The per-channel form file has a utm_source column, but the people typing it were inconsistent: “tiktok”, “TikTok ”, “TIKTOK”. Without cleaning, TikTok's forms are undercounted.",
			words: [
				["String", "Text in quotes. Python counts every character, including spaces."],
				["strip()", "Cuts spaces at both ends."],
				["lower()", "Turns everything to lowercase."]
			],
			problem: "The utm_source column has 4 values: \"tiktok\", \"TikTok \", \" TIKTOK\", \"meta\". Count TikTok's rows with == \"tiktok\" before and after cleaning.",
			steps: [
				["Count before cleaning", "Only \"tiktok\" matches exactly. \"TikTok \" differs by capitals and a trailing space; \" TIKTOK\" by capitals and a leading space. Count = 1."],
				["Strip spaces", "\"TikTok \".strip() gives \"TikTok\"; \" TIKTOK\".strip() gives \"TIKTOK\"."],
				["Lowercase", "\"TikTok\".lower() gives \"tiktok\"; \"TIKTOK\".lower() gives \"tiktok\"."],
				["Combine into one step", "s.strip().lower() applied to all four values."],
				["Count again", "The first three all become \"tiktok\", count = 3. \"meta\" stays \"meta\"."]
			],
			say: "Before cleaning, TikTok has 1 row instead of 3, losing 2 of 3 forms. This raises no error, it just makes TikTok's CPA look higher than it is. Cleaning strings before counting is a must.",
			check: ["Is \"Tik Tok\".strip().lower() == \"tiktok\" true?", "No: strip only cuts the ends, the middle space remains so you get \"tik tok\". You need .replace(\" \", \"\") too."]
		}
	},
	"py-list": {
		vi: {
			story: "Form GDN theo tuần được lưu trong một danh sách. Bạn cần lấy từng tuần, một đoạn, và tuần cuối mà không viết lại số.",
			words: [
				["Danh sách (list)", "Dãy giá trị có thứ tự, đặt trong ngoặc vuông."],
				["Chỉ số (index)", "Vị trí của phần tử. Bắt đầu từ 0."],
				["Cắt đoạn (slice)", "a[i:j] lấy từ chỉ số i đến trước chỉ số j."]
			],
			problem: "gdn = [18, 17, 19] (tuần 1, 2, 3). Tính gdn[0], gdn[-1], gdn[0:2], len(gdn) và sum(gdn) rồi tính form trung bình mỗi tuần.",
			steps: [
				["gdn[0]", "Chỉ số bắt đầu từ 0 nên đây là phần tử đầu: 18 (tuần 1)."],
				["gdn[-1]", "Âm là đếm từ cuối: 19 (tuần 3)."],
				["gdn[0:2]", "Lấy chỉ số 0 và 1, không lấy chỉ số 2: [18, 17]."],
				["len(gdn) và sum(gdn)", "len = 3 phần tử; sum = 18 + 17 + 19 = 54."],
				["Trung bình", "54 ÷ 3 = 18 form mỗi tuần."]
			],
			say: "gdn[1] là tuần 2 chứ không phải tuần 1, vì Python đếm từ 0. Và gdn[0:2] chỉ có hai phần tử, không có ba. Hai chỗ này là nguồn lỗi lệch một đơn vị phổ biến nhất. Quy tắc nhớ: số trước dấu hai chấm tính, số sau không tính.",
			check: ["gdn[3] cho kết quả gì?", "Lỗi IndexError, vì danh sách chỉ có chỉ số 0, 1, 2. Phần tử cuối là gdn[2] hoặc gdn[-1]."]
		},
		en: {
			story: "GDN's weekly forms are stored in a list. You need to pull out individual weeks, a stretch, and the last week without retyping the numbers.",
			words: [
				["List", "An ordered sequence of values, in square brackets."],
				["Index", "An element's position. Starts at 0."],
				["Slice", "a[i:j] takes from index i up to but not including index j."]
			],
			problem: "gdn = [18, 17, 19] (weeks 1, 2, 3). Compute gdn[0], gdn[-1], gdn[0:2], len(gdn) and sum(gdn), then the average forms per week.",
			steps: [
				["gdn[0]", "Indexing starts at 0 so this is the first element: 18 (week 1)."],
				["gdn[-1]", "Negative counts from the end: 19 (week 3)."],
				["gdn[0:2]", "Takes indexes 0 and 1, not index 2: [18, 17]."],
				["len(gdn) and sum(gdn)", "len = 3 elements; sum = 18 + 17 + 19 = 54."],
				["Average", "54 ÷ 3 = 18 forms per week."]
			],
			say: "gdn[1] is week 2, not week 1, because Python counts from 0. And gdn[0:2] has two elements, not three. These two spots are the most common off-by-one errors. Memory rule: the number before the colon counts, the number after does not.",
			check: ["What does gdn[3] give?", "An IndexError, because the list only has indexes 0, 1, 2. The last element is gdn[2] or gdn[-1]."]
		}
	},
	"py-dict": {
		vi: {
			story: "Thay vì nhớ «số thứ hai là Meta», bạn gắn tên kênh vào số form bằng dict. Khi Thảo hỏi «Zalo thì sao?», bạn cần biết dict xử lý khóa không có như thế nào.",
			words: [
				["Dict", "Tập các cặp khóa: giá trị, đặt trong ngoặc nhọn."],
				["Khóa (key)", "Tên dùng để tra, ví dụ \"Meta\"."],
				["get()", "Tra với giá trị mặc định nếu khóa không có."]
			],
			problem: "forms = {\"GDN\": 18, \"Meta\": 20, \"TikTok\": 12}. Tra forms[\"Meta\"], forms[\"Zalo\"], forms.get(\"Zalo\", 0), rồi tính tổng.",
			steps: [
				["forms[\"Meta\"]", "Tra theo khóa: 20."],
				["forms[\"Zalo\"]", "Khóa không có nên báo KeyError. Python không đoán thay bạn."],
				["forms.get(\"Zalo\", 0)", "get trả giá trị mặc định 0 khi khóa không có."],
				["Tổng", "sum(forms.values()) = 18 + 20 + 12 = 50."],
				["Duyệt từng cặp", "for k, v in forms.items(): in ra GDN 18, Meta 20, TikTok 12."]
			],
			say: "forms.get(\"Zalo\", 0) trả 0 và che lỗi: có thể Zalo không chạy quảng cáo, hoặc có chạy nhưng tên sai chính tả trong file. Dùng get khi 0 là câu trả lời hợp lý, còn lại để KeyError báo cho bạn biết.",
			check: ["Khi nào KeyError có lợi hơn get(..., 0)?", "Khi một khóa thiếu là dấu hiệu dữ liệu sai (ví dụ tên kênh viết sai). KeyError làm bạn dừng lại kiểm tra, còn get âm thầm điền 0 và làm tổng thiếu."]
		},
		en: {
			story: "Instead of remembering “the second number is Meta”, you attach channel names to form counts with a dict. When Thao asks “what about Zalo?”, you need to know how a dict handles a missing key.",
			words: [
				["Dict", "A set of key: value pairs, in curly braces."],
				["Key", "The name used to look up, for example \"Meta\"."],
				["get()", "Looks up with a default value if the key is missing."]
			],
			problem: "forms = {\"GDN\": 18, \"Meta\": 20, \"TikTok\": 12}. Look up forms[\"Meta\"], forms[\"Zalo\"], forms.get(\"Zalo\", 0), then compute the total.",
			steps: [
				["forms[\"Meta\"]", "Look up by key: 20."],
				["forms[\"Zalo\"]", "The key is missing so it raises KeyError. Python does not guess for you."],
				["forms.get(\"Zalo\", 0)", "get returns the default 0 when the key is missing."],
				["Total", "sum(forms.values()) = 18 + 20 + 12 = 50."],
				["Walk through pairs", "for k, v in forms.items(): prints GDN 18, Meta 20, TikTok 12."]
			],
			say: "forms.get(\"Zalo\", 0) returns 0 and hides the problem: maybe Zalo runs no ads, or it does but its name is misspelled in the file. Use get when 0 is a sensible answer; otherwise let KeyError tell you.",
			check: ["When is KeyError more useful than get(..., 0)?", "When a missing key signals bad data (for example a misspelled channel name). KeyError stops you to investigate, while get silently fills in 0 and makes the total short."]
		}
	},
	"py-tup": {
		vi: {
			story: "Mỗi kênh có một bản ghi cố định trong tuần: tên, chi phí, form. Bạn không muốn ai (kể cả chính mình) vô tình sửa nó giữa chừng, nên dùng tuple.",
			words: [["Tuple", "Dãy giá trị có thứ tự như list nhưng không sửa được, đặt trong ngoặc tròn."], ["Giải nén (unpack)", "Gán từng phần tử cho một biến riêng trong một dòng."]],
			problem: "rec = (\"TikTok\", 4000, 12). Giải nén thành ba biến, thử sửa rec[1] = 5000, và dùng tuple (\"TikTok\", 5) làm khóa dict.",
			steps: [
				["Giải nén", "name, spend, forms = rec cho name = \"TikTok\", spend = 4000, forms = 12."],
				["Tính CPA từ biến", "spend / forms = 4000 ÷ 12 ≈ 333,3."],
				["Thử sửa", "rec[1] = 5000 báo TypeError: tuple không hỗ trợ gán. Bản ghi giữ nguyên 4000."],
				["Muốn bản ghi mới", "rec2 = (rec[0], 5000, rec[2]) tạo một tuple khác, tuple cũ vẫn còn."],
				["Tuple làm khóa dict", "{(\"TikTok\", 5): 12} hợp lệ (tên kênh, tuần 5); list thì không làm khóa được."]
			],
			say: "Dùng tuple khi một bản ghi không được đổi, và lỗi khi thử đổi là có chủ đích: nó chặn một lần sửa nhầm 4000 thành 5000 mà không ai hay. Còn ghép (kênh, tuần) làm khóa cho phép tra form theo cả hai thứ.",
			check: ["Tuple (\"TikTok\", 4000, 12) có bao nhiêu phần tử và phần tử cuối là gì?", "3 phần tử, phần tử cuối rec[2] hay rec[-1] là 12."]
		},
		en: {
			story: "Each channel has a fixed record for the week: name, spend, forms. You do not want anyone (yourself included) to change it by accident midway, so you use a tuple.",
			words: [["Tuple", "An ordered sequence like a list but unchangeable, in round brackets."], ["Unpack", "Assign each element to its own variable in one line."]],
			problem: "rec = (\"TikTok\", 4000, 12). Unpack into three variables, try rec[1] = 5000, and use the tuple (\"TikTok\", 5) as a dict key.",
			steps: [
				["Unpack", "name, spend, forms = rec gives name = \"TikTok\", spend = 4000, forms = 12."],
				["Compute CPA from the variables", "spend / forms = 4000 ÷ 12 ≈ 333.3."],
				["Try to change it", "rec[1] = 5000 raises TypeError: a tuple does not support assignment. The record stays 4000."],
				["Want a new record", "rec2 = (rec[0], 5000, rec[2]) creates a different tuple; the old one remains."],
				["Tuple as a dict key", "{(\"TikTok\", 5): 12} is valid (channel, week 5); a list cannot be a key."]
			],
			say: "Use a tuple when a record must not change, and the error when you try is deliberate: it blocks an accidental change of 4000 to 5000 that nobody notices. Pairing (channel, week) as a key lets you look up forms by both.",
			check: ["How many elements does (\"TikTok\", 4000, 12) have and what is the last?", "3 elements, and the last, rec[2] or rec[-1], is 12."]
		}
	},
	"py-set": {
		vi: {
			story: "Thảo đưa hai file: một file chi phí có ba kênh, một file form chỉ thấy hai kênh. Bạn muốn tìm kênh thiếu ngay thay vì đọc từng dòng.",
			words: [
				["Set", "Tập các giá trị không trùng, không có thứ tự, đặt trong ngoặc nhọn."],
				["Hiệu (−)", "Phần tử của tập này mà tập kia không có."],
				["Hợp (|) và giao (&)", "Hợp là gộp lại, giao là phần chung."]
			],
			problem: "File chi phí: {\"GDN\", \"Meta\", \"TikTok\"}. File form: {\"GDN\", \"Meta\"}. Tìm kênh có chi phí mà không có form, và đếm số kênh khác nhau trong cột utm_source [\"tiktok\", \"meta\", \"gdn\", \"tiktok\", \"meta\"].",
			steps: [
				["Hiệu hai tập", "chi_phi − form = {\"TikTok\"}: TikTok có chi phí nhưng không có form."],
				["Giao hai tập", "chi_phi & form = {\"GDN\", \"Meta\"}: hai kênh có đủ cả hai file."],
				["Hợp hai tập", "chi_phi | form = {\"GDN\", \"Meta\", \"TikTok\"}: tổng 3 kênh."],
				["Bỏ trùng một cột", "set([\"tiktok\", \"meta\", \"gdn\", \"tiktok\", \"meta\"]) = {\"tiktok\", \"meta\", \"gdn\"}."],
				["Đếm", "len của tập đó = 3 kênh khác nhau (cột có 5 dòng nhưng chỉ có 3 giá trị)."]
			],
			say: "Chỉ một phép trừ tập đã chỉ ra kênh TikTok thiếu form, thứ mà đọc mắt rất dễ bỏ sót khi file dài hàng nghìn dòng. Và set tự bỏ trùng: 5 dòng nhưng chỉ 3 kênh thật.",
			check: ["Thứ tự phần tử trong một set có đáng tin không?", "Không. Set không có thứ tự, nên không có «phần tử đầu». Nếu cần thứ tự, đổi sang list rồi sort."]
		},
		en: {
			story: "Thao gives you two files: a spend file with three channels and a forms file that shows only two. You want to find the missing channel at once instead of reading line by line.",
			words: [
				["Set", "A collection of values with no duplicates and no order, in curly braces."],
				["Difference (−)", "Elements of this set that the other lacks."],
				["Union (|) and intersection (&)", "Union combines, intersection is what they share."]
			],
			problem: "Spend file: {\"GDN\", \"Meta\", \"TikTok\"}. Forms file: {\"GDN\", \"Meta\"}. Find the channel with spend but no forms, and count the distinct channels in the utm_source column [\"tiktok\", \"meta\", \"gdn\", \"tiktok\", \"meta\"].",
			steps: [
				["Difference of the two sets", "spend − forms = {\"TikTok\"}: TikTok has spend but no forms."],
				["Intersection of the two sets", "spend & forms = {\"GDN\", \"Meta\"}: two channels present in both files."],
				["Union of the two sets", "spend | forms = {\"GDN\", \"Meta\", \"TikTok\"}: 3 channels in all."],
				["Remove duplicates from a column", "set([\"tiktok\", \"meta\", \"gdn\", \"tiktok\", \"meta\"]) = {\"tiktok\", \"meta\", \"gdn\"}."],
				["Count", "len of that set = 3 distinct channels (the column has 5 rows but only 3 values)."]
			],
			say: "A single set subtraction shows TikTok is missing forms, something the eye easily misses when a file has thousands of rows. And a set removes duplicates itself: 5 rows but only 3 real channels.",
			check: ["Can you trust the order of elements in a set?", "No. A set has no order, so there is no “first element”. If you need order, convert to a list and sort."]
		}
	},
	"py-np": {
		vi: {
			story: "Với 12 tuần × 3 kênh, vòng lặp for trở nên dài dòng. Bạn chuyển sang NumPy để tính cho cả ba kênh trong một dòng.",
			words: [
				["Mảng (array)", "Dãy số cùng một kiểu, cho phép tính cả mảng một lần."],
				["Tính theo phần tử", "a / b chia từng cặp phần tử cùng vị trí, không cần vòng lặp."],
				["Mặt nạ (mask)", "Mảng True/False dùng để lọc phần tử."]
			],
			problem: "spend = [6000, 5000, 4000], forms = [18, 20, 12] (GDN, Meta, TikTok). Tính CPA cả ba trong một dòng, rồi lọc kênh có form từ 15 trở lên.",
			steps: [
				["Tạo mảng", "spend = np.array([6000, 5000, 4000]), forms = np.array([18, 20, 12])."],
				["Chia từng cặp", "spend / forms = [6000÷18, 5000÷20, 4000÷12] = [333,3; 250; 333,3]."],
				["Tổng và trung bình form", "forms.sum() = 50; forms.mean() = 50 ÷ 3 ≈ 16,7."],
				["Tạo mặt nạ", "forms >= 15 cho [True, True, False] (18 và 20 đạt, 12 không)."],
				["Lọc", "forms[forms >= 15] = [18, 20]."]
			],
			say: "Một dòng spend / forms thay cho cả vòng lặp, và tính đúng theo vị trí: GDN chia cho GDN, Meta cho Meta. Điều kiện là hai mảng phải cùng thứ tự kênh. Nếu một mảng đảo thứ tự, phép chia vẫn chạy và ra số sai mà không báo lỗi.",
			check: ["np.array([18, 20, \"x\"]) có kiểu gì?", "Kiểu chuỗi: một mảng chỉ có một kiểu, và \"x\" làm cả 18, 20 bị đổi thành chữ. Đây là lý do mảng phải sạch trước khi tính."]
		},
		en: {
			story: "With 12 weeks × 3 channels, a for loop becomes wordy. You switch to NumPy to compute all three channels in one line.",
			words: [
				["Array", "A sequence of numbers of one type, letting you calculate the whole array at once."],
				["Element-wise", "a / b divides each pair of elements in the same position, no loop needed."],
				["Mask", "A True/False array used to filter elements."]
			],
			problem: "spend = [6000, 5000, 4000], forms = [18, 20, 12] (GDN, Meta, TikTok). Compute all three CPAs in one line, then filter channels with at least 15 forms.",
			steps: [
				["Create arrays", "spend = np.array([6000, 5000, 4000]), forms = np.array([18, 20, 12])."],
				["Divide pairwise", "spend / forms = [6000÷18, 5000÷20, 4000÷12] = [333.3; 250; 333.3]."],
				["Sum and mean of forms", "forms.sum() = 50; forms.mean() = 50 ÷ 3 ≈ 16.7."],
				["Create a mask", "forms >= 15 gives [True, True, False] (18 and 20 pass, 12 does not)."],
				["Filter", "forms[forms >= 15] = [18, 20]."]
			],
			say: "One line spend / forms replaces the whole loop, and computes by position: GDN divided by GDN, Meta by Meta. The condition is that both arrays must have the same channel order. If one array is reordered, the division still runs and gives wrong numbers without any error.",
			check: ["What type does np.array([18, 20, \"x\"]) have?", "A string type: an array has one type, and \"x\" turns 18 and 20 into text too. This is why an array must be clean before calculating."]
		}
	},
	"py-ser": {
		vi: {
			story: "Hai file về kênh liệt kê kênh theo hai thứ tự khác nhau (chi phí: Meta trước, form: GDN trước). Với mảng NumPy chia sẽ bị lệch kênh. Series canh theo nhãn nên tránh được lỗi này.",
			words: [["Series", "Dãy giá trị có nhãn (index) đi kèm, từ thư viện pandas."], ["Canh theo nhãn", "Phép tính ghép các phần tử có cùng nhãn, không theo vị trí."]],
			problem: "forms = Series({\"GDN\": 18, \"Meta\": 20, \"TikTok\": 12}). spend = Series({\"Meta\": 5000, \"GDN\": 6000, \"TikTok\": 4000}) (thứ tự khác). Tính spend / forms và so với chia theo vị trí.",
			steps: [
				["Chia theo vị trí (sai)", "Ghép 5000/18, 6000/20, 4000/12 = 277,8; 300; 333,3. Meta và GDN đã bị lệch."],
				["Chia bằng Series", "pandas ghép theo nhãn: GDN: 6000 ÷ 18 = 333,3."],
				["Meta", "5000 ÷ 20 = 250."],
				["TikTok", "4000 ÷ 12 = 333,3."],
				["Tra một giá trị", "cpa[\"Meta\"] = 250. Tra theo nhãn không cần nhớ vị trí."]
			],
			say: "Chia theo vị trí cho Meta 277,8 thay vì 250 và GDN 300 thay vì 333,3, hai con số đều trông hợp lý. Series canh theo nhãn nên đúng dù thứ tự hai file khác nhau. Nếu một nhãn có ở một bên mà không có ở bên kia, kết quả là NaN, một dấu hiệu rõ ràng để dừng lại.",
			check: ["Nếu spend có thêm nhãn \"Zalo\" mà forms không có, spend / forms cho \"Zalo\" là gì?", "NaN (không có giá trị), vì không có form để chia. Kết quả này báo cho bạn thấy một kênh không khớp giữa hai file."]
		},
		en: {
			story: "The two channel files list channels in different orders (spend: Meta first, forms: GDN first). With NumPy arrays division would misalign channels. A Series aligns by label so it avoids this error.",
			words: [["Series", "A sequence of values with labels (an index), from the pandas library."], ["Label alignment", "A calculation pairs elements with the same label, not by position."]],
			problem: "forms = Series({\"GDN\": 18, \"Meta\": 20, \"TikTok\": 12}). spend = Series({\"Meta\": 5000, \"GDN\": 6000, \"TikTok\": 4000}) (different order). Compute spend / forms and compare with dividing by position.",
			steps: [
				["Divide by position (wrong)", "Pairs 5000/18, 6000/20, 4000/12 = 277.8; 300; 333.3. Meta and GDN are misaligned."],
				["Divide with Series", "pandas pairs by label: GDN: 6000 ÷ 18 = 333.3."],
				["Meta", "5000 ÷ 20 = 250."],
				["TikTok", "4000 ÷ 12 = 333.3."],
				["Look up one value", "cpa[\"Meta\"] = 250. Lookup by label needs no memory of positions."]
			],
			say: "Dividing by position gives Meta 277.8 instead of 250 and GDN 300 instead of 333.3, both plausible-looking. A Series aligns by label so it is right even when the two files are ordered differently. If a label exists on one side but not the other, the result is NaN, a clear sign to stop and look.",
			check: ["If spend has an extra label \"Zalo\" that forms lacks, what is spend / forms for \"Zalo\"?", "NaN (no value), because there are no forms to divide by. This result tells you a channel does not match across the two files."]
		}
	},
	"py-frame": {
		vi: {
			story: "Đến lúc đưa cả file 3 tuần × 3 kênh vào một bảng pandas (DataFrame): 9 dòng, mỗi dòng là một kênh trong một tuần, giống bảng gốc bạn đã gặp ở pivot của Excel.",
			words: [
				["DataFrame", "Bảng có dòng, cột và nhãn, từ pandas."],
				["loc", "Chọn theo nhãn, gồm cả điểm cuối."],
				["iloc", "Chọn theo vị trí, không gồm điểm cuối."],
				["groupby", "Gom các dòng theo một cột rồi tính tổng, đếm hoặc trung bình."]
			],
			problem: "Bảng 9 dòng (tuần, kênh, chi phí, form): GDN 6000 với form 18, 17, 19; Meta 5000 với 20, 21, 20; TikTok 4000 với 12, 12, 12. Tính shape, form tổng GDN, form theo kênh, và so loc với iloc cho hai dòng đầu.",
			steps: [
				["Kiểm tra kích thước", "df.shape = (9, 4): 9 dòng, 4 cột. 3 tuần × 3 kênh = 9, khớp."],
				["Form của GDN", "df.loc[df.kenh == \"GDN\", \"form\"].sum() = 18 + 17 + 19 = 54."],
				["Form theo kênh", "df.groupby(\"kenh\").form.sum(): GDN 54, Meta 20 + 21 + 20 = 61, TikTok 12 + 12 + 12 = 36."],
				["Kiểm tra tổng", "54 + 61 + 36 = 151 form trong 3 tuần, khớp với 50 + 50 + 51 theo tuần."],
				["iloc[0:2]", "Lấy vị trí 0 và 1, tức 2 dòng."],
				["loc[0:2]", "Chỉ số mặc định là 0, 1, 2 nên loc gồm cả điểm cuối: 3 dòng."]
			],
			say: "Hai lần nhớ nhầm là loc gồm điểm cuối còn iloc thì không: cùng viết [0:2] mà cho 3 dòng và 2 dòng. Kiểm tra shape và tổng sau mỗi bước (151 form) là cách phát hiện ngay lát cắt lấy nhầm.",
			check: ["df.loc[0:2] và df.iloc[0:2] khác nhau bao nhiêu dòng?", "Khác 1 dòng: loc lấy 3 dòng (0, 1, 2) còn iloc lấy 2 dòng (0, 1)."]
		},
		en: {
			story: "Time to bring the whole 3 weeks × 3 channels file into one pandas table (DataFrame): 9 rows, each one a channel in one week, like the source table you met in Excel's pivot.",
			words: [
				["DataFrame", "A table with rows, columns and labels, from pandas."],
				["loc", "Selects by label, including the end."],
				["iloc", "Selects by position, excluding the end."],
				["groupby", "Groups rows by a column and then sums, counts or averages."]
			],
			problem: "A 9-row table (week, channel, spend, forms): GDN 6000 with forms 18, 17, 19; Meta 5000 with 20, 21, 20; TikTok 4000 with 12, 12, 12. Compute shape, GDN's total forms, forms by channel, and compare loc with iloc for the first two rows.",
			steps: [
				["Check the size", "df.shape = (9, 4): 9 rows, 4 columns. 3 weeks × 3 channels = 9, matching."],
				["GDN's forms", "df.loc[df.channel == \"GDN\", \"forms\"].sum() = 18 + 17 + 19 = 54."],
				["Forms by channel", "df.groupby(\"channel\").forms.sum(): GDN 54, Meta 20 + 21 + 20 = 61, TikTok 12 + 12 + 12 = 36."],
				["Check the total", "54 + 61 + 36 = 151 forms in 3 weeks, matching 50 + 50 + 51 by week."],
				["iloc[0:2]", "Takes positions 0 and 1, i.e. 2 rows."],
				["loc[0:2]", "The default index is 0, 1, 2 so loc includes the end: 3 rows."]
			],
			say: "The two things people mix up are that loc includes the end while iloc does not: the same [0:2] gives 3 rows versus 2. Checking shape and the total after each step (151 forms) is how you spot a wrongly taken slice at once.",
			check: ["How many rows differ between df.loc[0:2] and df.iloc[0:2]?", "1 row: loc takes 3 rows (0, 1, 2) while iloc takes 2 rows (0, 1)."]
		}
	},
	"py-plot": {
		vi: {
			story: "Chị Lan muốn xem hình. Bạn dùng bảng pandas vừa tạo để vẽ hai biểu đồ, mỗi biểu đồ trả lời một câu hỏi khác nhau và phải có nhãn đủ để đọc mà không cần hỏi bạn.",
			words: [
				["Biểu đồ cột", "So sánh các nhóm rời nhau, như ba kênh."],
				["Biểu đồ đường", "Một số theo thời gian, như form theo tuần."],
				["Nhãn trục và đơn vị", "Chữ nói trục đang đo gì và bằng đơn vị nào."]
			],
			problem: "Từ bảng 9 dòng: (1) vẽ tổng form 3 tuần theo kênh (GDN 54, Meta 61, TikTok 36); (2) vẽ tổng form theo tuần (tuần 1 là 50, tuần 2 là 50, tuần 3 là 51). Chọn loại biểu đồ và nhãn cho từng cái.",
			steps: [
				["Câu hỏi 1: kênh nào nhiều nhất", "Ba nhóm rời nhau, dùng biểu đồ cột. Meta cao nhất (61)."],
				["Gắn nhãn câu 1", "Tiêu đề «Form theo kênh, 3 tuần», trục dọc «Số form»."],
				["Câu hỏi 2: tuần có đổi không", "Một số theo thời gian, dùng biểu đồ đường: 50, 50, 51."],
				["Gắn nhãn câu 2", "Trục ngang «Tuần», trục dọc «Số form tổng»."],
				["Kiểm tra số trong hình", "54 + 61 + 36 = 151 và 50 + 50 + 51 = 151. Hai hình dùng cùng một tổng."]
			],
			say: "Hai hình chia cùng 151 form theo hai cách khác nhau, nên khớp tổng với nhau. Một biểu đồ không có nhãn trục hay đơn vị không trả lời được câu hỏi, vì người xem không biết 61 là form, tiền hay tuần.",
			check: ["Vì sao không vẽ kênh bằng biểu đồ đường?", "Vì ba kênh không có thứ tự theo thời gian. Đường nối GDN, Meta, TikTok làm người xem tưởng có xu hướng từ trái sang phải, mà thực ra không có."]
		},
		en: {
			story: "Ms. Lan wants to see pictures. You use the pandas table you just built to draw two charts, each answering a different question, and each labelled enough to read without asking you.",
			words: [
				["Bar chart", "Compares separate groups, like three channels."],
				["Line chart", "One number over time, like forms by week."],
				["Axis label and unit", "Text saying what an axis measures and in what unit."]
			],
			problem: "From the 9-row table: (1) plot 3-week total forms by channel (GDN 54, Meta 61, TikTok 36); (2) plot total forms by week (week 1 is 50, week 2 is 50, week 3 is 51). Choose the chart type and labels for each.",
			steps: [
				["Question 1: which channel is most", "Three separate groups, use a bar chart. Meta is highest (61)."],
				["Label chart 1", "Title “Forms by channel, 3 weeks”, vertical axis “Number of forms”."],
				["Question 2: does the week change", "One number over time, use a line chart: 50, 50, 51."],
				["Label chart 2", "Horizontal axis “Week”, vertical axis “Total forms”."],
				["Check the numbers in the picture", "54 + 61 + 36 = 151 and 50 + 50 + 51 = 151. The two charts use the same total."]
			],
			say: "The two charts split the same 151 forms in two different ways, so their totals agree. A chart without axis labels or units cannot answer the question, because the viewer does not know whether 61 is forms, money or weeks.",
			check: ["Why not draw the channels as a line chart?", "Because the three channels have no order in time. A line joining GDN, Meta, TikTok makes viewers imagine a trend from left to right, when there is none."]
		}
	},
	"py-g1": {
		vi: {
			story: "Cuối tháng 2, bạn làm bài chấm phần cơ bản. Một câu hỏi rất giống những gì bạn đã làm với số form: lấy phần tử từ một danh sách.",
			words: [["Bài chấm", "Kiểm tra xem bạn dùng được ý cũ, không dạy ý mới."], ["Chỉ số từ 0", "Phần tử đầu tiên của danh sách có chỉ số 0."]],
			problem: "Một câu hỏi cho forms = [18, 17, 19, 20] và hỏi forms[1], forms[-1] và forms[1:3]. Giải bằng cách quay lại thẻ danh sách, không đoán đáp án.",
			steps: [
				["Nhớ lại luật chỉ số", "Chỉ số bắt đầu từ 0; âm đếm từ cuối; cắt đoạn lấy từ i đến trước j."],
				["forms[1]", "Chỉ số 1 là phần tử thứ hai: 17."],
				["forms[-1]", "Phần tử cuối: 20."],
				["forms[1:3]", "Lấy chỉ số 1 và 2 (không lấy 3): [17, 19]."],
				["Tự kiểm tra", "Thử đếm: vị trí 0 là 18, 1 là 17, 2 là 19, 3 là 20. Ba đáp án khớp bảng này."]
			],
			say: "Bài chấm không có mẹo mới: câu hỏi xoay quanh luật chỉ số mà bạn đã viết ra ở thẻ danh sách. Khi sai, hãy chỉ ra thẻ nào bị lệch (ở đây là «chỉ số từ 0») thay vì trách đề.",
			check: ["Nếu bạn trả lời forms[1] = 18, bạn nhầm ở đâu?", "Bạn đếm từ 1 thay vì từ 0. Phần tử 18 là forms[0]. Quay lại thẻ danh sách."]
		},
		en: {
			story: "At the end of February you take the basics graded assessment. One question looks a lot like what you have done with form counts: pull elements from a list.",
			words: [["Graded assessment", "Checks whether you can use the old ideas, teaches no new idea."], ["Index from 0", "The first element of a list has index 0."]],
			problem: "A question gives forms = [18, 17, 19, 20] and asks for forms[1], forms[-1] and forms[1:3]. Solve it by going back to the list card, not by guessing the answer.",
			steps: [
				["Recall the index rules", "Indexing starts at 0; negative counts from the end; a slice takes from i up to but not including j."],
				["forms[1]", "Index 1 is the second element: 17."],
				["forms[-1]", "The last element: 20."],
				["forms[1:3]", "Takes indexes 1 and 2 (not 3): [17, 19]."],
				["Check yourself", "Count: position 0 is 18, 1 is 17, 2 is 19, 3 is 20. All three answers match this table."]
			],
			say: "The assessment has no new trick: the question circles around the index rules you wrote down on the list card. When you get one wrong, point to which card slipped (here “index from 0”) instead of blaming the question.",
			check: ["If you answered forms[1] = 18, where did you go wrong?", "You counted from 1 instead of 0. The element 18 is forms[0]. Go back to the list card."]
		}
	},
	"py-g2": {
		vi: {
			story: "Bài chấm phần thư viện. Một câu yêu cầu lấy các dòng của bảng form theo nhãn. Bạn kiểm tra shape trước khi làm, như đã làm với bảng 9 dòng.",
			words: [["shape", "Số dòng và số cột của bảng. Kiểm tra trước khi tính."], ["loc và iloc", "loc theo nhãn gồm điểm cuối, iloc theo vị trí không gồm điểm cuối."]],
			problem: "Bảng 9 dòng với chỉ số mặc định 0 đến 8. Câu hỏi: lấy các dòng từ nhãn 0 đến nhãn 2. Dùng loc hay iloc và được bao nhiêu dòng?",
			steps: [
				["Kiểm tra shape", "df.shape = (9, 4). Đúng như mong đợi, nên tiếp tục."],
				["Đọc đề", "«Đến nhãn 2» là nói theo nhãn, nên dùng loc."],
				["Chạy df.loc[0:2]", "loc gồm cả điểm cuối: nhãn 0, 1, 2, được 3 dòng."],
				["Nếu viết iloc[0:2]", "Chỉ lấy vị trí 0 và 1: 2 dòng, thiếu một dòng."],
				["Kiểm tra", "Đếm lại: 3 dòng khớp với «từ 0 đến 2 gồm cả hai đầu»."]
			],
			say: "Hai điều cứu bạn: kiểm tra shape trước khi tính và nhớ loc gồm điểm cuối. Bài chấm không thêm thư viện mới, mà hỏi lại thẻ bảng.",
			check: ["Nếu shape ra (8, 4) thay vì (9, 4), nên làm gì tiếp?", "Dừng lại, không tính tiếp. Thiếu 1 dòng nghĩa là có thể đã bỏ mất một dòng khi đọc file. Tìm dòng thiếu trước khi vẽ hay tính tổng."]
		},
		en: {
			story: "The libraries graded assessment. One question asks you to take rows of the forms table by label. You check shape before starting, as you did with the 9-row table.",
			words: [["shape", "The table's number of rows and columns. Check it before calculating."], ["loc and iloc", "loc is by label and includes the end, iloc is by position and excludes the end."]],
			problem: "A 9-row table with the default index 0 to 8. The question: take the rows from label 0 to label 2. Use loc or iloc, and how many rows do you get?",
			steps: [
				["Check shape", "df.shape = (9, 4). As expected, so continue."],
				["Read the question", "“To label 2” speaks by label, so use loc."],
				["Run df.loc[0:2]", "loc includes the end: labels 0, 1, 2, giving 3 rows."],
				["If you wrote iloc[0:2]", "It takes only positions 0 and 1: 2 rows, one short."],
				["Check", "Count again: 3 rows matches “from 0 to 2 including both ends”."]
			],
			say: "Two things save you: check shape before calculating and remember that loc includes the end. The assessment adds no new library; it asks again about the table card.",
			check: ["If shape shows (8, 4) instead of (9, 4), what next?", "Stop; do not calculate further. A missing row means one may have been dropped while reading the file. Find the missing row before plotting or summing."]
		}
	}
};
var visuals$2 = {
	"py-run": {
		kind: "table",
		title: ["Notebook sau khi sửa forms nhưng chưa chạy lại ô 2", "Notebook after editing forms but not re-running cell 2"],
		head: [["Biến", "Variable"], ["Giá trị trong bộ nhớ", "Value in memory"]],
		rows: [["forms", 54], ["cpa", 300]],
		mark: [[1, 1]],
		note: ["cpa vẫn là giá trị cũ (300), chưa khớp với forms = 54.", "cpa is still the old value (300), no longer matching forms = 54."]
	},
	"py-op": {
		kind: "table",
		title: ["15000 chia cho 54", "15000 divided by 54"],
		head: [["Phép toán", "Operation"], ["Kết quả", "Result"]],
		rows: [
			["15000 / 54", "277.78"],
			["15000 // 54", 277],
			["15000 % 54", 42]
		],
		mark: [[0, 1]]
	},
	"py-if": {
		kind: "bars",
		title: ["CPA ba kênh (nghìn đồng) và ngưỡng 300", "CPA of three channels (thousand dong) vs threshold 300"],
		items: [
			{
				label: ["GDN", "GDN"],
				value: 333.3
			},
			{
				label: ["Meta", "Meta"],
				value: 250
			},
			{
				label: ["TikTok", "TikTok"],
				value: 333.3
			}
		],
		note: ["GDN và TikTok vượt 300 nên được gắn «xem lại».", "GDN and TikTok exceed 300 so they are labelled “review”."]
	},
	"py-loop": {
		kind: "table",
		title: ["Biến total qua từng vòng", "The variable total through each round"],
		head: [
			["Vòng", "Round"],
			["f", "f"],
			["total sau vòng", "total after round"]
		],
		rows: [
			[
				1,
				18,
				18
			],
			[
				2,
				20,
				38
			],
			[
				3,
				12,
				50
			]
		],
		mark: [[2, 2]]
	},
	"py-list": {
		kind: "table",
		title: ["gdn = [18, 17, 19]", "gdn = [18, 17, 19]"],
		head: [
			["Chỉ số", "Index"],
			["Giá trị", "Value"],
			["Tuần", "Week"]
		],
		rows: [
			[
				0,
				18,
				1
			],
			[
				1,
				17,
				2
			],
			[
				2,
				19,
				3
			]
		],
		note: ["gdn[-1] là phần tử cuối (19). gdn[0:2] lấy hàng 0 và 1.", "gdn[-1] is the last element (19). gdn[0:2] takes rows 0 and 1."]
	},
	"py-ser": {
		kind: "bars",
		title: ["CPA theo nhãn (nghìn đồng)", "CPA by label (thousand dong)"],
		items: [
			{
				label: ["GDN", "GDN"],
				value: 333.3
			},
			{
				label: ["Meta", "Meta"],
				value: 250
			},
			{
				label: ["TikTok", "TikTok"],
				value: 333.3
			}
		]
	},
	"py-frame": {
		kind: "table",
		title: ["DataFrame: 3 tuần × 3 kênh (9 dòng)", "DataFrame: 3 weeks × 3 channels (9 rows)"],
		head: [
			["tuần", "week"],
			["kênh", "channel"],
			["chi phí", "spend"],
			["form", "forms"]
		],
		rows: [
			[
				1,
				"GDN",
				6e3,
				18
			],
			[
				1,
				"Meta",
				5e3,
				20
			],
			[
				1,
				"TikTok",
				4e3,
				12
			],
			[
				2,
				"GDN",
				6e3,
				17
			],
			[
				2,
				"Meta",
				5e3,
				21
			],
			[
				2,
				"TikTok",
				4e3,
				12
			],
			[
				3,
				"GDN",
				6e3,
				19
			],
			[
				3,
				"Meta",
				5e3,
				20
			],
			[
				3,
				"TikTok",
				4e3,
				12
			]
		],
		mark: [
			[0, 3],
			[3, 3],
			[6, 3]
		],
		note: ["Các ô sáng là form GDN: 18 + 17 + 19 = 54.", "Highlighted cells are GDN forms: 18 + 17 + 19 = 54."]
	},
	"py-plot": {
		kind: "bars",
		title: ["Form theo kênh, 3 tuần", "Forms by channel, 3 weeks"],
		items: [
			{
				label: ["GDN", "GDN"],
				value: 54
			},
			{
				label: ["Meta", "Meta"],
				value: 61
			},
			{
				label: ["TikTok", "TikTok"],
				value: 36
			}
		],
		note: ["Tổng 151 form, cùng tổng với 50 + 50 + 51 theo tuần.", "Total 151 forms, the same as 50 + 50 + 51 by week."]
	}
};
var c1Walks = Object.fromEntries(Object.entries(base$2).map(([id, w]) => [id, visuals$2[id] ? {
	...w,
	visual: visuals$2[id]
} : w]));
/** Toán cho khoa học dữ liệu. Tháng 3 ở Lotus Spa: mọi phép toán đều tính trên số form, chi phí, giá gói của spa. */
var base$1 = {
	"math-vec": {
		vi: {
			story: "Tháng 3. Chị Lan hỏi: «Em hay nói tới mô hình, mà bên trong nó là gì?» Bạn bắt đầu từ khối nhỏ nhất: một dãy số có thứ tự, chính là số form tuần này theo ba kênh.",
			words: [["Véctơ", "Một danh sách số có thứ tự. Vị trí có nghĩa: ô đầu là GDN, ô hai là Meta, ô ba là TikTok."], ["Chiều", "Số ô của véctơ. Véctơ ba ô có chiều 3."]],
			problem: "Tuần này form theo kênh là GDN 18, Meta 20, TikTok 12. Viết thành véctơ, đọc từng ô, và cho biết nếu đảo thứ tự hai ô đầu thì điều gì xảy ra.",
			steps: [
				["Viết véctơ", "f = (18, 20, 12). Chiều là 3 vì có ba kênh."],
				["Đọc từng ô", "Ô thứ hai là 20, tức Meta. Vị trí gắn với kênh."],
				["Đảo hai ô đầu", "(20, 18, 12) là một véctơ khác: bây giờ GDN trông như có 20 form."],
				["Tổng các ô", "18 + 20 + 12 = 50, bằng số form mỗi tuần của spa."]
			],
			say: "Véctơ không phải một nhóm số lộn xộn: thứ tự là một phần của nó. Đảo hai ô là đổi ý nghĩa, và máy sẽ không báo lỗi. Mọi dòng dữ liệu của mô hình về sau đều là một véctơ như vậy.",
			check: ["(18, 20) và (18, 20, 12) có phải cùng một véctơ không?", "Không. Chiều khác nhau (2 và 3). Hai véctơ chỉ bằng nhau khi cùng chiều và từng ô bằng nhau."]
		},
		en: {
			story: "March. Ms. Lan asks: “You keep saying model, but what is inside it?” You start from the smallest block: an ordered list of numbers, namely this week's forms by channel.",
			words: [["Vector", "An ordered list of numbers. Position carries meaning: first slot is GDN, second is Meta, third is TikTok."], ["Dimension", "The number of slots in the vector. A three-slot vector has dimension 3."]],
			problem: "This week's forms by channel are GDN 18, Meta 20, TikTok 12. Write it as a vector, read each slot, and say what happens if you swap the first two slots.",
			steps: [
				["Write the vector", "f = (18, 20, 12). The dimension is 3 because there are three channels."],
				["Read each slot", "The second slot is 20, i.e. Meta. Position ties to channel."],
				["Swap the first two slots", "(20, 18, 12) is a different vector: now GDN looks as if it had 20 forms."],
				["Sum the slots", "18 + 20 + 12 = 50, equal to the spa's weekly forms."]
			],
			say: "A vector is not a jumble of numbers: order is part of it. Swapping two slots changes the meaning, and the machine will not warn you. Every data row a model sees later is a vector like this.",
			check: ["Are (18, 20) and (18, 20, 12) the same vector?", "No. Their dimensions differ (2 and 3). Two vectors are equal only when they have the same dimension and every slot is equal."]
		}
	},
	"math-add": {
		vi: {
			story: "Bạn có form tuần 1 và tuần 2 của ba kênh và cần gộp chúng, chính là phép gom mà pivot Excel đã làm ở tháng 1, nhưng bây giờ thấy nó là phép cộng véctơ.",
			words: [["Cộng véctơ", "Cộng từng ô cùng vị trí."], ["Nhân với một số", "Nhân mọi ô với số đó."]],
			problem: "Tuần 1: (18, 20, 12). Tuần 2: (17, 21, 12). Tính tổng hai tuần, và tính cả tháng nếu 4 tuần đều giống tuần 1 (nhân 4).",
			steps: [
				["Cộng từng ô", "(18+17, 20+21, 12+12) = (35, 41, 24)."],
				["Đối chiếu pivot", "35, 41, 24 chính là tổng form theo kênh bạn đã có ở Excel."],
				["Nhân tuần 1 với 4", "4 × (18, 20, 12) = (72, 80, 48)."],
				["Kiểm tra tổng", "72 + 80 + 48 = 200 = 4 × 50."]
			],
			say: "Cộng véctơ chỉ ghép cùng vị trí: GDN cộng GDN. Không có phép cộng ô GDN với ô Meta. Nhân với một số là phóng to cả véctơ, nên tỷ lệ giữa các kênh không đổi (vẫn 18:20:12).",
			check: ["Có cộng được (18, 20, 12) với (17, 21) không?", "Không. Hai véctơ khác chiều nên không có cách ghép từng ô. Thiếu một kênh trong tuần 2 phải bổ sung trước."]
		},
		en: {
			story: "You have week 1 and week 2 forms for three channels and need to combine them, the same grouping Excel's pivot did in January, but now you see it as vector addition.",
			words: [["Vector addition", "Add the slots in the same position."], ["Scalar multiplication", "Multiply every slot by that number."]],
			problem: "Week 1: (18, 20, 12). Week 2: (17, 21, 12). Compute the two-week total, and the month if all 4 weeks looked like week 1 (multiply by 4).",
			steps: [
				["Add slot by slot", "(18+17, 20+21, 12+12) = (35, 41, 24)."],
				["Match the pivot", "35, 41, 24 are exactly the forms-by-channel totals you had in Excel."],
				["Multiply week 1 by 4", "4 × (18, 20, 12) = (72, 80, 48)."],
				["Check the total", "72 + 80 + 48 = 200 = 4 × 50."]
			],
			say: "Vector addition pairs the same position only: GDN with GDN. There is no adding GDN's slot to Meta's. Multiplying by a number scales the whole vector, so the ratio between channels does not change (still 18:20:12).",
			check: ["Can you add (18, 20, 12) to (17, 21)?", "No. The vectors have different dimensions so there is no slot-by-slot pairing. The channel missing from week 2 must be supplied first."]
		}
	},
	"math-dot": {
		vi: {
			story: "Chị Lan hỏi: «Tổng 15 triệu chi quảng cáo ra từ đâu?» Bạn chứng minh bằng tích vô hướng: form mỗi kênh nhân CPA mỗi kênh rồi cộng lại phải về 15 triệu.",
			words: [["Tích vô hướng", "Nhân từng cặp ô cùng vị trí rồi cộng tất cả lại, kết quả là một con số."]],
			problem: "Form: (18, 20, 12). CPA (triệu mỗi form): (1/3, 1/4, 1/3), tức 333 nghìn, 250 nghìn, 333 nghìn. Tính tích vô hướng và giải thích ý nghĩa.",
			steps: [
				["Nhân từng cặp", "18 × 1/3 = 6; 20 × 1/4 = 5; 12 × 1/3 = 4."],
				["Cộng lại", "6 + 5 + 4 = 15."],
				["Đọc kết quả", "15 triệu, đúng bằng tổng chi mỗi tuần. Mỗi số hạng (6, 5, 4) là chi phí của một kênh."],
				["Thử đổi hướng", "Với form (0, 0, 50) (toàn bộ dồn cho TikTok) ta được 50 × 1/3 ≈ 16,7."]
			],
			say: "Tích vô hướng cho một con số: tổng của «số lượng nhân giá». Khi hai véctơ cùng hướng thì con số lớn, ví dụ dồn form vào kênh đắt thì tổng chi lên 16,7. Phép này sẽ quay lại trong mọi mô hình dưới dạng «trọng số nhân đặc trưng».",
			check: ["Tích vô hướng của (18, 20, 12) với (1, 1, 1) là gì?", "18 + 20 + 12 = 50. Nhân với 1 ở mọi ô thì chỉ còn cộng, cho tổng form."]
		},
		en: {
			story: "Ms. Lan asks: “Where does the 15 million ad spend come from?” You show it with a dot product: each channel's forms times its CPA, summed, must come back to 15 million.",
			words: [["Dot product", "Multiply each pair of slots in the same position, then add everything up; the result is a single number."]],
			problem: "Forms: (18, 20, 12). CPA (million per form): (1/3, 1/4, 1/3), i.e. 333 thousand, 250 thousand, 333 thousand. Compute the dot product and explain its meaning.",
			steps: [
				["Multiply each pair", "18 × 1/3 = 6; 20 × 1/4 = 5; 12 × 1/3 = 4."],
				["Add up", "6 + 5 + 4 = 15."],
				["Read the result", "15 million, exactly the weekly spend. Each term (6, 5, 4) is one channel's cost."],
				["Try changing direction", "With forms (0, 0, 50) (everything piled on TikTok) we get 50 × 1/3 ≈ 16.7."]
			],
			say: "A dot product gives one number: the sum of “quantity times price”. When two vectors point the same way the number is big, for example piling forms onto the expensive channel lifts total spend to 16.7. This operation returns in every model as “weight times feature”.",
			check: ["What is the dot product of (18, 20, 12) with (1, 1, 1)?", "18 + 20 + 12 = 50. Multiplying by 1 in every slot leaves only the addition, giving total forms."]
		}
	},
	"math-mat": {
		vi: {
			story: "Bạn muốn một «máy» nhận véctơ form theo kênh và trả hai thứ cùng lúc: tổng form và tổng chi. Máy đó là một ma trận.",
			words: [["Ma trận", "Bảng số có hàng và cột. Nhân nó với một véctơ để ra một véctơ mới."], ["Kích thước", "Số hàng × số cột, ví dụ 2 × 3."]],
			problem: "Ma trận M có hai hàng: hàng 1 là (1, 1, 1), hàng 2 là (1/3, 1/4, 1/3). Nhân M với form f = (18, 20, 12).",
			steps: [
				["Kiểm tra kích thước", "M là 2 × 3, f có 3 ô. Số cột của M (3) khớp số ô của f (3) nên nhân được."],
				["Hàng 1 nhân f", "1×18 + 1×20 + 1×12 = 50 (tổng form)."],
				["Hàng 2 nhân f", "18/3 + 20/4 + 12/3 = 6 + 5 + 4 = 15 (tổng chi, triệu)."],
				["Đọc đầu ra", "Mf = (50, 15): từ ba số vào ra hai số, một ma trận đã đổi véctơ ba chiều thành véctơ hai chiều."]
			],
			say: "Mỗi hàng của ma trận là một «câu hỏi» đặt cho véctơ đầu vào, và đáp án là một ô của đầu ra. Ma trận 2 × 3 biến véctơ ba chiều thành hai chiều. Nếu số cột và số ô không khớp thì phép nhân không tồn tại.",
			check: ["Có nhân được M (2×3) với véctơ hai ô không?", "Không. Số cột của M là 3 còn véctơ có 2 ô, không khớp. Phải đủ 3 ô, một cho mỗi kênh."]
		},
		en: {
			story: "You want a “machine” that takes the forms-by-channel vector and returns two things at once: total forms and total spend. That machine is a matrix.",
			words: [["Matrix", "A table of numbers with rows and columns. Multiply it by a vector to get a new vector."], ["Size", "Rows × columns, for example 2 × 3."]],
			problem: "Matrix M has two rows: row 1 is (1, 1, 1), row 2 is (1/3, 1/4, 1/3). Multiply M by the forms f = (18, 20, 12).",
			steps: [
				["Check the size", "M is 2 × 3, f has 3 slots. M's columns (3) match f's slots (3), so you can multiply."],
				["Row 1 times f", "1×18 + 1×20 + 1×12 = 50 (total forms)."],
				["Row 2 times f", "18/3 + 20/4 + 12/3 = 6 + 5 + 4 = 15 (total spend, million)."],
				["Read the output", "Mf = (50, 15): three numbers in, two out, one matrix turning a three-dimensional vector into a two-dimensional one."]
			],
			say: "Each row of the matrix is a “question” put to the input vector, and the answer is one slot of the output. A 2 × 3 matrix turns a three-dimensional vector into a two-dimensional one. If the columns and slots do not match, the product does not exist.",
			check: ["Can you multiply M (2×3) by a vector with two slots?", "No. M has 3 columns while the vector has 2 slots, which do not match. It needs 3 slots, one per channel."]
		}
	},
	"math-mul": {
		vi: {
			story: "Bạn muốn làm cho hai tuần một lần: bảng form hai tuần nhân với ma trận (tổng form, tổng chi). Hai bước ma trận gộp thành một.",
			words: [["Nhân ma trận", "Ô (i, j) của kết quả là hàng i của ma trận trái nhân vô hướng với cột j của ma trận phải."], ["Quy tắc kích thước", "(m × n) nhân (n × p) cho (m × p)."]],
			problem: "A (2×3) là form hai tuần: hàng 1 (18, 20, 12), hàng 2 (17, 21, 12). B (3×2) có cột 1 là (1, 1, 1) và cột 2 là CPA (1/3, 1/4, 1/3). Tính AB.",
			steps: [
				["Kích thước", "(2×3)(3×2) cho (2×2): khớp vì 3 = 3."],
				["Ô (1,1)", "Hàng 1 của A với cột 1 của B: 18+20+12 = 50."],
				["Ô (1,2)", "Hàng 1 với cột 2: 18/3 + 20/4 + 12/3 = 15."],
				["Ô (2,1) và (2,2)", "Hàng 2: 17+21+12 = 50; 17/3 + 21/4 + 12/3 ≈ 5,67 + 5,25 + 4 = 14,92."],
				["Kết quả", "AB = [[50, 15], [50, 14,92]]: mỗi tuần có tổng form và chi phí dự kiến theo CPA cũ."]
			],
			say: "Kết quả 2×2 trả lời cả hai tuần và cả hai câu hỏi trong một lần. Tuần 2 chi 14,92 (dự kiến) so với 15 thật, một chênh lệch nhỏ nhưng đáng xem lại. Thứ tự quan trọng: BA có kích thước (3×3) và nghĩa khác.",
			check: ["AB và BA có bằng nhau không?", "Không. AB là 2×2 còn BA là 3×3, kích thước đã khác. Nhân ma trận nói chung không giao hoán."]
		},
		en: {
			story: "You want to do two weeks at once: the two-week forms table multiplied by the matrix (total forms, total spend). Two matrix steps merge into one.",
			words: [["Matrix product", "Cell (i, j) of the result is row i of the left matrix dotted with column j of the right matrix."], ["Size rule", "(m × n) times (n × p) gives (m × p)."]],
			problem: "A (2×3) is the two-week forms: row 1 (18, 20, 12), row 2 (17, 21, 12). B (3×2) has column 1 = (1, 1, 1) and column 2 = CPA (1/3, 1/4, 1/3). Compute AB.",
			steps: [
				["Sizes", "(2×3)(3×2) gives (2×2): it matches because 3 = 3."],
				["Cell (1,1)", "Row 1 of A with column 1 of B: 18+20+12 = 50."],
				["Cell (1,2)", "Row 1 with column 2: 18/3 + 20/4 + 12/3 = 15."],
				["Cells (2,1) and (2,2)", "Row 2: 17+21+12 = 50; 17/3 + 21/4 + 12/3 ≈ 5.67 + 5.25 + 4 = 14.92."],
				["Result", "AB = [[50, 15], [50, 14.92]]: each week gets total forms and the spend expected at the old CPA."]
			],
			say: "The 2×2 result answers both weeks and both questions in one go. Week 2 expects 14.92 spend against 15 actual, a small gap but worth a look. Order matters: BA has size (3×3) and a different meaning.",
			check: ["Are AB and BA equal?", "No. AB is 2×2 while BA is 3×3, already different sizes. Matrix multiplication is generally not commutative."]
		}
	},
	"math-det": {
		vi: {
			story: "Một thử nghiệm cho thấy form TikTok luôn bằng đúng 2/3 form GDN mỗi tuần. Bạn muốn biết hai kênh này còn mang hai thông tin hay chỉ một. Định thức trả lời.",
			words: [["Định thức", "Một con số của ma trận vuông cho biết nó phóng to hay thu nhỏ diện tích bao nhiêu lần. Bằng 0 là ép dẹp."], ["Ép dẹp", "Hai hướng độc lập bị dồn về một đường, không còn đảo ngược được."]],
			problem: "Hai tuần, hai kênh GDN và TikTok. Trường hợp 1: [[18, 12], [27, 18]] (TikTok luôn 2/3 GDN). Trường hợp 2: [[18, 12], [17, 12]]. Tính định thức ad − bc cho từng trường hợp.",
			steps: [
				["Công thức", "Với [[a, b], [c, d]], định thức = a×d − b×c."],
				["Trường hợp 1", "18×18 − 12×27 = 324 − 324 = 0."],
				["Trường hợp 2", "18×12 − 12×17 = 216 − 204 = 12."],
				["Đọc kết quả", "0 nghĩa là hai cột tỷ lệ: biết GDN thì biết luôn TikTok, ma trận không đảo ngược được. 12 khác 0 nên hai kênh còn độc lập."]
			],
			say: "Định thức bằng 0 là cảnh báo cho bạn biết hai cột chỉ là một thông tin được viết hai lần. Đưa cả hai vào mô hình hồi quy sẽ làm hệ số bất ổn. Ở bài hồi quy sau này bạn sẽ gặp lại đúng vấn đề này dưới tên đa cộng tuyến.",
			check: ["Nếu định thức bằng 0, hệ phương trình có đúng một nghiệm không?", "Không. Hoặc vô nghiệm hoặc vô số nghiệm, vì không còn đảo ngược ma trận để suy ra nghiệm duy nhất."]
		},
		en: {
			story: "An experiment shows TikTok forms are always exactly 2/3 of GDN's each week. You want to know whether these two channels still carry two pieces of information or just one. The determinant answers.",
			words: [["Determinant", "A number from a square matrix saying how many times it scales area. Zero means flattened."], ["Flattened", "Two independent directions are squashed onto one line and can no longer be reversed."]],
			problem: "Two weeks, two channels GDN and TikTok. Case 1: [[18, 12], [27, 18]] (TikTok always 2/3 of GDN). Case 2: [[18, 12], [17, 12]]. Compute the determinant ad − bc for each.",
			steps: [
				["Formula", "For [[a, b], [c, d]], determinant = a×d − b×c."],
				["Case 1", "18×18 − 12×27 = 324 − 324 = 0."],
				["Case 2", "18×12 − 12×17 = 216 − 204 = 12."],
				["Read the result", "0 means the two columns are proportional: know GDN and you know TikTok, and the matrix cannot be reversed. 12 is not 0 so the two channels are still independent."]
			],
			say: "A determinant of 0 warns you that two columns are one piece of information written twice. Feeding both into a regression makes coefficients unstable. You will meet exactly this problem later in regression under the name multicollinearity.",
			check: ["If the determinant is 0, does the system of equations have exactly one solution?", "No. Either none or infinitely many, because the matrix can no longer be reversed to deduce a single solution."]
		}
	},
	"math-sys": {
		vi: {
			story: "Chị Lan quên giá hai gói. Bạn chỉ có doanh thu của hai ngày ở Quận 1 và số gói bán ra, và phải suy ngược giá. Đó là hệ hai phương trình.",
			words: [["Hệ phương trình tuyến tính", "Nhiều phương trình cùng lúc, tìm giá trị biến thỏa tất cả."], ["Khử", "Nhân và trừ để mất một biến, còn lại một biến."]],
			problem: "Ngày A bán 10 gói 60 phút (giá x) và 5 gói 90 phút (giá y), thu 5.500 nghìn. Ngày B bán 8 gói 60 phút và 10 gói 90 phút, thu 7.400 nghìn. Tìm x và y.",
			steps: [
				["Viết hệ", "10x + 5y = 5500 và 8x + 10y = 7400."],
				["Nhân phương trình 1 với 2", "20x + 10y = 11000."],
				["Trừ phương trình 2", "(20x + 10y) − (8x + 10y) = 11000 − 7400 nên 12x = 3600, x = 300."],
				["Thế vào phương trình 1", "10 × 300 + 5y = 5500 nên 5y = 2500, y = 500."],
				["Kiểm tra bằng phương trình 2", "8 × 300 + 10 × 500 = 2400 + 5000 = 7400 ✓."]
			],
			say: "Giá gói 60 phút là 300 nghìn, gói 90 phút là 500 nghìn. Hai phương trình cho đúng một điểm giao. Kiểm tra bằng phương trình còn lại là bước không được bỏ, vì tính nhầm một bước vẫn cho một đáp án trông hợp lý.",
			check: ["Nếu ngày B bán 20 gói 60 phút và 10 gói 90 phút (gấp đôi ngày A) thì hệ có nghiệm duy nhất không?", "Không. Phương trình B là gấp đôi phương trình A, cho cùng thông tin nên không tìm được giá riêng từng gói (định thức bằng 0)."]
		},
		en: {
			story: "Ms. Lan forgot the prices of two packages. You only have revenue for two days at District 1 and packages sold, and must work the prices backwards. That is a system of two equations.",
			words: [["System of linear equations", "Several equations at once; find values of the unknowns that satisfy all."], ["Elimination", "Multiply and subtract to remove one unknown, leaving one."]],
			problem: "Day A sold 10 packages of 60 minutes (price x) and 5 of 90 minutes (price y), taking 5,500 thousand. Day B sold 8 of 60 minutes and 10 of 90 minutes, taking 7,400 thousand. Find x and y.",
			steps: [
				["Write the system", "10x + 5y = 5500 and 8x + 10y = 7400."],
				["Multiply equation 1 by 2", "20x + 10y = 11000."],
				["Subtract equation 2", "(20x + 10y) − (8x + 10y) = 11000 − 7400 so 12x = 3600, x = 300."],
				["Substitute into equation 1", "10 × 300 + 5y = 5500 so 5y = 2500, y = 500."],
				["Check with equation 2", "8 × 300 + 10 × 500 = 2400 + 5000 = 7400 ✓."]
			],
			say: "The 60-minute package costs 300 thousand, the 90-minute 500 thousand. The two equations give exactly one intersection. Checking with the other equation is a step you must not skip, because one slip still gives a plausible-looking answer.",
			check: ["If day B sold 20 packages of 60 minutes and 10 of 90 (double day A), is there a unique solution?", "No. Equation B is twice equation A, giving the same information so the individual prices cannot be found (determinant is 0)."]
		}
	},
	"math-ls": {
		vi: {
			story: "Thử nghiệm TikTok ba mức ngân sách cho ra ba điểm (3, 10), (4, 12), (5, 13): triệu đồng và form. Ba điểm không nằm trên một đường thẳng, nên hệ vô nghiệm. Bạn chọn đường lệch ít nhất.",
			words: [["Phần dư", "Chênh lệch giữa điểm thật và điểm trên đường."], ["Bình phương tối thiểu", "Chọn đường làm tổng bình phương phần dư nhỏ nhất."]],
			problem: "Ba điểm (3, 10), (4, 12), (5, 13). Tìm đường thẳng y = a + bx lệch ít nhất và tính các phần dư.",
			steps: [
				["Trung bình", "x̄ = (3+4+5)/3 = 4; ȳ = (10+12+13)/3 = 35/3 ≈ 11,67."],
				["Độ dốc b", "Σ(x−4)(y−ȳ) = (−1)(−1,67) + 0 + (1)(1,33) = 3; Σ(x−4)² = 2; b = 3/2 = 1,5."],
				["Hệ số chặn a", "a = ȳ − b×x̄ = 11,67 − 6 = 5,67."],
				["Dự đoán và phần dư", "x=3: 10,17 (dư −0,17). x=4: 11,67 (dư +0,33). x=5: 13,17 (dư −0,17)."],
				["Kiểm tra", "Tổng phần dư = −0,17 + 0,33 − 0,17 = 0 ✓; tổng bình phương ≈ 0,03 + 0,11 + 0,03 = 0,17."]
			],
			say: "Mỗi triệu thêm cho TikTok cho trung bình 1,5 form thêm. Không đường nào đi qua cả ba điểm, và đường này nhỏ nhất ở nghĩa tổng bình phương lệch. Tổng phần dư luôn bằng 0 là dấu hiệu bạn tính đúng. Đây chính là hồi quy tuyến tính ở C3.",
			check: ["Nếu bạn dùng tổng phần dư (không bình phương) làm tiêu chí thì có vấn đề gì?", "Phần dư dương và âm triệt tiêu nhau, nên nhiều đường khác nhau đều có tổng 0. Bình phương làm mọi sai lệch cùng dấu và chỉ ra một đường duy nhất."]
		},
		en: {
			story: "A TikTok test at three budget levels gives three points (3, 10), (4, 12), (5, 13): million dong and forms. The three points do not lie on one line, so the system has no solution. You pick the line that misses least.",
			words: [["Residual", "The difference between a real point and the point on the line."], ["Least squares", "Choose the line that makes the sum of squared residuals smallest."]],
			problem: "Three points (3, 10), (4, 12), (5, 13). Find the line y = a + bx that misses least and compute the residuals.",
			steps: [
				["Means", "x̄ = (3+4+5)/3 = 4; ȳ = (10+12+13)/3 = 35/3 ≈ 11.67."],
				["Slope b", "Σ(x−4)(y−ȳ) = (−1)(−1.67) + 0 + (1)(1.33) = 3; Σ(x−4)² = 2; b = 3/2 = 1.5."],
				["Intercept a", "a = ȳ − b×x̄ = 11.67 − 6 = 5.67."],
				["Predictions and residuals", "x=3: 10.17 (residual −0.17). x=4: 11.67 (+0.33). x=5: 13.17 (−0.17)."],
				["Check", "Sum of residuals = −0.17 + 0.33 − 0.17 = 0 ✓; sum of squares ≈ 0.03 + 0.11 + 0.03 = 0.17."]
			],
			say: "Each extra million for TikTok gives on average 1.5 more forms. No line passes through all three points, and this line is smallest in the sense of total squared miss. A residual sum of exactly 0 is a sign you computed correctly. This is exactly linear regression in C3.",
			check: ["What goes wrong if you use the sum of residuals (not squared) as the criterion?", "Positive and negative residuals cancel, so many different lines have a sum of 0. Squaring makes every miss the same sign and points to a single line."]
		}
	},
	"math-eig": {
		vi: {
			story: "Bạn thấy hai kênh GDN và Meta ảnh hưởng lẫn nhau: tăng một bên kéo bên kia. Bạn tìm hướng mà phép biến đổi chỉ kéo giãn mà không xoay.",
			words: [["Vectơ riêng", "Hướng không bị xoay khi nhân với ma trận, chỉ bị kéo giãn."], ["Trị riêng", "Hệ số kéo giãn tương ứng."]],
			problem: "Ma trận A = [[2, 1], [1, 2]] mô tả hai kênh ảnh hưởng lẫn nhau. Thử véctơ (1, 1) và (1, −1), và tìm trị riêng.",
			steps: [
				["Nhân A với (1, 1)", "(2×1 + 1×1, 1×1 + 2×1) = (3, 3) = 3 × (1, 1)."],
				["Đọc", "Cùng hướng với (1, 1), chỉ lớn gấp 3. Vậy (1, 1) là vectơ riêng, trị riêng 3."],
				["Nhân A với (1, −1)", "(2×1 + 1×(−1), 1×1 + 2×(−1)) = (1, −1) = 1 × (1, −1)."],
				["Đọc", "(1, −1) cũng là vectơ riêng, trị riêng 1."],
				["Thử một hướng khác", "A(1, 0) = (2, 1), không cùng hướng với (1, 0): hướng này bị xoay, nên không phải vectơ riêng."]
			],
			say: "Hai hướng đặc biệt: cả hai kênh cùng tăng (kéo giãn gấp 3) và hai kênh ngược chiều (giữ nguyên). Mọi hướng khác là sự pha trộn của hai hướng này. Ý tưởng này nằm sau PCA ở khóa sau.",
			check: ["Nếu trị riêng của một hướng là 0 thì ma trận làm gì với hướng đó?", "Ép nó thành véctơ không, tức là dẹp bỏ hoàn toàn hướng đó (cũng là lúc định thức bằng 0)."]
		},
		en: {
			story: "You notice GDN and Meta influence each other: raising one pulls the other. You look for the direction in which the transformation only stretches and does not rotate.",
			words: [["Eigenvector", "A direction that is not rotated when multiplied by the matrix, only stretched."], ["Eigenvalue", "The corresponding stretch factor."]],
			problem: "Matrix A = [[2, 1], [1, 2]] describes two channels influencing each other. Try the vectors (1, 1) and (1, −1), and find the eigenvalues.",
			steps: [
				["Multiply A by (1, 1)", "(2×1 + 1×1, 1×1 + 2×1) = (3, 3) = 3 × (1, 1)."],
				["Read", "Same direction as (1, 1), just 3 times as large. So (1, 1) is an eigenvector with eigenvalue 3."],
				["Multiply A by (1, −1)", "(2×1 + 1×(−1), 1×1 + 2×(−1)) = (1, −1) = 1 × (1, −1)."],
				["Read", "(1, −1) is also an eigenvector, eigenvalue 1."],
				["Try another direction", "A(1, 0) = (2, 1), not the same direction as (1, 0): this direction is rotated, so it is not an eigenvector."]
			],
			say: "Two special directions: both channels rising together (stretched 3 times) and the two channels moving opposite (unchanged). Every other direction is a blend of these two. This idea sits behind PCA in a later course.",
			check: ["If an eigenvalue is 0, what does the matrix do to that direction?", "It crushes it to the zero vector, i.e. removes that direction entirely (which is also when the determinant is 0)."]
		}
	},
	"math-deriv": {
		vi: {
			story: "Chị Lan hỏi: «Cứ thêm tiền TikTok thì có thêm form mãi không?» Bạn mô hình hóa form theo ngân sách bằng f(x) = −0,5x² + 5x (x là triệu), khớp với f(4) = 12 hiện tại.",
			words: [["Đạo hàm", "Độ dốc của đường tại một điểm: thêm một chút đầu vào thì đầu ra đổi bao nhiêu."], ["Tiếp tuyến", "Đường thẳng chạm đường cong tại đúng một điểm với cùng độ dốc."]],
			problem: "f(x) = −0,5x² + 5x. Tính f(4) rồi đạo hàm f'(x) = −x + 5 tại x = 3, 4, 5 và đọc ý nghĩa.",
			steps: [
				["Giá trị tại 4", "f(4) = −0,5×16 + 20 = 12 form, đúng với thực tế."],
				["Độ dốc tại 3", "f'(3) = −3 + 5 = 2: thêm 1 triệu cho thêm khoảng 2 form."],
				["Độ dốc tại 4", "f'(4) = −4 + 5 = 1: thêm 1 triệu chỉ thêm khoảng 1 form."],
				["Độ dốc tại 5", "f'(5) = −5 + 5 = 0: đã đến chỗ phẳng, thêm tiền gần như không thêm form."],
				["Kiểm tra bằng số thật", "f(5) − f(4) = 12,5 − 12 = 0,5, nhỏ hơn 1, hợp lý vì độ dốc đang giảm dần."]
			],
			say: "Độ dốc không cố định: càng chi nhiều thì mỗi triệu thêm càng ít hiệu quả (2, rồi 1, rồi 0). Đây là quy luật lợi ích giảm dần. Một con số trung bình (12 form chia 4 triệu = 3) không cho biết điều này, đạo hàm thì có.",
			check: ["Đạo hàm của f tại x = 6 là bao nhiêu và nghĩa là gì?", "f'(6) = −6 + 5 = −1: thêm tiền ở mức này làm form giảm đi (khoảng 1 mỗi triệu). Vượt quá điểm bão hòa thì chi thêm là phí."]
		},
		en: {
			story: "Ms. Lan asks: “Does adding TikTok money keep adding forms forever?” You model forms against budget as f(x) = −0.5x² + 5x (x in million), matching today's f(4) = 12.",
			words: [["Derivative", "The slope of the curve at a point: if you add a little input, how much does the output change."], ["Tangent", "A straight line touching the curve at exactly one point with the same slope."]],
			problem: "f(x) = −0.5x² + 5x. Compute f(4), then the derivative f'(x) = −x + 5 at x = 3, 4, 5 and read the meaning.",
			steps: [
				["Value at 4", "f(4) = −0.5×16 + 20 = 12 forms, matching reality."],
				["Slope at 3", "f'(3) = −3 + 5 = 2: one more million adds about 2 forms."],
				["Slope at 4", "f'(4) = −4 + 5 = 1: one more million adds only about 1 form."],
				["Slope at 5", "f'(5) = −5 + 5 = 0: a flat spot, more money adds almost no forms."],
				["Check against real numbers", "f(5) − f(4) = 12.5 − 12 = 0.5, less than 1, reasonable because the slope is shrinking."]
			],
			say: "The slope is not fixed: the more you spend, the less each extra million does (2, then 1, then 0). This is the law of diminishing returns. An average (12 forms divided by 4 million = 3) does not reveal this, the derivative does.",
			check: ["What is the derivative of f at x = 6 and what does it mean?", "f'(6) = −6 + 5 = −1: adding money at this level reduces forms (about 1 per million). Beyond the saturation point, extra spending is waste."]
		}
	},
	"math-crit": {
		vi: {
			story: "Từ hàm f(x) = −0,5x² + 5x, độ dốc bằng 0 ở x = 5. Bạn phải xác định đó là đỉnh (ngân sách tối ưu) chứ không phải đáy hay một chỗ phẳng giả.",
			words: [["Điểm tới hạn", "Chỗ đạo hàm bằng 0."], ["Đạo hàm bậc hai", "Độ dốc của độ dốc. Âm nghĩa là cong xuống (đỉnh), dương nghĩa là cong lên (đáy)."]],
			problem: "Tìm điểm tới hạn của f(x) = −0,5x² + 5x và phân loại. Sau đó so với g(x) = x³ tại x = 0.",
			steps: [
				["Đặt đạo hàm bằng 0", "f'(x) = −x + 5 = 0 nên x = 5."],
				["Đạo hàm bậc hai", "f''(x) = −1, luôn âm."],
				["Phân loại", "Âm nghĩa là cong xuống, nên x = 5 là đỉnh. f(5) = −12,5 + 25 = 12,5 form."],
				["Thử g(x) = x³", "g'(x) = 3x² = 0 tại x = 0, nhưng g(−1) = −1 và g(1) = 1: hai bên khác phía."],
				["Đọc", "x = 0 là điểm tới hạn nhưng không phải đỉnh hay đáy. Độ dốc bằng 0 chưa đủ để kết luận."]
			],
			say: "Với hàm form, ngân sách TikTok tối ưu là 5 triệu, cho tối đa 12,5 form. Chi hơn 5 triệu không thêm form nào. Và phải kiểm tra đạo hàm bậc hai: x³ cho thấy độ dốc 0 có thể là chỗ phẳng chứ không phải đỉnh.",
			check: ["Nếu f''(x) = +2 tại một điểm tới hạn, đó là đỉnh hay đáy?", "Đáy (cực tiểu): dương nghĩa là cong lên. Ví dụ hàm chi phí đạt nhỏ nhất ở điểm đó."]
		},
		en: {
			story: "From f(x) = −0.5x² + 5x the slope is 0 at x = 5. You must decide whether that is a peak (the optimal budget) rather than a trough or a false flat spot.",
			words: [["Critical point", "A place where the derivative is 0."], ["Second derivative", "The slope of the slope. Negative means curving down (peak), positive means curving up (trough)."]],
			problem: "Find the critical point of f(x) = −0.5x² + 5x and classify it. Then compare with g(x) = x³ at x = 0.",
			steps: [
				["Set the derivative to 0", "f'(x) = −x + 5 = 0 so x = 5."],
				["Second derivative", "f''(x) = −1, always negative."],
				["Classify", "Negative means curving down, so x = 5 is a peak. f(5) = −12.5 + 25 = 12.5 forms."],
				["Try g(x) = x³", "g'(x) = 3x² = 0 at x = 0, but g(−1) = −1 and g(1) = 1: the two sides differ."],
				["Read", "x = 0 is a critical point but not a peak or trough. A slope of 0 is not enough to conclude."]
			],
			say: "For the forms function, the optimal TikTok budget is 5 million, giving at most 12.5 forms. Spending beyond 5 million adds no forms. And you must check the second derivative: x³ shows a slope of 0 can be a flat spot, not a peak.",
			check: ["If f''(x) = +2 at a critical point, is it a peak or a trough?", "A trough (minimum): positive means curving up. For example a cost function is smallest at that point."]
		}
	},
	"math-part": {
		vi: {
			story: "Form TikTok phụ thuộc vào hai thứ: số click c và tỷ lệ form r (theo %). Sau khi sửa trang đích, bạn muốn biết cái nào đáng tăng hơn.",
			words: [["Đạo hàm riêng", "Đổi một biến, giữ nguyên các biến còn lại, xem đầu ra đổi bao nhiêu."]],
			problem: "F(c, r) = c × r / 100, với c = 800 click và r = 1,5 (%), cho F = 12 form. Tính độ nhạy của F theo c và theo r.",
			steps: [
				["Kiểm tra giá trị", "F(800, 1,5) = 800 × 1,5 / 100 = 12 ✓."],
				["Đạo hàm riêng theo c (giữ r)", "∂F/∂c = r/100 = 0,015: mỗi click thêm cho 0,015 form."],
				["Đạo hàm riêng theo r (giữ c)", "∂F/∂r = c/100 = 8: mỗi điểm phần trăm thêm cho 8 form."],
				["Kiểm tra bằng số", "r từ 1,5 lên 2,5: F = 800 × 2,5 / 100 = 20, tăng 8 ✓. c từ 800 lên 900: F = 13,5, tăng 1,5, bằng 100 × 0,015 ✓."]
			],
			say: "Thêm 100 click chỉ thêm 1,5 form, còn thêm 1 điểm phần trăm cho thêm 8 form. Điều này nói rằng sửa trang đích (tăng r) đáng giá hơn mua thêm click, trong khoảng 800 click này. Mỗi đạo hàm riêng chỉ đúng khi biến còn lại đứng yên.",
			check: ["Nếu c tăng gấp đôi lên 1600 thì ∂F/∂r đổi thế nào?", "∂F/∂r = c/100 = 16, gấp đôi. Giá trị của việc cải thiện tỷ lệ form tăng khi lưu lượng lớn hơn."]
		},
		en: {
			story: "TikTok's forms depend on two things: clicks c and the form rate r (in %). After fixing the landing page, you want to know which is more worth raising.",
			words: [["Partial derivative", "Change one variable, hold the others, and see how much the output changes."]],
			problem: "F(c, r) = c × r / 100, with c = 800 clicks and r = 1.5 (%), giving F = 12 forms. Compute the sensitivity of F to c and to r.",
			steps: [
				["Check the value", "F(800, 1.5) = 800 × 1.5 / 100 = 12 ✓."],
				["Partial derivative in c (hold r)", "∂F/∂c = r/100 = 0.015: each extra click gives 0.015 forms."],
				["Partial derivative in r (hold c)", "∂F/∂r = c/100 = 8: each extra percentage point gives 8 forms."],
				["Check with numbers", "r from 1.5 to 2.5: F = 800 × 2.5 / 100 = 20, up 8 ✓. c from 800 to 900: F = 13.5, up 1.5, equal to 100 × 0.015 ✓."]
			],
			say: "Adding 100 clicks adds only 1.5 forms, while adding 1 percentage point adds 8. This says fixing the landing page (raising r) is worth more than buying clicks, within this 800-click range. Each partial derivative is only right while the other variable stands still.",
			check: ["If c doubles to 1600, how does ∂F/∂r change?", "∂F/∂r = c/100 = 16, doubled. The value of improving the form rate rises with more traffic."]
		}
	},
	"math-grad": {
		vi: {
			story: "Có hai nút để vặn: tăng click hoặc tăng tỷ lệ form. Gradient gom hai đạo hàm riêng vào một véctơ để chỉ hướng tăng nhanh nhất.",
			words: [["Gradient", "Véctơ các đạo hàm riêng. Chỉ hướng làm hàm tăng nhanh nhất."]],
			problem: "F(c, r) = c × r / 100 tại (c, r) = (800, 1,5). Tính gradient và đọc hướng.",
			steps: [
				["Gom đạo hàm riêng", "∇F = (∂F/∂c, ∂F/∂r) = (0,015; 8)."],
				["Đọc", "Thành phần theo r (8) lớn hơn nhiều so với theo c (0,015)."],
				["Bước nhỏ theo gradient", "Đi một bước (Δc, Δr) = (0,015; 8) × 0,1 = (0,0015; 0,8), F tăng xấp xỉ 0,015×0,0015 + 8×0,8 ≈ 6,4."],
				["Cẩn thận về đơn vị", "c đo bằng click, r bằng phần trăm; so hai thành phần chỉ có nghĩa khi hiểu đơn vị."]
			],
			say: "Gradient nói «vặn nút r thì F tăng nhanh nhất» trong đơn vị đang dùng. Đây là hướng mà gradient descent sẽ đi theo ngược lại để giảm sai số trong C3. Hiểu nó như la bàn chỉ lên dốc, đi ngược là xuống dốc.",
			check: ["Nếu muốn giảm F nhanh nhất, đi theo hướng nào?", "Hướng ngược gradient: −(0,015; 8). Đây chính là ý của gradient descent."]
		},
		en: {
			story: "There are two knobs to turn: more clicks or a higher form rate. The gradient gathers the two partial derivatives into one vector that points to the fastest rise.",
			words: [["Gradient", "The vector of partial derivatives. It points in the direction in which the function rises fastest."]],
			problem: "F(c, r) = c × r / 100 at (c, r) = (800, 1.5). Compute the gradient and read the direction.",
			steps: [
				["Gather partial derivatives", "∇F = (∂F/∂c, ∂F/∂r) = (0.015; 8)."],
				["Read", "The r component (8) is far larger than the c component (0.015)."],
				["A small step along the gradient", "Take a step (Δc, Δr) = (0.015; 8) × 0.1 = (0.0015; 0.8); F rises by about 0.015×0.0015 + 8×0.8 ≈ 6.4."],
				["Mind the units", "c is in clicks, r in percent; comparing the two components only makes sense once you understand the units."]
			],
			say: "The gradient says “turn the r knob and F rises fastest” in the units in use. This is the direction gradient descent follows in reverse to reduce error in C3. Think of it as a compass pointing uphill; the opposite is downhill.",
			check: ["To lower F fastest, which direction do you go?", "Opposite the gradient: −(0.015; 8). That is exactly the idea of gradient descent."]
		}
	},
	"math-jac": {
		vi: {
			story: "Bây giờ có hai kết quả cùng lúc phụ thuộc vào hai nút: số form F và chi phí S (nghìn đồng, với 5 nghìn mỗi click). Đạo hàm của chúng gom lại thành một bảng.",
			words: [["Jacobian", "Ma trận đạo hàm riêng của nhiều đầu ra theo nhiều đầu vào: mỗi hàng là gradient của một đầu ra."]],
			problem: "F = c × r / 100 và S = 5c (chi phí, nghìn đồng), theo (c, r). Viết Jacobian tại (800, 1,5).",
			steps: [
				["Hàng cho F", "(∂F/∂c, ∂F/∂r) = (r/100, c/100) = (0,015; 8)."],
				["Hàng cho S", "(∂S/∂c, ∂S/∂r) = (5, 0), vì chi phí không phụ thuộc r."],
				["Gom thành ma trận", "J = [[0,015; 8], [5; 0]] (hai hàng, hai cột)."],
				["Dùng J để dự báo", "c +100 và r +0,5 cho F ≈ 0,015×100 + 8×0,5 = 5,5 và S ≈ 5×100 + 0 = 500."]
			],
			say: "Một bảng trả lời cùng lúc hai câu: thêm 100 click và nâng r thêm 0,5 điểm sẽ thêm khoảng 5,5 form và tốn thêm 500 nghìn. Khi hàm có nhiều đầu ra (như mạng nơ-ron), Jacobian là đạo hàm của cả hệ.",
			check: ["Vì sao ô (S, r) bằng 0?", "Vì chi phí S = 5c chỉ phụ thuộc số click, không phụ thuộc tỷ lệ form r. Đạo hàm theo r là 0."]
		},
		en: {
			story: "Now two results depend on the two knobs at once: forms F and cost S (thousand dong, at 5 thousand per click). Their derivatives gather into one table.",
			words: [["Jacobian", "The matrix of partial derivatives of several outputs with respect to several inputs: each row is one output's gradient."]],
			problem: "F = c × r / 100 and S = 5c (cost, thousand dong), in (c, r). Write the Jacobian at (800, 1.5).",
			steps: [
				["Row for F", "(∂F/∂c, ∂F/∂r) = (r/100, c/100) = (0.015; 8)."],
				["Row for S", "(∂S/∂c, ∂S/∂r) = (5, 0), because cost does not depend on r."],
				["Gather into a matrix", "J = [[0.015; 8], [5; 0]] (two rows, two columns)."],
				["Use J to forecast", "c +100 and r +0.5 gives F ≈ 0.015×100 + 8×0.5 = 5.5 and S ≈ 5×100 + 0 = 500."]
			],
			say: "One table answers two questions at once: adding 100 clicks and raising r by 0.5 points adds about 5.5 forms and costs 500 thousand more. When a function has many outputs (like a neural network), the Jacobian is the derivative of the whole system.",
			check: ["Why is the (S, r) cell 0?", "Because cost S = 5c depends only on clicks, not on the form rate r. The derivative with respect to r is 0."]
		}
	},
	"math-hess": {
		vi: {
			story: "Ở bài bình phương tối thiểu, hàm sai lệch J(a, b) phụ thuộc hai tham số. Hessian cho biết điểm tìm được là đáy thật hay yên ngựa.",
			words: [["Hessian", "Ma trận các đạo hàm bậc hai. Cho biết đường cong hướng nào cong lên hay xuống."], ["Yên ngựa", "Điểm cong lên theo một hướng và cong xuống theo hướng khác."]],
			problem: "Với ba điểm x = 3, 4, 5, hàm sai lệch J(a, b) = Σ(y − a − bx)² có Hessian [[2n, 2Σx], [2Σx, 2Σx²]]. Tính Hessian rồi kiểm tra có phải đáy.",
			steps: [
				["Các tổng", "n = 3; Σx = 12; Σx² = 9 + 16 + 25 = 50."],
				["Hessian", "[[6, 24], [24, 100]]."],
				["Định thức", "6×100 − 24×24 = 600 − 576 = 24, dương."],
				["Dấu của ô đầu", "6 > 0."],
				["Kết luận", "Định thức dương và ô đầu dương: cong lên theo mọi hướng, nên điểm tìm được là đáy chứ không phải yên ngựa."]
			],
			say: "Với bình phương tối thiểu, Hessian luôn cho đáy nên đường tìm được là tốt nhất thật. Nếu định thức âm thì đó là yên ngựa: một hướng đi xuống tiếp, nghĩa là chưa ở đáy. Phần này giải thích vì sao gradient descent ở C3 dùng được với hàm sai số bình phương.",
			check: ["Hessian [[2, 0], [0, −2]] là đáy, đỉnh hay yên ngựa?", "Yên ngựa: một hướng cong lên (+2), một hướng cong xuống (−2). Định thức −4 là âm."]
		},
		en: {
			story: "In the least-squares lesson, the error function J(a, b) depends on two parameters. The Hessian tells you whether the point you found is a real trough or a saddle.",
			words: [["Hessian", "The matrix of second derivatives. It says in which directions the surface curves up or down."], ["Saddle", "A point that curves up in one direction and down in another."]],
			problem: "With three points x = 3, 4, 5 the error function J(a, b) = Σ(y − a − bx)² has Hessian [[2n, 2Σx], [2Σx, 2Σx²]]. Compute the Hessian and check whether it is a trough.",
			steps: [
				["The sums", "n = 3; Σx = 12; Σx² = 9 + 16 + 25 = 50."],
				["Hessian", "[[6, 24], [24, 100]]."],
				["Determinant", "6×100 − 24×24 = 600 − 576 = 24, positive."],
				["Sign of the first entry", "6 > 0."],
				["Conclusion", "Positive determinant and positive first entry: it curves up in every direction, so the found point is a trough, not a saddle."]
			],
			say: "With least squares the Hessian always gives a trough, so the line found really is the best. If the determinant were negative it would be a saddle: one direction still goes downhill, meaning you are not at the bottom. This explains why gradient descent in C3 works for the squared-error function.",
			check: ["Is the Hessian [[2, 0], [0, −2]] a trough, peak or saddle?", "A saddle: one direction curves up (+2), one curves down (−2). The determinant −4 is negative."]
		}
	},
	"math-taylor": {
		vi: {
			story: "Chị Lan hỏi: «Em có dùng được độ dốc để ước lượng cho 4,5 triệu không?» Bạn dùng xấp xỉ tuyến tính quanh x = 4 và kiểm tra nó sai bao nhiêu.",
			words: [["Xấp xỉ tuyến tính", "Gần một điểm, thay đường cong bằng tiếp tuyến: f(x) ≈ f(a) + f'(a)(x − a)."], ["Sai số xấp xỉ", "Khoảng cách giữa giá trị thật và giá trị ước lượng."]],
			problem: "f(x) = −0,5x² + 5x quanh a = 4, với f(4) = 12 và f'(4) = 1. Ước lượng f(4,5) và f(6) rồi so với giá trị thật.",
			steps: [
				["Công thức", "f(x) ≈ 12 + 1 × (x − 4)."],
				["Ước lượng f(4,5)", "12 + 0,5 = 12,5. Giá trị thật: −0,5×20,25 + 22,5 = 12,375. Sai 0,125."],
				["Ước lượng f(6)", "12 + 2 = 14. Giá trị thật: −18 + 30 = 12. Sai 2."],
				["So sánh", "Sai số 0,125 so với 2: xa 4 càng nhiều thì tiếp tuyến càng lệch."]
			],
			say: "Dùng độ dốc để ước lượng gần điểm đang đứng thì tốt (sai 0,125), còn kéo xa 2 triệu thì lệch hẳn (đoán 14 form nhưng thật là 12). Quy tắc nhớ: xấp xỉ tuyến tính chỉ tin được gần điểm gốc.",
			check: ["Với f(4) = 12 và f'(4) = 1, ước lượng tuyến tính của f(3,8) là bao nhiêu?", "12 + 1 × (3,8 − 4) = 11,8. Giá trị thật là 11,78, rất sát vì chỉ cách 0,2."]
		},
		en: {
			story: "Ms. Lan asks: “Can you use the slope to estimate for 4.5 million?” You use a linear approximation around x = 4 and check how wrong it is.",
			words: [["Linear approximation", "Near a point, replace the curve with its tangent: f(x) ≈ f(a) + f'(a)(x − a)."], ["Approximation error", "The distance between the real value and the estimate."]],
			problem: "f(x) = −0.5x² + 5x around a = 4, with f(4) = 12 and f'(4) = 1. Estimate f(4.5) and f(6) and compare with the real values.",
			steps: [
				["Formula", "f(x) ≈ 12 + 1 × (x − 4)."],
				["Estimate f(4.5)", "12 + 0.5 = 12.5. Real value: −0.5×20.25 + 22.5 = 12.375. Error 0.125."],
				["Estimate f(6)", "12 + 2 = 14. Real value: −18 + 30 = 12. Error 2."],
				["Compare", "Error 0.125 versus 2: the farther from 4, the more the tangent drifts."]
			],
			say: "Using the slope to estimate near where you stand works well (error 0.125), but stretching 2 million away is clearly off (guess 14 forms but the truth is 12). Rule to remember: a linear approximation is only trustworthy near its base point.",
			check: ["With f(4) = 12 and f'(4) = 1, what is the linear estimate of f(3.8)?", "12 + 1 × (3.8 − 4) = 11.8. The real value is 11.78, very close because it is only 0.2 away."]
		}
	},
	"math-p": {
		vi: {
			story: "Chị Lan hỏi: «Khách vào website có bao nhiêu phần đặt hẹn?» Bạn bắt đầu bằng định nghĩa: xác suất là một phần của cả tập đang xét.",
			words: [["Xác suất", "Phần của cả tập đang xét: số trường hợp thuận lợi chia số trường hợp có thể."], ["Không gian mẫu", "Toàn bộ tập đang xét, mẫu số của xác suất."]],
			problem: "Mỗi tuần có 4.500 lượt truy cập và 50 form. Tính xác suất một lượt truy cập bất kỳ gửi form. Rồi tính xác suất một hội viên sắp rời nếu 50 trong 1000 hội viên sắp rời.",
			steps: [
				["Xác định tập đang xét", "4.500 lượt truy cập là cả tập; 50 là phần thuận lợi."],
				["Xác suất gửi form", "50 ÷ 4500 ≈ 0,0111, tức khoảng 1,1%."],
				["Xác suất hội viên sắp rời", "Tập đang xét là 1000 hội viên: 50 ÷ 1000 = 0,05, tức 5%."],
				["Kiểm tra", "Xác suất luôn nằm trong khoảng từ 0 đến 1. 0,011 và 0,05 đều hợp lệ."]
			],
			say: "Hai xác suất dùng hai tập khác nhau: 1,1% tính trên lượt truy cập, 5% tính trên hội viên. Đổi tập đang xét thì xác suất đổi. Câu «bao nhiêu phần trăm» luôn phải hỏi lại «phần trăm của cái gì».",
			check: ["Nếu chỉ tính 3.000 lượt truy cập có click vào form (thay vì 4.500), xác suất gửi form là bao nhiêu?", "50 ÷ 3000 ≈ 1,7%. Mẫu số đổi nên xác suất đổi, dù tử số vẫn là 50."]
		},
		en: {
			story: "Ms. Lan asks: “What share of website visitors book?” You start from the definition: probability is a part of the whole set under consideration.",
			words: [["Probability", "A part of the whole set under consideration: favourable cases divided by possible cases."], ["Sample space", "The whole set under consideration, the denominator of the probability."]],
			problem: "Each week has 4,500 visits and 50 forms. Compute the probability that a random visit submits a form. Then the probability a member is about to leave if 50 of 1,000 members are.",
			steps: [
				["Identify the set", "4,500 visits is the whole set; 50 is the favourable part."],
				["Probability of submitting", "50 ÷ 4500 ≈ 0.0111, about 1.1%."],
				["Probability a member is about to leave", "The set is 1,000 members: 50 ÷ 1000 = 0.05, i.e. 5%."],
				["Check", "A probability always lies between 0 and 1. 0.011 and 0.05 are both valid."]
			],
			say: "The two probabilities use two different sets: 1.1% is over visits, 5% over members. Change the set and the probability changes. Whenever someone says “what percent”, always ask “percent of what”.",
			check: ["If you count only the 3,000 visits that clicked into the form (instead of 4,500), what is the submit probability?", "50 ÷ 3000 ≈ 1.7%. The denominator changed so the probability changed, though the numerator is still 50."]
		}
	},
	"math-or": {
		vi: {
			story: "Chị Lan muốn gửi ưu đãi cho hội viên đã dùng gói 60 phút hoặc ghế massage. Đếm cộng hai nhóm sẽ đếm đôi những người dùng cả hai.",
			words: [["Quy tắc cộng", "P(A hoặc B) = P(A) + P(B) − P(A và B)."], ["Phần chồng", "Những người thuộc cả hai nhóm, bị đếm hai lần nếu chỉ cộng."]],
			problem: "Trong 1000 hội viên: 400 dùng gói 60 phút, 250 dùng ghế massage, 100 dùng cả hai. Có bao nhiêu hội viên dùng ít nhất một trong hai?",
			steps: [
				["Xác suất mỗi nhóm", "P(60 phút) = 400/1000 = 0,40; P(ghế) = 250/1000 = 0,25."],
				["Phần chồng", "P(cả hai) = 100/1000 = 0,10."],
				["Cộng rồi trừ phần chồng", "0,40 + 0,25 − 0,10 = 0,55."],
				["Đổi ra người", "0,55 × 1000 = 550 hội viên."],
				["Kiểm tra bằng đếm trực tiếp", "Chỉ 60 phút: 300; chỉ ghế: 150; cả hai: 100. 300 + 150 + 100 = 550 ✓."]
			],
			say: "Nếu quên trừ 100, bạn đếm ra 650 và gửi ưu đãi cho 100 người nhận đôi. Cộng hai nhóm mà không trừ phần chồng là lỗi phổ biến nhất của quy tắc này, và cách kiểm tra là đếm trực tiếp từng phần.",
			check: ["Nếu hai nhóm không có ai chung, P(A hoặc B) là gì?", "P(A) + P(B), vì phần chồng bằng 0. Hai nhóm như vậy gọi là rời nhau."]
		},
		en: {
			story: "Ms. Lan wants to send an offer to members who used the 60-minute package or the massage chair. Adding two groups double-counts those who used both.",
			words: [["Addition rule", "P(A or B) = P(A) + P(B) − P(A and B)."], ["Overlap", "People in both groups, counted twice if you just add."]],
			problem: "Among 1,000 members: 400 used the 60-minute package, 250 used the massage chair, 100 used both. How many members used at least one of the two?",
			steps: [
				["Probability of each group", "P(60 min) = 400/1000 = 0.40; P(chair) = 250/1000 = 0.25."],
				["The overlap", "P(both) = 100/1000 = 0.10."],
				["Add, then subtract the overlap", "0.40 + 0.25 − 0.10 = 0.55."],
				["Convert to people", "0.55 × 1000 = 550 members."],
				["Check by direct count", "Only 60 min: 300; only chair: 150; both: 100. 300 + 150 + 100 = 550 ✓."]
			],
			say: "If you forget to subtract 100, you count 650 and send the offer to 100 people twice. Adding two groups without subtracting the overlap is the most common error of this rule, and the check is to count each piece directly.",
			check: ["If the two groups have nobody in common, what is P(A or B)?", "P(A) + P(B), because the overlap is 0. Such groups are called disjoint."]
		}
	},
	"math-and": {
		vi: {
			story: "Bạn quay lại công cụ cảnh báo hội viên sắp rời: 5% hội viên sắp rời và công cụ bắt đúng 90% số đó. Cả hai điều cùng xảy ra với bao nhiêu hội viên?",
			words: [["Quy tắc nhân", "P(A và B) = P(A) × P(B | A): xác suất A, rồi xác suất B khi A đã xảy ra."], ["Xác suất có điều kiện", "Xác suất B khi biết A đã xảy ra."]],
			problem: "Một hội viên bất kỳ có 5% sắp rời. Nếu họ sắp rời, công cụ gắn cờ đúng 90%. Tính xác suất một hội viên bất kỳ vừa sắp rời vừa bị gắn cờ, và đổi ra số người trong 1000.",
			steps: [
				["Xác suất sắp rời", "P(rời) = 0,05."],
				["Xác suất gắn cờ khi sắp rời", "P(cờ | rời) = 0,90."],
				["Nhân", "0,05 × 0,90 = 0,045."],
				["Đổi ra người", "0,045 × 1000 = 45 hội viên."],
				["Kiểm tra bằng đếm", "50 người sắp rời, 90% của 50 = 45 ✓."]
			],
			say: "45 người là «sắp rời và bị gắn cờ». Đây chính là 45 cảnh báo đúng bạn sẽ dùng khi tính Bayes ở C2. Phép nhân chỉ dùng được vì xác suất thứ hai được tính trong nhóm đã sắp rời, không phải trong cả 1000 người.",
			check: ["Nếu bạn nhân 0,05 × 0,08 (tỷ lệ báo nhầm) thì được con số nào?", "0,004, tức 4 người, nhưng sai nhóm: 8% báo nhầm áp dụng cho người ở lại (95%), nên số báo nhầm đúng là 0,95 × 0,08 = 0,076, tức 76 người."]
		},
		en: {
			story: "You return to the member-departure alert tool: 5% of members are about to leave and the tool catches 90% of them. For how many members do both things happen?",
			words: [["Multiplication rule", "P(A and B) = P(A) × P(B | A): the probability of A, then the probability of B once A has happened."], ["Conditional probability", "The probability of B knowing A has happened."]],
			problem: "A random member has a 5% chance of being about to leave. If they are, the tool flags them 90% of the time. Compute the probability that a random member is both about to leave and flagged, and convert to people out of 1,000.",
			steps: [
				["Probability of leaving", "P(leave) = 0.05."],
				["Probability of flag given leaving", "P(flag | leave) = 0.90."],
				["Multiply", "0.05 × 0.90 = 0.045."],
				["Convert to people", "0.045 × 1000 = 45 members."],
				["Check by counting", "50 people about to leave, 90% of 50 = 45 ✓."]
			],
			say: "45 people are “about to leave and flagged”. These are exactly the 45 correct alerts you will use in the Bayes calculation in C2. Multiplying only works because the second probability is computed inside the group already leaving, not in all 1,000 people.",
			check: ["If you multiply 0.05 × 0.08 (the false-alarm rate), what number do you get?", "0.004, i.e. 4 people, but the wrong group: the 8% false alarm applies to those who stay (95%), so the correct false-alarm count is 0.95 × 0.08 = 0.076, i.e. 76 people."]
		}
	},
	"math-perm": {
		vi: {
			story: "Thảo muốn xếp thứ tự ưu tiên ngân sách cho ba kênh trong tháng. Thứ tự khác là một phương án khác. Bạn đếm có bao nhiêu phương án.",
			words: [["Hoán vị", "Một cách xếp có thứ tự. Đổi chỗ là cách khác."], ["Giai thừa n!", "n × (n−1) × … × 1, số cách xếp n vật."]],
			problem: "Xếp ba kênh GDN, Meta, TikTok theo thứ tự ưu tiên. Có bao nhiêu cách? Và nếu chỉ chọn hai kênh đứng đầu theo thứ tự (hạng 1, hạng 2)?",
			steps: [
				["Vị trí đầu", "Có 3 lựa chọn."],
				["Vị trí hai", "Còn 2 lựa chọn."],
				["Vị trí ba", "Còn 1."],
				["Nhân lại", "3 × 2 × 1 = 3! = 6 cách xếp đủ ba kênh."],
				["Chọn hai kênh đứng đầu", "3 × 2 = 6 cách (hạng 1 có 3 lựa chọn, hạng 2 còn 2)."]
			],
			say: "GDN trước Meta khác Meta trước GDN, nên mỗi thứ tự là một phương án, tổng 6. Số cách tăng rất nhanh: với 6 kênh là 6! = 720. Hoán vị dùng khi thứ tự có nghĩa, ví dụ bảng xếp hạng.",
			check: ["Có bao nhiêu cách xếp 4 kênh theo thứ tự?", "4! = 4 × 3 × 2 × 1 = 24 cách."]
		},
		en: {
			story: "Thao wants to rank the three channels by budget priority for the month. A different order is a different plan. You count how many plans there are.",
			words: [["Permutation", "An ordered arrangement. Swapping places gives a different one."], ["Factorial n!", "n × (n−1) × … × 1, the number of ways to arrange n things."]],
			problem: "Rank the three channels GDN, Meta, TikTok by priority. How many ways? And if you only pick the top two in order (rank 1, rank 2)?",
			steps: [
				["First position", "3 choices."],
				["Second position", "2 choices left."],
				["Third position", "1 left."],
				["Multiply", "3 × 2 × 1 = 3! = 6 ways to arrange all three channels."],
				["Pick the top two", "3 × 2 = 6 ways (rank 1 has 3 choices, rank 2 has 2 left)."]
			],
			say: "GDN before Meta differs from Meta before GDN, so each order is a plan, 6 in total. The count grows very fast: with 6 channels it is 6! = 720. Use permutations when order carries meaning, for example a ranking.",
			check: ["How many ways to order 4 channels?", "4! = 4 × 3 × 2 × 1 = 24 ways."]
		}
	},
	"math-comb": {
		vi: {
			story: "Thảo muốn chạy thử nghiệm A/B với hai trong ba kênh, thứ tự không quan trọng. Và chị Lan muốn khảo sát 3 trong 10 hội viên. Bạn đếm số cách chọn.",
			words: [["Tổ hợp", "Chọn k phần tử từ n mà không quan tâm thứ tự."], ["C(n, k)", "n! chia cho k! và (n−k)!."]],
			problem: "Chọn 2 kênh từ 3 để thử nghiệm. Rồi chọn 3 hội viên từ 10 để khảo sát.",
			steps: [
				["Đếm theo hoán vị", "Chọn 2 kênh từ 3 có thứ tự: 3 × 2 = 6 cách."],
				["Bỏ thứ tự", "Mỗi cặp bị đếm 2! = 2 lần (GDN-Meta và Meta-GDN là một cặp). 6 ÷ 2 = 3 cách."],
				["Liệt kê kiểm tra", "{GDN, Meta}, {GDN, TikTok}, {Meta, TikTok}: đúng 3."],
				["Chọn 3 từ 10", "C(10, 3) = 10×9×8 ÷ (3×2×1) = 720 ÷ 6 = 120 cách."]
			],
			say: "Tổ hợp là hoán vị chia cho số cách xếp thứ tự bên trong nhóm. Với 3 từ 10: có 720 cách xếp thứ tự nhưng chỉ 120 nhóm khác nhau vì mỗi nhóm bị đếm 6 lần. Dùng tổ hợp khi chỉ quan tâm ai có mặt, không quan tâm thứ tự.",
			check: ["C(3, 2) và C(3, 1) bằng nhau không, vì sao?", "Cùng bằng 3: chọn 2 kênh để giữ cũng là chọn 1 kênh để bỏ. C(n, k) = C(n, n−k)."]
		},
		en: {
			story: "Thao wants to run an A/B test with two of the three channels, order irrelevant. And Ms. Lan wants to survey 3 of 10 members. You count the ways to choose.",
			words: [["Combination", "Choosing k items from n without caring about order."], ["C(n, k)", "n! divided by k! and (n−k)!."]],
			problem: "Choose 2 channels from 3 for a test. Then choose 3 members from 10 for a survey.",
			steps: [
				["Count by permutations", "Choosing 2 channels from 3 with order: 3 × 2 = 6 ways."],
				["Drop the order", "Each pair is counted 2! = 2 times (GDN-Meta and Meta-GDN are one pair). 6 ÷ 2 = 3 ways."],
				["List to check", "{GDN, Meta}, {GDN, TikTok}, {Meta, TikTok}: exactly 3."],
				["Choose 3 from 10", "C(10, 3) = 10×9×8 ÷ (3×2×1) = 720 ÷ 6 = 120 ways."]
			],
			say: "A combination is a permutation divided by the number of orderings inside the group. For 3 from 10: there are 720 ordered arrangements but only 120 different groups because each group is counted 6 times. Use combinations when you only care who is present, not the order.",
			check: ["Are C(3, 2) and C(3, 1) equal, and why?", "Both are 3: choosing 2 channels to keep is the same as choosing 1 to drop. C(n, k) = C(n, n−k)."]
		}
	},
	"math-disj": {
		vi: {
			story: "Một khách chỉ ghé một chi nhánh mỗi ngày. Bạn hỏi: «Ghé Quận 1» và «ghé Quận 3» có độc lập không? Chúng rời nhau, nhưng điều đó khác với độc lập.",
			words: [["Rời nhau", "Hai biến cố không thể cùng xảy ra: P(A và B) = 0."], ["Độc lập", "Biết A xảy ra không làm đổi xác suất của B: P(A và B) = P(A) × P(B)."]],
			problem: "Trong một ngày, P(ghé Quận 1) = 0,4 và P(ghé Quận 3) = 0,3, và không ai ghé cả hai. Hai biến cố này rời nhau hay độc lập?",
			steps: [
				["Kiểm tra rời nhau", "P(Q1 và Q3) = 0, nên rời nhau."],
				["Kiểm tra độc lập", "Nếu độc lập, P(Q1 và Q3) = 0,4 × 0,3 = 0,12."],
				["So sánh", "0 khác 0,12, nên không độc lập."],
				["Đọc ý nghĩa", "Biết khách đã ghé Q1 thì chắc chắn không ghé Q3: xác suất Q3 từ 0,3 rơi xuống 0. Biết A làm đổi B nên phụ thuộc."]
			],
			say: "Rời nhau là mối quan hệ rất mạnh: chúng loại trừ nhau, nên biết cái này thì biết chắc cái kia không xảy ra. Độc lập là biết cái này không cho biết gì về cái kia. Hai thứ gần như đối lập, và nhầm hai thứ này sẽ làm công thức nhân sai.",
			check: ["Hai biến cố rời nhau và cùng có xác suất khác 0 có thể độc lập không?", "Không. Rời nhau cho P(A và B) = 0, còn độc lập cần P(A) × P(B) > 0. Hai điều không thể cùng đúng."]
		},
		en: {
			story: "A customer visits only one branch per day. You ask: are “visits District 1” and “visits District 3” independent? They are disjoint, but that is different from independent.",
			words: [["Disjoint", "Two events that cannot both happen: P(A and B) = 0."], ["Independent", "Knowing A happened does not change B's probability: P(A and B) = P(A) × P(B)."]],
			problem: "On a given day, P(visits District 1) = 0.4 and P(visits District 3) = 0.3, and nobody visits both. Are these two events disjoint or independent?",
			steps: [
				["Test disjoint", "P(D1 and D3) = 0, so they are disjoint."],
				["Test independent", "If independent, P(D1 and D3) = 0.4 × 0.3 = 0.12."],
				["Compare", "0 is not 0.12, so they are not independent."],
				["Read the meaning", "Knowing the customer visited D1 means for sure they did not visit D3: the probability of D3 drops from 0.3 to 0. Knowing A changes B, so they are dependent."]
			],
			say: "Disjoint is a very strong relationship: they exclude each other, so knowing one tells you for sure the other did not happen. Independent means knowing one tells you nothing about the other. The two are almost opposites, and confusing them makes the multiplication formula wrong.",
			check: ["Can two disjoint events with non-zero probabilities be independent?", "No. Disjoint gives P(A and B) = 0, while independence needs P(A) × P(B) > 0. Both cannot be true."]
		}
	},
	"math-kind": {
		vi: {
			story: "Ba người trong cuộc họp cùng nói «xác suất» nhưng mỗi người hiểu một nghĩa. Bạn phân biệt ba cách hiểu để biết họ đang cãi nhau về điều gì.",
			words: [
				["Cổ điển", "Các kết quả đều khả năng như nhau, đếm trường hợp: 1/6 cho một mặt xúc xắc."],
				["Tần suất", "Lặp lại nhiều lần rồi xem tỷ lệ: 50/4500 lượt truy cập gửi form."],
				["Mức độ tin", "Mức tin cá nhân vào một điều dựa trên thông tin hiện có."]
			],
			problem: "Ba câu: (a) «Xác suất ra mặt 6 là 1/6.» (b) «Xác suất một lượt truy cập gửi form là 1,1%.» (c) «Tôi tin 70% là TikTok đạt 15 form mỗi tuần vào 31/1.» Mỗi câu thuộc cách hiểu nào?",
			steps: [
				["Câu (a)", "Sáu mặt như nhau, đếm 1 trên 6: cách hiểu cổ điển."],
				["Câu (b)", "50 form trên 4500 lượt trong dữ liệu đã quan sát: cách hiểu tần suất. 50 ÷ 4500 ≈ 1,1%."],
				["Câu (c)", "Sự kiện chỉ xảy ra một lần, không lặp lại được hàng nghìn lần: mức độ tin."],
				["Đọc", "Cùng chữ «xác suất» nhưng ba nguồn khác nhau: đếm, quan sát lặp lại, và niềm tin."]
			],
			say: "Câu (b) mạnh nhất vì dựa trên dữ liệu, câu (c) mềm nhất vì là niềm tin cá nhân và thay đổi khi có thông tin mới. Khi ai đó nói «xác suất», hãy hỏi nó đến từ đâu. Đây cũng là lý do Bayes ở C2 xử lý niềm tin được cập nhật theo bằng chứng.",
			check: ["«70% khả năng mưa ngày mai» thuộc cách hiểu nào?", "Thường là mức độ tin (hoặc tần suất của những ngày giống hôm nay mà sau đó có mưa). Ngày mai chỉ xảy ra một lần."]
		},
		en: {
			story: "Three people in a meeting all say “probability” but each means something different. You separate three readings so you know what they are actually arguing about.",
			words: [
				["Classical", "All outcomes equally likely, count cases: 1/6 for one face of a die."],
				["Frequency", "Repeat many times and see the proportion: 50/4500 visits submitting a form."],
				["Degree of belief", "A personal level of confidence in something given the information at hand."]
			],
			problem: "Three sentences: (a) “The probability of rolling a 6 is 1/6.” (b) “The probability a visit submits a form is 1.1%.” (c) “I believe there is a 70% chance TikTok hits 15 forms a week by 31 January.” Which reading does each belong to?",
			steps: [
				["Sentence (a)", "Six equal faces, count 1 in 6: the classical reading."],
				["Sentence (b)", "50 forms in 4,500 visits in observed data: the frequency reading. 50 ÷ 4500 ≈ 1.1%."],
				["Sentence (c)", "The event happens only once and cannot be repeated thousands of times: degree of belief."],
				["Read", "The same word “probability” but three sources: counting, repeated observation, and belief."]
			],
			say: "Sentence (b) is strongest because it rests on data, sentence (c) is softest because it is a personal belief that changes with new information. When someone says “probability”, ask where it comes from. This is also why Bayes in C2 handles beliefs updated by evidence.",
			check: ["Which reading is “70% chance of rain tomorrow”?", "Usually degree of belief (or the frequency of days like today that then had rain). Tomorrow happens only once."]
		}
	}
};
var visuals$1 = {
	"math-vec": {
		kind: "bars",
		title: ["Véctơ form tuần này f = (18, 20, 12)", "This week's forms vector f = (18, 20, 12)"],
		items: [
			{
				label: ["GDN", "GDN"],
				value: 18
			},
			{
				label: ["Meta", "Meta"],
				value: 20
			},
			{
				label: ["TikTok", "TikTok"],
				value: 12
			}
		]
	},
	"math-add": {
		kind: "table",
		title: ["Cộng hai véctơ form từng ô", "Adding two form vectors slot by slot"],
		head: [
			["Kênh", "Channel"],
			["Tuần 1", "Week 1"],
			["Tuần 2", "Week 2"],
			["Tổng", "Total"]
		],
		rows: [
			[
				"GDN",
				18,
				17,
				35
			],
			[
				"Meta",
				20,
				21,
				41
			],
			[
				"TikTok",
				12,
				12,
				24
			]
		],
		mark: [
			[0, 3],
			[1, 3],
			[2, 3]
		]
	},
	"math-dot": {
		kind: "table",
		title: ["Tích vô hướng: form × CPA", "Dot product: forms × CPA"],
		head: [
			["Kênh", "Channel"],
			["Form", "Forms"],
			["CPA (triệu)", "CPA (million)"],
			["Form × CPA", "Forms × CPA"]
		],
		rows: [
			[
				"GDN",
				18,
				"1/3",
				6
			],
			[
				"Meta",
				20,
				"1/4",
				5
			],
			[
				"TikTok",
				12,
				"1/3",
				4
			],
			[
				"Tổng / Total",
				"",
				"",
				15
			]
		],
		mark: [[3, 3]]
	},
	"math-mul": {
		kind: "table",
		title: ["AB = (2×3)(3×2) = 2×2", "AB = (2×3)(3×2) = 2×2"],
		head: [
			["", ""],
			["Tổng form", "Total forms"],
			["Chi dự kiến", "Expected spend"]
		],
		rows: [[
			"Tuần 1 / Wk 1",
			50,
			15
		], [
			"Tuần 2 / Wk 2",
			50,
			14.92
		]],
		mark: [[1, 2]]
	},
	"math-sys": {
		kind: "table",
		title: ["Doanh thu hai ngày (nghìn đồng)", "Revenue on two days (thousand dong)"],
		head: [
			["Ngày", "Day"],
			["Gói 60'", "60' pkgs"],
			["Gói 90'", "90' pkgs"],
			["Thu", "Revenue"]
		],
		rows: [[
			"A",
			10,
			5,
			5500
		], [
			"B",
			8,
			10,
			7400
		]],
		note: ["Giải ra: gói 60 phút 300, gói 90 phút 500.", "Solved: 60-minute package 300, 90-minute 500."]
	},
	"math-ls": {
		kind: "line",
		title: ["Form theo ngân sách TikTok (triệu)", "Forms by TikTok budget (million)"],
		xs: [
			"3",
			"4",
			"5"
		],
		ys: [
			10,
			12,
			13
		],
		note: ["Đường lệch ít nhất: y = 5,67 + 1,5x.", "Best-fit line: y = 5.67 + 1.5x."]
	},
	"math-deriv": {
		kind: "line",
		title: ["f(x) = −0,5x² + 5x: form theo ngân sách (triệu)", "f(x) = −0.5x² + 5x: forms by budget (million)"],
		xs: [
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7"
		],
		ys: [
			4.5,
			8,
			10.5,
			12,
			12.5,
			12,
			10.5
		],
		note: ["Độ dốc giảm dần rồi về 0 ở x = 5.", "The slope shrinks and reaches 0 at x = 5."]
	},
	"math-crit": {
		kind: "line",
		title: ["Đỉnh của f ở x = 5 (12,5 form)", "The peak of f is at x = 5 (12.5 forms)"],
		xs: [
			"3",
			"4",
			"5",
			"6",
			"7"
		],
		ys: [
			10.5,
			12,
			12.5,
			12,
			10.5
		]
	},
	"math-or": {
		kind: "table",
		title: ["1000 hội viên: hai nhóm chồng nhau", "1,000 members: two overlapping groups"],
		head: [["Nhóm", "Group"], ["Số người", "People"]],
		rows: [
			["Chỉ 60 phút / 60 min only", 300],
			["Chỉ ghế / Chair only", 150],
			["Cả hai / Both", 100],
			["Ít nhất một / At least one", 550]
		],
		mark: [[3, 1]]
	},
	"math-perm": {
		kind: "bars",
		title: ["Số cách xếp n kênh theo thứ tự (n!)", "Ways to order n channels (n!)"],
		items: [
			{
				label: ["n=2", "n=2"],
				value: 2
			},
			{
				label: ["n=3", "n=3"],
				value: 6
			},
			{
				label: ["n=4", "n=4"],
				value: 24
			},
			{
				label: ["n=5", "n=5"],
				value: 120
			}
		]
	},
	"math-taylor": {
		kind: "table",
		title: ["Tiếp tuyến tại x = 4 so với giá trị thật", "Tangent at x = 4 versus the real value"],
		head: [
			["x", "x"],
			["Ước lượng", "Estimate"],
			["Thật", "Real"],
			["Sai số", "Error"]
		],
		rows: [[
			4.5,
			12.5,
			12.375,
			.125
		], [
			6,
			14,
			12,
			2
		]],
		mark: [[1, 3]]
	}
};
var mathWalks = Object.fromEntries(Object.entries(base$1).map(([id, w]) => [id, visuals$1[id] ? {
	...w,
	visual: visuals$1[id]
} : w]));
/** Thống kê mô tả. Tháng 3 ở Lotus Spa. Dãy chính D: form 9 tuần gần đây, tuần cuối có đợt khuyến mãi. */
var base = {
	"ds-type": {
		vi: {
			story: "Tháng 3. Thảo gửi bảng khảo sát hội viên. Trước khi tính gì, bạn gọi tên kiểu của từng cột, vì kiểu quyết định phép tính nào có nghĩa.",
			words: [
				["Định danh", "Chữ để phân loại, không có thứ tự: kênh, chi nhánh."],
				["Thứ bậc", "Có thứ tự nhưng khoảng cách không đều: thấp, vừa, cao."],
				["Số", "Đo được, tính được trung bình: số form, số tiền."]
			],
			problem: "Bảng có 4 cột: kenh (GDN, Meta, TikTok), form (18, 20, 12), hai_long (thấp, vừa, cao), ma_cn (1, 2, 3 cho Quận 1, Quận 3, Thủ Đức). Cột nào thuộc kiểu nào, và có tính trung bình được không?",
			steps: [
				["kenh", "Chữ, không có thứ tự: định danh. Không tính trung bình, chỉ đếm."],
				["form", "Số đo được: tính trung bình được. (18 + 20 + 12) ÷ 3 ≈ 16,7."],
				["hai_long", "Có thứ tự thấp < vừa < cao nhưng khoảng cách không đều: thứ bậc. Dùng trung vị và đếm, không dùng trung bình."],
				["ma_cn", "Trông là số (1, 2, 3) nhưng là nhãn: định danh. Trung bình 2 không có nghĩa gì."]
			],
			say: "Cột ma_cn là cái bẫy: tính trung bình mã chi nhánh ra 2 và 2 không phải chi nhánh nào cả. Hỏi một câu «có hợp lý khi cộng hai giá trị này không?» là cách nhanh nhất để phân loại.",
			check: ["Trung bình của «thấp, vừa, cao» khi đổi thành 1, 2, 3 có đáng tin không?", "Không hẳn. Khoảng cách từ thấp sang vừa chưa chắc bằng từ vừa sang cao. Với thứ bậc, dùng trung vị hoặc mode."]
		},
		en: {
			story: "March. Thao sends a member survey table. Before calculating anything, you name each column's type, because the type decides which calculations make sense.",
			words: [
				["Nominal", "Text used to classify, with no order: channel, branch."],
				["Ordinal", "Has an order but uneven gaps: low, medium, high."],
				["Numeric", "Measurable and averageable: number of forms, amounts of money."]
			],
			problem: "The table has 4 columns: channel (GDN, Meta, TikTok), forms (18, 20, 12), satisfaction (low, medium, high), branch_code (1, 2, 3 for District 1, District 3, Thu Duc). What type is each column, and can you average it?",
			steps: [
				["channel", "Text, no order: nominal. No average, only counts."],
				["forms", "Measured number: averageable. (18 + 20 + 12) ÷ 3 ≈ 16.7."],
				["satisfaction", "Ordered low < medium < high but uneven gaps: ordinal. Use the median and counts, not the mean."],
				["branch_code", "Looks like a number (1, 2, 3) but is a label: nominal. An average of 2 means nothing."]
			],
			say: "The branch_code column is the trap: averaging branch codes gives 2 and 2 is no branch at all. Asking “does it make sense to add two of these values?” is the fastest way to classify.",
			check: ["Is the average of “low, medium, high” recoded as 1, 2, 3 trustworthy?", "Not really. The gap from low to medium need not equal that from medium to high. For ordinal data use the median or mode."]
		}
	},
	"ds-center": {
		vi: {
			story: "Chị Lan hỏi «form mỗi tuần thường là bao nhiêu?» Dữ liệu 9 tuần gần đây có một tuần khuyến mãi bất thường. Con số nào là câu trả lời công bằng?",
			words: [["Trung bình", "Tổng chia số lượng. Bị giá trị cực đoan kéo đi."], ["Trung vị", "Giá trị đứng giữa khi đã sắp xếp. Không bị cực đoan kéo."]],
			problem: "Form 9 tuần: 44, 46, 48, 50, 50, 51, 53, 54, 104 (tuần cuối có khuyến mãi). Tính trung bình và trung vị, rồi so sánh khi bỏ tuần 104.",
			steps: [
				["Tổng", "44 + 46 + 48 + 50 + 50 + 51 + 53 + 54 + 104 = 500."],
				["Trung bình", "500 ÷ 9 ≈ 55,6."],
				["Trung vị", "Đã sắp xếp, 9 giá trị nên lấy giá trị thứ 5: 50."],
				["Bỏ tuần 104", "Tổng còn 396 chia 8 = 49,5. Trung vị còn (50 + 50) ÷ 2 = 50."],
				["So sánh", "Một tuần cực đoan kéo trung bình từ 49,5 lên 55,6 (tăng 6,1), trong khi trung vị gần như đứng yên (50)."]
			],
			say: "Nếu báo «form mỗi tuần trung bình 55,6» thì chị Lan sẽ lập kế hoạch cho mức mà 8 trong 9 tuần không đạt. Trung vị 50 mô tả tuần điển hình trung thực hơn khi có tuần cực đoan. Nhớ báo cả hai khi hai số lệch nhau.",
			check: ["Khi nào trung bình và trung vị gần bằng nhau?", "Khi dữ liệu cân đối, không có giá trị cực đoan một phía. Ở dãy này bỏ tuần 104 thì 49,5 và 50 gần như bằng nhau."]
		},
		en: {
			story: "Ms. Lan asks “how many forms do we usually get a week?” The latest 9 weeks include one unusual promotion week. Which number is the fair answer?",
			words: [["Mean", "Total divided by count. Pulled by extreme values."], ["Median", "The middle value once sorted. Not pulled by extremes."]],
			problem: "Forms over 9 weeks: 44, 46, 48, 50, 50, 51, 53, 54, 104 (the last week had a promotion). Compute the mean and median, then compare once the 104 is dropped.",
			steps: [
				["Total", "44 + 46 + 48 + 50 + 50 + 51 + 53 + 54 + 104 = 500."],
				["Mean", "500 ÷ 9 ≈ 55.6."],
				["Median", "Sorted, 9 values so take the 5th: 50."],
				["Drop week 104", "The total becomes 396 divided by 8 = 49.5. The median becomes (50 + 50) ÷ 2 = 50."],
				["Compare", "One extreme week pulls the mean from 49.5 to 55.6 (up 6.1), while the median barely moves (50)."]
			],
			say: "If you report “55.6 forms a week on average”, Ms. Lan will plan for a level that 8 of the 9 weeks did not reach. The median 50 describes the typical week more honestly when there is an extreme week. Report both when the two differ.",
			check: ["When are the mean and median close?", "When the data is balanced with no extreme value on one side. In this series, once 104 is dropped, 49.5 and 50 are nearly equal."]
		}
	},
	"ds-mode": {
		vi: {
			story: "Bạn muốn biết kênh nào xuất hiện nhiều nhất trong cột utm_source, và tuần có số form nào hay gặp nhất.",
			words: [["Mode", "Giá trị xuất hiện nhiều lần nhất. Dùng được cho cả chữ."]],
			problem: "Cột utm_source của 6 form: Meta, GDN, TikTok, Meta, Meta, GDN. Và dãy form 9 tuần 44, 46, 48, 50, 50, 51, 53, 54, 104. Tìm mode của từng cái.",
			steps: [
				["Đếm utm_source", "Meta 3, GDN 2, TikTok 1."],
				["Mode của utm_source", "Meta (3 lần). Không tính được trung bình cho chữ nhưng mode thì có."],
				["Đếm dãy form", "50 xuất hiện 2 lần, các giá trị khác 1 lần."],
				["Mode của dãy form", "50."],
				["Trường hợp hòa", "Nếu hai giá trị cùng xuất hiện 3 lần thì có hai mode, và nên nói rõ cả hai."]
			],
			say: "Mode là đáp án cho câu hỏi «cái nào hay gặp nhất», nhất là với dữ liệu chữ như kênh. Với số, mode ít đáng tin hơn vì chỉ cần một giá trị lặp 2 lần như 50 là thắng, không nói gì về trung tâm thật.",
			check: ["Dãy 18, 20, 12 có mode không?", "Không có giá trị nào lặp lại, nên không có mode đáng nói (hoặc cả ba cùng mode). Đây là trường hợp mode không hữu ích."]
		},
		en: {
			story: "You want to know which channel appears most in the utm_source column, and which weekly form count is most common.",
			words: [["Mode", "The value that appears most often. Works for text too."]],
			problem: "The utm_source column of 6 forms: Meta, GDN, TikTok, Meta, Meta, GDN. And the 9-week forms series 44, 46, 48, 50, 50, 51, 53, 54, 104. Find the mode of each.",
			steps: [
				["Count utm_source", "Meta 3, GDN 2, TikTok 1."],
				["Mode of utm_source", "Meta (3 times). You cannot average text but you can take a mode."],
				["Count the forms series", "50 appears 2 times, every other value once."],
				["Mode of the forms series", "50."],
				["A tie", "If two values each appear 3 times there are two modes, and you should say both."]
			],
			say: "The mode answers “which is seen most”, especially for text data such as channels. For numbers the mode is less trustworthy because one value repeating twice like 50 wins, saying nothing about the true centre.",
			check: ["Does the series 18, 20, 12 have a mode?", "No value repeats, so there is no meaningful mode (or all three are modes). This is a case where the mode is not useful."]
		}
	},
	"ds-q": {
		vi: {
			story: "Chị Lan hỏi «tuần nào là tuần bất thường?» Bạn chia 9 tuần thành bốn phần bằng tứ phân vị và đặt hàng rào để nhận ra tuần lạ.",
			words: [
				["Tứ phân vị", "Ba điểm Q1, Q2, Q3 cắt dãy đã sắp thành bốn phần."],
				["IQR", "Q3 trừ Q1: độ rộng của nửa giữa dãy."],
				["Hàng rào", "Q3 + 1,5 × IQR ở trên và Q1 − 1,5 × IQR ở dưới. Ngoài hàng rào là điểm lạ."]
			],
			problem: "Dãy đã sắp: 44, 46, 48, 50, 50, 51, 53, 54, 104. Tìm Q1, Q2, Q3, IQR và hàng rào trên. Tuần 104 có lạ không?",
			steps: [
				["Q2 (trung vị)", "9 giá trị, giá trị thứ 5: 50."],
				["Q1", "Nửa dưới (4 giá trị trước trung vị): 44, 46, 48, 50. Trung vị nửa này: (46 + 48) ÷ 2 = 47."],
				["Q3", "Nửa trên: 51, 53, 54, 104. Trung vị: (53 + 54) ÷ 2 = 53,5."],
				["IQR", "53,5 − 47 = 6,5."],
				["Hàng rào trên", "53,5 + 1,5 × 6,5 = 53,5 + 9,75 = 63,25."],
				["Kết luận", "104 > 63,25 nên là điểm lạ. Hàng rào dưới là 47 − 9,75 = 37,25, và 44 nằm trong."]
			],
			say: "Tứ phân vị cho thấy nửa giữa của các tuần chỉ trải từ 47 đến 53,5, rất hẹp (IQR 6,5). Một tuần 104 nằm quá xa hàng rào nên chắc chắn là đợt khuyến mãi chứ không phải biến động bình thường. Điểm lạ phải được hỏi lý do, không phải xóa.",
			check: ["Nếu tuần khuyến mãi chỉ là 60 thì có lạ không?", "Không: 60 < 63,25 nên vẫn nằm trong hàng rào. Chỉ khi vượt 63,25 mới đáng ngờ."]
		},
		en: {
			story: "Ms. Lan asks “which week is unusual?” You split the 9 weeks into four parts using quartiles and set fences to spot the odd week.",
			words: [
				["Quartiles", "Three points Q1, Q2, Q3 that cut the sorted series into four parts."],
				["IQR", "Q3 minus Q1: the width of the middle half of the series."],
				["Fence", "Q3 + 1.5 × IQR above and Q1 − 1.5 × IQR below. Outside the fence is an odd point."]
			],
			problem: "The sorted series: 44, 46, 48, 50, 50, 51, 53, 54, 104. Find Q1, Q2, Q3, the IQR and the upper fence. Is week 104 odd?",
			steps: [
				["Q2 (median)", "9 values, the 5th value: 50."],
				["Q1", "Lower half (the 4 values before the median): 44, 46, 48, 50. Median of this half: (46 + 48) ÷ 2 = 47."],
				["Q3", "Upper half: 51, 53, 54, 104. Median: (53 + 54) ÷ 2 = 53.5."],
				["IQR", "53.5 − 47 = 6.5."],
				["Upper fence", "53.5 + 1.5 × 6.5 = 53.5 + 9.75 = 63.25."],
				["Conclusion", "104 > 63.25 so it is an odd point. The lower fence is 47 − 9.75 = 37.25, and 44 is inside."]
			],
			say: "The quartiles show the middle half of weeks spans only 47 to 53.5, very narrow (IQR 6.5). A 104 week sits far past the fence so it is surely the promotion and not normal wobble. An odd point must be asked about, not deleted.",
			check: ["If the promotion week were only 60, would it be odd?", "No: 60 < 63.25 so it is still inside the fence. Only past 63.25 does it become suspicious."]
		}
	},
	"ds-pct": {
		vi: {
			story: "Thảo hỏi «tuần 54 form thì thuộc nhóm nào?» Bạn dùng phân vị để nói tuần đó nằm ở vị trí nào trong 9 tuần.",
			words: [["Phân vị", "Phần trăm giá trị trong dãy nằm dưới một mức."], ["Vị trí p%", "p/100 × (n + 1) trong dãy đã sắp. Nếu ra số lẻ thì lấy giữa hai giá trị kề."]],
			problem: "Dãy đã sắp: 44, 46, 48, 50, 50, 51, 53, 54, 104. Tìm phân vị của giá trị 54, và giá trị ở phân vị 75 và 25.",
			steps: [
				["Phân vị của 54", "Có 7 giá trị nhỏ hơn 54 (44, 46, 48, 50, 50, 51, 53). 7 ÷ 9 ≈ 77,8%."],
				["Vị trí phân vị 75", "0,75 × (9 + 1) = 7,5: nằm giữa giá trị thứ 7 (53) và thứ 8 (54)."],
				["Giá trị phân vị 75", "(53 + 54) ÷ 2 = 53,5, trùng với Q3 ở thẻ trước."],
				["Vị trí phân vị 25", "0,25 × 10 = 2,5: giữa giá trị thứ 2 (46) và thứ 3 (48) = 47, trùng với Q1."]
			],
			say: "Tuần 54 form tốt hơn khoảng 78% số tuần, nghĩa là khá cao nhưng chưa phải đỉnh. Phân vị là một vị trí trong dãy đã sắp xếp chứ không phải một phần trăm của giá trị. Tứ phân vị chỉ là phân vị 25, 50, 75.",
			check: ["Phân vị 50 của dãy này là bao nhiêu?", "0,5 × 10 = 5: giá trị thứ 5 là 50. Trùng với trung vị."]
		},
		en: {
			story: "Thao asks “which group does a 54-form week belong to?” You use percentiles to say where that week stands among the 9 weeks.",
			words: [["Percentile", "The percentage of values in the series that lie below a level."], ["Position p%", "p/100 × (n + 1) in the sorted series. If it is fractional take the midpoint of the two neighbours."]],
			problem: "The sorted series: 44, 46, 48, 50, 50, 51, 53, 54, 104. Find the percentile of the value 54, and the values at the 75th and 25th percentiles.",
			steps: [
				["Percentile of 54", "7 values lie below 54 (44, 46, 48, 50, 50, 51, 53). 7 ÷ 9 ≈ 77.8%."],
				["Position of the 75th", "0.75 × (9 + 1) = 7.5: between the 7th value (53) and the 8th (54)."],
				["Value at the 75th", "(53 + 54) ÷ 2 = 53.5, equal to Q3 from the previous card."],
				["Position of the 25th", "0.25 × 10 = 2.5: between the 2nd (46) and 3rd (48) = 47, equal to Q1."]
			],
			say: "A 54-form week beats about 78% of weeks, fairly high but not the peak. A percentile is a position in the sorted series, not a percentage of the value. Quartiles are simply the 25th, 50th and 75th percentiles.",
			check: ["What is the 50th percentile of this series?", "0.5 × 10 = 5: the 5th value is 50. It equals the median."]
		}
	},
	"ds-var": {
		vi: {
			story: "Thảo hỏi «form mỗi tuần dao động nhiều không?» Bạn lấy 5 tuần ổn định và đo độ phân tán bằng phương sai, chú ý chia n hay n − 1.",
			words: [["Phương sai", "Trung bình của bình phương độ lệch so với trung bình."], ["n − 1", "Với mẫu, chia cho n − 1 chứ không chia n, để không đánh giá thấp độ phân tán của tổng thể."]],
			problem: "5 tuần ổn định: 46, 48, 50, 52, 54. Tính trung bình, các độ lệch, phương sai mẫu (chia n − 1) và phương sai tổng thể (chia n).",
			steps: [
				["Trung bình", "(46 + 48 + 50 + 52 + 54) ÷ 5 = 250 ÷ 5 = 50."],
				["Độ lệch", "−4, −2, 0, +2, +4. Tổng bằng 0, nên phải bình phương."],
				["Bình phương rồi cộng", "16 + 4 + 0 + 4 + 16 = 40."],
				["Phương sai mẫu", "40 ÷ (5 − 1) = 10."],
				["Phương sai tổng thể", "40 ÷ 5 = 8."]
			],
			say: "Chia 4 cho 10, chia 5 cho 8: khác nhau 25%. Với mẫu nhỏ chia n − 1 để bù cho việc trung bình mẫu đã nằm sẵn giữa dữ liệu. Nếu 5 tuần này chỉ là mẫu của một năm 52 tuần thì dùng 10, không phải 8.",
			check: ["Vì sao phải bình phương độ lệch thay vì cộng trực tiếp?", "Vì tổng độ lệch quanh trung bình luôn bằng 0 (−4−2+0+2+4 = 0), nên không đo được gì. Bình phương làm mọi độ lệch dương."]
		},
		en: {
			story: "Thao asks “do weekly forms swing a lot?” You take 5 steady weeks and measure spread with variance, taking care whether to divide by n or n − 1.",
			words: [["Variance", "The average of squared deviations from the mean."], ["n − 1", "For a sample, divide by n − 1 rather than n, so as not to underestimate the population's spread."]],
			problem: "5 steady weeks: 46, 48, 50, 52, 54. Compute the mean, the deviations, the sample variance (divide by n − 1) and the population variance (divide by n).",
			steps: [
				["Mean", "(46 + 48 + 50 + 52 + 54) ÷ 5 = 250 ÷ 5 = 50."],
				["Deviations", "−4, −2, 0, +2, +4. They sum to 0, so they must be squared."],
				["Square then add", "16 + 4 + 0 + 4 + 16 = 40."],
				["Sample variance", "40 ÷ (5 − 1) = 10."],
				["Population variance", "40 ÷ 5 = 8."]
			],
			say: "Dividing by 4 gives 10, dividing by 5 gives 8: a 25% difference. For a small sample divide by n − 1 to make up for the sample mean already sitting inside the data. If these 5 weeks are just a sample of a 52-week year, use 10, not 8.",
			check: ["Why square the deviations instead of adding them directly?", "Because deviations around the mean always sum to 0 (−4−2+0+2+4 = 0), measuring nothing. Squaring makes every deviation positive."]
		}
	},
	"ds-sd": {
		vi: {
			story: "Phương sai 10 có đơn vị «form bình phương», chị Lan không đọc được. Bạn lấy căn để quay về form, rồi so với dãy có tuần khuyến mãi.",
			words: [["Độ lệch chuẩn", "Căn bậc hai của phương sai. Cùng đơn vị với dữ liệu."]],
			problem: "5 tuần ổn định (46, 48, 50, 52, 54) có phương sai mẫu 10. Tính độ lệch chuẩn. Rồi so với 9 tuần có tuần 104, có phương sai mẫu ≈ 340.",
			steps: [
				["Độ lệch chuẩn của 5 tuần", "√10 ≈ 3,16 form."],
				["Đọc", "Một tuần thường lệch khoảng 3 form so với 50."],
				["Với 9 tuần có tuần 104", "√340 ≈ 18,4 form (phương sai mẫu 2720,2 ÷ 8 ≈ 340)."],
				["So sánh", "18,4 so với 3,16: một tuần 104 đã làm độ lệch chuẩn tăng gần 6 lần."],
				["Khoảng thường gặp", "Với 5 tuần ổn định, 50 ± 2 × 3,16 ≈ 43,7 đến 56,3: 104 nằm rất xa ngoài khoảng này."]
			],
			say: "Độ lệch chuẩn 3,16 form là một đơn vị chị Lan hiểu. Và so hai độ lệch chuẩn (3,16 so với 18,4) cho thấy tuần khuyến mãi phá vỡ mức dao động bình thường. Độ lệch chuẩn nhạy với giá trị cực đoan, giống trung bình.",
			check: ["Nếu mọi form đều tăng thêm 10, độ lệch chuẩn đổi thế nào?", "Không đổi: cộng cùng một số vào mọi giá trị chỉ dịch dãy sang phải, không đổi độ phân tán."]
		},
		en: {
			story: "A variance of 10 has units of “forms squared”, which Ms. Lan cannot read. You take the root to return to forms, then compare with the series containing the promotion week.",
			words: [["Standard deviation", "The square root of the variance. Same unit as the data."]],
			problem: "The 5 steady weeks (46, 48, 50, 52, 54) have sample variance 10. Compute the standard deviation. Then compare with the 9 weeks including week 104, whose sample variance is about 340.",
			steps: [
				["SD of the 5 weeks", "√10 ≈ 3.16 forms."],
				["Read", "A typical week differs from 50 by about 3 forms."],
				["With the 9 weeks including 104", "√340 ≈ 18.4 forms (sample variance 2720.2 ÷ 8 ≈ 340)."],
				["Compare", "18.4 versus 3.16: a single 104 week raised the standard deviation almost 6 times."],
				["Usual range", "For the 5 steady weeks, 50 ± 2 × 3.16 ≈ 43.7 to 56.3: 104 lies far outside it."]
			],
			say: "A standard deviation of 3.16 forms is a unit Ms. Lan understands. And comparing two standard deviations (3.16 versus 18.4) shows the promotion week breaks the normal level of wobble. The standard deviation is sensitive to extreme values, like the mean.",
			check: ["If every form count rises by 10, how does the standard deviation change?", "It does not: adding the same number to every value just shifts the series right, leaving the spread unchanged."]
		}
	},
	"ds-range": {
		vi: {
			story: "Một cách nhanh nhất để nói «form dao động trong khoảng nào»: lấy giá trị lớn nhất trừ nhỏ nhất. Bạn xem cách khoảng này phản ứng với tuần khuyến mãi.",
			words: [["Khoảng biến thiên", "Giá trị lớn nhất trừ giá trị nhỏ nhất. Chỉ nhìn hai đầu."]],
			problem: "Dãy 9 tuần: 44, 46, 48, 50, 50, 51, 53, 54, 104. Tính khoảng biến thiên có và không có tuần 104, và so với IQR 6,5.",
			steps: [
				["Có tuần 104", "104 − 44 = 60."],
				["Bỏ tuần 104", "Lớn nhất còn 54: 54 − 44 = 10."],
				["So sánh IQR", "IQR (tứ phân vị) là 6,5, không đổi khi bỏ tuần cực đoan."],
				["Đọc", "Một tuần làm khoảng nhảy từ 10 lên 60, gấp 6 lần, còn IQR vẫn là 6,5."]
			],
			say: "Khoảng biến thiên chỉ dựa vào hai giá trị, nên một tuần lạ làm nó nhảy vọt: 10 thành 60. IQR ổn định hơn vì nó nhìn nửa giữa dãy. Dùng khoảng để có cái nhìn nhanh, dùng IQR hoặc độ lệch chuẩn khi có thể có tuần lạ.",
			check: ["Hai dãy khác nhau hoàn toàn có thể có cùng khoảng biến thiên không?", "Có. Chỉ cần cùng giá trị lớn nhất và nhỏ nhất, ví dụ (44, 50, 54) và (44, 45, 54): cùng khoảng 10 nhưng phân bố khác nhau."]
		},
		en: {
			story: "The quickest way to say “what range do forms swing in”: take the largest minus the smallest. You see how this range reacts to the promotion week.",
			words: [["Range", "The largest value minus the smallest. It looks only at the two ends."]],
			problem: "The 9-week series: 44, 46, 48, 50, 50, 51, 53, 54, 104. Compute the range with and without week 104, and compare with the IQR of 6.5.",
			steps: [
				["With week 104", "104 − 44 = 60."],
				["Without week 104", "The largest becomes 54: 54 − 44 = 10."],
				["Compare the IQR", "The IQR (from quartiles) is 6.5, unchanged when the extreme week is dropped."],
				["Read", "One week made the range jump from 10 to 60, 6 times as much, while the IQR stayed 6.5."]
			],
			say: "The range depends on only two values, so one odd week makes it leap: 10 becomes 60. The IQR is steadier because it looks at the middle half. Use the range for a quick look, and the IQR or standard deviation when odd weeks are possible.",
			check: ["Can two completely different series have the same range?", "Yes. They only need the same largest and smallest values, for example (44, 50, 54) and (44, 45, 54): same range of 10 but different distributions."]
		}
	},
	"ds-mad": {
		vi: {
			story: "Thảo hỏi «có cách nào tính độ phân tán mà không cần bình phương?» Bạn tính độ lệch tuyệt đối trung bình (MAD) cho 5 tuần ổn định và so với độ lệch chuẩn.",
			words: [["MAD", "Trung bình của trị tuyệt đối độ lệch so với trung bình."]],
			problem: "5 tuần: 46, 48, 50, 52, 54 (trung bình 50, độ lệch chuẩn mẫu 3,16). Tính MAD và so sánh.",
			steps: [
				["Độ lệch", "−4, −2, 0, +2, +4."],
				["Trị tuyệt đối", "4, 2, 0, 2, 4."],
				["Cộng", "4 + 2 + 0 + 2 + 4 = 12."],
				["Chia số lượng", "12 ÷ 5 = 2,4."],
				["So sánh với độ lệch chuẩn", "2,4 so với 3,16 (mẫu) hoặc √8 ≈ 2,83 (tổng thể). MAD luôn nhỏ hơn hoặc bằng độ lệch chuẩn."]
			],
			say: "MAD dễ giải thích: «một tuần trung bình lệch 2,4 form so với 50». Nhưng nó không phải độ lệch chuẩn, hai con số khác nhau và không thể dùng thay cho nhau trong công thức. MAD phạt các tuần xa trung bình nhẹ hơn.",
			check: ["Vì sao độ lệch chuẩn thường lớn hơn MAD?", "Vì bình phương phóng đại các độ lệch lớn (4 thành 16) rồi căn lại, nên đẩy kết quả lên. MAD đối xử mọi độ lệch như nhau."]
		},
		en: {
			story: "Thao asks “is there a way to measure spread without squaring?” You compute the mean absolute deviation (MAD) for the 5 steady weeks and compare with the standard deviation.",
			words: [["MAD", "The average of the absolute values of deviations from the mean."]],
			problem: "5 weeks: 46, 48, 50, 52, 54 (mean 50, sample standard deviation 3.16). Compute the MAD and compare.",
			steps: [
				["Deviations", "−4, −2, 0, +2, +4."],
				["Absolute values", "4, 2, 0, 2, 4."],
				["Add", "4 + 2 + 0 + 2 + 4 = 12."],
				["Divide by count", "12 ÷ 5 = 2.4."],
				["Compare with the standard deviation", "2.4 versus 3.16 (sample) or √8 ≈ 2.83 (population). MAD is always at most the standard deviation."]
			],
			say: "MAD is easy to explain: “a typical week is 2.4 forms from 50”. But it is not the standard deviation; the two numbers differ and cannot stand in for each other in formulas. MAD penalises weeks far from the mean more gently.",
			check: ["Why is the standard deviation usually bigger than MAD?", "Because squaring magnifies large deviations (4 becomes 16) before the root brings it back, pushing the result up. MAD treats every deviation equally."]
		}
	},
	"ds-cov": {
		vi: {
			story: "Thử nghiệm TikTok có ba mức ngân sách (3, 4, 5 triệu) và ba kết quả (10, 12, 13 form). Bạn muốn biết ngân sách và form có cùng đi lên không.",
			words: [["Hiệp phương sai", "Trung bình của tích hai độ lệch. Dương khi hai cột cùng phía trung bình, âm khi ngược."]],
			problem: "Ngân sách x = 3, 4, 5 (trung bình 4) và form y = 10, 12, 13 (trung bình ≈ 11,67). Tính hiệp phương sai mẫu.",
			steps: [
				["Độ lệch của x", "−1, 0, +1."],
				["Độ lệch của y", "10 − 11,67 = −1,67; 12 − 11,67 = +0,33; 13 − 11,67 = +1,33."],
				["Tích từng cặp", "(−1)(−1,67) = 1,67; 0 × 0,33 = 0; (+1)(+1,33) = 1,33."],
				["Cộng", "1,67 + 0 + 1,33 = 3."],
				["Chia n − 1", "3 ÷ 2 = 1,5. Dương: ngân sách và form cùng đi lên."]
			],
			say: "Dấu dương cho biết hướng: khi ngân sách trên trung bình thì form cũng trên trung bình. Nhưng độ lớn 1,5 phụ thuộc đơn vị (triệu và form), không so được với cặp biến khác. Muốn so được cần chuẩn hóa, và đó là hệ số tương quan.",
			check: ["Nếu form là 13, 12, 10 (ngược thứ tự) thì dấu của hiệp phương sai là gì?", "Âm: ngân sách tăng thì form giảm, tích mỗi cặp đổi dấu thành âm."]
		},
		en: {
			story: "The TikTok test has three budget levels (3, 4, 5 million) and three results (10, 12, 13 forms). You want to know whether budget and forms rise together.",
			words: [["Covariance", "The average of the products of two deviations. Positive when two columns are on the same side of their means, negative when opposite."]],
			problem: "Budget x = 3, 4, 5 (mean 4) and forms y = 10, 12, 13 (mean ≈ 11.67). Compute the sample covariance.",
			steps: [
				["Deviations of x", "−1, 0, +1."],
				["Deviations of y", "10 − 11.67 = −1.67; 12 − 11.67 = +0.33; 13 − 11.67 = +1.33."],
				["Product of each pair", "(−1)(−1.67) = 1.67; 0 × 0.33 = 0; (+1)(+1.33) = 1.33."],
				["Add", "1.67 + 0 + 1.33 = 3."],
				["Divide by n − 1", "3 ÷ 2 = 1.5. Positive: budget and forms rise together."]
			],
			say: "A positive sign tells the direction: when budget is above its mean, forms are above theirs too. But the size 1.5 depends on the units (million and forms) and cannot be compared with another pair. To compare you need to standardise, which is the correlation coefficient.",
			check: ["If forms were 13, 12, 10 (reverse order), what is the covariance's sign?", "Negative: when budget rises, forms fall, so each pair's product flips to negative."]
		}
	},
	"ds-corr": {
		vi: {
			story: "Chị Lan hỏi «ngân sách TikTok và form liên quan chặt đến đâu?» Bạn chuẩn hóa hiệp phương sai thành hệ số tương quan, một con số từ −1 đến 1.",
			words: [["Hệ số tương quan r", "Hiệp phương sai chia tích hai độ lệch chuẩn. Luôn từ −1 đến 1, không có đơn vị."], ["Tương quan khác nguyên nhân", "Hai cột đi cùng nhau không có nghĩa cột này gây ra cột kia."]],
			problem: "x = 3, 4, 5 và y = 10, 12, 13. Σ(x − x̄)(y − ȳ) = 3, Σ(x − x̄)² = 2, Σ(y − ȳ)² ≈ 4,67. Tính r và đọc kết quả.",
			steps: [
				["Công thức", "r = Σ(x − x̄)(y − ȳ) ÷ √[Σ(x − x̄)² × Σ(y − ȳ)²]."],
				["Mẫu số", "√(2 × 4,67) = √9,33 ≈ 3,06."],
				["Tính r", "3 ÷ 3,06 ≈ 0,98."],
				["Đọc", "Gần 1: gần như một đường thẳng đi lên. Ngân sách tăng thì form tăng đều."],
				["Kiểm tra giới hạn", "0,98 nằm trong khoảng −1 đến 1, hợp lệ."]
			],
			say: "r = 0,98 rất cao, nhưng chỉ có 3 điểm nên dễ ngẫu nhiên. Và dù cao, nó chỉ nói ngân sách và form đi cùng nhau, không nói tăng ngân sách là nguyên nhân: có thể ba tuần đó trùng với dịp Tết nhiều khách. Muốn kết luận nguyên nhân cần thử nghiệm có kiểm soát.",
			check: ["Nếu tính form theo đơn vị «chục form» (chia 10) thay vì từng form, r có đổi không?", "Không. r không có đơn vị và không đổi khi nhân hay cộng cùng một số vào một cột. Đây là lợi thế so với hiệp phương sai."]
		},
		en: {
			story: "Ms. Lan asks “how tightly are TikTok budget and forms related?” You standardise the covariance into a correlation coefficient, a number from −1 to 1.",
			words: [["Correlation coefficient r", "Covariance divided by the product of the two standard deviations. Always between −1 and 1, with no unit."], ["Correlation is not causation", "Two columns moving together does not mean one causes the other."]],
			problem: "x = 3, 4, 5 and y = 10, 12, 13. Σ(x − x̄)(y − ȳ) = 3, Σ(x − x̄)² = 2, Σ(y − ȳ)² ≈ 4.67. Compute r and read the result.",
			steps: [
				["Formula", "r = Σ(x − x̄)(y − ȳ) ÷ √[Σ(x − x̄)² × Σ(y − ȳ)²]."],
				["Denominator", "√(2 × 4.67) = √9.33 ≈ 3.06."],
				["Compute r", "3 ÷ 3.06 ≈ 0.98."],
				["Read", "Close to 1: almost a straight line going up. Budget up, forms up steadily."],
				["Check the bounds", "0.98 lies between −1 and 1, valid."]
			],
			say: "r = 0.98 is very high, but with only 3 points it could easily be chance. And even if high, it only says budget and forms move together, not that raising budget is the cause: those three weeks may coincide with a busy holiday. Concluding cause needs a controlled experiment.",
			check: ["If you count forms in “tens of forms” (divide by 10) instead of single forms, does r change?", "No. r has no unit and does not change when you multiply or add the same number to a column. This is its advantage over covariance."]
		}
	}
};
var visuals = {
	"ds-type": {
		kind: "table",
		title: ["Bốn cột, ba kiểu", "Four columns, three types"],
		head: [
			["Cột", "Column"],
			["Kiểu", "Type"],
			["Tính trung bình?", "Averageable?"]
		],
		rows: [
			[
				"kenh / channel",
				"định danh / nominal",
				"không / no"
			],
			[
				"form / forms",
				"số / numeric",
				"có / yes"
			],
			[
				"hai_long / satisfaction",
				"thứ bậc / ordinal",
				"không / no"
			],
			[
				"ma_cn / branch_code",
				"định danh / nominal",
				"không / no"
			]
		],
		mark: [[3, 1]]
	},
	"ds-center": {
		kind: "bars",
		title: ["Form 9 tuần (tuần cuối có khuyến mãi)", "Forms over 9 weeks (last week had a promotion)"],
		items: [
			{
				label: ["T1", "W1"],
				value: 44
			},
			{
				label: ["T2", "W2"],
				value: 46
			},
			{
				label: ["T3", "W3"],
				value: 48
			},
			{
				label: ["T4", "W4"],
				value: 50
			},
			{
				label: ["T5", "W5"],
				value: 50
			},
			{
				label: ["T6", "W6"],
				value: 51
			},
			{
				label: ["T7", "W7"],
				value: 53
			},
			{
				label: ["T8", "W8"],
				value: 54
			},
			{
				label: ["T9", "W9"],
				value: 104
			}
		],
		note: ["Trung bình 55,6; trung vị 50.", "Mean 55.6; median 50."]
	},
	"ds-q": {
		kind: "table",
		title: ["Tứ phân vị và hàng rào của dãy 9 tuần", "Quartiles and fences of the 9-week series"],
		head: [["Chỉ số", "Measure"], ["Giá trị", "Value"]],
		rows: [
			["Q1", 47],
			["Q2 (median)", 50],
			["Q3", 53.5],
			["IQR", 6.5],
			["Hàng rào trên / upper fence", 63.25]
		],
		mark: [[4, 1]],
		note: ["104 vượt hàng rào trên 63,25.", "104 is beyond the upper fence of 63.25."]
	},
	"ds-range": {
		kind: "table",
		title: ["Một tuần lạ làm khoảng nhảy vọt, IQR thì không", "One odd week makes the range leap, the IQR does not"],
		head: [
			["Dãy", "Series"],
			["Khoảng biến thiên", "Range"],
			["IQR", "IQR"]
		],
		rows: [[
			"Có tuần 104 / with 104",
			60,
			6.5
		], [
			"Bỏ tuần 104 / without 104",
			10,
			6.5
		]],
		mark: [[0, 1]]
	},
	"ds-var": {
		kind: "table",
		title: ["Độ lệch quanh trung bình 50", "Deviations around the mean 50"],
		head: [
			["Form", "Forms"],
			["Độ lệch", "Deviation"],
			["Bình phương", "Squared"]
		],
		rows: [
			[
				46,
				-4,
				16
			],
			[
				48,
				-2,
				4
			],
			[
				50,
				0,
				0
			],
			[
				52,
				2,
				4
			],
			[
				54,
				4,
				16
			],
			[
				"Tổng / Sum",
				0,
				40
			]
		],
		mark: [[5, 2]],
		note: ["Mẫu: 40 ÷ 4 = 10. Tổng thể: 40 ÷ 5 = 8.", "Sample: 40 ÷ 4 = 10. Population: 40 ÷ 5 = 8."]
	},
	"ds-cov": {
		kind: "line",
		title: ["Form theo ngân sách TikTok (triệu)", "Forms by TikTok budget (million)"],
		xs: [
			"3",
			"4",
			"5"
		],
		ys: [
			10,
			12,
			13
		]
	},
	"ds-corr": {
		kind: "line",
		title: ["r ≈ 0,98: gần như một đường thẳng đi lên", "r ≈ 0.98: almost a straight line going up"],
		xs: [
			"3",
			"4",
			"5"
		],
		ys: [
			10,
			12,
			13
		]
	}
};
var dsWalks = Object.fromEntries(Object.entries(base).map(([id, w]) => [id, visuals[id] ? {
	...w,
	visual: visuals[id]
} : w]));
var walks = {
	...pilotWalks,
	...c0Walks,
	...c1Walks,
	...mathWalks,
	...dsWalks
};
/** Hình minh họa trong mục «Làm từng bước»: bảng tính, biểu đồ cột, biểu đồ đường. Dùng màu từ token của app. */
function WalkVisual({ v, lang }) {
	const i = lang === "en" ? 1 : 0;
	const frame = (body) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "mt-4 rounded-xl border border-line bg-paper p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "text-xs uppercase tracking-widest text-muted",
				children: v.title[i]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 overflow-x-auto",
				children: body
			}),
			v.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: v.note[i]
			}) : null
		]
	});
	if (v.kind === "table") {
		const marked = new Set((v.mark ?? []).map(([r, c]) => `${r},${c}`));
		const cols = "ABCDEFGH";
		return frame(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "min-w-full border-collapse text-sm tabular-nums",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "w-8 border border-line bg-card" }), v.head.map((h, c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
				className: "border border-line bg-card px-2 py-1 text-left font-medium",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mr-1 text-xs text-muted",
					children: cols[c]
				}), h[i]]
			}, c))] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: v.rows.map((row, r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
				className: "border border-line bg-card px-2 py-1 text-xs font-normal text-muted",
				children: r + 1
			}), row.map((cell, c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: `border border-line px-2 py-1 ${typeof cell === "number" ? "text-right" : ""} ${marked.has(`${r},${c}`) ? "bg-accent font-medium text-accent-ink" : "bg-card"}`,
				children: cell
			}, c))] }, r)) })]
		}));
	}
	const W = 320;
	const H = 160;
	const pad = 28;
	if (v.kind === "bars") {
		const max = Math.max(...v.items.map((x) => x.value)) * 1.15;
		const bw = 264 / v.items.length;
		return frame(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: `0 0 ${W} ${H}`,
			className: "w-full max-w-md",
			role: "img",
			"aria-label": v.title[i],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: pad,
				y1: 132,
				x2: 292,
				y2: 132,
				stroke: "currentColor",
				opacity: .3
			}), v.items.map((it, k) => {
				const h = 104 * it.value / max;
				const x = pad + k * bw + bw * .2;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x,
						y: 132 - h,
						width: bw * .6,
						height: h,
						rx: 3,
						className: "fill-accent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
						x: x + bw * .3,
						y: 132 - h - 4,
						textAnchor: "middle",
						fontSize: 11,
						fill: "currentColor",
						children: [it.value, v.unit ?? ""]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: x + bw * .3,
						y: 146,
						textAnchor: "middle",
						fontSize: 11,
						fill: "currentColor",
						opacity: .7,
						children: it.label[i]
					})
				] }, k);
			})]
		}));
	}
	const lo = Math.min(...v.ys);
	const hi = Math.max(...v.ys);
	const span = hi - lo || 1;
	const min = lo - span * .3;
	const rng = hi + span * .3 - min;
	const px = (k) => pad + k * 264 / Math.max(v.ys.length - 1, 1);
	const py = (y) => 132 - (y - min) / rng * 104;
	return frame(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${W} ${H}`,
		className: "w-full max-w-md",
		role: "img",
		"aria-label": v.title[i],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: pad,
				y1: 132,
				x2: 292,
				y2: 132,
				stroke: "currentColor",
				opacity: .3
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
				fill: "none",
				strokeWidth: 2,
				className: "stroke-accent",
				points: v.ys.map((y, k) => `${px(k)},${py(y)}`).join(" ")
			}),
			v.ys.map((y, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: px(k),
					cy: py(y),
					r: 3.5,
					className: "fill-accent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x: px(k),
					y: py(y) - 8,
					textAnchor: "middle",
					fontSize: 11,
					fill: "currentColor",
					children: [y, v.unit ?? ""]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: px(k),
					y: 146,
					textAnchor: "middle",
					fontSize: 11,
					fill: "currentColor",
					opacity: .7,
					children: v.xs[k]
				})
			] }, k))
		]
	}));
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
		onMap: "Xem trên bản đồ",
		v2d: "Đồ thị kéo được",
		v3d: "Cảnh 3D",
		walk: "Làm từng bước với số thật",
		words: "Từ cần biết",
		problem: "Bài toán",
		steps: "Từng bước",
		say: "Kết luận bằng lời",
		check: "Tự kiểm tra",
		reveal: "Xem đáp án",
		story: "Câu chuyện Lotus Spa"
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
		onMap: "See on the map",
		v2d: "Interactive chart",
		v3d: "3D scene",
		walk: "Worked step by step with real numbers",
		words: "Words you need",
		problem: "The problem",
		steps: "Step by step",
		say: "The conclusion in words",
		check: "Check yourself",
		reveal: "Show answer",
		story: "The Lotus Spa story"
	}
};
function WalkBlock({ walk, head, visual, lang }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8 rounded-card border border-line bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xs uppercase tracking-widest text-muted",
				children: head.walk
			}),
			walk.story ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 rounded-xl border-l-4 border-accent bg-paper p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-muted",
					children: head.story
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 leading-relaxed",
					children: walk.story
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 text-sm font-medium",
				children: head.words
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-1 space-y-2",
				children: walk.words.map(([term, meaning]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "font-medium",
					children: term
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "leading-relaxed text-muted",
					children: meaning
				})] }, term))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-sm font-medium",
				children: head.problem
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 leading-relaxed",
				children: walk.problem
			}),
			visual ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalkVisual, {
				v: visual,
				lang
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-sm font-medium",
				children: head.steps
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-2 space-y-3",
				children: walk.steps.map(([title, body], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl leading-none text-accent",
						children: i + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "leading-relaxed",
						children: body
					})] })]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-sm font-medium",
				children: head.say
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 leading-relaxed",
				children: walk.say
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-sm font-medium",
				children: head.check
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 leading-relaxed",
				children: walk.check[0]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-2 min-h-11 rounded-full border border-line px-4 text-sm",
				onClick: () => setOpen((v) => !v),
				children: open ? "−" : head.reveal
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 rounded-xl bg-paper p-3 leading-relaxed",
				children: walk.check[1]
			}) : null
		]
	});
}
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
	const hasDemo = Boolean(demos[concept.id]);
	const hasLab = Boolean(concept.sim) && !hasDemo;
	const [view, setView] = (0, import_react.useState)("2d");
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
					hasLab ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 inline-flex rounded-full border border-line bg-card p-1 text-sm",
						role: "tablist",
						children: ["2d", "3d"].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": view === id,
							className: `min-h-10 rounded-full px-4 ${view === id ? "bg-ink text-paper" : ""}`,
							onClick: () => setView(id),
							children: id === "2d" ? head.v2d : head.v3d
						}, id))
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: hasDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataDemo, {
							demo: demos[concept.id],
							lang
						}) : hasLab && view === "2d" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sim, { id: concept.sim }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stage3D, {
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
			walks[concept.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalkBlock, {
				walk: walks[concept.id][lang],
				head,
				visual: walks[concept.id].visual,
				lang
			}) : null,
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
			concept.sim && hasDemo || concept.widget ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs uppercase tracking-widest text-muted",
					children: head.more
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3",
					children: [concept.widget ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InferWidget, {
						id: concept.widget,
						lang
					}) : null, concept.sim && hasDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sim, { id: concept.sim }) : null]
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
