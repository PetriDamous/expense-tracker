import React from "react";

import "./styles/expense-filter.css";

const ExpensesFilter = ({ onFilterChange, expenseYear }) => {
  const selectHandler = (e) => {
    const { value } = e.target;
    onFilterChange(value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={expenseYear} onChange={selectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
