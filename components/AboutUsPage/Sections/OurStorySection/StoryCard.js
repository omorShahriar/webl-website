import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Title = styled.h3`
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: #272b2a;
`;
const Details = styled.p`
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #424242;
`;
const ImgBox = styled.img`
  width: 100%;
  height: 175px;
  border-radius: 25px;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
`;
const StoryCard = ({ story }) => {
  return (
    <Container>
      <ImgBox src={story.image} />
      <Title>{story.title}</Title>
      <Details>{story.details}</Details>
    </Container>
  );
};

export default StoryCard;
