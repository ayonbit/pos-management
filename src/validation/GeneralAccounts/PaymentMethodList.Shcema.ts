import { z } from "zod";

export const PaymentListSchema = z.object({
  id: z.number().int().positive().optional(),
  MethodName: z
    .string()
    .trim()
    .min(3, "Must be at least 3 characters")
    .max(20, "Maximum 20 characters allowed"),

  status: z.boolean().default(true),
});

export type PaymentList = z.infer<typeof PaymentListSchema>;
export type PaymentListInput = z.input<typeof PaymentListSchema>;
// export type PaymentListType = z.output<typeof PaymentListSchema>;
