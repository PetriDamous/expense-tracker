import React from "react";
import "./App.css";

import expensesData from "./data/expense.data";
import Expenses from "./components/expenses/Expenses";

function App() {
  const [expensesArray, setExpenses] = React.useState(expensesData);

  return (
    <>
      <Expenses expensesArray={expensesArray} />
    </>
  );
}

export default App;
