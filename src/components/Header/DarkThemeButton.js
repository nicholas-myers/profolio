import React, { useState } from "react";

const DarkThemeButton = ({ margin }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const changeTheme = () => {
    return setDarkTheme(!darkTheme);
  };

  return (
    <>
      {darkTheme ? (
        <button
          className={`access-button dark ${margin}`}
          onClick={changeTheme}
        >
          {darkTheme ? (
            <img
              src="https://img.icons8.com/nolan/64/light.png"
              alt="light theme"
            />
          ) : (
            <img
              src="https://img.icons8.com/nolan/64/light-on.png"
              alt="dark theme"
            />
          )}
        </button>
      ) : (
        <button
          className={`access-button light ${margin}`}
          onClick={changeTheme}
        >
          {darkTheme ? (
            <img
              src="https://img.icons8.com/nolan/64/light.png"
              alt="light theme"
            />
          ) : (
            <img
              src="https://img.icons8.com/nolan/64/light-on.png"
              alt="dark theme"
            />
          )}
        </button>
      )}
    </>
  );
};

export default DarkThemeButton;
