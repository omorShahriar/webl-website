import React from 'react'
import { urlFor } from '../../../../lib/sanity';
import Image from 'next/image';
import styled from 'styled-components'
import { Container, Row, Col,media } from 'styled-bootstrap-grid';
import StyledButton from '../../../StyledButton';

import {VerticalSeparator} from '../../../Utils/Seperator';


const HeroWrapper = styled.div`
    padding-top: 5rem;
    padding-bottom : 5rem;
;
   

   ${media.lg`
            background: url("/heroBg.svg");
            background-size: 67%;
            background-repeat: no-repeat;
            background-position: bottom right;
            padding-top: 10rem;
            padding-bottom: 10rem;
   `}
   ${media.xl`
            padding-top: 15rem;
            padding-bottom: 15rem;
   `}
   ${media.xxl`
            
            padding-bottom: 20rem;
   `}
`

const HeroHeading = styled.h1`
    color:#424242;
    font-weight: bold;
    font-size : 2.5rem;
    text-align: center;
    margin-top: 2rem;
    ${
    media.md`
        margin-top: 1rem;
        font-size : 3.5rem;
        text-align: left;
    `
    }
`

const HeroDescription = styled.p`
    color:#7A7A7A;
    font-size : 0.75rem;
    text-align: center;
    margin-top: 0.5rem;
    ${
    media.md`
        font-size : 1rem;
        text-align: left;
    `
    }
    ${
    media.lg`
        font-size : 1.2rem;
       
    `
    }
`
const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
    min-height: 3rem;
    ${media.md`
        justify-content: start;
    `
}
`



const HeroSection = ({content}) => {

    return (
        <HeroWrapper>
            <Container>
                <Row >
                    <Col md="6" lgAlignSelf="center">
                        <HeroHeading>{content.heading}</HeroHeading>
                        <HeroDescription>
                            {
                                content.tagline
                            }
                        </HeroDescription>
                        
                        <ButtonWrapper>
                            <StyledButton href="/quote" borderColor="#3CBB95">
                                Get A Quote
                            </StyledButton>
                            <VerticalSeparator />
                            <StyledButton href="/appointment" borderColor="#FFDD02">
                                Book An Appointment
                            </StyledButton>
                                
                            </ButtonWrapper>
                      
                        
                    </Col>
                    <Col md="6" order="first" mdOrder="2" mdAlignSelf="center">
                          <Image  src={urlFor(content.heroImage).url()} width={1753} height={1026} layout="responsive"/>  
                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
        
    )
}

export default HeroSection;