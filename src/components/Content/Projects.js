const Projects = ({ darkTheme }) => {
  return (
    <section className={darkTheme ? "dark-hero hero" : "light-hero hero"}>
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
          I worked as part of a cross-functional team. The back-end is developed
          in the Java Spring framework. The Front-End uses React and Redux.
          Secured with Okta.
        </p>
      </div>
      <div>
        <h3>Conway's Game of Life</h3>
        <p>
          Solo Project. The visual representation of the mathematical simulation
          of cell lifecycles. I constructed the state management using the Immer
          library to create copies of an immutable state. I enacted an algorithm
          to follow the rules of Conway for simulation of cell lifecycles. I
          implemented the code base in the one-week release canvas time frame.
          Languages: React and Immer library.
        </p>
      </div>
      <div>
        <h3>Spotify Suggester</h3>
        <p>
          Get a list of suggested songs based off an initial song input. Created
          the User login security using JAVA Spring. Collaborated in a
          cross-functional team to deliver API endpoints in an Agile
          environment.
        </p>
      </div>
      <div>
        <h3>The Family Scrapbook</h3>
        <p>
          I worked on this website as part of a 3 person team. My responsibility
          was the "Start Here Page". I also helped in the design and
          implementation of the navigation and footer. This project was written
          in HTML and CSS.
        </p>
      </div>
      <div>
        <h3>Easy Dungeons</h3>
        <p>
          This is a personal project. A digital toolset for Dungeons and Dragons
          5E. Current tools, dice roller and intitiative tracker. Front-End is
          wrtten using React. Currently in the process of structuring the
          Back-End API.
        </p>
      </div>
      <div>
        <h3>NimblePath</h3>
        <p>
          Full Stack. Currently working with a client to bring to life their
          SaaS. Front-End written in React. Back-End to be written in Java using
          the Spring framework.
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
          compile that information into one site to make the information easier
          to find. In the process of converting to React and creating a Java API
          for the backend. Languages: HTML and CSS.
        </p>
      </div>
    </section>
  );
};

export default Projects;
