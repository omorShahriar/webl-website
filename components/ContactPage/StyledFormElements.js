import styled from "styled-components";

export const Form = styled.form`
  padding: 2rem 0;
  padding-top: 0;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #424242;
  margin-top: 2rem;
  font-weight: light;
  span {
    color: #ffb300;
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  border: 2px solid #b8e8ce;
  border-radius: 10px;
  margin-top: 1em;
  padding: 0.5rem 0;
  padding-left: 1rem;
  font-weight: light;
  color: #7a7a7a;
  outline: none;
  transform: 0.1s;
  :focus {
    border: 3px solid #3cbb95;
  }
`;

export const TextArea = styled.textarea`
  background: transparent;
  border: none;
  border: 2px solid #b8e8ce;
  border-radius: 10px;
  margin-top: 1em;
  padding: 0.5rem 0;
  padding-left: 1rem;
  font-weight: light;
  min-height: 150px;
  color: #7a7a7a;
  outline: none;
  transform: 0.1s;
  :focus {
    border: 2px solid #3cbb95;
  }
`;

export const ButtonBox = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 0.5rem 2.5rem;
  margin-right: ${({ loading }) => (loading ? "1rem" : 0)};
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 25px;
  border: 3px solid #3cbb95;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:disabled {
    border-color: #b8e8ce;
  }
  &:hover:enabled {
    background: #3cbb95;
  }
`;

export const ErrorMessage = styled.p`
  color: #f24008;
`;
export const MessageBox = styled.div`
  text-align: left;
`;

export const SuccessMessage = styled.p`
  color: #3cbb95;
  margin: 0.5rem 0;
  font-size: 0.75rem;
`;
export const FailureMessage = styled.p`
  color: #f24008;
  margin: 0.5rem 0;
  font-size: 0.75rem;
`;
