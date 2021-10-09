import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles/new-expense.css";
import ExpenseForm from "../expense-form/ExpenseForm";
import Button from "../button/Button";

const NewExpense = ({ onUpdateExpenseData }) => {
  const [isToggleForm, setToggleForm] = useState(false);

  const onSaveExpenseData = (newExpenseData) => {
    const newExpense = {
      ...newExpenseData,
      amount: +newExpenseData.amount,
      date: new Date(newExpenseData.date),
      id: uuidv4(),
    };

    onUpdateExpenseData(newExpense);
  };

  const toggleFormHandler = () => setToggleForm((prevState) => !prevState);

  let newExpenseContet = (
    <Button onClick={toggleFormHandler}>Add Expense</Button>
  );

  if (isToggleForm) {
    newExpenseContet = (
      <ExpenseForm
        toggleFormHandler={toggleFormHandler}
        onSaveExpenseData={onSaveExpenseData}
      />
    );
  }

  return <div className="new-expense">{newExpenseContet}</div>;
};

export default NewExpense;
