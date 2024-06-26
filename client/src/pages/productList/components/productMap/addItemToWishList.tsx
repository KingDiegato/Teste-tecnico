import * as ProductsStyle from "./styles";
import { GoHeart, GoHeartFill } from "react-icons/go";

import { useSelector } from "react-redux";
import {
  addItemToWishList,
  getFavoriteItemsState,
  removeItemFromWishList,
} from "../../../../redux/favorite/favoriteSlice";
import { useAppDispatch } from "../../../../hooks/redux";
import { Product } from "../../../../types/product";

export const AddToFavorite = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const items = useSelector(getFavoriteItemsState);

  const handleWishListState = (product: Product) => {
    if (items.map((item) => item.id).includes(product.id)) {
      dispatch(removeItemFromWishList(product.id));
      return;
    }
    dispatch(
      addItemToWishList({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.images[0],
      })
    );
  };
  return (
    <ProductsStyle.AddToFavorite
      onClick={() => handleWishListState(product)}
      type="submit"
    >
      {items.map((item) => item.id).includes(product.id) ? (
        <GoHeartFill size={24} />
      ) : (
        <GoHeart size={24} />
      )}
    </ProductsStyle.AddToFavorite>
  );
};
