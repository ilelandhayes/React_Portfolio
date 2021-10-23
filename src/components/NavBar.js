import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./styles/NavBar.css";

const NavBar = ({ currentPage, handlePageChange }) => {
  return (
    <Router>
      <Container className="justify-content-center">
      <Navbar className="justify-content-center px-3" variant="dark" expand="lg" sticky="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          // id="basic-navbar-nav"
          // // className="float-to-right"
        ></Navbar.Collapse>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item className="justify-content-center">
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
      </Container>
    </Router>
  );
};

export default NavBar;
