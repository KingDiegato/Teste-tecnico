import ProductsMock from "../../../../mock/products.json";
import * as ProductsStyle from "./styles";

import { useSelector } from "react-redux";
import { getSortState } from "../../../../redux/sort/sortSlice";
import { AddToFavorite } from "./addItemToWishList";
import { Rating } from "react-simple-star-rating";
import { AddToCart } from "./addItemToCart";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const FilterProductsList = ({ active }: { active: boolean }) => {
  const filter = useSelector(getSortState);
  const [initialProduct] = useState(ProductsMock.products);
  const [sortedProducts, setSortedProducts] = useState([...initialProduct]);

  useEffect(() => {
    if (active) {
      const sorted = initialProduct.sort((a, b) => {
        return b.rating - a.rating;
      });
      setSortedProducts(sorted);
    } else {
      setSortedProducts(initialProduct);
    }
  }, [active, initialProduct]);

  const Products = sortedProducts.filter((product) => {
    if (filter.category === "all") {
      return product.price >= filter.minPrice;
    }
    return (
      product.category === filter.category && product.price >= filter.minPrice
    );
  });
  return (
    <>
      {Products.map((product) => {
        return (
          <div key={product.id}>
            <ProductsStyle.CardStyle>
              <ProductsStyle.ImageContainer>
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.images[0] || ""}
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
          </div>
        );
      })}
    </>
  );
};
