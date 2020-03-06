import React from "react";
import { Navbar } from "react-bootstrap";

export default function Footer() {
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
          The footer
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
