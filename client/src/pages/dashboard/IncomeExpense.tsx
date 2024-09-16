import { useTransaction } from "@/context/transactions-context";
import { formatCurrency } from "@/lib/utils";
import { useEffect, useState } from "react";

const IncomeExpense = () => {
  const { transactions } = useTransaction();
  const [income, setIncome] = useState<number>();
  const [expenses, setExpenses] = useState<number>();

  useEffect(() => {
    const filterIncome = transactions?.filter(
      (transaction) => transaction.amount >= 0
    );
    const incomeArray = filterIncome?.map((e) => e.amount);
    const calculateIncome = incomeArray?.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

    setIncome(calculateIncome);

    const filterExpenses = transactions?.filter(
      (transaction) => transaction.amount < 0
    );
    const expensesArray = filterExpenses?.map((e) => e.amount);
    const calculateExpenses = expensesArray?.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

    setExpenses(calculateExpenses);
  }, [transactions]);

  return (
    <div className="flex gap-3">
      {income && <p className="text-green-500">${formatCurrency(income)}</p>}
      {expenses && <p className="text-red-600">${formatCurrency(expenses)}</p>}
    </div>
  );
};

export default IncomeExpense;
