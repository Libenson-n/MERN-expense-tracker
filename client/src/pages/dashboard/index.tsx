import { useUser } from "@clerk/clerk-react";
import TransactionForm from "./TransactionForm";
import { TransactionTable } from "@/pages/table/index";
import Balance from "./Balance";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import IncomeExpense from "./IncomeExpense";

const Dashboard = () => {
  const { user } = useUser();
  return (
    <main>
      <Card className="flex flex-col mx-auto w-1/2 p-8 mt-20 mb-5">
        <CardHeader>
          <CardTitle>Welcome, {user?.firstName}</CardTitle>
          <Card className="p-2">
            <CardHeader>
              <CardTitle>Balance</CardTitle>
              <Balance />
              <CardDescription>Income / Expenses</CardDescription>
              <IncomeExpense />
            </CardHeader>
          </Card>
        </CardHeader>
        <CardContent>
          <TransactionForm />
        </CardContent>
      </Card>
      <TransactionTable />
    </main>
  );
};

export default Dashboard;
