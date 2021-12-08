import React, { useState, useEffect } from "react";
import TinyCrossfade from "react-tiny-crossfade";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import * as fa from "react-icons/fa";
import * as hi from "react-icons/hi";
import * as md from "react-icons/md";
import { SecondaryHeading, SecondaryBodyText } from "../../../Typography";

const Card = styled.div`
  box-sizing: border-box;
  padding: 2rem 0.5rem;
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
  transform: ${({ isActive }) => isActive && "translateY(-15px)"};
  & .transition-wrapper {
    transition: height 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
    overflow: hidden;
  }
  & .before-enter {
    opacity: 0;
  }
  & .entering {
    opacity: 1;
    transition: opacity 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
  & .before-leave {
    opacity: 1;
  }
  & .leaving {
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  color: #3cbb95;
  font-size: 3rem;
`;
const Title = styled(SecondaryHeading)`
  text-align: center;

  ${media.lg` 
        font-size : 1.25rem;
       
    `}
`;

const Description = styled(SecondaryBodyText)`
  text-align: center;
  transition: all 0.3s ease-out;
  ${media.lg` 
        font-size : 1.25rem;
       
    `}
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

export const ServiceCard = ({ title, icon, isActive, description }) => {
  const [flipped, setFlipped] = useState(false);
  useEffect(() => {
    if (!isActive) {
      setFlipped(false);
    }
  }, [isActive]);
  return (
    <Card
      isActive={isActive}
      onClick={() => setFlipped(!flipped)}
      onBlur={() => setFlipped(false)}
    >
      <TinyCrossfade
        disableInitialAnimation={true}
        className="transition-wrapper"
      >
        {flipped ? (
          <InnerBox>
            <Description key="description">{description}</Description>
          </InnerBox>
        ) : (
          <InnerBox key="title">
            <IconWrapper>
              <ServiceIcon icon={icon} />
            </IconWrapper>
            <Title>{title}</Title>
          </InnerBox>
        )}
      </TinyCrossfade>
    </Card>
  );
};
