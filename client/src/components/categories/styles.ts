import styled from "styled-components";

export const CategoriesContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  list-style: none;
  padding: 1rem;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const CategoriesButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  & button {
    padding: 0.5rem 1rem;
    background-color: white;
    border-color: transparent;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    font-size: 1rem;
    transition: 200ms;
    width: 10rem;
    height: 3rem;
  }
  & button:hover {
    border-bottom-color: #ff6300;
    color: #ff6300;
  }
  & button:focus {
    border-bottom-color: #ff6300;
    color: #ff6300;
  }
`;
