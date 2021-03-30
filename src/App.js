import React, { useState } from "react";

function App() {

  const rightHandedSocial = {
    right: 0,
  };

  const leftHandedSocial = {
    left: 0,
  }

  const leftHandedAccess = {
    justifyContent: "flex-start"
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

  const toggleHandPreference = () => {
    setHandPreference(!handPreference)
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
      <div className="hero">
        <h2>Skills</h2>
        <p>{`<HTML>`}</p>
        <p>{`<CSS>`}</p>
        <p>{`<JavaScript>`}</p>
        <p>{`<Java>`}</p>
        <p>{`<Python>`}</p>
        <p>{`<Spring>`}</p>
        <p>{`<Sass>`}</p>
        <p>{`<Less>`}</p>
        <p>{`<React>`}</p>
        <p>{`<Redux>`}</p>
        <p>{`<Material UI>`}</p>
        <p>{`<Ant Design>`}</p>
        <p>{`<Axios>`}</p>
        <p>{`<React Router DOM>`}</p>
      </div>
      <div className="hero">
        <h2>Projects</h2>
      </div>
      <footer>
      </footer>
    </div>
  );
}

export default App;
