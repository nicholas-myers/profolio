import Projects from "./Projects";
import Skills from "./Skills";

const Content = ({ darkTheme }) => {
  return (
    <div>
      <Skills darkTheme={darkTheme} />
      <Projects darkTheme={darkTheme} />
    </div>
  );
};

export default Content;
