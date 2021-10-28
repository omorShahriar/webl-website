import styled from "styled-components";
import { BiPhone } from "react-icons/bi";
import { HiMail } from "react-icons/hi";

const ReachButton = styled.a`
  margin-top: 2rem;
  color: #fff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease-in;
  &:hover {
    color: #ffdd02;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const StyledPhone = styled(BiPhone)`
  width: 2em;
  height: 2em;
  margin-right: 1rem;
`;
const StyledMail = styled(HiMail)`
  width: 2em;
  height: 2em;
  margin-right: 1rem;
`;

const ReachLink = ({ type, value }) => {
  if (type == "mail") {
    return (
      <ButtonWrapper>
        <ReachButton href={`mailto:${value}`}>
          <StyledMail />
          {value}
        </ReachButton>
      </ButtonWrapper>
    );
  }
  if (type == "phone") {
    return (
      <ButtonWrapper>
        <ReachButton href={`tel:${value}`}>
          <StyledPhone />
          {value}
        </ReachButton>
      </ButtonWrapper>
    );
  }
  return null;
};

export default ReachLink;
