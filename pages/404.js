import styled from 'styled-components';
import FourOFour from '../assets/FourOFour.svg';

const Container404 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    max-width: 1100px; 
    margin: 0 auto;
    padding:2rem 0 ;

`

export default function Custom404() {
    return (
        <Container404>
            <FourOFour preserveAspectRatio="xMidYMid" width="600" height="300" viewBox="0 0 1200 900" />
      </Container404>
  )
}