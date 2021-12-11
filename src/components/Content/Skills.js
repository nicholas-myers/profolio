import React from "react";

function Skills({ darkTheme }) {
  return (
    <section className={darkTheme ? "dark-hero hero" : "light-hero hero"}>
      <div>
        <h2>Skills</h2>
        <p>{`< HTML : XML >`}</p>
        <p>{`< React : Javascript >`}</p>
        <p>{`{ CSS : SASS : LESS }`}</p>
        <p>{`OOP = Java : C# : Python`}</p>
        <p>SQL : SSMS</p>
      </div>
      <div>
        <h2>Libraries</h2>
        <p>{`<Material UI>`}</p>
        <p>{`<Ant Design>`}</p>
        <p>{`<React Router>`}</p>
        <p>{`<React DatePicker>`}</p>
        <p>{`<Redux>`}</p>
        <p>{`<Axios>`}</p>
        <p>{`<Spring>`}</p>
      </div>
    </section>
  );
}

export default Skills;
