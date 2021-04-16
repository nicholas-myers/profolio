import React, { useState } from "react";
import Skills from "./components/Skills"

function App() {

  const rightHandedSocialIn = {
    right: "-100px",
    transform: "translateX(-100px)",
    transition: "1s"
  };

  const rightHandedSocialOut = {
    right: "0",
    transform: "translateX(100px)",
    transition: "1s"
  };

  const [rightHandedSocial, setRightHandedSocial] = useState(rightHandedSocialIn)

  const leftHandedSocialIn = {
    left: "-100px",
    transform: "translateX(100px)",
    transition: "1s"
  }
  const leftHandedSocialOut = {
    left: "0",
    transform: "translateX(-100px)",
    transition: "1s"
  }

  const [leftHandedSocial, setLeftHandedSocial] = useState(leftHandedSocialOut)

  const leftHandedAccess = {
    justifyContent: "flex-start",
  }
  const rightHandedAccess = {
    justifyContent: "flex-end",
  }

  const leftHandedAccessReverse = {
    flexDirection: "row"
  }
  const rightHandedAccessReverse = {
    flexDirection: "row-reverse"
  }

  const [handPreference, setHandPreference] = useState(true)

  const [toggle, setToggle] = useState(true)

  const toggleHandPreference = () => {
    setToggle(!toggle)
    console.log("toggled")
    if (toggle === false) {
      setRightHandedSocial(rightHandedSocialIn)
      setLeftHandedSocial(leftHandedSocialOut)
    } else if (toggle === true) {
      setRightHandedSocial(rightHandedSocialOut)
      setLeftHandedSocial(leftHandedSocialIn)
    }
    // return setTimeout(setHandPreference(!handPreference), 3000)
  };
  
  return (
    <div className="App">
      <header>
        <div className="accessibility" style={handPreference ? rightHandedAccess : leftHandedAccess}>
          <div style={handPreference ? rightHandedAccessReverse : leftHandedAccessReverse}>
            <button onClick={toggleHandPreference}>Hand Preference</button>
            <button>Dark Mode</button>
          </div>
        </div>
        <div style={{height: "50vh", display: "flex", justifyContent: "center", flexDirection: "column"}}>
          <h1 className="title">Nicholas D Myers</h1>
          <h2 className="title">Full Stack Developer</h2>
        </div>
      </header>
      <div className="social-menu" style={handPreference ? rightHandedSocial : leftHandedSocial}>
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
      </footer>
    </div>
  );
}

export default App;
