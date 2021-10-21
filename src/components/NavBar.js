import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "react-bulma-components/lib/components/navbar";

const NavBar = ({ currentPage, handlePageChange }) => {
  return (
    <ul>
       <li>
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#work"
          onClick={() => handlePageChange("Work")}
          className={currentPage === "Work" ? "nav-link active" : "nav-link"}
        >
          Work
        </a>
      </li>
      <li>
        <a
          href="#aboutme"
          onClick={() => handlePageChange("AboutMe")}
          className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li>
        <a
          className="active"
          href="https://github.com/ilelandhayes"
          target="_blank"
        >
          Github
        </a>
      </li>
      <li>
        <a
          className="active"
          href=""
          download
        >
          Resume
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
