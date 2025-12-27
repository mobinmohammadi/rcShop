import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HomeSlider() {
    return (
        <>
            <Swiper
            dir='rtl'
                slidesPerView={4}
                spaceBetween={10}
                centeredSlides={false}

                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}

                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className=" w-50"
            >
                <SwiperSlide>
                    <div className="">
                        <img className='w-40' src="https://www.technolife.com/image/banner_CircleCategories_tbgdVo_c386a4dc-a6a7-4501-9ad1-5e1cce74999c.png" alt="" />
                    </div>
                </SwiperSlide>
                  <SwiperSlide>
                    <div className="">
                        <img className='w-40' src="https://www.technolife.com/image/banner_CircleCategories_tbgdVo_c386a4dc-a6a7-4501-9ad1-5e1cce74999c.png" alt="" />
                    </div>
                </SwiperSlide>
                  <SwiperSlide>
                    <div className="">
                        <img className='w-40' src="https://www.technolife.com/image/banner_CircleCategories_tbgdVo_c386a4dc-a6a7-4501-9ad1-5e1cce74999c.png" alt="" />
                    </div>
                </SwiperSlide>
                  <SwiperSlide>
                    <div className="">
                        <img className='w-40' src="https://www.technolife.com/image/banner_CircleCategories_tbgdVo_c386a4dc-a6a7-4501-9ad1-5e1cce74999c.png" alt="" />
                    </div>
                </SwiperSlide>
                  <SwiperSlide>
                    <div className="">
                        <img className='w-40' src="https://www.technolife.com/image/banner_CircleCategories_tbgdVo_c386a4dc-a6a7-4501-9ad1-5e1cce74999c.png" alt="" />
                    </div>
                </SwiperSlide>
                  <SwiperSlide>
                    <div className="">
                        <img className='w-40' src="https://www.technolife.com/image/banner_CircleCategories_tbgdVo_c386a4dc-a6a7-4501-9ad1-5e1cce74999c.png" alt="" />
                    </div>
                </SwiperSlide>
                
                  <SwiperSlide>
                    <div className="">
                        <img className='w-40' src="https://www.technolife.com/image/banner_CircleCategories_tbgdVo_c386a4dc-a6a7-4501-9ad1-5e1cce74999c.png" alt="" />
                    </div>
                </SwiperSlide>
                  <SwiperSlide>
                    <div className="">
                        <img className='w-40' src="https://www.technolife.com/image/banner_CircleCategories_tbgdVo_c386a4dc-a6a7-4501-9ad1-5e1cce74999c.png" alt="" />
                    </div>
                </SwiperSlide>
                

            </Swiper>
        </>
    );
}
