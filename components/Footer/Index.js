import styled from "styled-components";

import { Container, Col, Row, media } from "styled-bootstrap-grid";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import FooterLinks from "./FooterLinks";
import ReachLink from "components/ReachOut";

const FooterOuterWrapper = styled.footer`
  background: #006661;

  ${media.md`
      
    `}
  ${media.lg`
     
    `}
    ${media.xl`
        
    `}
`;

const FooterInnerrWrapper = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  margin: 1rem 0;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const FooterLinkBox = styled.div`
  padding: 1rem;
`;

const FindUsBox = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    text-align: center;
    padding-left: 0;
  }

  h3 {
    color: #fff;
    font-weight: 500;
  }
`;

const SocialIconBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 1rem;
  margin-top: 0.75rem;
  ${media.lg`
        font-size : 1.5rem;
    `}
`;

const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;

  transition: all 0.3s ease-in;
  &:hover {
    color: #ffb300;
  }
`;
const CopyRightBox = styled.div`
  font-size: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  color: #fff;
  text-align: center;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Footer = () => {
  return (
    <FooterOuterWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
        <path
          fill="#fff"
          fillOpacity={1}
          d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,74.7C672,43,768,21,864,37.3C960,53,1056,107,1152,117.3C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
      <Container>
        <Row>
          <Col>
            <FooterInnerrWrapper>
              <FooterLinkBox>
                <FooterLinks />
              </FooterLinkBox>
              <FindUsBox>
                <h3>Find Us On</h3>
                <SocialIconBox>
                  <SocialLink
                    target="_blank"
                    rel="noopener"
                    href="https://www.facebook.com/weblinnovations"
                  >
                    <FaFacebook />
                  </SocialLink>
                  <SocialLink
                    target="_blank"
                    rel="noopener"
                    href="https://www.linkedin.com/company/webl-innovations/"
                  >
                    <FaLinkedin />
                  </SocialLink>
                </SocialIconBox>
              </FindUsBox>
              <ReachLink type="mail" value="weblinnovations.team@gmail.com" />
              <ReachLink type="phone" value="+8801749035147" />
            </FooterInnerrWrapper>
            <CopyRightBox>
              &copy; WebL Innovations, {new Date().getFullYear()}
            </CopyRightBox>
          </Col>
        </Row>
      </Container>
    </FooterOuterWrapper>
  );
};

export default Footer;
