import styled from "styled-components";

export const WishListContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 1rem;
  max-width: 1200px;
`;

export const WishListItem = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 0 auto;
  padding: 1rem;
  max-width: 1200px;
  background-color: white;
`;

export const WishListRemoveButton = styled.button`
  border: none;
  background-color: #f72f2f;
  cursor: pointer;
  color: white;
  padding: 0.5rem;
  transition: 200ms;
  &:hover {
    background-color: #d32f2f;
  }
  &:focus {
    outline: none;
    background-color: #b71c1c;
  }
`;
