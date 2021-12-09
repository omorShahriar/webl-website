import { NextSeo } from "next-seo";
import PeopleBox from "components/AboutUsPage/Sections/PeopleSection/PeopleBox";
import StorySection from "components/AboutUsPage/Sections/OurStorySection";
import { Container, media, Row, Col } from "styled-bootstrap-grid";
import {
  PrimaryHeading,
  SecondaryBodyText,
  SecondaryHeading,
} from "components/Typography";
import { GenericWrapper } from "components/Utils/GenericWrapper";

import styled from "styled-components";

const Heading = styled(PrimaryHeading)`
  & span {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      transition: all 0.3s ease-out;
      bottom: 10px;
      left: 0;
      width: 100%;
      height: 10px;
      z-index: -25;
      overflow: hidden;
      border-radius: 10px;
      background: #ffa400;
    }
    &:hover {
      &::after {
        height: 25px;
      }
    }
  }
`;
const ElementList = styled.ul`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding-top: 3rem;
  margin-bottom: 3rem;
`;
const Element = styled.li`
  display: flex;
  gap: 1rem;
  list-style: none;
`;
const PerkBox = styled.div`
  padding-top: 1.5rem;
  display: grid;
  gap: 1rem;
  ${media.md`
          grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
    `}
  ${media.lg`
          grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(12, 1fr);
    `}
`;
const PerkCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  grid-column: 1 / span 2;
  overflow: hidden;
  border-radius: 25px;
  ${media.md`
        grid-column: auto;
    `}
  ${media.lg`
    &:nth-child(1){
        grid-column: 1/span 1;
        grid-row: 2/span 5;
    }
    &:nth-child(2){
        grid-column: 2/span 1;
        grid-row: 1/span 5;
    }
    &:nth-child(3){
        grid-column: 1/span 1;
        grid-row: 7/span 5;
    }
    &:nth-child(4){
        grid-column: 2/span 1;
        grid-row: 6/span 5;
    }
        
    `}
  & h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    width: 100%;
    color: #3cbb95;
  }
  & p {
    font-size: 0.75rem;
  }
`;

const TheTeamBox = styled.div`
  padding-top: 6rem;
`;

const About = () => {
  return (
    <>
      <NextSeo title="About Us" />
      <GenericWrapper>
        <Container>
          <Heading>
            We design, develop and deliver <br /> <span>e-learning</span>{" "}
            solutions
          </Heading>
          <Row>
            <Col lg={6}>
              <SecondaryHeading>
                We help you build a culture of learning
              </SecondaryHeading>
              <SecondaryBodyText>
                We support organisations with a innovative learning approach
                <br />
                that integrates five elements:
              </SecondaryBodyText>
              <ElementList>
                <Element>
                  <img src="/ElementSquareBox.svg" width="24px" height="24px" />
                  smart technology
                </Element>
                <Element>
                  <img src="/ElementSquareBox.svg" width="24px" height="24px" />
                  quality content
                </Element>
                <Element>
                  <img src="/ElementSquareBox.svg" width="24px" height="24px" />
                  practical tools
                </Element>
                <Element>
                  <img src="/ElementSquareBox.svg" width="24px" height="24px" />
                  expert guidance
                </Element>
                <Element>
                  <img src="/ElementSquareBox.svg" width="24px" height="24px" />
                  community support
                </Element>
              </ElementList>
            </Col>
            <Col lg={6}>
              <SecondaryHeading>
                Our values influence our work, products and culture
              </SecondaryHeading>
              <PerkBox>
                <PerkCard>
                  <h3>Trusted and Respected</h3>
                  <p>
                    By leading companies, organisations and government agencies
                    of all sizes, across a wide range of industry sectors.
                  </p>
                </PerkCard>
                <PerkCard>
                  <h3>Working Together</h3>
                  <p>
                    With experts in your organisation we help foster a culture
                    of learning that is crucial to the success of your business
                    and develop the talent of your team.
                  </p>
                </PerkCard>
                <PerkCard>
                  <h3>Client Focused</h3>
                  <p>
                    Together we build awesome learning experiences which will
                    increase productivity, reduce costs, transfer knowledge,
                    increase motivation and strengthen organisational culture.
                  </p>
                </PerkCard>
                <PerkCard>
                  <h3>Exceptional Experience</h3>
                  <p>
                    Thanks to our long and exceptional experience, we’ve had the
                    chance to learn from our clients, too. About what works (and
                    what doesn’t) when you truly want to excite people to learn.
                  </p>
                </PerkCard>
              </PerkBox>
            </Col>
          </Row>
          <Row>
            <Col>
              <TheTeamBox>
                <SecondaryHeading textAlign="center">
                  We are surrounded by smart, passionate people
                </SecondaryHeading>
                <PeopleBox></PeopleBox>
              </TheTeamBox>
              <StorySection />
            </Col>
          </Row>
        </Container>
      </GenericWrapper>
    </>
  );
};

export default About;
