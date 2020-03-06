import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Heading() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({
      type: "CLEAR_USER_DATA"
    });
  };

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
          <Link onClick={handleLogout} to="/">
            LOGOUT
          </Link>
          <Link to="/login">LOGIN</Link>
          <Link to="/signup">SIGNUP</Link>
        </div>
      </Navbar>
    </div>
  );
}
