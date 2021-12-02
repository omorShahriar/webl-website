import { Container, Row, Col, media } from "styled-bootstrap-grid";
import { PrimaryHeading } from "../../../Typography";
import { GenericWrapper } from "../../../Utils/GenericWrapper";
import ReasonBlock from "./ReasonBlock";

const WhyUsSection = ({ content }) => {
  return (
    <GenericWrapper>
      <Container>
        <Row>
          <Col>
            <PrimaryHeading>{content.heading}</PrimaryHeading>
          </Col>
        </Row>
        <Row>
          {content.reasons.map((reason, index) => {
            return (
              <Col key={index} md="6">
                <ReasonBlock
                  title={reason.title}
                  description={reason.description}
                  index={index}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </GenericWrapper>
  );
};

export default WhyUsSection;
