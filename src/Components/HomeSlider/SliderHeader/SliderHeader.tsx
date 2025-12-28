import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useRef } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';

export default function SliderHeader() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="relative container-custom ">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
          autoplay={{
          delay:  500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="my-slider-2"
      >
        <SwiperSlide>
          <img src="https://www.technolife.com/image/banner_SlideBanner_LaTbSD_b1cc98b0-46fc-405f-bb8f-606243e01838.png" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://www.technolife.com/image/banner_SlideBanner_LaTbSD_b1cc98b0-46fc-405f-bb8f-606243e01838.png" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://www.technolife.com/image/banner_SlideBanner_LaTbSD_b1cc98b0-46fc-405f-bb8f-606243e01838.png" />
        </SwiperSlide>
      </Swiper>

      <div className="custom-nav z-10 flex items-center gap-4 *:bg-white bottom-5 right-5 absolute">
        <button
        className="custom-prev w-20 h-10 rounded-sm"
        onClick={() => swiperRef.current?.slidePrev()}
        >
          ▶
        </button>
        <button
          className="custom-next w-20 h-10 rounded-sm"
          onClick={() => swiperRef.current?.slideNext()}
        >
          ◀
        </button>

      </div>
    </div>
  );
}
