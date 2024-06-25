import { WithItemsList } from "./components/wishItemsList/withItemsList";

export const Wishlist = () => {
  return (
    <>
      <h1>Lista de desejos!</h1>
      <WithItemsList />
      {/* Insira o corpo da página de lista de desejos aqui */}
    </>
  );
};
