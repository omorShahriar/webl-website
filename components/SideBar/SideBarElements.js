import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position : fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #006661;
    display: grid; 
    align-items: center;
    top: 0;
    left: 0; 
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};  

`
export const CloseIcon = styled(FaTimes)`
    color: #006661;
   
    
    
`

export const Icon = styled.div`
    position: absolute;
    top: 2rem;
    width: 48px;
    height: 48px;
    right: 2.5rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    font-size: 2rem;
`

export const SidebarWrapper = styled.div`
    color : #fff;


`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align : center;
    margin: 0 ;
    @media screen and  (max-width : 480px) {
        grid-template-rows: repeat(6,60px);
    }
`
export const SidebarLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:1.5rem ;
    text-decoration : none ;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #FFDD02;
    }
`