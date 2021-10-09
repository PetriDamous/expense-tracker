import React from "react";
import "./styles/button.css";

const Button = ({ children, ...otherProps }) => {
  return (
    <button className="button" {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
