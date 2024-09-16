import mongoose from "mongoose";

type Transaction = {
  userId: string;
  date: string;
  description: string;
  amount: number;
  category: string;
};

const transactionSchema = new mongoose.Schema<Transaction>({
  userId: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
});

const TransactionModel = mongoose.model<Transaction>(
  "Transactions",
  transactionSchema
);

export default TransactionModel;
