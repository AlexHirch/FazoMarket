import { useEffect } from "react";
import {
  Brends,
  OneProduct,
  PopularCategories,
  ProductCheaperCart,
  ProductMiniCart,
  Slider,
} from "../ui";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-sine"
      style={{ userSelect: "none" }}
    >
      <Slider />
      <div className="Hot-Deals">
        <div className="texttt">
          <h4>Горящие предложения:</h4>
          <a href="#">
            Посмотреть все<i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <ProductMiniCart />
        <ProductMiniCart />
        <ProductMiniCart />
        <ProductMiniCart />
        <ProductMiniCart />
        <ProductMiniCart />
        <ProductMiniCart />
        <ProductMiniCart />
        <ProductMiniCart />
        <ProductMiniCart />
      </div>
      <PopularCategories />
      <OneProduct />
      <div className="Cheaper-Deals">
        <div className="texttt">
          <h4>Товары дешевле:</h4>
          <a href="#">
            Посмотреть все<i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
      </div>
      <div className="recomendet">
        <div className="texttt">
          <h4>Рекомендуем</h4>
          <a href="#">
            Посмотреть все<i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="discount">
          <h1>%</h1>
          <p>Ликвидация</p>
          <h2>
            до <span>45%</span>
          </h2>
        </div>
        <div className="Cheaper-Deals1">
          <ProductCheaperCart />
          <ProductCheaperCart />
          <ProductCheaperCart />
          <ProductCheaperCart />
          <ProductCheaperCart />
          <ProductCheaperCart />
          <ProductCheaperCart />
          <ProductCheaperCart />
        </div>
      </div>
      <Brends />
    </div>
  );
};

export default Home;
