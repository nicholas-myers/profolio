import React, { useState } from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleDark = () => {
    setDarkTheme(!darkTheme);
  };

  const rightHandedSocialIn = {
    right: "-100px",
    transform: "translateX(-100px)",
    transition: "1s",
  };

  const rightHandedSocialOut = {
    right: "0",
    transform: "translateX(100px)",
    transition: "1s",
  };

  const [rightHandedSocial, setRightHandedSocial] =
    useState(rightHandedSocialIn);

  const rightHandedAccessIn = {
    right: "-300px",
    transform: "translateX(-300px)",
    transition: "1s",
  };

  const rightHandedAccessOut = {
    right: "0",
    transform: "translateX(300px)",
    transition: "1s",
  };

  const [rightHandedAccess, setRightHandedAccess] =
    useState(rightHandedAccessIn);

  const leftHandedSocialIn = {
    left: "-100px",
    transform: "translateX(100px)",
    transition: "1s",
  };
  const leftHandedSocialOut = {
    left: "0",
    transform: "translateX(-100px)",
    transition: "1s",
  };

  const [leftHandedSocial, setLeftHandedSocial] = useState(leftHandedSocialOut);

  const leftHandedAccessIn = {
    left: "-300px",
    transform: "translateX(300px)",
    transition: "1s",
  };
  const leftHandedAccessOut = {
    left: "0",
    transform: "translateX(-300px)",
    transition: "1s",
  };

  const [leftHandedAccess, setLeftHandedAccess] = useState(leftHandedAccessOut);

  const [handPreference, setHandPreference] = useState(true);

  const toggleHandPreference = () => {
    setHandPreference(!handPreference);
    if (handPreference === false) {
      setRightHandedSocial(rightHandedSocialIn);
      setLeftHandedSocial(leftHandedSocialOut);
      setRightHandedAccess(rightHandedAccessIn);
      setLeftHandedAccess(leftHandedAccessOut);
    } else if (handPreference === true) {
      setRightHandedSocial(rightHandedSocialOut);
      setLeftHandedSocial(leftHandedSocialIn);
      setRightHandedAccess(rightHandedAccessOut);
      setLeftHandedAccess(leftHandedAccessIn);
    }
  };

  return (
    <div className="App">
      <Header />
      <Content darkTheme={darkTheme} />
      <div
        className={darkTheme ? "social-menu dark" : "social-menu light-header"}
        style={rightHandedSocial}
      >
        <a
          target="_blank"
          href="https://www.linkedin.com/in/nicholas-myers-professional/"
        >
          <i
            style={{
              color: "#0072B1",
              backgroundColor: "white",
              boxShadow: darkTheme
                ? "0 0 0 5px #2d2d2d inset"
                : "0 0 0 5px beige inset",
              transition: "1s",
            }}
            class="fab fa-linkedin fa-3x"
          ></i>
        </a>
        <a target="_blank" href="https://github.com/nicholas-myers">
          <i
            style={{ color: darkTheme ? null : "#171b1b", transition: "1s" }}
            class="fab fa-github-square fa-3x"
          ></i>
        </a>
      </div>
      <div
        className={darkTheme ? "social-menu dark" : "social-menu light-header"}
        style={leftHandedSocial}
      >
        <a
          target="_blank"
          href="https://www.linkedin.com/in/nicholas-myers-professional/"
        >
          <i
            style={{
              color: "#0072B1",
              backgroundColor: "white",
              boxShadow: darkTheme
                ? "0 0 0 5px #2d2d2d inset"
                : "0 0 0 5px beige inset",
              transition: "1s",
            }}
            class="fab fa-linkedin fa-3x"
          ></i>
        </a>
        <a target="_blank" href="https://github.com/nicholas-myers">
          <i
            style={{ color: darkTheme ? null : "#171b1b", transition: "1s" }}
            class="fab fa-github-square fa-3x"
          ></i>
        </a>
      </div>
      <Footer darkTheme={darkTheme} />
    </div>
  );
}

export default App;
