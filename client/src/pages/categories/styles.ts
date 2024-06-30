import styled from "styled-components";

export const ProductContainer = styled.section`
  margin: 0 auto;
  max-width: 1280px;
  padding: 1rem;
`;

export const ItemsSubGrid = styled.ul`
  display: grid;
  grid-column: span 4;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  list-style: none;
`;
