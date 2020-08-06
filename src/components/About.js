import React from "react";

const AboutMe = () => {
  var ReactRotatingText = require("react-rotating-text");

  return (
    <div className="About">
      <span
        style={{
          paddingLeft: "200px",
          paddingTop: "100px",
          width: "60%",
          position: "absolute",
        }}
      >
        <h1 style={{ fontSize: "2em" }}>
          ABOUT ME -
          <ReactRotatingText
            items={[
              " Mobile Developer",
              " JavaScript Developer",
              " Speedcuber",
              " Minecraft Speedrunner",
              " OS / Systems Engineer",
              " Canadian 🇨🇦",
              " Pianist",
              " Avid Tweeter",
              " Ganondorf Main",
            ]}
          />
        </h1>

        <hr
          width="30%"
          color="black"
          style={{ paddingLeft: "100px", position: "absolute" }}
        />
        <br />
        <br />
        <p>
          Hi there! Thanks for stopping by my page. I'm currently a rising
          Junior (as of August 2020) studying Computer Science at UC Berkeley
          with a GPA of 3.83. I'm set to graduating in Fall 2021. <br />
          <br />I am looking for a Software Developer / Engineer role in the
          tech industry anywhere in the USA or Canada in order to help
          businesses work efficiently in terms of developing, testing,
          debugging, or engineering technical-related matters.
          <br />
          <br />I have experience in mobile and web dev, working with Swift,
          SwiftUI, React, and some React Native (expo). I'm part of the Mobile
          Developers of Berkeley club on campus that emphasises mobile dev
          education and mobile-related projects. Through past internships, I
          also have backend experience working with AWS, Neo4j, MongoDB, Django
          Rest Framework, and PostreSQL. I'd be open to discussing more
          specifics in person.
          <br />
          <br />
          Completed Courses:{" "}
          <i>
            Operating Systems, Efficient Algorithms, Data Structures,
            Information Systems, Blockchain Fundamentals, Techniques of Data
            Science
          </i>
        </p>
      </span>
      <span>
        <img
          src={require("./images/headshot.jpg")}
          alt="Professional Photo"
          className="imgyeet"
        />
      </span>
    </div>
  );
};

export default AboutMe;
