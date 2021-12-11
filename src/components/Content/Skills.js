import React from "react";

function Skills({ darkTheme }) {
  return (
    <section className={darkTheme ? "dark-hero hero" : "light-hero hero"}>
      <h2>Skills</h2>
      <p>{`< HTML : XML : REACT >`}</p>
      <p>{`{ CSS : SASS : LESS }`}</p>
      <h2>Libraries</h2>
      <p>{`<Material UI>`}</p>
      <p>{`<Ant Design>`}</p>
      <p>{`<JavaScript>`}</p>
      <p>{`<React>`}</p>
      <p>{`<React Router>`}</p>
      <p>{`<React DatePicker>`}</p>
      <p>{`<Redux>`}</p>
      <p>{`<Axios>`}</p>
      <p>{`<Java>`}</p>
      <p>{`<Spring>`}</p>
      <p>{`<Python>`}</p>
      <p>{`<OOP>`}</p>
    </section>
  );
}

export default Skills;
