import React, { Component } from "react";
import NBar from "./Navbar";
import Footer from "./Footer";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Javascript extends Component {
  constructor() {
    super();
    this.state = {
      showWar: false,
      showCommuna: false,
      showSpongebobify: false,
    };
  }
  closeWarModal() {
    this.setState({ showWar: false });
  }
  openWarModal() {
    this.setState({ showWar: true });
  }
  closeCommunaModal() {
    this.setState({ showCommuna: false });
  }
  openCommunaModal() {
    this.setState({ showCommuna: true });
  }
  closeSpongebobifyModal() {
    this.setState({ showSpongebobify: false });
  }
  openSpongebobifyModal() {
    this.setState({ showSpongebobify: true });
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
            <Modal show={this.state.showWar}>
              <Modal.Body>
                <h4>War</h4>A quick war game that I created during quarantine
                that simulates the card game "War". Made with React, Deck of
                Cards API, and Bootstrap
              </Modal.Body>
              <Modal.Footer>
                <Button
                  onClick={() => this.closeWarModal()}
                  className="btn-secondary"
                >
                  Close
                </Button>
                <Link to="/wargamevisitgithub" target="_blank">
                  <Button
                    onClick={() => this.closeWarModal()}
                    className="btn-info"
                  >
                    Github
                  </Button>
                </Link>
                <Link to="/wargamevisitsite" target="_blank">
                  <Button onClick={() => this.closeWarModal()}>Visit</Button>
                </Link>
              </Modal.Footer>
            </Modal>
            <Modal show={this.state.showCommuna}>
              <Modal.Body>
                <h4>Communa</h4>A Chrome extension that allows you to play
                communist music anywhere you like. Had up to 300 users. Built
                with Chrome's Javascript Web-dev APIs
              </Modal.Body>
              <Modal.Footer>
                <Button
                  onClick={() => this.closeCommunaModal()}
                  className="btn-secondary"
                >
                  Close
                </Button>
                <Link to="/communavisitgithub" target="_blank">
                  <Button
                    onClick={() => this.closeCommunaModal()}
                    className="btn-info"
                  >
                    Github
                  </Button>
                </Link>
                <Link to="/communavisitsite" target="_blank">
                  <Button onClick={() => this.closeCommunaModal()}>
                    Visit
                  </Button>
                </Link>
              </Modal.Footer>
            </Modal>
            <Modal show={this.state.showSpongebobify}>
              <Modal.Body>
                <h4>Spongebobify</h4>A Chrome extension that lets users easily
                "spongebobify" text - the process of translating into a series
                of uppercase and lowercase characters. Built with Chrome's
                Javascript Web-dev APIs
              </Modal.Body>
              <Modal.Footer>
                <Button
                  onClick={() => this.closeSpongebobifyModal()}
                  className="btn-secondary"
                >
                  Close
                </Button>
                <Link to="/spongebobifyvisitgithub" target="_blank">
                  <Button
                    onClick={() => this.closeSpongebobifyModal()}
                    className="btn-info"
                  >
                    Github
                  </Button>
                </Link>
                <Link to="/spongebobifyvisitsite" target="_blank">
                  <Button onClick={() => this.closeSpongebobifyModal()}>
                    Visit
                  </Button>
                </Link>
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
                      onClick={() => this.openWarModal()}
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
                      onClick={() => this.openCommunaModal()}
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
                      onClick={() => this.openSpongebobifyModal()}
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
