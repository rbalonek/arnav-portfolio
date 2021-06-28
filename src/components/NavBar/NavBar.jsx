import React from "react";
import "./NavBar.css";
import { Nav, Navbar } from "react-bootstrap";

const NavBar = (props) => {
  return (
    <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
      <Navbar.Brand href="/">Arnav Jain</Navbar.Brand>

      <button
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="navbar-item">
            <a href="/engagement" class="nav-link">
              Engagement
            </a>
          </li>
          <li class="navbar-item">
            <a href="/leadership" class="nav-link">
              Leadership
            </a>
          </li>
          <li class="navbar-item">
            <a href="/workexperience" class="nav-link">
              Work Experience
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
