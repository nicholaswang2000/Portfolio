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
              <Col sm={4}>
                <div class="project-card-inner" style={{ marginLeft: "15%" }}>
                  <Link to="/ios">
                    <img
                      src={require("./images/ios.png")}
                      alt="Professional Photo"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </Link>
                </div>
              </Col>
              <Col sm={4}>
                <div class="project-card-inner" style={{ marginLeft: "8%" }}>
                  <Link to="/javascript">
                    <img
                      src={require("./images/javascript.png")}
                      alt="Professional Photo"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Link>
                </div>
              </Col>
              <Col sm={4}>
                <div class="project-card-inner">
                  <Link to="/other">
                    <img
                      src={require("./images/other.png")}
                      alt="Professional Photo"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <div class="project-card-inner" style={{ marginLeft: "15%" }}>
                  <Link to="/ios">
                    <img
                      src={require("./images/ios.png")}
                      alt="Professional Photo"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </Link>
                </div>
              </Col>
              <Col sm={4}>
                <div class="project-card-inner" style={{ marginLeft: "8%" }}>
                  <Link to="/javascript">
                    <img
                      src={require("./images/javascript.png")}
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
