import * as HeaderStyles from "./styles";

export const Header = () => {
  return (
    <HeaderStyles.Container>
      <HeaderStyles.StyledLink to="/">Home</HeaderStyles.StyledLink>
      <HeaderStyles.StyledLink to="/cart">Carrinho</HeaderStyles.StyledLink>
      <HeaderStyles.StyledLink to="/wishlist">
        Lista de desejos
      </HeaderStyles.StyledLink>
      <HeaderStyles.StyledLink to="/product">Produtos</HeaderStyles.StyledLink>
      <HeaderStyles.StyledLink to="/search">Pesquisa</HeaderStyles.StyledLink>
    </HeaderStyles.Container>
  );
};
