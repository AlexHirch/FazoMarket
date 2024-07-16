import React, { useEffect } from "react";
import { Iphone } from "../resource";
import Aos from "aos";
import "aos/dist/aos.css";

const LikesProduct = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="flip-left"
      data-aos-offset="100"
      data-aos-duration="600"
      data-aos-easing="ease-in-sine"
      className="LikesProduct"
    >
      <div className="btn-xmark">
        <i className="fa-solid fa-xmark"></i>
      </div>
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
          <i className="fa-solid fa-scale-balanced"></i>
        </button>
      </div>
    </div>
  );
};

export default LikesProduct;
