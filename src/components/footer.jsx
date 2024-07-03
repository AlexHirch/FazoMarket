import React from "react";
import { LogoWhite } from "../resource";

const Footer = () => {
  return (
    <footer>
      <div className="left">
        <ul>
          <li>
            <img src={LogoWhite} alt="" />
          </li>
          <li>
            <p>График работы колл-центра</p>
            <p>Понедельник - Суббота: 9:00–18:00</p>
          </li>
          <li>
            <p>Колл-центр:</p>
            <p>+ 998 (71) 205-93-93</p>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul>
            <li><p>Категории</p></li>
            <li><p>Ноутбуки</p></li>
            <li><p>Игровые кресла</p></li>
            <li><p>Телефоны</p></li>
            <li><p>Моноблоки</p></li>
            <li><p>Модули памяти</p></li>
        </ul>
        <ul>
            <li><p>Общее</p></li>
            <li><p>Новости</p></li>
            <li><p>О нас</p></li>
            <li><p>Наши магазины</p></li>
            <li><p>Политика конфиденциальности</p></li>
            <li><p>Правила программы лояльности</p></li>
            <li><p>Контакты</p></li>
        </ul>
        <ul>
            <li><p>Покупателям</p></li>
            <li><p>Покупка в рассрочку</p></li>
            <li><p>Доставка и оплата</p></li>
            <li><p>Правила покупок с cashback</p></li>
            <li><p>Возврат / Обмен</p></li>
            <li><p>Правила пользования купонами</p></li>
        </ul>
      </div>
      <div className="social">
        <span><i class="fa-brands fa-telegram"></i></span>
        <span><i class="fa-brands fa-instagram"></i></span>
        <span><i class="fa-brands fa-facebook-f"></i></span>
        <span><i class="fa-brands fa-youtube"></i></span>
      </div>
    </footer>
  );
};

export default Footer;
