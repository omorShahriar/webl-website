import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'

export const PrimaryHeading = styled.h2`
    color:#000;
    font-weight: bold;
    font-size : 1.75rem;
    text-align: center;
    margin-bottom: 3rem;
    text-transform: uppercase;
    ${
    media.md`
        margin-bottom: 6rem;
        font-size : 2.5rem;
       
    `
    }
`

export const SecondaryHeading = styled.h3`
    color: ${({color}) =>  color ? color : "#424242" } ;
    font-weight: bold;
    font-size : 1.25rem;
    margin-bottom: .5rem;
    ${
    media.lg` 
        font-size : 1.75rem;
       
    `
    }
`
export const TertiaryHedaing = styled.h4`
     color: ${({color}) =>  color ? color : "#424242" } ;
    font-weight: bold;
    font-size : 1rem;
    margin-bottom: .5rem;
    ${
    media.lg` 
        font-size : 1.25rem;
       
    `
    }
`

export const SecondaryBodyText = styled.p`
    color: #7A7A7A;
    font-size:0.75rem;
    text-align: ${({ textAlign }) => textAlign};
    
     ${
    media.lg` 
    font-size : 1rem;
       
    `
    }
`