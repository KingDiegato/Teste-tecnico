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
import { Link } from "react-router-dom";
import { useId } from "react";
import { toast } from "sonner";

export const ItemsList = () => {
  // useSelector para pegar o estado do carrinho usando a const exportada do cartSlice
  const items = useSelector(getCartItemsState);
  const dispatch = useAppDispatch();
  const qtyId = useId();

  const handleRemove = (id: Product["id"]) => {
    dispatch(removeItem(id));
    toast.error("Item removido do carrinho");
  };

  const handleSum = (id: Product["id"], item: Product) => {
    dispatch(
      addItem({
        ...item,
        quantity: Number(
          (document.getElementById(qtyId + id) as HTMLInputElement).value
        ),
      })
    );
  };

  return (
    <ItemsListStyles.CartContainer>
      {items.length === 0 ? (
        <div style={{ textAlign: "center", width: "200px" }}>
          <h2>Carrinho vazio</h2>
          <p>Adicione itens ao carrinho desde a página de produtos</p>
        </div>
      ) : (
        items.map((item) => (
          <ItemsListStyles.CartItem key={item.id}>
            <img
              width={100}
              height={100}
              src={item.thumbnail || ""}
              alt={item.title}
            />
            <Link to={`/product/${item.id}`}>{item.title}</Link> - R${" "}
            {item.price} - Quantidade:{" "}
            <input
              type="number"
              className="item_quantity"
              id={qtyId + item.id}
              min={1}
              onChange={() => handleSum(item.id, item)}
              value={item.quantity}
            />
            <p id="total_price">
              Total: R${" "}
              {(item.quantity && (item.price * item.quantity).toFixed(2)) ||
                item.price}
            </p>
            <button
              type="submit"
              id="remove_item"
              onClick={() => handleRemove(item.id)}
            >
              Remover
            </button>
          </ItemsListStyles.CartItem>
        ))
      )}
      <br />
      {items.length > 0 && (
        <p>
          <u>Total: </u>
          <p>
            R${" "}
            {items
              .reduce((acc, item) => acc + item.price * item.quantity! || 0, 0)
              .toFixed(2)}
          </p>
        </p>
      )}
      <ItemsListStyles.ButtonStyles>
        <button className="end_purchase">Finalizar compra</button>
        <button className="remove_all" onClick={() => dispatch(removeAll())}>
          Remover tudo
        </button>
      </ItemsListStyles.ButtonStyles>
    </ItemsListStyles.CartContainer>
  );
};
