import { Container, media, Row, Col } from "styled-bootstrap-grid";
import { PrimaryHeading, SecondaryHeading } from "components/Typography";
import { GenericWrapper } from "components/Utils/GenericWrapper";
import ContactForm from "components/ContactPage/ContactForm";
import styled from "styled-components";
import { BiPhone } from "react-icons/bi";
import { HiMail } from "react-icons/hi";

const Title = styled(PrimaryHeading)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  ${media.md`
        font-size:4rem;
        margin-bottom: 1.25rem;    
    `}
`;
const SubTitle = styled(SecondaryHeading)`
  text-align: center;
  font-size: 1rem;
`;
const OuterContactBox = styled.div`
  margin-right: 13%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  ${media.lg`
       margin-top:4rem;
    `}
  @media screen and (max-width:767px) {
    flex-direction: column;
    margin-right: 0;
  }
`;
const ReachOutBox = styled.div`
  padding-right: 1rem;

  text-align: right;
  @media screen and (max-width: 767px) {
    text-align: center;
    order: 2;
    padding-right: 0;
  }
`;
const ContactBox = styled.div`
  padding-left: 1rem;
  border-left: 2px solid #3cbb95;
  @media screen and (max-width: 767px) {
    text-align: center;
    border-left: none;
    padding-left: 0;
  }
`;
const Heading = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
`;

const ReachButton = styled.a`
  margin-top: 2rem;
  color: #ffb300;
  text-decoration: none;
  display: inline-flex;

  align-items: center;
  justify-content: flex-end;
  position: relative;
  padding-bottom: 0.5rem;
  &::after {
    transition: all 0.3s ease-out;
    transform-origin: left;
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 0;
    height: 3px;
    background: #3cbb95;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;
const StyledBiPhone = styled(BiPhone)`
  width: 2em;
  height: 2em;
  margin-right: 1rem;
`;
const StyledHiMail = styled(HiMail)`
  width: 2em;
  height: 2em;
  margin-right: 1rem;
`;

const Contact = () => {
  return (
    <GenericWrapper>
      <Container>
        <Title>let’s talk</Title>
        <SubTitle>
          Fill the form and send in your queries. We’ll respond as soon as we
          can.{" "}
        </SubTitle>
        <OuterContactBox>
          <ReachOutBox>
            <Heading>reach out</Heading>
            <ButtonWrapper>
              <ReachButton href={"tel:+8801797039209"}>
                <StyledBiPhone />
                +8801797039209
              </ReachButton>
            </ButtonWrapper>
            <ButtonWrapper>
              <ReachButton href={"mailto:weblinnovations.team@gmail.com"}>
                <StyledHiMail />
                weblinnovations.team@gmail.com
              </ReachButton>
            </ButtonWrapper>
          </ReachOutBox>
          <ContactBox>
            <Heading>send a message</Heading>
            <ContactForm />
          </ContactBox>
        </OuterContactBox>
      </Container>
    </GenericWrapper>
  );
};

export default Contact;
