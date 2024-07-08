import React from "react";
import ProductCheaperCart from "./homePage/product-cheaper-cart";

const ChiperDeal1 = () => {
  return (
    <div className="Cheaper-Deals1">
      <div className="texttt">
        <h4>Рекомендуем</h4>
        <a href="#">
          Посмотреть все<i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <ProductCheaperCart />
      <ProductCheaperCart />
      <ProductCheaperCart />
      <ProductCheaperCart />
      <ProductCheaperCart />
    </div>
  );
};

export default ChiperDeal1;
