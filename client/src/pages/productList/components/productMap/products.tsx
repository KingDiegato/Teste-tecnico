import ProductsMock from "../../../../mock/products.json";
import * as ProductsStyle from "./styles";
import { AddToCart } from "./addItemToCart";
import { AddToFavorite } from "./addItemToWishList";

export const Products = () => {
  return (
    <ProductsStyle.ProductContainer>
      {ProductsMock &&
        ProductsMock.products.map((product) => {
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
  );
};
