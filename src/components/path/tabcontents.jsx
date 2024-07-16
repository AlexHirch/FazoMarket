import React, { useEffect } from "react";
import Navigates from "../../ui/buttons/navigates";
import Aos from "aos";
import "aos/dist/aos.css";

const TabContents = ({ toggleState, setToggleState }) => {
  const toggleTab = (index) => {
    setToggleState(index);
  };
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navigates pathh={"> Помощь"} />
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
        className="TabContents"
      >
        <div className="bloc-tabs">
          <div
            className={toggleState === 1 ? "tabs active" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <i className="fa-regular fa-credit-card"></i>
            <p>
              Покупка в рассрочку
              <span>
                Удобная онлайн рассрочка на товары бытовой техники в Top -IT
              </span>
            </p>
          </div>
          <div
            className={toggleState === 2 ? "tabs active" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <i className="fa-solid fa-wallet"></i>
            <p>
              Способы оплаты товара
              <span>
                Платите удобным для вас способом: в ближайшем магазине, Сlick,
                Payme.
              </span>
            </p>
          </div>
          <div
            className={toggleState === 3 ? "tabs active" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <i className="fa-solid fa-shield"></i>
            <p>
              Гарантия на товары
              <span>
                Платите удобным для вас способом: в ближайшем магазине, Сlick,
                Payme.
              </span>
            </p>
          </div>
          <div
            className={toggleState === 4 ? "tabs active" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            <i className="fa-solid fa-coins"></i>
            <p>
              Бонусная система
              <span>Бонусная система</span>
            </p>
          </div>
          <div
            className={toggleState === 5 ? "tabs active" : "tabs"}
            onClick={() => toggleTab(5)}
          >
            <i className="fa-solid fa-truck-fast"></i>
            <p>
              Бесплатная доставка
              <span>Условия доставки товаров в Top-IT</span>
            </p>
          </div>
          <div
            className={toggleState === 6 ? "tabs active" : "tabs"}
            onClick={() => toggleTab(6)}
          >
            <i className="fa-solid fa-comment-dots"></i>
            <p>
              Помощь
              <span>Частые вопросы</span>
            </p>
          </div>
          <div
            className={toggleState === 7 ? "tabs active" : "tabs"}
            onClick={() => toggleTab(7)}
          >
            <i className="fa-solid fa-book"></i>
            <p>
              О магазине
              <span>{"компании «Top-IT»"}</span>
            </p>
          </div>
          <div
            className={toggleState === 8 ? "tabs active" : "tabs"}
            onClick={() => toggleTab(8)}
          >
            <i className="fa-solid fa-star"></i>
            <p>
              Производители
              <span>Наши официальные партнеры.</span>
            </p>
          </div>
          <div
            className={toggleState === 9 ? "tabs active" : "tabs"}
            onClick={() => toggleTab(9)}
          >
            <i className="fa-brands fa-bitcoin"></i>
            <p>
              B2B продажи
              <span>
                Полная информации об оплате перечислением с учётом НДС
              </span>
            </p>
          </div>
          <div
            className={toggleState === 10 ? "tabs active" : "tabs"}
            onClick={() => toggleTab(10)}
          >
            <i className="fa-solid fa-arrows-spin"></i>
            <p>
              Возврат товара Top-IT
              <span>Возврат товара нашим покупателям - Top IT</span>
            </p>
          </div>
        </div>
        <div className="content-tabs">
          <div className={toggleState === 1 ? "content active" : "content"}>
            <h2>Как купить в рассрочку в Top-IT?</h2>
            <p>
              Давно выяснено, что при оценке дизайна и композиции читаемый текст
              мешает сосредоточиться. Lorem Ipsum используют потому, что тот
              обеспечивает более или менее стандартное заполнение шаблона, а
              также реальное распределение букв и пробелов в абзацах, которое не
              получается при простой дубликации "Здесь ваш текст.. Здесь ваш
              текст.. Здесь ваш текст.." Многие программы электронной вёрстки и
              редакторы HTML используют.
            </p>
            <h2>Вы можете приобрести товар несколькими способами:</h2>
            <p>
              1. Давно выяснено, что при оценке дизайна и композиции читаемый
              текст мешает сосредоточиться.
            </p>
            <p>
              2. Lorem Ipsum используют потому, что тот обеспечивает более или
              менее
            </p>
            <h2>Для покупки онлайн вам потребуется:</h2>
            <p>
              1. Давно выяснено, что при оценке дизайна и композиции читаемый
              текст мешает сосредоточиться.
            </p>
            <p>
              2. Lorem Ipsum используют потому, что тот обеспечивает более или
              менее
            </p>
            <p>3. Оценке дизайна и композиции читаемый текст.</p>
            <p>4. Потому, что тот обеспечивает более или менее</p>
            <h2>Кому выдается рассрочка?</h2>
            <p>
              Также реальное распределение букв и пробелов в абзацах, которое не
              получается при простой дубликации "Здесь ваш текст.. Здесь ваш
              текст.. Здесь ваш текст.." Многие программы электронной вёрстки и
              редакторы HTML используют.
            </p>
            <h2>До скольки работает Call-центр?</h2>
            <p>Режим работы контакт-центра: каждый день с 9:00 до 21:00.</p>
            <p>
              Будем рады ответить на ваши вопросы по телефону +998 91 123 45 67
            </p>
          </div>
          <div className={toggleState === 2 ? "content active" : "content"}>
            22222222222222222
          </div>
          <div className={toggleState === 3 ? "content active" : "content"}>
            333333333333333333333
          </div>
          <div className={toggleState === 4 ? "content active" : "content"}>
            44444444444444444444444444444
          </div>
          <div className={toggleState === 5 ? "content active" : "content"}>
            55555555555555555555555
          </div>
          <div className={toggleState === 6 ? "content active" : "content"}>
            666666666666666666666
          </div>
          <div className={toggleState === 7 ? "content active" : "content"}>
            777777777777777777777777777777
          </div>
          <div className={toggleState === 8 ? "content active" : "content"}>
            88888888888888888888888888888
          </div>
          <div className={toggleState === 9 ? "content active" : "content"}>
            9999999999999999999999
          </div>
          <div className={toggleState === 10 ? "content active" : "content"}>
            10
          </div>
        </div>
      </div>
    </>
  );
};

export default TabContents;
