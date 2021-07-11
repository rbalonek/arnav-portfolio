import React from "react";
import "./NavBar.css";
import { Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar
      className="
    navbar
    navbar-dark
    
    sticky-top
    navbar-expand-md
    blue
    "
      collapseOnSelect
      expand="md"
      variant="dark"
    >
      <Navbar.Brand style={{ fontSize: "35px" }} href="/#">
        Arnav Jain
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <ul class="navbar-nav">
          <li
            style={{
              fontSize: "15px",
              position: "absolute",
              top: "20px",
              left: "200px",
            }}
            class="nav-item active"
          >
            <a class="nav-link" href="/#">
              408 816 4119
            </a>
          </li>
          <li
            style={{
              fontSize: "15px",
              position: "absolute",
              top: "40px",
              left: "200px",
            }}
            class="nav-item active"
          >
            <a class="nav-link" href="#">
              Arnav.jain@yahoo.com
            </a>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="navbar-item ">
            <a href="#social-impact" class="nav-link">
              Social Impact
            </a>
          </li>

          <li className="navbar-item">
            <a href="/#academic" className="nav-link">
              Academics
            </a>
          </li>
          <li class="navbar-item">
            <a href="#leadership" class="nav-link">
              Leadership
            </a>
          </li>

          <li class="navbar-item">
            <a href="#awards" class="nav-link">
              Awards
            </a>
          </li>

          <li class="navbar-item">
            <a href="#research" class="nav-link">
              Research
            </a>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
