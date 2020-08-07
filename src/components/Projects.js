import React, { Component } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import iOS from "./iOS";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      showHuddle: false,
      showIClass: false,
      showTC: false,
      showShame: false,
      showWar: false,
      showCommuna: false,
      showSpongebobify: false,
      show1: false,
      show2: false,
      show3: false,
    };
  }
  closeHModal() {
    this.setState({ showHuddle: false });
  }
  openHModal() {
    this.setState({ showHuddle: true });
  }
  closeTModal() {
    this.setState({ showTC: false });
  }
  openTModal() {
    this.setState({ showTC: true });
  }
  closeSModal() {
    this.setState({ showShame: false });
  }
  openSModal() {
    this.setState({ showShame: true });
  }
  closeIModal() {
    this.setState({ showIClass: false });
  }
  openIModal() {
    this.setState({ showIClass: true });
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
          Highlight Projects
        </h1>
        <div id="ios">
          <Modal
            show={this.state.showHuddle}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Body>
              <Container>
                <Row>
                  <Col sm={4}>
                    <img
                      src={require("./images/huddle.png")}
                      alt="Professional Photo"
                      style={{
                        width: "100%",
                        height: "auto",
                        cursor: "pointer",
                        borderRadius: "20px",
                      }}
                      onClick={() => this.openHModal()}
                    />
                  </Col>
                  <Col sm={8}>
                    <h4>Huddle</h4>
                    <br />
                    Huddle is an application that helps find students around you
                    in the same class for assignment collaboration. It is an iOS
                    project that marks our first application for our club, the
                    Mobile Developers of Berkeley. <br />
                    <br />
                    Developed with <li>Google Maps API</li>
                    <li>Firebase Real-Time Database</li>
                    <li>Firebase Storage</li>
                    <li>Firebase Authentication</li>
                    <li>Cocoapods</li>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() => this.closeHModal()}
                className="btn-secondary"
              >
                Close
              </Button>
              <Link to="/huddlevisitgithub" target="_blank">
                <Button onClick={() => this.closeHModal()} className="btn-info">
                  Github
                </Button>
              </Link>
            </Modal.Footer>
          </Modal>
          <Modal
            show={this.state.showIClass}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Body>
              <Container>
                <Row>
                  <Col sm={4}>
                    <img
                      src={require("./images/iclass.png")}
                      alt="Professional Photo"
                      style={{
                        width: "100%",
                        height: "auto",
                        cursor: "pointer",
                        borderRadius: "20px",
                      }}
                      onClick={() => this.openHModal()}
                    />
                  </Col>
                  <Col sm={8}>
                    <div>
                      <h4>iClass</h4>
                      <br />
                      iClass is an iOS simulator for the iClicker, letting
                      students interact with polls, questions, and attendance
                      through their mobile devices. It marked our final project
                      for the iOS class offered at UC Berkeley. <br />
                      <br />
                      Built with <li>Geolocation filtering cocoapods</li>
                      <li>Firebase Authentication</li>
                      <li>Firebase Firestore</li>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() => this.closeIModal()}
                className="btn-secondary"
              >
                Close
              </Button>
              <Link to="/iclassgithub" target="_blank">
                <Button onClick={() => this.closeIModal()} className="btn-info">
                  Github
                </Button>
              </Link>
              <Link to="/iclassdemo" target="_blank">
                <Button onClick={() => this.closeIModal()}>Demo</Button>
              </Link>
            </Modal.Footer>
          </Modal>
          <Modal
            show={this.state.showTC}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Body>
              <Container>
                <Row>
                  <Col sm={4}>
                    <img
                      src={require("./images/tc.png")}
                      alt="Professional Photo"
                      style={{
                        width: "100%",
                        height: "auto",
                        cursor: "pointer",
                        borderRadius: "20px",
                      }}
                      onClick={() => this.openHModal()}
                    />
                  </Col>
                  <Col sm={8}>
                    <h4>ThoughtCloud</h4>
                    <br />
                    Cross-platform application for educational growth. <br />
                    <br />
                    Developed with<li>Neo4j</li>
                    <li>Django Rest Framework</li>
                    <li>AWS</li>
                    <li>MongoDB</li>
                    <li>Firebase Authentication</li>
                    <li>Firebase Cloud Messaging</li>
                    <li>Remote Push Notifications</li>
                    <li>AgoraSDK</li>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() => this.closeTModal()}
                className="btn-secondary"
              >
                Close
              </Button>
              <Link to="/spongebobifyvisitgithub" target="_blank">
                <Button
                  onClick={() => this.closeTModal()}
                  className="btn-info"
                  disabled
                >
                  Private Github - Can discuss more in person
                </Button>
              </Link>
            </Modal.Footer>
          </Modal>
          <Modal
            show={this.state.showShame}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Body>
              <Container>
                <Row>
                  <Col sm={4}>
                    <img
                      src={require("./images/shame.png")}
                      alt="Professional Photo"
                      style={{
                        width: "100%",
                        height: "auto",
                        cursor: "pointer",
                        borderRadius: "20px",
                      }}
                      onClick={() => this.openHModal()}
                    />
                  </Col>
                  <Col sm={8}>
                    <h4>Shame Game</h4>
                    <br />
                    For Cal Hacks, we engineered an iOS application for users to
                    form groups to challenge each other not to leave the house.
                    It requires location tracking at all times, and has a global
                    'leaderboard' for shaming.
                    <br />
                    <br />
                    Built with<li>Google Maps API</li>
                    <li>Remote Push Notifications</li>
                    <li>Firebase Functions (Back-end)</li>
                    <li>Firebase Firestore</li>
                    <li>Firebase Authentication</li>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() => this.closeSModal()}
                className="btn-secondary"
              >
                Close
              </Button>
              <Link to="/shamegithub" target="_blank">
                <Button onClick={() => this.closeSModal()} className="btn-info">
                  Github
                </Button>
              </Link>
              <Link to="/shamevisit" target="_blank">
                <Button onClick={() => this.closeSModal()}>Devpost</Button>
              </Link>
            </Modal.Footer>
          </Modal>
          <h2
            style={{ textAlign: "center", width: "100%", marginBottom: "4%" }}
          >
            <br /> iOS
          </h2>
          <Container>
            <Row>
              <Col sm={3}>
                <div class="ios-card-inner">
                  <img
                    src={require("./images/huddle.png")}
                    alt="Professional Photo"
                    style={{
                      width: "100%",
                      height: "auto",
                      cursor: "pointer",
                      borderRadius: "20px",
                    }}
                    onClick={() => this.openHModal()}
                  />
                </div>
              </Col>
              <Col sm={3}>
                <div class="ios-card-inner">
                  <img
                    src={require("./images/iclass.png")}
                    alt="Professional Photo"
                    style={{
                      width: "100%",
                      height: "auto",
                      cursor: "pointer",
                      borderRadius: "20px",
                    }}
                    onClick={() => this.openIModal()}
                  />
                </div>
              </Col>
              <Col sm={3}>
                <div class="ios-card-inner">
                  <img
                    src={require("./images/tc.png")}
                    alt="Professional Photo"
                    style={{
                      width: "100%",
                      height: "auto",
                      cursor: "pointer",
                      borderRadius: "20px",
                    }}
                    onClick={() => this.openTModal()}
                  />
                </div>
              </Col>
              <Col sm={3}>
                <div class="ios-card-inner">
                  <img
                    src={require("./images/shame.png")}
                    alt="Professional Photo"
                    style={{
                      width: "100%",
                      height: "auto",
                      cursor: "pointer",
                      borderRadius: "20px",
                    }}
                    onClick={() => this.openSModal()}
                  />
                </div>
              </Col>
            </Row>
          </Container>
          <br /> <br />
          <hr width="90%" />
          <div id="javascript">
            <h2 style={{ marginBottom: "1.6em", textAlign: "center" }}>
              <br />
              JavaScript
            </h2>
            <Modal
              show={this.state.showWar}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Body>
                <Container>
                  <Row>
                    <Col sm={4}>
                      <img
                        src={require("./images/war.png")}
                        alt="Professional Photo"
                        style={{
                          width: "100%",
                          height: "auto",
                          cursor: "pointer",
                          borderRadius: "20px",
                        }}
                        onClick={() => this.openHModal()}
                      />
                    </Col>
                    <Col sm={8}>
                      <h4>War</h4>
                      <br />A quick war game that I created during quarantine
                      that simulates the card game "War". <br />
                      <br />
                      Made with <li>React.js</li>
                      <li>Deck of Cards API</li>
                      <li>Bootstrap</li>
                    </Col>
                  </Row>
                </Container>
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
            <Modal
              show={this.state.showCommuna}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Body>
                <Container>
                  <Row>
                    <Col sm={4}>
                      <img
                        src={require("./images/communa.png")}
                        alt="Professional Photo"
                        style={{
                          width: "100%",
                          height: "auto",
                          cursor: "pointer",
                          borderRadius: "20px",
                        }}
                        onClick={() => this.openHModal()}
                      />
                    </Col>
                    <Col sm={8}>
                      <h4>Communa</h4>
                      <br />A Chrome extension that allows you to play communist
                      music anywhere you like. Had up to 300 users. <br />
                      <br />
                      Built with <li>Chrome Web API</li>
                      <li>JavaScript Audio Player</li>
                    </Col>
                  </Row>
                </Container>
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
            <Modal
              show={this.state.showSpongebobify}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Body>
                <Container>
                  <Row>
                    <Col sm={4}>
                      <img
                        src={require("./images/spongebobify.png")}
                        alt="Professional Photo"
                        style={{
                          width: "100%",
                          height: "auto",
                          cursor: "pointer",
                          borderRadius: "20px",
                        }}
                        onClick={() => this.openHModal()}
                      />
                    </Col>
                    <Col sm={8}>
                      <h4>Spongebobify</h4>
                      <br />A Chrome extension that lets users easily
                      "spongebobify" text - the process of translating into a
                      series of uppercase and lowercase characters. <br />
                      <br />
                      Built with <li>Chrome Web API</li>
                      <li>HTML, CSS, JavaScript</li>
                      <li>Chrome contextMenus API</li>
                    </Col>
                  </Row>
                </Container>
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
              <Row>
                <Col sm={4}>
                  <div class="project-card-inner" style={{ marginLeft: "15%" }}>
                    <img
                      src={require("./images/war.png")}
                      alt="Professional Photo"
                      style={{
                        width: "100%",
                        height: "auto",
                        cursor: "pointer",
                        borderRadius: "20px",
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
                        borderRadius: "20px",
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
                        borderRadius: "20px",
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
        <div id="other">
          <h2 style={{ marginBottom: "1.6em", textAlign: "center" }}>
            <br />
            Other Projects
          </h2>
          <Modal
            show={this.state.show1}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Body>
              <Container>
                <Row>
                  <Col sm={4}>
                    <img
                      src={require("./images/4chain.png")}
                      alt="Professional Photo"
                      style={{
                        width: "100%",
                        height: "auto",
                        cursor: "pointer",
                        borderRadius: "20px",
                      }}
                      onClick={() => this.openHModal()}
                    />
                  </Col>
                  <Col sm={8}>
                    <h4>4Chain</h4>
                    <br />A decentralized meme posting application that uses the
                    Ethereum blockchain to track timestamps and hashes of meme
                    images so that your memes are protected. <br />
                    <br />
                    Created with <li>Truffle Fraemwork</li>
                    <li>Ganache</li>
                    <li>Solidity</li>
                    <li>Metamask</li>
                  </Col>
                </Row>
              </Container>
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
          <Modal
            show={this.state.show2}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Body>
              <Container>
                <Row>
                  <Col sm={4}>
                    <img
                      src={require("./images/pintOS.png")}
                      alt="Professional Photo"
                      style={{
                        width: "100%",
                        height: "auto",
                        cursor: "pointer",
                        borderRadius: "20px",
                      }}
                      onClick={() => this.openHModal()}
                    />
                  </Col>
                  <Col sm={8}>
                    <h4>PintOS</h4>
                    <br />
                    An Operating System for x86 instruction set architecture
                    supporting kernel threads, user programs, a fast file
                    system, page replacement (with clock algorithm), and
                    priority donations. Privated repository to prevent cheating.{" "}
                    <br />
                    <br />
                    Developed with 162 skeleton code in C.
                  </Col>
                </Row>
              </Container>
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
          <Modal
            show={this.state.show3}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Body>
              <Container>
                <Row>
                  <Col sm={4}>
                    <img
                      src={require("./images/data100.png")}
                      alt="Professional Photo"
                      style={{
                        width: "100%",
                        height: "auto",
                        cursor: "pointer",
                        borderRadius: "20px",
                      }}
                      onClick={() => this.openHModal()}
                    />
                  </Col>
                  <Col sm={8}>
                    <h4>Contraceptive Data Project</h4>
                    <br />
                    Our final project for data 100 was to analyze contraceptive
                    type relationships with other factors, such as number of
                    children, education level, annual income, etc. We used
                    random forests, as well as logistic and linear regressions
                    to most appropriately model the data. <br />
                    <br />
                    Created with <li>Pandas</li>
                    <li>Scikit learn</li>
                    <li>Seaborn</li>
                    <li>Numpy</li>
                    <li>PyTorch</li>
                  </Col>
                </Row>
              </Container>
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
                      borderRadius: "20px",
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
                      borderRadius: "20px",
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
                      borderRadius: "20px",
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
