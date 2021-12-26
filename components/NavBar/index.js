import React, { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { BreadCrumb } from "../../assets/BreadCrumb.js";
import { Container } from "styled-bootstrap-grid";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./NavBarElements";
import StyledButton from "components/StyledButton.js";
import Image from "next/image";
const Navbar = ({ toggle }) => {
  const [navbar, setNavBar] = useState(false);

  useEffect(() => {
    const changeStyle = () => {
      if (window.scrollY >= 80) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    };
    window.addEventListener("scroll", changeStyle);
    return () => {
      window.removeEventListener("scroll", changeStyle);
    };
  }, [navbar]);
  const router = useRouter();
  const isHomePage = router.pathname == "/";

  return (
    <>
      {isHomePage ? (
        <Nav isHomePage={isHomePage} className={navbar ? "scrolling" : ""}>
          <Container>
            <NavbarContainer>
              <Link href="/" passHref>
                <NavLogo>
                  <Image
                    src="/brand-logo.svg"
                    width="80px"
                    height="80px"
                    title="Webl Innovations"
                    alt="webl innovations logo"
                  />
                </NavLogo>
              </Link>
              <MobileIcon onClick={toggle}>
                <BreadCrumb />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <Link href="/" passHref>
                    <NavLink
                      isHomePage={isHomePage}
                      className={
                        router.pathname == "/"
                          ? "active"
                          : "" || navbar
                          ? "scrolling"
                          : ""
                      }
                    >
                      Home
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/services" passHref>
                    <NavLink
                      isHomePage={isHomePage}
                      className={
                        router.pathname == "/services"
                          ? "active"
                          : "" || navbar
                          ? "scrolling"
                          : ""
                      }
                    >
                      Services
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/about-us" passHref>
                    <NavLink
                      isHomePage={isHomePage}
                      className={
                        router.pathname == "/about-us"
                          ? "active"
                          : "" || navbar
                          ? "scrolling"
                          : ""
                      }
                    >
                      About Us
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/blog" passHref>
                    <NavLink
                      isHomePage={isHomePage}
                      className={
                        router.pathname == "/blog"
                          ? "active"
                          : "" || navbar
                          ? "scrolling"
                          : ""
                      }
                    >
                      BLOG
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/work" passHref>
                    <NavLink
                      isHomePage={isHomePage}
                      className={
                        router.pathname == "/work"
                          ? "active"
                          : "" || navbar
                          ? "scrolling"
                          : ""
                      }
                    >
                      WORK
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <StyledButton
                    href="/contact"
                    isHomePage={isHomePage}
                    className={
                      router.pathname == "/contact"
                        ? "active"
                        : "" || navbar
                        ? "scrolling"
                        : ""
                    }
                  >
                    CONTACT US
                  </StyledButton>
                </NavItem>
              </NavMenu>
            </NavbarContainer>
          </Container>
        </Nav>
      ) : (
        <Nav className={navbar ? "scrolling" : ""}>
          <Container>
            <NavbarContainer>
              <Link href="/" passHref>
                <NavLogo>
                  <Image
                    src="/brand-logo.svg"
                    width="80px"
                    height="80px"
                    title="Webl Innovations"
                    alt="webl innovations logo"
                    priority
                  />
                </NavLogo>
              </Link>
              <MobileIcon onClick={toggle}>
                <BreadCrumb />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <Link href="/" passHref>
                    <NavLink className={router.pathname == "/" ? "active" : ""}>
                      Home
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/services" passHref>
                    <NavLink
                      className={router.pathname == "/services" ? "active" : ""}
                    >
                      Services
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/about-us" passHref>
                    <NavLink
                      className={router.pathname == "/about-us" ? "active" : ""}
                    >
                      About Us
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/blog" passHref>
                    <NavLink
                      className={router.pathname == "/blog" ? "active" : ""}
                    >
                      BLOG
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/work" passHref>
                    <NavLink
                      className={router.pathname == "/work" ? "active" : ""}
                    >
                      WORK
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <StyledButton
                    href="/contact"
                    className={router.pathname == "/contact" ? "active" : ""}
                  >
                    CONTACT US
                  </StyledButton>
                </NavItem>
              </NavMenu>
            </NavbarContainer>
          </Container>
        </Nav>
      )}
    </>
  );
};

export default Navbar;
