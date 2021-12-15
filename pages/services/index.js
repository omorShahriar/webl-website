import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity";
import { NextSeo } from "next-seo";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { GenericWrapper } from "../../components/Utils/GenericWrapper";
import Approach from "../../components/ServicesPage/ApproachSection/Approach";
import FeaturesSection from "../../components/ServicesPage/FeaturesSection";
import ProcessSection from "../../components/ServicesPage/ProcessSection";
import FAQSection from "../../components/ServicesPage/FAQSection";
import styled from "styled-components";
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
const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background-color: #ffffff;
  opacity: 0.2;
  background-image: radial-gradient(#006661 1px, transparent 1px),
    radial-gradient(#006661 1px, #ffffff 1px);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
`;

const Services = ({ data }) => {
  return (
    <>
      <NextSeo title="Services" />
      <GenericWrapper>
        <HeaderBackground />
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
