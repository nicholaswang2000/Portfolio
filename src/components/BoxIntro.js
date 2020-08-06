import React from "react";
import { SocialIcon } from "react-social-icons";

const BoxIntro = () => {
  return (
    <div className="introDiv">
      <div className="introText">
        <p style={{ fontSize: "1.1em" }}>HELLO WORLD! MY NAME IS</p>
        <h1 style={{ fontSize: "4em" }}>Nicholas Wang</h1>
        <hr width={"70%"} color={"white"} />
        <div style={{ paddingBottom: "10px" }}>
          <SocialIcon
            url="https://github.com/nicholaswang2000"
            style={{ marginRight: "20px" }}
          />
          <SocialIcon
            url="https://linkedin.com/in/nicholaswang0/"
            style={{ marginRight: "20px" }}
          />
          <SocialIcon
            url="https://twitter.com/NickWangarang"
            style={{ marginRight: "20px" }}
          />
          <SocialIcon
            url="https://youtube.com/channel/UCEo3NiNZccD5ayG4-x-QEgw"
            style={{ marginRight: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BoxIntro;
