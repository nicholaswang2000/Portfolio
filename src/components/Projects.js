import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <h1
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "gray",
          color: "white",
          textShadow: "3px 4px 5px black",
          marginBottom: "50px",
        }}
      >
        Projects
      </h1>
      <Container>
        <Row>
          <Col sm={4}>
            <div class="flip-card">
              <div class="flip-card-inner">
                <Link to="/ios">
                  <img
                    src={require("./images/ios.png")}
                    alt="Professional Photo"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Link>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div class="flip-card">
              <div class="flip-card-inner">
                <Link to="/javascript">
                  <img
                    src={require("./images/javascript.png")}
                    alt="Professional Photo"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Link>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div class="flip-card">
              <div class="flip-card-inner">
                <Link to="/other">
                  <img
                    src={require("./images/other.png")}
                    alt="Professional Photo"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
