import { z } from "zod";

export const productUnitSchema = z.object({
  id: z.number().int().positive().optional(),
  unitName: z
    .string()
    .trim()
    .min(1, "Must be at least 1 characters")
    .max(20, "Maximum 20 characters allowed"),
  description: z.string().trim().min(5, "Must be at least 5 characters"),
  status: z.boolean().default(true),
});

export type ProductUnit = z.infer<typeof productUnitSchema>;
export type ProductUnitInput = z.input<typeof productUnitSchema>;
