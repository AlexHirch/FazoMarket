import React from "react";
import Navigates from "../../ui/buttons/navigates";
import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import {
  Cash,
  Installment,
  Iphone,
  PayMe,
  Receipt,
  UzcardHumo,
} from "../../resource";
import { grey, red } from "@mui/material/colors";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import MyButton from "../../ui/buttons/button";

const Purchase = () => {
  return (
    <>
      <Navigates pathh={" > Оформить покупку"} />
      <form className="purMain">
        <div className="Purchase">
          <div className="pur1">
            <h2>Оформить покупку</h2>
            <p className="p">
              <span>1</span>Ваши данные
            </p>
            <div className="phonenumber" id="phoneNumber">
              <TextField
                id="telephoneNumber"
                label="Телефон*"
                variant="outlined"
                size="small"
                defaultValue={998}
                type="text"
              />
            </div>
            <div className="name_firstName">
              <TextField
                id="Name"
                label="Имя*"
                variant="outlined"
                size="small"
              />
              <TextField
                id="Firstname"
                label="Фамилия*"
                variant="outlined"
                size="small"
              />
            </div>
          </div>
          <div className="pur2">
            <p className="p">
              <span>2</span>Ваш заказ
            </p>
            <button className="btn-edit">Изменить</button>
            <div className="product">
              <img src={Iphone} alt="Iphone" />
              <p>
                Galaxy A03 Core 2/32Gb Black <span>1 шт</span>
                <span>1 334 000 cум</span>
              </p>
            </div>
            <div className="product">
              <img src={Iphone} alt="Iphone" />
              <p>
                Galaxy A03 Core 2/32Gb Black <span>1 шт</span>
                <span>1 334 000 cум</span>
              </p>
            </div>
          </div>
          <div className="pur3">
            <p className="p">
              <span>3</span>Выберите способ оплаты
            </p>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="1"
                control={
                  <Radio
                    sx={{
                      color: grey[400],
                      "&.Mui-checked": {
                        color: red[600],
                      },
                    }}
                  />
                }
                label={
                  <p>
                    Оплата через Payme
                    <img
                      style={{ height: "100%", marginLeft: 20 }}
                      src={PayMe}
                      alt=""
                    />
                  </p>
                }
              />
              <FormControlLabel
                value="2"
                control={
                  <Radio
                    sx={{
                      color: grey[400],
                      "&.Mui-checked": {
                        color: red[600],
                      },
                    }}
                  />
                }
                label={
                  <p>
                    Онлайн оплата по карте UZCARD и HUMO
                    <img
                      style={{ height: "100%", marginLeft: 20 }}
                      src={UzcardHumo}
                      alt=""
                    />
                  </p>
                }
              />
              <FormControlLabel
                value="3"
                control={
                  <Radio
                    sx={{
                      color: grey[400],
                      "&.Mui-checked": {
                        color: red[600],
                      },
                    }}
                  />
                }
                label={
                  <p>
                    Наличными при получении
                    <img
                      style={{ height: "100%", marginLeft: 20 }}
                      src={Cash}
                      alt=""
                    />
                  </p>
                }
              />
              <FormControlLabel
                value="4"
                control={
                  <Radio
                    sx={{
                      color: grey[400],
                      "&.Mui-checked": {
                        color: red[600],
                      },
                    }}
                  />
                }
                label={
                  <p>
                    Картой при получении
                    <img
                      style={{ height: "100%", marginLeft: 20 }}
                      src={Receipt}
                      alt=""
                    />
                  </p>
                }
              />
              <FormControlLabel
                value="5"
                control={
                  <Radio
                    sx={{
                      color: grey[400],
                      "&.Mui-checked": {
                        color: red[600],
                      },
                    }}
                  />
                }
                label={
                  <p>
                    Рассрочка
                    <img
                      style={{ height: "100%", marginLeft: 20 }}
                      src={Installment}
                      alt=""
                    />
                  </p>
                }
              />
            </RadioGroup>
          </div>
          <div className="pur4">
            <p className="p">
              <span>4</span>Способ получения
            </p>
            <p className="f" style={{ width: "100%" }}>
              Ваш город
            </p>
            <div
              style={{
                display: "flex",
                width: 300,
                border: "1px solid #e2e2e2",
                padding: "10px 60px 10px 10px",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <input type="radio" id="location" />{" "}
              <label htmlFor="location">Ташкент Доставка Fazo </label>
            </div>
            <p className="f" style={{ width: "100%" }}>
              Укажите адрес доставки
            </p>
            <select name="" id="">
              <option value="">Ташкент</option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <select name="" id="">
              <option value="">г.Ташкент</option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <label className="Address" htmlFor="Address">
              <input type="text" id="Address" />
              <p>Адрес</p>
            </label>
            <label className="Floor" htmlFor="Floor">
              <input type="text" id="Floor" />
              <p>Этаж</p>
            </label>
            <label className="date" htmlFor="date"><input type="date" name="" id="date" /></label>
          </div>
        </div>
        <div className="your_data">
          <h3>Ваши данные</h3>
          <p>4 товара на сумму<span>5 262 000 cум</span></p>
          <p>Доставка<span>бесплатно</span></p>
          <hr />
          <p>Всего к оплате<span>5 262 000 cум</span></p>
          <MyButton width={100} type1={"submit"} color={"red"} value={"Оформить покупку"}/>
          <h5>Подтверждая заказ, я принимаю условия</h5>
          <a href="#">Пользовательского соглашения</a>
        </div>
      </form>
    </>
  );
};

export default Purchase;
