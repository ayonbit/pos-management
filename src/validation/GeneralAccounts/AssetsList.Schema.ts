import { z } from "zod";
export const AssetsListSchema = z.object({
  id: z.number().int().positive().optional(),
  AssetName: z
    .string()
    .trim()
    .min(4, "Account number is too short")
    .max(20, "Maximum 20 characters allowed"),
  Description: z
    .string()
    .trim()
    .min(4, "Must be at least 4 characters")
    .max(50, "Maximum 50 characters allowed"),
  OpeningBalance: z.coerce.number(),
  CurrentBalance: z.coerce.number(),
});

export type AssetsList = z.infer<typeof AssetsListSchema>;
export type AssetsListInput = z.input<typeof AssetsListSchema>;
// export type AssetsListType = z.output<typeof AssetsListSchema>;
