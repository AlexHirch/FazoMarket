import React, { useState } from "react";
import { wifi } from "../../resource";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="categories">
        <button
          onClick={(e) => {
            e.preventDefault();
            setVisible(!visible);
          }}
        >
          <i className="fa-solid fa-bars"></i> Категории
        </button>
        <ul>
          <li
            onClick={(e) => {
              e.preventDefault();
              setVisible(false);
            }}
          >
            <a className="active" href="">
              Наши магазины
            </a>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              setVisible(false);
            }}
          >
            <a href="">Моноблоки</a>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              setVisible(false);
            }}
          >
            <a href="">Телефоны, планшеты</a>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              setVisible(false);
            }}
          >
            <a href="">Ноутбуки</a>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              setVisible(false);
            }}
          >
            <a href="">Комплектующие</a>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              setVisible(false);
            }}
          >
            <a href="">Сетевое оборудование</a>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              setVisible(false);
            }}
          >
            <a href="">Оргтехника</a>
          </li>
        </ul>
      </div>
      <div className={visible ? "categoriesMenu" : "categoriesMenu visible"}>
        <div className="cMenu">
          <div className="cMenu-1">
            <ul>
              <li
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <NavLink to={"/filter"}>
                  <p>
                    <i className="fa-solid fa-mobile-screen"></i>Телефоны,
                    планшеты
                  </p>
                  <i className="fa-solid fa-chevron-right"></i>
                </NavLink>
              </li>
              <li
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <NavLink to={"/filter"}>
                  <p>
                    <i className="fa-solid fa-laptop"></i>Ноутбуки
                  </p>
                  <i className="fa-solid fa-chevron-right"></i>
                </NavLink>
              </li>
              <li
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <NavLink to={"/filter"}>
                  <p>
                    <i className="fa-solid fa-wifi"></i>Сетевое оборудование
                  </p>
                  <i className="fa-solid fa-chevron-right"></i>
                </NavLink>
              </li>
              <li
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <NavLink to={"/filter"}>
                  <p>
                    <i className="fa-solid fa-video"></i>Видеонаблюдениее
                  </p>
                  <i className="fa-solid fa-chevron-right"></i>
                </NavLink>
              </li>
              <li
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <NavLink to={"/filter"}>
                  <p>
                    <i className="fa-solid fa-computer"></i>Компьютеры
                  </p>
                  <i className="fa-solid fa-chevron-right"></i>
                </NavLink>
              </li>
              <li
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <NavLink to={"/filter"}>
                  <p>
                    <i className="fa-solid fa-print"></i>Техника для офиса
                  </p>
                  <i className="fa-solid fa-chevron-right"></i>
                </NavLink>
              </li>
              <li
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <NavLink to={"/filter"}>
                  <p>
                    <i className="fa-solid fa-headphones-simple"></i>Аксессуары
                  </p>
                  <i className="fa-solid fa-chevron-right"></i>
                </NavLink>
              </li>
              <li
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <NavLink to={"/filter"}>
                  <p>
                    <i className="fa-solid fa-kitchen-set"></i>Товары для дома
                  </p>
                  <i className="fa-solid fa-chevron-right"></i>
                </NavLink>
              </li>
              <li
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <NavLink to={"/filter"}>
                  <p>
                    <i className="fa-solid fa-computer-mouse"></i>Периферийные
                    устройства
                  </p>
                  <i className="fa-solid fa-chevron-right"></i>
                </NavLink>
              </li>
              <li
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <NavLink to={"/filter"}>
                  <p>
                    <i className="fa-solid fa-network-wired"></i>IP Телефония
                  </p>
                  <i className="fa-solid fa-chevron-right"></i>
                </NavLink>
              </li>
            </ul>
            <ul className="cMenu-3">
              <h2>Сетевое оборудование</h2>
              <li
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <NavLink to={"/filter"}>Коммутаторы</NavLink>
              </li>
              <li
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <NavLink to={"/filter"}>Точки доступа Wi-Fi</NavLink>
              </li>
              <li
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <NavLink to={"/filter"}>Медиаконверторы</NavLink>
              </li>
              <li
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <NavLink to={"/filter"}>ADSL роутеры</NavLink>
              </li>
              <li
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <NavLink to={"/filter"}>Сетевые адаптеры</NavLink>
              </li>
              <li
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <NavLink to={"/filter"}>Wi-Fi роутеры и маршрутизаторы</NavLink>
              </li>
              <li
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <NavLink to={"/filter"}>Инжекторы</NavLink>
              </li>
              <li
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <NavLink to={"/filter"}>Повторители сигнала</NavLink>
              </li>
              <li
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <NavLink to={"/filter"}>Прочее сетевое оборудование</NavLink>
              </li>
              <li
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <NavLink to={"/filter"}>Сетевой кабель (Ethernet)</NavLink>
              </li>
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
