import React, { useState } from "react";
import { Admin } from "../../resource";

const ChatHelp = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="chatA">
        <div onClick={() => setVisible(!visible)} className={visible ? "close active" : "close"}></div>
      <button onClick={() => setVisible(!visible)}>
        <i className="fa-regular fa-comments"></i>
      </button>
      <div className={visible ? "ChatHelp active" : "ChatHelp"}>
        <div className="chatWindow">
          <h4>
            <div>
              <img src={Admin} alt="" />
            </div>
            Setora <br />
            <p>online</p>
          </h4>
          <p className="chatMe">Salom!</p>
          <p className="chatYou">
            Assalomu alaykum.Iltimos Admin Javobini kuting...
          </p>
        </div>
        <form>
          <input type="text" />
          <button>
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatHelp;
