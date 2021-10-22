import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = ({ currentPage, handlePageChange }) => {
  return (
    <Router>
      <Navbar bg="black" className="px-3" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand>Leland Hayes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="float-to-right"
        ></Navbar.Collapse>
        <Nav bg="dark" className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
              onClick={() => handlePageChange("Home")}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={
                currentPage === "AboutMe" ? "active active-page-link" : "active"
              }
              onClick={() => handlePageChange("AboutMe")}
            >
              About Me
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={
                currentPage === "Work" ? "active active-page-link" : "active"
              }
              onClick={() => handlePageChange("Work")}
            >
              Work
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={
                currentPage === "Contact" ? "active active-page-link" : "active"
              }
              onClick={() => handlePageChange("Contact")}
            >
              Contact Me
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="active"
              href="assets/resume/Leland_Hayes_Resume (2).PDF"
              download
            >
              Resume
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </Router>
  );
};

export default NavBar;
