import styled from "styled-components";

import { media } from "styled-bootstrap-grid";
import { SecondaryHeading, SecondaryBodyText } from "../../Typography";
import CustomIcon from "components/CustomIcon";

const Title = styled(SecondaryHeading)`
  text-align: center;
  border: 3px solid #3cbb95;
  border-radius: 15px;
  margin: 0 auto;
  margin-bottom: 1rem;
  background: #fff;
  font-weight: 500;
  width: 50%;
  ${media.md`
        margin-bottom : 1.25rem;
        padding: .25rem 1rem;
        width:100%;
        font-size : 1.25rem;
         
    `}
`;
const Description = styled(SecondaryBodyText)`
  font-size: 0.75rem;
  text-align: center;
  font-weight: 300;
  ${media.md`
        font-size: 1rem;
         
    `}
`;
const ProcessWrapper = styled.div`
  margin-bottom: 5rem;
  ${media.xl`
         padding: 1rem 1.5rem;
    padding-left: 0;
         
    `}
`;

const Process = ({ icon, title, description }) => {
  return (
    <ProcessWrapper>
      <Title>{title}</Title>

      <CustomIcon icon={icon} />

      <Description>{description}</Description>
    </ProcessWrapper>
  );
};

export default Process;
