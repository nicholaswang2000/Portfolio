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
          Logo here
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
            <Nav.Link href="#about" style={{ paddingRight: "40px" }}>
              <AnchorLink href="#about" style={{ color: "white" }}>
                About
              </AnchorLink>
            </Nav.Link>
            <NavDropdown
              title="Projects"
              id="collasible-nav-dropdown"
              style={{ paddingRight: "40px", color: "white" }}
            >
              <NavDropdown.Item href="/ios">iOS</NavDropdown.Item>
              <NavDropdown.Item href="/javascript">Javascript</NavDropdown.Item>
              <NavDropdown.Item href="/other">Other</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <AnchorLink href="#projects" style={{ color: "black" }}>
                  Browse
                </AnchorLink>
              </NavDropdown.Item>
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
