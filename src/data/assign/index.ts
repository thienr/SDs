import type { Assignment } from "@/data/assign/types";
import { asg as edaTaxi } from "@/data/assign/eda-taxi";
import { asg as deliveryTime } from "@/data/assign/delivery-time";
import { asg as employeeRetention } from "@/data/assign/employee-retention";
import { asg as fraudClaim } from "@/data/assign/fraud-claim";
import { asg as sqlPmfby } from "@/data/assign/sql-pmfby";

export const assignments: Assignment[] = [edaTaxi, deliveryTime, employeeRetention, fraudClaim, sqlPmfby];
export const getAssignment = (id: string) => assignments.find((a) => a.id === id);
export const getAssignmentByConcept = (conceptId: string) => assignments.find((a) => a.concepts.includes(conceptId));
