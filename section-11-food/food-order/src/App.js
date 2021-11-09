import { useState } from "react";

import CartProvider from "./store/cart/CartProvider";
import Header from "./components/Layout/header/Header";
import Meals from "./components/Meals/meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isCartVisiable, setCartVisiable] = useState(false);

  const handleShowCart = () => setCartVisiable(true);

  const handleHideCart = () => setCartVisiable(false);

  return (
    <CartProvider>
      {isCartVisiable && <Cart handleHideCart={handleHideCart} />}
      <Header handleShowCart={handleShowCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
