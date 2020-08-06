import React from "react";
import "./App.css";
import NBar from "./components/Navbar";
import BoxIntro from "./components/BoxIntro";
import AboutMe from "./components/About";
import Projects from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="Home">
        <NBar />
        <BoxIntro />
      </div>
      <div className="About">
        <AboutMe />
      </div>
      <div className="Projects">
        <Projects />
      </div>
    </div>
  );
}

export default App;
