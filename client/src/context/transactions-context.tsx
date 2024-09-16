import { Transaction } from "@/types";
import { useUser } from "@clerk/clerk-react";
import { useState, useEffect, useContext } from "react";
import { createContext } from "react";
import { toast } from "sonner";

type TransactionsContextProps = {
  transactions: Transaction[];
  addTransaction: (newTransaction: Transaction) => void;
  deleteTransaction: (transactionId: string) => void;
};

export const TransactionsContext = createContext<
  TransactionsContextProps | undefined
>(undefined);

export const TransactionsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user } = useUser();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async () => {
    if (!user) return;
    try {
      const res = await fetch(
        `http://localhost:3001/transactions/getAllByUserID/${user.id}`
      );
      if (res.ok) {
        const data = await res.json();
        setTransactions(data);
      } else {
        toast("Failed to fetch transactions.");
      }
    } catch (error) {
      toast("Error fetching transactions.");
    }
  };

  const addTransaction = async (newTransaction: Transaction) => {
    try {
      const res = await fetch("http://localhost:3001/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTransaction),
      });
      if (res.ok) {
        toast("Transaction Saved");
        await fetchTransactions();
      } else {
        toast("Failed to save transaction.");
      }
    } catch (error) {
      toast("Error saving transaction.");
    }
  };

  const deleteTransaction = async (transactionId: string) => {
    try {
      const res = await fetch(
        `http://localhost:3001/transactions/${transactionId}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        toast("Transaction deleted");
        await fetchTransactions();
      } else {
        toast("Failed to delete transaction.");
      }
    } catch (error) {
      toast("Error deleting transaction.");
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [user?.id]);

  return (
    <TransactionsContext.Provider
      value={{ transactions, deleteTransaction, addTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransaction = () => {
  const context = useContext<TransactionsContextProps | undefined>(
    TransactionsContext
  );

  if (!context) {
    throw new Error(
      "useTransaction must be used within a TransactionsContextProvider"
    );
  }

  return context;
};
