import React from "react";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import * as fa from "react-icons/fa";
import * as hi from "react-icons/hi";
import * as md from "react-icons/md";
import { SecondaryHeading, SecondaryBodyText } from "../../../Typography";

import StyledButton from "../../../StyledButton";
import { Blank } from "../../../Utils/Blank";

const Card = styled.div`
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
  ${media.md`
        width: 80%;
    margin:0 auto;
    `}
`;
const IconWrapper = styled.div`
  color: #3cbb95;
  font-size: 5rem;
`;
const Title = styled(SecondaryHeading)`
  text-align: center;
  ${media.lg` 
        font-size : 1.25rem;
       
    `}
`;
const Text = styled(SecondaryBodyText)`
  text-align: center;
  flex-grow: 1;
`;

const ServiceIcon = ({ icon }) => {
  const { name, provider } = icon;
  let Icon;
  if (provider == "mdi") {
    Icon = React.createElement(md[name]);
  } else if (provider == "fa") {
    Icon = React.createElement(fa[name]);
  } else {
    Icon = React.createElement(hi[name]);
  }

  return Icon;
};
export const ServiceCard = ({ title, description, icon }) => {
  return (
    <Card>
      <IconWrapper>
        <ServiceIcon icon={icon} />
      </IconWrapper>

      <Title>{title}</Title>
      <Blank gap="1" />
      <Text textAlign="center">{description}</Text>
      <Blank gap="1.5" />
      <StyledButton href="/services" borderColor="#3CBB95">
        Learn More
      </StyledButton>
    </Card>
  );
};
