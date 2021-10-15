import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarLink, SidebarMenu } from './SideBarElements'
const Sidebar = ({isOpen,toggle}) => {
     const router = useRouter();
    return (
        <SidebarContainer isOpen = {isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <Link href='/' passHref>
                        <SidebarLink className={router.pathname == "/" ? "active" : ""} onClick={toggle}> Home</SidebarLink>
                    </Link>
                    <Link href='/services' passHref>
                        <SidebarLink className={router.pathname == "/services" ? "active" : ""} onClick={toggle}> Services</SidebarLink>
                    </Link>
                    <Link href='/about-us' passHref>
                        <SidebarLink className={router.pathname == "/about-us" ? "active" : ""} onClick={toggle}> About Us</SidebarLink>
                    </Link>
                    <Link href='/blog' passHref>
                        <SidebarLink className={router.pathname == "/blog" ? "active" : ""} onClick={toggle}> Blog</SidebarLink>
                    </Link>
                    <Link href='/work' passHref>
                        <SidebarLink className={router.pathname == "/work" ? "active" : ""} onClick={toggle}> Work</SidebarLink>
                    </Link>
                    <Link href='/contact-us' passHref>
                        <SidebarLink className={router.pathname == "/contact-us" ? "active" : ""} onClick={toggle}> Contact Us</SidebarLink>
                    </Link>
                  </SidebarMenu>  
  
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar