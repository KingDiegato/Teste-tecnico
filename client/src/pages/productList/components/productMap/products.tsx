import * as ProductsStyle from "./styles";
import { CategoryFilter } from "../filters/categoryFilter";
import { MinPriceFilter } from "../filters/minPriceFilter";
import { FilterProductsList } from "./filterProductsList";

export const Products = () => {
  return (
    <ProductsStyle.MainContainer>
      <MinPriceFilter />
      <CategoryFilter />
      <ProductsStyle.ProductContainer>
        <ProductsStyle.ItemsSubGrid>
          <FilterProductsList />
        </ProductsStyle.ItemsSubGrid>
      </ProductsStyle.ProductContainer>
    </ProductsStyle.MainContainer>
  );
};
