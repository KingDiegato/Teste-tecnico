import { Toaster } from "sonner";
import { Products } from "./components/productMap/products";
import * as ProductListStyles from "./styles";

export const ProductList = () => {
  return (
    <ProductListStyles.Container>
      <h1>ProductList</h1>
      <Products />
      <Toaster
        richColors
        position="top-center"
        toastOptions={{
          duration: 10000,
          style: {
            padding: "1rem",
            borderRadius: "0.5rem",
          },
        }}
      />
    </ProductListStyles.Container>
  );
};
