import React, { useEffect } from "react";
import { product1 } from "../../resource";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const ProductMiniCart = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="500"
      data-aos-easing="ease-in-sine"
      onClick={() => navigate("/description")}
      className="ProductMiniCart"
    >
      <div className="img">
        <img src={product1} alt="" />
      </div>
      <p>
        <span>1 373 000 сум</span>1 304 000 сум
      </p>
      <h3>Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite</h3>
      <span>Предложение заканчивается через:</span>
      <h4>
        <span>
          27 <br />
          ДНЕЙ
        </span>
        <span>
          21 <br />
          ЧАСОВ
        </span>
        <span>
          32 <br />
          МИНУТ
        </span>
        <span>
          05 <br />
          СЕКУНД
        </span>
      </h4>
      <div className="btn-group">
        <button>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
        <button>
          <i className="fa-regular fa-heart"></i>
        </button>
        <button>
          <i className="fa-solid fa-scale-balanced"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductMiniCart;
