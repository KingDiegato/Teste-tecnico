import { useSelector } from "react-redux";
import {
  getFavoriteItemsState,
  removeItemFromWishList,
} from "../../../../redux/favorite/favoriteSlice";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/redux";
import { Product } from "../../../../types/product";

export const WithItemsList = () => {
  const items = useSelector(getFavoriteItemsState);
  const dispatch = useAppDispatch();

  const handleRemove = (id: Product["id"]) => {
    dispatch(removeItemFromWishList(id));
  };

  return (
    <>
      {items.length === 0 ? (
        <>
          <h2>Lista de desejos vazia</h2>
          <p>Adicione itens na sua lista de desejos</p>
        </>
      ) : (
        items.map((item) => (
          <li key={item.id}>
            <Link to={`/product/${item.id}`}>{item.title}</Link>
            <button onClick={() => handleRemove(item.id)} type="submit">
              Remover
            </button>
          </li>
        ))
      )}
    </>
  );
};
