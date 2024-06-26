import ProductsMock from "../../../../mock/products.json";
import * as ProductsStyle from "./styles";
import { AddToCart } from "./addItemToCart";
import { AddToFavorite } from "./addItemToWishList";
import { CategoryFilter } from "../filters/categoryFilter";
import { useSelector } from "react-redux";
import { getSortState } from "../../../../redux/sort/sortSlice";
import { MinPriceFilter } from "../filters/minPriceFilter";

export const Products = () => {
  const filter = useSelector(getSortState);

  console.log(filter);

  const Products = ProductsMock.products.filter((product) => {
    if (filter.minPrice === 0) {
      return true;
    }
    if (filter.category === "all") {
      return product.price >= filter.minPrice;
    }
    return (
      product.category === filter.category && product.price >= filter.minPrice
    );
  });
  return (
    <>
      <CategoryFilter />
      <MinPriceFilter />
      <ProductsStyle.ProductContainer>
        {Products &&
          Products.map((product) => {
            return (
              <div key={product.id}>
                <div>
                  <h1>{product.title}</h1>
                  <AddToFavorite product={product} />
                  <p>{product.description}</p>
                  <ProductsStyle.ImageContainer>
                    <img
                      src={product.images[0] || ""}
                      alt={product.title}
                      width={200}
                      height={200}
                    />
                  </ProductsStyle.ImageContainer>
                  <p>{product.price}</p>
                  <p>{product.rating}</p>

                  <AddToCart product={product} />
                </div>
              </div>
            );
          })}
      </ProductsStyle.ProductContainer>
    </>
  );
};
