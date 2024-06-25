import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import favoriteSlice from "./favorite/favoriteSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorite: favoriteSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
