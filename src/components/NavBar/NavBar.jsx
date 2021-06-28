import React from "react";
import "./NavBar.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = (props) => {
  return (
    <Navbar
      className="
    navbar
    navbar-dark
    
    sticky-top
    navbar-expand-sm
    blue
    "
      collapseOnSelect
      expand="sm"
      variant="dark"
    >
      <Navbar.Brand href="/">Arnav Jain</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
