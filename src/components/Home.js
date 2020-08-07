import React from "react";
import "../App.css";
import NBar from "./Navbar";
import BoxIntro from "./BoxIntro";
import AboutMe from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="App">
      <div className="Home">
        <NBar />
        <BoxIntro />
      </div>
      <div className="About" id="about">
        <AboutMe />
      </div>
      <div className="Projects" id="projects">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
