import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

export const GenericWrapper = styled.div`
  padding-top: 3rem;
  margin-bottom: 4rem;
  ${media.md`
        padding-top: 5rem;
        margin-bottom: 6rem ; `}
  ${media.lg`
        padding-top: 7rem;
    `}
`;
