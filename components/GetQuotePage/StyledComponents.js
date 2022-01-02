import styled from "styled-components";

export const InnerWrapper = styled.div`
  max-width: 440px;
  margin: 0 auto;
  margin-bottom: 3rem;
`;
export const Title = styled.h1`
  font-weight: 500;
  font-size: 20px;
  color: #1e1e1e;
  line-height: 24px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;
export const Form = styled.form`
  margin-top: 1rem;
  padding: 1.5rem 1rem;
  font-size: 14px;
  line-height: 16px;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  margin-top: 0.5rem;
  width: 100%;
  display: block;
  border: ${({ error }) => (error ? "2px solid red" : "1px solid #b8e8ce")};
  outline: none;
  &:focus {
    border: ${({ error }) => (error ? "2px solid red" : "2px solid #3cbb95")};
  }
`;
export const TextArea = styled.textarea`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  min-height: 80px;
  border: ${({ error }) => (error ? "2px solid red" : "1px solid #b8e8ce")};
  width: 100%;
  outline: none;
  &:focus {
    border: ${({ error }) => (error ? "2px solid red" : "2px solid #3cbb95")};
  }
`;
export const Button = styled.button`
  cursor: pointer;
  background: #006661;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  padding: 0.5rem 2rem;
  display: block;

  font-size: 14px;
  line-height: 16px;
  text-align: center;
  font-weight: 500;
  margin: 0 auto;
  margin-top: 1.5rem;
  border-radius: 25px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const Label = styled.label`
  display: flex;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #1e1e1e;
  font-size: 14px;
  line-height: 16px;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 12px;
    line-height: 16px;
    color: red;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const FormGroup = styled.div`
  margin-top: 1rem;
  &:nth-of-type(1) {
    margin-top: 1.5rem;
  }
`;

export const OuterBackground = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    z-index: -100;
    top: 0;
    left: 0;
    width: 100%;
    background: #006661;
    height: 35vh;
  }
`;
const Svg = styled.svg`
  position: absolute;
  top: 100%;
  left: 0;

  width: 100%;
`;
export const SVGWave = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#006661"
        fillOpacity="1"
        d="M0,224L34.3,208C68.6,192,137,160,206,170.7C274.3,181,343,235,411,245.3C480,256,549,224,617,197.3C685.7,171,754,149,823,149.3C891.4,149,960,171,1029,149.3C1097.1,128,1166,64,1234,42.7C1302.9,21,1371,43,1406,53.3L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
      ></path>
    </Svg>
  );
};
