import React from "react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Camera, Computer, Notebook, Phones } from "../resource";

const PopularCategories = () => {
  return (
    <div className="popularCategories">
      <h3 className="hotCategories">Популярные категории</h3>
      <div className="slider1">
        <Swiper
          modules={[Pagination, Navigation, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="l1">
              <h4>Компьютеры</h4>
            </div>
            <div className="r1">
              <img src={Computer} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="l1">
              <h4>Телефоны, планшеты</h4>
            </div>
            <div className="r1">
              <img src={Phones} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="l1">
              <h4>Ноутбуки</h4>
            </div>
            <div className="r1">
              <img src={Notebook} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="l1">
              <h4>Товары для офиса</h4>
            </div>
            <div className="r1">
              <img src={Camera} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="l1">
              <h4>Компьютеры</h4>
            </div>
            <div className="r1">
              <img src={Computer} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="l1">
              <h4>Телефоны, планшеты</h4>
            </div>
            <div className="r1">
              <img src={Phones} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="l1">
              <h4>Ноутбуки</h4>
            </div>
            <div className="r1">
              <img src={Notebook} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="l1">
              <h4>Товары для офиса</h4>
            </div>
            <div className="r1">
              <img src={Camera} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="sliderMedia1">
        <Swiper
          modules={[Pagination, Navigation, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1.5}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="r1">
              <img src={Computer} alt="" />
            </div>
            <div className="l1">
              <h4>Компьютеры</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="r1">
              <img src={Phones} alt="" />
            </div>
            <div className="l1">
              <h4>Телефоны, планшеты</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="r1">
              <img src={Notebook} alt="" />
            </div>
            <div className="l1">
              <h4>Ноутбуки</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="r1">
              <img src={Camera} alt="" />
            </div>
            <div className="l1">
              <h4>Товары для офиса</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PopularCategories;
