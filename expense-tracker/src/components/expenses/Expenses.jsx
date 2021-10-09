import React, { useState } from "react";
import "./styles/expenses.css";
import Card from "../Card/Card";
import ExpensesFilter from "../expense-filter/ExpenseFilter";
import ExpenseList from "../expense-list/ExpenseList";
import ExpencesChart from "../expenses-chart/ExpencesChart";

const Expenses = ({ expensesArray }) => {
  const [expenseYear, setExpenseYear] = useState("2020");

  const filteredYear = (filterValue) => {
    setExpenseYear(filterValue);
  };

  const filteredYearArray = expensesArray.filter(({ date }) =>
    date.toISOString().includes(expenseYear)
  );

  return (
    <Card customClasses="expenses">
      <ExpensesFilter expenseYear={expenseYear} onFilterChange={filteredYear} />
      <ExpencesChart filteredYearArray={filteredYearArray} />
      <ExpenseList filteredYearArray={filteredYearArray} />
    </Card>
  );
};

export default Expenses;
