import styled from "styled-components";
import { SecondaryHeading, SecondaryBodyText } from "components/Typography";
import Stories from "./Stories";

const TheStoryBox = styled.div`
  padding-top: 6rem;
`;

const StorySection = () => {
  return (
    <TheStoryBox>
      <SecondaryHeading textAlign="center">Our Story</SecondaryHeading>
      <SecondaryBodyText textAlign="center">
        Some of our most memorable moments over the years
      </SecondaryBodyText>
      <Stories />
    </TheStoryBox>
  );
};

export default StorySection;
