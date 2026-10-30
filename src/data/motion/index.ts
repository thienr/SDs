import type { Motion } from "@/components/motion/types";
import { m1 } from "@/data/motion/m1";
import { m2 } from "@/data/motion/m2";
import { m3 } from "@/data/motion/m3";
import { m4 } from "@/data/motion/m4";
import { m5 } from "@/data/motion/m5";
import { m6 } from "@/data/motion/m6";

export const motions: Record<string, Motion> = { ...m1, ...m2, ...m3, ...m4, ...m5, ...m6 };
