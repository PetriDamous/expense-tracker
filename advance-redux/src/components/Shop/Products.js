import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store";
import productsData from "../../data/product-data";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  console.log(items);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productsData.map(({ id, ...otherProps }) => (
          <ProductItem
            key={id}
            handleAddToCart={handleAddToCart}
            {...otherProps}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
