import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

export const Nav = styled.nav`
  background: ${({ isHomePage }) => (isHomePage ? "transparent" : "#fff")};
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.2s ease-out;

  @media screen and (min-width: 992px) {
    width: 100%;
    position: ${({ isHomePage }) => (isHomePage ? "fixed" : "sticky")};
  }

  &.scrolling {
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  align-items: center;
`;

export const NavLogo = styled.a`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
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
  font-family: "Poppins", sans-serif;
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
