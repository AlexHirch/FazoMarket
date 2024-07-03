import React, { useState } from "react";
import { wifi } from "../../resource";

const Categories = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className="categories">
        <button onClick={(e)=>{
          e.preventDefault()
          setVisible(!visible)
        }}>
          <i className="fa-solid fa-bars"></i> Категории
        </button>
        <ul>
          <li>
            <a className="active" href="">
              Наши магазины
            </a>
          </li>
          <li>
            <a href="">Моноблоки</a>
          </li>
          <li>
            <a href="">Телефоны, планшеты</a>
          </li>
          <li>
            <a href="">Ноутбуки</a>
          </li>
          <li>
            <a href="">Комплектующие</a>
          </li>
          <li>
            <a href="">Сетевое оборудование</a>
          </li>
          <li>
            <a href="">Оргтехника</a>
          </li>
        </ul>
      </div>
      <div className={visible ? "categoriesMenu" : "categoriesMenu visible"}>
        <div className="cMenu">
          <div className="cMenu-1">
            <ul>
              <li><span><i className="fa-solid fa-mobile-screen"></i>Телефоны, планшеты</span><i className="fa-solid fa-chevron-right"></i></li>
              <li><span><i className="fa-solid fa-laptop"></i>Ноутбуки</span><i className="fa-solid fa-chevron-right"></i></li>
              <li><span><i className="fa-solid fa-wifi"></i>Сетевое оборудование</span><i className="fa-solid fa-chevron-right"></i></li>
              <li><span><i className="fa-solid fa-video"></i>Видеонаблюдение</span><i className="fa-solid fa-chevron-right"></i></li>
              <li><span><i className="fa-solid fa-computer"></i>Компьютеры</span><i className="fa-solid fa-chevron-right"></i></li>
              <li><span><i className="fa-solid fa-print"></i>Техника для офиса</span><i className="fa-solid fa-chevron-right"></i></li>
              <li><span><i className="fa-solid fa-headphones-simple"></i>Аксессуары</span><i className="fa-solid fa-chevron-right"></i></li>
              <li><span><i className="fa-solid fa-kitchen-set"></i>Товары для дома</span><i className="fa-solid fa-chevron-right"></i></li>
              <li><span><i className="fa-solid fa-computer-mouse"></i>Периферийные устройства</span><i className="fa-solid fa-chevron-right"></i></li>
              <li><span><i className="fa-solid fa-network-wired"></i>IP Телефония</span><i className="fa-solid fa-chevron-right"></i></li>
            </ul>
            <ul className="cMenu-3">
              <h2>Сетевое оборудование</h2>
              <li>Коммутаторы</li>
              <li>Точки доступа Wi-Fi</li>
              <li>Медиаконверторы</li>
              <li>ADSL роутеры</li>
              <li>Сетевые адаптеры</li>
              <li>Wi-Fi роутеры и маршрутизаторы</li>
              <li>Инжекторы</li>
              <li>Повторители сигнала</li>
              <li>Прочее сетевое оборудование</li>
              <li>Сетевой кабель (Ethernet)</li>
            </ul>
          </div>
          <div className="cMenu-2">
            <img src={wifi} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
