import type { Motion } from "@/components/motion/types";
import { m1 } from "@/data/motion/m1";
import { m2 } from "@/data/motion/m2";

export const motions: Record<string, Motion> = { ...m1, ...m2 };
