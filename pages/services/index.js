import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity";

const pageQuery = groq`
  *[_type == "landingPage"][0]{
  content[2]
}
`;

import { NextSeo } from "next-seo";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { GenericWrapper } from "../../components/Utils/GenericWrapper";
import Approach from "../../components/ServicesPage/ApproachSection/Approach";
import FeaturesSection from "../../components/ServicesPage/FeaturesSection";
import ProcessSection from "../../components/ServicesPage/ProcessSection";
import FAQSection from "../../components/ServicesPage/FAQSection";

import { PrimaryHeading } from "../../components/Typography";
import ServiceBox from "../../components/ServicesPage/ServiceBox";

const Services = ({ data: { content } }) => {
  return (
    <>
      <NextSeo title="Services" />
      <GenericWrapper>
        <Container>
          <Row>
            <Col>
              <PrimaryHeading>{content.heading}</PrimaryHeading>
            </Col>
            <Col lgOffset={1} lg={10}>
              <ServiceBox services={content.services} />
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

export async function getStaticProps({ preview = false }) {
  const data = await getClient(preview).fetch(pageQuery);

  return {
    props: {
      preview,
      data,
    },
  };
}
