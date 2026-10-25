import { pyDemos } from "./py";
import { sqlDemos } from "./sql";
import { vizDemos } from "./viz";
import { xlDemos } from "./xl";
import type { Demo } from "./types";

export const demos: Record<string, Demo> = { ...sqlDemos, ...xlDemos, ...pyDemos, ...vizDemos };
