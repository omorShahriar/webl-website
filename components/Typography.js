import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

export const PrimaryHeading = styled.h1`
  color: ${({ color }) => (color ? color : "#000")};
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  margin-bottom: 3rem;
  text-transform: uppercase;
  ${media.md`
     
        font-size : 1.75rem;
        line-height:2rem;
       
    `}
  ${media.lg`
    
        font-size : 2.25rem;
        line-height:2.5rem;
       

    `}
`;

export const SecondaryHeading = styled.h2`
  color: ${({ color }) => (color ? color : "#272B2A")};
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : " ")};
  ${media.lg` 
        font-size : 1.75rem;
       
    `}
`;
export const TertiaryHedaing = styled.h3`
  color: ${({ color }) => (color ? color : "#424242")};
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  ${media.lg` 
        font-size : 1.25rem;
       
    `}
`;

export const SecondaryBodyText = styled.p`
  color: ${({ color }) => (color ? color : "#7a7a7a")};
  font-size: 0.75rem;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : " ")};
  ${media.lg` 
    font-size : 1rem;
       
    `}
`;

export const Title = styled(PrimaryHeading)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  ${media.md`
        font-size:4rem;
        margin-bottom: 1.25rem;    
    `}
`;
