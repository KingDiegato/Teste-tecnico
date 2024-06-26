import { useSelector } from "react-redux";
import {
  addItem,
  getCartItemsState,
  removeAll,
  removeItem,
} from "../../../../redux/cart/cartSlice";
import * as ItemsListStyles from "./styles";
import { useAppDispatch } from "../../../../hooks/redux";
import { Product } from "../../../../types/product";

export const ItemsList = () => {
  // useSelector para pegar o estado do carrinho usando a const exportada do cartSlice
  const items = useSelector(getCartItemsState);
  const dispatch = useAppDispatch();

  const handleRemove = (id: Product["id"]) => {
    dispatch(removeItem(id));
  };

  return (
    <ItemsListStyles.Container>
      {items.length === 0 ? (
        <>
          <h2>Carrinho vazio</h2>
          <p>Adicione itens ao carrinho desde a página de produtos</p>
        </>
      ) : (
        items.map((item) => (
          <li key={item.id}>
            {item.title} - R$ {item.price} - Quantidade:{" "}
            <input
              type="number"
              id="item_quantity"
              onChange={() =>
                dispatch(
                  addItem({
                    ...item,
                    quantity: Number(
                      (
                        document.getElementById(
                          "item_quantity"
                        ) as HTMLInputElement
                      ).value
                    ),
                  })
                )
              }
              value={item.quantity}
            />
            <br />
            Total: R${" "}
            {(item.quantity && (item.price * item.quantity).toFixed(2)) ||
              item.price}
            <button type="submit" onClick={() => handleRemove(item.id)}>
              Remover
            </button>
          </li>
        ))
      )}
      <br />
      {items.length > 0 && (
        <p>Total: R$ {items.reduce((acc, item) => acc + item.price, 0)}</p>
      )}
      <button>Finalizar compra</button>
      <button onClick={() => dispatch(removeAll())}>Remover tudo</button>
    </ItemsListStyles.Container>
  );
};
