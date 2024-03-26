import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./Components/Header.jsx";
import ExpenseMain from "./Components/Expense/expense_main.jsx";
import RecentTransactions from "./Components/RecentTransactions/RecentTransactions.jsx";

import { SnackbarProvider } from "notistack";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const transactions = JSON.parse(window.localStorage.getItem("expenses"));
    setData(transactions || []);
  }, []);

  const updateTransactions = (updatedExpenses) => {
    // Renamed updateData to updateTransactions
    setData(updatedExpenses);
    window.localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  return (
    <div
      style={{
        paddingLeft: "2rem",
        paddingRight: "2rem",
        paddingBottom: "2rem",
        width: "auto",
      }}
    >
      <Header />
      <SnackbarProvider>
        <ExpenseMain updateData={updateTransactions} />
      </SnackbarProvider>
      <RecentTransactions
        transactions={data}
        updateTransactions={updateTransactions}
      />
    </div>
  );
};

export default App;
