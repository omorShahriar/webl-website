import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.75rem;
  font-size: 1rem;
  ${media.md`
        justify-content: flex-start;
    `}
  ${media.lg`
        font-size : 1.5rem;
        margin-top:1.5rem;
    `}
`;
const SocialLink = styled.a`
  color: #424242;
  text-decoration: none;
  font-size: 2rem;
  margin-right: 0.5em;
  transition: all 0.3s ease-in;
  &:hover {
    color: #ffb300;
  }
  @media screen and (max-width: 767px) {
    margin: 0.5em;
  }
`;

const Heading = styled.h3`
  margin-top: 3rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: medium;
`;
const SocialIconBox = () => (
  <>
    <Heading>Find Us On</Heading>
    <Box>
      <SocialLink
        target="_blank"
        href="https://www.facebook.com/weblinnovations"
      >
        <FaFacebook />
      </SocialLink>
      <SocialLink
        target="_blank"
        href="https://www.linkedin.com/company/webl-innovations/"
      >
        <FaLinkedin />
      </SocialLink>
    </Box>
  </>
);

export default SocialIconBox;
