import styled from "styled-components";
import Image from "next/image";
import { features } from "../../../assets/seed";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import { SecondaryHeading, SecondaryBodyText } from "../../Typography";
import FeatureGridDecor from "./FeatureGridDecor";

const FeatureSectionWrapper = styled.div``;
const FeatureGrid = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 768px;
  position: relative;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(10, 1fr);
    margin-top: 4rem;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 8rem;
    margin-bottom: 8rem;
  }
  margin-top: 2rem;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  color: #272b2a;
`;

const Description = styled.p`
  line-height: 1.2rem;
  font-size: 0.75rem;
  font-weight: 300;
  color: #424242;
`;

const FeatureBoxWrapper = styled.div`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;

  gap: 0.5rem;
  border-radius: 15px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    &:nth-child(1) {
      grid-column: 1 / span 1;
      grid-row: 1 / span 3;
    }
    &:nth-child(2) {
      grid-column: 2 / span 1;
      grid-row: 2 / span 3;
    }
    &:nth-child(3) {
      grid-column: 1 / span 1;
      grid-row: 4 / span 3;
    }
    &:nth-child(4) {
      grid-column: 2 / span 1;
      grid-row: 5 / span 3;
    }
    &:nth-child(5) {
      grid-column: 1 / span 1;
      grid-row: 7 / span 3;
    }
    &:nth-child(6) {
      grid-column: 2 / span 1;
      grid-row: 8 / span 3;
    }
  }
`;

const FeatureIcon = styled.div`
  width: 2rem;
  height: 2rem;
`;

const FeatureBox = ({ icon, title, description }) => {
  return (
    <FeatureBoxWrapper>
      <FeatureIcon>
        <Image src={`/${icon}`} width={48} height={48} />
      </FeatureIcon>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </FeatureBoxWrapper>
  );
};

const FeatureGridWrapper = styled.div`
  position: relative;
`;

const FeaturesSection = () => {
  return (
    <FeatureSectionWrapper>
      <SecondaryHeading textAlign="center">
        Some features of our solutions
      </SecondaryHeading>
      <SecondaryBodyText textAlign="center">
        Whether you have 15 minutes of content or 100 volumes, we can scale to
        any size project easily.
      </SecondaryBodyText>
      <FeatureGridWrapper>
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureBox
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.text}
            />
          ))}
        </FeatureGrid>
        <FeatureGridDecor />
      </FeatureGridWrapper>
    </FeatureSectionWrapper>
  );
};

export default FeaturesSection;
