import React, { useState } from "react";
import MyButton from "../../ui/buttons/button";
import { Notebook } from "../../resource";
import Navigates from "../../ui/buttons/navigates";
import { useNavigate } from "react-router-dom";
import ChiperDeal1 from "../../ui/cd1";
import SellAs from "../../ui/sellas";

const ProductPath = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  return (
    <>
      <SellAs visible={visible} setVisible={setVisible} />
      <div className="ProductPath">
        <Navigates
          pathh={
            <span onClick={() => navigate("/filter")} pan>
              {">Категории-Фильтр"}
            </span>
          }
        />
        <div className="image">
          <span>
            <img src={Notebook} alt="" />
          </span>
          <img src={Notebook} alt="" />
          <img src={Notebook} alt="" />
          <img src={Notebook} alt="" />
          <img src={Notebook} alt="" />
        </div>
        <div className="description">
          <h2>MacBook Pro 13 MXK32ZP/A Space Gray</h2>
          <div className="description-btn-group">
            <div className="top">
              <p>16 559 000 cум</p>
              <div className="btn-group">
                <button>
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
                <button>
                  <i className="fa-regular fa-heart"></i>
                </button>
                <button>
                  <i className="fa-solid fa-scale-balanced"></i>
                </button>
              </div>
            </div>
            <p> VIP скидки для VIP клиентов</p>
            <div onClick={()=> setVisible(!visible)} className="end">
              <MyButton value={"Купить сейчас"} color={"red"} />
              <MyButton value={"Купить в рассрочку сейчас"} color={"black"} />
            </div>
          </div>
          <p className="char">
            <span>Название для договора</span>
            <span>
              MacBook Pro 13 MXK32ZP/A Space Gray Full HD 1920x1080 IPS / Core™
              i7-1165G7 / 8GB RAM / 256GB SSD
            </span>
          </p>
          <div className="characteristic">
            <h3>Технические параметры</h3>
            <p className="char">
              <span>Название</span>
              <span>MacBook Pro 13 MXK32ZP/A Space Gray</span>
            </p>
            <p className="char">
              <span>Состояние</span>
              <span>Новый</span>
            </p>
            <p className="char">
              <span>Технические параметры</span>
              <span>MacBook Pro 13 MXK32ZP/A Space Gray</span>
            </p>
          </div>
          <div className="characteristic">
            <h3>Информация о модели</h3>
            <p className="char">
              <span>Парт Номер</span>
              <span>NX.A5UAA.006.</span>
            </p>
            <p className="char">
              <span>Линейка</span>
              <span>Swift</span>
            </p>
          </div>
          <div className="characteristic">
            <h3>Технические параметры</h3>
            <p className="char">
              <span>Название</span>
              <span>MacBook Pro 13 MXK32ZP/A Space Gray</span>
            </p>
            <p className="char">
              <span>Состояние</span>
              <span>Новый</span>
            </p>
            <p className="char">
              <span>Технические параметры</span>
              <span>MacBook Pro 13 MXK32ZP/A Space Gray</span>
            </p>
          </div>
          <div className="characteristic">
            <h3>Технические параметры</h3>
            <p className="char">
              <span>Название</span>
              <span>MacBook Pro 13 MXK32ZP/A Space Gray</span>
            </p>
            <p className="char">
              <span>Состояние</span>
              <span>Новый</span>
            </p>
            <p className="char">
              <span>Технические параметры</span>
              <span>MacBook Pro 13 MXK32ZP/A Space Gray</span>
            </p>
          </div>
        </div>
        <div className="questions">
          <div>
            <p>30 дней на обмен и возврат.</p>
            <p>
              Если купите товар сегодня, до 06 мая можете вернуть или обменять.
            </p>
            <a href="">Подробнее о программе.</a>
          </div>
          <div>
            <p>Есть вопросы?</p>
            <p>
              Телефон:<a href="">+998 99 990 45 27</a>
            </p>
            <p>
              Телеграм:<a href="">@mixel_uz</a>
            </p>
            <p>
              Эл. почта:<a href="">mixel@emali.uz</a>
            </p>
          </div>
          <div>
            <p>
              Доставка:<span>Бесплатно</span>
            </p>
            <div className="p">
              <span>
                Cпособ оплаты:
                {
                  <ul>
                    <li>Наличными (При Доставке)</li>
                    <li>Payme / Click</li>
                    <li>Перечислением с НДС</li>
                  </ul>
                }
              </span>
            </div>
          </div>
        </div>
        <ChiperDeal1 />
      </div>
    </>
  );
};

export default ProductPath;
