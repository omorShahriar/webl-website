import Link from "next/link";
import styled from "styled-components";

export const LinkComponent = ({ as, children, className, href, rel }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
);

const StyledLink = styled(LinkComponent)`
  font-size: 1rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #ffdd02;
  }
`;
export default StyledLink;
