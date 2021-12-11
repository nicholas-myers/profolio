const Footer = ({ darkTheme }) => {
  return (
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
  );
};

export default Footer;
