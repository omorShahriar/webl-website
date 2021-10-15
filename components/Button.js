import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'

const Button = styled.a`
    border-width: 2px;
    border-style: solid;
    border-radius: 15px;
    border-color: ${({borderColor}) => borderColor};
    font-size: 0.75rem;
    font-weight: 300;
    color : #424242;
    text-decoration: none;
    padding: 5px 15px;
    background: #fff;
     transition: 0.2s ease-in-out;
    ${media.lg`
        border-radius: 25px;
        font-size: 1rem;
    `
    
    }

    &:hover {
        border-color: ${({ hoverColor }) => hoverColor};
        background:  ${({ hoverColor }) => hoverColor};;
    }
 `
export default Button