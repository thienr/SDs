"""Emit place.ts, gap.ts, gap-en.ts, and stage3d-beats.ts."""

import json
import re
import sys
from pathlib import Path

ROOT = Path("/workspace")
sys.path.insert(0, str(ROOT / "scripts"))

import gapmod  # noqa: E402
import cards_0  # noqa: E402,F401
import cards_1  # noqa: E402,F401
import cards_2  # noqa: E402,F401
import cards_5  # noqa: E402,F401
import cards_6  # noqa: E402,F401
import cards_7  # noqa: E402,F401

CARDS = gapmod.CARDS

PLACE = {
    "s-0eda968df057": ["infer-intro", "permut", "combin"],
    "s-78be1f86fde9": ["prob-def", "events", "add-rule", "mul-rule", "rv", "dist", "ev", "no-exp"],
    "s-e2a4b734f22d": ["binomial", "cdf"],
    "s-43a2f62f0624": ["pdf", "normal", "zscore"],
    "s-aa0a4ca728fa": ["samples", "samp-dist", "samp-props", "clt", "clt-est", "ci"],
    "s-3945b8a6639a": ["samp-types", "samp-use"],
    "s-52c37081a4e7": ["joint", "bayes", "samp-est"],
    "s-1a04355c0dce": ["ht-rule", "ht-h0", "ht-p", "ht-err"],
    "s-bdb6c198a11d": ["ht-t", "ht-peek"],
    "s-055e2c938765": ["ht-means"],
    "s-bf191945cb55": ["ht-props"],
    "s-2bc86da6cb7b": ["ht-chi", "ht-anova"],
    "s-4aca30a79e79": ["eda-ask", "eda-src", "eda-type"],
    "s-30abbb834f09": ["eda-row", "eda-miss", "eda-out", "eda-scale", "eda-bad"],
    "s-06ab2e196434": ["eda-cat", "eda-ord", "eda-num"],
    "s-64a150366c39": ["eda-r", "eda-cause", "eda-group", "eda-tab", "eda-flip"],
    "s-13466c484198": ["sql-wh", "sql-star", "sql-key"],
    "s-9140fc01ad3e": ["sql-ddl"],
    "s-59c9d48947dd": ["sql-run", "sql-having", "sql-count", "sql-like", "sql-date", "sql-nest"],
    "s-9988f1da2145": ["sql-join", "sql-left", "sql-union"],
    "s-02f03ea9b31c": ["sql-win", "sql-rank", "sql-part", "sql-frame", "sql-lag", "sql-nwin"],
    "s-f0c3fe757f52": ["sql-case", "sql-proc", "sql-cur"],
    "s-01335ce7f2fb": ["sql-cte", "sql-idx"],
    "s-5a02d3b91f99": ["ml-what", "slr-line", "slr-r2", "slr-assume"],
    "s-491343b6244f": ["slr-fit", "slr-resid", "slr-test"],
    "s-dfc8e61a28f6": ["gd-cost", "gd-step", "gd-rate"],
    "s-cf8cdbb55008": ["mlr-why", "mlr-coef", "mlr-vif", "mlr-dummy"],
    "s-6f6b686fdbff": ["mlr-select", "pred-proj"],
    "s-bcac99df0075": ["logit-why", "logit-sig", "logit-odds"],
    "s-66056f52823d": ["logit-many", "logit-spec"],
    "s-e38dfc2089fb": ["logit-cm", "logit-pr", "logit-roc"],
    "s-832d686c8d91": ["logit-who"],
    "s-ceeafb878a93": ["logit-drift"],
    "s-aa20ada45228": ["logit-rest"],
    "s-1ecea9a8a7eb": ["tree-ask", "tree-line"],
    "s-9e1094b7a204": ["tree-gini", "tree-imp"],
    "s-e0117618dd49": ["tree-deep", "tree-num"],
    "s-e68f30305d47": ["clus-why"],
    "s-25c64d440017": ["km-loop", "km-k", "km-start"],
    "s-13524a9d6272": ["hier", "link-how"],
    "s-3d5e46024e3e": ["db-scan", "gmm-soft", "k-mode"],
    "s-ec9f49300c96": ["nlp-tok", "nlp-bow"],
    "s-87b82b9f2736": ["nlp-tfidf", "nlp-stem"],
    "s-fff62f98da40": ["nlp-edit", "nlp-pmi"],
    "s-0d6e6f58bb2d": ["biz-map"],
    "s-81efbc307d52": ["biz-metric"],
    "s-978ab0c66610": ["git-commit", "git-branch"],
    "s-d3c7e1ba6c5a": ["ens-vote", "ens-bag", "rf-col", "ens-oob"],
    "s-6db41977b700": ["imb-trap", "imb-fix", "imb-smote"],
    "s-8796ada314c0": ["bv-bias", "reg-ridge", "reg-lasso", "met-reg"],
    "s-149d07b65b3f": ["fe-num", "fe-cat", "fe-time"],
    "s-6ca1652effc1": ["cv-fold", "cv-grid"],
    "s-e2b3eaf5a379": ["ts-order", "ts-dep", "ts-decomp"],
    "s-d1c5479c2d5b": ["ts-naive", "ts-sma", "ts-ses", "ts-holt", "ts-hw", "ts-mape", "ts-walk"],
    "s-54d23719e925": ["ts-stat", "ts-acf", "ts-ar"],
    "s-b3455ae415b0": ["ts-ma", "ts-arima"],
    "s-26116f2e6a02": ["math-vec", "math-add", "math-dot"],
    "s-88375d722b54": ["math-mat", "math-mul", "math-det", "math-sys", "math-ls"],
    "s-887fae7b45f5": ["math-eig"],
    "s-002003711f5e": ["math-deriv", "math-crit", "math-part", "math-grad", "math-jac", "math-hess", "math-taylor"],
    "s-f1d333a5e293": ["math-p", "math-or", "math-and", "math-perm", "math-comb", "math-disj", "math-kind"],
    "s-a06acd2abcd5": ["ds-type"],
    "s-10a3d21c795d": ["ds-center", "ds-mode"],
    "s-f10bee98eee6": ["ds-q", "ds-pct"],
    "s-828cd45acaa1": ["ds-var", "ds-sd", "ds-range", "ds-mad"],
    "s-f23c36250ce3": ["ds-cov", "ds-corr"],
}

STITCH = {
    "rf-col": ["ens-oob"],
    "imb-fix": ["imb-smote"],
    "math-and": ["math-perm", "math-comb", "math-disj", "math-kind"],
    "ds-q": ["ds-pct"],
    "ds-sd": ["ds-range", "ds-mad"],
    "sql-count": ["sql-like", "sql-date", "sql-nest"],
    "sql-lag": ["sql-nwin"],
    "sql-case": ["sql-proc", "sql-cur"],
}

BROW = {
    "c-779b43bacf62": "C0 · Vào khóa",
    "c-7780a48d5816": "C0 · CRISP",
    "c-1f3e0f37b6e5": "C0 · Cách nghĩ",
    "c-f3c8d7aa3721": "C0 · Excel",
    "c-3365bb99f989": "C1 · Python",
    "c-5ebd125743f2": "C1 · Bài chấm",
    "c-0598c14acf8d": "Toán",
    "c-75c5d36b41f2": "Mô tả",
    "c-cca6e1fa1c5f": "C2 · Bài luyện",
    "c-96d004f30def": "C3 · Bài luyện",
    "c-a0c17afb8849": "C4 · Bài luyện",
    "c-7ffadedb3906": "C5 · Bài luyện",
    "c-7e0b1f4942db": "C6 · Bài luyện",
    "c-cbba2e56c4a9": "C7 · Capstone",
}


def q(value):
    return json.dumps(value, ensure_ascii=False)


def existing_ids():
    found = []
    for name in ["inferential.ts", "c2rest.ts", "ml.ts", "c3more.ts", "c4.ts", "add.ts"]:
        text = (ROOT / "src/data" / name).read_text()
        found.extend(re.findall(r'\n\s+id: "([^"]+)"', text))
    return found


def drill(course, module, session):
    sid = session["id"]
    title = session["title"]
    cid = "d-" + sid[2:]
    eyebrow = BROW.get(course["id"], "Sổ")
    vi_title = "Buổi này không thêm ý mới"
    en_title = "This session adds no new idea"
    vi_why = "Để khỏi học thuộc một bài nộp, một quiz, hoặc một sơ đồ thay vì mở lại ý."
    en_why = "So you don't memorize a submission, a quiz, or a diagram instead of reopening the idea."
    vi_prior = "Ý đã nằm ở phần dạy của khóa này. Buổi này không thêm định nghĩa."
    en_prior = "The idea already lives in the teaching part of this course. This session adds no definition."
    vi_plain = f"«{title}» là bài luyện, bài nộp, sơ đồ, hoặc phần hướng dẫn thao tác. Không có định nghĩa mới."
    en_plain = f"“{title}” is a drill, a submission, a diagram, or a click-path. There is no new definition."
    vi_precise = (
        f"Buổi {title} trong {module['title']} không được viết thành câu hỏi hay thành các bước bấm trong sổ. "
        "Nếu cần làm bài, hãy mở lại các ý của phần dạy cùng khóa. Không có đáp án ở đây."
    )
    en_precise = (
        f"The session {title} in {module['title']} is not turned into questions or click-steps in the notebook. "
        "If you need to do the work, reopen the ideas in the teaching part of the same course. There is no answer here."
    )
    return {
        "id": cid,
        "course": course["id"],
        "sid": sid,
        "video": title,
        "eyebrow": eyebrow,
        "session": title,
        "module": module["title"],
        "title": (vi_title, en_title),
        "why": (vi_why, en_why),
        "prior": (vi_prior, en_prior),
        "a": ("bài luyện", "a drill"),
        "b": ("phần dạy", "the teaching"),
        "na": (
            "Buổi này là bài luyện hoặc bài nộp. Không có định nghĩa mới.",
            "This session is a drill or a submission. There is no new definition.",
        ),
        "nb": (
            "Mở lại phần dạy của khóa. Đừng học thuộc đáp án.",
            "Reopen the teaching part of the course. Don't memorize an answer.",
        ),
        "plain": (vi_plain, en_plain),
        "situation": (
            "Ví dụ: một câu hỏi phỏng vấn, một mindmap, một bài chấm, hoặc các bước cài Git. Chúng kiểm hoặc trỏ đường. Chúng không thêm một ý.",
            "Example: an interview question, a mindmap, a graded piece, or the Git install steps. They check or point. They do not add an idea.",
        ),
        "use": [
            ("Mở các ý của đúng phần trong khóa này.", "Open the ideas of the matching part in this course."),
            ("Đừng chép đáp án vào sổ.", "Don't copy an answer into the notebook."),
            ("Nếu buổi chỉ là tiêu đề, ý nằm ở thẻ dạy, không nằm ở một video không có.", "If the session is only a title, the idea is on the teaching card, not in a video that is not there."),
        ],
        "precise": (vi_precise, en_precise),
        "insight": ("Bài luyện không phải một ý thứ hai.", "A drill is not a second idea."),
        "formula": None,
        "symbols": (),
        "drill": True,
    }


def main():
    by_id = {}
    for card in CARDS:
        if card["id"] in by_id:
            raise SystemExit(f"duplicate card {card['id']}")
        by_id[card["id"]] = card
        PLACE.setdefault(card["sid"], [])
        if card["id"] not in PLACE[card["sid"]]:
            PLACE[card["sid"]].append(card["id"])

    old = existing_ids()
    old_set = set(old)
    if len(old) != len(old_set):
        raise SystemExit("duplicate existing id")

    placed = []
    for sid, ids in PLACE.items():
        placed.extend(ids)
    if len(placed) != len(set(placed)):
        dup = [i for i in placed if placed.count(i) > 1]
        raise SystemExit(f"duplicate placement {set(dup)}")
    missing = [i for i in old if i not in set(placed)]
    extra_old = [i for i in placed if i in old_set]
    if missing:
        raise SystemExit(f"missing existing {missing}")
    unknown = [i for i in placed if i not in old_set and i not in by_id]
    if unknown:
        raise SystemExit(f"unknown placed {unknown}")

    for card in CARDS:
        found = [sid for sid, ids in PLACE.items() if card["id"] in ids]
        if found != [card["sid"]]:
            raise SystemExit(f"{card['id']} sid {card['sid']} but placed in {found}")
        if len(card["symbols"]) != 0:
            pass
        for pair_name in ["title", "why", "plain", "situation", "precise", "insight", "a", "b", "na", "nb"]:
            pair = card[pair_name]
            if pair_name == "why":
                continue
            if not (isinstance(pair, tuple) and len(pair) == 2):
                raise SystemExit(f"{card['id']} bad {pair_name}")
        if card["prior"] is not None and not (isinstance(card["prior"], tuple) and len(card["prior"]) == 2):
            raise SystemExit(f"{card['id']} bad prior")
        for row in card["symbols"]:
            if len(row) != 3:
                raise SystemExit(f"{card['id']} bad symbol")

    raw = json.loads((ROOT / "src/data/course.json").read_text())
    session_ids = set()
    for course in raw["courses"]:
        for module in course["modules"]:
            for session in module["sessions"]:
                session_ids.add(session["id"])
                if session["id"] not in PLACE:
                    card = drill(course, module, session)
                    by_id[card["id"]] = card
                    PLACE[session["id"]] = [card["id"]]
    for sid in list(PLACE):
        if sid not in session_ids:
            raise SystemExit(f"bad sid {sid}")

    # file order of gap cards (new + drills), not existing
    ordered = []
    for course in raw["courses"]:
        for module in course["modules"]:
            for session in module["sessions"]:
                for cid in PLACE[session["id"]]:
                    if cid in by_id:
                        card = by_id[cid]
                        card["module"] = card.get("module") or module["title"]
                        ordered.append(card)

    beats = {
        "x-drill": {
            "a": ["bài luyện", "a drill"],
            "b": ["phần dạy", "the teaching"],
            "noteA": [
                "Buổi này là bài luyện hoặc bài nộp. Không có định nghĩa mới.",
                "This session is a drill or a submission. There is no new definition.",
            ],
            "noteB": [
                "Mở lại phần dạy của khóa. Đừng học thuộc đáp án.",
                "Reopen the teaching part of the course. Don't memorize an answer.",
            ],
        }
    }
    for card in ordered:
        if card.get("drill"):
            card["scene"] = "x-drill"
            continue
        scene = "g-" + card["id"]
        card["scene"] = scene
        beats[scene] = {
            "a": list(card["a"]),
            "b": list(card["b"]),
            "noteA": list(card["na"]),
            "noteB": list(card["nb"]),
        }

    write_place(PLACE)
    write_gap(ordered)
    write_beats(beats)
    print(f"cards {len(CARDS)} drills {sum(1 for c in ordered if c.get('drill'))} gap {len(ordered)} beats {len(beats)} sessions {len(PLACE)}")


def write_place(place):
    lines = [
        "/** Official session id to idea ids, in file order. */",
        "export const sessionConcepts: Record<string, string[]> = {",
    ]
    for sid, ids in place.items():
        inner = ", ".join(q(i) for i in ids)
        lines.append(f"  {q(sid)}: [{inner}],")
    lines.append("};")
    lines.append("")
    lines.append("const conceptSession = new Map<string, string>();")
    lines.append("for (const [sessionId, ids] of Object.entries(sessionConcepts)) {")
    lines.append("  for (const id of ids) conceptSession.set(id, sessionId);")
    lines.append("}")
    lines.append("")
    lines.append("export function sessionOfConcept(id: string) {")
    lines.append("  return conceptSession.get(id) ?? null;")
    lines.append("}")
    lines.append("")
    (ROOT / "src/data/place.ts").write_text("\n".join(lines), encoding="utf-8")


def emit_card(card, lang):
    idx = 0 if lang == "vi" else 1
    prior = "null" if card["prior"] is None else q(card["prior"][idx])
    use = ", ".join(q(pair[idx]) for pair in card["use"])
    if lang == "vi":
        symbols = ", ".join(
            "{ " + f"sym: {q(row[0])}, meaning: {q(row[1])}" + " }" for row in card["symbols"]
        )
    else:
        symbols = ", ".join(q(row[2]) for row in card["symbols"])
    formula = "null" if not card["formula"] else q(card["formula"])
    if lang == "vi":
        return "\n".join([
            "  card({",
            f"    id: {q(card['id'])},",
            f"    session: {q(card['session'])},",
            f"    module: {q(card['module'])},",
            f"    video: {q(card['video'])},",
            f"    title: {q(card['title'][0])},",
            f"    see: {q(see_of(card, 0))},",
            f"    scene: {q(card['scene'])},",
            f"    situation: {q(card['situation'][0])},",
            f"    use: [{use}],",
            f"    plain: {q(card['plain'][0])},",
            f"    precise: {q(card['precise'][0])},",
            f"    formula: {formula},",
            f"    symbols: [{symbols}],",
            "    sim: null,",
            "    widget: null,",
            f"    insight: {q(card['insight'][0])},",
            f"    why: {q(card['why'][0])},",
            f"    prior: {prior},",
            f"    eyebrow: {q(card['eyebrow'])},",
            f"    courseId: {q(card['course'])},",
            "  }),",
        ])
    return "\n".join([
        f"  {q(card['id'])}: {{",
        f"    title: {q(card['title'][1])},",
        f"    why: {q(card['why'][1])},",
        f"    prior: {prior},",
        f"    see: {q(see_of(card, 1))},",
        f"    plain: {q(card['plain'][1])},",
        f"    situation: {q(card['situation'][1])},",
        f"    use: [{use}],",
        f"    precise: {q(card['precise'][1])},",
        f"    insight: {q(card['insight'][1])},",
        f"    symbols: [{symbols}],",
        "  },",
    ])


def see_of(card, idx):
    return card["na"][idx] + " " + card["nb"][idx]


def write_gap(ordered):
    stitch = ",\n".join(f"  {q(k)}: [{', '.join(q(i) for i in v)}]" for k, v in STITCH.items())
    body = "\n".join(emit_card(card, "vi") for card in ordered)
    text = f"""import {{ gapEn }} from "@/data/gap-en";
import type {{ Lang }} from "@/lib/progress";

type Card = {{
  id: string;
  session: string;
  module: string;
  video: string;
  title: string;
  see: string;
  scene: string;
  situation: string;
  use: string[];
  plain: string;
  precise: string;
  formula: string | null;
  symbols: {{ sym: string; meaning: string }}[];
  sim: null;
  widget: null;
  insight: string;
  why: string;
  prior: string | null;
  eyebrow: string;
  courseId: string;
}};

function card(row: Card): Card {{
  return row;
}}

export const gapConcepts: Card[] = [
{body}
];

export type GapConcept = Card;

export const stitchAfter: Record<string, string[]> = {{
{stitch}
}};

const stitched = new Set(Object.values(stitchAfter).flat());

export function getGapConcept(id: string) {{
  return gapConcepts.find((concept) => concept.id === id) ?? null;
}}

export function gapNeighbors(id: string) {{
  const current = getGapConcept(id);
  const chain = current ? gapConcepts.filter((concept) => concept.courseId === current.courseId && !stitched.has(concept.id)) : [];
  const index = chain.findIndex((concept) => concept.id === id);
  return {{
    prev: index > 0 ? chain[index - 1] : null,
    next: index >= 0 && index < chain.length - 1 ? chain[index + 1] : null,
    index,
    total: chain.length,
  }};
}}

export function gapCopy(concept: GapConcept, lang: Lang) {{
  if (lang !== "en") {{
    return {{
      title: concept.title,
      why: concept.why,
      prior: concept.prior,
      see: concept.see,
      plain: concept.plain,
      situation: concept.situation,
      use: concept.use,
      precise: concept.precise,
      insight: concept.insight,
      formula: concept.formula,
      symbols: concept.symbols,
    }};
  }}
  const en = gapEn[concept.id];
  if (!en) return gapCopy(concept, "vi");
  return {{
    title: en.title,
    why: en.why,
    prior: en.prior,
    see: en.see,
    plain: en.plain,
    situation: en.situation,
    use: en.use,
    precise: en.precise,
    insight: en.insight,
    formula: concept.formula,
    symbols: concept.symbols.map((row, index) => ({{ sym: row.sym, meaning: en.symbols[index] ?? row.meaning }})),
  }};
}}
"""
    (ROOT / "src/data/gap.ts").write_text(text, encoding="utf-8")
    en_body = "\n".join(emit_card(card, "en") for card in ordered)
    en = f"""export type GapEn = {{
  title: string;
  why: string;
  prior: string | null;
  see: string;
  plain: string;
  situation: string;
  use: string[];
  precise: string;
  insight: string;
  symbols: string[];
}};

export const gapEn: Record<string, GapEn> = {{
{en_body}
}};
"""
    (ROOT / "src/data/gap-en.ts").write_text(en, encoding="utf-8")


def write_beats(beats):
    lines = [
        "export type WideBeat = {",
        "  a: [string, string];",
        "  b: [string, string];",
        "  noteA: [string, string];",
        "  noteB: [string, string];",
        "};",
        "",
        "export const wideBeats: Record<string, WideBeat> = {",
    ]
    for key, beat in beats.items():
        lines.append(f"  {q(key)}: {{")
        for field in ["a", "b", "noteA", "noteB"]:
            pair = ", ".join(q(part) for part in beat[field])
            lines.append(f"    {field}: [{pair}],")
        lines.append("  },")
    lines.append("};")
    lines.append("")
    (ROOT / "src/components/sims/stage3d-beats.ts").write_text("\n".join(lines), encoding="utf-8")


if __name__ == "__main__":
    main()
