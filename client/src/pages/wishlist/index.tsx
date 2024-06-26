import { WishItemsList } from "./components/wishItemsList/wishItemsList";
import * as WishListStyles from "./styles";
export const Wishlist = () => {
  return (
    <WishListStyles.WishListMain>
      <h1>Lista de desejos!</h1>
      <WishItemsList />
      {/* Insira o corpo da página de lista de desejos aqui */}
    </WishListStyles.WishListMain>
  );
};
