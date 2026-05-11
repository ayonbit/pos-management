import { z } from "zod";

export const productBrandSchema = z.object({
  id: z.number().int().positive().optional(),
  brandName: z
    .string()
    .trim()
    .min(3, "Must be at least 3 characters")
    .max(50, "Maximum 50 characters allowed"),
  brandCode: z
    .string()
    .trim()
    .regex(/^\d{3}$/, "Code must be a 3-digit ex-001"),
  status: z.boolean().default(true),
});

export type ProductBrand = z.infer<typeof productBrandSchema>;
export type ProductBrandInput = z.input<typeof productBrandSchema>;
// export type ProductBrandType = z.output<typeof productBrandSchema>;
