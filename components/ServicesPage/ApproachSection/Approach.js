import styled from "styled-components";
import Image from "next/image";
import ApproachImage from "/public/approach-image.jpg";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import {
  PrimaryHeading,
  SecondaryHeading,
  SecondaryBodyText,
} from "../../Typography";
import { GenericWrapper } from "../../Utils/GenericWrapper";
import { Blank } from "../../Utils/Blank";

const Title = styled.h3`
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: #424242;
`;

const ImageBox = styled.div`
  border-radius: 25px;
  overflow: hidden;
  margin-bottom: 2rem;
  ${media.md`
                border-radius : 50px;
            `}
`;

const Wrapper = styled.div`
  margin-top: 3rem;
  ${media.md`
                 margin-top: 6rem;
            `}
`;
const Approach = () => {
  return (
    <GenericWrapper>
      <SecondaryHeading textAlign="center">
        Responsive, engaging, interactive
      </SecondaryHeading>
      <SecondaryBodyText textAlign="center">
        We take pride in partnering with clients to become an invaluable
        extension of their team.
      </SecondaryBodyText>
      <Wrapper>
        <Row>
          <Col md={7} alignSelf="center">
            <ImageBox>
              <Image
                src={ApproachImage}
                placeholder="blur"
                layout="responsive"
              />
            </ImageBox>
          </Col>
          <Col md={5} alignSelf="center">
            <Container>
              <Row>
                <Col>
                  <Title>Consultative approach</Title>
                  <Description>
                    We spend time consulting with you upfront and throughout the
                    design and development process. Our iterative, agile
                    approach guarantees client satisfaction.
                  </Description>
                  <Blank gap={3} />
                </Col>
                <Col>
                  <Title>Direct production</Title>
                  <Description>
                    If you're content is in a 'ready to build' format, you may
                    have a storyboard or existing designs or powerpoint we use a
                    direct production approach to save time and cost.
                  </Description>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Wrapper>
    </GenericWrapper>
  );
};
export default Approach;
