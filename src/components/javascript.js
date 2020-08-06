import React, { Component } from "react";
import NBar from "./Navbar";
import Footer from "./Footer";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Javascript extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  closeModal() {
    this.setState({ show: false });
  }
  openModal() {
    this.setState({ show: true });
  }
  render() {
    return (
      <React.Fragment>
        <div className="javascriptprojects">
          <NBar />
          <div className="javascriptshowcase">
            <h2 style={{ marginBottom: "1em" }}>
              <br />
              JavaScript Showcase
            </h2>
            <Modal show={this.state.show}>
              <Modal.Header>Modal Header part</Modal.Header>
              <Modal.Body>Hi</Modal.Body>
              <Modal.Footer>
                <Button onClick={() => this.closeModal()}>Close</Button>
              </Modal.Footer>
            </Modal>
            <Container>
              <Row style={{ marginBottom: "3em" }}>
                <Col sm={4}>
                  <div class="project-card-inner" style={{ marginLeft: "15%" }}>
                    <img
                      src={require("./images/war.png")}
                      alt="Professional Photo"
                      style={{
                        width: "100%",
                        height: "auto",
                        cursor: "pointer",
                      }}
                      onClick={() => this.openModal()}
                    />
                  </div>
                </Col>
                <Col sm={4}>
                  <div class="project-card-inner" style={{ marginLeft: "8%" }}>
                    <img
                      src={require("./images/communa.png")}
                      alt="Professional Photo"
                      style={{
                        width: "100%",
                        height: "auto",
                        cursor: "pointer",
                      }}
                      onClick={() => this.openModal()}
                    />
                  </div>
                </Col>
                <Col sm={4}>
                  <div class="project-card-inner">
                    <img
                      src={require("./images/spongebobify.png")}
                      alt="Professional Photo"
                      style={{
                        width: "100%",
                        height: "auto",
                        cursor: "pointer",
                      }}
                      onClick={() => this.openModal()}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Javascript;
