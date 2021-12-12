import styled from "styled-components";

const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  margin: 0 auto;
  display: flex;
  align-item: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const CustomIcon = ({ icon }) => {
  return <Icon dangerouslySetInnerHTML={{ __html: icon }}></Icon>;
};

export default CustomIcon;
