import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './SliderHeader.css';

import { Navigation } from 'swiper/modules';

export default function SliderHeader() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="my-slider-2">
        <SwiperSlide><img src="https://www.technolife.com/image/banner_SlideBanner_VKZET4_afb5639e-bd8c-4782-8ad8-1577811b8359.png" alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
