import React from "react";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import { SecondaryHeading, SecondaryBodyText } from "../../../Typography";

const GiantNumber = styled.p`
  color: #b8e8ce;
  font-weight: bold;
  font-size: 6rem;
  line-height: 1.25;
  min-width: 90px;
  text-align: center;
  ${media.lg`
       font-size: 8rem;
    `}
`;
const ReasonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.75rem;
`;
const ReasonTextBox = styled.div`
  padding-left: 1rem;
`;
const ReasonBlock = ({ title, description, index }) => {
  return (
    <ReasonWrapper>
      <GiantNumber>{index + 1}</GiantNumber>
      <ReasonTextBox>
        <SecondaryHeading>{title}</SecondaryHeading>
        <SecondaryBodyText>{description}</SecondaryBodyText>
      </ReasonTextBox>
    </ReasonWrapper>
  );
};
export default ReasonBlock;
