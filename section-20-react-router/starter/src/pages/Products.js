import React from "react";
import { Link } from "react-router-dom";

const productStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const Products = () => {
  return (
    <section>
      <h1>Products Page</h1>

      <div style={productStyles}>
        {" "}
        <Link to="/products/p1">Product 1</Link>
        <Link to="/products/p2">Product 2</Link>
        <Link to="/products/p3">Product 3</Link>
      </div>
    </section>
  );
};

export default Products;
