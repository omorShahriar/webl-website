import styled from "styled-components";
import { Container, Row } from "styled-bootstrap-grid";
import { GenericWrapper } from "../../../Utils/GenericWrapper";
import { PrimaryHeading } from "../../../Typography";

import ServiceSlides from "./ServicesSlide";

const Heading = styled(PrimaryHeading)`
  margin-bottom: 0;
`;
const ServicesSection = ({ content }) => {
  return (
    <GenericWrapper>
      <Container>
        <Heading>{content.heading}</Heading>
        <Row>
          <ServiceSlides services={content.services} />
        </Row>
      </Container>
    </GenericWrapper>
  );
};
export default ServicesSection;
