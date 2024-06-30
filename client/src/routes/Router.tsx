import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Cart } from "../pages/cart";
import { Wishlist } from "../pages/wishlist";
import { ProductList } from "../pages/productList";
import { SingleProduct } from "../pages/singleProduct";
import { NotFound } from "../pages/notFound";
import { Search } from "../pages/search";

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
      <Route path="/search" element={<Search />}>
        <Route path="/search/:query" element={<Search />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
