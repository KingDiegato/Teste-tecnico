import { useParams } from "react-router-dom";
import { ProductList } from "../../components/productList";
import { useSearchByCategory } from "../../hooks/useSearchByCategory";
import { NotFound } from "../notFound";
import * as ProductCategoryStyle from "./styles";
import { Toaster } from "sonner";

export const Categories = () => {
  const { category } = useParams();
  console.log(category);
  const { search } = useSearchByCategory({ query: category || "" });
  console.log(search);
  if (search) {
    return (
      <ProductCategoryStyle.ProductContainer>
        <ProductCategoryStyle.ItemsSubGrid>
          <ProductList products={search.products}></ProductList>
          <Toaster
            richColors
            position="top-center"
            toastOptions={{
              style: { padding: "1rem", borderRadius: "0.5rem" },
            }}
          />
        </ProductCategoryStyle.ItemsSubGrid>
      </ProductCategoryStyle.ProductContainer>
    );
  }
  return <NotFound />;
};
