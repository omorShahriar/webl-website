import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import Lottie from "lottie-react-web";
import animation from "../../assets/service-hero.json";
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  background: #fff;
  border-radius: 25px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-bottom: 1rem;
  ${media.sm`
    width:70%;
  `}
  ${media.md`
    width:100%;
  `}
`;
const HeroImage = (props) => (
  <Container>
    <Lottie options={{ animationData: animation }} />
  </Container>
);

export default HeroImage;
