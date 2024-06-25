import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Cart } from "../pages/cart";
import { Wishlist } from "../pages/wishlist";
import { ProductList } from "../pages/productList";
import { SingleProduct } from "../pages/singleProduct";

export const Router = () => {
  return (
    <Routes>
      {/* Se necessário, adicionar rota */}
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/product">
        <Route index element={<ProductList />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Route>
    </Routes>
  );
};
