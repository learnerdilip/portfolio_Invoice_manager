import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendLogin } from "../../store/user/action";
import { Form, Button } from "react-bootstrap";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
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
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default LoginContainer;
