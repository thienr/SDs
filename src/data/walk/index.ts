import { pilotWalks, type Walk, type WalkText } from "@/data/walk/pilot";
import { c0Walks } from "@/data/walk/c0";

export type { Walk, WalkText };
export const walks: Record<string, Walk> = { ...pilotWalks, ...c0Walks };
