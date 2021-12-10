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
  padding: 0.25rem;
  border-radius: 50%;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    45deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
`;
const RoundBox = styled.div`
  padding: 0.25rem;
  background: #fff;
  border-radius: 50%;
`;

const Image = styled.img`
  object-fit: cover;
  object-position: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;
const People = ({ member }) => {
  return (
    <Wrapper>
      <DP>
        <RoundBox>
          <Image src={member.picture} />
        </RoundBox>
      </DP>

      <h3>{member.name}</h3>
      <p>{member.designation}</p>
    </Wrapper>
  );
};

export default People;
