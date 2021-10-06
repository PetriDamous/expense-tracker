import React from "react";

import "./styles/expesnse-item..css";

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Eat dog for breakfest and noon</h2>
        <div className="expense-item__price">$30,00.67</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
