import styled from "styled-components";

export const SearchContainer = styled.section`
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  border-radius: 0.25rem;
  padding: 1rem;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;

  & input {
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    outline: none;
  }

  & button {
    background-color: #ff6300;
    color: #fff;
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    transition: 200ms;
    &:hover {
      background-color: #cf4f00;
    }
`;
