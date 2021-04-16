import React, { useState } from "react";
import Skills from "./components/Skills";
import keyboard from "./assets/keyboard.jpg";

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

  const [rightHandedSocial, setRightHandedSocial] = useState(
    rightHandedSocialIn
  );

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

  const [rightHandedAccess, setRightHandedAccess] = useState(
    rightHandedAccessIn
  );

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
    console.log("toggled");
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
    // return setTimeout(setHandPreference(!handPreference), 3000)
  };

  return (
    <div className="App">
      <header className={darkTheme ? "dark-header" : "light"}>
        <div>
          <div className="accessibility" style={leftHandedAccess}>
            <img
              className={darkTheme ? "dark" : "light"}
              onClick={toggleHandPreference}
              src="https://img.icons8.com/nolan/64/hand.png"
            />
            {darkTheme ? (
              <img
                onClick={toggleDark}
                src="https://img.icons8.com/nolan/64/light-on.png"
              />
            ) : (
              <img
                onClick={toggleDark}
                src="https://img.icons8.com/nolan/64/light.png"
              />
            )}
          </div>
          <div className="accessibility" style={rightHandedAccess}>
            {darkTheme ? (
              <img
                onClick={toggleDark}
                src="https://img.icons8.com/nolan/64/light-on.png"
              />
            ) : (
              <img
                onClick={toggleDark}
                src="https://img.icons8.com/nolan/64/light.png"
              />
            )}
            <img
              className={darkTheme ? "dark" : "light"}
              onClick={toggleHandPreference}
              style={{ transform: "scaleX(-1)" }}
              src="https://img.icons8.com/nolan/64/hand.png"
            />
          </div>
        </div>
        <div
          className="name"
          style={{
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            className={darkTheme ? "dark-keyboard" : "light-keyboard"}
            style={{ position: "absolute", margin: "0 auto" }}
            src={keyboard}
          />
          <h1 className={darkTheme ? "dark" : "light"}>Nick Myers</h1>
          <h2 className={darkTheme ? "dark" : "light"}>Full Stack Developer</h2>
        </div>
      </header>
      <div className="social-menu" style={rightHandedSocial}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/nicholas-myers-professional/"
        >
          <i
            style={{
              color: "#0072B1",
              backgroundColor: "white",
              boxShadow: "0 0 0 5px #2d2d2d inset",
            }}
            class="fab fa-linkedin fa-3x"
          ></i>
        </a>
        <a target="_blank" href="https://github.com/nicholas-myers">
          <i class="fab fa-github-square fa-3x"></i>
        </a>
      </div>
      <div className="social-menu" style={leftHandedSocial}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/nicholas-myers-professional/"
        >
          <i
            style={{
              color: "#0072B1",
              backgroundColor: "white",
              boxShadow: "0 0 0 5px #2d2d2d inset",
            }}
            class="fab fa-linkedin fa-3x"
          ></i>
        </a>
        <a target="_blank" href="https://github.com/nicholas-myers">
          <i class="fab fa-github-square fa-3x"></i>
        </a>
      </div>
      <Skills darkTheme={darkTheme} />
      <div className={darkTheme ? "dark-hero hero" : "light-hero hero"}>
        <h2>Projects</h2>
      </div>
      <footer className={darkTheme ? "dark" : "light"}>
        <a
          className={darkTheme ? "dark" : "light"}
          target="_blank"
          href="https://icons8.com/icon/48127/hand"
        >
          Hand icon by Icons8
        </a>
        <a
          className={darkTheme ? "dark" : "light"}
          target="_blank"
          href="https://icons8.com/icon/XBJfETMfZHpS/light"
        >
          Light icon by Icons8
        </a>
        <a
          className={darkTheme ? "dark" : "light"}
          target="_blank"
          href="https://icons8.com/icon/44818/light-on"
        >
          Light On icon by Icons8
        </a>
        <a
          className={darkTheme ? "dark" : "light"}
          target="_blank"
          href="https://www.pexels.com/photo/computer-keyboard-34153/"
        >
          Keyboard Photo by Pexels
        </a>
      </footer>
    </div>
  );
}

export default App;
