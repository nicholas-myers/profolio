import React, { useState } from "react"
// component imports
import AccessibilityOptions from "./components/AccessibilityOptions";
import SociaLinks from "./components/SocialLinks";
import Wing from "./components/Wing"

const App = () => {

  const [leftIsVisible, setLeftIsVisible] = useState(false)
  const [rightIsVisible, setRightIsVisible] = useState(true)

  const [theme, setTheme] = useState("Dark")

  const switchHands = () => {
    if (leftIsVisible) {
      setRightIsVisible(true)
      setLeftIsVisible(false)
    } else {
      setLeftIsVisible(true)
      setRightIsVisible(false)
    }
  }

  const toggleTheme = () => {
    if (theme === "Dark") {
      setTheme("Light")
    } else {
      setTheme("Dark")
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Nicholas D Myers</h1>
        <p>Husband. Father. Developer. Entrepreneur. Gamer. Writer. Beatboxer.</p>
      </header>
      <div role="main" className="content" aria-describedby="main-content">
        <section>
          <h2>About Me</h2>
        </section>
        <section>
          <h2>Skills</h2>
        </section>
        <section>
          <h2>Projects</h2>
        </section>
      </div>
      <footer>
        Credit picture links
      </footer>
      <Wing
        bottom
        left
        content={
          <AccessibilityOptions hand="Right" handClick={switchHands} theme={theme} themeClick={toggleTheme} />
        }
        visible={leftIsVisible}
      />
      <Wing bottom right content={<AccessibilityOptions hand="Left" handClick={switchHands} theme={theme} themeClick={toggleTheme} />} visible={rightIsVisible} />
      <Wing middle="65%" right content={<SociaLinks />} visible={rightIsVisible} />
      <Wing middle="65%" left content={<SociaLinks />} visible={leftIsVisible} />
    </div>
  );
}

export default App;
