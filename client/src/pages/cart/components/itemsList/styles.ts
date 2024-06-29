import styled from "styled-components";

export const CartContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: subgrid;
  grid-column: span 4;
  gap: 1rem;
  margin: 0 auto;
  padding: 1rem;
  max-width: 1200px;
`;

export const CartItem = styled.li`
  display: grid;
  grid-template-columns: subgrid;
  grid-column: span 6;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem;
  max-width: 1200px;
  background-color: white;
  & .item_quantity {
    width: 40px;
    text-align: center;
    border: 1px solid #ccc;
  }
  & .item_quantity:hover {
    border: 1px solid #aaa;
  }
  & .item_quantity:focus {
    outline: none;
    border: 1px solid #555;
  }
  & #remove_item {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  & #remove_item:hover {
    background-color: #d32f2f;
  }
`;

export const ButtonStyles = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 auto;
  & .end_purchase {
    background-color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  & .end_purchase:hover {
    background-color: #ccc;
  }
  & .end_purchase:focus {
    outline: none;
    background-color: #aaa;
  }
  & .remove_all {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  & .remove_all:hover {
    background-color: #d32f2f;
  }
  & .remove_all:focus {
    outline: none;
    background-color: #b71c1c;
  }
`;
