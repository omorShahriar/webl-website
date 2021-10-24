import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Pagination,Autoplay} from 'swiper';


import {  Col } from 'styled-bootstrap-grid';
import { reviews } from '../../../../assets/seed'
import ReviewCard from './ReviewCard';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from '../../../CustomStyles/customSlideStyle.module.css'

SwiperCore.use([Pagination,Autoplay]);

export const ReviewsSlide = () => {
    return (
        <Col>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
}}
                pagination={{
                    "dynamicBullets": true
                }}
             
               
                className={styles.swiper}
            >
                {
                    reviews.map((review,index) => {
                            return (
                               
                                    <SwiperSlide key={index}>
                                        <ReviewCard name={review.name} text={review.text} />
                                    </SwiperSlide>
                                )}
                                
                            )
                }
                
                
            </Swiper>
        </Col>
    )
}