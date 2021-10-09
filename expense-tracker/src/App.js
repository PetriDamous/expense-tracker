import React from "react";
import "./App.css";

import expensesData from "./data/expense.data";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";

function App() {
  const [expensesArray, setExpenses] = React.useState(expensesData);

  const onUpdateExpenseData = (newExpenseData) => {
    setExpenses((prevState) => [{ ...newExpenseData }, ...prevState]);
  };

  return (
    <div>
      <NewExpense onUpdateExpenseData={onUpdateExpenseData} />
      <Expenses expensesArray={expensesArray} />
    </div>
  );
}

export default App;
