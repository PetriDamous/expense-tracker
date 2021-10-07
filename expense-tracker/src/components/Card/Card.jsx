import React from "react";
import "./styles/card.css";

const Card = ({ children, ...otherProps }) => {
  const { customClasses } = otherProps;

  return (
    <div className={`card ${customClasses}`} {...otherProps}>
      {children}
    </div>
  );
};

export default Card;
