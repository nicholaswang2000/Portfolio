import React from "react";
import NBar from "./Navbar";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const iOS = () => {
  return (
    <React.Fragment>
      <div className="iosprojects">
        <NBar />
        <div className="iosshowcase">
          <h2 style={{ marginBottom: "1em" }}>
            <br /> iOS Showcase
          </h2>
          <Container>
            <Row style={{ marginBottom: "3em" }}>
              <Col sm={6}>
                <div class="ios-card-inner" style={{ marginLeft: "15%" }}>
                  <Link to="/ios">
                    <img
                      src={require("./images/huddle.png")}
                      alt="Professional Photo"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </Link>
                </div>
              </Col>
              <Col sm={6}>
                <div class="ios-card-inner">
                  <Link to="/javascript">
                    <img
                      src={require("./images/iclass.png")}
                      alt="Professional Photo"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <div class="ios-card-inner" style={{ marginLeft: "15%" }}>
                  <Link to="/other">
                    <img
                      src={require("./images/tc.png")}
                      alt="Professional Photo"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Link>
                </div>
              </Col>
              <Col sm={6}>
                <div class="ios-card-inner">
                  <Link to="/javascript">
                    <img
                      src={require("./images/shame.png")}
                      alt="Professional Photo"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default iOS;
