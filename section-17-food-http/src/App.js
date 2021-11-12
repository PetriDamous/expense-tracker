import { useState } from "react";

import CartProvider from "./store/cart/CartProvider";
import Header from "./components/Layout/header/Header";
import Meals from "./components/Meals/meals/Meals";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const [isCartVisiable, setCartVisiable] = useState(false);
  const [isCheckoutVisiable, setCheckoutVisiable] = useState(false);

  const handleShowCart = () => setCartVisiable(true);
  const handleHideCart = () => setCartVisiable(false);

  const handleShowCheckout = () => setCheckoutVisiable(true);
  const handleHideCheckout = () => setCheckoutVisiable(false);

  return (
    <CartProvider>
      {isCartVisiable && (
        <Cart
          handleHideCart={handleHideCart}
          handleShowCheckout={handleShowCheckout}
        />
      )}
      {isCheckoutVisiable && (
        <Checkout handleHideCheckout={handleHideCheckout} />
      )}
      <Header handleShowCart={handleShowCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
