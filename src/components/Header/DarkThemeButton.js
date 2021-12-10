import React, { useState } from "react";

const DarkThemeButton = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const changeTheme = () => {
    return setDarkTheme(!darkTheme);
  };

  return (
    <button className="access-button" onClick={changeTheme}>
      {darkTheme ? (
        <img
          src="https://img.icons8.com/nolan/64/light-on.png"
          alt="dark theme"
        />
      ) : (
        <img
          src="https://img.icons8.com/nolan/64/light.png"
          alt="light theme"
        />
      )}
    </button>
  );
};

export default DarkThemeButton;
