import styled from "styled-components";
import { openPopupWidget } from "react-calendly";

const StyledButton = styled.button`
  border-width: 2px;
  border-style: solid;
  border-radius: 15px;
  border-color: ${({ borderColor }) => (borderColor ? borderColor : "#FFB300")};
  font-size: 0.75rem;
  font-weight: 300;
  color: #424242;
  text-decoration: none;
  padding: 5px 15px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in;
  @media screen and (min-width: 992px) {
    border-radius: 25px;
    font-size: 1rem;
  }
  &:hover {
    background: ${({ borderColor }) => (borderColor ? borderColor : "#FFB300")};
  }
`;
const AppointmentButton = ({ url }) => {
  const onClick = () => openPopupWidget({ url });
  return (
    <StyledButton onClick={onClick} borderColor="#FFDD02">
      Book An Appointment
    </StyledButton>
  );
};
export default AppointmentButton;
