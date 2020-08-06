import React from "react";
import { SocialIcon } from "react-social-icons";

const BoxIntro = () => {
  return (
    <div className="introDiv">
      <div className="introText">
        <p style={{ fontSize: "1.1em" }}>HELLO WORLD! MY NAME IS</p>
        <h1 style={{ fontSize: "4em" }}>Nicholas Wang</h1>
        <SocialIcon url="https://twitter.com/NickWangarang" />
      </div>
    </div>
  );
};

export default BoxIntro;
