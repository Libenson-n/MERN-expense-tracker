import { useTransaction } from "@/context/transactions-context";
import { formatCurrency } from "@/lib/utils";
import { useEffect, useState } from "react";

const Balance = () => {
  const { transactions } = useTransaction();
  const [balance, setBalance] = useState<number>();

  useEffect(() => {
    const amountArray = transactions?.map((transaction) => transaction.amount);
    const calculateBalance = amountArray?.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    setBalance(calculateBalance);
  }, [transactions]);

  return <div className="">${formatCurrency(balance as number)}</div>;
};

export default Balance;
