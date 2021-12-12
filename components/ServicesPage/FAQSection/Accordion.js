import { useState } from "react";
import { faqs } from "../../../assets/seed";
import { FiPlus, FiMinus } from "react-icons/fi";
import styled from "styled-components";
import { SecondaryBodyText } from "../../Typography";
import { media } from "styled-bootstrap-grid";

const AccordionSection = styled.div`
  max-width: 960px;
  margin: 0 auto;
  margin-top: 3.75rem;
`;
const AccordionItem = styled.div`
  margin-bottom: 1rem;
`;
const Container = styled.div`
  ${media.lg`
        width:80%;
        margin: 0 auto;     
    `}
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  cursor: pointer;

  user-select: none;
`;

const Dropdown = styled.div`
  margin-top: 0.5rem;
  transition: height ease 0.2s;
  overflow: hidden;
  height: 0;
  &.open {
    height: 100px;
  }
`;
const Heading = styled.h2`
  text-transform: capitalize;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ active }) => (active ? "#3CBB95" : "#272B2A")};
`;

const Text = styled.p`
  color: #424242;
  font-size: 1rem;
  font-weight: 300;
`;
const StyledIcon = styled.span`
  font-size: 25px;
  display: flex;
  place-items: center;
  color: ${({ active }) => (active ? "#3CBB95" : "#424242")};
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(NaN);

  const toggle = (index) => {
    if (clicked == index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <AccordionSection>
      <Container>
        {faqs.map((faq, index) => {
          return (
            <AccordionItem key={index}>
              <Wrap onClick={() => toggle(index)}>
                <Heading active={clicked == index}>
                  {`${index + 1}. ${faq.question}`}
                </Heading>
                <StyledIcon active={clicked == index}>
                  {clicked == index ? <FiMinus /> : <FiPlus />}
                </StyledIcon>
              </Wrap>

              <Dropdown className={clicked == index ? "open" : ""}>
                <Text>{faq.answer}</Text>
              </Dropdown>
            </AccordionItem>
          );
        })}
      </Container>
    </AccordionSection>
  );
};

export default Accordion;
