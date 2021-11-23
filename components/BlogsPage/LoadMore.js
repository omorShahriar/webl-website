import styled from "styled-components";
import MoonLoader from "react-spinners/ClipLoader";

export const LoadMore = styled.button`
  border: 3px solid #3cbb95;
  border-radius: 25px;
  padding: 0.6rem 1.25rem;
  position: relative;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #3cbb95;
  }
`;

export const LoadMoreContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled(MoonLoader)``;
