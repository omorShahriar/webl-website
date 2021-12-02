import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import { GenericWrapper } from "../../../Utils/GenericWrapper";
import { PrimaryHeading } from "../../../Typography";
// import { services } from "../../../../assets/seed";
import { ServiceCard } from "./ServiceCard";
import { ServiceSlides } from "./ServicesSlide";

const ServiceCardsWrapper = styled.div`
  display: none;
  ${media.md`
       display:block`}
`;
const ServicesSlideWrapper = styled.div`
  ${media.md`
       display:none; `}
`;
const OuterWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
const InnerWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 2rem;
  @media (min-width: 480px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 33.33%;
  }
`;
const ServiceCards = ({ services }) => {
  return services.map((service, index) => {
    return (
      <InnerWrap key={index}>
        <ServiceCard
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      </InnerWrap>
    );
  });
};

const ServicesSection = ({ content }) => {
  return (
    <GenericWrapper>
      <Container>
        <PrimaryHeading>{content.heading}</PrimaryHeading>
        <ServicesSlideWrapper>
          <Row>
            <ServiceSlides services={content.services} />
          </Row>
        </ServicesSlideWrapper>

        <ServiceCardsWrapper>
          <OuterWrap>
            <ServiceCards services={content.services} />
          </OuterWrap>
        </ServiceCardsWrapper>
      </Container>
    </GenericWrapper>
  );
};
export default ServicesSection;
