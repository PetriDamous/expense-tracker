import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData } from "./store/cart-slice";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

let isInitialRun = true;

function App() {
  const isToggle = useSelector((state) => state.ui.isToggle);
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitialRun) {
      isInitialRun = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Layout>
      {isToggle && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
