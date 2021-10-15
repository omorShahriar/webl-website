import { footerLinks } from "../../assets/seed"
import StyledLink from "../StyledLink"
import styled from "styled-components"

const NavItem = styled.li`
    list-style: none;
    padding-bottom: 1rem;
`

const FooterLinks = () => {
    return (
        <ul>
            {
                footerLinks.map((footerLink, index) => {
                    return (
                        <NavItem key={index}>
                            <StyledLink href={footerLink.slug}>
                                {footerLink.name}
                            </StyledLink>
                        </NavItem>
                    )
                })
            }
        </ul>
    )
}

export default FooterLinks