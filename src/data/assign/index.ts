import type { Assignment } from "@/data/assign/types";
import { asg as edaTaxi } from "@/data/assign/eda-taxi";

export const assignments: Assignment[] = [edaTaxi];
export const getAssignment = (id: string) => assignments.find((a) => a.id === id);
