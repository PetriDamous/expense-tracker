import React from "react";
import "./styles/expesnse-item..css";
import ExpenseDate from "../expense-date/ExpenseDate";
import Card from "../Card/Card";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <Card customClasses="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
