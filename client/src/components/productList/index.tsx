import { Link } from "react-router-dom";
import * as ProductListStyle from "./styles";
import { Rating } from "react-simple-star-rating";
import { useSelector } from "react-redux";
import { getSortState } from "../../redux/sort/sortSlice";
import { AddToCart } from "../../pages/productList/components/productMap/addItemToCart";
import { AddToFavorite } from "../../pages/productList/components/productMap/addItemToWishList";
import { Product } from "../../types/product";

export const ProductList = ({ products }: { products: Product[] }) => {
  const filter = useSelector(getSortState);

  const filteredProducts: Product[] = products
    ? products.filter((product) => {
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
      {filteredProducts &&
        filteredProducts.map((product) => {
          return (
            <ProductListStyle.CardStyle key={product.id}>
              <ProductListStyle.ImageContainer>
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
              </ProductListStyle.ImageContainer>
              <ProductListStyle.NameContainer>
                <h2>
                  <Link to={`/product/${product.id}`}>{product.title}</Link>
                </h2>
                <AddToFavorite product={product} />
              </ProductListStyle.NameContainer>
              <p>{product.description}</p>
              <p>R$ - {product.price}</p>
              <div>
                <Rating size={20} readonly initialValue={product.rating} />{" "}
                <span>{product.rating}</span>
              </div>
              <AddToCart product={product} />
            </ProductListStyle.CardStyle>
          );
        })}
    </>
  );
};
