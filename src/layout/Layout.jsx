import React from "react";
import NavBar from "../components/NavBar/NavBar";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="layout__container">
      <NavBar />
      <main>{props.children}</main>
    </div>
  );
}
