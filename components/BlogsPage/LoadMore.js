import styled from "styled-components";

export const LoadMore = styled.button`
  border: 3px solid #3cbb95;
  border-radius: 25px;
  padding: 0.6rem 1.25rem;
  position: relative;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #424242;
  font-size: 1rem;
  line-height: 1.5rem;
  &:hover {
    background: #3cbb95;
  }
`;

export const LoadMoreContainer = styled.div`
  margin: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
