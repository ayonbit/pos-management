import { z } from "zod";

export const productGradeSchema = z.object({
  id: z.number().int().positive().optional(),
  productGrade: z
    .string()
    .trim()
    .min(1, "Must be at least 1 characters")
    .max(10, "Maximum 10 characters allowed"),
  description: z.string().trim().min(5, "Must be at least 5 characters"),
  status: z.boolean().default(true),
});

export type ProductGrade = z.infer<typeof productGradeSchema>;
export type ProductGradeInput = z.input<typeof productGradeSchema>;
export type ProductGradeType = z.output<typeof productGradeSchema>;
