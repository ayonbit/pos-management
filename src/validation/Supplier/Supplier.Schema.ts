import { z } from "zod";

export const SupplierSchema = z.object({
  id: z.number().int().positive().optional(),
  SupplierId: z
    .string()
    .trim()
    .regex(/^SUP-\d{3}$/, "SupplierId must be in the format SUP-001")
    .optional(),
  SupplierName: z
    .string()
    .trim()
    .min(3, "Must be at least 3 characters")
    .max(100, "Maximum 100 characters allowed"),
  company: z
    .string()
    .trim()
    .min(3, "Must be at least 3 characters")
    .max(30, "Maximum 30 characters allowed"),
  Address: z
    .string()
    .trim()
    .min(5, "Must be at least 5 characters")
    .max(150, "Maximum 150 characters allowed")
    .optional()
    .or(z.literal("")),

  Phone: z
    .string()
    .trim()
    .length(11, "Phone number must be exactly 11 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),

  Email: z
    .string()
    .trim()
    .email("Invalid email address")
    .optional()
    .or(z.literal("")),

  Balance: z.coerce.number(),
  DueLimit: z.coerce.number(),
});

export type SupplierInput = z.input<typeof SupplierSchema>;
