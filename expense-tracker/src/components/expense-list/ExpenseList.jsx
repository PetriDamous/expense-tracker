import React from "react";
import "./styles/expense-list.css";
import ExpenseItem from "../expense-item/ExpenseItem";

const ExpenseList = ({ filteredYearArray }) => {
  if (filteredYearArray.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredYearArray.map(({ id, ...otherProps }) => (
        <ExpenseItem key={id} {...otherProps} />
      ))}
    </ul>
  );
};

export default ExpenseList;
