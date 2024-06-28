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
import { toast } from "sonner";

export const AddToFavorite = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const items = useSelector(getFavoriteItemsState);

  const handleWishListState = (product: Product) => {
    if (items.map((item) => item.id).includes(product.id)) {
      dispatch(removeItemFromWishList(product.id));
      toast.warning("Item removido da lista de desejos");

      return;
    }
    dispatch(
      addItemToWishList({
        ...product,
      })
    );
    toast.success("Item adicionado a lista de desejos");
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
