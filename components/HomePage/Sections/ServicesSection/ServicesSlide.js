import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import { Col } from "styled-bootstrap-grid";

import { ServiceCard } from "./ServiceCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "../../../CustomStyles/customSlideStyle.module.css";

SwiperCore.use([Pagination]);

export const ServiceSlides = ({ services }) => {
  return (
    <Col>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        className={styles.swiper}
      >
        {services.map((service, index) => {
          return (
            <SwiperSlide key={index}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Col>
  );
};
