import { pilotWalks, type Walk, type WalkText, type Visual, type S } from "@/data/walk/pilot";
import { c0Walks } from "@/data/walk/c0";

export type { Walk, WalkText, Visual, S };
export const walks: Record<string, Walk> = { ...pilotWalks, ...c0Walks };
