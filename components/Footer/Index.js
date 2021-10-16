import styled from "styled-components";

import { Container,Col,Row,media } from "styled-bootstrap-grid";
import { TertiaryHedaing } from "../Typography";
import {FaLinkedin,FaFacebook} from "react-icons/fa"
import FooterLinks from "./FooterLinks";


const FooterOuterWrapper = styled.footer`
    padding-top: 3rem;
    background-image: url("/footer-background.svg") ;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    
    ${
    media.md`
        padding-top: 7rem;
    `
    }
    ${
    media.lg`
        padding-top: 10rem;
    `
    }
    ${
    media.xl`
        padding-top: 14rem;
    `
    }
  
`

const FooterInnerrWrapper = styled.div`
    padding: 3rem 0;
    color:#fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${
    media.md`
        padding: 5rem 0;
    `
    }
    ${
    media.lg`
        padding: 7rem 0;
    `
    }
    ${
    media.xl`
        padding: 9rem 0;
    `
    }

`

const FooterLinkBox = styled.div`
    padding: 1rem;
`

const FindUsBox = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SocialIconBox = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    font-size : 1rem;
    ${
    media.lg`
        font-size : 1.5rem;
    `
    }
`

const CopyRightBox = styled.div`
    background-image: url("/copyright-bg.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    font-size: 1rem;
    padding-top: 1.5rem;
    padding-bottom: 0.5rem;
    font-weight: bold;
    color: #424242;
    text-align: center;
    ${
    media.lg`
        padding-top: 2.5rem;
    `
    }
`

const Footer = () => {
    return (
        <FooterOuterWrapper>
            <Container>
                <Row>
                    <Col>
                        <FooterInnerrWrapper>
                            <FooterLinkBox>
                                <FooterLinks/>
                            </FooterLinkBox>
                            <FindUsBox>
                                <TertiaryHedaing color="#fff">
                                    find us on
                                </TertiaryHedaing>
                                <SocialIconBox>
                                    <FaLinkedin/>
                                    <FaFacebook/>
                                </SocialIconBox>
                            </FindUsBox>
                        </FooterInnerrWrapper>
                        <CopyRightBox>
                            Ⓒ WebL Innovation, {new Date().getFullYear()}
                        </CopyRightBox>
                    </Col>
                </Row>
                
            </Container>
            
        </FooterOuterWrapper>
    )
}

export default Footer