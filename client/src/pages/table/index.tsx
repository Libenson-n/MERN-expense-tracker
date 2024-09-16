import { useTransaction } from "@/context/transactions-context";
import { columns } from "./Columns";
import DataTable from "./DataTable";

export const TransactionTable = () => {
  const { transactions } = useTransaction();
  return (
    <div>
      <DataTable columns={columns} data={transactions} />
    </div>
  );
};
