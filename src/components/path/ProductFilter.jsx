import React, { useState } from "react";
import { Button, Filter, ProductCheaperCart } from "../../ui";
import Navigates from "../../ui/buttons/navigates";
import ChiperDeal1 from "../../ui/cd1";

const ProductFilter = ({navigate}) => {
  const [visible, setVisible] = useState(false)
  const visibleHandle = ()=>{
    setVisible(!visible)
  }
  return (
    <div className="ProductFilter">
      <Navigates navigate={navigate}/>
      <Filter />
      <div className="recomendet">
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
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Button value={"Показать еще"} color={"white"} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            gap: 10,
            height: "max-content",
            alignItems: "center",
          }}
        >
          <i style={{ color: "gray" }} class="fa-solid fa-chevron-left"></i>
          <Button value={"1"} color={"path active"} />
          <Button value={"2"} color={"path"} />
          <Button value={"3"} color={"path"} />
          <Button value={"4"} color={"path"} />
          <p style={{ fontSize: 20, color: "gray" }}>...</p>
          <Button value={"28"} color={"path"} />
          <Button value={"29"} color={"path"} />
          <i style={{ color: "gray" }} class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <div
        className="popular_categories_and_models"
        style={{ width: "100%", paddingTop: 30, paddingBottom: 20 }}
      >
        <h2 style={{ width: "100%" }}>Популярные категории и модели</h2>
        <p>
          <span>Realme</span>
          <span>Игровые</span>
          <span>Оптимальные</span>
          <span>Смартфоны Samsung</span>
          <span>Смартфоны Apple</span>
          <span>Смартфоны</span>
          <span>Смартфоны Samsung</span>
          <span>Смартфоны</span>
          <span>Игровые</span>
        </p>
      </div>
      <ChiperDeal1 />
      <div className={visible ? "accordion active" : "accordion"}>
        <h3>Где купить надежный смартфон в Ташкенте?</h3>
        <p>
          Ищете, где в Ташкенте выгодно заказать новый смартфон? Хотите найти
          надежного оптового поставщика мобильных телефонов для собственного
          розничного магазина? Сами занимаетесь поставками брендовых смартфонов
          в Ташкенте и планируете расширить рынок сбыта? Торговый интернет-центр
          Glotr.Uz — лучший выбор для решения этих и многих других задач. Здесь
          предлагаются оптимальные условия для покупателей и продавцов.
          Разнообразный ассортимент, удобный пользовательский интерфейс,
          выгодные тарифы на публикацию объявлений о продаже смартфонов в
          Ташкенте, высокий целевой трафик — только некоторые из преимуществ
          нашего проекта.
          <span></span>
        </p>

        <h4  onClick={()=>visibleHandle()} >{visible ? 'Показать меньше':'Показать больше'}</h4>
      </div>
    </div>
  );
};

export default ProductFilter;
