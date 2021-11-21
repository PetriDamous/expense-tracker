import React, { useEffect, useContext, useState } from "react";
import CartContext from "../../store/cart/cart-context";

import classes from "./styles/data-submit.module.css";

import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";

const DataSubmit = ({ handleHideDataSubmit }) => {
  const [orderStatus, setOrderStatus] = useState("Submitting order....");

  const cartCxt = useContext(CartContext);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setOrderStatus("Order submitted.");
    }, 5000);

    return () => clearTimeout(timeId);
  }, []);

  return (
    <Modal>
      <div className={classes["data-submit"]}>
        <p>{orderStatus}</p>
        <div className={classes.actions}>
          <Button
            classValue={classes.cancel}
            button={{ onClick: handleHideDataSubmit }}
          >
            Back to cart
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DataSubmit;
