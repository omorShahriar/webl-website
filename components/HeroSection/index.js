import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col,media } from 'styled-bootstrap-grid';
import Button from '../Button';
import Link from 'next/link'
import Separator from '../Utils/Seperator';


const HeroWrapper = styled.div`
    padding-top: 3rem;
    padding-bottom : 5rem;
;
   

   ${media.lg`
            background: url("/heroBg.svg");
            background-size: 67%;
            background-repeat: no-repeat;
            background-position: bottom right;
            padding-top: 6rem;
            padding-bottom: 10rem;
   `}
   ${media.xl`
            
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
    ${media.md`
        justify-content: start;
    `
}
`



const HeroSection = () => {
  
    return (
        <HeroWrapper>
            <Container>
                <Row >
                    <Col md="6" lgAlignSelf="center">
                        <HeroHeading>Hero Text</HeroHeading>
                        <HeroDescription>Sed metus a egestas morbi ac 
                            est a erat. Arcu arcu habitant eu cursus cursus 
                            amet auctor egestas.
                        </HeroDescription>
                        
                            <ButtonWrapper>
                            <Link href="/quote" passHref>
                                <Button borderColor="#424242" hoverColor="#3CBB95"> Get A Quote</Button>
                            </Link>
                            <Separator/>
                            <Link href="/appointment" passHref>
                                 <Button borderColor="#FFB300" hoverColor="#FFDD02"> Book An Appointment</Button>
                            </Link>   
                        </ButtonWrapper>
                      
                        
                    </Col>
                    <Col md="6" order="first" mdOrder="2" >
                        
                        
                          <object type="image/svg+xml" data="/heroImage.svg" width="100%"/>  
                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
        
    )
}

export default HeroSection;