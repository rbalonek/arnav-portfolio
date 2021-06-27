import React from "react";
import NavBar from "../components/NavBar/NavBar";

export default function Layout(props) {
  return (
    <div>
      <NavBar />
      <main>{props.children}</main>
    </div>
  );
}