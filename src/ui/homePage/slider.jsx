import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { slide1, slide2 } from "../../resource";

const Slider = () => {
  return (
    <div>
      <div className="slider">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="sliderMedia">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src={slide2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
