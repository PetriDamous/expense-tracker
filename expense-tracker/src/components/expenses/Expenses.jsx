import React from "react";
import "./styles/expenses.css";
import ExpenseItem from "../expense-item/ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from "../expense-filter/ExpenseFilter";

const Expenses = ({ expensesArray }) => {
  return (
    <Card customClasses="expenses">
      <ExpensesFilter />
      {expensesArray.map(({ id, ...otherProps }) => (
        <ExpenseItem key={id} {...otherProps} />
      ))}
    </Card>
  );
};

export default Expenses;
