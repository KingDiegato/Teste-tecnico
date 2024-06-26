import styled from "styled-components";

export const ProductContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;
`;

export const ItemsSubGrid = styled.div`
  display: grid;
  grid-column: 1/5;
  grid-template-columns: subgrid;
  gap: 1rem;
  padding: 1rem;
`;

export const CardStyle = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 500px;
  border-radius: 0.25rem;
  padding: 1rem;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  align-self: center;
  max-width: 200px;
  max-height: 200px;
  aspect-ratio: 1 / 1;
  border-radius: 0.25rem;
`;

export const AddToCart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff6300;
  color: #fff;
  width: 100%;
  height: 40px;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    background-color: #cf4f00;
  }
`;

export const AddToFavorite = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff6300;
  color: #fff;
  width: 48px;
  height: 48px;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    background-color: #cf4f00;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > h2 {
    max-width: 200px;
  }
`;
