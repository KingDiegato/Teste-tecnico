import * as ProductsStyle from "./styles";
import { CategoryFilter } from "../filters/categoryFilter";
import { MinPriceFilter } from "../filters/minPriceFilter";
import { useState } from "react";
import { FilterProductsList } from "./filterProductsList";

export const Products = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <ProductsStyle.MainContainer>
      <MinPriceFilter />
      <label>
        <p>Mais populares primeiro</p>
        <input type="checkbox" onChange={() => setActive(!active)} />
      </label>
      <CategoryFilter />
      <ProductsStyle.ProductContainer>
        <ProductsStyle.ItemsSubGrid>
          <FilterProductsList active={active} />
        </ProductsStyle.ItemsSubGrid>
      </ProductsStyle.ProductContainer>
    </ProductsStyle.MainContainer>
  );
};
