import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.3s all ease;

  @media screen and (min-width: 992px) {
    background: ${({ isHomePage }) => (isHomePage ? "transparent" : "#fff")};
    width: 100%;
    position: ${({ isHomePage }) => (isHomePage ? "fixed" : "sticky")};
  }

  &.scrolling {
    background: #fff;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  align-items: center;
`;

export const NavLogo = styled.a`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    margin-right: 24px;
    cursor: pointer;
    width: 48px;
    height: 48px;
    justify-content: center;
    align-items: center;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 80px;
`;

export const NavLink = styled.a`
  color: #424242;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  ${media.lg`
        color:${({ isHomePage }) => (isHomePage ? "#fff" : "#424242")}
    `}
  &.scrolling {
    color: #424242;
  }

  &.active {
    color: #ffa400;
  }
`;
