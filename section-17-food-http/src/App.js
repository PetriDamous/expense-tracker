import { useState } from "react";

import CartProvider from "./store/cart/CartProvider";
import Header from "./components/Layout/header/Header";
import Meals from "./components/Meals/meals/Meals";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import DataSubmit from "./components/DataSubmit/DataSubmit";

function App() {
  const [isCartVisiable, setCartVisiable] = useState(false);
  const [isCheckoutVisiable, setCheckoutVisiable] = useState(false);
  const [isDataSubmitVisiable, setDataSubmitVisiable] = useState(false);

  const handleShowCart = () => setCartVisiable(true);
  const handleHideCart = () => setCartVisiable(false);

  const handleShowCheckout = () => setCheckoutVisiable(true);
  const handleHideCheckout = () => setCheckoutVisiable(false);

  const handleShowDataSubmit = () => setDataSubmitVisiable(true);
  const handleHideDataSubmit = () => setDataSubmitVisiable(false);

  return (
    <CartProvider>
      {isCartVisiable && (
        <Cart
          handleHideCart={handleHideCart}
          handleShowCheckout={handleShowCheckout}
        />
      )}
      {isCheckoutVisiable && (
        <Checkout
          handleHideCheckout={handleHideCheckout}
          handleShowDataSubmit={handleShowDataSubmit}
        />
      )}
      {isDataSubmitVisiable && (
        <DataSubmit handleHideDataSubmit={handleHideDataSubmit} />
      )}
      {/* {true && <DataSubmit handleHideDataSubmit={handleHideDataSubmit} />} */}
      <Header handleShowCart={handleShowCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
