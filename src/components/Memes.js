import React from "react";
import NBar from "./Navbar";
import { Carousel } from "react-bootstrap";

const Memes = () => {
  return (
    <div className="memes">
      <NBar />
      <div className="memeText">
        <h4>
          <br />
          Here's some of my best memes
        </h4>
        <br />
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("./images/memes/idk.jpg")}
              alt="First slide"
              style={{
                height: "400px",
                width: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("./images/memes/10year.jpg")}
              alt="First slide"
              style={{
                height: "auto",
                width: "80%",
                display: "block",
                marginTop: "7%",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("./images/memes/16b.jpg")}
              alt="First slide"
              style={{
                height: "400px",
                width: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("./images/memes/patrick.png")}
              alt="First slide"
              style={{
                height: "400px",
                width: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("./images/memes/thomas.png")}
              alt="First slide"
              style={{
                height: "400px",
                width: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("./images/memes/170saber.jpeg")}
              alt="First slide"
              style={{
                height: "400px",
                width: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("./images/memes/jim_meme.jpg")}
              alt="First slide"
              style={{
                height: "400px",
                width: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("./images/memes/ss.jpg")}
              alt="First slide"
              style={{
                height: "400px",
                width: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("./images/memes/piazza_time.jpeg")}
              alt="First slide"
              style={{
                height: "400px",
                width: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("./images/memes/hilfinger.png")}
              alt="First slide"
              style={{
                height: "400px",
                width: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("./images/memes/eecs.jpg")}
              alt="First slide"
              style={{
                height: "400px",
                width: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("./images/memes/litty.jpg")}
              alt="First slide"
              style={{
                height: "400px",
                width: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("./images/memes/it'sme.jpg")}
              alt="First slide"
              style={{
                height: "400px",
                width: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("./images/memes/16b_2.png")}
              alt="First slide"
              style={{
                height: "400px",
                width: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("./images/memes/16b_3.png")}
              alt="First slide"
              style={{
                height: "400px",
                width: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("./images/memes/eecsmeme.jpg")}
              alt="First slide"
              style={{
                height: "400px",
                width: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Memes;
