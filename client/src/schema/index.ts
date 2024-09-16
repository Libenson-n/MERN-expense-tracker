import * as z from "zod";

export const TransactionSchema = z.object({
  description: z.string().min(1, {
    message: "Please enter a description.",
  }),
  date: z.date({
    message: "Please pick a date.",
  }),
  amount: z.coerce.number({
    message: "Please enter an amount.",
  }),
  category: z.string({
    message: "Please select a category.",
  }),
});
