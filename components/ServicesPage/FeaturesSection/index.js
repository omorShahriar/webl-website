import styled from "styled-components";
import Image from "next/image";
import { features } from "../../../assets/seed";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import {
  PrimaryHeading,
  SecondaryHeading,
  SecondaryBodyText,
} from "../../Typography";
import { GenericWrapper } from "../../Utils/GenericWrapper";
import { Blank } from "../../Utils/Blank";
import { VerticalSeparator } from "../../Utils/Seperator";
const Heading = styled(PrimaryHeading)`
  margin-bottom: 1rem;
  ${media.lg`
                text-align: left;
            `}
`;
const SubTitle = styled(SecondaryBodyText)`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 5rem;
  ${media.lg`
                text-align: left;
                margin-bottom: 10rem;
            `}
`;

const Title = styled(SecondaryHeading)`
  ${media.lg` 
        font-size : 1.5rem;
    
    `}
`;

const FeatureBoxWrapper = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #3cbb95;

  ${media.md`
            min-height:260px;
            margin-bottom: 3rem;
            padding-bottom: 0;
            border-bottom: none;
    `}
`;

const FeatureIcon = styled.div`
  width: 3rem;
  height: 3rem;
  margin-bottom: 1.5rem;
`;

const FeatureBox = ({ icon, title, description }) => {
  return (
    <FeatureBoxWrapper>
      <FeatureIcon>
        <Image src={`/${icon}`} width={48} height={48} />
      </FeatureIcon>
      <Title>{title}</Title>
      <SecondaryBodyText>{description}</SecondaryBodyText>
    </FeatureBoxWrapper>
  );
};

const FeaturesSection = () => {
  const [sectionOne, sectionTwo] = features;

  return (
    <GenericWrapper>
      <Heading>Some features of our solutions</Heading>
      <SubTitle>
        Whether you have 15 minutes of content or 100 volumes, we can scale to
        any size project easily.
      </SubTitle>

      <Row>
        <Col md={4}>
          {sectionOne.map((feature) => (
            <FeatureBox
              icon={feature.icon}
              title={feature.title}
              description={feature.text}
            />
          ))}
        </Col>
        <Col mdOffset={1} md={2}>
          <VerticalSeparator centered={true} bgColor="#3CBB95" height="100%" />
        </Col>
        <Col mdOffset={1} md={4}>
          {sectionTwo.map((feature) => (
            <FeatureBox
              icon={feature.icon}
              title={feature.title}
              description={feature.text}
            />
          ))}
        </Col>
      </Row>
    </GenericWrapper>
  );
};

export default FeaturesSection;
