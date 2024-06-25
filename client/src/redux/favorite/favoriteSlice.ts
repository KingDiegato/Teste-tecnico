import { createSlice } from "@reduxjs/toolkit";
import { FavoriteState } from "../../types/cart";

const initialState: FavoriteState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addItemToWishList(state, action) {
      state.items.push(action.payload);
    },
    removeItemFromWishList(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItemToWishList, removeItemFromWishList } =
  favoriteSlice.actions;

export const getFavoriteItemsState = (state: { favorite: FavoriteState }) =>
  state.favorite.items;

export default favoriteSlice.reducer;
