import { z } from "zod";

export const ConditionsSchema = z.object({
  id: z.number().int().positive().optional(),
  salesConditions: z.string().trim().min(5, "Too short! Min 5 Char"),
});

export type ConditionList = z.infer<typeof ConditionsSchema>;
export type ConditionInput = z.input<typeof ConditionsSchema>;
