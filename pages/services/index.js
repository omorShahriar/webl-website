import { NextSeo } from "next-seo";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { GenericWrapper } from "../../components/Utils/GenericWrapper";
import Approach from "../../components/ServicesPage/ApproachSection/Approach";
import FeaturesSection from "../../components/ServicesPage/FeaturesSection";
import ProcessSection from "../../components/ServicesPage/ProcessSection";
import FAQSection from "../../components/ServicesPage/FAQSection";

import { PrimaryHeading } from "../../components/Typography";
import ServiceBox from "../../components/ServicesPage/ServiceBox";
const Services = () => {
  return (
    <>
      <NextSeo title="Services" />
      <GenericWrapper>
        <Container>
          <Row>
            <Col>
              <PrimaryHeading>our services</PrimaryHeading>
            </Col>
            <Col lgOffset={1} lg={10}>
              <ServiceBox />
            </Col>
          </Row>
          <Row>
            <Col>
              <Approach />
              <FeaturesSection />
              <ProcessSection />
              <FAQSection />
            </Col>
          </Row>
        </Container>
      </GenericWrapper>
    </>
  );
};

export default Services;
