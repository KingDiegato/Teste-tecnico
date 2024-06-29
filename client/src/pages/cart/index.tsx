import { Toaster } from "sonner";
import { ItemsList } from "./components/itemsList/itemsList";
import * as CartStyles from "./styles";

export const Cart = () => {
  return (
    <CartStyles.Container>
      <ItemsList />
      <Toaster
        richColors
        position="top-center"
        toastOptions={{ style: { padding: "1rem", borderRadius: "0.5rem" } }}
      />
    </CartStyles.Container>
  );
};
