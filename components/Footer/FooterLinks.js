import { footerLinks } from "../../assets/seed";
import StyledLink from "../StyledLink";
import styled from "styled-components";

const NavItem = styled.li`
  list-style: none;
  margin-right: 1rem;
  padding-bottom: 0.75rem;

  @media screen and (max-width: 991px) {
    margin-right: 1rem;
  }
  @media screen and (max-width: 767px) {
    text-align: center;
    flex: 0 0 45%;
  }
  @media screen and (max-width: 381px) {
    flex: 0 0 100%;
  }
`;
const NavItemBox = styled.ul`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 991px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 767px) {
    margin-top: 2rem;
  }
`;
const FooterLinks = () => {
  return (
    <NavItemBox>
      {footerLinks.map((footerLink, index) => {
        return (
          <NavItem key={index}>
            <StyledLink href={footerLink.slug}>{footerLink.name}</StyledLink>
          </NavItem>
        );
      })}
    </NavItemBox>
  );
};

export default FooterLinks;
