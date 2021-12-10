import React, { useState } from "react";
import Access from "./Access";
import keyboard from "../../assets/keyboard.jpg";

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <header>
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
