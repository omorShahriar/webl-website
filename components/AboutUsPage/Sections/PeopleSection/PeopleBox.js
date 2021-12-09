import People from "./People";
import { members } from "assets/seed";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import styles from "./customSlideStyle.module.css";

SwiperCore.use([Autoplay, Pagination]);

const StyledSwiperWrapper = styled.div``;
const PeopleBox = () => {
  return (
    <>
      <StyledSwiperWrapper>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={true}
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className={styles.swiper}
        >
          {members.map((member, index) => {
            return (
              <SwiperSlide key={index} className={` ${styles["swiper-slide"]}`}>
                <People member={member}></People>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </StyledSwiperWrapper>
    </>
  );
};

export default PeopleBox;
