import type { Assignment } from "@/data/assign/types";
import { asg as edaTaxi } from "@/data/assign/eda-taxi";
import { asg as deliveryTime } from "@/data/assign/delivery-time";

export const assignments: Assignment[] = [edaTaxi, deliveryTime];
export const getAssignment = (id: string) => assignments.find((a) => a.id === id);
export const getAssignmentByConcept = (conceptId: string) => assignments.find((a) => a.concepts.includes(conceptId));
