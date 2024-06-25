import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../hooks/redux";
import { addItem, getCartItemsState } from "../../../../redux/cart/cartSlice";
import { Product } from "../../../../types/product";
import { useState } from "react";

export const AddToCart = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const items = useSelector(getCartItemsState);
  const [itemQty, setItemQty] = useState(2);

  const handleAddToCart = (product: Product) => {
    if (items.map((item) => item.id).includes(product.id)) {
      setItemQty(itemQty + 1);
    }
    dispatch(
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.images[0],
        quantity: items.map((item) => item.id).includes(product.id)
          ? itemQty
          : 1,
      })
    );
  };
  return (
    <button type="submit" onClick={() => handleAddToCart(product)}>
      Adicionar ao carrinho
    </button>
  );
};
