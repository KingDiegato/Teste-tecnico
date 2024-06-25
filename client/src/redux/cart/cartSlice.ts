import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../../types/cart";

const initialState: CartState = {
  items: [],
  ammount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  // A lógica dos reducers poderá ser alterada se necessário
  reducers: {
    addItem(state, action) {
      if (state.items.some((item) => item.id === action.payload.id)) {
        state.ammount += 1;
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
        return;
      }
      state.items.push(action.payload);
      state.ammount += 1;
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.ammount -= 1;
    },
    removeAll(state) {
      state.items = [];
      state.ammount = 0;
    },
  },
});
// exportar os reducers para serem utilizados em páginas e componentes
export const { addItem, removeItem, removeAll } = cartSlice.actions;

// exportar o estado do carrinho para ser utilizado em páginas e componentes
export const getCartItemsState = (state: { cart: CartState }) =>
  state.cart.items;

export default cartSlice.reducer;
