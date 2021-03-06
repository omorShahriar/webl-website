import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import { SecondaryBodyText, SecondaryHeading } from "../../Typography";

const ServiceCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  ${media.md`
        align-items : flex-start;
        margin-bottom: 4rem;
    `}
`;
const Title = styled.h3`
  font-weight: 500;
  font-size: 1.2rem;
  text-align: center;
  ${media.md`
                text-align:left;
            `}
`;

const Description = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #424242;
  ${media.md`
            text-align:left;
        `}
`;

const ServiceIcon = ({ icon }) => {
  return <div dangerouslySetInnerHTML={{ __html: icon }}></div>;
};
const ServiceCard = ({ icon, title, description }) => {
  return (
    <ServiceCardWrapper>
      <ServiceIcon icon={icon} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ServiceCardWrapper>
  );
};

export default ServiceCard;
