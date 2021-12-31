import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import DotGrid from "./DotGrid";

const HeaderBg = styled.header`
  position: relative;
  background: ${({ bgColor }) => (bgColor ? bgColor : "#e3f6eb")};
  border-radius: 25px 75px;
  padding: 3rem 0.5rem;
  margin-bottom: 3rem;
  #tr,
  #tl,
  #br,
  #bl {
    position: absolute;
    z-index: -10;
  }
  #tr {
    top: 0;
    right: 0;
  }
  #bl {
    bottom: 0;
    left: 0;
  }
  #tl {
    top: 0;
    left: 0;
  }
  #br {
    bottom: 0;
    right: 0;
  }
  ${media.md`
        margin-bottom: 4rem;
    
       
    `}
  ${media.lg`
        margin-bottom: 5rem;
    
       
    `}
`;

const Header = ({ bgColor, dotColor, children, dotRev }) => (
  <HeaderBg bgColor={bgColor}>
    <DotGrid id={dotRev ? "tl" : "tr"} fill={dotColor} />
    <DotGrid id={dotRev ? "br" : "bl"} fill={dotColor} />
    {children}
  </HeaderBg>
);
export default Header;
