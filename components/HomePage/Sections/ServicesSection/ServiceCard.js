import React from "react";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import { BsGearWideConnected, BsFillFlagFill } from "react-icons/bs";
import { SecondaryHeading, SecondaryBodyText } from "../../../Typography";

import StyledButton from "../../../StyledButton";
import { Blank } from "../../../Utils/Blank";

const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0.75rem;
  border-width: 3px;
  border-style: solid;
  border-color: #ffb300;
  border-radius: 25px;
  background: #fff;
  margin-bottom: 3rem;
  ${media.xs`
        width: 50%;
    margin:0 auto;
    `}
  ${media.xl`
        width: 80%;
    margin:0 auto;
    `}
`;
const IconWrapper = styled.div`
  color: #3cbb95;
  font-size: 5rem;
`;

export const ServiceCard = ({ title, text, slug }) => {
  return (
    <ServiceWrapper>
      <IconWrapper>
        <BsGearWideConnected />
      </IconWrapper>

      <SecondaryHeading>{title}</SecondaryHeading>
      <Blank gap="1" />
      <SecondaryBodyText textAlign="center">{text}</SecondaryBodyText>
      <Blank gap="1.5" />
      <StyledButton href="/services" borderColor="#3CBB95">
        Learn More
      </StyledButton>
    </ServiceWrapper>
  );
};
