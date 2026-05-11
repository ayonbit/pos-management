import { z } from "zod";

export const LiabilityListSchema = z.object({
  id: z.number().int().positive().optional(),
  LiabilityName: z
    .string()
    .trim()
    .min(3, "Name  is too short")
    .max(20, "Maximum 30 characters allowed"),
  Description: z
    .string()
    .trim()
    .min(5, "Must be at least 5 characters")
    .max(50, "Maximum 50 characters allowed"),
  OpeningBalance: z.coerce.number(),
  CurrentBalance: z.coerce.number(),
});

export type LiabilityList = z.infer<typeof LiabilityListSchema>;
export type LiabilityListInput = z.input<typeof LiabilityListSchema>;
// export type LiabilityListType = z.output<typeof LiabilityListSchema>;
