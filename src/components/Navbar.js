import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css";

const NBar = () => {
  return (
    <div style={{ paddingTop: "1em", fontSize: "1.2em" }}>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home" style={{ paddingLeft: "150px" }}>
          Logo here
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ paddingRight: "180px" }}
        >
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link
              href="#home"
              style={{ paddingRight: "40px", color: "white" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              style={{ paddingRight: "40px", color: "white" }}
            >
              About
            </Nav.Link>
            <NavDropdown
              title="Projects"
              id="collasible-nav-dropdown"
              style={{ paddingRight: "40px", color: "white" }}
            >
              <NavDropdown.Item href="#action/3.1">iOS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Javascript</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Other</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#memes" style={{ color: "white" }}>
              Fun
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NBar;
