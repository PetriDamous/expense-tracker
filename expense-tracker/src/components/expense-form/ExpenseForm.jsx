import React, { useState } from "react";
import "./styles/expense-form.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
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
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
