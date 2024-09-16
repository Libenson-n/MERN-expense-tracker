import { Transaction } from "@/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DeleteTransactionBtn from "./DeleteTransactionButton";
import { useTransaction } from "@/context/transactions-context";
import { formatCurrency } from "@/lib/utils";

const TransactionTable = () => {
  const { transactions } = useTransaction();

  return (
    <div className="my-5 w-2/3 mx-auto">
      <Table>
        <TableCaption>Transactions</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions &&
            (transactions as Transaction[]).map((transaction) => (
              <TableRow key={transaction._id}>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>${formatCurrency(transaction.amount)}</TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell>
                  {transaction.date?.toString().slice(0, 10)}
                </TableCell>
                <TableCell className="text-center">
                  <DeleteTransactionBtn
                    transactionId={transaction._id as string}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionTable;
