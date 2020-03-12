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
          <i class="fa fa-archive"></i>
          <b style={{ fontFamily: "Monoton" }}>INVOICE AND WARRANTY MANAGER</b>
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
