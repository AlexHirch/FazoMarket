import { Switch, TextField } from "@mui/material";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Profil = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div 
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine" className="Profil">
      <div className="pro-1">
        <p>
          <i className="fa-regular fa-user"></i>
          <span>
            Shukurillo Tojonazarov <span>+998 99 0333848</span>
          </span>
        </p>
        <hr />
        <p>
          <i className="fa-solid fa-basket-shopping"></i>Мои рассрочки
        </p>
        <p>
          <i className="fa-regular fa-file-lines"></i>История платежей
        </p>
        <p>
          <i className="fa-regular fa-clock"></i>Онлайн заказы
        </p>
        <p>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>Выйти{" "}
        </p>
      </div>
      <div className="pro-2">
        <div className="Personal">
          <div className="per-1">
            <i className="fa-regular fa-user"></i>
            <p>Личные данные</p>
            <button className="btn-white">Изменит</button>
          </div>
          <hr />
          <div className="per-2">
            <p>Shukurillo Tojinazarov</p>
            <p>Телефон: +998 99 0333848</p>
          </div>
        </div>
        <div className="myCart">
          <div className="per-1">
            <i className="fa-regular fa-credit-card"></i>
            <p>Моя карта</p>
          </div>
          <hr />
          <div className="per-2">
            <p>Отсутствует</p>
          </div>
        </div>
      </div>
      <div className="pro-3">
        <div className="notification">
          <i class="fa-regular fa-envelope"></i>
          <p>Уведомления</p>
          <h5>
            <Switch color="warning" />
            По SMS
          </h5>
        </div>
        <form className="adress_dostavki">
          <div className="per-1">
            <i class="fa-solid fa-truck"></i>
            <p>Адрес доставки</p>
            <button type="submit" className="btn-white">
              Добавить
            </button>
          </div>
          <div className="input-group">
            <TextField
              sx={{
                width: "100%",
              }}
              id="Name"
              label="Улица"
              variant="outlined"
              size="small"
            />
            <TextField
              sx={{
                width: "48%",
              }}
              id="Name"
              label="Дом"
              variant="outlined"
              size="small"
            />
            <TextField
              sx={{
                width: "48x%",
              }}
              id="Name"
              label="Квартира"
              variant="outlined"
              size="small"
            />
            <label className="deffadres" htmlFor="defAdress">
              <input type="checkbox" id="defAdress" /> Адрес по умолчанию
            </label>
            <div className="btn-group">
            <button className="btn-red">Сахранит</button>
            <button className="btn-white">Отмена</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profil;
