import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/header/Header";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <Header />
      <main>
        {" "}
        <Switch>
          <Route exact path="/">
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>

          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
