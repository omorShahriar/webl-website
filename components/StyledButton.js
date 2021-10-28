import styled from "styled-components";
import Link from "next/link";
import { media } from "styled-bootstrap-grid";

const LinkComponent = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
);
const StyledButton = styled(LinkComponent)`
  border-width: 2px;
  border-style: solid;
  border-radius: 15px;
  border-color: ${({ borderColor }) => (borderColor ? borderColor : "#FFB300")};
  font-size: 0.75rem;
  font-weight: 300;
  color: #424242;
  text-decoration: none;
  padding: 5px 15px;
  background: transparent;
  transition: all 0.3s ease-in;
  ${media.lg`
      color:${({ isHomePage }) => (isHomePage ? "#fff" : "#424242")};
      border-radius: 25px;
      font-size: 1rem;
    `}
  &.scrolling {
    color: #424242;
  }
  &.active {
    color: #ffa400;
  }
  &:hover {
    background: ${({ borderColor }) => (borderColor ? borderColor : "#FFB300")};
  }
`;
export default StyledButton;
