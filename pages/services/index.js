import dynamic from "next/dynamic";
import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity";
import { NextSeo } from "next-seo";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import { GenericWrapper } from "../../components/Utils/GenericWrapper";
import Approach from "../../components/ServicesPage/ApproachSection/Approach";
import FeaturesSection from "../../components/ServicesPage/FeaturesSection";
import ProcessSection from "../../components/ServicesPage/ProcessSection";
import FAQSection from "../../components/ServicesPage/FAQSection";
import styled from "styled-components";
import { PrimaryHeading } from "../../components/Typography";
import HeroSkeleton from "components/HeroSkeleton";
import ServiceBox from "../../components/ServicesPage/ServiceBox";

const HeroImage = dynamic(() => import("components/ServicesPage/HeroImage"), {
  ssr: false,
  loading: () => <HeroSkeleton height={324.11} />,
});

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
  top: 100px;
  left: 0;
  width: 100%;
  height: 70vh;
  border-radius: 35px;
  background-color: rgba(184, 232, 206, 0.4);
  ${media.md`
   width: 80%;
   border-radius:0 35px 35px 0;
   top: 0;
  `}
  ${media.xl`
   height: 80vh;
  `}
`;

const Heading = styled(PrimaryHeading)`
  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }
`;

const HeroWrapper = styled.div`
  ${media.md`
    padding-bottom: 3rem ;
  `}
`;

const Services = ({ data }) => {
  return (
    <>
      <NextSeo title="Services" />
      <GenericWrapper>
        <HeaderBackground />
        <Container>
          <HeroWrapper>
            <Row>
              <Col md={6} mdOrder={2}>
                <HeroImage />
              </Col>
              <Col md={6} alignSelf="center">
                <Heading color="#006661">{data.service.heading}</Heading>
              </Col>
            </Row>
          </HeroWrapper>
          <Row>
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
