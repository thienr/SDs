import type { Overview } from "@/data/ov/types";
import { ov1 } from "@/data/ov/ov1";
import { ov2 } from "@/data/ov/ov2";
import { ov3 } from "@/data/ov/ov3";
import { ov4 } from "@/data/ov/ov4";
import { ov5 } from "@/data/ov/ov5";
import { ov6 } from "@/data/ov/ov6";

export type { Overview, OBlock } from "@/data/ov/types";

export const overviews: Record<string, Overview> = { ...ov1, ...ov2, ...ov3, ...ov4, ...ov5, ...ov6 };
