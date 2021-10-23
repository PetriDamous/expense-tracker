import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

/**
 * 1. dispatch to add item action on button
 *
 *
 */

const ProductItem = (props) => {
  const { title, price, description, handleAddToCart } = props;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => handleAddToCart({ title, price })}>
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
