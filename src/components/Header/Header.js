import React from "react";
import Access from "./Access";
import keyboard from "../../assets/keyboard.jpg";

const Header = () => {
  return (
    <header className="">
      <Access />
      <div className="header-hero">
        <div className="title">
          <h1>Nicholas D Myers</h1>
          <p>Full Stack Developer</p>
        </div>
        <img src={keyboard} alt="illuminated keyboard" />
      </div>
    </header>
  );
};

export default Header;
