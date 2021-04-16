import React from "react";

function Skills({darkTheme}) {
  return (
    <div className={darkTheme ? "dark-hero hero" : "light-hero hero"}>
      <h2>Skills</h2>
      <p>{`<HTML>`}</p>
      <p>{`<CSS>`}</p>
      <p>{`<Sass>`}</p>
      <p>{`<Less>`}</p>
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
    </div>
  );
}

export default Skills;
