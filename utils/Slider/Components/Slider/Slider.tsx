// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import BoxItemOffer from '../BoxItemOffer';

export default function Slider(OfferTimes: boolean) {
    return (
        <>
            <Swiper
                slidesPerView={6}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                // modules={[Pagination]}   
                className={`mySwiperOffer 
    ${!OfferTimes && '[&_.swiper-slide]:border-slate-300   [&_.swiper-slide]:pl-2 [&_.swiper-slide]:pr-2 [&_.swiper-slide]:border-l'}   `}
            >
                <SwiperSlide>          <BoxItemOffer />
                </SwiperSlide>
                <SwiperSlide>          <BoxItemOffer />
                </SwiperSlide>
                <SwiperSlide>          <BoxItemOffer />
                </SwiperSlide>
                <SwiperSlide>          <BoxItemOffer />
                </SwiperSlide>
                <SwiperSlide>
                    <BoxItemOffer />
                </SwiperSlide>
                <SwiperSlide>
                    <BoxItemOffer />
                </SwiperSlide>
                <SwiperSlide>
                    <BoxItemOffer />
                </SwiperSlide>
                <SwiperSlide>          <BoxItemOffer />
                </SwiperSlide>
                <SwiperSlide>          <BoxItemOffer />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
