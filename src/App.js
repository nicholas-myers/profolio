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
      <header className={darkTheme ? "dark-header" : "light-header"}>
        <div>
          <div className="accessibility" style={leftHandedAccess}>
            <img
              className={darkTheme ? "dark" : "light-header"}
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
              className={darkTheme ? "dark" : "light-header"}
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
          <h1 className={darkTheme ? "dark" : "light-header"}>Nick Myers</h1>
          <h2 className={darkTheme ? "dark" : "light-header"}>
            Full Stack Developer
          </h2>
        </div>
      </header>
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
      <Skills darkTheme={darkTheme} />
      <div className={darkTheme ? "dark-hero hero" : "light-hero hero"}>
        <h2>Projects</h2>
        <div>
          <h3>Apollo</h3>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <a href="https://github.com/Lambda-School-Labs/Labs26-Apollo-FE-TeamB">
              Front-End Code
            </a>
            <a href="https://github.com/Lambda-School-Labs/Labs26-Apollo-BE-TeamB">
              Back-End Code
            </a>
          </div>
          <p>
            I worked as part of a cross-functional team. The back-end is
            developed in the Java Spring framework. The Front-End uses React and
            Redux. Secured with Okta.
          </p>
        </div>
        <div>
          <h3>Conway's Game of Life</h3>
          <p>
            Solo Project. The visual representation of the mathematical
            simulation of cell lifecycles. I constructed the state management
            using the Immer library to create copies of an immutable state. I
            enacted an algorithm to follow the rules of Conway for simulation of
            cell lifecycles. I implemented the code base in the one-week release
            canvas time frame. Languages: React and Immer library.
          </p>
        </div>
        <div>
          <h3>Spotify Suggester</h3>
          <p>
            Get a list of suggested songs based off an initial song input.
            Created the User login security using JAVA Spring. Collaborated in a
            cross-functional team to deliver API endpoints in an Agile
            environment.
          </p>
        </div>
        <div>
          <h3>The Family Scrapbook</h3>
          <p>
            I worked on this website as part of a 3 person team. My
            responsibility was the "Start Here Page". I also helped in the
            design and implementation of the navigation and footer. This project
            was written in HTML and CSS.
          </p>
        </div>
        <div>
          <h3>Easy Dungeons</h3>
          <p>
            This is a personal project. A digital toolset for Dungeons and
            Dragons 5E. Current tools, dice roller and intitiative tracker.
            Front-End is wrtten using React. Currently in the process of
            structuring the Back-End API.
          </p>
        </div>
        <div>
          <h3>NimblePath</h3>
          <p>
            Full Stack. Currently working with a client to bring to life their
            SaaS. Front-End written in React. Back-End to be written in Java
            using the Spring framework.
          </p>
        </div>
        <div>
          <h3>GEARformation: Division 2</h3>
          <a target="_blank" href="https://gearformation.netlify.app/">
            LIVE
          </a>
          <p>
            This is a personal project. The information for the game was spread
            out over many sites or spreadsheets found online. My goal was to
            compile that information into one site to make the information
            easier to find. In the process of converting to React and creating a
            Java API for the backend. Languages: HTML and CSS.
          </p>
        </div>
      </div>
      <footer className={darkTheme ? "dark" : "light-header"}>
        <a
          className={darkTheme ? "dark" : "light-header"}
          target="_blank"
          href="https://icons8.com/icon/48127/hand"
        >
          Hand icon by Icons8
        </a>
        <a
          className={darkTheme ? "dark" : "light-header"}
          target="_blank"
          href="https://icons8.com/icon/XBJfETMfZHpS/light"
        >
          Light icon by Icons8
        </a>
        <a
          className={darkTheme ? "dark" : "light-header"}
          target="_blank"
          href="https://icons8.com/icon/44818/light-on"
        >
          Light On icon by Icons8
        </a>
        <a
          className={darkTheme ? "dark" : "light-header"}
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
