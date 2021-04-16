import React, { useState } from "react";
import Skills from "./components/Skills";

function App() {

  const [darkTheme, setDarkTheme] = useState(true)

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
      <header>
        <div>
          <div className="accessibility" style={leftHandedAccess}>
            <img
              onClick={toggleHandPreference}
              style={{ background: "#171b1b" }}
              src="https://img.icons8.com/nolan/64/hand.png"
            />
            <img src="https://img.icons8.com/nolan/64/light-on.png" />

            <img src="https://img.icons8.com/nolan/64/light.png" />
          </div>
          <div className="accessibility" style={rightHandedAccess}>
            <img src="https://img.icons8.com/nolan/64/light.png" />
            <img src="https://img.icons8.com/nolan/64/light-on.png" />

            <img
              onClick={toggleHandPreference}
              style={{ background: "#171b1b", transform: "scaleX(-1)" }}
              src="https://img.icons8.com/nolan/64/hand.png"
            />
          </div>
        </div>
        <div
          style={{
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1 className="title">Nicholas D Myers</h1>
          <h2 className="title">Full Stack Developer</h2>
        </div>
      </header>
      <div className="social-menu" style={rightHandedSocial}>
        <div>LinkedIn</div>
        <div>Github</div>
      </div>
      <div className="social-menu" style={leftHandedSocial}>
        <div>LinkedIn</div>
        <div>Github</div>
      </div>
      <Skills />
      <div className="hero">
        <h2>Projects</h2>
      </div>
      <footer>
        <a href="https://icons8.com/icon/48127/hand">Hand icon by Icons8</a>
        <a href="https://icons8.com/icon/XBJfETMfZHpS/light">
          Light icon by Icons8
        </a>
        <a href="https://icons8.com/icon/44818/light-on">Light On icon by Icons8</a>
      </footer>
    </div>
  );
}

export default App;
