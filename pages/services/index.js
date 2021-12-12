import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity";
import { NextSeo } from "next-seo";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { GenericWrapper } from "../../components/Utils/GenericWrapper";
import Approach from "../../components/ServicesPage/ApproachSection/Approach";
import FeaturesSection from "../../components/ServicesPage/FeaturesSection";
import ProcessSection from "../../components/ServicesPage/ProcessSection";
import FAQSection from "../../components/ServicesPage/FAQSection";

import { PrimaryHeading } from "../../components/Typography";
import ServiceBox from "../../components/ServicesPage/ServiceBox";

const pageQuery = groq`
  *[_type == "page" && title == "Services"][0]{
  "process" : content[0],
  "service": *[_id == "landingPage"][0].content[2]{
   heading,
  services
}

}
`;

const Services = ({ data }) => {
  return (
    <>
      <NextSeo title="Services" />
      <GenericWrapper>
        <Container>
          <Row>
            <Col>
              <PrimaryHeading>{data.service.heading}</PrimaryHeading>
            </Col>
            <Col lgOffset={1} lg={10}>
              <ServiceBox services={data.service.services} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Approach />
              <FeaturesSection />
              <ProcessSection process={data.process} />
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
