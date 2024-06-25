import type { Product } from "./product";

export interface CartState {
  items: Product[];
  ammount: number;
}

export interface FavoriteState {
  items: Product[];
}
