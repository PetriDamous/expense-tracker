import React, { useState } from "react";
import "./styles/expense-form.css";
import Button from "../button/Button";

const ExpenseForm = ({ onSaveExpenseData, toggleFormHandler }) => {
  const [inputValues, setInputValues] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleInputValue = (e) => {
    const { name, value } = e.target;

    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setInputValues((prevState) => {
      return {
        ...prevState,
        title: "",
        amount: "",
        date: "",
      };
    });

    onSaveExpenseData(inputValues);
    toggleFormHandler();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={inputValues.title}
            onChange={handleInputValue}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={inputValues.amount}
            min="0.01"
            step="0.01"
            onChange={handleInputValue}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={inputValues.date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleInputValue}
          />
        </div>
      </div>
      <div className="new-expense__buttons">
        <Button type="button" onClick={toggleFormHandler}>
          Cancel
        </Button>
        <Button type="submit">Add Expense</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
