import styled from "styled-components";

export const FilterButtons = styled.div`
  display: flex;
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
