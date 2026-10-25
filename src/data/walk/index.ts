import { pilotWalks, type Walk, type WalkText, type Visual, type S } from "@/data/walk/pilot";
import { c0Walks } from "@/data/walk/c0";
import { c1Walks } from "@/data/walk/c1";
import { mathWalks } from "@/data/walk/math";
import { dsWalks } from "@/data/walk/ds";
import { c2aWalks } from "@/data/walk/c2a";

export type { Walk, WalkText, Visual, S };
export const walks: Record<string, Walk> = { ...pilotWalks, ...c0Walks, ...c1Walks, ...mathWalks, ...dsWalks, ...c2aWalks };
