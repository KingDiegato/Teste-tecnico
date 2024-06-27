import * as ProductsStyle from "./styles";

import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../hooks/redux";
import { addItem, getCartItemsState } from "../../../../redux/cart/cartSlice";
import { Product } from "../../../../types/product";

export const AddToCart = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const items = useSelector(getCartItemsState);

  const handleAddToCart = (product: Product) => {
    dispatch(
      addItem({
        ...product,
        quantity: 1,
      })
    );
  };
  return (
    <ProductsStyle.AddToCart
      type="submit"
      onClick={() => handleAddToCart(product)}
    >
      {items.map((item) => item.id).includes(product.id)
        ? "Adicionado ao carrinho"
        : "Adicionar ao carrinho"}
    </ProductsStyle.AddToCart>
  );
};
