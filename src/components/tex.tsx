import katex from "katex";
import "katex/dist/katex.min.css";

export function Tex({ tex, block = false }: { tex: string; block?: boolean }) {
  const html = katex.renderToString(tex, { throwOnError: false, displayMode: block });
  return (
    <span
      className={block ? "katex-block block overflow-x-auto py-2 text-center" : "inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function maybeTex(math: string) {
  if (/[\\^_{}]/.test(math)) return <Tex tex={math} block />;
  return <p className="overflow-x-auto font-mono text-sm">{math}</p>;
}
