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

const Heading = styled(PrimaryHeading)`
  margin-bottom: 1rem;
  ${media.lg`
                text-align: left;
            `}
`;

const Title = styled(SecondaryHeading)`
  ${media.lg` 
        font-size : 1.5rem;
       
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
const ImageBox = styled.div`
  border-radius: 25px;
  overflow: hidden;
  ${media.md`
                border-radius : 50px;
            `}
`;

const Approach = () => {
  return (
    <GenericWrapper>
      <Heading>Responsive, engaging, interactive</Heading>
      <SubTitle>
        We take pride in partnering with clients to become an invaluable
        extension of their team.
      </SubTitle>

      <Row>
        <Col md={7} alignSelf="center">
          <ImageBox>
            <Image src={ApproachImage} placeholder="blur" layout="responsive" />
          </ImageBox>

          <Blank gap={3} />
        </Col>
        <Col mdOffset={1} md={4}>
          <Container>
            <Row>
              <Col>
                <Title>Consultative approach</Title>
                <SecondaryBodyText>
                  We spend time consulting with you upfront and throughout the
                  design and development process. Our iterative, agile approach
                  guarantees client satisfaction.
                </SecondaryBodyText>
                <Blank gap={3} />
              </Col>
              <Col>
                <Title>Direct production</Title>
                <SecondaryBodyText>
                  If you're content is in a 'ready to build' format, you may
                  have a storyboard or existing designs or powerpoint we use a
                  direct production approach to save time and cost.
                </SecondaryBodyText>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </GenericWrapper>
  );
};
export default Approach;
