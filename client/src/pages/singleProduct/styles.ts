import styled from "styled-components";

export const SingleProductContainer = styled.main`
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const SingleProductSection = styled.section`
  display: flex;
  background-color: white;
  border-radius: 0.25rem;
  padding: 1rem;
  margin: 0 auto;
  gap: 1rem;
  max-width: 1200px;
  width: 100%;

  & .reviews {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    gap: 1rem;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  justify-content: center;
  max-width: 500px;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SingleReview = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: flex-start;
`;

export const AsideProduct = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
`;
