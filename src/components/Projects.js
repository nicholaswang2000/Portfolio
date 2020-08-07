import React, { Component } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import iOS from "./iOS";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      showWar: false,
      showCommuna: false,
      showSpongebobify: false,
      show1: false,
      show2: false,
      show3: false,
    };
  }
  close1Modal() {
    this.setState({ show1: false });
  }
  open1Modal() {
    this.setState({ show1: true });
  }
  close2Modal() {
    this.setState({ show2: false });
  }
  open2Modal() {
    this.setState({ show2: true });
  }
  close3Modal() {
    this.setState({ show3: false });
  }
  open3Modal() {
    this.setState({ show3: true });
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
      <div>
        <h1
          style={{
            padding: "20px",
            textAlign: "center",
            backgroundColor: "gray",
            color: "white",
            textShadow: "3px 4px 5px black",
          }}
        >
          Projects
        </h1>
        <div>
          <h2
            style={{ textAlign: "center", width: "100%", marginBottom: "4%" }}
          >
            <br /> iOS
          </h2>
          <Container>
            <Row>
              <Col sm={3}>
                <div class="ios-card-inner">
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
              <Col sm={3}>
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
              <Col sm={3}>
                <div class="ios-card-inner">
                  <Link to="/other">
                    <img
                      src={require("./images/tc.png")}
                      alt="Professional Photo"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Link>
                </div>
              </Col>
              <Col sm={3}>
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
          <br /> <br />
          <hr width="90%" />
          <div>
            <h2 style={{ marginBottom: "1.6em", textAlign: "center" }}>
              <br />
              JavaScript
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
        <br /> <br />
        <hr width="90%" />
        <div>
          <h2 style={{ marginBottom: "1.6em", textAlign: "center" }}>
            <br />
            Other Projects Showcase
          </h2>
          <Modal show={this.state.show1}>
            <Modal.Body>
              <h4>4Chain</h4>A decentralized meme posting application that uses
              the Ethereum blockchain to track timestamps and hashes of meme
              images so that your memes are protected. Created with Truffle
              Fraemwork, Ganache, Solidity, and Metamask
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() => this.close1Modal()}
                className="btn-secondary"
              >
                Close
              </Button>
              <Link to="/4chainvisitgithub" target="_blank">
                <Button onClick={() => this.close1Modal()} className="btn-info">
                  Github
                </Button>
              </Link>
            </Modal.Footer>
          </Modal>
          <Modal show={this.state.show2}>
            <Modal.Body>
              <h4>PintOS</h4>An Operating System for x86 instruction set
              architecture supporting kernel threads, user programs, a fast file
              system, page replacement (with clock algorithm), and priority
              donations. Privated repository to prevent cheating. Developed with
              162 skeleton code in C.
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() => this.close2Modal()}
                className="btn-secondary"
              >
                Close
              </Button>
              <Link to="/pintosmoreinfo" target="_blank">
                <Button onClick={() => this.close2Modal()} className="btn-info">
                  More Info
                </Button>
              </Link>
            </Modal.Footer>
          </Modal>
          <Modal show={this.state.show3}>
            <Modal.Body>
              <h4>Contraceptive Data Project</h4>Our final project for data 100
              was to analyze contraceptive type relationships with other
              factors, such as number of children, education level, annual
              income, etc. We used random forests, as well as logistic and
              linear regressions to most appropriately model the data. Created
              with pandas, scikit learn, seaborn, numpy, and pytorch
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() => this.close3Modal()}
                className="btn-secondary"
              >
                Close
              </Button>
              <Link to="/data100github" target="_blank">
                <Button onClick={() => this.close3Modal()} className="btn-info">
                  Github
                </Button>
              </Link>
            </Modal.Footer>
          </Modal>
          <Container>
            <Row style={{ marginBottom: "3em" }}>
              <Col sm={4}>
                <div class="project-card-inner" style={{ marginLeft: "15%" }}>
                  <img
                    src={require("./images/4chain.png")}
                    alt="Professional Photo"
                    style={{
                      width: "100%",
                      height: "auto",
                      cursor: "pointer",
                    }}
                    onClick={() => this.open1Modal()}
                  />
                </div>
              </Col>
              <Col sm={4}>
                <div class="project-card-inner" style={{ marginLeft: "8%" }}>
                  <img
                    src={require("./images/pintOS.png")}
                    alt="Professional Photo"
                    style={{
                      width: "100%",
                      height: "auto",
                      cursor: "pointer",
                    }}
                    onClick={() => this.open2Modal()}
                  />
                </div>
              </Col>
              <Col sm={4}>
                <div class="project-card-inner">
                  <img
                    src={require("./images/data100.png")}
                    alt="Professional Photo"
                    style={{
                      width: "100%",
                      height: "auto",
                      cursor: "pointer",
                    }}
                    onClick={() => this.open3Modal()}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Projects;
