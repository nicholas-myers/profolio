import React, { useState } from "react";
import DarkThemeButton from "./DarkThemeButton";

const Access = () => {
  const [handPreference, setHandPreference] = useState("right");

  const [leftSlide, setLeftSlide] = useState("");
  const [rightSlide, setRightSlide] = useState("");

  const changeHands = () => {
    if (handPreference === "right") {
      setHandPreference("left");
      setLeftSlide("left-slide");
      setRightSlide("right-slide");
    } else if (handPreference === "left") {
      setHandPreference("right");
      setLeftSlide("");
      setRightSlide("");
    }
  };

  return (
    <div className="access">
      <div className="access-wrapper">
        <div className={`access-left ${leftSlide}`}>
          <button className="access-button" onClick={changeHands}>
            <img
              src="https://img.icons8.com/nolan/64/hand.png"
              alt="hand preference"
            />
          </button>
          <DarkThemeButton />
        </div>
      </div>
      <div className="access-wrapper">
        <div className={`access-right ${rightSlide}`}>
          <DarkThemeButton />
          <button className="access-button" onClick={changeHands}>
            <img
              src="https://img.icons8.com/nolan/64/hand.png"
              alt="hand preference"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Access;
