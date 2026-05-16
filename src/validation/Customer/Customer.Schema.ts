import { z } from "zod";

export const CustomerSchema = z.object({
  id: z.number().int().positive().optional(),
  CustomerId: z
    .string()
    .trim()
    .regex(/^CUS-\d{3}$/, "CustomerId must be in the format CUS-001")
    .optional(),

  CustomerName: z
    .string()
    .trim()
    .min(3, "Must be at least 3 characters")
    .max(100, "Maximum 100 characters allowed"),

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
  Action: z.boolean().default(true),
  CustomerCategory: z.string().min(1, "Select a Category"),
});

export type CustomerInput = z.input<typeof CustomerSchema>;
