import * as ProductsStyle from "./styles";

import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../hooks/redux";
import { addItem, getCartItemsState } from "../../../../redux/cart/cartSlice";
import { Product } from "../../../../types/product";
import { toast } from "sonner";

export const AddToCart = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const items = useSelector(getCartItemsState);

  const handleAddToCart = (product: Product) => {
    if (items.map((item) => item.id).includes(product.id)) {
      toast.info("Item ja adicionado ao carrinho");
      return;
    }
    dispatch(
      addItem({
        ...product,
        quantity: 1,
      })
    );
    toast.success("Adicionado ao carrinho");
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
