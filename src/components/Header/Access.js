import React, { useState } from "react";
import DarkThemeButton from "./DarkThemeButton";

const Access = () => {
  const [handPreference, setHandPreference] = useState("right");

  const changeHands = () => {
    if (handPreference === "right") {
      return setHandPreference("left");
    } else if (handPreference === "left") {
      return setHandPreference("right");
    }
  };

  return (
    <div className="d-flex justify-content-between">
      {handPreference === "left" ? (
        <div className="access-left">
          <button className="access-button" onClick={changeHands}>
            <img
              src="https://img.icons8.com/nolan/64/hand.png"
              alt="hand preference"
            />
          </button>
          <DarkThemeButton />
        </div>
      ) : (
        <div className="access-left"></div>
      )}
      {handPreference === "right" ? (
        <div className="access-right">
          <DarkThemeButton />
          <button className="access-button" onClick={changeHands}>
            <img
              src="https://img.icons8.com/nolan/64/hand.png"
              alt="hand preference"
            />
          </button>
        </div>
      ) : (
        <div className="access-right"></div>
      )}
    </div>
  );
};

export default Access;
