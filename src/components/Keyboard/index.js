import React, { useContext } from "react";
import { AppContext } from "../../App.js";
import Key from "../Key/index.js";
import "./style.css";
const Keyboard = () => {
  const {
    keyBoard,
    handleEnter,
    handleBackSpace,
    handleKeyPress: handleKey,
  } = useContext(AppContext);
  const handleKeyPress = (obj, e) => {
    if (obj.value === "Enter") {
      handleEnter();
    } else if (obj.value === "Back") {
      handleBackSpace();
    } else {
      handleKey(obj.value);
    }
  };
  return (
    <div className="keyboard__container">
      {keyBoard.map((arr, index) => (
        <div  key={index} className="keyboard__row">
          {arr.map((obj, i) => (
            <div
            
              onClick={(e) => handleKeyPress(obj, e)}
              key={i}
              className={`keyboard__key__container ${obj?.status}`}
            >
              {obj?.value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
