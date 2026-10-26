import { o as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as subscribeProgress, d as getProgress, f as getServerProgress } from "./router-D2ogNbnO.mjs";
import { t as katex } from "../_libs/katex.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tex-C4hnRKYp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var OPS3 = [
	"**=",
	"//=",
	">>=",
	"<<=",
	"..."
];
var OPS2 = [
	"**",
	"//",
	"==",
	"!=",
	"<=",
	">=",
	"->",
	"+=",
	"-=",
	"*=",
	"/=",
	"%=",
	"&=",
	"|=",
	":=",
	"<<",
	">>"
];
function lex(src) {
	const out = [];
	let i = 0;
	const n = src.length;
	while (i < n) {
		const ch = src[i];
		if (/\s/.test(ch)) {
			i++;
			continue;
		}
		if (ch === "#") {
			while (i < n && src[i] !== "\n") i++;
			continue;
		}
		const sm = /^([rRbBfFuU]{0,2})("""|'''|"|')/.exec(src.slice(i, i + 5));
		if (sm) {
			const pre = sm[1].toLowerCase();
			const q = sm[2];
			let j = i + sm[0].length;
			let val = "";
			while (j < n && !src.startsWith(q, j)) {
				if (src[j] === "\\" && j + 1 < n && !pre.includes("r")) {
					val += src[j + 1];
					j += 2;
					continue;
				}
				val += src[j++];
			}
			j += q.length;
			out.push({
				k: "str",
				v: val,
				f: pre.includes("f")
			});
			i = j;
			continue;
		}
		if (/[0-9]/.test(ch) || ch === "." && /[0-9]/.test(src[i + 1] ?? "")) {
			const m = /^(0[xX][0-9a-fA-F_]+|[0-9][0-9_]*\.?[0-9_]*(?:[eE][+-]?[0-9]+)?|\.[0-9_]+(?:[eE][+-]?[0-9]+)?)/.exec(src.slice(i));
			out.push({
				k: "num",
				v: m[0]
			});
			i += m[0].length;
			continue;
		}
		if (/[A-Za-z_]/.test(ch) || ch.charCodeAt(0) > 127) {
			let j = i + 1;
			while (j < n && (/[A-Za-z0-9_]/.test(src[j]) || src.charCodeAt(j) > 127)) j++;
			out.push({
				k: "name",
				v: src.slice(i, j)
			});
			i = j;
			continue;
		}
		const o3 = src.slice(i, i + 3);
		if (OPS3.includes(o3)) {
			out.push({
				k: "op",
				v: o3
			});
			i += 3;
			continue;
		}
		const o2 = src.slice(i, i + 2);
		if (OPS2.includes(o2)) {
			out.push({
				k: "op",
				v: o2
			});
			i += 2;
			continue;
		}
		out.push({
			k: "op",
			v: ch
		});
		i++;
	}
	out.push({
		k: "end",
		v: ""
	});
	return out;
}
var Parser = class {
	toks;
	p = 0;
	constructor(toks) {
		this.toks = toks;
	}
	get cur() {
		return this.toks[this.p];
	}
	isOp(v) {
		return this.cur.k === "op" && this.cur.v === v;
	}
	isKw(v) {
		return this.cur.k === "name" && this.cur.v === v;
	}
	eat(v) {
		if (this.isOp(v) || this.isKw(v)) {
			this.p++;
			return true;
		}
		return false;
	}
	expect(v) {
		if (!this.eat(v)) throw new Error(`expected ${v} got ${this.cur.v}`);
	}
	atEnd() {
		return this.cur.k === "end";
	}
	exprList() {
		const first = this.expr();
		if (!this.isOp(",")) return first;
		const v = [first];
		while (this.eat(",")) {
			if (this.atEnd() || this.isOp("=") || this.isOp(")") || this.isOp(":")) break;
			v.push(this.expr());
		}
		return {
			t: "tuple",
			v
		};
	}
	expr() {
		if (this.isKw("lambda")) {
			this.p++;
			const p = [];
			while (!this.isOp(":")) {
				if (this.cur.k === "name") p.push(this.cur.v);
				this.p++;
				if (this.atEnd()) throw new Error("lambda");
			}
			this.expect(":");
			return {
				t: "lambda",
				p,
				b: this.expr()
			};
		}
		const a = this.orTest();
		if (this.isKw("if")) {
			this.p++;
			const c = this.orTest();
			this.expect("else");
			return {
				t: "cond",
				c,
				a,
				b: this.expr()
			};
		}
		return a;
	}
	orTest() {
		const l = this.andTest();
		if (!this.isKw("or")) return l;
		const v = [l];
		while (this.eat("or")) v.push(this.andTest());
		return {
			t: "bool",
			op: "or",
			v
		};
	}
	andTest() {
		const l = this.notTest();
		if (!this.isKw("and")) return l;
		const v = [l];
		while (this.eat("and")) v.push(this.notTest());
		return {
			t: "bool",
			op: "and",
			v
		};
	}
	notTest() {
		if (this.isKw("not")) {
			this.p++;
			return {
				t: "un",
				op: "not",
				x: this.notTest()
			};
		}
		return this.cmp();
	}
	cmp() {
		const first = this.bitor();
		const ops = [];
		const v = [first];
		for (;;) {
			let op = "";
			if (this.cur.k === "op" && [
				"<",
				">",
				"==",
				"!=",
				"<=",
				">="
			].includes(this.cur.v)) {
				op = this.cur.v;
				this.p++;
			} else if (this.isKw("in")) {
				op = "in";
				this.p++;
			} else if (this.isKw("not") && this.toks[this.p + 1]?.v === "in") {
				op = "not in";
				this.p += 2;
			} else if (this.isKw("is")) {
				this.p++;
				if (this.eat("not")) op = "is not";
				else op = "is";
			} else break;
			ops.push(op);
			v.push(this.bitor());
		}
		return ops.length ? {
			t: "cmp",
			ops,
			v
		} : first;
	}
	binLevel(next, ops) {
		let l = next();
		while (this.cur.k === "op" && ops.includes(this.cur.v)) {
			const op = this.cur.v;
			this.p++;
			l = {
				t: "bin",
				op,
				l,
				r: next()
			};
		}
		return l;
	}
	bitor() {
		return this.binLevel(() => this.bitxor(), ["|"]);
	}
	bitxor() {
		return this.binLevel(() => this.bitand(), ["^"]);
	}
	bitand() {
		return this.binLevel(() => this.shift(), ["&"]);
	}
	shift() {
		return this.binLevel(() => this.arith(), ["<<", ">>"]);
	}
	arith() {
		return this.binLevel(() => this.term(), ["+", "-"]);
	}
	term() {
		return this.binLevel(() => this.factor(), [
			"*",
			"/",
			"//",
			"%",
			"@"
		]);
	}
	factor() {
		if (this.cur.k === "op" && [
			"-",
			"+",
			"~"
		].includes(this.cur.v)) {
			const op = this.cur.v;
			this.p++;
			return {
				t: "un",
				op,
				x: this.factor()
			};
		}
		return this.power();
	}
	power() {
		const b = this.postfix();
		if (this.eat("**")) return {
			t: "bin",
			op: "**",
			l: b,
			r: this.factor()
		};
		return b;
	}
	postfix() {
		let n = this.atom();
		for (;;) if (this.eat(".")) {
			if (this.cur.k !== "name") throw new Error("attr");
			n = {
				t: "attr",
				o: n,
				n: this.cur.v
			};
			this.p++;
		} else if (this.isOp("(")) {
			this.p++;
			n = {
				t: "call",
				fn: n,
				args: this.args()
			};
		} else if (this.isOp("[")) {
			this.p++;
			const i = this.subscript();
			this.expect("]");
			n = {
				t: "sub",
				o: n,
				i
			};
		} else break;
		return n;
	}
	subscript() {
		const one = () => {
			let a;
			if (!this.isOp(":")) a = this.expr();
			if (!this.isOp(":")) return a;
			this.p++;
			let b;
			let c;
			if (!this.isOp(":") && !this.isOp("]") && !this.isOp(",")) b = this.expr();
			if (this.eat(":")) {
				if (!this.isOp("]") && !this.isOp(",")) c = this.expr();
			}
			return {
				t: "slice",
				a,
				b,
				c
			};
		};
		const f = one();
		if (!this.isOp(",")) return f;
		const v = [f];
		while (this.eat(",")) {
			if (this.isOp("]")) break;
			v.push(one());
		}
		return {
			t: "tuple",
			v
		};
	}
	args() {
		const out = [];
		while (!this.isOp(")")) {
			if (this.atEnd()) throw new Error("args");
			if (this.isOp("*") || this.isOp("**")) {
				const d = this.cur.v === "**";
				this.p++;
				out.push({ v: {
					t: "star",
					x: this.expr(),
					d
				} });
			} else if (this.cur.k === "name" && this.toks[this.p + 1]?.v === "=" && this.toks[this.p + 1].k === "op") {
				const k = this.cur.v;
				this.p += 2;
				out.push({
					k,
					v: this.expr()
				});
			} else {
				const e = this.expr();
				if (this.isKw("for")) out.push({ v: this.compTail("gen", e) });
				else out.push({ v: e });
			}
			if (!this.eat(",")) break;
		}
		this.expect(")");
		return out;
	}
	compTail(k, e, e2) {
		this.expect("for");
		const v = this.targetList();
		this.expect("in");
		const it = this.orTest();
		const ifs = [];
		while (this.isKw("if")) {
			this.p++;
			ifs.push(this.orTest());
		}
		if (this.isKw("for")) {
			let depth = 0;
			while (!this.atEnd() && !(depth === 0 && (this.isOp(")") || this.isOp("]") || this.isOp("}")))) {
				if ([
					"(",
					"[",
					"{"
				].includes(this.cur.v)) depth++;
				if ([
					")",
					"]",
					"}"
				].includes(this.cur.v)) depth--;
				this.p++;
			}
		}
		return {
			t: "comp",
			k,
			e,
			e2,
			v,
			it,
			ifs
		};
	}
	targetList() {
		const first = this.bitor();
		if (!this.isOp(",")) return first;
		const v = [first];
		while (this.eat(",")) {
			if (this.isKw("in")) break;
			v.push(this.bitor());
		}
		return {
			t: "tuple",
			v
		};
	}
	atom() {
		const c = this.cur;
		if (c.k === "name") {
			if (["lambda", "not"].includes(c.v)) return this.expr();
			this.p++;
			return {
				t: "name",
				v: c.v
			};
		}
		if (c.k === "num") {
			this.p++;
			return {
				t: "num",
				v: c.v
			};
		}
		if (c.k === "str") {
			let v = c.v;
			let f = c.f;
			this.p++;
			while (this.cur.k === "str") {
				v += this.cur.v;
				f = f || this.cur.f;
				this.p++;
			}
			return {
				t: "str",
				v,
				f
			};
		}
		if (c.k === "op") {
			if (c.v === "(") {
				this.p++;
				if (this.eat(")")) return {
					t: "tuple",
					v: []
				};
				const e = this.expr();
				if (this.isKw("for")) {
					const r = this.compTail("gen", e);
					this.expect(")");
					return r;
				}
				if (this.isOp(",")) {
					const v = [e];
					while (this.eat(",")) {
						if (this.isOp(")")) break;
						v.push(this.expr());
					}
					this.expect(")");
					return {
						t: "tuple",
						v
					};
				}
				this.expect(")");
				return e;
			}
			if (c.v === "[") {
				this.p++;
				if (this.eat("]")) return {
					t: "list",
					v: []
				};
				const e = this.expr();
				if (this.isKw("for")) {
					const r = this.compTail("list", e);
					this.expect("]");
					return r;
				}
				const v = [e];
				while (this.eat(",")) {
					if (this.isOp("]")) break;
					v.push(this.expr());
				}
				this.expect("]");
				return {
					t: "list",
					v
				};
			}
			if (c.v === "{") {
				this.p++;
				if (this.eat("}")) return {
					t: "dict",
					v: []
				};
				if (this.isOp("**")) {
					const items = [];
					for (;;) {
						if (this.eat("**")) items.push([null, this.bitor()]);
						else {
							const k = this.expr();
							this.expect(":");
							items.push([k, this.expr()]);
						}
						if (!this.eat(",")) break;
						if (this.isOp("}")) break;
					}
					this.expect("}");
					return {
						t: "dict",
						v: items
					};
				}
				const k = this.expr();
				if (this.eat(":")) {
					const val = this.expr();
					if (this.isKw("for")) {
						const r = this.compTail("dict", k, val);
						this.expect("}");
						return r;
					}
					const items = [[k, val]];
					while (this.eat(",")) {
						if (this.isOp("}")) break;
						if (this.eat("**")) {
							items.push([null, this.bitor()]);
							continue;
						}
						const kk = this.expr();
						this.expect(":");
						items.push([kk, this.expr()]);
					}
					this.expect("}");
					return {
						t: "dict",
						v: items
					};
				}
				if (this.isKw("for")) {
					const r = this.compTail("set", k);
					this.expect("}");
					return r;
				}
				const v = [k];
				while (this.eat(",")) {
					if (this.isOp("}")) break;
					v.push(this.expr());
				}
				this.expect("}");
				return {
					t: "set",
					v
				};
			}
			if (c.v === "...") {
				this.p++;
				return {
					t: "name",
					v: "..."
				};
			}
		}
		throw new Error(`atom ${c.v}`);
	}
};
/**
* {o} đối tượng; {0} tham số thứ 0; {by} tham số tên by; {0/by} thứ 0 hoặc tên by;
* {x|mặc định}; [phần tùy chọn] bị bỏ nếu bên trong có {..} không có giá trị.
*/
function fmt(tpl, c) {
	const get = (key) => {
		if (key === "o") return c.o;
		for (const k of key.split("/")) if (/^\d+$/.test(k)) {
			if (c.pos[+k] !== void 0) return c.pos[+k];
		} else if (c.kw[k] !== void 0) return c.kw[k];
	};
	let miss = false;
	const sub = (s) => s.replace(/\{([^}|]+)(?:\|([^}]*))?\}/g, (_m, key, def) => {
		const v = get(key);
		if (v !== void 0) return v;
		if (def !== void 0) return def;
		miss = true;
		return "";
	});
	const withOpt = tpl.replace(/\[([^[\]]*)\]/g, (_m, inner) => {
		miss = false;
		const r = sub(inner);
		return miss ? "" : r;
	});
	miss = false;
	return sub(withOpt).replace(/\s+/g, " ").replace(/\s+([,.;:])/g, "$1").trim();
}
var M = {
	head: ["{0|5} dòng đầu của {o}", "the first {0|5} rows of {o}"],
	tail: ["{0|5} dòng cuối của {o}", "the last {0|5} rows of {o}"],
	describe: ["bảng thống kê mô tả (đếm, trung bình, độ lệch chuẩn, nhỏ nhất, tứ phân vị, lớn nhất) của {o}", "summary statistics of {o} (count, mean, std, min, quartiles, max)"],
	info: ["*In cấu trúc của {o}: tên cột, kiểu dữ liệu, số ô không trống", "*Print the structure of {o}: columns, types, non-null counts"],
	groupby: ["{o} chia thành các nhóm theo {0/by}", "{o} split into groups by {0/by}"],
	agg: ["{o} tính gộp theo {0/func}", "{o} aggregated with {0/func}"],
	aggregate: ["{o} tính gộp theo {0/func}", "{o} aggregated with {0/func}"],
	mean: ["trung bình của {o}", "mean of {o}"],
	median: ["trung vị của {o}", "median of {o}"],
	sum: ["tổng của {o}", "sum of {o}"],
	min: ["giá trị nhỏ nhất của {o}", "minimum of {o}"],
	max: ["giá trị lớn nhất của {o}", "maximum of {o}"],
	std: ["độ lệch chuẩn của {o}", "standard deviation of {o}"],
	var: ["phương sai của {o}", "variance of {o}"],
	count: ["số ô có giá trị của {o}", "count of non-empty cells in {o}"],
	size: ["số dòng của mỗi nhóm trong {o}", "size of each group in {o}"],
	nunique: ["số giá trị khác nhau của {o}", "number of distinct values in {o}"],
	unique: ["các giá trị khác nhau của {o}", "distinct values of {o}"],
	value_counts: ["số lần xuất hiện của từng giá trị trong {o}", "how many times each value appears in {o}"],
	idxmax: ["nhãn của dòng có giá trị lớn nhất trong {o}", "label of the row with the largest value in {o}"],
	idxmin: ["nhãn của dòng có giá trị nhỏ nhất trong {o}", "label of the row with the smallest value in {o}"],
	mode: ["giá trị xuất hiện nhiều nhất của {o}", "most frequent value of {o}"],
	quantile: ["phân vị {0} của {o}", "quantile {0} of {o}"],
	corr: ["tương quan giữa các cột số của {o}", "correlations between the numeric columns of {o}"],
	cumsum: ["tổng cộng dồn của {o}", "running total of {o}"],
	diff: ["chênh lệch giữa mỗi dòng và dòng trước của {o}", "difference between each row and the previous one in {o}"],
	shift: ["{o} dịch xuống {0|1} dòng", "{o} shifted down by {0|1} row(s)"],
	pct_change: ["phần trăm thay đổi so với dòng trước của {o}", "percent change from the previous row in {o}"],
	rank: ["thứ hạng của từng giá trị trong {o}", "rank of each value in {o}"],
	abs: ["giá trị tuyệt đối của {o}", "absolute value of {o}"],
	round: ["{o} làm tròn đến {0/decimals|0} chữ số thập phân", "{o} rounded to {0/decimals|0} decimals"],
	astype: ["{o} đổi sang kiểu {0}", "{o} converted to type {0}"],
	copy: ["bản sao của {o} (sửa bản sao không ảnh hưởng bản gốc)", "a copy of {o} (editing it leaves the original alone)"],
	reset_index: ["{o} đánh lại chỉ số 0, 1, 2…", "{o} with the index reset to 0, 1, 2…"],
	set_index: ["{o} lấy cột {0} làm chỉ số dòng", "{o} using column {0} as the row index"],
	sort_values: ["{o} sắp xếp theo {0/by}", "{o} sorted by {0/by}"],
	sort_index: ["{o} sắp xếp theo chỉ số dòng", "{o} sorted by its index"],
	dropna: ["{o} bỏ các dòng có ô trống", "{o} without rows that have empty cells"],
	fillna: ["{o} với ô trống được điền bằng {0/value}", "{o} with empty cells filled by {0/value}"],
	isna: ["bảng đánh dấu ô trống của {o}", "a map of the empty cells in {o}"],
	isnull: ["bảng đánh dấu ô trống của {o}", "a map of the empty cells in {o}"],
	notna: ["bảng đánh dấu ô có giá trị của {o}", "a map of the filled cells in {o}"],
	notnull: ["bảng đánh dấu ô có giá trị của {o}", "a map of the filled cells in {o}"],
	duplicated: ["đánh dấu các dòng trùng của {o}", "flags for the duplicate rows of {o}"],
	drop_duplicates: ["{o} bỏ các dòng trùng", "{o} without duplicate rows"],
	apply: ["{o} sau khi áp dụng {0} lên từng phần tử", "{o} after applying {0} to each element"],
	map: ["{o} sau khi đổi từng giá trị bằng {0}", "{o} after mapping each value with {0}"],
	replace: ["{o} sau khi thay {0} bằng {1}", "{o} with {0} replaced by {1}"],
	rename: ["{o} đổi tên theo {0/columns}", "{o} renamed as {0/columns}"],
	isin: ["kiểm tra giá trị của {o} có nằm trong {0}", "whether each value of {o} is in {0}"],
	between: ["kiểm tra {o} có nằm trong khoảng từ {0} đến {1}", "whether {o} lies between {0} and {1}"],
	select_dtypes: ["bảng chỉ gồm các cột có kiểu {include/exclude} của {o}", "{o} reduced to the columns of type {include/exclude}"],
	sample: ["{0/n|một số} dòng lấy ngẫu nhiên của {o}", "{0/n|some} randomly chosen rows of {o}"],
	reindex: ["{o} sắp lại theo thứ tự {0}", "{o} reordered as {0}"],
	unstack: ["{o} xoay mức chỉ số trong cùng thành cột", "{o} with its innermost index level pivoted into columns"],
	stack: ["{o} xếp các cột thành một cột dài", "{o} with its columns stacked into one long column"],
	pivot_table: ["bảng tổng hợp (pivot) từ {o}: dòng theo {index}, cột theo {columns}, giá trị {values}, gộp bằng {aggfunc|trung bình}", "pivot table of {o}: rows by {index}, columns by {columns}, values {values}, aggregated by {aggfunc|mean}"],
	to_string: ["{o} dạng chữ (để in ra đầy đủ)", "{o} as plain text (so it prints in full)"],
	to_dict: ["{o} chuyển thành từ điển", "{o} converted to a dictionary"],
	tolist: ["{o} chuyển thành danh sách", "{o} as a list"],
	ravel: ["{o} trải phẳng thành một dãy", "{o} flattened into one row"],
	reshape: ["{o} đổi hình thành {0}", "{o} reshaped to {0}"],
	fit: ["{o} sau khi học[ từ {0}][ và {1}]", "{o} after learning[ from {0}][ and {1}]"],
	predict: ["dự đoán của {o} cho {0}", "predictions of {o} for {0}"],
	predict_proba: ["xác suất dự đoán của {o} cho {0}", "predicted probabilities of {o} for {0}"],
	transform: ["{0} sau khi {o} biến đổi", "{0} after {o} transforms it"],
	fit_transform: ["{0} sau khi {o} học rồi biến đổi", "{0} after {o} learns from it and transforms it"],
	fit_resample: ["dữ liệu {0}, {1} sau khi {o} cân bằng lại", "data {0}, {1} after {o} rebalances it"],
	score: ["điểm của {o} trên {0}[ và {1}]", "score of {o} on {0}[ and {1}]"],
	summary: ["*In bảng tóm tắt kết quả của {o}", "*Print the summary of {o}"],
	get: ["giá trị của khóa {0} trong {o} (nếu không có thì {1|rỗng})", "value of key {0} in {o} (else {1|nothing})"],
	items: ["các cặp (khóa, giá trị) của {o}", "the (key, value) pairs of {o}"],
	keys: ["các khóa của {o}", "the keys of {o}"],
	append: ["*Thêm {0} vào cuối {o}", "*Append {0} to the end of {o}"],
	extend: ["*Nối thêm các phần tử của {0} vào {o}", "*Add the elements of {0} to {o}"],
	pop: ["lấy {0|phần tử cuối} ra khỏi {o}", "remove {0|the last element} from {o}"],
	split: ["{o} tách thành các phần theo {0|khoảng trắng}", "{o} split on {0|whitespace}"],
	upper: ["{o} viết hoa", "{o} in capitals"],
	lower: ["{o} viết thường", "{o} in lowercase"],
	strip: ["{o} bỏ khoảng trắng đầu và cuối", "{o} without leading and trailing spaces"],
	startswith: ["kiểm tra {o} có bắt đầu bằng {0}", "whether {o} starts with {0}"],
	contains: ["kiểm tra {o} có chứa {0}", "whether {o} contains {0}"],
	isalnum: ["kiểm tra {o} chỉ gồm chữ và số", "whether {o} is only letters and digits"],
	join: ["các phần tử của {0} nối lại, giữa chúng là {o}", "the elements of {0} joined with {o} between them"],
	format: ["{o} sau khi điền {0} vào chỗ trống", "{o} with {0} filled in"],
	total_seconds: ["{o} đổi sang số giây", "{o} in seconds"],
	day_name: ["tên thứ trong tuần của {o}", "weekday name of {o}"],
	intersection: ["phần chung của {o} và {0}", "the overlap of {o} and {0}"],
	combine_first: ["{o}, chỗ trống lấy từ {0}", "{o}, gaps taken from {0}"],
	query: ["các dòng của {o} thỏa điều kiện {0}", "rows of {o} matching {0}"],
	lt: ["kiểm tra {o} nhỏ hơn {0}", "whether {o} is less than {0}"],
	nlargest: ["{0} dòng có giá trị lớn nhất của {o}", "the {0} largest of {o}"],
	nsmallest: ["{0} dòng có giá trị nhỏ nhất của {o}", "the {0} smallest of {o}"],
	assign: ["{o} thêm các cột mới", "{o} with new columns added"],
	drop: ["{o} bỏ {columns/labels/0}", "{o} without {columns/labels/0}"],
	merge: ["{o} ghép với {0/right}[ theo cột {on}][ kiểu {how}]", "{o} merged with {0/right}[ on {on}][ ({how} join)]"],
	join_df: ["{o} ghép với {0}", "{o} joined with {0}"],
	add_constant: ["{0} thêm một cột hằng số 1 (để có hệ số chặn)", "{0} with a constant column of 1s (for the intercept)"],
	mount: ["*Kết nối Google Drive", "*Mount Google Drive"],
	extractall: ["*Giải nén tất cả vào {0}", "*Extract everything into {0}"],
	create: ["*Gửi yêu cầu tới dịch vụ AI", "*Send a request to the AI service"],
	set_title: ["*Đặt tiêu đề {0} cho {o}", "*Set the title {0} on {o}"],
	set_ylim: ["*Đặt giới hạn trục dọc của {o} là {0} đến {1}", "*Set the vertical limits of {o} to {0}–{1}"],
	set_xlabel: ["*Đặt nhãn trục ngang của {o}: {0}", "*Label the x-axis of {o}: {0}"],
	set_ylabel: ["*Đặt nhãn trục dọc của {o}: {0}", "*Label the y-axis of {o}: {0}"],
	set_axis_off: ["*Tắt khung trục của {o}", "*Hide the axes of {o}"],
	legend: ["*Hiện chú giải của {o}", "*Show the legend of {o}"],
	set_xticklabels: ["*Đặt nhãn trục ngang của {o}", "*Set the x tick labels of {o}"],
	axhline: ["*Vẽ đường ngang tại {0|y} trên {o}", "*Draw a horizontal line at {0|y} on {o}"],
	axvline: ["*Vẽ đường dọc tại {0|x} trên {o}", "*Draw a vertical line at {0|x} on {o}"],
	hist: ["*Vẽ histogram của {o}", "*Draw a histogram of {o}"],
	boxplot: ["*Vẽ biểu đồ hộp của {o}", "*Draw a box plot of {o}"],
	summary_frame: ["bảng tóm tắt của {o}", "summary table of {o}"]
};
var F = {
	len: ["số phần tử của {0}", "number of elements in {0}"],
	list: ["danh sách tạo từ {0}", "list made from {0}"],
	set: ["tập hợp từ {0} (bỏ trùng)", "set from {0} (duplicates removed)"],
	dict: ["từ điển tạo từ {0}", "dictionary built from {0}"],
	tuple: ["bộ giá trị từ {0}", "tuple from {0}"],
	int: ["{0} đổi sang số nguyên", "{0} as an integer"],
	float: ["{0} đổi sang số thực", "{0} as a decimal number"],
	str: ["{0} đổi sang chữ", "{0} as text"],
	bool: ["{0} đổi sang đúng/sai", "{0} as true/false"],
	round: ["{0} làm tròn đến {1/ndigits|0} chữ số thập phân", "{0} rounded to {1/ndigits|0} decimals"],
	abs: ["giá trị tuyệt đối của {0}", "absolute value of {0}"],
	sum: ["tổng của {0}", "sum of {0}"],
	min: ["giá trị nhỏ nhất trong {0}[ và {1}]", "smallest of {0}[ and {1}]"],
	max: ["giá trị lớn nhất trong {0}[ và {1}]", "largest of {0}[ and {1}]"],
	sorted: ["{0} đã sắp xếp", "{0} sorted"],
	zip: ["ghép từng cặp phần tử của {0} và {1}", "pairs of elements from {0} and {1}"],
	enumerate: ["{0} kèm số thứ tự", "{0} with a counter"],
	type: ["kiểu dữ liệu của {0}", "the type of {0}"],
	isinstance: ["kiểm tra {0} có thuộc kiểu {1}", "whether {0} is of type {1}"],
	any: ["có phần tử nào đúng trong {0}", "whether any element of {0} is true"],
	all: ["mọi phần tử của {0} đều đúng", "whether all elements of {0} are true"],
	open: ["*Mở file {0}", "*Open the file {0}"],
	"pd.read_csv": ["bảng đọc từ file CSV {0}", "table read from the CSV file {0}"],
	"pd.read_excel": ["bảng đọc từ file Excel {0}", "table read from the Excel file {0}"],
	"pd.read_parquet": ["bảng đọc từ file Parquet {0}", "table read from the Parquet file {0}"],
	"gpd.read_file": ["bảng bản đồ đọc từ file {0}", "map table read from {0}"],
	"pd.DataFrame": ["bảng (DataFrame) tạo từ {0}", "table (DataFrame) built from {0}"],
	"pd.Series": ["dãy (Series) tạo từ {0}", "series built from {0}"],
	"pd.concat": ["các bảng {0} nối lại với nhau", "the tables {0} stacked together"],
	"pd.merge": ["ghép bảng {0} với bảng {1}[ theo {on}]", "table {0} merged with {1}[ on {on}]"],
	"pd.to_datetime": ["{0} đổi sang kiểu ngày giờ", "{0} converted to dates"],
	"pd.to_numeric": ["{0} đổi sang số", "{0} converted to numbers"],
	"pd.get_dummies": ["{0} mã hóa thành các cột 0/1 (one-hot)", "{0} one-hot encoded into 0/1 columns"],
	"pd.cut": ["{0} chia vào các khoảng {1/bins}", "{0} bucketed into the ranges {1/bins}"],
	"pd.qcut": ["{0} chia thành {1/q} nhóm có số dòng bằng nhau", "{0} split into {1/q} equal-sized groups"],
	"pd.crosstab": ["bảng chéo đếm số dòng theo {0} và {1}", "cross-tab counting rows by {0} and {1}"],
	"pd.pivot_table": ["bảng tổng hợp (pivot) từ {0}", "pivot table from {0}"],
	"pd.isna": ["đánh dấu ô trống của {0}", "empty-cell flags of {0}"],
	"pd.notna": ["đánh dấu ô có giá trị của {0}", "filled-cell flags of {0}"],
	"pd.set_option": ["*Đổi cách pandas hiển thị: {0} = {1}", "*Change how pandas displays: {0} = {1}"],
	"np.mean": ["trung bình của {0}", "mean of {0}"],
	"np.median": ["trung vị của {0}", "median of {0}"],
	"np.std": ["độ lệch chuẩn của {0}", "standard deviation of {0}"],
	"np.sum": ["tổng của {0}", "sum of {0}"],
	"np.log": ["lôgarit tự nhiên của {0}", "natural log of {0}"],
	"np.log1p": ["lôgarit tự nhiên của (1 + {0})", "natural log of (1 + {0})"],
	"np.sqrt": ["căn bậc hai của {0}", "square root of {0}"],
	"np.exp": ["e mũ {0}", "e to the power {0}"],
	"np.abs": ["giá trị tuyệt đối của {0}", "absolute value of {0}"],
	"np.array": ["mảng số tạo từ {0}", "array built from {0}"],
	"np.where": ["với mỗi phần tử: nếu {0} thì lấy {1}, ngược lại lấy {2}", "for each element: if {0} take {1}, otherwise {2}"],
	"np.select": ["chọn giá trị theo từng điều kiện {0} tương ứng {1}[, còn lại {default}]", "pick values by the conditions {0} matched to {1}[, otherwise {default}]"],
	"np.arange": ["dãy số từ {0} đến {1} (bước {2|1})", "numbers from {0} to {1} (step {2|1})"],
	"np.linspace": ["{2} điểm cách đều từ {0} đến {1}", "{2} evenly spaced points from {0} to {1}"],
	"np.ones": ["mảng toàn số 1 cỡ {0}", "array of ones with shape {0}"],
	"np.zeros": ["mảng toàn số 0 cỡ {0}", "array of zeros with shape {0}"],
	"np.triu": ["nửa tam giác phía trên của {0}", "upper triangle of {0}"],
	"np.corrcoef": ["hệ số tương quan của {0}", "correlation coefficients of {0}"],
	"np.percentile": ["phân vị {1}% của {0}", "{1}th percentile of {0}"],
	"np.array_equal": ["kiểm tra hai mảng {0} và {1} có bằng nhau", "whether arrays {0} and {1} are equal"],
	"plt.figure": ["*Tạo khung vẽ mới[ cỡ {figsize}]", "*Create a new figure[ sized {figsize}]"],
	"plt.show": ["*Hiện biểu đồ", "*Show the chart"],
	"plt.title": ["*Đặt tiêu đề biểu đồ: {0}", "*Set the chart title: {0}"],
	"plt.xlabel": ["*Đặt nhãn trục ngang: {0}", "*Label the x-axis: {0}"],
	"plt.ylabel": ["*Đặt nhãn trục dọc: {0}", "*Label the y-axis: {0}"],
	"plt.legend": ["*Hiện chú giải", "*Show the legend"],
	"plt.tight_layout": ["*Tự căn khoảng cách để các biểu đồ không đè nhau", "*Auto-adjust spacing so charts do not overlap"],
	"plt.savefig": ["*Lưu biểu đồ ra file {0}", "*Save the chart to {0}"],
	"plt.xticks": ["*Đặt vị trí hoặc nhãn trục ngang[ xoay {rotation} độ]", "*Set x-axis ticks or labels[ rotated {rotation}°]"],
	"plt.yticks": ["*Đặt vị trí hoặc nhãn trục dọc", "*Set y-axis ticks or labels"],
	"plt.xlim": ["*Giới hạn trục ngang từ {0} đến {1}", "*Limit the x-axis to {0}–{1}"],
	"plt.ylim": ["*Giới hạn trục dọc từ {0} đến {1}", "*Limit the y-axis to {0}–{1}"],
	"plt.hist": ["*Vẽ histogram của {0}", "*Draw a histogram of {0}"],
	"plt.plot": ["*Vẽ đường nối các điểm ({0}, {1})", "*Draw a line through the points ({0}, {1})"],
	"plt.bar": ["*Vẽ biểu đồ cột: vị trí {0}, độ cao {1}", "*Draw a bar chart: positions {0}, heights {1}"],
	"plt.scatter": ["*Vẽ biểu đồ phân tán: x = {0}, y = {1}", "*Draw a scatter plot: x = {0}, y = {1}"],
	"plt.axhline": ["*Vẽ đường ngang tại {0|y}", "*Draw a horizontal line at {0|y}"],
	"plt.axvline": ["*Vẽ đường dọc tại {0|x}", "*Draw a vertical line at {0|x}"],
	"plt.grid": ["*Bật lưới nền", "*Turn on the grid"],
	"plt.pie": ["*Vẽ biểu đồ tròn của {0}", "*Draw a pie chart of {0}"],
	"plt.boxplot": ["*Vẽ biểu đồ hộp của {0}", "*Draw a box plot of {0}"],
	"plt.text": ["*Viết chữ {2} tại vị trí ({0}, {1})", "*Write {2} at ({0}, {1})"],
	"plt.annotate": ["*Ghi chú {0} lên biểu đồ", "*Annotate the chart with {0}"],
	"plt.colorbar": ["*Thêm thanh thang màu", "*Add a colour bar"],
	"plt.close": ["*Đóng biểu đồ", "*Close the chart"],
	"plt.fill_between": ["*Tô vùng giữa hai đường", "*Shade the area between two lines"],
	"plt.stackplot": ["*Vẽ biểu đồ vùng chồng", "*Draw a stacked area chart"],
	"plt.imshow": ["*Hiện ảnh {0}", "*Display the image {0}"],
	"plt.style.use": ["*Chọn kiểu giao diện biểu đồ {0}", "*Pick the chart style {0}"],
	"sns.histplot": ["*Vẽ histogram[ của {x}][ từ bảng {data}][ chia màu theo {hue}]", "*Draw a histogram[ of {x}][ from {data}][ coloured by {hue}]"],
	"sns.boxplot": ["*Vẽ biểu đồ hộp[ của {y}][ theo {x}][ từ bảng {data}]", "*Draw a box plot[ of {y}][ by {x}][ from {data}]"],
	"sns.countplot": ["*Vẽ biểu đồ đếm số dòng[ theo {x}][ từ bảng {data}][ chia màu theo {hue}]", "*Draw a count plot[ by {x}][ from {data}][ coloured by {hue}]"],
	"sns.scatterplot": ["*Vẽ biểu đồ phân tán[ x = {x}][, y = {y}][ từ bảng {data}][ chia màu theo {hue}]", "*Draw a scatter plot[ x = {x}][, y = {y}][ from {data}][ coloured by {hue}]"],
	"sns.heatmap": ["*Vẽ bản đồ nhiệt của {0}", "*Draw a heatmap of {0}"],
	"sns.barplot": ["*Vẽ biểu đồ cột[ của {y}][ theo {x}][ từ bảng {data}]", "*Draw a bar chart[ of {y}][ by {x}][ from {data}]"],
	"sns.pairplot": ["*Vẽ lưới biểu đồ cho từng cặp cột của {0}", "*Draw a grid of charts for each pair of columns in {0}"],
	"sns.lineplot": ["*Vẽ biểu đồ đường[ x = {x}][, y = {y}][ từ bảng {data}]", "*Draw a line chart[ x = {x}][, y = {y}][ from {data}]"],
	"sns.kdeplot": ["*Vẽ đường mật độ của {0/x}", "*Draw a density curve of {0/x}"],
	"sns.violinplot": ["*Vẽ biểu đồ violin[ của {y}][ theo {x}]", "*Draw a violin plot[ of {y}][ by {x}]"],
	"sns.regplot": ["*Vẽ điểm và đường hồi quy[ x = {x}][, y = {y}]", "*Draw points and a regression line[ x = {x}][, y = {y}]"],
	"sns.set": ["*Chọn kiểu giao diện seaborn", "*Pick the seaborn style"],
	"sns.set_style": ["*Chọn kiểu giao diện seaborn {0}", "*Pick the seaborn style {0}"],
	"sm.OLS": ["mô hình hồi quy OLS với biến phụ thuộc {0} và biến giải thích {1}", "OLS regression with outcome {0} and predictors {1}"],
	"sm.GLM": ["mô hình tuyến tính suy rộng với biến phụ thuộc {0} và biến giải thích {1}[, họ mô hình: {family}]", "generalised linear model with outcome {0} and predictors {1}[, family: {family}]"],
	"sm.Logit": ["mô hình logistic với biến phụ thuộc {0} và biến giải thích {1}", "logistic model with outcome {0} and predictors {1}"],
	"sm.add_constant": ["{0} thêm một cột hằng số 1 (để có hệ số chặn)", "{0} with a constant column of 1s (for the intercept)"],
	"sm.families.Binomial": ["họ nhị phân (dùng cho logistic)", "binomial family (used for logistic)"],
	"sm.qqplot": ["*Vẽ biểu đồ Q-Q của {0}", "*Draw a Q-Q plot of {0}"],
	train_test_split: ["{0}[, {1}] chia thành tập học và tập kiểm tra[ (kiểm tra chiếm {test_size})][, cố định random_state = {random_state}]", "{0}[, {1}] split into a training set and a test set[ (test share {test_size})][, fixed random_state = {random_state}]"],
	LinearRegression: ["mô hình hồi quy tuyến tính (chưa học gì)", "a linear regression model (not trained yet)"],
	LogisticRegression: ["mô hình hồi quy logistic (chưa học gì)", "a logistic regression model (not trained yet)"],
	RandomForestClassifier: ["mô hình rừng ngẫu nhiên[ gồm {n_estimators} cây] (chưa học gì)", "a random forest model[ of {n_estimators} trees] (not trained yet)"],
	DecisionTreeClassifier: ["mô hình cây quyết định (chưa học gì)", "a decision tree model (not trained yet)"],
	StandardScaler: ["bộ chuẩn hóa: trừ trung bình rồi chia độ lệch chuẩn", "a scaler: subtract the mean, divide by the standard deviation"],
	MinMaxScaler: ["bộ co giãn về khoảng 0 đến 1", "a scaler into the range 0 to 1"],
	RFE: ["bộ chọn cột RFE dùng {0}[, giữ {n_features_to_select} cột]", "RFE column selector using {0}[, keeping {n_features_to_select} columns]"],
	RFECV: ["bộ chọn cột RFE có kiểm tra chéo dùng {0}", "cross-validated RFE column selector using {0}"],
	KMeans: ["mô hình gom cụm K-means[ với {n_clusters} cụm]", "a K-means model[ with {n_clusters} clusters]"],
	GridSearchCV: ["bộ dò tham số tốt nhất cho {0} trên lưới {1}", "a grid search for the best settings of {0} over {1}"],
	cross_val_score: ["điểm kiểm tra chéo của {0} trên {1}, {2}", "cross-validation scores of {0} on {1}, {2}"],
	accuracy_score: ["độ chính xác (accuracy) giữa nhãn thật {0} và dự đoán {1}", "accuracy between true labels {0} and predictions {1}"],
	confusion_matrix: ["ma trận nhầm lẫn giữa nhãn thật {0} và dự đoán {1}", "confusion matrix of true labels {0} vs predictions {1}"],
	roc_curve: ["đường ROC (tỷ lệ báo nhầm, độ nhạy, ngưỡng) từ {0} và {1}", "ROC curve (false-positive rate, sensitivity, thresholds) from {0} and {1}"],
	roc_auc_score: ["diện tích dưới đường ROC (AUC) từ {0} và {1}", "area under the ROC curve (AUC) from {0} and {1}"],
	auc: ["diện tích dưới đường cong theo {0} và {1}", "area under the curve of {0} against {1}"],
	precision_recall_curve: ["đường precision–recall (precision, recall, ngưỡng) từ {0} và {1}", "precision–recall curve (precision, recall, thresholds) from {0} and {1}"],
	classification_report: ["báo cáo precision, recall, F1 giữa {0} và {1}", "precision, recall and F1 report for {0} vs {1}"],
	mean_squared_error: ["sai số bình phương trung bình (MSE) giữa {0} và {1}", "mean squared error between {0} and {1}"],
	r2_score: ["R² giữa giá trị thật {0} và dự đoán {1}", "R² between actual {0} and predicted {1}"],
	f1_score: ["điểm F1 giữa {0} và {1}", "F1 score between {0} and {1}"],
	precision_score: ["precision giữa {0} và {1}", "precision between {0} and {1}"],
	recall_score: ["recall giữa {0} và {1}", "recall between {0} and {1}"],
	variance_inflation_factor: ["hệ số phóng đại phương sai (VIF) của cột số {1} trong {0}", "variance inflation factor (VIF) of column number {1} in {0}"],
	silhouette_score: ["điểm silhouette của {0} với nhãn cụm {1}", "silhouette score of {0} with cluster labels {1}"],
	RandomOverSampler: ["bộ nhân bản ngẫu nhiên lớp thiểu số", "a random oversampler of the minority class"],
	SMOTE: ["bộ tạo mẫu tổng hợp SMOTE cho lớp thiểu số", "a SMOTE synthetic-sample generator for the minority class"],
	"warnings.filterwarnings": ["*Tắt các cảnh báo", "*Silence warnings"],
	"glob.glob": ["danh sách file khớp mẫu {0}", "files matching {0}"],
	"os.listdir": ["danh sách file trong thư mục {0}", "files in the folder {0}"],
	"os.chdir": ["*Chuyển sang thư mục {0}", "*Switch to the folder {0}"],
	"os.getcwd": ["thư mục đang làm việc", "the current working folder"],
	ZipFile: ["file nén {0}", "the zip file {0}"],
	OpenAI: ["kết nối tới dịch vụ OpenAI", "a connection to the OpenAI service"],
	exec: ["*Chạy đoạn code {0}", "*Run the code {0}"],
	input: ["chữ người dùng gõ vào", "text typed by the user"]
};
var ATTR = {
	shape: ["kích thước (số dòng, số cột) của {o}", "shape (rows, columns) of {o}"],
	columns: ["tên các cột của {o}", "column names of {o}"],
	dtypes: ["kiểu dữ liệu của từng cột trong {o}", "data type of each column in {o}"],
	index: ["chỉ số dòng của {o}", "row index of {o}"],
	values: ["giá trị của {o} dạng mảng", "values of {o} as an array"],
	T: ["{o} xoay ngang thành dọc (chuyển vị)", "{o} transposed"],
	size: ["số phần tử của {o}", "number of elements in {o}"],
	empty: ["{o} có trống không", "whether {o} is empty"],
	year: ["năm của {o}", "year of {o}"],
	month: ["tháng của {o}", "month of {o}"],
	day: ["ngày trong tháng của {o}", "day of month of {o}"],
	hour: ["giờ của {o}", "hour of {o}"],
	dayofweek: ["thứ trong tuần của {o} (0 = thứ Hai)", "weekday of {o} (0 = Monday)"],
	date: ["phần ngày của {o}", "date part of {o}"],
	days: ["số ngày của {o}", "number of days in {o}"],
	coef_: ["hệ số của {o} sau khi học", "coefficients of {o} after training"],
	intercept_: ["hệ số chặn của {o} sau khi học", "intercept of {o} after training"],
	params: ["các hệ số ước lượng của {o}", "estimated coefficients of {o}"],
	pvalues: ["các p-value của {o}", "p-values of {o}"],
	rsquared: ["R² của {o}", "R² of {o}"],
	feature_importances_: ["mức quan trọng của từng cột trong {o}", "importance of each column in {o}"],
	classes_: ["các nhãn mà {o} biết", "the labels {o} knows"],
	inertia_: ["tổng bình phương khoảng cách trong cụm của {o}", "within-cluster sum of squares of {o}"],
	labels_: ["nhãn cụm của từng dòng theo {o}", "cluster label of each row from {o}"],
	cluster_centers_: ["tọa độ tâm cụm của {o}", "cluster centres of {o}"],
	support_: ["các cột được {o} giữ lại", "the columns kept by {o}"],
	best_params_: ["bộ tham số tốt nhất của {o}", "best settings of {o}"],
	best_score_: ["điểm tốt nhất của {o}", "best score of {o}"],
	is_unique: ["{o} có không trùng lặp", "whether {o} has no duplicates"],
	name: ["tên của {o}", "name of {o}"]
};
var NAMES = {
	True: ["đúng", "true"],
	False: ["sai", "false"],
	None: ["rỗng (None)", "nothing (None)"],
	"np.nan": ["giá trị trống (NaN)", "an empty value (NaN)"],
	"np.inf": ["vô cực", "infinity"],
	"np.pi": ["số π", "π"]
};
var BIN = {
	"+": ["cộng", "plus"],
	"-": ["trừ", "minus"],
	"*": ["nhân", "times"],
	"/": ["chia", "divided by"],
	"//": ["chia lấy phần nguyên", "floor-divided by"],
	"%": ["chia lấy phần dư", "modulo"],
	"**": ["lũy thừa", "to the power"],
	"&": ["và", "and"],
	"|": ["hoặc", "or"],
	"^": ["xor", "xor"],
	"@": ["nhân ma trận với", "matrix-times"],
	"<<": ["dịch trái", "shifted left"],
	">>": ["dịch phải", "shifted right"]
};
var CMP = {
	">": ["lớn hơn", "greater than"],
	">=": ["lớn hơn hoặc bằng", "at least"],
	"<": ["nhỏ hơn", "less than"],
	"<=": ["nhỏ hơn hoặc bằng", "at most"],
	"==": ["bằng", "equal to"],
	"!=": ["khác", "not equal to"],
	in: ["nằm trong", "in"],
	"not in": ["không nằm trong", "not in"],
	is: ["là", "is"],
	"is not": ["không phải", "is not"]
};
function makeDescriber(lg) {
	const i = lg === "vi" ? 0 : 1;
	const P = (t) => t[i];
	const alias = {
		pandas: "pd",
		numpy: "np",
		seaborn: "sns",
		"statsmodels.api": "sm",
		sm: "sm"
	};
	const dotted = (n) => {
		if (n.t === "name") return alias[n.v] ?? n.v;
		if (n.t === "attr") {
			const o = dotted(n.o);
			return o ? `${o}.${n.n}` : null;
		}
		return null;
	};
	const wrap = (n, s) => n.t === "bin" || n.t === "cmp" || n.t === "bool" || n.t === "cond" || n.t === "lambda" ? `(${s})` : s;
	const strv = (n) => n.t === "str" ? n.v : null;
	const plain = (n) => {
		if (n.t === "str") return n.v;
		if ((n.t === "list" || n.t === "tuple") && n.v.length <= 8) return n.v.map(plain).join(", ");
		return D(n);
	};
	const isBool = (n) => {
		if (n.t === "cmp" || n.t === "bool") return true;
		if (n.t === "un") return n.op === "not" || n.op === "~";
		if (n.t === "bin") return (n.op === "&" || n.op === "|") && (isBool(n.l) || isBool(n.r));
		if (n.t === "call" && n.fn.t === "attr") return [
			"isin",
			"isna",
			"isnull",
			"notna",
			"notnull",
			"between",
			"contains",
			"startswith",
			"duplicated",
			"endswith"
		].includes(n.fn.n);
		return false;
	};
	const callCtx = (args, o) => {
		const pos = [];
		const kw = {};
		for (const a of args) if (a.k) kw[a.k] = D(a.v);
		else pos.push(D(a.v));
		return {
			o,
			pos,
			kw
		};
	};
	const stripStar = (s) => s.replace(/^\*/, "");
	function dictPhrase(n) {
		return `{${n.v.slice(0, 6).map(([k, v]) => k ? `${plain(k)} → ${D(v)}` : `…${D(v)}`).join("; ")}${n.v.length > 6 ? "; …" : ""}}`;
	}
	function special(fnName, o, args) {
		const kw = (k) => args.find((a) => a.k === k)?.v;
		const pos = args.filter((a) => !a.k).map((a) => a.v);
		const objS = o ? D(o) : "";
		switch (fnName) {
			case "print": {
				if (!args.length) return P(["*In một dòng trống", "*Print an empty line"]);
				const parts = args.filter((a) => !a.k).map((a) => a.v.t === "str" && !a.v.f ? `«${a.v.v}»` : D(a.v));
				return P([`*In ra ${parts.join(", ")}`, `*Print ${parts.join(", ")}`]);
			}
			case "range": {
				const p = pos.map(D);
				const s = p.length === 1 ? P([`từ 0 đến ${p[0]} − 1`, `from 0 to ${p[0]} − 1`]) : P([`từ ${p[0]} đến ${p[1]} − 1${p[2] ? `, bước ${p[2]}` : ""}`, `from ${p[0]} to ${p[1]} − 1${p[2] ? `, step ${p[2]}` : ""}`]);
				return P([`dãy số nguyên ${s}`, `the integers ${s}`]);
			}
			case "plot":
			case "bar":
			case "barh":
			case "line":
			case "area":
			case "pie":
			case "kde": {
				if (!o) return null;
				const kind = strv(kw("kind") ?? {
					t: "str",
					v: fnName === "plot" ? "line" : fnName
				}) ?? "line";
				const KN = {
					line: ["đường", "line"],
					bar: ["cột", "bar"],
					barh: ["cột ngang", "horizontal bar"],
					pie: ["tròn", "pie"],
					hist: ["histogram", "histogram"],
					box: ["hộp", "box"],
					scatter: ["phân tán", "scatter"],
					area: ["vùng", "area"],
					kde: ["mật độ", "density"]
				};
				const kn = KN[kind] ? P(KN[kind]) : kind;
				const title = kw("title") ? D(kw("title")) : "";
				const ax = kw("ax") ? D(kw("ax")) : "";
				return P([`*Vẽ biểu đồ ${kn} từ ${objS}${title ? `, tiêu đề ${title}` : ""}${ax ? `, đặt vào ô ${ax}` : ""}`, `*Draw a ${kn} chart from ${objS}${title ? `, titled ${title}` : ""}${ax ? `, placed in ${ax}` : ""}`]);
			}
			case "subplots": {
				const r = pos[0] ? D(pos[0]) : "1";
				const c = pos[1] ? D(pos[1]) : "1";
				const fs = kw("figsize") ? D(kw("figsize")) : "";
				return P([`*Tạo khung vẽ gồm ${r} hàng × ${c} cột ô biểu đồ${fs ? `, cỡ ${fs}` : ""}; trả về khung và các ô`, `*Create a figure with ${r} row(s) × ${c} column(s) of chart cells${fs ? `, sized ${fs}` : ""}; returns the figure and its cells`]);
			}
			case "sort_values": {
				const by = pos[0] ?? kw("by") ? plain(pos[0] ?? kw("by")) : "";
				const asc = kw("ascending");
				const desc = asc && asc.t === "name" && asc.v === "False";
				return P([`${objS} sắp xếp theo ${by}${desc ? ", từ lớn đến nhỏ" : ", từ nhỏ đến lớn"}`, `${objS} sorted by ${by}${desc ? ", largest first" : ", smallest first"}`]);
			}
			case "drop": {
				if (!o) return null;
				const t = kw("columns") ?? kw("labels") ?? pos[0];
				const ax = kw("axis");
				const axv = ax && ax.t === "num" ? ax.v : null;
				const isCol = !!kw("columns") || axv === "1";
				const what = t ? plain(t) : "";
				return P([`${objS} bỏ ${isCol ? "cột" : "dòng/cột"} ${what}`, `${objS} without ${isCol ? "column(s)" : "row(s)/column(s)"} ${what}`]);
			}
			case "assign": {
				if (!o) return null;
				const names = args.filter((a) => a.k).map((a) => `${a.k} = ${D(a.v)}`).join("; ");
				return P([`${objS} thêm các cột mới: ${names}`, `${objS} with new columns: ${names}`]);
			}
			case "agg":
			case "aggregate": {
				if (!o) return null;
				const a = pos[0];
				if (a && a.t === "dict") return P([`${objS} tính gộp: ${a.v.map(([k, v]) => `${k ? plain(k) : ""} → ${plain(v)}`).join("; ")}`, `${objS} aggregated: ${a.v.map(([k, v]) => `${k ? plain(k) : ""} → ${plain(v)}`).join("; ")}`]);
				if (!a && args.some((x) => x.k)) {
					const named = args.filter((x) => x.k).map((x) => `${x.k} = ${D(x.v)}`).join("; ");
					return P([`${objS} tính gộp thành các cột đặt tên: ${named}`, `${objS} aggregated into named columns: ${named}`]);
				}
				return null;
			}
			case "value_counts": {
				if (!o) return null;
				const nm = kw("normalize");
				const dn = kw("dropna");
				const asPct = nm && nm.t === "name" && nm.v === "True";
				const withNa = dn && dn.t === "name" && dn.v === "False";
				return P([`số lần xuất hiện của từng giá trị trong ${objS}${asPct ? ", tính theo tỷ lệ" : ""}${withNa ? ", tính cả ô trống" : ""}`, `how many times each value appears in ${objS}${asPct ? ", as shares" : ""}${withNa ? ", counting empty cells too" : ""}`]);
			}
			case "isinstance": return null;
			case "round":
				if (!o && pos.length) {
					const d = pos[1] ?? kw("ndigits");
					return P([`${D(pos[0])} làm tròn ${d ? `đến ${D(d)} chữ số thập phân` : "thành số nguyên"}`, `${D(pos[0])} rounded ${d ? `to ${D(d)} decimals` : "to a whole number"}`]);
				}
				return null;
		}
		return null;
	}
	function describeCall(n) {
		const f = n.fn;
		if (f.t === "attr") {
			const full = dotted(f);
			const sp0 = full && special(full, null, n.args);
			if (sp0) return sp0;
			if (full && F[full]) return fmt(P(F[full]), callCtx(n.args));
			const method = f.n;
			const objNode = f.o.t === "attr" && ["str", "dt"].includes(f.o.n) ? f.o.o : f.o;
			const sp = special(method, objNode, n.args);
			if (sp) return sp;
			const last = full ? full.split(".").pop() : method;
			if (!(method in M) && F[last] && f.o.t === "name" && /^(metrics|sklearn|np|pd|plt|sns|sm)$/.test(dotted(f.o) ?? "")) return fmt(P(F[last]), callCtx(n.args));
			const t = M[method === "join" && !(objNode.t === "str") ? "join_df" : method];
			const objS = D(objNode);
			const ctx = callCtx(n.args, wrap(objNode, objS));
			if (t) return fmt(P(t), ctx);
			const args = n.args.map((a) => a.k ? `${a.k} = ${D(a.v)}` : D(a.v)).join(", ");
			return P([`kết quả của ${method}${args ? `(${args})` : ""} trên ${objS}`, `result of ${method}${args ? `(${args})` : ""} on ${objS}`]);
		}
		if (f.t === "name") {
			const nm = alias[f.v] ?? f.v;
			const sp = special(nm, null, n.args);
			if (sp) return sp;
			if (F[nm]) return fmt(P(F[nm]), callCtx(n.args));
			const args = n.args.map((a) => a.k ? `${a.k} = ${D(a.v)}` : D(a.v)).join(", ");
			return P([`kết quả của hàm ${f.v}${args ? ` với ${args}` : ""}`, `result of the function ${f.v}${args ? ` with ${args}` : ""}`]);
		}
		return P([`kết quả của ${D(f)} áp lên ${n.args.map((a) => D(a.v)).join(", ")}`, `${D(f)} applied to ${n.args.map((a) => D(a.v)).join(", ")}`]);
	}
	function describeSub(n) {
		const o = n.o;
		const idx = n.i;
		const oS = D(o);
		const oW = o.t === "call" || o.t === "bin" ? `(${oS})` : oS;
		if (o.t === "attr" && (o.n === "loc" || o.n === "iloc" || o.n === "at" || o.n === "iat")) {
			const base = D(o.o);
			const rowP = (r) => {
				if (r.t === "slice" && !r.a && !r.b) return P(["mọi dòng", "all rows"]);
				if (isBool(r)) return P([`các dòng thỏa ${D(r)}`, `the rows where ${D(r)}`]);
				if (r.t === "slice") return P([`các dòng từ ${r.a ? D(r.a) : "đầu"} đến ${r.b ? D(r.b) : "cuối"}`, `rows ${r.a ? D(r.a) : "from the start"} to ${r.b ? D(r.b) : "the end"}`]);
				return P([`dòng ${plain(r)}`, `row ${plain(r)}`]);
			};
			const colP = (c) => {
				if (c.t === "slice" && !c.a && !c.b) return P(["mọi cột", "all columns"]);
				if (c.t === "list") return P([`các cột ${plain(c)}`, `columns ${plain(c)}`]);
				return P([`cột ${plain(c)}`, `column ${plain(c)}`]);
			};
			if (idx.t === "tuple" && idx.v.length === 2) return P([`${rowP(idx.v[0])}, ${colP(idx.v[1])} của ${base}`, `${rowP(idx.v[0])}, ${colP(idx.v[1])} of ${base}`]);
			return P([`${rowP(idx)} của ${base}`, `${rowP(idx)} of ${base}`]);
		}
		if (idx.t === "str") return P([`cột ${idx.v} của ${oW}`, `column ${idx.v} of ${oW}`]);
		if (idx.t === "list" && idx.v.every((x) => x.t === "str")) return P([`các cột ${plain(idx)} của ${oW}`, `columns ${plain(idx)} of ${oW}`]);
		if (isBool(idx)) return P([`các dòng của ${oW} thỏa điều kiện: ${D(idx)}`, `the rows of ${oW} where ${D(idx)}`]);
		if (idx.t === "slice") {
			const a = idx.a ? D(idx.a) : "";
			const b = idx.b ? D(idx.b) : "";
			return P([`các phần tử của ${oW} từ ${a || "đầu"} đến ${b ? `trước ${b}` : "cuối"}${idx.c ? `, bước ${D(idx.c)}` : ""}`, `elements of ${oW} from ${a || "the start"} to ${b ? `before ${b}` : "the end"}${idx.c ? `, step ${D(idx.c)}` : ""}`]);
		}
		if (idx.t === "num") {
			if (idx.v === "0") return P([`phần tử đầu của ${oW}`, `the first element of ${oW}`]);
			return P([`phần tử số ${idx.v} của ${oW}`, `element number ${idx.v} of ${oW}`]);
		}
		if (idx.t === "un" && idx.op === "-" && idx.x.t === "num" && idx.x.v === "1") return P([`phần tử cuối của ${oW}`, `the last element of ${oW}`]);
		if (idx.t === "tuple") return P([`phần tử (${idx.v.map(D).join(", ")}) của ${oW}`, `element (${idx.v.map(D).join(", ")}) of ${oW}`]);
		if (idx.t === "name") return P([`phần của ${oW} được chọn bởi ${D(idx)}`, `the part of ${oW} picked by ${D(idx)}`]);
		return P([`phần tử ${D(idx)} của ${oW}`, `element ${D(idx)} of ${oW}`]);
	}
	function D(n) {
		switch (n.t) {
			case "name": {
				const nm = NAMES[alias[n.v] ?? n.v];
				return nm ? P(nm) : n.v;
			}
			case "num": return n.v;
			case "str": return n.f ? P([`chữ «${n.v}» (có chèn giá trị)`, `text “${n.v}” (with values inserted)`]) : `«${n.v}»`;
			case "list":
			case "tuple":
			case "set": {
				const items = n.v.slice(0, 6).map(D);
				const more = n.v.length > 6 ? ", …" : "";
				if (!n.v.length) return P(["rỗng", "empty"]);
				return n.t === "list" ? `[${items.join(", ")}${more}]` : n.t === "tuple" ? `(${items.join(", ")}${more})` : `{${items.join(", ")}${more}}`;
			}
			case "dict": return dictPhrase(n);
			case "call": return describeCall(n);
			case "attr": {
				const full = dotted(n);
				if (full && NAMES[full]) return P(NAMES[full]);
				if (n.o.t === "attr" && ["str", "dt"].includes(n.o.n) && ATTR[n.n]) return fmt(P(ATTR[n.n]), {
					o: D(n.o.o),
					pos: [],
					kw: {}
				});
				if (ATTR[n.n]) return fmt(P(ATTR[n.n]), {
					o: wrap(n.o, D(n.o)),
					pos: [],
					kw: {}
				});
				if (n.o.t === "name" && ![
					"pd",
					"np",
					"plt",
					"sns",
					"sm"
				].includes(n.o.v)) return `${n.o.v}.${n.n}`;
				return full ?? `${D(n.o)}.${n.n}`;
			}
			case "sub": return describeSub(n);
			case "slice": return `${n.a ? D(n.a) : ""}:${n.b ? D(n.b) : ""}`;
			case "bin": {
				const op = BIN[n.op];
				const l = wrap(n.l, D(n.l));
				const r = wrap(n.r, D(n.r));
				return `${l} ${op ? P(op) : n.op} ${r}`;
			}
			case "un":
				if (n.op === "not" || n.op === "~") return P([`không phải (${D(n.x)})`, `not (${D(n.x)})`]);
				return n.op === "-" ? `−${wrap(n.x, D(n.x))}` : D(n.x);
			case "cmp": {
				let out = D(n.v[0]);
				n.ops.forEach((op, k) => {
					out += ` ${P(CMP[op] ?? [op, op])} ${D(n.v[k + 1])}`;
				});
				return out;
			}
			case "bool": return n.v.map((x) => wrap(x, D(x))).join(P([n.op === "and" ? " và " : " hoặc ", n.op === "and" ? " and " : " or "]));
			case "lambda": return P([`hàm nhận ${n.p.join(", ") || "không gì"} và trả về ${D(n.b)}`, `a function taking ${n.p.join(", ") || "nothing"} and returning ${D(n.b)}`]);
			case "cond": return P([`${D(n.a)} nếu ${D(n.c)}, ngược lại ${D(n.b)}`, `${D(n.a)} if ${D(n.c)}, otherwise ${D(n.b)}`]);
			case "comp": {
				const ifs = n.ifs.length ? P([`, chỉ khi ${n.ifs.map(D).join(" và ")}`, `, only when ${n.ifs.map(D).join(" and ")}`]) : "";
				const e = n.k === "dict" ? `${D(n.e)}: ${D(n.e2)}` : D(n.e);
				const kind = n.k === "dict" ? P(["từ điển", "dictionary"]) : n.k === "set" ? P(["tập hợp", "set"]) : n.k === "list" ? P(["danh sách", "list"]) : P(["dãy", "sequence"]);
				return P([`${kind} gồm ${e} với mỗi ${plain(n.v)} trong ${D(n.it)}${ifs}`, `${kind} of ${e} for each ${plain(n.v)} in ${D(n.it)}${ifs}`]);
			}
			case "star": return n.d ? P([`toàn bộ cặp của ${D(n.x)}`, `all pairs of ${D(n.x)}`]) : P([`tất cả phần tử của ${D(n.x)}`, `all elements of ${D(n.x)}`]);
		}
	}
	const cap = (s) => s ? s[0].toUpperCase() + s.slice(1) : s;
	const end = (s) => /[.:!?…]$/.test(s) ? s : s + ".";
	const clauseNoun = (n) => {
		const s = D(n);
		return s.startsWith("*") ? stripStar(s) : s;
	};
	const exprStmt = (n) => {
		const s = D(n);
		if (s.startsWith("*")) return end(cap(stripStar(s)));
		return end(P([`Tính ${s}`, `Compute ${s}`]));
	};
	const target = (n) => {
		if (n.t === "name") return n.v;
		if (n.t === "tuple" || n.t === "list") return n.v.map(target).join(", ");
		if (n.t === "sub") {
			const o = n.o;
			if (o.t === "attr" && (o.n === "loc" || o.n === "iloc")) return D(n);
			if (n.i.t === "str") return P([`cột ${n.i.v} của ${D(o)}`, `column ${n.i.v} of ${D(o)}`]);
			if (n.i.t === "list") return P([`các cột ${plain(n.i)} của ${D(o)}`, `columns ${plain(n.i)} of ${D(o)}`]);
			return D(n);
		}
		return D(n);
	};
	const PH_VI = "kết quả bước trước";
	const PH_EN = "the previous result";
	const isAcc = (n) => n.t === "attr" && (n.n === "str" || n.n === "dt");
	const isLoc = (n) => n.t === "attr" && (n.n === "loc" || n.n === "iloc");
	const innerOf = (n) => {
		if (n.t === "call" && n.fn.t === "attr") return isAcc(n.fn.o) ? n.fn.o.o : n.fn.o;
		if (n.t === "sub") return isLoc(n.o) ? n.o.o : n.o;
		if (n.t === "attr" && !isAcc(n)) return n.o;
		return null;
	};
	const withBase = (n, b) => {
		if (n.t === "call" && n.fn.t === "attr") return {
			...n,
			fn: {
				...n.fn,
				o: isAcc(n.fn.o) ? {
					...n.fn.o,
					o: b
				} : b
			}
		};
		if (n.t === "sub") return {
			...n,
			o: isLoc(n.o) ? {
				...n.o,
				o: b
			} : b
		};
		if (n.t === "attr") return {
			...n,
			o: b
		};
		return n;
	};
	function stepsOf(n) {
		const ops = [];
		let cur = n;
		for (;;) {
			const inn = innerOf(cur);
			if (!inn) break;
			if (cur.t === "call" && cur.fn.t === "attr" && dottedPublic(cur.fn) && F[dottedPublic(cur.fn)]) break;
			ops.push(cur);
			cur = inn;
		}
		const calls = ops.filter((o) => o.t === "call").length;
		if (ops.length < 3 && calls < 2) return void 0;
		const ph = {
			t: "name",
			v: lg === "vi" ? PH_VI : PH_EN
		};
		const out = [P([`Bắt đầu từ ${D(cur)}`, `Start from ${D(cur)}`])];
		for (const op of ops.reverse()) {
			const d = D(withBase(op, ph));
			out.push(cap(d.replace(/^\*/, "")));
		}
		return out;
	}
	const dottedPublic = (n) => dotted(n);
	let chainNode = null;
	function explainStatement(s) {
		const text = s.trim();
		if (text.startsWith("%")) return P([`Lệnh riêng của notebook: ${text.slice(1)} (không phải Python thường).`, `Notebook-only command: ${text.slice(1)} (not plain Python).`]);
		if (text.startsWith("!")) return P([`Chạy lệnh hệ thống: ${text.slice(1)}.`, `Run a shell command: ${text.slice(1)}.`]);
		const toks = lex(text);
		const first = toks[0];
		const kw = first.k === "name" ? first.v : "";
		const p = new Parser(toks);
		const textAfterColon = (t) => {
			let depth = 0;
			let q = "";
			for (let k = 0; k < t.length; k++) {
				const c = t[k];
				if (q) {
					if (c === q) q = "";
					continue;
				}
				if (c === "'" || c === "\"") {
					q = c;
					continue;
				}
				if ("([{".includes(c)) depth++;
				else if (")]}".includes(c)) depth--;
				else if (c === ":" && depth === 0) return t.slice(k + 1).trim();
			}
			return "";
		};
		const bodyOf = () => {
			const rest = textAfterColon(text);
			return rest ? " " + explainStatement(rest) : "";
		};
		try {
			if (kw === "import") {
				p.p++;
				const parts = [];
				do {
					let name = "";
					while (p.cur.k === "name" && !p.isKw("as") || p.isOp(".")) {
						name += p.cur.v;
						p.p++;
					}
					let as = "";
					if (p.eat("as")) {
						as = p.cur.v;
						p.p++;
					}
					parts.push(as ? P([`${name} (gọi tắt là ${as})`, `${name} (nicknamed ${as})`]) : name);
				} while (p.eat(","));
				return P([`Nạp thư viện ${parts.join(", ")} để dùng các hàm của nó.`, `Load the library ${parts.join(", ")} so its functions can be used.`]);
			}
			if (kw === "from") {
				p.p++;
				let mod = "";
				while (p.cur.k === "name" && !p.isKw("import") || p.isOp(".")) {
					mod += p.cur.v;
					p.p++;
				}
				p.expect("import");
				const names = [];
				while (!p.atEnd()) {
					if (p.cur.k === "name" && !p.isKw("as")) names.push(p.cur.v);
					else if (p.isOp("*")) names.push("*");
					p.p++;
				}
				return P([`Từ thư viện ${mod}, lấy ra ${names.join(", ")} để dùng trực tiếp.`, `From the library ${mod}, bring in ${names.join(", ")} for direct use.`]);
			}
			if (kw === "for") {
				p.p++;
				const t = p.targetList();
				p.expect("in");
				const it = p.exprList();
				return P([`Lặp: với mỗi ${plain(t)} trong ${D(it)}, chạy các dòng thụt vào bên dưới.${bodyOf()}`, `Loop: for each ${plain(t)} in ${D(it)}, run the indented lines below.${bodyOf()}`]);
			}
			if (kw === "while") {
				p.p++;
				const c = p.expr();
				return P([`Lặp: chừng nào ${D(c)} còn đúng thì chạy các dòng thụt vào bên dưới.${bodyOf()}`, `Loop: while ${D(c)} stays true, run the indented lines below.${bodyOf()}`]);
			}
			if (kw === "if" || kw === "elif") {
				p.p++;
				const c = p.expr();
				const word = kw === "if" ? P(["Nếu", "If"]) : P(["Nếu không, nhưng nếu", "Otherwise, if"]);
				return P([`${word} ${D(c)} thì chạy các dòng thụt vào bên dưới.${bodyOf()}`, `${word} ${D(c)}, run the indented lines below.${bodyOf()}`]);
			}
			if (kw === "else") return P([`Nếu không có điều kiện nào ở trên đúng thì chạy các dòng thụt vào bên dưới.${bodyOf()}`, `If none of the conditions above held, run the indented lines below.${bodyOf()}`]);
			if (kw === "try") return P([`Thử chạy các dòng thụt vào bên dưới; nếu lỗi thì nhảy sang phần except.${bodyOf()}`, `Try the indented lines below; if they fail, jump to the except part.${bodyOf()}`]);
			if (kw === "except") return P(["Nếu khối try ở trên báo lỗi thì chạy các dòng thụt vào bên dưới.", "If the try block above raised an error, run the indented lines below."]);
			if (kw === "finally") return P(["Luôn chạy các dòng thụt vào bên dưới, dù có lỗi hay không.", "Always run the indented lines below, error or not."]);
			if (kw === "with") {
				p.p++;
				const e = p.expr();
				let as = "";
				if (p.eat("as")) as = p.cur.v;
				return P([`Mở ${D(e)}${as ? `, đặt tên ${as}` : ""}, dùng trong các dòng thụt vào bên dưới rồi tự đóng lại.`, `Open ${D(e)}${as ? ` as ${as}` : ""}, use it in the indented lines below, then close it automatically.`]);
			}
			if (kw === "def") {
				p.p++;
				const name = p.cur.v;
				const params = text.slice(text.indexOf("(") + 1, text.lastIndexOf(")")).split(",").map((x) => x.trim().split("=")[0].split(":")[0].trim()).filter(Boolean);
				return P([`Định nghĩa hàm ${name}${params.length ? ` nhận ${params.join(", ")}` : ""}; sau này gọi ${name}(…) là chạy các dòng thụt vào bên dưới.`, `Define the function ${name}${params.length ? ` taking ${params.join(", ")}` : ""}; calling ${name}(…) later runs the indented lines below.`]);
			}
			if (kw === "class") return P([`Định nghĩa một kiểu đối tượng mới tên ${toks[1]?.v}.`, `Define a new kind of object called ${toks[1]?.v}.`]);
			if (kw === "return") {
				p.p++;
				if (p.atEnd()) return P(["Kết thúc hàm, không trả giá trị.", "End the function without a value."]);
				const rv = clauseNoun(p.exprList());
				return P([`Kết thúc hàm và trả về ${rv}.`, `End the function and return ${rv}.`]);
			}
			if (kw === "pass") return P(["Không làm gì (giữ chỗ).", "Do nothing (placeholder)."]);
			if (kw === "break") return P(["Thoát khỏi vòng lặp ngay.", "Leave the loop right now."]);
			if (kw === "continue") return P(["Bỏ qua phần còn lại của vòng này, sang vòng kế.", "Skip the rest of this round and go to the next."]);
			if (kw === "raise") return P(["Cố ý báo lỗi để dừng chương trình.", "Raise an error on purpose to stop the program."]);
			if (kw === "assert") {
				p.p++;
				const av = D(p.expr());
				return P([`Kiểm tra ${av} đúng; nếu sai thì dừng và báo lỗi.`, `Check that ${av} holds; if not, stop with an error.`]);
			}
			if (kw === "del") {
				p.p++;
				const dv = D(p.exprList());
				return P([`Xóa ${dv}.`, `Delete ${dv}.`]);
			}
			if (kw === "global" || kw === "nonlocal") return P([`Cho phép hàm sửa biến ${toks.slice(1).map((x) => x.v).join(" ")} ở ngoài.`, `Allow the function to change the outer variable ${toks.slice(1).map((x) => x.v).join(" ")}.`]);
			const lhs = p.exprList();
			const AUG = {
				"+=": ["Cộng thêm", "Add"],
				"-=": ["Trừ bớt", "Subtract"],
				"*=": ["Nhân thêm", "Multiply by"],
				"/=": ["Chia cho", "Divide by"],
				"//=": ["Chia lấy phần nguyên cho", "Floor-divide by"],
				"%=": ["Chia lấy dư cho", "Take the remainder by"],
				"**=": ["Lũy thừa với", "Raise to the power"]
			};
			if (p.cur.k === "op" && AUG[p.cur.v]) {
				const op = p.cur.v;
				p.p++;
				const r = p.exprList();
				return end(P([`${P(AUG[op])} ${D(r)} ${op === "-=" ? "khỏi" : op === "+=" ? "vào" : "đối với"} ${target(lhs)}`, `${P(AUG[op])} ${D(r)} ${op === "+=" ? "to" : op === "-=" ? "from" : "for"} ${target(lhs)}`]));
			}
			if (p.isOp("=")) {
				const targets = [lhs];
				let rhs = lhs;
				while (p.eat("=")) {
					rhs = p.exprList();
					if (p.isOp("=")) targets.push(rhs);
				}
				const rs = D(rhs);
				chainNode = rhs;
				const tgt = targets.map(target).join(" = ");
				if (rs.startsWith("*")) return end(P([`${cap(stripStar(rs))}, lưu vào ${tgt}`, `${cap(stripStar(rs))}, stored in ${tgt}`]));
				return end(P([`Lưu vào ${tgt}: ${rs}`, `Store in ${tgt}: ${rs}`]));
			}
			if (p.isOp(":")) {
				p.p++;
				return P([`Khai báo ${D(lhs)}.`, `Declare ${D(lhs)}.`]);
			}
			if (!p.atEnd()) throw new Error("rest");
			chainNode = lhs.t === "call" && lhs.fn.t === "name" && lhs.fn.v === "print" && lhs.args[0] ? lhs.args[0].v : lhs;
			return exprStmt(lhs);
		} catch {
			if (/=\s*$/.test(text)) return P(["Dòng này để trống phần bên phải dấu =: chỗ bạn tự điền code.", "This line leaves the right side of = empty: the spot where you write your own code."]);
			return P(["Dòng này chạy đúng như được viết; đọc từng tên hàm trong dòng để biết nó làm gì.", "This line runs exactly as written; read each function name in it to see what it does."]);
		}
	}
	function explainFull(s) {
		chainNode = null;
		const text = explainStatement(s);
		const node = chainNode;
		let steps;
		try {
			steps = node ? stepsOf(node) : void 0;
		} catch {
			steps = void 0;
		}
		return {
			text,
			steps
		};
	}
	return {
		explainStatement,
		explainFull,
		D
	};
}
function splitStatements(code) {
	const out = [];
	const lines = code.replace(/\r/g, "").split("\n");
	let k = 0;
	while (k < lines.length) {
		const line = lines[k];
		if (!line.trim()) {
			k++;
			continue;
		}
		const indent = /^\s*/.exec(line)[0];
		if (line.trim().startsWith("#")) {
			out.push({
				text: line.trim().replace(/^#+\s*/, ""),
				indent,
				raw: line,
				note: true
			});
			k++;
			continue;
		}
		let buf = line;
		const raws = [line];
		const state = () => {
			let depth = 0;
			let q = "";
			let esc = false;
			for (let i = 0; i < buf.length; i++) {
				const c = buf[i];
				if (q) {
					if (esc) {
						esc = false;
						continue;
					}
					if (c === "\\" && q.length === 1) {
						esc = true;
						continue;
					}
					if (buf.startsWith(q, i)) {
						i += q.length - 1;
						q = "";
					}
					continue;
				}
				if (c === "#") {
					while (i < buf.length && buf[i] !== "\n") i++;
					continue;
				}
				if (c === "\"" || c === "'") {
					q = buf.startsWith(c.repeat(3), i) ? c.repeat(3) : c;
					i += q.length - 1;
					continue;
				}
				if ("([{".includes(c)) depth++;
				else if (")]}".includes(c)) depth--;
			}
			return {
				depth,
				q,
				cont: /\\\s*$/.test(buf)
			};
		};
		while (k + 1 < lines.length) {
			const s = state();
			if (s.depth > 0 || s.q || s.cont) {
				k++;
				buf += "\n" + lines[k];
				raws.push(lines[k]);
			} else break;
		}
		k++;
		const parts = [];
		let depth = 0;
		let q = "";
		let cur = "";
		for (let i = 0; i < buf.length; i++) {
			const c = buf[i];
			if (q) {
				cur += c;
				if (c === "\\") {
					cur += buf[++i] ?? "";
					continue;
				}
				if (buf.startsWith(q, i)) {
					cur += q.slice(1);
					i += q.length - 1;
					q = "";
				}
				continue;
			}
			if (c === "#") {
				while (i < buf.length && buf[i] !== "\n") i++;
				i--;
				continue;
			}
			if (c === "\"" || c === "'") {
				q = buf.startsWith(c.repeat(3), i) ? c.repeat(3) : c;
				cur += q;
				i += q.length - 1;
				continue;
			}
			if ("([{".includes(c)) depth++;
			else if (")]}".includes(c)) depth--;
			if (c === ";" && depth === 0) {
				parts.push(cur);
				cur = "";
				continue;
			}
			cur += c;
		}
		parts.push(cur);
		parts.map((x) => x.trim().replace(/\s+→\s+.*$/s, "")).filter(Boolean).forEach((t, idx) => out.push({
			text: t,
			indent,
			raw: idx === 0 ? raws.join("\n") : t
		}));
	}
	return out;
}
function explainPython(code, lg) {
	const { explainFull } = makeDescriber(lg);
	const rows = splitStatements(code).map((s) => s.note ? {
		code: s.raw,
		text: lg === "vi" ? `Dòng ghi chú, máy bỏ qua: ${s.text}` : `A comment, ignored by the computer: ${s.text}`,
		kind: "note"
	} : {
		code: s.raw,
		...explainFull(s.text)
	});
	const real = rows.filter((r) => r.kind !== "note");
	if (!real.length) return null;
	return {
		lang: "Python",
		summary: lg === "vi" ? `Đoạn code có ${real.length} lệnh; máy chạy từ trên xuống, mỗi lệnh được nói lại bằng lời bên dưới.` : `This code has ${real.length} statement${real.length === 1 ? "" : "s"}; the computer runs them top to bottom, and each is restated in words below.`,
		rows
	};
}
function lexSql(src) {
	const out = [];
	let i = 0;
	const n = src.length;
	while (i < n) {
		const c = src[i];
		if (/\s/.test(c)) {
			i++;
			continue;
		}
		if (c === "-" && src[i + 1] === "-") {
			while (i < n && src[i] !== "\n") i++;
			continue;
		}
		if (c === "/" && src[i + 1] === "*") {
			const j = src.indexOf("*/", i + 2);
			i = j < 0 ? n : j + 2;
			continue;
		}
		if (c === "'") {
			let j = i + 1;
			while (j < n && !(src[j] === "'" && src[j + 1] !== "'")) j += src[j] === "'" ? 2 : 1;
			out.push({
				k: "s",
				v: src.slice(i + 1, j).replace(/''/g, "'"),
				s: i,
				e: j + 1
			});
			i = j + 1;
			continue;
		}
		if (c === "\"" || c === "`") {
			const j = src.indexOf(c, i + 1);
			out.push({
				k: "w",
				v: src.slice(i + 1, j < 0 ? n : j),
				s: i,
				e: (j < 0 ? n : j) + 1
			});
			i = (j < 0 ? n : j) + 1;
			continue;
		}
		if (/[0-9]/.test(c) || c === "." && /[0-9]/.test(src[i + 1] ?? "")) {
			const m = /^[0-9]*\.?[0-9]+(?:[eE][+-]?[0-9]+)?/.exec(src.slice(i));
			out.push({
				k: "n",
				v: m[0],
				s: i,
				e: i + m[0].length
			});
			i += m[0].length;
			continue;
		}
		if (/[A-Za-z_]/.test(c) || c.charCodeAt(0) > 127) {
			let j = i + 1;
			while (j < n && (/[A-Za-z0-9_$]/.test(src[j]) || src.charCodeAt(j) > 127 || src[j] === "." && /[A-Za-z_*]/.test(src[j + 1] ?? ""))) j++;
			if (src[j - 1] === "." && src[j] === "*") j++;
			out.push({
				k: "w",
				v: src.slice(i, j),
				s: i,
				e: j
			});
			i = j;
			continue;
		}
		const two = src.slice(i, i + 2);
		if ([
			"<=",
			">=",
			"<>",
			"!=",
			"||",
			"::",
			":="
		].includes(two)) {
			out.push({
				k: "o",
				v: two,
				s: i,
				e: i + 2
			});
			i += 2;
			continue;
		}
		out.push({
			k: "o",
			v: c,
			s: i,
			e: i + 1
		});
		i++;
	}
	return out;
}
var FN$1 = {
	COUNT: ["số dòng", "number of rows"],
	SUM: ["tổng của {0}", "sum of {0}"],
	AVG: ["trung bình của {0}", "average of {0}"],
	MIN: ["giá trị nhỏ nhất của {0}", "minimum of {0}"],
	MAX: ["giá trị lớn nhất của {0}", "maximum of {0}"],
	STDDEV: ["độ lệch chuẩn của {0}", "standard deviation of {0}"],
	VARIANCE: ["phương sai của {0}", "variance of {0}"],
	ROUND: ["{0} làm tròn {1|0} chữ số thập phân", "{0} rounded to {1|0} decimals"],
	ABS: ["giá trị tuyệt đối của {0}", "absolute value of {0}"],
	COALESCE: ["giá trị không trống đầu tiên trong ({all})", "the first non-empty value among ({all})"],
	IFNULL: ["{0}, nếu trống thì lấy {1}", "{0}, or {1} if empty"],
	NULLIF: ["{0}, nhưng thành trống nếu bằng {1}", "{0}, but empty if it equals {1}"],
	UPPER: ["{0} viết hoa", "{0} in capitals"],
	LOWER: ["{0} viết thường", "{0} in lowercase"],
	TRIM: ["{0} bỏ khoảng trắng đầu cuối", "{0} without outer spaces"],
	LENGTH: ["độ dài chữ của {0}", "length of {0}"],
	SUBSTR: ["đoạn chữ của {0} từ ký tự {1}[, dài {2} ký tự]", "part of {0} from character {1}[, {2} characters long]"],
	SUBSTRING: ["đoạn chữ của {0} từ ký tự {1}[, dài {2} ký tự]", "part of {0} from character {1}[, {2} characters long]"],
	CONCAT: ["nối chữ: {all}", "joined text: {all}"],
	REPLACE: ["{0} với {1} được thay bằng {2}", "{0} with {1} replaced by {2}"],
	DATE_TRUNC: ["{1} cắt về đầu {0}", "{1} cut down to the start of {0}"],
	EXTRACT: ["{0} lấy ra từ ngày", "{0} taken from the date"],
	DATE: ["ngày của {0}", "the date of {0}"],
	TO_DATE: ["{0} đổi sang kiểu ngày", "{0} converted to a date"],
	DATEDIFF: ["số ngày giữa {0} và {1}", "days between {0} and {1}"],
	CURRENT_DATE: ["ngày hôm nay", "today's date"],
	NOW: ["thời điểm hiện tại", "the current time"],
	RANK: ["hạng (đồng hạng thì nhảy số)", "rank (ties skip numbers)"],
	DENSE_RANK: ["hạng (đồng hạng không nhảy số)", "rank (ties do not skip numbers)"],
	ROW_NUMBER: ["số thứ tự dòng (không bao giờ trùng)", "row number (never tied)"],
	NTILE: ["chia thành {0} nhóm bằng nhau, số của nhóm", "group number when split into {0} equal groups"],
	LAG: ["giá trị {0} của dòng trước[ cách {1} dòng]", "the {0} of the previous row[, {1} rows back]"],
	LEAD: ["giá trị {0} của dòng sau[ cách {1} dòng]", "the {0} of the next row[, {1} rows ahead]"],
	FIRST_VALUE: ["giá trị {0} của dòng đầu cửa sổ", "the {0} of the first row in the window"],
	LAST_VALUE: ["giá trị {0} của dòng cuối cửa sổ", "the {0} of the last row in the window"],
	IF: ["nếu {0} thì {1}, ngược lại {2}", "if {0} then {1}, otherwise {2}"],
	DIVIDE: ["{0} chia {1} (an toàn khi chia cho 0)", "{0} divided by {1} (safe against zero)"],
	COUNTROWS: ["số dòng của {0}", "number of rows in {0}"],
	DISTINCTCOUNT: ["số giá trị khác nhau của {0}", "number of distinct values in {0}"],
	MOD: ["{0} chia lấy dư cho {1}", "{0} modulo {1}"],
	POWER: ["{0} lũy thừa {1}", "{0} to the power {1}"],
	SQRT: ["căn bậc hai của {0}", "square root of {0}"],
	LN: ["lôgarit tự nhiên của {0}", "natural log of {0}"],
	LOG: ["lôgarit của {0}", "log of {0}"],
	CEIL: ["{0} làm tròn lên", "{0} rounded up"],
	FLOOR: ["{0} làm tròn xuống", "{0} rounded down"],
	GREATEST: ["số lớn nhất trong ({all})", "the largest of ({all})"],
	LEAST: ["số nhỏ nhất trong ({all})", "the smallest of ({all})"],
	STRFTIME: ["{1} viết lại theo khuôn {0}", "{1} formatted as {0}"]
};
var KW_CLAUSE = [
	"WITH",
	"SELECT",
	"FROM",
	"WHERE",
	"GROUP",
	"HAVING",
	"ORDER",
	"LIMIT",
	"OFFSET",
	"UNION",
	"INTERSECT",
	"EXCEPT",
	"WINDOW",
	"JOIN",
	"LEFT",
	"RIGHT",
	"INNER",
	"FULL",
	"CROSS",
	"ON",
	"SET",
	"VALUES",
	"INSERT",
	"UPDATE",
	"DELETE",
	"CREATE",
	"ALTER",
	"DROP",
	"FOREIGN",
	"PRIMARY",
	"PARTITION",
	"USING",
	"USE",
	"CALL"
];
function explainSql(code, lg) {
	const i = lg === "vi" ? 0 : 1;
	const P = (t) => t[i];
	const toks = lexSql(code);
	if (!toks.length) return null;
	const up = (t) => t && t.k === "w" ? t.v.toUpperCase() : "";
	let pos = 0;
	let src = toks;
	const cur = () => src[pos];
	const isW = (v) => up(cur()) === v;
	const isO = (v) => cur()?.k === "o" && cur().v === v;
	const OPN = {
		"=": ["bằng", "equals"],
		"<>": ["khác", "differs from"],
		"!=": ["khác", "differs from"],
		">": ["lớn hơn", "is greater than"],
		"<": ["nhỏ hơn", "is less than"],
		">=": ["lớn hơn hoặc bằng", "is at least"],
		"<=": ["nhỏ hơn hoặc bằng", "is at most"]
	};
	const ARI = {
		"+": ["cộng", "plus"],
		"-": ["trừ", "minus"],
		"*": ["nhân", "times"],
		"/": ["chia", "divided by"],
		"%": ["chia lấy dư", "modulo"],
		"||": ["nối với", "joined with"]
	};
	const argsOf = () => {
		const out = [];
		if (isO(")")) {
			pos++;
			return out;
		}
		for (;;) {
			if (isW("DISTINCT")) {
				pos++;
				out.push(P(["(các giá trị khác nhau) ", "(distinct) "]) + orExpr());
			} else if (isO("*")) {
				pos++;
				out.push("*");
			} else out.push(orExpr());
			if (isO(",")) {
				pos++;
				continue;
			}
			break;
		}
		if (isO(")")) pos++;
		return out;
	};
	const windowSpec = () => {
		if (!isO("(")) {
			const nm = cur()?.v ?? "";
			pos++;
			return P([`cửa sổ đã đặt tên ${nm}`, `the named window ${nm}`]);
		}
		pos++;
		const parts = [];
		while (!isO(")") && pos < src.length) if (isW("PARTITION")) {
			pos += 2;
			const l = [];
			do
				l.push(addExpr());
			while (isO(",") && ++pos);
			parts.push(P([`mỗi nhóm ${l.join(", ")} tính riêng`, `computed separately for each ${l.join(", ")}`]));
		} else if (isW("ORDER")) {
			pos += 2;
			{
				const ol = orderList();
				parts.push(P([`sắp theo ${ol}`, `ordered by ${ol}`]));
			}
		} else if (isW("ROWS") || isW("RANGE")) {
			const kind = up(cur());
			pos++;
			const words = [];
			while (!isO(")") && !isW("PARTITION") && !isW("ORDER") && pos < src.length) {
				words.push(cur().v);
				pos++;
			}
			const f = words.join(" ").toUpperCase();
			const m = /BETWEEN (\d+|UNBOUNDED) PRECEDING AND (CURRENT ROW|\d+ FOLLOWING|\d+ PRECEDING|UNBOUNDED FOLLOWING)/.exec(f);
			if (m) parts.push(P([`khung: từ ${m[1] === "UNBOUNDED" ? "dòng đầu" : `${m[1]} dòng trước`} đến ${m[2] === "CURRENT ROW" ? "dòng hiện tại" : m[2].toLowerCase()}${kind === "RANGE" ? " (theo giá trị)" : ""}`, `frame: from ${m[1] === "UNBOUNDED" ? "the first row" : `${m[1]} rows back`} to ${m[2] === "CURRENT ROW" ? "the current row" : m[2].toLowerCase()}`]));
			else parts.push(P([`khung: ${words.join(" ")}`, `frame: ${words.join(" ")}`]));
		} else pos++;
		if (isO(")")) pos++;
		return parts.length ? parts.join(", ") : P(["toàn bộ bảng", "the whole table"]);
	};
	const orderList = () => {
		const l = [];
		for (;;) {
			let s = addExpr();
			if (isW("DESC")) {
				pos++;
				s += P([" giảm dần", " descending"]);
			} else if (isW("ASC")) {
				pos++;
				s += P([" tăng dần", " ascending"]);
			}
			if (isW("NULLS")) pos += 2;
			l.push(s);
			if (isO(",")) {
				pos++;
				continue;
			}
			break;
		}
		return l.join(", ");
	};
	const callFn = (name) => {
		const NAME = name.toUpperCase();
		const a = argsOf();
		let out;
		if (NAME === "COUNT") {
			const d = a[0]?.startsWith(P(["(các giá trị khác nhau) ", "(distinct) "]));
			out = !a.length || a[0] === "*" ? P(["số dòng", "number of rows"]) : d ? P([`số giá trị khác nhau của ${a[0].replace(/^\([^)]*\) /, "")}`, `number of distinct values of ${a[0].replace(/^\([^)]*\) /, "")}`]) : P([`số ô có giá trị của ${a[0]}`, `number of non-empty cells in ${a[0]}`]);
		} else if (NAME === "CAST") out = a[0] ?? "";
		else if (FN$1[NAME]) {
			let t = P(FN$1[NAME]);
			t = t.replace(/\{all\}/g, a.join(", ")).replace(/\{(\d)(?:\|([^}]*))?\}/g, (_m, k, d) => a[+k] ?? d ?? "");
			t = t.replace(/\[([^[\]]*)\]/g, (_m, inner) => /\{/.test(inner) ? "" : inner);
			out = t.replace(/\[|\]/g, "");
			if (/\{/.test(out)) out = out.replace(/\{\d\}/g, "").replace(/\s+/g, " ");
		} else out = P([`kết quả của hàm ${name}${a.length ? ` với ${a.join(", ")}` : ""}`, `result of the function ${name}${a.length ? ` with ${a.join(", ")}` : ""}`]);
		if (isW("OVER")) {
			pos++;
			const ws = windowSpec();
			out += P([`, tính trên ${ws}`, `, computed over ${ws}`]);
		}
		if (isW("FILTER")) {
			pos++;
			if (isO("(")) {
				pos++;
				if (isW("WHERE")) pos++;
				const c = orExpr();
				if (isO(")")) pos++;
				out += P([`, chỉ với dòng thỏa ${c}`, `, only for rows where ${c}`]);
			}
		}
		return out;
	};
	const caseExpr = () => {
		const branches = [];
		let base = "";
		if (!isW("WHEN")) base = addExpr();
		let other = "";
		while (isW("WHEN")) {
			pos++;
			const c = orExpr();
			if (isW("THEN")) pos++;
			const r = addExpr();
			branches.push(base ? P([`nếu bằng ${c} thì ${r}`, `if it equals ${c} then ${r}`]) : P([`nếu ${c} thì ${r}`, `if ${c} then ${r}`]));
		}
		if (isW("ELSE")) {
			pos++;
			other = addExpr();
		}
		if (isW("END")) pos++;
		return P([`chia trường hợp: ${branches.join("; ")}${other ? `; còn lại thì ${other}` : "; không khớp thì để trống"}`, `cases: ${branches.join("; ")}${other ? `; otherwise ${other}` : "; empty if nothing matches"}`]);
	};
	const subquery = () => {
		const start = pos;
		let depth = 1;
		while (pos < src.length && depth > 0) {
			if (isO("(")) depth++;
			else if (isO(")")) depth--;
			pos++;
		}
		const inner = src.slice(start, pos - 1);
		const saved = {
			src,
			pos
		};
		const text = clauseSummary(inner);
		src = saved.src;
		pos = saved.pos;
		return P([`kết quả của truy vấn con (${text})`, `result of the subquery (${text})`]);
	};
	const atom = () => {
		const t = cur();
		if (!t) return "";
		if (t.k === "n") {
			pos++;
			return t.v;
		}
		if (t.k === "s") {
			pos++;
			return `«${t.v}»`;
		}
		if (t.k === "o") {
			if (t.v === "(") {
				pos++;
				if (isW("SELECT") || isW("WITH")) return subquery();
				const l = [orExpr()];
				while (isO(",")) {
					pos++;
					l.push(orExpr());
				}
				if (isO(")")) pos++;
				return l.length > 1 ? `(${l.join(", ")})` : l[0];
			}
			if (t.v === "*") {
				pos++;
				return P(["mọi cột", "all columns"]);
			}
			if (t.v === "-") {
				pos++;
				return `−${atom()}`;
			}
			pos++;
			return t.v;
		}
		const u = up(t);
		if (u === "CASE") {
			pos++;
			return caseExpr();
		}
		if (u === "CAST" && src[pos + 1]?.v === "(") {
			pos += 2;
			const e = addExpr();
			let ty = "";
			if (isW("AS")) {
				pos++;
				ty = cur()?.v ?? "";
				pos++;
				while (!isO(")") && pos < src.length) {
					if (isO("(")) while (!isO(")")) pos++;
					pos++;
				}
			}
			if (isO(")")) pos++;
			return P([`${e} đổi sang kiểu ${ty}`, `${e} converted to ${ty}`]);
		}
		if (u === "EXTRACT" && src[pos + 1]?.v === "(") {
			pos += 2;
			const part = cur()?.v ?? "";
			pos++;
			if (isW("FROM")) pos++;
			const e = addExpr();
			if (isO(")")) pos++;
			return P([`${part.toLowerCase()} lấy ra từ ${e}`, `the ${part.toLowerCase()} taken from ${e}`]);
		}
		if (u === "INTERVAL") {
			pos++;
			const v = cur();
			pos++;
			const unit = cur()?.k === "w" ? cur().v : "";
			if (unit) pos++;
			return P([`khoảng ${v?.v ?? ""} ${unit.toLowerCase()}`, `an interval of ${v?.v ?? ""} ${unit.toLowerCase()}`]);
		}
		if ((u === "DATE" || u === "TIMESTAMP") && src[pos + 1]?.k === "s") {
			const v = src[pos + 1].v;
			pos += 2;
			return P([`ngày «${v}»`, `the date “${v}”`]);
		}
		if (u === "NULL") {
			pos++;
			return P(["ô trống (NULL)", "an empty value (NULL)"]);
		}
		if (u === "TRUE") {
			pos++;
			return P(["đúng", "true"]);
		}
		if (u === "FALSE") {
			pos++;
			return P(["sai", "false"]);
		}
		if (u === "NOT" && src[pos + 1]?.v?.toUpperCase() === "EXISTS") {
			pos += 2;
			const ea = atom();
			return P([`không tồn tại ${ea}`, `does not exist: ${ea}`]);
		}
		if (u === "EXISTS") {
			pos++;
			const ea = atom();
			return P([`tồn tại ${ea}`, `exists: ${ea}`]);
		}
		pos++;
		if (isO("(")) {
			pos++;
			return callFn(t.v);
		}
		return t.v;
	};
	const postfix = () => {
		let a = atom();
		while (isO("::")) {
			pos++;
			const ty = cur()?.v ?? "";
			pos++;
			a = P([`${a} đổi sang kiểu ${ty}`, `${a} converted to ${ty}`]);
		}
		return a;
	};
	const mulExpr = () => {
		let l = postfix();
		while (cur()?.k === "o" && [
			"*",
			"/",
			"%"
		].includes(cur().v)) {
			const op = cur().v;
			pos++;
			const r = postfix();
			l = `${l} ${P(ARI[op])} ${r}`;
		}
		return l;
	};
	const addExpr = () => {
		let l = mulExpr();
		while (cur()?.k === "o" && [
			"+",
			"-",
			"||"
		].includes(cur().v)) {
			const op = cur().v;
			pos++;
			const r = mulExpr();
			l = `${l} ${P(ARI[op])} ${r}`;
		}
		return l;
	};
	const cmpExpr = () => {
		const l = addExpr();
		let neg = false;
		const save = pos;
		if (isW("NOT") && [
			"LIKE",
			"IN",
			"BETWEEN",
			"ILIKE"
		].includes(up(src[pos + 1]))) {
			neg = true;
			pos++;
		}
		if (isW("IS")) {
			pos++;
			let n2 = false;
			if (isW("NOT")) {
				n2 = true;
				pos++;
			}
			const r = addExpr();
			if (r === P(["ô trống (NULL)", "an empty value (NULL)"])) return n2 ? P([`${l} không trống`, `${l} is not empty`]) : P([`${l} bị trống`, `${l} is empty`]);
			return P([`${l} ${n2 ? "không phải" : "là"} ${r}`, `${l} is ${n2 ? "not " : ""}${r}`]);
		}
		if (isW("LIKE") || isW("ILIKE")) {
			pos++;
			const r = addExpr();
			return P([`${l} ${neg ? "không " : ""}khớp mẫu ${r} (% là chuỗi bất kỳ, _ là một ký tự)`, `${l} ${neg ? "does not match" : "matches"} the pattern ${r} (% = any text, _ = one character)`]);
		}
		if (isW("IN")) {
			pos++;
			const r = atom();
			return P([`${l} ${neg ? "không " : ""}nằm trong ${r}`, `${l} is ${neg ? "not " : ""}in ${r}`]);
		}
		if (isW("BETWEEN")) {
			pos++;
			const a = addExpr();
			if (isW("AND")) pos++;
			const b = addExpr();
			return P([`${l} ${neg ? "không " : ""}nằm từ ${a} đến ${b} (gồm cả hai đầu)`, `${l} is ${neg ? "not " : ""}between ${a} and ${b} (inclusive)`]);
		}
		pos = neg ? save : pos;
		if (cur()?.k === "o" && OPN[cur().v]) {
			const op = cur().v;
			pos++;
			if (isW("ANY") || isW("ALL")) pos++;
			const r = addExpr();
			return `${l} ${P(OPN[op])} ${r}`;
		}
		return l;
	};
	const notExpr = () => {
		if (isW("NOT")) {
			pos++;
			const ne = notExpr();
			return P([`không phải (${ne})`, `not (${ne})`]);
		}
		return cmpExpr();
	};
	const andExpr = () => {
		const l = [notExpr()];
		while (isW("AND")) {
			pos++;
			l.push(notExpr());
		}
		return l.length > 1 ? l.join(P([" và ", " and "])) : l[0];
	};
	const orExpr = () => {
		const l = [andExpr()];
		while (isW("OR")) {
			pos++;
			l.push(andExpr());
		}
		return l.length > 1 ? l.map((x) => / (và|and) /.test(x) ? `(${x})` : x).join(P([" hoặc ", " or "])) : l[0];
	};
	const selectList = () => {
		const items = [];
		let distinct = false;
		if (isW("DISTINCT")) {
			distinct = true;
			pos++;
		}
		for (;;) {
			if (pos >= src.length) break;
			let e = orExpr();
			if (isW("AS")) {
				pos++;
				e += P([` (đặt tên cột là ${cur()?.v})`, ` (named ${cur()?.v})`]);
				pos++;
			} else if (cur()?.k === "w" && !KW_CLAUSE.includes(up(cur())) && !["FROM", "AS"].includes(up(cur()))) {
				e += P([` (đặt tên cột là ${cur().v})`, ` (named ${cur().v})`]);
				pos++;
			}
			items.push(e);
			if (isO(",")) {
				pos++;
				continue;
			}
			break;
		}
		const list = items.join("; ");
		return distinct ? P([`các dòng không trùng của: ${list}`, `distinct rows of: ${list}`]) : list;
	};
	const tableRef = () => {
		let name;
		if (isO("(")) {
			pos++;
			name = isW("SELECT") || isW("WITH") ? subquery() : "(…)";
		} else {
			name = cur()?.v ?? "";
			pos++;
		}
		if (isW("AS")) pos++;
		if (cur()?.k === "w" && !KW_CLAUSE.includes(up(cur())) && up(cur()) !== "AS") {
			name += P([` (gọi tắt ${cur().v})`, ` (alias ${cur().v})`]);
			pos++;
		}
		return name;
	};
	function clauseSummary(tokens) {
		const saved = {
			src,
			pos
		};
		src = tokens;
		pos = 0;
		const parts = [];
		while (pos < src.length) {
			const r = oneClause();
			if (r) parts.push(r.text);
			else pos++;
		}
		src = saved.src;
		pos = saved.pos;
		return parts.join("; ");
	}
	let dml = false;
	function oneClause() {
		const t = cur();
		if (!t) return null;
		const start = pos;
		const u = up(t);
		if (t.k === "o" && (t.v === ";" || t.v === "." || t.v === "…")) {
			pos++;
			return null;
		}
		if (u === "WITH") {
			pos++;
			const names = [];
			for (;;) {
				const nm = cur()?.v;
				pos++;
				if (isW("AS")) pos++;
				if (isO("(")) {
					pos++;
					const q = subquery();
					names.push(`${nm}: ${q.replace(/^[^(]*/, "")}`);
				}
				if (isO(",")) {
					pos++;
					continue;
				}
				break;
			}
			return {
				text: P([`Đặt tên cho các bảng tạm để dùng ngay bên dưới: ${names.map((n2) => n2.split(":")[0]).join(", ")}`, `Name temporary tables for use below: ${names.map((n2) => n2.split(":")[0]).join(", ")}`]),
				start
			};
		}
		if (u === "SELECT") {
			pos++;
			const sl = selectList();
			return {
				text: P([`Lấy ra: ${sl}`, `Select: ${sl}`]),
				start
			};
		}
		if (u === "FROM") {
			pos++;
			const tn = tableRef();
			const more = [];
			while (isO(",")) {
				pos++;
				more.push(tableRef());
			}
			return {
				text: P([`Từ bảng ${tn}${more.length ? ", " + more.join(", ") : ""}`, `From the table ${tn}${more.length ? ", " + more.join(", ") : ""}`]),
				start
			};
		}
		if (u === "WHERE") {
			pos++;
			const we = orExpr();
			return {
				text: dml ? P([`Chỉ áp dụng cho các dòng thỏa: ${we}`, `Apply only to rows where: ${we}`]) : P([`Chỉ giữ các dòng thỏa: ${we}`, `Keep only rows where: ${we}`]),
				start
			};
		}
		if (u === "GROUP") {
			pos += 2;
			const l = [];
			for (;;) {
				l.push(addExpr());
				if (isO(",")) {
					pos++;
					continue;
				}
				break;
			}
			return {
				text: P([`Gom các dòng thành nhóm theo ${l.join(", ")}; mỗi nhóm thành một dòng kết quả`, `Group rows by ${l.join(", ")}; each group becomes one result row`]),
				start
			};
		}
		if (u === "HAVING") {
			pos++;
			const he = orExpr();
			return {
				text: P([`Chỉ giữ các nhóm thỏa: ${he}`, `Keep only groups where: ${he}`]),
				start
			};
		}
		if (u === "ORDER") {
			pos += 2;
			const ol = orderList();
			return {
				text: P([`Sắp xếp kết quả theo ${ol}`, `Sort the result by ${ol}`]),
				start
			};
		}
		if (u === "LIMIT") {
			pos++;
			const n = cur()?.v;
			pos++;
			return {
				text: P([`Chỉ lấy ${n} dòng đầu`, `Take only the first ${n} rows`]),
				start
			};
		}
		if (u === "OFFSET") {
			pos++;
			const n = cur()?.v;
			pos++;
			return {
				text: P([`Bỏ qua ${n} dòng đầu`, `Skip the first ${n} rows`]),
				start
			};
		}
		if (u === "UNION" || u === "INTERSECT" || u === "EXCEPT") {
			pos++;
			let all = false;
			if (isW("ALL")) {
				all = true;
				pos++;
			}
			return {
				text: u === "UNION" ? all ? P(["Nối thêm các dòng của truy vấn sau (giữ cả dòng trùng)", "Stack the rows of the next query below (keeping duplicates)"]) : P(["Nối thêm các dòng của truy vấn sau (bỏ dòng trùng)", "Stack the rows of the next query below (dropping duplicates)"]) : u === "INTERSECT" ? P(["Chỉ giữ các dòng có ở cả hai truy vấn", "Keep only rows found in both queries"]) : P(["Giữ các dòng của truy vấn trên mà truy vấn sau không có", "Keep rows of the query above that the next one lacks"]),
				start
			};
		}
		if (u === "WINDOW") {
			pos++;
			const nm = cur()?.v;
			pos += 2;
			const w = windowSpec();
			return {
				text: P([`Đặt tên cửa sổ ${nm}: ${w}`, `Name the window ${nm}: ${w}`]),
				start
			};
		}
		if ([
			"JOIN",
			"LEFT",
			"RIGHT",
			"INNER",
			"FULL",
			"CROSS"
		].includes(u)) {
			const kind = u;
			while ([
				"LEFT",
				"RIGHT",
				"INNER",
				"FULL",
				"CROSS",
				"OUTER",
				"JOIN"
			].includes(up(cur()))) {
				if (isW("JOIN")) {
					pos++;
					break;
				}
				pos++;
			}
			const tn = tableRef();
			let cond = "";
			if (isW("ON")) {
				pos++;
				cond = orExpr();
			} else if (isW("USING")) {
				pos++;
				if (isO("(")) {
					pos++;
					const l = [];
					while (!isO(")")) {
						if (!isO(",")) l.push(cur().v);
						pos++;
					}
					pos++;
					cond = P([`cột ${l.join(", ")} giống nhau`, `the column ${l.join(", ")} matches`]);
				}
			}
			const base = P({
				JOIN: ["Nối với bảng {t}, giữ các cặp dòng khớp", "Join the table {t}, keeping matching pairs"],
				INNER: ["Nối với bảng {t}, giữ các cặp dòng khớp", "Join the table {t}, keeping matching pairs"],
				LEFT: ["Nối với bảng {t}, giữ mọi dòng bên trái; dòng không khớp bên phải để trống", "Join the table {t}, keeping every left row; unmatched right rows stay empty"],
				RIGHT: ["Nối với bảng {t}, giữ mọi dòng bên phải; dòng không khớp bên trái để trống", "Join the table {t}, keeping every right row; unmatched left rows stay empty"],
				FULL: ["Nối với bảng {t}, giữ mọi dòng của cả hai bên", "Join the table {t}, keeping every row from both sides"],
				CROSS: ["Ghép mọi dòng với mọi dòng của bảng {t}", "Pair every row with every row of the table {t}"]
			}[kind]).replace("{t}", tn);
			return {
				text: cond ? P([`${base}, khớp khi ${cond}`, `${base}, matching when ${cond}`]) : base,
				start
			};
		}
		if (u === "ON") {
			pos++;
			const oe = orExpr();
			return {
				text: P([`Điều kiện khớp: ${oe}`, `Matching condition: ${oe}`]),
				start
			};
		}
		if (u === "CREATE") {
			pos++;
			const what = up(cur());
			pos++;
			if (what === "TABLE" || what === "VIEW" || what === "INDEX" || what === "UNIQUE" || what === "OR") {
				if (what === "UNIQUE" || what === "OR") while (![
					"TABLE",
					"VIEW",
					"INDEX"
				].includes(up(cur())) && pos < src.length) pos++;
				const kind = what === "UNIQUE" || what === "OR" ? up(cur()) : what;
				if (what === "UNIQUE" || what === "OR") pos++;
				while (isW("IF") || isW("NOT") || isW("EXISTS") || isW("REPLACE")) pos++;
				const nm = cur()?.v;
				pos++;
				if (kind === "INDEX") {
					if (isW("ON")) {
						pos++;
						const tb = cur()?.v;
						pos++;
						let cols = "";
						if (isO("(")) {
							pos++;
							const l = [];
							while (!isO(")") && pos < src.length) {
								if (!isO(",")) l.push(cur().v);
								pos++;
							}
							pos++;
							cols = l.join(", ");
						}
						return {
							text: P([`Tạo chỉ mục ${nm} trên cột ${cols} của bảng ${tb} để tìm nhanh hơn (kết quả không đổi)`, `Create the index ${nm} on column ${cols} of ${tb} so lookups are faster (results do not change)`]),
							start
						};
					}
				}
				if (kind === "VIEW") {
					if (isW("AS")) pos++;
					return {
						text: P([`Tạo view ${nm}: một truy vấn được lưu tên, không sao chép dữ liệu`, `Create the view ${nm}: a saved, named query that does not copy data`]),
						start
					};
				}
				let cols = "";
				if (isO("(")) {
					pos++;
					const l = [];
					let depth = 1;
					let item = [];
					while (pos < src.length && depth > 0) {
						if (isO("(")) depth++;
						else if (isO(")")) {
							depth--;
							if (depth === 0) break;
						}
						if (depth === 1 && isO(",")) {
							l.push(item.join(" "));
							item = [];
							pos++;
							continue;
						}
						item.push(cur().v);
						pos++;
					}
					if (item.length) l.push(item.join(" "));
					pos++;
					cols = l.map((x) => {
						const w = x.split(" ");
						const extra = /PRIMARY KEY/i.test(x) ? P([" (khóa chính: duy nhất, không trống)", " (primary key: unique, never empty)"]) : /NOT NULL/i.test(x) ? P([" (không được trống)", " (cannot be empty)"]) : "";
						return /^(PRIMARY|FOREIGN|UNIQUE|CONSTRAINT)/i.test(w[0]) ? x : `${w[0]} ${P(["kiểu", "type"])} ${w[1] ?? ""}${extra}`;
					}).join("; ");
				}
				if (isW("AS")) {
					pos++;
					return {
						text: P([`Tạo bảng ${nm} từ kết quả của truy vấn sau`, `Create the table ${nm} from the result of the query below`]),
						start
					};
				}
				return {
					text: P([`Tạo bảng ${nm}${cols ? ` gồm các cột: ${cols}` : ""}`, `Create the table ${nm}${cols ? ` with columns: ${cols}` : ""}`]),
					start
				};
			}
		}
		if (u === "ALTER") {
			pos++;
			const rest = [];
			while (pos < src.length && !isO(";")) {
				rest.push(cur().v);
				pos++;
			}
			return {
				text: P([`Sửa khung bảng: ${rest.join(" ")}`, `Change the table frame: ${rest.join(" ")}`]),
				start
			};
		}
		if (u === "DROP") {
			pos++;
			const rest = [];
			while (pos < src.length && !isO(";")) {
				rest.push(cur().v);
				pos++;
			}
			return {
				text: P([`Xóa hẳn: ${rest.join(" ")} (không hoàn tác được)`, `Delete for good: ${rest.join(" ")} (cannot be undone)`]),
				start
			};
		}
		if (u === "INSERT") {
			pos++;
			if (isW("INTO")) pos++;
			const tb = cur()?.v;
			pos++;
			while (pos < src.length && !isO(";")) pos++;
			return {
				text: P([`Thêm dòng mới vào bảng ${tb}`, `Add new rows to the table ${tb}`]),
				start
			};
		}
		if (u === "UPDATE" || u === "DELETE") dml = true;
		if (u === "SELECT") dml = false;
		if (u === "UPDATE") {
			pos++;
			const tb = cur()?.v;
			pos++;
			return {
				text: P([`Sửa dữ liệu trong bảng ${tb}`, `Edit data in the table ${tb}`]),
				start
			};
		}
		if (u === "SET") {
			pos++;
			const l = [];
			for (;;) {
				const c = cur()?.v;
				pos++;
				if (isO("=")) pos++;
				l.push(`${c} = ${addExpr()}`);
				if (isO(",")) {
					pos++;
					continue;
				}
				break;
			}
			return {
				text: P([`Đặt: ${l.join("; ")}`, `Set: ${l.join("; ")}`]),
				start
			};
		}
		if (u === "DELETE") {
			pos++;
			if (isW("FROM")) pos++;
			const tb = cur()?.v;
			pos++;
			return {
				text: P([`Xóa dòng khỏi bảng ${tb}`, `Delete rows from the table ${tb}`]),
				start
			};
		}
		if (u === "USE") {
			pos++;
			const db = cur()?.v;
			pos++;
			return {
				text: P([`Chọn cơ sở dữ liệu ${db} để các câu lệnh sau làm việc trên đó`, `Pick the database ${db} for the statements that follow`]),
				start
			};
		}
		if (u === "CALL") {
			pos++;
			const nm = cur()?.v;
			pos++;
			let a = [];
			if (isO("(")) {
				pos++;
				a = argsOf();
			}
			return {
				text: P([`Gọi thủ tục đã lưu sẵn ${nm}${a.length ? ` với ${a.join(", ")}` : ""}`, `Call the stored procedure ${nm}${a.length ? ` with ${a.join(", ")}` : ""}`]),
				start
			};
		}
		if (u === "FOREIGN") {
			pos += 2;
			let col = "";
			if (isO("(")) {
				pos++;
				col = cur().v;
				pos += 2;
			}
			let ref = "";
			if (isW("REFERENCES")) {
				pos++;
				ref = cur()?.v ?? "";
				pos++;
				let rc = "";
				if (isO("(")) {
					pos++;
					rc = cur().v;
					pos += 2;
				}
				ref = `${ref}${rc ? `(${rc})` : ""}`;
			}
			return {
				text: P([`Khóa ngoại: cột ${col} phải trỏ tới một giá trị có thật trong ${ref}`, `Foreign key: column ${col} must point at a real value in ${ref}`]),
				start
			};
		}
		if (u === "PRIMARY") {
			pos += 2;
			let col = "";
			if (isO("(")) {
				pos++;
				col = cur().v;
				pos += 2;
			}
			return {
				text: P([`Khóa chính: cột ${col} duy nhất và không trống`, `Primary key: column ${col} is unique and never empty`]),
				start
			};
		}
		if (u === "PARTITION") {
			pos += 2;
			const l = addExpr();
			return {
				text: P([`Chia theo ${l}`, `Partition by ${l}`]),
				start
			};
		}
		const e = orExpr();
		if (isW("AS")) {
			pos++;
			pos++;
		}
		if (pos === start) pos++;
		const asWord = "";
		return {
			text: P([`Biểu thức: ${e}${asWord}`, `Expression: ${e}${asWord}`]),
			start
		};
	}
	const rows = [];
	src = toks;
	pos = 0;
	while (pos < src.length) {
		const r = oneClause();
		if (!r) continue;
		const s = src[r.start].s;
		const e = src[Math.max(r.start, pos - 1)].e;
		rows.push({
			code: code.slice(s, e),
			text: r.text.replace(/\s+/g, " ").replace(/[.;]*$/, "") + "."
		});
	}
	if (!rows.length) return null;
	return {
		lang: "SQL",
		summary: (lg === "vi" ? `Đây là một câu truy vấn SQL: máy đọc theo thứ tự FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT, không phải thứ tự bạn viết. ${rows.length > 1 ? `Có ${rows.length} bước, đọc từng bước bên dưới.` : ""}` : `This is a SQL query: the engine reads it as FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT, not in the order you write it. ${rows.length > 1 ? `There are ${rows.length} steps, read below.` : ""}`).trim(),
		rows
	};
}
function lexXl(src) {
	const out = [];
	let i = 0;
	const n = src.length;
	while (i < n) {
		const c = src[i];
		if (/\s/.test(c)) {
			i++;
			continue;
		}
		if (c === "\"") {
			let j = i + 1;
			let v = "";
			while (j < n) {
				if (src[j] === "\"") {
					if (src[j + 1] === "\"") {
						v += "\"";
						j += 2;
						continue;
					}
					break;
				}
				v += src[j++];
			}
			out.push({
				k: "s",
				v
			});
			i = j + 1;
			continue;
		}
		const ref = /^(?:'[^']+'!|[A-Za-z_][\w.]*!)?\$?[A-Za-z]{1,3}\$?[0-9]+(?::\$?[A-Za-z]{1,3}\$?[0-9]+)?(?![\w(])|^(?:'[^']+'!|[A-Za-z_][\w.]*!)?\$?[A-Za-z]{1,3}:\$?[A-Za-z]{1,3}(?![\w(])|^(?:'[^']+'!|[A-Za-z_][\w.]*!)?\$?[0-9]+:\$?[0-9]+(?![\w(])/.exec(src.slice(i));
		if (ref) {
			out.push({
				k: "r",
				v: ref[0]
			});
			i += ref[0].length;
			continue;
		}
		if (/[0-9.]/.test(c) && /^[0-9]*\.?[0-9]+(?:[eE][+-]?[0-9]+)?%?/.test(src.slice(i))) {
			const m = /^[0-9]*\.?[0-9]+(?:[eE][+-]?[0-9]+)?%?/.exec(src.slice(i));
			out.push({
				k: "n",
				v: m[0]
			});
			i += m[0].length;
			continue;
		}
		if (/[A-Za-z_\u0080-￿]/.test(c)) {
			const m = /^[A-Za-z_\u0080-￿][\w.\u0080-￿]*/.exec(src.slice(i));
			out.push({
				k: "w",
				v: m[0]
			});
			i += m[0].length;
			continue;
		}
		const two = src.slice(i, i + 2);
		if ([
			"<=",
			">=",
			"<>"
		].includes(two)) {
			out.push({
				k: "o",
				v: two
			});
			i += 2;
			continue;
		}
		out.push({
			k: "o",
			v: c
		});
		i++;
	}
	return out;
}
var FN = {
	SUM: ["tổng của {all}", "the sum of {all}"],
	AVERAGE: ["trung bình của {all}", "the average of {all}"],
	COUNT: ["số ô chứa số trong {all}", "the number of numeric cells in {all}"],
	COUNTA: ["số ô không trống trong {all}", "the number of non-empty cells in {all}"],
	COUNTBLANK: ["số ô trống trong {0}", "the number of blank cells in {0}"],
	COUNTIF: ["số ô trong {0} thỏa điều kiện {1}", "the number of cells in {0} that meet {1}"],
	COUNTIFS: ["số dòng thỏa đồng thời mọi cặp (vùng, điều kiện): {all}", "the number of rows meeting every (range, condition) pair: {all}"],
	SUMIF: ["tổng của {2|chính vùng đó} cho các dòng mà {0} thỏa {1}", "the sum of {2|that same range} for rows where {0} meets {1}"],
	SUMIFS: ["tổng của {0} cho các dòng thỏa mọi cặp (vùng, điều kiện) còn lại", "the sum of {0} for rows meeting every remaining (range, condition) pair"],
	AVERAGEIF: ["trung bình của {2|chính vùng đó} cho các dòng mà {0} thỏa {1}", "the average of {2|that same range} for rows where {0} meets {1}"],
	MAX: ["giá trị lớn nhất trong {all}", "the largest value in {all}"],
	MIN: ["giá trị nhỏ nhất trong {all}", "the smallest value in {all}"],
	MEDIAN: ["trung vị của {all}", "the median of {all}"],
	STDEV: ["độ lệch chuẩn của {all}", "the standard deviation of {all}"],
	"STDEV.S": ["độ lệch chuẩn mẫu của {all}", "the sample standard deviation of {all}"],
	ROUND: ["{0} làm tròn {1} chữ số thập phân", "{0} rounded to {1} decimals"],
	ROUNDUP: ["{0} làm tròn lên {1} chữ số", "{0} rounded up to {1} decimals"],
	ROUNDDOWN: ["{0} làm tròn xuống {1} chữ số", "{0} rounded down to {1} decimals"],
	ABS: ["giá trị tuyệt đối của {0}", "the absolute value of {0}"],
	SQRT: ["căn bậc hai của {0}", "the square root of {0}"],
	POWER: ["{0} lũy thừa {1}", "{0} to the power {1}"],
	MOD: ["{0} chia lấy dư cho {1}", "{0} modulo {1}"],
	INT: ["phần nguyên của {0}", "the whole part of {0}"],
	IF: ["nếu {0} thì {1}, ngược lại {2|để FALSE}", "if {0} then {1}, otherwise {2|FALSE}"],
	IFERROR: ["{0}; nếu ra lỗi thì thay bằng {1}", "{0}; if it errors, use {1} instead"],
	IFS: ["kiểm tra lần lượt từng cặp (điều kiện, kết quả): {all}", "test each (condition, result) pair in turn: {all}"],
	AND: ["tất cả đều đúng: {all}", "all of these are true: {all}"],
	OR: ["ít nhất một điều kiện đúng: {all}", "at least one of these is true: {all}"],
	NOT: ["ngược lại của {0}", "the opposite of {0}"],
	ISBLANK: ["{0} có đang trống", "whether {0} is blank"],
	ISNUMBER: ["{0} có phải là số", "whether {0} is a number"],
	ISTEXT: ["{0} có phải là chữ", "whether {0} is text"],
	ISERROR: ["{0} có phải là lỗi", "whether {0} is an error"],
	ISNA: ["{0} có phải là lỗi #N/A", "whether {0} is the #N/A error"],
	VLOOKUP: ["tìm {0} ở cột đầu của {1}, rồi lấy giá trị ở cột thứ {2} cùng dòng ({3|mặc định: tìm gần đúng, bảng phải sắp xếp tăng dần})", "look up {0} in the first column of {1}, then take the value in column {2} of that row ({3|default: approximate match, table must be sorted ascending})"],
	HLOOKUP: ["tìm {0} ở hàng đầu của {1}, rồi lấy giá trị ở hàng thứ {2} cùng cột", "look up {0} in the first row of {1}, then take the value in row {2} of that column"],
	XLOOKUP: ["tìm {0} trong {1} rồi lấy giá trị cùng vị trí trong {2}[; không thấy thì {3}]", "find {0} in {1} and return the value at the same position in {2}[; if not found, {3}]"],
	INDEX: ["ô ở hàng thứ {1}[ và cột thứ {2}] của {0}", "the cell at row {1}[ and column {2}] of {0}"],
	MATCH: ["vị trí của {0} trong {1} ({2|mặc định: khớp gần đúng})", "the position of {0} in {1} ({2|default: approximate match})"],
	LEFT: ["{0|ô} lấy {1|1} ký tự đầu", "the first {1|1} character(s) of {0|the cell}"],
	RIGHT: ["{0|ô} lấy {1|1} ký tự cuối", "the last {1|1} character(s) of {0|the cell}"],
	MID: ["{0} lấy {2} ký tự bắt đầu từ ký tự thứ {1}", "{2} characters of {0} starting at character {1}"],
	LEN: ["số ký tự của {0}", "the number of characters in {0}"],
	TRIM: ["{0} bỏ khoảng trắng thừa", "{0} without extra spaces"],
	UPPER: ["{0} viết hoa", "{0} in capitals"],
	LOWER: ["{0} viết thường", "{0} in lowercase"],
	PROPER: ["{0} viết hoa chữ cái đầu mỗi từ", "{0} with each word capitalised"],
	TEXT: ["{0} hiển thị thành chữ theo khuôn {1}", "{0} displayed as text in the format {1}"],
	VALUE: ["{0} đổi từ chữ sang số", "{0} converted from text to a number"],
	CONCATENATE: ["nối chữ: {all}", "joined text: {all}"],
	CONCAT: ["nối chữ: {all}", "joined text: {all}"],
	TEXTJOIN: ["nối chữ bằng dấu {0}: {all}", "join text with {0}: {all}"],
	SUBSTITUTE: ["{0} với {1} được thay bằng {2}", "{0} with {1} replaced by {2}"],
	FIND: ["vị trí của {0} trong {1} (phân biệt hoa thường)", "the position of {0} in {1} (case-sensitive)"],
	SEARCH: ["vị trí của {0} trong {1}", "the position of {0} in {1}"],
	DATE: ["ngày {2}/{1}/{0}", "the date {2}/{1}/{0}"],
	TODAY: ["ngày hôm nay", "today's date"],
	NOW: ["thời điểm hiện tại", "the current date and time"],
	YEAR: ["năm của {0}", "the year of {0}"],
	MONTH: ["tháng của {0}", "the month of {0}"],
	DAY: ["ngày trong tháng của {0}", "the day of the month of {0}"],
	WEEKDAY: ["thứ trong tuần của {0}", "the weekday of {0}"],
	DATEDIF: ["số {2} giữa {0} và {1}", "the number of {2} between {0} and {1}"],
	RANK: ["thứ hạng của {0} trong {1}", "the rank of {0} within {1}"],
	LARGE: ["giá trị lớn thứ {1} của {0}", "the {1}th largest value in {0}"],
	SMALL: ["giá trị nhỏ thứ {1} của {0}", "the {1}th smallest value in {0}"],
	SUMPRODUCT: ["tổng các tích nhân từng cặp ô của {all}", "the sum of the products of each pair of cells in {all}"],
	CORREL: ["hệ số tương quan giữa {0} và {1}", "the correlation between {0} and {1}"],
	SLOPE: ["độ dốc đường hồi quy của {0} theo {1}", "the regression slope of {0} on {1}"],
	INTERCEPT: ["hệ số chặn đường hồi quy của {0} theo {1}", "the regression intercept of {0} on {1}"],
	RAND: ["số ngẫu nhiên từ 0 đến 1", "a random number from 0 to 1"],
	ROW: ["số dòng của {0|ô hiện tại}", "the row number of {0|the current cell}"],
	COLUMN: ["số cột của {0|ô hiện tại}", "the column number of {0|the current cell}"],
	OFFSET: ["vùng dịch từ {0} xuống {1} dòng, sang {2} cột", "the range shifted from {0} by {1} rows and {2} columns"],
	INDIRECT: ["vùng có địa chỉ ghi trong {0}", "the range whose address is written in {0}"],
	FILTER: ["các dòng của {0} thỏa {1}", "the rows of {0} that meet {1}"],
	UNIQUE: ["các giá trị khác nhau của {0}", "the distinct values of {0}"],
	SORT: ["{0} đã sắp xếp", "{0} sorted"],
	DIVIDE: ["{0} chia {1}", "{0} divided by {1}"],
	COUNTROWS: ["số dòng của bảng {0}", "the number of rows in the table {0}"],
	DISTINCTCOUNT: ["số giá trị khác nhau của {0}", "the number of distinct values of {0}"],
	CALCULATE: ["{0}, tính lại trong bối cảnh đã lọc theo {1}", "{0}, recomputed in the context filtered by {1}"]
};
function explainExcel(code, lg) {
	const i = lg === "vi" ? 0 : 1;
	const P = (t) => t[i];
	let src = [];
	let pos = 0;
	const cur = () => src[pos];
	const isO = (v) => cur()?.k === "o" && cur().v === v;
	const OPN = {
		"=": ["bằng", "equals"],
		"<>": ["khác", "differs from"],
		">": ["lớn hơn", "is greater than"],
		"<": ["nhỏ hơn", "is less than"],
		">=": ["lớn hơn hoặc bằng", "is at least"],
		"<=": ["nhỏ hơn hoặc bằng", "is at most"]
	};
	const ARI = {
		"+": ["cộng", "plus"],
		"-": ["trừ", "minus"],
		"*": ["nhân", "times"],
		"/": ["chia", "divided by"],
		"^": ["lũy thừa", "to the power"],
		"&": ["nối chữ với", "joined with"]
	};
	const refText = (v) => {
		const bang = v.lastIndexOf("!");
		const sheet = bang >= 0 ? v.slice(0, bang).replace(/'/g, "") : "";
		const r = (bang >= 0 ? v.slice(bang + 1) : v).replace(/\$/g, "");
		const pre = sheet ? P([`sheet ${sheet}, `, `sheet ${sheet}, `]) : "";
		if (/^[A-Za-z]+:[A-Za-z]+$/.test(r)) {
			const [a, b] = r.toUpperCase().split(":");
			return a === b ? `${pre}${P(["cả cột", "whole column"])} ${a}` : `${pre}${P(["các cột", "columns"])} ${a} ${P(["đến", "to"])} ${b}`;
		}
		if (/^[0-9]+:[0-9]+$/.test(r)) return `${pre}${P(["cả dòng", "whole row"])} ${r}`;
		if (r.includes(":")) return `${pre}${P(["vùng", "range"])} ${r.toUpperCase()}`;
		return `${pre}${P(["ô", "cell"])} ${r.toUpperCase()}`;
	};
	const argsOf = () => {
		const out = [];
		if (isO(")")) {
			pos++;
			return out;
		}
		for (;;) {
			if (isO(",") || isO(";")) {
				out.push(P(["(bỏ trống)", "(left out)"]));
				pos++;
				continue;
			}
			const st = pos;
			const piece = cmp();
			out.push(src[st]?.k === "w" && src[st + 1]?.v === "(" ? `(${piece})` : piece);
			if (isO(",") || isO(";")) {
				pos++;
				if (isO(")")) {
					pos++;
					break;
				}
				continue;
			}
			break;
		}
		if (isO(")")) pos++;
		return out;
	};
	const atom = () => {
		const t = cur();
		if (!t) return "";
		pos++;
		if (t.k === "n") return t.v.endsWith("%") ? t.v : t.v;
		if (t.k === "s") return `«${t.v}»`;
		if (t.k === "r") return refText(t.v);
		if (t.k === "o") {
			if (t.v === "(") {
				const e = cmp();
				if (isO(")")) pos++;
				return e;
			}
			if (t.v === "-") return `−${atom()}`;
			if (t.v === "{") {
				const l = [];
				while (!isO("}") && pos < src.length) {
					if (!isO(",") && !isO(";")) l.push(src[pos].v);
					pos++;
				}
				pos++;
				return `{${l.join(", ")}}`;
			}
			return t.v;
		}
		const name = t.v;
		const NAME = name.toUpperCase();
		if (isO("[") && !FN[NAME]) {
			pos++;
			const col = cur()?.v ?? "";
			pos++;
			if (isO("]")) pos++;
			return P([`cột ${col} của bảng ${name}`, `column ${col} of the table ${name}`]);
		}
		if (isO("(")) {
			pos++;
			const a = argsOf();
			const tpl = FN[NAME];
			if (!tpl) return P([`kết quả của hàm ${name}${a.length ? ` với ${a.join(", ")}` : ""}`, `the result of ${name}${a.length ? ` with ${a.join(", ")}` : ""}`]);
			if (NAME === "VLOOKUP" || NAME === "HLOOKUP") {
				if (a[3] === P(["sai", "false"]) || a[3] === "0") a[3] = P(["khớp chính xác", "exact match"]);
				else if (a[3] === P(["đúng", "true"]) || a[3] === "1") a[3] = P(["khớp gần đúng, bảng phải sắp xếp tăng dần", "approximate match, table must be sorted ascending"]);
			}
			if (NAME === "MATCH" && a[2] !== void 0) a[2] = a[2] === "0" ? P(["khớp chính xác", "exact match"]) : a[2] === "1" ? P(["khớp gần đúng: giá trị lớn nhất không vượt quá", "approximate: largest value not above"]) : a[2] === "-1" ? P(["khớp gần đúng: giá trị nhỏ nhất không nhỏ hơn", "approximate: smallest value not below"]) : a[2];
			let s = P(tpl).replace(/\{all\}/g, a.join(", "));
			s = s.replace(/\[([^[\]]*)\]/g, (_m, inner) => {
				let miss = false;
				const r = inner.replace(/\{(\d)(?:\|([^}]*))?\}/g, (_x, k, d) => {
					const v = a[+k];
					if (v !== void 0) return v;
					if (d !== void 0) return d;
					miss = true;
					return "";
				});
				return miss ? "" : r;
			});
			s = s.replace(/\{(\d)(?:\|([^}]*))?\}/g, (_m, k, d) => a[+k] ?? d ?? "");
			return s.replace(/\s+/g, " ").replace(/\s+,/g, ",").trim();
		}
		if (NAME === "TRUE") return P(["đúng", "true"]);
		if (NAME === "FALSE") return P(["sai", "false"]);
		return P([`tên ${name}`, `the name ${name}`]);
	};
	const pct = () => {
		let a = atom();
		while (isO("%")) {
			pos++;
			a += "%";
		}
		return a;
	};
	const pow = () => {
		let l = pct();
		while (isO("^")) {
			pos++;
			l = `${l} ${P(ARI["^"])} ${pct()}`;
		}
		return l;
	};
	const mul = () => {
		let l = pow();
		while (isO("*") || isO("/")) {
			const op = cur().v;
			pos++;
			l = `${l} ${P(ARI[op])} ${pow()}`;
		}
		return l;
	};
	const add = () => {
		let l = mul();
		while (isO("+") || isO("-")) {
			const op = cur().v;
			pos++;
			l = `${l} ${P(ARI[op])} ${mul()}`;
		}
		return l;
	};
	const cat = () => {
		let l = add();
		while (isO("&")) {
			pos++;
			l = `${l} ${P(ARI["&"])} ${add()}`;
		}
		return l;
	};
	const cmp = () => {
		const l = cat();
		if (cur()?.k === "o" && OPN[cur().v]) {
			const op = cur().v;
			pos++;
			return `${l} ${P(OPN[op])} ${cat()}`;
		}
		return l;
	};
	const rows = [];
	const lines = code.replace(/\r/g, "").split("\n");
	for (const raw of lines) {
		if (!raw.trim()) continue;
		const m = /^(.*?)(?:\s+(?:→|->|=>|\/\/)\s*(.*))?$/.exec(raw);
		const body = (m?.[1] ?? raw).trim();
		const note = (m?.[2] ?? "").trim();
		if (!/^=/.test(body) && /^[A-Z][A-Z0-9_.]*\(/.test(body)) {
			src = lexXl(body);
			pos = 0;
			let text2 = "";
			try {
				text2 = cmp();
				if (pos < src.length) throw new Error("rest");
			} catch {
				text2 = "";
			}
			if (text2) {
				rows.push({
					code: raw,
					text: P([`Tính ra ${text2}${note ? `; kết quả mẫu ${note}` : ""}.`, `Computes ${text2}${note ? `; sample result ${note}` : ""}.`])
				});
				continue;
			}
		}
		if (!/^=/.test(body)) {
			if (/^[A-Za-zÀ-ỹ0-9'"].*/.test(body) && !body.includes("(")) rows.push({
				code: raw,
				text: P([`Giá trị bạn gõ vào ô: ${body}${note ? ` (${note})` : ""}.`, `A value you type into a cell: ${body}${note ? ` (${note})` : ""}.`])
			});
			else rows.push({
				code: raw,
				text: P([`Dòng ghi chú hoặc kết quả: ${body}`, `A note or a result: ${body}`]),
				kind: "note"
			});
			continue;
		}
		src = lexXl(body.slice(1));
		pos = 0;
		let text = "";
		try {
			text = cmp();
			if (pos < src.length) throw new Error("rest");
		} catch {
			rows.push({
				code: raw,
				text: P(["Dòng giải thích bằng chữ, không phải một công thức đầy đủ.", "A line of prose, not a complete formula."]),
				kind: "note"
			});
			continue;
		}
		text.charAt(0).toUpperCase() + text.slice(1);
		rows.push({
			code: raw,
			text: P([`Ô tính ra ${text}${note ? `; kết quả mẫu ${note}` : ""}.`, `The cell shows ${text}${note ? `; sample result ${note}` : ""}.`])
		});
	}
	if (!rows.length) return null;
	return {
		lang: "Excel",
		summary: lg === "vi" ? `Công thức Excel luôn bắt đầu bằng dấu =. Excel tính từ phần trong ngoặc ra ngoài, rồi hiện kết quả trong ô.` : `An Excel formula always starts with =. Excel works from the innermost brackets outwards and shows the result in the cell.`,
		rows
	};
}
/** Lệnh terminal hay gặp (git, pip, cd…). */
function explainShell(code, lg) {
	const vi = lg === "vi";
	const rows = [];
	for (const raw of code.replace(/\r/g, "").split("\n")) {
		if (!raw.trim()) continue;
		const t = raw.replace(/\s+#.*$/, "").trim();
		if (t.startsWith("#")) {
			rows.push({
				code: raw,
				text: vi ? `Ghi chú: ${t.slice(1).trim()}` : `Comment: ${t.slice(1).trim()}`,
				kind: "note"
			});
			continue;
		}
		const said = t.split(/\s*&&\s*/).map((c) => sayShell(c.trim(), vi));
		rows.push({
			code: raw,
			text: said.join(vi ? "; rồi " : "; then ") + "."
		});
	}
	if (!rows.length) return null;
	return {
		lang: "Shell",
		summary: vi ? "Các lệnh gõ trong cửa sổ dòng lệnh (terminal), chạy lần lượt từ trên xuống." : "Commands typed in the terminal, run one after another.",
		rows
	};
}
function sayShell(c, vi) {
	const w = c.split(/\s+/);
	const a = w.slice(1);
	const P = (v, e) => vi ? v : e;
	switch (w[0]) {
		case "cd": return P(`Đi vào thư mục ${a[0]}`, `Move into the folder ${a[0]}`);
		case "ls": return P("Liệt kê file trong thư mục hiện tại", "List the files in this folder");
		case "mkdir": return P(`Tạo thư mục ${a[0]}`, `Create the folder ${a[0]}`);
		case "pip":
		case "pip3": return P(`Cài thư viện Python: ${a.slice(1).join(" ")}`, `Install the Python library: ${a.slice(1).join(" ")}`);
		case "python":
		case "python3": return P(`Chạy file Python ${a[0]}`, `Run the Python file ${a[0]}`);
		case "npm":
		case "npx": return P(`Chạy lệnh Node: ${a.join(" ")}`, `Run a Node command: ${a.join(" ")}`);
		case "git": {
			const g = a[0];
			const rest = a.slice(1);
			if (g === "clone") return P(`Tải về máy một bản sao của kho code ${rest[0]}`, `Download a copy of the repository ${rest[0]}`);
			if (g === "init") return P("Biến thư mục này thành một kho git mới", "Turn this folder into a new git repository");
			if (g === "add") return P(`Đánh dấu ${rest.join(" ") === "." ? "mọi thay đổi" : rest.join(" ")} để đưa vào lần lưu kế tiếp`, `Stage ${rest.join(" ") === "." ? "every change" : rest.join(" ")} for the next save`);
			if (g === "commit") {
				const m = /-m\s+["'](.*)["']/.exec(c);
				return P(`Lưu một mốc (commit) các thay đổi đã đánh dấu${m ? `, ghi chú «${m[1]}»` : ""}`, `Save a commit of the staged changes${m ? `, message “${m[1]}”` : ""}`);
			}
			if (g === "push") return P(`Đẩy các commit lên GitHub${rest.length ? ` (${rest.filter((x) => !x.startsWith("-")).join(" ")})` : ""}`, `Push the commits to GitHub${rest.length ? ` (${rest.filter((x) => !x.startsWith("-")).join(" ")})` : ""}`);
			if (g === "pull") return P("Kéo thay đổi mới từ GitHub về", "Pull new changes from GitHub");
			if (g === "checkout" || g === "switch") return rest[0] === "-b" ? P(`Tạo nhánh mới ${rest[1]} rồi chuyển sang nhánh đó`, `Create the branch ${rest[1]} and switch to it`) : P(`Chuyển sang nhánh ${rest[0]}`, `Switch to the branch ${rest[0]}`);
			if (g === "remote") return P(`Khai báo nơi đặt kho từ xa: ${rest.slice(1).join(" ")}`, `Register the remote location: ${rest.slice(1).join(" ")}`);
			if (g === "status") return P("Xem các file nào đã thay đổi", "See which files changed");
			if (g === "branch") return P("Xem hoặc tạo nhánh", "List or create branches");
			if (g === "merge") return P(`Gộp nhánh ${rest[0]} vào nhánh hiện tại`, `Merge ${rest[0]} into the current branch`);
			return P(`Lệnh git ${g}`, `The git command ${g}`);
		}
		default: return P(`Chạy lệnh ${c}`, `Run the command ${c}`);
	}
}
/** Công thức dạng IF … THEN … ELSEIF … END (Tableau, Power BI). Đổi sang CASE rồi nhờ bộ dịch SQL. */
function explainCalc(code, lg) {
	const vi = lg === "vi";
	const rows = [];
	for (const raw of code.replace(/\r/g, "").split("\n")) {
		if (!raw.trim()) continue;
		if (raw.trim().startsWith("//")) {
			rows.push({
				code: raw,
				text: vi ? `Ghi chú: ${raw.trim().replace(/^\/\/\s*/, "")}` : `Comment: ${raw.trim().replace(/^\/\/\s*/, "")}`,
				kind: "note"
			});
			continue;
		}
		const t = explainSql(`SELECT ${raw.replace(/\bELSEIF\b/gi, "WHEN").replace(/^\s*IF\b/i, "CASE WHEN").replace(/\bTHEN\b/gi, "THEN").replace(/\[([^\]]+)\]/g, "$1")}`, lg)?.rows[0]?.text.replace(/^(Lấy ra|Select): /, "") ?? "";
		rows.push({
			code: raw,
			text: t ? vi ? `Cột tính ra: ${t}` : `Calculated field: ${t}` : vi ? "Công thức điều kiện." : "A conditional formula."
		});
	}
	if (!rows.length) return null;
	return {
		lang: "SQL",
		summary: vi ? "Công thức tạo cột mới bằng điều kiện: kiểm tra từ trên xuống, nhánh đúng đầu tiên thắng." : "A formula that builds a new field from conditions: checked top-down, the first true branch wins.",
		rows
	};
}
var SQL_START = /^\s*(SELECT|USE\s+\w+\s*;|CALL\s+\w+\s*\(|WITH|FROM|WHERE|GROUP\s+BY|ORDER\s+BY|HAVING|(?:LEFT|RIGHT|INNER|FULL|CROSS)?\s*JOIN|CREATE|INSERT|UPDATE|DELETE|ALTER|DROP|UNION|LIMIT|CASE|PARTITION\s+BY|FOREIGN\s+KEY|PRIMARY\s+KEY|WINDOW|(?:RANK|DENSE_RANK|ROW_NUMBER|NTILE)\s*\(|(?:SUM|AVG|COUNT|MIN|MAX|LAG|LEAD|FIRST_VALUE|LAST_VALUE)\s*\([^)]*\)\s*OVER|COALESCE\s*\(|DATE_TRUNC\s*\()/i;
var PY_TELL = /(^|\n)\s*(import |from \S+ import |def |print\(|for \w+ in |if .*:\s*$|\w+\s*=\s*[\w.]+\()|\bpd\.|\bnp\.|\bplt\.|\bdf\b/;
function detectLang(code) {
	const body = code.split("\n").filter((l) => l.trim() && !l.trim().startsWith("#") && !l.trim().startsWith("--"));
	if (!body.length) return "Python";
	if (body.every((l) => /^\s*(git|cd|ls|pip|pip3|python|python3|npm|npx|mkdir|cp|mv|rm|curl|conda|source|touch|cat|echo|code|open)\b/.test(l))) return "Shell";
	if (body.some((l) => /^\s*IF\b.*\bTHEN\b/i.test(l)) && !PY_TELL.test(code)) return "Calc";
	if (body.every((l) => /^\s*=/.test(l))) return "Excel";
	if (/^\s*=/.test(body[0])) return "Excel";
	if (body.every((l) => /^\s*[A-Z][A-Z0-9_.]*\(.*\)\s*(→.*)?$/.test(l)) && !body.some((l) => SQL_START.test(l))) return "Excel";
	if (PY_TELL.test(code)) return "Python";
	if (body.some((l) => SQL_START.test(l))) return "SQL";
	return "Python";
}
var cache = /* @__PURE__ */ new Map();
/** Dịch code ra «tiếng người». Trả null nếu chỉ có ghi chú (không có gì để dịch). */
function explainCode(code, lg, hint) {
	if (code.split("\n").every((l) => !l.trim() || /^\s*(--|#|\/\/)/.test(l))) return null;
	const key = `${lg}|${hint ?? ""}|${code}`;
	if (cache.has(key)) return cache.get(key);
	const l = hint === "SQL" || hint === "Excel" || hint === "Python" ? hint : detectLang(code);
	let out = null;
	try {
		out = l === "SQL" ? explainSql(code, lg) : l === "Excel" ? explainExcel(code, lg) : l === "Shell" ? explainShell(code, lg) : l === "Calc" ? explainCalc(code, lg) : explainPython(code, lg);
	} catch {
		out = null;
	}
	cache.set(key, out);
	return out;
}
var ui = {
	vi: {
		open: "Dịch code sang tiếng người",
		close: "Ẩn bản dịch",
		piece: "Mảnh code",
		plain: "Nói bằng tiếng người",
		steps: "Đọc từ trái sang phải",
		lang: {
			Python: "Python",
			SQL: "SQL",
			Excel: "Excel",
			Shell: "Dòng lệnh"
		}
	},
	en: {
		open: "Translate this code into plain language",
		close: "Hide translation",
		piece: "Code",
		plain: "In plain words",
		steps: "Read left to right",
		lang: {
			Python: "Python",
			SQL: "SQL",
			Excel: "Excel",
			Shell: "Terminal"
		}
	}
};
function Explain({ code, lang, hint }) {
	const t = ui[lang];
	const ex = (0, import_react.useMemo)(() => explainCode(code, lang, hint), [
		code,
		lang,
		hint
	]);
	if (!ex) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-2 rounded-xl border border-line bg-paper p-3 text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-widest text-muted",
				children: t.lang[ex.lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 leading-relaxed",
				children: ex.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-3 space-y-3",
				children: ex.rows.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: r.kind === "note" ? "opacity-70" : "",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "overflow-x-auto rounded-lg bg-ink/5 px-2 py-1 text-sm leading-relaxed whitespace-pre-wrap break-words",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: r.code })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 leading-relaxed",
							children: r.text
						}),
						r.steps ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-widest text-muted",
								children: t.steps
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-1 list-decimal space-y-0.5 pl-5 text-muted",
								children: r.steps.map((s, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, k))
							})]
						}) : null
					]
				}, i))
			})
		]
	});
}
/**
* Khối code có nút xổ xuống «Dịch code sang tiếng người».
* `children` là phần hiển thị code gốc (giữ kiểu dáng của từng trang).
*/
function CodeExplain({ code, lang: langProp, hint, children }) {
	const progress = (0, import_react.useSyncExternalStore)(subscribeProgress, getProgress, getServerProgress);
	const lang = langProp ?? progress.lang;
	const [open, setOpen] = (0, import_react.useState)(false);
	const t = ui[lang];
	const can = (0, import_react.useMemo)(() => !!explainCode(code, lang, hint), [
		code,
		lang,
		hint
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [children, can ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"aria-expanded": open,
			className: "mt-1 inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-card px-4 text-sm text-ink",
			onClick: () => setOpen((v) => !v),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				children: open ? "▾" : "▸"
			}), open ? t.close : t.open]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Explain, {
			code,
			lang,
			hint
		}) : null]
	}) : null] });
}
function Tex({ tex, block = false }) {
	const html = katex.renderToString(tex, {
		throwOnError: false,
		displayMode: block
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: block ? "katex-block block overflow-x-auto py-2 text-center" : "inline",
		dangerouslySetInnerHTML: { __html: html }
	});
}
function maybeTex(math) {
	if (/[\\^_{}]/.test(math)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
		tex: math,
		block: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "overflow-x-auto font-mono text-sm",
		children: math
	});
}
//#endregion
export { Tex as n, maybeTex as r, CodeExplain as t };
