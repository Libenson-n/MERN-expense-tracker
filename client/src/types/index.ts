export type Transaction = {
  _id?: string;
  userId?: string;
  date?: Date;
  description: string;
  amount: number;
  category: string;
};
