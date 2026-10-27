import { c as lessons } from "./catalog-DRaoKsF4.mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Search } from "../_libs/lucide-react.mjs";
import { O as studyCopy, S as getStudy, k as studyListTitle } from "./router-DCdNt3Gq.mjs";
import { a as topicIndexOf, o as topics, r as relatedOf, t as mapNodeIds } from "./map-CpJvZnVn.mjs";
import { t as walks } from "./walk-BWyJOgjD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reference-CjlMB9QU.js
var import_jsx_runtime = require_jsx_runtime();
var topicName = (i, lang) => i < 0 ? lang === "en" ? "Original lectures" : "Bài giảng gốc" : lang === "en" ? topics[i].en : topics[i].vi;
var topicColor = (i) => i < 0 ? "hsl(30 8% 55%)" : `hsl(${topics[i].hue} 60% 50%)`;
function Filters({ lang, q, setQ, topic, setTopic, counts, placeholder, allLabel }) {
	const total = Object.values(counts).reduce((a, b) => a + b, 0);
	const shown = [...topics.map((_, i) => i), -1].filter((i) => {
		var _counts$i;
		return ((_counts$i = counts[i]) !== null && _counts$i !== void 0 ? _counts$i : 0) > 0;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "relative block max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder,
				className: "min-h-11 w-full rounded-full border border-line bg-card pl-9 pr-4 outline-none"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setTopic(null),
				className: `min-h-11 rounded-full border border-line px-3 text-sm ${topic === null ? "bg-ink text-paper" : ""}`,
				children: [
					allLabel,
					" · ",
					total
				]
			}), shown.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setTopic(topic === i ? null : i),
				className: `inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-3 text-sm ${topic === i ? "bg-ink text-paper" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block size-3 rounded-full",
						style: { background: topicColor(i) }
					}),
					topicName(i, lang),
					" · ",
					counts[i]
				]
			}, i))]
		})]
	});
}
var T = String.raw;
var formulaExtra = {
	"infer-intro": {
		tex: T`\bar{x}\approx\mu,\qquad \hat{p}\approx p`,
		sym: [[
			T`\bar{x},\ \hat{p}`,
			"số tính trên mẫu",
			"computed on the sample"
		], [
			T`\mu,\ p`,
			"giá trị thật của tổng thể (không biết)",
			"true population value (unknown)"
		]]
	},
	rv: {
		tex: T`X:\Omega\to\mathbb{R},\qquad \sum_x P(X=x)=1`,
		sym: [[
			"X",
			"biến ngẫu nhiên",
			"random variable"
		], [
			T`\Omega`,
			"tập mọi kết quả",
			"set of outcomes"
		]]
	},
	"no-exp": {
		tex: T`P(A)=\frac{|A|}{|\Omega|}`,
		sym: [[
			"|A|",
			"số kết quả thuận lợi",
			"favourable outcomes"
		], [
			T`|\Omega|`,
			"số kết quả có thể",
			"possible outcomes"
		]]
	},
	normal: {
		tex: T`f(x)=\frac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{(x-\mu)^2}{2\sigma^2}}`,
		sym: [[
			T`\mu`,
			"trung bình (tâm)",
			"mean (centre)"
		], [
			T`\sigma`,
			"độ lệch chuẩn (độ rộng)",
			"standard deviation (width)"
		]]
	},
	"ht-rule": {
		tex: T`\text{bác }H_0\ \Longleftrightarrow\ p<\alpha`,
		sym: [[
			T`\alpha`,
			"mức ý nghĩa, đặt trước khi nhìn số",
			"significance level, set before looking"
		], [
			"p",
			"p-value",
			"p-value"
		]]
	},
	"ht-h0": {
		tex: T`H_0:\ p_B=p_A\qquad H_1:\ p_B\neq p_A`,
		sym: [[
			T`H_0`,
			"giả thuyết không (không khác)",
			"null (no difference)"
		], [
			T`H_1`,
			"giả thuyết đối (có khác)",
			"alternative (a difference)"
		]]
	},
	"ht-err": {
		tex: T`\alpha=P(\text{bác }H_0\mid H_0\text{ đúng}),\quad \beta=P(\text{giữ }H_0\mid H_1\text{ đúng}),\quad \text{power}=1-\beta`,
		sym: [[
			T`\alpha`,
			"tỷ lệ báo động giả (loại I)",
			"false-alarm rate (type I)"
		], [
			T`\beta`,
			"tỷ lệ bỏ sót (loại II)",
			"miss rate (type II)"
		]]
	},
	"ht-t": {
		tex: T`t=\frac{\bar{x}-\mu_0}{s/\sqrt{n}},\qquad df=n-1`,
		sym: [[
			"s",
			"độ lệch chuẩn tính từ mẫu",
			"sample standard deviation"
		], [
			"df",
			"bậc tự do",
			"degrees of freedom"
		]]
	},
	"ht-peek": {
		tex: T`P(\text{ít nhất 1 lần báo nhầm})=1-(1-\alpha)^k`,
		sym: [[
			"k",
			"số lần bạn nhìn",
			"number of looks"
		]],
		note: ["Xấp xỉ, coi các lần nhìn độc lập: α = 5%, k = 5 → khoảng 23%.", "Approximation, treating looks as independent: α = 5%, k = 5 → about 23%."]
	},
	"eda-miss": {
		tex: T`\bar{x}_{\text{điền }0}=\frac{n_1\,\bar{x}_1+n_0\cdot 0}{n_1+n_0}`,
		sym: [[
			T`n_1`,
			"số người đã khai",
			"people who answered"
		], [
			T`n_0`,
			"số ô trống",
			"blanks"
		]],
		note: ["900 × 35 / 1000 = 31,5: điền 0 kéo trung bình xuống.", "900 × 35 / 1000 = 31.5: filling 0 drags the mean down."]
	},
	"eda-num": {
		tex: T`\bar{x}-\text{median}`,
		sym: [[
			T`\bar{x}`,
			"trung bình",
			"mean"
		]],
		note: ["Hiệu lớn so với độ rộng nghĩa là dãy có đuôi.", "A gap that is large against the spread means a tail."]
	},
	"eda-out": {
		tex: T`x<Q_1-1.5\,\text{IQR}\ \ \text{hoặc}\ \ x>Q_3+1.5\,\text{IQR}`,
		sym: [[
			T`\text{IQR}`,
			T`Q_3-Q_1`,
			T`Q_3-Q_1`
		]]
	},
	"eda-tab": {
		tex: T`P(\text{mua}\mid\text{GDN})=\frac{30}{100}=30\%,\qquad P(\text{GDN}\mid\text{mua})=\frac{30}{40}=75\%`,
		sym: [[
			"",
			"hai phần trăm khác nhau vì mẫu số khác nhau",
			"two percentages because the denominators differ"
		]]
	},
	"ml-what": {
		tex: T`\hat{y}=f(\mathbf{x})`,
		sym: [[
			T`\hat{y}`,
			"dự đoán",
			"prediction"
		], [
			T`\mathbf{x}`,
			"các cột của một dòng mới",
			"the columns of a new row"
		]]
	},
	"slr-assume": {
		tex: T`e_i=y_i-\hat{y}_i,\qquad e_i\sim N(0,\sigma^2)`,
		sym: [[
			T`e_i`,
			"phần dư",
			"residual"
		]]
	},
	"gd-rate": {
		tex: T`w_{\text{mới}}=w-\eta\,\nabla L(w)`,
		sym: [[
			T`\eta`,
			"learning rate (độ lớn bước)",
			"learning rate (step size)"
		], [
			T`\nabla L`,
			"độ dốc của hàm mất mát",
			"gradient of the loss"
		]]
	},
	"mlr-coef": {
		tex: T`\hat{y}=b_0+b_1x_1+b_2x_2+\cdots+b_kx_k`,
		sym: [[
			T`b_j`,
			"độ dốc theo cột j khi các cột khác giữ nguyên",
			"slope for column j holding the others fixed"
		]]
	},
	"mlr-dummy": {
		tex: T`x_{\text{GDN}}=\begin{cases}1&\text{nếu GDN}\\0&\text{nếu khác}\end{cases}`,
		sym: [[
			T`x_{\text{GDN}}`,
			"cột giả 0/1",
			"0/1 dummy column"
		]]
	},
	"pred-proj": {
		tex: T`\hat{y}=3+2{,}5\,x,\qquad x\in[2;12]`,
		sym: [[
			"x",
			"chi (triệu đồng)",
			"spend (million VND)"
		]],
		note: ["Ngoài khoảng [2; 12] chỉ là giả định, không phải dự đoán.", "Outside [2; 12] it is an assumption, not a prediction."]
	},
	"logit-why": {
		tex: T`b_0+b_1x\in(-\infty,\infty)\quad\text{nhưng}\quad p\in[0,1]`,
		sym: [[
			"p",
			"xác suất",
			"probability"
		]]
	},
	"logit-many": {
		tex: T`p=\frac{1}{1+e^{-(b_0+b_1x_1+\cdots+b_kx_k)}}`,
		sym: [[
			"p",
			"xác suất của nhãn 1",
			"probability of label 1"
		]]
	},
	"logit-roc": {
		tex: T`\text{TPR}=\frac{TP}{TP+FN},\qquad \text{FPR}=\frac{FP}{FP+TN}`,
		sym: [[
			"TPR",
			"độ nhạy",
			"sensitivity"
		], [
			"FPR",
			"tỷ lệ báo nhầm",
			"false-positive rate"
		]]
	},
	"logit-rest": {
		tex: T`p_k=\frac{1}{1+e^{-z_k}},\quad k=1,\ldots,K`,
		sym: [[
			T`z_k`,
			"điểm của nhãn k",
			"score of label k"
		]]
	},
	"tree-ask": {
		tex: T`\text{Gini}=1-\sum_k p_k^2`,
		sym: [[
			T`p_k`,
			"tỷ lệ nhãn k trong nút",
			"share of label k in the node"
		]]
	},
	"tree-imp": {
		tex: T`\text{Imp}(x_j)=\sum_{\text{nhát cắt theo }x_j}\Delta\,\text{độ tạp}`,
		sym: [[
			T`\Delta`,
			"mức nhóm sạch hơn sau nhát cắt",
			"how much cleaner the groups got"
		]]
	},
	"tree-deep": {
		tex: T`\text{lỗi}_{\text{học}}\ll\text{lỗi}_{\text{kiểm tra}}`,
		sym: [[
			"",
			"dấu hiệu học thuộc dữ liệu",
			"a sign of memorising the data"
		]]
	},
	"tree-num": {
		tex: T`\hat{y}_{\text{lá}}=\frac{1}{n_{\text{lá}}}\sum_{i\in\text{lá}}y_i`,
		sym: [[
			T`n_{\text{lá}}`,
			"số dòng rơi vào lá",
			"rows in the leaf"
		]]
	},
	"ens-vote": {
		tex: T`\hat{y}=\text{mode}(\hat{y}_1,\ldots,\hat{y}_B)`,
		sym: [[
			"B",
			"số cây",
			"number of trees"
		]]
	},
	"ens-bag": {
		tex: T`P(\text{không vào túi})=\left(1-\frac1n\right)^n\approx e^{-1}\approx 0{,}368`,
		sym: [[
			"n",
			"số dòng của tập học",
			"rows in the training set"
		]]
	},
	"ens-oob": {
		tex: T`\text{OOB}\approx 36{,}8\%\ \text{số dòng của mỗi cây}`,
		sym: [[
			"",
			"phần không vào túi của cây đó",
			"the rows outside that tree's bag"
		]]
	},
	"rf-col": {
		tex: T`m\approx\sqrt{p}`,
		sym: [[
			"p",
			"tổng số cột",
			"total columns"
		], [
			"m",
			"số cột được nhìn ở mỗi nhát cắt",
			"columns allowed per split"
		]]
	},
	"km-loop": {
		tex: T`\min\ \sum_{k=1}^{K}\sum_{x\in C_k}\lVert x-\mu_k\rVert^2`,
		sym: [[
			T`\mu_k`,
			"tâm cụm k",
			"centre of cluster k"
		]]
	},
	"km-k": {
		tex: T`W(K)=\sum_{k=1}^{K}\sum_{x\in C_k}\lVert x-\mu_k\rVert^2`,
		sym: [[
			"W(K)",
			"tổng bình phương trong cụm; luôn giảm khi K tăng",
			"within-cluster sum of squares; always falls as K grows"
		]]
	},
	"km-start": {
		tex: T`P(\text{chọn }x)\propto D(x)^2`,
		sym: [[
			"D(x)",
			"khoảng cách tới tâm gần nhất đã chọn",
			"distance to the nearest chosen centre"
		]]
	},
	"link-how": {
		tex: T`d_{\text{single}}=\min_{a\in A,\,b\in B}d(a,b),\qquad d_{\text{complete}}=\max_{a\in A,\,b\in B}d(a,b)`,
		sym: [[
			"A, B",
			"hai cụm",
			"two clusters"
		]]
	},
	"db-scan": {
		tex: T`\left|N_\varepsilon(x)\right|\ge \text{minPts}`,
		sym: [[
			T`\varepsilon`,
			"bán kính",
			"radius"
		], [
			"minPts",
			"số hàng xóm tối thiểu",
			"minimum neighbours"
		]],
		note: ["Thỏa thì x là điểm lõi; điểm thưa là nhiễu.", "If true x is a core point; sparse points are noise."]
	},
	"gmm-soft": {
		tex: T`p(x)=\sum_{k=1}^{K}\pi_k\,N(x\mid\mu_k,\Sigma_k),\qquad \sum_k\pi_k=1`,
		sym: [[
			T`\pi_k`,
			"trọng số của đám k",
			"weight of component k"
		]]
	},
	"k-mode": {
		tex: T`d(a,b)=\sum_{j}\mathbf{1}[a_j\neq b_j]`,
		sym: [[
			"",
			"đếm số cột chữ khác nhau",
			"count of text columns that differ"
		]]
	},
	"nlp-bow": {
		tex: T`\text{BoW}(d)=(c_1,c_2,\ldots,c_V)`,
		sym: [[
			T`c_i`,
			"số lần từ i xuất hiện",
			"count of word i"
		], [
			"V",
			"cỡ từ vựng",
			"vocabulary size"
		]]
	},
	"nlp-edit": {
		tex: T`d(i,j)=\min\{d(i{-}1,j)+1,\ d(i,j{-}1)+1,\ d(i{-}1,j{-}1)+[a_i\neq b_j]\}`,
		sym: [[
			"d(i,j)",
			"số lần sửa tối thiểu giữa i ký tự đầu và j ký tự đầu",
			"minimum edits between the first i and first j characters"
		]]
	},
	"imb-trap": {
		tex: T`\text{accuracy}=\frac{TP+TN}{n}=\frac{92}{100}`,
		sym: [[
			"",
			"92 khách ở lại, gọi tất cả «ở lại»",
			"92 stayers, everyone called “stays”"
		]]
	},
	"imb-fix": {
		tex: T`w_c=\frac{n}{K\,n_c}`,
		sym: [[
			T`n_c`,
			"số dòng của lớp c",
			"rows in class c"
		], [
			"K",
			"số lớp",
			"number of classes"
		]]
	},
	"imb-smote": {
		tex: T`x_{\text{mới}}=x_i+\lambda\,(x_{\text{láng giềng}}-x_i),\quad \lambda\in[0,1]`,
		sym: [[
			T`\lambda`,
			"vị trí trên đoạn nối",
			"position along the segment"
		]]
	},
	"bv-bias": {
		tex: T`E\big[(y-\hat{f})^2\big]=\text{Bias}^2+\text{Var}+\sigma^2`,
		sym: [[
			T`\sigma^2`,
			"nhiễu không giảm được",
			"irreducible noise"
		]]
	},
	"fe-num": {
		tex: T`x'=\log(1+x)`,
		sym: [[
			"",
			"an toàn với x = 0",
			"safe at x = 0"
		]]
	},
	"fe-cat": {
		tex: T`k\text{ nhóm}\ \Rightarrow\ k-1\text{ cột giả}`,
		sym: [[
			"",
			"nhóm bỏ ra là mốc",
			"the dropped group is the baseline"
		]]
	},
	"fe-time": {
		tex: T`\sin\!\Big(\frac{2\pi t}{7}\Big),\ \ \cos\!\Big(\frac{2\pi t}{7}\Big)`,
		sym: [[
			"t",
			"thứ tự ngày; chu kỳ 7",
			"day index; cycle of 7"
		]]
	},
	"cv-fold": {
		tex: T`\text{CV}=\frac{1}{K}\sum_{k=1}^{K}\text{RMSE}_k`,
		sym: [[
			"K",
			"số phần",
			"number of folds"
		]],
		note: ["Ví dụ: (5,8 + 6,2 + 6,0 + 6,4) / 4 = 6,1.", "Example: (5.8 + 6.2 + 6.0 + 6.4) / 4 = 6.1."]
	},
	"cv-grid": {
		tex: T`\#\text{cặp}=\prod_j |G_j|=3\times 2=6`,
		sym: [[
			T`|G_j|`,
			"số giá trị thử của tham số j",
			"values tried for parameter j"
		]]
	},
	"ts-dep": {
		tex: T`e_t=\rho\,e_{t-1}+u_t`,
		sym: [[
			T`\rho`,
			"mức tuần này bám tuần trước",
			"how much a week follows the previous one"
		]]
	},
	"ts-decomp": {
		tex: T`y_t=T_t+S_t+R_t\quad\text{(cộng)},\qquad y_t=T_t\cdot S_t\cdot R_t\quad\text{(nhân)}`,
		sym: [
			[
				T`T_t`,
				"xu hướng",
				"trend"
			],
			[
				T`S_t`,
				"mùa",
				"season"
			],
			[
				T`R_t`,
				"phần còn lại",
				"remainder"
			]
		]
	},
	"ts-naive": {
		tex: T`\hat{y}_{t+1}=y_t,\qquad \hat{y}_{t+1}=y_{t+1-m}\ \text{(ngây theo mùa)}`,
		sym: [[
			"m",
			"chu kỳ mùa",
			"season length"
		]]
	},
	"ts-sma": {
		tex: T`\text{SMA}_t=\frac{1}{k}\sum_{i=0}^{k-1}y_{t-i}`,
		sym: [[
			"k",
			"số tuần trong cửa sổ",
			"weeks in the window"
		]],
		note: ["(20 + 24 + 80) / 3 ≈ 41,3.", "(20 + 24 + 80) / 3 ≈ 41.3."]
	},
	"ts-ses": {
		tex: T`\ell_t=\alpha\,y_t+(1-\alpha)\,\ell_{t-1}`,
		sym: [[
			T`\alpha`,
			"độ nặng của tuần mới nhất",
			"weight of the newest week"
		]]
	},
	"ts-holt": {
		tex: T`\ell_t=\alpha y_t+(1-\alpha)(\ell_{t-1}+b_{t-1}),\ \ b_t=\beta(\ell_t-\ell_{t-1})+(1-\beta)b_{t-1},\ \ \hat{y}_{t+h}=\ell_t+h\,b_t`,
		sym: [[
			T`b_t`,
			"độ dốc",
			"slope"
		]]
	},
	"ts-hw": {
		tex: T`\hat{y}_{t+h}=\ell_t+h\,b_t+s_{t+h-m}`,
		sym: [[
			"m",
			"chu kỳ mùa do bạn khai",
			"season length you declare"
		], [
			T`s`,
			"chỉ số mùa",
			"seasonal index"
		]]
	},
	"ts-stat": {
		tex: T`\Delta y_t=y_t-y_{t-1}`,
		sym: [[
			T`\Delta`,
			"bước thay đổi giữa hai tuần",
			"change between two weeks"
		]]
	},
	"ts-acf": {
		tex: T`r_k=\frac{\sum_t(y_t-\bar{y})(y_{t-k}-\bar{y})}{\sum_t(y_t-\bar{y})^2}`,
		sym: [[
			"k",
			"độ trễ (số tuần cách nhau)",
			"lag (weeks apart)"
		]]
	},
	"ts-arima": {
		tex: T`\Delta^{d}y_t=c+\sum_{i=1}^{p}\phi_i\,\Delta^{d}y_{t-i}+\sum_{j=1}^{q}\theta_j\,\varepsilon_{t-j}+\varepsilon_t`,
		sym: [[
			"d",
			"số lần lấy hiệu",
			"times differenced"
		], [
			"p, q",
			"bậc AR, bậc MA",
			"AR order, MA order"
		]]
	},
	"math-vec": {
		tex: T`\mathbf{v}=\begin{pmatrix}10\\80\end{pmatrix}`,
		sym: [[
			"",
			"ô 1 chi tiêu, ô 2 số form; đổi chỗ là tuần khác",
			"cell 1 spend, cell 2 forms; swapping is another week"
		]]
	},
	"math-add": {
		tex: T`\mathbf{a}+\mathbf{b}=(a_1+b_1,\ a_2+b_2),\qquad c\,\mathbf{a}=(c\,a_1,\ c\,a_2)`,
		sym: [[
			"c",
			"một số",
			"a number"
		]]
	},
	"math-mat": {
		tex: T`\begin{pmatrix}2&0\\0&1\end{pmatrix}\begin{pmatrix}3\\4\end{pmatrix}=\begin{pmatrix}6\\4\end{pmatrix}`,
		sym: [[
			"",
			"mỗi hàng của ma trận tạo ra một ô của kết quả",
			"each matrix row makes one output cell"
		]]
	},
	"math-mul": {
		tex: T`(AB)_{ij}=\sum_{k}A_{ik}\,B_{kj}`,
		sym: [[
			"",
			"số cột của A phải bằng số hàng của B",
			"columns of A must equal rows of B"
		]]
	},
	"math-sys": {
		tex: T`\begin{cases}x+y=3\\x-y=1\end{cases}\Rightarrow (x,y)=(2,1)`,
		sym: [[
			"",
			"điểm nằm trên cả hai đường",
			"the point on both lines"
		]]
	},
	"math-crit": {
		tex: T`f'(x)=0`,
		sym: [[
			"",
			"độ dốc 0: có thể là đáy, đỉnh hoặc yên ngựa",
			"slope 0: a bottom, a top or a saddle"
		]]
	},
	"math-p": {
		tex: T`P(A)=\frac{|A|}{|\Omega|},\qquad 0\le P(A)\le 1`,
		sym: [[
			"",
			"một phần của cả tập hợp đang xét",
			"a part of the whole set considered"
		]]
	},
	"math-kind": {
		tex: T`P(A)\approx\frac{n_A}{n}`,
		sym: [[
			T`n_A`,
			"số lần A xảy ra",
			"times A happened"
		], [
			"n",
			"số lần quan sát",
			"number of observations"
		]],
		note: ["Cách hiểu tần suất; cách cổ điển dùng |A| / |Ω|.", "The frequency reading; the classical one uses |A| / |Ω|."]
	},
	"ds-mode": {
		tex: T`\text{mode}=\arg\max_x\ \text{count}(x)`,
		sym: [[
			"",
			"giá trị xuất hiện nhiều nhất",
			"the most frequent value"
		]]
	},
	"ds-pct": {
		tex: T`\text{vị trí}=1+p\,(n-1)`,
		sym: [[
			"p",
			"phân vị cần tìm (0,9 cho phân vị thứ 90)",
			"target percentile (0.9 for the 90th)"
		], [
			"n",
			"số quan sát",
			"observations"
		]],
		note: ["n = 8, p = 0,9 → vị trí 7,3, rồi nội suy giữa số thứ 7 và thứ 8.", "n = 8, p = 0.9 → position 7.3, then interpolate between the 7th and 8th."]
	},
	"or-obj": {
		tex: T`\max\ z=c_1x_1+c_2x_2+\cdots+c_nx_n`,
		sym: [[
			T`x_j`,
			"biến quyết định (bạn chọn)",
			"decision variables (you choose)"
		], [
			"z",
			"hàm mục tiêu (công thức)",
			"objective (a formula)"
		]]
	},
	"or-con": {
		tex: T`a_{i1}x_1+\cdots+a_{in}x_n\le b_i,\qquad x_j\ge 0`,
		sym: [[
			T`b_i`,
			"nguồn lực thứ i",
			"resource i"
		]]
	},
	"sql-key": {
		lang: "SQL",
		code: "FOREIGN KEY (campaign_id) REFERENCES campaigns (campaign_id)",
		note: ["Khóa ngoại phải trỏ tới một khóa chính có thật.", "A foreign key must point at a real primary key."]
	},
	"sql-ddl": {
		lang: "SQL",
		code: "CREATE TABLE form (id INT PRIMARY KEY, kenh TEXT);\nALTER TABLE form ADD COLUMN ngay DATE;   -- DDL: đổi khung\nUPDATE form SET kenh = 'tiktok' WHERE id = 7;   -- DML: sửa dòng",
		note: ["DDL đổi khung bảng; DML sửa dữ liệu.", "DDL changes the table frame; DML edits rows."]
	},
	"sql-run": {
		lang: "SQL",
		code: "FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT",
		note: ["Thứ tự máy chạy, không phải thứ tự bạn viết.", "The order the engine runs, not the order you write."]
	},
	"sql-having": {
		lang: "SQL",
		code: "SELECT kenh, COUNT(*) AS n\nFROM form\nWHERE ngay >= DATE '2026-10-01'   -- lọc dòng\nGROUP BY kenh\nHAVING COUNT(*) > 100;            -- lọc nhóm",
		note: ["WHERE lọc dòng trước khi gom, HAVING lọc nhóm sau khi gom.", "WHERE filters rows before grouping; HAVING filters groups after."]
	},
	"sql-count": {
		lang: "SQL",
		code: "COUNT(*)      -- đếm dòng\nCOUNT(cot)    -- đếm ô không NULL\nCOUNT(DISTINCT cot)",
		note: ["Ba phép đếm cho ba kết quả khác nhau.", "Three counts, three different results."]
	},
	"sql-like": {
		lang: "SQL",
		code: "WHERE ten LIKE 'Lotus%'    -- bắt đầu bằng Lotus\nWHERE ten LIKE '%spa_'     -- _ là đúng một ký tự",
		note: ["% là bất kỳ chuỗi nào, _ là một ký tự; đây không phải regex.", "% is any string, _ is one character; this is not regex."]
	},
	"sql-date": {
		lang: "SQL",
		code: "WHERE ngay >= DATE '2026-10-01'\n  AND ngay <  DATE '2026-11-01'",
		note: ["So sánh kiểu ngày, không phải chuỗi giống ngày.", "Compare real dates, not date-looking strings."]
	},
	"sql-nest": {
		lang: "SQL",
		code: "SELECT * FROM form\nWHERE chi > (SELECT AVG(chi) FROM form);",
		note: ["Subquery chạy trước và trả một giá trị hoặc một bảng.", "The subquery runs first and returns a value or a table."]
	},
	"sql-join": {
		lang: "SQL",
		code: "SELECT f.id, c.ten\nFROM form AS f\nJOIN chien_dich AS c ON f.chien_dich_id = c.id;",
		note: ["Khóa không duy nhất thì nối ra nhiều dòng.", "A non-unique key multiplies rows."]
	},
	"sql-left": {
		lang: "SQL",
		code: "SELECT c.ten, COALESCE(COUNT(f.id), 0) AS so_form\nFROM chien_dich c\nLEFT JOIN form f ON f.chien_dich_id = c.id\nGROUP BY c.ten;",
		note: ["Không có đơn thì là trống; COALESCE đổi trống thành 0 khi bạn chủ ý.", "No orders means empty; COALESCE turns empty into 0 only when you mean it."]
	},
	"sql-union": {
		lang: "SQL",
		code: "SELECT kenh FROM form_t9\nUNION ALL\nSELECT kenh FROM form_t10;",
		note: ["UNION ALL giữ trùng; UNION bỏ trùng.", "UNION ALL keeps duplicates; UNION removes them."]
	},
	"sql-win": {
		lang: "SQL",
		code: "SELECT tuan, form,\n       SUM(form) OVER (ORDER BY tuan) AS luy_ke\nFROM form_tuan;",
		note: ["Thêm cột mà vẫn giữ từng dòng.", "Adds a column and keeps every row."]
	},
	"sql-rank": {
		lang: "SQL",
		code: "RANK()       OVER (ORDER BY form DESC)   -- hòa thì nhảy số\nDENSE_RANK() OVER (ORDER BY form DESC)   -- hòa không nhảy\nROW_NUMBER() OVER (ORDER BY form DESC)   -- không hòa",
		note: ["Chọn theo cách bạn muốn xử lý khi hòa.", "Pick by how you want ties handled."]
	},
	"sql-part": {
		lang: "SQL",
		code: "ROW_NUMBER() OVER (PARTITION BY kenh ORDER BY form DESC)",
		note: ["Mỗi kênh tự đếm hạng từ 1.", "Each channel ranks from 1 on its own."]
	},
	"sql-frame": {
		lang: "SQL",
		code: "AVG(form) OVER (ORDER BY tuan\n                ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)",
		note: ["Ba dòng chưa chắc là ba tuần nếu thiếu tuần.", "Three rows are not three weeks if a week is missing."]
	},
	"sql-lag": {
		lang: "SQL",
		code: "LAG(form)  OVER (PARTITION BY kenh ORDER BY ngay) AS hom_qua,\nLEAD(form) OVER (PARTITION BY kenh ORDER BY ngay) AS ngay_mai",
		note: ["Dòng trước chỉ là hôm qua nếu không thiếu ngày.", "The previous row is yesterday only if no day is missing."]
	},
	"sql-nwin": {
		lang: "SQL",
		code: "SELECT SUM(form) OVER w, AVG(form) OVER w\nFROM form_ngay\nWINDOW w AS (PARTITION BY kenh ORDER BY ngay);",
		note: ["Đặt tên cho cửa sổ để dùng lại; ý nghĩa không đổi.", "Naming a window to reuse it; the meaning does not change."]
	},
	"sql-case": {
		lang: "SQL",
		code: "CASE WHEN chi < 5 THEN 'thấp'\n     WHEN chi < 20 THEN 'vừa'\n     ELSE 'cao' END AS bac_chi",
		note: ["Các nhánh chạy từ trên xuống, nhánh đúng đầu tiên thắng.", "Branches run top-down; the first true branch wins."]
	},
	"sql-cte": {
		lang: "SQL",
		code: "WITH tuan AS (\n  SELECT kenh, SUM(form) AS form FROM form_ngay GROUP BY kenh\n)\nSELECT * FROM tuan WHERE form > 100;",
		note: ["CTE đặt tên cho câu con; view là câu truy vấn được lưu, không phải bản sao.", "A CTE names a subquery; a view is a saved query, not a copy."]
	},
	"sql-idx": {
		lang: "SQL",
		code: "CREATE INDEX idx_form_ngay ON form (ngay);",
		note: ["Làm truy vấn nhanh hơn, không làm nó đúng hơn.", "Makes a query faster, not more correct."]
	},
	"xl-cell": {
		lang: "Excel",
		code: "=B2*C2        // công thức\n42            // số\nLotus         // chữ",
		note: ["Công thức bắt đầu bằng dấu =.", "A formula starts with =."]
	},
	"xl-lock": {
		lang: "Excel",
		code: "=$B$2*C5      // khóa cả cột và hàng\n=B$2*C5       // khóa hàng\n=$B2*C5       // khóa cột",
		note: ["Dấu $ giữ địa chỉ khi kéo công thức.", "$ keeps the address when you drag the formula."]
	},
	"xl-if": {
		lang: "Excel",
		code: "=IF(B2>=3, \"đạt\", \"chưa đạt\")\n=IF(ISBLANK(B2), \"trống\", B2)",
		note: ["Ô trống không phải FALSE.", "A blank cell is not FALSE."]
	},
	"xl-look": {
		lang: "Excel",
		code: "=VLOOKUP(A2, Bang!A:C, 3, FALSE)",
		note: ["Đối số cuối FALSE là khớp chính xác; bỏ qua có thể thành tìm gần đúng.", "The last argument FALSE means exact match; omitting it may mean approximate."]
	},
	"xa-text": {
		lang: "Excel",
		code: "=LEFT(A2, 3)   =RIGHT(A2, 2)   =MID(A2, 2, 4)\n=TRIM(A2)      =UPPER(A2)      =TEXT(A2, \"dd/mm/yyyy\")",
		note: ["Trả về chữ; muốn số thì dùng VALUE.", "Returns text; use VALUE to get a number."]
	},
	"xa-count": {
		lang: "Excel",
		code: "=COUNT(B:B)    // đếm ô số\n=COUNTA(B:B)   // đếm ô không rỗng\n=COUNTIF(A:A, \"tiktok\")",
		note: ["COUNT khác COUNTA.", "COUNT differs from COUNTA."]
	},
	"py-type": {
		lang: "Python",
		code: "\"3\" + \"4\"   # '34'  (chuỗi nối)\n3 + 4       # 7     (số cộng)\nint(\"3\") + 4   # 7",
		note: ["Kiểu dữ liệu quyết định phép toán.", "The type decides the operation."]
	},
	"py-op": {
		lang: "Python",
		code: "x = 3      # gán\nx == 3     # so sánh, ra True hoặc False",
		note: ["Một dấu = gán; hai dấu == so sánh.", "One = assigns; two == compare."]
	},
	"py-if": {
		lang: "Python",
		code: "if ty_le >= 0.04:\n    print(\"tốt\")\nelif ty_le >= 0.02:\n    print(\"tạm\")\nelse:\n    print(\"yếu\")",
		note: ["Chỉ một nhánh được chạy.", "Only one branch runs."]
	},
	"py-loop": {
		lang: "Python",
		code: "for kenh in kenhs:\n    print(kenh)\n\nwhile n > 0:\n    n -= 1",
		note: ["for đi qua mọi phần tử; while chạy đến khi điều kiện sai.", "for walks every element; while runs until the condition fails."]
	},
	"py-fn": {
		lang: "Python",
		code: "def ty_le(form, click):\n    return form / click",
		note: ["Không có return thì trả None.", "Without return you get None."]
	},
	"py-str": {
		lang: "Python",
		code: "s = \"  TikTok \"\ns.strip().lower()   # 'tiktok'",
		note: ["Trả về chuỗi mới; chuỗi cũ không đổi.", "Returns a new string; the old one is unchanged."]
	},
	"py-list": {
		lang: "Python",
		code: "lst = [10, 20, 30, 40]\nlst[0]     # 10\nlst[-1]    # 40\nlst[1:3]   # [20, 30]",
		note: ["Chỉ số bắt đầu từ 0; cắt không gồm điểm cuối.", "Indexes start at 0; slicing excludes the end."]
	},
	"py-dict": {
		lang: "Python",
		code: "d = {\"gdn\": 80, \"tiktok\": 40}\nd[\"gdn\"]            # 80\nd.get(\"meta\", 0)    # 0, không lỗi",
		note: ["Khóa không có thì d[...] báo lỗi; get thì chịu thiếu.", "A missing key raises with d[...]; get tolerates it."]
	},
	"py-tup": {
		lang: "Python",
		code: "t = (10, 80)\nt[0]        # 10\n# t[0] = 5  → lỗi: không sửa được",
		note: ["Có thứ tự nhưng không sửa từng ô.", "Ordered but not editable."]
	},
	"py-set": {
		lang: "Python",
		code: "set([1, 2, 2, 3])   # {1, 2, 3}",
		note: ["Loại bỏ trùng; không hứa thứ tự.", "Removes duplicates; no promised order."]
	},
	"py-np": {
		lang: "Python",
		code: "import numpy as np\na = np.array([1, 2, 3])\na.mean()   # 2.0",
		note: ["Mảng chỉ chứa một kiểu.", "An array holds a single type."]
	},
	"py-ser": {
		lang: "Python",
		code: "s1 + s2   # cộng theo nhãn (index), không theo vị trí",
		note: ["Nhãn không khớp thì ra NaN.", "Mismatched labels give NaN."]
	},
	"py-frame": {
		lang: "Python",
		code: "df.loc[\"a\":\"c\"]    # theo nhãn, gồm c\ndf.iloc[0:3]       # theo vị trí, không gồm 3",
		note: ["Hai quy tắc cắt khác nhau.", "Two different slicing rules."]
	},
	"py-plot": {
		lang: "Python",
		code: "df.plot(kind=\"bar\", x=\"kenh\", y=\"form\")\nplt.ylabel(\"form\")",
		note: ["Một biểu đồ trả lời một câu hỏi; trục có đơn vị.", "One chart answers one question; label the axes."]
	}
};
var clean = (s) => s.replace(/\s+/g, " ").trim();
/** Mọi công thức có trong thẻ khái niệm, theo thứ tự học trong từng chủ đề. */
function buildFormulas(lang) {
	const out = [];
	mapNodeIds.forEach((id, order) => {
		var _ref, _t$formula, _t$symbols, _ex$sym;
		const c = getStudy(id);
		if (!c) return;
		const t = studyCopy(c, lang);
		const ex = formulaExtra[id];
		if (!t.formula && !ex) return;
		const own = !!t.formula;
		out.push({
			id,
			title: t.title,
			tex: (_ref = (_t$formula = t.formula) !== null && _t$formula !== void 0 ? _t$formula : ex === null || ex === void 0 ? void 0 : ex.tex) !== null && _ref !== void 0 ? _ref : "",
			code: own ? void 0 : ex === null || ex === void 0 ? void 0 : ex.code,
			codeLang: own ? void 0 : ex === null || ex === void 0 ? void 0 : ex.lang,
			note: (ex === null || ex === void 0 ? void 0 : ex.note) ? ex.note[lang === "en" ? 1 : 0] : void 0,
			symbols: own ? (_t$symbols = t.symbols) !== null && _t$symbols !== void 0 ? _t$symbols : [] : ((_ex$sym = ex === null || ex === void 0 ? void 0 : ex.sym) !== null && _ex$sym !== void 0 ? _ex$sym : []).map(([sym, vi, en]) => ({
				sym,
				meaning: lang === "en" ? en : vi
			})),
			topic: topicIndexOf(id),
			order,
			related: relatedOf(id).slice(0, 4).map((r) => ({
				id: r.id,
				title: studyListTitle(r.id, lang)
			}))
		});
	});
	return out;
}
/**
* Từ điển gộp từ ba nguồn: «từ cần biết» trong từng bài làm tay, khái niệm có tên
* dạng «thuật ngữ: ý», và bảng từ của bài giảng gốc. Trùng tên thì gộp nguồn.
*/
function buildTerms(lang) {
	const map = /* @__PURE__ */ new Map();
	const add = (item) => {
		const key = item.key;
		const have = map.get(key);
		if (!have) {
			map.set(key, {
				...item,
				sources: item.source ? [item.source] : []
			});
			return;
		}
		if (item.source && !have.sources.some((s) => s.id === item.source.id)) have.sources.push(item.source);
		if (item.lessonId && !have.lessonId) have.lessonId = item.lessonId;
		if (item.en && !have.en) have.en = item.en;
		if (have.kind !== "term" && item.kind === "term") {
			have.def = item.def;
			have.kind = "term";
		}
	};
	mapNodeIds.forEach((id, order) => {
		var _walks$id$lang$words, _walks$id;
		const c = getStudy(id);
		if (!c) return;
		const topic = topicIndexOf(id);
		const title = studyListTitle(id, lang);
		const src = {
			id,
			title
		};
		const words = (_walks$id$lang$words = (_walks$id = walks[id]) === null || _walks$id === void 0 || (_walks$id = _walks$id[lang]) === null || _walks$id === void 0 ? void 0 : _walks$id.words) !== null && _walks$id$lang$words !== void 0 ? _walks$id$lang$words : [];
		for (const [term, meaning] of words) {
			const t = clean(term);
			if (!t || t.length > 60) continue;
			add({
				key: t.toLowerCase(),
				term: t,
				def: clean(meaning),
				kind: "term",
				topic,
				order,
				source: src
			});
		}
		const head = title.split(":")[0];
		if (title.includes(":") && head.length >= 2 && head.length <= 48) {
			const t = studyCopy(c, lang);
			add({
				key: head.toLowerCase(),
				term: clean(head),
				def: clean(t.plain),
				kind: "concept",
				topic,
				order,
				source: src
			});
		}
	});
	lessons.forEach((lesson, i) => {
		var _lesson$glossary;
		for (const g of (_lesson$glossary = lesson.glossary) !== null && _lesson$glossary !== void 0 ? _lesson$glossary : []) {
			const t = clean(g.term);
			add({
				key: t.toLowerCase(),
				term: t,
				def: clean(g.def),
				kind: "legacy",
				topic: -1,
				order: 1e4 + i,
				lessonId: lesson.id,
				en: g.en
			});
		}
	});
	return [...map.values()];
}
//#endregion
export { topicName as a, topicColor as i, buildFormulas as n, buildTerms as r, Filters as t };
