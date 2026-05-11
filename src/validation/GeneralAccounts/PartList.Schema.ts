import { z } from "zod";

export const PartyListSchema = z.object({
  id: z.number().int().positive().optional(),

  PartyId: z
    .string()
    .trim()
    .regex(/^PTY-\d{3}$/, "PartyId must be in the format PTY-001")
    .optional(),

  PartyName: z
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
});

export type PartyList = z.infer<typeof PartyListSchema>;
export type PartyListInput = z.input<typeof PartyListSchema>;
