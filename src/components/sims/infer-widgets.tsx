import { useState } from "react";
import { Lab, Range } from "@/components/sims/kit";
import type { Lang } from "@/lib/progress";

function t(lang: Lang, vi: string, en: string) {
  return lang === "en" ? en : vi;
}

function fact(n: number) {
  let out = 1;
  for (let i = 2; i <= n; i += 1) out *= i;
  return out;
}

export function CountWidget({ lang }: { lang: Lang }) {
  const [n, setN] = useState(8);
  const [k, setK] = useState(3);
  const perm = fact(n) / fact(n - k);
  const comb = perm / fact(k);
  return (
    <Lab title={t(lang, "Đếm bộ và thứ tự", "Sets and order")} onReset={() => { setN(8); setK(3); }}>
      <Range label={t(lang, "n người có sẵn", "n available")} min={3} max={10} step={1} value={n} display={String(n)} onChange={(value) => { setN(value); if (k > value) setK(value); }} />
      <Range label={t(lang, "k người được chọn", "k chosen")} min={1} max={n} step={1} value={k} display={String(k)} onChange={setK} />
      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl border border-line p-3">
          <p className="text-muted">{t(lang, "Hoán vị P(n,k)", "Permutation P(n,k)")}</p>
          <p className="font-display text-3xl">{perm}</p>
        </div>
        <div className="rounded-xl border border-line p-3">
          <p className="text-muted">{t(lang, "Tổ hợp C(n,k)", "Combination C(n,k)")}</p>
          <p className="font-display text-3xl">{comb}</p>
        </div>
      </div>
      <p className="mt-2 text-sm text-muted">{t(lang, "Ví dụ minh họa. Tổ hợp = hoán vị / k!.", "An example. Combination = permutation / k!.")}</p>
    </Lab>
  );
}

export function AddRuleWidget({ lang }: { lang: Lang }) {
  const [pa, setPa] = useState(0.08);
  const [pb, setPb] = useState(0.4);
  const [joint, setJoint] = useState(0.05);
  const maxJoint = Math.min(pa, pb);
  const used = Math.min(joint, maxJoint);
  const or = pa + pb - used;
  return (
    <Lab title={t(lang, "A hoặc B, trừ phần giao", "A or B, minus the overlap")} onReset={() => { setPa(0.08); setPb(0.4); setJoint(0.05); }}>
      <Range label={t(lang, "P(A) form", "P(A) form")} min={0.02} max={0.3} step={0.01} value={pa} display={pa.toFixed(2)} onChange={setPa} />
      <Range label={t(lang, "P(B) từ GDN", "P(B) from GDN")} min={0.1} max={0.8} step={0.01} value={pb} display={pb.toFixed(2)} onChange={setPb} />
      <Range label={t(lang, "P(A và B)", "P(A and B)")} min={0} max={maxJoint} step={0.01} value={used} display={used.toFixed(2)} onChange={setJoint} />
      <p className="mt-3 font-display text-3xl">{or.toFixed(2)}</p>
      <p className="text-sm text-muted">{t(lang, "P(A hoặc B)", "P(A or B)")} = {pa.toFixed(2)} + {pb.toFixed(2)} − {used.toFixed(2)}. {t(lang, "Ví dụ minh họa.", "An example.")}</p>
    </Lab>
  );
}

export function MulRuleWidget({ lang }: { lang: Lang }) {
  const [pa, setPa] = useState(0.4);
  const [pbGiven, setPbGiven] = useState(0.1);
  const both = pa * pbGiven;
  return (
    <Lab title={t(lang, "Cả hai: nhân xác suất có điều kiện", "Both: multiply the conditional probability")} onReset={() => { setPa(0.4); setPbGiven(0.1); }}>
      <Range label="P(GDN)" min={0.1} max={0.8} step={0.01} value={pa} display={pa.toFixed(2)} onChange={setPa} />
      <Range label="P(form | GDN)" min={0.02} max={0.4} step={0.01} value={pbGiven} display={pbGiven.toFixed(2)} onChange={setPbGiven} />
      <p className="mt-3 font-display text-3xl">{both.toFixed(3)}</p>
      <p className="text-sm text-muted">{t(lang, "P(GDN và form)", "P(GDN and form)")} = {pa.toFixed(2)} × {pbGiven.toFixed(2)}. {t(lang, "Ví dụ minh họa.", "An example.")}</p>
    </Lab>
  );
}

export function ExpectWidget({ lang }: { lang: Lang }) {
  const [p, setP] = useState(0.25);
  return (
    <Lab title={t(lang, "Kỳ vọng của một biến 0/1", "Expectation of a 0/1 variable")} onReset={() => setP(0.25)} onExtreme={() => setP(p > 0.5 ? 0.1 : 0.8)}>
      <Range label="P(X = 1)" min={0.05} max={0.8} step={0.05} value={p} display={p.toFixed(2)} onChange={setP} />
      <p className="mt-3 font-display text-3xl">{p.toFixed(2)}</p>
      <p className="text-sm text-muted">E[X] = 0×{(1 - p).toFixed(2)} + 1×{p.toFixed(2)}. {t(lang, `Trên 100 lead, kỳ vọng khoảng ${Math.round(p * 100)} form. Ví dụ minh họa.`, `Over 100 leads, expect about ${Math.round(p * 100)} forms. An example.`)}</p>
    </Lab>
  );
}

export function BayesWidget({ lang }: { lang: Lang }) {
  const [prior, setPrior] = useState(0.2);
  const [hit, setHit] = useState(0.8);
  const [falseHit, setFalseHit] = useState(0.1);
  const pb = hit * prior + falseHit * (1 - prior);
  const post = pb === 0 ? 0 : (hit * prior) / pb;
  return (
    <Lab title={t(lang, "Cập nhật sau một tín hiệu", "Update after one signal")} onReset={() => { setPrior(0.2); setHit(0.8); setFalseHit(0.1); }}>
      <Range label={t(lang, "Tỷ lệ đúng khách ban đầu", "Starting rate of the right customer")} min={0.05} max={0.6} step={0.05} value={prior} display={prior.toFixed(2)} onChange={setPrior} />
      <Range label={t(lang, "Thấy tín hiệu nếu đúng khách", "See the signal if it is the right customer")} min={0.4} max={0.95} step={0.05} value={hit} display={hit.toFixed(2)} onChange={setHit} />
      <Range label={t(lang, "Thấy tín hiệu nếu không phải", "See the signal if it is not")} min={0.02} max={0.4} step={0.02} value={falseHit} display={falseHit.toFixed(2)} onChange={setFalseHit} />
      <p className="mt-3 font-display text-3xl">{post.toFixed(2)}</p>
      <p className="text-sm text-muted">{t(lang, "Xác suất đúng khách sau tín hiệu. Prior vẫn còn trọng lượng. Ví dụ minh họa.", "Probability it is the right customer after the signal. The prior still has weight. An example.")}</p>
    </Lab>
  );
}

function methodsFor(lang: Lang) {
  return [
    { id: "random", name: t(lang, "Ngẫu nhiên đơn", "Simple random"), say: t(lang, "Mỗi phiên cùng cơ hội. Được phép suy ra nguồn, nếu danh sách nguồn đủ.", "Every session has the same chance. You may infer to the source, if the source list is complete.") },
    { id: "strata", name: t(lang, "Phân tầng", "Stratified"), say: t(lang, "Lấy trong từng kênh. Giữ được GDN, Facebook, TikTok. Đỡ bị một kênh nuốt mẫu.", "Draw inside each channel. You keep GDN, Facebook, TikTok. One channel does not swallow the sample.") },
    { id: "convenience", name: t(lang, "Thuận tiện", "Convenience"), say: t(lang, "Lấy người đã để lại số. Dễ. Không được kết luận về người không gửi form.", "Take people who left a number. Easy. You cannot conclude about people who did not send a form.") },
  ];
}

export function SampleWidget({ lang }: { lang: Lang }) {
  const [id, setId] = useState("random");
  const methods = methodsFor(lang);
  const current = methods.find((method) => method.id === id) ?? methods[0];
  return (
    <Lab title={t(lang, "Cách lấy mẫu đổi câu được nói", "The draw changes what you may say")} onReset={() => setId("random")}>
      <div className="flex flex-wrap gap-2">
        {methods.map((method) => (
          <button key={method.id} type="button" className={`min-h-11 rounded-full px-3 text-sm ${id === method.id ? "bg-accent text-accent-ink" : "border border-line"}`} onClick={() => setId(method.id)}>
            {method.name}
          </button>
        ))}
      </div>
      <p className="mt-3 text-lg leading-relaxed">{current.say}</p>
      <p className="mt-2 text-sm text-muted">{t(lang, "Ví dụ minh họa trên một danh sách phiên.", "An example on a list of sessions.")}</p>
    </Lab>
  );
}

export function InferWidget({ id, lang }: { id: string; lang: Lang }) {
  if (id === "count") return <CountWidget lang={lang} />;
  if (id === "addrule") return <AddRuleWidget lang={lang} />;
  if (id === "mulrule") return <MulRuleWidget lang={lang} />;
  if (id === "expect") return <ExpectWidget lang={lang} />;
  if (id === "bayes") return <BayesWidget lang={lang} />;
  if (id === "sample") return <SampleWidget lang={lang} />;
  return null;
}
