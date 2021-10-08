import React from "react";
import "./styles/new-expense.css";
import ExpenseForm from "../expense-form/ExpenseForm";

const NewExpense = ({ onUpdateExpenseData }) => {
  const onSaveExpenseData = (newExpenseData) => {
    const newExpense = {
      ...newExpenseData,
      date: new Date(newExpenseData.date),
      id: Math.random().toString(),
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
