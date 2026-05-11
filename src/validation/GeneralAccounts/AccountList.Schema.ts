import { z } from "zod";

export const accountListSchema = z.object({
  id: z.number().int().positive().optional(),
  AccountNo: z
    .string()
    .trim()
    .min(5, "Account number is too short")
    .max(20, "Maximum 30 characters allowed"),
  AccountName: z
    .string()
    .trim()
    .min(3, "Must be at least 3 characters")
    .max(50, "Maximum 50 characters allowed"),
  BankName: z
    .string()
    .trim()
    .min(3, "Must be at least 3 characters")
    .max(50, "Maximum 50 characters allowed"),
  BranchName: z
    .string()
    .trim()
    .min(3, "Must be at least 3 characters")
    .max(50, "Maximum 50 characters allowed"),
  OpeningBalance: z.coerce.number(),
  status: z.boolean().default(true),
  default: z.boolean().default(true),
});

export type AccountList = z.infer<typeof accountListSchema>;
export type AccountListInput = z.input<typeof accountListSchema>;
// export type AccountListType = z.output<typeof accountListSchema>;
