import type { OBlock } from "@/data/ov/types";

export const H = (x: string): OBlock => ({ k: "h", x });
export const P = (x: string): OBlock => ({ k: "p", x });
export const UL = (...x: string[]): OBlock => ({ k: "ul", x });
export const DEF = (...x: [string, string][]): OBlock => ({ k: "def", x });
export const QA = (...x: [string, string][]): OBlock => ({ k: "qa", x });
export const GO = (...x: string[]): OBlock => ({ k: "go", x });
export const NOTE = (x: string): OBlock => ({ k: "note", x });
export const CODE = (x: string): OBlock => ({ k: "code", x });
