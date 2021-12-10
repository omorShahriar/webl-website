import { stories } from "assets/seed";
import StoryCard from "./StoryCard";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Autoplay]);

const StyledSwiperWrapper = styled.div`
  padding-top: 3rem;
  & .swiper {
    position: relative;
    padding-bottom: 3.5rem;
  }
  & .swiper-button-prev,
  & .swiper-button-next {
    -webkit-tap-highlight-color: transparent;
    position: absolute;
    bottom: 0;
    top: auto;
    &:after {
      color: #000;
    }
  }
  & .swiper-button-prev {
    left: 35%;
    &:after {
      content: "←";
    }
  }
  & .swiper-button-next {
    right: 35%;
    &:after {
      content: "→";
    }
  }

  @media screen and (min-width: 768px) {
    & .swiper-button-prev {
      left: 40%;
    }
    & .swiper-button-next {
      right: 40%;
    }
  }
  @media screen and (min-width: 1024px) {
    & .swiper-button-prev {
      left: 45%;
    }
    & .swiper-button-next {
      right: 45%;
    }
  }
`;

const Stories = () => {
  return (
    <>
      <StyledSwiperWrapper>
        <Swiper
          slidesPerView={1}
          navigation={true}
          autoplay={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {stories.map((story, index) => {
            return (
              <SwiperSlide key={index}>
                <StoryCard story={story}></StoryCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </StyledSwiperWrapper>
    </>
  );
};

export default Stories;
