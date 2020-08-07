import React, { Component } from "react";
import NBar from "./Navbar";
import Footer from "./Footer";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Other extends Component {
  constructor() {
    super();
    this.state = {
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
  render() {
    return (
      <React.Fragment>
        <div className="javascriptprojects">
          <NBar />
          <div className="javascriptshowcase">
            <h2 style={{ marginBottom: "1em" }}>
              <br />
              Other Projects Showcase
            </h2>
            <Modal show={this.state.show1}>
              <Modal.Body>
                <h4>4Chain</h4>A decentralized meme posting application that
                uses the Ethereum blockchain to track timestamps and hashes of
                meme images so that your memes are protected. Created with
                Truffle Fraemwork, Ganache, Solidity, and Metamask
              </Modal.Body>
              <Modal.Footer>
                <Button
                  onClick={() => this.close1Modal()}
                  className="btn-secondary"
                >
                  Close
                </Button>
                <Link to="/4chainvisitgithub" target="_blank">
                  <Button
                    onClick={() => this.close1Modal()}
                    className="btn-info"
                  >
                    Github
                  </Button>
                </Link>
              </Modal.Footer>
            </Modal>
            <Modal show={this.state.show2}>
              <Modal.Body>
                <h4>PintOS</h4>An Operating System for x86 instruction set
                architecture supporting kernel threads, user programs, a fast
                file system, page replacement (with clock algorithm), and
                priority donations. Privated repository to prevent cheating.
                Developed with 162 skeleton code in C.
              </Modal.Body>
              <Modal.Footer>
                <Button
                  onClick={() => this.close2Modal()}
                  className="btn-secondary"
                >
                  Close
                </Button>
                <Link to="/pintosmoreinfo" target="_blank">
                  <Button
                    onClick={() => this.close2Modal()}
                    className="btn-info"
                  >
                    More Info
                  </Button>
                </Link>
              </Modal.Footer>
            </Modal>
            <Modal show={this.state.show3}>
              <Modal.Body>
                <h4>Contraceptive Data Project</h4>Our final project for data
                100 was to analyze contraceptive type relationships with other
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
                  <Button
                    onClick={() => this.close3Modal()}
                    className="btn-info"
                  >
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default Other;
