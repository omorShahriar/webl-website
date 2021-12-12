import styled from "styled-components";

import { Row, Col, media } from "styled-bootstrap-grid";
import { SecondaryHeading } from "../../Typography";

import Process from "./Process";

const ProcessBox = styled.div`
  margin-top: 2rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 5%;
    left: 0;
    height: 3px;
    display: none;
    background: #3cbb95;
    width: 80%;
    z-index: -1;
    ${media.md`
                display:block;
                top:4%;
            `}
    ${media.lg`
                
                top:5%;
            `}
         ${media.xl`
                
                top:8%;
            `}
  }
`;
const Wrapper = styled.div`
  margin-top: 6rem;
`;
const ProcessSection = ({ process }) => {
  return (
    <Wrapper>
      <SecondaryHeading textAlign="center">{process.heading}</SecondaryHeading>
      <ProcessBox>
        <Row>
          {process.items.map((item, index) => (
            <Col md={3} key={index}>
              <Process
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </Col>
          ))}
        </Row>
      </ProcessBox>
    </Wrapper>
  );
};
export default ProcessSection;
