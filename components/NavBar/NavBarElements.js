import styled from 'styled-components'


export const Nav = styled.nav`
    background : #fff;
    height : 80px;
    display : flex;
    justify-content : center;
    align-items : center;
    font-family: 'Inter', sans-serif; 
    font-size : 1rem;
    position : sticky;
    top : 0;
    z-index : 10;

    @media screen and (max-width : 960px) {
        transition : 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display : flex;
    justify-content : space-between;
    height : 80px;
    z-index : 1;
    width : 100%;
    padding : 0 24px;
    max-width : 1100px;
    align-items: center;
`

export const NavLogo = styled.a`
    justify-self : flex-start;
    cursor : pointer;
    font-size : 1.5rem;
    display:flex;
    align-items : center;
    margin-left : 24px;   

`

export const MobileIcon = styled.div`
    display : none;

    @media screen and (max-width : 768px) {
        display: flex; 
        margin-right: 24px;
        cursor : pointer;
        width: 48px; 
        height: 48px;
        justify-content: center;
        align-items: center;
    }
`

export const NavMenu = styled.ul`
    display : flex ;
    align-items: center;
    list-style: none;
    text-align: center;
  

    @media screen and (max-width: 768px) {
        display : none;

    }

`

export const NavItem = styled.li`
    height : 80px
`

export const NavLink = styled.a`
    color : #424242;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0 1rem;
    height : 100%;
    cursor: pointer;
    &.active {
        color : #FFA400;
    }
`