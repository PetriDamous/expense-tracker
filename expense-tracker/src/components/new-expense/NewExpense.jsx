import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles/new-expense.css";
import ExpenseForm from "../expense-form/ExpenseForm";

const NewExpense = ({ onUpdateExpenseData }) => {
  const onSaveExpenseData = (newExpenseData) => {
    const newExpense = {
      ...newExpenseData,
      date: new Date(newExpenseData.date),
      id: uuidv4(),
    };

    onUpdateExpenseData(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
    </div>
  );
};

export default NewExpense;
