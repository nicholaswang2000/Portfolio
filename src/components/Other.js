import React, { Component } from "react";
import NBar from "./Navbar";
import Footer from "./Footer";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Other extends Component {
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
              Other Projects Showcase
            </h2>
            <Modal show={this.state.showWar}>
              <Modal.Body>
                <h4>4Chain</h4>A decentralized meme posting application that
                uses the Ethereum blockchain to track timestamps and hashes of
                meme images so that your memes are protected. Created with
                Truffle Fraemwork, Ganache, Solidity, and Metamask
              </Modal.Body>
              <Modal.Footer>
                <Button
                  onClick={() => this.closeWarModal()}
                  className="btn-secondary"
                >
                  Close
                </Button>
                <Link to="/4chainvisitgithub" target="_blank">
                  <Button
                    onClick={() => this.closeWarModal()}
                    className="btn-info"
                  >
                    Github
                  </Button>
                </Link>
              </Modal.Footer>
            </Modal>
            <Modal show={this.state.showCommuna}>
              <Modal.Body>
                <h4>PintOS</h4>An Operating System for x86 instruction set
                architecture supporting kernel threads, user programs, a fast
                file system, page replacement (with clock algorithm), and
                priority donations. Privated repository to prevent cheating.
                Developed with 162 skeleton code in C.
              </Modal.Body>
              <Modal.Footer>
                <Button
                  onClick={() => this.closeCommunaModal()}
                  className="btn-secondary"
                >
                  Close
                </Button>
                <Link to="/pintosmoreinfo" target="_blank">
                  <Button
                    onClick={() => this.closeCommunaModal()}
                    className="btn-info"
                  >
                    More Info
                  </Button>
                </Link>
              </Modal.Footer>
            </Modal>
            <Modal show={this.state.showSpongebobify}>
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
                  onClick={() => this.closeSpongebobifyModal()}
                  className="btn-secondary"
                >
                  Close
                </Button>
                <Link to="/data100github" target="_blank">
                  <Button
                    onClick={() => this.closeSpongebobifyModal()}
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
                      onClick={() => this.openWarModal()}
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
                      onClick={() => this.openCommunaModal()}
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

export default Other;
