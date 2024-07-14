import React, { useState } from "react";
import { Logo, logo1 } from "../../resource";
import { useNavigate } from "react-router-dom";

const Nav = ({ setToggleState }) => {
  const [selectedValue, setSelectedValue] = useState("Все категории");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const navigatetoss = (i) => {
    setToggleState(i);
    navigate("/installment");
    setVisible(!visible);
  };

  const visibleButton = () => {
    setVisible(!visible);
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    navigate("/search");
  };

  return (
    <>
      <div className="navbar">
        <div onClick={()=>navigate('/')} className="FazoLogo">
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
              <input
                onChange={() => handleSearch()}
                type="text"
                placeholder={selectedValue}
              />
              <i className="fa-solid fa-microphone"></i>
            </span>
            <button onClick={(event) => handleSearch(event)}>
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
          <button onClick={()=>navigate('/profil')}>
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
          <button onClick={(e)=>{
            e.preventDefault()
            navigate("/likes")
          }}>
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
        <button onClick={() => visibleButton()}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <form>
          <input type="text" placeholder={selectedValue} />
          <button onClick={(event) => handleSearch(event)}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <div className={visible ? "navMenu" : "navMenu active"}>
            <div className="main">
              <span className="close">
                <img src={logo1} alt="" />
                <i
                  onClick={() => visibleButton()}
                  className="fa-solid fa-xmark"
                ></i>
              </span>
              <div className="buttonBox">
                <button onClick={()=>navigate('/profil')}>
                  <i className="fa-regular fa-user"></i>
                  Войти
                </button>
                <hr />
                <button>Регистрация</button>
              </div>
              <ul>
                <li>
                  <p onClick={() => navigatetoss(7)}>
                    <i className="fa-solid fa-book"></i>Наши магазины
                  </p>
                </li>
                <li>
                  <p onClick={() => navigatetoss(9)}>
                    <i className="fa-brands fa-bitcoin"></i>B2B продажи
                  </p>
                </li>
                <li>
                  <p onClick={() => navigatetoss(1)}>
                    <i className="fa-regular fa-credit-card"></i>Покупка в
                    рассрочку
                  </p>
                </li>
                <li>
                  <p onClick={() => navigatetoss(2)}>
                    <i className="fa-solid fa-wallet"></i>Способы оплаты
                  </p>
                </li>
                <li>
                  <p onClick={() => navigatetoss(3)}>
                    <i className="fa-solid fa-shield-halved"></i>Гарантия на
                    товары
                  </p>
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
            <span onClick={() => visibleButton()} className="bhc"></span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Nav;
