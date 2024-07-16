import React, { useEffect } from "react";
import { Iphone } from "../../resource";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const ProductCheaperCart = () => {
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
      className="ProductCheaperCart"
    >
      <div className="img">
        <img src={Iphone} alt="" />
      </div>
      <p>
        952 500 сум/мес <br />
        <span>10 520 000 сум</span>
      </p>
      <h3>Iphone 13 pro 256 Gb</h3>
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

export default ProductCheaperCart;
