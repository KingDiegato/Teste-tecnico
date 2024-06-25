import { Products } from "./components/productMap/products";
import * as ProductListStyles from "./styles";

export const ProductList = () => {
  return (
    <ProductListStyles.Container>
      <h1>ProductList</h1>
      <Products />
    </ProductListStyles.Container>
  );
};
