import { z } from "zod";

export const EmployeeSchema = z.object({
  id: z.number().int().positive().optional(),

  employeeId: z
    .string()
    .trim()
    .regex(/^EMP-\d{3}$/, "Employee Id must be in the format EMP-001")
    .optional(),

  employeeNid: z.coerce
    .number()
    .int("NID must be valid")
    .min(10000000, "NID must be at least 8 digits"),

  employeeName: z
    .string()
    .trim()
    .min(3, "Must be at least 3 characters")
    .max(100, "Maximum 100 characters allowed"),

  employeeDesignation: z
    .string()
    .trim()
    .min(3, "Must be at least 3 characters")
    .max(100, "Maximum 100 characters allowed"),

  employeeAddress: z
    .string()
    .trim()
    .min(5, "Must be at least 5 characters")
    .max(150, "Maximum 150 characters allowed")
    .optional()
    .or(z.literal("")),

  employeePhone: z
    .string()
    .trim()
    .length(11, "Phone number must be exactly 11 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),

  employeeEmail: z
    .string()
    .trim()
    .email("Invalid email address")
    .optional()
    .or(z.literal("")),

  employeeJoiningDate: z.coerce.date(),

  employeeSalary: z.coerce.number().positive(),
});

export type EmployeeInput = z.input<typeof EmployeeSchema>;
export type EmployeeData = z.infer<typeof EmployeeSchema>;
