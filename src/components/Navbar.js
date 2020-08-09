import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../App.css";

const NBar = () => {
  return (
    <div style={{ paddingTop: "1em", fontSize: "1.2em" }}>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/" style={{ paddingLeft: "150px" }}>
          <img
            src={require("./images/logo.png")}
            alt="Professional Photo"
            style={{ height: "40px", width: "auto" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ paddingRight: "180px" }}
        >
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/" style={{ paddingRight: "40px", color: "white" }}>
              Home
            </Nav.Link>
            <AnchorLink href="#about">
              <Nav.Link style={{ paddingRight: "40px", color: "white" }}>
                About
              </Nav.Link>
            </AnchorLink>
            <NavDropdown
              color="white"
              title={<span style={{ color: "white" }}>Projects</span>}
              style={{ paddingRight: "40px", color: "white" }}
            >
              <AnchorLink href="#ios" style={{ color: "black" }}>
                <NavDropdown.Item>iOS</NavDropdown.Item>
              </AnchorLink>
              <AnchorLink href="#javascript" style={{ color: "black" }}>
                <NavDropdown.Item>JavaScript</NavDropdown.Item>
              </AnchorLink>
              <AnchorLink href="#other" style={{ color: "black" }}>
                <NavDropdown.Item>Other</NavDropdown.Item>
              </AnchorLink>
              <NavDropdown.Divider />
              <AnchorLink href="#projects" style={{ color: "black" }}>
                <NavDropdown.Item>All</NavDropdown.Item>
              </AnchorLink>
            </NavDropdown>
            <Nav.Link href="/memes" style={{ color: "white" }}>
              Fun
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NBar;
