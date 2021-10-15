import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import {SecondaryHeading,SecondaryBodyText} from "../Typography"

const GiantNumber = styled.p`
    color:#B8E8CE;
    font-weight: bold;
    font-size: 6rem;
    line-height: 1.25;
     ${
    media.lg`
       font-size: 8rem;
    `
    }

`
const ReasonWrapper = styled.div`
    display : flex;
    align-items: center;
    
`
const ReasonTextBox = styled.div`
    
    padding-left: ${({ padding }) => padding == 1 ? "1.5rem" : "1rem"};
    ${
    media.lg`
       padding-left: ${({ padding }) => padding == 1 ? "2rem" : "1rem"};
    `
    }

`
 const ReasonBlock = ({title,text,index}) => {
    return (
        <ReasonWrapper>
            <GiantNumber>{index}</GiantNumber>
            <ReasonTextBox padding={index}>
                <SecondaryHeading>{title}</SecondaryHeading>
                <SecondaryBodyText>{text}</SecondaryBodyText>
            </ReasonTextBox>
        </ReasonWrapper>
    )
}
export default ReasonBlock