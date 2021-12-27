import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.75rem;
  font-size: 1rem;
  gap: 0.25em;
  ${media.md`
        justify-content: flex-start;

    `}
  ${media.lg`
        font-size : 1.5rem;
        margin-top:1.5rem;
        gap:.5em;
    `}
`;
const SocialLink = styled.a`
  color: #424242;
  text-decoration: none;
  font-size: 2rem;

  transition: all 0.3s ease-in;
  &:hover {
    color: #ffb300;
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
        rel="noopener"
        target="_blank"
        href="https://www.facebook.com/weblinnovations"
      >
        <FaFacebook />
      </SocialLink>
      <SocialLink
        rel="noopener"
        target="_blank"
        href="https://www.linkedin.com/company/webl-innovations/"
      >
        <FaLinkedin />
      </SocialLink>
    </Box>
  </>
);

export default SocialIconBox;
