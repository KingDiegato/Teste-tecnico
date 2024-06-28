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

export const CardStyle = styled.li`
  background-color: #fff;
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 6;
  border-radius: 0.25rem;
  padding: 1rem;
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  margin: 0 auto;
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

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  min-height: 100vh;
  margin: 0 auto;
  align-items: center;
`;
