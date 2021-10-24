import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const isToggle = useSelector((state) => state.ui.isToggle);
  return (
    <Layout>
      {isToggle && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
