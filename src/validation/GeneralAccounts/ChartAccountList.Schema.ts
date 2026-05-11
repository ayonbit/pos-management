import { z } from "zod";

export const ChartListSchema = z.object({
  id: z.number().int().positive().optional(),
  ChartAccountName: z
    .string()
    .trim()
    .min(3, "Name  is too short")
    .max(20, "Maximum 30 characters allowed"),
  GiAccount: z
    .string()
    .trim()
    .min(3, "Must be at least 3 characters")
    .max(50, "Maximum 50 characters allowed"),
  HeadType: z
    .string()
    .trim()
    .min(3, "Must be at least 3 characters")
    .max(50, "Maximum 50 characters allowed"),

  Status: z.boolean().default(true),
});

export type ChartList = z.infer<typeof ChartListSchema>;
export type ChartListInput = z.input<typeof ChartListSchema>;
// export type ChartListType = z.output<typeof ChartListSchema>;
