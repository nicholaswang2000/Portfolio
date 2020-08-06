import React from "react";
import "./App.css";
import NBar from "./components/Navbar";
import BoxIntro from "./components/BoxIntro";
import AboutMe from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
