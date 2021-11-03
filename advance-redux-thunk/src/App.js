import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, fetchCartData } from "./store/cart-slice";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

let isInitialRun = true;

function App() {
  const isToggle = useSelector((state) => state.ui.isToggle);
  const { cartItems, isCartStateChange } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitialRun) {
      isInitialRun = false;
      return;
    }

    console.log("out", isCartStateChange);

    if (isCartStateChange) {
      console.log("in", isCartStateChange);

      dispatch(sendCartData(cartItems));
    }
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <Layout>
      {isToggle && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
