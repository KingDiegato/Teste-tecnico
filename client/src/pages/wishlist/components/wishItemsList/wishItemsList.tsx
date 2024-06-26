import { useSelector } from "react-redux";
import * as WishListStyles from "./styles";
import {
  getFavoriteItemsState,
  removeItemFromWishList,
} from "../../../../redux/favorite/favoriteSlice";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/redux";
import { Product } from "../../../../types/product";
import { AddToCart } from "../../../productList/components/productMap/addItemToCart";
import { Rating } from "react-simple-star-rating";

export const WishItemsList = () => {
  const products = useSelector(getFavoriteItemsState);
  const dispatch = useAppDispatch();

  const handleRemove = (id: Product["id"]) => {
    dispatch(removeItemFromWishList(id));
  };

  return (
    <WishListStyles.WishListContainer>
      {products.length === 0 ? (
        <>
          <h2>Lista de desejos vazia</h2>
          <p>Adicione itens na sua lista de desejos</p>
        </>
      ) : (
        products.map((product) => (
          <WishListStyles.WishListItem key={product.id}>
            <img
              width={200}
              height={200}
              src={product.thumbnail}
              alt={product.title}
            />
            <div
              id="info"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1rem",
                maxWidth: "300px",
              }}
            >
              <Link to={`/product/${product.id}`}>
                <h2>{product.title}</h2>
              </Link>
              <p>{product.description}</p>
              <AddToCart product={product} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p>Category - {product.category}</p>
                <p>Stock - {product.stock}</p>
              </div>
              <div>
                <Rating initialValue={product.rating} size={20} readonly />
                <span>{product.rating}</span>
                <p>R$ - {product.price}</p>
              </div>
            </div>
            <p style={{ color: product.stock > 0 ? "green" : "red" }}>
              {product.stock > 0 ? <p>Disponível</p> : <p>Indisponível</p>}
            </p>

            <div id="botoeira">
              <button onClick={() => handleRemove(product.id)} type="submit">
                Remover
              </button>
            </div>
          </WishListStyles.WishListItem>
        ))
      )}
    </WishListStyles.WishListContainer>
  );
};
