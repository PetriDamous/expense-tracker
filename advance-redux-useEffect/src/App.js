import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNotification } from "./store/ui-slice";

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

    dispatch(
      setNotification({
        isNotification: true,
        status: "pending",
        title: "Sending",
        message: "Sending request.",
      })
    );

    const sendData = async () => {
      const response = await fetch(process.env.REACT_APP_HTTP, {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Shit got fucked up!");
      }

      dispatch(
        setNotification({
          isNotification: true,
          status: "success",
          title: "Sent",
          message: "Request sent",
        })
      );
    };

    sendData().catch((e) => {
      dispatch(
        setNotification({
          isNotification: true,
          status: "error",
          title: "Error",
          message: e.message,
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Layout>
      {isToggle && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
