import React, { useEffect } from "react";
import { Button } from "..";
import { A892 } from "../../resource";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Aos from "aos";
import "aos/dist/aos.css";

const OneProduct = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="500"
      data-aos-easing="ease-in-sine"
      className="OneProduct"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
      >
        <SwiperSlide>
          <div className="d-flex">
            <div className="text">
              <h2>Apple iPhone X 64 ГБ</h2>
              <p>
                Совершенно новый дисплей Super Retina с диагональю 5,8 дюйма,
                который удобно лежит в руке и потрясающие выглядит, — это и есть
                iPhone X.
              </p>
            </div>
            <div className="image">
              <img src={A892} alt="" />
            </div>
            <div className="price">
              <p>1 250 900 Сум</p>
              <span>2 220 900 Сум</span>
              <Button value={"Показать еще"} color={"white"} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex">
            <div className="text">
              <h2>Apple iPhone X 64 ГБ</h2>
              <p>
                Совершенно новый дисплей Super Retina с диагональю 5,8 дюйма,
                который удобно лежит в руке и потрясающие выглядит, — это и есть
                iPhone X.
              </p>
            </div>
            <div className="image">
              <img src={A892} alt="" />
            </div>
            <div className="price">
              <p>1 250 900 Сум</p>
              <span>2 220 900 Сум</span>
              <Button value={"Показать еще"} color={"white"} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OneProduct;
