export type OBlock =
  | { k: "h"; x: string }
  | { k: "p"; x: string }
  | { k: "ul"; x: string[] }
  | { k: "def"; x: [string, string][] }
  | { k: "qa"; x: [string, string][] }
  | { k: "go"; x: string[] }
  | { k: "note"; x: string }
  | { k: "code"; x: string };

export type Overview = { title: string; lead: string; blocks: OBlock[] };
