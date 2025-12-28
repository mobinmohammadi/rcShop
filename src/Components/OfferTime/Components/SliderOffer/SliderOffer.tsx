import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import BoxItemOffer from '../BoxItemOffer';

export default function SliderOffer() {
    return (
        <>
            <Swiper
                slidesPerView={6}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                // modules={[Pagination]}   
                className="mySwiperOffer"
            >
                <SwiperSlide>          <BoxItemOffer />
                </SwiperSlide>
                <SwiperSlide>          <BoxItemOffer />
                </SwiperSlide>
                <SwiperSlide>          <BoxItemOffer />
                </SwiperSlide>
                <SwiperSlide>          <BoxItemOffer />
                </SwiperSlide>
                <SwiperSlide>          <BoxItemOffer />
                </SwiperSlide>
                <SwiperSlide>          <BoxItemOffer />
                </SwiperSlide>
                <SwiperSlide>          <BoxItemOffer />
                </SwiperSlide>
                <SwiperSlide>          <BoxItemOffer />
                </SwiperSlide>
                <SwiperSlide>          <BoxItemOffer />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
