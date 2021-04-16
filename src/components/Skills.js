import React from "react";

function Skills({darkTheme}) {
  return (
    <div className={darkTheme ? "dark-hero hero" : "light-hero hero"}>
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
  );
}

export default Skills;
