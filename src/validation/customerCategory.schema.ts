import { z } from "zod";

export const customerCategorySchema = z
  .object({
    id: z.number().int().positive().optional(),

    CusCatName: z
      .string()
      .trim()
      .min(4, "4 characters required")
      .max(50, "Maximum 50 characters allowed"),

    CusDes: z
      .string()
      .trim()
      .min(8, "8 characters required")
      .max(255, "Maximum 255 characters allowed"),

    CusAmount: z.coerce.number().nonnegative("Must be 0 or greater number"),

    CusAmountOf: z.coerce.number().nonnegative("Must be 0 or greater number"),

    CusType: z.enum(["Amount", "Percentage"]),

    CusStatus: z.boolean().default(true),
  })
  .superRefine((data, ctx) => {
    // ✅ Rule 1: Percentage cannot exceed 100
    if (data.CusType === "Percentage" && data.CusAmount > 100) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Percentage cannot exceed 100",
        path: ["CusAmount"],
      });
    }

    // ✅ Rule 2: AmountOf must be <= Amount (only for Amount type)
    if (data.CusType === "Amount" && data.CusAmountOf > data.CusAmount) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Amount Of cannot exceed Amount",
        path: ["CusAmountOf"],
      });
    }
  });

/**
 * ✅ IMPORTANT TYPES
 */

// Raw form input (used in React Hook Form)
export type CustomerCategoryInput = z.input<typeof customerCategorySchema>;

// Parsed/validated output (used for API / DB)
export type CustomerCategoryType = z.output<typeof customerCategorySchema>;
