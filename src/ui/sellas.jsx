import React, { useState } from "react";
import { MixelLogo, Notebook, Payment, zMarketscard } from "../resource";
import AccordionUsage from "./accordion/accordionph";
import BasicSelect from "./accordion/select";
import MyButton from "./buttons/button";

const SellAs = ({ visible, setVisible }) => {
  const [count, setCount] = useState(1);
  return (
    <div className={visible ? "SellAs" : "SellAs active"}>
      <div onClick={()=> setVisible(!visible)} className="close"></div>
      <div className="visisi">
        <h3>Купить в рассрочку</h3>
        <div className="product">
          <img src={Notebook} alt="" />
          <p>
            <span>MacBook Pro 13 MXK32ZP/A Space Gray</span>
            <span className="span">16 559 000 cум</span>
          </p>
          <div className="btn-group">
            <button
              onClick={() => {
                count <= 1 ? "" : setCount(count - 1);
              }}
            >
              -
            </button>
            <button>{count}</button>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        </div>
        <div className="mixel">
          <AccordionUsage
            title={
              <label className="mixelUz" name="mixelUz">
                <input type="radio" name="mixelUz" />
                <img src={MixelLogo} alt="" />
                <BasicSelect />
                <h3>2 042 417 cум / месяц</h3>
              </label>
            }
            body={
              <div className="mixelBody">
                <p style={{ color: "gray" }}>
                  При первой покупке товара, каждый клиент получает карту Start
                </p>
                <br />
                <h4>По карте</h4>
                <AccordionUsage
                  title={
                    <div className="titleCreditCard">
                      <i
                        style={{ color: "greenyellow", marginRight: 10 }}
                        className="fa-solid fa-credit-card"
                      ></i>
                      <p>Member Military</p>
                    </div>
                  }
                  body={
                    <div className="credit-cards-usage">
                      <p>
                        <span>Предоплата</span>
                        <span>от 0%</span>
                      </p>
                      <p>
                        <span>Кешбэк</span>
                        <span>1%</span>
                      </p>
                      <p>
                        <span>Максимальная сумма задолженности</span>
                        <span>15 000 000 сум</span>
                      </p>
                      <p>
                        <span>Срок перехода на карту</span>
                        <span>4 месяца</span>
                      </p>
                    </div>
                  }
                />
                <AccordionUsage
                  title={
                    <div className="titleCreditCard">
                      <i
                        style={{ color: "deepskyblue", marginRight: 10 }}
                        className="fa-solid fa-credit-card"
                      ></i>
                      <p>Start</p>
                    </div>
                  }
                  body={
                    <div className="credit-cards-usage">
                      <p>
                        <span>Предоплата</span>
                        <span>от 0%</span>
                      </p>
                      <p>
                        <span>Кешбэк</span>
                        <span>1%</span>
                      </p>
                      <p>
                        <span>Максимальная сумма задолженности</span>
                        <span>15 000 000 сум</span>
                      </p>
                      <p>
                        <span>Срок перехода на карту</span>
                        <span>4 месяца</span>
                      </p>
                    </div>
                  }
                />
                <AccordionUsage
                  title={
                    <div className="titleCreditCard">
                      <i
                        style={{ color: "orange", marginRight: 10 }}
                        className="fa-solid fa-credit-card"
                      ></i>
                      <p>Member</p>
                    </div>
                  }
                  body={
                    <div className="credit-cards-usage">
                      <p>
                        <span>Предоплата</span>
                        <span>от 0%</span>
                      </p>
                      <p>
                        <span>Кешбэк</span>
                        <span>1%</span>
                      </p>
                      <p>
                        <span>Максимальная сумма задолженности</span>
                        <span>15 000 000 сум</span>
                      </p>
                      <p>
                        <span>Срок перехода на карту</span>
                        <span>4 месяца</span>
                      </p>
                    </div>
                  }
                />
                <AccordionUsage
                  title={
                    <div className="titleCreditCard">
                      <i
                        style={{ color: "violet", marginRight: 10 }}
                        className="fa-solid fa-credit-card"
                      ></i>
                      <p>Classic</p>
                    </div>
                  }
                  body={
                    <div className="credit-cards-usage">
                      <p>
                        <span>Предоплата</span>
                        <span>от 0%</span>
                      </p>
                      <p>
                        <span>Кешбэк</span>
                        <span>1%</span>
                      </p>
                      <p>
                        <span>Максимальная сумма задолженности</span>
                        <span>15 000 000 сум</span>
                      </p>
                      <p>
                        <span>Срок перехода на карту</span>
                        <span>4 месяца</span>
                      </p>
                    </div>
                  }
                />
                <AccordionUsage
                  title={
                    <div className="titleCreditCard">
                      <i
                        style={{ color: "gold", marginRight: 10 }}
                        className="fa-solid fa-credit-card"
                      ></i>
                      <p>Gold</p>
                    </div>
                  }
                  body={
                    <div className="credit-cards-usage">
                      <p>
                        <span>Предоплата</span>
                        <span>от 0%</span>
                      </p>
                      <p>
                        <span>Кешбэк</span>
                        <span>1%</span>
                      </p>
                      <p>
                        <span>Максимальная сумма задолженности</span>
                        <span>15 000 000 сум</span>
                      </p>
                      <p>
                        <span>Срок перехода на карту</span>
                        <span>4 месяца</span>
                      </p>
                    </div>
                  }
                />
              </div>
            }
          />
          <AccordionUsage
            title={
              <label className="mixelUz" name="mixelUz">
                <input type="radio" name="mixelUz" />
                <img src={Payment} alt="" />
                <BasicSelect />
                <h3>2 042 417 cум / месяц</h3>
              </label>
            }
            body={
              <div className="mixelBody">
                <p style={{ color: "gray" }}>
                  При первой покупке товара, каждый клиент получает карту Start
                </p>
                <br />
                <h4>По карте</h4>
                <AccordionUsage
                  title={
                    <div className="titleCreditCard">
                      <i
                        style={{ color: "greenyellow", marginRight: 10 }}
                        className="fa-solid fa-credit-card"
                      ></i>
                      <p>Member Military</p>
                    </div>
                  }
                  body={
                    <div className="credit-cards-usage">
                      <p>
                        <span>Предоплата</span>
                        <span>от 0%</span>
                      </p>
                      <p>
                        <span>Кешбэк</span>
                        <span>1%</span>
                      </p>
                      <p>
                        <span>Максимальная сумма задолженности</span>
                        <span>15 000 000 сум</span>
                      </p>
                      <p>
                        <span>Срок перехода на карту</span>
                        <span>4 месяца</span>
                      </p>
                    </div>
                  }
                />
                <AccordionUsage
                  title={
                    <div className="titleCreditCard">
                      <i
                        style={{ color: "deepskyblue", marginRight: 10 }}
                        className="fa-solid fa-credit-card"
                      ></i>
                      <p>Start</p>
                    </div>
                  }
                  body={
                    <div className="credit-cards-usage">
                      <p>
                        <span>Предоплата</span>
                        <span>от 0%</span>
                      </p>
                      <p>
                        <span>Кешбэк</span>
                        <span>1%</span>
                      </p>
                      <p>
                        <span>Максимальная сумма задолженности</span>
                        <span>15 000 000 сум</span>
                      </p>
                      <p>
                        <span>Срок перехода на карту</span>
                        <span>4 месяца</span>
                      </p>
                    </div>
                  }
                />
                <AccordionUsage
                  title={
                    <div className="titleCreditCard">
                      <i
                        style={{ color: "orange", marginRight: 10 }}
                        className="fa-solid fa-credit-card"
                      ></i>
                      <p>Member</p>
                    </div>
                  }
                  body={
                    <div className="credit-cards-usage">
                      <p>
                        <span>Предоплата</span>
                        <span>от 0%</span>
                      </p>
                      <p>
                        <span>Кешбэк</span>
                        <span>1%</span>
                      </p>
                      <p>
                        <span>Максимальная сумма задолженности</span>
                        <span>15 000 000 сум</span>
                      </p>
                      <p>
                        <span>Срок перехода на карту</span>
                        <span>4 месяца</span>
                      </p>
                    </div>
                  }
                />
                <AccordionUsage
                  title={
                    <div className="titleCreditCard">
                      <i
                        style={{ color: "violet", marginRight: 10 }}
                        className="fa-solid fa-credit-card"
                      ></i>
                      <p>Classic</p>
                    </div>
                  }
                  body={
                    <div className="credit-cards-usage">
                      <p>
                        <span>Предоплата</span>
                        <span>от 0%</span>
                      </p>
                      <p>
                        <span>Кешбэк</span>
                        <span>1%</span>
                      </p>
                      <p>
                        <span>Максимальная сумма задолженности</span>
                        <span>15 000 000 сум</span>
                      </p>
                      <p>
                        <span>Срок перехода на карту</span>
                        <span>4 месяца</span>
                      </p>
                    </div>
                  }
                />
                <AccordionUsage
                  title={
                    <div className="titleCreditCard">
                      <i
                        style={{ color: "gold", marginRight: 10 }}
                        className="fa-solid fa-credit-card"
                      ></i>
                      <p>Gold</p>
                    </div>
                  }
                  body={
                    <div className="credit-cards-usage">
                      <p>
                        <span>Предоплата</span>
                        <span>от 0%</span>
                      </p>
                      <p>
                        <span>Кешбэк</span>
                        <span>1%</span>
                      </p>
                      <p>
                        <span>Максимальная сумма задолженности</span>
                        <span>15 000 000 сум</span>
                      </p>
                      <p>
                        <span>Срок перехода на карту</span>
                        <span>4 месяца</span>
                      </p>
                    </div>
                  }
                />
              </div>
            }
          />
          <AccordionUsage
            title={
              <label className="mixelUz" name="mixelUz">
                <input type="radio" name="mixelUz" />
                <img src={zMarketscard} alt="" />
                <BasicSelect />
                <h3>2 042 417 cум / месяц</h3>
              </label>
            }
            body={
              <div className="mixelBody">
                <p style={{ color: "gray" }}>
                  При первой покупке товара, каждый клиент получает карту Start
                </p>
                <br />
                <h4>По карте</h4>
                <AccordionUsage
                  title={
                    <div className="titleCreditCard">
                      <i
                        style={{ color: "greenyellow", marginRight: 10 }}
                        className="fa-solid fa-credit-card"
                      ></i>
                      <p>Member Military</p>
                    </div>
                  }
                  body={
                    <div className="credit-cards-usage">
                      <p>
                        <span>Предоплата</span>
                        <span>от 0%</span>
                      </p>
                      <p>
                        <span>Кешбэк</span>
                        <span>1%</span>
                      </p>
                      <p>
                        <span>Максимальная сумма задолженности</span>
                        <span>15 000 000 сум</span>
                      </p>
                      <p>
                        <span>Срок перехода на карту</span>
                        <span>4 месяца</span>
                      </p>
                    </div>
                  }
                />
                <AccordionUsage
                  title={
                    <div className="titleCreditCard">
                      <i
                        style={{ color: "deepskyblue", marginRight: 10 }}
                        className="fa-solid fa-credit-card"
                      ></i>
                      <p>Start</p>
                    </div>
                  }
                  body={
                    <div className="credit-cards-usage">
                      <p>
                        <span>Предоплата</span>
                        <span>от 0%</span>
                      </p>
                      <p>
                        <span>Кешбэк</span>
                        <span>1%</span>
                      </p>
                      <p>
                        <span>Максимальная сумма задолженности</span>
                        <span>15 000 000 сум</span>
                      </p>
                      <p>
                        <span>Срок перехода на карту</span>
                        <span>4 месяца</span>
                      </p>
                    </div>
                  }
                />
                <AccordionUsage
                  title={
                    <div className="titleCreditCard">
                      <i
                        style={{ color: "orange", marginRight: 10 }}
                        className="fa-solid fa-credit-card"
                      ></i>
                      <p>Member</p>
                    </div>
                  }
                  body={
                    <div className="credit-cards-usage">
                      <p>
                        <span>Предоплата</span>
                        <span>от 0%</span>
                      </p>
                      <p>
                        <span>Кешбэк</span>
                        <span>1%</span>
                      </p>
                      <p>
                        <span>Максимальная сумма задолженности</span>
                        <span>15 000 000 сум</span>
                      </p>
                      <p>
                        <span>Срок перехода на карту</span>
                        <span>4 месяца</span>
                      </p>
                    </div>
                  }
                />
                <AccordionUsage
                  title={
                    <div className="titleCreditCard">
                      <i
                        style={{ color: "violet", marginRight: 10 }}
                        className="fa-solid fa-credit-card"
                      ></i>
                      <p>Classic</p>
                    </div>
                  }
                  body={
                    <div className="credit-cards-usage">
                      <p>
                        <span>Предоплата</span>
                        <span>от 0%</span>
                      </p>
                      <p>
                        <span>Кешбэк</span>
                        <span>1%</span>
                      </p>
                      <p>
                        <span>Максимальная сумма задолженности</span>
                        <span>15 000 000 сум</span>
                      </p>
                      <p>
                        <span>Срок перехода на карту</span>
                        <span>4 месяца</span>
                      </p>
                    </div>
                  }
                />
                <AccordionUsage
                  title={
                    <div className="titleCreditCard">
                      <i
                        style={{ color: "gold", marginRight: 10 }}
                        className="fa-solid fa-credit-card"
                      ></i>
                      <p>Gold</p>
                    </div>
                  }
                  body={
                    <div className="credit-cards-usage">
                      <p>
                        <span>Предоплата</span>
                        <span>от 0%</span>
                      </p>
                      <p>
                        <span>Кешбэк</span>
                        <span>1%</span>
                      </p>
                      <p>
                        <span>Максимальная сумма задолженности</span>
                        <span>15 000 000 сум</span>
                      </p>
                      <p>
                        <span>Срок перехода на карту</span>
                        <span>4 месяца</span>
                      </p>
                    </div>
                  }
                />
              </div>
            }
          />

          <div style={{ display: "flex", gap: 20, justifyContent: "end" }}>
            <MyButton navigates={"/"} value={"Продолжить покупки"} color={"white"} />
            <MyButton navigates={"/purchase"} value={"Оформить покупку"} color={"red"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellAs;
