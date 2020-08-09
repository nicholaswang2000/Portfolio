import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarMemes = () => {
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

            <Nav.Link href="/memes" style={{ color: "white" }}>
              Fun
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMemes;
