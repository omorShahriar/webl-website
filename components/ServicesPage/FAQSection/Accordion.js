import { useState } from "react";
import { faqs } from "../../../assets/seed";
import { FiPlus, FiMinus } from 'react-icons/fi'
import styled from "styled-components";
import {SecondaryHeading, SecondaryBodyText } from "../../Typography"
import { media } from "styled-bootstrap-grid";

const AccordionSection = styled.div`
`
const AccordionItem = styled.div`
    margin-bottom: 2rem;
`
const Container = styled.div`
    ${
    media.lg`
        width:80%;
        margin: 0 auto;     
    `
    }
    

`
const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid #FFB300;
    cursor: pointer;
    margin-bottom: 1rem;
    user-select: none;
    
`

const Dropdown = styled.div`
    transition: height ease 0.2s;
    overflow:hidden;
    height:0;
    &.open{
        height : 100px;
    }
  
`
const Heading = styled(SecondaryHeading)`
    text-transform: capitalize;
    color : ${({active}) => active ? "#3CBB95" : "#424242"}
`
const StyledIcon = styled.span`
    font-size: 25px;
    color : ${({active}) => active ? "#3CBB95" : "#424242"}
`

const Accordion = () => {
    const [clicked, setClicked] = useState(NaN);
  
    const toggle = index => {
        if (clicked == index) {
            return setClicked(null)
        }
        setClicked(index)
    }
    return (
        
            <AccordionSection>
                <Container>
                    {
                        faqs.map((faq, index) => {
                            return (
                                <AccordionItem key={index} >
                                    <Wrap onClick={() => toggle(index)} >
                                         <Heading active={clicked == index}>
                                            {`${index + 1}. ${faq.question}`}
                                        </Heading>
                                        <StyledIcon active={clicked == index}>{clicked == index ? <FiMinus /> : <FiPlus />}</StyledIcon>
                                    </Wrap>
                                    
                                                <Dropdown className={clicked == index ? "open" : ""} >
                                                        <SecondaryBodyText>
                                                            {faq.answer}
                                                        </SecondaryBodyText>
                                                </Dropdown>
                                </AccordionItem>
                            )
                        })
                    }
                </Container>
            </AccordionSection>
     
    )
}

export default Accordion