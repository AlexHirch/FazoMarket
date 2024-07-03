import React, { useState } from "react";
import { Logo, logo1 } from "../resource";

const Nav = () => {
  const [selectedValue, setSelectedValue] = useState("Все категории");
  const [visible, setVisible] = useState(false);

  const visibleButton = ()=>{
    setVisible(!visible)
  }

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div className="navbar">
        <div className="FazoLogo">
          <img src={Logo} alt="Fazo" />
        </div>
        <div className="navSearcr">
          <form>
            <span>
              <select onChange={handleSelectChange}>
                <option value="Все категории">Все категории</option>
                <option value="Телефоны, планшеты">Телефоны, планшеты</option>
                <option value="Ноутбуки">Ноутбуки</option>
                <option value="Сетевое оборудование">
                  Сетевое оборудование
                </option>
                <option value="Видеонаблюдение">Видеонаблюдение</option>
                <option value="Компьютеры">Компьютеры</option>
                <option value="Техника для офиса">Техника для офиса</option>
                <option value="Аксессуары">Аксессуары</option>
                <option value="Товары для дома">Товары для дома</option>
                <option value="Периферийные устройства">
                  Периферийные устройства
                </option>
                <option value="IP Телефония">IP Телефония</option>
              </select>
              <input type="text" placeholder={selectedValue} />
              <i className="fa-solid fa-microphone"></i>
            </span>
            <button>
              <i className="fa-solid fa-magnifying-glass"></i> Поиск
            </button>
          </form>
          <div className="location">
            <p>
              <i className="fa-solid fa-phone"></i>
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i>Ташкент
            </p>
          </div>
        </div>
        <div className="buttonBox">
          <button>
            <i className="fa-regular fa-user"></i>
            <br />
            Войти
          </button>
          <button>
            <i className="fa-solid fa-scale-balanced"></i>
            <br />
            <span>12</span>
            Сравнение
          </button>
          <button>
            <i className="fa-regular fa-heart"></i>
            <br />
            <span>5</span>
            Избранное
          </button>
          <button>
            <i className="fa-solid fa-cart-shopping"></i>
            <br />
            <span>4</span>
            Корзина
          </button>
        </div>
      </div>
      <div className="navMedia">
        <button onClick={()=>visibleButton()}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <form>
          <input type="text" placeholder={selectedValue} />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <div className={visible ? "navMenu" : "navMenu active" }>
            <div className="main">
              <span className="close">
                <img src={logo1} alt="" />
                <i onClick={()=>visibleButton()} className="fa-solid fa-xmark"></i>
              </span>
              <div className="buttonBox">
                <button>
                  <i className="fa-regular fa-user"></i>
                  Войти
                </button>
                <hr />
                <button>Регистрация</button>
              </div>
              <ul>
                <li>
                  <a className="active" href="">
                    <i className="fa-solid fa-book"></i>Наши магазины
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-bitcoin"></i>B2B продажи
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-regular fa-credit-card"></i>Покупка в рассрочку
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-solid fa-wallet"></i>Способы оплаты
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-solid fa-shield-halved"></i>Гарантия на товары
                  </a>
                </li>
              </ul>

              <div className="language">
                <button className="active">Рус</button>
                <button>Узб</button>
              </div>
              <p>
                <i className="fa-solid fa-phone"></i>+998 95 123 55 88
              </p>
            </div>
            <span onClick={()=>visibleButton()} className="bhc"></span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Nav;
