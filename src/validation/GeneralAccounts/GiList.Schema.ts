import { z } from "zod";

export const giListSchema = z.object({
  id: z.number().int().positive().optional(),
  AccountName: z.string().trim().min(3, "min 3 Letters"),
});

export type GiList = z.infer<typeof giListSchema>;
export type GiListInput = z.input<typeof giListSchema>;
// export type GiListType = z.output<typeof giListSchema>;
