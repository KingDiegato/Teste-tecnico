import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "all",
  minPrice: 0,
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    sortByCategory(state, action) {
      state.category = action.payload.category;
    },
    sortByPrice(state, action) {
      state.minPrice = action.payload.minPrice;
    },
  },
});

export const { sortByCategory, sortByPrice } = sortSlice.actions;

export const getSortState = (state: { sort: typeof initialState }) =>
  state.sort;

export default sortSlice.reducer;
