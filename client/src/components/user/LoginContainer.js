import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendLogin } from "../../store/user/action";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const state = useSelector(reduxState => {
    return {
      userState: reduxState.user
    };
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setLoginData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(sendLogin(loginData));
    setLoginData({
      email: "",
      password: ""
    });
  };

  if (state.userState.token)
    return (
      <div className="loginhomeredirect">
        <h2>Welcome, You are Logged in!</h2>
        <Link to="/">GO TO HOME</Link>
      </div>
    );
  return (
    <div>
      <h2>Please Login here!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Label>EMAIL*</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={setLoginData.email}
          placeholder="Your email"
          onChange={handleChange}
        />
        <Form.Label>PASSWORD*</Form.Label>
        <Form.Control
          type="text"
          name="password"
          value={setLoginData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default LoginContainer;
