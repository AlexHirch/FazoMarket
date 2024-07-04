import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logo1 } from "../../resource";

const CategoriesMobile = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="CategoriesMobile">
      <button
        onClick={(e) => {
          e.preventDefault();
          setVisible(!visible);
        }}
      >
        <i className="fa-solid fa-bars"></i> Категории
      </button>
      <ul className={visible ? "menuMobile" : "menuMobile active"}>
        <span className="close">
          <img src={logo1} alt="" />
          <i
            onClick={() => {
              setVisible(!visible);
            }}
            className="fa-solid fa-xmark"
          ></i>
        </span>
        <NavLink
          to={"/filter"}
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <span>
            <i className="fa-solid fa-mobile-screen"></i>Телефоны, планшеты
          </span>
          <i className="fa-solid fa-chevron-right"></i>
        </NavLink>
        <NavLink
          to={"/filter"}
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <span>
            <i className="fa-solid fa-laptop"></i>Ноутбуки
          </span>
          <i className="fa-solid fa-chevron-right"></i>
        </NavLink>
        <NavLink
          to={"/filter"}
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <span>
            <i className="fa-solid fa-wifi"></i>Сетевое оборудование
          </span>
          <i className="fa-solid fa-chevron-right"></i>
        </NavLink>
        <NavLink
          to={"/filter"}
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <span>
            <i className="fa-solid fa-video"></i>Видеонаблюдение
          </span>
          <i className="fa-solid fa-chevron-right"></i>
        </NavLink>
        <NavLink
          to={"/filter"}
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <span>
            <i className="fa-solid fa-computer"></i>Компьютеры
          </span>
          <i className="fa-solid fa-chevron-right"></i>
        </NavLink>
        <NavLink
          to={"/filter"}
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <span>
            <i className="fa-solid fa-print"></i>Техника для офиса
          </span>
          <i className="fa-solid fa-chevron-right"></i>
        </NavLink>
        <NavLink
          to={"/filter"}
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <span>
            <i className="fa-solid fa-headphones-simple"></i>Аксессуары
          </span>
          <i className="fa-solid fa-chevron-right"></i>
        </NavLink>
        <NavLink
          to={"/filter"}
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <span>
            <i className="fa-solid fa-kitchen-set"></i>Товары для дома
          </span>
          <i className="fa-solid fa-chevron-right"></i>
        </NavLink>
        <NavLink
          to={"/filter"}
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <span>
            <i className="fa-solid fa-computer-mouse"></i>Периферийные
            устройства
          </span>
          <i className="fa-solid fa-chevron-right"></i>
        </NavLink>
        <NavLink
          to={"/filter"}
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <span>
            <i className="fa-solid fa-network-wired"></i>IP Телефония
          </span>
          <i className="fa-solid fa-chevron-right"></i>
        </NavLink>
      </ul>
    </div>
  );
};

export default CategoriesMobile;
