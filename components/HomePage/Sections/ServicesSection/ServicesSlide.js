import React from "react";

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";

import { Col } from "styled-bootstrap-grid";

import { ServiceCard } from "./ServiceCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import styles from "./customSlideStyle.module.css";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const StyledSwiperWrapper = styled.div`
  & .swiper-horizontal > .swiper-pagination-progressbar,
  .swiper-pagination-progressbar.swiper-pagination-horizontal {
    position: absolute;
    width: 75%;
    height: 2px;
    right: 0;
    bottom: 10px;
    left: auto;
    top: auto;
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  & .swiper-pagination-progressbar-fill {
    background: #3cbb95;
  }
  & .swiper-button-prev {
    left: 4%;
    bottom: 0;
    position: absolute;
    top: auto;
    width: 50px;
    height: 25px;
    transition: all 0.3s ease-out;

    &:hover:after {
      color: #3cbb95;
    }
    @media screen and (max-width: 991px) {
      left: 2%;
    }
    @media screen and (max-width: 767px) {
      left: 35%;
    }
    @media screen and (max-width: 420px) {
      left: 25%;
    }
  }
  & .swiper-button-prev:after {
    transition: all 0.3s ease-out;
    content: "←";
    font-size: 3rem;
    font-family: "poppins sans-serif";
    color: #424242;
  }

  & .swiper-button-next {
    left: 12%;
    bottom: 0;
    position: absolute;
    top: auto;
    width: 50px;
    height: 25px;
    &:hover:after {
      color: #3cbb95;
    }
    @media screen and (max-width: 991px) {
      left: 12%;
    }
    @media screen and (max-width: 767px) {
      left: auto;
      right: 35%;
    }
    @media screen and (max-width: 420px) {
      right: 25%;
    }
  }
  & .swiper-button-next:after {
    transition: all 0.3s ease-out;
    content: "→";
    font-size: 3rem;
    font-family: "poppins sans-serif";
    color: #424242;
  }
`;

const ServiceSlides = ({ services }) => {
  return (
    <Col>
      <StyledSwiperWrapper>
        <Swiper
          centeredSlides={true}
          navigation={true}
          slidesPerView="auto"
          spaceBetween={50}
          pagination={{
            type: "progressbar",
          }}
          className={styles.swiper}
        >
          {services.map((service, index) => {
            return (
              <SwiperSlide key={index} className={` ${styles["swiper-slide"]}`}>
                {({ isActive }) => (
                  <ServiceCard
                    title={service.title}
                    icon={service.icon}
                    isActive={isActive}
                    description={service.description}
                  />
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </StyledSwiperWrapper>
    </Col>
  );
};
export default ServiceSlides;
