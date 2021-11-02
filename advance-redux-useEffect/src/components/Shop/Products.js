import productsData from "../../data/product-data";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productsData.map(({ id, ...otherProps }) => (
          <ProductItem key={id} id={id} {...otherProps} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
