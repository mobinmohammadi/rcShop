// Import Swiper React components
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// @ts-ignore

import 'swiper/css';
// @ts-ignore

import 'swiper/css/pagination';

import './styles.css';

interface ISliderProps {
    data: IProductSlider[]
}
// import required modules
import BoxItemOffer from '../BoxItemOffer';
import type { IProductSlider } from '../../../../src/global';
export default function Slider({ data }: ISliderProps) {


    return (
        <>
            <Swiper
                slidesPerView={1}

                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20,

                    },
                    568: {
                        slidesPerView: 3,
                        spaceBetween: 20,

                    },
                     760: {
                        slidesPerView: 4,
                        spaceBetween: 20,

                    }
                    ,
                     920: {
                        slidesPerView: 6,
                        spaceBetween: 20,

                    }
                }}

                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                className={`mySwiperOffer 
                ${'[&_.swiper-slide]:border-slate-300   [&_.swiper-slide]:pl-2 [&_.swiper-slide]:pr-2 [&_.swiper-slide]:border-l'}   `}
            >

                {data?.map(item => (
                    <SwiperSlide>
                        <BoxItemOffer product={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
