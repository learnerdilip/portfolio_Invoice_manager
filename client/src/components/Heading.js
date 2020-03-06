import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Heading() {
  return (
    <div>
      <Navbar bg="warning" variant="light">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Invoice and warranty manger
        </Navbar.Brand>
        <div className="loginsignupinnav">
          <Link to="/login">LOGIN</Link>
          <Link to="/signup">SIGNUP</Link>
        </div>
      </Navbar>
    </div>
  );
}
