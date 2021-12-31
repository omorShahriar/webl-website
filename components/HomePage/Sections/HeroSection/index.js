import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import StyledButton from "../../../StyledButton";
import { sanityImageProps } from "lib/sanity";
import { VerticalSeparator } from "../../../Utils/Seperator";
import AppointmentButton from "./AppointmentLInk";

const HeroWrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  ${media.lg`
            background: url("/heroBg.svg");
                background-size: 77%;
    background-repeat: no-repeat;
    background-position: 149% 62%;
    padding-top: 10rem;
    padding-bottom: 10rem;
   `}
  ${media.xl`
      background-position: 149% 80%;
            padding-top: 15rem;
            padding-bottom: 15rem;
   `}
  ${media.xxl`
            background-size: 67%;

    background-position: bottom right;
            padding-bottom: 20rem;
   `}
`;

const HeroHeading = styled.h1`
  color: #000;
  font-weight: bold;
  font-size: 2.5rem;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  ${media.md`
        margin-top: 1rem;
        font-size : 2.75rem;
       
    `}
  ${media.lg`
        text-align: left;
        font-size : 3rem;
        line-height:3.25rem;
      
    `}
`;

const HeroDescription = styled.p`
  color: #7a7a7a;
  font-size: 0.75rem;
  text-align: center;
  margin-top: 0.5rem;
  ${media.md`
        font-size : 1rem;
        
    `}
  ${media.lg`
  text-align: left;
        font-size : 1.2rem;
       
    `}
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  min-height: 3rem;
  ${media.lg`
        justify-content: start;
    `}
`;

const HeroSection = ({ content }) => {
  const imageProps = sanityImageProps(content?.heroImage);
  return (
    <HeroWrapper>
      <Container>
        <Row>
          <Col lg="6" lgAlignSelf="center">
            <HeroHeading>{content.heading}</HeroHeading>
            <HeroDescription>{content.tagline}</HeroDescription>

            <ButtonWrapper>
              <StyledButton href="/quote" borderColor="#3CBB95">
                Get A Quote
              </StyledButton>
              <VerticalSeparator />
              <AppointmentButton url="https://calendly.com/omorsh/15min" />
            </ButtonWrapper>
          </Col>
          <Col lg="6" order="first" lgOrder="2" mdAlignSelf="center">
            <Image
              {...imageProps}
              layout="responsive"
              alt="webl innovations hero image"
              priority
            />
          </Col>
        </Row>
      </Container>
    </HeroWrapper>
  );
};

export default HeroSection;
