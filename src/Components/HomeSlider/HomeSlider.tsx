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
                <><div className="container-custom">

                        <Swiper
                                dir='rtl'
                                slidesPerView={4}
                                // onDurationChange={'30'}
                                spaceBetween={10}
                                centeredSlides={false}

                                // autoplay={{
                                //         delay: 2500,

                                //         disableOnInteraction: false,
                                // }}

                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}

                                className="my-slider-1"
                        >
                                <div className="">

                                        <SwiperSlide>
                                                <img className='w-36 rounded-full border-sky-800 hover:border-gray-800   border-2 p-1 hover:p-2 cursor-pointer hover:border-4 hover:border-l- transition-all ' src="https://www.technolife.com/image/banner_CircleCategories_YMlvtP_a870b1ad-f6f4-4dde-9df1-49ae0a1ed412.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                                <img className='w-36 rounded-full border-sky-800 hover:border-gray-800   border-2 p-1 hover:p-2 cursor-pointer hover:border-4 hover:border-l- transition-all ' src="https://www.technolife.com/image/banner_CircleCategories_tbgdVo_c386a4dc-a6a7-4501-9ad1-5e1cce74999c.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                                <img className='w-36 rounded-full border-sky-800 hover:border-gray-800   border-2 p-1 hover:p-2 cursor-pointer hover:border-4 hover:border-l- transition-all ' src="https://www.technolife.com/image/banner_CircleCategories_k9bM7G_e83acda9-815d-4c4c-b338-c1d41d465c34.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                                <img className='w-36 rounded-full border-sky-800 hover:border-gray-800   border-2 p-1 hover:p-2 cursor-pointer hover:border-4 hover:border-l- transition-all ' src="https://www.technolife.com/image/banner_CircleCategories_6A3a14_4aad40e6-0c4f-43fc-bfe1-52197541dc44.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                                <img className='w-36 rounded-full border-sky-800 hover:border-gray-800   border-2 p-1 hover:p-2 cursor-pointer hover:border-4 hover:border-l- transition-all ' src="https://www.technolife.com/image/banner_CircleCategories_W5Hlwt_8071b4bf-1f57-4298-ad8d-86b6a9575719.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                                <img className='w-36 rounded-full border-sky-800 hover:border-gray-800   border-2 p-1 hover:p-2 cursor-pointer hover:border-4 hover:border-l- transition-all ' src="https://www.technolife.com/image/banner_CircleCategories_FyU2QG_90e5aa89-062f-4e65-8fc0-8c088908a161.png" alt="" />

                                        </SwiperSlide>


                                </div>


                        </Swiper>
                </div>
                </>
        );
}
