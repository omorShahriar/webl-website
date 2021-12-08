import React from "react";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import { SecondaryBodyText, SecondaryHeading } from "../../Typography";

import * as fa from "react-icons/fa";
import * as hi from "react-icons/hi";
import * as md from "react-icons/md";

const ServiceCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  ${media.md`
        align-items : flex-start;
        margin-bottom: 4rem;
    `}
`;
const Title = styled(SecondaryHeading)`
  text-align: center;
  ${media.md`
                text-align:left;
            `}
`;

const Description = styled(SecondaryBodyText)`
  text-align: center;
  ${media.md`
            text-align:left;
        `}
`;

const IconWrapper = styled.div`
  color: #3cbb95;
  font-size: 3rem;
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
const ServiceCard = ({ icon, title, description }) => {
  return (
    <ServiceCardWrapper>
      <IconWrapper>
        <ServiceIcon icon={icon} />
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ServiceCardWrapper>
  );
};

export default ServiceCard;
