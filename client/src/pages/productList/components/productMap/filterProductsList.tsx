import * as ProductsStyle from "./styles";

import { useSelector } from "react-redux";
import { getSortState } from "../../../../redux/sort/sortSlice";
import { AddToFavorite } from "./addItemToWishList";
import { Rating } from "react-simple-star-rating";
import { AddToCart } from "./addItemToCart";
import { Link } from "react-router-dom";
import { useFetchProducts } from "../../../../hooks/useFetchProducts";
import { Product } from "../../../../types/product";

export const FilterProductsList = () => {
  const { products } = useFetchProducts({
    url: `${import.meta.env.VITE_API_URL}products`,
  });

  const filter = useSelector(getSortState);

  const filteredPRoducts: Product[] = products
    ? products.products.filter((product) => {
        if (filter.category === "all") {
          return product.price >= filter.minPrice;
        }
        return (
          product.category === filter.category &&
          product.price >= filter.minPrice
        );
      })
    : [];

  return (
    <>
      {filteredPRoducts &&
        filteredPRoducts.map((product) => {
          return (
            <ProductsStyle.CardStyle key={product.id}>
              <ProductsStyle.ImageContainer>
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.thumbnail || ""}
                    alt={product.title}
                    width={200}
                    height={200}
                    loading="lazy"
                    decoding="async"
                  />
                </Link>
              </ProductsStyle.ImageContainer>
              <ProductsStyle.NameContainer>
                <h2>
                  <Link to={`/product/${product.id}`}>{product.title}</Link>
                </h2>
                <AddToFavorite product={product} />
              </ProductsStyle.NameContainer>
              <p>{product.description}</p>
              <p>R$ - {product.price}</p>
              <div>
                <Rating size={20} readonly initialValue={product.rating} />{" "}
                <span>{product.rating}</span>
              </div>
              <AddToCart product={product} />
            </ProductsStyle.CardStyle>
          );
        })}
    </>
  );
};
