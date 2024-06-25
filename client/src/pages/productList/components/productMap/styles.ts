import styled from "styled-components";

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
`;

export const ImageContainer = styled.div`
  aspect-ratio: 1 / 1;
  border-radius: 0.25rem;
`;
