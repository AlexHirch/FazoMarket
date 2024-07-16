import React, { useEffect } from "react";
import {
  Brand_artel,
  Brand_canon,
  Brand_lg,
  Brand_mi,
  Brand_samsung,
} from "../../resource";
import Aos from "aos";
import "aos/dist/aos.css";

const Brends = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="500"
      data-aos-easing="ease-in-sine"
      className="Brends"
    >
      <div className="texttt" style={{ paddingBottom: "20px" }}>
        <h4>Бренды</h4>
        <p style={{ display: "flex", gap: 10 }}>
          <a href="#" style={{ fontSize: "20px" }}>
            <i style={{ width: "40px" }} className="fa-solid fa-arrow-left"></i>
          </a>
          <a href="#" style={{ fontSize: "20px" }}>
            <i
              style={{ width: "40px" }}
              className="fa-solid fa-arrow-right"
            ></i>
          </a>
        </p>
      </div>
      <span>
        <img src={Brand_canon} alt="" />
        <img src={Brand_mi} alt="" />
        <img src={Brand_lg} alt="" />
        <img src={Brand_samsung} alt="" />
        <img src={Brand_artel} alt="" />
      </span>
    </div>
  );
};

export default Brends;
