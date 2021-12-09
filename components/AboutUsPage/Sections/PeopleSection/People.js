import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  & h3 {
    font-size: 1rem;
  }
  & p {
    font-size: 0.75rem;
    color: #7a7a7a;
  }
`;
const DP = styled.div`
  position: relative;
  width: 170px;
  height: 170px;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    border: 3px solid #ffa400;
    border-radius: 50%;
    width: 170px;
    height: 170px;
  }
`;
const RoundBox = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  transform: translateY(10px);
`;
const People = ({ member }) => {
  return (
    <Wrapper>
      <DP>
        <RoundBox>
          <img src={member.picture} />
        </RoundBox>
      </DP>
      <h3>{member.name}</h3>
      <p>{member.designation}</p>
    </Wrapper>
  );
};

export default People;
