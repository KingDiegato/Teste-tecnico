import styled from "styled-components";

export const CartContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 1rem;
  max-width: 1200px;
`;

export const CartItem = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 0 auto;
  padding: 1rem;
  max-width: 1200px;
  background-color: white;
`;
