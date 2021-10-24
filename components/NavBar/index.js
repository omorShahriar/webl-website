import React,{useState,useEffect} from 'react'
import Link from "next/link"
import { useRouter } from 'next/router';
import { BreadCrumb } from '../../assets/BreadCrumb.js'


import { Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLink } from './NavBarElements'
const Navbar = ({ toggle }) => {
    const [navbar,setNavBar] =useState(false)

    useEffect(() => {
        const changeStyle = () => {
            if (window.scrollY >= 80) {
                setNavBar(true);
            } else {
                setNavBar(false);
            }
        }
        window.addEventListener('scroll', changeStyle)
        return () => {
            window.removeEventListener('scroll',changeStyle);
        }
    },[navbar]) 
    const router = useRouter();
    const isHomePage = router.pathname == "/";
    return (
        <>
            {
                isHomePage ? (
                    <Nav isHomePage={isHomePage}  className={navbar ? "scrolling" : ''}>
                        <NavbarContainer>
                            <Link href="/" passHref>
                                <NavLogo>
                                    <img src="/brand-logo.svg" width="60px" height="60px"/>
                                </NavLogo>
                            </Link>
                            <MobileIcon  onClick={toggle}>
                                <BreadCrumb  />
                            </MobileIcon>
                            <NavMenu>
                                <NavItem>
                                    <Link href="/" passHref>
                                        <NavLink isHomePage={isHomePage} className={router.pathname == "/" ? "active" : "" ||
                                                            navbar ? "scrolling" : ''}>Home</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/services" passHref>
                                        <NavLink isHomePage={isHomePage} className={router.pathname == "/services" ? "active" : "" ||
                                                            navbar ? "scrolling" : ''}>Services</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/about-us" passHref>
                                        <NavLink isHomePage={isHomePage} className={router.pathname == "/about-us" ? "active" : "" ||
                                                            navbar ? "scrolling" : ''}>About Us</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/blog" passHref>
                                        <NavLink isHomePage={isHomePage} className={router.pathname == "/blog" ? "active" : "" ||
                                                            navbar ? "scrolling" : ''}>BLOG</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/work" passHref>
                                        <NavLink isHomePage={isHomePage} className={router.pathname == "/work" ? "active" : "" ||
                                                            navbar ? "scrolling" : ''}>WORK</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/contact-us" passHref>
                                        <NavLink isHomePage={isHomePage} className={router.pathname == "/contact-us" ? "active" : "" ||
                                                            navbar ? "scrolling" : ''}>CONTACT US</NavLink>
                                    </Link>
                                </NavItem>
                            </NavMenu>
                        </NavbarContainer>
                    </Nav> 
           
                ) :
                    (
                            <Nav>
                            <NavbarContainer>
                                <Link href="/" passHref>
                                    <NavLogo>
                                        <img src="/brand-logo.svg" width="60px" height="60px"/>
                                    </NavLogo>
                                </Link>
                                <MobileIcon  onClick={toggle}>
                                    <BreadCrumb  />
                                </MobileIcon>
                                <NavMenu>
                                    <NavItem>
                                        <Link href="/" passHref>
                                            <NavLink className={router.pathname == "/" ? "active" : ""}>Home</NavLink>
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link href="/services" passHref>
                                            <NavLink className={router.pathname == "/services" ? "active" : ""} >Services</NavLink>
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link href="/about-us" passHref>
                                            <NavLink className={router.pathname == "/about-us" ? "active" : "" }>About Us</NavLink>
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link href="/blog" passHref>
                                            <NavLink className={router.pathname == "/blog" ? "active" : ""}>BLOG</NavLink>
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link href="/work" passHref>
                                            <NavLink className={router.pathname == "/work" ? "active" : "" }>WORK</NavLink>
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link href="/contact-us" passHref>
                                            <NavLink className={router.pathname == "/contact-us" ? "active" : "" }>CONTACT US</NavLink>
                                        </Link>
                                    </NavItem>
                                </NavMenu>
                            </NavbarContainer>
                        </Nav> 
                    )
            }
                    
            
        </>
    )
}

export default Navbar
