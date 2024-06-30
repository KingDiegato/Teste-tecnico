import { useParams } from "react-router-dom";
import { ProductList } from "../../components/productList";
import { useSearchByCategory } from "../../hooks/useSearchByCategory";
import { NotFound } from "../notFound";
import * as ProductCategoryStyle from "./styles";

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
        </ProductCategoryStyle.ItemsSubGrid>
      </ProductCategoryStyle.ProductContainer>
    );
  }
  return <NotFound />;
};
